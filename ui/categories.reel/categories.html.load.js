montageDefine("ebd6c85","ui/categories.reel/categories.html",{"text":"<!DOCTYPE html><html manifest=../../manifest.appcache><head><title></title><style>.Categories .Categories-button{display:block;position:relative;font-family:Helvetica,Arial,sans-serif;color:#fff;background-color:transparent;margin:0;padding:0;border:none;opacity:.5;height:auto;border-radius:0;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}.Categories .Categories-button:active,.Categories .Categories-button.active,.Categories .Categories-button:focus{background-color:#333;opacity:.6}.Categories .Categories-button:before{content:\"\";position:absolute;width:32px;height:32px;background-image:url(ui/categories.reel/icons.png);background-repeat:no-repeat;background-size:32px 332px}.Categories .Categories-button.in_theaters:before{background-position:0 -100px}.Categories .Categories-button.upcoming:before{background-position:0 -200px}.Categories .Categories-button.rentals:before{background-position:0 -300px}.Categories .Categories-button.selected{opacity:1;background-color:#333}.Categories-strip{position:fixed;background:#000;z-index:2}@media (min-width:501px) and (max-height:660px) and (min-height:501px){.Categories-strip{top:50%;left:50%;margin-top:-248px;margin-left:-244px;background:0 0}.Categories .Categories-button{float:left;margin-left:3px;width:118px;height:40px;padding-bottom:16px;text-align:center;font-size:14px;line-height:24px;border-radius:3px;border:1px solid rgba(255,255,255,.15)}.Categories .Categories-button:before{position:relative;display:inline-block;left:0;top:7px;width:32px;height:24px;background-size:24px 249px}.Categories .Categories-button.in_theaters:before{background-position:0 -75px}.Categories .Categories-button.upcoming:before{background-position:0 -150px}.Categories .Categories-button.rentals:before{background-position:0 -225px}}@media (min-width:501px) and (min-height:660px){.Categories-strip{top:50%;left:50%;margin-top:-228px;margin-left:-242px;background:0 0}.Categories .Categories-button{float:left;margin-left:3px;width:118px;height:40px;padding-bottom:16px;text-align:center;font-size:14px;line-height:24px;border-radius:3px;border:1px solid rgba(255,255,255,.15)}.Categories .Categories-button:before{position:relative;display:inline-block;left:0;top:7px;width:32px;height:24px;background-size:24px 249px}.Categories .Categories-button.in_theaters:before{background-position:0 -75px}.Categories .Categories-button.upcoming:before{background-position:0 -150px}.Categories .Categories-button.rentals:before{background-position:0 -225px}}@media (max-width:500px) and (orientation:portrait){.Categories-strip{bottom:0;left:0;right:0;height:64px;padding:0;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-moz-box-orient:horizontal;-ms-box-orient:horizontal;box-orient:horizontal}.Categories .Categories-button{-webkit-flex:1;-ms-flex:1;flex:1;line-height:100px;font-size:11px;text-align:center}.Categories .Categories-button:before{left:50%;top:8px;margin-left:-16px}}@media (max-height:500px) and (orientation:landscape){.Categories-strip{top:0;left:0;bottom:0;width:126px;padding:8px 0;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-orient:vertical;-moz-box-orient:vertical;-ms-box-orient:vertical;box-orient:vertical}.Categories .Categories-button{-webkit-flex:1;-ms-flex:1;flex:1;padding-left:48px;text-align:left;font-size:14px;white-space:nowrap}.Categories .Categories-button:before{left:8px;top:50%;margin-top:-16px}.Categories .Categories-button .CategoryButton-text{position:absolute;left:48px;top:50%;margin-top:-7px}}</style><script type=text/montage-serialization>{\"owner\":{\"properties\":{\"element\":{\"#\":\"owner\"}},\"bindings\":{\"selected\":{\"<-\":\"@radioButtonController.value\"}}},\"button\":{\"prototype\":\"./category-button.reel\",\"properties\":{\"element\":{\"#\":\"button\"},\"radioButtonController\":{\"@\":\"radioButtonController\"}},\"bindings\":{\"classList.has(@repetition:iteration.object.key)\":{\"<-\":\"true\"},\"label\":{\"<-\":\"@repetition:iteration.object.title\"},\"value\":{\"<-\":\"@repetition:iteration.object\"}}},\"radioButtonController\":{\"prototype\":\"montage/core/radio-button-controller\",\"bindings\":{\"contentController\":{\"<-\":\"@owner.categories\"}}},\"repetition\":{\"prototype\":\"montage/ui/repetition.reel\",\"properties\":{\"element\":{\"#\":\"repetition\"}},\"bindings\":{\"contentController\":{\"<-\":\"@owner.categories\"}}}}</script></head><body><div data-montage-id=owner class=Categories><span data-montage-id=repetition class=Categories-strip><button data-montage-id=button class=Categories-button></button></span></div></body></html>"})