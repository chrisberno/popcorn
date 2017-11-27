montageDefine("be0bc6a","test/cliui",{dependencies:["chai","../"],factory:function(i,t,a){i("chai").should();var e=i("../");describe("cliui",function(){describe("div",function(){it("wraps text at 'width' if a single column is given",function(){var i=e({width:10});i.div("i am a string that should be wrapped"),i.toString().split("\n").forEach(function(i){i.length.should.be.lte(10)})}),it("evenly divides text across columns if multiple columns are given",function(){var i=e({width:40});i.div({text:"i am a string that should be wrapped",width:15},"i am a second string that should be wrapped","i am a third string that should be wrapped"),i.toString().split("\n").forEach(function(i){i.length.should.be.lte(40)});var t=["i am a string  i am a      i am a third","that should be second      string that","wrapped        string that should be","               should be   wrapped","               wrapped"];i.toString().split("\n").should.eql(t)}),it("allows for a blank row to be appended",function(){var i=e({width:40});i.div();var t=[""];i.toString().split("\n").should.eql(t)})}),describe("_columnWidths",function(){it("uses same width for each column by default",function(){var i=e({width:40}),t=i._columnWidths([{},{},{}]);t[0].should.equal(13),t[1].should.equal(13),t[2].should.equal(13)}),it("divides width over remaining columns if first column has width specified",function(){var i=e({width:40}),t=i._columnWidths([{width:20},{},{}]);t[0].should.equal(20),t[1].should.equal(10),t[2].should.equal(10)}),it("divides width over remaining columns if middle column has width specified",function(){var i=e({width:40}),t=i._columnWidths([{},{width:10},{}]);t[0].should.equal(15),t[1].should.equal(10),t[2].should.equal(15)}),it("keeps track of remaining width if multiple columns have width specified",function(){var i=e({width:40}),t=i._columnWidths([{width:20},{width:12},{}]);t[0].should.equal(20),t[1].should.equal(12),t[2].should.equal(8)}),it("uses a sane default if impossible widths are specified",function(){var i=e({width:40}),t=i._columnWidths([{width:30},{width:30},{padding:[0,2,0,1]}]);t[0].should.equal(30),t[1].should.equal(30),t[2].should.equal(4)})}),describe("alignment",function(){it("allows a column to be right aligned",function(){var i=e({width:40});i.div("i am a string",{text:"i am a second string",align:"right"},"i am a third string that should be wrapped");var t=["i am a stringi am a secondi am a third","                    stringstring that","                          should be","                          wrapped"];i.toString().split("\n").should.eql(t)}),it("allows a column to be center aligned",function(){var i=e({width:60});i.div("i am a string",{text:"i am a second string",align:"center",padding:[0,2,0,2]},"i am a third string that should be wrapped");var t=["i am a string          i am a second       i am a third string","                           string          that should be","                                           wrapped"];i.toString().split("\n").should.eql(t)})}),describe("padding",function(){it("handles left/right padding",function(){var i=e({width:40});i.div({text:"i have padding on my left",padding:[0,0,0,4]},{text:"i have padding on my right",padding:[0,2,0,0],align:"center"},{text:"i have no padding",padding:[0,0,0,0]});var t=["    i have     i have      i have no","    padding  padding on    padding","    on my     my right","    left"];i.toString().split("\n").should.eql(t)}),it("handles top/bottom padding",function(){var i=e({width:40});i.div("i am a string",{text:"i am a second string",padding:[2,0,0,0]},{text:"i am a third string that should be wrapped",padding:[0,0,1,0]});var t=["i am a string             i am a third","                          string that","             i am a secondshould be","             string       wrapped",""];i.toString().split("\n").should.eql(t)})}),describe("wrap",function(){it("allows wordwrap to be disabled",function(){var i=e({wrap:!1});i.div({text:"i am a string",padding:[0,1,0,0]},{text:"i am a second string",padding:[0,2,0,0]},{text:"i am a third string that should not be wrapped",padding:[0,0,0,2]}),i.toString().should.equal("i am a string i am a second string    i am a third string that should not be wrapped")})}),describe("span",function(){it("appends the next row to the end of the prior row if it fits",function(){var i=e({width:40});i.span({text:"i am a string that will be wrapped",width:30}),i.div({text:" [required] [default: 99]",align:"right"});var t=["i am a string that will be","wrapped         [required] [default: 99]"];i.toString().split("\n").should.eql(t)}),it("does not append the string if it does not fit on the prior row",function(){var i=e({width:40});i.span({text:"i am a string that will be wrapped",width:30}),i.div({text:"i am a second row",align:"left"});var t=["i am a string that will be","wrapped","i am a second row"];i.toString().split("\n").should.eql(t)}),it("always appends text to prior span if wrap is disabled",function(){var i=e({wrap:!1,width:40});i.span({text:"i am a string that will be wrapped",width:30}),i.div({text:"i am a second row",align:"left",padding:[0,0,0,3]}),i.div("a third line");var t=["i am a string that will be wrapped   i am a second row","a third line"];i.toString().split("\n").should.eql(t)})}),describe("layoutDSL",function(){it("turns tab into multiple columns",function(){var i=e({width:60});i.div("  <regex>  \tmy awesome regex\n  <my second thing>  \tanother row\t  a third column");var t=["  <regex>            my awesome regex","  <my second thing>  another row          a third column"];i.toString().split("\n").should.eql(t)}),it("turns newline into multiple rows",function(){var i=e({width:40});i.div("Usage: $0\n  <regex>\t  my awesome regex\n  <glob>\t  my awesome glob\t  [required]");var t=["Usage: $0","  <regex>  my awesome regex","  <glob>   my awesome     [required]","           glob"];i.toString().split("\n").should.eql(t)}),it("does not apply DSL if wrap is false",function(){var i=e({width:40,wrap:!1});i.div("Usage: $0\ttwo\tthree"),i.toString().should.eql("Usage: $0\ttwo\tthree")})})})}});