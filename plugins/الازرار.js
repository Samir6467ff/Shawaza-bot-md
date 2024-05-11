let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: `┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*🐉✬⃝╿↵ مرحــبـا ⌊@${m.sender.split("@")[0]}⌉*
── • ◈ • ──

┏━━🤖 _مـعلـومـات البـوت:_🤖━━┓
┃ ✨  *اسـم البـوت: 𝑧ₑ𝑧ₒ_𝑏ₒ𝑡*
┃ 💻  *المـنصـة:* 𝑯𝑬𝑹𝑶𝑲𝑼💀 
┃ 🕓  *وقـت الـتـشغيـل:* ${uptime}
┃ 📚  *إجـمالـي المـستخـدميـن:* ${rtotal} 
┗━━━━━━━━━━━━━┛
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢`
            },
            body: {
              text: '> استمتع بالبوت'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط',
                    sections: [
                      {
                        title: 'القائمة',
                        highlight_label: 'new',
                        rows: [
                          {
                            header: 'المطور',
                            title: 'تشغيل كود (#المطور) ',
                            description: '',
                            id: '.المطور'
                          }, 
                          {
                                header: 'القايمه', 
                                title: 'تشغيل (#قايمة_الاوامر) ', 
                                description: '', 
                                id: '.اوامر', 
                         } 
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['تست']

export default handler
