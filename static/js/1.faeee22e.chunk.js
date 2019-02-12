(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1002:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormStorageNotice=void 0;var a=r(152),n=r(339),o=c(r(1)),i=r(151),l=c(r(65)),d=r(156),u=r(52),s=r(1003);function c(e){return e&&e.__esModule?e:{default:e}}const m=(0,l.default)(i.Button).withConfig({displayName:"NoticeButton"})`
  font-size: 0.9rem;
  margin: 0.2rem 1rem;
  padding: 0.5em 1rem;
`,f=(0,l.default)(i.Alert).withConfig({displayName:"StorageNotice"})`
  width: 100%;
  z-index: 5;
  ${d.mediaDesktop`
    font-size: 0.9rem;
    position: sticky;
    bottom: 0;
  `};
  ${d.mediaMobile`
    position: fixed;
    top: 5rem;
    font-size: 0.8rem;
    `};
  padding: 0.5rem 1rem;
  background-color: #d4eddadc;
`;t.OrderFormStorageNotice=(e=>o.default.createElement(u.WithRoot,{render:e=>o.default.createElement(s.QueryOrderForm,{skip:!e.order.hasOrder||null!==e.user.rememberForm,variables:{orderId:e.order.orderId},renderLoading:()=>null,render:({order:t})=>o.default.createElement(n.Observer,null,()=>t.countWares>0&&null===e.user.rememberForm?o.default.createElement(f,{"data-testid":"orderFormStorageNotice"},o.default.createElement("p",null,o.default.createElement(a.Trans,{id:"This app is using secure storage for keeping filled form data. It's not cookies, these are stored in your browser only."})),o.default.createElement(m,{color:"success",size:"sm",onClick:e.user.setFormRememberYes,"data-testid":"orderFormStorageNotice__Yes"},o.default.createElement(a.Trans,{id:"Always remember"})),o.default.createElement(m,{color:"secondary",size:"sm",onClick:e.user.setFormRememberNo,"data-testid":"orderFormStorageNotice__No"},o.default.createElement(a.Trans,{id:"Do not store"}))):null)})}))},1003:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryOrderForm=t.OrderFormQuery=void 0;var a,n=(a=r(21))&&a.__esModule?a:{default:a},o=r(160);const i=n.default`
  query GOrderForm($orderId: ID!) {
    order(id: $orderId) {
      id
      countWares
    }
  }
`;t.OrderFormQuery=i;const l=(0,o.buildQuery)(i);t.QueryOrderForm=l},1004:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderErrorModal=void 0,r(900);var a,n=r(152),o=r(153),i=(a=r(1))&&a.__esModule?a:{default:a},l=r(151),d=r(52);t.OrderErrorModal=(()=>{const{order:e}=(0,d.useRoot)();return(0,o.useObserver)(()=>i.default.createElement(l.Modal,{isOpen:e.hasErrors,toggle:e.clearErrors,className:"modal__container"},i.default.createElement(l.ModalHeader,{toggle:e.clearErrors,tag:l.Container,className:"modal__header"},i.default.createElement("span",null,i.default.createElement(n.Trans,{id:"Order can not be completed"}))),i.default.createElement(l.ModalBody,{className:"modal__body"},i.default.createElement("div",{className:"modal__body__content"},e.hasErrors&&e.submitErrors.map((e,t)=>i.default.createElement("div",{key:t},e))),i.default.createElement("div",{className:"modal__body__button__line"},i.default.createElement("div",{className:"modal__body__button__strip"}),i.default.createElement(l.Button,{className:"modal__body__button",color:"primary",onClick:e.clearErrors},i.default.createElement(n.Trans,{id:"I understand"})),"/>"))))})},1005:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderAgreements=void 0;var a,n=r(5),o=r(153),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),l=r(151),d=(a=r(65))&&a.__esModule?a:{default:a},u=r(1252),s=r(52),c=r(82);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const f=(0,d.default)(l.Button).withConfig({displayName:"ButtonStyled"})`
  padding: 0 0.5rem;
  font-size: 0.8rem;
  color: darkgray;
`,p=d.default.div.withConfig({displayName:"GdprAgreementStyled"})`
  font-size: 0.8rem !important;
  color: darkgray;
  margin: 0.5rem 0 0.5rem 0;
  & .row {
    margin: 0;
  }
`;t.OrderAgreements=(()=>{const e=(0,i.useRef)(n.observable.array([])).current,t=(0,i.useCallback)(t=>()=>{e.includes(t)?e.remove(t):e.push(t)},[]),{order:r}=(0,s.useRoot)();return(0,o.useObserver)(()=>i.default.createElement(i.default.Fragment,null,r.agreements.map((r,a)=>i.default.createElement("div",m({key:r.id},(e=>e.isConfirmed?{style:{display:"none"}}:{})(r)),i.default.createElement(u.FormInputCheckbox,{field:["agreements",a,"isConfirmed"],validate:e=>!r.isMandatory||r.isConfirmed||e?null:"Agreement is mandatory","data-testid":`orderAgreement__Check__${r.id}`},i.default.createElement("span",{dangerouslySetInnerHTML:{__html:r.name}}),r.isMandatory&&" * ",r.description&&i.default.createElement(i.default.Fragment,null,i.default.createElement(f,{color:"link",onClick:t(r.id),"data-testid":`orderAgreement__MoreButton__${r.id}`},e.includes(r.id)?c.i18n._("Less").toLocaleLowerCase():c.i18n._("More...").toLocaleLowerCase()),i.default.createElement(l.Collapse,{isOpen:e.includes(r.id)},i.default.createElement(p,{"data-testid":`orderAgreement__Info__${r.id}`,dangerouslySetInnerHTML:{__html:r.description}}))))))))})},1013:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormAutoFill=void 0;var a;(a=r(1))&&a.__esModule,r(334),r(158),r(1014);t.OrderFormAutoFill=(({onFill:e})=>null)},1014:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderNoteInput=t.MAX_LENGTH=void 0;var a,n=r(152),o=(a=r(1))&&a.__esModule?a:{default:a},i=r(894),l=r(151),d=r(82);t.MAX_LENGTH=50;const u=e=>e&&e.trim().length>50,s=e=>u(e)?d.i18n._("Note is too long"):null;t.OrderNoteInput=(()=>{const e=d.i18n._("eg. ingredients change, company...");return o.default.createElement(i.Field,{field:"note",validate:s,render:t=>o.default.createElement(l.FormGroup,null,o.default.createElement(l.Input,{type:"textarea",placeholder:d.i18n._("Note"),title:e,value:t.value,onChange:e=>t.setValue(e.target.value),onBlur:()=>t.setTouched(!0),valid:!t.error,invalid:Boolean(t.error),"data-testid":"orderNoteInput"}),o.default.createElement(l.FormText,null,e),u(t.value)?o.default.createElement(l.FormFeedback,null,o.default.createElement(n.Trans,{id:"Maximum length is {MAX_LENGTH, plural, other {# characters}}. Typed {0, plural, one {# char} other {# chars}}",values:{0:t.value.length,MAX_LENGTH:50}})):null)})})},1015:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormInputs=void 0;var a=s(r(1)),n=r(1266),o=r(1267),i=r(1014),l=r(1268),d=s(r(1269)),u=r(1271);function s(e){return e&&e.__esModule?e:{default:e}}t.OrderFormInputs=(()=>a.default.createElement(a.default.Fragment,null,a.default.createElement(o.OrderNameInput,null),a.default.createElement(l.OrderPhoneInput,null),a.default.createElement(n.OrderEmailInput,null),a.default.createElement(i.OrderNoteInput,null),a.default.createElement(u.OrderTimeButtons,null),a.default.createElement(d.default,null)))},1016:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useGuardedMutation=function(e,t={}){var{onUserErrors:r}=t,s=u(t,["onUserErrors"]);const c=l.i18n._("Unexpected error occured while sending a request. Our team was notified about the issue."),m=(0,a.useCallback)(e=>{const t=e.filter(o.RM.pathEq(["extensions","showToUser"],!0));r&&(0===t.length?r([c]):r(t.map(o.RM.prop("message"))))},[]),f=(0,a.useCallback)(e=>{if(function(e){return e.hasOwnProperty("graphQLErrors")}(e)){if(e.networkError)return void window.alert(l.i18n._("Communication with server has failed. Please retry the operation in a moment again."));if(e.graphQLErrors)return void m(e.graphQLErrors)}(0,i.reportError)(e)},[]),p=(0,n.useMutation)(e,s);return e=>d(this,void 0,void 0,function*(){try{const r=yield p({variables:e});return r.errors&&r.errors.length?(m(r.errors),null):r.data?r.data:null}catch(t){return f(t),null}})};var a=r(1),n=r(161),o=r(157),i=r(32),l=r(82),d=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function i(e){try{d(a.next(e))}catch(t){o(t)}}function l(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(i,l)}d((a=a.apply(e,t||[])).next())})},u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r}},1017:function(e,t,r){},1018:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormSetup=void 0;var a=r(336),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),o=r(894),i=r(151),l=r(52),d=r(158),u=r(19),s=r(157),c=r(32);var m=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function i(e){try{d(a.next(e))}catch(t){o(t)}}function l(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(i,l)}d((a=a.apply(e,t||[])).next())})};t.OrderFormSetup=(({render:e})=>{const{order:t}=(0,l.useRoot)(),{history:r}=(0,a.useRouterContext)();(0,n.useEffect)(()=>{t.isVamInitialized||t.initVam()},[]);const f=(0,n.useCallback)((e,r)=>m(void 0,void 0,void 0,function*(){try{yield t.updateVam(e.values),r.setValue("agreements",(a=e.values.agreements,t.agreements.map(e=>{const t=a.find(s.RM.propEq("id",e.id));return t?Object.assign({},e,{isConfirmed:t.isConfirmed}):e})))}catch(n){(0,c.reportError)(n,{formState:e.values})}var a}),[]),p=(0,a.useDebounceCallback)(f,1500);return n.default.createElement(o.Form,{defaultValues:function(e){return{firstname:e.firstname,lastname:e.lastname,email:e.email,phone:e.phone,phonePrefix:e.phonePrefix||e.defaultPhonePrefix,note:e.note,payment:d.PaymentGateEnum.Gopay,agreements:[]}}(t),validateOnMount:!0,onChange:p,onSubmit:e=>m(void 0,void 0,void 0,function*(){try{yield t.submitOrder(e),r.replace("/finish")}catch(a){(0,u.logOrder)(a)}})},t=>n.default.createElement(i.Form,{onSubmit:t.submitForm},e(t)))})},1019:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderSubmitLine=void 0,r(1275);var a=u(r(1)),n=r(334),o=r(156),i=u(r(1020)),l=r(921),d=r(82);function u(e){return e&&e.__esModule?e:{default:e}}t.OrderSubmitLine=(({onClick:e,canSubmit:t=!1})=>a.default.createElement(l.WithOrder,{observe:!0,render:r=>a.default.createElement("div",{className:"order__form__submit__line"},a.default.createElement("div",{className:"order__form__submit__line__strip"}),a.default.createElement(n.PrimaryButton,{className:"order__form__submit__line__button",color:"primary",size:"md",onClick:e,disabled:!t||r.isSubmitting,"data-testid":"orderSubmitButton"},a.default.createElement(o.Desktop,null,r.isSubmitting?a.default.createElement(i.default,null):d.i18n._("Place order").toLocaleUpperCase()),a.default.createElement(o.Mobile,null,d.i18n._("Place order").toLocaleUpperCase())))}))},1020:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(1)),n=o(r(340));function o(e){return e&&e.__esModule?e:{default:e}}var i=(0,r(65).withTheme)(e=>a.default.createElement(n.default,{name:"three-bounce",color:e.theme.primary,fadeIn:"none"}));t.default=i},1021:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderGoPayModal=void 0;var a=r(152),n=r(153),o=s(r(1)),i=s(r(65)),l=r(919),d=s(r(84)),u=r(52);function s(e){return e&&e.__esModule?e:{default:e}}const c=i.default.div.withConfig({displayName:"TextPadding"})`
  padding-bottom: 2rem;
`;t.OrderGoPayModal=(()=>{const{order:e}=(0,u.useRoot)();return(0,n.useObserver)(()=>o.default.createElement(l.AlertModal,{isOpen:e.isGoPayChecking,headerText:"GoPay platba"},o.default.createElement(c,null,o.default.createElement(a.Trans,{id:"Checking your GoPay payment, please wait..."})),o.default.createElement(d.default,{noMargin:!0})))})},1022:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderTimePicker=void 0,r(900);var a=r(152),n=r(167),o=r(83),i=r(153),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),d=r(161),u=r(151),s=r(334),c=r(52),m=r(157),f=r(1016),p=r(82),_=r(1277),v=r(1280);t.OrderTimePicker=(()=>{const{order:e}=(0,c.useRoot)(),{data:t,loading:r}=(0,d.useQuery)(v.OrderTimePickerQuery,{variables:{branchId:e.branchId},suspend:!1}),h=(0,f.useGuardedMutation)(v.UpdateOrderDeliveryTimeMutation,{onUserErrors:e.submitFailed}),y=(0,l.useRef)(e.deliverAt),b=()=>{const t=y.current;h({orderId:e.orderId,deliverAt:t&&(0,n.isoDate)(t)}),e.setDeliverAt(t),e.closeTimePicker()},g=()=>{if(r||!t)return null;const n=(()=>{const{companyBranch:e}=t;return e.isOpen||!e.willOpenAt?new Date:new Date(e.willOpenAt)})(),i=(()=>{const{companyBranch:e}=t;if(e.isOpen&&e.willCloseAt)return new Date(e.willCloseAt);const r=e.businessHours.find(m.RM.propEq("closed",!1));return r?new Date(r.closeAt):null})();if(null===i||(0,o.isAfter)(n,i))return l.default.createElement(a.Trans,{id:"It's not possible to pick a specific order time at this moment."});const d=(()=>{const{defaultDeliveryTime:r,defaultPickupTime:a}=t.companyBranch;return e.usingDeliveryOrderMethod?r:e.usingPickupOrderMethod?a:0})();return l.default.createElement(_.TimePicker,{minuteStep:15,minDate:(0,o.addMinutes)(n,d),maxDate:(0,o.addMinutes)(i,d),initialTime:y.current,filterIntervals:(()=>{const{companyBranch:e}=t;return e.businessHours.filter(m.RM.propEq("closed",!0)).map(e=>({start:new Date(e.openAt),end:new Date(e.closeAt)}))})(),onStepChange:e=>y.current=e})},O=e.usingDeliveryOrderMethod?p.i18n._("Deliver at what time?"):p.i18n._("When you will pickup the order?");return(0,i.useObserver)(()=>l.default.createElement(u.Modal,{isOpen:e.timePickerOpen,toggle:e.closeTimePicker,className:"modal__container",autoFocus:!0,backdrop:"static",fade:!1},l.default.createElement(u.ModalHeader,{toggle:e.closeTimePicker,tag:u.Container,className:"modal__header"},l.default.createElement("span",null,O)),l.default.createElement(u.ModalBody,{className:"modal__body"},l.default.createElement("div",{className:"modal__body__content"},g()),l.default.createElement("div",{className:"modal__body__button__line"},l.default.createElement("div",{className:"modal__body__button__strip"}),l.default.createElement(s.PrimaryButton,{onClick:b,size:"md",className:"modal__body__button"},p.i18n._("Confirm time").toLocaleUpperCase())))))})},1032:function(e,t,r){},1034:function(e,t,r){e.exports=r.p+"static/media/logo-commerce-01.6d4e5108.svg"},1035:function(e,t,r){e.exports=r.p+"static/media/logo-commerce-02.8afb6c6f.svg"},1036:function(e,t,r){e.exports=r.p+"static/media/logo-doveze.e13c0122.svg"},1037:function(e,t,r){e.exports=r.p+"static/media/logo-gopay.48aa4030.png"},1044:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryFinishView=t.FinishViewQuery=t.FinishViewOrderFragment=void 0;var a,n=(a=r(21))&&a.__esModule?a:{default:a},o=r(160),i=r(31);const l=n.default`
  fragment GFinishViewOrder on Order {
    id
    items {
      ...GCartItem
      sideDishes {
        ...GCartItem
      }
    }
    totalSum {
      ...GPrice
    }
    orderPayments {
      paymentMethod {
        paymentType {
          enum
        }
      }
    }
  }
  ${i.CartItemFragment}
  ${i.PriceFragment}
`;t.FinishViewOrderFragment=l;const d=n.default`
  query GFinishView($orderId: ID!, $branchId: ID!) {
    order(id: $orderId) {
      ...GFinishViewOrder
    }
    companyBranch(id: $branchId) {
      id
      phone
      company {
        id
      }
    }
    androidApp: mobileApplicationSettings(
      companyBranch: $branchId
      platform: ANDROID
    ) {
      url
    }
    iosApp: mobileApplicationSettings(companyBranch: $branchId, platform: IOS) {
      url
    }
  }
  ${l}
`;t.FinishViewQuery=d;const u=(0,o.buildQuery)(d);t.QueryFinishView=u},1048:function(e,t,r){},1193:function(e,t,r){},1195:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AddressInput=void 0,r(1196);var a=r(152),n=r(153),o=f(r(1)),i=r(151),l=f(r(65)),d=r(52),u=r(82),s=f(r(1198)),c=f(r(1199)),m=f(r(1200));function f(e){return e&&e.__esModule?e:{default:e}}const p=l.default.div.withConfig({displayName:"AddressInputStyled"})`
  width: 90%;
  min-width: 14rem;
  margin: 1rem auto;
  text-align: center;
`,_=l.default.div.withConfig({displayName:"AddressInputBoxStyled"})`
  border-radius: 1rem;
  border: 1px solid #d4d4d4;
  background-color: white;
  height: 2.3rem;
  overflow: hidden;
  & input {
    margin: 0.2rem 2rem 0.5rem 0.7rem;
    background: transparent;
    border: none;
  }
`;t.AddressInput=(()=>{const{location:e}=(0,d.useRoot)();return(0,n.useObserver)(()=>o.default.createElement(p,null,o.default.createElement(_,null,o.default.createElement(i.InputGroup,{size:"sm"},o.default.createElement(c.default,{address:e.address||"",isVisible:e.hasAddress,isResolving:e.isResolving,onValidClick:e.clearAddress}),o.default.createElement(m.default,{inputProps:{placeholder:u.i18n._("Type address or choose it from map"),autoComplete:"shipping street-address"},onSearch:e.withUserAddress,isVisible:!e.hasAddress,isSearching:e.isResolving}),o.default.createElement(s.default,{onClick:e.attemptGeolocation,isVisible:e.isGeolocationAvailable&&!e.isResolving}))),e.hasFinishedSearch?function(e){return!1===e.isResolved?o.default.createElement(v,{color:"danger"},o.default.createElement(a.Trans,{id:"Address was not recognized."})):!1===e.isStreetAddress?o.default.createElement(v,{color:"warning"},o.default.createElement(a.Trans,{id:"Please enter address with house number."})):!1===e.inDeliveryLocation?o.default.createElement(v,{color:"warning"},o.default.createElement(a.Trans,{id:"Meal can't be delivered to your chosen address by any restaurant."})):null}(e):null))});const v=(0,l.default)(i.Alert).withConfig({displayName:"NoMouseAlert"})`
  pointer-events: none;
`},1196:function(e,t,r){},1198:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GeolocationButton=void 0;var a=o(r(1)),n=r(151);function o(e){return e&&e.__esModule?e:{default:e}}const i=o(r(65)).default.span.withConfig({displayName:"Container"})`
  color: ${({theme:e})=>e.secondary};
  cursor: pointer;
  position: absolute;
  right: 0.4rem;
  top: 0.15rem;
`,l=({onClick:e,isVisible:t=!1})=>t?a.default.createElement(i,null,a.default.createElement(n.InputGroupAddon,{addonType:"append",onClick:e},a.default.createElement("span",{className:"flaticon-gps"}))):null;t.GeolocationButton=l;var d=l;t.default=d},1199:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ResolvedAddress=void 0;var a=o(r(1)),n=o(r(340));function o(e){return e&&e.__esModule?e:{default:e}}const i=({address:e,isVisible:t,isResolving:r,onValidClick:o})=>r?a.default.createElement("div",{className:"address__input__box__resolved wait"},a.default.createElement(n.default,{name:"ball-beat",fadeIn:"none"})):t?a.default.createElement("div",{className:"address__input__box__resolved",onClick:o},e):null;t.ResolvedAddress=i;var l=i;t.default=l},1200:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(r(4)),n=l(r(351)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),i=r(151);function l(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var u=class extends o.Component{constructor(){super(...arguments),this.state={value:""},this.onSearch=(0,n.default)(this.props.onSearch,2e3),this.onChange=(e=>{const t=e.target.value||"";this.setState({value:t}),this.onSearch(t.trim())}),this.onKeyPress=(e=>{"Enter"===e.key&&(this.onSearch.clear(),this.props.onSearch(this.state.value.trim()))}),this.inputRef=null,this.onInputMount=(e=>{this.inputRef=e})}componentDidMount(){this.setFocus()}componentDidUpdate(e){e.isVisible!==this.props.isVisible&&this.setFocus()}isVisible(){return!1!==this.props.isVisible}isSearching(){return!1!==this.props.isSearching}setFocus(){this.isVisible()&&null!==this.inputRef&&this.inputRef.focus()}render(){const{inputProps:e}=this.props,t=!this.isVisible()||this.isSearching();return o.default.createElement(i.Input,d({className:(0,a.default)({address__input__hidden:t}),onChange:this.onChange,onKeyPress:this.onKeyPress,value:this.state.value,innerRef:this.onInputMount,autoFocus:!0},e))}};t.default=u},1201:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AddressSubmit=void 0;var a=l(r(1)),n=r(334),o=l(r(988)),i=r(82);function l(e){return e&&e.__esModule?e:{default:e}}const d=({enabled:e,onClick:t,onPrefetch:r})=>a.default.createElement(o.default,null,a.default.createElement(n.PrimaryButton,{color:"primary",disabled:!e,onClick:t,onMouseEnter:()=>e&&r()},i.i18n._("Confirm address").toLocaleUpperCase()));t.AddressSubmit=d;var u=d;t.default=u},1202:function(e,t,r){},1204:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.InitialMapLocationQuery=void 0;const n=((a=r(21))&&a.__esModule?a:{default:a}).default`
  query GInitialLocation {
    initialLocation: resolveLocation {
      gpsCoordinates {
        latitude
        longitude
      }
    }
  }
`;t.InitialMapLocationQuery=n},1205:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeliveryMapPanning=void 0;var a,n=r(336),o=r(5),i=r(153),l=(a=r(1))&&a.__esModule?a:{default:a},d=r(52),u=r(19),s=r(989);t.DeliveryMapPanning=(({initialLocation:e})=>{const{location:t,map:r}=(0,d.useRoot)();(0,i.useDisposable)(()=>(0,o.reaction)(()=>r.clickPoint,e=>{e&&(t.withUserLocation(e),r.clearClickPoint())}));const a=(0,n.useFullComputed)(()=>t.geoPoint?((0,u.logMap)("pan to user location",t.geoPoint),t.geoPoint):t.geolocationPoint?((0,u.logMap)("pan to geolocation",t.geolocationPoint),t.geolocationPoint):e?((0,u.logMap)("pan to initial location",e),e):void(0,u.logMap)("no pan location available"),[e]);return(0,i.useObserver)(()=>l.default.createElement(s.MapPanning,{gps:a.get(),map:r}))})},1213:function(e,t,r){},1215:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SidedishPicker=void 0,r(1216);var a,n=r(339),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),i=(a=r(1218))&&a.__esModule?a:{default:a},l=r(1219);t.SidedishPicker=(({recipe:e,selection:t,onToggle:r})=>o.default.createElement(n.Observer,null,()=>o.default.createElement("div",{className:"food__sidedish__picker"},e.categories.map(e=>o.default.createElement(o.Fragment,{key:e.id},o.default.createElement("div",{className:"food__sidedish__picker__category"},e.nameLabel," ",o.default.createElement(i.default,{minCount:e.minCount,maxCount:e.maxCount})),e.sideDishes.map(a=>o.default.createElement(l.SidedishCheckbox,{key:`${a.id}-${e.id}`,sidedish:a,isSelected:t.includes(a.id),canBeSelected:!0,onClick:()=>r(a.id)})))))))},1216:function(e,t,r){},1218:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a};var o=({minCount:e,maxCount:t})=>{return n.default.createElement("span",null,"")};t.default=o},1219:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SidedishCheckbox=void 0;var a=i(r(1)),n=i(r(65)),o=r(993);function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const u=n.default.div.withConfig({displayName:"Name"})`
  float: left;
  text-align: left;
  white-space: normal;
  max-width: 13rem;
`,s=n.default.div.withConfig({displayName:"Price"})`
  font-weight: bold;
  float: right;
`;t.SidedishCheckbox=(e=>{var{sidedish:t}=e,r=d(e,["sidedish"]);return a.default.createElement(o.PickerButton,l({size:"xs",outline:!0,width:"17.5rem","data-testid":`sidedishCheckbox__${t.id}`},r),a.default.createElement(u,null,t.nameLabel),a.default.createElement(s,null,t.price.formattedValue))})},1220:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartOrderButton=void 0;var a,n=r(5),o=r(339),i=(a=r(1))&&a.__esModule?a:{default:a},l=r(334),d=r(82);var u=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function i(e){try{d(a.next(e))}catch(t){o(t)}}function l(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(i,l)}d((a=a.apply(e,t||[])).next())})};t.CartOrderButton=(({selection:e,onConfirm:t})=>{const r=n.observable.box(!1);return i.default.createElement(o.Observer,null,()=>i.default.createElement(l.PrimaryButton,{className:"modal__body__button",disabled:r.get(),"data-testid":"cartOrderButton",onClick:()=>u(void 0,void 0,void 0,function*(){r.set(!0),yield t(),r.set(!1)})},d.i18n._("{0, plural, =0 {Order without sidedish} one {Order with this sidedish} other {Order with # sidedishes}}",{0:e.length}).toLocaleUpperCase()))})},1221:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartContents=void 0;var a,n=r(153),o=(a=r(1))&&a.__esModule?a:{default:a},i=r(52),l=r(1222),d=r(1223),u=r(1228);t.CartContents=(({order:e})=>{const{order:t}=(0,i.useRoot)();return(0,n.useObserver)(()=>o.default.createElement("div",{className:"cart__items__container"},o.default.createElement("div",{className:"cart__items__container__content"},e.items.map(e=>o.default.createElement(d.CartItem,{key:e.id,item:e,isActive:t.lastActiveRecipeId===e.recipe.id,onEdit:()=>t.setUsedRecipeId(e.recipe.id)})),o.default.createElement(l.CartDiscounts,{order:e}),o.default.createElement(u.CartTotals,{order:e}))))})},1222:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartDiscounts=void 0;var a,n=r(152),o=(a=r(1))&&a.__esModule?a:{default:a};t.CartDiscounts=(({order:e})=>e.discounts&&e.discounts.length>0?o.default.createElement("div",null,e.discounts.map(({code:e,description:t,price:{formattedValue:r}})=>o.default.createElement("div",{key:e,className:"cart__item__summary"},o.default.createElement("div",{className:"cart__item__summary__label"},t),o.default.createElement("div",{className:"cart__item__summary__price"},r))),o.default.createElement("div",{className:"cart__item__summary"},o.default.createElement("div",{className:"cart__item__summary__label"},o.default.createElement(n.Trans,{id:"Total discount"})),o.default.createElement("div",{className:"cart__item__summary__price"},e.totalDiscount.formattedValue))):null)},1223:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartItem=void 0,r(1224);var a=u(r(1)),n=u(r(65)),o=r(156),i=r(82),l=r(1226),d=r(1227);function u(e){return e&&e.__esModule?e:{default:e}}const s=n.default.div.withConfig({displayName:"EditButtonsContainerStyled"})`
  flex: 0 0 auto;
`,c=n.default.div.withConfig({displayName:"CartItemStyled"})`
  width: 100%;
  min-height: 3rem;
  color: #1d1d1d;
  margin: 0 0 0.4rem 0;
  padding: 0.2rem;
  background: ${({isActive:e})=>e?"#b3ebcc":"rgba(255, 255, 255, 0.8)"};
  text-align: left;
  display: flex;
`;t.CartItem=(({item:e,isActive:t,onEdit:r})=>a.default.createElement(c,{isActive:t},a.default.createElement(s,null,a.default.createElement(d.RemoveCartItemButton,{itemId:e.id,enabled:!e.automatic}),a.default.createElement(o.Desktop,null,a.default.createElement(l.EditCartItemButton,{itemId:e.id,enabled:0!==e.recipe.sideDishCount&&!e.automatic,onClick:r}))),a.default.createElement("div",{className:"cart__item__description"},a.default.createElement("div",{className:"cart__item__item__name","data-testid":`cardItem__Name__${e.recipe.id}`},e.recipe.nameLabel),a.default.createElement("div",{className:"cart__item__item__side__dish","data-testid":`cardItem__SideDish__${e.recipe.id}`},e.sideDishes.length>0?`+ ${e.sideDishes.map(({recipe:e})=>e.nameLabel).join(",")}`:e.recipe.sideDishCount>0&&a.default.createElement("span",null,i.i18n._("Without sidedish").toLocaleLowerCase()))),a.default.createElement("div",{className:"cart__item__item__price","data-testid":`cardItem__Price__${e.id}`},e.automatic?i.i18n._("For free"):e.price.formattedValue)))},1224:function(e,t,r){},1226:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EditCartItemButton=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(159),i=r(994);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};t.EditCartItemButton=(e=>{var{itemId:t,onClick:r}=e,a=d(e,["itemId","onClick"]);const u=n.default.createElement(i.CartItemButton,l({icon:"edit",color:"#d9a700"},a));return a.enabled?n.default.createElement(o.Link,{to:`/order/change/${t}`,onClick:r,"data-testid":`editCartItemButton__${t}`},u):u})},1227:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RemoveCartItemButton=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),n=r(52),o=r(994);t.RemoveCartItemButton=(({itemId:e,enabled:t})=>{const{order:r}=(0,n.useRoot)(),i=(0,a.useRef)(!1);return a.default.createElement(o.CartItemButton,{icon:"delete",color:"#99230e",enabled:t&&!i.current,data_testid:"removeCartItemButton",onClick:()=>{i.current||r.removeItemFromCart(e),i.current=!0}})})},1228:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartTotals=void 0;var a=l(r(350)),n=l(r(1)),o=l(r(65)),i=r(82);function l(e){return e&&e.__esModule?e:{default:e}}const d=o.default.div.withConfig({displayName:"CartItemSummaryTotalThemed"})`
  background: ${({theme:e})=>(0,a.default)(e.primary).alpha(.7).hsl().string()} !important;
`;t.CartTotals=(({order:e})=>n.default.createElement("div",null,e.coverPrice&&e.coverPrice.value?n.default.createElement("div",{key:"casePrice",className:"cart__item__summary"},n.default.createElement("div",{className:"cart__item__summary__label"},i.i18n._("Covers")),n.default.createElement("div",{className:"cart__item__summary__price"},e.coverPrice.formattedValue)):null,e.transportFee&&e.transportFee.value?n.default.createElement("div",{key:"transportFee",className:"cart__item__summary"},n.default.createElement("div",{className:"cart__item__summary__label"},i.i18n._("Delivery")),n.default.createElement("div",{className:"cart__item__summary__price"},e.transportFee.formattedValue)):null,n.default.createElement(d,{key:"totalPrice",className:"cart__item__summary cart__item__summary__total"},n.default.createElement("div",{className:"cart__item__summary__label"},i.i18n._("Total")),n.default.createElement("div",{className:"cart__item__summary__price","data-testid":"cardItemSummary__Price"},e.totalSum.formattedValue))))},1229:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartIsEmpty=void 0;var a=i(r(1)),n=i(r(65)),o=r(82);function i(e){return e&&e.__esModule?e:{default:e}}const l=n.default.span.withConfig({displayName:"CartIsEmptyThemed"})`
  color: ${({theme:e})=>e.secondary};
`;t.CartIsEmpty=(()=>a.default.createElement(l,{className:"cart__column__cart__empty__label","data-testid":"cartIsEmpty"},`${o.i18n._("Cart is empty")}...`))},1230:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChangeCartModal=void 0;var a,n=r(152),o=(a=r(1))&&a.__esModule?a:{default:a},i=r(159),l=r(151),d=r(52),u=r(160),s=r(157),c=r(343),m=r(992);const f=(0,u.buildQuery)(c.OrderCartForItemQuery);t.ChangeCartModal=(()=>{const{order:e}=(0,d.useRoot)();return o.default.createElement(i.Route,{path:"/order/change/:itemId",render:({match:t,history:r})=>o.default.createElement(f,{variables:{itemId:t.params.itemId},renderLoading:!1,renderError:()=>o.default.createElement(l.Alert,{color:"warning"},o.default.createElement(n.Trans,{id:"Error in loading cart item. Issue was reported."})),render:(a,{loading:n})=>o.default.createElement(m.CartModal,{recipe:a.item&&a.item.recipe,initialSelection:a.item?a.item.sideDishes.map(s.RM.path(["recipe","id"])):[],onConfirm:r=>e.updateItem(t.params.itemId,r),onClose:()=>r.goBack(),isLoading:n})})})})},1231:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(1232);var a=u(r(4)),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),o=u(r(997)),i=u(r(1001)),l=u(r(65)),d=r(156);function u(e){return e&&e.__esModule?e:{default:e}}const s=l.default.div.withConfig({displayName:"CategoryNavigatorContainer"})`
  background-color: #d4d4d4;
  border-top-left-radius: 0.6rem;
  padding: 0.7rem 0.5rem 0 0.2rem;
  position: sticky;
  top: 0;
  z-index: 1;
  user-select: none;
  display: flex;
  ${d.mediaDesktop`
    flex-wrap: wrap;
  `}
  ${d.mediaMobile`
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    box-shadow: inset -15px -5px 15px -14px rgba(0, 0, 0, 0.6);
    margin: 0;
    border-top-left-radius: 0;
    background-color: #f3f3f3;
    opacity: 0.94;
  `}
`;var c=({categories:e})=>{const[t,r]=(0,n.useState)(0);return n.default.createElement(s,null,0===e.length?null:e.map((e,l)=>n.default.createElement(o.default.Link,{to:e.nameLabel,key:e.id,className:(0,a.default)("category__navigator__scroll__link",{active:t===l}),onSetActive:()=>r(l),offset:-168,smooth:!0,spy:!0,"data-testid":`categoryNavigatorScrollLink__${e.id}`},n.default.createElement("div",{className:"category__navigator__scroll__link__circle"},n.default.createElement("span",{className:`flaticon-${e.pictogram}`})),n.default.createElement("div",{className:"category__navigator__scroll__link__description"},n.default.createElement(i.default,{lines:2},e.nameLabel)))))};t.default=c},1232:function(e,t,r){},1241:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FoodMenu=void 0;var a=r(152),n=r(339),o=s(r(1)),i=s(r(65)),l=r(156),d=s(r(1242)),u=s(r(1243));function s(e){return e&&e.__esModule?e:{default:e}}const c=i.default.div.withConfig({displayName:"FoodMenuStyled"})`
  border-radius: 0 0 0.6rem 0.6rem;
  ${l.mediaDesktop`background: white;`};
  ${l.mediaMobile`
    background: #eee9e7;
    background-size: cover;
    background-attachment: scroll;
  `};
`,m=i.default.div.withConfig({displayName:"FoodMenuListStyled"})`
  ${l.mediaDesktop`
    margin: 0 1.4rem 1rem 1.6rem;
    padding: 2rem 0 2rem 0;
  `};
  ${l.mediaMobile`
    margin: 0 0.7rem 1rem 0.7rem;
    padding: 0 0 4rem 0;
  `};
`;t.FoodMenu=class extends o.default.Component{shouldComponentUpdate({shouldUpdate:e}){return e}orderLimitReached(){const{orderItemCount:e,rootModel:{config:t}}=this.props;return e>=t.orderItemsMax}render(){const{categories:e,inCart:t,rootModel:{order:r,user:i}}=this.props,l=!this.orderLimitReached();return o.default.createElement(c,null,o.default.createElement(m,null,0===e.length?o.default.createElement("h3",null,o.default.createElement(a.Trans,{id:"Food menu is empty. We are sorry."})):o.default.createElement(n.Observer,null,()=>e.map(e=>o.default.createElement(d.default,{key:e.id,category:e},e.recipes.map(e=>o.default.createElement(u.default,{key:e.id,recipe:e,inCart:t[e.id]||0,isActive:r.lastActiveRecipeId===e.id,canAddToCart:l,onClick:()=>{l?r.setUsedRecipeId(e.id):i.showOrderLimit()},onPrefetch:()=>{e.sideDishCount>0&&r.prefetchFood(e.id)}})))))))}}},1242:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(r(1)),n=l(r(997)),o=l(r(65)),i=r(156);function l(e){return e&&e.__esModule?e:{default:e}}const d=o.default.div.withConfig({displayName:"FoodCategoryStyled"})`
  color: #474747;
  display: block;
  font-size: 1.6rem;
  & a {
    text-decoration: none;
  }
`,u=(0,o.default)("h3").withConfig({displayName:"FoodCategoryTitleStyled"})`
  ${i.mediaMobile`margin: 1rem 0 0.4rem 1rem;`};
`;var s=({category:e,children:t})=>a.default.createElement(n.default.Element,{name:e.nameLabel},a.default.createElement(d,null,a.default.createElement(u,null,e.nameLabel),t));t.default=s},1243:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(1244);var a=d(r(1)),n=d(r(1001)),o=d(r(65)),i=r(156),l=r(1246);function d(e){return e&&e.__esModule?e:{default:e}}const u=o.default.div.withConfig({displayName:"FoodMenuItemStyled"})`
  padding: 1rem 0.5rem 0.3rem 1.1rem;
  border: 1px solid #d5d5d5 !important;
  margin: 0 0 0.4rem 0;
  border-radius: 0.8rem;
  cursor: pointer;
  position: relative;
  min-height: 6rem;
  &:hover {
    background-color: #c9e8d7;
  }
  background-color: ${({isActive:e})=>e?"#b3ebcc":"white"};
  h4 {
    font-size: 1rem;
    font-weight: 700;
    color: #404040;
    margin-bottom: 0.1rem;
    margin-right: 6rem;
  }
  p {
    color: #666666;
    margin: 0.6rem 0 0 0;
    font-size: 0.9rem;
    max-height: 2.5rem;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`,s=o.default.img.withConfig({displayName:"FoodMenuItemImage"})`
  width: 6rem;
  height: 6rem;
  display: block;
  float: left;
  margin: -1.05rem 1rem 0 -1.2rem;
  border-radius: 0.8rem 0 0 0.8rem;
  object-fit: cover;
`,c=o.default.div.withConfig({displayName:"FoodMenuItemPriceCorner"})`
  border-top-width: 1.8rem;
  border-top-style: solid;
  border-top-color: ${({theme:e})=>e.primary} !important;
  position: absolute;
  right: 4.799rem;
  top: 1rem;
  width: 0;
  height: 0;
  border-left: 1.8rem solid transparent;
`,m=o.default.div.withConfig({displayName:"FoodMenuItemPrice"})`
  background-color: ${({theme:e})=>e.primary} !important;
  position: absolute;
  right: 0;
  top: 1rem;
  width: 4.8rem;
  height: 1.8rem;
  padding: 0.12rem 0.7rem 0.3rem 0rem;
  font-weight: 500;
  font-size: 1.1rem;
  color: white;
  text-align: right;
  overflow: hidden;
  white-space: nowrap;
`,f=o.default.div.withConfig({displayName:"FoodMenuItemCount"})`
  background-color: ${({theme:e})=>e.secondary};
  float: left;
  position: absolute;
  left: -1.2rem;
  padding: 0.4rem 0.6rem;
  color: white;
  border-radius: 1.8rem;
  font-size: 0.9rem;
  ${i.mediaMobile`
    left: -0.6rem;
    top: -0.7rem;
  `};
`;var p=({recipe:e,inCart:t,onPrefetch:r,isActive:o,onClick:i,canAddToCart:d})=>a.default.createElement(l.LinkToCart,{recipeId:e.id,hasSidedish:e.sideDishCount>0,canAddToCart:d,onClick:i,"data-testid":`foodMenuItem__${e.id}`},a.default.createElement(u,{onMouseEnter:r,isActive:o},e.image&&a.default.createElement(s,{src:e.image,alt:e.nameLabel}),a.default.createElement(c,null),a.default.createElement(m,{"data-testid":`foodMenuItem__Price__${e.id}`},e.price.formattedValue),t>0?a.default.createElement(f,null,`${t}x`):"",a.default.createElement("h4",null,a.default.createElement(n.default,{lines:2,"data-testid":`foodMenuItem__Name__${e.id}`},e.nameLabel)),a.default.createElement("p",null,a.default.createElement(n.default,{lines:2,"data-testid":`foodMenuItem__Description__${e.id}`},e.descriptionLabel))));t.default=p},1244:function(e,t,r){},1246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LinkToCart=void 0;var a=d(r(1)),n=r(159),o=d(r(65)),i=r(52),l=r(156);function d(e){return e&&e.__esModule?e:{default:e}}const u=(0,o.default)(n.Link).withConfig({displayName:"LinkStyled"})`
  color: inherit;
  &:visited div {
    border: inherit;
  }
`;t.LinkToCart=(({recipeId:e,hasSidedish:t,canAddToCart:r,onClick:n,children:o})=>r?t?a.default.createElement(u,{to:{pathname:`/order/add/${e}`},onClick:n},o):a.default.createElement(i.WithRoot,{render:({order:t})=>a.default.createElement(l.Mobile,null,r=>a.default.createElement("div",{onClick:()=>{n(),r?t.addFromRecipeMobile(e):t.addFromRecipe(e)}},o))}):a.default.createElement("div",{onClick:n},o))},1247:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderLimitModal=void 0;var a,n=r(153),o=(a=r(1))&&a.__esModule?a:{default:a},i=r(919),l=r(52),d=r(82);t.OrderLimitModal=(()=>{const{user:e}=(0,l.useRoot)();return(0,n.useObserver)(()=>o.default.createElement(i.AlertModal,{isOpen:!e.orderLimitAlertHidden,onClose:e.hideOrderLimit,headerText:d.i18n._("Limit has been reached")},d.i18n._("The maximum number of items in the order has been reached")))})},1252:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormInputCheckbox=void 0;var a=l(r(1)),n=r(894),o=r(151),i=l(r(65));function l(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const s=i.default.div.withConfig({displayName:"CheckboxContainerStyled"})`
  display: flex;
  margin-bottom: 0.5rem;
`,c=(0,i.default)(o.Input).withConfig({displayName:"CheckboxStyled"})`
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: white;
  border: 1px solid;
  border-color: ${({invalid:e})=>e?"red":"#c5c5c5"};
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  border-radius: 0.25rem;
  position: relative;
  margin: 0;
  outline: none;
  &:checked {
    background-color: white;
  }
  &:checked:after {
    content: '\\2714';
    font-size: 2rem;
    position: absolute;
    top: -0.5rem;
    left: 0.1rem;
    color: #1d1d1d;
    overflow: hidden;
  }
`,m=i.default.div.withConfig({displayName:"LabelStyled"})`
  margin: 0 0 0 0.8rem;
  vertical-align: top;
`;t.FormInputCheckbox=(e=>{var{field:t,defaultValue:r=!1,validate:o,children:i}=e,l=u(e,["field","defaultValue","validate","children"]);return a.default.createElement(n.Field,{field:t,defaultValue:r,validate:o},e=>a.default.createElement(s,null,a.default.createElement(c,d({type:"checkbox",value:e.value,onChange:t=>e.setValue(t.target.checked),invalid:e.touched&&Boolean(e.error)},l)),a.default.createElement(m,null,i)))})},1266:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderEmailInput=t.OrderEmailInputValidator=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(151),i=r(937),l=r(82);const d=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,u=e=>{const t=e.trim();return""===t?l.i18n._("E-mail is mandatory"):d.test(t)?null:l.i18n._("E-mail format is not valid")};t.OrderEmailInputValidator=u;t.OrderEmailInput=(()=>n.default.createElement(o.FormGroup,null,n.default.createElement(i.FormTextInput,{field:"email",type:"email",autoComplete:"email",placeholder:"E-mail",showFeedback:!0,validate:u,"data-testid":"orderEmailInput"})))},1267:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderNameInput=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(151),i=r(937),l=r(82);t.OrderNameInput=(()=>n.default.createElement(o.FormGroup,null,n.default.createElement(o.InputGroup,null,n.default.createElement(i.FormTextInput,{field:"firstname",autoComplete:"given-name",placeholder:l.i18n._("First name"),validate:e=>""===e.trim()?l.i18n._("First name is mandatory"):null,"data-testid":"orderNameInput__FirstName"}),n.default.createElement(i.FormTextInput,{field:"lastname",autoComplete:"family-name",placeholder:l.i18n._("Last name"),validate:e=>""===e.trim()?l.i18n._("Last name is mandatory"):null,"data-testid":"orderNameInput__LastName"}))))},1268:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderPhoneInput=t.OrderPhonePrefixInputValidator=t.OrderPhoneInputValidator=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(151),i=r(937),l=r(82);const d=e=>""===e.trim()?l.i18n._("Phone is mandatory"):null;t.OrderPhoneInputValidator=d;const u=e=>""===e.trim()?l.i18n._("Phone prefix is mandatory"):null;t.OrderPhonePrefixInputValidator=u;t.OrderPhoneInput=(()=>n.default.createElement(o.FormGroup,null,n.default.createElement(o.InputGroup,null,n.default.createElement(i.FormTextInput,{field:"phonePrefix",autoComplete:"tel-country-code",placeholder:"+",validate:u}),n.default.createElement(i.FormTextInput,{field:"phone",type:"tel",autoComplete:"tel-national",placeholder:l.i18n._("Phone"),validate:d,style:{width:"55%"},"data-testid":"orderPhoneInput__Phone"}))))},1269:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderPromoInputUI=v,t.default=void 0;var a,n=r(336),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),i=r(161),l=r(151),d=(a=r(65))&&a.__esModule?a:{default:a},u=r(334),s=r(52),c=r(1016),m=r(82),f=r(1270);var p=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function i(e){try{d(a.next(e))}catch(t){o(t)}}function l(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(i,l)}d((a=a.apply(e,t||[])).next())})};const _=d.default.div.withConfig({displayName:"CodesPanel"})`
  margin-top: 0.5rem;
  & button {
    margin-right: 0.5rem;
    font-size: 0.7rem;
  }
`;function v({codes:e,onCodeAdd:t,onCodeRemove:r,autoSubmitAfterTimeout:a=2e3}){const i=(0,o.useRef)(null),[d,s]=(0,o.useState)(!1),c=(0,o.useCallback)(()=>p(this,void 0,void 0,function*(){if(!i.current||i.current.disabled)return;const e=i.current.value.trim();if(0!==e.length){s(!0),i.current.disabled=!0,i.current.value=m.i18n._("Validating promo code {code}...",{code:e});try{yield t(e),i.current&&(i.current.value="")}catch(r){i.current&&(i.current.value=e)}finally{s(!1),i.current&&(i.current.disabled=!1,i.current.focus())}}}),[t]),f=(0,n.useDebounceCallback)(c,a),v=(0,o.useCallback)(e=>{"Enter"===e.key&&(c(),e.preventDefault())},[]);return o.default.createElement(l.FormGroup,null,o.default.createElement(l.InputGroup,null,o.default.createElement(l.Input,{innerRef:i,autoComplete:"off",disabled:d,placeholder:m.i18n._("Promo codes"),onChange:f,onKeyDown:v,onBlur:c,onPaste:c})),o.default.createElement(_,null,e.map(({id:e,code:t})=>o.default.createElement(u.SecondaryButton,{key:e,onClick:()=>r(e)},`${t} \u2716`))))}var h=()=>{const{order:e}=(0,s.useRoot)(),{data:t}=(0,i.useQuery)(f.OrderPromoCodesQuery,{suspend:!1,variables:{orderId:e.orderId}}),r=(0,c.useGuardedMutation)(f.AddOrderPromoMutation,{onUserErrors:e.submitFailed}),a=(0,o.useCallback)(t=>p(void 0,void 0,void 0,function*(){if(!e.orderId)return;const a=yield r({orderId:e.orderId,code:t});e.setCartRefresh(!0),a&&a.addOrderPromoCode.userErrors.length&&e.submitFailed(a.addOrderPromoCode.userErrors)}),[]),n=(0,c.useGuardedMutation)(f.RemoveOrderPromoMutation,{onUserErrors:e.submitFailed});return o.default.createElement(v,{codes:t&&t.order?t.order.promoCodes:[],onCodeAdd:a,onCodeRemove:t=>{e.orderId&&(e.setCartRefresh(!0),n({codeId:t,orderId:e.orderId}))}})};t.default=h},1270:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RemoveOrderPromoMutation=t.AddOrderPromoMutation=t.OrderPromoCodesQuery=void 0;var a,n=(a=r(21))&&a.__esModule?a:{default:a},o=r(31);const i=n.default`
  query GOrderPromoCodes($orderId: ID!) {
    order(id: $orderId) {
      id
      promoCodes {
        ...GPromoCode
      }
    }
  }
  ${o.PromoCodeFragment}
`;t.OrderPromoCodesQuery=i;const l=n.default`
  mutation MAddOrderPromo($orderId: ID!, $code: String!) {
    addOrderPromoCode(order: $orderId, promoCode: $code) {
      userErrors: errors
      order {
        id
        promoCodes {
          ...GPromoCode
        }
      }
    }
  }
  ${o.PromoCodeFragment}
`;t.AddOrderPromoMutation=l;const d=n.default`
  mutation MRemoveOrderPromo($orderId: ID!, $codeId: ID!) {
    removeOrderPromoCode(order: $orderId, promoCode: $codeId) {
      id
      promoCodes {
        ...GPromoCode
      }
    }
  }
  ${o.PromoCodeFragment}
`;t.RemoveOrderPromoMutation=d},1271:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderTimeButtons=void 0,r(1017);var a,n=r(152),o=r(153),i=(a=r(1))&&a.__esModule?a:{default:a},l=r(334),d=r(52),u=r(82);t.OrderTimeButtons=(()=>{const{order:e}=(0,d.useRoot)();return(0,o.useObserver)(()=>i.default.createElement("div",{className:"order__payment__method"},i.default.createElement(l.SelectButtonThemed,{"data-testid":"orderTimeButtonNow",selected:void 0===e.deliverAt,onClick:()=>e.setDeliverAt(void 0)},u.i18n._("When possible")),i.default.createElement(l.SelectButtonThemed,{"data-testid":"orderTimeButtonLater",selected:void 0!==e.deliverAt,onClick:e.openTimePicker},e.deliverAt?i.default.createElement(n.Trans,{id:"at {0,date,date0}",values:{0:e.deliverAt},formats:{date0:{weekday:"long",hour:"numeric",minute:"numeric"}}}):u.i18n._("Choose time"))))})},1275:function(e,t,r){},1277:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TimePicker=void 0;var a,n=r(152),o=r(336),i=r(83),l=r(168),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),u=(a=r(65))&&a.__esModule?a:{default:a},s=r(1278),c=r(1279);const m=u.default.div.withConfig({displayName:"TimePickerContainer"})`
  margin-top: 1rem;
`,f=u.default.div.withConfig({displayName:"TimePickerDay"})`
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  margin: 0 0 0.2rem 0.2rem;
`;t.TimePicker=(({minDate:e,maxDate:t,minuteStep:r,onStepChange:a,initialTime:u,filterIntervals:p=[]})=>{const _=(0,d.useMemo)(()=>{const a=(0,s.createTimeSteps)(e,t,r);return p.length?a.filter(e=>p.some((0,l.isWithinInterval)(e))):a},[e,t,r,p]),v=(0,d.useMemo)(()=>(0,i.eachDayOfInterval)({start:e,end:t}),[e,t]),[h,y]=(0,d.useState)(0);return(0,d.useEffect)(()=>{u&&y((0,i.closestIndexTo)(u,_))},[u]),(0,o.useEffectOnce)(()=>{a(_[h])}),d.default.createElement(m,null,v.map(e=>d.default.createElement(d.Fragment,{key:e.getDate()},d.default.createElement(f,null,d.default.createElement(n.DateFormat,{value:e,format:{month:"long",day:"numeric",weekday:"long"}})),_.map((t,r)=>(0,i.isEqual)(e,(0,i.startOfDay)(t))?d.default.createElement(c.TimePickerButton,{key:t.getTime(),time:t,isSelected:r===h,canBeSelected:!0,onClick:()=>{y(r),a(t)}}):null))))})},1278:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createTimeSteps=function(e,t,r){let o=(0,a.startOfMinute)(n(e,r));const i=[],l=(0,a.endOfMinute)((0,a.subMinutes)(t,1));do{i.push(o),o=(0,a.addMinutes)(o,r)}while(o<=l);return i},t.timeClampUp=n,t.timeClampDown=o;var a=r(83);function n(e,t){return(0,a.addMinutes)(o(e,t),t)}function o(e,t){return(0,a.subMinutes)(e,(0,a.getMinutes)(e)%t)}},1279:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TimePickerButton=void 0;var a=l(r(1)),n=l(r(65)),o=r(993),i=r(341);function l(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const s=n.default.div.withConfig({displayName:"Time"})`
  font-size: 1.2rem;
`;t.TimePickerButton=(e=>{var{time:t}=e,r=u(e,["time"]);return a.default.createElement(o.PickerButton,d({size:"xs",outline:!0,width:"10rem","data-testid":`timePickerButton__${t.getTime()}`},r),a.default.createElement(s,null,(0,i.formatTime)(t)))})},1280:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UpdateOrderDeliveryTimeMutation=t.OrderTimePickerQuery=void 0;var a,n=(a=r(21))&&a.__esModule?a:{default:a},o=r(166);const i=n.default`
  query GOrderTimePicker($branchId: ID!) {
    companyBranch(id: $branchId) {
      id
      isOpen
      businessHours: businessHoursIntervals {
        openAt
        closeAt
        closed
      }
      defaultDeliveryTime
      defaultPickupTime
      willOpenAt
      willCloseAt
    }
  }
`;t.OrderTimePickerQuery=i;const l=n.default`
  mutation MUpdateOrderDeliveryTime($orderId: ID!, $deliverAt: DateTime) {
    updateOrder(id: $orderId, order: { deliverAt: $deliverAt }) {
      ...GOrder
    }
  }
  ${o.OrderFragment}
`;t.UpdateOrderDeliveryTimeMutation=l},893:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ColStyleRight=t.ColStyleLeft=t.ColStyle=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(151);t.ColStyle=(({children:e})=>n.default.createElement(o.Col,{className:"pl-sm-0",sm:"12",md:"12",lg:"10",xl:"8"},e));t.ColStyleLeft=(({children:e})=>n.default.createElement(o.Col,{className:"pl-sm-0",sm:"8",md:"8",lg:"6",xl:"5"},e));t.ColStyleRight=(({children:e})=>n.default.createElement(o.Col,{className:"pl-sm-0",sm:"4",md:"4",lg:"4",xl:"3"},e))},899:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useShopStatus=function({status:e,updateInterval:t=30*a.SECOND,openSoonThresholdInMinutes:r=30,closeSoonThresholdInMinutes:i=30}){const l=(0,a.useNow)();(0,a.useTimer)({interval:t,enabled:Boolean(t)});const d=l(),{isOpen:u,willCloseAt:s,willOpenAt:c}=e;let m;const f=c?(0,n.differenceInMinutes)(c,d):0,p=s?(0,n.differenceInMinutes)(s,d):0;m=u?s&&p<=0?"Closed":o(s,i,d)?"ClosingSoon":"Open":c&&f<=0?"Open":o(c,r,d)?"OpeningSoon":"Closed";return{decision:m,openingIn:f,closingIn:p}};var a=r(336),n=r(83);function o(e,t,r){return!!e&&Math.abs((0,n.differenceInMinutes)(e,r))<=t}},900:function(e,t,r){},918:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShopAddress=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(82);t.ShopAddress=(({address:e})=>{if(!e||!e.location)return n.default.createElement("span",null,o.i18n._("Unknown address"));const{location:t}=e;return n.default.createElement("span",null,`${t.street} ${t.houseNumber},\n ${t.city}`)})},919:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AlertModal=void 0,r(900);var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(151);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var l=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};t.AlertModal=(e=>{var{isOpen:t,headerText:r,onClose:a,children:d}=e,u=l(e,["isOpen","headerText","onClose","children"]);return n.default.createElement(o.Modal,i({isOpen:t,toggle:a,className:"modal__container"},u,{"data-testid":"alertModal"}),n.default.createElement(o.ModalHeader,{tag:o.Container,toggle:a,className:"modal__header"},n.default.createElement("span",null,r)),n.default.createElement(o.ModalBody,{className:"modal__body"},n.default.createElement("div",{className:"modal__body__content"},d)))})},920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BackgroundThemed=void 0;var a=o(r(1)),n=o(r(65));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const l=e=>{var{imageName:t,fallbackColor:r="#5b453c",fixed:o=!1,size:l="inherit",children:d,component:u="div"}=e,s=i(e,["imageName","fallbackColor","fixed","size","children","component"]);return a.default.createElement((0,n.default)(u)`
      background-image: ${e=>`url(${e.theme[t]})`};
      background-attachment: ${e=>o?"fixed":"inherit"};
      background-repeat: no-repeat;
      background-position: left top;
      background-size: ${e=>l};
    `,s,d)};t.BackgroundThemed=l;var d=l;t.default=d},921:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WithOrder=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(30),i=r(52);t.WithOrder=(({render:e,observe:t,redirect:r=!1})=>n.default.createElement(i.WithRoot,{observe:t,render:({order:t})=>t.hasOrder?e(t):r?n.default.createElement(o.Redirect,{to:"/"}):null}))},922:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseMap=void 0;var a=r(153),n=l(r(1)),o=r(901),i=l(r(65));function l(e){return e&&e.__esModule?e:{default:e}}const d=i.default.div.withConfig({displayName:"MapContainerStyled"})`
  border-radius: 0 0 0.5rem 0.5rem;
  overflow: hidden;
  height: calc(100% - 3.75rem);
`,u=i.default.div.withConfig({displayName:"MapElement"})`
  height: 100%;
  position: relative;
`,s=(0,o.withGoogleMap)(({children:e})=>n.default.createElement(n.default.Fragment,null,e));t.BaseMap=(({model:e,children:t})=>(0,a.useObserver)(()=>n.default.createElement(s,{containerElement:n.default.createElement(d,{className:"map__container","data-testid":"googleMap"}),mapElement:n.default.createElement(u,null)},n.default.createElement(o.GoogleMap,{ref:e.setMapRef,zoom:e.zoom,center:e.center,onCenterChanged:e.updatePosition,onZoomChanged:e.updateZoom,onClick:e.onClick,options:(()=>({streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1,zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_TOP}}))()},t))))},937:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormTextInput=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(894),i=r(151);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};t.FormTextInput=(e=>{var{field:t,validate:r,showFeedback:a=!1}=e,u=d(e,["field","validate","showFeedback"]);return n.default.createElement(o.Field,{field:t,validate:r,render:e=>n.default.createElement(n.default.Fragment,null,n.default.createElement(i.Input,l({},u,{value:e.value,onChange:t=>e.setValue(t.target.value),onBlur:()=>e.setTouched(!0),invalid:e.touched&&Boolean(e.error)})),a&&n.default.createElement(i.FormFeedback,null,e.error))})})},939:function(e,t,r){},940:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShopClosingTimeModal=void 0;var a,n=r(152),o=r(153),i=(a=r(1))&&a.__esModule?a:{default:a},l=r(919),d=r(52),u=r(899),s=r(82);t.ShopClosingTimeModal=(({status:e})=>{const{user:t}=(0,d.useRoot)(),{decision:r,openingIn:a}=(0,u.useShopStatus)({status:e,updateInterval:0});return(0,o.useObserver)(()=>i.default.createElement(l.AlertModal,{isOpen:("Closed"===r||"OpeningSoon"===r)&&!t.closingTimeAlertHidden,onClose:t.hideClosingTime,headerText:s.i18n._("We are closed right now")},s.i18n._("We're sorry, but we do not accept new orders at this time."),"OpeningSoon"===r&&i.default.createElement(n.Trans,{id:"You can prepare your order because we are {openingIn, plural, one {opening in 1 minute} other {opening in # minutes}} !",values:{openingIn:a}})))})},941:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShopHeaderIcons=void 0,r(1032);var a=u(r(1)),n=r(893),o=u(r(1034)),i=u(r(1035)),l=u(r(1036)),d=u(r(1037));function u(e){return e&&e.__esModule?e:{default:e}}t.ShopHeaderIcons=(()=>a.default.createElement(n.ColStyle,null,a.default.createElement("img",{src:l.default,className:"shop__header__icons__doveze","data-testid":"ShopHeaderIcons__AppLogo",alt:"logo Doveze.cz"}),a.default.createElement("img",{src:i.default,className:"shop__header__icons__commerce",alt:"MasterCard"}),a.default.createElement("img",{src:o.default,className:"shop__header__icons__commerce","data-testid":"ShopHeaderIcons__VisaLogo",alt:"VISA"}),a.default.createElement("img",{src:d.default,className:"shop__header__icons__gopay",alt:"GoPay","data-testid":"ShopHeaderIcons__GoPayLogo"})))},942:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatOpenTime=m,t.ShopStatusDisplay=t.StatusDisplayClosed=t.StatusDisplayOpen=void 0;var a=r(152),n=r(83),o=u(r(1)),i=u(r(65)),l=r(52),d=r(899);function u(e){return e&&e.__esModule?e:{default:e}}const s=i.default.span.withConfig({displayName:"StatusDisplayOpen"})`
  font-style: italic;
  color: #0f9849;
`;t.StatusDisplayOpen=s;const c=i.default.span.withConfig({displayName:"StatusDisplayClosed"})`
  font-style: italic;
  color: #b40000;
`;t.StatusDisplayClosed=c;function m(e){const t=new Date(e),r=new Date;let i={hour:"numeric",minute:"numeric"};return(0,n.isSameDay)(t,r)||(i=Object.assign({},i,{weekday:"long"})),o.default.createElement(a.DateFormat,{value:t,format:i})}t.ShopStatusDisplay=(({status:e,deliveryTime:t,pickupTime:r})=>{const{order:n}=(0,l.useRoot)(),{decision:i,openingIn:u,closingIn:f}=(0,d.useShopStatus)({status:e});if(!e)return null;if(!1===e.isOpen){if(!e.willOpenAt)return o.default.createElement(c,null,o.default.createElement(a.Trans,{id:"We are closed until further notice"}));const t=e.businessHours[0];if(t&&t.closedNote)return o.default.createElement(c,null,t.closedNote)}switch(i){case"Open":return o.default.createElement(s,{"data-testid":"statusDisplayOpen"},n.usingDeliveryOrderMethod?o.default.createElement(a.Trans,{id:"We are delivering in {deliveryTime} minutes",values:{deliveryTime:t}}):o.default.createElement(a.Trans,{id:"We can prepare your order in {pickupTime} minutes",values:{pickupTime:r}}));case"OpeningSoon":return o.default.createElement(c,null,o.default.createElement(a.Trans,{id:"{openingIn, plural, one {Opening in 1 minute} other {Opening in # minutes}}",values:{openingIn:u}}));case"ClosingSoon":return o.default.createElement(s,null,o.default.createElement(a.Trans,{id:"{closingIn, plural, one {Closing in 1 minute} other {Closing in # minutes}}",values:{closingIn:f}}));case"Closed":return o.default.createElement(c,null,e.willOpenAt?o.default.createElement(a.Trans,{id:"We will open at {0}",values:{0:m(e.willOpenAt)}}):o.default.createElement(a.Trans,{id:"Closed"}))}})},943:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FinishViewFooter=void 0;var a=r(152),n=s(r(1)),o=r(151),i=s(r(65)),l=r(334),d=r(156),u=r(82);function s(e){return e&&e.__esModule?e:{default:e}}const c=i.default.div.withConfig({displayName:"CenteredButtonContainer"})`
  text-align: center;
`;t.FinishViewFooter=(({finish:{androidApp:e,iosApp:t}})=>n.default.createElement(n.default.Fragment,null,n.default.createElement(d.Desktop,null,(e||t)&&n.default.createElement("div",{className:"finish__view__apps__propagation"},n.default.createElement("div",{className:"finish__view__apps__propagation__header"},n.default.createElement(a.Trans,{id:"What about mobile app?"})),n.default.createElement("div",{className:"finish__view__apps__propagation__description"},n.default.createElement(a.Trans,{id:"We have prepared mobile app, so you could order from anywhere!"})),e&&n.default.createElement("a",{href:e.url},n.default.createElement(o.Button,{className:"finish__view__apps__propagation__button",color:"secondary"},"Google Play")),t&&n.default.createElement("a",{href:t.url},n.default.createElement(o.Button,{className:"finish__view__apps__propagation__button",color:"secondary"},"App Store"))),n.default.createElement(c,null,n.default.createElement(l.PrimaryRoutedButton,{to:"/",className:"finish__view__submit__line__button","data-testid":"finishViewFooterBackButton"},u.i18n._("Back to home page").toLocaleUpperCase()))),n.default.createElement(d.Mobile,null,n.default.createElement("div",{className:"finish__view__submit__line",style:{textAlign:"center"}},n.default.createElement("div",{className:"finish__view__submit__line__strip"}),n.default.createElement(l.PrimaryRoutedButton,{to:"/",className:"finish__view__submit__line__button","data-testid":"finishViewFooterBackButton"},u.i18n._("Back to home page").toLocaleUpperCase())))))},944:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FinishViewLoader=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(921),i=r(1044);t.FinishViewLoader=(({render:e})=>n.default.createElement(o.WithOrder,{redirect:!0,render:t=>n.default.createElement(i.QueryFinishView,{variables:{branchId:t.branchId,orderId:t.orderId},render:t=>e(t)})}))},945:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FinishViewOrder=void 0;var a=r(152),n=u(r(1)),o=u(r(65)),i=r(158),l=r(157),d=r(82);function u(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const c=o.default.div.withConfig({displayName:"HeaderThemed"})`
  background-color: ${({theme:e})=>e.primary};
`,m=o.default.div.withConfig({displayName:"PriceThemed"})`
  background-color: ${({theme:e})=>e.primary};
`,f=o.default.div.withConfig({displayName:"PriceCornerThemed"})`
  border-top-color: ${({theme:e})=>e.primary} !important;
`;t.FinishViewOrder=(({order:e})=>n.default.createElement(n.default.Fragment,null,n.default.createElement(c,{className:"finish__view__header"},n.default.createElement("div",{className:"finish__view__header__inner"},n.default.createElement("span",{className:"flaticon-transport-1 finish__view__header__icon"}),n.default.createElement("h3",null,n.default.createElement(a.Trans,{id:"It's done! Thank you :-)"})))),n.default.createElement("h4",null,n.default.createElement(a.Trans,{id:"Your order was successfully accepted!"})," ",function({orderPayments:e}){return e.some(p(i.PaymentGateEnum.Cash))?d.i18n._("You will pay at pickup."):e.some(p(i.PaymentGateEnum.Gopay))?d.i18n._("You have payed."):null}(e)),n.default.createElement("div",{className:"finish__view__items"},n.default.createElement("div",{className:"finish__view__items__look__to"},n.default.createElement(a.Trans,{id:"You can look forward to:"})),e.items.map(e=>n.default.createElement(_,s({key:e.id},e))),n.default.createElement(f,{className:"finish__view__items__price__corner"}),n.default.createElement(m,{className:"finish__view__items__price"},function({orderPayments:e,totalSum:t}){return e.some(p(i.PaymentGateEnum.Cash))?d.i18n._("Total cost to be payed:"):e.some(p(i.PaymentGateEnum.Gopay))?d.i18n._("Total cost payed:"):null}(e)," ",n.default.createElement("b",null,e.totalSum.formattedValue)))));const p=l.RM.pathEq(["paymentMethod","paymentType","enum"]);function _({recipe:e,sideDishes:t}){return n.default.createElement("div",null,n.default.createElement("b",null,e.nameLabel),t.length?` + ${t.map(l.RM.path(["recipe","nameLabel"])).join(",")}`:null)}},946:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FinishViewSupport=void 0;var a=r(152),n=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const i=o(r(65)).default.a.withConfig({displayName:"PhoneNumberLinkStyled"})`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;t.FinishViewSupport=(({branch:e})=>n.default.createElement("div",{className:"finish__view__support"},n.default.createElement("h4",null,n.default.createElement(a.Trans,{id:"Any question? Do you have a problem? Call:"})),n.default.createElement("span",{className:"flaticon-technology finish__view__support__icon"}),n.default.createElement("span",{className:"finish__view__support__phone"},n.default.createElement(i,{href:`tel:${e.phone}`},e.phone))))},947:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMethod=void 0,r(1048);var a,n=r(339),o=(a=r(1))&&a.__esModule?a:{default:a},i=r(334),l=r(52),d=r(158),u=r(157),s=r(82);const c=({orderModel:e,orderMethod:t,onChange:r,onPrefetch:a,children:l})=>o.default.createElement(n.Observer,null,()=>o.default.createElement(i.SelectButtonThemed,{selected:e.orderMethod===t,onMouseEnter:a,onClick:()=>{e.useOrderMethod(t),r(e)},"data-testid":`orderMethod-${t}`,"data-testselected":e.orderMethod===t},l));t.OrderMethod=(({onChange:e})=>o.default.createElement(l.WithRoot,{observe:!1,render:({order:t})=>o.default.createElement("div",{className:"order__method"},o.default.createElement(c,{orderModel:t,orderMethod:d.DeliveryTypeEnum.Messenger,onChange:e||u.RM.identity},o.default.createElement("span",{className:"flaticon-transport"}),s.i18n._("I want to deliver").toLocaleUpperCase()),o.default.createElement(c,{orderModel:t,orderMethod:d.DeliveryTypeEnum.Pickup,onChange:e||u.RM.identity,onPrefetch:t.prefetchPickup},o.default.createElement("span",{className:"flaticon-restaurant"}),s.i18n._("I'll pick up").toLocaleUpperCase()))}))},987:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeliveryMap=void 0,r(1193);var a=r(5),n=r(153),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),i=r(161),l=r(901),d=r(52),u=r(162),s=r(1195),c=r(1201),m=r(1204),f=r(1205);var p=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function i(e){try{d(a.next(e))}catch(t){o(t)}}function l(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(i,l)}d((a=a.apply(e,t||[])).next())})};t.DeliveryMap=(({onConfirm:e})=>{const{business:t,order:r,location:_}=(0,d.useRoot)(),{data:v}=(0,i.useQuery)(m.InitialMapLocationQuery),h=(0,o.useCallback)(()=>p(void 0,void 0,void 0,function*(){_.branchId&&r.setBranch(_.branchId),yield r.createDeliveryOrder(),e()}),[e]);return(0,n.useDisposable)(()=>(0,a.when)(()=>t.isValid,_.validateUserLocation)),(0,n.useObserver)(()=>o.default.createElement(o.default.Fragment,null,o.default.createElement(f.DeliveryMapPanning,{initialLocation:v?v.initialLocation.gpsCoordinates:null}),_.latLng?o.default.createElement(l.Marker,{position:_.latLng,defaultDraggable:!0,onDragEnd:({latLng:e})=>{_.withUserLocation((0,u.latLngToGps)(e))}}):null,o.default.createElement("div",{className:"delivery__map__address"},o.default.createElement(s.AddressInput,null)),o.default.createElement("div",{className:"delivery__map__submit"},o.default.createElement(c.AddressSubmit,{enabled:_.isDeliveryAddress,onClick:h,onPrefetch:()=>{_.branchId&&r.prefetchFoodMenu(_.branchId)}}))))})},988:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(1202);var a,n=(a=r(1))&&a.__esModule?a:{default:a};var o=({children:e})=>n.default.createElement("div",{className:"button__stripe"},n.default.createElement("div",{className:"button__stripe__bar"}),n.default.createElement("div",{className:"button__stripe__button"},e));t.default=o},989:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MapPanning=void 0;var a=r(5),n=r(153);t.MapPanning=(({map:e,gps:t})=>((0,n.useDisposable)(()=>(0,a.autorun)(()=>{e.isReady&&t&&e.panToLocation(t)}),[t]),null))},990:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartView=void 0,r(1213);var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(161),i=r(991),l=r(1221),d=r(1229),u=r(166),s=r(1230),c=r(995);t.CartView=(({orderId:e})=>{const{data:t,refetch:r}=(0,o.useQuery)(u.CartViewQuery,{suspend:!1,skip:!e,variables:{orderId:e}});return(0,c.useCartRefresh)(r),n.default.createElement(n.default.Fragment,null,n.default.createElement(i.AddToCartModal,null),n.default.createElement(s.ChangeCartModal,null),t&&t.order&&0!==t.order.countWares?n.default.createElement(l.CartContents,{order:t.order}):n.default.createElement(d.CartIsEmpty,null))})},991:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AddToCartModal=void 0;var a,n=r(152),o=(a=r(1))&&a.__esModule?a:{default:a},i=r(159),l=r(151),d=r(156),u=r(52),s=r(160),c=r(343),m=r(992);const f=(0,s.buildQuery)(c.OrderCartForRecipeQuery);t.AddToCartModal=(()=>{const{order:e}=(0,u.useRoot)();return o.default.createElement(i.Route,{path:"/order/add/:recipeId",render:({match:t,history:r})=>o.default.createElement(f,{variables:{recipeId:t.params.recipeId},renderLoading:!1,renderError:()=>o.default.createElement(l.Alert,{color:"warning"},o.default.createElement(n.Trans,{id:"Error in loading cart item. Issue was reported."})),render:(a,{loading:n})=>o.default.createElement(d.Mobile,null,i=>o.default.createElement(m.CartModal,{recipe:a.recipe,onConfirm:r=>i?(e.addFromRecipeMobile(t.params.recipeId,r),Promise.resolve()):e.addFromRecipe(t.params.recipeId,r),onClose:()=>r.goBack(),isLoading:n}))})})})},992:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartModal=void 0;var a,n=r(152),o=r(5),i=(a=r(1))&&a.__esModule?a:{default:a},l=r(151);r(900);var d=r(1215),u=r(1220);var s=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function i(e){try{d(a.next(e))}catch(t){o(t)}}function l(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(i,l)}d((a=a.apply(e,t||[])).next())})};t.CartModal=(({recipe:e,initialSelection:t=[],onConfirm:r,onClose:a,isLoading:c})=>{const m=o.observable.array(t);return i.default.createElement(l.Modal,{isOpen:!0,toggle:a,className:"modal__container",autoFocus:!0,backdrop:"static",fade:!1},i.default.createElement(l.ModalHeader,{toggle:a,tag:l.Container,className:"modal__header"},i.default.createElement("span",null,i.default.createElement(n.Trans,{id:"Do you want to add something?"}))),i.default.createElement(l.ModalBody,{className:"modal__body"},i.default.createElement("div",{className:"modal__body__content"},c||!e?null:i.default.createElement(i.default.Fragment,null,i.default.createElement("h3",{className:"modal__body__food__name"},e.nameLabel),i.default.createElement("span",{className:"modal__body__food_description"},e.descriptionLabel),i.default.createElement(d.SidedishPicker,{recipe:e,selection:m,onToggle:e=>{m.includes(e)?m.remove(e):m.push(e)}}))),i.default.createElement("div",{className:"modal__body__button__line"},i.default.createElement("div",{className:"modal__body__button__strip"}),i.default.createElement(u.CartOrderButton,{selection:m,onConfirm:()=>s(void 0,void 0,void 0,function*(){yield r(Array.from(m)),a()}),enabled:!c}))))})},993:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PickerButton=void 0;var a=i(r(1)),n=r(151),o=i(r(65));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const u=(0,o.default)(e=>{var{isSelected:t,canBeSelected:r,width:o}=e,i=d(e,["isSelected","canBeSelected","width"]);return a.default.createElement(n.Button,i)}).withConfig({displayName:"PickerButtonStyled"})`
  border-radius: 0.6rem;
  margin: 0.5rem;
  background-color: ${e=>e.isSelected?e.theme.tertiary:"transparent"} !important;
  color: ${e=>e.isSelected?e.theme.tertiaryText:"initial"} !important;
  &:hover {
    border-color: ${({theme:e})=>e.tertiaryHover} !important;
  }
  width: ${e=>e.width};
  @media (max-width: 370px) {
    width: 100%;
  }
  &.btn-outline-secondary {
    color: #2e2e2e;
    border-color: #d4d4d4;
  }
  &.btn-outline-secondary.active {
    color: white;
  }
