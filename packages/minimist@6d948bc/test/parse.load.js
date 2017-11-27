montageDefine("6d948bc","test/parse",{dependencies:["../","tape"],factory:function(e,a,o){var s=e("../"),t=e("tape");t("parse args",function(e){e.deepEqual(s(["--no-moo"]),{moo:!1,_:[]},"no"),e.deepEqual(s(["-v","a","-v","b","-v","c"]),{v:["a","b","c"],_:[]},"multi"),e.end()}),t("comprehensive",function(e){e.deepEqual(s(["--name=meowmers","bare","-cats","woo","-h","awesome","--multi=quux","--key","value","-b","--bool","--no-meep","--multi=baz","--","--not-a-flag","eek"]),{c:!0,a:!0,t:!0,s:"woo",h:"awesome",b:!0,bool:!0,key:"value",multi:["quux","baz"],meep:!1,name:"meowmers",_:["bare","--not-a-flag","eek"]}),e.end()}),t("flag boolean",function(e){var a=s(["-t","moo"],{"boolean":"t"});e.deepEqual(a,{t:!0,_:["moo"]}),e.deepEqual(typeof a.t,"boolean"),e.end()}),t("flag boolean value",function(e){var a=s(["--verbose","false","moo","-t","true"],{"boolean":["t","verbose"],"default":{verbose:!0}});e.deepEqual(a,{verbose:!1,t:!0,_:["moo"]}),e.deepEqual(typeof a.verbose,"boolean"),e.deepEqual(typeof a.t,"boolean"),e.end()}),t("newlines in params",function(e){var a=s(["-s","X\nX"]);e.deepEqual(a,{_:[],s:"X\nX"}),a=s(["--s=X\nX"]),e.deepEqual(a,{_:[],s:"X\nX"}),e.end()}),t("strings",function(e){var a=s(["-s","0001234"],{string:"s"}).s;e.equal(a,"0001234"),e.equal(typeof a,"string");var o=s(["-x","56"],{string:"x"}).x;e.equal(o,"56"),e.equal(typeof o,"string"),e.end()}),t("stringArgs",function(e){var a=s(["  ","  "],{string:"_"})._;e.same(a.length,2),e.same(typeof a[0],"string"),e.same(a[0],"  "),e.same(typeof a[1],"string"),e.same(a[1],"  "),e.end()}),t("empty strings",function(e){var a=s(["-s"],{string:"s"}).s;e.equal(a,""),e.equal(typeof a,"string");var o=s(["--str"],{string:"str"}).str;e.equal(o,""),e.equal(typeof o,"string");var t=s(["-art"],{string:["a","t"]});e.equal(t.a,""),e.equal(t.r,!0),e.equal(t.t,""),e.end()}),t("string and alias",function(e){var a=s(["--str","000123"],{string:"s",alias:{s:"str"}});e.equal(a.str,"000123"),e.equal(typeof a.str,"string"),e.equal(a.s,"000123"),e.equal(typeof a.s,"string");var o=s(["-s","000123"],{string:"str",alias:{str:"s"}});e.equal(o.str,"000123"),e.equal(typeof o.str,"string"),e.equal(o.s,"000123"),e.equal(typeof o.s,"string"),e.end()}),t("slashBreak",function(e){e.same(s(["-I/foo/bar/baz"]),{I:"/foo/bar/baz",_:[]}),e.same(s(["-xyz/foo/bar/baz"]),{x:!0,y:!0,z:"/foo/bar/baz",_:[]}),e.end()}),t("alias",function(e){var a=s(["-f","11","--zoom","55"],{alias:{z:"zoom"}});e.equal(a.zoom,55),e.equal(a.z,a.zoom),e.equal(a.f,11),e.end()}),t("multiAlias",function(e){var a=s(["-f","11","--zoom","55"],{alias:{z:["zm","zoom"]}});e.equal(a.zoom,55),e.equal(a.z,a.zoom),e.equal(a.z,a.zm),e.equal(a.f,11),e.end()}),t("nested dotted objects",function(e){var a=s(["--foo.bar","3","--foo.baz","4","--foo.quux.quibble","5","--foo.quux.o_O","--beep.boop"]);e.same(a.foo,{bar:3,baz:4,quux:{quibble:5,o_O:!0}}),e.same(a.beep,{boop:!0}),e.end()})}});