// Script hecho por Edder ミ⁠●⁠﹏⁠☉⁠ミ

let handler = async (m, { conn, groupMetadata, participants, usedPrefix, command, isBotAdmin, isAdmin, isSuperAdmin }) => {
    let botSettings = global.db.data.settings[conn.user.jid] || {}
    
    //if (!botSettings.restrict) return m.reply(`⚠️ *تنبيه:* البوت ليس لديه صلاحيات حظر.`) 
    if (!isBotAdmin) return m.reply(`⚠️ *تنبيه:* البوت يجب أن يكون مشرفًا لاستخدام هذا الأمر.`)
    if (!m.isGroup) return m.reply(`⚠️ *تنبيه:* هذا الأمر يعمل فقط في المجموعات.`)
    
    let formatUser = id => '@' + id.split('@')[0]
    let potentialMembers = groupMetadata.participants.filter(member => member.id !== conn.user.jid)
    potentialMembers = potentialMembers.filter(member => member.admin !== 'superadmin' && member.admin !== 'admin')
    potentialMembers = potentialMembers.map(member => member.id)
    
    if (potentialMembers.length === 0) return m.reply(`⚠️ *تنبيه:* لم يتم العثور على أعضاء للحظر أو جميعهم مشرفون.`)
    
    let randomUser = potentialMembers[Math.floor(Math.random() * potentialMembers.length)]
    
    m.reply(`☠️ ${formatUser(randomUser)}, لقد تم اختيارك بواسطة روليتة الحظر!`, null, { mentions: [randomUser] })
    
    await delay(2000)    
    await conn.groupParticipantsUpdate(m.chat, [randomUser], 'remove')
}

handler.command = /^(روليت_حظر)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const delay = time => new Promise(res => setTimeout(res, time))
