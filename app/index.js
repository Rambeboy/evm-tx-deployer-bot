(function(_0x18d5ac,_0x5f169d){const _0x52ad0a=_0x4747,_0x119cd6=_0x18d5ac();while(!![]){try{const _0x44236a=-parseInt(_0x52ad0a(0x1af))/0x1*(parseInt(_0x52ad0a(0x197))/0x2)+parseInt(_0x52ad0a(0x1b3))/0x3+-parseInt(_0x52ad0a(0x19d))/0x4+parseInt(_0x52ad0a(0x1b6))/0x5*(-parseInt(_0x52ad0a(0x19f))/0x6)+parseInt(_0x52ad0a(0x1ce))/0x7*(parseInt(_0x52ad0a(0x1c7))/0x8)+parseInt(_0x52ad0a(0x19b))/0x9*(-parseInt(_0x52ad0a(0x1ba))/0xa)+parseInt(_0x52ad0a(0x1aa))/0xb*(parseInt(_0x52ad0a(0x1ab))/0xc);if(_0x44236a===_0x5f169d)break;else _0x119cd6['push'](_0x119cd6['shift']());}catch(_0x367b01){_0x119cd6['push'](_0x119cd6['shift']());}}}(_0x4cc6,0x753c7));import{privateKey}from'./accounts/accounts.js';import{Config}from'./config/config.js';import _0x64fa9d from'./src/core/core.js';import _0x2e8128 from'./src/core/db/sqlite.js';import{RPC}from'./src/core/network/rpc.js';import{Helper}from'./src/utils/helper.js';import _0xf7482d from'./src/utils/logger.js';import _0x5ed9e4 from'./src/utils/twist.js';async function operation(_0x4b0a52){const _0x2ad61e=_0x4747;await _0x2e8128[_0x2ad61e(0x193)](),await _0x2e8128[_0x2ad61e(0x1a6)]();const _0x59248e=new _0x64fa9d(_0x4b0a52);try{await _0x59248e['connectWallet'](),await _0x59248e['getBalance']();_0x59248e[_0x2ad61e(0x195)][_0x2ad61e(0x1a8)]<0.0015&&(await Helper[_0x2ad61e(0x1d7)](0x186a0,_0x4b0a52,_0x2ad61e(0x1b9)+RPC[_0x2ad61e(0x1d6)]+_0x2ad61e(0x1d4)+RPC[_0x2ad61e(0x1d6)],_0x59248e),await operation(_0x4b0a52));if(Config[_0x2ad61e(0x19a)]??!![]){if(Config['WRAPPEDTOKENCONTRACTADDRESS']==undefined)throw Error(_0x2ad61e(0x191));const _0x26aac4=Number(Config[_0x2ad61e(0x1cf)])-Number((await _0x2e8128[_0x2ad61e(0x19c)](_0x59248e[_0x2ad61e(0x1b2)],'tx'))[_0x2ad61e(0x1c3)]),_0x2b622c=_0x26aac4>0x0?_0x26aac4:0x0;for(const _0x44f18f of Array(_0x2b622c)){if(_0x59248e[_0x2ad61e(0x195)][_0x2ad61e(0x1a8)]<0.0015)throw Error(_0x2ad61e(0x1b7));try{await _0x59248e[_0x2ad61e(0x1ca)](),await _0x59248e['withdraw'](),await _0x2e8128['insertData'](_0x59248e[_0x2ad61e(0x1b2)],new Date()[_0x2ad61e(0x1c0)](),'tx');}catch(_0x49a9d4){await Helper[_0x2ad61e(0x1d7)](0xbb8,_0x4b0a52,_0x2ad61e(0x1a4)+_0x49a9d4['message'],_0x59248e);}const _0x29d33b=Helper[_0x2ad61e(0x19e)](0x2710,0xea60*0x2);await Helper[_0x2ad61e(0x1d7)](_0x29d33b,_0x4b0a52,_0x2ad61e(0x1d0)+Helper[_0x2ad61e(0x196)](_0x29d33b)+_0x2ad61e(0x1d2),_0x59248e);}}if(Config[_0x2ad61e(0x198)]??![]){const _0x576e14=Number(Config[_0x2ad61e(0x1c6)])-Number((await _0x2e8128[_0x2ad61e(0x19c)](_0x59248e[_0x2ad61e(0x1b2)],_0x2ad61e(0x1bf)))[_0x2ad61e(0x1c3)]),_0x404c46=_0x576e14>0x0?_0x576e14:0x0,_0x2a4732=Number(Config[_0x2ad61e(0x1c5)])-Number((await _0x2e8128[_0x2ad61e(0x19c)](_0x59248e['address'],_0x2ad61e(0x1d3)))['length']),_0x3cd7bc=_0x2a4732>0x0?_0x2a4732:0x0;for(const _0x4ab083 of Array(_0x404c46)){await _0x59248e[_0x2ad61e(0x194)](),await _0x2e8128[_0x2ad61e(0x1b1)](_0x59248e[_0x2ad61e(0x1b2)],new Date()[_0x2ad61e(0x1c0)](),_0x2ad61e(0x1bf));}for(const _0x193f59 of Array(_0x3cd7bc)){await _0x59248e[_0x2ad61e(0x194)](![]),await _0x2e8128[_0x2ad61e(0x1b1)](_0x59248e[_0x2ad61e(0x1b2)],new Date()[_0x2ad61e(0x1c0)](),_0x2ad61e(0x1d3));}}if(Config['DEPLOYCONTRACTINTERACTION']??![]){if(Config[_0x2ad61e(0x1c2)]==undefined&Config[_0x2ad61e(0x1c2)]=='')throw Error(_0x2ad61e(0x1a9));const _0x23b477=Number(Config['DEPLOYCONTRACTINTERACTIONCOUNT'])-Number((await _0x2e8128['getTodayTxLog'](_0x59248e[_0x2ad61e(0x1b2)],_0x2ad61e(0x1ad)))[_0x2ad61e(0x1c3)]),_0x2e6a67=_0x23b477>0x0?_0x23b477:0x0;for(const _0x4d6875 of Array(_0x2e6a67)){await _0x59248e[_0x2ad61e(0x1cc)](),await _0x2e8128[_0x2ad61e(0x1b1)](_0x59248e[_0x2ad61e(0x1b2)],new Date()[_0x2ad61e(0x1c0)](),_0x2ad61e(0x1ad));}}if(Config['USERAWTXDATA']??![]){if(Config[_0x2ad61e(0x1d5)]==undefined||Config['RAWTX']==[])throw Error(_0x2ad61e(0x199));if(Config[_0x2ad61e(0x1bc)]==undefined)throw Error(_0x2ad61e(0x1a5));const _0x29a912=Number(Config[_0x2ad61e(0x1d1)])-Number((await _0x2e8128[_0x2ad61e(0x19c)](_0x59248e['address'],_0x2ad61e(0x1c8)))[_0x2ad61e(0x1c3)]),_0x54d00d=_0x29a912>0x0?_0x29a912:0x0;for(const _0x2254ad of Array(_0x54d00d)){await _0x59248e[_0x2ad61e(0x1a0)](),await _0x2e8128[_0x2ad61e(0x1b1)](_0x59248e['address'],new Date()[_0x2ad61e(0x1c0)](),_0x2ad61e(0x1c8));}}const _0x15fb86=0xea60*0x3c*0x18;await Helper[_0x2ad61e(0x1d7)](_0x15fb86,_0x4b0a52,_0x2ad61e(0x1ae)+(privateKey[_0x2ad61e(0x1cd)](_0x4b0a52)+0x1)+_0x2ad61e(0x1c9)+Helper[_0x2ad61e(0x196)](_0x15fb86),_0x59248e),await operation(_0x4b0a52);}catch(_0x5546c4){_0x5546c4['message']?await Helper[_0x2ad61e(0x1d7)](0x2710,_0x4b0a52,_0x2ad61e(0x1bd)+_0x5546c4['message']+_0x2ad61e(0x1a7),_0x59248e):await Helper['delay'](0x2710,_0x4b0a52,_0x2ad61e(0x192)+JSON[_0x2ad61e(0x1c4)](_0x5546c4)+_0x2ad61e(0x1a7),_0x59248e),await operation(_0x4b0a52);}}async function startBot(){return new Promise(async(_0x5c848e,_0xa6081c)=>{const _0x189bf4=_0x4747;try{_0xf7482d[_0x189bf4(0x1a1)](_0x189bf4(0x1ac));if(privateKey['length']==0x0)throw Error(_0x189bf4(0x1a2));const _0x9d8d5d=[];for(const _0x5ce584 of privateKey){_0x9d8d5d['push'](operation(_0x5ce584));}await Promise['all'](_0x9d8d5d),_0x5c848e();}catch(_0x432fed){_0xf7482d['info'](_0x189bf4(0x1b5)),_0xf7482d[_0x189bf4(0x1b4)](JSON[_0x189bf4(0x1c4)](_0x432fed)),_0xa6081c(_0x432fed);}});}((async()=>{const _0x117fe5=_0x4747;try{_0xf7482d[_0x117fe5(0x1c1)](),_0xf7482d['info'](''),_0xf7482d['info']('Application\x20Started'),console['log'](),console['log'](_0x117fe5(0x1cb)),console[_0x117fe5(0x1bb)](_0x117fe5(0x1be)),console[_0x117fe5(0x1bb)](_0x117fe5(0x1a3)),await startBot();}catch(_0x5a9687){_0x5ed9e4['clear'](),_0x5ed9e4[_0x117fe5(0x1b8)](),console['log'](_0x117fe5(0x1b0),_0x5a9687),await startBot();}})());function _0x4747(_0x3f8d68,_0x5948ec){const _0x4cc64b=_0x4cc6();return _0x4747=function(_0x474778,_0x456f31){_0x474778=_0x474778-0x191;let _0x4bb08a=_0x4cc64b[_0x474778];return _0x4bb08a;},_0x4747(_0x3f8d68,_0x5948ec);}function _0x4cc6(){const _0x2bda71=['22JkRniE','USETRANSFER','Please\x20Configure\x20RAWTX\x20first','USEWRAPUNWRAP','27xviLRU','getTodayTxLog','2107572KGWlcK','random','6XmLbGl','rawTx','info','Please\x20input\x20your\x20account\x20first\x20on\x20accounts.js\x20file','WELCOME\x20&\x20ENJOY\x20SIR!','Error\x20during\x20deposit/withdraw\x20operation:\x20','Please\x20Configure\x20RAWTXCONTRACTADDRESS\x20first','createTable',',\x20Retry\x20again\x20after\x2010\x20Second','ETH','Please\x20set\x20DEPLOYCONTRACTADDRESS\x20with\x20your\x20deployed\x20contract\x20address\x20first\x20','3355891XQNZSw','84RbgHHL','BOT\x20STARTED','deployed','Account\x20','38206ioAAxR','Error\x20During\x20executing\x20bot','insertData','address','881862EBVRgP','error','BOT\x20STOPPED','3845845DKwonU','Balance\x20is\x20less\x20than\x200.0015\x20ETH,\x20please\x20fill\x20up\x20your\x20balance','clearInfo','Minimum\x20','831180LdAsCK','log','RAWTXCONTRACTADDRESS','Error\x20:\x20','AUTHOR\x20:\x20NOFAN\x20RAMBE','self','toISOString','clear','DEPLOYCONTRACTADDRESS','length','stringify','OTHERUSERTRANSFERCOUNT','SELFTRANSFERCOUNT','16UngHiR','raw','\x20Processing\x20Done,\x20Delaying\x20for\x20','deposit','EVM\x20TX\x20DEPLOYER\x20BOT','deployedContractTx','indexOf','57260tDYpmk','WRAPUNWRAPCOUNT','Delaying\x20for\x20','RAWTXCOUNT','\x20Before\x20Executing\x20Next\x20TX','other','\x20Balance\x20Is\x200.0015\x20','RAWTX','SYMBOL','delay','Please\x20Configure\x20WRAPPEDTOKENCONTRACTADDRESS\x20first','Error\x20:','connectToDatabase','transfer','balance','msToTime'];_0x4cc6=function(){return _0x2bda71;};return _0x4cc6();}