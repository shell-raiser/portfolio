(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{PsvQ:function(t,e,i){"use strict";i("xZXi")},fx0o:function(t,e,i){"use strict";i.r(e);i("FNk8");var s=i("jDuj"),a=[];for(const t in s){var r=s[t];for(let t=0;t<r.length;t++){var o=r[t].attributes;for(var n in o)a.push(o[n])}}a=a.filter((t,e)=>a.indexOf(t)===e),console.log(a);var c={mounted:()=>{},data:()=>({chipSelected:[],allProjects:a}),methods:{updateState(){this.$store.commit("updateSelected",this.chipSelected)},getAvailableAttributes(){for(const t in allProjects)for(let e=0;e<t.length;e++){const i=t[e];a.push(i[attributes])}return[]}}},l=i("KHd+"),h={metaInfo:{title:"Projects"},data:()=>({isActive:!1,drawer:!1,sideProjects:s.sideProjects,hackathonProjects:s.hackathonProjects,volunteerSites:s.volunteerSites}),methods:{contains(t){t.some(t=>this.$store.state.chipSelected.includes(t))}},components:{ProjectFilterNavigation:Object(l.a)(c,(function(){var t=this,e=t._self._c;return"/projects"==this.$router.history.current.path?e("v-navigation-drawer",{attrs:{app:"",right:"",src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/089d21ad-7782-4104-89c2-a65435feaa61/da6ks5a-344a9f7a-bbdc-42b6-9ebe-df7ca2d32799.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4OWQyMWFkLTc3ODItNDEwNC04OWMyLWE2NTQzNWZlYWE2MVwvZGE2a3M1YS0zNDRhOWY3YS1iYmRjLTQyYjYtOWViZS1kZjdjYTJkMzI3OTkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UZk_90YLEW2QTobmrD1Wwgab016coYzw7V8MexSTqtg"}},[e("v-container",{staticStyle:{"backdrop-filter":"blur(5px)",height:"100%"}},[e("h2",[t._v("Projects and Experience")]),e("v-divider"),0==t.$store.state.chipSelected.length?e("v-list",{staticClass:"rounded",attrs:{nav:""}},[e("v-list-item",{staticClass:"white rounded",attrs:{to:"#hackathons"}},[t._v("\n                Hackathon Projects\n            ")]),e("v-list-item",{staticClass:"white rounded",attrs:{to:"#sideProjects"}},[t._v("\n                Other Projects\n            ")]),e("v-list-item",{staticClass:"white rounded",attrs:{to:"#volunteer"}},[t._v("\n                Volunteering\n            ")])],1):t._e(),e("v-divider"),e("v-chip-group",{attrs:{column:"",multiple:"",color:"deep-purple lighten-4"},model:{value:t.$store.state.chipSelected,callback:function(e){t.$set(t.$store.state,"chipSelected",e)},expression:"$store.state.chipSelected"}},t._l(t.allProjects,(function(i){return e("v-chip",{key:i,attrs:{value:i}},[t._v("\n                "+t._s(i)+"\n            ")])})),1)],1)],1):t._e()}),[],!1,null,null,null).exports}},d=(i("PsvQ"),Object(l.a)(h,(function(){var t=this,e=t._self._c;return e("Layout",[e("div",[e("ProjectFilterNavigation",{staticClass:"d-sm-none d-md-flex"}),e("section",[e("transition",{attrs:{name:"slide-fade",appear:""}},[e("v-container",{attrs:{id:"theContainer"}},[0==t.$store.state.chipSelected.length?e("h2",{staticClass:"rounded",attrs:{id:"hackathons"}},[t._v("Hackathon Projects")]):t._e(),e("div",{staticStyle:{height:"10px"}}),e("v-row",[t._l(t.hackathonProjects,(function(i){return[i.attributes.some(e=>t.$store.state.chipSelected.includes(e))||0==t.$store.state.chipSelected.length?e("v-col",{staticStyle:{width:"100%"},attrs:{sm:"6"}},[e("v-lazy",{attrs:{options:{threshold:.5}},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[e("v-hover",{scopedSlots:t._u([{key:"default",fn:function({hover:s}){return[e("v-card",{staticClass:"mx-auto projectCard",attrs:{width:"350"}},[e("v-img",{attrs:{"aspect-ratio":16/9,src:i.img}},[e("v-expand-transition",{staticClass:"bgBlur"},[s?e("div",{staticClass:"d-flex transition-fast-in-fast-out v-card--reveal white--text",staticStyle:{height:"100%"}},[e("div",{staticClass:"cardHoverBlurBg"},[e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"projectCardHoverText",domProps:{innerHTML:t._s(i.hoverText)}})])]):t._e()])],1),e("v-card-text",{staticClass:"pt-6",staticStyle:{position:"relative"}},[e("v-btn",{staticClass:"white--text",staticStyle:{"z-index":"0"},attrs:{absolute:"",color:"teal",fab:"",large:"",right:"",top:"",href:i.heroLink,target:"_blank",rel:"noopener noreferrer"}},[e("v-icon",[t._v(t._s(i.heroIcon))])],1),e("h3",{staticClass:"text-h4 font-weight-light deep-purple--text mb-2"},[t._v("\n                          "+t._s(i.title)+"\n                        ")]),e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(i.desc)}})],1),e("v-card-actions",t._l(i.actions,(function(i,s){return e("v-btn",{key:s,attrs:{href:i.link,target:"_blank",rel:"noopener noreferrer"}},[e("v-icon",[t._v(t._s(i.icon))])],1)})),1)],1)]}}],null,!0)})],1)],1):t._e()]}))],2),e("div",{staticStyle:{height:"30px"}}),0==t.$store.state.chipSelected.length?e("h2",{staticClass:"rounded",attrs:{id:"sideProjects"}},[t._v("Other Projects")]):t._e(),e("div",{staticStyle:{height:"10px"}}),e("v-row",[t._l(t.sideProjects,(function(i){return[i.attributes.some(e=>t.$store.state.chipSelected.includes(e))||0==t.$store.state.chipSelected.length?e("v-col",{staticStyle:{"max-width":"100%"},attrs:{sm:"6"}},[e("v-lazy",{attrs:{options:{threshold:.5}},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[e("v-hover",{scopedSlots:t._u([{key:"default",fn:function({hover:s}){return[e("v-card",{staticClass:"mx-auto projectCard",attrs:{width:"350"}},[e("v-img",{attrs:{"aspect-ratio":16/9,src:i.img}},[e("v-expand-transition",[s?e("div",{staticClass:"d-flex transition-fast-in-fast-out v-card--reveal white--text",staticStyle:{height:"100%"}},[e("div",{staticClass:"cardHoverBlurBg"},[e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"projectCardHoverText",domProps:{innerHTML:t._s(i.hoverText)}})])]):t._e()])],1),e("v-card-text",{staticClass:"pt-6",staticStyle:{position:"relative"}},[e("v-btn",{staticClass:"white--text",staticStyle:{"z-index":"0"},attrs:{absolute:"",color:"teal",fab:"",large:"",right:"",top:"",href:i.heroLink,target:"_blank",rel:"noopener noreferrer"}},[e("v-icon",[t._v(t._s(i.heroIcon))])],1),e("h3",{staticClass:"text-h4 font-weight-light deep-purple--text mb-2"},[t._v("\n                          "+t._s(i.title)+"\n                        ")]),e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(i.desc)}})],1),e("v-card-actions",t._l(i.actions,(function(i,s){return e("v-btn",{key:s,attrs:{href:i.link,target:"_blank",rel:"noopener noreferrer"}},[e("v-icon",[t._v(t._s(i.icon))])],1)})),1)],1)]}}],null,!0)})],1)],1):t._e()]}))],2),e("div",{staticStyle:{height:"30px"}}),0==t.$store.state.chipSelected.length?e("h2",{staticClass:"rounded",attrs:{id:"volunteer"}},[t._v("Volunteering")]):t._e(),e("div",{staticStyle:{height:"10px"}}),e("v-row",[t._l(t.volunteerSites,(function(i){return[i.attributes.some(e=>t.$store.state.chipSelected.includes(e))||0==t.$store.state.chipSelected.length?e("v-col",{staticStyle:{width:"100%"},attrs:{sm:"6"}},[e("v-lazy",{attrs:{options:{threshold:.5}},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[e("v-hover",{scopedSlots:t._u([{key:"default",fn:function({hover:s}){return[e("v-card",{staticClass:"mx-auto projectCard",attrs:{width:"350"}},[e("v-img",{attrs:{"aspect-ratio":16/9}},[e("img",{attrs:{width:"350",fit:"inside",src:i.img}}),e("v-expand-transition",[s?e("div",{staticClass:"d-flex transition-fast-in-fast-out v-card--reveal white--text",staticStyle:{height:"100%"}},[e("div",{staticClass:"cardHoverBlurBg"},[e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"projectCardHoverText",domProps:{innerHTML:t._s(i.hoverText)}})])]):t._e()])],1),e("v-card-text",{staticClass:"pt-6",staticStyle:{position:"relative"}},[e("v-btn",{staticClass:"white--text",staticStyle:{"z-index":"0"},attrs:{absolute:"",color:"teal",fab:"",large:"",right:"",top:"",href:i.heroLink,target:"_blank",rel:"noopener noreferrer"}},[e("v-icon",[t._v(t._s(i.heroIcon))])],1),e("h3",{staticClass:"text-h4 font-weight-light deep-purple--text mb-2"},[t._v("\n                          "+t._s(i.title)+"\n                        ")]),e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(i.desc)}})],1),e("v-card-actions",t._l(i.actions,(function(i,s){return e("v-btn",{key:s,attrs:{href:i.link,target:"_blank",rel:"noopener noreferrer"}},[e("v-icon",[t._v(t._s(i.icon))])],1)})),1)],1)]}}],null,!0)})],1)],1):t._e()]}))],2)],1)],1)],1)],1)])}),[],!1,null,"0fdd41af",null));e.default=d.exports},jDuj:function(t){t.exports=JSON.parse('{"sideProjects":[{"img":"https://user-images.githubusercontent.com/78999739/171996793-c0e2e157-b6ea-4984-b861-184b0568a011.png","heroIcon":"mdi-play","heroLink":"https://shellraiser.itch.io/dark","hoverText":"A 2D Platformer shooter game, with NCS Dubstep BGM","title":"Dark Green Space","desc":"2D Platformer game","actions":[{"link":"https://github.com/shell-raiser/Dark-Green-Space","icon":"mdi-github"},{"link":"https://shellraiser.itch.io/dark","icon":"itch.io"}],"attributes":["unity","c#"]},{"img":"https://user-images.githubusercontent.com/78999739/176103044-fe939cd9-ce4f-492d-8f50-22a795c7adb9.png","heroIcon":"mdi-link","heroLink":"https://shell-raiser.github.io/Dosha-quiz-app/","hoverText":"An online quiz, which determines your dosha and recommends diet on a daily basis","title":"Dosha Quiz","desc":"An online quiz, which determines your dosha. <br/> Used in <a href=\'https://b3ratna.com/dosha-quiz-app/\'> B3Ratna NTA</a>","actions":[{"link":"https://github.com/shell-raiser/Dosha-quiz-app","icon":"mdi-github"}],"attributes":["vue","javascript"]},{"img":"https://user-images.githubusercontent.com/78999739/181779591-f5698164-7106-451d-93bf-59175284db0c.png","heroIcon":"mdi-google-cloud","heroLink":"https://fcc-microservices-assignments.herokuapp.com/","hoverText":"Consists of                        <ul>                            <li> Request Header Parsing</li>                            <li> URL Shortener</li>                            <li> File Meta-Data Microservice</li>                            <li> Timestamp Microservice</li>                        </ul>","title":"FCC Microservices","desc":"A Compilation of APIs made for the FCC projects ","actions":[{"link":"https://github.com/shell-raiser/FCC-Microservices","icon":"mdi-github"}],"attributes":["nodejs","javascript","expressjs"]},{"img":"https://user-images.githubusercontent.com/78999739/199042968-a83e67ca-ef91-455c-bb9d-400d4ce527f2.png","heroIcon":"mdi-link","heroLink":"https://med-prod-hosting.herokuapp.com/","hoverText":"Retrieves data from an IOT device and displays the patient\'s vitals to the assigned doctor","title":"Patient Management Website","desc":"Website made with Firebase and Nuxt js to monitor patients. <br>It never saw the light due to some technical difficulties 🥺","actions":[{"link":"https://github.com/Tense-Turtles/Med-Prod-Web-UI","icon":"mdi-github"}],"attributes":["nodejs","javascript","nuxt","firebase"]}],"hackathonProjects":[{"img":"https://user-images.githubusercontent.com/78999739/178935897-f945338a-ceb4-48d3-8c67-889eb7e628b0.png","heroIcon":"mdi-google-cloud","heroLink":"https://parsifyapp-q3vtbj6djq-el.a.run.app/","hoverText":"A Web App and API for OCRing and extracting key points from FIR copies","title":"Parsify","desc":"A Hackathon Project made for <a href=\\"https://unstop.com/o/UA3b5Qn?lb=4Y9Hkj2\\">Codefiesta</a>                <ul>                    <li>Finalist</li>                </ul>","actions":[{"link":"https://github.com/shell-raiser/Parsify-WebApp","icon":"mdi-github"},{"link":"https://unstop.com/hackathon/codefiesta-sir-m-visvesvaraya-institute-of-technology-smvit-bengaluru-364352/case-submissions/44528?d=eyJwYWdlIjoxLCJ0ZWFtSWQiOjg5ODg0OTIsImFzc29jaWF0aW9uSWQiOjIxMTQ2N30=","icon":"Unstop"}],"attributes":["javascript","bulma"]},{"img":"https://user-images.githubusercontent.com/78999739/183272769-7576d48c-8af4-470c-bfa7-b63adbfff33d.png","heroIcon":"mdi-github","heroLink":"https://github.com/shell-raiser/saviour_kuHacks22","hoverText":"A Cross-platform Flutter app, made to connect NGOs and Volunteers protecting the environment","title":"Saviour","desc":"A Hackathon Project for        <a href=\\"https://ku-hackfest-2022.devfolio.co/\\"> KU HackFest 2022</a>                <ul>                    <li>Won Cloud Track</li>                    <li>\\"Dream big and Create More Cheers with AB-InBev\\" Winner</li>            </ul>","actions":[{"link":"https://github.com/shell-raiser/saviour_kuHacks22","icon":"mdi-github"},{"link":"https://devfolio.co/projects/saviour-83e6","icon":"Devfolio"}],"attributes":["flutter"]},{"img":"https://user-images.githubusercontent.com/78999739/183929986-483e206d-e15b-49cb-b872-391015398ab5.png","heroIcon":"mdi-link","heroLink":"https://black-hill-6592.on.fleek.co/","hoverText":"A decentralised website/app to report and track environmental damages caused by industries to concerned authorithies and NGOs","title":"Greensaver","desc":"A Hackathon Project for <a href=\'https://hackoheist.devfolio.co/\'>HACK O HEIST</a>                <ul>                    <li>Top 15 Projects</li>                </ul>","actions":[{"link":"https://github.com/shell-raiser/helpfiy","icon":"mdi-github"},{"link":"https://devfolio.co/projects/greensavers-5b31","icon":"Devfolio"}],"attributes":["ipfs","nodejs","bulma","javascript","expressjs"]},{"img":"https://user-images.githubusercontent.com/78999739/184808507-fda6894a-5425-4d52-902d-471783e15f76.png","heroIcon":"mdi-aws","heroLink":"http://52.54.137.237:3000/","hoverText":"A Website connecting Startups, Investors, Mentors and wannabe Entrepreneurs","title":"Avvio","desc":"A Hackathon Project for <a href=\'https://unstop.com/o/FAnGkDV?lb=4Y9Hkj2\'> Codefury 5.0</a> <ul> <li>Won 1st place</li> </ul>","actions":[{"link":"https://github.com/shell-raiser/codefury5.0","icon":"mdi-github"}],"attributes":["expressjs","nodejs","bootstrap","javascript"]}],"volunteerSites":[{"img":"/ACMREVA.png","heroIcon":"mdi-wordpress","heroLink":"https://reva.hosting.acm.org/","hoverText":"A Wordpress site, made for showcasing club activities and encourage and attract members","title":"ACM REVA Student Chapter","desc":"A site made for the ACM student chapter at REVA University","actions":[{"link":"https://reva.hosting.acm.org/","icon":"mdi-wordpress"}],"attributes":["wordpress"]},{"img":"/ProRes.png","heroIcon":"mdi-link","heroLink":"https://proresclub.github.io/","hoverText":"A static site showcasing the projects undertaken/funded by the club.","title":"Pro Res","desc":"Club Website","actions":[{"link":"https://github.com/proresclub/proresclub.github.io","icon":"mdi-github"}],"attributes":["bootstrap","javascript"]},{"img":"/rh21.png","heroIcon":"mdi-link","heroLink":"https://www.figma.com/proto/XWKMKUkEk2zQL2kaB1kZvX/Website-design?node-id=599:2&scaling=scale-down-width&page-id=0:1&starting-point-node-id=861:439&hide-ui=1","hoverText":"Figma preview of the website wireframing for REVA Hack 2021","title":"Wireframing","desc":"Prototyped the website of REVA Hack 21","actions":[{"link":"https://www.figma.com/proto/XWKMKUkEk2zQL2kaB1kZvX/Website-design?node-id=599:2&scaling=scale-down-width&page-id=0:1&starting-point-node-id=861:439&hide-ui=1","icon":"mdi-draw"}],"attributes":["figma"]},{"img":"/glug.png","heroIcon":"mdi-link","heroLink":"https://proresclub.github.io/","hoverText":"A site showcasing past events by the club","title":"GLUG and FOSS Club, REVA","desc":"Club Website","actions":[{"link":"https://github.com/proresclub/proresclub.github.io","icon":"mdi-github"}],"attributes":["jekyll","javascript"]}]}')},xZXi:function(t,e,i){}}]);