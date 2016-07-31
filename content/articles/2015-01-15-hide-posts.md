---
date: 2015-01-15T00:00:00Z
published: false
tags: Octopress, blogging
title: How to hide posts in Octopress
# url: /2015/01/15/hide-posts/
---

I don't publish a lot of the posts I write for this blog, for a number of reasons. Mostly it comes down to either it doesn't fit the theme of the site or sounds strange. That doesn't mean I don't publish things, in fact, one of the first things I tried to do was hide posts so I could publish them, but keep them off the front page and the RSS feed. A quick Google search later, and I came across [this](http://arshad.github.io/blog/2012/05/10/recipe-hiding-posts-from-the-octopress-front-page/), which does exactly that. However, it requires editing pagination.rb, which for some reason was not anywhere in my plugin's folder (I have since added it). So, I went about making the bit of code standalone, so I could use it without Pagination.

~~~ ruby
module Octopress
	class Dwavres
		def generate(site)
		op = (site.config['front_page_categories_hide'] == 'hide') ? 'delete_if' : 'keep_if';
		if site.config['front_page_categories'].kind_of?(Array)
		all_posts.send(op) do |post|
	(site.config['front_page_categories'] & post.categories).size == 2
	 end
  end
 end
end
end
~~~

Copy it and put the <code>plugin</code> in your <code>octopress/pluigns</code> directory. Make sure it's got an <code>.rb</code> extension.

For documentation on how to use it, [refer to this](http://arshad.github.io/blog/2012/05/10/recipe-hiding-posts-from-the-octopress-front-page/)

The post isn't completely hidden, there are two ways to get to a post. One is to use the link and by using the next and last post buttons.
