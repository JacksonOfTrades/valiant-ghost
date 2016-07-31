---
date: 2015-12-21T00:00:00Z
description: Some stuff that wasn't clear in the documentation.
tags: middleman, programming , dear past me
title: Middleman Syntax Highlighting
# url: /2015/12/21/middleman-syntax-highlighting/
---

I recently changed from a simple contrasting background for my code to using the official [Middleman syntax](https://github.com/middleman/middleman-syntax) plugin for this site. It's quite good, but there were a few things lacking in the pages official documentation. I thought I should clear this up.

Firstly, they tell you that to actually enable [the syntax highlighting itself](https://github.com/middleman/middleman-syntax#css) you need to make a ```.css.erb``` file and include it in your project. However, nowhere do they say you actually have to insert the file as a css file for it to work. For example, my css.erb file is ```code.css.erb```. It wasn't until I realised I have to include the file in the ```<head>``` of my layout file that it actually worked

~~~ erb
 
    <%= stylesheet_link_tag "code" %>

~~~

Secondly, you have to set the color of the background yourself, which in this case as I was using Monokai I set as ```#222823``` so that it had a nice background to be on, similar to the actual monokai color scheme. I set it as:

~~~ css
  
    pre{
      color: #222823;
    }
  
~~~

which allows me to have the monokai background.

The plugin is good, it just need some work in the documentation.