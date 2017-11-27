function increment(n){return void 0!==n?n+1:0}var camelCase=require("camelcase"),path=require("path");module.exports=function(n,t){function r(n,r,e){var o=l(r,t.narg);if(e.length-(n+1)<o)throw Error("not enough arguments following: "+r);for(var c=n+1;c<o+n+1;c++)a(r,e[c]);return n+o}function e(n,t,r){for(var e=n+1;e<r.length&&!/^-/.test(r[e]);e++)n=e,a(t,r[e]);return n}function a(n,t){if((l(n,v.bools)||l(n,v.counts))&&"string"==typeof t&&(t="true"===t),/-/.test(n)&&(!m[n]||!m[n].length)){var r=camelCase(n);m[n]=[r],y[r]=!0}var e=!l(n,v.strings)&&g(t)?Number(t):t;l(n,v.counts)&&(e=increment);var a=n.split(".");s(p,a,e),(m[a[0]]||[]).forEach(function(n){if(n=n.split("."),a.length>1){var t=[].concat(a);t.shift(),n=n.concat(t)}s(p,n,e)});for(var o=[n].concat(m[n]||[]),c=0,i=o.length;c<i;c++)if(v.normalize[o[c]]){o.forEach(function(n){p.__defineSetter__(n,function(n){t=path.normalize(n)}),p.__defineGetter__(n,function(){return"string"==typeof t?path.normalize(t):t})});break}}function o(n){var t={};c(t,m,b),Object.keys(v.configs).forEach(function(r){var e=n[r]||t[r];if(e)try{var o=require(path.resolve(process.cwd(),e));Object.keys(o).forEach(function(t){void 0===n[t]&&(delete n[t],a(t,o[t]))})}catch(c){throw Error("invalid json config file: "+e)}})}function c(n,t,r){Object.keys(r).forEach(function(e){i(n,e.split("."))||(s(n,e.split("."),r[e]),(t[e]||[]).forEach(function(t){s(n,t.split("."),r[e])}))})}function i(n,t){var r=n;t.slice(0,-1).forEach(function(n){r=r[n]||{}});var e=t[t.length-1];return e in r}function s(n,t,r){var e=n;t.slice(0,-1).forEach(function(n){void 0===e[n]&&(e[n]={}),e=e[n]});var a=t[t.length-1];r===increment?e[a]=increment(e[a]):void 0===e[a]&&l(a,v.arrays)?e[a]=Array.isArray(r)?r:[r]:void 0===e[a]||"boolean"==typeof e[a]?e[a]=r:Array.isArray(e[a])?e[a].push(r):e[a]=[e[a],r]}function f(n){Object.keys(n||{}).forEach(function(n){m[n]=[].concat(t.alias[n]||[]),m[n].concat(n).forEach(function(t){if(/-/.test(t)){var r=camelCase(t);m[n].push(r),y[r]=!0}}),m[n].forEach(function(t){m[t]=[n].concat(m[n].filter(function(n){return t!==n}))})})}function l(n,t){var r=!1,e=[].concat(m[n]||[],n);return e.forEach(function(n){t[n]&&(r=t[n])}),r}function u(n){var t={"boolean":!0,string:"",array:[]};return t[n]}function h(n,t){var r="boolean";return t.strings&&t.strings[n]?r="string":t.arrays&&t.arrays[n]&&(r="array"),r}function g(n){return"number"==typeof n||(!!/^0x[0-9a-f]+$/i.test(n)||/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(n))}t||(t={});var v={arrays:{},bools:{},strings:{},counts:{},normalize:{},configs:{}};[].concat(t.array).filter(Boolean).forEach(function(n){v.arrays[n]=!0}),[].concat(t["boolean"]).filter(Boolean).forEach(function(n){v.bools[n]=!0}),[].concat(t.string).filter(Boolean).forEach(function(n){v.strings[n]=!0}),[].concat(t.count).filter(Boolean).forEach(function(n){v.counts[n]=!0}),[].concat(t.normalize).filter(Boolean).forEach(function(n){v.normalize[n]=!0}),[].concat(t.config).filter(Boolean).forEach(function(n){v.configs[n]=!0});var m={},y={};f(t.key),f(t.alias);var b=t["default"]||{};Object.keys(b).forEach(function(n){/-/.test(n)&&!t.alias[n]&&(m[n]=m[n]||[]),(m[n]||[]).forEach(function(t){b[t]=b[n]})});var p={_:[]};Object.keys(v.bools).forEach(function(n){a(n,n in b&&b[n])});var E=[];n.indexOf("--")!==-1&&(E=n.slice(n.indexOf("--")+1),n=n.slice(0,n.indexOf("--")));for(var d=0;d<n.length;d++){var k,_,O,j,z,A,B=n[d];if(B.match(/^--.+=/))j=B.match(/^--([^=]+)=([\s\S]*)$/),l(j[1],t.narg)?(n.splice(d+1,j[1],j[2]),d=r(d,j[1],n)):l(j[1],v.arrays)&&n.length>d+1?(n.splice(d+1,j[1],j[2]),d=e(d,j[1],n)):a(j[1],j[2]);else if(B.match(/^--no-.+/))_=B.match(/^--no-(.+)/)[1],a(_,!1);else if(B.match(/^--.+/))_=B.match(/^--(.+)/)[1],l(_,t.narg)?d=r(d,_,n):l(_,v.arrays)&&n.length>d+1?d=e(d,_,n):(z=n[d+1],void 0===z||z.match(/^-/)||l(_,v.bools)||l(_,v.counts)?/^(true|false)$/.test(z)?(a(_,z),d++):a(_,u(h(_,v))):(a(_,z),d++));else if(B.match(/^-.\..+=/))j=B.match(/^-([^=]+)=([\s\S]*)$/),a(j[1],j[2]);else if(B.match(/^-.\..+/))z=n[d+1],_=B.match(/^-(.\..+)/)[1],void 0===z||z.match(/^-/)||l(_,v.bools)||l(_,v.counts)?a(_,u(h(_,v))):(a(_,z),d++);else if(B.match(/^-[^-]+/)){O=B.slice(1,-1).split(""),k=!1;for(var $=0;$<O.length;$++){if(z=B.slice($+2),O[$+1]&&"="===O[$+1]){A=B.slice($+3),_=O[$],l(O[$],t.narg)?(n.splice(d+1,0,A),d=r(d,_,n)):l(_,v.arrays)&&n.length>d+1?(n.splice(d+1,0,A),d=e(d,_,n)):a(_,A),k=!0;break}if("-"!==z){if(/[A-Za-z]/.test(O[$])&&/-?\d+(\.\d*)?(e-?\d+)?$/.test(z)){a(O[$],z),k=!0;break}if(O[$+1]&&O[$+1].match(/\W/)){a(O[$],B.slice($+2)),k=!0;break}a(O[$],u(h(O[$],v)))}else a(O[$],z)}_=B.slice(-1)[0],k||"-"===_||(l(_,t.narg)?d=r(d,_,n):l(_,v.arrays)&&n.length>d+1?d=e(d,_,n):!n[d+1]||/^(-|--)[^-]/.test(n[d+1])||l(_,v.bools)||l(_,v.counts)?n[d+1]&&/true|false/.test(n[d+1])?(a(_,n[d+1]),d++):a(_,u(h(_,v))):(a(_,n[d+1]),d++))}else p._.push(v.strings._||!g(B)?B:Number(B))}return o(p),c(p,m,b),Object.keys(v.counts).forEach(function(n){a(n,b[n])}),E.forEach(function(n){p._.push(n)}),{argv:p,aliases:m,newAliases:y}};