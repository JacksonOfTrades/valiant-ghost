---
date: 2016-01-11T00:00:00Z
description: Yes, you can now tweet from Discord.
tags: discord, javascript, nodejs, coding
title: Tweeting from Discord
# url: /2016/01/11/tweeting-from-discord/
---

I'm currently messing around with bots in [Discord](https://discordapp.com/) and here's a  basic bot to tweet from within Discord. I made it using [Discord.js](https://github.com/hydrabolt/discord.js) and [Node-Twitterbot](https://www.npmjs.com/package/node-twitterbot). You will need to register a [new twitter app to use it](https://apps.twitter.com/).

~~~javascript
var TwitterBot = require("node-twitterbot").TwitterBot;

var Discord = require("discord.js");

var mybot = new Discord.Client();

var Bot = new TwitterBot({
  "consumer_secret": "CONSUMER_SECRET",
  "consumer_key": "CONSUMER",
  "access_token": "ACCESS",
  "access_token_secret": "ACCESS_SECRET"
});

// Usage: !tweetthis [What you want to tweet]

mybot.on("message", function(message, TextChannel){
   if(message.content.indexOf("!tweetthis") >-1 && message.content[0] === '!'){ 
    var content = message.content.replace('!tweetthis ' , '');
      if (content.length > 140) {
         mybot.sendMessage(message.channel, "I'm sorry, but that's longer than 140 characters");
      } else {
      Bot.tweet(content)
    }
   }
});

mybot.login("email", "password");
~~~

You use it by typing ```!tweetthis``` followed by what you want to tweet, like so:

~~~markdown
!tweetthis I am tweeting this from Discord
~~~

It has no real use, something novel I just made on a lazy afternoon, but I had fun coding it. 
