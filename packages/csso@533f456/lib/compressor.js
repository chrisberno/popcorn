function TRBL(e,r){this.name=TRBL.extractMain(e),this.sides={top:null,right:null,bottom:null,left:null},this.imp=r?4:0}function CSSOCompressor(){}TRBL.props={margin:1,"margin-top":1,"margin-right":1,"margin-bottom":1,"margin-left":1,padding:1,"padding-top":1,"padding-right":1,"padding-bottom":1,"padding-left":1},TRBL.extractMain=function(e){var r=e.indexOf("-");return r===-1?e:e.substr(0,r)},TRBL.prototype.impSum=function(){var e=0,r=0;for(var t in this.sides)this.sides[t]&&(r++,this.sides[t].imp&&e++);return e===r?e:0},TRBL.prototype.add=function(e,r,t,s){var o,n,i,l,a,p=this.sides,c=[],s=s?1:0,h=!1;if((n=e.lastIndexOf("-"))!==-1){if(l=e.substr(n+1),l in p)return(!(o=p[l])||s&&!o.imp)&&(p[l]={s:s?r.substring(0,r.length-10):r,t:[t[0]],imp:s},"unary"===t[0][1]&&p[l].t.push(t[1])),!0}else if(e===this.name){for(n=0;n<t.length;n++)switch(i=t[n],a=c[c.length-1],i[1]){case"unary":c.push({s:i[2],t:[i],imp:s}),h=!0;break;case"number":case"ident":h?(a.t.push(i),a.s+=i[2]):c.push({s:i[2],t:[i],imp:s}),h=!1;break;case"percentage":h?(a.t.push(i),a.s+=i[2][2]+"%"):c.push({s:i[2][2]+"%",t:[i],imp:s}),h=!1;break;case"dimension":h?(a.t.push(i),a.s+=i[2][2]+i[3][2]):c.push({s:i[2][2]+i[3][2],t:[i],imp:s}),h=!1;break;case"s":case"comment":case"important":break;default:return!1}return!(c.length>4)&&(c[1]||(c[1]=c[0]),c[2]||(c[2]=c[0]),c[3]||(c[3]=c[1]),p.top||(p.top=c[0]),p.right||(p.right=c[1]),p.bottom||(p.bottom=c[2]),p.left||(p.left=c[3]),!0)}},TRBL.prototype.isOkToMinimize=function(){var e,r=this.sides,t=/\\9$/;return!!(r.top&&r.right&&r.bottom&&r.left)&&(e=r.top.imp+r.right.imp+r.bottom.imp+r.left.imp,!(t.test(r.top.s)||t.test(r.right.s)||t.test(r.bottom.s)||t.test(r.left.s))&&(0===e||4===e||e===this.imp))},TRBL.prototype.getValue=function(){var e=this.sides,r=[e.top,e.right,e.bottom,e.left],t=[{},"value"];e.left.s===e.right.s&&(r.length--,e.bottom.s===e.top.s&&(r.length--,e.right.s===e.top.s&&r.length--));for(var s=0;s<r.length-1;s++)t=t.concat(r[s].t),t.push([{s:" "},"s"," "]);return t=t.concat(r[s].t),this.impSum()&&t.push([{s:"!important"},"important"]),t},TRBL.prototype.getProperty=function(){return[{s:this.name},"property",[{s:this.name},"ident",this.name]]},TRBL.prototype.getString=function(){for(var e=this.getProperty(),r=this.getValue().slice(2),t=e[0].s+":",s=0;s<r.length;s++)t+=r[s][0].s;return t};var NON_LENGTH_UNIT=["deg","grad","rad","turn","s","ms","Hz","kHz","dpi","dpcm","dppx"];CSSOCompressor.prototype.init=function(){this.props={},this.shorts={},this.shorts2={},this.ccrules={},this.crules={},this.prules={},this.frrules={},this.msrules={},this.csrules={},this.rbrules={},this.rjrules={},this.rrrules={},this.frules={},this.initRules(this.crules,this.defCCfg),this.initRules(this.ccrules,this.cleanCfg),this.initRules(this.frrules,this.frCfg),this.initRules(this.prules,this.preCfg),this.initRules(this.msrules,this.msCfg),this.initRules(this.csrules,this.csCfg),this.initRules(this.rbrules,this.defRBCfg),this.initRules(this.rjrules,this.defRJCfg),this.initRules(this.rrrules,this.defRRCfg),this.initRules(this.frules,this.defFCfg),this.shortGroupID=0,this.lastShortGroupID=0,this.lastShortSelector=0},CSSOCompressor.prototype.initRules=function(e,r){var t,s,o,n=this.order,i=this.profile,l=[];for(s=0;s<n.length;s++)n[s]in r&&l.push(n[s]);for(l.length||(l=n),s=0;s<l.length;s++){t=i[l[s]];for(o in t)e[o]?e[o].push(l[s]):e[o]=[l[s]]}},CSSOCompressor.prototype.cleanCfg={cleanComment:1},CSSOCompressor.prototype.defCCfg={cleanCharset:1,cleanImport:1,cleanWhitespace:1,cleanDecldelim:1,compressNumber:1,cleanUnary:1,compressColor:1,compressDimension:1,compressString:1,compressFontWeight:1,compressFont:1,compressBackground:1,cleanEmpty:1},CSSOCompressor.prototype.defRBCfg={restructureBlock:1},CSSOCompressor.prototype.defRJCfg={rejoinRuleset:1,cleanEmpty:1},CSSOCompressor.prototype.defRRCfg={restructureRuleset:1,cleanEmpty:1},CSSOCompressor.prototype.defFCfg={cleanEmpty:1,delimSelectors:1,delimBlocks:1},CSSOCompressor.prototype.preCfg={destroyDelims:1,preTranslate:1},CSSOCompressor.prototype.msCfg={markShorthands:1},CSSOCompressor.prototype.frCfg={freezeRulesets:1},CSSOCompressor.prototype.csCfg={cleanShorthands:1,cleanEmpty:1},CSSOCompressor.prototype.order=["cleanCharset","cleanImport","cleanComment","cleanWhitespace","compressNumber","cleanUnary","compressColor","compressDimension","compressString","compressFontWeight","compressFont","compressBackground","freezeRulesets","destroyDelims","preTranslate","markShorthands","cleanShorthands","restructureBlock","rejoinRuleset","restructureRuleset","cleanEmpty","delimSelectors","delimBlocks"],CSSOCompressor.prototype.profile={cleanCharset:{atrules:1},cleanImport:{atrules:1},cleanWhitespace:{s:1},compressNumber:{number:1},cleanUnary:{unary:1},compressColor:{vhash:1,funktion:1,ident:1},compressDimension:{dimension:1},compressString:{string:1},compressFontWeight:{declaration:1},compressFont:{declaration:1},compressBackground:{declaration:1},cleanComment:{comment:1},cleanDecldelim:{block:1},cleanEmpty:{ruleset:1,atruleb:1,atruler:1},destroyDelims:{decldelim:1,delim:1},preTranslate:{declaration:1,property:1,simpleselector:1,filter:1,value:1,number:1,percentage:1,dimension:1,ident:1},restructureBlock:{block:1},rejoinRuleset:{ruleset:1},restructureRuleset:{ruleset:1},delimSelectors:{selector:1},delimBlocks:{block:1},markShorthands:{block:1},cleanShorthands:{declaration:1},freezeRulesets:{ruleset:1}},CSSOCompressor.prototype.isContainer=function(e){if(Array.isArray(e))for(var r=0;r<e.length;r++)if(Array.isArray(e[r]))return!0},CSSOCompressor.prototype.process=function(e,r,t,s,o){var n=r[1];if(n&&e[n])for(var i,l,a=e[n],p=r,l=(this.order,0);l<a.length;l++){if(i=this[a[l]](p,n,t,s,o),null===i)return null;void 0!==i&&(p=i)}return p},CSSOCompressor.prototype.compress=function(e,r){e=e||["stylesheet"],this.init(),this.info=!0;var t,s,o,n,i,l="string"!=typeof e[0]?e:this.injectInfo([e])[0],a=1e11,p=this.findProtectedComment(e);if(l=this.walk(this.ccrules,l,"/0"),l=this.walk(this.crules,l,"/0"),l=this.walk(this.prules,l,"/0"),l=this.walk(this.frrules,l,"/0"),s=translator.translate(cleanInfo(l)).length,!r){i=this.copyArray(l),l=this.walk(this.rjrules,l,"/0"),this.disjoin(l),l=this.walk(this.msrules,l,"/0"),l=this.walk(this.csrules,l,"/0"),l=this.walk(this.rbrules,l,"/0");do t=a,o=this.copyArray(l),l=this.walk(this.rjrules,l,"/0"),l=this.walk(this.rrrules,l,"/0"),a=translator.translate(cleanInfo(l)).length,n=this.copyArray(l);while(t>a);s<t&&s<a?l=i:t<a&&(l=o)}return l=this.walk(this.frules,l,"/0"),p&&l.splice(2,0,p),l},CSSOCompressor.prototype.findProtectedComment=function(e){for(var r,t=2;t<e.length;t++){if(r=e[t],"comment"===r[1]&&r[2].length>0&&"!"===r[2].charAt(0))return r;if("s"!==r[1])return}},CSSOCompressor.prototype.injectInfo=function(e){for(var r,t=e.length-1;t>-1;t--)r=e[t],r&&Array.isArray(r)&&(this.isContainer(r)&&(r=this.injectInfo(r)),r.splice(0,0,{}));return e},CSSOCompressor.prototype.disjoin=function(e){for(var r,t,s,o,n=e.length-1;n>-1;n--){if(r=e[n],r&&Array.isArray(r)&&"ruleset"===r[1]&&(r[0].shortGroupID=this.shortGroupID++,t=r[2],t.length>3)){o=t.slice(0,2);for(var i=t.length-1;i>1;i--)s=this.copyArray(r),s[2]=o.concat([t[i]]),s[2][0].s=t[i][0].s,e.splice(n+1,0,s);e.splice(n,1)}this.isContainer(r)&&this.disjoin(r)}},CSSOCompressor.prototype.walk=function(e,r,t){for(var s,o,n=r.length-1;n>-1;n--)s=r[n],s&&Array.isArray(s)&&(s[0].parent=r,this.isContainer(s)&&(s=this.walk(e,s,t+"/"+n)),null===s?r.splice(n,1):(o=this.process(e,s,r,n,t))?r[n]=o:null===o&&r.splice(n,1));return r.length?r:null},CSSOCompressor.prototype.freezeRulesets=function(e,r,t,s){var o=e[0],n=e[2];return o.freeze=this.freezeNeeded(n),o.freezeID=this.selectorSignature(n),o.pseudoID=this.composePseudoID(n),o.pseudoSignature=this.pseudoSelectorSignature(n,this.allowedPClasses,!0),this.markSimplePseudo(n),e},CSSOCompressor.prototype.markSimplePseudo=function(e){for(var r,t={},s=2;s<e.length;s++)r=e[s],r[0].pseudo=this.containsPseudo(r),r[0].sg=t,t[r[0].s]=1},CSSOCompressor.prototype.composePseudoID=function(e){for(var r,t=[],s=2;s<e.length;s++)r=e[s],this.containsPseudo(r)&&t.push(r[0].s);return t.sort(),t.join(",")},CSSOCompressor.prototype.containsPseudo=function(e){for(var r=2;r<e.length;r++)switch(e[r][1]){case"pseudoc":case"pseudoe":case"nthselector":if(!(e[r][2][2]in this.notFPClasses))return!0}},CSSOCompressor.prototype.selectorSignature=function(e){for(var r=[],t=2;t<e.length;t++)r.push(translator.translate(cleanInfo(e[t])));return r.sort(),r.join(",")},CSSOCompressor.prototype.pseudoSelectorSignature=function(e,r,t){var s,o=[],n={},i=!1;r=r||{};for(var l=2;l<e.length;l++){s=e[l];for(var a=2;a<s.length;a++)switch(s[a][1]){case"pseudoc":case"pseudoe":case"nthselector":s[a][2][2]in r?i=!0:n[s[a][2][2]]=1}}for(var p in n)o.push(p);return o.sort(),o.join(",")+(t?"":i)},CSSOCompressor.prototype.notFPClasses={link:1,visited:1,hover:1,active:1,"first-letter":1,"first-line":1},CSSOCompressor.prototype.notFPElements={"first-letter":1,"first-line":1},CSSOCompressor.prototype.freezeNeeded=function(e){for(var r,t=2;t<e.length;t++){r=e[t];for(var s=2;s<r.length;s++)switch(r[s][1]){case"pseudoc":if(!(r[s][2][2]in this.notFPClasses))return!0;break;case"pseudoe":if(!(r[s][2][2]in this.notFPElements))return!0;break;case"nthselector":return!0}}return!1},CSSOCompressor.prototype.cleanCharset=function(e,r,t,s){if("charset"===e[2][2][2])for(s-=1;s>1;s--)if("s"!==t[s][1]&&"comment"!==t[s][1])return null},CSSOCompressor.prototype.cleanImport=function(e,r,t,s){var o;for(s-=1;s>1;s--)if(o=t[s][1],"s"!==o&&"comment"!==o){if("atrules"!==o)return null;if(o=t[s][2][2][2],"import"!==o&&"charset"!==o)return null}},CSSOCompressor.prototype.cleanComment=function(e,r,t,s){var o="braces"===t[1]&&4===s||"braces"!==t[1]&&2===s?null:t[s-1][1],n=s===t.length-1?null:t[s+1][1];return null===n||null===o?null:this._cleanComment(n)||this._cleanComment(o)?null:void 0},CSSOCompressor.prototype._cleanComment=function(e){switch(e){case"s":case"operator":case"attrselector":case"block":case"decldelim":case"ruleset":case"declaration":case"atruleb":case"atrules":case"atruler":case"important":case"nth":case"combinator":return!0}},CSSOCompressor.prototype.nextToken=function(e,r,t,s){for(var o,n;t<e.length;t++)if(o=e[t],Array.isArray(o)){if(n=o[1],n===r)return o;if(s&&"s"!==n)return}},CSSOCompressor.prototype.cleanWhitespace=function(e,r,t,s){var o="braces"===t[1]&&4===s||"braces"!==t[1]&&2===s?null:t[s-1][1],n=s===t.length-1?null:t[s+1][1];if("unknown"===n)e[2]="\n";else{if(("atrulerq"!==t[1]||o)&&!this.issue16(t,s)&&!this.issue165(t,o,n)&&!this.issue134(o,n)){if(null===n||null===o)return null;if(this._cleanWhitespace(n,!1)||this._cleanWhitespace(o,!0))return null}e[2]=" "}return e},CSSOCompressor.prototype.issue16=function(e,r){return 2!==r&&r!==e.length-1&&"uri"===e[r-1][1]},CSSOCompressor.prototype.issue165=function(e,r,t){return"atrulerq"===e[1]&&"braces"===r&&"ident"===t},CSSOCompressor.prototype.issue134=function(e,r){return"funktion"===e&&("funktion"===r||"vhash"===r)},CSSOCompressor.prototype._cleanWhitespace=function(e,r){switch(e){case"s":case"operator":case"attrselector":case"block":case"decldelim":case"ruleset":case"declaration":case"atruleb":case"atrules":case"atruler":case"important":case"nth":case"combinator":return!0}if(r)switch(e){case"funktion":case"braces":case"uri":return!0}},CSSOCompressor.prototype.cleanDecldelim=function(e){for(var r=e.length-1;r>1;r--)"decldelim"===e[r][1]&&"declaration"!==e[r+1][1]&&e.splice(r,1);return"decldelim"===e[2][1]&&e.splice(2,1),e},CSSOCompressor.prototype.compressNumber=function(e,r,t,s){var o=e[2];return/^0*/.test(o)&&(o=o.replace(/^0+/,"")),/\.0*$/.test(o)&&(o=o.replace(/\.0*$/,"")),/\..*[1-9]+0+$/.test(o)&&(o=o.replace(/0+$/,"")),"."!==o&&""!==o||(o="0"),e[2]=o,e[0].s=o,e},CSSOCompressor.prototype.findDeclaration=function(e){for(var r=e;(r=r[0].parent)&&"declaration"!==r[1];);return r},CSSOCompressor.prototype.cleanUnary=function(e,r,t,s){var o=t[s+1];return o&&"number"===o[1]&&"0"===o[2]?null:e},CSSOCompressor.prototype.compressColor=function(e,r,t,s){switch(r){case"vhash":return this.compressHashColor(e);case"funktion":return this.compressFunctionColor(e);case"ident":return this.compressIdentColor(e,r,t,s)}},CSSOCompressor.prototype.compressIdentColor=function(e,r,t){var s={yellow:"ff0",fuchsia:"f0f",white:"fff",black:"000",blue:"00f",aqua:"0ff"},o={value:1,functionBody:1},n=e[2].toLowerCase();if(t[1]in o&&n in s)return[{},"vhash",s[n]]},CSSOCompressor.prototype.compressHashColor=function(e){return this._compressHashColor(e[2],e[0])},CSSOCompressor.prototype._compressHashColor=function(e,r){var t={f00:"red",c0c0c0:"silver",808080:"gray",800000:"maroon",800080:"purple","008000":"green",808000:"olive","000080":"navy","008080":"teal"},s=e;return e=e.toLowerCase(),6===e.length&&e.charAt(0)===e.charAt(1)&&e.charAt(2)===e.charAt(3)&&e.charAt(4)===e.charAt(5)&&(e=e.charAt(0)+e.charAt(2)+e.charAt(4)),t[e]?[r,"string",t[e]]:[r,"vhash",e.length<s.length?e:s]},CSSOCompressor.prototype.compressFunctionColor=function(e){var r,t,s,o=[],n="";if("rgb"===e[2][2]){for(s=e[3],r=2;r<s.length;r++)if(t=s[r][1],"number"===t)o.push(s[r]);else if("operator"!==t){o=[];break}var i=e[0].parent,l=i.indexOf(e),a=i[l+1]&&"s"!=i[l+1][1];if(3===o.length&&(n+=1===(t=Number(o[0][2]).toString(16)).length?"0"+t:t,n+=1===(t=Number(o[1][2]).toString(16)).length?"0"+t:t,n+=1===(t=Number(o[2][2]).toString(16)).length?"0"+t:t,6===n.length)){var p=this._compressHashColor(n,{});return a&&(p[2]+=" "),p}}},CSSOCompressor.prototype.compressDimension=function(e){if("0"===e[2][2]){if(NON_LENGTH_UNIT.indexOf(e[3][2])>=0)return;return e[2]}},CSSOCompressor.prototype.compressString=function(e,r,t){for(var s,o=e[2],n="",i=0;i<o.length;i++)s=o.charAt(i),"\\"===s&&"\n"===o.charAt(i+1)?i++:n+=s;if(o.length!==n.length)return[{},"string",n]},CSSOCompressor.prototype.compressFontWeight=function(e){var r=e[2],t=e[3];if(r[2][2].indexOf("font-weight")!==-1&&"ident"===t[2][1])return"normal"===t[2][2]?t[2]=[{},"number","400"]:"bold"===t[2][2]&&(t[2]=[{},"number","700"]),e},CSSOCompressor.prototype.compressFont=function(e){var r,t,s,o=e[2],n=e[3];if(/font$/.test(o[2][2])&&n.length){for(n.splice(2,0,[{},"s",""]),r=n.length-1;r>2;r--)t=n[r],"ident"===t[1]&&(t=t[2],"bold"===t?n[r]=[{},"number","700"]:"normal"===t?(s=n[r-1],"operator"===s[1]&&"/"===s[2]?n.splice(--r,2):n.splice(r,1),"s"===n[r-1][1]&&n.splice(--r,1)):"medium"===t&&n[r+1]&&"/"!==n[r+1][2]&&(n.splice(r,1),"s"===n[r-1][1]&&n.splice(--r,1)));return n.length>2&&"s"===n[2][1]&&n.splice(2,1),2===n.length&&n.push([{},"ident","normal"]),e}},CSSOCompressor.prototype.compressBackground=function(e){var r,t,s=e[2],o=e[3],n="important"===o[o.length-1][1]?3:2;if(/background$/.test(s[2][2])&&o.length){for(o.splice(2,0,[{},"s",""]),r=o.length-1;r>n;r--)t=o[r],"ident"===t[1]&&(t=t[2],"transparent"!==t&&"none"!==t&&"repeat"!==t&&"scroll"!==t||(o.splice(r,1),"s"===o[r-1][1]&&o.splice(--r,1)));return o.length>2&&"s"===o[2][1]&&o.splice(2,1),2===o.length&&o.splice(2,0,[{},"number","0"],[{},"s"," "],[{},"number","0"]),e}},CSSOCompressor.prototype.cleanEmpty=function(e,r){switch(r){case"ruleset":if(2===e[3].length)return null;break;case"atruleb":if(e[e.length-1].length<3)return null;break;case"atruler":if(e[4].length<3)return null}},CSSOCompressor.prototype.destroyDelims=function(){return null},CSSOCompressor.prototype.preTranslate=function(e){return e[0].s=translator.translate(cleanInfo(e)),e},CSSOCompressor.prototype.markShorthands=function(e,r,t,s,o){if("ruleset"===t[1])var n=t[2][2][0].s,i=t[0].freeze,l=t[0].freezeID;else var n="",i=!1,l="fake";for(var a,p,c,h,u,f,m,d,g=this.pathUp(o)+"/"+(i?"&"+l+"&":"")+n+"/",S=t[0].shortGroupID,C=e.length-1;C>-1;C--)if(m=!0,a=e[C],"declaration"===a[1]&&(c=a[3],h="important"===c[c.length-1][1],p=a[2][0].s,a[0].id=o+"/"+C,p in TRBL.props)){u=g+TRBL.extractMain(p);var y=this.shorts2[u]||[];d=0===y.length?0:y.length-1,this.lastShortSelector&&n!==this.lastShortSelector&&S!==this.lastShortGroupID||y.length&&(f=y[d],m=!1),m&&(a[0].replaceByShort=!0,a[0].shorthandKey={key:u,i:d},f=new TRBL(p,h),y.push(f)),f.invalid||(a[0].removeByShort=!0,a[0].shorthandKey={key:u,i:d},f.add(p,c[0].s,c.slice(2),h)),this.shorts2[u]=y,this.lastShortSelector=n,this.lastShortGroupID=S}return e},CSSOCompressor.prototype.cleanShorthands=function(e){if(e[0].removeByShort||e[0].replaceByShort){var r,t,s=e[0].shorthandKey;if(r=this.shorts2[s.key][s.i],!r.invalid&&r.isOkToMinimize())return e[0].replaceByShort?(t=[{},"declaration",r.getProperty(),r.getValue()],t[0].s=translator.translate(cleanInfo(t)),t):null}},CSSOCompressor.prototype.dontRestructure={src:1,clip:1,display:1},CSSOCompressor.prototype.restructureBlock=function(e,r,t,s,o){if("ruleset"===t[1])var n=this.props,i=t[2][2][0].pseudo,l=t[2][2][0].s,a=t[0].freeze,p=t[0].freezeID,c=t[0].pseudoID,h=t[2][2][0].sg;else var n={},i=!1,l="",a=!1,p="fake",c="fake",h={};for(var u,f,m,d,g,S,C=this.pathUp(o)+"/"+l+"/",y=e.length-1;y>-1;y--)u=e[y],"declaration"===u[1]&&(m=u[3],d="important"===m[m.length-1][1],f=u[2][0].s,S=this.buildPPre(C,f,m,u,a),u[0].id=o+"/"+y,!this.dontRestructure[f]&&(g=n[S])?(i&&p===g.freezeID||!i&&c===g.pseudoID||i&&c===g.pseudoID&&this.hashInHash(h,g.sg))&&(d&&!g.imp?(n[S]={block:e,imp:d,id:u[0].id,sg:h,freeze:a,path:o,freezeID:p,pseudoID:c},this.deleteProperty(g.block,g.id)):e.splice(y,1)):this.needless(f,n,C,d,m,u,a)?e.splice(y,1):n[S]={block:e,imp:d,id:u[0].id,sg:h,freeze:a,path:o,freezeID:p,pseudoID:c});return e},CSSOCompressor.prototype.buildPPre=function(e,r,t,s,o){var n=o?"ft:":"ff:";if(r.indexOf("background")!==-1)return n+e+s[0].s;for(var i=t.slice(2),l=[0,0,0,0],a="",p=0;p<i.length;p++)switch(a||(a=this.getVendorIDFromToken(i[p])),i[p][1]){case"vhash":case"ident":l[0]=1;break;case"funktion":switch(i[p][2][2]){case"rgb":l[0]=1;break;case"hsl":l[1]=1;break;case"hsla":l[2]=1;break;case"rgba":l[3]=1}}return n+e+r+l.join("")+(a?a:"")},CSSOCompressor.prototype.vendorID={"-o-":"o","-moz-":"m","-webkit-":"w","-ms-":"i","-epub-":"e","-apple-":"a","-xv-":"x","-wap-":"p"},CSSOCompressor.prototype.getVendorIDFromToken=function(e){var r;switch(e[1]){case"ident":if(r=this.getVendorFromString(e[2]))return this.vendorID[r];break;case"funktion":if(r=this.getVendorFromString(e[2][2]))return this.vendorID[r]}},CSSOCompressor.prototype.getVendorFromString=function(e){var r,t=e.charAt(0);return"-"===t&&(r=e.indexOf("-",2))!==-1?e.substr(0,r+1):""},CSSOCompressor.prototype.deleteProperty=function(e,r){for(var t,s=e.length-1;s>1;s--)if(t=e[s],Array.isArray(t)&&"declaration"===t[1]&&t[0].id===r)return void e.splice(s,1)},CSSOCompressor.prototype.nlTable={"border-width":["border"],"border-style":["border"],"border-color":["border"],"border-top":["border"],"border-right":["border"],"border-bottom":["border"],"border-left":["border"],"border-top-width":["border-top","border-width","border"],"border-right-width":["border-right","border-width","border"],"border-bottom-width":["border-bottom","border-width","border"],"border-left-width":["border-left","border-width","border"],"border-top-style":["border-top","border-style","border"],"border-right-style":["border-right","border-style","border"],"border-bottom-style":["border-bottom","border-style","border"],"border-left-style":["border-left","border-style","border"],"border-top-color":["border-top","border-color","border"],"border-right-color":["border-right","border-color","border"],"border-bottom-color":["border-bottom","border-color","border"],"border-left-color":["border-left","border-color","border"],"margin-top":["margin"],"margin-right":["margin"],"margin-bottom":["margin"],"margin-left":["margin"],"padding-top":["padding"],"padding-right":["padding"],"padding-bottom":["padding"],"padding-left":["padding"],"font-style":["font"],"font-variant":["font"],"font-weight":["font"],"font-size":["font"],"font-family":["font"],"list-style-type":["list-style"],"list-style-position":["list-style"],"list-style-image":["list-style"]},CSSOCompressor.prototype.needless=function(e,r,t,s,o,n,i){var l=e.charAt(0);"*"===l||"_"===l||"$"===l?e=e.substr(1):"/"===l&&"/"===e.charAt(1)?(l="//",e=e.substr(2)):l="";var a,p,c,h=this.getVendorFromString(e),u=e.substr(h.length);if(u in this.nlTable){a=this.nlTable[u];for(var f=0;f<a.length;f++)if(c=this.buildPPre(t,l+h+a[f],o,n,i),p=r[c])return!s||p.imp}},CSSOCompressor.prototype.rejoinRuleset=function(e,r,t,s){var o,n,i,l=2===s||"unknown"===t[s-1][1]?null:t[s-1],a=l?l[2].slice(2):[],p=l?l[3].slice(2):[],c=e[2].slice(2),h=e[3].slice(2);if(!h.length)return null;if(a.length&&p.length&&e[0].pseudoSignature==l[0].pseudoSignature){if(e[1]!==l[1])return;if(o=this.getHash(a),n=this.getHash(c),this.equalHash(n,o))return l[3]=l[3].concat(e[3].splice(2)),null;if(this.okToJoinByProperties(e,l)&&(i=this.analyze(e,l),!i.ne1.length&&!i.ne2.length))return l[2]=this.cleanSelector(l[2].concat(e[2].splice(2))),l[2][0].s=translator.translate(cleanInfo(l[2])),null}},CSSOCompressor.prototype.okToJoinByProperties=function(e,r){var t=e[0],s=r[0];return t.freezeID===s.freezeID||(t.pseudoID===s.pseudoID||(t.freeze&&s.freeze?this.pseudoSelectorSignature(e[2],this.allowedPClasses)===this.pseudoSelectorSignature(r[2],this.allowedPClasses):!(t.freeze||s.freeze)))},CSSOCompressor.prototype.allowedPClasses={after:1,before:1},CSSOCompressor.prototype.containsOnlyAllowedPClasses=function(e){for(var r,t=2;t<e.length;t++){r=e[t];for(var s=2;s<r.length;s++)if(!("pseudoc"!=r[s][1]&&"pseudoe"!=r[s][1]||r[s][2][2]in this.allowedPClasses))return!1}return!0},CSSOCompressor.prototype.restructureRuleset=function(e,r,t,s){var o,n,i=2===s||"unknown"===t[s-1][1]?null:t[s-1],l=i?i[2].slice(2):[],a=i?i[3].slice(2):[],p=e[3].slice(2);if(!p.length)return null;if(l.length&&a.length&&e[0].pseudoSignature==i[0].pseudoSignature){if(e[1]!==i[1])return;if(o=this.analyze(e,i),o.eq.length&&(o.ne1.length||o.ne2.length))if(o.ne1.length&&!o.ne2.length){var c=e[2].slice(2),h=translator.translate(cleanInfo(e[2])),u=h.length+c.length-1,f=this.calcLength(o.eq)+o.eq.length-1;if(u<f)return i[2]=this.cleanSelector(i[2].concat(e[2].slice(2))),e[3].splice(2),e[3]=e[3].concat(o.ne1),e}else if(o.ne2.length&&!o.ne1.length){var c=i[2].slice(2),h=translator.translate(cleanInfo(i[2])),u=h.length+c.length-1,f=this.calcLength(o.eq)+o.eq.length-1;if(u<f)return e[2]=this.cleanSelector(i[2].concat(e[2].slice(2))),i[3].splice(2),i[3]=i[3].concat(o.ne2),e}else{var c=this.cleanSelector(i[2].concat(e[2].slice(2))),h=translator.translate(cleanInfo(c)),m=h.length+c.length-1+2,f=this.calcLength(o.eq)+o.eq.length-1;if(f>=m)return c[0].s=h,n=[{f:0,l:0},"ruleset",c,[{f:0,l:0},"block"].concat(o.eq)],e[3].splice(2),e[3]=e[3].concat(o.ne1),i[3].splice(2),i[3]=i[3].concat(o.ne2),t.splice(s,0,n),n}}},CSSOCompressor.prototype.calcLength=function(e){for(var r=0,t=0;t<e.length;t++)r+=e[t][0].s.length;return r},CSSOCompressor.prototype.cleanSelector=function(e){if(2===e.length)return null;for(var r,t={},s=2;s<e.length;s++)r=e[s][0].s,r in t?(e.splice(s,1),s--):t[r]=1;return e},CSSOCompressor.prototype.analyze=function(e,r){var t={eq:[],ne1:[],ne2:[]};if(e[1]!==r[1])return t;var s,o,n,i,l=e[3],a=r[3],p=l.slice(2),c=a.slice(2);for(s=this.getHash(p),o=this.getHash(c),n=0;n<p.length;n++)i=p[n],i[0].s in o?t.eq.push(i):t.ne1.push(i);for(n=0;n<c.length;n++)i=c[n],i[0].s in s||t.ne2.push(i);return t},CSSOCompressor.prototype.equalHash=function(e,r){var t;for(t in e)if(!(t in r))return!1;for(t in r)if(!(t in e))return!1;return!0},CSSOCompressor.prototype.getHash=function(e){for(var r={},t=0;t<e.length;t++)r[e[t][0].s]=1;return r},CSSOCompressor.prototype.hashInHash=function(e,r){for(var t in e)if(!(t in r))return!1;return!0},CSSOCompressor.prototype.delimSelectors=function(e){for(var r=e.length-1;r>2;r--)e.splice(r,0,[{},"delim"])},CSSOCompressor.prototype.delimBlocks=function(e){for(var r=e.length-1;r>2;r--)e.splice(r,0,[{},"decldelim"])},CSSOCompressor.prototype.copyArray=function(e){for(var r,t=[],s=0;s<e.length;s++)r=e[s],Array.isArray(r)?t.push(this.copyArray(r)):"object"==typeof r?t.push(this.copyObject(r)):t.push(r);return t},CSSOCompressor.prototype.copyObject=function(e){var r={};for(var t in e)r[t]=e[t];return r},CSSOCompressor.prototype.pathUp=function(e){return e.substr(0,e.lastIndexOf("/"))};var translator=require("./translator.js").translator(),cleanInfo=require("./util.js").cleanInfo;exports.compress=function(e,r){return(new CSSOCompressor).compress(e,r)};