montageDefine("6fb707c","lib/minify-javascript",{dependencies:["uglify-js","./processes"],factory:function(n,e,i){function c(n){return f.minify(n,{fromString:!0,warnings:!1}).code}var f=n("uglify-js"),s=n("./processes");f.AST_Node.warn_function=null,i.exports=c,c.async=function(n,e){s.execute("uglify",n,e)}}});