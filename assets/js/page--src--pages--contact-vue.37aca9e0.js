(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+QYY":function(e,t,i){"use strict";i("muBP")},muBP:function(e,t,i){},w981:function(e,t,i){"use strict";i.r(t);var a={mounted(){var e=document.getElementById("navBar");console.log(parseInt(getComputedStyle(e).getPropertyValue("height")));var t=window.innerHeight-parseInt(getComputedStyle(e).getPropertyValue("height"));console.log(window.innerHeight);var i=document.getElementById("theSection");i.style.height=String(t)+"px",console.log(parseInt(getComputedStyle(i).getPropertyValue("height")))},metaInfo(){return this.$seo({title:"Contact me",description:"My description",keywords:"one,two",openGraph:{title:"Shailesh K S, Contact me",type:"website"},twitter:{title:"Shailesh K S, Contact me",type:"summary"}})},data:()=>({valid:!0,name:"",nameRules:[e=>!!e||"Name is required"],email:"",emailRules:[e=>!!e||"E-mail is required",e=>/.+@.+\..+/.test(e)||"E-mail must be valid"],reqRules:[e=>!!e||"This Field is required"]}),methods:{submit(){this.$refs.form.validate()},reset(){this.$refs.form.reset()}}},l=(i("+QYY"),i("KHd+")),s=Object(l.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Layout",[i("section",{attrs:{id:"theSection"}},[i("transition",{attrs:{name:"slide-fade",appear:""}},[i("v-container",{staticStyle:{height:"100%"}},[i("v-row",{staticStyle:{height:"100vh"}},[i("v-col",{staticClass:"d-none d-sm-block",staticStyle:{height:"100%",width:"fit-content"},attrs:{cols:"auto"}},[i("img",{staticStyle:{height:"100%"},attrs:{src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12cbe8a4-f55c-4b40-85bb-d8e1405e7b84/dak6s74-465171e5-27da-4de8-9ce1-a4ac85c662e9.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyY2JlOGE0LWY1NWMtNGI0MC04NWJiLWQ4ZTE0MDVlN2I4NFwvZGFrNnM3NC00NjUxNzFlNS0yN2RhLTRkZTgtOWNlMS1hNGFjODVjNjYyZTkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HHcJ-g7f4_rV-Sot1muIyOxZH9mfMziA1-4nExOjFiU",alt:"devianArtLink"}})]),i("v-col",{staticStyle:{height:"fit-content",margin:"0",position:"relative",top:"50%",transform:"translateY(-50%)"}},[i("h1",{staticClass:"rounded",staticStyle:{"text-align":"center"}},[e._v("Contact")]),i("v-card",{staticStyle:{padding:"10px"}},[i("v-form",{ref:"form",attrs:{"lazy-validation":"",action:"https://formspree.io/f/xeqdjwoo",method:"post"},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-text-field",{attrs:{label:"Name",type:"text",name:"name",id:"name",rules:e.nameRules,"aria-required":""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),i("v-text-field",{attrs:{label:"Email",name:"Email",id:"email",type:"email",rules:e.emailRules,hint:"example@gmail.com"}}),i("v-text-field",{attrs:{label:"Subject",name:"Subject",id:"subject",type:"subject",rules:e.reqRules,required:""}}),i("v-textarea",{attrs:{label:"Message",name:"message",id:"message",rules:e.reqRules,"auto-grow":"",rows:"2",placeholder:"Multi-line Field"}}),i("v-container",{staticClass:"d-flex justify-center"},[i("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid},on:{click:e.submit}},[e._v("submit")]),i("v-btn",{staticClass:"mr-4",on:{click:e.reset}},[e._v("clear")])],1)],1)],1)],1)],1)],1)],1)],1)])}),[],!1,null,"23b32289",null);t.default=s.exports}}]);