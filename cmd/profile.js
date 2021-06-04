const Discord = require('discord.js');
const fs = require('fs');
const config = require('../conf/config.json');
let prefix = config.prefix
const { monitorEventLoopDelay } = require('perf_hooks');
let color = config.color;

module.exports.run = async (bot,message,args) => {
    let a = message.guild.member(message.mentions.members.first());
    if(!args[0]) {
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return send("У меня нет права выдавать Warn пользователей на этом сервере!");
        let b = message.author
        if(b.bot === false){
            var botuser = "Нет"
        }
        if(b.bot === true){
            var botuser = "Да"
        }
        const embed = new Discord.MessageEmbed()
        .setDescription("Информация об игроке")
        .setColor(color)
        .setThumbnail(b.displayAvatarURL())
        .addField("Имя",b.username)
        .addField("Тэг",b.tag)
        .addField("Дискриминатор",b.discriminator)
        .addField("Создание аккаунта",b.createdAt)
        .addField("ID",b.id)
        .addField("Вы бот?",botuser)
        message.channel.send(embed)

    };
    if(!a) return
    if(a.user.bot === false){
        var botuser = "Нет"
    }
    if(a.user.bot === true){
        var botuser = "Да"
    }
    const embed = new Discord.MessageEmbed()
    .setDescription("Информация об игроке")
    .setColor(color)
    .setThumbnail(a.user.displayAvatarURL())
    .addField("Имя",a.user.username)
    .addField("Тэг",a.user.tag)
    .addField("Дискриминатор",a.user.discriminator)
    .addField("Создание аккаунта",a.user.createdAt)
    .addField("ID",a.id)
    .addField("Бот?",botuser)
    message.channel.send(embed)
};
module.exports.help = {
    name: "profile"
};