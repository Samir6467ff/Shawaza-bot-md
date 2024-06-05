import axios from 'axios';

const handler = async (m, { conn, usedPrefix, command }) => {
  try {
    // جلب بيانات كريستيانو رونالدو من الملف JSON
    const cristiano = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/CristianoRonaldo.json`)).data;
    const ronaldo = cristiano[Math.floor(cristiano.length * Math.random())];

    // إرسال رد فعل الرموز التعبيرية
    await conn.sendMessage(m.chat, { react: { text: '🥳', key: m.key } });

    // إعداد رسالة الوسائط
    const mediaMessage = await conn.prepareMessageMedia({ image: { url: ronaldo }}, { upload: conn.waUploadToServer });

    // إعداد الرسالة التفاعلية
    const interactiveMessage = {
      text: `*ميسي عمك*`,
      footer: `𝒁𝒆𝒛𝒐 𝑩𝒐𝒕`,
      headerType: 4,
      imageMessage: mediaMessage.imageMessage,
      buttons: [
        {
          buttonId: 'مےـيےـسےـيےـ',
          buttonText: { displayText: 'آلتےـآليےـ' },
          type: 1,
        },
      ],
    };

    // إنشاء رسالة عرض مرة واحدة
    const msg = await conn.prepareMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: interactiveMessage,
      },
    }, { quoted: m });

    // إرسال الرسالة
    await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
  } catch (error) {
    console.error(error);
  }
};

handler.help = ['cristianoronaldo', 'cr7', 'الدون'];
handler.tags = ['internet'];
handler.command = /^(الدون|رونالدو|كريستيانو)$/i;

export default handler;
