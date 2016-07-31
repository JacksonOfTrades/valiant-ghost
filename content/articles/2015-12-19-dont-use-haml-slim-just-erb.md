---
date: 2015-12-19T00:00:00Z
tags: web development, notes, dear past me, middleman
title: Don't use Haml - just ERB
# url: /2015/12/19/dont-use-haml-slim-just-erb/
---

In the process of making this website in Middleman, you're gonna try and use a bunch of different template engines after discovering [Haml](http://haml.info/) and so forth. 

Don't bother. Sure, the added benefit of not using tags and so forth is delightfully enticing to you, writing something that looks less like stock standard html code and more like a programming language, but it has something that isn't really attractive in it. Its indents. They're too annoying to get right[^1]. Plus, Haml is helpful for writing new code fast, but here in Middleman a lot of the code is mostly pre-written for you already, so you're mostly just converting it for no reason when you have *almost* html that is already perfectly well written for you.

The reason I moved away from Jekyll/Octopress was due to its template engine, Liquid, and how it was a confusing mix of includes. Wanted to edit the ```<head>``` of your website? Just find the ```header.html``` file, wherever it may be, which is an includes of the ```head.html``` file, in another folder. It was annoying and confusing. Thats why I was glad that Middleman uses ERB, which is a very basic templating engine, mostly HTML except for where it needs to render the content. No includes, unless you want it to be, just *almost* pure html. I loved it. 

So: my advice, don't use Haml, especially if the codes already written. Using Middleman? Just use ERB. Maybe I'm being too harsh, and I should learn Haml today instead of ranting about it. Probably should. But I probably just convert back to ERB eventually instead. It's happened before.

[^1]: Especially since for something to be in a div it needs to be intended more than the div defining tag. Confusing? And if say you added a on top of existing content, then you'd have to indent all the code below it. Not worth it.