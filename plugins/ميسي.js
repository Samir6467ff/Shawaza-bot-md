import{ prepareWAMessageMedia } from '@whiskeysockets/baileys';
import pkg from '@whiskeysockets/baileys';
import axios from 'axios';
const { generateWAMessageFromContent, proto } = pkg
const handler = async (m, { conn, usedPrefix, command }) => {
    // جلب بيانات كريستيانو رونالدو من الملف JSON
    const messi = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/Messi.json')).data;
    const goat = messi[Math.floor(messi.length * Math.random())];

    // إرسال رد فعل الرموز التعبيرية
    await conn.sendMessage(m.chat, { react: { text: '🐐', key: m.key } });

    // إعداد رسالة الوسائط
    const mediaMessage = await prepareWAMessageMedia({ image: { url: goat } }, { upload: conn.waUploadToServer });

    let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "*ميسي عمك 🤙🏻♥*"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "𝒁𝒆𝒛𝒐 𝑩𝒐𝒕"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "*〘 THE GOAT 〙*",
            subtitle: "",
            hasMediaAttachment: true, 
            imageMessage: mediaMessage.imageMessage,  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
                {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"〘 الــتـــــالـي 〙\",\"id\":\".ميسي\"}"
             }, 
                {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"〘 الـــــــدعــــم 〙\",\"id\":\".الدعم\"}"
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
handler.help = ['messi', 'goat', 'ليو'];
handler.tags = ['internet'];
handler.command = /^(ميسي|ليو|جوت|معزه|ماء|goat)$/i;

export default handler;
