montageDefine("6d948bc","test/short",{dependencies:["../","tape"],factory:function(o,e,a){var t=o("../"),s=o("tape");s("numeric short args",function(o){o.plan(2),o.deepEqual(t(["-n123"]),{n:123,_:[]}),o.deepEqual(t(["-123","456"]),{1:!0,2:!0,3:456,_:[]})}),s("short",function(o){o.deepEqual(t(["-b"]),{b:!0,_:[]},"short boolean"),o.deepEqual(t(["foo","bar","baz"]),{_:["foo","bar","baz"]},"bare"),o.deepEqual(t(["-cats"]),{c:!0,a:!0,t:!0,s:!0,_:[]},"group"),o.deepEqual(t(["-cats","meow"]),{c:!0,a:!0,t:!0,s:"meow",_:[]},"short group next"),o.deepEqual(t(["-h","localhost"]),{h:"localhost",_:[]},"short capture"),o.deepEqual(t(["-h","localhost","-p","555"]),{h:"localhost",p:555,_:[]},"short captures"),o.end()}),s("mixed short bool and capture",function(o){o.same(t(["-h","localhost","-fp","555","script.js"]),{f:!0,p:555,h:"localhost",_:["script.js"]}),o.end()}),s("short and long",function(o){o.deepEqual(t(["-h","localhost","-fp","555","script.js"]),{f:!0,p:555,h:"localhost",_:["script.js"]}),o.end()})}});