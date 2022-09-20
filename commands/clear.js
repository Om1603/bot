module.exports = {
    name: 'clear',
    description: 'this is a command to clear messages',
    async execute(client, message, args) {
        if (message.member.permissions.has ('MUTE_MEMBERS')) {
        if(!args[0]) return message.reply('Please enter the amount of messages that you want to clear');
        if(isNaN(args[0])) return message.reply('Please enter a real number');

        if(args[0] > 100) return message.reply('You cannot delete more than 100 messages :D');
        if(args[0] < 1) return message.reply('You must delete atleast 1 message');

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    } else {
        message.channel.send('Do u think I am Dumb ?')
    }
} 
    
}