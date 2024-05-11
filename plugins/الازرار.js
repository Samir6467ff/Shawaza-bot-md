let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*بوت زيزو معك لحياه افضل*\n*منور* ${taguser} '
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
