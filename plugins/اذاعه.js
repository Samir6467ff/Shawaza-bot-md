//import _translate from "./_translate.js"
//const tradutor = _translate.plugins.owner_getmsg
// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m, {conn, command, usedPrefix, text}) => {
  const which = command.replace(/ver/i, '');
  if (!text) throw `ادخل نص او رساله *${usedPrefix}list${which}*`;
  const msgs = global.db.data.msgs;
  if (!text in msgs) throw `*[❗𝐈𝐍𝐅𝐎❗] '${text}' نشر`;
  const _m = await conn.serializeM(msgs[text]);
  await _m.copyNForward(m.chat, true);
};
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map((v) => 'get' + v + ' <text>');
handler.tags = ['database'];
handler.command = /^ver(vn|msg|video|audio|img|sticker|اذاعه)$/;
handler.rowner = true;
export default handler;
