"use strict";function hrefInfo(e){var r=!(e.scheme||e.auth||e.host.full||e.port),n=r&&!e.path.absolute.string,t=n&&!e.resource,f=t&&!e.query.string.full.length,h=f&&!e.hash;e.extra.hrefInfo.minimumPathOnly=r,e.extra.hrefInfo.minimumResourceOnly=n,e.extra.hrefInfo.minimumQueryOnly=t,e.extra.hrefInfo.minimumHashOnly=f,e.extra.hrefInfo.empty=h}module.exports=hrefInfo;