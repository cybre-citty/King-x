const { addnote,cmd, sck1, delnote, allnotes, delallnote, tlang, botpic, runtime, prefix, Config } = require('../lib')

cmd({
            pattern: "menu",
            react: "📃",
            category: "menu1",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu.*`
            const alivtxt = `
┏⃞❑✷▎🎋⃟🥷➥.1 *ᴅᴏᴡɴʟᴏᴅᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.2 *ɢᴇɴᴇʀᴀʟ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.3 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.4 *ᴛᴇxᴛᴘʀᴏ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.5 *ᴄᴏɴᴠᴇʀᴛᴇʀ ᴍᴇɴᴜ*
┃
┣⃞⃟❑✷▎🎋⃟🥷➥.6 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.7 *ɴᴇᴡꜱ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.8 *ɢᴀᴍᴇ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.9 *ᴀᴜᴅɪᴏ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.10 *ꜱᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑⃟✷▎🎋⃟🥷➥.11 *ᴀɪ ᴍᴇɴᴜ*
┃
┣⃞⃟❑✷▎🎋⃟🥷➥.12 *ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.13 *ɴꜱꜰᴡ ᴍᴇɴᴜ*
┃
┣❑ ⃟✷🎋⃟🥷➥.14 *ʀᴇᴀᴄᴛɪᴏɴ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.15 *ᴍᴏᴅᴇʀᴀᴛɪᴏɴ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.16 *ɢᴇɴ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.17 *ᴡᴇᴇʙ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.18 *ᴍɪꜱᴄ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.19 *ᴇᴄᴏɴᴏᴍʏ ᴍᴇɴᴜ*
┃
┗⃞❑✷▎🎋⃟🥷➥.20 *ᴇʜɪ ᴍᴇɴᴜ*
❍═════════════════════❍
🧙‍♂️  *_Qᴜᴇᴇɴ ɴɪᴄᴋʏ ᴍᴅ_*
👩‍💻   *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴜᴍɪᴅᴜ_*
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "31",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Mr.Hansamala.*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝙳𝙾𝚆𝙽𝙻𝙾𝙳𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🧜‍♂️⃟➤ᴅᴏᴡɴᴀᴘᴋ
┃ ├❑🧜‍♂️⃟➤ɪᴏꜱ
┃ ├❑🧜‍♂️⃟➤ɴᴀꜱᴀ
┃ ├❑🧜‍♂️⃟➤ᴡᴀʙᴇᴛᴀ
┃ ├❑🧜‍♂️⃟➤ᴛᴛꜱ
┃ ├❑🧜‍♂️⃟➤ʏᴛꜱ
┃ ├❑🧜‍♂️⃟➤ᴠɪᴅᴇᴏ
┃ ├❑🧜‍♂️⃟➤ᴘʟᴀʏ
┃ ├❑🧜‍♂️⃟➤ʀɪɴɢᴛᴏɴᴇ
┃ ├❑🧜‍♂️⃟➤ᴘɪɴᴛ
┃ ├❑🧜‍♂️⃟➤ᴍᴇᴅɪᴀꜰɪʀᴇ
┃ ├❑🧜‍♂️⃟➤ʏᴛᴍᴘ4
┃ ├❑🧜‍♂️⃟➤ʏᴛᴍᴘ3
┃ ├❑🧜‍♂️⃟➤ʏᴛᴅᴏᴄ
┃ ├❑🧜‍♂️⃟➤ꜱꜱ
┃ ├❑🧜‍♂️⃟➤ꜰʙ
┃ ├❑🧜‍♂️⃟➤ᴛɪᴋᴛᴏᴋ
┃ ├❑🧜‍♂️⃟➤ᴛᴠɪᴅᴇᴏ
┃ ├❑🧜‍♂️⃟➤ꜰʙꜱ
┃ ├❑🧜‍♂️⃟➤ᴅᴀᴅᴜ
┃ ├❑🧜‍♂️⃟➤ᴛᴛᴘ
┃ ├❑🧜‍♂️⃟➤ᴠɪᴅᴇᴏ3
┃ ├❑🧜‍♂️⃟➤ᴛᴇꜱᴛꜱᴏɴɢ
┃ ├❑🧜‍♂️⃟➤ᴀᴛᴛᴘ
┃ ├❑🧜‍♂️⃟➤ᴛɪᴋᴛᴏᴋ
┃ ├❑🧜‍♂️⃟➤ᴘʟᴀʏʟɪꜱᴛ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🧙‍♂️ *_Qᴜᴇᴇɴ ɴɪᴄᴋʏ ᴍᴅ_*
👩‍💻 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴜᴍɪᴅᴜ_*
`;
            let aliveMessage = {
                image: {
                    url: 'https://telegra.ph/file/197373b612da311e2c9d7.jpg',
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "32",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Mr.Hansamala.*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙶𝙴𝙽𝙴𝚁𝙰𝙻 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🐉⃟➤ ʟɪꜱᴛ
┃ ├❑🐉⃟➤ᴏᴡɴᴇʀ
┃ ├❑🐉⃟➤ꜰɪʟᴇ
┃ ├❑🐉⃟➤ᴄʜᴀᴛɢᴘᴛ
┃ ├❑🐉⃟➤ʀᴇᴘᴏ
┃ ├❑🐉⃟➤ꜱᴛᴀᴛᴜꜱ
┃ ├❑🐉⃟➤ᴛʜᴇᴍᴇ
┃ ├❑🐉⃟➤ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
┃ ├❑🐉⃟➤ᴘɪɴɢ
┃ ├❑🐉⃟➤ꜱɪʀᴀꜱᴀ
┃ ├❑🐉⃟➤ᴀʟɪᴠᴇ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "33",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙶𝚁𝙾𝚄𝙿 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🧞‍♀️⃟➤ꜱᴛɪᴄᴋᴇʀ
┃ ├❑🧞‍♀️⃟➤ꜱᴜᴘᴘᴏʀᴛ
┃ ├❑🧞‍♀️⃟➤ᴡᴀʀɴ
┃ ├❑🧞‍♀️⃟➤ᴛᴀɢᴀʟʟ
┃ ├❑🧞‍♀️⃟➤ʀᴇϙᴜᴇꜱᴛ
┃ ├❑🧞‍♀️⃟➤ʀᴇᴛʀɪᴠᴇ
┃ ├❑🧞‍♀️⃟➤ʀᴡᴀʀɴ
┃ ├❑🧞‍♀️⃟➤ᴘᴏʟʟ
┃ ├❑🧞‍♀️⃟➤ᴘʀᴏꜰɪʟᴇ
┃ ├❑🧞‍♀️⃟➤ʀᴀɴᴋ
┃ ├❑🧞‍♀️⃟➤ᴘʀᴏᴍᴏᴛᴇ
┃ ├❑🧞‍♀️⃟➤ᴋɪᴄᴋ
┃ ├❑🧞‍♀️⃟➤ᴍᴇᴍᴇɢᴇɴ
┃ ├❑🧞‍♀️⃟➤ɢʀᴏᴜᴘ
┃ ├❑🧞‍♀️⃟➤ɢʀᴏᴜᴘᴘɪᴄ
┃ ├❑🧞‍♀️⃟➤ʜɪᴅᴇᴛᴀɢ
┃ ├❑🧞‍♀️⃟➤ᴀᴅᴅ
┃ ├❑🧞‍♀️⃟➤ɢᴇᴛᴊɪᴅꜱ
┃ ├❑🧞‍♀️⃟➤ᴅᴇᴍᴏᴛᴇ
┃ ├❑🧞‍♀️⃟➤ᴅᴇʟ
┃ ├❑🧞‍♀️⃟➤ᴄʜᴇᴄᴋᴡᴀʀɴ
┃ ├❑🧞‍♀️⃟➤ᴀɴᴛɪʟɪɴᴋ
┃ ├❑🧞‍♀️⃟➤ᴏɴʟʏᴀᴅᴍɪɴ
┃ ├❑🧞‍♀️⃟➤ᴀɴᴛɪʙᴏᴛ
┃ ├❑🧞‍♀️⃟➤ᴅɪꜱᴀʙʟᴇ
┃ ├❑🧞‍♀️⃟➤ᴇɴᴀʙʟᴇ
┃ ├❑🧞‍♀️⃟➤ᴀɴᴛɪꜰᴀᴋᴇ
┃ ├❑🧞‍♀️⃟➤ᴀɴᴛɪᴅᴇᴍᴏᴛᴇ
┃ ├❑🧞‍♀️⃟➤ᴀɴᴛɪᴘʀᴏᴍᴏᴛᴇ
┃ ├❑🧞‍♀️⃟➤ᴘᴅᴍ
┃ ├❑🧞‍♀️⃟➤ᴀɴᴛɪʟɪɴᴋ
┃ ├❑🧞‍♀️⃟➤ ᴀᴄᴛ
┃ ├❑🧞‍♀️⃟➤ ᴅᴇᴀᴄᴛ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "35",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 𝙼𝙴𝙽𝚄
┃ ├╼╼╼╼╼╼╼╼╼╼●
┣⃞❑⃝🧚‍♂️⃟➥ᴘʜᴏᴛᴏ
┣⃞❑⃝🧚‍♂️⃟➥ϙᴜᴏᴛᴇʟʏ
┣⃞❑⃝🧚‍♂️⃟➥ꜰᴀɴᴄʏ
┣⃞❑⃝🧚‍♂️⃟➥ᴛɪɴʏ
┣⃞❑⃝🧚‍♂️⃟➥ᴛᴏᴀᴜᴅɪᴏ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "34",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝚃𝙴𝚇𝚃𝙿𝚁𝙾 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🌿⃟➤ᴅᴇᴇᴘꜱᴇᴀ
┃ ├❑🌿⃟➤ʜᴏʀʀᴏʀ
┃ ├❑🌿⃟➤ᴡʜɪᴛᴇʙᴇᴀʀ
┃ ├❑🌿⃟➤ᴊᴏᴋᴇʀ
┃ ├❑🌿⃟➤ᴍᴇᴛᴀʟʟɪᴄ
┃ ├❑🌿⃟➤ꜱᴛᴇᴇʟ
┃ ├❑🌿⃟➤ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ
┃ ├❑🌿⃟➤ᴜɴᴅᴇʀᴡᴀᴛᴇʀ
┃ ├❑🌿⃟➤ʟᴜxᴜʀʏ
┃ ├❑🌿⃟➤ɢʟᴜᴇ
┃ ├❑🌿⃟➤ꜰᴀʙʀɪᴄ
┃ ├❑🌿⃟➤ᴛᴏxɪᴄ
┃ ├❑🌿⃟➤ᴀɴᴄɪᴇɴᴛ
┃ ├❑🌿⃟➤ᴄʟᴏᴜᴅ
┃ ├❑🌿⃟➤ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ
┃ ├❑🌿⃟➤ᴛʜᴜɴᴅᴇʀ
┃ ├❑🌿⃟➤ꜱᴄɪꜰɪ
┃ ├❑🌿⃟➤ꜱᴀɴᴅ
┃ ├❑🌿⃟➤ʀᴀɪɴʙᴏᴡ
┃ ├❑🌿⃟➤ᴘᴇɴᴄɪʟ
┃ ├❑🌿⃟➤ɴᴇᴏɴ
┃ ├❑🌿⃟➤ᴍᴀɢᴍᴀ
┃ ├❑🌿⃟➤ʟᴇᴀᴠᴇꜱ
┃ ├❑🌿⃟➤ɢʟɪᴛᴄʜ
┃ ├❑🌿⃟➤ᴅɪꜱᴄᴏᴠᴇʀʏ
┃ ├❑🌿⃟➤ᴄʜʀɪꜱᴛᴍᴀꜱ
┃ ├❑🌿⃟➤ᴄᴀɴᴅʏ
┃ ├❑🌿⃟➤1917
┃ ├❑🌿⃟➤ɴᴇᴡᴛᴇxᴛ
┃ ├❑🌿⃟➤ʙʟᴀᴄᴋᴘɪɴᴋ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "36",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├🧜‍♂️⃟➤ᴊᴏɪɴ
┃ ├🧜‍♂️⃟➤ᴜɴʙʟᴏᴄᴋ
┃ ├🧜‍♂️⃟➤ᴜᴊɪᴅ
┃ ├🧜‍♂️⃟➤ʙʟᴏᴄᴋ
┃ ├🧜‍♂️⃟➤ᴀᴅᴅɴᴏᴛᴇ
┃ ├🧜‍♂️⃟➤ϙʀ
┃ ├🧜‍♂️⃟➤ꜱʜᴇʟʟ
┃ ├🧜‍♂️⃟➤ᴇᴠᴀʟ
┃ ├🧜‍♂️⃟➤ᴅᴇʟɴᴏᴛᴇ
┃ ├🧜‍♂️⃟➤ᴅᴇʟᴀʟʟɴᴏᴛᴇꜱ
┃ ├🧜‍♂️⃟➤ʙᴀɴ
┃ ├🧜‍♂️⃟➤ᴀʟʟɴᴏᴛᴇꜱ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "37",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙽𝙴𝚆𝚂 𝙼𝙴𝙽𝚄
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🐉⃟➤ɴᴀꜱᴀ
┃ ├❑🐉⃟➤ᴛᴇᴄʜɴᴇᴡꜱ
┃ ├❑🐉⃟➤ɴᴇᴡꜱ/ᴇꜱᴀɴᴀ
┃ ├❑🐉⃟➤ʜɪʀᴜɴᴇᴡꜱ
┃ ├❑🐉⃟➤sirasa
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "38",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `

┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑💭⃟➤ᴅɪᴄᴇ
┃ ├❑💭⃟➤ᴅᴇʟᴛᴛᴛ
┃ ├❑💭⃟➤ᴛᴛᴛ
┃ └╼╼╼╼╼╼╼╼╼╼●
┖━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "39",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙰𝚄𝙳𝙸𝙾 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├🧜‍♂️⃟➤ʙᴀꜱꜱ
┃ ├🧜‍♂️⃟➤ʙʟᴏᴡɴ
┃ ├🧜‍♂️⃟➤ᴅᴇᴇᴘ
┃ ├🧜‍♂️⃟➤ꜰᴀꜱᴛ
┃ ├🧜‍♂️⃟➤ʀᴇᴠᴇʀꜱᴇ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "40",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🍁⃟➤ᴄɪʀᴄʟᴇ
┃ ├❑🍁⃟➤ᴄʀᴏᴘ
┃ ├❑🍁⃟➤ʀᴏᴜɴᴅ
┃ ├❑🍁⃟➤ᴀᴛᴛᴘ
┃ ├❑🍁⃟➤ᴛᴛᴘ
┃ ├❑🍁⃟➤ꜱᴛᴇᴀʟ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "41",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙰𝙸 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┣⃞❑⃝🧚‍♂️⃟➥ᴄʜᴀᴛ
┣⃞❑⃝🧚‍♂️⃟➥ᴅᴀʟʟᴇ
┣⃞❑⃝🧚‍♂️⃟➥ɢᴘᴛ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "42",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝚂𝙴𝙰𝚁𝙲𝙷 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┣⃞❑⃝🧚‍♂️⃟➥ɴᴘᴍ
┣⃞❑⃝🧚‍♂️⃟➥ꜱꜱ
┣⃞❑⃝🧚‍♂️⃟➥ᴍᴏᴠɪᴇ
┣⃞❑⃝🧚‍♂️⃟➥ᴡᴇᴀᴛʜᴇʀ
┣⃞❑⃝🧚‍♂️⃟➥ʜᴏʀᴏ
┣⃞❑⃝🧚‍♂️⃟➥ɢᴏᴏɢʟᴇ
┣⃞❑⃝🧚‍♂️⃟➥ɪᴍᴀɢᴇ
┣⃞❑⃝🧚‍♂️⃟➥ᴄᴏᴜᴘʟᴇᴘᴘ
┣⃞❑⃝🧚‍♂️⃟➥ɪꜱᴡᴀ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "43",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙽𝚂𝙵𝚆 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑✨⃟➤ᴄᴏꜱᴘʟᴀʏ
┃ ├❑✨⃟➤ᴇᴄᴄʜɪ
┃ ├❑✨⃟➤ʜᴇɴᴛᴀɪ
┃ ├❑✨⃟➤ʜᴇɴᴛᴀɪᴠɪᴅ
┃ ├❑✨⃟➤ʀᴀɴᴀʟ
┃ ├❑✨⃟➤ʀᴘᴜꜱꜱʏ
┃ ├❑✨⃟➤ꜱᴏʟᴏ
┃ ├❑✨⃟➤ᴠɪxᴇɴ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "44",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝚁𝙴𝙰𝙲𝙰𝚃𝙸𝙾𝙽 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🎀⃟➤ʙɪᴛᴇ
┃ ├❑🎀⃟➤ʙʟᴜꜱʜ
┃ ├❑🎀⃟➤ᴘᴜɴᴄʜ
┃ ├❑🎀⃟➤ᴘᴀᴛ
┃ ├❑🎀⃟➤ᴋɪꜱꜱ
┃ ├❑🎀⃟➤ᴋɪʟʟ
┃ ├❑🎀⃟➤ʜᴀᴘᴘʏ
┃ ├❑🎀⃟➤ᴅᴀɴᴄᴇ
┃ ├❑🎀⃟➤ʏᴇᴇᴛ
┃ ├❑🎀⃟➤ᴡɪɴᴋ
┃ ├❑🎀⃟➤ꜱʟᴀᴘ
┃ ├❑🎀⃟➤ʙᴏɴᴋ
┃ ├❑🎀⃟➤ʙᴜʟʟʏ
┃ ├❑🎀⃟➤ᴄʀɪɴɢᴇ
┃ ├❑🎀⃟➤ᴄᴜᴅᴅʟᴇ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "45",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙾𝙳𝙴𝚁𝙰𝚃𝙸𝙾𝙽 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑☀⃟➤ᴀᴍᴜᴛᴇ
┃ ├❑☀⃟➤ᴀᴜɴᴍᴜᴛᴇ
┃ ├❑☀⃟➤ᴅᴜɴᴍᴜᴛᴇ
┃ ├❑☀⃟➤ᴅᴍᴜᴛᴇ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "46",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `


┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙶𝙴𝙽 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑💦⃟➤ᴛᴇxᴛ
┃ ├❑💦⃟➤ɪᴍᴀɢᴇ
┃ ├❑💦⃟➤ᴠɪᴅᴇᴏ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "47",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝚆𝙴𝙴𝙱 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┣⃞❑⃝🧚‍♂️⃟➥ᴄʜᴀʀᴀᴄᴛᴇʀ
┣⃞❑⃝🧚‍♂️⃟➥ʀᴀɴɪᴍᴇ
┣⃞❑⃝🧚‍♂️⃟➥ᴀɴɪᴍᴇ
┣⃞❑⃝🧚‍♂️⃟➥ᴀɴɪᴍᴇɴᴇᴡꜱ
┣⃞❑⃝🧚‍♂️⃟➥ᴀɴɪᴍᴇᴘɪᴄ
┣⃞❑⃝🧚‍♂️⃟➥ɴᴇᴋᴏ
┣⃞❑⃝🧚‍♂️⃟➥ᴀɴɪᴍᴇᴡᴀʟʟ
┣⃞❑⃝🧚‍♂️⃟➥ꜰᴏxɢɪʀʟ
┣⃞❑⃝🧚‍♂️⃟➥ʟᴏʟɪ
┣⃞❑⃝🧚‍♂️⃟➥ᴍᴀɴɢᴀ
┣⃞❑⃝🧚‍♂️⃟➥ᴡᴀɪꜰᴜ
┣⃞❑⃝🧚‍♂️⃟➥ᴘᴏᴋᴇᴘɪ
┣⃞❑⃝🧚‍♂️⃟➥ᴘᴏᴋᴇᴍᴏɴ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "48",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙸𝚂𝙲 𝙼𝙴𝙽𝚄*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┗⃞❑⃝🔖⃟➥ᴘʜᴏᴛᴏ
┗⃞❑⃝🔖⃟➥ϙᴜᴏᴛᴇʟʏ
┗⃞❑⃝🔖⃟➥ꜰᴀɴᴄʏ
┗⃞❑⃝🔖⃟➥ᴛɪɴʏ
┗⃞❑⃝🔖⃟➥ᴛᴏᴀᴜᴅɪᴏ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
cmd({
            pattern: "50",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙴𝙷𝙸 𝙼𝙴𝙽𝚄
┃ └╼╼╼╼╼╼╼╼╼╼●
┣⃞❑⃝🧚‍♂️⃟➥ᴇʜɪ1
┣⃞❑⃝🧚‍♂️⃟➥ᴇʜɪ2
┣⃞❑⃝🧚‍♂️⃟➥ᴇʜɪ3
┣⃞❑⃝🧚‍♂️⃟➥ᴇʜɪ4
┣⃞❑⃝🧚‍♂️⃟➥ᴇʜɪ5
┣⃞❑⃝🧚‍♂️⃟➥ᴇʜɪ6
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
