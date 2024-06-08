import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {
  let res = (
    await axios.get(`https://raw.githubusercontent.com/shadow0192/ShadowBot-Media/main/Shadow%20Anime/cr7.json`)
  ).data
  let url = await res[Math.floor(res.length * Math.random())]

conn.sendButton(m.chat, "*Siiiuuuuuu*", author, url, [[' الــتــالــي 🍷', `${usedPrefix + command}`], [' الــدعــــم 🍷', `${usedPrefix}الدعم`]], m)}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(كرستيانو|رونالدو|الدون|كريس)$/i
export default handler
