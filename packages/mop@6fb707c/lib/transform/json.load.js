montageDefine("6fb707c","lib/transform/json",{dependencies:["../file","../minify-javascript","../util"],factory:function(a,i,t){function o(a,i,t){if(i.minify)try{a.utf8=JSON.stringify(JSON.parse(a.utf8))}catch(o){if(!(o instanceof SyntaxError))throw o;i.out.warn("JSON parse error in "+r(a.location)+": "+o.message)}var f="montageDefine("+JSON.stringify(a["package"].hash)+","+JSON.stringify(a.relativeLocation)+",{exports: "+a.utf8+"})",c=new e({fs:i.fs,utf8:f,path:a.path+".load.js",location:a.location+".load.js",relativeLocation:a.relativeLocation+".load.js",buildLocation:a.buildLocation+".load.js","package":a["package"]});if(i.files[c.location]=c,a["package"].files[c.relativeLocation]=c,i.minify)try{c.utf8=n(c.utf8,c.path)}catch(o){i.out.warn("JSON parse error in "+c.path+": "+o.message)}t&&t()}var e=a("../file"),n=a("../minify-javascript"),r=a("../util").relativeToWorkingLocation;t.exports=o}});