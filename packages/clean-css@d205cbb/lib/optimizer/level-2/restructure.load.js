montageDefine("d205cbb","lib/optimizer/level-2/restructure",{dependencies:["./reorderable","./extract-properties","./is-mergeable","./tidy-rule-duplicates","../../tokenizer/token","../../utils/clone-array","../../writer/one-time","../../writer/one-time"],factory:function(e,r,t){function n(e,r){return e>r?1:-1}function i(e,r){var t=c(e);return t[5]=t[5].concat(r[5]),t}function o(e,r){function t(e,r,t){for(var n=t.length-1;n>=0;n--){var i=t[n][0],l=o(r,i);if(_[l].length>1&&L(e,_[l])){c(l);break}}}function o(e,r){var t=v(r);return _[t]=_[t]||[],_[t].push([e,r]),t}function c(e){var r,t=e.split(S),n=[];for(var i in _){var o=i.split(S);for(r=o.length-1;r>=0;r--)if(t.indexOf(o[r])>-1){n.push(i);break}}for(r=n.length-1;r>=0;r--)delete _[n[r]]}function v(e){for(var r=[],t=0,n=e.length;t<n;t++)r.push(g(e[t][1]));return r.join(S)}function p(e){for(var r=[],t=[],n=e.length-1;n>=0;n--)a(g(e[n][1]),T,U,A)&&(t.unshift(e[n]),e[n][2].length>0&&r.indexOf(e[n])==-1&&r.push(e[n]));return r.length>1?t:[]}function d(e,r){var n=r[0],i=r[1],o=r[4],l=n.length+i.length+1,f=[],a=[],h=p(M[o]);if(!(h.length<2)){var c=m(h,l,1),s=c[0];if(s[1]>0)return t(e,r,c);for(var g=s[0].length-1;g>=0;g--)f=s[0][g][1].concat(f),a.unshift(s[0][g]);f=u(f),O(e,[r],f,a)}}function b(e,r){return e[1]>r[1]?1:e[1]==r[1]?0:-1}function m(e,r,t){var n=x(e,r,t,N-1);return n.sort(b)}function x(e,r,t,n){var i=[[e,y(e,r,t)]];if(e.length>2&&n>0)for(var o=e.length-1;o>=0;o--){var l=Array.prototype.slice.call(e,0);l.splice(o,1),i=i.concat(x(l,r,t,n-1))}return i}function y(e,r,t){for(var n=0,i=e.length-1;i>=0;i--)n+=e[i][2].length>t?g(e[i][1]).length:-1;return n-(e.length-1)*r+1}function O(r,t,n,i){var o,l,f,a,u=[];for(o=i.length-1;o>=0;o--){var c=i[o];for(l=c[2].length-1;l>=0;l--){var g=c[2][l];for(f=0,a=t.length;f<a;f++){var v=t[f],p=g[1][1],d=v[0],b=v[4];if(p==d&&s([g])==b){c[2].splice(l,1);break}}}}for(o=t.length-1;o>=0;o--)u.unshift(t[o][3]);var m=[h.RULE,n,u];e.splice(r,0,m)}function k(e,r){var t=r[4],n=M[t];n&&n.length>1&&(E(e,r)||d(e,r))}function E(e,r){var t,n,i=[],o=[],l=r[4],f=p(M[l]);if(!(f.length<2)){e:for(var a in M){var u=M[a];for(t=f.length-1;t>=0;t--)if(u.indexOf(f[t])==-1)continue e;i.push(a)}if(i.length<2)return!1;for(t=i.length-1;t>=0;t--)for(n=P.length-1;n>=0;n--)if(P[n][4]==i[t]){o.unshift([P[n],f]);break}return L(e,o)}}function L(e,r){for(var t,n=0,i=[],o=r.length-1;o>=0;o--){t=r[o][0];var l=t[4];n+=l.length+(o>0?1:0),i.push(t)}var f=r[0][1],a=m(f,n,i.length)[0];if(a[1]>0)return!1;var h=[],c=[];for(o=a[0].length-1;o>=0;o--)h=a[0][o][1].concat(h),c.unshift(a[0][o]);for(h=u(h),O(e,i,h,c),o=i.length-1;o>=0;o--){t=i[o];var s=P.indexOf(t);delete M[t[4]],s>-1&&D.indexOf(s)==-1&&D.push(s)}return!0}function R(e,r,t){var n=e[0],i=r[0];if(n!=i)return!1;var o=r[4],l=M[o];return l&&l.indexOf(t)>-1}for(var w=r.options,T=w.compatibility.selectors.mergeablePseudoClasses,U=w.compatibility.selectors.mergeablePseudoElements,z=w.compatibility.selectors.mergeLimit,A=w.compatibility.selectors.multiplePseudoMerging,C=r.cache.specificity,M={},P=[],_={},D=[],N=2,S="%",j=e.length-1;j>=0;j--){var B,K,q,F,G,H=e[j];if(H[0]==h.RULE)B=!0;else{if(H[0]!=h.NESTED_BLOCK)continue;B=!1}var I=P.length,J=f(H);D=[];var Q=[];for(K=J.length-1;K>=0;K--)for(q=K-1;q>=0;q--)if(!l(J[K],J[q],C)){Q.push(K);break}for(K=J.length-1;K>=0;K--){var V=J[K],W=!1;for(q=0;q<I;q++){var X=P[q];D.indexOf(q)==-1&&(!l(V,X,C)&&!R(V,X,H)||M[X[4]]&&M[X[4]].length===z)&&(k(j+1,X,H),D.indexOf(q)==-1&&(D.push(q),delete M[X[4]])),W||(W=V[0]==X[0]&&V[1]==X[1],W&&(G=q))}if(B&&!(Q.indexOf(K)>-1)){var Y=V[4];W&&P[G][5].length+V[5].length>z?(k(j+1,P[G]),P.splice(G,1),M[Y]=[H],W=!1):(M[Y]=M[Y]||[],M[Y].push(H)),W?P[G]=i(P[G],V):P.push(V)}}for(D=D.sort(n),K=0,F=D.length;K<F;K++){var Z=D[K]-K;P.splice(Z,1)}}for(var $=e[0]&&e[0][0]==h.AT_RULE&&0===e[0][1].indexOf("@charset")?1:0;$<e.length-1;$++){var ee=e[$][0]===h.AT_RULE&&0===e[$][1].indexOf("@import"),re=e[$][0]===h.COMMENT;if(!ee&&!re)break}for(j=0;j<P.length;j++)k($,P[j])}var l=e("./reorderable").canReorderSingle,f=e("./extract-properties"),a=e("./is-mergeable"),u=e("./tidy-rule-duplicates"),h=e("../../tokenizer/token"),c=e("../../utils/clone-array"),s=e("../../writer/one-time").body,g=e("../../writer/one-time").rules;t.exports=o}});