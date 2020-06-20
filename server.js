//loki discord bot
// by oran collins
// github.com/wisehackermonkey
// oranbusiness@gmail.com
// 20200619

//load api token from .env
require("dotenv").config();

const Discord = require("discord.js");
const bot = new Discord.Client();

const logger = require("winston");

bot.on("message", (server_message) => {
  let { content, author, ...rest } = server_message;
  let { username, id, lastMessageID, createdAt, joinedAt } = author;

  console.log(`${username}:> ${content}`);

  //loki responds
  if (content.includes("/loki")) {
    server_message.reply(
      "You must be mistaken... I am not loki, you are loki!"
    );
  }
});

bot.on("ready", () => {
  console.log("Loki bot server: has started.");
});

let { API_TOKEN, ENVIRONMENT } = process.env;

if (ENVIRONMENT === "production") {
  bot.login(API_TOKEN); //For Online Deploy
} else if (ENVIRONMENT === "dev") {
  console.log("API token: " + process.env.API_TOKEN);
  console.log("Env: " + ENVIRONMENT);
  bot.login(API_TOKEN); //For l
}
