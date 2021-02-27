require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const logger = require('../utils/logger');

const TOKEN = process.env.TOKEN;

console.log(TOKEN);

exports.start = function() {
    bot.login(TOKEN)
    .then(() => {
        logger.log('Discord', 'Connected To Discord Channel');
    })
    .catch((error) => {
        logger.error('Discord', 'Failed To Connect To Discord');
    });

    bot.on('message', msg => {
        logger.log('Discord', "Message From " + msg.author + ' : ' + msg.content)
        if(msg.content.startsWith("!")) {
            switch(msg.content.split(' ')[0]) {
                case '!ping':
                    msg.channel.send('Pong');
                    break;
                default:;
            }
        }
    });
}