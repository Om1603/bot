module.exports = {
    name: 'rules',
    description: 'embeds!',
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle('Rules')
        .setURL('https://youtube.com')
        .setDescription(`1 | Respect Everyone\n2 | No Spam\n3 | No Inappropriate Content\n4 | Use The Channels Properly\n5 | Respect Server Staff\n`)
        
        
        .setFooter('Make sure to check out the rules channel')

        message.channel.send(newEmbed)
    }

    
}