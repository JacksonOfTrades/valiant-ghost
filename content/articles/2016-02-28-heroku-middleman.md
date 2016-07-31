---
date: 2016-02-28T00:00:00Z
description: Going broke may have been the best thing for this website
tags: heroku, valiant ghost, middleman, hosting, me
title: Hosting this site on Heroku
# url: /2016/02/28/heroku-middleman/
---

You might remember a few days ago where I wrote about [Remix OS](/2016/02/remix-os/) and how I mentioned I was deploying this site from [Heroku](https://heroku.com)? Well a few days before then I had to move this site to Heroku, because I ran out of money to pay for this site being hosted on [Firebase](https://www.firebase.com)[^1]. And while I may have hated this, Firebase seemed pretty good after all, it turned out to have been the best thing for this Middleman website. 

Heroku is actually a platform for hosting apps in the cloud. Middleman is basically a Ruby gem which compiles markdown files into static HTML which can then by deployed to server. However, there was a bit of a problem with my past setup. Middleman could only build the markdown files when I put in a few lines into the command line, meaning I had to be at my computer all the time. Now, while this may not seem like much of an issue as I'm hardly separated from my laptop, it was annoying thse few times I only had my phone on me. 

However, using [this set up](https://jordanelver.co.uk/blog/2014/02/17/how-i-deployed-middleman-to-heroku) and Heroku's Dropbox intergration I can now simply and easily deploy on my phone. After I connected Heroku to Dropbox, all I have to do is login to Heroku on my phone, go into the Code tab and type deploy. This runs the commands needed to run the build process for this site and deploys it. Tada, this website is deployed without me even sitting down at my PC. *Awesome*.

If [static really is the future](https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing) then this is what we need, a way to deploy it easily. Most of the static website deployment services still focus on the command line. It makes sense, considering most of the people who would be attracted to static websites would be nerds[^2], but it's still an inconvenience for the brief moments where we nerds are away from our machines. Heroku is a step in the right direction for the service, even unintentionally






[^1]: Which is about 5 dollars a month. Yes I'm that broke.

[^2]: *Cough* Me */Cough*
