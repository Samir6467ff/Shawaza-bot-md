import fetch from 'node-fetch';

const handler = async (m, {conn, text}) => {
    const datas = global
    //const idioma = datas.db.data.users[m.sender].language
    //const _translate = JSON.parse(fs.readFileSync(`./language/ar.json`))
    //const tradutor = _translate.BK9.BK9

    if (!text) throw "يـرجـى إدخـال نـص، مـثـال\n.تخيل بيت ازرق في طبيعة خلابة";

  m.reply (wait) 

  try {
    const BK9 = `https://api.bk9.site/ai/photoleap?q=${encodeURIComponent(text)}`;
    const response = await fetch(BK9);
    const result = await response.json();


    if (result.status) {
      await conn.sendMessage(m.chat,'*تفضل*\n> BY: 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕', {image: {url: result.BK9}}, {quoted: m});
    } 
  } catch (error) {
    throw "فشل في إنشاء الصورة. الرجاء معاودة المحاولة في وقت لاحق.";
  }
};

handler.command = ['تخيل'];
handler.tags = ['ai'];
export default handler;
