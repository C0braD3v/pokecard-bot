const pokemon = require('pokemontcgsdk')
const Discord = require('discord.js')
const simple = require('../libs/embed')

module.exports.run = async (client, message, args, _isOwner) => {

    try{ 
    var search = args.join(" ")
    if (!search) return simple.embed('You must search for a card!', message)
    pokemon.card.where({ name: search })
    .then(cards => {
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor("Top 10 search results for card: " + search)
        .addField("1. " + cards[0].name, "ID: " + `[**\`${cards[0].id}\`**](${cards[0].imageUrl})`, true)
        .addField("2. " + cards[1].name, "ID: " + `[**\`${cards[1].id}\`**](${cards[1].imageUrl})`, true)
        .addField("3. " + cards[2].name, "ID: " + `[**\`${cards[2].id}\`**](${cards[2].imageUrl})`, true)
        .addField("4. " + cards[3].name, "ID: " + `[**\`${cards[3].id}\`**](${cards[3].imageUrl})`, true)
        .addField("5. " + cards[4].name, "ID: " + `[**\`${cards[4].id}\`**](${cards[4].imageUrl})`, true)
        .addField("6. " + cards[5].name, "ID: " + `[**\`${cards[5].id}\`**](${cards[5].imageUrl})`, true)
        .addField("7. " + cards[6].name, "ID: " + `[**\`${cards[6].id}\`**](${cards[6].imageUrl})`, true)
        .addField("8. " + cards[7].name, "ID: " + `[**\`${cards[7].id}\`**](${cards[7].imageUrl})`, true)
        .addField("9. " + cards[8].name, "ID: " + `[**\`${cards[8].id}\`**](${cards[8].imageUrl})`, true)
        .addField("10. " + cards[9].name, "ID: " + `[**\`${cards[9].id}\`**](${cards[9].imageUrl})`, true)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("Requested by: " + message.author.tag)
            
        )
    })
// "**Card Name: **" + cards[0].name + "," + "**Card ID:** " + cards[0].id
}
    catch (error) {
    console.log(error)
    }
}
module.exports.help = {
    aliases: []
};
