const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'mute',
    description: 'this command mutes a player',
    execute(client, message, args) {
        if ( message.member.permissions.has('MUTE_MEMBERS')) {
            const target = message.mentions.users.first();
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`)



            } else {

                const Embed = new MessageEmbed()
                .setTitle('Please mention the member to mute')
                .setColor('BLUE')
                message.channel.send(Embed)

            }

        } else {
            const Embed1 = new MessageEmbed()
                .setTitle('You Dont Have Permission')
                .setColor('RED')
                message.channel.send(Embed1)
        }
    }
}