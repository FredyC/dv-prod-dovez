(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1000:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormStorageNotice=void 0;var a=r(149),n=r(335),o=c(r(1)),l=r(148),i=c(r(64)),d=r(153),u=r(52),s=r(1001);function c(e){return e&&e.__esModule?e:{default:e}}const m=(0,i.default)(l.Button).withConfig({displayName:"NoticeButton"})`
  font-size: 0.9rem;
  margin: 0.2rem 1rem;
  padding: 0.5em 1rem;
`,f=(0,i.default)(l.Alert).withConfig({displayName:"StorageNotice"})`
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
`;t.OrderFormStorageNotice=(e=>o.default.createElement(u.WithRoot,{render:e=>o.default.createElement(s.QueryOrderForm,{skip:!e.order.hasOrder||null!==e.user.rememberForm,variables:{orderId:e.order.orderId},renderLoading:()=>null,render:({order:t})=>o.default.createElement(n.Observer,null,()=>t.countWares>0&&null===e.user.rememberForm?o.default.createElement(f,{"data-testid":"orderFormStorageNotice"},o.default.createElement("p",null,o.default.createElement(a.Trans,{id:"This app is using secure storage for keeping filled form data. It's not cookies, these are stored in your browser only."})),o.default.createElement(m,{color:"success",size:"sm",onClick:e.user.setFormRememberYes,"data-testid":"orderFormStorageNotice__Yes"},o.default.createElement(a.Trans,{id:"Always remember"})),o.default.createElement(m,{color:"secondary",size:"sm",onClick:e.user.setFormRememberNo,"data-testid":"orderFormStorageNotice__No"},o.default.createElement(a.Trans,{id:"Do not store"}))):null)})}))},1001:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryOrderForm=t.OrderFormQuery=void 0;var a,n=(a=r(22))&&a.__esModule?a:{default:a},o=r(157);const l=n.default`
  query GOrderForm($orderId: ID!) {
    order(id: $orderId) {
      id
      countWares
    }
  }
`;t.OrderFormQuery=l;const i=(0,o.buildQuery)(l);t.QueryOrderForm=i},1002:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderErrorModal=void 0;var a,n=r(149),o=(a=r(1))&&a.__esModule?a:{default:a},l=r(148);r(916);var i=r(890);t.OrderErrorModal=(()=>o.default.createElement(i.WithOrder,{observe:!0,render:e=>o.default.createElement(l.Modal,{isOpen:e.hasErrors,toggle:e.clearErrors,className:"modal__container"},o.default.createElement(l.ModalHeader,{toggle:e.clearErrors,tag:l.Container,className:"modal__header"},o.default.createElement("span",null,o.default.createElement(n.Trans,{id:"Order can not be completed"}))),o.default.createElement(l.ModalBody,{className:"modal__body"},o.default.createElement("div",{className:"modal__body__content"},e.hasErrors&&e.submitErrors.map((e,t)=>o.default.createElement("div",{key:t},e))),o.default.createElement("div",{className:"modal__body__button__line"},o.default.createElement("div",{className:"modal__body__button__strip"}),o.default.createElement(l.Button,{className:"modal__body__button",color:"primary",onClick:e.clearErrors},o.default.createElement(n.Trans,{id:"I understand"})),"/>")))}))},1003:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderAgreements=void 0;var a,n=r(5),o=r(152),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),i=r(148),d=(a=r(64))&&a.__esModule?a:{default:a},u=r(1249),s=r(52),c=r(82);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const f=(0,d.default)(i.Button).withConfig({displayName:"ButtonStyled"})`
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
`;t.OrderAgreements=(()=>{const e=(0,l.useRef)(n.observable.array([])).current,t=(0,l.useCallback)(t=>()=>{e.includes(t)?e.remove(t):e.push(t)},[]),{order:r}=(0,s.useRoot)();return(0,o.useObserver)(()=>l.default.createElement(l.default.Fragment,null,r.agreements.map((r,a)=>l.default.createElement("div",m({key:r.id},(e=>e.isConfirmed?{style:{display:"none"}}:{})(r)),l.default.createElement(u.FormInputCheckbox,{field:["agreements",a,"isConfirmed"],validate:e=>!r.isMandatory||r.isConfirmed||e?null:"Agreement is mandatory","data-testid":`orderAgreement__Check__${r.id}`},l.default.createElement("span",{dangerouslySetInnerHTML:{__html:r.name}}),r.isMandatory&&" * ",r.description&&l.default.createElement(l.default.Fragment,null,l.default.createElement(f,{color:"link",onClick:t(r.id),"data-testid":`orderAgreement__MoreButton__${r.id}`},e.includes(r.id)?c.i18n._("Less").toLocaleLowerCase():c.i18n._("More...").toLocaleLowerCase()),l.default.createElement(i.Collapse,{isOpen:e.includes(r.id)},l.default.createElement(p,{"data-testid":`orderAgreement__Info__${r.id}`,dangerouslySetInnerHTML:{__html:r.description}}))))))))})},1011:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormInputs=void 0;var a=s(r(1)),n=r(1264),o=r(1265),l=r(1012),i=r(1266),d=s(r(1267)),u=r(1270);function s(e){return e&&e.__esModule?e:{default:e}}t.OrderFormInputs=(()=>a.default.createElement(a.default.Fragment,null,a.default.createElement(o.OrderNameInput,null),a.default.createElement(i.OrderPhoneInput,null),a.default.createElement(n.OrderEmailInput,null),a.default.createElement(l.OrderNoteInput,null),a.default.createElement(u.OrderTimeButtons,null),a.default.createElement(d.default,null)))},1012:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderNoteInput=t.MAX_LENGTH=void 0;var a,n=r(149),o=(a=r(1))&&a.__esModule?a:{default:a},l=r(894),i=r(148),d=r(82);t.MAX_LENGTH=50;const u=e=>e&&e.trim().length>50,s=e=>u(e)?d.i18n._("Note is too long"):null;t.OrderNoteInput=(()=>{const e=d.i18n._("eg. ingredients change, company...");return o.default.createElement(l.Field,{field:"note",validate:s,render:t=>o.default.createElement(i.FormGroup,null,o.default.createElement(i.Input,{type:"textarea",placeholder:d.i18n._("Note"),title:e,value:t.value,onChange:e=>t.setValue(e.target.value),onBlur:()=>t.setTouched(!0),valid:!t.error,invalid:Boolean(t.error),"data-testid":"orderNoteInput"}),o.default.createElement(i.FormText,null,e),u(t.value)?o.default.createElement(i.FormFeedback,null,o.default.createElement(n.Trans,{id:"Maximum length is {MAX_LENGTH, plural, other {# characters}}. Typed {0, plural, one {# char} other {# chars}}",values:{0:t.value.length,MAX_LENGTH:50}})):null)})})},1013:function(e,t,r){},1014:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormSetup=void 0;var a=r(338),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),o=r(894),l=r(30),i=r(148),d=r(154),u=r(20),s=r(155),c=r(32),m=r(1272);var f=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function l(e){try{d(a.next(e))}catch(t){o(t)}}function i(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(l,i)}d((a=a.apply(e,t||[])).next())})};t.OrderFormSetup=(({order:e,render:t})=>{(0,n.useEffect)(()=>{e.isVamInitialized&&e.initVam()},[]);const r=(0,n.useCallback)((t,r)=>f(void 0,void 0,void 0,function*(){try{yield e.updateVam(t.values),r.setValue("agreements",(a=t.values.agreements,e.agreements.map(e=>{const t=a.find(s.RM.propEq("id",e.id));return t?Object.assign({},e,{isConfirmed:t.isConfirmed}):e})))}catch(n){(0,c.reportError)(n,{formState:t.values})}var a}),[]),p=(0,a.useDebounceCallback)(r,1500);return n.default.createElement(l.Route,null,({history:r})=>n.default.createElement(o.Form,{defaultValues:function(e){return{firstname:e.firstname,lastname:e.lastname,email:e.email,phone:e.phone,phonePrefix:e.phonePrefix||e.defaultPhonePrefix,note:e.note,payment:d.PaymentGateEnum.Gopay,agreements:[]}}(e),validateOnMount:!0,onChange:p,onSubmit:t=>f(void 0,void 0,void 0,function*(){try{yield e.submitOrder(t),r.replace("/finish")}catch(a){(0,u.logOrder)(a)}})},e=>n.default.createElement(i.Form,{onSubmit:e.submitForm},n.default.createElement(m.OrderFormAutoFill,{onFill:t=>e.setAllValues(t)}),t(e))))})},1015:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderSubmitLine=void 0,r(1275);var a=u(r(1)),n=r(333),o=r(153),l=u(r(1016)),i=r(890),d=r(82);function u(e){return e&&e.__esModule?e:{default:e}}t.OrderSubmitLine=(({onClick:e,canSubmit:t=!1})=>a.default.createElement(i.WithOrder,{observe:!0,render:r=>a.default.createElement("div",{className:"order__form__submit__line"},a.default.createElement("div",{className:"order__form__submit__line__strip"}),a.default.createElement(n.PrimaryButton,{className:"order__form__submit__line__button",color:"primary",size:"md",onClick:e,disabled:!t||r.isSubmitting,"data-testid":"orderSubmitButton"},a.default.createElement(o.Desktop,null,r.isSubmitting?a.default.createElement(l.default,null):d.i18n._("Place order").toLocaleUpperCase()),a.default.createElement(o.Mobile,null,d.i18n._("Place order").toLocaleUpperCase())))}))},1016:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(1)),n=o(r(340));function o(e){return e&&e.__esModule?e:{default:e}}var l=(0,r(64).withTheme)(e=>a.default.createElement(n.default,{name:"three-bounce",color:e.theme.primary,fadeIn:"none"}));t.default=l},1017:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderGoPayModal=void 0;var a=r(149),n=r(335),o=u(r(1)),l=u(r(64)),i=r(930),d=u(r(65));function u(e){return e&&e.__esModule?e:{default:e}}const s=l.default.div.withConfig({displayName:"TextPadding"})`
  padding-bottom: 2rem;
`;t.OrderGoPayModal=(({order:e})=>o.default.createElement(n.Observer,null,()=>o.default.createElement(i.AlertModal,{isOpen:e.isGoPayChecking,headerText:"GoPay platba"},o.default.createElement(s,null,o.default.createElement(a.Trans,{id:"Checking your GoPay payment, please wait..."})),o.default.createElement(d.default,{noMargin:!0}))))},1018:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderTimePicker=void 0,r(916);var a=r(149),n=r(158),o=r(152),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),i=r(339),d=r(148),u=r(333),s=r(52),c=r(341),m=r(155),f=r(82),p=r(1277),_=r(1280);var h=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function l(e){try{d(a.next(e))}catch(t){o(t)}}function i(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(l,i)}d((a=a.apply(e,t||[])).next())})};const v=(0,o.observer)(()=>{const{order:e}=(0,s.useRoot)(),{data:t,loading:r}=(0,i.useQuery)(_.OrderTimePickerQuery,{variables:{branchId:e.branchId},suspend:!1,skip:!e.hasOrder}),o=(0,l.useRef)(e.deliverAt),v=e.usingDeliveryOrderMethod?f.i18n._("Deliver at what time?"):f.i18n._("When you will pickup the order?");return l.default.createElement(d.Modal,{isOpen:e.timePickerOpen,toggle:e.closeTimePicker,className:"modal__container",autoFocus:!0,backdrop:"static",fade:!1},l.default.createElement(d.ModalHeader,{toggle:e.closeTimePicker,tag:d.Container,className:"modal__header"},l.default.createElement("span",null,v)),l.default.createElement(d.ModalBody,{className:"modal__body"},l.default.createElement("div",{className:"modal__body__content"},(()=>{if(r||!t)return null;const i=(()=>{const{companyBranch:e}=t;if(e.isOpen&&e.willCloseAt)return new Date(e.willCloseAt);const r=m.RM.last(e.businessHours);return!r||r.closed?null:(0,n.parse)(r.closeAt,"HH:mm",new Date)})();return null===i?l.default.createElement(a.Trans,{id:"It's not possible to pick a specific order time at this moment."}):l.default.createElement(p.TimePicker,{minuteStep:15,minDate:(()=>{const{companyBranch:r}=t;let a=0;e.usingDeliveryOrderMethod&&(a=r.defaultDeliveryTime),e.usingPickupOrderMethod&&(a=r.defaultPickupTime);const o=r.isOpen||!r.willOpenAt?new Date:new Date(r.willOpenAt);return(0,n.addMinutes)(o,a)})(),maxDate:i,initialTime:o.current,filterIntervals:(()=>{const{companyBranch:e}=t,r=new Date;return e.businessHours.filter(m.RM.propEq("closed",!0)).map(e=>({start:(0,c.parseTime)(e.openAt,r),end:(0,c.parseTime)(e.closeAt,r)}))})(),onStepChange:e=>o.current=e})})()),l.default.createElement("div",{className:"modal__body__button__line"},l.default.createElement("div",{className:"modal__body__button__strip"}),l.default.createElement(u.PrimaryButton,{onClick:()=>h(void 0,void 0,void 0,function*(){e.setDeliverAt(o.current),e.closeTimePicker()}),size:"md",className:"modal__body__button"},f.i18n._("Confirm time").toLocaleUpperCase()))))});t.OrderTimePicker=v},1022:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryFinishView=t.FinishViewQuery=t.FinishViewOrderFragment=void 0;var a,n=(a=r(22))&&a.__esModule?a:{default:a},o=r(157),l=r(31);const i=n.default`
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
  ${l.CartItemFragment}
  ${l.PriceFragment}
`;t.FinishViewOrderFragment=i;const d=n.default`
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
  ${i}
`;t.FinishViewQuery=d;const u=(0,o.buildQuery)(d);t.QueryFinishView=u},1026:function(e,t,r){},1169:function(e,t,r){},1171:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AddressInput=void 0,r(1172);var a=r(149),n=r(152),o=f(r(1)),l=r(148),i=f(r(64)),d=r(52),u=r(82),s=f(r(1174)),c=f(r(1175)),m=f(r(1176));function f(e){return e&&e.__esModule?e:{default:e}}const p=i.default.div.withConfig({displayName:"AddressInputStyled"})`
  width: 90%;
  min-width: 14rem;
  margin: 1rem auto;
  text-align: center;
`,_=i.default.div.withConfig({displayName:"AddressInputBoxStyled"})`
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
`;t.AddressInput=(()=>{const{location:e}=(0,d.useRoot)();return(0,n.useObserver)(()=>o.default.createElement(p,null,o.default.createElement(_,null,o.default.createElement(l.InputGroup,{size:"sm"},o.default.createElement(c.default,{address:e.address||"",isVisible:e.hasAddress,isResolving:e.isResolving,onValidClick:e.clearAddress}),o.default.createElement(m.default,{inputProps:{placeholder:u.i18n._("Type address or choose it from map"),autoComplete:"shipping street-address"},onSearch:e.withUserAddress,isVisible:!e.hasAddress,isSearching:e.isResolving}),o.default.createElement(s.default,{onClick:e.attemptGeolocation,isVisible:e.isGeolocationAvailable&&!e.isResolving}))),e.hasFinishedSearch?function(e){return!1===e.isResolved?o.default.createElement(h,{color:"danger"},o.default.createElement(a.Trans,{id:"Address was not recognized."})):!1===e.isStreetAddress?o.default.createElement(h,{color:"warning"},o.default.createElement(a.Trans,{id:"Please enter address with house number."})):!1===e.inDeliveryLocation?o.default.createElement(h,{color:"warning"},o.default.createElement(a.Trans,{id:"Meal can't be delivered to your chosen address by any restaurant."})):null}(e):null))});const h=(0,i.default)(l.Alert).withConfig({displayName:"NoMouseAlert"})`
  pointer-events: none;
`},1172:function(e,t,r){},1174:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GeolocationButton=void 0;var a=o(r(1)),n=r(148);function o(e){return e&&e.__esModule?e:{default:e}}const l=o(r(64)).default.span.withConfig({displayName:"Container"})`
  color: ${({theme:e})=>e.secondary};
  cursor: pointer;
  position: absolute;
  right: 0.4rem;
  top: 0.15rem;
`,i=({onClick:e,isVisible:t=!1})=>t?a.default.createElement(l,null,a.default.createElement(n.InputGroupAddon,{addonType:"append",onClick:e},a.default.createElement("span",{className:"flaticon-gps"}))):null;t.GeolocationButton=i;var d=i;t.default=d},1175:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ResolvedAddress=void 0;var a=o(r(1)),n=o(r(340));function o(e){return e&&e.__esModule?e:{default:e}}const l=({address:e,isVisible:t,isResolving:r,onValidClick:o})=>r?a.default.createElement("div",{className:"address__input__box__resolved wait"},a.default.createElement(n.default,{name:"ball-beat",fadeIn:"none"})):t?a.default.createElement("div",{className:"address__input__box__resolved",onClick:o},e):null;t.ResolvedAddress=l;var i=l;t.default=i},1176:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(r(4)),n=i(r(348)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),l=r(148);function i(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var u=class extends o.Component{constructor(){super(...arguments),this.state={value:""},this.onSearch=(0,n.default)(this.props.onSearch,2e3),this.onChange=(e=>{const t=e.target.value||"";this.setState({value:t}),this.onSearch(t.trim())}),this.onKeyPress=(e=>{"Enter"===e.key&&(this.onSearch.clear(),this.props.onSearch(this.state.value.trim()))}),this.inputRef=null,this.onInputMount=(e=>{this.inputRef=e})}componentDidMount(){this.setFocus()}componentDidUpdate(e){e.isVisible!==this.props.isVisible&&this.setFocus()}isVisible(){return!1!==this.props.isVisible}isSearching(){return!1!==this.props.isSearching}setFocus(){this.isVisible()&&null!==this.inputRef&&this.inputRef.focus()}render(){const{inputProps:e}=this.props,t=!this.isVisible()||this.isSearching();return o.default.createElement(l.Input,d({className:(0,a.default)({address__input__hidden:t}),onChange:this.onChange,onKeyPress:this.onKeyPress,value:this.state.value,innerRef:this.onInputMount,autoFocus:!0},e))}};t.default=u},1177:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AddressSubmit=void 0;var a=i(r(1)),n=r(333),o=i(r(984)),l=r(82);function i(e){return e&&e.__esModule?e:{default:e}}const d=({enabled:e,onClick:t,onPrefetch:r})=>a.default.createElement(o.default,null,a.default.createElement(n.PrimaryButton,{color:"primary",disabled:!e,onClick:t,onMouseEnter:()=>e&&r()},l.i18n._("Confirm address").toLocaleUpperCase()));t.AddressSubmit=d;var u=d;t.default=u},1178:function(e,t,r){},1180:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.InitialMapLocationQuery=void 0;const n=((a=r(22))&&a.__esModule?a:{default:a}).default`
  query GInitialLocation {
    initialLocation: resolveLocation {
      gpsCoordinates {
        latitude
        longitude
      }
    }
  }
`;t.InitialMapLocationQuery=n},1181:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeliveryMapPanning=void 0;var a,n=r(338),o=r(5),l=r(152),i=(a=r(1))&&a.__esModule?a:{default:a},d=r(52),u=r(20),s=r(985);t.DeliveryMapPanning=(({initialLocation:e})=>{const{location:t,map:r}=(0,d.useRoot)();(0,l.useDisposable)(()=>(0,o.reaction)(()=>r.clickPoint,e=>{e&&(t.withUserLocation(e),r.clearClickPoint())}));const a=(0,n.useFullComputed)(()=>t.geoPoint?((0,u.logMap)("pan to user location",t.geoPoint),t.geoPoint):t.geolocationPoint?((0,u.logMap)("pan to geolocation",t.geolocationPoint),t.geolocationPoint):e?((0,u.logMap)("pan to initial location",e),e):void(0,u.logMap)("no pan location available"),[e]);return(0,l.useObserver)(()=>i.default.createElement(s.MapPanning,{gps:a.get(),map:r}))})},1193:function(e,t,r){},1195:function(e,t,r){e.exports=r.p+"static/media/logo-commerce-01.6d4e5108.svg"},1196:function(e,t,r){e.exports=r.p+"static/media/logo-commerce-02.8afb6c6f.svg"},1197:function(e,t,r){e.exports=r.p+"static/media/logo-doveze.e13c0122.svg"},1198:function(e,t,r){e.exports=r.p+"static/media/logo-gopay.48aa4030.png"},1207:function(e,t,r){},1209:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SidedishPicker=void 0,r(1210);var a,n=r(335),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),l=(a=r(1212))&&a.__esModule?a:{default:a},i=r(1213);t.SidedishPicker=(({recipe:e,selection:t,onToggle:r})=>o.default.createElement(n.Observer,null,()=>o.default.createElement("div",{className:"food__sidedish__picker"},e.categories.map(e=>o.default.createElement(o.Fragment,{key:e.id},o.default.createElement("div",{className:"food__sidedish__picker__category"},e.nameLabel," ",o.default.createElement(l.default,{minCount:e.minCount,maxCount:e.maxCount})),e.sideDishes.map(a=>o.default.createElement(i.SidedishCheckbox,{key:`${a.id}-${e.id}`,sidedish:a,isSelected:t.includes(a.id),canBeSelected:!0,onClick:()=>r(a.id)})))))))},1210:function(e,t,r){},1212:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a};var o=({minCount:e,maxCount:t})=>{return n.default.createElement("span",null,"")};t.default=o},1213:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SidedishCheckbox=void 0;var a=l(r(1)),n=l(r(64)),o=r(992);function l(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const u=n.default.div.withConfig({displayName:"Name"})`
  float: left;
`,s=n.default.div.withConfig({displayName:"Price"})`
  font-weight: bold;
  float: right;
`;t.SidedishCheckbox=(e=>{var{sidedish:t}=e,r=d(e,["sidedish"]);return a.default.createElement(o.PickerButton,i({size:"xs",outline:!0,width:"17.5rem","data-testid":`sidedishCheckbox__${t.id}`},r),a.default.createElement(u,null,t.nameLabel),a.default.createElement(s,null,t.price.formattedValue))})},1214:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartOrderButton=void 0;var a,n=r(5),o=r(335),l=(a=r(1))&&a.__esModule?a:{default:a},i=r(333),d=r(82);var u=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function l(e){try{d(a.next(e))}catch(t){o(t)}}function i(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(l,i)}d((a=a.apply(e,t||[])).next())})};t.CartOrderButton=(({selection:e,onConfirm:t})=>{const r=n.observable.box(!1);return l.default.createElement(o.Observer,null,()=>l.default.createElement(i.PrimaryButton,{className:"modal__body__button",disabled:r.get(),"data-testid":"cartOrderButton",onClick:()=>u(void 0,void 0,void 0,function*(){r.set(!0),yield t(),r.set(!1)})},d.i18n._("{0, plural, =0 {Order without sidedish} one {Order with this sidedish} other {Order with # sidedishes}}",{0:e.length}).toLocaleUpperCase()))})},1215:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartContents=void 0;var a,n=r(335),o=(a=r(1))&&a.__esModule?a:{default:a},l=r(1216),i=r(1217),d=r(1222);t.CartContents=(({order:e,rootModel:t})=>o.default.createElement("div",{className:"cart__items__container"},o.default.createElement("div",{className:"cart__items__container__content"},o.default.createElement(n.Observer,null,()=>e.items.map(e=>o.default.createElement(i.CartItem,{key:e.id,item:e,isActive:t.order.lastActiveRecipeId===e.recipe.id,onEdit:()=>t.order.setUsedRecipeId(e.recipe.id)}))),o.default.createElement(l.CartDiscounts,{order:e}),o.default.createElement(d.CartTotals,{order:e}))))},1216:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartDiscounts=void 0;var a,n=r(149),o=(a=r(1))&&a.__esModule?a:{default:a};t.CartDiscounts=(({order:e})=>e.discounts&&e.discounts.length>0?o.default.createElement("div",null,e.discounts.map(({code:e,description:t,price:{formattedValue:r}})=>o.default.createElement("div",{key:e,className:"cart__item__summary"},o.default.createElement("div",{className:"cart__item__summary__label"},t),o.default.createElement("div",{className:"cart__item__summary__price"},r))),o.default.createElement("div",{className:"cart__item__summary"},o.default.createElement("div",{className:"cart__item__summary__label"},o.default.createElement(n.Trans,{id:"Total discount"})),o.default.createElement("div",{className:"cart__item__summary__price"},e.totalDiscount.formattedValue))):null)},1217:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartItem=void 0,r(1218);var a=u(r(1)),n=u(r(64)),o=r(153),l=r(82),i=r(1220),d=r(1221);function u(e){return e&&e.__esModule?e:{default:e}}const s=n.default.div.withConfig({displayName:"EditButtonsContainerStyled"})`
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
`;t.CartItem=(({item:e,isActive:t,onEdit:r})=>a.default.createElement(c,{isActive:t},a.default.createElement(s,null,a.default.createElement(d.RemoveCartItemButton,{itemId:e.id,enabled:!e.automatic}),a.default.createElement(o.Desktop,null,a.default.createElement(i.EditCartItemButton,{itemId:e.id,enabled:0!==e.recipe.sideDishCount&&!e.automatic,onClick:r}))),a.default.createElement("div",{className:"cart__item__description"},a.default.createElement("div",{className:"cart__item__item__name","data-testid":`cardItem__Name__${e.recipe.id}`},e.recipe.nameLabel),a.default.createElement("div",{className:"cart__item__item__side__dish","data-testid":`cardItem__SideDish__${e.recipe.id}`},e.sideDishes.length>0?`+ ${e.sideDishes.map(({recipe:e})=>e.nameLabel).join(",")}`:e.recipe.sideDishCount>0&&a.default.createElement("span",null,l.i18n._("Without sidedish").toLocaleLowerCase()))),a.default.createElement("div",{className:"cart__item__item__price","data-testid":`cardItem__Price__${e.id}`},e.automatic?l.i18n._("For free"):e.price.formattedValue)))},1218:function(e,t,r){},1220:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EditCartItemButton=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(156),l=r(993);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};t.EditCartItemButton=(e=>{var{itemId:t,onClick:r}=e,a=d(e,["itemId","onClick"]);const u=n.default.createElement(l.CartItemButton,i({icon:"edit",color:"#d9a700"},a));return a.enabled?n.default.createElement(o.Link,{to:`/order/change/${t}`,onClick:r,"data-testid":`editCartItemButton__${t}`},u):u})},1221:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RemoveCartItemButton=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(52),l=r(993);t.RemoveCartItemButton=(({itemId:e,enabled:t})=>n.default.createElement(o.WithRoot,{render:r=>n.default.createElement(l.CartItemButton,{icon:"delete",color:"#99230e",enabled:t,data_testid:"removeCartItemButton",onClick:()=>r.order.removeItemFromCart(e)})}))},1222:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartTotals=void 0;var a=i(r(349)),n=i(r(1)),o=i(r(64)),l=r(82);function i(e){return e&&e.__esModule?e:{default:e}}const d=o.default.div.withConfig({displayName:"CartItemSummaryTotalThemed"})`
  background: ${({theme:e})=>(0,a.default)(e.primary).alpha(.7).hsl().string()} !important;
`;t.CartTotals=(({order:e})=>n.default.createElement("div",null,e.coverPrice&&e.coverPrice.value?n.default.createElement("div",{key:"casePrice",className:"cart__item__summary"},n.default.createElement("div",{className:"cart__item__summary__label"},l.i18n._("Covers")),n.default.createElement("div",{className:"cart__item__summary__price"},e.coverPrice.formattedValue)):null,e.transportFee&&e.transportFee.value?n.default.createElement("div",{key:"transportFee",className:"cart__item__summary"},n.default.createElement("div",{className:"cart__item__summary__label"},l.i18n._("Delivery")),n.default.createElement("div",{className:"cart__item__summary__price"},e.transportFee.formattedValue)):null,n.default.createElement(d,{key:"totalPrice",className:"cart__item__summary cart__item__summary__total"},n.default.createElement("div",{className:"cart__item__summary__label"},l.i18n._("Total")),n.default.createElement("div",{className:"cart__item__summary__price","data-testid":"cardItemSummary__Price"},e.totalSum.formattedValue))))},1223:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartIsEmpty=void 0;var a=l(r(1)),n=l(r(64)),o=r(82);function l(e){return e&&e.__esModule?e:{default:e}}const i=n.default.span.withConfig({displayName:"CartIsEmptyThemed"})`
  color: ${({theme:e})=>e.secondary};
`;t.CartIsEmpty=(()=>a.default.createElement(i,{className:"cart__column__cart__empty__label","data-testid":"cartIsEmpty"},`${o.i18n._("Cart is empty")}...`))},1224:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChangeCartModal=void 0;var a,n=r(149),o=(a=r(1))&&a.__esModule?a:{default:a},l=r(156),i=r(148),d=r(157),u=r(155),s=r(343),c=r(991);const m=(0,d.buildQuery)(s.OrderCartForItemQuery);t.ChangeCartModal=(({root:e})=>o.default.createElement(l.Route,{path:"/order/change/:itemId",render:({match:t,history:r})=>o.default.createElement(m,{variables:{itemId:t.params.itemId},renderLoading:!1,renderError:()=>o.default.createElement(i.Alert,{color:"warning"},o.default.createElement(n.Trans,{id:"Error in loading cart item. Issue was reported."})),render:(a,{loading:n})=>o.default.createElement(c.CartModal,{recipe:a.item&&a.item.recipe,initialSelection:a.item?a.item.sideDishes.map(u.RM.path(["recipe","id"])):[],onConfirm:r=>e.order.updateItem(t.params.itemId,r),onClose:()=>r.goBack(),isLoading:n})})}))},1225:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.CategoryNavigator=void 0,r(1226);var a=s(r(4)),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),o=s(r(995)),l=s(r(1235)),i=s(r(999)),d=r(1237),u=r(153);function s(e){return e&&e.__esModule?e:{default:e}}class c extends n.Component{constructor(){super(...arguments),this.state={scroll:0},this.ref=null,this.onMounted=(e=>{this.ref=e}),this.onSwiping=((e,t)=>this.ref.scrollLeft+=t/5),this.onSwiped=(()=>this.setState({scroll:this.ref.scrollLeft}))}render(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(u.Desktop,null,e=>e?n.default.createElement("div",{className:"category__navigator"},this.props.children):null),n.default.createElement(u.Mobile,null,n.default.createElement(l.default,{className:"category__navigator category__navigator__nowrap",onSwiping:this.onSwiping,onSwiped:this.onSwiped,innerRef:this.onMounted},this.props.children)))}}const m=({categories:e,setActiveCategoryIndex:t,activeCategoryIndex:r})=>n.default.createElement(c,null,0===e.length?null:e.map((e,l)=>n.default.createElement(o.default.Link,{to:e.nameLabel,key:e.id,className:(0,a.default)("category__navigator__scroll__link",{active:r===l}),onSetActive:()=>t(l),offset:-168,smooth:!0,spy:!0,"data-testid":`categoryNavigatorScrollLink__${e.id}`},n.default.createElement("div",{className:"category__navigator__scroll__link__circle"},n.default.createElement("span",{className:`flaticon-${e.pictogram}`})),n.default.createElement("div",{className:"category__navigator__scroll__link__description"},n.default.createElement(i.default,{lines:2},e.nameLabel)))));t.CategoryNavigator=m;var f=(0,d.compose)((0,d.withState)("activeCategoryIndex","setActiveCategoryIndex",0))(m);t.default=f},1226:function(e,t,r){},1238:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FoodMenu=void 0;var a=r(149),n=r(335),o=s(r(1)),l=s(r(64)),i=r(153),d=s(r(1239)),u=s(r(1240));function s(e){return e&&e.__esModule?e:{default:e}}const c=l.default.div.withConfig({displayName:"FoodMenuStyled"})`
  border-radius: 0 0 0.6rem 0.6rem;
  ${i.mediaDesktop`background: white;`};
  ${i.mediaMobile`
    background: #eee9e7;
    background-size: cover;
    background-attachment: scroll;
  `};
`,m=l.default.div.withConfig({displayName:"FoodMenuListStyled"})`
  ${i.mediaDesktop`
    margin: 0 1.4rem 1rem 1.6rem;
    padding: 2rem 0 2rem 0;
  `};
  ${i.mediaMobile`
    margin: 0 0.7rem 1rem 0.7rem;
    padding: 0 0 4rem 0;
  `};
`;t.FoodMenu=class extends o.default.Component{shouldComponentUpdate({shouldUpdate:e}){return e}orderLimitReached(){const{orderItemCount:e,rootModel:{config:t}}=this.props;return e>=t.orderItemsMax}render(){const{categories:e,inCart:t,rootModel:{order:r,user:l}}=this.props,i=!this.orderLimitReached();return o.default.createElement(c,null,o.default.createElement(m,null,0===e.length?o.default.createElement("h3",null,o.default.createElement(a.Trans,{id:"Food menu is empty. We are sorry."})):o.default.createElement(n.Observer,null,()=>e.map(e=>o.default.createElement(d.default,{key:e.id,category:e},e.recipes.map(e=>o.default.createElement(u.default,{key:e.id,recipe:e,inCart:t[e.id]||0,isActive:r.lastActiveRecipeId===e.id,canAddToCart:i,onClick:()=>{i?r.setUsedRecipeId(e.id):l.showOrderLimit()},onPrefetch:()=>{e.sideDishCount>0&&r.prefetchFood(e.id)}})))))))}}},1239:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(r(1)),n=i(r(995)),o=i(r(64)),l=r(153);function i(e){return e&&e.__esModule?e:{default:e}}const d=o.default.div.withConfig({displayName:"FoodCategoryStyled"})`
  color: #474747;
  display: block;
  font-size: 1.6rem;
  & a {
    text-decoration: none;
  }
`,u=(0,o.default)("h3").withConfig({displayName:"FoodCategoryTitleStyled"})`
  ${l.mediaMobile`margin: 1rem 0 0.4rem 1rem;`};
`;var s=({category:e,children:t})=>a.default.createElement(n.default.Element,{name:e.nameLabel},a.default.createElement(d,null,a.default.createElement(u,null,e.nameLabel),t));t.default=s},1240:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(1241);var a=d(r(1)),n=d(r(999)),o=d(r(64)),l=r(153),i=r(1243);function d(e){return e&&e.__esModule?e:{default:e}}const u=o.default.div.withConfig({displayName:"FoodMenuItemStyled"})`
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
  ${l.mediaMobile`
    left: -0.6rem;
    top: -0.7rem;
  `};
`;var p=({recipe:e,inCart:t,onPrefetch:r,isActive:o,onClick:l,canAddToCart:d})=>a.default.createElement(i.LinkToCart,{recipeId:e.id,hasSidedish:e.sideDishCount>0,canAddToCart:d,onClick:l,"data-testid":`foodMenuItem__${e.id}`},a.default.createElement(u,{onMouseEnter:r,isActive:o},e.image&&a.default.createElement(s,{src:e.image,alt:e.nameLabel}),a.default.createElement(c,null),a.default.createElement(m,{"data-testid":`foodMenuItem__Price__${e.id}`},e.price.formattedValue),t>0?a.default.createElement(f,null,`${t}x`):"",a.default.createElement("h4",null,a.default.createElement(n.default,{lines:2,"data-testid":`foodMenuItem__Name__${e.id}`},e.nameLabel)),a.default.createElement("p",null,a.default.createElement(n.default,{lines:2,"data-testid":`foodMenuItem__Description__${e.id}`},e.descriptionLabel))));t.default=p},1241:function(e,t,r){},1243:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LinkToCart=void 0;var a=d(r(1)),n=r(156),o=d(r(64)),l=r(52),i=r(153);function d(e){return e&&e.__esModule?e:{default:e}}const u=(0,o.default)(n.Link).withConfig({displayName:"LinkStyled"})`
  color: inherit;
  &:visited div {
    border: inherit;
  }
`;t.LinkToCart=(({recipeId:e,hasSidedish:t,canAddToCart:r,onClick:n,children:o})=>r?t?a.default.createElement(u,{to:{pathname:`/order/add/${e}`},onClick:n},o):a.default.createElement(l.WithRoot,{render:({order:t})=>a.default.createElement(i.Mobile,null,r=>a.default.createElement("div",{onClick:()=>{n(),r?t.addFromRecipeMobile(e):t.addFromRecipe(e)}},o))}):a.default.createElement("div",{onClick:n},o))},1244:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderLimitModal=void 0;var a,n=r(152),o=(a=r(1))&&a.__esModule?a:{default:a},l=r(930),i=r(52),d=r(82);t.OrderLimitModal=(()=>{const{user:e}=(0,i.useRoot)();return(0,n.useObserver)(()=>o.default.createElement(l.AlertModal,{isOpen:!e.orderLimitAlertHidden,onClose:e.hideOrderLimit,headerText:d.i18n._("Limit has been reached")},d.i18n._("The maximum number of items in the order has been reached")))})},1249:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormInputCheckbox=void 0;var a=i(r(1)),n=r(894),o=r(148),l=i(r(64));function i(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const s=l.default.div.withConfig({displayName:"CheckboxContainerStyled"})`
  display: flex;
  margin-bottom: 0.5rem;
`,c=(0,l.default)(o.Input).withConfig({displayName:"CheckboxStyled"})`
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
`,m=l.default.div.withConfig({displayName:"LabelStyled"})`
  margin: 0 0 0 0.8rem;
  vertical-align: top;
`;t.FormInputCheckbox=(e=>{var{field:t,defaultValue:r=!1,validate:o,children:l}=e,i=u(e,["field","defaultValue","validate","children"]);return a.default.createElement(n.Field,{field:t,defaultValue:r,validate:o},e=>a.default.createElement(s,null,a.default.createElement(c,d({type:"checkbox",value:e.value,onChange:t=>e.setValue(t.target.checked),invalid:e.touched&&Boolean(e.error)},i)),a.default.createElement(m,null,l)))})},1264:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderEmailInput=t.OrderEmailInputValidator=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(148),l=r(936),i=r(82);const d=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,u=e=>{const t=e.trim();return""===t?i.i18n._("E-mail is mandatory"):d.test(t)?null:i.i18n._("E-mail format is not valid")};t.OrderEmailInputValidator=u;t.OrderEmailInput=(()=>n.default.createElement(o.FormGroup,null,n.default.createElement(l.FormTextInput,{field:"email",type:"email",autoComplete:"email",placeholder:"E-mail",showFeedback:!0,validate:u,"data-testid":"orderEmailInput"})))},1265:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderNameInput=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(148),l=r(936),i=r(82);t.OrderNameInput=(()=>n.default.createElement(o.FormGroup,null,n.default.createElement(o.InputGroup,null,n.default.createElement(l.FormTextInput,{field:"firstname",autoComplete:"given-name",placeholder:i.i18n._("First name"),validate:e=>""===e.trim()?i.i18n._("First name is mandatory"):null,"data-testid":"orderNameInput__FirstName"}),n.default.createElement(l.FormTextInput,{field:"lastname",autoComplete:"family-name",placeholder:i.i18n._("Last name"),validate:e=>""===e.trim()?i.i18n._("Last name is mandatory"):null,"data-testid":"orderNameInput__LastName"}))))},1266:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderPhoneInput=t.OrderPhonePrefixInputValidator=t.OrderPhoneInputValidator=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(148),l=r(936),i=r(82);const d=e=>""===e.trim()?i.i18n._("Phone is mandatory"):null;t.OrderPhoneInputValidator=d;const u=e=>""===e.trim()?i.i18n._("Phone prefix is mandatory"):null;t.OrderPhonePrefixInputValidator=u;t.OrderPhoneInput=(()=>n.default.createElement(o.FormGroup,null,n.default.createElement(o.InputGroup,null,n.default.createElement(l.FormTextInput,{field:"phonePrefix",autoComplete:"tel-country-code",placeholder:"+",validate:u}),n.default.createElement(l.FormTextInput,{field:"phone",type:"tel",autoComplete:"tel-national",placeholder:i.i18n._("Phone"),validate:d,style:{width:"55%"},"data-testid":"orderPhoneInput__Phone"}))))},1267:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderPromoInputUI=h,t.default=void 0;var a,n=r(338),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),l=r(339),i=r(148),d=(a=r(64))&&a.__esModule?a:{default:a},u=r(333),s=r(52),c=r(1268),m=r(82),f=r(1269);var p=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function l(e){try{d(a.next(e))}catch(t){o(t)}}function i(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(l,i)}d((a=a.apply(e,t||[])).next())})};const _=d.default.div.withConfig({displayName:"CodesPanel"})`
  margin-top: 0.5rem;
  & button {
    margin-right: 0.5rem;
    font-size: 0.7rem;
  }
`;function h({codes:e,onCodeAdd:t,onCodeRemove:r,autoSubmitAfterTimeout:a=2e3}){const l=(0,o.useRef)(null),[d,s]=(0,o.useState)(!1),c=(0,o.useCallback)(()=>{if(l.current&&!l.current.disabled){const e=l.current.value.trim();e.length>0&&(s(!0),l.current.disabled=!0,l.current.value=m.i18n._("Validating promo code {code}...",{code:e}),t(e).then(()=>{s(!1),l.current&&(l.current.value="")}).catch(()=>{l.current&&(l.current.value=e)}).finally(()=>{s(!1),l.current&&(l.current.disabled=!1,l.current.focus())}))}},[t]),f=(0,n.useDebounceCallback)(c,a),p=(0,o.useCallback)(e=>{"Enter"===e.key&&(c(),e.preventDefault())},[]);return o.default.createElement(i.FormGroup,null,o.default.createElement(i.InputGroup,null,o.default.createElement(i.Input,{innerRef:l,autoComplete:"off",disabled:d,placeholder:m.i18n._("Promo codes"),onChange:f,onKeyDown:p,onBlur:c,onPaste:c})),o.default.createElement(_,null,e.map(({id:e,code:t})=>o.default.createElement(u.SecondaryButton,{key:e,onClick:()=>r(e)},`${t} \u2716`))))}var v=()=>{const{order:e}=(0,s.useRoot)(),{data:t}=(0,l.useQuery)(f.OrderPromoCodesQuery,{suspend:!1,variables:{orderId:e.orderId}}),r=(0,c.useGuardedMutation)(f.AddOrderPromoMutation,{refetchQueries:["GCartView"]}),a=(0,o.useCallback)(t=>p(void 0,void 0,void 0,function*(){if(!e.orderId)return;const a=yield r({orderId:e.orderId,code:t});a&&a.addOrderPromoCode.userErrors.length&&e.submitFailed(a.addOrderPromoCode.userErrors)}),[]),n=(0,c.useGuardedMutation)(f.RemoveOrderPromoMutation,{refetchQueries:["GCartView"]});return o.default.createElement(h,{codes:t&&t.order?t.order.promoCodes:[],onCodeAdd:a,onCodeRemove:t=>{e.orderId&&n({codeId:t,orderId:e.orderId})}})};t.default=v},1268:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useGuardedMutation=function(e,t={}){const r=i.i18n._("Unexpected error occured while sending a request. Our team was notified about the issue."),u=(0,a.useCallback)(e=>{const t=e.filter(o.RM.propEq("showToUser",!0));0===t.length?window.alert(r):window.alert(t.map(o.RM.prop("message")).join("\n"))},[]),s=(0,a.useCallback)(e=>{if(function(e){return e.hasOwnProperty("graphQLErrors")}(e)){if(e.networkError)return void window.alert(i.i18n._("Communication with server has failed. Please retry the operation in a moment again."));if(e.graphQLErrors)return void u(e.graphQLErrors)}(0,l.reportError)(e)},[]),c=(0,n.useMutation)(e,t);return e=>d(this,void 0,void 0,function*(){try{const r=yield c({variables:e});return r.errors?(u(r.errors),null):r.data?r.data:null}catch(t){return s(t),null}})};var a=r(1),n=r(339),o=r(155),l=r(32),i=r(82),d=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function l(e){try{d(a.next(e))}catch(t){o(t)}}function i(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(l,i)}d((a=a.apply(e,t||[])).next())})}},1269:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RemoveOrderPromoMutation=t.AddOrderPromoMutation=t.OrderPromoCodesQuery=void 0;var a,n=(a=r(22))&&a.__esModule?a:{default:a},o=r(31);const l=n.default`
  query GOrderPromoCodes($orderId: ID!) {
    order(id: $orderId) {
      id
      promoCodes {
        ...GPromoCode
      }
    }
  }
  ${o.PromoCodeFragment}
`;t.OrderPromoCodesQuery=l;const i=n.default`
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
`;t.AddOrderPromoMutation=i;const d=n.default`
  mutation MRemoveOrderPromo($orderId: ID!, $codeId: ID!) {
    removeOrderPromoCode(order: $orderId, promoCode: $codeId) {
      id
      promoCodes {
        ...GPromoCode
      }
    }
  }
  ${o.PromoCodeFragment}
`;t.RemoveOrderPromoMutation=d},1270:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderTimeButtons=void 0,r(1013);var a,n=r(149),o=r(152),l=(a=r(1))&&a.__esModule?a:{default:a},i=r(333),d=r(52),u=r(82);t.OrderTimeButtons=(()=>{const{order:e}=(0,d.useRoot)();return(0,o.useObserver)(()=>l.default.createElement("div",{className:"order__payment__method"},l.default.createElement(i.SelectButtonThemed,{"data-testid":"orderTimeButtonNow",selected:void 0===e.deliverAt,onClick:()=>e.setDeliverAt(void 0)},u.i18n._("When possible")),l.default.createElement(i.SelectButtonThemed,{"data-testid":"orderTimeButtonLater",selected:void 0!==e.deliverAt,onClick:e.openTimePicker},e.deliverAt?l.default.createElement(n.Trans,{id:"at {0,date,date0}",values:{0:e.deliverAt},formats:{date0:{weekday:"long",hour:"numeric",minute:"numeric"}}}):u.i18n._("Choose time"))))})},1272:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormAutoFill=void 0;var a;(a=r(1))&&a.__esModule,r(333),r(154),r(1012);t.OrderFormAutoFill=(({onFill:e})=>null)},1275:function(e,t,r){},1277:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TimePicker=void 0;var a,n=r(149),o=r(338),l=r(158),i=r(164),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),u=(a=r(64))&&a.__esModule?a:{default:a},s=r(1278),c=r(1279);const m=u.default.div.withConfig({displayName:"TimePickerContainer"})`
  margin-top: 1rem;
`,f=u.default.div.withConfig({displayName:"TimePickerDay"})`
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  margin: 0 0 0.2rem 0.2rem;
`;t.TimePicker=(({minDate:e,maxDate:t,minuteStep:r,onStepChange:a,initialTime:u,filterIntervals:p=[]})=>{const _=(0,d.useMemo)(()=>{const a=(0,s.createTimeSteps)(e,t,r);return p.length?a.filter(e=>p.some((0,i.isWithinInterval)(e))):a},[e,t,r,p]),h=(0,d.useMemo)(()=>(0,l.eachDayOfInterval)({start:e,end:t}),[e,t]),[v,y]=(0,d.useState)(0);return(0,d.useEffect)(()=>{u&&y((0,l.closestIndexTo)(u,_))},[u]),(0,o.useEffectOnce)(()=>{a(_[v])}),d.default.createElement(m,null,h.map(e=>d.default.createElement(d.Fragment,{key:e.getDate()},d.default.createElement(f,null,d.default.createElement(n.DateFormat,{value:e,format:{month:"long",day:"numeric",weekday:"long"}})),_.map((t,r)=>(0,l.isEqual)(e,(0,l.startOfDay)(t))?d.default.createElement(c.TimePickerButton,{key:t.getTime(),time:t,isSelected:r===v,canBeSelected:!0,onClick:()=>{y(r),a(t)}}):null))))})},1278:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createTimeSteps=function(e,t,r){let o=n(e,r);const l=[o];for(;o<t;)o=(0,a.addMinutes)(o,r),l.push(o);return l},t.timeClampUp=n,t.timeClampDown=o;var a=r(158);function n(e,t){return(0,a.addMinutes)(o(e,t),t)}function o(e,t){return(0,a.subMinutes)(e,(0,a.getMinutes)(e)%t)}},1279:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TimePickerButton=void 0;var a=i(r(1)),n=i(r(64)),o=r(992),l=r(341);function i(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const s=n.default.div.withConfig({displayName:"Time"})`
  font-size: 1.2rem;
`;t.TimePickerButton=(e=>{var{time:t}=e,r=u(e,["time"]);return a.default.createElement(o.PickerButton,d({size:"xs",outline:!0,width:"10rem","data-testid":`timePickerButton__${t.getTime()}`},r),a.default.createElement(s,null,(0,l.formatTime)(t)))})},1280:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.OrderTimePickerQuery=void 0;const n=((a=r(22))&&a.__esModule?a:{default:a}).default`
  query GOrderTimePicker($branchId: ID!) {
    companyBranch(id: $branchId) {
      id
      isOpen
      businessHours {
        id
        closeAt
        openAt
        closed
      }
      defaultDeliveryTime
      defaultPickupTime
      willOpenAt
      willCloseAt
    }
  }
`;t.OrderTimePickerQuery=n},890:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WithOrder=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(30),l=r(52);t.WithOrder=(({render:e,observe:t,redirect:r=!1})=>n.default.createElement(l.WithRoot,{observe:t,render:({order:t})=>t.hasOrder?e(t):r?n.default.createElement(o.Redirect,{to:"/"}):null}))},893:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ColStyleRight=t.ColStyleLeft=t.ColStyle=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(148);t.ColStyle=(({children:e})=>n.default.createElement(o.Col,{className:"pl-sm-0",sm:"12",md:"12",lg:"10",xl:"8"},e));t.ColStyleLeft=(({children:e})=>n.default.createElement(o.Col,{className:"pl-sm-0",sm:"8",md:"8",lg:"6",xl:"5"},e));t.ColStyleRight=(({children:e})=>n.default.createElement(o.Col,{className:"pl-sm-0",sm:"4",md:"4",lg:"4",xl:"3"},e))},915:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShopStatus=void 0;var a=r(158),n=r(1);class o extends n.PureComponent{constructor(){super(...arguments),this.timer=null}componentDidMount(){if(!this.props.timedUpdate)return;const e=()=>{this.forceUpdate(),this.timer=setTimeout(e,3e4)};e()}componentWillUnmount(){this.timer&&clearTimeout(this.timer)}render(){const{status:e,render:t,now:r=new Date,openThresholdInMinutes:n,closeThresholdInMinutes:o}=this.props,{isOpen:i,willCloseAt:d,willOpenAt:u}=e;let s;return t({decision:s=i?l(d,o,r)?"ClosingSoon":"Open":l(u,n,r)?"OpeningSoon":"Closed",get openingIn(){return u?(0,a.differenceInMinutes)(u,new Date):0},get closingIn(){return d?(0,a.differenceInMinutes)(d,new Date):0}})}}function l(e,t,r){return!!e&&Math.abs((0,a.differenceInMinutes)(e,r))<=t}t.ShopStatus=o,o.defaultProps={openThresholdInMinutes:30,closeThresholdInMinutes:30}},916:function(e,t,r){},918:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseMap=void 0;var a=r(152),n=i(r(1)),o=r(899),l=i(r(64));function i(e){return e&&e.__esModule?e:{default:e}}const d=l.default.div.withConfig({displayName:"MapContainerStyled"})`
  border-radius: 0 0 0.5rem 0.5rem;
  overflow: hidden;
  height: calc(100% - 3.75rem);
`,u=l.default.div.withConfig({displayName:"MapElement"})`
  height: 100%;
  position: relative;
`,s=(0,o.withGoogleMap)(({children:e})=>n.default.createElement(n.default.Fragment,null,e));t.BaseMap=(({model:e,children:t})=>(0,a.useObserver)(()=>n.default.createElement(s,{containerElement:n.default.createElement(d,{className:"map__container","data-testid":"googleMap"}),mapElement:n.default.createElement(u,null)},n.default.createElement(o.GoogleMap,{ref:e.setMapRef,zoom:e.zoom,center:e.center,onCenterChanged:e.updatePosition,onZoomChanged:e.updateZoom,onClick:e.onClick,options:(()=>({streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1,zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_TOP}}))()},t))))},929:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShopAddress=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(82);t.ShopAddress=(({address:e})=>{if(!e||!e.location)return n.default.createElement("span",null,o.i18n._("Unknown address"));const{location:t}=e;return n.default.createElement("span",null,`${t.street} ${t.houseNumber},\n ${t.city}`)})},930:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AlertModal=void 0,r(916);var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(148);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var i=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};t.AlertModal=(e=>{var{isOpen:t,headerText:r,onClose:a,children:d}=e,u=i(e,["isOpen","headerText","onClose","children"]);return n.default.createElement(o.Modal,l({isOpen:t,toggle:a,className:"modal__container"},u,{"data-testid":"alertModal"}),n.default.createElement(o.ModalHeader,{tag:o.Container,toggle:a,className:"modal__header"},n.default.createElement("span",null,r)),n.default.createElement(o.ModalBody,{className:"modal__body"},n.default.createElement("div",{className:"modal__body__content"},d)))})},931:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BackgroundThemed=void 0;var a=o(r(1)),n=o(r(64));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const i=e=>{var{imageName:t,fallbackColor:r="#5b453c",fixed:o=!1,size:i="inherit",children:d,component:u="div"}=e,s=l(e,["imageName","fallbackColor","fixed","size","children","component"]);return a.default.createElement((0,n.default)(u)`
      background-image: ${e=>`url(${e.theme[t]})`};
      background-attachment: ${e=>o?"fixed":"inherit"};
      background-repeat: no-repeat;
      background-position: left top;
      background-size: ${e=>i};
    `,s,d)};t.BackgroundThemed=i;var d=i;t.default=d},936:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormTextInput=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(894),l=r(148);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};t.FormTextInput=(e=>{var{field:t,validate:r,showFeedback:a=!1}=e,u=d(e,["field","validate","showFeedback"]);return n.default.createElement(o.Field,{field:t,validate:r,render:e=>n.default.createElement(n.default.Fragment,null,n.default.createElement(l.Input,i({},u,{value:e.value,onChange:t=>e.setValue(t.target.value),onBlur:()=>e.setTouched(!0),invalid:e.touched&&Boolean(e.error)})),a&&n.default.createElement(l.FormFeedback,null,e.error))})})},938:function(e,t,r){},939:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FinishViewFooter=void 0;var a=r(149),n=s(r(1)),o=r(148),l=s(r(64)),i=r(333),d=r(153),u=r(82);function s(e){return e&&e.__esModule?e:{default:e}}const c=l.default.div.withConfig({displayName:"CenteredButtonContainer"})`
  text-align: center;
`;t.FinishViewFooter=(({finish:{androidApp:e,iosApp:t}})=>n.default.createElement(n.default.Fragment,null,n.default.createElement(d.Desktop,null,(e||t)&&n.default.createElement("div",{className:"finish__view__apps__propagation"},n.default.createElement("div",{className:"finish__view__apps__propagation__header"},n.default.createElement(a.Trans,{id:"What about mobile app?"})),n.default.createElement("div",{className:"finish__view__apps__propagation__description"},n.default.createElement(a.Trans,{id:"We have prepared mobile app, so you could order from anywhere!"})),e&&n.default.createElement("a",{href:e.url},n.default.createElement(o.Button,{className:"finish__view__apps__propagation__button",color:"secondary"},"Google Play")),t&&n.default.createElement("a",{href:t.url},n.default.createElement(o.Button,{className:"finish__view__apps__propagation__button",color:"secondary"},"App Store"))),n.default.createElement(c,null,n.default.createElement(i.PrimaryRoutedButton,{to:"/",className:"finish__view__submit__line__button","data-testid":"finishViewFooterBackButton"},u.i18n._("Back to home page").toLocaleUpperCase()))),n.default.createElement(d.Mobile,null,n.default.createElement("div",{className:"finish__view__submit__line",style:{textAlign:"center"}},n.default.createElement("div",{className:"finish__view__submit__line__strip"}),n.default.createElement(i.PrimaryRoutedButton,{to:"/",className:"finish__view__submit__line__button","data-testid":"finishViewFooterBackButton"},u.i18n._("Back to home page").toLocaleUpperCase())))))},940:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FinishViewLoader=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(890),l=r(1022);t.FinishViewLoader=(({render:e})=>n.default.createElement(o.WithOrder,{redirect:!0,render:t=>n.default.createElement(l.QueryFinishView,{variables:{branchId:t.branchId,orderId:t.orderId},render:t=>e(t)})}))},941:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FinishViewOrder=void 0;var a=r(149),n=u(r(1)),o=u(r(64)),l=r(154),i=r(155),d=r(82);function u(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const c=o.default.div.withConfig({displayName:"HeaderThemed"})`
  background-color: ${({theme:e})=>e.primary};
`,m=o.default.div.withConfig({displayName:"PriceThemed"})`
  background-color: ${({theme:e})=>e.primary};
`,f=o.default.div.withConfig({displayName:"PriceCornerThemed"})`
  border-top-color: ${({theme:e})=>e.primary} !important;
`;t.FinishViewOrder=(({order:e})=>n.default.createElement(n.default.Fragment,null,n.default.createElement(c,{className:"finish__view__header"},n.default.createElement("div",{className:"finish__view__header__inner"},n.default.createElement("span",{className:"flaticon-transport-1 finish__view__header__icon"}),n.default.createElement("h3",null,n.default.createElement(a.Trans,{id:"It's done! Thank you :-)"})))),n.default.createElement("h4",null,n.default.createElement(a.Trans,{id:"Your order was successfully accepted!"})," ",function({orderPayments:e}){return e.some(p(l.PaymentGateEnum.Cash))?d.i18n._("You will pay at pickup."):e.some(p(l.PaymentGateEnum.Gopay))?d.i18n._("You have payed."):null}(e)),n.default.createElement("div",{className:"finish__view__items"},n.default.createElement("div",{className:"finish__view__items__look__to"},n.default.createElement(a.Trans,{id:"You can look forward to:"})),e.items.map(e=>n.default.createElement(_,s({key:e.id},e))),n.default.createElement(f,{className:"finish__view__items__price__corner"}),n.default.createElement(m,{className:"finish__view__items__price"},function({orderPayments:e,totalSum:t}){return e.some(p(l.PaymentGateEnum.Cash))?d.i18n._("Total cost to be payed:"):e.some(p(l.PaymentGateEnum.Gopay))?d.i18n._("Total cost payed:"):null}(e)," ",n.default.createElement("b",null,e.totalSum.formattedValue)))));const p=i.RM.pathEq(["paymentMethod","paymentType","enum"]);function _({recipe:e,sideDishes:t}){return n.default.createElement("div",null,n.default.createElement("b",null,e.nameLabel),t.length?` + ${t.map(i.RM.path(["recipe","nameLabel"])).join(",")}`:null)}},942:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FinishViewSupport=void 0;var a=r(149),n=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const l=o(r(64)).default.a.withConfig({displayName:"PhoneNumberLinkStyled"})`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;t.FinishViewSupport=(({branch:e})=>n.default.createElement("div",{className:"finish__view__support"},n.default.createElement("h4",null,n.default.createElement(a.Trans,{id:"Any question? Do you have a problem? Call:"})),n.default.createElement("span",{className:"flaticon-technology finish__view__support__icon"}),n.default.createElement("span",{className:"finish__view__support__phone"},n.default.createElement(l,{href:`tel:${e.phone}`},e.phone))))},943:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMethod=void 0,r(1026);var a,n=r(335),o=(a=r(1))&&a.__esModule?a:{default:a},l=r(333),i=r(52),d=r(154),u=r(155),s=r(82);const c=({orderModel:e,orderMethod:t,onChange:r,onPrefetch:a,children:i})=>o.default.createElement(n.Observer,null,()=>o.default.createElement(l.SelectButtonThemed,{selected:e.orderMethod===t,onMouseEnter:a,onClick:()=>{e.useOrderMethod(t),r(e)},"data-testid":`orderMethod-${t}`,"data-testselected":e.orderMethod===t},i));t.OrderMethod=(({onChange:e})=>o.default.createElement(i.WithRoot,{observe:!1,render:({order:t})=>o.default.createElement("div",{className:"order__method"},o.default.createElement(c,{orderModel:t,orderMethod:d.DeliveryTypeEnum.Messenger,onChange:e||u.RM.identity},o.default.createElement("span",{className:"flaticon-transport"}),s.i18n._("I want to deliver").toLocaleUpperCase()),o.default.createElement(c,{orderModel:t,orderMethod:d.DeliveryTypeEnum.Pickup,onChange:e||u.RM.identity,onPrefetch:t.prefetchPickup},o.default.createElement("span",{className:"flaticon-restaurant"}),s.i18n._("I'll pick up").toLocaleUpperCase()))}))},983:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeliveryMap=void 0,r(1169);var a=r(5),n=r(152),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),l=r(339),i=r(899),d=r(52),u=r(159),s=r(1171),c=r(1177),m=r(1180),f=r(1181);var p=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function l(e){try{d(a.next(e))}catch(t){o(t)}}function i(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(l,i)}d((a=a.apply(e,t||[])).next())})};t.DeliveryMap=(({onConfirm:e})=>{const{business:t,order:r,location:_}=(0,d.useRoot)(),{data:h}=(0,l.useQuery)(m.InitialMapLocationQuery),v=(0,o.useCallback)(()=>p(void 0,void 0,void 0,function*(){_.branchId&&r.setBranch(_.branchId),yield r.createDeliveryOrder(),e()}),[e]);return(0,n.useDisposable)(()=>(0,a.when)(()=>t.isValid,_.validateUserLocation)),(0,n.useObserver)(()=>o.default.createElement(o.default.Fragment,null,o.default.createElement(f.DeliveryMapPanning,{initialLocation:h?h.initialLocation.gpsCoordinates:null}),_.latLng?o.default.createElement(i.Marker,{position:_.latLng,defaultDraggable:!0,onDragEnd:({latLng:e})=>{_.withUserLocation((0,u.latLngToGps)(e))}}):null,o.default.createElement("div",{className:"delivery__map__address"},o.default.createElement(s.AddressInput,null)),o.default.createElement("div",{className:"delivery__map__submit"},o.default.createElement(c.AddressSubmit,{enabled:_.isDeliveryAddress,onClick:v,onPrefetch:()=>{_.branchId&&r.prefetchFoodMenu(_.branchId)}}))))})},984:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(1178);var a,n=(a=r(1))&&a.__esModule?a:{default:a};var o=({children:e})=>n.default.createElement("div",{className:"button__stripe"},n.default.createElement("div",{className:"button__stripe__bar"}),n.default.createElement("div",{className:"button__stripe__button"},e));t.default=o},985:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MapPanning=void 0;var a=r(5),n=r(152);t.MapPanning=(({map:e,gps:t})=>((0,n.useDisposable)(()=>(0,a.autorun)(()=>{e.isReady&&t&&e.panToLocation(t)}),[t]),null))},986:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShopClosingTimeModal=void 0;var a,n=r(149),o=r(152),l=(a=r(1))&&a.__esModule?a:{default:a},i=r(930),d=r(915),u=r(52),s=r(82);t.ShopClosingTimeModal=(({status:e})=>{const{user:t}=(0,u.useRoot)();return e?l.default.createElement(d.ShopStatus,{status:e,render:({decision:e,openingIn:r})=>l.default.createElement(o.Observer,null,()=>l.default.createElement(i.AlertModal,{isOpen:("Closed"===e||"OpeningSoon"===e)&&!t.closingTimeAlertHidden,onClose:t.hideClosingTime,headerText:s.i18n._("We are closed right now")},s.i18n._("We're sorry, but we do not accept new orders at this time."),"OpeningSoon"===e&&l.default.createElement(n.Trans,{id:"You can prepare your order because we are {openingIn, plural, one {opening in 1 minute} other {opening in # minutes}} !",values:{openingIn:r}})))}):null})},987:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShopHeaderIcons=void 0,r(1193);var a=u(r(1)),n=r(893),o=u(r(1195)),l=u(r(1196)),i=u(r(1197)),d=u(r(1198));function u(e){return e&&e.__esModule?e:{default:e}}t.ShopHeaderIcons=(()=>a.default.createElement(n.ColStyle,null,a.default.createElement("img",{src:i.default,className:"shop__header__icons__doveze","data-testid":"ShopHeaderIcons__AppLogo",alt:"logo Doveze.cz"}),a.default.createElement("img",{src:l.default,className:"shop__header__icons__commerce",alt:"MasterCard"}),a.default.createElement("img",{src:o.default,className:"shop__header__icons__commerce","data-testid":"ShopHeaderIcons__VisaLogo",alt:"VISA"}),a.default.createElement("img",{src:d.default,className:"shop__header__icons__gopay",alt:"GoPay","data-testid":"ShopHeaderIcons__GoPayLogo"})))},988:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShopStatusDisplay=void 0;var a=r(149),n=r(152),o=u(r(1)),l=u(r(64)),i=r(915),d=r(52);function u(e){return e&&e.__esModule?e:{default:e}}const s=l.default.span.withConfig({displayName:"StatusDisplayOpen"})`
  font-style: italic;
  color: #0f9849;
