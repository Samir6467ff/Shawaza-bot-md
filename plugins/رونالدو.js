import { prepareWAMessageMedia } from '@whiskeysockets/baileys';
import axios from 'axios';

let handler = async (m, { conn, usedPrefix }) => {
  try {
    // جلب بيانات كريستيانو رونالدو من الملف JSON
    const cristiano = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/CristianoRonaldo.json')).data;
    const ronaldo = cristiano[Math.floor(cristiano.length * Math.random())];

    // إرسال رد فعل الرموز التعبيرية
    await conn.sendMessage(m.chat, { react: { text: '🥳', key: m.key } });

    // إعداد رسالة الوسائط
    const mediaMessage = await prepareWAMessageMedia({ image: { url: ronaldo } }, { upload: conn.waUploadToServer });

    // إعداد الرسالة التفاعلية
    const interactiveMessage = {
      buttons: [
        { buttonId: `${usedPrefix}الدون`, buttonText: { displayText: 'الدون' }, type: 1 },
        { buttonId: `${usedPrefix}الدعم`, buttonText: { displayText: 'الدعم' }, type: 1 }
      ],
      contentText: '*عمك ميسي*',
      footerText: 'اختر أحد الخيارات:'
    };

    // إرسال الرسالة التفاعلية
    await conn.sendMessage(m.chat, interactiveMessage, 'buttonsMessage', { quoted: m, contextInfo: { mentionedJid: [ronaldo] } });
  } catch (error) {
    console.error(error);
  }
};

handler.help = ['cristianoronaldo', 'cr7', 'الدون'];
handler.tags = ['internet'];
handler.command = /^(الدون|رونالدو|كريستيانو)$/i;

export default handler;
