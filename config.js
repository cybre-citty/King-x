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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/26815f8f39b39b22ded26.jpg'

 👇 වෙනස් කරන්න ගනන් 📝
 𝗧𝗵𝗲𝗲𝗸𝘀𝗵𝗮𝗻𝗮 𝗱𝗶𝘃𝗼𝗹𝗼𝗽𝗮𝗿🇱🇰

module.exports = {
  ♻️botname:   process.env.BOT_NAME === undefined ? 'king-x' : process.env.BOT_NAME,
  ♻️ownername: process.env.OWNER_NAME === undefined ? 'king-x' : process.env.OWNER_NAME,
  ♻️sessionName:  process.env.SESSION_ID === undefined ? "𝙌𝙐𝙀𝙀𝙉-𝙉𝙄𝘾𝙆𝙔-𝙈𝘿;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0gzMzlOWW5XOUlTR1hFZjlkK0dvMUM2MzMzUVhBSnFIeVhvcDIwMzZFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVA2MHB5OTdhWDlKSWIxc3lGSHN4aWJWdkZUOCtXQVJXV3pUZGJ2dkFXaz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5R0g5d2NpRHMvcFV1RzQrQm1kR0NqZTAwUEpNajFkbnM0SkdNOTQ3UkdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZeGlMbWZpbFl1eHpyaVVZaHVGQnRHaHRxSmpRaTF1L00rT1NvTUZxdWh3PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9MOGxOank2eGNxSkpLMU1rZk1ZcHEvZHJCT2NyM2RWS3R0WThDQ2oybjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5DWnR5N285UVhac3Q5ODhkZGlsaHBsVnIwNHhzMGVoelQ4REI0RkMzanc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0eDlRdmE4Wm9aVGY3Mld3M3QxZDJnd0wzUTd5QTNGSkhUZ2k1N1F0U3AyZ1dVbnRIK1VyaFVaS013TzUwbk9TWFFidjIwbXA3MDdzQTl0MjhnRFBoZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIyOCwiYWR2U2VjcmV0S2V5IjoiblRVcnFtYmFmcyttV0xmQjdiNWllVVhrdzI3YlRPSXBYRDZQNEpkMXN6dz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiV3hNTi1yUmRSUEcybHVOZE5rZ20ydyIsInBob25lSWQiOiIxNDg5ZjVlYS03ZWZhLTQ0NDctOGVkYi05MDcyMjA0Yzc2YzUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlFMZEpjQ1ZpWkpNdTZkL2Rsa2pzOEZPVnVJPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoUXpYeWo4MGpFd05hd1pOMitaUWU1ZW9YOVU9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPaVh2ckVIRUlhL2lxMEdHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZ4VzE5WXdYTnRIYnRRc2NvWXZoRjNjbnBIYm1PUU5SNDF1NVAwVmxnRVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6InJvek1hRGlvWk9aT3JGejkybTA4STdEcXdBRWdiWUx6Vmh2cGYyNHJLVEVBVDhyWHNxUXpPVElDanV3N3RnQm1sNjllcUxVNXdETlBhQU9WKzJRQUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxSHM2Vkw5YXpaeEpkOTd5eWhXUzdwTWE4NStlSXA3bElFaVk2dlBpTDhlNERHaUZXM0JDcmRPSGlVZmpNcnFCUE04L0ZTc2JKQ2ZYalJWTDNtdkRnQT09In0sIm1lIjp7ImlkIjoiOTQ3NjIzMjc2MzA6MTRAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjIzMjc2MzA6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmNWdGZXTUZ6YlIyN1VMSEtHTDRSZDNKNlIyNWprRFVlTmJ1VDlGWllCRyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNTE1NjQ5MH0=" : process.env.SESSION_ID,
  ♻️author:  'king-x',
  ♻️auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  ♻️packname:  'king-x',
  ♻️autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  ♻️antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  ♻️alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  ♻️antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  ♻️readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  ♻️auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  ♻️HANDLERS:  process.env.PREFIX === undefined ? ['@','.','#','&' ] : process.env.PREFIX,
  ♻️warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  ♻️disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  ♻️levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  ♻️antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  ♻️antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  ♻️BRANCH: 'main', 
  ♻️ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  ♻️autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  ♻️OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  ♻️heroku:  process.env.heroku === undefined ? false : process.env.heroku,
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
