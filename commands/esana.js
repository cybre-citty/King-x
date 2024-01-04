const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib')
const Esana = require('@sl-code-lords/esana-news');
var api = new Esana()

cmd({
    pattern: 'esana',
    alias: ['esananews','news'],
    desc: 'whatsapp beta infomation.',
    category: 'news',
    react: "📃",
    use: '<wbi>',
  },
        async(Void, citel, text) => {

       try { const latst = await api.latest_id();
            const nws = latst.results.news_id
            let nn = text || nws
            const ress = await api.news(nn);
            const res = ress.results;

            const txt2 = await Void.sendMessage(citel.chat, {image: {url: res.COVER}, caption: `\n🚚.. 𝗘𝗦𝗔𝗡𝗔 𝗡𝗘𝗪𝗦 📰  \n\n*📝*  𝗧𝗶𝘁𝗲𝗹 : ${res.TITLE}\n\n*🗒️*  𝗗𝗮𝘁𝗲 : ${res.PUBLISHED}\n\n*🖇️*  𝗨𝗿𝗹 : ${res.URL}\n\n*📌*  𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 : ${res.DESCRIPTION}\n\n𝗞𝗜𝗡𝗚-𝗫 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧`}, { quoted: citel });

                await Void.sendMessage(citel.chat, { react: {
        text: "📰",
        key: txt2.key,
            } } );

    } catch (e) {
    console.log(e)
    citel.reply("❗ *" + e + "*")
  }
})
