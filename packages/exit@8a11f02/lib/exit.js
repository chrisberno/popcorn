"use strict";module.exports=function(t,e){function o(){s===e.length&&process.exit(t)}e||(e=[process.stdout,process.stderr]);var s=0;e.forEach(function(t){0===t.bufferSize?s++:t.write("","utf-8",function(){s++,o()}),t.write=function(){}}),o(),process.on("exit",function(){process.exit(t)})};