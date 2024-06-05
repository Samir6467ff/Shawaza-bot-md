/*import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';
import axios from 'axios';
const handler = async (m, {conn, usedPrefix, command}) => {
  const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/Messi.json`)).data;
  const url = await res[Math.floor(res.length * Math.random())];
      var messa = await prepareWAMessageMedia({ image: {url: url}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text:`*ميسي عمك`.trim() },
            footer: { text: `𝒁𝒆𝒛𝒐 𝑩𝒐𝒕`.trim() },  
            header: {
                title: ``,
                hasMediaAttachment: true,
                imageMessage: messa.imageMessage,
            },
            nativeFlowMessage: {
                buttons: [
{
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"التالي\",\"id\":\"ميسي\"}"
              }]        

        let msg= generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id});

}
  await conn.sendMessage(m.chat, { react: { text: '🐐', key: m.key } })

};
// conn.sendButton(m.chat, "*Messi*", author, url, [['⚽ SIGUIENTE ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['messi'];
handler.tags = ['internet'];
handler.command = /^(ميسي)$/i;
export default handler;*/
