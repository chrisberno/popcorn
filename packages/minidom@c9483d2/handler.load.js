montageDefine("c9483d2","handler",{dependencies:["./lib/domtohtml"],factory:function(e,t,n){function r(e){this.dom=e,this.document=null,this._quirksMode=!1,this._reset=!1}var o=e("./lib/domtohtml").domToHtml,i={contentType:"text/html"};n.exports=r,r.prototype={createDocument:function(){var e=this.document=new this.dom.Document(i);return e},createDocumentFragment:function(){return this.document.createDocumentFragment()},createElement:function(e,t,n){var r=this.document.createElement(e.toUpperCase());return Object.defineProperty(r,"namespaceURI",{configurable:!0,enumerable:!0,writable:!1,value:t}),this.adoptAttributes(r,n),r},createCommentNode:function(e){return this.document.createComment(e)},createTextNode:function(e){return this.document.createTextNode(e)},setDocumentType:function(e,t,n,r){var i=this.document.doctype;i||(i=new this.dom.DocumentType(e),e.doctype=i,this.document.appendChild(i)),i._name=t,Object.defineProperties(i,{publicId:{configurable:!0,enumerable:!0,writable:!1,value:n},systemId:{configurable:!0,enumerable:!0,writable:!1,value:r},toString:{configurable:!0,enumerable:!1,writable:!0,value:function(){return o(this)}}})},setQuirksMode:function(e){if(e!==this.document)throw new Error("Given document does not match handler document");this._quirksMode=!0},isQuirksMode:function(e){if(e!==this.document)throw new Error("Given document does not match handler document");return this._quirksMode},appendChild:function(e,t){e.appendChild(t)},insertBefore:function(e,t,n){e.insertBefore(t,n)},detachNode:function(e){e.parentNode&&e.parentNode.removeChild(e)},insertText:function(e,t){var n=this.document,r=e.lastChild;r&&r.nodeType===n.TEXT_NODE?r.nodeValue+=t:e.appendChild(n.createTextNode(t))},insertTextBefore:function(e,t,n){var r=this.document;n.nodeType===r.TEXT_NODE?n.nodeValue=t+n.nodeValue:e.insertBefore(r.createTextNode(t),n)},adoptAttributes:function(e,t){if(t)for(var n=0,r=t.length;n<r;n++){var o=t[n];"string"==typeof o.prefix&&o.prefix.length>0&&(o.name=o.prefix+":"+o.name),null===e.getAttribute(o.name)&&e.setAttribute(o.name,o.value)}},getFirstChild:function(e){return e.firstChild},getParentNode:function(e){return e.parentNode},getAttrList:function(e){for(var t=[],n=e.attributes,r=0,o=n.length;r<o;r++)t.push({name:n[r].name,value:n[r].value});return t},getTagName:function(e){return e.tagName.toLowerCase()},getNamespaceURI:function(e){return e.namespaceURI}}}});