/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { addnote,cmd, sck1, delnote, allnotes, delallnote, tlang, botpic, runtime, prefix, Config ,sleep} = require('../lib')
const { TelegraPh } = require('../lib/scraper')   
const util = require('util')
//---------------------------------------------------------------------------
cmd({
            pattern: "addnote",
            react: "➕",
            category: "owner",
            desc: "Adds a note on db.",
            filename: __filename
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            if (!text) return citel.reply("🔍 Please provide me a valid gist url.")
            await addnote(text)
            return citel.reply(`New note ${text} added in mongodb.`)

        }
    )
 
 
    //---------------------------------------------------------------------------
cmd({
            pattern: "unban",
           react: "🔊",
            category: "misc",
            filename: __filename,
            desc: "Unbans banned user (from using bot)."
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply("This command is onlt for my Owner")
            try {
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply("Please mention any user.❌")
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => {
                    if (!usr) {
                        console.log(usr.ban)
                        return citel.reply(`${pushnamer} is unbanned.`)
                    } else {
                        console.log(usr.ban)
                        if (usr.ban !== "true") return citel.reply(`${usr.name} is already unbanned.`)
                        await sck1.updateOne({ id: users }, { ban: "false" })
                        return citel.reply(`${usr.name} is free as a bird now`)
                    }
                })
            } catch {
                return citel.reply("Please mention any user.❌")
            }


        }
    )
    //---------------------------------------------------------------------------
    cmd({
        pattern: "url",
         react: "🖇️",
        alias : ['createurl'],
        category: "misc",
        filename: __filename,
        desc: "image to url."
    },
    async(Void, citel, text) => {
        if (!citel.quoted) return await citel.reply(`*Reply To Any Image/Video To Get Url*`)
        let mime = citel.quoted.mtype
        if(mime !='videoMessage' && mime !='imageMessage' ) return await citel.reply("Uhh Please, Reply To An Image/Video")
        let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
        let anu = await TelegraPh(media);
        await citel.reply('Here is URL of your media.\n'+util.format(anu));
        return await fs.unlinkSync(media);
    })

    //---------------------------------------------------------------------------
//---------------------------------------------------------------------------
cmd({
    pattern: "trt",
 react: "🗯️",
    alias :['translate'],
    category: "misc",
    filename: __filename,
    desc: "Translate\'s given text in desird language."
},
async(Void, citel, text) => {
    if(!text && !citel.quoted) return await citel.reply(`*Please Give Me Text. Example: _${prefix}trt en Who are you_*`);
    const translatte = require("translatte");
    let lang = text ? text.split(" ")[0].toLowerCase() : 'en';
    if (!citel.quoted)  { text = text.replace( lang , "");  }
    else { text = citel.quoted.text; }
    var whole = await translatte(text, { from:"auto",  to: lang , });
    if ("text" in whole) { return await citel.reply('*Translated text:*\n'+whole.text); }
}
)
    
    //---------------------------------------------------------------------------
cmd({
            pattern: "delnote",
           react: "🗑️",
            category: "owner",
            filename: __filename,
            desc: "Deletes note from db."
        },
        async(Void, citel, text,{ isCreator }) => {
            const { tlang } = require('../lib/scraper')
            if (!isCreator) return citel.reply(tlang().owner)
            await delnote(text.split(" ")[0])
             return citel.reply(`Id: ${text.split(" ")[0]}\'s note has been deleted from mongodb.`)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "delallnotes",
           react: "📝",
            category: "owner",
            filename: __filename,
            desc: "Deletes all notes from db."
        },
        async(Void, citel, text, isCreator) => {
            const { tlang } = require('../lib/scraper')
            if (!isCreator) return citel.reply(tlang().owner)
            await delallnote()
             return citel.reply(`All notes deleted from mongodb.`)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "ban",
        react: "🔇",
            category: "owner",
            filename: __filename,
            desc: "Bans user from using bot."
        },
        async(Void, citel, text,{ isCreator}) => {
            if (!isCreator) return citel.reply(tlang().owner)
            try {
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply(`❌ Please mention any user ${tlang().greet}.`)
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => {
                    if (!usr) {
                        await new sck1({ id: users, ban: "true" }).save()
                        return citel.reply(`_Banned ${usr.name} from Using Commands._`)
                    } else {
                        if (usr.ban == "true") return citel.reply(`${pushnamer} is already Banned from Using Commands`)
                        await sck1.updateOne({ id: users }, { ban: "true" })
                        return citel.reply(`_Successfully Banned ${usr.name} from Using Commands._`)
                    }
                })
            } catch (e) {
                console.log(e)
                return citel.reply("Please mention any user.❌ ")
            }


        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "alive",
            react: "🙊",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
Void.sendMessage(citel.chat, { 
              react: { 
                  text: "📝", 
                  key: citel.key 
              } 
          }) 
          await Void.sendPresenceUpdate('recording', citel.chat);
            let alivemessage = Config.ALIVE_MESSAGE || `*🧑‍💻 Bot created by ${Config.ownername}*`
            const alivtxt = `

*👋Hello, ${citel.pushName},*

${alivemessage}

  🛡️ 𝙺𝙸𝙽𝙶-𝚇 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃 🛡️


 ◩ A Whatsapp md bot built 
  in NodeJs to make
  experience better.....
 
 ◩ king-x created by
  Theekshana
  
⛲ Version: 0.0.1

⛲ Uptime: ${runtime(process.uptime())}

⛲ Owner:  ${Config.ownername}`;
            let aliveMessage = {
                image: {
                 url:  await botpic(),
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
    //---------------------------------------------------------------------------
cmd({
        pattern: "allnotes",
       react: "🗞️",
        category: "owner",
        filename: __filename,
        desc: "Shows list of all notes."
    },
    async(Void, citel, text,{ isCreator }) => {
        const { tlang } = require('../lib')
        if (!isCreator) return citel.reply(tlang().owner)
        const note_store = new Array()
        let leadtext = `All Available Notes are:-\n\n`
        leadtext += await allnotes()
        return citel.reply(leadtext)

    }
)
