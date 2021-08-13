/**
 * @license ng-alain(cipchk@qq.com) v12.1.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@delon/acl'), require('@delon/util/config'), require('@angular/cdk/platform'), require('@angular/cdk/bidi'), require('@angular/common'), require('ng-zorro-antd/core/config'), require('@angular/platform-browser'), require('@angular/router'), require('@delon/util/other'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/drawer'), require('@angular/common/http'), require('date-fns'), require('@delon/util/date-time'), require('ng-zorro-antd/i18n'), require('@angular/cdk/overlay'), require('@ant-design/icons-angular/icons'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('@delon/theme', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@delon/acl', '@delon/util/config', '@angular/cdk/platform', '@angular/cdk/bidi', '@angular/common', 'ng-zorro-antd/core/config', '@angular/platform-browser', '@angular/router', '@delon/util/other', 'ng-zorro-antd/modal', 'ng-zorro-antd/drawer', '@angular/common/http', 'date-fns', '@delon/util/date-time', 'ng-zorro-antd/i18n', '@angular/cdk/overlay', '@ant-design/icons-angular/icons', 'ng-zorro-antd/icon'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.theme = {}), global.ng.core, global.rxjs, global.rxjs.operators, global.delon.acl, global.delon.util.config, global.ng.cdk.platform, global.ng.cdk.bidi, global.ng.common, global.i3, global.ng.platformBrowser, global.ng.router, global.delon.util.other, global['ng-zorro-antd/modal'], global['ng-zorro-antd/drawer'], global.ng.common.http, global.DateFns, global.delon.util['date-time'], global['ng-zorro-antd/i18n'], global.ng.cdk.overlay, global.icons, global['ng-zorro-antd/icon']));
}(this, (function (exports, i0, rxjs, operators, i2, i1, i1$1, i1$2, i6, i3, i1$3, router, other, i1$4, i1$5, i1$6, dateFns, dateTime, i18n, overlay, icons, icon) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i1__namespace$3 = /*#__PURE__*/_interopNamespace(i1$3);
    var i1__namespace$4 = /*#__PURE__*/_interopNamespace(i1$4);
    var i1__namespace$5 = /*#__PURE__*/_interopNamespace(i1$5);
    var i1__namespace$6 = /*#__PURE__*/_interopNamespace(i1$6);

    function preloaderFinished() {
        var body = document.querySelector('body');
        var preloader = document.querySelector('.preloader');
        body.style.overflow = 'hidden';
        function remove() {
            // preloader value null when running --hmr
            if (!preloader)
                return;
            preloader.addEventListener('transitionend', function () {
                preloader.className = 'preloader-hidden';
            });
            preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
        }
        window.appBootstrap = function () {
            setTimeout(function () {
                remove();
                body.style.overflow = '';
            }, 100);
        };
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var ALAIN_I18N_TOKEN = new i0.InjectionToken('alainI18nToken', {
        providedIn: 'root',
        factory: function () { return new AlainI18NServiceFake(i0.inject(i1.AlainConfigService)); }
    });
    var AlainI18nBaseService = /** @class */ (function () {
        function AlainI18nBaseService(cogSrv) {
            this._change$ = new rxjs.BehaviorSubject(null);
            this._currentLang = '';
            this._defaultLang = '';
            this._data = {};
            this.cog = cogSrv.merge('themeI18n', {
                interpolation: ['{{', '}}']
            });
        }
        Object.defineProperty(AlainI18nBaseService.prototype, "change", {
            get: function () {
                return this._change$.asObservable().pipe(operators.filter(function (w) { return w != null; }));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlainI18nBaseService.prototype, "defaultLang", {
            get: function () {
                return this._defaultLang;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlainI18nBaseService.prototype, "currentLang", {
            get: function () {
                return this._currentLang;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlainI18nBaseService.prototype, "data", {
            get: function () {
                return this._data;
            },
            enumerable: false,
            configurable: true
        });
        AlainI18nBaseService.prototype.fanyi = function (path, params) {
            var content = this._data[path] || '';
            if (!content)
                return path;
            if (params) {
                var interpolation_1 = this.cog.interpolation;
                Object.keys(params).forEach(function (key) { return (content = content.replace(new RegExp(interpolation_1[0] + "s?" + key + "s?" + interpolation_1[1], 'g'), "" + params[key])); });
            }
            return content;
        };
        return AlainI18nBaseService;
    }());
    AlainI18nBaseService.decorators = [
        { type: i0.Injectable }
    ];
    AlainI18nBaseService.ctorParameters = function () { return [
        { type: i1.AlainConfigService }
    ]; };
    var AlainI18NServiceFake = /** @class */ (function (_super) {
        __extends(AlainI18NServiceFake, _super);
        function AlainI18NServiceFake() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AlainI18NServiceFake.prototype.use = function (lang, data) {
            this._data = data;
            this._currentLang = lang;
            this._change$.next(lang);
        };
        AlainI18NServiceFake.prototype.getLangs = function () {
            return [];
        };
        return AlainI18NServiceFake;
    }(AlainI18nBaseService));
    AlainI18NServiceFake.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function AlainI18NServiceFake_Factory() { return new AlainI18NServiceFake(i0__namespace.ɵɵinject(i1__namespace.AlainConfigService)); }, token: AlainI18NServiceFake, providedIn: "root" });
    AlainI18NServiceFake.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];

    /**
     * 菜单服务，[在线文档](https://ng-alain.com/theme/menu)
     */
    var MenuService = /** @class */ (function () {
        function MenuService(i18nSrv, aclService) {
            var _this = this;
            this.i18nSrv = i18nSrv;
            this.aclService = aclService;
            this._change$ = new rxjs.BehaviorSubject([]);
            this.data = [];
            this.i18n$ = this.i18nSrv.change.subscribe(function () { return _this.resume(); });
        }
        Object.defineProperty(MenuService.prototype, "change", {
            get: function () {
                return this._change$.pipe(operators.share());
            },
            enumerable: false,
            configurable: true
        });
        MenuService.prototype.visit = function (data, callback) {
            var inFn = function (list, parentMenu, depth) {
                var e_1, _a;
                try {
                    for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                        var item = list_1_1.value;
                        callback(item, parentMenu, depth);
                        if (item.children && item.children.length > 0) {
                            inFn(item.children, item, depth + 1);
                        }
                        else {
                            item.children = [];
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            };
            inFn(data, null, 0);
        };
        MenuService.prototype.add = function (items) {
            this.data = items;
            this.resume();
        };
        MenuService.prototype.fixItem = function (item) {
            item._aclResult = true;
            if (!item.link)
                item.link = '';
            if (!item.externalLink)
                item.externalLink = '';
            // badge
            if (item.badge) {
                if (item.badgeDot !== true) {
                    item.badgeDot = false;
                }
                if (!item.badgeStatus) {
                    item.badgeStatus = 'error';
                }
            }
            if (!Array.isArray(item.children)) {
                item.children = [];
            }
            // icon
            if (typeof item.icon === 'string') {
                var type = 'class';
                var value = item.icon;
                // compatible `anticon anticon-user`
                if (~item.icon.indexOf("anticon-")) {
                    type = 'icon';
                    value = value.split('-').slice(1).join('-');
                }
                else if (/^https?:\/\//.test(item.icon)) {
                    type = 'img';
                }
                item.icon = { type: type, value: value };
            }
            if (item.icon != null) {
                item.icon = Object.assign({ theme: 'outline', spin: false }, item.icon);
            }
            item.text = item.i18n && this.i18nSrv ? this.i18nSrv.fanyi(item.i18n) : item.text;
            // group
            item.group = item.group !== false;
            // hidden
            item._hidden = typeof item.hide === 'undefined' ? false : item.hide;
            // disabled
            item.disabled = typeof item.disabled === 'undefined' ? false : item.disabled;
            // acl
            item._aclResult = item.acl && this.aclService ? this.aclService.can(item.acl) : true;
        };
        /**
         * 重置菜单，可能I18N、用户权限变动时需要调用刷新
         */
        MenuService.prototype.resume = function (callback) {
            var _this = this;
            var i = 1;
            var shortcuts = [];
            this.visit(this.data, function (item, parent, depth) {
                item._id = i++;
                item._parent = parent;
                item._depth = depth;
                _this.fixItem(item);
                // shortcut
                if (parent && item.shortcut === true && parent.shortcutRoot !== true) {
                    shortcuts.push(item);
                }
                if (callback)
                    callback(item, parent, depth);
            });
            this.loadShortcut(shortcuts);
            this._change$.next(this.data);
        };
        /**
         * 加载快捷菜单，加载位置规则如下：
         * 1、统一在下标0的节点下（即【主导航】节点下方）
         *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
         *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
         *      3、否则放在0节点位置
         */
        MenuService.prototype.loadShortcut = function (shortcuts) {
            if (shortcuts.length === 0 || this.data.length === 0) {
                return;
            }
            var ls = this.data[0].children;
            var pos = ls.findIndex(function (w) { return w.shortcutRoot === true; });
            if (pos === -1) {
                pos = ls.findIndex(function (w) { return w.link.includes('dashboard'); });
                pos = (pos !== -1 ? pos : -1) + 1;
                var shortcutMenu = {
                    text: '快捷菜单',
                    i18n: 'shortcut',
                    icon: 'icon-rocket',
                    children: []
                };
                this.data[0].children.splice(pos, 0, shortcutMenu);
            }
            var _data = this.data[0].children[pos];
            if (_data.i18n && this.i18nSrv)
                _data.text = this.i18nSrv.fanyi(_data.i18n);
            _data = Object.assign(_data, {
                shortcutRoot: true,
                _id: -1,
                _parent: null,
                _depth: 1
            });
            _data.children = shortcuts.map(function (i) {
                i._depth = 2;
                i._parent = _data;
                return i;
            });
        };
        Object.defineProperty(MenuService.prototype, "menus", {
            get: function () {
                return this.data;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * 清空菜单
         */
        MenuService.prototype.clear = function () {
            this.data = [];
            this._change$.next(this.data);
        };
        MenuService.prototype.getHit = function (data, url, recursive, cb) {
            if (recursive === void 0) { recursive = false; }
            if (cb === void 0) { cb = null; }
            var item = null;
            while (!item && url) {
                this.visit(data, function (i) {
                    if (cb) {
                        cb(i);
                    }
                    if (i.link != null && i.link === url) {
                        item = i;
                    }
                });
                if (!recursive)
                    break;
                if (/[?;]/g.test(url)) {
                    url = url.split(/[?;]/g)[0];
                }
                else {
                    url = url.split('/').slice(0, -1).join('/');
                }
            }
            return item;
        };
        /**
         * 根据URL设置菜单 `_open` 属性
         * - 若 `recursive: true` 则会自动向上递归查找
         *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
         */
        MenuService.prototype.openedByUrl = function (url, recursive) {
            if (recursive === void 0) { recursive = false; }
            if (!url)
                return;
            var findItem = this.getHit(this.data, url, recursive, function (i) {
                i._selected = false;
                i._open = false;
            });
            if (findItem == null)
                return;
            do {
                findItem._selected = true;
                findItem._open = true;
                findItem = findItem._parent;
            } while (findItem);
        };
        /**
         * 根据url获取菜单列表
         * - 若 `recursive: true` 则会自动向上递归查找
         *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
         */
        MenuService.prototype.getPathByUrl = function (url, recursive) {
            if (recursive === void 0) { recursive = false; }
            var ret = [];
            var item = this.getHit(this.data, url, recursive);
            if (!item)
                return ret;
            do {
                ret.splice(0, 0, item);
                item = item._parent;
            } while (item);
            return ret;
        };
        /**
         * Get menu based on `key`
         */
        MenuService.prototype.getItem = function (key) {
            var res = null;
            this.visit(this.data, function (item) {
                if (res == null && item.key === key) {
                    res = item;
                }
            });
            return res;
        };
        /**
         * Set menu based on `key`
         */
        MenuService.prototype.setItem = function (key, value) {
            var item = this.getItem(key);
            if (item == null)
                return;
            Object.keys(value).forEach(function (k) {
                item[k] = value[k];
            });
            this.fixItem(item);
            this._change$.next(this.data);
        };
        MenuService.prototype.ngOnDestroy = function () {
            this._change$.unsubscribe();
            this.i18n$.unsubscribe();
        };
        return MenuService;
    }());
    MenuService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function MenuService_Factory() { return new MenuService(i0__namespace.ɵɵinject(ALAIN_I18N_TOKEN, 8), i0__namespace.ɵɵinject(i2__namespace.ACLService, 8)); }, token: MenuService, providedIn: "root" });
    MenuService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    MenuService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: i2.ACLService, decorators: [{ type: i0.Optional }] }
    ]; };

    var ALAIN_SETTING_KEYS = new i0.InjectionToken('ALAIN_SETTING_KEYS');
    var SettingsService = /** @class */ (function () {
        function SettingsService(platform, KEYS) {
            this.platform = platform;
            this.KEYS = KEYS;
            this.notify$ = new rxjs.Subject();
            this._app = null;
            this._user = null;
            this._layout = null;
        }
        SettingsService.prototype.getData = function (key) {
            if (!this.platform.isBrowser) {
                return null;
            }
            return JSON.parse(localStorage.getItem(key) || 'null') || null;
        };
        SettingsService.prototype.setData = function (key, value) {
            if (!this.platform.isBrowser) {
                return;
            }
            localStorage.setItem(key, JSON.stringify(value));
        };
        Object.defineProperty(SettingsService.prototype, "layout", {
            get: function () {
                if (!this._layout) {
                    this._layout = Object.assign({ fixed: true, collapsed: false, boxed: false, lang: null }, this.getData(this.KEYS.layout));
                    this.setData(this.KEYS.layout, this._layout);
                }
                return this._layout;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SettingsService.prototype, "app", {
            get: function () {
                if (!this._app) {
                    this._app = Object.assign({ year: new Date().getFullYear() }, this.getData(this.KEYS.app));
                    this.setData(this.KEYS.app, this._app);
                }
                return this._app;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SettingsService.prototype, "user", {
            get: function () {
                if (!this._user) {
                    this._user = Object.assign({}, this.getData(this.KEYS.user));
                    this.setData(this.KEYS.user, this._user);
                }
                return this._user;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SettingsService.prototype, "notify", {
            get: function () {
                return this.notify$.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        SettingsService.prototype.setLayout = function (name, value) {
            if (typeof name === 'string') {
                this.layout[name] = value;
            }
            else {
                this._layout = name;
            }
            this.setData(this.KEYS.layout, this._layout);
            this.notify$.next({ type: 'layout', name: name, value: value });
            return true;
        };
        SettingsService.prototype.setApp = function (value) {
            this._app = value;
            this.setData(this.KEYS.app, value);
            this.notify$.next({ type: 'app', value: value });
        };
        SettingsService.prototype.setUser = function (value) {
            this._user = value;
            this.setData(this.KEYS.user, value);
            this.notify$.next({ type: 'user', value: value });
        };
        return SettingsService;
    }());
    SettingsService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function SettingsService_Factory() { return new SettingsService(i0__namespace.ɵɵinject(i1__namespace$1.Platform), i0__namespace.ɵɵinject(ALAIN_SETTING_KEYS)); }, token: SettingsService, providedIn: "root" });
    SettingsService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    SettingsService.ctorParameters = function () { return [
        { type: i1$1.Platform },
        { type: undefined, decorators: [{ type: i0.Inject, args: [ALAIN_SETTING_KEYS,] }] }
    ]; };

    var REP_MAX = 6;
    var ResponsiveService = /** @class */ (function () {
        function ResponsiveService(cogSrv) {
            this.cog = cogSrv.merge('themeResponsive', {
                rules: {
                    1: { xs: 24 },
                    2: { xs: 24, sm: 12 },
                    3: { xs: 24, sm: 12, md: 8 },
                    4: { xs: 24, sm: 12, md: 8, lg: 6 },
                    5: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4 },
                    6: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 2 }
                }
            });
            if (Object.keys(this.cog.rules)
                .map(function (i) { return +i; })
                .some(function (i) { return i < 1 || i > REP_MAX; })) {
                throw new Error("[theme] the responseive rule index value range must be 1-" + REP_MAX);
            }
        }
        ResponsiveService.prototype.genCls = function (count) {
            var rule = this.cog.rules[count > REP_MAX ? REP_MAX : Math.max(count, 1)];
            var antColClass = 'ant-col';
            var clsMap = [antColClass + "-xs-" + rule.xs];
            if (rule.sm)
                clsMap.push(antColClass + "-sm-" + rule.sm);
            if (rule.md)
                clsMap.push(antColClass + "-md-" + rule.md);
            if (rule.lg)
                clsMap.push(antColClass + "-lg-" + rule.lg);
            if (rule.xl)
                clsMap.push(antColClass + "-xl-" + rule.xl);
            if (rule.xxl)
                clsMap.push(antColClass + "-xxl-" + rule.xxl);
            return clsMap;
        };
        return ResponsiveService;
    }());
    ResponsiveService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function ResponsiveService_Factory() { return new ResponsiveService(i0__namespace.ɵɵinject(i1__namespace.AlainConfigService)); }, token: ResponsiveService, providedIn: "root" });
    ResponsiveService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    ResponsiveService.ctorParameters = function () { return [
        { type: i1.AlainConfigService }
    ]; };

    var HTML_DIR = 'dir';
    var RTL_DIRECTION = 'direction';
    var RTL_NZ_COMPONENTS = ['modal', 'drawer', 'message', 'notification', 'image'];
    var RTL_DELON_COMPONENTS = ['loading', 'onboarding'];
    var LTR = 'ltr';
    var RTL = 'rtl';
    var RTLService = /** @class */ (function () {
        function RTLService(d, srv, nz, delon, platform, doc) {
            this.d = d;
            this.srv = srv;
            this.nz = nz;
            this.delon = delon;
            this.platform = platform;
            this.doc = doc;
            this._dir = LTR;
            this.dir = srv.layout.direction === RTL ? RTL : LTR;
        }
        Object.defineProperty(RTLService.prototype, "dir", {
            /**
             * Get or Set the current text direction
             *
             * 获取或设置当前文字方向
             */
            get: function () {
                return this._dir;
            },
            set: function (value) {
                var _this = this;
                this._dir = value;
                this.updateLibConfig();
                this.updateHtml();
                // Should be wait inited
                Promise.resolve().then(function () {
                    _this.d.value = value;
                    _this.d.change.emit(value);
                    _this.srv.setLayout(RTL_DIRECTION, value);
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RTLService.prototype, "nextDir", {
            /**
             * Get the next text direction
             *
             * 获取下一次文字方向
             */
            get: function () {
                return this.dir === LTR ? RTL : LTR;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RTLService.prototype, "change", {
            /**
             * Subscription change notification
             *
             * 订阅变更通知
             */
            get: function () {
                return this.srv.notify.pipe(operators.filter(function (w) { return w.name === RTL_DIRECTION; }), operators.map(function (v) { return v.value; }));
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Toggle text direction
         *
         * 切换文字方向
         */
        RTLService.prototype.toggle = function () {
            this.dir = this.nextDir;
        };
        RTLService.prototype.updateHtml = function () {
            if (!this.platform.isBrowser) {
                return;
            }
            var htmlEl = this.doc.querySelector('html');
            if (htmlEl) {
                var dir = this.dir;
                htmlEl.style.direction = dir;
                htmlEl.classList.remove(RTL, LTR);
                htmlEl.classList.add(dir);
                htmlEl.setAttribute(HTML_DIR, dir);
            }
        };
        RTLService.prototype.updateLibConfig = function () {
            var _this = this;
            RTL_NZ_COMPONENTS.forEach(function (name) {
                _this.nz.set(name, { nzDirection: _this.dir });
            });
            RTL_DELON_COMPONENTS.forEach(function (name) {
                _this.delon.set(name, { direction: _this.dir });
            });
        };
        return RTLService;
    }());
    RTLService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function RTLService_Factory() { return new RTLService(i0__namespace.ɵɵinject(i1__namespace$2.Directionality), i0__namespace.ɵɵinject(SettingsService), i0__namespace.ɵɵinject(i3__namespace.NzConfigService), i0__namespace.ɵɵinject(i1__namespace.AlainConfigService), i0__namespace.ɵɵinject(i1__namespace$1.Platform), i0__namespace.ɵɵinject(i6__namespace.DOCUMENT)); }, token: RTLService, providedIn: "root" });
    RTLService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    RTLService.ctorParameters = function () { return [
        { type: i1$2.Directionality },
        { type: SettingsService },
        { type: i3.NzConfigService },
        { type: i1.AlainConfigService },
        { type: i1$1.Platform },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i6.DOCUMENT,] }] }
    ]; };

    var TitleService = /** @class */ (function () {
        function TitleService(injector, title, menuSrv, i18nSrv, doc) {
            var _this = this;
            this.injector = injector;
            this.title = title;
            this.menuSrv = menuSrv;
            this.i18nSrv = i18nSrv;
            this.doc = doc;
            this._prefix = '';
            this._suffix = '';
            this._separator = ' - ';
            this._reverse = false;
            this.DELAY_TIME = 25;
            /** 设置默认标题名 */
            this.default = "Not Page Name";
            this.i18n$ = this.i18nSrv.change.pipe(operators.filter(function () { return !!_this.i18n$; })).subscribe(function () { return _this.setTitle(); });
        }
        Object.defineProperty(TitleService.prototype, "separator", {
            /** 设置分隔符 */
            set: function (value) {
                this._separator = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TitleService.prototype, "prefix", {
            /** 设置前缀 */
            set: function (value) {
                this._prefix = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TitleService.prototype, "suffix", {
            /** 设置后缀 */
            set: function (value) {
                this._suffix = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TitleService.prototype, "reverse", {
            /** 设置是否反转 */
            set: function (value) {
                this._reverse = value;
            },
            enumerable: false,
            configurable: true
        });
        TitleService.prototype.getByElement = function () {
            var el = (this.doc.querySelector('.alain-default__content-title h1') ||
                this.doc.querySelector('.page-header__title'));
            if (el) {
                var text_1 = '';
                el.childNodes.forEach(function (val) {
                    if (!text_1 && val.nodeType === 3) {
                        text_1 = val.textContent.trim();
                    }
                });
                return text_1 || el.firstChild.textContent.trim();
            }
            return '';
        };
        TitleService.prototype.getByRoute = function () {
            var next = this.injector.get(router.ActivatedRoute);
            while (next.firstChild)
                next = next.firstChild;
            var data = (next.snapshot && next.snapshot.data) || {};
            if (data.titleI18n && this.i18nSrv)
                data.title = this.i18nSrv.fanyi(data.titleI18n);
            return data.title;
        };
        TitleService.prototype.getByMenu = function () {
            var menus = this.menuSrv.getPathByUrl(this.injector.get(router.Router).url);
            if (!menus || menus.length <= 0)
                return '';
            var item = menus[menus.length - 1];
            var title;
            if (item.i18n && this.i18nSrv)
                title = this.i18nSrv.fanyi(item.i18n);
            return title || item.text;
        };
        TitleService.prototype._setTitle = function (title) {
            if (!title) {
                title = this.getByRoute() || this.getByMenu() || this.getByElement() || this.default;
            }
            if (title && !Array.isArray(title)) {
                title = [title];
            }
            var newTitles = [];
            if (this._prefix) {
                newTitles.push(this._prefix);
            }
            newTitles.push.apply(newTitles, __spreadArray([], __read(title)));
            if (this._suffix) {
                newTitles.push(this._suffix);
            }
            if (this._reverse) {
                newTitles = newTitles.reverse();
            }
            this.title.setTitle(newTitles.join(this._separator));
        };
        /**
         * Set the document title, will be delay `25ms`, pls refer to [#1261](https://github.com/ng-alain/ng-alain/issues/1261)
         */
        TitleService.prototype.setTitle = function (title) {
            var _this = this;
            setTimeout(function () { return _this._setTitle(title); }, this.DELAY_TIME);
        };
        /**
         * Set i18n key of the document title
         */
        TitleService.prototype.setTitleByI18n = function (key, params) {
            this.setTitle(this.i18nSrv.fanyi(key, params));
        };
        TitleService.prototype.ngOnDestroy = function () {
            this.i18n$.unsubscribe();
        };
        return TitleService;
    }());
    TitleService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function TitleService_Factory() { return new TitleService(i0__namespace.ɵɵinject(i0__namespace.INJECTOR), i0__namespace.ɵɵinject(i1__namespace$3.Title), i0__namespace.ɵɵinject(MenuService), i0__namespace.ɵɵinject(ALAIN_I18N_TOKEN, 8), i0__namespace.ɵɵinject(i6__namespace.DOCUMENT)); }, token: TitleService, providedIn: "root" });
    TitleService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    TitleService.ctorParameters = function () { return [
        { type: i0.Injector },
        { type: i1$3.Title },
        { type: MenuService },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i6.DOCUMENT,] }] }
    ]; };

    var DELON_LOCALE = new i0.InjectionToken('delon-locale');

    var zhCN = {
        abbr: 'zh-CN',
        exception: {
            403: '抱歉，你无权访问该页面',
            404: '抱歉，你访问的页面不存在',
            500: '抱歉，服务器出错了',
            backToHome: '返回首页'
        },
        noticeIcon: {
            emptyText: '暂无数据',
            clearText: '清空'
        },
        reuseTab: {
            close: '关闭标签',
            closeOther: '关闭其它标签',
            closeRight: '关闭右侧标签',
            refresh: '刷新'
        },
        tagSelect: {
            expand: '展开',
            collapse: '收起'
        },
        miniProgress: {
            target: '目标值：'
        },
        st: {
            total: '共 {{total}} 条',
            filterConfirm: '确定',
            filterReset: '重置'
        },
        sf: {
            submit: '提交',
            reset: '重置',
            search: '搜索',
            edit: '保存',
            addText: '添加',
            removeText: '移除',
            checkAllText: '全选',
            error: {
                'false schema': "\u5E03\u5C14\u6A21\u5F0F\u51FA\u9519",
                $ref: "\u65E0\u6CD5\u627E\u5230\u5F15\u7528{ref}",
                additionalItems: "\u4E0D\u5141\u8BB8\u8D85\u8FC7{limit}\u4E2A\u5143\u7D20",
                additionalProperties: "\u4E0D\u5141\u8BB8\u6709\u989D\u5916\u7684\u5C5E\u6027",
                anyOf: "\u6570\u636E\u5E94\u4E3A anyOf \u6240\u6307\u5B9A\u7684\u5176\u4E2D\u4E00\u4E2A",
                dependencies: "\u5E94\u5F53\u62E5\u6709\u5C5E\u6027{property}\u7684\u4F9D\u8D56\u5C5E\u6027{deps}",
                enum: "\u5E94\u5F53\u662F\u9884\u8BBE\u5B9A\u7684\u679A\u4E3E\u503C\u4E4B\u4E00",
                format: "\u683C\u5F0F\u4E0D\u6B63\u786E",
                type: "\u7C7B\u578B\u5E94\u5F53\u662F {type}",
                required: "\u5FC5\u586B\u9879",
                maxLength: "\u81F3\u591A {limit} \u4E2A\u5B57\u7B26",
                minLength: "\u81F3\u5C11 {limit} \u4E2A\u5B57\u7B26\u4EE5\u4E0A",
                minimum: "\u5FC5\u987B {comparison}{limit}",
                formatMinimum: "\u5FC5\u987B {comparison}{limit}",
                maximum: "\u5FC5\u987B {comparison}{limit}",
                formatMaximum: "\u5FC5\u987B {comparison}{limit}",
                maxItems: "\u4E0D\u5E94\u591A\u4E8E {limit} \u4E2A\u9879",
                minItems: "\u4E0D\u5E94\u5C11\u4E8E {limit} \u4E2A\u9879",
                maxProperties: "\u4E0D\u5E94\u591A\u4E8E {limit} \u4E2A\u5C5E\u6027",
                minProperties: "\u4E0D\u5E94\u5C11\u4E8E {limit} \u4E2A\u5C5E\u6027",
                multipleOf: "\u5E94\u5F53\u662F {multipleOf} \u7684\u6574\u6570\u500D",
                not: "\u4E0D\u5E94\u5F53\u5339\u914D \"not\" schema",
                oneOf: "\u53EA\u80FD\u5339\u914D\u4E00\u4E2A \"oneOf\" \u4E2D\u7684 schema",
                pattern: "\u6570\u636E\u683C\u5F0F\u4E0D\u6B63\u786E",
                uniqueItems: "\u4E0D\u5E94\u5F53\u542B\u6709\u91CD\u590D\u9879 (\u7B2C {j} \u9879\u4E0E\u7B2C {i} \u9879\u662F\u91CD\u590D\u7684)",
                custom: "\u683C\u5F0F\u4E0D\u6B63\u786E",
                propertyNames: "\u5C5E\u6027\u540D \"{propertyName}\" \u65E0\u6548",
                patternRequired: "\u5E94\u5F53\u6709\u5C5E\u6027\u5339\u914D\u6A21\u5F0F {missingPattern}",
                switch: "\u7531\u4E8E {caseIndex} \u5931\u8D25\uFF0C\u672A\u901A\u8FC7 \"switch\" \u6821\u9A8C",
                const: "\u5E94\u5F53\u7B49\u4E8E\u5E38\u91CF",
                contains: "\u5E94\u5F53\u5305\u542B\u4E00\u4E2A\u6709\u6548\u9879",
                formatExclusiveMaximum: "formatExclusiveMaximum \u5E94\u5F53\u662F\u5E03\u5C14\u503C",
                formatExclusiveMinimum: "formatExclusiveMinimum \u5E94\u5F53\u662F\u5E03\u5C14\u503C",
                if: "\u5E94\u5F53\u5339\u914D\u6A21\u5F0F \"{failingKeyword}\""
            }
        },
        onboarding: {
            skip: "\u8DF3\u8FC7",
            prev: "\u4E0A\u4E00\u9879",
            next: "\u4E0B\u4E00\u9879",
            done: "\u5B8C\u6210"
        }
    };

    var DelonLocaleService = /** @class */ (function () {
        function DelonLocaleService(locale) {
            this._locale = zhCN;
            this.change$ = new rxjs.BehaviorSubject(this._locale);
            this.setLocale(locale || zhCN);
        }
        Object.defineProperty(DelonLocaleService.prototype, "change", {
            get: function () {
                return this.change$.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        DelonLocaleService.prototype.setLocale = function (locale) {
            if (this._locale && this._locale.abbr === locale.abbr) {
                return;
            }
            this._locale = locale;
            this.change$.next(locale);
        };
        Object.defineProperty(DelonLocaleService.prototype, "locale", {
            get: function () {
                return this._locale;
            },
            enumerable: false,
            configurable: true
        });
        DelonLocaleService.prototype.getData = function (path) {
            return (this._locale[path] || {});
        };
        return DelonLocaleService;
    }());
    DelonLocaleService.decorators = [
        { type: i0.Injectable }
    ];
    DelonLocaleService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [DELON_LOCALE,] }] }
    ]; };
    function DELON_LOCALE_SERVICE_PROVIDER_FACTORY(exist, locale) {
        return exist || new DelonLocaleService(locale);
    }
    var DELON_LOCALE_SERVICE_PROVIDER = {
        provide: DelonLocaleService,
        useFactory: DELON_LOCALE_SERVICE_PROVIDER_FACTORY,
        deps: [[new i0.Optional(), new i0.SkipSelf(), DelonLocaleService], DELON_LOCALE]
    };

    var ɵ0$1 = zhCN;
    var DelonLocaleModule = /** @class */ (function () {
        function DelonLocaleModule() {
        }
        return DelonLocaleModule;
    }());
    DelonLocaleModule.decorators = [
        { type: i0.NgModule, args: [{
                    providers: [{ provide: DELON_LOCALE, useValue: ɵ0$1 }, DELON_LOCALE_SERVICE_PROVIDER]
                },] }
    ];

    var enUS = {
        abbr: 'en-US',
        exception: {
            403: "Sorry, you don't have access to this page",
            404: "Sorry, the page you visited does not exist",
            500: "Sorry, the server is reporting an error",
            backToHome: 'Back To Home'
        },
        noticeIcon: {
            emptyText: 'No data',
            clearText: 'Clear'
        },
        reuseTab: {
            close: 'Close tab',
            closeOther: 'Close other tabs',
            closeRight: 'Close tabs to right',
            refresh: 'Refresh'
        },
        tagSelect: {
            expand: 'Expand',
            collapse: 'Collapse'
        },
        miniProgress: {
            target: 'Target: '
        },
        st: {
            total: '{{range[0]}} - {{range[1]}} of {{total}}',
            filterConfirm: 'OK',
            filterReset: 'Reset'
        },
        sf: {
            submit: 'Submit',
            reset: 'Reset',
            search: 'Search',
            edit: 'Save',
            addText: 'Add',
            removeText: 'Remove',
            checkAllText: 'Check all',
            error: {
                'false schema': "Boolean schema is false",
                $ref: "Can't resolve reference {ref}",
                additionalItems: "Should not have more than {limit} item",
                additionalProperties: "Should not have additional properties",
                anyOf: "Should match some schema in \"anyOf\"",
                dependencies: "should have property {deps} when property {property} is present",
                enum: "Should be equal to one of predefined values",
                format: "Should match format \"{format}\"",
                type: "Should be {type}",
                required: "Required",
                maxLength: "Should not be longer than {limit} character",
                minLength: "Should not be shorter than {limit} character",
                minimum: "Should be {comparison} {limit}",
                formatMinimum: "Should be {comparison} {limit}",
                maximum: "Should be {comparison} {limit}",
                formatMaximum: "Should be {comparison} {limit}",
                maxItems: "Should not have more than {limit} item",
                minItems: "Should not have less than {limit} item",
                maxProperties: "Should not have more than {limit} property",
                minProperties: "Should not have less than {limit} property",
                multipleOf: "Should be a multiple of {multipleOf}",
                not: "Should not be valid according to schema in \"not\"",
                oneOf: "Should match exactly one schema in \"oneOf\"",
                pattern: "Should match pattern \"{pattern}\"",
                uniqueItems: "Should not have duplicate items (items ## {j} and {i} are identical)",
                custom: "Should match format",
                propertyNames: "Property name \"{propertyName}\" is invalid",
                patternRequired: "Should have property matching pattern \"{missingPattern}\"",
                switch: "Should pass \"switch\" keyword validation, case {caseIndex} fails",
                const: "Should be equal to constant",
                contains: "Should contain a valid item",
                formatExclusiveMaximum: "formatExclusiveMaximum should be boolean",
                formatExclusiveMinimum: "formatExclusiveMinimum should be boolean",
                if: "Should match \"{failingKeyword}\" schema"
            }
        },
        onboarding: {
            skip: "Skip",
            prev: "Prev",
            next: "Next",
            done: "Done"
        }
    };

    var zhTW = {
        abbr: 'zh-TW',
        exception: {
            403: '抱歉，你無權訪問該頁麵',
            404: '抱歉，你訪問的頁麵不存在',
            500: '抱歉，服務器出錯了',
            backToHome: '返回首頁'
        },
        noticeIcon: {
            emptyText: '暫無數據',
            clearText: '清空'
        },
        reuseTab: {
            close: '關閉標簽',
            closeOther: '關閉其它標簽',
            closeRight: '關閉右側標簽',
            refresh: '刷新'
        },
        tagSelect: {
            expand: '展開',
            collapse: '收起'
        },
        miniProgress: {
            target: '目標值：'
        },
        st: {
            total: '共 {{total}} 條',
            filterConfirm: '確定',
            filterReset: '重置'
        },
        sf: {
            submit: '提交',
            reset: '重置',
            search: '搜索',
            edit: '保存',
            addText: '添加',
            removeText: '移除',
            checkAllText: '全選',
            error: {
                'false schema': "\u4F48\u723E\u6A21\u5F0F\u51FA\u932F",
                $ref: "\u7121\u6CD5\u627E\u5230\u5F15\u7528{ref}",
                additionalItems: "\u4E0D\u5141\u8A31\u8D85\u904E{ref}",
                additionalProperties: "\u4E0D\u5141\u8A31\u6709\u984D\u5916\u7684\u5C6C\u6027",
                anyOf: "\u6578\u64DA\u61C9\u70BA anyOf \u6240\u6307\u5B9A\u7684\u5176\u4E2D\u4E00\u500B",
                dependencies: "\u61C9\u7576\u64C1\u6709\u5C6C\u6027{property}\u7684\u4F9D\u8CF4\u5C6C\u6027{deps}",
                enum: "\u61C9\u7576\u662F\u9810\u8A2D\u5B9A\u7684\u679A\u8209\u503C\u4E4B\u4E00",
                format: "\u683C\u5F0F\u4E0D\u6B63\u78BA",
                type: "\u985E\u578B\u61C9\u7576\u662F {type}",
                required: "\u5FC5\u586B\u9805",
                maxLength: "\u81F3\u591A {limit} \u500B\u5B57\u7B26",
                minLength: "\u81F3\u5C11 {limit} \u500B\u5B57\u7B26\u4EE5\u4E0A",
                minimum: "\u5FC5\u9808 {comparison}{limit}",
                formatMinimum: "\u5FC5\u9808 {comparison}{limit}",
                maximum: "\u5FC5\u9808 {comparison}{limit}",
                formatMaximum: "\u5FC5\u9808 {comparison}{limit}",
                maxItems: "\u4E0D\u61C9\u591A\u65BC {limit} \u500B\u9805",
                minItems: "\u4E0D\u61C9\u5C11\u65BC {limit} \u500B\u9805",
                maxProperties: "\u4E0D\u61C9\u591A\u65BC {limit} \u500B\u5C6C\u6027",
                minProperties: "\u4E0D\u61C9\u5C11\u65BC {limit} \u500B\u5C6C\u6027",
                multipleOf: "\u61C9\u7576\u662F {multipleOf} \u7684\u6574\u6578\u500D",
                not: "\u4E0D\u61C9\u7576\u5339\u914D \"not\" schema",
                oneOf: "\u96BB\u80FD\u5339\u914D\u4E00\u500B \"oneOf\" \u4E2D\u7684 schema",
                pattern: "\u6578\u64DA\u683C\u5F0F\u4E0D\u6B63\u78BA",
                uniqueItems: "\u4E0D\u61C9\u7576\u542B\u6709\u91CD\u8907\u9805 (\u7B2C {j} \u9805\u8207\u7B2C {i} \u9805\u662F\u91CD\u8907\u7684)",
                custom: "\u683C\u5F0F\u4E0D\u6B63\u78BA",
                propertyNames: "\u5C6C\u6027\u540D \"{propertyName}\" \u7121\u6548",
                patternRequired: "\u61C9\u7576\u6709\u5C6C\u6027\u5339\u914D\u6A21\u5F0F {missingPattern}",
                switch: "\u7531\u65BC {caseIndex} \u5931\u6557\uFF0C\u672A\u901A\u904E \"switch\" \u6821\u9A57",
                const: "\u61C9\u7576\u7B49\u65BC\u5E38\u91CF",
                contains: "\u61C9\u7576\u5305\u542B\u4E00\u500B\u6709\u6548\u9805",
                formatExclusiveMaximum: "formatExclusiveMaximum \u61C9\u7576\u662F\u4F48\u723E\u503C",
                formatExclusiveMinimum: "formatExclusiveMinimum \u61C9\u7576\u662F\u4F48\u723E\u503C",
                if: "\u61C9\u7576\u5339\u914D\u6A21\u5F0F \"{failingKeyword}\""
            }
        },
        onboarding: {
            skip: "\u8DF3\u904E",
            prev: "\u4E0A\u4E00\u9805",
            next: "\u4E0B\u4E00\u9805",
            done: "\u5B8C\u6210"
        }
    };

    var trTR = {
        abbr: 'tr-TR',
        exception: {
            403: "\u00DCzg\u00FCn\u00FCz, bu sayfaya eri\u015Fiminiz yok",
            404: "Maalesef bu sayfa mevcut de\u011Fil",
            500: "\u00DCzg\u00FCn\u00FCz, sunucu hatas\u0131",
            backToHome: "Ana Sayfa'ya geri d\u00F6n"
        },
        noticeIcon: {
            emptyText: 'Veri yok',
            clearText: 'Temiz'
        },
        reuseTab: {
            close: 'Sekmeyi Kapat',
            closeOther: 'Diğer sekmeleri kapat',
            closeRight: 'Sağdaki sekmeleri kapat',
            refresh: 'täzele'
        },
        tagSelect: {
            expand: 'Genişlet',
            collapse: 'Daralt'
        },
        miniProgress: {
            target: 'Hedef: '
        },
        st: {
            total: '{{range[0]}} ile {{range[1]}} arasında {{total}}',
            filterConfirm: 'Tamam',
            filterReset: 'Sıfırla'
        },
        sf: {
            submit: 'Gönder',
            reset: 'Sıfırla',
            search: 'Ara',
            edit: 'Kaydet',
            addText: 'Ekle',
            removeText: 'Kaldır',
            checkAllText: 'Tümünü kontrol et',
            error: {
                'false schema': "Boolean schema is false",
                $ref: "Can't resolve reference {ref}",
                additionalItems: "Should not have more than {limit} item",
                additionalProperties: "Should not have additional properties",
                anyOf: "Should match some schema in \"anyOf\"",
                dependencies: "should have property {deps} when property {property} is present",
                enum: "Should be equal to one of predefined values",
                format: "Should match format \"{format}\"",
                type: "Should be {type}",
                required: "Required",
                maxLength: "Should not be longer than {limit} character",
                minLength: "Should not be shorter than {limit} character",
                minimum: "Should be {comparison} {limit}",
                formatMinimum: "Should be {comparison} {limit}",
                maximum: "Should be {comparison} {limit}",
                formatMaximum: "Should be {comparison} {limit}",
                maxItems: "Should not have more than {limit} item",
                minItems: "Should not have less than {limit} item",
                maxProperties: "Should not have more than {limit} property",
                minProperties: "Should not have less than {limit} property",
                multipleOf: "Should be a multiple of {multipleOf}",
                not: "Should not be valid according to schema in \"not\"",
                oneOf: "Should match exactly one schema in \"oneOf\"",
                pattern: "Should match pattern \"{pattern}\"",
                uniqueItems: "Should not have duplicate items (items ## {j} and {i} are identical)",
                custom: "Should match format",
                propertyNames: "Property name \"{propertyName}\" is invalid",
                patternRequired: "Should have property matching pattern \"{missingPattern}\"",
                switch: "Should pass \"switch\" keyword validation, case {caseIndex} fails",
                const: "Should be equal to constant",
                contains: "Should contain a valid item",
                formatExclusiveMaximum: "formatExclusiveMaximum should be boolean",
                formatExclusiveMinimum: "formatExclusiveMinimum should be boolean",
                if: "Should match \"{failingKeyword}\" schema"
            }
        },
        onboarding: {
            skip: "Atla",
            prev: "\u00D6nceki",
            next: "Sonraki",
            done: "Bitti"
        }
    };

    var plPL = {
        abbr: 'pl-PL',
        exception: {
            403: "Niestety, nie masz uprawnie\u0144 do tej strony",
            404: "Niestety, ta strona nie istnieje",
            500: "Niestety, b\u0142\u0105d serwera",
            backToHome: 'Powróć do strony głównej'
        },
        noticeIcon: {
            emptyText: 'Brak danych',
            clearText: 'Wyczyść'
        },
        reuseTab: {
            close: 'Zamknij kartę',
            closeOther: 'Zamknij inne karty',
            closeRight: 'Zamknij karty po prawej',
            refresh: 'Refresh'
        },
        tagSelect: {
            expand: 'Rozszerz',
            collapse: 'Zmniejsz'
        },
        miniProgress: {
            target: 'Cel: '
        },
        st: {
            total: '{{range[0]}} - {{range[1]}} z {{total}}',
            filterConfirm: 'OK',
            filterReset: 'Wyczyść'
        },
        sf: {
            submit: 'Wyślij',
            reset: 'Resetuj',
            search: 'Szukaj',
            edit: 'Zapisz',
            addText: 'Dodaj',
            removeText: 'Usuń',
            checkAllText: 'Zaznacz wszystkie',
            error: {
                'false schema': "Boolean schema is false",
                $ref: "Can't resolve reference {ref}",
                additionalItems: "Should not have more than {limit} item",
                additionalProperties: "Should not have additional properties",
                anyOf: "Should match some schema in \"anyOf\"",
                dependencies: "should have property {deps} when property {property} is present",
                enum: "Should be equal to one of predefined values",
                format: "Should match format \"{format}\"",
                type: "Should be {type}",
                required: "Required",
                maxLength: "Should not be longer than {limit} character",
                minLength: "Should not be shorter than {limit} character",
                minimum: "Should be {comparison} {limit}",
                formatMinimum: "Should be {comparison} {limit}",
                maximum: "Should be {comparison} {limit}",
                formatMaximum: "Should be {comparison} {limit}",
                maxItems: "Should not have more than {limit} item",
                minItems: "Should not have less than {limit} item",
                maxProperties: "Should not have more than {limit} property",
                minProperties: "Should not have less than {limit} property",
                multipleOf: "Should be a multiple of {multipleOf}",
                not: "Should not be valid according to schema in \"not\"",
                oneOf: "Should match exactly one schema in \"oneOf\"",
                pattern: "Should match pattern \"{pattern}\"",
                uniqueItems: "Should not have duplicate items (items ## {j} and {i} are identical)",
                custom: "Should match format",
                propertyNames: "Property name \"{propertyName}\" is invalid",
                patternRequired: "Should have property matching pattern \"{missingPattern}\"",
                switch: "Should pass \"switch\" keyword validation, case {caseIndex} fails",
                const: "Should be equal to constant",
                contains: "Should contain a valid item",
                formatExclusiveMaximum: "formatExclusiveMaximum should be boolean",
                formatExclusiveMinimum: "formatExclusiveMinimum should be boolean",
                if: "Should match \"{failingKeyword}\" schema"
            }
        },
        onboarding: {
            skip: "Pomin\u0105\u0107",
            prev: "Poprzedni",
            next: "Kolejny",
            done: "Gotowe"
        }
    };

    var elGR = {
        abbr: 'el-GR',
        exception: {
            403: "\u039B\u03C5\u03C0\u03BF\u03CD\u03BC\u03B1\u03C3\u03C4\u03B5, \u03B4\u03B5\u03BD \u03AD\u03C7\u03B5\u03C4\u03B5 \u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7 \u03C3\u03B5 \u03B1\u03C5\u03C4\u03AE\u03BD \u03C4\u03B7 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1",
            404: "\u039B\u03C5\u03C0\u03BF\u03CD\u03BC\u03B1\u03C3\u03C4\u03B5, \u03B7 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1 \u03B1\u03C5\u03C4\u03AE \u03B4\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5",
            500: "\u039B\u03C5\u03C0\u03BF\u03CD\u03BC\u03B1\u03C3\u03C4\u03B5, \u03C3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03B4\u03B9\u03B1\u03BA\u03BF\u03BC\u03B9\u03C3\u03C4\u03AE",
            backToHome: 'Επιστροφή στην αρχική σελίδα'
        },
        noticeIcon: {
            emptyText: 'Δεν υπάρχουν δεδομένα',
            clearText: 'Καθαρισμός'
        },
        reuseTab: {
            close: 'Κλείσιμο καρτέλας',
            closeOther: 'Κλείσιμο των άλλων καρτέλων',
            closeRight: 'Κλείσιμο των καρτελών δεξιά',
            refresh: 'Ανανέωση'
        },
        tagSelect: {
            expand: 'Επέκταση',
            collapse: 'Σύμπτυξη'
        },
        miniProgress: {
            target: 'Στόχος: '
        },
        st: {
            total: '{{range[0]}} - {{range[1]}} από {{total}}',
            filterConfirm: 'ΟΚ',
            filterReset: 'Επαναφορά'
        },
        sf: {
            submit: 'Υποβολή',
            reset: 'Επαναφορά',
            search: 'Αναζήτηση',
            edit: 'Αποθήκευση',
            addText: 'Προσθήκη',
            removeText: 'Αφαίρεση',
            checkAllText: 'Επιλογή όλων',
            error: {
                'false schema': "\u0397 \u03B4\u03C5\u03B1\u03B4\u03B9\u03BA\u03AE \u03B4\u03BF\u03BC\u03AE \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C8\u03B5\u03C5\u03B4\u03AE\u03C2",
                $ref: "\u0394\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B4\u03C5\u03BD\u03B1\u03C4\u03AE \u03B7 \u03B5\u03C0\u03AF\u03BB\u03C5\u03C3\u03B7 \u03C4\u03B7\u03C2 \u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2 {ref}",
                additionalItems: "\u0394\u03B5\u03BD \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B1 \u03B1\u03C0\u03CC {limit} \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1",
                additionalProperties: "\u0394\u03B5\u03BD \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 \u03B5\u03C0\u03B9\u03C0\u03BB\u03AD\u03BF\u03BD \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03B7\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC",
                anyOf: "\u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03BC\u03B5 \u03BA\u03AC\u03C0\u03BF\u03B9\u03B1 \u03B1\u03C0\u03BF \u03C4\u03B9\u03C2 \u03B4\u03BF\u03BC\u03AD\u03C2 \u03C3\u03C4\u03BF \"anyOf\"",
                dependencies: "\u03C4\u03B1 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03B7\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC {deps} \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B1\u03C0\u03B1\u03C1\u03B1\u03AF\u03C4\u03B7\u03C4\u03B1, \u03CC\u03C4\u03B1\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03C4\u03BF \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03B7\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC {property}",
                enum: "\u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03AF\u03C3\u03BF \u03BC\u03B5 \u03BC\u03AF\u03B1 \u03B1\u03C0\u03CC \u03C4\u03B9\u03C2 \u03C0\u03C1\u03BF\u03BA\u03B1\u03B8\u03BF\u03C1\u03B9\u03C3\u03BC\u03AD\u03BD\u03B5\u03C2 \u03C4\u03B9\u03BC\u03AD\u03C2",
                format: "\u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 \u03C4\u03B7\u03BD \u03BC\u03BF\u03C1\u03C6\u03AE \"{format}\"",
                type: "\u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 {type}",
                required: "\u0391\u03C0\u03B1\u03B9\u03C4\u03B5\u03AF\u03C4\u03B1\u03B9",
                maxLength: "\u0394\u03B5\u03BD \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BC\u03B5\u03B3\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC {limit} \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2",
                minLength: "\u0394\u03B5\u03BD \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BC\u03B9\u03BA\u03C1\u03CC\u03C4\u03B5\u03C1\u03BF \u03B1\u03C0\u03CC {limit} \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2",
                minimum: "\u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 {comparison} {limit}",
                formatMinimum: "\u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 {comparison} {limit}",
                maximum: "\u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 {comparison} {limit}",
                formatMaximum: "\u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 {comparison} {limit}",
                maxItems: "\u0394\u03B5\u03BD \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B1 \u03B1\u03C0\u03CC {limit} \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1",
                minItems: "\u0394\u03B5\u03BD \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 \u03BB\u03B9\u03B3\u03CC\u03C4\u03B5\u03C1\u03B1 \u03B1\u03C0\u03CC {limit} \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1",
                maxProperties: "\u0394\u03B5\u03BD \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 \u03C0\u03B5\u03C1\u03B9\u03C3\u03C3\u03CC\u03C4\u03B5\u03C1\u03B1 \u03B1\u03C0\u03CC {limit} \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03B7\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC",
                minProperties: "\u0394\u03B5\u03BD \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 \u03BB\u03B9\u03B3\u03CC\u03C4\u03B5\u03C1\u03B1 \u03B1\u03C0\u03CC {limit} \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03B7\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC",
                multipleOf: "\u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AC\u03C3\u03B9\u03BF \u03C4\u03BF\u03C5 {multipleOf}",
                not: "\u0394\u03B5\u03BD \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B5\u03B3\u03BA\u03CD\u03C1\u03BF, \u03C3\u03CD\u03BC\u03C6\u03C9\u03BD\u03B1 \u03BC\u03B5 \u03C4\u03B7\u03BD \u03B4\u03BF\u03BC\u03AE \u03C3\u03C4\u03BF \"not\"",
                oneOf: "\u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03BC\u03B5 \u03B1\u03BA\u03C1\u03B9\u03B2\u03CE\u03C2 \u03BC\u03B9\u03B1 \u03B1\u03C0\u03BF \u03C4\u03B9\u03C2 \u03B4\u03BF\u03BC\u03AD\u03C2 \u03C3\u03C4\u03BF \"oneOf\"",
                pattern: "\u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03BC\u03B5 \u03C4\u03BF \u03C0\u03C1\u03CC\u03C4\u03C5\u03C0\u03BF \"{pattern}\"",
                uniqueItems: "\u03A4\u03B1 \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1 \u03B4\u03B5\u03BD \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03C0\u03B1\u03BD\u03B1\u03BB\u03B1\u03BC\u03B2\u03AC\u03BD\u03BF\u03BD\u03C4\u03B1\u03B9 (\u03C4\u03B1 \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1 ## {j} \u03BA\u03B1\u03B9 {i} \u03B5\u03AF\u03BD\u03B1\u03B9 \u03AF\u03B4\u03B9\u03B1)",
                custom: "\u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 \u03C4\u03B7\u03BD \u03BC\u03BF\u03C1\u03C6\u03AE",
                propertyNames: "\u03A4\u03BF \u03CC\u03BD\u03BF\u03BC\u03B1 \u03C4\u03BF\u03C5 \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03B7\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03BF\u03CD \"{propertyName}\" \u03B4\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF",
                patternRequired: "\u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03C4\u03BF \u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03B7\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC \u03B1\u03BD\u03C4\u03B9\u03C0\u03B1\u03C1\u03B1\u03B2\u03BF\u03BB\u03AE\u03C2 \u03C0\u03C1\u03BF\u03C4\u03CD\u03C0\u03BF\u03C5 \"{missingPattern}\"",
                switch: "\u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C0\u03B5\u03C1\u03AC\u03C3\u03B5\u03B9 \u03BF \u03AD\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2 \u03B5\u03B3\u03BA\u03C5\u03C1\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2 \u03C4\u03B7\u03C2 \u03BB\u03AD\u03BE\u03B7\u03C2-\u03BA\u03BB\u03B5\u03B9\u03B4\u03B9\u03BF\u03CD \u03BC\u03B5 \u03C4\u03B7\u03BD \u03C7\u03C1\u03AE\u03C3\u03B7 \u03C4\u03B7\u03C2 \"switch\", \u03B7 \u03C0\u03B5\u03C1\u03AF\u03C0\u03C4\u03C9\u03C3\u03B7 {caseIndex} \u03B1\u03C0\u03BF\u03C4\u03C5\u03B3\u03C7\u03AC\u03BD\u03B5\u03B9",
                const: "\u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03AF\u03C3\u03BF \u03BC\u03B5 \u03C3\u03C4\u03B1\u03B8\u03B5\u03C1\u03AC",
                contains: "\u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AD\u03C7\u03B5\u03B9 \u03BA\u03AC\u03C0\u03BF\u03B9\u03BF \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03BF",
                formatExclusiveMaximum: "formatExclusiveMaximum \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 boolean",
                formatExclusiveMinimum: "formatExclusiveMinimum \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 boolean",
                if: "\u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03C3\u03C4\u03B7\u03BD \u03B4\u03BF\u03BC\u03AE \"{failingKeyword}\""
            }
        },
        onboarding: {
            skip: "\u03A0\u03B1\u03C1\u03B1\u03BB\u03B5\u03AF\u03C0\u03C9",
            prev: "\u03A0\u03C1\u03BF\u03B7\u03B3",
            next: "\u0395\u03C0\u03CC\u03BC\u03B5\u03BD\u03BF",
            done: "\u039F\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5"
        }
    };

    var koKR = {
        abbr: 'ko-KR',
        exception: {
            403: "\uC8C4\uC1A1\uD569\uB2C8\uB2E4.\uC774 \uD398\uC774\uC9C0\uC5D0 \uC561\uC138\uC2A4 \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",
            404: "\uC8C4\uC1A1\uD569\uB2C8\uB2E4. \uD574\uB2F9 \uD398\uC774\uC9C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",
            500: "\uC8C4\uC1A1\uD569\uB2C8\uB2E4, \uC11C\uBC84 \uC624\uB958\uAC00 \uC788\uC2B5\uB2C8\uB2E4.",
            backToHome: '홈으로 돌아갑니다.'
        },
        noticeIcon: {
            emptyText: '데이터 없음',
            clearText: '지우기'
        },
        reuseTab: {
            close: '탭 닫기',
            closeOther: '다른 탭 닫기',
            closeRight: '오른쪽 탭 닫기',
            refresh: '새롭게 하다'
        },
        tagSelect: {
            expand: '펼치기',
            collapse: '접기'
        },
        miniProgress: {
            target: '대상: '
        },
        st: {
            total: '전체 {{total}}건',
            filterConfirm: '확인',
            filterReset: '초기화'
        },
        sf: {
            submit: '제출',
            reset: '재설정',
            search: '검색',
            edit: '저장',
            addText: '추가',
            removeText: '제거',
            checkAllText: '모두 확인',
            error: {
                'false schema': "Boolean schema is false",
                $ref: "Can't resolve reference {ref}",
                additionalItems: "Should not have more than {limit} item",
                additionalProperties: "Should not have additional properties",
                anyOf: "Should match some schema in \"anyOf\"",
                dependencies: "should have property {deps} when property {property} is present",
                enum: "Should be equal to one of predefined values",
                format: "Should match format \"{format}\"",
                type: "Should be {type}",
                required: "Required",
                maxLength: "Should not be longer than {limit} character",
                minLength: "Should not be shorter than {limit} character",
                minimum: "Should be {comparison} {limit}",
                formatMinimum: "Should be {comparison} {limit}",
                maximum: "Should be {comparison} {limit}",
                formatMaximum: "Should be {comparison} {limit}",
                maxItems: "Should not have more than {limit} item",
                minItems: "Should not have less than {limit} item",
                maxProperties: "Should not have more than {limit} property",
                minProperties: "Should not have less than {limit} property",
                multipleOf: "Should be a multiple of {multipleOf}",
                not: "Should not be valid according to schema in \"not\"",
                oneOf: "Should match exactly one schema in \"oneOf\"",
                pattern: "Should match pattern \"{pattern}\"",
                uniqueItems: "Should not have duplicate items (items ## {j} and {i} are identical)",
                custom: "Should match format",
                propertyNames: "Property name \"{propertyName}\" is invalid",
                patternRequired: "Should have property matching pattern \"{missingPattern}\"",
                switch: "Should pass \"switch\" keyword validation, case {caseIndex} fails",
                const: "Should be equal to constant",
                contains: "Should contain a valid item",
                formatExclusiveMaximum: "formatExclusiveMaximum should be boolean",
                formatExclusiveMinimum: "formatExclusiveMinimum should be boolean",
                if: "Should match \"{failingKeyword}\" schema"
            }
        },
        onboarding: {
            skip: "\uAC74\uB108 \uB6F0\uAE30",
            prev: "\uC774\uC804",
            next: "\uB2E4\uC74C",
            done: "\uB05D\uB09C"
        }
    };

    var hrHR = {
        abbr: 'hr-HR',
        exception: {
            403: "Na\u017Ealost, nemate pristup ovoj lokaciji",
            404: "Na\u017Ealost, lokacija ne postoji",
            500: "Na\u017Ealost, server je javio pogre\u0161ku",
            backToHome: 'Nazad na početnu stranicu'
        },
        noticeIcon: {
            emptyText: 'Nema podataka',
            clearText: 'Obriši'
        },
        reuseTab: {
            close: 'Zatvori karticu',
            closeOther: 'Zatvori druge kartice',
            closeRight: 'Zatvori kartice desno',
            refresh: 'Refresh'
        },
        tagSelect: {
            expand: 'Proširi',
            collapse: 'Skupi'
        },
        miniProgress: {
            target: 'Cilj: '
        },
        st: {
            total: '{{range[0]}} - {{range[1]}} od {{total}}',
            filterConfirm: 'U redu',
            filterReset: 'Poništi'
        },
        sf: {
            submit: 'Pošalji',
            reset: 'Poništi',
            search: 'Pretraži',
            edit: 'Spremi',
            addText: 'Dodaj',
            removeText: 'Ukloni',
            checkAllText: 'Označi sve'
        },
        onboarding: {
            skip: "Presko\u010Diti",
            prev: "Prethodna",
            next: "Sljede\u0107i",
            done: "Sastavljeno"
        }
    };

    var jaJP = {
        abbr: 'ja-JP',
        exception: {
            403: 'ページへのアクセス権限がありません',
            404: 'ページが存在しません',
            500: 'サーバーエラーが発生しました',
            backToHome: 'ホームに戻る'
        },
        noticeIcon: {
            emptyText: 'データが有りません',
            clearText: 'クリア'
        },
        reuseTab: {
            close: 'タブを閉じる',
            closeOther: '他のタブを閉じる',
            closeRight: '右のタブを閉じる',
            refresh: 'リフレッシュ'
        },
        tagSelect: {
            expand: '展開する',
            collapse: '折りたたむ'
        },
        miniProgress: {
            target: '設定値: '
        },
        st: {
            total: '{{range[0]}} - {{range[1]}} / {{total}}',
            filterConfirm: '確定',
            filterReset: 'リセット'
        },
        sf: {
            submit: '送信',
            reset: 'リセット',
            search: '検索',
            edit: '保存',
            addText: '追加',
            removeText: '削除',
            checkAllText: '全選択',
            error: {
                'false schema': "\u771F\u507D\u5024\u30B9\u30AD\u30FC\u30DE\u304C\u4E0D\u6B63\u3067\u3059",
                $ref: "\u53C2\u7167\u3092\u89E3\u6C7A\u3067\u304D\u307E\u305B\u3093: {ref}",
                additionalItems: "{limit}\u500B\u3092\u8D85\u3048\u308B\u30A2\u30A4\u30C6\u30E0\u3092\u542B\u3081\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093",
                additionalProperties: "\u8FFD\u52A0\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u4F7F\u7528\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044",
                anyOf: "\"anyOf\"\u306E\u30B9\u30AD\u30FC\u30DE\u3068\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059",
                dependencies: "\u30D7\u30ED\u30D1\u30C6\u30A3 {property} \u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001\u6B21\u306E\u4F9D\u5B58\u95A2\u4FC2\u3092\u6E80\u305F\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059: {deps}",
                enum: "\u5B9A\u7FA9\u3055\u308C\u305F\u5024\u306E\u3044\u305A\u308C\u304B\u306B\u7B49\u3057\u304F\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093",
                format: "\u5165\u529B\u5F62\u5F0F\u306B\u4E00\u81F4\u3057\u307E\u305B\u3093: \"{format}\"",
                type: "\u578B\u304C\u4E0D\u6B63\u3067\u3059: {type}",
                required: "\u5FC5\u9808\u9805\u76EE\u3067\u3059",
                maxLength: "\u6700\u5927\u6587\u5B57\u6570: {limit}",
                minLength: "\u6700\u5C11\u6587\u5B57\u6570: {limit}",
                minimum: "\u5024\u304C\u4E0D\u6B63\u3067\u3059: {comparison} {limit}",
                formatMinimum: "\u5024\u304C\u4E0D\u6B63\u3067\u3059: {comparison} {limit}",
                maximum: "\u5024\u304C\u4E0D\u6B63\u3067\u3059: {comparison} {limit}",
                formatMaximum: "\u5024\u304C\u4E0D\u6B63\u3067\u3059: {comparison} {limit}",
                maxItems: "\u6700\u5927\u9078\u629E\u6570\u306F {limit} \u3088\u308A\u5C0F\u3055\u3044\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059",
                minItems: "\u6700\u5C0F\u9078\u629E\u6570\u306F {limit} \u3088\u308A\u5927\u304D\u3044\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059",
                maxProperties: "\u5024\u3092{limit}\u3088\u308A\u5927\u304D\u304F\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093",
                minProperties: "\u5024\u3092{limit}\u3088\u308A\u5C0F\u3055\u304F\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093",
                multipleOf: "\u5024\u306F\u6B21\u306E\u6570\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059: {multipleOf}",
                not: "\u5024\u304C\u4E0D\u6B63\u3067\u3059:",
                oneOf: "\u5024\u304C\u4E0D\u6B63\u3067\u3059:",
                pattern: "\u6B21\u306E\u30D1\u30BF\u30FC\u30F3\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059: \"{pattern}\"",
                uniqueItems: "\u5024\u304C\u91CD\u8907\u3057\u3066\u3044\u307E\u3059: \u9078\u629E\u80A2: {j} \u3001{i}",
                custom: "\u5F62\u5F0F\u3068\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059",
                propertyNames: "\u6B21\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306E\u5024\u304C\u7121\u52B9\u3067\u3059: \"{propertyName}\"",
                patternRequired: "\u6B21\u306E\u30D1\u30BF\u30FC\u30F3\u306B\u4E00\u81F4\u3059\u308B\u30D7\u30ED\u30D1\u30C6\u30A3\u304C\u5FC5\u9808\u3067\u3059: \"{missingPattern}\"",
                switch: "\"switch\" \u30AD\u30FC\u30EF\u30FC\u30C9\u306E\u5024\u304C\u4E0D\u6B63\u3067\u3059: {caseIndex}",
                const: "\u5024\u304C\u5B9A\u6570\u306B\u4E00\u81F4\u3057\u307E\u305B\u3093",
                contains: "\u6709\u52B9\u306A\u30A2\u30A4\u30C6\u30E0\u3092\u542B\u3081\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059",
                formatExclusiveMaximum: "formatExclusiveMaximum \u306F\u771F\u507D\u5024\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059",
                formatExclusiveMinimum: "formatExclusiveMaximum \u306F\u771F\u507D\u5024\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059",
                if: "\u30D1\u30BF\u30FC\u30F3\u3068\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059: \"{failingKeyword}\" "
            }
        },
        onboarding: {
            skip: "\u30B9\u30AD\u30C3\u30D7",
            prev: "\u524D\u3078",
            next: "\u6B21",
            done: "\u3067\u304D\u305F"
        }
    };

    var slSI = {
        abbr: 'sl-SI',
        exception: {
            403: "\u017Dal nimate dostopa do te strani",
            404: "\u017Dal stran, ki ste jo obiskali, ne obstaja",
            500: "\u017Dal stre\u017Enik poro\u010Da o napaki",
            backToHome: 'Nazaj domov'
        },
        noticeIcon: {
            emptyText: 'Ni podatkov',
            clearText: 'Počisti'
        },
        reuseTab: {
            close: 'Zapri zavihek',
            closeOther: 'Zaprite druge zavihke',
            closeRight: 'Zaprite zavihke na desni'
        },
        tagSelect: {
            expand: 'Razširi',
            collapse: 'Strni'
        },
        miniProgress: {
            target: 'Cilj: '
        },
        st: {
            total: '{{range[0]}} - {{range[1]}} of {{total}}',
            filterConfirm: 'OK',
            filterReset: 'Reset'
        },
        sf: {
            submit: 'Pošlji',
            reset: 'Reset',
            search: 'Išči',
            edit: 'Shrani',
            addText: 'Dodaj',
            removeText: 'Odstrani',
            checkAllText: 'Preveri vse',
            error: {
                'false schema': "Boolova shema je napa\u010Dna",
                $ref: "Referenc ni mogo\u010De razre\u0161iti {ref}",
                additionalItems: "Ne sme imeti ve\u010D kot {limit} artiklov",
                additionalProperties: "Ne bi smel imeti dodatnih lastnosti",
                anyOf: "Se mora ujemati s shemo v \"anyOf\"",
                dependencies: "mora imeti lastnosti {deps} ko je artikel {property} prisoten",
                enum: "Mora biti enaka eni od vnaprej dolo\u010Denih vrednosti",
                format: "Naj ustreza formatu \"{format}\"",
                type: "Naj bo {type}",
                required: "Zahtevano",
                maxLength: "Ne sme biti dalj\u0161i od {limit} znakov",
                minLength: "Ne sme biti kraj\u0161i od {limit} znakov",
                minimum: "Naj bo {comparison} {limit}",
                formatMinimum: "Naj bo {comparison} {limit}",
                maximum: "Naj bo {comparison} {limit}",
                formatMaximum: "Naj bo {comparison} {limit}",
                maxItems: "Ne sme imeti ve\u010D kot {limit} artiklov",
                minItems: "Ne sme imeti manj kot {limit} artiklov",
                maxProperties: "Ne sme imeti ve\u010D kot {limit} lastnosti",
                minProperties: "Ne sme imeti manj kot {limit} lastnosti",
                multipleOf: "Mora biti ve\u010Dkratnik od {multipleOf}",
                not: "Ne sme biti veljaven po shemi v \"not\"",
                oneOf: "Naj ustreza natan\u010Dno eni shemi v \"oneOf\"",
                pattern: "Naj se ujema z vzorcem \"{pattern}\"",
                uniqueItems: "Ne bi smel imeti dvojnikov (items ## {j} in {i} so identi\u010Dni)",
                custom: "Naj ustreza formatu",
                propertyNames: "Ime artikla \"{propertyName}\" je neveljavno",
                patternRequired: "Mora imeti vzorec ujemanja lastnosti \"{missingPattern}\"",
                switch: "Mora prestati \"switch\" validacijo klju\u010Dne besede, primer {caseIndex} ne uspe",
                const: "Naj bo enako konstanti",
                contains: "Naj vsebuje veljaven artikel",
                formatExclusiveMaximum: "formatExclusiveMaximum naj bo boolean",
                formatExclusiveMinimum: "formatExclusiveMinimum naj bo boolean",
                if: "Naj se ujema s shemo \"{failingKeyword}\""
            }
        },
        onboarding: {
            skip: "Presko\u010Di",
            prev: "Prej\u0161nje",
            next: "Naslednji",
            done: "Kon\u010Dano"
        }
    };

    var frFR = {
        abbr: 'fr-FR',
        exception: {
            403: "D\u00E9sol\u00E9, vous n'avez pas acc\u00E8s \u00E0 cette page",
            404: "D\u00E9sol\u00E9, la page que vous avez visit\u00E9e n'existe pas",
            500: "D\u00E9sol\u00E9, le serveur signale une erreur",
            backToHome: "Retour à l'accueil"
        },
        noticeIcon: {
            emptyText: 'Pas de données',
            clearText: 'Effacer'
        },
        reuseTab: {
            close: "Fermer l'onglet",
            closeOther: 'Fermer les autres onglets',
            closeRight: 'Fermer les onglets à droite',
            refresh: 'Rafraîchir'
        },
        tagSelect: {
            expand: 'Etendre',
            collapse: 'Effondrer'
        },
        miniProgress: {
            target: 'Cible: '
        },
        st: {
            total: '{{range[0]}} - {{range[1]}} de {{total}}',
            filterConfirm: 'OK',
            filterReset: 'Réinitialiser'
        },
        sf: {
            submit: 'Soumettre',
            reset: 'Réinitialiser',
            search: 'Rechercher',
            edit: 'Sauvegarder',
            addText: 'Ajouter',
            removeText: 'Supprimer',
            checkAllText: 'Cochez toutes',
            error: {
                'false schema': "Boolean schema is false",
                $ref: "Can't resolve reference {ref}",
                additionalItems: "Should not have more than {limit} item",
                additionalProperties: "Should not have additional properties",
                anyOf: "Should match some schema in \"anyOf\"",
                dependencies: "should have property {deps} when property {property} is present",
                enum: "Should be equal to one of predefined values",
                format: "Should match format \"{format}\"",
                type: "Should be {type}",
                required: "Required",
                maxLength: "Should not be longer than {limit} character",
                minLength: "Should not be shorter than {limit} character",
                minimum: "Should be {comparison} {limit}",
                formatMinimum: "Should be {comparison} {limit}",
                maximum: "Should be {comparison} {limit}",
                formatMaximum: "Should be {comparison} {limit}",
                maxItems: "Should not have more than {limit} item",
                minItems: "Should not have less than {limit} item",
                maxProperties: "Should not have more than {limit} property",
                minProperties: "Should not have less than {limit} property",
                multipleOf: "Should be a multiple of {multipleOf}",
                not: "Should not be valid according to schema in \"not\"",
                oneOf: "Should match exactly one schema in \"oneOf\"",
                pattern: "Should match pattern \"{pattern}\"",
                uniqueItems: "Should not have duplicate items (items ## {j} and {i} are identical)",
                custom: "Should match format",
                propertyNames: "Property name \"{propertyName}\" is invalid",
                patternRequired: "Should have property matching pattern \"{missingPattern}\"",
                switch: "Should pass \"switch\" keyword validation, case {caseIndex} fails",
                const: "Should be equal to constant",
                contains: "Should contain a valid item",
                formatExclusiveMaximum: "formatExclusiveMaximum should be boolean",
                formatExclusiveMinimum: "formatExclusiveMinimum should be boolean",
                if: "Should match \"{failingKeyword}\" schema"
            }
        },
        onboarding: {
            skip: "Passer",
            prev: "Pr\u00E9c\u00E9dent",
            next: "Suivant",
            done: "Termin\u00E9"
        }
    };

    var esES = {
        abbr: 'es-ES',
        exception: {
            403: "Lo sentimos, no tiene acceso a esta p\u00E1gina",
            404: "Lo sentimos, la p\u00E1gina que ha visitado no existe",
            500: "Lo siento, error interno del servidor ",
            backToHome: 'Volver a la página de inicio'
        },
        noticeIcon: {
            emptyText: 'No hay datos',
            clearText: 'Limpiar'
        },
        reuseTab: {
            close: 'Cerrar pestaña',
            closeOther: 'Cerrar otras pestañas',
            closeRight: 'Cerrar pestañas a la derecha',
            refresh: 'Actualizar'
        },
        tagSelect: {
            expand: 'Expandir',
            collapse: 'Ocultar'
        },
        miniProgress: {
            target: 'Target: '
        },
        st: {
            total: '{{rango[0]}} - {{rango[1]}} de {{total}}',
            filterConfirm: 'Aceptar',
            filterReset: 'Reiniciar'
        },
        sf: {
            submit: 'Submit',
            reset: 'Reiniciar',
            search: 'Buscar',
            edit: 'Guardar',
            addText: 'Añadir',
            removeText: 'Eliminar',
            checkAllText: 'Comprobar todo',
            error: {
                'false schema': "Boolean schema is false",
                $ref: "Can't resolve reference {ref}",
                additionalItems: "Should not have more than {limit} item",
                additionalProperties: "Should not have additional properties",
                anyOf: "Should match some schema in \"anyOf\"",
                dependencies: "should have property {deps} when property {property} is present",
                enum: "Should be equal to one of predefined values",
                format: "Should match format \"{format}\"",
                type: "Should be {type}",
                required: "Required",
                maxLength: "Should not be longer than {limit} character",
                minLength: "Should not be shorter than {limit} character",
                minimum: "Should be {comparison} {limit}",
                formatMinimum: "Should be {comparison} {limit}",
                maximum: "Should be {comparison} {limit}",
                formatMaximum: "Should be {comparison} {limit}",
                maxItems: "Should not have more than {limit} item",
                minItems: "Should not have less than {limit} item",
                maxProperties: "Should not have more than {limit} property",
                minProperties: "Should not have less than {limit} property",
                multipleOf: "Should be a multiple of {multipleOf}",
                not: "Should not be valid according to schema in \"not\"",
                oneOf: "Should match exactly one schema in \"oneOf\"",
                pattern: "Should match pattern \"{pattern}\"",
                uniqueItems: "Should not have duplicate items (items ## {j} and {i} are identical)",
                custom: "Should match format",
                propertyNames: "Property name \"{propertyName}\" is invalid",
                patternRequired: "Should have property matching pattern \"{missingPattern}\"",
                switch: "Should pass \"switch\" keyword validation, case {caseIndex} fails",
                const: "Should be equal to constant",
                contains: "Should contain a valid item",
                formatExclusiveMaximum: "formatExclusiveMaximum should be boolean",
                formatExclusiveMinimum: "formatExclusiveMinimum should be boolean",
                if: "Should match \"{failingKeyword}\" schema"
            }
        },
        onboarding: {
            skip: "Omitir",
            prev: "Previo",
            next: "Siguiente",
            done: "Terminado"
        }
    };

    /**
     * 对话框辅助类
     */
    var ModalHelper = /** @class */ (function () {
        function ModalHelper(srv) {
            this.srv = srv;
        }
        /**
         * 构建一个对话框
         *
         * @param comp 组件
         * @param params 组件参数
         * @param options 额外参数
         *
         * @example
         * this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());
         * // 对于组件的成功&关闭的处理说明
         * // 成功，其中 `nzModalRef` 指目标组件在构造函数 `NzModalRef` 变量名
         * this.nzModalRef.close(data);
         * this.nzModalRef.close();
         * // 关闭
         * this.nzModalRef.destroy();
         */
        ModalHelper.prototype.create = function (comp, params, options) {
            var _this = this;
            options = other.deepMerge({
                size: 'lg',
                exact: true,
                includeTabs: false
            }, options);
            return new rxjs.Observable(function (observer) {
                var size = options.size, includeTabs = options.includeTabs, modalOptions = options.modalOptions;
                var cls = '';
                var width = '';
                if (size) {
                    if (typeof size === 'number') {
                        width = size + "px";
                    }
                    else {
                        cls = "modal-" + size;
                    }
                }
                if (includeTabs) {
                    cls += ' modal-include-tabs';
                }
                if (modalOptions && modalOptions.nzWrapClassName) {
                    cls += " " + modalOptions.nzWrapClassName;
                    delete modalOptions.nzWrapClassName;
                }
                var defaultOptions = {
                    nzWrapClassName: cls,
                    nzContent: comp,
                    nzWidth: width ? width : undefined,
                    nzFooter: null,
                    nzComponentParams: params
                };
                var subject = _this.srv.create(Object.assign(Object.assign({}, defaultOptions), modalOptions));
                var afterClose$ = subject.afterClose.subscribe(function (res) {
                    if (options.exact === true) {
                        if (res != null) {
                            observer.next(res);
                        }
                    }
                    else {
                        observer.next(res);
                    }
                    observer.complete();
                    afterClose$.unsubscribe();
                });
            });
        };
        /**
         * 构建静态框，点击蒙层不允许关闭
         *
         * @param comp 组件
         * @param params 组件参数
         * @param options 额外参数
         *
         * @example
         * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
         * // 对于组件的成功&关闭的处理说明
         * // 成功，其中 `nzModalRef` 指目标组件在构造函数 `NzModalRef` 变量名
         * this.nzModalRef.close(data);
         * this.nzModalRef.close();
         * // 关闭
         * this.nzModalRef.destroy();
         */
        ModalHelper.prototype.createStatic = function (comp, params, options) {
            var modalOptions = Object.assign({ nzMaskClosable: false }, (options && options.modalOptions));
            return this.create(comp, params, Object.assign(Object.assign({}, options), { modalOptions: modalOptions }));
        };
        return ModalHelper;
    }());
    ModalHelper.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function ModalHelper_Factory() { return new ModalHelper(i0__namespace.ɵɵinject(i1__namespace$4.NzModalService)); }, token: ModalHelper, providedIn: "root" });
    ModalHelper.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    ModalHelper.ctorParameters = function () { return [
        { type: i1$4.NzModalService }
    ]; };

    /**
     * 抽屉辅助类
     *
     * **注意：** 构建结果都可被订阅，但永远都不会触发 `observer.error`
     *
     * @example
     * this.drawerHelper.create('Edit', FormEditComponent, { i }).subscribe(res => this.load());
     * // 对于组件的成功&关闭的处理说明
     * // 成功
     * this.NzDrawerRef.close(data);
     * this.NzDrawerRef.close(true);
     * // 关闭
     * this.NzDrawerRef.close();
     * this.NzDrawerRef.close(false);
     */
    var DrawerHelper = /** @class */ (function () {
        function DrawerHelper(srv) {
            this.srv = srv;
        }
        /**
         * 构建一个抽屉
         */
        DrawerHelper.prototype.create = function (title, comp, params, options) {
            var _this = this;
            options = other.deepMerge({
                size: 'md',
                footer: true,
                footerHeight: 50,
                exact: true,
                drawerOptions: {
                    nzPlacement: 'right',
                    nzWrapClassName: ''
                }
            }, options);
            return new rxjs.Observable(function (observer) {
                var size = options.size, footer = options.footer, footerHeight = options.footerHeight, drawerOptions = options.drawerOptions;
                var defaultOptions = {
                    nzContent: comp,
                    nzContentParams: params,
                    nzTitle: title
                };
                if (typeof size === 'number') {
                    defaultOptions[drawerOptions.nzPlacement === 'top' || drawerOptions.nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'] = options.size;
                }
                else if (!drawerOptions.nzWidth) {
                    defaultOptions.nzWrapClassName = (drawerOptions.nzWrapClassName + " drawer-" + options.size).trim();
                    delete drawerOptions.nzWrapClassName;
                }
                if (footer) {
                    // The 24 value is @drawer-body-padding
                    defaultOptions.nzBodyStyle = {
                        'padding-bottom.px': footerHeight + 24
                    };
                }
                var subject = _this.srv.create(Object.assign(Object.assign({}, defaultOptions), drawerOptions));
                var afterClose$ = subject.afterClose.subscribe(function (res) {
                    if (options.exact === true) {
                        if (res != null) {
                            observer.next(res);
                        }
                    }
                    else {
                        observer.next(res);
                    }
                    observer.complete();
                    afterClose$.unsubscribe();
                });
            });
        };
        /**
         * 构建一个抽屉，点击蒙层不允许关闭
         */
        DrawerHelper.prototype.static = function (title, comp, params, options) {
            var drawerOptions = Object.assign({ nzMaskClosable: false }, (options && options.drawerOptions));
            return this.create(title, comp, params, Object.assign(Object.assign({}, options), { drawerOptions: drawerOptions }));
        };
        return DrawerHelper;
    }());
    DrawerHelper.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function DrawerHelper_Factory() { return new DrawerHelper(i0__namespace.ɵɵinject(i1__namespace$5.NzDrawerService)); }, token: DrawerHelper, providedIn: "root" });
    DrawerHelper.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    DrawerHelper.ctorParameters = function () { return [
        { type: i1$5.NzDrawerService }
    ]; };

    /* eslint-disable @typescript-eslint/no-explicit-any */
    /**
     * 封装HttpClient，主要解决：
     * + 优化HttpClient在参数上便利性
     * + 统一实现 loading
     * + 统一处理时间格式问题
     */
    var _HttpClient = /** @class */ (function () {
        function _HttpClient(http, cogSrv) {
            this.http = http;
            this.lc = 0;
            this.cog = cogSrv.merge('themeHttp', {
                nullValueHandling: 'include',
                dateValueHandling: 'timestamp'
            });
        }
        Object.defineProperty(_HttpClient.prototype, "loading", {
            /**
             * Get whether it's loading
             *
             * 获取是否正在加载中
             */
            get: function () {
                return this.lc > 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(_HttpClient.prototype, "loadingCount", {
            /**
             * Get the currently loading count
             *
             * 获取当前加载中的数量
             */
            get: function () {
                return this.lc;
            },
            enumerable: false,
            configurable: true
        });
        _HttpClient.prototype.parseParams = function (params) {
            var _this = this;
            var newParams = {};
            if (params instanceof i1$6.HttpParams) {
                return params;
            }
            Object.keys(params).forEach(function (key) {
                var _data = params[key];
                // 忽略空值
                if (_this.cog.nullValueHandling === 'ignore' && _data == null)
                    return;
                // 将时间转化为：时间戳 (秒)
                if (_this.cog.dateValueHandling === 'timestamp' && _data instanceof Date) {
                    _data = _data.valueOf();
                }
                newParams[key] = _data;
            });
            return new i1$6.HttpParams({ fromObject: newParams });
        };
        _HttpClient.prototype.appliedUrl = function (url, params) {
            if (!params)
                return url;
            url += ~url.indexOf('?') ? '' : '?';
            var arr = [];
            Object.keys(params).forEach(function (key) {
                arr.push(key + "=" + params[key]);
            });
            return url + arr.join('&');
        };
        _HttpClient.prototype.setCount = function (count) {
            var _this = this;
            Promise.resolve(null).then(function () { return (_this.lc = count <= 0 ? 0 : count); });
        };
        _HttpClient.prototype.push = function () {
            this.setCount(++this.lc);
        };
        _HttpClient.prototype.pop = function () {
            this.setCount(--this.lc);
        };
        /**
         * Clean loading count
         *
         * 清空加载中
         */
        _HttpClient.prototype.cleanLoading = function () {
            this.setCount(0);
        };
        _HttpClient.prototype.get = function (url, params, options) {
            if (options === void 0) { options = {}; }
            return this.request('GET', url, Object.assign({ params: params }, options));
        };
        _HttpClient.prototype.post = function (url, body, params, options) {
            if (options === void 0) { options = {}; }
            return this.request('POST', url, Object.assign({ body: body, params: params }, options));
        };
        _HttpClient.prototype.delete = function (url, params, options) {
            if (options === void 0) { options = {}; }
            return this.request('DELETE', url, Object.assign({ params: params }, options));
        };
        // #endregion
        // #region jsonp
        /**
         * **JSONP Request**
         *
         * @param callbackParam CALLBACK值，默认：JSONP_CALLBACK
         */
        _HttpClient.prototype.jsonp = function (url, params, callbackParam) {
            var _this = this;
            if (callbackParam === void 0) { callbackParam = 'JSONP_CALLBACK'; }
            return rxjs.of(null).pipe(
            // Make sure to always be asynchronous, see issues: https://github.com/ng-alain/ng-alain/issues/1954
            operators.delay(0), operators.tap(function () { return _this.push(); }), operators.switchMap(function () { return _this.http.jsonp(_this.appliedUrl(url, params), callbackParam); }), operators.finalize(function () { return _this.pop(); }));
        };
        _HttpClient.prototype.patch = function (url, body, params, options) {
            if (options === void 0) { options = {}; }
            return this.request('PATCH', url, Object.assign({ body: body, params: params }, options));
        };
        _HttpClient.prototype.put = function (url, body, params, options) {
            if (options === void 0) { options = {}; }
            return this.request('PUT', url, Object.assign({ body: body, params: params }, options));
        };
        _HttpClient.prototype.form = function (url, body, params, options) {
            if (options === void 0) { options = {}; }
            return this.request('POST', url, Object.assign(Object.assign({ body: body, params: params }, options), { headers: {
                    'content-type': "application/x-www-form-urlencoded"
                } }));
        };
        _HttpClient.prototype.request = function (method, url, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            if (options.params)
                options.params = this.parseParams(options.params);
            return rxjs.of(null).pipe(
            // Make sure to always be asynchronous, see issues: https://github.com/ng-alain/ng-alain/issues/1954
            operators.delay(0), operators.tap(function () { return _this.push(); }), operators.switchMap(function () { return _this.http.request(method, url, options); }), operators.finalize(function () { return _this.pop(); }));
        };
        return _HttpClient;
    }());
    _HttpClient.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function _HttpClient_Factory() { return new _HttpClient(i0__namespace.ɵɵinject(i1__namespace$6.HttpClient), i0__namespace.ɵɵinject(i1__namespace.AlainConfigService)); }, token: _HttpClient, providedIn: "root" });
    _HttpClient.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    _HttpClient.ctorParameters = function () { return [
        { type: i1$6.HttpClient },
        { type: i1.AlainConfigService }
    ]; };

    /**
     * Every http decorator must be based on `BaseAPI`, Like this:
     * ```ts
     * \@Injectable()
     * class DataService extends BaseApi {}
     * ```
     */
    var BaseApi = /** @class */ (function () {
        function BaseApi(injector) {
            this.injector = injector;
        }
        return BaseApi;
    }());
    BaseApi.decorators = [
        { type: i0.Injectable }
    ];
    BaseApi.ctorParameters = function () { return [
        { type: i0.Injector, decorators: [{ type: i0.Inject, args: [i0.Injector,] }] }
    ]; };
    var paramKey = "__api_params";
    function setParam(target, key) {
        if (key === void 0) { key = paramKey; }
        var params = target[key];
        if (typeof params === 'undefined') {
            params = target[key] = {};
        }
        return params;
    }
    /**
     * 默认基准URL
     * - 有效范围：类
     */
    function BaseUrl(url) {
        return function (target) {
            var params = setParam(target.prototype);
            params.baseUrl = url;
            return target;
        };
    }
    /**
     * 默认 `headers`
     * - 有效范围：类
     */
    function BaseHeaders(headers) {
        return function (target) {
            var params = setParam(target.prototype);
            params.baseHeaders = headers;
            return target;
        };
    }
    function makeParam(paramName) {
        return function (key) {
            return function (target, propertyKey, index) {
                var params = setParam(setParam(target), propertyKey);
                var tParams = params[paramName];
                if (typeof tParams === 'undefined') {
                    tParams = params[paramName] = [];
                }
                tParams.push({
                    key: key,
                    index: index
                });
            };
        };
    }
    /**
     * URL路由参数
     * - 有效范围：方法参数
     */
    var Path = makeParam('path');
    /**
     * URL 参数 `QueryString`
     * - 有效范围：方法参数
     */
    var Query = makeParam('query');
    /**
     * 参数 `Body`
     * - 有效范围：方法参数
     */
    var Body = makeParam('body')();
    /**
     * 参数 `headers`
     * - 有效范围：方法参数
     * - 合并 `BaseHeaders`
     */
    var Headers = makeParam('headers');
    /**
     * Request Payload
     * - Supported body (like`POST`, `PUT`) as a body data, equivalent to `@Body`
     * - Not supported body (like `GET`, `DELETE` etc) as a `QueryString`
     */
    var Payload = makeParam('payload')();
    function getValidArgs(data, key, args) {
        if (!data[key] || !Array.isArray(data[key]) || data[key].length <= 0) {
            return undefined;
        }
        return args[data[key][0].index];
    }
    function genBody(data, payload) {
        if (Array.isArray(data) || Array.isArray(payload)) {
            return Object.assign([], data, payload);
        }
        return Object.assign(Object.assign({}, data), payload);
    }
    function makeMethod(method) {
        return function (url, options) {
            if (url === void 0) { url = ''; }
            return function (_target, targetKey, descriptor) {
                descriptor.value = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    options = options || {};
                    var injector = this.injector;
                    var http = injector.get(_HttpClient, null);
                    if (http == null) {
                        throw new TypeError("Not found '_HttpClient', You can import 'AlainThemeModule' && 'HttpClientModule' in your root module.");
                    }
                    var baseData = setParam(this);
                    var data = setParam(baseData, targetKey);
                    var requestUrl = url || '';
                    requestUrl = [baseData.baseUrl || '', requestUrl.startsWith('/') ? requestUrl.substr(1) : requestUrl].join('/');
                    // fix last split
                    if (requestUrl.length > 1 && requestUrl.endsWith('/')) {
                        requestUrl = requestUrl.substr(0, requestUrl.length - 1);
                    }
                    if (options.acl) {
                        var aclSrv = injector.get(i2.ACLService, null);
                        if (aclSrv && !aclSrv.can(options.acl)) {
                            return rxjs.throwError({
                                url: requestUrl,
                                status: 401,
                                statusText: "From Http Decorator"
                            });
                        }
                        delete options.acl;
                    }
                    requestUrl = requestUrl.replace(/::/g, '^^');
                    (data.path || [])
                        .filter(function (w) { return typeof args[w.index] !== 'undefined'; })
                        .forEach(function (i) {
                        requestUrl = requestUrl.replace(new RegExp(":" + i.key, 'g'), encodeURIComponent(args[i.index]));
                    });
                    requestUrl = requestUrl.replace(/\^\^/g, ":");
                    var params = (data.query || []).reduce(function (p, i) {
                        p[i.key] = args[i.index];
                        return p;
                    }, {});
                    var headers = (data.headers || []).reduce(function (p, i) {
                        p[i.key] = args[i.index];
                        return p;
                    }, {});
                    if (method === 'FORM') {
                        headers['content-type'] = 'application/x-www-form-urlencoded';
                    }
                    var payload = getValidArgs(data, 'payload', args);
                    var supportedBody = method === 'POST' || method === 'PUT';
                    return http.request(method, requestUrl, Object.assign({ body: supportedBody ? genBody(getValidArgs(data, 'body', args), payload) : null, params: !supportedBody ? Object.assign(Object.assign({}, params), payload) : params, headers: Object.assign(Object.assign({}, baseData.baseHeaders), headers) }, options));
                };
                return descriptor;
            };
        };
    }
    /**
     * `OPTIONS` 请求
     * - 有效范围：方法
     */
    var OPTIONS = makeMethod('OPTIONS');
    /**
     * `GET` 请求
     * - 有效范围：方法
     */
    var GET = makeMethod('GET');
    /**
     * `POST` 请求
     * - 有效范围：方法
     */
    var POST = makeMethod('POST');
    /**
     * `DELETE` 请求
     * - 有效范围：方法
     */
    var DELETE = makeMethod('DELETE');
    /**
     * `PUT` 请求
     * - 有效范围：方法
     */
    var PUT = makeMethod('PUT');
    /**
     * `HEAD` 请求
     * - 有效范围：方法
     */
    var HEAD = makeMethod('HEAD');
    /**
     * `PATCH` 请求
     * - 有效范围：方法
     */
    var PATCH = makeMethod('PATCH');
    /**
     * `JSONP` 请求
     * - 有效范围：方法
     */
    var JSONP = makeMethod('JSONP');
    /**
     * `FORM` 请求
     * - 有效范围：方法
     */
    var FORM = makeMethod('FORM');

    var DatePipe = /** @class */ (function () {
        function DatePipe(nzI18n) {
            this.nzI18n = nzI18n;
        }
        DatePipe.prototype.transform = function (value, formatString) {
            if (formatString === void 0) { formatString = 'yyyy-MM-dd HH:mm'; }
            value = dateTime.toDate(value);
            if (isNaN(value))
                return '';
            var langOpt = { locale: this.nzI18n.getDateLocale() };
            return formatString === 'fn' ? dateFns.formatDistanceToNow(value, langOpt) : dateFns.format(value, formatString, langOpt);
        };
        return DatePipe;
    }());
    DatePipe.decorators = [
        { type: i0.Pipe, args: [{ name: '_date' },] }
    ];
    DatePipe.ctorParameters = function () { return [
        { type: i18n.NzI18nService }
    ]; };

    /**
     * [Document](https://ng-alain.com/theme/keys)
     */
    var KeysPipe = /** @class */ (function () {
        function KeysPipe() {
        }
        KeysPipe.prototype.transform = function (value, keyIsNumber) {
            if (keyIsNumber === void 0) { keyIsNumber = false; }
            var ret = [];
            Object.keys(value).forEach(function (key) {
                ret.push({ key: keyIsNumber ? +key : key, value: value[key] });
            });
            return ret;
        };
        return KeysPipe;
    }());
    KeysPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'keys' },] }
    ];

    var ICON_YES = "<svg viewBox=\"64 64 896 896\" fill=\"currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\"><path d=\"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z\"></path></svg>";
    var ICON_NO = "<svg viewBox=\"64 64 896 896\" fill=\"currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\"><path d=\"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z\"></path></svg>";
    var CLS_YES = "class=\"yn__yes\"";
    var CLS_NO = "class=\"yn__no\"";
    var YNPipe = /** @class */ (function () {
        function YNPipe(dom) {
            this.dom = dom;
        }
        YNPipe.prototype.transform = function (value, yes, no, mode, isSafeHtml) {
            if (isSafeHtml === void 0) { isSafeHtml = true; }
            var html = '';
            yes = yes || '是';
            no = no || '否';
            switch (mode) {
                case 'full':
                    html = value
                        ? "<i " + CLS_YES + ">" + ICON_YES + "<span>" + yes + "</span></i>"
                        : "<i " + CLS_NO + ">" + ICON_NO + "<span>" + no + "</span></i>";
                    break;
                case 'text':
                    html = value ? "<i " + CLS_YES + ">" + yes + "</i>" : "<i " + CLS_NO + ">" + no + "</i>";
                    break;
                default:
                    html = value ? "<i " + CLS_YES + " title=\"" + yes + "\">" + ICON_YES + "</i>" : "<i " + CLS_NO + " title=\"" + no + "\">" + ICON_NO + "</i>";
                    break;
            }
            return isSafeHtml ? this.dom.bypassSecurityTrustHtml(html) : html;
        };
        return YNPipe;
    }());
    YNPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'yn' },] }
    ];
    YNPipe.ctorParameters = function () { return [
        { type: i1$3.DomSanitizer }
    ]; };

    var HTMLPipe = /** @class */ (function () {
        function HTMLPipe(dom) {
            this.dom = dom;
        }
        HTMLPipe.prototype.transform = function (html) {
            return html ? this.dom.bypassSecurityTrustHtml(html) : '';
        };
        return HTMLPipe;
    }());
    HTMLPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'html' },] }
    ];
    HTMLPipe.ctorParameters = function () { return [
        { type: i1$3.DomSanitizer }
    ]; };

    var URLPipe = /** @class */ (function () {
        function URLPipe(dom) {
            this.dom = dom;
        }
        URLPipe.prototype.transform = function (url) {
            return url ? this.dom.bypassSecurityTrustUrl(url) : '';
        };
        return URLPipe;
    }());
    URLPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'url' },] }
    ];
    URLPipe.ctorParameters = function () { return [
        { type: i1$3.DomSanitizer }
    ]; };

    var I18nPipe = /** @class */ (function () {
        function I18nPipe(i18n) {
            this.i18n = i18n;
        }
        I18nPipe.prototype.transform = function (key, params) {
            return this.i18n.fanyi(key, params);
        };
        return I18nPipe;
    }());
    I18nPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'i18n' },] }
    ];
    I18nPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [ALAIN_I18N_TOKEN,] }] }
    ]; };

    // #region import
    var HELPERS = [ModalHelper, DrawerHelper];
    var PIPES = [DatePipe, KeysPipe, YNPipe, I18nPipe, HTMLPipe, URLPipe];
    var ICONS = [icons.BellOutline, icons.DeleteOutline, icons.PlusOutline, icons.InboxOutline];
    var ɵ0 = {
        layout: 'layout',
        user: 'user',
        app: 'app'
    };
    // #endregion
    var AlainThemeModule = /** @class */ (function () {
        function AlainThemeModule(iconSrv) {
            iconSrv.addIcon.apply(iconSrv, __spreadArray([], __read(ICONS)));
        }
        AlainThemeModule.forRoot = function () {
            return {
                ngModule: AlainThemeModule,
                providers: __spreadArray([], __read(HELPERS))
            };
        };
        AlainThemeModule.forChild = function () {
            return {
                ngModule: AlainThemeModule,
                providers: __spreadArray([], __read(HELPERS))
            };
        };
        return AlainThemeModule;
    }());
    AlainThemeModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [i6.CommonModule, router.RouterModule, overlay.OverlayModule, i18n.NzI18nModule],
                    declarations: __spreadArray([], __read(PIPES)),
                    providers: [
                        {
                            provide: ALAIN_SETTING_KEYS,
                            useValue: ɵ0
                        }
                    ],
                    exports: __spreadArray(__spreadArray([], __read(PIPES)), [DelonLocaleModule])
                },] }
    ];
    AlainThemeModule.ctorParameters = function () { return [
        { type: icon.NzIconService }
    ]; };

    var VERSION = new i0.Version('12.1.1');

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ALAIN_I18N_TOKEN = ALAIN_I18N_TOKEN;
    exports.ALAIN_SETTING_KEYS = ALAIN_SETTING_KEYS;
    exports.AlainI18NServiceFake = AlainI18NServiceFake;
    exports.AlainI18nBaseService = AlainI18nBaseService;
    exports.AlainThemeModule = AlainThemeModule;
    exports.BaseApi = BaseApi;
    exports.BaseHeaders = BaseHeaders;
    exports.BaseUrl = BaseUrl;
    exports.Body = Body;
    exports.DELETE = DELETE;
    exports.DELON_LOCALE = DELON_LOCALE;
    exports.DELON_LOCALE_SERVICE_PROVIDER = DELON_LOCALE_SERVICE_PROVIDER;
    exports.DELON_LOCALE_SERVICE_PROVIDER_FACTORY = DELON_LOCALE_SERVICE_PROVIDER_FACTORY;
    exports.DatePipe = DatePipe;
    exports.DelonLocaleModule = DelonLocaleModule;
    exports.DelonLocaleService = DelonLocaleService;
    exports.DrawerHelper = DrawerHelper;
    exports.FORM = FORM;
    exports.GET = GET;
    exports.HEAD = HEAD;
    exports.HTMLPipe = HTMLPipe;
    exports.HTML_DIR = HTML_DIR;
    exports.Headers = Headers;
    exports.JSONP = JSONP;
    exports.KeysPipe = KeysPipe;
    exports.LTR = LTR;
    exports.MenuService = MenuService;
    exports.ModalHelper = ModalHelper;
    exports.OPTIONS = OPTIONS;
    exports.PATCH = PATCH;
    exports.POST = POST;
    exports.PUT = PUT;
    exports.Path = Path;
    exports.Payload = Payload;
    exports.Query = Query;
    exports.REP_MAX = REP_MAX;
    exports.RTL = RTL;
    exports.RTLService = RTLService;
    exports.RTL_DELON_COMPONENTS = RTL_DELON_COMPONENTS;
    exports.RTL_DIRECTION = RTL_DIRECTION;
    exports.RTL_NZ_COMPONENTS = RTL_NZ_COMPONENTS;
    exports.ResponsiveService = ResponsiveService;
    exports.SettingsService = SettingsService;
    exports.TitleService = TitleService;
    exports.URLPipe = URLPipe;
    exports.VERSION = VERSION;
    exports.YNPipe = YNPipe;
    exports._HttpClient = _HttpClient;
    exports.el_GR = elGR;
    exports.en_US = enUS;
    exports.es_ES = esES;
    exports.fr_FR = frFR;
    exports.hr_HR = hrHR;
    exports.ja_JP = jaJP;
    exports.ko_KR = koKR;
    exports.pl_PL = plPL;
    exports.preloaderFinished = preloaderFinished;
    exports.sl_SI = slSI;
    exports.tr_TR = trTR;
    exports.zh_CN = zhCN;
    exports.zh_TW = zhTW;
    exports.ɵa = I18nPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=theme.umd.js.map
