module.exports = {
    name: 'bye',
    description: 'this is a bye command',
    execute(client, message, args) {
        message.channel.send('Are tu jaa re');
    }
    
}