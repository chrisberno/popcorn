function isComponentOf(n,o,e){return isDirectComponentOf(n,o)||!e&&!!compactable[n.name].shorthandComponents&&isSubComponentOf(n,o)}function isDirectComponentOf(n,o){var e=compactable[n.name];return"components"in e&&e.components.indexOf(o.name)>-1}function isSubComponentOf(n,o){return n.components.some(function(n){return isDirectComponentOf(n,o)})}var compactable=require("../compactable");module.exports=isComponentOf;