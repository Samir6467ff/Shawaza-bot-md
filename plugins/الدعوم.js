let handler = async (m, { conn }) => {
try {
let pp = imagen4
let img = await(await fetch('https://chat.whatsapp.com/BxBsz6WSLiIK13w2NtWKJm')).buffer()
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╭────『👑┇JOHAN┇🤖┇BOT┇👑』
│
│ *➤ مرحبا ${taguser}*
│
│ *=> 🤖 وقت عمل البوت:* ${uptime}
│ *=> ✅ البوت عام للجميع*

│ *=> 🔗 رقم المطور:* *https://wa.me/+22247072475*
╰────────────────`.trim()
let buttons = [{ buttonId: '#menu', buttonText: { displayText: 'قائمة الاوامر 📜' }, type: 1 }]
let buttonMessage = { image: pp, caption: str.trim(), mentions: [m.sender], footer: global.wm, buttons: buttons, headerType: 4, contextInfo: { mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: 'اضغط هنا لدخول قروب الدعم', body: 'بواسطة صاصا', thumbnail: img, sourceUrl: `https://chat.whatsapp.com/BxBsz6WSLiIK13w2NtWKJm`}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)    
throw `*🤖 وقت العمل: ${uptime} ┃ LOOK LIKE YOU*`}}
handler.help = ['estado']
handler.tags = ['main']
handler.command = ['الدعم','الدعوم'] 
export default handler
function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [`\n│ *=> 💥 ` + d, ' يوم* ', `\n│ *=> 💫 ` + h, ' ساعه* ', `\n│ *=> 💠 ` + m, ' دقيقه* ', `\n│ *=> ♦ ` + s, ' ثانيه* '].map(v => v.toString().padStart(2, 0)).join('')}
