montageDefine("e7d31aa","string/escape",{dependencies:["../internal/baseToString","../internal/escapeHtmlChar"],factory:function(e,n,a){function t(e){return e=r(e),e&&c.test(e)?e.replace(s,i):e}var r=e("../internal/baseToString"),i=e("../internal/escapeHtmlChar"),s=/[&<>"'`]/g,c=RegExp(s.source);a.exports=t}});