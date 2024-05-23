import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  try {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const img = await res.json();
    const caption = `
*_⌬ ❛╏ BY: 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕_*
`.trim();
    conn.sendFile(m.chat, img[0].url, 'cat.jpg', caption, m);
  } catch (e) {
    console.log(e);
    throw '*⌬ ❛╏خطأ!*';
  }
};
handler.help = ['cat'];
handler.tags = ['random'];
handler.command = /^cat$/i;
handler.fail = null;
export default handler;
