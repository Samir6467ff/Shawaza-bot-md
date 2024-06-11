let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw '✳️ *منشن شخص ما*\n\n📌 مثال : .بريم @الشخص'
    if (global.owner.includes(who.split('@')[0])) throw 'لقد أصبح هذا الشخص هو المالك!'
    global.owner.push([who.split('@')[0], m.name, true])
    const caption = `
    *✅ بــريـميام*

*@${who.split`@`[0]} الان لقد اصبحت مستخدم بريميام !!*

*⌬ ❛╏ المنشن:* @${who.split`@`[0]}
`
    await conn.reply(m.chat, caption, m, {
        mentions: conn.parseMention(caption)
    });
}
handler.help = ['addowner']
handler.tags = ['owner']
handler.command = /^(addowner|خد|بريم)$/i
handler.owner = true

export default handler
