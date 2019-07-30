---
title: round one
description: This is the first post!
date: 2019-07-30
tags:
  - npm
  - yarn
  - React
  - tests
layout: layouts/post.njk
---

## What is npm? What is yarn? What’s the difference?

Both of these things came up repeatedly while I was looking at React. So:

npm is a package manager for Node.js. Node.js was invented because we needed a way to run JavaScript on our machines in standalone applications, rather than just in the browser (i.e. Chrome, Firefox…). npm does create some basic directory structures and organisation, but its main purpose is automated dependency and package management. The user can specify their project’s dependencies (i.e. the specific versions of the specific technologies required to make their project run) in the ``package-lock.json`` file so that anyone else jumping into the project can simply run npm install and have all the correct dependencies ready to go. 

Yarn is essentially the same thing except it’s made by Facebook, which some people dislike. It is an abstraction layer developed over npm and they are both using the NPM registry. Yarn uses ``yarn.lock`` to define and install dependencies for projects. Yarn used to be much faster than npm but isn’t any more. 

Yarn comes up a lot in the React tutorials I’m doing. Maybe because they’re both made by Facebook? Anyway, I could bang on all day about this because lots of people on the internet have opinions, but I won’t. There's your summary!

## What are the advantages and disadvantages of
## component-based apps, such as React apps?

Advantages:

Component-based architecture turns common use cases into reusable modules of code so that developers don't have to reinvent the wheel, and can simply use and re-use code as it's needed. This is super handy with a website such as Facebook that have several dynamic elements (chat boxes, news feed, notifications, etc) on the page which need to be updated independently from one another.

Components can be faster and more efficient for huge websites with millions of users.

Disadvantages:

Component-based development can lead to big, unwieldy, polluted web applications. I've seen a few developers complain about over-engineering, and the way some people use React for simple blogs about their cat which would be must better served by some HTML/CSS (hi Charlie!). 

## What are the main types of tests?

Unit testing

This is where you break code down into pieces and subject each little piece to a series of tests. They run periodically, often after changes to the suorce code. They don't depend on outside systems, only their tiny little self-contained ecosystems.

Integration testing

Unlike unit tests, integration tests are designed to check that different little code ecosystems work well *with each other*. They often require database instances and hardware, and are generally more of a pain in the arse if youre a newbie. You needn't be afraid of them though, because to write code is to test code, and over time you will get better at it.

System testing

So you've done unit tests to check the code can work by itself, integration tests to check that the units of code can play nicely and groups, and now you're on to system tests. You're testing a complete, integrated system to evaluate its compliance with the specified requirements of the project.

Acceptance testing

Here you'll evaluate the system’s compliance with the business requirements and assess whether it is acceptable for delivery. Once you're at this stage you've got a functioning application in front of you that's almost ready for the world. Clever clogs!



