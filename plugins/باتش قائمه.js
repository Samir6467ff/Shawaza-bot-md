import fs from 'fs';
import path from 'path';

let listFiles = async () => {
    let directoryPath = path.join('plugins');

    try {
        // قائمة الملفات في الدليل
        let files = await fs.promises.readdir(directoryPath);

        // إذا لم يكن هناك ملفات في الدليل
        if (files.length === 0) {
            throw new Error('لا توجد ملفات في الدليل.');
        }

        return files;
    } catch (err) {
        throw new Error(`فشل في استرداد قائمة الملفات: ${err.message}`);
    }
};

let handler = async (m, { isROwner }) => {
    await m.reply(global.wait);
    if (!isROwner) return;

    try {
        let files = await listFiles();
        
        // إرسال قائمة أسماء الملفات كرسالة
        let fileListMessage = `قائمة الملفات في الدليل:\n\n`;
        fileListMessage += files.join('\n');

        m.reply(fileListMessage);
    } catch (e) {
        console.error(`حدث خطأ أثناء عرض قائمة الملفات: ${e.message}`);
        m.reply(`حدث خطأ أثناء عرض قائمة الملفات: ${e.message}`);
    }
};

handler.help = ['listplugins'];
handler.tags = ['owner'];
handler.command = /^(listplugins|lp|باتش-الكل)$/i;
handler.rowner = true;

export default handler;
