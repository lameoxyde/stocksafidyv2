/*! For license information please see vendors~largeSidebar.js.LICENSE.txt */
!function(){"use strict";var e=function(e){try{return!!e()}catch(e){return!0}},n=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(e,n){return e(n={exports:{}},n.exports),n.exports}var t=function(e){return e&&e.Math==Math&&e},o=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof i&&i)||function(){return this}()||Function("return this")(),s=function(e){return"object"==typeof e?null!==e:"function"==typeof e},a=o.document,u=s(a)&&s(a.createElement),l=!n&&!e((function(){return 7!=Object.defineProperty((e="div",u?a.createElement(e):{}),"a",{get:function(){return 7}}).a;var e})),c=function(e){if(!s(e))throw TypeError(String(e)+" is not an object");return e},d=function(e,n){if(!s(e))return e;var i,r;if(n&&"function"==typeof(i=e.toString)&&!s(r=i.call(e)))return r;if("function"==typeof(i=e.valueOf)&&!s(r=i.call(e)))return r;if(!n&&"function"==typeof(i=e.toString)&&!s(r=i.call(e)))return r;throw TypeError("Can't convert object to primitive value")},f=Object.defineProperty,p={f:n?f:function(e,n,i){if(c(e),n=d(n,!0),c(i),l)try{return f(e,n,i)}catch(e){}if("get"in i||"set"in i)throw TypeError("Accessors not supported");return"value"in i&&(e[n]=i.value),e}},w=p.f,v=Function.prototype,m=v.toString,g=/^\s*function ([^ (]*)/;n&&!("name"in v)&&w(v,"name",{configurable:!0,get:function(){try{return m.call(this).match(g)[1]}catch(e){return""}}});var h={}.propertyIsEnumerable,b=Object.getOwnPropertyDescriptor,y={f:b&&!h.call({1:2},1)?function(e){var n=b(this,e);return!!n&&n.enumerable}:h},E=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}},x={}.toString,S=function(e){return x.call(e).slice(8,-1)},O="".split,T=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==S(e)?O.call(e,""):Object(e)}:Object,A=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},R=function(e){return T(A(e))},I={}.hasOwnProperty,k=function(e,n){return I.call(e,n)},P=Object.getOwnPropertyDescriptor,N={f:n?P:function(e,n){if(e=R(e),n=d(n,!0),l)try{return P(e,n)}catch(e){}if(k(e,n))return E(!y.f.call(e,n),e[n])}},_=n?function(e,n,i){return p.f(e,n,E(1,i))}:function(e,n,i){return e[n]=i,e},M=function(e,n){try{_(o,e,n)}catch(i){o[e]=n}return n},C=o["__core-js_shared__"]||M("__core-js_shared__",{}),j=Function.toString;"function"!=typeof C.inspectSource&&(C.inspectSource=function(e){return j.call(e)});var V,B,D,L,W=C.inspectSource,U=o.WeakMap,z="function"==typeof U&&/native code/.test(W(U)),F=r((function(e){(e.exports=function(e,n){return C[e]||(C[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.10.2",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),$=0,G=Math.random(),Y=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++$+G).toString(36)},X=F("keys"),q={},H=o.WeakMap;if(z){var K=C.state||(C.state=new H),Q=K.get,Z=K.has,J=K.set;V=function(e,n){if(Z.call(K,e))throw new TypeError("Object already initialized");return n.facade=e,J.call(K,e,n),n},B=function(e){return Q.call(K,e)||{}},D=function(e){return Z.call(K,e)}}else{var ee=X[L="state"]||(X[L]=Y(L));q[ee]=!0,V=function(e,n){if(k(e,ee))throw new TypeError("Object already initialized");return n.facade=e,_(e,ee,n),n},B=function(e){return k(e,ee)?e[ee]:{}},D=function(e){return k(e,ee)}}var ne,ie,re={set:V,get:B,has:D,enforce:function(e){return D(e)?B(e):V(e,{})},getterFor:function(e){return function(n){var i;if(!s(n)||(i=B(n)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return i}}},te=r((function(e){var n=re.get,i=re.enforce,r=String(String).split("String");(e.exports=function(e,n,t,s){var a,u=!!s&&!!s.unsafe,l=!!s&&!!s.enumerable,c=!!s&&!!s.noTargetGet;"function"==typeof t&&("string"!=typeof n||k(t,"name")||_(t,"name",n),(a=i(t)).source||(a.source=r.join("string"==typeof n?n:""))),e!==o?(u?!c&&e[n]&&(l=!0):delete e[n],l?e[n]=t:_(e,n,t)):l?e[n]=t:M(n,t)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||W(this)}))})),oe=o,se=function(e){return"function"==typeof e?e:void 0},ae=function(e,n){return arguments.length<2?se(oe[e])||se(o[e]):oe[e]&&oe[e][n]||o[e]&&o[e][n]},ue=Math.ceil,le=Math.floor,ce=function(e){return isNaN(e=+e)?0:(e>0?le:ue)(e)},de=Math.min,fe=function(e){return e>0?de(ce(e),9007199254740991):0},pe=Math.max,we=Math.min,ve=function(e){return function(n,i,r){var t,o=R(n),s=fe(o.length),a=function(e,n){var i=ce(e);return i<0?pe(i+n,0):we(i,n)}(r,s);if(e&&i!=i){for(;s>a;)if((t=o[a++])!=t)return!0}else for(;s>a;a++)if((e||a in o)&&o[a]===i)return e||a||0;return!e&&-1}},me={includes:ve(!0),indexOf:ve(!1)},ge=me.indexOf,he=function(e,n){var i,r=R(e),t=0,o=[];for(i in r)!k(q,i)&&k(r,i)&&o.push(i);for(;n.length>t;)k(r,i=n[t++])&&(~ge(o,i)||o.push(i));return o},be=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ye=be.concat("length","prototype"),Ee={f:Object.getOwnPropertyNames||function(e){return he(e,ye)}},xe={f:Object.getOwnPropertySymbols},Se=ae("Reflect","ownKeys")||function(e){var n=Ee.f(c(e)),i=xe.f;return i?n.concat(i(e)):n},Oe=function(e,n){for(var i=Se(n),r=p.f,t=N.f,o=0;o<i.length;o++){var s=i[o];k(e,s)||r(e,s,t(n,s))}},Te=/#|\.prototype\./,Ae=function(n,i){var r=Ie[Re(n)];return r==Pe||r!=ke&&("function"==typeof i?e(i):!!i)},Re=Ae.normalize=function(e){return String(e).replace(Te,".").toLowerCase()},Ie=Ae.data={},ke=Ae.NATIVE="N",Pe=Ae.POLYFILL="P",Ne=Ae,_e=N.f,Me=function(e,n){var i,r,t,s,a,u=e.target,l=e.global,c=e.stat;if(i=l?o:c?o[u]||M(u,{}):(o[u]||{}).prototype)for(r in n){if(s=n[r],t=e.noTargetGet?(a=_e(i,r))&&a.value:i[r],!Ne(l?r:u+(c?".":"#")+r,e.forced)&&void 0!==t){if(typeof s==typeof t)continue;Oe(s,t)}(e.sham||t&&t.sham)&&_(s,"sham",!0),te(i,r,s,e)}},Ce=me.indexOf,je=[].indexOf,Ve=!!je&&1/[1].indexOf(1,-0)<0,Be=!!(ie=[]["indexOf"])&&e((function(){ie.call(null,ne||function(){throw 1},1)}));Me({target:"Array",proto:!0,forced:Ve||!Be},{indexOf:function(e){return Ve?je.apply(this,arguments)||0:Ce(this,e,arguments.length>1?arguments[1]:void 0)}});var De,Le,We=Array.isArray||function(e){return"Array"==S(e)},Ue=function(e){return Object(A(e))},ze=function(e,n,i){var r=d(n);r in e?p.f(e,r,E(0,i)):e[r]=i},Fe="process"==S(o.process),$e=ae("navigator","userAgent")||"",Ge=o.process,Ye=Ge&&Ge.versions,Xe=Ye&&Ye.v8;Xe?Le=(De=Xe.split("."))[0]+De[1]:$e&&(!(De=$e.match(/Edge\/(\d+)/))||De[1]>=74)&&(De=$e.match(/Chrome\/(\d+)/))&&(Le=De[1]);var qe=Le&&+Le,He=!!Object.getOwnPropertySymbols&&!e((function(){return!Symbol.sham&&(Fe?38===qe:qe>37&&qe<41)})),Ke=He&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Qe=F("wks"),Ze=o.Symbol,Je=Ke?Ze:Ze&&Ze.withoutSetter||Y,en=function(e){return k(Qe,e)&&(He||"string"==typeof Qe[e])||(He&&k(Ze,e)?Qe[e]=Ze[e]:Qe[e]=Je("Symbol."+e)),Qe[e]},nn=en("species"),rn=function(e,n){var i;return We(e)&&("function"!=typeof(i=e.constructor)||i!==Array&&!We(i.prototype)?s(i)&&null===(i=i[nn])&&(i=void 0):i=void 0),new(void 0===i?Array:i)(0===n?0:n)},tn=en("species"),on=en("isConcatSpreadable"),sn=qe>=51||!e((function(){var e=[];return e[on]=!1,e.concat()[0]!==e})),an=function(n){return qe>=51||!e((function(){var e=[];return(e.constructor={})[tn]=function(){return{foo:1}},1!==e[n](Boolean).foo}))}("concat"),un=function(e){if(!s(e))return!1;var n=e[on];return void 0!==n?!!n:We(e)};Me({target:"Array",proto:!0,forced:!sn||!an},{concat:function(e){var n,i,r,t,o,s=Ue(this),a=rn(s,0),u=0;for(n=-1,r=arguments.length;n<r;n++)if(un(o=-1===n?s:arguments[n])){if(u+(t=fe(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(i=0;i<t;i++,u++)i in o&&ze(a,u,o[i])}else{if(u>=9007199254740991)throw TypeError("Maximum allowed index exceeded");ze(a,u++,o)}return a.length=u,a}});var ln=function(){var e=c(this),n="";return e.global&&(n+="g"),e.ignoreCase&&(n+="i"),e.multiline&&(n+="m"),e.dotAll&&(n+="s"),e.unicode&&(n+="u"),e.sticky&&(n+="y"),n};function cn(e,n){return RegExp(e,n)}var dn,fn,pn={UNSUPPORTED_Y:e((function(){var e=cn("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),BROKEN_CARET:e((function(){var e=cn("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},wn=RegExp.prototype.exec,vn=F("native-string-replace",String.prototype.replace),mn=wn,gn=(dn=/a/,fn=/b*/g,wn.call(dn,"a"),wn.call(fn,"a"),0!==dn.lastIndex||0!==fn.lastIndex),hn=pn.UNSUPPORTED_Y||pn.BROKEN_CARET,bn=void 0!==/()??/.exec("")[1];(gn||bn||hn)&&(mn=function(e){var n,i,r,t,o=this,s=hn&&o.sticky,a=ln.call(o),u=o.source,l=0,c=e;return s&&(-1===(a=a.replace("y","")).indexOf("g")&&(a+="g"),c=String(e).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==e[o.lastIndex-1])&&(u="(?: "+u+")",c=" "+c,l++),i=new RegExp("^(?:"+u+")",a)),bn&&(i=new RegExp("^"+u+"$(?!\\s)",a)),gn&&(n=o.lastIndex),r=wn.call(s?i:o,c),s?r?(r.input=r.input.slice(l),r[0]=r[0].slice(l),r.index=o.lastIndex,o.lastIndex+=r[0].length):o.lastIndex=0:gn&&r&&(o.lastIndex=o.global?r.index+r[0].length:n),bn&&r&&r.length>1&&vn.call(r[0],i,(function(){for(t=1;t<arguments.length-2;t++)void 0===arguments[t]&&(r[t]=void 0)})),r});var yn=mn;Me({target:"RegExp",proto:!0,forced:/./.exec!==yn},{exec:yn});var En=en("species"),xn=!e((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),Sn="$0"==="a".replace(/./,"$0"),On=en("replace"),Tn=!!/./[On]&&""===/./[On]("a","$0"),An=!e((function(){var e=/(?:)/,n=e.exec;e.exec=function(){return n.apply(this,arguments)};var i="ab".split(e);return 2!==i.length||"a"!==i[0]||"b"!==i[1]})),Rn=function(n,i,r,t){var o=en(n),s=!e((function(){var e={};return e[o]=function(){return 7},7!=""[n](e)})),a=s&&!e((function(){var e=!1,i=/a/;return"split"===n&&((i={}).constructor={},i.constructor[En]=function(){return i},i.flags="",i[o]=/./[o]),i.exec=function(){return e=!0,null},i[o](""),!e}));if(!s||!a||"replace"===n&&(!xn||!Sn||Tn)||"split"===n&&!An){var u=/./[o],l=r(o,""[n],(function(e,n,i,r,t){return n.exec===RegExp.prototype.exec?s&&!t?{done:!0,value:u.call(n,i,r)}:{done:!0,value:e.call(i,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:Sn,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Tn}),c=l[0],d=l[1];te(String.prototype,n,c),te(RegExp.prototype,o,2==i?function(e,n){return d.call(e,this,n)}:function(e){return d.call(e,this)})}t&&_(RegExp.prototype[o],"sham",!0)},In=en("match"),kn=en("species"),Pn=function(e,n){var i,r=c(e).constructor;return void 0===r||null==(i=c(r)[kn])?n:function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}(i)},Nn=function(e){return function(n,i){var r,t,o=String(A(n)),s=ce(i),a=o.length;return s<0||s>=a?e?"":void 0:(r=o.charCodeAt(s))<55296||r>56319||s+1===a||(t=o.charCodeAt(s+1))<56320||t>57343?e?o.charAt(s):r:e?o.slice(s,s+2):t-56320+(r-55296<<10)+65536}},_n={codeAt:Nn(!1),charAt:Nn(!0)}.charAt,Mn=function(e,n,i){return n+(i?_n(e,n).length:1)},Cn=function(e,n){var i=e.exec;if("function"==typeof i){var r=i.call(e,n);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==S(e))throw TypeError("RegExp#exec called on incompatible receiver");return yn.call(e,n)},jn=pn.UNSUPPORTED_Y,Vn=[].push,Bn=Math.min;Rn("split",2,(function(e,n,i){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,i){var r,t,o=String(A(this)),a=void 0===i?4294967295:i>>>0;if(0===a)return[];if(void 0===e)return[o];if(!s(r=e)||!(void 0!==(t=r[In])?t:"RegExp"==S(r)))return n.call(o,e,a);for(var u,l,c,d=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,w=new RegExp(e.source,f+"g");(u=yn.call(w,o))&&!((l=w.lastIndex)>p&&(d.push(o.slice(p,u.index)),u.length>1&&u.index<o.length&&Vn.apply(d,u.slice(1)),c=u[0].length,p=l,d.length>=a));)w.lastIndex===u.index&&w.lastIndex++;return p===o.length?!c&&w.test("")||d.push(""):d.push(o.slice(p)),d.length>a?d.slice(0,a):d}:"0".split(void 0,0).length?function(e,i){return void 0===e&&0===i?[]:n.call(this,e,i)}:n,[function(n,i){var t=A(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,t,i):r.call(String(t),n,i)},function(e,t){var o=i(r,e,this,t,r!==n);if(o.done)return o.value;var s=c(e),a=String(this),u=Pn(s,RegExp),l=s.unicode,d=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(jn?"g":"y"),f=new u(jn?"^(?:"+s.source+")":s,d),p=void 0===t?4294967295:t>>>0;if(0===p)return[];if(0===a.length)return null===Cn(f,a)?[a]:[];for(var w=0,v=0,m=[];v<a.length;){f.lastIndex=jn?0:v;var g,h=Cn(f,jn?a.slice(v):a);if(null===h||(g=Bn(fe(f.lastIndex+(jn?v:0)),a.length))===w)v=Mn(a,v,l);else{if(m.push(a.slice(w,v)),m.length===p)return m;for(var b=1;b<=h.length-1;b++)if(m.push(h[b]),m.length===p)return m;v=w=g}}return m.push(a.slice(w)),m}]}),jn);var Dn=Math.floor,Ln="".replace,Wn=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Un=/\$([$&'`]|\d{1,2})/g,zn=function(e,n,i,r,t,o){var s=i+e.length,a=r.length,u=Un;return void 0!==t&&(t=Ue(t),u=Wn),Ln.call(o,u,(function(o,u){var l;switch(u.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,i);case"'":return n.slice(s);case"<":l=t[u.slice(1,-1)];break;default:var c=+u;if(0===c)return o;if(c>a){var d=Dn(c/10);return 0===d?o:d<=a?void 0===r[d-1]?u.charAt(1):r[d-1]+u.charAt(1):o}l=r[c-1]}return void 0===l?"":l}))},Fn=Math.max,$n=Math.min;Rn("replace",2,(function(e,n,i,r){var t=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,o=r.REPLACE_KEEPS_$0,s=t?"$":"$0";return[function(i,r){var t=A(this),o=null==i?void 0:i[e];return void 0!==o?o.call(i,t,r):n.call(String(t),i,r)},function(e,r){if(!t&&o||"string"==typeof r&&-1===r.indexOf(s)){var a=i(n,e,this,r);if(a.done)return a.value}var u=c(e),l=String(this),d="function"==typeof r;d||(r=String(r));var f=u.global;if(f){var p=u.unicode;u.lastIndex=0}for(var w=[];;){var v=Cn(u,l);if(null===v)break;if(w.push(v),!f)break;""===String(v[0])&&(u.lastIndex=Mn(l,fe(u.lastIndex),p))}for(var m,g="",h=0,b=0;b<w.length;b++){v=w[b];for(var y=String(v[0]),E=Fn($n(ce(v.index),l.length),0),x=[],S=1;S<v.length;S++)x.push(void 0===(m=v[S])?m:String(m));var O=v.groups;if(d){var T=[y].concat(x,E,l);void 0!==O&&T.push(O);var A=String(r.apply(void 0,T))}else A=zn(y,l,E,x,O,r);E>=h&&(g+=l.slice(h,E)+A,h=E+y.length)}return g+l.slice(h)}]}));var Gn="\t\n\v\f\r                　\u2028\u2029\ufeff",Yn="["+Gn+"]",Xn=RegExp("^"+Yn+Yn+"*"),qn=RegExp(Yn+Yn+"*$"),Hn=function(e){return function(n){var i=String(A(n));return 1&e&&(i=i.replace(Xn,"")),2&e&&(i=i.replace(qn,"")),i}},Kn={start:Hn(1),end:Hn(2),trim:Hn(3)},Qn=Kn.trim;Me({target:"String",proto:!0,forced:function(n){return e((function(){return!!Gn[n]()||"​᠎"!="​᠎"[n]()||Gn[n].name!==n}))}("trim")},{trim:function(){return Qn(this)}});var Zn=Object.keys||function(e){return he(e,be)},Jn=Object.assign,ei=Object.defineProperty,ni=!Jn||e((function(){if(n&&1!==Jn({b:1},Jn(ei({},"a",{enumerable:!0,get:function(){ei(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},i={},r=Symbol();return e[r]=7,"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),7!=Jn({},e)[r]||"abcdefghijklmnopqrst"!=Zn(Jn({},i)).join("")}))?function(e,i){for(var r=Ue(e),t=arguments.length,o=1,s=xe.f,a=y.f;t>o;)for(var u,l=T(arguments[o++]),c=s?Zn(l).concat(s(l)):Zn(l),d=c.length,f=0;d>f;)u=c[f++],n&&!a.call(l,u)||(r[u]=l[u]);return r}:Jn;Me({target:"Object",stat:!0,forced:Object.assign!==ni},{assign:ni}),(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{151:function(e,n){e.exports=function(e){var n={};function i(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=e,i.c=n,i.d=function(e,n,r){i.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i(i.s=1)}([function(e,n,i){var r={MOBILE:"mobile",TABLET:"tablet",SMART_TV:"smarttv",CONSOLE:"console",WEARABLE:"wearable",BROWSER:void 0};e.exports={BROWSER_TYPES:{CHROME:"Chrome",FIREFOX:"Firefox",OPERA:"Opera",YANDEX:"Yandex",SAFARI:"Safari",INTERNET_EXPLORER:"Internet Explorer",EDGE:"Edge",CHROMIUM:"Chromium",IE:"IE",MOBILE_SAFARI:"Mobile Safari",EDGE_CHROMIUM:"Edge Chromium"},DEVICE_TYPES:r,OS_TYPES:{IOS:"iOS",ANDROID:"Android",WINDOWS_PHONE:"Windows Phone",WINDOWS:"Windows",MAC_OS:"Mac OS"},defaultData:{isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1}}},function(e,n,i){var r,t=i(2),o=i(0),s=o.BROWSER_TYPES,a=o.OS_TYPES,u=o.DEVICE_TYPES,l=i(4),c=l.checkType,d=l.broPayload,f=l.mobilePayload,p=l.wearPayload,w=l.consolePayload,v=l.stvPayload,m=l.getNavigatorInstance,g=l.isIOS13Check,h=new t,b=h.getBrowser(),y=h.getDevice(),E=h.getEngine(),x=h.getOS(),S=h.getUA(),O=s.CHROME,T=s.CHROMIUM,A=s.IE,R=s.INTERNET_EXPLORER,I=s.OPERA,k=s.FIREFOX,P=s.SAFARI,N=s.EDGE,_=s.YANDEX,M=s.MOBILE_SAFARI,C=u.MOBILE,j=u.TABLET,V=u.SMART_TV,B=u.BROWSER,D=u.WEARABLE,L=u.CONSOLE,W=a.ANDROID,U=a.WINDOWS_PHONE,z=a.IOS,F=a.WINDOWS,$=a.MAC_OS,G=function(){return x.name===a.WINDOWS&&"10"===x.version&&("string"==typeof S&&-1!==S.indexOf("Edg/"))},Y=function(){return b.name===N},X=function(){return g("iPad")},q=y.type===V,H=y.type===L,K=y.type===D,Q=b.name===M||X(),Z=b.name===T,J=function(){switch(y.type){case C:case j:return!0;default:return!1}}()||X(),ee=y.type===C,ne=y.type===j||X(),ie=y.type===B,re=x.name===W,te=x.name===U,oe=x.name===z||X(),se=b.name===O,ae=b.name===k,ue=b.name===P||b.name===M,le=b.name===I,ce=b.name===R||b.name===A,de=x.version?x.version:"none",fe=x.name?x.name:"none",pe=b.major,we=b.version,ve=b.name,me=y.vendor?y.vendor:"none",ge=y.model?y.model:"none",he=E.name,be=E.version,ye=S,Ee=Y()||G(),xe=b.name===_,Se=y.type,Oe=(r=m())&&(/iPad|iPhone|iPod/.test(r.platform)||"MacIntel"===r.platform&&r.maxTouchPoints>1)&&!window.MSStream,Te=X(),Ae=g("iPhone"),Re=g("iPod"),Ie=function(){var e=m(),n=e&&e.userAgent.toLowerCase();return"string"==typeof n&&/electron/.test(n)}(),ke=G(),Pe=Y(),Ne=x.name===F,_e=x.name===$,Me=c(y.type);e.exports={deviceDetect:function(){var e=Me.isBrowser,n=Me.isMobile,i=Me.isTablet,r=Me.isSmartTV,t=Me.isConsole,o=Me.isWearable;return e?d(e,b,E,x,S):r?v(r,E,x,S):t?w(t,E,x,S):n||i?f(Me,y,x,S):o?p(o,E,x,S):void 0},isSmartTV:q,isConsole:H,isWearable:K,isMobileSafari:Q,isChromium:Z,isMobile:J,isMobileOnly:ee,isTablet:ne,isBrowser:ie,isAndroid:re,isWinPhone:te,isIOS:oe,isChrome:se,isFirefox:ae,isSafari:ue,isOpera:le,isIE:ce,osVersion:de,osName:fe,fullBrowserVersion:pe,browserVersion:we,browserName:ve,mobileVendor:me,mobileModel:ge,engineName:he,engineVersion:be,getUA:ye,isEdge:Ee,isYandex:xe,deviceType:Se,isIOS13:Oe,isIPad13:Te,isIPhone13:Ae,isIPod13:Re,isElectron:Ie,isEdgeChromium:ke,isLegacyEdge:Pe,isWindows:Ne,isMacOs:_e}},function(e,n,i){var r;!function(t,o){var s="model",a="name",u="type",l="vendor",c="version",d="mobile",f="tablet",p={extend:function(e,n){var i={};for(var r in e)n[r]&&n[r].length%2==0?i[r]=n[r].concat(e[r]):i[r]=e[r];return i},has:function(e,n){return"string"==typeof e&&-1!==n.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},w={rgx:function(e,n){for(var i,r,t,o,s,a,u=0;u<n.length&&!s;){var l=n[u],c=n[u+1];for(i=r=0;i<l.length&&!s;)if(s=l[i++].exec(e))for(t=0;t<c.length;t++)a=s[++r],"object"==typeof(o=c[t])&&o.length>0?2==o.length?"function"==typeof o[1]?this[o[0]]=o[1].call(this,a):this[o[0]]=o[1]:3==o.length?"function"!=typeof o[1]||o[1].exec&&o[1].test?this[o[0]]=a?a.replace(o[1],o[2]):void 0:this[o[0]]=a?o[1].call(this,a,o[2]):void 0:4==o.length&&(this[o[0]]=a?o[3].call(this,a.replace(o[1],o[2])):void 0):this[o]=a||void 0;u+=2}},str:function(e,n){for(var i in n)if("object"==typeof n[i]&&n[i].length>0){for(var r=0;r<n[i].length;r++)if(p.has(n[i][r],e))return"?"===i?void 0:i}else if(p.has(n[i],e))return"?"===i?void 0:i;return e}},v={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},m={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,c],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],c],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],c],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[a,c],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[a,"IE"],c],[/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],[[a,"Edge"],c],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],c],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],c],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],c],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],c],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],c],[/(qqbrowserlite)\/([\w\.]+)/i],[a,c],[/(QQ)\/([\d\.]+)/i],[a,c],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,c],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[a,c],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[a,c],[/(MetaSr)[\/\s]?([\w\.]+)/i],[a],[/(LBBROWSER)/i],[a],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[c,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[c,[a,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[c,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],c],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],c],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[c,[a,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,c],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],c],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],c],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],c],[/fxios\/([\w\.-]+)/i],[c,[a,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[c,[a,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[c,a],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],c],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[c,w.str,v.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[a,c],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],c],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,c]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",p.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",p.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",p.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[s,l,[u,f]],[/applecoremedia\/[\w\.]+ \((ipad)/],[s,[l,"Apple"],[u,f]],[/(apple\s{0,1}tv)/i],[[s,"Apple TV"],[l,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[l,s,[u,f]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[s,[l,"Amazon"],[u,f]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[s,w.str,v.device.amazon.model],[l,"Amazon"],[u,d]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[s,l,[u,d]],[/\((ip[honed|\s\w*]+);/i],[s,[l,"Apple"],[u,d]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[l,s,[u,d]],[/\(bb10;\s(\w+)/i],[s,[l,"BlackBerry"],[u,d]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[s,[l,"Asus"],[u,f]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[l,"Sony"],[s,"Xperia Tablet"],[u,f]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[s,[l,"Sony"],[u,d]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[l,s,[u,"console"]],[/android.+;\s(shield)\sbuild/i],[s,[l,"Nvidia"],[u,"console"]],[/(playstation\s[34portablevi]+)/i],[s,[l,"Sony"],[u,"console"]],[/(sprint\s(\w+))/i],[[l,w.str,v.device.sprint.vendor],[s,w.str,v.device.sprint.model],[u,d]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[l,s,[u,f]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[l,[s,/_/g," "],[u,d]],[/(nexus\s9)/i],[s,[l,"HTC"],[u,f]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[s,[l,"Huawei"],[u,d]],[/(microsoft);\s(lumia[\s\w]+)/i],[l,s,[u,d]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[s,[l,"Microsoft"],[u,"console"]],[/(kin\.[onetw]{3})/i],[[s,/\./g," "],[l,"Microsoft"],[u,d]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[s,[l,"Motorola"],[u,d]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[s,[l,"Motorola"],[u,f]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[l,p.trim],[s,p.trim],[u,"smarttv"]],[/hbbtv.+maple;(\d+)/i],[[s,/^/,"SmartTV"],[l,"Samsung"],[u,"smarttv"]],[/\(dtv[\);].+(aquos)/i],[s,[l,"Sharp"],[u,"smarttv"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[l,"Samsung"],s,[u,f]],[/smart-tv.+(samsung)/i],[l,[u,"smarttv"],s],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[l,"Samsung"],s,[u,d]],[/sie-(\w*)/i],[s,[l,"Siemens"],[u,d]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[l,"Nokia"],s,[u,d]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[s,[l,"Acer"],[u,f]],[/android.+([vl]k\-?\d{3})\s+build/i],[s,[l,"LG"],[u,f]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[l,"LG"],s,[u,f]],[/(lg) netcast\.tv/i],[l,s,[u,"smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[s,[l,"LG"],[u,d]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[s,[l,"Lenovo"],[u,f]],[/linux;.+((jolla));/i],[l,s,[u,d]],[/((pebble))app\/[\d\.]+\s/i],[l,s,[u,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[l,s,[u,d]],[/crkey/i],[[s,"Chromecast"],[l,"Google"]],[/android.+;\s(glass)\s\d/i],[s,[l,"Google"],[u,"wearable"]],[/android.+;\s(pixel c)\s/i],[s,[l,"Google"],[u,f]],[/android.+;\s(pixel xl|pixel)\s/i],[s,[l,"Google"],[u,d]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[l,"Xiaomi"],[u,d]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[l,"Xiaomi"],[u,f]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[s,[l,"Meizu"],[u,f]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[s,[l,"OnePlus"],[u,d]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[s,[l,"RCA"],[u,f]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[s,[l,"Dell"],[u,f]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[s,[l,"Verizon"],[u,f]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[l,"Barnes & Noble"],s,[u,f]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[s,[l,"NuVision"],[u,f]],[/android.+;\s(k88)\sbuild/i],[s,[l,"ZTE"],[u,f]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[s,[l,"Swiss"],[u,d]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[s,[l,"Swiss"],[u,f]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[s,[l,"Zeki"],[u,f]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[l,"Dragon Touch"],s,[u,f]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[s,[l,"Insignia"],[u,f]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[s,[l,"NextBook"],[u,f]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[l,"Voice"],s,[u,d]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[l,"LvTel"],s,[u,d]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[s,[l,"Envizen"],[u,f]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[l,s,[u,f]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[s,[l,"MachSpeed"],[u,f]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[l,s,[u,f]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[s,[l,"Rotor"],[u,f]],[/android.+(KS(.+))\s+build/i],[s,[l,"Amazon"],[u,f]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[l,s,[u,f]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[u,p.lowerize],l,s],[/(android[\w\.\s\-]{0,9});.+build/i],[s,[l,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[c,[a,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,c],[/rv\:([\w\.]{1,9}).+(gecko)/i],[c,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,c],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[c,w.str,v.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[c,w.str,v.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],c],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,/linux;.+(sailfish);/i],[a,c],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[a,"Symbian"],c],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],c],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[a,c],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],c],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],c],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[a,c],[/(haiku)\s(\w+)/i],[a,c],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[c,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[c,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]*)/i],[a,c]]},g=function e(n,i){if("object"==typeof n&&(i=n,n=void 0),!(this instanceof e))return new e(n,i).getResult();var r=n||(t&&t.navigator&&t.navigator.userAgent?t.navigator.userAgent:""),o=i?p.extend(m,i):m;return this.getBrowser=function(){var e={name:void 0,version:void 0};return w.rgx.call(e,r,o.browser),e.major=p.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return w.rgx.call(e,r,o.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return w.rgx.call(e,r,o.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return w.rgx.call(e,r,o.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return w.rgx.call(e,r,o.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=e,this},this};g.VERSION="0.7.18",g.BROWSER={NAME:a,MAJOR:"major",VERSION:c},g.CPU={ARCHITECTURE:"architecture"},g.DEVICE={MODEL:s,VENDOR:l,TYPE:u,CONSOLE:"console",MOBILE:d,SMARTTV:"smarttv",TABLET:f,WEARABLE:"wearable",EMBEDDED:"embedded"},g.ENGINE={NAME:a,VERSION:c},g.OS={NAME:a,VERSION:c},void 0!==n?(void 0!==e&&e.exports&&(n=e.exports=g),n.UAParser=g):i(3)?void 0===(r=function(){return g}.call(n,i,n,e))||(e.exports=r):t&&(t.UAParser=g);var h=t&&(t.jQuery||t.Zepto);if(void 0!==h){var b=new g;h.ua=b.getResult(),h.ua.get=function(){return b.getUA()},h.ua.set=function(e){b.setUA(e);var n=b.getResult();for(var i in n)h.ua[i]=n[i]}}}("object"==typeof window?window:this)},function(e,n){(function(n){e.exports=n}).call(n,{})},function(e,n,i){Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},t=i(0),o=t.DEVICE_TYPES,s=t.defaultData,a=n.getNavigatorInstance=function(){return!("undefined"==typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},u=n.isIOS13Check=function(e){var n=a();return n&&n.platform&&(-1!==n.platform.indexOf(e)||"MacIntel"===n.platform&&n.maxTouchPoints>1&&!window.MSStream)};e.exports={checkType:function(e){switch(e){case o.MOBILE:return{isMobile:!0};case o.TABLET:return{isTablet:!0};case o.SMART_TV:return{isSmartTV:!0};case o.CONSOLE:return{isConsole:!0};case o.WEARABLE:return{isWearable:!0};case o.BROWSER:return{isBrowser:!0};default:return s}},broPayload:function(e,n,i,r,t){return{isBrowser:e,browserMajorVersion:n.major,browserFullVersion:n.version,browserName:n.name,engineName:i.name||!1,engineVersion:i.version,osName:r.name,osVersion:r.version,userAgent:t}},mobilePayload:function(e,n,i,t){return r({},e,{vendor:n.vendor,model:n.model,os:i.name,osVersion:i.version,ua:t})},stvPayload:function(e,n,i,r){return{isSmartTV:e,engineName:n.name,engineVersion:n.version,osName:i.name,osVersion:i.version,userAgent:r}},consolePayload:function(e,n,i,r){return{isConsole:e,engineName:n.name,engineVersion:n.version,osName:i.name,osVersion:i.version,userAgent:r}},wearPayload:function(e,n,i,r){return{isWearable:e,engineName:n.name,engineVersion:n.version,osName:i.name,osVersion:i.version,userAgent:r}},getNavigatorInstance:a,isIOS13Check:u}}])},348:function(e,n,i){var r=i(1);r="default"in r?r.default:r;/^2\./.test(r.version)||r.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+r.version);var t="_vue_clickaway_handler";function o(e,n,i){s(e);var r=i.context,o=n.value;if("function"==typeof o){var a=!1;setTimeout((function(){a=!0}),0),e[t]=function(n){var i=n.path||(n.composedPath?n.composedPath():void 0);if(a&&(i?i.indexOf(e)<0:!e.contains(n.target)))return o.call(r,n)},document.documentElement.addEventListener("click",e[t],!1)}}function s(e){document.documentElement.removeEventListener("click",e[t],!1),delete e[t]}var a={bind:o,update:function(e,n){n.value!==n.oldValue&&o(e,n)},unbind:s},u={directives:{onClickaway:a}};n.version="2.2.2",n.directive=a,n.mixin=u}}])}();