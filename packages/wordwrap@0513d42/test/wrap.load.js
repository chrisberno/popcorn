montageDefine("0513d42","test/wrap",{dependencies:["assert","wordwrap","fs"],factory:function(e,t,n){var s=e("assert"),i=e("wordwrap"),a=e("fs"),l=a.readFileSync(__dirname+"/idleness.txt","utf8");t.stop80=function(){var e=i(80)(l).split(/\n/),t=l.split(/\s+/);e.forEach(function(e){s.ok(e.length<=80,"line > 80 columns");var n=e.match(/\S/)?e.split(/\s+/):[];s.deepEqual(n,t.splice(0,n.length))})},t.start20stop60=function(){var e=i(20,100)(l).split(/\n/),t=l.split(/\s+/);e.forEach(function(e){s.ok(e.length<=100,"line > 100 columns");var n=e.split(/\s+/).filter(function(e){return e.match(/\S/)});s.deepEqual(n,t.splice(0,n.length)),s.deepEqual(e.slice(0,20),new Array(21).join(" "))})}}});