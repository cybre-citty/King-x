const {cmd } = require('../lib')
const sirasanews = require('sirasa-news')
cmd({
        pattern: "sirasa",
        category: "news",
        react: "📰",

        filename: __filename
    },
    async(Void, citel,text) => {
    const sirasa = await sirasanews()
    const caption = `🚚.. 𝚂𝙸𝚁𝙰𝚂𝙰 𝙽𝙴𝚆𝚂 📑  

   
📝*𝚃𝙸𝚃𝙻𝙴:* ${sirasa.result.title}

 ⏳*𝙳𝙰𝚃𝙴 𝙰𝙽𝙳 𝚃𝙸𝙼𝙴* : ${sirasa.result.dateandtime}

 📌*𝙳𝙴𝚂𝙲𝚁𝙻𝙻𝚃𝙸𝙾𝙽:* ${sirasa.result.description}

 🖇️*𝙽𝙴𝚆𝚂 𝙻𝙸𝙽𝙺:* ${sirasa.result.link}
 
 *𝙺𝙸𝙽𝙶-𝚇 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃*`

await Void.sendMessage(citel.chat, { image: { url: sirasa.result.image }, caption: caption }, { quoted: citel })

    })
