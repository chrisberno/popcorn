function baseWhile(e,a,i,l){for(var r=e.length,s=l?r:-1;(l?s--:++s<r)&&a(e[s],s,e););return i?baseSlice(e,l?0:s,l?s+1:r):baseSlice(e,l?s+1:0,l?r:s)}var baseSlice=require("./baseSlice");module.exports=baseWhile;