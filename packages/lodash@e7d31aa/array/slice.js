function slice(e,l,r){var a=e?e.length:0;return a?(r&&"number"!=typeof r&&isIterateeCall(e,l,r)&&(l=0,r=a),baseSlice(e,l,r)):[]}var baseSlice=require("../internal/baseSlice"),isIterateeCall=require("../internal/isIterateeCall");module.exports=slice;