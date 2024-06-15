import fetch from 'node-fetch';
import ytdl from 'ytdl-core';
import fs from 'fs';
import path from 'path';

// تحديد المسار الصحيح للدليل الحالي
const __dirname = path.resolve();

const apiKey = 'AIzaSyAj0oG342v6Js1FzpK7HCqe6iMFeHM28Pw'; // تم تضمين مفتاح API الخاص بك

async function searchYouTube(query) {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${apiKey}`);
  
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch videos: ${errorText}`);
  }
  
  const data = await response.json();
  return data.items;
}

async function downloadVideo(videoUrl, filePath) {
  return new Promise((resolve, reject) => {
    ytdl(videoUrl, { quality: 'highest' })
      .pipe(fs.createWriteStream(filePath))
      .on('finish', resolve)
      .on('error', reject);
  });
}

let handler = async (m, { conn, text }) => {
  try {
    if (!text) {
      await conn.sendMessage(m.chat, { text: 'يرجى تقديم النص الذي تريد البحث عنه.' }, { quoted: m });
      return;
    }

    const searchQuery = text; // استخدم النص المدخل كمصطلح بحث
    const videos = await searchYouTube(searchQuery);

    if (videos.length > 0) {
      const randomVideo = videos[Math.floor(Math.random() * videos.length)];
      const videoUrl = `https://www.youtube.com/watch?v=${randomVideo.id.videoId}`;
      const filePath = path.join(__dirname, 'video.mp4');

      await downloadVideo(videoUrl, filePath);

      await conn.sendFile(m.chat, filePath, 'video.mp4', '', m);
      await conn.sendMessage(m.chat, { react: { text: '🎞', key: m.key } });

      fs.unlinkSync(filePath); // احذف الملف بعد الإرسال
    } else {
      await conn.sendMessage(m.chat, { text: 'لم يتم العثور على فيديوهات.' }, { quoted: m });
    }
  } catch (error) {
    console.error(error);
    await conn.sendMessage(m.chat, { text: `حدث خطأ أثناء البحث عن الفيديوهات: ${error.message}` }, { quoted: m });
  }
};

handler.help = ['dado']
handler.tags = ['game']
handler.command = ['ايديت', 'اديت']

export default handler;
