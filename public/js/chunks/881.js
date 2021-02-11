(self.webpackChunk=self.webpackChunk||[]).push([[881],{8736:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});const n=(0,s(1900).Z)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"},[s("div",[t._t("logo")],2),t._v(" "),s("div",{staticClass:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"},[t._t("default")],2)])}),[],!1,null,null,null).exports},9683:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});const n=(0,s(1900).Z)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("inertia-link",{attrs:{href:"/"}},[s("svg",{staticClass:"w-16 h-16",attrs:{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"}}),t._v(" "),s("path",{attrs:{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"}})])])}),[],!1,null,null,null).exports},4359:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});const n={props:{type:{type:String,default:"submit"}}};const r=(0,s(1900).Z)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150",attrs:{type:t.type}},[t._t("default")],2)}),[],!1,null,null,null).exports},9006:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});const n={props:["value"],methods:{focus:function(){this.$refs.input.focus()}}};const r=(0,s(1900).Z)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{ref:"input",staticClass:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})}),[],!1,null,null,null).exports},5667:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});const n={props:["value"]};const r=(0,s(1900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"block font-medium text-sm text-gray-700"},[t.value?s("span",[t._v(t._s(t.value))]):s("span",[t._t("default")],2)])}),[],!1,null,null,null).exports},2935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});const n={computed:{errors:function(){return this.$page.props.errors},hasErrors:function(){return Object.keys(this.errors).length>0}}};const r=(0,s(1900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.hasErrors?s("div",[s("div",{staticClass:"font-medium text-red-600"},[t._v("Whoops! Something went wrong.")]),t._v(" "),s("ul",{staticClass:"mt-3 list-disc list-inside text-sm text-red-600"},t._l(t.errors,(function(e,n){return s("li",{key:n},[t._v(t._s(e))])})),0)]):t._e()}),[],!1,null,null,null).exports},2881:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var n=s(8736),r=s(9683),o=s(4359),i=s(9006),a=s(5667),l=s(2935);const u={components:{JetAuthenticationCard:n.Z,JetAuthenticationCardLogo:r.Z,JetButton:o.Z,JetInput:i.Z,JetLabel:a.Z,JetValidationErrors:l.Z},data:function(){return{form:this.$inertia.form({password:""})}},methods:{submit:function(){var t=this;this.form.post(this.route("password.confirm"),{onFinish:function(){return t.form.reset()}})}}};const c=(0,s(1900).Z)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("jet-authentication-card",{scopedSlots:t._u([{key:"logo",fn:function(){return[s("jet-authentication-card-logo")]},proxy:!0}])},[t._v(" "),s("div",{staticClass:"mb-4 text-sm text-gray-600"},[t._v("\n        This is a secure area of the application. Please confirm your password before continuing.\n    ")]),t._v(" "),s("jet-validation-errors",{staticClass:"mb-4"}),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("div",[s("jet-label",{attrs:{for:"password",value:"Password"}}),t._v(" "),s("jet-input",{staticClass:"mt-1 block w-full",attrs:{id:"password",type:"password",required:"",autocomplete:"current-password",autofocus:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),s("div",{staticClass:"flex justify-end mt-4"},[s("jet-button",{staticClass:"ml-4",class:{"opacity-25":t.form.processing},attrs:{disabled:t.form.processing}},[t._v("\n                Confirm\n            ")])],1)])],1)}),[],!1,null,null,null).exports},1900:(t,e,s)=>{"use strict";function n(t,e,s,n,r,o,i,a){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=s,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=l):r&&(l=a?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}s.d(e,{Z:()=>n})}}]);