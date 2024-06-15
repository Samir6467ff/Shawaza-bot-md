import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `*✳️ قم بالرد علي فيديو لتحويله لصوت*`
    let media = await q.download?.()
    if (!media) throw '❎ فشل تحميل الوسائط'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw '❎ حدث خطأ أثناء التحويل'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3']
handler.tags = ['fun']
handler.command = /^(لصوت|لفويس|tomp3)$/i

export default handler
