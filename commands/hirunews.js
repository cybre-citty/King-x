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
    const caption = `* 𝐇𝐈𝐑𝐔𝐔 𝐍𝐄𝐖𝐒_* 

 *ᴛɪᴛᴇʟ* :  ${hirunew.result.title}

 *ᴅᴀᴛᴇ & ᴛɪᴍᴇ* :  ${hirunew.result.dateandtime}

 *ᴜʀʟ* : ${hirunew.result.link}

 *ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ* : ${hirunew.result.description}

*┗━━━━━━━━━━━━━━⛶*

 ©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ᴅᴜᴍɪᴅᴜ `

await Void.sendMessage(citel.chat, { image: { url: hirunew.result.image }, caption: caption }, { quoted: citel })

    })
