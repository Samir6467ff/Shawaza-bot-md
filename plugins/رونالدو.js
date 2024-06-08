import axios from 'axios';

let handler = async (m, { conn, usedPrefix }) => {
  try {
    // جلب بيانات كريستيانو رونالدو من الملف JSON
    const cristiano = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/CristianoRonaldo.json')).data;
    const ronaldo = cristiano[Math.floor(cristiano.length * Math.random())].result;

    // إعداد الرسالة
    const buttons = [
      { buttonId: `${usedPrefix}الدون`, buttonText: { displayText: 'التالي' }, type: 1 },
      { buttonId: `${usedPrefix}الدعم`, buttonText: { displayText: 'الدعم' }, type: 1 }
    ];

    const buttonMessage = {
      image: { url: ronaldo }, // استخدام URL الصورة مباشرة
      caption: 'اختر أحد الخيارات:',
      footer: 'اختر أحد الخيارات:',
      buttons: buttons,
      headerType: 4 // 4 تعني رسالة تحتوي على صورة وأزرار
    };

    // إرسال الصورة مع الأزرار
    await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
  } catch (error) {
    console.error(error);
  }
};

handler.help = ['cristianoronaldo', 'cr7', 'الدون'];
handler.tags = ['internet'];
handler.command = /^(الدون|رونالدو|كريستيانو)$/i;

export default handler;
