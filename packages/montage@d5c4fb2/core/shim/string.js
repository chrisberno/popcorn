String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(t){return this.length>=t.length&&this.slice(0,t.length)===t},writable:!0,configurable:!0}),String.prototype.endsWith||Object.defineProperty(String.prototype,"endsWith",{value:function(t){var e=this.length,r=t.length;return e>=r&&this.indexOf(t,e-r)!==-1},writable:!0,configurable:!0});