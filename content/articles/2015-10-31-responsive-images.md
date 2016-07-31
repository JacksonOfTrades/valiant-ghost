---
date: 2015-10-31T00:00:00Z
tags: css, design, responsive, mobile, web design
title: Short and sweet responsive image snippet
# url: /2015/10/31/responsive-images/
---

Because I sometimes post images on this site and because I make sure this site is completely responsive I also need those posted images to be responsive. When I made the move from [Foundation 5](http://foundation.zurb.com/) to [Bourbon Neat](http://neat.bourbon.io/) for the front end of this site, images were not responsive by default. So, a quick search through the Foundation 5 CSS revealed this snippet:

```
img {
  max-width: 100%;
  height: auto;
}
```

Which allows all your images to be responsive, and what I use here to have the images fit to the screen.
