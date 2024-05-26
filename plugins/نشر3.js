let handler = async (m, { conn, text, participants, isAdmin, isOwner, usedPrefix, command}) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
    let fproducto = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "17608914335@s.whatsapp.net" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": imagen4 }, "title": `🐢 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕 🐢`, "description": "𝒁𝒆𝒛𝒐 𝑩𝒐𝒕-MD", "currencyCode": "USD", "priceAmount1000": "1000000000", "retailerId": "Ghost", "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
    if (!m.quoted) throw `الرجاء الرد على رسالة بالأمر *${usedPrefix + command}* لإرسال الإعلان.`
    for (let id of groups) {
    await conn.sendMessage(id, { forward: m.quoted.fakeObj, mentions: (await conn.groupMetadata(`${id}`)).participants.map(v => v.id) }, { quoted: fproducto })
    }
    conn.reply(m.chat, `✅ *_تم إرسال الإعلان إلى -${groups.length}- مجموعة!_*`, m)
}

handler.help = ['انشرها']
handler.tags = ['owner']
handler.command = /^(انشرها)$/i

handler.owner = true

export default handler
