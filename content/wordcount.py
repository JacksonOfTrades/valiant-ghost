import os
import re

path = 'C:/Users/boxih/Dropbox/Apps/Heroku/valiantghost/source/articles/'
wordCount = 0

# Regex to match YAML front matter and everything after it
regex = re.compile("(?s)(---.*---)(.*)")

# Iterate through all posts
for post in os.listdir(path):
    f = open(path+post, "r")
    result = re.match(regex, f.read())
    # Count words in everything after YAML front matter
    wordCount += len(result.group(2).split())
print "{:,}".format(wordCount) + " words!"
