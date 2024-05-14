//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `*✳️ انت بالفعل مسجل*\n\n*هل تريد حذف تسجيلك*\n\n *📌 استخدم هذا الامر لحذف تسجيلك* \n*${usedPrefix}حذف-التسجيل* <الرقم التعريفي>`
  if (!Reg.test(text)) throw `*⚠️ استخدام غير صحيح*\n\n *✳️ الاستخدام الصحيح:* *${usedPrefix + command} الاسم.العمر*\n📌*مثال :* *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ The name cannot be empty'
  if (!age) throw '✳️ age cannot be empty'
  if (name.length >= 30) throw '*✳️ اي يسطا كل دا اسم قلله شويه*' 
  age = parseInt(age)
  if (age > 100) throw '*👴🏻 اي يا جدو عايز تلعب بالبوت*'
  if (age < 5) throw '*🚼  روح كمل رضاعه*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *التسجيل* 」─
▢ *الاسم:* *${name}*
▢ *العمر* : *${age} سنه*
▢ *الرقم التعرفي* :
${sn}
└──────────────

`.trim())
}
handler.help = ['reg'].map(v => v + ' <name.age>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar','تسجيل'] 

export default handler
