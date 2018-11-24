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

1. An example of a monoalphabetic cipher is:

   > 1. Shiftcipher
   > 2. Hill cipher
   > 3. Vigenere cipher

2. Two conditions must hold to find the multiplicative inverse of an integer modulo another integer:

   > 1. The gcd of the integer and the modulo integer must be invertible
   > 2. The gcd of the integer and the modulo integer must be equal to one
   > 3. The gcd of the integer and the modulo integer must be equal to zero

3. The main purpose of using a poly alphabetic cipher is to:

   > 1. Hide the statistical property of the plaintext letters
   > 2. Increase the number of letters in the ciphertext
   > 3. Defeat brute force attack

4. Hill cipheris:

   > 1. An Asymmetric cipher
   > 2. A Symmetric cipher
   > 3. A Hash function

5. Cyptography can be directly linked to all of these core security properties except:

   > 1. Confidentiality
   > 2. Integrity
   > 3. Availability
   > 4. Authenticity

## Symmetric Cryptography

1. The basic elements of a sound cryptography are:

   > 1. Diffusion, Key secrecy and Confusion
   > 2. Encryption, Key secrecy and confusion
   > 3. Encryption, decryption and keysecrecy

2. In a blockcipher:

   > 1. Messages are encryptedat once
   > 2. Messages are split into blocks before encryption
   > 3. Messages are split into two before encryption

3. Symmetric encryption can provide:

   > 1. Non-repudiation
   > 2. Confidentiality

4. The following are challenges with symmetric encryption except:

   > 1. Key distribution
   > 2. Key management
   > 3. Speed of execution

5. In stream ciphers:

   > 1. Successive keys are used to encrypt plaintext message
   > 2. The same key is used to encrypt plaintext message

6. The security of cryptography must rely on:
   > 1. Keeping the cryptography algorithm secret
   > 2. Keeping both the crypto algorithm and the key secret
   > 3. Keeping only the key secret

## Asymmetric Cryptography

1. Asymmetric cryptography uses:

   > 1. Public and private keys
   > 2. A secret key known to two parties
   > 3. Public keys

2. The security level of 128-bit asymmetrickey is the same as 128-bit symmetric key:

   > 1. True
   > 2. False

3. The security of RSA is based on the difficulty of:

   > 1. Solving the logarithm problem
   > 2. Factoring large prime numbers
   > 3. Solving quadratic problem

4. A 4-bit (11012) messagein an Elliptic curve can be expressed in polynomial form as:
   > 1. x^4+x^2+1
   > 2. x^3+x^2+x+1
   > 3. x^3+x^2+1

## Hashing and Digital Signature

1. In digital signature:

   > 1. The publickeyis used to signthemessageand theprivate keyused to verifythesignature
   > 2. The publickeyis used to encryptthemessageand theprivate keyis used to decryptit
   > 3. The private keyis used to signthemessageand thepublickeyto verify

2. Hash functions should be collision resistant because:

   > 1. Authentication can only be achieved if there is no collision
   > 2. Integrity can only be preserved if there is no collision
   > 3. Confidentiality can only be achieved if there is no collision

3. MAC

   > 1. Uses asymmetric keys and provide authentication and integrity
   > 2. Uses symmetric key and provide authentication and integrity
   > 3. Uses symmetric key and provide authentication, integrity and non-repudiation

4. One-wayness of a hash function means

   > 1. Two different messages cannot hash to the same hash values
   > 2. One message cannot produce two different hash values
   > 3. It is not possible to derive the input from the hash output

5. Which hash function has collision been found?

   > 1. SHAE256
   > 2. MD5
   > 3. RIPEMDE160

6. What is the major difference between MAC and Hashing

   > 1. MAC provides integrity
   > 2. MAC provides authentication
   > 3. MAC provides confidentiality

7. Whatis themajor differencebetweenMAC and digital signature

   > 1. MAC hashes the message and encrypt with the private key
   > 2. MAC hashes the message and the symmetric key
   > 3. MAC hashes the message

8. Why do we need to hash in digital signature?
   > 1. Because we need irreversible function
   > 2. Because of speed and size
   > 3. To avoid message collisions

## Public Key Infrastructure and Overview of crypto in Blockchain

1. What does PKI achieve in publickey systems? (multiple answers)

   > 1. Binds an identity to a publickey
   > 2. Verifies users transactions
   > 3. Provides key management such as key distribution, validation and revocation

2. How is PGP certificate different from X.509 certificatemodel? (multiple answers)

   > 1. You can create your own certificate
   > 2. You need a single authority to sign your certificate
   > 3. A PGP certificate can contain multiple signatures

3. PGP uses:
   > 1. Symmetric and asymmetric crypto systems
   > 2. Only symmetric
   > 3. Only asymmetric
