import fetch from 'node-fetch';

let points = 50;
let maxPlayers = 10;
let maxQuestions = 50;
let questionTimeout = 25 * 1000; 

let handler = async (m, { conn, command }) => {
    let id = m.chat;
    conn.itachixvi = conn.itachixvi ? conn.itachixvi : {};

    if (command === "مسابقه-صور") {
        if (id in conn.itachixvi) {
            conn.reply(m.chat, '*المسابقه شغاله حالياً يمكنك المشاركه*', conn.itachixvi[id][0]);
            throw false;
        }

        conn.itachixvi[id] = [
            await conn.reply(m.chat, '┐┈┈┈〈 *🚀 مـسـابـقـه صـور 🎡* 〉┈┈┈◆\n │╮┈┈┈┈┈┈┈┈┈┈┈┈⩺ـ\n┴│🍷⩺ ¹ جاوب علي السوال \nقبل اي احد\n│🍷⩺ ² منشن الرساله عشان تتحسب النقطه\n┬│🍷⩺  ³ السوال الواحد ب 50 نقطه\n│╯┈┈┈┈┈┈┈┈┈┈┈┈⩺ـ\n┘┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⩺ـ', m), [], [], 0, 0, null
        ];

        conn.reply(m.chat, '*المسابقه تم تفعيلها استخدم .انضم-صور للانضمام للمسابقه*', m);
        throw false;
    } else if (command === "انضم-صور") {
        if (!(id in conn.itachixvi)) {
            conn.reply(m.chat, '*المعذره لايوجد مسابقه حالياً*', m);
            throw false;
        }

        if (conn.itachixvi[id][2].length >= maxPlayers) {
            conn.reply(m.chat, '*المعذره العدد مكتمل*', m);
            throw false;
        }

        if (conn.itachixvi[id][2].findIndex(player => player.id === m.sender) !== -1) {
            conn.reply(m.chat, '*لقد قمت بلتسجيل مسبقاً*', m);
            throw false;
        }

        conn.itachixvi[id][2].push({ id: m.sender, points: 0, correctAnswers: 0 });
        conn.reply(m.chat, `تـم الـتـسـجـيـل بـنـجـاح\nتـبـقـي للـانـضـمـام: ${maxPlayers - conn.itachixvi[id][2].length}`, m);

        if (conn.itachixvi[id][2].length >= 2) {
            let itachixvi = await (await fetch(`https://raw.githubusercontent.com/DK3MK/worker-bot/main/eye.json`)).json();
            let json = itachixvi[Math.floor(Math.random() * itachixvi.length)];
            conn.itachixvi[id][1] = json;
            let playersList = conn.itachixvi[id][2].map((player, i) => `${i + 1} - @${player.id.split('@')[0]} [${player.points} نقطة]`).join('\n');
            let caption = `┐┈┈┈〈 *📍 مـسـابـقـه صـور 📍* 〉┈┈┈◆
*•🔢 رقـم الـسـوال ${conn.itachixvi[id][4] + 1}*
*•🍷 اجب بسرعه قبل اي شخص اخر*
*•💰 الجائزة:* ⌊ ${points} ⌉ *نقطة* , \`لكل جواب صحيح\`
╯──────────────────⟢ـ`.trim()
            conn.sendFile(m.chat, json.img, '', caption, m)

            conn.itachixvi[id][5] = setTimeout(() => {
                conn.reply(m.chat, `*•┇❖↞الوقت أنتهي الاجابه هي┇⏳❯*\n ${json.name}\n╯──────────────────⟢ـ`, conn.itachixvi[id][0]);
                clearTimeout(conn.itachixvi[id][5]);
                conn.itachixvi[id][5] = null;

                setTimeout(async () => {
                    let newJson = itachixvi[Math.floor(Math.random() * itachixvi.length)];
                    conn.itachixvi[id][1] = newJson;
                    conn.itachixvi[id][3]++;
                    conn.itachixvi[id][4]++;

                    let newCaption = `┐┈┈┈〈 *📍 مـسـابـقـه صـور 📍* 〉┈┈┈◆
*•🔢 رقـم الـسـوال ${conn.itachixvi[id][4] + 1}*
*•🍷 اجب بسرعه قبل اي شخص اخر*
*•💰 الجائزة:* ⌊ ${points} ⌉ *نقطة* , \`لكل جواب صحيح\`
╯──────────────────⟢ـ`.trim()
                    conn.sendFile(m.chat, newJson.img, '', newCaption, m)
                }, 1000); 
            }, questionTimeout);
        }
    } else if (command === "حذف-صور") {
        if (!conn.itachixvi[id]) {
            conn.reply(m.chat, '*لا يوجد احد ق
