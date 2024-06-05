import moment from 'moment-timezone';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  const time = moment.tz('Africa/Egypt').format('HH');
  let wib = moment.tz('Africa/Cairo').format('HH:mm:ss');
  let date = new Date().toLocaleDateString('en-EG', { day: 'numeric', month: 'long', year: 'numeric' });

  await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } });

  // إرسال الرسالة مع الصورة والمعلومات التفاعلية
  await conn.sendMessage(m.chat, {
    image: { url: 'https://telegra.ph/file/a79388f9fa9385f59d6a3.png' }, // قم بوضع رابط الصورة هنا
    caption: `معلومات المستخدم:
اهلا يا ${taguser}
ليفللك: 0
خبرتك: 0
رتبتك: مواطن
ماسك: 20
فلوسك: 15
عملاتك: 2

التوقيت:
التاريخ: ${date}
النشاط: 00:40:25
اليوم: الثلاثاء
الوقت: ${wib}
عدد المستخدمين: 1355
    `,
    footer: 'اختر خيار من القائمة:',
    buttons: [
{
    "name": "single_select",
    "buttonParamsJson": "{\"title\":\"title\",\"sections\":[{\"title\":\"title\",\"highlight_label\":\"label\",\"rows\":[{\"header\":\"اوامر\",\"title\":\"اوامر\",\"description\":\"\",\"id\":\".اوامر\"},{\"header\":\"المطور\",\"title\":\"المطور\",\"description\":\"\",\"id\":\".المطور\"}]}]}"
},
{
    "name": "quick_reply",
    "buttonParamsJson": "{\"display_text\":\"المطور\",\"id\":\".المطور\"}"
},
{
     "name": "cta_url",
     "buttonParamsJson": "{\"display_text\":\"ويب\",\"url\":\"https://chat.whatsapp.com/JO7neq006uI3OgEtjNvtm0\",\"merchant_url\":\"https://chat.whatsapp.com/JO7neq006uI3OgEtjNvtm0\"}"
}
         ],
    headerType: 4 // هذا النوع يمثل رسالة تحتوي على صورة
  });

};

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['لول'];

export default handler;
