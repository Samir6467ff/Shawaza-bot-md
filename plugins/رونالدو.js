import { prepareWAMessageMedia, generateWAMessageFromContent } from '@whiskeysockets/baileys';
import axios from 'axios';

const handler = async (m, { conn, usedPrefix, command }) => {
  try {
    // جلب بيانات كريستيانو رونالدو من الملف JSON
    const cristiano = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/CristianoRonaldo.json')).data;
    const ronaldo = cristiano[Math.floor(cristiano.length * Math.random())];

    // إرسال رد فعل الرموز التعبيرية
    await conn.sendMessage(m.chat, { react: { text: '🥳', key: m.key } });

    // إعداد رسالة الوسائط
    var mediaMessage = await prepareWAMessageMedia({ image: { url: ronaldo } }, { upload: conn.waUploadToServer });

    // إعداد الرسالة التفاعلية
    const interactiveMessage = {
            header:{
              hasMediaAttachment: true,
      image: mediaMessage.imageMessage,
        title:''}, 
         /*  body: {
      text: '*ميسي عمك*',
        }, 
      footer:{ text: '𝒁𝒆𝒛𝒐 𝑩𝒐𝒕'},*/
            buttons: [
        {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"التالي\",\"id\":\".الدون\"}"
        }
      ],
      //headerType: 4 // يشير إلى أن الرسالة تحتوي على صورة
    };

    // إنشاء رسالة عرض مرة واحدة
    const msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })


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
