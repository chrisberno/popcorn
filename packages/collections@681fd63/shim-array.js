"use strict";function define(e,t){Object.defineProperty(Array.prototype,e,{value:t,writable:!0,configurable:!0,enumerable:!1})}function ArrayIterator(e,t,r){this.array=e,this.start=null==t?0:t,this.end=r}var Function=require("./shim-function"),GenericCollection=require("./generic-collection"),GenericOrder=require("./generic-order"),WeakMap=require("./weak-map");module.exports=Array;var array_splice=Array.prototype.splice,array_slice=Array.prototype.slice;Array.empty=[],Object.freeze&&Object.freeze(Array.empty),Array.from=function(e){var t=[];return t.addEach(e),t},Array.unzip=function(e){for(var t=[],r=1/0,i=0;i<e.length;i++){var n=e[i];e[i]=n.toArray(),n.length<r&&(r=n.length)}for(var i=0;i<e.length;i++)for(var n=e[i],o=0;o<n.length;o++)o<r&&o in n&&(t[o]=t[o]||[],t[o][i]=n[o]);return t},define("addEach",GenericCollection.prototype.addEach),define("deleteEach",GenericCollection.prototype.deleteEach),define("toArray",GenericCollection.prototype.toArray),define("toObject",GenericCollection.prototype.toObject),define("all",GenericCollection.prototype.all),define("any",GenericCollection.prototype.any),define("min",GenericCollection.prototype.min),define("max",GenericCollection.prototype.max),define("sum",GenericCollection.prototype.sum),define("average",GenericCollection.prototype.average),define("only",GenericCollection.prototype.only),define("flatten",GenericCollection.prototype.flatten),define("zip",GenericCollection.prototype.zip),define("enumerate",GenericCollection.prototype.enumerate),define("group",GenericCollection.prototype.group),define("sorted",GenericCollection.prototype.sorted),define("reversed",GenericCollection.prototype.reversed),define("constructClone",function(e){var t=new this.constructor;return t.addEach(e),t}),define("has",function(e,t){return this.find(e,t)!==-1}),define("get",function(e,t){if(+e!==e)throw new Error("Indicies must be numbers");return!e in this?t:this[e]}),define("set",function(e,t){return this[e]=t,!0}),define("add",function(e){return this.push(e),!0}),define("delete",function(e,t){var r=this.find(e,t);return r!==-1&&(this.spliceOne(r),!0)}),define("deleteAll",function(e,t){t=t||this.contentEquals||Object.equals;for(var r=0,i=0;i<this.length;)t(e,this[i])?(this.swap(i,1),r++):i++;return r}),define("find",function(e,t){t=t||this.contentEquals||Object.equals;for(var r=0;r<this.length;r++)if(r in this&&t(e,this[r]))return r;return-1}),define("findLast",function(e,t){t=t||this.contentEquals||Object.equals;var r=this.length;do if(r--,r in this&&t(this[r],e))return r;while(r>0);return-1}),define("swap",function(e,t,r){var i,n,o,a,l;if(e>this.length&&(this.length=e),"undefined"!=typeof r){if(i=[e,t],Array.isArray(r)||(r=array_slice.call(r)),o=0,n=r.length,n<1e3){for(o;o<n;o++)i[o+2]=r[o];return array_splice.apply(this,i)}for(l=array_splice.apply(this,i),o;o<n;){for(i=[e+o,0],a=2;a<1002&&o<n;a++,o++)i[a]=r[o];array_splice.apply(this,i)}return l}return"undefined"!=typeof t?array_splice.call(this,e,t):"undefined"!=typeof e?array_splice.call(this,e):[]}),define("peek",function(){return this[0]}),define("poke",function(e){this.length>0&&(this[0]=e)}),define("peekBack",function(){if(this.length>0)return this[this.length-1]}),define("pokeBack",function(e){this.length>0&&(this[this.length-1]=e)}),define("one",function(){for(var e in this)if(Object.owns(this,e))return this[e]}),Array.prototype.clear||define("clear",function(){return this.length=0,this}),define("compare",function(e,t){t=t||Object.compare;var r,i,n,o,a;if(this===e)return 0;if(!e||!Array.isArray(e))return GenericOrder.prototype.compare.call(this,e,t);for(i=this.length<e.length?this.length:e.length,r=0;r<i;r++)if(r in this){if(!(r in e))return-1;if(n=this[r],o=e[r],a=t(n,o))return a}else if(r in e)return 1;return this.length-e.length}),define("equals",function(e,t){t=t||Object.equals;var r,i,n=0,o=this.length;if(this===e)return!0;if(!e||!Array.isArray(e))return GenericOrder.prototype.equals.call(this,e);if(o!==e.length)return!1;for(;n<o;++n)if(n in this){if(!(n in e))return!1;if(r=this[n],i=e[n],!t(r,i))return!1}else if(n in e)return!1;return!0}),define("clone",function(e,t){if(null==e)e=1/0;else if(0===e)return this;if(t=t||new WeakMap,t.has(this))return t.get(this);var r=new Array(this.length);t.set(this,r);for(var i in this)r[i]=Object.clone(this[i],e-1,t);return r}),define("iterate",function(e,t){return new ArrayIterator(this,e,t)}),void 0===Array.prototype.spliceOne&&define("spliceOne",function(e,t){var r=this.length;if(r)if(1===arguments.length){for(;e<r;)this[e]=this[e+1],e++;this.length--}else this[e]=t}),define("Iterator",ArrayIterator),ArrayIterator.prototype.__iterationObject=null,Object.defineProperty(ArrayIterator.prototype,"_iterationObject",{get:function(){return this.__iterationObject||(this.__iterationObject={done:!1,value:null})}}),ArrayIterator.prototype.next=function(){return this.start===(null==this.end?this.array.length:this.end)?(this._iterationObject.done=!0,this._iterationObject.value=void 0):this._iterationObject.value=this.array[this.start++],this._iterationObject};