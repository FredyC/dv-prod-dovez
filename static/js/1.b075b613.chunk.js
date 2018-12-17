(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{439:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SelectButtonThemed=t.MobileHeaderButton=t.PrimaryRoutedButton=t.SecondaryButton=t.PrimaryButton=void 0;var a,o=(a=r(0))&&a.__esModule?a:{default:a},n=r(435),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(60)),i=r(182),d=r(579);var u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(r[a[o]]=e[a[o]])}return r};const s=(0,l.default)(n.Button).withConfig({displayName:"PrimaryButton"})`
  background-color: ${_("secondary")};
  border-color: ${_("secondary")};
  &:hover {
    background-color: ${_("secondaryHover")};
    border-color: ${_("secondaryHover")};
  }
  &:active {
    background-color: #262626 !important;
  }
`;t.PrimaryButton=s,s.displayName="PrimaryButton";const c=(0,l.default)(n.Button).withConfig({displayName:"SecondaryButton"})`
  background-color: ${_("tertiary")};
  border-color: ${_("tertiary")};
  &:hover {
    background-color: ${_("tertiaryHover")};
    border-color: ${_("tertiaryHover")};
  }
`;t.SecondaryButton=c,c.displayName="SecondaryButton";const m=(0,l.default)(d.RouteButton).withConfig({displayName:"PrimaryRoutedButton"})`
  background-color: ${_("secondary")};
  border-color: ${_("secondary")};
  &:hover {
    background-color: ${_("secondaryHover")};
    border-color: ${_("secondaryHover")};
  }
`;t.PrimaryRoutedButton=m,m.displayName="PrimaryRoutedButton";const f=(0,l.default)(e=>{var{isConfirm:t,theme:r}=e,a=u(e,["isConfirm","theme"]);return o.default.createElement(n.Button,a)}).withConfig({displayName:"MobileHeaderButton"})`
  background-color: ${({isConfirm:e,theme:t})=>e?t.primary:"white"};
  color: ${({isConfirm:e,theme:t})=>e?"white":t.primary};
`;t.MobileHeaderButton=f,f.displayName="MobileHeaderButton";const p=(0,l.default)(e=>{var{selected:t,theme:r}=e,a=u(e,["selected","theme"]);return o.default.createElement(n.Button,a)}).withConfig({displayName:"SelectButtonThemed"})`
  ${({theme:e,selected:t})=>l.css`
    ${i.mediaDesktop`
      background-color: ${t?e.tertiary:e.unselected}
    `};
    ${i.mediaMobile`
    background-color: ${t?e.tertiary:"white"}`}
    border-color: ${t?e.tertiary:e.unselected};
    color: ${t?e.tertiaryText:e.unselectedText};
    height: 3.7rem;
    &:hover {
      background-color: ${t?e.tertiaryHover:e.unselectedHover};
      border-color: ${t?e.tertiaryHover:e.unselectedHover};
      color: ${t?e.tertiaryText:e.unselectedText};
    }
  `};
`;function _(e){return({theme:t})=>t[e]}t.SelectButtonThemed=p,p.displayName="SelectButtonThemed"},442:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WithOrder=void 0;var a,o=(a=r(0))&&a.__esModule?a:{default:a},n=r(21),l=r(48);t.WithOrder=(({render:e,observe:t,redirect:r=!1})=>o.default.createElement(l.WithRoot,{observe:t,render:({order:t})=>t.hasOrder?e(t):r?o.default.createElement(n.Redirect,{to:"/"}):null}))},445:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ColStyleRight=t.ColStyleLeft=t.ColStyle=void 0;var a,o=(a=r(0))&&a.__esModule?a:{default:a},n=r(435);t.ColStyle=(({children:e})=>o.default.createElement(n.Col,{className:"pl-sm-0",sm:"12",md:"12",lg:"10",xl:"8"},e));t.ColStyleLeft=(({children:e})=>o.default.createElement(n.Col,{className:"pl-sm-0",sm:"8",md:"8",lg:"6",xl:"5"},e));t.ColStyleRight=(({children:e})=>o.default.createElement(n.Col,{className:"pl-sm-0",sm:"4",md:"4",lg:"4",xl:"3"},e))},470:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShopStatus=void 0;var a=r(110),o=r(0);class n extends o.PureComponent{constructor(){super(...arguments),this.timer=null}componentDidMount(){if(!this.props.timedUpdate)return;const e=()=>{this.forceUpdate(),this.timer=setTimeout(e,3e4)};e()}componentWillUnmount(){this.timer&&clearTimeout(this.timer)}render(){const{status:e,render:t,now:r=new Date,openThresholdInMinutes:o,closeThresholdInMinutes:n}=this.props,{isOpen:i,willCloseAt:d,willOpenAt:u}=e;let s;return t({decision:s=i?l(d,n,r)?"ClosingSoon":"Open":l(u,o,r)?"OpeningSoon":"Closed",get openingIn(){return u&&(0,a.differenceInMinutes)(u,new Date)},get closingIn(){return d&&(0,a.differenceInMinutes)(d,new Date)}})}}function l(e,t,r){return Boolean(e)&&Math.abs((0,a.differenceInMinutes)(e,r))<=t}t.ShopStatus=n,n.defaultProps={openThresholdInMinutes:30,closeThresholdInMinutes:30}},472:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseMap=void 0;var a=r(183),o=l(r(0)),n=r(453);function l(e){return e&&e.__esModule?e:{default:e}}const i=l(r(60)).default.div.withConfig({displayName:"MapContainerStyled"})`
  border-radius: 0 0 0.5rem 0.5rem;
  overflow: hidden;
  height: calc(100% - 3.75rem);
`,d=(0,n.withGoogleMap)(({children:e})=>o.default.createElement(o.default.Fragment,null,e));t.BaseMap=(({render:e,model:t})=>o.default.createElement(d,{containerElement:o.default.createElement(i,{className:"map__container","data-testid":"googleMap"}),mapElement:o.default.createElement("div",{style:{height:"100%",position:"relative"}})},o.default.createElement(a.Observer,null,()=>o.default.createElement(n.GoogleMap,{ref:t.setMapRef,zoom:t.zoom,center:t.center,onCenterChanged:t.updatePosition,onZoomChanged:t.updateZoom,onClick:t.onClick,options:(()=>({streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1,zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_TOP}}))()},e({})))))},483:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShopAddress=void 0;var a,o=(a=r(0))&&a.__esModule?a:{default:a},n=r(61);t.ShopAddress=(({address:e})=>{if(!e||!e.location)return o.default.createElement("span",null,n.i18n._("Unknown address"));const{location:t}=e;return o.default.createElement("span",null,`${t.street} ${t.houseNumber},\n ${t.city}`)})},484:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AlertModal=void 0,r(485);var a,o=(a=r(0))&&a.__esModule?a:{default:a},n=r(435);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var i=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(r[a[o]]=e[a[o]])}return r};t.AlertModal=(e=>{var{isOpen:t,headerText:r,onClose:a,children:d}=e,u=i(e,["isOpen","headerText","onClose","children"]);return o.default.createElement(n.Modal,l({isOpen:t,toggle:a,className:"modal__container"},u,{"data-testid":"alertModal"}),o.default.createElement(n.ModalHeader,{tag:n.Container,toggle:a,className:"modal__header"},o.default.createElement("span",null,r)),o.default.createElement(n.ModalBody,{className:"modal__body"},o.default.createElement("div",{className:"modal__body__content"},d)))})},485:function(e,t,r){},486:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BackgroundThemed=void 0;var a=n(r(0)),o=n(r(60));function n(e){return e&&e.__esModule?e:{default:e}}var l=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(r[a[o]]=e[a[o]])}return r};const i=e=>{var{imageName:t,fallbackColor:r="#5b453c",fixed:n=!1,size:i="inherit",children:d,component:u="div"}=e,s=l(e,["imageName","fallbackColor","fixed","size","children","component"]);return a.default.createElement((0,o.default)(u)`
      background-image: ${e=>`url(${e.theme[t]})`};
      background-attachment: ${e=>n?"fixed":"inherit"};
      background-repeat: no-repeat;
      background-position: left top;
      background-size: ${e=>i};
    `,s,d)};t.BackgroundThemed=i;var d=i;t.default=d},491:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormTextInput=void 0;var a,o=(a=r(0))&&a.__esModule?a:{default:a},n=r(447),l=r(435);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(r[a[o]]=e[a[o]])}return r};t.FormTextInput=(e=>{var{field:t,validate:r,showFeedback:a=!1}=e,u=d(e,["field","validate","showFeedback"]);return o.default.createElement(n.Field,{field:t,validate:r,render:e=>o.default.createElement(o.default.Fragment,null,o.default.createElement(l.Input,i({},u,{value:e.value,onChange:t=>e.setValue(t.target.value),onBlur:()=>e.setTouched(!0),invalid:e.touched&&Boolean(e.error)})),a&&o.default.createElement(l.FormFeedback,null,e.error))})})},494:function(e,t,r){},495:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FinishViewFooter=void 0;var a=r(94),o=s(r(0)),n=r(435),l=s(r(60)),i=r(439),d=r(182),u=r(61);function s(e){return e&&e.__esModule?e:{default:e}}const c=l.default.div.withConfig({displayName:"CenteredButtonContainer"})`
  text-align: center;
`;t.FinishViewFooter=(({finish:{androidApp:e,iosApp:t}})=>o.default.createElement(o.default.Fragment,null,o.default.createElement(d.Desktop,null,(e||t)&&o.default.createElement("div",{className:"finish__view__apps__propagation"},o.default.createElement("div",{className:"finish__view__apps__propagation__header"},o.default.createElement(a.Trans,{id:"What about mobile app?"})),o.default.createElement("div",{className:"finish__view__apps__propagation__description"},o.default.createElement(a.Trans,{id:"We have prepared mobile app, so you could order from anywhere!"})),e&&o.default.createElement("a",{href:e.url},o.default.createElement(n.Button,{className:"finish__view__apps__propagation__button",color:"secondary"},"Google Play")),t&&o.default.createElement("a",{href:t.url},o.default.createElement(n.Button,{className:"finish__view__apps__propagation__button",color:"secondary"},"App Store"))),o.default.createElement(c,null,o.default.createElement(i.PrimaryRoutedButton,{to:"/",className:"finish__view__submit__line__button","data-testid":"finishViewFooterBackButton"},u.i18n._("Back to home page").toLocaleUpperCase()))),o.default.createElement(d.Mobile,null,o.default.createElement("div",{className:"finish__view__submit__line",style:{textAlign:"center"}},o.default.createElement("div",{className:"finish__view__submit__line__strip"}),o.default.createElement(i.PrimaryRoutedButton,{to:"/",className:"finish__view__submit__line__button","data-testid":"finishViewFooterBackButton"},u.i18n._("Back to home page").toLocaleUpperCase())))))},496:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FinishViewLoader=void 0;var a,o=(a=r(0))&&a.__esModule?a:{default:a},n=r(442),l=r(580);t.FinishViewLoader=(({render:e})=>o.default.createElement(n.WithOrder,{redirect:!0,render:t=>o.default.createElement(l.QueryFinishView,{variables:{branchId:t.branchId,orderId:t.orderId},render:t=>e(t)})}))},497:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FinishViewOrder=void 0;var a=r(94),o=u(r(0)),n=u(r(60)),l=r(97),i=r(98),d=r(61);function u(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const c=n.default.div.withConfig({displayName:"HeaderThemed"})`
  background-color: ${({theme:e})=>e.primary};
`,m=n.default.div.withConfig({displayName:"PriceThemed"})`
  background-color: ${({theme:e})=>e.primary};
`,f=n.default.div.withConfig({displayName:"PriceCornerThemed"})`
  border-top-color: ${({theme:e})=>e.primary} !important;
`;t.FinishViewOrder=(({order:e})=>o.default.createElement(o.default.Fragment,null,o.default.createElement(c,{className:"finish__view__header"},o.default.createElement("div",{className:"finish__view__header__inner"},o.default.createElement("span",{className:"flaticon-transport-1 finish__view__header__icon"}),o.default.createElement("h3",null,o.default.createElement(a.Trans,{id:"It's done! Thank you :-)"})))),o.default.createElement("h4",null,o.default.createElement(a.Trans,{id:"Your order was successfully accepted!"})," ",function({orderPayments:e}){return e.some(p(l.PaymentGateEnum.Cash))?d.i18n._("You will pay at pickup."):e.some(p(l.PaymentGateEnum.Gopay))?d.i18n._("You have payed."):null}(e)),o.default.createElement("div",{className:"finish__view__items"},o.default.createElement("div",{className:"finish__view__items__look__to"},o.default.createElement(a.Trans,{id:"You can look forward to:"})),e.items.map(e=>o.default.createElement(_,s({key:e.id},e))),o.default.createElement(f,{className:"finish__view__items__price__corner"}),o.default.createElement(m,{className:"finish__view__items__price"},function({orderPayments:e,totalSum:t}){return e.some(p(l.PaymentGateEnum.Cash))?d.i18n._("Total cost to be payed:"):e.some(p(l.PaymentGateEnum.Gopay))?d.i18n._("Total cost payed:"):null}(e)," ",o.default.createElement("b",null,e.totalSum.formattedValue)))));const p=i.RM.pathEq(["paymentMethod","paymentType","enum"]);function _({recipe:e,sideDishes:t}){return o.default.createElement("div",null,o.default.createElement("b",null,e.nameLabel),t.length?` + ${t.map(i.RM.path(["recipe","nameLabel"])).join(",")}`:null)}},498:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FinishViewSupport=void 0;var a=r(94),o=n(r(0));function n(e){return e&&e.__esModule?e:{default:e}}const l=n(r(60)).default.a.withConfig({displayName:"PhoneNumberLinkStyled"})`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;t.FinishViewSupport=(({branch:e})=>o.default.createElement("div",{className:"finish__view__support"},o.default.createElement("h4",null,o.default.createElement(a.Trans,{id:"Any question? Do you have a problem? Call:"})),o.default.createElement("span",{className:"flaticon-technology finish__view__support__icon"}),o.default.createElement("span",{className:"finish__view__support__phone"},o.default.createElement(l,{href:`tel:${e.phone}`},e.phone))))},499:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderMethod=void 0,r(584);var a,o=r(183),n=(a=r(0))&&a.__esModule?a:{default:a},l=r(439),i=r(48),d=r(97),u=r(98),s=r(61);const c=({orderModel:e,orderMethod:t,onChange:r,onPrefetch:a,children:i})=>n.default.createElement(o.Observer,null,()=>n.default.createElement(l.SelectButtonThemed,{selected:e.orderMethod===t,onMouseEnter:a,onClick:()=>{e.useOrderMethod(t),r(e)},"data-testid":`orderMethod-${t}`,"data-testselected":e.orderMethod===t},i));t.OrderMethod=(({onChange:e})=>n.default.createElement(i.WithRoot,{observe:!1,render:({order:t})=>n.default.createElement("div",{className:"order__method"},n.default.createElement(c,{orderModel:t,orderMethod:d.DeliveryTypeEnum.Messenger,onChange:e||u.RM.identity},n.default.createElement("span",{className:"flaticon-transport"}),s.i18n._("I want to deliver").toLocaleUpperCase()),n.default.createElement(c,{orderModel:t,orderMethod:d.DeliveryTypeEnum.Pickup,onChange:e||u.RM.identity,onPrefetch:t.prefetchPickup},n.default.createElement("span",{className:"flaticon-restaurant"}),s.i18n._("I'll pick up").toLocaleUpperCase()))}))},540:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeliveryMap=void 0,r(730);var a,o=r(1),n=(a=r(0))&&a.__esModule?a:{default:a},l=r(453),i=r(104),d=r(732),u=r(738);t.DeliveryMap=class extends n.default.Component{constructor(){super(...arguments),this.disposers=[]}componentDidMount(){const{rootModel:{location:e,map:t}}=this.props;this.disposers=[(0,o.reaction)(()=>t.clickPoint,r=>{r&&(e.withUserLocation(r),t.panToLocation(r))}),(0,o.autorun)(()=>{t.isReady&&e.hasLocation&&t.panToLocation(e.geoPoint)})]}componentWillUnmount(){this.disposers.forEach(e=>e())}render(){const{onConfirm:e,rootModel:{location:t,order:r}}=this.props;return n.default.createElement(n.default.Fragment,null,n.default.createElement(l.Marker,{position:t.latLng,defaultDraggable:!0,onDragEnd:({latLng:e})=>{t.withUserLocation((0,i.latLngToGps)(e))}}),n.default.createElement("div",{className:"delivery__map__address"},n.default.createElement(d.AddressInput,null)),n.default.createElement("div",{className:"delivery__map__submit"},n.default.createElement(u.AddressSubmit,{enabled:t.isDeliveryAddress,onClick:()=>{r.setBranch(t.branchId),r.createDeliveryOrder(e)},onPrefetch:()=>r.prefetchFoodMenu(t.branchId)})))}}},541:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(739);var a,o=(a=r(0))&&a.__esModule?a:{default:a};var n=({children:e})=>o.default.createElement("div",{className:"button__stripe"},o.default.createElement("div",{className:"button__stripe__bar"}),o.default.createElement("div",{className:"button__stripe__button"},e));t.default=n},542:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShopClosingTimeModal=void 0;var a,o=r(94),n=r(100),l=(a=r(0))&&a.__esModule?a:{default:a},i=r(484),d=r(470),u=r(48),s=r(61);t.ShopClosingTimeModal=(({status:e})=>{const{user:t}=(0,u.useRoot)();return e?l.default.createElement(d.ShopStatus,{status:e,render:({decision:e,openingIn:r})=>l.default.createElement(n.Observer,null,()=>l.default.createElement(i.AlertModal,{isOpen:("Closed"===e||"OpeningSoon"===e)&&!t.closingTimeAlertHidden,onClose:t.hideClosingTime,headerText:s.i18n._("We are closed right now")},s.i18n._("We're sorry, but we do not accept new orders at this time."),"OpeningSoon"===e&&l.default.createElement(o.Trans,{id:"You can prepare your order because we are {openingIn, plural, one {opening in 1 minute} other {opening in # minutes}} !",values:{openingIn:r}})))}):null})},543:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShopHeaderIcons=void 0,r(753);var a=u(r(0)),o=r(445),n=u(r(755)),l=u(r(756)),i=u(r(757)),d=u(r(758));function u(e){return e&&e.__esModule?e:{default:e}}t.ShopHeaderIcons=(()=>a.default.createElement(o.ColStyle,null,a.default.createElement("img",{src:i.default,className:"shop__header__icons__doveze","data-testid":"ShopHeaderIcons__AppLogo",alt:"logo Doveze.cz"}),a.default.createElement("img",{src:l.default,className:"shop__header__icons__commerce",alt:"MasterCard"}),a.default.createElement("img",{src:n.default,className:"shop__header__icons__commerce","data-testid":"ShopHeaderIcons__VisaLogo",alt:"VISA"}),a.default.createElement("img",{src:d.default,className:"shop__header__icons__gopay",alt:"GoPay","data-testid":"ShopHeaderIcons__GoPayLogo"})))},544:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ShopStatusDisplay=void 0;var a=r(94),o=i(r(0)),n=i(r(60)),l=r(470);function i(e){return e&&e.__esModule?e:{default:e}}const d=n.default.span.withConfig({displayName:"StatusDisplayOpen"})`
  font-style: italic;
  color: #0f9849;
