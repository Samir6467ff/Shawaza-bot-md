import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';

let apiurl = 'https://api.example.com';
let apiurl4 = 'path4';
let apiurl6 = 'ef66b9';
let apiurl7 = 'apikey';
let apiurl2 = 'path2';
let apiurl3 = 'path3';
let apiurl5 = 'path5';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `*أدخل نصًا أو قم بالرد على رسالة بنص لاستخدام Gemini Google*\n\n*مثال:*\n*${usedPrefix + command} اكتب رمز JS*\n*ملاحظة الأمر هذا يمكنه قرأة الصور أيضا*`;
  }

  try {
    const encodedText = encodeURIComponent(text);
    let downloadedFile = null;
    let fileUrl = '';
    let quotedMsg = m.quoted ? m.quoted : m;

    if ((quotedMsg.msg || quotedMsg).mimetype || quotedMsg.mediaType || '') {
      let mimeType = (quotedMsg.msg || quotedMsg).mimetype || quotedMsg.mediaType || '';
      if (mimeType.startsWith('video/')) {
        return m.reply('❌ يرجى الرد على صورة، لا فيديو!');
      }
      downloadedFile = await quotedMsg.download();
      let isImage = /image\/(png|jpe?g|gif)/.test(mimeType);
      fileUrl = await (isImage ? uploadImage : uploadImage)(downloadedFile);
    }

    const apiUrl = fileUrl 
      ? `${apiurl}${apiurl2}${apiurl3}${apiurl4}${apiurl5}${apiurl6}${apiurl7}&url=${fileUrl}&query=${encodedText}` 
      : `${apiurl}${apiurl2}${apiurl3}${apiurl4}${apiurl5}${apiurl6}${apiurl7}/googlegenai?query=${encodedText}`;

    conn.sendPresenceUpdate('composing', m.chat);

    const response = await fetch(apiUrl);
    const jsonResponse = await response.json();
    const result = jsonResponse.result;

    m.reply(result);
  } catch (error) {
    console.error('Error:', error);
    throw '*حدث خطأ فيـAPI*';
  }
};

// تعريف الأوامر المدعومة
handler.help = ['AI'];
handler.tags = ['AI'];
handler.command = ['ai', 'googleai', 'جيميناي', 'gemini', 'دحيح'];  // إضافة الأمر 'دحيح'

export default handler;
