function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms % 3600000 / 60000);
    let s = Math.floor(ms % 60000 / 1000);
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000);
    let locale = 'ar';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender)
    let { money, joincount } = global.db.data.users[m.sender];
    let { exp, limit, level, role } = global.db.data.users[m.sender];
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
    let more = String.fromCharCode(8206);
    let readMore = more.repeat(850);
    const time = moment.tz('Africa/Egypt').format('HH')
    let wib = moment.tz('Africa/Cairo').format('HH:mm:ss')
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } })
 
conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: `┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
🐉✬⃝╿↵ مرحــبـا ⌊ ${m.pushName} ⌉
── • ◈ • ──

┏━━🤖 『』ī معلومات البوت ī《 🤖━━┓
┃ ✨  اسـم البـوت: 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕
┃ 💻  المـنصـة: 𝑯𝑬𝑹𝑶𝑲𝑼💀 
┃ 📍  رقم المطور: 201508628077
┃ 📚  اسم المطور: 『➳ᴹᴿ᭄𝒁𝒆𝒛𝒐➳ᴹᴿ᭄』 
┗━━━━━━━━━━━━━┛

┏━━⏰ 『』التاريخ والوقت《 ⏰━┓
┃ 📆  تـاريـخ اليـوم: 『』${date}《 
┃ ⏲️  الـوقـت الـحالـي: 『』${wib}《 
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
                                    title: '⌈🛡╎الــقــوائـــم╎🛡⌋',
                                    sections: [
                                        {
                                            title: 'مــرحـ🛡ـبــا بــك فـي مــ☑هــام نـاروتـو بـ🤖ـوت',
                                            highlight_label: 'بعبص براحتك يابرو 🤖',
                                            rows: [
                                                {
                                                    header: 'الــقـ👑ـســم الـاول',
                                                    title: 'قسم_الجروبات_👑',
                                                    description: '',
                                                    id: '.م1'
                                                },
                                                {
                                                    header: 'الــقـ🕋ـســم الــثــانــي',
                                                    title: 'قسم_الدين_الاسلامي_🕋',
                                                    description: '',
                                                    id: '.م2'
                                                },
                                                {
                                                    header: 'الــقـ👑ـســم الــثــالــث',
                                                    title: 'قسم_المطور_👑',
                                                    description: '',
                                                    id: '.م3'
                                                },
                                                {
                                                    header: 'الــقـ🛡ـســم الــرابــع',
                                                    title: 'قسم_التنزيلات_🛡',
                                                    description: '',
                                                    id: '.م4'
                                                },
                                                {
                                                    header: 'الــقـ🕹ـســم الــخــامــس',
                                                    title: 'قسم_الترفيه_🕹',
                                                    description: '',
                                                    id: '.م5'
                                                },
                                                {
                                                    header: 'الــقـ🌀ـســم الــســادس',
                                                    title: 'قسم_التحويلات_🌀',
                                                    description: '',
                                                    id: '.م6'
                                                },
                                                {
                                                    header: 'الــقـ🎧ـســم الــســابــع',
                                                    title: 'قسم_الصوتيات_🎤',
                                                    description: '',
                                                    id: '.م7'
                                                },
                                                {
                                                    header: 'الــقـ🤖ـســم الــثــامــن',
                                                    title: 'قسم_الذكاء_الاصطناعي_🤖',
                                                    description: '',
                                                    id: '.م8'
                                                },
                                                {
                                                    header: 'الــقـ🚨ـســم الــتــاســع',
                                                    title: 'قسم_الدعم_🚨',
                                                    description: '',
                                                    id: '.م9'
                                                },
                                                {
                                                    header: 'الــقـ👨🏻‍💻ـســم الــعــاشــر',
                                                    title: 'سكربت_بوت_جاهز_للتعديل_👨🏻‍💻',
                                                    description: '',
                                                    id: '.م10'
                                               }
                                            ]
                                        }
                                    ]
                                }),
                  messageParamsJson: ''
                     },
                     {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":"https://whatsapp.com/channel/0029VaXddtu0lwgiREisx82C","merchant_url":"https://whatsapp.com/channel/0029VaXddtu0lwgiREisx82C"}'
                            }
                        ]
                    }
                }
            }
        }
    }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['ازرار']; 

export default handler; 
