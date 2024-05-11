import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await from('./src/game/ppcouple.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowo = await(await fetch(cita.male)).buffer()
  await conn.sendFile(m.chat, cowo, '', '🤵🏻ولد\n𝐵𝑌:𝑧ₑ𝑧ₒ_𝑏ₒ𝑡', m)
  let cewe = await(await fetch(cita.female)).buffer()
  await conn.sendFile(m.chat, cewe, '', '👰🏻‍♀️بنت\n𝐵𝑌:𝑧ₑ𝑧ₒ_𝑏ₒ𝑡', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['t2m']
handler.command = ['طقم','تطقيم'] 


export default handler
