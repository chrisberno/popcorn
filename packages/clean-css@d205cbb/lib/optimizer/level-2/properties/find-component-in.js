function findComponentIn(n,o){var e=nameComparator(o);return findInDirectComponents(n,e)||findInSubComponents(n,e)}function nameComparator(n){return function(o){return n.name===o.name}}function findInDirectComponents(n,o){return n.components.filter(o)[0]}function findInSubComponents(n,o){var e,t,r,m;if(compactable[n.name].shorthandComponents)for(r=0,m=n.components.length;r<m;r++)if(e=n.components[r],t=findInDirectComponents(e,o))return t}var compactable=require("../compactable");module.exports=findComponentIn;