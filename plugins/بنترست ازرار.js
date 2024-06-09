import {
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    getDevice
} from '@whiskeysockets/baileys';
import {
    pinterest
} from '@bochilteam/scraper';

const handler = async (message, { conn, text, usedPrefix }) => {
    const forbiddenWords = [
        'caca', 'horny', 'اباحي', 'سكس', 'نيك', 'porn', 'pene', 'culo', 'nude', 'semen',
        'chocha', 'vagina', 'zoofilia', 'sexo', 'hentai', 'pene', 'fuck', 'anal', 'porno',
        'xxx', 'rule34', 'gore', 'pedo', 'violacion', 'furro', 'فور', 'pedo', 'xvideos', 'xnxx',
        'futanari', 'bdsm', 'panocha', 'ecchi', 'puto', 'polla', 'chocha', 'pornhub', 'sexmex',
        'ass', 'chocha', 'سكس', 'misha cross', 'lana rhoades', 'chocha', 'mia khalifa', 'teta',
        'horny', 'porn', 'blowjob', 'chocha', 'furra', 'puto', 'chocha', 'ecchi', 'putita', 'zoofilia',
        'chocha', 'chocha', 'chocha', 'chocha', 'chocha', 'chocha', 'chocha', 'chocha', 'chocha'
    ];

    if (forbiddenWords.some(word => message.text.toLowerCase().includes(word))) {
        return conn.reply(message.chat, ' *استغفر ربك احسن* 😒', message);
    }

    if (!text) throw 'استخدم أمر بنترست عن طريق 👇\n*.بنترست Killua*';

    const device = await getDevice(message.key.id);

    if (device !== 'desktop' && device !== 'web') {
        const results = await pinterest(text);
        var media = await prepareWAMessageMedia({ image: { url: results.getRandom() } }, { upload: conn.waUploadToServer });
        const messageContent = {
            body: { text: ('- الـصـوره الـمـراد الــبحث عـنـها : ' + text).trim() },
            footer: { text:'𝒁𝒆𝒛𝒐 𝑩𝒐𝒕'.trim() },
            header: {
                title: '* *الـتـحـميل مـن مـوقـع بـنـترست 📍*',
                subtitle: '',
                hasMediaAttachment: true,
                imageMessage: media.imageMessage
            },
            nativeFlowMessage: {
                buttons: [{
                    name: 'quick_reply',
                    buttonParamsJson: JSON.stringify({
                        display_text: 'بحث عن الصورة في Pinterest',
                        id: '.pin0 ' + text
                    })
                }],
                messageParamsJson: ''
            }
        };

        let finalMessage = generateWAMessageFromContent(message.chat, {
            viewOnceMessage: {
                message: { interactiveMessage: messageContent }
            }
        }, {
            userJid: conn.user.jid,
            quoted: message
        });

        conn.relayMessage(message.chat, finalMessage.message, { messageId: finalMessage.key.id });
    } else {
        conn.reply(message.chat, 'جيب صوره تاني', message);
    }
};

handler.help = ['pin'];
handler.tags = ['search'];
handler.command = /^(pin0|بنترست)$/i;

export default handler;