`,u=n.default.span.withConfig({displayName:"StatusDisplayClosed"})`
  font-style: italic;
  color: #b40000;
`;t.ShopStatusDisplay=(({status:e})=>e?o.default.createElement(l.ShopStatus,{status:e,render:e=>{switch(e.decision){case"Open":return o.default.createElement(d,{"data-testid":"statusDisplayOpen"},o.default.createElement(a.Trans,{id:"We are open"}));case"OpeningSoon":return o.default.createElement(u,null,o.default.createElement(a.Trans,{id:"{0, plural, one {Opening in 1 minute} other {Opening in # minutes}}",values:{0:e.openingIn}}));case"ClosingSoon":return o.default.createElement(d,null,o.default.createElement(a.Trans,{id:"{0, plural, one {Closing in 1 minute} other {Closing in # minutes}}",values:{0:e.closingIn}}));case"Closed":return o.default.createElement(u,null,o.default.createElement(a.Trans,{id:"Closed"}))}}}):null)},545:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartView=void 0,r(767);var a,o=(a=r(0))&&a.__esModule?a:{default:a},n=r(442),l=r(546),i=r(777),d=r(785),u=r(107),s=r(786);t.CartView=(()=>o.default.createElement(n.WithOrder,{redirect:!0,render:e=>o.default.createElement(o.default.Fragment,null,o.default.createElement(l.AddToCartModal,{order:e}),o.default.createElement(s.ChangeCartModal,{root:e.root}),o.default.createElement(u.QueryCartView,{variables:{orderId:e.orderId},renderLoading:!1,render:({order:t})=>o.default.createElement(o.default.Fragment,null,t&&0!==t.countWares?o.default.createElement(i.CartContents,{order:t,rootModel:e.root}):o.default.createElement(d.CartIsEmpty,null))}))}))},546:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AddToCartModal=void 0;var a,o=r(94),n=(a=r(0))&&a.__esModule?a:{default:a},l=r(184),i=r(435),d=r(182),u=r(99),s=r(189),c=r(547);const m=(0,u.buildQuery)(s.OrderCartForRecipeQuery);t.AddToCartModal=(({order:e})=>n.default.createElement(l.Route,{path:"/order/add/:recipeId",render:({match:t,history:r})=>n.default.createElement(m,{variables:{recipeId:t.params.recipeId},renderLoading:!1,renderError:()=>n.default.createElement(i.Alert,{color:"warning"},n.default.createElement(o.Trans,{id:"Error in loading cart item. Issue was reported."})),render:(a,{loading:o})=>n.default.createElement(d.Mobile,null,l=>n.default.createElement(c.CartModal,{recipe:a.recipe,onConfirm:r=>l?(e.addFromRecipeMobile(t.params.recipeId,r),Promise.resolve()):e.addFromRecipe(t.params.recipeId,r),onClose:()=>r.goBack(),isLoading:o}))})}))},547:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartModal=void 0;var a,o=r(94),n=r(1),l=(a=r(0))&&a.__esModule?a:{default:a},i=r(435);r(485);var d=r(769),u=r(776);var s=function(e,t,r,a){return new(r||(r=Promise))(function(o,n){function l(e){try{d(a.next(e))}catch(t){n(t)}}function i(e){try{d(a.throw(e))}catch(t){n(t)}}function d(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(l,i)}d((a=a.apply(e,t||[])).next())})};t.CartModal=(({recipe:e,initialSelection:t=[],onConfirm:r,onClose:a,isLoading:c})=>{const m=n.observable.array(t);return l.default.createElement(i.Modal,{isOpen:!0,toggle:a,className:"modal__container",autoFocus:!0,backdrop:"static",fade:!1},l.default.createElement(i.ModalHeader,{toggle:a,tag:i.Container,className:"modal__header"},l.default.createElement("span",null,l.default.createElement(o.Trans,{id:"Do you want to add something?"}))),l.default.createElement(i.ModalBody,{className:"modal__body"},l.default.createElement("div",{className:"modal__body__content"},c||!e?null:l.default.createElement(l.default.Fragment,null,l.default.createElement("h3",{className:"modal__body__food__name"},e.nameLabel),l.default.createElement("span",{className:"modal__body__food_description"},e.descriptionLabel),l.default.createElement(d.SidedishPicker,{recipe:e,selection:m,onToggle:e=>{m.includes(e)?m.remove(e):m.push(e)}}))),l.default.createElement("div",{className:"modal__body__button__line"},l.default.createElement("div",{className:"modal__body__button__strip"}),l.default.createElement(u.CartOrderButton,{selection:m,onConfirm:()=>s(void 0,void 0,void 0,function*(){yield r(Array.from(m)),a()}),enabled:!c}))))})},548:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartItemButton=void 0;var a,o=(a=r(0))&&a.__esModule?a:{default:a},n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(60));const l=n.default.div.withConfig({displayName:"CartItemButtonStyled"})`
  display: inline-block;
  border-radius: 3rem;
  background: white;
  width: 1.8rem;
  height: 1.8rem;
  text-align: left;
  vertical-align: top;
  padding: 0 0 0 0rem;
  margin: 0.3rem 0.1rem 0 0.1rem;
  ${function({color:e,enabled:t}){const r=t?e:"#8d8d8d";return n.css`
    color: ${r};
    border: 2px solid ${r};
  `}};
  ${function({enabled:e}){return e?n.css`
        cursor: pointer;
        &:hover {
          background: #c9e8d7;
          color: #1d1d1d;
          border-color: #1d1d1d;
        }
      `:n.css`
        cursor: default;
      `}};
