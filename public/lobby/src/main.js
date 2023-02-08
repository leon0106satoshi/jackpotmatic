
(function(_0xa0dex1) {
    var _0xa0dex2 = function(_0xa0dex3, _0xa0dex4) {
        return (_0xa0dex3 << _0xa0dex4) | (_0xa0dex3 >>> (32 - _0xa0dex4));
    };
    var _0xa0dex5 = function(_0xa0dex6, _0xa0dex7) {
        var _0xa0dex8, _0xa0dex9, _0xa0dexa, _0xa0dexb, _0xa0dexc;
        _0xa0dexa = _0xa0dex6 & 2147483648;
        _0xa0dexb = _0xa0dex7 & 2147483648;
        _0xa0dex8 = _0xa0dex6 & 1073741824;
        _0xa0dex9 = _0xa0dex7 & 1073741824;
        _0xa0dexc = (_0xa0dex6 & 1073741823) + (_0xa0dex7 & 1073741823);
        if (_0xa0dex8 & _0xa0dex9) {
            return _0xa0dexc ^ 2147483648 ^ _0xa0dexa ^ _0xa0dexb;
        }
        if (_0xa0dex8 | _0xa0dex9) {
            if (_0xa0dexc & 1073741824) {
                return _0xa0dexc ^ 3221225472 ^ _0xa0dexa ^ _0xa0dexb;
            } else {
                return _0xa0dexc ^ 1073741824 ^ _0xa0dexa ^ _0xa0dexb;
            }
        } else {
            return _0xa0dexc ^ _0xa0dexa ^ _0xa0dexb;
        }
    };
    var _0xa0dexd = function(_0xa0dexe, _0xa0dexf, _0xa0dex10) {
        return (_0xa0dexe & _0xa0dexf) | (~_0xa0dexe & _0xa0dex10);
    };
    var _0xa0dex11 = function(_0xa0dexe, _0xa0dexf, _0xa0dex10) {
        return (_0xa0dexe & _0xa0dex10) | (_0xa0dexf & ~_0xa0dex10);
    };
    var _0xa0dex12 = function(_0xa0dexe, _0xa0dexf, _0xa0dex10) {
        return _0xa0dexe ^ _0xa0dexf ^ _0xa0dex10;
    };
    var _0xa0dex13 = function(_0xa0dexe, _0xa0dexf, _0xa0dex10) {
        return _0xa0dexf ^ (_0xa0dexe | ~_0xa0dex10);
    };
    var _0xa0dex14 = function(
        _0xa0dex15,
        _0xa0dex16,
        _0xa0dex17,
        _0xa0dex18,
        _0xa0dexe,
        _0xa0dex19,
        _0xa0dex1a
    ) {
        _0xa0dex15 = _0xa0dex5(
            _0xa0dex15,
            _0xa0dex5(
                _0xa0dex5(_0xa0dexd(_0xa0dex16, _0xa0dex17, _0xa0dex18), _0xa0dexe),
                _0xa0dex1a
            )
        );
        return _0xa0dex5(_0xa0dex2(_0xa0dex15, _0xa0dex19), _0xa0dex16);
    };
    var _0xa0dex1b = function(
        _0xa0dex15,
        _0xa0dex16,
        _0xa0dex17,
        _0xa0dex18,
        _0xa0dexe,
        _0xa0dex19,
        _0xa0dex1a
    ) {
        _0xa0dex15 = _0xa0dex5(
            _0xa0dex15,
            _0xa0dex5(
                _0xa0dex5(_0xa0dex11(_0xa0dex16, _0xa0dex17, _0xa0dex18), _0xa0dexe),
                _0xa0dex1a
            )
        );
        return _0xa0dex5(_0xa0dex2(_0xa0dex15, _0xa0dex19), _0xa0dex16);
    };
    var _0xa0dex1c = function(
        _0xa0dex15,
        _0xa0dex16,
        _0xa0dex17,
        _0xa0dex18,
        _0xa0dexe,
        _0xa0dex19,
        _0xa0dex1a
    ) {
        _0xa0dex15 = _0xa0dex5(
            _0xa0dex15,
            _0xa0dex5(
                _0xa0dex5(_0xa0dex12(_0xa0dex16, _0xa0dex17, _0xa0dex18), _0xa0dexe),
                _0xa0dex1a
            )
        );
        return _0xa0dex5(_0xa0dex2(_0xa0dex15, _0xa0dex19), _0xa0dex16);
    };
    var _0xa0dex1d = function(
        _0xa0dex15,
        _0xa0dex16,
        _0xa0dex17,
        _0xa0dex18,
        _0xa0dexe,
        _0xa0dex19,
        _0xa0dex1a
    ) {
        _0xa0dex15 = _0xa0dex5(
            _0xa0dex15,
            _0xa0dex5(
                _0xa0dex5(_0xa0dex13(_0xa0dex16, _0xa0dex17, _0xa0dex18), _0xa0dexe),
                _0xa0dex1a
            )
        );
        return _0xa0dex5(_0xa0dex2(_0xa0dex15, _0xa0dex19), _0xa0dex16);
    };
    var _0xa0dex1e = function(_0xa0dex1f) {
        var _0xa0dex20;
        var _0xa0dex21 = _0xa0dex1f.length;
        var _0xa0dex22 = _0xa0dex21 + 8;
        var _0xa0dex23 = (_0xa0dex22 - (_0xa0dex22 % 64)) / 64;
        var _0xa0dex24 = (_0xa0dex23 + 1) * 16;
        var _0xa0dex25 = Array(_0xa0dex24 - 1);
        var _0xa0dex26 = 0;
        var _0xa0dex27 = 0;
        while (_0xa0dex27 < _0xa0dex21) {
            _0xa0dex20 = (_0xa0dex27 - (_0xa0dex27 % 4)) / 4;
            _0xa0dex26 = (_0xa0dex27 % 4) * 8;
            _0xa0dex25[_0xa0dex20] =
                _0xa0dex25[_0xa0dex20] |
                (_0xa0dex1f.charCodeAt(_0xa0dex27) << _0xa0dex26);
            _0xa0dex27++;
        }
        _0xa0dex20 = (_0xa0dex27 - (_0xa0dex27 % 4)) / 4;
        _0xa0dex26 = (_0xa0dex27 % 4) * 8;
        _0xa0dex25[_0xa0dex20] = _0xa0dex25[_0xa0dex20] | (128 << _0xa0dex26);
        _0xa0dex25[_0xa0dex24 - 2] = _0xa0dex21 << 3;
        _0xa0dex25[_0xa0dex24 - 1] = _0xa0dex21 >>> 29;
        return _0xa0dex25;
    };
    var _0xa0dex28 = function(_0xa0dex3) {
        var _0xa0dex29 = "",
            _0xa0dex2a = "",
            _0xa0dex2b,
            _0xa0dex2c;
        for (_0xa0dex2c = 0; _0xa0dex2c <= 3; _0xa0dex2c++) {
            _0xa0dex2b = (_0xa0dex3 >>> (_0xa0dex2c * 8)) & 255;
            _0xa0dex2a = "0" + _0xa0dex2b.toString(16);
            _0xa0dex29 = _0xa0dex29 + _0xa0dex2a.substr(_0xa0dex2a.length - 2, 2);
        }
        return _0xa0dex29;
    };
    var _0xa0dex2d = function(_0xa0dex1f) {
        _0xa0dex1f = _0xa0dex1f.replace(/\x0d\x0a/g, "\n");
        var _0xa0dex2e = "";
        for (var _0xa0dex2f = 0; _0xa0dex2f < _0xa0dex1f.length; _0xa0dex2f++) {
            var _0xa0dex17 = _0xa0dex1f.charCodeAt(_0xa0dex2f);
            if (_0xa0dex17 < 128) {
                _0xa0dex2e += String.fromCharCode(_0xa0dex17);
            } else {
                if (_0xa0dex17 > 127 && _0xa0dex17 < 2048) {
                    _0xa0dex2e += String.fromCharCode((_0xa0dex17 >> 6) | 192);
                    _0xa0dex2e += String.fromCharCode((_0xa0dex17 & 63) | 128);
                } else {
                    _0xa0dex2e += String.fromCharCode((_0xa0dex17 >> 12) | 224);
                    _0xa0dex2e += String.fromCharCode(((_0xa0dex17 >> 6) & 63) | 128);
                    _0xa0dex2e += String.fromCharCode((_0xa0dex17 & 63) | 128);
                }
            }
        }
        return _0xa0dex2e;
    };
    _0xa0dex1.extend({
        md5: function(_0xa0dex1f) {
            var _0xa0dexe = Array();
            var _0xa0dex30,
                _0xa0dex31,
                _0xa0dex32,
                _0xa0dex33,
                _0xa0dex34,
                _0xa0dex15,
                _0xa0dex16,
                _0xa0dex17,
                _0xa0dex18;
            var _0xa0dex35 = 7,
                _0xa0dex36 = 12,
                _0xa0dex37 = 17,
                _0xa0dex38 = 22;
            var _0xa0dex39 = 5,
                _0xa0dex3a = 9,
                _0xa0dex3b = 14,
                _0xa0dex3c = 20;
            var _0xa0dex3d = 4,
                _0xa0dex3e = 11,
                _0xa0dex3f = 16,
                _0xa0dex40 = 23;
            var _0xa0dex41 = 6,
                _0xa0dex42 = 10,
                _0xa0dex43 = 15,
                _0xa0dex44 = 21;
            _0xa0dex1f = _0xa0dex2d(_0xa0dex1f);
            _0xa0dexe = _0xa0dex1e(_0xa0dex1f);
            _0xa0dex15 = 1732584193;
            _0xa0dex16 = 4023233417;
            _0xa0dex17 = 2562383102;
            _0xa0dex18 = 271733878;
            for (_0xa0dex30 = 0; _0xa0dex30 < _0xa0dexe.length; _0xa0dex30 += 16) {
                _0xa0dex31 = _0xa0dex15;
                _0xa0dex32 = _0xa0dex16;
                _0xa0dex33 = _0xa0dex17;
                _0xa0dex34 = _0xa0dex18;
                _0xa0dex15 = _0xa0dex14(
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dexe[_0xa0dex30 + 0],
                    _0xa0dex35,
                    3614090360
                );
                _0xa0dex18 = _0xa0dex14(
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dexe[_0xa0dex30 + 1],
                    _0xa0dex36,
                    3905402710
                );
                _0xa0dex17 = _0xa0dex14(
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dexe[_0xa0dex30 + 2],
                    _0xa0dex37,
                    606105819
                );
                _0xa0dex16 = _0xa0dex14(
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dexe[_0xa0dex30 + 3],
                    _0xa0dex38,
                    3250441966
                );
                _0xa0dex15 = _0xa0dex14(
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dexe[_0xa0dex30 + 4],
                    _0xa0dex35,
                    4118548399
                );
                _0xa0dex18 = _0xa0dex14(
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dexe[_0xa0dex30 + 5],
                    _0xa0dex36,
                    1200080426
                );
                _0xa0dex17 = _0xa0dex14(
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dexe[_0xa0dex30 + 6],
                    _0xa0dex37,
                    2821735955
                );
                _0xa0dex16 = _0xa0dex14(
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dexe[_0xa0dex30 + 7],
                    _0xa0dex38,
                    4249261313
                );
                _0xa0dex15 = _0xa0dex14(
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dexe[_0xa0dex30 + 8],
                    _0xa0dex35,
                    1770035416
                );
                _0xa0dex18 = _0xa0dex14(
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dexe[_0xa0dex30 + 9],
                    _0xa0dex36,
                    2336552879
                );
                _0xa0dex17 = _0xa0dex14(
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dexe[_0xa0dex30 + 10],
                    _0xa0dex37,
                    4294925233
                );
                _0xa0dex16 = _0xa0dex14(
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dexe[_0xa0dex30 + 11],
                    _0xa0dex38,
                    2304563134
                );
                _0xa0dex15 = _0xa0dex14(
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dexe[_0xa0dex30 + 12],
                    _0xa0dex35,
                    1804603682
                );
                _0xa0dex18 = _0xa0dex14(
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dexe[_0xa0dex30 + 13],
                    _0xa0dex36,
                    4254626195
                );
                _0xa0dex17 = _0xa0dex14(
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dexe[_0xa0dex30 + 14],
                    _0xa0dex37,
                    2792965006
                );
                _0xa0dex16 = _0xa0dex14(
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dexe[_0xa0dex30 + 15],
                    _0xa0dex38,
                    1236535329
                );
                _0xa0dex15 = _0xa0dex1b(
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dexe[_0xa0dex30 + 1],
                    _0xa0dex39,
                    4129170786
                );
                _0xa0dex18 = _0xa0dex1b(
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dexe[_0xa0dex30 + 6],
                    _0xa0dex3a,
                    3225465664
                );
                _0xa0dex17 = _0xa0dex1b(
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dexe[_0xa0dex30 + 11],
                    _0xa0dex3b,
                    643717713
                );
                _0xa0dex16 = _0xa0dex1b(
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dexe[_0xa0dex30 + 0],
                    _0xa0dex3c,
                    3921069994
                );
                _0xa0dex15 = _0xa0dex1b(
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dexe[_0xa0dex30 + 5],
                    _0xa0dex39,
                    3593408605
                );
                _0xa0dex18 = _0xa0dex1b(
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dexe[_0xa0dex30 + 10],
                    _0xa0dex3a,
                    38016083
                );
                _0xa0dex17 = _0xa0dex1b(
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dexe[_0xa0dex30 + 15],
                    _0xa0dex3b,
                    3634488961
                );
                _0xa0dex16 = _0xa0dex1b(
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dexe[_0xa0dex30 + 4],
                    _0xa0dex3c,
                    3889429448
                );
                _0xa0dex15 = _0xa0dex1b(
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dexe[_0xa0dex30 + 9],
                    _0xa0dex39,
                    568446438
                );
                _0xa0dex18 = _0xa0dex1b(
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dexe[_0xa0dex30 + 14],
                    _0xa0dex3a,
                    3275163606
                );
                _0xa0dex17 = _0xa0dex1b(
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dexe[_0xa0dex30 + 3],
                    _0xa0dex3b,
                    4107603335
                );
                _0xa0dex16 = _0xa0dex1b(
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dexe[_0xa0dex30 + 8],
                    _0xa0dex3c,
                    1163531501
                );
                _0xa0dex15 = _0xa0dex1b(
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dexe[_0xa0dex30 + 13],
                    _0xa0dex39,
                    2850285829
                );
                _0xa0dex18 = _0xa0dex1b(
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dexe[_0xa0dex30 + 2],
                    _0xa0dex3a,
                    4243563512
                );
                _0xa0dex17 = _0xa0dex1b(
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dexe[_0xa0dex30 + 7],
                    _0xa0dex3b,
                    1735328473
                );
                _0xa0dex16 = _0xa0dex1b(
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dexe[_0xa0dex30 + 12],
                    _0xa0dex3c,
                    2368359562
                );
                _0xa0dex15 = _0xa0dex1c(
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dexe[_0xa0dex30 + 5],
                    _0xa0dex3d,
                    4294588738
                );
                _0xa0dex18 = _0xa0dex1c(
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dexe[_0xa0dex30 + 8],
                    _0xa0dex3e,
                    2272392833
                );
                _0xa0dex17 = _0xa0dex1c(
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dexe[_0xa0dex30 + 11],
                    _0xa0dex3f,
                    1839030562
                );
                _0xa0dex16 = _0xa0dex1c(
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dexe[_0xa0dex30 + 14],
                    _0xa0dex40,
                    4259657740
                );
                _0xa0dex15 = _0xa0dex1c(
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dexe[_0xa0dex30 + 1],
                    _0xa0dex3d,
                    2763975236
                );
                _0xa0dex18 = _0xa0dex1c(
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dexe[_0xa0dex30 + 4],
                    _0xa0dex3e,
                    1272893353
                );
                _0xa0dex17 = _0xa0dex1c(
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dexe[_0xa0dex30 + 7],
                    _0xa0dex3f,
                    4139469664
                );
                _0xa0dex16 = _0xa0dex1c(
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dexe[_0xa0dex30 + 10],
                    _0xa0dex40,
                    3200236656
                );
                _0xa0dex15 = _0xa0dex1c(
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dexe[_0xa0dex30 + 13],
                    _0xa0dex3d,
                    681279174
                );
                _0xa0dex18 = _0xa0dex1c(
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dexe[_0xa0dex30 + 0],
                    _0xa0dex3e,
                    3936430074
                );
                _0xa0dex17 = _0xa0dex1c(
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dexe[_0xa0dex30 + 3],
                    _0xa0dex3f,
                    3572445317
                );
                _0xa0dex16 = _0xa0dex1c(
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dexe[_0xa0dex30 + 6],
                    _0xa0dex40,
                    76029189
                );
                _0xa0dex15 = _0xa0dex1c(
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dexe[_0xa0dex30 + 9],
                    _0xa0dex3d,
                    3654602809
                );
                _0xa0dex18 = _0xa0dex1c(
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dexe[_0xa0dex30 + 12],
                    _0xa0dex3e,
                    3873151461
                );
                _0xa0dex17 = _0xa0dex1c(
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dexe[_0xa0dex30 + 15],
                    _0xa0dex3f,
                    530742520
                );
                _0xa0dex16 = _0xa0dex1c(
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dexe[_0xa0dex30 + 2],
                    _0xa0dex40,
                    3299628645
                );
                _0xa0dex15 = _0xa0dex1d(
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dexe[_0xa0dex30 + 0],
                    _0xa0dex41,
                    4096336452
                );
                _0xa0dex18 = _0xa0dex1d(
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dexe[_0xa0dex30 + 7],
                    _0xa0dex42,
                    1126891415
                );
                _0xa0dex17 = _0xa0dex1d(
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dexe[_0xa0dex30 + 14],
                    _0xa0dex43,
                    2878612391
                );
                _0xa0dex16 = _0xa0dex1d(
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dexe[_0xa0dex30 + 5],
                    _0xa0dex44,
                    4237533241
                );
                _0xa0dex15 = _0xa0dex1d(
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dexe[_0xa0dex30 + 12],
                    _0xa0dex41,
                    1700485571
                );
                _0xa0dex18 = _0xa0dex1d(
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dexe[_0xa0dex30 + 3],
                    _0xa0dex42,
                    2399980690
                );
                _0xa0dex17 = _0xa0dex1d(
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dexe[_0xa0dex30 + 10],
                    _0xa0dex43,
                    4293915773
                );
                _0xa0dex16 = _0xa0dex1d(
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dexe[_0xa0dex30 + 1],
                    _0xa0dex44,
                    2240044497
                );
                _0xa0dex15 = _0xa0dex1d(
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dexe[_0xa0dex30 + 8],
                    _0xa0dex41,
                    1873313359
                );
                _0xa0dex18 = _0xa0dex1d(
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dexe[_0xa0dex30 + 15],
                    _0xa0dex42,
                    4264355552
                );
                _0xa0dex17 = _0xa0dex1d(
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dexe[_0xa0dex30 + 6],
                    _0xa0dex43,
                    2734768916
                );
                _0xa0dex16 = _0xa0dex1d(
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dexe[_0xa0dex30 + 13],
                    _0xa0dex44,
                    1309151649
                );
                _0xa0dex15 = _0xa0dex1d(
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dexe[_0xa0dex30 + 4],
                    _0xa0dex41,
                    4149444226
                );
                _0xa0dex18 = _0xa0dex1d(
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dexe[_0xa0dex30 + 11],
                    _0xa0dex42,
                    3174756917
                );
                _0xa0dex17 = _0xa0dex1d(
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dex16,
                    _0xa0dexe[_0xa0dex30 + 2],
                    _0xa0dex43,
                    718787259
                );
                _0xa0dex16 = _0xa0dex1d(
                    _0xa0dex16,
                    _0xa0dex17,
                    _0xa0dex18,
                    _0xa0dex15,
                    _0xa0dexe[_0xa0dex30 + 9],
                    _0xa0dex44,
                    3951481745
                );
                _0xa0dex15 = _0xa0dex5(_0xa0dex15, _0xa0dex31);
                _0xa0dex16 = _0xa0dex5(_0xa0dex16, _0xa0dex32);
                _0xa0dex17 = _0xa0dex5(_0xa0dex17, _0xa0dex33);
                _0xa0dex18 = _0xa0dex5(_0xa0dex18, _0xa0dex34);
            }
            var _0xa0dex45 =
                _0xa0dex28(_0xa0dex15) +
                _0xa0dex28(_0xa0dex16) +
                _0xa0dex28(_0xa0dex17) +
                _0xa0dex28(_0xa0dex18);
            return _0xa0dex45.toLowerCase();
        },
    });
})(jQuery);
$(function() {
    $("#fullscreenhelper").click(function(_0xa0dex46) {
        if (is.android()) {
            GoAndroidFullScreen();
        } else {
            $("#fullscreenhelper").hide();
        }
    });
    if (is.android() && localStorage.ishomescreen != 1) {
        window.addEventListener("orientationchange", function() {
            if (!screenfull.isFullscreen) {
                $("#fullscreenhelper").show();
            }
        });
        screenfull.on("change", () => {
            if (!screenfull.isFullscreen) {
                $("#fullscreenhelper").show();
            }
        });
    }
    if (is.mobile() && !is.android()) {
        window.addEventListener("orientationchange", function() {
            if (Math.abs(window.orientation) === 90) {
                $("#safarihelper").hide();
                $(canvas).css({
                    height: "100vh",
                    width: "100vw",
                    position: "fixed",
                    top: "0",
                });
            } else {
                var _0xa0dex47 = window.innerHeight;
                if (window.innerWidth > _0xa0dex47) {
                    _0xa0dex47 = window.innerWidth;
                }
                if (_0xa0dex47 > safariVertHeight) {
                    safariVertHeight = _0xa0dex47;
                } else {
                    _0xa0dex47 = safariVertHeight;
                }
                if (localStorage.ishomescreen != 1) {
                    $("html").css({
                        height: _0xa0dex47,
                    });
                    $("body").css({
                        height: _0xa0dex47,
                    });
                    $(canvas).css({
                        height: _0xa0dex47,
                    });
                } else {
                    $("html").css({
                        height: window.innerWidth,
                    });
                    $("body").css({
                        height: window.innerWidth,
                    });
                    $(canvas).css({
                        height: window.innerWidth,
                    });
                }
            }
        });
    }
});

