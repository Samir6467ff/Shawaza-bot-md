import { MessageType } from '@adiwajshing/baileys';
import axios from 'axios';

let handler = async (m, { conn, usedPrefix }) => {
  try {
    // جلب بيانات كريستيانو رونالدو من الملف JSON
    const cristiano = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/CristianoRonaldo.json')).data;
    const ronaldo = cristiano[Math.floor(cristiano.length * Math.random())];

    // إعداد رسالة الوسائط
    const mediaMessage = {
      imageMessage: await conn.prepareMessage('image', { url: ronaldo }, { thumbnail: Buffer.alloc(0) }),
      contentText: '*عمك ميسي*',
      footerText: 'اختر أحد الخيارات:',
      buttons: [
        { buttonId: `${usedPrefix}الدون`, buttonText: { displayText: 'الدون' }, type: 1 },
        { buttonId: `${usedPrefix}الدعم`, buttonText: { displayText: 'الدعم' }, type: 1 }
      ],
      headerType: 1
    };

    // إرسال الرسالة التفاعلية
    await conn.sendMessage(m.chat, mediaMessage, MessageType.buttonsMessage, { quoted: m });
  } catch (error) {
    console.error(error);
  }
};

handler.help = ['cristianoronaldo', 'cr7', 'الدون'];
handler.tags = ['internet'];
handler.command = /^(الدون|رونالدو|كريستيانو)$/i;

export default handler;
