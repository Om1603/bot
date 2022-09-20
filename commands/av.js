const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'av',
    description: 'avatar',
    execute(client, message, args) {
        const Embed = new MessageEmbed()
        .setTitle('Your Avatar 😄')
        
        .setImage(message.author.displayAvatarURL({dynamic: true, size: 512}))
        message.channel.send(Embed)
        
    }

    
}