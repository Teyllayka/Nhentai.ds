const Discord = require('discord.js')
const client = new Discord.Client();
const config = require("../config.json");
const hentai = require('nhentai-js');
const nHentai = require("@v0idpointer/nhentai.js");


module.exports.run = async (client, message, args) => {

    if (message.content.startsWith(config.prefix + "nhentai")) {  
        nHentai.GetDoujin(args[0]).then(doujin => {
            (async () => {
                var dojin = await hentai.getDoujin(args[0])
                
                
                    if (args[1] == undefined) {

                    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle(dojin.title)
                        .setImage(dojin.pages[0])
                        .addField("Tags: ", dojin.details.tags)
                        .addField("Pages: ", dojin.pages.length-1n)
                        .addField("Url:", dojin.link)
                    message.channel.send(exampleEmbed);
                } else {
                    message.channel.send(dojin.pages[args[1]]);
                        

                }
            })();
        });       
    }
}
    

module.exports.help = {
    name: "nhentai"
}