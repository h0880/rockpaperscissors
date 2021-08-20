const dotenv = require('dotenv');

dotenv.config();

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [

  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGE_TYPING,
  Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
  Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  Intents.FLAGS.GUILD_MEMBERS]});

  console.log("Logging Bot into Discord");
  console.log(process.env.A);
  console.log(process.env.B);
  console.log(process.version);

  client.login(process.env.RPSBOTTOKEN);

client.on("ready", readyDiscord);

function readyDiscord() {
    console.log("Bot logged into Discord");
}

const replies = [

    "Rock",
    "Paper",
    "Scissors"

]

client.on("messageCreate", gotMessage);

function gotMessage(msg) { 

const iwin = "I Win"
const youwin = "You Win"
const draw = "It's a draw"

if (msg.author.bot) return

  if (msg.channel.id == '877819255918313502' && msg.content === "Rock") {
    const index = Math.floor(Math.random() * replies.length)
    msg.channel.send(replies[index])

    if (replies[index] === "Rock")
    msg.channel.send(draw)
    else if (replies[index] === "Paper")
    msg.channel.send(iwin)
    else if (replies[index] === "Scissors")
    msg.channel.send(youwin);

   } else if (msg.channel.id == '877819255918313502' && msg.content === "rock") {
    const index = Math.floor(Math.random() * replies.length)
    msg.channel.send(replies[index])

    if (replies[index] === "Rock")
    msg.channel.send(draw)
    else if (replies[index] === "Paper")
    msg.channel.send(iwin)
    else if (replies[index] === "Scissors")
    msg.channel.send(youwin);

} else if (msg.channel.id == '877819255918313502' && msg.content === "Paper") {
    const index = Math.floor(Math.random() * replies.length)
    msg.channel.send(replies[index]);

    if (replies[index] === "Rock")
    msg.channel.send(youwin)
    else if (replies[index] === "Paper")
    msg.channel.send(draw)
    else if (replies[index] === "Scissors")
    msg.channel.send(iwin);

} else if (msg.channel.id == '877819255918313502' && msg.content === "paper") {
    const index = Math.floor(Math.random() * replies.length)
    msg.channel.send(replies[index]);

    if (replies[index] === "Rock")
    msg.channel.send(youwin)
    else if (replies[index] === "Paper")
    msg.channel.send(draw)
    else if (replies[index] === "Scissors")
    msg.channel.send(iwin);

} else if (msg.channel.id == '877819255918313502' && msg.content === "Scissors") {
    const index = Math.floor(Math.random() * replies.length)
    msg.channel.send(replies[index]);

    if (replies[index] === "Rock")
    msg.channel.send(iwin)
    else if (replies[index] === "Paper")
    msg.channel.send(youwin)
    else if (replies[index] === "Scissors")
    msg.channel.send(draw);

} else if (msg.channel.id == '877819255918313502' && msg.content === "scissors") {
    const index = Math.floor(Math.random() * replies.length)
    msg.channel.send(replies[index]);

    if (replies[index] === "Rock")
    msg.channel.send(iwin)
    else if (replies[index] === "Paper")
    msg.channel.send(youwin)
    else if (replies[index] === "Scissors")
    msg.channel.send(draw);
}

  }