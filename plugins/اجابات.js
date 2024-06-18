import similarity from 'similarity';
const threshold = 0.72;

let handler = m => m;

handler.before = async function (m) {
    let id = m.chat;
    
    // التحقق الأولي
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^/i.test(m.quoted.text)) return true;

    // تهيئة اللعبة إذا لم تكن موجودة
    this.tekateki = this.tekateki || {};
    if (!(id in this.tekateki)) return;

    // التحقق من الإجابة
    if (m.quoted.id === this.tekateki[id][0].id) {
        let json = this.tekateki[id][1];
        let correctAnswer = json.response.toLowerCase().trim();
        let userAnswer = m.text.toLowerCase().trim();

        if (userAnswer === correctAnswer) {
            global.db.data.users[m.sender].exp += this.tekateki[id][2];
            m.reply(`*⊱─═⪨༻𓆩〘⚡〙𓆪༺⪩═─⊰*\n\n*⌬ ❛╏ اجـــابــه صـحـيـحــه شـطــور يـلا جــرب تــــانــي*\n\n*الـــجــائــزة💰↞ ${this.tekateki[id][2]} نــقـطـه*\n\n*⊱─═⪨༻𓆩〘⚡〙𓆪༺⪩═─⊰*`);
            clearTimeout(this.tekateki[id][3]);
            delete this.tekateki[id];
        } else if (similarity(userAnswer, correctAnswer) >= threshold) {
            m.reply(`*⌬ ❛╏ قـــربـت مـن الاجــابــة جــرب تــــانــي*`);
        } else {
            m.reply('*⊱─═⪨༻𓆩〘⚡〙𓆪༺⪩═─⊰*\n\n*⌬ ❛╏ اجـــابــه خــاطــئـــه يــا فــاشــل*\n\n*⊱─═⪨༻𓆩〘⚡〙𓆪༺⪩═─⊰*');
        }
    }
    
    return true;
};

handler.exp = 0;

export default handler;
