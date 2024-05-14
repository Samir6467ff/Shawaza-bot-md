let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	let tee = `*✳️ ادخل نص*\n\n*📌 مثال :* *${usedPrefix + command}*  *zezo*`
	let too = `*✳️ افصل بين النص ب* *+* \n\n*📌 مثال :* \n*${usedPrefix + command}* ZEZO *+* BOT`

	
	let type = command.toLowerCase();
	
	switch (type) {
	  case 'لوجو1':
		if (!text) throw tee;
		let chut = `https://api.caliph.biz.id/api/kaneki?nama=${encodeURIComponent(text)}&apikey=caliphkey`;
		conn.sendFile(m.chat, chut, 'logo.png', `✅ Result`, m);
		break;
		
	  case 'لوجو2': 
		if (!text) throw too;
		if (!text.includes('+')) throw too;
		let [a, b] = text.split('+');
		let loda = `https://api.caliph.biz.id/api/girlneko?nama=${encodeURIComponent(a.trim())}&nama2=${encodeURIComponent(b.trim())}&apikey=caliphkey`;
		conn.sendFile(m.chat, loda, 'logo.png', `✅ Result`, m);

		break;
		
	  case 'لوجو3':
		if (!text) throw tee;
		let cp = `https://api.caliph.biz.id/api/rem?nama=${encodeURIComponent(text.trim())}&apikey=caliphkey`;
		conn.sendFile(m.chat, cp, 'logo.png', `✅ Result`, m);
		break;
		
	  case 'لوجو4': 
		if (!text) throw tee;
		let gandu = `https://api.caliph.biz.id/api/textpro/matrix?text=${encodeURIComponent(text)}&apikey=caliphkey`;
		conn.sendFile(m.chat, gandu, 'logo.png', `✅ Result`, m);
		break;
		case 'لوجو5':
    if (!text) throw tee
    const apiUrll = `https://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
    conn.sendFile(m.chat, apiUrll, 'logo.png', '✅ Result', m);
    break;

	case 'لوجو6': 
	if (!text) throw too
	if (!text.includes('+')) throw too  
	let [c, d] = text.split`+`   
	const apiUrl = `https://api.lolhuman.xyz/api/textprome2/lionlogo?apikey=${lolkeysapi}&text1=${encodeURIComponent(c)}&text2=${encodeURIComponent(d)}`
	conn.sendFile(m.chat, apiUrl, 'logo.png', `✅ Result`, m); 
	break 
	case 'لوجو7': 
	if (!text) throw too;
	if (!text.includes('+')) throw too;
	let [e, f] = text.split('+');
	let oda = `https://api.lolhuman.xyz/api/photooxy2/battlefield4?apikey=${lolkeysapi}&text1=${encodeURIComponent(e.trim())}&text2=${encodeURIComponent(f.trim())}`;
	conn.sendFile(m.chat, oda, 'logo.png', `✅ Result`, m);
	break 
	case 'لوجو8': 
	if (!text) throw tee;
	let rand = `https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, rand, 'logo.png', `✅ Result`, m);
	break;
	case 'لوجو9': 
	if (!text) throw tee;
	let randi = `https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, randi, 'logo.png', `✅ Result`, m); 
	break;
	case 'لوجو10': 
	if (!text) throw tee;
	let randu = `https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, randu, 'logo.png', `✅ Result`, m);
	break;
	case 'لوجو11': 
	if (!text) throw too;
	if (!text.includes('+')) throw too;
	let [g, h] = text.split('+');
	let od = `https://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=${lolkeysapi}&text1=${encodeURIComponent(g.trim())}&text2=${encodeURIComponent(h.trim())}`;
	conn.sendFile(m.chat, od, 'logo.png', `✅ Result`, m);
	break 
	case 'لوجو12': 
	if (!text) throw tee;
	let rr = `https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, rr, 'logo.png', `✅ Result`, m);
	break;

	  default:
	} 
  };
  
  handler.help = ['لوجو1', 'لوجو2', 'لوجو3', 'لوجو4', 'لوجو5', 'لوجو6', 'لوجو7', 'لوجو8', 'لوجو9', 'لوجو10', 'لوجو11', 'لوجو12'];
  handler.tags = ['maker'];
  handler.command = /^(لوجو1|لوجو2|لوجو3|لوجو4|لوجو5|لوجو6|لوجو7|لوجو8|لوجو9|لوجو10|لوجو11|لوجو12)$/i;
  handler.diamond = false;
  
  export default handler;
  

  
