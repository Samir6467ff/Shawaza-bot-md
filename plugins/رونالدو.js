import { prepareWAMessageMedia } from '@whiskeysockets/baileys';
import pkg from '@whiskeysockets/baileys';
import axios from 'axios';
const { generateWAMessageFromContent, proto } = pkg
const handler = async (m, { conn, usedPrefix, command }) => {
    // جلب بيانات كريستيانو رونالدو من الملف JSON
    const cristiano = ['https://telegra.ph/file/90d37ccf1896c6baccdea.jpg', 
                       'https://telegra.ph/file/c6c31dc7c95a131bf5a63.jpg', 
                       'https://telegra.ph/file/020709d09e6db1055c80d.jpg', 
                       'https://telegra.ph/file/95db3b2a3c1d593f3310b.png'
                       ]; 
    const ronaldo = cristiano[Math.floor(cristiano.length * Math.random())];

    // إرسال رد فعل الرموز التعبيرية
    await conn.sendMessage(m.chat, { react: { text: '🥳', key: m.key } });

    // إعداد رسالة الوسائط
    const mediaMessage = await prepareWAMessageMedia({ image: { url: ronaldo } }, { upload: conn.waUploadToServer });

    let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "تست"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "𝒁𝒆𝒛𝒐 𝑩𝒐𝒕"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "ميسي عمك",
            subtitle: "تست",
            hasMediaAttachment: true, 
         image: mediaMessage.imageMessage   
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
                {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"الــتـــــالـي\",\"id\":\".الدون\"}"
             }, 
                {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"الـــــــدعــــم\",\"id\":\"الدعم\"}"
              }
           ],
          }) 
        }) 
       } 
     } 
   },{}) 
    // إرسال الرسالة
    await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
    } 
handler.help = ['cristianoronaldo', 'cr7', 'الدون'];
handler.tags = ['internet'];
handler.command = /^(الدون|رونالدو|كريستيانو)$/i;

export default handler;
