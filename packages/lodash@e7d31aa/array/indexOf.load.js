montageDefine("e7d31aa","array/indexOf",{dependencies:["../internal/baseIndexOf","../internal/binaryIndex"],factory:function(e,n,r){function a(e,n,r){var a=e?e.length:0;if(!a)return-1;if("number"==typeof r)r=r<0?f(a+r,0):r;else if(r){var d=i(e,n),x=e[d];return(n===n?n===x:x!==x)?d:-1}return t(e,n,r||0)}var t=e("../internal/baseIndexOf"),i=e("../internal/binaryIndex"),f=Math.max;r.exports=a}});