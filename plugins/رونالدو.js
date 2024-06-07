import axios from 'axios';

let handler = async (m, { conn, usedPrefix }) => {
  try {
    // جلب بيانات كريستيانو رونالدو من الملف JSON
    const cristiano = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/CristianoRonaldo.json')).data;
    const ronaldo = cristiano[Math.floor(cristiano.length * Math.random())];

    // إعداد الرسالة
    const buttons = [
      { buttonId: `${usedPrefix}الدون`, buttonText: { displayText: 'الدون' }, type: 1 },
      { buttonId: `${usedPrefix}الدعم`, buttonText: { displayText: 'الدعم' }, type: 1 }
    ];

    const buttonMessage = {
      contentText: '*عمك ميسي*',
      footerText: 'اختر أحد الخيارات:',
      buttons: buttons,
      headerType: 1
    };

    // إرسال الصورة
    await conn.sendFile(m.chat, ronaldo, 'ronaldo.jpg', buttonMessage);
  } catch (error) {
    console.error(error);
  }
};

handler.help = ['cristianoronaldo', 'cr7', 'الدون'];
handler.tags = ['internet'];
handler.command = /^(الدون|رونالدو|كريستيانو)$/i;

export default handler;
