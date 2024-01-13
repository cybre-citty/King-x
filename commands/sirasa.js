const {cmd } = require('../lib')
const sirasanews = require('sirasa-news')
cmd({
        pattern: "sirasa",
        alias :['සිරස'],
        category: "news",
        react: "🇱🇰",

        filename: __filename
    },
    async(Void, citel,text) => {
    const sirasa = await sirasanews()
    const caption = `🚚.. 𝚂𝙸𝚁𝙰𝚂𝙰 𝙽𝙴𝚆𝚂 📑  

   
📝𝗧𝗜𝗧𝗟𝗘: ${sirasa.result.title}

 ⏳𝗗𝗔𝗧𝗘 𝗔𝗡𝗗 𝗧𝗜𝗠𝗘 : ${sirasa.result.dateandtime}

 📌𝗗𝗘𝗦𝗖𝗥𝗟𝗟𝗧𝗜𝗢𝗡: ${sirasa.result.description}

 🖇️𝗡𝗘𝗪𝗦 𝗟𝗜𝗡𝗞: ${sirasa.result.link}
 
 *𝙺𝙸𝙽𝙶-𝚇 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃*`

await Void.sendMessage(citel.chat, { image: { url: sirasa.result.image }, caption: caption }, { quoted: citel })

    })
