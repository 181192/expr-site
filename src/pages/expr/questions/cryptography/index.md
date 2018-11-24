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

1.An example of a monoalphabetic cipher is:
a) Shiftcipher
b) Hill cipher
c) Vigenere cipher

2. Two conditions must hold to find the multiplicative inverse of an integer modulo another integer:
   a) The gcd of the integer and the modulo integer must be invertible
   b) The gcd of the integer and the modulo integer must be equal to one
   c) The gcd of the integer and the modulo integer must be equal to zero

3. The main purpose of using a poly alphabetic cipher is to:
   a) Hide the statistical property of the plaintext letters
   b) Increase the number of letters in the ciphertext
   c) Defeat brute force attack

4. Hill cipheris:
   a) An Asymmetric cipher
   b) A Symmetric cipher
   c) A Hash function

5. Cyptography can be directly linked to all of these core security properties except:
   a) Confidentiality
   b) Integrity
   c) Availability
   d) Authenticity

## Symmetric Cryptography

1. The basic elements of a sound cryptography are:
   a) Diffusion, Key secrecy and Confusion
   b) Encryption, Key secrecy and confusion
   c) Encryption, decryption and keysecrecy

2. In a blockcipher:
   a) Messages are encryptedat once
   b) Messages are split into blocks before encryption
   c) Messages are split into two before encryption

3. Symmetric encryption can provide:
   a) Non-repudiation
   b) Confidentiality

4. The following are challenges with symmetric encryption except:
   a) Key distribution
   b) Key management
   c) Speed of execution

5. In stream ciphers:
   a) Successive keys are used to encrypt plaintext message
   b) The same key is used to encrypt plaintext message

6. The security of cryptography must rely on:
   a) Keeping the cryptography algorithm secret
   b) Keeping both the crypto algorithm and the key secret
   c) Keeping only the key secret

## Asymmetric Cryptography

1. Asymmetric cryptography uses:
   a) Public and private keys
   b) A secret key known to two parties
   c) Public keys

2. The security level of 128-bit asymmetrickey is the same as 128-bit symmetric key:
   a) True
   b) False

3. The security of RSA is based on the difficulty of:
   a) Solving the logarithm problem
   b) Factoring large prime numbers
   c) Solving quadratic problem

4. A 4-bit (11012) messagein an Elliptic curve can be expressed in polynomial form as:
   a) x^4+x^2+1
   b) x^3+x^2+x+1
   c) x^3+x^2+1

## Hashing and Digital Signature

1. In digital signature:
   a) The publickeyis used to signthemessageand theprivate keyused to verifythesignature
   b) The publickeyis used to encryptthemessageand theprivate keyis used to decryptit
   c) The private keyis used to signthemessageand thepublickeyto verify

2. Hash functions should be collision resistant because:
   a) Authentication can only be achieved if there is no collision
   b) Integrity can only be preserved if there is no collision
   c) Confidentiality can only be achieved if there is no collision

3. MAC
   a) Uses asymmetric keys and provide authentication and integrity
   b) Uses symmetric key and provide authentication and integrity
   c) Uses symmetric key and provide authentication, integrity and non-repudiation

4. One-wayness of a hash function means
   a) Two different messages cannot hash to the same hash values
   b) One message cannot produce two different hash values
   c) It is not possible to derive the input from the hash output

5. Which hash function has collision been found?
   a) SHAE256
   b) MD5
   c) RIPEMDE160

6. What is the major difference between MAC and Hashing
   a) MAC provides integrity
   b) MAC provides authentication
   c) MAC provides confidentiality

7. Whatis themajor differencebetweenMAC and digital signature
   a) MAC hashes the message and encrypt with the private key
   b) MAC hashes the message and the symmetric key
   c) MAC hashes the message

8. Why do we need to hash in digital signature?
   a) Because we need irreversible function
   b) Because of speed and size
   c) To avoid message collisions

## Public Key Infrastructure and Overview of crypto in Blockchain

1. What does PKI achieve in publickey systems? (multiple answers)
   a) Binds an identity to a publickey
   b) Verifies users transactions
   c) Provides key management such as key distribution, validation and revocation

2. How is PGP certificate different from X.509 certificatemodel? (multiple answers)
   a) You can create your own certificate
   b) You need a single authority to sign your certificate
   c) A PGP certificate can contain multiple signatures

3. PGP uses:
   a) Symmetric and asymmetric crypto systems
   b) Only symmetric
   c) Only asymmetric
