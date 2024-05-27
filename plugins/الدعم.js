import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

let handler = async (m, { command, conn, usedPrefix }) => {
    const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];

    // الحصول على __dirname في بيئة ES Module
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    // تحديد المسار المطلق للملف
    const filePath = path.resolve(__dirname, 'src/photo/صور.json');

    try {
        // التحقق مما إذا كان الملف موجودًا
        await fs.access(filePath);
        // قراءة الملف من المسار المحلي
        let data = await fs.readFile(filePath, 'utf-8');
        let res = JSON.parse(data);

        // اختيار صورة عشوائية من القائمة
        let imagePath = res[Math.floor(res.length * Math.random())];    
        let fullPath = path.resolve(__dirname, 'src/photo', imagePath);

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
    } catch (error) {
        console.error(`Error accessing file: ${error.message}`);
        // يمكنك إرسال رسالة خطأ للمستخدم إذا لزم الأمر
        conn.reply(m.chat, 'حدث خطأ أثناء الوصول إلى الملف. تأكد من أن الملف موجود في المسار الصحيح.', m);
    }
}

handler.command = handler.help = ['دعم', 'الدعم'];
handler.tags = ['kaneki'];
export default handler;
