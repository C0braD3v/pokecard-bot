const pokemon = require('pokemontcgsdk')
const Discord = require('discord.js')
const simple = require('../libs/embed')

module.exports.run = async (client, message, args, _isOwner) => {

    try{ 
    var search = args.join(" ")
    if (!search) return simple.embed('You must search for a card!', message)
    pokemon.card.where({ name: search })
    .then(cards => {
        let cardEmbed = new Discord.MessageEmbed()
        cardEmbed.setAuthor("Top 10 search results for card: " + search)
        for(let i = 0; i < 10; i++) {
            cardEmbed.addField(i + 1 + '. ' + cards[i].name, "ID: " + `[**\`${cards[i].id}\`**](${cards[i].imageUrl})`, true)
        }
        cardEmbed.setColor("RANDOM")
        cardEmbed.setTimestamp()
        cardEmbed.setFooter("Requested by: " + message.author.tag)
        message.channel.send(cardEmbed)
    })
}
    catch (error) {
    console.log(error)
    }
}
module.exports.help = {
    aliases: []
};
