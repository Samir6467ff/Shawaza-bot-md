import fetch from 'node-fetch'

let handler = async (m, { conn, args, text }) => {
  if (!text) throw '*فين اللنك اللي عايز تختصره.*'

  let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()

  if (!shortUrl1) throw `*خطأ.*`

  let done =
    `*اختصار اللنكات*\n\n*اللينك الاصلي:*\n${text}\n*اللنك المختصر:*\n${shortUrl1}`.trim()

  m.reply(done)
}

handler.help = ['tinyurl', 'shorten'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|acortar|corto|اختصار)$/i
handler.fail = null

export default handler
