import fetch from 'node-fetch';
import { prepareWAMessageMedia} from '@whiskeysockets/baileys';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
//if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `*[❗] Los comandos +18 están desactivados en este grupo, si es admin y desea activarlos use ${usedPrefix}enable modohorny*`; 
  try {
    const pp = imagen4;
    const vn = './media/La biblia.mp3';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
*⟣𓆩༺ 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕 ❄ ༻𓆪⟢* 
⟣┈┈┈┈⟢〘❄〙⟣┈┈┈⟢
*༺ مـنـــور يــاقــلـبـي 〘 ${m.pushName} 〙༻*
⟣┈┈┈┈⟢〘❄〙⟣┈┈┈⟢

*⌬ ❛╏دي اوامر البوت متنساش ال ( . ) قبل اي امر*

*⌬ ❛╏استمتع بالبوت بدون التسبب بازعاج للاعضاء*

*⌬ ❛╏ممنوع طلب اشياء تخالف الشرع*

*⌬ ❛╏ممنوع سب البوت اطلاقا باي الفاظ*

       *〘 مخالفة الشروط = حرمانك من البوت 〙*

*⌬ ❛╏اذا كان هناك شئ لا يعجبك اكتب 〘 .ابلاغ  + مشكلتك〙*

⟣┈┈┈⟢〘❄〙⟣┈┈┈⟢
*༺ قــسـم الــعــاب ༻*
⟣┈┈┈⟢〘❄〙⟣┈┈┈⟢
│✯ ❯ .رياضه. 
│✯ ❯ .اكس او. 
│✯ ❯ .رياضيات. 
│✯ ❯ .رهان. 
│✯ ❯ .شخصية. 
│✯ ❯ .احزر. 
│✯ ❯ .عين. 
│✯ ❯ .ايموجي. 
│✯ ❯ .سؤال. 
│✯ ❯ .كت. 
│✯ ❯ .خمن. 
│✯ ❯ .فكك. 
│✯ ❯ .رتب. 
│✯ ❯ .اجابه. 
│✯ ❯ .دين. 
│✯ ❯ .لغز. 
│✯ ❯ .لعبه. 
        *⟣𓆩༺ 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕 ༻𓆪⟢*

⟣┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
`.trim();
    if (m.isGroup) {
      await conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    //  await conn.sendFile(m.chat, vn, 'La biblia.mp3', null, m, true, {type: 'audioMessage', ptt: true});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      await conn.sendMessage(m.chat, {image:{url:'https://telegra.ph/file/f4f9d2420ac2b1072eb2e.jpg'}, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
      //await conn.sendFile(m.chat, vn, 'La biblia.mp3', null, m, true, {type: 'audioMessage', ptt: true});
      await conn.sendMessage(m.chat, { react: { text: '🎮', key: m.key } })

    }
  } catch {
    conn.reply(m.chat, '*🐦*', m);
  }
};
handler.command = /^(6)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
                                                                                                                                                                                                                                                                      }
