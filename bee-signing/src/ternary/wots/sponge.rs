// Copyright 2020-2021 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

use crate::ternary::{
    wots::{Error as WotsError, WotsPrivateKey, WotsSecurityLevel},
    PrivateKeyGenerator, SIGNATURE_FRAGMENT_LENGTH,
};

use bee_crypto::ternary::{sponge::Sponge, HASH_LENGTH};
use bee_ternary::{Btrit, T1B1Buf, TritBuf, Trits, T1B1};

use std::marker::PhantomData;

/// Sponge-based Winternitz One Time Signature private key generator builder.
#[derive(Default)]
#[must_use]
pub struct WotsSpongePrivateKeyGeneratorBuilder<S> {
    security_level: Option<WotsSecurityLevel>,
    marker: PhantomData<S>,
}

impl<S: Sponge + Default> WotsSpongePrivateKeyGeneratorBuilder<S> {
    /// Sets the security level of the private key.
    pub fn with_security_level(mut self, security_level: WotsSecurityLevel) -> Self {
        self.security_level.replace(security_level);
        self
    }

    /// Builds the private key generator.
    pub fn build(self) -> Result<WotsSpongePrivateKeyGenerator<S>, WotsError> {
        Ok(WotsSpongePrivateKeyGenerator {
            security_level: self.security_level.ok_or(WotsError::MissingSecurityLevel)?,
            marker: PhantomData,
        })
    }
}

/// Sponge-based Winternitz One Time Signature private key generator.
pub struct WotsSpongePrivateKeyGenerator<S> {
    security_level: WotsSecurityLevel,
    marker: PhantomData<S>,
}

impl<S: Sponge + Default> PrivateKeyGenerator for WotsSpongePrivateKeyGenerator<S> {
    type PrivateKey = WotsPrivateKey<S>;
    type Error = WotsError;

    /// Derives a private key from entropy using the provided ternary sponge construction.
    /// The entropy must be a slice of exactly 243 trits where the last trit is zero.
    //
    /// Deprecated: only generates secure keys for sponge constructions, but Kerl is not a true sponge construction.
    /// Consider using shake instead or sponge with Curl. In case that Kerl must be used in sponge, it must be assured
    /// that no chunk of the private key is ever revealed, as this would allow the reconstruction of successive chunks
    /// (also known as "M-bug").
    /// Provides compatibility to the currently used key derivation.
    fn generate_from_entropy(&self, entropy: &Trits<T1B1>) -> Result<Self::PrivateKey, Self::Error> {
        if entropy.len() != HASH_LENGTH {
            return Err(WotsError::InvalidEntropyLength(entropy.len()));
        }

        // This should only be checked if `Sponge` is `Kerl` but we are currently limited by the lack of specialization.
        if entropy[HASH_LENGTH - 1] != Btrit::Zero {
            return Err(WotsError::NonNullEntropyLastTrit);
        }

        let mut sponge = S::default();
        let mut state = TritBuf::<T1B1Buf>::zeros(self.security_level as usize * SIGNATURE_FRAGMENT_LENGTH);

        sponge
            .digest_into(entropy, &mut state)
            .map_err(|_| Self::Error::FailedSpongeOperation)?;

        Ok(Self::PrivateKey {
            state,
            marker: PhantomData,
        })
    }
}
