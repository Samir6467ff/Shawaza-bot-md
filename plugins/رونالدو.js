import axios from 'axios';
import { MessageMedia, Buttons } from 'whatsapp-web.js';

let handler = async (m, { conn, usedPrefix }) => {
  try {
    // جلب بيانات كريستيانو رونالدو من الملف JSON
    const cristiano = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/CristianoRonaldo.json')).data;
    const ronaldo = cristiano[Math.floor(cristiano.length * Math.random())].result;

    // تحميل الصورة من URL وتحويلها إلى MessageMedia
    const image = await axios.get(ronaldo, { responseType: 'arraybuffer' });
    const media = new MessageMedia('image/jpeg', image.data.toString('base64'), 'ronaldo.jpg');

    // إعداد الأزرار التفاعلية
    const buttons = [
      { body: 'التالي', id: `${usedPrefix}الدون` },
      { body: 'الدعم', id: `${usedPrefix}الدعم` }
    ];

    const buttonMessage = {
      caption: 'اختر أحد الخيارات:',
      footer: 'اختر أحد الخيارات:',
      buttons: buttons,
      headerType: 4 // 4 تعني رسالة تحتوي على صورة وأزرار
    };

    // إرسال الصورة مع الأزرار
    await conn.sendMessage(m.chat, media, buttonMessage);
  } catch (error) {
    console.error(error);
  }
};

handler.help = ['cristianoronaldo', 'cr7', 'الدون'];
handler.tags = ['internet'];
handler.command = /^(الدون|رونالدو|كريستيانو)$/i;

export default handler;
