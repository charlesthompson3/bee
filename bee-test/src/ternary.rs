// Copyright 2020-2021 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// Workaround for cargo/rustc unused warning bug
#![allow(dead_code)]

use bee_ternary::*;

use rand::prelude::*;

use std::ops::Range;

/// Generates a random balanced i8 trit.
pub fn gen_trit_balanced() -> i8 {
    (thread_rng().gen::<u8>() % 3) as i8 - 1
}

/// Generates a random unbalanced i8 trit.
pub fn gen_trit_unbalanced() -> i8 {
    (thread_rng().gen::<u8>() % 3) as i8
}

/// Generates a buffer of balanced trits.
pub fn gen_buf_balanced<T: raw::RawEncodingBuf>(len: Range<usize>) -> (TritBuf<T>, Vec<i8>) {
    let len = thread_rng().gen_range(len.start..len.end);
    let trits = (0..len).map(|_| gen_trit_balanced()).collect::<Vec<_>>();
    (
        trits
            .iter()
            .map(|t| <T::Slice as raw::RawEncoding>::Trit::try_from(*t).ok().unwrap())
            .collect(),
        trits,
    )
}

/// Generates a buffer of unbalanced trits.
pub fn gen_buf_unbalanced<T: raw::RawEncodingBuf>(len: Range<usize>) -> (TritBuf<T>, Vec<i8>) {
    let len = thread_rng().gen_range(len.start..len.end);
    let trits = (0..len).map(|_| gen_trit_unbalanced()).collect::<Vec<_>>();
    (
        trits
            .iter()
            .map(|t| <T::Slice as raw::RawEncoding>::Trit::try_from(*t).ok().unwrap())
            .collect(),
        trits,
    )
}

/// Not exactly fuzzing, just doing something a lot
pub fn fuzz(n: usize, mut f: impl FnMut()) {
    (0..n).for_each(|_| f());
}
