(function (_0x5a4de2, _0x3ad618) {
    const _0x32dfc1 = _0x5a4de2();
    while (!![]) {
        try {
            const _0x4a1a4e = -parseInt(_0x34ee(0x3)) / 0x1 * (-parseInt(_0x34ee(0x9)) / 0x2) + -parseInt(_0x34ee(0x8)) / 0x3 + -parseInt(_0x34ee(0x6)) / 0x4 * (parseInt(_0x34ee(0x5)) / 0x5) + parseInt(_0x34ee(0xa)) / 0x6 + parseInt(_0x34ee(0x4)) / 0x7 + parseInt(_0x34ee(0x1)) / 0x8 * (-parseInt(_0x34ee(0x0)) / 0x9) + parseInt(_0x34ee(0x7)) / 0xa;
            if (_0x4a1a4e === _0x3ad618) {
                break;
            } else {
                _0x32dfc1['push'](_0x32dfc1['shift']());
            }
        } catch (_0x2871d3) {
            _0x32dfc1['push'](_0x32dfc1['shift']());
        }
    }
}(_0xdf72, 0xc075d));
function _0xdf72() {
    const _0x2cd8cf = ['3cnYMJB', '8769719MnFZvL', '25mFuEDp', '731140pvRmXk', '12758260CAkPWG', '3189696yJtAyx', '405994EMBBnx', '1043106xXkSTn', '9PujWDy', '4368088oIJrtu', '*◉—⌈📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥⌋—◉*\x0a❏ *الاسم: '];
    _0xdf72 = function () {
        return _0x2cd8cf;
    };
    return _0xdf72();
}
import {
    youtubedl,
    youtubedlv2
} from '@bochilteam/scraper';
import _0x4ef48a from 'node-fetch';
const handler = async (_0x59fafc, {
    conn: _0x310b05,
    args: _0x508d2f
}) => {
    if (!_0x508d2f[0x0]) throw '*⇨ خطاء ⇦ فين رابط الاغنيه اللي عايز تحملها*';
    await _0x59fafc['reply']('*_⏳اتنظر جاري تحميل الاغنيه⏳_*\x0a\x0a*◉ _𝒁𝒆𝒛𝒐 𝑩𝒐𝒕 ◉*');
    await _0x310b05['sendMessage'](_0x59fafc['chat'], {
        'react': {
            'text': '✅',
            'key': _0x59fafc['key']
        }
    });
    try {
        const _0x54d38a = _0x508d2f[0x1] || '360';
        const _0x171d7c = _0x54d38a + 'p';
        const _0x3dab67 = _0x508d2f[0x0];
        const _0x1aec11 = await youtubedl(_0x3dab67)['catch'](async _0x5cd58f => await youtubedlv2(_0x3dab67));
        const _0xbd628e = await _0x1aec11['video'][_0x171d7c]['download']();
        const _0x2209fa = await _0x1aec11['title'];
        const _0x5032d8 = await _0x1aec11['video'][_0x171d7c]['fileSizeH'];
        const _0x5c397d = (_0x34ee(0x2) + _0x2209fa + '*\x0a❏ *الحجم:* ' + _0x5032d8)['trim']();
        await await _0x310b05['sendMessage'](_0x59fafc['chat'], {
            'document': {
                'url': _0xbd628e
            },
            'caption': _0x5c397d,
            'mimetype': 'video/mp4',
            'fileName': _0x2209fa + '.mp4'
        }, {
            'quoted': _0x59fafc
        });
    } catch {
        try {
            const _0x3b16f9 = await _0x4ef48a('https://api.lolhuman.xyz/api/ytvideo2?apikey=' + lolkeysapi + '&url=' + _0x508d2f[0x0]);
            const _0x5a37d5 = await _0x3b16f9['json']();
            const _0x455877 = _0x5a37d5['result']['title'] || 'error';
            const _0x15f150 = _0x5a37d5['result']['link'];
            const _0xab936 = _0x5a37d5['result']['size'];
            const _0x5d0e4d = ('*◉—⌈📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥⌋—◉*\x0a❏ *الاسم:* ' + _0x455877 + '\x0a❏ *الحجم:* ' + _0xab936)['trim']();
            await _0x310b05['sendMessage'](_0x59fafc['chat'], {
                'document': {
                    'url': _0x15f150
                },
                'caption': _0x5d0e4d,
                'mimetype': 'video/mp4',
                'fileName': _0x455877 + '.mp4'
            }, {
                'quoted': _0x59fafc
            });
        } catch {
            await _0x310b05['reply'](_0x59fafc['chat'], '*[❗] 𝙴𝚁𝚁𝙾𝚁 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾*', _0x59fafc);
        }
    }
};
handler['command'] = /^ytmp4doc|ytvdoc|اغنيه2|ytv.2$/i;
function _0x34ee(_0x5d37ea, _0xdf7290) {
    const _0x34eebc = _0xdf72();
    _0x34ee = function (_0x520c43, _0x14aa11) {
        _0x520c43 = _0x520c43 - 0x0;
        let _0x176a24 = _0x34eebc[_0x520c43];
        return _0x176a24;
    };
    return _0x34ee(_0x5d37ea, _0xdf7290);
}
export default handler;