`;const i=n.default.span.withConfig({displayName:"CartItemButtonIcon"})`
  &:before {
    font-size: 0.8rem;
    margin-left: 0.36rem;
  }
`;t.CartItemButton=(({color:e,icon:t,onClick:r,enabled:a=!0,data_testid:n})=>o.default.createElement(l,{color:e,enabled:a,onClick:r,"data-testid":n},o.default.createElement(i,{icon:t,className:`flaticon-${t}`})))},549:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FoodMenuView=void 0;var a=u(r(0)),o=r(442),n=u(r(787)),l=r(800),i=r(108),d=r(806);function u(e){return e&&e.__esModule?e:{default:e}}t.FoodMenuView=(()=>a.default.createElement(o.WithOrder,{render:e=>a.default.createElement(i.QueryFoodMenu,{variables:{branchId:e.branchId},render:({wareCategories:t})=>a.default.createElement(a.default.Fragment,null,a.default.createElement(d.OrderLimitModal,null),a.default.createElement(n.default,{categories:t}),a.default.createElement(i.QueryFoodMenuCartPresence,{variables:{orderId:e.orderId},renderLoading:!1,render:({order:r},{loading:o})=>a.default.createElement(l.FoodMenu,{categories:t,rootModel:e.root,inCart:function(e){return e?e.reduce((e,t)=>{const r=t.recipe.id;return e[r]||(e[r]=0),e[r]+=1,e},{}):{}}(r&&r.items),orderItemCount:r?r.items.length:0,shouldUpdate:Boolean(r&&!o)})}))})}))},555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormStorageNotice=void 0;var a=r(94),o=r(183),n=c(r(0)),l=r(435),i=c(r(60)),d=r(182),u=r(48),s=r(556);function c(e){return e&&e.__esModule?e:{default:e}}const m=(0,i.default)(l.Button).withConfig({displayName:"NoticeButton"})`
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
`;t.OrderFormStorageNotice=(e=>n.default.createElement(u.WithRoot,{render:e=>n.default.createElement(s.QueryOrderForm,{skip:!e.order.hasOrder||null!==e.user.rememberForm,variables:{orderId:e.order.orderId},renderLoading:()=>null,render:({order:t})=>n.default.createElement(o.Observer,null,()=>t.countWares>0&&null===e.user.rememberForm?n.default.createElement(f,{"data-testid":"orderFormStorageNotice"},n.default.createElement("p",null,n.default.createElement(a.Trans,{id:"This app is using secure storage for keeping filled form data. It's not cookies, these are stored in your browser only."})),n.default.createElement(m,{color:"success",size:"sm",onClick:e.user.setFormRememberYes,"data-testid":"orderFormStorageNotice__Yes"},n.default.createElement(a.Trans,{id:"Always remember"})),n.default.createElement(m,{color:"secondary",size:"sm",onClick:e.user.setFormRememberNo,"data-testid":"orderFormStorageNotice__No"},n.default.createElement(a.Trans,{id:"Do not store"}))):null)})}))},556:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryOrderForm=t.OrderFormQuery=void 0;var a,o=(a=r(18))&&a.__esModule?a:{default:a},n=r(99);const l=o.default`
  query GOrderForm($orderId: ID!) {
    order(id: $orderId) {
      id
      countWares
    }
  }
