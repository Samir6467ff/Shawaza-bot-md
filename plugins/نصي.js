import { format } from 'util';
import { spawn } from 'child_process';

const fontPath = 'src/font/Zahraaa.ttf';
const inputPath = 'src/kertas/magernulis1.jpg';

let handler = async (m, { conn, args }) => {
    if (!global.support.convert && !global.support.magick && !global.support.gm) {
        handler.disabled = true; // تعطيل الأمر إذا لم يتم دعمه
        return;
    }

    const d = new Date();
    const tgl = d.toLocaleDateString('ar-EG');
    const hari = d.toLocaleDateString('ar-EG', { weekday: 'long' });
    const teks = args.join(' ');

    const bufs = [];
    const [_spawnprocess, ..._spawnargs] = [
        ...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []),
        'convert',
        inputPath,
        '-font', fontPath,
        '-fill', 'blue',
        '-size', '1024x784',
        '-pointsize', '20',
        '-interline-spacing', '1',
        '-annotate', '+806+78', `label:${hari}`,
        '-font', fontPath,
        '-fill', 'blue',
        '-size', '1024x784',
        '-pointsize', '18',
        '-interline-spacing', '1',
        '-annotate', '+806+102', `label:${tgl}`,
        '-font', fontPath,
        '-fill', 'blue',
        '-size', '1024x784',
        '-pointsize', '20',
        '-interline-spacing', '-7.5',
        '-annotate', '+344+142', `label:${teks}`,
        'jpg:-'
    ];

    const process = spawn(_spawnprocess, _spawnargs);

    process.on('error', e => m.reply(format(e)));
    process.stdout.on('data', chunk => bufs.push(chunk));
    process.on('close', () => {
        m.reply('*⏳ انتظر لحظة... ฅ^•ﻌ•^ฅ⏳*');
        conn.sendFile(m.chat, Buffer.concat(bufs), 'txt.jpg', '✅ أفضل مما تكتب أنت ✍🏻');
    });
};

handler.help = ['txt *<النص>*'];
handler.tags = ['fun'];
handler.command = ['اكتب', 'txt'];
handler.register = true;

export default handler;
