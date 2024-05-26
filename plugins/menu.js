let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => {
const caption =`
*➻𒍜➻Đ『➳ᴹᴿ᭄𝒁𝒆𝒛𝒐➳ᴹᴿ᭄』*
*⌬ ❛╏ بان*
*⌬ ❛╏ بانفك*
*⌬ ❛╏ بريم*
*⌬ ❛╏ حذف_بريم*
*⌬ ❛╏ حظر*
*⌬ ❛╏ فك_الحظر*
*⌬ ❛╏ رستر*
*⌬ ❛╏ ضيف_اكسبي*
*⌬ ❛╏ ادخل*
*⌬ ❛╏ اخرج*
*⌬ ❛╏ بانشات*
*⌬ ❛╏ بانشات_فك*
*⌬ ❛╏ بلوك*
*⌬ ❛╏ فك_بلوك*
 *➻𒍜➻Đ『➳ᴹᴿ᭄𝒁𝒆𝒛𝒐➳ᴹᴿ᭄』*`

await conn.sendMessage( m.chat, {
        image: {
          url: 'https://telegra.ph/file/2734b5a64dff01470b255.jpg'
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
handler.command = ['قائمتي'] 
handler.rowner = true

export default handler
