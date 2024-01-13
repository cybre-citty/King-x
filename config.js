const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })

global.owner = "94762327630"
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:Fhh5C6Cafgbad2GDgEdeDgFga6fFE43D@monorail.proxy.rlwy.net:43357"
global.port= process.env.PORT || 5000
global.email = 'not@gmail.com'
global.github = 'https://github.com/cybre-citty/King-x'
global.location = 'Colombo SL'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94762327630'
global.devs = '94762327630';
global.website = 'https://github.com/cybre-citty/King-x' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/ac185578438c68f4bf911.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'king-x' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'king-x' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? "𝙌𝙐𝙀𝙀𝙉-𝙉𝙄𝘾𝙆𝙔-𝙈𝘿;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0E4YzZ2bStvTTEzSzIyMDRrWmdYWkN2SnhLV1BHeFRDVTYrS3haLzMzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGV4L3QvQ0Y1TFZDQVRzaWJpdjU4c3ZpNUJmUTB5UWdHaTlwblREOHRpaz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrUEdTVk9wNkNmSlY0ek5KV0ZFYmlVSlRadzJ4dVVkakhVb0VuaVN6N21RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQQThhSzlZUnlvU01OMjhRUHgvMDh5dFltbjdxUFZCa2lrS1RpeERJYXowPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBFaTF3cjFvVFVLcURIVlFjVVd2NTJQKzg5TENTeW1vVlF1Nm5UUUVtMXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlrNUh0NmZsbXZEaW8wR0JFVUxOUW40Z0txYUxJRkhtdzUxNGJ6dUFMeG89In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKQ3pWa0pTYlpxMDNqb3Nhb3BFdFFCTlltTmJGZnFCY2Evc09CNWRQMW1ldTJhNkpWaEYxUmMwZy9PZ213cnpVeUJqYXRwbTBaVGNPUmRHaHUwbzhqdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE3NSwiYWR2U2VjcmV0S2V5IjoiNWJWNVNobE9ReS9DTk9QK3ZqdzFMTFBKbWpWMnhzYmlWRXRYRW4zR0tscz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiT25GUmdFbFdRbTIwUVkzLV9ZM21FQSIsInBob25lSWQiOiIzZjVkZGIyYS1mNmJhLTQyZmQtOTBlYS1hYzdiYmM2YzE1YzMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzZ4QmV2UElHVjhpM1RjaTNkdk5mcjlHSEtBPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2TDJMNGhvWjNqd2Vnd0oyRkE2T1loblpKZFk9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPZVh2ckVIRUpDVHVhd0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZ4VzE5WXdYTnRIYnRRc2NvWXZoRjNjbnBIYm1PUU5SNDF1NVAwVmxnRVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjIvbXY5cmU1R0FnTlhaWWZMQVdoeFBac2RHbnpUWDR6VCtuSWdUeThzS040R3U1NTNpNk5iWDQ4Ny9JU2FCWlZaVkNqS2ZISUhYdmtHeExLTFU3bEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRZ1I1QTZzS0dtTkpVd0hrclBTcVRWdGJyRGh5bEk0TFMwQlFnM1ArZ2lLblZ3ZVYyWkFFR2pndFF4RXZaMHkxWGZ1ODZFRUNBRmFsbFQ5YlUybVJqQT09In0sIm1lIjp7ImlkIjoiOTQ3NjIzMjc2MzA6MTNAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjIzMjc2MzA6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmNWdGZXTUZ6YlIyN1VMSEtHTDRSZDNKNlIyNWprRFVlTmJ1VDlGWllCRyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMzgyMzc2M30=" : process.env.SESSION_ID,
  author:  'king-x',
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  'king-x',
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['@','.','#','&' ] : process.env.PREFIX,
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
