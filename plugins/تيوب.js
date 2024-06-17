import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'
import yts from 'yt-search';

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);

    if (!text) throw `*تقدر تحمل الفيدوهات او الاصوات من الامر دا*
    *مثال*
    *يوتيوب المبدأ مروان بابلو.*
    < ملحوظه انا غير مسؤول عن ما تشاهده`;

    if (device !== 'desktop' || device !== 'web') {      
        const results = await yts(text);
        const videos = results.videos.slice(0, 20);
        const randomIndex = Math.floor(Math.random() * videos.length);
        const randomVideo = videos[randomIndex];

        var messa = await prepareWAMessageMedia({ image: {url: randomVideo.thumbnail}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `عــدد الـنـتـايــج : *${results.videos.length}*\nالـعـنـوان : *${randomVideo.title}*\nإســم الـحـســاب : *${randomVideo.author.name}*\nعــدد الـمـشــاهـدات : *${randomVideo.views}*\nالـرابــط : *『 ${randomVideo.url}』*\nرابــط‌ الـصــوره : *『 ${randomVideo.thumbnail}』*\n\nانقر علي الزر تحت لتحميل الفيديو او الصوت.`.trim() },
            footer: { text: `𝒁𝒆𝒛𝒐 𝑩𝒐𝒕`.trim() },  
            header: {
                title: `*بـحــث فــي الـيـوتـيــوب*`,
                hasMediaAttachment: true,
                imageMessage: messa.imageMessage,
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            title: 'نـتـائــج الـبـحــث',
                            sections: videos.map((video) => ({
                                title: video.title,
                                rows: [
                                    {
                                        header: video.title,
                                        title: video.author.name,
               
description: '🎶╎الـــــصـــــوت',
                                        id: `.صوتي ${video.url}`
                                    },
                                    {
                                        header: video.title,
                                        title: video.author.name,
                                        description: '📥╎الـــــفـــــيـــــديــو',
                                        id: `.فيديو ${video.url}`
                                    }, 
                                      {
                                        header: video.title,
                                        title: video.author.name,
                                        description: '📥╎الـــــفــــيــــديـو مــــــلــــــف',
                                        id: `.يوتيوب ${video.url}`
                                      }
                                ]
                            }))
                        })
                    }
                    ] , 
                messageParamsJson: ''
            }
        };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id});

    } else {
        const results = await yts(text);
        const tes = results.all;
        const teks = results.all.map((v) => {
            switch (v.type) {
                case 'video': return `
                ° *_${v.title}_*
                ↳ 🫐 *_${v.url}_*
                ↳ 🕒 *_${v.timestamp}_*
                ↳ 📥 *_${v.ago}_*
                ↳ 👁 *_${v.views}_*`;
            }
        }).filter((v) => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
        conn.sendFile(m.chat, tes[0].thumbnail, 'error.jpg', teks.trim(), m);      
    }    
};
handler.help = ['ytsearch <نص>'];
handler.tags = ['search'];
handler.command = /^(ytsearch|yts|searchyt|buscaryt|videosearch|audiosearch|تيوب|بحث|اغنيه|فيد)$/i;
export default handler;
