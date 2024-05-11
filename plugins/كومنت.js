let handler = async (m, { conn, text }) => {
  if (!text) throw '*فين النص يا حب*'
  conn.sendFile(
    m.chat,
    global.API('https://some-random-api.com', '/canvas/misc/youtube-comment', {
      avatar: await conn
        .profilePictureUrl(m.sender, 'image')
        .catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
      comment: text,
      username: conn.getName(m.sender),
    }),
    'error.png',
    '*شكرا لتعليقك*,
    await conn.sendMessage(m.chat, { react: { text: '📍', key: m.key } })

  )
}
handler.help = ['ytcomment <comment>']
handler.tags = ['maker']
handler.command = /^(ytcomment|كومنت)$/i
export default handler
