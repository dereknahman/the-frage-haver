---
title: insecurity
description: what even is md5 doe?
date: 2020-05-24
tags:
  - security
layout: layouts/post.njk
---

## i didn't know anything about encryption when i started writing this

I didn't know anything about security, really. I probably should have, but I didn't. Lots of interesting people with part-shaved, multi-coloured hair on Twitter know about security and they're super smart and cool but I never understand what they're talking about and merely look on in awe while they say hackerish sounding things before going back to fixing the styling on my buttons.

My CTO at work recently asked me to assess how secure the password-handling was in a React Native application written by a third party. I looked at the Login.js component, which contained the relevant logic, and could see that the password wasn't hashed anywhere, but that's about it. I definitely didn't feel qualified to comment on the code from a security standpoint at the time.

My CTO then followed up with a recommendation:

> **"If you want a fun trip down a rabbit hole, look up md5, sha-1 and bcrypt password hashing. Also why is salting important? And what does Rails use?"**

So off I went.

## md5

I'll start with the definition first, and then we can break it down together.

**MD5 hash functions are a one-way cryptographic function that accepts a message of any length and returns as output a fixed-length digest value to be used for authenticating the original message**

But what's a hash ???

A 'one-way cryptographic function' ???

What's a fixed length digest value ???

Can we see an example in JavaScript ???

## sha-1

## bcrypt

## why is salting important?

## what does rails use?
