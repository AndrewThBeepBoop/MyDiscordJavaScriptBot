const Discord = require('discord.js');
const fs = require('fs');
const { monitorEventLoopDelay } = require('perf_hooks');

module.exports.run = async (bot,message,args) => {
    message.delete().catch();
    message.channel.send('https://s00.yaplakal.com/pics/pics_original/7/4/5/13334547.jpg')
};
module.exports.help = {
    name: "bibabob"
};