montageDefine("29c63d0","core/serialization/deserializer/self-deserializer",{dependencies:["../../core","../../deprecate"],factory:function(e,t,i){var r=e("../../core").Montage,s=e("../../deprecate"),o=r.specialize({_object:{value:null},_objectDescriptor:{value:null},_context:{value:null},_unitNames:{value:null},_objectUnitNames:{value:null},create:{value:function(){return new this}},initWithObjectAndObjectDescriptorAndContextAndUnitNames:{value:function(e,t,i,r){return this._object=e,this._objectDescriptor=t,this._context=i,this._unitNames=r,this}},getProperty:{value:function(e){return this._objectDescriptor.values?this._objectDescriptor.values[e]:this._objectDescriptor.properties?this._objectDescriptor.properties[e]:void 0}},getType:{value:function(){return"prototype"in this._objectDescriptor?"prototype":"object"in this._objectDescriptor?"object":void 0}},getTypeValue:{value:function(){return this._objectDescriptor.prototype||this._objectDescriptor.object}},getObjectByLabel:{value:function(e){return this._context.getObject(e)}},deserializeProperties:{value:s.deprecateMethod(void 0,function(e){return this.deserializeValues(e)},"deserializeProperties","deserializeValues")},deserializeValues:{value:function(e){var t,i=this._object,s=this._objectDescriptor.values||this._objectDescriptor.properties;if(s){e||(e=r.getSerializablePropertyNames(i));for(var o=0,c=e.length;o<c;o++)t=e[o],i[t]=s[t]}}},deserializeUnit:{value:function(e){var t=this._objectUnitNames;t?t.indexOf(e)===-1&&t.push(e):(t=this._objectUnitNames=[e],this._context.setUnitsToDeserialize(this._object,this._objectDescriptor,t))}},deserializeUnits:{value:function(){var e=this._objectUnitNames;if(e)for(var t,i=0;t=e[i];i++)e.indexOf(t)===-1&&e.push(t);else e=this._objectUnitNames=this._unitNames,this._context.setUnitsToDeserialize(this._object,this._objectDescriptor,e)}}});t.SelfDeserializer=o}});