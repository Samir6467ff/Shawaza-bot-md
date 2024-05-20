//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('✅ تم تمكين رسالة الترحيب')
  } else
    throw `✳️ ادخل رسالة الترحيب\n\n@user (mention)\n@group (اسم الجروب)\n@desc (الوصف)`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome','الترحيب','تغيرالترحيب']
handler.admin = true
handler.owner = false

export default handler
