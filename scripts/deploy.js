const _0x4cbc40=_0x5ab5;function _0x5ab5(_0x58174b,_0x3bc8fd){const _0x3e5485=_0x3e54();return _0x5ab5=function(_0x5ab54b,_0x2b48d8){_0x5ab54b=_0x5ab54b-0xfc;let _0x2d732f=_0x3e5485[_0x5ab54b];return _0x2d732f;},_0x5ab5(_0x58174b,_0x3bc8fd);}(function(_0x2ec3bb,_0x24c851){const _0x150b75=_0x5ab5,_0x3a39d4=_0x2ec3bb();while(!![]){try{const _0x4db569=parseInt(_0x150b75(0x113))/0x1*(-parseInt(_0x150b75(0x112))/0x2)+parseInt(_0x150b75(0x125))/0x3+parseInt(_0x150b75(0x145))/0x4+-parseInt(_0x150b75(0x104))/0x5*(-parseInt(_0x150b75(0x136))/0x6)+parseInt(_0x150b75(0x124))/0x7*(-parseInt(_0x150b75(0x142))/0x8)+-parseInt(_0x150b75(0x13a))/0x9+parseInt(_0x150b75(0x134))/0xa;if(_0x4db569===_0x24c851)break;else _0x3a39d4['push'](_0x3a39d4['shift']());}catch(_0x4dde43){_0x3a39d4['push'](_0x3a39d4['shift']());}}}(_0x3e54,0xd356f));import _0xff54b9 from'solc';import _0x1dc929 from'fs';import _0x165e0e from'path';import{privateKey}from'../accounts/accounts.js';import{Helper}from'../app/src/utils/helper.js';import _0x51971b from'input';import{RPC}from'../app/src/core/network/rpc.js';function _0x3e54(){const _0x2dd152=['Contract\x20Deployed','deploy','evm.bytecode','Bytecode\x20saved\x20to:\x20','getDeployTransaction','indexOf','../app/src/core/deployer','1657290oKhjPs','2HeuUjJ','JsonRpcProvider','writeFileSync','Compiling\x20Contract...','trim','Contract\x20Address:\x20','EXPLORER','toString','Enter\x20initial\x20supply:\x20','RPCURL','parse','resolve','text','Welcome\x20&\x20Enjoy\x20Sir!',',\x20Waiting\x20for\x20Block\x20Confirmation','/artifacts','Enter\x20token\x20name:\x20','7gGXKXu','2021148DEIfmE','.\x20Account\x20','Author\x20:\x20Nofan\x20Rambe','Error\x20During\x20executing\x20bot','hash','\x20Compiled\x20successfully!','Secret\x20Phrase','YourToken.sol','address','Contract\x20Hash:\x20','Dont\x20forget\x20to\x20run\x20git\x20pull\x20to\x20keep\x20up\x20to\x20date','Contract\x20','keys','wait','contracts','14153820Euljxl','error','18RRYEkA','Account\x20List\x20\x0a','Contract\x20Deployment\x20Tx\x20Sent\x20','stringify','1485081vChHhC','Private\x20Key','CONTRACT\x20DEPLOYER\x20BOT','ABI\x20saved\x20to:\x20','Deploying\x20Contract...','provider','Please\x20input\x20your\x20account\x20first\x20on\x20accounts.js\x20file','length','9773224mMEoPP','contractAddress','\x0a\x20\x0aSelect\x20Account\x20To\x20Deploy\x20Contract\x20:\x20','580976QHIDUL','Solidity','Wallet','.abi.json','Estimated\x20gas:\x20','tx/','estimateGas','object','utf8','fromPhrase','2792095UlNJOu','ContractFactory','log','Enter\x20token\x20symbol:\x20','deploymentTransaction','abi','compile'];_0x3e54=function(){return _0x2dd152;};return _0x3e54();}import{ethers}from'ethers';const basePath=_0x4cbc40(0x111),provider=new ethers[(_0x4cbc40(0x114))](RPC[_0x4cbc40(0x11c)],RPC['CHAINID']);async function compileContract(){const _0xf056bc=_0x4cbc40;console[_0xf056bc(0x106)](_0xf056bc(0x116));const _0x32d4a2=_0x165e0e[_0xf056bc(0x11e)](basePath,_0xf056bc(0x12c)),_0x19ba61=_0x1dc929['readFileSync'](_0x32d4a2,_0xf056bc(0x102)),_0x1ff17a={'language':_0xf056bc(0x146),'sources':{['YourToken.sol']:{'content':_0x19ba61}},'settings':{'outputSelection':{'*':{'*':[_0xf056bc(0x109),_0xf056bc(0x10d)]}}}},_0x137701=JSON[_0xf056bc(0x11d)](_0xff54b9[_0xf056bc(0x10a)](JSON[_0xf056bc(0x139)](_0x1ff17a))),_0x1dfb77=_0x137701[_0xf056bc(0x133)][_0xf056bc(0x12c)],_0x52a9c9=Object[_0xf056bc(0x131)](_0x1dfb77)[0x0],_0x5aa6fb=_0x1dfb77[_0x52a9c9]['abi'],_0x561136=_0x1dfb77[_0x52a9c9]['evm']['bytecode'][_0xf056bc(0x101)],_0x42ca15=_0x165e0e['resolve'](basePath+_0xf056bc(0x122),_0x52a9c9+_0xf056bc(0xfd)),_0x2d6c39=_0x165e0e['resolve'](basePath+_0xf056bc(0x122),_0x52a9c9+'.bytecode.txt');return _0x1dc929['writeFileSync'](_0x42ca15,JSON['stringify'](_0x5aa6fb,null,0x2)),_0x1dc929[_0xf056bc(0x115)](_0x2d6c39,_0x561136),console[_0xf056bc(0x106)](_0xf056bc(0x130)+_0x52a9c9+_0xf056bc(0x12a)),console[_0xf056bc(0x106)](_0xf056bc(0x13d)+_0x42ca15),console['log'](_0xf056bc(0x10e)+_0x2d6c39),{'abi':_0x5aa6fb,'bytecode':_0x561136};}async function deployContract(_0x1a31e7,_0x3daea5,_0x1460f7,_0x5d81cd,_0x3b4d46,_0x5f1d2b){const _0x482ad6=_0x4cbc40;console[_0x482ad6(0x106)](_0x482ad6(0x13e));const _0x4fedee=new ethers[(_0x482ad6(0x105))](_0x3daea5,_0x1460f7,_0x1a31e7),_0x144488=ethers['parseUnits'](_0x5f1d2b,0x12);try{const _0x5607c7=await _0x4fedee['deploy'](_0x5d81cd,_0x3b4d46,_0x144488);console[_0x482ad6(0x106)](_0x482ad6(0x138)+RPC[_0x482ad6(0x119)]+_0x482ad6(0xff)+_0x5607c7['deploymentTransaction']()[_0x482ad6(0x129)]+_0x482ad6(0x121));const _0x1399e4=await _0x5607c7[_0x482ad6(0x108)]()['wait']();console[_0x482ad6(0x106)](_0x482ad6(0x10b)),console[_0x482ad6(0x106)](_0x482ad6(0x12e)+RPC['EXPLORER']+_0x482ad6(0xff)+_0x1399e4[_0x482ad6(0x129)]),console[_0x482ad6(0x106)](_0x482ad6(0x118)+_0x1399e4[_0x482ad6(0x143)]);}catch(_0x2ae017){console['warn']('Initial\x20deployment\x20attempt\x20failed,\x20retrying\x20with\x20estimated\x20gas...');try{const _0x1a7a21=_0x4fedee[_0x482ad6(0x10f)](_0x5d81cd,_0x3b4d46,_0x144488),_0x4831bc=await _0x1a31e7[_0x482ad6(0x13f)][_0x482ad6(0x100)]({..._0x1a7a21,'from':_0x1a31e7[_0x482ad6(0x12d)]});console['log'](_0x482ad6(0xfe)+_0x4831bc[_0x482ad6(0x11a)]());const _0x552633=await _0x4fedee[_0x482ad6(0x10c)](_0x5d81cd,_0x3b4d46,_0x144488,{'gasLimit':_0x4831bc});console['log'](_0x482ad6(0x138)+RPC['EXPLORER']+'tx/'+_0x552633['deploymentTransaction']()[_0x482ad6(0x129)]+_0x482ad6(0x121));const _0x1c0f42=await _0x552633[_0x482ad6(0x108)]()[_0x482ad6(0x132)]();console['log']('Contract\x20Deployed'),console[_0x482ad6(0x106)]('Contract\x20Hash:\x20'+RPC[_0x482ad6(0x119)]+_0x482ad6(0xff)+_0x1c0f42['hash']),console[_0x482ad6(0x106)]('Contract\x20Address:\x20'+_0x1c0f42['contractAddress']);}catch(_0x3cbd76){console[_0x482ad6(0x135)]('Deployment\x20Failed:',_0x3cbd76);}}}((async()=>{const _0x1e9df9=_0x4cbc40;try{console[_0x1e9df9(0x106)](_0x1e9df9(0x13c)),console[_0x1e9df9(0x106)](),console[_0x1e9df9(0x106)](_0x1e9df9(0x127)),console[_0x1e9df9(0x106)](_0x1e9df9(0x120)),console[_0x1e9df9(0x106)](_0x1e9df9(0x12f)),console['log'](),console['log']();if(privateKey[_0x1e9df9(0x141)]==0x0)throw Error(_0x1e9df9(0x140));let _0x4f1086=_0x1e9df9(0x137);for(const _0x3bc210 of privateKey){_0x4f1086+=privateKey['indexOf'](_0x3bc210)+0x1+_0x1e9df9(0x126)+(privateKey[_0x1e9df9(0x110)](_0x3bc210)+0x1)+'\x0a';}_0x4f1086+=_0x1e9df9(0x144);const _0x31673b=await _0x51971b[_0x1e9df9(0x11f)](_0x4f1086);if(!privateKey[_0x31673b-0x1])throw Error('Invalid\x20Input');const _0xdd5cff=privateKey[_0x31673b-0x1];let _0x1cf759;const _0x46681b=_0xdd5cff,_0x371151=Helper['determineType'](_0x46681b);if(_0x371151==_0x1e9df9(0x12b))_0x1cf759=new ethers[(_0x1e9df9(0xfc))][(_0x1e9df9(0x103))](_0x46681b,provider);else{if(_0x371151==_0x1e9df9(0x13b))_0x1cf759=new ethers['Wallet'](_0x46681b[_0x1e9df9(0x117)](),provider);else throw Error('Invalid\x20account\x20Secret\x20Phrase\x20or\x20Private\x20Key');}const _0x45abdc=await _0x51971b[_0x1e9df9(0x11f)](_0x1e9df9(0x123)),_0x3a4755=await _0x51971b[_0x1e9df9(0x11f)](_0x1e9df9(0x107)),_0x16b947=await _0x51971b['text'](_0x1e9df9(0x11b)),{abi:_0x351175,bytecode:_0x3d3601}=await compileContract();await deployContract(_0x1cf759,_0x351175,_0x3d3601,_0x45abdc,_0x3a4755,_0x16b947);}catch(_0x3f9896){console['log'](_0x1e9df9(0x128),_0x3f9896);}})());