let handler = async (m, { conn, args, usedPrefix, command }) => {
  const taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
  const time = moment.tz('Africa/Egypt').format('HH')
  let wib = moment.tz('Africa/Egypt').format('HH:mm:ss')
  let date = new Date().toLocaleDateString('en-EG', { day: 'numeric', month: 'long', year: 'numeric' }); 
  await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } })

  conn.relayMessage(m.chat, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: `┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*🐉✬⃝╿↵ مرحــبـا ⌊ ${m.pushName} ⌉*
── • ◈ • ──

┏━━🤖 _مـعلـومـات البـوت:_🤖━━┓
┃ ✨  *اسـم البـوت: 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕*
┃ 💻  *المـنصـة:* 𝑯𝑬𝑹𝑶𝑲𝑼💀 
┃ 📍  *رقم المطور: 201508628077*
┃ 📚  *اسم المطور: 『➳ᴹᴿ᭄𝒁𝒆𝒛𝒐➳ᴹᴿ᭄』* 
┗━━━━━━━━━━━━━┛

┏━━⏰ _الـتـاريـخ والـوقـت!_ ⏰━┓
┃ 📆  *تـاريـخ اليـوم:* ${date} 
┃ ⏲️  *الـوقـت الـحالـي:* ${wib} 
┗━━━━━━━━━━━━━┛
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢`
          },
          body: {
            text: '> اذا واجهتك مشكله اكتب ابلاغ واكتب رسالتك\n> ➳ᴹᴿ᭄𝒁𝒆𝒛𝒐➳ᴹᴿ᭄'
          },
          buttons: [
            {
              urlButton: {
                displayText: 'زيارة الموقع',
                url: 'https://chat.whatsapp.com/BQlougGA8yh6LKZKlgPazS'
              }
            }
          ]
        }
      }
    }
  }, {})
}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['لول']

export default handler
