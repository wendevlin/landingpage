(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([["831"],{29559:function(e,t,r){"use strict";r(23509),Object.defineProperty(t,"__esModule",{value:!0});var a=r(98492),o=r(27128),n=r(13006);(0,n.defineProperty)(Intl,"NumberFormat",{value:a.NumberFormat}),(0,n.defineProperty)(Number.prototype,"toLocaleString",{value:function(e,t){return(0,o.toLocaleString)(this,e,t)}})},98492:function(e,t,r){"use strict";var a=r(33618).default;r(20223),r(63721),r(58264),r(52247),r(71695),r(83069),r(64228),r(20155),r(68951),r(42713),r(11740),r(61427),r(92519),r(42179),r(89256),r(24931),r(88463),r(57449),r(19814),r(99341),r(13334),r(47021),Object.defineProperty(t,"__esModule",{value:!0}),t.NumberFormat=void 0;var o=r(9065),n=r(13006),i=r(47913),m=r(53961),u=o.__importDefault(r(13625)),l=["locale","numberingSystem","style","currency","currencyDisplay","currencySign","unit","unitDisplay","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","useGrouping","notation","compactDisplay","signDisplay"];function c(e){return(0,n.FormatNumericToParts)(this,b(e),{getInternalSlots:u.default})}t.NumberFormat=function(e,r){if(!this||!(0,n.OrdinaryHasInstance)(t.NumberFormat,this))return new t.NumberFormat(e,r);(0,n.InitializeNumberFormat)(this,e,r,{getInternalSlots:u.default,localeData:t.NumberFormat.localeData,availableLocales:t.NumberFormat.availableLocales,getDefaultLocale:t.NumberFormat.getDefaultLocale,currencyDigitsData:i.currencyDigitsData,numberingSystemNames:m.numberingSystemNames});var a=(0,u.default)(this),o=a.dataLocale,l=t.NumberFormat.localeData[o];return(0,n.invariant)(void 0!==l,"Cannot load locale-dependent data for ".concat(o,".")),a.pl=(0,n.createMemoizedPluralRules)(o,{minimumFractionDigits:a.minimumFractionDigits,maximumFractionDigits:a.maximumFractionDigits,minimumIntegerDigits:a.minimumIntegerDigits,minimumSignificantDigits:a.minimumSignificantDigits,maximumSignificantDigits:a.maximumSignificantDigits}),this};try{Object.defineProperty(c,"name",{value:"formatToParts",enumerable:!1,writable:!1,configurable:!0})}catch(f){}(0,n.defineProperty)(t.NumberFormat.prototype,"formatToParts",{value:c}),(0,n.defineProperty)(t.NumberFormat.prototype,"formatRange",{value:function(e,t){return(0,n.FormatNumericRange)(this,e,t,{getInternalSlots:u.default})}}),(0,n.defineProperty)(t.NumberFormat.prototype,"formatRangeToParts",{value:function(e,t){return(0,n.FormatNumericRangeToParts)(this,e,t,{getInternalSlots:u.default})}}),(0,n.defineProperty)(t.NumberFormat.prototype,"resolvedOptions",{value:function(){if("object"!==a(this)||!(0,n.OrdinaryHasInstance)(t.NumberFormat,this))throw TypeError("Method Intl.NumberFormat.prototype.resolvedOptions called on incompatible receiver");for(var e=(0,u.default)(this),r={},o=0,i=l;o<i.length;o++){var m=i[o],c=e[m];void 0!==c&&(r[m]=c)}return"morePrecision"===e.roundingType?r.roundingPriority="morePrecision":"lessPrecision"===e.roundingType?r.roundingPriority="lessPrecision":r.roundingPriority="auto",r}});var s={enumerable:!1,configurable:!0,get:function(){if("object"!==a(this)||!(0,n.OrdinaryHasInstance)(t.NumberFormat,this))throw TypeError("Intl.NumberFormat format property accessor called on incompatible receiver");var e=(0,u.default)(this),r=this,o=e.boundFormat;if(void 0===o){o=function(e){var t=b(e);return r.formatToParts(t).map((function(e){return e.value})).join("")};try{Object.defineProperty(o,"name",{configurable:!0,enumerable:!1,writable:!1,value:""})}catch(f){}e.boundFormat=o}return o}};try{Object.defineProperty(s.get,"name",{configurable:!0,enumerable:!1,writable:!1,value:"get format"})}catch(f){}function b(e){return"bigint"==typeof e?e:(0,n.ToNumber)(e)}Object.defineProperty(t.NumberFormat.prototype,"format",s),(0,n.defineProperty)(t.NumberFormat,"supportedLocalesOf",{value:function(e,r){return(0,n.SupportedLocales)(t.NumberFormat.availableLocales,(0,n.CanonicalizeLocaleList)(e),r)}}),t.NumberFormat.__addLocaleData=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var a=0,o=e;a<o.length;a++){var n=o[a],i=n.data,m=n.locale,u=new Intl.Locale(m).minimize().toString();t.NumberFormat.localeData[m]=t.NumberFormat.localeData[u]=i,t.NumberFormat.availableLocales.add(u),t.NumberFormat.availableLocales.add(m),t.NumberFormat.__defaultLocale||(t.NumberFormat.__defaultLocale=u)}},t.NumberFormat.__addUnitData=function(e,r){var a=t.NumberFormat.localeData[e];if(!a)throw new Error('Locale data for "'.concat(e,'" has not been loaded in NumberFormat. \nPlease __addLocaleData before adding additional unit data'));for(var o in r.simple)a.units.simple[o]=r.simple[o];for(var o in r.compound)a.units.compound[o]=r.compound[o]},t.NumberFormat.__defaultLocale="",t.NumberFormat.localeData={},t.NumberFormat.availableLocales=new Set,t.NumberFormat.getDefaultLocale=function(){return t.NumberFormat.__defaultLocale},t.NumberFormat.polyfilled=!0;try{"undefined"!=typeof Symbol&&Object.defineProperty(t.NumberFormat.prototype,Symbol.toStringTag,{configurable:!0,enumerable:!1,writable:!1,value:"Intl.NumberFormat"}),Object.defineProperty(t.NumberFormat.prototype.constructor,"length",{configurable:!0,enumerable:!1,writable:!1,value:0}),Object.defineProperty(t.NumberFormat.supportedLocalesOf,"length",{configurable:!0,enumerable:!1,writable:!1,value:1}),Object.defineProperty(t.NumberFormat,"prototype",{configurable:!1,enumerable:!1,writable:!1,value:t.NumberFormat.prototype})}catch(f){}},47913:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.currencyDigitsData=void 0,t.currencyDigitsData={ADP:0,AFN:0,ALL:0,AMD:2,BHD:3,BIF:0,BYN:2,BYR:0,CAD:2,CHF:2,CLF:4,CLP:0,COP:2,CRC:2,CZK:2,DEFAULT:2,DJF:0,DKK:2,ESP:0,GNF:0,GYD:2,HUF:2,IDR:2,IQD:0,IRR:0,ISK:0,ITL:0,JOD:3,JPY:0,KMF:0,KPW:0,KRW:0,KWD:3,LAK:0,LBP:0,LUF:0,LYD:3,MGA:0,MGF:0,MMK:0,MNT:2,MRO:0,MUR:2,NOK:2,OMR:3,PKR:2,PYG:0,RSD:0,RWF:0,SEK:2,SLE:2,SLL:0,SOS:0,STD:0,SYP:0,TMM:0,TND:3,TRL:0,TWD:2,TZS:2,UGX:0,UYI:0,UYW:4,UZS:2,VEF:2,VND:0,VUV:0,XAF:0,XOF:0,XPF:0,YER:0,ZMK:0,ZWD:0}},13625:function(e,t,r){"use strict";r(71695),r(42713),r(99341),r(46692),r(47021),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=a.get(e);t||(t=Object.create(null),a.set(e,t));return t};var a=new WeakMap},53961:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.numberingSystemNames=void 0,t.numberingSystemNames=["adlm","ahom","arab","arabext","armn","armnlow","bali","beng","bhks","brah","cakm","cham","cyrl","deva","diak","ethi","fullwide","gara","geor","gong","gonm","grek","greklow","gujr","gukh","guru","hanidays","hanidec","hans","hansfin","hant","hantfin","hebr","hmng","hmnp","java","jpan","jpanfin","jpanyear","kali","kawi","khmr","knda","krai","lana","lanatham","laoo","latn","lepc","limb","mathbold","mathdbl","mathmono","mathsanb","mathsans","mlym","modi","mong","mroo","mtei","mymr","mymrepka","mymrpao","mymrshan","mymrtlng","nagm","newa","nkoo","olck","onao","orya","osma","outlined","rohg","roman","romanlow","saur","segment","shrd","sind","sinh","sora","sund","sunu","takr","talu","taml","tamldec","telu","thai","tibt","tirh","tnsa","vaii","wara","wcho"]},27128:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toLocaleString=function(e,t,r){return new a.NumberFormat(t,r).format(e)};var a=r(98492)},33618:function(e,t,r){function a(t){return e.exports=a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,a(t)}r(20223),r(63721),r(73545),r(71695),r(42713),r(99341),r(47021),e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=831.8068f4d1cbc0f295.js.map