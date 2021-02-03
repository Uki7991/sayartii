(self.webpackChunk=self.webpackChunk||[]).push([[292],{8736:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});const s=(0,r(1900).Z)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"},[r("div",[e._t("logo")],2),e._v(" "),r("div",{staticClass:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"},[e._t("default")],2)])}),[],!1,null,null,null).exports},9683:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});const s=(0,r(1900).Z)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("inertia-link",{attrs:{href:"/"}},[r("svg",{staticClass:"w-16 h-16",attrs:{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"}}),e._v(" "),r("path",{attrs:{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"}})])])}),[],!1,null,null,null).exports},4359:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const s={props:{type:{type:String,default:"submit"}}};const n=(0,r(1900).Z)(s,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{staticClass:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150",attrs:{type:e.type}},[e._t("default")],2)}),[],!1,null,null,null).exports},9352:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const s={model:{prop:"checked",event:"change"},props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},computed:{proxyChecked:{get:function(){return this.checked},set:function(e){this.$emit("change",e)}}}};const n=(0,r(1900).Z)(s,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"model",rawName:"v-model",value:e.proxyChecked,expression:"proxyChecked"}],staticClass:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",attrs:{type:"checkbox"},domProps:{value:e.value,checked:Array.isArray(e.proxyChecked)?e._i(e.proxyChecked,e.value)>-1:e.proxyChecked},on:{change:function(t){var r=e.proxyChecked,s=t.target,n=!!s.checked;if(Array.isArray(r)){var o=e.value,a=e._i(r,o);s.checked?a<0&&(e.proxyChecked=r.concat([o])):a>-1&&(e.proxyChecked=r.slice(0,a).concat(r.slice(a+1)))}else e.proxyChecked=n}}})}),[],!1,null,null,null).exports},9006:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const s={props:["value"],methods:{focus:function(){this.$refs.input.focus()}}};const n=(0,r(1900).Z)(s,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{ref:"input",staticClass:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})}),[],!1,null,null,null).exports},5667:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const s={props:["value"]};const n=(0,r(1900).Z)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"block font-medium text-sm text-gray-700"},[e.value?r("span",[e._v(e._s(e.value))]):r("span",[e._t("default")],2)])}),[],!1,null,null,null).exports},2935:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const s={computed:{errors:function(){return this.$page.props.errors},hasErrors:function(){return Object.keys(this.errors).length>0}}};const n=(0,r(1900).Z)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.hasErrors?r("div",[r("div",{staticClass:"font-medium text-red-600"},[e._v("Whoops! Something went wrong.")]),e._v(" "),r("ul",{staticClass:"mt-3 list-disc list-inside text-sm text-red-600"},e._l(e.errors,(function(t,s){return r("li",{key:s},[e._v(e._s(t))])})),0)]):e._e()}),[],!1,null,null,null).exports},6292:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var s=r(8736),n=r(9683),o=r(4359),a=r(9006),i=r(9352),l=r(5667),c=r(2935);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const f={components:{JetAuthenticationCard:s.Z,JetAuthenticationCardLogo:n.Z,JetButton:o.Z,JetInput:a.Z,JetCheckbox:i.Z,JetLabel:l.Z,JetValidationErrors:c.Z},props:{canResetPassword:Boolean,status:String},data:function(){return{form:this.$inertia.form({email:"",password:"",remember:!1})}},methods:{submit:function(){var e=this;this.form.transform((function(t){return d(d({},t),{},{remember:e.form.remember?"on":""})})).post(this.route("login"),{onFinish:function(){return e.form.reset("password")}})}}};const p=(0,r(1900).Z)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("jet-authentication-card",{scopedSlots:e._u([{key:"logo",fn:function(){return[r("jet-authentication-card-logo")]},proxy:!0}])},[e._v(" "),r("jet-validation-errors",{staticClass:"mb-4"}),e._v(" "),e.status?r("div",{staticClass:"mb-4 font-medium text-sm text-green-600"},[e._v("\n        "+e._s(e.status)+"\n    ")]):e._e(),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("div",[r("jet-label",{attrs:{for:"email",value:"Email"}}),e._v(" "),r("jet-input",{staticClass:"mt-1 block w-full",attrs:{id:"email",type:"email",required:"",autofocus:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("div",{staticClass:"mt-4"},[r("jet-label",{attrs:{for:"password",value:"Password"}}),e._v(" "),r("jet-input",{staticClass:"mt-1 block w-full",attrs:{id:"password",type:"password",required:"",autocomplete:"current-password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),r("div",{staticClass:"block mt-4"},[r("label",{staticClass:"flex items-center"},[r("jet-checkbox",{attrs:{name:"remember"},model:{value:e.form.remember,callback:function(t){e.$set(e.form,"remember",t)},expression:"form.remember"}}),e._v(" "),r("span",{staticClass:"ml-2 text-sm text-gray-600"},[e._v("Remember me")])],1)]),e._v(" "),r("div",{staticClass:"flex items-center justify-end mt-4"},[e.canResetPassword?r("inertia-link",{staticClass:"underline text-sm text-gray-600 hover:text-gray-900",attrs:{href:e.route("password.request")}},[e._v("\n                Forgot your password?\n            ")]):e._e(),e._v(" "),r("jet-button",{staticClass:"ml-4",class:{"opacity-25":e.form.processing},attrs:{disabled:e.form.processing}},[e._v("\n                Login\n            ")])],1)])],1)}),[],!1,null,null,null).exports}}]);