import { createRequire } from 'module';
import fetch from 'node-fetch';
const require = createRequire(import.meta.url);
const fs = require('fs');

let heartsGame = {
  isActive: false,
  players: {},
  heartsCount: 5,
  heartsIcons: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎'],
  gameStarter: null
};

let createVCard = (m) => {
  return {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": "Halo"
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  }
}

let handler = async (m, { conn, command, text }) => {
  let args = text.trim().split(/\s+/).slice(1);

  switch (command) {
    case 'قلوب':
      if (!heartsGame.isActive) {
        heartsGame.isActive = true;
        heartsGame.players = {};
        heartsGame.gameStarter = m.sender.split('@')[0];
        m.reply('𒄟 ❰لـقـد بـدأت اللعـبة❱\n> ١. قم بالرد على هذه الرسالة واكتب .مشاركة لبدء المشاركة في اللعبة والحصول على 5 قلوب.\n> ٢. استخدم (.انقاص) لتقليل قلوب أحد اللاعبين عند الرد على رسالته.\n> ٣. اكتب (.نتيجه) لعرض قائمة اللاعبين وحالة قلوبهم.\n> ٤. اكتب (.انتهاء) لإنهاء اللعبة ');
      } else {
        m.reply('> اللعبة شغالة حالياً');
      }
      break;

    case 'مشاركة':
      if (!heartsGame.isActive) {
        m.reply('> لا توجد لعبة نشطة حالياً.');
        return;
      }
      let newPlayer = m.sender.split('@')[0];
      if (!heartsGame.players[newPlayer]) {
        let playerCount = Object.keys(heartsGame.players).length;
        heartsGame.players[newPlayer] = { hearts: heartsGame.heartsCount, icon: heartsGame.heartsIcons[playerCount % heartsGame.heartsIcons.length] };
        m.reply(`تمت إضافة ${heartsGame.heartsCount} قلوب للاعب  @${newPlayer} ${heartsGame.players[newPlayer].icon}`);
      } else {
        m.reply(`@${newPlayer} مشارك بالفعل.`);
      }
      break;

    case 'انقاص':
      if (!heartsGame.isActive) {
        m.reply('> لا توجد لعبة نشطة حالياً.');
        return;
      }
      let playerToDecrease = m.quoted ? m.quoted.sender.split('@')[0] : null;
      let requestingPlayer = m.sender.split('@')[0];
      if (requestingPlayer !== heartsGame.gameStarter) {
        m.reply('> فقط الشخص الذي بدأ اللعبة يمكنه إنقاص قلوب اللاعبين.');
        return;
      }
      if (playerToDecrease && heartsGame.players[playerToDecrease]) {
        heartsGame.players[playerToDecrease].hearts--;
        if (heartsGame.players[playerToDecrease].hearts <= 0) {
          delete heartsGame.players[playerToDecrease];
          m.reply(`خصر العب @${playerToDecrease}`);
        } else {
          m.reply(`تم تقليل قلب واحد من @${playerToDecrease}. القلوب المتبقية: ${heartsGame.players[playerToDecrease].icon.repeat(heartsGame.players[playerToDecrease].hearts)}`);
        }
        if (Object.keys(heartsGame.players).length === 1) {
          let remainingPlayer = Object.keys(heartsGame.players)[0];
          m.reply(`اللعبة انتهت! الفائز هو @${remainingPlayer}`);
          heartsGame.isActive = false;
        }
      } else {
        m.reply('> منشن المستخدم أو رد على رسالته لتقليل قلبه.');
      }
      break;

    case 'نتيجه':
      if (!heartsGame.isActive) {
        m.reply('> لا توجد لعبة نشطة حالياً.');
        return;
      }
      let resultMessage = '*نتائج اللعبة*\n\n*اللاعبين الذين خسروا:*\n';
      let playersWithHearts = '*اللاعبين الذين لا يزال لديهم قلوب:*\n';
      let lostPlayers = [];
      for (let player in heartsGame.players) {
        if (heartsGame.players[player].hearts > 0) {
          playersWithHearts += `@${player} - قلوب: ${heartsGame.players[player].icon.repeat(heartsGame.players[player].hearts)}\n`;
        } else {
          lostPlayers.push(`@${player}`);
        }
      }
      resultMessage += lostPlayers.length ? lostPlayers.join('\n') : 'لا يوجد';
      resultMessage += '\n\n' + (Object.keys(heartsGame.players).length ? playersWithHearts : 'لا يوجد');
      m.reply(resultMessage);
      break;

    case 'انتهاء':
      if (!heartsGame.isActive) {
        m.reply('> لا توجد لعبة نشطة حالياً.');
        return;
      }
      heartsGame.isActive = false;
      m.reply('اللعبة انتهت. شكراً للمشاركة!');
      break;

    default:
      m.reply('أمر غير معروف.');
      break;
  }
}

handler.command = /^(قلوب|مشاركة|انقاص|نتيجه|انتهاء)$/i;

handler.botAdmin = true;

export default handler;