`;t.OrderFormQuery=l;const i=(0,n.buildQuery)(l);t.QueryOrderForm=i},557:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderErrorModal=void 0;var a,o=r(94),n=(a=r(0))&&a.__esModule?a:{default:a},l=r(435);r(485);var i=r(442);t.OrderErrorModal=(()=>n.default.createElement(i.WithOrder,{observe:!0,render:e=>n.default.createElement(l.Modal,{isOpen:e.hasErrors,toggle:e.clearErrors,className:"modal__container"},n.default.createElement(l.ModalHeader,{toggle:e.clearErrors,tag:l.Container,className:"modal__header"},n.default.createElement("span",null,n.default.createElement(o.Trans,{id:"Order can not be completed"}))),n.default.createElement(l.ModalBody,{className:"modal__body"},n.default.createElement("div",{className:"modal__body__content"},e.hasErrors&&e.submitErrors.map((e,t)=>n.default.createElement("div",{key:t},e))),n.default.createElement("div",{className:"modal__body__button__line"},n.default.createElement("div",{className:"modal__body__button__strip"}),n.default.createElement(l.Button,{className:"modal__body__button",color:"primary",onClick:e.clearErrors},n.default.createElement(o.Trans,{id:"I understand"})),"/>")))}))},558:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderAgreements=void 0;var a,o=r(1),n=r(100),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),i=r(435),d=(a=r(60))&&a.__esModule?a:{default:a},u=r(811),s=r(48),c=r(61);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const f=(0,d.default)(i.Button).withConfig({displayName:"ButtonStyled"})`
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
`;t.OrderAgreements=(()=>{const e=(0,l.useRef)(o.observable.array([])).current,t=(0,l.useCallback)(t=>()=>{e.includes(t)?e.remove(t):e.push(t)},[]),{order:r}=(0,s.useRoot)();return(0,n.useObserver)(()=>l.default.createElement(l.default.Fragment,null,r.agreements.map((r,a)=>l.default.createElement("div",m({key:r.id},(e=>e.isConfirmed?{style:{display:"none"}}:{})(r)),l.default.createElement(u.FormInputCheckbox,{field:["agreements",a,"isConfirmed"],validate:e=>!r.isMandatory||r.isConfirmed||e?null:"Agreement is mandatory","data-testid":`orderAgreement__Check__${r.id}`},l.default.createElement("span",{dangerouslySetInnerHTML:{__html:r.name}}),r.isMandatory&&" * ",r.description&&l.default.createElement(l.default.Fragment,null,l.default.createElement(f,{color:"link",onClick:t(r.id),"data-testid":`orderAgreement__MoreButton__${r.id}`},e.includes(r.id)?c.i18n._("Less").toLocaleLowerCase():c.i18n._("More...").toLocaleLowerCase()),l.default.createElement(i.Collapse,{isOpen:e.includes(r.id)},l.default.createElement(p,{"data-testid":`orderAgreement__Info__${r.id}`,dangerouslySetInnerHTML:{__html:r.description}}))))))))})},566:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormInputs=void 0;var a=u(r(0)),o=r(826),n=r(827),l=r(567),i=r(828),d=u(r(829));function u(e){return e&&e.__esModule?e:{default:e}}t.OrderFormInputs=(()=>a.default.createElement(a.default.Fragment,null,a.default.createElement(n.OrderNameInput,null),a.default.createElement(i.OrderPhoneInput,null),a.default.createElement(o.OrderEmailInput,null),a.default.createElement(l.OrderNoteInput,null),a.default.createElement(d.default,null)))},567:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderNoteInput=t.MAX_LENGTH=void 0;var a,o=r(94),n=(a=r(0))&&a.__esModule?a:{default:a},l=r(447),i=r(435),d=r(61);t.MAX_LENGTH=50;const u=e=>e&&e.trim().length>50,s=e=>u(e)?d.i18n._("Note is too long"):null;t.OrderNoteInput=(()=>{const e=d.i18n._("eg. ingredients change, company...");return n.default.createElement(l.Field,{field:"note",validate:s,render:t=>n.default.createElement(i.FormGroup,null,n.default.createElement(i.Input,{type:"textarea",placeholder:d.i18n._("Note"),title:e,value:t.value,onChange:e=>t.setValue(e.target.value),onBlur:()=>t.setTouched(!0),valid:!t.error,invalid:Boolean(t.error),"data-testid":"orderNoteInput"}),n.default.createElement(i.FormText,null,e),u(t.value)?n.default.createElement(i.FormFeedback,null,n.default.createElement(o.Trans,{id:"Maximum length is {MAX_LENGTH, plural, other {# characters}}. Typed {0, plural, one {# char} other {# chars}}",values:{0:t.value.length,MAX_LENGTH:50}})):null)})})},568:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormSetup=void 0;var a=r(187),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),n=r(447),l=r(21),i=r(435),d=r(97),u=r(20),s=r(98),c=r(26),m=r(832);var f=function(e,t,r,a){return new(r||(r=Promise))(function(o,n){function l(e){try{d(a.next(e))}catch(t){n(t)}}function i(e){try{d(a.throw(e))}catch(t){n(t)}}function d(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(l,i)}d((a=a.apply(e,t||[])).next())})};t.OrderFormSetup=(({order:e,render:t})=>{(0,o.useEffect)(()=>{e.isVamInitialized&&e.initVam()},[]);const r=(0,o.useCallback)((t,r)=>f(void 0,void 0,void 0,function*(){try{yield e.updateVam(t.values),r.setValue("agreements",(a=t.values.agreements,e.agreements.map(e=>{const t=a.find(s.RM.propEq("id",e.id));return t?Object.assign({},e,{isConfirmed:t.isConfirmed}):e})))}catch(o){(0,c.reportError)(o,{formState:t.values})}var a}),[]),p=(0,a.useDebounceCallback)(r,1500);return o.default.createElement(l.Route,null,({history:r})=>o.default.createElement(n.Form,{defaultValues:function(e){return{firstname:e.firstname,lastname:e.lastname,email:e.email,phone:e.phone,phonePrefix:e.phonePrefix||e.defaultPhonePrefix,note:e.note,payment:d.PaymentGateEnum.Gopay,agreements:[]}}(e),validateOnMount:!0,onChange:p,onSubmit:t=>f(void 0,void 0,void 0,function*(){try{yield e.submitOrder(t),r.replace("/finish")}catch(a){(0,u.logOrder)(a)}})},e=>o.default.createElement(i.Form,{onSubmit:e.submitForm},o.default.createElement(m.OrderFormAutoFill,{onFill:t=>e.setAllValues(t)}),t(e))))})},569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderSubmitLine=void 0,r(837);var a=u(r(0)),o=r(439),n=r(182),l=u(r(570)),i=r(442),d=r(61);function u(e){return e&&e.__esModule?e:{default:e}}t.OrderSubmitLine=(({onClick:e,canSubmit:t=!1})=>a.default.createElement(i.WithOrder,{observe:!0,render:r=>a.default.createElement("div",{className:"order__form__submit__line"},a.default.createElement("div",{className:"order__form__submit__line__strip"}),a.default.createElement(o.PrimaryButton,{className:"order__form__submit__line__button",color:"primary",size:"md",onClick:e,disabled:!t||r.isSubmitting,"data-testid":"orderSubmitButton"},a.default.createElement(n.Desktop,null,r.isSubmitting?a.default.createElement(l.default,null):d.i18n._("Place order").toLocaleUpperCase()),a.default.createElement(n.Mobile,null,d.i18n._("Place order").toLocaleUpperCase())))}))},570:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)),o=n(r(186));function n(e){return e&&e.__esModule?e:{default:e}}var l=(0,r(60).withTheme)(e=>a.default.createElement(o.default,{name:"three-bounce",color:e.theme.primary,fadeIn:"none"}));t.default=l},571:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderGoPayModal=void 0;var a=r(94),o=r(183),n=u(r(0)),l=u(r(60)),i=r(484),d=u(r(49));function u(e){return e&&e.__esModule?e:{default:e}}const s=l.default.div.withConfig({displayName:"TextPadding"})`
  padding-bottom: 2rem;
