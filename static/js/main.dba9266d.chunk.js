(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{10:function(e,t,r){"use strict";r.d(t,"b",function(){return d}),r.d(t,"a",function(){return u}),r.d(t,"f",function(){return l}),r.d(t,"e",function(){return m}),r.d(t,"d",function(){return E}),r.d(t,"c",function(){return p});var n=r(19),i=r.n(n),o=r(15),a=r(17),s=r(5),c=r(46);const d=e=>{const{sentryDSN:t}=a.a;t?(Object(s.h)("enabled with DSN %s",t),i.a.config(t,{environment:"prod"}).install(),i.a.context(e)):e()},u=(e,t)=>{i.a.setUserContext({isGuest:!0,userId:e,token:t})},l=e=>{i.a.setExtraContext(e)},m=(e,t)=>{i.a.isSetup()&&(i.a.captureException(e,{extra:t}),i.a.showReportDialog())},E=(e,t)=>{i.a.captureBreadcrumb({category:"graphql",level:"debug",message:"query",data:Object.assign({},t,{errors:e})}),e.forEach(e=>{i.a.captureException(new Error(e.message),{extra:e})});const r=e.filter(c.a.propEq("showToUser",!0));r.length&&i.a.lastEventId()&&i.a.showReportDialog({title:c.a.head(r).message})},p=(e,t={})=>{let r={};return e instanceof o.VError&&(r=Object.assign({cause:o.VError.cause(e)},o.VError.info(e),t)),i.a.captureException(e,{extra:r}),e}},111:function(e,t,r){"use strict";r.d(t,"b",function(){return s}),r.d(t,"a",function(){return c}),r.d(t,"d",function(){return d}),r.d(t,"c",function(){return u});var n=r(3),i=r(38),o=r(12);const a=n.b`
  fragment GPickupBranch on CompanyBranch {
    id
    name
    gps {
      ...GGeoPoint
    }
    address {
      ...GAddress
    }
    pickupEnabled
    ...GCompanyBranchStatus
  }
  ${o.c}
  ${o.d}
  ${o.a}
`,s=n.b`
  query GPickupMapBrand($brandId: ID!) {
    branches: companyBranches(brand: $brandId) {
      ...GPickupBranch
    }
  }
  ${a}
`,c=n.b`
  query GPickupMapBranch($branchId: ID!) {
    branch: companyBranch(id: $branchId) {
      ...GPickupBranch
    }
  }
  ${a}
`,d=Object(i.a)(s),u=Object(i.a)(c)},12:function(e,t,r){"use strict";r.d(t,"e",function(){return i}),r.d(t,"a",function(){return o}),r.d(t,"d",function(){return a}),r.d(t,"f",function(){return s}),r.d(t,"g",function(){return c}),r.d(t,"b",function(){return d}),r.d(t,"c",function(){return u});var n=r(3);const i=n.b`
  fragment GJsonAddress on JsonAddress {
    street
    houseNumber
    city
  }
`,o=n.b`
  fragment GAddress on Address {
    id
    location {
      ...GJsonAddress
    }
  }
  ${i}
`,a=n.b`
  fragment GGeoPoint on GeoPoint {
    latitude
    longitude
  }
`,s=n.b`
  fragment GPrice on PriceConverted {
    value
    formattedValue
  }
`,c=n.b`
  fragment GRecipe on Recipe {
    id
    nameLabel
    sideDishCount: sideDishesWareCategoriesCount
  }
`,d=n.b`
  fragment GCartItem on OrderRecipe {
    id
    recipe {
      ...GRecipe
    }
  }
  ${s}
  ${c}
`,u=n.b`
  fragment GCompanyBranchStatus on CompanyBranch {
    isOpen
    willOpenAt
    willCloseAt
    businessHours {
      id
      openAt
      closeAt
      closed
      closedNote
    }
  }
`},17:function(e,t,r){"use strict";r.d(t,"a",function(){return n});const n={endpoint:"https://be.dev.admin.c2e.deep-vision.cloud",persistenceKey:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_LOCAL_ENDPOINT:"https://be.dev.admin.c2e.deep-vision.cloud",REACT_APP_STAGE:"prod"}).REACT_APP_LOCAL_KEY||"client@local",redirectOnFail:"https://kdo.doveze.cz",sentryDSN:null,pageTitleSuffix:"LOCAL"};Object.assign(n,{endpoint:"https://c2e-p1.deep-vision.cloud",persistenceKey:"client@prod",sentryDSN:"https://b8eb1cf5cf014293aebed1a1cf3314c3@sentry.io/1227696",pageTitleSuffix:"Doveze.cz"})},204:function(e,t,r){e.exports=r(385)},219:function(e,t){},22:function(e,t,r){"use strict";r.d(t,"g",function(){return c}),r.d(t,"f",function(){return d}),r.d(t,"e",function(){return l}),r.d(t,"d",function(){return m}),r.d(t,"b",function(){return E}),r.d(t,"a",function(){return p}),r.d(t,"c",function(){return b}),r.d(t,"i",function(){return I}),r.d(t,"j",function(){return f}),r.d(t,"h",function(){return h}),r.d(t,"k",function(){return g});var n=r(3),i=r(12),o=r(45),a=r(84);const s=n.b`
  fragment GCartRecipe on Recipe {
    id
    nameLabel
    descriptionLabel
    categories: sideDishesWareCategories {
      id
      nameLabel
      minCount
      maxCount
      sideDishes {
        id
        nameLabel
        price {
          ...GPrice
        }
      }
    }
  }
  ${i.f}
`,c=n.b`
  query GOrderCartForRecipe($recipeId: ID!) {
    recipe(id: $recipeId) {
      ...GCartRecipe
    }
  }
  ${s}
`,d=n.b`
  query GOrderCartForItem($itemId: ID!) {
    item: orderRecipe(id: $itemId) {
      id
      recipe {
        ...GCartRecipe
      }
      sideDishes {
        id
        recipe {
          id
        }
      }
    }
  }
  ${s}
`,u=n.b`
  fragment GCreateOrder on Order {
    id
    companyBranch {
      id
    }
  }
`,l=n.b`
  mutation GCreatePickupOrder($branchId: ID!, $orderOrigin: OrderOriginEnum!) {
    order: createPickupOrder(
      order: { companyBranch: $branchId, orderOrigin: $orderOrigin }
    ) {
      ...GCreateOrder
    }
  }
  ${u}
`,m=n.b`
  mutation GCreateDeliveryOrder(
    $brandId: ID
    $branchId: ID
    $gps: InputGeoPointCreate!
    $orderOrigin: OrderOriginEnum!
  ) {
    order: createDeliveryOrder(
      order: {
        brand: $brandId
        companyBranch: $branchId
        gps: $gps
        orderOrigin: $orderOrigin
      }
    ) {
      ...GCreateOrder
    }
  }
  ${u}
`,E=n.b`
  mutation GAddToOrder($orderId: ID!, $recipeId: ID!, $sideDishes: [ID!]) {
    createOrderRecipe(
      orderRecipe: {
        order: $orderId
        recipe: $recipeId
        sideDishes: $sideDishes
      }
    ) {
      ...GOrder
    }
  }
  ${o.a}
`,p=n.b`
  mutation GAddToOrderMobile(
    $orderId: ID!
    $recipeId: ID!
    $sideDishes: [ID!]
  ) {
    createOrderRecipe(
      orderRecipe: {
        order: $orderId
        recipe: $recipeId
        sideDishes: $sideDishes
      }
    ) {
      ...GOrderMobile
    }
  }
  ${a.a}
`,b=n.b`
  mutation GChangeOrderItem($orderId: ID!, $itemId: ID!, $sideDishes: [ID!]) {
    updateOrderRecipe(
      id: $itemId
      orderRecipe: { order: $orderId, sideDishes: $sideDishes }
    ) {
      ...GOrder
    }
  }
  ${o.a}
`,I=n.b`
  mutation GRemoveOrderItem($itemId: ID!) {
    destroyOrderRecipe(id: $itemId) {
      ...GOrder
    }
  }
  ${o.a}
`,f=n.b`
  mutation GSubmitOrder(
    $orderId: ID!
    $customer: InputCustomerCreate
    $note: String
    $paymentGate: PaymentGateEnum!
    $deliverAt: DateTime!
    $agreements: [ID!]
  ) {
    finishOrder(
      id: $orderId
      order: {
        confirmedAgreements: $agreements
        customer: $customer
        paymentGate: $paymentGate
        note: $note
        deliverAt: $deliverAt
      }
    ) {
      userErrors
      gopayUrl
    }
  }
`,h=n.b`
  query GOrderPaymentStatus($orderId: ID!) {
    status: orderOnlinePaymentStatus(id: $orderId) {
      isSuccess
      userErrors
    }
  }
`,g=n.b`
  query GVamStatus($input: InputVamStatus!) {
    vamStatus(input: $input) {
      id
      name
      description
      isConfirmed
      isMandatory
    }
  }
`},221:function(e,t){},3:function(e,t,r){"use strict";var n=r(126),i=r.n(n);r(0),r(58);var o=r(38);r.d(t,"b",function(){return i.a}),r.d(t,"a",function(){return o.a})},31:function(e,t,r){"use strict";r.d(t,"b",function(){return u}),r.d(t,"a",function(){return E});var n=r(115),i=r(70),o=r(68),a=r(0),s=r.n(a),c=r(5),d=function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{c(n.next(e))}catch(t){o(t)}}function s(e){try{c(n.throw(e))}catch(t){o(t)}}function c(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(a,s)}c((n=n.apply(e,t||[])).next())})};const u=Object(n.setupI18n)(),l="en",m=["cs","sk","de","pl"];class E extends s.a.Component{constructor(){super(...arguments),this.state={language:function(){const e=new o.LocaleResolver([new o.UrlDetector("lang"),new o.NavigatorDetector],[new o.LanguageOnlyTransformer]).getLocales();return Object(c.d)("detected languages %s",e.join("; ")),e.find(e=>m.includes(e))||l}(),isReady:!1}}componentDidMount(){return d(this,void 0,void 0,function*(){yield function(e){return d(this,void 0,void 0,function*(){return m.includes(e)?(yield function(e){return d(this,void 0,void 0,function*(){let t;t=yield r(344)(`./${e}/messages.ts`),u.load({[e]:t}),Object(c.d)("loaded catalog %s",e)})}(e),u.activate(e),Object(c.d)("changed to %s",e),!0):(Object(c.d)("language %s is not supported"),!1)})}(this.state.language),this.setState({isReady:!0})})}render(){if(!1===this.state.isReady)return null;const{children:e}=this.props;return s.a.createElement(i.I18nProvider,{language:this.state.language,i18n:u},e)}}},32:function(e,t,r){"use strict";r.d(t,"b",function(){return c}),r.d(t,"a",function(){return d});var n=r(72),i=r(0),o=r.n(i),a=(r(132),r(15));const s=o.a.createContext(void 0),c=({render:e,observe:t=!1})=>o.a.createElement(s.Consumer,null,r=>{if(!r)throw new a.VError("Missing RootProvider in the tree");return!0===t?o.a.createElement(n.a,null,()=>e(r)):e(r)});const d=s.Provider},33:function(e,t,r){"use strict";var n,i,o,a,s,c,d,u,l,m,E,p,b,I,f,h,g,O,A,y,R,D,v,C,N,S,P,L,T;r.d(t,"d",function(){return h}),r.d(t,"b",function(){return y}),r.d(t,"c",function(){return R}),r.d(t,"a",function(){return C}),function(e){e.CLIENT="CLIENT",e.AFFILIATE="AFFILIATE",e.BRAND="BRAND"}(n||(n={})),function(e){e.BUSINESS="BUSINESS",e.PREMISES="PREMISES",e.MAIN_ADDRESS="MAIN_ADDRESS"}(i||(i={})),function(e){e.CZK="CZK",e.HOP="HOP",e.EUR="EUR",e.USD="USD"}(o||(o={})),function(e){e.BACKEND="BACKEND",e.FE_ADMIN="FE_ADMIN"}(a||(a={})),function(e){e.PAYMENT="PAYMENT",e.NOTIFICATION="NOTIFICATION",e.RECLAMATION="RECLAMATION",e.DELIVERY="DELIVERY",e.CANCEL="CANCEL",e.MAIN="MAIN",e.PRODUCTION="PRODUCTION",e.NEW_ORDERS="NEW_ORDERS",e.PREPARING="PREPARING",e.ON_WAY="ON_WAY",e.FINISHED="FINISHED",e.READY_TO_DELIVER="READY_TO_DELIVER",e.IN_CART="IN_CART",e.BILLS="BILLS"}(s||(s={})),function(e){e.MONDAY="MONDAY",e.TUESDAY="TUESDAY",e.WEDNESDAY="WEDNESDAY",e.THURSDAY="THURSDAY",e.FRIDAY="FRIDAY",e.SATURDAY="SATURDAY",e.SUNDAY="SUNDAY"}(c||(c={})),function(e){e.CEREALS_WITH_GLUTTEN="CEREALS_WITH_GLUTTEN",e.SHELLFISH="SHELLFISH",e.EGG="EGG",e.FISH="FISH",e.PEANUT="PEANUT",e.SOYBEANS="SOYBEANS",e.MILK="MILK",e.NUT="NUT",e.CELERY="CELERY",e.MUSTARD="MUSTARD",e.SESAME="SESAME",e.SULFUROUS="SULFUROUS",e.LUPIN="LUPIN",e.MOLLUSCS="MOLLUSCS"}(d||(d={})),function(e){e.DELIVERY="DELIVERY",e.INHOUSE="INHOUSE"}(u||(u={})),function(e){e.MAIN="MAIN"}(l||(l={})),function(e){e.DEFAULT="DEFAULT",e.ENABLED="ENABLED",e.DISABLED="DISABLED"}(m||(m={})),function(e){e.CS="CS",e.SK="SK"}(E||(E={})),function(e){e.ACCEPTED="ACCEPTED",e.REJECTED="REJECTED",e.WAITING_FOR_RESPONSE="WAITING_FOR_RESPONSE"}(p||(p={})),function(e){e.WORKING="WORKING",e.BROKEN="BROKEN"}(b||(b={})),function(e){e.CAR="CAR",e.PLANE="PLANE",e.DRON="DRON"}(I||(I={})),function(e){e.KILOGRAM="KILOGRAM",e.GRAM="GRAM",e.LITRE="LITRE",e.PIECE="PIECE"}(f||(f={})),function(e){e.GOPAY="GOPAY",e.PAYPAL="PAYPAL",e.CREDIT="CREDIT",e.CASH="CASH"}(h||(h={})),function(e){e.CASH="CASH",e.CREDIT="CREDIT",e.VOUCHER="VOUCHER"}(g||(g={})),function(e){e.MAIN="MAIN",e.SIDE_DISH="SIDE_DISH",e.COVER="COVER",e.MIXIN="MIXIN"}(O||(O={})),function(e){e.NO_LIMIT="NO_LIMIT",e.OPTIONAL="OPTIONAL",e.MAX_ONE="MAX_ONE",e.MANDATORY="MANDATORY"}(A||(A={})),function(e){e.ANDROID="ANDROID",e.IOS="IOS"}(y||(y={})),function(e){e.WEB="WEB",e.DAME_JIDLO="DAME_JIDLO",e.MOBIL_ANDROID="MOBIL_ANDROID",e.MOBIL_IOS="MOBIL_IOS",e.STAFF="STAFF",e.WIFI="WIFI",e.BAKER="BAKER",e.WEB_PARTNER="WEB_PARTNER",e.ENIGOO="ENIGOO",e.MPIZZA="MPIZZA",e.MINISITE="MINISITE",e.AFFILIATE_PIZZA_ROZVOZ="AFFILIATE_PIZZA_ROZVOZ",e.AFFILIATE_ROZVOZ_PIZZY_ZDARMA="AFFILIATE_ROZVOZ_PIZZY_ZDARMA",e.AFFILIATE_ROZVOZ_JIDLA="AFFILIATE_ROZVOZ_JIDLA"}(R||(R={})),function(e){e.AREA="AREA",e.TABLE="TABLE",e.SECTOR="SECTOR"}(D||(D={})),function(e){e.IN_CART="IN_CART",e.RECEIVED="RECEIVED",e.IN_PROGRESS="IN_PROGRESS",e.FINISHED="FINISHED",e.RECLAMATION="RECLAMATION",e.RECLAMATION_HANDLED="RECLAMATION_HANDLED",e.UNPAID="UNPAID",e.PAID="PAID",e.BY_CREDIT_CARD="BY_CREDIT_CARD",e.REFUND="REFUND",e.SHOULD_BE_PAID="SHOULD_BE_PAID",e.CUSTOMER_NOTIFIED="CUSTOMER_NOTIFIED",e.NEW="NEW",e.ONLINE="ONLINE",e.EVALUATED="EVALUATED",e.NOT_EVALUATED="NOT_EVALUATED",e.SHOWN="SHOWN",e.ACCEPTED="ACCEPTED",e.READY_TO_PRODUCE="READY_TO_PRODUCE",e.IN_PRODUCE="IN_PRODUCE",e.MADE="MADE",e.READY_TO_DELIVER="READY_TO_DELIVER",e.ON_WAY="ON_WAY",e.STUCK_ON_ROAD="STUCK_ON_ROAD",e.LATE="LATE",e.DELIVERED="DELIVERED",e.CAUSE="CAUSE",e.HANDOVER="HANDOVER",e.WAITING_FOR_CUSTOMER="WAITING_FOR_CUSTOMER",e.CUSTOMER_DID_NOT_COME="CUSTOMER_DID_NOT_COME",e.DELIVER_REJECTED="DELIVER_REJECTED",e.CANCEL_ON_WAY="CANCEL_ON_WAY",e.CANCELED="CANCELED",e.BRANCH_CANCEL="BRANCH_CANCEL",e.CUSTOMER_CANCEL="CUSTOMER_CANCEL",e.BILL_PASSED="BILL_PASSED"}(v||(v={})),function(e){e.PICKUP="PICKUP",e.MESSENGER="MESSENGER",e.DRON="DRON",e.MAIL="MAIL"}(C||(C={})),function(e){e.PRICE_SUM="PRICE_SUM",e.COMMISSION="COMMISSION",e.FEE="FEE",e.REWARD_RESULT="REWARD_RESULT",e.AFFILIATE="AFFILIATE"}(N||(N={})),function(e){e.FRESH="FRESH",e.PREPARING="PREPARING",e.COOKED="COOKED",e.CANCELED="CANCELED"}(S||(S={})),function(e){e.CREATED="CREATED",e.PENDING="PENDING",e.PAID="PAID",e.CANCELED="CANCELED",e.COMPLETED="COMPLETED"}(P||(P={})),function(e){e.CREATE="CREATE",e.UPDATE="UPDATE",e.DESTROY="DESTROY",e.REMOVE="REMOVE"}(L||(L={})),function(e){e.CONFIRMATION="CONFIRMATION",e.ADMIN_ORDER_LISTING="ADMIN_ORDER_LISTING",e.RULES="RULES",e.URL="URL",e.GRAPHIC="GRAPHIC",e.OPTIONS="OPTIONS"}(T||(T={}))},344:function(e,t,r){var n={"./cs/messages.ts":[386,3],"./de/messages.ts":[387,4],"./en-dev/messages.ts":[389,6],"./en/messages.ts":[388,5],"./pl/messages.ts":[390,7],"./sk/messages.ts":[391,8]};function i(e){var t=n[e];return t?r.e(t[1]).then(function(){var e=t[0];return r.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}i.keys=function(){return Object.keys(n)},i.id=344,e.exports=i},351:function(e,t,r){},38:function(e,t,r){"use strict";r.d(t,"a",function(){return m});var n=r(0),i=r.n(n),o=r(58),a=(r(185),r(15)),s=r(5),c=r(56),d=r(10);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r};function m(e){return t=>{var{render:r,renderFragment:n,renderLoading:m=!0,renderError:E=!0,children:p}=t,b=l(t,["render","renderFragment","renderLoading","renderError","children"]);return i.a.createElement(o.Query,u({query:e},b),e=>{if(e.loading||!e.data){if("function"===typeof m)return m(e);if(!0===m)return i.a.createElement(c.a,null)}if(e.error){if(Object(d.c)(e.error),Object(s.b)(e.error),"function"===typeof E)return E(e);if(!0===E)throw new a.VError(e.error,"Query error");return null}if(e.data){if(n)return i.a.createElement(i.a.Fragment,null,n(e.data,e));if(r)return r(e.data,e)}return p||null})}}},385:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),o=r(58),a=r(29),s=r.n(a),c=r(32),d=r(2),u=r(86),l=r.n(u),m=r(17),E=r(5),p=function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{c(n.next(e))}catch(t){o(t)}}function s(e){try{c(n.throw(e))}catch(t){o(t)}}function c(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(a,s)}c((n=n.apply(e,t||[])).next())})};const{persistenceKey:b}=m.a;function I(e){return p(this,void 0,void 0,function*(){const t=Object(d.g)(e).name,r=`${b}_${t}`,n=e=>l.a.setItem(r,e);try{const t=yield l.a.getItem(r);null!==t?(Object(d.a)(e,t),Object(E.g)("restored state %s",r)):(yield n(Object(d.f)(e)),Object(E.g)("initialized state %s",r))}catch(i){Object(E.g)("persistence failed",i),l.a.removeItem(r)}Object(d.h)(e,n)})}var f=r(184),h=r(10),g=r(16),O=r.n(g);const A=d.i.model().views(e=>({get log(){const t=Object(d.d)(e).trim()||Object(d.g)(e).name;return O()(`c2e:model/${t}`)},get env(){return Object(d.c)(e)},get client(){const{client:t}=Object(d.c)(e);return t},get root(){return Object(d.e)(e)}}));var y=function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{c(n.next(e))}catch(t){o(t)}}function s(e){try{c(n.throw(e))}catch(t){o(t)}}function c(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(a,s)}c((n=n.apply(e,t||[])).next())})};const R=A.named("Auth").props({token:d.i.maybeNull(d.i.string),userId:d.i.maybeNull(d.i.string)}).views(e=>({get isValid(){return null!==e.token},getClientHeaders:()=>({Authorization:`Bearer ${e.token}`})})).actions(e=>({authenticate(t,r){e.token=t,e.userId=r,Object(h.a)(r,t)}})).actions(e=>{let t;const r=Object(f.a)((r,n)=>y(void 0,void 0,void 0,function*(){return e.token||(yield(()=>y(void 0,void 0,void 0,function*(){if(!t){t=D();const{token:r,userId:n}=yield t;e.authenticate(r,String(n)),t=null}return t}))()),{headers:e.getClientHeaders()}}));return{authenticateClient(){e.client.link=r.concat(e.client.link)}}}).preProcessSnapshot(e=>(e.userId&&e.token&&Object(h.a)(e.userId,e.token),e));function D(){const{endpoint:e}=m.a;if(!e)throw new Error("Missing endpoint in configuration.");Object(E.a)("retrieving guest token...");const t=`${e}/users/token?guest=true`;return Object(E.a)("token retrieved"),fetch(t,{headers:{Accept:"application/json"}}).then(e=>e.json())}var v=r(1),C=r(33),N=r(67);const S=A.named("Banner").props({branchId:d.i.identifier,closedAt:d.i.maybe(d.i.Date),installedAt:d.i.maybe(d.i.Date)}).views(e=>({get shouldBeVisible(){return!e.root.business.isMobileApp&&(!!(e.closedAt&&Object(N.b)(new Date,e.closedAt)>15)||(!!(e.installedAt&&Object(N.b)(new Date,e.installedAt)>90)||!Boolean(e.closedAt||e.installedAt)))}})).actions(e=>({setInstalledNow(){e.installedAt=new Date},setClosedNow(){e.closedAt=new Date}}));var P=r(3);const L=P.b`
  fragment GCompanyBranch on CompanyBranch {
    id
    code: wac
    brand {
      id
      name
      code: wac
    }
    company {
      id
    }
    address {
      country {
        phonePrefix
      }
    }
    phone
  }
`,T=P.b`
  query GBusinessCodeLookup($code: String, $url: String) {
    lookup: companyBranchLookUp(wac: $code, hostUrl: $url) {
      branch: companyBranch {
        ...GCompanyBranch
      }
      isBrand: isBrandWac
      isMobileApp
      knownBasePath
      orderOrigin
    }
  }
  ${L}
`;var _=function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{c(n.next(e))}catch(t){o(t)}}function s(e){try{c(n.throw(e))}catch(t){o(t)}}function c(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(a,s)}c((n=n.apply(e,t||[])).next())})};const w=A.named("Business").props({code:d.i.maybeNull(d.i.string),banners:d.i.map(S)}).volatile(()=>({isBrand:!1,isMobileApp:!1,branch:null,country:null,orderOrigin:C.c.WEB,routerBasePath:""})).views(e=>({get branchId(){return e.branch&&e.branch.id},get companyId(){return e.branch&&e.branch.company.id},get brandId(){return e.branch&&e.branch.brand.id},get isValid(){return null!==e.branch},get requestedCode(){let t=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_LOCAL_ENDPOINT:"https://be.dev.admin.c2e.deep-vision.cloud",REACT_APP_STAGE:"prod"}).REACT_APP_BUSINESS_CODE||null;if(!t){t=new window.URL(window.location.href).searchParams.get(G)||null||e.code}return t}})).actions(e=>({updateFromLookup(t){const{isBrand:r,isMobileApp:n,knownBasePath:i,orderOrigin:o,branch:a}=t;a&&(e.isBrand=r,e.isMobileApp=n,e.branch=a,e.country=a.address.country||null,e.routerBasePath=i,e.orderOrigin=o,a.id!==e.root.order.branchId&&e.root.order.orderCancel(),e.code=null)},mockBranchData(t){e.branch=t}})).actions(e=>({afterAttach(){return _(this,void 0,void 0,function*(){Object(v.D)(()=>e.root.initialized,()=>_(this,void 0,void 0,function*(){const{data:t}=yield e.client.query({query:T,variables:{code:e.requestedCode,url:window.location.href}});if(!(t&&t.lookup&&t.lookup.branch))return Object(E.e)("no business found, used code %s",e.requestedCode),void window.location.replace(m.a.redirectOnFail);e.updateFromLookup(t.lookup),Object(h.f)({requestedCode:e.requestedCode,branchId:e.branchId,brandId:e.brandId,companyId:e.companyId,isBrand:e.isBrand}),Object(E.e)("identified branch %s, brand %s; company %s, isBrand: %s",e.branchId,e.brandId,e.companyId,e.isBrand)}))})},ensureBannerForCurrentBranch(){const t=e.branchId;return e.banners.has(t)||e.banners.set(t,{branchId:t}),e.banners.get(t)}})),G="wac";const M=A.named("Config").props({orderItemsMax:50});var $=r(15),F=r(57),j=r(12);const B=P.b`
  fragment GLocationResolution on AddressResolvedLocation {
    finalAddress {
      ...GJsonAddress
    }
    isResolved
    isValidAddress
    inDeliveryLocation
    gpsCoordinates {
      latitude
      longitude
    }
    companyBranch {
      id
      isOpen
    }
  }
  ${j.e}
`,U=P.b`
  query GResolveLocation(
    $brandId: ID
    $branchId: ID
    $address: String
    $latitude: Float
    $longitude: Float
  ) {
    resolveLocation(
      brand: $brandId
      companyBranch: $branchId
      address: $address
      latitude: $latitude
      longitude: $longitude
    ) {
      ...GLocationResolution
    }
  }
  ${B}
`;var k=function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{c(n.next(e))}catch(t){o(t)}}function s(e){try{c(n.throw(e))}catch(t){o(t)}}function c(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(a,s)}c((n=n.apply(e,t||[])).next())})};const V=A.named("Location").props({latitude:d.i.optional(d.i.number,1/0),longitude:d.i.optional(d.i.number,1/0),searchValue:d.i.optional(d.i.string,""),address:d.i.maybeNull(d.i.string)}).volatile(e=>({branchId:null,isOpen:!0,isResolved:!1,isStreetAddress:!1,inDeliveryLocation:!1,geolocationDisabled:!1,isResolving:!1})).views(e=>({get isGeolocationAvailable(){return Boolean(e.env.geolocation&&!e.geolocationDisabled)},get hasLocation(){return e.latitude!==1/0||e.longitude!==1/0},get hasAddress(){return Boolean(e.address)},get isDeliveryAddress(){return e.isResolved&&e.isStreetAddress&&e.inDeliveryLocation},get hasFinishedSearch(){return(e.searchValue.length>0||e.address)&&!e.isResolving},get geoPoint(){return{latitude:e.latitude,longitude:e.longitude}},get latLng(){const{latitude:t,longitude:r}=e;return Object(F.a)({latitude:t,longitude:r})}})).actions(e=>({setLocation({latitude:t,longitude:r}){e.latitude=t,e.longitude=r}})).actions(e=>({setResolutionResult(t){const{finalAddress:r}=t;r&&(e.address=`${r.street} ${r.houseNumber}, ${r.city}`),e.branchId=t.companyBranch?t.companyBranch.id:null,e.isResolved=t.isResolved,e.isStreetAddress=t.isValidAddress,e.inDeliveryLocation=t.inDeliveryLocation,t.isResolved?(e.setLocation(t.gpsCoordinates),e.log("resolved as %s",e.address)):e.log("not resolved")},disableGeolocation(){e.geolocationDisabled=!1},clearAddress(){e.address=""},setIsResolving(t){e.isResolving=t}})).actions(e=>{const{business:t}=e.root,r=r=>k(void 0,void 0,void 0,function*(){e.setIsResolving(!0);const n=t.isBrand?{brandId:t.brandId}:{branchId:t.branchId},i=Object.assign({},n,r),{data:o}=yield e.client.query({query:U,variables:i});null!==o&&e.setResolutionResult(o.resolveLocation),e.setIsResolving(!1)});return{queryInitialUserLocation(){e.log("resolving initial user location..."),e.hasLocation?r({latitude:e.latitude,longitude:e.longitude}):e.searchValue?r({address:e.searchValue}):r()},withUserAddress(t){e.searchValue=t,""===t?e.clearAddress():(e.log("resolving user address: %s",t),r({address:t}))},withUserLocation(t){e.log("resolving user location: %j",t),r(t)},attemptGeolocation(){e.log("geolocating..."),e.env.geolocation.getCurrentPosition(({coords:e})=>{r(e)},t=>{e.log(new $.VError("failed geolocation",t)),e.disableGeolocation()},{enableHighAccuracy:!0,maximumAge:6e4})}}}).actions(e=>({afterAttach(){Object(v.D)(()=>e.root.initialized&&e.root.business.isValid,()=>{e.queryInitialUserLocation()})}})),x=49.8037633,H=15.4749126,Y=A.named("Map").props({zoom:d.i.optional(d.i.number,16),latitude:d.i.optional(d.i.number,x),longitude:d.i.optional(d.i.number,H)}).volatile(e=>({mapRef:null,clickPoint:null})).views(e=>({get isReady(){return null!==e.mapRef},get center(){return Object(F.a)(e)}})).actions(e=>({setMapRef(t){e.mapRef=t},updateZoom(){e.mapRef&&(e.zoom=e.mapRef.getZoom())},updatePosition(){if(e.mapRef){const t=e.mapRef.getCenter();e.latitude=t.lat(),e.longitude=t.lng()}},panToLocation(t,r=2e3){e.mapRef&&e.mapRef.panTo(Object(F.a)(t))},onClick(t){e.clickPoint=Object(F.b)(t.latLng)},clearClickPoint(){e.clickPoint=null}}));var q=r(150),W=r.n(q),Z=function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{c(n.next(e))}catch(t){o(t)}}function s(e){try{c(n.throw(e))}catch(t){o(t)}}function c(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(a,s)}c((n=n.apply(e,t||[])).next())})};const K="https://gate.gopay.cz/gp-gw/js/embed.js",z="https://gw.sandbox.gopay.com/gp-gw/js/embed.js";function J(e){return Z(this,void 0,void 0,function*(){return Object(E.f)("GoPay init",e),yield function(e){const t=e.includes("gw.sandbox.gopay.com")?z:K;return Object(E.f)("GoPay script url",t),new Promise(e=>{W()(t,e)})}(e),t=function(e){return{gatewayUrl:e,inline:!0}}(e),new Promise(e=>{Object(E.f)("GoPay checkout"),_gopay.checkout(t,function(t){Object(E.f)("GoPay result",t),e(t.id)})});var t})}var Q=r(46),X=r(31),ee=r(45),te=r(83),re=r(111),ne=r(84),ie=r(22),oe=function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{c(n.next(e))}catch(t){o(t)}}function s(e){try{c(n.throw(e))}catch(t){o(t)}}function c(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(a,s)}c((n=n.apply(e,t||[])).next())})};const ae=A.named("Order").props({branchId:d.i.maybeNull(d.i.string),orderId:d.i.maybeNull(d.i.string),orderMethod:C.a.MESSENGER,payment:C.d.GOPAY,firstname:"",lastname:"",email:"",phone:"",phonePrefix:"",note:""}).volatile(e=>({isSubmitting:!1,isGoPayChecking:!1,submitErrors:null,agreements:[],lastActiveRecipeId:null,isVamInitialized:!1})).views(e=>({get hasOrder(){return null!==e.orderId},get fragmentOrderId(){return`Order-${e.orderId}`},get usingDeliveryOrderMethod(){return e.orderMethod===C.a.MESSENGER},get usingPickupOrderMethod(){return e.orderMethod===C.a.PICKUP},get hasErrors(){return Boolean(e.submitErrors&&e.submitErrors.length>0)},get defaultPhonePrefix(){return e.root.business.isValid&&e.root.business.country?e.root.business.country.phonePrefix:"+"},getSubmitVariables:t=>({orderId:e.orderId,customer:{firstName:t.firstname,lastName:t.lastname,emails:[{email:t.email}],phones:[{phone:`${t.phonePrefix}${t.phone}`}]},note:t.note,paymentGate:t.payment,deliverAt:Object(N.a)(new Date,1),agreements:t.agreements.filter(Q.a.propEq("isConfirmed",!0)).map(Q.a.prop("id"))})})).actions(e=>({useOrderMethod(t){e.orderMethod=t},setBranch(t){e.branchId=t},orderCreated(t){e.orderId=t.id,e.branchId=t.companyBranch.id,Object(E.e)("order %s created for branch %s",e.orderId,e.branchId)},orderPaid(t){e.orderId!==t&&(e.orderId=t,Object(E.e)("order %s replaced by %s due to successful payment status"))},orderCancel(){(e.branchId||e.orderId)&&Object(E.e)("cancel order %s, was at branch %s",e.root.order.orderId,e.root.order.branchId),e.orderId=null,e.branchId=null},submitFinished(){e.isSubmitting=!1},submitFailed(t){e.isSubmitting=!1,e.submitErrors=t||[X.b._("Error during sending order. Please try again later.")]},vamFailed(){e.submitErrors=[X.b._("Internal error during sending order. Order can not be finished right now. Our team was notified and is working on fix. Thank you for your understanding.")],e.isVamInitialized=!1},clearErrors(){e.submitErrors=null},goPayStatusCheck(t){e.isGoPayChecking=t},useAgreements(t){Array.isArray(t)&&(e.agreements=t),e.isVamInitialized=!0},setUsedRecipeId(t){e.lastActiveRecipeId=t},queryPaymentStatus(t=e.orderId){return oe(this,void 0,void 0,function*(){const r={orderId:t};try{return(yield e.client.query({fetchPolicy:"no-cache",query:ie.h,variables:r})).data.status}catch(n){return Object(E.f)("failed to verify payment status for order %s: ",t),null}})},rememberFormValues(t){e.root.user.shouldRememberForm?(e.firstname=t.firstname,e.lastname=t.lastname,e.email=t.email,e.phone=t.phone,e.phonePrefix=t.phonePrefix,e.note=t.note):(e.firstname="",e.lastname="",e.email="",e.phone="",e.phonePrefix="",e.note="")}})).actions(e=>({createDeliveryOrder(t){return oe(this,void 0,void 0,function*(){const{business:r}=e.root,n={gps:e.root.location.geoPoint,orderOrigin:r.orderOrigin};r.isBrand?n.brandId=r.brandId:n.branchId=r.branchId;const{data:i}=yield e.client.mutate({fetchPolicy:"no-cache",mutation:ie.d,variables:n}),{order:o}=i;e.orderCreated(o),e.initVam(),t()})},createPickupOrder(t,r){return oe(this,void 0,void 0,function*(){const{business:n}=e.root,i={branchId:t,orderOrigin:n.orderOrigin},{data:o}=yield e.client.mutate({fetchPolicy:"no-cache",mutation:ie.e,variables:i}),{order:a}=o;e.orderCreated(a),e.initVam(),r()})},prefetchPickup(){const{business:t}=e.root;t.isBrand?e.client.query({query:re.b,variables:{brandId:t.brandId}}):e.client.query({query:re.a,variables:{branchId:t.branchId}})},prefetchFoodMenu(t){t&&e.client.query({query:te.b,variables:{branchId:t}})},prefetchFood(t){e.client.query({query:ie.g,variables:{recipeId:t}})},addFromRecipe(t,r=[]){return oe(this,void 0,void 0,function*(){const n={orderId:e.orderId,recipeId:t,sideDishes:r},i=e.client.readFragment({id:e.fragmentOrderId,fragment:ee.a,fragmentName:"GOrder"}),o=e.client.readFragment({id:`Recipe-${t}`,fragment:j.g}),a={__typename:"Mutation",createOrderRecipe:Object.assign({},i,{countWares:i?i.countWares+1:1,items:[{__typename:"OrderRecipe",id:"-1",price:{__typename:"PriceConverted",value:0,formattedValue:"---"},recipe:Object.assign({},o,{sideDishes:[]}),sideDishes:[]},...i?i.items:[]]})};yield e.client.mutate({mutation:ie.b,variables:n,optimisticResponse:a})})},addFromRecipeMobile(t,r=[]){return oe(this,void 0,void 0,function*(){const n={orderId:e.orderId,recipeId:t,sideDishes:r},i=e.client.readFragment({id:e.fragmentOrderId,fragment:ne.a,fragmentName:"GOrderMobile"}),o={__typename:"Mutation",createOrderRecipe:Object.assign({},i,{countWares:i?i.countWares+1:1,items:[{__typename:"OrderRecipe",id:"-1",recipe:{__typename:"Recipe",id:t}},...i?i.items:[]]})};yield e.client.mutate({mutation:ie.a,variables:n,optimisticResponse:o})})},updateItem(t,r=[]){return oe(this,void 0,void 0,function*(){const n={orderId:e.orderId,itemId:t,sideDishes:r};yield e.client.mutate({mutation:ie.c,variables:n})})},removeItemFromCart(t){const r={itemId:t},n=e.client.readFragment({fragment:ee.a,fragmentName:"GOrder",id:e.fragmentOrderId});e.client.mutate({mutation:ie.i,variables:r,optimisticResponse:{__typename:"Mutation",destroyOrderRecipe:Object.assign({},n,{countWares:n?n.countWares-1:0,items:n?n.items.filter(e=>e.id!==t):[]})}})},initVam(){return oe(this,void 0,void 0,function*(){const t={input:{orderId:e.orderId,email:e.email,firstname:e.firstname,lastname:e.lastname,phone:e.phone}};try{const n=yield e.client.query({query:ie.k,variables:t});n.data&&e.useAgreements(n.data.vamStatus)}catch(r){Object(h.c)(r,{variables:t}),e.vamFailed()}})},updateVam(t){return oe(this,void 0,void 0,function*(){const r=`${t.phonePrefix.trim()}${t.phone.trim()}`,n={input:{email:t.email.trim(),phone:r,firstname:t.firstname.trim(),lastname:t.lastname.trim(),orderId:e.orderId}};try{const t=yield e.client.query({query:ie.k,variables:n});t.data&&e.useAgreements(t.data.vamStatus)}catch(i){Object(h.c)(i,{variables:n}),e.vamFailed()}})},submitOrder:t=>oe(void 0,void 0,void 0,function*(){let r;e.isSubmitting=!0,e.rememberFormValues(t);try{r=yield e.client.mutate({fetchPolicy:"no-cache",mutation:ie.j,variables:e.getSubmitVariables(t)})}catch(o){throw e.submitFailed(),Object(h.c)(new $.VError("submit mutation error: %j",o))}if(r.errors&&r.errors.length||!r.data)throw e.submitFailed(),Object(h.c)(new $.VError("Submit graphql errors: %j",r.errors));const n=r.data.finishOrder;if(n.userErrors&&n.userErrors.length)throw e.submitFailed(n.userErrors),Object(h.c)(new $.VError("Order user errors: %j",n.userErrors));if(t.payment===C.d.CASH)return void e.submitFinished();if(!n.gopayUrl)throw e.submitFailed(),Object(h.c)(new Error("GoPay url missing from response"));yield J(n.gopayUrl),e.goPayStatusCheck(!0);const i=yield e.queryPaymentStatus();if(e.goPayStatusCheck(!1),!i||!i.isSuccess)throw e.submitFailed(i&&i.userErrors||void 0),Object(h.c)(new $.VError("GoPay payment was not successful"));e.submitFinished()})})).actions(e=>({afterAttach(){const t=new window.URL(window.location.href),r=t.searchParams.get("orderId");Object(v.i)(()=>oe(this,void 0,void 0,function*(){if(!(r&&e.root.initialized&&e.root.auth.isValid))return;const n=setTimeout(()=>e.goPayStatusCheck(!0),500),i=yield e.queryPaymentStatus(r);if(clearTimeout(n),e.goPayStatusCheck(!1),i&&i.isSuccess)e.orderPaid(r),t.search="",t.pathname="/finish",location.replace(t.toString());else{const t=e.root.business.branch.phone;e.submitFailed([X.b._("We were unable to verify status of your payment. Please contact operator using number {phone}",{phone:t})])}}))}}));var se=r(166),ce=r.n(se);const de=P.b`
  query GCompanyBranchStyle($branchId: ID!) {
    companyBranch(id: $branchId) {
      id
      styles {
        active
        main
        mainSecondary
        storeLogo
        storeLogoMobile
        backgroundCart
      }
    }
  }
`;var ue=function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{c(n.next(e))}catch(t){o(t)}}function s(e){try{c(n.throw(e))}catch(t){o(t)}}function c(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(a,s)}c((n=n.apply(e,t||[])).next())})};const le=A.named("Theme").props({storeLogo:d.i.maybeNull(d.i.string),storeLogoMobile:d.i.maybeNull(d.i.string),backgroundCart:d.i.maybeNull(d.i.string),primary:d.i.maybeNull(d.i.string),secondary:d.i.maybeNull(d.i.string),secondaryHover:d.i.maybeNull(d.i.string),tertiary:d.i.maybeNull(d.i.string),tertiaryHover:d.i.maybeNull(d.i.string),tertiaryText:"white",unselected:"#E5E5E5",unselectedHover:"#EDEDED",unselectedText:"#5A5A5A"}).volatile(e=>({loading:!0})).actions(e=>({applyStyle(t){Object.assign(e,{primary:t.active?t.active:"#54984a",secondary:t.main?t.main:"#99230e",secondaryHover:me(t.main?t.main:"#99230e"),tertiary:t.mainSecondary?t.mainSecondary:"#d9a700",tertiaryHover:me(t.mainSecondary?t.mainSecondary:"#d9a700"),tertiaryText:"white",unselected:"#E5E5E5",unselectedHover:"#EDEDED",unselectedText:"#5A5A5A",storeLogo:t.storeLogo,storeLogoMobile:t.storeLogoMobile,backgroundCart:t.backgroundCart}),e.loading=!1}})).actions(e=>({afterAttach(){const t=t=>ue(this,void 0,void 0,function*(){const{data:r}=yield e.client.query({query:de,variables:{branchId:t}});return r.companyBranch.styles});Object(v.x)(()=>e.root.business.branchId,r=>{r&&t(r).then(e.applyStyle)})}}));function me(e){return ce()(e).lighten(.2).hsl().string()}const Ee=A.named("User").props({rememberForm:d.i.maybeNull(d.i.boolean)}).volatile(e=>({closingTimeAlertHidden:!1,orderLimitAlertHidden:!0})).actions(e=>({showClosingTime(){e.closingTimeAlertHidden=!1},hideClosingTime(){e.closingTimeAlertHidden=!0},showOrderLimit(){e.orderLimitAlertHidden=!1},hideOrderLimit(){e.orderLimitAlertHidden=!0},setFormRememberYes(){e.rememberForm=!0},setFormRememberNo(){e.rememberForm=!1}})).views(e=>({get shouldRememberForm(){return!1!==e.rememberForm}})),pe=A.named("Root").props({auth:d.i.optional(R,{}),business:d.i.optional(w,{}),config:d.i.optional(M,{}),map:d.i.optional(Y,{}),order:d.i.optional(ae,{}),location:d.i.optional(V,{}),theme:d.i.optional(le,{}),user:d.i.optional(Ee,{})}).volatile(e=>({initialized:!1})).views(e=>({get persistedModels(){return[e.auth,e.user,e.business,e.location,e.order,e.map]}})).actions(e=>({init:Object(d.b)(function*(){e.initialized||(yield Promise.all(e.persistedModels.map(I)),e.initialized=!0)})}));r(351);var be=r(70),Ie=r(39);const fe=({children:e,prod:t=!1})=>{let n;return t?(n=r(175).ProductionErrorBoundary,i.a.createElement(n,{dispatchErrorReporting:({error:e,info:t})=>{Object(h.e)(e,t)}},e)):(n=r(175).DeveloperErrorBoundary,i.a.createElement(n,null,e))};class he extends i.a.Component{componentDidMount(){const{root:e}=this.props;Object(v.D)(()=>e.initialized&&e.location.isGeolocationAvailable,()=>{Object(v.D)(()=>!e.location.isGeolocationAvailable,()=>{window.alert(X.b._("Your browser does not support geolocation."))})})}render(){return null}}const ge=()=>i.a.createElement(c.b,{render:e=>i.a.createElement(he,{root:e})});var Oe=r(56),Ae=r(71),ye=r(119),Re=r.n(ye);const De=e=>i.a.createElement(c.b,{observe:!0,render:e=>e.business.isValid?i.a.createElement(Re.a,{title:`${e.business.branch.brand.name} - ${m.a.pageTitleSuffix}`}):i.a.createElement(Re.a,{title:m.a.pageTitleSuffix})}),ve=Object(Ie.b)("div").withConfig({displayName:"LandscapeMessage"})`
  font-size: 1.1rem;
  padding: 3rem;
  vertical-align: center;
`,Ce=i.a.lazy(()=>Promise.all([r.e(0),r.e(1),r.e(9)]).then(r.bind(null,770))),Ne=i.a.lazy(()=>Promise.all([r.e(0),r.e(12),r.e(1),r.e(10)]).then(r.bind(null,769)));var Se=()=>i.a.createElement(fe,{prod:!0},i.a.createElement(ge,null),i.a.createElement(De,null),i.a.createElement(i.a.Suspense,{fallback:i.a.createElement(Oe.a,null)},i.a.createElement(Ae.a,null,i.a.createElement(Ce,null)),i.a.createElement(Ae.b,null,i.a.createElement(Ne,null))),i.a.createElement(Ae.c,null,i.a.createElement(ve,null,i.a.createElement(be.Trans,{id:"We know, you like space. Our app is optimised for desktop. Leave your phone in portrait for now."})))),Pe=r(72),Le=r(123);const Te=({root:e,children:t})=>i.a.createElement(Pe.a,null,()=>i.a.createElement(Le.a,{basename:e.business.routerBasePath,key:e.business.routerBasePath},t));var _e=r(60);var we=({children:e})=>i.a.createElement(c.b,{observe:!0,render:({auth:t,theme:r})=>r.loading?i.a.createElement(Oe.a,null):i.a.createElement(_e.a,{theme:r},e)}),Ge=r(771),Me=r(176),$e=r(4),Fe=r(195),je=r(192),Be=r.n(je),Ue=r(193),ke=r.n(Ue),Ve=r(196),xe=r(194);const He=O()("graph:error"),Ye=({graphQLErrors:e,networkError:t,operation:r})=>{e&&(Object(h.d)(e,{query:r.operationName,variables:r.variables}),e.map(({message:e,locations:t,path:r})=>He(`[GraphQL error]: Message: ${e}, Location: ${t}, Path: ${r}`))),t&&He(`[Network error]: ${t}`)},qe=()=>Object(xe.a)(Ye),We=v.v.box(navigator.onLine);window.addEventListener("offline",()=>We.set(!1)),window.addEventListener("online",()=>We.set(!0));const Ze=()=>We.get();const Ke=function(){const e=new Ge.a({dataIdFromObject:e=>null!=e.__typename&&null!=e.id?`${e.__typename}-${e.id}`:null}),t=Be()({enabled:!1}),r=new Fe.a({uri:`${m.a.endpoint}/graphql`,credentials:"same-origin"}),n=new Ve.a({delay:{initial:300,max:1/0,jitter:!0},attempts:{max:5,retryIf:(e,t)=>!!e}}),i=function(){const e=new ke.a;return Object(v.i)(()=>{Ze()?(Object(E.c)("client is online"),e.open()):(Object(E.c)("client is offline"),e.close())}),e}(),o=qe(),a=$e.ApolloLink.from([t,n,i,o,r]);return new Me.a({link:a,cache:e})}(),ze=function(e){const t=pe.create({},{client:e,fetch:window.fetch,geolocation:navigator.geolocation});return t.init(),t.auth.authenticateClient(),t}(Ke),Je=()=>i.a.createElement(c.a,{value:ze},i.a.createElement(o.ApolloProvider,{client:Ke},i.a.createElement(X.a,{root:ze},i.a.createElement(Te,{root:ze},i.a.createElement(we,null,i.a.createElement(Se,null))))));Object(h.b)(()=>{s.a.render(i.a.createElement(Je,null),document.getElementById("root"))})},39:function(e,t,r){"use strict";r.d(t,"b",function(){return a});var n=r(60);r.d(t,"a",function(){return n.b});var i=r(186),o=r.n(i);const a=e=>o()(Object(n.c)(e))},45:function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"b",function(){return s});var n=r(3),i=r(12);const o=n.b`
  fragment GOrder on Order {
    id
    countWares
    items {
      ...GCartItem
      price: priceWithSideDishes {
        ...GPrice
      }
      sideDishes {
        ...GCartItem
      }
    }
    coverPrice {
      ...GPrice
    }
    transportFee {
      ...GPrice
    }
    discounts {
      code
      description
      price {
        ...GPrice
      }
    }
    totalDiscount {
      ...GPrice
    }
    totalSum {
      ...GPrice
    }
  }
  ${i.b}
  ${i.f}
`,a=n.b`
  query GCartView($orderId: ID!) {
    order(id: $orderId) {
      ...GOrder
      deliveryType {
        enum
      }
    }
  }
  ${o}
`,s=Object(n.a)(a)},46:function(e,t,r){"use strict";var n=r(174);r.d(t,"a",function(){return n})},5:function(e,t,r){"use strict";r.d(t,"e",function(){return o}),r.d(t,"c",function(){return a}),r.d(t,"b",function(){return s}),r.d(t,"a",function(){return c}),r.d(t,"g",function(){return d}),r.d(t,"f",function(){return u}),r.d(t,"h",function(){return l}),r.d(t,"d",function(){return m});var n=r(16),i=r.n(n);const o=i()("c2e:app"),a=(i()("c2e:debug"),i()("c2e:graph")),s=i()("c2e:error"),c=i()("c2e:auth"),d=(i()("c2e:routing"),i()("c2e:persist")),u=i()("c2e:order"),l=i()("c2e:sentry"),m=i()("c2e:lang")},56:function(e,t,r){"use strict";var n=r(0),i=r.n(n),o=r(127),a=r.n(o);t.a=(({noMargin:e=!1})=>i.a.createElement("div",{style:{display:"flex",alignSelf:"center",justifyContent:"center"},"data-testid":"loader"},i.a.createElement(a.a,{name:"pacman",style:e?{}:{marginTop:"45vh"}})))},57:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i});const n=e=>({lat:Number(e.latitude),lng:Number(e.longitude)}),i=e=>({latitude:Number(e.lat()),longitude:Number(e.lng())})},71:function(e,t,r){"use strict";r.d(t,"a",function(){return d}),r.d(t,"b",function(){return u}),r.d(t,"c",function(){return l}),r.d(t,"d",function(){return m}),r.d(t,"e",function(){return E});var n=r(0),i=r.n(n),o=r(87),a=r.n(o),s=r(39);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const d=e=>i.a.createElement(a.a,c({},e,{minWidth:768})),u=e=>i.a.createElement(a.a,c({},e,{orientation:"portrait",maxWidth:767})),l=e=>i.a.createElement(a.a,c({},e,{orientation:"landscape",maxWidth:767})),m=(...e)=>s.a`
  @media (min-width: ${48}em) {
    // @ts-ignore
    ${Object(s.a)(...e)};
  }
`,E=(...e)=>s.a`
  @media (max-width: ${767/16}em) {
    // @ts-ignore
    ${Object(s.a)(...e)};
  }
`},83:function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"a",function(){return s}),r.d(t,"d",function(){return d}),r.d(t,"c",function(){return u});var n=r(3),i=r(38),o=r(12);const a=n.b`
  query GFoodMenu($branchId: ID!) {
    wareCategories(
      wareCategoryType: MAIN
      companyBranch: $branchId
      enabled: true
    ) {
      ...GFoodMenuCategory
      recipes(enabled: true, isAvailable: true) {
        ...GFoodMenuRecipe
      }
    }
  }

  fragment GFoodMenuCategory on WareCategory {
    id
    nameLabel
    pictogram
  }

  fragment GFoodMenuRecipe on Recipe {
    id
    image(width: 192, height: 192)
    nameLabel
    descriptionLabel
    price {
      ...GPrice
    }
    sideDishCount: sideDishesWareCategoriesCount
  }

  ${o.f}
`,s=n.b`
  fragment GCartPresence on Order {
    items {
      id
      recipe {
        id
      }
    }
  }
`,c=n.b`
  query GFoodMenuCartPresence($orderId: ID!) {
    order(id: $orderId) {
      id
      ...GCartPresence
    }
  }
  ${s}
`,d=Object(i.a)(c),u=Object(i.a)(a)},84:function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return c});var n=r(3),i=r(12),o=r(83);const a=n.b`
  fragment GOrderMobile on Order {
    id
    totalSum {
      ...GPrice
    }
    countWares
    ...GCartPresence
  }
  ${i.f}
  ${o.a}
`,s=n.b`
  query GMobileCart($orderId: ID!) {
    order(id: $orderId) {
      ...GOrderMobile
    }
  }
  ${a}
`,c=Object(n.a)(s)}},[[204,13,11]]]);
//# sourceMappingURL=main.dba9266d.chunk.js.map