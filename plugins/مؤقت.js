let handler = async (m, { conn }) => {

conn.sendMessage(
    m.chat,
    {
      image: {
        url: "https://telegra.ph/file/a79388f9fa9385f59d6a3.png",
      },
      caption: `Here you go!`,
      fileLength: "999",
      viewOnce: true,
    },
    {
      quoted: m,
    },
  );
};
 
handler.help = ['ping']
handler.tags = ['main']
handler.command = ['واحده']

export default handler


/*
كود بسيط يرسل صورة او فيد مؤقت زي ما بدك. 
*/
