import { promises as fs } from 'fs';
import path from 'path';

let handler = async (m, { command, conn, usedPrefix }) => {
    const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];

    // قراءة الملف من المسار المحلي
    let data = await fs.readFile(path.join(__dirname, 'src/photo/صور.json'), 'utf-8');
    let res = JSON.parse(data);
    // اختيار صورة عشوائية من القائمة
    let imagePath = res[Math.floor(res.length * Math.random())];    
    let fullPath = path.join(__dirname, 'src/photo', imagePath);

    // إرسال الملف مع الرسالة المعدلة
    conn.sendFile(m.chat, fullPath, 'image.jpg', `
*◉═══ • ❁ 『』WELCOME 《 ❁ • ═══◉*
WELCOME ➳『 ${taguser} 』
*『 ️اليك قائمه بمعلومات المطور  』*

*『 ️واتساب 』*

*⊱≼ https://wa.me/+201508628077 ≽⊰⊹*

*『 ️منصاتي 』*

*⊱≼ https://tinyurl.com/259ho5p3 ≽⊰⊹*

*『 ️جروب واتساب 』*

*⊱≼ https://chat.whatsapp.com/JO7neq006uI3OgEtjNvtm0 ≽⊰⊹*
*『』𝒁𝒆𝒛𝒐 𝑩𝒐𝒕《*
*◉═══ • ❁ BAY ❁ • ═══◉*
    `, m);
}

handler.command = handler.help = ['دعم', 'الدعم'];
handler.tags = ['kaneki'];
export default handler;
