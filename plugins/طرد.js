let handler = async (m, { conn, participants, usedPrefix, command }) => {

let kickte = `*مــنشـن الـشـخص !*`

if (!m.mentionedJid[0] && !m.quoted) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte)}) 

let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender

// التحقق مما إذا كان الشخص الذي سيتم طرده هو المالك
if (user === owner) {
  return m.reply('*لايمكنني طرد مطوري*')
}
else
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
