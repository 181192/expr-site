---
path: "/questions/cryptography"
date: "2018-11-23"
title: "Cryptography Questions"
author: "Kristoffer-Andre Kalliainen"
draft: false
tags: "questions"
ogKeywords: "cryptography questions"
ogDescription: "Cryptography Questions"
---

## Classical Cryptography

1.  An example of a monoalphabetic cipher is:

> - Shiftcipher
> - Hill cipher
> - Vigenere cipher

2.  Two conditions must hold to find the multiplicative inverse of an integer modulo another integer:

> - The gcd of the integer and the modulo integer must be invertible
> - The gcd of the integer and the modulo integer must be equal to one
> - The gcd of the integer and the modulo integer must be equal to zero

3.  The main purpose of using a poly alphabetic cipher is to:

> - Hide the statistical property of the plaintext letters
> - Increase the number of letters in the ciphertext
> - Defeat brute force attack

4.  Hill cipheris:

> - An Asymmetric cipher
> - A Symmetric cipher
> - A Hash function

5.  Cyptography can be directly linked to all of these core security properties except:

> - Confidentiality
> - Integrity
> - Availability
> - Authenticity

## Symmetric Cryptography

1. The basic elements of a sound cryptography are:

> - Diffusion, Key secrecy and Confusion
> - Encryption, Key secrecy and confusion
> - Encryption, decryption and keysecrecy

2. In a blockcipher:

> - Messages are encryptedat once
> - Messages are split into blocks before encryption
> - Messages are split into two before encryption

3. Symmetric encryption can provide:

> - Non-repudiation
> - Confidentiality

4. The following are challenges with symmetric encryption except:

> - Key distribution
> - Key management
> - Speed of execution

5. In stream ciphers:

> - Successive keys are used to encrypt plaintext message
> - The same key is used to encrypt plaintext message

6. The security of cryptography must rely on:

> - Keeping the cryptography algorithm secret
> - Keeping both the crypto algorithm and the key secret
> - Keeping only the key secret

## Asymmetric Cryptography

1. Asymmetric cryptography uses:

> - Public and private keys
> - A secret key known to two parties
> - Public keys

2. The security level of 128-bit asymmetrickey is the same as 128-bit symmetric key:

> - True
> - False

3. The security of RSA is based on the difficulty of:

> - Solving the logarithm problem
> - Factoring large prime numbers
> - Solving quadratic problem

4. A 4-bit (11012) messagein an Elliptic curve can be expressed in polynomial form as:

> - x^4+x^2+1
> - x^3+x^2+x+1
> - x^3+x^2+1

## Hashing and Digital Signature

1. In digital signature:

> - The publickeyis used to signthemessageand theprivate keyused to verifythesignature
> - The publickeyis used to encryptthemessageand theprivate keyis used to decryptit
> - The private keyis used to signthemessageand thepublickeyto verify

2. Hash functions should be collision resistant because:

> - Authentication can only be achieved if there is no collision
> - Integrity can only be preserved if there is no collision
> - Confidentiality can only be achieved if there is no collision

3. MAC

> - Uses asymmetric keys and provide authentication and integrity
> - Uses symmetric key and provide authentication and integrity
> - Uses symmetric key and provide authentication, integrity and non-repudiation

4. One-wayness of a hash function means

> - Two different messages cannot hash to the same hash values
> - One message cannot produce two different hash values
> - It is not possible to derive the input from the hash output

5. Which hash function has collision been found?

> - SHAE256
> - MD5
> - RIPEMDE160

6. What is the major difference between MAC and Hashing

> - MAC provides integrity
> - MAC provides authentication
> - MAC provides confidentiality

7. Whatis themajor differencebetweenMAC and digital signature

> - MAC hashes the message and encrypt with the private key
> - MAC hashes the message and the symmetric key
> - MAC hashes the message

8. Why do we need to hash in digital signature?

> - Because we need irreversible function
> - Because of speed and size
> - To avoid message collisions

## Public Key Infrastructure and Overview of crypto in Blockchain

1. What does PKI achieve in publickey systems? (multiple answers)

> - Binds an identity to a publickey
> - Verifies users transactions
> - Provides key management such as key distribution, validation and revocation

2. How is PGP certificate different from X.509 certificatemodel? (multiple answers)

> - You can create your own certificate
> - You need a single authority to sign your certificate
> - A PGP certificate can contain multiple signatures

3. PGP uses:

> - Symmetric and asymmetric crypto systems
> - Only symmetric
> - Only asymmetric
