function createAggregator(r,a){return function(e,c,s){var t=a?a():{};if(c=baseCallback(c,s,3),isArray(e))for(var i=-1,l=e.length;++i<l;){var n=e[i];r(t,n,c(n,i,e),e)}else baseEach(e,function(a,e,s){r(t,a,c(a,e,s),s)});return t}}var baseCallback=require("./baseCallback"),baseEach=require("./baseEach"),isArray=require("../lang/isArray");module.exports=createAggregator;