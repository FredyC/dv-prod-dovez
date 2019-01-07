(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{452:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WithOrder=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(25),l=r(42);t.WithOrder=(({render:e,observe:t,redirect:r=!1})=>n.default.createElement(l.WithRoot,{observe:t,render:({order:t})=>t.hasOrder?e(t):r?n.default.createElement(o.Redirect,{to:"/"}):null}))},455:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ColStyleRight=t.ColStyleLeft=t.ColStyle=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(98);t.ColStyle=(({children:e})=>n.default.createElement(o.Col,{className:"pl-sm-0",sm:"12",md:"12",lg:"10",xl:"8"},e));t.ColStyleLeft=(({children:e})=>n.default.createElement(o.Col,{className:"pl-sm-0",sm:"8",md:"8",lg:"6",xl:"5"},e));t.ColStyleRight=(({children:e})=>n.default.createElement(o.Col,{className:"pl-sm-0",sm:"4",md:"4",lg:"4",xl:"3"},e))},480:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShopStatus=void 0;var a=r(117),n=r(1);class o extends n.PureComponent{constructor(){super(...arguments),this.timer=null}componentDidMount(){if(!this.props.timedUpdate)return;const e=()=>{this.forceUpdate(),this.timer=setTimeout(e,3e4)};e()}componentWillUnmount(){this.timer&&clearTimeout(this.timer)}render(){const{status:e,render:t,now:r=new Date,openThresholdInMinutes:n,closeThresholdInMinutes:o}=this.props,{isOpen:i,willCloseAt:d,willOpenAt:u}=e;let s;return t({decision:s=i?l(d,o,r)?"ClosingSoon":"Open":l(u,n,r)?"OpeningSoon":"Closed",get openingIn(){return u?(0,a.differenceInMinutes)(u,new Date):0},get closingIn(){return d?(0,a.differenceInMinutes)(d,new Date):0}})}}function l(e,t,r){return!!e&&Math.abs((0,a.differenceInMinutes)(e,r))<=t}t.ShopStatus=o,o.defaultProps={openThresholdInMinutes:30,closeThresholdInMinutes:30}},482:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseMap=void 0;var a=r(102),n=i(r(1)),o=r(463),l=i(r(50));function i(e){return e&&e.__esModule?e:{default:e}}const d=l.default.div.withConfig({displayName:"MapContainerStyled"})`
  border-radius: 0 0 0.5rem 0.5rem;
  overflow: hidden;
  height: calc(100% - 3.75rem);
`,u=l.default.div.withConfig({displayName:"MapElement"})`
  height: 100%;
  position: relative;
`,s=(0,o.withGoogleMap)(({children:e})=>n.default.createElement(n.default.Fragment,null,e));t.BaseMap=(({model:e,children:t})=>(0,a.useObserver)(()=>n.default.createElement(s,{containerElement:n.default.createElement(d,{className:"map__container","data-testid":"googleMap"}),mapElement:n.default.createElement(u,null)},n.default.createElement(o.GoogleMap,{ref:e.setMapRef,zoom:e.zoom,center:e.center,onCenterChanged:e.updatePosition,onZoomChanged:e.updateZoom,onClick:e.onClick,options:(()=>({streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1,zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_TOP}}))()},t))))},493:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShopAddress=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(62);t.ShopAddress=(({address:e})=>{if(!e||!e.location)return n.default.createElement("span",null,o.i18n._("Unknown address"));const{location:t}=e;return n.default.createElement("span",null,`${t.street} ${t.houseNumber},\n ${t.city}`)})},494:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AlertModal=void 0,r(495);var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(98);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var i=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};t.AlertModal=(e=>{var{isOpen:t,headerText:r,onClose:a,children:d}=e,u=i(e,["isOpen","headerText","onClose","children"]);return n.default.createElement(o.Modal,l({isOpen:t,toggle:a,className:"modal__container"},u,{"data-testid":"alertModal"}),n.default.createElement(o.ModalHeader,{tag:o.Container,toggle:a,className:"modal__header"},n.default.createElement("span",null,r)),n.default.createElement(o.ModalBody,{className:"modal__body"},n.default.createElement("div",{className:"modal__body__content"},d)))})},495:function(e,t,r){},496:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BackgroundThemed=void 0;var a=o(r(1)),n=o(r(50));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const i=e=>{var{imageName:t,fallbackColor:r="#5b453c",fixed:o=!1,size:i="inherit",children:d,component:u="div"}=e,s=l(e,["imageName","fallbackColor","fixed","size","children","component"]);return a.default.createElement((0,n.default)(u)`
      background-image: ${e=>`url(${e.theme[t]})`};
      background-attachment: ${e=>o?"fixed":"inherit"};
      background-repeat: no-repeat;
      background-position: left top;
      background-size: ${e=>i};
    `,s,d)};t.BackgroundThemed=i;var d=i;t.default=d},501:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormTextInput=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(457),l=r(98);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};t.FormTextInput=(e=>{var{field:t,validate:r,showFeedback:a=!1}=e,u=d(e,["field","validate","showFeedback"]);return n.default.createElement(o.Field,{field:t,validate:r,render:e=>n.default.createElement(n.default.Fragment,null,n.default.createElement(l.Input,i({},u,{value:e.value,onChange:t=>e.setValue(t.target.value),onBlur:()=>e.setTouched(!0),invalid:e.touched&&Boolean(e.error)})),a&&n.default.createElement(l.FormFeedback,null,e.error))})})},503:function(e,t,r){},504:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FinishViewFooter=void 0;var a=r(99),n=s(r(1)),o=r(98),l=s(r(50)),i=r(186),d=r(103),u=r(62);function s(e){return e&&e.__esModule?e:{default:e}}const c=l.default.div.withConfig({displayName:"CenteredButtonContainer"})`
  text-align: center;
`;t.FinishViewFooter=(({finish:{androidApp:e,iosApp:t}})=>n.default.createElement(n.default.Fragment,null,n.default.createElement(d.Desktop,null,(e||t)&&n.default.createElement("div",{className:"finish__view__apps__propagation"},n.default.createElement("div",{className:"finish__view__apps__propagation__header"},n.default.createElement(a.Trans,{id:"What about mobile app?"})),n.default.createElement("div",{className:"finish__view__apps__propagation__description"},n.default.createElement(a.Trans,{id:"We have prepared mobile app, so you could order from anywhere!"})),e&&n.default.createElement("a",{href:e.url},n.default.createElement(o.Button,{className:"finish__view__apps__propagation__button",color:"secondary"},"Google Play")),t&&n.default.createElement("a",{href:t.url},n.default.createElement(o.Button,{className:"finish__view__apps__propagation__button",color:"secondary"},"App Store"))),n.default.createElement(c,null,n.default.createElement(i.PrimaryRoutedButton,{to:"/",className:"finish__view__submit__line__button","data-testid":"finishViewFooterBackButton"},u.i18n._("Back to home page").toLocaleUpperCase()))),n.default.createElement(d.Mobile,null,n.default.createElement("div",{className:"finish__view__submit__line",style:{textAlign:"center"}},n.default.createElement("div",{className:"finish__view__submit__line__strip"}),n.default.createElement(i.PrimaryRoutedButton,{to:"/",className:"finish__view__submit__line__button","data-testid":"finishViewFooterBackButton"},u.i18n._("Back to home page").toLocaleUpperCase())))))},505:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FinishViewLoader=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(452),l=r(585);t.FinishViewLoader=(({render:e})=>n.default.createElement(o.WithOrder,{redirect:!0,render:t=>n.default.createElement(l.QueryFinishView,{variables:{branchId:t.branchId,orderId:t.orderId},render:t=>e(t)})}))},506:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FinishViewOrder=void 0;var a=r(99),n=u(r(1)),o=u(r(50)),l=r(104),i=r(106),d=r(62);function u(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const c=o.default.div.withConfig({displayName:"HeaderThemed"})`
  background-color: ${({theme:e})=>e.primary};
`,m=o.default.div.withConfig({displayName:"PriceThemed"})`
  background-color: ${({theme:e})=>e.primary};
`,f=o.default.div.withConfig({displayName:"PriceCornerThemed"})`
  border-top-color: ${({theme:e})=>e.primary} !important;
`;t.FinishViewOrder=(({order:e})=>n.default.createElement(n.default.Fragment,null,n.default.createElement(c,{className:"finish__view__header"},n.default.createElement("div",{className:"finish__view__header__inner"},n.default.createElement("span",{className:"flaticon-transport-1 finish__view__header__icon"}),n.default.createElement("h3",null,n.default.createElement(a.Trans,{id:"It's done! Thank you :-)"})))),n.default.createElement("h4",null,n.default.createElement(a.Trans,{id:"Your order was successfully accepted!"})," ",function({orderPayments:e}){return e.some(p(l.PaymentGateEnum.Cash))?d.i18n._("You will pay at pickup."):e.some(p(l.PaymentGateEnum.Gopay))?d.i18n._("You have payed."):null}(e)),n.default.createElement("div",{className:"finish__view__items"},n.default.createElement("div",{className:"finish__view__items__look__to"},n.default.createElement(a.Trans,{id:"You can look forward to:"})),e.items.map(e=>n.default.createElement(_,s({key:e.id},e))),n.default.createElement(f,{className:"finish__view__items__price__corner"}),n.default.createElement(m,{className:"finish__view__items__price"},function({orderPayments:e,totalSum:t}){return e.some(p(l.PaymentGateEnum.Cash))?d.i18n._("Total cost to be payed:"):e.some(p(l.PaymentGateEnum.Gopay))?d.i18n._("Total cost payed:"):null}(e)," ",n.default.createElement("b",null,e.totalSum.formattedValue)))));const p=i.RM.pathEq(["paymentMethod","paymentType","enum"]);function _({recipe:e,sideDishes:t}){return n.default.createElement("div",null,n.default.createElement("b",null,e.nameLabel),t.length?` + ${t.map(i.RM.path(["recipe","nameLabel"])).join(",")}`:null)}},507:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FinishViewSupport=void 0;var a=r(99),n=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}const l=o(r(50)).default.a.withConfig({displayName:"PhoneNumberLinkStyled"})`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;t.FinishViewSupport=(({branch:e})=>n.default.createElement("div",{className:"finish__view__support"},n.default.createElement("h4",null,n.default.createElement(a.Trans,{id:"Any question? Do you have a problem? Call:"})),n.default.createElement("span",{className:"flaticon-technology finish__view__support__icon"}),n.default.createElement("span",{className:"finish__view__support__phone"},n.default.createElement(l,{href:`tel:${e.phone}`},e.phone))))},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMethod=void 0,r(589);var a,n=r(187),o=(a=r(1))&&a.__esModule?a:{default:a},l=r(186),i=r(42),d=r(104),u=r(106),s=r(62);const c=({orderModel:e,orderMethod:t,onChange:r,onPrefetch:a,children:i})=>o.default.createElement(n.Observer,null,()=>o.default.createElement(l.SelectButtonThemed,{selected:e.orderMethod===t,onMouseEnter:a,onClick:()=>{e.useOrderMethod(t),r(e)},"data-testid":`orderMethod-${t}`,"data-testselected":e.orderMethod===t},i));t.OrderMethod=(({onChange:e})=>o.default.createElement(i.WithRoot,{observe:!1,render:({order:t})=>o.default.createElement("div",{className:"order__method"},o.default.createElement(c,{orderModel:t,orderMethod:d.DeliveryTypeEnum.Messenger,onChange:e||u.RM.identity},o.default.createElement("span",{className:"flaticon-transport"}),s.i18n._("I want to deliver").toLocaleUpperCase()),o.default.createElement(c,{orderModel:t,orderMethod:d.DeliveryTypeEnum.Pickup,onChange:e||u.RM.identity,onPrefetch:t.prefetchPickup},o.default.createElement("span",{className:"flaticon-restaurant"}),s.i18n._("I'll pick up").toLocaleUpperCase()))}))},549:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeliveryMap=void 0,r(735);var a=r(3),n=r(102),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),l=r(189),i=r(463),d=r(42),u=r(108),s=r(737),c=r(743),m=r(746),f=r(747);var p=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function l(e){try{d(a.next(e))}catch(t){o(t)}}function i(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(l,i)}d((a=a.apply(e,t||[])).next())})};t.DeliveryMap=(({onConfirm:e})=>{const{business:t,order:r,location:_}=(0,d.useRoot)(),{data:h}=(0,l.useQuery)(m.InitialMapLocationQuery),v=(0,o.useCallback)(()=>p(void 0,void 0,void 0,function*(){_.branchId&&r.setBranch(_.branchId),yield r.createDeliveryOrder(),e()}),[e]);return(0,n.useDisposable)(()=>(0,a.when)(()=>t.isValid,_.validateUserLocation)),(0,n.useObserver)(()=>o.default.createElement(o.default.Fragment,null,o.default.createElement(f.DeliveryMapPanning,{initialLocation:h.initialLocation.gpsCoordinates}),_.latLng?o.default.createElement(i.Marker,{position:_.latLng,defaultDraggable:!0,onDragEnd:({latLng:e})=>{_.withUserLocation((0,u.latLngToGps)(e))}}):null,o.default.createElement("div",{className:"delivery__map__address"},o.default.createElement(s.AddressInput,null)),o.default.createElement("div",{className:"delivery__map__submit"},o.default.createElement(c.AddressSubmit,{enabled:_.isDeliveryAddress,onClick:v,onPrefetch:()=>{_.branchId&&r.prefetchFoodMenu(_.branchId)}}))))})},550:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(744);var a,n=(a=r(1))&&a.__esModule?a:{default:a};var o=({children:e})=>n.default.createElement("div",{className:"button__stripe"},n.default.createElement("div",{className:"button__stripe__bar"}),n.default.createElement("div",{className:"button__stripe__button"},e));t.default=o},551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MapPanning=void 0;var a=r(3),n=r(102);t.MapPanning=(({map:e,gps:t})=>((0,n.useDisposable)(()=>(0,a.autorun)(()=>{e.isReady&&t&&e.panToLocation(t)}),[t]),null))},552:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShopClosingTimeModal=void 0;var a,n=r(99),o=r(102),l=(a=r(1))&&a.__esModule?a:{default:a},i=r(494),d=r(480),u=r(42),s=r(62);t.ShopClosingTimeModal=(({status:e})=>{const{user:t}=(0,u.useRoot)();return e?l.default.createElement(d.ShopStatus,{status:e,render:({decision:e,openingIn:r})=>l.default.createElement(o.Observer,null,()=>l.default.createElement(i.AlertModal,{isOpen:("Closed"===e||"OpeningSoon"===e)&&!t.closingTimeAlertHidden,onClose:t.hideClosingTime,headerText:s.i18n._("We are closed right now")},s.i18n._("We're sorry, but we do not accept new orders at this time."),"OpeningSoon"===e&&l.default.createElement(n.Trans,{id:"You can prepare your order because we are {openingIn, plural, one {opening in 1 minute} other {opening in # minutes}} !",values:{openingIn:r}})))}):null})},553:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShopHeaderIcons=void 0,r(759);var a=u(r(1)),n=r(455),o=u(r(761)),l=u(r(762)),i=u(r(763)),d=u(r(764));function u(e){return e&&e.__esModule?e:{default:e}}t.ShopHeaderIcons=(()=>a.default.createElement(n.ColStyle,null,a.default.createElement("img",{src:i.default,className:"shop__header__icons__doveze","data-testid":"ShopHeaderIcons__AppLogo",alt:"logo Doveze.cz"}),a.default.createElement("img",{src:l.default,className:"shop__header__icons__commerce",alt:"MasterCard"}),a.default.createElement("img",{src:o.default,className:"shop__header__icons__commerce","data-testid":"ShopHeaderIcons__VisaLogo",alt:"VISA"}),a.default.createElement("img",{src:d.default,className:"shop__header__icons__gopay",alt:"GoPay","data-testid":"ShopHeaderIcons__GoPayLogo"})))},554:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShopStatusDisplay=void 0;var a=r(99),n=i(r(1)),o=i(r(50)),l=r(480);function i(e){return e&&e.__esModule?e:{default:e}}const d=o.default.span.withConfig({displayName:"StatusDisplayOpen"})`
  font-style: italic;
  color: #0f9849;
