---
title: round three
description: React Native 002
date: 2019-10-07
tags:
  - react native
  - android
  - responsive design
layout: layouts/post.njk
---

## RESPONSIVE DESIGN

As I learned a couple of weeks ago, 'responsive design' is something that one should prioritise if they want a happy life. I spent a solid month building my app on a single Samsung emulator and thought I was doing a good job until my boss asked me to open the app in a much larger emulator. Oh boy! Suddenly my carefully centered views were running halfway off the screen, mountains crumbled, seas roared, and I had to stay late to fix it.

So, responsive design. It's important.

## How can I make sure that my components are the same size on all devices?

Honestly, this is a question I could use some answers to. I'm going to tell you what I've been doing and hopefully someone will see this on Twitter and glide in with some helpful suggestions.

I have been (over?)relying on ``Dimensions.get``.

I'll give you an example. I have used ``Dimensions.get`` to ensure my fonts render in sizes proportionate to the size of the screens on which they are displayed.

I've been storing the width and height of the screen in variables like so:

```javascript
const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height
```

Then, in my StyleSheet, I've been doing this, and sometimes I divide the screenWidth by a certain number to achieve the result I want:

```javascript
  stopButtonText: {
    fontSize: 0.039 * screenWidth,
    color: '#EE7470',
    fontWeight: 'bold'
  }
```

Can I tell you why exactly I chose the number 0.039? Nope. Does it work? Absolutely! 

They don't make very much of ``Dimensions.get`` in the official documentation. As far as I can see, [this is the only mention of it](https://facebook.github.io/react-native/docs/dimensions), but I might be wrong. I know that they're in the process of revamping the documentation to make it more user-friendly so I really wouldn't be surprised if things changed for the better in the coming months, but for now this is a bit of a pain point.

## AND THAT'S ALL FOR NOW

It's a quick one today. 

<3