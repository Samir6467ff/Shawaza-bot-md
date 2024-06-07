let handler = async (m, { conn, args,
usedPrefix, command }) => {
const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: `*﹝⟣┈┈┈⟢﹝🫧﹞⟣┈┈┈⟢﹞*\n *اهلا* 👋🏻 『 ${m.pushName} 』 \n *• اسم البوت: بوت السلطان*\n *• اسم المطور: يـوسـف الـسلطان*\n *• وَنَجّنَا بِرَحْمَتِكَ مِنَ القوم الكافرين*\n`
 },
 body: {
 text: ' *`افتح القائمة بواسطه الزر`🔘*\n*﹝⟣┈┈┈⟢﹝🫧﹞⟣┈┈┈⟢﹞*\n\n> *Copyright© 2024 Youssef Al Soltan*.'
  },
  nativeFlowMessage: {
  buttons: [
   {
  name: 'single_select',
  buttonParamsJson: JSON.stringify({
  title: '📝 القائمة 📝',
  sections: [
  {
  title: '✨قائمة الأوامر✨',
  highlight_label: 'بوت السلطان',
  rows: [
  {
  header: 'صانع البوت👤',
  title: 'الـمطور👾',
  description: '',
  id: '.المطور'
  },
  {
  header: 'خصوصيه استخدام البوت❔❕',
  title: 'الاسـتخدام📜',
  description: '',
  id: '.الاستخدام'
  },
  {
  header: 'ابلاغ او ارسال رساله للمطور💭',
  title: 'طـلـب ابـلاغ📨',
  description: '',
  id: '.بلاغ'
  },
  {
  header: 'اوامر البوت🔖',
  title: 'طـلـب الاوامـر📑',
  description: '',
  id: '.مهام'
  }
  ]
  }
  ]
  }),
  messageParamsJson: ''
  }, 
  {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "قنـاة الـواتـساب📣",
                                    url: "https://whatsapp.com/channel/0029VaL2bnW0rGiPZq8B5S2M",
                                    merchant_url: "https://whatsapp.com/channel/0029VaL2bnW0rGiPZq8B5S2M"
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
  handler.command = ['أوامر','اوامر','الاوامر','ألاوامر','menu','Menu']

  export default handler