`,u=o.default.span.withConfig({displayName:"StatusDisplayClosed"})`
  font-style: italic;
  color: #b40000;
`;t.ShopStatusDisplay=(({status:e})=>e?n.default.createElement(l.ShopStatus,{status:e,render:e=>{switch(e.decision){case"Open":return n.default.createElement(d,{"data-testid":"statusDisplayOpen"},n.default.createElement(a.Trans,{id:"We are open"}));case"OpeningSoon":return n.default.createElement(u,null,n.default.createElement(a.Trans,{id:"{0, plural, one {Opening in 1 minute} other {Opening in # minutes}}",values:{0:e.openingIn}}));case"ClosingSoon":return n.default.createElement(d,null,n.default.createElement(a.Trans,{id:"{0, plural, one {Closing in 1 minute} other {Closing in # minutes}}",values:{0:e.closingIn}}));case"Closed":return n.default.createElement(u,null,n.default.createElement(a.Trans,{id:"Closed"}))}}}):null)},555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartView=void 0,r(773);var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(452),l=r(556),i=r(783),d=r(791),u=r(114),s=r(792);t.CartView=(()=>n.default.createElement(o.WithOrder,{redirect:!0,render:e=>n.default.createElement(n.default.Fragment,null,n.default.createElement(l.AddToCartModal,{order:e}),n.default.createElement(s.ChangeCartModal,{root:e.root}),n.default.createElement(u.QueryCartView,{variables:{orderId:e.orderId},renderLoading:!1,render:({order:t})=>n.default.createElement(n.default.Fragment,null,t&&0!==t.countWares?n.default.createElement(i.CartContents,{order:t,rootModel:e.root}):n.default.createElement(d.CartIsEmpty,null))}))}))},556:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AddToCartModal=void 0;var a,n=r(99),o=(a=r(1))&&a.__esModule?a:{default:a},l=r(105),i=r(98),d=r(103),u=r(107),s=r(192),c=r(557);const m=(0,u.buildQuery)(s.OrderCartForRecipeQuery);t.AddToCartModal=(({order:e})=>o.default.createElement(l.Route,{path:"/order/add/:recipeId",render:({match:t,history:r})=>o.default.createElement(m,{variables:{recipeId:t.params.recipeId},renderLoading:!1,renderError:()=>o.default.createElement(i.Alert,{color:"warning"},o.default.createElement(n.Trans,{id:"Error in loading cart item. Issue was reported."})),render:(a,{loading:n})=>o.default.createElement(d.Mobile,null,l=>o.default.createElement(c.CartModal,{recipe:a.recipe,onConfirm:r=>l?(e.addFromRecipeMobile(t.params.recipeId,r),Promise.resolve()):e.addFromRecipe(t.params.recipeId,r),onClose:()=>r.goBack(),isLoading:n}))})}))},557:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartModal=void 0;var a,n=r(99),o=r(3),l=(a=r(1))&&a.__esModule?a:{default:a},i=r(98);r(495);var d=r(775),u=r(782);var s=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function l(e){try{d(a.next(e))}catch(t){o(t)}}function i(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(l,i)}d((a=a.apply(e,t||[])).next())})};t.CartModal=(({recipe:e,initialSelection:t=[],onConfirm:r,onClose:a,isLoading:c})=>{const m=o.observable.array(t);return l.default.createElement(i.Modal,{isOpen:!0,toggle:a,className:"modal__container",autoFocus:!0,backdrop:"static",fade:!1},l.default.createElement(i.ModalHeader,{toggle:a,tag:i.Container,className:"modal__header"},l.default.createElement("span",null,l.default.createElement(n.Trans,{id:"Do you want to add something?"}))),l.default.createElement(i.ModalBody,{className:"modal__body"},l.default.createElement("div",{className:"modal__body__content"},c||!e?null:l.default.createElement(l.default.Fragment,null,l.default.createElement("h3",{className:"modal__body__food__name"},e.nameLabel),l.default.createElement("span",{className:"modal__body__food_description"},e.descriptionLabel),l.default.createElement(d.SidedishPicker,{recipe:e,selection:m,onToggle:e=>{m.includes(e)?m.remove(e):m.push(e)}}))),l.default.createElement("div",{className:"modal__body__button__line"},l.default.createElement("div",{className:"modal__body__button__strip"}),l.default.createElement(u.CartOrderButton,{selection:m,onConfirm:()=>s(void 0,void 0,void 0,function*(){yield r(Array.from(m)),a()}),enabled:!c}))))})},558:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartItemButton=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(50));const l=o.default.div.withConfig({displayName:"CartItemButtonStyled"})`
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
`;t.CartItemButton=(({color:e,icon:t,onClick:r,enabled:a=!0,data_testid:o})=>n.default.createElement(l,{color:e,enabled:a,onClick:r,"data-testid":o},n.default.createElement(i,{icon:t,className:`flaticon-${t}`})))},559:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FoodMenuView=void 0;var a=u(r(1)),n=r(452),o=u(r(793)),l=r(806),i=r(115),d=r(812);function u(e){return e&&e.__esModule?e:{default:e}}t.FoodMenuView=(()=>a.default.createElement(n.WithOrder,{render:e=>a.default.createElement(i.QueryFoodMenu,{variables:{branchId:e.branchId},render:({wareCategories:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement(d.OrderLimitModal,null),a.default.createElement(o.default,{categories:t}),a.default.createElement(i.QueryFoodMenuCartPresence,{variables:{orderId:e.orderId},renderLoading:!1,render:({order:r},{loading:n})=>a.default.createElement(l.FoodMenu,{categories:t,rootModel:e.root,inCart:function(e){return e?e.reduce((e,t)=>{const r=t.recipe.id;return e[r]||(e[r]=0),e[r]+=1,e},{}):{}}(r&&r.items),orderItemCount:r?r.items.length:0,shouldUpdate:Boolean(r&&!n)})}))})}))},565:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormStorageNotice=void 0;var a=r(99),n=r(187),o=c(r(1)),l=r(98),i=c(r(50)),d=r(103),u=r(42),s=r(566);function c(e){return e&&e.__esModule?e:{default:e}}const m=(0,i.default)(l.Button).withConfig({displayName:"NoticeButton"})`
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
`;t.OrderFormStorageNotice=(e=>o.default.createElement(u.WithRoot,{render:e=>o.default.createElement(s.QueryOrderForm,{skip:!e.order.hasOrder||null!==e.user.rememberForm,variables:{orderId:e.order.orderId},renderLoading:()=>null,render:({order:t})=>o.default.createElement(n.Observer,null,()=>t.countWares>0&&null===e.user.rememberForm?o.default.createElement(f,{"data-testid":"orderFormStorageNotice"},o.default.createElement("p",null,o.default.createElement(a.Trans,{id:"This app is using secure storage for keeping filled form data. It's not cookies, these are stored in your browser only."})),o.default.createElement(m,{color:"success",size:"sm",onClick:e.user.setFormRememberYes,"data-testid":"orderFormStorageNotice__Yes"},o.default.createElement(a.Trans,{id:"Always remember"})),o.default.createElement(m,{color:"secondary",size:"sm",onClick:e.user.setFormRememberNo,"data-testid":"orderFormStorageNotice__No"},o.default.createElement(a.Trans,{id:"Do not store"}))):null)})}))},566:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryOrderForm=t.OrderFormQuery=void 0;var a,n=(a=r(20))&&a.__esModule?a:{default:a},o=r(107);const l=n.default`
  query GOrderForm($orderId: ID!) {
    order(id: $orderId) {
      id
      countWares
    }
  }
