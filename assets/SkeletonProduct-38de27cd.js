import{r as ie,q as me,t as fe,k as g,u as ce,b as ee,v as be,w as he,x as ve,y as xe,z as ye,A as Ce,a as Pe,D as ke,E as Ne,s as Le,d as pe,e as ue,h as we,i as je,j as Ee,G as Oe}from"./index-0bbd3800.js";var de={exports:{}};(function(_,f){(function(Q,F){_.exports=F(ie)})(me,Q=>(()=>{var F={703:(c,p,m)=>{var t=m(414);function q(){}function B(){}B.resetWarningCache=q,c.exports=function(){function x(ae,E,G,H,te,J){if(J!==t){var V=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw V.name="Invariant Violation",V}}function P(){return x}x.isRequired=x;var w={array:x,bigint:x,bool:x,func:x,number:x,object:x,string:x,symbol:x,any:x,arrayOf:P,element:x,elementType:x,instanceOf:P,node:x,objectOf:P,oneOf:P,oneOfType:P,shape:P,exact:P,checkPropTypes:B,resetWarningCache:q};return w.PropTypes=w,w}},697:(c,p,m)=>{c.exports=m(703)()},414:c=>{c.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:c=>{c.exports=Q}},R={};function b(c){var p=R[c];if(p!==void 0)return p.exports;var m=R[c]={exports:{}};return F[c](m,m.exports,b),m.exports}b.n=c=>{var p=c&&c.__esModule?()=>c.default:()=>c;return b.d(p,{a:p}),p},b.d=(c,p)=>{for(var m in p)b.o(p,m)&&!b.o(c,m)&&Object.defineProperty(c,m,{enumerable:!0,get:p[m]})},b.o=(c,p)=>Object.prototype.hasOwnProperty.call(c,p),b.r=c=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})};var I={};return(()=>{b.r(I),b.d(I,{default:()=>oe});var c=b(98),p=b.n(c),m=b(697),t=b.n(m);function q(){return q=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(a[l]=i[l])}return a},q.apply(this,arguments)}var B=function(a){var n=a.pageClassName,i=a.pageLinkClassName,l=a.page,N=a.selected,T=a.activeClassName,j=a.activeLinkClassName,r=a.getEventListener,e=a.pageSelectedHandler,d=a.href,s=a.extraAriaContext,o=a.pageLabelBuilder,u=a.rel,y=a.ariaLabel||"Page "+l+(s?" "+s:""),L=null;return N&&(L="page",y=a.ariaLabel||"Page "+l+" is your current page",n=n!==void 0?n+" "+T:T,i!==void 0?j!==void 0&&(i=i+" "+j):i=j),p().createElement("li",{className:n},p().createElement("a",q({rel:u,role:d?void 0:"button",className:i,href:d,tabIndex:N?"-1":"0","aria-label":y,"aria-current":L,onKeyPress:e},r(e)),o(l)))};B.propTypes={pageSelectedHandler:t().func.isRequired,selected:t().bool.isRequired,pageClassName:t().string,pageLinkClassName:t().string,activeClassName:t().string,activeLinkClassName:t().string,extraAriaContext:t().string,href:t().string,ariaLabel:t().string,page:t().number.isRequired,getEventListener:t().func.isRequired,pageLabelBuilder:t().func.isRequired,rel:t().string};const x=B;function P(){return P=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(a[l]=i[l])}return a},P.apply(this,arguments)}var w=function(a){var n=a.breakLabel,i=a.breakAriaLabel,l=a.breakClassName,N=a.breakLinkClassName,T=a.breakHandler,j=a.getEventListener,r=l||"break";return p().createElement("li",{className:r},p().createElement("a",P({className:N,role:"button",tabIndex:"0","aria-label":i,onKeyPress:T},j(T)),n))};w.propTypes={breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabel:t().string,breakClassName:t().string,breakLinkClassName:t().string,breakHandler:t().func.isRequired,getEventListener:t().func.isRequired};const ae=w;function E(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return a??n}function G(a){return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},G(a)}function H(){return H=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(a[l]=i[l])}return a},H.apply(this,arguments)}function te(a,n){for(var i=0;i<n.length;i++){var l=n[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(a,l.key,l)}}function J(a,n){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,l){return i.__proto__=l,i},J(a,n)}function V(a,n){if(n&&(G(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return h(a)}function h(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function M(a){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},M(a)}function k(a,n,i){return n in a?Object.defineProperty(a,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[n]=i,a}var Y=function(a){(function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&J(r,e)})(j,a);var n,i,l,N,T=(l=j,N=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var r,e=M(l);if(N){var d=M(this).constructor;r=Reflect.construct(e,arguments,d)}else r=e.apply(this,arguments);return V(this,r)});function j(r){var e,d;return function(s,o){if(!(s instanceof o))throw new TypeError("Cannot call a class as a function")}(this,j),k(h(e=T.call(this,r)),"handlePreviousPage",function(s){var o=e.state.selected;e.handleClick(s,null,o>0?o-1:void 0,{isPrevious:!0})}),k(h(e),"handleNextPage",function(s){var o=e.state.selected,u=e.props.pageCount;e.handleClick(s,null,o<u-1?o+1:void 0,{isNext:!0})}),k(h(e),"handlePageSelected",function(s,o){if(e.state.selected===s)return e.callActiveCallback(s),void e.handleClick(o,null,void 0,{isActive:!0});e.handleClick(o,null,s)}),k(h(e),"handlePageChange",function(s){e.state.selected!==s&&(e.setState({selected:s}),e.callCallback(s))}),k(h(e),"getEventListener",function(s){return k({},e.props.eventListener,s)}),k(h(e),"handleClick",function(s,o,u){var y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},L=y.isPrevious,D=L!==void 0&&L,X=y.isNext,re=X!==void 0&&X,$=y.isBreak,A=$!==void 0&&$,U=y.isActive,W=U!==void 0&&U;s.preventDefault?s.preventDefault():s.returnValue=!1;var K=e.state.selected,v=e.props.onClick,S=u;if(v){var O=v({index:o,selected:K,nextSelectedPage:u,event:s,isPrevious:D,isNext:re,isBreak:A,isActive:W});if(O===!1)return;Number.isInteger(O)&&(S=O)}S!==void 0&&e.handlePageChange(S)}),k(h(e),"handleBreakClick",function(s,o){var u=e.state.selected;e.handleClick(o,s,u<s?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),k(h(e),"callCallback",function(s){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:s})}),k(h(e),"callActiveCallback",function(s){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:s})}),k(h(e),"getElementPageRel",function(s){var o=e.state.selected,u=e.props,y=u.nextPageRel,L=u.prevPageRel,D=u.selectedPageRel;return o-1===s?L:o===s?D:o+1===s?y:void 0}),k(h(e),"pagination",function(){var s=[],o=e.props,u=o.pageRangeDisplayed,y=o.pageCount,L=o.marginPagesDisplayed,D=o.breakLabel,X=o.breakClassName,re=o.breakLinkClassName,$=o.breakAriaLabels,A=e.state.selected;if(y<=u)for(var U=0;U<y;U++)s.push(e.getPageElement(U));else{var W=u/2,K=u-W;A>y-u/2?W=u-(K=y-A):A<u/2&&(K=u-(W=A));var v,S,O=function(Z){return e.getPageElement(Z)},C=[];for(v=0;v<y;v++){var ne=v+1;if(ne<=L)C.push({type:"page",index:v,display:O(v)});else if(ne>y-L)C.push({type:"page",index:v,display:O(v)});else if(v>=A-W&&v<=A+(A===0&&u>1?K-1:K))C.push({type:"page",index:v,display:O(v)});else if(D&&C.length>0&&C[C.length-1].display!==S&&(u>0||L>0)){var le=v<A?$.backward:$.forward;S=p().createElement(ae,{key:v,breakAriaLabel:le,breakLabel:D,breakClassName:X,breakLinkClassName:re,breakHandler:e.handleBreakClick.bind(null,v),getEventListener:e.getEventListener}),C.push({type:"break",index:v,display:S})}}C.forEach(function(Z,z){var se=Z;Z.type==="break"&&C[z-1]&&C[z-1].type==="page"&&C[z+1]&&C[z+1].type==="page"&&C[z+1].index-C[z-1].index<=2&&(se={type:"page",index:Z.index,display:O(Z.index)}),s.push(se.display)})}return s}),r.initialPage!==void 0&&r.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(r.initialPage,") and forcePage (").concat(r.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),d=r.initialPage?r.initialPage:r.forcePage?r.forcePage:0,e.state={selected:d},e}return n=j,(i=[{key:"componentDidMount",value:function(){var r=this.props,e=r.initialPage,d=r.disableInitialCallback,s=r.extraAriaContext,o=r.pageCount,u=r.forcePage;e===void 0||d||this.callCallback(e),s&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(o)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(o,"). Did you forget a Math.ceil()?")),e!==void 0&&e>o-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(o-1,").")),u!==void 0&&u>o-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(u," > ").concat(o-1,")."))}},{key:"componentDidUpdate",value:function(r){this.props.forcePage!==void 0&&this.props.forcePage!==r.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(r.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var r=this.state.selected,e=this.props,d=e.pageCount,s=r+e.pageRangeDisplayed;return s>=d?d-1:s}},{key:"getBackwardJump",value:function(){var r=this.state.selected-this.props.pageRangeDisplayed;return r<0?0:r}},{key:"getElementHref",value:function(r){var e=this.props,d=e.hrefBuilder,s=e.pageCount,o=e.hrefAllControls;if(d)return o||r>=0&&r<s?d(r+1,s,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(r){var e=r===this.state.selected;if(this.props.ariaLabelBuilder&&r>=0&&r<this.props.pageCount){var d=this.props.ariaLabelBuilder(r+1,e);return this.props.extraAriaContext&&!e&&(d=d+" "+this.props.extraAriaContext),d}}},{key:"getPageElement",value:function(r){var e=this.state.selected,d=this.props,s=d.pageClassName,o=d.pageLinkClassName,u=d.activeClassName,y=d.activeLinkClassName,L=d.extraAriaContext,D=d.pageLabelBuilder;return p().createElement(x,{key:r,pageSelectedHandler:this.handlePageSelected.bind(null,r),selected:e===r,rel:this.getElementPageRel(r),pageClassName:s,pageLinkClassName:o,activeClassName:u,activeLinkClassName:y,extraAriaContext:L,href:this.getElementHref(r),ariaLabel:this.ariaLabelBuilder(r),page:r+1,pageLabelBuilder:D,getEventListener:this.getEventListener})}},{key:"render",value:function(){var r=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&r!==void 0)return r&&r(this.props);var e=this.props,d=e.disabledClassName,s=e.disabledLinkClassName,o=e.pageCount,u=e.className,y=e.containerClassName,L=e.previousLabel,D=e.previousClassName,X=e.previousLinkClassName,re=e.previousAriaLabel,$=e.prevRel,A=e.nextLabel,U=e.nextClassName,W=e.nextLinkClassName,K=e.nextAriaLabel,v=e.nextRel,S=this.state.selected,O=S===0,C=S===o-1,ne="".concat(E(D)).concat(O?" ".concat(E(d)):""),le="".concat(E(U)).concat(C?" ".concat(E(d)):""),Z="".concat(E(X)).concat(O?" ".concat(E(s)):""),z="".concat(E(W)).concat(C?" ".concat(E(s)):""),se=O?"true":"false",ge=C?"true":"false";return p().createElement("ul",{className:u||y,role:"navigation","aria-label":"Pagination"},p().createElement("li",{className:ne},p().createElement("a",H({className:Z,href:this.getElementHref(S-1),tabIndex:O?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":se,"aria-label":re,rel:$},this.getEventListener(this.handlePreviousPage)),L)),this.pagination(),p().createElement("li",{className:le},p().createElement("a",H({className:z,href:this.getElementHref(S+1),tabIndex:C?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":ge,"aria-label":K,rel:v},this.getEventListener(this.handleNextPage)),A)))}}])&&te(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),j}(c.Component);k(Y,"propTypes",{pageCount:t().number.isRequired,pageRangeDisplayed:t().number,marginPagesDisplayed:t().number,previousLabel:t().node,previousAriaLabel:t().string,prevPageRel:t().string,prevRel:t().string,nextLabel:t().node,nextAriaLabel:t().string,nextPageRel:t().string,nextRel:t().string,breakLabel:t().oneOfType([t().string,t().node]),breakAriaLabels:t().shape({forward:t().string,backward:t().string}),hrefBuilder:t().func,hrefAllControls:t().bool,onPageChange:t().func,onPageActive:t().func,onClick:t().func,initialPage:t().number,forcePage:t().number,disableInitialCallback:t().bool,containerClassName:t().string,className:t().string,pageClassName:t().string,pageLinkClassName:t().string,pageLabelBuilder:t().func,activeClassName:t().string,activeLinkClassName:t().string,previousClassName:t().string,nextClassName:t().string,previousLinkClassName:t().string,nextLinkClassName:t().string,disabledClassName:t().string,disabledLinkClassName:t().string,breakClassName:t().string,breakLinkClassName:t().string,extraAriaContext:t().string,ariaLabelBuilder:t().func,eventListener:t().string,renderOnZeroPageCount:t().func,selectedPageRel:t().string}),k(Y,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(a){return a},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const oe=Y})(),I})())})(de);var Re=de.exports;const Ae=fe(Re),Se=({handleClickPage:_,totalPages:f,currentPage:Q})=>g.jsx(g.Fragment,{children:g.jsx(Ae,{nextLabel:"→",onPageChange:_,pageRangeDisplayed:window.innerWidth<480?4:5,marginPagesDisplayed:0,pageCount:f,previousLabel:"←",pageClassName:"w-[30px] h-[30px] rounded-full border border-[#0c0c0c] flex items-center justify-center",pageLinkClassName:"w-[30px] h-[30px] rounded-full flex items-center justify-center",previousClassName:"mr-3 border-none",previousLinkClassName:"w-[30px] h-[30px] rounded-full text-md text-[#0c0c0c]  flex items-base justify-center  border border-[#0c0c0c]",nextClassName:"ml-3 border-none",nextLinkClassName:"w-[30px] h-[30px] rounded-full text-md text-[#0c0c0c]  flex items-base justify-center  border border-[#0c0c0c]",containerClassName:"flex gap-[5px] mx-auto mt-10 w-max",activeClassName:"bg-[#0c0c0c] text-white",renderOnZeroPageCount:null,disabledClassName:"text-gray border border-gray",disabledLinkClassName:"w-[30px] h-[30px] text-[#9b9b9b] border border-[#9b9b9b] cursor-default rounded-full",forcePage:Q})}),Be=({products:_})=>{const{t:f}=ce(),{i18n:Q}=ce();Q.language;const F=ee(be),R=ee(he),b=ee(ve),I=ee(xe),c=ee(ye),p=ee(Ce),m=Pe(),[t,q]=ie.useState(1),B=8,x=ke(),P=Ne(),w=new URLSearchParams(P.search),ae=w.get("name"),E=w.get("category"),G=w.get("type"),H=w.get("price"),te=w.get("sale"),J=w.get("new"),V=w.get("page"),h=new URLSearchParams;ie.useEffect(()=>{ae&&m(Le(ae)),E&&m(pe(E)),G&&m(ue(G)),H&&m(we(H)),te&&m(je(te)),J&&m(Ee(J)),V&&q(Number(V)),E===""&&(m(ue("")),m(pe("")))},[P.search,m]),ie.useEffect(()=>{F&&h.set("name",F),I&&R!==""&&h.set("type",I),R&&h.set("category",R),b&&h.set("price",b),p&&h.set("new",p),c&&h.set("sale",c),t&&h.set("page",t),x(`${P.pathname}?${h.toString()}`)},[F,R,I,b,p,c,t,x,P.pathname]);const M=a=>!a||a.length<=0?a:(b.replace(/\D/g,""),a.filter(n=>{let i;const l=n.name.ru.toLowerCase().includes(F.toLowerCase())||n.name.ua.toLowerCase().includes(F.toLowerCase());R===f("monuments")?i=[f("availability"),f("vertical"),f("horizontal"),f("small")].some(r=>n.category.toLowerCase().includes(r.toLowerCase())):R===f("landscaping")?i=[f("antiSettlementSlabs"),f("pavingTiles"),f("graniteTiles"),f("fencing"),f("tablesAndBenches"),f("vasesAndLamps"),f("cubesAndSpheres")].some(r=>n.category.toLowerCase().includes(r.toLowerCase())):R===f("relatedProducts")?i=[f("glassPhotos"),f("plaques"),f("embeddedParts")].some(r=>n.category.toLowerCase().includes(r.toLowerCase())):i=R===f("all_categories")||n.category.toLowerCase().includes(R.toLowerCase());const N=I===f("all_types")||n.type.toLowerCase().includes(I.toLowerCase()),T=!c||n.discount>0;return l&&i&&N&&T}).sort((n,i)=>b==="min"?n.price-i.price:b==="max"?i.price-n.price:"")),k=a=>{if(!p)return M(a);const l=a.map(N=>({timestamp:new Date(N.createdAt).getTime(),product:N})).sort((N,T)=>T.timestamp-N.timestamp).map(N=>N.product);return M(l)},Y=a=>k(a).slice((t-1)*B,t*B),oe=a=>{q(a.selected+1)};return g.jsx(g.Fragment,{children:Y(_)&&Y(_).length>0?g.jsxs("div",{className:"mx-auto",children:[g.jsx("div",{className:"grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3 lg:grid-cols-5",children:Y(_).map((a,n)=>g.jsx(Oe,{id:a._id,image:a.mainPhoto,name:a.name,description:a.description,price:a.price,discount:a.discount,category:a.category,type:a.type},a._id))}),Math.ceil(M(_).length/B)>1&&g.jsx(Se,{handleClickPage:oe,totalPages:Math.ceil(M(_).length/B)})]}):g.jsx("div",{className:"text-center h-screen align-middle",children:f("not_found")})})},De=()=>g.jsxs("div",{className:"grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3 lg:grid-cols-5",children:[g.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse"}),g.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse"}),g.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse"}),g.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse"}),g.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse"}),g.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse"}),g.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse hidden md:block"}),g.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse hidden md:block"}),g.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse hidden md:block"}),g.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse hidden lg:block"}),g.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse hidden lg:block"}),g.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse hidden lg:block"}),g.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse hidden lg:block"}),g.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse hidden lg:block"}),g.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse hidden lg:block"})]});export{Be as P,De as S};