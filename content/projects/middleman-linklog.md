---
title: Middleman Linkblog
page: true
---

### A Linkblogging template for Middleman

[Direct Download](/projects/middleman-linklog.zip) • [Github](https://github.com/Summonee/middleman-linklog)

Writing link posts is simple, all you need to do in the front matter is:

~~~yaml

  title: Updated Middleman Linklog, so now it actually makes  sense.

  date: 2015-10-18

  tags: middleman, linklog, ruby, programming 

  link: https://valiantghost.com/

Heres our commentary on the link post.

~~~

For a non link post, simply ommit the ``link``.

### RSS

No linklog is complete without working linklog RSS. Here it is:

~~~ erb
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

Obviously you need to edit in certain fields, like having ```example.com``` point to your actual site. This acts like your standard linklog RSS, with link posts having an arrow after the title.

If you'd rather have your RSS in another style, like the Daring Fireball style you can [click here](/2016/01/middleman-linklog-rss-fix/) to get it.

~*Have Fun*. 