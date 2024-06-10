import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';

const handler = async (_0x23d93f, { conn: _0x49f2f0, text: _0x3d67ea, usedPrefix: _0x5d96f8 }) => {
    const device = await getDevice(_0x23d93f['key']['id']);
    if (device !== 'desktop' && device !== 'web') {
        var media = await prepareWAMessageMedia({
            image: { url: 'https://telegra.ph/file/dbbab62e5b3d6082dd73f.jpg' }
        }, { upload: _0x49f2f0.waUploadToServer });

        const messageContent = {
            body: { text: `*⊱─═⪨༻𓆩〘 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕 〙𓆪༺⪩═─⊰*\n\n*يمكنك الان تقييم بوت زيزو عن طريق اختيار التقيم من وجهة نظرك من الازرار ف الاسفل*\n\n*⊱─═⪨༻𓆩〘 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕 〙𓆪༺⪩═─⊰*` },
            footer: { text: '𝒁𝒆𝒛𝒐 𝑩𝒐𝒕' },
            header: {
                title: '',
                subtitle: '*كــن صـــادق فــي تــقــيــمـك يا حب ❤️🥹*\n\n\n\n.',
                hasMediaAttachment: !![],
                imageMessage: media.imageMessage
            },
            nativeFlowMessage: {
                buttons: [
                    { name: 'quick_reply', buttonParamsJson: '{"display_text":"⭐","id":".قيم١"}' },
                    { name: 'quick_reply', buttonParamsJson: '{"display_text":"⭐⭐","id":".قيم ⭐⭐"}' },
                    { name: 'quick_reply', buttonParamsJson: '{"display_text":"⭐⭐⭐","id":".قيم ⭐⭐⭐"}' },
                    { name: 'quick_reply', buttonParamsJson: '{"display_text":"⭐⭐⭐⭐","id":".قيم ⭐⭐⭐⭐"}' },
                    { name: 'quick_reply', buttonParamsJson: '{"display_text":"⭐⭐⭐⭐⭐","id":".قيم ⭐⭐⭐⭐⭐"}' }
                ],
                messageParamsJson: ''
            }
        };

        let message = generateWAMessageFromContent(_0x23d93f['chat'], { viewOnceMessage: { message: { interactiveMessage: messageContent } } }, { userJid: _0x49f2f0.user.jid, quoted: _0x23d93f });
        _0x49f2f0.relayMessage(_0x23d93f.chat, message.message, { messageId: message.key.id });
    } else {
        _0x49f2f0.sendFile(_0x23d93f['chat'], 'zezo•Error.jpg', _0x23d93f);
    }
};

handler.command = /تقيم|تقييم/i;
handler.customPrefix = new RegExp();
export default handler;
