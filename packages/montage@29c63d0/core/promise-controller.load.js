montageDefine("29c63d0","core/promise-controller",{dependencies:["./core","./promise","./core","./core","./core","./core"],factory:function(e,r,t){var l=e("./core").Montage,n=e("./promise").Promise;r.PromiseController=l.specialize({constructor:{value:function(){this.reset=null,this.addOwnPropertyChangeListener("promise",this),this.promise=null,this.defineBindings({"state == 'pending'":{"<-":"pending"},"state == 'fulfilled'":{"<-":"fulfilled"},"state == 'rejected'":{"<-":"rejected"},"progressState == 'determinate'":{"<-":"pending && determinate"},"progressState == 'indeterminate'":{"<-":"pending && determinate"},"progressState == 'fulfilled'":{"<-":"fulfilled"},"progressState == 'rejected'":{"<-":"rejected"}})}},promise:{value:null},state:{value:null},progressState:{value:null},pending:{value:null},fulfilled:{value:null},rejected:{value:null},determinate:{value:null},progress:{value:null},value:{value:null},error:{value:null},handlePromiseChange:{value:function(e){var r=this;e=n.resolve(e),r.reset&&r.reset();var t=!1;r.reset=function(){t=!0},r.value=null,r.error=null,r.progress=0,r.determinate=!1,r.pending=!0,r.fulfilled=!1,r.rejected=!1,e.then(function(e){t||(r.fulfilled=!0,r.value=e,r.progress=1)},function(e){t||(r.rejected=!0,r.error=e)},function(e){t||(r.progress=e,r.determinate="number"==typeof e)})}}},{objectDescriptorModuleId:e("./core")._objectDescriptorModuleIdDescriptor,objectDescriptor:e("./core")._objectDescriptorDescriptor,blueprintModuleId:e("./core")._blueprintModuleIdDescriptor,blueprint:e("./core")._blueprintDescriptor})}});