(self["webpackChunkjdzj"]=self["webpackChunkjdzj"]||[]).push([[100],{6457:function(t,i,e){"use strict";e.r(i),e.d(i,{default:function(){return si}});var n=function(){var t=this,i=t._self._c;return i("div",{staticClass:"home-page"},[i("home-header"),i("home-tab-list",{attrs:{channelList:t.channelList}})],1)},s=[],o=(e(560),function(){var t=this,i=t._self._c;return i("div",{staticClass:"header"},[i("div",{staticClass:"header-input",on:{click:t.toSearch}},[i("van-icon",{staticClass:"search-icon",attrs:{name:"search"}}),t._v(" 搜索你想看的影视 ")],1),i("div",{staticClass:"header-right",on:{click:t.toHistory}},[i("van-icon",{staticClass:"history-icon",attrs:{name:"clock-o"}})],1)])}),a=[],r=e(1392),l=(e(9588),{name:"HomeHeader",components:{[r.Z.name]:r.Z},methods:{toHistory(){this.$router.push({path:"/history"})},toSearch(){this.$router.push({path:"/search"})}}}),c=l,h=e(1001),u=(0,h.Z)(c,o,a,!1,null,"b0be7c5c",null),d=u.exports,f=function(){var t=this,i=t._self._c;return i("div",{staticClass:"tabList"},[i("van-tabs",{attrs:{swipeable:"",sticky:"","offset-top":".85rem",color:"#41ae9c","title-active-color":"#222222","title-inactive-color":"#555555","line-height":".05rem","line-width":".5rem"},model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},t._l(t.channelList,(function(t){return i("van-tab",{key:t.id,staticClass:"vanTab",attrs:{title:t.mz}},[0===t.id?i("div",[i("tab-recommend")],1):i("div",[i("tab-vod-list",{attrs:{channel:t}})],1)])})),1)],1)},p=[],v=e(2787),m=e(789),g=e(8546),y=Date.now();function b(t){var i=Date.now(),e=Math.max(0,16-(i-y)),n=setTimeout(t,e);return y=i+e,n}var w=g.sk?e.g:window,x=w.requestAnimationFrame||b;w.cancelAnimationFrame||w.clearTimeout;function S(t){return x.call(w,t)}function C(t){S((function(){S(t)}))}var k=e(1750);function $(t,i,e){var n=0,s=t.scrollLeft,o=0===e?1:Math.round(1e3*e/16);function a(){t.scrollLeft+=(i-s)/o,++n<o&&S(a)}a()}function T(t,i,e,n){var s=(0,k.cx)(t),o=s<i,a=0===e?1:Math.round(1e3*e/16),r=(i-s)/a;function l(){s+=r,(o&&s>i||!o&&s<i)&&(s=i),(0,k.QU)(t,s),o&&s<i||!o&&s>i?S(l):n&&S(n)}l()}var I=e(7692),z=e(591),O=e(5566),L=e(1541),N=e(7851),B=e(6108),P=e(9045),V=e(7937),D=(0,v.d)("tab"),E=D[0],H=D[1],X=E({props:{dot:Boolean,type:String,info:[Number,String],color:String,title:String,isActive:Boolean,disabled:Boolean,scrollable:Boolean,activeColor:String,inactiveColor:String},computed:{style:function(){var t={},i=this.color,e=this.isActive,n="card"===this.type;i&&n&&(t.borderColor=i,this.disabled||(e?t.backgroundColor=i:t.color=i));var s=e?this.activeColor:this.inactiveColor;return s&&(t.color=s),t}},methods:{onClick:function(){this.$emit("click")},genText:function(){var t=this.$createElement,i=t("span",{class:H("text",{ellipsis:!this.scrollable})},[this.slots()||this.title]);return this.dot||(0,g.Xq)(this.info)&&""!==this.info?t("span",{class:H("text-wrapper")},[i,t(V.Z,{attrs:{dot:this.dot,info:this.info}})]):i}},render:function(){var t=arguments[0];return t("div",{attrs:{role:"tab","aria-selected":this.isActive},class:[H({active:this.isActive,disabled:this.disabled})],style:this.style,on:{click:this.onClick}},[this.genText()])}}),Z=e(2163),_=e(7378),W=e(4611),M=(0,v.d)("tabs"),A=M[0],q=M[1],R=50,Y=A({mixins:[W.D],props:{count:Number,duration:[Number,String],animated:Boolean,swipeable:Boolean,currentIndex:Number},computed:{style:function(){if(this.animated)return{transform:"translate3d("+-1*this.currentIndex*100+"%, 0, 0)",transitionDuration:this.duration+"s"}},listeners:function(){if(this.swipeable)return{touchstart:this.touchStart,touchmove:this.touchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}}},methods:{onTouchEnd:function(){var t=this.direction,i=this.deltaX,e=this.currentIndex;"horizontal"===t&&this.offsetX>=R&&(i>0&&0!==e?this.$emit("change",e-1):i<0&&e!==this.count-1&&this.$emit("change",e+1))},genChildren:function(){var t=this.$createElement;return this.animated?t("div",{class:q("track"),style:this.style},[this.slots()]):this.slots()}},render:function(){var t=arguments[0];return t("div",{class:q("content",{animated:this.animated}),on:(0,_.Z)({},this.listeners)},[this.genChildren()])}}),j=(0,v.d)("tabs"),F=j[0],U=j[1],G=F({mixins:[(0,B.G)("vanTabs"),(0,P.X)((function(t){this.scroller||(this.scroller=(0,k.Ob)(this.$el)),t(window,"resize",this.resize,!0),this.scrollspy&&t(this.scroller,"scroll",this.onScroll,!0)}))],inject:{vanPopup:{default:null}},model:{prop:"active"},props:{color:String,border:Boolean,sticky:Boolean,animated:Boolean,swipeable:Boolean,scrollspy:Boolean,background:String,lineWidth:[Number,String],lineHeight:[Number,String],beforeChange:Function,titleActiveColor:String,titleInactiveColor:String,type:{type:String,default:"line"},active:{type:[Number,String],default:0},ellipsis:{type:Boolean,default:!0},duration:{type:[Number,String],default:.3},offsetTop:{type:[Number,String],default:0},lazyRender:{type:Boolean,default:!0},swipeThreshold:{type:[Number,String],default:5}},data:function(){return{position:"",currentIndex:null,lineStyle:{backgroundColor:this.color}}},computed:{scrollable:function(){return this.children.length>this.swipeThreshold||!this.ellipsis},navStyle:function(){return{borderColor:this.color,background:this.background}},currentName:function(){var t=this.children[this.currentIndex];if(t)return t.computedName},offsetTopPx:function(){return(0,m.L)(this.offsetTop)},scrollOffset:function(){return this.sticky?this.offsetTopPx+this.tabHeight:0}},watch:{color:"setLine",active:function(t){t!==this.currentName&&this.setCurrentIndexByName(t)},children:function(){var t=this;this.setCurrentIndexByName(this.active),this.setLine(),this.$nextTick((function(){t.scrollIntoView(!0)}))},currentIndex:function(){this.scrollIntoView(),this.setLine(),this.stickyFixed&&!this.scrollspy&&(0,k.kn)(Math.ceil((0,k.U4)(this.$el)-this.offsetTopPx))},scrollspy:function(t){t?(0,O.on)(this.scroller,"scroll",this.onScroll,!0):(0,O.S1)(this.scroller,"scroll",this.onScroll)}},mounted:function(){var t=this;this.init(),this.vanPopup&&this.vanPopup.onReopen((function(){t.setLine()}))},activated:function(){this.init(),this.setLine()},methods:{resize:function(){this.setLine()},init:function(){var t=this;this.$nextTick((function(){t.inited=!0,t.tabHeight=(0,k.$D)(t.$refs.wrap),t.scrollIntoView(!0)}))},setLine:function(){var t=this,i=this.inited;this.$nextTick((function(){var e=t.$refs.titles;if(e&&e[t.currentIndex]&&"line"===t.type&&!(0,z.x)(t.$el)){var n=e[t.currentIndex].$el,s=t.lineWidth,o=t.lineHeight,a=n.offsetLeft+n.offsetWidth/2,r={width:(0,m.N)(s),backgroundColor:t.color,transform:"translateX("+a+"px) translateX(-50%)"};if(i&&(r.transitionDuration=t.duration+"s"),(0,g.Xq)(o)){var l=(0,m.N)(o);r.height=l,r.borderRadius=l}t.lineStyle=r}}))},setCurrentIndexByName:function(t){var i=this.children.filter((function(i){return i.computedName===t})),e=(this.children[0]||{}).index||0;this.setCurrentIndex(i.length?i[0].index:e)},setCurrentIndex:function(t){var i=this.findAvailableTab(t);if((0,g.Xq)(i)){var e=this.children[i],n=e.computedName,s=null!==this.currentIndex;this.currentIndex=i,n!==this.active&&(this.$emit("input",n),s&&this.$emit("change",n,e.title))}},findAvailableTab:function(t){var i=t<this.currentIndex?-1:1;while(t>=0&&t<this.children.length){if(!this.children[t].disabled)return t;t+=i}},onClick:function(t,i){var e=this,n=this.children[i],s=n.title,o=n.disabled,a=n.computedName;o?this.$emit("disabled",a,s):((0,N.I)({interceptor:this.beforeChange,args:[a],done:function(){e.setCurrentIndex(i),e.scrollToCurrentContent()}}),this.$emit("click",a,s),(0,I.BC)(t.$router,t))},scrollIntoView:function(t){var i=this.$refs.titles;if(this.scrollable&&i&&i[this.currentIndex]){var e=this.$refs.nav,n=i[this.currentIndex].$el,s=n.offsetLeft-(e.offsetWidth-n.offsetWidth)/2;$(e,s,t?0:+this.duration)}},onSticktScroll:function(t){this.stickyFixed=t.isFixed,this.$emit("scroll",t)},scrollTo:function(t){var i=this;this.$nextTick((function(){i.setCurrentIndexByName(t),i.scrollToCurrentContent(!0)}))},scrollToCurrentContent:function(t){var i=this;if(void 0===t&&(t=!1),this.scrollspy){var e=this.children[this.currentIndex],n=null==e?void 0:e.$el;if(n){var s=(0,k.U4)(n,this.scroller)-this.scrollOffset;this.lockScroll=!0,T(this.scroller,s,t?0:+this.duration,(function(){i.lockScroll=!1}))}}},onScroll:function(){if(this.scrollspy&&!this.lockScroll){var t=this.getCurrentIndexOnScroll();this.setCurrentIndex(t)}},getCurrentIndexOnScroll:function(){for(var t=this.children,i=0;i<t.length;i++){var e=(0,k.wp)(t[i].$el);if(e>this.scrollOffset)return 0===i?0:i-1}return t.length-1}},render:function(){var t,i=this,e=arguments[0],n=this.type,s=this.animated,o=this.scrollable,a=this.children.map((function(t,s){var a;return e(X,{ref:"titles",refInFor:!0,attrs:{type:n,dot:t.dot,info:null!=(a=t.badge)?a:t.info,title:t.title,color:i.color,isActive:s===i.currentIndex,disabled:t.disabled,scrollable:o,activeColor:i.titleActiveColor,inactiveColor:i.titleInactiveColor},style:t.titleStyle,class:t.titleClass,scopedSlots:{default:function(){return t.slots("title")}},on:{click:function(){i.onClick(t,s)}}})})),r=e("div",{ref:"wrap",class:[U("wrap",{scrollable:o}),(t={},t[L.r5]="line"===n&&this.border,t)]},[e("div",{ref:"nav",attrs:{role:"tablist"},class:U("nav",[n,{complete:this.scrollable}]),style:this.navStyle},[this.slots("nav-left"),a,"line"===n&&e("div",{class:U("line"),style:this.lineStyle}),this.slots("nav-right")])]);return e("div",{class:U([n])},[this.sticky?e(Z.Z,{attrs:{container:this.$el,offsetTop:this.offsetTop},on:{scroll:this.onSticktScroll}},[r]):r,e(Y,{attrs:{count:this.children.length,animated:s,duration:this.duration,swipeable:this.swipeable,currentIndex:this.currentIndex},on:{change:this.setCurrentIndex}},[this.slots()])])}}),J=(0,v.d)("tab"),Q=J[0],K=J[1],tt=Q({mixins:[(0,B.j)("vanTabs")],props:(0,_.Z)({},I.g2,{dot:Boolean,name:[Number,String],info:[Number,String],badge:[Number,String],title:String,titleStyle:null,titleClass:null,disabled:Boolean}),data:function(){return{inited:!1}},computed:{computedName:function(){var t;return null!=(t=this.name)?t:this.index},isActive:function(){var t=this.computedName===this.parent.currentName;return t&&(this.inited=!0),t}},watch:{title:function(){this.parent.setLine(),this.parent.scrollIntoView()},inited:function(t){var i=this;this.parent.lazyRender&&t&&this.$nextTick((function(){i.parent.$emit("rendered",i.computedName,i.title)}))}},render:function(t){var i=this.slots,e=this.parent,n=this.isActive,s=i();if(s||e.animated){var o=e.scrollspy||n,a=this.inited||e.scrollspy||!e.lazyRender,r=a?s:t();return e.animated?t("div",{attrs:{role:"tabpanel","aria-hidden":!n},class:K("pane-wrapper",{inactive:!n})},[t("div",{class:K("pane")},[r])]):t("div",{directives:[{name:"show",value:o}],attrs:{role:"tabpanel"},class:K("pane")},[r])}}}),it=(e(7239),e(6802),function(){var t=this,i=t._self._c;return i("div",{staticClass:"tab-recommend"},[i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(i){t.refreshing=i},expression:"refreshing"}},[i("div",{staticClass:"swipe-container"},[i("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white","show-indicators":!1},on:{change:t.onChange}},t._l(t.banners,(function(e){return i("van-swipe-item",{key:e.url,on:{click:function(i){return t.handleSwipeItem(e.url)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img,expression:"banner.img"}],staticClass:"swip-img"}),i("span",{staticClass:"banner-title"},[t._v(t._s(e.title))])])})),1),i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.limitedTopicList,(function(e){return i("div",{key:e.id},[i("div",{staticClass:"topic-title",on:{click:function(i){return t.toTopic(e.id,e.title)}}},[i("span",{staticClass:"topic-title-left"},[t._v(t._s(e.title))]),i("van-icon",{staticClass:"topic-title-right",attrs:{name:"arrow"}})],1),i("van-grid",{attrs:{"column-num":3,border:!1}},t._l(e.vod,(function(e){return i("van-grid-item",{key:e.id},[i("div",{staticClass:"image-container",style:t.imageStyle,on:{click:function(i){return t.handleToDetail(e.id)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgy,expression:"vod.imgy"}],staticClass:"fixed-size-image"}),i("span",{staticClass:"span-mark"},[t._v(t._s(e.remarks))])]),i("span",{staticClass:"vod-name",style:t.nameStyle},[t._v(" "+t._s(e.name)+" ")])])})),1)],1)})),0)],1)])],1)}),et=[],nt=e(6109),st=e(3432),ot=(0,v.d)("pull-refresh"),at=ot[0],rt=ot[1],lt=ot[2],ct=50,ht=["pulling","loosing","success"],ut=at({mixins:[W.D],props:{disabled:Boolean,successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:[Number,String],value:{type:Boolean,required:!0},successDuration:{type:[Number,String],default:500},animationDuration:{type:[Number,String],default:300},headHeight:{type:[Number,String],default:ct}},data:function(){return{status:"normal",distance:0,duration:0}},computed:{touchable:function(){return"loading"!==this.status&&"success"!==this.status&&!this.disabled},headStyle:function(){if(this.headHeight!==ct)return{height:this.headHeight+"px"}}},watch:{value:function(t){this.duration=this.animationDuration,t?this.setStatus(+this.headHeight,!0):this.slots("success")||this.successText?this.showSuccessTip():this.setStatus(0,!1)}},mounted:function(){this.bindTouchEvent(this.$refs.track),this.scrollEl=(0,k.Ob)(this.$el)},methods:{checkPullStart:function(t){this.ceiling=0===(0,k.cx)(this.scrollEl),this.ceiling&&(this.duration=0,this.touchStart(t))},onTouchStart:function(t){this.touchable&&this.checkPullStart(t)},onTouchMove:function(t){this.touchable&&(this.ceiling||this.checkPullStart(t),this.touchMove(t),this.ceiling&&this.deltaY>=0&&"vertical"===this.direction&&((0,O.PF)(t),this.setStatus(this.ease(this.deltaY))))},onTouchEnd:function(){var t=this;this.touchable&&this.ceiling&&this.deltaY&&(this.duration=this.animationDuration,"loosing"===this.status?(this.setStatus(+this.headHeight,!0),this.$emit("input",!0),this.$nextTick((function(){t.$emit("refresh")}))):this.setStatus(0))},ease:function(t){var i=+(this.pullDistance||this.headHeight);return t>i&&(t=t<2*i?i+(t-i)/2:1.5*i+(t-2*i)/4),Math.round(t)},setStatus:function(t,i){var e;e=i?"loading":0===t?"normal":t<(this.pullDistance||this.headHeight)?"pulling":"loosing",this.distance=t,e!==this.status&&(this.status=e)},genStatus:function(){var t=this.$createElement,i=this.status,e=this.distance,n=this.slots(i,{distance:e});if(n)return n;var s=[],o=this[i+"Text"]||lt(i);return-1!==ht.indexOf(i)&&s.push(t("div",{class:rt("text")},[o])),"loading"===i&&s.push(t(st.Z,{attrs:{size:"16"}},[o])),s},showSuccessTip:function(){var t=this;this.status="success",setTimeout((function(){t.setStatus(0)}),this.successDuration)}},render:function(){var t=arguments[0],i={transitionDuration:this.duration+"ms",transform:this.distance?"translate3d(0,"+this.distance+"px, 0)":""};return t("div",{class:rt()},[t("div",{ref:"track",class:rt("track"),style:i},[t("div",{class:rt("head"),style:this.headStyle},[this.genStatus()]),this.slots()])])}}),dt=e(8169),ft=(0,v.d)("swipe"),pt=ft[0],vt=ft[1],mt=pt({mixins:[W.D,(0,B.G)("vanSwipe"),(0,P.X)((function(t,i){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0),t(window,"visibilitychange",this.onVisibilityChange),i?this.initialize():this.clear()}))],props:{width:[Number,String],height:[Number,String],autoplay:[Number,String],vertical:Boolean,lazyRender:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:[Number,String],default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{rect:null,offset:0,active:0,deltaX:0,deltaY:0,swiping:!1,computedWidth:0,computedHeight:0}},watch:{children:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t>0?this.autoPlay():this.clear()}},computed:{count:function(){return this.children.length},maxCount:function(){return Math.ceil(Math.abs(this.minOffset)/this.size)},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t={transitionDuration:(this.swiping?0:this.duration)+"ms",transform:"translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)"};if(this.size){var i=this.vertical?"height":"width",e=this.vertical?"width":"height";t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":""}return t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){return(this.vertical?this.rect.height:this.rect.width)-this.size*this.count}},mounted:function(){this.bindTouchEvent(this.$refs.track)},methods:{initialize:function(t){if(void 0===t&&(t=+this.initialSwipe),this.$el&&!(0,z.x)(this.$el)){clearTimeout(this.timer);var i={width:this.$el.offsetWidth,height:this.$el.offsetHeight};this.rect=i,this.swiping=!0,this.active=t,this.computedWidth=+this.width||i.width,this.computedHeight=+this.height||i.height,this.offset=this.getTargetOffset(t),this.children.forEach((function(t){t.offset=0})),this.autoPlay()}},resize:function(){this.initialize(this.activeIndicator)},onVisibilityChange:function(){document.hidden?this.clear():this.autoPlay()},onTouchStart:function(t){this.touchable&&(this.clear(),this.touchStartTime=Date.now(),this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&((0,O.PF)(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){var t=this.size,i=this.delta,e=Date.now()-this.touchStartTime,n=i/e,s=Math.abs(n)>.25||Math.abs(i)>t/2;if(s&&this.isCorrectDirection){var o=this.vertical?this.offsetY:this.offsetX,a=0;a=this.loop?o>0?i>0?-1:1:0:-Math[i>0?"ceil":"floor"](i/t),this.move({pace:a,emitChange:!0})}else i&&this.move({pace:0});this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count,n=this.maxCount;return t?this.loop?(0,dt.w6)(i+t,-1,e):(0,dt.w6)(i+t,0,n):i},getTargetOffset:function(t,i){void 0===i&&(i=0);var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var n=i-e;return this.loop||(n=(0,dt.w6)(n,this.minOffset,0)),n},move:function(t){var i=t.pace,e=void 0===i?0:i,n=t.offset,s=void 0===n?0:n,o=t.emitChange,a=this.loop,r=this.count,l=this.active,c=this.children,h=this.trackSize,u=this.minOffset;if(!(r<=1)){var d=this.getTargetActive(e),f=this.getTargetOffset(d,s);if(a){if(c[0]&&f!==u){var p=f<u;c[0].offset=p?h:0}if(c[r-1]&&0!==f){var v=f>0;c[r-1].offset=v?-h:0}}this.active=d,this.offset=f,o&&d!==l&&this.$emit("change",this.activeIndicator)}},prev:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),C((function(){t.swiping=!1,t.move({pace:-1,emitChange:!0})}))},next:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),C((function(){t.swiping=!1,t.move({pace:1,emitChange:!0})}))},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.correctPosition(),this.resetTouchStatus(),C((function(){var n;n=e.loop&&t===e.count?0===e.active?0:t:t%e.count,i.immediate?C((function(){e.swiping=!1})):e.swiping=!1,e.move({pace:n-e.active,emitChange:!0})}))},correctPosition:function(){this.swiping=!0,this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i>0&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.next(),t.autoPlay()}),i))},genIndicator:function(){var t=this,i=this.$createElement,e=this.count,n=this.activeIndicator,s=this.slots("indicator");return s||(this.showIndicators&&e>1?i("div",{class:vt("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map((function(e,s){return i("i",{class:vt("indicator",{active:s===n}),style:s===n?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:vt()},[t("div",{ref:"track",style:this.trackStyle,class:vt("track",{vertical:this.vertical})},[this.slots()]),this.genIndicator()])}}),gt=(0,v.d)("swipe-item"),yt=gt[0],bt=gt[1],wt=yt({mixins:[(0,B.j)("vanSwipe")],data:function(){return{offset:0,inited:!1,mounted:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.mounted=!0}))},computed:{style:function(){var t={},i=this.parent,e=i.size,n=i.vertical;return e&&(t[n?"height":"width"]=e+"px"),this.offset&&(t.transform="translate"+(n?"Y":"X")+"("+this.offset+"px)"),t},shouldRender:function(){var t=this.index,i=this.inited,e=this.parent,n=this.mounted;if(!e.lazyRender||i)return!0;if(!n)return!1;var s=e.activeIndicator,o=e.count-1,a=0===s&&e.loop?o:s-1,r=s===o&&e.loop?0:s+1,l=t===s||t===a||t===r;return l&&(this.inited=!0),l}},render:function(){var t=arguments[0];return t("div",{class:bt(),style:this.style,on:(0,_.Z)({},this.$listeners)},[this.shouldRender&&this.slots()])}}),xt=e(7763),St=e(9978),Ct=e(6568),kt=e.n(Ct),$t=(0,v.d)("image"),Tt=$t[0],It=$t[1],zt=Tt({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,iconPrefix:String,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"photo-fail"},loadingIcon:{type:String,default:"photo"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return(0,g.Xq)(this.width)&&(t.width=(0,m.N)(this.width)),(0,g.Xq)(this.height)&&(t.height=(0,m.N)(this.height)),(0,g.Xq)(this.radius)&&(t.overflow="hidden",t.borderRadius=(0,m.N)(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&g._f&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var i=t.el;i===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var i=t.el;i!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:It("loading")},[this.slots("loading")||t(r.Z,{attrs:{name:this.loadingIcon,classPrefix:this.iconPrefix},class:It("loading-icon")})]):this.error&&this.showError?t("div",{class:It("error")},[this.slots("error")||t(r.Z,{attrs:{name:this.errorIcon,classPrefix:this.iconPrefix},class:It("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,i={class:It("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",kt()([{ref:"image",directives:[{name:"lazy",value:this.src}]},i])):t("img",kt()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},i]))}},render:function(){var t=arguments[0];return t("div",{class:It({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder(),this.slots()])}}),Ot=(e(6849),e(272),e(1745),e(3730),e(8246),e(2947),{name:"TabRecommend",components:{"van-list":nt.Z,"van-pull-refresh":ut,"van-swipe":mt,"van-swipe-item":wt,"van-grid":xt.Z,"van-grid-item":St.Z,"van-image":zt,[r.Z.name]:r.Z},data(){return{topicList:[],page:0,loading:!1,finished:!1,refreshing:!1,banners:[]}},methods:{onRefresh(){this.refreshing=!0,this.loading=!1,this.topicList=[],this.finished=!1,this.page=0,this.onLoad()},onLoad(){this.refreshing&&(this.refreshing=!1),this.page+=1,this.loading=!0,this.getTopicByPage()},onChange(t){},handleSwipeItem(t){if(console.log("当前 bannerUrl："+t),-1!==t.indexOf("//vod/")){const i=t.replace("//vod/","");this.$router.push({path:`/detail/${i}`})}else window.location.href="jdzj://function?opengw="+t},getBanner(){this.$http.get("/api/datu").then(this.bannerSucc)},bannerSucc(t){if(console.log(t),t=t.data,1e3==t.code&&t.data){const i=t.data;this.banners=i}},getTopicByPage(){this.$http.get("api/tjjj?page="+this.page+"&limit=3").then(this.topicSucc)},topicSucc(t){if(t=t.data,1e3==t.code&&t.data){const i=t.data;i.length>0?this.topicList.push(...i):this.finished=!0}this.loading=!1},handleToDetail(t){this.$router.push({path:`/detail/${t}`})},toTopic(t,i){this.$router.push({path:`/topic/${t}/${i}`})}},computed:{nameStyle(){let t=2.34;return this.$utils.vodCoverWidth>0&&(t=this.$utils.vodCoverWidth),{width:t+"rem"}},imageStyle(){let t=2.34,i=3.11;return this.$utils.vodCoverWidth>0&&(t=this.$utils.vodCoverWidth,i=this.$utils.vodCoverHeight),{width:t+"rem",height:i+"rem"}},limitedTopicList(){return this.topicList.map((t=>{const i={...t};return i.vod=i.vod.slice(0,6),i}))}},mounted(){this.getBanner()}}),Lt=Ot,Nt=(0,h.Z)(Lt,it,et,!1,null,"7401bc22",null),Bt=Nt.exports,Pt=function(){var t=this,i=t._self._c;return i("div",{staticClass:"tabListContent"},[i("van-sticky",{attrs:{"offset-top":"1.72rem"}},[i("van-dropdown-menu",{staticClass:"dropMenu",attrs:{"active-color":"#41ae3c"}},[i("van-dropdown-item",{attrs:{options:t.pxOptions},on:{change:t.handelOptions},model:{value:t.pxValue,callback:function(i){t.pxValue=i},expression:"pxValue"}}),i("van-dropdown-item",{attrs:{options:t.lxOptions},on:{change:t.handelOptions},model:{value:t.lxValue,callback:function(i){t.lxValue=i},expression:"lxValue"}}),i("van-dropdown-item",{attrs:{options:t.dqOptions},on:{change:t.handelOptions},model:{value:t.dqValue,callback:function(i){t.dqValue=i},expression:"dqValue"}}),i("van-dropdown-item",{attrs:{options:t.yyOptions},on:{change:t.handelOptions},model:{value:t.yyValue,callback:function(i){t.yyValue=i},expression:"yyValue"}}),i("van-dropdown-item",{attrs:{options:t.nfOptions},on:{change:t.handelOptions},model:{value:t.nfValue,callback:function(i){t.nfValue=i},expression:"nfValue"}})],1)],1),i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(i){t.refreshing=i},expression:"refreshing"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},[i("div",{staticClass:"vod-container"},[i("van-grid",{attrs:{"column-num":3,border:!1}},t._l(t.vods,(function(e){return i("van-grid-item",{key:e.id},[i("div",{staticClass:"image-container",style:t.vimageStyle,on:{click:function(i){return t.handleToDetail(e.id)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgy,expression:"vod.imgy"}],staticClass:"fixed-size-image"}),i("span",{staticClass:"span-mark"},[t._v(t._s(e.remarks))])]),i("span",{staticClass:"vod-name",style:t.vnameStyle},[t._v(" "+t._s(e.name)+" ")])])})),1)],1)])],1)],1)},Vt=[],Dt=e(9143),Et=(0,v.d)("dropdown-menu"),Ht=Et[0],Xt=Et[1],Zt=Ht({mixins:[(0,B.G)("vanDropdownMenu"),(0,Dt.O)({event:"click",method:"onClickOutside"})],props:{zIndex:[Number,String],activeColor:String,overlay:{type:Boolean,default:!0},duration:{type:[Number,String],default:.2},direction:{type:String,default:"down"},closeOnClickOverlay:{type:Boolean,default:!0}},data:function(){return{offset:0}},computed:{scroller:function(){return(0,k.Ob)(this.$el)},opened:function(){return this.children.some((function(t){return t.showWrapper}))},barStyle:function(){if(this.opened&&(0,g.Xq)(this.zIndex))return{zIndex:1+this.zIndex}}},methods:{updateOffset:function(){if(this.$refs.bar){var t=this.$refs.bar.getBoundingClientRect();"down"===this.direction?this.offset=t.bottom:this.offset=window.innerHeight-t.top}},toggleItem:function(t){this.children.forEach((function(i,e){e===t?i.toggle():i.showPopup&&i.toggle(!1,{immediate:!0})}))},onClickOutside:function(){this.children.forEach((function(t){t.toggle(!1)}))}},render:function(){var t=this,i=arguments[0],e=this.children.map((function(e,n){return i("div",{attrs:{role:"button",tabindex:e.disabled?-1:0},class:Xt("item",{disabled:e.disabled}),on:{click:function(){e.disabled||t.toggleItem(n)}}},[i("span",{class:[Xt("title",{active:e.showPopup,down:e.showPopup===("down"===t.direction)}),e.titleClass],style:{color:e.showPopup?t.activeColor:""}},[i("div",{class:"van-ellipsis"},[e.slots("title")||e.displayTitle])])])}));return i("div",{class:Xt()},[i("div",{ref:"bar",style:this.barStyle,class:Xt("bar",{opened:this.opened})},[e]),this.slots("default")])}}),_t=e(4770),Wt=e(9233),Mt=e(4755),At=(0,v.d)("dropdown-item"),qt=At[0],Rt=At[1],Yt=qt({mixins:[(0,_t.k)({ref:"wrapper"}),(0,B.j)("vanDropdownMenu")],props:{value:null,title:String,disabled:Boolean,titleClass:String,options:{type:Array,default:function(){return[]}},lazyRender:{type:Boolean,default:!0}},data:function(){return{transition:!0,showPopup:!1,showWrapper:!1}},computed:{displayTitle:function(){var t=this;if(this.title)return this.title;var i=this.options.filter((function(i){return i.value===t.value}));return i.length?i[0].text:""}},watch:{showPopup:function(t){this.bindScroll(t)}},beforeCreate:function(){var t=this,i=function(i){return function(){return t.$emit(i)}};this.onOpen=i("open"),this.onClose=i("close"),this.onOpened=i("opened")},methods:{toggle:function(t,i){void 0===t&&(t=!this.showPopup),void 0===i&&(i={}),t!==this.showPopup&&(this.transition=!i.immediate,this.showPopup=t,t&&(this.parent.updateOffset(),this.showWrapper=!0))},bindScroll:function(t){var i=this.parent.scroller,e=t?O.on:O.S1;e(i,"scroll",this.onScroll,!0)},onScroll:function(){this.parent.updateOffset()},onClickWrapper:function(t){this.getContainer&&t.stopPropagation()}},render:function(){var t=this,i=arguments[0],e=this.parent,n=e.zIndex,s=e.offset,o=e.overlay,a=e.duration,l=e.direction,c=e.activeColor,h=e.closeOnClickOverlay,u=this.options.map((function(e){var n=e.value===t.value;return i(Wt.Z,{attrs:{clickable:!0,icon:e.icon,title:e.text},key:e.value,class:Rt("option",{active:n}),style:{color:n?c:""},on:{click:function(){t.showPopup=!1,e.value!==t.value&&(t.$emit("input",e.value),t.$emit("change",e.value))}}},[n&&i(r.Z,{class:Rt("icon"),attrs:{color:c,name:"success"}})])})),d={zIndex:n};return"down"===l?d.top=s+"px":d.bottom=s+"px",i("div",[i("div",{directives:[{name:"show",value:this.showWrapper}],ref:"wrapper",style:d,class:Rt([l]),on:{click:this.onClickWrapper}},[i(Mt.Z,{attrs:{overlay:o,position:"down"===l?"top":"bottom",duration:this.transition?a:0,lazyRender:this.lazyRender,overlayStyle:{position:"absolute"},closeOnClickOverlay:h},class:Rt("content"),on:{open:this.onOpen,close:this.onClose,opened:this.onOpened,closed:function(){t.showWrapper=!1,t.$emit("closed")}},model:{value:t.showPopup,callback:function(i){t.showPopup=i}}},[u,this.slots("default")])])])}}),jt=(e(547),e(7078),e(5641),{name:"TabVodList",components:{"van-dropdown-menu":Zt,"van-dropdown-item":Yt,"van-list":nt.Z,"van-pull-refresh":ut,"van-grid":xt.Z,"van-grid-item":St.Z,[Z.Z.name]:Z.Z},props:{channel:Object},data(){return{loading:!1,finished:!1,refreshing:!1,page:1,pxValue:"热门",lxValue:"类型",dqValue:"地区",yyValue:"语言",nfValue:"年份",vods:[]}},methods:{onRefresh(){this.refreshing=!0,this.loading=!1,this.vods=[],this.finished=!1,this.page=0,this.onLoad()},onLoad(){this.refreshing&&(this.refreshing=!1),this.page+=1,this.loading=!0,this.getVods()},getVods(){this.$http.get("api/pdsx?pd="+this.pd+"&px="+this.pxValue+"&lx="+("类型"===this.lxValue?"":this.lxValue)+"&dq="+("地区"===this.dqValue?"":this.dqValue)+"&yy="+("语言"===this.yyValue?"":this.yyValue)+"&nf="+("年份"===this.nfValue?"":this.nfValue)+"&page="+this.page+"&limit=12").then(this.vodsSucc)},vodsSucc(t){if(console.log(t),t=t.data,1e3===t.code&&t.data){const i=t.data;i.length>0?this.vods.push(...i):this.finished=!0}console.log("this.vods: "+this.vods.length),this.loading=!1},handelOptions(){this.page=1,this.vods=[],this.getVods()},handleToDetail(t){this.$router.push({path:`/detail/${t}`})}},mounted(){this.getVods()},computed:{vnameStyle(){let t=2.34;return this.$utils.vodlistWidth>0&&(t=this.$utils.vodlistWidth),{width:t+"rem"}},vimageStyle(){let t=2.34,i=3.11;return this.$utils.vodlistWidth>0&&(t=this.$utils.vodlistWidth,i=this.$utils.vodlistHeight),{width:t+"rem",height:i+"rem"}},pd(){return this.channel.id},pxOptions(){const t=this.channel.px.split(",");let i=[];return t.forEach((t=>{i.push({text:t,value:t})})),i},lxOptions(){const t=this.channel.lx.split(",");let i=[{text:"类型",value:"类型"}];return t.forEach((t=>{i.push({text:t,value:t})})),i},dqOptions(){const t=this.channel.dq.split(",");let i=[{text:"地区",value:"地区"}];return t.forEach(((t,e)=>{i.push({text:t,value:t})})),i},yyOptions(){const t=this.channel.yy.split("、");let i=[{text:"语言",value:"语言"}];return t.forEach(((t,e)=>{i.push({text:t,value:t})})),i},nfOptions(){const t=this.channel.nf.split(",");let i=[{text:"年份",value:"年份"}];return t.forEach(((t,e)=>{i.push({text:t,value:t})})),i}}}),Ft=jt,Ut=(0,h.Z)(Ft,Pt,Vt,!1,null,"2731f6b9",null),Gt=Ut.exports,Jt={name:"HomeTabList",components:{"van-tabs":G,"van-tab":tt,TabRecommend:Bt,TabVodList:Gt},props:{channelList:{type:Array}},data(){return{active:0}},watch:{active(){console.log("active: "+this.active)}}},Qt=Jt,Kt=(0,h.Z)(Qt,f,p,!1,null,"f096beac",null),ti=Kt.exports,ii={name:"HomePage",components:{HomeHeader:d,HomeTabList:ti},data(){return{channelList:[]}},methods:{getChannels(){this.$http.get("/api/type").then(this.channelSucc)},channelSucc(t){if(t=t.data,1e3==t.code&&t.data){const i=t.data;this.channelList.push({id:0,mz:"推荐",dq:"",lx:"",nf:"",px:"",yy:""}),this.channelList.push(...i),console.log(this.channelList)}},getpz(){this.$http.get(`/api/pz?app=${this.$utils.app}&name=${this.$utils.app}_data`).then((t=>{const i=t.data;if(1e3===i.code&&i.data)try{const t=JSON.parse(i.data);this.$utils.config.gw=t.gw,this.$utils.config.shareText=t.shareText,this.$utils.config.adShow=t.adShow,this.$utils.config.adTime=t.adTime}catch(e){console.error(e)}}))}},mounted(){this.getChannels(),this.getpz(),console.log("屏幕:",this.$utils.screenWidth,this.$utils.screenHeight)}},ei=ii,ni=(0,h.Z)(ei,n,s,!1,null,"0bfbef98",null),si=ni.exports},7146:function(t,i,e){"use strict";e.r(i)},7688:function(t,i,e){"use strict";e.r(i)},3395:function(t,i,e){"use strict";e.r(i)},7317:function(t,i,e){"use strict";e.r(i)},9585:function(t,i,e){"use strict";e.r(i)},3989:function(t,i,e){"use strict";e.r(i)},4668:function(t,i,e){"use strict";e.r(i)},9143:function(t,i,e){"use strict";e.d(i,{O:function(){return s}});var n=e(5566),s=function(t){return{props:{closeOnClickOutside:{type:Boolean,default:!0}},data:function(){var i=this,e=function(e){i.closeOnClickOutside&&!i.$el.contains(e.target)&&i[t.method]()};return{clickOutsideHandler:e}},mounted:function(){(0,n.on)(document,t.event,this.clickOutsideHandler)},beforeDestroy:function(){(0,n.S1)(document,t.event,this.clickOutsideHandler)}}}},4611:function(t,i,e){"use strict";e.d(i,{D:function(){return o}});var n=e(5566);function s(t,i){return t>i?"horizontal":i>t?"vertical":""}var o={data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var i=t.touches[0];this.deltaX=i.clientX<0?0:i.clientX-this.startX,this.deltaY=i.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY);var e=10;(!this.direction||this.offsetX<e&&this.offsetY<e)&&(this.direction=s(this.offsetX,this.offsetY))},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0},bindTouchEvent:function(t){var i=this.onTouchStart,e=this.onTouchMove,s=this.onTouchEnd;(0,n.on)(t,"touchstart",i),(0,n.on)(t,"touchmove",e),s&&((0,n.on)(t,"touchend",s),(0,n.on)(t,"touchcancel",s))}}}},4755:function(t,i,e){"use strict";var n=e(2787),s=e(8546),o=e(1979),a=e(1392),r=(0,n.d)("popup"),l=r[0],c=r[1];i.Z=l({mixins:[(0,o.e)()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,i=function(i){return function(e){return t.$emit(i,e)}};this.onClick=i("click"),this.onOpened=i("opened"),this.onClosed=i("closed")},methods:{onClickCloseIcon:function(t){this.$emit("click-close-icon",t),this.close()}},render:function(){var t,i=arguments[0];if(this.shouldRender){var e=this.round,n=this.position,o=this.duration,r="center"===n,l=this.transition||(r?"van-fade":"van-popup-slide-"+n),h={};if((0,s.Xq)(o)){var u=r?"animationDuration":"transitionDuration";h[u]=o+"s"}return i("transition",{attrs:{appear:this.transitionAppear,name:l},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[i("div",{directives:[{name:"show",value:this.value}],style:h,class:c((t={round:e},t[n]=n,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&i(a.Z,{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:c("close-icon",this.closeIconPosition),on:{click:this.onClickCloseIcon}})])])}}})},7851:function(t,i,e){"use strict";e.d(i,{I:function(){return s}});var n=e(8546);function s(t){var i=t.interceptor,e=t.args,s=t.done;if(i){var o=i.apply(void 0,e);(0,n.tI)(o)?o.then((function(t){t&&s()})).catch(n.ZT):o&&s()}else s()}},7078:function(t,i,e){e(1546),e(825),e(2251),e(4511),e(3987),e(8507),e(7146)},547:function(t,i,e){e(1546),e(7688)},272:function(t,i,e){e(1546),e(6737),e(3395)},3730:function(t,i,e){e(1546),e(7317)},1745:function(t,i,e){e(1546),e(9585)},7239:function(t,i,e){e(1546),e(3989)},6802:function(t,i,e){e(1546),e(2251),e(2783),e(4668)}}]);
//# sourceMappingURL=100.da89848e.js.map