let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = `*❒═[لقد حصل بوت زيزو على تقييم]═❒*\n\n*❒ الــتـقـــيـم : [ ${text} ]*\n*❒ بـواسـطـة : [ +${m.sender.split`@`[0]} ]*\n\n*❒══[اتمنى ان يكون قد اعجبك]═══❒*`
conn.reply('201508628077@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
conn.reply('@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
m.reply('*تــم تــقـيــم الــبـوت شكرا لك حب 🔥🥹*')
}
handler.command = /^(قيم)$/i
export default handler
