(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_SelectWithSearch_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SelectWithSearch.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SelectWithSearch.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Jetstream_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Jetstream/Button */ "./resources/js/Jetstream/Button.vue");
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
  components: {
    Button: _Jetstream_Button__WEBPACK_IMPORTED_MODULE_0__.default
  },
  model: {
    prop: 'option',
    event: 'change'
  },
  props: {
    withAll: {
      type: Boolean
    },
    collection: {
      required: true,
      type: Array
    },
    option: {
      required: true
    }
  },
  data: function data() {
    return {
      collapsed: [],
      searchWord: '',
      active: false
    };
  },
  watch: {
    searchWord: function searchWord(newVal) {
      this.collapsed.shift();
      this.active = newVal !== '';
    }
  },
  computed: {
    filteredCollection: function filteredCollection() {
      var _this = this;

      return this.collection.filter(function (item) {
        return item.title.toLowerCase().includes(_this.searchWord.toLowerCase());
      });
    },
    selectedOptionValue: function selectedOptionValue() {
      if (Array.isArray(this.option)) {
        return this.option[0].title + ' - ' + this.option[1].title;
      }

      return this.option ? this.option.title : 'Search...';
    }
  },
  methods: {
    toggleModels: function toggleModels(itemId) {
      if (this.collapsed.shift() !== itemId) {
        this.collapsed.push(itemId);
      }
    },
    selectOption: function selectOption(option) {
      this.active = false;
      this.$emit('change', option);
      this.searchWord = '';
    }
  },
  updated: function updated() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Jetstream/Button.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Jetstream/Button.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    type: {
      type: String,
      "default": 'submit'
    }
  }
});

/***/ }),

/***/ "./resources/js/Components/SelectWithSearch.vue":
/*!******************************************************!*\
  !*** ./resources/js/Components/SelectWithSearch.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _SelectWithSearch_vue_vue_type_template_id_654a4175_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectWithSearch.vue?vue&type=template&id=654a4175&scoped=true& */ "./resources/js/Components/SelectWithSearch.vue?vue&type=template&id=654a4175&scoped=true&");
/* harmony import */ var _SelectWithSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectWithSearch.vue?vue&type=script&lang=js& */ "./resources/js/Components/SelectWithSearch.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SelectWithSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SelectWithSearch_vue_vue_type_template_id_654a4175_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectWithSearch_vue_vue_type_template_id_654a4175_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "654a4175",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/SelectWithSearch.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Jetstream/Button.vue":
/*!*******************************************!*\
  !*** ./resources/js/Jetstream/Button.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Button_vue_vue_type_template_id_afb94134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=afb94134& */ "./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134&");
/* harmony import */ var _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=js& */ "./resources/js/Jetstream/Button.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Button_vue_vue_type_template_id_afb94134___WEBPACK_IMPORTED_MODULE_0__.render,
  _Button_vue_vue_type_template_id_afb94134___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Jetstream/Button.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/SelectWithSearch.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Components/SelectWithSearch.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectWithSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectWithSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SelectWithSearch.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectWithSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Jetstream/Button.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Jetstream/Button.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Button.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Jetstream/Button.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/SelectWithSearch.vue?vue&type=template&id=654a4175&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Components/SelectWithSearch.vue?vue&type=template&id=654a4175&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectWithSearch_vue_vue_type_template_id_654a4175_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectWithSearch_vue_vue_type_template_id_654a4175_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectWithSearch_vue_vue_type_template_id_654a4175_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectWithSearch.vue?vue&type=template&id=654a4175&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SelectWithSearch.vue?vue&type=template&id=654a4175&scoped=true&");


/***/ }),

/***/ "./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134&":
/*!**************************************************************************!*\
  !*** ./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_afb94134___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_afb94134___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_afb94134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Button.vue?vue&type=template&id=afb94134& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SelectWithSearch.vue?vue&type=template&id=654a4175&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/SelectWithSearch.vue?vue&type=template&id=654a4175&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "relative" }, [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.searchWord,
          expression: "searchWord"
        }
      ],
      staticClass:
        "w-full border-0 focus:outline-none focus:border-0 focus:ring-0",
      attrs: { type: "text", placeholder: _vm.selectedOptionValue },
      domProps: { value: _vm.searchWord },
      on: {
        input: [
          function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.searchWord = $event.target.value
          },
          function($event) {
            return (_vm.searchWord = $event.target.value)
          }
        ]
      }
    }),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass:
          "focus:outline-none absolute top-1/2 right-4 transform -translate-y-1/2",
        on: {
          click: function($event) {
            $event.preventDefault()
            _vm.active = !_vm.active
          }
        }
      },
      [
        _c(
          "svg",
          {
            staticClass:
              "fill-current text-gray-600 transition-all duration-300 transform",
            class: { "-rotate-180": _vm.active },
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
                d:
                  "M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z"
              }
            })
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.active,
            expression: "active"
          }
        ],
        staticClass:
          "overflow-y-auto max-h-4/10vh absolute w-full top-full left-0 shadow-xl border border-t-0 divide-y divide-gray-300"
      },
      _vm._l(_vm.filteredCollection, function(item) {
        return _c("div", { key: item.id }, [
          _c(
            "button",
            {
              staticClass:
                "bg-gray-100 text-gray-900 px-3 py-2 cursor-pointer hover:bg-gray-200 focus:outline-none w-full text-left",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.toggleModels(item.id)
                }
              }
            },
            [_vm._v(_vm._s(item.title) + "\n            ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.collapsed.includes(item.id),
                  expression: "collapsed.includes(item.id)"
                }
              ],
              staticClass: "divide-y divide-gray-300"
            },
            [
              _vm.withAll
                ? _c(
                    "button",
                    {
                      staticClass:
                        "bg-gray-100 text-gray-900 px-6 py-2 cursor-pointer hover:bg-gray-200 focus:outline-none w-full text-left",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.selectOption(item)
                        }
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(item.title) +
                          "\n                    - All models\n                "
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm._l(item.models, function(model) {
                return _c(
                  "button",
                  {
                    key: model.id,
                    staticClass:
                      "bg-gray-100 text-gray-900 px-6 py-2 cursor-pointer hover:bg-gray-200 focus:outline-none w-full text-left",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.selectOption([item, model])
                      }
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(item.title) +
                        " - " +
                        _vm._s(model.title) +
                        "\n                "
                    )
                  ]
                )
              })
            ],
            2
          )
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Jetstream/Button.vue?vue&type=template&id=afb94134& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "button",
    {
      staticClass:
        "inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150",
      attrs: { type: _vm.type }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);