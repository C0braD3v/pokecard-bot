const Discord = require('discord.js')
const cooldown = new Set();
const _ = require('lodash')

module.exports = async (client, message) => {
  if (message.channel.type == "dm") return
  if (message.author.bot) return
  const owners = ['OWNER_IDS']
  let prefix = 'p!'
  if (message.content.startsWith(prefix)) {
    var permissions = new Discord.Permissions(message.channel.permissionsFor(client.user.id).bitfield)
    if (!message.guild.me.hasPermission('SEND_MESSAGES', {checkAdmin: true})) return
    if (!permissions.has('SEND_MESSAGES', {checkAdmin: true})) return

    if (!message.guild.me.hasPermission('EMBED_LINKS', {checkAdmin: true})) return message.channel.send('You must give Retr0n the `Embed Links` permission for all commands to work!')
    if (!permissions.has('EMBED_LINKS', {checkAdmin: true})) return message.channel.send('You must give PokeCard the `Embed Links` permission in THIS channel for all commands to work!')

    const isOwner = owners.includes(message.member.id)
    const args = message.content.slice(Object.keys(prefix).length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
    if(!cmd) return
    cmd.run(client,message,args,isOwner)

    // If that command doesn't exist, silently exit and do nothing
  }}
