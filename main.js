const { Client, Intents } = require('discord.js'); 
const client = new Client({ intents: [32767] })
client.login('MTAyMjUzODkxMzUyMjM5NzI4NA.GhtbxW.YuOlEAEIcc8Kqsdv9jYVHgoK2swiBVzDmE81v8');  


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