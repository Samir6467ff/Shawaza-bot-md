import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';
import axios from 'axios';
const handler = async (m, {conn, usedPrefix, command}) => {
  const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/Messi.json`)).data;
  const url = await res[Math.floor(res.length * Math.random())];
            await conn.sendMessage(m.chat, { react: { text: '🐐', key: m.key } })
  let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "*ميسي عمك🐐*"
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
                "buttonParamsJson": "{\"display_text\":\"〘 🐐 الــــــتــــــالــــي 〙\",\"id\":\".ميسي\"}"},
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"〘 🥺 الـــــدعــــــم 〙\",\"id\":\".الدعم\"}"} 
        ],         
      } 
     }) 
    }) 
   }
  }
  },{}) 

await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
}
// conn.sendButton(m.chat, "*Messi*", author, url, [['⚽ SIGUIENTE ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['messi'];
handler.tags = ['internet'];
handler.command = /^(ميسي|ليو|عمك|جوت|معزه)$/i;
export default handler;
