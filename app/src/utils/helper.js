const _0x146fe9=_0x5d6d;(function(_0x2fb539,_0x56f206){const _0x29fc95=_0x5d6d,_0x27f482=_0x2fb539();while(!![]){try{const _0x2ed751=parseInt(_0x29fc95(0xef))/0x1*(-parseInt(_0x29fc95(0xe1))/0x2)+parseInt(_0x29fc95(0xdf))/0x3+parseInt(_0x29fc95(0x101))/0x4*(-parseInt(_0x29fc95(0xed))/0x5)+-parseInt(_0x29fc95(0xf1))/0x6+-parseInt(_0x29fc95(0xec))/0x7*(parseInt(_0x29fc95(0xee))/0x8)+-parseInt(_0x29fc95(0x104))/0x9+parseInt(_0x29fc95(0xd3))/0xa;if(_0x2ed751===_0x56f206)break;else _0x27f482['push'](_0x27f482['shift']());}catch(_0x555049){_0x27f482['push'](_0x27f482['shift']());}}}(_0x1e68,0x68d91));import _0x2cc348 from'bip39';import _0x4332bb from'./twist.js';import _0x17bd44 from'moment-timezone';function _0x5d6d(_0x475e31,_0x3c8539){const _0x1e685f=_0x1e68();return _0x5d6d=function(_0x5d6db5,_0x2ea538){_0x5d6db5=_0x5d6db5-0xcd;let _0x514afb=_0x1e685f[_0x5d6db5];return _0x514afb;},_0x5d6d(_0x475e31,_0x3c8539);}import{ethers}from'ethers';export class Helper{static ['delay']=(_0x23c1b5,_0x505975,_0x3d4a2c,_0x373cd7)=>{return new Promise(async _0x171866=>{const _0x1e8ef3=_0x5d6d;let _0x241564=_0x23c1b5;_0x505975!=undefined?await _0x4332bb[_0x1e8ef3(0xd6)](_0x3d4a2c,_0x505975,_0x373cd7,_0x1e8ef3(0xf8)+this[_0x1e8ef3(0xe0)](_0x23c1b5)):_0x4332bb[_0x1e8ef3(0xf4)]('Delaying\x20for\x20'+this['msToTime'](_0x23c1b5));const _0x5ea761=setInterval(async()=>{const _0x4bf3e3=_0x1e8ef3;_0x241564-=0x3e8,_0x505975!=undefined?await _0x4332bb['log'](_0x3d4a2c,_0x505975,_0x373cd7,_0x4bf3e3(0xf8)+this[_0x4bf3e3(0xe0)](_0x241564)):_0x4332bb['info'](_0x4bf3e3(0xf8)+this[_0x4bf3e3(0xe0)](_0x241564)),_0x241564<=0x0&&(clearInterval(_0x5ea761),_0x171866());},0x3e8);setTimeout(async()=>{const _0x22313f=_0x1e8ef3;clearInterval(_0x5ea761),await _0x4332bb[_0x22313f(0xdc)](),_0x505975&&await _0x4332bb[_0x22313f(0xd6)](_0x3d4a2c,_0x505975,_0x373cd7),_0x171866();},_0x23c1b5);});};static[_0x146fe9(0xce)](){const _0x4cfc74=_0x146fe9,_0x54ab34=[_0x4cfc74(0xf7),'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2017_5_1\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/17.0\x20EdgiOS/125.2535.60\x20Mobile/15E148\x20Safari/605.1.15',_0x4cfc74(0xfe),'Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20Pixel\x203\x20XL)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/125.0.6422.113\x20Mobile\x20Safari/537.36\x20EdgA/124.0.2478.104',_0x4cfc74(0xd5),_0x4cfc74(0xd0)];return _0x54ab34[Math['floor'](Math[_0x4cfc74(0xe7)]()*_0x54ab34[_0x4cfc74(0xd7)])];}static['readTime'](_0x30aa1f){const _0xb5dd19=_0x146fe9,_0x1d8cc2=_0x17bd44[_0xb5dd19(0xf3)](_0x30aa1f);return _0x1d8cc2[_0xb5dd19(0xf0)](_0xb5dd19(0xfb));}static['getCurrentTimestamp'](){const _0x27ac32=_0x146fe9,_0x4740f9=_0x17bd44()['tz'](_0x27ac32(0xf5))['unix']();return _0x4740f9[_0x27ac32(0xea)]();}static[_0x146fe9(0xe7)](_0x23cae5,_0x5b7039){const _0x4447be=_0x146fe9,_0x4ecdcc=Math[_0x4447be(0xcd)](Math[_0x4447be(0xe7)]()*(_0x5b7039-_0x23cae5+0x1))+_0x23cae5;return _0x4ecdcc;}static[_0x146fe9(0xdb)](_0x32c2b6,_0x6b0ed7,_0x58320e=0x4){const _0x35f680=_0x146fe9,_0x275600=Math[_0x35f680(0xe7)]()*(_0x6b0ed7-_0x32c2b6)+_0x32c2b6;return parseFloat(_0x275600['toFixed'](_0x58320e));}static[_0x146fe9(0xe0)](_0x5e7c02){const _0x1b00ad=_0x146fe9,_0x2e6f92=Math['floor'](_0x5e7c02/(0x3e8*0x3c*0x3c)),_0x44a1a2=_0x5e7c02%(0x3e8*0x3c*0x3c),_0x338ebc=Math[_0x1b00ad(0xcd)](_0x44a1a2/(0x3e8*0x3c)),_0x40e81b=_0x44a1a2%(0x3e8*0x3c),_0x34d460=Math[_0x1b00ad(0xe3)](_0x40e81b/0x3e8);return _0x2e6f92+_0x1b00ad(0xeb)+_0x338ebc+'\x20Minutes\x20'+_0x34d460+_0x1b00ad(0xe8);}static['generateRandomString'](_0x1407c1){const _0x12f4d5=_0x146fe9,_0x3527b9='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';let _0x3ad649='';const _0x288557=_0x3527b9[_0x12f4d5(0xd7)];for(let _0x1c56e5=0x0;_0x1c56e5<_0x1407c1;_0x1c56e5++){_0x3ad649+=_0x3527b9[_0x12f4d5(0xf9)](Math[_0x12f4d5(0xcd)](Math[_0x12f4d5(0xe7)]()*_0x288557));}return _0x3ad649;}static [_0x146fe9(0xfd)]=_0x4fa296=>{const _0xb7fe84=_0x146fe9;return JSON[_0xb7fe84(0x103)](JSON['stringify'](_0x4fa296,(_0x57ee76,_0x31b886)=>typeof _0x31b886===_0xb7fe84(0xf2)?_0x31b886['toString']():_0x31b886));};static[_0x146fe9(0xfc)](_0x1bec6d){return _0x2cc348['validateMnemonic'](_0x1bec6d);}static[_0x146fe9(0xd4)](_0x115ce0){const _0x53e3a6=_0x146fe9,_0x3a413b=_0x115ce0[_0x53e3a6(0xe9)](/^0x/,''),_0x373a21=/^[a-fA-F0-9]{64}$/;return _0x373a21[_0x53e3a6(0xda)](_0x3a413b);}static[_0x146fe9(0x102)](_0x427642){const _0x1cf187=_0x146fe9;if(this[_0x1cf187(0xfc)](_0x427642))return'Secret\x20Phrase';else return this['isPrivateKey'](_0x427642)?'Private\x20Key':'Unknown';}static['generateNonce'](){const _0x45a3cf=_0x146fe9;return ethers[_0x45a3cf(0xdd)](ethers[_0x45a3cf(0xe6)](0x10));}static[_0x146fe9(0xfa)](_0x366650){const _0x52f467=_0x146fe9,_0x4d2b44=new Date(_0x366650),_0x5454f3=new Date();_0x5454f3['setHours'](0x0,0x0,0x0,0x0);const _0x5a2983=new Date(_0x4d2b44);return _0x5a2983['setHours'](0x0,0x0,0x0,0x0),_0x5a2983[_0x52f467(0xcf)]()===_0x5454f3[_0x52f467(0xcf)]()?!![]:![];}static[_0x146fe9(0xd9)](_0x210f6f,_0x2bef79){const _0x29296d=_0x146fe9;for(const _0x427ddd of _0x2bef79){for(const _0x54267b of _0x427ddd){if(_0x54267b['type']===_0x29296d(0xd8)){const _0x622116=_0x54267b['name']+'('+_0x54267b[_0x29296d(0xde)][_0x29296d(0xd1)](_0x3790b6=>_0x3790b6[_0x29296d(0x100)])[_0x29296d(0xf6)](',')+')',_0x4c5c='0x'+ethers[_0x29296d(0xd2)](ethers[_0x29296d(0xff)](_0x622116))[_0x29296d(0xe2)](0x0,0x8);if(_0x4c5c[_0x29296d(0xe5)](_0x210f6f))return console[_0x29296d(0xd6)](_0x29296d(0x105)+_0x622116),_0x622116;}}}return console[_0x29296d(0xd6)](_0x29296d(0xe4)),null;}['static'](){const _0x525dd1=_0x146fe9;console[_0x525dd1(0xd6)]();}}function _0x1e68(){const _0x25da52=['unix','info','Asia/Singapore','join','Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2017_5\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20CriOS/125.0.6422.80\x20Mobile/15E148\x20Safari/604.1','Delaying\x20for\x20','charAt','isToday','YYYY-MM-DD\x20HH:mm:ss','isMnemonic','serializeBigInt','Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20SM-G973F)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/125.0.6422.113\x20Mobile\x20Safari/537.36\x20EdgA/124.0.2478.104','toUtf8Bytes','type','9596VGBJQa','determineType','parse','3424257THOLuc','Function\x20found:\x20','floor','randomUserAgent','getTime','Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20SM-N975F)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/125.0.6422.113\x20Mobile\x20Safari/537.36\x20OPR/76.2.4027.73374','map','keccak256','17770530MPWWIN','isPrivateKey','Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20VOG-L29)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/125.0.6422.113\x20Mobile\x20Safari/537.36\x20OPR/76.2.4027.73374','log','length','function','findFunctionBySelector','test','randomFloat','clearInfo','hexlify','inputs','521058rNbcLj','msToTime','908302dwgNoe','slice','round','Function\x20not\x20found','includes','randomBytes','random','\x20Seconds','replace','toString','\x20Hours\x20','1204JGQOqH','575ZFkywM','15088PbTkmu','1QtoWbD','format','518286XFbKjx','bigint'];_0x1e68=function(){return _0x25da52;};return _0x1e68();}