function ArraySet(){this._array=[],this._set=hasNativeMap?new Map:Object.create(null)}var util=require("./util"),has=Object.prototype.hasOwnProperty,hasNativeMap="undefined"!=typeof Map;ArraySet.fromArray=function(t,r){for(var e=new ArraySet,a=0,i=t.length;a<i;a++)e.add(t[a],r);return e},ArraySet.prototype.size=function(){return hasNativeMap?this._set.size:Object.getOwnPropertyNames(this._set).length},ArraySet.prototype.add=function(t,r){var e=hasNativeMap?t:util.toSetString(t),a=hasNativeMap?this.has(t):has.call(this._set,e),i=this._array.length;a&&!r||this._array.push(t),a||(hasNativeMap?this._set.set(t,i):this._set[e]=i)},ArraySet.prototype.has=function(t){if(hasNativeMap)return this._set.has(t);var r=util.toSetString(t);return has.call(this._set,r)},ArraySet.prototype.indexOf=function(t){if(hasNativeMap){var r=this._set.get(t);if(r>=0)return r}else{var e=util.toSetString(t);if(has.call(this._set,e))return this._set[e]}throw new Error('"'+t+'" is not in the set.')},ArraySet.prototype.at=function(t){if(t>=0&&t<this._array.length)return this._array[t];throw new Error("No element indexed by "+t)},ArraySet.prototype.toArray=function(){return this._array.slice()},exports.ArraySet=ArraySet;