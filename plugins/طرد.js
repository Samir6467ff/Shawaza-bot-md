let handler = async (m, { conn, participants, usedPrefix, command }) => {

    let kickte = `*مــنشـن الـشـخص !*`
    let ownerJid = '201508628077@s.whatsapp.net' // استبدل owner_number برقم مطور البوت

    if (!m.mentionedJid[0] && !m.quoted) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte)}) 
    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    let botNumber = conn.user.jid

    if (user === botNumber) {
        return m.reply(`*لا استطيع طرد نفسي*`)
    }

    if (user === ownerJid) {
        return m.reply(`*لا استطيع طرد مطوري*`)
    }

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
    m.reply(`*تـــم الــطرد !*`) 
}

handler.help = ['kick @user']
handler.tags = ['group']
handler.command = ['kick', 'طرد'] 
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler
