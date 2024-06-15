import fetch from 'node-fetch';

const apiKey = 'AIzaSyAj0oG342v6Js1FzpK7HCqe6iMFeHM28Pw'; // استبدل هذه القيمة بمفتاح API الخاص بك

async function searchYouTube(query) {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${apiKey}`);
  const data = await response.json();
  return data.items;
}

let handler = async (m, { conn, text }) => {
  try {
    const searchQuery = text || 'edit'; // استخدم النص المدخل كمصطلح بحث أو 'edit' كافتراضي
    const videos = await searchYouTube(searchQuery);

    if (videos.length > 0) {
      const randomVideo = videos[Math.floor(Math.random() * videos.length)];
      const videoUrl = `https://www.youtube.com/watch?v=${randomVideo.id.videoId}`;

      await conn.sendFile(m.chat, videoUrl, 'dado.webp', '', m);
      await conn.sendMessage(m.chat, { react: { text: '🎞', key: m.key } });
    } else {
      await conn.sendMessage(m.chat, { text: 'لم يتم العثور على فيديوهات.' }, m);
    }
  } catch (error) {
    console.error(error);
    await conn.sendMessage(m.chat, { text: 'حدث خطأ أثناء البحث عن الفيديوهات.' }, m);
  }
};

handler.help = ['dado']
handler.tags = ['game']
handler.command = ['ايديت', 'اديت']

export default handler;
