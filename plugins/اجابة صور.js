import similarity from 'similarity';
const threshold = 0.72;

let handler = async function (m, { conn }) {
    let id = m.chat;
    this.itachixvi = this.itachixvi ? this.itachixvi : {};

    if (!(id in this.itachixvi)) return;

    let json = this.itachixvi[id][1];
    let players = this.itachixvi[id][2];
    let questionCount = this.itachixvi[id][3];

    if (json && json.name && m.text.toLowerCase() === json.name.toLowerCase()) {
        clearTimeout(this.itachixvi[id][5]); // Clear timeout
        let playerIndex = players.findIndex(player => player.id === m.sender);
        players[playerIndex].points += points;
        players[playerIndex].correctAnswers++;
        questionCount++;

        if (questionCount >= maxQuestions) {
            let sortedPlayers = players.sort((a, b) => b.points - a.points);
            let playersList = sortedPlayers.map((player, i) => `${i + 1} - @${player.id.split('@')[0]} [${player.points} نقطة, ${player.correctAnswers} من إجابات صحيحه]`).join('\n');
            this.reply(m.chat, `لـقـد انـتـهـت الـمـسـابـقـه\nالـيـك لـوحـه الـصـاداره:\n\n${playersList}`, m, { mentions: conn.parseMention(playersList) });
            delete this.itachixvi[id];
        } else {
            let itachixvi = await (await fetch(`https://raw.githubusercontent.com/DK3MK/worker-bot/main/eye.json`)).json();
            json = itachixvi[Math.floor(Math.random() * itachixvi.length)];
            this.itachixvi[id][1] = json;
            this.itachixvi[id][3] = questionCount;
            this.itachixvi[id][4]++;
            let playersList = players.map((player, i) => `${i + 1} - @${player.id.split('@')[0]} [${player.points} نقطة, ${player.correctAnswers} إجابات صحيحة]`).join('\n');
            let caption = `┐┈┈┈〈 *📍 مـسـابـقـه صـور 📍* 〉┈┈┈◆
*•🔢 رقـم الـسـوال ${this.itachixvi[id][4] + 1}*
*•🍷 اجب بسرعه قبل اي شخص اخر*
*•💰 الجائزة:* ⌊ ${points} ⌉ *نقطة* , \`لكل جواب صحيح\`
╯──────────────────⟢ـ`.trim();
            this.sendFile(m.chat, json.img, '', caption, m);

            this.itachixvi[id][5] = setTimeout(() => {
                this.reply(m.chat, `*•┇❖↞الوقت أنتهي الاجابه هي┇⏳❯*\n ${json.name}\n╯──────────────────⟢ـ`, this.itachixvi[id][0]);
                clearTimeout(this.itachixvi[id][5]);
                this.itachixvi[id][5] = null;

                setTimeout(async () => {
                    let newJson = itachixvi[Math.floor(Math.random() * itachixvi.length)];
                    this.itachixvi[id][1] = newJson;
                    this.itachixvi[id][3]++;
                    this.itachixvi[id][4]++;
                    let newCaption = `┐┈┈┈〈 *📍 مـسـابـقـه صـور 📍* 〉┈┈┈◆
*•🔢 رقـم الـسـوال ${this.itachixvi[id][4] + 1}*
*•🍷 اجب بسرعه قبل اي شخص اخر*
*•💰 الجائزة:* ⌊ ${points} ⌉ *نقطة* , \`لكل جواب صحيح\`
╯──────────────────⟢ـ`.trim();
                    this.sendFile(m.chat, newJson.img, '', newCaption, m);
                }, 1000);
            }, questionTimeout);
        }
    }
};

handler.before = handler;

export default handler;
