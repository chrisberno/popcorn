function arrayReduceRight(r,e,t,a){var u=r.length;for(a&&u&&(t=r[--u]);u--;)t=e(t,r[u],u,r);return t}module.exports=arrayReduceRight;