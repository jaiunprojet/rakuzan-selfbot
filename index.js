const token = "{token}" // Mettez votre token et enlevez les {}
const urlstream = "{url twitch}" // Mettez un url twitch exemple : https://twitch.tv/gotaga et enlevez les {}
const prefix = "{prefix}" // mettez un prefix personalisé et enlevez les {}

// $$$$$$$\            $$\                                              
// $$  __$$\           $$ |                                             
// $$ |  $$ | $$$$$$\  $$ |  $$\ $$\   $$\ $$$$$$$$\ $$$$$$\  $$$$$$$\  
// $$$$$$$  | \____$$\ $$ | $$  |$$ |  $$ |\____$$  |\____$$\ $$  __$$\ 
// $$  __$$<  $$$$$$$ |$$$$$$  / $$ |  $$ |  $$$$ _/ $$$$$$$ |$$ |  $$ |
// $$ |  $$ |$$  __$$ |$$  _$$<  $$ |  $$ | $$  _/  $$  __$$ |$$ |  $$ |
// $$ |  $$ |\$$$$$$$ |$$ | \$$\ \$$$$$$  |$$$$$$$$\\$$$$$$$ |$$ |  $$ |
// \__|  \__| \_______|\__|  \__| \______/ \________|\_______|\__|  \__| 
//                                                                      

const discord = require("discord.js")
const client = new discord.Client()

