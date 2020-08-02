/**
 * @license ng-alain(cipchk@qq.com) v10.0.0-beta.3
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/acl'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/platform'), require('@angular/common'), require('@delon/util'), require('@angular/platform-browser'), require('@angular/router'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/drawer'), require('@angular/common/http'), require('date-fns/format'), require('date-fns/formatDistanceToNow'), require('ng-zorro-antd/i18n'), require('@angular/cdk/overlay'), require('@ant-design/icons-angular/icons'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('@delon/theme', ['exports', '@angular/core', '@delon/acl', 'rxjs', 'rxjs/operators', '@angular/cdk/platform', '@angular/common', '@delon/util', '@angular/platform-browser', '@angular/router', 'ng-zorro-antd/modal', 'ng-zorro-antd/drawer', '@angular/common/http', 'date-fns/format', 'date-fns/formatDistanceToNow', 'ng-zorro-antd/i18n', '@angular/cdk/overlay', '@ant-design/icons-angular/icons', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.theme = {}), global.ng.core, global.delon.acl, global.rxjs, global.rxjs.operators, global.ng.cdk.platform, global.ng.common, global.delon.util, global.ng.platformBrowser, global.ng.router, global['ng-zorro-antd/modal'], global['ng-zorro-antd/drawer'], global.ng.common.http, global.format, global.formatDistanceToNow, global['ng-zorro-antd/i18n'], global.ng.cdk.overlay, global.icons, global['ng-zorro-antd/icon']));
}(this, (function (exports, i0, i2, rxjs, operators, i2$1, i1, i1$1, i1$2, router, i1$3, i1$4, i1$5, format, formatDistanceToNow, i18n, overlay, icons, icon) { 'use strict';

    format = format && Object.prototype.hasOwnProperty.call(format, 'default') ? format['default'] : format;
    formatDistanceToNow = formatDistanceToNow && Object.prototype.hasOwnProperty.call(formatDistanceToNow, 'default') ? formatDistanceToNow['default'] : formatDistanceToNow;

    /**
     * @fileoverview added by tsickle
     * Generated from: src/win_tokens.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function WINDOW_FACTORY() {
        return typeof window === 'object' && !!window ? window : null;
    }
    /** @type {?} */
    var WINDOW = new i0.InjectionToken('Window', {
        providedIn: 'root',
        factory: WINDOW_FACTORY,
    });

    /**
     * @fileoverview added by tsickle
     * Generated from: src/services/preloader/preloader.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function preloaderFinished() {
        /** @type {?} */
        var body = ( /** @type {?} */(document.querySelector('body')));
        /** @type {?} */
        var preloader = ( /** @type {?} */(document.querySelector('.preloader')));
        body.style.overflow = 'hidden';
        /**
         * @return {?}
         */
        function remove() {
            // preloader value null when running --hmr
            if (!preloader)
                return;
            preloader.addEventListener('transitionend', ( /**
             * @return {?}
             */function () {
                preloader.className = 'preloader-hidden';
            }));
            preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
        }
        (( /** @type {?} */(window))).appBootstrap = ( /**
         * @return {?}
         */function () {
            setTimeout(( /**
             * @return {?}
             */function () {
                remove();
                body.style.overflow = '';
            }), 100);
        });
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
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
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
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                __createBinding(exports, m, p);
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
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
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
                if (Object.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/services/i18n/i18n.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function AlainI18NService() { }
    if (false) {
        /**
         * 调用 `use` 触发变更通知
         * @type {?}
         */
        AlainI18NService.prototype.change;
        /* Skipping unhandled member: [key: string]: any;*/
        /**
         * 变更语言
         * @param {?} lang 语言代码
         * @param {?=} emit 是否触发 `change`，默认：true
         * @return {?}
         */
        AlainI18NService.prototype.use = function (lang, emit) { };
        /**
         * 返回当前语言列表
         * @return {?}
         */
        AlainI18NService.prototype.getLangs = function () { };
        /**
         * 翻译
         * - `params` 模板所需要的参数对象
         * - `isSafe` 是否返回安全字符，自动调用 `bypassSecurityTrustHtml`
         * @param {?} key
         * @param {?=} params
         * @param {?=} isSafe
         * @return {?}
         */
        AlainI18NService.prototype.fanyi = function (key, params, isSafe) { };
    }
    /** @type {?} */
    var ALAIN_I18N_TOKEN = new i0.InjectionToken('alainTranslatorToken', {
        providedIn: 'root',
        factory: ALAIN_I18N_TOKEN_FACTORY,
    });
    /**
     * @return {?}
     */
    function ALAIN_I18N_TOKEN_FACTORY() {
        return new AlainI18NServiceFake();
    }
    var AlainI18NServiceFake = /** @class */ (function () {
        function AlainI18NServiceFake() {
            this.change$ = new rxjs.BehaviorSubject(null);
        }
        Object.defineProperty(AlainI18NServiceFake.prototype, "change", {
            /**
             * @return {?}
             */
            get: function () {
                return ( /** @type {?} */(this.change$.asObservable().pipe(operators.filter(( /**
                 * @param {?} w
                 * @return {?}
                 */function (/**
                 * @param {?} w
                 * @return {?}
                 */ w) { return w != null; })))));
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} lang
         * @return {?}
         */
        AlainI18NServiceFake.prototype.use = function (lang) {
            this.change$.next(lang);
        };
        /**
         * @return {?}
         */
        AlainI18NServiceFake.prototype.getLangs = function () {
            return [];
        };
        /**
         * @param {?} key
         * @return {?}
         */
        AlainI18NServiceFake.prototype.fanyi = function (key) {
            return key;
        };
        return AlainI18NServiceFake;
    }());
    AlainI18NServiceFake.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ AlainI18NServiceFake.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlainI18NServiceFake_Factory() { return new AlainI18NServiceFake(); }, token: AlainI18NServiceFake, providedIn: "root" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AlainI18NServiceFake.prototype.change$;
    }

    /**
     * 菜单服务，[在线文档](https://ng-alain.com/theme/menu)
     */
    var MenuService = /** @class */ (function () {
        /**
         * @param {?} i18nSrv
         * @param {?} aclService
         */
        function MenuService(i18nSrv, aclService) {
            var _this = this;
            this.i18nSrv = i18nSrv;
            this.aclService = aclService;
            this._change$ = new rxjs.BehaviorSubject([]);
            this.data = [];
            this.i18n$ = this.i18nSrv.change.subscribe(( /**
             * @return {?}
             */function () { return _this.resume(); }));
        }
        Object.defineProperty(MenuService.prototype, "change", {
            /**
             * @return {?}
             */
            get: function () {
                return this._change$.pipe(operators.share());
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} data
         * @param {?} callback
         * @return {?}
         */
        MenuService.prototype.visit = function (data, callback) {
            /** @type {?} */
            var inFn = ( /**
             * @param {?} list
             * @param {?} parentMenu
             * @param {?} depth
             * @return {?}
             */function (list, parentMenu, depth) {
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
            });
            inFn(data, null, 0);
        };
        /**
         * @param {?} items
         * @return {?}
         */
        MenuService.prototype.add = function (items) {
            this.data = items;
            this.resume();
        };
        /**
         * 重置菜单，可能I18N、用户权限变动时需要调用刷新
         * @param {?=} callback
         * @return {?}
         */
        MenuService.prototype.resume = function (callback) {
            var _this = this;
            /** @type {?} */
            var i = 1;
            /** @type {?} */
            var shortcuts = [];
            this.visit(this.data, ( /**
             * @param {?} item
             * @param {?} parent
             * @param {?} depth
             * @return {?}
             */function (item, parent, depth) {
                item._aclResult = true;
                item._id = i++;
                item._parent = parent;
                item._depth = depth;
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
                    /** @type {?} */
                    var type = 'class';
                    /** @type {?} */
                    var value = item.icon;
                    // compatible `anticon anticon-user`
                    if (~item.icon.indexOf("anticon-")) {
                        type = 'icon';
                        value = value.split('-').slice(1).join('-');
                    }
                    else if (/^https?:\/\//.test(item.icon)) {
                        type = 'img';
                    }
                    item.icon = ( /** @type {?} */({ type: type, value: value }));
                }
                if (item.icon != null) {
                    item.icon = Object.assign({ theme: 'outline', spin: false }, (( /** @type {?} */(item.icon))));
                }
                item.text = item.i18n && _this.i18nSrv ? _this.i18nSrv.fanyi(item.i18n) : item.text;
                // group
                item.group = item.group !== false;
                // hidden
                item._hidden = typeof item.hide === 'undefined' ? false : item.hide;
                // disabled
                item.disabled = typeof item.disabled === 'undefined' ? false : item.disabled;
                // acl
                item._aclResult = item.acl && _this.aclService ? _this.aclService.can(item.acl) : true;
                // shortcut
                if (parent && item.shortcut === true && parent.shortcutRoot !== true) {
                    shortcuts.push(item);
                }
                if (callback)
                    callback(item, parent, depth);
            }));
            this.loadShortcut(shortcuts);
            this._change$.next(this.data);
        };
        /**
         * 加载快捷菜单，加载位置规则如下：
         * 1、统一在下标0的节点下（即【主导航】节点下方）
         *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
         *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
         *      3、否则放在0节点位置
         * @private
         * @param {?} shortcuts
         * @return {?}
         */
        MenuService.prototype.loadShortcut = function (shortcuts) {
            if (shortcuts.length === 0 || this.data.length === 0) {
                return;
            }
            /** @type {?} */
            var ls = ( /** @type {?} */(this.data[0].children));
            /** @type {?} */
            var pos = ls.findIndex(( /**
             * @param {?} w
             * @return {?}
             */function (/**
             * @param {?} w
             * @return {?}
             */ w) { return w.shortcutRoot === true; }));
            if (pos === -1) {
                pos = ls.findIndex(( /**
                 * @param {?} w
                 * @return {?}
                 */function (/**
                 * @param {?} w
                 * @return {?}
                 */ w) { return ( /** @type {?} */(w.link)).includes('dashboard'); }));
                pos = (pos !== -1 ? pos : -1) + 1;
                /** @type {?} */
                var shortcutMenu = ( /** @type {?} */({
                    text: '快捷菜单',
                    i18n: 'shortcut',
                    icon: 'icon-rocket',
                    children: [],
                }));
                ( /** @type {?} */(this.data[0].children)).splice(pos, 0, shortcutMenu);
            }
            /** @type {?} */
            var _data = ( /** @type {?} */(this.data[0].children))[pos];
            if (_data.i18n && this.i18nSrv)
                _data.text = this.i18nSrv.fanyi(_data.i18n);
            // tslint:disable-next-line:prefer-object-spread
            _data = Object.assign(_data, ( /** @type {?} */({
                shortcutRoot: true,
                _id: -1,
                _parent: null,
                _depth: 1,
            })));
            _data.children = shortcuts.map(( /**
             * @param {?} i
             * @return {?}
             */function (/**
             * @param {?} i
             * @return {?}
             */ i) {
                i._depth = 2;
                i._parent = _data;
                return i;
            }));
        };
        Object.defineProperty(MenuService.prototype, "menus", {
            /**
             * @return {?}
             */
            get: function () {
                return this.data;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * 清空菜单
         * @return {?}
         */
        MenuService.prototype.clear = function () {
            this.data = [];
            this._change$.next(this.data);
        };
        /**
         * @param {?} data
         * @param {?} url
         * @param {?=} recursive
         * @param {?=} cb
         * @return {?}
         */
        MenuService.prototype.getHit = function (data, url, recursive, cb) {
            if (recursive === void 0) { recursive = false; }
            if (cb === void 0) { cb = null; }
            /** @type {?} */
            var item = null;
            while (!item && url) {
                this.visit(data, ( /**
                 * @param {?} i
                 * @return {?}
                 */function (/**
                 * @param {?} i
                 * @return {?}
                 */ i) {
                    if (cb) {
                        cb(i);
                    }
                    if (i.link != null && i.link === url) {
                        item = i;
                    }
                }));
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
         * @param {?} url
         * @param {?=} recursive
         * @return {?}
         */
        MenuService.prototype.openedByUrl = function (url, recursive) {
            if (recursive === void 0) { recursive = false; }
            if (!url)
                return;
            /** @type {?} */
            var findItem = this.getHit(this.data, url, recursive, ( /**
             * @param {?} i
             * @return {?}
             */function (/**
             * @param {?} i
             * @return {?}
             */ i) {
                i._selected = false;
                i._open = false;
            }));
            if (findItem == null)
                return;
            do {
                findItem._selected = true;
                findItem._open = true;
                findItem = ( /** @type {?} */(findItem._parent));
            } while (findItem);
        };
        /**
         * 根据url获取菜单列表
         * - 若 `recursive: true` 则会自动向上递归查找
         *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
         * @param {?} url
         * @param {?=} recursive
         * @return {?}
         */
        MenuService.prototype.getPathByUrl = function (url, recursive) {
            if (recursive === void 0) { recursive = false; }
            /** @type {?} */
            var ret = [];
            /** @type {?} */
            var item = this.getHit(this.data, url, recursive);
            if (!item)
                return ret;
            do {
                ret.splice(0, 0, item);
                item = ( /** @type {?} */(item._parent));
            } while (item);
            return ret;
        };
        /**
         * Get menu based on `key`
         * @param {?} key
         * @return {?}
         */
        MenuService.prototype.getItem = function (key) {
            /** @type {?} */
            var res = null;
            this.visit(this.data, ( /**
             * @param {?} item
             * @return {?}
             */function (/**
             * @param {?} item
             * @return {?}
             */ item) {
                if (res == null && item.key === key) {
                    res = item;
                }
            }));
            return res;
        };
        /**
         * Set menu based on `key`
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        MenuService.prototype.setItem = function (key, value) {
            /** @type {?} */
            var item = this.getItem(key);
            if (item == null)
                return;
            Object.keys(value).forEach(( /**
             * @param {?} k
             * @return {?}
             */function (/**
             * @param {?} k
             * @return {?}
             */ k) {
                item[k] = value[k];
            }));
            this._change$.next(this.data);
        };
        /**
         * @return {?}
         */
        MenuService.prototype.ngOnDestroy = function () {
            this._change$.unsubscribe();
            this.i18n$.unsubscribe();
        };
        return MenuService;
    }());
    MenuService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    MenuService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: i2.ACLService, decorators: [{ type: i0.Optional }] }
    ]; };
    /** @nocollapse */ MenuService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MenuService_Factory() { return new MenuService(i0.ɵɵinject(ALAIN_I18N_TOKEN, 8), i0.ɵɵinject(i2.ACLService, 8)); }, token: MenuService, providedIn: "root" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        MenuService.prototype._change$;
        /**
         * @type {?}
         * @private
         */
        MenuService.prototype.i18n$;
        /**
         * @type {?}
         * @private
         */
        MenuService.prototype.data;
        /**
         * @type {?}
         * @private
         */
        MenuService.prototype.i18nSrv;
        /**
         * @type {?}
         * @private
         */
        MenuService.prototype.aclService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/services/scroll/scroll.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScrollService = /** @class */ (function () {
        /**
         * @param {?} _doc
         * @param {?} platform
         */
        function ScrollService(_doc, platform) {
            this._doc = _doc;
            this.platform = platform;
        }
        /**
         * @private
         * @return {?}
         */
        ScrollService.prototype._getDoc = function () {
            return this._doc || document;
        };
        /**
         * @private
         * @return {?}
         */
        ScrollService.prototype._getWin = function () {
            /** @type {?} */
            var doc = this._getDoc();
            return doc.defaultView || window;
        };
        /**
         * 获取滚动条位置
         * @param {?=} element 指定元素，默认 `window`
         * @return {?}
         */
        ScrollService.prototype.getScrollPosition = function (element) {
            if (!this.platform.isBrowser) {
                return [0, 0];
            }
            /** @type {?} */
            var win = this._getWin();
            if (element && element !== win) {
                return [(( /** @type {?} */(element))).scrollLeft, (( /** @type {?} */(element))).scrollTop];
            }
            else {
                return [win.pageXOffset, win.pageYOffset];
            }
        };
        /**
         * 设置滚动条位置
         * @param {?} element 指定元素
         * @param {?} position
         * @return {?}
         */
        ScrollService.prototype.scrollToPosition = function (element, position) {
            if (!this.platform.isBrowser) {
                return;
            }
            (element || this._getWin()).scrollTo(position[0], position[1]);
        };
        /**
         * 设置滚动条至指定元素
         * @param {?=} element 指定元素，默认 `document.body`
         * @param {?=} topOffset 偏移值，默认 `0`
         * @return {?}
         */
        ScrollService.prototype.scrollToElement = function (element, topOffset) {
            if (topOffset === void 0) { topOffset = 0; }
            if (!this.platform.isBrowser) {
                return;
            }
            if (!element) {
                element = this._getDoc().body;
            }
            element.scrollIntoView();
            /** @type {?} */
            var win = this._getWin();
            if (win && win.scrollBy) {
                win.scrollBy(0, ( /** @type {?} */(element)).getBoundingClientRect().top - topOffset);
                if (win.pageYOffset < 20) {
                    win.scrollBy(0, -win.pageYOffset);
                }
            }
        };
        /**
         * 滚动至顶部
         * @param {?=} topOffset 偏移值，默认 `0`
         * @return {?}
         */
        ScrollService.prototype.scrollToTop = function (topOffset) {
            if (topOffset === void 0) { topOffset = 0; }
            if (!this.platform.isBrowser) {
                return;
            }
            this.scrollToElement(this._getDoc().body, topOffset);
        };
        return ScrollService;
    }());
    ScrollService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ScrollService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
        { type: i2$1.Platform }
    ]; };
    /** @nocollapse */ ScrollService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ScrollService_Factory() { return new ScrollService(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2$1.Platform)); }, token: ScrollService, providedIn: "root" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ScrollService.prototype._doc;
        /**
         * @type {?}
         * @private
         */
        ScrollService.prototype.platform;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/services/settings/settings.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LAYOUT = 'layout';
    /** @type {?} */
    var USER = 'user';
    /** @type {?} */
    var APP = 'app';
    var SettingsService = /** @class */ (function () {
        /**
         * @param {?} platform
         */
        function SettingsService(platform) {
            this.platform = platform;
            this.notify$ = new rxjs.Subject();
            this._app = null;
            this._user = null;
            this._layout = null;
        }
        /**
         * @param {?} key
         * @return {?}
         */
        SettingsService.prototype.getData = function (key) {
            if (!this.platform.isBrowser) {
                return null;
            }
            return JSON.parse(localStorage.getItem(key) || 'null') || null;
        };
        /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        SettingsService.prototype.setData = function (key, value) {
            if (!this.platform.isBrowser) {
                return;
            }
            localStorage.setItem(key, JSON.stringify(value));
        };
        Object.defineProperty(SettingsService.prototype, "layout", {
            /**
             * @return {?}
             */
            get: function () {
                if (!this._layout) {
                    this._layout = Object.assign({ fixed: true, collapsed: false, boxed: false, lang: null }, this.getData(LAYOUT));
                    this.setData(LAYOUT, this._layout);
                }
                return ( /** @type {?} */(this._layout));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SettingsService.prototype, "app", {
            /**
             * @return {?}
             */
            get: function () {
                if (!this._app) {
                    this._app = Object.assign({ year: new Date().getFullYear() }, this.getData(APP));
                    this.setData(APP, this._app);
                }
                return ( /** @type {?} */(this._app));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SettingsService.prototype, "user", {
            /**
             * @return {?}
             */
            get: function () {
                if (!this._user) {
                    this._user = Object.assign({}, this.getData(USER));
                    this.setData(USER, this._user);
                }
                return ( /** @type {?} */(this._user));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SettingsService.prototype, "notify", {
            /**
             * @return {?}
             */
            get: function () {
                return this.notify$.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} name
         * @param {?=} value
         * @return {?}
         */
        SettingsService.prototype.setLayout = function (name, value) {
            if (typeof name === 'string') {
                this.layout[name] = value;
            }
            else {
                this._layout = name;
            }
            this.setData(LAYOUT, this._layout);
            this.notify$.next(( /** @type {?} */({ type: 'layout', name: name, value: value })));
            return true;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        SettingsService.prototype.setApp = function (value) {
            this._app = value;
            this.setData(APP, value);
            this.notify$.next({ type: 'app', value: value });
        };
        /**
         * @param {?} value
         * @return {?}
         */
        SettingsService.prototype.setUser = function (value) {
            this._user = value;
            this.setData(USER, value);
            this.notify$.next({ type: 'user', value: value });
        };
        return SettingsService;
    }());
    SettingsService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    SettingsService.ctorParameters = function () { return [
        { type: i2$1.Platform }
    ]; };
    /** @nocollapse */ SettingsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SettingsService_Factory() { return new SettingsService(i0.ɵɵinject(i2$1.Platform)); }, token: SettingsService, providedIn: "root" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        SettingsService.prototype.notify$;
        /**
         * @type {?}
         * @private
         */
        SettingsService.prototype._app;
        /**
         * @type {?}
         * @private
         */
        SettingsService.prototype._user;
        /**
         * @type {?}
         * @private
         */
        SettingsService.prototype._layout;
        /**
         * @type {?}
         * @private
         */
        SettingsService.prototype.platform;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/services/responsive/responsive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var REP_MAX = 6;
    var ResponsiveService = /** @class */ (function () {
        /**
         * @param {?} cogSrv
         */
        function ResponsiveService(cogSrv) {
            this.cog = ( /** @type {?} */(cogSrv.merge('themeResponsive', {
                rules: {
                    1: { xs: 24 },
                    2: { xs: 24, sm: 12 },
                    3: { xs: 24, sm: 12, md: 8 },
                    4: { xs: 24, sm: 12, md: 8, lg: 6 },
                    5: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4 },
                    6: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 2 },
                },
            })));
            if (Object.keys(this.cog.rules)
                .map(( /**
         * @param {?} i
         * @return {?}
         */function (/**
         * @param {?} i
         * @return {?}
         */ i) { return +i; }))
                .some(( /**
         * @param {?} i
         * @return {?}
         */function (i) { return i < 1 || i > REP_MAX; }))) {
                throw new Error("[theme] the responseive rule index value range must be 1-" + REP_MAX);
            }
        }
        /**
         * @param {?} count
         * @return {?}
         */
        ResponsiveService.prototype.genCls = function (count) {
            /** @type {?} */
            var rule = this.cog.rules[count > REP_MAX ? REP_MAX : Math.max(count, 1)];
            /** @type {?} */
            var antColClass = 'ant-col';
            /** @type {?} */
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
    ResponsiveService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ResponsiveService.ctorParameters = function () { return [
        { type: i1$1.AlainConfigService }
    ]; };
    /** @nocollapse */ ResponsiveService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ResponsiveService_Factory() { return new ResponsiveService(i0.ɵɵinject(i1$1.AlainConfigService)); }, token: ResponsiveService, providedIn: "root" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ResponsiveService.prototype.cog;
    }

    var TitleService = /** @class */ (function () {
        /**
         * @param {?} injector
         * @param {?} title
         * @param {?} menuSrv
         * @param {?} i18nSrv
         * @param {?} doc
         */
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
            /**
             * 设置默认标题名
             */
            this.default = "Not Page Name";
            this.i18n$ = this.i18nSrv.change.pipe(operators.filter(( /**
             * @return {?}
             */function () { return !!_this.i18n$; }))).subscribe(( /**
             * @return {?}
             */function () { return _this.setTitle(); }));
        }
        Object.defineProperty(TitleService.prototype, "separator", {
            /**
             * 设置分隔符
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._separator = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TitleService.prototype, "prefix", {
            /**
             * 设置前缀
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._prefix = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TitleService.prototype, "suffix", {
            /**
             * 设置后缀
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._suffix = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TitleService.prototype, "reverse", {
            /**
             * 设置是否反转
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                this._reverse = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        TitleService.prototype.getByElement = function () {
            /** @type {?} */
            var el = ( /** @type {?} */((this.doc.querySelector('.alain-default__content-title h1') || this.doc.querySelector('.page-header__title'))));
            if (el) {
                /** @type {?} */
                var text_1 = '';
                el.childNodes.forEach(( /**
                 * @param {?} val
                 * @return {?}
                 */function (/**
                 * @param {?} val
                 * @return {?}
                 */ val) {
                    if (!text_1 && val.nodeType === 3) {
                        text_1 = ( /** @type {?} */(val.textContent)).trim();
                    }
                }));
                return text_1 || ( /** @type {?} */(( /** @type {?} */(el.firstChild)).textContent)).trim();
            }
            return '';
        };
        /**
         * @private
         * @return {?}
         */
        TitleService.prototype.getByRoute = function () {
            /** @type {?} */
            var next = this.injector.get(router.ActivatedRoute);
            while (next.firstChild)
                next = next.firstChild;
            /** @type {?} */
            var data = (next.snapshot && next.snapshot.data) || {};
            if (data.titleI18n && this.i18nSrv)
                data.title = this.i18nSrv.fanyi(data.titleI18n);
            return data.title;
        };
        /**
         * @private
         * @return {?}
         */
        TitleService.prototype.getByMenu = function () {
            /** @type {?} */
            var menus = this.menuSrv.getPathByUrl(this.injector.get(router.Router).url);
            if (!menus || menus.length <= 0)
                return '';
            /** @type {?} */
            var item = menus[menus.length - 1];
            /** @type {?} */
            var title;
            if (item.i18n && this.i18nSrv)
                title = this.i18nSrv.fanyi(item.i18n);
            return title || ( /** @type {?} */(item.text));
        };
        /**
         * @private
         * @param {?=} title
         * @return {?}
         */
        TitleService.prototype._setTitle = function (title) {
            if (!title) {
                title = this.getByRoute() || this.getByMenu() || this.getByElement() || this.default;
            }
            if (title && !Array.isArray(title)) {
                title = [title];
            }
            /** @type {?} */
            var newTitles = [];
            if (this._prefix) {
                newTitles.push(this._prefix);
            }
            newTitles.push.apply(newTitles, __spread((( /** @type {?} */(title)))));
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
         * @param {?=} title
         * @return {?}
         */
        TitleService.prototype.setTitle = function (title) {
            var _this = this;
            setTimeout(( /**
             * @return {?}
             */function () { return _this._setTitle(title); }), this.DELAY_TIME);
        };
        /**
         * Set i18n key of the document title
         * @param {?} key
         * @param {?=} params
         * @return {?}
         */
        TitleService.prototype.setTitleByI18n = function (key, params) {
            this.setTitle(this.i18nSrv.fanyi(key, params));
        };
        /**
         * @return {?}
         */
        TitleService.prototype.ngOnDestroy = function () {
            this.i18n$.unsubscribe();
        };
        return TitleService;
    }());
    TitleService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    TitleService.ctorParameters = function () { return [
        { type: i0.Injector },
        { type: i1$2.Title },
        { type: MenuService },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ TitleService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TitleService_Factory() { return new TitleService(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1$2.Title), i0.ɵɵinject(MenuService), i0.ɵɵinject(ALAIN_I18N_TOKEN, 8), i0.ɵɵinject(i1.DOCUMENT)); }, token: TitleService, providedIn: "root" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TitleService.prototype._prefix;
        /**
         * @type {?}
         * @private
         */
        TitleService.prototype._suffix;
        /**
         * @type {?}
         * @private
         */
        TitleService.prototype._separator;
        /**
         * @type {?}
         * @private
         */
        TitleService.prototype._reverse;
        /**
         * @type {?}
         * @private
         */
        TitleService.prototype.i18n$;
        /** @type {?} */
        TitleService.prototype.DELAY_TIME;
        /**
         * 设置默认标题名
         * @type {?}
         */
        TitleService.prototype.default;
        /**
         * @type {?}
         * @private
         */
        TitleService.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        TitleService.prototype.title;
        /**
         * @type {?}
         * @private
         */
        TitleService.prototype.menuSrv;
        /**
         * @type {?}
         * @private
         */
        TitleService.prototype.i18nSrv;
        /**
         * @type {?}
         * @private
         */
        TitleService.prototype.doc;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/locale/locale.tokens.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DELON_LOCALE = new i0.InjectionToken('delon-locale');

    /**
     * @fileoverview added by tsickle
     * Generated from: src/locale/languages/zh-CN.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var zhCN = ( /** @type {?} */({
        abbr: 'zh-CN',
        exception: {
            403: '抱歉，你无权访问该页面',
            404: '抱歉，你访问的页面不存在',
            500: '抱歉，服务器出错了',
            backToHome: '返回首页',
        },
        noticeIcon: {
            emptyText: '暂无数据',
            clearText: '清空',
        },
        reuseTab: {
            close: '关闭标签',
            closeOther: '关闭其它标签',
            closeRight: '关闭右侧标签',
            refresh: '刷新',
        },
        tagSelect: {
            expand: '展开',
            collapse: '收起',
        },
        miniProgress: {
            target: '目标值：',
        },
        st: {
            total: '共 {{total}} 条',
            filterConfirm: '确定',
            filterReset: '重置',
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
                if: "\u5E94\u5F53\u5339\u914D\u6A21\u5F0F \"{failingKeyword}\"",
            },
        },
        onboarding: {
            skip: "\u8DF3\u8FC7",
            prev: "\u4E0A\u4E00\u9879",
            next: "\u4E0B\u4E00\u9879",
            done: "\u5B8C\u6210",
        },
    }));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/locale/locale.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DelonLocaleService = /** @class */ (function () {
        /**
         * @param {?} locale
         */
        function DelonLocaleService(locale) {
            this.change$ = new rxjs.BehaviorSubject(this._locale);
            this.setLocale(locale || zhCN);
        }
        Object.defineProperty(DelonLocaleService.prototype, "change", {
            /**
             * @return {?}
             */
            get: function () {
                return this.change$.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} locale
         * @return {?}
         */
        DelonLocaleService.prototype.setLocale = function (locale) {
            if (this._locale && this._locale.abbr === locale.abbr) {
                return;
            }
            this._locale = locale;
            this.change$.next(locale);
        };
        Object.defineProperty(DelonLocaleService.prototype, "locale", {
            /**
             * @return {?}
             */
            get: function () {
                return this._locale;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} path
         * @return {?}
         */
        DelonLocaleService.prototype.getData = function (path) {
            return ( /** @type {?} */((this._locale[path] || {})));
        };
        return DelonLocaleService;
    }());
    DelonLocaleService.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    DelonLocaleService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [DELON_LOCALE,] }] }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DelonLocaleService.prototype._locale;
        /**
         * @type {?}
         * @private
         */
        DelonLocaleService.prototype.change$;
    }
    /**
     * @param {?} exist
     * @param {?} locale
     * @return {?}
     */
    function DELON_LOCALE_SERVICE_PROVIDER_FACTORY(exist, locale) {
        return exist || new DelonLocaleService(locale);
    }
    /** @type {?} */
    var DELON_LOCALE_SERVICE_PROVIDER = {
        provide: DelonLocaleService,
        useFactory: DELON_LOCALE_SERVICE_PROVIDER_FACTORY,
        deps: [[new i0.Optional(), new i0.SkipSelf(), DelonLocaleService], DELON_LOCALE],
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: src/locale/locale.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = zhCN;
    var DelonLocaleModule = /** @class */ (function () {
        function DelonLocaleModule() {
        }
        return DelonLocaleModule;
    }());
    DelonLocaleModule.decorators = [
        { type: i0.NgModule, args: [{
                    providers: [{ provide: DELON_LOCALE, useValue: ɵ0 }, DELON_LOCALE_SERVICE_PROVIDER],
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: src/locale/languages/en-US.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var enUS = ( /** @type {?} */({
        abbr: 'en-US',
        exception: {
            403: "Sorry, you don't have access to this page",
            404: "Sorry, the page you visited does not exist",
            500: "Sorry, the server is reporting an error",
            backToHome: 'Back To Home',
        },
        noticeIcon: {
            emptyText: 'No data',
            clearText: 'Clear',
        },
        reuseTab: {
            close: 'Close tab',
            closeOther: 'Close other tabs',
            closeRight: 'Close tabs to right',
            refresh: 'Refresh',
        },
        tagSelect: {
            expand: 'Expand',
            collapse: 'Collapse',
        },
        miniProgress: {
            target: 'Target: ',
        },
        st: {
            total: '{{range[0]}} - {{range[1]}} of {{total}}',
            filterConfirm: 'OK',
            filterReset: 'Reset',
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
                if: "Should match \"{failingKeyword}\" schema",
            },
        },
        onboarding: {
            skip: "Skip",
            prev: "Prev",
            next: "Next",
            done: "Done",
        },
    }));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/locale/languages/zh-TW.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var zhTW = ( /** @type {?} */({
        abbr: 'zh-TW',
        exception: {
            403: '抱歉，你無權訪問該頁麵',
            404: '抱歉，你訪問的頁麵不存在',
            500: '抱歉，服務器出錯了',
            backToHome: '返回首頁',
        },
        noticeIcon: {
            emptyText: '暫無數據',
            clearText: '清空',
        },
        reuseTab: {
            close: '關閉標簽',
            closeOther: '關閉其它標簽',
            closeRight: '關閉右側標簽',
            refresh: '刷新',
        },
        tagSelect: {
            expand: '展開',
            collapse: '收起',
        },
        miniProgress: {
            target: '目標值：',
        },
        st: {
            total: '共 {{total}} 條',
            filterConfirm: '確定',
            filterReset: '重置',
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
                if: "\u61C9\u7576\u5339\u914D\u6A21\u5F0F \"{failingKeyword}\"",
            },
        },
        onboarding: {
            skip: "\u8DF3\u904E",
            prev: "\u4E0A\u4E00\u9805",
            next: "\u4E0B\u4E00\u9805",
            done: "\u5B8C\u6210",
        },
    }));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/locale/languages/tr-TR.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var trTR = ( /** @type {?} */({
        abbr: 'tr-TR',
        exception: {
            403: "\u00DCzg\u00FCn\u00FCz, bu sayfaya eri\u015Fiminiz yok",
            404: "Maalesef bu sayfa mevcut de\u011Fil",
            500: "\u00DCzg\u00FCn\u00FCz, sunucu hatas\u0131",
            backToHome: "Ana Sayfa'ya geri d\u00F6n",
        },
        noticeIcon: {
            emptyText: 'Veri yok',
            clearText: 'Temiz',
        },
        reuseTab: {
            close: 'Sekmeyi Kapat',
            closeOther: 'Diğer sekmeleri kapat',
            closeRight: 'Sağdaki sekmeleri kapat',
            refresh: 'täzele',
        },
        tagSelect: {
            expand: 'Genişlet',
            collapse: 'Daralt',
        },
        miniProgress: {
            target: 'Hedef: ',
        },
        st: {
            total: '{{range[0]}} ile {{range[1]}} arasında {{total}}',
            filterConfirm: 'Tamam',
            filterReset: 'Sıfırla',
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
                if: "Should match \"{failingKeyword}\" schema",
            },
        },
        onboarding: {
            skip: "Atla",
            prev: "\u00D6nceki",
            next: "Sonraki",
            done: "Bitti",
        },
    }));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/locale/languages/pl-PL.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var plPL = ( /** @type {?} */({
        abbr: 'pl-PL',
        exception: {
            403: "Niestety, nie masz uprawnie\u0144 do tej strony",
            404: "Niestety, ta strona nie istnieje",
            500: "Niestety, b\u0142\u0105d serwera",
            backToHome: 'Powróć do strony głównej',
        },
        noticeIcon: {
            emptyText: 'Brak danych',
            clearText: 'Wyczyść',
        },
        reuseTab: {
            close: 'Zamknij kartę',
            closeOther: 'Zamknij inne karty',
            closeRight: 'Zamknij karty po prawej',
            refresh: 'Refresh',
        },
        tagSelect: {
            expand: 'Rozszerz',
            collapse: 'Zmniejsz',
        },
        miniProgress: {
            target: 'Cel: ',
        },
        st: {
            total: '{{range[0]}} - {{range[1]}} z {{total}}',
            filterConfirm: 'OK',
            filterReset: 'Wyczyść',
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
                if: "Should match \"{failingKeyword}\" schema",
            },
        },
        onboarding: {
            skip: "Pomin\u0105\u0107",
            prev: "Poprzedni",
            next: "Kolejny",
            done: "Gotowe",
        },
    }));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/locale/languages/el-GR.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var elGR = ( /** @type {?} */({
        abbr: 'el-GR',
        exception: {
            403: "\u039B\u03C5\u03C0\u03BF\u03CD\u03BC\u03B1\u03C3\u03C4\u03B5, \u03B4\u03B5\u03BD \u03AD\u03C7\u03B5\u03C4\u03B5 \u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7 \u03C3\u03B5 \u03B1\u03C5\u03C4\u03AE\u03BD \u03C4\u03B7 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1",
            404: "\u039B\u03C5\u03C0\u03BF\u03CD\u03BC\u03B1\u03C3\u03C4\u03B5, \u03B7 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1 \u03B1\u03C5\u03C4\u03AE \u03B4\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5",
            500: "\u039B\u03C5\u03C0\u03BF\u03CD\u03BC\u03B1\u03C3\u03C4\u03B5, \u03C3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03B4\u03B9\u03B1\u03BA\u03BF\u03BC\u03B9\u03C3\u03C4\u03AE",
            backToHome: 'Επιστροφή στην αρχική σελίδα',
        },
        noticeIcon: {
            emptyText: 'Δεν υπάρχουν δεδομένα',
            clearText: 'Καθαρισμός',
        },
        reuseTab: {
            close: 'Κλείσιμο καρτέλας',
            closeOther: 'Κλείσιμο των άλλων καρτέλων',
            closeRight: 'Κλείσιμο των καρτελών δεξιά',
            refresh: 'Ανανέωση',
        },
        tagSelect: {
            expand: 'Επέκταση',
            collapse: 'Σύμπτυξη',
        },
        miniProgress: {
            target: 'Στόχος: ',
        },
        st: {
            total: '{{range[0]}} - {{range[1]}} από {{total}}',
            filterConfirm: 'ΟΚ',
            filterReset: 'Επαναφορά',
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
                if: "\u03A0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03C3\u03C4\u03B7\u03BD \u03B4\u03BF\u03BC\u03AE \"{failingKeyword}\"",
            },
        },
        onboarding: {
            skip: "\u03A0\u03B1\u03C1\u03B1\u03BB\u03B5\u03AF\u03C0\u03C9",
            prev: "\u03A0\u03C1\u03BF\u03B7\u03B3",
            next: "\u0395\u03C0\u03CC\u03BC\u03B5\u03BD\u03BF",
            done: "\u039F\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5",
        },
    }));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/locale/languages/ko-KR.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var koKR = ( /** @type {?} */({
        abbr: 'ko-KR',
        exception: {
            403: "\uC8C4\uC1A1\uD569\uB2C8\uB2E4.\uC774 \uD398\uC774\uC9C0\uC5D0 \uC561\uC138\uC2A4 \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",
            404: "\uC8C4\uC1A1\uD569\uB2C8\uB2E4. \uD574\uB2F9 \uD398\uC774\uC9C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",
            500: "\uC8C4\uC1A1\uD569\uB2C8\uB2E4, \uC11C\uBC84 \uC624\uB958\uAC00 \uC788\uC2B5\uB2C8\uB2E4.",
            backToHome: '홈으로 돌아갑니다.',
        },
        noticeIcon: {
            emptyText: '데이터 없음',
            clearText: '지우기',
        },
        reuseTab: {
            close: '탭 닫기',
            closeOther: '다른 탭 닫기',
            closeRight: '오른쪽 탭 닫기',
            refresh: '새롭게 하다',
        },
        tagSelect: {
            expand: '펼치기',
            collapse: '접기',
        },
        miniProgress: {
            target: '대상: ',
        },
        st: {
            total: '전체 {{total}}건',
            filterConfirm: '확인',
            filterReset: '초기화',
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
                if: "Should match \"{failingKeyword}\" schema",
            },
        },
        onboarding: {
            skip: "\uAC74\uB108 \uB6F0\uAE30",
            prev: "\uC774\uC804",
            next: "\uB2E4\uC74C",
            done: "\uB05D\uB09C",
        },
    }));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/locale/languages/hr-HR.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var hrHR = ( /** @type {?} */({
        abbr: 'hr-HR',
        exception: {
            403: "Na\u017Ealost, nemate pristup ovoj lokaciji",
            404: "Na\u017Ealost, lokacija ne postoji",
            500: "Na\u017Ealost, server je javio pogre\u0161ku",
            backToHome: 'Nazad na početnu stranicu',
        },
        noticeIcon: {
            emptyText: 'Nema podataka',
            clearText: 'Obriši',
        },
        reuseTab: {
            close: 'Zatvori karticu',
            closeOther: 'Zatvori druge kartice',
            closeRight: 'Zatvori kartice desno',
            refresh: 'Refresh',
        },
        tagSelect: {
            expand: 'Proširi',
            collapse: 'Skupi',
        },
        miniProgress: {
            target: 'Cilj: ',
        },
        st: {
            total: '{{range[0]}} - {{range[1]}} od {{total}}',
            filterConfirm: 'U redu',
            filterReset: 'Poništi',
        },
        sf: {
            submit: 'Pošalji',
            reset: 'Poništi',
            search: 'Pretraži',
            edit: 'Spremi',
            addText: 'Dodaj',
            removeText: 'Ukloni',
            checkAllText: 'Označi sve',
        },
        onboarding: {
            skip: "Presko\u010Diti",
            prev: "Prethodna",
            next: "Sljede\u0107i",
            done: "Sastavljeno",
        },
    }));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/locale/languages/ja-JP.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var jaJP = ( /** @type {?} */({
        abbr: 'ja-JP',
        exception: {
            403: 'ページへのアクセス権限がありません',
            404: 'ページが存在しません',
            500: 'サーバーエラーが発生しました',
            backToHome: 'ホームに戻る',
        },
        noticeIcon: {
            emptyText: 'データが有りません',
            clearText: 'クリア',
        },
        reuseTab: {
            close: 'タブを閉じる',
            closeOther: '他のタブを閉じる',
            closeRight: '右のタブを閉じる',
            refresh: 'リフレッシュ',
        },
        tagSelect: {
            expand: '展開する',
            collapse: '折りたたむ',
        },
        miniProgress: {
            target: '設定値: ',
        },
        st: {
            total: '{{range[0]}} - {{range[1]}} / {{total}}',
            filterConfirm: '確定',
            filterReset: 'リセット',
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
                maxItems: "\u6700\u5927\u9078\u629E\u6570\u306F {limit}\u3000\u3088\u308A\u5C0F\u3055\u3044\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059",
                minItems: "\u6700\u5C0F\u9078\u629E\u6570\u306F {limit}\u3000\u3088\u308A\u5927\u304D\u3044\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059",
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
                if: "\u30D1\u30BF\u30FC\u30F3\u3068\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059: \"{failingKeyword}\" ",
            },
        },
        onboarding: {
            skip: "\u30B9\u30AD\u30C3\u30D7",
            prev: "\u524D\u3078",
            next: "\u6B21",
            done: "\u3067\u304D\u305F",
        },
    }));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/locale/languages/sl-SI.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var slSI = ( /** @type {?} */({
        abbr: 'sl-SI',
        exception: {
            403: "\u017Dal nimate dostopa do te strani",
            404: "\u017Dal stran, ki ste jo obiskali, ne obstaja",
            500: "\u017Dal stre\u017Enik poro\u010Da o napaki",
            backToHome: 'Nazaj domov',
        },
        noticeIcon: {
            emptyText: 'Ni podatkov',
            clearText: 'Počisti',
        },
        reuseTab: {
            close: 'Zapri zavihek',
            closeOther: 'Zaprite druge zavihke',
            closeRight: 'Zaprite zavihke na desni',
        },
        tagSelect: {
            expand: 'Razširi',
            collapse: 'Strni',
        },
        miniProgress: {
            target: 'Cilj: ',
        },
        st: {
            total: '{{range[0]}} - {{range[1]}} of {{total}}',
            filterConfirm: 'OK',
            filterReset: 'Reset',
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
                if: "Naj se ujema s shemo \"{failingKeyword}\"",
            },
        },
        onboarding: {
            skip: "Presko\u010Di",
            prev: "Prej\u0161nje",
            next: "Naslednji",
            done: "Kon\u010Dano",
        },
    }));

    /**
     * @fileoverview added by tsickle
     * Generated from: src/locale/public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: src/locale/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: src/services/modal/modal.helper.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ModalHelperOptions() { }
    if (false) {
        /**
         * 大小；例如：lg、600，默认：`lg`
         * @type {?|undefined}
         */
        ModalHelperOptions.prototype.size;
        /**
         * 对话框 [ModalOptions](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts) 参数
         * @type {?|undefined}
         */
        ModalHelperOptions.prototype.modalOptions;
        /**
         * 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误
         * @type {?|undefined}
         */
        ModalHelperOptions.prototype.exact;
        /**
         * 是否包裹标签页，修复模态包含标签间距问题
         * @type {?|undefined}
         */
        ModalHelperOptions.prototype.includeTabs;
    }
    /**
     * 对话框辅助类
     */
    var ModalHelper = /** @class */ (function () {
        /**
         * @param {?} srv
         */
        function ModalHelper(srv) {
            this.srv = srv;
        }
        /**
         * 构建一个对话框
         *
         * \@example
         * this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());
         * // 对于组件的成功&关闭的处理说明
         * // 成功
         * this.NzModalRef.close(data);
         * this.NzModalRef.close();
         * // 关闭
         * this.NzModalRef.destroy();
         * @param {?} comp 组件
         * @param {?=} params 组件参数
         * @param {?=} options 额外参数
         *
         * @return {?}
         */
        ModalHelper.prototype.create = function (comp, params, options) {
            var _this = this;
            options = i1$1.deepMerge({
                size: 'lg',
                exact: true,
                includeTabs: false,
            }, options);
            return new rxjs.Observable(( /**
             * @param {?} observer
             * @return {?}
             */function (observer) {
                var _a = ( /** @type {?} */(options)), size = _a.size, includeTabs = _a.includeTabs, modalOptions = _a.modalOptions;
                /** @type {?} */
                var cls = '';
                /** @type {?} */
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
                /** @type {?} */
                var defaultOptions = {
                    nzWrapClassName: cls,
                    nzContent: comp,
                    nzWidth: width ? width : undefined,
                    nzFooter: null,
                    nzComponentParams: params,
                };
                /** @type {?} */
                var subject = _this.srv.create(Object.assign(Object.assign({}, defaultOptions), modalOptions));
                /** @type {?} */
                var afterClose$ = subject.afterClose.subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    if (( /** @type {?} */(options)).exact === true) {
                        if (res != null) {
                            observer.next(res);
                        }
                    }
                    else {
                        observer.next(res);
                    }
                    observer.complete();
                    afterClose$.unsubscribe();
                }));
            }));
        };
        /**
         * 构建静态框，点击蒙层不允许关闭
         *
         * \@example
         * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
         * // 对于组件的成功&关闭的处理说明
         * // 成功
         * this.NzModalRef.close(data);
         * this.NzModalRef.close();
         * // 关闭
         * this.NzModalRef.destroy();
         * @param {?} comp 组件
         * @param {?=} params 组件参数
         * @param {?=} options 额外参数
         *
         * @return {?}
         */
        ModalHelper.prototype.createStatic = function (comp, params, options) {
            /** @type {?} */
            var modalOptions = Object.assign({ nzMaskClosable: false }, (options && options.modalOptions));
            return this.create(comp, params, Object.assign(Object.assign({}, options), { modalOptions: modalOptions }));
        };
        /**
         * 打开对话框
         * \@example
         * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
         * // 对于组件的成功&关闭的处理说明
         * // 成功
         * this.NzModalRef.close(data);
         * this.NzModalRef.close();
         * // 关闭
         * this.NzModalRef.destroy();
         * @param {?} comp 组件
         * @param {?=} params 组件参数
         * @param {?=} size 大小；例如：lg、600，默认：lg
         *
         * @param {?=} options
         * @return {?}
         */
        ModalHelper.prototype.open = function (comp, params, size, options) {
            if (size === void 0) { size = 'lg'; }
            return this.create(comp, params, {
                size: size,
                modalOptions: options,
                exact: false,
            });
        };
        /**
         * 静态框，点击蒙层不允许关闭
         * \@example
         * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
         * // 对于组件的成功&关闭的处理说明
         * // 成功
         * this.NzModalRef.close(data);
         * this.NzModalRef.close();
         * // 关闭
         * this.NzModalRef.destroy();
         * @param {?} comp 组件
         * @param {?=} params 组件参数
         * @param {?=} size 大小；例如：lg、600，默认：lg
         *
         * @param {?=} options
         * @return {?}
         */
        ModalHelper.prototype.static = function (comp, params, size, options) {
            if (size === void 0) { size = 'lg'; }
            return this.open(comp, params, size, Object.assign({ nzMaskClosable: false }, options));
        };
        return ModalHelper;
    }());
    ModalHelper.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ModalHelper.ctorParameters = function () { return [
        { type: i1$3.NzModalService }
    ]; };
    /** @nocollapse */ ModalHelper.ɵprov = i0.ɵɵdefineInjectable({ factory: function ModalHelper_Factory() { return new ModalHelper(i0.ɵɵinject(i1$3.NzModalService)); }, token: ModalHelper, providedIn: "root" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ModalHelper.prototype.srv;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/services/drawer/drawer.helper.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DrawerHelperOptions() { }
    if (false) {
        /**
         * 大小，若值为数值类型，则根据 `nzPlacement` 自动转化为 `nzHeight` 或 `nzWidth`；例如：lg、600，默认：`md`
         *
         * | 类型 | 默认大小 |
         * | --- | ------ |
         * | `sm` | `300` |
         * | `md` | `600` |
         * | `lg` | `900` |
         * | `xl` | `1200` |
         *
         * > 以上值，可通过覆盖相应的LESS参数自行调整
         * @type {?|undefined}
         */
        DrawerHelperOptions.prototype.size;
        /**
         * 是否包含底部工具条，默认：`true`
         * @type {?|undefined}
         */
        DrawerHelperOptions.prototype.footer;
        /**
         * 底部工具条高度，默认：`55`
         * @type {?|undefined}
         */
        DrawerHelperOptions.prototype.footerHeight;
        /**
         * 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误
         * @type {?|undefined}
         */
        DrawerHelperOptions.prototype.exact;
        /**
         * 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数
         * @type {?|undefined}
         */
        DrawerHelperOptions.prototype.drawerOptions;
    }
    /**
     * 抽屉辅助类
     *
     * **注意：** 构建结果都可被订阅，但永远都不会触发 `observer.error`
     *
     * \@example
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
        /**
         * @param {?} srv
         */
        function DrawerHelper(srv) {
            this.srv = srv;
        }
        /**
         * 构建一个抽屉
         * @param {?} title
         * @param {?} comp
         * @param {?=} params
         * @param {?=} options
         * @return {?}
         */
        DrawerHelper.prototype.create = function (title, comp, params, options) {
            var _this = this;
            options = i1$1.deepMerge({
                size: 'md',
                footer: true,
                footerHeight: 50,
                exact: true,
                drawerOptions: {
                    nzPlacement: 'right',
                    nzWrapClassName: '',
                },
            }, options);
            return new rxjs.Observable(( /**
             * @param {?} observer
             * @return {?}
             */function (observer) {
                var _a = ( /** @type {?} */(options)), size = _a.size, footer = _a.footer, footerHeight = _a.footerHeight, drawerOptions = _a.drawerOptions;
                /** @type {?} */
                var defaultOptions = {
                    nzContent: comp,
                    nzContentParams: params,
                    nzTitle: title,
                };
                if (typeof size === 'number') {
                    defaultOptions[( /** @type {?} */(drawerOptions)).nzPlacement === 'top' || ( /** @type {?} */(drawerOptions)).nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'] = ( /** @type {?} */(options)).size;
                }
                else if (!( /** @type {?} */(drawerOptions)).nzWidth) {
                    defaultOptions.nzWrapClassName = (( /** @type {?} */(drawerOptions)).nzWrapClassName + (" drawer-" + ( /** @type {?} */(options)).size)).trim();
                    delete ( /** @type {?} */(drawerOptions)).nzWrapClassName;
                }
                if (footer) {
                    // The 24 value is @drawer-body-padding
                    defaultOptions.nzBodyStyle = {
                        'padding-bottom.px': ( /** @type {?} */(footerHeight)) + 24,
                    };
                }
                /** @type {?} */
                var subject = _this.srv.create(Object.assign(Object.assign({}, defaultOptions), drawerOptions));
                /** @type {?} */
                var afterClose$ = subject.afterClose.subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    if (( /** @type {?} */(options)).exact === true) {
                        if (res != null) {
                            observer.next(res);
                        }
                    }
                    else {
                        observer.next(res);
                    }
                    observer.complete();
                    afterClose$.unsubscribe();
                }));
            }));
        };
        /**
         * 构建一个抽屉，点击蒙层不允许关闭
         * @param {?} title
         * @param {?} comp
         * @param {?=} params
         * @param {?=} options
         * @return {?}
         */
        DrawerHelper.prototype.static = function (title, comp, params, options) {
            /** @type {?} */
            var drawerOptions = Object.assign({ nzMaskClosable: false }, (options && options.drawerOptions));
            return this.create(title, comp, params, Object.assign(Object.assign({}, options), { drawerOptions: drawerOptions }));
        };
        return DrawerHelper;
    }());
    DrawerHelper.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    DrawerHelper.ctorParameters = function () { return [
        { type: i1$4.NzDrawerService }
    ]; };
    /** @nocollapse */ DrawerHelper.ɵprov = i0.ɵɵdefineInjectable({ factory: function DrawerHelper_Factory() { return new DrawerHelper(i0.ɵɵinject(i1$4.NzDrawerService)); }, token: DrawerHelper, providedIn: "root" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DrawerHelper.prototype.srv;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/services/http/http.client.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * 封装HttpClient，主要解决：
     * + 优化HttpClient在参数上便利性
     * + 统一实现 loading
     * + 统一处理时间格式问题
     */
    // tslint:disable-next-line:class-name
    var _HttpClient = /** @class */ (function () {
        /**
         * @param {?} http
         * @param {?} cogSrv
         */
        function _HttpClient(http, cogSrv) {
            this.http = http;
            this._loading = false;
            this.cog = ( /** @type {?} */(cogSrv.merge('themeHttp', {
                nullValueHandling: 'include',
                dateValueHandling: 'timestamp',
            })));
        }
        Object.defineProperty(_HttpClient.prototype, "loading", {
            /**
             * 是否正在加载中
             * @return {?}
             */
            get: function () {
                return this._loading;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param {?} params
         * @return {?}
         */
        _HttpClient.prototype.parseParams = function (params) {
            var _this = this;
            /** @type {?} */
            var newParams = {};
            if (params instanceof i1$5.HttpParams) {
                return params;
            }
            Object.keys(params).forEach(( /**
             * @param {?} key
             * @return {?}
             */function (/**
             * @param {?} key
             * @return {?}
             */ key) {
                /** @type {?} */
                var _data = params[key];
                // 忽略空值
                if (_this.cog.nullValueHandling === 'ignore' && _data == null)
                    return;
                // 将时间转化为：时间戳 (秒)
                if (_this.cog.dateValueHandling === 'timestamp' && _data instanceof Date) {
                    _data = _data.valueOf();
                }
                newParams[key] = _data;
            }));
            return new i1$5.HttpParams({ fromObject: newParams });
        };
        /**
         * @param {?} url
         * @param {?=} params
         * @return {?}
         */
        _HttpClient.prototype.appliedUrl = function (url, params) {
            if (!params)
                return url;
            url += ~url.indexOf('?') ? '' : '?';
            /** @type {?} */
            var arr = [];
            // tslint:disable-next-line: forin
            for (var key in params) {
                arr.push(key + "=" + params[key]);
            }
            return url + arr.join('&');
        };
        /**
         * @return {?}
         */
        _HttpClient.prototype.begin = function () {
            var _this = this;
            Promise.resolve(null).then(( /**
             * @return {?}
             */function () { return (_this._loading = true); }));
        };
        /**
         * @return {?}
         */
        _HttpClient.prototype.end = function () {
            var _this = this;
            Promise.resolve(null).then(( /**
             * @return {?}
             */function () { return (_this._loading = false); }));
        };
        /**
         * GET 请求
         * @param {?} url
         * @param {?} params
         * @param {?=} options
         * @return {?}
         */
        _HttpClient.prototype.get = function (url, params, options) {
            if (options === void 0) { options = {}; }
            return this.request('GET', url, Object.assign({ params: params }, options));
        };
        /**
         * POST 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?=} options
         * @return {?}
         */
        _HttpClient.prototype.post = function (url, body, params, options) {
            if (options === void 0) { options = {}; }
            return this.request('POST', url, Object.assign({ body: body,
                params: params }, options));
        };
        /**
         * DELETE 请求
         * @param {?} url
         * @param {?} params
         * @param {?=} options
         * @return {?}
         */
        _HttpClient.prototype.delete = function (url, params, options) {
            if (options === void 0) { options = {}; }
            return this.request('DELETE', url, Object.assign({ params: params }, options));
        };
        // #endregion
        // #region jsonp
        /**
         * `jsonp` 请求
         *
         * @param {?} url URL地址
         * @param {?=} params 请求参数
         * @param {?=} callbackParam CALLBACK值，默认：JSONP_CALLBACK
         * @return {?}
         */
        _HttpClient.prototype.jsonp = function (url, params, callbackParam) {
            var _this = this;
            if (callbackParam === void 0) { callbackParam = 'JSONP_CALLBACK'; }
            this.begin();
            return this.http.jsonp(this.appliedUrl(url, params), callbackParam).pipe(operators.tap(( /**
             * @return {?}
             */function () { return _this.end(); })), operators.catchError(( /**
             * @param {?} res
             * @return {?}
             */function (/**
             * @param {?} res
             * @return {?}
             */ res) {
                _this.end();
                return rxjs.throwError(res);
            })));
        };
        /**
         * PATCH 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?=} options
         * @return {?}
         */
        _HttpClient.prototype.patch = function (url, body, params, options) {
            if (options === void 0) { options = {}; }
            return this.request('PATCH', url, Object.assign({ body: body,
                params: params }, options));
        };
        /**
         * PUT 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?=} options
         * @return {?}
         */
        _HttpClient.prototype.put = function (url, body, params, options) {
            if (options === void 0) { options = {}; }
            return this.request('PUT', url, Object.assign({ body: body,
                params: params }, options));
        };
        /**
         * 发送传统表单请求（即：`application/x-www-form-urlencoded`）
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?=} options
         * @return {?}
         */
        _HttpClient.prototype.form = function (url, body, params, options) {
            if (options === void 0) { options = {}; }
            return this.request('POST', url, Object.assign(Object.assign({ body: body,
                params: params }, options), { headers: {
                    'content-type': "application/x-www-form-urlencoded",
                } }));
        };
        /**
         * @param {?} method
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        _HttpClient.prototype.request = function (method, url, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            this.begin();
            if (options.params)
                options.params = this.parseParams(options.params);
            return rxjs.of(null).pipe(operators.tap(( /**
             * @return {?}
             */function () { return _this.begin(); })), operators.switchMap(( /**
             * @return {?}
             */function () { return _this.http.request(method, url, options); })), operators.tap(( /**
             * @return {?}
             */function () { return _this.end(); })), operators.catchError(( /**
             * @param {?} res
             * @return {?}
             */function (/**
             * @param {?} res
             * @return {?}
             */ res) {
                _this.end();
                return rxjs.throwError(res);
            })));
        };
        return _HttpClient;
    }());
    _HttpClient.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    _HttpClient.ctorParameters = function () { return [
        { type: i1$5.HttpClient },
        { type: i1$1.AlainConfigService }
    ]; };
    /** @nocollapse */ _HttpClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function _HttpClient_Factory() { return new _HttpClient(i0.ɵɵinject(i1$5.HttpClient), i0.ɵɵinject(i1$1.AlainConfigService)); }, token: _HttpClient, providedIn: "root" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        _HttpClient.prototype.cog;
        /**
         * @type {?}
         * @private
         */
        _HttpClient.prototype._loading;
        /**
         * @type {?}
         * @private
         */
        _HttpClient.prototype.http;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/services/http/http.decorator.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Every http decorator must be based on `BaseAPI`, Like this:
     * ```ts
     * \\@Injectable()
     * class DataService extends BaseApi {}
     * ```
     * @abstract
     */
    var BaseApi = /** @class */ (function () {
        /**
         * @param {?} injector
         */
        function BaseApi(injector) {
            this.injector = injector;
        }
        return BaseApi;
    }());
    BaseApi.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    BaseApi.ctorParameters = function () { return [
        { type: i0.Injector, decorators: [{ type: i0.Inject, args: [i0.Injector,] }] }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        BaseApi.prototype.injector;
    }
    /**
     * @record
     */
    function HttpOptions() { }
    if (false) {
        /**
         * ACL配置，若导入 `\@delon/acl` 时自动有效，等同于 `ACLService.can(roleOrAbility: ACLCanType)` 参数值
         * @type {?|undefined}
         */
        HttpOptions.prototype.acl;
        /** @type {?|undefined} */
        HttpOptions.prototype.observe;
        /** @type {?|undefined} */
        HttpOptions.prototype.responseType;
        /** @type {?|undefined} */
        HttpOptions.prototype.reportProgress;
        /** @type {?|undefined} */
        HttpOptions.prototype.withCredentials;
    }
    /**
     * @record
     */
    function ParamType() { }
    if (false) {
        /** @type {?} */
        ParamType.prototype.key;
        /** @type {?} */
        ParamType.prototype.index;
        /* Skipping unhandled member: [key: string]: any;*/
        /* Skipping unhandled member: [key: number]: any;*/
    }
    /** @type {?} */
    var paramKey = "__api_params";
    /**
     * @param {?} target
     * @param {?=} key
     * @return {?}
     */
    function setParam(target, key) {
        if (key === void 0) { key = paramKey; }
        /** @type {?} */
        var params = target[key];
        if (typeof params === 'undefined') {
            params = target[key] = {};
        }
        return params;
    }
    /**
     * 默认基准URL
     * - 有效范围：类
     * @param {?} url
     * @return {?}
     */
    function BaseUrl(url) {
        return ( /**
         * @template TClass
         * @param {?} target
         * @return {?}
         */function (target) {
            /** @type {?} */
            var params = setParam(target.prototype);
            params.baseUrl = url;
            return target;
        });
    }
    /**
     * 默认 `headers`
     * - 有效范围：类
     * @param {?} headers
     * @return {?}
     */
    function BaseHeaders(headers) {
        return ( /**
         * @template TClass
         * @param {?} target
         * @return {?}
         */function (target) {
            /** @type {?} */
            var params = setParam(target.prototype);
            params.baseHeaders = headers;
            return target;
        });
    }
    /**
     * @param {?} paramName
     * @return {?}
     */
    function makeParam(paramName) {
        return ( /**
         * @param {?=} key
         * @return {?}
         */function (key) {
            return ( /**
             * @param {?} target
             * @param {?} propertyKey
             * @param {?} index
             * @return {?}
             */function (target, propertyKey, index) {
                /** @type {?} */
                var params = setParam(setParam(target), propertyKey);
                /** @type {?} */
                var tParams = params[paramName];
                if (typeof tParams === 'undefined') {
                    tParams = params[paramName] = [];
                }
                tParams.push({
                    key: key,
                    index: index,
                });
            });
        });
    }
    /**
     * URL路由参数
     * - 有效范围：方法参数
     * @type {?}
     */
    var Path = makeParam('path');
    /**
     * URL 参数 `QueryString`
     * - 有效范围：方法参数
     * @type {?}
     */
    var Query = makeParam('query');
    /**
     * 参数 `Body`
     * - 有效范围：方法参数
     * @type {?}
     */
    var Body = makeParam('body')();
    /**
     * 参数 `headers`
     * - 有效范围：方法参数
     * - 合并 `BaseHeaders`
     * @type {?}
     */
    var Headers = makeParam('headers');
    /**
     * Request Payload
     * - Supported body (like`POST`, `PUT`) as a body data, equivalent to `\@Body`
     * - Not supported body (like `GET`, `DELETE` etc) as a `QueryString`
     * @type {?}
     */
    var Payload = makeParam('payload')();
    /**
     * @param {?} data
     * @param {?} key
     * @param {?} args
     * @return {?}
     */
    function getValidArgs(data, key, args) {
        if (!data[key] || !Array.isArray(data[key]) || data[key].length <= 0) {
            return undefined;
        }
        return args[data[key][0].index];
    }
    /**
     * @param {?=} data
     * @param {?=} payload
     * @return {?}
     */
    function genBody(data, payload) {
        if (Array.isArray(data) || Array.isArray(payload)) {
            // tslint:disable-next-line:prefer-object-spread
            return Object.assign([], data, payload);
        }
        // tslint:disable-next-line:prefer-object-spread
        return Object.assign({}, data, payload);
    }
    /**
     * @param {?} method
     * @return {?}
     */
    function makeMethod(method) {
        return ( /**
         * @param {?=} url
         * @param {?=} options
         * @return {?}
         */function (url, options) {
            if (url === void 0) { url = ''; }
            return ( /**
             * @param {?} _target
             * @param {?=} targetKey
             * @param {?=} descriptor
             * @return {?}
             */function (_target, targetKey, descriptor) {
                ( /** @type {?} */(descriptor)).value = ( /**
                 * @param {...?} args
                 * @return {?}
                 */function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    options = options || {};
                    /** @type {?} */
                    var injector = ( /** @type {?} */((( /** @type {?} */(this))).injector));
                    /** @type {?} */
                    var http = ( /** @type {?} */(injector.get(_HttpClient, null)));
                    if (http == null) {
                        throw new TypeError("Not found '_HttpClient', You can import 'AlainThemeModule' && 'HttpClientModule' in your root module.");
                    }
                    /** @type {?} */
                    var baseData = setParam(this);
                    /** @type {?} */
                    var data = setParam(baseData, targetKey);
                    /** @type {?} */
                    var requestUrl = url || '';
                    requestUrl = [baseData.baseUrl || '', requestUrl.startsWith('/') ? requestUrl.substr(1) : requestUrl].join('/');
                    // fix last split
                    if (requestUrl.length > 1 && requestUrl.endsWith('/')) {
                        requestUrl = requestUrl.substr(0, requestUrl.length - 1);
                    }
                    if (options.acl) {
                        /** @type {?} */
                        var aclSrv = injector.get(i2.ACLService, null);
                        if (aclSrv && !aclSrv.can(options.acl)) {
                            return rxjs.throwError({
                                url: requestUrl,
                                status: 401,
                                statusText: "From Http Decorator",
                            });
                        }
                        delete options.acl;
                    }
                    requestUrl = requestUrl.replace(/::/g, '^^');
                    ((( /** @type {?} */(data.path))) || [])
                        .filter(( /**
                 * @param {?} w
                 * @return {?}
                 */function (/**
                 * @param {?} w
                 * @return {?}
                 */ w) { return typeof args[w.index] !== 'undefined'; }))
                        .forEach(( /**
                 * @param {?} i
                 * @return {?}
                 */function (i) {
                        requestUrl = requestUrl.replace(new RegExp(":" + i.key, 'g'), encodeURIComponent(args[i.index]));
                    }));
                    requestUrl = requestUrl.replace(/\^\^/g, ":");
                    /** @type {?} */
                    var params = (data.query || []).reduce(( /**
                     * @param {?} p
                     * @param {?} i
                     * @return {?}
                     */function (p, i) {
                        p[i.key] = args[i.index];
                        return p;
                    }), {});
                    /** @type {?} */
                    var headers = (data.headers || []).reduce(( /**
                     * @param {?} p
                     * @param {?} i
                     * @return {?}
                     */function (p, i) {
                        p[i.key] = args[i.index];
                        return p;
                    }), {});
                    if (method === 'FORM') {
                        headers['content-type'] = 'application/x-www-form-urlencoded';
                    }
                    /** @type {?} */
                    var payload = getValidArgs(data, 'payload', args);
                    /** @type {?} */
                    var supportedBody = method === 'POST' || method === 'PUT';
                    return http.request(method, requestUrl, Object.assign({ body: supportedBody ? genBody(getValidArgs(data, 'body', args), payload) : null, params: !supportedBody ? Object.assign(Object.assign({}, params), payload) : params, headers: Object.assign(Object.assign({}, baseData.baseHeaders), headers) }, options));
                });
                return descriptor;
            });
        });
    }
    /**
     * `OPTIONS` 请求
     * - 有效范围：方法
     * @type {?}
     */
    var OPTIONS = makeMethod('OPTIONS');
    /**
     * `GET` 请求
     * - 有效范围：方法
     * @type {?}
     */
    var GET = makeMethod('GET');
    /**
     * `POST` 请求
     * - 有效范围：方法
     * @type {?}
     */
    var POST = makeMethod('POST');
    /**
     * `DELETE` 请求
     * - 有效范围：方法
     * @type {?}
     */
    var DELETE = makeMethod('DELETE');
    /**
     * `PUT` 请求
     * - 有效范围：方法
     * @type {?}
     */
    var PUT = makeMethod('PUT');
    /**
     * `HEAD` 请求
     * - 有效范围：方法
     * @type {?}
     */
    var HEAD = makeMethod('HEAD');
    /**
     * `PATCH` 请求
     * - 有效范围：方法
     * @type {?}
     */
    var PATCH = makeMethod('PATCH');
    /**
     * `JSONP` 请求
     * - 有效范围：方法
     * @type {?}
     */
    var JSONP = makeMethod('JSONP');
    /**
     * `FORM` 请求
     * - 有效范围：方法
     * @type {?}
     */
    var FORM = makeMethod('FORM');

    /**
     * @fileoverview added by tsickle
     * Generated from: src/pipes/date/date.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DatePipe = /** @class */ (function () {
        /**
         * @param {?} nzI18n
         */
        function DatePipe(nzI18n) {
            this.nzI18n = nzI18n;
        }
        /**
         * @param {?} value
         * @param {?=} formatString
         * @return {?}
         */
        DatePipe.prototype.transform = function (value, formatString) {
            if (formatString === void 0) { formatString = 'yyyy-MM-dd HH:mm'; }
            value = i1$1.toDate(value);
            if (isNaN(( /** @type {?} */(value))))
                return '';
            /** @type {?} */
            var langOpt = { locale: this.nzI18n.getDateLocale() };
            return formatString === 'fn' ? formatDistanceToNow(value, langOpt) : format(value, formatString, langOpt);
        };
        return DatePipe;
    }());
    DatePipe.decorators = [
        { type: i0.Pipe, args: [{ name: '_date' },] }
    ];
    /** @nocollapse */
    DatePipe.ctorParameters = function () { return [
        { type: i18n.NzI18nService }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DatePipe.prototype.nzI18n;
    }

    /**
     * @see https://ng-alain.com/theme/currency
     */
    // tslint:disable-next-line:use-pipe-transform-interface
    var CNCurrencyPipe = /** @class */ (function (_super) {
        __extends(CNCurrencyPipe, _super);
        function CNCurrencyPipe() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} value
         * @param {?=} currencyCode
         * @param {?=} display
         * @param {?=} digits
         * @return {?}
         */
        CNCurrencyPipe.prototype.transform = function (value, currencyCode, display, digits) {
            if (currencyCode === void 0) { currencyCode = '￥'; }
            if (display === void 0) { display = 'code'; }
            return _super.prototype.transform.call(this, value, currencyCode, ( /** @type {?} */(display)), digits);
        };
        return CNCurrencyPipe;
    }(i1.CurrencyPipe));
    CNCurrencyPipe.decorators = [
        { type: i0.Pipe, args: [{ name: '_currency' },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: src/pipes/keys/keys.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @see https://ng-alain.com/theme/keys
     */
    var KeysPipe = /** @class */ (function () {
        function KeysPipe() {
        }
        /**
         * @param {?} value
         * @param {?=} keyIsNumber
         * @return {?}
         */
        KeysPipe.prototype.transform = function (value, keyIsNumber) {
            if (keyIsNumber === void 0) { keyIsNumber = false; }
            /** @type {?} */
            var ret = [];
            // tslint:disable-next-line: forin
            for (var key in value) {
                ret.push({ key: keyIsNumber ? +key : key, value: value[key] });
            }
            return ret;
        };
        return KeysPipe;
    }());
    KeysPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'keys' },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: src/pipes/yn/yn.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ICON_YES = "<svg viewBox=\"64 64 896 896\" fill=\"currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\"><path d=\"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z\"></path></svg>";
    /** @type {?} */
    var ICON_NO = "<svg viewBox=\"64 64 896 896\" fill=\"currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\"><path d=\"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z\"></path></svg>";
    /** @type {?} */
    var CLS_YES = "class=\"yn__yes\"";
    /** @type {?} */
    var CLS_NO = "class=\"yn__no\"";
    var YNPipe = /** @class */ (function () {
        /**
         * @param {?} dom
         */
        function YNPipe(dom) {
            this.dom = dom;
        }
        /**
         * @param {?} value
         * @param {?=} yes
         * @param {?=} no
         * @param {?=} mode
         * @param {?=} isSafeHtml
         * @return {?}
         */
        YNPipe.prototype.transform = function (value, yes, no, mode, isSafeHtml) {
            if (isSafeHtml === void 0) { isSafeHtml = true; }
            /** @type {?} */
            var html = '';
            yes = yes || '是';
            no = no || '否';
            switch (mode) {
                case 'full':
                    html = value ? "<i " + CLS_YES + ">" + ICON_YES + "<span>" + yes + "</span></i>" : "<i " + CLS_NO + ">" + ICON_NO + "<span>" + no + "</span></i>";
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
    /** @nocollapse */
    YNPipe.ctorParameters = function () { return [
        { type: i1$2.DomSanitizer }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        YNPipe.prototype.dom;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/pipes/safe/html.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HTMLPipe = /** @class */ (function () {
        /**
         * @param {?} dom
         */
        function HTMLPipe(dom) {
            this.dom = dom;
        }
        /**
         * @param {?} html
         * @return {?}
         */
        HTMLPipe.prototype.transform = function (html) {
            return html ? this.dom.bypassSecurityTrustHtml(html) : '';
        };
        return HTMLPipe;
    }());
    HTMLPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'html' },] }
    ];
    /** @nocollapse */
    HTMLPipe.ctorParameters = function () { return [
        { type: i1$2.DomSanitizer }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        HTMLPipe.prototype.dom;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/pipes/safe/url.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var URLPipe = /** @class */ (function () {
        /**
         * @param {?} dom
         */
        function URLPipe(dom) {
            this.dom = dom;
        }
        /**
         * @param {?} url
         * @return {?}
         */
        URLPipe.prototype.transform = function (url) {
            return url ? this.dom.bypassSecurityTrustUrl(url) : '';
        };
        return URLPipe;
    }());
    URLPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'url' },] }
    ];
    /** @nocollapse */
    URLPipe.ctorParameters = function () { return [
        { type: i1$2.DomSanitizer }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        URLPipe.prototype.dom;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: src/services/i18n/i18n.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var I18nPipe = /** @class */ (function () {
        /**
         * @param {?} i18n
         */
        function I18nPipe(i18n) {
            this.i18n = i18n;
        }
        /**
         * @param {?} key
         * @param {?=} interpolateParams
         * @param {?=} isSafe
         * @return {?}
         */
        I18nPipe.prototype.transform = function (key, interpolateParams, isSafe) {
            return this.i18n.fanyi(key, interpolateParams, isSafe);
        };
        return I18nPipe;
    }());
    I18nPipe.decorators = [
        { type: i0.Pipe, args: [{ name: 'i18n' },] }
    ];
    /** @nocollapse */
    I18nPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [ALAIN_I18N_TOKEN,] }] }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        I18nPipe.prototype.i18n;
    }

    /** @type {?} */
    var HELPERS = [ModalHelper, DrawerHelper];
    /** @type {?} */
    var PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, I18nPipe, HTMLPipe, URLPipe];
    /** @type {?} */
    var ICONS = [icons.BellOutline, icons.DeleteOutline, icons.PlusOutline, icons.InboxOutline];
    // #endregion
    var AlainThemeModule = /** @class */ (function () {
        /**
         * @param {?} iconSrv
         */
        function AlainThemeModule(iconSrv) {
            iconSrv.addIcon.apply(iconSrv, __spread(ICONS));
        }
        /**
         * @return {?}
         */
        AlainThemeModule.forRoot = function () {
            return {
                ngModule: AlainThemeModule,
                providers: __spread(HELPERS),
            };
        };
        /**
         * @return {?}
         */
        AlainThemeModule.forChild = function () {
            return {
                ngModule: AlainThemeModule,
                providers: __spread(HELPERS),
            };
        };
        return AlainThemeModule;
    }());
    AlainThemeModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [i1.CommonModule, router.RouterModule, overlay.OverlayModule, i18n.NzI18nModule],
                    declarations: __spread(PIPES),
                    exports: __spread(PIPES, [DelonLocaleModule]),
                },] }
    ];
    /** @nocollapse */
    AlainThemeModule.ctorParameters = function () { return [
        { type: icon.NzIconService }
    ]; };

    /**
     * @fileoverview added by tsickle
     * Generated from: src/version.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var VERSION = new i0.Version('10.0.0-beta.3');

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: theme.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ALAIN_I18N_TOKEN = ALAIN_I18N_TOKEN;
    exports.APP = APP;
    exports.AlainI18NServiceFake = AlainI18NServiceFake;
    exports.AlainThemeModule = AlainThemeModule;
    exports.BaseApi = BaseApi;
    exports.BaseHeaders = BaseHeaders;
    exports.BaseUrl = BaseUrl;
    exports.Body = Body;
    exports.CNCurrencyPipe = CNCurrencyPipe;
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
    exports.Headers = Headers;
    exports.JSONP = JSONP;
    exports.KeysPipe = KeysPipe;
    exports.LAYOUT = LAYOUT;
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
    exports.ResponsiveService = ResponsiveService;
    exports.ScrollService = ScrollService;
    exports.SettingsService = SettingsService;
    exports.TitleService = TitleService;
    exports.URLPipe = URLPipe;
    exports.USER = USER;
    exports.VERSION = VERSION;
    exports.WINDOW = WINDOW;
    exports.YNPipe = YNPipe;
    exports._HttpClient = _HttpClient;
    exports.el_GR = elGR;
    exports.en_US = enUS;
    exports.hr_HR = hrHR;
    exports.ja_JP = jaJP;
    exports.ko_KR = koKR;
    exports.pl_PL = plPL;
    exports.preloaderFinished = preloaderFinished;
    exports.sl_SI = slSI;
    exports.tr_TR = trTR;
    exports.zh_CN = zhCN;
    exports.zh_TW = zhTW;
    exports.ɵa = ALAIN_I18N_TOKEN_FACTORY;
    exports.ɵb = I18nPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=theme.umd.js.map
