montageDefine("891a5ba","core/converter/snake-case-converter",{dependencies:["./converter","lodash.snakecase"],factory:function(e,n,r){var t,o=e("./converter").Converter,c=e("lodash.snakecase"),a=n.SnakeCaseConverter=o.specialize({constructor:{value:function(){return this.constructor===a?(t||(t=this),t):this}},convert:{value:c}});Object.defineProperty(n,"singleton",{get:function(){return t||(t=new a),t}})}});