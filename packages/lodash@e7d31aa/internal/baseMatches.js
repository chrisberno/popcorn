function baseMatches(t){var r=keys(t),e=r.length;if(!e)return constant(!0);if(1==e){var a=r[0],i=t[a];if(isStrictComparable(i))return function(t){return null!=t&&(t[a]===i&&(void 0!==i||a in toObject(t)))}}for(var n=Array(e),s=Array(e);e--;)i=t[r[e]],n[e]=i,s[e]=isStrictComparable(i);return function(t){return null!=t&&baseIsMatch(toObject(t),r,n,s)}}var baseIsMatch=require("./baseIsMatch"),constant=require("../utility/constant"),isStrictComparable=require("./isStrictComparable"),keys=require("../object/keys"),toObject=require("./toObject");module.exports=baseMatches;