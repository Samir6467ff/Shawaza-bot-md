const handler = async (m, {conn}) => {
  await conn.fetchBlocklist().then(async (data) => {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./language/ar.json`))
    const tradutor = _translate.plugins.owner_blocklist

    let txt = `${tradutor.texto1} ${data.length}\n\n┌─⊷\n`;
    for (const i of data) {
      txt += `▢ @${i.split('@')[0]}\n`;
    }
    txt += '└───────────';
    return conn.reply(m.chat, txt, m, {mentions: await conn.parseMention(txt)});
  }).catch((err) => {
    console.log(err);
    throw tradutor.texto2;
  });
};
handler.help = ['blocklist'];
handler.tags = ['main'];
handler.command = ['blocklist', 'listblock','البلوكات'];
handler.rowner = true;
export default handler;
