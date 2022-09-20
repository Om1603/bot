module.exports = {
    name: 'ban',
    description: 'this command bans a player',
    execute(client, message, args) {
        if ( message.member.permissions.has('BAN_MEMBERS')) {
                   const member = message.mentions.users.first();
                   if (member) {
                      const memberTarger = message.guild.members.cache.get(member.id);
                       memberTarger.ban();
                       message.channel.send('User has been Banned')
       
                   } else {
                     message.channel.send('You couldnt Ban that member')
                   }
               } else {
                   message.channel.send('You dont have permission to use that command')
              }
           }
}

