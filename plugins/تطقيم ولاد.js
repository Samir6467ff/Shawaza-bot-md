import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://github.com/zyad5yasser/zezo-bot-md/blob/master/src/game/%D8%B7%D9%82%D9%852.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]

  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '*ولد*🧑\n𝐵𝑌:𝑧ₑ𝑧ₒ⚡𝑏ₒ𝑡', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '*ولد*🧑🏻\n𝐵𝑌:𝑧ₑ𝑧ₒ⚡𝑏ₒ𝑡', m)
}
handler.help = ['Miku bot']
handler.tags = ['Miku bot']
handler.command = /^طقم2|طقم-اولاد|تطقيم_ولاد$/i
handler.limit = true

export default handler
