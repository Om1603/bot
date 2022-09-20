const { MessageEmbed } = require('discord.js')


module.exports = {
    name: 'unmute',
    description: 'this command unmutes a player',
    execute(client, message, args) {
        if ( message.member.permissions.has('MUTE_MEMBERS')) {
            const target = message.mentions.users.first();
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted`)



            } else {
                const yoEmbed = new MessageEmbed()
                .setDescription(`**Please mention the member you want to unmute**`)
                .setColor("BLUE")
                message.channel.send(yoEmbed)
            }

            

        } else {
            const yooEmbed = new MessageEmbed()
                .setDescription(`**You dont have permissions**`)
                .setColor("RED")
                message.channel.send(yooEmbed)
        }
    }
}