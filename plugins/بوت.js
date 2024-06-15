import fetch from 'node-fetch';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({ organization: global.openai_org_id, apiKey: global.openai_key });
const openaiClient = new OpenAIApi(configuration);

async function getOpenAIChatCompletion(text) {
  const openaiAPIKey = global.openai_key;
  const sistema1 = `『❄️  ⍣⃝𝑁𝐴𝑇𝑆𝑈.`;
  let chgptdb = global.chatgpt.data.users[m.sender];
  chgptdb.push({ role: 'user', content: text });
  const url = "https://api.openai.com/v1/chat/completions";
  const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${openaiAPIKey}` };
  const data = { "model": "gpt-3.5-turbo", "messages": [{ "role": "system", "content": sistema1 }, ...chgptdb] };
  const response = await fetch(url, { method: "POST", headers, body: JSON.stringify(data) });
  const result = await response.json();
  return result.choices[0].message.content;
}

async function getAlternativeResponse(url) {
  const response = await fetch(url, { timeout: 5000 });  // Setting a timeout of 5 seconds
  const result = await response.json();
  return result.data || result.result || result.respon;
}

async function translateToArabic(text) {
  const result = await translate(text, { to: 'ar', autoCorrect: true });
  return result.text;
}

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!text) throw `يرجى تقديم نص للاستفسار. أمثلة:\n\n❏ ${usedPrefix + command} ما هو أول انمي\n❏ ${usedPrefix + command} أركان الاسلام \n❏ ${usedPrefix + command} ما هو أول مخترع لبوتات واتساب`;

  try {
    conn.sendPresenceUpdate('composing', m.chat);
    let respuesta = await getOpenAIChatCompletion(text);
    m.reply(respuesta.trim());
  } catch (error) {
    console.error('Error with OpenAI API:', error.message);
    const alternativeAPIs = [
      `https://api.openai.com/v1/completions`,
      `https://api-fgmods.ddns.net/api/info/openai?text=${text}&symsg=⍣⃝𝑁𝐴𝑇𝑆𝑈&apikey=XlwAnX8d`,
      `https://vihangayt.me/tools/chatgpt?q=${text}`,
      `https://vihangayt.me/tools/chatgpt2?q=${text}`,
      `https://vihangayt.me/tools/chatgpt3?q=${text}`,
      `https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=${m.sender}`,
      `https://api.ibeng.tech/api/others/chatgpt?q=Hola&apikey=eMlBNRzUXv`,
      `https://api.akuari.my.id/ai/gpt?chat=${text}`,
      `https://api.akuari.my.id/ai/gbard?chat=${text}`
    ];

    for (let api of alternativeAPIs) {
      try {
        conn.sendPresenceUpdate('composing', m.chat);
        let response = await getAlternativeResponse(api);
        if (response && response !== 'error') {
          response = await translateToArabic(response);
          m.reply(response.trim());
          return;
        }
      } catch (err) {
        console.error(`Error with API ${api}:`, err.message);
      }
    }

    m.reply(`*[❗] خطأ غير مفهوم 🙂*`);
  }
};

handler.command = /^(gpt|ia|بوت)$/i;
export default handler;
