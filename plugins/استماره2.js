let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*⎔⋅• ━ ╼╃ ⌬〔🐦‍🔥〕⌬ ╄╾ ━ •⋅⎔*

*منشن⧉ ↵*@⁨ 

*⧉ ↵هذا قروب ناخذ منك المعلومات وبعدها ندخلك القروب الأساسي 🌚🐣*
*↡┆*
*⩺ ⧉┇من طرف/مين اعطاك الرابط🐿️*
*↡┆*
*⩺ ⧉┇لقبك/اختار شخصيه انمي تكون لقبك نكلمك فيها🦥*
*_توقيع_*
*~🇵🇸『𝑪.𝑵.𝑹⊰🐦‍🔥⊱𝐏𝐇𝐎𝐄𝐍𝐈𝐗』🇵🇸~*`;
    

    conn.sendFile(m.chat, 'https://telegra.ph/file/02651f9c930babf8b2fc6.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(11|استماره|الاستماره)$/i;
handler.command = new RegExp;

export default handler;
