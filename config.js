const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })

global.owner = "94762327630"
global.mongodb = process.env.MONGODB_URI || "mongodb://uafrsboguxtlxtprt3gp:bNwCHEBLOrh0DiQT6Fmi@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bm6wfn92by95j9x?replicaSet=rs0"
global.port= process.env.PORT || 5000
global.email = 'not@gmail.com'
global.github = 'https://github.com/Theekshanamax/navi'
global.location = 'Colombo SL'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94762327630'
global.devs = '94762327630';
global.website = 'https://github.com/Theekshanamax/navi' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/819114e4c3dbd6bf0b07b.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'king-x' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'king-x' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? "King-x;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVB5Y3RuUHQ3NWJKMnNoOHpYUGFSSHphNGhIWXlxUTNoV0g1TTBTaFkwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzI0QjcrZDFMTnMzRldHVzU2MStBMXFvekU4NzFmNHN4czBsQmt0SGlrQT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNS05CYjdzTGN4MWpJeU1ZNk5uVmFmb3ArTkhrdEpBTUlua1llQUxxQ25JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpWENWRWFUZlFJZlhhMEZjOTV2ckg4QzJQbXNtWjJQUGpoUnlVelRZY2hrPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBEVmFIcEk1NnBNQ09FaWRQYVQxR2RYb2xqVnp4a25yTGlJRVlBK0pnMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpuY2Z0WTBjaVNyQ3A5cUtsSGUyWEtQNksvOUd6L20rSlV1cDk5VVpOSDQ9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRVB4TnFVMTkyU1BSQ0U2Zm1nM0pnRW90Q0xsaGt1djV3STNCOFpva0pCd2Rsd3ExT1FXMm9PRzFVWkRJTkJ4aXNLa2dDbkd1aTROOTRHV0pFelVBUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEwMCwiYWR2U2VjcmV0S2V5IjoieDJsYzVlNkFUbEw0RzY1aW9ZYmF3UU4zN0xTZjhldVBqaExSd05FUlU0VT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSXVoOGpDV1pRd09HSE1VUVZhajNHQSIsInBob25lSWQiOiJjNGRiZDhiNS1iMzExLTRjNjYtOGY3ZC03NWYyNjZlNzRjNTgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0s5RU9xVThyTzYwaVBXTlV0RzBvVHJXSUpNPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpOVZqY0RtRFBTZlBMbEpCQ3hqVFVSN0ZUK2s9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLdXN3K3dGRU1xTTlxc0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IllvcHVvZ2ZhTThOamJqVnkwdnhHcHk1WEZoTnZ3OGlOTGZNcG52d0oweEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjNZTUE0d2JqUThQM05Na2xRczR2L2lTTXBWYlExWGFaaWZ3VUxTWWdmNDVZZUxZNFZEUm85bkhMd2Zrend2RFdKTVQ0V2NML0p1NStZODhwaHVzRkJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZVmFvUHVxUVZvY3FOelVXMWpNcm44RWYxVEZOSlExOC92R2hVS3JBb1RsMkRsTmp5YU5yNWJLSmw5eFRiMVMxU3dKZ0ZMd0RldmpKcmdJWExCVjdEdz09In0sIm1lIjp7ImlkIjoiOTQ3ODU3NTcwMTY6OEBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4NTc1NzAxNjo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldLS2JxSUgyalBEWTI0MWN0TDhScWN1VnhZVGI4UElqUzN6S1o3OENkTVEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDI3MjUxOTd9" : process.env.SESSION_ID,
  author:  'king-x',
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  'king-x',
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? 'e410da68-a7bf-4c04-8a4c-98310a3834e1' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'king-X',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
