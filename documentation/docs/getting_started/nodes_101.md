---
description: The IOTA network is a distributed type of network called Tangle. The network is distributed among plenty of servers called nodes which are the backbone of the IOTA network. 
image: /img/logo/bee_logo.png
keywords:
- nodes
- messages
- Tangle
- database
- IOTA Network
- explanation
---
# Nodes 101

The IOTA network is a distributed type of network called the Tangle. The network is distributed among multiple servers
called nodes, and nodes are the backbone of an IOTA network. In this article, you will learn what nodes do in an IOTA network.

Nodes are responsible for:

- Providing an API to interact with the Tangle/IOTA network.
- Validating [messages](https://chrysalis.docs.iota.org/guides/dev_guide#messages-payloads-and-transactions) and ledger mutations for consistency.
- Providing data for other nodes to synchronize to the latest state of the network.

## Attaching New Messages to the Tangle

A _message_ is a data structure that is actually being broadcast in the IOTA network and represents a vertex in the
Tangle graph. When nodes receive a new message, they attach it to the Tangle by adding the message to their local database. For the definition of a message, take a look at the [Messages, payloads, and transactions guide](https://wiki.iota.org/chrysalis-docs/guides/developer#messages-payloads-and-transactions) in the [Chrysalis documentation](https://wiki.iota.org/chrysalis-docs/welcome).

As a result, at any point in time, all nodes may have different messages in their local databases. These messages make up a node's view of the Tangle.

To distribute the messages across the rest of the network, nodes synchronize their local databases with their neighbors.

## Synchronizing With the Rest of the Network

Like any distributed system, nodes in an IOTA network synchronize their databases with other nodes called neighbors to form a single source of truth.

When one node, no matter where it is in the world, receives a message, it will try to _gossip_ it to all its neighbors. This way, all the nodes will eventually see all the messages and store them in their local databases.

To synchronize, nodes in IOTA networks use milestones. If the node has the history of messages that a milestone references, that milestone is solid. Therefore, nodes know if they are synchronized if the index of their latest solid milestone is the same as the index of the latest milestone that it has received.

When a node is synchronized, it then has enough information to decide which transactions it considers confirmed.

## Deciding Which Messages Are Confirmed

All messages remain in a pending state until the node is sure of their validity. 

Even when a message is valid, there are situations in which nodes may not be able to make a decision, like in the case of a double spend.

When nodes detect double spends, they must decide which message to consider confirmed and which one to ignore. Nodes do this by using consensus rules that are built into their node software using a network protocol.

## Keeping a Record of the Balances on Addresses Via `UTXO`

All nodes keep a record of the [Unspent Transaction Outputs (UTXO)](https://wiki.iota.org/chrysalis-docs/guides/developer#unspent-transaction-output-utxo) so they can do the following:

* Check that a transaction is not transferring more IOTA tokens than are available on the address.
* Respond to clients' requests for their balance.
* Once the node has confirmed a transaction with the Tangle, update the node's record of balances. 

## Exposing APIs for Clients

Nodes come with two set of low-level APIs:

* [HTTP Rest API](#http-rest-api).
* [Event API](#event-api).

:::info
You do not need to communicate with nodes using the mentioned low-level API. You can leverage the [iota client libraries](https://wiki.iota.org/chrysalis-docs/libraries/overview) that provide a high-level abstraction to all features IOTA nodes provide, either on HTTP API level or Event API level.
:::

### HTTP Rest API

The HTTP API allows clients to interact with the Tangle and ask nodes to do the following:

* Get tip messages.
* Attach new messages to the Tangle.
* Do Proof of Work (POW).
* Get messages from the Tangle.

### Event API

The Event API allows clients to poll nodes for new messages and other events that happen on nodes. This type of API is useful for building applications such as custodial wallets that need to monitor the Tangle for updates to the balances of certain addresses.
