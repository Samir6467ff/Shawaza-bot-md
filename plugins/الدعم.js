import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
 const taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let res = (await axios.get(`https://telegra.ph/file/2f45911315b2da73f1579.png`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendFile(m.chat, haha, 'error.jpg', `
*◉══ • ❁『』WELCOME 《 ❁ • ═◉*
WELCOME ➳『 ${taguser} 』
*『 ️اليك قائمه بمعلومات المطور  』*

*『 ️واتساب 』*

*⊱≼ https://wa.me/+201508628077 ≽⊰⊹*

*『 ️منصاتي 』*

*⊱≼ https://tinyurl.com/259ho5p3 ≽⊰⊹*

*『 ️جروب واتساب 』*

*⊱≼ https://chat.whatsapp.com/JO7neq006uI3OgEtjNvtm0 ≽⊰⊹*
*『』𝒁𝒆𝒛𝒐 𝑩𝒐𝒕《*
*◉═══ • ❁ 『』BAY《 ❁ • ═══◉* `, m)
}
handler.command = handler.help = ['دعم','الدعم']
handler.tags = ['kaneki']
export default handler
