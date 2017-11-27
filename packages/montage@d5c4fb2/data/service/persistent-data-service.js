var RawDataService=require("data/service/raw-data-service").RawDataService,DataStream=require("data/service/data-stream").DataStream,DataOperation=require("data/service/data-operation").DataOperation,Promise=require("core/promise").Promise,uuid=require("core/uuid"),DataOrdering=require("data/model/data-ordering").DataOrdering,DESCENDING=DataOrdering.DESCENDING,evaluate=require("frb/evaluate"),Map=require("collections/map"),PersistentDataService,OfflineService;exports.PersistentDataService=PersistentDataService=RawDataService.specialize({constructor:{value:function(){RawDataService.call(this)}},deserializeSelf:{value:function(e){this["super"](e);var t;t=e.getProperty("persistingObjectDescriptorNames"),t&&(this.persistingObjectDescriptorNames=t)}},serializeSelf:{value:function(e){this["super"](e),this.persistingObjectDescriptorNames&&e.setProperty("persistingObjectDescriptorNames",this.persistingObjectDescriptorNames)}},_storage:{value:void 0},storage:{get:function(){return this._storage||(this._storage=Promise.reject(new Error("Needs to be implemented by sub classes")))}},name:{value:void 0},operationTableName:{value:"Operation"},typePropertyName:{value:"type"},lastFetchedPropertyName:{value:"lastFetched"},lastModifiedPropertyName:{value:"lastModified"},operationPropertyName:{value:"operation"},operationCreateName:{value:"create"},operationUpdateName:{value:"update"},operationDeleteName:{value:"delete"},changesPropertyName:{value:"changes"},dataIDPropertyName:{value:"dataID"},contextPropertyName:{value:"context"},offlineOperations:{get:function(){}},clearOfflineOperations:{value:function(e){}},mapToRawSelector:{value:function(e,t){}},_tableByName:{value:void 0},tableNamed:{value:function(e){var t;if(this._tableByName||(this._tableByName=new Map),t=this._tableByName.get(e),!t&&(t=this._storage[e],!t))for(var r,a=this._storage.tables,i=0;r=a[i];i++)if(r.name===e){this._tableByName.set(e,t=r);break}return t}},_operationTable:{value:void 0},operationTable:{get:function(){return this._operationTable||(this._operationTable=this.tableNamed(this.operationTableName)),this._operationTable}},_persistingObjectDescriptorNames:{value:void 0},persistingObjectDescriptorNames:{set:function(e){this._persistingObjectDescriptorNames=new Set(e)},get:function(e){return this._persistingObjectDescriptorNames}},persistsObjectDescriptor:{value:function(e){return e&&this._persistingObjectDescriptorNames&&this._persistingObjectDescriptorNames.has(e.name)}},persistsObject:{value:function(e){return this.persistsObjectDescriptor(this.objectDescriptorForObject(e))}},persistentPropertyDescriptors:{value:function(e){return e.propertyDescriptors}},storageForQuery:{value:function(e){var t="PersistentDataService.storageForQuery is not implemented",r=e&&e.type;return r&&"string"==typeof r?t=t+" ("+r+")":r&&(t=t+" ("+(r.name||r.exportName)+")"),Promise.reject(new Error(t))}},_databaseByModel:{value:void 0},databaseByModel:{get:function(){return this._databaseByModel||(this._databaseByModel=new WeakMap)}},registerDatabaseForModel:{value:function(e,t){this._databaseByModel.set(t,e)}},unregisterDatabaseForModel:{value:function(e){this._databaseByModel["delete"](e)}},databaseForModel:{value:function(e){if(this.persistsModel(e)){var t=this._databaseByModel.get(e);return t||(t=this.provideDatabaseForModel(e)||Promise.reject(null),this.registerDatabaseForModel(t,e)),t}return Promise.reject(null)}},databaseForObjectDescriptor:{value:function(e){return this.databaseForModel(e.model)}},_storageByObjectDescriptor:{value:void 0},storageByObjectDescriptor:{get:function(){return this._storageByObjectDescriptor||(this._storageByObjectDescriptor=new WeakMap)}},registerStorageForObjectDescriptor:{value:function(e,t){this._storageByObjectDescriptor.set(t,e)}},unregisterStorageForObjectDescriptor:{value:function(e){this._storageByObjectDescriptor["delete"](e)}},storageForObjectDescriptor:{value:function(e){return this.databaseForObjectDescriptor(e).then(function(t){if(this.persistsObjectDescriptor(e)){var r=this._storageByObjectDescriptor.get(e);return r||(r=this.provideStorageForObjectDescriptor(e)||Promise.reject(null),this.registerStorageForObjectDescriptor(r,e)),r}return Promise.reject(null)})}},childServiceForType:{value:function(e){var t=this["super"](e);return t&&this.persistsObjectDescriptor(e)&&(t.delegate=this),t}},fetchData:{value:function(e,t,r){var a=this["super"](e,t,r),i=a,n=this;return this.persistsObjectDescriptor(a.query.type)&&(i=i.then(function(e){var t=new DataStream;return t.type=a.type,t.query=a.query,n._registerDataStreamForRawDataStream(a,t),n.fetchRawData(t),t})),i}},_dataStreamObjectsByPrimaryKey:{value:new WeakMap},objectsByPrimaryKeyForDataStream:{value:function(e){var t=this._dataStreamObjectsByPrimaryKey.get(e);return t||(t=new Map,this._dataStreamObjectsByPrimaryKey.set(e,t)),t}},__dataStreamForRawDataStream:{value:new WeakMap},_dataStreamForRawDataStream:{value:function(e){return this.__dataStreamForRawDataStream.get(e)}},_registerDataStreamForRawDataStream:{value:function(e,t){return this.__dataStreamForRawDataStream.set(t,e)}},fetchRawData:{value:function(e){var t=e.query,r=t.type,a=this.storageForObjectDescriptor(r),i=t.criteria,n=(Object.keys(i),t.orderings),o=this;return a.then(function(r){var a=o.tableNamed(t.type);a.toArray(function(t){if(n){for(var r,a,i="",o=0;r=n[o];o++)a=r.expression,i.length&&(i+="."),i+="sorted{",i+=a,i+="}",r.order===DESCENDING&&(i+=".reversed()");t=evaluate(i,t)}e.addRawData(t),e.rawDataDone()})})["catch"]("NoSuchDatabaseError",function(t){e.dataError(t)})["catch"](function(t){e.dataError(t)}),e}},openTransaction:{value:function(){return Promise.resolve()}},closeTransaction:{value:function(){return Promise.resolve()}},_updateOperationsByDataStream:{value:new Map},updateOperationsForDataStream:{value:function(e){var t=this._updateOperationsByDataStream.get(e);return t||this._updateOperationsByDataStream.set(e,t=[]),t}},_objectsToUpdatesForDataStream:{value:new Map},objectsToUpdatesForDataStream:{value:function(e){var t=this._objectsToUpdatesForDataStream.get(e);return t||this._objectsToUpdatesForDataStream.set(e,t=[]),t}},rawDataServiceDidAddOneRawData:{value:function(e,t,r,a){if(this.persistsObject(a)){var i,n=this.dataIdentifierForObject(a),o=this.objectsByPrimaryKeyForDataStream(t);o.set(n.primaryKey,a),i={},i.dataID=n.primaryKey,i[this.lastFetchedPropertyName]=Date.now(),i[this.typePropertyName]=t.query.type,this.updateOperationsForDataStream(t).push(i),this.objectsToUpdatesForDataStream(t).push(a)}}},addOneRawData:{value:function(e,t,r,a){var i,n=this.dataIdentifierForTypeRawData(e.query.type,t),o=n.primaryKey,s=this._dataStreamForRawDataStream(e),c=this.objectsByPrimaryKeyForDataStream(s),l=null;return i=c.get(o),s.data&&s.length>0&&!i&&this.deletesForDataStream(s).push(o),s.data&&0!==s.length||(l=this["super"](e,t,r,a)),l}},rawDataDone:{value:function(e,t){var r=this;this["super"](e,t).then(function(){r.openTransaction().then(function(){var t=r._dataStreamForRawDataStream(e);r.objectsToUpdatesForDataStream(t),r.deletesForDataStream(t),e.data;return this.closeTransaction()})})}},_persistFetchedDataStream:{value:function(e,t){var r,a,i,n,o,s,c,l=this,u=e.data,f=e.query,y=f.type,m=this.tableNamed(y),p=[],h=Date.now(),d=[],v=this.dataIDPropertyName,D=m.schema.primKey.name,P=this.lastFetchedPropertyName,g=[],b=new DataStream;for(b.type=e.type,b.query=f,r=0,a=u.length;r<a;r++)(i=u[r])&&(p.push(i),n={},n[v]=i[D],n[P]=h,n[this.typePropertyName]=y,d.push(n));return this.fetchRawData(b).then(function(e){var t,r,a=0;for(e.length;t=e[a];a++){if(r=t[l.dataIDPropertyName],!c)for(c=new Map,o=0;s=u[o];o++)c.set(s[D],s);c.has(t[D])||g.push(D)}return l.performOfflineSelectorChanges(f,p,d,g)})["catch"](function(e){console.log(f.type+": performOfflineSelectorChanges failed",e),console.error(e)})}},readOfflineOperations:{value:function(){var e=this;return new Promise(function(t,r){var a=e._storage;a.open().then(function(){e.operationTable.where("operation").anyOf("create","update","delete").toArray(function(e){t(e)})["catch"](function(e){console.error(e),r(e)})})})}},performOfflineSelectorChanges:{value:function(e,t,r,a){var i=this._storage,n=this,o=t.slice(0),s=r.slice(0),c=a.slice(0);return i.open().then(function(t){var r=t[e.type],a=n.operationTable;t.transaction("rw",r,a,function(){return Dexie.Promise.all([r.bulkPut(o),a.bulkPut(s),r.bulkDelete(c),a.bulkDelete(c)])}).then(function(e){})["catch"](function(t){console.log(e.type+": performOfflineSelectorChanges failed",t),console.error(t)})})}},registerOfflinePrimaryKeyDependenciesForData:{value:function(e,t,r){if(0!==e.length)return PersistentDataService.registerOfflinePrimaryKeyDependenciesForData(e,t,r,this)}},deleteOfflinePrimaryKeyDependenciesForData:{value:function(e,t,r){if(0!==e.length){var a=this.schema[t],i=a.foreignKeys;PersistentDataService.deleteOfflinePrimaryKeyDependenciesForData(e,t,r,i)}}},createData:{value:function(e,t,r){var a=this;return new Promise(function(i,n){var o=a._storage,s=a.tableNamed(t),c=a.operationTable,l=[],u=[],f=s.schema.primKey.name,y=a.dataIDPropertyName,m=a.lastModifiedPropertyName,p=Date.now(),h=a.typePropertyName,d=a.changesPropertyName,v=a.operationPropertyName,D=a.operationCreateName,P=[];o.open().then(function(o){o.transaction("rw",s,c,function(){for(var a,i,n,o=0,g=e.length;o<g;o++)(a=e[o])&&("undefined"==typeof a[f]||""===a[f]?(a[f]=n=uuid.generate(),P.push(n)):console.log("### PersistentDataService createData ",t,": iRaData ",a," already have a primaryKey[",f,"]"),l.push(a),i={},i[y]=n,i[m]=p,i[h]=t,i[d]=a,i[v]=D,i.context=r,u.push(i));return Dexie.Promise.all([s.bulkAdd(l),c.bulkAdd(u)])}).then(function(t){PersistentDataService.writeOfflinePrimaryKeys(P).then(function(){a.registerOfflinePrimaryKeyDependenciesForData(e,s.name,f).then(function(){i(e)})})["catch"](function(e){n(e),console.error(e)})})["catch"](function(e){n(e),console.error(e)})})})}},updatePrimaryKey:{value:function(e,t,r){var a=(this._storage,this.tableNamed(r)),i=a.schema.primKey.name;return a.where(i).equals(e).first(function(r){a["delete"](e).then(function(){return r[i]=t,a.put(r)})["catch"](function(t){console.error(a.name,": failed to delete record with primaryKwy ",e,t)})})}},updateData:{value:function(e,t,r){var a=this;return e&&0!==e.length?new Promise(function(i,n){var o=a._storage,s=a.tableNamed(t),c=a.operationTable,l=e.slice(0),u=s.schema.primKey.name,f=a.dataIDPropertyName,y=a.lastModifiedPropertyName,m=Date.now(),p=[],h=a.typePropertyName,d=a.changesPropertyName,v=a.operationPropertyName,D=a.operationUpdateName;o.open().then(function(o){o.transaction("rw",s,c,function(){for(var a,i,n,o=0,l=e.length;o<l;o++)(a=e[o])&&(n=a[u],console.log("updateData ",n,a),p.push(s.update(n,a)),i={},i[f]=n,i[y]=m,i[h]=t,i[d]=a,i[v]=D,i.context=r,p.push(c.put(i)));return Dexie.Promise.all(p)}).then(function(t){a.registerOfflinePrimaryKeyDependenciesForData(e,s.name,u),i(l)})["catch"](function(t){n(t),console.error(s.name,": failed to updateData for ",e.length," objects with error",t)})})}):Dexie.Promise.resolve()}},deleteData:{value:function(e,t,r){var a=this;return e&&0!==e.length?new Promise(function(i,n){var o=a._storage,s=a.tableNamed(t),c=a.operationTable,l=e.slice(0),u=s.schema.primKey.name,f=a.dataIDPropertyName,y=a.lastModifiedPropertyName,m=Date.now(),p=a.changesPropertyName,h=a.typePropertyName,d=a.operationPropertyName,v=a.operationDeleteName,D=[];o.open().then(function(o){o.transaction("rw",s,c,function(){for(var a,i,n,o=0,l=e.length;o<l;o++)(a=e[o])&&(n=a[u],D.push(s["delete"](n,a)),i={},i[f]=n,i[y]=m,i[h]=t,i[p]=a,i[d]=v,i.context=r,D.push(c.put(i)));return Dexie.Promise.all(D)}).then(function(r){a.deleteOfflinePrimaryKeyDependenciesForData(e,t,u),i(l)})["catch"](function(t){n(t),console.error(s.name,": failed to updateData for ",e.length," objects with error",t)})})}):Dexie.Promise.resolve()}},deleteOfflineOperations:{value:function(e){var t=this;return e&&0!==e.length?new Promise(function(r,a){var i=t._storage,n=t.operationTable,o=n.schema.primKey.name,s=[];i.open().then(function(t){t.transaction("rw",n,function(){for(var t,r=0,a=e.length;r<a;r++)(t=e[r])&&s.push(n["delete"](t[o],t));return Dexie.Promise.all(s)}).then(function(e){r()})["catch"](function(e){a(e)})})}):Promise.resolve()}},onlinePrimaryKeyForOfflinePrimaryKey:{value:function(e){return PersistentDataService.onlinePrimaryKeyForOfflinePrimaryKey(e)}},replaceOfflinePrimaryKey:{value:function(e,t,r,a){return PersistentDataService.replaceOfflinePrimaryKey(e,t,r,a)}}},{_registeredPersistentDataServiceByName:{value:new Map},registerPersistentDataService:{value:function(e){this._registeredPersistentDataServiceByName.set(e.name,e)}},registeredPersistentDataServiceNamed:{value:function(e){return this._registeredPersistentDataServiceByName.get(e)}},__offlinePrimaryKeyDB:{value:null},_offlinePrimaryKeyDB:{get:function(){if(!this.__offlinePrimaryKeyDB){var e=this.__offlinePrimaryKeyDB=new Dexie("OfflinePrimaryKeys"),t=e.PrimaryKeys;if(!t){var r={PrimaryKeys:"offlinePrimaryKey,dependencies.serviceName, dependencies.tableName, dependencies.primaryKey, dependencies.foreignKeyName"};e.version(e.verno+1).stores(r)}}return this.__offlinePrimaryKeyDB}},_primaryKeysTable:{value:null},primaryKeysTable:{get:function(){return this._primaryKeysTable||(this._primaryKeysTable=this._offlinePrimaryKeyDB.PrimaryKeys)}},writeOfflinePrimaryKey:{value:function(e){return this.writeOfflinePrimaryKeys([e])}},writeOfflinePrimaryKeys:{value:function(e){for(var t=(this._offlinePrimaryKeyDB,this.primaryKeysTable),r=[],a=this,i=0,n=e.length;i<n;i++)r.push({offlinePrimaryKey:e[i]});return new Promise(function(i,n){var o,s;a._offlinePrimaryKeys;t.bulkAdd(r).then(function(t){a.fetchOfflinePrimaryKeys().then(function(a){for(o=0;s=e[o];o++)a.add(s.offlinePrimaryKey,r[o]);i(t)})})["catch"](function(e){console.error("deleteOfflinePrimaryKeys failed",e),n(e)})})}},registerOfflinePrimaryKeyDependenciesForData:{value:function(e,t,r,a){if(0!==e.length){var i,n,o,s,c,l,u,f,y,m=Object.keys(e[0]),p=a.schema[t],h=p.foreignKeys,d=this;return h||(h=p._computedForeignKeys||(p._computedForeignKeys=m)),this.fetchOfflinePrimaryKeys().then(function(m){for(i=0,o=e.length;i<o;i++)for(n=e[i],s=n[r],c=0;l=h[c];c++)u=n[l],u&&(f=d.addPrimaryKeyDependency(u,t,s,l,a.name))&&(y=y||[],y.push(f));y&&y.length&&d.primaryKeysTable.bulkPut(y).then(function(e){console.log("Updated  offline primaryKeys dependencies"+e)})["catch"](Dexie.BulkError,function(e){console.error(e)})})}}},deleteOfflinePrimaryKeyDependenciesForData:{value:function(e,t,r,a){}},addPrimaryKeyDependency:{value:function(e,t,r,a,i){if(this._offlinePrimaryKeys.has(e)){var n,o,s,c=this._offlinePrimaryKeys.get(e),l=c.dependencies,u=!1;if(l)for(n=0;o=l[n];n++)if(o.tableName===t&&o.primaryKey===r&&o.foreignKeyName===a){u=!0;break}return u?null:(s={serviceName:i,tableName:t,primaryKey:r,foreignKeyName:a},l||(l=c.dependencies=[]),l.push(s),c)}}},_offlinePrimaryKeyToOnlinePrimaryKey:{value:new Map},onlinePrimaryKeyForOfflinePrimaryKey:{value:function(e){return this._offlinePrimaryKeyToOnlinePrimaryKey.get(e)}},replaceOfflinePrimaryKey:{value:function(e,t,r,a){var i=this;return this._offlinePrimaryKeyToOnlinePrimaryKey.set(e,t),a.offlineService.updatePrimaryKey(e,t,r).then(function(){return i.fetchOfflinePrimaryKeys().then(function(r){if(r.has(e)){var a=r.get(e),i=a.dependencies;if(i){var n,o,s,c,l,u,f;for(n=0;o=i[n];n++)return s=PersistentDataService.registeredPersistentDataServiceNamed(o.serviceName),c=o.tableName,l=o.primaryKey,u=o.foreignKeyName,f={},f[s.schema[c].primaryKey]=l,f[u]=t,s.tableNamed(c).update(l,f)}}})})["catch"](function(e){throw console.error("updatePrimaryKey failed",e),e})}},_offlinePrimaryKeys:{value:null},_offlinePrimaryKeysPromise:{value:null},fetchOfflinePrimaryKeys:{value:function(){if(this._offlinePrimaryKeys)return this._offlinePrimaryKeysPromise||(this._offlinePrimaryKeysPromise=Promise.resolve(this._offlinePrimaryKeys)),this._offlinePrimaryKeysPromise;var e=this._offlinePrimaryKeys=new Map,t=this;return new Promise(function(r,a){t._offlinePrimaryKeyDB.PrimaryKeys.each(function(t,r){e.set(t.offlinePrimaryKey,t)}).then(function(){r(e)})["catch"](function(e){console.error("fetchOfflinePrimaryKeys failed",e),a(e)})})}},deleteOfflinePrimaryKeys:{value:function(e){var t=this,r=this._offlinePrimaryKeys;return e&&0!==e.length?new Promise(function(a,i){t._offlinePrimaryKeyDB.PrimaryKeys.bulkDelete(e).then(function(){for(var t,i=0;t=e[i];i++)r["delete"](t.offlinePrimaryKey);a()})["catch"](function(e){console.error("deleteOfflinePrimaryKeys failed",e),i(e)})}):Promise.resolve()}}});