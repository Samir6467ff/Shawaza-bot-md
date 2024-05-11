
import displayLoadingScreen from '../lib/loading.js'
import fetch from 'node-fetch'
import {delay} from '@whiskeysockets/baileys'
import translate from '@vitalets/google-translate-api';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  try {
    if (!text) throw `امم.. ماذا تريد أن تقول؟`
    await conn.sendMessage(m.chat, { react: { text: '🤖', key: m.key } })

    //await displayLoadingScreen(conn, m.chat)


    const prompt = encodeURIComponent(text);
    let apiurl = `https://ultimetron.guruapi.tech/gpt4?prompt=${prompt}`

    const result = await fetch(apiurl);
    const response = await result.json();
    console.log(response)
    const englishText = response.result.reply;

    // ترجمة النص إلى اللغة العربية
    const arabicTranslation = await translate(englishText, { to: 'ar' });

    await typewriterEffect(conn, m, m.chat, arabicTranslation.text);
       
  } catch (error) {
    console.error(error);
    m.reply('أُووبس! هناك خطأ ما. ، ونحن نحاول إصلاحه في أسرع وقت ممكن');
  }
}
handler.help = ['gemini <text>']
handler.tags = ['tools']
handler.command = /^(gpt4|جيبيتي|جيبي_تي)$/i

export default handler

async function typewriterEffect(conn, quoted ,from, text) {
    let { key } = await conn.sendMessage(from, { text: 'Thinking...' } , {quoted:quoted})
  
    for (let i = 0; i < text.length; i++) {
      const noobText = text.slice(0, i + 1);
      await conn.relayMessage(from, {
        protocolMessage: {
          key: key,
          type: 14,
          editedMessage: {
            conversation: noobText
          }
        }
      }, {});
   
       await delay(100); // Adjust the delay time (in milliseconds) as needed
    }
}
