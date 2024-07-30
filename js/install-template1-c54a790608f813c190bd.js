(()=>{
    var __webpack_modules__ = {
        3112: (__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                Pn: ()=>getClid,
                Yh: ()=>addGoogleAdvSDK,
                iF: ()=>getAdvInstallEventName,
                re: ()=>isTiktok,
                vA: ()=>addAdvSDK
            });
            var _utils_store_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(608);
            function creatAndAppendScript(e) {
                var t = document.createElement("script");
                t.async = !0,
                t.src = e,
                document.getElementsByTagName("head")[0].appendChild(t)
            }
            function creatAndAppendScriptText(e) {
                var t = document.createElement("script");
                for (var i in t.type = "text/javascript",
                e)
                    t[i] = e[i];
                document.getElementsByTagName("head")[0].appendChild(t)
            }
            function getAdvInstallEventName(e) {
                var t = new URLSearchParams(window.location.search);
                switch (e || (e = t.get("channel_id") || ""),
                e) {
                case "4":
                case "5":
                    return "AddToWishlist";
                case "9":
                    return "EVENT_BUTTON_CLICK";
                case "20":
                case "21":
                case "22":
                case "24":
                    return "install";
                case "23":
                    return "app_download";
                default:
                    return ""
                }
            }
            function getClid(e) {
                var t = new URLSearchParams(window.location.search);
                switch (e || (e = t.get("channel_id") || ""),
                e) {
                case "4":
                    return t.get("fbclid");
                case "5":
                    return t.get("ttclid");
                case "9":
                case "20":
                case "21":
                    return t.get("click_id");
                case "22":
                    return t.get("global_id");
                case "23":
                    return t.get("bbg");
                case "24":
                    return t.get("aff_sub");
                default:
                    return ""
                }
            }
            function addAdvSDK(e, t) {
                var i = new URLSearchParams(window.location.search);
                switch (e || (e = i.get("channel_id") || ""),
                t || (t = i.get("rb_pixel_id") || ""),
                e) {
                case "4":
                case "5":
                    break;
                case "9":
                    addKWaiAdvSDK(t)
                }
            }
            function addKWaiAdvSDK(pixelId) {
                var params = new URLSearchParams(window.location.search);
                pixelId || (pixelId = params.get("rb_pixel_id") || ""),
                pixelId && ((window,pixelId)=>{
                    eval('!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.install=t():e.install=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var o,r=0,i=t.length;r<i;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){var o,i=e.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,n&&(i.onerror=function(){r(e,n)});var a=e.getElementsByTagName("script")[0];null===(o=a.parentNode)||void 0===o||o.insertBefore(i,a)};!function(e,t,n){e.KwaiAnalyticsObject=n;var i=e[n]=e[n]||[];i.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];var a=function(e,t){e[t]=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=o([t],n,!0);e.push(i)}};i.methods.forEach((function(e){a(i,e)})),i.instance=function(e){var t,n=(null===(t=i._i)||void 0===t?void 0:t[e])||[];return i.methods.forEach((function(e){a(n,e)})),n},i.load=function(e,o){var a="https://s1.kwai.net/kos/s101/nlav11187/pixel/events.js";i._i=i._i||{},i._i[e]=[],i._i[e]._u=a,i._t=i._t||{},i._t[e]=+new Date,i._o=i._o||{},i._o[e]=o||{};var c="?sdkid=".concat(e,"&lib=").concat(n);r(t,a+c,"https://s16-11187.ap4r.com/kos/s101/nlav11187/pixel/events.js"+c)}}(window,document,"kwaiq")}])}));'),
                    window.kwaiq.load(pixelId),
                    window.kwaiq.page()
                }
                )(window, pixelId)
            }
            function addGoogleAdvSDK(e) {
                var t = new URLSearchParams(window.location.search);
                e || (e = t.get("rb_pixel_id") || ""),
                e && (creatAndAppendScript(`https://www.googletagmanager.com/gtag/js?id=${e}`),
                creatAndAppendScriptText({
                    text: ";window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);};gtag('js', new Date());gtag('config', '" + e + "');",
                    id: "google-analytics"
                }))
            }
            function isTiktok() {
                return "5" === (0,
                _utils_store_ts__WEBPACK_IMPORTED_MODULE_0__.KA)("channel_id")
            }
        }
        ,
        608: (e,t,i)=>{
            "use strict";
            function n() {
                return window.__rb || (window.__rb = {}),
                window.__rb
            }
            function r(e, t) {
                n()[e] = t
            }
            function a(e) {
                return n()[e]
            }
            i.d(t, {
                KA: ()=>a,
                k3: ()=>r
            })
        }
        ,
        574: function(e, t, i) {
            var n;
            !function(r, a) {
                "use strict";
                var o = "1.0.38"
                  , s = ""
                  , l = "?"
                  , c = "function"
                  , u = "undefined"
                  , d = "object"
                  , p = "string"
                  , v = "major"
                  , b = "model"
                  , m = "name"
                  , f = "type"
                  , h = "vendor"
                  , g = "version"
                  , w = "architecture"
                  , _ = "console"
                  , y = "mobile"
                  , k = "tablet"
                  , x = "smarttv"
                  , S = "wearable"
                  , j = "embedded"
                  , P = 500
                  , L = "Amazon"
                  , I = "Apple"
                  , O = "ASUS"
                  , E = "BlackBerry"
                  , T = "Browser"
                  , $ = "Chrome"
                  , A = "Firefox"
                  , N = "Google"
                  , C = "Huawei"
                  , M = "LG"
                  , U = "Microsoft"
                  , R = "Motorola"
                  , q = "Opera"
                  , D = "Samsung"
                  , z = "Sharp"
                  , B = "Sony"
                  , H = "Xiaomi"
                  , F = "Zebra"
                  , K = "Facebook"
                  , V = "Chromium OS"
                  , W = "Mac OS"
                  , G = function(e, t) {
                    var i = {};
                    for (var n in e)
                        t[n] && t[n].length % 2 == 0 ? i[n] = t[n].concat(e[n]) : i[n] = e[n];
                    return i
                }
                  , J = function(e) {
                    for (var t = {}, i = 0; i < e.length; i++)
                        t[e[i].toUpperCase()] = e[i];
                    return t
                }
                  , Y = function(e, t) {
                    return typeof e === p && -1 !== Z(t).indexOf(Z(e))
                }
                  , Z = function(e) {
                    return e.toLowerCase()
                }
                  , X = function(e) {
                    return typeof e === p ? e.replace(/[^\d\.]/g, s).split(".")[0] : void 0
                }
                  , Q = function(e, t) {
                    if (typeof e === p)
                        return e = e.replace(/^\s\s*/, s),
                        typeof t === u ? e : e.substring(0, P)
                }
                  , ee = function(e, t) {
                    for (var i, n, r, o, s, l, u = 0; u < t.length && !s; ) {
                        var p = t[u]
                          , v = t[u + 1];
                        for (i = n = 0; i < p.length && !s && p[i]; )
                            if (s = p[i++].exec(e))
                                for (r = 0; r < v.length; r++)
                                    l = s[++n],
                                    typeof (o = v[r]) === d && o.length > 0 ? 2 === o.length ? typeof o[1] == c ? this[o[0]] = o[1].call(this, l) : this[o[0]] = o[1] : 3 === o.length ? typeof o[1] !== c || o[1].exec && o[1].test ? this[o[0]] = l ? l.replace(o[1], o[2]) : void 0 : this[o[0]] = l ? o[1].call(this, l, o[2]) : void 0 : 4 === o.length && (this[o[0]] = l ? o[3].call(this, l.replace(o[1], o[2])) : a) : this[o] = l || a;
                        u += 2
                    }
                }
                  , et = function(e, t) {
                    for (var i in t)
                        if (typeof t[i] === d && t[i].length > 0) {
                            for (var n = 0; n < t[i].length; n++)
                                if (Y(t[i][n], e))
                                    return i === l ? a : i
                        } else if (Y(t[i], e))
                            return i === l ? a : i;
                    return e
                }
                  , ei = {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    "8.1": "NT 6.3",
                    10: ["NT 6.4", "NT 10.0"],
                    RT: "ARM"
                }
                  , en = {
                    browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [g, [m, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [g, [m, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [m, g], [/opios[\/ ]+([\w\.]+)/i], [g, [m, q + " Mini"]], [/\bop(?:rg)?x\/([\w\.]+)/i], [g, [m, q + " GX"]], [/\bopr\/([\w\.]+)/i], [g, [m, q]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [g, [m, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [m, g], [/\bddg\/([\w\.]+)/i], [g, [m, "DuckDuckGo"]], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [g, [m, "UC" + T]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [g, [m, "WeChat"]], [/konqueror\/([\w\.]+)/i], [g, [m, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [g, [m, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [g, [m, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [g, [m, "Smart Lenovo " + T]], [/(avast|avg)\/([\w\.]+)/i], [[m, /(.+)/, "$1 Secure " + T], g], [/\bfocus\/([\w\.]+)/i], [g, [m, A + " Focus"]], [/\bopt\/([\w\.]+)/i], [g, [m, q + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [g, [m, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [g, [m, "Dolphin"]], [/coast\/([\w\.]+)/i], [g, [m, q + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [g, [m, "MIUI " + T]], [/fxios\/([-\w\.]+)/i], [g, [m, A]], [/\bqihu|(qi?ho?o?|360)browser/i], [[m, "360 " + T]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[m, /(.+)/, "$1 " + T], g], [/samsungbrowser\/([\w\.]+)/i], [g, [m, D + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[m, /_/g, " "], g], [/metasr[\/ ]?([\d\.]+)/i], [g, [m, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[m, "Sogou Mobile"], g], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [m, g], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [m], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[m, K], g], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [m, g], [/\bgsa\/([\w\.]+) .*safari\//i], [g, [m, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [g, [m, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [g, [m, $ + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[m, $ + " WebView"], g], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [g, [m, "Android " + T]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [m, g], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [g, [m, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [g, m], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [m, [g, et, {
                        "1.0": "/8",
                        "1.2": "/1",
                        "1.3": "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }]], [/(webkit|khtml)\/([\w\.]+)/i], [m, g], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[m, "Netscape"], g], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [g, [m, A + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [m, g], [/(cobalt)\/([\w\.]+)/i], [m, [g, /master.|lts./, ""]]],
                    cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[w, "amd64"]], [/(ia32(?=;))/i], [[w, Z]], [/((?:i[346]|x)86)[;\)]/i], [[w, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[w, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[w, "armhf"]], [/windows (ce|mobile); ppc;/i], [[w, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[w, /ower/, s, Z]], [/(sun4\w)[;\)]/i], [[w, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[w, Z]]],
                    device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [b, [h, D], [f, k]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [b, [h, D], [f, y]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [b, [h, I], [f, y]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [b, [h, I], [f, k]], [/(macintosh);/i], [b, [h, I]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [b, [h, z], [f, y]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [b, [h, C], [f, k]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [b, [h, C], [f, y]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[b, /_/g, " "], [h, H], [f, y]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[b, /_/g, " "], [h, H], [f, k]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [b, [h, "OPPO"], [f, y]], [/\b(opd2\d{3}a?) bui/i], [b, [h, "OPPO"], [f, k]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [b, [h, "Vivo"], [f, y]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [b, [h, "Realme"], [f, y]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [b, [h, R], [f, y]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [b, [h, R], [f, k]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [b, [h, M], [f, k]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [b, [h, M], [f, y]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [b, [h, "Lenovo"], [f, k]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[b, /_/g, " "], [h, "Nokia"], [f, y]], [/(pixel c)\b/i], [b, [h, N], [f, k]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [b, [h, N], [f, y]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [b, [h, B], [f, y]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[b, "Xperia Tablet"], [h, B], [f, k]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [b, [h, "OnePlus"], [f, y]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [b, [h, L], [f, k]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[b, /(.+)/g, "Fire Phone $1"], [h, L], [f, y]], [/(playbook);[-\w\),; ]+(rim)/i], [b, h, [f, k]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [b, [h, E], [f, y]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [b, [h, O], [f, k]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [b, [h, O], [f, y]], [/(nexus 9)/i], [b, [h, "HTC"], [f, k]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [h, [b, /_/g, " "], [f, y]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [b, [h, "Acer"], [f, k]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [b, [h, "Meizu"], [f, y]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [b, [h, "Ulefone"], [f, y]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [h, b, [f, y]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [h, b, [f, k]], [/(surface duo)/i], [b, [h, U], [f, k]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [b, [h, "Fairphone"], [f, y]], [/(u304aa)/i], [b, [h, "AT&T"], [f, y]], [/\bsie-(\w*)/i], [b, [h, "Siemens"], [f, y]], [/\b(rct\w+) b/i], [b, [h, "RCA"], [f, k]], [/\b(venue[\d ]{2,7}) b/i], [b, [h, "Dell"], [f, k]], [/\b(q(?:mv|ta)\w+) b/i], [b, [h, "Verizon"], [f, k]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [b, [h, "Barnes & Noble"], [f, k]], [/\b(tm\d{3}\w+) b/i], [b, [h, "NuVision"], [f, k]], [/\b(k88) b/i], [b, [h, "ZTE"], [f, k]], [/\b(nx\d{3}j) b/i], [b, [h, "ZTE"], [f, y]], [/\b(gen\d{3}) b.+49h/i], [b, [h, "Swiss"], [f, y]], [/\b(zur\d{3}) b/i], [b, [h, "Swiss"], [f, k]], [/\b((zeki)?tb.*\b) b/i], [b, [h, "Zeki"], [f, k]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[h, "Dragon Touch"], b, [f, k]], [/\b(ns-?\w{0,9}) b/i], [b, [h, "Insignia"], [f, k]], [/\b((nxa|next)-?\w{0,9}) b/i], [b, [h, "NextBook"], [f, k]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[h, "Voice"], b, [f, y]], [/\b(lvtel\-)?(v1[12]) b/i], [[h, "LvTel"], b, [f, y]], [/\b(ph-1) /i], [b, [h, "Essential"], [f, y]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [b, [h, "Envizen"], [f, k]], [/\b(trio[-\w\. ]+) b/i], [b, [h, "MachSpeed"], [f, k]], [/\btu_(1491) b/i], [b, [h, "Rotor"], [f, k]], [/(shield[\w ]+) b/i], [b, [h, "Nvidia"], [f, k]], [/(sprint) (\w+)/i], [h, b, [f, y]], [/(kin\.[onetw]{3})/i], [[b, /\./g, " "], [h, U], [f, y]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [b, [h, F], [f, k]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [b, [h, F], [f, y]], [/smart-tv.+(samsung)/i], [h, [f, x]], [/hbbtv.+maple;(\d+)/i], [[b, /^/, "SmartTV"], [h, D], [f, x]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[h, M], [f, x]], [/(apple) ?tv/i], [h, [b, I + " TV"], [f, x]], [/crkey/i], [[b, $ + "cast"], [h, N], [f, x]], [/droid.+aft(\w+)( bui|\))/i], [b, [h, L], [f, x]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [b, [h, z], [f, x]], [/(bravia[\w ]+)( bui|\))/i], [b, [h, B], [f, x]], [/(mitv-\w{5}) bui/i], [b, [h, H], [f, x]], [/Hbbtv.*(technisat) (.*);/i], [h, b, [f, x]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[h, Q], [b, Q], [f, x]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[f, x]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [h, b, [f, _]], [/droid.+; (shield) bui/i], [b, [h, "Nvidia"], [f, _]], [/(playstation [345portablevi]+)/i], [b, [h, B], [f, _]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [b, [h, U], [f, _]], [/((pebble))app/i], [h, b, [f, S]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [b, [h, I], [f, S]], [/droid.+; (glass) \d/i], [b, [h, N], [f, S]], [/droid.+; (wt63?0{2,3})\)/i], [b, [h, F], [f, S]], [/(quest( \d| pro)?)/i], [b, [h, K], [f, S]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [h, [f, j]], [/(aeobc)\b/i], [b, [h, L], [f, j]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [b, [f, y]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [b, [f, k]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[f, k]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[f, y]], [/(android[-\w\. ]{0,9});.+buil/i], [b, [h, "Generic"]]],
                    engine: [[/windows.+ edge\/([\w\.]+)/i], [g, [m, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [g, [m, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [m, g], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [g, m]],
                    os: [[/microsoft (windows) (vista|xp)/i], [m, g], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [m, [g, et, ei]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[g, et, ei], [m, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[g, /_/g, "."], [m, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[m, W], [g, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [g, m], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [m, g], [/\(bb(10);/i], [g, [m, E]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [g, [m, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [g, [m, A + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [g, [m, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [g, [m, "watchOS"]], [/crkey\/([\d\.]+)/i], [g, [m, $ + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[m, V], g], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [m, g], [/(sunos) ?([\w\.\d]*)/i], [[m, "Solaris"], g], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [m, g]]
                }
                  , er = function(e, t) {
                    if (typeof e === d && (t = e,
                    e = a),
                    !(this instanceof er))
                        return new er(e,t).getResult();
                    var i = typeof r !== u && r.navigator ? r.navigator : a
                      , n = e || (i && i.userAgent ? i.userAgent : s)
                      , o = i && i.userAgentData ? i.userAgentData : a
                      , l = t ? G(en, t) : en
                      , _ = i && i.userAgent == n;
                    return this.getBrowser = function() {
                        var e = {};
                        return e[m] = a,
                        e[g] = a,
                        ee.call(e, n, l.browser),
                        e[v] = X(e[g]),
                        _ && i && i.brave && typeof i.brave.isBrave == c && (e[m] = "Brave"),
                        e
                    }
                    ,
                    this.getCPU = function() {
                        var e = {};
                        return e[w] = a,
                        ee.call(e, n, l.cpu),
                        e
                    }
                    ,
                    this.getDevice = function() {
                        var e = {};
                        return e[h] = a,
                        e[b] = a,
                        e[f] = a,
                        ee.call(e, n, l.device),
                        _ && !e[f] && o && o.mobile && (e[f] = y),
                        _ && "Macintosh" == e[b] && i && typeof i.standalone !== u && i.maxTouchPoints && i.maxTouchPoints > 2 && (e[b] = "iPad",
                        e[f] = k),
                        e
                    }
                    ,
                    this.getEngine = function() {
                        var e = {};
                        return e[m] = a,
                        e[g] = a,
                        ee.call(e, n, l.engine),
                        e
                    }
                    ,
                    this.getOS = function() {
                        var e = {};
                        return e[m] = a,
                        e[g] = a,
                        ee.call(e, n, l.os),
                        _ && !e[m] && o && o.platform && "Unknown" != o.platform && (e[m] = o.platform.replace(/chrome os/i, V).replace(/macos/i, W)),
                        e
                    }
                    ,
                    this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }
                    ,
                    this.getUA = function() {
                        return n
                    }
                    ,
                    this.setUA = function(e) {
                        return n = typeof e === p && e.length > P ? Q(e, P) : e,
                        this
                    }
                    ,
                    this.setUA(n),
                    this
                };
                er.VERSION = o,
                er.BROWSER = J([m, g, v]),
                er.CPU = J([w]),
                er.DEVICE = J([b, h, f, _, y, x, k, S, j]),
                er.ENGINE = er.OS = J([m, g]),
                typeof t !== u ? ("object" !== u && e.exports && (t = e.exports = er),
                t.UAParser = er) : "function" === c && i.amdO ? a !== (n = (function() {
                    return er
                }
                ).call(t, i, t, e)) && (e.exports = n) : typeof r !== u && (r.UAParser = er);
                var ea = typeof r !== u && (r.jQuery || r.Zepto);
                if (ea && !ea.ua) {
                    var eo = new er;
                    ea.ua = eo.getResult(),
                    ea.ua.get = function() {
                        return eo.getUA()
                    }
                    ,
                    ea.ua.set = function(e) {
                        eo.setUA(e);
                        var t = eo.getResult();
                        for (var i in t)
                            ea.ua[i] = t[i]
                    }
                }
            }("object" == typeof window ? window : this)
        },
        9119: (e,t,i)=>{
            var n = {
                "./en/images/img_reward.png": 8136,
                "./pt/images/img_reward.png": 9821
            };
            function r(e) {
                return i(a(e))
            }
            function a(e) {
                if (!i.o(n, e)) {
                    var t = Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND",
                    t
                }
                return n[e]
            }
            r.keys = function() {
                return Object.keys(n)
            }
            ,
            r.resolve = a,
            e.exports = r,
            r.id = 9119
        }
        ,
        3395: (e,t,i)=>{
            var n = {
                "./ar.json": [1925, 175],
                "./bn.json": [4118, 366],
                "./de.json": [1873, 781],
                "./en.json": [8053, 972],
                "./es.json": [1406, 163],
                "./hi.json": [9249, 354],
                "./id.json": [3999, 961],
                "./ja.json": [7083, 152],
                "./ko.json": [3948, 7],
                "./ms.json": [1702, 198],
                "./pt.json": [5034, 314],
                "./ru.json": [8335, 123],
                "./th.json": [5074, 112],
                "./tr.json": [2584, 921],
                "./vi.json": [5759, 326],
                "./zh-tw.json": [8318, 135]
            };
            function r(e) {
                if (!i.o(n, e))
                    return Promise.resolve().then(()=>{
                        var t = Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND",
                        t
                    }
                    );
                var t = n[e]
                  , r = t[0];
                return i.e(t[1]).then(()=>i.t(r, 19))
            }
            r.keys = ()=>Object.keys(n),
            r.id = 3395,
            e.exports = r
        }
        ,
        9088: (e,t,i)=>{
            "use strict";
            e.exports = i.p + "roibest-assets/images/google_play_img-5581e7ee5269f365cce2.png"
        }
        ,
        63: (e,t,i)=>{
            "use strict";
            e.exports = i.p + "roibest-assets/images/ic_actived-65b2abba84a683a1d302.png"
        }
        ,
        812: (e,t,i)=>{
            "use strict";
            e.exports = i.p + "roibest-assets/images/ic_dun-175b2705681df4e189f2.png"
        }
        ,
        2535: (e,t,i)=>{
            "use strict";
            e.exports = i.p + "roibest-assets/images/ic_empty_star-f42e69f9f2699a2efbe9.png"
        }
        ,
        1315: (e,t,i)=>{
            "use strict";
            e.exports = i.p + "roibest-assets/images/ic_full_star-f625888302981fac22a1.png"
        }
        ,
        9183: (e,t,i)=>{
            "use strict";
            e.exports = i.p + "roibest-assets/images/ic_half_star-31c3e8b90b3a56ee176a.png"
        }
        ,
        4542: (e,t,i)=>{
            "use strict";
            e.exports = i.p + "roibest-assets/images/ic_more-3b710bfb3928d8397490.png"
        }
        ,
        9369: (e,t,i)=>{
            "use strict";
            e.exports = i.p + "roibest-assets/images/ic_phone-7de36d2d9891b9ea7367.png"
        }
        ,
        8041: (e,t,i)=>{
            "use strict";
            e.exports = i.p + "roibest-assets/images/ic_raid_install-c071afe5557f00257f13.png"
        }
        ,
        461: (e,t,i)=>{
            "use strict";
            e.exports = i.p + "roibest-assets/images/ic_tablet-398a96a32c0c16db8558.png"
        }
        ,
        6369: (e,t,i)=>{
            "use strict";
            e.exports = i.p + "roibest-assets/images/ic_tag-132e314a1fc198d5b943.png"
        }
        ,
        2589: (e,t,i)=>{
            "use strict";
            e.exports = i.p + "roibest-assets/images/ic_actived-ff48011a85bcb75bc934.png"
        }
        ,
        2593: (e,t,i)=>{
            "use strict";
            e.exports = i.p + "roibest-assets/images/ic_full_star-49a0f4841cc9a5253f5d.png"
        }
        ,
        8925: (e,t,i)=>{
            "use strict";
            e.exports = i.p + "roibest-assets/images/ic_half_star-c696a62ed3f0ae00ebc4.png"
        }
        ,
        8136: (e,t,i)=>{
            "use strict";
            e.exports = i.p + "roibest-assets/images/img_reward-18bc0c7471777e668be9.png"
        }
        ,
        9821: (e,t,i)=>{
            "use strict";
            e.exports = i.p + "roibest-assets/images/img_reward-127b122eed0249e195ad.png"
        }
    }
      , __webpack_module_cache__ = {};
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t)
            return t.exports;
        var i = __webpack_module_cache__[e] = {
            exports: {}
        };
        return __webpack_modules__[e].call(i.exports, i, i.exports, __webpack_require__),
        i.exports
    }
    __webpack_require__.m = __webpack_modules__,
    (()=>{
        __webpack_require__.amdO = {}
    }
    )(),
    (()=>{
        var e, t = Object.getPrototypeOf ? e=>Object.getPrototypeOf(e) : e=>e.__proto__;
        __webpack_require__.t = function(i, n) {
            if (1 & n && (i = this(i)),
            8 & n || "object" == typeof i && i && (4 & n && i.__esModule || 16 & n && "function" == typeof i.then))
                return i;
            var r = Object.create(null);
            __webpack_require__.r(r);
            var a = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var o = 2 & n && i; "object" == typeof o && !~e.indexOf(o); o = t(o))
                Object.getOwnPropertyNames(o).forEach(e=>a[e] = ()=>i[e]);
            return a.default = ()=>i,
            __webpack_require__.d(r, a),
            r
        }
    }
    )(),
    (()=>{
        __webpack_require__.d = (e,t)=>{
            for (var i in t)
                __webpack_require__.o(t, i) && !__webpack_require__.o(e, i) && Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
        }
    }
    )(),
    (()=>{
        __webpack_require__.f = {},
        __webpack_require__.e = e=>Promise.all(Object.keys(__webpack_require__.f).reduce((t,i)=>(__webpack_require__.f[i](e, t),
        t), []))
    }
    )(),
    (()=>{
        __webpack_require__.u = e=>"roibest-assets/js/" + ({
            7: "locale8",
            112: "locale12",
            123: "locale11",
            135: "locale15",
            152: "locale7",
            163: "locale4",
            175: "locale0",
            198: "locale9",
            314: "locale10",
            326: "locale14",
            354: "locale5",
            366: "locale1",
            781: "locale2",
            921: "locale13",
            961: "locale6",
            972: "locale3"
        })[e] + "-" + ({
            7: "84bb851d1fcac4994338",
            112: "daf1ed39d4ecb1de05e5",
            123: "9d6d27b48e488bb02522",
            135: "fc95ca8486c211749d1d",
            152: "aa4e0e46f2a662655b5b",
            163: "b38000b5ccda25008b69",
            175: "cfdc49ec69c57c789c98",
            198: "b171156e21ee0f590b79",
            314: "fb72eda42767c3f77d3a",
            326: "2aaff1a72da46b5f0284",
            354: "f8837bfdb28f23d63fb1",
            366: "2cb98aad8309b7f65dfd",
            781: "5f91f73cd2fdb884dc6e",
            921: "87ec7a10914922ba98a0",
            961: "3822bda54df2b2138708",
            972: "71c41f541b162fd88354"
        })[e] + ".js"
    }
    )(),
    (()=>{
        __webpack_require__.miniCssF = e=>{}
    }
    )(),
    (()=>{
        __webpack_require__.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t)
    }
    )(),
    (()=>{
        var e = {}
          , t = "rollup-app:";
        __webpack_require__.l = (i,n,r,a)=>{
            if (e[i]) {
                e[i].push(n);
                return
            }
            if (void 0 !== r)
                for (var o, s, l = document.getElementsByTagName("script"), c = 0; c < l.length; c++) {
                    var u = l[c];
                    if (u.getAttribute("src") == i || u.getAttribute("data-webpack") == t + r) {
                        o = u;
                        break
                    }
                }
            o || (s = !0,
            (o = document.createElement("script")).charset = "utf-8",
            o.timeout = 120,
            __webpack_require__.nc && o.setAttribute("nonce", __webpack_require__.nc),
            o.setAttribute("data-webpack", t + r),
            o.src = i),
            e[i] = [n];
            var d = (t,n)=>{
                o.onerror = o.onload = null,
                clearTimeout(p);
                var r = e[i];
                if (delete e[i],
                o.parentNode && o.parentNode.removeChild(o),
                r && r.forEach(e=>e(n)),
                t)
                    return t(n)
            }
              , p = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: o
            }), 12e4);
            o.onerror = d.bind(null, o.onerror),
            o.onload = d.bind(null, o.onload),
            s && document.head.appendChild(o)
        }
    }
    )(),
    (()=>{
        __webpack_require__.r = e=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    }
    )(),
    (()=>{
        __webpack_require__.p = "/"
    }
    )(),
    (()=>{
        var e = {
            604: 0
        };
        __webpack_require__.f.j = (t,i)=>{
            var n = __webpack_require__.o(e, t) ? e[t] : void 0;
            if (0 !== n) {
                if (n)
                    i.push(n[2]);
                else {
                    var r = new Promise((i,r)=>n = e[t] = [i, r]);
                    i.push(n[2] = r);
                    var a = __webpack_require__.p + __webpack_require__.u(t)
                      , o = Error()
                      , s = i=>{
                        if (__webpack_require__.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0),
                        n)) {
                            var r = i && ("load" === i.type ? "missing" : i.type)
                              , a = i && i.target && i.target.src;
                            o.message = "Loading chunk " + t + " failed.\n(" + r + ": " + a + ")",
                            o.name = "ChunkLoadError",
                            o.type = r,
                            o.request = a,
                            n[1](o)
                        }
                    }
                    ;
                    __webpack_require__.l(a, s, "chunk-" + t, t)
                }
            }
        }
        ;
        var t = (t,i)=>{
            var n, r, [a,o,s] = i, l = 0;
            if (a.some(t=>0 !== e[t])) {
                for (n in o)
                    __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                s && s(__webpack_require__)
            }
            for (t && t(i); l < a.length; l++)
                r = a[l],
                __webpack_require__.o(e, r) && e[r] && e[r][0](),
                e[r] = 0
        }
          , i = self.webpackChunkrollup_app = self.webpackChunkrollup_app || [];
        i.forEach(t.bind(null, 0)),
        i.push = t.bind(null, i.push.bind(i))
    }
    )();
    var __webpack_exports__ = {};
    (()=>{
        "use strict";
        var e = __webpack_require__(574)
          , t = null;
        function i() {
            return t || (t = new e.UAParser),
            t
        }
        function n() {
            var e, t;
            return (null === (t = i().getOS()) || void 0 === t ? void 0 : null === (e = t.name) || void 0 === e ? void 0 : e.toLowerCase()) === "ios"
        }
        function r() {
            var e, t = (null === (e = i().getBrowser()) || void 0 === e ? void 0 : e.name) || "";
            return (null == t ? void 0 : t.toLowerCase()) === "chrome"
        }
        function a() {
            return "1" === new URLSearchParams(window.location.search).get("is_open_chrome")
        }
        function o(e, t, i, n, r, a, o) {
            try {
                var s = e[a](o)
                  , l = s.value
            } catch (e) {
                i(e);
                return
            }
            s.done ? t(l) : Promise.resolve(l).then(n, r)
        }
        function s(e) {
            return function() {
                var t = this
                  , i = arguments;
                return new Promise(function(n, r) {
                    var a = e.apply(t, i);
                    function s(e) {
                        o(a, n, r, s, l, "next", e)
                    }
                    function l(e) {
                        o(a, n, r, s, l, "throw", e)
                    }
                    s(void 0)
                }
                )
            }
        }
        function l(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i,
            e
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable
                }))),
                n.forEach(function(t) {
                    l(e, t, i[t])
                })
            }
            return e
        }
        function u(e, t) {
            if (null == e)
                return {};
            var i, n, r = d(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    i = a[n],
                    !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i])
            }
            return r
        }
        function d(e, t) {
            if (null == e)
                return {};
            var i, n, r = {}, a = Object.keys(e);
            for (n = 0; n < a.length; n++)
                i = a[n],
                t.indexOf(i) >= 0 || (r[i] = e[i]);
            return r
        }
        function p(e, t) {
            var i, n, r, a, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function s(e) {
                return function(t) {
                    return l([e, t])
                }
            }
            function l(a) {
                if (i)
                    throw TypeError("Generator is already executing.");
                for (; o; )
                    try {
                        if (i = 1,
                        n && (r = 2 & a[0] ? n.return : a[0] ? n.throw || ((r = n.return) && r.call(n),
                        0) : n.next) && !(r = r.call(n, a[1])).done)
                            return r;
                        switch (n = 0,
                        r && (a = [2 & a[0], r.value]),
                        a[0]) {
                        case 0:
                        case 1:
                            r = a;
                            break;
                        case 4:
                            return o.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            o.label++,
                            n = a[1],
                            a = [0];
                            continue;
                        case 7:
                            a = o.ops.pop(),
                            o.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                o = 0;
                                continue
                            }
                            if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                o.label = a[1];
                                break
                            }
                            if (6 === a[0] && o.label < r[1]) {
                                o.label = r[1],
                                r = a;
                                break
                            }
                            if (r && o.label < r[2]) {
                                o.label = r[2],
                                o.ops.push(a);
                                break
                            }
                            r[2] && o.ops.pop(),
                            o.trys.pop();
                            continue
                        }
                        a = t.call(e, o)
                    } catch (e) {
                        a = [6, e],
                        n = 0
                    } finally {
                        i = r = 0
                    }
                if (5 & a[0])
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
        }
        function v() {
            return new Promise(e=>{
                if (window.__rb_config && window.__rb_config.feishuAlarmRobotHookUrl) {
                    var t;
                    e(null !== (t = window.__rb_config.feishuAlarmRobotHookUrl) && void 0 !== t ? t : "")
                } else
                    fetch("https://static.roibest.com/assets/roibest/config.json").then(e=>{
                        try {
                            return e.json()
                        } catch (e) {
                            return Promise.resolve({})
                        }
                    }
                    ).then(t=>{
                        try {
                            var i, n, r;
                            window.__rb_config = t,
                            e(null !== (r = null === (n = window) || void 0 === n ? void 0 : null === (i = n.__rb_config) || void 0 === i ? void 0 : i.feishuAlarmRobotHookUrl) && void 0 !== r ? r : "")
                        } catch (t) {
                            e("")
                        }
                    }
                    ).catch(()=>e(""))
            }
            )
        }
        function b(e, t, i) {
            return m.apply(this, arguments)
        }
        function m() {
            return (m = s(function(e, t, i) {
                var n;
                return p(this, function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, v()];
                    case 1:
                        (n = r.sent()) && fetch(n, {
                            method: "post",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                msg_type: "text",
                                content: {
                                    text: `请求结果异常 <at user_id="all">所有人</at> \r
roibest c端 \r
页面地址: ${location.href} \r
请求地址: ${n} \r
请求参数: ${null != t ? t : ""} \r
code: ${e} \r
message: ${i}`
                                }
                            })
                        }),
                        r.label = 2;
                    case 2:
                        return [2]
                    }
                })
            })).apply(this, arguments)
        }
        function f(e, t) {
            var i = null != t ? t : {}
              , n = i.data
              , r = i.params
              , a = void 0 === r ? {} : r
              , o = i.timeout
              , s = void 0 === o ? 1e4 : o
              , l = u(i, ["data", "params", "timeout"])
              , d = new AbortController
              , p = setTimeout(()=>d.abort(), s)
              , v = [];
            try {
                l.body = JSON.stringify(n)
            } catch (e) {}
            for (var m in a)
                v.push(`${m}=${a[m]}`);
            return v.length > 0 && (e += `?${v.join("&")}`),
            l.headers = c({
                "Content-Type": "application/json"
            }, l.headers),
            new Promise((t,i)=>{
                fetch(e, c({
                    signal: d.signal
                }, l)).then(e=>(200 !== e.status && e.text().then(t=>{
                    b(e.status, l.body, t)
                }
                ),
                e.json())).then(e=>{
                    t(e)
                }
                ).catch(e=>i(e)).finally(()=>{
                    clearTimeout(p)
                }
                )
            }
            )
        }
        function h() {
            return window.__rb_pwa_api_url || "https://pwa-backend-prod.roibest.com"
        }
        function g(e, t) {
            return w.apply(this, arguments)
        }
        function w() {
            return (w = s(function(e, t) {
                return p(this, function(i) {
                    return [2, f(h() + e, Object.assign({
                        method: "get",
                        timeout: 1e4,
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }, t))]
                })
            })).apply(this, arguments)
        }
        function _(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i,
            e
        }
        function y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable
                }))),
                n.forEach(function(t) {
                    _(e, t, i[t])
                })
            }
            return e
        }
        class k {
            setItem(e, t) {
                this.data.set(e, JSON.stringify(t))
            }
            getItem(e) {
                try {
                    var t = this.data.get(e);
                    if (t)
                        return JSON.parse(t);
                    return null
                } catch (e) {
                    return null
                }
            }
            removeItem(e) {
                this.data.delete(e)
            }
            constructor() {
                _(this, "data", new Map)
            }
        }
        class x {
            setItem(e, t) {
                this.storage.setItem(this.prefix + e, JSON.stringify(t))
            }
            getItem(e) {
                try {
                    var t = this.storage.getItem(this.prefix + e);
                    if (t)
                        return JSON.parse(t);
                    return null
                } catch (e) {
                    return null
                }
            }
            removeItem(e) {
                this.storage.removeItem(this.prefix + e)
            }
            constructor(e) {
                var t = void 0 === e ? localStorage : e;
                _(this, "prefix", "__rb_"),
                _(this, "storage", void 0),
                this.storage = null != t ? t : new k
            }
        }
        var S = new x(localStorage)
          , j = (new x(sessionStorage),
        (e,t)=>{
            var i = `${e}_uuid`;
            return S.setItem(i, t)
        }
        )
          , P = e=>{
            var t, i = `${e}_uuid`;
            return null !== (t = S.getItem(i)) && void 0 !== t ? t : ""
        }
          , L = (e,t)=>{
            var i = `${e}_link_id`;
            return S.setItem(i, t)
        }
          , I = e=>{
            var t, i = `${e}_link_id`;
            return null !== (t = S.getItem(i)) && void 0 !== t ? t : ""
        }
          , O = (e,t)=>{
            var i = `${e}_invite_code`;
            return S.setItem(i, t)
        }
          , E = e=>{
            var t, i = `${e}_invite_code`;
            return null !== (t = S.getItem(i)) && void 0 !== t ? t : ""
        }
          , T = (e,t)=>{
            var i = `${e}_data`
              , n = $(e);
            try {
                S.setItem(i, JSON.stringify(y({}, n, t)))
            } catch (e) {
                console.error(e)
            }
        }
          , $ = e=>{
            var t = `${e}_data`;
            try {
                return JSON.parse(S.getItem(t)) || {}
            } catch (e) {
                return {}
            }
        }
          , A = (e,t)=>{
            var i = `${e}_pwa_install_flag`;
            return S.setItem(i, t)
        }
          , N = e=>{
            var t, i = `${e}_pwa_install_flag`;
            return null !== (t = S.getItem(i)) && void 0 !== t ? t : ""
        }
          , C = (e,t)=>{
            var i = `${e}_pwa_open_flag`;
            return S.setItem(i, t)
        }
          , M = e=>{
            if (window.location.search) {
                var t = new URLSearchParams(window.location.search)
                  , i = new URLSearchParams(U(e));
                t.has("uuid") || t.set("uuid", P(e) || i.get("uuid") || ""),
                t.has("link_id") || t.set("link_id", I(e) || i.get("link_id") || ""),
                t.has("channel_id") || t.set("channel_id", (null == i ? void 0 : i.get("channel_id")) || ""),
                t.has("invite_code") || t.set("invite_code", E(e) || i.get("invite_code") || ""),
                t.has("promote_url_id") || t.set("promote_url_id", (null == i ? void 0 : i.get("promote_url_id")) || "");
                var n = `${e}_params`;
                S.setItem(n, "?" + t.toString())
            }
        }
          , U = e=>{
            var t = `${e}_params`;
            return S.getItem(t)
        }
          , R = ()=>{
            var e = D()
              , t = ei(10)
              , i = new URL(location.href);
            i.searchParams.set("rb_lid", t),
            window.history.replaceState("", "", i),
            q([...new Set(e).add(t)])
        }
          , q = e=>{
            var t = "lids";
            return S.setItem(t, e.slice(-10))
        }
          , D = ()=>{
            try {
                var e = "lids";
                return S.getItem(e) || []
            } catch (e) {
                return []
            }
        }
          , z = 0
          , B = 1
          , H = 12
          , F = 10;
        function K(e) {
            for (var t = "=".repeat((4 - e.length % 4) % 4), i = (e + t).replace(/\-/g, "+").replace(/_/g, "/"), n = window.atob(i), r = new Uint8Array(n.length), a = 0; a < n.length; ++a)
                r[a] = n.charCodeAt(a);
            return r
        }
        function V() {
            var e = navigator.userAgent.toLowerCase();
            return /windows/.test(e) ? "windows pc" : /iphone|ipod/.test(e) && /mobile/.test(e) ? "iphone" : /ipad/.test(e) && /mobile/.test(e) ? "ipad" : /android/.test(e) && /mobile/.test(e) ? "android" : /linux/.test(e) ? "linux pc" : /mac/.test(e) ? "mac" : "other"
        }
        function W(e) {
            "complete" === document.readyState ? e() : window.addEventListener("load", ()=>e())
        }
        function G(e) {
            var t;
            (null === (t = document) || void 0 === t ? void 0 : t.body) ? e() : W(e)
        }
        function J(e) {
            var t = new URL(e);
            t.searchParams.set("is_open_chrome", "1");
            try {
                location.href = `intent://${t.href.replace(/(https|http):\/\//, "")}#Intent;scheme=https;action=android.intent.action.VIEW;component=com.android.chrome;package=com.android.chrome;end`
            } catch (e) {
                console.error(e)
            }
        }
        function Y(e) {
            try {
                location.href = `intent://${e.replace(/(https|http):\/\//, "")}#Intent;scheme=https;action=android.intent.action.VIEW;component=com.android.chrome;end`
            } catch (e) {
                console.error(e)
            }
        }
        function Z(e) {
            var t = Date.now()
              , i = "rb_"
              , n = i + e
              , r = new URL(location.href);
            r.searchParams.set(n, "1"),
            r.searchParams.set(i + "time", String(t)),
            window.history.pushState("", "", r)
        }
        var X = (e,t)=>{
            var i = void 0 === e ? ()=>{}
            : e
              , n = void 0 !== t && t
              , r = []
              , a = history.length
              , o = 0
              , s = !0
              , l = null
              , c = e=>{
                "function" == typeof l && (l(e),
                l = null)
            }
              , u = ()=>{
                Z("page"),
                a = history.length,
                o = 0,
                r.push(a)
            }
              , d = ()=>{
                var e = history.length;
                r.includes(e - o) ? n ? (i(),
                u()) : s && (s = !1,
                i()) : e === a ? o++ : (a = e,
                o = 0)
            }
              , p = ()=>{
                window.addEventListener("click", c, !0),
                window.addEventListener("popstate", d, !0)
            }
            ;
            u(),
            l = ()=>u(),
            p()
        }
          , Q = e=>`https://static.roibest.com${e}`;
        function ee(e) {
            return e >= 1e6 ? {
                value: (e / 1e6).toFixed(0),
                unit: "M"
            } : e >= 1e3 ? {
                value: (e / 1e3).toFixed(0),
                unit: "K"
            } : {
                value: e.toString(),
                unit: ""
            }
        }
        function et(e, t) {
            try {
                var i = h()
                  , n = new URL(i + "/rus/Il");
                n.searchParams.set("uuid", e.uuid),
                n.searchParams.set("unionid", e.unionid);
                var r = document.createElement("iframe");
                r.id = "rbUnionidIFrame",
                r.style.width = "0",
                r.style.height = "0",
                r.style.opacity = "0",
                r.name = "rbUnionidIFrame",
                r.src = n.href,
                r.addEventListener("load", e=>{
                    null == t || t(e)
                }
                ),
                document.body.appendChild(r)
            } catch (e) {
                console.error(e)
            }
        }
        function ei(e) {
            for (var t = void 0 === e ? 10 : e, i = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = n.length, a = 0; a < t; a++)
                i += n.charAt(Math.floor(Math.random() * r));
            return i
        }
        function en() {
            if (0 === z || !["zh", "zh-CN"].includes(navigator.language))
                return !0;
            var e, t = new URLSearchParams(location.search), i = D();
            return !t.has("rb_lid") || i.includes(null !== (e = t.get("rb_lid")) && void 0 !== e ? e : "")
        }
        function er() {
            var e, t, i = document.documentElement;
            i.requestFullscreen ? i.requestFullscreen() : (null == i ? void 0 : i.webkitRequestFullscreen) ? null == i || null === (e = i.webkitRequestFullscreen) || void 0 === e || e.call(i) : (null == i ? void 0 : i.msRequestFullscreen) && (null == i || null === (t = i.msRequestFullscreen) || void 0 === t || t.call(i)),
            ea()
        }
        function ea() {
            var e = screen;
            e.lockOrientation ? e.lockOrientation("portrait-primary") : e.mozLockOrientation ? e.mozLockOrientation("portrait-primary") : e.msLockOrientation ? e.msLockOrientation("portrait-primary") : e.orientation && e.orientation.lock && e.orientation.lock("portrait-primary")
        }
        function eo(e) {
            return g("/create/uuid", {
                method: "get",
                params: e
            })
        }
        function es(e) {
            return g("/create/link", {
                method: "post",
                data: e
            })
        }
        function el(e) {
            switch (e.channelId) {
            case "4":
            case "20":
            case "21":
            case "22":
            case "23":
            case "24":
                return ec(e);
            case "5":
                return eu(e);
            case "9":
                return ed(e);
            default:
                return Promise.reject("Invalid channel number")
            }
        }
        function ec(e) {
            return g("/report/fb/event", {
                method: "post",
                data: e
            })
        }
        function eu(e) {
            return g("/report/tiktok/event", {
                method: "post",
                data: e
            })
        }
        function ed(e) {
            return g("/report/kwai/event", {
                method: "post",
                data: e
            })
        }
        function ep(e, t) {
            var i, n, r = void 0 === t ? {} : t, a = window.__rb_pwa_api_url || "https://api.roibest.com", o = $(e.project_id), s = new URL(`${a}/pixgif/r9.gif`);
            for (var l in e)
                s.searchParams.set(l, null !== (i = e[l]) && void 0 !== i ? i : "");
            r || (r = {}),
            o.taskId && (r.taskId = o.taskId);
            try {
                s.searchParams.set("extend", window.btoa(JSON.stringify(r)))
            } catch (e) {}
            return s.searchParams.set("source", null !== (n = o.source) && void 0 !== n ? n : ""),
            s.searchParams.set("language", navigator.language),
            s.searchParams.set("timezone", "UTC+" + (0 - new Date().getTimezoneOffset() / 60)),
            s.searchParams.set("report_url", window.btoa(location.href)),
            s.searchParams.set("base64_params", "report_url,extend"),
            fetch(s.href, {
                method: "HEAD",
                mode: "no-cors",
                headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache"
                },
                keepalive: !0
            })
        }
        function ev(e) {
            var t, i, n, r = JSON.parse(JSON.stringify(e.subscription));
            return g("/push/subscribe", {
                method: "post",
                data: {
                    link_id: e.link_id,
                    domain: null !== (n = null === (i = window) || void 0 === i ? void 0 : null === (t = i.location) || void 0 === t ? void 0 : t.origin) && void 0 !== n ? n : "",
                    push_subscription: {
                        endpoint: r.endpoint,
                        expirationTime: r.expirationTime,
                        keys: r.keys
                    }
                }
            })
        }
        function eb(e) {
            return g("/event/isInstall", {
                method: "post",
                data: e
            })
        }
        function em(e) {
            return g("/get/promoteUrlInfo", {
                method: "post",
                data: e
            })
        }
        function ef(e) {
            return g("/app/set", {
                method: "get",
                params: e
            })
        }
        var eh = __webpack_require__(608)
          , eg = __webpack_require__(3112)
          , ew = e=>2;
        function e_(e) {
            var t = new URL(location.href);
            t.searchParams.set("rb_to", "__roibest_scan"),
            t.pathname = `/${e}/__roibest_startup.html`,
            window.open(t.href, "_blank")
        }
        function ey() {
            location.replace("./index.html")
        }
        function ek(e) {
            try {
                var t = new URL(`${location.origin}/${e}/index.html`);
                t.searchParams.set("rb_preload", "1");
                var i = document.getElementById("preloadIFrame");
                i || ((i = document.createElement("iframe")).id = "preloadIFrame",
                i.style.width = "0",
                i.style.height = "0",
                i.style.opacity = "0",
                i.name = "preloadIFrame",
                document.body.appendChild(i)),
                i.src = t.href
            } catch (e) {
                console.error(e)
            }
        }
        function ex() {
            return new Promise(e=>{
                fetch("./dns.json").then(e=>{
                    try {
                        return e.json()
                    } catch (e) {
                        return {}
                    }
                }
                ).then(t=>{
                    try {
                        new URL(null == t ? void 0 : t.origin),
                        window.__rb_pwa_api_url = null == t ? void 0 : t.origin,
                        e(t)
                    } catch (t) {
                        e("")
                    }
                }
                ).catch(()=>e(""))
            }
            )
        }
        function eS() {
            return "9" !== (0,
            eh.KA)("channel_id")
        }
        function ej() {
            return "9" !== (0,
            eh.KA)("channel_id")
        }
        function eP() {
            var e, t = (0,
            eh.KA)("appid"), i = null === (e = location.pathname.split("/")) || void 0 === e ? void 0 : e[1];
            return i && t && i === t
        }
        function eL(e, t) {
            var i = void 0 === t ? [] : t;
            return new Promise((t,n)=>{
                var r, a = e.project_id, o = $(a), s = null == o ? void 0 : o.promoteUrlInfo, l = null !== (r = null == o ? void 0 : o.promoteUrlInfoExpires) && void 0 !== r ? r : 0, c = ()=>!!i.length && !!s && !i.every(e=>!!s[e]);
                l > Date.now() && s && !c() ? t(s) : em(e).then(e=>{
                    var i, n, r, o, s = null !== (n = null == e ? void 0 : null === (i = e.data) || void 0 === i ? void 0 : i.data) && void 0 !== n ? n : {}, l = {
                        package_addr: null !== (r = null == s ? void 0 : s.package_addr) && void 0 !== r ? r : "",
                        ios_url: null !== (o = null == s ? void 0 : s.ios_url) && void 0 !== o ? o : ""
                    };
                    T(a, {
                        promoteUrlInfo: l,
                        promoteUrlInfoExpires: Date.now() + 3e5
                    }),
                    t(l)
                }
                ).catch(n)
            }
            )
        }
        function eI(e) {
            return new Promise((t,i)=>{
                eL(e, ["ios_url"]).then(e=>{
                    var i = null == e ? void 0 : e.ios_url;
                    i ? location.replace(i) : ey(),
                    t(e)
                }
                ).catch(e=>{
                    ey(),
                    i(e)
                }
                )
            }
            )
        }
        function eO() {
            return !1 !== (0,
            eh.KA)("agree_agreement")
        }
        var eE = 11001
          , eT = 11002
          , e$ = 11004
          , eA = 11005
          , eN = 11006
          , eC = 21030
          , eM = 21031
          , eU = 21001
          , eR = 21002
          , eq = 21015
          , eD = 21011
          , ez = 21016
          , eB = 21012
          , eH = 21017
          , eF = 21023
          , eK = 21008
          , eV = 21003
          , eW = 21018
          , eG = 21004
          , eJ = 21024
          , eY = 21025
          , eZ = 21026
          , eX = 21027;
        function eQ(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i,
            e
        }
        class e0 {
            reportEvent(e) {
                ep({
                    uuid: this.options.uuid,
                    channel_id: this.options.channelId,
                    invite_code: this.options.inviteCode,
                    event_code: e,
                    link_id: this.options.linkId,
                    project_id: this.options.appid,
                    version: this.options.eventVersion,
                    package: this.options.appid,
                    promote_url_id: this.options.promoteUrlId
                })
            }
            registerSw() {
                if (!this.options.swUrl)
                    throw Error("swUrl is not set");
                this.setRegisterState("loading"),
                "serviceWorker"in navigator && "PushManager"in window ? navigator.serviceWorker.register(this.options.swUrl).then(e=>{
                    e.update();
                    var t = null;
                    this.serviceWorkerRegistration = e,
                    e.installing ? (t = e.installing,
                    this.setRegisterState("installing")) : e.waiting ? (t = e.waiting,
                    this.setRegisterState("waiting")) : e.active && (t = e.active,
                    this.setRegisterState("active"),
                    this.getSubscription()),
                    t && t.addEventListener("statechange", e=>{
                        var t;
                        switch (null === (t = e.target) || void 0 === t ? void 0 : t.state) {
                        case "installing":
                        case "installed":
                            this.setRegisterState("installing");
                            break;
                        case "activating":
                        case "activated":
                            this.setRegisterState("active"),
                            this.getSubscription()
                        }
                    }
                    )
                }
                ).catch(e=>{
                    console.error(e),
                    this.setRegisterState("error")
                }
                ) : (this.setRegisterState("error"),
                console.warn("Push messaging is not supported"))
            }
            subscribeUser() {
                return "active" === this.registerState && this.serviceWorkerRegistration && !this.subscribeDisable ? (this.subscribeDisable = !0,
                new Promise((e,t)=>{
                    this.reportEvent(eJ);
                    var i, n = K(this.applicationServerPublicKey);
                    null === (i = this.serviceWorkerRegistration) || void 0 === i || i.pushManager.subscribe({
                        userVisibleOnly: !0,
                        applicationServerKey: n
                    }).then(t=>{
                        this.pushSubscription(t),
                        this.setSubscription(t),
                        this.reportEvent(eY),
                        e(t)
                    }
                    ).catch(e=>{
                        "denied" === Notification.permission ? this.reportEvent(eZ) : "default" === Notification.permission && this.reportEvent(eX),
                        console.error(e.message),
                        this.setSubscription(null),
                        t(e)
                    }
                    ).finally(()=>{
                        this.subscribeDisable = !1
                    }
                    )
                }
                )) : new Promise((e,t)=>{
                    this.activeAfterFns.push(()=>{
                        this.subscribeUser().then(e).catch(t)
                    }
                    )
                }
                )
            }
            unsubscribeUser() {
                return "active" === this.registerState && this.serviceWorkerRegistration && !this.subscribeDisable ? new Promise((e,t)=>{
                    var i;
                    this.subscribeDisable = !0,
                    null === (i = this.serviceWorkerRegistration) || void 0 === i || i.pushManager.getSubscription().then(i=>{
                        i ? i.unsubscribe().then(()=>{
                            this.setSubscription(null),
                            e({})
                        }
                        ).catch(e=>{
                            t(e)
                        }
                        ).finally(()=>{
                            this.subscribeDisable = !1
                        }
                        ) : (this.setSubscription(null),
                        this.subscribeDisable = !1)
                    }
                    ).catch(e=>{
                        t(e),
                        this.subscribeDisable = !1
                    }
                    )
                }
                ) : Promise.reject("registerState is not success")
            }
            postMessage(e, t) {
                if ("serviceWorker"in navigator && "active" === this.registerState) {
                    var i, n;
                    null === (n = this.serviceWorkerRegistration) || void 0 === n || null === (i = n.active) || void 0 === i || i.postMessage({
                        type: e,
                        data: t
                    })
                } else
                    this.activeAfterFns.push(()=>{
                        var i, n;
                        null === (n = this.serviceWorkerRegistration) || void 0 === n || null === (i = n.active) || void 0 === i || i.postMessage({
                            type: e,
                            data: t
                        })
                    }
                    )
            }
            setRegisterState(e) {
                if (this.registerState !== e) {
                    var t, i;
                    this.registerState = e,
                    null === (t = (i = this.options).changeRegisterState) || void 0 === t || t.call(i, e)
                }
                "active" === e && (this.activeAfterFns.forEach((e,t)=>{
                    e && e(),
                    this.activeAfterFns[t] = null
                }
                ),
                this.activeAfterFns = [],
                this.postMessage("SET_SM_CLIENT_DATA", {
                    uuid: this.options.uuid,
                    linkId: this.options.linkId,
                    appid: this.options.appid,
                    channelId: this.options.channelId,
                    inviteCode: this.options.inviteCode,
                    promoteUrlId: this.options.promoteUrlId,
                    eventVersion: this.options.eventVersion
                }))
            }
            setSubscription(e) {
                var t, i;
                this.subscription = e,
                null === (t = (i = this.options).changeSubscription) || void 0 === t || t.call(i, e)
            }
            pushSubscription(e) {
                if (!e)
                    throw Error("user unsubscription");
                return ev({
                    link_id: this.options.linkId,
                    subscription: e
                })
            }
            getSubscription() {
                var e;
                null === (e = this.serviceWorkerRegistration) || void 0 === e || e.pushManager.getSubscription().then(e=>{
                    this.setSubscription(e)
                }
                )
            }
            constructor(e) {
                eQ(this, "applicationServerPublicKey", "BLbC9j6ilTHIktE0uqbuV_YcgutH1QJULiwgSkucioMnxmGhB6ZYoGsskwVFzPa1uuDbe48lIXD1gass1r8RV0I"),
                eQ(this, "serviceWorkerRegistration", void 0),
                eQ(this, "registerState", void 0),
                eQ(this, "subscription", void 0),
                eQ(this, "subscribeDisable", !1),
                eQ(this, "activeAfterFns", []),
                eQ(this, "options", void 0),
                this.options = Object.assign({
                    uuid: "",
                    linkId: "",
                    appid: "",
                    channelId: "",
                    inviteCode: "",
                    promoteUrlId: "",
                    eventVersion: 1,
                    swUrl: "/sw.js",
                    changeRegisterState: ()=>{}
                    ,
                    changeSubscription: ()=>{}
                }, e),
                this.registerSw()
            }
        }
        let e1 = e0;
        var e2 = {};
        function e3() {
            return new Promise((e,t)=>{
                var i = e5();
                e8(i) && document.documentElement.setAttribute("dir", "rtl"),
                __webpack_require__(3395)(`./${i}.json`).then(t=>{
                    e(e2 = t.default)
                }
                ).catch(t)
            }
            )
        }
        function e4() {
            return e2
        }
        function e6(e, t) {
            var i, n, r, a, o = e4();
            return o._package = e9(),
            null === (i = e.split(".")) || void 0 === i || i.forEach(e=>{
                r = r ? r[e] : o[e]
            }
            ),
            null !== (a = null == r ? void 0 : null === (n = r.toString()) || void 0 === n ? void 0 : n.replace(/\{([^}]+)\}/g, (e,i)=>{
                var n;
                return (null == t ? void 0 : null === (n = t[i]) || void 0 === n ? void 0 : n.toString()) || e
            }
            )) && void 0 !== a ? a : e
        }
        function e5() {
            var e, t = navigator.language.toLocaleLowerCase(), i = t.split("-")[0], n = Object.keys(null !== (e = (0,
            eh.KA)("language_json")) && void 0 !== e ? e : {}) || [];
            return n.includes(t) ? t : n.includes(i) ? i : n.includes("en") ? "en" : n[0]
        }
        function e9() {
            var e, t = e5();
            return (null !== (e = (0,
            eh.KA)("language_json")) && void 0 !== e ? e : {})[t] || {}
        }
        function e8(e) {
            return ["ar", "ar-*"].some(t=>e === t || e.startsWith(t + "-"))
        }
        function e7(e) {
            var t = e5();
            return ["en", "pt"].includes(t) || (t = "en"),
            __webpack_require__(9119)(`./${t}${e}`)
        }
        function te(e) {
            for (var t = "-_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = "", n = t.length, r = 0; r < e; r++)
                i += t.charAt(Math.floor(Math.random() * n));
            return i
        }
        function tt(e) {
            return Math.floor(Math.random() * e)
        }
        function ti() {
            var e = document.createElement("div");
            return e.className = "rb-key",
            e.textContent = te(16),
            e
        }
        function tn(e) {
            for (var t = document.body, i = t.childNodes.length, n = 0; n < e; n++) {
                var r = ti()
                  , a = tt(i + 1);
                a === i ? t.appendChild(r) : t.insertBefore(r, t.childNodes[a])
            }
        }
        function tr() {
            tn(5)
        }
        function ta(e, t, i, n, r, a, o) {
            try {
                var s = e[a](o)
                  , l = s.value
            } catch (e) {
                i(e);
                return
            }
            s.done ? t(l) : Promise.resolve(l).then(n, r)
        }
        function to(e) {
            return function() {
                var t = this
                  , i = arguments;
                return new Promise(function(n, r) {
                    var a = e.apply(t, i);
                    function o(e) {
                        ta(a, n, r, o, s, "next", e)
                    }
                    function s(e) {
                        ta(a, n, r, o, s, "throw", e)
                    }
                    o(void 0)
                }
                )
            }
        }
        function ts(e, t) {
            var i, n, r, a, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function s(e) {
                return function(t) {
                    return l([e, t])
                }
            }
            function l(a) {
                if (i)
                    throw TypeError("Generator is already executing.");
                for (; o; )
                    try {
                        if (i = 1,
                        n && (r = 2 & a[0] ? n.return : a[0] ? n.throw || ((r = n.return) && r.call(n),
                        0) : n.next) && !(r = r.call(n, a[1])).done)
                            return r;
                        switch (n = 0,
                        r && (a = [2 & a[0], r.value]),
                        a[0]) {
                        case 0:
                        case 1:
                            r = a;
                            break;
                        case 4:
                            return o.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            o.label++,
                            n = a[1],
                            a = [0];
                            continue;
                        case 7:
                            a = o.ops.pop(),
                            o.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                o = 0;
                                continue
                            }
                            if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                o.label = a[1];
                                break
                            }
                            if (6 === a[0] && o.label < r[1]) {
                                o.label = r[1],
                                r = a;
                                break
                            }
                            if (r && o.label < r[2]) {
                                o.label = r[2],
                                o.ops.push(a);
                                break
                            }
                            r[2] && o.ops.pop(),
                            o.trys.pop();
                            continue
                        }
                        a = t.call(e, o)
                    } catch (e) {
                        a = [6, e],
                        n = 0
                    } finally {
                        i = r = 0
                    }
                if (5 & a[0])
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
        }
        var tl = function() {
            var e = to(function() {
                var e, t, i;
                return ts(this, function(n) {
                    switch (n.label) {
                    case 0:
                        e = (0,
                        eh.KA)("appid"),
                        n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]),
                        [4, ef({
                            project_id: e
                        })];
                    case 2:
                        for (var r in i = null !== (t = n.sent().data) && void 0 !== t ? t : {})
                            (0,
                            eh.k3)(r, i[r]);
                        return [3, 4];
                    case 3:
                        return console.error(n.sent()),
                        [3, 4];
                    case 4:
                        return [2]
                    }
                })
            });
            return function() {
                return e.apply(this, arguments)
            }
        }();
        function tc(e) {
            return tu.apply(this, arguments)
        }
        function tu() {
            return (tu = to(function(e) {
                var t;
                return ts(this, function(i) {
                    switch (i.label) {
                    case 0:
                        if (!eP())
                            return [2, Promise.reject("error")];
                        window.addEventListener("beforeinstallprompt", e=>{
                            var t, i;
                            e.preventDefault(),
                            (0,
                            eh.k3)("installPromptEvent", e),
                            null === (i = window.__rb_event_listener) || void 0 === i || null === (t = i.beforeInstallPrompt) || void 0 === t || t.call(i, e)
                        }
                        ),
                        (0,
                        eg.Yh)(),
                        (0,
                        eg.vA)(),
                        t = {},
                        i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]),
                        [4, Promise.allSettled([e3(), ex()])];
                    case 2:
                        return i.sent(),
                        [3, 4];
                    case 3:
                        return console.error(i.sent()),
                        [3, 4];
                    case 4:
                        return i.trys.push([4, 6, , 7]),
                        [4, tl()];
                    case 5:
                        return i.sent(),
                        [3, 7];
                    case 6:
                        return console.error(i.sent()),
                        [3, 7];
                    case 7:
                        return G(()=>{
                            tr(),
                            e(t)
                        }
                        ),
                        [2]
                    }
                })
            })).apply(this, arguments)
        }
        function td(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        function tp(e) {
            if (Array.isArray(e))
                return e
        }
        function tv(e, t) {
            var i, n, r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
                var a = []
                  , o = !0
                  , s = !1;
                try {
                    for (r = r.call(e); !(o = (i = r.next()).done) && (a.push(i.value),
                    !t || a.length !== t); o = !0)
                        ;
                } catch (e) {
                    s = !0,
                    n = e
                } finally {
                    try {
                        o || null == r.return || r.return()
                    } finally {
                        if (s)
                            throw n
                    }
                }
                return a
            }
        }
        function tb() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function tm(e, t) {
            return tp(e) || tv(e, t) || tf(e, t) || tb()
        }
        function tf(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return td(e, t);
                var i = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === i && e.constructor && (i = e.constructor.name),
                "Map" === i || "Set" === i)
                    return Array.from(i);
                if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                    return td(e, t)
            }
        }
        var th = ()=>{
            document.querySelectorAll("[data-t]").forEach(e=>{
                var t, i = e.getAttribute("data-tp"), n = null == i ? void 0 : i.split("&").reduce((e,t)=>{
                    if (t) {
                        var i = tm(t.split("="), 2)
                          , n = i[0]
                          , r = i[1];
                        n && r && (e[n] = e6(r))
                    }
                    return e
                }
                , {});
                e.innerHTML = null !== (t = e6(e.getAttribute("data-t"), n)) && void 0 !== t ? t : ""
            }
            );
            var e = document.querySelectorAll("[data-value]")
              , t = e9();
            e.forEach(e=>{
                if (e) {
                    var i, n = null !== (r = e.getAttribute("data-value")) && void 0 !== r ? r : "";
                    switch (n) {
                    case "app_icon":
                        e.src = (null == t ? void 0 : t.app_icon) || "./roibest/icons/favicon.png";
                        break;
                    case "app_comments":
                        var r, a, o = ee(null !== (a = null == t ? void 0 : t.app_comments) && void 0 !== a ? a : 0);
                        e.innerHTML = e6(`number_of_comments.${o.unit || "value"}`, {
                            num: o.value
                        });
                        break;
                    case "app_download":
                        var s, l = ee(null !== (s = null == t ? void 0 : t.app_download) && void 0 !== s ? s : 0);
                        e.innerHTML = e6(`downloads.${l.unit || "value"}`, {
                            num: l.value
                        });
                        break;
                    case "pic_list":
                        var c, u = "";
                        null == t || null === (c = t.pic_list) || void 0 === c || c.forEach(e=>{
                            u += `
                  <div class="img-scroll__view">
                    <img loading="lazy"  alt="" src="${e}" />
                  </div>`
                        }
                        ),
                        u && (e.innerHTML = u);
                        break;
                    default:
                        e.innerHTML = null !== (i = null == t ? void 0 : t[n]) && void 0 !== i ? i : ""
                    }
                }
            }
            );
            var i = document.getElementById("update-time")
              , n = e=>["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"][e];
            if (i) {
                var r = new Date(new Date().getTime() - 2592e5)
                  , a = r.getFullYear()
                  , o = r.getMonth()
                  , s = r.getDate()
                  , l = n(o);
                i.innerHTML = `${e6(l)} ${s}, ${a}`
            }
        }
        ;
        function tg() {
            var e = e9()
              , t = (null == e ? void 0 : e.app_labels) || ""
              , i = document.getElementById("description-label");
            if (t && i) {
                var n = "";
                t.split(",").forEach(e=>{
                    n += `
            <div class="description__label-item">${e}</div>
            `
                }
                ),
                i.innerHTML = n
            }
        }
        function tw() {
            var e = "rb-loading"
              , t = document.getElementById(e);
            return t || ((t = document.createElement("div")).className = `${e}`,
            t.id = e,
            t.innerHTML = `
      <div class="loading__icon">
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" fill="none" r="20" />
        </svg>
      </div>
      <div class="loading__text"></div>
    `,
            document.body.appendChild(t)),
            {
                show: e=>{
                    if (t) {
                        var i = null == t ? void 0 : t.querySelector(".loading__text");
                        i && (i.innerHTML = e);
                        var n = null == t ? void 0 : t.classList;
                        null == n || n.add("loading--show")
                    }
                }
                ,
                hide: ()=>{
                    if (t) {
                        var e = null == t ? void 0 : t.classList;
                        null == e || e.remove("loading--show")
                    }
                }
            }
        }
        let t_ = function(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
          , ty = "object" == typeof global && global && global.Object === Object && global;
        var tk = "object" == typeof self && self && self.Object === Object && self;
        let tx = ty || tk || Function("return this")()
          , tS = function() {
            return tx.Date.now()
        };
        var tj = /\s/;
        let tP = function(e) {
            for (var t = e.length; t-- && tj.test(e.charAt(t)); )
                ;
            return t
        };
        var tL = /^\s+/;
        let tI = function(e) {
            return e ? e.slice(0, tP(e) + 1).replace(tL, "") : e
        }
          , tO = tx.Symbol;
        var tE = Object.prototype
          , tT = tE.hasOwnProperty
          , t$ = tE.toString
          , tA = tO ? tO.toStringTag : void 0;
        let tN = function(e) {
            var t = tT.call(e, tA)
              , i = e[tA];
            try {
                e[tA] = void 0;
                var n = !0
            } catch (e) {}
            var r = t$.call(e);
            return n && (t ? e[tA] = i : delete e[tA]),
            r
        };
        var tC = Object.prototype.toString;
        let tM = function(e) {
            return tC.call(e)
        };
        var tU = "[object Null]"
          , tR = "[object Undefined]"
          , tq = tO ? tO.toStringTag : void 0;
        let tD = function(e) {
            return null == e ? void 0 === e ? tR : tU : tq && tq in Object(e) ? tN(e) : tM(e)
        }
          , tz = function(e) {
            return null != e && "object" == typeof e
        };
        var tB = "[object Symbol]";
        let tH = function(e) {
            return "symbol" == typeof e || tz(e) && tD(e) == tB
        };
        var tF = 0 / 0
          , tK = /^[-+]0x[0-9a-f]+$/i
          , tV = /^0b[01]+$/i
          , tW = /^0o[0-7]+$/i
          , tG = parseInt;
        let tJ = function(e) {
            if ("number" == typeof e)
                return e;
            if (tH(e))
                return tF;
            if (t_(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = t_(t) ? t + "" : t
            }
            if ("string" != typeof e)
                return 0 === e ? e : +e;
            e = tI(e);
            var i = tV.test(e);
            return i || tW.test(e) ? tG(e.slice(2), i ? 2 : 8) : tK.test(e) ? tF : +e
        };
        var tY = "Expected a function"
          , tZ = Math.max
          , tX = Math.min;
        let tQ = function(e, t, i) {
            var n, r, a, o, s, l, c = 0, u = !1, d = !1, p = !0;
            if ("function" != typeof e)
                throw TypeError(tY);
            function v(t) {
                var i = n
                  , a = r;
                return n = r = void 0,
                c = t,
                o = e.apply(a, i)
            }
            function b(e) {
                return c = e,
                s = setTimeout(h, t),
                u ? v(e) : o
            }
            function m(e) {
                var i = e - l
                  , n = e - c
                  , r = t - i;
                return d ? tX(r, a - n) : r
            }
            function f(e) {
                var i = e - l
                  , n = e - c;
                return void 0 === l || i >= t || i < 0 || d && n >= a
            }
            function h() {
                var e = tS();
                if (f(e))
                    return g(e);
                s = setTimeout(h, m(e))
            }
            function g(e) {
                return (s = void 0,
                p && n) ? v(e) : (n = r = void 0,
                o)
            }
            function w() {
                void 0 !== s && clearTimeout(s),
                c = 0,
                n = l = r = s = void 0
            }
            function _() {
                return void 0 === s ? o : g(tS())
            }
            function y() {
                var e = tS()
                  , i = f(e);
                if (n = arguments,
                r = this,
                l = e,
                i) {
                    if (void 0 === s)
                        return b(l);
                    if (d)
                        return clearTimeout(s),
                        s = setTimeout(h, t),
                        v(l)
                }
                return void 0 === s && (s = setTimeout(h, t)),
                o
            }
            return t = tJ(t) || 0,
            t_(i) && (u = !!i.leading,
            a = (d = "maxWait"in i) ? tZ(tJ(i.maxWait) || 0, t) : a,
            p = "trailing"in i ? !!i.trailing : p),
            y.cancel = w,
            y.flush = _,
            y
        };
        function t0(e, t, i, n, r, a, o) {
            try {
                var s = e[a](o)
                  , l = s.value
            } catch (e) {
                i(e);
                return
            }
            s.done ? t(l) : Promise.resolve(l).then(n, r)
        }
        function t1(e) {
            return function() {
                var t = this
                  , i = arguments;
                return new Promise(function(n, r) {
                    var a = e.apply(t, i);
                    function o(e) {
                        t0(a, n, r, o, s, "next", e)
                    }
                    function s(e) {
                        t0(a, n, r, o, s, "throw", e)
                    }
                    o(void 0)
                }
                )
            }
        }
        function t2(e, t) {
            var i, n, r, a, o = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }
            ),
            a;
            function s(e) {
                return function(t) {
                    return l([e, t])
                }
            }
            function l(a) {
                if (i)
                    throw TypeError("Generator is already executing.");
                for (; o; )
                    try {
                        if (i = 1,
                        n && (r = 2 & a[0] ? n.return : a[0] ? n.throw || ((r = n.return) && r.call(n),
                        0) : n.next) && !(r = r.call(n, a[1])).done)
                            return r;
                        switch (n = 0,
                        r && (a = [2 & a[0], r.value]),
                        a[0]) {
                        case 0:
                        case 1:
                            r = a;
                            break;
                        case 4:
                            return o.label++,
                            {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            o.label++,
                            n = a[1],
                            a = [0];
                            continue;
                        case 7:
                            a = o.ops.pop(),
                            o.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = o.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                o = 0;
                                continue
                            }
                            if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                o.label = a[1];
                                break
                            }
                            if (6 === a[0] && o.label < r[1]) {
                                o.label = r[1],
                                r = a;
                                break
                            }
                            if (r && o.label < r[2]) {
                                o.label = r[2],
                                o.ops.push(a);
                                break
                            }
                            r[2] && o.ops.pop(),
                            o.trys.pop();
                            continue
                        }
                        a = t.call(e, o)
                    } catch (e) {
                        a = [6, e],
                        n = 0
                    } finally {
                        i = r = 0
                    }
                if (5 & a[0])
                    throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                }
            }
        }
        function t3(e) {
            var t, i, a = e.onInit, o = void 0 === a ? ()=>{}
            : a, s = e.onActivate, l = void 0 === s ? ()=>{}
            : s, c = e.onInstallPromptFail, u = void 0 === c ? ()=>{}
            : c, d = e.onChangeAppState, p = void 0 === d ? ()=>{}
            : d, v = r(), b = n(), m = en(), f = "BeforeInstallPromptEvent"in window, h = !0, g = !1, w = new URLSearchParams(window.location.search), _ = (0,
            eh.KA)("appid"), y = w.get("uuid") || P(_) || "", k = w.get("link_id") || I(_) || "", x = w.has("uuid"), S = w.get("channel_id") || "4", U = w.get("invite_code") || E(_) || "", q = null !== (t = w.get("promote_url_id")) && void 0 !== t ? t : "", D = (0,
            eh.KA)("package_type"), H = (0,
            eg.Pn)(S) || "", F = w.get("gaid") || "";
            y && j(_, y),
            k && L(_, k),
            U && O(_, U),
            (0,
            eh.k3)("channel_id", S);
            var K = !1
              , W = tw()
              , G = ()=>{
                K = !0,
                W.show(e6("loading"))
            }
              , Z = ()=>{
                K = !1,
                W.hide()
            }
              , X = e=>ep({
                uuid: y,
                channel_id: S,
                invite_code: U,
                event_code: e,
                link_id: k,
                project_id: _,
                version: ew(y),
                package: _,
                promote_url_id: q
            })
              , Q = ()=>new Promise((e,t)=>{
                y ? (j(_, y),
                e(y)) : eo({}).then(t=>{
                    var i, n;
                    j(_, y = null !== (n = null === (i = t.data) || void 0 === i ? void 0 : i.uuid) && void 0 !== n ? n : ""),
                    e(y)
                }
                ).catch(e=>{
                    t(e)
                }
                )
            }
            )
              , ee = ()=>new Promise((e,t)=>{
                v && w.has("link_id") && k && x ? (L(_, k),
                e(k)) : es({
                    uuid: y,
                    url: location.href,
                    project_id: _,
                    channel_id: S,
                    invite_code: U,
                    promote_url_id: q,
                    fbclid: H,
                    browser_info: {
                        language: navigator.language,
                        timezone: "UTC+" + (0 - new Date().getTimezoneOffset() / 60),
                        userAgent: navigator.userAgent
                    },
                    device_info: {
                        device_type: V()
                    },
                    package: _,
                    extra: {
                        gaid: F
                    }
                }).then(t=>{
                    if (L(_, k = null !== (n = null === (i = t.data) || void 0 === i ? void 0 : i.link_id) && void 0 !== n ? n : ""),
                    v) {
                        var i, n, r = new URL(location.href);
                        r.searchParams.set("link_id", k),
                        window.history.replaceState("", "", r)
                    }
                    e(k)
                }
                ).catch(e=>{
                    t(e)
                }
                )
            }
            )
              , ei = e=>{
                "INSTALL" === e && (C(_, ""),
                A(_, "")),
                "INSTALLING" === e && A(_, "1"),
                p(e)
            }
              , ea = ()=>{
                if (b) {
                    ec();
                    return
                }
                if (!$(_).isOpenChrome) {
                    var e = new URL(location.href);
                    (0,
                    eh.KA)("domain") && (e.host = (0,
                    eh.KA)("domain"));
                    var t = "__roibest_install"
                      , i = w.get("rb_tid") || "0";
                    "0" !== i && (t = "__roibest_install_template" + i),
                    e.searchParams.set("uuid", y),
                    e.searchParams.set("link_id", k),
                    m && e.searchParams.delete("rb_lid");
                    var n = ()=>{
                        g ? (e.searchParams.set("rb_to", t),
                        e.searchParams.set("rb_intent", "pwa"),
                        e.pathname = `/${_}/__roibest_startup.html`,
                        Y(e.href)) : (e.pathname = `/${_}/${t}.html`,
                        J(e.href))
                    }
                    ;
                    h ? eb({
                        uuid: y,
                        project_id: _
                    }).then(e=>{
                        var t;
                        h = !1,
                        g = !!(null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.install),
                        n()
                    }
                    ).finally(()=>{
                        J(e.href)
                    }
                    ) : n()
                }
            }
              , ec = ()=>{
                eI({
                    project_id: _,
                    promote_url_id: q
                })
            }
              , eu = ()=>{
                ej() && ("1" !== N(_) ? ed() : v && ex())
            }
              , ed = tQ(()=>{
                var e = N(_);
                !K && k && (v ? f ? "1" === e ? (X(eG),
                ey()) : i ? (X(eR),
                ef()) : ((0,
                eg.re)() && ea(),
                ex(),
                X(eq),
                u()) : ec() : (X(eT),
                ea()))
            }
            , 750, {
                leading: !0,
                trailing: !1
            })
              , ev = ()=>new Promise((e,t)=>{
                if (i)
                    return e(i);
                var n = 0
                  , r = 500
                  , a = 5e3
                  , o = setInterval(function() {
                    (n += r) > a && (clearInterval(o),
                    t("NO_ENG_AG")),
                    i && (clearInterval(o),
                    e(i))
                }, 500)
            }
            )
              , em = ()=>i
              , ef = ()=>{
                G(),
                ev().then(()=>{
                    null == i || i.stopPropagation(),
                    null == i || i.prompt().then(()=>{
                        X(eK),
                        null == i || i.userChoice.then(e=>{
                            "accepted" === e.outcome ? (i = null,
                            m && el({
                                channelId: S,
                                link_id: k,
                                event_name: (0,
                                eg.iF)()
                            }),
                            X(eV),
                            1 === (0,
                            eh.KA)("pre_load") && ek(_),
                            ei("INSTALLING")) : X(eW)
                        }
                        )
                    }
                    )
                }
                ).finally(()=>{
                    Z()
                }
                )
            }
              , ey = ()=>{
                C(_, "1"),
                document.exitFullscreen().finally(()=>e_(_))
            }
              , ex = ()=>{
                0 !== B && !i && document.fullscreenEnabled && er()
            }
            ;
            return tc(()=>{
                var e = document.getElementById("container");
                window.__rb_event_listener = {
                    beforeInstallPrompt: e=>{
                        X(eF),
                        ei("INSTALL"),
                        i = e
                    }
                },
                (function() {
                    var t = t1(function() {
                        var t, i, n, r, a;
                        return t2(this, function(s) {
                            switch (s.label) {
                            case 0:
                                th(),
                                o({
                                    handleContainerClick: eu,
                                    handleInstall: ed,
                                    reportEvent: X,
                                    getInstallPromptEvent: ev,
                                    getInstallPromptEventSync: em,
                                    handleInstallPrompt: ef,
                                    appid: _,
                                    channelId: S,
                                    inviteCode: U,
                                    promoteUrlId: q,
                                    packageType: D,
                                    adClid: H
                                }),
                                t = N(_),
                                !w.has("rb_lid") && H && 1 === z && R(),
                                "1" === w.get("is_open_chrome") && T(_, {
                                    isOpenChrome: !0
                                }),
                                G(),
                                setTimeout(()=>{
                                    Z()
                                }
                                , 2e3),
                                s.label = 1;
                            case 1:
                                return s.trys.push([1, 4, , 5]),
                                [4, Q()];
                            case 2:
                                return s.sent(),
                                [4, ee()];
                            case 3:
                                return s.sent(),
                                [3, 5];
                            case 4:
                                return console.error(s.sent()),
                                [3, 5];
                            case 5:
                                if (M(_),
                                et({
                                    uuid: y,
                                    unionid: ""
                                }, ()=>{}
                                ),
                                (0,
                                eh.KA)("installPromptEvent") && (null === (i = (n = window.__rb_event_listener).beforeInstallPrompt) || void 0 === i || i.call(n, (0,
                                eh.KA)("installPromptEvent"))),
                                window.__rb_sw = new e1({
                                    swUrl: "./__roibest_sw.js",
                                    uuid: y,
                                    linkId: k,
                                    appid: _,
                                    channelId: S,
                                    inviteCode: U
                                }),
                                "2" === D && (null === (r = window.__rb_sw) || void 0 === r || r.subscribeUser()),
                                v)
                                    X(eU),
                                    "1" === t ? ei("PLAY") : (null == e ? void 0 : null === (a = e.dataset) || void 0 === a ? void 0 : a.type) && ei("INSTALL"),
                                    (0,
                                    eg.re)() && eS() && ea();
                                else {
                                    if (X(eE),
                                    ei("LANDING_PAGE"),
                                    b && eS())
                                        return ec(),
                                        [2];
                                    eS() && (X(e$),
                                    ea())
                                }
                                return [2]
                            }
                        })
                    });
                    return function() {
                        return t.apply(this, arguments)
                    }
                }
                )()(),
                l({
                    uuid: y,
                    linkId: k
                })
            }
            )
        }
        function t4(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i,
            e
        }
        function t6(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable
                }))),
                n.forEach(function(t) {
                    t4(e, t, i[t])
                })
            }
            return e
        }
        var t5 = "rb";
        function t9() {
            var e, t, i = e9(), n = null !== (e = (0,
            eh.KA)("template_id")) && void 0 !== e ? e : 0, r = `
        <div class="comments__title">${e6("ratings_and_reviews.label")}</div>
        <div class="comments__tips">${e6("ratings_and_reviews.content")}</div>
        ${1 !== n ? `
        <div class="comments__type">
            <div class="comments__type-item comments__type-active">
                <img loading="lazy"  src="${__webpack_require__(9369)}" alt="">
                ${e6("telephone")}
            </div>
            <div class="comments__type-item">
                <img loading="lazy"  src="${__webpack_require__(461)}" alt="">
                ${e6("tablet")}
            </div>
        </div>
        ` : ""}

        <div class="comments__scoring">
          <div class="comments__scoring-num">
            <div class="comments__scoring-points">${null == i ? void 0 : i.app_score}</div>
            <div class="comments__scoring-star">${t7(Number(null == i ? void 0 : i.app_score), 14)}</div>
            <div class="comments__scoring-people">${null == i ? void 0 : i.app_comments}</div>
          </div>
          <div class="comments__scoring-content">${t8(null !== (t = null == i ? void 0 : i.app_score_detail) && void 0 !== t ? t : {})}</div>
        </div>
        <div id="${t5}-comment-list"></div>
        <div class="comments__br"></div>
  `;
            W(()=>{
                var e, t = document.getElementById(`${t5}-comment`);
                i && t && (t.innerHTML = r,
                ii(null !== (e = null == i ? void 0 : i.app_comment_list) && void 0 !== e ? e : []))
            }
            )
        }
        function t8(e) {
            var t, i = document.createElement("div"), n = "";
            return null === (t = Object.keys(e)) || void 0 === t || t.reverse().forEach(t=>{
                Object.prototype.hasOwnProperty.call(e, t) && (n += `
        <div class="comments__scoring-item">${t}
          <div class="progress">${ie(e[t])}</div>
        </div>
      `)
            }
            ),
            i.innerHTML = n,
            i.innerHTML
        }
        function t7(e, t) {
            for (var i, n = null !== (i = (0,
            eh.KA)("template_id")) && void 0 !== i ? i : 0, r = __webpack_require__(1 === n ? 2593 : 1315), a = __webpack_require__(1 === n ? 8925 : 9183), o = __webpack_require__(2535), s = 5, l = document.createElement("div"), c = Math.floor(e), u = 1; u <= s; u++) {
                var d = document.createElement("img");
                d.className = "star",
                d.style.width = `${t}px`,
                d.style.height = `${t}px`,
                d.style.marginRight = "2px",
                u <= c ? d.src = r : u - .5 === c + .5 ? d.src = a : d.src = o,
                l.appendChild(d)
            }
            return l.innerHTML
        }
        function ie(e) {
            var t = 10
              , i = document.createElement("div")
              , n = e / t * 100
              , r = document.createElement("div");
            return r.className = "progress-bar",
            r.style.width = `${n}%`,
            i.appendChild(r),
            i.innerHTML
        }
        function it() {
            var e = Date.now()
              , t = e - 7776e6
              , i = new Date(Math.floor(Math.random() * (e - t + 1) + t))
              , n = {
                month: "long",
                day: "numeric",
                year: "numeric"
            };
            return i.toLocaleDateString("en-US", n)
        }
        function ii(e) {
            var t = (e,t)=>(e = Math.ceil(e),
            Math.floor(Math.random() * ((t = Math.floor(t)) - e + 1)) + e)
              , i = null == e ? void 0 : e.map(e=>t6({}, e))
              , n = document.getElementById(`${t5}-comment-list`);
            if (n) {
                var r = "";
                i.forEach(e=>{
                    var i = e.avatar;
                    i || (i = Q(`/assets/roibest/images/default_avatar_${t(1, 6)}.png`)),
                    r += `
    <div class="comments__list-item">
       <div class="comments__list-header">
           <img loading="lazy"  class="comments__list-avatar" src="${i}" alt="">
           <div class="comments__list-name">${e.name}</div>
           <img loading="lazy"  class="comments__list-icon" src="${__webpack_require__(4542)}" alt="">
       </div>
       <div class="comments__list-stars">${t7(Number(e.score), 11)}<span>${it()}</span></div>
       <div class="comments__list-detail">${e.comment}</div>
    </div>
    `
                }
                ),
                n.innerHTML = r
            }
        }
        function ir(e) {
            var t = e.onInstallClick
              , i = void 0 === t ? ()=>{}
            : t
              , n = "rb-install-layer"
              , r = document.getElementById(n)
              , a = e9();
            return r || ((r = document.createElement("div")).className = `${n} layer__container`,
            r.id = n,
            r.innerHTML = `
      <div class="layer__mask"></div>
      <div class="layer__body">
        <div class="install__title">${e6("install_app")}</div>
        <div class="install__main">
          <img loading="lazy"  alt="" class="install__main__icon" src="${null == a ? void 0 : a.app_icon}" />
          <div class="install__main__info">
            <div class="install__main__title">${window.document.title}</div>
            <div class="install__main__url">${window.location.hostname}</div>
          </div>
        </div>
        <div class="install__foot">
          <div>${e6("cancel")}</div>
          <div>${e6("install")}</div>
        </div>
      </div>`,
            null == r || r.addEventListener("click", e=>{
                e.stopPropagation(),
                null == i || i(e)
            }
            ),
            document.body.appendChild(r)),
            {
                show: ()=>{
                    !r || r.classList.contains("layer--visible") || (r.classList.remove("layer--hidden"),
                    r.classList.add("layer--visible"),
                    (0,
                    eh.k3)("dialogClass", "install"))
                }
                ,
                hide: ()=>{
                    r && r.classList.contains("layer--visible") && (r.classList.remove("layer--visible"),
                    r.classList.add("layer--hidden"),
                    (0,
                    eh.k3)("dialogClass", ""))
                }
            }
        }
        function ia(e) {
            var t, i, n = e.onInstallClick, r = void 0 === n ? ()=>{}
            : n, a = "rb-install-now-layer", o = null !== (t = (0,
            eh.KA)("template_id")) && void 0 !== t ? t : 0, s = document.getElementById(a);
            return s || ((s = document.createElement("div")).className = `${a} layer__container`,
            s.id = a,
            s.innerHTML = `
      <div class="layer__mask"></div>
      <div class="layer__body">
        <div class="install-now__header">
          <div class="install-now__header__title">
            <img loading="lazy"  src="${__webpack_require__(8041)}" alt="" />
            <span>${e6("rapid_install")}</span>
          </div>
          <div class="install-now__header__msg">${e6("times_faster", {
                num: "4"
            })}</div>
        </div>
        <div class="install-now__main">
          <div class="install-now__loading">
            <svg viewBox="25 25 50 50">
              <circle cx="50" cy="50" fill="none" r="20" />
            </svg>
            <P></P>
          </div>
          <div class="install-now__actived">
            <div class="install-now__actived__tag">
              <img loading="lazy"  src="${__webpack_require__(1 === o ? 2589 : 63)}" alt="" />
              <span>${e6("actived")}</span>
            </div>
            <div class="install-now__actived__btn">${e6("install_now")}</div>
          </div>
        </div>
    </div>`,
            null == s || null === (i = s.querySelector(".install-now__actived__btn")) || void 0 === i || i.addEventListener("click", e=>{
                e.stopPropagation(),
                null == r || r(e)
            }
            ),
            document.body.appendChild(s)),
            {
                show: ()=>{
                    if (!(!s || s.classList.contains("layer--visible"))) {
                        var e = 50
                          , t = .7142857142857143
                          , i = 0
                          , n = s.querySelector(".install-now__loading p");
                        s.dataset.type = "LOADING";
                        var r = e=>{
                            if (n) {
                                var t = "";
                                e.split("").forEach(e=>{
                                    "." === e ? t += `<i>${e}</i>` : t += `<span>${e}</span>`
                                }
                                ),
                                t += "<i>%</i>",
                                n.innerHTML = t
                            }
                        }
                        ;
                        r("0");
                        var a = setInterval(()=>{
                            var e = (i + t).toFixed(2);
                            (i = Number(e)) >= 100 && (clearInterval(a),
                            s.dataset.type = "ACTIVED"),
                            r(e)
                        }
                        , e);
                        s.classList.remove("layer--hidden"),
                        s.classList.add("layer--visible"),
                        (0,
                        eh.k3)("dialogClass", "installNow")
                    }
                }
                ,
                hide: ()=>{
                    s && s.classList.contains("layer--visible") && (s.classList.remove("layer--visible"),
                    s.classList.add("layer--hidden"),
                    (0,
                    eh.k3)("dialogClass", ""))
                }
            }
        }
        function io(e) {
            var t, i, n, r = e.onInstallClick, a = void 0 === r ? ()=>{}
            : r, o = "rb-back-layer", s = null !== (t = (0,
            eh.KA)("template_id")) && void 0 !== t ? t : 0, l = e9(), c = document.getElementById(o);
            c || ((c = document.createElement("div")).className = `${o} layer__container template${s}`,
            c.id = o,
            c.innerHTML = `
      <div class="layer__mask"></div>
      <div class="layer__body">
        <img alt="" class="back__logo" loading="lazy" src="${e7("/images/img_reward.png")}" />
        <div class="back__title">${e6("back.title")}</div>
        <div class="back__content">
          <img alt=""  class="back__icon" loading="lazy" src="${null == l ? void 0 : l.app_icon}">
          <div class="back__info">
            <div class="back__info__title">
              <span >${null == l ? void 0 : l.app_name}</span>
              ${1 !== s ? `<img alt=""  loading="lazy" src="${__webpack_require__(6369)}" />` : ""}
            </div>
            <p class="back__info__description" >${null == l ? void 0 : l.company_name}</p>
            <p class="back__info__play">
              <img alt="" class="ic_dun" loading="lazy" src="${__webpack_require__(812)}" />
              Verified by Play Protect
            </p>
          </div>
        </div>
        <div class="back__detail">
          ${0 === s ? `<img alt="" loading="lazy" src="${__webpack_require__(9088)}" />` : ""}
          <div class="back__detail__introduction">${e6("back.text")}</div>
        </div>
        <div class="back__btn">${e6("install")}</div>
      </div>
    `,
            null == c || null === (i = c.querySelector(".back__btn")) || void 0 === i || i.addEventListener("click", e=>{
                e.stopPropagation(),
                null == a || a(e)
            }
            ),
            null == c || null === (n = c.querySelector(".layer__mask")) || void 0 === n || n.addEventListener("click", ()=>{
                u()
            }
            ),
            document.body.appendChild(c));
            var u = ()=>{
                c && c.classList.contains("layer--visible") && (c.classList.remove("layer--visible"),
                c.classList.add("layer--hidden"),
                (0,
                eh.k3)("dialogClass", ""))
            }
            ;
            return {
                show: ()=>{
                    !c || c.classList.contains("layer--visible") || (c.classList.remove("layer--hidden"),
                    c.classList.add("layer--visible"),
                    (0,
                    eh.k3)("dialogClass", "back"))
                }
                ,
                hide: u
            }
        }
        function is() {
            var e, t, i = a(), n = null !== (e = (0,
            eh.KA)("template_id")) && void 0 !== e ? e : 0, r = (0,
            eh.KA)("promote_url_tpl_img"), o = null !== (t = i ? null == r ? void 0 : r.chrome_tpl_img : null == r ? void 0 : r.ad_tpl_img) && void 0 !== t ? t : {}, s = "";
            switch (n) {
            case 0:
            default:
                s = null == o ? void 0 : o.default;
                break;
            case 1:
                s = null == o ? void 0 : o.t1;
                break;
            case 2:
                s = null == o ? void 0 : o.t2
            }
            if (s) {
                var l = "rb-topbar"
                  , c = document.getElementById(l);
                if (!c) {
                    (c = document.createElement("div")).className = `${l}`,
                    c.id = l,
                    c.innerHTML = `
    <img class="topbar" src="${s}" alt="" />
   `;
                    var u = c.querySelector(".topbar");
                    if (u) {
                        var d = u.offsetTop;
                        window.addEventListener("scroll", function() {
                            (window.scrollY || window.pageYOffset) > d ? u.classList.add("active") : u.classList.remove("active")
                        })
                    }
                    document.body.insertBefore(c, document.body.firstChild)
                }
            }
        }
        !function() {
            var e, t, i, n, a = r(), o = document.getElementById("container"), s = document.getElementById("install-btn"), l = null == s ? void 0 : s.querySelector(".install-btn__ing .progress-num"), c = null == s ? void 0 : s.querySelector(".install-btn__ing .progress-bar"), u = null == s ? void 0 : s.querySelector(".install-btn__ing__countdown span.countdown-num"), d = null == s ? void 0 : s.querySelector(".install-btn__ing__rapid span"), p = document.getElementById("installProgress"), v = H, b = F, m = 0, f = !1, h = !1, g = tw(), w = ()=>{
                h = !0,
                g.show(e6("loading"))
            }
            , _ = ()=>{
                h = !1,
                g.hide()
            }
            , y = ()=>{
                var e;
                f = !1,
                (null == o ? void 0 : null === (e = o.dataset) || void 0 === e ? void 0 : e.type) && (o.dataset.type = "INSTALL"),
                d && (d.innerHTML = e6("rapid_install"))
            }
            , k = e=>{
                m = e,
                p && (p.innerHTML = `${e}%`),
                l && (l.innerHTML = `${e}%`),
                c && (c.style.width = `${e}%`)
            }
            , x = ()=>{
                var t;
                f = !0,
                k(26),
                d && (d.innerHTML = e6("installing")),
                u && (u.innerHTML = `${b}`),
                (null == o ? void 0 : null === (t = o.dataset) || void 0 === t ? void 0 : t.type) && (o.dataset.type = "INSTALLING"),
                clearTimeout(e),
                e = setInterval(()=>{
                    var t = b - Math.floor((m += 1) * b * .01);
                    t = t <= 0 ? 0 : t,
                    k(m),
                    u && (u.innerHTML = `${t}`),
                    m >= 100 && (clearInterval(e),
                    S())
                }
                , 1e3 * v / 74)
            }
            , S = ()=>{
                var e;
                f = !1,
                k(100),
                (null == o ? void 0 : null === (e = o.dataset) || void 0 === e ? void 0 : e.type) && (o.dataset.type = "PLAY")
            }
            ;
            t3({
                onInit: e=>{
                    var r = e.appid
                      , l = e.handleContainerClick
                      , c = e.handleInstall
                      , u = e.reportEvent
                      , d = e.getInstallPromptEvent
                      , p = e.getInstallPromptEventSync
                      , v = e.handleInstallPrompt
                      , b = eO();
                    th(),
                    b && is(),
                    (0,
                    eh.KA)("language_json") && (tg(),
                    t9()),
                    o && o.addEventListener("click", e=>{
                        f || h || l(e)
                    }
                    ),
                    s && s.addEventListener("click", e=>{
                        f || h || (e.stopPropagation(),
                        c())
                    }
                    ),
                    t = ir({
                        onInstallClick: ()=>{
                            null == t || t.hide(),
                            u(p() ? eB : eH),
                            w(),
                            d().then(()=>{
                                v()
                            }
                            ).catch(()=>{
                                location.reload()
                            }
                            ).finally(()=>{
                                _()
                            }
                            )
                        }
                    }),
                    i = ia({
                        onInstallClick: ()=>{
                            u(p() ? eD : ez),
                            i.hide(),
                            p() ? v() : t.show()
                        }
                    }),
                    n = io({
                        onInstallClick: ()=>{
                            n.hide(),
                            c(),
                            a ? u(eM) : u(eN)
                        }
                    });
                    var m = ()=>{
                        (0,
                        eh.KA)("dialogClass") || (n.show(),
                        a ? u(eC) : u(eA))
                    }
                    ;
                    X(()=>{
                        "1" !== N(r) && m()
                    }
                    , !0),
                    document.addEventListener("visibilitychange", ()=>{
                        "hidden" !== document.visibilityState || a ? "visible" === document.visibilityState && "1" !== N(r) && m() : m()
                    }
                    )
                }
                ,
                onChangeAppState: e=>{
                    switch (e) {
                    case "INSTALL":
                        y();
                        break;
                    case "INSTALLING":
                        x();
                        break;
                    case "PLAY":
                        S()
                    }
                }
                ,
                onInstallPromptFail: ()=>{
                    null == i || i.show()
                }
            })
        }()
    }
    )()
}
)();
