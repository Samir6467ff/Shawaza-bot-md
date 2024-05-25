import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw '⚠️ *_الرجاء إدخال نص._*'
  m.reply(global.wait)
  let res = `https://ziy.herokuapp.com/api/maker/kaneki?nama=${response[0]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'kaneki.jpg', `*رائع... ฅ^•ﻌ•^ฅ⚘*`, m, false)
}
handler.help = ['لوغوكانيكي'].map(v => v + ' *<نص>*')
handler.tags = ['لوغو']
handler.command = /^(لوغوكانيكي|كانكي)$/i

handler.limit = true

export default handler
