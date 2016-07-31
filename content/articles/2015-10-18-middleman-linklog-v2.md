---
date: 2015-10-18T00:00:00Z
tags: middleman, linklog, linked list, ruby, erb, programming
title: Updated Middleman Linklog, so now it actually makes sense.
# url: /2015/10/18/middleman-linklog-v2/
---

When I first released the Middleman Linklog template, it was messy. A mix of HTML went into the title, which other than looking ugly in the front matter when writing posts also did not let the html validate properly, it had two links. Over the past four months I've been testing and trying to make it brand new, so that it actually looks good. Lets do this.

####The Setup

Quickly, if you don't want to edit all the code yourself and would just like to start with a fresh linklog already precoded for you, head over to the [Project Page](https://valiantghost.com/projects/middleman-linklog.html) where you can download it directly or from Github.

First, just like last time we need two layouts, one for the post and one for the front page.

Open up your current ``layout.erb`` file and make another file called ``article.erb`` [^1]. Copy the code into your ``article.erb`` file and where above the `` <%= yield %>`` copy and paste

~~~ erb
      <% page_articles.index do |article, i| %>
              
      <% if current_article.data.link %>
        <!-- Link post -->
        <h3><%= link_to current_article.title, current_article.data.link %></h3>
        
      <% else %>
      
      <!-- Non link post -->
      <h3 class="non-link"><%= current_article.title %></h3>
      <% end %>
      <% end %>
      
      <small><%= current_article.date.strftime('%e of %B, %Y') %></small>
~~~

Next, open up your ``index.html.erb`` file and put the below code  above ``<%= article.body %>``. 

~~~ erb
  <% page_articles[0..30].each do |article| %>

    <% if article.data.link %>
    <!-- Link Posts -->
    <h3> <%= link_to article.title, article.data.link %></h3>

    <% else %>

    <!-- Non link post -->
    <h3 class="non-link"> <%= link_to article.title, article %></h3>
    <% end %>

    <% if article.data.link %>
    <small> <%= article.date.strftime('%e of %B, %Y') %> | <%= link_to '&spades;', article %> </small>

    <% else %>

    <small> <%= article.date.strftime('%e of %B, %Y') %> </small>

    <% end %>
~~~

Where ``page_articles[0..30].each do |article|`` is how many blog posts you want to show, in my case 30.

  Next, open up ``config.rb`` and paste in:

~~~ ruby
page "{{POST_FOLDER}}/*", :layout => "article" # Obviously change {{POST_FOLDER}} to the actual place where your posts are.
~~~
 This pretty much says 'hey, for our blog posts please set it to the ``article.erb`` file[^2]' instead of the ``layout.erb`` file.

####The posts

Now that we have the code all nice and set up, lets actually write some link posts. Inside a link post, the front matter should look like:

~~~ yaml
  ---
  title: Updated Middleman Linklog, so now it actually makes  sense.
  date: 2015-10-18
  tags: middleman, linklog, ruby, programming 
  link: http://gizmodo.com/how-many-laser-pointers-would-it-take-to-kill-a-human-1728253506
  ---

  Heres our commentary on the link post.
~~~

For a non link post, simply omit the ``link``.

And we're done here. Now, go away and linklog to your hearts content.


UPDATE: [I added RSS, because it's not a linklog without RSS](/2016/01/middleman-linklog-rss-fix/).

[^1]: You can actually call it whatever you want, I just like to call it this because it makes sense.

[^2]: Without it, the post would display no title. Try it yourself if you don't believe me.