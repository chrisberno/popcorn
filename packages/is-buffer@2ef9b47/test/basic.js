var isBuffer=require("../"),test=require("tape");test("is-buffer",function(f){f.equal(isBuffer(Buffer.alloc(4)),!0,"new Buffer(4)"),f.equal(isBuffer(Buffer.allocUnsafeSlow(100)),!0,"SlowBuffer(100)"),f.equal(isBuffer(void 0),!1,"undefined"),f.equal(isBuffer(null),!1,"null"),f.equal(isBuffer(""),!1,"empty string"),f.equal(isBuffer(!0),!1,"true"),f.equal(isBuffer(!1),!1,"false"),f.equal(isBuffer(0),!1,"0"),f.equal(isBuffer(1),!1,"1"),f.equal(isBuffer(1),!1,"1.0"),f.equal(isBuffer("string"),!1,"string"),f.equal(isBuffer({}),!1,"{}"),f.equal(isBuffer([]),!1,"[]"),f.equal(isBuffer(function(){}),!1,"function foo () {}"),f.equal(isBuffer({isBuffer:null}),!1,"{ isBuffer: null }"),f.equal(isBuffer({isBuffer:function(){throw new Error}}),!1,"{ isBuffer: function () { throw new Error() } }"),f.end()});