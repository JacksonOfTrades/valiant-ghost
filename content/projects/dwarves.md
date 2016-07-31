---
title: Dwarves - A plugin for Octopress to hide posts
---

<h1>Dwarves for Octopress - Hide blog posts</h1>

<p><a href="/projects/dwarves.rb">Direct Download</a> • <a href="https://github.com/Summonee/Dwarves">Github</a></p>

<p>I present to you, Dwarves an Octopress plugin for hiding posts from the front page of your Octopress blog. </p>

<h4>How to use</h4>

<p>First, download the file and put it in your <code>/plugins</code> folder. Next, open up <code>_config.yml</code> and paste in:</p>

  <pre>
front_page_categories: [hide] # A list of categories for the front page
front_page_categories_op : 'hide' # Whether to show or hide the list of categories from front_page_categories
  </pre>
  
<p>Next, in a post's you want to hide front matter, for its categories put 'hide' along with any other categories. This will hide the post from the front page but it will still be accessible from the url.</p>

<p>There you go, your posts are now completly hidden from view on your blogs front page.</p>