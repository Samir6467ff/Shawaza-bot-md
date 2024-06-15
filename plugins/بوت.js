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

async function getAlternativeResponse(query) {
  const apiUrl = `https://api.example.com/path2/path3/path4/path5/ef66b9/apikey/googlegenai?query=${encodeURIComponent(query)}`;
  const response = await fetch(apiUrl, { timeout: 5000 });
  const result = await response.json();
  return result.result;
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
    try {
      conn.sendPresenceUpdate('composing', m.chat);
      let alternativeResponse = await getAlternativeResponse(text);
      if (alternativeResponse && alternativeResponse !== 'error') {
        alternativeResponse = await translateToArabic(alternativeResponse);
        m.reply(alternativeResponse.trim());
      } else {
        throw new Error('Alternative API returned an error');
      }
    } catch (err) {
      console.error('Error with alternative API:', err.message);
      m.reply(`*[❗] خطأ غير مفهوم 🙂*`);
    }
  }
};

handler.command = /^(gpt|ia|بوت|دحيح)$/i;
export default handler;
