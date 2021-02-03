(self.webpackChunk=self.webpackChunk||[]).push([[379],{8736:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});const r=(0,s(1900).Z)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"},[s("div",[t._t("logo")],2),t._v(" "),s("div",{staticClass:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"},[t._t("default")],2)])}),[],!1,null,null,null).exports},9683:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});const r=(0,s(1900).Z)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("inertia-link",{attrs:{href:"/"}},[s("svg",{staticClass:"w-16 h-16",attrs:{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"}}),t._v(" "),s("path",{attrs:{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"}})])])}),[],!1,null,null,null).exports},4359:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});const r={props:{type:{type:String,default:"submit"}}};const a=(0,s(1900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150",attrs:{type:t.type}},[t._t("default")],2)}),[],!1,null,null,null).exports},9352:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});const r={model:{prop:"checked",event:"change"},props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},computed:{proxyChecked:{get:function(){return this.checked},set:function(t){this.$emit("change",t)}}}};const a=(0,s(1900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.proxyChecked,expression:"proxyChecked"}],staticClass:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",attrs:{type:"checkbox"},domProps:{value:t.value,checked:Array.isArray(t.proxyChecked)?t._i(t.proxyChecked,t.value)>-1:t.proxyChecked},on:{change:function(e){var s=t.proxyChecked,r=e.target,a=!!r.checked;if(Array.isArray(s)){var o=t.value,n=t._i(s,o);r.checked?n<0&&(t.proxyChecked=s.concat([o])):n>-1&&(t.proxyChecked=s.slice(0,n).concat(s.slice(n+1)))}else t.proxyChecked=a}}})}),[],!1,null,null,null).exports},9006:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});const r={props:["value"],methods:{focus:function(){this.$refs.input.focus()}}};const a=(0,s(1900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{ref:"input",staticClass:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})}),[],!1,null,null,null).exports},5667:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});const r={props:["value"]};const a=(0,s(1900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"block font-medium text-sm text-gray-700"},[t.value?s("span",[t._v(t._s(t.value))]):s("span",[t._t("default")],2)])}),[],!1,null,null,null).exports},2935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});const r={computed:{errors:function(){return this.$page.props.errors},hasErrors:function(){return Object.keys(this.errors).length>0}}};const a=(0,s(1900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.hasErrors?s("div",[s("div",{staticClass:"font-medium text-red-600"},[t._v("Whoops! Something went wrong.")]),t._v(" "),s("ul",{staticClass:"mt-3 list-disc list-inside text-sm text-red-600"},t._l(t.errors,(function(e,r){return s("li",{key:r},[t._v(t._s(e))])})),0)]):t._e()}),[],!1,null,null,null).exports},5379:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});var r=s(8736),a=s(9683),o=s(4359),n=s(9006),i=s(9352),l=s(5667),c=s(2935);const u={components:{JetAuthenticationCard:r.Z,JetAuthenticationCardLogo:a.Z,JetButton:o.Z,JetInput:n.Z,JetCheckbox:i.Z,JetLabel:l.Z,JetValidationErrors:c.Z},data:function(){return{form:this.$inertia.form({name:"",email:"",password:"",password_confirmation:"",terms:!1})}},methods:{submit:function(){var t=this;this.form.post(this.route("register"),{onFinish:function(){return t.form.reset("password","password_confirmation")}})}}};const d=(0,s(1900).Z)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("jet-authentication-card",{scopedSlots:t._u([{key:"logo",fn:function(){return[s("jet-authentication-card-logo")]},proxy:!0}])},[t._v(" "),s("jet-validation-errors",{staticClass:"mb-4"}),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("div",[s("jet-label",{attrs:{for:"name",value:"Name"}}),t._v(" "),s("jet-input",{staticClass:"mt-1 block w-full",attrs:{id:"name",type:"text",required:"",autofocus:"",autocomplete:"name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),s("div",{staticClass:"mt-4"},[s("jet-label",{attrs:{for:"email",value:"Email"}}),t._v(" "),s("jet-input",{staticClass:"mt-1 block w-full",attrs:{id:"email",type:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),s("div",{staticClass:"mt-4"},[s("jet-label",{attrs:{for:"password",value:"Password"}}),t._v(" "),s("jet-input",{staticClass:"mt-1 block w-full",attrs:{id:"password",type:"password",required:"",autocomplete:"new-password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),s("div",{staticClass:"mt-4"},[s("jet-label",{attrs:{for:"password_confirmation",value:"Confirm Password"}}),t._v(" "),s("jet-input",{staticClass:"mt-1 block w-full",attrs:{id:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1),t._v(" "),t.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?s("div",{staticClass:"mt-4"},[s("jet-label",{attrs:{for:"terms"}},[s("div",{staticClass:"flex items-center"},[s("jet-checkbox",{attrs:{name:"terms",id:"terms"},model:{value:t.form.terms,callback:function(e){t.$set(t.form,"terms",e)},expression:"form.terms"}}),t._v(" "),s("div",{staticClass:"ml-2"},[t._v("\n                        I agree to the "),s("a",{staticClass:"underline text-sm text-gray-600 hover:text-gray-900",attrs:{target:"_blank",href:t.route("terms.show")}},[t._v("Terms of Service")]),t._v(" and "),s("a",{staticClass:"underline text-sm text-gray-600 hover:text-gray-900",attrs:{target:"_blank",href:t.route("policy.show")}},[t._v("Privacy Policy")])])],1)])],1):t._e(),t._v(" "),s("div",{staticClass:"flex items-center justify-end mt-4"},[s("inertia-link",{staticClass:"underline text-sm text-gray-600 hover:text-gray-900",attrs:{href:t.route("login")}},[t._v("\n                Already registered?\n            ")]),t._v(" "),s("jet-button",{staticClass:"ml-4",class:{"opacity-25":t.form.processing},attrs:{disabled:t.form.processing}},[t._v("\n                Register\n            ")])],1)])],1)}),[],!1,null,null,null).exports}}]);