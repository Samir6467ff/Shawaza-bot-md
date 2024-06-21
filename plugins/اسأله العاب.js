import fetch from 'node-fetch'

let timeout = 80000
let poin = 1000
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
  let id = m.chconn.tebakbendera = conn.tebakbendera ? conn.tebakbenderaat
  if (id in conn.tebakbendera) {
    conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.tebakbendera[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  // if (!json.status) throw json
  let caption = `
⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
*❐↞┇الـوقـت⏳↞ *${(timeout / 1000).toFixed(2)} ثانية*

*❐↞┇الـجـائـزة💰↞ ${poin} نقاط*

『𝒁𝒆𝒛𝒐 𝑩𝒐𝒕』
⟣┈┈┈┈⟢〘❄〙⟣┈┈┈┈⟢
> اكتب تلميح للحصول علي تلميح للاجابه
    `.trim()
  conn.tebakbendera[id] = [
    await conn.sendFile(m.chat, json.img, '', caption, m),
    json, poin,
    setTimeout(() => {
      if (conn.tebakbendera[id]) conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n❐↞┇الاجـابـة✅↞ *${json.jawaban}*`, conn.tebakbendera[id][0])
      delete conn.tebakbendera[id]
    }, timeout)
  ]
}
handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = /^العاب/i
handler.limit = true
handler.group = true

export default handler
