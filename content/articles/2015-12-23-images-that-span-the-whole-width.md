---
date: 2015-12-23T00:00:00Z
description: Trying to get images to span the whole width of the screen, rather than
  the post container.
tags: code, middleman, web design, responsive, media queries
title: Images that span the whole width of the screen
# url: /2015/12/23/images-that-span-the-whole-width/
---

A while back I posted on how to [make an image responsive to the screen width](/2015/10/responsive-images/) and for a while I was using that. However I recently I stumbled upon Marco Arment’s post on the [Sony AR7II](https://marco.org/2015/08/28/a7rii-dynamic-range) on my phone and something magical happened.

The image escaped the margins and spanned the whole width of the screen.

Further research showed it happened due to a ```img class ``` which allowed the image to escape the borders and spread the whole width of the screen, and on desktop the whole width of the image. However, I didn't want this, I just wanted it on mobile.

I put the following code, stolen and slightly modified from the css of [Marco.org](http://marco.org/), inside the mobile [media query](https://css-tricks.com/logic-in-media-queries/) of this site[^1].

~~~ css
  img {
    margin-left: -20px; 
    margin-right: -20px; 
    max-width: 100vw;
  }
~~~

Allowing it to display along the whole width. This layouts not perfect, certain images that don't span the whole length will instead align sharply to the left with a lot of white space to the right, not helped by the fact images on this site use drop shadows. But it's alright for now.

<small>[Credit to me.](https://www.flickr.com/photos/manotheclassics/23455826069/)  Resize your browser to see the effect.<small>

![Here](https://c2.staticflickr.com/6/5625/23455826069_88e846d006_b.jpg)

[^1]: There's probably better ways to go about this, but I only have two media queries on this website, the desktop one and the mobile one. On the mobile version, with a screen width below 1280px, which I dubbed the standard lowest desktop resolution, the sidebar will not be displayed, the [sidebar.js](/js/sidebar.js) jQuery script I wrote will become active and the sidebar toggle on and off by a button, and the left and right margins being only 20px. The mascot also doesn’t show up on mobile. See my [media queries here](/dump/mq/)
