function _sed(e,r,o,n){e=common.parseOptions(e,{i:"inplace"}),"string"==typeof o||"function"==typeof o?o=o:"number"==typeof o?o=o.toString():common.error("invalid replacement string"),n||common.error("no file given"),fs.existsSync(n)||common.error("no such file or directory: "+n);var i=fs.readFileSync(n,"utf8").replace(r,o);return e.inplace&&fs.writeFileSync(n,i,"utf8"),common.ShellString(i)}var common=require("./common"),fs=require("fs");module.exports=_sed;