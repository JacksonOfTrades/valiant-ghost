---
date: 2016-01-03T00:00:00Z
description: And now to get Link Posts to work right in Twitter with IFTTT
tags: twitter, tweets, middleman, coding
title: Getting twitter and IFTTT to work right with link posts
# url: /2016/01/03/getting-twitter-to-work-right-with-link-posts/
---

Yesterday when I published the [guide on how to get link post RSS to work right](/2016/01/middleman-linklog-rss-fix/) I forgot to mention one important thing, Twitter.

I use [IFTTT](http://ifttt.com/) [^1] on this blog to tweet when a new post is released, like this: 

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="da" dir="ltr">Middleman linklog RSS fix <a href="https://t.co/apgxkVjhW7">https://t.co/apgxkVjhW7</a></p>&mdash; Jackson Wyndow (@ManOTheClassics) <a href="https://twitter.com/ManOTheClassics/status/683222504731766784">January 2, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

However, for link posts the link will point straight to the link rather than to your site. Annoying, but the fix is simple, another feed. I call it ```twitter.xml.erb```. Just like yesterdays feeds it will convert to an xml feed that can be read normally.

~~~ erb
<?xml version="1.0" encoding="UTF-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom"> 
  <% page_articles[0..5].each do |article| %>
    <title>Example</title>
    <subtitle>example</subtitle>
    <id>http://www.example.com/</id>
    
<entry>
  <% if article.data.link %>
    <title><%= article.title  + "→" %></title>
    <link rel="alternate" href="<%= 'http://example.com' + article.url %>"/>
  <% else %>
    <title><%= article.title %></title>
    <link rel="alternate" href="<%= 'http://example.com' + article.url %>"></link>
  <% end %>
    <id><%= "http://example.com" + article.url %></id>
    <published><%= article.date.strftime(article.date.to_time.iso8601) %></published>

<content type="html">
  </content>
</entry>
  <% end %>
</feed>
~~~

Here, link posts will be denoted with an arrow but the link will still lead to your site, rather than the links source. I decided to completely remove any entry content from the feed, as its not necessary as it will only be linking to twitter for us, not as an actual RSS feed.

Now, go to IFTTT recipe that posts to Twitter for you and point the RSS channel of your recipe not from ```feed.xml``` or ```atom.xml```, but to ```twitter.xml```. Now it should work for you.

[^1]: A really handy automation service. I'd definitely recommend it.