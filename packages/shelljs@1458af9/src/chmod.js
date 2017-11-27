function _chmod(E,e,r){r||(E.length>0&&"-"===E.charAt(0)?(r=e,e=E,E=""):common.error("You must specify a file.")),E=common.parseOptions(E,{R:"recursive",c:"changes",v:"verbose"}),"string"==typeof r&&(r=[r]);var n;E.recursive?(n=[],common.expand(r).forEach(function o(E){var e=fs.lstatSync(E);e.isSymbolicLink()||(n.push(E),e.isDirectory()&&fs.readdirSync(E).forEach(function(e){o(E+"/"+e)}))})):n=common.expand(r),n.forEach(function(r){if(r=path.resolve(r),fs.existsSync(r)||common.error("File not found: "+r),!E.recursive||!fs.lstatSync(r).isSymbolicLink()){var n=fs.statSync(r).mode,o=n&PERMS.TYPE_MASK,R=n;isNaN(parseInt(e,8))?e.split(",").forEach(function(e){var s=/([ugoa]*)([=\+-])([rwxXst]*)/i,c=s.exec(e);if(c){var i=c[1],t=c[2],a=c[3],S=i.indexOf("u")!=-1||"a"===i||""===i,f=i.indexOf("g")!=-1||"a"===i||""===i,T=i.indexOf("o")!=-1||"a"===i||""===i,m=a.indexOf("r")!=-1,I=a.indexOf("w")!=-1,O=a.indexOf("x")!=-1,P=a.indexOf("t")!=-1,_=a.indexOf("s")!=-1,d=0;switch(S&&(d|=(m?PERMS.OWNER_READ:0)+(I?PERMS.OWNER_WRITE:0)+(O?PERMS.OWNER_EXEC:0)+(_?PERMS.SETUID:0)),f&&(d|=(m?PERMS.GROUP_READ:0)+(I?PERMS.GROUP_WRITE:0)+(O?PERMS.GROUP_EXEC:0)+(_?PERMS.SETGID:0)),T&&(d|=(m?PERMS.OTHER_READ:0)+(I?PERMS.OTHER_WRITE:0)+(O?PERMS.OTHER_EXEC:0)),P&&(d|=PERMS.STICKY),t){case"+":R|=d;break;case"-":R&=~d;break;case"=":R=o+d,fs.statSync(r).isDirectory()&&(R|=PERMS.SETUID+PERMS.SETGID&n)}E.verbose&&log(r+" -> "+R.toString(8)),n!=R&&(!E.verbose&&E.changes&&log(r+" -> "+R.toString(8)),fs.chmodSync(r,R))}else common.error("Invalid symbolic mode change: "+e)}):(R=o+parseInt(e,8),fs.statSync(r).isDirectory()&&(R|=PERMS.SETUID+PERMS.SETGID&n),fs.chmodSync(r,R))}})}var common=require("./common"),fs=require("fs"),path=require("path"),PERMS=function(E){return{OTHER_EXEC:E.EXEC,OTHER_WRITE:E.WRITE,OTHER_READ:E.READ,GROUP_EXEC:E.EXEC<<3,GROUP_WRITE:E.WRITE<<3,GROUP_READ:E.READ<<3,OWNER_EXEC:E.EXEC<<6,OWNER_WRITE:E.WRITE<<6,OWNER_READ:E.READ<<6,STICKY:parseInt("01000",8),SETGID:parseInt("02000",8),SETUID:parseInt("04000",8),TYPE_MASK:parseInt("0770000",8)}}({EXEC:1,WRITE:2,READ:4});module.exports=_chmod;