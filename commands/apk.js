const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib')
const { download} = require('aptoide-scraper')
//---------------------------------------------------------------------------
cmd({
    pattern: "downapk",
    alias: ["ps","apk","playstore"],
    desc: "download playstore app",
    react: "🏷️",
    category: "downloader",
    filename: __filename,
},
async (Void, citel, text) => {
if (!text) return
try {
let result = await download(text)
 const applink = result.dllink
    const getname = result.name
    const icon = result.icon
    const lastupdate = result.lastup
    const packagename = result.package
    const size = result.size
      await Void.sendMessage(citel.chat, {
        image: {
            url: icon,
        },
        caption: `
        \n╭────❨🛡️ 𝗞𝗜𝗡𝗚-𝗫 🛡️❩──╮
        \n│⿻⏳ *Playstore Download*
        \n│
        \n│⿻📲 *App name:* ${getname}
        \n│
        \n│⿻📩 *Last update:* ${lastupdate}
        \n│
        \n│⿻🖥️ *Package name:* ${packagename}
        \n│
        \n│⿻📊 *File size:* ${size}
        \n│
        \n│⿻💌 𝙰𝙿𝙿 𝙳𝙾𝚆𝙽𝙻𝙾𝙳 ✅
        \n╰──────────────────
        *𝙺𝙸𝙽𝙶-𝚇 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃 ❤*
        ᴄʀᴇᴀᴛᴇᴅ ʙʏ ${Config.ownername}
        `,
        
          
    })
    return Void.sendMessage(citel.chat, {
        document: {
            url: applink,
        },
        mimetype: "application/vnd.android.package-archive",
        fileName: getname,
    }, {
        quoted: citel,
    });
  } catch (err) {
    console.error(err);
    citel.reply(`❌ An error occurred while processing your request. Please try again later.${err}`);
  }
})
