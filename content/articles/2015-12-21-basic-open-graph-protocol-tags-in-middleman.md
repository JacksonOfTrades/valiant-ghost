---
date: 2015-12-21T00:00:00Z
description: Getting Facebook and Twitter to realise stuff about this site
tags: middleman, open graph protocol, programming, twitter
title: Basic Open Graph Protocol/Twitter Card tags in a Middleman Blog
# url: /2015/12/21/basic-open-graph-protocol-tags-in-middleman/
---

I've been doing a few tweaks in the backend of this site recently. Nothing that should really effect you[^1] but I've finally got around to adding Open Graph Protocol and Twitter Card tags to this site, and making sure it will display everything I want it to.

This is the code I have made, although note that this is coded for my article layout and with [Link posts in mind](https://valiantghost.com/2015/10/middleman-linklog-v2/). If you're not running link posts, then skip to the end of this post where I will put a non link post version. There'll be a big **NON LINK POST** header so you know its what you're looking for. 

### Link post/article version

Copy and paste the following code in between the ```<head></head>``` tags.

~~~ erb
    
    <% page_articles.index do |article, i| %>
        <!-- Open graph/Facebook -->
	  <meta property="og:title" content="<%= current_article.title %>" />
      <meta property="article:author" content="Your name" />    
      <meta property="article:publisher" content="You name" />    
  
    <% if current_article.data.summary %>
      <meta property="og:description" content="<%= current_article.data.summary %>" />
    <% elsif current_article.data.link %>
      <meta property="og:description" content="<%= current_article.title + "→" %>" />
    <% else %>
      <meta property="og:description" content="Your website description" />
    <% end %>

    <% if current_article.data.link %>
      <!-- Link post -->
      <meta property="og:type" content="link" />        
    <% else %>
      <!-- Non link post -->
      <meta property="og:type" content="article" />
    <% end %>

    <% if current_article.data.image %>
      <meta property="og:image" content="<%= current_article.data.image %>" />
    <% else %>
      <meta property="og:image" content="http://valiantghost.com/spadestwitter.jpg" />
    <% end %>

      <meta property="og:url" content="<%= "http://example.com" + current_article.url %>" />
    <% end %>
      <meta property="og:site_name" content="Your Website name" />
      
<!-- Twitter cards -->

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@ManOTheClassics" />
      <meta name="twitter:title" content="<%= current_article.title + "Website name" %>" />
    <% if current_article.data.summary %>
      <meta property="twitter:description" content="<%= current_article.data.summary %>" />
    <% elsif current_article.data.link%>
      <meta property="twitter:description" content="<%= current_article.title + "→" %>" />
    <% else %>
      <meta property="twitter:description" content="Your website description" />
    <% end %>
    
    <% if current_article.data.image %>
      <meta property="twitter:image" content="<%= current_article.data.image %>" />
    <% else %>
      <meta property="twitter:image" content="http://valiantghost.com/spadestwitter.jpg" />
    <% end %>

~~~



And now to explain what everything does!

#### Open Graph

##### og:title

~~~ erb

    <meta property="og:title" content="<%= current_article.title %>" />
    <meta property="article:author" content="Your name" />      
    <meta property="article:publisher" content="You name" />  

~~~

For ```og:title``` it pulls the current title of the post and has it displayed. 

##### og:description

~~~ erb
  
    <% if current_article.data.summary %>
      <meta property="og:description" content="<%= current_article.data.summary %>" />
    <% elsif current_article.data.link %>
      <meta property="og:description" content="<%= current_article.title + "→" %>" />
    <% else %>
      <meta property="og:description" content="Your website description" />
    <% end %>

~~~

Here, we get to define our title in different ways. Firstly, you can set the posts description in the YAML front matter, where it will be displayed. Or if you're running link posts, then it displays the link post title with an arrow after it, as it is the basic approach to marking link post. And finally, if none of them are selected then it will instead just display a description of your website that you can set.

##### og:type

~~~ erb

    <% if current_article.data.link %>
      <!-- Link post -->
      <meta property="og:type" content="link" />        
    <% else %>
      <!-- Non link post -->
      <meta property="og:type" content="article" />
    <% end %>

~~~

Here, it will simply set the og:type as link if its a link post, or article if its not a link post. Simple.

##### og:image

~~~ erb
  
    <% if current_article.data.image %>
      <meta property="og:image" content="<%= current_article.data.image %>" />
    <% else %>
      <meta property="og:image" content="http://valiantghost.com/spadestwitter.jpg" />
    <% end %>

~~~

Here, you can also set og:image using the YAML front matter . Here, I've got it set up so if an image is not detected in the front matter, it will simply display the default spades mascot for this site on a ```#33495f``` background, same as the header. You can set it to whatever you want.

##### og:url

~~~ erb

    <meta property="og:url" content="<%= "http://example.com" + current_article.url %>" />
  
~~~

I don't know if theres an easier way to work this out, but here is how you can get the full url to display properly. Obviously change ```example.com``` to the actual name of your website to get the full effect, and when you deploy the site the full URL will be displayed.

#### Twitter Cards

I set this up with the summary card type, as thats probably the most likely for a Middleman blog.

~~~ erb
	  
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@Mytwitter" />
      <meta name="twitter:title" content="<%= current_article.title + "Website name" %>" />
      
~~~

Sets the title of the article plus the name of the website.

##### twitter:description

~~~ erb
  
    <% if current_article.data.summary %>
      <meta property="twitter:description" content="<%= current_article.data.summary %>" />
    <% elsif current_article.data.link%>
      <meta property="twitter:description" content="<%= current_article.title + "→" %>" />
    <% else %>
      <meta property="twitter:description" content="Your website description" />
    <% end %>
    
~~~

Just like with og:description, you can set the description in either the YAML front matter, or if its a link post it will display the arrow. If neither of these are true it will display a description you can set.

##### twitter:image

~~~ erb
    
    <% if current_article.data.image %>
      <meta property="twitter:image" content="<%= current_article.data.image %>" />
    <% else %>
      <meta property="twitter:image" content="http://valiantghost.com/spadestwitter.jpg" />
    <% end %>

~~~

Just like with the og version, here you can set an image in the YAML front matter, or it will default to a generic image. 

### Front Page for Linklog and normal blogs

This one requires nearly zero else/if statements.

~~~ erb

    <meta property="og:title" content="Website title" />
    <meta property="og:type" content="website" />      
    <meta property="og:url" content="http://example.com/" />
    <meta property="og:site_name" content="Website title" />
    <meta property="og:image" content="http://valiantghost.com/spadestwitter.jpg" />
    <meta property="og:description" content="Your website desciption" />
  
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@Mysite" />
    <meta name="twitter:title" content="Website title" />
    <meta name="twitter:description" content="Your website decription" />
    <meta name="twitter:image" content="http://valiantghost.com/spadestwitter.jpg" />
    
~~~

### Non-Link Post/article version

She same as the above with the else/if statements removed for links posts.

~~~ erb

    <% page_articles.index do |article, i| %>
      <!-- Open graph/Facebook -->
	  <meta property="og:title" content="<%= current_article.title %>" />
      <meta property="article:author" content="Your name" />    
      <meta property="article:publisher" content="You name" />    
  
	<% if current_article.data.summary %>
      <meta property="og:description" content="<%= current_article.data.summary %>" />
    <% else %>
      <meta property="og:description" content="Your website description" />
    <% end %>

      <meta property="og:type" content="article" />

    <% if current_article.data.image %>
      <meta property="og:image" content="<%= current_article.data.image %>" />
    <% else %>
      <meta property="og:image" content="http://valiantghost.com/spadestwitter.jpg" />
    <% end %>

      <meta property="og:url" content="<%= "http://example.com" + current_article.url %>" />
    <% end %>
      <meta property="og:site_name" content="Your Website name" />
      
<!-- Twitter cards -->
	 
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@ManOTheClassics" />
      <meta name="twitter:title" content="<%= current_article.title + "Website name" %>" />
    <% if current_article.data.summary %>
      <meta property="twitter:description" content="<%= current_article.data.summary %>" />
    <% else %>
      <meta property="twitter:description" content="Your website description" />
    <% end %>
    
    <% if current_article.data.image %>
      <meta property="twitter:image" content="<%= current_article.data.image %>" />
    <% else %>
      <meta property="twitter:image" content="http://valiantghost.com/spadestwitter.jpg" />
    <% end %>
    
~~~

Tada! It should work perfectly. It does for me. Please contact me if it doesn't. 


[^1]: Except infinite scroll is coming soon. You may be interested in that.