const Telegraf = require('telegraf')
var token='775276632:AAFihqMol018mEN0q1bV-xbuknIibmv8Zok';

const bot = new Telegraf(token)

bot.start((ctx) => ctx.reply('Hello'))
bot.help((ctx) => ctx.reply('Enviame un sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hola'))
bot.launch()
