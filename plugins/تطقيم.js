import fetch from "node-fetch";

let handler = async (m, { conn }) => {
  try {
    let data = await (await fetch('https://raw.githubusercontent.com/KazukoGans/database/main/anime/ppcouple.json')).json();
    let cita = data[Math.floor(Math.random() * data.length)];
    
    let cowi = await (await fetch(cita.cowo)).buffer();
    await conn.sendFile(m.chat, cowi, '', '♂️', '*للولد*', m);
    
    let ciwi = await (await fetch(cita.cewe)).buffer();
    await conn.sendFile(m.chat, ciwi, '', '♀️', '*للبنت*', m);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

handler.help = ['ppcouple', 'ppcp'];
handler.tags = ['img'];
handler.command = ['couplepp', 'كابلز', 'تطقيم'];
handler.fromMe = true;


export default handler;
