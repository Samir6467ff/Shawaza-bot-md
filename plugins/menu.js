let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => {
const caption =`
『𝑧ₑ𝑧ₒ_𝑏ₒ𝑡』
*· · • • • • ✦ • • • • · ·*
*⌬ ❛╏ اهلا,* ${name}⁩
*⌬ ❛╏ الوقت:${wib}
*⌬ ❛╏ التاريخ:${date}
*⌬ ❛╏ المستخدمين:${rtotal}
*⌬ ❛╏ المنصه ⩾ 𝐻𝐸𝑅𝛩𝐾𝑈
*· · • • • • ✦ • • • • · ·*
`


//await conn.sendMessage( m.chat, {
        video: {
          url: 'https://telegra.ph/file/a2a1de6434ce22177b26b.mp4'
        },
        caption: caption,
        gifPlayback: true,
        gifAttribution: Math.floor( Math.random( ) * 2 ) + 1
      }, {
        quoted: m
      } );
}

handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['قايمه'] 
export default handler