`;t.OrderGoPayModal=(({order:e})=>n.default.createElement(o.Observer,null,()=>n.default.createElement(i.AlertModal,{isOpen:e.isGoPayChecking,headerText:"GoPay platba"},n.default.createElement(s,null,n.default.createElement(a.Trans,{id:"Checking your GoPay payment, please wait..."})),n.default.createElement(d.default,{noMargin:!0}))))},579:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RouteButton=void 0;var a,o=(a=r(0))&&a.__esModule?a:{default:a},n=r(184),l=r(435);var i=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(r[a[o]]=e[a[o]])}return r};t.RouteButton=(e=>{var{to:t,replace:r,children:a}=e,d=i(e,["to","replace","children"]);return o.default.createElement(n.Link,{to:t,replace:r},o.default.createElement(l.Button,d,a))})},580:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryFinishView=t.FinishViewQuery=t.FinishViewOrderFragment=void 0;var a,o=(a=r(18))&&a.__esModule?a:{default:a},n=r(99),l=r(25);const i=o.default`
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
`;t.FinishViewOrderFragment=i;const d=o.default`
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
`;t.FinishViewQuery=d;const u=(0,n.buildQuery)(d);t.QueryFinishView=u},584:function(e,t,r){},730:function(e,t,r){},732:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AddressInput=void 0,r(733);var a=r(94),o=m(r(0)),n=r(435),l=m(r(60)),i=r(48),d=r(61),u=m(r(735)),s=m(r(736)),c=m(r(737));function m(e){return e&&e.__esModule?e:{default:e}}const f=l.default.div.withConfig({displayName:"AddressInputStyled"})`
  width: 90%;
  min-width: 14rem;
  margin: 1rem auto;
  text-align: center;
`,p=l.default.div.withConfig({displayName:"AddressInputBoxStyled"})`
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
`;t.AddressInput=(()=>o.default.createElement(i.WithRoot,{observe:!0,render:({location:e})=>o.default.createElement(f,null,o.default.createElement(p,null,o.default.createElement(n.InputGroup,{size:"sm"},o.default.createElement(s.default,{address:e.address||"",isVisible:e.hasAddress,isResolving:e.isResolving,onValidClick:e.clearAddress}),o.default.createElement(c.default,{inputProps:{placeholder:d.i18n._("Type address or choose it from map"),autoComplete:"shipping street-address"},onSearch:e.withUserAddress,isVisible:!e.hasAddress,isSearching:e.isResolving}),o.default.createElement(u.default,{onClick:e.attemptGeolocation,isVisible:e.isGeolocationAvailable&&!e.isResolving}))),e.hasFinishedSearch?function(e){return!1===e.isResolved?o.default.createElement(_,{color:"danger"},o.default.createElement(a.Trans,{id:"Address was not recognized."})):!1===e.isStreetAddress?o.default.createElement(_,{color:"warning"},o.default.createElement(a.Trans,{id:"Please enter address with house number."})):!1===e.inDeliveryLocation?o.default.createElement(_,{color:"warning"},o.default.createElement(a.Trans,{id:"Meal can't be delivered to your chosen address by any restaurant."})):null}(e):null)}));const _=(0,l.default)(n.Alert).withConfig({displayName:"NoMouseAlert"})`
  pointer-events: none;
`},733:function(e,t,r){},735:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GeolocationButton=void 0;var a=n(r(0)),o=r(435);function n(e){return e&&e.__esModule?e:{default:e}}const l=n(r(60)).default.span.withConfig({displayName:"Container"})`
  color: ${({theme:e})=>e.secondary};
  cursor: pointer;
  position: absolute;
  right: 0.4rem;
  top: 0.15rem;
`,i=({onClick:e,isVisible:t=!1})=>t?a.default.createElement(l,null,a.default.createElement(o.InputGroupAddon,{addonType:"append",onClick:e},a.default.createElement("span",{className:"flaticon-gps"}))):null;t.GeolocationButton=i;var d=i;t.default=d},736:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ResolvedAddress=void 0;var a=n(r(0)),o=n(r(186));function n(e){return e&&e.__esModule?e:{default:e}}const l=({address:e,isVisible:t,isResolving:r,onValidClick:n})=>r?a.default.createElement("div",{className:"address__input__box__resolved wait"},a.default.createElement(o.default,{name:"ball-beat",fadeIn:"none"})):t?a.default.createElement("div",{className:"address__input__box__resolved",onClick:n},e):null;t.ResolvedAddress=l;var i=l;t.default=i},737:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(r(185)),o=i(r(193)),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),l=r(435);function i(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var u=class extends n.Component{constructor(){super(...arguments),this.state={value:""},this.onSearch=(0,o.default)(this.props.onSearch,2e3),this.onChange=(e=>{const t=e.target.value||"";this.setState({value:t}),this.onSearch(t.trim())}),this.onKeyPress=(e=>{"Enter"===e.key&&(this.onSearch.clear(),this.props.onSearch(this.state.value.trim()))}),this.inputRef=null,this.onInputMount=(e=>{this.inputRef=e})}componentDidMount(){this.setFocus()}componentDidUpdate(e){e.isVisible!==this.props.isVisible&&this.setFocus()}isVisible(){return!1!==this.props.isVisible}isSearching(){return!1!==this.props.isSearching}setFocus(){this.isVisible()&&null!==this.inputRef&&this.inputRef.focus()}render(){const{inputProps:e}=this.props,t=!this.isVisible()||this.isSearching();return n.default.createElement(l.Input,d({className:(0,a.default)({address__input__hidden:t}),onChange:this.onChange,onKeyPress:this.onKeyPress,value:this.state.value,innerRef:this.onInputMount,autoFocus:!0},e))}};t.default=u},738:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AddressSubmit=void 0;var a=i(r(0)),o=r(439),n=i(r(541)),l=r(61);function i(e){return e&&e.__esModule?e:{default:e}}const d=({enabled:e,onClick:t,onPrefetch:r})=>a.default.createElement(n.default,null,a.default.createElement(o.PrimaryButton,{color:"primary",disabled:!e,onClick:t,onMouseEnter:()=>e&&r()},l.i18n._("Confirm address").toLocaleUpperCase()));t.AddressSubmit=d;var u=d;t.default=u},739:function(e,t,r){},753:function(e,t,r){},755:function(e,t,r){e.exports=r.p+"static/media/logo-commerce-01.6d4e5108.svg"},756:function(e,t,r){e.exports=r.p+"static/media/logo-commerce-02.8afb6c6f.svg"},757:function(e,t,r){e.exports=r.p+"static/media/logo-doveze.e13c0122.svg"},758:function(e,t,r){e.exports=r.p+"static/media/logo-gopay.48aa4030.png"},767:function(e,t,r){},769:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SidedishPicker=void 0,r(770);var a,o=r(183),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),l=(a=r(772))&&a.__esModule?a:{default:a},i=r(773);t.SidedishPicker=(({recipe:e,selection:t,onToggle:r})=>n.default.createElement(o.Observer,null,()=>n.default.createElement("div",{className:"food__sidedish__picker"},e.categories.map(e=>n.default.createElement(n.Fragment,{key:e.id},n.default.createElement("div",{className:"food__sidedish__picker__category"},e.nameLabel," ",n.default.createElement(l.default,{minCount:e.minCount,maxCount:e.maxCount})),e.sideDishes.map(a=>n.default.createElement(i.SidedishCheckbox,{key:`${a.id}-${e.id}`,sidedish:a,isSelected:t.includes(a.id),canBeSelected:!0,onClick:()=>r(a.id)})))))))},770:function(e,t,r){},772:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=(a=r(0))&&a.__esModule?a:{default:a};var n=({minCount:e,maxCount:t})=>{return o.default.createElement("span",null,"")};t.default=n},773:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SidedishCheckbox=void 0,r(774);var a=l(r(0)),o=r(435),n=l(r(60));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(r[a[o]]=e[a[o]])}return r};const u=(0,n.default)(e=>{var{isSelected:t,canBeSelected:r}=e,n=d(e,["isSelected","canBeSelected"]);return a.default.createElement(o.Button,n)}).withConfig({displayName:"SidedishCheckboxThemed"})`
  background-color: ${e=>e.isSelected?e.theme.tertiary:"transparent"} !important;
  color: ${e=>e.isSelected?e.theme.tertiaryText:"initial"} !important;
  &:hover {
    border-color: ${({theme:e})=>e.tertiaryHover} !important;
  }
