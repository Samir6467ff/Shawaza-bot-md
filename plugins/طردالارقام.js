let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
    if (!args[0]) return m.reply(`⚠️ يرجى إدخال رمز المنطقة أو الرقم الصحيح لاستخدام هذا الأمر.\nاستخدام: ${usedPrefix + command} 593*`) 
    if (isNaN(args[0])) return m.reply(`⚠️ يرجى إدخال رمز المنطقة أو الرقم الصحيح لاستخدام هذا الأمر.\nاستخدام: ${usedPrefix + command} 593*`) 

    let lol = args[0].replace(/[+]/g, '')
    let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol)) 
    let bot = global.db.data.settings[conn.user.jid] || {}

    if (ps == '') return m.reply(`⚠️ لا يوجد أي رقم في هذه المجموعة يبدأ بالرمز +${lol}*`)

    let numeros = ps.map(v => '➥ @' + v.replace(/@.+/, ''))
    const delay = time => new Promise(res => setTimeout(res, time))

    switch (command) {
        case "قائمة_الارقام": 
            conn.reply(m.chat, `⚠️ قائمة الأرقام التي تبدأ بالرمز +${lol} في المجموعة ⚠️\n\n` + numeros.join`\n`, m, { mentions: ps })
            break   

        case "طرد_الارقام":  
            if (!isBotAdmin) return m.reply(`⚠️ يجب أن يكون البوت مشرفاً في المجموعة للقيام بهذا الإجراء.`)          

            conn.reply(m.chat, `⚠️ بدء عملية الطرد للأرقام التي تبدأ بالرمز +${lol}. سيتم طرد مستخدم كل 10 ثوانٍ.`, m)            
            let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
            let users = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))

            for (let user of users) {
                let error = `@${user.split("@")[0]} قد تم طرده أو غادر المجموعة بالفعل.`    
                let isAdmin = participants.find(p => p.id === user).admin !== null

                if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && !isAdmin) { 
                    await delay(2000)    
                    let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
                    if (responseb[0].status === "404") m.reply(error, m.chat, { mentions: conn.parseMention(error)})  
                    await delay(10000)
                } else if (isAdmin) {
                    m.reply(`⚠️ لا يمكن طرد المسؤولين من المجموعة.`)
                } else {
                    return m.reply(`⚠️ الإجراء محظور.`)
                }
            }
            break            
    }
}

handler.command = /^(قائمة_الارقام|طرد_الارقام)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler

const delay = time => new Promise(res => setTimeout(res, time))
