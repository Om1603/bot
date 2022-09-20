const { MessageEmbed } = require("discord.js")

module.exports = (client, message, args) => {
    const channelID = '830162748142911548' //welcome ID
    const targetChannelID = '830066908581593089' //rules
    const targetChannelID4 = '830715253301706753' //mc server
    const targetChannelID5 = '830066917128536135' //events
    const targetChannelID2 = '830066919225688064' //general
    const targetChannelID3 = '782668486270386177' //self-role
    const targetChannelID6 = '830066915598794802'
    const targetChannelID7 = '830066914776449034'


    client.on('guildMemberAdd', (member) => {

        const channel = member.guild.channels.cache.get(channelID)

        const embed = new MessageEmbed()
        .setTitle(`Welcome`)
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setDescription(`**Hello**, <@${member.user.id}> **Welcome to our server!**\n`)
        .setAuthor(`${member.guild.name}`)
        .addFields(
            { name: `**Make sure to check out these channels**`, value:`${member.guild.channels.cache.get(targetChannelID).toString()},${member.guild.channels.cache.get(targetChannelID4).toString()},\n ${member.guild.channels.cache.get(targetChannelID5).toString()}, ${member.guild.channels.cache.get(targetChannelID6).toString()}` },
            { name: '\u200B', value: '\u200B' },
            { name: '**Make sure to Get a role **', value: `${member.guild.channels.cache.get(targetChannelID3).toString()}`, inline: true },
            { name: '**Make sure to Join us at**', value: `${member.guild.channels.cache.get(targetChannelID2).toString()}`, inline: true },




        )
        
        .setColor('RANDOM')
        .setImage(url='https://cdn.discordapp.com/attachments/782668486790217738/830782149334007838/ezgif-4-aad9e0e98864.gif')
        .setFooter(`Welcome ${member.user.username}#${member.user.discriminator}`,member.user.displayAvatarURL({dynamic: true, size: 512}))
        
    
        channel.send(embed)
    })
}