`;t.SidedishCheckbox=(e=>a.default.createElement(u,i({size:"xs",outline:!0,"data-testid":`sidedishCheckbox__${e.sidedish.id}`,disabled:!e.canBeSelected&&!e.isSelected},e),a.default.createElement("div",{className:"food__sidedish__picker__button__name"},e.sidedish.nameLabel),a.default.createElement("div",{className:"food__sidedish__picker__button__price"},e.sidedish.price.formattedValue)))},774:function(e,t,r){},776:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartOrderButton=void 0;var a,o=r(1),n=r(183),l=(a=r(0))&&a.__esModule?a:{default:a},i=r(439),d=r(61);var u=function(e,t,r,a){return new(r||(r=Promise))(function(o,n){function l(e){try{d(a.next(e))}catch(t){n(t)}}function i(e){try{d(a.throw(e))}catch(t){n(t)}}function d(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(l,i)}d((a=a.apply(e,t||[])).next())})};t.CartOrderButton=(({selection:e,onConfirm:t})=>{const r=o.observable.box(!1);return l.default.createElement(n.Observer,null,()=>l.default.createElement(i.PrimaryButton,{className:"modal__body__button",disabled:r.get(),"data-testid":"cartOrderButton",onClick:()=>u(void 0,void 0,void 0,function*(){r.set(!0),yield t(),r.set(!1)})},d.i18n._("{0, plural, =0 {Order without sidedish} one {Order with this sidedish} other {Order with # sidedishes}}",{0:e.length}).toLocaleUpperCase()))})},777:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartContents=void 0;var a,o=r(183),n=(a=r(0))&&a.__esModule?a:{default:a},l=r(778),i=r(779),d=r(784);t.CartContents=(({order:e,rootModel:t})=>n.default.createElement("div",{className:"cart__items__container"},n.default.createElement("div",{className:"cart__items__container__content"},n.default.createElement(o.Observer,null,()=>e.items.map(e=>n.default.createElement(i.CartItem,{key:e.id,item:e,isActive:t.order.lastActiveRecipeId===e.recipe.id,onEdit:()=>t.order.setUsedRecipeId(e.recipe.id)}))),n.default.createElement(l.CartDiscounts,{order:e}),n.default.createElement(d.CartTotals,{order:e}))))},778:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartDiscounts=void 0;var a,o=r(94),n=(a=r(0))&&a.__esModule?a:{default:a};t.CartDiscounts=(({order:e})=>e.discounts&&e.discounts.length>0?n.default.createElement("div",null,e.discounts.map(({code:e,description:t,price:{formattedValue:r}})=>n.default.createElement("div",{key:e,className:"cart__item__summary"},n.default.createElement("div",{className:"cart__item__summary__label"},t),n.default.createElement("div",{className:"cart__item__summary__price"},r))),n.default.createElement("div",{className:"cart__item__summary"},n.default.createElement("div",{className:"cart__item__summary__label"},n.default.createElement(o.Trans,{id:"Total discount"})),n.default.createElement("div",{className:"cart__item__summary__price"},e.totalDiscount.formattedValue))):null)},779:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartItem=void 0,r(780);var a=u(r(0)),o=u(r(60)),n=r(182),l=r(61),i=r(782),d=r(783);function u(e){return e&&e.__esModule?e:{default:e}}const s=o.default.div.withConfig({displayName:"EditButtonsContainerStyled"})`
  flex: 0 0 auto;
`,c=o.default.div.withConfig({displayName:"CartItemStyled"})`
  width: 100%;
  min-height: 3rem;
  color: #1d1d1d;
  margin: 0 0 0.4rem 0;
  padding: 0.2rem;
  background: ${({isActive:e})=>e?"#b3ebcc":"rgba(255, 255, 255, 0.8)"};
  text-align: left;
  display: flex;
`;t.CartItem=(({item:e,isActive:t,onEdit:r})=>a.default.createElement(c,{isActive:t},a.default.createElement(s,null,a.default.createElement(d.RemoveCartItemButton,{itemId:e.id,enabled:!e.automatic}),a.default.createElement(n.Desktop,null,a.default.createElement(i.EditCartItemButton,{itemId:e.id,enabled:0!==e.recipe.sideDishCount&&!e.automatic,onClick:r}))),a.default.createElement("div",{className:"cart__item__description"},a.default.createElement("div",{className:"cart__item__item__name","data-testid":`cardItem__Name__${e.recipe.id}`},e.recipe.nameLabel),a.default.createElement("div",{className:"cart__item__item__side__dish","data-testid":`cardItem__SideDish__${e.recipe.id}`},e.sideDishes.length>0?`+ ${e.sideDishes.map(({recipe:e})=>e.nameLabel).join(",")}`:e.recipe.sideDishCount>0&&a.default.createElement("span",null,l.i18n._("Without sidedish").toLocaleLowerCase()))),a.default.createElement("div",{className:"cart__item__item__price","data-testid":`cardItem__Price__${e.id}`},e.automatic?l.i18n._("For free"):e.price.formattedValue)))},780:function(e,t,r){},782:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EditCartItemButton=void 0;var a,o=(a=r(0))&&a.__esModule?a:{default:a},n=r(184),l=r(548);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(r[a[o]]=e[a[o]])}return r};t.EditCartItemButton=(e=>{var{itemId:t,onClick:r}=e,a=d(e,["itemId","onClick"]);const u=o.default.createElement(l.CartItemButton,i({icon:"edit",color:"#d9a700"},a));return a.enabled?o.default.createElement(n.Link,{to:`/order/change/${t}`,onClick:r,"data-testid":`editCartItemButton__${t}`},u):u})},783:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RemoveCartItemButton=void 0;var a,o=(a=r(0))&&a.__esModule?a:{default:a},n=r(48),l=r(548);t.RemoveCartItemButton=(({itemId:e,enabled:t})=>o.default.createElement(n.WithRoot,{render:r=>o.default.createElement(l.CartItemButton,{icon:"delete",color:"#99230e",enabled:t,data_testid:"removeCartItemButton",onClick:()=>r.order.removeItemFromCart(e)})}))},784:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartTotals=void 0;var a=i(r(194)),o=i(r(0)),n=i(r(60)),l=r(61);function i(e){return e&&e.__esModule?e:{default:e}}const d=n.default.div.withConfig({displayName:"CartItemSummaryTotalThemed"})`
  background: ${({theme:e})=>(0,a.default)(e.primary).alpha(.7).hsl().string()} !important;
`;t.CartTotals=(({order:e})=>o.default.createElement("div",null,e.coverPrice&&e.coverPrice.value?o.default.createElement("div",{key:"casePrice",className:"cart__item__summary"},o.default.createElement("div",{className:"cart__item__summary__label"},l.i18n._("Covers")),o.default.createElement("div",{className:"cart__item__summary__price"},e.coverPrice.formattedValue)):null,e.transportFee&&e.transportFee.value?o.default.createElement("div",{key:"transportFee",className:"cart__item__summary"},o.default.createElement("div",{className:"cart__item__summary__label"},l.i18n._("Delivery")),o.default.createElement("div",{className:"cart__item__summary__price"},e.transportFee.formattedValue)):null,o.default.createElement(d,{key:"totalPrice",className:"cart__item__summary cart__item__summary__total"},o.default.createElement("div",{className:"cart__item__summary__label"},l.i18n._("Total")),o.default.createElement("div",{className:"cart__item__summary__price","data-testid":"cardItemSummary__Price"},e.totalSum.formattedValue))))},785:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CartIsEmpty=void 0;var a=l(r(0)),o=l(r(60)),n=r(61);function l(e){return e&&e.__esModule?e:{default:e}}const i=o.default.span.withConfig({displayName:"CartIsEmptyThemed"})`
  color: ${({theme:e})=>e.secondary};
