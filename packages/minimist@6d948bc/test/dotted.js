var parse=require("../"),test=require("tape");test("dotted alias",function(a){var e=parse(["--a.b","22"],{"default":{"a.b":11},alias:{"a.b":"aa.bb"}});a.equal(e.a.b,22),a.equal(e.aa.bb,22),a.end()}),test("dotted default",function(a){var e=parse("",{"default":{"a.b":11},alias:{"a.b":"aa.bb"}});a.equal(e.a.b,11),a.equal(e.aa.bb,11),a.end()}),test("dotted default with no alias",function(a){var e=parse("",{"default":{"a.b":11}});a.equal(e.a.b,11),a.end()});