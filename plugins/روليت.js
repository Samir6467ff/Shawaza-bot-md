

let handler = async (m, { conn, args, text, usedPrefix , command }) => {




    let amount = parseInt(args[0])
    let color = args[1]?.toLowerCase()
    if (args.length < 2 )  throw `*✳️ استخدامو كدا:**${usedPrefix + command} <المبلغ> <اللون>*\n\n *مثال: ${usedPrefix + command} 500 احمر*`
    let colores = ['احمر', 'اسود']
    let colour = colores[Math.floor(Math.random() * colores.length)];
    let user = global.db.data.users[m.sender]
    if (isNaN(amount) || amount < 500) throw `*✳️ الحد الأدنى للرهان هو 500 جولد*`
    if (!colores.includes(color)) throw '✳️ انت يجب ان تختار من اللونين: ابيض او احمر'
    if (user.credit < amount) throw '*✳️ ليس لديك مال كافي*'
    if (amount > 100000) throw `🟥 *لايمكن استخدام اكثر من 100000 جولد*`
   let result = ''
    if (colour == color) {
        result = `${colour == 'احمر' ? 'الكره هبطت علي 🔴' : 'الكره هبطت علي ⚫'} \n\nلقد فزت ${amount} جولد`    
        user.credit += amount * 2
    } else {
        result = `${colour == 'احمر' ? 'الكره هبطت علي 🔴' : 'الكره هبطت علي ⚫'} \n\nلقد خسرت ${amount} جولد`
        user.credit -= amount
    }
    m.reply(result) 
}
handler.help = ['roulette <amount> <color(red/black)>']
handler.tags = ['economy']
handler.command = ['roulette', 'rt','روليت']

handler.group = true

export default handler