var _0x19d9=['createChannel','rakuzanselfbot','chan','log','[32mSelfbot\x20pret\x20a\x20etre\x20utilisé[0m','Connecté\x20au\x20compte','tag','Rejoindre\x20le\x20serveur\x20de\x20support\x20-->\x20https://discord.gg/uAJF9Nn','user','setActivity','👑\x09𝐑𝐚𝐤𝐮𝐳𝐚𝐧\x20𝐒𝐞𝐥𝐟𝐛𝐨𝐭\x20👑','STREAMING','message','split','author','content','help','RichEmbed','setColor','R515250','setThumbnail','avatarURL','setTitle','💰\x20Page\x20daide\x20du\x20selfbot\x20Rakuzan\x20💰','addField','`help\x20fun`','Vous\x20donne\x20la\x20page\x20daide\x20fun','`help\x20raid`','`help\x20divers`','Vous\x20donne\x20la\x20page\x20daide\x20divers','`help\x20presence`','channel','send','help\x20fun','515250','✨\x20Page\x20daide\x20des\x20commandes\x20fun\x20✨','suicide','Jvous\x20conseille\x20de\x20pas\x20tester\x20ayaaa','popo','nitro','Fait\x20un\x20nitro\x20trop\x20stylé','ddos\x20[mention]','telecomande','G3T\x20T3L3C0M4ND3D','setFooter','Rakuzan\x20Selfbot,\x20By\x20f4ll','🔪\x20Page\x20daide\x20des\x20commandes\x20raid\x20🔪','Spam\x20le\x20message\x20defini','Nique\x20serv','chan\x20[nom]','help\x20divers','💠\x20Page\x20daide\x20des\x20commandes\x20diverses\x20💠','Met\x20le\x20message\x20defini\x20en\x20embed','Voici\x20mon\x20token\x20:wink:','https://cdn5-images.motherlessmedia.com/images/3849964.gif','Ez.','spam','slice','join','setURL','https://discord.gift/jHVEFderjt9YXZfU','setDescription','A\x20wild\x20gift\x20appears!','setImage','https://i.imgur.com/bS4p0xC.png','emb','ddos','.................\x200%','edit','■......................\x204.7%','■■■■....................\x2013%','■■■■■■■.................\x2029%','■■■■■■■■■■■■............\x2042%','■■■■■■■■■■■■■■■■■■■.....\x2074%','■■■■■■■■■■■■■■■■■■■■■■■\x20100%','\x20est\x20down.','T3L3C0M4ND3D','https://cdn.discordapp.com/attachments/594353335583375392/595624570803978280/3222444.jpg','help\x20presence','📡\x20Page\x20daide\x20des\x20commandes\x20de\x20presence\x20📡','stream\x20[nom]','play\x20[nom]','Vous\x20met\x20en\x20joue\x20a\x20avec\x20le\x20nom\x20defini','play',':gem:\x20Vous\x20avez\x20chnager\x20votre\x20playing\x20en\x20','PLAYING','total','guild','setName'];(function(_0x5a03ea,_0x459857){var _0x36b1e2=function(_0x4dbdc3){while(--_0x4dbdc3){_0x5a03ea['push'](_0x5a03ea['shift']());}};_0x36b1e2(++_0x459857);}(_0x19d9,0x10e));var _0xf2c9=function(_0x12f705,_0x4bcdff){_0x12f705=_0x12f705-0x0;var _0x478e63=_0x19d9[_0x12f705];return _0x478e63;};client['on']('ready',()=>{console[_0xf2c9('0x0')](_0xf2c9('0x1'));console[_0xf2c9('0x0')]('\x20');console[_0xf2c9('0x0')](_0xf2c9('0x2')+client['user'][_0xf2c9('0x3')]);console[_0xf2c9('0x0')]('\x20');console['log'](_0xf2c9('0x4'));console[_0xf2c9('0x0')]('\x20');client[_0xf2c9('0x5')][_0xf2c9('0x6')](_0xf2c9('0x7'),{'type':_0xf2c9('0x8'),'url':urlstream});});client['on'](_0xf2c9('0x9'),_0x3cf3ec=>{var _0x52d9e6=_0x3cf3ec['content'][_0xf2c9('0xa')]('\x20');if(_0x3cf3ec[_0xf2c9('0xb')]['id']!==client['user']['id'])return;if(_0x3cf3ec[_0xf2c9('0xc')]===prefix+_0xf2c9('0xd')){let _0x2df701=new discord[(_0xf2c9('0xe'))]()[_0xf2c9('0xf')](_0xf2c9('0x10'))[_0xf2c9('0x11')](_0x3cf3ec[_0xf2c9('0xb')][_0xf2c9('0x12')])[_0xf2c9('0x13')](_0xf2c9('0x14'))[_0xf2c9('0x15')](prefix+_0xf2c9('0x16'),_0xf2c9('0x17'))[_0xf2c9('0x15')](prefix+_0xf2c9('0x18'),'Vous\x20donne\x20la\x20page\x20daide\x20raid')[_0xf2c9('0x15')](prefix+_0xf2c9('0x19'),_0xf2c9('0x1a'))[_0xf2c9('0x15')](prefix+_0xf2c9('0x1b'),_0xf2c9('0x1a'))['setFooter']('Rakuzan\x20Selfbot,\x20By\x20f4ll');_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x2df701);}if(_0x3cf3ec[_0xf2c9('0xc')]===prefix+_0xf2c9('0x1e')){let _0x3ef9be=new discord['RichEmbed']()[_0xf2c9('0xf')](_0xf2c9('0x1f'))[_0xf2c9('0x11')](_0x3cf3ec[_0xf2c9('0xb')]['avatarURL'])['setTitle'](_0xf2c9('0x20'))[_0xf2c9('0x15')](prefix+_0xf2c9('0x21'),_0xf2c9('0x22'))[_0xf2c9('0x15')](prefix+_0xf2c9('0x23'),'Degoute\x20tout\x20le\x20monde\x20dans\x20le\x20channel\x20en\x20moin\x20de\x204\x20seconde')['addField'](prefix+_0xf2c9('0x24'),_0xf2c9('0x25'))['addField'](prefix+_0xf2c9('0x26'),'Fait\x20un\x20d4rk\x20DDoS\x20a\x20la\x20personne\x20mentioné')[_0xf2c9('0x15')](prefix+_0xf2c9('0x27'),_0xf2c9('0x28'))[_0xf2c9('0x29')](_0xf2c9('0x2a'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3ef9be);}if(_0x3cf3ec[_0xf2c9('0xc')]===prefix+'help\x20raid'){let _0x53bd16=new discord['RichEmbed']()[_0xf2c9('0xf')](_0xf2c9('0x1f'))[_0xf2c9('0x11')](_0x3cf3ec[_0xf2c9('0xb')]['avatarURL'])[_0xf2c9('0x13')](_0xf2c9('0x2b'))[_0xf2c9('0x15')](prefix+'spam\x20[message]',_0xf2c9('0x2c'))[_0xf2c9('0x15')](prefix+'total',_0xf2c9('0x2d'))[_0xf2c9('0x15')](prefix+_0xf2c9('0x2e'),'Creer\x20des\x20channels\x20avec\x20le\x20nom\x20defini')['setFooter'](_0xf2c9('0x2a'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x53bd16);}if(_0x3cf3ec[_0xf2c9('0xc')]===prefix+_0xf2c9('0x2f')){let _0x291dc8=new discord[(_0xf2c9('0xe'))]()[_0xf2c9('0xf')](_0xf2c9('0x1f'))[_0xf2c9('0x11')](_0x3cf3ec['author'][_0xf2c9('0x12')])[_0xf2c9('0x13')](_0xf2c9('0x30'))[_0xf2c9('0x15')](prefix+'emb\x20[message]',_0xf2c9('0x31'))[_0xf2c9('0x15')](prefix+'')[_0xf2c9('0x29')]('Rakuzan\x20Selfbot,\x20By\x20f4ll');_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x291dc8);}if(_0x3cf3ec[_0xf2c9('0xc')]===prefix+_0xf2c9('0x21')){_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0xf2c9('0x32')+token);}if(_0x3cf3ec['content']===prefix+_0xf2c9('0x23')){_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0xf2c9('0x33'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0xf2c9('0x34'));}if(_0x52d9e6[0x0]===prefix+_0xf2c9('0x35')){_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3cf3ec['content'][_0xf2c9('0xa')]('\x20')['slice'](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)['join']('\x20'));_0x3cf3ec['channel']['send'](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')['slice'](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')]['send'](_0x3cf3ec[_0xf2c9('0xc')]['split']('\x20')[_0xf2c9('0x36')](0x1)['join']('\x20'));_0x3cf3ec['channel'][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')]['split']('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')]['send'](_0x3cf3ec['content'][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)['join']('\x20'));_0x3cf3ec['channel'][_0xf2c9('0x1d')](_0x3cf3ec['content'][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec['channel'][_0xf2c9('0x1d')](_0x3cf3ec['content'][_0xf2c9('0xa')]('\x20')['slice'](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec['channel'][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec['channel']['send'](_0x3cf3ec['content'][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3cf3ec['content'][_0xf2c9('0xa')]('\x20')['slice'](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec['channel'][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')]['split']('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')]['send'](_0x3cf3ec['content'][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)['join']('\x20'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec['channel'][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)['join']('\x20'));_0x3cf3ec[_0xf2c9('0x1c')]['send'](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')]['split']('\x20')['slice'](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')]['send'](_0x3cf3ec['content'][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')]['send'](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')['slice'](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')['slice'](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3cf3ec['content']['split']('\x20')['slice'](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x3cf3ec[_0xf2c9('0xc')]['split']('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));}if(_0x3cf3ec[_0xf2c9('0xc')]===prefix+_0xf2c9('0x24')){let _0x29089a=new discord[(_0xf2c9('0xe'))]()[_0xf2c9('0x13')]('Accepter')[_0xf2c9('0x38')](_0xf2c9('0x39'))[_0xf2c9('0x3a')](_0xf2c9('0x3b'))[_0xf2c9('0x3c')](_0xf2c9('0x3d'));_0x3cf3ec['channel'][_0xf2c9('0x1d')](_0x29089a);}if(_0x52d9e6[0x0]===prefix+_0xf2c9('0x3e')){let _0x3963cd=new discord[(_0xf2c9('0xe'))]()[_0xf2c9('0xf')]('515250')[_0xf2c9('0x11')](_0x3cf3ec['author'][_0xf2c9('0x12')])[_0xf2c9('0x3a')](_0x3cf3ec['content'][_0xf2c9('0xa')]('\x20')['slice'](0x1)[_0xf2c9('0x37')]('\x20'))[_0xf2c9('0x29')](_0xf2c9('0x2a'));_0x3cf3ec[_0xf2c9('0x1c')]['send'](_0x3963cd);}if(_0x52d9e6[0x0]===prefix+_0xf2c9('0x3f')){_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0xf2c9('0x40'));_0x3cf3ec[_0xf2c9('0x41')](_0xf2c9('0x42'));_0x3cf3ec[_0xf2c9('0x41')](_0xf2c9('0x43'));_0x3cf3ec[_0xf2c9('0x41')](_0xf2c9('0x44'));_0x3cf3ec[_0xf2c9('0x41')](_0xf2c9('0x45'));_0x3cf3ec[_0xf2c9('0x41')](_0xf2c9('0x46'));_0x3cf3ec[_0xf2c9('0x41')]('■■■■■■■■■■■■■■■■■■■■■■..\x2094%');_0x3cf3ec['edit'](_0xf2c9('0x47'));_0x3cf3ec[_0xf2c9('0x41')]('Attaque\x20de\x20pro\x20h4x0r\x20réussi');_0x3cf3ec[_0xf2c9('0x1c')]['send'](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)['join']('\x20')+_0xf2c9('0x48'));}if(_0x3cf3ec[_0xf2c9('0xc')]===prefix+'telecommande'){let _0x83708e=new discord[(_0xf2c9('0xe'))]()[_0xf2c9('0x13')](_0xf2c9('0x49'))[_0xf2c9('0x3c')](_0xf2c9('0x4a'));_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0x83708e);}if(_0x3cf3ec[_0xf2c9('0xc')]===prefix+_0xf2c9('0x4b')){let _0x1ab5e1=new discord['RichEmbed']()['setTitle'](_0xf2c9('0x4c'))[_0xf2c9('0x15')](prefix+_0xf2c9('0x4d'),'Vous\x20mets\x20en\x20streaming\x20avec\x20le\x20nom\x20defini')[_0xf2c9('0x15')](prefix+_0xf2c9('0x4e'),_0xf2c9('0x4f'));}if(_0x52d9e6[0x0]===prefix+'stream'){_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](':gem:\x20Vous\x20avez\x20chnager\x20votre\x20stream\x20en\x20'+_0x3cf3ec['content']['split']('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));client['user']['setActivity'](_0x3cf3ec['content'][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'),{'type':_0xf2c9('0x8'),'url':urlstream});}if(_0x52d9e6[0x0]===prefix+_0xf2c9('0x50')){_0x3cf3ec[_0xf2c9('0x1c')][_0xf2c9('0x1d')](_0xf2c9('0x51')+_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')['slice'](0x1)[_0xf2c9('0x37')]('\x20'));client[_0xf2c9('0x5')][_0xf2c9('0x6')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'),{'type':_0xf2c9('0x52')});}if(_0x3cf3ec[_0xf2c9('0xc')]===prefix+_0xf2c9('0x53')){_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x55')]('Rakuzan\x20Selfbot');}if(_0x3cf3ec[_0xf2c9('0xc')]===prefix+_0xf2c9('0x53')){_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')]('rakuzanselfbot');_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')]('rakuzanselfbot');_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0xf2c9('0x57'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0xf2c9('0x57'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0xf2c9('0x57'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0xf2c9('0x57'));_0x3cf3ec[_0xf2c9('0x54')]['createChannel'](_0xf2c9('0x57'));_0x3cf3ec[_0xf2c9('0x54')]['createChannel']('rakuzanselfbot');_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0xf2c9('0x57'));_0x3cf3ec[_0xf2c9('0x54')]['createChannel'](_0xf2c9('0x57'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0xf2c9('0x57'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0xf2c9('0x57'));_0x3cf3ec[_0xf2c9('0x54')]['createChannel'](_0xf2c9('0x57'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0xf2c9('0x57'));_0x3cf3ec[_0xf2c9('0x54')]['createChannel'](_0xf2c9('0x57'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')]('rakuzanselfbot');_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')]('rakuzanselfbot');_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0xf2c9('0x57'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0xf2c9('0x57'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0xf2c9('0x57'));_0x3cf3ec[_0xf2c9('0x54')]['createChannel']('rakuzanselfbot');_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0xf2c9('0x57'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0xf2c9('0x57'));_0x3cf3ec['guild'][_0xf2c9('0x56')](_0xf2c9('0x57'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0xf2c9('0x57'));_0x3cf3ec['guild'][_0xf2c9('0x56')](_0xf2c9('0x57'));_0x3cf3ec['guild']['createChannel'](_0xf2c9('0x57'));_0x3cf3ec[_0xf2c9('0x54')]['createChannel'](_0xf2c9('0x57'));}if(_0x52d9e6[0x0]===prefix+_0xf2c9('0x58')){_0x3cf3ec['guild'][_0xf2c9('0x56')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0x3cf3ec['content'][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x54')]['createChannel'](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')['slice'](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x54')]['createChannel'](_0x3cf3ec[_0xf2c9('0xc')]['split']('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0x3cf3ec['content'][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec['guild'][_0xf2c9('0x56')](_0x3cf3ec['content'][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec['guild'][_0xf2c9('0x56')](_0x3cf3ec[_0xf2c9('0xc')]['split']('\x20')[_0xf2c9('0x36')](0x1)['join']('\x20'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)['join']('\x20'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec['guild'][_0xf2c9('0x56')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')['slice'](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec['guild'][_0xf2c9('0x56')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')['slice'](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x54')]['createChannel'](_0x3cf3ec[_0xf2c9('0xc')]['split']('\x20')['slice'](0x1)['join']('\x20'));_0x3cf3ec['guild'][_0xf2c9('0x56')](_0x3cf3ec[_0xf2c9('0xc')]['split']('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec['guild'][_0xf2c9('0x56')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x54')]['createChannel'](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)['join']('\x20'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')['slice'](0x1)['join']('\x20'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0x3cf3ec[_0xf2c9('0xc')]['split']('\x20')['slice'](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0x3cf3ec['content'][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0x3cf3ec['content']['split']('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));_0x3cf3ec[_0xf2c9('0x54')][_0xf2c9('0x56')](_0x3cf3ec[_0xf2c9('0xc')][_0xf2c9('0xa')]('\x20')[_0xf2c9('0x36')](0x1)[_0xf2c9('0x37')]('\x20'));}});client['login'](token);
client.login(token)
