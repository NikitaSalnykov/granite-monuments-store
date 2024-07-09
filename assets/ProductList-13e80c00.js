import{R as ce,b as Pe,c as Ne,u as pe,d as q,g as ge,e as fe,f as me,h as he,i as be,k as xe,l as ke,m as je,r as de,s as oe,n as R,j as t,o as Le,p as we,q as Re,t as Oe,v as Ee,w as Se,x as _e,y as Ae}from"./index-8a094c6d.js";function ve(y=ce){const p=y===ce?Pe:Ne(y);return function(){const{store:N}=p();return N}}const Te=ve();function Fe(y=ce){const p=y===ce?Te:ve(y);return function(){return p().dispatch}}const Be=Fe(),ze=({nameFilter:y=!1,filterType:p=!1,filterCategory:A=!1,filterPrice:N=!1,filterNew:z=!1,filterSale:x=!1,value:J})=>{const r=Be(),{t:o}=pe(),b=q(ge),a=q(fe),I=q(me),$=q(he),d=q(be);q(xe);let k=ke();const h=je().pathname,[S,U]=de.useState(J==="sale");de.useEffect(()=>{K()},[h]);const K=()=>{h.includes("memorials")?r(oe("memorials")):h.includes("landscaping")?r(oe("landscaping")):h.includes("relatedproducts")&&r(oe("relatedProducts")),h.includes("availability")?r(R("availability")):h.includes("vertical")?r(R("vertical")):h.includes("horizontal")?r(R("horizontal")):h.includes("small")?r(R("small")):h.includes("antiSettlementSlabs")?r(R("antiSettlementSlabs")):h.includes("pavingTiles")?r(R("pavingTiles")):h.includes("graniteTiles")?r(R("graniteTiles")):h.includes("fencing")?r(R("fencing")):h.includes("tablesAndBenches")?r(R("tablesAndBenches")):h.includes("vasesAndLamps")?r(R("vasesAndLamps")):h.includes("cubesAndSpheres")?r(R("cubesAndSpheres")):h.includes("glassPhotos")?r(R("glassPhotos")):h.includes("plaques")?r(R("plaques")):h.includes("embeddedParts")?r(R("embeddedParts")):h.includes("all")&&r(R(""))},ae=({currentTarget:w})=>{r(we(w.value))},T=({currentTarget:w})=>{r(R(w.value))},F=({currentTarget:w})=>{r(oe(w.value)),k(`/${w.value}/all`)},E=({currentTarget:w})=>{r(Re(w.value))},te=w=>{const re=w.currentTarget.checked;r(Oe(re))},L=w=>{const re=w.currentTarget.checked;U(re),r(Ee(re))};return t.jsx("div",{className:"w-full flex flex-col lg:flex-row mb-4 gap-4 items-center justify-center",children:t.jsxs("div",{className:"flex gap-4 flex-wrap",children:[y&&t.jsxs("div",{className:"flex gap-1 bg-gray-50 border-[1px] px-2 text-gray-800 border-gray-300 hover:outline-none focus:outline-none rounded-lg mx-auto py-2",children:[t.jsx("label",{className:"flex justify-center items-center",style:{marginRight:"14px"},htmlFor:"filter",children:t.jsx(Le,{id:"icon-search",size:22,stroke:"black"})}),t.jsx("input",{id:"filter",type:"text",name:"input",required:!0,value:I,onChange:ae,variant:"standard",className:"w-full hover:outline-none focus:outline-none bg-gray-50"})]}),t.jsxs("div",{className:"flex gap-4 mx-auto",children:[A&&t.jsxs("div",{className:"flex justify-center items-center",children:[t.jsx("label",{className:"sr-only",style:{marginRight:"14px"},htmlFor:"filterCategory",children:"Категория"}),t.jsxs("select",{id:"filterCategory",onChange:F,className:"smOnly:w-[120px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-full p-2.5",value:b,children:[t.jsx("option",{value:"all",children:"Всі категорії"}),t.jsx("option",{value:"memorials",children:o("monuments")}),t.jsx("option",{value:"landscaping",children:o("landscaping")}),t.jsx("option",{value:"relatedProducts",children:o("related_products")})]})]}),p&&b==="memorials"&&t.jsxs("div",{className:"flex justify-center items-center",children:[t.jsx("label",{className:"sr-only",style:{marginRight:"14px"},htmlFor:"filterType",children:"Тип"}),t.jsxs("select",{id:"filterType",onChange:T,className:"smOnly:min-w-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",value:a,children:[t.jsx("option",{value:"all",children:"Всі типи"}),t.jsx("option",{value:"availability",children:o("availability")}),t.jsx("option",{value:"vertical",children:o("vertical")}),t.jsx("option",{value:"horizontal",children:o("horizontal")}),t.jsx("option",{value:"small",children:o("small")})]})]}),p&&b==="landscaping"&&t.jsxs("div",{className:"flex justify-center items-center",children:[t.jsx("label",{className:"sr-only",style:{marginRight:"14px"},htmlFor:"filterType",children:"Тип"}),t.jsxs("select",{id:"filterType",onChange:T,className:"smOnly:min-w-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",value:a,children:[t.jsx("option",{value:"all",children:"Всі типи"}),t.jsx("option",{value:"antiSettlementSlabs",children:o("anti_settlement_slabs")}),t.jsx("option",{value:"pavingTiles",children:o("paving_tiles")}),t.jsx("option",{value:"graniteTiles",children:o("granite_tiles")}),t.jsx("option",{value:"fencing",children:o("fencing")}),t.jsx("option",{value:"tablesAndBenches",children:o("tables_and_benches")}),t.jsx("option",{value:"vasesAndLamps",children:o("vases_and_lamps")}),t.jsx("option",{value:"cubesAndSpheres",children:o("cubes_and_spheres")})]})]}),p&&b==="relatedProducts"&&t.jsxs("div",{className:"flex justify-center items-center",children:[t.jsx("label",{className:"sr-only",style:{marginRight:"14px"},htmlFor:"filterType",children:"Тип"}),t.jsxs("select",{id:"filterType",onChange:T,className:"smOnly:min-w-[100px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",value:a,children:[t.jsx("option",{value:"all",children:"Всі типи"}),t.jsx("option",{value:"glassPhotos",children:o("glass_photos")}),t.jsx("option",{value:"plaques",children:o("plaques")}),t.jsx("option",{value:"embeddedParts",children:o("embedded_parts")})]})]}),N&&t.jsxs("div",{className:"flex justify-center items-center",children:[t.jsx("label",{className:"sr-only",style:{marginRight:"14px"},htmlFor:"filterPrice",children:"Ціна"}),t.jsxs("select",{id:"filterPrice",onChange:E,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",value:d,children:[t.jsx("option",{value:"",children:"Всі ціни"}),t.jsx("option",{value:"min",children:"Від дешевих до дорогих"}),t.jsx("option",{value:"max",children:"Від дорогих до дешевих"})]})]}),z&&t.jsxs("div",{className:"flex justify-center items-center",children:[t.jsx("input",{id:"filterNew",type:"checkbox",checked:$,onChange:te,className:"form-checkbox h-5 w-5 text-indigo-600 rounded-lg"}),t.jsx("label",{htmlFor:"filterNew",className:"ml-2 text-gray-700",children:"Новинка"})]}),x&&t.jsxs("div",{className:"flex justify-center items-center",children:[t.jsx("input",{id:"filterSale",type:"checkbox",checked:S,onChange:L,className:"form-checkbox h-5 w-5 text-indigo-600 rounded-lg"}),t.jsx("label",{htmlFor:"filterSale",className:"ml-2 text-gray-700",children:"Розпродаж"})]})]})]})})},De=({id:y,category:p,type:A,image:N,title:z,description:x,price:J,discount:r})=>t.jsx("div",{className:"relative p",children:t.jsxs(Se,{to:`/${p}/${A}/${y}`,children:[t.jsx("img",{className:"object-cover w-full rounded-lg",src:N,alt:"Product Image"}),r&&r>0&&t.jsx("div",{className:"absolute top-0 left-0",children:t.jsxs("p",{className:"text-xs md:text-md p-1 bg-red text-white",children:[r,"%"]})}),t.jsxs("div",{className:"flex flex-col justify-between py-2",children:[t.jsx("h4",{className:"text-xl font-semibold text-gray-800 hover:underline dark:text-white",children:z}),t.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-300",children:x})]}),t.jsxs("div",{className:"flex gap-2 items-center justify-between",children:[t.jsx("div",{className:"flex gap-2 items-center",children:t.jsx("p",{className:"md:text-xl font-bold",children:J})}),t.jsx("div",{className:"py-1 px-2 smOnly:text-xs md:px-3 border-[1px] border-grey",children:"Подробнее"})]})]})},y);var ye={exports:{}};(function(y,p){(function(A,N){y.exports=N(de)})(_e,A=>(()=>{var N={703:(r,o,b)=>{var a=b(414);function I(){}function $(){}$.resetWarningCache=I,r.exports=function(){function d(h,S,U,K,ae,T){if(T!==a){var F=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw F.name="Invariant Violation",F}}function k(){return d}d.isRequired=d;var j={array:d,bigint:d,bool:d,func:d,number:d,object:d,string:d,symbol:d,any:d,arrayOf:k,element:d,elementType:d,instanceOf:k,node:d,objectOf:k,oneOf:k,oneOfType:k,shape:k,exact:k,checkPropTypes:$,resetWarningCache:I};return j.PropTypes=j,j}},697:(r,o,b)=>{r.exports=b(703)()},414:r=>{r.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:r=>{r.exports=A}},z={};function x(r){var o=z[r];if(o!==void 0)return o.exports;var b=z[r]={exports:{}};return N[r](b,b.exports,x),b.exports}x.n=r=>{var o=r&&r.__esModule?()=>r.default:()=>r;return x.d(o,{a:o}),o},x.d=(r,o)=>{for(var b in o)x.o(o,b)&&!x.o(r,b)&&Object.defineProperty(r,b,{enumerable:!0,get:o[b]})},x.o=(r,o)=>Object.prototype.hasOwnProperty.call(r,o),x.r=r=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var J={};return(()=>{x.r(J),x.d(J,{default:()=>re});var r=x(98),o=x.n(r),b=x(697),a=x.n(b);function I(){return I=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var g in u)Object.prototype.hasOwnProperty.call(u,g)&&(s[g]=u[g])}return s},I.apply(this,arguments)}var $=function(s){var l=s.pageClassName,u=s.pageLinkClassName,g=s.page,Q=s.selected,X=s.activeClassName,H=s.activeLinkClassName,n=s.getEventListener,e=s.pageSelectedHandler,m=s.href,i=s.extraAriaContext,c=s.pageLabelBuilder,f=s.rel,C=s.ariaLabel||"Page "+g+(i?" "+i:""),O=null;return Q&&(O="page",C=s.ariaLabel||"Page "+g+" is your current page",l=l!==void 0?l+" "+X:X,u!==void 0?H!==void 0&&(u=u+" "+H):u=H),o().createElement("li",{className:l},o().createElement("a",I({rel:f,role:m?void 0:"button",className:u,href:m,tabIndex:Q?"-1":"0","aria-label":C,"aria-current":O,onKeyPress:e},n(e)),c(g)))};$.propTypes={pageSelectedHandler:a().func.isRequired,selected:a().bool.isRequired,pageClassName:a().string,pageLinkClassName:a().string,activeClassName:a().string,activeLinkClassName:a().string,extraAriaContext:a().string,href:a().string,ariaLabel:a().string,page:a().number.isRequired,getEventListener:a().func.isRequired,pageLabelBuilder:a().func.isRequired,rel:a().string};const d=$;function k(){return k=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var g in u)Object.prototype.hasOwnProperty.call(u,g)&&(s[g]=u[g])}return s},k.apply(this,arguments)}var j=function(s){var l=s.breakLabel,u=s.breakAriaLabel,g=s.breakClassName,Q=s.breakLinkClassName,X=s.breakHandler,H=s.getEventListener,n=g||"break";return o().createElement("li",{className:n},o().createElement("a",k({className:Q,role:"button",tabIndex:"0","aria-label":u,onKeyPress:X},H(X)),l))};j.propTypes={breakLabel:a().oneOfType([a().string,a().node]),breakAriaLabel:a().string,breakClassName:a().string,breakLinkClassName:a().string,breakHandler:a().func.isRequired,getEventListener:a().func.isRequired};const h=j;function S(s){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return s??l}function U(s){return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},U(s)}function K(){return K=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var u=arguments[l];for(var g in u)Object.prototype.hasOwnProperty.call(u,g)&&(s[g]=u[g])}return s},K.apply(this,arguments)}function ae(s,l){for(var u=0;u<l.length;u++){var g=l[u];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(s,g.key,g)}}function T(s,l){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,g){return u.__proto__=g,u},T(s,l)}function F(s,l){if(l&&(U(l)==="object"||typeof l=="function"))return l;if(l!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return E(s)}function E(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function te(s){return te=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(l){return l.__proto__||Object.getPrototypeOf(l)},te(s)}function L(s,l,u){return l in s?Object.defineProperty(s,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[l]=u,s}var w=function(s){(function(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&T(n,e)})(H,s);var l,u,g,Q,X=(g=H,Q=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var n,e=te(g);if(Q){var m=te(this).constructor;n=Reflect.construct(e,arguments,m)}else n=e.apply(this,arguments);return F(this,n)});function H(n){var e,m;return function(i,c){if(!(i instanceof c))throw new TypeError("Cannot call a class as a function")}(this,H),L(E(e=X.call(this,n)),"handlePreviousPage",function(i){var c=e.state.selected;e.handleClick(i,null,c>0?c-1:void 0,{isPrevious:!0})}),L(E(e),"handleNextPage",function(i){var c=e.state.selected,f=e.props.pageCount;e.handleClick(i,null,c<f-1?c+1:void 0,{isNext:!0})}),L(E(e),"handlePageSelected",function(i,c){if(e.state.selected===i)return e.callActiveCallback(i),void e.handleClick(c,null,void 0,{isActive:!0});e.handleClick(c,null,i)}),L(E(e),"handlePageChange",function(i){e.state.selected!==i&&(e.setState({selected:i}),e.callCallback(i))}),L(E(e),"getEventListener",function(i){return L({},e.props.eventListener,i)}),L(E(e),"handleClick",function(i,c,f){var C=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},O=C.isPrevious,M=O!==void 0&&O,ne=C.isNext,se=ne!==void 0&&ne,ee=C.isBreak,B=ee!==void 0&&ee,W=C.isActive,Z=W!==void 0&&W;i.preventDefault?i.preventDefault():i.returnValue=!1;var V=e.state.selected,v=e.props.onClick,D=f;if(v){var _=v({index:c,selected:V,nextSelectedPage:f,event:i,isPrevious:M,isNext:se,isBreak:B,isActive:Z});if(_===!1)return;Number.isInteger(_)&&(D=_)}D!==void 0&&e.handlePageChange(D)}),L(E(e),"handleBreakClick",function(i,c){var f=e.state.selected;e.handleClick(c,i,f<i?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),L(E(e),"callCallback",function(i){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:i})}),L(E(e),"callActiveCallback",function(i){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:i})}),L(E(e),"getElementPageRel",function(i){var c=e.state.selected,f=e.props,C=f.nextPageRel,O=f.prevPageRel,M=f.selectedPageRel;return c-1===i?O:c===i?M:c+1===i?C:void 0}),L(E(e),"pagination",function(){var i=[],c=e.props,f=c.pageRangeDisplayed,C=c.pageCount,O=c.marginPagesDisplayed,M=c.breakLabel,ne=c.breakClassName,se=c.breakLinkClassName,ee=c.breakAriaLabels,B=e.state.selected;if(C<=f)for(var W=0;W<C;W++)i.push(e.getPageElement(W));else{var Z=f/2,V=f-Z;B>C-f/2?Z=f-(V=C-B):B<f/2&&(V=f-(Z=B));var v,D,_=function(Y){return e.getPageElement(Y)},P=[];for(v=0;v<C;v++){var ie=v+1;if(ie<=O)P.push({type:"page",index:v,display:_(v)});else if(ie>C-O)P.push({type:"page",index:v,display:_(v)});else if(v>=B-Z&&v<=B+(B===0&&f>1?V-1:V))P.push({type:"page",index:v,display:_(v)});else if(M&&P.length>0&&P[P.length-1].display!==D&&(f>0||O>0)){var ue=v<B?ee.backward:ee.forward;D=o().createElement(h,{key:v,breakAriaLabel:ue,breakLabel:M,breakClassName:ne,breakLinkClassName:se,breakHandler:e.handleBreakClick.bind(null,v),getEventListener:e.getEventListener}),P.push({type:"break",index:v,display:D})}}P.forEach(function(Y,G){var le=Y;Y.type==="break"&&P[G-1]&&P[G-1].type==="page"&&P[G+1]&&P[G+1].type==="page"&&P[G+1].index-P[G-1].index<=2&&(le={type:"page",index:Y.index,display:_(Y.index)}),i.push(le.display)})}return i}),n.initialPage!==void 0&&n.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(n.initialPage,") and forcePage (").concat(n.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),m=n.initialPage?n.initialPage:n.forcePage?n.forcePage:0,e.state={selected:m},e}return l=H,(u=[{key:"componentDidMount",value:function(){var n=this.props,e=n.initialPage,m=n.disableInitialCallback,i=n.extraAriaContext,c=n.pageCount,f=n.forcePage;e===void 0||m||this.callCallback(e),i&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(c)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(c,"). Did you forget a Math.ceil()?")),e!==void 0&&e>c-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(c-1,").")),f!==void 0&&f>c-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(f," > ").concat(c-1,")."))}},{key:"componentDidUpdate",value:function(n){this.props.forcePage!==void 0&&this.props.forcePage!==n.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(n.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var n=this.state.selected,e=this.props,m=e.pageCount,i=n+e.pageRangeDisplayed;return i>=m?m-1:i}},{key:"getBackwardJump",value:function(){var n=this.state.selected-this.props.pageRangeDisplayed;return n<0?0:n}},{key:"getElementHref",value:function(n){var e=this.props,m=e.hrefBuilder,i=e.pageCount,c=e.hrefAllControls;if(m)return c||n>=0&&n<i?m(n+1,i,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(n){var e=n===this.state.selected;if(this.props.ariaLabelBuilder&&n>=0&&n<this.props.pageCount){var m=this.props.ariaLabelBuilder(n+1,e);return this.props.extraAriaContext&&!e&&(m=m+" "+this.props.extraAriaContext),m}}},{key:"getPageElement",value:function(n){var e=this.state.selected,m=this.props,i=m.pageClassName,c=m.pageLinkClassName,f=m.activeClassName,C=m.activeLinkClassName,O=m.extraAriaContext,M=m.pageLabelBuilder;return o().createElement(d,{key:n,pageSelectedHandler:this.handlePageSelected.bind(null,n),selected:e===n,rel:this.getElementPageRel(n),pageClassName:i,pageLinkClassName:c,activeClassName:f,activeLinkClassName:C,extraAriaContext:O,href:this.getElementHref(n),ariaLabel:this.ariaLabelBuilder(n),page:n+1,pageLabelBuilder:M,getEventListener:this.getEventListener})}},{key:"render",value:function(){var n=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&n!==void 0)return n&&n(this.props);var e=this.props,m=e.disabledClassName,i=e.disabledLinkClassName,c=e.pageCount,f=e.className,C=e.containerClassName,O=e.previousLabel,M=e.previousClassName,ne=e.previousLinkClassName,se=e.previousAriaLabel,ee=e.prevRel,B=e.nextLabel,W=e.nextClassName,Z=e.nextLinkClassName,V=e.nextAriaLabel,v=e.nextRel,D=this.state.selected,_=D===0,P=D===c-1,ie="".concat(S(M)).concat(_?" ".concat(S(m)):""),ue="".concat(S(W)).concat(P?" ".concat(S(m)):""),Y="".concat(S(ne)).concat(_?" ".concat(S(i)):""),G="".concat(S(Z)).concat(P?" ".concat(S(i)):""),le=_?"true":"false",Ce=P?"true":"false";return o().createElement("ul",{className:f||C,role:"navigation","aria-label":"Pagination"},o().createElement("li",{className:ie},o().createElement("a",K({className:Y,href:this.getElementHref(D-1),tabIndex:_?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":le,"aria-label":se,rel:ee},this.getEventListener(this.handlePreviousPage)),O)),this.pagination(),o().createElement("li",{className:ue},o().createElement("a",K({className:G,href:this.getElementHref(D+1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":Ce,"aria-label":V,rel:v},this.getEventListener(this.handleNextPage)),B)))}}])&&ae(l.prototype,u),Object.defineProperty(l,"prototype",{writable:!1}),H}(r.Component);L(w,"propTypes",{pageCount:a().number.isRequired,pageRangeDisplayed:a().number,marginPagesDisplayed:a().number,previousLabel:a().node,previousAriaLabel:a().string,prevPageRel:a().string,prevRel:a().string,nextLabel:a().node,nextAriaLabel:a().string,nextPageRel:a().string,nextRel:a().string,breakLabel:a().oneOfType([a().string,a().node]),breakAriaLabels:a().shape({forward:a().string,backward:a().string}),hrefBuilder:a().func,hrefAllControls:a().bool,onPageChange:a().func,onPageActive:a().func,onClick:a().func,initialPage:a().number,forcePage:a().number,disableInitialCallback:a().bool,containerClassName:a().string,className:a().string,pageClassName:a().string,pageLinkClassName:a().string,pageLabelBuilder:a().func,activeClassName:a().string,activeLinkClassName:a().string,previousClassName:a().string,nextClassName:a().string,previousLinkClassName:a().string,nextLinkClassName:a().string,disabledClassName:a().string,disabledLinkClassName:a().string,breakClassName:a().string,breakLinkClassName:a().string,extraAriaContext:a().string,ariaLabelBuilder:a().func,eventListener:a().string,renderOnZeroPageCount:a().func,selectedPageRel:a().string}),L(w,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(s){return s},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const re=w})(),J})())})(ye);var qe=ye.exports;const Ie=Ae(qe),He=({handleClickPage:y,totalPages:p,currentPage:A})=>t.jsx(t.Fragment,{children:t.jsx(Ie,{nextLabel:"→",onPageChange:y,pageRangeDisplayed:window.innerWidth<480?4:5,marginPagesDisplayed:0,pageCount:p,previousLabel:"←",pageClassName:"w-[30px] h-[30px] rounded-full border border-[#0c0c0c] flex items-center justify-center",pageLinkClassName:"w-[30px] h-[30px] rounded-full flex items-center justify-center",previousClassName:"mr-3 border-none",previousLinkClassName:"w-[30px] h-[30px] rounded-full text-md text-[#0c0c0c]  flex items-base justify-center  border border-[#0c0c0c]",nextClassName:"ml-3 border-none",nextLinkClassName:"w-[30px] h-[30px] rounded-full text-md text-[#0c0c0c]  flex items-base justify-center  border border-[#0c0c0c]",containerClassName:"flex gap-[5px] mx-auto mt-10 w-max",activeClassName:"bg-[#0c0c0c] text-white",renderOnZeroPageCount:null,disabledClassName:"text-gray border border-gray",disabledLinkClassName:"w-[30px] h-[30px] text-[#9b9b9b] border border-[#9b9b9b] cursor-default rounded-full",forcePage:A})}),Je=({products:y})=>{const{t:p}=pe(),A=q(me),N=q(ge),z=q(be),x=q(fe),J=q(xe);q(he);const[r,o]=de.useState(1),b=8,a=d=>{if(!y)return d;const k=z.replace(/\D/g,"");return d.filter(j=>{let h;const S=j.title.toLowerCase().includes(A.toLowerCase());N===p("monuments")?h=[p("availability"),p("vertical"),p("horizontal"),p("small")].some(F=>j.category.toLowerCase().includes(F.toLowerCase())):N===p("landscaping")?h=[p("anti_settlement_slabs"),p("paving_tiles"),p("granite_tiles"),p("fencing"),p("tables_and_benches"),p("vases_and_lamps"),p("cubes_and_spheres")].some(F=>j.category.toLowerCase().includes(F.toLowerCase())):N===p("related_products")?h=[p("glass_photos"),p("plaques"),p("embedded_parts")].some(F=>j.category.toLowerCase().includes(F.toLowerCase())):h=N==="Всі категорії"||j.category.toLowerCase().includes(N.toLowerCase());const U=x==="Всі типи"||j.type.toLowerCase().includes(x.toLowerCase()),K=!J||j.discount>0,ae=z===""||+j.price<k;return S&&h&&U&&K&&ae})},I=d=>a(d).slice((r-1)*b,r*b),$=d=>{o(d.selected+1)};return t.jsx(t.Fragment,{children:I(y)&&t.jsxs("div",{className:"mx-auto",children:[t.jsx("div",{className:"grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-4",children:I(y).map((d,k)=>t.jsx(De,{image:d.image,title:d.title,description:d.description,price:d.price,discount:d.discount,category:d.category,type:d.type},d.id))}),Math.ceil(a(y).length/b)>1&&t.jsx(He,{handleClickPage:$,totalPages:Math.ceil(a(y).length/b)})]})})};export{ze as F,Je as P};