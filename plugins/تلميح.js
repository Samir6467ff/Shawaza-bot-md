let handler = async (m, { conn }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (!(id in conn.tebakbendera)) throw false
    let json = conn.tebakbendera[id][1]
    let ans = json.jawaban.trim()
    let clue = ans.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\n❗الرد على السؤال، وليس هذه الرسالة', conn.tebakbendera[id][0])
}
handler.command = /^لمح|تلميح$/i
handler.limit = true

export default handler
