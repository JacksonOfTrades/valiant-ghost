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