`;t.OrderFormQuery=l;const i=(0,o.buildQuery)(l);t.QueryOrderForm=i},567:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderErrorModal=void 0;var a,n=r(99),o=(a=r(1))&&a.__esModule?a:{default:a},l=r(98);r(495);var i=r(452);t.OrderErrorModal=(()=>o.default.createElement(i.WithOrder,{observe:!0,render:e=>o.default.createElement(l.Modal,{isOpen:e.hasErrors,toggle:e.clearErrors,className:"modal__container"},o.default.createElement(l.ModalHeader,{toggle:e.clearErrors,tag:l.Container,className:"modal__header"},o.default.createElement("span",null,o.default.createElement(n.Trans,{id:"Order can not be completed"}))),o.default.createElement(l.ModalBody,{className:"modal__body"},o.default.createElement("div",{className:"modal__body__content"},e.hasErrors&&e.submitErrors.map((e,t)=>o.default.createElement("div",{key:t},e))),o.default.createElement("div",{className:"modal__body__button__line"},o.default.createElement("div",{className:"modal__body__button__strip"}),o.default.createElement(l.Button,{className:"modal__body__button",color:"primary",onClick:e.clearErrors},o.default.createElement(n.Trans,{id:"I understand"})),"/>")))}))},568:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderAgreements=void 0;var a,n=r(3),o=r(102),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),i=r(98),d=(a=r(50))&&a.__esModule?a:{default:a},u=r(817),s=r(42),c=r(62);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const f=(0,d.default)(i.Button).withConfig({displayName:"ButtonStyled"})`
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
`;t.OrderAgreements=(()=>{const e=(0,l.useRef)(n.observable.array([])).current,t=(0,l.useCallback)(t=>()=>{e.includes(t)?e.remove(t):e.push(t)},[]),{order:r}=(0,s.useRoot)();return(0,o.useObserver)(()=>l.default.createElement(l.default.Fragment,null,r.agreements.map((r,a)=>l.default.createElement("div",m({key:r.id},(e=>e.isConfirmed?{style:{display:"none"}}:{})(r)),l.default.createElement(u.FormInputCheckbox,{field:["agreements",a,"isConfirmed"],validate:e=>!r.isMandatory||r.isConfirmed||e?null:"Agreement is mandatory","data-testid":`orderAgreement__Check__${r.id}`},l.default.createElement("span",{dangerouslySetInnerHTML:{__html:r.name}}),r.isMandatory&&" * ",r.description&&l.default.createElement(l.default.Fragment,null,l.default.createElement(f,{color:"link",onClick:t(r.id),"data-testid":`orderAgreement__MoreButton__${r.id}`},e.includes(r.id)?c.i18n._("Less").toLocaleLowerCase():c.i18n._("More...").toLocaleLowerCase()),l.default.createElement(i.Collapse,{isOpen:e.includes(r.id)},l.default.createElement(p,{"data-testid":`orderAgreement__Info__${r.id}`,dangerouslySetInnerHTML:{__html:r.description}}))))))))})},576:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormInputs=void 0;var a=u(r(1)),n=r(832),o=r(833),l=r(577),i=r(834),d=u(r(835));function u(e){return e&&e.__esModule?e:{default:e}}t.OrderFormInputs=(()=>a.default.createElement(a.default.Fragment,null,a.default.createElement(o.OrderNameInput,null),a.default.createElement(i.OrderPhoneInput,null),a.default.createElement(n.OrderEmailInput,null),a.default.createElement(l.OrderNoteInput,null),a.default.createElement(d.default,null)))},577:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderNoteInput=t.MAX_LENGTH=void 0;var a,n=r(99),o=(a=r(1))&&a.__esModule?a:{default:a},l=r(457),i=r(98),d=r(62);t.MAX_LENGTH=50;const u=e=>e&&e.trim().length>50,s=e=>u(e)?d.i18n._("Note is too long"):null;t.OrderNoteInput=(()=>{const e=d.i18n._("eg. ingredients change, company...");return o.default.createElement(l.Field,{field:"note",validate:s,render:t=>o.default.createElement(i.FormGroup,null,o.default.createElement(i.Input,{type:"textarea",placeholder:d.i18n._("Note"),title:e,value:t.value,onChange:e=>t.setValue(e.target.value),onBlur:()=>t.setTouched(!0),valid:!t.error,invalid:Boolean(t.error),"data-testid":"orderNoteInput"}),o.default.createElement(i.FormText,null,e),u(t.value)?o.default.createElement(i.FormFeedback,null,o.default.createElement(n.Trans,{id:"Maximum length is {MAX_LENGTH, plural, other {# characters}}. Typed {0, plural, one {# char} other {# chars}}",values:{0:t.value.length,MAX_LENGTH:50}})):null)})})},578:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormSetup=void 0;var a=r(188),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),o=r(457),l=r(25),i=r(98),d=r(104),u=r(18),s=r(106),c=r(27),m=r(838);var f=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function l(e){try{d(a.next(e))}catch(t){o(t)}}function i(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(l,i)}d((a=a.apply(e,t||[])).next())})};t.OrderFormSetup=(({order:e,render:t})=>{(0,n.useEffect)(()=>{e.isVamInitialized&&e.initVam()},[]);const r=(0,n.useCallback)((t,r)=>f(void 0,void 0,void 0,function*(){try{yield e.updateVam(t.values),r.setValue("agreements",(a=t.values.agreements,e.agreements.map(e=>{const t=a.find(s.RM.propEq("id",e.id));return t?Object.assign({},e,{isConfirmed:t.isConfirmed}):e})))}catch(n){(0,c.reportError)(n,{formState:t.values})}var a}),[]),p=(0,a.useDebounceCallback)(r,1500);return n.default.createElement(l.Route,null,({history:r})=>n.default.createElement(o.Form,{defaultValues:function(e){return{firstname:e.firstname,lastname:e.lastname,email:e.email,phone:e.phone,phonePrefix:e.phonePrefix||e.defaultPhonePrefix,note:e.note,payment:d.PaymentGateEnum.Gopay,agreements:[]}}(e),validateOnMount:!0,onChange:p,onSubmit:t=>f(void 0,void 0,void 0,function*(){try{yield e.submitOrder(t),r.replace("/finish")}catch(a){(0,u.logOrder)(a)}})},e=>n.default.createElement(i.Form,{onSubmit:e.submitForm},n.default.createElement(m.OrderFormAutoFill,{onFill:t=>e.setAllValues(t)}),t(e))))})},579:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderSubmitLine=void 0,r(843);var a=u(r(1)),n=r(186),o=r(103),l=u(r(580)),i=r(452),d=r(62);function u(e){return e&&e.__esModule?e:{default:e}}t.OrderSubmitLine=(({onClick:e,canSubmit:t=!1})=>a.default.createElement(i.WithOrder,{observe:!0,render:r=>a.default.createElement("div",{className:"order__form__submit__line"},a.default.createElement("div",{className:"order__form__submit__line__strip"}),a.default.createElement(n.PrimaryButton,{className:"order__form__submit__line__button",color:"primary",size:"md",onClick:e,disabled:!t||r.isSubmitting,"data-testid":"orderSubmitButton"},a.default.createElement(o.Desktop,null,r.isSubmitting?a.default.createElement(l.default,null):d.i18n._("Place order").toLocaleUpperCase()),a.default.createElement(o.Mobile,null,d.i18n._("Place order").toLocaleUpperCase())))}))},580:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(1)),n=o(r(190));function o(e){return e&&e.__esModule?e:{default:e}}var l=(0,r(50).withTheme)(e=>a.default.createElement(n.default,{name:"three-bounce",color:e.theme.primary,fadeIn:"none"}));t.default=l},581:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderGoPayModal=void 0;var a=r(99),n=r(187),o=u(r(1)),l=u(r(50)),i=r(494),d=u(r(51));function u(e){return e&&e.__esModule?e:{default:e}}const s=l.default.div.withConfig({displayName:"TextPadding"})`
  padding-bottom: 2rem;
