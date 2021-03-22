import { Client, Message } from "discord.js";
import { gen_cmd, parseMessage, generateQuote } from "./operations"

require('dotenv').config()

const client: Client = new Client();
const BOT_KEY = process.env.BOT_KEY;

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}`)
  client.user?.setPresence({ activity: { name: '~help' }})
})

client.on('message', (msg) => {
  const content = msg.content;
  if (content.indexOf(gen_cmd) == 0) {
    const names = parseMessage(content)
    if (names.length && names.length <= 6) {
      msg.channel.send(generateQuote(names));
    } else {
      msg.channel.send('Error: bad # of names. Incorrect-Quotes-Generator supports 1 to 6 characters.')
    }
  }
})

client.login(BOT_KEY);

// https://discord.com/oauth2/authorize?client_id=823431644366897212&scope=bot&permissions=330816
