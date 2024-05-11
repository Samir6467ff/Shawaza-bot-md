import fetch from 'node-fetch';

let gitagptHandler = async (m, { text, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `الرجاء تقديم نص أو اقتباس رسالة للحصول على استجابة. يرجى مراعاة أن GitaGPT ما زال في مرحلة الاختبار، لذا قد يؤدي إلى إنشاء استجابات غير دقيقة في بعض الأحيان.`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);
    const prompt = encodeURIComponent(text);
    const endpoint = `https://ultimetron.guruapi.tech/gita?prompt=${prompt}`;

    const response = await fetch(endpoint);
    const data = await response.json();
    const result = data.completion; 

    m.reply(result);
  } catch (error) {
    console.error('Error:', error);
    throw `*خطأ*`;
  }
};
gitagptHandler.help = ['gitagpt']
gitagptHandler.tags = ['AI']
gitagptHandler.command = ['gitagpt','تحدث'];
gitagptHandler.diamond = false;

export default gitagptHandler;
