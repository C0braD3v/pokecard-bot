const Discord = require('discord.js')


module.exports = (client, message) => {
    client.user.setActivity("PokeCard v0.0.1 - p!search"); 
    client.channels.get('CHANNEL_ID').send(
        new Discord.MessageEmbed()
            .setAuthor('PokeCard Startup')
            .setDescription('<a:check:620394300408332294> **Hello World!** I\m PokeCard, and i\'m a bot developed by RevokedCookie to help serve the All Things Pokemon Discord server!')  
            .setColor(0x00d933)
            .setTimestamp())
    console.log('Pokecard has started up')
};
