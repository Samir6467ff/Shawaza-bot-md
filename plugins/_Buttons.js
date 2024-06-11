// من قناة : https://whatsapp.com/channel/0029VaQim2bAu3aPsRVaDq3v
// By : team GataBot 


const canal2 = 'https://telegra.ph/file/f4f9d2420ac2b1072eb2e.jpg'; 
// COMBINACIÓN DE MENSAJES
// Adaptar el simple.js
let handler = async (m, { conn, usedPrefix, command, text }) => {

// MENSAJE CARUSEL CON TODOS LOS BOTONES DISPONIBLES
// Si las ids no te funciona con usedPrefix, tendrás que definirlas, ejemplo /menu
const sections = [{
title: `تست`,
rows: [
{ header: 'قائمة الاوامر', title: "تست", description: '', id: usedPrefix + "menu" }, 
{ header: 'المطور', title: "المطور", description: '', id: ".المطور" }, 
{ header: 'الدعم', title: "الدعم", description: '', id:".الدعم" }, 
{ header: 'شروط', title: "شروط", description: '', id: ".شروط" }, 
]},]  
const messages = [[ // CARRUSEL 1
'تست تست', 
'𝒁𝒆𝒛𝒐 𝑩𝒐𝒕',
'https://telegra.ph/file/f4f9d2420ac2b1072eb2e.jpg',
[['القائمه', usedPrefix + 'menu'], ['المطور','.المطور'] /* etc... */],
[['صوره', canal2], ['القناه', 'https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a'] /* etc... */],
[['click here', sections]]
], [ // CARRUSEL 2
'تست',
'𝒁𝒆𝒛𝒐 𝑩𝒐𝒕',
'https://telegra.ph/file/f4f9d2420ac2b1072eb2e.jpg',
[['المطور', '.المطور'], ['القائمه', '.menu']],
[['𝒁𝒆𝒛𝒐 𝑩𝒐𝒕'], ['زيزو عمك']],
[['قناتي', 'https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a']],
[['الاوامر', sections]] 
]]/*[ // CARRUSEL 3
'Descripción de Carrusel 3',
'Footer de Carrusel 3',
'https://telegra.ph/file/ec725de5925f6fb4d5647.jpg',
[['Botón1', 'Id1'], ['Botón2', 'Id2']],
[['Texto para copiar 1'], ['Texto para copiar 2']],
[['Enlace1', 'https://example.com/link1'], ['Enlace2', 'https://example.com/link2']],
[['Botón Lista 1', sections], ['Botón Lista 2', sections]]
],[ // CARRUSEL 4
'Descripción de Carrusel 4',
'Footer de Carrusel 4',
'https://telegra.ph/file/7acad0975febb71446da5.jpg',
[['Botón1', 'Id1'], ['Botón2', 'Id2']],
[['Texto para copiar 1'], ['Texto para copiar 2']],
[['Enlace1', 'https://example.com/link1'], ['Enlace2', 'https://example.com/link2']],
[['Botón Lista 1', sections], ['Botón Lista 2', sections]]
]]*/ /* etc... */
await conn.sendCarousel(m.chat,'Texto', 'Footer', 'Titulo de Carrusel', messages, m)            

}
handler.command = /^(ترو)$/i
export default handler
