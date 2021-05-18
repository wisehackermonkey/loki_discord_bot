//loki discord bot
// by oran collins
// github.com/wisehackermonkey
// oranbusiness@gmail.com
// 20200619

//load api token from .env
require("dotenv").config();

const Discord = require("discord.js");
const bot = new Discord.Client();

//setup console colorizing text
const winston = require("winston");

let state = 0;

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    ),
    defaultMeta: { service: "user-service" },
    transports: [
        ,
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "combined.log" }),
    ],
});

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

    if (content.includes("/adventure")) {

      command = content.substr()
        switch (state) {
            case 0:
                server_message.reply("You are standing infront of Vault13");
                break;
            case 0:
                server_message.reply("Door to Vault13 are now closed.");
                  break;
            default:
                break;
        }
    }
});

bot.on("ready", () => {
    logger.info("Connected");
    logger;
    logger.info("Loki bot server: has started.");
});

let { API_TOKEN, ENVIRONMENT } = process.env;

if (ENVIRONMENT === "production") {
    bot.login(API_TOKEN); //For Online Deploy
    logger.add(
        new winston.transports.Console({
            format: winston.format.simple(),
        })
    );
} else if (ENVIRONMENT === "dev") {
    logger.level = "debug";
    console.log("API token: " + process.env.API_TOKEN);
    console.log("Env: " + ENVIRONMENT);
    bot.login(API_TOKEN); //For l
}
