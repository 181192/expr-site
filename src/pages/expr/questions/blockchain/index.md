---
path: "/questions/blockchain"
date: "2018-12-03"
title: "Blockchain Questions"
author: "Kristoffer-Andre Kalliainen, Vegard Guttormsen and Preben Haukebøe"
draft: false
tags: "questions"
ogKeywords: "blockchain questions"
ogDescription: "Blockchain Questions"
---

## How is a payment carried out in the Bitcoin network?
The bitcoin network is based on blocks. Blocks are discovered by attempting to solve complex mathematical problems using huge computational resources.

Once a block is “discovered”, the block is validated by consensus of peers in the network. They will adopt the new block.

The node that discovers the block will get a reward, but it will also be allowed to fill the block with transactions. All transactions will need to be validated by tracing the origin of all the earlier bitcoin transactions.

The discoverer will stand to gain to have a valid block, if it gets rejected, it will not get the block reward from the blockchain. Once a block is signed and adopted, it will be “set in stone”. 


If you want to do a transaction, you have to decide which amount to 
send, and who to send it to. 
 
You must have a unspent transaction of at least that size, or you might need to make two transactions. It’s possible to get change.

You must input the address of the wallet you want to send the Bitcoin to, and sign it with your private key.

It might take a long time before the transaction will be carried out, as you need to wait to get your transaction included in a discovered block.

## What is distributed consensus?
Bitcoin is completely ground breaking in the way that it has an effective system of distributed consensus.

In order to poison the blockchain, you must control at least 50% of the nodes. 

This represents a huge amount of computational power, but it will be easily possible to attain with smaller currencies, if big organisations would switch to mining that coin for a small while.


However, you stand to gain from being honest. 

If you discover a new valid block, if you attempt to fill it with malicious transactions, it will get rejected from the rest of the network, and you will be financially disincentivized to do so. 

In comparison, with other types of verification, you need a trusted party, an intermediate who vouches for the validity of something. 

In example a CA validating an SSL cert, your bank approving your transactions, or the Norwegian government vouching for the authenticity of a passport.


Now a big group of people have to attain a consensus. 

This is not new, and by itself having a financial incentive for being honest will not guarantee you from dishonest behaviour, but it works in practice.
## What is known as the biggest risk of distributed consensus?

## What is a blockchain?
A blockchain is a chain of blocks. 

You can perhaps think of it as a linked list of data.
A block is an array of transactions. 

The first transaction has no proper sender, it is awarded from the blockchain to whatever wallet you like, if you discovered the block. 
The rest are transactions you wish to include. 

The transactions must be properly signed by the respective senders and can thus not be made up. The authenticity of this is verified by by consensus of peers in the network. 

Bitcoin is anonymous, yes, but at the same time completely transparent. In order to verify that a transaction is valid you must follow pointers to an older block and location where the bitcoin was earlier transacted.


This list is huge. Therefore a simplified “UTXO”, unspent transactions outputs list is provided by the network. If the transaction is in this list, it can be spent in a new transaction. 
The blocks are of course distributed by a P2P protocol and are completely decentralised.
## What is scripts and smart contracts?
Bitcoin has it’s own simple scripting language, simply called Script. It’s a stack based language with no loops.
It’s used for transactions, and must contain at minimum a pub key that leads to the wallet ID of the recipient, 
and must be signed by ta private key that proves that you are the one who generated this pub key. 

Smart contracts are variations of scripts, that can be used to do stuff other than to perform transactions. 
Think “If this, then that”, with the final result being the bitcoin becoming available for the recipient.
If a smart contract is signed, the transaction will be carried out whenever the parameters are met. It can be anything, at a certain time or when other parameters are met.

There are examples in the material provided that gives ideas of selling things like cars and houses without the need for a broker such as a bank.
## How does blockchain scale and how fast is it?
Bitcoin has in total 21M discoverable coins, and the network is made so that the more coins are discovered, the more effort is needed in order to discover a new block. The algorithm gets harder.


Thus, at some point, the capital cost of hardware and electricity will surpass the market value of what is generated. 

As we are now at under 4k USD per coin, this point is probably already here, at the very least for home miners. 
Power needed in order to carry out one transaction will dramatically increase, and also the transaction time will increase if computational power is not added to the network proportionally.
## What applications / use cases is there for blockchain?
As a fiat digital currency (Cons, bad scaling, pros no intermediate, web of trust that works, anonymous, not controllable by any actor).
With smart contracts, facilitating agreements where all the nodes are witnesses, and will be fulfilled if the requirements are met.

## Supply chain management: 
Blockchain coins can easily be traced, and thus can be traced back to it’s origins easily. This can aid to combat corruption and bad ethics.

## Digital identity 
You can have a digitally signed identity that is verified by consensus. 

Other: Patient information, electrical market

## What are inputs and outputs?

## What are transactions, signing, validation?

## What is private key, public key, address and signature?

## What is hashing used for?

## What is the UTXO-set?

## What is mining, nonce and "target"?

## What is the difference between PoW and PoS?

## What is the consequence if a block on the chain is altered after it's been added?

- - - -