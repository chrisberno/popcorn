function ownProp(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function alphasorti(e,r){return e.toLowerCase().localeCompare(r.toLowerCase())}function alphasort(e,r){return e.localeCompare(r)}function setupIgnores(e,r){e.ignore=r.ignore||[],Array.isArray(e.ignore)||(e.ignore=[e.ignore]),e.ignore.length&&(e.ignore=e.ignore.map(ignoreMap))}function ignoreMap(e){var r=null;if("/**"===e.slice(-3)){var t=e.replace(/(\/\*\*)+$/,"");r=new Minimatch(t,{dot:!0})}return{matcher:new Minimatch(e,{dot:!0}),gmatcher:r}}function setopts(e,r,t){if(t||(t={}),t.matchBase&&-1===r.indexOf("/")){if(t.noglobstar)throw new Error("base matching requires globstar");r="**/"+r}e.silent=!!t.silent,e.pattern=r,e.strict=t.strict!==!1,e.realpath=!!t.realpath,e.realpathCache=t.realpathCache||Object.create(null),e.follow=!!t.follow,e.dot=!!t.dot,e.mark=!!t.mark,e.nodir=!!t.nodir,e.nodir&&(e.mark=!0),e.sync=!!t.sync,e.nounique=!!t.nounique,e.nonull=!!t.nonull,e.nosort=!!t.nosort,e.nocase=!!t.nocase,e.stat=!!t.stat,e.noprocess=!!t.noprocess,e.absolute=!!t.absolute,e.maxLength=t.maxLength||1/0,e.cache=t.cache||Object.create(null),e.statCache=t.statCache||Object.create(null),e.symlinks=t.symlinks||Object.create(null),setupIgnores(e,t),e.changedCwd=!1;var o=process.cwd();ownProp(t,"cwd")?(e.cwd=path.resolve(t.cwd),e.changedCwd=e.cwd!==o):e.cwd=o,e.root=t.root||path.resolve(e.cwd,"/"),e.root=path.resolve(e.root),"win32"===process.platform&&(e.root=e.root.replace(/\\/g,"/")),e.cwdAbs=isAbsolute(e.cwd)?e.cwd:makeAbs(e,e.cwd),"win32"===process.platform&&(e.cwdAbs=e.cwdAbs.replace(/\\/g,"/")),e.nomount=!!t.nomount,t.nonegate=!0,t.nocomment=!0,e.minimatch=new Minimatch(r,t),e.options=e.minimatch.options}function finish(e){for(var r=e.nounique,t=r?[]:Object.create(null),o=0,n=e.matches.length;o<n;o++){var a=e.matches[o];if(a&&0!==Object.keys(a).length){var c=Object.keys(a);r?t.push.apply(t,c):c.forEach(function(e){t[e]=!0})}else if(e.nonull){var s=e.minimatch.globSet[o];r?t.push(s):t[s]=!0}}if(r||(t=Object.keys(t)),e.nosort||(t=t.sort(e.nocase?alphasorti:alphasort)),e.mark){for(var o=0;o<t.length;o++)t[o]=e._mark(t[o]);e.nodir&&(t=t.filter(function(r){var t=!/\/$/.test(r),o=e.cache[r]||e.cache[makeAbs(e,r)];return t&&o&&(t="DIR"!==o&&!Array.isArray(o)),t}))}e.ignore.length&&(t=t.filter(function(r){return!isIgnored(e,r)})),e.found=t}function mark(e,r){var t=makeAbs(e,r),o=e.cache[t],n=r;if(o){var a="DIR"===o||Array.isArray(o),c="/"===r.slice(-1);if(a&&!c?n+="/":!a&&c&&(n=n.slice(0,-1)),n!==r){var s=makeAbs(e,n);e.statCache[s]=e.statCache[t],e.cache[s]=e.cache[t]}}return n}function makeAbs(e,r){var t=r;return t="/"===r.charAt(0)?path.join(e.root,r):isAbsolute(r)||""===r?r:e.changedCwd?path.resolve(e.cwd,r):path.resolve(r),"win32"===process.platform&&(t=t.replace(/\\/g,"/")),t}function isIgnored(e,r){return!!e.ignore.length&&e.ignore.some(function(e){return e.matcher.match(r)||!(!e.gmatcher||!e.gmatcher.match(r))})}function childrenIgnored(e,r){return!!e.ignore.length&&e.ignore.some(function(e){return!(!e.gmatcher||!e.gmatcher.match(r))})}exports.alphasort=alphasort,exports.alphasorti=alphasorti,exports.setopts=setopts,exports.ownProp=ownProp,exports.makeAbs=makeAbs,exports.finish=finish,exports.mark=mark,exports.isIgnored=isIgnored,exports.childrenIgnored=childrenIgnored;var path=require("path"),minimatch=require("minimatch"),isAbsolute=require("path-is-absolute"),Minimatch=minimatch.Minimatch;