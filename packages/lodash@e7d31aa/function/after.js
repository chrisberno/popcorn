function after(t,i){if("function"!=typeof i){if("function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);var n=t;t=i,i=n}return t=nativeIsFinite(t=+t)?t:0,function(){if(--t<1)return i.apply(this,arguments)}}var FUNC_ERROR_TEXT="Expected a function",nativeIsFinite=global.isFinite;module.exports=after;