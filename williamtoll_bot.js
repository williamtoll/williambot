const Telegraf = require('telegraf')
var token = '638405358:AAHVXqhlPGcOS8iT_WEeaWJTsJXVzHXytvk';

var moment = require('moment');

const schedule = require('node-schedule');

const bot = new Telegraf(token)



const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter);

db.defaults({
        frases: []
    })
    .write();


bot.start((ctx) => {
    // console.log("ctx",ctx);
    // var tarea=schedule.scheduleJob('* */1 * * * *', function() {
    //     console.log("schedule job");
    //     bot.telegram.sendMessage(ctx.from.id, "Lo que se interponga en nuestro camino, lo derrotaremos");
    // });

    var tarea = schedule.scheduleJob('00 00 08 * * *', function () {
        console.log("schedule job");

        var idRandom = Math.floor(Math.random() * 11);
        console.log("idRandowm", idRandom);
        var fraseSeleccionada = db.get('frases')
            .find({
                id: idRandom
            })
            .value();

        console.log("fraseSeleccionada", fraseSeleccionada);

        countDown(new Date(Date.UTC(2019, 3, 15, 01, 00, 00, 000000)));

    
        resultado = days_no + " " + days_text + " " + hours_no + " " + hours_text + " " + minutes_no + " " + minutes_text + " " + seconds_no + " " + seconds_text;
        console.log("" + resultado);

        if (fraseSeleccionada) {
            bot.telegram.sendMessage(ctx.from.id, "Faltan "+resultado+"");
            bot.telegram.sendMessage(ctx.from.id, fraseSeleccionada.frase + " - " + fraseSeleccionada.author);
        }
    });

    ctx.reply('Hello there');

});
bot.help((ctx) => ctx.reply('Enviame un sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => {
    console.log("ctx", ctx);
    // var tarea=schedule.scheduleJob('30 00 * * * *', function() {

    ctx.reply('Hola');
});

bot.hears('Satélites', (ctx) => {
    console.log(ctx);
    console.log("from", ctx.from);
    console.log("message", ctx.message);

    //ctx.reply('And the  @'+ctx.from.username+'');
    ctx.reply('/top10@pdradrbot');
});

bot.hears('satelite', (ctx) => {
    console.log(ctx);
    console.log("from", ctx.from);
    console.log("message", ctx.message);

    //ctx.reply('And the  @'+ctx.from.username+'');
    ctx.reply('@' + ctx.from.username + ' gran candidato');
});

bot.hears('consultando ranking satelite...', (ctx) => {
    console.log(ctx);
    console.log("from", ctx.from);
    console.log("message", ctx.message);

    //ctx.reply('And the  @'+ctx.from.username+'');
    ctx.reply('@pdradrbot' + '📡');
});

var fechaEstreno = new Date("2019-04-14").getTime();

var houses = ["targaryen", "arryn", "martell", "tyrell", "greyjoy", "stark", "baratheon", "tully", "lannister"];

var days_text = "",
    hours_text = "",
    minutes_text = "",
    seconds_text = "";
var days_no = 0;
hours_no = 0, minutes_no = 0;
seconds_no = 0;



bot.command('frases_got', (ctx) => {

});

bot.command('got', (ctx) => {
    moment.locale('ES');

    //diferencia de fechas con moment
    var diaEstreno = moment('2019-04-14');

    countDown(new Date(Date.UTC(2019, 3, 15, 01, 00, 00, 000000)));

    var resultado = days_no + " " + days_text + " " + hours_no + " " + hours_text + " " + minutes_no + " " + minutes_text + " " + seconds_no + " " + seconds_text;
    console.log("" + resultado);


    return ctx.reply('En ' + resultado + ' vuelve GOT ⏳');
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
        days_no = u,
        hours_no = d,
        minutes_no = o,
        seconds_no = s,
        days_text = (1 == u || -1 == u ? "dia" : "dias"),
        hours_text = (1 == d || -1 == d ? "hora" : "horas"),
        minutes_text = (1 == o || -1 == o ? "minuto" : "minutos"),
        seconds_text = (1 == s || -1 == s ? "segundo" : "segundos"),

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



function insertarFrases() {
    let frase1 = {
        id: 0,
        frase: "Por qué será que en cuanto un hombre construye un muro, su vecino inmediatamente quiere saber qué hay del otro lado",
        author: "Tyrion Lannister"
    };


    let frase2 = {
        id: 1,
        frase: "El hombre que teme a la derrota ya ha sido derrotado",
        author: "Syrio Forel"
    };

    db.get('frases')
        .push(frase1)
        .write()

    db.get('frases')
        .push(frase2)
        .write()
}

bot.launch()