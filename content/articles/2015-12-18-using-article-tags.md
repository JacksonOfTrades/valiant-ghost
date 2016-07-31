---
date: 2015-12-18T00:00:00Z
tags: web design, web development, notes, dear past me
title: Using article tags for content
# url: /2015/12/18/using-article-tags/
---

*Alternatively: How to get a header/masthead/footer to span an entire page width*

This is less a thing to you and more a note I want to send to younger me, who at the time had just started learning to make websites, and from that want I made this website. I didn't start this just because I wanted to be a writer but because I wanted the serious geek cred a [Jekyll](http://jekyllrb.com/)/[Octopress](http://octopress.org/) powered website had, as opposed to just Wordpress. 

Back then, I hardly knew anything about Web design or development. The first design for this site was a cross between what it is now and [Marco.org](http://marco.org/). I wanted that page spanning header of Marco's website but couldn't get it to be right with CSS, it would instead would fit in with the other content. So at the time I instead used CSS to have a 5000px wide image at the top, which I was sure was large enough to span an entire page. Never mind the load times... 

Today I know to wrap the content in article tags. I mostly leave the body selector unused beyond setting the background color. I define width, margin etc in the article tags, just as I used to for the body tags when I began. Therefore if I need a page spanning header or footer it's not a problem, there is nothing obstructing it from being where it from spanning the entire 100% of the page's width.

Without the content in Article tags:

<a class="jsbin-embed" href="http://jsbin.com/julahug/2/embed?html,css,output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.5"></script>

With the content in Article tags:

<a class="jsbin-embed" href="http://jsbin.com/xayure/embed?html,css,output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.5"></script>

God I wish I knew about this back when I started Web development. Younger Web Development me (or anyone else reading this) leave the body (tag) behind (for your content), the article tag is the way forward.