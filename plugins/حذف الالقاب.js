let handler = async function (m, { conn, args }) {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let groupInfo = await conn.groupMetadata(m.chat);

  if (!groupInfo) {
    return conn.reply(m.chat, 'حدث خطأ في الحصول على معلومات المجموعة.', m);
  }

  let groupMembers = groupInfo.participants;
  let registeredUsers = Object.entries(global.db.data.users)
    .filter(([key, user]) => user.registered && typeof user.name === 'string' && user.name.match(/[\u0600-\u06FF]/))
    .map(([key, user]) => ({ jid: key, name: user.name }))
    .sort((a, b) => a.name.localeCompare(b.name, 'ar'));

  if (registeredUsers.length === 0) {
    return conn.reply(m.chat, '*لــم يــتــم تــســجــيــل أي لــقــب بــعــد*', m);
  }

  let deletedNamesList = '*╮──────────────────⟢ـ*\n*┆╻❮  الألــــقـــاب الـــمــحــذوفــة  ❯╹* ';
  let currentLetter = '';

  for (let user of registeredUsers) {
    let firstLetter = user.name.charAt(0);
    if (firstLetter !== currentLetter) {
      deletedNamesList += `\n`;
      currentLetter = firstLetter;
    }

    // احذف المستخدم من قاعدة البيانات
    delete global.db.data.users[user.jid];

    deletedNamesList += `*◍ ${user.name}*\n`;
  }

  let deletedCount = registeredUsers.length;
  let totalMembers = Object.keys(groupMembers).length;

  deletedNamesList += `\n*╮──────────────────⟢ـ*\n`;
  deletedNamesList += `عــدد الــمــحــذوفــيــن: *${deletedCount} مــن ${totalMembers}*\n`;
  deletedNamesList += '*╯──────────────────⟢ـ*';

  conn.reply(m.chat, deletedNamesList.trim(), m);
}

handler.help = ['حذف_الألقاب'];
handler.tags = ['حذف', 'أسماء', 'عربية'];
handler.command = ['حذف_الألقاب', 'حذف_الالقاب'];
handler.group = true;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;

export default handler;
