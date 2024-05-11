import { pinterest } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    throw `*✳️ اكتب اسم الصوره اللي انت عايزها*\n\n*📌 مثال  :* ${usedPrefix + command} *ميسي*`
  const json = await pinterest(text)
  conn.sendFile(
    m.chat,
    json.getRandom(),
    'pinterest.jpg',
    `
*▢  Pinterest:*  ${text}
`.trim(),
    m
  )
}
handler.help = ['pinterest']
handler.tags = ['img']
handler.command = ['pinterest','بين','بينترست','بينت']

export default handler