`,c=l.default.span.withConfig({displayName:"StatusDisplayClosed"})`
  font-style: italic;
  color: #b40000;
`;t.ShopStatusDisplay=(({status:e,deliveryTime:t,pickupTime:r})=>{const{order:l}=(0,d.useRoot)();return e?(0,n.useObserver)(()=>o.default.createElement(i.ShopStatus,{status:e,render:e=>{switch(e.decision){case"Open":return o.default.createElement(s,{"data-testid":"statusDisplayOpen"},l.usingDeliveryOrderMethod?o.default.createElement(a.Trans,{id:"We are delivering in {deliveryTime} minutes",values:{deliveryTime:t}}):o.default.createElement(a.Trans,{id:"We can prepare your order in {pickupTime} minutes",values:{pickupTime:r}}));case"OpeningSoon":return o.default.createElement(c,null,o.default.createElement(a.Trans,{id:"{0, plural, one {Opening in 1 minute} other {Opening in # minutes}}",values:{0:e.openingIn}}));case"ClosingSoon":return o.default.createElement(s,null,o.default.createElement(a.Trans,{id:"{0, plural, one {Closing in 1 minute} other {Closing in # minutes}}",values:{0:e.closingIn}}));case"Closed":return o.default.createElement(c,null,o.default.createElement(a.Trans,{id:"Closed"}))}}})):null})},989:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartView=void 0,r(1207);var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(890),l=r(990),i=r(1215),d=r(1223),u=r(167),s=r(1224);t.CartView=(()=>n.default.createElement(o.WithOrder,{redirect:!0,render:e=>n.default.createElement(n.default.Fragment,null,n.default.createElement(l.AddToCartModal,{order:e}),n.default.createElement(s.ChangeCartModal,{root:e.root}),n.default.createElement(u.QueryCartView,{variables:{orderId:e.orderId},renderLoading:!1,render:({order:t})=>n.default.createElement(n.default.Fragment,null,t&&0!==t.countWares?n.default.createElement(i.CartContents,{order:t,rootModel:e.root}):n.default.createElement(d.CartIsEmpty,null))}))}))},990:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AddToCartModal=void 0;var a,n=r(149),o=(a=r(1))&&a.__esModule?a:{default:a},l=r(156),i=r(148),d=r(153),u=r(157),s=r(343),c=r(991);const m=(0,u.buildQuery)(s.OrderCartForRecipeQuery);t.AddToCartModal=(({order:e})=>o.default.createElement(l.Route,{path:"/order/add/:recipeId",render:({match:t,history:r})=>o.default.createElement(m,{variables:{recipeId:t.params.recipeId},renderLoading:!1,renderError:()=>o.default.createElement(i.Alert,{color:"warning"},o.default.createElement(n.Trans,{id:"Error in loading cart item. Issue was reported."})),render:(a,{loading:n})=>o.default.createElement(d.Mobile,null,l=>o.default.createElement(c.CartModal,{recipe:a.recipe,onConfirm:r=>l?(e.addFromRecipeMobile(t.params.recipeId,r),Promise.resolve()):e.addFromRecipe(t.params.recipeId,r),onClose:()=>r.goBack(),isLoading:n}))})}))},991:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartModal=void 0;var a,n=r(149),o=r(5),l=(a=r(1))&&a.__esModule?a:{default:a},i=r(148);r(916);var d=r(1209),u=r(1214);var s=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function l(e){try{d(a.next(e))}catch(t){o(t)}}function i(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(l,i)}d((a=a.apply(e,t||[])).next())})};t.CartModal=(({recipe:e,initialSelection:t=[],onConfirm:r,onClose:a,isLoading:c})=>{const m=o.observable.array(t);return l.default.createElement(i.Modal,{isOpen:!0,toggle:a,className:"modal__container",autoFocus:!0,backdrop:"static",fade:!1},l.default.createElement(i.ModalHeader,{toggle:a,tag:i.Container,className:"modal__header"},l.default.createElement("span",null,l.default.createElement(n.Trans,{id:"Do you want to add something?"}))),l.default.createElement(i.ModalBody,{className:"modal__body"},l.default.createElement("div",{className:"modal__body__content"},c||!e?null:l.default.createElement(l.default.Fragment,null,l.default.createElement("h3",{className:"modal__body__food__name"},e.nameLabel),l.default.createElement("span",{className:"modal__body__food_description"},e.descriptionLabel),l.default.createElement(d.SidedishPicker,{recipe:e,selection:m,onToggle:e=>{m.includes(e)?m.remove(e):m.push(e)}}))),l.default.createElement("div",{className:"modal__body__button__line"},l.default.createElement("div",{className:"modal__body__button__strip"}),l.default.createElement(u.CartOrderButton,{selection:m,onConfirm:()=>s(void 0,void 0,void 0,function*(){yield r(Array.from(m)),a()}),enabled:!c}))))})},992:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PickerButton=void 0;var a=l(r(1)),n=r(148),o=l(r(64));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const u=(0,o.default)(e=>{var{isSelected:t,canBeSelected:r,width:o}=e,l=d(e,["isSelected","canBeSelected","width"]);return a.default.createElement(n.Button,l)}).withConfig({displayName:"PickerButtonStyled"})`
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
`;t.PickerButton=(e=>{var{isSelected:t,canBeSelected:r,onSelect:n,children:o}=e,l=d(e,["isSelected","canBeSelected","onSelect","children"]);return a.default.createElement(u,i({disabled:!r&&!t,isSelected:t},l),o)})},993:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartItemButton=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(64));const l=o.default.div.withConfig({displayName:"CartItemButtonStyled"})`
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
`;const i=o.default.span.withConfig({displayName:"CartItemButtonIcon"})`
  &:before {
    font-size: 0.8rem;
    margin-left: 0.36rem;
  }
