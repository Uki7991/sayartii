(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Cars_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cars/Show.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cars/Show.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var vue_cool_lightbox_dist_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cool-lightbox/dist/vue-cool-lightbox.min.css */ "./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: function metaInfo() {
    return {
      title: this.car.title + ' ' + this.car.car_model.car.title + ' ' + this.car.car_model.title + ' ' + this.car.year,
      meta: [{
        vmid: 'description',
        name: 'description',
        content: this.car.description + ' ' + this.car.car_model.car.title + ' ' + this.car.car_model.title + ' ' + this.car.year
      }]
    };
  },
  props: {
    suggestions: Array,
    car: Object
  },
  data: function data() {
    return {
      index: null,
      photos: []
    };
  },
  components: {
    CarCard: function CarCard() {
      return __webpack_require__.e(/*! import() */ "resources_js_Components_CarCard_vue").then(__webpack_require__.bind(__webpack_require__, /*! @/Components/CarCard */ "./resources/js/Components/CarCard.vue"));
    },
    AppLayout: function AppLayout() {
      return __webpack_require__.e(/*! import() */ "resources_js_Layouts_AppLayout_vue-_14ae1").then(__webpack_require__.bind(__webpack_require__, /*! @/Layouts/AppLayout */ "./resources/js/Layouts/AppLayout.vue"));
    },
    CoolLightBox: function CoolLightBox() {
      return __webpack_require__.e(/*! import() */ "node_modules_vue-cool-lightbox_dist_vue-cool-lightbox_esm_js").then(__webpack_require__.bind(__webpack_require__, /*! vue-cool-lightbox */ "./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.esm.js"));
    }
  },
  created: function created() {
    this.photos = this.car.images.map(function (item) {
      return '/storage/large/' + item.path;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cool-lightbox{position:fixed;left:0;bottom:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;right:0;-webkit-transition:all .3s ease;transition:all .3s ease}.cool-lightbox .cool-lightbox-zoom{position:absolute;bottom:15px;left:50%;display:-webkit-box;display:-ms-flexbox;display:flex;z-index:99999;background-color:rgba(15,15,15,.8);border-radius:8px;padding:0 12px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.cool-lightbox .cool-lightbox-zoom input[type=range]{-webkit-appearance:none;margin:10px 0;width:105px;background:0 0}.cool-lightbox .cool-lightbox-zoom input[type=range]:focus{outline:0}.cool-lightbox .cool-lightbox-zoom input[type=range]::-webkit-slider-runnable-track{width:100%;height:4px;cursor:pointer;animate:.2s;-webkit-box-shadow:0 0 0 #000;box-shadow:0 0 0 #000;background:#e6e6e6;border-radius:11px;border:0 solid #000}.cool-lightbox .cool-lightbox-zoom input[type=range]::-webkit-slider-thumb{-webkit-box-shadow:1px 1px 1px #000;box-shadow:1px 1px 1px #000;border:1px solid #000;height:12px;width:12px;border-radius:13px;background:#fff;cursor:pointer;-webkit-appearance:none;margin-top:-4.5px}.cool-lightbox .cool-lightbox-zoom input[type=range]:focus::-webkit-slider-runnable-track{background:#e6e6e6}.cool-lightbox .cool-lightbox-zoom input[type=range]::-moz-range-track{width:100%;height:4px;cursor:pointer;animate:.2s;box-shadow:0 0 0 #000;background:#e6e6e6;border-radius:11px;border:0 solid #000}.cool-lightbox .cool-lightbox-zoom input[type=range]::-moz-range-thumb{box-shadow:1px 1px 1px #000;border:1px solid #000;height:12px;width:12px;border-radius:13px;background:#fff;cursor:pointer}.cool-lightbox .cool-lightbox-zoom input[type=range]::-ms-track{width:100%;height:4px;cursor:pointer;animate:.2s;background:0 0;border-color:transparent;color:transparent}.cool-lightbox .cool-lightbox-zoom input[type=range]::-ms-fill-lower{background:#e6e6e6;border:0 solid #000;border-radius:22px;box-shadow:0 0 0 #000}.cool-lightbox .cool-lightbox-zoom input[type=range]::-ms-fill-upper{background:#e6e6e6;border:0 solid #000;border-radius:22px;box-shadow:0 0 0 #000}.cool-lightbox .cool-lightbox-zoom input[type=range]::-ms-thumb{box-shadow:1px 1px 1px #000;border:1px solid #000;height:12px;width:12px;border-radius:13px;background:#fff;cursor:pointer}.cool-lightbox .cool-lightbox-zoom input[type=range]:focus::-ms-fill-lower{background:#e6e6e6}.cool-lightbox .cool-lightbox-zoom input[type=range]:focus::-ms-fill-upper{background:#e6e6e6}.cool-lightbox .cool-lightbox-zoom .cool-lightbox-zoom__icon{height:15px;width:15px;color:#fff}.cool-lightbox .cool-lightbox-zoom .cool-lightbox-zoom__icon:first-of-type{margin-right:10px}.cool-lightbox .cool-lightbox-zoom .cool-lightbox-zoom__icon:last-of-type{margin-left:10px}.cool-lightbox .cool-lightbox-thumbs{position:absolute;height:100vh;overflow-y:auto;width:102px;right:-102px;top:0;overflow-x:hidden;-webkit-transition:none;transition:none;background-color:#ddd;scrollbar-width:thin;scrollbar-color:#fa4242 rgba(175,175,175,.9)}@media (min-width:767px){.cool-lightbox .cool-lightbox-thumbs{-webkit-transition:all .3s ease;transition:all .3s ease}}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar{width:6px;height:6px}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-button{width:0;height:0}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-thumb{background:#fa4242;border:0 none #fff;border-radius:50px}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-thumb:hover{background:#fff}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-thumb:active{background:#000}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-track{background:#e1e1e1;border:0 none #fff;border-radius:8px}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-track:hover{background:#666}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-track:active{background:#333}.cool-lightbox .cool-lightbox-thumbs::-webkit-scrollbar-corner{background:0 0}@media (min-width:767px){.cool-lightbox .cool-lightbox-thumbs{width:212px;right:-212px}}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:2px;padding-right:0}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb{background-color:#000;width:100%;margin-right:2px;margin-bottom:2px;display:block;height:75px;position:relative}@media (min-width:767px){.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb{width:calc(100%/2 - 2px)}}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb:before{top:0;left:0;right:0;bottom:0;opacity:0;content:'';z-index:150;-webkit-transition:all .3s ease;transition:all .3s ease;position:absolute;visibility:hidden;border:3px solid #fa4242}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb.is-video .cool-lightbox__thumb__icon{position:absolute;z-index:100;top:50%;left:50%;width:25px;height:25px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb.is-video .cool-lightbox__thumb__icon path{fill:#fff}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb.is-video:after{content:'';top:0;left:0;right:0;bottom:0;z-index:50;position:absolute;background:rgba(0,0,0,.6)}.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb.active:before,.cool-lightbox .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb:hover:before{opacity:1;visibility:visible}.cool-lightbox .cool-lightbox__inner{padding:60px 0;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;-webkit-transition:none;transition:none}@media (min-width:767px){.cool-lightbox .cool-lightbox__inner{-webkit-transition:all .3s ease;transition:all .3s ease}}.cool-lightbox .cool-lightbox__progressbar{position:absolute;top:0;left:0;right:0;height:2px;z-index:500;-webkit-transform-origin:0;transform-origin:0;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform 3s linear;transition:-webkit-transform 3s linear;transition:transform 3s linear;transition:transform 3s linear, -webkit-transform 3s linear;display:block}.cool-lightbox.cool-lightbox--is-swipping{cursor:-webkit-grabbing;cursor:grabbing}.cool-lightbox.cool-lightbox--is-swipping iframe{pointer-events:none}.cool-lightbox.cool-lightbox--is-swipping .cool-lightbox__slide{-webkit-transition:none;transition:none}.cool-lightbox.cool-lightbox--is-swipping .cool-lightbox__slide.cool-lightbox__slide--hide{display:-webkit-box;display:-ms-flexbox;display:flex;z-index:50}.cool-lightbox.cool-lightbox--zoom-disabled .cool-lightbox__slide .cool-lightbox__slide__img{-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.cool-lightbox.cool-lightbox--can-zoom .cool-lightbox__slide img{cursor:-webkit-zoom-in;cursor:zoom-in}.cool-lightbox.cool-lightbox--is-zooming .cool-lightbox__slide img{cursor:move;cursor:grab;cursor:-webkit-grab}.cool-lightbox.cool-lightbox--is-zooming .cool-lightbox-caption{opacity:0}.cool-lightbox.cool-lightbox--thumbs-right.cool-lightbox--show-thumbs .cool-lightbox__inner{right:102px}@media (min-width:767px){.cool-lightbox.cool-lightbox--thumbs-right.cool-lightbox--show-thumbs .cool-lightbox__inner{right:212px}}.cool-lightbox.cool-lightbox--thumbs-right.cool-lightbox--show-thumbs .cool-lightbox-thumbs{right:0}.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs{width:100%;left:0;right:0;top:auto;height:70px;bottom:-70px;overflow:auto}@media (min-width:767px){.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs{bottom:-79px;height:79px}}.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs .cool-lightbox-thumbs__list{width:100%;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb{width:100px;-ms-flex-negative:0;flex-shrink:0;margin-bottom:0;height:65px}@media (min-width:767px){.cool-lightbox.cool-lightbox--thumbs-bottom .cool-lightbox-thumbs .cool-lightbox-thumbs__list .cool-lightbox__thumb{height:75px}}.cool-lightbox.cool-lightbox--thumbs-bottom.cool-lightbox--show-thumbs .cool-lightbox__inner{bottom:70px}@media (min-width:767px){.cool-lightbox.cool-lightbox--thumbs-bottom.cool-lightbox--show-thumbs .cool-lightbox__inner{bottom:79px}}.cool-lightbox.cool-lightbox--thumbs-bottom.cool-lightbox--show-thumbs .cool-lightbox-thumbs{bottom:0}.cool-lightbox *{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;margin:0}.cool-lightbox button{background:0 0;border:none;cursor:pointer;outline:0}.cool-lightbox svg path,.cool-lightbox svg rect{fill:currentColor}.cool-lightbox .cool-lightbox-button{padding:21px 16px 21px 4px;height:100px;opacity:1;z-index:800;color:#ccc;-webkit-transition:all .3s ease;transition:all .3s ease;position:absolute;top:calc(50% - 50px);width:54px;transition:all .3s ease;visibility:visible}@media (min-width:767px){.cool-lightbox .cool-lightbox-button{width:70px;padding:31px 26px 31px 6px}}.cool-lightbox .cool-lightbox-button.hidden{opacity:0;visibility:hidden}.cool-lightbox .cool-lightbox-button:hover{color:#fff}.cool-lightbox .cool-lightbox-button>.cool-lightbox-button__icon{padding:7px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:rgba(30,30,30,.6)}.cool-lightbox .cool-lightbox-button>.cool-lightbox-button__icon>svg{width:100%;height:100%}.cool-lightbox .cool-lightbox-button.cool-lightbox-button--prev{left:0}.cool-lightbox .cool-lightbox-button.cool-lightbox-button--next{right:0;padding:21px 4px 21px 16px}@media (min-width:767px){.cool-lightbox .cool-lightbox-button.cool-lightbox-button--next{padding:31px 6px 31px 26px}}.cool-lightbox .cool-lightbox-pdf{max-width:100%}.cool-lightbox .cool-lightbox__iframe{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;top:50%;left:50%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;-webkit-transform:translate3d(-50%,-50%,0) scale3d(1,1,1);transform:translate3d(-50%,-50%,0) scale3d(1,1,1)}.cool-lightbox .cool-lightbox__iframe iframe{width:100%;height:100%}@media (min-width:767px){.cool-lightbox .cool-lightbox__iframe iframe{max-width:80vw;max-height:80vh}}.cool-lightbox .cool-lightbox__wrapper{width:100%;height:100%;position:relative}.cool-lightbox .cool-lightbox__wrapper.cool-lightbox__wrapper--swipe{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.cool-lightbox .cool-lightbox__wrapper.cool-lightbox__wrapper--swipe .cool-lightbox__slide{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;height:100%;opacity:.4;-webkit-transition:opacity .3s linear;transition:opacity .3s linear}.cool-lightbox .cool-lightbox__wrapper.cool-lightbox__wrapper--swipe .cool-lightbox__slide.cool-lightbox__slide--current{opacity:1}.cool-lightbox .cool-lightbox__slide{width:100%;top:0;bottom:0;left:0;right:0;z-index:100;display:none;position:absolute;margin-right:30px;-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease, -webkit-transform .3s ease}.cool-lightbox .cool-lightbox__slide:last-of-type{margin-right:0}.cool-lightbox .cool-lightbox__slide.cool-lightbox__slide--current{display:-webkit-box;display:-ms-flexbox;display:flex}.cool-lightbox .cool-lightbox__slide .cool-lightbox__slide__img{position:absolute;height:100%;width:100%;left:50%;top:50%;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translate3d(-50%,-50%,0) scale3d(1,1,1);transform:translate3d(-50%,-50%,0) scale3d(1,1,1);-webkit-transition:all .3s ease;transition:all .3s ease;display:-webkit-box;display:-ms-flexbox;display:flex}.cool-lightbox .cool-lightbox__slide img{max-width:100%;max-height:100%;margin:auto;z-index:9999;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-box-shadow:0 0 1.5rem rgba(0,0,0,.45);box-shadow:0 0 1.5rem rgba(0,0,0,.45)}.cool-lightbox-toolbar{position:absolute;top:0;right:0;opacity:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transition:all .3s ease;transition:all .3s ease;visibility:visible}.cool-lightbox-toolbar.hidden{opacity:0;visibility:hidden}.cool-lightbox-toolbar .cool-lightbox-toolbar__btn{background:rgba(30,30,30,.6);border:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none;cursor:pointer;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin:0;padding:9px;position:relative;-webkit-transition:color .2s;transition:color .2s;vertical-align:top;visibility:inherit;width:40px;height:40px;color:#ccc}@media (min-width:767px){.cool-lightbox-toolbar .cool-lightbox-toolbar__btn{width:44px;height:44px;padding:10px}}.cool-lightbox-toolbar .cool-lightbox-toolbar__btn>svg{width:100%;height:100%}.cool-lightbox-toolbar .cool-lightbox-toolbar__btn:hover{color:#fff}.cool-lightbox-caption{bottom:0;color:#eee;font-size:14px;font-weight:400;left:0;opacity:1;line-height:1.5;padding:18px 28px 16px 24px;right:0;text-align:center;direction:ltr;position:absolute;-webkit-transition:opacity .25s ease,visibility 0s ease .25s;transition:opacity .25s ease,visibility 0s ease .25s;z-index:99997;background:-webkit-gradient(linear,left bottom, left top,color-stop(0, rgba(0,0,0,.75)),color-stop(50%, rgba(0,0,0,.3)),color-stop(65%, rgba(0,0,0,.15)),color-stop(75.5%, rgba(0,0,0,.075)),color-stop(82.85%, rgba(0,0,0,.037)),color-stop(88%, rgba(0,0,0,.019)),to(transparent));background:linear-gradient(0deg,rgba(0,0,0,.75) 0,rgba(0,0,0,.3) 50%,rgba(0,0,0,.15) 65%,rgba(0,0,0,.075) 75.5%,rgba(0,0,0,.037) 82.85%,rgba(0,0,0,.019) 88%,transparent)}@media (min-width:767px){.cool-lightbox-caption{padding:22px 30px 23px 30px}}.cool-lightbox-caption a{color:#eee;text-decoration:underline}.cool-lightbox-caption h6{font-size:14px;margin:0 0 6px 0;line-height:130%}@media (min-width:767px){.cool-lightbox-caption h6{font-size:16px;margin:0 0 6px 0}}.cool-lightbox-caption p{font-size:13px;line-height:130%;color:#ccc}@media (min-width:767px){.cool-lightbox-caption p{font-size:15px}}.cool-lightbox-caption p a{color:#ccc}.cool-lightbox-caption p a:hover{color:#eee}.cool-lightbox-modal-enter-active,.cool-lightbox-modal-leave-active{-webkit-transition:opacity .35s;transition:opacity .35s}.cool-lightbox-modal-enter,.cool-lightbox-modal-leave-to{opacity:0}.cool-lightbox-slide-change-enter-active,.cool-lightbox-slide-change-leave-active{-webkit-transition:opacity .27s;transition:opacity .27s}.cool-lightbox-slide-change-enter,.cool-lightbox-slide-change-leave-to{opacity:0}.cool-lightbox-loading-wrapper{top:50%;left:50%;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.cool-lightbox-loading-wrapper .cool-lightbox-loading{-webkit-animation:cool-lightbox-rotate 1s linear infinite;animation:cool-lightbox-rotate 1s linear infinite;background:0 0;border:4px solid #888;border-bottom-color:#fff;border-radius:50%;height:50px;opacity:.7;padding:0;width:50px;z-index:500}@-webkit-keyframes cool-lightbox-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cool-lightbox-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css":
/*!***********************************************************************!*\
  !*** ./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./vue-cool-lightbox.min.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_cool_lightbox_min_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/Pages/Cars/Show.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/Cars/Show.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_e59cdb98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=e59cdb98&scoped=true& */ "./resources/js/Pages/Cars/Show.vue?vue&type=template&id=e59cdb98&scoped=true&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Cars/Show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Show_vue_vue_type_template_id_e59cdb98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_e59cdb98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e59cdb98",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Cars/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Cars/Show.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Cars/Show.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cars/Show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Cars/Show.vue?vue&type=template&id=e59cdb98&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Cars/Show.vue?vue&type=template&id=e59cdb98&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_e59cdb98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_e59cdb98_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_e59cdb98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=e59cdb98&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cars/Show.vue?vue&type=template&id=e59cdb98&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cars/Show.vue?vue&type=template&id=e59cdb98&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Cars/Show.vue?vue&type=template&id=e59cdb98&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("app-layout", [
    _c(
      "div",
      { staticClass: "container mx-auto px-4" },
      [
        _c(
          "section",
          {
            staticClass:
              "md:w-10/12 w-full mx-auto md:py-24 py-20 flex flex-wrap justify-between"
          },
          [
            _c("div", { staticClass: "md:w-7/12" }, [
              _c(
                "div",
                { staticClass: "grid grid-cols-3 gap-0.5 shadow-md" },
                _vm._l(_vm.car.images, function(image, imageIndex) {
                  return _c(
                    "div",
                    {
                      key: image.id,
                      staticClass: "cursor-pointer",
                      on: {
                        click: function($event) {
                          _vm.index = imageIndex
                        }
                      }
                    },
                    [
                      _c("img", {
                        staticClass: "object-cover w-full md:h-40",
                        attrs: {
                          src: "/storage/small/" + image.path,
                          alt: _vm.car.model
                        }
                      })
                    ]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "bg-white shadow-lg p-8 my-10 flex flex-col space-y-6"
                },
                [
                  _c("div", { staticClass: "flex flex-col space-y-4" }, [
                    _c("p", { staticClass: "text-4xl" }, [
                      _vm._v(
                        _vm._s(_vm.car.car_model.car.title) +
                          " " +
                          _vm._s(_vm.car.car_model.title)
                      )
                    ]),
                    _vm._v(" "),
                    _c("pre", [_vm._v(_vm._s(_vm.car.description))])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "md:w-2/6 w-full" }, [
              _c("div", { staticClass: "flex flex-col space-y-5" }, [
                _c(
                  "p",
                  {
                    staticClass: "uppercase text-center text-xl text-pink-600"
                  },
                  [
                    _vm._v("aed "),
                    _c("span", { staticClass: "text-5xl" }, [
                      _vm._v(_vm._s(_vm.car.price))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "bg-green-500 block flex items-center justify-center h-14 rounded-md text-white",
                    attrs: {
                      target: "_blank",
                      href:
                        "https://wa.me/971403391555?text=Hi%2C%20I%27m%20interested%20in%20your%20advertisement.%0A%0Ahttps%3A%2F%2Fsayartii.com%2FAE%2Fl%2Femo-734%2F2019-BMW-X7-50i-pure-excellence-ref-no-114531"
                    }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "fill-current text-white",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d:
                              "M18.403,5.633C16.708,3.936,14.454,3.001,12.053,3 c-4.948,0-8.976,4.027-8.978,8.977c0,1.582,0.413,3.126,1.198,4.488L3,21.116l4.759-1.249c1.312,0.715,2.788,1.092,4.29,1.093h0.004 l0,0c4.947,0,8.975-4.027,8.977-8.977C21.03,9.585,20.098,7.33,18.403,5.633 M12.053,19.445H12.05 c-1.339-0.001-2.652-0.36-3.798-1.041l-0.272-0.162l-2.824,0.741l0.753-2.753l-0.177-0.282c-0.747-1.188-1.141-2.561-1.141-3.971 c0.002-4.114,3.349-7.461,7.465-7.461c1.993,0.001,3.866,0.778,5.275,2.188c1.408,1.411,2.184,3.285,2.183,5.279 C19.512,16.097,16.165,19.445,12.053,19.445 M16.146,13.856c-0.225-0.113-1.327-0.655-1.533-0.73 c-0.205-0.075-0.354-0.112-0.504,0.112s-0.58,0.729-0.711,0.879s-0.262,0.168-0.486,0.056s-0.947-0.349-1.804-1.113 c-0.667-0.595-1.117-1.329-1.248-1.554s-0.014-0.346,0.099-0.458c0.101-0.1,0.224-0.262,0.336-0.393 c0.112-0.131,0.149-0.224,0.224-0.374s0.038-0.281-0.019-0.393c-0.056-0.113-0.505-1.217-0.692-1.666 C9.627,7.787,9.442,7.845,9.304,7.839c-0.13-0.006-0.28-0.008-0.429-0.008c-0.15,0-0.393,0.056-0.599,0.28 C8.07,8.336,7.491,8.878,7.491,9.982c0,1.104,0.804,2.171,0.916,2.321c0.112,0.15,1.582,2.415,3.832,3.387 c0.536,0.231,0.954,0.369,1.279,0.473c0.537,0.171,1.026,0.146,1.413,0.089c0.431-0.064,1.327-0.542,1.514-1.066 c0.187-0.524,0.187-0.973,0.131-1.067C16.52,14.025,16.369,13.968,16.146,13.856"
                          }
                        })
                      ]
                    ),
                    _vm._v(
                      "\n                        Whatsapp\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass:
                      "bg-pink-600 block flex items-center justify-center h-14 rounded-md text-white",
                    attrs: { target: "_blank", href: "tel:" + _vm.car.phone }
                  },
                  [
                    _vm._v(
                      "\n                        Show number\n                    "
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "mt-8 mb-4" },
                [
                  _c(
                    "li",
                    { staticClass: "flex justify-between text-lg my-2" },
                    [
                      _c("p", [_vm._v("Year")]),
                      _c("p", { staticClass: "max-w-3/5" }, [
                        _vm._v(_vm._s(_vm.car.year))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "flex justify-between text-lg my-2" },
                    [
                      _c("p", [_vm._v("Make")]),
                      _c("p", { staticClass: "max-w-3/5" }, [
                        _vm._v(_vm._s(_vm.car.car_model.car.title))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "flex justify-between text-lg my-2" },
                    [
                      _c("p", [_vm._v("Model")]),
                      _c("p", { staticClass: "max-w-3/5" }, [
                        _vm._v(_vm._s(_vm.car.car_model.title))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "flex justify-between text-lg my-2" },
                    [
                      _c("p", [_vm._v("Mileage")]),
                      _c("p", { staticClass: "max-w-3/5" }, [
                        _vm._v(_vm._s(_vm.car.mileage))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.car.specs, function(attr) {
                    return _c(
                      "li",
                      {
                        key: attr.id,
                        staticClass: "flex justify-between text-lg my-2"
                      },
                      [
                        _c("p", [_vm._v(_vm._s(attr.category.title))]),
                        _c("p", { staticClass: "max-w-3/5" }, [
                          _vm._v(_vm._s(attr.title))
                        ])
                      ]
                    )
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex flex-wrap" },
                _vm._l(_vm.car.tags, function(tag) {
                  return _c(
                    "div",
                    {
                      key: tag.id,
                      staticClass:
                        "border-gray-600 mr-3 mb-3 border shadow rounded-md py-2 px-3"
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(tag.title) +
                          "\n                    "
                      )
                    ]
                  )
                }),
                0
              )
            ])
          ]
        ),
        _vm._v(" "),
        _vm.suggestions.length
          ? _c("section", { staticClass: "md:w-10/12 px-2 mx-auto py-8" }, [
              _c("div", { staticClass: "text-center" }, [
                _c(
                  "h2",
                  { staticClass: "font-medium tracking-widest text-xl" },
                  [_vm._v("\n                    Suggested\n                ")]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 my-6"
                },
                _vm._l(_vm.suggestions, function(suggestion) {
                  return _c("car-card", {
                    key: suggestion.id,
                    attrs: { car: suggestion, active: suggestion.featured }
                  })
                }),
                1
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("cool-light-box", {
          attrs: { index: _vm.index, items: _vm.photos },
          on: {
            close: function($event) {
              _vm.index = null
            }
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ normalizeComponent
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);