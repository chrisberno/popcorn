montageDefine("514a8a9","lib/parse/port",{dependencies:[],factory:function(t,r,e){"use strict";function o(t,r){var e=-1;for(var o in r.defaultPorts)if(o===t.scheme&&r.defaultPorts.hasOwnProperty(o)){e=r.defaultPorts[o];break}e>-1&&(e=e.toString(),null===t.port&&(t.port=e),t.extra.portIsDefault=t.port===e)}e.exports=o}});