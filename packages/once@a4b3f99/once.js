function once(e){var r=function(){return r.called?r.value:(r.called=!0,r.value=e.apply(this,arguments))};return r.called=!1,r}function onceStrict(e){var r=function(){if(r.called)throw new Error(r.onceError);return r.called=!0,r.value=e.apply(this,arguments)},n=e.name||"Function wrapped with `once`";return r.onceError=n+" shouldn't be called more than once",r.called=!1,r}var wrappy=require("wrappy");module.exports=wrappy(once),module.exports.strict=wrappy(onceStrict),once.proto=once(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return once(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return onceStrict(this)},configurable:!0})});