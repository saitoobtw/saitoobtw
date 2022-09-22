const { Client, Intents } = require('discord.js'); 
const client = new Client({ intents: [32767] })
client.login('токен вашего бота');  


client.once('ready',   () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', message => {
    console.log('message')
    if(!message.content.starsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        message.channel.send('pong!');
    } else if (command == 'youtube'){
        message.channel.send('asdadasd');
    }
    
})  
