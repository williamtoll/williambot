const Telegraf = require('telegraf')
var token = '638405358:AAHVXqhlPGcOS8iT_WEeaWJTsJXVzHXytvk';

var moment = require('moment');

const schedule = require('node-schedule');

const bot = new Telegraf(token)



const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter);

const adapterImagenes = new FileSync('db_imagenes.json')
const dbImagenes = low(adapterImagenes);

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

    var tarea = schedule.scheduleJob('0 0 9 * * *', function () {
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

    ctx.reply('Iniciado');

});
//bot.help((ctx) => ctx.reply('Enviame un sticker'))
//bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => {
    console.log("ctx", ctx);
    // var tarea=schedule.scheduleJob('30 00 * * * *', function() {
//	CAADAgADPwEAAksODwABs3Wcq8kBQAkC
   //ctx.replyWithSticker("CAADAgADPwEAAksODwABs3Wcq8kBQAkC");

//staff got
//                ctx.replyWithPhoto("https://static0.srcdn.com/wordpress/wp-content/uploads/2019/03/Game-of-Thrones-Season-8.jpg?q=50&fit=crop&w=798&h=407");
//caminante blanco el jefe
		ctx.replyWithPhoto("https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2019/02/portada-got.jpg");

//    ctx.reply('Hola');
var usuario={};
insertarUsuario(ctx.message);
});


bot.on('new_chat_members',(ctx)=>{
	console.log("new_chat_member");
	console.log(ctx);
	console.log("new_chat_participant");
	console.log(ctx.message.new_chat_participant);
	console.log("new_chat_member");
	console.log(ctx.message.new_chat_member);
	ctx.reply("Bienvenido "+ctx.message.new_chat_member.first_name+" @"+ctx.message.new_chat_member.username);
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



bot.command('got_quotes', (ctx) => {
	var listaFrases=db.get('frases').size().value();
	console.log("listaFrases length",listaFrases);
        
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
//            bot.telegram.sendMessage(ctx.from.id, fraseSeleccionada.frase + " - " + fraseSeleccionada.author);
//            ctx.reply(fraseSeleccionada.frase + " - " + fraseSeleccionada.author);
 //           ctx.reply(fraseSeleccionada.frase);
        }

//	ctx.replyWithPhoto("https://i.blogs.es/b1ad0a/arya.nymeria/1366_2000.jpg");

});


bot.command('got', (ctx) => {
    moment.locale('ES');

    //diferencia de fechas con moment
    var diaEstreno = moment('2019-04-14');

    countDown(new Date(Date.UTC(2019, 3, 15, 01, 00, 00, 000000)));

    var resultado = days_no + " " + days_text + " " + hours_no + " " + hours_text + " " + minutes_no + " " + minutes_text + " " + seconds_no + " " + seconds_text;
    console.log("" + resultado);

	var listaFrases=db.get('frases');
	console.log("listaFrases",listaFrases.length);

        var idRandom = Math.floor(Math.random() * 5);
        console.log("idRandowm", idRandom);
        var fraseSeleccionada = db.get('frases')
            .find({
                id: idRandom
            })
            .value();

        console.log("fraseSeleccionada", fraseSeleccionada);

     if (fraseSeleccionada) {
            //bot.telegram.sendMessage(ctx.from.id, fraseSeleccionada.frase + " - " + fraseSeleccionada.author);
 //       ctx.reply(fraseSeleccionada.frase);
	if(idRandom==6){
//	    ctx.replyWithSticker("CAADAgADKQIAAksODwABEcqzLbENmP4C");
	}
      }
	


	if(days_no==0){
//		ctx.reply("Llegó el gran día. Valar Morghulis ");
//                ctx.replyWithPhoto("https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2019/02/portada-got.jpg");
	}
//		ctx.replyWithSticker("");
//		ctx.replyWithPhoto("https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2019/02/portada-got.jpg");
	var imagenSeleccionada = dbImagenes.get('posters').find({id: idRandom})
            .value();

console.log("imagenSeleccionada",imagenSeleccionada);
	if(imagenSeleccionada)
		ctx.replyWithPhoto(imagenSeleccionada.url);

	if(days_no>=0){
//	    return ctx.reply('En ' + resultado + ' vuelve GOT ⏳');
	}

});

bot.on('sticker', (ctx) => {
	console.log("sticker");
	console.log(ctx.message.sticker);
	console.log("======================");

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

function insertarUsuario(usuario){

	
	db.get("usuarios").push(usuario).write()
}


bot.launch()
