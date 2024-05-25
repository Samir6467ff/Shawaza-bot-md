import { format } from 'util';
import { spawn } from 'child_process';

const fontPath = 'src/font/Zahraaa.ttf';
const inputPath = 'src/kertas/magernulis1.jpg';

let handler = async (m, { conn, args }) => {
    if (!global.support.convert && !global.support.magick && !global.support.gm) {
        handler.disabled = true; // Disable if not supported
        return;
    }

    const d = new Date();
    const tgl = d.toLocaleDateString('id-ID');
    const hari = d.toLocaleDateString('id-ID', { weekday: 'long' });
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
        '-annotate', '+806+78', hari,
        '-font', fontPath,
        '-fill', 'blue',
        '-size', '1024x784',
        '-pointsize', '18',
        '-interline-spacing', '1',
        '-annotate', '+806+102', tgl,
        '-font', fontPath,
        '-fill', 'blue',
        '-size', '1024x784',
        '-pointsize', '20',
        '-interline-spacing', '-7.5',
        '-annotate', '+344+142', teks,
        'jpg:-'
    ];

    const process = spawn(_spawnprocess, _spawnargs);

    process.on('error', e => m.reply(format(e)));
    process.stdout.on('data', chunk => bufs.push(chunk));
    process.on('close', () => {
        m.reply('*⏳Aɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ... ฅ^•ﻌ•^ฅ⏳*');
        conn.sendFile(m.chat, Buffer.concat(bufs), 'txt.jpg', '✅ Es mejor de lo que escribes tú ✍🏻');
    });
};

handler.help = ['txt *<texto>*'];
handler.tags = ['fun'];
handler.command = ['escribe', 'txt'];
handler.register = true;

export default handler;

// BY MFARELS
// https://GitHub.com/MFarelS/