`;t.OrderGoPayModal=(({order:e})=>o.default.createElement(n.Observer,null,()=>o.default.createElement(i.AlertModal,{isOpen:e.isGoPayChecking,headerText:"GoPay platba"},o.default.createElement(s,null,o.default.createElement(a.Trans,{id:"Checking your GoPay payment, please wait..."})),o.default.createElement(d.default,{noMargin:!0}))))},585:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryFinishView=t.FinishViewQuery=t.FinishViewOrderFragment=void 0;var a,n=(a=r(20))&&a.__esModule?a:{default:a},o=r(107),l=r(26);const i=n.default`
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
`;t.FinishViewQuery=d;const u=(0,o.buildQuery)(d);t.QueryFinishView=u},589:function(e,t,r){},735:function(e,t,r){},737:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AddressInput=void 0,r(738);var a=r(99),n=r(102),o=f(r(1)),l=r(98),i=f(r(50)),d=r(42),u=r(62),s=f(r(740)),c=f(r(741)),m=f(r(742));function f(e){return e&&e.__esModule?e:{default:e}}const p=i.default.div.withConfig({displayName:"AddressInputStyled"})`
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
`},738:function(e,t,r){},740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GeolocationButton=void 0;var a=o(r(1)),n=r(98);function o(e){return e&&e.__esModule?e:{default:e}}const l=o(r(50)).default.span.withConfig({displayName:"Container"})`
  color: ${({theme:e})=>e.secondary};
  cursor: pointer;
  position: absolute;
  right: 0.4rem;
  top: 0.15rem;
