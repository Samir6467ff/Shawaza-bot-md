const { Client, MessageMedia, Buttons } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const axios = require('axios');

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async msg => {
    if (msg.body.toLowerCase() === 'رونالدو') {
        await sendRonaldoImage(msg);
    }
});

async function sendRonaldoImage(msg) {
    try {
        const cristiano = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/CristianoRonaldo.json')).data;
        const ronaldo = cristiano[Math.floor(cristiano.length * Math.random())].result;

        const image = await axios.get(ronaldo, { responseType: 'arraybuffer' });
        const media = new MessageMedia('image/jpeg', image.data.toString('base64'), 'ronaldo.jpg');

        const buttons = new Buttons('اختر أحد الخيارات:', [
            { body: 'التالي', id: 'التالي' },
            { body: 'الدعم', id: 'الدعم' }
        ], 'العنوان', 'تذييل');

        await client.sendMessage(msg.from, media, { caption: 'اختر أحد الخيارات:' });
        await client.sendMessage(msg.from, buttons);
    } catch (error) {
        console.error(error);
    }
}

client.initialize();
