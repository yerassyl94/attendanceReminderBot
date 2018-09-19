const TelegramBot = require('node-telegram-bot-api')
let CronJob = require('cron').CronJob

const token = '644198882:AAFT6gaqTwBXMQZQYIH_R2JK6KP2GWmh074'
const chatId = -1001322214826
const bot = new TelegramBot(token, {polling: true})
const nazarbekId = '@Nazarbek96'
const daniyarId = '@LeMieuxCF'
const sentence = '\nplease check my attendance\n'
const place1 = 'Place: EB4 N104\n'
const place2 = 'Place: EB2 E101\n'
const course1 = 'Course title: Anatomy and Physiology\n'
const course2 = 'Course title: Intro. to Nanomaterials\n'
const id = 'ID: yerassyl94\n'
const password = 'password: MyMaster=YeraBoss001\n'
const smile = 'Thank you <3'
let text2 = 'Dear '+nazarbekId + sentence +place2 + course2 + id + password + smile
let text1 = 'Dear ' + daniyarId + sentence + place1 + course1 + id + password + smile

const jobDaniyar = new CronJob('0 0,15 10 * * 1,3',function(){
	bot.sendMessage(chatId, 'Dear ' + daniyarId + sentence + place1 + course1 + id + password + smile)
})

const jobNazarbek = new CronJob('0 0,15 16 * * 2,4',function(){
	bot.sendMessage(chatId, 'Dear ' + nazarberId + sentence + place2 + course2 + id + password + smile)
})

jobDaniyar.start();
jobNazarbek.start();
