let handler = async (m, { conn, args, usedPrefix, command }) => {
const taguser = '@' + m.sender.split("@s.whatsapp.net")[0]

    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: `┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*🐉✬⃝╿↵ مرحــبـا ⌊ ${m.pushName} ⌉*
── • ◈ • ──

┏━━🤖 _مـعلـومـات البـوت:_🤖━━┓
┃ ✨  *اسـم البـوت: 𝑧ₑ𝑧ₒ_𝑏ₒ𝑡*
┃ 💻  *المـنصـة:* 𝑯𝑬𝑹𝑶𝑲𝑼💀 
┃ 📍  *رقم المطور: 201508628077*
┃ 📚  *اسم المطور: zezo*  
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
                        title: 'قوائم',
                        highlight_label: 'new',
                        rows: [
                          {
                            header: 'info',
                            title: '⌬ ❛╏المطور',
                            description: '',
                            id: '.المطور'
                          }, 
                    } 
              } 
          }, 
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط',
                    sections: [
                      {
                        title: 'قوائم',
                        highlight_label: 'new',
                        rows: [
                          {
                            header: 'info',
                            title: '⌬ ❛╏المطور',
                            description: '',
                            id: '.المطور'
                          }, 
                          {
                                header: 'قوائم', 
                                title:'⌬ ❛╏التنزيلات', 
                                description: '', 
                                id: '.4', 
                         }, 
                            {
                                header: 'قوائم', 
                                title: '⌬ ❛╏قائمه الجروب', 
                                description: '', 
                                id: '.5', 
                         }, 
                            {
                                header: 'قوائم', 
                                title: '⌬ ❛╏الالعاب', 
                                description: '', 
                                id: '.6', 
                         }, 
                            
                            {
                                header: 'قوائم', 
                                title: '⌬ ❛╏الالعاب', 
                                description: '', 
                                id: '.6', 
                         }, 
                            
                            {
                                header: 'كل الاوامر', 
                                title: '⌬ ❛╏قائمة الاوامر', 
                                description: '', 
                                id: '.10', 
                         }, 
                        ]
                      }
                    ]
                  }),
                  messageParamsJson:'ZEZO bot'
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
handler.command = ['كل']

export default handler
