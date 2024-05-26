let  handler = async (m, { conn, args, usedPrefix, command }) => {
 const taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
  
  conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: `┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*🐉✬⃝╿↵ مرحــبـا ➻${m.pushName}*
── • ◈ • ──
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
➻𒍜➻🏞️│الاديـت و الـصـوره│📹
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*➻𒍜➻📹❯ .ايديت*
*➻𒍜➻🎴❯ .خلفيات*
*➻𒍜➻👩🏻‍❤️‍👨🏻❯ .تطقيم*
*➻𒍜➻🙋🏻‍♂️❯ .طقم-اولاد*
*➻𒍜➻⚽❯ .كريستيانو*
*➻𒍜➻🐏❯ .ميسي*
*➻𒍜➻🦮❯ .كلب*
*➻𒍜➻🐈❯ .قط*
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
> ➻𒍜➻『➳ᴹᴿ᭄𝒁𝒆𝒛𝒐➳ᴹᴿ᭄』`
            },
            body: {
              text: ''
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط',
                    sections: [
                      {
                        title: 'قسم الايديت',
                        highlight_label: 'new',
                        rows: [
                          {
                            header: 'info',
                            title: '⌬ ❛╏المطور',
                            description: '',
                            id: '.المطور'
                          }, 
                          {
                                header: '『』الايديت《', 
                                title:'⌬ ❛╏ايديت', 
                                description: '', 
                                id: '.ايديت', 
                         }, 
                            {
                                header: '『』تطقيمات《', 
                                title: '⌬ ❛╏تطقيم', 
                                description: '', 
                                id: '.تطقيم', 
                         }, 
                            {
                                header: '『』تطقيمات《', 
                                title: '⌬ ❛╏اولاد', 
                                description: '', 
                                id: '.طقم2', 
                         }, 
                          
                            {
                                header: '『』عمك《', 
                                title: '⌬ ❛╏ميسي', 
                                description: '', 
                                id: '.ميسي', 
                         }, 
                      
                            {
                                header: '『』عمك2《', 
                                title: '⌬ ❛╏كريس', 
                                description: '', 
                                id: '.رونالدو', 
                         }, 

                            {
                                header: '『』قول مياو《', 
                                title: '⌬ ❛╏مياو', 
                                description: '', 
                                id: '.قط', 
                         }, 

                            {
                                header: '『』كلب《', 
                                title: '⌬ ❛╏كلب', 
                                description: '', 
                                id: '.كلب', 
                         }, 
                          
                        ]
                      }
                    ]
                  }),
                  messageParamsJson:''
                }
              ]
            }
          }
        }
      }
    },{})

}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['2']

export default handler
