montageDefine("fc77de5","examples/cat",{dependencies:["cli"],factory:function(t,n,e){var i=t("cli"),a=function(t){i.withInput(t,function(t,n,e){e?i.args.length&&a(i.args.shift()):i.output(t+n)})};i.args.length&&a(i.args.shift())}});