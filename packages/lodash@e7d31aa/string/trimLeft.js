function trimLeft(e,r,t){var i=e;return e=baseToString(e),e?(t?isIterateeCall(i,r,t):null==r)?e.slice(trimmedLeftIndex(e)):e.slice(charsLeftIndex(e,r+"")):e}var baseToString=require("../internal/baseToString"),charsLeftIndex=require("../internal/charsLeftIndex"),isIterateeCall=require("../internal/isIterateeCall"),trimmedLeftIndex=require("../internal/trimmedLeftIndex");module.exports=trimLeft;