`,i=({onClick:e,isVisible:t=!1})=>t?a.default.createElement(l,null,a.default.createElement(n.InputGroupAddon,{addonType:"append",onClick:e},a.default.createElement("span",{className:"flaticon-gps"}))):null;t.GeolocationButton=i;var d=i;t.default=d},741:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ResolvedAddress=void 0;var a=o(r(1)),n=o(r(190));function o(e){return e&&e.__esModule?e:{default:e}}const l=({address:e,isVisible:t,isResolving:r,onValidClick:o})=>r?a.default.createElement("div",{className:"address__input__box__resolved wait"},a.default.createElement(n.default,{name:"ball-beat",fadeIn:"none"})):t?a.default.createElement("div",{className:"address__input__box__resolved",onClick:o},e):null;t.ResolvedAddress=l;var i=l;t.default=i},742:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(r(2)),n=i(r(196)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),l=r(98);function i(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var u=class extends o.Component{constructor(){super(...arguments),this.state={value:""},this.onSearch=(0,n.default)(this.props.onSearch,2e3),this.onChange=(e=>{const t=e.target.value||"";this.setState({value:t}),this.onSearch(t.trim())}),this.onKeyPress=(e=>{"Enter"===e.key&&(this.onSearch.clear(),this.props.onSearch(this.state.value.trim()))}),this.inputRef=null,this.onInputMount=(e=>{this.inputRef=e})}componentDidMount(){this.setFocus()}componentDidUpdate(e){e.isVisible!==this.props.isVisible&&this.setFocus()}isVisible(){return!1!==this.props.isVisible}isSearching(){return!1!==this.props.isSearching}setFocus(){this.isVisible()&&null!==this.inputRef&&this.inputRef.focus()}render(){const{inputProps:e}=this.props,t=!this.isVisible()||this.isSearching();return o.default.createElement(l.Input,d({className:(0,a.default)({address__input__hidden:t}),onChange:this.onChange,onKeyPress:this.onKeyPress,value:this.state.value,innerRef:this.onInputMount,autoFocus:!0},e))}};t.default=u},743:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AddressSubmit=void 0;var a=i(r(1)),n=r(186),o=i(r(550)),l=r(62);function i(e){return e&&e.__esModule?e:{default:e}}const d=({enabled:e,onClick:t,onPrefetch:r})=>a.default.createElement(o.default,null,a.default.createElement(n.PrimaryButton,{color:"primary",disabled:!e,onClick:t,onMouseEnter:()=>e&&r()},l.i18n._("Confirm address").toLocaleUpperCase()));t.AddressSubmit=d;var u=d;t.default=u},744:function(e,t,r){},746:function(e,t,r){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.InitialMapLocationQuery=void 0;const n=((a=r(20))&&a.__esModule?a:{default:a}).default`
  query GInitialLocation {
    initialLocation: resolveLocation {
      gpsCoordinates {
        latitude
        longitude
      }
    }
  }
`;t.InitialMapLocationQuery=n},747:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeliveryMapPanning=void 0;var a,n=r(188),o=r(3),l=r(102),i=(a=r(1))&&a.__esModule?a:{default:a},d=r(42),u=r(18),s=r(551);t.DeliveryMapPanning=(({initialLocation:e})=>{const{location:t,map:r}=(0,d.useRoot)();(0,l.useDisposable)(()=>(0,o.reaction)(()=>r.clickPoint,e=>{e&&(t.withUserLocation(e),r.clearClickPoint())}));const a=(0,n.useFullComputed)(()=>t.geoPoint?((0,u.logMap)("pan to user location",t.geoPoint),t.geoPoint):t.geolocationPoint?((0,u.logMap)("pan to geolocation",t.geolocationPoint),t.geolocationPoint):e?((0,u.logMap)("pan to initial location",e),e):void(0,u.logMap)("no pan location available"),[e]);return(0,l.useObserver)(()=>i.default.createElement(s.MapPanning,{gps:a.get(),map:r}))})},759:function(e,t,r){},761:function(e,t,r){e.exports=r.p+"static/media/logo-commerce-01.6d4e5108.svg"},762:function(e,t,r){e.exports=r.p+"static/media/logo-commerce-02.8afb6c6f.svg"},763:function(e,t,r){e.exports=r.p+"static/media/logo-doveze.e13c0122.svg"},764:function(e,t,r){e.exports=r.p+"static/media/logo-gopay.48aa4030.png"},773:function(e,t,r){},775:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SidedishPicker=void 0,r(776);var a,n=r(187),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),l=(a=r(778))&&a.__esModule?a:{default:a},i=r(779);t.SidedishPicker=(({recipe:e,selection:t,onToggle:r})=>o.default.createElement(n.Observer,null,()=>o.default.createElement("div",{className:"food__sidedish__picker"},e.categories.map(e=>o.default.createElement(o.Fragment,{key:e.id},o.default.createElement("div",{className:"food__sidedish__picker__category"},e.nameLabel," ",o.default.createElement(l.default,{minCount:e.minCount,maxCount:e.maxCount})),e.sideDishes.map(a=>o.default.createElement(i.SidedishCheckbox,{key:`${a.id}-${e.id}`,sidedish:a,isSelected:t.includes(a.id),canBeSelected:!0,onClick:()=>r(a.id)})))))))},776:function(e,t,r){},778:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a};var o=({minCount:e,maxCount:t})=>{return n.default.createElement("span",null,"")};t.default=o},779:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SidedishCheckbox=void 0,r(780);var a=l(r(1)),n=r(98),o=l(r(50));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const u=(0,o.default)(e=>{var{isSelected:t,canBeSelected:r}=e,o=d(e,["isSelected","canBeSelected"]);return a.default.createElement(n.Button,o)}).withConfig({displayName:"SidedishCheckboxThemed"})`
  background-color: ${e=>e.isSelected?e.theme.tertiary:"transparent"} !important;
  color: ${e=>e.isSelected?e.theme.tertiaryText:"initial"} !important;
  &:hover {
    border-color: ${({theme:e})=>e.tertiaryHover} !important;
  }
