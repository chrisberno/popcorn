montageDefine("1fdc4e5","test/clean",{dependencies:["tap","../semver.js"],factory:function(e,n,t){var l=e("tap"),a=l.test,c=e("../semver.js"),s=c.clean;a("\nclean tests",function(e){[["1.2.3","1.2.3"],[" 1.2.3 ","1.2.3"],[" 1.2.3-4 ","1.2.3-4"],[" 1.2.3-pre ","1.2.3-pre"],["  =v1.2.3   ","1.2.3"],["v1.2.3","1.2.3"],[" v1.2.3 ","1.2.3"],["\t1.2.3","1.2.3"],[">1.2.3",null],["~1.2.3",null],["<=1.2.3",null],["1.2.x",null]].forEach(function(n){var t=n[0],l=n[1],a="clean("+t+") = "+l;e.equal(s(t),l,a)}),e.end()})}});