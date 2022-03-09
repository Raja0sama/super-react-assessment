/*! For license information please see 312.2c4fabb4.chunk.js.LICENSE.txt */
(self.webpackChunksuper_react=self.webpackChunksuper_react||[]).push([[312],{8223:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});n(2791);var r=n(184),o=function(){return(0,r.jsx)("div",{"data-testid":"Footer",className:"p-5 border-t flex justify-center",children:(0,r.jsxs)("span",{children:["Made with \u2764\ufe0f, React and NestJS by"," ",(0,r.jsx)("a",{href:"https://rajaosama.me/",children:(0,r.jsx)("u",{children:"Raja Osama"})})]})})},a=n(6871),i=function(e){var t=e.back,n=(0,a.s0)();return(0,r.jsxs)("div",{className:"w-full border-b border-white-200 h-14 flex items-center p-5","data-testid":"Header",children:[t&&(0,r.jsx)("div",{className:"text-2xl mr-10 cursor-pointer",onClick:function(){n(-1)},children:"\ud83d\udc48\ud83c\udffb"}),(0,r.jsx)("p",{children:"Code Assessment \ud83e\udd16"})]})},s=function(e){var t=e.children,n=e.back;return(0,r.jsxs)("div",{className:"flex flex-col h-screen m-w-screen bg-bg text-white","data-testid":"Layout",children:[(0,r.jsx)(i,{back:n}),(0,r.jsxs)("div",{className:"h-full overflow-scroll",children:[t,(0,r.jsx)(o,{})]})]})}},1312:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(885),o=n(2791),a=n(184),i=function(e){var t,n,r=e.type,o=e.children;return"primary"===r&&(t="bg-glow text-bg"),"secondary"===r&&(t="bg-white text-black"),"small"===n&&(n="p1 px-4 text-md"),"medium"===n&&(n="p1 px-4 text-lg"),"large"===n&&(n="p1 px-4 text-2xl"),(0,a.jsx)("button",{"data-testid":"Button",className:"p-1 pr-4 pl-4 rounded-md bg-glow text-bg ".concat(t," ").concat(n),children:o})},s=n(8223),l=n(7677),c=n.n(l),u=n(8262),d=n.n(u),f=n(6071),p=n.n(f);function y(e){return y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){return w(w({},e),{},{height:0,width:0,playerVars:w(w({},e.playerVars),{},{autoplay:0,start:0,end:0})})}var S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(i,e);var t,n,r,a=m(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),j(b(t=a.call(this,e)),"onPlayerReady",(function(e){return t.props.onReady(e)})),j(b(t),"onPlayerError",(function(e){return t.props.onError(e)})),j(b(t),"onPlayerStateChange",(function(e){switch(t.props.onStateChange(e),e.data){case i.PlayerState.ENDED:t.props.onEnd(e);break;case i.PlayerState.PLAYING:t.props.onPlay(e);break;case i.PlayerState.PAUSED:t.props.onPause(e)}})),j(b(t),"onPlayerPlaybackRateChange",(function(e){return t.props.onPlaybackRateChange(e)})),j(b(t),"onPlayerPlaybackQualityChange",(function(e){return t.props.onPlaybackQualityChange(e)})),j(b(t),"createPlayer",(function(){if("undefined"!==typeof document){var e=w(w({},t.props.opts),{},{videoId:t.props.videoId});t.internalPlayer=p()(t.container,e),t.internalPlayer.on("ready",t.onPlayerReady),t.internalPlayer.on("error",t.onPlayerError),t.internalPlayer.on("stateChange",t.onPlayerStateChange),t.internalPlayer.on("playbackRateChange",t.onPlayerPlaybackRateChange),t.internalPlayer.on("playbackQualityChange",t.onPlayerPlaybackQualityChange)}})),j(b(t),"resetPlayer",(function(){return t.internalPlayer.destroy().then(t.createPlayer)})),j(b(t),"updatePlayer",(function(){t.internalPlayer.getIframe().then((function(e){t.props.id?e.setAttribute("id",t.props.id):e.removeAttribute("id"),t.props.className?e.setAttribute("class",t.props.className):e.removeAttribute("class"),t.props.opts&&t.props.opts.width?e.setAttribute("width",t.props.opts.width):e.removeAttribute("width"),t.props.opts&&t.props.opts.height?e.setAttribute("height",t.props.opts.height):e.removeAttribute("height"),"string"===typeof t.props.title?e.setAttribute("title",t.props.title):e.setAttribute("title","YouTube video player")}))})),j(b(t),"getInternalPlayer",(function(){return t.internalPlayer})),j(b(t),"updateVideo",(function(){if("undefined"!==typeof t.props.videoId&&null!==t.props.videoId){var e=!1,n={videoId:t.props.videoId};"playerVars"in t.props.opts&&(e=1===t.props.opts.playerVars.autoplay,"start"in t.props.opts.playerVars&&(n.startSeconds=t.props.opts.playerVars.start),"end"in t.props.opts.playerVars&&(n.endSeconds=t.props.opts.playerVars.end)),e?t.internalPlayer.loadVideoById(n):t.internalPlayer.cueVideoById(n)}else t.internalPlayer.stopVideo()})),j(b(t),"refContainer",(function(e){t.container=e})),t.container=null,t.internalPlayer=null,t}return t=i,(n=[{key:"componentDidMount",value:function(){this.createPlayer()}},{key:"componentDidUpdate",value:function(e){(function(e,t){return e.id!==t.id||e.className!==t.className||e.opts.width!==t.opts.width||e.opts.height!==t.opts.height||e.title!==t.title})(e,this.props)&&this.updatePlayer(),function(e,t){return e.videoId!==t.videoId||!d()(E(e.opts),E(t.opts))}(e,this.props)&&this.resetPlayer(),function(e,t){if(e.videoId!==t.videoId)return!0;var n=e.opts.playerVars||{},r=t.opts.playerVars||{};return n.start!==r.start||n.end!==r.end}(e,this.props)&&this.updateVideo()}},{key:"componentWillUnmount",value:function(){this.internalPlayer.destroy()}},{key:"render",value:function(){return o.createElement("div",{className:this.props.containerClassName},o.createElement("div",{id:this.props.id,className:this.props.className,ref:this.refContainer,loading:this.props.loading}))}}])&&h(t.prototype,n),r&&h(t,r),i}(o.Component);j(S,"PlayerState",{UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5}),S.propTypes={videoId:c().string,id:c().string,className:c().string,containerClassName:c().string,title:c().string,loading:c().oneOf(["lazy","eager","auto"]),opts:c().objectOf(c().any),onReady:c().func,onError:c().func,onPlay:c().func,onPause:c().func,onEnd:c().func,onStateChange:c().func,onPlaybackRateChange:c().func,onPlaybackQualityChange:c().func},S.defaultProps={videoId:null,id:null,className:null,loading:null,opts:{},containerClassName:"",onReady:function(){},onError:function(){},onPlay:function(){},onPause:function(){},onEnd:function(){},onStateChange:function(){},onPlaybackRateChange:function(){},onPlaybackQualityChange:function(){},title:null};var O=S,C=n(5964),k=n(6030),N=n(6871),_=function(){var e,t=(0,N.UO)().id,n=C.Sz.app,l=(0,k.I0)(),c=(0,o.useState)(),u=(0,r.Z)(c,2),d=u[0],f=u[1],p=(0,o.useState)(),y=(0,r.Z)(p,2),h=y[0],v=y[1];(0,o.useEffect)((function(){l(n.movieById()({id:t,onSuccess:m}))}),[]);var m=function(e){f(e)};if(!d)return(0,a.jsx)("div",{children:"Loading..."});var g=null===d||void 0===d||null===(e=d.genres)||void 0===e?void 0:e.map((function(e){return e.name})).join(", ");return(0,a.jsx)(s.Z,{back:!0,"data-testid":"MovieDetails",children:(0,a.jsxs)("div",{className:"max-w-screen-lg m-auto p-5 flex justify-center flex-col ",children:[(0,a.jsxs)("div",{className:"grid gap-5 grid-cols-1 md:grid-cols-2 ",children:[(0,a.jsx)("div",{className:" w-full",children:(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(null===d||void 0===d?void 0:d.poster_path)})}),(0,a.jsxs)("div",{className:"flex w-full flex-col justify-center",children:[(0,a.jsx)("p",{className:"text-5xl",children:"Movie details"}),(0,a.jsx)("br",{}),(0,a.jsx)("h1",{className:"text-2xl",children:null===d||void 0===d?void 0:d.original_title}),(0,a.jsxs)("p",{children:[null===d||void 0===d?void 0:d.tagline," \u2b50\ufe0f ",null===d||void 0===d?void 0:d.vote_average," (Vote count"," ",null===d||void 0===d?void 0:d.vote_count,")"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"GENRE : "}),g]}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{children:(0,a.jsx)(i,{type:"secondary",children:null===d||void 0===d?void 0:d.status})}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:null===d||void 0===d?void 0:d.overview}),(0,a.jsx)("br",{}),(0,a.jsx)("h1",{className:"text-3xl",children:"Videos"}),(0,a.jsx)("p",{children:"The below boxes are the videos and content regarding the movies and clickable"}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{className:"flex flex-wrap",children:null===d||void 0===d?void 0:d.videos.results.map((function(e){return(0,a.jsx)("a",{href:"#video",onClick:function(){return v(e)},className:"cursor-pointer p-2 border m-2",children:e.name},e.id)}))})]})]}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-xl text-center",children:"Production Company "}),(0,a.jsx)("div",{className:"flex flex-wrap justify-center",children:null===d||void 0===d?void 0:d.production_companies.map((function(e){return(0,a.jsx)("div",{className:"cursor-pointer p-2 border m-2",children:e.name},e.id)}))})]}),(0,a.jsx)("div",{id:"video",children:h&&(0,a.jsxs)("div",{children:[(0,a.jsx)("hr",{style:{margin:"20px 0"}}),(0,a.jsxs)("h1",{className:"text-3xl",children:["Videos : ",h.name]}),(0,a.jsx)(O,{videoId:h.key,opts:{playerVars:{autoplay:1}}})]})})]})})}},8262:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,a;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!==o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!==o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!==o--;){var i=a[o];if(!e(t[i],n[i]))return!1}return!0}return t!==t&&n!==n}},5102:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function n(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,r,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof r&&(o=r,r={}),r=r||{},o=o||function(){},i.type=r.type||"text/javascript",i.charset=r.charset||"utf8",i.async=!("async"in r)||!!r.async,i.src=e,r.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,r.attrs),r.text&&(i.text=""+r.text),("onload"in i?t:n)(i,o),i.onload||t(i,o),a.appendChild(i)}},9938:function(e,t,n){"use strict";var r=n(5315);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},7677:function(e,t,n){e.exports=n(9938)()},5315:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3457:function(e){"use strict";var t;t=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,o=t[e];if(o)for(r=o.length;r--;)o[r].handler(n)},e},e.exports=t},6364:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(5439),a=(r=o)&&r.__esModule?r:{default:r};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},1698:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(2788)),o=s(n(5506)),a=s(n(626)),i=s(n(6364));function s(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.default)("youtube-player"),c={proxyEvents:function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){l('event "%s"',r,t),e.trigger(n,t)}},r=!0,o=!1,i=void 0;try{for(var s,c=a.default[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){n(s.value)}}catch(u){o=!0,i=u}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},r=function(r){t&&i.default[r]?n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){var t=i.default[r],o=e.getPlayerState(),a=e[r].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(o)?new Promise((function(n){e.addEventListener("onStateChange",(function r(){var o=e.getPlayerState(),a=void 0;"number"===typeof t.timeout&&(a=setTimeout((function(){e.removeEventListener("onStateChange",r),n()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",r),clearTimeout(a),n())}))})).then((function(){return a})):a}))}:n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){return e[r].apply(e,n)}))}},a=!0,s=!1,l=void 0;try{for(var c,u=o.default[Symbol.iterator]();!(a=(c=u.next()).done);a=!0){var d=c.value;r(d)}}catch(f){s=!0,l=f}finally{try{!a&&u.return&&u.return()}finally{if(s)throw l}}return n}};t.default=c,e.exports=t.default},5439:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},626:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},5506:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},6071:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=s(n(3457)),a=s(n(1642)),i=s(n(1698));function s(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,o.default)();if(l||(l=(0,a.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"===typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(s);var c=new Promise((function(n){"object"===("undefined"===typeof e?"undefined":r(e))&&e.playVideo instanceof Function?n(e):l.then((function(r){var o=new r.Player(e,t);return s.on("ready",(function(){n(o)})),null}))})),u=i.default.promisifyPlayer(c,n);return u.on=s.on,u.off=s.off,u},e.exports=t.default},1642:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(5102),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,a.default)(n+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){r&&r(),t(window.YT)}}}))},e.exports=t.default},2788:function(e,t,n){function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!==typeof process&&"env"in process&&(e={NODE_ENV:"production",PUBLIC_URL:"/super-react-assessment",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.DEBUG),e}(t=e.exports=n(3572)).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())},3572:function(e,t,n){var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,a=o-(r||o);e.diff=a,e.prev=r,e.curr=o,r=o;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!==typeof i[0]&&i.unshift("%O");var l=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;l++;var o=t.formatters[r];if("function"===typeof o){var a=i[l];n=o.call(e,a),i.splice(l,1),l--}return n})),t.formatArgs.call(e,i);var c=n.log||t.log||console.log.bind(console);c.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"===typeof t.init&&t.init(n),n}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"===typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(9426),t.names=[],t.skips=[],t.formatters={}},9426:function(e){var t=1e3,n=60*t,r=60*n,o=24*r,a=365.25*o;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,s){s=s||{};var l,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var i=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!i)return;var s=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*a;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*n;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===c&&!1===isNaN(e))return s.long?i(l=e,o,"day")||i(l,r,"hour")||i(l,n,"minute")||i(l,t,"second")||l+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}}]);
//# sourceMappingURL=312.2c4fabb4.chunk.js.map