`;t.CartIsEmpty=(()=>a.default.createElement(i,{className:"cart__column__cart__empty__label","data-testid":"cartIsEmpty"},`${n.i18n._("Cart is empty")}...`))},786:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChangeCartModal=void 0;var a,o=r(94),n=(a=r(0))&&a.__esModule?a:{default:a},l=r(184),i=r(435),d=r(99),u=r(98),s=r(189),c=r(547);const m=(0,d.buildQuery)(s.OrderCartForItemQuery);t.ChangeCartModal=(({root:e})=>n.default.createElement(l.Route,{path:"/order/change/:itemId",render:({match:t,history:r})=>n.default.createElement(m,{variables:{itemId:t.params.itemId},renderLoading:!1,renderError:()=>n.default.createElement(i.Alert,{color:"warning"},n.default.createElement(o.Trans,{id:"Error in loading cart item. Issue was reported."})),render:(a,{loading:o})=>n.default.createElement(c.CartModal,{recipe:a.item&&a.item.recipe,initialSelection:a.item?a.item.sideDishes.map(u.RM.path(["recipe","id"])):[],onConfirm:r=>e.order.updateItem(t.params.itemId,r),onClose:()=>r.goBack(),isLoading:o})})}))},787:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.CategoryNavigator=void 0,r(788);var a=s(r(185)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),n=s(r(550)),l=s(r(797)),i=s(r(554)),d=r(799),u=r(182);function s(e){return e&&e.__esModule?e:{default:e}}class c extends o.Component{constructor(){super(...arguments),this.state={scroll:0},this.ref=null,this.onMounted=(e=>{this.ref=e}),this.onSwiping=((e,t)=>this.ref.scrollLeft+=t/5),this.onSwiped=(()=>this.setState({scroll:this.ref.scrollLeft}))}render(){return o.default.createElement(o.default.Fragment,null,o.default.createElement(u.Desktop,null,e=>e?o.default.createElement("div",{className:"category__navigator"},this.props.children):null),o.default.createElement(u.Mobile,{className:"category__navigator category__navigator__nowrap"},o.default.createElement(l.default,{onSwiping:this.onSwiping,onSwiped:this.onSwiped,innerRef:this.onMounted},this.props.children)))}}const m=({categories:e,setActiveCategoryIndex:t,activeCategoryIndex:r})=>o.default.createElement(c,null,0===e.length?null:e.map((e,l)=>o.default.createElement(n.default.Link,{to:e.nameLabel,key:e.id,className:(0,a.default)("category__navigator__scroll__link",{active:r===l}),onSetActive:()=>t(l),offset:-168,smooth:!0,spy:!0,"data-testid":`categoryNavigatorScrollLink__${e.id}`},o.default.createElement("div",{className:"category__navigator__scroll__link__circle"},o.default.createElement("span",{className:`flaticon-${e.pictogram}`})),o.default.createElement("div",{className:"category__navigator__scroll__link__description"},o.default.createElement(i.default,{lines:2},e.nameLabel)))));t.CategoryNavigator=m;var f=(0,d.compose)((0,d.withState)("activeCategoryIndex","setActiveCategoryIndex",0))(m);t.default=f},788:function(e,t,r){},800:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FoodMenu=void 0;var a=r(94),o=r(183),n=s(r(0)),l=s(r(60)),i=r(182),d=s(r(801)),u=s(r(802));function s(e){return e&&e.__esModule?e:{default:e}}const c=l.default.div.withConfig({displayName:"FoodMenuStyled"})`
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
`;t.FoodMenu=class extends n.default.Component{shouldComponentUpdate({shouldUpdate:e}){return e}orderLimitReached(){const{orderItemCount:e,rootModel:{config:t}}=this.props;return e>=t.orderItemsMax}render(){const{categories:e,inCart:t,rootModel:{order:r,user:l}}=this.props,i=!this.orderLimitReached();return n.default.createElement(c,null,n.default.createElement(m,null,0===e.length?n.default.createElement("h3",null,n.default.createElement(a.Trans,{id:"Food menu is empty. We are sorry."})):n.default.createElement(o.Observer,null,()=>e.map(e=>n.default.createElement(d.default,{key:e.id,category:e},e.recipes.map(e=>n.default.createElement(u.default,{key:e.id,recipe:e,inCart:t[e.id]||0,isActive:r.lastActiveRecipeId===e.id,canAddToCart:i,onClick:()=>{i?r.setUsedRecipeId(e.id):l.showOrderLimit()},onPrefetch:()=>{e.sideDishCount>0&&r.prefetchFood(e.id)}})))))))}}},801:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(r(0)),o=i(r(550)),n=i(r(60)),l=r(182);function i(e){return e&&e.__esModule?e:{default:e}}const d=n.default.div.withConfig({displayName:"FoodCategoryStyled"})`
  color: #474747;
  display: block;
  font-size: 1.6rem;
  & a {
    text-decoration: none;
  }
`,u=(0,n.default)("h3").withConfig({displayName:"FoodCategoryTitleStyled"})`
  ${l.mediaMobile`margin: 1rem 0 0.4rem 1rem;`};
`;var s=({category:e,children:t})=>a.default.createElement(o.default.Element,{name:e.nameLabel},a.default.createElement(d,null,a.default.createElement(u,null,e.nameLabel),t));t.default=s},802:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(803);var a=d(r(0)),o=d(r(554)),n=d(r(60)),l=r(182),i=r(805);function d(e){return e&&e.__esModule?e:{default:e}}const u=n.default.div.withConfig({displayName:"FoodMenuItemStyled"})`
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
`,s=n.default.img.withConfig({displayName:"FoodMenuItemImage"})`
  width: 6rem;
  height: 6rem;
  display: block;
  float: left;
  margin: -1.05rem 1rem 0 -1.2rem;
  border-radius: 0.8rem 0 0 0.8rem;
  object-fit: cover;
`,c=n.default.div.withConfig({displayName:"FoodMenuItemPriceCorner"})`
  border-top-width: 1.8rem;
  border-top-style: solid;
  border-top-color: ${({theme:e})=>e.primary} !important;
  position: absolute;
  right: 4.799rem;
  top: 1rem;
  width: 0;
  height: 0;
  border-left: 1.8rem solid transparent;
`,m=n.default.div.withConfig({displayName:"FoodMenuItemPrice"})`
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
`,f=n.default.div.withConfig({displayName:"FoodMenuItemCount"})`
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
`;var p=({recipe:e,inCart:t,onPrefetch:r,isActive:n,onClick:l,canAddToCart:d})=>a.default.createElement(i.LinkToCart,{recipeId:e.id,hasSidedish:e.sideDishCount>0,canAddToCart:d,onClick:l,"data-testid":`foodMenuItem__${e.id}`},a.default.createElement(u,{onMouseEnter:r,isActive:n},e.image&&a.default.createElement(s,{src:e.image,alt:e.nameLabel}),a.default.createElement(c,null),a.default.createElement(m,{"data-testid":`foodMenuItem__Price__${e.id}`},e.price.formattedValue),t>0?a.default.createElement(f,null,`${t}x`):"",a.default.createElement("h4",null,a.default.createElement(o.default,{lines:2,"data-testid":`foodMenuItem__Name__${e.id}`},e.nameLabel)),a.default.createElement("p",null,a.default.createElement(o.default,{lines:2,"data-testid":`foodMenuItem__Description__${e.id}`},e.descriptionLabel))));t.default=p},803:function(e,t,r){},805:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LinkToCart=void 0;var a=d(r(0)),o=r(184),n=d(r(60)),l=r(48),i=r(182);function d(e){return e&&e.__esModule?e:{default:e}}const u=(0,n.default)(o.Link).withConfig({displayName:"LinkStyled"})`
  color: inherit;
  &:visited div {
    border: inherit;
  }
`;t.LinkToCart=(({recipeId:e,hasSidedish:t,canAddToCart:r,onClick:o,children:n})=>r?t?a.default.createElement(u,{to:{pathname:`/order/add/${e}`},onClick:o},n):a.default.createElement(l.WithRoot,{render:({order:t})=>a.default.createElement(i.Mobile,null,r=>a.default.createElement("div",{onClick:()=>{o(),r?t.addFromRecipeMobile(e):t.addFromRecipe(e)}},n))}):a.default.createElement("div",{onClick:o},n))},806:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderLimitModal=void 0;var a,o=r(100),n=(a=r(0))&&a.__esModule?a:{default:a},l=r(484),i=r(48),d=r(61);t.OrderLimitModal=(()=>{const{user:e}=(0,i.useRoot)();return(0,o.useObserver)(()=>n.default.createElement(l.AlertModal,{isOpen:!e.orderLimitAlertHidden,onClose:e.hideOrderLimit,headerText:d.i18n._("Limit has been reached")},d.i18n._("The maximum number of items in the order has been reached")))})},811:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormInputCheckbox=void 0;var a=i(r(0)),o=r(447),n=r(435),l=i(r(60));function i(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var u=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(r[a[o]]=e[a[o]])}return r};const s=l.default.div.withConfig({displayName:"CheckboxContainerStyled"})`
  display: flex;
  margin-bottom: 0.5rem;
