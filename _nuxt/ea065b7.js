(window.webpackJsonp=window.webpackJsonp||[]).push([[14,8,9,13],{404:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return h}));var o=r(405),n=r(1),l=Object(n.h)("v-card__actions"),c=Object(n.h)("v-card__subtitle"),d=Object(n.h)("v-card__text"),h=Object(n.h)("v-card__title");o.a},405:function(t,e,r){"use strict";r(16),r(11),r(15),r(5),r(19),r(12),r(20);var o=r(2),n=(r(33),r(270),r(271),r(408),r(197)),l=r(407),c=r(80),d=r(9);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=v({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},407:function(t,e,r){"use strict";r(33);var o=r(0),n=(r(16),r(11),r(15),r(5),r(19),r(12),r(20),r(2)),l=(r(166),r(410),r(196)),c=r(129),d=r(30),h=r(130),v=r(131),m=r(36),f=r(1),_=r(9);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var k=Object(_.a)(d.a,Object(h.b)(["absolute","fixed","top","bottom"]),v.a,m.a).extend({name:"v-progress-linear",directives:{intersect:c.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(f.g)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(f.g)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t;return t={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(t,this.isReversed?"right":"left",Object(f.g)(this.normalizedValue,"%")),Object(n.a)(t,"width",Object(f.g)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?l.c:l.d},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(f.g)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(f.m)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},onObserve:function(t,e,r){this.isVisible=r},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(f.g)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),x=k;e.a=o.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(x,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},408:function(t,e,r){var content=r(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("61d1dd60",content,!0,{sourceMap:!1})},409:function(t,e,r){var o=r(22)((function(i){return i[1]}));o.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{word-wrap:break-word;border-width:thin;display:block;max-width:100%;outline:none;position:relative;-webkit-text-decoration:none;text-decoration:none;transition-property:box-shadow,opacity;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{left:0;overflow:hidden;right:0;top:0}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;letter-spacing:.0071428571em;line-height:1.375rem}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),o.locals={},t.exports=o},410:function(t,e,r){var content=r(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("7082b72e",content,!0,{sourceMap:!1})},411:function(t,e,r){var o=r(22)((function(i){return i[1]}));o.push([t.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{animation-duration:2.2s;animation-iteration-count:infinite;animation-name:indeterminate-ltr}.v-progress-linear .v-progress-linear__indeterminate--active .short{animation-duration:2.2s;animation-iteration-count:infinite;animation-name:indeterminate-short-ltr}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:indeterminate-short-rtl}.v-progress-linear__stream{animation:stream-ltr .25s linear infinite;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;opacity:.3;pointer-events:none;position:absolute;right:-8px;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-repeat:repeat;background-size:40px 40px}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{animation-duration:2s;animation-iteration-count:infinite;animation-name:query-ltr}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{animation-duration:2s;animation-iteration-count:infinite;animation-name:query-short-ltr}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{animation-play-state:running}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes query-ltr{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes query-rtl{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes query-short-ltr{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes query-short-rtl{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),o.locals={},t.exports=o},412:function(t,e,r){"use strict";r.r(e);var o=r(513),n=r(86),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"rounded",staticStyle:{"backdrop-filter":"blur(5px)",background:"rgba(209, 196, 233, 0.5)",width:"fit-content"}},[e("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://github-readme-stats.vercel.app/api?username=shell-raiser&show_icons=true&title_color=200254&bg_color=0,90caf9,9575CD&text_color=0e0126&count_private=true&custom_title=My%20Github%20Stats&hide_rank=true"}}),t._v(" "),e("br"),t._v(" "),e("img",{staticStyle:{"max-width":"100%"},attrs:{src:"https://github-readme-stats.vercel.app/api/top-langs/?username=shell-raiser&layout=default&title_color=200254&bg_color=0,90caf9,9575CD&text_color=0e0126&count_private=true&exclude_repo=Qiskit-Developer-Certification-Notes-and-Code,REVA-University-CSE-Code,codefury5.0"}}),t._v(" "),e("br"),t._v(" "),e("a",{attrs:{href:"https://tryhackme.com/p/shellRaiser",target:"_blank"}},[e("img",{attrs:{src:"https://tryhackme-badges.s3.amazonaws.com/shellRaiser.png",alt:"TryHackMe"}})])])}),[],!1,null,null,null);e.default=component.exports},414:function(t,e,r){var content=r(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("2bc2f491",content,!0,{sourceMap:!1})},423:function(t,e,r){"use strict";r.r(e);var o=r(405),n=r(404),l=r(513),c=(r(16),r(11),r(15),r(5),r(19),r(12),r(20),r(2)),d=r(75),h=r(57),v=r(129),m=r(9),f=r(1);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y=Object(m.a)(d.a,h.a).extend({name:"VLazy",directives:{intersect:v.a},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.measurableStyles)}},methods:{genContent:function(){var t=this.isActive&&Object(f.m)(this);return this.transition?this.$createElement("transition",{props:{name:this.transition}},t):t},onObserve:function(t,e,r){this.isActive||(this.isActive=r)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}}),k=r(424),x={data:function(){return{languages:k.languages,frontend:k.frontend,backend:k.backend,design:k.design,audio:k.audio,isActive:!1}},components:{ArsenalLanguageStats:r(412).default}},w=(r(425),r(86)),component=Object(w.a)(x,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"text-center"},[e("h1",{staticClass:"rounded text-center"},[t._v("Arsenal")]),t._v(" "),e("br"),t._v(" "),e("ArsenalLanguageStats",{staticClass:"d-sm-none"}),t._v(" "),e("br"),t._v(" "),e(o.a,{staticClass:"toolCard",attrs:{rounded:"",flat:""}},[e(n.c,{staticClass:"toolsCardsImageCont deep-purple lighten-4"},[t._v("Languages\n        ")]),t._v(" "),e(y,{attrs:{options:{threshold:.5}},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[e("div",{staticClass:"toolsCardsImageCont"},t._l(t.languages,(function(t,i){return e("img",{key:i,staticClass:"toolsLogos",attrs:{src:t}})})),0)])],1),t._v(" "),e("br"),t._v(" "),e(o.a,{staticClass:"toolCard",attrs:{rounded:"",flat:""}},[e(n.c,{staticClass:"toolsCardsImageCont red lighten-4"},[t._v("Front End Frameworks")]),t._v(" "),e(y,{attrs:{options:{threshold:.5}},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[e("div",{staticClass:"toolsCardsImageCont"},t._l(t.frontend,(function(t,i){return e("img",{key:i,staticClass:"toolsLogos",attrs:{src:t}})})),0)])],1),t._v(" "),e("br"),t._v(" "),e(o.a,{staticClass:"toolCard",attrs:{rounded:"",flat:""}},[e(n.c,{staticClass:"toolsCardsImageCont teal lighten-4"},[t._v("Back End Frameworks ")]),t._v(" "),e(y,{attrs:{options:{threshold:.5}},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[e("div",{staticClass:"toolsCardsImageCont"},t._l(t.backend,(function(t,i){return e("img",{key:i,staticClass:"toolsLogos",attrs:{src:t}})})),0)])],1),t._v(" "),e("br"),t._v(" "),e(o.a,{staticClass:"toolCard",attrs:{rounded:"",flat:""}},[e(n.c,{staticClass:"toolsCardsImageCont purple lighten-4"},[t._v("Design")]),t._v(" "),e(y,{attrs:{options:{threshold:.5}},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[e("div",{staticClass:"toolsCardsImageCont"},t._l(t.design,(function(t,i){return e("img",{key:i,staticClass:"toolsLogos",attrs:{src:t}})})),0)])],1),t._v(" "),e("br"),t._v(" "),e(o.a,{staticClass:"toolCard",attrs:{rounded:"",flat:""}},[e(n.c,{staticClass:"toolsCardsImageCont indigo lighten-4"},[t._v("Audio")]),t._v(" "),e(y,{attrs:{options:{threshold:.5}},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[e("div",{staticClass:"toolsCardsImageCont"},t._l(t.audio,(function(t,i){return e("img",{key:i,staticClass:"toolsLogos",attrs:{src:t}})})),0)])],1)],1)}),[],!1,null,"f3ed5978",null);e.default=component.exports;installComponents(component,{ArsenalLanguageStats:r(412).default})},424:function(t){t.exports=JSON.parse('{"languages":["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png","https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png","https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png","https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png","https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png","https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png","https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg","https://upload.wikimedia.org/wikipedia/commons/1/1f/Z_Shell_Logo_Color_Horizontal.svg","https://upload.wikimedia.org/wikipedia/commons/a/af/PowerShell_Core_6.0_icon.png","https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"],"frontend":["https://vuejs.org/images/logo.png","https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark.svg","https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png","https://bulma.io/assets/Bulma%20Icon.svg"],"backend":["https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Qiskit-Logo.svg/800px-Qiskit-Logo.svg.png","https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg","https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg","https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png","https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/1280px-MySQL_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg","https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/1280px-Nuxt_logo.svg.png","https://gridsome.org/logos/logo-normal.svg"],"design":["https://upload.wikimedia.org/wikipedia/commons/3/3c/Logo_Blender.svg","https://upload.wikimedia.org/wikipedia/en/b/bb/Canva_Logo.svg","https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg","https://inkscape.org/gallery/item/10252/Inkscape-flat-logo-2color.svg","https://www.gimp.org/images/frontpage/wilber-big.png"],"audio":["https://upload.wikimedia.org/wikipedia/en/d/d7/Audacity_Logo_2-2-0.png","https://www.tracktion.com/sites/default/files/logo-tracktion-black_3x.png"]}')},425:function(t,e,r){"use strict";r(414)},426:function(t,e,r){var o=r(22)((function(i){return i[1]}));o.push([t.i,"h1[data-v-f3ed5978]{background-color:rgba(18,0,48,.6);color:#fff;font-size:xxx-large}.toolCard[data-v-f3ed5978],h1[data-v-f3ed5978]{-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);box-shadow:0 0 7px 1px rgba(0,0,0,.3)}.toolCard[data-v-f3ed5978]{background-color:hsla(0,0%,100%,.416)}.toolsLogos[data-v-f3ed5978]{max-height:100px;max-width:100%;min-width:100px;padding:5px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.toolsCardsImageCont[data-v-f3ed5978]{justify-content:center}",""]),o.locals={},t.exports=o},464:function(t,e,r){var content=r(472);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("15de4940",content,!0,{sourceMap:!1})},471:function(t,e,r){"use strict";r(464)},472:function(t,e,r){var o=r(22)((function(i){return i[1]}));o.push([t.i,"h1[data-v-2c501d70]{background-color:rgba(18,0,48,.61);color:#fff;font-size:xxx-large}.toolCard[data-v-2c501d70],h1[data-v-2c501d70]{-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);box-shadow:0 0 7px 1px rgba(0,0,0,.3)}.toolCard[data-v-2c501d70]{background-color:hsla(0,0%,100%,.3)}.toolsLogos[data-v-2c501d70]{max-height:100px;max-width:100%;min-width:100px;padding:5px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.toolsCardsImageCont[data-v-2c501d70]{justify-content:center}section[data-v-2c501d70]{background:url(/assets/toolsBg.webp);background-attachment:fixed;background-size:cover}",""]),o.locals={},t.exports=o},509:function(t,e,r){"use strict";r.r(e);var o={metaInfo:function(){return this.$seo({title:"Tools",description:"A collection of all the tools I've ever used, and know my way around getting things done with them",keywords:"one,two",openGraph:{title:"Shailesh K S, Tools",type:"website"},twitter:{title:"Shailesh K S, Tools",type:"summary"},link:[],script:[]})},components:{Arsenal:r(423).default}},n=(r(471),r(86)),component=Object(n.a)(o,(function(){var t=this._self._c;return t("section",{attrs:{id:"arsenal"}},[t("Arsenal")],1)}),[],!1,null,"2c501d70",null);e.default=component.exports;installComponents(component,{Arsenal:r(423).default})}}]);