let handler = async (m, { conn, command, text }) => {
let stupidity = `*🤡 نسبة غباء 🤡*
*نسبة الغباء ${text} 🤡هي* *${Math.floor(Math.random() * 100)}%* *من 100%*
*ربنا يشفيك😂❤*
`.trim()
m.reply(stupidity, null, { mentions: conn.parseMention(stupidity) })}
handler.help = ['غباء']
handler.tags = ['fun']
handler.command = /^(غباء)$/i
export default handler
