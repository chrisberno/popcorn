montageDefine("6fb707c","lib/process",{dependencies:["uglify-js"],factory:function(e,n,r){var i=e("uglify-js"),s={uglify:function(e){try{return i.minify(e,{fromString:!0,warnings:!1}).code}catch(n){throw n}}};process.on("message",function(e){try{process.send({id:e.id,result:s[e.command](e.data)})}catch(n){process.send({id:e.id,error:n})}})}});