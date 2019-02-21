const Telegraf = require('telegraf')
var token='638405358:AAHVXqhlPGcOS8iT_WEeaWJTsJXVzHXytvk';

var moment=require('moment');

const bot = new Telegraf(token)

bot.start((ctx) => ctx.reply('Hello'))
bot.help((ctx) => ctx.reply('Enviame un sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hola'))

var fechaEstreno=new Date("2019-04-14").getTime();


bot.command('got', (ctx) => {
    moment.locale('ES');

    var fechaActual=new Date().getTime();

    var diferenciaFechas=fechaEstreno-fechaActual;

    //de la diferencia extraer los dias horas minutos
   
    //var resultado=moment(diferenciaFechas,'yyyy-mm-dd',true).format();
    var resultado=new Date(diferenciaFechas);

    //diferencia de fechas con moment
    var diaEstreno=moment('2019-04-14');
    var hoy=moment();

    resultado=diaEstreno-hoy;

    resultado=hoy.to(diaEstreno);


    return ctx.reply(''+resultado+' vuelve GOT gente');
})





bot.launch()
