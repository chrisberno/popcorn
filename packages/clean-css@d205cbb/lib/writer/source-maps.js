function store(e,t){var o="string"==typeof t,r=o?t:t[1],n=o?null:t[2],i=e.wrap;i(e,r),track(e,r,n),e.output.push(r)}function wrap(e,t){e.column+t.length>e.format.wrapAt&&(track(e,lineBreak,!1),e.output.push(lineBreak))}function track(e,t,o){var r=t.split("\n");o&&trackAllMappings(e,o),e.line+=r.length-1,e.column=r.length>1?0:e.column+r.pop().length}function trackAllMappings(e,t){for(var o=0,r=t.length;o<r;o++)trackMapping(e,t[o])}function trackMapping(e,t){var o=t[0],r=t[1],n=t[2],i=n,a=i||UNKNOWN_SOURCE;isWindows&&i&&!isRemoteResource(i)&&(a=i.replace(NIX_SEPARATOR_PATTERN,WINDOWS_SEPARATOR)),e.outputMap.addMapping({generated:{line:e.line,column:e.column},source:a,original:{line:o,column:r}}),e.inlineSources&&n in e.sourcesContent&&e.outputMap.setSourceContent(a,e.sourcesContent[n])}function serializeStylesAndSourceMap(e,t){var o={column:0,format:t.options.format,indentBy:0,indentWith:"",inlineSources:t.options.sourceMapInlineSources,line:1,output:[],outputMap:new SourceMapGenerator,sourcesContent:t.sourcesContent,spaceAfterClosingBrace:t.options.compatibility.properties.spaceAfterClosingBrace,store:store,wrap:t.options.format.wrapAt?wrap:function(){}};return all(o,e),{sourceMap:o.outputMap,styles:o.output.join("")}}var SourceMapGenerator=require("source-map").SourceMapGenerator,all=require("./helpers").all,lineBreak=require("os").EOL,isRemoteResource=require("../utils/is-remote-resource"),isWindows="win32"==process.platform,NIX_SEPARATOR_PATTERN=/\//g,UNKNOWN_SOURCE="$stdin",WINDOWS_SEPARATOR="\\";module.exports=serializeStylesAndSourceMap;