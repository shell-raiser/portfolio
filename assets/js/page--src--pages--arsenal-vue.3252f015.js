(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8q4C":function(t,s,o){"use strict";o.r(s);var a={metaInfo(){return this.$seo({title:"Tools",description:"A collection of all the tools I've ever used, and know my way around getting things done with them",keywords:"one,two",openGraph:{title:"Shailesh K S, Tools",type:"website"},twitter:{title:"Shailesh K S, Tools",type:"summary"},link:[],script:[]})},components:{Arsenal:o("EoIQ").a}},e=(o("nM/Q"),o("KHd+")),i=Object(e.a)(a,(function(){var t=this._self._c;return t("Layout",[t("section",{attrs:{id:"arsenal"}},[t("Arsenal")],1)])}),[],!1,null,"3c3a72c7",null);s.default=i.exports},"9Weh":function(t,s,o){},CdSC:function(t){t.exports=JSON.parse('{"languages":["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png","https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png","https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png","https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png","https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png","https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png","https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg","https://upload.wikimedia.org/wikipedia/commons/1/1f/Z_Shell_Logo_Color_Horizontal.svg","https://upload.wikimedia.org/wikipedia/commons/a/af/PowerShell_Core_6.0_icon.png","https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"],"frontend":["https://vuejs.org/images/logo.png","https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark.svg","https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png","https://bulma.io/assets/Bulma%20Icon.svg"],"backend":["https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Qiskit-Logo.svg/800px-Qiskit-Logo.svg.png","https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg","https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg","https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png","https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/1280px-MySQL_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg","https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/1280px-Nuxt_logo.svg.png","https://gridsome.org/logos/logo-normal.svg"],"design":["https://upload.wikimedia.org/wikipedia/commons/3/3c/Logo_Blender.svg","https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Canva_Logo.png/1920px-Canva_Logo.png","https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg","https://inkscape.org/gallery/item/10252/Inkscape-flat-logo-2color.svg","https://www.gimp.org/images/frontpage/wilber-big.png"],"audio":["https://upload.wikimedia.org/wikipedia/en/d/d7/Audacity_Logo_2-2-0.png","https://www.tracktion.com/sites/default/files/logo-tracktion-black_3x.png"]}')},EoIQ:function(t,s,o){"use strict";var a=o("CdSC"),e={data:()=>({languages:a.languages,frontend:a.frontend,backend:a.backend,design:a.design,audio:a.audio,isActive:!1}),components:{ArsenalLanguageStats:o("feJI").a}},i=(o("kQdv"),o("KHd+")),n=Object(i.a)(e,(function(){var t=this,s=t._self._c;return s("v-container",{staticClass:"text-center"},[s("h1",{staticClass:"rounded text-center"},[t._v("Arsenal")]),s("br"),s("ArsenalLanguageStats",{staticClass:"d-sm-none"}),s("br"),s("v-card",{staticClass:"toolCard",attrs:{rounded:"",flat:""}},[s("v-card-title",{staticClass:"toolsCardsImageCont deep-purple lighten-4"},[t._v("Languages\n        ")]),s("v-lazy",{attrs:{options:{threshold:.5}},model:{value:t.isActive,callback:function(s){t.isActive=s},expression:"isActive"}},[s("div",{staticClass:"toolsCardsImageCont"},t._l(t.languages,(function(t,o){return s("g-image",{key:o,staticClass:"toolsLogos",attrs:{src:t}})})),1)])],1),s("br"),s("v-card",{staticClass:"toolCard",attrs:{rounded:"",flat:""}},[s("v-card-title",{staticClass:"toolsCardsImageCont red lighten-4"},[t._v("Front End Frameworks")]),s("v-lazy",{attrs:{options:{threshold:.5}},model:{value:t.isActive,callback:function(s){t.isActive=s},expression:"isActive"}},[s("div",{staticClass:"toolsCardsImageCont"},t._l(t.frontend,(function(t,o){return s("g-image",{key:o,staticClass:"toolsLogos",attrs:{src:t}})})),1)])],1),s("br"),s("v-card",{staticClass:"toolCard",attrs:{rounded:"",flat:""}},[s("v-card-title",{staticClass:"toolsCardsImageCont teal lighten-4"},[t._v("Back End Frameworks ")]),s("v-lazy",{attrs:{options:{threshold:.5}},model:{value:t.isActive,callback:function(s){t.isActive=s},expression:"isActive"}},[s("div",{staticClass:"toolsCardsImageCont"},t._l(t.backend,(function(t,o){return s("g-image",{key:o,staticClass:"toolsLogos",attrs:{src:t}})})),1)])],1),s("br"),s("v-card",{staticClass:"toolCard",attrs:{rounded:"",flat:""}},[s("v-card-title",{staticClass:"toolsCardsImageCont purple lighten-4"},[t._v("Design")]),s("v-lazy",{attrs:{options:{threshold:.5}},model:{value:t.isActive,callback:function(s){t.isActive=s},expression:"isActive"}},[s("div",{staticClass:"toolsCardsImageCont"},t._l(t.design,(function(t,o){return s("g-image",{key:o,staticClass:"toolsLogos",attrs:{src:t}})})),1)])],1),s("br"),s("v-card",{staticClass:"toolCard",attrs:{rounded:"",flat:""}},[s("v-card-title",{staticClass:"toolsCardsImageCont indigo lighten-4"},[t._v("Audio")]),s("v-lazy",{attrs:{options:{threshold:.5}},model:{value:t.isActive,callback:function(s){t.isActive=s},expression:"isActive"}},[s("div",{staticClass:"toolsCardsImageCont"},t._l(t.audio,(function(t,o){return s("g-image",{key:o,staticClass:"toolsLogos",attrs:{src:t}})})),1)])],1)],1)}),[],!1,null,"2d6baf43",null);s.a=n.exports},IX0d:function(t,s,o){},feJI:function(t,s,o){"use strict";var a=o("KHd+"),e=Object(a.a)({},(function(){var t=this._self._c;return t("v-container",{staticClass:"rounded",staticStyle:{"backdrop-filter":"blur(5px)",background:"rgba(209, 196, 233, 0.5)"}},[t("g-image",{staticStyle:{"max-width":"100%"},attrs:{src:"https://github-readme-stats.vercel.app/api?username=shell-raiser&show_icons=true&title_color=200254&bg_color=0,90caf9,9575CD&text_color=0e0126&count_private=true&custom_title=My%20Github%20Stats&hide_rank=true"}}),t("br"),t("g-image",{staticStyle:{"max-width":"100%"},attrs:{src:"https://github-readme-stats.vercel.app/api/top-langs/?username=shell-raiser&layout=default&title_color=200254&bg_color=0,90caf9,9575CD&text_color=0e0126&count_private=true&exclude_repo=Qiskit-Developer-Certification-Notes-and-Code,REVA-University-CSE-Code,codefury5.0"}})],1)}),[],!1,null,null,null);s.a=e.exports},kQdv:function(t,s,o){"use strict";o("9Weh")},"nM/Q":function(t,s,o){"use strict";o("IX0d")}}]);