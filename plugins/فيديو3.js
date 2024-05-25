(function (_0x144904, _0x31045c) {
    const _0x453492 = _0x144904();
    while (!![]) {
        try {
            const _0x43d859 = parseInt(_0x5e46(0x10)) / 0x1 * (-parseInt(_0x5e46(0x2)) / 0x2) + parseInt(_0x5e46(0x7)) / 0x3 + parseInt(_0x5e46(0xa)) / 0x4 * (-parseInt(_0x5e46(0x3)) / 0x5) + -parseInt(_0x5e46(0x12)) / 0x6 + parseInt(_0x5e46(0xe)) / 0x7 * (parseInt(_0x5e46(0x4)) / 0x8) + -parseInt(_0x5e46(0x11)) / 0x9 * (parseInt(_0x5e46(0xc)) / 0xa) + parseInt(_0x5e46(0xb)) / 0xb;
            if (_0x43d859 === _0x31045c) {
                break;
            } else {
                _0x453492['push'](_0x453492['shift']());
            }
        } catch (_0x307bb7) {
            _0x453492['push'](_0x453492['shift']());
        }
    }
}(_0x3609, 0x26ef2));
import _0x42cddd from 'node-fetch';
import _0x492f33 from 'yt-search';
import _0x1cc9e0 from 'ytdl-core';
import _0x12cc46 from 'axios';
const handler = async (_0x5afbfb, {
    command: _0xc6092b,
    usedPrefix: _0x5c8cc1,
    conn: _0x48d33a,
    text: _0x15f508
}) => {
    if (!_0x15f508) throw '*[🎶اغاني🎶] اكتب اسم الاغنيه او الفيديو اللي بتبحث عنها في اليوتيوب*\x0a\x0a*—◉ مـثـل:*\x0a*' + (_0x5c8cc1 + _0xc6092b) + ' Eminem 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕*\x0a°°°°°°°°°°°°°°°\x0a' + global['veeeee'];
    await _0x48d33a['sendMessage'](_0x5afbfb['chat'], {
        'react': {
            'text': '✅',
            'key': _0x5afbfb['key']
        }
    });
    try {
        if (_0xc6092b == _0x5e46(0x14)) {
            _0x48d33a['reply'](_0x5afbfb['chat'], '*_⏳انـتـظر جـاري تـحـميل الاغـنيه...⏳_*', _0x5afbfb);
            try {
                const _0x7ee21f = await ytPlay(_0x15f508);
                const _0x25b085 = _0x7ee21f['result2']?. [0x0]?. ['audio'] || _0x7ee21f['result2']?. [0x1]?. ['audio'] || _0x7ee21f['result2']?. [0x2]?. ['audio'] || null;
                const _0x347e74 = await _0x48d33a['sendMessage'](_0x5afbfb['chat'], {
                    'audio': {
                        'url': _0x25b085
                    },
                    'fileName': 'error.mp3',
                    'mimetype': 'audio/mpeg'
                }, {
                    'quoted': _0x5afbfb
                });
                if (!_0x347e74) {
                    throw new Error('*[❗]الحجم كبير جداً لا يمكنني ارساله...*');
                }
            } catch {
                const _0x165b85 = await _0x42cddd('https://api.lolhuman.xyz/api/ytplay2?apikey=' + lolkeysapi + '&query=' + _0x15f508);
                const _0x2da2da = await _0x165b85['json']();
                const _0x19c4c4 = await _0x48d33a['sendMessage'](_0x5afbfb['chat'], {
                    'audio': {
                        'url': _0x2da2da['result']['audio']
                    },
                    'fileName': 'error.mp3',
                    'mimetype': 'audio/mpeg'
                }, {
                    'quoted': _0x5afbfb
                });
                if (!_0x19c4c4) _0x19c4c4 = await _0x48d33a['sendFile'](_0x5afbfb['chat'], _0x2da2da['result']['audio'], 'error.mp3', null, _0x5afbfb, ![], {
                    'mimetype': _0x5e46(0xd)
                });
            }
        }
        if (_0xc6092b == 'فيديو2') {
            _0x48d33a['reply'](_0x5afbfb['chat'], '*_⏳انـتـظر جـاري تـحـميل الفـيديـو..⏳_*', _0x5afbfb);
            try {
                const _0x344748 = await ytPlayVid(_0x15f508);
                const _0x375e9a = await _0x48d33a[_0x5e46(0x5)](_0x5afbfb['chat'], {
                    'video': {
                        'url': _0x344748['result']
                    },
                    'fileName': 'error.mp4',
                    'caption': '_𝒁𝒆𝒛𝒐 𝑩𝒐𝒕_',
                    'thumbnail': _0x344748['thumb'],
                    'mimetype': 'video/mp4'
                }, {
                    'quoted': _0x5afbfb
                });
                if (!_0x375e9a) {
                    throw new Error(_0x5e46(0x0));
                }
            } catch {
                const _0x6e5264 = await _0x42cddd('https://api.lolhuman.xyz/api/ytplay2?apikey=' + lolkeysapi + '&query=' + _0x15f508);
                const _0x1f2f2a = await _0x6e5264['json']();
                await _0x48d33a['sendFile'](_0x5afbfb['chat'], _0x1f2f2a['result']['video'], 'error.mp4', '_𝐊𝐚𝐧𝐞𝐤𝐢 - 𝐁𝐨𝐭_', _0x5afbfb);
            }
        }
    } catch {
        throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*';
    }
};
function _0x3609() {
    const _0x2fdd16 = ['901765nRVRWz', '8KsQGLI', 'sendMessage', 'container', '609393iDJTTx', 'catch', 'audio/webm; codecs=\"opus\"', '4hfEGFy', '3426456eObBtF', '1110890kbecOt', 'audio/mpeg', '1203335WjuQTl', 'url', '1ZRczNz', '9QyeBOs', '1296570UmGTTL', 'push', 'شغل', '*[❗]الحجم كبير جداً لا يمكنني ارساله...*', 'videoDetails', '39042TOQtHZ'];
    _0x3609 = function () {
        return _0x2fdd16;
    };
    return _0x3609();
}
handler['help'] = ['2شغل', 'فيديو']['map'](_0x31bea3 => _0x31bea3 + ' <texto>');
function _0x5e46(_0xc7f4d2, _0x3609e5) {
    const _0x5e460b = _0x3609();
    _0x5e46 = function (_0x22399e, _0x1e35c7) {
        _0x22399e = _0x22399e - 0x0;
        let _0x347964 = _0x5e460b[_0x22399e];
        return _0x347964;
    };
    return _0x5e46(_0xc7f4d2, _0x3609e5);
}
handler['tags'] = ['downloader'];
handler['command'] = ['2شغل', 'فيديو'];
export default handler;
function bytesToSize(_0x3bc231) {
    return new Promise((_0x59f909, _0x5ac2d5) => {
        const _0x504351 = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (_0x3bc231 === 0x0) return 'n/a';
        const _0x3525ac = parseInt(Math['floor'](Math['log'](_0x3bc231) / Math['log'](0x400)), 0xa);
        if (_0x3525ac === 0x0) _0x59f909(_0x3bc231 + ' ' + _0x504351[_0x3525ac]);
        _0x59f909((_0x3bc231 / 0x400 ** _0x3525ac)['toFixed'](0x1) + ' ' + _0x504351[_0x3525ac]);
    });
}
async function ytMp3(_0x45d292) {
    return new Promise((_0x2d7900, _0x2ad396) => {
        _0x1cc9e0['getInfo'](_0x45d292)['then'](async _0x151cd6 => {
            const _0xeb922d = [];
            for (let _0x45433f = 0x0; _0x45433f < _0x151cd6['formats']['length']; _0x45433f++) {
                const _0x4654f9 = _0x151cd6['formats'][_0x45433f];
                if (_0x4654f9['mimeType'] == _0x5e46(0x9)) {
                    const {
                        contentLength: _0x181fd6
                    } = _0x4654f9;
                    const _0x3eed8b = await bytesToSize(_0x181fd6);
                    _0xeb922d[_0x45433f] = {
                        'audio': _0x4654f9['url'],
                        'size': _0x3eed8b
                    };
                }
            }
            const _0x1271fb = _0xeb922d['filter'](_0x20aaf5 => _0x20aaf5['audio'] != undefined && _0x20aaf5['size'] != undefined);
            const _0x387dbd = await _0x12cc46['get']('https://tinyurl.com/api-create.php?url=' + _0x1271fb[0x0]['audio']);
            const _0x5f344a = _0x387dbd['data'];
            const _0x219b04 = _0x151cd6['videoDetails']['title'];
            const _0xea708a = _0x151cd6['player_response']['microformat']['playerMicroformatRenderer']['thumbnail']['thumbnails'][0x0]['url'];
            _0x2d7900({
                'title': _0x219b04,
                'result': _0x5f344a,
                'result2': _0x1271fb,
                'thumb': _0xea708a
            });
        })['catch'](_0x2ad396);
    });
}
async function ytMp4(_0x19315a) {
    return new Promise(async (_0x48b9d4, _0x20bc1c) => {
        _0x1cc9e0['getInfo'](_0x19315a)['then'](async _0x545984 => {
            const _0x4b978a = [];
            for (let _0x546e96 = 0x0; _0x546e96 < _0x545984['formats']['length']; _0x546e96++) {
                const _0x34ec81 = _0x545984['formats'][_0x546e96];
                if (_0x34ec81[_0x5e46(0x6)] == 'mp4' && _0x34ec81['hasVideo'] == !![] && _0x34ec81['hasAudio'] == !![]) {
                    const {
                        qualityLabel: _0x55dfcd,
                        contentLength: _0x191d47
                    } = _0x34ec81;
                    const _0x1c4086 = await bytesToSize(_0x191d47);
                    _0x4b978a[_0x546e96] = {
                        'video': _0x34ec81['url'],
                        'quality': _0x55dfcd,
                        'size': _0x1c4086
                    };
                }
            }
            const _0x43b605 = _0x4b978a['filter'](_0x2d5263 => _0x2d5263['video'] != undefined && _0x2d5263['size'] != undefined && _0x2d5263['quality'] != undefined);
            const _0x1fb7d7 = await _0x12cc46['get']('https://tinyurl.com/api-create.php?url=' + _0x43b605[0x0]['video']);
            const _0x155b00 = _0x1fb7d7['data'];
            const _0x87cd4f = _0x545984[_0x5e46(0x1)]['title'];
            const _0x502387 = _0x545984['player_response']['microformat']['playerMicroformatRenderer']['thumbnail']['thumbnails'][0x0][_0x5e46(0xf)];
            _0x48b9d4({
                'title': _0x87cd4f,
                'result': _0x155b00,
                'rersult2': _0x43b605[0x0]['video'],
                'thumb': _0x502387
            });
        })[_0x5e46(0x8)](_0x20bc1c);
    });
}
async function ytPlay(_0xdb6fa5) {
    return new Promise((_0x5cf94e, _0x37c743) => {
        _0x492f33(_0xdb6fa5)['then'](async _0xe95e30 => {
            const _0x1a782f = _0xe95e30['videos']['slice'](0x0, 0x5);
            const _0x5b3d8f = [];
            for (let _0x3fb694 = 0x0; _0x3fb694 < _0x1a782f['length']; _0x3fb694++) {
                _0x5b3d8f[_0x5e46(0x13)](_0x1a782f[_0x3fb694]['url']);
            }
            const _0x338988 = _0x5b3d8f[0x0];
            const _0xdec928 = await ytMp3(_0x338988);
            _0x5cf94e(_0xdec928);
        })['catch'](_0x37c743);
    });
}
async function ytPlayVid(_0x3c0021) {
    return new Promise((_0x26c1e5, _0x31f807) => {
        _0x492f33(_0x3c0021)['then'](async _0x16f4d7 => {
            const _0x4f83b1 = _0x16f4d7['videos']['slice'](0x0, 0x5);
            const _0x1723ee = [];
            for (let _0x112cab = 0x0; _0x112cab < _0x4f83b1['length']; _0x112cab++) {
                _0x1723ee['push'](_0x4f83b1[_0x112cab]['url']);
            }
            const _0x3f0aa6 = _0x1723ee[0x0];
            const _0xda7642 = await ytMp4(_0x3f0aa6);
            _0x26c1e5(_0xda7642);
        })['catch'](_0x31f807);
    });
                       }
