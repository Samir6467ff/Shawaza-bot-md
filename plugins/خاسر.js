let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = conn.getName(who)
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './menu.jpg')
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/overlay/wasted', {
    avatar: pp, 
  }), 'waste.png', `*اوه! شيت :* ${name}\n\nخاسر`, m)
  await conn.sendMessage(m.chat, { react: { text: '🤧', key: m.key } })
;
}

handler.help = ['waste @user']
handler.tags = ['fun']
handler.command = ['خسرت','خاسر'] 

export default handler
