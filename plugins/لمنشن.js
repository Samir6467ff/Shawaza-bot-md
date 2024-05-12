
let handler = async (m, { conn, text, participants}) => {
	
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    if (!m.quoted) throw `*✳️ اعمل رد علي رساله*`
    conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users } )
}

handler.help = ['لمنشن']
handler.tags = ['group']
handler.command = /^(totag|لمنشن)$/i

handler.admin = true
handler.group = true

export default handler
