(function (_0x4b3490, _0x449158) {
    const _0x15322a = _0x4b3490();
    while (!![]) {
        try {
            const _0x5d331b = -parseInt(_0x354d(0x14)) / 0x1 * (parseInt(_0x354d(0x22)) / 0x2) + -parseInt(_0x354d(0x20)) / 0x3 * (-parseInt(_0x354d(0x11)) / 0x4) + -parseInt(_0x354d(0xd)) / 0x5 * (parseInt(_0x354d(0x1c)) / 0x6) + parseInt(_0x354d(0x3)) / 0x7 * (parseInt(_0x354d(0x1a)) / 0x8) + -parseInt(_0x354d(0x15)) / 0x9 + -parseInt(_0x354d(0x18)) / 0xa * (-parseInt(_0x354d(0x1)) / 0xb) + parseInt(_0x354d(0x1b)) / 0xc * (parseInt(_0x354d(0xa)) / 0xd);
            if (_0x5d331b === _0x449158) {
                break;
            } else {
                _0x15322a['push'](_0x15322a['shift']());
            }
        } catch (_0x476a77) {
            _0x15322a['push'](_0x15322a['shift']());
        }
    }
}(_0x5b73, 0x918ad));
import _0x61257f from 'node-fetch';
import _0x3975e2 from 'yt-search';
import _0x39f6f9 from 'ytdl-core';
function _0x5b73() {
    const _0x21cc4a = ['getInfo', 'fileSizeH', '*[❗] خطأ حاول مجددا*', 'sendFile', 'catch', '682nrolkZ', 'thumbnail', '7myCskH', '$1.', 'length', '*[❗] حصل خطأ *', 'push', 'split', 'microformat', '246987rlPjib', 'https://youtu.be/', 'all', '453745WmOZCy', '.mp3', 'title', 'audio', '28ZdOimF', 'Bytes', '\x0a❏ 🆔 *الرمز:* ', '5385pXmqNz', '539622ofkIwG', 'floor', ' segundo', '134980KBVqoh', 'https://api.lolhuman.xyz/api/ytaudio2?apikey=', '662952njlZYe', '204vyvsfw', '66WefkEV', 'mp3', 'url', 'download', '504120LvgAMb', '*▢ الطلب: ', '284FEnxkN'];
    _0x5b73 = function () {
        return _0x21cc4a;
    };
    return _0x5b73();
}
import _0x27e5fb from 'axios';
import {
    youtubedl,
    youtubedlv2
} from '@bochilteam/scraper';
import {
    bestFormat,
    getUrlDl
} from '../lib/y2dl.js';
const handler = async (_0x146187, {
    conn: _0xf236eb,
    command: _0x47bd8f,
    args: _0x34ce08,
    text: _0x4e0ad7,
    usedPrefix: _0x1076f1
}) => {
    if (!_0x4e0ad7) throw '_*>>🌿قسم اليوتيوب 🌿<<*_\x0a*حط اسم عشان تنزل اللي انت عايزو*\x0a\x0a*—◉ مثل:*\x0a*' + (_0x1076f1 + _0x47bd8f) + ' xxxtntacion sad*\x0a\x0a' + global['veeeee'];
    await _0xf236eb['sendMessage'](_0x146187['chat'], {
        'react': {
            'text': '✅',
            'key': _0x146187['key']
        }
    });
    try {
        const _0x37f8d6 = await search(_0x34ce08['join'](' '));
        let _0x4f9f4b = '';
        if (_0x47bd8f === 'play') {
            _0x4f9f4b = 'audio 🔊';
        } else if (_0x47bd8f === 'play2') {
            _0x4f9f4b = 'video 🎥';
        }
        const _0x8f3933 = ('*◉——⌈🔊 اهلا بك في_ اقسام اليوتيوب_ 🔊⌋——◉*\x0a' + global['anabro'] + '\x0a\x0a❏ 📌 *الاسم:* ' + _0x37f8d6[0x0]['title'] + '\x0a❏ 📆 *التاريخ:* ' + _0x37f8d6[0x0]['ago'] + '\x0a❏ ⌚ *الدقايق:* ' + secondString(_0x37f8d6[0x0]['duration']['seconds']) + '\x0a❏ 👀 *المشاهدات:* ' + ('' + MilesNumber(_0x37f8d6[0x0]['views'])) + '\x0a❏ 👤 *الصانع:* ' + _0x37f8d6[0x0]['author']['name'] + '\x0a❏ ⏯️ *التشغيل:* ' + _0x37f8d6[0x0]['author'][_0x354d(0x1e)] + _0x354d(0x13) + _0x37f8d6[0x0]['videoId'] + '\x0a❏ 🪬 *النوع:* ' + _0x37f8d6[0x0]['type'] + '\x0a❏ 🔗 *الينك:* ' + _0x37f8d6[0x0]['url'] + '\x0a\x0a❏ *_انـتـظـر قليـلاً ' + _0x4f9f4b + ', جـاري تـحـميل طـلبـك．．．_*')['trim']();
        _0xf236eb['sendMessage'](_0x146187['chat'], {
            'image': {
                'url': _0x37f8d6[0x0][_0x354d(0x2)]
            },
            'caption': _0x8f3933
        }, {
            'quoted': _0x146187
        });
        if (_0x47bd8f == 'موسيقي') {
            try {
                const _0x589e81 = await bestFormat(_0x37f8d6[0x0]['url'], 'audio');
                const _0x1440d6 = await getUrlDl(_0x589e81['url']);
                const _0x4406de = await getBuffer(_0x1440d6[_0x354d(0x1f)]);
                _0xf236eb['sendMessage'](_0x146187['chat'], {
                    'audio': _0x4406de,
                    'fileName': _0x37f8d6[0x0]['title'] + '.mp3',
                    'mimetype': 'audio/mpeg'
                }, {
                    'quoted': _0x146187
                });
            } catch (_0x114aa6) {
                console['log'](_0x114aa6);
                try {
                    const _0x2c216a = '128kbps';
                    const _0x2214d4 = _0x37f8d6[0x0]['url'];
                    const _0x557041 = await youtubedl(_0x2214d4)['catch'](async _0x108eb0 => await youtubedlv2(_0x2214d4));
                    const _0x3e2138 = await _0x557041[_0x354d(0x10)][_0x2c216a]['download']();
                    const _0x5c53bb = await _0x557041['title'];
                    const _0x57108d = await _0x557041['audio'][_0x2c216a][_0x354d(0x24)];
                    await _0xf236eb[_0x354d(0x26)](_0x146187['chat'], _0x3e2138, _0x5c53bb + '.mp3', null, _0x146187, ![], {
                        'mimetype': 'audio/mpeg'
                    });
                } catch {
                    try {
                        const _0x240327 = await _0x61257f('https://api.akuari.my.id/downloader/youtube?link=' + _0x37f8d6[0x0][_0x354d(0x1e)]);
                        const _0x2a7299 = await _0x240327['json']();
                        _0xf236eb['sendMessage'](_0x146187['chat'], {
                            'audio': {
                                'url': _0x2a7299[_0x354d(0x1d)][0x1]['url']
                            },
                            'fileName': _0x37f8d6[0x0]['title'] + _0x354d(0xe),
                            'mimetype': 'audio/mpeg'
                        }, {
                            'quoted': _0x146187
                        });
                    } catch {
                        try {
                            const _0x3e8e6c = await _0x61257f('https://api.lolhuman.xyz/api/ytplay?apikey=' + lolkeysapi + '&query=' + _0x37f8d6[0x0]['title']);
                            const _0x400d86 = await _0x3e8e6c['json']();
                            _0xf236eb['sendMessage'](_0x146187['chat'], {
                                'audio': {
                                    'url': _0x400d86['result'][_0x354d(0x10)]['link']
                                },
                                'fileName': _0x37f8d6[0x0]['title'] + '.mp3',
                                'mimetype': 'audio/mpeg'
                            }, {
                                'quoted': _0x146187
                            });
                        } catch {
                            try {
                                const _0x541459 = await _0x61257f(_0x354d(0x19) + lolkeysapi + '&url=' + _0x37f8d6[0x0]['url']);
                                const _0x146cf4 = await _0x541459['json']();
                                const _0x1db3d7 = _0x146cf4['result']['title'] || 'error';
                                await _0xf236eb['sendMessage'](_0x146187['chat'], {
                                    'audio': {
                                        'url': _0x146cf4['result']['link']
                                    },
                                    'fileName': _0x1db3d7 + '.mp3',
                                    'mimetype': 'audio/mpeg'
                                }, {
                                    'quoted': _0x146187
                                });
                            } catch {
                                try {
                                    const _0x184470 = await _0x3975e2(_0x37f8d6[0x0]['url']);
                                    const _0x293ad7 = _0x184470[_0x354d(0xc)]['map'](_0x20d91a => _0x20d91a)['filter'](_0x38efc8 => _0x38efc8['type'] == 'video');
                                    const _0x595ffc = await _0x39f6f9['getInfo'](_0x354d(0xb) + _0x293ad7[0x0]['videoId']);
                                    const _0x3a0c4e = await _0x39f6f9['chooseFormat'](_0x595ffc['formats'], {
                                        'filter': 'audioonly'
                                    });
                                    _0xf236eb['sendMessage'](_0x146187['chat'], {
                                        'audio': {
                                            'url': _0x3a0c4e['url']
                                        },
                                        'fileName': _0x293ad7[0x0]['title'] + '.mp3',
                                        'mimetype': 'audio/mpeg'
                                    }, {
                                        'quoted': _0x146187
                                    });
                                } catch {
                                    await _0xf236eb['reply'](_0x146187['chat'], _0x354d(0x6), _0x146187);
                                }
                            }
                        }
                    }
                }
            }
        }
        if (_0x47bd8f == 'فيديو') {
            try {
                const _0x383ad4 = '360';
                const _0x2963db = _0x383ad4 + 'p';
                const _0x3d7713 = _0x37f8d6[0x0]['url'];
                const _0x79d6b5 = await youtubedl(_0x3d7713)[_0x354d(0x0)](async _0x39b0fd => await youtubedlv2(_0x3d7713));
                const _0x22458b = await _0x79d6b5['video'][_0x2963db]['download']();
                const _0x23f3e0 = await _0x79d6b5['title'];
                const _0x3eb157 = await _0x79d6b5['video'][_0x2963db]['fileSizeH'];
                await await _0xf236eb['sendMessage'](_0x146187['chat'], {
                    'video': {
                        'url': _0x22458b
                    },
                    'fileName': _0x23f3e0 + '.mp4',
                    'mimetype': 'video/mp4',
                    'caption': '*▢ الطلب: ' + _0x23f3e0 + '*\x0a/▢ الحجم: ' + _0x3eb157 + '*',
                    'thumbnail': await _0x61257f(_0x79d6b5['thumbnail'])
                }, {
                    'quoted': _0x146187
                });
            } catch {
                try {
                    const _0x1615cd = await ytMp4(_0x37f8d6[0x0]['url']);
                    await _0xf236eb['sendMessage'](_0x146187['chat'], {
                        'video': {
                            'url': _0x1615cd['result']
                        },
                        'fileName': 'error.mp4',
                        'caption': '_𝒁𝒆𝒛𝒐 𝑩𝒐𝒕_',
                        'thumbnail': _0x1615cd['thumb'],
                        'mimetype': 'video/mp4'
                    }, {
                        'quoted': _0x146187
                    });
                } catch {
                    try {
                        const _0x427eb7 = await _0x61257f('https://api.lolhuman.xyz/api/ytvideo2?apikey=' + lolkeysapi + '&url=' + _0x37f8d6[0x0]['url']);
                        const _0x5a4f27 = await _0x427eb7['json']();
                        const _0x2052f1 = _0x5a4f27['result']['title'] || 'error';
                        const _0x4c89cb = _0x5a4f27['result']['link'];
                        const _0x45567e = _0x5a4f27['result']['size'];
                        const _0x2a8196 = _0x5a4f27['result']['thumbnail'];
                        await _0xf236eb['sendMessage'](_0x146187['chat'], {
                            'video': {
                                'url': _0x4c89cb
                            },
                            'fileName': _0x2052f1 + '.mp4',
                            'mimetype': 'video/mp4',
                            'caption': _0x354d(0x21) + _0x2052f1 + '*\x0a*▢ الحجم: ' + _0x45567e + '*',
                            'thumbnail': await _0x61257f(_0x2a8196)
                        }, {
                            'quoted': _0x146187
                        });
                    } catch {
                        await _0xf236eb['reply'](_0x146187['chat'], _0x354d(0x25), _0x146187);
                    }
                }
            }
        }
    } catch {
        throw '*[❗تحذير❗] خطأ حاول مجدداً*';
    }
};
handler['help'] = ['play', 'play2']['map'](_0x402ce4 => _0x402ce4 + ' < busqueda >');
handler['tags'] = ['downloader'];
function _0x354d(_0x420e5b, _0x5b73f2) {
    const _0x354d52 = _0x5b73();
    _0x354d = function (_0xd00cd0, _0x31404a) {
        _0xd00cd0 = _0xd00cd0 - 0x0;
        let _0x55f98a = _0x354d52[_0xd00cd0];
        return _0x55f98a;
    };
    return _0x354d(_0x420e5b, _0x5b73f2);
}
handler['command'] = /^(موسيقي|فيديو)$/i;
export default handler;
async function search(_0x592f23, _0x3f1299 = {}) {
    const _0x3bb15e = await _0x3975e2['search']({
        'query': _0x592f23,
        'hl': 'ar',
        'gl': 'AR',
        ..._0x3f1299
    });
    return _0x3bb15e['videos'];
}
function MilesNumber(_0xffc0e1) {
    const _0x3f35ff = /(\d)(?=(\d{3})+(?!\d))/g;
    const _0x45bbc4 = _0x354d(0x4);
    const _0x3fcb14 = _0xffc0e1['toString']()[_0x354d(0x8)]('.');
    _0x3fcb14[0x0] = _0x3fcb14[0x0]['replace'](_0x3f35ff, _0x45bbc4);
    return _0x3fcb14[0x1] ? _0x3fcb14['join']('.') : _0x3fcb14[0x0];
}
function secondString(_0x17e4fb) {
    _0x17e4fb = Number(_0x17e4fb);
    const _0x40aa22 = Math['floor'](_0x17e4fb / (0xe10 * 0x18));
    const _0x4d0faf = Math['floor'](_0x17e4fb % (0xe10 * 0x18) / 0xe10);
    const _0x54534f = Math[_0x354d(0x16)](_0x17e4fb % 0xe10 / 0x3c);
    const _0x3d8ea9 = Math['floor'](_0x17e4fb % 0x3c);
    const _0x5746a5 = _0x40aa22 > 0x0 ? _0x40aa22 + (_0x40aa22 == 0x1 ? ' día, ' : ' días, ') : '';
    const _0x4e503b = _0x4d0faf > 0x0 ? _0x4d0faf + (_0x4d0faf == 0x1 ? ' hora, ' : ' horas, ') : '';
    const _0x267057 = _0x54534f > 0x0 ? _0x54534f + (_0x54534f == 0x1 ? ' minuto, ' : ' minutos, ') : '';
    const _0x1282ad = _0x3d8ea9 > 0x0 ? _0x3d8ea9 + (_0x3d8ea9 == 0x1 ? _0x354d(0x17) : ' segundos') : '';
    return _0x5746a5 + _0x4e503b + _0x267057 + _0x1282ad;
}
function bytesToSize(_0x59fbd0) {
    return new Promise((_0x2b2f08, _0x1da623) => {
        const _0x2a5e2f = [_0x354d(0x12), 'KB', 'MB', 'GB', 'TB'];
        if (_0x59fbd0 === 0x0) return 'n/a';
        const _0x88845 = parseInt(Math['floor'](Math['log'](_0x59fbd0) / Math['log'](0x400)), 0xa);
        if (_0x88845 === 0x0) _0x2b2f08(_0x59fbd0 + ' ' + _0x2a5e2f[_0x88845]);
        _0x2b2f08((_0x59fbd0 / 0x400 ** _0x88845)['toFixed'](0x1) + ' ' + _0x2a5e2f[_0x88845]);
    });
}
async function ytMp3(_0x4c0516) {
    return new Promise((_0x23be52, _0x2fd648) => {
        _0x39f6f9['getInfo'](_0x4c0516)['then'](async _0x2c6a8e => {
            const _0x43d3d0 = [];
            for (let _0x2b00c3 = 0x0; _0x2b00c3 < _0x2c6a8e['formats']['length']; _0x2b00c3++) {
                const _0x4b5193 = _0x2c6a8e['formats'][_0x2b00c3];
                if (_0x4b5193['mimeType'] == 'audio/webm; codecs=\"opus\"') {
                    const {
                        contentLength: _0x120ab2
                    } = _0x4b5193;
                    const _0x24572f = await bytesToSize(_0x120ab2);
                    _0x43d3d0[_0x2b00c3] = {
                        'audio': _0x4b5193['url'],
                        'size': _0x24572f
                    };
                }
            }
            const _0x1daa79 = _0x43d3d0['filter'](_0x334308 => _0x334308[_0x354d(0x10)] != undefined && _0x334308['size'] != undefined);
            const _0x123924 = await _0x27e5fb['get']('https://tinyurl.com/api-create.php?url=' + _0x1daa79[0x0]['audio']);
            const _0x21c5ce = _0x123924['data'];
            const _0x192b33 = _0x2c6a8e['videoDetails'][_0x354d(0xf)];
            const _0x2c5e99 = _0x2c6a8e['player_response'][_0x354d(0x9)]['playerMicroformatRenderer']['thumbnail']['thumbnails'][0x0]['url'];
            _0x23be52({
                'title': _0x192b33,
                'result': _0x21c5ce,
                'result2': _0x1daa79,
                'thumb': _0x2c5e99
            });
        })['catch'](_0x2fd648);
    });
}
async function ytMp4(_0x19a282) {
    return new Promise(async (_0x4a5003, _0x82fe56) => {
        _0x39f6f9[_0x354d(0x23)](_0x19a282)['then'](async _0x4c6bf3 => {
            const _0x587934 = [];
            for (let _0x59048c = 0x0; _0x59048c < _0x4c6bf3['formats']['length']; _0x59048c++) {
                const _0x18cc8b = _0x4c6bf3['formats'][_0x59048c];
                if (_0x18cc8b['container'] == 'mp4' && _0x18cc8b['hasVideo'] == !![] && _0x18cc8b['hasAudio'] == !![]) {
                    const {
                        qualityLabel: _0x5ec558,
                        contentLength: _0x3ca91c
                    } = _0x18cc8b;
                    const _0x47c67c = await bytesToSize(_0x3ca91c);
                    _0x587934[_0x59048c] = {
                        'video': _0x18cc8b['url'],
                        'quality': _0x5ec558,
                        'size': _0x47c67c
                    };
                }
            }
            const _0x127fdc = _0x587934['filter'](_0x4205e4 => _0x4205e4['video'] != undefined && _0x4205e4['size'] != undefined && _0x4205e4['quality'] != undefined);
            const _0x92e50a = await _0x27e5fb['get']('https://tinyurl.com/api-create.php?url=' + _0x127fdc[0x0]['video']);
            const _0x1a9a04 = _0x92e50a['data'];
            const _0x7aa3ed = _0x4c6bf3['videoDetails']['title'];
            const _0x191f18 = _0x4c6bf3['player_response'][_0x354d(0x9)]['playerMicroformatRenderer']['thumbnail']['thumbnails'][0x0]['url'];
            _0x4a5003({
                'title': _0x7aa3ed,
                'result': _0x1a9a04,
                'rersult2': _0x127fdc[0x0]['video'],
                'thumb': _0x191f18
            });
        })['catch'](_0x82fe56);
    });
}
async function ytPlay(_0x576a27) {
    return new Promise((_0x1bd39b, _0x37a064) => {
        _0x3975e2(_0x576a27)['then'](async _0x4a16c9 => {
            const _0x33f50d = _0x4a16c9['videos']['slice'](0x0, 0x5);
            const _0x13a147 = [];
            for (let _0x61b487 = 0x0; _0x61b487 < _0x33f50d[_0x354d(0x5)]; _0x61b487++) {
                _0x13a147['push'](_0x33f50d[_0x61b487]['url']);
            }
            const _0x3d8eb3 = _0x13a147[0x0];
            const _0x5aacf0 = await ytMp3(_0x3d8eb3);
            _0x1bd39b(_0x5aacf0);
        })['catch'](_0x37a064);
    });
}
async function ytPlayVid(_0x98075f) {
    return new Promise((_0x41229b, _0x4c0bed) => {
        _0x3975e2(_0x98075f)['then'](async _0x32070c => {
            const _0x36c938 = _0x32070c['videos']['slice'](0x0, 0x5);
            const _0x15b008 = [];
            for (let _0x1507b8 = 0x0; _0x1507b8 < _0x36c938['length']; _0x1507b8++) {
                _0x15b008[_0x354d(0x7)](_0x36c938[_0x1507b8][_0x354d(0x1e)]);
            }
            const _0x40e122 = _0x15b008[0x0];
            const _0x3da742 = await ytMp4(_0x40e122);
            _0x41229b(_0x3da742);
        })['catch'](_0x4c0bed);
    });
}
const getBuffer = async (_0x125b32, _0x43806f) => {
    try {
        _0x43806f ? _0x43806f : {};
        const _0x45a3da = await _0x27e5fb({
            'method': 'get',
            'url': _0x125b32,
            'headers': {
                'DNT': 0x1,
                'Upgrade-Insecure-Request': 0x1
            },
            ..._0x43806f,
            'responseType': 'arraybuffer'
        });
        return _0x45a3da['data'];
    } catch (_0x3f9a9a) {
        console['log']('Error : ' + _0x3f9a9a);
    }
};
