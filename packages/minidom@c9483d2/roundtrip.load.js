montageDefine("c9483d2","roundtrip",{dependencies:["./minidom","fs"],factory:function(o,e,n){var i=o("./minidom"),r=o("fs").readFileSync(process.argv[2]).toString("utf8"),c=i(r).outerHTML;console.log("---"),console.log(c)}});