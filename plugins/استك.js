/*import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
    //صوره الاستيكر
    const xvi = [
"https://telegra.ph/file/ea43b170bcc6ab9f27299.png",
"https://telegra.ph/file/a1471d99d3a76aa4579e1.jpg",
"https://telegra.ph/file/36b272958227dafec4048.png",
"https://telegra.ph/file/6a30c3f14b5268f4b9612.jpg",
"https://telegra.ph/file/c97f77e4f97962615ed84.png"
    ];  
    //اختيار صوره عشوائي لتحويلها استيكر
    let stiker = await sticker(null, xvi[Math.floor(Math.random() * xvi.length)])
    if (stiker) {
        conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    }
}
//الأمر يعمل بدون نقطه عادي
handler.customPrefix = /(ميسي|معزه|جوت)/i 
handler.command = new RegExp
export default handler*/
