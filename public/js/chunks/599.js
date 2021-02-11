(self.webpackChunk=self.webpackChunk||[]).push([[599],{1027:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});const o={props:["on"]};const n=(0,s(1900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("transition",{attrs:{"leave-active-class":"transition ease-in duration-1000","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.on,expression:"on"}],staticClass:"text-sm text-gray-600"},[t._t("default")],2)])],1)}),[],!1,null,null,null).exports},4359:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});const o={props:{type:{type:String,default:"submit"}}};const n=(0,s(1900).Z)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150",attrs:{type:t.type}},[t._t("default")],2)}),[],!1,null,null,null).exports},3292:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});const o={components:{JetSectionTitle:s(4459).Z},computed:{hasActions:function(){return!!this.$slots.actions}}};const n=(0,s(1900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"md:grid md:grid-cols-3 md:gap-6"},[s("jet-section-title",{scopedSlots:t._u([{key:"title",fn:function(){return[t._t("title")]},proxy:!0},{key:"description",fn:function(){return[t._t("description")]},proxy:!0}],null,!0)}),t._v(" "),s("div",{staticClass:"mt-5 md:mt-0 md:col-span-2"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.$emit("submitted")}}},[s("div",{staticClass:"shadow overflow-hidden sm:rounded-md"},[s("div",{staticClass:"px-4 py-5 bg-white sm:p-6"},[s("div",{staticClass:"grid grid-cols-6 gap-6"},[t._t("form")],2)]),t._v(" "),t.hasActions?s("div",{staticClass:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6"},[t._t("actions")],2):t._e()])])])],1)}),[],!1,null,null,null).exports},9006:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});const o={props:["value"],methods:{focus:function(){this.$refs.input.focus()}}};const n=(0,s(1900).Z)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{ref:"input",staticClass:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})}),[],!1,null,null,null).exports},7804:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});const o={props:["message"]};const n=(0,s(1900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.message,expression:"message"}]},[s("p",{staticClass:"text-sm text-red-600"},[t._v("\n        "+t._s(t.message)+"\n    ")])])}),[],!1,null,null,null).exports},5667:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});const o={props:["value"]};const n=(0,s(1900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"block font-medium text-sm text-gray-700"},[t.value?s("span",[t._v(t._s(t.value))]):s("span",[t._t("default")],2)])}),[],!1,null,null,null).exports},4760:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});const o={props:{type:{type:String,default:"button"}}};const n=(0,s(1900).Z)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150",attrs:{type:t.type}},[t._t("default")],2)}),[],!1,null,null,null).exports},4459:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});const o=(0,s(1900).Z)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"md:col-span-1"},[s("div",{staticClass:"px-4 sm:px-0"},[s("h3",{staticClass:"text-lg font-medium text-gray-900"},[t._t("title")],2),t._v(" "),s("p",{staticClass:"mt-1 text-sm text-gray-600"},[t._t("description")],2)])])}),[],!1,null,null,null).exports},2599:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>p});var o=s(4359),n=s(3292),r=s(9006),a=s(7804),i=s(5667),l=s(1027),c=s(4760);const u={components:{JetActionMessage:l.Z,JetButton:o.Z,JetFormSection:n.Z,JetInput:r.Z,JetInputError:a.Z,JetLabel:i.Z,JetSecondaryButton:c.Z},props:["user"],data:function(){return{form:this.$inertia.form({_method:"PUT",name:this.user.name,email:this.user.email,photo:null}),photoPreview:null}},methods:{updateProfileInformation:function(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0})},selectNewPhoto:function(){this.$refs.photo.click()},updatePhotoPreview:function(){var t=this,e=new FileReader;e.onload=function(e){t.photoPreview=e.target.result},e.readAsDataURL(this.$refs.photo.files[0])},deletePhoto:function(){var t=this;this.$inertia.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:function(){return t.photoPreview=null}})}}};const p=(0,s(1900).Z)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("jet-form-section",{on:{submitted:t.updateProfileInformation},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Profile Information\n    ")]},proxy:!0},{key:"description",fn:function(){return[t._v("\n        Update your account's profile information and email address.\n    ")]},proxy:!0},{key:"form",fn:function(){return[t.$page.props.jetstream.managesProfilePhotos?s("div",{staticClass:"col-span-6 sm:col-span-4"},[s("input",{ref:"photo",staticClass:"hidden",attrs:{type:"file"},on:{change:t.updatePhotoPreview}}),t._v(" "),s("jet-label",{attrs:{for:"photo",value:"Photo"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.photoPreview,expression:"! photoPreview"}],staticClass:"mt-2"},[s("img",{staticClass:"rounded-full h-20 w-20 object-cover",attrs:{src:t.user.profile_photo_url,alt:t.user.name}})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.photoPreview,expression:"photoPreview"}],staticClass:"mt-2"},[s("span",{staticClass:"block rounded-full w-20 h-20",style:"background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+t.photoPreview+"');"})]),t._v(" "),s("jet-secondary-button",{staticClass:"mt-2 mr-2",attrs:{type:"button"},nativeOn:{click:function(e){return e.preventDefault(),t.selectNewPhoto(e)}}},[t._v("\n                Select A New Photo\n            ")]),t._v(" "),t.user.profile_photo_path?s("jet-secondary-button",{staticClass:"mt-2",attrs:{type:"button"},nativeOn:{click:function(e){return e.preventDefault(),t.deletePhoto(e)}}},[t._v("\n                Remove Photo\n            ")]):t._e(),t._v(" "),s("jet-input-error",{staticClass:"mt-2",attrs:{message:t.form.errors.photo}})],1):t._e(),t._v(" "),s("div",{staticClass:"col-span-6 sm:col-span-4"},[s("jet-label",{attrs:{for:"name",value:"Name"}}),t._v(" "),s("jet-input",{staticClass:"mt-1 block w-full",attrs:{id:"name",type:"text",autocomplete:"name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),s("jet-input-error",{staticClass:"mt-2",attrs:{message:t.form.errors.name}})],1),t._v(" "),s("div",{staticClass:"col-span-6 sm:col-span-4"},[s("jet-label",{attrs:{for:"email",value:"Email"}}),t._v(" "),s("jet-input",{staticClass:"mt-1 block w-full",attrs:{id:"email",type:"email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),s("jet-input-error",{staticClass:"mt-2",attrs:{message:t.form.errors.email}})],1)]},proxy:!0},{key:"actions",fn:function(){return[s("jet-action-message",{staticClass:"mr-3",attrs:{on:t.form.recentlySuccessful}},[t._v("\n            Saved.\n        ")]),t._v(" "),s("jet-button",{class:{"opacity-25":t.form.processing},attrs:{disabled:t.form.processing}},[t._v("\n            Save\n        ")])]},proxy:!0}])})}),[],!1,null,null,null).exports},1900:(t,e,s)=>{"use strict";function o(t,e,s,o,n,r,a,i){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):n&&(l=i?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}s.d(e,{Z:()=>o})}}]);