`;t.SidedishCheckbox=(e=>a.default.createElement(u,i({size:"xs",outline:!0,"data-testid":`sidedishCheckbox__${e.sidedish.id}`,disabled:!e.canBeSelected&&!e.isSelected},e),a.default.createElement("div",{className:"food__sidedish__picker__button__name"},e.sidedish.nameLabel),a.default.createElement("div",{className:"food__sidedish__picker__button__price"},e.sidedish.price.formattedValue)))},780:function(e,t,r){},782:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartOrderButton=void 0;var a,n=r(3),o=r(187),l=(a=r(1))&&a.__esModule?a:{default:a},i=r(186),d=r(62);var u=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function l(e){try{d(a.next(e))}catch(t){o(t)}}function i(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(l,i)}d((a=a.apply(e,t||[])).next())})};t.CartOrderButton=(({selection:e,onConfirm:t})=>{const r=n.observable.box(!1);return l.default.createElement(o.Observer,null,()=>l.default.createElement(i.PrimaryButton,{className:"modal__body__button",disabled:r.get(),"data-testid":"cartOrderButton",onClick:()=>u(void 0,void 0,void 0,function*(){r.set(!0),yield t(),r.set(!1)})},d.i18n._("{0, plural, =0 {Order without sidedish} one {Order with this sidedish} other {Order with # sidedishes}}",{0:e.length}).toLocaleUpperCase()))})},783:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartContents=void 0;var a,n=r(187),o=(a=r(1))&&a.__esModule?a:{default:a},l=r(784),i=r(785),d=r(790);t.CartContents=(({order:e,rootModel:t})=>o.default.createElement("div",{className:"cart__items__container"},o.default.createElement("div",{className:"cart__items__container__content"},o.default.createElement(n.Observer,null,()=>e.items.map(e=>o.default.createElement(i.CartItem,{key:e.id,item:e,isActive:t.order.lastActiveRecipeId===e.recipe.id,onEdit:()=>t.order.setUsedRecipeId(e.recipe.id)}))),o.default.createElement(l.CartDiscounts,{order:e}),o.default.createElement(d.CartTotals,{order:e}))))},784:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartDiscounts=void 0;var a,n=r(99),o=(a=r(1))&&a.__esModule?a:{default:a};t.CartDiscounts=(({order:e})=>e.discounts&&e.discounts.length>0?o.default.createElement("div",null,e.discounts.map(({code:e,description:t,price:{formattedValue:r}})=>o.default.createElement("div",{key:e,className:"cart__item__summary"},o.default.createElement("div",{className:"cart__item__summary__label"},t),o.default.createElement("div",{className:"cart__item__summary__price"},r))),o.default.createElement("div",{className:"cart__item__summary"},o.default.createElement("div",{className:"cart__item__summary__label"},o.default.createElement(n.Trans,{id:"Total discount"})),o.default.createElement("div",{className:"cart__item__summary__price"},e.totalDiscount.formattedValue))):null)},785:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartItem=void 0,r(786);var a=u(r(1)),n=u(r(50)),o=r(103),l=r(62),i=r(788),d=r(789);function u(e){return e&&e.__esModule?e:{default:e}}const s=n.default.div.withConfig({displayName:"EditButtonsContainerStyled"})`
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
`;t.CartItem=(({item:e,isActive:t,onEdit:r})=>a.default.createElement(c,{isActive:t},a.default.createElement(s,null,a.default.createElement(d.RemoveCartItemButton,{itemId:e.id,enabled:!e.automatic}),a.default.createElement(o.Desktop,null,a.default.createElement(i.EditCartItemButton,{itemId:e.id,enabled:0!==e.recipe.sideDishCount&&!e.automatic,onClick:r}))),a.default.createElement("div",{className:"cart__item__description"},a.default.createElement("div",{className:"cart__item__item__name","data-testid":`cardItem__Name__${e.recipe.id}`},e.recipe.nameLabel),a.default.createElement("div",{className:"cart__item__item__side__dish","data-testid":`cardItem__SideDish__${e.recipe.id}`},e.sideDishes.length>0?`+ ${e.sideDishes.map(({recipe:e})=>e.nameLabel).join(",")}`:e.recipe.sideDishCount>0&&a.default.createElement("span",null,l.i18n._("Without sidedish").toLocaleLowerCase()))),a.default.createElement("div",{className:"cart__item__item__price","data-testid":`cardItem__Price__${e.id}`},e.automatic?l.i18n._("For free"):e.price.formattedValue)))},786:function(e,t,r){},788:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EditCartItemButton=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(105),l=r(558);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};t.EditCartItemButton=(e=>{var{itemId:t,onClick:r}=e,a=d(e,["itemId","onClick"]);const u=n.default.createElement(l.CartItemButton,i({icon:"edit",color:"#d9a700"},a));return a.enabled?n.default.createElement(o.Link,{to:`/order/change/${t}`,onClick:r,"data-testid":`editCartItemButton__${t}`},u):u})},789:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RemoveCartItemButton=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(42),l=r(558);t.RemoveCartItemButton=(({itemId:e,enabled:t})=>n.default.createElement(o.WithRoot,{render:r=>n.default.createElement(l.CartItemButton,{icon:"delete",color:"#99230e",enabled:t,data_testid:"removeCartItemButton",onClick:()=>r.order.removeItemFromCart(e)})}))},790:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartTotals=void 0;var a=i(r(197)),n=i(r(1)),o=i(r(50)),l=r(62);function i(e){return e&&e.__esModule?e:{default:e}}const d=o.default.div.withConfig({displayName:"CartItemSummaryTotalThemed"})`
  background: ${({theme:e})=>(0,a.default)(e.primary).alpha(.7).hsl().string()} !important;
`;t.CartTotals=(({order:e})=>n.default.createElement("div",null,e.coverPrice&&e.coverPrice.value?n.default.createElement("div",{key:"casePrice",className:"cart__item__summary"},n.default.createElement("div",{className:"cart__item__summary__label"},l.i18n._("Covers")),n.default.createElement("div",{className:"cart__item__summary__price"},e.coverPrice.formattedValue)):null,e.transportFee&&e.transportFee.value?n.default.createElement("div",{key:"transportFee",className:"cart__item__summary"},n.default.createElement("div",{className:"cart__item__summary__label"},l.i18n._("Delivery")),n.default.createElement("div",{className:"cart__item__summary__price"},e.transportFee.formattedValue)):null,n.default.createElement(d,{key:"totalPrice",className:"cart__item__summary cart__item__summary__total"},n.default.createElement("div",{className:"cart__item__summary__label"},l.i18n._("Total")),n.default.createElement("div",{className:"cart__item__summary__price","data-testid":"cardItemSummary__Price"},e.totalSum.formattedValue))))},791:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartIsEmpty=void 0;var a=l(r(1)),n=l(r(50)),o=r(62);function l(e){return e&&e.__esModule?e:{default:e}}const i=n.default.span.withConfig({displayName:"CartIsEmptyThemed"})`
  color: ${({theme:e})=>e.secondary};
