(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"5HJk":function(t,e,i){"use strict";i("f8Wx")},LDJb:function(t,e,i){"use strict";i.r(e);var l={metaInfo(){return this.$seo({title:"Connect with me",description:"My description",keywords:"one,two",openGraph:{title:"Shailesh K S, Connect with me",type:"website"},twitter:{title:"Shailesh K S, Connect with me",type:"summary"},link:[],script:[]})},data:()=>({valid:!0,name:"",nameRules:[t=>!!t||"Name is required"],email:"",emailRules:[t=>!!t||"E-mail is required",t=>/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g.test(t)||"E-mail must be valid"],reqRules:[t=>!!t||"This Field is required"]}),methods:{submit(){this.$refs.form.validate()},reset(){this.$refs.form.reset()}}},s=(i("5HJk"),i("KHd+")),a=Object(s.a)(l,(function(){var t=this,e=t._self._c;return e("Layout",[e("section",{attrs:{id:"theSection"}},[e("transition",{attrs:{name:"slide-fade",appear:""}},[e("v-container",{attrs:{"fill-height":""}},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{staticClass:"rounded",staticStyle:{background:"#9575cd","max-width":"600px","text-align":"right"},attrs:{sm:"6","align-self":"center"}},[e("h1",{staticStyle:{"text-align":"right"}},[t._v("Links")]),e("v-card",[e("v-list-item",{attrs:{"two-line":"",href:"mailto: contactshellraiser@gmail.com"}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Email")]),e("v-list-item-subtitle",[t._v("contactshellraiser@gmail.com")])],1),e("v-icon",{attrs:{right:""}},[t._v("mdi-email-variant")])],1),e("v-list-item",{attrs:{"two-line":"",href:"https://github.com/shell-raiser",target:"_blank",rel:"noopener noreferrer"}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Github")]),e("v-list-item-subtitle",[t._v("@shell-raiser")])],1),e("v-icon",{attrs:{right:""}},[t._v("mdi-github")])],1),e("v-list-item",{attrs:{"two-line":"",href:"https://soundcloud.com/user-185450671",target:"_blank",rel:"noopener noreferrer"}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Soundcloud")]),e("v-list-item-subtitle",[t._v("soundcloud.com/user-185450671")])],1),e("v-icon",{attrs:{right:""}},[t._v("mdi-soundcloud")])],1),e("v-list-item",{attrs:{"two-line":"",href:"https://www.youtube.com/@shell-raiser",target:"_blank",rel:"noopener noreferrer"}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Youtube")]),e("v-list-item-subtitle",[t._v("@shell-raiser")])],1),e("v-icon",{attrs:{right:""}},[t._v("mdi-youtube")])],1),e("v-list-item",{attrs:{"two-line":"",href:"https://www.linkedin.com/in/shailesh-k-s",target:"_blank",rel:"noopener noreferrer"}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Linkedin")]),e("v-list-item-subtitle",[t._v("linkedin.com/in/shailesh-k-s")])],1),e("v-icon",{attrs:{right:""}},[t._v("mdi-linkedin")])],1),e("v-list-item",{attrs:{"two-line":"",href:"https://devfolio.co/@shell_raiser",target:"_blank",rel:"noopener noreferrer"}},[e("v-list-item-content",[e("v-list-item-title",[t._v("Devfolio")]),e("v-list-item-subtitle",[t._v("@shell_raiser")])],1),e("v-icon",{attrs:{right:""}},[t._v("D")])],1)],1)],1),e("v-col",{staticStyle:{"max-width":"600px"},attrs:{"align-self":"center"}},[e("h1",{staticClass:"rounded white--text"},[t._v("Contact")]),e("v-card",{staticStyle:{padding:"10px"},attrs:{color:"primary lighten-4"}},[e("v-form",{ref:"form",attrs:{"lazy-validation":"",action:"https://formspree.io/f/xeqdjwoo",method:"post"},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("v-text-field",{attrs:{label:"Name",type:"text",name:"name",id:"name",rules:t.nameRules,"aria-required":""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),e("v-text-field",{attrs:{label:"Email",name:"Email",id:"email",type:"email",rules:t.emailRules,hint:"example@gmail.com"}}),e("v-text-field",{attrs:{label:"Subject",name:"Subject",id:"subject",type:"subject",rules:t.reqRules,required:""}}),e("v-textarea",{attrs:{label:"Message",name:"message",id:"message",rules:t.reqRules,"auto-grow":"",rows:"2",placeholder:"Multi-line Field"}}),e("v-container",{staticClass:"d-flex"},[e("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid},on:{click:t.submit}},[t._v("submit")]),e("v-btn",{staticClass:"mr-4",on:{click:t.reset}},[t._v("clear")])],1)],1)],1)],1)],1)],1)],1)],1)])}),[],!1,null,"2b88a64b",null);e.default=a.exports},f8Wx:function(t,e,i){}}]);