montageDefine("aa4df19","lib/tree_serialization/tree_serializer",{dependencies:["../tree_adapters/default","../common/html"],factory:function(e,t,i){"use strict";function r(e,t){return e=e.replace(o,"&amp;").replace(m,"&nbsp;"),e=t?e.replace(d,"&quot;"):e.replace(p,"&lt;").replace(A,"&gt;")}function s(e){var t=e.indexOf('"')!==-1?"'":'"';return t+e+t}var a=e("../tree_adapters/default"),h=e("../common/html"),n=h.TAG_NAMES,l=h.NAMESPACES,o=/&/g,m=/\u00a0/g,d=/"/g,p=/</g,A=/>/g,N=i.exports=function(e){this.treeAdapter=e||a};N.prototype.serialize=function(e){return this.html="",this._serializeChildNodes(e),this.html},N.prototype._serializeChildNodes=function(e){var t=this.treeAdapter.getChildNodes(e);if(t)for(var i=0,r=t.length;i<r;i++){var s=t[i];this.treeAdapter.isElementNode(s)?this._serializeElement(s):this.treeAdapter.isTextNode(s)?this._serializeTextNode(s):this.treeAdapter.isCommentNode(s)?this._serializeCommentNode(s):this.treeAdapter.isDocumentTypeNode(s)&&this._serializeDocumentTypeNode(s)}},N.prototype._serializeElement=function(e){var t=this.treeAdapter.getTagName(e),i=this.treeAdapter.getNamespaceURI(e),r=i===l.HTML||i===l.SVG||i===l.MATHML?t:i+":"+t;if(this.html+="<"+r,this._serializeAttributes(e),this.html+=">",t!==n.AREA&&t!==n.BASE&&t!==n.BASEFONT&&t!==n.BGSOUND&&t!==n.BR&&t!==n.BR&&t!==n.COL&&t!==n.EMBED&&t!==n.FRAME&&t!==n.HR&&t!==n.IMG&&t!==n.INPUT&&t!==n.KEYGEN&&t!==n.LINK&&t!==n.MENUITEM&&t!==n.META&&t!==n.PARAM&&t!==n.SOURCE&&t!==n.TRACK&&t!==n.WBR){if(t===n.PRE||t===n.TEXTAREA||t===n.LISTING){var s=this.treeAdapter.getFirstChild(e);if(s&&this.treeAdapter.isTextNode(s)){var a=this.treeAdapter.getTextNodeContent(s);"\n"===a[0]&&(this.html+="\n")}}this._serializeChildNodes(e),this.html+="</"+r+">"}},N.prototype._serializeAttributes=function(e){for(var t=this.treeAdapter.getAttrList(e),i=0,s=t.length;i<s;i++){var a=t[i];this.html+=" ",a.namespace?a.namespace===l.XML?this.html+="xml:"+a.name:a.namespace===l.XMLNS?("xmlns"!==a.name&&(this.html+="xmlns:"),this.html+=a.name):a.namespace===l.XLINK?this.html+="xlink:"+a.name:this.html+=a.namespace+":"+a.name:this.html+=a.name,this.html+='="'+r(a.value,!0)+'"'}},N.prototype._serializeTextNode=function(e){var t=this.treeAdapter.getParentNode(e),i=t&&this.treeAdapter.getTagName(t),s=this.treeAdapter.getTextNodeContent(e);i===n.STYLE||i===n.SCRIPT||i===n.XMP||i===n.IFRAME||i===n.NOEMBED||i===n.NOFRAMES||i===n.PLAINTEXT||i===n.NOSCRIPT?this.html+=s:this.html+=r(s,!1)},N.prototype._serializeCommentNode=function(e){this.html+="<!--"+this.treeAdapter.getCommentNodeContent(e)+"-->"},N.prototype._serializeDocumentTypeNode=function(e){var t=this.treeAdapter.getDocumentTypeNodeName(e),i=this.treeAdapter.getDocumentTypeNodePublicId(e),r=this.treeAdapter.getDocumentTypeNodeSystemId(e);this.html+="<!DOCTYPE "+t,null!==i?this.html+=" PUBLIC "+s(i):null!==r&&(this.html+=" SYSTEM"),null!==r&&(this.html+=" "+s(r)),this.html+=">"}}});