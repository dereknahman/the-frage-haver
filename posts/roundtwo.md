---
title: round two
description: React Native hell 001
date: 2019-08-19
tags:
  - react native
  - android
layout: layouts/post.njk
---

## CHRIST ALIVE

I've spent this week making an Android MVP in React Native, despite not knowing React Native.

I've managed it so far, though. I made a lovely login form and everything. Yes, the CSS is wonky. Yes, it took me far too long, but it's mine and it's there. Now I just need to write some navigation logic for it. This is hard for reasons I'll be going into down there 👇🏻.

## It's a React Native special!

One of the lovely things about React Native is that, unlike reliable old Rails, there isn't a ruthlessly enforced file structure. The upside here is, if you know what you're doing, you can arrange the project's architecture according to your own judgement and years of applied knowledge. The downside is that, if you don't know what you're doing (hi), you're spoiled for choice, you don't have a clue where to start, it's late, you're tired, you have no idea how to make the bastard thing scaleable, and you start to wish you'd listened to your mother when she was pushing you into the law. 

I'm still battling with this myself and will come back to it in a later post.

Before I begin answering questions, I should tell you that all my experience is working with the React Native CLI for Android. There is another option, which is to use Expo. They each have their merits and demerits and [you can read about them in the documentation here](https://facebook.github.io/react-native/docs/getting-started).

## What's the best way to start my project?

I can tell you what I've been doing. That doesn't mean it's the right thing to do for you!

I've been using `react-native init <project_name>` to start my Android projects so that I can take advantage of the `node_modules` files. This method was recommended by my fantastic coding coach Emma, who says that doing so means that I can create native Android or iOS code and events which I can then bridge to React Native for use on the JavaScript side. 

Using `react-native init` also means that I can integrate third party software that uses the `node_modules` for bridging components and functionality, whereas, if I were to use Expo, I'd be restricted to the baked-in components they provide. So using `react-native init` is altogether more flexible for developers, but it's fine to use Expo if you want some instant gratification. Just be aware that one is more limiting than the other in terms of functionality.

[Have a wee look at the docs](https://facebook.github.io/react-native/docs/getting-started) if you want to know more. 

## What's the deal with navigation?

Here's my understanding of it. I am fully prepared for someone shooting this out of the sky and having to edit this part of the post 59478 times.

React Navigation 

## What do you use to display text/views/etc?

## What is the call stack?

## Which emulator should I use?



