(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{533:function(e,a,t){},686:function(e,a,t){},688:function(e,a,t){},697:function(e,a,t){},720:function(e,a,t){},736:function(e,a,t){},770:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),c=t(394),o=(t(449),t(404)),i=t(450),s=t(527),m=t(451),d=t(452);const p=({})=>r.a.createElement(c.p,{className:"justify-content-md-center"},r.a.createElement(o.a,null,r.a.createElement("div",{className:"finish__view"},r.a.createElement(s.a,{render:e=>r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{order:e.order}),r.a.createElement(d.a,{branch:e.companyBranch}),r.a.createElement(i.a,{finish:e}))}))));t(533);var u=t(453),h=t(72),E=t(430),b=t(32),g=t(33),_=t(522),f=(t(686),t(412)),y=t(46);class v extends r.a.PureComponent{componentDidMount(){this.executePanning()}componentDidUpdate(){this.executePanning()}executePanning(){const{map:e,gps:a}=this.props;e&&a&&e.panToLocation(a)}render(){return null}}var C=t(111),w=t(70),N=t(31),I=t(399),k=t(441),S=t(428),x=t(39);const O=Object(x.b)("div").withConfig({displayName:"PickupMapHeaderStyled"})`
  background-color: ${({theme:e})=>e.primary};
  color: ${({theme:e})=>e.tertiaryText};
  text-align: center;
  padding: 0.4rem 0.2rem 0.2rem 0.2rem;
  height: 2rem;
  vertical-align: middle;
`,P=({branch:e,onConfirm:a})=>r.a.createElement("div",{className:"pickup__map"},r.a.createElement(O,{className:"pickup__map__header"},e.name),r.a.createElement("div",{className:"pickup__map__info"},r.a.createElement(k.a,{address:e.address})),r.a.createElement(S.a,{status:e,render:t=>r.a.createElement(I.b,{color:"primary","data-testid":"submitPickupBranch",disabled:!e.pickupEnabled,onClick:a},e.pickupEnabled?function({decision:e,openingIn:a,closingIn:t}){switch(e){case"Closed":return r.a.createElement(w.Trans,{id:"Closed"});case"ClosingSoon":return r.a.createElement(w.Trans,{id:"{closingIn, plural, one {Closing in 1 minute} other {Closing in # minutes}}",values:{closingIn:t}});case"OpeningSoon":return r.a.createElement(w.Trans,{id:"{openingIn, plural, one {Opening in 1 minute} other {Opening in # minutes}}",values:{openingIn:a}});default:return N.b._("Pickup here").toLocaleUpperCase()}}(t):r.a.createElement(w.Trans,{id:"Delivery only"}))}));const M={[g.a.MESSENGER]:Object(n.createFactory)(_.a),[g.a.PICKUP]:Object(n.createFactory)(class extends n.Component{constructor(){super(...arguments),this.state={branchId:null},this.setNoBranch=(()=>{this.setState({branchId:null})}),this.renderSite=(e=>r.a.createElement(f.Marker,{key:e.id,position:{lat:e.gps.latitude,lng:e.gps.longitude},onClick:()=>this.setActiveBranch(e.id)},this.state.branchId===e.id?r.a.createElement(f.InfoWindow,{onCloseClick:this.setNoBranch,defaultOptions:{maxWidth:200}},r.a.createElement(P,{branch:e,onConfirm:()=>{this.props.rootModel.order.setBranch(e.id),this.onConfirm(e.id)}})):null))}componentDidMount(){this.setActiveBranch(this.props.rootModel.business.branchId)}setActiveBranch(e){this.setState({branchId:e}),this.props.rootModel.order.prefetchFoodMenu(e)}onConfirm(e){this.props.rootModel.order.createPickupOrder(e,this.props.onConfirm)}render(){const{map:e,business:a}=this.props.rootModel;return a.isBrand?r.a.createElement(C.d,{variables:{brandId:a.brandId},renderLoading:!1,render:({branches:t})=>{const n=t&&t.find(y.a.propEq("id",a.branchId));return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{map:e,gps:n&&n.gps}),t&&t.map(this.renderSite))}}):r.a.createElement(C.c,{variables:{branchId:a.branchId},renderLoading:!1,render:({branch:a})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{map:e,gps:a&&a.gps}),a&&this.renderSite(a))})}})},j=({onConfirm:e})=>r.a.createElement(b.b,{render:a=>r.a.createElement(E.a,{model:a.map,render:()=>r.a.createElement(h.a,null,()=>{if(!a.business.isValid)return null;return(0,M[a.order.orderMethod])({rootModel:a,onConfirm:e})})})}),F=()=>r.a.createElement(c.p,{className:"justify-content-md-center"},r.a.createElement(o.a,null,r.a.createElement("div",{className:"map__view"},r.a.createElement("div",{className:"map__view__header"},r.a.createElement(u.a,null)),r.a.createElement(l.b,null,({history:e})=>r.a.createElement(j,{onConfirm:()=>e.push("/order")})))));var T=t(60);const B=({address:e})=>r.a.createElement(b.b,{render:a=>{switch(a.order.orderMethod){case g.a.MESSENGER:return r.a.createElement("span",null,N.b._("Order to address"),": ",r.a.createElement("b",null,a.location.address));case g.a.PICKUP:return r.a.createElement("span",null,N.b._("Pickup at address"),":"," ",r.a.createElement("b",null,r.a.createElement(k.a,{address:e})));default:return null}}});t(688);const L=({status:e,now:a})=>e?r.a.createElement(S.a,{now:a,status:e,render:({decision:e,closingIn:a})=>"ClosingSoon"===e?r.a.createElement(c.a,{className:"shop__header__alert"},r.a.createElement(w.Trans,{id:"Beware! We are {closingIn, plural, one {closing in 1 minute} other {closing in # minutes}}. Finish your order quickly.",values:{closingIn:a}})):null}):null;var H=t(495),$=t(497);const A=T.c.div.withConfig({displayName:"ShopIntroStyled"})`
  margin: 0.8rem 1rem 1rem 1.3rem;
`,U=({branch:e})=>r.a.createElement(A,{"data-testid":"headerText"},e?e.headerText:"");var G=t(123),D=t(444);const V=({url:e,children:a})=>e?r.a.createElement("a",{href:e},a):r.a.createElement(G.b,{to:"/"},a),W=T.c.div.withConfig({displayName:"LogoContainerStyled"})`
  height: 200px;
  width: 400px;
  flex: 0 0 400px;
  & .shop__header__logo {
    height: 100%;
  }
`,q=e=>r.a.createElement(W,null,r.a.createElement(V,e,r.a.createElement(D.a,{className:"shop__header__logo",imageName:"storeLogo",size:"cover"})));var z=t(498);const J=T.c.div.withConfig({displayName:"ContainerStyled"})`
  margin: 0.4rem 0 0 0.1rem;
`,K=T.c.div.withConfig({displayName:"OpeningHoursStyled"})`
  margin: -0.2rem 0 0 1.35rem;
  display: inline-block;
  vertical-align: middle;
`,R=T.c.span.withConfig({displayName:"StatusDisplayPosition"})`
  padding-left: 2rem;
`,Y=({branch:e})=>r.a.createElement(J,null,r.a.createElement("span",{className:"flaticon-clock"}),e&&e.businessHours.map(e=>r.a.createElement(K,{"data-testid":"openingHours",key:e.id},e.closed?e.closedNote||N.b._("Closed"):`${e.openAt} - ${e.closeAt}`)),r.a.createElement(R,null,r.a.createElement(z.a,{status:e})));var Q=t(201),X=t.n(Q);const Z=T.c.div.withConfig({displayName:"StickerThemed"})`
  background: ${({theme:e})=>e.primary};
  color: white;
  margin-top: 1rem;
  padding: 0;
  border-radius: 0 0.7rem 0.7rem 0;
  white-space: nowrap;
  flex: none;

  & p {
    display: inline-block;
    margin: 0.6rem 1rem 0 0;
    vertical-align: top;
    white-space: nowrap;
  }
`,ee=T.c.span.withConfig({displayName:"IconStyled"})`
  margin: 0.5rem 1rem 0 0.1rem;
  &:before,:after {
  font-size: 1.8rem;
  margin: 0 0 0 1rem;
  }
}
`,ae=({success:e=!1,children:a})=>r.a.createElement(Z,{className:X()("right__sticker",{"order-method-unselected":!e,"order-method-selected":e})},r.a.createElement(ee,{className:"flaticon-transport"}),r.a.createElement("p",null,a)),te=T.c.div.withConfig({displayName:"ShopHeaderStyled"})`
  display: flex;
  min-height: 200px;
`,ne=T.c.div.withConfig({displayName:"ShopHeaderInfoStyled"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,re=({branch:e,isLoading:a})=>r.a.createElement("div",null,r.a.createElement(c.p,{className:"justify-content-md-center"},r.a.createElement($.a,null)),r.a.createElement(c.p,{className:"row-white justify-content-md-center"},r.a.createElement(o.a,null,r.a.createElement(te,{"data-testid":"shopHeader"},a?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{url:e&&e.homepageUrl||""}),r.a.createElement(ne,null,r.a.createElement(l.b,{exact:!0,path:"/",render:()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,null,r.a.createElement(w.Trans,{id:"Choose your delivery option below"})),r.a.createElement(U,{branch:e}))}),r.a.createElement(l.b,{path:"/order",render:()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{status:e}),r.a.createElement(ae,{success:!0},r.a.createElement(B,{address:e&&e.address})),r.a.createElement(Y,{branch:e}),r.a.createElement(U,{branch:e}))}),r.a.createElement(l.b,{path:"/finish",render:()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,{success:!0},r.a.createElement(w.Trans,{id:"Order was send"})),r.a.createElement(Y,{branch:e}),r.a.createElement(U,{branch:e}))})),r.a.createElement(L,{status:e}))))));var le=t(3),ce=t(12);const oe=le.b`
  query GShopHeader($branchId: ID!) {
    branch: companyBranch(id: $branchId) {
      id
      name
      phone
      homepageUrl
      headerText
      address {
        ...GAddress
      }
      ...GCompanyBranchStatus
    }
  }
  ${ce.a}
  ${ce.c}
`,ie=Object(le.a)(oe),se=e=>r.a.createElement(b.b,{observe:!0,render:e=>r.a.createElement(ie,{variables:{branchId:e.order.branchId||e.business.branchId},skip:!e.business.isValid,renderLoading:!1,render:({branch:e},{loading:a})=>r.a.createElement(re,{branch:e,isLoading:a})})});t(697);var me=t(521),de=t(520),pe=t(505),ue=(t(720),t(401)),he=t(507),Ee=t(525),be=t(524),ge=t(526),_e=(t(736),t(406));function fe(){return(fe=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var ye=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&(t[n[r]]=e[n[r]])}return t};const ve=e=>{var{children:a,disabled:t,method:n}=e,l=ye(e,["children","disabled","method"]);return r.a.createElement(_e.Field,{field:"payment",render:e=>r.a.createElement(I.e,fe({disabled:t,selected:e.value===n,onClick:()=>{e.setValue(n)}},l),r.a.createElement(Ce,{show:e.value===n}),a)})};function Ce({show:e}){return e?r.a.createElement("span",{className:"flaticon-mark order__payment__method__button__checked"}):r.a.createElement("div",{className:"order__payment__method__button__unchecked"})}const we=()=>r.a.createElement("div",{className:"order__payment__method"},r.a.createElement(ve,{method:g.d.GOPAY,"data-testid":"orderPaymentMethod__GoPay"},N.b._("Pay by card").toLocaleUpperCase()),r.a.createElement(ve,{method:g.d.CASH,"data-testid":"orderPaymentMethod__Cash"},N.b._("Pay by cash").toLocaleUpperCase()));var Ne=t(516);const Ie=({order:e})=>r.a.createElement(ge.a,{order:e,render:a=>r.a.createElement("div",{className:"order__form"},r.a.createElement("div",{className:"order__form__inner"},r.a.createElement(be.a,null),r.a.createElement(we,null),r.a.createElement(Ee.a,null)),r.a.createElement(Ne.a,{onClick:a.submitForm,canSubmit:e.isVamInitialized}))});var ke=t(506),Se=t(518);const xe=()=>r.a.createElement(ue.a,{render:e=>r.a.createElement(r.a.Fragment,null,r.a.createElement(ke.a,{variables:{orderId:e.orderId},renderLoading:!1,render:({order:a})=>a&&0!==a.countWares?r.a.createElement(Ie,{order:e}):null}),r.a.createElement(Se.a,{order:e}),r.a.createElement(he.a,null))}),Oe=()=>r.a.createElement(c.p,{className:"justify-content-md-center"},r.a.createElement(o.b,null,r.a.createElement("div",{className:"shop__overview__column"},r.a.createElement(me.a,null))),r.a.createElement(o.c,null,r.a.createElement("div",{className:"shop__overview__column cart__column"},r.a.createElement("div",{className:"cart__column__header"},r.a.createElement("span",{className:"flaticon-cart cart__column__header__icon"}),r.a.createElement("h4",null,N.b._("Your order"))),r.a.createElement(D.b,{className:"cart__column__cart",imageName:"backgroundCart"},r.a.createElement(de.a,null)),r.a.createElement(xe,null))),r.a.createElement(pe.a,null));a.default=(()=>r.a.createElement(c.e,{fluid:!0},r.a.createElement(l.b,{path:"/",component:se}),r.a.createElement(l.b,{exact:!0,path:"/",component:F}),r.a.createElement(l.b,{path:"/order",component:Oe}),r.a.createElement(l.b,{path:"/finish",component:p})))}}]);
//# sourceMappingURL=9.100ab37c.chunk.js.map