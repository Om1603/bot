const Discord = require('discord.js')

const mongo = require('../../mongo')
const welcome = require('../../commands/welcome')
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });



module.exports = async  () => {
    console.log('Tu13Dekh is Online')
    welcome(client)

    
    }
    
