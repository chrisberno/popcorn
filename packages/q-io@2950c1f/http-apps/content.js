var Q=require("q"),Negotiate=require("./negotiate"),QS=require("qs"),URL=require("url2");exports.Content=function(t,e,n){return function(){return exports.content(t,e,n)}},exports.content=exports.ok=function(t,e,n){return n=n||200,t=t||"","string"==typeof t&&(t=[t]),e=e||"text/plain",{status:n,headers:{"content-type":e},body:t}},exports.ContentRequest=function(t){return function(e,n){return Q.when(e.body.read(),function(r){return t(r,e,n)})}},exports.Inspect=function(t){return Negotiate.Method({GET:function(e,n){return Q.when(t(e,n),function(t){return{status:200,headers:{"content-type":"text/plain"},body:[inspect(t)]}})}})},exports.ParseQuery=function(t){return function(e,n){return e.query=QS.parse(URL.parse(e.url).query||""),t(e,n)}};