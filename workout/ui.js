(()=>{function rs(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function wi(t,e){t===void 0&&(t={}),e===void 0&&(e={});let i=["__proto__","constructor","prototype"];Object.keys(e).filter(s=>i.indexOf(s)<0).forEach(s=>{typeof t[s]>"u"?t[s]=e[s]:rs(e[s])&&rs(t[s])&&Object.keys(e[s]).length>0&&wi(t[s],e[s])})}var as={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function X(){let t=typeof document<"u"?document:{};return wi(t,as),t}var ma={document:as,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function q(){let t=typeof window<"u"?window:{};return wi(t,ma),t}function Ae(t){return t===void 0&&(t=""),t.trim().split(" ").filter(e=>!!e.trim())}function os(t){let e=t;Object.keys(e).forEach(i=>{try{e[i]=null}catch{}try{delete e[i]}catch{}})}function Te(t,e){return e===void 0&&(e=0),setTimeout(t,e)}function de(){return Date.now()}function ga(t){let e=q(),i;return e.getComputedStyle&&(i=e.getComputedStyle(t,null)),!i&&t.currentStyle&&(i=t.currentStyle),i||(i=t.style),i}function xt(t,e){e===void 0&&(e="x");let i=q(),s,r,a,o=ga(t);return i.WebKitCSSMatrix?(r=o.transform||o.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(l=>l.replace(",",".")).join(", ")),a=new i.WebKitCSSMatrix(r==="none"?"":r)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=a.toString().split(",")),e==="x"&&(i.WebKitCSSMatrix?r=a.m41:s.length===16?r=parseFloat(s[12]):r=parseFloat(s[4])),e==="y"&&(i.WebKitCSSMatrix?r=a.m42:s.length===16?r=parseFloat(s[13]):r=parseFloat(s[5])),r||0}function ot(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function va(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function ce(){let t=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let i=1;i<arguments.length;i+=1){let s=i<0||arguments.length<=i?void 0:arguments[i];if(s!=null&&!va(s)){let r=Object.keys(Object(s)).filter(a=>e.indexOf(a)<0);for(let a=0,o=r.length;a<o;a+=1){let l=r[a],d=Object.getOwnPropertyDescriptor(s,l);d!==void 0&&d.enumerable&&(ot(t[l])&&ot(s[l])?s[l].__swiper__?t[l]=s[l]:ce(t[l],s[l]):!ot(t[l])&&ot(s[l])?(t[l]={},s[l].__swiper__?t[l]=s[l]:ce(t[l],s[l])):t[l]=s[l])}}}return t}function Ye(t,e,i){t.style.setProperty(e,i)}function yi(t){let{swiper:e,targetPosition:i,side:s}=t,r=q(),a=-e.translate,o=null,l,d=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);let c=i>a?"next":"prev",p=(v,h)=>c==="next"&&v>=h||c==="prev"&&v<=h,f=()=>{l=new Date().getTime(),o===null&&(o=l);let v=Math.max(Math.min((l-o)/d,1),0),h=.5-Math.cos(v*Math.PI)/2,n=a+h*(i-a);if(p(n,i)&&(n=i),e.wrapperEl.scrollTo({[s]:n}),p(n,i)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[s]:n})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(f)};f()}function pe(t){return t.querySelector(".swiper-slide-transform")||t.shadowRoot&&t.shadowRoot.querySelector(".swiper-slide-transform")||t}function j(t,e){e===void 0&&(e="");let i=q(),s=[...t.children];return i.HTMLSlotElement&&t instanceof HTMLSlotElement&&s.push(...t.assignedElements()),e?s.filter(r=>r.matches(e)):s}function ba(t,e){let i=[e];for(;i.length>0;){let s=i.shift();if(t===s)return!0;i.push(...s.children,...s.shadowRoot?s.shadowRoot.children:[],...s.assignedElements?s.assignedElements():[])}}function ns(t,e){let i=q(),s=e.contains(t);return!s&&i.HTMLSlotElement&&e instanceof HTMLSlotElement&&(s=[...e.assignedElements()].includes(t),s||(s=ba(t,e))),s}function St(t){try{console.warn(t);return}catch{}}function Q(t,e){e===void 0&&(e=[]);let i=document.createElement(t);return i.classList.add(...Array.isArray(e)?e:Ae(e)),i}function je(t){let e=q(),i=X(),s=t.getBoundingClientRect(),r=i.body,a=t.clientTop||r.clientTop||0,o=t.clientLeft||r.clientLeft||0,l=t===e?e.scrollY:t.scrollTop,d=t===e?e.scrollX:t.scrollLeft;return{top:s.top+l-a,left:s.left+d-o}}function ls(t,e){let i=[];for(;t.previousElementSibling;){let s=t.previousElementSibling;e?s.matches(e)&&i.push(s):i.push(s),t=s}return i}function ds(t,e){let i=[];for(;t.nextElementSibling;){let s=t.nextElementSibling;e?s.matches(e)&&i.push(s):i.push(s),t=s}return i}function Pe(t,e){return q().getComputedStyle(t,null).getPropertyValue(e)}function Be(t){let e=t,i;if(e){for(i=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(i+=1);return i}}function xe(t,e){let i=[],s=t.parentElement;for(;s;)e?s.matches(e)&&i.push(s):i.push(s),s=s.parentElement;return i}function He(t,e){function i(s){s.target===t&&(e.call(t,s),t.removeEventListener("transitionend",i))}e&&t.addEventListener("transitionend",i)}function Et(t,e,i){let s=q();return i?t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):t.offsetWidth}function F(t){return(Array.isArray(t)?t:[t]).filter(e=>!!e)}function Ve(t){return e=>Math.abs(e)>0&&t.browser&&t.browser.need3dFix&&Math.abs(e)%90===0?e+.001:e}function te(t,e){e===void 0&&(e=""),typeof trustedTypes<"u"?t.innerHTML=trustedTypes.createPolicy("html",{createHTML:i=>i}).createHTML(e):t.innerHTML=e}var xi;function wa(){let t=q(),e=X();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function hs(){return xi||(xi=wa()),xi}var Si;function ya(t){let{userAgent:e}=t===void 0?{}:t,i=hs(),s=q(),r=s.navigator.platform,a=e||s.navigator.userAgent,o={ios:!1,android:!1},l=s.screen.width,d=s.screen.height,c=a.match(/(Android);?[\s\/]+([\d.]+)?/),p=a.match(/(iPad).*OS\s([\d_]+)/),f=a.match(/(iPod)(.*OS\s([\d_]+))?/),v=!p&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=r==="Win32",n=r==="MacIntel",u=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!p&&n&&i.touch&&u.indexOf(`${l}x${d}`)>=0&&(p=a.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),n=!1),c&&!h&&(o.os="android",o.android=!0),(p||v||f)&&(o.os="ios",o.ios=!0),o}function ms(t){return t===void 0&&(t={}),Si||(Si=ya(t)),Si}var Ei;function xa(){let t=q(),e=ms(),i=!1;function s(){let l=t.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(s()){let l=String(t.navigator.userAgent);if(l.includes("Version/")){let[d,c]=l.split("Version/")[1].split(" ")[0].split(".").map(p=>Number(p));i=d<16||d===16&&c<2}}let r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),a=s(),o=a||r&&e.ios;return{isSafari:i||a,needPerspectiveFix:i,need3dFix:o,isWebView:r}}function gs(){return Ei||(Ei=xa()),Ei}function Sa(t){let{swiper:e,on:i,emit:s}=t,r=q(),a=null,o=null,l=()=>{!e||e.destroyed||!e.initialized||(s("beforeResize"),s("resize"))},d=()=>{!e||e.destroyed||!e.initialized||(a=new ResizeObserver(f=>{o=r.requestAnimationFrame(()=>{let{width:v,height:h}=e,n=v,u=h;f.forEach(b=>{let{contentBoxSize:w,contentRect:g,target:m}=b;m&&m!==e.el||(n=g?g.width:(w[0]||w).inlineSize,u=g?g.height:(w[0]||w).blockSize)}),(n!==v||u!==h)&&l()})}),a.observe(e.el))},c=()=>{o&&r.cancelAnimationFrame(o),a&&a.unobserve&&e.el&&(a.unobserve(e.el),a=null)},p=()=>{!e||e.destroyed||!e.initialized||s("orientationchange")};i("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){d();return}r.addEventListener("resize",l),r.addEventListener("orientationchange",p)}),i("destroy",()=>{c(),r.removeEventListener("resize",l),r.removeEventListener("orientationchange",p)})}function Ea(t){let{swiper:e,extendParams:i,on:s,emit:r}=t,a=[],o=q(),l=function(p,f){f===void 0&&(f={});let v=o.MutationObserver||o.WebkitMutationObserver,h=new v(n=>{if(e.__preventObserver__)return;if(n.length===1){r("observerUpdate",n[0]);return}let u=function(){r("observerUpdate",n[0])};o.requestAnimationFrame?o.requestAnimationFrame(u):o.setTimeout(u,0)});h.observe(p,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:e.isElement||(typeof f.childList>"u"?!0:f).childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),a.push(h)},d=()=>{if(e.params.observer){if(e.params.observeParents){let p=xe(e.hostEl);for(let f=0;f<p.length;f+=1)l(p[f])}l(e.hostEl,{childList:e.params.observeSlideChildren}),l(e.wrapperEl,{attributes:!1})}},c=()=>{a.forEach(p=>{p.disconnect()}),a.splice(0,a.length)};i({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",d),s("destroy",c)}var Ta={on(t,e,i){let s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;let r=i?"unshift":"push";return t.split(" ").forEach(a=>{s.eventsListeners[a]||(s.eventsListeners[a]=[]),s.eventsListeners[a][r](e)}),s},once(t,e,i){let s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;function r(){s.off(t,r),r.__emitterProxy&&delete r.__emitterProxy;for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];e.apply(s,o)}return r.__emitterProxy=e,s.on(t,r,i)},onAny(t,e){let i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;let s=e?"unshift":"push";return i.eventsAnyListeners.indexOf(t)<0&&i.eventsAnyListeners[s](t),i},offAny(t){let e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;let i=e.eventsAnyListeners.indexOf(t);return i>=0&&e.eventsAnyListeners.splice(i,1),e},off(t,e){let i=this;return!i.eventsListeners||i.destroyed||!i.eventsListeners||t.split(" ").forEach(s=>{typeof e>"u"?i.eventsListeners[s]=[]:i.eventsListeners[s]&&i.eventsListeners[s].forEach((r,a)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&i.eventsListeners[s].splice(a,1)})}),i},emit(){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let e,i,s;for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return typeof a[0]=="string"||Array.isArray(a[0])?(e=a[0],i=a.slice(1,a.length),s=t):(e=a[0].events,i=a[0].data,s=a[0].context||t),i.unshift(s),(Array.isArray(e)?e:e.split(" ")).forEach(d=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(c=>{c.apply(s,[d,...i])}),t.eventsListeners&&t.eventsListeners[d]&&t.eventsListeners[d].forEach(c=>{c.apply(s,i)})}),t}};function _a(){let t=this,e,i,s=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=s.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?i=t.params.height:i=s.clientHeight,!(e===0&&t.isHorizontal()||i===0&&t.isVertical())&&(e=e-parseInt(Pe(s,"padding-left")||0,10)-parseInt(Pe(s,"padding-right")||0,10),i=i-parseInt(Pe(s,"padding-top")||0,10)-parseInt(Pe(s,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(i)&&(i=0),Object.assign(t,{width:e,height:i,size:t.isHorizontal()?e:i}))}function Ca(){let t=this;function e(T,L){return parseFloat(T.getPropertyValue(t.getDirectionLabel(L))||0)}let i=t.params,{wrapperEl:s,slidesEl:r,size:a,rtlTranslate:o,wrongRTL:l}=t,d=t.virtual&&i.virtual.enabled,c=d?t.virtual.slides.length:t.slides.length,p=j(r,`.${t.params.slideClass}, swiper-slide`),f=d?t.virtual.slides.length:p.length,v=[],h=[],n=[],u=i.slidesOffsetBefore;typeof u=="function"&&(u=i.slidesOffsetBefore.call(t));let b=i.slidesOffsetAfter;typeof b=="function"&&(b=i.slidesOffsetAfter.call(t));let w=t.snapGrid.length,g=t.slidesGrid.length,m=i.spaceBetween,y=-u,E=0,A=0;if(typeof a>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*a:typeof m=="string"&&(m=parseFloat(m)),t.virtualSize=-m,p.forEach(T=>{o?T.style.marginLeft="":T.style.marginRight="",T.style.marginBottom="",T.style.marginTop=""}),i.centeredSlides&&i.cssMode&&(Ye(s,"--swiper-centered-offset-before",""),Ye(s,"--swiper-centered-offset-after",""));let $=i.grid&&i.grid.rows>1&&t.grid;$?t.grid.initSlides(p):t.grid&&t.grid.unsetSlides();let P,x=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(T=>typeof i.breakpoints[T].slidesPerView<"u").length>0;for(let T=0;T<f;T+=1){P=0;let L;if(p[T]&&(L=p[T]),$&&t.grid.updateSlide(T,L,p),!(p[T]&&Pe(L,"display")==="none")){if(i.slidesPerView==="auto"){x&&(p[T].style[t.getDirectionLabel("width")]="");let M=getComputedStyle(L),C=L.style.transform,k=L.style.webkitTransform;if(C&&(L.style.transform="none"),k&&(L.style.webkitTransform="none"),i.roundLengths)P=t.isHorizontal()?Et(L,"width",!0):Et(L,"height",!0);else{let I=e(M,"width"),R=e(M,"padding-left"),S=e(M,"padding-right"),_=e(M,"margin-left"),H=e(M,"margin-right"),N=M.getPropertyValue("box-sizing");if(N&&N==="border-box")P=I+_+H;else{let{clientWidth:U,offsetWidth:ee}=L;P=I+R+S+_+H+(ee-U)}}C&&(L.style.transform=C),k&&(L.style.webkitTransform=k),i.roundLengths&&(P=Math.floor(P))}else P=(a-(i.slidesPerView-1)*m)/i.slidesPerView,i.roundLengths&&(P=Math.floor(P)),p[T]&&(p[T].style[t.getDirectionLabel("width")]=`${P}px`);p[T]&&(p[T].swiperSlideSize=P),n.push(P),i.centeredSlides?(y=y+P/2+E/2+m,E===0&&T!==0&&(y=y-a/2-m),T===0&&(y=y-a/2-m),Math.abs(y)<1/1e3&&(y=0),i.roundLengths&&(y=Math.floor(y)),A%i.slidesPerGroup===0&&v.push(y),h.push(y)):(i.roundLengths&&(y=Math.floor(y)),(A-Math.min(t.params.slidesPerGroupSkip,A))%t.params.slidesPerGroup===0&&v.push(y),h.push(y),y=y+P+m),t.virtualSize+=P+m,E=P,A+=1}}if(t.virtualSize=Math.max(t.virtualSize,a)+b,o&&l&&(i.effect==="slide"||i.effect==="coverflow")&&(s.style.width=`${t.virtualSize+m}px`),i.setWrapperSize&&(s.style[t.getDirectionLabel("width")]=`${t.virtualSize+m}px`),$&&t.grid.updateWrapperSize(P,v),!i.centeredSlides){let T=[];for(let L=0;L<v.length;L+=1){let M=v[L];i.roundLengths&&(M=Math.floor(M)),v[L]<=t.virtualSize-a&&T.push(M)}v=T,Math.floor(t.virtualSize-a)-Math.floor(v[v.length-1])>1&&v.push(t.virtualSize-a)}if(d&&i.loop){let T=n[0]+m;if(i.slidesPerGroup>1){let L=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/i.slidesPerGroup),M=T*i.slidesPerGroup;for(let C=0;C<L;C+=1)v.push(v[v.length-1]+M)}for(let L=0;L<t.virtual.slidesBefore+t.virtual.slidesAfter;L+=1)i.slidesPerGroup===1&&v.push(v[v.length-1]+T),h.push(h[h.length-1]+T),t.virtualSize+=T}if(v.length===0&&(v=[0]),m!==0){let T=t.isHorizontal()&&o?"marginLeft":t.getDirectionLabel("marginRight");p.filter((L,M)=>!i.cssMode||i.loop?!0:M!==p.length-1).forEach(L=>{L.style[T]=`${m}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let T=0;n.forEach(M=>{T+=M+(m||0)}),T-=m;let L=T>a?T-a:0;v=v.map(M=>M<=0?-u:M>L?L+b:M)}if(i.centerInsufficientSlides){let T=0;n.forEach(M=>{T+=M+(m||0)}),T-=m;let L=(i.slidesOffsetBefore||0)+(i.slidesOffsetAfter||0);if(T+L<a){let M=(a-T-L)/2;v.forEach((C,k)=>{v[k]=C-M}),h.forEach((C,k)=>{h[k]=C+M})}}if(Object.assign(t,{slides:p,snapGrid:v,slidesGrid:h,slidesSizesGrid:n}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){Ye(s,"--swiper-centered-offset-before",`${-v[0]}px`),Ye(s,"--swiper-centered-offset-after",`${t.size/2-n[n.length-1]/2}px`);let T=-t.snapGrid[0],L=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(M=>M+T),t.slidesGrid=t.slidesGrid.map(M=>M+L)}if(f!==c&&t.emit("slidesLengthChange"),v.length!==w&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),h.length!==g&&t.emit("slidesGridLengthChange"),i.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!d&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){let T=`${i.containerModifierClass}backface-hidden`,L=t.el.classList.contains(T);f<=i.maxBackfaceHiddenSlides?L||t.el.classList.add(T):L&&t.el.classList.remove(T)}}function Ma(t){let e=this,i=[],s=e.virtual&&e.params.virtual.enabled,r=0,a;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);let o=l=>s?e.slides[e.getSlideIndexByData(l)]:e.slides[l];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(l=>{i.push(l)});else for(a=0;a<Math.ceil(e.params.slidesPerView);a+=1){let l=e.activeIndex+a;if(l>e.slides.length&&!s)break;i.push(o(l))}else i.push(o(e.activeIndex));for(a=0;a<i.length;a+=1)if(typeof i[a]<"u"){let l=i[a].offsetHeight;r=l>r?l:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function $a(){let t=this,e=t.slides,i=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let s=0;s<e.length;s+=1)e[s].swiperSlideOffset=(t.isHorizontal()?e[s].offsetLeft:e[s].offsetTop)-i-t.cssOverflowAdjustment()}var cs=(t,e,i)=>{e&&!t.classList.contains(i)?t.classList.add(i):!e&&t.classList.contains(i)&&t.classList.remove(i)};function Aa(t){t===void 0&&(t=this&&this.translate||0);let e=this,i=e.params,{slides:s,rtlTranslate:r,snapGrid:a}=e;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-t;r&&(o=t),e.visibleSlidesIndexes=[],e.visibleSlides=[];let l=i.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*e.size:typeof l=="string"&&(l=parseFloat(l));for(let d=0;d<s.length;d+=1){let c=s[d],p=c.swiperSlideOffset;i.cssMode&&i.centeredSlides&&(p-=s[0].swiperSlideOffset);let f=(o+(i.centeredSlides?e.minTranslate():0)-p)/(c.swiperSlideSize+l),v=(o-a[0]+(i.centeredSlides?e.minTranslate():0)-p)/(c.swiperSlideSize+l),h=-(o-p),n=h+e.slidesSizesGrid[d],u=h>=0&&h<=e.size-e.slidesSizesGrid[d],b=h>=0&&h<e.size-1||n>1&&n<=e.size||h<=0&&n>=e.size;b&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(d)),cs(c,b,i.slideVisibleClass),cs(c,u,i.slideFullyVisibleClass),c.progress=r?-f:f,c.originalProgress=r?-v:v}}function Pa(t){let e=this;if(typeof t>"u"){let p=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*p||0}let i=e.params,s=e.maxTranslate()-e.minTranslate(),{progress:r,isBeginning:a,isEnd:o,progressLoop:l}=e,d=a,c=o;if(s===0)r=0,a=!0,o=!0;else{r=(t-e.minTranslate())/s;let p=Math.abs(t-e.minTranslate())<1,f=Math.abs(t-e.maxTranslate())<1;a=p||r<=0,o=f||r>=1,p&&(r=0),f&&(r=1)}if(i.loop){let p=e.getSlideIndexByData(0),f=e.getSlideIndexByData(e.slides.length-1),v=e.slidesGrid[p],h=e.slidesGrid[f],n=e.slidesGrid[e.slidesGrid.length-1],u=Math.abs(t);u>=v?l=(u-v)/n:l=(u+n-h)/n,l>1&&(l-=1)}Object.assign(e,{progress:r,progressLoop:l,isBeginning:a,isEnd:o}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&e.updateSlidesProgress(t),a&&!d&&e.emit("reachBeginning toEdge"),o&&!c&&e.emit("reachEnd toEdge"),(d&&!a||c&&!o)&&e.emit("fromEdge"),e.emit("progress",r)}var Ti=(t,e,i)=>{e&&!t.classList.contains(i)?t.classList.add(i):!e&&t.classList.contains(i)&&t.classList.remove(i)};function La(){let t=this,{slides:e,params:i,slidesEl:s,activeIndex:r}=t,a=t.virtual&&i.virtual.enabled,o=t.grid&&i.grid&&i.grid.rows>1,l=f=>j(s,`.${i.slideClass}${f}, swiper-slide${f}`)[0],d,c,p;if(a)if(i.loop){let f=r-t.virtual.slidesBefore;f<0&&(f=t.virtual.slides.length+f),f>=t.virtual.slides.length&&(f-=t.virtual.slides.length),d=l(`[data-swiper-slide-index="${f}"]`)}else d=l(`[data-swiper-slide-index="${r}"]`);else o?(d=e.find(f=>f.column===r),p=e.find(f=>f.column===r+1),c=e.find(f=>f.column===r-1)):d=e[r];d&&(o||(p=ds(d,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!p&&(p=e[0]),c=ls(d,`.${i.slideClass}, swiper-slide`)[0],i.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(f=>{Ti(f,f===d,i.slideActiveClass),Ti(f,f===p,i.slideNextClass),Ti(f,f===c,i.slidePrevClass)}),t.emitSlidesClasses()}var Nt=(t,e)=>{if(!t||t.destroyed||!t.params)return;let i=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,s=e.closest(i());if(s){let r=s.querySelector(`.${t.params.lazyPreloaderClass}`);!r&&t.isElement&&(s.shadowRoot?r=s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{s.shadowRoot&&(r=s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},_i=(t,e)=>{if(!t.slides[e])return;let i=t.slides[e].querySelector('[loading="lazy"]');i&&i.removeAttribute("loading")},$i=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext,i=t.slides.length;if(!i||!e||e<0)return;e=Math.min(e,i);let s=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),r=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){let o=r,l=[o-e];l.push(...Array.from({length:e}).map((d,c)=>o+s+c)),t.slides.forEach((d,c)=>{l.includes(d.column)&&_i(t,c)});return}let a=r+s-1;if(t.params.rewind||t.params.loop)for(let o=r-e;o<=a+e;o+=1){let l=(o%i+i)%i;(l<r||l>a)&&_i(t,l)}else for(let o=Math.max(r-e,0);o<=Math.min(a+e,i-1);o+=1)o!==r&&(o>a||o<r)&&_i(t,o)};function ka(t){let{slidesGrid:e,params:i}=t,s=t.rtlTranslate?t.translate:-t.translate,r;for(let a=0;a<e.length;a+=1)typeof e[a+1]<"u"?s>=e[a]&&s<e[a+1]-(e[a+1]-e[a])/2?r=a:s>=e[a]&&s<e[a+1]&&(r=a+1):s>=e[a]&&(r=a);return i.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function za(t){let e=this,i=e.rtlTranslate?e.translate:-e.translate,{snapGrid:s,params:r,activeIndex:a,realIndex:o,snapIndex:l}=e,d=t,c,p=h=>{let n=h-e.virtual.slidesBefore;return n<0&&(n=e.virtual.slides.length+n),n>=e.virtual.slides.length&&(n-=e.virtual.slides.length),n};if(typeof d>"u"&&(d=ka(e)),s.indexOf(i)>=0)c=s.indexOf(i);else{let h=Math.min(r.slidesPerGroupSkip,d);c=h+Math.floor((d-h)/r.slidesPerGroup)}if(c>=s.length&&(c=s.length-1),d===a&&!e.params.loop){c!==l&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(d===a&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=p(d);return}let f=e.grid&&r.grid&&r.grid.rows>1,v;if(e.virtual&&r.virtual.enabled&&r.loop)v=p(d);else if(f){let h=e.slides.find(u=>u.column===d),n=parseInt(h.getAttribute("data-swiper-slide-index"),10);Number.isNaN(n)&&(n=Math.max(e.slides.indexOf(h),0)),v=Math.floor(n/r.grid.rows)}else if(e.slides[d]){let h=e.slides[d].getAttribute("data-swiper-slide-index");h?v=parseInt(h,10):v=d}else v=d;Object.assign(e,{previousSnapIndex:l,snapIndex:c,previousRealIndex:o,realIndex:v,previousIndex:a,activeIndex:d}),e.initialized&&$i(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==v&&e.emit("realIndexChange"),e.emit("slideChange"))}function Ia(t,e){let i=this,s=i.params,r=t.closest(`.${s.slideClass}, swiper-slide`);!r&&i.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(l=>{!r&&l.matches&&l.matches(`.${s.slideClass}, swiper-slide`)&&(r=l)});let a=!1,o;if(r){for(let l=0;l<i.slides.length;l+=1)if(i.slides[l]===r){a=!0,o=l;break}}if(r&&a)i.clickedSlide=r,i.virtual&&i.params.virtual.enabled?i.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):i.clickedIndex=o;else{i.clickedSlide=void 0,i.clickedIndex=void 0;return}s.slideToClickedSlide&&i.clickedIndex!==void 0&&i.clickedIndex!==i.activeIndex&&i.slideToClickedSlide()}var Oa={updateSize:_a,updateSlides:Ca,updateAutoHeight:Ma,updateSlidesOffset:$a,updateSlidesProgress:Aa,updateProgress:Pa,updateSlidesClasses:La,updateActiveIndex:za,updateClickedSlide:Ia};function Da(t){t===void 0&&(t=this.isHorizontal()?"x":"y");let e=this,{params:i,rtlTranslate:s,translate:r,wrapperEl:a}=e;if(i.virtualTranslate)return s?-r:r;if(i.cssMode)return r;let o=xt(a,t);return o+=e.cssOverflowAdjustment(),s&&(o=-o),o||0}function Ra(t,e){let i=this,{rtlTranslate:s,params:r,wrapperEl:a,progress:o}=i,l=0,d=0,c=0;i.isHorizontal()?l=s?-t:t:d=t,r.roundLengths&&(l=Math.floor(l),d=Math.floor(d)),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?l:d,r.cssMode?a[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-l:-d:r.virtualTranslate||(i.isHorizontal()?l-=i.cssOverflowAdjustment():d-=i.cssOverflowAdjustment(),a.style.transform=`translate3d(${l}px, ${d}px, ${c}px)`);let p,f=i.maxTranslate()-i.minTranslate();f===0?p=0:p=(t-i.minTranslate())/f,p!==o&&i.updateProgress(t),i.emit("setTranslate",i.translate,e)}function Ba(){return-this.snapGrid[0]}function Ha(){return-this.snapGrid[this.snapGrid.length-1]}function Va(t,e,i,s,r){t===void 0&&(t=0),e===void 0&&(e=this.params.speed),i===void 0&&(i=!0),s===void 0&&(s=!0);let a=this,{params:o,wrapperEl:l}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;let d=a.minTranslate(),c=a.maxTranslate(),p;if(s&&t>d?p=d:s&&t<c?p=c:p=t,a.updateProgress(p),o.cssMode){let f=a.isHorizontal();if(e===0)l[f?"scrollLeft":"scrollTop"]=-p;else{if(!a.support.smoothScroll)return yi({swiper:a,targetPosition:-p,side:f?"left":"top"}),!0;l.scrollTo({[f?"left":"top"]:-p,behavior:"smooth"})}return!0}return e===0?(a.setTransition(0),a.setTranslate(p),i&&(a.emit("beforeTransitionStart",e,r),a.emit("transitionEnd"))):(a.setTransition(e),a.setTranslate(p),i&&(a.emit("beforeTransitionStart",e,r),a.emit("transitionStart")),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||(a.onTranslateToWrapperTransitionEnd=function(v){!a||a.destroyed||v.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,i&&a.emit("transitionEnd"))}),a.wrapperEl.addEventListener("transitionend",a.onTranslateToWrapperTransitionEnd))),!0}var Fa={getTranslate:Da,setTranslate:Ra,minTranslate:Ba,maxTranslate:Ha,translateTo:Va};function Na(t,e){let i=this;i.params.cssMode||(i.wrapperEl.style.transitionDuration=`${t}ms`,i.wrapperEl.style.transitionDelay=t===0?"0ms":""),i.emit("setTransition",t,e)}function vs(t){let{swiper:e,runCallbacks:i,direction:s,step:r}=t,{activeIndex:a,previousIndex:o}=e,l=s;l||(a>o?l="next":a<o?l="prev":l="reset"),e.emit(`transition${r}`),i&&l==="reset"?e.emit(`slideResetTransition${r}`):i&&a!==o&&(e.emit(`slideChangeTransition${r}`),l==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function Ga(t,e){t===void 0&&(t=!0);let i=this,{params:s}=i;s.cssMode||(s.autoHeight&&i.updateAutoHeight(),vs({swiper:i,runCallbacks:t,direction:e,step:"Start"}))}function qa(t,e){t===void 0&&(t=!0);let i=this,{params:s}=i;i.animating=!1,!s.cssMode&&(i.setTransition(0),vs({swiper:i,runCallbacks:t,direction:e,step:"End"}))}var Wa={setTransition:Na,transitionStart:Ga,transitionEnd:qa};function Xa(t,e,i,s,r){t===void 0&&(t=0),i===void 0&&(i=!0),typeof t=="string"&&(t=parseInt(t,10));let a=this,o=t;o<0&&(o=0);let{params:l,snapGrid:d,slidesGrid:c,previousIndex:p,activeIndex:f,rtlTranslate:v,wrapperEl:h,enabled:n}=a;if(!n&&!s&&!r||a.destroyed||a.animating&&l.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=a.params.speed);let u=Math.min(a.params.slidesPerGroupSkip,o),b=u+Math.floor((o-u)/a.params.slidesPerGroup);b>=d.length&&(b=d.length-1);let w=-d[b];if(l.normalizeSlideIndex)for(let $=0;$<c.length;$+=1){let P=-Math.floor(w*100),x=Math.floor(c[$]*100),T=Math.floor(c[$+1]*100);typeof c[$+1]<"u"?P>=x&&P<T-(T-x)/2?o=$:P>=x&&P<T&&(o=$+1):P>=x&&(o=$)}if(a.initialized&&o!==f&&(!a.allowSlideNext&&(v?w>a.translate&&w>a.minTranslate():w<a.translate&&w<a.minTranslate())||!a.allowSlidePrev&&w>a.translate&&w>a.maxTranslate()&&(f||0)!==o))return!1;o!==(p||0)&&i&&a.emit("beforeSlideChangeStart"),a.updateProgress(w);let g;o>f?g="next":o<f?g="prev":g="reset";let m=a.virtual&&a.params.virtual.enabled;if(!(m&&r)&&(v&&-w===a.translate||!v&&w===a.translate))return a.updateActiveIndex(o),l.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),l.effect!=="slide"&&a.setTranslate(w),g!=="reset"&&(a.transitionStart(i,g),a.transitionEnd(i,g)),!1;if(l.cssMode){let $=a.isHorizontal(),P=v?w:-w;if(e===0)m&&(a.wrapperEl.style.scrollSnapType="none",a._immediateVirtual=!0),m&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{h[$?"scrollLeft":"scrollTop"]=P})):h[$?"scrollLeft":"scrollTop"]=P,m&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType="",a._immediateVirtual=!1});else{if(!a.support.smoothScroll)return yi({swiper:a,targetPosition:P,side:$?"left":"top"}),!0;h.scrollTo({[$?"left":"top"]:P,behavior:"smooth"})}return!0}let A=gs().isSafari;return m&&!r&&A&&a.isElement&&a.virtual.update(!1,!1,o),a.setTransition(e),a.setTranslate(w),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit("beforeTransitionStart",e,s),a.transitionStart(i,g),e===0?a.transitionEnd(i,g):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(P){!a||a.destroyed||P.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(i,g))}),a.wrapperEl.addEventListener("transitionend",a.onSlideToWrapperTransitionEnd)),!0}function Ya(t,e,i,s){t===void 0&&(t=0),i===void 0&&(i=!0),typeof t=="string"&&(t=parseInt(t,10));let r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);let a=r.grid&&r.params.grid&&r.params.grid.rows>1,o=t;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)o=o+r.virtual.slidesBefore;else{let l;if(a){let v=o*r.params.grid.rows;l=r.slides.find(h=>h.getAttribute("data-swiper-slide-index")*1===v).column}else l=r.getSlideIndexByData(o);let d=a?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:c}=r.params,p=r.params.slidesPerView;p==="auto"?p=r.slidesPerViewDynamic():(p=Math.ceil(parseFloat(r.params.slidesPerView,10)),c&&p%2===0&&(p=p+1));let f=d-l<p;if(c&&(f=f||l<Math.ceil(p/2)),s&&c&&r.params.slidesPerView!=="auto"&&!a&&(f=!1),f){let v=c?l<r.activeIndex?"prev":"next":l-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?l+1:l-d+1,slideRealIndex:v==="next"?r.realIndex:void 0})}if(a){let v=o*r.params.grid.rows;o=r.slides.find(h=>h.getAttribute("data-swiper-slide-index")*1===v).column}else o=r.getSlideIndexByData(o)}return requestAnimationFrame(()=>{r.slideTo(o,e,i,s)}),r}function ja(t,e,i){e===void 0&&(e=!0);let s=this,{enabled:r,params:a,animating:o}=s;if(!r||s.destroyed)return s;typeof t>"u"&&(t=s.params.speed);let l=a.slidesPerGroup;a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(l=Math.max(s.slidesPerViewDynamic("current",!0),1));let d=s.activeIndex<a.slidesPerGroupSkip?1:l,c=s.virtual&&a.virtual.enabled;if(a.loop){if(o&&!c&&a.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{s.slideTo(s.activeIndex+d,t,e,i)}),!0}return a.rewind&&s.isEnd?s.slideTo(0,t,e,i):s.slideTo(s.activeIndex+d,t,e,i)}function Ua(t,e,i){e===void 0&&(e=!0);let s=this,{params:r,snapGrid:a,slidesGrid:o,rtlTranslate:l,enabled:d,animating:c}=s;if(!d||s.destroyed)return s;typeof t>"u"&&(t=s.params.speed);let p=s.virtual&&r.virtual.enabled;if(r.loop){if(c&&!p&&r.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}let f=l?s.translate:-s.translate;function v(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}let h=v(f),n=a.map(g=>v(g)),u=r.freeMode&&r.freeMode.enabled,b=a[n.indexOf(h)-1];if(typeof b>"u"&&(r.cssMode||u)){let g;a.forEach((m,y)=>{h>=m&&(g=y)}),typeof g<"u"&&(b=u?a[g]:a[g>0?g-1:g])}let w=0;if(typeof b<"u"&&(w=o.indexOf(b),w<0&&(w=s.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(w=w-s.slidesPerViewDynamic("previous",!0)+1,w=Math.max(w,0))),r.rewind&&s.isBeginning){let g=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(g,t,e,i)}else if(r.loop&&s.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{s.slideTo(w,t,e,i)}),!0;return s.slideTo(w,t,e,i)}function Ka(t,e,i){e===void 0&&(e=!0);let s=this;if(!s.destroyed)return typeof t>"u"&&(t=s.params.speed),s.slideTo(s.activeIndex,t,e,i)}function Za(t,e,i,s){e===void 0&&(e=!0),s===void 0&&(s=.5);let r=this;if(r.destroyed)return;typeof t>"u"&&(t=r.params.speed);let a=r.activeIndex,o=Math.min(r.params.slidesPerGroupSkip,a),l=o+Math.floor((a-o)/r.params.slidesPerGroup),d=r.rtlTranslate?r.translate:-r.translate;if(d>=r.snapGrid[l]){let c=r.snapGrid[l],p=r.snapGrid[l+1];d-c>(p-c)*s&&(a+=r.params.slidesPerGroup)}else{let c=r.snapGrid[l-1],p=r.snapGrid[l];d-c<=(p-c)*s&&(a-=r.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,r.slidesGrid.length-1),r.slideTo(a,t,e,i)}function Qa(){let t=this;if(t.destroyed)return;let{params:e,slidesEl:i}=t,s=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView,r=t.getSlideIndexWhenGrid(t.clickedIndex),a,o=t.isElement?"swiper-slide":`.${e.slideClass}`,l=t.grid&&t.params.grid&&t.params.grid.rows>1;if(e.loop){if(t.animating)return;a=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?t.slideToLoop(a):r>(l?(t.slides.length-s)/2-(t.params.grid.rows-1):t.slides.length-s)?(t.loopFix(),r=t.getSlideIndex(j(i,`${o}[data-swiper-slide-index="${a}"]`)[0]),Te(()=>{t.slideTo(r)})):t.slideTo(r)}else t.slideTo(r)}var Ja={slideTo:Xa,slideToLoop:Ya,slideNext:ja,slidePrev:Ua,slideReset:Ka,slideToClosest:Za,slideToClickedSlide:Qa};function eo(t,e){let i=this,{params:s,slidesEl:r}=i;if(!s.loop||i.virtual&&i.params.virtual.enabled)return;let a=()=>{j(r,`.${s.slideClass}, swiper-slide`).forEach((h,n)=>{h.setAttribute("data-swiper-slide-index",n)})},o=()=>{let v=j(r,`.${s.slideBlankClass}`);v.forEach(h=>{h.remove()}),v.length>0&&(i.recalcSlides(),i.updateSlides())},l=i.grid&&s.grid&&s.grid.rows>1;s.loopAddBlankSlides&&(s.slidesPerGroup>1||l)&&o();let d=s.slidesPerGroup*(l?s.grid.rows:1),c=i.slides.length%d!==0,p=l&&i.slides.length%s.grid.rows!==0,f=v=>{for(let h=0;h<v;h+=1){let n=i.isElement?Q("swiper-slide",[s.slideBlankClass]):Q("div",[s.slideClass,s.slideBlankClass]);i.slidesEl.append(n)}};if(c){if(s.loopAddBlankSlides){let v=d-i.slides.length%d;f(v),i.recalcSlides(),i.updateSlides()}else St("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");a()}else if(p){if(s.loopAddBlankSlides){let v=s.grid.rows-i.slides.length%s.grid.rows;f(v),i.recalcSlides(),i.updateSlides()}else St("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");a()}else a();i.loopFix({slideRealIndex:t,direction:s.centeredSlides?void 0:"next",initial:e})}function to(t){let{slideRealIndex:e,slideTo:i=!0,direction:s,setTranslate:r,activeSlideIndex:a,initial:o,byController:l,byMousewheel:d}=t===void 0?{}:t,c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");let{slides:p,allowSlidePrev:f,allowSlideNext:v,slidesEl:h,params:n}=c,{centeredSlides:u,initialSlide:b}=n;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&n.virtual.enabled){i&&(!n.centeredSlides&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):n.centeredSlides&&c.snapIndex<n.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=f,c.allowSlideNext=v,c.emit("loopFix");return}let w=n.slidesPerView;w==="auto"?w=c.slidesPerViewDynamic():(w=Math.ceil(parseFloat(n.slidesPerView,10)),u&&w%2===0&&(w=w+1));let g=n.slidesPerGroupAuto?w:n.slidesPerGroup,m=u?Math.max(g,Math.ceil(w/2)):g;m%g!==0&&(m+=g-m%g),m+=n.loopAdditionalSlides,c.loopedSlides=m;let y=c.grid&&n.grid&&n.grid.rows>1;p.length<w+m||c.params.effect==="cards"&&p.length<w+m*2?St("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):y&&n.grid.fill==="row"&&St("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");let E=[],A=[],$=y?Math.ceil(p.length/n.grid.rows):p.length,P=o&&$-b<w&&!u,x=P?b:c.activeIndex;typeof a>"u"?a=c.getSlideIndex(p.find(R=>R.classList.contains(n.slideActiveClass))):x=a;let T=s==="next"||!s,L=s==="prev"||!s,M=0,C=0,I=(y?p[a].column:a)+(u&&typeof r>"u"?-w/2+.5:0);if(I<m){M=Math.max(m-I,g);for(let R=0;R<m-I;R+=1){let S=R-Math.floor(R/$)*$;if(y){let _=$-S-1;for(let H=p.length-1;H>=0;H-=1)p[H].column===_&&E.push(H)}else E.push($-S-1)}}else if(I+w>$-m){C=Math.max(I-($-m*2),g),P&&(C=Math.max(C,w-$+b+1));for(let R=0;R<C;R+=1){let S=R-Math.floor(R/$)*$;y?p.forEach((_,H)=>{_.column===S&&A.push(H)}):A.push(S)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),c.params.effect==="cards"&&p.length<w+m*2&&(A.includes(a)&&A.splice(A.indexOf(a),1),E.includes(a)&&E.splice(E.indexOf(a),1)),L&&E.forEach(R=>{p[R].swiperLoopMoveDOM=!0,h.prepend(p[R]),p[R].swiperLoopMoveDOM=!1}),T&&A.forEach(R=>{p[R].swiperLoopMoveDOM=!0,h.append(p[R]),p[R].swiperLoopMoveDOM=!1}),c.recalcSlides(),n.slidesPerView==="auto"?c.updateSlides():y&&(E.length>0&&L||A.length>0&&T)&&c.slides.forEach((R,S)=>{c.grid.updateSlide(S,R,c.slides)}),n.watchSlidesProgress&&c.updateSlidesOffset(),i){if(E.length>0&&L){if(typeof e>"u"){let R=c.slidesGrid[x],_=c.slidesGrid[x+M]-R;d?c.setTranslate(c.translate-_):(c.slideTo(x+Math.ceil(M),0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-_,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-_))}else if(r){let R=y?E.length/n.grid.rows:E.length;c.slideTo(c.activeIndex+R,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(A.length>0&&T)if(typeof e>"u"){let R=c.slidesGrid[x],_=c.slidesGrid[x-C]-R;d?c.setTranslate(c.translate-_):(c.slideTo(x-C,0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-_,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-_))}else{let R=y?A.length/n.grid.rows:A.length;c.slideTo(c.activeIndex-R,0,!1,!0)}}if(c.allowSlidePrev=f,c.allowSlideNext=v,c.controller&&c.controller.control&&!l){let R={slideRealIndex:e,direction:s,setTranslate:r,activeSlideIndex:a,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(S=>{!S.destroyed&&S.params.loop&&S.loopFix({...R,slideTo:S.params.slidesPerView===n.slidesPerView?i:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...R,slideTo:c.controller.control.params.slidesPerView===n.slidesPerView?i:!1})}c.emit("loopFix")}function io(){let t=this,{params:e,slidesEl:i}=t;if(!e.loop||!i||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();let s=[];t.slides.forEach(r=>{let a=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;s[a]=r}),t.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),s.forEach(r=>{i.append(r)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var so={loopCreate:eo,loopFix:to,loopDestroy:io};function ro(t){let e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;let i=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),i.style.cursor="move",i.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function ao(){let t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var oo={setGrabCursor:ro,unsetGrabCursor:ao};function no(t,e){e===void 0&&(e=this);function i(s){if(!s||s===X()||s===q())return null;s.assignedSlot&&(s=s.assignedSlot);let r=s.closest(t);return!r&&!s.getRootNode?null:r||i(s.getRootNode().host)}return i(e)}function ps(t,e,i){let s=q(),{params:r}=t,a=r.edgeSwipeDetection,o=r.edgeSwipeThreshold;return a&&(i<=o||i>=s.innerWidth-o)?a==="prevent"?(e.preventDefault(),!0):!1:!0}function lo(t){let e=this,i=X(),s=t;s.originalEvent&&(s=s.originalEvent);let r=e.touchEventsData;if(s.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==s.pointerId)return;r.pointerId=s.pointerId}else s.type==="touchstart"&&s.targetTouches.length===1&&(r.touchId=s.targetTouches[0].identifier);if(s.type==="touchstart"){ps(e,s,s.targetTouches[0].pageX);return}let{params:a,touches:o,enabled:l}=e;if(!l||!a.simulateTouch&&s.pointerType==="mouse"||e.animating&&a.preventInteractionOnTransition)return;!e.animating&&a.cssMode&&a.loop&&e.loopFix();let d=s.target;if(a.touchEventsTarget==="wrapper"&&!ns(d,e.wrapperEl)||"which"in s&&s.which===3||"button"in s&&s.button>0||r.isTouched&&r.isMoved)return;let c=!!a.noSwipingClass&&a.noSwipingClass!=="",p=s.composedPath?s.composedPath():s.path;c&&s.target&&s.target.shadowRoot&&p&&(d=p[0]);let f=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,v=!!(s.target&&s.target.shadowRoot);if(a.noSwiping&&(v?no(f,d):d.closest(f))){e.allowClick=!0;return}if(a.swipeHandler&&!d.closest(a.swipeHandler))return;o.currentX=s.pageX,o.currentY=s.pageY;let h=o.currentX,n=o.currentY;if(!ps(e,s,h))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=h,o.startY=n,r.touchStartTime=de(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,a.threshold>0&&(r.allowThresholdMove=!1);let u=!0;d.matches(r.focusableElements)&&(u=!1,d.nodeName==="SELECT"&&(r.isTouched=!1)),i.activeElement&&i.activeElement.matches(r.focusableElements)&&i.activeElement!==d&&(s.pointerType==="mouse"||s.pointerType!=="mouse"&&!d.matches(r.focusableElements))&&i.activeElement.blur();let b=u&&e.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||b)&&!d.isContentEditable&&s.preventDefault(),a.freeMode&&a.freeMode.enabled&&e.freeMode&&e.animating&&!a.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",s)}function co(t){let e=X(),i=this,s=i.touchEventsData,{params:r,touches:a,rtlTranslate:o,enabled:l}=i;if(!l||!r.simulateTouch&&t.pointerType==="mouse")return;let d=t;if(d.originalEvent&&(d=d.originalEvent),d.type==="pointermove"&&(s.touchId!==null||d.pointerId!==s.pointerId))return;let c;if(d.type==="touchmove"){if(c=[...d.changedTouches].find(A=>A.identifier===s.touchId),!c||c.identifier!==s.touchId)return}else c=d;if(!s.isTouched){s.startMoving&&s.isScrolling&&i.emit("touchMoveOpposite",d);return}let p=c.pageX,f=c.pageY;if(d.preventedByNestedSwiper){a.startX=p,a.startY=f;return}if(!i.allowTouchMove){d.target.matches(s.focusableElements)||(i.allowClick=!1),s.isTouched&&(Object.assign(a,{startX:p,startY:f,currentX:p,currentY:f}),s.touchStartTime=de());return}if(r.touchReleaseOnEdges&&!r.loop)if(i.isVertical()){if(f<a.startY&&i.translate<=i.maxTranslate()||f>a.startY&&i.translate>=i.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else{if(o&&(p>a.startX&&-i.translate<=i.maxTranslate()||p<a.startX&&-i.translate>=i.minTranslate()))return;if(!o&&(p<a.startX&&i.translate<=i.maxTranslate()||p>a.startX&&i.translate>=i.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(s.focusableElements)&&e.activeElement!==d.target&&d.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&d.target===e.activeElement&&d.target.matches(s.focusableElements)){s.isMoved=!0,i.allowClick=!1;return}s.allowTouchCallbacks&&i.emit("touchMove",d),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=p,a.currentY=f;let v=a.currentX-a.startX,h=a.currentY-a.startY;if(i.params.threshold&&Math.sqrt(v**2+h**2)<i.params.threshold)return;if(typeof s.isScrolling>"u"){let A;i.isHorizontal()&&a.currentY===a.startY||i.isVertical()&&a.currentX===a.startX?s.isScrolling=!1:v*v+h*h>=25&&(A=Math.atan2(Math.abs(h),Math.abs(v))*180/Math.PI,s.isScrolling=i.isHorizontal()?A>r.touchAngle:90-A>r.touchAngle)}if(s.isScrolling&&i.emit("touchMoveOpposite",d),typeof s.startMoving>"u"&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(s.startMoving=!0),s.isScrolling||d.type==="touchmove"&&s.preventTouchMoveFromPointerMove){s.isTouched=!1;return}if(!s.startMoving)return;i.allowClick=!1,!r.cssMode&&d.cancelable&&d.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&d.stopPropagation();let n=i.isHorizontal()?v:h,u=i.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;r.oneWayMovement&&(n=Math.abs(n)*(o?1:-1),u=Math.abs(u)*(o?1:-1)),a.diff=n,n*=r.touchRatio,o&&(n=-n,u=-u);let b=i.touchesDirection;i.swipeDirection=n>0?"prev":"next",i.touchesDirection=u>0?"prev":"next";let w=i.params.loop&&!r.cssMode,g=i.touchesDirection==="next"&&i.allowSlideNext||i.touchesDirection==="prev"&&i.allowSlidePrev;if(!s.isMoved){if(w&&g&&i.loopFix({direction:i.swipeDirection}),s.startTranslate=i.getTranslate(),i.setTransition(0),i.animating){let A=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});i.wrapperEl.dispatchEvent(A)}s.allowMomentumBounce=!1,r.grabCursor&&(i.allowSlideNext===!0||i.allowSlidePrev===!0)&&i.setGrabCursor(!0),i.emit("sliderFirstMove",d)}let m;if(new Date().getTime(),r._loopSwapReset!==!1&&s.isMoved&&s.allowThresholdMove&&b!==i.touchesDirection&&w&&g&&Math.abs(n)>=1){Object.assign(a,{startX:p,startY:f,currentX:p,currentY:f,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,s.startTranslate=s.currentTranslate;return}i.emit("sliderMove",d),s.isMoved=!0,s.currentTranslate=n+s.startTranslate;let y=!0,E=r.resistanceRatio;if(r.touchReleaseOnEdges&&(E=0),n>0?(w&&g&&!m&&s.allowThresholdMove&&s.currentTranslate>(r.centeredSlides?i.minTranslate()-i.slidesSizesGrid[i.activeIndex+1]-(r.slidesPerView!=="auto"&&i.slides.length-r.slidesPerView>=2?i.slidesSizesGrid[i.activeIndex+1]+i.params.spaceBetween:0)-i.params.spaceBetween:i.minTranslate())&&i.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>i.minTranslate()&&(y=!1,r.resistance&&(s.currentTranslate=i.minTranslate()-1+(-i.minTranslate()+s.startTranslate+n)**E))):n<0&&(w&&g&&!m&&s.allowThresholdMove&&s.currentTranslate<(r.centeredSlides?i.maxTranslate()+i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween+(r.slidesPerView!=="auto"&&i.slides.length-r.slidesPerView>=2?i.slidesSizesGrid[i.slidesSizesGrid.length-1]+i.params.spaceBetween:0):i.maxTranslate())&&i.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:i.slides.length-(r.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),s.currentTranslate<i.maxTranslate()&&(y=!1,r.resistance&&(s.currentTranslate=i.maxTranslate()+1-(i.maxTranslate()-s.startTranslate-n)**E))),y&&(d.preventedByNestedSwiper=!0),!i.allowSlideNext&&i.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!i.allowSlidePrev&&i.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!i.allowSlidePrev&&!i.allowSlideNext&&(s.currentTranslate=s.startTranslate),r.threshold>0)if(Math.abs(n)>r.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,s.currentTranslate=s.startTranslate,a.diff=i.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{s.currentTranslate=s.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&i.freeMode||r.watchSlidesProgress)&&(i.updateActiveIndex(),i.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&i.freeMode&&i.freeMode.onTouchMove(),i.updateProgress(s.currentTranslate),i.setTranslate(s.currentTranslate))}function po(t){let e=this,i=e.touchEventsData,s=t;s.originalEvent&&(s=s.originalEvent);let r;if(s.type==="touchend"||s.type==="touchcancel"){if(r=[...s.changedTouches].find(E=>E.identifier===i.touchId),!r||r.identifier!==i.touchId)return}else{if(i.touchId!==null||s.pointerId!==i.pointerId)return;r=s}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(s.type)&&!(["pointercancel","contextmenu"].includes(s.type)&&(e.browser.isSafari||e.browser.isWebView)))return;i.pointerId=null,i.touchId=null;let{params:o,touches:l,rtlTranslate:d,slidesGrid:c,enabled:p}=e;if(!p||!o.simulateTouch&&s.pointerType==="mouse")return;if(i.allowTouchCallbacks&&e.emit("touchEnd",s),i.allowTouchCallbacks=!1,!i.isTouched){i.isMoved&&o.grabCursor&&e.setGrabCursor(!1),i.isMoved=!1,i.startMoving=!1;return}o.grabCursor&&i.isMoved&&i.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);let f=de(),v=f-i.touchStartTime;if(e.allowClick){let E=s.path||s.composedPath&&s.composedPath();e.updateClickedSlide(E&&E[0]||s.target,E),e.emit("tap click",s),v<300&&f-i.lastClickTime<300&&e.emit("doubleTap doubleClick",s)}if(i.lastClickTime=de(),Te(()=>{e.destroyed||(e.allowClick=!0)}),!i.isTouched||!i.isMoved||!e.swipeDirection||l.diff===0&&!i.loopSwapReset||i.currentTranslate===i.startTranslate&&!i.loopSwapReset){i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;return}i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;let h;if(o.followFinger?h=d?e.translate:-e.translate:h=-i.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:h});return}let n=h>=-e.maxTranslate()&&!e.params.loop,u=0,b=e.slidesSizesGrid[0];for(let E=0;E<c.length;E+=E<o.slidesPerGroupSkip?1:o.slidesPerGroup){let A=E<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[E+A]<"u"?(n||h>=c[E]&&h<c[E+A])&&(u=E,b=c[E+A]-c[E]):(n||h>=c[E])&&(u=E,b=c[c.length-1]-c[c.length-2])}let w=null,g=null;o.rewind&&(e.isBeginning?g=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(w=0));let m=(h-c[u])/b,y=u<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(v>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(m>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?w:u+y):e.slideTo(u)),e.swipeDirection==="prev"&&(m>1-o.longSwipesRatio?e.slideTo(u+y):g!==null&&m<0&&Math.abs(m)>o.longSwipesRatio?e.slideTo(g):e.slideTo(u))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(s.target===e.navigation.nextEl||s.target===e.navigation.prevEl)?s.target===e.navigation.nextEl?e.slideTo(u+y):e.slideTo(u):(e.swipeDirection==="next"&&e.slideTo(w!==null?w:u+y),e.swipeDirection==="prev"&&e.slideTo(g!==null?g:u))}}function us(){let t=this,{params:e,el:i}=t;if(i&&i.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();let{allowSlideNext:s,allowSlidePrev:r,snapGrid:a}=t,o=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();let l=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!l?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!o?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=r,t.allowSlideNext=s,t.params.watchOverflow&&a!==t.snapGrid&&t.checkOverflow()}function uo(t){let e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function fo(){let t=this,{wrapperEl:e,rtlTranslate:i,enabled:s}=t;if(!s)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let r,a=t.maxTranslate()-t.minTranslate();a===0?r=0:r=(t.translate-t.minTranslate())/a,r!==t.progress&&t.updateProgress(i?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function ho(t){let e=this;Nt(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function mo(){let t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}var bs=(t,e)=>{let i=X(),{params:s,el:r,wrapperEl:a,device:o}=t,l=!!s.nested,d=e==="on"?"addEventListener":"removeEventListener",c=e;!r||typeof r=="string"||(i[d]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:l}),r[d]("touchstart",t.onTouchStart,{passive:!1}),r[d]("pointerdown",t.onTouchStart,{passive:!1}),i[d]("touchmove",t.onTouchMove,{passive:!1,capture:l}),i[d]("pointermove",t.onTouchMove,{passive:!1,capture:l}),i[d]("touchend",t.onTouchEnd,{passive:!0}),i[d]("pointerup",t.onTouchEnd,{passive:!0}),i[d]("pointercancel",t.onTouchEnd,{passive:!0}),i[d]("touchcancel",t.onTouchEnd,{passive:!0}),i[d]("pointerout",t.onTouchEnd,{passive:!0}),i[d]("pointerleave",t.onTouchEnd,{passive:!0}),i[d]("contextmenu",t.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&r[d]("click",t.onClick,!0),s.cssMode&&a[d]("scroll",t.onScroll),s.updateOnWindowResize?t[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",us,!0):t[c]("observerUpdate",us,!0),r[d]("load",t.onLoad,{capture:!0}))};function go(){let t=this,{params:e}=t;t.onTouchStart=lo.bind(t),t.onTouchMove=co.bind(t),t.onTouchEnd=po.bind(t),t.onDocumentTouchStart=mo.bind(t),e.cssMode&&(t.onScroll=fo.bind(t)),t.onClick=uo.bind(t),t.onLoad=ho.bind(t),bs(t,"on")}function vo(){bs(this,"off")}var bo={attachEvents:go,detachEvents:vo},fs=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function wo(){let t=this,{realIndex:e,initialized:i,params:s,el:r}=t,a=s.breakpoints;if(!a||a&&Object.keys(a).length===0)return;let o=X(),l=s.breakpointsBase==="window"||!s.breakpointsBase?s.breakpointsBase:"container",d=["window","container"].includes(s.breakpointsBase)||!s.breakpointsBase?t.el:o.querySelector(s.breakpointsBase),c=t.getBreakpoint(a,l,d);if(!c||t.currentBreakpoint===c)return;let f=(c in a?a[c]:void 0)||t.originalParams,v=fs(t,s),h=fs(t,f),n=t.params.grabCursor,u=f.grabCursor,b=s.enabled;v&&!h?(r.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),t.emitContainerClasses()):!v&&h&&(r.classList.add(`${s.containerModifierClass}grid`),(f.grid.fill&&f.grid.fill==="column"||!f.grid.fill&&s.grid.fill==="column")&&r.classList.add(`${s.containerModifierClass}grid-column`),t.emitContainerClasses()),n&&!u?t.unsetGrabCursor():!n&&u&&t.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(A=>{if(typeof f[A]>"u")return;let $=s[A]&&s[A].enabled,P=f[A]&&f[A].enabled;$&&!P&&t[A].disable(),!$&&P&&t[A].enable()});let w=f.direction&&f.direction!==s.direction,g=s.loop&&(f.slidesPerView!==s.slidesPerView||w),m=s.loop;w&&i&&t.changeDirection(),ce(t.params,f);let y=t.params.enabled,E=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),b&&!y?t.disable():!b&&y&&t.enable(),t.currentBreakpoint=c,t.emit("_beforeBreakpoint",f),i&&(g?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!m&&E?(t.loopCreate(e),t.updateSlides()):m&&!E&&t.loopDestroy()),t.emit("breakpoint",f)}function yo(t,e,i){if(e===void 0&&(e="window"),!t||e==="container"&&!i)return;let s=!1,r=q(),a=e==="window"?r.innerHeight:i.clientHeight,o=Object.keys(t).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){let d=parseFloat(l.substr(1));return{value:a*d,point:l}}return{value:l,point:l}});o.sort((l,d)=>parseInt(l.value,10)-parseInt(d.value,10));for(let l=0;l<o.length;l+=1){let{point:d,value:c}=o[l];e==="window"?r.matchMedia(`(min-width: ${c}px)`).matches&&(s=d):c<=i.clientWidth&&(s=d)}return s||"max"}var xo={setBreakpoint:wo,getBreakpoint:yo};function So(t,e){let i=[];return t.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(r=>{s[r]&&i.push(e+r)}):typeof s=="string"&&i.push(e+s)}),i}function Eo(){let t=this,{classNames:e,params:i,rtl:s,el:r,device:a}=t,o=So(["initialized",i.direction,{"free-mode":t.params.freeMode&&i.freeMode.enabled},{autoheight:i.autoHeight},{rtl:s},{grid:i.grid&&i.grid.rows>1},{"grid-column":i.grid&&i.grid.rows>1&&i.grid.fill==="column"},{android:a.android},{ios:a.ios},{"css-mode":i.cssMode},{centered:i.cssMode&&i.centeredSlides},{"watch-progress":i.watchSlidesProgress}],i.containerModifierClass);e.push(...o),r.classList.add(...e),t.emitContainerClasses()}function To(){let t=this,{el:e,classNames:i}=t;!e||typeof e=="string"||(e.classList.remove(...i),t.emitContainerClasses())}var _o={addClasses:Eo,removeClasses:To};function Co(){let t=this,{isLocked:e,params:i}=t,{slidesOffsetBefore:s}=i;if(s){let r=t.slides.length-1,a=t.slidesGrid[r]+t.slidesSizesGrid[r]+s*2;t.isLocked=t.size>a}else t.isLocked=t.snapGrid.length===1;i.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),i.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var Mo={checkOverflow:Co},Gt={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function $o(t,e){return function(s){s===void 0&&(s={});let r=Object.keys(s)[0],a=s[r];if(typeof a!="object"||a===null){ce(e,s);return}if(t[r]===!0&&(t[r]={enabled:!0}),r==="navigation"&&t[r]&&t[r].enabled&&!t[r].prevEl&&!t[r].nextEl&&(t[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&t[r]&&t[r].enabled&&!t[r].el&&(t[r].auto=!0),!(r in t&&"enabled"in a)){ce(e,s);return}typeof t[r]=="object"&&!("enabled"in t[r])&&(t[r].enabled=!0),t[r]||(t[r]={enabled:!1}),ce(e,s)}}var Ci={eventsEmitter:Ta,update:Oa,translate:Fa,transition:Wa,slide:Ja,loop:so,grabCursor:oo,events:bo,breakpoints:xo,checkOverflow:Mo,classes:_o},Mi={},Fe=class t{constructor(){let e,i;for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?i=r[0]:[e,i]=r,i||(i={}),i=ce({},i),e&&!i.el&&(i.el=e);let o=X();if(i.el&&typeof i.el=="string"&&o.querySelectorAll(i.el).length>1){let p=[];return o.querySelectorAll(i.el).forEach(f=>{let v=ce({},i,{el:f});p.push(new t(v))}),p}let l=this;l.__swiper__=!0,l.support=hs(),l.device=ms({userAgent:i.userAgent}),l.browser=gs(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],i.modules&&Array.isArray(i.modules)&&l.modules.push(...i.modules);let d={};l.modules.forEach(p=>{p({params:i,swiper:l,extendParams:$o(i,d),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});let c=ce({},Gt,d);return l.params=ce({},c,Mi,i),l.originalParams=ce({},l.params),l.passedParams=ce({},i),l.params&&l.params.on&&Object.keys(l.params.on).forEach(p=>{l.on(p,l.params.on[p])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){let{slidesEl:i,params:s}=this,r=j(i,`.${s.slideClass}, swiper-slide`),a=Be(r[0]);return Be(e)-a}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(i=>i.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){let e=this,{slidesEl:i,params:s}=e;e.slides=j(i,`.${s.slideClass}, swiper-slide`)}enable(){let e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){let e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,i){let s=this;e=Math.min(Math.max(e,0),1);let r=s.minTranslate(),o=(s.maxTranslate()-r)*e+r;s.translateTo(o,typeof i>"u"?0:i),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let i=e.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",i.join(" "))}getSlideClasses(e){let i=this;return i.destroyed?"":e.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(i.params.slideClass)===0).join(" ")}emitSlidesClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let i=[];e.slides.forEach(s=>{let r=e.getSlideClasses(s);i.push({slideEl:s,classNames:r}),e.emit("_slideClass",s,r)}),e.emit("_slideClasses",i)}slidesPerViewDynamic(e,i){e===void 0&&(e="current"),i===void 0&&(i=!1);let s=this,{params:r,slides:a,slidesGrid:o,slidesSizesGrid:l,size:d,activeIndex:c}=s,p=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let f=a[c]?Math.ceil(a[c].swiperSlideSize):0,v;for(let h=c+1;h<a.length;h+=1)a[h]&&!v&&(f+=Math.ceil(a[h].swiperSlideSize),p+=1,f>d&&(v=!0));for(let h=c-1;h>=0;h-=1)a[h]&&!v&&(f+=a[h].swiperSlideSize,p+=1,f>d&&(v=!0))}else if(e==="current")for(let f=c+1;f<a.length;f+=1)(i?o[f]+l[f]-o[c]<d:o[f]-o[c]<d)&&(p+=1);else for(let f=c-1;f>=0;f-=1)o[c]-o[f]<d&&(p+=1);return p}update(){let e=this;if(!e||e.destroyed)return;let{snapGrid:i,params:s}=e;s.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Nt(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){let o=e.rtlTranslate?e.translate*-1:e.translate,l=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(l),e.updateActiveIndex(),e.updateSlidesClasses()}let a;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)r(),s.autoHeight&&e.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&e.isEnd&&!s.centeredSlides){let o=e.virtual&&s.virtual.enabled?e.virtual.slides:e.slides;a=e.slideTo(o.length-1,0,!1,!0)}else a=e.slideTo(e.activeIndex,0,!1,!0);a||r()}s.watchOverflow&&i!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,i){i===void 0&&(i=!0);let s=this,r=s.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${r}`),s.el.classList.add(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.forEach(a=>{e==="vertical"?a.style.width="":a.style.height=""}),s.emit("changeDirection"),i&&s.update()),s}changeLanguageDirection(e){let i=this;i.rtl&&e==="rtl"||!i.rtl&&e==="ltr"||(i.rtl=e==="rtl",i.rtlTranslate=i.params.direction==="horizontal"&&i.rtl,i.rtl?(i.el.classList.add(`${i.params.containerModifierClass}rtl`),i.el.dir="rtl"):(i.el.classList.remove(`${i.params.containerModifierClass}rtl`),i.el.dir="ltr"),i.update())}mount(e){let i=this;if(i.mounted)return!0;let s=e||i.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=i,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName===i.params.swiperElementNodeName.toUpperCase()&&(i.isElement=!0);let r=()=>`.${(i.params.wrapperClass||"").trim().split(" ").join(".")}`,o=s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(r()):j(s,r())[0];return!o&&i.params.createElements&&(o=Q("div",i.params.wrapperClass),s.append(o),j(s,`.${i.params.slideClass}`).forEach(l=>{o.append(l)})),Object.assign(i,{el:s,wrapperEl:o,slidesEl:i.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:o,hostEl:i.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||Pe(s,"direction")==="rtl",rtlTranslate:i.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||Pe(s,"direction")==="rtl"),wrongRTL:Pe(o,"display")==="-webkit-box"}),!0}init(e){let i=this;if(i.initialized||i.mount(e)===!1)return i;i.emit("beforeInit"),i.params.breakpoints&&i.setBreakpoint(),i.addClasses(),i.updateSize(),i.updateSlides(),i.params.watchOverflow&&i.checkOverflow(),i.params.grabCursor&&i.enabled&&i.setGrabCursor(),i.params.loop&&i.virtual&&i.params.virtual.enabled?i.slideTo(i.params.initialSlide+i.virtual.slidesBefore,0,i.params.runCallbacksOnInit,!1,!0):i.slideTo(i.params.initialSlide,0,i.params.runCallbacksOnInit,!1,!0),i.params.loop&&i.loopCreate(void 0,!0),i.attachEvents();let r=[...i.el.querySelectorAll('[loading="lazy"]')];return i.isElement&&r.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(a=>{a.complete?Nt(i,a):a.addEventListener("load",o=>{Nt(i,o.target)})}),$i(i),i.initialized=!0,$i(i),i.emit("init"),i.emit("afterInit"),i}destroy(e,i){e===void 0&&(e=!0),i===void 0&&(i=!0);let s=this,{params:r,el:a,wrapperEl:o,slides:l}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),r.loop&&s.loopDestroy(),i&&(s.removeClasses(),a&&typeof a!="string"&&a.removeAttribute("style"),o&&o.removeAttribute("style"),l&&l.length&&l.forEach(d=>{d.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),d.removeAttribute("style"),d.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(d=>{s.off(d)}),e!==!1&&(s.el&&typeof s.el!="string"&&(s.el.swiper=null),os(s)),s.destroyed=!0),null}static extendDefaults(e){ce(Mi,e)}static get extendedDefaults(){return Mi}static get defaults(){return Gt}static installModule(e){t.prototype.__modules__||(t.prototype.__modules__=[]);let i=t.prototype.__modules__;typeof e=="function"&&i.indexOf(e)<0&&i.push(e)}static use(e){return Array.isArray(e)?(e.forEach(i=>t.installModule(i)),t):(t.installModule(e),t)}};Object.keys(Ci).forEach(t=>{Object.keys(Ci[t]).forEach(e=>{Fe.prototype[e]=Ci[t][e]})});Fe.use([Sa,Ea]);function ws(t){let{swiper:e,extendParams:i,on:s,emit:r}=t;i({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let a,o=X();e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};let l=o.createElement("div");function d(n,u){let b=e.params.virtual;if(b.cache&&e.virtual.cache[u])return e.virtual.cache[u];let w;return b.renderSlide?(w=b.renderSlide.call(e,n,u),typeof w=="string"&&(te(l,w),w=l.children[0])):e.isElement?w=Q("swiper-slide"):w=Q("div",e.params.slideClass),w.setAttribute("data-swiper-slide-index",u),b.renderSlide||te(w,n),b.cache&&(e.virtual.cache[u]=w),w}function c(n,u,b){let{slidesPerView:w,slidesPerGroup:g,centeredSlides:m,loop:y,initialSlide:E}=e.params;if(u&&!y&&E>0)return;let{addSlidesBefore:A,addSlidesAfter:$}=e.params.virtual,{from:P,to:x,slides:T,slidesGrid:L,offset:M}=e.virtual;e.params.cssMode||e.updateActiveIndex();let C=typeof b>"u"?e.activeIndex||0:b,k;e.rtlTranslate?k="right":k=e.isHorizontal()?"left":"top";let I,R;m?(I=Math.floor(w/2)+g+$,R=Math.floor(w/2)+g+A):(I=w+(g-1)+$,R=(y?w:g)+A);let S=C-R,_=C+I;y||(S=Math.max(S,0),_=Math.min(_,T.length-1));let H=(e.slidesGrid[S]||0)-(e.slidesGrid[0]||0);y&&C>=R?(S-=R,m||(H+=e.slidesGrid[0])):y&&C<R&&(S=-R,m&&(H+=e.slidesGrid[0])),Object.assign(e.virtual,{from:S,to:_,offset:H,slidesGrid:e.slidesGrid,slidesBefore:R,slidesAfter:I});function N(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),r("virtualUpdate")}if(P===S&&x===_&&!n){e.slidesGrid!==L&&H!==M&&e.slides.forEach(z=>{z.style[k]=`${H-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),r("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:H,from:S,to:_,slides:(function(){let B=[];for(let G=S;G<=_;G+=1)B.push(T[G]);return B})()}),e.params.virtual.renderExternalUpdate?N():r("virtualUpdate");return}let U=[],ee=[],Ee=z=>{let B=z;return z<0?B=T.length+z:B>=T.length&&(B=B-T.length),B};if(n)e.slides.filter(z=>z.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(z=>{z.remove()});else for(let z=P;z<=x;z+=1)if(z<S||z>_){let B=Ee(z);e.slides.filter(G=>G.matches(`.${e.params.slideClass}[data-swiper-slide-index="${B}"], swiper-slide[data-swiper-slide-index="${B}"]`)).forEach(G=>{G.remove()})}let bt=y?-T.length:0,D=y?T.length*2:T.length;for(let z=bt;z<D;z+=1)if(z>=S&&z<=_){let B=Ee(z);typeof x>"u"||n?ee.push(B):(z>x&&ee.push(B),z<P&&U.push(B))}if(ee.forEach(z=>{e.slidesEl.append(d(T[z],z))}),y)for(let z=U.length-1;z>=0;z-=1){let B=U[z];e.slidesEl.prepend(d(T[B],B))}else U.sort((z,B)=>B-z),U.forEach(z=>{e.slidesEl.prepend(d(T[z],z))});j(e.slidesEl,".swiper-slide, swiper-slide").forEach(z=>{z.style[k]=`${H-Math.abs(e.cssOverflowAdjustment())}px`}),N()}function p(n){if(typeof n=="object"&&"length"in n)for(let u=0;u<n.length;u+=1)n[u]&&e.virtual.slides.push(n[u]);else e.virtual.slides.push(n);c(!0)}function f(n){let u=e.activeIndex,b=u+1,w=1;if(Array.isArray(n)){for(let g=0;g<n.length;g+=1)n[g]&&e.virtual.slides.unshift(n[g]);b=u+n.length,w=n.length}else e.virtual.slides.unshift(n);if(e.params.virtual.cache){let g=e.virtual.cache,m={};Object.keys(g).forEach(y=>{let E=g[y],A=E.getAttribute("data-swiper-slide-index");A&&E.setAttribute("data-swiper-slide-index",parseInt(A,10)+w),m[parseInt(y,10)+w]=E}),e.virtual.cache=m}c(!0),e.slideTo(b,0)}function v(n){if(typeof n>"u"||n===null)return;let u=e.activeIndex;if(Array.isArray(n))for(let b=n.length-1;b>=0;b-=1)e.params.virtual.cache&&(delete e.virtual.cache[n[b]],Object.keys(e.virtual.cache).forEach(w=>{w>n&&(e.virtual.cache[w-1]=e.virtual.cache[w],e.virtual.cache[w-1].setAttribute("data-swiper-slide-index",w-1),delete e.virtual.cache[w])})),e.virtual.slides.splice(n[b],1),n[b]<u&&(u-=1),u=Math.max(u,0);else e.params.virtual.cache&&(delete e.virtual.cache[n],Object.keys(e.virtual.cache).forEach(b=>{b>n&&(e.virtual.cache[b-1]=e.virtual.cache[b],e.virtual.cache[b-1].setAttribute("data-swiper-slide-index",b-1),delete e.virtual.cache[b])})),e.virtual.slides.splice(n,1),n<u&&(u-=1),u=Math.max(u,0);c(!0),e.slideTo(u,0)}function h(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),c(!0),e.slideTo(0,0)}s("beforeInit",()=>{if(!e.params.virtual.enabled)return;let n;if(typeof e.passedParams.virtual.slides>"u"){let u=[...e.slidesEl.children].filter(b=>b.matches(`.${e.params.slideClass}, swiper-slide`));u&&u.length&&(e.virtual.slides=[...u],n=!0,u.forEach((b,w)=>{b.setAttribute("data-swiper-slide-index",w),e.virtual.cache[w]=b,b.remove()}))}n||(e.virtual.slides=e.params.virtual.slides),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,c(!1,!0)}),s("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(a),a=setTimeout(()=>{c()},100)):c())}),s("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&Ye(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:p,prependSlide:f,removeSlide:v,removeAllSlides:h,update:c})}function ys(t){let{swiper:e,extendParams:i,on:s,emit:r}=t,a=X(),o=q();e.keyboard={enabled:!1},i({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function l(p){if(!e.enabled)return;let{rtlTranslate:f}=e,v=p;v.originalEvent&&(v=v.originalEvent);let h=v.keyCode||v.charCode,n=e.params.keyboard.pageUpDown,u=n&&h===33,b=n&&h===34,w=h===37,g=h===39,m=h===38,y=h===40;if(!e.allowSlideNext&&(e.isHorizontal()&&g||e.isVertical()&&y||b)||!e.allowSlidePrev&&(e.isHorizontal()&&w||e.isVertical()&&m||u))return!1;if(!(v.shiftKey||v.altKey||v.ctrlKey||v.metaKey)&&!(a.activeElement&&(a.activeElement.isContentEditable||a.activeElement.nodeName&&(a.activeElement.nodeName.toLowerCase()==="input"||a.activeElement.nodeName.toLowerCase()==="textarea")))){if(e.params.keyboard.onlyInViewport&&(u||b||w||g||m||y)){let E=!1;if(xe(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&xe(e.el,`.${e.params.slideActiveClass}`).length===0)return;let A=e.el,$=A.clientWidth,P=A.clientHeight,x=o.innerWidth,T=o.innerHeight,L=je(A);f&&(L.left-=A.scrollLeft);let M=[[L.left,L.top],[L.left+$,L.top],[L.left,L.top+P],[L.left+$,L.top+P]];for(let C=0;C<M.length;C+=1){let k=M[C];if(k[0]>=0&&k[0]<=x&&k[1]>=0&&k[1]<=T){if(k[0]===0&&k[1]===0)continue;E=!0}}if(!E)return}e.isHorizontal()?((u||b||w||g)&&(v.preventDefault?v.preventDefault():v.returnValue=!1),((b||g)&&!f||(u||w)&&f)&&e.slideNext(),((u||w)&&!f||(b||g)&&f)&&e.slidePrev()):((u||b||m||y)&&(v.preventDefault?v.preventDefault():v.returnValue=!1),(b||y)&&e.slideNext(),(u||m)&&e.slidePrev()),r("keyPress",h)}}function d(){e.keyboard.enabled||(a.addEventListener("keydown",l),e.keyboard.enabled=!0)}function c(){e.keyboard.enabled&&(a.removeEventListener("keydown",l),e.keyboard.enabled=!1)}s("init",()=>{e.params.keyboard.enabled&&d()}),s("destroy",()=>{e.keyboard.enabled&&c()}),Object.assign(e.keyboard,{enable:d,disable:c})}function xs(t){let{swiper:e,extendParams:i,on:s,emit:r}=t,a=q();i({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let o,l=de(),d,c=[];function p(m){let $=0,P=0,x=0,T=0;return"detail"in m&&(P=m.detail),"wheelDelta"in m&&(P=-m.wheelDelta/120),"wheelDeltaY"in m&&(P=-m.wheelDeltaY/120),"wheelDeltaX"in m&&($=-m.wheelDeltaX/120),"axis"in m&&m.axis===m.HORIZONTAL_AXIS&&($=P,P=0),x=$*10,T=P*10,"deltaY"in m&&(T=m.deltaY),"deltaX"in m&&(x=m.deltaX),m.shiftKey&&!x&&(x=T,T=0),(x||T)&&m.deltaMode&&(m.deltaMode===1?(x*=40,T*=40):(x*=800,T*=800)),x&&!$&&($=x<1?-1:1),T&&!P&&(P=T<1?-1:1),{spinX:$,spinY:P,pixelX:x,pixelY:T}}function f(){e.enabled&&(e.mouseEntered=!0)}function v(){e.enabled&&(e.mouseEntered=!1)}function h(m){return e.params.mousewheel.thresholdDelta&&m.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&de()-l<e.params.mousewheel.thresholdTime?!1:m.delta>=6&&de()-l<60?!0:(m.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),r("scroll",m.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),r("scroll",m.raw)),l=new a.Date().getTime(),!1)}function n(m){let y=e.params.mousewheel;if(m.direction<0){if(e.isEnd&&!e.params.loop&&y.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&y.releaseOnEdges)return!0;return!1}function u(m){let y=m,E=!0;if(!e.enabled||m.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;let A=e.params.mousewheel;e.params.cssMode&&y.preventDefault();let $=e.el;e.params.mousewheel.eventsTarget!=="container"&&($=document.querySelector(e.params.mousewheel.eventsTarget));let P=$&&$.contains(y.target);if(!e.mouseEntered&&!P&&!A.releaseOnEdges)return!0;y.originalEvent&&(y=y.originalEvent);let x=0,T=e.rtlTranslate?-1:1,L=p(y);if(A.forceToAxis)if(e.isHorizontal())if(Math.abs(L.pixelX)>Math.abs(L.pixelY))x=-L.pixelX*T;else return!0;else if(Math.abs(L.pixelY)>Math.abs(L.pixelX))x=-L.pixelY;else return!0;else x=Math.abs(L.pixelX)>Math.abs(L.pixelY)?-L.pixelX*T:-L.pixelY;if(x===0)return!0;A.invert&&(x=-x);let M=e.getTranslate()+x*A.sensitivity;if(M>=e.minTranslate()&&(M=e.minTranslate()),M<=e.maxTranslate()&&(M=e.maxTranslate()),E=e.params.loop?!0:!(M===e.minTranslate()||M===e.maxTranslate()),E&&e.params.nested&&y.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){let C={time:de(),delta:Math.abs(x),direction:Math.sign(x),raw:m};c.length>=2&&c.shift();let k=c.length?c[c.length-1]:void 0;if(c.push(C),k?(C.direction!==k.direction||C.delta>k.delta||C.time>k.time+150)&&h(C):h(C),n(C))return!0}else{let C={time:de(),delta:Math.abs(x),direction:Math.sign(x)},k=d&&C.time<d.time+500&&C.delta<=d.delta&&C.direction===d.direction;if(!k){d=void 0;let I=e.getTranslate()+x*A.sensitivity,R=e.isBeginning,S=e.isEnd;if(I>=e.minTranslate()&&(I=e.minTranslate()),I<=e.maxTranslate()&&(I=e.maxTranslate()),e.setTransition(0),e.setTranslate(I),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!R&&e.isBeginning||!S&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:C.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(o),o=void 0,c.length>=15&&c.shift();let _=c.length?c[c.length-1]:void 0,H=c[0];if(c.push(C),_&&(C.delta>_.delta||C.direction!==_.direction))c.splice(0);else if(c.length>=15&&C.time-H.time<500&&H.delta-C.delta>=1&&C.delta<=6){let N=x>0?.8:.2;d=C,c.splice(0),o=Te(()=>{e.destroyed||!e.params||e.slideToClosest(e.params.speed,!0,void 0,N)},0)}o||(o=Te(()=>{if(e.destroyed||!e.params)return;let N=.5;d=C,c.splice(0),e.slideToClosest(e.params.speed,!0,void 0,N)},500))}if(k||r("scroll",y),e.params.autoplay&&e.params.autoplay.disableOnInteraction&&e.autoplay.stop(),A.releaseOnEdges&&(I===e.minTranslate()||I===e.maxTranslate()))return!0}}return y.preventDefault?y.preventDefault():y.returnValue=!1,!1}function b(m){let y=e.el;e.params.mousewheel.eventsTarget!=="container"&&(y=document.querySelector(e.params.mousewheel.eventsTarget)),y[m]("mouseenter",f),y[m]("mouseleave",v),y[m]("wheel",u)}function w(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",u),!0):e.mousewheel.enabled?!1:(b("addEventListener"),e.mousewheel.enabled=!0,!0)}function g(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,u),!0):e.mousewheel.enabled?(b("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}s("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&g(),e.params.mousewheel.enabled&&w()}),s("destroy",()=>{e.params.cssMode&&w(),e.mousewheel.enabled&&g()}),Object.assign(e.mousewheel,{enable:w,disable:g})}function nt(t,e,i,s){return t.params.createElements&&Object.keys(s).forEach(r=>{if(!i[r]&&i.auto===!0){let a=j(t.el,`.${s[r]}`)[0];a||(a=Q("div",s[r]),a.className=s[r],t.el.append(a)),i[r]=a,e[r]=a}}),i}function Ss(t){let{swiper:e,extendParams:i,on:s,emit:r}=t;i({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function a(n){let u;return n&&typeof n=="string"&&e.isElement&&(u=e.el.querySelector(n)||e.hostEl.querySelector(n),u)?u:(n&&(typeof n=="string"&&(u=[...document.querySelectorAll(n)]),e.params.uniqueNavElements&&typeof n=="string"&&u&&u.length>1&&e.el.querySelectorAll(n).length===1?u=e.el.querySelector(n):u&&u.length===1&&(u=u[0])),n&&!u?n:u)}function o(n,u){let b=e.params.navigation;n=F(n),n.forEach(w=>{w&&(w.classList[u?"add":"remove"](...b.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=u),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](b.lockClass))})}function l(){let{nextEl:n,prevEl:u}=e.navigation;if(e.params.loop){o(u,!1),o(n,!1);return}o(u,e.isBeginning&&!e.params.rewind),o(n,e.isEnd&&!e.params.rewind)}function d(n){n.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function c(n){n.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function p(){let n=e.params.navigation;if(e.params.navigation=nt(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(n.nextEl||n.prevEl))return;let u=a(n.nextEl),b=a(n.prevEl);Object.assign(e.navigation,{nextEl:u,prevEl:b}),u=F(u),b=F(b);let w=(g,m)=>{g&&g.addEventListener("click",m==="next"?c:d),!e.enabled&&g&&g.classList.add(...n.lockClass.split(" "))};u.forEach(g=>w(g,"next")),b.forEach(g=>w(g,"prev"))}function f(){let{nextEl:n,prevEl:u}=e.navigation;n=F(n),u=F(u);let b=(w,g)=>{w.removeEventListener("click",g==="next"?c:d),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};n.forEach(w=>b(w,"next")),u.forEach(w=>b(w,"prev"))}s("init",()=>{e.params.navigation.enabled===!1?h():(p(),l())}),s("toEdge fromEdge lock unlock",()=>{l()}),s("destroy",()=>{f()}),s("enable disable",()=>{let{nextEl:n,prevEl:u}=e.navigation;if(n=F(n),u=F(u),e.enabled){l();return}[...n,...u].filter(b=>!!b).forEach(b=>b.classList.add(e.params.navigation.lockClass))}),s("click",(n,u)=>{let{nextEl:b,prevEl:w}=e.navigation;b=F(b),w=F(w);let g=u.target,m=w.includes(g)||b.includes(g);if(e.isElement&&!m){let y=u.path||u.composedPath&&u.composedPath();y&&(m=y.find(E=>b.includes(E)||w.includes(E)))}if(e.params.navigation.hideOnClick&&!m){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===g||e.pagination.el.contains(g)))return;let y;b.length?y=b[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(y=w[0].classList.contains(e.params.navigation.hiddenClass)),r(y===!0?"navigationShow":"navigationHide"),[...b,...w].filter(E=>!!E).forEach(E=>E.classList.toggle(e.params.navigation.hiddenClass))}});let v=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),p(),l()},h=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),f()};Object.assign(e.navigation,{enable:v,disable:h,update:l,init:p,destroy:f})}function ge(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function Es(t){let{swiper:e,extendParams:i,on:s,emit:r}=t,a="swiper-pagination";i({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:g=>g,formatFractionTotal:g=>g,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),e.pagination={el:null,bullets:[]};let o,l=0;function d(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function c(g,m){let{bulletActiveClass:y}=e.params.pagination;g&&(g=g[`${m==="prev"?"previous":"next"}ElementSibling`],g&&(g.classList.add(`${y}-${m}`),g=g[`${m==="prev"?"previous":"next"}ElementSibling`],g&&g.classList.add(`${y}-${m}-${m}`)))}function p(g,m,y){if(g=g%y,m=m%y,m===g+1)return"next";if(m===g-1)return"previous"}function f(g){let m=g.target.closest(ge(e.params.pagination.bulletClass));if(!m)return;g.preventDefault();let y=Be(m)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===y)return;let E=p(e.realIndex,y,e.slides.length);E==="next"?e.slideNext():E==="previous"?e.slidePrev():e.slideToLoop(y)}else e.slideTo(y)}function v(){let g=e.rtl,m=e.params.pagination;if(d())return;let y=e.pagination.el;y=F(y);let E,A,$=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,P=e.params.loop?Math.ceil($/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(A=e.previousRealIndex||0,E=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(E=e.snapIndex,A=e.previousSnapIndex):(A=e.previousIndex||0,E=e.activeIndex||0),m.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){let x=e.pagination.bullets,T,L,M;if(m.dynamicBullets&&(o=Et(x[0],e.isHorizontal()?"width":"height",!0),y.forEach(C=>{C.style[e.isHorizontal()?"width":"height"]=`${o*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&A!==void 0&&(l+=E-(A||0),l>m.dynamicMainBullets-1?l=m.dynamicMainBullets-1:l<0&&(l=0)),T=Math.max(E-l,0),L=T+(Math.min(x.length,m.dynamicMainBullets)-1),M=(L+T)/2),x.forEach(C=>{let k=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(I=>`${m.bulletActiveClass}${I}`)].map(I=>typeof I=="string"&&I.includes(" ")?I.split(" "):I).flat();C.classList.remove(...k)}),y.length>1)x.forEach(C=>{let k=Be(C);k===E?C.classList.add(...m.bulletActiveClass.split(" ")):e.isElement&&C.setAttribute("part","bullet"),m.dynamicBullets&&(k>=T&&k<=L&&C.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),k===T&&c(C,"prev"),k===L&&c(C,"next"))});else{let C=x[E];if(C&&C.classList.add(...m.bulletActiveClass.split(" ")),e.isElement&&x.forEach((k,I)=>{k.setAttribute("part",I===E?"bullet-active":"bullet")}),m.dynamicBullets){let k=x[T],I=x[L];for(let R=T;R<=L;R+=1)x[R]&&x[R].classList.add(...`${m.bulletActiveClass}-main`.split(" "));c(k,"prev"),c(I,"next")}}if(m.dynamicBullets){let C=Math.min(x.length,m.dynamicMainBullets+4),k=(o*C-o)/2-M*o,I=g?"right":"left";x.forEach(R=>{R.style[e.isHorizontal()?I:"top"]=`${k}px`})}}y.forEach((x,T)=>{if(m.type==="fraction"&&(x.querySelectorAll(ge(m.currentClass)).forEach(L=>{L.textContent=m.formatFractionCurrent(E+1)}),x.querySelectorAll(ge(m.totalClass)).forEach(L=>{L.textContent=m.formatFractionTotal(P)})),m.type==="progressbar"){let L;m.progressbarOpposite?L=e.isHorizontal()?"vertical":"horizontal":L=e.isHorizontal()?"horizontal":"vertical";let M=(E+1)/P,C=1,k=1;L==="horizontal"?C=M:k=M,x.querySelectorAll(ge(m.progressbarFillClass)).forEach(I=>{I.style.transform=`translate3d(0,0,0) scaleX(${C}) scaleY(${k})`,I.style.transitionDuration=`${e.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(te(x,m.renderCustom(e,E+1,P)),T===0&&r("paginationRender",x)):(T===0&&r("paginationRender",x),r("paginationUpdate",x)),e.params.watchOverflow&&e.enabled&&x.classList[e.isLocked?"add":"remove"](m.lockClass)})}function h(){let g=e.params.pagination;if(d())return;let m=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length,y=e.pagination.el;y=F(y);let E="";if(g.type==="bullets"){let A=e.params.loop?Math.ceil(m/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&A>m&&(A=m);for(let $=0;$<A;$+=1)g.renderBullet?E+=g.renderBullet.call(e,$,g.bulletClass):E+=`<${g.bulletElement} ${e.isElement?'part="bullet"':""} class="${g.bulletClass}"></${g.bulletElement}>`}g.type==="fraction"&&(g.renderFraction?E=g.renderFraction.call(e,g.currentClass,g.totalClass):E=`<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`),g.type==="progressbar"&&(g.renderProgressbar?E=g.renderProgressbar.call(e,g.progressbarFillClass):E=`<span class="${g.progressbarFillClass}"></span>`),e.pagination.bullets=[],y.forEach(A=>{g.type!=="custom"&&te(A,E||""),g.type==="bullets"&&e.pagination.bullets.push(...A.querySelectorAll(ge(g.bulletClass)))}),g.type!=="custom"&&r("paginationRender",y[0])}function n(){e.params.pagination=nt(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});let g=e.params.pagination;if(!g.el)return;let m;typeof g.el=="string"&&e.isElement&&(m=e.el.querySelector(g.el)),!m&&typeof g.el=="string"&&(m=[...document.querySelectorAll(g.el)]),m||(m=g.el),!(!m||m.length===0)&&(e.params.uniqueNavElements&&typeof g.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...e.el.querySelectorAll(g.el)],m.length>1&&(m=m.find(y=>xe(y,".swiper")[0]===e.el))),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(e.pagination,{el:m}),m=F(m),m.forEach(y=>{g.type==="bullets"&&g.clickable&&y.classList.add(...(g.clickableClass||"").split(" ")),y.classList.add(g.modifierClass+g.type),y.classList.add(e.isHorizontal()?g.horizontalClass:g.verticalClass),g.type==="bullets"&&g.dynamicBullets&&(y.classList.add(`${g.modifierClass}${g.type}-dynamic`),l=0,g.dynamicMainBullets<1&&(g.dynamicMainBullets=1)),g.type==="progressbar"&&g.progressbarOpposite&&y.classList.add(g.progressbarOppositeClass),g.clickable&&y.addEventListener("click",f),e.enabled||y.classList.add(g.lockClass)}))}function u(){let g=e.params.pagination;if(d())return;let m=e.pagination.el;m&&(m=F(m),m.forEach(y=>{y.classList.remove(g.hiddenClass),y.classList.remove(g.modifierClass+g.type),y.classList.remove(e.isHorizontal()?g.horizontalClass:g.verticalClass),g.clickable&&(y.classList.remove(...(g.clickableClass||"").split(" ")),y.removeEventListener("click",f))})),e.pagination.bullets&&e.pagination.bullets.forEach(y=>y.classList.remove(...g.bulletActiveClass.split(" ")))}s("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;let g=e.params.pagination,{el:m}=e.pagination;m=F(m),m.forEach(y=>{y.classList.remove(g.horizontalClass,g.verticalClass),y.classList.add(e.isHorizontal()?g.horizontalClass:g.verticalClass)})}),s("init",()=>{e.params.pagination.enabled===!1?w():(n(),h(),v())}),s("activeIndexChange",()=>{typeof e.snapIndex>"u"&&v()}),s("snapIndexChange",()=>{v()}),s("snapGridLengthChange",()=>{h(),v()}),s("destroy",()=>{u()}),s("enable disable",()=>{let{el:g}=e.pagination;g&&(g=F(g),g.forEach(m=>m.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),s("lock unlock",()=>{v()}),s("click",(g,m)=>{let y=m.target,E=F(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&E&&E.length>0&&!y.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&y===e.navigation.nextEl||e.navigation.prevEl&&y===e.navigation.prevEl))return;let A=E[0].classList.contains(e.params.pagination.hiddenClass);r(A===!0?"paginationShow":"paginationHide"),E.forEach($=>$.classList.toggle(e.params.pagination.hiddenClass))}});let b=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:g}=e.pagination;g&&(g=F(g),g.forEach(m=>m.classList.remove(e.params.pagination.paginationDisabledClass))),n(),h(),v()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:g}=e.pagination;g&&(g=F(g),g.forEach(m=>m.classList.add(e.params.pagination.paginationDisabledClass))),u()};Object.assign(e.pagination,{enable:b,disable:w,render:h,update:v,init:n,destroy:u})}function Ts(t){let{swiper:e,extendParams:i,on:s,emit:r}=t,a=X(),o=!1,l=null,d=null,c,p,f,v;i({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function h(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;let{scrollbar:M,rtlTranslate:C}=e,{dragEl:k,el:I}=M,R=e.params.scrollbar,S=e.params.loop?e.progressLoop:e.progress,_=p,H=(f-p)*S;C?(H=-H,H>0?(_=p-H,H=0):-H+p>f&&(_=f+H)):H<0?(_=p+H,H=0):H+p>f&&(_=f-H),e.isHorizontal()?(k.style.transform=`translate3d(${H}px, 0, 0)`,k.style.width=`${_}px`):(k.style.transform=`translate3d(0px, ${H}px, 0)`,k.style.height=`${_}px`),R.hide&&(clearTimeout(l),I.style.opacity=1,l=setTimeout(()=>{I.style.opacity=0,I.style.transitionDuration="400ms"},1e3))}function n(M){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${M}ms`)}function u(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;let{scrollbar:M}=e,{dragEl:C,el:k}=M;C.style.width="",C.style.height="",f=e.isHorizontal()?k.offsetWidth:k.offsetHeight,v=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?p=f*v:p=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?C.style.width=`${p}px`:C.style.height=`${p}px`,v>=1?k.style.display="none":k.style.display="",e.params.scrollbar.hide&&(k.style.opacity=0),e.params.watchOverflow&&e.enabled&&M.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function b(M){return e.isHorizontal()?M.clientX:M.clientY}function w(M){let{scrollbar:C,rtlTranslate:k}=e,{el:I}=C,R;R=(b(M)-je(I)[e.isHorizontal()?"left":"top"]-(c!==null?c:p/2))/(f-p),R=Math.max(Math.min(R,1),0),k&&(R=1-R);let S=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*R;e.updateProgress(S),e.setTranslate(S),e.updateActiveIndex(),e.updateSlidesClasses()}function g(M){let C=e.params.scrollbar,{scrollbar:k,wrapperEl:I}=e,{el:R,dragEl:S}=k;o=!0,c=M.target===S?b(M)-M.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,M.preventDefault(),M.stopPropagation(),I.style.transitionDuration="100ms",S.style.transitionDuration="100ms",w(M),clearTimeout(d),R.style.transitionDuration="0ms",C.hide&&(R.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),r("scrollbarDragStart",M)}function m(M){let{scrollbar:C,wrapperEl:k}=e,{el:I,dragEl:R}=C;o&&(M.preventDefault&&M.cancelable?M.preventDefault():M.returnValue=!1,w(M),k.style.transitionDuration="0ms",I.style.transitionDuration="0ms",R.style.transitionDuration="0ms",r("scrollbarDragMove",M))}function y(M){let C=e.params.scrollbar,{scrollbar:k,wrapperEl:I}=e,{el:R}=k;o&&(o=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",I.style.transitionDuration=""),C.hide&&(clearTimeout(d),d=Te(()=>{R.style.opacity=0,R.style.transitionDuration="400ms"},1e3)),r("scrollbarDragEnd",M),C.snapOnRelease&&e.slideToClosest())}function E(M){let{scrollbar:C,params:k}=e,I=C.el;if(!I)return;let R=I,S=k.passiveListeners?{passive:!1,capture:!1}:!1,_=k.passiveListeners?{passive:!0,capture:!1}:!1;if(!R)return;let H=M==="on"?"addEventListener":"removeEventListener";R[H]("pointerdown",g,S),a[H]("pointermove",m,S),a[H]("pointerup",y,_)}function A(){!e.params.scrollbar.el||!e.scrollbar.el||E("on")}function $(){!e.params.scrollbar.el||!e.scrollbar.el||E("off")}function P(){let{scrollbar:M,el:C}=e;e.params.scrollbar=nt(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});let k=e.params.scrollbar;if(!k.el)return;let I;if(typeof k.el=="string"&&e.isElement&&(I=e.el.querySelector(k.el)),!I&&typeof k.el=="string"){if(I=a.querySelectorAll(k.el),!I.length)return}else I||(I=k.el);e.params.uniqueNavElements&&typeof k.el=="string"&&I.length>1&&C.querySelectorAll(k.el).length===1&&(I=C.querySelector(k.el)),I.length>0&&(I=I[0]),I.classList.add(e.isHorizontal()?k.horizontalClass:k.verticalClass);let R;I&&(R=I.querySelector(ge(e.params.scrollbar.dragClass)),R||(R=Q("div",e.params.scrollbar.dragClass),I.append(R))),Object.assign(M,{el:I,dragEl:R}),k.draggable&&A(),I&&I.classList[e.enabled?"remove":"add"](...Ae(e.params.scrollbar.lockClass))}function x(){let M=e.params.scrollbar,C=e.scrollbar.el;C&&C.classList.remove(...Ae(e.isHorizontal()?M.horizontalClass:M.verticalClass)),$()}s("changeDirection",()=>{if(!e.scrollbar||!e.scrollbar.el)return;let M=e.params.scrollbar,{el:C}=e.scrollbar;C=F(C),C.forEach(k=>{k.classList.remove(M.horizontalClass,M.verticalClass),k.classList.add(e.isHorizontal()?M.horizontalClass:M.verticalClass)})}),s("init",()=>{e.params.scrollbar.enabled===!1?L():(P(),u(),h())}),s("update resize observerUpdate lock unlock changeDirection",()=>{u()}),s("setTranslate",()=>{h()}),s("setTransition",(M,C)=>{n(C)}),s("enable disable",()=>{let{el:M}=e.scrollbar;M&&M.classList[e.enabled?"remove":"add"](...Ae(e.params.scrollbar.lockClass))}),s("destroy",()=>{x()});let T=()=>{e.el.classList.remove(...Ae(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...Ae(e.params.scrollbar.scrollbarDisabledClass)),P(),u(),h()},L=()=>{e.el.classList.add(...Ae(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...Ae(e.params.scrollbar.scrollbarDisabledClass)),x()};Object.assign(e.scrollbar,{enable:T,disable:L,updateSize:u,setTranslate:h,init:P,destroy:x})}function _s(t){let{swiper:e,extendParams:i,on:s}=t;i({parallax:{enabled:!1}});let r="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",a=(d,c)=>{let{rtl:p}=e,f=p?-1:1,v=d.getAttribute("data-swiper-parallax")||"0",h=d.getAttribute("data-swiper-parallax-x"),n=d.getAttribute("data-swiper-parallax-y"),u=d.getAttribute("data-swiper-parallax-scale"),b=d.getAttribute("data-swiper-parallax-opacity"),w=d.getAttribute("data-swiper-parallax-rotate");if(h||n?(h=h||"0",n=n||"0"):e.isHorizontal()?(h=v,n="0"):(n=v,h="0"),h.indexOf("%")>=0?h=`${parseInt(h,10)*c*f}%`:h=`${h*c*f}px`,n.indexOf("%")>=0?n=`${parseInt(n,10)*c}%`:n=`${n*c}px`,typeof b<"u"&&b!==null){let m=b-(b-1)*(1-Math.abs(c));d.style.opacity=m}let g=`translate3d(${h}, ${n}, 0px)`;if(typeof u<"u"&&u!==null){let m=u-(u-1)*(1-Math.abs(c));g+=` scale(${m})`}if(w&&typeof w<"u"&&w!==null){let m=w*c*-1;g+=` rotate(${m}deg)`}d.style.transform=g},o=()=>{let{el:d,slides:c,progress:p,snapGrid:f,isElement:v}=e,h=j(d,r);e.isElement&&h.push(...j(e.hostEl,r)),h.forEach(n=>{a(n,p)}),c.forEach((n,u)=>{let b=n.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(b+=Math.ceil(u/2)-p*(f.length-1)),b=Math.min(Math.max(b,-1),1),n.querySelectorAll(`${r}, [data-swiper-parallax-rotate]`).forEach(w=>{a(w,b)})})},l=function(d){d===void 0&&(d=e.params.speed);let{el:c,hostEl:p}=e,f=[...c.querySelectorAll(r)];e.isElement&&f.push(...p.querySelectorAll(r)),f.forEach(v=>{let h=parseInt(v.getAttribute("data-swiper-parallax-duration"),10)||d;d===0&&(h=0),v.style.transitionDuration=`${h}ms`})};s("beforeInit",()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),s("init",()=>{e.params.parallax.enabled&&o()}),s("setTranslate",()=>{e.params.parallax.enabled&&o()}),s("setTransition",(d,c)=>{e.params.parallax.enabled&&l(c)})}function Cs(t){let{swiper:e,extendParams:i,on:s,emit:r}=t,a=q();i({zoom:{enabled:!1,limitToOriginalSize:!1,maxRatio:3,minRatio:1,panOnMouseMove:!1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let o=1,l=!1,d=!1,c={x:0,y:0},p=-3,f,v,h=[],n={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},u={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},b={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},w=1;Object.defineProperty(e.zoom,"scale",{get(){return w},set(D){if(w!==D){let z=n.imageEl,B=n.slideEl;r("zoomChange",D,z,B)}w=D}});function g(){if(h.length<2)return 1;let D=h[0].pageX,z=h[0].pageY,B=h[1].pageX,G=h[1].pageY;return Math.sqrt((B-D)**2+(G-z)**2)}function m(){let D=e.params.zoom,z=n.imageWrapEl.getAttribute("data-swiper-zoom")||D.maxRatio;if(D.limitToOriginalSize&&n.imageEl&&n.imageEl.naturalWidth){let B=n.imageEl.naturalWidth/n.imageEl.offsetWidth;return Math.min(B,z)}return z}function y(){if(h.length<2)return{x:null,y:null};let D=n.imageEl.getBoundingClientRect();return[(h[0].pageX+(h[1].pageX-h[0].pageX)/2-D.x-a.scrollX)/o,(h[0].pageY+(h[1].pageY-h[0].pageY)/2-D.y-a.scrollY)/o]}function E(){return e.isElement?"swiper-slide":`.${e.params.slideClass}`}function A(D){let z=E();return!!(D.target.matches(z)||e.slides.filter(B=>B.contains(D.target)).length>0)}function $(D){let z=`.${e.params.zoom.containerClass}`;return!!(D.target.matches(z)||[...e.hostEl.querySelectorAll(z)].filter(B=>B.contains(D.target)).length>0)}function P(D){if(D.pointerType==="mouse"&&h.splice(0,h.length),!A(D))return;let z=e.params.zoom;if(f=!1,v=!1,h.push(D),!(h.length<2)){if(f=!0,n.scaleStart=g(),!n.slideEl){n.slideEl=D.target.closest(`.${e.params.slideClass}, swiper-slide`),n.slideEl||(n.slideEl=e.slides[e.activeIndex]);let B=n.slideEl.querySelector(`.${z.containerClass}`);if(B&&(B=B.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),n.imageEl=B,B?n.imageWrapEl=xe(n.imageEl,`.${z.containerClass}`)[0]:n.imageWrapEl=void 0,!n.imageWrapEl){n.imageEl=void 0;return}n.maxRatio=m()}if(n.imageEl){let[B,G]=y();n.originX=B,n.originY=G,n.imageEl.style.transitionDuration="0ms"}l=!0}}function x(D){if(!A(D))return;let z=e.params.zoom,B=e.zoom,G=h.findIndex(ne=>ne.pointerId===D.pointerId);G>=0&&(h[G]=D),!(h.length<2)&&(v=!0,n.scaleMove=g(),n.imageEl&&(B.scale=n.scaleMove/n.scaleStart*o,B.scale>n.maxRatio&&(B.scale=n.maxRatio-1+(B.scale-n.maxRatio+1)**.5),B.scale<z.minRatio&&(B.scale=z.minRatio+1-(z.minRatio-B.scale+1)**.5),n.imageEl.style.transform=`translate3d(0,0,0) scale(${B.scale})`))}function T(D){if(!A(D)||D.pointerType==="mouse"&&D.type==="pointerout")return;let z=e.params.zoom,B=e.zoom,G=h.findIndex(ne=>ne.pointerId===D.pointerId);G>=0&&h.splice(G,1),!(!f||!v)&&(f=!1,v=!1,n.imageEl&&(B.scale=Math.max(Math.min(B.scale,n.maxRatio),z.minRatio),n.imageEl.style.transitionDuration=`${e.params.speed}ms`,n.imageEl.style.transform=`translate3d(0,0,0) scale(${B.scale})`,o=B.scale,l=!1,B.scale>1&&n.slideEl?n.slideEl.classList.add(`${z.zoomedSlideClass}`):B.scale<=1&&n.slideEl&&n.slideEl.classList.remove(`${z.zoomedSlideClass}`),B.scale===1&&(n.originX=0,n.originY=0,n.slideEl=void 0)))}let L;function M(){e.touchEventsData.preventTouchMoveFromPointerMove=!1}function C(){clearTimeout(L),e.touchEventsData.preventTouchMoveFromPointerMove=!0,L=setTimeout(()=>{e.destroyed||M()})}function k(D){let z=e.device;if(!n.imageEl||u.isTouched)return;z.android&&D.cancelable&&D.preventDefault(),u.isTouched=!0;let B=h.length>0?h[0]:D;u.touchesStart.x=B.pageX,u.touchesStart.y=B.pageY}function I(D){let B=D.pointerType==="mouse"&&e.params.zoom.panOnMouseMove;if(!A(D)||!$(D))return;let G=e.zoom;if(!n.imageEl)return;if(!u.isTouched||!n.slideEl){B&&_(D);return}if(B){_(D);return}u.isMoved||(u.width=n.imageEl.offsetWidth||n.imageEl.clientWidth,u.height=n.imageEl.offsetHeight||n.imageEl.clientHeight,u.startX=xt(n.imageWrapEl,"x")||0,u.startY=xt(n.imageWrapEl,"y")||0,n.slideWidth=n.slideEl.offsetWidth,n.slideHeight=n.slideEl.offsetHeight,n.imageWrapEl.style.transitionDuration="0ms");let ne=u.width*G.scale,Oe=u.height*G.scale;if(u.minX=Math.min(n.slideWidth/2-ne/2,0),u.maxX=-u.minX,u.minY=Math.min(n.slideHeight/2-Oe/2,0),u.maxY=-u.minY,u.touchesCurrent.x=h.length>0?h[0].pageX:D.pageX,u.touchesCurrent.y=h.length>0?h[0].pageY:D.pageY,Math.max(Math.abs(u.touchesCurrent.x-u.touchesStart.x),Math.abs(u.touchesCurrent.y-u.touchesStart.y))>5&&(e.allowClick=!1),!u.isMoved&&!l){if(e.isHorizontal()&&(Math.floor(u.minX)===Math.floor(u.startX)&&u.touchesCurrent.x<u.touchesStart.x||Math.floor(u.maxX)===Math.floor(u.startX)&&u.touchesCurrent.x>u.touchesStart.x)){u.isTouched=!1,M();return}if(!e.isHorizontal()&&(Math.floor(u.minY)===Math.floor(u.startY)&&u.touchesCurrent.y<u.touchesStart.y||Math.floor(u.maxY)===Math.floor(u.startY)&&u.touchesCurrent.y>u.touchesStart.y)){u.isTouched=!1,M();return}}D.cancelable&&D.preventDefault(),D.stopPropagation(),C(),u.isMoved=!0;let $e=(G.scale-o)/(n.maxRatio-e.params.zoom.minRatio),{originX:Re,originY:le}=n;u.currentX=u.touchesCurrent.x-u.touchesStart.x+u.startX+$e*(u.width-Re*2),u.currentY=u.touchesCurrent.y-u.touchesStart.y+u.startY+$e*(u.height-le*2),u.currentX<u.minX&&(u.currentX=u.minX+1-(u.minX-u.currentX+1)**.8),u.currentX>u.maxX&&(u.currentX=u.maxX-1+(u.currentX-u.maxX+1)**.8),u.currentY<u.minY&&(u.currentY=u.minY+1-(u.minY-u.currentY+1)**.8),u.currentY>u.maxY&&(u.currentY=u.maxY-1+(u.currentY-u.maxY+1)**.8),b.prevPositionX||(b.prevPositionX=u.touchesCurrent.x),b.prevPositionY||(b.prevPositionY=u.touchesCurrent.y),b.prevTime||(b.prevTime=Date.now()),b.x=(u.touchesCurrent.x-b.prevPositionX)/(Date.now()-b.prevTime)/2,b.y=(u.touchesCurrent.y-b.prevPositionY)/(Date.now()-b.prevTime)/2,Math.abs(u.touchesCurrent.x-b.prevPositionX)<2&&(b.x=0),Math.abs(u.touchesCurrent.y-b.prevPositionY)<2&&(b.y=0),b.prevPositionX=u.touchesCurrent.x,b.prevPositionY=u.touchesCurrent.y,b.prevTime=Date.now(),n.imageWrapEl.style.transform=`translate3d(${u.currentX}px, ${u.currentY}px,0)`}function R(){let D=e.zoom;if(h.length=0,!n.imageEl)return;if(!u.isTouched||!u.isMoved){u.isTouched=!1,u.isMoved=!1;return}u.isTouched=!1,u.isMoved=!1;let z=300,B=300,G=b.x*z,ne=u.currentX+G,Oe=b.y*B,De=u.currentY+Oe;b.x!==0&&(z=Math.abs((ne-u.currentX)/b.x)),b.y!==0&&(B=Math.abs((De-u.currentY)/b.y));let $e=Math.max(z,B);u.currentX=ne,u.currentY=De;let Re=u.width*D.scale,le=u.height*D.scale;u.minX=Math.min(n.slideWidth/2-Re/2,0),u.maxX=-u.minX,u.minY=Math.min(n.slideHeight/2-le/2,0),u.maxY=-u.minY,u.currentX=Math.max(Math.min(u.currentX,u.maxX),u.minX),u.currentY=Math.max(Math.min(u.currentY,u.maxY),u.minY),n.imageWrapEl.style.transitionDuration=`${$e}ms`,n.imageWrapEl.style.transform=`translate3d(${u.currentX}px, ${u.currentY}px,0)`}function S(){let D=e.zoom;n.slideEl&&e.activeIndex!==e.slides.indexOf(n.slideEl)&&(n.imageEl&&(n.imageEl.style.transform="translate3d(0,0,0) scale(1)"),n.imageWrapEl&&(n.imageWrapEl.style.transform="translate3d(0,0,0)"),n.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),D.scale=1,o=1,n.slideEl=void 0,n.imageEl=void 0,n.imageWrapEl=void 0,n.originX=0,n.originY=0)}function _(D){if(o<=1||!n.imageWrapEl||!A(D)||!$(D))return;let z=a.getComputedStyle(n.imageWrapEl).transform,B=new a.DOMMatrix(z);if(!d){d=!0,c.x=D.clientX,c.y=D.clientY,u.startX=B.e,u.startY=B.f,u.width=n.imageEl.offsetWidth||n.imageEl.clientWidth,u.height=n.imageEl.offsetHeight||n.imageEl.clientHeight,n.slideWidth=n.slideEl.offsetWidth,n.slideHeight=n.slideEl.offsetHeight;return}let G=(D.clientX-c.x)*p,ne=(D.clientY-c.y)*p,Oe=u.width*o,De=u.height*o,$e=n.slideWidth,Re=n.slideHeight,le=Math.min($e/2-Oe/2,0),ye=-le,wt=Math.min(Re/2-De/2,0),Ht=-wt,st=Math.max(Math.min(u.startX+G,ye),le),rt=Math.max(Math.min(u.startY+ne,Ht),wt);n.imageWrapEl.style.transitionDuration="0ms",n.imageWrapEl.style.transform=`translate3d(${st}px, ${rt}px, 0)`,c.x=D.clientX,c.y=D.clientY,u.startX=st,u.startY=rt,u.currentX=st,u.currentY=rt}function H(D){let z=e.zoom,B=e.params.zoom;if(!n.slideEl){D&&D.target&&(n.slideEl=D.target.closest(`.${e.params.slideClass}, swiper-slide`)),n.slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?n.slideEl=j(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:n.slideEl=e.slides[e.activeIndex]);let yt=n.slideEl.querySelector(`.${B.containerClass}`);yt&&(yt=yt.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),n.imageEl=yt,yt?n.imageWrapEl=xe(n.imageEl,`.${B.containerClass}`)[0]:n.imageWrapEl=void 0}if(!n.imageEl||!n.imageWrapEl)return;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),n.slideEl.classList.add(`${B.zoomedSlideClass}`);let G,ne,Oe,De,$e,Re,le,ye,wt,Ht,st,rt,Vt,Ft,hi,mi,gi,vi;typeof u.touchesStart.x>"u"&&D?(G=D.pageX,ne=D.pageY):(G=u.touchesStart.x,ne=u.touchesStart.y);let bi=o,at=typeof D=="number"?D:null;o===1&&at&&(G=void 0,ne=void 0,u.touchesStart.x=void 0,u.touchesStart.y=void 0);let ss=m();z.scale=at||ss,o=at||ss,D&&!(o===1&&at)?(gi=n.slideEl.offsetWidth,vi=n.slideEl.offsetHeight,Oe=je(n.slideEl).left+a.scrollX,De=je(n.slideEl).top+a.scrollY,$e=Oe+gi/2-G,Re=De+vi/2-ne,wt=n.imageEl.offsetWidth||n.imageEl.clientWidth,Ht=n.imageEl.offsetHeight||n.imageEl.clientHeight,st=wt*z.scale,rt=Ht*z.scale,Vt=Math.min(gi/2-st/2,0),Ft=Math.min(vi/2-rt/2,0),hi=-Vt,mi=-Ft,bi>0&&at&&typeof u.currentX=="number"&&typeof u.currentY=="number"?(le=u.currentX*z.scale/bi,ye=u.currentY*z.scale/bi):(le=$e*z.scale,ye=Re*z.scale),le<Vt&&(le=Vt),le>hi&&(le=hi),ye<Ft&&(ye=Ft),ye>mi&&(ye=mi)):(le=0,ye=0),at&&z.scale===1&&(n.originX=0,n.originY=0),u.currentX=le,u.currentY=ye,n.imageWrapEl.style.transitionDuration="300ms",n.imageWrapEl.style.transform=`translate3d(${le}px, ${ye}px,0)`,n.imageEl.style.transitionDuration="300ms",n.imageEl.style.transform=`translate3d(0,0,0) scale(${z.scale})`}function N(){let D=e.zoom,z=e.params.zoom;if(!n.slideEl){e.params.virtual&&e.params.virtual.enabled&&e.virtual?n.slideEl=j(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:n.slideEl=e.slides[e.activeIndex];let B=n.slideEl.querySelector(`.${z.containerClass}`);B&&(B=B.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),n.imageEl=B,B?n.imageWrapEl=xe(n.imageEl,`.${z.containerClass}`)[0]:n.imageWrapEl=void 0}!n.imageEl||!n.imageWrapEl||(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),D.scale=1,o=1,u.currentX=void 0,u.currentY=void 0,u.touchesStart.x=void 0,u.touchesStart.y=void 0,n.imageWrapEl.style.transitionDuration="300ms",n.imageWrapEl.style.transform="translate3d(0,0,0)",n.imageEl.style.transitionDuration="300ms",n.imageEl.style.transform="translate3d(0,0,0) scale(1)",n.slideEl.classList.remove(`${z.zoomedSlideClass}`),n.slideEl=void 0,n.originX=0,n.originY=0,e.params.zoom.panOnMouseMove&&(c={x:0,y:0},d&&(d=!1,u.startX=0,u.startY=0)))}function U(D){let z=e.zoom;z.scale&&z.scale!==1?N():H(D)}function ee(){let D=e.params.passiveListeners?{passive:!0,capture:!1}:!1,z=e.params.passiveListeners?{passive:!1,capture:!0}:!0;return{passiveListener:D,activeListenerWithCapture:z}}function Ee(){let D=e.zoom;if(D.enabled)return;D.enabled=!0;let{passiveListener:z,activeListenerWithCapture:B}=ee();e.wrapperEl.addEventListener("pointerdown",P,z),e.wrapperEl.addEventListener("pointermove",x,B),["pointerup","pointercancel","pointerout"].forEach(G=>{e.wrapperEl.addEventListener(G,T,z)}),e.wrapperEl.addEventListener("pointermove",I,B)}function bt(){let D=e.zoom;if(!D.enabled)return;D.enabled=!1;let{passiveListener:z,activeListenerWithCapture:B}=ee();e.wrapperEl.removeEventListener("pointerdown",P,z),e.wrapperEl.removeEventListener("pointermove",x,B),["pointerup","pointercancel","pointerout"].forEach(G=>{e.wrapperEl.removeEventListener(G,T,z)}),e.wrapperEl.removeEventListener("pointermove",I,B)}s("init",()=>{e.params.zoom.enabled&&Ee()}),s("destroy",()=>{bt()}),s("touchStart",(D,z)=>{e.zoom.enabled&&k(z)}),s("touchEnd",(D,z)=>{e.zoom.enabled&&R()}),s("doubleTap",(D,z)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&U(z)}),s("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&S()}),s("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&S()}),Object.assign(e.zoom,{enable:Ee,disable:bt,in:H,out:N,toggle:U})}function Ms(t){let{swiper:e,extendParams:i,on:s}=t;i({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0};function r(c,p){let f=(function(){let u,b,w;return(g,m)=>{for(b=-1,u=g.length;u-b>1;)w=u+b>>1,g[w]<=m?b=w:u=w;return u}})();this.x=c,this.y=p,this.lastIndex=c.length-1;let v,h;return this.interpolate=function(u){return u?(h=f(this.x,u),v=h-1,(u-this.x[v])*(this.y[h]-this.y[v])/(this.x[h]-this.x[v])+this.y[v]):0},this}function a(c){e.controller.spline=e.params.loop?new r(e.slidesGrid,c.slidesGrid):new r(e.snapGrid,c.snapGrid)}function o(c,p){let f=e.controller.control,v,h,n=e.constructor;function u(b){if(b.destroyed)return;let w=e.rtlTranslate?-e.translate:e.translate;e.params.controller.by==="slide"&&(a(b),h=-e.controller.spline.interpolate(-w)),(!h||e.params.controller.by==="container")&&(v=(b.maxTranslate()-b.minTranslate())/(e.maxTranslate()-e.minTranslate()),(Number.isNaN(v)||!Number.isFinite(v))&&(v=1),h=(w-e.minTranslate())*v+b.minTranslate()),e.params.controller.inverse&&(h=b.maxTranslate()-h),b.updateProgress(h),b.setTranslate(h,e),b.updateActiveIndex(),b.updateSlidesClasses()}if(Array.isArray(f))for(let b=0;b<f.length;b+=1)f[b]!==p&&f[b]instanceof n&&u(f[b]);else f instanceof n&&p!==f&&u(f)}function l(c,p){let f=e.constructor,v=e.controller.control,h;function n(u){u.destroyed||(u.setTransition(c,e),c!==0&&(u.transitionStart(),u.params.autoHeight&&Te(()=>{u.updateAutoHeight()}),He(u.wrapperEl,()=>{v&&u.transitionEnd()})))}if(Array.isArray(v))for(h=0;h<v.length;h+=1)v[h]!==p&&v[h]instanceof f&&n(v[h]);else v instanceof f&&p!==v&&n(v)}function d(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}s("beforeInit",()=>{if(typeof window<"u"&&(typeof e.params.controller.control=="string"||e.params.controller.control instanceof HTMLElement)){(typeof e.params.controller.control=="string"?[...document.querySelectorAll(e.params.controller.control)]:[e.params.controller.control]).forEach(p=>{if(e.controller.control||(e.controller.control=[]),p&&p.swiper)e.controller.control.push(p.swiper);else if(p){let f=`${e.params.eventsPrefix}init`,v=h=>{e.controller.control.push(h.detail[0]),e.update(),p.removeEventListener(f,v)};p.addEventListener(f,v)}});return}e.controller.control=e.params.controller.control}),s("update",()=>{d()}),s("resize",()=>{d()}),s("observerUpdate",()=>{d()}),s("setTranslate",(c,p,f)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTranslate(p,f)}),s("setTransition",(c,p,f)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTransition(p,f)}),Object.assign(e.controller,{setTranslate:o,setTransition:l})}function $s(t){let{swiper:e,extendParams:i,on:s}=t;i({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,containerRole:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0}}),e.a11y={clicked:!1};let r=null,a,o,l=new Date().getTime();function d(S){let _=r;_.length!==0&&te(_,S)}function c(S){S===void 0&&(S=16);let _=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(S).replace(/x/g,_)}function p(S){S=F(S),S.forEach(_=>{_.setAttribute("tabIndex","0")})}function f(S){S=F(S),S.forEach(_=>{_.setAttribute("tabIndex","-1")})}function v(S,_){S=F(S),S.forEach(H=>{H.setAttribute("role",_)})}function h(S,_){S=F(S),S.forEach(H=>{H.setAttribute("aria-roledescription",_)})}function n(S,_){S=F(S),S.forEach(H=>{H.setAttribute("aria-controls",_)})}function u(S,_){S=F(S),S.forEach(H=>{H.setAttribute("aria-label",_)})}function b(S,_){S=F(S),S.forEach(H=>{H.setAttribute("id",_)})}function w(S,_){S=F(S),S.forEach(H=>{H.setAttribute("aria-live",_)})}function g(S){S=F(S),S.forEach(_=>{_.setAttribute("aria-disabled",!0)})}function m(S){S=F(S),S.forEach(_=>{_.setAttribute("aria-disabled",!1)})}function y(S){if(S.keyCode!==13&&S.keyCode!==32)return;let _=e.params.a11y,H=S.target;if(!(e.pagination&&e.pagination.el&&(H===e.pagination.el||e.pagination.el.contains(S.target))&&!S.target.matches(ge(e.params.pagination.bulletClass)))){if(e.navigation&&e.navigation.prevEl&&e.navigation.nextEl){let N=F(e.navigation.prevEl);F(e.navigation.nextEl).includes(H)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?d(_.lastSlideMessage):d(_.nextSlideMessage)),N.includes(H)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?d(_.firstSlideMessage):d(_.prevSlideMessage))}e.pagination&&H.matches(ge(e.params.pagination.bulletClass))&&H.click()}}function E(){if(e.params.loop||e.params.rewind||!e.navigation)return;let{nextEl:S,prevEl:_}=e.navigation;_&&(e.isBeginning?(g(_),f(_)):(m(_),p(_))),S&&(e.isEnd?(g(S),f(S)):(m(S),p(S)))}function A(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function $(){return A()&&e.params.pagination.clickable}function P(){let S=e.params.a11y;A()&&e.pagination.bullets.forEach(_=>{e.params.pagination.clickable&&(p(_),e.params.pagination.renderBullet||(v(_,"button"),u(_,S.paginationBulletMessage.replace(/\{\{index\}\}/,Be(_)+1)))),_.matches(ge(e.params.pagination.bulletActiveClass))?_.setAttribute("aria-current","true"):_.removeAttribute("aria-current")})}let x=(S,_,H)=>{p(S),S.tagName!=="BUTTON"&&(v(S,"button"),S.addEventListener("keydown",y)),u(S,H),n(S,_)},T=S=>{o&&o!==S.target&&!o.contains(S.target)&&(a=!0),e.a11y.clicked=!0},L=()=>{a=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},M=S=>{l=new Date().getTime()},C=S=>{if(e.a11y.clicked||!e.params.a11y.scrollOnFocus||new Date().getTime()-l<100)return;let _=S.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!_||!e.slides.includes(_))return;o=_;let H=e.slides.indexOf(_)===e.activeIndex,N=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(_);H||N||S.sourceCapabilities&&S.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,requestAnimationFrame(()=>{a||(e.params.loop?e.slideToLoop(e.getSlideIndexWhenGrid(parseInt(_.getAttribute("data-swiper-slide-index"))),0):e.slideTo(e.getSlideIndexWhenGrid(e.slides.indexOf(_)),0),a=!1)}))},k=()=>{let S=e.params.a11y;S.itemRoleDescriptionMessage&&h(e.slides,S.itemRoleDescriptionMessage),S.slideRole&&v(e.slides,S.slideRole);let _=e.slides.length;S.slideLabelMessage&&e.slides.forEach((H,N)=>{let U=e.params.loop?parseInt(H.getAttribute("data-swiper-slide-index"),10):N,ee=S.slideLabelMessage.replace(/\{\{index\}\}/,U+1).replace(/\{\{slidesLength\}\}/,_);u(H,ee)})},I=()=>{let S=e.params.a11y;e.el.append(r);let _=e.el;S.containerRoleDescriptionMessage&&h(_,S.containerRoleDescriptionMessage),S.containerMessage&&u(_,S.containerMessage),S.containerRole&&v(_,S.containerRole);let H=e.wrapperEl,N=S.id||H.getAttribute("id")||`swiper-wrapper-${c(16)}`,U=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";b(H,N),w(H,U),k();let{nextEl:ee,prevEl:Ee}=e.navigation?e.navigation:{};ee=F(ee),Ee=F(Ee),ee&&ee.forEach(D=>x(D,N,S.nextSlideMessage)),Ee&&Ee.forEach(D=>x(D,N,S.prevSlideMessage)),$()&&F(e.pagination.el).forEach(z=>{z.addEventListener("keydown",y)}),X().addEventListener("visibilitychange",M),e.el.addEventListener("focus",C,!0),e.el.addEventListener("focus",C,!0),e.el.addEventListener("pointerdown",T,!0),e.el.addEventListener("pointerup",L,!0)};function R(){r&&r.remove();let{nextEl:S,prevEl:_}=e.navigation?e.navigation:{};S=F(S),_=F(_),S&&S.forEach(N=>N.removeEventListener("keydown",y)),_&&_.forEach(N=>N.removeEventListener("keydown",y)),$()&&F(e.pagination.el).forEach(U=>{U.removeEventListener("keydown",y)}),X().removeEventListener("visibilitychange",M),e.el&&typeof e.el!="string"&&(e.el.removeEventListener("focus",C,!0),e.el.removeEventListener("pointerdown",T,!0),e.el.removeEventListener("pointerup",L,!0))}s("beforeInit",()=>{r=Q("span",e.params.a11y.notificationClass),r.setAttribute("aria-live","assertive"),r.setAttribute("aria-atomic","true")}),s("afterInit",()=>{e.params.a11y.enabled&&I()}),s("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&k()}),s("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&E()}),s("paginationUpdate",()=>{e.params.a11y.enabled&&P()}),s("destroy",()=>{e.params.a11y.enabled&&R()})}function As(t){let{swiper:e,extendParams:i,on:s}=t;i({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let r=!1,a={},o=h=>h.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),l=h=>{let n=q(),u;h?u=new URL(h):u=n.location;let b=u.pathname.slice(1).split("/").filter(y=>y!==""),w=b.length,g=b[w-2],m=b[w-1];return{key:g,value:m}},d=(h,n)=>{let u=q();if(!r||!e.params.history.enabled)return;let b;e.params.url?b=new URL(e.params.url):b=u.location;let w=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${n}"]`):e.slides[n],g=o(w.getAttribute("data-history"));if(e.params.history.root.length>0){let y=e.params.history.root;y[y.length-1]==="/"&&(y=y.slice(0,y.length-1)),g=`${y}/${h?`${h}/`:""}${g}`}else b.pathname.includes(h)||(g=`${h?`${h}/`:""}${g}`);e.params.history.keepQuery&&(g+=b.search);let m=u.history.state;m&&m.value===g||(e.params.history.replaceState?u.history.replaceState({value:g},null,g):u.history.pushState({value:g},null,g))},c=(h,n,u)=>{if(n)for(let b=0,w=e.slides.length;b<w;b+=1){let g=e.slides[b];if(o(g.getAttribute("data-history"))===n){let y=e.getSlideIndex(g);e.slideTo(y,h,u)}}else e.slideTo(0,h,u)},p=()=>{a=l(e.params.url),c(e.params.speed,a.value,!1)},f=()=>{let h=q();if(e.params.history){if(!h.history||!h.history.pushState){e.params.history.enabled=!1,e.params.hashNavigation.enabled=!0;return}if(r=!0,a=l(e.params.url),!a.key&&!a.value){e.params.history.replaceState||h.addEventListener("popstate",p);return}c(0,a.value,e.params.runCallbacksOnInit),e.params.history.replaceState||h.addEventListener("popstate",p)}},v=()=>{let h=q();e.params.history.replaceState||h.removeEventListener("popstate",p)};s("init",()=>{e.params.history.enabled&&f()}),s("destroy",()=>{e.params.history.enabled&&v()}),s("transitionEnd _freeModeNoMomentumRelease",()=>{r&&d(e.params.history.key,e.activeIndex)}),s("slideChange",()=>{r&&e.params.cssMode&&d(e.params.history.key,e.activeIndex)})}function Ps(t){let{swiper:e,extendParams:i,emit:s,on:r}=t,a=!1,o=X(),l=q();i({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(v,h){if(e.virtual&&e.params.virtual.enabled){let n=e.slides.find(b=>b.getAttribute("data-hash")===h);return n?parseInt(n.getAttribute("data-swiper-slide-index"),10):0}return e.getSlideIndex(j(e.slidesEl,`.${e.params.slideClass}[data-hash="${h}"], swiper-slide[data-hash="${h}"]`)[0])}}});let d=()=>{s("hashChange");let v=o.location.hash.replace("#",""),h=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],n=h?h.getAttribute("data-hash"):"";if(v!==n){let u=e.params.hashNavigation.getSlideIndex(e,v);if(typeof u>"u"||Number.isNaN(u))return;e.slideTo(u)}},c=()=>{if(!a||!e.params.hashNavigation.enabled)return;let v=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],h=v?v.getAttribute("data-hash")||v.getAttribute("data-history"):"";e.params.hashNavigation.replaceState&&l.history&&l.history.replaceState?(l.history.replaceState(null,null,`#${h}`||""),s("hashSet")):(o.location.hash=h||"",s("hashSet"))},p=()=>{if(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)return;a=!0;let v=o.location.hash.replace("#","");if(v){let n=e.params.hashNavigation.getSlideIndex(e,v);e.slideTo(n||0,0,e.params.runCallbacksOnInit,!0)}e.params.hashNavigation.watchState&&l.addEventListener("hashchange",d)},f=()=>{e.params.hashNavigation.watchState&&l.removeEventListener("hashchange",d)};r("init",()=>{e.params.hashNavigation.enabled&&p()}),r("destroy",()=>{e.params.hashNavigation.enabled&&f()}),r("transitionEnd _freeModeNoMomentumRelease",()=>{a&&c()}),r("slideChange",()=>{a&&e.params.cssMode&&c()})}function Ls(t){let{swiper:e,extendParams:i,on:s,emit:r,params:a}=t;e.autoplay={running:!1,paused:!1,timeLeft:0},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,l,d=a&&a.autoplay?a.autoplay.delay:3e3,c=a&&a.autoplay?a.autoplay.delay:3e3,p,f=new Date().getTime(),v,h,n,u,b,w,g;function m(_){!e||e.destroyed||!e.wrapperEl||_.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",m),!(g||_.detail&&_.detail.bySwiperTouchMove)&&T())}let y=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?v=!0:v&&(c=p,v=!1);let _=e.autoplay.paused?p:f+c-new Date().getTime();e.autoplay.timeLeft=_,r("autoplayTimeLeft",_,_/d),l=requestAnimationFrame(()=>{y()})},E=()=>{let _;return e.virtual&&e.params.virtual.enabled?_=e.slides.find(N=>N.classList.contains("swiper-slide-active")):_=e.slides[e.activeIndex],_?parseInt(_.getAttribute("data-swiper-autoplay"),10):void 0},A=_=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(l),y();let H=typeof _>"u"?e.params.autoplay.delay:_;d=e.params.autoplay.delay,c=e.params.autoplay.delay;let N=E();!Number.isNaN(N)&&N>0&&typeof _>"u"&&(H=N,d=N,c=N),p=H;let U=e.params.speed,ee=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(U,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,U,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(U,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,U,!0,!0),r("autoplay")),e.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{A()})))};return H>0?(clearTimeout(o),o=setTimeout(()=>{ee()},H)):requestAnimationFrame(()=>{ee()}),H},$=()=>{f=new Date().getTime(),e.autoplay.running=!0,A(),r("autoplayStart")},P=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(l),r("autoplayStop")},x=(_,H)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),_||(w=!0);let N=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",m):T()};if(e.autoplay.paused=!0,H){b&&(p=e.params.autoplay.delay),b=!1,N();return}p=(p||e.params.autoplay.delay)-(new Date().getTime()-f),!(e.isEnd&&p<0&&!e.params.loop)&&(p<0&&(p=0),N())},T=()=>{e.isEnd&&p<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(f=new Date().getTime(),w?(w=!1,A(p)):A(),e.autoplay.paused=!1,r("autoplayResume"))},L=()=>{if(e.destroyed||!e.autoplay.running)return;let _=X();_.visibilityState==="hidden"&&(w=!0,x(!0)),_.visibilityState==="visible"&&T()},M=_=>{_.pointerType==="mouse"&&(w=!0,g=!0,!(e.animating||e.autoplay.paused)&&x(!0))},C=_=>{_.pointerType==="mouse"&&(g=!1,e.autoplay.paused&&T())},k=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",M),e.el.addEventListener("pointerleave",C))},I=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",M),e.el.removeEventListener("pointerleave",C))},R=()=>{X().addEventListener("visibilitychange",L)},S=()=>{X().removeEventListener("visibilitychange",L)};s("init",()=>{e.params.autoplay.enabled&&(k(),R(),$())}),s("destroy",()=>{I(),S(),e.autoplay.running&&P()}),s("_freeModeStaticRelease",()=>{(n||w)&&T()}),s("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?P():x(!0,!0)}),s("beforeTransitionStart",(_,H,N)=>{e.destroyed||!e.autoplay.running||(N||!e.params.autoplay.disableOnInteraction?x(!0,!0):P())}),s("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){P();return}h=!0,n=!1,w=!1,u=setTimeout(()=>{w=!0,n=!0,x(!0)},200)}}),s("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!h)){if(clearTimeout(u),clearTimeout(o),e.params.autoplay.disableOnInteraction){n=!1,h=!1;return}n&&e.params.cssMode&&T(),n=!1,h=!1}}),s("slideChange",()=>{e.destroyed||!e.autoplay.running||(b=!0)}),Object.assign(e.autoplay,{start:$,stop:P,pause:x,resume:T})}function ks(t){let{swiper:e,extendParams:i,on:s}=t;i({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let r=!1,a=!1;e.thumbs={swiper:null};function o(){let c=e.thumbs.swiper;if(!c||c.destroyed)return;let p=c.clickedIndex,f=c.clickedSlide;if(f&&f.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof p>"u"||p===null)return;let v;c.params.loop?v=parseInt(c.clickedSlide.getAttribute("data-swiper-slide-index"),10):v=p,e.params.loop?e.slideToLoop(v):e.slideTo(v)}function l(){let{thumbs:c}=e.params;if(r)return!1;r=!0;let p=e.constructor;if(c.swiper instanceof p){if(c.swiper.destroyed)return r=!1,!1;e.thumbs.swiper=c.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update()}else if(ot(c.swiper)){let f=Object.assign({},c.swiper);Object.assign(f,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new p(f),a=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",o),!0}function d(c){let p=e.thumbs.swiper;if(!p||p.destroyed)return;let f=p.params.slidesPerView==="auto"?p.slidesPerViewDynamic():p.params.slidesPerView,v=1,h=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(v=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(v=1),v=Math.floor(v),p.slides.forEach(b=>b.classList.remove(h)),p.params.loop||p.params.virtual&&p.params.virtual.enabled)for(let b=0;b<v;b+=1)j(p.slidesEl,`[data-swiper-slide-index="${e.realIndex+b}"]`).forEach(w=>{w.classList.add(h)});else for(let b=0;b<v;b+=1)p.slides[e.realIndex+b]&&p.slides[e.realIndex+b].classList.add(h);let n=e.params.thumbs.autoScrollOffset,u=n&&!p.params.loop;if(e.realIndex!==p.realIndex||u){let b=p.activeIndex,w,g;if(p.params.loop){let m=p.slides.find(y=>y.getAttribute("data-swiper-slide-index")===`${e.realIndex}`);w=p.slides.indexOf(m),g=e.activeIndex>e.previousIndex?"next":"prev"}else w=e.realIndex,g=w>e.previousIndex?"next":"prev";u&&(w+=g==="next"?n:-1*n),p.visibleSlidesIndexes&&p.visibleSlidesIndexes.indexOf(w)<0&&(p.params.centeredSlides?w>b?w=w-Math.floor(f/2)+1:w=w+Math.floor(f/2)-1:w>b&&p.params.slidesPerGroup,p.slideTo(w,c?0:void 0))}}s("beforeInit",()=>{let{thumbs:c}=e.params;if(!(!c||!c.swiper))if(typeof c.swiper=="string"||c.swiper instanceof HTMLElement){let p=X(),f=()=>{let h=typeof c.swiper=="string"?p.querySelector(c.swiper):c.swiper;if(h&&h.swiper)c.swiper=h.swiper,l(),d(!0);else if(h){let n=`${e.params.eventsPrefix}init`,u=b=>{c.swiper=b.detail[0],h.removeEventListener(n,u),l(),d(!0),c.swiper.update(),e.update()};h.addEventListener(n,u)}return h},v=()=>{if(e.destroyed)return;f()||requestAnimationFrame(v)};requestAnimationFrame(v)}else l(),d(!0)}),s("slideChange update resize observerUpdate",()=>{d()}),s("setTransition",(c,p)=>{let f=e.thumbs.swiper;!f||f.destroyed||f.setTransition(p)}),s("beforeDestroy",()=>{let c=e.thumbs.swiper;!c||c.destroyed||a&&c.destroy()}),Object.assign(e.thumbs,{init:l,update:d})}function zs(t){let{swiper:e,extendParams:i,emit:s,once:r}=t;i({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function a(){if(e.params.cssMode)return;let d=e.getTranslate();e.setTranslate(d),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function o(){if(e.params.cssMode)return;let{touchEventsData:d,touches:c}=e;d.velocities.length===0&&d.velocities.push({position:c[e.isHorizontal()?"startX":"startY"],time:d.touchStartTime}),d.velocities.push({position:c[e.isHorizontal()?"currentX":"currentY"],time:de()})}function l(d){let{currentPos:c}=d;if(e.params.cssMode)return;let{params:p,wrapperEl:f,rtlTranslate:v,snapGrid:h,touchEventsData:n}=e,b=de()-n.touchStartTime;if(c<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(c>-e.maxTranslate()){e.slides.length<h.length?e.slideTo(h.length-1):e.slideTo(e.slides.length-1);return}if(p.freeMode.momentum){if(n.velocities.length>1){let P=n.velocities.pop(),x=n.velocities.pop(),T=P.position-x.position,L=P.time-x.time;e.velocity=T/L,e.velocity/=2,Math.abs(e.velocity)<p.freeMode.minimumVelocity&&(e.velocity=0),(L>150||de()-P.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=p.freeMode.momentumVelocityRatio,n.velocities.length=0;let w=1e3*p.freeMode.momentumRatio,g=e.velocity*w,m=e.translate+g;v&&(m=-m);let y=!1,E,A=Math.abs(e.velocity)*20*p.freeMode.momentumBounceRatio,$;if(m<e.maxTranslate())p.freeMode.momentumBounce?(m+e.maxTranslate()<-A&&(m=e.maxTranslate()-A),E=e.maxTranslate(),y=!0,n.allowMomentumBounce=!0):m=e.maxTranslate(),p.loop&&p.centeredSlides&&($=!0);else if(m>e.minTranslate())p.freeMode.momentumBounce?(m-e.minTranslate()>A&&(m=e.minTranslate()+A),E=e.minTranslate(),y=!0,n.allowMomentumBounce=!0):m=e.minTranslate(),p.loop&&p.centeredSlides&&($=!0);else if(p.freeMode.sticky){let P;for(let x=0;x<h.length;x+=1)if(h[x]>-m){P=x;break}Math.abs(h[P]-m)<Math.abs(h[P-1]-m)||e.swipeDirection==="next"?m=h[P]:m=h[P-1],m=-m}if($&&r("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(v?w=Math.abs((-m-e.translate)/e.velocity):w=Math.abs((m-e.translate)/e.velocity),p.freeMode.sticky){let P=Math.abs((v?-m:m)-e.translate),x=e.slidesSizesGrid[e.activeIndex];P<x?w=p.speed:P<2*x?w=p.speed*1.5:w=p.speed*2.5}}else if(p.freeMode.sticky){e.slideToClosest();return}p.freeMode.momentumBounce&&y?(e.updateProgress(E),e.setTransition(w),e.setTranslate(m),e.transitionStart(!0,e.swipeDirection),e.animating=!0,He(f,()=>{!e||e.destroyed||!n.allowMomentumBounce||(s("momentumBounce"),e.setTransition(p.speed),setTimeout(()=>{e.setTranslate(E),He(f,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(s("_freeModeNoMomentumRelease"),e.updateProgress(m),e.setTransition(w),e.setTranslate(m),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,He(f,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(m),e.updateActiveIndex(),e.updateSlidesClasses()}else if(p.freeMode.sticky){e.slideToClosest();return}else p.freeMode&&s("_freeModeNoMomentumRelease");(!p.freeMode.momentum||b>=p.longSwipesMs)&&(s("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:a,onTouchMove:o,onTouchEnd:l}})}function Is(t){let{swiper:e,extendParams:i,on:s}=t;i({grid:{rows:1,fill:"column"}});let r,a,o,l,d=()=>{let u=e.params.spaceBetween;return typeof u=="string"&&u.indexOf("%")>=0?u=parseFloat(u.replace("%",""))/100*e.size:typeof u=="string"&&(u=parseFloat(u)),u},c=u=>{let{slidesPerView:b}=e.params,{rows:w,fill:g}=e.params.grid,m=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:u.length;o=Math.floor(m/w),Math.floor(m/w)===m/w?r=m:r=Math.ceil(m/w)*w,b!=="auto"&&g==="row"&&(r=Math.max(r,b*w)),a=r/w},p=()=>{e.slides&&e.slides.forEach(u=>{u.swiperSlideGridSet&&(u.style.height="",u.style[e.getDirectionLabel("margin-top")]="")})},f=(u,b,w)=>{let{slidesPerGroup:g}=e.params,m=d(),{rows:y,fill:E}=e.params.grid,A=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:w.length,$,P,x;if(E==="row"&&g>1){let T=Math.floor(u/(g*y)),L=u-y*g*T,M=T===0?g:Math.min(Math.ceil((A-T*y*g)/y),g);x=Math.floor(L/M),P=L-x*M+T*g,$=P+x*r/y,b.style.order=$}else E==="column"?(P=Math.floor(u/y),x=u-P*y,(P>o||P===o&&x===y-1)&&(x+=1,x>=y&&(x=0,P+=1))):(x=Math.floor(u/a),P=u-x*a);b.row=x,b.column=P,b.style.height=`calc((100% - ${(y-1)*m}px) / ${y})`,b.style[e.getDirectionLabel("margin-top")]=x!==0?m&&`${m}px`:"",b.swiperSlideGridSet=!0},v=(u,b)=>{let{centeredSlides:w,roundLengths:g}=e.params,m=d(),{rows:y}=e.params.grid;if(e.virtualSize=(u+m)*r,e.virtualSize=Math.ceil(e.virtualSize/y)-m,e.params.cssMode||(e.wrapperEl.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),w){let E=[];for(let A=0;A<b.length;A+=1){let $=b[A];g&&($=Math.floor($)),b[A]<e.virtualSize+b[0]&&E.push($)}b.splice(0,b.length),b.push(...E)}},h=()=>{l=e.params.grid&&e.params.grid.rows>1},n=()=>{let{params:u,el:b}=e,w=u.grid&&u.grid.rows>1;l&&!w?(b.classList.remove(`${u.containerModifierClass}grid`,`${u.containerModifierClass}grid-column`),o=1,e.emitContainerClasses()):!l&&w&&(b.classList.add(`${u.containerModifierClass}grid`),u.grid.fill==="column"&&b.classList.add(`${u.containerModifierClass}grid-column`),e.emitContainerClasses()),l=w};s("init",h),s("update",n),e.grid={initSlides:c,unsetSlides:p,updateSlide:f,updateWrapperSize:v}}function Ao(t){let e=this,{params:i,slidesEl:s}=e;i.loop&&e.loopDestroy();let r=a=>{if(typeof a=="string"){let o=document.createElement("div");te(o,a),s.append(o.children[0]),te(o,"")}else s.append(a)};if(typeof t=="object"&&"length"in t)for(let a=0;a<t.length;a+=1)t[a]&&r(t[a]);else r(t);e.recalcSlides(),i.loop&&e.loopCreate(),(!i.observer||e.isElement)&&e.update()}function Po(t){let e=this,{params:i,activeIndex:s,slidesEl:r}=e;i.loop&&e.loopDestroy();let a=s+1,o=l=>{if(typeof l=="string"){let d=document.createElement("div");te(d,l),r.prepend(d.children[0]),te(d,"")}else r.prepend(l)};if(typeof t=="object"&&"length"in t){for(let l=0;l<t.length;l+=1)t[l]&&o(t[l]);a=s+t.length}else o(t);e.recalcSlides(),i.loop&&e.loopCreate(),(!i.observer||e.isElement)&&e.update(),e.slideTo(a,0,!1)}function Lo(t,e){let i=this,{params:s,activeIndex:r,slidesEl:a}=i,o=r;s.loop&&(o-=i.loopedSlides,i.loopDestroy(),i.recalcSlides());let l=i.slides.length;if(t<=0){i.prependSlide(e);return}if(t>=l){i.appendSlide(e);return}let d=o>t?o+1:o,c=[];for(let p=l-1;p>=t;p-=1){let f=i.slides[p];f.remove(),c.unshift(f)}if(typeof e=="object"&&"length"in e){for(let p=0;p<e.length;p+=1)e[p]&&a.append(e[p]);d=o>t?o+e.length:o}else a.append(e);for(let p=0;p<c.length;p+=1)a.append(c[p]);i.recalcSlides(),s.loop&&i.loopCreate(),(!s.observer||i.isElement)&&i.update(),s.loop?i.slideTo(d+i.loopedSlides,0,!1):i.slideTo(d,0,!1)}function ko(t){let e=this,{params:i,activeIndex:s}=e,r=s;i.loop&&(r-=e.loopedSlides,e.loopDestroy());let a=r,o;if(typeof t=="object"&&"length"in t){for(let l=0;l<t.length;l+=1)o=t[l],e.slides[o]&&e.slides[o].remove(),o<a&&(a-=1);a=Math.max(a,0)}else o=t,e.slides[o]&&e.slides[o].remove(),o<a&&(a-=1),a=Math.max(a,0);e.recalcSlides(),i.loop&&e.loopCreate(),(!i.observer||e.isElement)&&e.update(),i.loop?e.slideTo(a+e.loopedSlides,0,!1):e.slideTo(a,0,!1)}function zo(){let t=this,e=[];for(let i=0;i<t.slides.length;i+=1)e.push(i);t.removeSlide(e)}function Os(t){let{swiper:e}=t;Object.assign(e,{appendSlide:Ao.bind(e),prependSlide:Po.bind(e),addSlide:Lo.bind(e),removeSlide:ko.bind(e),removeAllSlides:zo.bind(e)})}function ve(t){let{effect:e,swiper:i,on:s,setTranslate:r,setTransition:a,overwriteParams:o,perspective:l,recreateShadows:d,getEffectParams:c}=t;s("beforeInit",()=>{if(i.params.effect!==e)return;i.classNames.push(`${i.params.containerModifierClass}${e}`),l&&l()&&i.classNames.push(`${i.params.containerModifierClass}3d`);let f=o?o():{};Object.assign(i.params,f),Object.assign(i.originalParams,f)}),s("setTranslate _virtualUpdated",()=>{i.params.effect===e&&r()}),s("setTransition",(f,v)=>{i.params.effect===e&&a(v)}),s("transitionEnd",()=>{if(i.params.effect===e&&d){if(!c||!c().slideShadows)return;i.slides.forEach(f=>{f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(v=>v.remove())}),d()}});let p;s("virtualUpdate",()=>{i.params.effect===e&&(i.slides.length||(p=!0),requestAnimationFrame(()=>{p&&i.slides&&i.slides.length&&(r(),p=!1)}))})}function _e(t,e){let i=pe(e);return i!==e&&(i.style.backfaceVisibility="hidden",i.style["-webkit-backface-visibility"]="hidden"),i}function Ne(t){let{swiper:e,duration:i,transformElements:s,allSlides:r}=t,{activeIndex:a}=e,o=l=>l.parentElement?l.parentElement:e.slides.find(c=>c.shadowRoot&&c.shadowRoot===l.parentNode);if(e.params.virtualTranslate&&i!==0){let l=!1,d;r?d=s:d=s.filter(c=>{let p=c.classList.contains("swiper-slide-transform")?o(c):c;return e.getSlideIndex(p)===a}),d.forEach(c=>{He(c,()=>{if(l||!e||e.destroyed)return;l=!0,e.animating=!1;let p=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(p)})})}}function Ds(t){let{swiper:e,extendParams:i,on:s}=t;i({fadeEffect:{crossFade:!1}}),ve({effect:"fade",swiper:e,on:s,setTranslate:()=>{let{slides:o}=e,l=e.params.fadeEffect;for(let d=0;d<o.length;d+=1){let c=e.slides[d],f=-c.swiperSlideOffset;e.params.virtualTranslate||(f-=e.translate);let v=0;e.isHorizontal()||(v=f,f=0);let h=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(c.progress),0):1+Math.min(Math.max(c.progress,-1),0),n=_e(l,c);n.style.opacity=h,n.style.transform=`translate3d(${f}px, ${v}px, 0px)`}},setTransition:o=>{let l=e.slides.map(d=>pe(d));l.forEach(d=>{d.style.transitionDuration=`${o}ms`}),Ne({swiper:e,duration:o,transformElements:l,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Rs(t){let{swiper:e,extendParams:i,on:s}=t;i({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});let r=(d,c,p)=>{let f=p?d.querySelector(".swiper-slide-shadow-left"):d.querySelector(".swiper-slide-shadow-top"),v=p?d.querySelector(".swiper-slide-shadow-right"):d.querySelector(".swiper-slide-shadow-bottom");f||(f=Q("div",`swiper-slide-shadow-cube swiper-slide-shadow-${p?"left":"top"}`.split(" ")),d.append(f)),v||(v=Q("div",`swiper-slide-shadow-cube swiper-slide-shadow-${p?"right":"bottom"}`.split(" ")),d.append(v)),f&&(f.style.opacity=Math.max(-c,0)),v&&(v.style.opacity=Math.max(c,0))};ve({effect:"cube",swiper:e,on:s,setTranslate:()=>{let{el:d,wrapperEl:c,slides:p,width:f,height:v,rtlTranslate:h,size:n,browser:u}=e,b=Ve(e),w=e.params.cubeEffect,g=e.isHorizontal(),m=e.virtual&&e.params.virtual.enabled,y=0,E;w.shadow&&(g?(E=e.wrapperEl.querySelector(".swiper-cube-shadow"),E||(E=Q("div","swiper-cube-shadow"),e.wrapperEl.append(E)),E.style.height=`${f}px`):(E=d.querySelector(".swiper-cube-shadow"),E||(E=Q("div","swiper-cube-shadow"),d.append(E))));for(let $=0;$<p.length;$+=1){let P=p[$],x=$;m&&(x=parseInt(P.getAttribute("data-swiper-slide-index"),10));let T=x*90,L=Math.floor(T/360);h&&(T=-T,L=Math.floor(-T/360));let M=Math.max(Math.min(P.progress,1),-1),C=0,k=0,I=0;x%4===0?(C=-L*4*n,I=0):(x-1)%4===0?(C=0,I=-L*4*n):(x-2)%4===0?(C=n+L*4*n,I=n):(x-3)%4===0&&(C=-n,I=3*n+n*4*L),h&&(C=-C),g||(k=C,C=0);let R=`rotateX(${b(g?0:-T)}deg) rotateY(${b(g?T:0)}deg) translate3d(${C}px, ${k}px, ${I}px)`;M<=1&&M>-1&&(y=x*90+M*90,h&&(y=-x*90-M*90)),P.style.transform=R,w.slideShadows&&r(P,M,g)}if(c.style.transformOrigin=`50% 50% -${n/2}px`,c.style["-webkit-transform-origin"]=`50% 50% -${n/2}px`,w.shadow)if(g)E.style.transform=`translate3d(0px, ${f/2+w.shadowOffset}px, ${-f/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${w.shadowScale})`;else{let $=Math.abs(y)-Math.floor(Math.abs(y)/90)*90,P=1.5-(Math.sin($*2*Math.PI/360)/2+Math.cos($*2*Math.PI/360)/2),x=w.shadowScale,T=w.shadowScale/P,L=w.shadowOffset;E.style.transform=`scale3d(${x}, 1, ${T}) translate3d(0px, ${v/2+L}px, ${-v/2/T}px) rotateX(-89.99deg)`}let A=(u.isSafari||u.isWebView)&&u.needPerspectiveFix?-n/2:0;c.style.transform=`translate3d(0px,0,${A}px) rotateX(${b(e.isHorizontal()?0:y)}deg) rotateY(${b(e.isHorizontal()?-y:0)}deg)`,c.style.setProperty("--swiper-cube-translate-z",`${A}px`)},setTransition:d=>{let{el:c,slides:p}=e;if(p.forEach(f=>{f.style.transitionDuration=`${d}ms`,f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(v=>{v.style.transitionDuration=`${d}ms`})}),e.params.cubeEffect.shadow&&!e.isHorizontal()){let f=c.querySelector(".swiper-cube-shadow");f&&(f.style.transitionDuration=`${d}ms`)}},recreateShadows:()=>{let d=e.isHorizontal();e.slides.forEach(c=>{let p=Math.max(Math.min(c.progress,1),-1);r(c,p,d)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function Ce(t,e,i){let s=`swiper-slide-shadow${i?`-${i}`:""}${t?` swiper-slide-shadow-${t}`:""}`,r=pe(e),a=r.querySelector(`.${s.split(" ").join(".")}`);return a||(a=Q("div",s.split(" ")),r.append(a)),a}function Bs(t){let{swiper:e,extendParams:i,on:s}=t;i({flipEffect:{slideShadows:!0,limitRotation:!0}});let r=(d,c)=>{let p=e.isHorizontal()?d.querySelector(".swiper-slide-shadow-left"):d.querySelector(".swiper-slide-shadow-top"),f=e.isHorizontal()?d.querySelector(".swiper-slide-shadow-right"):d.querySelector(".swiper-slide-shadow-bottom");p||(p=Ce("flip",d,e.isHorizontal()?"left":"top")),f||(f=Ce("flip",d,e.isHorizontal()?"right":"bottom")),p&&(p.style.opacity=Math.max(-c,0)),f&&(f.style.opacity=Math.max(c,0))};ve({effect:"flip",swiper:e,on:s,setTranslate:()=>{let{slides:d,rtlTranslate:c}=e,p=e.params.flipEffect,f=Ve(e);for(let v=0;v<d.length;v+=1){let h=d[v],n=h.progress;e.params.flipEffect.limitRotation&&(n=Math.max(Math.min(h.progress,1),-1));let u=h.swiperSlideOffset,w=-180*n,g=0,m=e.params.cssMode?-u-e.translate:-u,y=0;e.isHorizontal()?c&&(w=-w):(y=m,m=0,g=-w,w=0),h.style.zIndex=-Math.abs(Math.round(n))+d.length,p.slideShadows&&r(h,n);let E=`translate3d(${m}px, ${y}px, 0px) rotateX(${f(g)}deg) rotateY(${f(w)}deg)`,A=_e(p,h);A.style.transform=E}},setTransition:d=>{let c=e.slides.map(p=>pe(p));c.forEach(p=>{p.style.transitionDuration=`${d}ms`,p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(f=>{f.style.transitionDuration=`${d}ms`})}),Ne({swiper:e,duration:d,transformElements:c})},recreateShadows:()=>{e.params.flipEffect,e.slides.forEach(d=>{let c=d.progress;e.params.flipEffect.limitRotation&&(c=Math.max(Math.min(d.progress,1),-1)),r(d,c)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function Hs(t){let{swiper:e,extendParams:i,on:s}=t;i({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),ve({effect:"coverflow",swiper:e,on:s,setTranslate:()=>{let{width:o,height:l,slides:d,slidesSizesGrid:c}=e,p=e.params.coverflowEffect,f=e.isHorizontal(),v=e.translate,h=f?-v+o/2:-v+l/2,n=f?p.rotate:-p.rotate,u=p.depth,b=Ve(e);for(let w=0,g=d.length;w<g;w+=1){let m=d[w],y=c[w],E=m.swiperSlideOffset,A=(h-E-y/2)/y,$=typeof p.modifier=="function"?p.modifier(A):A*p.modifier,P=f?n*$:0,x=f?0:n*$,T=-u*Math.abs($),L=p.stretch;typeof L=="string"&&L.indexOf("%")!==-1&&(L=parseFloat(p.stretch)/100*y);let M=f?0:L*$,C=f?L*$:0,k=1-(1-p.scale)*Math.abs($);Math.abs(C)<.001&&(C=0),Math.abs(M)<.001&&(M=0),Math.abs(T)<.001&&(T=0),Math.abs(P)<.001&&(P=0),Math.abs(x)<.001&&(x=0),Math.abs(k)<.001&&(k=0);let I=`translate3d(${C}px,${M}px,${T}px)  rotateX(${b(x)}deg) rotateY(${b(P)}deg) scale(${k})`,R=_e(p,m);if(R.style.transform=I,m.style.zIndex=-Math.abs(Math.round($))+1,p.slideShadows){let S=f?m.querySelector(".swiper-slide-shadow-left"):m.querySelector(".swiper-slide-shadow-top"),_=f?m.querySelector(".swiper-slide-shadow-right"):m.querySelector(".swiper-slide-shadow-bottom");S||(S=Ce("coverflow",m,f?"left":"top")),_||(_=Ce("coverflow",m,f?"right":"bottom")),S&&(S.style.opacity=$>0?$:0),_&&(_.style.opacity=-$>0?-$:0)}}},setTransition:o=>{e.slides.map(d=>pe(d)).forEach(d=>{d.style.transitionDuration=`${o}ms`,d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${o}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function Vs(t){let{swiper:e,extendParams:i,on:s}=t;i({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});let r=l=>typeof l=="string"?l:`${l}px`;ve({effect:"creative",swiper:e,on:s,setTranslate:()=>{let{slides:l,wrapperEl:d,slidesSizesGrid:c}=e,p=e.params.creativeEffect,{progressMultiplier:f}=p,v=e.params.centeredSlides,h=Ve(e);if(v){let n=c[0]/2-e.params.slidesOffsetBefore||0;d.style.transform=`translateX(calc(50% - ${n}px))`}for(let n=0;n<l.length;n+=1){let u=l[n],b=u.progress,w=Math.min(Math.max(u.progress,-p.limitProgress),p.limitProgress),g=w;v||(g=Math.min(Math.max(u.originalProgress,-p.limitProgress),p.limitProgress));let m=u.swiperSlideOffset,y=[e.params.cssMode?-m-e.translate:-m,0,0],E=[0,0,0],A=!1;e.isHorizontal()||(y[1]=y[0],y[0]=0);let $={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};w<0?($=p.next,A=!0):w>0&&($=p.prev,A=!0),y.forEach((k,I)=>{y[I]=`calc(${k}px + (${r($.translate[I])} * ${Math.abs(w*f)}))`}),E.forEach((k,I)=>{let R=$.rotate[I]*Math.abs(w*f);E[I]=R}),u.style.zIndex=-Math.abs(Math.round(b))+l.length;let P=y.join(", "),x=`rotateX(${h(E[0])}deg) rotateY(${h(E[1])}deg) rotateZ(${h(E[2])}deg)`,T=g<0?`scale(${1+(1-$.scale)*g*f})`:`scale(${1-(1-$.scale)*g*f})`,L=g<0?1+(1-$.opacity)*g*f:1-(1-$.opacity)*g*f,M=`translate3d(${P}) ${x} ${T}`;if(A&&$.shadow||!A){let k=u.querySelector(".swiper-slide-shadow");if(!k&&$.shadow&&(k=Ce("creative",u)),k){let I=p.shadowPerProgress?w*(1/p.limitProgress):w;k.style.opacity=Math.min(Math.max(Math.abs(I),0),1)}}let C=_e(p,u);C.style.transform=M,C.style.opacity=L,$.origin&&(C.style.transformOrigin=$.origin)}},setTransition:l=>{let d=e.slides.map(c=>pe(c));d.forEach(c=>{c.style.transitionDuration=`${l}ms`,c.querySelectorAll(".swiper-slide-shadow").forEach(p=>{p.style.transitionDuration=`${l}ms`})}),Ne({swiper:e,duration:l,transformElements:d,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function Fs(t){let{swiper:e,extendParams:i,on:s}=t;i({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),ve({effect:"cards",swiper:e,on:s,setTranslate:()=>{let{slides:o,activeIndex:l,rtlTranslate:d}=e,c=e.params.cardsEffect,{startTranslate:p,isTouched:f}=e.touchEventsData,v=d?-e.translate:e.translate;for(let h=0;h<o.length;h+=1){let n=o[h],u=n.progress,b=Math.min(Math.max(u,-4),4),w=n.swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&(e.wrapperEl.style.transform=`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(w-=o[0].swiperSlideOffset);let g=e.params.cssMode?-w-e.translate:-w,m=0,y=-100*Math.abs(b),E=1,A=-c.perSlideRotate*b,$=c.perSlideOffset-Math.abs(b)*.75,P=e.virtual&&e.params.virtual.enabled?e.virtual.from+h:h,x=(P===l||P===l-1)&&b>0&&b<1&&(f||e.params.cssMode)&&v<p,T=(P===l||P===l+1)&&b<0&&b>-1&&(f||e.params.cssMode)&&v>p;if(x||T){let k=(1-Math.abs((Math.abs(b)-.5)/.5))**.5;A+=-28*b*k,E+=-.5*k,$+=96*k,m=`${-25*k*Math.abs(b)}%`}if(b<0?g=`calc(${g}px ${d?"-":"+"} (${$*Math.abs(b)}%))`:b>0?g=`calc(${g}px ${d?"-":"+"} (-${$*Math.abs(b)}%))`:g=`${g}px`,!e.isHorizontal()){let k=m;m=g,g=k}let L=b<0?`${1+(1-E)*b}`:`${1-(1-E)*b}`,M=`
        translate3d(${g}, ${m}, ${y}px)
        rotateZ(${c.rotate?d?-A:A:0}deg)
        scale(${L})
      `;if(c.slideShadows){let k=n.querySelector(".swiper-slide-shadow");k||(k=Ce("cards",n)),k&&(k.style.opacity=Math.min(Math.max((Math.abs(b)-.5)/.5,0),1))}n.style.zIndex=-Math.abs(Math.round(u))+o.length;let C=_e(c,n);C.style.transform=M}},setTransition:o=>{let l=e.slides.map(d=>pe(d));l.forEach(d=>{d.style.transitionDuration=`${o}ms`,d.querySelectorAll(".swiper-slide-shadow").forEach(c=>{c.style.transitionDuration=`${o}ms`})}),Ne({swiper:e,duration:o,transformElements:l})},perspective:()=>!0,overwriteParams:()=>({_loopSwapReset:!1,watchSlidesProgress:!0,loopAdditionalSlides:e.params.cardsEffect.rotate?3:2,centeredSlides:!0,virtualTranslate:!e.params.cssMode})})}var Io=[ws,ys,xs,Ss,Es,Ts,_s,Cs,Ms,$s,As,Ps,Ls,ks,zs,Is,Os,Ds,Rs,Bs,Hs,Vs,Fs];Fe.use(Io);var lt=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Ue(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function qt(t,e){let i=["__proto__","constructor","prototype"];Object.keys(e).filter(s=>i.indexOf(s)<0).forEach(s=>{typeof t[s]>"u"?t[s]=e[s]:Ue(e[s])&&Ue(t[s])&&Object.keys(e[s]).length>0?e[s].__swiper__?t[s]=e[s]:qt(t[s],e[s]):t[s]=e[s]})}function Ns(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function Gs(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function qs(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function dt(t){return t===void 0&&(t=""),t.replace(/-[a-z]/g,e=>e.toUpperCase().replace("-",""))}function Ws(t){let{swiper:e,slides:i,passedParams:s,changedParams:r,nextEl:a,prevEl:o,scrollbarEl:l,paginationEl:d}=t,c=r.filter(x=>x!=="children"&&x!=="direction"&&x!=="wrapperClass"),{params:p,pagination:f,navigation:v,scrollbar:h,virtual:n,thumbs:u}=e,b,w,g,m,y,E,A,$;r.includes("thumbs")&&s.thumbs&&s.thumbs.swiper&&!s.thumbs.swiper.destroyed&&p.thumbs&&(!p.thumbs.swiper||p.thumbs.swiper.destroyed)&&(b=!0),r.includes("controller")&&s.controller&&s.controller.control&&p.controller&&!p.controller.control&&(w=!0),r.includes("pagination")&&s.pagination&&(s.pagination.el||d)&&(p.pagination||p.pagination===!1)&&f&&!f.el&&(g=!0),r.includes("scrollbar")&&s.scrollbar&&(s.scrollbar.el||l)&&(p.scrollbar||p.scrollbar===!1)&&h&&!h.el&&(m=!0),r.includes("navigation")&&s.navigation&&(s.navigation.prevEl||o)&&(s.navigation.nextEl||a)&&(p.navigation||p.navigation===!1)&&v&&!v.prevEl&&!v.nextEl&&(y=!0);let P=x=>{e[x]&&(e[x].destroy(),x==="navigation"?(e.isElement&&(e[x].prevEl.remove(),e[x].nextEl.remove()),p[x].prevEl=void 0,p[x].nextEl=void 0,e[x].prevEl=void 0,e[x].nextEl=void 0):(e.isElement&&e[x].el.remove(),p[x].el=void 0,e[x].el=void 0))};r.includes("loop")&&e.isElement&&(p.loop&&!s.loop?E=!0:!p.loop&&s.loop?A=!0:$=!0),c.forEach(x=>{if(Ue(p[x])&&Ue(s[x]))Object.assign(p[x],s[x]),(x==="navigation"||x==="pagination"||x==="scrollbar")&&"enabled"in s[x]&&!s[x].enabled&&P(x);else{let T=s[x];(T===!0||T===!1)&&(x==="navigation"||x==="pagination"||x==="scrollbar")?T===!1&&P(x):p[x]=s[x]}}),c.includes("controller")&&!w&&e.controller&&e.controller.control&&p.controller&&p.controller.control&&(e.controller.control=p.controller.control),r.includes("children")&&i&&n&&p.virtual.enabled?(n.slides=i,n.update(!0)):r.includes("virtual")&&n&&p.virtual.enabled&&(i&&(n.slides=i),n.update(!0)),r.includes("children")&&i&&p.loop&&($=!0),b&&u.init()&&u.update(!0),w&&(e.controller.control=p.controller.control),g&&(e.isElement&&(!d||typeof d=="string")&&(d=document.createElement("div"),d.classList.add("swiper-pagination"),d.part.add("pagination"),e.el.appendChild(d)),d&&(p.pagination.el=d),f.init(),f.render(),f.update()),m&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-scrollbar"),l.part.add("scrollbar"),e.el.appendChild(l)),l&&(p.scrollbar.el=l),h.init(),h.updateSize(),h.setTranslate()),y&&(e.isElement&&((!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-next"),te(a,e.hostEl.constructor.nextButtonSvg),a.part.add("button-next"),e.el.appendChild(a)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),te(o,e.hostEl.constructor.prevButtonSvg),o.part.add("button-prev"),e.el.appendChild(o))),a&&(p.navigation.nextEl=a),o&&(p.navigation.prevEl=o),v.init(),v.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=s.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=s.allowSlidePrev),r.includes("direction")&&e.changeDirection(s.direction,!1),(E||$)&&e.loopDestroy(),(A||$)&&e.loopCreate(),e.update()}var Xs=t=>{if(parseFloat(t)===Number(t))return Number(t);if(t==="true"||t==="")return!0;if(t==="false")return!1;if(t==="null")return null;if(t!=="undefined"){if(typeof t=="string"&&t.includes("{")&&t.includes("}")&&t.includes('"')){let e;try{e=JSON.parse(t)}catch{e=t}return e}return t}},Ys=["a11y","autoplay","controller","cards-effect","coverflow-effect","creative-effect","cube-effect","fade-effect","flip-effect","free-mode","grid","hash-navigation","history","keyboard","mousewheel","navigation","pagination","parallax","scrollbar","thumbs","virtual","zoom"];function Ai(t,e,i){let s={},r={};qt(s,Gt);let a=[...lt,"on"],o=a.map(d=>d.replace(/_/,""));a.forEach(d=>{d=d.replace("_",""),typeof t[d]<"u"&&(r[d]=t[d])});let l=[...t.attributes];return typeof e=="string"&&typeof i<"u"&&l.push({name:e,value:Ue(i)?{...i}:i}),l.forEach(d=>{let c=Ys.find(p=>d.name.startsWith(`${p}-`));if(c){let p=dt(c),f=dt(d.name.split(`${c}-`)[1]);typeof r[p]>"u"&&(r[p]={}),r[p]===!0&&(r[p]={enabled:!0}),r[p]===!1&&(r[p]={enabled:!1}),r[p][f]=Xs(d.value)}else{let p=dt(d.name);if(!o.includes(p))return;let f=Xs(d.value);r[p]&&Ys.includes(d.name)&&!Ue(f)?(r[p].constructor!==Object&&(r[p]={}),r[p].enabled=!!f):r[p]=f}}),qt(s,r),s.navigation?s.navigation={prevEl:".swiper-button-prev",nextEl:".swiper-button-next",...s.navigation!==!0?s.navigation:{}}:s.navigation===!1&&delete s.navigation,s.scrollbar?s.scrollbar={el:".swiper-scrollbar",...s.scrollbar!==!0?s.scrollbar:{}}:s.scrollbar===!1&&delete s.scrollbar,s.pagination?s.pagination={el:".swiper-pagination",...s.pagination!==!0?s.pagination:{}}:s.pagination===!1&&delete s.pagination,{params:s,passedParams:r}}var Oo=":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}",Do="::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}",Pi=class{},Us=typeof window>"u"||typeof HTMLElement>"u"?Pi:HTMLElement,js=`<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>
    `,Ks=(t,e)=>{if(typeof CSSStyleSheet<"u"&&t.adoptedStyleSheets){let i=new CSSStyleSheet;i.replaceSync(e),t.adoptedStyleSheets=[i]}else{let i=document.createElement("style");i.rel="stylesheet",i.textContent=e,t.appendChild(i)}},Wt=class extends Us{constructor(){super(),this.attachShadow({mode:"open"})}static get nextButtonSvg(){return js}static get prevButtonSvg(){return js.replace("/></svg>",' transform-origin="center" transform="rotate(180)"/></svg>')}cssStyles(){return[Oo,...this.injectStyles&&Array.isArray(this.injectStyles)?this.injectStyles:[]].join(`
`)}cssLinks(){return this.injectStylesUrls||[]}calcSlideSlots(){let e=this.slideSlots||0,i=[...this.querySelectorAll("[slot^=slide-]")].map(s=>parseInt(s.getAttribute("slot").split("slide-")[1],10));if(this.slideSlots=i.length?Math.max(...i)+1:0,!!this.rendered){if(this.slideSlots>e)for(let s=e;s<this.slideSlots;s+=1){let r=document.createElement("swiper-slide");r.setAttribute("part",`slide slide-${s+1}`);let a=document.createElement("slot");a.setAttribute("name",`slide-${s+1}`),r.appendChild(a),this.shadowRoot.querySelector(".swiper-wrapper").appendChild(r)}else if(this.slideSlots<e){let s=this.swiper.slides;for(let r=s.length-1;r>=0;r-=1)r>this.slideSlots&&s[r].remove()}}}render(){if(this.rendered)return;this.calcSlideSlots();let e=this.cssStyles();this.slideSlots>0&&(e=e.replace(/::slotted\(([a-z-0-9.]*)\)/g,"$1")),e.length&&Ks(this.shadowRoot,e),this.cssLinks().forEach(s=>{if(this.shadowRoot.querySelector(`link[href="${s}"]`))return;let a=document.createElement("link");a.rel="stylesheet",a.href=s,this.shadowRoot.appendChild(a)});let i=document.createElement("div");i.classList.add("swiper"),i.part="container",te(i,`
      <slot name="container-start"></slot>
      <div class="swiper-wrapper" part="wrapper">
        <slot></slot>
        ${Array.from({length:this.slideSlots}).map((s,r)=>`
        <swiper-slide part="slide slide-${r}">
          <slot name="slide-${r}"></slot>
        </swiper-slide>
        `).join("")}
      </div>
      <slot name="container-end"></slot>
      ${Ns(this.passedParams)?`
        <div part="button-prev" class="swiper-button-prev">${this.constructor.prevButtonSvg}</div>
        <div part="button-next" class="swiper-button-next">${this.constructor.nextButtonSvg}</div>
      `:""}
      ${Gs(this.passedParams)?`
        <div part="pagination" class="swiper-pagination"></div>
      `:""}
      ${qs(this.passedParams)?`
        <div part="scrollbar" class="swiper-scrollbar"></div>
      `:""}
    `),this.shadowRoot.appendChild(i),this.rendered=!0}initialize(){var e=this;if(this.swiper&&this.swiper.initialized)return;let{params:i,passedParams:s}=Ai(this);this.swiperParams=i,this.passedParams=s,delete this.swiperParams.init,this.render(),this.swiper=new Fe(this.shadowRoot.querySelector(".swiper"),{...i.virtual?{}:{observer:!0},...i,touchEventsTarget:"container",onAny:function(r){r==="observerUpdate"&&e.calcSlideSlots();let a=i.eventsPrefix?`${i.eventsPrefix}${r.toLowerCase()}`:r.toLowerCase();for(var o=arguments.length,l=new Array(o>1?o-1:0),d=1;d<o;d++)l[d-1]=arguments[d];let c=new CustomEvent(a,{detail:l,bubbles:r!=="hashChange",cancelable:!0});e.dispatchEvent(c)}})}connectedCallback(){this.swiper&&this.swiper.initialized&&this.nested&&this.closest("swiper-slide")&&this.closest("swiper-slide").swiperLoopMoveDOM||this.init===!1||this.getAttribute("init")==="false"||this.initialize()}disconnectedCallback(){this.nested&&this.closest("swiper-slide")&&this.closest("swiper-slide").swiperLoopMoveDOM||this.swiper&&this.swiper.destroy&&this.swiper.destroy()}updateSwiperOnPropChange(e,i){let{params:s,passedParams:r}=Ai(this,e,i);this.passedParams=r,this.swiperParams=s,!(this.swiper&&this.swiper.params[e]===i)&&Ws({swiper:this.swiper,passedParams:this.passedParams,changedParams:[dt(e)],...e==="navigation"&&r[e]?{prevEl:".swiper-button-prev",nextEl:".swiper-button-next"}:{},...e==="pagination"&&r[e]?{paginationEl:".swiper-pagination"}:{},...e==="scrollbar"&&r[e]?{scrollbarEl:".swiper-scrollbar"}:{}})}attributeChangedCallback(e,i,s){this.swiper&&this.swiper.initialized&&(i==="true"&&s===null&&(s=!1),this.updateSwiperOnPropChange(e,s))}static get observedAttributes(){return lt.filter(i=>i.includes("_")).map(i=>i.replace(/[A-Z]/g,s=>`-${s}`).replace("_","").toLowerCase())}};lt.forEach(t=>{t!=="init"&&(t=t.replace("_",""),Object.defineProperty(Wt.prototype,t,{configurable:!0,get(){return(this.passedParams||{})[t]},set(e){this.passedParams||(this.passedParams={}),this.passedParams[t]=e,this.swiper&&this.swiper.initialized&&this.updateSwiperOnPropChange(t,e)}}))});var Li=class extends Us{constructor(){super(),this.attachShadow({mode:"open"})}render(){let e=this.lazy||this.getAttribute("lazy")===""||this.getAttribute("lazy")==="true";if(Ks(this.shadowRoot,Do),this.shadowRoot.appendChild(document.createElement("slot")),e){let i=document.createElement("div");i.classList.add("swiper-lazy-preloader"),i.part.add("preloader"),this.shadowRoot.appendChild(i)}}initialize(){this.render()}connectedCallback(){this.swiperLoopMoveDOM||this.initialize()}},Zs=()=>{typeof window>"u"||(window.customElements.get("swiper-container")||window.customElements.define("swiper-container",Wt),window.customElements.get("swiper-slide")||window.customElements.define("swiper-slide",Li))};typeof window<"u"&&(window.SwiperElementRegisterParams=t=>{lt.push(...t)});var Xt=globalThis,Yt=Xt.ShadowRoot&&(Xt.ShadyCSS===void 0||Xt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ki=Symbol(),Qs=new WeakMap,Tt=class{constructor(e,i,s){if(this._$cssResult$=!0,s!==ki)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o,i=this.t;if(Yt&&e===void 0){let s=i!==void 0&&i.length===1;s&&(e=Qs.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Qs.set(i,e))}return e}toString(){return this.cssText}},Js=t=>new Tt(typeof t=="string"?t:t+"",void 0,ki),K=(t,...e)=>{let i=t.length===1?t[0]:e.reduce((s,r,a)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[a+1],t[0]);return new Tt(i,t,ki)},er=(t,e)=>{if(Yt)t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(let i of e){let s=document.createElement("style"),r=Xt.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}},zi=Yt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(let s of e.cssRules)i+=s.cssText;return Js(i)})(t):t;var{is:Ro,defineProperty:Bo,getOwnPropertyDescriptor:Ho,getOwnPropertyNames:Vo,getOwnPropertySymbols:Fo,getPrototypeOf:No}=Object,jt=globalThis,tr=jt.trustedTypes,Go=tr?tr.emptyScript:"",qo=jt.reactiveElementPolyfillSupport,_t=(t,e)=>t,Ct={toAttribute(t,e){switch(e){case Boolean:t=t?Go:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Ut=(t,e)=>!Ro(t,e),ir={attribute:!0,type:String,converter:Ct,reflect:!1,useDefault:!1,hasChanged:Ut};Symbol.metadata??=Symbol("metadata"),jt.litPropertyMetadata??=new WeakMap;var Le=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=ir){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(e,i),!i.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(e,s,i);r!==void 0&&Bo(this.prototype,e,r)}}static getPropertyDescriptor(e,i,s){let{get:r,set:a}=Ho(this.prototype,e)??{get(){return this[i]},set(o){this[i]=o}};return{get:r,set(o){let l=r?.call(this);a?.call(this,o),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ir}static _$Ei(){if(this.hasOwnProperty(_t("elementProperties")))return;let e=No(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_t("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_t("properties"))){let i=this.properties,s=[...Vo(i),...Fo(i)];for(let r of s)this.createProperty(r,i[r])}let e=this[Symbol.metadata];if(e!==null){let i=litPropertyMetadata.get(e);if(i!==void 0)for(let[s,r]of i)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[i,s]of this.elementProperties){let r=this._$Eu(i,s);r!==void 0&&this._$Eh.set(r,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let i=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let r of s)i.unshift(zi(r))}else e!==void 0&&i.push(zi(e));return i}static _$Eu(e,i){let s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,i=this.constructor.elementProperties;for(let s of i.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return er(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,i,s){this._$AK(e,s)}_$ET(e,i){let s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){let a=(s.converter?.toAttribute!==void 0?s.converter:Ct).toAttribute(i,s.type);this._$Em=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,i){let s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let a=s.getPropertyOptions(r),o=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:Ct;this._$Em=r;let l=o.fromAttribute(i,a.type);this[r]=l??this._$Ej?.get(r)??l,this._$Em=null}}requestUpdate(e,i,s,r=!1,a){if(e!==void 0){let o=this.constructor;if(r===!1&&(a=this[e]),s??=o.getPropertyOptions(e),!((s.hasChanged??Ut)(a,i)||s.useDefault&&s.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,i,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,i,{useDefault:s,reflect:r,wrapped:a},o){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??i??this[e]),a!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(i=void 0),this._$AL.set(e,i)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,a]of s){let{wrapped:o}=a,l=this[r];o!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,a,l)}}let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(i)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(i)}willUpdate(e){}_$AE(e){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(e){}firstUpdated(e){}};Le.elementStyles=[],Le.shadowRootOptions={mode:"open"},Le[_t("elementProperties")]=new Map,Le[_t("finalized")]=new Map,qo?.({ReactiveElement:Le}),(jt.reactiveElementVersions??=[]).push("2.1.2");var Oi=globalThis,sr=t=>t,Kt=Oi.trustedTypes,rr=Kt?Kt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Di="$lit$",ke=`lit$${Math.random().toFixed(9).slice(2)}$`,Ri="?"+ke,Wo=`<${Ri}>`,Qe=document,$t=()=>Qe.createComment(""),At=t=>t===null||typeof t!="object"&&typeof t!="function",Bi=Array.isArray,cr=t=>Bi(t)||typeof t?.[Symbol.iterator]=="function",Ii=`[ 	
\f\r]`,Mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ar=/-->/g,or=/>/g,Ke=RegExp(`>|${Ii}(?:([^\\s"'>=/]+)(${Ii}*=${Ii}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nr=/'/g,lr=/"/g,pr=/^(?:script|style|textarea|title)$/i,Hi=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),ae=Hi(1),ur=Hi(2),fr=Hi(3),ze=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),dr=new WeakMap,Ze=Qe.createTreeWalker(Qe,129);function hr(t,e){if(!Bi(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return rr!==void 0?rr.createHTML(e):e}var mr=(t,e)=>{let i=t.length-1,s=[],r,a=e===2?"<svg>":e===3?"<math>":"",o=Mt;for(let l=0;l<i;l++){let d=t[l],c,p,f=-1,v=0;for(;v<d.length&&(o.lastIndex=v,p=o.exec(d),p!==null);)v=o.lastIndex,o===Mt?p[1]==="!--"?o=ar:p[1]!==void 0?o=or:p[2]!==void 0?(pr.test(p[2])&&(r=RegExp("</"+p[2],"g")),o=Ke):p[3]!==void 0&&(o=Ke):o===Ke?p[0]===">"?(o=r??Mt,f=-1):p[1]===void 0?f=-2:(f=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?Ke:p[3]==='"'?lr:nr):o===lr||o===nr?o=Ke:o===ar||o===or?o=Mt:(o=Ke,r=void 0);let h=o===Ke&&t[l+1].startsWith("/>")?" ":"";a+=o===Mt?d+Wo:f>=0?(s.push(c),d.slice(0,f)+Di+d.slice(f)+ke+h):d+ke+(f===-2?l:h)}return[hr(t,a+(t[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},Pt=class t{constructor({strings:e,_$litType$:i},s){let r;this.parts=[];let a=0,o=0,l=e.length-1,d=this.parts,[c,p]=mr(e,i);if(this.el=t.createElement(c,s),Ze.currentNode=this.el.content,i===2||i===3){let f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(r=Ze.nextNode())!==null&&d.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(let f of r.getAttributeNames())if(f.endsWith(Di)){let v=p[o++],h=r.getAttribute(f).split(ke),n=/([.?@])?(.*)/.exec(v);d.push({type:1,index:a,name:n[2],strings:h,ctor:n[1]==="."?Qt:n[1]==="?"?Jt:n[1]==="@"?ei:et}),r.removeAttribute(f)}else f.startsWith(ke)&&(d.push({type:6,index:a}),r.removeAttribute(f));if(pr.test(r.tagName)){let f=r.textContent.split(ke),v=f.length-1;if(v>0){r.textContent=Kt?Kt.emptyScript:"";for(let h=0;h<v;h++)r.append(f[h],$t()),Ze.nextNode(),d.push({type:2,index:++a});r.append(f[v],$t())}}}else if(r.nodeType===8)if(r.data===Ri)d.push({type:2,index:a});else{let f=-1;for(;(f=r.data.indexOf(ke,f+1))!==-1;)d.push({type:7,index:a}),f+=ke.length-1}a++}}static createElement(e,i){let s=Qe.createElement("template");return s.innerHTML=e,s}};function Je(t,e,i=t,s){if(e===ze)return e;let r=s!==void 0?i._$Co?.[s]:i._$Cl,a=At(e)?void 0:e._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),a===void 0?r=void 0:(r=new a(t),r._$AT(t,i,s)),s!==void 0?(i._$Co??=[])[s]=r:i._$Cl=r),r!==void 0&&(e=Je(t,r._$AS(t,e.values),r,s)),e}var Zt=class{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:i},parts:s}=this._$AD,r=(e?.creationScope??Qe).importNode(i,!0);Ze.currentNode=r;let a=Ze.nextNode(),o=0,l=0,d=s[0];for(;d!==void 0;){if(o===d.index){let c;d.type===2?c=new ct(a,a.nextSibling,this,e):d.type===1?c=new d.ctor(a,d.name,d.strings,this,e):d.type===6&&(c=new ti(a,this,e)),this._$AV.push(c),d=s[++l]}o!==d?.index&&(a=Ze.nextNode(),o++)}return Ze.currentNode=Qe,r}p(e){let i=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,i),i+=s.strings.length-2):s._$AI(e[i])),i++}},ct=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,i,s,r){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,i=this._$AM;return i!==void 0&&e?.nodeType===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=Je(this,e,i),At(e)?e===J||e==null||e===""?(this._$AH!==J&&this._$AR(),this._$AH=J):e!==this._$AH&&e!==ze&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):cr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==J&&At(this._$AH)?this._$AA.nextSibling.data=e:this.T(Qe.createTextNode(e)),this._$AH=e}$(e){let{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Pt.createElement(hr(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(i);else{let a=new Zt(r,this),o=a.u(this.options);a.p(i),this.T(o),this._$AH=a}}_$AC(e){let i=dr.get(e.strings);return i===void 0&&dr.set(e.strings,i=new Pt(e)),i}k(e){Bi(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,s,r=0;for(let a of e)r===i.length?i.push(s=new t(this.O($t()),this.O($t()),this,this.options)):s=i[r],s._$AI(a),r++;r<i.length&&(this._$AR(s&&s._$AB.nextSibling,r),i.length=r)}_$AR(e=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);e!==this._$AB;){let s=sr(e).nextSibling;sr(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},et=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,s,r,a){this.type=1,this._$AH=J,this._$AN=void 0,this.element=e,this.name=i,this._$AM=r,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=J}_$AI(e,i=this,s,r){let a=this.strings,o=!1;if(a===void 0)e=Je(this,e,i,0),o=!At(e)||e!==this._$AH&&e!==ze,o&&(this._$AH=e);else{let l=e,d,c;for(e=a[0],d=0;d<a.length-1;d++)c=Je(this,l[s+d],i,d),c===ze&&(c=this._$AH[d]),o||=!At(c)||c!==this._$AH[d],c===J?e=J:e!==J&&(e+=(c??"")+a[d+1]),this._$AH[d]=c}o&&!r&&this.j(e)}j(e){e===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Qt=class extends et{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===J?void 0:e}},Jt=class extends et{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==J)}},ei=class extends et{constructor(e,i,s,r,a){super(e,i,s,r,a),this.type=5}_$AI(e,i=this){if((e=Je(this,e,i,0)??J)===ze)return;let s=this._$AH,r=e===J&&s!==J||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==J&&(s===J||r);r&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ti=class{constructor(e,i,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Je(this,e)}},gr={M:Di,P:ke,A:Ri,C:1,L:mr,R:Zt,D:cr,V:Je,I:ct,H:et,N:Jt,U:ei,B:Qt,F:ti},Xo=Oi.litHtmlPolyfillSupport;Xo?.(Pt,ct),(Oi.litHtmlVersions??=[]).push("3.3.3");var vr=(t,e,i)=>{let s=i?.renderBefore??e,r=s._$litPart$;if(r===void 0){let a=i?.renderBefore??null;s._$litPart$=r=new ct(e.insertBefore($t(),a),a,void 0,i??{})}return r._$AI(t),r};var Vi=globalThis,Ge=class extends Le{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=vr(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ze}};Ge._$litElement$=!0,Ge.finalized=!0,Vi.litElementHydrateSupport?.({LitElement:Ge});var Yo=Vi.litElementPolyfillSupport;Yo?.({LitElement:Ge});(Vi.litElementVersions??=[]).push("4.2.2");var br=K`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;var Fi=new Set,pt=new Map,Ie,Ni="ltr",Gi="en",wr=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(wr){let t=new MutationObserver(yr);Ni=document.documentElement.dir||"ltr",Gi=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Lt(...t){t.map(e=>{let i=e.$code.toLowerCase();pt.has(i)?pt.set(i,Object.assign(Object.assign({},pt.get(i)),e)):pt.set(i,e),Ie||(Ie=e)}),yr()}function yr(){wr&&(Ni=document.documentElement.dir||"ltr",Gi=document.documentElement.lang||navigator.language),[...Fi.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var ii=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Fi.add(this.host)}hostDisconnected(){Fi.delete(this.host)}dir(){return`${this.host.dir||Ni}`.toLowerCase()}lang(){let e=`${this.host.lang||Gi}`.toLowerCase().replace(/_/g,"-");try{return new Intl.Locale(e),e}catch{return Ie?Ie.$code.toLowerCase():"en"}}getTranslationData(e){var i,s;let r;try{r=new Intl.Locale(e.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}let a=r.language.toLowerCase(),o=(s=(i=r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&s!==void 0?s:"",l=pt.get(`${a}-${o}`),d=pt.get(a);return{locale:r,language:a,region:o,primary:l,secondary:d}}exists(e,i){var s;let{primary:r,secondary:a}=this.getTranslationData((s=i.lang)!==null&&s!==void 0?s:this.lang());return i=Object.assign({includeFallback:!1},i),!!(r&&r[e]||a&&a[e]||i.includeFallback&&Ie&&Ie[e])}term(e,...i){let{primary:s,secondary:r}=this.getTranslationData(this.lang()),a;if(s&&s[e])a=s[e];else if(r&&r[e])a=r[e];else if(Ie&&Ie[e])a=Ie[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof a=="function"?a(...i):a}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(e,i)}};var xr={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Lt(xr);var Sr=xr;var qe=class extends ii{};Lt(Sr);var ie=K`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;var _r=Object.defineProperty,jo=Object.defineProperties,Uo=Object.getOwnPropertyDescriptor,Ko=Object.getOwnPropertyDescriptors,Er=Object.getOwnPropertySymbols,Zo=Object.prototype.hasOwnProperty,Qo=Object.prototype.propertyIsEnumerable,qi=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Wi=t=>{throw TypeError(t)},Tr=(t,e,i)=>e in t?_r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Se=(t,e)=>{for(var i in e||(e={}))Zo.call(e,i)&&Tr(t,i,e[i]);if(Er)for(var i of Er(e))Qo.call(e,i)&&Tr(t,i,e[i]);return t},ut=(t,e)=>jo(t,Ko(e)),O=(t,e,i,s)=>{for(var r=s>1?void 0:s?Uo(e,i):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(s?o(e,i,r):o(r))||r);return s&&r&&_r(e,i,r),r},Cr=(t,e,i)=>e.has(t)||Wi("Cannot "+i),Mr=(t,e,i)=>(Cr(t,e,"read from private field"),i?i.call(t):e.get(t)),$r=(t,e,i)=>e.has(t)?Wi("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Ar=(t,e,i,s)=>(Cr(t,e,"write to private field"),s?s.call(t,i):e.set(t,i),i),Jo=function(t,e){this[0]=t,this[1]=e},Pr=t=>{var e=t[qi("asyncIterator")],i=!1,s,r={};return e==null?(e=t[qi("iterator")](),s=a=>r[a]=o=>e[a](o)):(e=e.call(t),s=a=>r[a]=o=>{if(i){if(i=!1,a==="throw")throw o;return o}return i=!0,{done:!1,value:new Jo(new Promise(l=>{var d=e[a](o);d instanceof Object||Wi("Object expected"),l(d)}),1)}}),r[qi("iterator")]=()=>r,s("next"),"throw"in e?s("throw"):r.throw=a=>{throw a},"return"in e&&s("return"),r};var en={attribute:!0,type:String,converter:Ct,reflect:!1,hasChanged:Ut},tn=(t=en,e,i)=>{let{kind:s,metadata:r}=i,a=globalThis.litPropertyMetadata.get(r);if(a===void 0&&globalThis.litPropertyMetadata.set(r,a=new Map),s==="setter"&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),s==="accessor"){let{name:o}=i;return{set(l){let d=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,d,t,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,t,l),l}}}if(s==="setter"){let{name:o}=i;return function(l){let d=this[o];e.call(this,l),this.requestUpdate(o,d,t,!0,l)}}throw Error("Unsupported decorator location: "+s)};function V(t){return(e,i)=>typeof i=="object"?tn(t,e,i):((s,r,a)=>{let o=r.hasOwnProperty(a);return r.constructor.createProperty(a,s),o?Object.getOwnPropertyDescriptor(r,a):void 0})(t,e,i)}function oe(t){return V({...t,state:!0,attribute:!1})}var tt=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);function se(t,e){return(i,s,r)=>{let a=o=>o.renderRoot?.querySelector(t)??null;if(e){let{get:o,set:l}=typeof s=="object"?i:r??(()=>{let d=Symbol();return{get(){return this[d]},set(c){this[d]=c}}})();return tt(i,s,{get(){let d=o.call(this);return d===void 0&&(d=a(this),(d!==null||this.hasUpdated)&&l.call(this,d)),d}})}return tt(i,s,{get(){return a(this)}})}}var si,Z=class extends Ge{constructor(){super(),$r(this,si,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){let i=new CustomEvent(t,Se({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){let s=customElements.get(t);if(!s){try{customElements.define(t,e,i)}catch{customElements.define(t,class extends e{},i)}return}let r=" (unknown version)",a=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in s&&s.version&&(a=" v"+s.version),!(r&&a&&r===a)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${a} has already been registered.`)}attributeChangedCallback(t,e,i){Mr(this,si)||(this.constructor.elementProperties.forEach((s,r)=>{s.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),Ar(this,si,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}};si=new WeakMap;Z.version="2.20.1";Z.dependencies={};O([V()],Z.prototype,"dir",2);O([V()],Z.prototype,"lang",2);var Xi=class extends Z{constructor(){super(...arguments),this.localize=new qe(this)}render(){return ae`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Xi.styles=[ie,br];var kt=new WeakMap,zt=new WeakMap,It=new WeakMap,Yi=new WeakSet,ri=new WeakMap,ai=class{constructor(t,e){this.handleFormData=i=>{let s=this.options.disabled(this.host),r=this.options.name(this.host),a=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!s&&!o&&typeof r=="string"&&r.length>0&&typeof a<"u"&&(Array.isArray(a)?a.forEach(l=>{i.formData.append(r,l.toString())}):i.formData.append(r,a.toString()))},this.handleFormSubmit=i=>{var s;let r=this.options.disabled(this.host),a=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=kt.get(this.form))==null||s.forEach(o=>{this.setUserInteracted(o,!0)})),this.form&&!this.form.noValidate&&!r&&!a(this.host)&&(i.preventDefault(),i.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ri.set(this.host,[])},this.handleInteraction=i=>{let s=ri.get(this.host);s.includes(i.type)||s.push(i.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let i=this.form.querySelectorAll("*");for(let s of i)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let i=this.form.querySelectorAll("*");for(let s of i)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Se({form:i=>{let s=i.form;if(s){let a=i.getRootNode().querySelector(`#${s}`);if(a)return a}return i.closest("form")},name:i=>i.name,value:i=>i.value,defaultValue:i=>i.defaultValue,disabled:i=>{var s;return(s=i.disabled)!=null?s:!1},reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,s)=>i.value=s,assumeInteractionOn:["sl-input"]},e)}hostConnected(){let t=this.options.form(this.host);t&&this.attachForm(t),ri.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ri.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){let t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,kt.has(this.form)?kt.get(this.form).add(this.host):kt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),zt.has(this.form)||(zt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),It.has(this.form)||(It.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let t=kt.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),zt.has(this.form)&&(this.form.reportValidity=zt.get(this.form),zt.delete(this.form)),It.has(this.form)&&(this.form.checkValidity=It.get(this.form),It.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Yi.add(t):Yi.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){let i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{e.hasAttribute(s)&&i.setAttribute(s,e.getAttribute(s))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){let e=this.host,i=!!Yi.has(e),s=!!e.required;e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){let t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){let e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},ft=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Lr=Object.freeze(ut(Se({},ft),{valid:!1,valueMissing:!0})),kr=Object.freeze(ut(Se({},ft),{valid:!1,customError:!0}));var oi=K`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`;var We=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=i=>{let s=i.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};var ji="";function zr(t){ji=t}function Ir(t=""){if(!ji){let e=[...document.getElementsByTagName("script")],i=e.find(s=>s.hasAttribute("data-shoelace"));if(i)zr(i.getAttribute("data-shoelace"));else{let s=e.find(a=>/shoelace(\.min)?\.js($|\?)/.test(a.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(a.src)),r="";s&&(r=s.getAttribute("src")),zr(r.split("/").slice(0,-1).join("/"))}}return ji.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var sn={name:"default",resolver:t=>Ir(`assets/icons/${t}.svg`)},Or=sn;var Dr={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},rn={name:"system",resolver:t=>t in Dr?`data:image/svg+xml,${encodeURIComponent(Dr[t])}`:""},Rr=rn;var ni=[Or,Rr],li=[];function Br(t){li.push(t)}function Hr(t){li=li.filter(e=>e!==t)}function Ui(t){return ni.find(e=>e.name===t)}function Ki(t,e){Vr(t),ni.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),li.forEach(i=>{i.library===t&&i.setIcon()})}function Vr(t){ni=ni.filter(e=>e.name!==t)}var Fr=K`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function me(t,e){let i=Se({waitUntilFirstUpdate:!1},e);return(s,r)=>{let{update:a}=s,o=Array.isArray(t)?t:[t];s.update=function(l){o.forEach(d=>{let c=d;if(l.has(c)){let p=l.get(c),f=this[c];p!==f&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](p,f)}}),a.call(this,l)}}}var{I:_p}=gr;var Nr=(t,e)=>e===void 0?t?._$litType$!==void 0:t?._$litType$===e;var Ot=Symbol(),di=Symbol(),Zi,Qi=new Map,ue=class extends Z{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let s;if(e?.spriteSheet)return this.svg=ae`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(s=await fetch(t,{mode:"cors"}),!s.ok)return s.status===410?Ot:di}catch{return di}try{let r=document.createElement("div");r.innerHTML=await s.text();let a=r.firstElementChild;if(((i=a?.tagName)==null?void 0:i.toLowerCase())!=="svg")return Ot;Zi||(Zi=new DOMParser);let l=Zi.parseFromString(a.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):Ot}catch{return Ot}}connectedCallback(){super.connectedCallback(),Br(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Hr(this)}getIconSource(){let t=Ui(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;let{url:e,fromLibrary:i}=this.getIconSource(),s=i?Ui(this.library):void 0;if(!e){this.svg=null;return}let r=Qi.get(e);if(r||(r=this.resolveIcon(e,s),Qi.set(e,r)),!this.initialRender)return;let a=await r;if(a===di&&Qi.delete(e),e===this.getIconSource().url){if(Nr(a)){if(this.svg=a,s){await this.updateComplete;let o=this.shadowRoot.querySelector("[part='svg']");typeof s.mutator=="function"&&o&&s.mutator(o)}return}switch(a){case di:case Ot:this.svg=null,this.emit("sl-error");break;default:this.svg=a.cloneNode(!0),(t=s?.mutator)==null||t.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ue.styles=[ie,Fr];O([oe()],ue.prototype,"svg",2);O([V({reflect:!0})],ue.prototype,"name",2);O([V()],ue.prototype,"src",2);O([V()],ue.prototype,"label",2);O([V({reflect:!0})],ue.prototype,"library",2);O([me("label")],ue.prototype,"handleLabelChange",1);O([me(["name","src","library"])],ue.prototype,"setIcon",1);var Gr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qr=t=>(...e)=>({_$litDirective$:t,values:e}),ci=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,s){this._$Ct=e,this._$AM=i,this._$Ci=s}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};var Me=qr(class extends ci{constructor(t){if(super(t),t.type!==Gr.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(let s in e)e[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(e)}let i=t.element.classList;for(let s of this.st)s in e||(i.remove(s),this.st.delete(s));for(let s in e){let r=!!e[s];r===this.st.has(s)||this.nt?.has(s)||(r?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return ze}});var Xr=Symbol.for(""),an=t=>{if(t?.r===Xr)return t?._$litStatic$};var ht=(t,...e)=>({_$litStatic$:e.reduce((i,s,r)=>i+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+t[r+1],t[0]),r:Xr}),Wr=new Map,Ji=t=>(e,...i)=>{let s=i.length,r,a,o=[],l=[],d,c=0,p=!1;for(;c<s;){for(d=e[c];c<s&&(a=i[c],(r=an(a))!==void 0);)d+=r+e[++c],p=!0;c!==s&&l.push(a),o.push(d),c++}if(c===s&&o.push(e[s]),p){let f=o.join("$$lit$$");(e=Wr.get(f))===void 0&&(o.raw=o,Wr.set(f,e=o)),i=l}return t(e,...i)},Xe=Ji(ae),jp=Ji(ur),Up=Ji(fr);var Y=t=>t??J;var W=class extends Z{constructor(){super(...arguments),this.formControlController=new ai(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new We(this,"[default]","prefix","suffix"),this.localize=new qe(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:ft}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){let t=this.isLink(),e=t?ht`a`:ht`button`;return Xe`
      <${e}
        part="base"
        class=${Me({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${Y(t?void 0:this.disabled)}
        type=${Y(t?void 0:this.type)}
        title=${this.title}
        name=${Y(t?void 0:this.name)}
        value=${Y(t?void 0:this.value)}
        href=${Y(t&&!this.disabled?this.href:void 0)}
        target=${Y(t?this.target:void 0)}
        download=${Y(t?this.download:void 0)}
        rel=${Y(t?this.rel:void 0)}
        role=${Y(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Xe` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Xe`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};W.styles=[ie,oi];W.dependencies={"sl-icon":ue,"sl-spinner":Xi};O([se(".button")],W.prototype,"button",2);O([oe()],W.prototype,"hasFocus",2);O([oe()],W.prototype,"invalid",2);O([V()],W.prototype,"title",2);O([V({reflect:!0})],W.prototype,"variant",2);O([V({reflect:!0})],W.prototype,"size",2);O([V({type:Boolean,reflect:!0})],W.prototype,"caret",2);O([V({type:Boolean,reflect:!0})],W.prototype,"disabled",2);O([V({type:Boolean,reflect:!0})],W.prototype,"loading",2);O([V({type:Boolean,reflect:!0})],W.prototype,"outline",2);O([V({type:Boolean,reflect:!0})],W.prototype,"pill",2);O([V({type:Boolean,reflect:!0})],W.prototype,"circle",2);O([V()],W.prototype,"type",2);O([V()],W.prototype,"name",2);O([V()],W.prototype,"value",2);O([V()],W.prototype,"href",2);O([V()],W.prototype,"target",2);O([V()],W.prototype,"rel",2);O([V()],W.prototype,"download",2);O([V()],W.prototype,"form",2);O([V({attribute:"formaction"})],W.prototype,"formAction",2);O([V({attribute:"formenctype"})],W.prototype,"formEnctype",2);O([V({attribute:"formmethod"})],W.prototype,"formMethod",2);O([V({attribute:"formnovalidate",type:Boolean})],W.prototype,"formNoValidate",2);O([V({attribute:"formtarget"})],W.prototype,"formTarget",2);O([me("disabled",{waitUntilFirstUpdate:!0})],W.prototype,"handleDisabledChange",1);W.define("sl-button");var Yr=K`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*pi(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Pr(pi(t.shadowRoot.activeElement))))}function Ur(){return[...pi()].pop()}var jr=new WeakMap;function Kr(t){let e=jr.get(t);return e||(e=window.getComputedStyle(t,null),jr.set(t,e)),e}function on(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let e=Kr(t);return e.visibility!=="hidden"&&e.display!=="none"}function nn(t){let e=Kr(t),{overflowY:i,overflowX:s}=e;return i==="scroll"||s==="scroll"?!0:i!=="auto"||s!=="auto"?!1:t.scrollHeight>t.clientHeight&&i==="auto"||t.scrollWidth>t.clientWidth&&s==="auto"}function ln(t){let e=t.tagName.toLowerCase(),i=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(i)||i<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){let a=t.getRootNode(),o=`input[type='radio'][name="${t.getAttribute("name")}"]`,l=a.querySelector(`${o}:checked`);return l?l===t:a.querySelector(o)===t}return on(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:nn(t):!1}function dn(t,e){var i;return((i=t.getRootNode({composed:!0}))==null?void 0:i.host)!==e}function es(t){let e=new WeakMap,i=[];function s(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]")||e.has(r))return;e.set(r,!0),!i.includes(r)&&ln(r)&&i.push(r),r instanceof HTMLSlotElement&&dn(r,t)&&r.assignedElements({flatten:!0}).forEach(a=>{s(a)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&s(r.shadowRoot)}for(let a of r.children)s(a)}return s(t),i.sort((r,a)=>{let o=Number(r.getAttribute("tabindex"))||0;return(Number(a.getAttribute("tabindex"))||0)-o})}var Dt=[],Zr=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var i;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;let s=Ur();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";let r=es(this.element),a=r.findIndex(l=>l===s);this.previousFocus=this.currentFocus;let o=this.tabDirection==="forward"?1:-1;for(;;){a+o>=r.length?a=0:a+o<0?a=r.length-1:a+=o,this.previousFocus=this.currentFocus;let l=r[a];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||l&&this.possiblyHasTabbableChildren(l))return;e.preventDefault(),this.currentFocus=l,(i=this.currentFocus)==null||i.focus({preventScroll:!1});let d=[...pi()];if(d.includes(this.currentFocus)||!d.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Dt.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Dt=Dt.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Dt[Dt.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let t=es(this.element);if(!this.element.matches(":focus-within")){let e=t[0],i=t[t.length-1],s=this.tabDirection==="forward"?e:i;typeof s?.focus=="function"&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};var ts=new Set;function cn(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function pn(){let t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function ui(t){if(ts.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){let e=cn()+pn(),i=getComputedStyle(document.documentElement).scrollbarGutter;(!i||i==="auto")&&(i="stable"),e<2&&(i=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",i),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function fi(t){ts.delete(t),ts.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var Qr=t=>{var e;let{activeElement:i}=document;i&&t.contains(i)&&((e=document.activeElement)==null||e.blur())};var Jr=K`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;var fe=class extends Z{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=!!this.href,e=t?ht`a`:ht`button`;return Xe`
      <${e}
        part="base"
        class=${Me({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Y(t?void 0:this.disabled)}
        type=${Y(t?void 0:"button")}
        href=${Y(t?this.href:void 0)}
        target=${Y(t?this.target:void 0)}
        download=${Y(t?this.download:void 0)}
        rel=${Y(t&&this.target?"noreferrer noopener":void 0)}
        role=${Y(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Y(this.name)}
          library=${Y(this.library)}
          src=${Y(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};fe.styles=[ie,Jr];fe.dependencies={"sl-icon":ue};O([se(".icon-button")],fe.prototype,"button",2);O([oe()],fe.prototype,"hasFocus",2);O([V()],fe.prototype,"name",2);O([V()],fe.prototype,"library",2);O([V()],fe.prototype,"src",2);O([V()],fe.prototype,"href",2);O([V()],fe.prototype,"target",2);O([V()],fe.prototype,"download",2);O([V()],fe.prototype,"label",2);O([V({type:Boolean,reflect:!0})],fe.prototype,"disabled",2);var ta=new Map,un=new WeakMap;function fn(t){return t??{keyframes:[],options:{duration:0}}}function ea(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function be(t,e){ta.set(t,fn(e))}function mt(t,e,i){let s=un.get(t);if(s?.[e])return ea(s[e],i.dir);let r=ta.get(e);return r?ea(r,i.dir):{keyframes:[],options:{duration:0}}}function is(t,e){return new Promise(i=>{function s(r){r.target===t&&(t.removeEventListener(e,s),i())}t.addEventListener(e,s)})}function gt(t,e,i){return new Promise(s=>{if(i?.duration===1/0)throw new Error("Promise-based animations must be finite.");let r=t.animate(e,ut(Se({},i),{duration:hn()?0:i.duration}));r.addEventListener("cancel",s,{once:!0}),r.addEventListener("finish",s,{once:!0})})}function hn(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Rt(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}function ia(t){return t.charAt(0).toUpperCase()+t.slice(1)}var he=class extends Z{constructor(){super(...arguments),this.hasSlotController=new We(this,"footer"),this.localize=new qe(this),this.modal=new Zr(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),ui(this)))}disconnectedCallback(){super.disconnectedCallback(),fi(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let i=mt(this,"drawer.denyClose",{dir:this.localize.dir()});gt(this.panel,i.keyframes,i.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),ui(this));let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Rt(this.drawer),Rt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=mt(this,`drawer.show${ia(this.placement)}`,{dir:this.localize.dir()}),i=mt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([gt(this.panel,e.keyframes,e.options),gt(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{Qr(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),fi(this)),await Promise.all([Rt(this.drawer),Rt(this.overlay)]);let t=mt(this,`drawer.hide${ia(this.placement)}`,{dir:this.localize.dir()}),e=mt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([gt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),gt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;let i=this.originalTrigger;typeof i?.focus=="function"&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),ui(this)),this.open&&this.contained&&(this.modal.deactivate(),fi(this))}async show(){if(!this.open)return this.open=!0,is(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,is(this,"sl-after-hide")}render(){return ae`
      <div
        part="base"
        class=${Me({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Y(this.noHeader?this.label:void 0)}
          aria-labelledby=${Y(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":ae`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};he.styles=[ie,Yr];he.dependencies={"sl-icon-button":fe};O([se(".drawer")],he.prototype,"drawer",2);O([se(".drawer__panel")],he.prototype,"panel",2);O([se(".drawer__overlay")],he.prototype,"overlay",2);O([V({type:Boolean,reflect:!0})],he.prototype,"open",2);O([V({reflect:!0})],he.prototype,"label",2);O([V({reflect:!0})],he.prototype,"placement",2);O([V({type:Boolean,reflect:!0})],he.prototype,"contained",2);O([V({attribute:"no-header",type:Boolean,reflect:!0})],he.prototype,"noHeader",2);O([me("open",{waitUntilFirstUpdate:!0})],he.prototype,"handleOpenChange",1);O([me("contained",{waitUntilFirstUpdate:!0})],he.prototype,"handleNoModalChange",1);be("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});be("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});be("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});be("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});be("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});be("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});be("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});be("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});be("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});be("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});be("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});he.define("sl-drawer");ue.define("sl-icon");var sa=K`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`;var it=class extends Z{constructor(){super(...arguments),this.localize=new qe(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){let e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),i=2*Math.PI*e,s=i-this.value/100*i;this.indicatorOffset=`${s}px`}}render(){return ae`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};it.styles=[ie,sa];O([se(".progress-ring__indicator")],it.prototype,"indicator",2);O([oe()],it.prototype,"indicatorOffset",2);O([V({type:Number,reflect:!0})],it.prototype,"value",2);O([V()],it.prototype,"label",2);it.define("sl-progress-ring");var ra=K`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;var aa=K`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;var oa=K`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;var vt=class extends Z{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){let e=Bt(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){let e=Bt(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){let e=Bt(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){let e=Bt(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{let i=t.indexOf(e),s=Bt(e);s&&(s.toggleAttribute("data-sl-button-group__button",!0),s.toggleAttribute("data-sl-button-group__button--first",i===0),s.toggleAttribute("data-sl-button-group__button--inner",i>0&&i<t.length-1),s.toggleAttribute("data-sl-button-group__button--last",i===t.length-1),s.toggleAttribute("data-sl-button-group__button--radio",s.tagName.toLowerCase()==="sl-radio-button"))})}render(){return ae`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};vt.styles=[ie,oa];O([se("slot")],vt.prototype,"defaultSlot",2);O([oe()],vt.prototype,"disableRole",2);O([V()],vt.prototype,"label",2);function Bt(t){var e;let i="sl-button, sl-radio-button";return(e=t.closest(i))!=null?e:t.querySelector(i)}var re=class extends Z{constructor(){super(...arguments),this.formControlController=new ai(this),this.hasSlotController=new We(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){let t=this.required&&!this.value;return this.customValidityMessage!==""?kr:t?Lr:ft}get validationMessage(){let t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){let e=t.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),s=this.value;!e||e.disabled||(this.value=e.value,i.forEach(r=>r.checked=r===e),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;let i=this.getAllRadios().filter(l=>!l.disabled),s=(e=i.find(l=>l.checked))!=null?e:i[0],r=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,a=this.value,o=i.indexOf(s)+r;o<0&&(o=i.length-1),o>i.length-1&&(o=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||l.setAttribute("tabindex","-1")}),this.value=i[o].value,i[o].checked=!0,this.hasButtonGroup?i[o].shadowRoot.querySelector("button").focus():(i[o].setAttribute("tabindex","0"),i[o].focus()),this.value!==a&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;let i=this.getAllRadios();if(await Promise.all(i.map(async s=>{await s.updateComplete,s.checked=s.value===this.value,s.size=this.size})),this.hasButtonGroup=i.some(s=>s.tagName.toLowerCase()==="sl-radio-button"),i.length>0&&!i.some(s=>s.checked))if(this.hasButtonGroup){let s=(t=i[0].shadowRoot)==null?void 0:t.querySelector("button");s&&s.setAttribute("tabindex","0")}else i[0].setAttribute("tabindex","0");if(this.hasButtonGroup){let s=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");s&&(s.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){let t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){let t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){let e=this.getAllRadios(),i=e.find(a=>a.checked),s=e.find(a=>!a.disabled),r=i||s;r&&r.focus(t)}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,s=this.helpText?!0:!!e,r=ae`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return ae`
      <fieldset
        part="form-control"
        class=${Me({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?ae`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${r}
                </sl-button-group>
              `:r}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};re.styles=[ie,aa,ra];re.dependencies={"sl-button-group":vt};O([se("slot:not([name])")],re.prototype,"defaultSlot",2);O([se(".radio-group__validation-input")],re.prototype,"validationInput",2);O([oe()],re.prototype,"hasButtonGroup",2);O([oe()],re.prototype,"errorMessage",2);O([oe()],re.prototype,"defaultValue",2);O([V()],re.prototype,"label",2);O([V({attribute:"help-text"})],re.prototype,"helpText",2);O([V()],re.prototype,"name",2);O([V({reflect:!0})],re.prototype,"value",2);O([V({reflect:!0})],re.prototype,"size",2);O([V({reflect:!0})],re.prototype,"form",2);O([V({type:Boolean,reflect:!0})],re.prototype,"required",2);O([me("size",{waitUntilFirstUpdate:!0})],re.prototype,"handleSizeChange",1);O([me("value")],re.prototype,"handleValueChange",1);re.define("sl-radio-group");var na=K`
  ${oi}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`;var we=class extends Z{constructor(){super(...arguments),this.hasSlotController=new We(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Xe`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${Me({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${Y(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};we.styles=[ie,na];O([se(".button")],we.prototype,"input",2);O([se(".hidden-input")],we.prototype,"hiddenInput",2);O([oe()],we.prototype,"hasFocus",2);O([V({type:Boolean,reflect:!0})],we.prototype,"checked",2);O([V()],we.prototype,"value",2);O([V({type:Boolean,reflect:!0})],we.prototype,"disabled",2);O([V({reflect:!0})],we.prototype,"size",2);O([V({type:Boolean,reflect:!0})],we.prototype,"pill",2);O([me("disabled",{waitUntilFirstUpdate:!0})],we.prototype,"handleDisabledChange",1);we.define("sl-radio-button");var la=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"/>
</svg>`;var da=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
</svg>`;var ca=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar4" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
</svg>`;var pa=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>`;var ua=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
</svg>`;var fa=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
</svg>`;var ha=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
</svg>`;var Sn={sliders:la,google:da,calendar4:ca,"chevron-down":pa,activity:ua,"arrow-clockwise":fa,"arrow-left-right":ha};Ki("default",{resolver:t=>"data:image/svg+xml,"+encodeURIComponent(Sn[t]||"")});Zs();})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
