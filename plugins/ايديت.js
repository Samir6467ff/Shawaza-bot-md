import fetch from 'node-fetch';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

async function searchTikTok(query) {
  try {
    const response = await fetch(`https://www.tiktok.com/tag/${encodeURIComponent(query)}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch TikTok videos: ${response.status} ${response.statusText}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const videos = [];
    $('a[data-video-id]').each((index, element) => {
      const videoId = $(element).attr('data-video-id');
      if (videoId) {
        const videoUrl = `https://www.tiktok.com/@username/v/${videoId}`;
        videos.push({ videoUrl });
      }
    });

    return videos;
  } catch (error) {
    throw new Error(`Error fetching TikTok videos: ${error.message}`);
  }
}

async function downloadVideo(videoUrl, filePath) {
  try {
    const response = await fetch(videoUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch video: ${response.status} ${response.statusText}`);
    }

    const videoBuffer = await response.buffer();
    fs.writeFileSync(filePath, videoBuffer);
    console.log(`Video downloaded to ${filePath}`);
  } catch (error) {
    throw new Error(`Error downloading video: ${error.message}`);
  }
}

let handler = async (m, { conn, text }) => {
  try {
    if (!text) {
      await conn.sendMessage(m.chat, { text: 'يرجى تقديم النص الذي تريد البحث عنه.' }, { quoted: m });
      return;
    }

    const searchQuery = text;
    const videos = await searchTikTok(searchQuery);

    if (videos.length > 0) {
      const randomVideo = videos[Math.floor(Math.random() * videos.length)];
      const videoUrl = randomVideo.videoUrl;
      const filePath = path.join(__dirname, 'video.mp4');

      await downloadVideo(videoUrl, filePath);

      await conn.sendFile(m.chat, filePath, 'video.mp4', '', m);
      await conn.sendMessage(m.chat, { react: { text: '🎞', key: m.key } });

      fs.unlinkSync(filePath); // Delete the file after sending
    } else {
      await conn.sendMessage(m.chat, { text: 'لم يتم العثور على فيديوهات.' }, { quoted: m });
    }
  } catch (error) {
    console.error(error);
    await conn.sendMessage(m.chat, { text: `حدث خطأ أثناء البحث عن الفيديوهات: ${error.message}` }, { quoted: m });
  }
};

handler.help = ['تيك توك'];
handler.tags = ['ترفيه', 'فيديو'];
handler.command = ['ايدت','ايديت'];

export default handler;
