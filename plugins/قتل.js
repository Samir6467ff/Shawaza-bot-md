import fetch from 'node-fetch';

let toM = a => '@' + a.split('@')[0];

async function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id);
    let a = ps[Math.floor(Math.random() * ps.length)];
    let b;
    do {
        b = ps[Math.floor(Math.random() * ps.length)];
    } while (b === a);

    const imageUrl = 'https://telegra.ph/file/729ba9f78fe02e609bc70.jpg';
    const response = await fetch(imageUrl);
    const buffer = await response.buffer();

    const message = {
        text: `*🧬 تـم الـإعـلان عـن جـريـمـة 🧬*
*⧉🔪 ╎الـقـاتـل : ${toM(a)}*
*⧉⚰️ ╎الـمـقـتـول : ${toM(b)}*
*تـم الـقـبـض عـلـى الـمُـجـرم ⛓️*
> الأمر للمزاح فقط`
    };

await conn.sendMessage(m.chat, {image:{url:buffer}, caption: message.trim(), mentions: [...message.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')});

}

handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['جريمة', 'قتل'];
handler.group = true;

export default handler;
