const Discord = require('discord.js')
const client = new Discord.Client();
const nhentai = require('nhentai');
const api = new nhentai.API();
const config = require("../config.json");


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
});

module.exports.help = {
    name: "abobo"
}