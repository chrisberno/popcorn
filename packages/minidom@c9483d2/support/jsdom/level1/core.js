function lengthFromProperties(e){var t=-1;for(var o in e){var n=+o;!isNaN(n)&&n>t&&(t=n)}return t+1}var attachId=function(e,t,o){e&&t&&o&&(o._ids[e]||(o._ids[e]=[]),o._ids[e].push(t))},detachId=function(e,t,o){var n,i;if(e&&t&&o&&o._ids&&o._ids[e]){for(n=o._ids[e],i=0;i<n.length;i++)n[i]===t&&(n.splice(i,1),i--);0===n.length&&delete o._ids[e]}},core={mapper:function(e,t,o){return function(){return core.mapDOMNodes(e,o!==!1,t)}},mapDOMNodes:function(e,t,o){function n(e,t){return Array.prototype.reduce.call(e.childNodes,i,t)}function i(e,i){return o(i)&&e.push(i),t&&i._childNodes&&n(i,e),e}return n(e,[])},visitTree:function(e,t){function o(e){if(e&&(t(e),e._childNodes)){var n=0,i=e._childNodes,r=i.length;for(n;n<r;n++)o(i[n])}}o(e)},markTreeReadonly:function(e){function t(e){if(e._readonly=!0,e.attributes){var o=e.attributes,n=o.length,i=0;for(o._readonly=!0,i;i<n;i++)core.visitTree(o[i],t)}}core.visitTree(e,t)}},INDEX_SIZE_ERR=core.INDEX_SIZE_ERR=1,DOMSTRING_SIZE_ERR=core.DOMSTRING_SIZE_ERR=2,HIERARCHY_REQUEST_ERR=core.HIERARCHY_REQUEST_ERR=3,WRONG_DOCUMENT_ERR=core.WRONG_DOCUMENT_ERR=4,INVALID_CHARACTER_ERR=core.INVALID_CHARACTER_ERR=5,NO_DATA_ALLOWED_ERR=core.NO_DATA_ALLOWED_ERR=6,NO_MODIFICATION_ALLOWED_ERR=core.NO_MODIFICATION_ALLOWED_ERR=7,NOT_FOUND_ERR=core.NOT_FOUND_ERR=8,NOT_SUPPORTED_ERR=core.NOT_SUPPORTED_ERR=9,INUSE_ATTRIBUTE_ERR=core.INUSE_ATTRIBUTE_ERR=10,ELEMENT_NODE=1,ATTRIBUTE_NODE=2,TEXT_NODE=3,CDATA_SECTION_NODE=4,ENTITY_REFERENCE_NODE=5,ENTITY_NODE=6,PROCESSING_INSTRUCTION_NODE=7,COMMENT_NODE=8,DOCUMENT_NODE=9,DOCUMENT_TYPE_NODE=10,DOCUMENT_FRAGMENT_NODE=11,NOTATION_NODE=12,messages=core.exceptionMessages={};messages[INDEX_SIZE_ERR]="Index size error",messages[DOMSTRING_SIZE_ERR]="DOMString size error",messages[HIERARCHY_REQUEST_ERR]="Hierarchy request error",messages[WRONG_DOCUMENT_ERR]="Wrong document",messages[INVALID_CHARACTER_ERR]="Invalid character",messages[NO_DATA_ALLOWED_ERR]="No data allowed",messages[NO_MODIFICATION_ALLOWED_ERR]="No modification allowed",messages[NOT_FOUND_ERR]="Not found",messages[NOT_SUPPORTED_ERR]="Not supported",messages[INUSE_ATTRIBUTE_ERR]="Attribute in use",core.DOMException=function(e,t){this.code=e,Error.call(this,core.exceptionMessages[e]),this.message=core.exceptionMessages[e],t&&(this.message=this.message+": "+t),Error.captureStackTrace&&Error.captureStackTrace(this,core.DOMException)},core.DOMException.INDEX_SIZE_ERR=INDEX_SIZE_ERR,core.DOMException.DOMSTRING_SIZE_ERR=DOMSTRING_SIZE_ERR,core.DOMException.HIERARCHY_REQUEST_ERR=HIERARCHY_REQUEST_ERR,core.DOMException.WRONG_DOCUMENT_ERR=WRONG_DOCUMENT_ERR,core.DOMException.INVALID_CHARACTER_ERR=INVALID_CHARACTER_ERR,core.DOMException.NO_DATA_ALLOWED_ERR=NO_DATA_ALLOWED_ERR,core.DOMException.NO_MODIFICATION_ALLOWED_ERR=NO_MODIFICATION_ALLOWED_ERR,core.DOMException.NOT_FOUND_ERR=NOT_FOUND_ERR,core.DOMException.NOT_SUPPORTED_ERR=NOT_SUPPORTED_ERR,core.DOMException.INUSE_ATTRIBUTE_ERR=INUSE_ATTRIBUTE_ERR,core.DOMException.prototype={INDEX_SIZE_ERR:INDEX_SIZE_ERR,DOMSTRING_SIZE_ERR:DOMSTRING_SIZE_ERR,HIERARCHY_REQUEST_ERR:HIERARCHY_REQUEST_ERR,WRONG_DOCUMENT_ERR:WRONG_DOCUMENT_ERR,INVALID_CHARACTER_ERR:INVALID_CHARACTER_ERR,NO_DATA_ALLOWED_ERR:NO_DATA_ALLOWED_ERR,NO_MODIFICATION_ALLOWED_ERR:NO_MODIFICATION_ALLOWED_ERR,NOT_FOUND_ERR:NOT_FOUND_ERR,NOT_SUPPORTED_ERR:NOT_SUPPORTED_ERR,INUSE_ATTRIBUTE_ERR:INUSE_ATTRIBUTE_ERR},core.DOMException.prototype.__proto__=Error.prototype,core.NodeList=function(e,t){t?(Object.defineProperties(this,{_element:{value:e},_query:{value:t},_snapshot:{writable:!0},_length:{value:0,writable:!0},_version:{value:-1,writable:!0}}),this._update()):(Array.isArray(e)&&Array.prototype.push.apply(this,e),Object.defineProperties(this,{_length:{value:e?e.length:0,writable:!0}}))},core.NodeList.prototype={_update:function(){if(this._element){if(this._version<this._element._version){var e=this._snapshot=this._query();this._resetTo(e),this._version=this._element._version}}else this._length=lengthFromProperties(this)},_resetTo:function(e){for(var t=lengthFromProperties(this),o=0;o<t;++o)delete this[o];for(var n=0;n<e.length;++n)this[n]=e[n];this._length=e.length},_toArray:function(){return this._element?(this._update(),this._snapshot):Array.prototype.slice.call(this)},get length(){return this._update(),this._length||0},item:function(e){return this._update(),this[e]||null},toString:function(){return"[ jsdom NodeList ]: contains "+this.length+" items"}},Object.defineProperty(core.NodeList.prototype,"constructor",{value:core.NodeList,writable:!0,configurable:!0}),core.DOMImplementation=function(e,t){if(this._ownerDocument=e,this._features={},t)for(var o in t)t.hasOwnProperty(o)&&this.addFeature(o.toLowerCase(),t[o])},core.DOMImplementation.prototype={get ownerDocument(){return this._ownerDocument},removeFeature:function(e,t){if(e=e.toLowerCase(),this._features[e])if(t){var o=0,n=this._features[e],i=n.length;for(o;o<i;o++)if(n[o]===t)return void n.splice(o,1)}else delete this._features[e]},addFeature:function(e,t){e=e.toLowerCase(),t&&(this._features[e]||(this._features[e]=[]),t instanceof Array?Array.prototype.push.apply(this._features[e],t):this._features[e].push(t))},hasFeature:function(e,t){e=e?e.toLowerCase():"";var o=!!this._features[e]&&this._features[e];if(!t&&o.length&&o.length>0)return!0;if("string"==typeof o)return o===t;if(o.indexOf&&o.length>0){for(var n=0;n<o.length;n++){var i=o[n]instanceof RegExp?o[n].test(t):o[n]===t;if(i)return!0}return!1}return!1}};var attrCopy=function(e,t,o){if(e.attributes){var n,i,r,c=e.attributes,_=c.length;for(n=0;n<_;n++)if(i=c[n],i.specified){if(i.namespaceURI){t.setAttributeNS(i.namespaceURI,i.nodeName,i.nodeValue);var s=i.nodeName.split(":").pop();r=t.getAttributeNodeNS(i.namespaceURI,s)}else t.setAttribute(i.nodeName,i.nodeValue),r=t.getAttributeNode(i.nodeName);"function"==typeof o&&o(i,r)}}return t};core.Node=function(e){this._childNodes=new core.NodeList,this._ownerDocument=e,this._attributes=new core.AttrNodeMap(e,this),this._nodeName=null,this._childrenList=null,this._version=0,this._nodeValue=null,this._parentNode=null,this._nodeName=null,this._readonly=!1},core.Node.ELEMENT_NODE=ELEMENT_NODE,core.Node.ATTRIBUTE_NODE=ATTRIBUTE_NODE,core.Node.TEXT_NODE=TEXT_NODE,core.Node.CDATA_SECTION_NODE=CDATA_SECTION_NODE,core.Node.ENTITY_REFERENCE_NODE=ENTITY_REFERENCE_NODE,core.Node.ENTITY_NODE=ENTITY_NODE,core.Node.PROCESSING_INSTRUCTION_NODE=PROCESSING_INSTRUCTION_NODE,core.Node.COMMENT_NODE=COMMENT_NODE,core.Node.DOCUMENT_NODE=DOCUMENT_NODE,core.Node.DOCUMENT_TYPE_NODE=DOCUMENT_TYPE_NODE,core.Node.DOCUMENT_FRAGMENT_NODE=DOCUMENT_FRAGMENT_NODE,core.Node.NOTATION_NODE=NOTATION_NODE,core.Node.prototype={ELEMENT_NODE:ELEMENT_NODE,ATTRIBUTE_NODE:ATTRIBUTE_NODE,TEXT_NODE:TEXT_NODE,CDATA_SECTION_NODE:CDATA_SECTION_NODE,ENTITY_REFERENCE_NODE:ENTITY_REFERENCE_NODE,ENTITY_NODE:ENTITY_NODE,PROCESSING_INSTRUCTION_NODE:PROCESSING_INSTRUCTION_NODE,COMMENT_NODE:COMMENT_NODE,DOCUMENT_NODE:DOCUMENT_NODE,DOCUMENT_TYPE_NODE:DOCUMENT_TYPE_NODE,DOCUMENT_FRAGMENT_NODE:DOCUMENT_FRAGMENT_NODE,NOTATION_NODE:NOTATION_NODE,get children(){if(!this._childrenList){var e=this;this._childrenList=new core.NodeList(this,function(){return Array.prototype.filter.call(e._childNodes,function(e){return e.tagName})})}return this._childrenList},get nodeValue(){return this._nodeValue},set nodeValue(e){if(this._readonly===!0)throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR,"Attempting to modify a read-only node");this._nodeValue=e},get parentNode(){return this._parentNode},get nodeName(){var e=this._nodeName||this._tagName;return this.nodeType===ELEMENT_NODE&&this._ownerDocument&&this._ownerDocument._doctype&&this._ownerDocument._doctype.name.toLowerCase().indexOf("html")!==-1?e.toUpperCase():e},set nodeName(e){throw new core.DOMException},get attributes(){return this._attributes},get firstChild(){return this._childNodes.length>0?this._childNodes[0]:null},set firstChild(e){throw new core.DOMException},get ownerDocument(){return this._ownerDocument},get readonly(){return this._readonly},get lastChild(){var e=this._childNodes.length;return e>0?this._childNodes[e-1]:null},set lastChild(e){throw new core.DOMException},get childNodes(){return this._childNodes},set childNodes(e){throw new core.DOMException},_indexOf:function(e){if(!this._childNodes||!this._childNodes.length)return-1;for(var t,o=0,n=this._childNodes;(t=n[o])&&t!=e;)o++;return t==e?o:-1},get nextSibling(){if(!this._parentNode||!this._parentNode._indexOf)return null;var e=this._parentNode._indexOf(this);return e==-1||e+1>=this._parentNode._childNodes.length?null:this._parentNode._childNodes[e+1]||null},set nextSibling(e){throw new core.DOMException},get previousSibling(){if(!this._parentNode||!this._parentNode._indexOf)return null;var e=this._parentNode._indexOf(this);return e==-1||e-1<0?null:this._parentNode._childNodes[e-1]||null},set previousSibling(e){throw new core.DOMException},insertBefore:function(e,t){if(this._readonly===!0)throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR,"Attempting to modify a read-only node");if(e._ownerDocument||(e._ownerDocument=this._ownerDocument),e._ownerDocument!==this._ownerDocument)throw new core.DOMException(WRONG_DOCUMENT_ERR);if(e.nodeType&&e.nodeType===ATTRIBUTE_NODE)throw new core.DOMException(HIERARCHY_REQUEST_ERR);var o=this;do if(o===e)throw new core.DOMException(HIERARCHY_REQUEST_ERR);while(o=o._parentNode);if(e.nodeType===DOCUMENT_FRAGMENT_NODE)for(var n;e._childNodes.length>0;)n=e.removeChild(e.firstChild),this.insertBefore(n,t);else{if(e===t)return e;if(e._parentNode&&e._parentNode.removeChild(e),null==t)var i=this._childNodes.length;else{var i=this._indexOf(t);if(i==-1)throw new core.DOMException(NOT_FOUND_ERR)}Array.prototype.splice.call(this._childNodes,i,0,e),e._parentNode=this,this._attached&&e._attach&&e._attach(),this._modified()}return e},_modified:function(){this._version++,this._ownerDocument&&this._ownerDocument._version++,this._childrenList&&this._childrenList._update()},_attrModified:function(e,t,o){if("id"==e&&this._attached){var n=this._ownerDocument;detachId(o,this,n),attachId(t,this,n)}if(e.length>2&&"o"==e[0]&&"n"==e[1])if(t){var i=this,r="undefined"!=typeof i.run?i:i._ownerDocument.parentWindow;i[e]=function(e){r.__tempContextForInlineEventHandler=i,r.__tempEvent=e,r.run("if ((function (event) {"+t+"}).call(window.__tempContextForInlineEventHandler, window.__tempEvent) === false) {window.__tempEvent.preventDefault()}"),delete r.__tempContextForInlineEventHandler,delete r.__tempEvent}}else this[e]=null},replaceChild:function(e,t){return this.insertBefore(e,t),this.removeChild(t)},_attach:function(){this._attached=!0,this.id&&attachId(this.id,this,this._ownerDocument);for(var e=0;e<this._childNodes.length;e++)this._childNodes[e]._attach&&this._childNodes[e]._attach()},_detach:function(){var e;this._attached=!1,this.id&&detachId(this.id,this,this._ownerDocument);for(var e=0;e<this._childNodes.length;e++)this._childNodes[e]._detach()},removeChild:function(e){if(this._readonly===!0)throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);var t=this._indexOf(e);if(t==-1)throw new core.DOMException(NOT_FOUND_ERR);return Array.prototype.splice.call(this._childNodes,t,1),e._parentNode=null,this._modified(),e._detach(),e},appendChild:function(e){return this.insertBefore(e,null)},hasChildNodes:function(){return this._childNodes.length>0},cloneNode:function(e,t){var o=null;switch(this.nodeType){case this.ELEMENT_NODE:o=attrCopy(this,this._ownerDocument.createElement(this.tagName),t);break;case this.TEXT_NODE:o=attrCopy(this,this._ownerDocument.createTextNode(this.tagName)),o.nodeValue=this.nodeValue;break;case this.CDATA_SECTION_NODE:o=this._ownerDocument.createCDATASection(this.tagName),o.nodeValue=this.nodeValue;break;case this.ENTITY_REFERENCE_NODE:var n=this._entity?this._entity.name:this._entityName,i=this._ownerDocument.createEntityReference(n);o=attrCopy(this,i),o.nodeValue=this.nodeValue;break;case this.ATTRIBUTE_NODE:o=this._ownerDocument.createAttribute(this.name);break;case this.ENTITY_NODE:var r=this._ownerDocument.createEntityNode(this.name);o=attrCopy(this,r),o.nodeValue=this.nodeValue,o._publicId=this._publicId,o._systemId=this._systemId,o._notationName=this.notationName;break;case this.PROCESSING_INSTRUCTION_NODE:var c=this._ownerDocument.createProcessingInstruction(this._target,this._data);o=attrCopy(this,c),o.nodeValue=this.nodeValue;break;case this.COMMENT_NODE:o=this._ownerDocument.createComment(this.tagName),o.nodeValue=this.nodeValue;break;case this.DOCUMENT_NODE:o=attrCopy(this,new core.Document);break;case this.DOCUMENT_TYPE_NODE:o=attrCopy(this,new core.DocumentType),o.nodeValue=this.nodeValue;break;case this.DOCUMENT_FRAGMENT_NODE:o=this._ownerDocument.createDocumentFragment();break;case this.NOTATION_NODE:o=this._ownerDocument.createNotationNode(this._name,this._publicId,this._systemId),o=attrCopy(this,o),o.nodeValue=this.nodeValue;break;default:throw new core.DOMException(NOT_FOUND_ERR)}if("function"==typeof t&&t(this,o),e||this.nodeType===ATTRIBUTE_NODE)for(var _=null,s=0,a=this._childNodes.length;s<a;s++)if(_=this._childNodes[s].cloneNode(!0),_.nodeType===ATTRIBUTE_NODE)o.setAttributeNode(_);else{var h=o._readonly;o._readonly=!1,o.appendChild(_),o._readonly=h}return o},normalize:function(){var e,t,o,n;if(this._attributes&&this._attributes.length)for(n=0;n<this._attributes.length;n++)this._attributes.item(n)&&(o=this._attributes.item(n).normalize());for(n=0;n<this._childNodes.length;n++)t=this._childNodes[n],t.normalize&&t.normalize(),""!==t.nodeValue?n>0&&(e=this._childNodes[n-1],t.nodeType===TEXT_NODE&&e.nodeType===TEXT_NODE&&(e.appendData(t.nodeValue),this.removeChild(t),n--)):(this.removeChild(t),n--)},toString:function(){var e="";if(this.id&&(e="#"+this.id),this.className)for(var t=this.className.split(/\s+/),o=0,n=t.length;o<n;o++)e+="."+t[o];return"[ "+this.tagName+e+" ]"},raise:function(e,t,o){var n=e+": "+t;if(o&&(o.exception?n=o.exception.stack:n+=" - More:\n"+o),"error"===e){this.errors||(this.errors=[]);var i={type:e,message:t||"No message",data:o||null};this.errors.push(i),this._ownerDocument&&this._ownerDocument.raise&&this!==this._ownerDocument&&this._ownerDocument.raise(e,t,o)}}},core.NamedNodeMap=function(e){this._nodes=Object.create(null),this._nsStore={},this.length=0,this._ownerDocument=e,this._readonly=!1},core.NamedNodeMap.prototype={get readonly(){return this._readonly},get ownerDocument(){this._ownerDocument},exists:function(e){return!(!this._nodes[e]&&null!==this._nodes[e])},getNamedItem:function(e){return this._nodes[e]||null},setNamedItem:function(e){if(this._readonly===!0)throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);if(e&&e._ownerDocument!==this._ownerDocument)throw new core.DOMException(WRONG_DOCUMENT_ERR);if(e&&e._ownerElement)throw new core.DOMException(INUSE_ATTRIBUTE_ERR);var t=e.name||e.tagName,o=this._nodes[t];return o||(this.length++,o=null),e._specified=!0,this[t]=this._nodes[t]=e,o},removeNamedItem:function(e){if(this._readonly===!0)throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);if(!this._nodes[e])throw new core.DOMException(NOT_FOUND_ERR);var t=this._nodes[e]||null;return delete this._nodes[e],delete this[e],this.length--,t},item:function(e){var t=0;for(var o in this._nodes){if(t===e&&this._nodes[o])return this._nodes[o];t++}return null}},core.AttrNodeMap=function(e,t){core.NamedNodeMap.call(this,e),this._parentNode=t},core.AttrNodeMap.prototype={get parentNode(){return this._parentNode},setNamedItem:function(e){var t=core.NamedNodeMap.prototype.setNamedItem.call(this,e),o=this._parentNode;return e._ownerElement=o,o._attrModified(e.name,e.value,t&&t.value||null),o._modified(),t},removeNamedItem:function(e){var t=core.NamedNodeMap.prototype.removeNamedItem.call(this,e),o=this._parentNode;t._ownerElement=null,o._attrModified(e),o._modified();var n=this._ownerDocument;if(n&&n._doctype&&"html"!==n._doctype.name.toLowerCase()){var i=!1,r=n._doctype._attributes.getNamedItem(this._parentNode.nodeName);if(r){var i=r.attributes.getNamedItem(e);if(i){var c=n.createAttribute(e);c.value=i.value,c._specified=!1,this._nodes[e]=c,this.length++}}}return t}},core.AttrNodeMap.prototype.__proto__=core.NamedNodeMap.prototype,core.NotationNodeMap=function(e){core.NamedNodeMap.call(this,e),this._readonly=!1;for(var t=1;t<arguments.length;t++)this.setNamedItem(arguments[t]);this._readonly=!0},core.NotationNodeMap.prototype={},core.NotationNodeMap.prototype.__proto__=core.NamedNodeMap.prototype,core.EntityNodeMap=function(e){core.NamedNodeMap.call(this,e),this._readonly=!1;var t=1,o=arguments.length;for(t=1;t<o;t++)this.setNamedItem(arguments[t]);core.markTreeReadonly(this)},core.EntityNodeMap.prototype={},core.EntityNodeMap.prototype.__proto__=core.NamedNodeMap.prototype,core.Element=function(e,t){this._ownerDocument=e,core.Node.call(this,e),this._nodeName=t,this._tagName=t},core.Element.prototype={get nodeValue(){return null},set nodeValue(e){},get tagName(){return this.nodeType===ELEMENT_NODE&&this._ownerDocument&&this._ownerDocument._doctype&&this._ownerDocument._doctype.name.toLowerCase().indexOf("html")!==-1?this.nodeName.toUpperCase():this.nodeName},nodeType:ELEMENT_NODE,get attributes(){for(var e=0;e<this._attributes.length;e++)this._attributes[e]=this._attributes.item(e);return this._attributes},getAttribute:function(e){var t=this._attributes.getNamedItem(e);return t?t.value:null},setAttribute:function(e,t){if(this._ownerDocument){var o=this._ownerDocument.createAttribute(e);o.value=t,this._attributes.setNamedItem(o)}},removeAttribute:function(e){this._attributes.exists(e)&&this._attributes.removeNamedItem(e)},getAttributeNode:function(e){return this._attributes.getNamedItem(e)},setAttributeNode:function(e){var t=this._attributes.getNamedItem(e.name);return t&&(t._ownerElement=null),this._attributes.setNamedItem(e),t&&t.specified?t:null},removeAttributeNode:function(e){var t=this._attributes.getNamedItem(e.name);if(this._attributes&&t===e)return this._attributes.removeNamedItem(e.name),e;throw new core.DOMException(NOT_FOUND_ERR)},getElementsByTagName:function(e){function t(t){return t=t.nodeType===ENTITY_REFERENCE_NODE?t._entity:t,!(!t.nodeName||t.nodeType!==ELEMENT_NODE)&&("*"===e||t.nodeName.toLowerCase()===e)}return e=e.toLowerCase(),new core.NodeList(this._ownerDocument||this,core.mapper(this,t,!0))}},core.Element.prototype.__proto__=core.Node.prototype,core.DocumentFragment=function(e){core.Node.call(this,e),this._nodeName=this._tagName="#document-fragment"},core.DocumentFragment.prototype={nodeType:DOCUMENT_FRAGMENT_NODE,get nodeValue(){return null},set nodeValue(e){},get attributes(){return null}},core.DocumentFragment.prototype.__proto__=core.Node.prototype,core.ProcessingInstruction=function(e,t,o){this._ownerDocument=e,core.Node.call(this,e),this._nodeName=t,this._tagName=t,this._target=t,this._nodeValue=o},core.ProcessingInstruction.prototype={nodeType:PROCESSING_INSTRUCTION_NODE,get target(){return this._target},set target(e){throw new core.DOMException(1)},get nodeValue(){return this._nodeValue},set nodeValue(e){this._nodeValue=e},get data(){return this._nodeValue},set data(e){throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR)},get attributes(){return null}},core.ProcessingInstruction.prototype.__proto__=core.Node.prototype,core.Document=function(e){e?"string"==typeof e&&(e={name:e}):e={},core.Node.call(this,"#document"),this._nodeName=this._tagName="#document",this._contentType=e.contentType||"text/xml",this._doctype=e._doctype,this._implementation=e.implementation||new core.DOMImplementation,this._documentElement=null,this._ids=Object.create(null),this._attached=!0,this._ownerDocument=this,this._readonly=!1};var tagRegEx=/[^\w:\d_\.-]+/i,entRegEx=/[^\w\d_\-&;]+/,invalidAttrRegEx=/[\s"'>\/=\u0000-\u001A]/;core.Document.prototype={nodeType:DOCUMENT_NODE,_elementBuilders:{},_defaultElementBuilder:function(e,t){return new core.Element(e,t)},get contentType(){return this._contentType},get doctype(){return this._doctype||null},set doctype(e){this._doctype=e},get documentElement(){if(this._documentElement)return this._documentElement;var e=this._childNodes,t=this._childNodes.length,o=0;for(o;o<t;o++)if(e[o].nodeType===ELEMENT_NODE)return this._documentElement=e[o],e[o];return null},get implementation(){return this._implementation},set implementation(e){this._implementation=e},get nodeName(){return"#document"},get tagName(){return null},get nodeValue(){return null},set nodeValue(e){},get attributes(){return null},get ownerDocument(){return null},get readonly(){return this._readonly},_createElementNoTagNameValidation:function(e){var t=e.toLowerCase(),o=(this._elementBuilders[t]||this._defaultElementBuilder)(this,e);if(this._doctype&&this._doctype._attributes&&"html"!==this._doctype.name.toLowerCase()){var n=this._doctype._attributes.getNamedItem(e);if(n&&n._childNodes)for(var i,r,c=n.attributes,_=c.length,s=0;s<_;s++)r=c.item(s),r&&(i=this.createAttribute(r.name),i.value=r.value,o.setAttributeNode(i),i._specified=!1)}return o._created=!0,o},createElement:function(e){e=String(e);var t=[];if(0===e.length||(t=e.match(tagRegEx)))throw new core.DOMException(INVALID_CHARACTER_ERR,"Invalid character in tag name: "+t.pop());return this._createElementNoTagNameValidation(e)},createDocumentFragment:function(){return new core.DocumentFragment(this)},createTextNode:function(e){return new core.Text(this,e)},createComment:function(e){return new core.Comment(this,e)},createCDATASection:function(e){if(this._doctype&&"html"===this._doctype.name)throw new core.DOMException(NOT_SUPPORTED_ERR);return new core.CDATASection(this,e)},createProcessingInstruction:function(e,t){if(this._doctype&&"html"===this._doctype.name)throw new core.DOMException(NOT_SUPPORTED_ERR);if(e.match(tagRegEx)||!e||!e.length)throw new core.DOMException(INVALID_CHARACTER_ERR);return new core.ProcessingInstruction(this,e,t)},createAttribute:function(e){if(!e||!e.length||e.match(invalidAttrRegEx))throw new core.DOMException(INVALID_CHARACTER_ERR,"attribute name: "+e);return new core.Attr(this,e,(!1))},createEntityReference:function(e){if(this._doctype&&"html"===this._doctype.name)throw new core.DOMException(NOT_SUPPORTED_ERR);if(e=e.replace(/[&;]/g,""),!e||!e.length)throw new core.DOMException(INVALID_CHARACTER_ERR);if(e.match(tagRegEx))throw new core.DOMException(INVALID_CHARACTER_ERR);var t;t=this._doctype&&this._doctype.entities?this._doctype.entities.getNamedItem(e):null;var o=new core.EntityReference(this,t);return o._entityName=e,o},createEntityNode:function(e){if(e.match(entRegEx)||!e||!e.length)throw new core.DOMException(INVALID_CHARACTER_ERR);var t=new core.Entity(this,e);t._readonly=!1;for(var o=1;o<arguments.length;o++)t.appendChild(arguments[o]);return core.markTreeReadonly(t),t},createNotationNode:function(e,t,o){if(e.match(entRegEx)||!e||!e.length)throw new core.DOMException(INVALID_CHARACTER_ERR);var n=new core.Notation(this,e,t,o);n._readonly=!1;for(var i=3;i<arguments.length;i++)n.appendChild(arguments[i]);return core.markTreeReadonly(n),n},appendChild:function(e){if(this.documentElement&&e.nodeType==ELEMENT_NODE)throw new core.DOMException(HIERARCHY_REQUEST_ERR);return core.Node.prototype.appendChild.call(this,e)},removeChild:function(e){var t=core.Node.prototype.removeChild.call(this,e);return e==this._documentElement&&(this._documentElement=null),t},getElementsByTagName:function(e){function t(t){if(t.nodeType&&t.nodeType===ENTITY_REFERENCE_NODE&&(t=t._entity),t.nodeName&&t.nodeType===ELEMENT_NODE){if("*"===e)return!0;if(t._ownerDocument&&t._ownerDocument._doctype&&t.nodeName.toLowerCase()===e.toLowerCase())return!0;if(t.nodeName.toLowerCase()===e.toLowerCase())return!0}return!1}return new core.NodeList(this.documentElement||this,core.mapper(this,t,!0))}},core.Document.prototype.__proto__=core.Node.prototype,core.CharacterData=function(e,t){core.Node.call(this,e),this._nodeValue=t+""},core.CharacterData.prototype={get data(){return this._nodeValue},set data(e){if(this._readonly===!0)throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);this._nodeValue=e},get length(){return this._nodeValue.length||0},substringData:function(e,t){if(t<0||e<0||e>this._nodeValue.length)throw new core.DOMException(INDEX_SIZE_ERR);return this._nodeValue.length<e+t?this._nodeValue.substring(e):this._nodeValue.substring(e,e+t)},appendData:function(e){if(this._readonly===!0)throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);return this._nodeValue+=e,this._nodeValue},insertData:function(e,t){if(this._readonly===!0)throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);if(e<0||e>this._nodeValue.length)throw new core.DOMException(INDEX_SIZE_ERR);var o=this._nodeValue.substring(0,e),n=this._nodeValue.substring(e);this._nodeValue=o+t+n},deleteData:function(e,t){if(this._readonly===!0)throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);if(e<0||e>this._nodeValue.length||t<0)throw new core.DOMException(INDEX_SIZE_ERR);var o=this._nodeValue.substring(0,e);this._nodeValue=e+t<this._nodeValue.length?o+this._nodeValue.substring(e+t):o},replaceData:function(e,t,o){if(this._readonly===!0)throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);if(t=e+t>this._nodeValue.length?this.nodeValue.length-e:t,e<0||e>this._nodeValue.length||t<0)throw new core.DOMException(INDEX_SIZE_ERR);var n=this._nodeValue.substring(0,e),i=this._nodeValue.substring(e+t);this._nodeValue=n+o+i}},core.CharacterData.prototype.__proto__=core.Node.prototype,core.Attr=function(e,t,o){core.Node.call(this,e),this._nodeValue=o,this._name=t,this._specified=!!o,this._tagName=t,this._nodeName=t},core.Attr.prototype={nodeType:ATTRIBUTE_NODE,get nodeValue(){for(var e="",t=0,o=this._childNodes.length;t<o;t++){var n=this._childNodes[t];e+=n.nodeType===ENTITY_REFERENCE_NODE?Array.prototype.reduce.call(n.childNodes,function(e,t){return e+=t.nodeValue||t},""):n.nodeValue}return e},set nodeValue(e){if(this._readonly)throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);this._childNodes._resetTo([this._ownerDocument.createTextNode(e)]),this._modified(),this._specified=!0;var t=this._nodeValue;this._nodeValue=e,this._ownerElement&&this._ownerElement._attrModified(this._name,e,t)},get name(){return this._name},get specified(){return this._specified},get value(){return this.nodeValue},set value(e){this.nodeValue=e},get parentNode(){return null},get attributes(){return null},insertBefore:function(e,t){if(e.nodeType===CDATA_SECTION_NODE||e.nodeType===ELEMENT_NODE)throw new core.DOMException(HIERARCHY_REQUEST_ERR);return core.Node.prototype.insertBefore.call(this,e,t)},appendChild:function(e){if(e.nodeType===CDATA_SECTION_NODE||e.nodeType===ELEMENT_NODE)throw new core.DOMException(HIERARCHY_REQUEST_ERR);return core.Node.prototype.appendChild.call(this,e)}},core.Attr.prototype.__proto__=core.Node.prototype,core.Text=function(e,t,o){core.CharacterData.call(this,e,t),this._nodeName="#text",this._readonly=!!o},core.Text.prototype={nodeType:TEXT_NODE,get attributes(){return null},splitText:function(e){if(this._readonly)throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);if(e<0||e>this._nodeValue.length)throw new core.DOMException(INDEX_SIZE_ERR);var t=this._nodeValue.substring(e);this._nodeValue=this._nodeValue.substring(0,e);var o=this._ownerDocument.createTextNode(t);return this._parentNode.lastChild===this?this._parentNode.appendChild(o):this._parentNode.insertBefore(o,this.nextSibling),o},toString:function(){return this.nodeName}},core.Text.prototype.__proto__=core.CharacterData.prototype,core.Comment=function(e,t){core.Text.call(this,e,t),this._nodeName="#comment",this._tagName="#comment"},core.Comment.prototype={nodeType:COMMENT_NODE},core.Comment.prototype.__proto__=core.Text.prototype,core.CDATASection=function(e,t){core.Text.call(this,e,t),this._nodeName="#cdata-section"},core.CDATASection.prototype={nodeType:CDATA_SECTION_NODE},core.CDATASection.prototype.__proto__=core.Text.prototype,core.DocumentType=function(e,t,o,n,i){core.Node.call(this,e),this._name=t,this._tagName=t,this._nodeName=t,this._entities=o||new core.EntityNodeMap(e),this._notations=n||new core.NotationNodeMap(e),core.markTreeReadonly(this._notations),this._attributes=i||new core.AttrNodeMap(e)},core.DocumentType.prototype={nodeType:DOCUMENT_TYPE_NODE,get nodeValue(){return null},set nodeValue(e){},get name(){return this._name},get entities(){return this._entities},get notations(){return this._notations},get attributes(){return null}},core.DocumentType.prototype.__proto__=core.Node.prototype,core.Notation=function(e,t,o,n){core.Node.call(this,e),this._name=t,this._nodeName=t,this._publicId=o||null,this._systemId=n||null,this._nodeValue=null},core.Notation.prototype={nodeType:NOTATION_NODE,get publicId(){return this._publicId},get systemId(){return this._systemId},get name(){return this._name||this._nodeName},get attributes(){return null},set nodeValue(e){},get nodeValue(){return this._nodeValue}},core.Notation.prototype.__proto__=core.Node.prototype,core.Entity=function(e,t){core.Node.call(this,e),this._name=t,this._nodeName=t,this._tagName=t,this._publicId=null,this._systemId=null,this._notationName=null,this._readonly=!0},core.Entity.prototype={nodeType:ENTITY_NODE,get nodeValue(){return null},set nodeValue(e){this._readonly===!0},get name(){return this._name},get publicId(){return this._publicId},get systemId(){return this._systemId},set publicId(e){this._publicId=e},set systemId(e){this._systemId=e},set notationName(e){this._notationName=e},get notationName(){return this._notationName},get attributes(){return null}},core.Entity.prototype.__proto__=core.Node.prototype,core.EntityReference=function(e,t){core.Node.call(this,e),this._entity=t,this._nodeName=t?t.name:null,this._readonly=!0},core.EntityReference.prototype={nodeType:ENTITY_REFERENCE_NODE,get nodeValue(){return this._entity?this._entity.nodeValue:null},set nodeValue(e){this._readonly===!0},get attributes(){return null},get nodeName(){return this._entityName},get firstChild(){return this._entity.firstChild||null},get childNodes(){return this._entity.childNodes},get lastChild(){return this._entity.lastChild||null}},core.EntityReference.prototype.__proto__=core.Node.prototype,exports.dom={level1:{core:core}};