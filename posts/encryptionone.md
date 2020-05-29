---
title: baby's first hash encryption
description: a password hash with extra salt, please
date: 2020-05-29
tags:
  - security
layout: layouts/post.njk
---

## i didn't know anything about encryption when i started writing this

I didn't know anything about security, really. I probably should have, but I didn't. Lots of interesting people with part-shaved, multi-coloured hair on Twitter know about security and they're super smart and cool but I never understand what they're talking about and merely look on in awe while they say hackerish sounding things before going back to fixing the styling on my buttons.

My CTO at work recently asked me to assess how secure the password-handling was in a React Native application written by a third party. I looked at the Login.js component, which contained the relevant logic, and could see that the password wasn't hashed anywhere, but that's about it (I'll get to what hashing means in a sec). I definitely didn't feel qualified to comment on the code from a security standpoint at the time.

My CTO then followed up with a recommendation:

> **"If you want a fun trip down a rabbit hole, look up md5, sha-1 and bcrypt password hashing. Also why is salting important? And what does Rails use?"**

✨ So off I went. ✨

## hash functions, generally

In order to hash a password, one must use a hash function.

I'll start with the definition of a hash function first, and then we can break it down together.

**Hash functions are one-way cryptographic functions that accept a message of any length and return as output a fixed-length value to be used for authenticating the original message**

Let's go through some of these terms and define what they mean.

- A **hash function** maps arbitrary-sized input to a fixed-site output through a process known as compression. Unlike typical data compression (i.e. the process that takes place when you package up a .zip file), compression in this case refers to non-invertible data mapping.
- When a function is **'one way'** it essentially means that it is nontrivial (a computer science term people use when referring to things that are not simple/easy to perform) to learn anything useful about the input of the function given the output.

The ideal hash function is:

- One-way, which we covered a moment ago.
- Collision-resistant, which means that, given an output from a hash, finding another input that produces the same output (this is the part that's called collision) is nontrivial.

A hash function is considered to be weak when it allows for two files to have the same 'digest', or output, because digital fingerprints created with it can be forged, and are therefore cryptographically broken.

## md5 hash functions

MD5 (or, to use its full name, Message-Digest algorithm 5) algorithms produce 128-bit hash values. It was invented by Ronald L. Rivest of MIT who also invented MD2, MD4 and MD6, which we won't be going into today. You can generate an MD5 hash using [this tool](https://www.miraclesalad.com/webtools/md5.php). Note that the output is the same length no matter the size of the input, and that the entire hash changes if you change only a single character in the input.

MD5 has been proven to be insecure in a number of ways. Firstly, it isn't collision-resistant, and secondly, according to the lovely people at [Computerphile](https://www.youtube.com/watch?v=b4b8ktEV4Bg), it is fairly straightforward to simply use Google to break the hashes. One can Google a hash and fairly easily find the corresponding input values that were employed to generate it in the first place, which utterly undermines any illusion of security.

MD5 is now considered broken and no one should be using it.

## sha-1

SHA-1 was developed by the National Security Agency (NSA) as part of their Capstone project, which aimed to develop cryptography standards for public and government use, according to [Wikipedia](<https://en.wikipedia.org/wiki/Capstone_(cryptography)>). They are 160 bits long, and you can generate one [here](http://www.sha1-online.com/). This hash function also produces the same length of output no matter the length of the input, just like MD5.

SHA-1 is most often used for checking whether a file is unaltered. It does so by producing a hash value before the file is transmitted, and then again once it reaches its destination. The file can only be considered genuine if both hash values are identical.

SHA-1 hashes date back to 1995 and have been known to be vulnerable since 2005. As of version 56 of Google Chrome, which was released in 2017, the browser has marked all SHA-1-signed certificates as unsafe, and other major browsers followed suit. Researchers from the CWI Institute in Amsterdam and Google generated the first collision in SHA-1 history in 2017, and it is now considered broken too. But SHA-1 (sometimes known as SHA-256) had already been phased out in favour of SHA-2 in early 2016, before Google's discovery, so faith in it was already thin on the ground.

## what is a salt?

Salts are data added to hash outputs to make them unique even if the input values are identical. Take passwords, for example. In order to hack into somebody's account, attackers can generate a list of common passwords and their corresponding hash values. Comparing the two will eventually reveal the passwords to the attackers if there are matches.

If a user's password is stored with a unique salt, however, then any pre-computation-based attacks (like the scenario I just described) targeting unsalted password hashes, or targeting an account with a different salt, will not crack the user's password. If the salt is long enough and sufficiently random, it is incredibly unlikely that an attacker will be able to crack the password. Salts are concatenated with a cryptographic hash function, and the resulting output (but not the original password) is stored with the salt in a database.

## bcrypt

Bcrypt is also a hashing algorithm, but it is different from MD5 and SHA-1, which we explored earlier. You can take it for a spin [here](https://bcrypt-generator.com/).

When you visit the link, note that you have to select a number of rounds. This refers to the computational cost of the function which in turn controls how much time is required to calculate a single bcrypt hash. The higher the cost factor, the more hashing rounds are required. Increasing the number of rounds by one dooubles the necessary time, and the more time it takes, the more difficult it is for hackers to issue a brute-force attack. This configurable cost is one of the reasons why bcrypt is so secure.

Unlike MD5 and SHA-1, bcrypt requires a salt as part of the hashing process, making it markedly more secure.

Bcrypt is designed to be _expensive to compute_, meaning that, even if, hypothetically speaking, it didn't take an extraordinary amount of attempts for an attacker to guess what the input was, there is a very high computational cost to _testing_ each guess.

## what does rails use?

This should come as no surprise: it's bcrypt!