`;t.CartIsEmpty=(()=>a.default.createElement(i,{className:"cart__column__cart__empty__label","data-testid":"cartIsEmpty"},`${o.i18n._("Cart is empty")}...`))},792:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChangeCartModal=void 0;var a,n=r(99),o=(a=r(1))&&a.__esModule?a:{default:a},l=r(105),i=r(98),d=r(107),u=r(106),s=r(192),c=r(557);const m=(0,d.buildQuery)(s.OrderCartForItemQuery);t.ChangeCartModal=(({root:e})=>o.default.createElement(l.Route,{path:"/order/change/:itemId",render:({match:t,history:r})=>o.default.createElement(m,{variables:{itemId:t.params.itemId},renderLoading:!1,renderError:()=>o.default.createElement(i.Alert,{color:"warning"},o.default.createElement(n.Trans,{id:"Error in loading cart item. Issue was reported."})),render:(a,{loading:n})=>o.default.createElement(c.CartModal,{recipe:a.item&&a.item.recipe,initialSelection:a.item?a.item.sideDishes.map(u.RM.path(["recipe","id"])):[],onConfirm:r=>e.order.updateItem(t.params.itemId,r),onClose:()=>r.goBack(),isLoading:n})})}))},793:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.CategoryNavigator=void 0,r(794);var a=s(r(2)),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),o=s(r(560)),l=s(r(803)),i=s(r(564)),d=r(805),u=r(103);function s(e){return e&&e.__esModule?e:{default:e}}class c extends n.Component{constructor(){super(...arguments),this.state={scroll:0},this.ref=null,this.onMounted=(e=>{this.ref=e}),this.onSwiping=((e,t)=>this.ref.scrollLeft+=t/5),this.onSwiped=(()=>this.setState({scroll:this.ref.scrollLeft}))}render(){return n.default.createElement(n.default.Fragment,null,n.default.createElement(u.Desktop,null,e=>e?n.default.createElement("div",{className:"category__navigator"},this.props.children):null),n.default.createElement(u.Mobile,null,n.default.createElement(l.default,{className:"category__navigator category__navigator__nowrap",onSwiping:this.onSwiping,onSwiped:this.onSwiped,innerRef:this.onMounted},this.props.children)))}}const m=({categories:e,setActiveCategoryIndex:t,activeCategoryIndex:r})=>n.default.createElement(c,null,0===e.length?null:e.map((e,l)=>n.default.createElement(o.default.Link,{to:e.nameLabel,key:e.id,className:(0,a.default)("category__navigator__scroll__link",{active:r===l}),onSetActive:()=>t(l),offset:-168,smooth:!0,spy:!0,"data-testid":`categoryNavigatorScrollLink__${e.id}`},n.default.createElement("div",{className:"category__navigator__scroll__link__circle"},n.default.createElement("span",{className:`flaticon-${e.pictogram}`})),n.default.createElement("div",{className:"category__navigator__scroll__link__description"},n.default.createElement(i.default,{lines:2},e.nameLabel)))));t.CategoryNavigator=m;var f=(0,d.compose)((0,d.withState)("activeCategoryIndex","setActiveCategoryIndex",0))(m);t.default=f},794:function(e,t,r){},806:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FoodMenu=void 0;var a=r(99),n=r(187),o=s(r(1)),l=s(r(50)),i=r(103),d=s(r(807)),u=s(r(808));function s(e){return e&&e.__esModule?e:{default:e}}const c=l.default.div.withConfig({displayName:"FoodMenuStyled"})`
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
`;t.FoodMenu=class extends o.default.Component{shouldComponentUpdate({shouldUpdate:e}){return e}orderLimitReached(){const{orderItemCount:e,rootModel:{config:t}}=this.props;return e>=t.orderItemsMax}render(){const{categories:e,inCart:t,rootModel:{order:r,user:l}}=this.props,i=!this.orderLimitReached();return o.default.createElement(c,null,o.default.createElement(m,null,0===e.length?o.default.createElement("h3",null,o.default.createElement(a.Trans,{id:"Food menu is empty. We are sorry."})):o.default.createElement(n.Observer,null,()=>e.map(e=>o.default.createElement(d.default,{key:e.id,category:e},e.recipes.map(e=>o.default.createElement(u.default,{key:e.id,recipe:e,inCart:t[e.id]||0,isActive:r.lastActiveRecipeId===e.id,canAddToCart:i,onClick:()=>{i?r.setUsedRecipeId(e.id):l.showOrderLimit()},onPrefetch:()=>{e.sideDishCount>0&&r.prefetchFood(e.id)}})))))))}}},807:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(r(1)),n=i(r(560)),o=i(r(50)),l=r(103);function i(e){return e&&e.__esModule?e:{default:e}}const d=o.default.div.withConfig({displayName:"FoodCategoryStyled"})`
  color: #474747;
  display: block;
  font-size: 1.6rem;
  & a {
    text-decoration: none;
  }
`,u=(0,o.default)("h3").withConfig({displayName:"FoodCategoryTitleStyled"})`
  ${l.mediaMobile`margin: 1rem 0 0.4rem 1rem;`};
`;var s=({category:e,children:t})=>a.default.createElement(n.default.Element,{name:e.nameLabel},a.default.createElement(d,null,a.default.createElement(u,null,e.nameLabel),t));t.default=s},808:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(809);var a=d(r(1)),n=d(r(564)),o=d(r(50)),l=r(103),i=r(811);function d(e){return e&&e.__esModule?e:{default:e}}const u=o.default.div.withConfig({displayName:"FoodMenuItemStyled"})`
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
`;var p=({recipe:e,inCart:t,onPrefetch:r,isActive:o,onClick:l,canAddToCart:d})=>a.default.createElement(i.LinkToCart,{recipeId:e.id,hasSidedish:e.sideDishCount>0,canAddToCart:d,onClick:l,"data-testid":`foodMenuItem__${e.id}`},a.default.createElement(u,{onMouseEnter:r,isActive:o},e.image&&a.default.createElement(s,{src:e.image,alt:e.nameLabel}),a.default.createElement(c,null),a.default.createElement(m,{"data-testid":`foodMenuItem__Price__${e.id}`},e.price.formattedValue),t>0?a.default.createElement(f,null,`${t}x`):"",a.default.createElement("h4",null,a.default.createElement(n.default,{lines:2,"data-testid":`foodMenuItem__Name__${e.id}`},e.nameLabel)),a.default.createElement("p",null,a.default.createElement(n.default,{lines:2,"data-testid":`foodMenuItem__Description__${e.id}`},e.descriptionLabel))));t.default=p},809:function(e,t,r){},811:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LinkToCart=void 0;var a=d(r(1)),n=r(105),o=d(r(50)),l=r(42),i=r(103);function d(e){return e&&e.__esModule?e:{default:e}}const u=(0,o.default)(n.Link).withConfig({displayName:"LinkStyled"})`
  color: inherit;
  &:visited div {
    border: inherit;
  }
