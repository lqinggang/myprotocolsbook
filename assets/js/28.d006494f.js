(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{322:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));n(130);var s=n(0);function o(){const e=Object(s.d)();if(!e)throw new Error("must be called in setup");return(null==e?void 0:e.proxy)||{}}function r(){const e=Object(s.h)(!1);return Object(s.e)(()=>{e.value=!0}),Object(s.f)(()=>{e.value=!1,setTimeout(()=>{e.value=!0},100)}),{recoShowModule:e}}},323:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return y}));var s=n(325),o=n.n(s),r=(n(324),n(0)),i=n(1),a=function(e,t,n,s){var o,r=arguments.length,i=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};const c=/^(\w+)\-/,u=r.b.extend({props:{icon:{type:String,default:""},link:{type:String,default:""}}});let l=class extends u{getClass(e){return c.test(e)?e.replace(c,(...e)=>"reco"===e[1]?"iconfont "+e[0]:`${e[1]} ${e[0]}`):e}go(e){""!==e&&window.open(e)}render(){return(0,arguments[0])("i",o()([{},{class:this.getClass(this.icon),on:{click:this.go.bind(this,this.link)}}]),[this.$slots.default])}};l=a([i.b],l);var f=l,p=function(e,t,n,s){var o,r=arguments.length,i=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(r<3?o(i):r>3?o(t,n,i):o(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};const d=r.b.extend({props:{delay:{type:String,default:"0"},duration:{type:String,default:".25"},transform:{type:Array,default:()=>["translateY(-20px)","translateY(0)"]}}});let h=class extends d{setStyle(e){e.style.transition=`transform ${this.duration}s ease-in-out ${this.delay}s, opacity ${this.duration}s ease-in-out ${this.delay}s`,e.style.transform=this.transform[0],e.style.opacity=0}unsetStyle(e){e.style.transform=this.transform[1],e.style.opacity=1}render(){return(0,arguments[0])("transition",{attrs:{name:"module"},on:{enter:this.setStyle,appear:this.setStyle,"before-leave":this.setStyle,"after-appear":this.unsetStyle,"after-enter":this.unsetStyle}},[this.$slots.default])}};h=p([i.b],h);var y=h},324:function(e,t,n){"use strict";var s=n(21),o=n(5),r=n(326);s({global:!0},{Reflect:{}}),r(o.Reflect,"Reflect",!0)},325:function(e,t,n){"use strict";function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t,n=1;n<arguments.length;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)}var o=["attrs","props","domProps"],r=["class","style","directives"],i=["on","nativeOn"],a=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}};e.exports=function(e){return e.reduce((function(e,t){for(var n in t)if(e[n])if(-1!==o.indexOf(n))e[n]=s({},e[n],t[n]);else if(-1!==r.indexOf(n)){var c=e[n]instanceof Array?e[n]:[e[n]],u=t[n]instanceof Array?t[n]:[t[n]];e[n]=[].concat(c,u)}else if(-1!==i.indexOf(n))for(var l in t[n])if(e[n][l]){var f=e[n][l]instanceof Array?e[n][l]:[e[n][l]],p=t[n][l]instanceof Array?t[n][l]:[t[n][l]];e[n][l]=[].concat(f,p)}else e[n][l]=t[n][l];else if("hook"===n)for(var d in t[n])e[n][d]=e[n][d]?a(e[n][d],t[n][d]):t[n][d];else e[n]=t[n];else e[n]=t[n];return e}),{})}},326:function(e,t,n){"use strict";var s=n(18).f,o=n(12),r=n(27)("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!o(e,r)&&s(e,r,{configurable:!0,value:t})}},362:function(e,t,n){},382:function(e,t,n){"use strict";n(362)},407:function(e,t,n){"use strict";n.r(t);n(16);var s=n(0),o=n(323),r=n(322),i=Object(s.c)({components:{RecoIcon:o.b},setup(e,t){const n=Object(r.a)(),o=Object(s.g)({query:"",focused:!1,focusIndex:0,placeholder:void 0}),i=Object(s.a)(()=>o.focused&&c.value&&c.value.length),a=e=>{for(const t in n.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},c=Object(s.a)(()=>{const e=o.query.trim().toLowerCase();if(!e)return;const{pages:t}=n.$site,s=n.$site.themeConfig.searchMaxSuggestions,r=n.$localePath,i=t=>t&&t.title&&t.title.toLowerCase().indexOf(e)>-1,c=[];for(let e=0;e<t.length&&!(c.length>=s);e++){const n=t[e];if(a(n)===r)if(i(n))c.push(n);else if(n.headers)for(let e=0;e<n.headers.length&&!(c.length>=s);e++){const t=n.headers[e];i(t)&&c.push(Object.assign({},n,{path:n.path+"#"+t.slug,header:t}))}}return c}),u=Object(s.a)(()=>(n.$site.themeConfig.nav||[]).length+(n.$site.repo?1:0)<=2);return{showSuggestions:i,suggestions:c,alignRight:u,onUp:()=>{i.value&&(o.focusIndex>0?o.focusIndex--:o.focusIndex=c.value.length-1)},onDown:()=>{i.value&&(o.focusIndex<c.value.length-1?o.focusIndex++:o.focusIndex=0)},focus:e=>{o.focusIndex=e},unfocus:()=>{o.focusIndex=-1},go:e=>{i.value&&(n.$router.push(c.value[e].path),o.query="",o.focusIndex=0)},...Object(s.i)(o)}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||""}}),a=(n(382),n(2)),c=Object(a.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"search-box"},[t("reco-icon",{attrs:{icon:"reco-search"}}),e._v(" "),t("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown.apply(null,arguments)}]}}),e._v(" "),e.showSuggestions?t("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(n,s){return t("li",{key:s,staticClass:"suggestion",class:{focused:s===e.focusIndex},on:{mousedown:function(t){return e.go(s)},mouseenter:function(t){return e.focus(s)}}},[t("a",{attrs:{href:n.path},on:{click:function(e){e.preventDefault()}}},[t("span",{staticClass:"page-title"},[e._v(e._s(n.title||n.path))]),e._v(" "),n.header?t("span",{staticClass:"header"},[e._v("> "+e._s(n.header.title))]):e._e()])])})),0):e._e()],1)}),[],!1,null,null,null);t.default=c.exports}}]);