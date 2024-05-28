import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
//let res = (await axios.get(`https://raw.githubusercontent.com/socona12/TheMystic-Bot-MD/master/src/JSON/anime-Venom.json`)).data  
//let haha = await res[Math.floor(res.length * Math.random())]  
const taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
conn.sendFile(m.chat,imagen4,`
*◉═══ • ❁ 『』WELCOME 《 ❁ • ═══◉*
WELCOME ➳『 ${taguser} 』
*『 ️اليك قائمه بمعلومات المطور  』*

*『☯️』ī وتسابي ī《*

*⊱≼ https://wa.me/+201508628077 ≽⊰⊹*

*『🥱』معلوماتي《*

*⊱≼ https://tinyurl.com/259ho5p3 ≽⊰⊹*

*『👀』ī جروب الوتساب ī《*

*⊱≼ https://chat.whatsapp.com/JO7neq006uI3OgEtjNvtm0 ≽⊰⊹*
*『』𝒁𝒆𝒛𝒐 𝑩𝒐𝒕《*
*◉═══ • ❁ BAY ❁ • ═══◉* 
 `, m)
}
handler.command = handler.help = ['معلومات','الدعم']
handler.tags = ['kaneki']
export default handler
