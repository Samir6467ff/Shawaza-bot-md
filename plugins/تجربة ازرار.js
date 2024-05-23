let handler = async (m, { conn, args, usedPrefix, command }) => {
    const taguser = '@' + m.sender.split("@s.whatsapp.net")[0]

    const interactiveMessage = {
        text: `┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*🐉✬⃝╿↵ مرحــبـا ⌊ ${m.pushName} ⌉*
── • ◈ • ──

┏━━🤖 _مـعلـومـات البـوت:_🤖━━┓
┃ ✨  *اسـم البـوت: 𝑧ₑ𝑧ₒ_𝑏ₒ𝑡*
┃ 💻  *المـنصـة:* 𝑯𝑬𝑹𝑶𝑲𝑼💀 
┃ 📍  *رقم المطور: 201508628077*
┃ 📚  *اسم المطور: zezo*  
┗━━━━━━━━━━━━━┛
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢`,
        footer: '> استمتع بالبوت',
        templateButtons: [
            { index: 1, quickReplyButton: { displayText: 'اضغط', id: '.1' }},
            { index: 2, quickReplyButton: { displayText: 'اضغط هنا', id: '.2' }},
            { index: 3, quickReplyButton: { displayText: 'المطور', id: '.المطور' }},
            { index: 4, quickReplyButton: { displayText: 'التنزيلات', id: '.4' }},
            { index: 5, quickReplyButton: { displayText: 'قائمه الجروب', id: '.5' }},
            { index: 6, quickReplyButton: { displayText: 'الالعاب', id: '.6' }},
            { index: 7, quickReplyButton: { displayText: 'قائمة الاوامر', id: '.10' }}
        ]
    }

    await conn.sendMessage(m.chat, interactiveMessage, { quoted: m })
}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['كل']

export default handler
