var test=require("tap").test,semver=require("../");test("long version is too long",function(e){var n="1.2."+new Array(256).join("1");e["throws"](function(){new semver.SemVer(n)}),e.equal(semver.valid(n,!1),null),e.equal(semver.valid(n,!0),null),e.equal(semver.inc(n,"patch"),null),e.end()}),test("big number is like too long version",function(e){var n="1.2."+new Array(100).join("1");e["throws"](function(){new semver.SemVer(n)}),e.equal(semver.valid(n,!1),null),e.equal(semver.valid(n,!0),null),e.equal(semver.inc(n,"patch"),null),e.end()}),test("parsing null does not throw",function(e){e.equal(semver.parse(null),null),e.equal(semver.parse({}),null),e.equal(semver.parse(new semver.SemVer("1.2.3")).version,"1.2.3"),e.end()});