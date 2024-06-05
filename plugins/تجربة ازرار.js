let handler = async (m, { conn, args, usedPrefix, command }) => {
const taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
const time = moment.tz('Africa/Egypt').format('HH')
let wib = moment.tz('Africa/Cairo').format('HH:mm:ss')
let date = new Date().toLocaleDateString('en-EG', { day: 'numeric', month: 'long', year: 'numeric' }); 
await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } })

   
  conn.relayMessage(m.chat, {
    viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage:{
          body: {
            text: "test"
          }, 
          footer: {
            text: "test"
          },
          header:{
            title: "test",
            subtitle: "test",
            hasMediaAttachment: true, 
image:{url:'https://telegra.ph/file/a79388f9fa9385f59d6a3.png'}, 

            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: '『』CLICK《',
                    sections: [
                      {
                        title: '『』MENUS《',
                        highlight_label: 'OWNER', 
                        rows: [
                          {
                            header: 'info',
                            title: '⌬ ❛╏المطور',
                            description: '',
                            id: '.المطور'
                          },
                           {
                                header: '『』MENU《', 
                                title:'⌬ ❛╏التنزيلات', 
                                description: '', 
                                id: '.4', 
                         }, 
                            {
                                header: '『』MENU《', 
                                title: '⌬ ❛╏قائمه الجروب', 
                                description: '', 
                                id: '.5', 
                         }, 
                            {
                                header: '『』MENU《', 
                                title: '⌬ ❛╏الالعاب', 
                                description: '', 
                                id: '.6', 
                         }, 
                            
                            {
                                header: '『』MENU《', 
                                title: '⌬ ❛╏الترفيه', 
                                description: '', 
                                id: '.6', 
                         }, 
                           
                            {
                                header: '『』MENU《', 
                                title: '⌬ ❛╏الصور', 
                                description: '', 
                                id: '.2', 
                         }, 

                           
                            {
                                header: '『』MENU《', 
                                title: '⌬ ❛╏شروط', 
                                description: '', 
                                id: '.20', 
                         }, 


                            {
                                header: '『』MENU《', 
                                title: '⌬ ❛╏الدعم', 
                                description: '', 
                                id: '.الدعم', 
                         }, 

                            
                            {
                                header: '『』All MENU《', 
                                title: '⌬ ❛╏قائمة الاوامر', 
                                description: '', 
                                id: '.10', 
                         }, 
                        ]
                      }
                    ]
                  }),
                  messageParamsJson:'ZEZO bot'
              }, 
              {
                  "name": "quick_reply",
                  "buttonParamsJson": "{\"display_text\":\"『』OWNER《\",\"id\":\".المطور\"}" 
               }, 
               {
                  "name": "cta_url",
                  "buttonParamsJson": "{\"display_text\":\"『』WEBSITE《\",\"url\":\"https://atom.bio/zyad_yasser\",\"merchant_url\":\"https://atom.bio/zyad_yasser\"}"
                },
                {
                   name: "cta_url",
                   buttonParamsJson: JSON.stringify({
                   display_text: "『』CHANNEL《",
                   url: "https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a",
                   merchant_url: "https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a"
               })
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
handler.command = ['لول']

export default handler
