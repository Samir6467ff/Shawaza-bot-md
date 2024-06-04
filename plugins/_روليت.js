let handler = async (m, { conn, groupMetadata, participants, usedPrefix, command, isBotAdmin, isAdmin, isSuperAdmin }) => {
    let botSettings = global.db.data.settings[conn.user.jid] || {}
    
    if (!isBotAdmin) return m.reply(`⚠️ *تنبيه:* البوت يجب أن يكون مشرفًا لاستخدام هذا الأمر.`)
    if (!m.isGroup) return m.reply(`⚠️ *تنبيه:* هذا الأمر يعمل فقط في المجموعات.`)
    
    let formatUser = id => '@' + id.split('@')[0]
    let potentialMembers = groupMetadata.participants.filter(member => member.id !== conn.user.jid)
    potentialMembers = potentialMembers.filter(member => member.admin !== 'superadmin' && member.admin !== 'admin')
    potentialMembers = potentialMembers.map(member => member.id)
    
    if (potentialMembers.length === 0) return m.reply(`⚠️ *تنبيه:* لم يتم العثور على أعضاء للحظر أو جميعهم مشرفون.`)
    
    let randomUser = potentialMembers[Math.floor(Math.random() * potentialMembers.length)]
    
    // قائمة الرسائل
    let messages = [
        "🎉 مبروك! لقد تم اختيارك وربحت 50 xp",
        "🔔 حظ اوفر! لقد وقعت في فخ اللعبه خسرت 50 xp",
        "🛡️ لقد نجوت من الخساره لكن لم تاخذ اي شئ",
        "💥 هذه المرة حالفك الحظ في اللعبه ولم تخسر ", 
        " لم يحالف الحظ لقد خسرت كل اموالك جرب مره اخري اصبح ال xp لك = 0", 
        " لقد خسرت كل شئ بيتك اموالك وكل شئ سيتم طردك لعدم سد ديونك", 
        " لقد نجوت وربحت الكثير من الاموال هيا خذ اموالك وافعل ما تشاء جائزتك 5000 xp" 
    ]
    
    let randomMessage = messages[Math.floor(Math.random() * messages.length)]
    
    // تحديث نقاط الخبرة بناءً على الرسالة
    let userXP = global.db.data.users[randomUser].xp || 0
    if (randomMessage.includes("مبروك لقد تم اختيارك وربحت 50 xp")) {
        userXP += 50
    } else if (randomMessage.includes("حظ اوفر! لقد وقعت ف فخ اللعبه خسرت 50 xp")) {
        userXP -= 50
    } else if (randomMessage.includes("لم يحالفك الحظ خسرت كل اموالك جرب مره اخري اصبح ال xp لك = 0")) {
        userXP = 0
    } else if (randomMessage.includes(" لقد نجوت وربحت الكثير من الاموال هيا خذ اموالك وافعل ما تشاء جائزتك 5000 xp")) {
        userXP += 5000
    }
    global.db.data.users[randomUser].xp = userXP
    
    // طرد المستخدم إذا ظهرت الرسالة المناسبة
    if (randomMessage.includes("لقد خسرت كل شئ بيتك اموالك وكل شئ سيتم طردك لعدم سد ديونك")) {
        let member = groupMetadata.participants.find(member => member.id === randomUser)
        if (member.admin === 'superadmin' || member.admin === 'admin') {
            m.reply(`⚠️ *تنبيه:* لا أستطيع طرد مشرف.`)
        } else {
            await conn.groupParticipantsUpdate(m.chat, [randomUser], 'remove')
        }
    }

    m.reply(`${randomMessage} ${formatUser(randomUser)}`, null, { mentions: [randomUser] })
}

handler.command = /^(لعبه)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const delay = time => new Promise(res => setTimeout(res, time))
