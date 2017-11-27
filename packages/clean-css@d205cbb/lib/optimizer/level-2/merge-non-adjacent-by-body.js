function unsafeSelector(e){return/\.|\*| :/.test(e)}function isBemElement(e){var i=serializeRules(e[1]);return i.indexOf("__")>-1||i.indexOf("--")>-1}function withoutModifier(e){return e.replace(/--[^ ,>\+~:]+/g,"")}function removeAnyUnsafeElements(e,i){var r=withoutModifier(serializeRules(e[1]));for(var t in i){var l=i[t],o=withoutModifier(serializeRules(l[1]));(o.indexOf(r)>-1||r.indexOf(o)>-1)&&delete i[t]}}function mergeNonAdjacentByBody(e,i){for(var r=i.options,t=r.level[OptimizationLevel.Two].mergeSemantically,l=r.compatibility.selectors.adjacentSpace,o=r.level[OptimizationLevel.One].selectorsSortingMethod,s=r.compatibility.selectors.mergeablePseudoClasses,n=r.compatibility.selectors.mergeablePseudoElements,a=r.compatibility.selectors.multiplePseudoMerging,u={},c=e.length-1;c>=0;c--){var m=e[c];if(m[0]==Token.RULE){m[2].length>0&&!t&&unsafeSelector(serializeRules(m[1]))&&(u={}),m[2].length>0&&t&&isBemElement(m)&&removeAnyUnsafeElements(m,u);var d=serializeBody(m[2]),f=u[d];f&&isMergeable(serializeRules(m[1]),s,n,a)&&isMergeable(serializeRules(f[1]),s,n,a)&&(m[2].length>0?(m[1]=tidyRules(f[1].concat(m[1]),!1,l,!1,i.warnings),m[1]=m[1].length>1?sortSelectors(m[1],o):m[1]):m[1]=f[1].concat(m[1]),f[2]=[],u[d]=null),u[serializeBody(m[2])]=m}}}var isMergeable=require("./is-mergeable"),sortSelectors=require("../level-1/sort-selectors"),tidyRules=require("../level-1/tidy-rules"),OptimizationLevel=require("../../options/optimization-level").OptimizationLevel,serializeBody=require("../../writer/one-time").body,serializeRules=require("../../writer/one-time").rules,Token=require("../../tokenizer/token");module.exports=mergeNonAdjacentByBody;