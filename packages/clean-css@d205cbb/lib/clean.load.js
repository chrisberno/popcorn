montageDefine("d205cbb","lib/clean",{dependencies:["./optimizer/level-0/optimize","./optimizer/level-1/optimize","./optimizer/level-2/optimize","./optimizer/validator","./options/compatibility","./options/fetch","./options/format","./options/inline","./options/inline-request","./options/inline-timeout","./options/optimization-level","./options/optimization-level","./options/rebase","./options/rebase-to","./reader/input-source-map-tracker","./reader/read-sources","./writer/simple","./writer/source-maps"],factory:function(e,i,t){function o(e,i,t,o){var a="function"!=typeof t?t:null,l="function"==typeof o?o:"function"==typeof t?t:null,p={stats:{efficiency:0,minifiedSize:0,originalSize:0,startedAt:Date.now(),timeSpent:0},cache:{specificity:{}},errors:[],inlinedStylesheets:[],inputSourceMapTracker:g(),localOnly:!l,options:i,source:null,sourcesContent:{},validator:u(i.compatibility),warnings:[]};return a&&p.inputSourceMapTracker.track(void 0,a),n(p.localOnly)(function(){return T(e,p,function(e){var i=p.options.sourceMap?k:M,t=r(e,p),o=i(t,p),n=s(o,p);return l?l(p.errors.length>0?p.errors:null,n):n})})}function n(e){return e?function(e){return e()}:process.nextTick}function r(e,i){var t;return t=l(e,i),t=b.One in i.options.level?p(e,i):e,t=b.Two in i.options.level?c(e,i,!0):t}function s(e,i){return e.stats=a(e.styles,i),e.errors=i.errors,e.inlinedStylesheets=i.inlinedStylesheets,e.warnings=i.warnings,e}function a(e,i){var t=Date.now(),o=t-i.stats.startedAt;return delete i.stats.startedAt,i.stats.timeSpent=o,i.stats.efficiency=1-e.length/i.stats.originalSize,i.stats.minifiedSize=e.length,i.stats}var l=e("./optimizer/level-0/optimize"),p=e("./optimizer/level-1/optimize"),c=e("./optimizer/level-2/optimize"),u=e("./optimizer/validator"),m=e("./options/compatibility"),f=e("./options/fetch"),v=e("./options/format").formatFrom,z=e("./options/inline"),d=e("./options/inline-request"),y=e("./options/inline-timeout"),b=e("./options/optimization-level").OptimizationLevel,h=e("./options/optimization-level").optimizationLevelFrom,S=e("./options/rebase"),w=e("./options/rebase-to"),g=e("./reader/input-source-map-tracker"),T=e("./reader/read-sources"),M=e("./writer/simple"),k=e("./writer/source-maps"),q=t.exports=function(e){e=e||{},this.options={compatibility:m(e.compatibility),fetch:f(e.fetch),format:v(e.format),inline:z(e.inline),inlineRequest:d(e.inlineRequest),inlineTimeout:y(e.inlineTimeout),level:h(e.level),rebase:S(e.rebase),rebaseTo:w(e.rebaseTo),returnPromise:!!e.returnPromise,sourceMap:!!e.sourceMap,sourceMapInlineSources:!!e.sourceMapInlineSources}};q.prototype.minify=function(e,i,t){var n=this.options;return n.returnPromise?new Promise(function(t,r){o(e,n,i,function(e,i){return e?r(e):t(i)})}):o(e,n,i,t)}}});