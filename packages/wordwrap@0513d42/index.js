var wordwrap=module.exports=function(r,e,t){"object"==typeof r&&(t=r,r=t.start,e=t.stop),"object"==typeof e&&(t=e,r=r||t.start,e=void 0),e||(e=r,r=0),t||(t={});var n=t.mode||"soft",o="hard"===n?/\b/:/(\S+\s+)/;return function(t){var a=t.toString().split(o).reduce(function(t,o){if("hard"===n)for(var a=0;a<o.length;a+=e-r)t.push(o.slice(a,a+e-r));else t.push(o);return t},[]);return a.reduce(function(t,n){if(""===n)return t;var o=n.replace(/\t/g,"    "),a=t.length-1;if(t[a].length+o.length>e)t[a]=t[a].replace(/\s+$/,""),o.split(/\n/).forEach(function(e){t.push(new Array(r+1).join(" ")+e.replace(/^\s+/,""))});else if(o.match(/\n/)){var i=o.split(/\n/);t[a]+=i.shift(),i.forEach(function(e){t.push(new Array(r+1).join(" ")+e.replace(/^\s+/,""))})}else t[a]+=o;return t},[new Array(r+1).join(" ")]).join("\n")}};wordwrap.soft=wordwrap,wordwrap.hard=function(r,e){return wordwrap(r,e,{mode:"hard"})};