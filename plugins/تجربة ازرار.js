import { prepareWAMessageMedia, generateWAMessageFromContent } from '@whiskeysockets/baileys';
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
    var messa = await prepareWAMessageMedia({ image: { url: randomImage } }, { upload: conn.waUploadToServer });

    const content = generateWAMessageFromContent(m.chat, {
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
                    mediaType: 1,
                    thumbnail: messa.imageMessage,
                    sourceUrl: 'https://chat.whatsapp.com/JO7neq006uI3OgEtjNvtm0'
                }
            }
        }
    }, { quoted: m });

    await conn.relayMessage(m.chat, content.message, { messageId: content.key.id });
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['لول'];

export default handler;
