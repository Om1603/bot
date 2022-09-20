const Discord = require('discord.js')

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const fs = require('fs');
const welcome = require('./commands/welcome');

const config = require('./config.json')
const mongo = require('./mongo')



client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handlers', 'event_handlers'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
})

client.on('ready', async () => {
  
    welcome(client)
  
    // await mongo().then((mongoose) => {
    //   try {
    //     console.log('Connected to mongo!')
    //   } finally {
    //     mongoose.connection.close()
    //   }
    // })
  })



client.login(config.token);
