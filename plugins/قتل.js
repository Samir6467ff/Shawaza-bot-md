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

    m.reply(`*🧬 تـم الـإعـلان عـن جـريـمـة 🧬*
*⧉🔪 ╎الـقـاتـل : ${toM(a)}*
*⧉⚰️ ╎الـمـقـتـول : ${toM(b)}*
*تـم الـقـبـض عـلـى الـمُـجـرم ⛓️*
> الأمر للمزاح فقط`, { imageUrl });
}

handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['جريمة', 'قتل'];
handler.group = true;

export default handler;
