---
date: 2016-01-02T00:00:00Z
description: My Middleman linklog now has official RSS!
tags: middleman, code, rss, blogging
title: Middleman linklog RSS fix
# url: /2016/01/02/middleman-linklog-rss-fix/
---

Since I put it on the Internet, Valiant Ghost has been a Linked List. When I first began this website on Octopress there was already a [handy guide on making a Linked List in Octopress](http://www.candlerblog.com/2012/01/30/octopress-linked-list/), but when I moved to Middleman I coded it in myself, and [shipped the final version a few months back](/2015/10/middleman-linklog-v2/), but it lacked a very crucial component of the style I was trying to create here - The RSS.

The style I'm trying to emulate here, that of [Daring Fireball](http://daringfireball.net/) and [Marco.org](http://marco.org/) used a Link Post style called the The Out and About by [Shawn Blanc in The Link Post](http://shawnblanc.net/2009/08/the-link-post/) in which Shawn defines this style as:

> What especially sets The Out and About apart is its feed format. Because not only do the Link Post titles point directly to the linked-to content, but so do those in the RSS feed.

> The permalink to your Out and About is either found at the bottom of your post, or else not at all.

And when I first released the Middleman Linklog code it didn't have working RSS. So, as I've had nothing to do recently I've decided to rectify that and code some full working Linked List RSS. 

Instead of trying to use Middleman's confusing builder.xml file to build my Linked List RSS, I instead used ERB, and then had that markup to xml when I ran ```middleman build```. The RSS comes in three styles, with you having to edit some things slightly[^1].

The file for each is called ```atom.xml.erb```.

### The Normal

Standard Linked List RSS, with an arrow, →, if it’s a link post and no arrow if it’s not, with a permalink at the bottom.

~~~erb
<?xml version="1.0" encoding="UTF-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom"> 
  <% page_articles[0..5].each do |article| %>
    <title>Your Website Name</title>
    <subtitle>And your really cool subtitle</subtitle>
    <id>http://www.example.com/</id>
    <link href="http://www.example.com/"/>
    <link href="http://www.example.com/atom.xml" rel="self"/>
    <icon>/icon.jpg</icon>
  <% if article.data.image %>
    <logo><% article.data.image %></logo>
  <% else %>
    <logo>/spadestwitter.jpg</logo>
  <% end %>
    <rights>Copyright © <% Time.now.year %> This Guy</rights>
    <updated>
      <%= article.date.strftime(article.date.to_time.iso8601) %>             
    </updated>
  <% if article.data.author %>
    <author>
        <name><%= current_article.data.author %></name>
    </author>
  <% else %>
    <author>
      <name>Your name</name>
    </author>
    <% end %>
    
<entry>
  <% if article.data.link %>
    <title><%= article.title  + "→" %></title>
    <link rel="alternate" href="<%= article.data.link %>"/>
  <% else %>
    <title><%= article.title %></title>
    <link rel="alternate" href="<%= 'http://example.com' + article.url %>"></link>
  <% end %>
    <id><%= "http://example.com" + article.url %></id>
    <published><%= article.date.strftime(article.date.to_time.iso8601) %></published>

  <% if article.data.author %>
    <author>
      <name><%= current_article.data.author %></name>
    </author>
  <% else %>
    <author>
      <name>This guy</name>
    </author>
  <% end %>

<content type="html">
  
<%= article.body %>
<% if article.data.link %>
<%= link_to 'Permalink', "http://example.com" + article.url %>
<% else %>
  
<% end %>
  
  </content>
</entry>
  <% end %>
</feed>
~~~

### The Daring Fireball

This is the RSS style used on Daring Fireball, where link posts are the norm and original writing is marked with its own glyph, ★ before the title in the RSS. It's currently what I use here. In my case, the icon is a spade.

~~~erb

<?xml version="1.0" encoding="UTF-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom"> 
  <% page_articles[0..5].each do |article| %>
     <title>Your Website Name</title>
    <subtitle>And your really cool subtitle</subtitle>
    <id>http://www.example.com/</id>
    <link href="http://www.example.com/"/>
    <link href="http://www.example.com/atom.xml" rel="self"/>
    <icon>/icon.jpg</icon>
  <% if article.data.image %>
    <logo><% article.data.image %></logo>
  <% else %>
    <logo>/spadestwitter.jpg</logo>
  <% end %>
    <rights>Copyright © <% Time.now.year %> This Guy</rights>
    <updated>
      <%= article.date.strftime(article.date.to_time.iso8601) %>             
    </updated>
  <% if article.data.author %>
    <author>
        <name><%= current_article.data.author %></name>
    </author>
  <% else %>
    <author>
      <name>This guy</name>
    </author>
    <% end %>
    
<entry>
  <% if article.data.link %>
    <title><%= article.title %></title>
    <link rel="alternate" href="<%= article.data.link %>"/>
  <% else %>
    <title><%= "♠ " + article.title %></title>
    <link rel="alternate" href="<%= 'http://valiantghost.com' + article.url %>"></link>
  <% end %>
    <id><%= "http://valiantghost.com" + article.url %></id>
    <published><%= article.date.strftime(article.date.to_time.iso8601) %></published>

  <% if article.data.author %>
    <author>
      <name><%= current_article.data.author %></name>
    </author>
  <% else %>
    <author>
      <name>This Guy</name>
    </author>
  <% end %>

<content type="html">
  
<%= article.body %>
<% if article.data.link %>
<%= link_to '♠ Permalink', "http://example.com" + article.url %>
<% else %>
  
<% end %>
  
  </content>
</entry>
  <% end %>
</feed>

~~~

### The Marco

This is the style which is a combination of the Normal and the Daring Fireball styles, where Link Posts are told by a marker before the post title and original writing has no icon

~~~erb
<?xml version="1.0" encoding="UTF-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom"> 
  <% page_articles[0..5].each do |article| %>
    <title>Your Website Name</title>
    <subtitle>And your really cool subtitle</subtitle>
    <id>http://www.example.com/</id>
    <link href="http://www.example.com/"/>
    <link href="http://www.example.com/atom.xml" rel="self"/>
    <icon>/icon.jpg</icon>
  <% if article.data.image %>
    <logo><% article.data.image %></logo>
  <% else %>
    <logo>/spadestwitter.jpg</logo>
  <% end %>
    <rights>Copyright © <% Time.now.year %> This Guy</rights>
    <updated>
      <%= article.date.strftime(article.date.to_time.iso8601) %>             
    </updated>
  <% if article.data.author %>
    <author>
        <name><%= current_article.data.author %></name>
    </author>
  <% else %>
    <author>
      <name>Your name</name>
    </author>
    <% end %>
    
<entry>
  <% if article.data.link %>
    <title><%= "→" + article.title  %></title>
    <link rel="alternate" href="<%= article.data.link %>"/>
  <% else %>
    <title><%= article.title %></title>
    <link rel="alternate" href="<%= 'http://example.com' + article.url %>"></link>
  <% end %>
    <id><%= "http://example.com" + article.url %></id>
    <published><%= article.date.strftime(article.date.to_time.iso8601) %></published>

  <% if article.data.author %>
    <author>
      <name><%= current_article.data.author %></name>
    </author>
  <% else %>
    <author>
      <name>This guy</name>
    </author>
  <% end %>

<content type="html">
  
<%= article.body %>
<% if article.data.link %>
<%= link_to 'Permalink', "http://example.com" + article.url %>
<% else %>
  
<% end %>
  
  </content>
</entry>
  <% end %>
</feed>
~~~

Enjoy. Message me if anything goes wrong.

[^1]: For example, setting ```example.com``` to actually point to your site, and setting the author name.