`;t.LinkToCart=(({recipeId:e,hasSidedish:t,canAddToCart:r,onClick:n,children:o})=>r?t?a.default.createElement(u,{to:{pathname:`/order/add/${e}`},onClick:n},o):a.default.createElement(l.WithRoot,{render:({order:t})=>a.default.createElement(i.Mobile,null,r=>a.default.createElement("div",{onClick:()=>{n(),r?t.addFromRecipeMobile(e):t.addFromRecipe(e)}},o))}):a.default.createElement("div",{onClick:n},o))},812:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderLimitModal=void 0;var a,n=r(102),o=(a=r(1))&&a.__esModule?a:{default:a},l=r(494),i=r(42),d=r(62);t.OrderLimitModal=(()=>{const{user:e}=(0,i.useRoot)();return(0,n.useObserver)(()=>o.default.createElement(l.AlertModal,{isOpen:!e.orderLimitAlertHidden,onClose:e.hideOrderLimit,headerText:d.i18n._("Limit has been reached")},d.i18n._("The maximum number of items in the order has been reached")))})},817:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormInputCheckbox=void 0;var a=i(r(1)),n=r(457),o=r(98),l=i(r(50));function i(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};const s=l.default.div.withConfig({displayName:"CheckboxContainerStyled"})`
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
`;t.FormInputCheckbox=(e=>{var{field:t,defaultValue:r=!1,validate:o,children:l}=e,i=u(e,["field","defaultValue","validate","children"]);return a.default.createElement(n.Field,{field:t,defaultValue:r,validate:o},e=>a.default.createElement(s,null,a.default.createElement(c,d({type:"checkbox",value:e.value,onChange:t=>e.setValue(t.target.checked),invalid:e.touched&&Boolean(e.error)},i)),a.default.createElement(m,null,l)))})},832:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderEmailInput=t.OrderEmailInputValidator=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(98),l=r(501),i=r(62);const d=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,u=e=>{const t=e.trim();return""===t?i.i18n._("E-mail is mandatory"):d.test(t)?null:i.i18n._("E-mail format is not valid")};t.OrderEmailInputValidator=u;t.OrderEmailInput=(()=>n.default.createElement(o.FormGroup,null,n.default.createElement(l.FormTextInput,{field:"email",type:"email",autoComplete:"email",placeholder:"E-mail",showFeedback:!0,validate:u,"data-testid":"orderEmailInput"})))},833:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderNameInput=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(98),l=r(501),i=r(62);t.OrderNameInput=(()=>n.default.createElement(o.FormGroup,null,n.default.createElement(o.InputGroup,null,n.default.createElement(l.FormTextInput,{field:"firstname",autoComplete:"given-name",placeholder:i.i18n._("First name"),showFeedback:!0,validate:e=>""===e.trim()?i.i18n._("First name is mandatory"):null,"data-testid":"orderNameInput__FirstName"}),n.default.createElement(l.FormTextInput,{field:"lastname",autoComplete:"family-name",placeholder:i.i18n._("Last name"),showFeedback:!0,validate:e=>""===e.trim()?i.i18n._("Last name is mandatory"):null,"data-testid":"orderNameInput__LastName"}))))},834:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderPhoneInput=t.OrderPhonePrefixInputValidator=t.OrderPhoneInputValidator=void 0;var a,n=(a=r(1))&&a.__esModule?a:{default:a},o=r(98),l=r(501),i=r(62);const d=e=>""===e.trim()?i.i18n._("Phone is mandatory"):null;t.OrderPhoneInputValidator=d;const u=e=>""===e.trim()?i.i18n._("Phone prefix is mandatory"):null;t.OrderPhonePrefixInputValidator=u;t.OrderPhoneInput=(()=>n.default.createElement(o.FormGroup,null,n.default.createElement(o.InputGroup,null,n.default.createElement(l.FormTextInput,{field:"phonePrefix",autoComplete:"tel-country-code",placeholder:"+",showFeedback:!0,validate:u}),n.default.createElement(l.FormTextInput,{field:"phone",type:"tel",autoComplete:"tel-national",placeholder:i.i18n._("Phone"),showFeedback:!0,validate:d,style:{width:"55%"},"data-testid":"orderPhoneInput__Phone"}))))},835:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderPromoInputUI=h,t.default=void 0;var a,n=r(188),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(1)),l=r(189),i=r(98),d=(a=r(50))&&a.__esModule?a:{default:a},u=r(186),s=r(42),c=r(836),m=r(62),f=r(837);var p=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function l(e){try{d(a.next(e))}catch(t){o(t)}}function i(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(l,i)}d((a=a.apply(e,t||[])).next())})};const _=d.default.div.withConfig({displayName:"CodesPanel"})`
  margin-top: 0.5rem;
  & button {
    margin-right: 0.5rem;
    font-size: 0.7rem;
  }
`;function h({codes:e,onCodeAdd:t,onCodeRemove:r,autoSubmitAfterTimeout:a=2e3}){const l=(0,o.useRef)(null),[d,s]=(0,o.useState)(!1),c=(0,o.useCallback)(()=>{if(l.current&&!l.current.disabled){const e=l.current.value.trim();e.length>0&&(s(!0),l.current.disabled=!0,l.current.value=m.i18n._("Validating promo code {code}...",{code:e}),t(e).then(()=>{s(!1),l.current&&(l.current.value="")}).catch(()=>{l.current&&(l.current.value=e)}).finally(()=>{s(!1),l.current&&(l.current.disabled=!1,l.current.focus())}))}},[t]),f=(0,n.useDebounceCallback)(c,a),p=(0,o.useCallback)(e=>{"Enter"===e.key&&(c(),e.preventDefault())},[]);return o.default.createElement(i.FormGroup,null,o.default.createElement(i.InputGroup,null,o.default.createElement(i.Input,{innerRef:l,autoComplete:"off",disabled:d,placeholder:m.i18n._("Promo codes"),onChange:f,onKeyDown:p,onBlur:c,onPaste:c})),o.default.createElement(_,null,e.map(({id:e,code:t})=>o.default.createElement(u.SecondaryButton,{key:e,onClick:()=>r(e)},`${t} \u2716`))))}var v=()=>{const{order:e}=(0,s.useRoot)(),{data:t}=(0,l.useQuery)(f.OrderPromoCodesQuery,{suspend:!1,variables:{orderId:e.orderId}}),r=(0,c.useGuardedMutation)(f.AddOrderPromoMutation,{refetchQueries:["GCartView"]}),a=(0,o.useCallback)(t=>p(void 0,void 0,void 0,function*(){if(!e.orderId)return;const a=yield r({orderId:e.orderId,code:t});a&&a.addOrderPromoCode.userErrors.length&&e.submitFailed(a.addOrderPromoCode.userErrors)}),[]),n=(0,c.useGuardedMutation)(f.RemoveOrderPromoMutation,{refetchQueries:["GCartView"]});return o.default.createElement(h,{codes:t&&t.order?t.order.promoCodes:[],onCodeAdd:a,onCodeRemove:t=>{e.orderId&&n({codeId:t,orderId:e.orderId})}})};t.default=v},836:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useGuardedMutation=function(e,t={}){const r=i.i18n._("Unexpected error occured while sending a request. Our team was notified about the issue."),u=(0,a.useCallback)(e=>{const t=e.filter(o.RM.propEq("showToUser",!0));0===t.length?window.alert(r):window.alert(t.map(o.RM.prop("message")).join("\n"))},[]),s=(0,a.useCallback)(e=>{if(function(e){return e.hasOwnProperty("graphQLErrors")}(e)){if(e.networkError)return void window.alert(i.i18n._("Communication with server has failed. Please retry the operation in a moment again."));if(e.graphQLErrors)return void u(e.graphQLErrors)}(0,l.reportError)(e)},[]),c=(0,n.useMutation)(e,t);return e=>d(this,void 0,void 0,function*(){try{const r=yield c({variables:e});return r.errors?(u(r.errors),null):r.data?r.data:null}catch(t){return s(t),null}})};var a=r(1),n=r(189),o=r(106),l=r(27),i=r(62),d=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function l(e){try{d(a.next(e))}catch(t){o(t)}}function i(e){try{d(a.throw(e))}catch(t){o(t)}}function d(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(l,i)}d((a=a.apply(e,t||[])).next())})}},837:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RemoveOrderPromoMutation=t.AddOrderPromoMutation=t.OrderPromoCodesQuery=void 0;var a,n=(a=r(20))&&a.__esModule?a:{default:a},o=r(26);const l=n.default`
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
`;t.RemoveOrderPromoMutation=d},838:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormAutoFill=void 0;var a;(a=r(1))&&a.__esModule,r(186),r(104),r(577);t.OrderFormAutoFill=(({onFill:e})=>null)},843:function(e,t,r){}}]);
//# sourceMappingURL=1.de192b71.chunk.js.map