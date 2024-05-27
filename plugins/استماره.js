const taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let handler = async (m, { command, text }) => m.reply(`
*【🐦‍🔥】استمارة الوورك【🐦‍🔥】*  

 *~『𝑪.𝑵.𝑹⊰🐦‍🔥⊱𝐏𝐇𝐎𝐄𝐍𝐈𝐗』~*

*『🥹』${m.pushName}《  《《 مــــــــنــــــــــشــــــــــنـــــــــك*

*✿ اللقب  / ⟦⟧*➪

*✿ ولد  ولا بنت /  ⟦⟧*➪

*✿ من طرف   /  ⟦⟧*➪

*✿ الأنمي  /   ⟦⟧*➪

*_『𝑪.𝑵.𝑹⊰🐦‍🔥⊱𝐏𝐇𝐎𝐄𝐍𝐈𝐗』_*


*_『🌚』تحت رعاية 𝒁𝒆𝒛𝒐࿐𝑩𝒐𝒕᭄《_*
`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(الاستماره|1|استماره|استمارة)$/i

export default handler
