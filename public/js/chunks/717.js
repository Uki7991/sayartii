(self.webpackChunk=self.webpackChunk||[]).push([[717],{3519:(o,t,i)=>{"use strict";i.d(t,{Z:()=>r});var e=i(3645),l=i.n(e)()((function(o){return o[1]}));l.push([o.id,'.cool-lightbox{position:fixed;left:0;bottom:0;top:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;right:0;-webkit-transition:all .3s ease;transition:all .3s ease}.cool-lightbox,.cool-lightbox .cool-lightbox-zoom{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.cool-lightbox .cool-lightbox-zoom{position:absolute;bottom:15px;left:50%;z-index:99999;background-color:rgba(15,15,15,.8);border-radius:8px;padding:0 12px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.cool-lightbox .cool-lightbox-zoom input[type=range]{-webkit-appearance:none;margin:10px 0;width:105px;background:0 0}.cool-lightbox .cool-lightbox-zoom input[type=range]:focus{outline:0}.cool-lightbox .cool-lightbox-zoom input[type=range]::-webkit-slider-runnable-track{width:100%;height:4px;cursor:pointer;animate:.2s;-webkit-box-shadow:0 0 0 #000;box-shadow:0 0 0 #000;background:#e6e6e6;border-radius:11px;border:0 solid #000}.cool-lightbox .cool-lightbox-zoom input[type=range]::-webkit-slider-thumb{-webkit-box-shadow:1px 1px 1px #000;box-shadow:1px 1px 1px #000;border:1px solid #000;height:12px;width:12px;border-radius:13px;background:#fff;cursor:pointer;-webkit-appearance:none;margin-top:-4.5px}.cool-lightbox .cool-lightbox-zoom input[type=range]:focus::-webkit-slider-runnable-track{background:#e6e6e6}.cool-lightbox .cool-lightbox-zoom input[type=range]::-moz-range-track{width:100%;height:4px;cursor:pointer;animate:.2s;box-shadow:0 0 0 #000;background:#e6e6e6;border-radius:11px;border:0 solid #000}.cool-lightbox .cool-lightbox-zoom input[type=range]::-moz-range-thumb{box-shadow:1px 1px 1px #000;border:1px solid #000;height:12px;width:12px;border-radius:13px;background:#fff;cursor:pointer}.cool-lightbox .cool-lightbox-zoom input[type=range]::-ms-track{width:100%;height:4px;cursor:pointer;animate:.2s;background:0 0;border-color:transparent;color:transparent}.cool-lightbox .cool-lightbox-zoom input[type=range]::-ms-fill-lower,.cool-lightbox .cool-lightbox-zoom input[type=range]::-ms-fill-upper{background:#e6e6e6;border:0 solid #000;border-radius:22px;box-shadow:0 0 0 #000}.cool-lightbox .cool-lightbox-zoom input[type=range]::-ms-thumb{box-shadow:1px 1px 1px #000;border:1px solid #000;height:12px;width:12px;border-radius:13px;background:#fff;cursor:pointer}.cool-lightbox .cool-lightbox-zoom input[type=range]:focus::-ms-fill-lower,.cool-lightbox .cool-lightbox-zoom input[type=range]:focus::-ms-fill-upper{background:#e6e6e6}.cool-lightbox .cool-lightbox-zoom .cool-lightbox-zoom__icon{height:15px;width:15px;color:#fff}.cool-lightbox .cool-lightbox-zoom .cool-lightbox-zoom__icon:first-of-type{margin-right:10px}.cool-lightbox .cool-lightbox-zoom .cool-lightbox-zoom__icon:last-of-type{margin-left:10px}.cool-lightbox .cool-lightbox-thumbs{position:absolute;height:100vh;overflow-y:auto;width:102px;right:-102px;top:0;overflow-x:hidden;-webkit-transition:none;transition:none;background-color:#ddd;scrollbar-width:thin;scrollbar-color:#fa4242 hsla(0,0%,68.6%,.9)}@media (min-width:767px){.cool-lightbox .cool-lightbox-thumbs{-webkit-transition:all .3s ease;transition:all .3s ease}}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar{width:6px;height:6px}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-button{width:0;height:0}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-thumb{background:#fa4242;border:0 #fff;border-radius:50px}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-thumb:hover{background:#fff}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-thumb:active{background:#000}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-track{background:#e1e1e1;border:0 #fff;border-radius:8px}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-track:hover{background:#666}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-track:active{background:#333}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-corner{background:0 0}@media (min-width:767px){.cool-lightbox .cool-lightbox-thumbs{width:212px;right:-212px}}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:2px 0 2px 2px}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb{background-color:#000;width:100%;margin-right:2px;margin-bottom:2px;display:block;height:75px;position:relative}@media (min-width:767px){.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb{width:calc(50% - 2px)}}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb:before{top:0;left:0;right:0;bottom:0;opacity:0;content:"";z-index:150;-webkit-transition:all .3s ease;transition:all .3s ease;position:absolute;visibility:hidden;border:3px solid #fa4242}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb.is-video .cool-lightbox__thumb__icon{position:absolute;z-index:100;top:50%;left:50%;width:25px;height:25px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb.is-video .cool-lightbox__thumb__icon path{fill:#fff}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb.is-video:after{content:"";top:0;left:0;right:0;bottom:0;z-index:50;position:absolute;background:rgba(0,0,0,.6)}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb.active:before,.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb:hover:before{opacity:1;visibility:visible}.cool-lightbox .cool-lightbox__inner{padding:60px 0;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;-webkit-transition:none;transition:none}@media (min-width:767px){.cool-lightbox .cool-lightbox__inner{-webkit-transition:all .3s ease;transition:all .3s ease}}.cool-lightbox .cool-lightbox__progressbar{position:absolute;top:0;left:0;right:0;height:2px;z-index:500;-webkit-transform-origin:0;transform-origin:0;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform 3s linear;transition:-webkit-transform 3s linear;transition:transform 3s linear;transition:transform 3s linear,-webkit-transform 3s linear;display:block}.cool-lightbox.cool-lightbox--is-swipping{cursor:-webkit-grabbing;cursor:grabbing}.cool-lightbox.cool-lightbox--is-swipping iframe{pointer-events:none}.cool-lightbox.cool-lightbox--is-swipping .cool-lightbox__slide{-webkit-transition:none;transition:none}.cool-lightbox.cool-lightbox--is-swipping .cool-lightbox__slide.cool-lightbox__slide--hide{display:-webkit-box;display:-ms-flexbox;display:flex;z-index:50}.cool-lightbox.cool-lightbox--zoom-disabled .cool-lightbox__slide .cool-lightbox__slide__img{-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.cool-lightbox.cool-lightbox--can-zoom .cool-lightbox__slide img{cursor:-webkit-zoom-in;cursor:zoom-in}.cool-lightbox.cool-lightbox--is-zooming .cool-lightbox__slide img{cursor:move;cursor:grab;cursor:-webkit-grab}.cool-lightbox.cool-lightbox--is-zooming .cool-lightbox-caption{opacity:0}.cool-lightbox.cool-lightbox--thumbs-right.cool-lightbox--show-thumbs .cool-lightbox__inner{right:102px}@media (min-width:767px){.cool-lightbox.cool-lightbox--thumbs-right.cool-lightbox--show-thumbs .cool-lightbox__inner{right:212px}}.cool-lightbox.cool-lightbox--thumbs-right.cool-lightbox--show-thumbs .cool-lightbox-thumbs{right:0}.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs{width:100%;left:0;right:0;top:auto;height:70px;bottom:-70px;overflow:auto}@media (min-width:767px){.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs{bottom:-79px;height:79px}}.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs .cool-lightbox-thumbs__list{width:100%;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb{width:100px;-ms-flex-negative:0;flex-shrink:0;margin-bottom:0;height:65px}@media (min-width:767px){.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb{height:75px}}.cool-lightbox.cool-lightbox--thumbs-bottom.cool-lightbox--show-thumbs .cool-lightbox__inner{bottom:70px}@media (min-width:767px){.cool-lightbox.cool-lightbox--thumbs-bottom.cool-lightbox--show-thumbs .cool-lightbox__inner{bottom:79px}}.cool-lightbox.cool-lightbox--thumbs-bottom.cool-lightbox--show-thumbs .cool-lightbox-thumbs{bottom:0}.cool-lightbox *{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;margin:0}.cool-lightbox button{background:0 0;border:none;cursor:pointer;outline:0}.cool-lightbox svg path,.cool-lightbox svg rect{fill:currentColor}.cool-lightbox .cool-lightbox-button{padding:21px 16px 21px 4px;height:100px;opacity:1;z-index:800;color:#ccc;-webkit-transition:all .3s ease;position:absolute;top:calc(50% - 50px);width:54px;transition:all .3s ease;visibility:visible}@media (min-width:767px){.cool-lightbox .cool-lightbox-button{width:70px;padding:31px 26px 31px 6px}}.cool-lightbox .cool-lightbox-button.hidden{opacity:0;visibility:hidden}.cool-lightbox .cool-lightbox-button:hover{color:#fff}.cool-lightbox .cool-lightbox-button>.cool-lightbox-button__icon{padding:7px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:rgba(30,30,30,.6)}.cool-lightbox .cool-lightbox-button>.cool-lightbox-button__icon>svg{width:100%;height:100%}.cool-lightbox .cool-lightbox-button.cool-lightbox-button--prev{left:0}.cool-lightbox .cool-lightbox-button.cool-lightbox-button--next{right:0;padding:21px 4px 21px 16px}@media (min-width:767px){.cool-lightbox .cool-lightbox-button.cool-lightbox-button--next{padding:31px 6px 31px 26px}}.cool-lightbox .cool-lightbox-pdf{max-width:100%}.cool-lightbox .cool-lightbox__iframe{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;top:50%;left:50%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-transform:translate3d(-50%,-50%,0) scaleX(1);transform:translate3d(-50%,-50%,0) scaleX(1)}.cool-lightbox .cool-lightbox__iframe iframe{width:100%;height:100%}@media (min-width:767px){.cool-lightbox .cool-lightbox__iframe iframe{max-width:80vw;max-height:80vh}}.cool-lightbox .cool-lightbox__wrapper{width:100%;height:100%;position:relative}.cool-lightbox .cool-lightbox__wrapper.cool-lightbox__wrapper--swipe{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.cool-lightbox .cool-lightbox__wrapper.cool-lightbox__wrapper--swipe .cool-lightbox__slide{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;height:100%;opacity:.4;-webkit-transition:opacity .3s linear;transition:opacity .3s linear}.cool-lightbox .cool-lightbox__wrapper.cool-lightbox__wrapper--swipe .cool-lightbox__slide.cool-lightbox__slide--current{opacity:1}.cool-lightbox .cool-lightbox__slide{width:100%;top:0;bottom:0;left:0;right:0;z-index:100;display:none;position:absolute;margin-right:30px;-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}.cool-lightbox .cool-lightbox__slide:last-of-type{margin-right:0}.cool-lightbox .cool-lightbox__slide.cool-lightbox__slide--current{display:-webkit-box;display:-ms-flexbox;display:flex}.cool-lightbox .cool-lightbox__slide .cool-lightbox__slide__img{position:absolute;height:100%;width:100%;left:50%;top:50%;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translate3d(-50%,-50%,0) scaleX(1);transform:translate3d(-50%,-50%,0) scaleX(1);-webkit-transition:all .3s ease;transition:all .3s ease;display:-webkit-box;display:-ms-flexbox;display:flex}.cool-lightbox .cool-lightbox__slide img{max-width:100%;max-height:100%;margin:auto;z-index:9999;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-box-shadow:0 0 1.5rem rgba(0,0,0,.45);box-shadow:0 0 1.5rem rgba(0,0,0,.45)}.cool-lightbox-toolbar{position:absolute;top:0;right:0;opacity:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transition:all .3s ease;transition:all .3s ease;visibility:visible}.cool-lightbox-toolbar.hidden{opacity:0;visibility:hidden}.cool-lightbox-toolbar .cool-lightbox-toolbar__btn{background:rgba(30,30,30,.6);border:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none;cursor:pointer;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin:0;padding:9px;position:relative;-webkit-transition:color .2s;transition:color .2s;vertical-align:top;visibility:inherit;width:40px;height:40px;color:#ccc}@media (min-width:767px){.cool-lightbox-toolbar .cool-lightbox-toolbar__btn{width:44px;height:44px;padding:10px}}.cool-lightbox-toolbar .cool-lightbox-toolbar__btn>svg{width:100%;height:100%}.cool-lightbox-toolbar .cool-lightbox-toolbar__btn:hover{color:#fff}.cool-lightbox-caption{bottom:0;color:#eee;font-size:14px;font-weight:400;left:0;opacity:1;line-height:1.5;padding:18px 28px 16px 24px;right:0;text-align:center;direction:ltr;position:absolute;-webkit-transition:opacity .25s ease,visibility 0s ease .25s;transition:opacity .25s ease,visibility 0s ease .25s;z-index:99997;background:-webkit-gradient(linear,left bottom,left top,color-stop(0,rgba(0,0,0,.75)),color-stop(50%,rgba(0,0,0,.3)),color-stop(65%,rgba(0,0,0,.15)),color-stop(75.5%,rgba(0,0,0,.075)),color-stop(82.85%,rgba(0,0,0,.037)),color-stop(88%,rgba(0,0,0,.019)),to(transparent));background:linear-gradient(0deg,rgba(0,0,0,.75),rgba(0,0,0,.3) 50%,rgba(0,0,0,.15) 65%,rgba(0,0,0,.075) 75.5%,rgba(0,0,0,.037) 82.85%,rgba(0,0,0,.019) 88%,transparent)}@media (min-width:767px){.cool-lightbox-caption{padding:22px 30px 23px}}.cool-lightbox-caption a{color:#eee;text-decoration:underline}.cool-lightbox-caption h6{font-size:14px;margin:0 0 6px;line-height:130%}@media (min-width:767px){.cool-lightbox-caption h6{font-size:16px;margin:0 0 6px}}.cool-lightbox-caption p{font-size:13px;line-height:130%;color:#ccc}@media (min-width:767px){.cool-lightbox-caption p{font-size:15px}}.cool-lightbox-caption p a{color:#ccc}.cool-lightbox-caption p a:hover{color:#eee}.cool-lightbox-modal-enter-active,.cool-lightbox-modal-leave-active{-webkit-transition:opacity .35s;transition:opacity .35s}.cool-lightbox-modal-enter,.cool-lightbox-modal-leave-to{opacity:0}.cool-lightbox-slide-change-enter-active,.cool-lightbox-slide-change-leave-active{-webkit-transition:opacity .27s;transition:opacity .27s}.cool-lightbox-slide-change-enter,.cool-lightbox-slide-change-leave-to{opacity:0}.cool-lightbox-loading-wrapper{top:50%;left:50%;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.cool-lightbox-loading-wrapper .cool-lightbox-loading{-webkit-animation:cool-lightbox-rotate 1s linear infinite;animation:cool-lightbox-rotate 1s linear infinite;background:0 0;border:4px solid;border-color:#888 #888 #fff;border-radius:50%;height:50px;opacity:.7;padding:0;width:50px;z-index:500}@-webkit-keyframes cool-lightbox-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cool-lightbox-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]);const r=l},3645:o=>{"use strict";o.exports=function(o){var t=[];return t.toString=function(){return this.map((function(t){var i=o(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(o,i,e){"string"==typeof o&&(o=[[null,o,""]]);var l={};if(e)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(l[a]=!0)}for(var n=0;n<o.length;n++){var s=[].concat(o[n]);e&&l[s[0]]||(i&&(s[2]?s[2]="".concat(i," and ").concat(s[2]):s[2]=i),t.push(s))}},t}},3379:(o,t,i)=>{"use strict";var e,l=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},r=function(){var o={};return function(t){if(void 0===o[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(o){i=null}o[t]=i}return o[t]}}(),a=[];function n(o){for(var t=-1,i=0;i<a.length;i++)if(a[i].identifier===o){t=i;break}return t}function s(o,t){for(var i={},e=[],l=0;l<o.length;l++){var r=o[l],s=t.base?r[0]+t.base:r[0],c=i[s]||0,b="".concat(s," ").concat(c);i[s]=c+1;var h=n(b),x={css:r[1],media:r[2],sourceMap:r[3]};-1!==h?(a[h].references++,a[h].updater(x)):a.push({identifier:b,updater:m(x,t),references:1}),e.push(b)}return e}function c(o){var t=document.createElement("style"),e=o.attributes||{};if(void 0===e.nonce){var l=i.nc;l&&(e.nonce=l)}if(Object.keys(e).forEach((function(o){t.setAttribute(o,e[o])})),"function"==typeof o.insert)o.insert(t);else{var a=r(o.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var b,h=(b=[],function(o,t){return b[o]=t,b.filter(Boolean).join("\n")});function x(o,t,i,e){var l=i?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(o.styleSheet)o.styleSheet.cssText=h(t,l);else{var r=document.createTextNode(l),a=o.childNodes;a[t]&&o.removeChild(a[t]),a.length?o.insertBefore(r,a[t]):o.appendChild(r)}}function g(o,t,i){var e=i.css,l=i.media,r=i.sourceMap;if(l?o.setAttribute("media",l):o.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),o.styleSheet)o.styleSheet.cssText=e;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(e))}}var p=null,d=0;function m(o,t){var i,e,l;if(t.singleton){var r=d++;i=p||(p=c(t)),e=x.bind(null,i,r,!1),l=x.bind(null,i,r,!0)}else i=c(t),e=g.bind(null,i,t),l=function(){!function(o){if(null===o.parentNode)return!1;o.parentNode.removeChild(o)}(i)};return e(o),function(t){if(t){if(t.css===o.css&&t.media===o.media&&t.sourceMap===o.sourceMap)return;e(o=t)}else l()}}o.exports=function(o,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=l());var i=s(o=o||[],t);return function(o){if(o=o||[],"[object Array]"===Object.prototype.toString.call(o)){for(var e=0;e<i.length;e++){var l=n(i[e]);a[l].references--}for(var r=s(o,t),c=0;c<i.length;c++){var b=n(i[c]);0===a[b].references&&(a[b].updater(),a.splice(b,1))}i=r}}}},8717:(o,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});var e=i(3379),l=i.n(e),r=i(3519),a={insert:"head",singleton:!1};l()(r.Z,a);r.Z.locals;const n={metaInfo:function(){return{title:this.car.title+" "+this.car.car_model.car.title+" "+this.car.car_model.title+" "+this.car.year,meta:[{vmid:"description",name:"description",content:this.car.description+" "+this.car.car_model.car.title+" "+this.car.car_model.title+" "+this.car.year}]}},props:{suggestions:Array,car:Object},data:function(){return{index:null,photos:[]}},components:{CarCard:function(){return i.e(976).then(i.bind(i,8976))},AppLayout:function(){return i.e(287).then(i.bind(i,2450))},CoolLightBox:function(){return i.e(318).then(i.bind(i,2318))}},created:function(){this.photos=this.car.images.map((function(o){return"/storage/large/"+o.path}))}};const s=(0,i(1900).Z)(n,(function(){var o=this,t=o.$createElement,i=o._self._c||t;return i("app-layout",[i("div",{staticClass:"container mx-auto px-4"},[i("section",{staticClass:"md:w-10/12 w-full mx-auto md:py-24 py-20 flex flex-wrap justify-between"},[i("div",{staticClass:"md:w-7/12"},[i("div",{staticClass:"grid grid-cols-3 gap-0.5 shadow-md"},o._l(o.car.images,(function(t,e){return i("div",{key:t.id,staticClass:"cursor-pointer",on:{click:function(t){o.index=e}}},[i("img",{staticClass:"object-cover w-full md:h-40",attrs:{src:"/storage/small/"+t.path,alt:o.car.model}})])})),0),o._v(" "),i("div",{staticClass:"bg-white shadow-lg p-8 my-10 flex flex-col space-y-6"},[i("div",{staticClass:"flex flex-col space-y-4"},[i("p",{staticClass:"text-4xl"},[o._v(o._s(o.car.car_model.car.title)+" "+o._s(o.car.car_model.title))]),o._v(" "),i("pre",[o._v(o._s(o.car.description))])])])]),o._v(" "),i("div",{staticClass:"md:w-2/6 w-full"},[i("div",{staticClass:"flex flex-col space-y-5"},[i("p",{staticClass:"uppercase text-center text-xl text-pink-600"},[o._v("aed "),i("span",{staticClass:"text-5xl"},[o._v(o._s(o.car.price))])]),o._v(" "),i("a",{staticClass:"bg-green-500 block flex items-center justify-center h-14 rounded-md text-white",attrs:{target:"_blank",href:"https://wa.me/971403391555?text=Hi%2C%20I%27m%20interested%20in%20your%20advertisement.%0A%0Ahttps%3A%2F%2Fsayartii.com%2FAE%2Fl%2Femo-734%2F2019-BMW-X7-50i-pure-excellence-ref-no-114531"}},[i("svg",{staticClass:"fill-current text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.403,5.633C16.708,3.936,14.454,3.001,12.053,3 c-4.948,0-8.976,4.027-8.978,8.977c0,1.582,0.413,3.126,1.198,4.488L3,21.116l4.759-1.249c1.312,0.715,2.788,1.092,4.29,1.093h0.004 l0,0c4.947,0,8.975-4.027,8.977-8.977C21.03,9.585,20.098,7.33,18.403,5.633 M12.053,19.445H12.05 c-1.339-0.001-2.652-0.36-3.798-1.041l-0.272-0.162l-2.824,0.741l0.753-2.753l-0.177-0.282c-0.747-1.188-1.141-2.561-1.141-3.971 c0.002-4.114,3.349-7.461,7.465-7.461c1.993,0.001,3.866,0.778,5.275,2.188c1.408,1.411,2.184,3.285,2.183,5.279 C19.512,16.097,16.165,19.445,12.053,19.445 M16.146,13.856c-0.225-0.113-1.327-0.655-1.533-0.73 c-0.205-0.075-0.354-0.112-0.504,0.112s-0.58,0.729-0.711,0.879s-0.262,0.168-0.486,0.056s-0.947-0.349-1.804-1.113 c-0.667-0.595-1.117-1.329-1.248-1.554s-0.014-0.346,0.099-0.458c0.101-0.1,0.224-0.262,0.336-0.393 c0.112-0.131,0.149-0.224,0.224-0.374s0.038-0.281-0.019-0.393c-0.056-0.113-0.505-1.217-0.692-1.666 C9.627,7.787,9.442,7.845,9.304,7.839c-0.13-0.006-0.28-0.008-0.429-0.008c-0.15,0-0.393,0.056-0.599,0.28 C8.07,8.336,7.491,8.878,7.491,9.982c0,1.104,0.804,2.171,0.916,2.321c0.112,0.15,1.582,2.415,3.832,3.387 c0.536,0.231,0.954,0.369,1.279,0.473c0.537,0.171,1.026,0.146,1.413,0.089c0.431-0.064,1.327-0.542,1.514-1.066 c0.187-0.524,0.187-0.973,0.131-1.067C16.52,14.025,16.369,13.968,16.146,13.856"}})]),o._v("\n                        Whatsapp\n                    ")]),o._v(" "),i("a",{staticClass:"bg-pink-600 block flex items-center justify-center h-14 rounded-md text-white",attrs:{target:"_blank",href:"tel:"+o.car.phone}},[o._v("\n                        Show number\n                    ")])]),o._v(" "),i("ul",{staticClass:"mt-8 mb-4"},[i("li",{staticClass:"flex justify-between text-lg my-2"},[i("p",[o._v("Year")]),i("p",{staticClass:"max-w-3/5"},[o._v(o._s(o.car.year))])]),o._v(" "),i("li",{staticClass:"flex justify-between text-lg my-2"},[i("p",[o._v("Make")]),i("p",{staticClass:"max-w-3/5"},[o._v(o._s(o.car.car_model.car.title))])]),o._v(" "),i("li",{staticClass:"flex justify-between text-lg my-2"},[i("p",[o._v("Model")]),i("p",{staticClass:"max-w-3/5"},[o._v(o._s(o.car.car_model.title))])]),o._v(" "),i("li",{staticClass:"flex justify-between text-lg my-2"},[i("p",[o._v("Mileage")]),i("p",{staticClass:"max-w-3/5"},[o._v(o._s(o.car.mileage))])]),o._v(" "),o._l(o.car.specs,(function(t){return i("li",{key:t.id,staticClass:"flex justify-between text-lg my-2"},[i("p",[o._v(o._s(t.category.title))]),i("p",{staticClass:"max-w-3/5"},[o._v(o._s(t.title))])])}))],2),o._v(" "),i("div",{staticClass:"flex flex-wrap"},o._l(o.car.tags,(function(t){return i("div",{key:t.id,staticClass:"border-gray-600 mr-3 mb-3 border shadow rounded-md py-2 px-3"},[o._v("\n                        "+o._s(t.title)+"\n                    ")])})),0)])]),o._v(" "),o.suggestions.length?i("section",{staticClass:"md:w-10/12 px-2 mx-auto py-8"},[i("div",{staticClass:"text-center"},[i("h2",{staticClass:"font-medium tracking-widest text-xl"},[o._v("\n                    Suggested\n                ")])]),o._v(" "),i("div",{staticClass:"grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 my-6"},o._l(o.suggestions,(function(o){return i("car-card",{key:o.id,attrs:{car:o,active:o.featured}})})),1)]):o._e(),o._v(" "),i("cool-light-box",{attrs:{index:o.index,items:o.photos},on:{close:function(t){o.index=null}}})],1)])}),[],!1,null,"219933de",null).exports},1900:(o,t,i)=>{"use strict";function e(o,t,i,e,l,r,a,n){var s,c="function"==typeof o?o.options:o;if(t&&(c.render=t,c.staticRenderFns=i,c._compiled=!0),e&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(s=function(o){(o=o||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(o=__VUE_SSR_CONTEXT__),l&&l.call(this,o),o&&o._registeredComponents&&o._registeredComponents.add(a)},c._ssrRegister=s):l&&(s=n?function(){l.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:l),s)if(c.functional){c._injectStyles=s;var b=c.render;c.render=function(o,t){return s.call(t),b(o,t)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,s):[s]}return{exports:o,options:c}}i.d(t,{Z:()=>e})}}]);