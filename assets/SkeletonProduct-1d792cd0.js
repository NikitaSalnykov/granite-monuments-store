import{r as oe,l as de,m as ge,j as m,u as le,b as $,n as me,o as fe,p as be,q as he,s as ve,t as xe,v as Ce}from"./index-cab90763.js";var ce={exports:{}};(function(R,f){(function(Y,z){R.exports=z(oe)})(de,Y=>(()=>{var z={703:(p,u,P)=>{var a=P(414);function S(){}function B(){}B.resetWarningCache=S,p.exports=function(){function v(j,k,Q,J,ae,K){if(K!==a){var U=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw U.name="Invariant Violation",U}}function g(){return v}v.isRequired=v;var _={array:v,bigint:v,bool:v,func:v,number:v,object:v,string:v,symbol:v,any:v,arrayOf:g,element:v,elementType:v,instanceOf:g,node:v,objectOf:g,oneOf:g,oneOfType:g,shape:g,exact:g,checkPropTypes:B,resetWarningCache:S};return _.PropTypes=_,_}},697:(p,u,P)=>{p.exports=P(703)()},414:p=>{p.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:p=>{p.exports=Y}},D={};function y(p){var u=D[p];if(u!==void 0)return u.exports;var P=D[p]={exports:{}};return z[p](P,P.exports,y),P.exports}y.n=p=>{var u=p&&p.__esModule?()=>p.default:()=>p;return y.d(u,{a:u}),u},y.d=(p,u)=>{for(var P in u)y.o(u,P)&&!y.o(p,P)&&Object.defineProperty(p,P,{enumerable:!0,get:u[P]})},y.o=(p,u)=>Object.prototype.hasOwnProperty.call(p,u),y.r=p=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(p,"__esModule",{value:!0})};var G={};return(()=>{y.r(G),y.d(G,{default:()=>pe});var p=y(98),u=y.n(p),P=y(697),a=y.n(P);function S(){return S=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(r[o]=l[o])}return r},S.apply(this,arguments)}var B=function(r){var s=r.pageClassName,l=r.pageLinkClassName,o=r.page,W=r.selected,Z=r.activeClassName,A=r.activeLinkClassName,t=r.getEventListener,e=r.pageSelectedHandler,d=r.href,n=r.extraAriaContext,i=r.pageLabelBuilder,c=r.rel,h=r.ariaLabel||"Page "+o+(n?" "+n:""),N=null;return W&&(N="page",h=r.ariaLabel||"Page "+o+" is your current page",s=s!==void 0?s+" "+Z:Z,l!==void 0?A!==void 0&&(l=l+" "+A):l=A),u().createElement("li",{className:s},u().createElement("a",S({rel:c,role:d?void 0:"button",className:l,href:d,tabIndex:W?"-1":"0","aria-label":h,"aria-current":N,onKeyPress:e},t(e)),i(o)))};B.propTypes={pageSelectedHandler:a().func.isRequired,selected:a().bool.isRequired,pageClassName:a().string,pageLinkClassName:a().string,activeClassName:a().string,activeLinkClassName:a().string,extraAriaContext:a().string,href:a().string,ariaLabel:a().string,page:a().number.isRequired,getEventListener:a().func.isRequired,pageLabelBuilder:a().func.isRequired,rel:a().string};const v=B;function g(){return g=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(r[o]=l[o])}return r},g.apply(this,arguments)}var _=function(r){var s=r.breakLabel,l=r.breakAriaLabel,o=r.breakClassName,W=r.breakLinkClassName,Z=r.breakHandler,A=r.getEventListener,t=o||"break";return u().createElement("li",{className:t},u().createElement("a",g({className:W,role:"button",tabIndex:"0","aria-label":l,onKeyPress:Z},A(Z)),s))};_.propTypes={breakLabel:a().oneOfType([a().string,a().node]),breakAriaLabel:a().string,breakClassName:a().string,breakLinkClassName:a().string,breakHandler:a().func.isRequired,getEventListener:a().func.isRequired};const j=_;function k(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r??s}function Q(r){return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Q(r)}function J(){return J=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&(r[o]=l[o])}return r},J.apply(this,arguments)}function ae(r,s){for(var l=0;l<s.length;l++){var o=s[l];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function K(r,s){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,o){return l.__proto__=o,l},K(r,s)}function U(r,s){if(s&&(Q(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return C(r)}function C(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function te(r){return te=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(s){return s.__proto__||Object.getPrototypeOf(s)},te(r)}function L(r,s,l){return s in r?Object.defineProperty(r,s,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[s]=l,r}var se=function(r){(function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&K(t,e)})(A,r);var s,l,o,W,Z=(o=A,W=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,e=te(o);if(W){var d=te(this).constructor;t=Reflect.construct(e,arguments,d)}else t=e.apply(this,arguments);return U(this,t)});function A(t){var e,d;return function(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}(this,A),L(C(e=Z.call(this,t)),"handlePreviousPage",function(n){var i=e.state.selected;e.handleClick(n,null,i>0?i-1:void 0,{isPrevious:!0})}),L(C(e),"handleNextPage",function(n){var i=e.state.selected,c=e.props.pageCount;e.handleClick(n,null,i<c-1?i+1:void 0,{isNext:!0})}),L(C(e),"handlePageSelected",function(n,i){if(e.state.selected===n)return e.callActiveCallback(n),void e.handleClick(i,null,void 0,{isActive:!0});e.handleClick(i,null,n)}),L(C(e),"handlePageChange",function(n){e.state.selected!==n&&(e.setState({selected:n}),e.callCallback(n))}),L(C(e),"getEventListener",function(n){return L({},e.props.eventListener,n)}),L(C(e),"handleClick",function(n,i,c){var h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},N=h.isPrevious,T=N!==void 0&&N,X=h.isNext,ee=X!==void 0&&X,V=h.isBreak,E=V!==void 0&&V,I=h.isActive,M=I!==void 0&&I;n.preventDefault?n.preventDefault():n.returnValue=!1;var F=e.state.selected,b=e.props.onClick,O=c;if(b){var w=b({index:i,selected:F,nextSelectedPage:c,event:n,isPrevious:T,isNext:ee,isBreak:E,isActive:M});if(w===!1)return;Number.isInteger(w)&&(O=w)}O!==void 0&&e.handlePageChange(O)}),L(C(e),"handleBreakClick",function(n,i){var c=e.state.selected;e.handleClick(i,n,c<n?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),L(C(e),"callCallback",function(n){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:n})}),L(C(e),"callActiveCallback",function(n){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:n})}),L(C(e),"getElementPageRel",function(n){var i=e.state.selected,c=e.props,h=c.nextPageRel,N=c.prevPageRel,T=c.selectedPageRel;return i-1===n?N:i===n?T:i+1===n?h:void 0}),L(C(e),"pagination",function(){var n=[],i=e.props,c=i.pageRangeDisplayed,h=i.pageCount,N=i.marginPagesDisplayed,T=i.breakLabel,X=i.breakClassName,ee=i.breakLinkClassName,V=i.breakAriaLabels,E=e.state.selected;if(h<=c)for(var I=0;I<h;I++)n.push(e.getPageElement(I));else{var M=c/2,F=c-M;E>h-c/2?M=c-(F=h-E):E<c/2&&(F=c-(M=E));var b,O,w=function(q){return e.getPageElement(q)},x=[];for(b=0;b<h;b++){var re=b+1;if(re<=N)x.push({type:"page",index:b,display:w(b)});else if(re>h-N)x.push({type:"page",index:b,display:w(b)});else if(b>=E-M&&b<=E+(E===0&&c>1?F-1:F))x.push({type:"page",index:b,display:w(b)});else if(T&&x.length>0&&x[x.length-1].display!==O&&(c>0||N>0)){var ie=b<E?V.backward:V.forward;O=u().createElement(j,{key:b,breakAriaLabel:ie,breakLabel:T,breakClassName:X,breakLinkClassName:ee,breakHandler:e.handleBreakClick.bind(null,b),getEventListener:e.getEventListener}),x.push({type:"break",index:b,display:O})}}x.forEach(function(q,H){var ne=q;q.type==="break"&&x[H-1]&&x[H-1].type==="page"&&x[H+1]&&x[H+1].type==="page"&&x[H+1].index-x[H-1].index<=2&&(ne={type:"page",index:q.index,display:w(q.index)}),n.push(ne.display)})}return n}),t.initialPage!==void 0&&t.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(t.initialPage,") and forcePage (").concat(t.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),d=t.initialPage?t.initialPage:t.forcePage?t.forcePage:0,e.state={selected:d},e}return s=A,(l=[{key:"componentDidMount",value:function(){var t=this.props,e=t.initialPage,d=t.disableInitialCallback,n=t.extraAriaContext,i=t.pageCount,c=t.forcePage;e===void 0||d||this.callCallback(e),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(i)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(i,"). Did you forget a Math.ceil()?")),e!==void 0&&e>i-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(i-1,").")),c!==void 0&&c>i-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(c," > ").concat(i-1,")."))}},{key:"componentDidUpdate",value:function(t){this.props.forcePage!==void 0&&this.props.forcePage!==t.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(t.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var t=this.state.selected,e=this.props,d=e.pageCount,n=t+e.pageRangeDisplayed;return n>=d?d-1:n}},{key:"getBackwardJump",value:function(){var t=this.state.selected-this.props.pageRangeDisplayed;return t<0?0:t}},{key:"getElementHref",value:function(t){var e=this.props,d=e.hrefBuilder,n=e.pageCount,i=e.hrefAllControls;if(d)return i||t>=0&&t<n?d(t+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(t){var e=t===this.state.selected;if(this.props.ariaLabelBuilder&&t>=0&&t<this.props.pageCount){var d=this.props.ariaLabelBuilder(t+1,e);return this.props.extraAriaContext&&!e&&(d=d+" "+this.props.extraAriaContext),d}}},{key:"getPageElement",value:function(t){var e=this.state.selected,d=this.props,n=d.pageClassName,i=d.pageLinkClassName,c=d.activeClassName,h=d.activeLinkClassName,N=d.extraAriaContext,T=d.pageLabelBuilder;return u().createElement(v,{key:t,pageSelectedHandler:this.handlePageSelected.bind(null,t),selected:e===t,rel:this.getElementPageRel(t),pageClassName:n,pageLinkClassName:i,activeClassName:c,activeLinkClassName:h,extraAriaContext:N,href:this.getElementHref(t),ariaLabel:this.ariaLabelBuilder(t),page:t+1,pageLabelBuilder:T,getEventListener:this.getEventListener})}},{key:"render",value:function(){var t=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&t!==void 0)return t&&t(this.props);var e=this.props,d=e.disabledClassName,n=e.disabledLinkClassName,i=e.pageCount,c=e.className,h=e.containerClassName,N=e.previousLabel,T=e.previousClassName,X=e.previousLinkClassName,ee=e.previousAriaLabel,V=e.prevRel,E=e.nextLabel,I=e.nextClassName,M=e.nextLinkClassName,F=e.nextAriaLabel,b=e.nextRel,O=this.state.selected,w=O===0,x=O===i-1,re="".concat(k(T)).concat(w?" ".concat(k(d)):""),ie="".concat(k(I)).concat(x?" ".concat(k(d)):""),q="".concat(k(X)).concat(w?" ".concat(k(n)):""),H="".concat(k(M)).concat(x?" ".concat(k(n)):""),ne=w?"true":"false",ue=x?"true":"false";return u().createElement("ul",{className:c||h,role:"navigation","aria-label":"Pagination"},u().createElement("li",{className:re},u().createElement("a",J({className:q,href:this.getElementHref(O-1),tabIndex:w?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":ne,"aria-label":ee,rel:V},this.getEventListener(this.handlePreviousPage)),N)),this.pagination(),u().createElement("li",{className:ie},u().createElement("a",J({className:H,href:this.getElementHref(O+1),tabIndex:x?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":ue,"aria-label":F,rel:b},this.getEventListener(this.handleNextPage)),E)))}}])&&ae(s.prototype,l),Object.defineProperty(s,"prototype",{writable:!1}),A}(p.Component);L(se,"propTypes",{pageCount:a().number.isRequired,pageRangeDisplayed:a().number,marginPagesDisplayed:a().number,previousLabel:a().node,previousAriaLabel:a().string,prevPageRel:a().string,prevRel:a().string,nextLabel:a().node,nextAriaLabel:a().string,nextPageRel:a().string,nextRel:a().string,breakLabel:a().oneOfType([a().string,a().node]),breakAriaLabels:a().shape({forward:a().string,backward:a().string}),hrefBuilder:a().func,hrefAllControls:a().bool,onPageChange:a().func,onPageActive:a().func,onClick:a().func,initialPage:a().number,forcePage:a().number,disableInitialCallback:a().bool,containerClassName:a().string,className:a().string,pageClassName:a().string,pageLinkClassName:a().string,pageLabelBuilder:a().func,activeClassName:a().string,activeLinkClassName:a().string,previousClassName:a().string,nextClassName:a().string,previousLinkClassName:a().string,nextLinkClassName:a().string,disabledClassName:a().string,disabledLinkClassName:a().string,breakClassName:a().string,breakLinkClassName:a().string,extraAriaContext:a().string,ariaLabelBuilder:a().func,eventListener:a().string,renderOnZeroPageCount:a().func,selectedPageRel:a().string}),L(se,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(r){return r},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const pe=se})(),G})())})(ce);var ye=ce.exports;const Pe=ge(ye),ke=({handleClickPage:R,totalPages:f,currentPage:Y})=>m.jsx(m.Fragment,{children:m.jsx(Pe,{nextLabel:"→",onPageChange:R,pageRangeDisplayed:window.innerWidth<480?4:5,marginPagesDisplayed:0,pageCount:f,previousLabel:"←",pageClassName:"w-[30px] h-[30px] rounded-full border border-[#0c0c0c] flex items-center justify-center",pageLinkClassName:"w-[30px] h-[30px] rounded-full flex items-center justify-center",previousClassName:"mr-3 border-none",previousLinkClassName:"w-[30px] h-[30px] rounded-full text-md text-[#0c0c0c]  flex items-base justify-center  border border-[#0c0c0c]",nextClassName:"ml-3 border-none",nextLinkClassName:"w-[30px] h-[30px] rounded-full text-md text-[#0c0c0c]  flex items-base justify-center  border border-[#0c0c0c]",containerClassName:"flex gap-[5px] mx-auto mt-10 w-max",activeClassName:"bg-[#0c0c0c] text-white",renderOnZeroPageCount:null,disabledClassName:"text-gray border border-gray",disabledLinkClassName:"w-[30px] h-[30px] text-[#9b9b9b] border border-[#9b9b9b] cursor-default rounded-full",forcePage:Y})}),Le=({products:R})=>{const{t:f}=le(),{i18n:Y}=le();Y.language;const z=$(me),D=$(fe),y=$(be),G=$(he),p=$(ve);$(xe);const[u,P]=oe.useState(1),a=8,S=g=>{if(!R||R.length<=0)return g;const _=y.replace(/\D/g,"");return g.filter(j=>{let k;const Q=j.name.ru.toLowerCase().includes(z.toLowerCase())||j.name.ua.toLowerCase().includes(z.toLowerCase());D===f("monuments")?k=[f("availability"),f("vertical"),f("horizontal"),f("small")].some(C=>j.category.toLowerCase().includes(C.toLowerCase())):D===f("landscaping")?k=[f("antiSettlementSlabs"),f("pavingTiles"),f("graniteTiles"),f("fencing"),f("tablesAndBenches"),f("vasesAndLamps"),f("cubesAndSpheres")].some(C=>j.category.toLowerCase().includes(C.toLowerCase())):D===f("relatedProducts")?k=[f("glassPhotos"),f("plaques"),f("embeddedParts")].some(C=>j.category.toLowerCase().includes(C.toLowerCase())):k=D===f("all_categories")||j.category.toLowerCase().includes(D.toLowerCase());const J=G===f("all_types")||j.type.toLowerCase().includes(G.toLowerCase()),ae=!p||j.discount>0,K=y===""||+j.price<_;return Q&&k&&J&&ae&&K})},B=g=>S(g).slice((u-1)*a,u*a),v=g=>{P(g.selected+1)};return m.jsx(m.Fragment,{children:B(R)&&B(R).length>0?m.jsxs("div",{className:"mx-auto",children:[m.jsx("div",{className:"grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3 lg:grid-cols-5",children:B(R).map((g,_)=>m.jsx(Ce,{id:g._id,image:g.mainPhoto,name:g.name,description:g.description,price:g.price,discount:g.discount,category:g.category,type:g.type},g._id))}),Math.ceil(S(R).length/a)>1&&m.jsx(ke,{handleClickPage:v,totalPages:Math.ceil(S(R).length/a)})]}):m.jsx("div",{className:"text-center h-screen align-middle",children:f("not_found")})})},we=()=>m.jsxs("div",{className:"grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3 lg:grid-cols-5",children:[m.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse"}),m.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse"}),m.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse"}),m.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse"}),m.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse"}),m.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse"}),m.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse hidden md:block"}),m.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse hidden md:block"}),m.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse hidden md:block"}),m.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse hidden lg:block"}),m.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse hidden lg:block"}),m.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse hidden lg:block"}),m.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse hidden lg:block"}),m.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse hidden lg:block"}),m.jsx("div",{className:"bg-slate-200 h-[200px] md:h-[300px] rounded-lg w-full animate-pulse hidden lg:block"})]});export{Le as P,we as S};
