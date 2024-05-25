import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch' 
import axios from 'axios'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw '⚠️️ *_يرجى الرد على صورة._*'
  if (!/image/.test(mime)) throw `⚠️️ *الصيغة غير مدعومة*`
  if (!text) throw `⚠️️ *_الرجاء إدخال النص الذي تريد وضعه على الصورة._*`
let img = await q.download()
let url = await uploadImage(img)
let res = await conn.getFile(`https://malesin.xyz/xnxxcard?title=${text}&image=${url}`)
conn.sendFile(m.chat, res.data, 'file', `*XD*`, m)
  }
handler.help = ['لوجوإكسإنإكس *<صورة/نص>*']
handler.tags = ['لوجو']
handler.command = ['لوجوإكسإنإكس','اكسو'] 

export default handler
