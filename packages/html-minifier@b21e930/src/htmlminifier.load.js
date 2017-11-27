montageDefine("b21e930","src/htmlminifier",{dependencies:["clean-css","he","./htmlparser","relateurl","./tokenchain","uglify-js","./utils"],factory:function(e,t,r){"use strict";function n(e){return"string"!=typeof e?e:e.replace(/^[ \n\r\t\f]+/,"").replace(/[ \n\r\t\f]+$/,"")}function a(e){return e&&e.replace(/[ \n\r\t\f\xA0]+/g,function(e){return"\t"===e?"\t":e.replace(/(^|\xA0+)[^\xA0]+/g,"$1 ")})}function i(e,t,r,n,i){var s="",o="";return t.preserveLineBreaks&&(e=e.replace(/^[ \n\r\t\f]*?[\n\r][ \n\r\t\f]*/,function(){return s="\n",""}).replace(/[ \n\r\t\f]*?[\n\r][ \n\r\t\f]*$/,function(){return o="\n",""})),r&&(e=e.replace(/^[ \n\r\t\f\xA0]+/,function(e){var r=!s&&t.conservativeCollapse;return r&&"\t"===e?"\t":e.replace(/^[^\xA0]+/,"").replace(/(\xA0+)[^\xA0]+/g,"$1 ")||(r?" ":"")})),n&&(e=e.replace(/[ \n\r\t\f\xA0]+$/,function(e){var r=!o&&t.conservativeCollapse;return r&&"\t"===e?"\t":e.replace(/[^\xA0]+(\xA0+)/g," $1").replace(/[^\xA0]+$/,"")||(r?" ":"")})),i&&(e=a(e)),s+e+o}function s(e,t,r,n){var a=t&&!ne(t);a&&!n.collapseInlineTagWhitespace&&(a="/"===t.charAt(0)?!te(t.slice(1)):!re(t));var s=r&&!ne(r);return s&&!n.collapseInlineTagWhitespace&&(s="/"===r.charAt(0)?!re(r.slice(1)):!te(r)),i(e,n,a,s,t&&r)}function o(e){return/^\[if\s[^\]]+]|\[endif]$/.test(e)}function c(e,t){for(var r=0,n=t.ignoreCustomComments.length;r<n;r++)if(t.ignoreCustomComments[r].test(e))return!0;return!1}function u(e,t){var r=t.customEventAttributes;if(r){for(var n=r.length;n--;)if(r[n].test(e))return!0;return!1}return/^on[a-z]{3,}$/.test(e)}function l(e){return/^[^ \t\n\f\r"'`=<>]+$/.test(e)}function p(e,t){for(var r=e.length;r--;)if(e[r].name.toLowerCase()===t)return!0;return!1}function f(e,t,r,a){return r=r?n(r.toLowerCase()):"","script"===e&&"language"===t&&"javascript"===r||"form"===e&&"method"===t&&"get"===r||"input"===e&&"type"===t&&"text"===r||"script"===e&&"charset"===t&&!p(a,"src")||"a"===e&&"name"===t&&p(a,"id")||"area"===e&&"shape"===t&&"rect"===r}function m(e){return e=n(e.split(/;/,2)[0]).toLowerCase(),""===e||ae(e)}function d(e,t){if("script"!==e)return!1;for(var r=0,n=t.length;r<n;r++){var a=t[r].name.toLowerCase();if("type"===a)return m(t[r].value)}return!0}function h(e){return e=n(e).toLowerCase(),""===e||"text/css"===e}function g(e,t){if("style"!==e)return!1;for(var r=0,n=t.length;r<n;r++){var a=t[r].name.toLowerCase();if("type"===a)return h(t[r].value)}return!0}function v(e,t){return ie(e)||"draggable"===e&&!se(t)}function b(e,t){return/^(?:a|area|link|base)$/.test(t)&&"href"===e||"img"===t&&/^(?:src|longdesc|usemap)$/.test(e)||"object"===t&&/^(?:classid|codebase|data|usemap)$/.test(e)||"q"===t&&"cite"===e||"blockquote"===t&&"cite"===e||("ins"===t||"del"===t)&&"cite"===e||"form"===t&&"action"===e||"input"===t&&("src"===e||"usemap"===e)||"head"===t&&"profile"===e||"script"===t&&("src"===e||"for"===e)}function y(e,t){return/^(?:a|area|object|button)$/.test(t)&&"tabindex"===e||"input"===t&&("maxlength"===e||"tabindex"===e)||"select"===t&&("size"===e||"tabindex"===e)||"textarea"===t&&/^(?:rows|cols|tabindex)$/.test(e)||"colgroup"===t&&"span"===e||"col"===t&&"span"===e||("th"===t||"td"===t)&&("rowspan"===e||"colspan"===e)}function C(e,t,r){if("link"!==e)return!1;for(var n=0,a=t.length;n<a;n++)if("rel"===t[n].name&&t[n].value===r)return!0}function S(e,t,r){return"media"===r&&(C(e,t,"stylesheet")||g(e,t))}function x(e,t){return"srcset"===e&&oe(t)}function A(e,t,r,i,s){if(r&&u(t,i))return r=n(r).replace(/^javascript:\s*/i,""),i.minifyJS(r,!0);if("class"===t)return r=n(r),r=i.sortClassName?i.sortClassName(r):a(r);if(b(t,e))return r=n(r),C(e,s,"canonical")?r:i.minifyURLs(r);if(y(t,e))return n(r);if("style"===t)return r=n(r),r&&(/;$/.test(r)&&!/&#?[0-9a-zA-Z]+;$/.test(r)&&(r=r.replace(/\s*;$/,";")),r=k(i.minifyCSS($(r)))),r;if(x(t,e))r=n(r).split(/\s+,\s*|\s*,\s+/).map(function(e){var t=e,r="",n=e.match(/\s+([1-9][0-9]*w|[0-9]+(?:\.[0-9]+)?x)$/);if(n){t=t.slice(0,-n[0].length);var a=+n[1].slice(0,-1),s=n[1].slice(-1);1===a&&"x"===s||(r=" "+a+s)}return i.minifyURLs(t)+r}).join(", ");else if(w(e,s)&&"content"===t)r=r.replace(/\s+/g,"").replace(/[0-9]+\.[0-9]+/g,function(e){return(+e).toString()});else if(r&&i.customAttrCollapse&&i.customAttrCollapse.test(t))r=r.replace(/\n+|\r+|\s{2,}/g,"");else if("script"===e&&"type"===t)r=n(r.replace(/\s*;\s*/g,";"));else if(S(e,s,t))return r=n(r),j(i.minifyCSS(L(r)));return r}function w(e,t){if("meta"!==e)return!1;for(var r=0,n=t.length;r<n;r++)if("name"===t[r].name&&"viewport"===t[r].value)return!0}function $(e){return"*{"+e+"}"}function k(e){var t=e.match(/^\*\{([\s\S]*)\}$/);return t?t[1]:e}function L(e){return"@media "+e+"{a{top:0}}"}function j(e){var t=e.match(/^@media ([\s\S]*?)\s*{[\s\S]*}$/);return t?t[1]:e}function E(e,t){return t.processConditionalComments?e.replace(/^(\[if\s[^\]]+]>)([\s\S]*?)(<!\[endif])$/,function(e,r,n,a){return r+Z(n,t,!0)+a}):e}function O(e,t,r){for(var n=0,a=r.length;n<a;n++)if("type"===r[n].name.toLowerCase()&&t.processScripts.indexOf(r[n].value)>-1)return Z(e,t);return e}function T(e,t){switch(e){case"html":case"head":return!0;case"body":return!le(t);case"colgroup":return"col"===t;case"tbody":return"tr"===t}return!1}function W(e,t){switch(t){case"colgroup":return"colgroup"===e;case"tbody":return be(e)}return!1}function R(e,t){switch(e){case"html":case"head":case"body":case"colgroup":case"caption":return!0;case"li":case"optgroup":case"tr":return t===e;case"dt":case"dd":return pe(t);case"p":return fe(t);case"rb":case"rt":case"rp":return de(t);case"rtc":return he(t);case"option":return ge(t);case"thead":case"tbody":return ve(t);case"tfoot":return"tbody"===t;case"td":case"th":return ye(t)}return!1}function q(e,t,r,n){var a=!r||/^\s*$/.test(r);return!!a&&("function"==typeof n.removeEmptyAttributes?n.removeEmptyAttributes(t,e):"input"===e&&"value"===t||$e.test(t))}function J(e,t){for(var r=t.length-1;r>=0;r--)if(t[r].name===e)return!0;return!1}function U(e,t){switch(e){case"textarea":return!1;case"audio":case"script":case"video":if(J("src",t))return!1;break;case"iframe":if(J("src",t)||J("srcdoc",t))return!1;break;case"object":if(J("data",t))return!1;break;case"applet":if(J("code",t))return!1}return!0}function M(e){return!/^(?:script|style|pre|textarea)$/.test(e)}function N(e){return!/^(?:pre|textarea)$/.test(e)}function z(e,t,r,n){var a=n.caseSensitive?e.name:e.name.toLowerCase(),i=e.value;if(n.decodeEntities&&i&&(i=H(i,{isAttributeValue:!0})),!(n.removeRedundantAttributes&&f(r,a,i,t)||n.removeScriptTypeAttributes&&"script"===r&&"type"===a&&m(i)||n.removeStyleLinkTypeAttributes&&("style"===r||"link"===r)&&"type"===a&&h(i)||(i=A(r,a,i,n,t),n.removeEmptyAttributes&&q(r,a,i,n))))return n.decodeEntities&&i&&(i=i.replace(/&(#?[0-9a-zA-Z]+;)/g,"&amp;$1")),{attr:e,name:a,value:i}}function D(e,t,r,n,a){var i,s,o=e.name,c=e.value,u=e.attr,p=u.quote;if("undefined"==typeof c||r.removeAttributeQuotes&&!~c.indexOf(a)&&l(c))s=!n||t||/\/$/.test(c)?c+" ":c;else{if(!r.preventAttributesEscaping){if("undefined"==typeof r.quoteCharacter){var f=(c.match(/'/g)||[]).length,m=(c.match(/"/g)||[]).length;p=f<m?"'":'"'}else p="'"===r.quoteCharacter?"'":'"';c='"'===p?c.replace(/"/g,"&#34;"):c.replace(/'/g,"&#39;")}s=p+c+p,n||r.removeTagWhitespace||(s+=" ")}return"undefined"==typeof c||r.collapseBooleanAttributes&&v(o.toLowerCase(),c.toLowerCase())?(i=o,n||(i+=" ")):i=o+u.customAssign+s,u.customOpen+i+u.customClose}function F(e){return e}function B(e){if(["html5","includeAutoGeneratedTags"].forEach(function(t){t in e||(e[t]=!0)}),"function"!=typeof e.log&&(e.log=F),e.canCollapseWhitespace||(e.canCollapseWhitespace=M),e.canTrimWhitespace||(e.canTrimWhitespace=N),"ignoreCustomComments"in e||(e.ignoreCustomComments=[/^!/]),"ignoreCustomFragments"in e||(e.ignoreCustomFragments=[/<%[\s\S]*?%>/,/<\?[\s\S]*?\?>/]),e.minifyURLs||(e.minifyURLs=F),"function"!=typeof e.minifyURLs){var t=e.minifyURLs;"string"==typeof t?t={site:t}:"object"!=typeof t&&(t={}),e.minifyURLs=function(r){try{return V.relate(r,t)}catch(n){return e.log(n),r}}}if(e.minifyJS||(e.minifyJS=F),"function"!=typeof e.minifyJS){var r=e.minifyJS;"object"!=typeof r&&(r={}),(r.parse||(r.parse={})).bare_returns=!1,e.minifyJS=function(t,n){var a=t.match(/^\s*<!--.*/),i=a?t.slice(a[0].length).replace(/\n\s*-->\s*$/,""):t;r.parse.bare_returns=n;var s=K.minify(i,r);return s.error?(e.log(s.error),t):s.code.replace(/;$/,"")}}if(e.minifyCSS||(e.minifyCSS=F),"function"!=typeof e.minifyCSS){var n=e.minifyCSS;"object"!=typeof n&&(n={}),e.minifyCSS=function(t){t=t.replace(/(url\s*\(\s*)("|'|)(.*?)\2(\s*\))/gi,function(t,r,n,a,i){return r+n+e.minifyURLs(a)+n+i});try{return new _(n).minify(t).styles}catch(r){return e.log(r),t}}}}function G(e){var t;do t=Math.random().toString(36).replace(/^0\.[0-9]*/,"");while(~e.indexOf(t));return t}function I(e,t,r,a){function i(e){return e.map(function(e){return t.caseSensitive?e.name:e.name.toLowerCase()})}function s(e,t){return!t||e.indexOf(t)===-1}function o(e){return s(e,r)&&s(e,a)}function c(e){var r,a;new Q(e,{start:function(e,s){u&&(u[e]||(u[e]=new Y),u[e].add(i(s).filter(o)));for(var c=0,p=s.length;c<p;c++){var f=s[c];l&&"class"===(t.caseSensitive?f.name:f.name.toLowerCase())?l.add(n(f.value).split(/[ \t\n\f\r]+/).filter(o)):t.processScripts&&"type"===f.name.toLowerCase()&&(r=e,a=f.value)}},end:function(){r=""},chars:function(e){t.processScripts&&ke(r)&&t.processScripts.indexOf(a)>-1&&c(e)}})}var u=t.sortAttributes&&Object.create(null),l=t.sortClassName&&new Y,p=t.log;if(t.log=null,t.sortAttributes=!1,t.sortClassName=!1,c(Z(e,t)),t.log=p,u){var f=Object.create(null);for(var m in u)f[m]=u[m].createSorter();t.sortAttributes=function(e,t){var r=f[e];if(r){var n=Object.create(null),a=i(t);a.forEach(function(e,r){(n[e]||(n[e]=[])).push(t[r])}),r.sort(a).forEach(function(e,r){t[r]=n[e].shift()})}}}if(l){var d=l.createSorter();t.sortClassName=function(e){return d.sort(e.split(/[ \n\f\r]+/)).join(" ")}}}function Z(e,t,r){function n(e){return e.replace(x,function(e,t,r){var n=_[+r];return n[1]+S+r+n[2]})}function u(e,r){return t.canCollapseWhitespace(e,r,M)}function l(e,r){return t.canTrimWhitespace(e,r,N)}function p(){for(var e=A.length-1;e>0&&!/^<[^\/!]/.test(A[e]);)e--;A.length=Math.max(0,e)}function f(){for(var e=A.length-1;e>0&&!/^<\//.test(A[e]);)e--;A.length=Math.max(0,e)}function m(e,r){for(var n=null;e>=0&&l(n);e--){var a=A[e],i=a.match(/^<\/([\w:-]+)>$/);if(i)n=i[1];else if(/>$/.test(a)||(A[e]=s(a,null,r,t)))break}}function h(e){var t=A.length-1;if(A.length>1){var r=A[A.length-1];/^(?:<!|$)/.test(r)&&r.indexOf(C)===-1&&t--}m(t,e)}t=t||{};var v=[];B(t),t.collapseWhitespace&&(e=i(e,t,!0,!0));var b,y,C,S,x,A=[],w="",$="",k=[],L=[],j=[],q="",J="",F=Date.now(),Z=[],_=[];e=e.replace(/<!-- htmlmin:ignore -->([\s\S]*?)<!-- htmlmin:ignore -->/g,function(r,n){if(!C){C=G(e);var a=new RegExp("^"+C+"([0-9]+)$");t.ignoreCustomComments?t.ignoreCustomComments.push(a):t.ignoreCustomComments=[a]}var i="<!--"+C+Z.length+"-->";return Z.push(n),i});var V=t.ignoreCustomFragments.map(function(e){return e.source});if(V.length){var Y=new RegExp("\\s*(?:"+V.join("|")+")+\\s*","g");e=e.replace(Y,function(r){if(!S){S=G(e),x=new RegExp("(\\s*)"+S+"([0-9]+)(\\s*)","g");var a=t.minifyCSS;a&&(t.minifyCSS=function(e){return a(n(e))});var i=t.minifyJS;i&&(t.minifyJS=function(e,t){return i(n(e),t)})}var s=S+_.length;return _.push(/^(\s*)[\s\S]*?(\s*)$/.exec(r)),"\t"+s+"\t"})}(t.sortAttributes&&"function"!=typeof t.sortAttributes||t.sortClassName&&"function"!=typeof t.sortClassName)&&I(e,t,C,S),new Q(e,{partialMarkup:r,html5:t.html5,start:function(e,r,n,a,i){var s=e.toLowerCase();if("svg"===s){v.push(t);var o={};for(var c in t)o[c]=t[c];o.keepClosingSlash=!0,o.caseSensitive=!0,t=o}e=t.caseSensitive?e:s,$=e,b=e,re(e)||(w=""),y=!1,k=r;var m=t.removeOptionalTags;if(m){var d=we(e);d&&T(q,e)&&p(),q="",d&&R(J,e)&&(f(),m=!W(J,e)),J=""}t.collapseWhitespace&&(L.length||h(e),l(e,r)&&!L.length||L.push(e),u(e,r)&&!j.length||j.push(e));var g="<"+e,C=a&&t.keepClosingSlash;A.push(g),t.sortAttributes&&t.sortAttributes(e,r);for(var x=[],E=r.length,O=!0;--E>=0;){var U=z(r[E],r,e,t);U&&(x.unshift(D(U,C,t,O,S)),O=!1)}x.length>0?(A.push(" "),A.push.apply(A,x)):m&&ce(e)&&(q=e),A.push(A.pop()+(C?"/":"")+">"),i&&!t.includeAutoGeneratedTags&&(p(),q="")},end:function(e,r,n){var a=e.toLowerCase();"svg"===a&&(t=v.pop()),e=t.caseSensitive?e:a,t.collapseWhitespace&&(L.length?e===L[L.length-1]&&L.pop():h("/"+e),j.length&&e===j[j.length-1]&&j.pop());var i=!1;e===$&&($="",i=!y),t.removeOptionalTags&&(i&&Ce(q)&&p(),q="",!we(e)||!J||Ae(J)||"p"===J&&me(e)||f(),J=ue(e)?e:""),t.removeEmptyElements&&i&&U(e,r)?(p(),q="",J=""):(n&&!t.includeAutoGeneratedTags?J="":A.push("</"+e+">"),b="/"+e,te(e)?i&&(w+="|"):w="")},chars:function(e,r,n){if(r=""===r?"comment":r,n=""===n?"comment":n,t.decodeEntities&&e&&!ke($)&&(e=H(e)),t.collapseWhitespace){if(!L.length){if("comment"===r){var a=A[A.length-1];if(a.indexOf(C)===-1&&(a||(r=b),A.length>1&&(!a||!t.conservativeCollapse&&/ $/.test(w)))){var o=A.length-2;A[o]=A[o].replace(/\s+$/,function(t){return e=t+e,""})}}if(r)if("/nobr"===r||"wbr"===r){if(/^\s/.test(e)){for(var c=A.length-1;c>0&&0!==A[c].lastIndexOf("<"+r);)c--;m(c-1,"br")}}else re("/"===r.charAt(0)?r.slice(1):r)&&(e=i(e,t,/(?:^|\s)$/.test(w)));e=r||n?s(e,r,n,t):i(e,t,!0,!0),!e&&/\s$/.test(w)&&r&&"/"===r.charAt(0)&&m(A.length-1,n)}j.length||"html"===n||r&&n||(e=i(e,t,!1,!1,!0))}t.processScripts&&ke($)&&(e=O(e,t,k)),d($,k)&&(e=t.minifyJS(e)),g($,k)&&(e=t.minifyCSS(e)),t.removeOptionalTags&&e&&(("html"===q||"body"===q&&!/^\s/.test(e))&&p(),q="",(Se(J)||xe(J)&&!/^\s/.test(e))&&f(),J=""),b=/^\s*$/.test(e)?r:"comment",t.decodeEntities&&e&&!ke($)&&(e=e.replace(/&(#?[0-9a-zA-Z]+;)/g,"&amp$1").replace(/</g,"&lt;")),w+=e,e&&(y=!0),A.push(e)},comment:function(e,r){var n=r?"<!":"<!--",a=r?">":"-->";e=o(e)?n+E(e,t)+a:t.removeComments?c(e,t)?"<!--"+e+"-->":"":n+e+a,t.removeOptionalTags&&e&&(q="",J=""),A.push(e)},doctype:function(e){A.push(t.useShortDoctype?"<!DOCTYPE html>":a(e))},customAttrAssign:t.customAttrAssign,customAttrSurround:t.customAttrSurround}),t.removeOptionalTags&&(Ce(q)&&p(),J&&!Ae(J)&&f()),t.collapseWhitespace&&h("br");var K=P(A,t);return x&&(K=K.replace(x,function(e,r,n,a){var s=_[+n][0];return t.collapseWhitespace?("\t"!==r&&(s=r+s),"\t"!==a&&(s+=a),i(s,{preserveLineBreaks:t.preserveLineBreaks,conservativeCollapse:!t.trimCustomFragments},/^[ \n\r\t\f]/.test(s),/[ \n\r\t\f]$/.test(s))):s})),C&&(K=K.replace(new RegExp("<!--"+C+"([0-9]+)-->","g"),function(e,t){return Z[+t]})),t.log("minified in: "+(Date.now()-F)+"ms"),K}function P(e,t){var r,n=t.maxLineLength;if(n){for(var a,s=[],o="",c=0,u=e.length;c<u;c++)a=e[c],o.length+a.length<n?o+=a:(s.push(o.replace(/^\n/,"")),o=a);s.push(o),r=s.join("\n")}else r=e.join("");return t.collapseWhitespace?i(r,t,!0,!0):r}var _=e("clean-css"),H=e("he").decode,Q=e("./htmlparser").HTMLParser,V=e("relateurl"),Y=e("./tokenchain"),K=e("uglify-js"),X=e("./utils"),ee=X.createMapFromString,te=ee("a,abbr,acronym,b,bdi,bdo,big,button,cite,code,del,dfn,em,font,i,ins,kbd,mark,math,nobr,q,rt,rp,s,samp,small,span,strike,strong,sub,sup,svg,time,tt,u,var"),re=ee("a,abbr,acronym,b,big,del,em,font,i,ins,kbd,mark,nobr,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"),ne=ee("comment,img,input,wbr"),ae=X.createMap(["text/javascript","text/ecmascript","text/jscript","application/javascript","application/x-javascript","application/ecmascript"]),ie=ee("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),se=ee("true,false"),oe=ee("img,source"),ce=ee("html,head,body,colgroup,tbody"),ue=ee("html,head,body,li,dt,dd,p,rb,rt,rtc,rp,optgroup,option,colgroup,caption,thead,tbody,tfoot,tr,td,th"),le=ee("meta,link,script,style,template,noscript"),pe=ee("dt,dd"),fe=ee("address,article,aside,blockquote,details,div,dl,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,hr,main,menu,nav,ol,p,pre,section,table,ul"),me=ee("a,audio,del,ins,map,noscript,video"),de=ee("rb,rt,rtc,rp"),he=ee("rb,rtc,rp"),ge=ee("option,optgroup"),ve=ee("tbody,tfoot"),be=ee("thead,tbody,tfoot"),ye=ee("td,th"),Ce=ee("html,head,body"),Se=ee("html,body"),xe=ee("head,colgroup,caption"),Ae=ee("dt,thead"),we=ee("a,abbr,acronym,address,applet,area,article,aside,audio,b,base,basefont,bdi,bdo,bgsound,big,blink,blockquote,body,br,button,canvas,caption,center,cite,code,col,colgroup,command,content,data,datalist,dd,del,details,dfn,dialog,dir,div,dl,dt,element,em,embed,fieldset,figcaption,figure,font,footer,form,frame,frameset,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,i,iframe,image,img,input,ins,isindex,kbd,keygen,label,legend,li,link,listing,main,map,mark,marquee,menu,menuitem,meta,meter,multicol,nav,nobr,noembed,noframes,noscript,object,ol,optgroup,option,output,p,param,picture,plaintext,pre,progress,q,rp,rt,rtc,ruby,s,samp,script,section,select,shadow,small,source,spacer,span,strike,strong,style,sub,summary,sup,table,tbody,td,template,textarea,tfoot,th,thead,time,title,tr,track,tt,u,ul,var,video,wbr,xmp"),$e=new RegExp("^(?:class|id|style|title|lang|dir|on(?:focus|blur|change|click|dblclick|mouse(?:down|up|over|move|out)|key(?:press|down|up)))$"),ke=ee("script,style");t.minify=function(e,t){return Z(e,t)}}});