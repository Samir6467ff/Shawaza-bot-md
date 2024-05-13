const handler = async (m, {conn, text}) => {
  const [nomor, pesan, jumlah] = text.split('|');
  if (!nomor) throw '*[ ⚠️ ] يجب ان تضع الرقم*\n*الاستخدام الصحيح:*\n*—◉ #سبام الرقم|النص|عدد الرسايل*\n*مثال*\n*—◉ #سبام 5219999999999|اهلا :v|25*';
  if (!pesan) throw '*[ ⚠️ ] فين النص!*\n*الاستخدام الصحيح:*\n*—◉ #سبام الرقم|النص|عدد الرسايل*\n*مثال:*\n*—◉ #سبام 201#####|هلا :v|25*';
  if (jumlah && isNaN(jumlah)) throw '*[ ⚠️ ] خطأ!*\n*الاستخدام الصحيح:*\n*—◉ #سبام الرقم|النص|عدد الرسايل*\n*مثال:*\n*—◉ #سبام 201####|هلا :v|25*';

  const fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net';
  const fixedJumlah = jumlah ? jumlah * 1 : 10;
  if (fixedJumlah > 500) throw '*[ ⚠️ ] يجب الا يتعدا عدد الرسايل عن 500*️';
  await m.reply(`*[❗] تم الارسال ل ${nomor}*\n*—◉ ${fixedJumlah} !*`);
  for (let i = fixedJumlah; i > 1; i--) {
    if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m);
  }
};
handler.help = ['spamwa <number>|<mesage>|<no of messages>'];
handler.tags = ['General'];
handler.command = /^سبام$/i;
handler.premium = true;
handler.rowner = true; 
// handler.private = true
// handler.limit = true
export default handler;
