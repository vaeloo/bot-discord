const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!');
});

client.login('NDIxMjk2MzA2OTAwOTU5MjMz.DYLS0w.epKyf1nK1Pe3uell0fZ92Ch28t8');

client.on('message', message => {
    
    if (message.content === 'help' === 'Help') {
    	message.channel.send(menu());
	}

	if (message.content === 'Food' || 'food') {
		message.channel.send({
			file: "https://vignette.wikia.nocookie.net/day-r/images/9/9c/Food_%28icon%29.png"
	});else if (message.content === 'Food' || 'food') {
			message.channel.send('1. Toxit Water');
			message.channel.send('2. Dirty Water');
			message.channel.send('3. Clean Water');
			message.channel.send('4. Pepsi');
			message.channel.send('5. Red Wine');
		}
	}
	if (message.content === 'Map' || 'map') {
		message.channel.send({
			file: "https://www.dropbox.com/s/yqak43zyyoh9hnb/Map%20Day%20R%20Bagus.jpg"
		});
	}

	menu(){
		message.channel('Food');
		message.content('Map');
	}
});