(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[982],{81749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let n=r(21024),o=r(68533)._(r(2265)),i=n._(r(54887)),a=n._(r(42251)),l=r(38630),s=r(76906),u=r(60337);r(76184);let c=r(46993),d=n._(r(10536)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e,t,r,n,o,i){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function m(e){let[t,r]=o.version.split(".",2),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let v=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:a,width:l,decoding:s,className:u,style:c,fetchPriority:d,placeholder:f,loading:v,unoptimized:g,fill:y,onLoadRef:w,onLoadingCompleteRef:h,setBlurComplete:b,setShowAltText:E,onLoad:_,onError:x,...C}=e;return o.default.createElement("img",{...C,...m(d),loading:v,width:l,height:a,decoding:s,"data-nimg":y?"fill":"1",className:u,style:c,sizes:i,srcSet:n,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&p(e,f,w,h,b,g))},[r,f,w,h,b,x,g,t]),onLoad:e=>{p(e.currentTarget,f,w,h,b,g)},onError:e=>{E(!0),"empty"!==f&&b(!0),x&&x(e)}})});function g(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&i.default.preload?(i.default.preload(r.src,n),null):o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let y=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(c.RouterContext),n=(0,o.useContext)(u.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=f||n||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:p}=e,m=(0,o.useRef)(a);(0,o.useEffect)(()=>{m.current=a},[a]);let y=(0,o.useRef)(p);(0,o.useEffect)(()=>{y.current=p},[p]);let[w,h]=(0,o.useState)(!1),[b,E]=(0,o.useState)(!1),{props:_,meta:x}=(0,l.getImgProps)(e,{defaultLoader:d.default,imgConf:i,blurComplete:w,showAltText:b});return o.default.createElement(o.default.Fragment,null,o.default.createElement(v,{..._,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:m,onLoadingCompleteRef:y,setBlurComplete:h,setShowAltText:E,ref:t}),x.priority?o.default.createElement(g,{isAppRouter:!r,imgAttributes:_}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2595:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(21024)._(r(2265)).default.createContext({})},43044:function(e,t){"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},38630:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(76184);let n=r(67160),o=r(76906);function i(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,s,u,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:m,className:v,quality:g,width:y,height:w,fill:h=!1,style:b,onLoad:E,onLoadingComplete:_,placeholder:x="empty",blurDataURL:C,fetchPriority:P,layout:T,objectFit:S,objectPosition:R,lazyBoundary:M,lazyRoot:O,...k}=e,{imgConf:j,showAltText:I,blurComplete:D,defaultLoader:A}=t,L=j||o.imageConfigDefault;if("allSizes"in L)l=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);l={...L,allSizes:e,deviceSizes:t}}let z=k.loader||A;delete k.loader,delete k.srcSet;let F="__next_img_default"in z;if(F){if("custom"===l.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=z;z=t=>{let{config:r,...n}=t;return e(n)}}if(T){"fill"===T&&(h=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[T];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[T];t&&!d&&(d=t)}let N="",W=a(y),V=a(w);if("object"==typeof(r=c)&&(i(r)||void 0!==r.src)){let e=i(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,C=C||e.blurDataURL,N=e.src,!h){if(W||V){if(W&&!V){let t=W/e.width;V=Math.round(e.height*t)}else if(!W&&V){let t=V/e.height;W=Math.round(e.width*t)}}else W=e.width,V=e.height}}let U=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:N)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,U=!1),l.unoptimized&&(f=!0),F&&c.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),p&&(P="high");let K=a(g),B=Object.assign(h?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:R}:{},I?{}:{color:"transparent"},b),$=D||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:W,heightInt:V,blurWidth:s,blurHeight:u,blurDataURL:C||"",objectFit:B.objectFit})+'")':'url("'+x+'")',Z=$?{backgroundSize:B.objectFit||"cover",backgroundPosition:B.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:$}:{},G=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,a),c=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,n)=>l({config:t,src:r,quality:i,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:l({config:t,src:r,quality:i,width:s[c]})}}({config:l,src:c,unoptimized:f,width:W,quality:K,sizes:d,loader:z});return{props:{...k,loading:U?"lazy":m,fetchPriority:P,width:W,height:V,decoding:"async",className:v,style:{...B,...Z},sizes:G.sizes,srcSet:G.srcSet,src:G.src},meta:{unoptimized:f,priority:p,placeholder:x,fill:h}}}},42251:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return u},default:function(){return p}});let n=r(21024),o=r(68533)._(r(2265)),i=n._(r(27392)),a=r(2595),l=r(27484),s=r(43044);function u(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(76184);let d=["name","httpEquiv","charSet","itemProp"];function f(e,t){let{inAmpMode:r}=t;return e.reduce(c,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let i=!0,a=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){a=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=d.length;e<t;e++){let t=d[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?i=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?i=!1:(r.add(e),n[t]=r)}}}}return i}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let p=function(e){let{children:t}=e,r=(0,o.useContext)(a.AmpStateContext),n=(0,o.useContext)(l.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:f,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},67160:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:a}=e,l=n?40*n:t,s=o?40*o:r,u=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},60337:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let n=r(21024)._(r(2265)),o=r(76906),i=n.default.createContext(o.imageConfigDefault)},76906:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},67447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return s},default:function(){return u}});let n=r(21024),o=r(38630),i=r(76184),a=r(81749),l=n._(r(10536)),s=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},u=a.Image},10536:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},27392:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(2265),o=n.useLayoutEffect,i=n.useEffect;function a(e){let{headManager:t,reduceComponentsToState:r}=e;function a(){if(t&&t.mountedInstances){let o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(o,e))}}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},76184:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},79507:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},16691:function(e,t,r){e.exports=r(67447)},91172:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function s(e){return function(t){return n.createElement(u,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,a({key:r},t.attr),e(t.child))})}(e.child))}}function u(e){var t=function(t){var r,o=e.attr,i=e.size,s=e.title,u=l(e,["attr","size","title"]),c=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,function(e){return t(e)}):t(o)}},27733:function(e,t,r){"use strict";r.d(t,{B:function(){return l}});var n=r(2265),o=r(56989),i=r(42210),a=r(67256);function l(e){let t=e+"CollectionProvider",[r,l]=(0,o.b)(t),[s,u]=r(t,{collectionRef:{current:null},itemMap:new Map}),c=e+"CollectionSlot",d=n.forwardRef((e,t)=>{let{scope:r,children:o}=e,l=u(c,r),s=(0,i.e)(t,l.collectionRef);return n.createElement(a.g7,{ref:s},o)}),f=e+"CollectionItemSlot",p="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:r}=e,o=n.useRef(null),i=n.useRef(new Map).current;return n.createElement(s,{scope:t,itemMap:i,collectionRef:o},r)},Slot:d,ItemSlot:n.forwardRef((e,t)=>{let{scope:r,children:o,...l}=e,s=n.useRef(null),c=(0,i.e)(t,s),d=u(f,r);return n.useEffect(()=>(d.itemMap.set(s,{ref:s,...l}),()=>void d.itemMap.delete(s))),n.createElement(a.g7,{[p]:"",ref:c},o)})},function(t){let r=u(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},l]}},18361:function(e,t,r){"use strict";r.d(t,{Dx:function(){return q},aU:function(){return X},dk:function(){return Y},fC:function(){return H},l_:function(){return G},x8:function(){return J},zt:function(){return Z}});var n=r(13428),o=r(2265),i=r(54887),a=r(85744),l=r(42210),s=r(27733),u=r(56989),c=r(79249),d=r(52730),f=r(85606),p=r(9381),m=r(16459),v=r(73763),g=r(51030),y=r(8281);let w="ToastProvider",[h,b,E]=(0,s.B)("Toast"),[_,x]=(0,u.b)("Toast",[E]),[C,P]=_(w),T=e=>{let{__scopeToast:t,label:r="Notification",duration:n=5e3,swipeDirection:i="right",swipeThreshold:a=50,children:l}=e,[s,u]=(0,o.useState)(null),[c,d]=(0,o.useState)(0),f=(0,o.useRef)(!1),p=(0,o.useRef)(!1);return(0,o.createElement)(h.Provider,{scope:t},(0,o.createElement)(C,{scope:t,label:r,duration:n,swipeDirection:i,swipeThreshold:a,toastCount:c,viewport:s,onViewportChange:u,onToastAdd:(0,o.useCallback)(()=>d(e=>e+1),[]),onToastRemove:(0,o.useCallback)(()=>d(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:p},l))};T.propTypes={label:e=>e.label&&"string"==typeof e.label&&!e.label.trim()?Error(`Invalid prop \`label\` supplied to \`${w}\`. Expected non-empty \`string\`.`):null};let S=["F8"],R="toast.viewportPause",M="toast.viewportResume",O=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,hotkey:i=S,label:a="Notifications ({hotkey})",...s}=e,u=P("ToastViewport",r),d=b(r),f=(0,o.useRef)(null),m=(0,o.useRef)(null),v=(0,o.useRef)(null),g=(0,o.useRef)(null),y=(0,l.e)(t,g,u.onViewportChange),w=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),E=u.toastCount>0;(0,o.useEffect)(()=>{let e=e=>{var t;i.every(t=>e[t]||e.code===t)&&(null===(t=g.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[i]),(0,o.useEffect)(()=>{let e=f.current,t=g.current;if(E&&e&&t){let r=()=>{if(!u.isClosePausedRef.current){let e=new CustomEvent(R);t.dispatchEvent(e),u.isClosePausedRef.current=!0}},n=()=>{if(u.isClosePausedRef.current){let e=new CustomEvent(M);t.dispatchEvent(e),u.isClosePausedRef.current=!1}},o=t=>{e.contains(t.relatedTarget)||n()},i=()=>{e.contains(document.activeElement)||n()};return e.addEventListener("focusin",r),e.addEventListener("focusout",o),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",i),window.addEventListener("blur",r),window.addEventListener("focus",n),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",o),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",i),window.removeEventListener("blur",r),window.removeEventListener("focus",n)}}},[E,u.isClosePausedRef]);let _=(0,o.useCallback)(({tabbingDirection:e})=>{let t=d().map(t=>{let r=t.ref.current,n=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===e?n:n.reverse()});return("forwards"===e?t.reverse():t).flat()},[d]);return(0,o.useEffect)(()=>{let e=g.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){var n,o,i;let r=document.activeElement,a=t.shiftKey;if(t.target===e&&a){null===(n=m.current)||void 0===n||n.focus();return}let l=_({tabbingDirection:a?"backwards":"forwards"}),s=l.findIndex(e=>e===r);$(l.slice(s+1))?t.preventDefault():a?null===(o=m.current)||void 0===o||o.focus():null===(i=v.current)||void 0===i||i.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[d,_]),(0,o.createElement)(c.I0,{ref:f,role:"region","aria-label":a.replace("{hotkey}",w),tabIndex:-1,style:{pointerEvents:E?void 0:"none"}},E&&(0,o.createElement)(k,{ref:m,onFocusFromOutsideViewport:()=>{$(_({tabbingDirection:"forwards"}))}}),(0,o.createElement)(h.Slot,{scope:r},(0,o.createElement)(p.WV.ol,(0,n.Z)({tabIndex:-1},s,{ref:y}))),E&&(0,o.createElement)(k,{ref:v,onFocusFromOutsideViewport:()=>{$(_({tabbingDirection:"backwards"}))}}))}),k=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:i,...a}=e,l=P("ToastFocusProxy",r);return(0,o.createElement)(y.T,(0,n.Z)({"aria-hidden":!0,tabIndex:0},a,{ref:t,style:{position:"fixed"},onFocus:e=>{var t;let r=e.relatedTarget;null!==(t=l.viewport)&&void 0!==t&&t.contains(r)||i()}}))}),j="Toast",I=(0,o.forwardRef)((e,t)=>{let{forceMount:r,open:i,defaultOpen:l,onOpenChange:s,...u}=e,[c=!0,d]=(0,v.T)({prop:i,defaultProp:l,onChange:s});return(0,o.createElement)(f.z,{present:r||c},(0,o.createElement)(L,(0,n.Z)({open:c},u,{ref:t,onClose:()=>d(!1),onPause:(0,m.W)(e.onPause),onResume:(0,m.W)(e.onResume),onSwipeStart:(0,a.M)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,a.M)(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${r}px`)}),onSwipeCancel:(0,a.M)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,a.M)(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${r}px`),d(!1)})})))}),[D,A]=_(j,{onClose(){}}),L=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,type:s="foreground",duration:u,open:d,onClose:f,onEscapeKeyDown:v,onPause:g,onResume:y,onSwipeStart:w,onSwipeMove:b,onSwipeCancel:E,onSwipeEnd:_,...x}=e,C=P(j,r),[T,S]=(0,o.useState)(null),O=(0,l.e)(t,e=>S(e)),k=(0,o.useRef)(null),I=(0,o.useRef)(null),A=u||C.duration,L=(0,o.useRef)(0),F=(0,o.useRef)(A),N=(0,o.useRef)(0),{onToastAdd:W,onToastRemove:V}=C,U=(0,m.W)(()=>{var e;(null==T?void 0:T.contains(document.activeElement))&&(null===(e=C.viewport)||void 0===e||e.focus()),f()}),$=(0,o.useCallback)(e=>{e&&e!==1/0&&(window.clearTimeout(N.current),L.current=new Date().getTime(),N.current=window.setTimeout(U,e))},[U]);(0,o.useEffect)(()=>{let e=C.viewport;if(e){let t=()=>{$(F.current),null==y||y()},r=()=>{let e=new Date().getTime()-L.current;F.current=F.current-e,window.clearTimeout(N.current),null==g||g()};return e.addEventListener(R,r),e.addEventListener(M,t),()=>{e.removeEventListener(R,r),e.removeEventListener(M,t)}}},[C.viewport,A,g,y,$]),(0,o.useEffect)(()=>{d&&!C.isClosePausedRef.current&&$(A)},[d,A,C.isClosePausedRef,$]),(0,o.useEffect)(()=>(W(),()=>V()),[W,V]);let Z=(0,o.useMemo)(()=>T?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let n=t.ariaHidden||t.hidden||"none"===t.style.display,o=""===t.dataset.radixToastAnnounceExclude;if(!n){if(o){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(T):null,[T]);return C.viewport?(0,o.createElement)(o.Fragment,null,Z&&(0,o.createElement)(z,{__scopeToast:r,role:"status","aria-live":"foreground"===s?"assertive":"polite","aria-atomic":!0},Z),(0,o.createElement)(D,{scope:r,onClose:U},(0,i.createPortal)((0,o.createElement)(h.ItemSlot,{scope:r},(0,o.createElement)(c.fC,{asChild:!0,onEscapeKeyDown:(0,a.M)(v,()=>{C.isFocusedToastEscapeKeyDownRef.current||U(),C.isFocusedToastEscapeKeyDownRef.current=!1})},(0,o.createElement)(p.WV.li,(0,n.Z)({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":d?"open":"closed","data-swipe-direction":C.swipeDirection},x,{ref:O,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,a.M)(e.onKeyDown,e=>{"Escape"!==e.key||(null==v||v(e.nativeEvent),e.nativeEvent.defaultPrevented||(C.isFocusedToastEscapeKeyDownRef.current=!0,U()))}),onPointerDown:(0,a.M)(e.onPointerDown,e=>{0===e.button&&(k.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,a.M)(e.onPointerMove,e=>{if(!k.current)return;let t=e.clientX-k.current.x,r=e.clientY-k.current.y,n=!!I.current,o=["left","right"].includes(C.swipeDirection),i=["left","up"].includes(C.swipeDirection)?Math.min:Math.max,a=o?i(0,t):0,l=o?0:i(0,r),s="touch"===e.pointerType?10:2,u={x:a,y:l},c={originalEvent:e,delta:u};n?(I.current=u,K("toast.swipeMove",b,c,{discrete:!1})):B(u,C.swipeDirection,s)?(I.current=u,K("toast.swipeStart",w,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>s||Math.abs(r)>s)&&(k.current=null)}),onPointerUp:(0,a.M)(e.onPointerUp,e=>{let t=I.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),I.current=null,k.current=null,t){let r=e.currentTarget,n={originalEvent:e,delta:t};B(t,C.swipeDirection,C.swipeThreshold)?K("toast.swipeEnd",_,n,{discrete:!0}):K("toast.swipeCancel",E,n,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})))),C.viewport))):null});L.propTypes={type:e=>e.type&&!["foreground","background"].includes(e.type)?Error(`Invalid prop \`type\` supplied to \`${j}\`. Expected \`foreground | background\`.`):null};let z=e=>{let{__scopeToast:t,children:r,...n}=e,i=P(j,t),[a,l]=(0,o.useState)(!1),[s,u]=(0,o.useState)(!1);return function(e=()=>{}){let t=(0,m.W)(e);(0,g.b)(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>l(!0)),(0,o.useEffect)(()=>{let e=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(e)},[]),s?null:(0,o.createElement)(d.h,{asChild:!0},(0,o.createElement)(y.T,n,a&&(0,o.createElement)(o.Fragment,null,i.label," ",r)))},F=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,...i}=e;return(0,o.createElement)(p.WV.div,(0,n.Z)({},i,{ref:t}))}),N=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,...i}=e;return(0,o.createElement)(p.WV.div,(0,n.Z)({},i,{ref:t}))}),W=(0,o.forwardRef)((e,t)=>{let{altText:r,...i}=e;return r?(0,o.createElement)(U,{altText:r,asChild:!0},(0,o.createElement)(V,(0,n.Z)({},i,{ref:t}))):null});W.propTypes={altText:e=>e.altText?null:Error("Missing prop `altText` expected on `ToastAction`")};let V=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,...i}=e,l=A("ToastClose",r);return(0,o.createElement)(U,{asChild:!0},(0,o.createElement)(p.WV.button,(0,n.Z)({type:"button"},i,{ref:t,onClick:(0,a.M)(e.onClick,l.onClose)})))}),U=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,altText:i,...a}=e;return(0,o.createElement)(p.WV.div,(0,n.Z)({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0},a,{ref:t}))});function K(e,t,r,{discrete:n}){let o=r.originalEvent.currentTarget,i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&o.addEventListener(e,t,{once:!0}),n?(0,p.jH)(o,i):o.dispatchEvent(i)}let B=(e,t,r=0)=>{let n=Math.abs(e.x),o=Math.abs(e.y),i=n>o;return"left"===t||"right"===t?i&&n>r:!i&&o>r};function $(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}let Z=T,G=O,H=I,q=F,Y=N,X=W,J=V}}]);