`,c=(0,l.default)(n.Input).withConfig({displayName:"CheckboxStyled"})`
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
`;t.FormInputCheckbox=(e=>{var{field:t,defaultValue:r=!1,validate:n,children:l}=e,i=u(e,["field","defaultValue","validate","children"]);return a.default.createElement(o.Field,{field:t,defaultValue:r,validate:n},e=>a.default.createElement(s,null,a.default.createElement(c,d({type:"checkbox",value:e.value,onChange:t=>e.setValue(t.target.checked),invalid:e.touched&&Boolean(e.error)},i)),a.default.createElement(m,null,l)))})},826:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderEmailInput=t.OrderEmailInputValidator=void 0;var a,o=(a=r(0))&&a.__esModule?a:{default:a},n=r(435),l=r(491),i=r(61);const d=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,u=e=>{const t=e.trim();return""===t?i.i18n._("E-mail is mandatory"):d.test(t)?null:i.i18n._("E-mail format is not valid")};t.OrderEmailInputValidator=u;t.OrderEmailInput=(()=>o.default.createElement(n.FormGroup,null,o.default.createElement(l.FormTextInput,{field:"email",type:"email",autoComplete:"email",placeholder:"E-mail",showFeedback:!0,validate:u,"data-testid":"orderEmailInput"})))},827:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderNameInput=void 0;var a,o=(a=r(0))&&a.__esModule?a:{default:a},n=r(435),l=r(491),i=r(61);t.OrderNameInput=(()=>o.default.createElement(n.FormGroup,null,o.default.createElement(n.InputGroup,null,o.default.createElement(l.FormTextInput,{field:"firstname",autoComplete:"given-name",placeholder:i.i18n._("First name"),showFeedback:!0,validate:e=>""===e.trim()?i.i18n._("First name is mandatory"):null,"data-testid":"orderNameInput__FirstName"}),o.default.createElement(l.FormTextInput,{field:"lastname",autoComplete:"family-name",placeholder:i.i18n._("Last name"),showFeedback:!0,validate:e=>""===e.trim()?i.i18n._("Last name is mandatory"):null,"data-testid":"orderNameInput__LastName"}))))},828:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderPhoneInput=t.OrderPhonePrefixInputValidator=t.OrderPhoneInputValidator=void 0;var a,o=(a=r(0))&&a.__esModule?a:{default:a},n=r(435),l=r(491),i=r(61);const d=e=>""===e.trim()?i.i18n._("Phone is mandatory"):null;t.OrderPhoneInputValidator=d;const u=e=>""===e.trim()?i.i18n._("Phone prefix is mandatory"):null;t.OrderPhonePrefixInputValidator=u;t.OrderPhoneInput=(()=>o.default.createElement(n.FormGroup,null,o.default.createElement(n.InputGroup,null,o.default.createElement(l.FormTextInput,{field:"phonePrefix",autoComplete:"tel-country-code",placeholder:"+",showFeedback:!0,validate:u}),o.default.createElement(l.FormTextInput,{field:"phone",type:"tel",autoComplete:"tel-national",placeholder:i.i18n._("Phone"),showFeedback:!0,validate:d,style:{width:"55%"},"data-testid":"orderPhoneInput__Phone"}))))},829:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderPromoInputUI=h,t.default=void 0;var a,o=r(187),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0)),l=r(190),i=r(435),d=(a=r(60))&&a.__esModule?a:{default:a},u=r(439),s=r(48),c=r(830),m=r(61),f=r(831);var p=function(e,t,r,a){return new(r||(r=Promise))(function(o,n){function l(e){try{d(a.next(e))}catch(t){n(t)}}function i(e){try{d(a.throw(e))}catch(t){n(t)}}function d(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(l,i)}d((a=a.apply(e,t||[])).next())})};const _=d.default.div.withConfig({displayName:"CodesPanel"})`
  margin-top: 0.5rem;
  & button {
    margin-right: 0.5rem;
    font-size: 0.7rem;
  }
`;function h({codes:e,onCodeAdd:t,onCodeRemove:r,autoSubmitAfterTimeout:a=2e3}){const l=(0,n.useRef)(null),[d,s]=(0,n.useState)(!1),c=(0,n.useCallback)(()=>{if(l.current&&!l.current.disabled){const e=l.current.value.trim();e.length>0&&(s(!0),l.current.disabled=!0,l.current.value=m.i18n._("Validating promo code {code}...",{code:e}),t(e).then(()=>{s(!1),l.current&&(l.current.value="")}).catch(()=>{l.current&&(l.current.value=e)}).finally(()=>{s(!1),l.current&&(l.current.disabled=!1,l.current.focus())}))}},[t]),f=(0,o.useDebounceCallback)(c,a),p=(0,n.useCallback)(e=>{"Enter"===e.key&&(c(),e.preventDefault())},[]);return n.default.createElement(i.FormGroup,null,n.default.createElement(i.InputGroup,null,n.default.createElement(i.Input,{innerRef:l,autoComplete:"off",disabled:d,placeholder:m.i18n._("Promo codes"),onChange:f,onKeyDown:p,onBlur:c,onPaste:c})),n.default.createElement(_,null,e.map(({id:e,code:t})=>n.default.createElement(u.SecondaryButton,{key:e,onClick:()=>r(e)},`${t} \u2716`))))}var v=()=>{const{order:e}=(0,s.useRoot)(),{data:t}=(0,l.useQuery)(f.OrderPromoCodesQuery,{suspend:!1,variables:{orderId:e.orderId}}),r=(0,c.useGuardedMutation)(f.AddOrderPromoMutation,{refetchQueries:["GCartView"]}),a=(0,n.useCallback)(t=>p(void 0,void 0,void 0,function*(){if(!e.orderId)return;const a=yield r({orderId:e.orderId,code:t});a&&a.addOrderPromoCode.userErrors.length&&e.submitFailed(a.addOrderPromoCode.userErrors)}),[]),o=(0,c.useGuardedMutation)(f.RemoveOrderPromoMutation,{refetchQueries:["GCartView"]});return n.default.createElement(h,{codes:t&&t.order?t.order.promoCodes:[],onCodeAdd:a,onCodeRemove:t=>{e.orderId&&o({codeId:t,orderId:e.orderId})}})};t.default=v},830:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useGuardedMutation=function(e,t={}){const r=i.i18n._("Unexpected error occured while sending a request. Our team was notified about the issue."),u=(0,a.useCallback)(e=>{const t=e.filter(n.RM.propEq("showToUser",!0));0===t.length?window.alert(r):window.alert(t.map(n.RM.prop("message")).join("\n"))},[]),s=(0,a.useCallback)(e=>{if(function(e){return e.hasOwnProperty("graphQLErrors")}(e)){if(e.networkError)return void window.alert(i.i18n._("Communication with server has failed. Please retry the operation in a moment again."));if(e.graphQLErrors)return void u(e.graphQLErrors)}(0,l.reportError)(e)},[]),c=(0,o.useMutation)(e,t);return e=>d(this,void 0,void 0,function*(){try{const r=yield c({variables:e});return r.errors?(u(r.errors),null):r.data?r.data:null}catch(t){return s(t),null}})};var a=r(0),o=r(190),n=r(98),l=r(26),i=r(61),d=function(e,t,r,a){return new(r||(r=Promise))(function(o,n){function l(e){try{d(a.next(e))}catch(t){n(t)}}function i(e){try{d(a.throw(e))}catch(t){n(t)}}function d(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(l,i)}d((a=a.apply(e,t||[])).next())})}},831:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RemoveOrderPromoMutation=t.AddOrderPromoMutation=t.OrderPromoCodesQuery=void 0;var a,o=(a=r(18))&&a.__esModule?a:{default:a},n=r(25);const l=o.default`
  query GOrderPromoCodes($orderId: ID!) {
    order(id: $orderId) {
      id
      promoCodes {
        ...GPromoCode
      }
    }
  }
  ${n.PromoCodeFragment}
`;t.OrderPromoCodesQuery=l;const i=o.default`
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
  ${n.PromoCodeFragment}
`;t.AddOrderPromoMutation=i;const d=o.default`
  mutation MRemoveOrderPromo($orderId: ID!, $codeId: ID!) {
    removeOrderPromoCode(order: $orderId, promoCode: $codeId) {
      id
      promoCodes {
        ...GPromoCode
      }
    }
  }
  ${n.PromoCodeFragment}
`;t.RemoveOrderPromoMutation=d},832:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderFormAutoFill=void 0;var a;(a=r(0))&&a.__esModule,r(439),r(97),r(567);t.OrderFormAutoFill=(({onFill:e})=>null)},837:function(e,t,r){}}]);
//# sourceMappingURL=1.b075b613.chunk.js.map