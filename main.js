const Discord = require('discord.js')
const client = new Discord.Client({ disableEveryone: true })
const fs = require('fs')
const Enmap = require("enmap");
const owners = ['OWNER_IDS']



fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
    props.help.aliases.forEach(alias => {
      client.commands.set(alias, props)
    })
  });
});

client.login("TOKEN");
