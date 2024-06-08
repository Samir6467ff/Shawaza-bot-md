import { prepareWAMessageMedia, generateWAMessageFromContent, proto } from '@whiskeysockets/baileys';
import moment from 'moment-timezone';

let handler = async (m, { conn }) => {
    const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    const wib = moment.tz('Africa/Cairo').format('HH:mm:ss');
    const date = new Date().toLocaleDateString('en-EG', { day: 'numeric', month: 'long', year: 'numeric' });

    await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } });

    // قائمة عناوين URL للصور
    const images = [
        'https://telegra.ph/file/a79388f9fa9385f59d6a3.png',
        'https://telegra.ph/file/9c5f3db7081f5fc0f8ad2.jpg',
        'https://telegra.ph/file/187d2833c018e15d866c4.jpg'
    ];

    // اختيار عشوائي لعنوان URL من القائمة
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // إعداد رسالة الوسائط
    const media = await prepareWAMessageMedia({ image: { url: randomImage } }, { upload: conn.waUploadToServer });

    const content = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        extendedTextMessage: {
            text: `┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*🐉✬⃝╿↵ مرحــبـا ⌊ ${m.pushName} ⌉*
── • ◈ • ──

┏━━🤖 *『』ī معلومات البوت ī《* 🤖━━┓
┃ ✨  *اسـم البـوت: 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕*
┃ 💻  *المـنصـة:* 𝑯𝑬𝑹𝑶𝑲𝑼💀 
┃ 📍  *رقم المطور: 201508628077*
┃ 📚  *اسم المطور: 『➳ᴹᴿ᭄𝒁𝒆𝒛𝒐➳ᴹᴿ᭄』* 
┗━━━━━━━━━━━━━┛

┏━━⏰ *『』التاريخ والوقت《* ⏰━┓
┃ 📆  *تـاريـخ اليـوم:* 『』${date}《 
┃ ⏲️  *الـوقـت الـحالـي:* 『』${wib}《 
┗━━━━━━━━━━━━━┛
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢`,
            contextInfo: {
                externalAdReply: {
                    title: 'دعوه للجروب',
                    body: '𝒁𝒆𝒛𝒐 𝑩𝒐𝒕',
                    thumbnail: media.imageMessage,
                    mediaType: 1,
                    mediaUrl: 'https://chat.whatsapp.com/JO7neq006uI3OgEtjNvtm0'
                }
            }
        }
    }), { quoted: m });

    const buttons = [
        {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
                title: '『』CLICK《',
                sections: [
                    {
                        title: '『』MENUS《',
                        highlight_label: 'OWNER',
                        rows: [
                            { header: 'info', title: '⌬ ❛╏المطور', description: '', id: '.المطور' },
                            { header: '『』MENU《', title: '⌬ ❛╏التنزيلات', description: '', id: '.4' },
                            { header: '『』MENU《', title: '⌬ ❛╏قائمه الجروب', description: '', id: '.5' },
                            { header: '『』MENU《', title: '⌬ ❛╏الالعاب', description: '', id: '.6' },
                            { header: '『』MENU《', title: '⌬ ❛╏الترفيه', description: '', id: '.6' },
                            { header: '『』MENU《', title: '⌬ ❛╏الصور', description: '', id: '.2' },
                            { header: '『』MENU《', title: '⌬ ❛╏شروط', description: '', id: '.20' },
                            { header: '『』MENU《', title: '⌬ ❛╏الدعم', description: '', id: '.الدعم' },
                            { header: '『』All MENU《', title: '⌬ ❛╏قائمة الاوامر', description: '', id: '.10' }
                        ]
                    }
                ]
            }),
            messageParamsJson: 'ZEZO bot'
        },
        {
            name: "quick_reply",
            buttonParamsJson: "{\"display_text\":\"『』OWNER《\",\"id\":\".المطور\"}"
        },
        {
            name: "cta_url",
            buttonParamsJson: "{\"display_text\":\"『』WEBSITE《\",\"url\":\"https://atom.bio/zyad_yasser\",\"merchant_url\":\"https://atom.bio/zyad_yasser\"}"
        },
        {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text: "『』CHANNEL《",
                url: "https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a",
                merchant_url: "https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a"
            })
        }
    ];

    await conn.relayMessage(m.chat, content.message, { messageId: content.key.id });
    await conn.sendMessage(m.chat, {
        interactiveMessage: {
            body: {
                text: content.message.extendedTextMessage.text
            },
            footer: {
                text: '➳ᴹᴿ᭄𝒁𝒆𝒛𝒐➳ᴹᴿ᭄'
            },
            header: {
                hasMediaAttachment: true,
                imageMessage: media.imageMessage
            },
            nativeFlowMessage: {
                buttons: buttons
            }
        }
    }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['لول'];

export default handler;
