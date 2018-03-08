const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!');
});

client.login('NDIxMjk2MzA2OTAwOTU5MjMz.DYLS0w.epKyf1nK1Pe3uell0fZ92Ch28t8');

client.on('message', message => {
    if (message.content === 'help') {
    	message.channel.send('List Command');
	}

	if (message.content === 'Food') {
		message.channel.send('Acar');
		message.channel.send('Air');
		message.channel.send('Shawarma');
	}
});