`;t.PickerButton=(e=>{var{isSelected:t,canBeSelected:r,onSelect:n,children:o}=e,i=d(e,["isSelected","canBeSelected","onSelect","children"]);return a.default.createElement(u,l({disabled:!r&&!t,isSelected:t},i),o)})},994:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartItemButton=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(65));const i=o.default.div.withConfig({displayName:"CartItemButtonStyled"})`
  display: inline-block;
  border-radius: 3rem;
  background: white;
  width: 1.8rem;
  height: 1.8rem;
  text-align: left;
  vertical-align: top;
  padding: 0 0 0 0rem;
  margin: 0.3rem 0.1rem 0 0.1rem;
  ${function({color:e,enabled:t}){const r=t?e:"#8d8d8d";return o.css`
    color: ${r};
    border: 2px solid ${r};
  `}};
  ${function({enabled:e}){return e?o.css`
        cursor: pointer;
        &:hover {
          background: #c9e8d7;
          color: #1d1d1d;
          border-color: #1d1d1d;
        }
      `:o.css`
        cursor: default;
      `}};
`;const l=o.default.span.withConfig({displayName:"CartItemButtonIcon"})`
  &:before {
    font-size: 0.8rem;
    margin-left: 0.36rem;
  }
`;t.CartItemButton=(({color:e,icon:t,onClick:r,enabled:a=!0,data_testid:o})=>n.default.createElement(i,{color:e,enabled:a,onClick:r,onDoubleClick:e=>e.preventDefault(),"data-testid":o},n.default.createElement(l,{icon:t,className:`flaticon-${t}`})))},995:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useCartRefresh=function(e){const{order:t}=(0,o.useRoot)();return(0,n.useDisposable)(()=>(0,a.reaction)(()=>t.shouldRefreshCart,()=>{t.setCartRefresh(!1),e()}))};var a=r(5),n=r(153),o=r(52)},996:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FoodMenuView=void 0;var a=r(153),n=s(r(1)),o=r(52),i=s(r(1231)),l=r(1241),d=r(171),u=r(1247);function s(e){return e&&e.__esModule?e:{default:e}}t.FoodMenuView=(()=>{const{order:e}=(0,o.useRoot)();return(0,a.useObserver)(()=>n.default.createElement(d.QueryFoodMenu,{skip:!e.branchId,variables:{branchId:e.branchId},render:({wareCategories:t})=>n.default.createElement(n.default.Fragment,null,n.default.createElement(u.OrderLimitModal,null),n.default.createElement(i.default,{categories:t}),n.default.createElement(d.QueryFoodMenuCartPresence,{variables:{orderId:e.orderId},renderLoading:!1,render:({order:r},{loading:a})=>n.default.createElement(l.FoodMenu,{categories:t,rootModel:e.root,inCart:function(e){return e?e.reduce((e,t)=>{const r=t.recipe.id;return e[r]||(e[r]=0),e[r]+=1,e},{}):{}}(r&&r.items),orderItemCount:r?r.items.length:0,shouldUpdate:Boolean(r&&!a)})}))}))})}}]);
//# sourceMappingURL=1.faeee22e.chunk.js.map