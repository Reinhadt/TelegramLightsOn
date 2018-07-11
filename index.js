process.env["NTBA_FIX_319"] = 1;

const TelegramBot = require('node-telegram-bot-api')
const request= require('request')
require('dotenv').config()

const token = process.env.TELEGRAM_KEY


const bot = new TelegramBot(token, {polling: true})

bot.onText(/\/encender/, (msg) => {

    //url para hacer petición
    let url = `http://ledspi.ddns.net/leds/enciende.php`;

    //request a la api
    return request(url, (err, resp, body)=>{
        console.log(body)
        bot.sendMessage(msg.chat.id, "Encendido correctamente :)")
    })

})

bot.onText(/\/apagar/, (msg) => {

    //url para hacer petición
    let url = `http://ledspi.ddns.net/leds/apaga.php`;

    //request a la api
    return request(url, (err, resp, body)=>{
        console.log(body)
        bot.sendMessage(msg.chat.id, "Apagado Correctamente :)")
    })

})