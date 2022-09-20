const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'hi',
    description: 'this is a hi command',
    execute(client, message, args) {
        const Hi = new MessageEmbed()
        .setTitle(`Hello, ${message.member.user.tag}`)
        .setColor('WHITE')



        message.channel.send(Hi);
    }
    
}