let handler = async (m, { conn, args, usedPrefix, command }) => {
const taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
const time = moment.tz('Africa/Egypt').format('HH')
let wib = moment.tz('Africa/Egypt').format('HH:mm:ss')
let date = new Date().toLocaleDateString('en-EG', { day: 'numeric', month: 'long', year: 'numeric' });  
   
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

┏━━⏰ _الـتـاريـخ والـوقـت!_ ⏰━┓
┃ 📆  *تـاريـخ اليـوم:* ${date} 
┃ ⏲️  *الـوقـت الـحالـي:* ${wib} 
┗━━━━━━━━━━━━━┛
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢`
            },
            body: {
              text: '> اذا واجهتك مشكله اكتب ابلاغ واكتب رسالتك\n> ➳ᴹᴿ᭄𝒁𝒆𝒛𝒐➳ᴹᴿ᭄'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: '『』CLICK《',
                    sections: [
                      {
                        title: '『』MENUS《',
                        highlight_label: 'NEW',
                        rows: [
                          {
                            header: 'info',
                            title: '⌬ ❛╏المطور',
                            description: '',
                            id: '.المطور'
                          }, 
                          {
                                header: '『』menu《', 
                                title:'⌬ ❛╏التنزيلات', 
                                description: '', 
                                id: '.4', 
                         }, 
                            {
                                header: '『』menu《', 
                                title: '⌬ ❛╏قائمه الجروب', 
                                description: '', 
                                id: '.5', 
                         }, 
                            {
                                header: '『』menu《', 
                                title: '⌬ ❛╏الالعاب', 
                                description: '', 
                                id: '.6', 
                         }, 
                            
                            {
                                header: '『』menu《', 
                                title: '⌬ ❛╏الالعاب', 
                                description: '', 
                                id: '.6', 
                         }, 
                           
                            {
                                header: '『』menu《', 
                                title: '⌬ ❛╏والصور', 
                                description: '', 
                                id: '.2', 
                         }, 
                            
                            {
                                header: '『』All menu《', 
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
handler.command = ['اوامر']

export default handler
