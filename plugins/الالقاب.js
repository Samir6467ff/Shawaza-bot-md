/*let handler = async function (m, { conn, args }) {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;

  let groupInfo = await conn.groupMetadata(m.chat);

  if (!groupInfo) {
    return conn.reply(m.chat, 'حدث خطأ في الحصول على معلومات المجموعة.', m);
  }

  let groupMembers = groupInfo.participants;
  let registeredUsers = Object.values(global.db.data.users)
    .filter(user => user.registered && typeof user.name === 'string' && user.name.match(/[\u0600-\u06FF]/))
    .map(user => user.name)
    .sort((a, b) => a.localeCompare(b, 'ar'));

  if (registeredUsers.length === 0) {
    return conn.reply(m.chat, '*لــم يــتــم تــســجــيــل أي لــقــب بــعــد*', m);
  }

  let namesList = '*╮──────────────────⟢ـ*\n*┆╻❮  الألــــقـــاب الـــمـــأخـــوذة  ❯╹* ';
  let currentLetter = '';

  for (let name of registeredUsers) {
    let firstLetter = name.charAt(0);
    if (firstLetter !== currentLetter) {
      namesList += `\n`;
      currentLetter = firstLetter;
    }

    // ابحث عن معرف العضو الذي يحمل اللقب
    let groupMember = Object.values(groupMembers).find(member => member.name === name);
    if (groupMember && groupMember.jid) {
      // إذا وجدت المستخدم وكانت لديه معرف، قم بإضافة منشن له في القائمة
      namesList += `*◍ @${groupMember.jid.split('@')[0]} - ${name}*\n`; // قمت بإزالة النجمة الزائدة وأضفت منشن بجانب اللقب
    } else {
      // إذا لم تجد المستخدم، استمر في عرض الاسم فقط
      namesList += `*◍ ${name}*\n`;
    }
  }

  let registeredCount = registeredUsers.length;
  let totalMembers = Object.keys(groupMembers).length;

  namesList += `\n*╮──────────────────⟢ـ*\n`;
  namesList += (registeredCount === totalMembers) ? '◍ تــم تــســجــيــل جــمــيــع الأعــضــاء\n' : `عــدد الــمــســجــلــيــن: *${registeredCount} مــن ${totalMembers}*\n`;
  namesList += '*╯──────────────────⟢ـ*'; // Added line

  conn.reply(m.chat, namesList.trim(), m);
}

handler.help = ['قائمة'];
handler.tags = ['قائمة', 'أسماء', 'عربية'];
handler.command = ['القاب', 'الألقاب', 'الالقاب'];
handler.group = true;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;

export default handler;*/
