(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{262:function(t,e,n){var content=n(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("48bdc756",content,!0,{sourceMap:!1})},268:function(t,e,n){"use strict";var o,c,r=n(398),l=n(401),v=n(402),d=n(191),f=n(269),m=n(190),h=n(124),_=n(105),w=n(61),S=n(399),k=n(400),y=n(106),T=(n(5),n(12),{css:".v-navigation-drawer__content {background-color: #251542} #hackathons,#sideProjects,#volunteer{color: white} .projCard{color: #EDE7F6} .greet{color: white} #LinksHead{color: white}"}),E={mounted:function(){var t=this;c=document.querySelector("#about"),window.addEventListener("scroll",(function(){Object(y.a)(document.querySelectorAll("section")).forEach((function(e){e.offsetTop<=window.scrollY&&e.offsetTop+e.offsetHeight>window.scrollY&&t.$store.commit("changeActiveSection",e.id)}))})),(o=n(381)).auto({},T),o.isEnabled()?c.style.background="linear-gradient(90deg, #9575CD, #003b6b)":c.style.background="linear-gradient(190deg, #9575CD, #a6d7ff)"},methods:{scrollToElement:function(t){var e=document.getElementById(t).offsetTop;window.scrollTo({top:e,behavior:"smooth"})},changeTheme:function(){o.isEnabled()?(o.disable(),c.style.background="linear-gradient(190deg, #9575CD, #a6d7ff)"):(o.enable({},T),c.style.background="linear-gradient(90deg, #9575CD, #003b6b)")}}},x=(n(382),n(86)),component=Object(x.a)(E,(function(){var t=this,e=t._self._c;return e(r.a,[e(S.a,[e("Nuxt")],1),t._v(" "),e(k.a,{staticClass:"d-none d-sm-block",attrs:{id:"navBar",app:"",color:"deep-purple lighten-4"}},[e(m.a,{attrs:{nav:"",dense:""}},[e(f.a,{staticStyle:{"margin-bottom":"1em"},attrs:{src:"/Shell.svg",width:"100%"}}),t._v(" "),e("p",{staticClass:"text-center text-h6",staticStyle:{"margin-bottom":"0.2em"}},[t._v(" Shailesh's\n\t\t\t\tPortfolio ")]),t._v(" "),e("p",{staticClass:"text-center text-subtitle-1"},[t._v("Shell Raiser")]),t._v(" "),e(h.a,{class:["about"==t.$store.state.activeSection?"v-list-item--active":null],on:{click:function(e){return t.scrollToElement("about")}}},[e(_.a,[e(d.a,[t._v("mdi-view-dashboard")])],1),t._v(" "),e(w.c,[t._v("About")])],1),t._v(" "),e(h.a,{class:["connect"==t.$store.state.activeSection?"v-list-item--active":null],on:{click:function(e){return t.scrollToElement("connect")}}},[e(_.a,[e(d.a,[t._v("mdi-human-greeting-proximity")])],1),t._v(" "),e(w.c,[t._v("Connect")])],1),t._v(" "),e(h.a,{class:["projects"==t.$store.state.activeSection?"v-list-item--active":null],on:{click:function(e){return t.scrollToElement("projects")}}},[e(_.a,[e(d.a,[t._v("mdi-devices")])],1),t._v(" "),e(w.c,[t._v("Projects")])],1),t._v(" "),e(h.a,{class:["arsenal"==t.$store.state.activeSection?"v-list-item--active":null],on:{click:function(e){return t.scrollToElement("arsenal")}}},[e(_.a,[e(d.a,[t._v("mdi-hammer-wrench")])],1),t._v(" "),e(w.c,[t._v("Tools")])],1),t._v(" "),e(h.a,{staticStyle:{position:"fixed",bottom:"1em"},on:{click:function(e){return t.changeTheme()}}},[e(_.a,[e(d.a,[t._v("mdi-lightbulb")])],1),t._v(" "),e(w.c,[t._v("Theme")])],1)],1)],1),t._v(" "),e(l.a,{staticClass:"d-lg-none",attrs:{app:"",grow:"",color:"deep-purple darken-3",shift:""}},[e(v.a,{class:["about"==t.$store.state.activeSection?"v-btn--active":null],attrs:{height:"100%"},on:{click:function(e){return t.scrollToElement("about")}}},[e("span",[t._v("About")]),t._v(" "),e(d.a,[t._v("mdi-view-dashboard")])],1),t._v(" "),e(v.a,{class:["connect"==t.$store.state.activeSection?"v-btn--active":null],attrs:{height:"100%"},on:{click:function(e){return t.scrollToElement("connect")}}},[e("span",[t._v("Connect")]),t._v(" "),e(d.a,[t._v("mdi-human-greeting-proximity")])],1),t._v(" "),e(v.a,{class:["projects"==t.$store.state.activeSection?"v-btn--active":null],attrs:{height:"100%"},on:{click:function(e){return t.scrollToElement("projects")}}},[e("span",[t._v("Projects")]),t._v(" "),e(d.a,[t._v("mdi-devices")])],1),t._v(" "),e(v.a,{class:["arsenal"==t.$store.state.activeSection?"v-btn--active":null],attrs:{height:"100%"},on:{click:function(e){return t.scrollToElement("arsenal")}}},[e("span",[t._v("Tools")]),t._v(" "),e(d.a,[t._v("mdi-hammer-wrench")])],1)],1)],1)}),[],!1,null,"6ef32158",null);e.a=component.exports},277:function(t,e,n){n(278),t.exports=n(279)},382:function(t,e,n){"use strict";n(262)},383:function(t,e,n){var o=n(22),c=n(384),r=n(385),l=o((function(i){return i[1]})),v=c(r);l.push([t.i,'@font-face{font-display:auto;font-family:"Roboto";font-weight:400;src:url('+v+') format("truetype")}.slide-fade-enter-active[data-v-6ef32158]{transition:all .5s}.slide-fade-enter[data-v-6ef32158]{opacity:0;transform:translateY(20px)}.fade-enter-active[data-v-6ef32158]{transition:all 1s}.fade-enter[data-v-6ef32158]{opacity:.3}',""]),l.locals={},t.exports=l},385:function(t,e,n){t.exports=n.p+"fonts/Roboto-Light.333da16.ttf"},386:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return c}));var o=function(){return{chipSelected:[],activeSection:"about"}},c={changeActiveSection:function(t,e){t.activeSection=e}}}},[[277,14,5,15]]]);