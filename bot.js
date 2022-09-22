const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Запустился бот ' + bot.user.tag);
})

bot.login('ваш токен бота');
