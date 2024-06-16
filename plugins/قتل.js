const { Client, MessageMedia } = require('whatsapp-web.js');
const fetch = require('node-fetch');

const client = new Client();

let toM = a => '@' + a.split('@')[0];

client.on('message', async message => {
    if (message.body.startsWith('!جريمة')) {
        let chat = await message.getChat();
        if (!chat.isGroup) {
            return;
        }
        
        let ps = chat.participants.map(v => v.id._serialized);
        let a = ps[Math.floor(Math.random() * ps.length)];
        let b;
        do {
            b = ps[Math.floor(Math.random() * ps.length)];
        } while (b === a);

        const imageUrl = 'https://telegra.ph/file/729ba9f78fe02e609bc70.jpg';
        const media = await MessageMedia.fromUrl(imageUrl);

        const replyText = `*🧬 تـم الـإعـلان عـن جـريـمـة 🧬*
*⧉🔪 ╎الـقـاتـل : ${toM(a)}*
*⧉⚰️ ╎الـمـقـتـول : ${toM(b)}*
*تـم الـقـبـض عـلـى الـمُـجـرم ⛓️*
> الأمر للمزاح فقط`;

        chat.sendMessage(replyText, { media });
    }
});

client.initialize();
