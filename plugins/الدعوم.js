import axios from "axios";
import fetch from 'node-fetch';

let handler = async (m, { command, conn, usedPrefix }) => {
  try {
    // جلب بيانات JSON من الرابط المحدد
    //let res = (await axios.get(`https://raw.githubusercontent.com/socona12/TheMystic-Bot-MD/master/src/JSON/anime-Venom.json`)).data;  
//   let haha = await res[Math.floor(res.length * Math.random())];  
    const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];

    // استخدم حقل الصورة من البيانات التي تم جلبها
    //let imagen4 = 'https://telegra.ph/file/a79388f9fa9385f59d6a3.png'; // استبدل هذا برابط الصورة الصحيح

    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let str = `
*◉═══ • ❁ 『』WELCOME 《 ❁ • ═══◉*
WELCOME ➳『 ${m.pushName} 』
*『 ️اليك قائمه بمعلومات المطور  』*

*『☯️』ī وتسابي ī《*

*⊱≼ https://wa.me/+201508628077 ≽⊰⊹*

*『🥱』معلوماتي《*

*⊱≼ https://tinyurl.com/259ho5p3 ≽⊰⊹*

*『👀』ī جروب الوتساب ī《*

*⊱≼ https://chat.whatsapp.com/JO7neq006uI3OgEtjNvtm0 ≽⊰⊹*
*『』𝒁𝒆𝒛𝒐 𝑩𝒐𝒕《*
*◉═══ • ❁ BAY ❁ • ═══◉*
*=> 🤖 وقت عمل البوت:* ${uptime}
`.trim();

    let buttons = [
      { buttonId: '.اوامر', buttonText: { displayText: 'قائمة الاوامر 📜' }, type: 1 },
      { buttonId: '.معلومات', buttonText: { displayText: 'معلومات' }, type: 1 }
    ];
    
    let buttonMessage = {
      //image: { img: imagen4 },
      caption:'هلا',
      footer: '𝒁𝒆𝒛𝒐 𝑩𝒐𝒕', // ضع النص التذييلي هنا
      buttons: buttons,
      headerType: 4
    };

    await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
  }/*catch (e) {
    console.error(e);
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    throw `*🤖 وقت العمل: ${uptime} ┃ LOOK LIKE YOU*`;
  }*/
};

handler.command = handler.help = ['م'];
handler.tags = ['kaneki'];

export default handler;

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [`\n│ *=> 💥 ` + d, ' يوم* ', `\n│ *=> 💫 ` + h, ' ساعه* ', `\n│ *=> 💠 ` + m, ' دقيقه* ', `\n│ *=> ♦ ` + s, ' ثانيه* ']
    .map(v => v.toString().padStart(2, 0)).join('');
}
