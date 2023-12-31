const { cmd, fetchJson } = require('../lib');

cmd(
    {
        pattern: "fb",
        react: "✅",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("Please provide a valid URL.");
                return;
            }

            const wamod = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fbdl?url=${text}`);

            if (!wamod.result || !wamod.result.hd) {
                citel.reply("Failed to fetch video URL or HD link.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    video: { url: wamod.result.hd },
                    mimetype: "video/mp4",
                    caption: '╭─────────────────╮\n\n🛡️ *𝙺𝙸𝙽𝙶-𝚇 𝙵𝙱  𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁*🛡️\n\n╰──────────────────╯\n\n│ ❤️‍🔥*Title:* ${anu.title}\n\n│ 👻*Duration:* ${anu.timestamp}\n\n╰──────────────────╯\n\n*ʏᴏᴜʀ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ*...🔥🔥'
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);
