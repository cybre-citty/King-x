const {cmd } = require('../lib')
const hirunews = require('hirunews-scraper')
cmd({
        pattern: "hirunews",
        category: "hiru",
        react: "📑",

        filename: __filename
    },
    async(Void, citel,text) => {
    const hirunew = await hirunews()
    const caption = `  
╭─────────────────────╮    
│ 📰♻️*𝙺𝙸𝙽𝙶-𝚇 𝙷𝙸𝚁𝚄 𝙽𝙴𝚆𝚂*🗞️ │
╰─────────────────────╯
╭──────────
│🗞️*ᴛɪᴛᴇʟ* :  *${hirunew.result.title}*
│
│🗒️*ᴅᴀᴛᴇ & ᴛɪᴍᴇ* :  ${hirunew.result.dateandtime}
│
│♻️*ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ* : ${hirunew.result.description}
│
│🖇️*ᴜʀʟ* : ${hirunew.result.link}
╰──────────────────────

 *𝙺𝙸𝙽𝙶-𝚇 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃 𝙳𝙾𝚆𝙽𝙻𝙾𝙳 ❤*
 ᴄʀᴇᴀᴛᴇᴅ ʙʏ ${Config.ownername} `

await Void.sendMessage(citel.chat, { image: { url: hirunew.result.image }, caption: caption }, { quoted: citel })

    })
