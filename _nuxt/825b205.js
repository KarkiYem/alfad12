(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1012:function(e,t,n){"use strict";n(786)},1161:function(e,t,n){"use strict";n.r(t);n(11),n(245),n(86);var r,o=n(165),l=n.n(o),c=n(10),d=n(9),m=(n(406),n(407)),f=n.n(m),v=(n(408),n(409)),h=n.n(v),y=(n(37),n(68)),_=n(403),C=n(404),w=n(405),k=n(402),x=n(401),O=n.n(x),S=(n(426),{name:"form-components",layout:"DashboardLayout",middleware:["isAuthenticated","checkAdmin"],components:(r={CustomStylesValidation:_.a,BrowserDefaultsValidation:C.a,ServerSideValidation:w.a},Object(d.a)(r,h.a.name,h.a),Object(d.a)(r,f.a.name,f.a),Object(d.a)(r,"FileInput",k.a),Object(d.a)(r,"flatPicker",O.a),r),data:function(){return{validated:!1,seen:!0,se:!0,path1:"",sin:!0,model:{id:"",name:"",number:"",icon:""},link:"",obj:null}},methods:{firstFormSubmit:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e,r=new FormData,""==n.model.name||""==n.model.number||""==n.model.icon){t.next=9;break}for(o in n.sin=!1,n.model)n.model.hasOwnProperty(o)&&r.append(o,n.model[o]);return t.next=7,y.a.collection("Analytics").update(n.model.id,r).then((function(){l()({showClose:!0,message:"Updated Successfuly!",type:"success"}),setTimeout((function(){window.close()}),1500)})).catch((function(e){n.sin=!0,l()({showClose:!0,message:"Something went wrong!",type:"warning"})}));case 7:t.next=10;break;case 9:l()({showClose:!0,message:"All fields are required!",type:"warning"});case 10:case"end":return t.stop()}}),t)})))()},getData:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,c,d,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=e).path1=y.c,r=n.$route.params.id,t.next=5,y.a.collection("Analytics").getOne(r);case 5:(o=t.sent)&&(l=o.id,c=o.name,d=o.number,m=o.icon,n.model={id:l,name:c,number:d,icon:m});case 7:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.getData()}}),$=(n(1012),n(7)),component=Object($.a)(S,(function(){var e=this,t=e._self._c;return t("div",[t("base-header",{staticClass:"pb-6"},[t("div",{staticClass:"row align-items-center py-4"},[t("div",{staticClass:"col-lg-6 col-7"},[t("h6",{staticClass:"h2 text-white"},[e._v("Analytic Info")])])])]),e._v(" "),t("div",{staticClass:"container-fluid mt--6"},[t("div",{staticClass:"row ht"},[t("div",{staticClass:"col"},[t("div",{staticClass:"card-wrapper"},[t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var r=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(e){e.preventDefault()}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Name",name:"name",placeholder:"Enter Name","success-message":"Looks good!",rules:"required"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Number",name:"Number",placeholder:"Enter Number","success-message":"Looks good!",rules:"required"},model:{value:e.model.number,callback:function(t){e.$set(e.model,"number",t)},expression:"model.number"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Icon",name:"Icon",placeholder:"Enter Icon","success-message":"Looks good!",rules:"required"},model:{value:e.model.icon,callback:function(t){e.$set(e.model,"icon",t)},expression:"model.icon"}})],1)]),e._v(" "),1==e.sin?t("base-button",{attrs:{type:"success","native-type":"submit"},on:{click:function(t){return r(e.firstFormSubmit)}}},[e._v("Update")]):t("base-button",{attrs:{type:"success","native-type":"submit",disabled:""}},[e._v("Updating\n                "),t("p",{staticClass:"spinner"})])],1)]}}])})],1)])])])],1)}),[],!1,null,"0d74ddcb",null);t.default=component.exports},401:function(e,t,n){var r;"undefined"!=typeof self&&self,e.exports=(r=n(427),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=r},function(e,t,n){"use strict";n.r(t),n.d(t,"Component",(function(){return p})),n.d(t,"Plugin",(function(){return m}));var r=n(0),o=n.n(r),i=["onChange","onClose","onDestroy","onMonthChange","onOpen","onYearChange"];function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=function(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},l=function(e){return e&&e.length?e:null},c=function(e){return u({},e)},s=i.concat(["onValueUpdate","onDayCreate","onParseConfig","onReady","onPreCalendarPosition","onKeyDown"]),d=["locale","showMonths"],p={name:"flat-pickr",render:function(e){return e("input",{attrs:{type:"text","data-input":!0},props:{disabled:this.disabled},on:{input:this.onInput}})},props:{value:{default:null,required:!0,validator:function(e){return null===e||e instanceof Date||"string"==typeof e||e instanceof String||e instanceof Array||"number"==typeof e}},config:{type:Object,default:function(){return{wrap:!1,defaultDate:null}}},events:{type:Array,default:function(){return i}},disabled:{type:Boolean,default:!1}},data:function(){return{fp:null}},mounted:function(){var e=this;if(!this.fp){var t=c(this.config);this.events.forEach((function(n){var r,i=o.a.defaultConfig[n]||[];t[n]=(r=t[n]||[],r instanceof Array?r:[r]).concat(i,(function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.$emit.apply(e,[a(n)].concat(r))}))})),t.defaultDate=this.value||t.defaultDate,this.fp=new o.a(this.getElem(),t),this.fpInput().addEventListener("blur",this.onBlur),this.$on("on-close",this.onClose),this.$watch("disabled",this.watchDisabled,{immediate:!0})}},methods:{getElem:function(){return this.config.wrap?this.$el.parentNode:this.$el},onInput:function(e){var t=this,n=e.target;this.$nextTick((function(){t.$emit("input",l(n.value))}))},fpInput:function(){return this.fp.altInput||this.fp.input},onBlur:function(e){this.$emit("blur",l(e.target.value))},onClose:function(e,t){this.$emit("input",l(t))},watchDisabled:function(e){e?this.fpInput().setAttribute("disabled",e):this.fpInput().removeAttribute("disabled")}},watch:{config:{deep:!0,handler:function(e){var t=this,n=c(e);s.forEach((function(e){delete n[e]})),this.fp.set(n),d.forEach((function(e){void 0!==n[e]&&t.fp.set(e,n[e])}))}},value:function(e){e!==l(this.$el.value)&&this.fp&&this.fp.setDate(e,!0)}},beforeDestroy:function(){this.fp&&(this.fpInput().removeEventListener("blur",this.onBlur),this.fp.destroy(),this.fp=null)}},m=function(e,t){var n="flat-pickr";"string"==typeof t&&(n=t),e.component(n,p)};p.install=m,t.default=p}]).default)},402:function(e,t,n){"use strict";n(32),n(21),n(26),n(38),n(39),n(23),n(19),n(44),n(45),n(43);var r=n(9);n(11);function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"file-input",inheritAttrs:!1,props:{initialLabel:{type:String,default:"Select file"}},data:function(){return{files:[]}},computed:{listeners:function(){return d(d({},this.$listeners),{},{change:this.fileChange})},label:function(){var e,t=[],n=o(this.files);try{for(n.s();!(e=n.n()).done;){var r=e.value;t.push(r.name)}}catch(e){n.e(e)}finally{n.f()}return t.length?t.join(", "):this.initialLabel}},methods:{fileChange:function(e){this.files=e.target.files,this.$emit("change",this.files)}}},f=n(7),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"custom-file"},[t("input",e._g(e._b({staticClass:"custom-file-input",attrs:{type:"file",id:"customFileLang",lang:"en"}},"input",e.$attrs,!1),e.listeners)),e._v(" "),t("label",{staticClass:"custom-file-label",attrs:{for:"customFileLang"}},[e._v("\n    "+e._s(e.label)+"\n  ")])])}),[],!1,null,null,null);t.a=component.exports},403:function(e,t,n){"use strict";var r=n(10),o=(n(37),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{firstFormSubmit:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),l=n(7),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Custom styles")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        For custom form validation messages, you’ll need to provide error messages to your\n        "),t("code",[e._v("<base-input>")]),e._v(" components. This disables the browser default feedback tooltips, but still\n        provides access to the form\n        validation APIs in JavaScript.\n        "),t("br"),t("br"),e._v("\n        When attempting to submit, you’ll see the"),t("code",[e._v(".is-valid")]),e._v(" and "),t("code",[e._v(".is-invalid")]),e._v(" classes applied\n        to your form controls.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var r=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),r(e.firstFormSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name","success-message":"Looks good!",rules:"required"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",rules:"required","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",rules:"required"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",rules:"required"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",rules:"required"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",rules:"required"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},404:function(e,t,n){"use strict";var r=n(10),o=(n(37),{components:{},data:function(){return{model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{submit:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),l=n(7),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Browser defaults")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll\n        see a slightly different style of feedback.\n        "),t("br"),t("br"),e._v("\n        While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name",required:""},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",required:""},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",required:""},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",required:""},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",required:""},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",required:""},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n        Agree to terms and conditions\n      ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)])}),[],!1,null,null,null);t.a=component.exports},405:function(e,t,n){"use strict";var r=n(10),o=(n(37),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{onSubmit:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$refs.formValidator.validate()}}),l=n(7),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Server side validation")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        We recommend using client side validation, but in case you require server side, you can indicate invalid and\n        valid form fields with "),t("code",[e._v(".is-invalid")]),e._v(" and "),t("code",[e._v(".is-valid")]),e._v(". Note that\n        "),t("code",[e._v(".invalid-feedback")]),e._v("\n        is also supported with these classes.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var r=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),r(e.onSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",rules:"required",name:"First name",placeholder:"First name","success-message":"Looks good!"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",rules:"required",name:"Last name",placeholder:"Last name","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",rules:"required",name:"Username",placeholder:"Username","success-message":"Looks good!"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",rules:"required",placeholder:"City","success-message":"Looks good!"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",rules:"required",placeholder:"State","success-message":"Looks good!"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",rules:"required",placeholder:"Zip","success-message":"Looks good!"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},786:function(e,t,n){}}]);