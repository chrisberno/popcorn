function rebase(r,e,o){if(""===r)return r;if("#"===r)return r;var a=URL.parse(r);if(null!=a.protocol&&"file:"!==a.protocol)return r;if(a.root)return r;var i=URL.resolve(e.location,r);if(!o.files[i])return r;var t=o.files[i];return a.pathname=URL.relative(e.buildLocation,t.buildLocation),URL.format({pathname:URL.relative(e.buildLocation,t.buildLocation),query:a.query,search:a.search})}var URL=require("url2");module.exports=rebase;