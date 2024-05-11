import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://raw.githubusercontent.com/KazukoGans/database/main/anime/ppcouple.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let man = await(await fetch(cita.male)).buffer()
  await conn.sendFile(m.chat, man, '', '🤵🏻ولد\n𝐵𝑌:𝑧ₑ𝑧ₒ_𝑏ₒ𝑡', m)
  let girl = await(await fetch(cita.female)).buffer()
  await conn.sendFile(m.chat, girl, '', '👰🏻‍♀️بنت\n𝐵𝑌:𝑧ₑ𝑧ₒ_𝑏ₒ𝑡', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['t2m']
handler.command = ['طقم','تطقيم'] 


export default handler
