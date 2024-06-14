import { createRequire } from 'module';
import fetch from 'node-fetch';
const require = createRequire(import.meta.url);
const fs = require('fs');

let قلوب = {
  isActive: false,
  players: {},
  الاصابه: 5,
  hearts: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎'],
  gameStarter: null // حفظ من بدأ اللعبة
};

let توثيق = (m) => {
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
      if (!قلوب.isActive) {
        قلوب.isActive = true;
        قلوب.players = {};
        قلوب.gameStarter = m.sender.split('@')[0]; // حفظ من بدأ اللعبة
        m.reply('𒄟 ❰لـقـد بـدأت اللعـبة❱\n> ١. قم بالرد على هذه الرسالة واكتب .مشاركة لبدء المشاركة في اللعبة والحصول على 5 قلوب.\n> ٢. استخدم (.انقاص) لتقليل قلوب أحد اللاعبين عند الرد على رسالته.\n> ٣. اكتب (.نتيجه) لعرض قائمة اللاعبين وحالة قلوبهم.\n> ٤. اكتب (.انتهاء) لإنهاء اللعبة ');
      } else {
        m.reply('> اللعبة شغالة حالياً');
      }
      break;
    case 'مشاركة':
      if (!قلوب.isActive) {
        m.reply('> لا توجد لعبة نشطة حالياً.');
        return;
      }
      let newPlayer = m.sender.split('@')[0];
      if (!قلوب.players[newPlayer]) {
        let playerCount = Object.keys(قلوب.players).length;
        قلوب.players[newPlayer] = { hearts: قلوب.الاصابه, icon: قلوب.hearts[playerCount % قلوب.hearts.length] };
        m.reply(`تمت إضافة ${قلوب.الاصابه} قلوب للاعب  @${newPlayer} ${قلوب.players[newPlayer].icon}`);
      } else {
        m.reply(`@${newPlayer} مشارك بالفعل.`);
      }
      break;
    case 'انقاص':
      if (!قلوب.isActive) {
        m.reply('> لا توجد لعبة نشطة حالياً.');
        return;
      }
      let playerToInject = m.quoted ? m.quoted.sender.split('@')[0] : null;
      let requestingPlayer = m.sender.split('@')[0];
      if (requestingPlayer !== قلوب.gameStarter) {
        m.reply('> فقط الشخص الذي بدأ اللعبة يمكنه إنقاص قلوب اللاعبين.');
        return;
      }
      if (playerToInject && قلوب.players[playerToInject]) {
        قلوب.players[playerToInject].hearts--;
        if (قلوب.players[playerToInject].hearts <= 0) {
          delete قلوب.players[playerToInject];
          m.reply(`خصر العب @${playerToInject}`);
        } else {
          m.reply(`تم تقليل قلب واحد من @${playerToInject}. القلوب المتبقية: ${قلوب.players[playerToInject].icon.repeat(قلوب.players[playerToInject].hearts)}`);
        }
        if (Object.keys(قلوب.players).length === 1) {
          let remainingPlayer = Object.keys(قلوب.players)[0];
          m.reply(`اللعبة انتهت! الفائز هو @${remainingPlayer}`);
          قلوب.isActive = false;
        }
      } else {
        m.reply('> منشن المستخدم أو رد على رسالته لتقليل قلبه.');
      }
      break;
    case 'نتيجه':
      if (!قلوب.isActive) {
        m.reply('> لا توجد لعبة نشطة حالياً.');
        return;
      }
      let resultMessage = '*نتائج اللعبة*\n\n*اللاعبين الذين خسروا:*\n';
      let playersWithHeart = '*اللاعبين الذين لا يزال لديهم قلوب:*\n';
      let lostPlayers = [];
      for (let player in قلوب.players) {
        if (قلوب.players[player].hearts > 0) {
          playersWithHeart += `@${player} - قلوب: ${قلوب.players[player].icon.repeat(قلوب.players[player].hearts)}\n`;
        } else {
          lostPlayers.push(`@${player}`);
        }
      }
      resultMessage += lostPlayers.length ? lostPlayers.join('\n') : 'لا يوجد';
      resultMessage += '\n\n' + (Object.keys(قلوب.players).length ? playersWithHeart : 'لا يوجد');
      m.reply(resultMessage);
      break;
    case 'انتهاء':
      if (!قلوب.isActive) {
        m.reply('> لا توجد لعبة نشطة حالياً.');
        return;
      }
      قلوب.isActive = false;
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
