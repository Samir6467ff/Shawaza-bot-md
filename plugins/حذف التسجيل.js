//import db from '../lib/database.js'

import { createHash } from 'crypto'
let handler = async function (m, { conn, args, usedPrefix}) {
  if (!args[0]) throw `✳️ *فين الرقم التعريفي*\n*اذا نسيت الرقم التعريفي الخاص بك يمكنك استخدام*\n\n*${usedPrefix}تعريفي*`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '⚠️ *رقم تعريفي خاطئ!*'
  user.registered = false
  m.reply(`*✅ انت الان غير مسجل*`)
}
handler.help = ['unreg <Num Serie>'] 
handler.tags = ['rg']

handler.command = ['unreg','حذف-التسجيل'] 
handler.register = true

export default handler
