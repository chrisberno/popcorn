montageDefine("d205cbb","lib/optimizer/level-2/properties/override-properties",{dependencies:["./has-inherit","./every-values-pair","./find-component-in","./is-component-of","./is-mergeable-shorthand","./overrides-non-component-shorthand","./vendor-prefixes","../compactable","../clone","../clone","../restore-with-components","../clone","../../restore-from-optimizing","../../../tokenizer/token","../../../tokenizer/marker","../../../writer/one-time"],factory:function(n,e,t){function i(n,e){for(var t=0;t<n.components.length;t++){var i=n.components[t],o=T[i.name],r=o&&o.canOverride||r.sameValue,u=C(i);if(u.value=[[_.PROPERTY_VALUE,o.defaultValue]],!R(r.bind(null,e),u,i))return!0}return!1}function o(n,e){e.unused=!0,c(e,s(n)),n.value=e.value}function r(n,e){e.unused=!0,n.multiplex=!0,n.value=e.value}function u(n,e){e.unused=!0,n.value=e.value}function a(n,e){e.multiplex?r(n,e):n.multiplex?o(n,e):u(n,e)}function l(n,e){e.unused=!0;for(var t=0,i=n.components.length;t<i;t++)a(n.components[t],e.components[t],n.multiplex)}function c(n,e){n.multiplex=!0,T[n.name].shorthand?m(n,e):p(n,e)}function m(n,e){var t,i,o;for(i=0,o=n.components.length;i<o;i++)t=n.components[i],t.multiplex||p(t,e)}function p(n,e){for(var t,i="real"==T[n.name].intoMultiplexMode,o=i?n.value.slice(0):T[n.name].defaultValue,r=s(n),u=o.length;r<e;r++)if(n.value.push([_.PROPERTY_VALUE,L.COMMA]),Array.isArray(o))for(t=0;t<u;t++)n.value.push(i?o[t]:[_.PROPERTY_VALUE,o[t]]);else n.value.push(i?o:[_.PROPERTY_VALUE,o])}function s(n){for(var e=0,t=0,i=n.value.length;t<i;t++)n.value[t][1]==L.COMMA&&e++;return e+1}function f(n){var e=[_.PROPERTY,[_.PROPERTY_NAME,n.name]].concat(n.value);return F([e],0).length}function d(n,e,t){for(var i=0,o=e;o>=0&&(n[o].name!=t||n[o].unused||i++,!(i>1));o--);return i>1}function h(n,e){for(var t=0,i=n.components.length;t<i;t++)if(!v(e.isUrl,n.components[t])&&v(e.isFunction,n.components[t]))return!0;return!1}function v(n,e){for(var t=0,i=e.value.length;t<i;t++)if(e.value[t][1]!=L.COMMA&&n(e.value[t][1]))return!0;return!1}function g(n,e){if(!n.multiplex&&!e.multiplex||n.multiplex&&e.multiplex)return!1;var t,i=n.multiplex?n:e,u=n.multiplex?e:n,a=Y(i);U([a],w);var l=Y(u);U([l],w);var m=f(a)+1+f(l);n.multiplex?(t=A(a,l),o(t,l)):(t=A(l,a),c(l,s(a)),r(t,a)),U([l],w);var p=f(l);return m<=p}function k(n){return n.name in T}function b(n,e){return!n.multiplex&&("background"==n.name||"background-image"==n.name)&&e.multiplex&&("background"==e.name||"background-image"==e.name)&&x(e.value)}function x(n){for(var e=O(n),t=0,i=e.length;t<i;t++)if(1==e[t].length&&"none"==e[t][0][1])return!0;return!1}function O(n){for(var e=[],t=0,i=[],o=n.length;t<o;t++){var r=n[t];r[1]==L.COMMA?(e.push(i),i=[]):i.push(r)}return e.push(i),e}function M(n,e,t,o){var r,u,m,p,f,x,O,M,Y,w,C;n:for(Y=n.length-1;Y>=0;Y--)if(u=n[Y],k(u)&&!u.block){r=T[u.name].canOverride;e:for(w=Y-1;w>=0;w--)if(m=n[w],k(m)&&!m.block&&!m.unused&&!u.unused&&(!m.hack||u.hack||u.important)&&(m.hack||m.important||!u.hack)&&(m.important!=u.important||m.hack[0]==u.hack[0])&&!(m.important==u.important&&(m.hack[0]!=u.hack[0]||m.hack[1]&&m.hack[1]!=u.hack[1])||P(u)||b(m,u)))if(u.shorthand&&E(u,m)){if(!u.important&&m.important)continue;if(!V([m],u.components))continue;if(!v(o.isFunction,m)&&h(u,o))continue;if(!y(u)){m.unused=!0;continue}p=A(u,m),r=T[m.name].canOverride,R(r.bind(null,o),m,p)&&(m.unused=!0)}else if(u.shorthand&&z(u,m)){if(!u.important&&m.important)continue;if(!V([m],u.components))continue;if(!v(o.isFunction,m)&&h(u,o))continue;for(f=m.shorthand?m.components:[m],C=f.length-1;C>=0;C--)if(x=f[C],O=A(u,x),r=T[x.name].canOverride,!R(r.bind(null,o),m,O))continue e;m.unused=!0}else if(e&&m.shorthand&&!u.shorthand&&E(m,u,!0)){if(u.important&&!m.important)continue;if(!u.important&&m.important){u.unused=!0;continue}if(d(n,Y-1,m.name))continue;if(h(m,o))continue;if(!y(m))continue;if(p=A(m,u),R(r.bind(null,o),p,u)){var U=!t.properties.backgroundClipMerging&&p.name.indexOf("background-clip")>-1||!t.properties.backgroundOriginMerging&&p.name.indexOf("background-origin")>-1||!t.properties.backgroundSizeMerging&&p.name.indexOf("background-size")>-1,_=T[u.name].nonMergeableValue===u.value[0][1];if(U||_)continue;if(!t.properties.merging&&i(m,o))continue;if(p.value[0][1]!=u.value[0][1]&&(P(m)||P(u)))continue;if(g(m,u))continue;!m.multiplex&&u.multiplex&&c(m,s(u)),a(p,u),m.dirty=!0}}else if(e&&m.shorthand&&u.shorthand&&m.name==u.name){if(!m.multiplex&&u.multiplex)continue;if(!u.important&&m.important){u.unused=!0;continue n}if(u.important&&!m.important){m.unused=!0;continue}if(!y(u)){m.unused=!0;continue}for(C=m.components.length-1;C>=0;C--){var L=m.components[C],F=u.components[C];if(r=T[L.name].canOverride,!R(r.bind(null,o),L,F))continue n}l(m,u),m.dirty=!0}else if(e&&m.shorthand&&u.shorthand&&E(m,u)){if(!m.important&&u.important)continue;if(p=A(m,u),r=T[u.name].canOverride,!R(r.bind(null,o),p,u))continue;if(m.important&&!u.important){u.unused=!0;continue}var D=T[u.name].restore(u,T);if(D.length>1)continue;p=A(m,u),a(p,u),u.dirty=!0}else if(m.name==u.name){if(M=!0,u.shorthand)for(C=u.components.length-1;C>=0&&M;C--)x=m.components[C],O=u.components[C],r=T[O.name].canOverride,M=M&&R(r.bind(null,o),x,O);else r=T[u.name].canOverride,M=R(r.bind(null,o),m,u);if(m.important&&!u.important&&M){u.unused=!0;continue}if(!m.important&&u.important&&M){m.unused=!0;continue}if(!M)continue;m.unused=!0}}}var P=n("./has-inherit"),R=n("./every-values-pair"),A=n("./find-component-in"),E=n("./is-component-of"),y=n("./is-mergeable-shorthand"),z=n("./overrides-non-component-shorthand"),V=n("./vendor-prefixes").same,T=n("../compactable"),Y=n("../clone").deep,Y=n("../clone").deep,w=n("../restore-with-components"),C=n("../clone").shallow,U=n("../../restore-from-optimizing"),_=n("../../../tokenizer/token"),L=n("../../../tokenizer/marker"),F=n("../../../writer/one-time").property;t.exports=M}});