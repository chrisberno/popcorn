montageDefine("e7d31aa","internal/createFlow",{dependencies:["./LodashWrapper","./getData","./getFuncName","../lang/isArray","./isLaziable"],factory:function(r,a,e){function n(r){return function(){var a=arguments.length;if(!a)return function(){return arguments[0]};for(var e,n=r?a:-1,f=0,c=Array(a);r?n--:++n<a;){var g=c[f++]=arguments[n];if("function"!=typeof g)throw new TypeError(l);var s=e?"":o(g);e="wrapper"==s?new t([]):e}for(n=e?-1:a;++n<a;){g=c[n],s=o(g);var h="wrapper"==s?i(g):null;e=h&&u(h[0])?e[o(h[0])].apply(e,h[3]):1==g.length&&u(g)?e[s]():e.thru(g)}return function(){var r=arguments;if(e&&1==r.length&&p(r[0]))return e.plant(r[0]).value();for(var n=0,t=c[n].apply(this,r);++n<a;)t=c[n].call(this,t);return t}}}var t=r("./LodashWrapper"),i=r("./getData"),o=r("./getFuncName"),p=r("../lang/isArray"),u=r("./isLaziable"),l="Expected a function";e.exports=n}});