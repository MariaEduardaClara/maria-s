(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[99747,15071,31974],{989881:(e,t,r)=>{var n=r(247816),i=r(899291)(n);e.exports=i},121078:(e,t,r)=>{var n=r(862488),i=r(137285);e.exports=function e(t,r,o,s,a){var c=-1,l=t.length;for(o||(o=i),a||(a=[]);++c<l;){var u=t[c];r>0&&o(u)?r>1?e(u,r-1,o,s,a):n(a,u):s||(a[a.length]=u)}return a}},247816:(e,t,r)=>{var n=r(228483),i=r(3674);e.exports=function(e,t){return e&&n(e,t,i)}},297786:(e,t,r)=>{var n=r(671811),i=r(240327);e.exports=function(e,t){for(var r=0,o=(t=n(t,e)).length;null!=e&&r<o;)e=e[i(t[r++])];return r&&r==o?e:void 0}},200013:e=>{e.exports=function(e,t){return null!=e&&t in Object(e)}},702958:(e,t,r)=>{var n=r(646384),i=r(690939);e.exports=function(e,t,r,o){var s=r.length,a=s,c=!o;if(null==e)return!a;for(e=Object(e);s--;){var l=r[s];if(c&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++s<a;){var u=(l=r[s])[0],p=e[u],d=l[1];if(c&&l[2]){if(void 0===p&&!(u in e))return!1}else{var m=new n;if(o)var v=o(p,d,u,e,t,m);if(!(void 0===v?i(d,p,3,o,m):v))return!1}}return!0}},267206:(e,t,r)=>{var n=r(191573),i=r(716432),o=r(406557),s=r(701469),a=r(139601);e.exports=function(e){return"function"==typeof e?e:null==e?o:"object"==typeof e?s(e)?i(e[0],e[1]):n(e):a(e)}},269199:(e,t,r)=>{var n=r(989881),i=r(498612);e.exports=function(e,t){var r=-1,o=i(e)?Array(e.length):[];return n(e,(function(e,n,i){o[++r]=t(e,n,i)})),o}},191573:(e,t,r)=>{var n=r(702958),i=r(301499),o=r(542634);e.exports=function(e){var t=i(e);return 1==t.length&&t[0][2]?o(t[0][0],t[0][1]):function(r){return r===e||n(r,e,t)}}},716432:(e,t,r)=>{var n=r(690939),i=r(227361),o=r(379095),s=r(115403),a=r(689162),c=r(542634),l=r(240327);e.exports=function(e,t){return s(e)&&a(t)?c(l(e),t):function(r){var s=i(r,e);return void 0===s&&s===t?o(r,e):n(t,s,3)}}},882689:(e,t,r)=>{var n=r(829932),i=r(297786),o=r(267206),s=r(269199),a=r(571131),c=r(307518),l=r(285022),u=r(406557),p=r(701469);e.exports=function(e,t,r){t=t.length?n(t,(function(e){return p(e)?function(t){return i(t,1===e.length?e[0]:e)}:e})):[u];var d=-1;t=n(t,c(o));var m=s(e,(function(e,r,i){return{criteria:n(t,(function(t){return t(e)})),index:++d,value:e}}));return a(m,(function(e,t){return l(e,t,r)}))}},840371:e=>{e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},379152:(e,t,r)=>{var n=r(297786);e.exports=function(e){return function(t){return n(t,e)}}},571131:e=>{e.exports=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}},671811:(e,t,r)=>{var n=r(701469),i=r(115403),o=r(555514),s=r(479833);e.exports=function(e,t){return n(e)?e:i(e,t)?[e]:o(s(e))}},626393:(e,t,r)=>{var n=r(733448);e.exports=function(e,t){if(e!==t){var r=void 0!==e,i=null===e,o=e==e,s=n(e),a=void 0!==t,c=null===t,l=t==t,u=n(t);if(!c&&!u&&!s&&e>t||s&&a&&l&&!c&&!u||i&&a&&l||!r&&l||!o)return 1;if(!i&&!s&&!u&&e<t||u&&r&&o&&!i&&!s||c&&r&&o||!a&&o||!l)return-1}return 0}},285022:(e,t,r)=>{var n=r(626393);e.exports=function(e,t,r){for(var i=-1,o=e.criteria,s=t.criteria,a=o.length,c=r.length;++i<a;){var l=n(o[i],s[i]);if(l)return i>=c?l:l*("desc"==r[i]?-1:1)}return e.index-t.index}},899291:(e,t,r)=>{var n=r(498612);e.exports=function(e,t){return function(r,i){if(null==r)return r;if(!n(r))return e(r,i);for(var o=r.length,s=t?o:-1,a=Object(r);(t?s--:++s<o)&&!1!==i(a[s],s,a););return r}}},301499:(e,t,r)=>{var n=r(689162),i=r(3674);e.exports=function(e){for(var t=i(e),r=t.length;r--;){var o=t[r],s=e[o];t[r]=[o,s,n(s)]}return t}},900222:(e,t,r)=>{var n=r(671811),i=r(135694),o=r(701469),s=r(565776),a=r(541780),c=r(240327);e.exports=function(e,t,r){for(var l=-1,u=(t=n(t,e)).length,p=!1;++l<u;){var d=c(t[l]);if(!(p=null!=e&&r(e,d)))break;e=e[d]}return p||++l!=u?p:!!(u=null==e?0:e.length)&&a(u)&&s(d,u)&&(o(e)||i(e))}},137285:(e,t,r)=>{var n=r(562705),i=r(135694),o=r(701469),s=n?n.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||i(e)||!!(s&&e&&e[s])}},115403:(e,t,r)=>{var n=r(701469),i=r(733448),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;e.exports=function(e,t){if(n(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!i(e))||(s.test(e)||!o.test(e)||null!=t&&e in Object(t))}},689162:(e,t,r)=>{var n=r(513218);e.exports=function(e){return e==e&&!n(e)}},542634:e=>{e.exports=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}}},624523:(e,t,r)=>{var n=r(288306);e.exports=function(e){var t=n(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}},555514:(e,t,r)=>{var n=r(624523),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,s=n((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(i,(function(e,r,n,i){t.push(n?i.replace(o,"$1"):r||e)})),t}));e.exports=s},240327:(e,t,r)=>{var n=r(733448);e.exports=function(e){if("string"==typeof e||n(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}},227361:(e,t,r)=>{var n=r(297786);e.exports=function(e,t,r){var i=null==e?void 0:n(e,t);return void 0===i?r:i}},379095:(e,t,r)=>{var n=r(200013),i=r(900222);e.exports=function(e,t){return null!=e&&i(e,t,n)}},288306:(e,t,r)=>{var n=r(883369);function i(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return r.cache=o.set(i,s)||o,s};return r.cache=new(i.Cache||n),r}i.Cache=n,e.exports=i},139601:(e,t,r)=>{var n=r(840371),i=r(379152),o=r(115403),s=r(240327);e.exports=function(e){return o(e)?n(s(e)):i(e)}},189734:(e,t,r)=>{var n=r(121078),i=r(882689),o=r(105976),s=r(816612),a=o((function(e,t){if(null==e)return[];var r=t.length;return r>1&&s(e,t[0],t[1])?t=[]:r>2&&s(t[0],t[1],t[2])&&(t=[t[0]]),i(e,n(t,1),[])}));e.exports=a},615071:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(487462),i=r(263366),o=r(875068);r(45697);function s(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var a=r(667294),c=r(973935);const l=!1;var u=r(500220),p="unmounted",d="exited",m="entering",v="entered",f="exiting",g=function(e){function t(t,r){var n;n=e.call(this,t,r)||this;var i,o=r&&!r.isMounting?t.enter:t.appear;return n.appearStatus=null,t.in?o?(i=d,n.appearStatus=m):i=v:i=t.unmountOnExit||t.mountOnEnter?p:d,n.state={status:i},n.nextCallback=null,n}(0,o.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===p?{status:d}:null};var r=t.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var r=this.state.status;this.props.in?r!==m&&r!==v&&(t=m):r!==m&&r!==v||(t=f)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e,t,r,n=this.props.timeout;return e=t=r=n,null!=n&&"number"!=typeof n&&(e=n.exit,t=n.enter,r=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:r}},r.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===m?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===d&&this.setState({status:p})},r.performEnter=function(e){var t=this,r=this.props.enter,n=this.context?this.context.isMounting:e,i=this.props.nodeRef?[n]:[c.findDOMNode(this),n],o=i[0],s=i[1],a=this.getTimeouts(),u=n?a.appear:a.enter;!e&&!r||l?this.safeSetState({status:v},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,s),this.safeSetState({status:m},(function(){t.props.onEntering(o,s),t.onTransitionEnd(u,(function(){t.safeSetState({status:v},(function(){t.props.onEntered(o,s)}))}))})))},r.performExit=function(){var e=this,t=this.props.exit,r=this.getTimeouts(),n=this.props.nodeRef?void 0:c.findDOMNode(this);t&&!l?(this.props.onExit(n),this.safeSetState({status:f},(function(){e.props.onExiting(n),e.onTransitionEnd(r.exit,(function(){e.safeSetState({status:d},(function(){e.props.onExited(n)}))}))}))):this.safeSetState({status:d},(function(){e.props.onExited(n)}))},r.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,r=!0;return this.nextCallback=function(n){r&&(r=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},r.onTransitionEnd=function(e,t){this.setNextCallback(t);var r=this.props.nodeRef?this.props.nodeRef.current:c.findDOMNode(this),n=null==e&&!this.props.addEndListener;if(r&&!n){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],o=i[0],s=i[1];this.props.addEndListener(o,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},r.render=function(){var e=this.state.status;if(e===p)return null;var t=this.props,r=t.children,n=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,i.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(u.Z.Provider,{value:null},"function"==typeof r?r(e,n):a.cloneElement(a.Children.only(r),n))},t}(a.Component);function h(){}g.contextType=u.Z,g.propTypes={},g.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},g.UNMOUNTED=p,g.EXITED=d,g.ENTERING=m,g.ENTERED=v,g.EXITING=f;const _=g;var x=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return n=t,void((r=e).classList?r.classList.remove(n):"string"==typeof r.className?r.className=s(r.className,n):r.setAttribute("class",s(r.className&&r.className.baseVal||"",n)));var r,n}))},E=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,r){var n=t.resolveArguments(e,r),i=n[0],o=n[1];t.removeClasses(i,"exit"),t.addClass(i,o?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,r)},t.onEntering=function(e,r){var n=t.resolveArguments(e,r),i=n[0],o=n[1]?"appear":"enter";t.addClass(i,o,"active"),t.props.onEntering&&t.props.onEntering(e,r)},t.onEntered=function(e,r){var n=t.resolveArguments(e,r),i=n[0],o=n[1]?"appear":"enter";t.removeClasses(i,o),t.addClass(i,o,"done"),t.props.onEntered&&t.props.onEntered(e,r)},t.onExit=function(e){var r=t.resolveArguments(e)[0];t.removeClasses(r,"appear"),t.removeClasses(r,"enter"),t.addClass(r,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var r=t.resolveArguments(e)[0];t.addClass(r,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var r=t.resolveArguments(e)[0];t.removeClasses(r,"exit"),t.addClass(r,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,r){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,r]},t.getClassNames=function(e){var r=t.props.classNames,n="string"==typeof r,i=n?""+(n&&r?r+"-":"")+e:r[e];return{baseClassName:i,activeClassName:n?i+"-active":r[e+"Active"],doneClassName:n?i+"-done":r[e+"Done"]}},t}(0,o.Z)(t,e);var r=t.prototype;return r.addClass=function(e,t,r){var n=this.getClassNames(t)[r+"ClassName"],i=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===r&&i&&(n+=" "+i),"active"===r&&e&&e.scrollTop,n&&(this.appliedClasses[t][r]=n,function(e,t){e&&t&&t.split(" ").forEach((function(t){return n=t,void((r=e).classList?r.classList.add(n):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(r,n)||("string"==typeof r.className?r.className=r.className+" "+n:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+n)));var r,n}))}(e,n))},r.removeClasses=function(e,t){var r=this.appliedClasses[t],n=r.base,i=r.active,o=r.done;this.appliedClasses[t]={},n&&x(e,n),i&&x(e,i),o&&x(e,o)},r.render=function(){var e=this.props,t=(e.classNames,(0,i.Z)(e,["classNames"]));return a.createElement(_,(0,n.Z)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(a.Component);E.defaultProps={classNames:""},E.propTypes={};const y=E},500220:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r(667294).createContext(null)},442279:(e,t)=>{function r(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function n(e,t){return e===t}function i(e){var t=arguments.length<=1||void 0===arguments[1]?n:arguments[1],r=null,i=null;return function(){for(var n=arguments.length,o=Array(n),s=0;s<n;s++)o[s]=arguments[s];return null!==r&&r.length===o.length&&o.every((function(e,n){return t(e,r[n])}))||(i=e.apply(void 0,o)),r=o,i}}function o(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var r=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+r+"]")}return t}function s(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return function(){for(var t=arguments.length,i=Array(t),s=0;s<t;s++)i[s]=arguments[s];var a=0,c=i.pop(),l=o(i),u=e.apply(void 0,[function(){return a++,c.apply(void 0,arguments)}].concat(n)),p=function(e,t){for(var n=arguments.length,i=Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];var s=l.map((function(r){return r.apply(void 0,[e,t].concat(i))}));return u.apply(void 0,r(s))};return p.resultFunc=c,p.recomputations=function(){return a},p.resetRecomputations=function(){return a=0},p}}var a=t.P1=s(i)},918301:(e,t,r)=>{r.d(t,{CB:()=>m,y9:()=>d});var n=r(667294),i=r(121151),o=r(6637),s=r(898781),a=r(883119),c=r(785893);const l=({onConfirm:e})=>{const t=(0,s.ZP)(),[r,l]=(0,n.useState)(!1),u=()=>{l(!0),o.Z.create("ApiResource",{url:"/v3/users/email/verify/resend/"}).callCreate()};return(0,c.jsx)(i.ZP,{accessibilityModalLabel:t.bt("Verificar seu email", "Verify your email", "Accessible label for email verification being required", undefined, true),onDismiss:e,heading:t.bt("Verificar seu email", "Verify your email", "Accessible label for email verification being required", undefined, true),footer:(0,c.jsxs)(a.kC,{justifyContent:"end",gap:{row:2,column:0},children:[r?(0,c.jsx)(a.zx,{fullWidth:!0,size:"lg",color:"gray",text:t.bt("email enviado", "Email sent", "Button text for verification email being sent", undefined, true),disabled:r,onClick:u}):(0,c.jsx)(a.zx,{fullWidth:!0,size:"lg",color:"gray",text:t.bt("Reenviar email", "Resend email", "Button text for resending email verification email", undefined, true),disabled:r,onClick:u}),(0,c.jsx)(a.zx,{fullWidth:!0,size:"lg",color:"red",text:t.bt("Entendi", "Got it", "Button text for acknowledging email verificaiton is required", undefined, true),onClick:e})]}),role:"alertdialog",children:(0,c.jsx)(a.xu,{padding:8,children:(0,c.jsx)(a.xv,{align:"center",size:"300",children:t.bt("Verifique seu endereço de email para manter sua conta protegida. Confira a caixa de entrada associada a essa conta para ver se você recebeu um email com instruções para continuar usando o Pinterest.", "Keep your account secure by verifying your email address. Check the inbox associated with this account for an email from us to continue using Pinterest.", "Inform users that they need to verify their email to keep their account secure and continue using Pinterest", undefined, true)})})})};var u=r(425288);const{Provider:p,useHook:d}=(0,u.Z)("EmailVerificationReminderModal");function m({children:e}){const[t,r]=(0,n.useState)(!1),i=(0,n.useMemo)((()=>({showEmailVerificationReminderModal:()=>{r(!0)}})),[]);return(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)(p,{value:i,children:e}),t&&(0,c.jsx)(l,{onConfirm:()=>{r(!1)}})]})}},55259:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(794230),i=r(619937);const o={campaignFilter:"all",adGroupFilter:"all",adFilter:"all"},s=e=>{let t={};return e&&(t={objectiveTypes:[e]}),t},a={overview:()=>"/",reporting:e=>{const t=e.objectiveType||null;delete e.objectiveType;const r={...e,...s(t)};return(0,n.Z)("/reporting/campaigns/",r)},reportingAdGroup:e=>{const{campaignId:t,objectiveType:r,showAllEntities:i,adGroupId:a,message:c}=e,l=a?{adGroupIds:[a]}:{},u={campaignIds:[t],...i?o:{},...s(r),...l,message:c};return(0,n.Z)("/reporting/adgroups/",u)},campaign:e=>{const{id:t,objectiveType:r}=e;return(0,n.Z)("/reporting/adgroups/",{campaignIds:[t],...s(r)})},editCampaign:e=>e.isAutomatedCampaign?a.editAutomated({campaignId:e.id,view:"campaign"}):a.editV2({campaignId:e.id,view:"campaign"}),adgroup:e=>{const{id:t,objectiveType:r,showAllEntities:i,pinPromotionId:a,campaignId:c}=e;if("TEMPORARY_SHOPPING"===r||"CATALOG_SALES"===r)return(0,n.Z)("/reporting/productgroups/",{adGroupIds:[t],...s(r)});{const e=i?o:{},l=c?{campaignIds:[c]}:{},u=a?{pinPromotionIds:[a]}:{};return(0,n.Z)("/reporting/ads/",{adGroupIds:[t],...s(r),...e,...u,...l})}},editAdGroup:e=>e.isAutomatedCampaign?a.editAutomated({campaignId:e.id,view:"campaign"}):a.editV2({adGroupId:e.id,view:"adgroup"}),pinPromotion:e=>{const{id:t,adFilter:r}=e,i=r?{adFilter:r}:{};return(0,n.Z)("/reporting/ads/",{pinPromotionIds:[t],...i})},editPinPromotion:e=>{const t=e.isCreatingPins?{isCreatingPins:!0}:{},r=e.pinPromotionId?{pinPromotionId:e.pinPromotionId}:{};return a.editV2({adGroupId:e.adGroupId,view:"ad",...r,...t})},productGroup:e=>{const{id:t,name:r}=e;return(0,n.Z)("/reporting/productgroups/",{productGroupIds:[t],name:r})},campaigns:()=>"/reporting/campaigns/",adgroups:()=>"/reporting/adgroups/",ads:()=>"/reporting/ads/",productgroups:()=>"/reporting/productgroups/",campaignNegativeKeywords:()=>"/reporting/campaignNegativeKeywords/",campaignSearchQueries:()=>"/reporting/campaignSearchQueries/",adGroupNegativeKeywords:()=>"/reporting/adGroupNegativeKeywords/",adGroupPositiveKeywords:()=>"/reporting/adGroupPositiveKeywords/",adGroupSearchQueries:()=>"/reporting/adGroupSearchQueries/",ad:e=>a.pinPromotion(e),campaignMode:e=>(0,n.Z)("/ads/campaign_mode/",e.managedClientId?{managedClientId:e.managedClientId}:void 0),create:e=>{const{campaignId:t,objectiveType:r,partialCreate:i,catalogsFeedId:o,managedClientId:s,productGroupId:a}=e,c={};return t&&i&&(c.campaignId=t),r&&(c.objectiveType=r),"CATALOG_SALES"===r&&o&&(c.catalogsFeedId=o),a&&(c.productGroupId=a),s&&(c.managedClientId=s),(0,n.Z)("/ads/create/",c)},createAutomated:e=>(0,n.Z)("/automated/ads/create/",e),editV2:e=>(0,n.Z)("/ads/edit/",e),editAutomated:e=>(0,n.Z)("/automated/ads/edit/",e),editDraftCampaign:e=>(0,n.Z)("/ads/edit_draft/",{campaignId:e.campaignId,view:"campaign"}),duplicateCampaign:e=>(0,n.Z)("/ads/duplicate/",e),audiences:e=>(0,n.Z)("/audiences/",e.managedClientId?{managedClientId:e.managedClientId}:void 0),audience_debug:()=>"/audience_debug/",prepaid_spend_campaign_breakdown:()=>"/billing/prepaid_spend_campaign_breakdown/",billing:e=>{const{page:t,subSection:r,nextStepUrl:o}=e;switch(t){case i.kM.BILLING_HISTORY:return"/billing/history/";case i.kM.ORDER_LINES:return"/billing/order_lines/";case i.kM.PROMOTIONS:return"/billing/promotions/";case i.kM.DOCUMENTS:return"/billing/documents/";case i.kM.PREPAID_CAMPAIGN_SPEND:return"/billing/prepaid_campaign_spend_summary/";default:const e={};return r&&(e.section=r),o&&(e.next_step_link_url=o),(0,n.Z)("/billing/",e)}},bulk:e=>{const{subSection:t,page:r,jobStarted:o}=e||{};switch(r){case i.fm.UPLOAD_TEMPLATE:return(0,n.Z)("/bulk_editor/upload_template/",{section:t});case i.fm.DOWNLOAD_TEMPLATE:return(0,n.Z)("/bulk_editor/download_template/",{section:t});case i.fm.HISTORY:return(0,n.Z)("/bulk_editor/history/",{section:t,job_started:o});case i.fm.RESOURCES:return(0,n.Z)("/bulk_editor/resources/",{section:t});default:return"/bulk_editor/"}},history:e=>(0,n.Z)("/history/",e),shopping:e=>a.reporting(s("TEMPORARY_SHOPPING")),pinterest_tag:e=>{const{page:t,subSection:r,platform:o}=e;switch(t){case i.qp.PINTEREST_EVENT_HISTORY:return"/conversions/event-history/";case i.qp.CONVERSION_HEALTH:return"/conversions/health/";case i.qp.PINTEREST_TAG:return(0,n.Z)("/conversions/tag/",{subPage:r,platform:o});case i.qp.PINTEREST_TAG_EVENTS:return"/conversions/tag-events/";case i.qp.PINTEREST_TAG_HEALTH:return"/conversions/tag-health/";case i.qp.CONVERSION_UPLOAD:return(0,n.Z)("/conversions/upload/",{subPage:r});case i.qp.UPLOAD_HISTORY:return(0,n.Z)("/conversions/history/",{subPage:r});case i.qp.PCA_UPLOAD_HISTORY:return(0,n.Z)("/conversions/pca_history/",{subPage:r});case i.qp.PCA_UPLOAD:return(0,n.Z)("/conversions/pca_upload/",{subPage:r});case i.qp.CONVERSIONS_API_ACCESS_TOKEN:return"/conversions/access_token/";case i.qp.CONVERSIONS_API_DEDUPLICATION:return"/conversions/deduplication/";default:return"/conversions/tag/"}},"pin-builder":e=>(0,n.Z)("/pin-builder/",e),purchases:()=>a.reporting(s("PURCHASE")),awareness_reserved:()=>a.reporting(s("IMPRESSION")),engagement:()=>a.reporting(s("BILLABLE_ENGAGEMENT")),videos:()=>a.reporting(s("TEMPORARY_BIDDED_CPM_VIDEO")),videos_reserved:()=>a.reporting(s("TEMPORARY_IMPRESSION_VIDEO")),videos_cpv:()=>a.reporting(s("TEMPORARY_MRC_CPV_VIDEO")),conversions:()=>a.reporting(s("WEB_CONVERSION")),accounts_manager:()=>"/accounts_manager/",reporting_preferences:e=>(0,n.Z)("/reporting/preferences/",e),report_builder:e=>(0,n.Z)("/report-center/builder/",e),report_history:e=>(0,n.Z)("/report-center/history/",e),report_unsubscribe:e=>(0,n.Z)("/report-center/unsubscribe/",e),report_download:e=>(0,n.Z)("/report-center/download/",e),media_planner:()=>"/media_planner/",awareness:()=>a.reporting(s("AWARENESS")),traffic:()=>a.reporting(s("TRAFFIC")),app_installs:()=>a.reporting(s("APP_INSTALL")),catalog_sales:()=>a.reporting(s("CATALOG_SALES")),web_conversion:()=>a.reporting(s("WEB_CONVERSION")),video_view:()=>a.reporting(s("VIDEO_VIEW")),quick_promote:e=>(0,n.Z)("/quick-promote/",e),quick_promote_on_www:()=>"/advertiser/quick-promote/",recommendations:e=>(0,n.Z)("/recommendations/",e),catalog_view:()=>"/product-catalogs/data-source"},c=a},756306:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(667294),i=r(121093),o=r(883119),s=r(785893);class a extends n.Component{constructor(...e){var t,r,n;super(...e),n={paused:!1,showPulsar:!1},(r="state")in(t=this)?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}componentDidMount(){this.mountPulsar(),this.props.onExperienceMount&&this.experience&&this.props.onExperienceMount(this.experience)}componentWillUnmount(){clearTimeout(this.timer)}mountPulsar(){if(!this.experience)return;const{display_data:e}=this.experience;e.has_pulsar&&this.setState({showPulsar:!0})}renderPulsar(){const{anchor:e}=this.props,{paused:t}=this.state;if(!e)return null;const r=e.getBoundingClientRect(),{height:n,width:i}=r,a=-(68+n/2),c=-(68-i/2);return(0,s.jsx)(o.xu,{position:"absolute",zIndex:new o.Ry(1),dangerouslySetInlineStyle:{__style:{marginTop:a,marginLeft:c,cursor:"pointer",pointerEvents:"none"}},children:(0,s.jsx)(o.o3,{paused:t})})}renderFlyout(e){const{anchor:t,flyoutSize:r,idealDirection:n,textOverflow:i}=this.props;return(0,s.jsx)(o.J2,{anchor:t,color:"blue",idealDirection:n||"down",onDismiss:()=>{},shouldFocus:!1,showCaret:!0,size:r,children:(0,s.jsx)(o.xu,{column:12,padding:3,children:(0,s.jsx)(o.xv,{color:"inverse",overflow:i,weight:"bold",children:e})})})}render(){const{experienceIds:e,placementId:t,shouldTimeoutDismiss:r}=this.props,{showPulsar:n}=this.state;return(0,s.jsx)(i.Z,{eligibleIds:e,placementId:t,eligibleTypes:[8],children:({complete:e,dismiss:t,experience:i})=>{this.experience=i;const{display_data:a}=i;return a.has_pulsar||a.has_tooltip?(r&&a.disappearTime&&a.disappearTime>0&&(this.timer=setTimeout((()=>(t(),null)),a.disappearTime)),(0,s.jsxs)(o.xu,{zIndex:new o.Ry(10),children:[n&&this.renderPulsar(),a.has_tooltip&&(!a.has_pulsar||this.state.paused)&&this.renderFlyout(a.text)]})):(e(),null)}})}}},869636:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(667294),i=r(702664),o=r(442279),s=r(123159),a=r(780280),c=r(172071);const l=(0,o.P1)((e=>e.experiences),((e,t)=>t),((e,t)=>e[t])),u=(e,t)=>"function"==typeof t?t(e):t,p=(e,t={},r=!1)=>{const[o,p]=(0,n.useReducer)(u,t),{isBot:d}=(0,a.B)(),{fetchExperienceForPlacements:m,mountPlacement:v,triggerExperimentsForPlacement:f,unmountPlacement:g}=(0,s.M)();(0,n.useDebugValue)(`Placement Hook ID - ${e}`),(0,n.useEffect)((()=>{const t={...o},n=r&&null!=t&&t.advertiser_id?{advertiserId:t.advertiser_id}:void 0;return v(e,t,n),()=>{g(e)}}),[]),(0,n.useEffect)((()=>{Object.keys(o).length>0&&m([e],d,o)}),[o]);const h=(0,i.useSelector)((t=>l(t,e))),_=(0,i.useSelector)((t=>t.experiencesMulti[e])),x=h?h.triggerable_placed_exps:[];(0,n.useEffect)((()=>{((e,t,r={})=>{c.Z.increment(`${e}.${t}`,1,r)})("experienceservice","placementHookExperimentTrigger.1",{platform:"web",placement_id:e,...x}),f(e,o)}),[JSON.stringify(x)]);return{experience:h,experiencesMulti:_,setExtraContext:p}}},940589:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(643913);function i(e){const{query:t,rs:r,scope:i,guideAdded:o,filters:s,user:a}=e;if(!t)return"/";const c={q:t,rs:r};if(s&&(c.filters=s),a&&(c.user=a),o&&o.term&&(c.add_refine=`${o.term}|guide|word|${o.index}`),window.location.pathname.startsWith("/explore"))return`/search/pins/?${(0,n.Z)(c)}`;let l=i;return["pins","buyable_pins","my_pins","boards","users","idea_pins"].includes(l)||(l="pins"),l?`/search/${l}/?${(0,n.Z)(c)}`:`${window.location.pathname}?${(0,n.Z)(c)}`}},883851:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(215292),i=r(883119),o=r(785893);function s(e,t){return t?"primary":e?"tertiary":void 0}function a({colors:e,isSelected:t,onClick:r}){return(0,o.jsx)(n.q,{children:({hovered:n,onMouseEnter:a,onMouseLeave:c})=>(0,o.jsx)(i.kC,{alignItems:"center",height:64,justifyContent:"start",children:(0,o.jsx)(i.iP,{mouseCursor:"pointer",onMouseEnter:a,onMouseLeave:c,onTap:r,rounding:"pill",children:(0,o.jsx)(i.xu,{alignItems:"center",color:s(n,t),display:"flex",height:64,justifyContent:"center",rounding:"pill",width:92,children:(0,o.jsx)(i.xu,{alignItems:"center",color:"default",display:"flex",height:60,justifyContent:"center",rounding:"pill",width:88,children:(0,o.jsx)(i.xu,{display:"flex",height:56,overflow:"hidden",rounding:"pill",width:84,wrap:!0,children:e.map(((e,t)=>(0,o.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:e}},height:28,width:42},`${e}-${t}`)))})})})})})})}},796668:(e,t,r)=>{r.d(t,{W:()=>u,Z:()=>d});var n=r(667294),i=r(756306),o=r(883851),s=r(898781),a=r(407043),c=r(883119),l=r(785893);const u=[["#F0E3DC","#F8D7D8","#F2D7BE","#F7C3AF"],["#DEBAB0","#E0999A","#DDA67C","#D98A64"],["#9A6B52","#A25847","#B37143","#BF6951"],["#683929","#34261F","#64281B","#4F2221"]],p=[{display:"Range 1",swatch_hex_colors:["#F0E3DC","#F8D7D8","#F2D7BE","#F7C3AF"],term:"skin_color_bucket_id:1"},{display:"Range 2",swatch_hex_colors:["#DEBAB0","#E0999A","#DDA67C","#D98A64"],term:"skin_color_bucket_id:2"},{display:"Range 3",swatch_hex_colors:["#9A6B52","#A25847","#B37143","#BF6951"],term:"skin_color_bucket_id:3"},{display:"Range 4",swatch_hex_colors:["#683929","#34261F","#64281B","#4F2221"],term:"skin_color_bucket_id:4"}];function d({currentlyAppliedFiltersParamTerm:e,filterTones:t=p,onClickApplyFilters:r,query:d,showHeaderText:m=!0}){const{logContextEvent:v}=(0,a.v)(),f=(0,s.ZP)(),g=(0,n.useRef)(null),h=(0,n.useRef)(null),_=e?f.bt("Algumas ideias nesta gama de tons de pele", "Some ideas in this skin tone range", "SkinToneFilters.copy.termSelected", undefined, true):f.bt("Escolha uma gama de tons de pele", "Pick a skin tone range", "SkinToneFilters.copy.noTermSelected", undefined, true);return(0,l.jsxs)(n.Fragment,{children:[(0,l.jsxs)(c.kC,{alignItems:m?"center":"start",direction:"column",justifyContent:"start",children:[m&&(0,l.jsx)(c.xu,{marginBottom:2,children:(0,l.jsx)(c.xv,{color:"default",overflow:"normal",weight:"bold",children:_})}),(0,l.jsx)(c.xu,{display:"flex",flex:"none",paddingX:1,ref:g,children:t.map((({term:t},n)=>(0,l.jsx)(c.xu,{"data-test-id":"skin-tone-option",dangerouslySetInlineStyle:{__style:{padding:"0 2px"}},children:(0,l.jsx)(o.Z,{colors:u[n],isSelected:e===t,onClick:()=>(t=>{var n;const i=e===t?"":t;v({event_type:101,component:47,element:10418,view_type:2,aux_data:{entered_query:d,filter_type:"skin_tone",value:i}}),null===(n=h.current)||void 0===n||n.complete(),r(i)})(t)})},t)))})]}),g&&(0,l.jsx)(i.Z,{anchor:g.current,experienceIds:[502978],idealDirection:"right",onExperienceMount:e=>{e.complete&&502978===e.experience_id&&(h.current=e)},placementId:29})]})}},962832:(e,t,r)=>{r.d(t,{$J:()=>A,AP:()=>Z,Dm:()=>P,Fv:()=>b,H$:()=>O,In:()=>D,Ng:()=>C,RH:()=>E,Wj:()=>R,_P:()=>S,go:()=>w});var n=r(126098),i=r(6637),o=r(550858),s=r(30287),a=r(53987),c=r(867820),l=r(844974);const u="home",p="closeup",d="news_hub",m="board",v="profile",f="topic",g="today",h="business",_="search";let x;const E="_push",y=e=>{e.onupdatefound=()=>{(0,c.My)("mweb_service_worker.update_found")}},w=()=>Boolean("undefined"!=typeof navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller),b=()=>new Promise(((e,t)=>{const r=navigator.serviceWorker,{pwaType:n,twaType:i}=x.getState().session,o=new URLSearchParams({source_url:window.location.pathname});n&&i&&(0,s.Rx)(i)&&(o.append("pwa_type",n),o.append("twa_type",i)),Boolean("undefined"!=typeof document&&document.referrer&&!document.referrer.startsWith(window.location.origin))&&o.append("referrer",document.referrer),r&&r.register?((0,c.My)("mweb_service_worker.install_attempt"),r.register(`/sw.js?${o.toString()}`).then((t=>{(0,c.My)("mweb_service_worker.install_success"),y(t),e(t)})).catch((e=>{(0,c.tj)("mweb_service_worker.install_fail",{error:e.message}),t(e)}))):e()})),C=()=>new Promise(((e,t)=>{const r=navigator.serviceWorker;r&&r.getRegistration?((0,c.My)("mweb_service_worker.update_attempt"),r.getRegistration().then((r=>{r?r.update().then((()=>{(0,c.My)("mweb_service_worker.update_success"),y(r),e(r)})).catch((e=>{(0,c.tj)("mweb_service_worker.update_fail",{error:e.message}),t(e)})):b().then(e)}))):e()})),A=()=>{const e=x.getState().session.isAuthenticated;(0,c.My)(`mweb.${e?"auth":"unauth"}.register_service_worker`),b()},P=()=>{const e=navigator.serviceWorker;return e&&e.getRegistration?((0,c.My)("mweb_service_worker.unregister_attempt"),(0,o.Qi)(),e.getRegistration().then((e=>{if(e)return e.unregister().then((()=>((0,c.My)("mweb_service_worker.unregister_success"),navigator.serviceWorker&&window.caches?window.caches.keys().then((e=>{const t=e.find((e=>e.startsWith("workbox-precaching")));return t?window.caches.delete(t):null})).then((()=>(0,c.My)("mweb_service_worker.clear_app_shell"))):Promise.resolve()))).catch((e=>{(0,c.tj)("mweb_service_worker.unregister_fail",{error:e.message})}))}))):Promise.resolve()},S=()=>!(!w()||!("SyncManager"in window)),I=e=>(0,a.C$)(e)?u:(0,a.L6)(e)?p:(0,a.l4)(e)?d:(0,a.am)(e)?m:(0,a.cD)(e)?v:(0,a.En)(e)?_:(0,a.$V)(e)?f:(0,a.Zz)(e)?g:(0,a.Ni)(e)?h:"undefined",k=e=>{switch(I(e)){case u:return{viewType:1,viewParameter:92};case p:return{viewType:3,viewParameter:void 0};case d:return{viewType:107,viewParameter:3081};case m:return{viewType:5,viewParameter:void 0};case _:return{viewType:2,viewParameter:43};case f:return{viewType:210,viewParameter:void 0};case v:return{viewType:4,viewParameter:void 0};case h:return{viewType:409,viewParameter:3397};case g:return{viewType:1,viewParameter:3372};default:return{viewType:void 0,viewParameter:void 0}}},T=(e,t)=>(0,c.tj)(e,{browser:x.getState().session.browser,version:Math.floor(parseInt(x.getState().session.browserVersion,10)),...t}),N=(0,n.Z)(),O="default"===N||"granted"===N,R=(e,t,r,n)=>{const o=navigator.serviceWorker,s=Boolean((0,l.qn)(E)),a={experimentName:r||"noExperiment",experimentGroup:n||"noGroup"};return o&&o.ready&&O&&!s?(t({event_type:13,view_type:170,component:13125,aux_data:{experiment_name:r,experiment_group:n}}),T(`mweb.notifications_upsell.${I(e)}.viewed`,a),o.ready.then((e=>e.pushManager.subscribe({userVisibleOnly:!0}))).then((r=>((e,t,r,n)=>{i.Z.create("WebPushDeviceResource",{}).callGet().then((t=>{const r=(({subscriptionId:e,endpoint:t})=>{return e||(r=t.split("/"))[r.length-1];var r})(e);if(t.resource_response.data[r])return;const n={registration_id:r,subscription_endpoint:e.endpoint};i.Z.create("WebPushDeviceResource",n).callCreate()})),(0,l.Nh)(E,"subscribed"),T(`mweb.notifications_upsell.${I(t)}.subscribed`,r);const o=k(t);n({component:13125,element:10357,event_type:102,view_type:o.viewType,view_parameter:o.viewParameter,aux_data:{experiment_name:r.experimentName,experiment_group:r.experimentGroup}})})(r,e,a,t)),(()=>((e,t,r)=>{(0,l.Nh)(E,"denied"),T(`mweb.notifications_upsell.${I(e)}.denied`,t);const n=k(e);r({component:13125,element:10358,event_type:102,view_type:n.viewType,view_parameter:n.viewParameter,aux_data:{experiment_name:t.experimentName,experiment_group:t.experimentGroup}})})(e,a,t)))):Promise.reject()},D=e=>{x=e},Z=({isAuthenticated:e,isAppShell:t})=>{let r=!1;const n=n=>{if(r)return;r=!0;const i=`${t?"warm":"cold"}.${e?"auth":"unauth"}`;(0,c.My)(`mweb_service_worker.appshell_status.${i}.${n}`)},i=navigator.serviceWorker,o=null==i?void 0:i.controller;i&&o?setTimeout((()=>n("timeout")),1e3):n("no_worker")}},550858:(e,t,r)=>{r.d(t,{Qi:()=>l,RK:()=>c,$_:()=>a});var n=r(766935);var i=r(844974);const o="REDUX_STATE",s=()=>!!navigator.serviceWorker,a=()=>s()&&JSON.parse((0,i.qn)(o))||{},c=e=>(0,n.Z)((t=>{const r={};r[e]=t,s()&&(e=>{if(window.requestIdleCallback)return window.requestIdleCallback(e);{const t=Date.now();setTimeout((()=>{e({didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))})}),1)}})((()=>(e=>{s()&&(0,i.Nh)(o,JSON.stringify({...a(),...e}))})(r)))}),1e3),l=()=>{(0,i.L_)(o)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/99747.pt_BR-0299382ccc00b4b4.mjs.map