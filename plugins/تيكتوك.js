import fetch from 'node-fetch';
import fs from 'fs';
import { exec } from 'child_process';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `*يجب عليك إعطاء رابط أي فيديو أو صورة من TikTok*`;
  m.reply('*الرجاء الانتظار...*');

  try {
    let mediaURL = await zoro(text);

    if (!mediaURL) throw 'لم يتم العثور على فيديو للرابط المعطى';

    conn.sendFile(m.chat, mediaURL, '', 'هذا هو الفيديو ⚡', m, false, { mimetype: 'video/mp4' });

    let audioFileName = await extractAudio(mediaURL);

    conn.sendFile(m.chat, audioFileName, '', 'هذا هو المقطع الصوتي 🎵', m, false, { mimetype: 'audio/mpeg' });
  } catch (error) {
    throw `حدث خطأ: ${error.message}`;
  }
};

async function zoro(text) {
  const API_KEY = 'apify_api_eUmBmvx581iQls9Ibea1I1z1pFHVnR2b1aoO'; // Replace with your API key
  let res = await fetch(`https://api.apify.com/v2/acts/mscraper~tiktok-video-downloader/run-sync-get-dataset-items?token=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url: text })
  });

  if (!res.ok) return false;

  const data = await res.json();
  const videoURL = data.url; // Adjust based on the API response structure
  const fileName = 'Zoro_tiktok_video.mp4';
  const fileStream = fs.createWriteStream(fileName);

  await new Promise((resolve, reject) => {
    fetch(videoURL)
      .then(videoRes => videoRes.body.pipe(fileStream))
      .then(() => fileStream.on('finish', resolve))
      .catch(reject);
  });

  return fileName;
}

function extractAudio(videoFile) {
  return new Promise((resolve, reject) => {
    const audioFile = 'Zoro_tiktok_audio.mp3';
    exec(`ffmpeg -i ${videoFile} -q:a 0 -map a ${audioFile}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(audioFile);
      }
    });
  });
}

handler.help = ['tiktok'];
handler.tags = ['downloader'];
handler.command = /^(تيكتوك|تيك)$/i;

export default handler;
