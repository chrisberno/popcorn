montageDefine("d205cbb","lib/optimizer/level-2/properties/every-values-pair",{dependencies:["../../../tokenizer/marker"],factory:function(e,r,a){function n(e,r,a){var n,i,l,u=r.value.length,v=a.value.length,o=Math.max(u,v),f=Math.min(u,v)-1;for(l=0;l<o;l++)if(n=r.value[l]&&r.value[l][1]||n,i=a.value[l]&&a.value[l][1]||i,n!=t.COMMA&&i!=t.COMMA&&!e(n,i,l,l<=f))return!1;return!0}var t=e("../../../tokenizer/marker");a.exports=n}});