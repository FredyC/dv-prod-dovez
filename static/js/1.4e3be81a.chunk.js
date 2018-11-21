(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{399:function(e,t,a){"use strict";var r=a(394),n=a(71),o=a(39),i=a(0),l=a.n(i),c=a(123),s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};a.d(t,"b",function(){return d}),a.d(t,"d",function(){return m}),a.d(t,"c",function(){return u}),a.d(t,"a",function(){return p}),a.d(t,"e",function(){return h});const d=Object(o.b)(r.b).withConfig({displayName:"PrimaryButton"})`
  background-color: ${_("secondary")};
  border-color: ${_("secondary")};
  &:hover {
    background-color: ${_("secondaryHover")};
    border-color: ${_("secondaryHover")};
  }
  &:active {
    background-color: #262626 !important;
  }
`;d.displayName="PrimaryButton";const m=Object(o.b)(r.b).withConfig({displayName:"SecondaryButton"})`
  background-color: ${_("tertiary")};
  border-color: ${_("tertiary")};
  &:hover {
    background-color: ${_("tertiaryHover")};
    border-color: ${_("tertiaryHover")};
  }
`;m.displayName="SecondaryButton";const u=Object(o.b)(e=>{var{to:t,replace:a,children:n}=e,o=s(e,["to","replace","children"]);return l.a.createElement(c.b,{to:t,replace:a},l.a.createElement(r.b,o,n))}).withConfig({displayName:"PrimaryRoutedButton"})`
  background-color: ${_("secondary")};
  border-color: ${_("secondary")};
  &:hover {
    background-color: ${_("secondaryHover")};
    border-color: ${_("secondaryHover")};
  }
`;u.displayName="PrimaryRoutedButton";const p=Object(o.b)(r.b).withConfig({displayName:"MobileHeaderButton"})`
  background-color: ${({isConfirm:e,theme:t})=>e?t.primary:"white"};
  color: ${({isConfirm:e,theme:t})=>e?"white":t.primary};
`;p.displayName="MobileHeaderButton";const h=Object(o.b)(r.b).withConfig({displayName:"SelectButtonThemed"})`
  ${({theme:e,selected:t})=>o.a`
    ${n.d`background-color: ${t?e.tertiary:e.unselected}
    `}
    ${n.e`background-color: ${t?e.tertiary:"white"}`}
    border-color: ${t?e.tertiary:e.unselected};
    color: ${t?e.tertiaryText:e.unselectedText};
    height: 3.7rem;
    &:hover {
      background-color: ${t?e.tertiaryHover:e.unselectedHover};
      border-color: ${t?e.tertiaryHover:e.unselectedHover};
      color: ${t?e.tertiaryText:e.unselectedText};
    }
  `};
`;function _(e){return({theme:t})=>t[e]}h.displayName="SelectButtonThemed"},401:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var r=a(0),n=a.n(r),o=a(6),i=a(32);const l=({render:e,observe:t,redirect:a=!1})=>n.a.createElement(i.b,{observe:t,render:({order:t})=>t.hasOrder?e(t):a?n.a.createElement(o.a,{to:"/"}):null})},404:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return l}),a.d(t,"c",function(){return c});var r=a(0),n=a.n(r),o=a(394);const i=({children:e})=>n.a.createElement(o.c,{className:"pl-sm-0",sm:"12",md:"12",lg:"10",xl:"8"},e),l=({children:e})=>n.a.createElement(o.c,{className:"pl-sm-0",sm:"8",md:"8",lg:"6",xl:"5"},e),c=({children:e})=>n.a.createElement(o.c,{className:"pl-sm-0",sm:"4",md:"4",lg:"4",xl:"3"},e)},428:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var r=a(67),n=a(0);class o extends n.PureComponent{constructor(){super(...arguments),this.timer=null}componentDidMount(){if(!this.props.timedUpdate)return;const e=()=>{this.forceUpdate(),this.timer=setTimeout(e,3e4)};e()}componentWillUnmount(){this.timer&&clearTimeout(this.timer)}render(){const{status:e,render:t,now:a=new Date,openThresholdInMinutes:n,closeThresholdInMinutes:o}=this.props,{isOpen:l,willCloseAt:c,willOpenAt:s}=e;let d;return t({decision:d=l?i(c,o,a)?"ClosingSoon":"Open":i(s,n,a)?"OpeningSoon":"Closed",get openingIn(){return s&&Object(r.c)(s,new Date)},get closingIn(){return c&&Object(r.c)(c,new Date)}})}}function i(e,t,a){return Boolean(e)&&Math.abs(Object(r.c)(e,a))<=t}o.defaultProps={openThresholdInMinutes:30,closeThresholdInMinutes:30}},430:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var r=a(72),n=a(0),o=a.n(n),i=a(412);const l=a(60).c.div.withConfig({displayName:"MapContainerStyled"})`
  border-radius: 0 0 0.5rem 0.5rem;
  overflow: hidden;
  height: calc(100% - 3.75rem);
`,c=Object(i.withGoogleMap)(({children:e})=>o.a.createElement(o.a.Fragment,null,e)),s=({render:e,model:t})=>o.a.createElement(c,{containerElement:o.a.createElement(l,{className:"map__container","data-testid":"googleMap"}),mapElement:o.a.createElement("div",{style:{height:"100%",position:"relative"}})},o.a.createElement(r.a,null,()=>o.a.createElement(i.GoogleMap,{ref:t.setMapRef,zoom:t.zoom,center:t.center,onCenterChanged:t.updatePosition,onZoomChanged:t.updateZoom,onClick:t.onClick,options:(()=>({streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1,zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_TOP}}))()},e({}))))},441:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var r=a(31),n=a(0),o=a.n(n);const i=({address:e})=>{if(!e||!e.location)return o.a.createElement("span",null,r.b._("Unknown address"));const{location:t}=e;return o.a.createElement("span",null,`${t.street} ${t.houseNumber},\n ${t.city}`)}},442:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var r=a(0),n=a.n(r),o=a(394);a(443);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var l=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};const c=e=>{var{isOpen:t,headerText:a,onClose:r,children:c}=e,s=l(e,["isOpen","headerText","onClose","children"]);return n.a.createElement(o.m,i({isOpen:t,toggle:r,className:"modal__container"},s,{"data-testid":"alertModal"}),n.a.createElement(o.o,{tag:o.e,toggle:r,className:"modal__header"},n.a.createElement("span",null,a)),n.a.createElement(o.n,{className:"modal__body"},n.a.createElement("div",{className:"modal__body__content"},c)))}},443:function(e,t,a){},444:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var r=a(0),n=a.n(r),o=a(60),i=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};const l=e=>{var{imageName:t,fallbackColor:a="#5b453c",fixed:r=!1,size:l="inherit",children:c,component:s="div"}=e,d=i(e,["imageName","fallbackColor","fixed","size","children","component"]);return n.a.createElement(Object(o.c)(s)`
      background-image: ${e=>`url(${e.theme[t]})`};
      background-attachment: ${e=>r?"fixed":"inherit"};
      background-repeat: no-repeat;
      background-position: left top;
      background-size: ${e=>l};
    `,d,c)};t.b=l},449:function(e,t,a){},450:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var r=a(70),n=a(0),o=a.n(n),i=a(394),l=a(60),c=a(399),s=a(71),d=a(31);const m=Object(l.c)("div").withConfig({displayName:"CenteredButtonContainer"})`
  text-align: center;
`,u=({finish:{androidApp:e,iosApp:t}})=>o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,(e||t)&&o.a.createElement("div",{className:"finish__view__apps__propagation"},o.a.createElement("div",{className:"finish__view__apps__propagation__header"},o.a.createElement(r.Trans,{id:"What about mobile app?"})),o.a.createElement("div",{className:"finish__view__apps__propagation__description"},o.a.createElement(r.Trans,{id:"We have prepared mobile app, so you could order from anywhere!"})),e&&o.a.createElement("a",{href:e.url},o.a.createElement(i.b,{className:"finish__view__apps__propagation__button",color:"secondary"},"Google Play")),t&&o.a.createElement("a",{href:t.url},o.a.createElement(i.b,{className:"finish__view__apps__propagation__button",color:"secondary"},"App Store"))),o.a.createElement(m,null,o.a.createElement(c.c,{to:"/",className:"finish__view__submit__line__button","data-testid":"finishViewFooterBackButton"},d.b._("Back to home page").toLocaleUpperCase()))),o.a.createElement(s.b,null,o.a.createElement("div",{className:"finish__view__submit__line",style:{textAlign:"center"}},o.a.createElement("div",{className:"finish__view__submit__line__strip"}),o.a.createElement(c.c,{to:"/",className:"finish__view__submit__line__button","data-testid":"finishViewFooterBackButton"},d.b._("Back to home page").toLocaleUpperCase()))))},451:function(e,t,a){"use strict";a.d(t,"a",function(){return h});var r=a(70),n=a(31),o=a(0),i=a.n(o),l=a(39),c=a(33),s=a(46);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const m=Object(l.b)("div").withConfig({displayName:"HeaderThemed"})`
  background-color: ${({theme:e})=>e.primary};
`,u=Object(l.b)("div").withConfig({displayName:"PriceThemed"})`
  background-color: ${({theme:e})=>e.primary};
`,p=Object(l.b)("div").withConfig({displayName:"PriceCornerThemed"})`
  border-top-color: ${({theme:e})=>e.primary} !important;
`,h=({order:e})=>i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{className:"finish__view__header"},i.a.createElement("div",{className:"finish__view__header__inner"},i.a.createElement("span",{className:"flaticon-transport-1 finish__view__header__icon"}),i.a.createElement("h3",null,i.a.createElement(r.Trans,{id:"It's done! Thank you :-)"})))),i.a.createElement("h4",null,i.a.createElement(r.Trans,{id:"Your order was successfully accepted!"})," ",function({orderPayments:e}){if(e.some(_(c.d.CASH)))return n.b._("You will pay at pickup.");if(e.some(_(c.d.GOPAY)))return n.b._("You have payed.");return null}(e)),i.a.createElement("div",{className:"finish__view__items"},i.a.createElement("div",{className:"finish__view__items__look__to"},i.a.createElement(r.Trans,{id:"You can look forward to:"})),e.items.map(e=>i.a.createElement(f,d({key:e.id},e))),i.a.createElement(p,{className:"finish__view__items__price__corner"}),i.a.createElement(u,{className:"finish__view__items__price"},function({orderPayments:e,totalSum:t}){if(e.some(_(c.d.CASH)))return n.b._("Total cost to be payed:");if(e.some(_(c.d.GOPAY)))return n.b._("Total cost payed:");return null}(e)," ",i.a.createElement("b",null,e.totalSum.formattedValue)))),_=s.a.pathEq(["paymentMethod","paymentType","enum"]);function f({recipe:e,sideDishes:t}){return i.a.createElement("div",null,i.a.createElement("b",null,e.nameLabel),t.length?` + ${t.map(s.a.path(["recipe","nameLabel"])).join(",")}`:null)}},452:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var r=a(70),n=a(0),o=a.n(n);const i=a(60).c.a.withConfig({displayName:"PhoneNumberLinkStyled"})`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`,l=({branch:e})=>o.a.createElement("div",{className:"finish__view__support"},o.a.createElement("h4",null,o.a.createElement(r.Trans,{id:"Any question? Do you have a problem? Call:"})),o.a.createElement("span",{className:"flaticon-technology finish__view__support__icon"}),o.a.createElement("span",{className:"finish__view__support__phone"},o.a.createElement(i,{href:`tel:${e.phone}`},e.phone)))},453:function(e,t,a){"use strict";a.d(t,"a",function(){return u});a(535);var r=a(72),n=a(0),o=a.n(n),i=a(399),l=a(33),c=a(32),s=a(46),d=a(31);const m=({orderModel:e,orderMethod:t,onChange:a,onPrefetch:n,children:l})=>o.a.createElement(r.a,null,()=>o.a.createElement(i.e,{selected:e.orderMethod===t,onMouseEnter:n,onClick:()=>{e.useOrderMethod(t),a(e)},"data-testid":`orderMethod-${t}`,"data-testselected":e.orderMethod===t},l)),u=({onChange:e})=>o.a.createElement(c.b,{observe:!1,render:({order:t})=>o.a.createElement("div",{className:"order__method"},o.a.createElement(m,{orderModel:t,orderMethod:l.a.MESSENGER,onChange:e||s.a.identity},o.a.createElement("span",{className:"flaticon-transport"}),d.b._("I want to deliver").toLocaleUpperCase()),o.a.createElement(m,{orderModel:t,orderMethod:l.a.PICKUP,onChange:e||s.a.identity,onPrefetch:t.prefetchPickup},o.a.createElement("span",{className:"flaticon-restaurant"}),d.b._("I'll pick up").toLocaleUpperCase()))})},494:function(e,t,a){"use strict";a(684);var r=a(0),n=a.n(r);t.a=(({children:e})=>n.a.createElement("div",{className:"button__stripe"},n.a.createElement("div",{className:"button__stripe__bar"}),n.a.createElement("div",{className:"button__stripe__button"},e)))},495:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var r=a(70),n=a(31),o=a(0),i=a.n(o),l=a(442),c=a(428),s=a(496);const d=({status:e})=>e?i.a.createElement(c.a,{status:e,render:({decision:e,openingIn:t})=>i.a.createElement(s.a,{render:a=>i.a.createElement(l.a,{isOpen:("Closed"===e||"OpeningSoon"===e)&&!a.closingTimeAlertHidden,onClose:a.hideClosingTime,headerText:n.b._("We are closed right now")},n.b._("We're sorry, but we do not accept new orders at this time."),"OpeningSoon"===e&&i.a.createElement(r.Trans,{id:"You can prepare your order because we are {openingIn, plural, one {opening in 1 minute} other {opening in # minutes}}!",values:{openingIn:t}}))})}):null},496:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var r=a(0),n=a.n(r),o=a(32);const i=({render:e,observe:t=!0})=>n.a.createElement(o.b,{observe:t,render:({initialized:t,user:a})=>t?e(a):null})},497:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(691);var r=a(0),n=a.n(r),o=a(404),i=a(693),l=a.n(i),c=a(694),s=a.n(c),d=a(695),m=a.n(d),u=a(696),p=a.n(u);const h=()=>n.a.createElement(o.a,null,n.a.createElement("img",{src:m.a,className:"shop__header__icons__doveze","data-testid":"ShopHeaderIcons__AppLogo",alt:"logo Doveze.cz"}),n.a.createElement("img",{src:s.a,className:"shop__header__icons__commerce",alt:"MasterCard"}),n.a.createElement("img",{src:l.a,className:"shop__header__icons__commerce","data-testid":"ShopHeaderIcons__VisaLogo",alt:"VISA"}),n.a.createElement("img",{src:p.a,className:"shop__header__icons__gopay",alt:"GoPay","data-testid":"ShopHeaderIcons__GoPayLogo"}))},498:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var r=a(70),n=a(0),o=a.n(n),i=a(60),l=a(428);const c=i.c.span.withConfig({displayName:"StatusDisplayOpen"})`
  font-style: italic;
  color: #0f9849;
`,s=i.c.span.withConfig({displayName:"StatusDisplayClosed"})`
  font-style: italic;
  color: #b40000;
`,d=({status:e})=>e?o.a.createElement(l.a,{status:e,render:e=>{switch(e.decision){case"Open":return o.a.createElement(c,{"data-testid":"statusDisplayOpen"},o.a.createElement(r.Trans,{id:"We are open"}));case"OpeningSoon":return o.a.createElement(s,null,o.a.createElement(r.Trans,{id:"{0, plural, one {Opening in 1 minute} other {Opening in # minutes}}",values:{0:e.openingIn}}));case"ClosingSoon":return o.a.createElement(c,null,o.a.createElement(r.Trans,{id:"{0, plural, one {Closing in 1 minute} other {Closing in # minutes}}",values:{0:e.closingIn}}));case"Closed":return o.a.createElement(s,null,o.a.createElement(r.Trans,{id:"Closed"}))}}}):null},504:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var r=a(70),n=a(3),o=a(0),i=a.n(o),l=a(6),c=a(394),s=a(22),d=a(71),m=a(523);const u=Object(n.a)(s.g),p=({order:e})=>i.a.createElement(l.b,{path:"/order/add/:recipeId",render:({match:t,history:a})=>i.a.createElement(u,{variables:{recipeId:t.params.recipeId},renderLoading:!1,renderError:()=>i.a.createElement(c.a,{color:"warning"},i.a.createElement(r.Trans,{id:"Error in loading cart item. Issue was reported."})),render:(r,{loading:n})=>i.a.createElement(d.b,null,o=>i.a.createElement(m.a,{recipe:r.recipe,onConfirm:a=>o?(e.addFromRecipeMobile(t.params.recipeId,a),Promise.resolve()):e.addFromRecipe(t.params.recipeId,a),onClose:()=>a.goBack(),isLoading:n}))})})},505:function(e,t,a){"use strict";a.d(t,"a",function(){return h});var r=a(70),n=a(72),o=a(0),i=a.n(o),l=a(394),c=a(60),s=a(71),d=a(32),m=a(506);const u=Object(c.c)(l.b).withConfig({displayName:"NoticeButton"})`
  font-size: 0.9rem;
  margin: 0.2rem 1rem;
  padding: 0.5em 1rem;
`,p=Object(c.c)(l.a).withConfig({displayName:"StorageNotice"})`
  width: 100%;
  z-index: 5;
  ${s.d`
    font-size: 0.9rem;
    position: sticky;
    bottom: 0;
  `} ${s.e`
    position: fixed;
    top: 5rem;
    font-size: 0.8rem;
    `}
  padding: 0.5rem 1rem;
  background-color: #d4eddadc;
`,h=e=>i.a.createElement(d.b,{render:e=>i.a.createElement(m.a,{skip:!e.order.hasOrder||null!==e.user.rememberForm,variables:{orderId:e.order.orderId},renderLoading:()=>null,render:({order:t})=>i.a.createElement(n.a,null,()=>t.countWares>0&&null===e.user.rememberForm?i.a.createElement(p,{"data-testid":"orderFormStorageNotice"},i.a.createElement("p",null,i.a.createElement(r.Trans,{id:"This app is using secure storage for keeping filled form data. It's not cookies, these are stored in your browser only."})),i.a.createElement(u,{color:"success",size:"sm",onClick:e.user.setFormRememberYes,"data-testid":"orderFormStorageNotice__Yes"},i.a.createElement(r.Trans,{id:"Always remember"})),i.a.createElement(u,{color:"secondary",size:"sm",onClick:e.user.setFormRememberNo,"data-testid":"orderFormStorageNotice__No"},i.a.createElement(r.Trans,{id:"Do not store"}))):null)})})},506:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var r=a(3);const n=r.b`
  query GOrderForm($orderId: ID!) {
    order(id: $orderId) {
      id
      countWares
    }
  }
`,o=Object(r.a)(n)},507:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var r=a(70),n=a(0),o=a.n(n),i=a(394),l=(a(443),a(401));const c=()=>o.a.createElement(l.a,{observe:!0,render:e=>o.a.createElement(i.m,{isOpen:e.hasErrors,toggle:e.clearErrors,className:"modal__container"},o.a.createElement(i.o,{toggle:e.clearErrors,tag:i.e,className:"modal__header"},o.a.createElement("span",null,o.a.createElement(r.Trans,{id:"Order can not be completed"}))),o.a.createElement(i.n,{className:"modal__body"},o.a.createElement("div",{className:"modal__body__content"},e.hasErrors&&e.submitErrors.map((e,t)=>o.a.createElement("div",{key:t},e))),o.a.createElement("div",{className:"modal__body__button__line"},o.a.createElement("div",{className:"modal__body__button__strip"}),o.a.createElement(i.b,{className:"modal__body__button",color:"primary",onClick:e.clearErrors},o.a.createElement(r.Trans,{id:"I understand"})),"/>")))})},515:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var r=a(70),n=a(31),o=a(0),i=a.n(o),l=a(406),c=a(394);const s=e=>e&&e.trim().length>50,d=e=>s(e)?n.b._("Note is too long"):null,m=()=>{const e=n.b._("eg. ingredients change, company...");return i.a.createElement(l.Field,{field:"note",validate:d,render:t=>i.a.createElement(c.h,null,i.a.createElement(c.j,{type:"textarea",placeholder:n.b._("Note"),title:e,value:t.value,onChange:e=>t.setValue(e.target.value),onBlur:()=>t.setTouched(!0),valid:!t.error,invalid:Boolean(t.error),"data-testid":"orderNoteInput"}),i.a.createElement(c.i,null,e),s(t.value)?i.a.createElement(c.g,null,i.a.createElement(r.Trans,{id:"Maximum length is {MAX_LENGTH, plural, other {# characters}}. Typed {0, plural, one {# char} other {# chars}}",values:{0:t.value.length,MAX_LENGTH:50}})):null)})}},516:function(e,t,a){"use strict";a.d(t,"a",function(){return d});a(738);var r=a(31),n=a(0),o=a.n(n),i=a(399),l=a(71),c=a(517),s=a(401);const d=({onClick:e,canSubmit:t=!1})=>o.a.createElement(s.a,{observe:!0,render:a=>o.a.createElement("div",{className:"order__form__submit__line"},o.a.createElement("div",{className:"order__form__submit__line__strip"}),o.a.createElement(i.b,{className:"order__form__submit__line__button",color:"primary",size:"md",onClick:e,disabled:!t||a.isSubmitting,"data-testid":"orderSubmitButton"},o.a.createElement(l.a,null,a.isSubmitting?o.a.createElement(c.a,null):r.b._("Place order").toLocaleUpperCase()),o.a.createElement(l.b,null,r.b._("Place order").toLocaleUpperCase())))})},517:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(127),i=a.n(o),l=a(60);t.a=Object(l.d)(e=>n.a.createElement(i.a,{name:"three-bounce",color:e.theme.primary,fadeIn:"none"}))},518:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var r=a(70),n=a(72),o=a(0),i=a.n(o),l=a(60),c=a(442),s=a(56);const d=l.c.div.withConfig({displayName:"TextPadding"})`
  padding-bottom: 2rem;
`,m=({order:e})=>i.a.createElement(n.a,null,()=>i.a.createElement(c.a,{isOpen:e.isGoPayChecking,headerText:"GoPay platba"},i.a.createElement(d,null,i.a.createElement(r.Trans,{id:"Checking your GoPay payment, please wait..."})),i.a.createElement(s.a,{noMargin:!0})))},520:function(e,t,a){"use strict";a(712);var r=a(0),n=a.n(r),o=a(401),i=a(504),l=a(72),c=a(70);const s=({order:e})=>e.discounts&&e.discounts.length>0?n.a.createElement("div",null,e.discounts.map(({code:e,description:t,price:{formattedValue:a}})=>n.a.createElement("div",{key:e,className:"cart__item__summary"},n.a.createElement("div",{className:"cart__item__summary__label"},t),n.a.createElement("div",{className:"cart__item__summary__price"},a))),n.a.createElement("div",{className:"cart__item__summary"},n.a.createElement("div",{className:"cart__item__summary__label"},n.a.createElement(c.Trans,{id:"Total discount"})),n.a.createElement("div",{className:"cart__item__summary__price"},e.totalDiscount.formattedValue))):null;a(718);var d=a(31),m=a(60),u=a(71),p=a(123),h=a(39);const _=Object(h.b)("div").withConfig({displayName:"CartItemButtonStyled"})`
  display: inline-block;
  border-radius: 3rem;
  background: white;
  width: 1.8rem;
  height: 1.8rem;
  text-align: left;
  vertical-align: top;
  padding: 0 0 0 0rem;
  margin: 0.3rem 0.1rem 0 0.1rem;
  ${function({color:e,enabled:t}){const a=t?e:"#8d8d8d";return h.a`
    color: ${a};
    border: 2px solid ${a};
  `}};
  ${function({enabled:e}){return e?h.a`
        cursor: pointer;
        &:hover {
          background: #c9e8d7;
          color: #1d1d1d;
          border-color: #1d1d1d;
        }
      `:h.a`
        cursor: default;
      `}};
`;const f=Object(h.b)("span").withConfig({displayName:"CartItemButtonIcon"})`
  &:before {
    font-size: 0.8rem;
    margin-left: 0.36rem;
  }
`,b=({color:e,icon:t,onClick:a,enabled:r=!0,data_testid:o})=>n.a.createElement(_,{color:e,enabled:r,onClick:a,"data-testid":o},n.a.createElement(f,{icon:t,className:`flaticon-${t}`}));function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var v=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};const y=e=>{var{itemId:t,onClick:a}=e,r=v(e,["itemId","onClick"]);const o=n.a.createElement(b,g({icon:"edit",color:"#d9a700"},r));return r.enabled?n.a.createElement(p.b,{to:`/order/change/${t}`,onClick:a,"data-testid":`editCartItemButton__${t}`},o):o};var E=a(32);const C=({itemId:e})=>n.a.createElement(E.b,{render:t=>n.a.createElement(b,{icon:"delete",color:"#99230e",data_testid:"removeCartItemButton",onClick:()=>t.order.removeItemFromCart(e)})}),w=m.c.div.withConfig({displayName:"EditButtonsContainerStyled"})`
  flex: 0 0 auto;
`,N=m.c.div.withConfig({displayName:"CartItemStyled"})`
  width: 100%;
  min-height: 3rem;
  color: #1d1d1d;
  margin: 0 0 0.4rem 0;
  padding: 0.2rem;
  background: ${({isActive:e})=>e?"#b3ebcc":"rgba(255, 255, 255, 0.8)"};
  text-align: left;
  display: flex;
`,O=({item:e,isActive:t,onEdit:a})=>n.a.createElement(N,{isActive:t},n.a.createElement(w,null,n.a.createElement(C,{itemId:e.id}),n.a.createElement(u.a,null,n.a.createElement(y,{itemId:e.id,enabled:0!==e.recipe.sideDishCount,onClick:a}))),n.a.createElement("div",{className:"cart__item__description"},n.a.createElement("div",{className:"cart__item__item__name","data-testid":`cardItem__Name__${e.recipe.id}`},e.recipe.nameLabel),n.a.createElement("div",{className:"cart__item__item__side__dish","data-testid":`cardItem__SideDish__${e.recipe.id}`},e.sideDishes.length>0?`+ ${e.sideDishes.map(({recipe:e})=>e.nameLabel).join(",")}`:e.recipe.sideDishCount>0&&n.a.createElement("span",null,d.b._("Without sidedish").toLocaleLowerCase()))),n.a.createElement("div",{className:"cart__item__item__price","data-testid":`cardItem__Price__${e.id}`},e.price.formattedValue));var k=a(166),I=a.n(k);const S=m.c.div.withConfig({displayName:"CartItemSummaryTotalThemed"})`
  background: ${({theme:e})=>I()(e.primary).alpha(.7).hsl().string()} !important;
`,P=({order:e})=>n.a.createElement("div",null,e.coverPrice&&e.coverPrice.value?n.a.createElement("div",{key:"casePrice",className:"cart__item__summary"},n.a.createElement("div",{className:"cart__item__summary__label"},d.b._("Covers")),n.a.createElement("div",{className:"cart__item__summary__price"},e.coverPrice.formattedValue)):null,e.transportFee&&e.transportFee.value?n.a.createElement("div",{key:"transportFee",className:"cart__item__summary"},n.a.createElement("div",{className:"cart__item__summary__label"},d.b._("Delivery")),n.a.createElement("div",{className:"cart__item__summary__price"},e.transportFee.formattedValue)):null,n.a.createElement(S,{key:"totalPrice",className:"cart__item__summary cart__item__summary__total"},n.a.createElement("div",{className:"cart__item__summary__label"},d.b._("Total")),n.a.createElement("div",{className:"cart__item__summary__price","data-testid":"cardItemSummary__Price"},e.totalSum.formattedValue))),x=({order:e,rootModel:t})=>n.a.createElement("div",{className:"cart__items__container"},n.a.createElement("div",{className:"cart__items__container__content"},n.a.createElement(l.a,null,()=>e.items.map(e=>n.a.createElement(O,{key:e.id,item:e,isActive:t.order.lastActiveRecipeId===e.recipe.id,onEdit:()=>t.order.setUsedRecipeId(e.recipe.id)}))),n.a.createElement(s,{order:e}),n.a.createElement(P,{order:e}))),$=m.c.span.withConfig({displayName:"CartIsEmptyThemed"})`
  color: ${({theme:e})=>e.secondary};
`,j=()=>n.a.createElement($,{className:"cart__column__cart__empty__label","data-testid":"cartIsEmpty"},`${d.b._("Cart is empty")}...`);var T=a(45),M=a(3),F=a(6),L=a(394),A=a(46),B=a(22),V=a(523);const D=Object(M.a)(B.f),z=({root:e})=>n.a.createElement(F.b,{path:"/order/change/:itemId",render:({match:t,history:a})=>n.a.createElement(D,{variables:{itemId:t.params.itemId},renderLoading:!1,renderError:()=>n.a.createElement(L.a,{color:"warning"},n.a.createElement(c.Trans,{id:"Error in loading cart item. Issue was reported."})),render:(r,{loading:o})=>n.a.createElement(V.a,{recipe:r.item&&r.item.recipe,initialSelection:r.item?r.item.sideDishes.map(A.a.path(["recipe","id"])):[],onConfirm:a=>e.order.updateItem(t.params.itemId,a),onClose:()=>a.goBack(),isLoading:o})})});a.d(t,"a",function(){return R});const R=()=>n.a.createElement(o.a,{redirect:!0,render:e=>n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{order:e}),n.a.createElement(z,{root:e.root}),n.a.createElement(T.b,{variables:{orderId:e.orderId},renderLoading:!1,render:({order:t})=>n.a.createElement(n.a.Fragment,null,t&&0!==t.countWares?n.a.createElement(x,{order:t,rootModel:e.root}):n.a.createElement(j,null))}))})},521:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(401),i=(a(699),a(201)),l=a.n(i),c=a(499),s=a.n(c),d=a(708),m=a.n(d),u=a(503),p=a(132),h=a(71);class _ extends r.Component{constructor(){super(...arguments),this.state={scroll:0},this.ref=null,this.onMounted=(e=>{this.ref=e}),this.onSwiping=((e,t)=>this.ref.scrollLeft+=t/5),this.onSwiped=(()=>this.setState({scroll:this.ref.scrollLeft}))}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,null,e=>e?n.a.createElement("div",{className:"category__navigator"},this.props.children):null),n.a.createElement(h.b,{className:"category__navigator category__navigator__nowrap"},n.a.createElement(m.a,{onSwiping:this.onSwiping,onSwiped:this.onSwiped,innerRef:this.onMounted},this.props.children)))}}var f=Object(p.a)(Object(p.c)("activeCategoryIndex","setActiveCategoryIndex",0))(({categories:e,setActiveCategoryIndex:t,activeCategoryIndex:a})=>n.a.createElement(_,null,0===e.length?null:e.map((e,r)=>n.a.createElement(s.a.Link,{to:e.nameLabel,key:e.id,className:l()("category__navigator__scroll__link",{active:a===r}),onSetActive:()=>t(r),offset:-168,smooth:!0,spy:!0,"data-testid":`categoryNavigatorScrollLink__${e.id}`},n.a.createElement("div",{className:"category__navigator__scroll__link__circle"},n.a.createElement("span",{className:`flaticon-${e.pictogram}`})),n.a.createElement("div",{className:"category__navigator__scroll__link__description"},n.a.createElement(u.a,{lines:2},e.nameLabel)))))),b=a(70),g=a(72),v=a(39);const y=Object(v.b)("div").withConfig({displayName:"FoodCategoryStyled"})`
  color: #474747;
  display: block;
  font-size: 1.6rem;
  & a {
    text-decoration: none;
  }
`,E=Object(v.b)("h3").withConfig({displayName:"FoodCategoryTitleStyled"})`
  ${h.e`margin: 1rem 0 0.4rem 1rem;`};
`;var C=({category:e,children:t})=>n.a.createElement(s.a.Element,{name:e.nameLabel},n.a.createElement(y,null,n.a.createElement(E,null,e.nameLabel),t)),w=(a(710),a(60)),N=a(123),O=a(32);const k=Object(w.c)(N.b).withConfig({displayName:"LinkStyled"})`
  color: inherit;
  &:visited div {
    border: inherit;
  }
`,I=({recipeId:e,hasSidedish:t,canAddToCart:a,onClick:r,children:o})=>a?t?n.a.createElement(k,{to:{pathname:`/order/add/${e}`},onClick:r},o):n.a.createElement(O.b,{render:({order:t})=>n.a.createElement(h.b,null,a=>n.a.createElement("div",{onClick:()=>{r(),a?t.addFromRecipeMobile(e):t.addFromRecipe(e)}},o))}):n.a.createElement("div",{onClick:r},o),S=w.c.div.withConfig({displayName:"FoodMenuItemStyled"})`
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
`,P=w.c.img.withConfig({displayName:"FoodMenuItemImage"})`
  width: 6rem;
  height: 6rem;
  display: block;
  float: left;
  margin: -1.05rem 1rem 0 -1.2rem;
  border-radius: 0.8rem 0 0 0.8rem;
  object-fit: cover;
`,x=w.c.div.withConfig({displayName:"FoodMenuItemPriceCorner"})`
  border-top-width: 1.8rem;
  border-top-style: solid;
  border-top-color: ${({theme:e})=>e.primary} !important;
  position: absolute;
  right: 4.799rem;
  top: 1rem;
  width: 0;
  height: 0;
  border-left: 1.8rem solid transparent;
`,$=w.c.div.withConfig({displayName:"FoodMenuItemPrice"})`
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
`,j=w.c.div.withConfig({displayName:"FoodMenuItemCount"})`
  background-color: ${({theme:e})=>e.secondary};
  float: left;
  position: absolute;
  left: -1.2rem;
  padding: 0.4rem 0.6rem;
  color: white;
  border-radius: 1.8rem;
  font-size: 0.9rem;
  ${h.e`
    left: -0.6rem;
    top: -0.7rem;
  `};
`;var T=({recipe:e,inCart:t,onPrefetch:a,isActive:r,onClick:o,canAddToCart:i})=>n.a.createElement(I,{recipeId:e.id,hasSidedish:e.sideDishCount>0,canAddToCart:i,onClick:o,"data-testid":`foodMenuItem__${e.id}`},n.a.createElement(S,{onMouseEnter:a,isActive:r},e.image&&n.a.createElement(P,{src:e.image,alt:e.nameLabel}),n.a.createElement(x,null),n.a.createElement($,{"data-testid":`foodMenuItem__Price__${e.id}`},e.price.formattedValue),t>0?n.a.createElement(j,null,`${t}x`):"",n.a.createElement("h4",null,n.a.createElement(u.a,{lines:2,"data-testid":`foodMenuItem__Name__${e.id}`},e.nameLabel)),n.a.createElement("p",null,n.a.createElement(u.a,{lines:2,"data-testid":`foodMenuItem__Description__${e.id}`},e.descriptionLabel))));const M=Object(v.b)("div").withConfig({displayName:"FoodMenuStyled"})`
  border-radius: 0 0 0.6rem 0.6rem;
  ${h.d`background: white;`} ${h.e`
    background: #eee9e7;
    background-size: cover;
    background-attachment: scroll;
  `};
`,F=Object(v.b)("div").withConfig({displayName:"FoodMenuListStyled"})`
  ${h.d`
    margin: 0 1.4rem 1rem 1.6rem;
    padding: 2rem 0 2rem 0;
  `} ${h.e`
    margin: 0 0.7rem 1rem 0.7rem;
    padding: 0 0 4rem 0;
  `};
`;class L extends n.a.Component{shouldComponentUpdate({shouldUpdate:e}){return e}orderLimitReached(){const{orderItemCount:e,rootModel:{config:t}}=this.props;return e>=t.orderItemsMax}render(){const{categories:e,inCart:t,rootModel:{order:a,user:r}}=this.props,o=!this.orderLimitReached();return n.a.createElement(M,null,n.a.createElement(F,null,0===e.length?n.a.createElement("h3",null,n.a.createElement(b.Trans,{id:"Food menu is empty. We are sorry."})):n.a.createElement(g.a,null,()=>e.map(e=>n.a.createElement(C,{key:e.id,category:e},e.recipes.map(e=>n.a.createElement(T,{key:e.id,recipe:e,inCart:t[e.id]||0,isActive:a.lastActiveRecipeId===e.id,canAddToCart:o,onClick:()=>{o?a.setUsedRecipeId(e.id):r.showOrderLimit()},onPrefetch:()=>{e.sideDishCount>0&&a.prefetchFood(e.id)}})))))))}}var A=a(83),B=a(31),V=a(442),D=a(496);const z=e=>n.a.createElement(D.a,{render:e=>n.a.createElement(V.a,{isOpen:!e.orderLimitAlertHidden,onClose:e.hideOrderLimit,headerText:B.b._("Limit has been reached")},B.b._("The maximum number of items in the order has been reached"))});a.d(t,"a",function(){return R});const R=()=>n.a.createElement(o.a,{render:e=>n.a.createElement(A.c,{variables:{branchId:e.branchId},render:({wareCategories:t})=>n.a.createElement(n.a.Fragment,null,n.a.createElement(z,null),n.a.createElement(f,{categories:t}),n.a.createElement(A.d,{variables:{orderId:e.orderId},renderLoading:!1,render:({order:a},{loading:r})=>n.a.createElement(L,{categories:t,rootModel:e.root,inCart:function(e){if(!e)return{};return e.reduce((e,t)=>{const a=t.recipe.id;return e[a]||(e[a]=0),e[a]+=1,e},{})}(a&&a.items),orderItemCount:a?a.items.length:0,shouldUpdate:Boolean(a&&!r)})}))})})},522:function(e,t,a){"use strict";a(680);var r=a(1),n=a(0),o=a.n(n),i=a(412),l=a(57),c=(a(682),a(70)),s=a(394),d=a(39),m=a(32),u=a(31);const p=a(60).c.span.withConfig({displayName:"Container"})`
  color: ${({theme:e})=>e.secondary};
  cursor: pointer;
  position: absolute;
  right: 0.4rem;
  top: 0.15rem;
`;var h=({onClick:e,isVisible:t=!1})=>t?o.a.createElement(p,null,o.a.createElement(s.l,{addonType:"append",onClick:e},o.a.createElement("span",{className:"flaticon-gps"}))):null,_=a(127),f=a.n(_);var b=({address:e,isVisible:t,isResolving:a,onValidClick:r})=>a?o.a.createElement("div",{className:"address__input__box__resolved wait"},o.a.createElement(f.a,{name:"ball-beat",fadeIn:"none"})):t?o.a.createElement("div",{className:"address__input__box__resolved",onClick:r},e):null,g=a(201),v=a.n(g),y=a(493),E=a.n(y);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var w=class extends n.Component{constructor(){super(...arguments),this.state={value:""},this.onSearch=E()(this.props.onSearch,2e3),this.onChange=(e=>{const t=e.target.value||"";this.setState({value:t}),this.onSearch(t.trim())}),this.onKeyPress=(e=>{"Enter"===e.key&&(this.onSearch.clear(),this.props.onSearch(this.state.value.trim()))}),this.inputRef=null,this.onInputMount=(e=>{this.inputRef=e})}componentDidMount(){this.setFocus()}componentDidUpdate(e){e.isVisible!==this.props.isVisible&&this.setFocus()}isVisible(){return!1!==this.props.isVisible}isSearching(){return!1!==this.props.isSearching}setFocus(){this.isVisible()&&null!==this.inputRef&&this.inputRef.focus()}render(){const{inputProps:e}=this.props,t=!this.isVisible()||this.isSearching();return o.a.createElement(s.j,C({className:v()({address__input__hidden:t}),onChange:this.onChange,onKeyPress:this.onKeyPress,value:this.state.value,innerRef:this.onInputMount,autoFocus:!0},e))}};const N=Object(d.b)("div").withConfig({displayName:"AddressInputStyled"})`
  width: 90%;
  min-width: 14rem;
  margin: 1rem auto;
  text-align: center;
`,O=Object(d.b)("div").withConfig({displayName:"AddressInputBoxStyled"})`
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
`,k=()=>o.a.createElement(m.b,{observe:!0,render:({location:e})=>o.a.createElement(N,null,o.a.createElement(O,null,o.a.createElement(s.k,{size:"sm"},o.a.createElement(b,{address:e.address||"",isVisible:e.hasAddress,isResolving:e.isResolving,onValidClick:e.clearAddress}),o.a.createElement(w,{inputProps:{placeholder:u.b._("Type address or choose it from map"),autoComplete:"shipping street-address"},onSearch:e.withUserAddress,isVisible:!e.hasAddress,isSearching:e.isResolving}),o.a.createElement(h,{onClick:e.attemptGeolocation,isVisible:e.isGeolocationAvailable&&!e.isResolving}))),e.hasFinishedSearch?function(e){if(!1===e.isResolved)return o.a.createElement(I,{color:"danger"},o.a.createElement(c.Trans,{id:"Address was not recognized."}));if(!1===e.isStreetAddress)return o.a.createElement(I,{color:"warning"},o.a.createElement(c.Trans,{id:"Please enter address with house number."}));if(!1===e.inDeliveryLocation)return o.a.createElement(I,{color:"warning"},o.a.createElement(c.Trans,{id:"Meal can't be delivered to your chosen address by any restaurant."}));return null}(e):null)}),I=Object(d.b)(s.a).withConfig({displayName:"NoMouseAlert"})`
  pointer-events: none;
`;var S=a(399),P=a(494);const x=({enabled:e,onClick:t,onPrefetch:a})=>o.a.createElement(P.a,null,o.a.createElement(S.b,{color:"primary",disabled:!e,onClick:t,onMouseEnter:()=>e&&a()},u.b._("Confirm address").toLocaleUpperCase()));a.d(t,"a",function(){return $});class $ extends o.a.Component{constructor(){super(...arguments),this.disposers=[]}componentDidMount(){const{rootModel:{location:e,map:t}}=this.props;this.disposers=[Object(r.x)(()=>t.clickPoint,a=>{a&&(e.withUserLocation(a),t.panToLocation(a))}),Object(r.i)(()=>{t.isReady&&e.hasLocation&&t.panToLocation(e.geoPoint)})]}componentWillUnmount(){this.disposers.forEach(e=>e())}render(){const{onConfirm:e,rootModel:{location:t,order:a}}=this.props;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.Marker,{position:t.latLng,defaultDraggable:!0,onDragEnd:({latLng:e})=>{t.withUserLocation(Object(l.b)(e))}}),o.a.createElement("div",{className:"delivery__map__address"},o.a.createElement(k,null)),o.a.createElement("div",{className:"delivery__map__submit"},o.a.createElement(x,{enabled:t.isDeliveryAddress,onClick:()=>{a.setBranch(t.branchId),a.createDeliveryOrder(e)},onPrefetch:()=>a.prefetchFoodMenu(t.branchId)})))}}},523:function(e,t,a){"use strict";var r=a(70),n=a(1),o=a(0),i=a.n(o),l=a(394),c=(a(443),a(714),a(72));var s=({minCount:e,maxCount:t})=>{return i.a.createElement("span",null,"")},d=(a(716),a(39));function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var u=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};const p=Object(d.b)(e=>{var{isSelected:t,canBeSelected:a}=e,r=u(e,["isSelected","canBeSelected"]);return i.a.createElement(l.b,r)}).withConfig({displayName:"SidedishCheckboxThemed"})`
  background-color: ${e=>e.isSelected?e.theme.tertiary:"transparent"} !important;
  color: ${e=>e.isSelected?e.theme.tertiaryText:"initial"} !important;
  &:hover {
    border-color: ${({theme:e})=>e.tertiaryHover} !important;
  }
`,h=e=>i.a.createElement(p,m({size:"xs",outline:!0,"data-testid":`sidedishCheckbox__${e.sidedish.id}`,disabled:!e.canBeSelected&&!e.isSelected},e),i.a.createElement("div",{className:"food__sidedish__picker__button__name"},e.sidedish.nameLabel),i.a.createElement("div",{className:"food__sidedish__picker__button__price"},e.sidedish.price.formattedValue)),_=({recipe:e,selection:t,onToggle:a})=>i.a.createElement(c.a,null,()=>i.a.createElement("div",{className:"food__sidedish__picker"},e.categories.map(e=>i.a.createElement(o.Fragment,{key:e.id},i.a.createElement("div",{className:"food__sidedish__picker__category"},e.nameLabel," ",i.a.createElement(s,{minCount:e.minCount,maxCount:e.maxCount})),e.sideDishes.map(r=>i.a.createElement(h,{key:`${r.id}-${e.id}`,sidedish:r,isSelected:t.includes(r.id),canBeSelected:!0,onClick:()=>a(r.id)}))))));var f=a(399),b=a(31),g=function(e,t,a,r){return new(a||(a=Promise))(function(n,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function l(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){e.done?n(e.value):new a(function(t){t(e.value)}).then(i,l)}c((r=r.apply(e,t||[])).next())})};const v=({selection:e,onConfirm:t})=>{const a=n.v.box(!1);return i.a.createElement(c.a,null,()=>i.a.createElement(f.b,{className:"modal__body__button",disabled:a.get(),"data-testid":"cartOrderButton",onClick:()=>g(void 0,void 0,void 0,function*(){a.set(!0),yield t(),a.set(!1)})},b.b._("{0, plural, =0 {Order without sidedish} one {Order with this sidedish} other {Order with # sidedishes}}",{0:e.length}).toLocaleUpperCase()))};a.d(t,"a",function(){return E});var y=function(e,t,a,r){return new(a||(a=Promise))(function(n,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function l(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){e.done?n(e.value):new a(function(t){t(e.value)}).then(i,l)}c((r=r.apply(e,t||[])).next())})};const E=({recipe:e,initialSelection:t=[],onConfirm:a,onClose:o,isLoading:c})=>{const s=n.v.array(t);return i.a.createElement(l.m,{isOpen:!0,toggle:o,className:"modal__container",autoFocus:!0,backdrop:"static",fade:!1},i.a.createElement(l.o,{toggle:o,tag:l.e,className:"modal__header"},i.a.createElement("span",null,i.a.createElement(r.Trans,{id:"Do you want to add something?"}))),i.a.createElement(l.n,{className:"modal__body"},i.a.createElement("div",{className:"modal__body__content"},c||!e?null:i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",{className:"modal__body__food__name"},e.nameLabel),i.a.createElement("span",{className:"modal__body__food_description"},e.descriptionLabel),i.a.createElement(_,{recipe:e,selection:s,onToggle:e=>{s.includes(e)?s.remove(e):s.push(e)}}))),i.a.createElement("div",{className:"modal__body__button__line"},i.a.createElement("div",{className:"modal__body__button__strip"}),i.a.createElement(v,{selection:s,onConfirm:()=>y(void 0,void 0,void 0,function*(){yield a(Array.from(s)),o()}),enabled:!c}))))}},524:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(31),i=a(394),l=a(406);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};const d=e=>{var{field:t,validate:a,showFeedback:r=!1}=e,o=s(e,["field","validate","showFeedback"]);return n.a.createElement(l.Field,{field:t,validate:a,render:e=>n.a.createElement(n.a.Fragment,null,n.a.createElement(i.j,c({},o,{value:e.value,onChange:t=>e.setValue(t.target.value),onBlur:()=>e.setTouched(!0),invalid:e.touched&&Boolean(e.error)})),r&&n.a.createElement(i.g,null,e.error))})},m=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,u=e=>{const t=e.trim();return""===t?o.b._("E-mail is mandatory"):m.test(t)?null:o.b._("E-mail format is not valid")},p=()=>n.a.createElement(i.h,null,n.a.createElement(d,{field:"email",type:"email",autoComplete:"email",placeholder:"E-mail",showFeedback:!0,validate:u,"data-testid":"orderEmailInput"})),h=()=>n.a.createElement(i.h,null,n.a.createElement(i.k,null,n.a.createElement(d,{field:"firstname",autoComplete:"given-name",placeholder:o.b._("First name"),showFeedback:!0,validate:e=>""===e.trim()?o.b._("First name is mandatory"):null,"data-testid":"orderNameInput__FirstName"}),n.a.createElement(d,{field:"lastname",autoComplete:"family-name",placeholder:o.b._("Last name"),showFeedback:!0,validate:e=>""===e.trim()?o.b._("Last name is mandatory"):null,"data-testid":"orderNameInput__LastName"})));var _=a(515);const f=e=>""===e.trim()?o.b._("Phone is mandatory"):null,b=e=>""===e.trim()?o.b._("Phone prefix is mandatory"):null,g=()=>n.a.createElement(i.h,null,n.a.createElement(i.k,null,n.a.createElement(d,{field:"phonePrefix",autoComplete:"tel-country-code",placeholder:"+",showFeedback:!0,validate:b}),n.a.createElement(d,{field:"phone",type:"tel",autoComplete:"tel-national",placeholder:o.b._("Phone"),showFeedback:!0,validate:f,style:{width:"55%"},"data-testid":"orderPhoneInput__Phone"})));a.d(t,"a",function(){return v});const v=()=>n.a.createElement(n.a.Fragment,null,n.a.createElement(h,null),n.a.createElement(g,null),n.a.createElement(p,null),n.a.createElement(_.a,null))},525:function(e,t,a){"use strict";var r=a(31),n=a(1),o=a(0),i=a.n(o),l=a(394),c=a(60),s=a(406);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var m=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};const u=c.c.div.withConfig({displayName:"CheckboxContainerStyled"})`
  display: flex;
  margin-bottom: 0.5rem;
`,p=Object(c.c)(l.j).withConfig({displayName:"CheckboxStyled"})`
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
`,h=c.c.div.withConfig({displayName:"LabelStyled"})`
  margin: 0 0 0 0.8rem;
  vertical-align: top;
`,_=e=>{var{field:t,defaultValue:a=!1,validate:r,children:n}=e,o=m(e,["field","defaultValue","validate","children"]);return i.a.createElement(s.Field,{field:t,defaultValue:a,validate:r},e=>i.a.createElement(u,null,i.a.createElement(p,d({type:"checkbox",value:e.value,onChange:t=>e.setValue(t.target.checked),invalid:e.touched&&Boolean(e.error)},o)),i.a.createElement(h,null,n)))};var f=a(401);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a.d(t,"a",function(){return E});const{Consumer:g}=i.a.createContext(n.v.array([])),v=Object(c.c)(l.b).withConfig({displayName:"ButtonStyled"})`
  padding: 0 0.5rem;
  font-size: 0.8rem;
  color: darkgray;
`,y=c.c.div.withConfig({displayName:"GdprAgreementStyled"})`
  font-size: 0.8rem !important;
  color: darkgray;
  margin: 0.5rem 0 0.5rem 0;
  & .row {
    margin: 0;
  }
`,E=()=>i.a.createElement(g,null,e=>{return i.a.createElement(f.a,{observe:!0,render:t=>t.agreements.map((t,a)=>i.a.createElement("div",b({key:t.id},(e=>e.isConfirmed?{style:{display:"none"}}:{})(t)),i.a.createElement(_,{field:["agreements",a,"isConfirmed"],validate:e=>!t.isMandatory||t.isConfirmed||e?null:"Agreement is mandatory","data-testid":`orderAgreement__Check__${t.id}`},i.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.name}}),t.isMandatory&&" * ",t.description&&i.a.createElement(i.a.Fragment,null,i.a.createElement(v,{color:"link",onClick:(t=>()=>{e.includes(t)?e.remove(t):e.push(t)})(t.id),"data-testid":`orderAgreement__MoreButton__${t.id}`},e.includes(t.id)?r.b._("Less").toLocaleLowerCase():r.b._("More...").toLocaleLowerCase()),i.a.createElement(l.d,{isOpen:e.includes(t.id)},i.a.createElement(y,{"data-testid":`orderAgreement__Info__${t.id}`,dangerouslySetInnerHTML:{__html:t.description}}))))))})})},526:function(e,t,a){"use strict";var r=a(493),n=a.n(r),o=a(0),i=a.n(o),l=a(406),c=a(6),s=a(394),d=a(33),m=a(5),u=a(46),p=a(10);a(399),a(515);const h=({onFill:e})=>null;a.d(t,"a",function(){return b});var _=function(e,t,a,r){return new(a||(a=Promise))(function(n,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function l(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){e.done?n(e.value):new a(function(t){t(e.value)}).then(i,l)}c((r=r.apply(e,t||[])).next())})};const f=1500;class b extends i.a.PureComponent{constructor(){super(...arguments),this.updateVam=((e,t)=>_(this,void 0,void 0,function*(){const{order:a}=this.props;try{yield a.updateVam(e.values),t.setValue("agreements",(r=e.values.agreements,a.agreements.map(e=>{const t=r.find(u.a.propEq("id",e.id));return t?Object.assign({},e,{isConfirmed:t.isConfirmed}):e})))}catch(n){Object(p.c)(n,{formState:e.values})}var r}))}componentDidMount(){const{order:e}=this.props;e.isVamInitialized||e.initVam()}render(){const e=n()(this.updateVam,f),{render:t,order:a}=this.props;return i.a.createElement(c.b,null,({history:r})=>i.a.createElement(l.Form,{defaultValues:function(e){return{firstname:e.firstname,lastname:e.lastname,email:e.email,phone:e.phone,phonePrefix:e.phonePrefix||e.defaultPhonePrefix,note:e.note,payment:d.d.GOPAY,agreements:[]}}(a),validateOnMount:!0,onChange:e,onSubmit:e=>_(this,void 0,void 0,function*(){try{yield a.submitOrder(e),r.replace("/finish")}catch(t){Object(m.f)(t)}})},e=>i.a.createElement(s.f,{onSubmit:e.submitForm},i.a.createElement(h,{onFill:t=>e.setAllValues(t)}),t(e))))}}},527:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(401),i=a(3),l=a(12);const c=i.b`
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
  ${l.b}
  ${l.f}
`,s=i.b`
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
  ${c}
`,d=Object(i.a)(s);a.d(t,"a",function(){return m});const m=({render:e})=>n.a.createElement(o.a,{redirect:!0,render:t=>n.a.createElement(d,{variables:{branchId:t.branchId,orderId:t.orderId},render:t=>e(t)})})},535:function(e,t,a){},680:function(e,t,a){},682:function(e,t,a){},684:function(e,t,a){},691:function(e,t,a){},693:function(e,t,a){e.exports=a.p+"static/media/logo-commerce-01.6d4e5108.svg"},694:function(e,t,a){e.exports=a.p+"static/media/logo-commerce-02.8afb6c6f.svg"},695:function(e,t,a){e.exports=a.p+"static/media/logo-doveze.e13c0122.svg"},696:function(e,t,a){e.exports=a.p+"static/media/logo-gopay.48aa4030.png"},699:function(e,t,a){},710:function(e,t,a){},712:function(e,t,a){},714:function(e,t,a){},716:function(e,t,a){},718:function(e,t,a){},738:function(e,t,a){}}]);
//# sourceMappingURL=1.4e3be81a.chunk.js.map