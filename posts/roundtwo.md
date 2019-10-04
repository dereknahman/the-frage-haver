---
title: round two
description: React Native 001
date: 2019-08-19
tags:
  - react native
  - android
layout: layouts/post.njk
---

## CHRIST ALIVE

This is just going to be a quick warming-up-my-tires post with a couple updates and some tips.

I've spent this past month making an Android MVP in React Native, despite not knowing React Native. I was hired as a junior Ruby developer. It has certainly been A Time in My Life. 

I've managed it so far, though! And a lot of questions popped up along the way. I had planned to put these questions up on here as they arose, but, to be honest, between learning a whole new framework/way of working/twice-weekly German lessons, I found that blogging encroached on precious crying in the shower time. But I'm doing it now. 

## So now I work in React Native

One of the lovely things about React Native is that, unlike Rails, which is what I was used to, there isn't a ruthlessly enforced file structure. The upside here is, if you know what you're doing, you can arrange the project's architecture according to your own judgement. The downside is that, if you don't know what you're doing (hi), you're spoiled for choice, you don't have a clue where to start, it's late, you're tired, you have no idea how to make the bastard thing scaleable, and you start to wish you'd listened to your mother when she was pushing you into law school. 

Before I begin answering questions, I should tell you that all my experience is working with the React Native CLI for Android. There is another option, which is to use Expo. They each have their merits and demerits and [you can read about them in the documentation here](https://facebook.github.io/react-native/docs/getting-started).

## What's the best way to start my project?

I've been using `react-native init <project_name>` to start my Android projects so that I can take advantage of the `node_modules` files. This method was recommended by my fantastic coding coach Emma, who says that doing so means that I can create native Android or iOS code and events which I can then bridge to React Native for use on the JavaScript side. 

Using `react-native init` also means that I can integrate third party software that uses the `node_modules` for bridging components and functionality, whereas, if I were to use Expo, I'd be restricted to the baked-in components they provide. So using `react-native init` is altogether more flexible for developers, but it's fine to use Expo if you want some instant gratification. Just be aware that one is more limiting than the other in terms of functionality.

[Have a wee look at the docs](https://facebook.github.io/react-native/docs/getting-started) if you want to know more. 

## How can I learn about navigation, cos I don't see it in the main docs?

I've been using [React Navigation](https://reactnavigation.org/). There is also [React Native Navigation](https://wix.github.io/react-native-navigation/#/). [This person has written about what they are and how to get started](https://blog.logrocket.com/navigating-react-native-apps-using-react-navigation/).

I actually found the React Navigation docs to be quite hard to use, as a newbie. I had to supplement my learning with fiddling with [this course on Udemy](https://www.udemy.com/course/react-native-the-practical-guide/) and [Nader Dabit's fabulously helpful book on React Native](https://www.manning.com/books/react-native-in-action).

YouTube saved my life a few times. [This guy is great](https://www.youtube.com/channel/UCiNWv52iO_OAdZ12kslG4Cg).

## That's it for now

I'm looking forward to reviving this thing and putting up more regular posts. It'll be React Native- and Rust-focused for the next few months because of work/a Rust side project I'm doing with a pal. 

Bye bye!