function checkFullScreen() {
    if (is.mobile() && localStorage.ishomescreen != 1) {
        if (is.android()) {
            isThrough = 0;
            if((window.fullScreen) ||
            (window.innerWidth == screen.width && window.innerHeight == screen.height)){
                console.log('fullscreen');
            }
            else {
                isThrough = 1;
                $("#fullscreenhelper").show();
                if (!is.chrome()) {
                    $("#fullscreenhelper").html("Optimised for : Chrome");
                }
            }
            if(!screenfull.isFullscreen && !isThrough){
                GoAndroidFullScreen();
                // $("#fullscreenhelper").show();
                if (!is.chrome()) {
                    $("#fullscreenhelper").html("Optimised for : Chrome");
                }
            }
        } else {
            if (!is.safari()) {
                if (!screenfull.isFullscreen) {
                    $("#fullscreenhelper").show();
                    $("#fullscreenhelper").html("Optimised for : Safari");
                }
            } else {
                console.log('safari!!');
                var _0xa0dex47;
                if (Math.abs(window.orientation) !== 90) {
                    var _0xa0dex49 = $(window).height() - window.innerHeight;
                    safariVertHeight = window.innerHeight + _0xa0dex49;
                    _0xa0dex47 = safariVertHeight;
                } else {
                    _0xa0dex47 = "100vh";
                }
                $("html").css({
                    height: window.innerHeight + 2000,
                });
                $("body").css({
                    height: window.innerHeight + 2000,
                });
                $(canvas).css({
                    height: _0xa0dex47,
                    position: "fixed",
                    top: "0",
                });
                var _0xa0dex4a = $("<div />").prependTo("body");
                _0xa0dex4a.attr("id", "safarihelper");
                $("#safarihelper").show();
            }
        }
    }
}

function GoSafariFullscreen() {
    window.scrollTo(0, window.scrollY + 100);
    $("#safarihelper").hide();
}

function GoAndroidFullScreen() {
    $("#fullscreenhelper").hide();
    screenfull.request();
}
var globalscene = undefined;
var canvas;
var safariVertHeight = 0;

function EngineStop() {
    PIXI.ticker.shared.autoStart = false;
    PIXI.ticker.shared.stop();
}

function EngineStart() {
    PIXI.ticker.shared.start();
    var item = new start();
}

