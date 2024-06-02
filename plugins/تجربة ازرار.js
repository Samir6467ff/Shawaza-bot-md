import fetch from 'node-fetch';
import moment from 'moment-timezone';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    const time = moment.tz('Africa/Egypt').format('HH');
    let wib = moment.tz('Africa/Cairo').format('HH:mm:ss');
    let date = new Date().toLocaleDateString('en-EG', { day: 'numeric', month: 'long', year: 'numeric' });

    await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } });

    // Fetch the image buffer
    const imageBuffer = await fetch('https://telegra.ph/file/2bcdd8e6cc7a486803d88.jpg').then(res => res.buffer());

    // Construct the interactive message with the image
    const message = {
        image: imageBuffer,
        caption: `┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
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
        footer: 'اذا واجهتك مشكله اكتب ابلاغ واكتب رسالتك\n ➳ᴹᴿ᭄𝒁𝒆𝒛𝒐➳ᴹᴿ᭄',
        buttons: [
            { buttonId: '.المطور', buttonText: { displayText: '⌬ ❛╏المطور' }, type: 1 },
            { buttonId: '.4', buttonText: { displayText: '⌬ ❛╏التنزيلات' }, type: 1 },
            { buttonId: '.5', buttonText: { displayText: '⌬ ❛╏قائمه الجروب' }, type: 1 },
        ],
        headerType: 4 // 4 means it's an image message
    };

    // Send the interactive message with the image
    await conn.sendMessage(m.chat, message, { quoted: m });
};

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['لول'];

export default handler;
