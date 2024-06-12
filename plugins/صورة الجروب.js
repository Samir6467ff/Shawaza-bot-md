import jimp from 'jimp';

const handler = async (message, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  try {
    const chatId = message.chat; // معرف المجموعة
    const quotedMessage = message.quoted ? message.quoted : message; // الحصول على الرسالة المقتبسة إذا كانت موجودة، وإلا الرسالة نفسها
    if (!message.quoted) throw '*⚠️️ قم بالرد على صورة.*'; // إذا لم تكن الرسالة تحتوي على اقتباس، نرسل رسالة تحذير

    const mimeType = (quotedMessage.msg || quotedMessage).mimetype || ''; // نوع ملف الميديا للرسالة المقتبسة
    const downloadedImage = await quotedMessage.download(); // تنزيل الصورة من الرسالة المقتبسة
    const groupId = await chatId; // الحصول على معرف المجموعة

    async function resizeImage(imageBuffer) {
      const image = await jimp.read(imageBuffer); // قراءة الصورة باستخدام jimp
      // تغيير حجم الصورة، إذا كان الارتفاع أكبر من العرض نجعل الارتفاع 720 بكسل، وإلا نجعل العرض 720 بكسل
      const resizedImage = image.getHeight() > image.getWidth() ? image.resize(720, jimp.AUTO) : image.resize(jimp.AUTO, 720); 
      const jpegBuffer = await resizedImage.getBufferAsync(jimp.MIME_JPEG); // تحويل الصورة المعدلة إلى تنسيق JPEG
      return { img: jpegBuffer }; // إرجاع الصورة المعدلة بتنسيق JPEG
    }

    const { img: resizedImageBuffer } = await resizeImage(downloadedImage); // تنفيذ دالة تغيير الحجم والحصول على الصورة المعدلة

    await conn.query({
      tag: 'iq',
      attrs: { to: groupId, type: 'set', xmlns: 'w:profile:picture' }, // إعداد البيانات لإرسال الصورة كصورة الملف الشخصي
      content: [{ tag: 'picture', attrs: { type: 'image' }, content: resizedImageBuffer }] // تضمين الصورة المعدلة في الطلب
    });

    message.reply('⚘ *_تم تحديث الصورة بنجاح._*'); // إرسال رسالة تأكيد للمستخدم بأن الصورة تم تحديثها بنجاح
  } catch {
    throw '*⚠️️ قم بالرد على صورة.*'; // إذا حدث خطأ، نرسل رسالة تحذير
  }
};

handler.tags = ['group']; // تصنيف الأمر ضمن الأوامر المتعلقة بالمجموعات
handler.command = handler.alias = ['setppgc', 'setppgrup', 'setppgroup','بروفجروب','لصوره-الجروب','صورهالجروب']; // الأسماء المستعارة للأمر
handler.help = ['setpp(gc|grup|group)']; // الأوامر المدعومة في المساعدة
handler.admin = handler.botAdmin = handler.group = true; // التأكد من أن الأمر يتم تنفيذه بواسطة مشرف وبوجود الروبوت كمشرف في المجموعة

export default handler;
