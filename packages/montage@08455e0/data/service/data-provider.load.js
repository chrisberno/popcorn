montageDefine("08455e0","data/service/data-provider",{dependencies:["core/core","core/promise"],factory:function(e,r,a){var o=e("core/core").Montage,i=e("core/promise").Promise;r.DataProvider=o.specialize({data:{value:void 0},requestData:{value:function(e,r){return i.resolve(this.data)}}})}});