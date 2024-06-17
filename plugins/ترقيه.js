let handler = async (m, { conn, usedPrefix, text }) => {
  let number;

  if (isNaN(text) && !text.match(/@/g)) {
    // Do nothing, number will be undefined
  } else if (isNaN(text)) {
    number = text.split`@`[1];
  } else if (!isNaN(text)) {
    number = text;
  }

  if (!text && !m.quoted) {
    return conn.reply(m.chat, `*[❗] الاستخدام المناسب*\n\n*┯┷*\n*┠≽ ${usedPrefix}ترقيه مشرف @منشن*\n*┠≽ ${usedPrefix}ترقيه مشرف -> الرد على رسالة*\n*┷┯*`, m);
  }

  if (number && (number.length > 13 || (number.length < 11 && number.length > 0))) {
    return conn.reply(m.chat, `*[ ⚠️ ] الرقم الذي تم إدخاله غير صحيح، الرجاء إدخال الرقم الصحيح*`, m);
  }

  try {
    let user;
    if (text) {
      user = number + '@s.whatsapp.net';
    } else if (m.quoted && m.quoted.sender) {
      user = m.quoted.sender;
    } else if (m.mentionedJid) {
      user = number + '@s.whatsapp.net';
    }

    await conn.groupParticipantsUpdate(m.chat, [user], 'promote');
    
    let fromUser = m.sender;
    conn.reply(m.chat, `*تم ترقيتك بواسطة @${fromUser.split('@')[0]}*`, m, { mentions: [user, fromUser] });
  } catch (e) {
    console.error(e);
  }
};

handler.help = ['*201063720595xxx*', '*@اسم المستخدم*', '*محادثة المستجيب*'].map(v => 'promote ' + v);
handler.tags = ['group'];
handler.command = /^(ترقيه|رفع)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
handler.fail = null;

export default handler;
