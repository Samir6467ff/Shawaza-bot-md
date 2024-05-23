let handler = async (m, { conn, args, usedPrefix, command }) => {
  const taguser = '@' + m.sender.split("@s.whatsapp.net")[0]

  conn.relayMessage(m.chat, {
    templateMessage: {
      hydratedTemplate: {
        hydratedContentText: `┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*🐉✬⃝╿↵ مرحــبـا ⌊ ${m.pushName} ⌉*
── • ◈ • ──

┏━━🤖 _مـعلـومـات البـوت:_🤖━━┓
┃ ✨  *اسـم البـوت: 𝑧ₑ𝑧ₒ_𝑏ₒ𝑡*
┃ 💻  *المـنصـة:* 𝑯𝑬𝑹𝑶𝑲𝑼💀 
┃ 📍  *رقم المطور: 201508628077*
┃ 📚  *اسم المطور: zezo*  
┗━━━━━━━━━━━━━┛
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
> استمتع بالبوت`,
        hydratedFooterText: 'اختر أحد الخيارات التالية:',
        hydratedButtons: [
          {
            urlButton: {
              displayText: '⌬ ❛╏المطور',
              url: 'https://wa.me/201508628077'
            }
          },
          {
            quickReplyButton: {
              displayText: '⌬ ❛╏قائمة الأوامر',
              id: '.قائمة_الأوامر'
            }
          }
        ]
      }
    }
  }, {})
}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['تجربه']

export default handler
