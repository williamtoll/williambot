const Telegraf = require('telegraf')
var token = '638405358:AAHVXqhlPGcOS8iT_WEeaWJTsJXVzHXytvk';

var moment = require('moment');

const bot = new Telegraf(token)

bot.start((ctx) => ctx.reply('Hello'))
bot.help((ctx) => ctx.reply('Enviame un sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hola'))

var fechaEstreno = new Date("2019-04-14").getTime();

var houses = ["targaryen", "arryn", "martell", "tyrell", "greyjoy", "stark", "baratheon", "tully", "lannister"];

var days_text="",hours_text="",minutes_text="",seconds_text="";
var days_no=0;hours_no=0,minutes_no=0;seconds_no=0;

bot.command('got', (ctx) => {
    moment.locale('ES');

    var fechaActual = new Date().getTime();

    var diferenciaFechas = fechaEstreno - fechaActual;

    //de la diferencia extraer los dias horas minutos

    //var resultado=moment(diferenciaFechas,'yyyy-mm-dd',true).format();
    var resultado = new Date(diferenciaFechas);

    //diferencia de fechas con moment
    var diaEstreno = moment('2019-04-14');
    var hoy = moment();

    //resultado = diaEstreno - hoy;

    //resultado = hoy.to(diaEstreno);

    countDown(new Date(Date.UTC(2019, 3, 15, 01, 00, 00, 000000)));
    //countDown(new Date());
    
    //switchHouse(houses[Math.floor(Math.random() * houses.length)]);

    resultado=days_no+ " "+days_text+" "+hours_no+" "+hours_text+" "+minutes_no+" "+minutes_text+" "+seconds_no+" "+seconds_text;
    console.log(""+resultado);

    return ctx.reply('En ' + resultado + ' vuelve GOT gente');
});

function countDown(t) {
    var e = new Date,
        n = (e = new Date(e.toUTCString())) < t,
        s = cRound((t.getTime() - e.getTime()) / 1e3, n),
        o = cRound(s / 60, n),
        d = cRound(o / 60, n),
        u = cRound(d / 24, n);
    d %= 24, 
    o %= 60, 
    s %= 60, 
    days_no=u, 
    hours_no=d, 
    minutes_no=o, 
    seconds_no=s, 
    days_text=(1 == u || -1 == u ? "dia" : "dias"), 
    hours_text=(1 == d || -1 == d ? "hora" : "horas"), 
    minutes_text=(1 == o || -1 == o ? "minuto" : "minutos"), 
    seconds_text=(1 == s || -1 == s ? "segundo" : "segundos"),

    setTimeout(function () {
        countDown(t)
    }, 1e3)
}

function switchHouse(t) {
    $("body").removeClass(), $("body").addClass(t), $(".selected").removeClass(), $(".house-change").find('a[href$="' + t + '"]').addClass("selected")
}


function cRound(t, e) {
    return e ? Math.floor(t) : Math.ceil(t)
}





bot.launch()