const { MessageEmbed } = require('discord.js')


module.exports = {
    name: 'kick',
    description: 'this command kicks a player',
    execute(client, message, args) {
        if ( message.member.permissions.has('KICK_MEMBERS')) {
            const member = message.mentions.users.first();
            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                const banEmbed = new MessageEmbed()
                .setDescription(`**User Has Been Kicked**`)
                .setColor("RED")
                message.channel.send(banEmbed)

            } else {
                const hiEmbed = new MessageEmbed()
                .setDescription(`**Please mention the member you want to kick**`)
                .setColor("BLUE")
                message.channel.send(hiEmbed)
            }

        } else {
            const yoEmbed = new MessageEmbed()
                .setDescription(`**You Dont Have permission**`)
                .setColor("GREEN")
                message.channel.send(yoEmbed)
        }
    }
}