(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{104:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.latLngToGps=t.gpsToLatLng=void 0;t.gpsToLatLng=(e=>({lat:Number(e.latitude),lng:Number(e.longitude)}));t.latLngToGps=(e=>({latitude:Number(e.lat()),longitude:Number(e.lng())}))},107:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryCartView=t.CartViewQuery=t.OrderFragment=void 0;var n,o=(n=r(18))&&n.__esModule?n:{default:n},a=r(99),i=r(25);const d=o.default`
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
  ${i.CartItemFragment}
  ${i.PriceFragment}
`;t.OrderFragment=d;const s=o.default`
  query GCartView($orderId: ID!) {
    order(id: $orderId) {
      ...GOrder
      deliveryType {
        enum
      }
    }
  }
  ${d}
`;t.CartViewQuery=s;const u=(0,a.buildQuery)(s);t.QueryCartView=u},108:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryFoodMenu=t.QueryFoodMenuCartPresence=t.FoodMenuCartPresenceQuery=t.CartPresenceFragment=t.FoodMenuQuery=void 0;var n,o=(n=r(18))&&n.__esModule?n:{default:n},a=r(62),i=r(25);const d=o.default`
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

  ${i.PriceFragment}
`;t.FoodMenuQuery=d;const s=o.default`
  fragment GCartPresence on Order {
    items {
      id
      recipe {
        id
      }
    }
  }
`;t.CartPresenceFragment=s;const u=o.default`
  query GFoodMenuCartPresence($orderId: ID!) {
    order(id: $orderId) {
      id
      ...GCartPresence
    }
  }
  ${s}
`;t.FoodMenuCartPresenceQuery=u;const l=(0,a.buildQuery)(u);t.QueryFoodMenuCartPresence=l;const c=(0,a.buildQuery)(d);t.QueryFoodMenu=c},109:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryMobileCart=t.MobileCartQuery=t.OrderMobileFragment=void 0;var n,o=(n=r(18))&&n.__esModule?n:{default:n},a=r(99),i=r(25),d=r(108);const s=o.default`
  fragment GOrderMobile on Order {
    id
    totalSum {
      ...GPrice
    }
    countWares
    ...GCartPresence
  }
  ${i.PriceFragment}
  ${d.CartPresenceFragment}
`;t.OrderMobileFragment=s;const u=o.default`
  query GMobileCart($orderId: ID!) {
    order(id: $orderId) {
      ...GOrderMobile
    }
  }
  ${s}
`;t.MobileCartQuery=u;const l=(0,a.buildQuery)(u);t.QueryMobileCart=l},16:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseModel=void 0;var n,o=(n=r(85))&&n.__esModule?n:{default:n},a=r(13);const i=a.types.model().views(e=>({get log(){const t=(0,a.getPath)(e).trim()||(0,a.getType)(e).name;return(0,o.default)(`c2e:model/${t}`)},get env(){return(0,a.getEnv)(e)},get client(){const{client:t}=(0,a.getEnv)(e);return t},get root(){return(0,a.getRoot)(e)}}));t.BaseModel=i},182:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mediaMobile=t.mediaDesktop=t.Responsive=t.MobileLandscape=t.Mobile=t.Desktop=void 0;var n=i(r(0)),o=i(r(345)),a=r(60);function i(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const s=e=>n.default.createElement(o.default,d({},e,{minWidth:768}));t.Desktop=s;const u=e=>n.default.createElement(o.default,d({},e,{maxAspectRatio:"14/9",maxWidth:767}));t.Mobile=u;t.MobileLandscape=(e=>n.default.createElement(o.default,d({},e,{screen:!0,minAspectRatio:"14/9",maxWidth:767})));t.Responsive=(({children:e,mobile:t,desktop:r})=>n.default.createElement(n.default.Fragment,null,n.default.createElement(s,{className:r,children:e}),n.default.createElement(u,{className:t,children:e})));t.mediaDesktop=((...e)=>a.css`
  @media (min-width: ${48}em) {
    // @ts-ignore
    ${(0,a.css)(...e)};
  }
`);t.mediaMobile=((...e)=>a.css`
  @media (max-width: ${767/16}em) {
    // @ts-ignore
    ${(0,a.css)(...e)};
  }
`)},188:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QueryPickupMapBranch=t.QueryPickupMapBrand=t.PickupMapBranchQuery=t.PickupMapBrandQuery=void 0;var n,o=(n=r(18))&&n.__esModule?n:{default:n},a=r(62),i=r(25);const d=o.default`
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
  ${i.CompanyBranchStatusFragment}
  ${i.GeoPointFragment}
  ${i.AddressFragment}
`,s=o.default`
  query GPickupMapBrand($brandId: ID!) {
    branches: companyBranches(brand: $brandId) {
      ...GPickupBranch
    }
  }
  ${d}
`;t.PickupMapBrandQuery=s;const u=o.default`
  query GPickupMapBranch($branchId: ID!) {
    branch: companyBranch(id: $branchId) {
      ...GPickupBranch
    }
  }
  ${d}
`;t.PickupMapBranchQuery=u;const l=(0,a.buildQuery)(s);t.QueryPickupMapBrand=l;const c=(0,a.buildQuery)(u);t.QueryPickupMapBranch=c},189:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VamStatusQuery=t.OrderPaymentStatusQuery=t.SubmitOrderMutation=t.RemoveOrderItemMutation=t.ChangeOrderItemMutation=t.AddToOrderMobileMutation=t.AddToOrderMutation=t.CreateDeliveryOrderMutation=t.CreatePickupOrderMutation=t.OrderCartForItemQuery=t.OrderCartForRecipeQuery=void 0;var n,o=(n=r(18))&&n.__esModule?n:{default:n},a=r(25),i=r(107),d=r(109);const s=o.default`
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
  ${a.PriceFragment}
`,u=o.default`
  query GOrderCartForRecipe($recipeId: ID!) {
    recipe(id: $recipeId) {
      ...GCartRecipe
    }
  }
  ${s}
`;t.OrderCartForRecipeQuery=u;const l=o.default`
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
`;t.OrderCartForItemQuery=l;const c=o.default`
  fragment GCreateOrder on Order {
    id
    companyBranch {
      id
    }
  }
`,p=o.default`
  mutation GCreatePickupOrder($branchId: ID!, $orderOrigin: OrderOriginEnum!) {
    order: createPickupOrder(
      order: { companyBranch: $branchId, orderOrigin: $orderOrigin }
    ) {
      ...GCreateOrder
    }
  }
  ${c}
`;t.CreatePickupOrderMutation=p;const m=o.default`
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
  ${c}
`;t.CreateDeliveryOrderMutation=m;const f=o.default`
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
  ${i.OrderFragment}
`;t.AddToOrderMutation=f;const y=o.default`
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
  ${d.OrderMobileFragment}
`;t.AddToOrderMobileMutation=y;const g=o.default`
  mutation GChangeOrderItem($orderId: ID!, $itemId: ID!, $sideDishes: [ID!]) {
    updateOrderRecipe(
      id: $itemId
      orderRecipe: { order: $orderId, sideDishes: $sideDishes }
    ) {
      ...GOrder
    }
  }
  ${i.OrderFragment}
`;t.ChangeOrderItemMutation=g;const h=o.default`
  mutation GRemoveOrderItem($itemId: ID!) {
    destroyOrderRecipe(id: $itemId) {
      ...GOrder
    }
  }
  ${i.OrderFragment}
`;t.RemoveOrderItemMutation=h;const v=o.default`
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
`;t.SubmitOrderMutation=v;const b=o.default`
  query GOrderPaymentStatus($orderId: ID!) {
    status: orderOnlinePaymentStatus(id: $orderId) {
      isSuccess
      userErrors
    }
  }
`;t.OrderPaymentStatusQuery=b;const E=o.default`
  query GVamStatus($input: InputVamStatus!) {
    vamStatus(input: $input) {
      id
      name
      description
      isConfirmed
      isMandatory
    }
  }
`;t.VamStatusQuery=E},196:function(e,t,r){e.exports=r(197)},197:function(e,t,r){"use strict";var n=r(198),o=g(r(0)),a=r(63),i=r(190),d=g(r(19)),s=g(r(209)),u=r(346),l=g(r(352)),c=r(48),p=r(353),m=r(26),f=r(61),y=r(393);function g(e){return e&&e.__esModule?e:{default:e}}const h=(0,p.createApolloClient)(),v=(0,y.createRootModel)(h),b=()=>o.default.createElement(c.RootProvider,{value:v},o.default.createElement(a.ApolloProvider,{client:h},o.default.createElement(i.ApolloProvider,{client:h},o.default.createElement(f.I18nManager,null,o.default.createElement(u.Router,null,o.default.createElement(l.default,null,o.default.createElement(s.default,null)))))));(0,m.installSentry)(()=>{d.default.render(o.default.createElement(b,null),document.getElementById("root"))}),n.serviceWorker.register({onUpdate:e=>{setTimeout(()=>{window.confirm(f.i18n._("New version has been found. Do you want to reload application to apply it now?"))&&e.postMessage("apply-update")},5e3)}}),navigator.serviceWorker.addEventListener("message",e=>{"update-applied"===e.data&&location.reload()})},20:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logLang=t.logSentry=t.logOrder=t.logPersist=t.logRouting=t.logAuth=t.logError=t.logGraph=t.logDebug=t.logMain=void 0;var n,o=(n=r(85))&&n.__esModule?n:{default:n};const a=(0,o.default)("c2e:app");t.logMain=a;const i=(0,o.default)("c2e:debug");t.logDebug=i;const d=(0,o.default)("c2e:graph");t.logGraph=d;const s=(0,o.default)("c2e:error");t.logError=s;const u=(0,o.default)("c2e:auth");t.logAuth=u;const l=(0,o.default)("c2e:routing");t.logRouting=l;const c=(0,o.default)("c2e:persist");t.logPersist=c;const p=(0,o.default)("c2e:order");t.logOrder=p;const m=(0,o.default)("c2e:sentry");t.logSentry=m;const f=(0,o.default)("c2e:lang");t.logLang=f},209:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(210);var n=r(94),o=l(r(0)),a=l(r(60)),i=r(270),d=l(r(49)),s=r(340),u=r(182);function l(e){return e&&e.__esModule?e:{default:e}}const c=a.default.div.withConfig({displayName:"LandscapeMessage"})`
  font-size: 1.1rem;
  padding: 3rem;
  vertical-align: center;
`,p=o.default.lazy(()=>Promise.all([r.e(0),r.e(1),r.e(3)]).then(r.t.bind(null,426,7))),m=o.default.lazy(()=>Promise.all([r.e(0),r.e(12),r.e(1),r.e(4)]).then(r.t.bind(null,427,7)));var f=()=>o.default.createElement(i.ErrorContainer,{prod:!0},o.default.createElement(s.PageTitle,null),o.default.createElement(o.default.Suspense,{fallback:o.default.createElement(d.default,null)},o.default.createElement(u.Desktop,null,o.default.createElement(p,null)),o.default.createElement(u.Mobile,null,o.default.createElement(m,null))),o.default.createElement(u.MobileLandscape,null,o.default.createElement(c,null,o.default.createElement(n.Trans,{id:"We know, you like space. Our app is optimised for desktop. Leave your phone in portrait for now."}))));t.default=f},210:function(e,t,r){},25:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PromoCodeFragment=t.CompanyBranchStatusFragment=t.CartItemFragment=t.RecipeFragment=t.PriceFragment=t.GeoPointFragment=t.AddressFragment=t.JsonAddressFragment=void 0;var n,o=(n=r(18))&&n.__esModule?n:{default:n};const a=o.default`
  fragment GJsonAddress on JsonAddress {
    street
    houseNumber
    city
  }
`;t.JsonAddressFragment=a;const i=o.default`
  fragment GAddress on Address {
    id
    location {
      ...GJsonAddress
    }
  }
  ${a}
`;t.AddressFragment=i;const d=o.default`
  fragment GGeoPoint on GeoPoint {
    latitude
    longitude
  }
`;t.GeoPointFragment=d;const s=o.default`
  fragment GPrice on PriceConverted {
    value
    formattedValue
  }
`;t.PriceFragment=s;const u=o.default`
  fragment GRecipe on Recipe {
    id
    nameLabel
    sideDishCount: sideDishesWareCategoriesCount
  }
`;t.RecipeFragment=u;const l=o.default`
  fragment GCartItem on OrderRecipe {
    id
    automatic
    recipe {
      ...GRecipe
    }
  }
  ${u}
`;t.CartItemFragment=l;const c=o.default`
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
`;t.CompanyBranchStatusFragment=c;const p=o.default`
  fragment GPromoCode on PromoCode {
    id
    code
  }
`;t.PromoCodeFragment=p},26:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reportError=t.reportFailingQuery=t.reportRenderingError=t.setSentryContext=t.identifyGuest=t.installSentry=void 0;var n,o=(n=r(271))&&n.__esModule?n:{default:n},a=r(55),i=r(32),d=r(20),s=r(98);t.installSentry=(e=>{const{sentryDSN:t}=i.appConfig;t?((0,d.logSentry)("enabled with DSN %s",t),o.default.config(t,{environment:"prod"}).install(),o.default.context(e)):e()});t.identifyGuest=((e,t)=>{o.default.setUserContext({isGuest:!0,userId:e,token:t})});t.setSentryContext=(e=>{o.default.setExtraContext(e)});t.reportRenderingError=((e,t)=>{o.default.isSetup()&&(o.default.captureException(e,{extra:t}),o.default.showReportDialog())});t.reportFailingQuery=((e,t)=>{o.default.captureBreadcrumb({category:"graphql",level:"debug",message:"query",data:Object.assign({},t,{errors:e})}),e.forEach(e=>{o.default.captureException(new Error(e.message),{extra:e})});const r=e.filter(s.RM.propEq("showToUser",!0));r.length&&o.default.lastEventId()&&o.default.showReportDialog({title:s.RM.head(r).message})});t.reportError=((e,t={})=>{let r={};return e instanceof a.VError&&(r=Object.assign({cause:a.VError.cause(e)},a.VError.info(e),t)),o.default.captureException(e,{extra:r}),e})},270:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorContainer=void 0;var n,o=(n=r(0))&&n.__esModule?n:{default:n},a=r(26);t.ErrorContainer=(({children:e,prod:t=!1})=>{let n;return t?(n=r(159).ProductionErrorBoundary,o.default.createElement(n,{dispatchErrorReporting:({error:e,info:t})=>{(0,a.reportRenderingError)(e,t)}},e)):(n=r(159).DeveloperErrorBoundary,o.default.createElement(n,null,e))})},282:function(e,t){},284:function(e,t){},32:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.appConfig=void 0;const n={fallbackLanguage:"en",supportedLanguages:["cs","sk","en","pl","de"],endpoint:"https://be.dev.admin.c2e.deep-vision.cloud",persistenceKey:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_LOCAL_ENDPOINT:"https://be.dev.admin.c2e.deep-vision.cloud",REACT_APP_STAGE:"prod"}).REACT_APP_LOCAL_KEY||"client@local",redirectOnFail:"https://kdo.doveze.cz",sentryDSN:null,pageTitleSuffix:"LOCAL"};t.appConfig=n,Object.assign(n,{endpoint:"https://c2e-p1.deep-vision.cloud",persistenceKey:"client@prod",sentryDSN:"https://31756c9e430d450eaf3a44af1c1cd0f2@sentry.io/1354460",pageTitleSuffix:"Doveze.cz"})},340:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PageTitle=void 0;var n=d(r(0)),o=d(r(341)),a=r(32),i=r(48);function d(e){return e&&e.__esModule?e:{default:e}}t.PageTitle=(e=>n.default.createElement(i.WithRoot,{observe:!0,render:e=>e.business.isValid?n.default.createElement(o.default,{title:`${e.business.branch.brand.name} - ${a.appConfig.pageTitleSuffix}`}):n.default.createElement(o.default,{title:a.appConfig.pageTitleSuffix})}))},346:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Router=void 0;var n,o=r(100),a=(n=r(0))&&n.__esModule?n:{default:n},i=r(184),d=r(48);t.Router=(({children:e})=>{const{business:t}=(0,d.useRoot)();return(0,o.useObserver)(()=>t.isValid?a.default.createElement(i.BrowserRouter,{basename:t.routerBasePath,key:t.routerBasePath},e):null)})},352:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(100),o=s(r(0)),a=r(60),i=s(r(49)),d=r(48);function s(e){return e&&e.__esModule?e:{default:e}}var u=({children:e})=>{const{business:t}=(0,d.useRoot)();return(0,n.useObserver)(()=>t.theme.loaded?o.default.createElement(a.ThemeProvider,{theme:t.theme},e):o.default.createElement(i.default,null))};t.default=u},353:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createApolloClient=function(){const e=new n.InMemoryCache({dataIdFromObject:e=>null!=e.__typename&&null!=e.id?`${e.__typename}-${e.id}`:null}),t=(0,d.default)({enabled:!1}),r=new i.BatchHttpLink({uri:`${c.appConfig.endpoint}/graphql`,credentials:"same-origin"}),y=new u.RetryLink({delay:{initial:300,max:1/0,jitter:!0},attempts:{max:5,retryIf:(e,t)=>!!e}}),g=function(){const e=new s.default;return(0,l.autorun)(()=>{(0,f.isNetworkOnline)()?((0,m.logGraph)("client is online"),e.open()):((0,m.logGraph)("client is offline"),e.close())}),e}(),h=(0,p.createErrorLink)(),v=a.ApolloLink.from([t,y,g,h,r]);return new o.ApolloClient({link:v,cache:e})};var n=r(422),o=r(160),a=r(2),i=r(423),d=y(r(359)),s=y(r(372)),u=r(424),l=r(1),c=r(32),p=r(382),m=r(20),f=r(384);function y(e){return e&&e.__esModule?e:{default:e}}},382:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createErrorLink=t.errorHandler=void 0;var n,o=r(383),a=(n=r(85))&&n.__esModule?n:{default:n},i=r(26);const d=(0,a.default)("graph:error"),s=({graphQLErrors:e,networkError:t,operation:r})=>{e&&((0,i.reportFailingQuery)(e,{query:r.operationName,variables:r.variables}),e.map(({message:e,locations:t,path:r})=>d(`[GraphQL error]: Message: ${e}, Location: ${t}, Path: ${r}`))),t&&d(`[Network error]: ${t}`)};t.errorHandler=s;t.createErrorLink=(()=>(0,o.onError)(s))},384:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.whenGoingOnline=function(e){return n.observe(t=>{!1===t.oldValue&&!0===t.newValue&&e()})},t.isNetworkOffline=t.isNetworkOnline=void 0;const n=r(1).observable.box(navigator.onLine);window.addEventListener("offline",()=>n.set(!1)),window.addEventListener("online",()=>n.set(!0));t.isNetworkOnline=(()=>n.get());t.isNetworkOffline=(()=>!n.get())},392:function(e,t,r){var n={"./cs/messages.js":[428,5],"./de/messages.js":[429,6],"./en-dev/messages.js":[431,8],"./en/messages.js":[430,7],"./pl/messages.js":[432,9],"./sk/messages.js":[433,10]};function o(e){var t=n[e];return t?r.e(t[1]).then(function(){var e=t[0];return r.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(n)},o.id=392,e.exports=o},393:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createRootModel=function(e){const t=f.create({},{client:e,fetch:window.fetch,geolocation:navigator.geolocation});return t.init(),t},t.RootModel=void 0;var n=r(13),o=r(394),a=r(396),i=r(16),d=r(398),s=r(407),u=r(408),l=r(410),c=r(411),p=r(420),m=function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function i(e){try{s(n.next(e))}catch(t){a(t)}}function d(e){try{s(n.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(i,d)}s((n=n.apply(e,t||[])).next())})};const f=i.BaseModel.named("Root").props({auth:n.types.optional(a.AuthModel,{}),business:n.types.optional(d.BusinessModel,{}),config:n.types.optional(s.ConfigModel,{}),map:n.types.optional(l.MapModel,{}),order:n.types.optional(c.OrderModel,{}),location:n.types.optional(u.LocationModel,{}),user:n.types.optional(p.UserModel,{})}).views(e=>({get persistedModels(){return[e.auth,e.user,e.business,e.location,e.order,e.map]}})).actions(e=>({init:()=>m(void 0,void 0,void 0,function*(){e.auth.authenticateClient(),yield Promise.all(e.persistedModels.map(o.persistModel)),yield e.business.queryBusiness(),yield e.location.queryInitialUserLocation(),yield e.order.checkPaymentStatus()})}));t.RootModel=f},394:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.persistModel=function(e){return s(this,void 0,void 0,function*(){const t=(0,a.getType)(e).name,r=`${u}_${t}`,n=e=>o.default.setItem(r,e);try{const t=yield o.default.getItem(r);null!==t?((0,a.applySnapshot)(e,t),(0,d.logPersist)("restored state %s",r)):(yield n((0,a.getSnapshot)(e)),(0,d.logPersist)("initialized state %s",r))}catch(i){(0,d.logPersist)("persistence failed",i),o.default.removeItem(r)}(0,a.onSnapshot)(e,n)})};var n,o=(n=r(395))&&n.__esModule?n:{default:n},a=r(13),i=r(32),d=r(20);var s=function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function i(e){try{s(n.next(e))}catch(t){a(t)}}function d(e){try{s(n.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(i,d)}s((n=n.apply(e,t||[])).next())})};const{persistenceKey:u}=i.appConfig},396:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AuthModel=void 0;var n=r(397),o=r(13),a=r(32),i=r(20),d=r(26),s=r(16),u=function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function i(e){try{s(n.next(e))}catch(t){a(t)}}function d(e){try{s(n.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(i,d)}s((n=n.apply(e,t||[])).next())})};const l=s.BaseModel.named("Auth").props({token:o.types.maybeNull(o.types.string),userId:o.types.maybeNull(o.types.string)}).views(e=>({get isValid(){return null!==e.token},getClientHeaders:()=>({Authorization:`Bearer ${e.token}`})})).actions(e=>({authenticate(t,r){e.token=t,e.userId=r,(0,d.identifyGuest)(r,t)}})).actions(e=>{let t;const r=(0,n.setContext)(()=>u(void 0,void 0,void 0,function*(){return e.token||(yield(()=>u(void 0,void 0,void 0,function*(){if(!t){t=c();const{token:r,userId:n}=yield t;e.authenticate(r,String(n)),t=null}return t}))()),{headers:e.getClientHeaders()}}));return{authenticateClient(){e.client.link=r.concat(e.client.link)}}}).preProcessSnapshot(e=>(e.userId&&e.token&&(0,d.identifyGuest)(e.userId,e.token),e));function c(){const{endpoint:e}=a.appConfig;if(!e)throw new Error("Missing endpoint in configuration.");(0,i.logAuth)("retrieving guest token...");const t=`${e}/users/token?guest=true`;return(0,i.logAuth)("token retrieved"),fetch(t,{headers:{Accept:"application/json"}}).then(e=>e.json())}t.AuthModel=l},398:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BusinessModel=void 0;var n=r(13),o=r(32),a=r(97),i=r(20),d=r(26),s=r(399),u=r(16),l=r(400),c=r(401),p=function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function i(e){try{s(n.next(e))}catch(t){a(t)}}function d(e){try{s(n.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(i,d)}s((n=n.apply(e,t||[])).next())})};const m=u.BaseModel.named("Business").props({code:n.types.maybeNull(n.types.string),theme:n.types.optional(c.ThemeModel,{}),banners:n.types.map(s.BannerModel)}).volatile(()=>({isBrand:!1,isMobileApp:!1,branch:null,country:null,orderOrigin:a.OrderOriginEnum.Web,routerBasePath:""})).views(e=>({get branchId(){return e.branch&&e.branch.id},get companyId(){return e.branch&&e.branch.company.id},get brandId(){return e.branch&&e.branch.brand.id},get isValid(){return null!==e.branch},get requestedCode(){let t=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_LOCAL_ENDPOINT:"https://be.dev.admin.c2e.deep-vision.cloud",REACT_APP_STAGE:"prod"}).REACT_APP_BUSINESS_CODE||null;if(!t){t=new window.URL(window.location.href).searchParams.get(f)||null||e.code}return t}})).actions(e=>({updateFromLookup(t){const{isBrand:r,isMobileApp:n,knownBasePath:o,orderOrigin:a,branch:i}=t;i&&(e.isBrand=r,e.isMobileApp=n,e.branch=i,e.country=i.address.country||null,e.routerBasePath=o,e.orderOrigin=a,i.id!==e.root.order.branchId&&e.root.order.orderCancel(),e.code=null)},mockBranchData(t){e.branch=t}})).actions(e=>({queryBusiness:()=>p(void 0,void 0,void 0,function*(){const{data:t}=yield e.client.query({query:l.BranchLookupQuery,variables:{code:e.requestedCode,url:window.location.href}});if(!(t&&t.lookup&&t.lookup.branch))return(0,i.logMain)("no business found, used code %s",e.requestedCode),void window.location.replace(o.appConfig.redirectOnFail);if(e.updateFromLookup(t.lookup),e.branchId){const t=e.theme.queryStyles(e.branchId);e.theme.loaded||(yield t)}(0,d.setSentryContext)({requestedCode:e.requestedCode,branchId:e.branchId,brandId:e.brandId,companyId:e.companyId,isBrand:e.isBrand}),(0,i.logMain)("identified branch %s, brand %s; company %s, isBrand: %s",e.branchId,e.brandId,e.companyId,e.isBrand)}),ensureBannerForCurrentBranch(){const t=e.branchId;return e.banners.has(t)||e.banners.set(t,{branchId:t}),e.banners.get(t)}}));t.BusinessModel=m;const f="wac"},399:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BannerModel=void 0;var n=r(110),o=r(13),a=r(16);const i=a.BaseModel.named("Banner").props({branchId:o.types.identifier,closedAt:o.types.maybe(o.types.Date),installedAt:o.types.maybe(o.types.Date)}).views(e=>({get shouldBeVisible(){return!e.root.business.isMobileApp&&(!!(e.closedAt&&(0,n.differenceInDays)(new Date,e.closedAt)>15)||(!!(e.installedAt&&(0,n.differenceInDays)(new Date,e.installedAt)>90)||!Boolean(e.closedAt||e.installedAt)))}})).actions(e=>({setInstalledNow(){e.installedAt=new Date},setClosedNow(){e.closedAt=new Date}}));t.BannerModel=i},400:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BranchLookupQuery=t.CompanyBranchFragment=void 0;var n,o=(n=r(18))&&n.__esModule?n:{default:n};const a=o.default`
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
`;t.CompanyBranchFragment=a;const i=o.default`
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
  ${a}
`;t.BranchLookupQuery=i},401:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeModel=void 0;var n,o=(n=r(194))&&n.__esModule?n:{default:n},a=r(13),i=r(16),d=r(406);var s=function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function i(e){try{s(n.next(e))}catch(t){a(t)}}function d(e){try{s(n.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(i,d)}s((n=n.apply(e,t||[])).next())})};const u=i.BaseModel.named("Theme").props({storeLogo:a.types.maybeNull(a.types.string),storeLogoMobile:a.types.maybeNull(a.types.string),backgroundCart:a.types.maybeNull(a.types.string),primary:a.types.maybeNull(a.types.string),secondary:a.types.maybeNull(a.types.string),secondaryHover:a.types.maybeNull(a.types.string),tertiary:a.types.maybeNull(a.types.string),tertiaryHover:a.types.maybeNull(a.types.string),tertiaryText:"white",unselected:"#E5E5E5",unselectedHover:"#EDEDED",unselectedText:"#5A5A5A",loaded:!1}).actions(e=>({applyStyle(t){Object.assign(e,{primary:t.active?t.active:"#54984a",secondary:t.main?t.main:"#99230e",secondaryHover:l(t.main?t.main:"#99230e"),tertiary:t.mainSecondary?t.mainSecondary:"#d9a700",tertiaryHover:l(t.mainSecondary?t.mainSecondary:"#d9a700"),tertiaryText:"white",unselected:"#E5E5E5",unselectedHover:"#EDEDED",unselectedText:"#5A5A5A",storeLogo:t.storeLogo,storeLogoMobile:t.storeLogoMobile,backgroundCart:t.backgroundCart}),e.loaded=!0}})).actions(e=>({queryStyles:t=>s(void 0,void 0,void 0,function*(){const{data:r}=yield e.client.query({query:d.CompanyBranchStyleQuery,variables:{branchId:t}});e.applyStyle(r.companyBranch.styles)})}));function l(e){return(0,o.default)(e).lighten(.2).hsl().string()}t.ThemeModel=u},406:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.CompanyBranchStyleQuery=void 0;const o=((n=r(18))&&n.__esModule?n:{default:n}).default`
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
`;t.CompanyBranchStyleQuery=o},407:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ConfigModel=void 0;const n=r(16).BaseModel.named("Config").props({orderItemsMax:50});t.ConfigModel=n},408:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LocationModel=void 0;var n=r(13),o=r(55),a=r(104),i=r(61),d=r(16),s=r(409),u=function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function i(e){try{s(n.next(e))}catch(t){a(t)}}function d(e){try{s(n.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(i,d)}s((n=n.apply(e,t||[])).next())})};const l=d.BaseModel.named("Location").props({latitude:n.types.optional(n.types.number,1/0),longitude:n.types.optional(n.types.number,1/0),searchValue:n.types.optional(n.types.string,""),address:n.types.maybeNull(n.types.string)}).volatile(e=>({branchId:null,isOpen:!0,isResolved:!1,isStreetAddress:!1,inDeliveryLocation:!1,geolocationDisabled:!1,isResolving:!1})).views(e=>({get isGeolocationAvailable(){return Boolean(e.env.geolocation&&!e.geolocationDisabled)},get hasLocation(){return e.latitude!==1/0||e.longitude!==1/0},get hasAddress(){return Boolean(e.address)},get isDeliveryAddress(){return e.isResolved&&e.isStreetAddress&&e.inDeliveryLocation},get hasFinishedSearch(){return(e.searchValue.length>0||e.address)&&!e.isResolving},get geoPoint(){return{latitude:e.latitude,longitude:e.longitude}},get resolutionTarget(){const{business:t}=e.root;return t.isBrand?{brandId:t.brandId}:{branchId:t.branchId}},get latLng(){const{latitude:t,longitude:r}=e;return(0,a.gpsToLatLng)({latitude:t,longitude:r})}})).actions(e=>({setLocation({latitude:t,longitude:r}){e.latitude=t,e.longitude=r}})).actions(e=>({setResolutionResult(t){const{finalAddress:r}=t;r&&(e.address=`${r.street} ${r.houseNumber}, ${r.city}`),e.branchId=t.companyBranch?t.companyBranch.id:null,e.isResolved=t.isResolved,e.isStreetAddress=t.isValidAddress,e.inDeliveryLocation=t.inDeliveryLocation,t.isResolved?(e.setLocation(t.gpsCoordinates),e.log("resolved as %s",e.address)):e.log("not resolved")},setVolatileProps(t){Object.assign(e,t)},disableGeolocation(){e.geolocationDisabled=!1},clearAddress(){e.address=""},setIsResolving(t){e.isResolving=t}})).actions(e=>{const t=t=>u(void 0,void 0,void 0,function*(){e.setIsResolving(!0);const r=Object.assign({},e.resolutionTarget,t),{data:n}=yield e.client.query({query:s.ResolveLocationQuery,variables:r});null!==n&&e.setResolutionResult(n.resolveLocation),e.setIsResolving(!1)});return{queryInitialUserLocation(){e.log("resolving initial user location..."),e.hasLocation?t({latitude:e.latitude,longitude:e.longitude}):e.searchValue?t({address:e.searchValue}):t()},withUserAddress(r){e.searchValue=r,""===r?e.clearAddress():(e.log("resolving user address: %s",r),t({address:r}))},withUserLocation(r){e.log("resolving user location: %j",r),t(r)},attemptGeolocation(){e.log("geolocating..."),e.env.geolocation.getCurrentPosition(({coords:e})=>{t(e)},t=>{e.log(new o.VError("failed geolocation",t)),e.disableGeolocation(),window.alert(i.i18n._("Your browser does not support geolocation."))},{enableHighAccuracy:!0,maximumAge:6e4})}}});t.LocationModel=l},409:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ResolveLocationQuery=void 0;var n,o=(n=r(18))&&n.__esModule?n:{default:n},a=r(25);const i=o.default`
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
  ${a.JsonAddressFragment}
`,d=o.default`
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
  ${i}
`;t.ResolveLocationQuery=d},410:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MapModel=t.GPSCzechia=void 0;var n=r(13),o=r(104),a=r(16);const i={latitude:49.8037633,longitude:15.4749126};t.GPSCzechia=i;const d=a.BaseModel.named("Map").props({zoom:n.types.optional(n.types.number,16),latitude:n.types.optional(n.types.number,i.latitude),longitude:n.types.optional(n.types.number,i.longitude)}).volatile(e=>({mapRef:null,clickPoint:null})).views(e=>({get isReady(){return null!==e.mapRef},get center(){return(0,o.gpsToLatLng)(e)}})).actions(e=>({setMapRef(t){e.mapRef=t},updateZoom(){e.mapRef&&(e.zoom=e.mapRef.getZoom())},updatePosition(){if(e.mapRef){const t=e.mapRef.getCenter();e.latitude=t.lat(),e.longitude=t.lng()}},panToLocation(t,r=2e3){e.mapRef&&e.mapRef.panTo((0,o.gpsToLatLng)(t))},onClick(t){e.clickPoint=(0,o.latLngToGps)(t.latLng)},clearClickPoint(){e.clickPoint=null}}));t.MapModel=d},411:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OrderModel=void 0;var n=r(110),o=r(1),a=r(13),i=r(55),d=r(25),s=r(97),u=r(412),l=r(20),c=r(98),p=r(26),m=r(61),f=r(107),y=r(108),g=r(188),h=r(109),v=r(16),b=r(189),E=function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function i(e){try{s(n.next(e))}catch(t){a(t)}}function d(e){try{s(n.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(i,d)}s((n=n.apply(e,t||[])).next())})};const O=v.BaseModel.named("Order").props({branchId:a.types.maybeNull(a.types.string),orderId:a.types.maybeNull(a.types.string),orderMethod:s.DeliveryTypeEnum.Messenger,payment:s.PaymentGateEnum.Gopay,firstname:"",lastname:"",email:"",phone:"",phonePrefix:"",note:""}).volatile(e=>({isSubmitting:!1,isGoPayChecking:!1,submitErrors:null,agreements:[],lastActiveRecipeId:null,isVamInitialized:!1})).views(e=>({get hasOrder(){return null!==e.orderId},get fragmentOrderId(){return`Order-${e.orderId}`},get usingDeliveryOrderMethod(){return e.orderMethod===s.DeliveryTypeEnum.Messenger},get usingPickupOrderMethod(){return e.orderMethod===s.DeliveryTypeEnum.Pickup},get hasErrors(){return Boolean(e.submitErrors&&e.submitErrors.length>0)},get defaultPhonePrefix(){return e.root.business.isValid&&e.root.business.country?e.root.business.country.phonePrefix:"+"},getSubmitVariables:t=>({orderId:e.orderId,customer:{firstName:t.firstname,lastName:t.lastname,emails:[{email:t.email}],phones:[{phone:`${t.phonePrefix}${t.phone}`}]},note:t.note,paymentGate:t.payment,deliverAt:(0,n.addHours)(new Date,1),agreements:t.agreements.filter(c.RM.propEq("isConfirmed",!0)).map(c.RM.prop("id"))})})).actions(e=>({useOrderMethod(t){e.orderMethod=t},setBranch(t){e.branchId=t},orderCreated(t){e.orderId=t.id,e.branchId=t.companyBranch.id,(0,l.logMain)("order %s created for branch %s",e.orderId,e.branchId)},orderPaid(t){e.orderId!==t&&(e.orderId=t,(0,l.logMain)("order %s replaced by %s due to successful payment status"))},orderCancel(){(e.branchId||e.orderId)&&(0,l.logMain)("cancel order %s, was at branch %s",e.root.order.orderId,e.root.order.branchId),e.orderId=null,e.branchId=null},submitFinished(){e.isSubmitting=!1},submitFailed(t){e.isSubmitting=!1,e.submitErrors=t||[m.i18n._("Error during sending order. Please try again later.")]},vamFailed(){e.submitErrors=[m.i18n._("Internal error during sending order. Order can not be finished right now. Our team was notified and is working on fix. Thank you for your understanding.")],e.isVamInitialized=!1},clearErrors(){e.submitErrors=null},goPayStatusCheck(t){e.isGoPayChecking=t},useAgreements(t){Array.isArray(t)&&(e.agreements=t),e.isVamInitialized=!0},setUsedRecipeId(t){e.lastActiveRecipeId=t},queryPaymentStatus(t=e.orderId){return E(this,void 0,void 0,function*(){const r={orderId:t};try{return(yield e.client.query({fetchPolicy:"no-cache",query:b.OrderPaymentStatusQuery,variables:r})).data.status}catch(n){return(0,l.logOrder)("failed to verify payment status for order %s: ",t),null}})},rememberFormValues(t){e.root.user.shouldRememberForm?(e.firstname=t.firstname,e.lastname=t.lastname,e.email=t.email,e.phone=t.phone,e.phonePrefix=t.phonePrefix,e.note=t.note):(e.firstname="",e.lastname="",e.email="",e.phone="",e.phonePrefix="",e.note="")}})).actions(e=>({createDeliveryOrder(t){return E(this,void 0,void 0,function*(){const{business:r}=e.root,n={gps:e.root.location.geoPoint,orderOrigin:r.orderOrigin,brandId:r.isBrand?r.brandId:void 0,branchId:r.isBrand?void 0:r.branchId},{data:o}=yield e.client.mutate({fetchPolicy:"no-cache",mutation:b.CreateDeliveryOrderMutation,variables:n}),{order:a}=o;e.orderCreated(a),e.initVam(),t()})},createPickupOrder(t,r){return E(this,void 0,void 0,function*(){const{business:n}=e.root,o={branchId:t,orderOrigin:n.orderOrigin},{data:a}=yield e.client.mutate({fetchPolicy:"no-cache",mutation:b.CreatePickupOrderMutation,variables:o}),{order:i}=a;e.orderCreated(i),e.initVam(),r()})},prefetchPickup(){const{business:t}=e.root;t.isBrand?e.client.query({query:g.PickupMapBrandQuery,variables:{brandId:t.brandId}}):e.client.query({query:g.PickupMapBranchQuery,variables:{branchId:t.branchId}})},prefetchFoodMenu(t){t&&e.client.query({query:y.FoodMenuQuery,variables:{branchId:t}})},prefetchFood(t){e.client.query({query:b.OrderCartForRecipeQuery,variables:{recipeId:t}})},addFromRecipe(t,r=[]){return E(this,void 0,void 0,function*(){const n={orderId:e.orderId,recipeId:t,sideDishes:r},o=e.client.readFragment({id:e.fragmentOrderId,fragment:f.OrderFragment,fragmentName:"GOrder"}),a=e.client.readFragment({id:`Recipe-${t}`,fragment:d.RecipeFragment}),i={__typename:"Mutation",createOrderRecipe:Object.assign({},o,{countWares:o?o.countWares+1:1,items:[...o?o.items:[],{__typename:"OrderRecipe",id:"-1",price:{__typename:"PriceConverted",value:0,formattedValue:"---"},recipe:Object.assign({},a,{sideDishes:[]}),sideDishes:[],automatic:!1}]})};yield e.client.mutate({mutation:b.AddToOrderMutation,variables:n,optimisticResponse:i})})},addFromRecipeMobile(t,r=[]){return E(this,void 0,void 0,function*(){const n={orderId:e.orderId,recipeId:t,sideDishes:r},o=e.client.readFragment({id:e.fragmentOrderId,fragment:h.OrderMobileFragment,fragmentName:"GOrderMobile"}),a={__typename:"Mutation",createOrderRecipe:Object.assign({},o,{countWares:o?o.countWares+1:1,items:[...o?o.items:[],{__typename:"OrderRecipe",id:"-1",recipe:{__typename:"Recipe",id:t},automatic:!1}]})};yield e.client.mutate({mutation:b.AddToOrderMobileMutation,variables:n,optimisticResponse:a})})},updateItem(t,r=[]){return E(this,void 0,void 0,function*(){const n={orderId:e.orderId,itemId:t,sideDishes:r};yield e.client.mutate({mutation:b.ChangeOrderItemMutation,variables:n})})},removeItemFromCart(t){const r={itemId:t},n=e.client.readFragment({fragment:f.OrderFragment,fragmentName:"GOrder",id:e.fragmentOrderId});e.client.mutate({mutation:b.RemoveOrderItemMutation,variables:r,optimisticResponse:{__typename:"Mutation",destroyOrderRecipe:Object.assign({},n,{countWares:n?n.countWares-1:0,items:n?n.items.filter(e=>e.id!==t):[]})}})},initVam(){return E(this,void 0,void 0,function*(){const t={input:{orderId:e.orderId,email:e.email,firstname:e.firstname,lastname:e.lastname,phone:e.phone}};try{const n=yield e.client.query({query:b.VamStatusQuery,variables:t});n.data&&e.useAgreements(n.data.vamStatus)}catch(r){(0,p.reportError)(r,{variables:t}),e.vamFailed()}})},updateVam(t){return E(this,void 0,void 0,function*(){const r=`${t.phonePrefix.trim()}${t.phone.trim()}`,n={input:{email:t.email.trim(),phone:r,firstname:t.firstname.trim(),lastname:t.lastname.trim(),orderId:e.orderId}};try{const t=yield e.client.query({query:b.VamStatusQuery,variables:n});t.data&&e.useAgreements(t.data.vamStatus)}catch(o){(0,p.reportError)(o,{variables:n}),e.vamFailed()}})},submitOrder:t=>E(void 0,void 0,void 0,function*(){let r;e.isSubmitting=!0,e.rememberFormValues(t);try{r=yield e.client.mutate({fetchPolicy:"no-cache",mutation:b.SubmitOrderMutation,variables:e.getSubmitVariables(t),refetchQueries:["GCartView","GMobileCart"]})}catch(a){throw e.submitFailed(),(0,p.reportError)(new i.VError("submit mutation error: %j",a))}if(r.errors&&r.errors.length||!r.data)throw e.submitFailed(),(0,p.reportError)(new i.VError("Submit graphql errors: %j",r.errors));const n=r.data.finishOrder;if(n.userErrors&&n.userErrors.length)throw e.submitFailed(n.userErrors),(0,p.reportError)(new i.VError("Order user errors: %j",n.userErrors));if(t.payment===s.PaymentGateEnum.Cash)return void e.submitFinished();if(!n.gopayUrl)throw e.submitFailed(),(0,p.reportError)(new Error("GoPay url missing from response"));yield(0,u.executeGoPayPayment)(n.gopayUrl),e.goPayStatusCheck(!0);const o=yield e.queryPaymentStatus();if(e.goPayStatusCheck(!1),!o||!o.isSuccess)throw e.submitFailed(o&&o.userErrors||void 0),(0,p.reportError)(new i.VError("GoPay payment was not successful"));e.submitFinished()})})).actions(e=>({checkPaymentStatus(){const t=new window.URL(window.location.href),r=t.searchParams.get("orderId");r&&(0,o.when)(()=>e.root.auth.isValid,()=>E(this,void 0,void 0,function*(){const n=setTimeout(()=>e.goPayStatusCheck(!0),500),o=yield e.queryPaymentStatus(r);if(clearTimeout(n),e.goPayStatusCheck(!1),o&&o.isSuccess)e.orderPaid(r),t.search="",t.pathname="/finish",location.replace(t.toString());else{const t=e.root.business.branch.phone;e.submitFailed([m.i18n._("We were unable to verify status of your payment. Please contact operator using number {phone}",{phone:t})])}}))}}));t.OrderModel=O},412:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.executeGoPayPayment=function(e){return i(this,void 0,void 0,function*(){return(0,a.logOrder)("GoPay init",e),yield function(e){const t=e.includes("gw.sandbox.gopay.com")?s:d;return(0,a.logOrder)("GoPay script url",t),new Promise(e=>{(0,o.default)(t,e)})}(e),t=function(e){return{gatewayUrl:e,inline:!0}}(e),new Promise(e=>{(0,a.logOrder)("GoPay checkout"),_gopay.checkout(t,function(t){(0,a.logOrder)("GoPay result",t),e(t.id)})});var t})};var n,o=(n=r(195))&&n.__esModule?n:{default:n},a=r(20);var i=function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function i(e){try{s(n.next(e))}catch(t){a(t)}}function d(e){try{s(n.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(i,d)}s((n=n.apply(e,t||[])).next())})};const d="https://gate.gopay.cz/gp-gw/js/embed.js",s="https://gw.sandbox.gopay.com/gp-gw/js/embed.js"},413:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildMutation=function(e){return()=>{const t=this.props,{render:r}=t,n=d(t,["render"]);return o.default.createElement(a.Mutation,i({mutation:e},n),r)}};var n,o=(n=r(0))&&n.__esModule?n:{default:n},a=r(63);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r}},420:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UserModel=void 0;var n=r(13);const o=r(16).BaseModel.named("User").props({rememberForm:n.types.maybeNull(n.types.boolean)}).volatile(e=>({closingTimeAlertHidden:!1,orderLimitAlertHidden:!0})).actions(e=>({showClosingTime(){e.closingTimeAlertHidden=!1},hideClosingTime(){e.closingTimeAlertHidden=!0},showOrderLimit(){e.orderLimitAlertHidden=!1},hideOrderLimit(){e.orderLimitAlertHidden=!0},setFormRememberYes(){e.rememberForm=!0},setFormRememberNo(){e.rememberForm=!1}})).views(e=>({get shouldRememberForm(){return!1!==e.rememberForm}}));t.UserModel=o},48:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RootProvider=t.WithRoot=t.useRoot=t.rootContext=void 0;var n=r(183),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0));const a=o.default.createContext(void 0);t.rootContext=a;const i=()=>{const e=(0,o.useContext)(a);if(!e)throw new Error("RootProvider missing in the tree");return e};t.useRoot=i;t.WithRoot=(({render:e,observe:t=!1})=>{const r=i();return!0===t?o.default.createElement(n.Observer,null,()=>e(r)):e(r)});const d=a.Provider;t.RootProvider=d},49:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(0)),o=a(r(186));function a(e){return e&&e.__esModule?e:{default:e}}var i=({noMargin:e=!1})=>n.default.createElement("div",{style:{display:"flex",alignSelf:"center",justifyContent:"center"},"data-testid":"loader"},n.default.createElement(o.default,{name:"pacman",style:e?{}:{marginTop:"45vh"}}));t.default=i},61:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changeLanguage=y,t.detectLanguage=g,t.I18nManager=t.i18n=void 0;var n,o=r(126),a=r(94),i=r(187),d=p(r(388)),s=p(r(0)),u=(n=r(49))&&n.__esModule?n:{default:n},l=r(32),c=r(20);function p(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}var m=function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function i(e){try{s(n.next(e))}catch(t){a(t)}}function d(e){try{s(n.throw(e))}catch(t){a(t)}}function s(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(i,d)}s((n=n.apply(e,t||[])).next())})};const f=(0,o.setupI18n)();t.i18n=f;function y(e){return m(this,void 0,void 0,function*(){return l.appConfig.supportedLanguages.includes(e)?(yield function(e){return m(this,void 0,void 0,function*(){let t;t=yield r(392)(`./${e}/messages.js`),f.load({[e]:t}),(0,c.logLang)("loaded catalog %s",e)})}(e),f.activate(e),(0,c.logLang)("changed to %s",e),!0):((0,c.logLang)("language %s is not supported"),!1)})}function g(){const e=new d.LocaleResolver([new d.UrlDetector("lang"),new d.NavigatorDetector],[new d.LanguageOnlyTransformer]).getLocales();return(0,c.logLang)("detected languages %s",e.join("; ")),e.find(e=>l.appConfig.supportedLanguages.includes(e))||l.appConfig.fallbackLanguage}t.I18nManager=(({children:e})=>{const[t,r]=(0,s.useState)(!1),[n]=(0,s.useState)(g);return(0,i.useAsyncEffect)(()=>m(void 0,void 0,void 0,function*(){yield y(n),r(!0)})),!1===t?s.default.createElement(u.default,null):s.default.createElement(a.I18nProvider,{language:n,i18n:f},e)})},62:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildQuery=function(e){return t=>{var{render:r,renderFragment:u,renderLoading:p=!0,renderError:m=!0,children:f}=t,y=c(t,["render","renderFragment","renderLoading","renderError","children"]);return n.default.createElement(o.Query,l({query:e},y),e=>{if(e.loading||!e.data){if("function"===typeof p)return p(e);if(!0===p)return n.default.createElement(i.default,null)}if(e.error){if((0,s.reportError)(e.error),(0,d.logError)(e.error),"function"===typeof m)return m(e);if(!0===m)throw new a.VError(e.error,"Query error");return null}if(e.data){if(u)return n.default.createElement(n.default.Fragment,null,u(e.data,e));if(r)return r(e.data,e)}return f||null})}};var n=u(r(0)),o=r(63),a=(u(r(414)),r(55)),i=u(r(49)),d=r(20),s=r(26);function u(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r}},97:function(e,t,r){"use strict";var n,o,a,i,d,s,u,l,c,p,m,f,y,g,h,v,b,E,O,I,P,M,C,A,R,_,D,S,L;Object.defineProperty(t,"__esModule",{value:!0}),t.SettingTypeEnum=t.SubscriptionActionType=t.OrderOnlineStateEnum=t.OrderRecipeStateEnum=t.OrderBillingTypeEnum=t.DeliveryTypeEnum=t.OrderStateEnum=t.ZoneTypeEnum=t.OrderOriginEnum=t.MobilePlatformEnum=t.WareRequirementEnum=t.WareCategoryTypeEnum=t.PaymentTypeEnum=t.PaymentGateEnum=t.WareUnitEnum=t.DeviceTypeEnum=t.DeviceStateEnum=t.ShiftUserStateEnum=t.LanguageEnum=t.FieldStateEnum=t.AvailabilityTypeEnum=t.WarePriceTypeEnum=t.AllergenEnum=t.WeekDayEnum=t.OrderStateCategoryEnum=t.OrderStateCategoryTargetEnum=t.CurrencyEnum=t.AddressTypeEnum=t.CompanyTypeEnum=void 0,t.CompanyTypeEnum=n,function(e){e.Client="CLIENT",e.Affiliate="AFFILIATE",e.Brand="BRAND"}(n||(t.CompanyTypeEnum=n={})),t.AddressTypeEnum=o,function(e){e.Business="BUSINESS",e.Premises="PREMISES",e.MainAddress="MAIN_ADDRESS"}(o||(t.AddressTypeEnum=o={})),t.CurrencyEnum=a,function(e){e.Czk="CZK",e.Hop="HOP",e.Eur="EUR",e.Usd="USD"}(a||(t.CurrencyEnum=a={})),t.OrderStateCategoryTargetEnum=i,function(e){e.Backend="BACKEND",e.FeAdmin="FE_ADMIN"}(i||(t.OrderStateCategoryTargetEnum=i={})),t.OrderStateCategoryEnum=d,function(e){e.Payment="PAYMENT",e.Notification="NOTIFICATION",e.Reclamation="RECLAMATION",e.Delivery="DELIVERY",e.Cancel="CANCEL",e.Main="MAIN",e.Production="PRODUCTION",e.NewOrders="NEW_ORDERS",e.Preparing="PREPARING",e.OnWay="ON_WAY",e.Finished="FINISHED",e.ReadyToDeliver="READY_TO_DELIVER",e.InCart="IN_CART",e.Bills="BILLS"}(d||(t.OrderStateCategoryEnum=d={})),t.WeekDayEnum=s,function(e){e.Monday="MONDAY",e.Tuesday="TUESDAY",e.Wednesday="WEDNESDAY",e.Thursday="THURSDAY",e.Friday="FRIDAY",e.Saturday="SATURDAY",e.Sunday="SUNDAY"}(s||(t.WeekDayEnum=s={})),t.AllergenEnum=u,function(e){e.CerealsWithGlutten="CEREALS_WITH_GLUTTEN",e.Shellfish="SHELLFISH",e.Egg="EGG",e.Fish="FISH",e.Peanut="PEANUT",e.Soybeans="SOYBEANS",e.Milk="MILK",e.Nut="NUT",e.Celery="CELERY",e.Mustard="MUSTARD",e.Sesame="SESAME",e.Sulfurous="SULFUROUS",e.Lupin="LUPIN",e.Molluscs="MOLLUSCS"}(u||(t.AllergenEnum=u={})),t.WarePriceTypeEnum=l,function(e){e.Delivery="DELIVERY",e.Inhouse="INHOUSE"}(l||(t.WarePriceTypeEnum=l={})),t.AvailabilityTypeEnum=c,function(e){e.Main="MAIN"}(c||(t.AvailabilityTypeEnum=c={})),t.FieldStateEnum=p,function(e){e.Default="DEFAULT",e.Enabled="ENABLED",e.Disabled="DISABLED"}(p||(t.FieldStateEnum=p={})),t.LanguageEnum=m,function(e){e.Cs="CS",e.Sk="SK",e.En="EN"}(m||(t.LanguageEnum=m={})),t.ShiftUserStateEnum=f,function(e){e.Accepted="ACCEPTED",e.Rejected="REJECTED",e.WaitingForResponse="WAITING_FOR_RESPONSE",e.Unresolved="UNRESOLVED"}(f||(t.ShiftUserStateEnum=f={})),t.DeviceStateEnum=y,function(e){e.Working="WORKING",e.Broken="BROKEN",e.Busy="BUSY",e.Free="FREE"}(y||(t.DeviceStateEnum=y={})),t.DeviceTypeEnum=g,function(e){e.Car="CAR",e.Plane="PLANE",e.Dron="DRON"}(g||(t.DeviceTypeEnum=g={})),t.WareUnitEnum=h,function(e){e.Kilogram="KILOGRAM",e.Gram="GRAM",e.Litre="LITRE",e.Piece="PIECE"}(h||(t.WareUnitEnum=h={})),t.PaymentGateEnum=v,function(e){e.Gopay="GOPAY",e.Paypal="PAYPAL",e.Credit="CREDIT",e.Cash="CASH"}(v||(t.PaymentGateEnum=v={})),t.PaymentTypeEnum=b,function(e){e.Cash="CASH",e.Credit="CREDIT",e.Voucher="VOUCHER"}(b||(t.PaymentTypeEnum=b={})),t.WareCategoryTypeEnum=E,function(e){e.Main="MAIN",e.SideDish="SIDE_DISH",e.Cover="COVER",e.Mixin="MIXIN"}(E||(t.WareCategoryTypeEnum=E={})),t.WareRequirementEnum=O,function(e){e.NoLimit="NO_LIMIT",e.Optional="OPTIONAL",e.MaxOne="MAX_ONE",e.Mandatory="MANDATORY"}(O||(t.WareRequirementEnum=O={})),t.MobilePlatformEnum=I,function(e){e.Android="ANDROID",e.Ios="IOS"}(I||(t.MobilePlatformEnum=I={})),t.OrderOriginEnum=P,function(e){e.Web="WEB",e.DameJidlo="DAME_JIDLO",e.MobilAndroid="MOBIL_ANDROID",e.MobilIos="MOBIL_IOS",e.Staff="STAFF",e.Wifi="WIFI",e.Baker="BAKER",e.WebPartner="WEB_PARTNER",e.Enigoo="ENIGOO",e.Mpizza="MPIZZA",e.Minisite="MINISITE",e.AffiliatePizzaRozvoz="AFFILIATE_PIZZA_ROZVOZ",e.AffiliateRozvozPizzyZdarma="AFFILIATE_ROZVOZ_PIZZY_ZDARMA",e.AffiliateRozvozJidla="AFFILIATE_ROZVOZ_JIDLA",e.CallCenter="CALL_CENTER"}(P||(t.OrderOriginEnum=P={})),t.ZoneTypeEnum=M,function(e){e.Area="AREA",e.Table="TABLE",e.Sector="SECTOR"}(M||(t.ZoneTypeEnum=M={})),t.OrderStateEnum=C,function(e){e.InCart="IN_CART",e.Received="RECEIVED",e.InProgress="IN_PROGRESS",e.Finished="FINISHED",e.Reclamation="RECLAMATION",e.ReclamationHandled="RECLAMATION_HANDLED",e.Unpaid="UNPAID",e.Paid="PAID",e.ByCreditCard="BY_CREDIT_CARD",e.Refund="REFUND",e.ShouldBePaid="SHOULD_BE_PAID",e.CustomerNotified="CUSTOMER_NOTIFIED",e.New="NEW",e.Online="ONLINE",e.Evaluated="EVALUATED",e.NotEvaluated="NOT_EVALUATED",e.Shown="SHOWN",e.Accepted="ACCEPTED",e.ReadyToProduce="READY_TO_PRODUCE",e.InProduce="IN_PRODUCE",e.Made="MADE",e.ReadyToDeliver="READY_TO_DELIVER",e.OnWay="ON_WAY",e.StuckOnRoad="STUCK_ON_ROAD",e.Late="LATE",e.Delivered="DELIVERED",e.Cause="CAUSE",e.Handover="HANDOVER",e.WaitingForCustomer="WAITING_FOR_CUSTOMER",e.CustomerDidNotCome="CUSTOMER_DID_NOT_COME",e.DeliverRejected="DELIVER_REJECTED",e.CancelOnWay="CANCEL_ON_WAY",e.Canceled="CANCELED",e.BranchCancel="BRANCH_CANCEL",e.CustomerCancel="CUSTOMER_CANCEL",e.BillPassed="BILL_PASSED",e.BillPrinted="BILL_PRINTED",e.KitchenTicketPrinted="KITCHEN_TICKET_PRINTED"}(C||(t.OrderStateEnum=C={})),t.DeliveryTypeEnum=A,function(e){e.Pickup="PICKUP",e.Messenger="MESSENGER",e.Dron="DRON",e.Mail="MAIL"}(A||(t.DeliveryTypeEnum=A={})),t.OrderBillingTypeEnum=R,function(e){e.PriceSum="PRICE_SUM",e.Commission="COMMISSION",e.Fee="FEE",e.RewardResult="REWARD_RESULT",e.Affiliate="AFFILIATE"}(R||(t.OrderBillingTypeEnum=R={})),t.OrderRecipeStateEnum=_,function(e){e.Fresh="FRESH",e.Preparing="PREPARING",e.Cooked="COOKED",e.Canceled="CANCELED",e.Completed="COMPLETED"}(_||(t.OrderRecipeStateEnum=_={})),t.OrderOnlineStateEnum=D,function(e){e.Created="CREATED",e.Pending="PENDING",e.Paid="PAID",e.Canceled="CANCELED",e.Completed="COMPLETED"}(D||(t.OrderOnlineStateEnum=D={})),t.SubscriptionActionType=S,function(e){e.Create="CREATE",e.Update="UPDATE",e.Destroy="DESTROY",e.Remove="REMOVE"}(S||(t.SubscriptionActionType=S={})),t.SettingTypeEnum=L,function(e){e.Confirmation="CONFIRMATION",e.AdminOrderListing="ADMIN_ORDER_LISTING",e.Rules="RULES",e.Url="URL",e.Graphic="GRAPHIC",e.Options="OPTIONS"}(L||(t.SettingTypeEnum=L={}))},98:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RM=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(421));t.RM=n},99:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"buildMutation",{enumerable:!0,get:function(){return n.buildMutation}}),Object.defineProperty(t,"buildQuery",{enumerable:!0,get:function(){return o.buildQuery}});var n=r(413),o=r(62)}},[[196,13,11]]]);
//# sourceMappingURL=main.f57fff44.chunk.js.map