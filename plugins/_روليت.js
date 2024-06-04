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
        "🎉 مبروك! لقد تم اختيارك بواسطة روليتة الحظر!",
        "🔔 حظ سعيد! لقد وقعت في فخ روليتة الحظر!",
        "🛡️ لقد نجوت من الطرد! لكن تم اختيارك في روليتة الحظر!",
        "💥 هذه المرة حالفك الحظ في روليتة الحظر!"
    ]
    
    let randomMessage = messages[Math.floor(Math.random() * messages.length)]
    
    m.reply(`${randomMessage} ${formatUser(randomUser)}`, null, { mentions: [randomUser] })
}

handler.command = /^(لعبه)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const delay = time => new Promise(res => setTimeout(res, time))
