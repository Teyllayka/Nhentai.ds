const Discord = require('discord.js')
const client = new Discord.Client();
const config = require("./config.json");
//const NSFW = require("discord-nsfw");
//const nsfw = new NSFW();
const hmtai = require("hmtai");
const nhentai = require('nhentai');
const api = new nhentai.API();
const hentai = require('nhentai-js');

let num;


client.on("ready", () => {
    console.log('i`m ready');
});


client.on("message", async (message) => {
    const args = message.content.slice(config.prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  
    if (message.content.startsWith(config.prefix + "abobo")) {
        if (!args.length) {
			return message.channel.send(`dolbaeb?, ${message.author}!`);
        } else if (args[0] === "hentai") {
            const exampleEmbed = new Discord.MessageEmbed()
                .setTitle('Some title')
                .setImage(hmtai.nsfw.hentai())
            message.channel.send(exampleEmbed);
            
        }


    }
    if (message.content.startsWith(config.prefix + "aboba")) {
        

        if (!args.length) {
			return message.channel.send(`dolbaeb?, ${message.author}!`);
        }

       
            hastag = false;
            

            
            do {
                num = Math.floor(Math.random() * 500000);
                a = hentai.exists(num)
                if (a == true) {
                    api.fetchDoujin(num).then(doujin => {
                        

                        if (doujin.hasTagByName(args[0]) == true) {
                            const exampleEmbed = new Discord.MessageEmbed()
                                .setColor('#0099ff')
                                .setTitle(String(doujin.titles.pretty) + "(" + String(args[0]) + ")")
                                .setImage(doujin.cover.url)
                                .addField("Tags: ", doujin.tags.all.map(tag => tag.name).join(', '))
                                .addField("Pages: ", doujin.length-1)
                                .addField("Url:", doujin.url)
                            message.channel.send(exampleEmbed);
                            hastag = true;
                        }
                        console.log("abobo");
                    });   
                } 
                
            }
            while(hastag == false);
    }
});


client.login(config.token);