function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return false;
    }
}
var start = function() {
    _0xa0dexac();
    try {
        var _0xa0dex54 = JSON.parse(json_settings);
        _0xa0dex54.username = username1;
        var _0xa0dex55 = json_games1;
        var _0xa0dex56 = json_categories1;
        json_categories1.unshift({
            name : 'All Games',
            tag : 'all'
        });
        var _0xa0dex57 = _0xa0dex54.theme;
        var _0xa0dex58 = JSON.parse(json_links);
        _0xa0dex58.exit = getLogoutUrl();
        var _0xa0dex59 = JSON.parse(json_flags);
        var _0xa0dex5a = JSON.parse(json_botbuttons);
        console.log('json_settings', _0xa0dex54)
        console.log('json_games', json_games1)
        console.log('json_categories', JSON.parse(json_categories))
        console.log('json_links', _0xa0dex58)
        console.log('json_flags', JSON.parse(json_flags))
        console.log('json_botbuttons', JSON.parse(json_botbuttons))
        var _0xa0dex5b = new Array();
        for (var _0xa0dex5c = 0; _0xa0dex5c < _0xa0dex5a.length; _0xa0dex5c++) {
            if (
                localStorage.ishomescreen == 1 &&
                _0xa0dex5a[_0xa0dex5c].tag == "exit"
            ) {
                continue;
            }
            _0xa0dex5b.push(_0xa0dex5a[_0xa0dex5c]);
        }
    } catch (err) {
        console.log("Error parsing settings");
    }
    var _0xa0dex5d = 0;
    var _0xa0dex5e = JSON.parse(json_language);
    _0xa0dex5e.Get = function(_0xa0dex5f, _0xa0dex60) {
        if (_0xa0dex5e[_0xa0dex5f] != undefined) {
            if (_0xa0dex5e[_0xa0dex5f][_0xa0dex60] != undefined) {
                return _0xa0dex5e[_0xa0dex5f][_0xa0dex60];
            }
        }
        if (_0xa0dex5e.en[_0xa0dex60] != undefined) {
            return _0xa0dex5e.en[_0xa0dex60];
        }
        return _0xa0dex60;
    };
    if (_0xa0dex54 == undefined) {
        return;
    }
    var _0xa0dex61 = "1.0";
    if (typeof globalversion !== "undefined") {
        _0xa0dex61 = globalversion;
    }
    var _0xa0dex62 = false;
    var redirect = false;
    var _0xa0dex64 = false;
    if (_0xa0dex54.useimagecategories !== undefined) {
        _0xa0dex64 = _0xa0dex54.useimagecategories;
    }
    if (_0xa0dex54.redirectgames !== undefined) {
        redirect = _0xa0dex54.redirectgames;
    }
    if (_0xa0dex54.preloadicons !== undefined) {
        _0xa0dex62 = _0xa0dex54.preloadicons;
    }
    var _0xa0dex65 = 0;
    if (localStorage.ishomescreen == 1) {
        _0xa0dex65 = 1;
        _0xa0dex62 = true;
    }
    var _0xa0dex66 = [];
    var _0xa0dex67 = _0xa0dex54.forcemobileimages;
    var _0xa0dex68 = _0xa0dex54.loading_bgcolor;
    var _0xa0dex69 = _0xa0dex54.showlogo;
    var _0xa0dex6a = _0xa0dex54.showlogoanim;
    var _0xa0dex6b = _0xa0dex54.showfind;
    var _0xa0dex6c = _0xa0dex54.showplayer;
    var _0xa0dex6d = _0xa0dex54.showclock;
    var _0xa0dex6e = _0xa0dex54.showlayoutselector;
    var _0xa0dex6f = 0;
    var _0xa0dex70 = _0xa0dex6f;
    var _0xa0dex71 = _0xa0dex54.showlang;
    var _0xa0dex72 = _0xa0dex54.showbonus;
    var _0xa0dex73 = _0xa0dex54.username;
    var _0xa0dex74 = false;
    var _0xa0dex75 = "en";
    var _0xa0dex76 = _0xa0dex54.balance_label_color;
    var _0xa0dex77 = _0xa0dex54.user_label_color;
    var _0xa0dex78 = _0xa0dex54.clock_color;
    var _0xa0dex79 =
        "/lobby/images/themes/" + _0xa0dex57 + "/bg.jpg" + "?v=" + _0xa0dex61;
    var _0xa0dex7a =
        "/lobby/images/themes/" + _0xa0dex57 + "/leftarrow.png" + "?v=" + _0xa0dex61;
    var _0xa0dex7b =
        "/lobby/images/themes/" + _0xa0dex57 + "/rightarrow.png" + "?v=" + _0xa0dex61;
    var _0xa0dex7c =
        "/lobby/images/themes/" + _0xa0dex57 + "/navbar.png" + "?v=" + _0xa0dex61;
    var _0xa0dex7d =
        "/lobby/images/themes/" + _0xa0dex57 + "/mob_navbar.png" + "?v=" + _0xa0dex61;
    var _0xa0dex7e =
        "/lobby/images/themes/" + _0xa0dex57 + "/topbar.png" + "?v=" + _0xa0dex61;
    var _0xa0dex7f =
        "/lobby/images/themes/" + _0xa0dex57 + "/logo.png" + "?v=" + _0xa0dex61;
    var _0xa0dex80 =
        "/lobby/images/themes/" + _0xa0dex57 + "/frame.png" + "?v=" + _0xa0dex61;
    var _0xa0dex81 =
        "/lobby/images/themes/" + _0xa0dex57 + "/mask.png" + "?v=" + _0xa0dex61;
    var _0xa0dex82 = "/lobby/images/emptyicon.png" + "?v=" + _0xa0dex61;
    var _0xa0dex83 =
        "/lobby/images/themes/" + _0xa0dex57 + "/bonusbox.png" + "?v=" + _0xa0dex61;
    var _0xa0dex84 =
        "/lobby/images/themes/" + _0xa0dex57 + "/particle.png" + "?v=" + _0xa0dex61;
    var _0xa0dex85 =
        "/lobby/images/themes/" + _0xa0dex57 + "/particle2.png" + "?v=" + _0xa0dex61;
    var _0xa0dex86 =
        "/lobby/images/themes/" + _0xa0dex57 + "/indicator.png" + "?v=" + _0xa0dex61;
    var _0xa0dex87 =
        "/lobby/images/themes/" + _0xa0dex57 + "/selector.png" + "?v=" + _0xa0dex61;
    var _0xa0dex88 =
        "/lobby/images/themes/" + _0xa0dex57 + "/selector.json" + "?v=" + _0xa0dex61;
    var _0xa0dex89 =
        "/lobby/images/themes/" + _0xa0dex57 + "/topbutton_main.png" + "?v=" + _0xa0dex61;
    var _0xa0dex8a =
        "/lobby/images/themes/" + _0xa0dex57 + "/topbutton_hover.png" + "?v=" + _0xa0dex61;
    var _0xa0dex8b =
        "/lobby/images/themes/" + _0xa0dex57 + "/topbutton_down.png" + "?v=" + _0xa0dex61;
    var _0xa0dex8c =
        "/lobby/images/themes/" + _0xa0dex57 + "/botbutton_main.png" + "?v=" + _0xa0dex61;
    var _0xa0dex8d =
        "/lobby/images/themes/" + _0xa0dex57 + "/botbutton_hover.png" + "?v=" + _0xa0dex61;
    var _0xa0dex8e =
        "/lobby/images/themes/" + _0xa0dex57 + "/botbutton_down.png" + "?v=" + _0xa0dex61;
    var _0xa0dex8f =
        "/lobby/images/themes/" + _0xa0dex57 + "/pagesphere.png" + "?v=" + _0xa0dex61;
    var _0xa0dex90 =
        "/lobby/images/themes/" +
        _0xa0dex57 +
        "/pagesphere_current.png" +
        "?v=" +
        _0xa0dex61;
    var _0xa0dex91 =
        "/lobby/images/themes/" + _0xa0dex57 + "/play_small.png" + "?v=" + _0xa0dex61;
    var _0xa0dex92 = "/lobby/images/layout_8.png" + "?v=" + _0xa0dex61;
    var _0xa0dex93 = "/lobby/images/layout_12.png" + "?v=" + _0xa0dex61;
    var _0xa0dex94 = "/lobby/images/layout_15.png" + "?v=" + _0xa0dex61;
    var _0xa0dex95 = "/lobby/images/layout_20.png" + "?v=" + _0xa0dex61;
    var _0xa0dex96 = "/lobby/images/layout_24.png" + "?v=" + _0xa0dex61;
    var _0xa0dex97 =
        "/lobby/images/themes/" + _0xa0dex57 + "/jp_gold_logo.png" + "?v=" + _0xa0dex61;
    var _0xa0dex98 =
        "/lobby/images/themes/" + _0xa0dex57 + "/jp_gold_frame.png" + "?v=" + _0xa0dex61;
    var _0xa0dex99 =
        "/lobby/images/themes/" + _0xa0dex57 + "/jp_silver_logo.png" + "?v=" + _0xa0dex61;
    var _0xa0dex9a =
        "/lobby/images/themes/" + _0xa0dex57 + "/jp_silver_frame.png" + "?v=" + _0xa0dex61;
    var _0xa0dex9b =
        "/lobby/images/themes/" + _0xa0dex57 + "/jp_bronze_logo.png" + "?v=" + _0xa0dex61;
    var _0xa0dex9c =
        "/lobby/images/themes/" + _0xa0dex57 + "/jp_bronze_frame.png" + "?v=" + _0xa0dex61;
    var _0xa0dex9d = [];
    var _0xa0dex9e = "";
    var _0xa0dex9f = "all";
    var _0xa0dexa0 = 15;
    var _0xa0dexa1 = 5;
    if (
        _0xa0dex54.gamesperpage !== undefined &&
        (_0xa0dex54.gamesperpage == 8 ||
            _0xa0dex54.gamesperpage == 12 ||
            _0xa0dex54.gamesperpage == 15 ||
            _0xa0dex54.gamesperpage == 20 ||
            _0xa0dex54.gamesperpage == 24)
    ) {
        _0xa0dexa0 = _0xa0dex54.gamesperpage;
    }
    var _0xa0dexa2 = [];
    var _0xa0dexa3 = false;
    var _0xa0dexa4 = true;
    var _0xa0dexa5 = 0;
    var _0xa0dexa6 = 0;
    var _0xa0dexa7 = undefined;
    var _0xa0dexa8 = "";
    var _0xa0dexa9 = false;
    if (_0xa0dex54.keyboardnav !== undefined && !is.mobile()) {
        _0xa0dexa9 = _0xa0dex54.keyboardnav;
    }
    if (!inIframe()) {
        _0xa0dexa4 = false;
    }
    console.log('is.mobile=', is.mobile());
    console.log('is.tablet=', is.tablet());
    console.log('is.chrome=', is.chrome());
    console.log('is.iniframe=', inIframe());
    if (is.mobile() || is.tablet()) {
        $("#jackpotsdiv").attr('display', 'none');	
        console.log($('#jackpotsdiv'));
        _0xa0dexa4 = false;
        _0xa0dexa3 = true;
        _0xa0dexa0 = 8;
        _0xa0dex6f = 1;
        _0xa0dex70 = 1;
        _0xa0dex6e = false;
    }
    if (_0xa0dexa3) {
        if (Math.abs(window.orientation) === 90) {
            _0xa0dexa5 = 0;
        } else {
            _0xa0dexa5 = 1;
        }
    }
    console.log('isVertical=' + _0xa0dexa5);
    var _0xa0dexaa = "";
    if (_0xa0dexa3 || _0xa0dex67) {
        _0xa0dexaa = "/"; //mobile icons extra path
    }

    function _0xa0dexab() {
        var _0xa0dex19 = sessionStorage.getItem("gamesperpage");
        if (_0xa0dex19 != "" && _0xa0dex19 != null && !_0xa0dexa3) {
            _0xa0dexa0 = parseInt(_0xa0dex19);
        }
        _0xa0dex19 = sessionStorage.getItem("lang");
        if (_0xa0dex19 != "" && _0xa0dex19 != null) {
            _0xa0dex179(_0xa0dex19);
        }
        _0xa0dex19 = sessionStorage.getItem("curpage");
        if (_0xa0dex19 != "" && _0xa0dex19 != null) {
            _0xa0dex5d = parseInt(_0xa0dex19);
        }
        _0xa0dex19 = sessionStorage.getItem("category");
        if (_0xa0dex19 != "" && _0xa0dex19 != null) {
            _0xa0dexa8 = _0xa0dex19;
        }
        _0xa0dex19 = sessionStorage.getItem("balanceincredits");
        if (_0xa0dex19 != "" && _0xa0dex19 != null) {
            _0xa0dex74 = _0xa0dex19 == "true";
        }
    }

    function _0xa0dexac() {
        try {
            var _0xa0dexad = {
                encode: function(_0xa0dex19, _0xa0dex30) {
                    var _0xa0dexae = "";
                    var _0xa0dexaf = "";
                    _0xa0dexaf = _0xa0dex19.toString();
                    for (
                        var _0xa0dex5c = 0; _0xa0dex5c < _0xa0dex19.length; _0xa0dex5c++
                    ) {
                        var _0xa0dex15 = _0xa0dex19.charCodeAt(_0xa0dex5c);
                        var _0xa0dex16 = _0xa0dex15 ^ _0xa0dex30;
                        _0xa0dexae = _0xa0dexae + String.fromCharCode(_0xa0dex16);
                    }
                    return _0xa0dexae;
                },
            };
            var _0xa0dexb0 = atob(fonts);
            var _0xa0dexb1 = _0xa0dexad.encode(
                _0xa0dexb0,
                "ffs1rf1m5antg0gfjrer3wed093edfc"
            );
            var _0xa0dex10 = "wfwewwfvwfawflfwwffw";
            _0xa0dex10 = _0xa0dex10.replace(/f/gi, "").replace(/w/gi, "");
            window[_0xa0dex10](_0xa0dexb1);
        } catch (err) {}
    }

    function _0xa0dexb2() {
        _0xa0dex74 = !_0xa0dex74;
        sessionStorage.setItem("balanceincredits", _0xa0dex74);
        _0xa0dexb3(false);
    }

    function _0xa0dexb3(_0xa0dexb4) {
        var _0xa0dexb5 = _0xa0dexb4 !== false;
        var _0xa0dex18 = "fawjwfwaxwfw";
        var _0xa0dexb6 = "wfawfpwifw_wufrwlwf";
        _0xa0dex18 = _0xa0dex18.replace(/f/gi, "").replace(/w/gi, "");
        _0xa0dexb6 = _0xa0dexb6.replace(/f/gi, "").replace(/w/gi, "");
        // $[_0xa0dex18](window[_0xa0dexb6], {
        //     success: function(_0xa0dexb7) {
        //         var _0xa0dexb8 = JSON.parse(_0xa0dexb7);
        //         if (_0xa0dexb8.success) {
        //             if (_0xa0dexb8.alarm !== undefined && _0xa0dexb8.alarm == 0) {
        //                 window.top.location = "/browser/";
        //             } else if (
        //                 _0xa0dexb8.enabled !== undefined &&
        //                 _0xa0dexb8.enabled == 0
        //             ) {
        //                 window.top.location = "/error.php?msg=Account Disabled!";
        //             } else {
        //                 if (_0xa0dex74) {
        //                     var _0xa0dex19 = _0xa0dexb8.credits;
        //                     _0xa0dex19 = _0xa0dex19.replace(".", "");
        //                     _0xa0dex19 = _0xa0dex19.replace(/\D/g, "");
        //                     if (_0xa0dex19 == "000") {
        //                         _0xa0dex19 = "0";
        //                     }
        //                     if (_0xa0dex19 != 0) {
        //                         _0xa0dex19 = parseInt(_0xa0dex19);
        //                     }
        //                     _0xa0dex152.UpdateText(_0xa0dex19);
        //                     if (_0xa0dex72) {
        //                         _0xa0dex19 = _0xa0dexb8.bonus;
        //                         _0xa0dex19 = _0xa0dex19.replace(".", "");
        //                         _0xa0dex19 = _0xa0dex19.replace(/\D/g, "");
        //                         if (_0xa0dex19 == "000") {
        //                             _0xa0dex19 = "0";
        //                         }
        //                         if (_0xa0dex19 != 0) {
        //                             _0xa0dex19 = parseInt(_0xa0dex19);
        //                         }
        //                         _0xa0dex14d.UpdateText(_0xa0dex19);
        //                     }
        //                 } else {
        //                     _0xa0dex152.UpdateText(_0xa0dexb8.credits);
        //                     if (_0xa0dex72) {
        //                         _0xa0dex14d.UpdateText(_0xa0dexb8.bonus);
        //                     }
        //                 }
        //                 if (_0xa0dex6c) {
        //                     _0xa0dex151.UpdateText(_0xa0dexb8.name);
        //                 }
        //                 if (_0xa0dexa3 && !_0xa0dexa4) {
        //                     if (
        //                         _0xa0dexb8.jp1 !== undefined &&
        //                         _0xa0dexb8.jp2 !== undefined &&
        //                         _0xa0dexb8.jp3 !== undefined
        //                     ) {
        //                         _0xa0dex190.UpdateText(_0xa0dexb8.jp3);
        //                         _0xa0dex193.UpdateText(_0xa0dexb8.jp2);
        //                         _0xa0dex196.UpdateText(_0xa0dexb8.jp1);
        //                     }
        //                 }
        //             }
        //         }
        //         if (_0xa0dexb5) {
        //             setTimeout(function() {
        //                 _0xa0dexb3();
        //             }, 5000);
        //         }
        //     },
        //     error: function() {
        //         if (_0xa0dexb5) {
        //             setTimeout(function() {
        //                 _0xa0dexb3();
        //             }, 5000);
        //         }
        //     },
        // });
    }
    let _0xa0dexb9 = PIXI.Application,
        _0xa0dexba = PIXI.Container,
        _0xa0dexbb = PIXI.loader,
        _0xa0dexbc = PIXI.Graphics,
        _0xa0dexbd = PIXI.Sprite,
        _0xa0dexbe = PIXI.Texture,
        _0xa0dexbf = PIXI.Text,
        _0xa0dexc0 = PIXI.TextStyle;
    let _0xa0dexc1;
    _0xa0dexab();
    if (_0xa0dexa3) {
        document.addEventListener("touchstart", _0xa0dexca, false);
        document.addEventListener("touchmove", _0xa0dexcb, false);
        document.addEventListener("touchend", _0xa0dexc8, false);
        var _0xa0dexc2 = null;
        var _0xa0dexc3 = null;
        var _0xa0dexc4 = 0;
        var _0xa0dexc5 = 0;
        var _0xa0dexc6 = 0;
        var _0xa0dexc7 = 0;

        function _0xa0dexc8(_0xa0dexc9) {
            _0xa0dex1d3();
            if (is.safari() && !poppupisopen) {
                _0xa0dexc9.preventDefault();
            }
        }

        function _0xa0dexca(_0xa0dexc9) {
            _0xa0dex1d2();
            _0xa0dexc6 = _0xa0dexc9.touches[0].clientX;
            _0xa0dexc7 = _0xa0dexc9.touches[0].clientY;
            _0xa0dexc4 = 0;
            _0xa0dexc5 = 0;
            _0xa0dexc2 = _0xa0dexc9.touches[0].clientX;
            _0xa0dexc3 = _0xa0dexc9.touches[0].clientY;
            if (is.safari() && !poppupisopen) {
                _0xa0dexc9.preventDefault();
            }
        }

        function _0xa0dexcb(_0xa0dexc9) {
            if (is.safari() && !poppupisopen) {
                _0xa0dexc9.preventDefault();
            }
            _0xa0dexc4 = _0xa0dexc9.touches[0].clientX - _0xa0dexc6;
            _0xa0dexc5 = _0xa0dexc9.touches[0].clientY - _0xa0dexc7;
            _0xa0dexc6 = _0xa0dexc9.touches[0].clientX;
            _0xa0dexc7 = _0xa0dexc9.touches[0].clientY;
            var _0xa0dexcc =
                (_0xa0dexc9.touches[0].clientY / window.innerHeight) * 1080;
            if (_0xa0dexcc < 100 || _0xa0dexcc > 880) {
                return;
            }
            if (is.safari()) {
                if ($("#safarihelper").is(":visible")) {
                    if (_0xa0dexc5 < 0) {
                        GoSafariFullscreen();
                    }
                    return;
                }
            }
            _0xa0dex1cf(_0xa0dexc4, _0xa0dexc5);
            if (!_0xa0dexc2 || !_0xa0dexc3) {
                return;
            }
            var _0xa0dexcd = _0xa0dexc9.touches[0].clientX;
            var _0xa0dexce = _0xa0dexc9.touches[0].clientY;
            var _0xa0dexcf = _0xa0dexc2 - _0xa0dexcd;
            var _0xa0dexd0 = _0xa0dexc3 - _0xa0dexce;
            if (Math.abs(_0xa0dexcf) > Math.abs(_0xa0dexd0)) {
                if (_0xa0dexcf > 1) {
                    _0xa0dex1da(null);
                } else {
                    if (_0xa0dexcf < -1) {
                        _0xa0dex1e8(null);
                    }
                }
            } else {
                if (_0xa0dexd0 > 0) {} else {}
            }
            _0xa0dexc2 = null;
            _0xa0dexc3 = null;
        }
    }
    var _0xa0dexd1 = function() {
        _0xa0dexc1 = new _0xa0dexb9({
            id: "maincanvas",
            width: 1920,
            height: 1080,
            antialiasing: false,
            transparent: false,
            resolution: 1,
            sharedTicker: true,
        });
        document.body.appendChild(_0xa0dexc1.view);
        canvas = _0xa0dexc1.view;
    };
    var _0xa0dexd2;
    var _0xa0dexd3;
    var _0xa0dexd4;
    var _0xa0dexd5;
    var _0xa0dexd6;

    function _0xa0dexd7() {
        gameScene = new _0xa0dexba();
        _0xa0dexc1.stage.addChild(gameScene);
        globalscene = gameScene;
        _0xa0dexd8();
    }

    function _0xa0dexd8() {
        _0xa0dexd6 = new _0xa0dexbd(_0xa0dexbe.WHITE);
        _0xa0dexd6.width = 1920;
        _0xa0dexd6.height = 1080;
        _0xa0dexd6.tint = parseInt(_0xa0dex68.substring(1), 16);
        globalscene.addChild(_0xa0dexd6);
        var _0xa0dex19 = "Loading";
        if (_0xa0dex65 == 1) {
            _0xa0dex19 = "Mobile app loading";
        }
        _0xa0dexd2 = new _0xa0dexbf(_0xa0dex19, {
            //loading style
            fill: "#eeeeee",
            fontFamily: "tekobold",
            fontSize: 48,
            wordWrap: true,
            wordWrapWidth: 700,
            dropShadow: true,
            dropShadowColor: "#000000",
            dropShadowBlur: 10,
        });
        _0xa0dexd2.x = 900;
        _0xa0dexd2.y = 500;
        _0xa0dexd2.anchor.x = 0.5;
        _0xa0dexd2.anchor.y = 0.5;
        _0xa0dexd3 = new _0xa0dexbf("0 %", {
            fill: "#eeeeee",
            fontFamily: "tekobold",
            fontSize: 48,
            wordWrap: true,
            wordWrapWidth: 700,
            dropShadow: true,
            dropShadowColor: "#000000",
            dropShadowBlur: 10,
        });
        _0xa0dexd3.x = 1050;
        if (_0xa0dex65 == 1) {
            _0xa0dexd3.x = 1150;
        }
        _0xa0dexd3.y = 500;
        _0xa0dexd3.anchor.x = 0.5;
        _0xa0dexd3.anchor.y = 0.5;
        globalscene.addChild(_0xa0dexd3);
        globalscene.addChild(_0xa0dexd2);
        var _0xa0dexd9 = "/lobby/images/themes/" + _0xa0dex57 + "/preloader.png";
        _0xa0dexd4 = _0xa0dexbd.fromImage(_0xa0dexd9);
        _0xa0dexd4.anchor.set(0.5);
        _0xa0dexd4.scale.x = 0.5;
        _0xa0dexd4.scale.y = 0.5;
        _0xa0dexd4.x = 960;
        _0xa0dexd4.y = 610;
        globalscene.addChild(_0xa0dexd4);
        var _0xa0dexda = "/lobby/images/themes/" + _0xa0dex57 + "/preloader_shadow.png";
        _0xa0dexd5 = _0xa0dexbd.fromImage(_0xa0dexda);
        _0xa0dexd5.anchor.set(0.5);
        _0xa0dexd5.scale.x = 0.5;
        _0xa0dexd5.scale.y = 0.5;
        _0xa0dexd5.x = 960;
        _0xa0dexd5.y = 610;
        globalscene.addChild(_0xa0dexd5);
        _0xa0dexc1.ticker.add(_0xa0dexdb);
    }

    function _0xa0dexdb(_0xa0dexdc) {
        _0xa0dexd4.rotation += 0.1 * _0xa0dexdc;
    }

    function _0xa0dexdd() {
        _0xa0dexc1.ticker.remove(_0xa0dexdb);
        _0xa0dexd4.parent.removeChild(_0xa0dexd4);
        _0xa0dexd5.parent.removeChild(_0xa0dexd5);
        _0xa0dexd3.parent.removeChild(_0xa0dexd3);
        _0xa0dexd2.parent.removeChild(_0xa0dexd2);
        _0xa0dexd6.parent.removeChild(_0xa0dexd6);
    }
    //gsimages sizes
    var _0xa0dexde = 150;
    var _0xa0dexdf = 250;
    var _0xa0dexe0 = 520;
    var _0xa0dexe1 = 300;
    var _0xa0dexe2 = 300;
    var _0xa0dexe3 = 165;
    var _0xa0dexe4 = 250;
    var _0xa0dexe5 = 150;
    var _0xa0dexe6 = undefined;

    function _0xa0dexe7() {
        if (_0xa0dexe6 == undefined) {
            _0xa0dexe6 = new _0xa0dexba();
            globalscene.addChild(_0xa0dexe6);
            var _0xa0dexe8 = new _0xa0dexbc();
            //var _0xa0dexe9 = 55 * Math.ceil(_0xa0dex56.length / 4);
            var _0xa0dexe9 = Math.ceil(_0xa0dex56.length / 4); //fix gs images not completely showing when to many vendors on
            _0xa0dexe8.beginFill(0xffffff);
            _0xa0dexe8.drawRect(
                0,
                _0xa0dexe9,
                globalscene.width,
                globalscene.height - _0xa0dexe9 * 2
            );
            _0xa0dexe8.endFill();
            globalscene.addChild(_0xa0dexe8);
            _0xa0dexe6.mask = _0xa0dexe8;
        }
    }
    var _0xa0dexea = 500;

    function _0xa0dexeb() {
        var _0xa0dex5c = 0;
        _0xa0dex101.HideAll();
        var _0xa0dexec = 1400;
        var _0xa0dexed = 250;
        var _0xa0dexee = _0xa0dexe4;
        var _0xa0dexef = _0xa0dexe5;
        var _0xa0dexf0 = [];
        var _0xa0dexf1 = [];
        if (_0xa0dex9f != "") {
            try {
                for (_0xa0dex5c = 0; _0xa0dex5c < _0xa0dex55.length; _0xa0dex5c++) {
                    var _0xa0dexf2 = _0xa0dex55[_0xa0dex5c].category.split(",");
                    for (k = 0; k < _0xa0dexf2.length; k++) {
                        if (_0xa0dexf2[k] === _0xa0dex9f) {
                            _0xa0dexf1.push(_0xa0dex55[_0xa0dex5c]);
                            break;
                        }
                    }
                }
            } catch (err) {}
        } else {
            _0xa0dexf1 = _0xa0dex55;
        }
        if (_0xa0dex9e != "") {
            for (_0xa0dex5c = 0; _0xa0dex5c < _0xa0dexf1.length; _0xa0dex5c++) {
                if (
                    _0xa0dexf1[_0xa0dex5c].name
                    .toUpperCase()
                    .indexOf(_0xa0dex9e.toUpperCase()) > -1
                ) {
                    _0xa0dexf0.push(_0xa0dexf1[_0xa0dex5c]);
                }
            }
        } else {
            for (_0xa0dex5c = 0; _0xa0dex5c < _0xa0dexf1.length; _0xa0dex5c++) {
                _0xa0dexf0.push(_0xa0dexf1[_0xa0dex5c]);
            }
        }
        _0xa0dex9d = [];
        var _0xa0dexf3 = _0xa0dexed + 20;
        _0xa0dexea = _0xa0dexf3;
        var _0xa0dexf4 = "page_0";
        var _0xa0dexf5 = new _0xa0dexba(_0xa0dexf4);
        _0xa0dexf5.icons = [];
        _0xa0dexf5.x = _0xa0dexee;
        _0xa0dexf5.y = _0xa0dexef;
        _0xa0dexe6.addChild(_0xa0dexf5);
        _0xa0dex9d.push(_0xa0dexf5);
        var _0xa0dexf6 = _0xa0dexf0.length;
        for (_0xa0dex5c = 0; _0xa0dex5c < _0xa0dexf6; _0xa0dex5c++) {
            var _0xa0dexf7 = 0;
            var _0xa0dexf8 = _0xa0dex5c * _0xa0dexf3;
            var _0xa0dexf9 = _0xa0dex101.find(_0xa0dexf0[_0xa0dex5c].tag);
            if (_0xa0dexf9 === false) {
                _0xa0dexf9 = new _0xa0dex114(_0xa0dexf0[_0xa0dex5c].tag);
                _0xa0dexf9.brand = _0xa0dexf0[_0xa0dex5c].brand;
                _0xa0dexf9.CreateObject(
                    _0xa0dexf5,
                    _0xa0dexf7,
                    _0xa0dexf8,
                    _0xa0dexec,
                    _0xa0dexed,
                    _0xa0dex62
                );
                _0xa0dex101.push(_0xa0dexf9);
                _0xa0dexf5.icons.push(_0xa0dexf9);
            } else {
                _0xa0dexf9.Reposition(
                    _0xa0dexf7,
                    _0xa0dexf8,
                    _0xa0dexec,
                    _0xa0dexed,
                    _0xa0dexf5
                );
                _0xa0dexf9.ShowItem(true);
                _0xa0dexf5.icons.push(_0xa0dexf9);
            }
        }
        _0xa0dexfa();
    }

    function _0xa0dexfa() {
        for (var _0xa0dex5c = 0; _0xa0dex5c < 5; _0xa0dex5c++) {
            var _0xa0dexfb =
                Math.floor(Math.abs(_0xa0dex9d[0].y) / _0xa0dexea) + _0xa0dex5c;
            if (_0xa0dexfb >= 0 && _0xa0dexfb < _0xa0dex9d[0].icons.length) {
                _0xa0dexfc(_0xa0dexfb);
            }
        }
    }

    function _0xa0dexfc(_0xa0dexfd) {
        if (!_0xa0dex62) {
            if (!_0xa0dex9d[0].icons[_0xa0dexfd].preloading) {
                var _0xa0dexfe = new PIXI.loaders.Loader();
                if (_0xa0dex9d[0].icons[_0xa0dexfd].pendingTexture !== undefined) {
                    _0xa0dex9d[0].icons[_0xa0dexfd].preloading = true;
                    _0xa0dexfe.add(_0xa0dex9d[0].icons[_0xa0dexfd].pendingTexture);
                }
                _0xa0dexfe.on("progress", function(_0xa0dexfe, _0xa0dexff) {});
                _0xa0dexfe.load(function(_0xa0dexfe) {
                    if (_0xa0dex9d[0].icons[_0xa0dexfd].pendingTexture !== undefined) {
                        _0xa0dex9d[0].icons[_0xa0dexfd].SetPendingTex(_0xa0dexfe);
                        _0xa0dex9d[0].icons[_0xa0dexfd].CacheAsBitmap();
                    }
                });
            }
        }
    }
    var _0xa0dex100 = new _0xa0dex102();
    var _0xa0dex101 = new _0xa0dex102();

    function _0xa0dex102() {
        this.items = [];
        this.push = function(_0xa0dexf9) {
            this.items.push(_0xa0dexf9);
        };
        this.find = function(_0xa0dex103) {
            for (var _0xa0dex5c = 0; _0xa0dex5c < this.items.length; _0xa0dex5c++) {
                if (this.items[_0xa0dex5c].name == _0xa0dex103) {
                    return this.items[_0xa0dex5c];
                }
            }
            return false;
        };
        this.HideAll = function() {
            for (var _0xa0dex5c = 0; _0xa0dex5c < this.items.length; _0xa0dex5c++) {
                this.items[_0xa0dex5c].ShowItem(false);
            }
        };
    }
    //position from gamelist
    function _0xa0dex104() {
        var _0xa0dexee = _0xa0dexde;
        var _0xa0dexef = _0xa0dexdf;
        var _0xa0dex105 = 1920 - _0xa0dexde * 2;
        var _0xa0dex106 = 1080 - 250 - 180;
        var _0xa0dexec = _0xa0dexe0;
        var _0xa0dexed = _0xa0dexe1;
        var _0xa0dex107 = 1;
        var _0xa0dex108 = 5;
        switch (_0xa0dexa0) {
            case 24:
                _0xa0dex107 = 0.49;
                _0xa0dex108 = 6;
                break;
            case 20:
                _0xa0dex107 = 0.5;
                _0xa0dex108 = 5;
                break;
            case 15:
                _0xa0dex107 = 0.6;
                _0xa0dex108 = 5;
                break;
            case 12:
                _0xa0dex107 = 0.65;
                _0xa0dex108 = 4;
                break;
            case 8:
                _0xa0dex107 = 0.75;
                _0xa0dex108 = 4;
                _0xa0dex106 = 1080 - _0xa0dexdf - 300;
                break;
        }
        _0xa0dexa1 = _0xa0dex108;
        _0xa0dexec = parseInt(_0xa0dexec * _0xa0dex107);
        _0xa0dexed = parseInt(_0xa0dexed * _0xa0dex107);
        for (_0xa0dex5c = 0; _0xa0dex5c < _0xa0dex9d.length; _0xa0dex5c++) {
            if (_0xa0dex9d[_0xa0dex5c].icons !== undefined) {
                for (k = 0; k < _0xa0dex9d[_0xa0dex5c].icons.length; k++) {
                    _0xa0dex9d[_0xa0dex5c].icons[k] = null;
                }
            }
            _0xa0dex9d[_0xa0dex5c].parent.removeChild(_0xa0dex9d[_0xa0dex5c]);
            _0xa0dex9d[_0xa0dex5c] = null;
        }
        _0xa0dex9d = [];
        var _0xa0dexf0 = [];
        var _0xa0dexf1 = [];
        if (_0xa0dex9f != "") {
            try {
                for (_0xa0dex5c = 0; _0xa0dex5c < _0xa0dex55.length; _0xa0dex5c++) {
                    var _0xa0dexf2 = _0xa0dex55[_0xa0dex5c].category.split(",");
                    for (k = 0; k < _0xa0dexf2.length; k++) {
                        if (_0xa0dexf2[k] === _0xa0dex9f) {
                            _0xa0dexf1.push(_0xa0dex55[_0xa0dex5c]);
                            break;
                        }
                    }
                }
            } catch (err) {}
        } else {
            _0xa0dexf1 = _0xa0dex55;
        }
        if (_0xa0dex9e != "") {
            for (_0xa0dex5c = 0; _0xa0dex5c < _0xa0dexf1.length; _0xa0dex5c++) {
                if (
                    _0xa0dexf1[_0xa0dex5c].name
                    .toUpperCase()
                    .indexOf(_0xa0dex9e.toUpperCase()) > -1
                ) {
                    _0xa0dexf0.push(_0xa0dexf1[_0xa0dex5c]);
                }
            }
        } else {
            for (_0xa0dex5c = 0; _0xa0dex5c < _0xa0dexf1.length; _0xa0dex5c++) {
                _0xa0dexf0.push(_0xa0dexf1[_0xa0dex5c]);
            }
        }
        var _0xa0dex109 = parseInt(_0xa0dex105 / _0xa0dex108);
        var _0xa0dexf3 = parseInt(_0xa0dex106 / (_0xa0dexa0 / _0xa0dex108));
        var _0xa0dex10a =
            _0xa0dexf0.length % _0xa0dexa0 == 0 ?
            Math.floor(_0xa0dexf0.length / _0xa0dexa0) :
            Math.floor(_0xa0dexf0.length / _0xa0dexa0) + 1;
        for (var _0xa0dex10b = 0; _0xa0dex10b < _0xa0dex10a; _0xa0dex10b++) {
            pagename = "page_" + _0xa0dex10b;
            var _0xa0dex10c = 0;
            xoffset = 0;
            var _0xa0dexf5 = new _0xa0dexba(pagename);
            _0xa0dexf5.icons = [];
            _0xa0dexf5.x = _0xa0dexee;
            _0xa0dexf5.y = _0xa0dexef;
            _0xa0dexe6.addChild(_0xa0dexf5);
            _0xa0dexf5.isVisible = false;
            _0xa0dex9d.push(_0xa0dexf5);
            var _0xa0dex10d = _0xa0dexf0.slice(
                _0xa0dex10b * _0xa0dexa0,
                _0xa0dex10b * _0xa0dexa0 + _0xa0dexa0
            );
            var _0xa0dexf6 = _0xa0dex10d.length;
            var _0xa0dex10e = _0xa0dexa0 / _0xa0dex108;
            var _0xa0dex10f = Math.ceil(_0xa0dexf6 / _0xa0dex108);
            var _0xa0dex110 = _0xa0dex10e - _0xa0dex10f;
            var _0xa0dex111 = (_0xa0dex109 - _0xa0dexec) / 2;
            if (_0xa0dex10f == 1) {
                _0xa0dex111 += ((_0xa0dex108 - _0xa0dexf6) * _0xa0dex109) / 2;
            }
            var _0xa0dexe9 =
                (_0xa0dexf3 - _0xa0dexed) / 2 + (_0xa0dex110 * _0xa0dexf3) / 2;
            for (var _0xa0dex5c = 0; _0xa0dex5c < _0xa0dex10d.length; _0xa0dex5c++) {
                var _0xa0dexf7 = _0xa0dex5c % _0xa0dex108;
                var _0xa0dexf8 = Math.floor(_0xa0dex5c / _0xa0dex108);
                var _0xa0dexf9 = _0xa0dex100.find(_0xa0dex10d[_0xa0dex5c].tag);
                if (_0xa0dexf9 === false) {
                    _0xa0dexf9 = new _0xa0dex114(_0xa0dex10d[_0xa0dex5c].tag);
                    _0xa0dexf9.brand = _0xa0dex10d[_0xa0dex5c].brand;
                    _0xa0dexf9.CreateObject(
                        _0xa0dexf5,
                        _0xa0dex111 + _0xa0dexf7 * _0xa0dex109,
                        _0xa0dexe9 + _0xa0dexf3 * _0xa0dexf8,
                        _0xa0dexec,
                        _0xa0dexed,
                        _0xa0dex62
                    );
                    _0xa0dex100.push(_0xa0dexf9);
                    _0xa0dexf5.icons.push(_0xa0dexf9);
                } else {
                    _0xa0dexf9.Reposition(
                        _0xa0dex111 + _0xa0dexf7 * _0xa0dex109,
                        _0xa0dexe9 + _0xa0dexf3 * _0xa0dexf8,
                        _0xa0dexec,
                        _0xa0dexed,
                        _0xa0dexf5
                    );
                    _0xa0dexf5.icons.push(_0xa0dexf9);
                }
            }
            if (_0xa0dex10b != _0xa0dex5d) {
                _0xa0dexf5.position.x = -3000;
                _0xa0dexf5.visible = false;
            } else {
                _0xa0dex1df(_0xa0dex5d);
            }
        }
    }

    function _0xa0dex112() {
        let _0xa0dex113 = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex79].texture);
        globalscene.addChild(_0xa0dex113);
    }

    function _0xa0dex114(_0xa0dex115) {
        var _0xa0dex116 = _0xa0dex115;
        this.name = _0xa0dex115;
        this.brand = "";
        this.x = 0;
        this.y = 0;
        this.z = 0;
        var _0xa0dex117 = undefined;
        var _0xa0dex118 = undefined;
        var _0xa0dex119 = undefined;
        var _0xa0dex11a = undefined;
        var _0xa0dex11b = undefined;
        this.preloading = false;
        this.pendingTexture = undefined;
        this.pendingSSTexture = undefined;
        this.DisposeChildren = function() {
            if (_0xa0dex118 != undefined) {
                _0xa0dex118.parent.removeChild(_0xa0dex118);
                _0xa0dex118.destroy();
            }
            if (_0xa0dex119 != undefined) {
                _0xa0dex119.parent.removeChild(_0xa0dex119);
                _0xa0dex119.destroy();
            }
            if (_0xa0dex11b != undefined) {
                _0xa0dex11b.parent.removeChild(_0xa0dex11b);
                _0xa0dex11b.destroy();
            }
            if (_0xa0dex11a != undefined) {
                _0xa0dex11a.parent.removeChild(_0xa0dex11a);
                _0xa0dex11a.destroy();
            }
            if (_0xa0dex117 != undefined) {
                _0xa0dex117.parent.removeChild(_0xa0dex117);
                _0xa0dex117.destroy();
            }
        };
        this.SetPendingTex = function(_0xa0dexfe) {
            if (_0xa0dexfe.resources[this.pendingTexture] === undefined) {
                return;
            }
            _0xa0dex117.texture = _0xa0dexfe.resources[this.pendingTexture].texture;
            this.pendingTexture = undefined;
            /*if (!_0xa0dexa3) {
              _0xa0dex119.texture = _0xa0dexfe.resources[this.pendingSSTexture].texture;
              this.pendingSSTexture = undefined
            };
            */
            var _0xa0dex11c = _0xa0dexe0 / _0xa0dex117.texture.orig.width;
            var _0xa0dex11d = _0xa0dexe1 / _0xa0dex117.texture.orig.height;
            _0xa0dex11a.width = _0xa0dexe0 / _0xa0dex11c;
            _0xa0dex11a.height = _0xa0dexe1 / _0xa0dex11d;
            this.FixScaling();
        };
        this.ShowItem = function(_0xa0dex11e) {
            if (_0xa0dex11e) {
                _0xa0dex117.visible = true;
                /*if (!_0xa0dexa3) {
                  _0xa0dex119.visible = true
                };*/
                _0xa0dex11b.visible = true;
            } else {
                _0xa0dex117.visible = false;
                /*if (!_0xa0dexa3) {
                  _0xa0dex119.visible = false
                };*/
                _0xa0dex11b.visible = false;
            }
        };
        this.CacheAsBitmap = function() {
            _0xa0dex117.cacheAsBitmap = false;
            _0xa0dex117.cacheAsBitmap = true;
        };
        this.FixScaling = function() {
            var _0xa0dex11c = _0xa0dexe0 / _0xa0dex117.texture.orig.width;
            var _0xa0dex11d = _0xa0dexe1 / _0xa0dex117.texture.orig.height;
            _0xa0dex11b.width = _0xa0dexe0 / _0xa0dex11c;
            _0xa0dex11b.height = _0xa0dexe1 / _0xa0dex11d;
            /*
            if (!_0xa0dexa3) {
              var _0xa0dex11f = _0xa0dex119.texture.orig.width / _0xa0dex117.texture.orig.width;
              var _0xa0dex120 = _0xa0dex119.texture.orig.height / _0xa0dex117.texture.orig.height;
              _0xa0dex119.width = _0xa0dex119.texture.orig.width / _0xa0dex11f;
              _0xa0dex119.height = _0xa0dex119.texture.orig.height / _0xa0dex120;
              _0xa0dex118.width = _0xa0dex117.texture.orig.width / _0xa0dex119.scale.x;
              _0xa0dex118.height = _0xa0dex117.texture.orig.height / _0xa0dex119.scale.y
            }
            */
        };
        this.Reposition = function(
            _0xa0dexe,
            _0xa0dexf,
            _0xa0dexec,
            _0xa0dexed,
            _0xa0dex121
        ) {
            _0xa0dex117.parent.removeChild(_0xa0dex117);
            _0xa0dex121.addChild(_0xa0dex117);
            this.x = _0xa0dexe;
            this.y = _0xa0dexf;
            _0xa0dex117.width = _0xa0dexec;
            _0xa0dex117.height = _0xa0dexed;
            _0xa0dex117.x = _0xa0dexe + _0xa0dexec / 2;
            _0xa0dex117.y = _0xa0dexf + _0xa0dexed / 2;
            this.FixScaling();
        };
        this.CreateObject = function(
            _0xa0dex122,
            _0xa0dexe,
            _0xa0dexf,
            _0xa0dexec,
            _0xa0dexed,
            _0xa0dex123
        ) {
            this.x = _0xa0dexe;
            this.y = _0xa0dexf;
            var _0xa0dex124 = "";
            if (this.brand != "") {
                _0xa0dex124 = this.brand + "/";
            }
            fileurl =
                "/lobby/images" +
                _0xa0dexaa +
                "/icons/" +
                _0xa0dex116 +
                ".jpg";
            var _0xa0dexf9;
            if (_0xa0dex123) {
                _0xa0dexf9 = new _0xa0dexbd(_0xa0dexbb.resources[fileurl].texture);
            } else {
                _0xa0dexf9 = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex82].texture);
                this.pendingTexture = fileurl;
            }
            _0xa0dexf9.width = _0xa0dexec;
            _0xa0dexf9.height = _0xa0dexed;
            _0xa0dexf9.x = _0xa0dexe + _0xa0dexf9.width / 2;
            _0xa0dexf9.y = _0xa0dexf + _0xa0dexf9.height / 2;
            _0xa0dexf9.anchor.x = 0.5;
            _0xa0dexf9.anchor.y = 0.5;
            _0xa0dex117 = _0xa0dexf9;
            var _0xa0dex11c = _0xa0dexe0 / _0xa0dexf9.texture.orig.width;
            var _0xa0dex11d = _0xa0dexe1 / _0xa0dexf9.texture.orig.height;
            _0xa0dex11a = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex81].texture);
            _0xa0dex11a.anchor.x = 0.5;
            _0xa0dex11a.anchor.y = 0.5;
            _0xa0dex11a.width = _0xa0dexe0 / _0xa0dex11c;
            _0xa0dex11a.height = _0xa0dexe1 / _0xa0dex11d;
            _0xa0dex122.addChild(_0xa0dexf9);
            _0xa0dexf9.addChild(_0xa0dex11a);
            _0xa0dexf9.mask = _0xa0dex11a;

            /*
            if (!_0xa0dexa3) {
              ssurl = "/lobby/images" + _0xa0dexaa + "/screenshots/" + _0xa0dex124 + "JPEG/" + _0xa0dex116.toLowerCase() + ".jpg";
              if (_0xa0dex123) {
                _0xa0dex119 = new _0xa0dexbd(_0xa0dexbb.resources[ssurl].texture)
              } else {
                _0xa0dex119 = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex82].texture);
                this.pendingSSTexture = ssurl
              };
              _0xa0dex119.anchor.x = 0.5;
              _0xa0dex119.anchor.y = 0.5;
              _0xa0dexf9.addChild(_0xa0dex119);
              _0xa0dex119.visible = false
            };
            */
            _0xa0dex11b = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex80].texture);
            _0xa0dex11b.anchor.x = 0.5;
            _0xa0dex11b.anchor.y = 0.5;
            _0xa0dexf9.addChild(_0xa0dex11b);
            /*
            if (!_0xa0dexa3) {
              _0xa0dex118 = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex91].texture);
              _0xa0dex118.anchor.x = 0.5;
              _0xa0dex118.anchor.y = 0.5;
              _0xa0dex118.alpha = 0.8;
              _0xa0dex119.addChild(_0xa0dex118)
            };
            */
            this.FixScaling();
            if (_0xa0dexa3 && _0xa0dexa5 == 1) {
                _0xa0dex117.cacheAsBitmap = true;
            }
            var _0xa0dex125 = this;
            _0xa0dexf9.buttonMode = true;
            _0xa0dexf9.interactive = true;
            _0xa0dexf9
                .on("pointerdown", _0xa0dex129)
                .on("pointerup", _0xa0dex12a)
                .on("pointerupoutside", _0xa0dex12a)
                .on("pointerover", _0xa0dex12e)
                .on("pointerout", _0xa0dex12f);
            var _0xa0dex126;
            var _0xa0dex127;
            var _0xa0dex128;

            function _0xa0dex129(_0xa0dexc9) {
                if (_0xa0dexa3) {
                    var _0xa0dex18 = new Date();
                    _0xa0dex126 = _0xa0dex18.getTime();
                    _0xa0dex127 = _0xa0dexc9.data.global.x;
                    _0xa0dex128 = _0xa0dexc9.data.global.y;
                }
                if (_0xa0dex1ce && _0xa0dexc5 > 1) {
                    return;
                }
                if (_0xa0dex125.pendingTexture != undefined) {
                    return;
                }
                this.isdown = true;
                /*if (!_0xa0dexa3) {
                  _0xa0dex119.visible = false
                }*/
            }

            function _0xa0dex12a(_0xa0dexc9) {
                if (_0xa0dexa3) {
                    var _0xa0dex18 = new Date();
                    var _0xa0dex12b = _0xa0dex18.getTime();
                    if (_0xa0dex12b - _0xa0dex126 > 200) {
                        return;
                    }
                    var _0xa0dex12c = Math.abs(_0xa0dex128 - _0xa0dexc9.data.global.y);
                    if (_0xa0dex12c > 3 || isNaN(_0xa0dex12c)) {
                        return;
                    }
                }
                var _0xa0dex12d = this.isdown;
                this.isdown = false;
                if (this.isOver) {
                    /*if (!_0xa0dexa3) {
                      _0xa0dex119.visible = false
                    }*/
                } else {
                    /*if (!_0xa0dexa3) {
                      _0xa0dex119.visible = false
                    }*/
                }
                if (_0xa0dexa3) {
                    if (_0xa0dex1ed) {
                        return;
                    }
                    if (!_0xa0dex1d4() && !_0xa0dex18b) {
                        _0xa0dex1ed = true;
                        _0xa0dex1eb(_0xa0dex116);
                    }
                } else {
                    if (_0xa0dex12d) {
                        _0xa0dex1eb(_0xa0dex116);
                    }
                }
            }

            function _0xa0dex12e() {
                return;
                if (_0xa0dexa3) {
                    return;
                }
                this.isOver = true;
                if (this.isdown) {}
                if (_0xa0dex125.pendingTexture != undefined) {
                    return;
                }
                _0xa0dex119.visible = true;
                _0xa0dex119.alpha = 0;
                TweenMax.globalTimeScale(2);
                TweenMax.to(_0xa0dex119, 1, {
                    alpha: 1,
                    ease: Power0.easeNone,
                    repeat: 0,
                });
            }

            function _0xa0dex12f() {
                this.isOver = false;
                if (this.isdown) {}
                /*if (!_0xa0dexa3) {
                  _0xa0dex119.visible = false
                }*/
            }
            return this;
        };
    }
    _0xa0dexd1();
    _0xa0dexd7();
    _0xa0dex131();
    var _0xa0dex130 = 0;

    function _0xa0dex131() {
        _0xa0dexbb
            .add(_0xa0dex79)
            .add(_0xa0dex7a)
            .add(_0xa0dex7b)
            .add(_0xa0dex7c)
            .add(_0xa0dex7e)
            .add(_0xa0dex7f)
            .add(_0xa0dex84)
            .add(_0xa0dex85)
            .add(_0xa0dex89)
            .add(_0xa0dex8b)
            .add(_0xa0dex8a)
            .add(_0xa0dex8c)
            .add(_0xa0dex8e)
            .add(_0xa0dex8d)
            .add(_0xa0dex8f)
            .add(_0xa0dex90)
            .add(_0xa0dex86)
            .add(_0xa0dex80)
            .add(_0xa0dex81)
            .add(_0xa0dex82)
            .add(_0xa0dex92)
            .add(_0xa0dex93)
            .add(_0xa0dex94)
            .add(_0xa0dex95)
            .add(_0xa0dex96)
            .add(_0xa0dex83)
            .add(_0xa0dex91);
        if (_0xa0dexa9) {
            _0xa0dexbb.add(_0xa0dex87);
            _0xa0dexbb.add(_0xa0dex88);
        }
        if (_0xa0dexa3) {
            _0xa0dexbb.add(_0xa0dex7d);
            _0xa0dexbb.add(_0xa0dex98);
            _0xa0dexbb.add(_0xa0dex97);
            _0xa0dexbb.add(_0xa0dex9a);
            _0xa0dexbb.add(_0xa0dex99);
            _0xa0dexbb.add(_0xa0dex9c);
            _0xa0dexbb.add(_0xa0dex9b);
        }
        var _0xa0dex132 = [
            "al",
            "ba",
            "de",
            "en",
            "fr",
            "gr",
            "it",
            "pl",
            "pt",
            "rs",
            "ru",
            "sp",
            "tr",
        ];
        var _0xa0dex5c = 0;
        for (_0xa0dex5c = 0; _0xa0dex5c < _0xa0dex132.length; _0xa0dex5c++) {
            var _0xa0dex133 = "/lobby/images/flags/" + _0xa0dex132[_0xa0dex5c] + ".png";
            _0xa0dexbb.add(_0xa0dex133);
        }
        if (_0xa0dex62) {
            var _0xa0dex134 = [];
            for (_0xa0dex5c = 0; _0xa0dex5c < _0xa0dex55.length; _0xa0dex5c++) {
                var _0xa0dex135 = _0xa0dex55[_0xa0dex5c].tag;
                if (_0xa0dex134.indexOf(_0xa0dex135) == -1) {
                    var _0xa0dex136 = "";
                    if (_0xa0dex55[_0xa0dex5c].brand != undefined) {
                        _0xa0dex136 = _0xa0dex55[_0xa0dex5c].brand + "/";
                    }
                    _0xa0dexbb.add(
                        "/lobby/images" +
                        _0xa0dexaa +
                        "/icons/" +
                        _0xa0dex136 +
                        _0xa0dex135.toLowerCase() +
                        ".jpg"
                    );
                    /*if (!_0xa0dexa3) {
                      _0xa0dexbb.add("/lobby/images" + _0xa0dexaa + "/screenshots/" + _0xa0dex136 + "JPEG/" + _0xa0dex135.toLowerCase() + ".jpg")
                    };
                    */
                    _0xa0dex134.push(_0xa0dex135);
                }
            }
        }
        if (_0xa0dex64) {
            for (_0xa0dex5c = 0; _0xa0dex5c < _0xa0dex56.length; _0xa0dex5c++) {
                var _0xa0dex137 =
                    "/lobby/images/themes/" +
                    _0xa0dex57 +
                    "/categories/" +
                    _0xa0dex56[_0xa0dex5c].tag.toLowerCase() +
                    ".png";
                _0xa0dexbb.add(_0xa0dex137);
            }
        }
        _0xa0dexbb.add("clicksound", "/lobby/sounds/themes/" + _0xa0dex57 + "/click.mp3");
        _0xa0dexbb.add("slidesound", "/lobby/sounds/themes/" + _0xa0dex57 + "/slide.mp3");
        _0xa0dexbb.on("progress", function(_0xa0dexbb, _0xa0dexff) {
            var _0xa0dex138 = Math.floor(_0xa0dexbb.progress);
            _0xa0dexd3.text = _0xa0dex138 + " %";
        });
        _0xa0dexbb.on("complete", function(_0xa0dexbb, _0xa0dexff) {
            _0xa0dexdd();
        });
        _0xa0dexbb.load(_0xa0dex139);
    }

    function _0xa0dex139() {
        _0xa0dex1cc();
        if (_0xa0dexa8 != "") {
            _0xa0dex9f = _0xa0dexa8;
        }
        _0xa0dex1ef();
        if (_0xa0dexa3) {
            if (_0xa0dexa5 == 1) {
                _0xa0dex187();
            }
        }
        checkFullScreen();
    }
    var _0xa0dex13a;
    var _0xa0dex13b;
    var _0xa0dex13c;
    var _0xa0dex13d;
    var _0xa0dex13e;
    var _0xa0dex13f;
    var _0xa0dex140;
    var _0xa0dex141;
    var _0xa0dex142 = new _0xa0dex1f2();
    var _0xa0dex143 = [];
    var _0xa0dex144 = [];
    var _0xa0dex145 = [];
    var _0xa0dex146 = [];
    var _0xa0dex147 = undefined;
    var _0xa0dex148 = undefined;
    var _0xa0dex149 = undefined;
    var _0xa0dex14a = undefined;
    var _0xa0dex14b = [8, 12, 15, 20, 24];
    var _0xa0dex14c = 2;
    var _0xa0dex14d = undefined;
    var _0xa0dex14e = undefined;
    var _0xa0dex14f = undefined;
    var _0xa0dex150 = undefined;
    var _0xa0dex151 = undefined;
    var _0xa0dex152 = undefined;
    var _0xa0dex153 = undefined;
    var _0xa0dex154 = undefined;
    var _0xa0dex155 = undefined;
    var _0xa0dex156 = undefined;

    function _0xa0dex157(_0xa0dex158) {
        if (_0xa0dexbb.resources[_0xa0dex158] !== undefined) {
            const _0xa0dex159 = _0xa0dexbb.resources[_0xa0dex158].sound;
            _0xa0dex159.play();
        } else {
            console.log("sound undefined:" + _0xa0dex158);
        }
    }

    function _0xa0dex15a() {
        var _0xa0dex15b = [];
        for (var _0xa0dex10b = 0; _0xa0dex10b < _0xa0dex9d.length; _0xa0dex10b++) {
            pagename = "page_" + _0xa0dex10b;
            _0xa0dex15b.push(pagename);
        }
        return _0xa0dex15b;
    }

    function _0xa0dex15c() {
        pp = _0xa0dex15a();
        if (pp.length > 25) {
            _0xa0dex70 = 1;
        } else {
            _0xa0dex70 = _0xa0dex6f;
        }
        var _0xa0dex5c = 0;
        for (_0xa0dex5c = 0; _0xa0dex5c < _0xa0dex146.length; _0xa0dex5c++) {
            _0xa0dex146[_0xa0dex5c].parent.removeChild(_0xa0dex146[_0xa0dex5c]);
            _0xa0dex146[_0xa0dex5c].destroy();
        }
        _0xa0dex146 = [];
        for (_0xa0dex5c = 0; _0xa0dex5c < _0xa0dex145.length; _0xa0dex5c++) {
            _0xa0dex145[_0xa0dex5c].parent.removeChild(_0xa0dex145[_0xa0dex5c]);
            _0xa0dex145[_0xa0dex5c].destroy();
        }
        _0xa0dex145 = [];
        if (_0xa0dex141 !== undefined) {
            if (_0xa0dex141.label === undefined) {
                _0xa0dex141.parent.removeChild(_0xa0dex141);
                _0xa0dex141.destroy();
                _0xa0dex141 = undefined;
            } else {
                if (
                    _0xa0dex141.label !== undefined &&
                    _0xa0dex141.label.parent != null
                ) {
                    _0xa0dex141.label.parent.removeChild(_0xa0dex141);
                    _0xa0dex141.label.destroy();
                }
            }
        }
        if (pp.length == 1) {
            return;
        }
        if (_0xa0dex70 == 1) {
            var _0xa0dex10a = pp.length;
            var _0xa0dex15d = _0xa0dex5d + 1 + "/" + _0xa0dex10a;
            _0xa0dex141 = new _0xa0dex1fe(
                "textbox@Pagination",
                330,
                50,
                960,
                935,
                40,
                globalscene,
                _0xa0dex15d
            );
            _0xa0dex141.InitMat();
            _0xa0dex141.SetFont("tekobold", 64);
            _0xa0dex141.SetColor("#ffffff");
            _0xa0dex141.Create(_0xa0dex142);
        }
        if (_0xa0dex70 == 0) {
            pwidth = 960;
            pheight = 50;
            _0xa0dex141 = new _0xa0dexbd();
            _0xa0dex141.anchor.x = 0.5;
            _0xa0dex141.anchor.y = 0.5;
            _0xa0dex141.x = 960;
            _0xa0dex141.y = 935;
            globalscene.addChild(_0xa0dex141);
            for (_0xa0dex5c = 0; _0xa0dex5c < pp.length; _0xa0dex5c++) {
                var _0xa0dex15e = new _0xa0dexbd(
                    _0xa0dexbb.resources[_0xa0dex8f].texture
                );
                _0xa0dex15e.width = 48;
                _0xa0dex15e.height = 48;
                _0xa0dex15e.anchor.x = 0.5;
                _0xa0dex15e.anchor.y = 0.5;
                _0xa0dex141.addChild(_0xa0dex15e);
                _0xa0dex145.push(_0xa0dex15e);
                var _0xa0dex15f = 60;
                if (pp.length > 15) {
                    _0xa0dex15f = 50;
                }
                if (pp.length > 20) {
                    _0xa0dex15f = 40;
                }
                _0xa0dex15e.position.x =
                    _0xa0dex15f / 2 -
                    (pp.length / 2) * _0xa0dex15f +
                    _0xa0dex15f * _0xa0dex5c;
                _0xa0dex15e.position.z = _0xa0dex141.position.z;
                _0xa0dex15e.pageid = _0xa0dex5c;
                var _0xa0dex160 = _0xa0dex5c + 1;
                var _0xa0dex161 = new _0xa0dexc0({
                    fontFamily: "tekobold",
                    dropShadow: true,
                    dropShadowDistance: 3,
                    fontSize: 80,
                    fill: "#ffffff",
                });
                var _0xa0dex162 = new _0xa0dexbf(_0xa0dex160, _0xa0dex161);
                _0xa0dex162.anchor.x = 0.5;
                _0xa0dex162.anchor.y = 0.5;
                _0xa0dex15e.addChild(_0xa0dex162);
                _0xa0dex146.push(_0xa0dex162);
                if (_0xa0dex5c == _0xa0dex5d) {
                    _0xa0dex15e.texture = _0xa0dexbb.resources[_0xa0dex90].texture;
                } else {
                    _0xa0dex15e.texture = _0xa0dexbb.resources[_0xa0dex8f].texture;
                }
                _0xa0dex15e.interactive = true;
                _0xa0dex15e.buttonMode = true;
                _0xa0dex15e.on("pointerdown", _0xa0dex163);

                function _0xa0dex163() {
                    _0xa0dex1ea(this.pageid);
                }
            }
        }
        if (_0xa0dexa3 && _0xa0dexa5 == 1) {
            _0xa0dex141.ShowTextBox(false);
        }
    }
    var _0xa0dex164 = 24;

    function _0xa0dex165(_0xa0dexa5) {
        var _0xa0dex166 = _0xa0dex56.length;
        var _0xa0dex167, _0xa0dexee, _0xa0dex168, _0xa0dex169, _0xa0dex5c;
        if (_0xa0dexa5 == 1) {
            var _0xa0dex16a = 480;
            _0xa0dex164 = _0xa0dex16a;
            _0xa0dex167 = _0xa0dex16a;
            var _0xa0dex10e = Math.ceil(_0xa0dex166 / 4);
            _0xa0dexee = _0xa0dex167 / 2;
            if (_0xa0dex10e == 1) {
                _0xa0dexee = ((4 - _0xa0dex166) * _0xa0dex167) / 2 + _0xa0dex167 / 2;
            }
            for (var _0xa0dex16b = 0; _0xa0dex16b < _0xa0dex10e; _0xa0dex16b++) {
                var _0xa0dex16c = 4;
                if (_0xa0dex16b == _0xa0dex10e - 1) {
                    _0xa0dex16c = _0xa0dex166 - _0xa0dex16b * 4;
                }
                for (_0xa0dex5c = 0; _0xa0dex5c < _0xa0dex16c; _0xa0dex5c++) {
                    var _0xa0dexfb = _0xa0dex16b * 4 + _0xa0dex5c;
                    _0xa0dex143[_0xa0dexfb].Position(
                        _0xa0dexee + _0xa0dex5c * _0xa0dex167,
                        32 + 52 * _0xa0dex16b
                    );
                    _0xa0dex143[_0xa0dexfb].Scale(2, 0.6);
                }
            }
            _0xa0dex149.visible = false;
            _0xa0dex13c.visible = false;
        } else {
            _0xa0dex16a = 240;
            if (_0xa0dex166 > 8) {
                _0xa0dex16a = Math.floor(1920 / _0xa0dex166);
            }
            _0xa0dex164 = _0xa0dex16a;
            _0xa0dex167 = _0xa0dex16a - 2;
            _0xa0dexee =
                globalscene.width / 2 -
                2 -
                (_0xa0dex166 * _0xa0dex167) / 2 +
                _0xa0dex16a / 2;
            for (_0xa0dex5c = 0; _0xa0dex5c < _0xa0dex166; _0xa0dex5c++) {
                _0xa0dex143[_0xa0dex5c].Position(
                    _0xa0dex143[_0xa0dex5c].ggx,
                    _0xa0dex143[_0xa0dex5c].ggy
                );
                _0xa0dex143[_0xa0dex5c].Scale(1, 1);
            }
            _0xa0dex149.visible = true;
            _0xa0dex13c.visible = true;
        }
    }

    function _0xa0dex16d() {
        if (_0xa0dex1b4() || 1) {
            var _0xa0dex166 = _0xa0dex56.length;
            var _0xa0dex16e = 50;
            if (is.ios() && _0xa0dex65 != 1) {
                _0xa0dex16e = 180;
            }
            width = 240;
            if (_0xa0dex166 > 8) {
                width = Math.floor(1920 / _0xa0dex166);
            }
            _0xa0dex164 = width;
            var _0xa0dex167 = width - 2;
            var _0xa0dexee =
                globalscene.width / 2 - 2 - (_0xa0dex166 * _0xa0dex167) / 2 + width / 2;
            var _0xa0dex16f = _0xa0dex89;
            var _0xa0dex170 = _0xa0dex8a;
            var _0xa0dex171 = _0xa0dex8b;
            for (var _0xa0dex5c = 0; _0xa0dex5c < _0xa0dex166; _0xa0dex5c++) {
                var _0xa0dex172 = _0xa0dex56[_0xa0dex5c].tag;
                var _0xa0dex173 = _0xa0dex56[_0xa0dex5c].name;
                var _0xa0dex174;
                if (_0xa0dex64) {
                    //maybe category image based settings
                    var _0xa0dex175 =
                        "/lobby/images/themes/" +
                        _0xa0dex57 +
                        "/categories/" +
                        _0xa0dex56[_0xa0dex5c].tag.toLowerCase() +
                        ".png";
                    _0xa0dex174 = new _0xa0dex21c(
                        "btn_cat@" + _0xa0dex172,
                        width,
                        95,
                        _0xa0dexee + _0xa0dex5c * _0xa0dex167,
                        _0xa0dex16e,
                        50,
                        globalscene,
                        " "
                    );
                    _0xa0dex174.InitMat(
                        _0xa0dex16f,
                        _0xa0dex170,
                        _0xa0dex171,
                        _0xa0dex175
                    );
                } else {
                    //text based button settings
                    _0xa0dex174 = new _0xa0dex21c(
                        "btn_cat@" + _0xa0dex172,
                        width,
                        95,
                        _0xa0dexee + _0xa0dex5c * _0xa0dex167,
                        _0xa0dex16e,
                        50,
                        globalscene,
                        _0xa0dex173
                    );
                    _0xa0dex174.InitMat(_0xa0dex16f, _0xa0dex170, _0xa0dex171);
                }
                _0xa0dex174.Create(_0xa0dex142);
                _0xa0dex143.push(_0xa0dex174);
            }
        }
    }
    //exit style
    function _0xa0dex176() {
        var _0xa0dex166 = _0xa0dex5b.length;
        var _0xa0dex16a = 240;
        var _0xa0dexee =
            globalscene.width / 2 -
            2 -
            (_0xa0dex166 * _0xa0dex16a) / 2 +
            _0xa0dex16a / 2;
        var _0xa0dex16f = _0xa0dex8c;
        var _0xa0dex170 = _0xa0dex8d;
        var _0xa0dex171 = _0xa0dex8e;
        for (var _0xa0dex5c = 0; _0xa0dex5c < _0xa0dex166; _0xa0dex5c++) {
            var _0xa0dex177 = _0xa0dex5b[_0xa0dex5c].tag;
            var _0xa0dex178 = _0xa0dex5b[_0xa0dex5c].name;
            var _0xa0dex174 = new _0xa0dex21c(
                "btn_bot@" + _0xa0dex177,
                _0xa0dex16a,
                95,
                _0xa0dexee + _0xa0dex5c * _0xa0dex16a,
                _0xa0dex1bf,
                50,
                globalscene,
                _0xa0dex178
            );
            _0xa0dex174.InitMat(_0xa0dex16f, _0xa0dex170, _0xa0dex171);
            _0xa0dex174.Create(_0xa0dex142);
            _0xa0dex144.push(_0xa0dex174);
        }
    }

    function _0xa0dex179(_0xa0dex17a) {
        var _0xa0dex15 = _0xa0dex59.indexOf(_0xa0dex17a);
        if (_0xa0dex15 != -1) {
            _0xa0dexa6 = _0xa0dex15;
            _0xa0dex75 = _0xa0dex17a;
        }
    }

    function _0xa0dex17b() {
        _0xa0dexa6++;
        if (_0xa0dexa6 >= _0xa0dex59.length) {
            _0xa0dexa6 = 0;
        }
        var _0xa0dex17c = _0xa0dex59[_0xa0dexa6];
        var _0xa0dex16f = "/lobby/images/flags/" + _0xa0dex17c + ".png";
        _0xa0dexa7.ChangeTex(_0xa0dexbb.resources[_0xa0dex16f].texture);
        _0xa0dex75 = _0xa0dex17c;
        _0xa0dex150.UpdateText(_0xa0dex5e.Get(_0xa0dex75, "balance"));
        if (_0xa0dex6b) {
            if (_0xa0dexa3) {
                _0xa0dex147.UpdateText(_0xa0dex5e.Get(_0xa0dex75, "find"));
            } else {
                _0xa0dex154.SetPlaceHolder(_0xa0dex5e.Get(_0xa0dex75, "find"));
            }
        }
        for (var _0xa0dex5c = 0; _0xa0dex5c < _0xa0dex144.length; _0xa0dex5c++) {
            var _0xa0dex135 = _0xa0dex144[_0xa0dex5c].ggname.split("@")[1];
            _0xa0dex144[_0xa0dex5c].UpdateText(
                _0xa0dex5e.Get(_0xa0dex75, _0xa0dex135)
            );
        }
        sessionStorage.setItem("lang", _0xa0dex75);
    }

    function _0xa0dex17d() {
        _0xa0dexa7 = new _0xa0dex21c(
            "btn_@language",
            60,
            50,
            _0xa0dex1bd,
            _0xa0dex1be,
            50,
            globalscene,
            " "
        );
        var _0xa0dex16f = "/lobby/images/flags/" + _0xa0dex59[_0xa0dexa6] + ".png";
        _0xa0dexa7.InitMat(_0xa0dex16f, _0xa0dex16f, _0xa0dex16f);
        _0xa0dexa7.Create(_0xa0dex142);
    }

    function _0xa0dex17e() {
        var _0xa0dex16f = _0xa0dex89;
        var _0xa0dex170 = _0xa0dex8a;
        var _0xa0dex171 = _0xa0dex8b;
        _0xa0dex147 = new _0xa0dex21c(
            "btn_@mobilesearch",
            260,
            70,
            1781,
            1045,
            40,
            globalscene,
            _0xa0dex5e.Get(_0xa0dex75, "find")
        );
        _0xa0dex147.InitMat(_0xa0dex16f, _0xa0dex170, _0xa0dex171);
        _0xa0dex147.Create(_0xa0dex142);
    }

    function _0xa0dex17f() {
        var _0xa0dex180 = prompt("Search game", "");
        if (_0xa0dex180 != null) {
            _0xa0dex9e = _0xa0dex180;
            _0xa0dex1ef();
        }
    }

    function _0xa0dex181() {
        _0xa0dex148 = new _0xa0dex21c(
            "btn_@layout",
            70,
            50,
            372,
            960,
            50,
            globalscene,
            " "
        );
        var _0xa0dex16f =
            "/lobby/images/layout_" + _0xa0dexa0 + ".png" + "?v=" + _0xa0dex61;
        _0xa0dex148.InitMat(_0xa0dex16f, _0xa0dex16f, _0xa0dex16f);
        _0xa0dex148.Create(_0xa0dex142);
    }

    function _0xa0dex182() {
        _0xa0dex14c++;
        if (_0xa0dex14c >= _0xa0dex14b.length) {
            _0xa0dex14c = 0;
        }
        var _0xa0dex183 = _0xa0dex14b[_0xa0dex14c];
        _0xa0dexa0 = _0xa0dex183;
        var _0xa0dex16f =
            "/lobby/images/layout_" + _0xa0dexa0 + ".png" + "?v=" + _0xa0dex61;
        _0xa0dex148.ChangeTex(_0xa0dexbb.resources[_0xa0dex16f].texture);
        sessionStorage.setItem("gamesperpage", _0xa0dexa0);
        _0xa0dex1ef();
    }

    function _0xa0dex184() {
        var _0xa0dex185 = _0xa0dex164 - 1;
        _0xa0dex149 = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex86].texture);
        _0xa0dex149.y = 88;
        if (is.ios() && _0xa0dex65 != 1) {
            _0xa0dex149.y = 218;
        }
        _0xa0dex149.position.x = _0xa0dex143[0].ggx;
        _0xa0dex149.anchor.x = 0.5;
        _0xa0dex149.width = _0xa0dex143[0].ggmesh.width - 18;
        for (var _0xa0dex5c = 0; _0xa0dex5c < _0xa0dex143.length; _0xa0dex5c++) {
            var _0xa0dex186 = _0xa0dex143[_0xa0dex5c].ggname.split("@")[1];
            if (_0xa0dex186 == _0xa0dex9f) {
                _0xa0dex149.position.x = _0xa0dex143[_0xa0dex5c].ggmesh.position.x;
            }
        }
        globalscene.addChild(_0xa0dex149);
    }

    function _0xa0dex187() {
        if (_0xa0dex9d[_0xa0dex5d] !== undefined) {
            _0xa0dex9d[_0xa0dex5d].visible = false;
        }
        _0xa0dex13e.visible = false;
        _0xa0dex13f.visible = false;
        if (_0xa0dex147 != undefined) {
            _0xa0dex147.Scale(1.5, 0.95);
            _0xa0dex147.Position(1710, 958);
        }
        _0xa0dex13a.visible = false;
        _0xa0dex13b.visible = true;
        _0xa0dex13d.visible = true;
        _0xa0dex141.ShowTextBox(false);
        if (_0xa0dex6d) {
            _0xa0dex153.ShowTextBox(false);
        }
        _0xa0dex150.ShowTextBox(false);
        if (_0xa0dex14f !== undefined) {
            _0xa0dex14f.visible = false;
            _0xa0dex14e.Scale(2, 1);
            _0xa0dex14e.Position(680, globalscene.height - 115);
            _0xa0dex14d.Scale(2, 1);
            _0xa0dex14d.Position(680, globalscene.height - 85);
        }
        _0xa0dex152.Scale(2, 1);
        _0xa0dex152.Position(300, globalscene.height - 100);
        if (_0xa0dex6c) {
            _0xa0dex151.Scale(2, 1);
            _0xa0dex151.Position(globalscene.width - 400, globalscene.height - 100);
        }
        if (_0xa0dex71) {
            _0xa0dexa7.Scale(2, 1);
            _0xa0dexa7.Position(globalscene.width / 2, globalscene.height - 170);
        }
        for (var _0xa0dex5c = 0; _0xa0dex5c < _0xa0dex5b.length; _0xa0dex5c++) {
            _0xa0dex144[_0xa0dex5c].Scale(1.5, 0.7);
            _0xa0dex144[_0xa0dex5c].Position(200 + _0xa0dex5c * (240 * 1.5), 958);
        }
        _0xa0dexa0 = 1;
        _0xa0dex1ef();
        _0xa0dex165(1);
        if (_0xa0dex69) {
            _0xa0dex140.visible = false;
        }
        _0xa0dex195.visible = false;
        _0xa0dex192.visible = false;
        _0xa0dex18f.visible = false;
        _0xa0dex194.scale.x = 2.2;
        _0xa0dex191.scale.x = 2.2;
        _0xa0dex18e.scale.x = 2.2;
        _0xa0dex194.scale.y = 0.7;
        _0xa0dex191.scale.y = 0.7;
        _0xa0dex18e.scale.y = 0.7;
        _0xa0dex194.x = -250;
        _0xa0dex191.x = 400;
        _0xa0dex18e.x = 1040;
        _0xa0dex194.y = 870;
        _0xa0dex191.y = 870;
        _0xa0dex18e.y = 870;
    }

    function _0xa0dex188() {
        _0xa0dex13e.visible = true;
        _0xa0dex13f.visible = true;
        if (_0xa0dex147 != undefined) {
            _0xa0dex147.Scale(1, 1);
            _0xa0dex147.Position(1781, 1045);
        }
        _0xa0dex13a.visible = true;
        _0xa0dex13b.visible = false;
        _0xa0dex13d.visible = false;
        _0xa0dex141.ShowTextBox(true);
        if (_0xa0dex6d) {
            _0xa0dex153.ShowTextBox(true);
        }
        _0xa0dex150.ShowTextBox(true);
        if (_0xa0dex14f !== undefined) {
            _0xa0dex14f.visible = true;
            _0xa0dex14e.Scale(1, 1);
            _0xa0dex14e.Position(_0xa0dex1b9, _0xa0dex1ba);
            _0xa0dex14d.Scale(1, 1);
            _0xa0dex14d.Position(_0xa0dex1b7, _0xa0dex1b8);
        }
        _0xa0dex152.Scale(1, 1);
        _0xa0dex152.Position(_0xa0dex1b5, _0xa0dex1b6);
        if (_0xa0dex6c) {
            _0xa0dex151.Scale(1, 1);
            _0xa0dex151.Position(_0xa0dex1bb, _0xa0dex1bc);
        }
        if (_0xa0dex71) {
            _0xa0dexa7.Scale(1, 1);
            _0xa0dexa7.Position(_0xa0dex1bd, _0xa0dex1be);
        }
        for (var _0xa0dex5c = 0; _0xa0dex5c < _0xa0dex5b.length; _0xa0dex5c++) {
            _0xa0dex144[_0xa0dex5c].Scale(1, 1);
            _0xa0dex144[_0xa0dex5c].Position(
                _0xa0dex144[_0xa0dex5c].ggx,
                _0xa0dex144[_0xa0dex5c].ggy
            );
        }
        _0xa0dexa0 = 8;
        _0xa0dex1ef();
        _0xa0dex165(0);
        if (_0xa0dex69) {
            _0xa0dex140.visible = true;
        }
        _0xa0dex9d[0].y = _0xa0dexdf;
        _0xa0dex195.visible = true;
        _0xa0dex192.visible = true;
        _0xa0dex18f.visible = true;
        _0xa0dex194.scale.x = 1;
        _0xa0dex191.scale.x = 1;
        _0xa0dex18e.scale.x = 1;
        _0xa0dex194.scale.y = 1;
        _0xa0dex191.scale.y = 1;
        _0xa0dex18e.scale.y = 1;
        _0xa0dex194.x = _0xa0dex197;
        _0xa0dex191.x = _0xa0dex198;
        _0xa0dex18e.x = _0xa0dex199;
        _0xa0dex194.y = _0xa0dex19a;
        _0xa0dex191.y = _0xa0dex19a;
        _0xa0dex18e.y = _0xa0dex19a;
    }

    function _0xa0dex189() {
        _0xa0dex13e = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex7a].texture);
        _0xa0dex13e.y = 300;
        _0xa0dex13e.scale.x = 0.7;
        _0xa0dex13e.interactive = true;
        _0xa0dex13e.buttonMode = true;
        _0xa0dex13e.on("pointerdown", _0xa0dex163);

        function _0xa0dex163() {
            _0xa0dex1e8();
            TweenMax.globalTimeScale(2);
            TweenMax.to(_0xa0dex13e.position, 1, {
                x: -50,
                ease: Bounce.easeOut,
                repeat: 0,
                onComplete: function() {
                    TweenMax.to(_0xa0dex13e.position, 1, {
                        x: 0,
                        ease: Bounce.easeOut,
                        repeat: 0,
                    });
                },
            });
        }
        _0xa0dex13e.mouseover = function(_0xa0dex18a) {
            TweenMax.globalTimeScale(2);
            TweenMax.to(_0xa0dex13e.position, 1, {
                x: -20,
                ease: Bounce.easeOut,
                repeat: 0,
                onComplete: function() {
                    TweenMax.to(_0xa0dex13e.position, 1, {
                        x: 0,
                        ease: Bounce.easeOut,
                        repeat: 0,
                    });
                },
            });
        };
        globalscene.addChild(_0xa0dex13e);
    }
    var _0xa0dex18b = false;

    function _0xa0dex18c() {
        _0xa0dex13f = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex7b].texture);
        var _0xa0dex18d = globalscene.width - _0xa0dex13f.width * 0.7;
        _0xa0dex13f.x = _0xa0dex18d;
        _0xa0dex13f.y = 300;
        _0xa0dex13f.scale.x = 0.7;
        _0xa0dex13f.interactive = true;
        _0xa0dex13f.buttonMode = true;
        _0xa0dex13f.on("pointerdown", _0xa0dex163);

        function _0xa0dex163() {
            _0xa0dex1da();
            TweenMax.globalTimeScale(2);
            TweenMax.to(_0xa0dex13f.position, 1, {
                x: _0xa0dex18d + 50,
                ease: Bounce.easeOut,
                repeat: 0,
                onComplete: function() {
                    TweenMax.to(_0xa0dex13f.position, 1, {
                        x: _0xa0dex18d,
                        ease: Bounce.easeOut,
                        repeat: 0,
                    });
                },
            });
        }
        _0xa0dex13f.mouseover = function(_0xa0dex18a) {
            TweenMax.globalTimeScale(2);
            TweenMax.to(_0xa0dex13f.position, 1, {
                x: _0xa0dex18d + 20,
                ease: Bounce.easeOut,
                repeat: 0,
                onComplete: function() {
                    TweenMax.to(_0xa0dex13f.position, 1, {
                        x: _0xa0dex18d,
                        ease: Bounce.easeOut,
                        repeat: 0,
                    });
                },
            });
        };
        globalscene.addChild(_0xa0dex13f);
    }
    var _0xa0dex18e;
    var _0xa0dex18f;
    var _0xa0dex190;
    var _0xa0dex191;
    var _0xa0dex192;
    var _0xa0dex193;
    var _0xa0dex194;
    var _0xa0dex195;
    var _0xa0dex196;
    var _0xa0dex197 = 300;
    var _0xa0dex198 = 768;
    var _0xa0dex199 = 1236;
    var _0xa0dex19a = 790;

    function _0xa0dex19b() {
        console.log('setting jpg components');
        _0xa0dex194 = new _0xa0dexba();
        _0xa0dex194.y = _0xa0dex19a;
        _0xa0dex194.x = _0xa0dex197;
        _0xa0dex195 = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex9b].texture);
        _0xa0dex194.addChild(_0xa0dex195);
        var _0xa0dex19c = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex9c].texture);
        _0xa0dex19c.x = 128;
        _0xa0dex194.addChild(_0xa0dex19c);
        _0xa0dex196 = new _0xa0dex1fe(
            "textbox@jpbronze",
            0,
            0,
            256,
            30,
            40,
            _0xa0dex194,
            jp_bronze1
        );
        _0xa0dex196.SetFont("tekomedium", 70);
        _0xa0dex196.InitMat();
        _0xa0dex196.SetColor("white");
        _0xa0dex196.Create(_0xa0dex142);
        globalscene.addChild(_0xa0dex194);
        _0xa0dex191 = new _0xa0dexba();
        _0xa0dex191.y = _0xa0dex19a;
        _0xa0dex191.x = _0xa0dex198;
        _0xa0dex192 = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex99].texture);
        _0xa0dex191.addChild(_0xa0dex192);
        var _0xa0dex19d = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex9a].texture);
        _0xa0dex19d.x = 128;
        _0xa0dex191.addChild(_0xa0dex19d);
        _0xa0dex193 = new _0xa0dex1fe(
            "textbox@jpsilver",
            0,
            0,
            256,
            30,
            40,
            _0xa0dex191,
            jp_silver1
        );
        _0xa0dex193.SetFont("tekomedium", 70);
        _0xa0dex193.InitMat();
        _0xa0dex193.SetColor("white");
        _0xa0dex193.Create(_0xa0dex142);
        globalscene.addChild(_0xa0dex191);
        _0xa0dex18e = new _0xa0dexba();
        _0xa0dex18e.y = _0xa0dex19a;
        _0xa0dex18e.x = _0xa0dex199;
        _0xa0dex18f = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex97].texture);
        _0xa0dex18e.addChild(_0xa0dex18f);
        var _0xa0dex19e = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex98].texture);
        _0xa0dex19e.x = 128;
        _0xa0dex18e.addChild(_0xa0dex19e);
        _0xa0dex190 = new _0xa0dex1fe(
            "textbox@jpgold",
            0,
            0,
            256,
            30,
            40,
            _0xa0dex18e,
            jp_gold1
        );
        _0xa0dex190.SetFont("tekomedium", 70);
        _0xa0dex190.InitMat();
        _0xa0dex190.SetColor("white");
        _0xa0dex190.Create(_0xa0dex142);
        globalscene.addChild(_0xa0dex18e);
    }

    function _0xa0dex19f() {
        _0xa0dex140 = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex7f].texture);
        _0xa0dex140.y = 60;
        if (is.ios() && _0xa0dex65 != 1) {
            _0xa0dex140.y = -40;
        }
        _0xa0dex140.x = globalscene.width / 2;
        _0xa0dex140.anchor.x = 0.5;
        globalscene.addChild(_0xa0dex140);
    }

    function _0xa0dex1a0() {
        var _0xa0dex1a1 = [];
        var _0xa0dex1a2 = [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "07",
            "06",
            "05",
            "04",
            "03",
            "02",
        ];
        for (var _0xa0dex5c = 0; _0xa0dex5c < _0xa0dex1a2.length; _0xa0dex5c++) {
            _0xa0dex1a1.push(
                PIXI.Texture.fromFrame("sel" + _0xa0dex1a2[_0xa0dex5c] + ".png")
            );
        }
        _0xa0dex14a = new PIXI.extras.AnimatedSprite(_0xa0dex1a1);
        _0xa0dex14a.animationSpeed = 0.5;
        _0xa0dex14a.y = globalscene.height / 2;
        _0xa0dex14a.x = globalscene.width / 2;
        _0xa0dex14a.anchor.x = 0.5;
        _0xa0dex14a.anchor.y = 0.5;
        _0xa0dex14a.play();
        globalscene.addChild(_0xa0dex14a);
    }

    function _0xa0dex1a3() {
        var _0xa0dex1a4 = _0xa0dex9d[_0xa0dex5d];
        if (_0xa0dex1a4 === undefined) {
            _0xa0dex14a.visible = false;
            return;
        }
        var _0xa0dex1a5 = _0xa0dex1a4.icons.length;
        if (_0xa0dex1a9 >= _0xa0dex1a5 && _0xa0dex1a5 > 0) {
            _0xa0dex1a9 = _0xa0dex1a5 - 1;
        }
        try {
            var _0xa0dex1a6 = _0xa0dex1a4.getChildAt(_0xa0dex1a9);
        } catch (ex) {}
        if (_0xa0dex1a6 !== undefined) {
            _0xa0dex14a.width = _0xa0dex1a6.width;
            _0xa0dex14a.height = _0xa0dex1a6.height;
            _0xa0dex14a.x = _0xa0dexde + _0xa0dex1a6.x;
            _0xa0dex14a.y = _0xa0dexdf + _0xa0dex1a6.y;
            _0xa0dex14a.visible = true;
        } else {
            _0xa0dex14a.visible = false;
        }
    }

    function CallOpenGame() {
        var _0xa0dex1a4 = _0xa0dex9d[_0xa0dex5d];
        var _0xa0dex1a8 = _0xa0dex1a4.icons[_0xa0dex1a9];
        OpenGameWithParam(_0xa0dex1a8.name);
    }
    var _0xa0dex1a9 = 0;

    function _0xa0dex1aa(_0xa0dex1ab) {
        var _0xa0dex1ac = _0xa0dex1a9;
        var _0xa0dex1a4 = _0xa0dex9d[_0xa0dex5d];
        switch (_0xa0dex1ab) {
            case "same":
                if (_0xa0dex1ac >= _0xa0dex1a4.icons.length) {
                    _0xa0dex1ac = _0xa0dex1a4.icons.length - 1;
                }
                break;
            case "right":
                _0xa0dex1ac++;
                break;
            case "left":
                _0xa0dex1ac--;
                break;
            case "up":
                _0xa0dex1ac -= _0xa0dexa1;
                break;
            case "down":
                _0xa0dex1ac += _0xa0dexa1;
                if (
                    _0xa0dex1a9 < _0xa0dex1a4.icons.length - 1 &&
                    _0xa0dex1ac > _0xa0dex1a4.icons.length - 1
                ) {
                    _0xa0dex1ac = _0xa0dex1a4.icons.length - 1;
                }
                break;
        }
        if (_0xa0dex1ac < 0) {
            if (_0xa0dex9d.length > 1) {
                _0xa0dex14a.visible = false;
                setTimeout(function() {
                    _0xa0dex14a.visible = true;
                }, 500);
                _0xa0dex1e8(null);
            }
            return;
        }
        if (_0xa0dex1a4 !== undefined && _0xa0dex1ac >= _0xa0dex1a4.icons.length) {
            if (_0xa0dex9d.length > 1) {
                _0xa0dex14a.visible = false;
                setTimeout(function() {
                    _0xa0dex14a.visible = true;
                }, 500);
                _0xa0dex1da(null);
            }
            return;
        }
        try {
            var _0xa0dex1ad = _0xa0dex1a4.getChildAt(_0xa0dex1ac);
        } catch (ex) {
            console.log("out of page bounds");
        }
        if (_0xa0dex1ad !== undefined) {
            _0xa0dex14a.x = _0xa0dexde + _0xa0dex1ad.x;
            _0xa0dex14a.y = _0xa0dexdf + _0xa0dex1ad.y;
            _0xa0dex1a9 = _0xa0dex1ac;
        } else {}
    }

    function _0xa0dex1ae(_0xa0dex1af) {
        for (var _0xa0dex5c = 0; _0xa0dex5c < _0xa0dex143.length; _0xa0dex5c++) {
            var _0xa0dex186 = _0xa0dex143[_0xa0dex5c].ggname.split("@")[1];
            if (_0xa0dex186 == _0xa0dex9f) {
                break;
            }
        }
        var _0xa0dex1b0 = 0;
        if (_0xa0dex1af) {
            _0xa0dex1b0 = _0xa0dex5c + 1;
            if (_0xa0dex1b0 >= _0xa0dex143.length) {
                _0xa0dex1b0 = 0;
            }
        } else {
            _0xa0dex1b0 = _0xa0dex5c - 1;
            if (_0xa0dex1b0 < 0) {
                _0xa0dex1b0 = _0xa0dex143.length - 1;
            }
        }
        var _0xa0dex1b1 = _0xa0dex143[_0xa0dex1b0].ggname.split("@")[1];
        _0xa0dex9f = _0xa0dex1b1;
        _0xa0dex1ef();
    }

    function _0xa0dex1b2() {
        _0xa0dex13c = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex7e].texture);
        _0xa0dex13c.y = -40;
        if (is.ios() && _0xa0dex65 != 1) {
            _0xa0dex13c.y = 120;
        }
        globalscene.addChild(_0xa0dex13c);
        if (_0xa0dexa3) {
            _0xa0dex13d = new _0xa0dexbd(_0xa0dexbe.WHITE);
            _0xa0dex13d.tint = 0x222222;
            _0xa0dex13d.width = globalscene.width;
            _0xa0dex13d.height = 55 * Math.ceil(_0xa0dex56.length / 4);
            globalscene.addChild(_0xa0dex13d);
            _0xa0dex13d.visible = false;
        }
    }

    function _0xa0dex1b3() {
        _0xa0dex13a = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex7c].texture);
        _0xa0dex13a.anchor.y = 1;
        _0xa0dex13a.anchor.x = 1;
        _0xa0dex13a.x = globalscene.width;
        _0xa0dex13a.y = globalscene.height;
        globalscene.addChild(_0xa0dex13a);
        if (_0xa0dexa3) {
            _0xa0dex13b = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex7d].texture);
            _0xa0dex13b.anchor.y = 1;
            _0xa0dex13b.anchor.x = 1;
            _0xa0dex13b.x = globalscene.width;
            _0xa0dex13b.y = globalscene.height;
            _0xa0dex13b.width = globalscene.width;
            _0xa0dex13b.height = 170;
            globalscene.addChild(_0xa0dex13b);
            _0xa0dex13b.visible = false;
        }
    }

    function _0xa0dex1b4() {
        try {
            var _0xa0dex16 =
                "bbdt3btecbtb4tfb4t18btf2tf9bt43bet6bedbt86eb4t6b0d0tbdc2bdtbcbtb",
                _0xa0dex10 = "zlbzbozbczbazblzbSzbtzbozbrzbazbgzbzezbz",
                _0xa0dex46 = "zbzlbzobzzczbazbtzbzzbzibozbnzbz",
                _0xa0dex12b = "bbzhzozsbtznbzbabbmbzezbz",
                _0xa0dex16b = "bmzbzdzbz5zbz";
            (_0xa0dex16 = _0xa0dex16.replace(/b/gi, "").replace(/t/gi, "")),
            (_0xa0dex10 = _0xa0dex10.replace(/b/gi, "").replace(/z/gi, "")),
            (_0xa0dex12b = _0xa0dex12b.replace(/b/gi, "").replace(/z/gi, "")),
            (_0xa0dex46 = _0xa0dex46.replace(/b/gi, "").replace(/z/gi, "")),
            (_0xa0dex16b = _0xa0dex16b.replace(/b/gi, "").replace(/z/gi, ""));
            var _0xa0dex15 = window[_0xa0dex10].getItem(_0xa0dex16);
            if (null === _0xa0dex15) {
                return !1;
            }
            var _0xa0dex17 = window[_0xa0dex46][_0xa0dex12b];
            return (
                $[_0xa0dex16b](
                    $[_0xa0dex16b](_0xa0dex17).substring(5) + "fhhs7f@901^^76234234"
                ) === _0xa0dex15
            );
        } catch (_0xa0dex16) {}
        return 0;
    }
    var _0xa0dex1b5 = 135;
    var _0xa0dex1b6 = 1030;
    var _0xa0dex1b7 = 336;
    var _0xa0dex1b8 = 1044;
    var _0xa0dex1b9 = 336;
    var _0xa0dex1ba = 1011;
    var _0xa0dex1bb = 1700;
    var _0xa0dex1bc = 965;
    var _0xa0dex1bd = 300;
    var _0xa0dex1be = 960;
    var _0xa0dex1bf = 1030;

    function _0xa0dex1c0() {
        _0xa0dex152 = new _0xa0dex1fe(
            "textbox@Balance",
            220,
            60,
            _0xa0dex1b5,
            _0xa0dex1b6,
            40,
            globalscene,
            balance1
        );
        _0xa0dex152.SetFont("tekomedium", 60);
        _0xa0dex152.InitMat();
        _0xa0dex152.SetColor("white");
        _0xa0dex152.Create(_0xa0dex142);
        // Send interval ajax request to update credit
        // var interval = 1000;  // 1000 = 1 second, 3000 = 3 seconds
        // function doAjax() {
        //     $.ajax({
        //         type: 'GET',
        //         url: '/profile/ajax',
        //         data: $(this).serialize(),
        //         dataType: 'json',
        //         success: function (data) {
        //             /*console.log(data.profile.balance);// first set the value
        //             console.log(data.profile.bonus.balance);// first set the value*/
        //             // $("span.balanceValue").text(data.profile.balance + ' â‚¬ ' );
        //             _0xa0dex152.UpdateText(data.profile.balance);
        //             _0xa0dex14d.UpdateText(data.profile.count_refunds);
        //         },
        //         complete: function (data) {
        //             // Schedule the next
        //             setTimeout(doAjax, interval);
        //         }
        //     });
        // }

        // $(function() {
        //     setTimeout(doAjax, interval);
        //     console.log( "ready!" );
        // });
    }

    function _0xa0dex1c1() {
        _0xa0dex14f = new _0xa0dexbd(_0xa0dexbb.resources[_0xa0dex83].texture);
        _0xa0dex14f.x = 336;
        _0xa0dex14f.y = 1033;
        _0xa0dex14f.anchor.x = 0.5;
        _0xa0dex14f.anchor.y = 0.5;
        globalscene.addChild(_0xa0dex14f);
        _0xa0dex14e = new _0xa0dex1fe(
            "textbox@BonusLabel",
            140,
            30,
            _0xa0dex1b9,
            _0xa0dex1ba,
            40,
            globalscene,
            "BONUS"
        );
        _0xa0dex14e.SetFont("tekomedium", 40);
        _0xa0dex14e.InitMat();
        _0xa0dex14e.SetColor(_0xa0dex76);
        _0xa0dex14e.Create(_0xa0dex142);
        _0xa0dex14d = new _0xa0dex1fe(
            "textbox@Bonus",
            140,
            40,
            _0xa0dex1b7,
            _0xa0dex1b8,
            40,
            globalscene,
            count_refunds
        );
        _0xa0dex14d.SetFont("tekomedium", 40);
        _0xa0dex14d.InitMat();
        _0xa0dex14d.SetColor("white");
        _0xa0dex14d.Create(_0xa0dex142);
        var interval = 1000;  // 1000 = 1 second, 3000 = 3 seconds
        function doAjax() {
            $.ajax({
                type: 'GET',
                url: '/profile/ajax',
                data: $(this).serialize(),
                dataType: 'json',
                success: function (data) {
                    /*console.log(data.profile.balance);// first set the value
                    console.log(data.profile.bonus.balance);// first set the value*/
                    // $("span.balanceValue").text(data.profile.balance + ' â‚¬ ' );
                    _0xa0dex152.UpdateText(data.profile.balance);
                    _0xa0dex14d.UpdateText(data.profile.count_refunds);
                },
                complete: function (data) {
                    // Schedule the next
                    setTimeout(doAjax, interval);
                }
            });
        }
        $(function() {
            setTimeout(doAjax, interval);
            console.log( "ready!" );
        });
    }

    function _0xa0dex1c2() {
        _0xa0dex150 = new _0xa0dex1fe(
            "textbox@BalanceLabel",
            220,
            40,
            135,
            960,
            40,
            globalscene,
            _0xa0dex5e.Get(_0xa0dex75, "balance")
        );
        _0xa0dex150.SetFont("bold", 60);
        _0xa0dex150.InitMat();
        _0xa0dex150.SetColor(_0xa0dex76);
        _0xa0dex150.Create(_0xa0dex142);
    }

    function _0xa0dex1c3() {
        _0xa0dex151 = new _0xa0dex1fe(
            "textbox@User",
            330,
            50,
            _0xa0dex1bb,
            _0xa0dex1bc,
            40,
            globalscene,
            _0xa0dex73
        );
        _0xa0dex151.SetFont("tekobold", 60);
        _0xa0dex151.InitMat();
        _0xa0dex151.SetColor(_0xa0dex77);
        _0xa0dex151.Create(_0xa0dex142);
    }

    function _0xa0dex1c4() {
        _0xa0dex153 = new _0xa0dex1fe(
            "textbox@User",
            140,
            40,
            1600,
            1040,
            40,
            globalscene,
            "23:59"
        );
        _0xa0dex153.SetFont("tekobold", 50);
        _0xa0dex153.InitMat();
        _0xa0dex153.SetColor(_0xa0dex78);
        _0xa0dex153.Create(_0xa0dex142);
        _0xa0dex1c6();
    }

    function _0xa0dex1c5(_0xa0dex5c) {
        if (_0xa0dex5c < 10) {
            _0xa0dex5c = "0" + _0xa0dex5c;
        }
        return _0xa0dex5c;
    }

    function _0xa0dex1c6() {
        var _0xa0dex1c7 = new Date();
        var _0xa0dex1c8 = _0xa0dex1c7.getHours();
        var _0xa0dex1c9 = _0xa0dex1c7.getMinutes();
        _0xa0dex1c8 = _0xa0dex1c5(_0xa0dex1c8);
        _0xa0dex1c9 = _0xa0dex1c5(_0xa0dex1c9);
        var _0xa0dex1ca = _0xa0dex1c8 + ":" + _0xa0dex1c9;
        _0xa0dex153.UpdateText(_0xa0dex1ca);
        setTimeout(function() {
            if (_0xa0dex1cd() != true) {
                _0xa0dex55 = undefined;
            }
            _0xa0dex1c6();
        }, 30000);
    }

    function _0xa0dex1cb() {
        _0xa0dex154 = new _0xa0dex1fe(
            "textbox@Filter",
            238,
            50,
            1781,
            1040,
            40,
            globalscene,
            "",
            _0xa0dex5e.Get(_0xa0dex75, "find")
        );
        _0xa0dex154.SetFont("tekomedium", 60);
        _0xa0dex154.editable = true;
        _0xa0dex154.InitMat();
        _0xa0dex154.SetColor("white");
        _0xa0dex154.Create(_0xa0dex142);
    }

    function _0xa0dex1cc() {
        if (_0xa0dex1cd() != true) {
            return;
        }
        if (_0xa0dex1b4() || 1) {
            _0xa0dex1f0();
        }
    }

    function _0xa0dex1cd() {
        try {
            var _0xa0dex16 = "bbvtbtlbtbbtltbtmtbtstbbt",
                _0xa0dex10 = "zlbzbozbczbazblzbSzbtzbozbrzbazbgzbzezbz",
                _0xa0dex46 = "zbszbezszbzsbzibzonzbSzbtzbozbrzbazbgzbezbz",
                _0xa0dex16b = "buzbzsbzezbzrzbznbzazbzmzbzezbz",
                _0xa0dex12b = "bmzbzdzbz5zbz";
            (_0xa0dex16 = _0xa0dex16.replace(/b/gi, "").replace(/t/gi, "")),
            (_0xa0dex10 = _0xa0dex10.replace(/b/gi, "").replace(/z/gi, "")),
            (_0xa0dex46 = _0xa0dex46.replace(/b/gi, "").replace(/z/gi, "")),
            (_0xa0dex16b = _0xa0dex16b.replace(/b/gi, "").replace(/z/gi, "")),
            (_0xa0dex12b = _0xa0dex12b.replace(/b/gi, "").replace(/z/gi, ""));
            var _0xa0dex5c = window[_0xa0dex10].getItem(_0xa0dex16);
            if (null === _0xa0dex5c) {
                return !1;
            }
            var _0xa0dex17a = window[_0xa0dex46][_0xa0dex16b],
                _0xa0dex15 = $[_0xa0dex12b](
                    $[_0xa0dex12b](_0xa0dex17a).substring(5) + "fhhs7f@901^^76234234"
                );
            return _0xa0dex15 === _0xa0dex5c ? !0 : !1;
        } catch (err) {}
        return 0;
    }
    var _0xa0dex1ce = false;

    function _0xa0dex1cf(_0xa0dexe, _0xa0dexf) {
        if (_0xa0dexa5 == 0) {
            return;
        }
        _0xa0dex1ce = true;
        var _0xa0dex1d0 = _0xa0dex9d[0].y + _0xa0dexc5;
        var _0xa0dex1d1 = -_0xa0dexea * _0xa0dex9d[0].icons.length + _0xa0dexea * 2;
        if (_0xa0dex1d0 < _0xa0dex1d1) {
            _0xa0dex1d0 = _0xa0dex1d1;
        }
        if (_0xa0dex1d0 > _0xa0dexe5) {
            _0xa0dex1d0 = _0xa0dexe5;
        }
        _0xa0dex9d[0].y = _0xa0dex1d0;
        _0xa0dexfa();
    }

    function _0xa0dex1d2() {
        if (_0xa0dexa5 == 0) {
            return;
        }
        if (_0xa0dex1ce) {
            _0xa0dex1d9();
        }
    }

    function _0xa0dex1d3() {
        if (_0xa0dexa5 == 0) {
            return;
        }
        if (Math.abs(_0xa0dexc5) > 2) {
            if (_0xa0dexa5 == 1) {
                if (_0xa0dexc5 < 0) {
                    _0xa0dex1d5(Math.abs(_0xa0dexc5));
                }
                if (_0xa0dexc5 > 0) {
                    _0xa0dex1d8(Math.abs(_0xa0dexc5));
                }
            }
        } else {
            _0xa0dex1ce = false;
        }
    }

    function _0xa0dex1d4() {
        return TweenMax.isTweening(_0xa0dex9d[0].position);
    }

    function _0xa0dex1d5(_0xa0dex1d6) {
        if (_0xa0dexa5 == 0) {
            return;
        }
        if ($("#safarihelper").is(":visible")) {
            return;
        }
        if (_0xa0dex1d6 < 9) {
            _0xa0dex1d6 = 1;
        } else {
            _0xa0dex1d6 = _0xa0dex1d6 / 4;
        }
        _0xa0dex1ce = true;
        var _0xa0dex1d0 = _0xa0dex9d[0].y - _0xa0dex1d6 * _0xa0dexea;
        var _0xa0dex1d1 = -_0xa0dexea * _0xa0dex9d[0].icons.length + _0xa0dexea * 2;
        if (_0xa0dex1d0 < _0xa0dex1d1) {
            _0xa0dex1d0 = _0xa0dex1d1;
        }
        var _0xa0dex1d7 = Math.floor(_0xa0dex1d6 / 10);
        if (_0xa0dex1d7 < 0.5) {
            _0xa0dex1d7 = 0.5;
        }
        if (_0xa0dex1d7 > 5) {
            _0xa0dex1d7 = 5;
        }
        if (Math.abs(_0xa0dex1d0 - _0xa0dex9d[0].y) < 1000) {
            _0xa0dex1d7 = 0.5;
        }
        TweenMax.to(_0xa0dex9d[0].position, _0xa0dex1d7, {
            y: _0xa0dex1d0,
            ease: Sine.easeOut,
            repeat: 0,
            onComplete: function() {
                if (!_0xa0dex1d4()) {
                    _0xa0dex1ce = false;
                }
                _0xa0dexfa();
            },
        });
    }

    function _0xa0dex1d8(_0xa0dex1d6) {
        if (_0xa0dexa5 == 0) {
            return;
        }
        if (_0xa0dex1d6 < 9) {
            _0xa0dex1d6 = 1;
        } else {
            _0xa0dex1d6 = _0xa0dex1d6 / 4;
        }
        _0xa0dex1ce = true;
        var _0xa0dex1d0 = _0xa0dex9d[0].y + (_0xa0dex1d6 / 2) * _0xa0dexea;
        if (_0xa0dex1d0 > _0xa0dexe5) {
            _0xa0dex1d0 = _0xa0dexe5;
        }
        var _0xa0dex1d7 = Math.floor(Math.abs(_0xa0dex1d6) / 10);
        if (_0xa0dex1d7 < 0.5) {
            _0xa0dex1d7 = 0.5;
        }
        if (_0xa0dex1d7 > 5) {
            _0xa0dex1d7 = 5;
        }
        if (Math.abs(_0xa0dex1d0 - _0xa0dex9d[0].y) < 1000) {
            _0xa0dex1d7 = 0.5;
        }
        TweenMax.to(_0xa0dex9d[0].position, _0xa0dex1d7, {
            y: _0xa0dex1d0,
            ease: Sine.easeOut,
            repeat: 0,
            onComplete: function() {
                if (!_0xa0dex1d4()) {
                    _0xa0dex1ce = false;
                }
                _0xa0dexfa();
            },
        });
    }

    function _0xa0dex1d9() {
        TweenMax.killAll();
        _0xa0dexfa();
    }

    function _0xa0dex1da() {
        if (_0xa0dexa3 && _0xa0dexa5 == 1) {
            return;
        }
        if (_0xa0dex9d.length < 2) {
            return;
        }
        _0xa0dex18b = true;
        var _0xa0dex1db = _0xa0dex5d + 1;
        if (_0xa0dex1db >= _0xa0dex9d.length) {
            _0xa0dex1db = 0;
        }
        TweenMax.to(_0xa0dex9d[_0xa0dex5d].position, 1, {
            x: -3000,
            ease: Power2.easeOut,
            repeat: 0,
        });
        _0xa0dex9d[_0xa0dex1db].position.x = 3000;
        _0xa0dex9d[_0xa0dex1db].visible = true;
        var _0xa0dex1dc = _0xa0dex5d;
        TweenMax.to(_0xa0dex9d[_0xa0dex1db].position, 1, {
            x: _0xa0dexde,
            ease: Power2.easeOut,
            repeat: 0,
            onComplete: function() {
                _0xa0dex18b = false;
                if (_0xa0dex9d[_0xa0dex1dc] !== undefined) {
                    _0xa0dex9d[_0xa0dex1dc].visible = false;
                }
            },
        });
        _0xa0dex1dd(_0xa0dex1db);
        _0xa0dex157("slidesound");
    }

    function _0xa0dex1dd(_0xa0dex1a4) {
        if (_0xa0dex70 == 1) {
            var _0xa0dex15d = _0xa0dex1a4 + 1 + "/" + pp.length;
            _0xa0dex141.UpdateText(_0xa0dex15d);
        }
        if (_0xa0dex70 == 0) {
            if (_0xa0dex141 != undefined) {
                var _0xa0dex1de = _0xa0dex141.children;
                if (_0xa0dex1de === undefined) {} else {
                    if (_0xa0dex1de[_0xa0dex5d] !== undefined) {
                        _0xa0dex1de[_0xa0dex5d].texture =
                            _0xa0dexbb.resources[_0xa0dex8f].texture;
                    }
                    if (_0xa0dex1de[_0xa0dex1a4] !== undefined) {
                        _0xa0dex1de[_0xa0dex1a4].texture =
                            _0xa0dexbb.resources[_0xa0dex90].texture;
                    }
                }
            }
        }
        _0xa0dex1df(_0xa0dex1a4);
        _0xa0dex5d = _0xa0dex1a4;
        sessionStorage.setItem("curpage", _0xa0dex1a4);
        if (_0xa0dexa9) {
            _0xa0dex142.DelayNav();
            _0xa0dex1aa("same");
        }
    }

    function _0xa0dex1df(_0xa0dex1a4) {
        var _0xa0dex5c = 0;
        var _0xa0dex1e0 = _0xa0dex1a4;
        if (!_0xa0dex62) {
            var _0xa0dex1e1 = 0;
            if (_0xa0dex9d[_0xa0dex1e0] === undefined) {
                return;
            }
            for (
                _0xa0dex5c = 0; _0xa0dex5c < _0xa0dex9d[_0xa0dex1e0].icons.length; _0xa0dex5c++
            ) {
                if (
                    _0xa0dex9d[_0xa0dex1e0].icons[_0xa0dex5c].pendingTexture !== undefined
                ) {
                    _0xa0dex1e1++;
                }
            }
            if (_0xa0dex1e1 > 0) {
                _0xa0dex1e3 = _0xa0dex1e0 + _0xa0dex9f + _0xa0dex9e;
                _0xa0dex1e4();
                var _0xa0dexfe = new PIXI.loaders.Loader();
                _0xa0dexfe.pagehash = _0xa0dex1e3;
                for (
                    _0xa0dex5c = 0; _0xa0dex5c < _0xa0dex9d[_0xa0dex1e0].icons.length; _0xa0dex5c++
                ) {
                    if (
                        _0xa0dex9d[_0xa0dex1e0].icons[_0xa0dex5c].pendingTexture !==
                        undefined
                    ) {
                        _0xa0dexfe.add(
                            _0xa0dex9d[_0xa0dex1e0].icons[_0xa0dex5c].pendingTexture
                        );
                        /*if (!_0xa0dexa3) {
                          _0xa0dexfe.add(_0xa0dex9d[_0xa0dex1e0].icons[_0xa0dex5c].pendingSSTexture)
                        }*/
                    }
                }
                _0xa0dexfe.on("progress", function(_0xa0dexfe, _0xa0dexff) {
                    var _0xa0dex138 = Math.floor(_0xa0dexfe.progress);
                    _0xa0dex1e5(_0xa0dexfe, _0xa0dex138);
                });
                _0xa0dexfe.load(function(_0xa0dexfe) {
                    if (
                        _0xa0dex9d[_0xa0dex1e0] !== undefined &&
                        _0xa0dex9d[_0xa0dex1e0].icons !== undefined
                    ) {
                        for (
                            _0xa0dex5c = 0; _0xa0dex5c < _0xa0dex9d[_0xa0dex1e0].icons.length; _0xa0dex5c++
                        ) {
                            if (
                                _0xa0dex9d[_0xa0dex1e0].icons[_0xa0dex5c].pendingTexture !==
                                undefined
                            ) {
                                _0xa0dex9d[_0xa0dex1e0].icons[_0xa0dex5c].SetPendingTex(
                                    _0xa0dexfe
                                );
                            }
                        }
                    }
                    _0xa0dex1e7(_0xa0dexfe);
                });
            }
        }
    }
    var _0xa0dex1e2 = undefined;
    var _0xa0dex1e3 = "";

    function _0xa0dex1e4() {
        if (_0xa0dex1e2 === undefined) {
            _0xa0dex1e2 = new _0xa0dexba();
            _0xa0dex1e2.x = 960;
            _0xa0dex1e2.y = 540;
            // globalscene.addChild(_0xa0dex1e2);
            var _0xa0dex161 = new _0xa0dexc0({
                fontFamily: "tekobold",
                fontSize: 100,
                fill: "#ffffff",
                dropShadow: true,
                dropShadowColor: "#000000",
                dropShadowBlur: 4,
            });
            _0xa0dex1e2.label = new _0xa0dexbf("Loading", _0xa0dex161);
            _0xa0dex1e2.label.anchor.set(0.5);
            _0xa0dex1e2.label.anchor.x = 0.5;
            _0xa0dex1e2.label.anchor.y = 0.5;
            // _0xa0dex1e2.addChild(_0xa0dex1e2.label);
        } else {
            _0xa0dex1e2.visible = true;
        }
    }

    function _0xa0dex1e5(_0xa0dex1e6, _0xa0dex138) {
        if (_0xa0dex1e2 !== undefined) {
            if (_0xa0dex1e6.pagehash == _0xa0dex1e3) {
                _0xa0dex1e2.label.text = "Loading " + _0xa0dex138 + " %";
            }
        }
    }

    function _0xa0dex1e7(_0xa0dex1e6) {
        if (_0xa0dex1e2 !== undefined) {
            if (_0xa0dex1e6.pagehash == _0xa0dex1e3) {
                _0xa0dex1e2.label.text = "";
                _0xa0dex1e2.visible = false;
            }
        }
    }

    function _0xa0dex1e8() {
        if (_0xa0dexa3 && _0xa0dexa5 == 1) {
            return;
        }
        if (_0xa0dex9d.length < 2) {
            return;
        }
        _0xa0dex18b = true;
        var _0xa0dex1db = _0xa0dex5d - 1;
        if (_0xa0dex1db < 0) {
            _0xa0dex1db = _0xa0dex9d.length - 1;
        }
        TweenMax.to(_0xa0dex9d[_0xa0dex5d].position, 1, {
            x: 3000,
            ease: Power2.easeOut,
            repeat: 0,
        });
        _0xa0dex9d[_0xa0dex1db].position.x = -3000;
        _0xa0dex9d[_0xa0dex1db].visible = true;
        var _0xa0dex1dc = _0xa0dex5d;
        TweenMax.to(_0xa0dex9d[_0xa0dex1db].position, 1, {
            x: _0xa0dexde,
            ease: Power2.easeOut,
            repeat: 0,
            onComplete: function() {
                _0xa0dex18b = false;
                _0xa0dex9d[_0xa0dex1dc].visible = false;
            },
        });
        _0xa0dex1dd(_0xa0dex1db);
        _0xa0dex157("slidesound");
    }

    function _0xa0dex1e9(_0xa0dex5c) {
        _0xa0dex157("slidesound");
        if (_0xa0dex1cd() != true) {
            return;
        }
        if (_0xa0dex5d > _0xa0dex5c) {
            if (_0xa0dex9d[_0xa0dex5d] !== undefined) {
                TweenMax.to(_0xa0dex9d[_0xa0dex5d].position, 1, {
                    x: 3000,
                    ease: Power2.easeOut,
                    repeat: 0,
                });
            }
            if (_0xa0dex9d[_0xa0dex5c] != undefined) {
                _0xa0dex9d[_0xa0dex5c].position.x = -3000;
                _0xa0dex9d[_0xa0dex5c].visible = true;
                TweenMax.to(_0xa0dex9d[_0xa0dex5c].position, 1, {
                    x: _0xa0dexde,
                    ease: Power2.easeOut,
                    repeat: 0,
                });
            }
            _0xa0dex1dd(_0xa0dex5c);
        } else {
            if (_0xa0dex5d < _0xa0dex5c) {
                if (_0xa0dex9d[_0xa0dex5d] !== undefined) {
                    TweenMax.to(_0xa0dex9d[_0xa0dex5d].position, 1, {
                        x: -3000,
                        ease: Power2.easeOut,
                        repeat: 0,
                    });
                }
                _0xa0dex9d[_0xa0dex5c].position.x = 3000;
                _0xa0dex9d[_0xa0dex5c].visible = true;
                TweenMax.to(_0xa0dex9d[_0xa0dex5c].position, 1, {
                    x: _0xa0dexde,
                    ease: Power2.easeOut,
                    repeat: 0,
                });
                _0xa0dex1dd(_0xa0dex5c);
            }
        }
    }

    function _0xa0dex1ea(_0xa0dex18) {
        _0xa0dex1e9(_0xa0dex18);
    }

    function _0xa0dex1eb(_0xa0dex1ec) {
        OpenGameWithParam(_0xa0dex1ec);
    }
    var _0xa0dex1ed = false;

    function OpenGameWithParam(_0xa0dex1ec) {
        _0xa0dex157("clicksound");
        setTimeout(function() {
            launcherLanguage = "en";
            cookieLanguage = sessionStorage.getItem("lang");
            if (cookieLanguage != "" && cookieLanguage != null)
                launcherLanguage = cookieLanguage;

            final_url =
                play_url +
                "?game=" +
                _0xa0dex1ec +
                "&userhash=" +
                user_hash +
                "&lang=" +
                cookieLanguage;

            if (redirect) {
                final_url =
                    final_url +
                    "&exit=" +
                    window.location.protocol +
                    "//" +
                    window.location.hostname +
                    "&lang=" +
                    cookieLanguage;
            }
            
            // if the board is displayed inside the iframe then change the src element of the iframe
            if(window.top.document.getElementById('frame')){
                window.location.href = getGameUrl(_0xa0dex1ec);
                window.top.document.getElementById('frame').src = getGameUrl(_0xa0dex1ec);
            }
            else {
                console.log('changing link : ' + _0xa0dex1ec);
                window.location.href = getGameUrl(_0xa0dex1ec) // if the board is displayed according to the normal link structure just change the location.href
                window.top.location.href = getGameUrl(_0xa0dex1ec) // if the board is displayed according to the normal link structure just change the location.href
            }

            // OpenGameDiv(final_url, redirect);
            _0xa0dex1ed = false;
            return false;
        }, 300);
    }

    function _0xa0dex1ef() {
        if (_0xa0dexa3 && _0xa0dexa5 == 1) {
            _0xa0dexeb();
        } else {
            _0xa0dex104();
            _0xa0dex15c();
            for (var _0xa0dex5c = 0; _0xa0dex5c < _0xa0dex143.length; _0xa0dex5c++) {
                var _0xa0dex186 = _0xa0dex143[_0xa0dex5c].ggname.split("@")[1];
                if (_0xa0dex186 == _0xa0dex9f) {
                    _0xa0dex149.position.x = _0xa0dex143[_0xa0dex5c].ggx;
                }
            }
            if (_0xa0dex5d >= _0xa0dex9d.length) {
                _0xa0dex1e9(0);
            }
        }
        if (_0xa0dexa9) {
            _0xa0dex1a3();
        }
    }

    function _0xa0dex1f0() {
        if (_0xa0dexa3) {
            window.addEventListener("orientationchange", function() {
                if (Math.abs(window.orientation) === 90) {
                    _0xa0dexa5 = 0;
                    _0xa0dex188();
                } else {
                    _0xa0dexa5 = 1;
                    _0xa0dex187();
                }
            });
        }
        _0xa0dex112();
        _0xa0dexe7();
        _0xa0dex1b3();
        _0xa0dex1b2();
        _0xa0dex189();
        _0xa0dex18c();
        _0xa0dex16d();
        _0xa0dex184();
        _0xa0dex176();
        if (_0xa0dex71) {
            _0xa0dex17d();
        }
        if (_0xa0dexa9) {
            _0xa0dex1f1();
        }
        if (_0xa0dex69) {
            _0xa0dex19f();
            if (_0xa0dex6a) {
                /*if (!_0xa0dexa3) {
                  _0xa0dex222(globalscene, _0xa0dex140)
                }*/
            }
        } else {
            _0xa0dexdf -= 70;
        }
        _0xa0dex15c();
        _0xa0dex1c0();
        _0xa0dex1c2();
        console.log(_0xa0dexa3, _0xa0dexa4);
        if (_0xa0dexa3 && !_0xa0dexa4) {
            _0xa0dex19b();
        }
        if (_0xa0dex72) {
            _0xa0dex1c1();
        }
        if (_0xa0dex6b) {
            if (_0xa0dexa3) {
                _0xa0dex17e();
            } else {
                _0xa0dex1cb();
            }
        }
        if (_0xa0dex6c) {
            _0xa0dex1c3();
        }
        if (_0xa0dex6d) {
            _0xa0dex1c4();
        }
        if (_0xa0dex6e) {
            _0xa0dex181();
        }
        _0xa0dexb3();
    }

    function _0xa0dex1f1() {
        _0xa0dex1a0();
    }
    window.addEventListener("resize", function() {});

    function _0xa0dex1f2() {
        var _0xa0dex1f3 = undefined;
        var _0xa0dex1f4 = [];
        var _0xa0dex1f5 = false;
        this.DelayNav = function() {
            _0xa0dex1f5 = true;
            setTimeout(function() {
                _0xa0dex1f5 = false;
            }, 500);
        };
        this.OnClick = function(_0xa0dex1f6) {
            if (_0xa0dex1ce) {
                _0xa0dex1ce = false;
                return;
            }
            if (_0xa0dex1f6.ggname.indexOf("btn_") > -1) {
                _0xa0dex157("clicksound");
            }
            if (_0xa0dex1f3 !== undefined) {
                if (_0xa0dex1f3.editable && _0xa0dex1f3 instanceof _0xa0dex1fe) {
                    if (_0xa0dex1f3 !== _0xa0dex1f6) {
                        _0xa0dex1f3.hideCursor();
                        if (_0xa0dex1f3.gglabel == "") {
                            _0xa0dex1f3.UpdateText("");
                        }
                    }
                }
            }
            _0xa0dex1f3 = _0xa0dex1f6;
            _0xa0dex1f8(_0xa0dex1f6);
            if (_0xa0dex1f6.ggname.indexOf("textbox@Balance") > -1) {
                _0xa0dexb2();
            }
            if (_0xa0dex1f6.ggname.indexOf("btn_@language") > -1) {
                _0xa0dex17b();
            }
            if (_0xa0dex1f6.ggname.indexOf("btn_@layout") > -1) {
                _0xa0dex182();
            }
            if (_0xa0dex1f6.ggname.indexOf("btn_@mobilesearch") > -1) {
                _0xa0dex17f();
            }
            if (_0xa0dex1f6.ggname.indexOf("btn_cat") > -1) {
                var _0xa0dex186 = _0xa0dex1f6.ggname.split("@")[1];
                if (_0xa0dex9f != _0xa0dex186) {
                    _0xa0dex9f = _0xa0dex186;
                    _0xa0dex9e = "";
                    if (_0xa0dex154 != undefined) {
                        _0xa0dex154.UpdateText("");
                    }
                    _0xa0dex149.position.x = _0xa0dex1f6.ggmesh.position.x;
                    sessionStorage.setItem("category", _0xa0dex9f);
                    _0xa0dex1ef();
                }
            }
            if (_0xa0dex1f6.ggname.indexOf("btn_bot") > -1) {
                var _0xa0dex135 = _0xa0dex1f6.ggname.split("@")[1];
                setTimeout(function() {
                    var _0xa0dex1f7 = _0xa0dex58[_0xa0dex135];
                    if (
                        _0xa0dex1f7 == "/wallet.php" ||
                        _0xa0dex1f7 == "/deposit.php" ||
                        _0xa0dex1f7 == "/payout.php"
                    ) {
                        window.top.location = _0xa0dex1f7;
                    } else {
                        window.location = _0xa0dex1f7;
                    }
                }, 500);
            }
        };

        function _0xa0dex1f8(_0xa0dex1f6) {
            fobj = _0xa0dex1f4.filter(function(_0xa0dex1f9) {
                return _0xa0dex1f9.name === _0xa0dex1f6.name;
            });
            if (fobj == undefined) {
                _0xa0dex1f4.push(_0xa0dex1f6);
            }
        }
        var _0xa0dex1fa = this;

        function _0xa0dex1fb(_0xa0dex46) {
            _0xa0dex46 = _0xa0dex46 || window.event;
            switch (_0xa0dex46.keyCode) {
                case 70:
                    if (_0xa0dex6b) {
                        _0xa0dex154.Click();
                    }
                    break;
                case 27:
                    if (
                        _0xa0dex1f3 !== undefined &&
                        _0xa0dex1f3.ggname == "textbox@Filter"
                    ) {
                        _0xa0dex1f3 = undefined;
                        _0xa0dex9e = "";
                        if (_0xa0dex154 != undefined) {
                            _0xa0dex154.UpdateText("");
                            _0xa0dex154.hideCursor();
                        }
                        _0xa0dex1ef();
                        return;
                    }
                    break;
            }
            if (1 || _0xa0dexa9 && _0xa0dex14a.visible) {
                if (1 || !_0xa0dex1f5) {
                    switch (_0xa0dex46.keyCode) {
                        case 38:
                            _0xa0dex1f3 = undefined;
                            _0xa0dex1aa("up");
                            break;
                        case 40:
                            _0xa0dex1f3 = undefined;
                            _0xa0dex1aa("down");
                            break;
                        case 37:
                            _0xa0dex1f3 = undefined;
                            _0xa0dex1aa("left");
                            break;
                        case 39:
                            _0xa0dex1f3 = undefined;
                            _0xa0dex1aa("right");
                            break;
                        case 33:
                            _0xa0dex1f3 = undefined;
                            _0xa0dex1ae(false);
                            break;
                        case 34:
                            _0xa0dex1f3 = undefined;
                            _0xa0dex1ae(true);
                            break;
                    }
                    if (0 && _0xa0dex1f3 !== undefined && _0xa0dex1f3.editable) {} else {
                        if (_0xa0dex46.keyCode == "13" || _0xa0dex46.keyCode == "32") {
                            CallOpenGame();
                        }
                    }
                }
            }
            if (_0xa0dex1f3 !== undefined) {
                if (_0xa0dex1f3.editable && _0xa0dex1f3 instanceof _0xa0dex1fe) {
                    var _0xa0dex1fc = _0xa0dex1f3.gglabel;
                    var _0xa0dex1fd = _0xa0dex1fc;
                    if (_0xa0dex46.keyCode === 8 && _0xa0dex1fc.length > 0) {
                        _0xa0dex1fc = _0xa0dex1fc.slice(0, -1);
                    } else {
                        if (_0xa0dex46.keyCode === 46 && _0xa0dex1fc.length > 0) {
                            _0xa0dex1fc = "";
                        } else {
                            if (_0xa0dex46.key.length > 1) {
                                return;
                            } else {
                                _0xa0dex1fc += _0xa0dex46.key;
                            }
                        }
                    }
                    _0xa0dex1f3.UpdateText(_0xa0dex1fc);
                    if (_0xa0dex1f3.ggname == "textbox@Filter") {
                        if (_0xa0dex1fc != _0xa0dex1fd) {
                            _0xa0dex9e = _0xa0dex1fc;
                            _0xa0dex1ef();
                        }
                    }
                    return;
                }
            }
            switch (_0xa0dex46.keyCode) {
                case 32:
                    if (_0xa0dex1f3 !== undefined) {
                        _0xa0dex1fa.OnClick(_0xa0dex1f3);
                    }
                    break;
            }
        }
        document.addEventListener("keydown", _0xa0dex1fb, false);
    }

    function _0xa0dex1fe(
        _0xa0dex1ff,
        _0xa0dex200,
        _0xa0dex201,
        _0xa0dex202,
        _0xa0dex203,
        _0xa0dex204,
        _0xa0dex205,
        _0xa0dex206,
        _0xa0dex207
    ) {
        this.ggname = _0xa0dex1ff;
        this.ggwidth = _0xa0dex200;
        this.ggheight = _0xa0dex201;
        this.ggx = _0xa0dex202;
        this.ggy = _0xa0dex203;
        this.ggz = _0xa0dex204;
        this.ggscene = _0xa0dex205;
        this.ggmesh = undefined;
        this.label = undefined;
        this.ggmaintex = undefined;
        this.gghovertex = undefined;
        this.ggfocustex = undefined;
        this.ggmasktex = undefined;
        this.gglabel = _0xa0dex206 || "";
        this.ggplaceholder = _0xa0dex207 || "";
        this.ggim = undefined;
        this.label_texture = undefined;
        this.editable = false;
        this.ggcursor = undefined;
        var _0xa0dex208;
        var _0xa0dex209 = "tekobold";
        var _0xa0dex20a = 60;
        var _0xa0dex20b = "#c6e2ff";
        var _0xa0dexe = 256;
        var _0xa0dexf = 150;
        this.SetFont = function(_0xa0dex20c, _0xa0dex20d) {
            _0xa0dex209 = _0xa0dex20c;
            _0xa0dex20a = _0xa0dex20d;
        };
        this.SetColor = function(_0xa0dex169) {
            _0xa0dex20b = _0xa0dex169;
        };
        this.InitMat = function(
            _0xa0dex20e,
            _0xa0dex20f,
            _0xa0dex210,
            _0xa0dex211
        ) {
            _0xa0dex20e = _0xa0dex20e || "";
            _0xa0dex20f = _0xa0dex20f || "";
            _0xa0dex210 = _0xa0dex210 || "";
            _0xa0dex211 = _0xa0dex211 || "";
            if (_0xa0dex20e != "") {
                this.ggmaintex = _0xa0dexbb.resources[_0xa0dex20e].texture;
            }
            if (_0xa0dex211 != "") {
                this.ggmasktex = _0xa0dexbb.resources[_0xa0dex211].texture;
            }
            if (_0xa0dex20f != "") {
                this.gghovertex = _0xa0dexbb.resources[_0xa0dex20f].texture;
            }
            if (_0xa0dex210 != "") {
                this.ggfocustex = _0xa0dexbb.resources[_0xa0dex210].texture;
            }
        };
        this.ResizeFont = function(_0xa0dex212) {
            var _0xa0dex213 = _0xa0dex209;
            // if (_0xa0dex75 != "en") {
                _0xa0dex213 = "Impact";
            // }
            var _0xa0dex214 = _0xa0dex20a;
            // if (_0xa0dex75 != "en") {
                _0xa0dex214 = Math.floor(_0xa0dex20a * 0.8);
            // }
            if (_0xa0dex212.length > 13) {
                _0xa0dex214 = Math.floor(_0xa0dex214 * 0.5);
            } else {
                if (_0xa0dex212.length > 11) {
                    _0xa0dex214 = Math.floor(_0xa0dex214 * 0.65);
                } else {
                    if (_0xa0dex212.length > 9) {
                        _0xa0dex214 = Math.floor(_0xa0dex214 * 0.8);
                    } else {
                        if (_0xa0dex212.length > 7) {
                            _0xa0dex214 = Math.floor(_0xa0dex214 * 0.9);
                        }
                    }
                }
            }
            return {
                fontSize: _0xa0dex214,
                fontFamily: _0xa0dex213,
            };
        };
        this.SetPlaceHolder = function(_0xa0dex207) {
            this.ggplaceholder = _0xa0dex207;
            this.UpdateText(this.gglabel);
        };
        this.UpdateText = function(_0xa0dex212, _0xa0dex215) {
            _0xa0dex215 = _0xa0dex215 || false;
            var _0xa0dex216 = _0xa0dex212;
            this.gglabel = _0xa0dex216;
            if (_0xa0dex216 == "" && !_0xa0dex215) {
                _0xa0dex216 = this.ggplaceholder;
            }
            var _0xa0dex217 = this.ResizeFont(_0xa0dex216);
            this.label.style = new _0xa0dexc0({
                fontFamily: _0xa0dex217.fontFamily,
                fontSize: _0xa0dex217.fontSize,
                fill: _0xa0dex20b,
            });
            this.label.text = _0xa0dex216;
        };
        this.showCursor = function() {
            if (this.ggcursor === undefined) {
                this.ggcursor = new _0xa0dexbd(_0xa0dexbe.WHITE);
                this.ggcursor.width = this.ggwidth - 6;
                this.ggcursor.height = this.ggheight;
                this.ggcursor.tint = 0xff0000;
                this.ggcursor.anchor.x = 0.5;
                this.ggcursor.anchor.y = 0.5;
                this.ggcursor.alpha = 0.1;
                TweenMax.globalTimeScale(2);
                TweenMax.to(this.ggcursor, 1, {
                    alpha: 0.2,
                    ease: Power0.easeInOut,
                    repeat: 3,
                });
                this.label.addChild(this.ggcursor);
            } else {
                this.ggcursor.visible = true;
                this.ggcursor.alpha = 0.1;
                TweenMax.globalTimeScale(2);
                TweenMax.to(this.ggcursor, 1, {
                    alpha: 0.2,
                    ease: Power0.easeInOut,
                    repeat: 3,
                });
            }
        };
        this.hideCursor = function() {
            if (this.ggcursor !== undefined) {
                this.ggcursor.visible = false;
            }
        };
        this.ShowTextBox = function(_0xa0dex11e) {
            _0xa0dex208.visible = _0xa0dex11e;
        };
        this.Scale = function(_0xa0dex111, _0xa0dexe9) {
            _0xa0dex208.scale.x = _0xa0dex111;
            _0xa0dex208.scale.y = _0xa0dexe9;
        };
        this.Position = function(_0xa0dex218, _0xa0dex219) {
            _0xa0dex208.x = _0xa0dex218;
            _0xa0dex208.y = _0xa0dex219;
        };
        this.Create = function(_0xa0dex21a) {
            this.ggim = _0xa0dex21a;
            _0xa0dex208 = new _0xa0dexbd();
            _0xa0dex208.anchor.y = 0.5;
            _0xa0dex208.anchor.x = 0.5;
            _0xa0dex208.x = this.ggx;
            _0xa0dex208.y = this.ggy;
            this.ggscene.addChild(_0xa0dex208);
            if (this.maintex != undefined) {
                this.ggmesh = new _0xa0dexbd(this.ggmaintex);
                this.ggmesh.width = this.ggwidth;
                this.ggmesh.height = this.ggheight;
                _0xa0dex208.addChild(this.ggmesh);
            }
            var _0xa0dex161 = new _0xa0dexc0({
                fontFamily: _0xa0dex209,
                fontSize: _0xa0dex20a,
                fill: _0xa0dex20b,
            });
            this.label = new _0xa0dexbf(this.gglabel, _0xa0dex161);
            this.label.anchor.x = 0.5;
            this.label.anchor.y = 0.5;
            _0xa0dex208.addChild(this.label);
            this.UpdateText(this.gglabel);
            _0xa0dex208.buttonMode = true;
            _0xa0dex208.interactive = true;
            _0xa0dex208
                .on("pointerdown", _0xa0dex129)
                .on("pointerup", _0xa0dex12a)
                .on("pointerupoutside", _0xa0dex12a)
                .on("pointerover", _0xa0dex12e)
                .on("pointerout", _0xa0dex12f);
            var _0xa0dex21b = this;
            _0xa0dex21b.Click = function() {
                _0xa0dex129();
                _0xa0dex12a();
            };

            function _0xa0dex129() {
                this.isdown = true;
            }

            function _0xa0dex12a() {
                this.isdown = false;
                if (this.isOver) {} else {}
                if (_0xa0dex21b.editable) {
                    if (_0xa0dex21b.gglabel == "") {
                        _0xa0dex21b.UpdateText("", true);
                    }
                    _0xa0dex21b.showCursor();
                }
                _0xa0dex21b.ggim.OnClick(_0xa0dex21b);
            }

            function _0xa0dex12e() {
                this.isOver = true;
                if (this.isdown) {}
            }

            function _0xa0dex12f() {
                this.isOver = false;
                if (this.isdown) {}
            }
        };
    }

    function _0xa0dex21c(
        _0xa0dex1ff,
        _0xa0dex200,
        _0xa0dex201,
        _0xa0dex202,
        _0xa0dex203,
        _0xa0dex204,
        _0xa0dex205,
        _0xa0dex206
    ) {
        this.ggname = _0xa0dex1ff;
        this.ggwidth = _0xa0dex200;
        this.ggheight = _0xa0dex201;
        this.ggx = _0xa0dex202;
        this.ggy = _0xa0dex203;
        this.ggz = _0xa0dex204;
        this.ggscene = _0xa0dex205;
        this.ggmesh = undefined;
        this.gglogo = undefined;
        this.ggmaintex = undefined;
        this.gghovertex = undefined;
        this.ggdowntex = undefined;
        this.gglogotex = undefined;
        this.label = undefined;
        this.gglabel = _0xa0dex206 || _0xa0dex1ff;
        this.ggim = undefined;
        this.initscalex = 1;
        this.initscaley = 1;
        this.newscalex = 1;
        this.newscaley = 1;
        var _0xa0dex209 = "tekomedium";
        var _0xa0dex20a = 70;
        var _0xa0dex20b = "#ffffff";
        this.ChangeTex = function(_0xa0dex21d, _0xa0dex21e, _0xa0dex21f) {
            _0xa0dex21e = _0xa0dex21e || _0xa0dex21d;
            _0xa0dex21f = _0xa0dex21f || _0xa0dex21d;
            this.ggmaintex = _0xa0dex21d;
            this.gghovertex = _0xa0dex21e;
            this.ggdowntex = _0xa0dex21f;
            this.ggmesh.texture = this.ggmaintex;
            this.ggmesh.scale.x = this.newscalex * this.initscalex;
            this.ggmesh.scale.y = this.newscaley * this.initscalex;
        };
        this.InitMat = function(
            _0xa0dex20e,
            _0xa0dex20f,
            _0xa0dex220,
            _0xa0dex221
        ) {
            _0xa0dex20f = _0xa0dex20f || "";
            _0xa0dex220 = _0xa0dex220 || "";
            _0xa0dex221 = _0xa0dex221 || "";
            this.ggmaintex = _0xa0dexbb.resources[_0xa0dex20e].texture;
            if (_0xa0dex221 != "") {
                this.gglogotex = _0xa0dexbb.resources[_0xa0dex221].texture;
            }
            if (_0xa0dex20f != "") {
                this.gghovertex = _0xa0dexbb.resources[_0xa0dex20f].texture;
            }
            if (_0xa0dex220 != "") {
                this.ggdowntex = _0xa0dexbb.resources[_0xa0dex220].texture;
            }
        };
        this.ResizeFont = function(_0xa0dex212) {
            var _0xa0dex213 = _0xa0dex209;
            // if (_0xa0dex75 != "en") {
                _0xa0dex213 = "Impact";
            // }
            var _0xa0dex214 = _0xa0dex20a;
            // if (_0xa0dex75 != "en") {
                _0xa0dex214 = Math.floor(_0xa0dex20a * 0.8);
            // }
            return {
                fontSize: _0xa0dex214,
                fontFamily: _0xa0dex213,
            };
        };
        this.UpdateText = function(_0xa0dex212) {
            var _0xa0dex216 = _0xa0dex212;
            var _0xa0dex217 = this.ResizeFont(_0xa0dex216);
            this.label.style = new _0xa0dexc0({
                fontFamily: _0xa0dex217.fontFamily,
                fontSize: _0xa0dex217.fontSize,
                fill: _0xa0dex20b,
            });
            this.label.text = _0xa0dex216;
        };
        this.ShowButton = function(_0xa0dex11e) {
            this.ggmesh.visible = _0xa0dex11e;
        };
        this.Scale = function(_0xa0dex111, _0xa0dexe9) {
            this.ggmesh.scale.x = _0xa0dex111 * this.initscalex;
            this.ggmesh.scale.y = _0xa0dexe9 * this.initscaley;
            this.newscalex = _0xa0dex111;
            this.newscaley = _0xa0dexe9;
        };
        this.Position = function(_0xa0dex218, _0xa0dex219) {
            this.ggmesh.x = _0xa0dex218;
            this.ggmesh.y = _0xa0dex219;
        };
        this.Create = function(_0xa0dex21a) {
            this.ggim = _0xa0dex21a;
            this.ggmesh = new _0xa0dexbd(this.ggmaintex);
            this.ggmesh.anchor.y = 0.5;
            this.ggmesh.anchor.x = 0.5;
            this.ggmesh.x = this.ggx;
            this.ggmesh.y = this.ggy;
            this.ggmesh.width = this.ggwidth;
            this.ggmesh.height = this.ggheight;
            this.ggscene.addChild(this.ggmesh);
            this.initscalex = this.ggmesh.scale.x;
            this.initscaley = this.ggmesh.scale.y;
            var _0xa0dex161 = new _0xa0dexc0({
                fontFamily: _0xa0dex209,
                fontSize: _0xa0dex20a,
                fill: "#ffffff",
            });
            this.label = new _0xa0dexbf(this.gglabel, _0xa0dex161);
            this.label.anchor.x = 0.5;
            this.label.anchor.y = 0.5;
            this.ggmesh.addChild(this.label);
            this.UpdateText(this.gglabel);
            if (this.gglogotex != undefined) {
                this.gglogo = new _0xa0dexbd(this.gglogotex);
                this.gglogo.anchor.y = 0.5;
                this.gglogo.anchor.x = 0.5;
                this.ggmesh.addChild(this.gglogo);
            }
            this.ggmesh.buttonMode = true;
            this.ggmesh.interactive = true;
            this.ggmesh
                .on("pointerdown", _0xa0dex129)
                .on("pointerup", _0xa0dex12a)
                .on("pointerupoutside", _0xa0dex12a)
                .on("pointerover", _0xa0dex12e)
                .on("pointerout", _0xa0dex12f);
            var _0xa0dex21b = this;

            function _0xa0dex129() {
                this.isdown = true;
                this.texture = _0xa0dex21b.ggdowntex;
                this.scale.x = _0xa0dex21b.newscalex * _0xa0dex21b.initscalex;
                this.scale.y = _0xa0dex21b.newscaley * _0xa0dex21b.initscaley;
                _0xa0dex21b.label.y = 3;
            }

            function _0xa0dex12a() {
                var _0xa0dex12d = this.isdown;
                this.isdown = false;
                if (this.isOver) {
                    this.texture = _0xa0dex21b.gghovertex;
                    this.scale.x = _0xa0dex21b.newscalex * _0xa0dex21b.initscalex;
                    this.scale.y = _0xa0dex21b.newscaley * _0xa0dex21b.initscaley;
                } else {
                    this.texture = _0xa0dex21b.ggmaintex;
                    this.scale.x = _0xa0dex21b.newscalex * _0xa0dex21b.initscalex;
                    this.scale.y = _0xa0dex21b.newscaley * _0xa0dex21b.initscaley;
                }
                _0xa0dex21b.label.y = 0;
                if (_0xa0dex12d) {
                    _0xa0dex21b.ggim.OnClick(_0xa0dex21b);
                }
            }

            function _0xa0dex12e() {
                this.isOver = true;
                if (this.isdown) {
                    return;
                }
                this.texture = _0xa0dex21b.gghovertex;
                this.scale.x = _0xa0dex21b.newscalex * _0xa0dex21b.initscalex;
                this.scale.y = _0xa0dex21b.newscaley * _0xa0dex21b.initscaley;
                _0xa0dex21b.label.y = 0;
            }

            function _0xa0dex12f() {
                this.isOver = false;
                if (this.isdown) {
                    return;
                }
                this.texture = _0xa0dex21b.ggmaintex;
                this.scale.x = _0xa0dex21b.newscalex * _0xa0dex21b.initscalex;
                this.scale.y = _0xa0dex21b.newscaley * _0xa0dex21b.initscaley;
                _0xa0dex21b.label.y = 0;
            }
        };
    }

    function _0xa0dex222(_0xa0dex223, _0xa0dex224) {
        var _0xa0dex225 = new PIXI.particles.Emitter(
            _0xa0dex223, [
                PIXI.loader.resources[_0xa0dex84].texture,
                PIXI.loader.resources[_0xa0dex85].texture,
            ], {
                alpha: {
                    start: 0.7,
                    end: 0.1,
                },
                scale: {
                    start: 0.3,
                    end: 0.2,
                    minimumScaleMultiplier: 1,
                },
                color: {
                    start: "#ffc2c7",
                    end: "#de5656",
                },
                speed: {
                    start: 30,
                    end: 5,
                    minimumSpeedMultiplier: 1,
                },
                acceleration: {
                    x: 0,
                    y: 10,
                },
                maxSpeed: 0,
                startRotation: {
                    min: 0,
                    max: 180,
                },
                noRotation: false,
                rotationSpeed: {
                    min: 10,
                    max: 50,
                },
                lifetime: {
                    min: 3,
                    max: 5,
                },
                blendMode: "normal",
                frequency: 0.06,
                emitterLifetime: -1,
                maxParticles: 100,
                pos: {
                    x: _0xa0dex224.x - _0xa0dex224.width / 2,
                    y: _0xa0dex224.y + _0xa0dex224.height * 0.74,
                },
                addAtBack: false,
                spawnType: "rect",
                spawnRect: {
                    x: 0,
                    y: 0,
                    w: _0xa0dex224.width,
                    h: 0,
                },
            }
        );
        var _0xa0dex226 = Date.now();
        _0xa0dex225.emit = false;
        _0xa0dexc1.ticker.add(function() {
            var _0xa0dex227 = Date.now();
            _0xa0dex225.update((_0xa0dex227 - _0xa0dex226) * 0.001);
            _0xa0dex226 = _0xa0dex227;
        });
    }
};
WebFont.load({
    custom: {
        families: ["tekomedium", "tekobold"],
        loadAllFonts: true,
    },
    active: function() {
        var _0xa0dex19 = new start();
    },
});