`;t.CartItemButton=(({color:e,icon:t,onClick:r,enabled:a=!0,data_testid:o})=>n.default.createElement(l,{color:e,enabled:a,onClick:r,"data-testid":o},n.default.createElement(i,{icon:t,className:`flaticon-${t}`})))},994:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FoodMenuView=void 0;var a=r(152),n=s(r(1)),o=r(52),l=s(r(1225)),i=r(1238),d=r(168),u=r(1244);function s(e){return e&&e.__esModule?e:{default:e}}t.FoodMenuView=(()=>{const{order:e}=(0,o.useRoot)();return(0,a.useObserver)(()=>n.default.createElement(d.QueryFoodMenu,{skip:!e.branchId,variables:{branchId:e.branchId},render:({wareCategories:t})=>n.default.createElement(n.default.Fragment,null,n.default.createElement(u.OrderLimitModal,null),n.default.createElement(l.default,{categories:t}),n.default.createElement(d.QueryFoodMenuCartPresence,{variables:{orderId:e.orderId},renderLoading:!1,render:({order:r},{loading:a})=>n.default.createElement(i.FoodMenu,{categories:t,rootModel:e.root,inCart:function(e){return e?e.reduce((e,t)=>{const r=t.recipe.id;return e[r]||(e[r]=0),e[r]+=1,e},{}):{}}(r&&r.items),orderItemCount:r?r.items.length:0,shouldUpdate:Boolean(r&&!a)})}))}))})}}]);
//# sourceMappingURL=1.9c2511ac.chunk.js.map