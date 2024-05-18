const linkRegex = /https:/i;
export async function before(m, {conn, isAdmin, isBotAdmin, text}) {
    const datas = global;
    const idioma = datas.db.data.users[m.sender].language;
    const _translate = JSON.parse(fs.readFileSync(`./language/ar.json`));
    const tradutor = _translate.plugins._antilink2;

    if (m.isBaileys && m.fromMe) {
        return true;
    }
    if (!m.isGroup) return false;
    const chat = global.db.data.chats[m.chat];
    const delet = m.key.participant;
    const bang = m.key.id;
    const bot = global.db.data.settings[this.user.jid] || {};
    const user = `@${m.sender.split`@`[0]}`;
    const isGroupLink = linkRegex.exec(m.text);
    if (chat.antiLink2 && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
            const linkThisGroup2 = `https://www.youtube.com/`;
            const linkThisGroup3 = `https://youtu.be/`;
            if (m.text.includes(linkThisGroup)) return true;
            if (m.text.includes(linkThisGroup2)) return true;
            if (m.text.includes(linkThisGroup3)) return true;
        }
        await this.sendMessage(m.chat, {text: tradutor.texto1, mentions: [m.sender]}, {quoted: m});
        if (isBotAdmin && bot.restrict) {
            await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
            const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
            if (responseb[0].status === '404') return;
        } else if (!bot.restrict) {
            return m.reply(tradutor.texto3);
        }
        return false;
    }
    return true;
}
