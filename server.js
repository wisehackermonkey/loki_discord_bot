//loki discord bot
// by oran collins
// github.com/wisehackermonkey
// oranbusiness@gmail.com
// 20200619

//load api token from .env
require("dotenv").config()


const Discord = require('discord.js');
const bot = new Discord.Client();

// console.log("API token: " + process.env.API_TOKEN)

bot.on("message", raw_message => {
    console.log("Raw Message: " + raw_message)
})

bot.on("ready", ()=>{
    console.log("Loki bot server: has started.")
})


bot.login(process.env.API_TOKEN); //For Online Deploy
