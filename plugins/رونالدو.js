import axios from 'axios';
const handler = async (m, {conn, usedPrefix, command}) => {
  const cristiano = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/CristianoRonaldo.json`)).data;
  const ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())];
await conn.sendMessage(m.chat, { react: { text: '🥳', key: m.key } })
      var messa = await prepareWAMessageMedia({ image: {url: ronaldo}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text:`*ميسي عمك*`.trim() },
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
                "buttonParamsJson": "{\"display_text\":\"آلتےـآليےـ\",\"id\":\"مےـيےـسےـيےـ\"}"
              }],        

        let msg= generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id});

}


};
// conn.sendButton(m.chat, "*Siiiuuuuuu*", author, ronaldo, [['⚽ SIGUIENTE ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['cristianoronaldo', 'cr7','الدون'];
handler.tags = ['internet'];
handler.command = /^(الدون|رونالدو|كريستيانو)$/i;
export default handler;
