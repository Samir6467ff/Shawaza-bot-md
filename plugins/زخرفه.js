import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  // Split the text into words
  let words = text.split(' ');

  // The first word should be the key, the rest is the text to stylize
  let key = words[0];
  let textToStyle = words.slice(1).join(' ');

  // If no key and text provided, show all styles of a default text
  if (words.length === 0 || !key || !textToStyle) {
    let defaultText = '𝑧ₑ𝑧ₒ_𝑏ₒ𝑡';
    let styledTexts = await Promise.all([...Array(34).keys()].map(i => stylizeText(defaultText, i + 1)));
    conn.reply(m.chat, styledTexts.join`\n📍`, m);
    return;
  }

  // Check if the key is a number between 1 and 34
  if (!Number.isInteger(+key) || +key < 1 || +key > 34) {
    throw 'مفتاح غير صالح. يرجى توفير رقم بين 1 و 34.';
  }

  // Get the styled text
  let styledText = await stylizeText(textToStyle, key);

  conn.reply(m.chat, styledText, m);
}

handler.help = ['style'].map(v => v + ' <key> <text>');
handler.tags = ['tools'];
handler.command = /^(زخرفه|زغرفه)$/i;
handler.exp = 0;

export default handler;

async function stylizeText(text, key) {
  let res = await fetch(`https://inrl-web-fkns.onrender.com/api/fancy?text=${encodeURIComponent(text)}&key=${key}`);
  let data = await res.json();

  // Use 'result' field for the styled text.
  return `*Key ${key}*\n${data.result}`;
}
