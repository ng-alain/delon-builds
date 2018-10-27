/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-rc.1-c33cee3
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@delon/acl'), require('@angular/common'), require('@angular/router'), require('@angular/platform-browser'), require('ng-zorro-antd'), require('@angular/common/http'), require('date-fns/format'), require('date-fns/distance_in_words_to_now'), require('@angular/cdk/overlay'), require('@ant-design/icons-angular/icons')) :
    typeof define === 'function' && define.amd ? define('@delon/theme', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@delon/acl', '@angular/common', '@angular/router', '@angular/platform-browser', 'ng-zorro-antd', '@angular/common/http', 'date-fns/format', 'date-fns/distance_in_words_to_now', '@angular/cdk/overlay', '@ant-design/icons-angular/icons'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.theme = {}),global.ng.core,global.rxjs,global.rxjs.operators,global.delon.acl,global.ng.common,global.ng.router,global.ng.platformBrowser,global.ngZorro.antd,global.ng.common.http,global.format,global.distanceInWordsToNow,global.ng.cdk.overlay,global.icons));
}(this, (function (exports,i0,rxjs,operators,i2,i2$1,router,i1,i1$1,i1$2,format,distanceInWordsToNow,overlay,icons) { 'use strict';

    format = format && format.hasOwnProperty('default') ? format['default'] : format;
    distanceInWordsToNow = distanceInWordsToNow && distanceInWordsToNow.hasOwnProperty('default') ? distanceInWordsToNow['default'] : distanceInWordsToNow;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var WINDOW = new i0.InjectionToken('Window');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function preloaderFinished() {
        /** @type {?} */
        var body = document.querySelector('body');
        /** @type {?} */
        var preloader = document.querySelector('.preloader');
        body.style.overflow = 'hidden';
        /**
         * @return {?}
         */
        function remove() {
            // preloader value null when running --hmr
            if (!preloader)
                return;
            preloader.addEventListener('transitionend', function () {
                preloader.className = 'preloader-hidden';
            });
            preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
        }
        ( /** @type {?} */(window)).appBootstrap = function () {
            setTimeout(function () {
                remove();
                body.style.overflow = '';
            }, 100);
        };
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
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
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ALAIN_I18N_TOKEN = new i0.InjectionToken('alainTranslatorToken');
    var AlainI18NServiceFake = /** @class */ (function () {
        function AlainI18NServiceFake() {
            this.change$ = new rxjs.BehaviorSubject(null);
        }
        Object.defineProperty(AlainI18NServiceFake.prototype, "change", {
            get: /**
             * @return {?}
             */ function () {
                return this.change$.asObservable().pipe(operators.filter(function (w) { return w != null; }));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} lang
         * @return {?}
         */
        AlainI18NServiceFake.prototype.use = /**
         * @param {?} lang
         * @return {?}
         */
            function (lang) {
                this.change$.next(lang);
            };
        /**
         * @return {?}
         */
        AlainI18NServiceFake.prototype.getLangs = /**
         * @return {?}
         */
            function () {
                return [];
            };
        /**
         * @param {?} key
         * @return {?}
         */
        AlainI18NServiceFake.prototype.fanyi = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return key;
            };
        AlainI18NServiceFake.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ AlainI18NServiceFake.ngInjectableDef = i0.defineInjectable({ factory: function AlainI18NServiceFake_Factory() { return new AlainI18NServiceFake(); }, token: AlainI18NServiceFake, providedIn: "root" });
        return AlainI18NServiceFake;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MenuService = /** @class */ (function () {
        function MenuService(i18nSrv, aclService) {
            var _this = this;
            this.i18nSrv = i18nSrv;
            this.aclService = aclService;
            this._change$ = new rxjs.BehaviorSubject([]);
            this.data = [];
            if (this.i18nSrv)
                this.i18n$ = this.i18nSrv.change.subscribe(function () { return _this.resume(); });
        }
        Object.defineProperty(MenuService.prototype, "change", {
            get: /**
             * @return {?}
             */ function () {
                return this._change$.pipe(operators.share());
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} callback
         * @return {?}
         */
        MenuService.prototype.visit = /**
         * @param {?} callback
         * @return {?}
         */
            function (callback) {
                /** @type {?} */
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
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (list_1_1 && !list_1_1.done && (_a = list_1.return))
                                _a.call(list_1);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                };
                inFn(this.data, null, 0);
            };
        /**
         * @param {?} items
         * @return {?}
         */
        MenuService.prototype.add = /**
         * @param {?} items
         * @return {?}
         */
            function (items) {
                this.data = items;
                this.resume();
            };
        /**
         * 重置菜单，可能I18N、用户权限变动时需要调用刷新
         */
        /**
         * 重置菜单，可能I18N、用户权限变动时需要调用刷新
         * @param {?=} callback
         * @return {?}
         */
        MenuService.prototype.resume = /**
         * 重置菜单，可能I18N、用户权限变动时需要调用刷新
         * @param {?=} callback
         * @return {?}
         */
            function (callback) {
                var _this = this;
                /** @type {?} */
                var i = 1;
                /** @type {?} */
                var shortcuts = [];
                this.visit(function (item, parent, depth) {
                    item["__id"] = i++;
                    item["__parent"] = parent;
                    item["_depth"] = depth;
                    if (!item.link)
                        item.link = '';
                    if (typeof item.linkExact === 'undefined')
                        item.linkExact = false;
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
                    item["_type"] = item.externalLink ? 2 : 1;
                    if (item.children && item.children.length > 0) {
                        item["_type"] = 3;
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
                        item.icon = /** @type {?} */ ({ type: type, value: value });
                    }
                    // shortcut
                    if (parent && item.shortcut === true && parent.shortcutRoot !== true)
                        shortcuts.push(item);
                    item.text =
                        item.i18n && _this.i18nSrv ? _this.i18nSrv.fanyi(item.i18n) : item.text;
                    // group
                    item.group = typeof item.group !== 'boolean' ? true : item.group;
                    // hidden
                    item["_hidden"] = typeof item.hide === 'undefined' ? false : item.hide;
                    // acl
                    if (item.acl && _this.aclService) {
                        item["_hidden"] = !_this.aclService.can(item.acl);
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
         * @param {?} shortcuts
         * @return {?}
         */
        MenuService.prototype.loadShortcut = /**
         * 加载快捷菜单，加载位置规则如下：
         * 1、统一在下标0的节点下（即【主导航】节点下方）
         *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
         *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
         *      3、否则放在0节点位置
         * @param {?} shortcuts
         * @return {?}
         */
            function (shortcuts) {
                if (shortcuts.length === 0 || this.data.length === 0) {
                    return;
                }
                /** @type {?} */
                var ls = this.data[0].children;
                /** @type {?} */
                var pos = ls.findIndex(function (w) { return w.shortcutRoot === true; });
                if (pos === -1) {
                    pos = ls.findIndex(function (w) { return w.link.includes('dashboard'); });
                    pos = (pos !== -1 ? pos : -1) + 1;
                    /** @type {?} */
                    var shortcutMenu = /** @type {?} */ ({
                        text: '快捷菜单',
                        i18n: 'shortcut',
                        icon: 'icon-rocket',
                        children: [],
                    });
                    this.data[0].children.splice(pos, 0, shortcutMenu);
                }
                /** @type {?} */
                var _data = this.data[0].children[pos];
                if (_data.i18n && this.i18nSrv)
                    _data.text = this.i18nSrv.fanyi(_data.i18n);
                _data = Object.assign(_data, {
                    shortcutRoot: true,
                    _type: 3,
                    __id: -1,
                    _depth: 1,
                });
                _data.children = shortcuts.map(function (i) {
                    i["_depth"] = 2;
                    return i;
                });
            };
        Object.defineProperty(MenuService.prototype, "menus", {
            get: /**
             * @return {?}
             */ function () {
                return this.data;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 清空菜单
         */
        /**
         * 清空菜单
         * @return {?}
         */
        MenuService.prototype.clear = /**
         * 清空菜单
         * @return {?}
         */
            function () {
                this.data = [];
                this._change$.next(this.data);
            };
        /**
         * 根据URL设置菜单 `_open` 属性
         * @param url URL地址
         */
        /**
         * 根据URL设置菜单 `_open` 属性
         * @param {?} url URL地址
         * @return {?}
         */
        MenuService.prototype.openedByUrl = /**
         * 根据URL设置菜单 `_open` 属性
         * @param {?} url URL地址
         * @return {?}
         */
            function (url) {
                if (!url)
                    return;
                /** @type {?} */
                var findItem = null;
                this.visit(function (item) {
                    item["_open"] = false;
                    if (!item.link) {
                        return;
                    }
                    if (!findItem && url.startsWith(item.link)) {
                        findItem = item;
                    }
                });
                if (!findItem)
                    return;
                do {
                    findItem["_open"] = true;
                    findItem = findItem["__parent"];
                } while (findItem);
            };
        /**
         * 根据url获取菜单列表
         * @param url
         */
        /**
         * 根据url获取菜单列表
         * @param {?} url
         * @return {?}
         */
        MenuService.prototype.getPathByUrl = /**
         * 根据url获取菜单列表
         * @param {?} url
         * @return {?}
         */
            function (url) {
                /** @type {?} */
                var item = null;
                this.visit(function (i, parent, depth) {
                    if (i.link === url) {
                        item = i;
                    }
                });
                /** @type {?} */
                var ret = [];
                if (!item)
                    return ret;
                do {
                    ret.splice(0, 0, item);
                    item = item["__parent"];
                } while (item);
                return ret;
            };
        /**
         * @return {?}
         */
        MenuService.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._change$.unsubscribe();
                if (this.i18n$)
                    this.i18n$.unsubscribe();
            };
        MenuService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        MenuService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [ALAIN_I18N_TOKEN,] }] },
                { type: i2.ACLService, decorators: [{ type: i0.Optional }] }
            ];
        };
        /** @nocollapse */ MenuService.ngInjectableDef = i0.defineInjectable({ factory: function MenuService_Factory() { return new MenuService(i0.inject(ALAIN_I18N_TOKEN, 8), i0.inject(i2.ACLService, 8)); }, token: MenuService, providedIn: "root" });
        return MenuService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ScrollService = /** @class */ (function () {
        function ScrollService(win, doc) {
            this.win = win;
            this.doc = doc;
        }
        /**
         * 设置滚动条至指定元素
         * @param element 指定元素，默认 `document.body`
         * @param topOffset 偏移值，默认 `0`
         */
        /**
         * 设置滚动条至指定元素
         * @param {?=} element 指定元素，默认 `document.body`
         * @param {?=} topOffset 偏移值，默认 `0`
         * @return {?}
         */
        ScrollService.prototype.scrollToElement = /**
         * 设置滚动条至指定元素
         * @param {?=} element 指定元素，默认 `document.body`
         * @param {?=} topOffset 偏移值，默认 `0`
         * @return {?}
         */
            function (element, topOffset) {
                if (topOffset === void 0) {
                    topOffset = 0;
                }
                if (!element)
                    element = this.doc.body;
                element.scrollIntoView();
                /** @type {?} */
                var w = this.win;
                if (w && w.scrollBy) {
                    w.scrollBy(0, element.getBoundingClientRect().top - topOffset);
                    if (w.pageYOffset < 20) {
                        w.scrollBy(0, -w.pageYOffset);
                    }
                }
            };
        /**
         * 滚动至顶部
         * @param topOffset 偏移值，默认 `0`
         */
        /**
         * 滚动至顶部
         * @param {?=} topOffset 偏移值，默认 `0`
         * @return {?}
         */
        ScrollService.prototype.scrollToTop = /**
         * 滚动至顶部
         * @param {?=} topOffset 偏移值，默认 `0`
         * @return {?}
         */
            function (topOffset) {
                if (topOffset === void 0) {
                    topOffset = 0;
                }
                this.scrollToElement(this.doc.body, topOffset);
            };
        ScrollService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        ScrollService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [WINDOW,] }] },
                { type: undefined, decorators: [{ type: i0.Inject, args: [i2$1.DOCUMENT,] }] }
            ];
        };
        /** @nocollapse */ ScrollService.ngInjectableDef = i0.defineInjectable({ factory: function ScrollService_Factory() { return new ScrollService(i0.inject(WINDOW), i0.inject(i2$1.DOCUMENT)); }, token: ScrollService, providedIn: "root" });
        return ScrollService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LAYOUT_KEY = 'layout';
    /** @type {?} */
    var USER_KEY = 'user';
    /** @type {?} */
    var APP_KEY = 'app';
    var SettingsService = /** @class */ (function () {
        function SettingsService() {
            this.notify$ = new rxjs.Subject();
            this._app = null;
            this._user = null;
            this._layout = null;
        }
        /**
         * @param {?} key
         * @return {?}
         */
        SettingsService.prototype.get = /**
         * @param {?} key
         * @return {?}
         */
            function (key) {
                return JSON.parse(localStorage.getItem(key) || 'null') || null;
            };
        /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        SettingsService.prototype.set = /**
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
            function (key, value) {
                localStorage.setItem(key, JSON.stringify(value));
            };
        Object.defineProperty(SettingsService.prototype, "layout", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._layout) {
                    this._layout = Object.assign(/** @type {?} */ ({
                        fixed: true,
                        collapsed: false,
                        boxed: false,
                        lang: null,
                    }), this.get(LAYOUT_KEY));
                    this.set(LAYOUT_KEY, this._layout);
                }
                return this._layout;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SettingsService.prototype, "app", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._app) {
                    this._app = Object.assign(/** @type {?} */ ({
                        year: new Date().getFullYear(),
                    }), this.get(APP_KEY));
                    this.set(APP_KEY, this._app);
                }
                return this._app;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SettingsService.prototype, "user", {
            get: /**
             * @return {?}
             */ function () {
                if (!this._user) {
                    this._user = Object.assign(/** @type {?} */ ({}), this.get(USER_KEY));
                    this.set(USER_KEY, this._user);
                }
                return this._user;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SettingsService.prototype, "notify", {
            get: /**
             * @return {?}
             */ function () {
                return this.notify$.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} name
         * @param {?=} value
         * @return {?}
         */
        SettingsService.prototype.setLayout = /**
         * @param {?} name
         * @param {?=} value
         * @return {?}
         */
            function (name, value) {
                if (typeof name === 'string') {
                    this.layout[name] = value;
                }
                else {
                    this._layout = name;
                }
                this.set(LAYOUT_KEY, this._layout);
                this.notify$.next(/** @type {?} */ ({ type: 'layout', name: name, value: value }));
                return true;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        SettingsService.prototype.setApp = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._app = value;
                this.set(APP_KEY, value);
                this.notify$.next({ type: 'app', value: value });
                return true;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        SettingsService.prototype.setUser = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._user = value;
                this.set(USER_KEY, value);
                this.notify$.next({ type: 'user', value: value });
                return true;
            };
        SettingsService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ SettingsService.ngInjectableDef = i0.defineInjectable({ factory: function SettingsService_Factory() { return new SettingsService(); }, token: SettingsService, providedIn: "root" });
        return SettingsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AlainThemeConfig = /** @class */ (function () {
        function AlainThemeConfig() {
        }
        AlainThemeConfig.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ AlainThemeConfig.ngInjectableDef = i0.defineInjectable({ factory: function AlainThemeConfig_Factory() { return new AlainThemeConfig(); }, token: AlainThemeConfig, providedIn: "root" });
        return AlainThemeConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var REP_MAX = 6;
    var ResponsiveService = /** @class */ (function () {
        function ResponsiveService(cog) {
            this.cog = Object.assign(/** @type {?} */ ({
                rules: {
                    1: { xs: 24 },
                    2: { xs: 24, sm: 12 },
                    3: { xs: 24, sm: 12, md: 8 },
                    4: { xs: 24, sm: 12, md: 8, lg: 6 },
                    5: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4 },
                    6: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 2 },
                },
            }), /** @type {?} */ ((cog)).responsive);
            if (Object.keys(this.cog.rules)
                .map(function (i) { return +i; })
                .some(function (i) { return i < 1 || i > REP_MAX; })) {
                throw new Error("[theme] the responseive rule index value range must be 1-" + REP_MAX);
            }
        }
        /**
         * @param {?} count
         * @return {?}
         */
        ResponsiveService.prototype.genCls = /**
         * @param {?} count
         * @return {?}
         */
            function (count) {
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
        ResponsiveService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        ResponsiveService.ctorParameters = function () {
            return [
                { type: AlainThemeConfig }
            ];
        };
        /** @nocollapse */ ResponsiveService.ngInjectableDef = i0.defineInjectable({ factory: function ResponsiveService_Factory() { return new ResponsiveService(i0.inject(AlainThemeConfig)); }, token: ResponsiveService, providedIn: "root" });
        return ResponsiveService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * 设置标题
     * @see https://ng-alain.com/docs/service#TitleService
     */
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
            this._default = 'Not Page Name';
            if (this.i18nSrv)
                this.i18n$ = this.i18nSrv.change.subscribe(function () { return _this.setTitle(); });
        }
        Object.defineProperty(TitleService.prototype, "separator", {
            /** 设置分隔符 */
            set: /**
             * 设置分隔符
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._separator = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TitleService.prototype, "prefix", {
            /** 设置前缀 */
            set: /**
             * 设置前缀
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._prefix = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TitleService.prototype, "suffix", {
            /** 设置后缀 */
            set: /**
             * 设置后缀
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._suffix = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TitleService.prototype, "reverse", {
            /** 设置是否反转 */
            set: /**
             * 设置是否反转
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._reverse = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TitleService.prototype, "default", {
            /** 设置默认标题名 */
            set: /**
             * 设置默认标题名
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._default = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TitleService.prototype.getByElement = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var el = this.doc.querySelector('.alain-default__content-title h1') ||
                    this.doc.querySelector('.page-header__title');
                if (el) {
                    return el.firstChild.textContent.trim();
                }
                return '';
            };
        /**
         * @return {?}
         */
        TitleService.prototype.getByRoute = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var next = this.injector.get(router.ActivatedRoute);
                while (next.firstChild)
                    next = next.firstChild;
                /** @type {?} */
                var data = (next.snapshot && next.snapshot.data) || {};
                if (data["titleI18n"] && this.i18nSrv)
                    data["title"] = this.i18nSrv.fanyi(data["titleI18n"]);
                return data["title"];
            };
        /**
         * @return {?}
         */
        TitleService.prototype.getByMenu = /**
         * @return {?}
         */
            function () {
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
                return title || item.text;
            };
        /**
         * 设置标题
         */
        /**
         * 设置标题
         * @param {?=} title
         * @return {?}
         */
        TitleService.prototype.setTitle = /**
         * 设置标题
         * @param {?=} title
         * @return {?}
         */
            function (title) {
                if (!title) {
                    title =
                        this.getByRoute() ||
                            this.getByMenu() ||
                            this.getByElement() ||
                            this._default;
                }
                if (title && !Array.isArray(title)) {
                    title = [title];
                }
                /** @type {?} */
                var newTitles = [];
                if (this._prefix) {
                    newTitles.push(this._prefix);
                }
                newTitles.push.apply(newTitles, __spread(( /** @type {?} */(title))));
                if (this._suffix) {
                    newTitles.push(this._suffix);
                }
                if (this._reverse) {
                    newTitles = newTitles.reverse();
                }
                this.title.setTitle(newTitles.join(this._separator));
            };
        /**
         * @return {?}
         */
        TitleService.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                if (this.i18n$)
                    this.i18n$.unsubscribe();
            };
        TitleService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        TitleService.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: i1.Title },
                { type: MenuService },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [ALAIN_I18N_TOKEN,] }] },
                { type: undefined, decorators: [{ type: i0.Inject, args: [i2$1.DOCUMENT,] }] }
            ];
        };
        /** @nocollapse */ TitleService.ngInjectableDef = i0.defineInjectable({ factory: function TitleService_Factory() { return new TitleService(i0.inject(i0.INJECTOR), i0.inject(i1.Title), i0.inject(MenuService), i0.inject(ALAIN_I18N_TOKEN, 8), i0.inject(i2$1.DOCUMENT)); }, token: TitleService, providedIn: "root" });
        return TitleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DELON_LOCALE = new i0.InjectionToken('delon-locale');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var zhCN = {
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
            clear: '清空',
        },
        tagSelect: {
            expand: '展开',
            collapse: '收起',
        },
        miniProgress: {
            target: '目标值：'
        },
        st: {
            total: '共 {{total}} 条',
        },
        sf: {
            submit: '提交',
            reset: '重置',
            search: '搜索',
            edit: '保存',
            addText: '添加',
            removeText: '移除',
            checkAllText: '全选',
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DelonLocaleService = /** @class */ (function () {
        function DelonLocaleService(locale) {
            this.change$ = new rxjs.BehaviorSubject(this._locale);
            this.setLocale(locale || zhCN);
        }
        Object.defineProperty(DelonLocaleService.prototype, "change", {
            get: /**
             * @return {?}
             */ function () {
                return this.change$.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} locale
         * @return {?}
         */
        DelonLocaleService.prototype.setLocale = /**
         * @param {?} locale
         * @return {?}
         */
            function (locale) {
                if (this._locale && this._locale.abbr === locale.abbr) {
                    return;
                }
                this._locale = locale;
                this.change$.next(locale);
            };
        Object.defineProperty(DelonLocaleService.prototype, "locale", {
            get: /**
             * @return {?}
             */ function () {
                return this._locale;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} path
         * @return {?}
         */
        DelonLocaleService.prototype.getData = /**
         * @param {?} path
         * @return {?}
         */
            function (path) {
                return this._locale[path] || {};
            };
        DelonLocaleService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        DelonLocaleService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [DELON_LOCALE,] }] }
            ];
        };
        return DelonLocaleService;
    }());
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
        deps: [[new i0.Optional(), new i0.SkipSelf(), DelonLocaleService], DELON_LOCALE]
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ɵ0 = zhCN;
    var DelonLocaleModule = /** @class */ (function () {
        function DelonLocaleModule() {
        }
        DelonLocaleModule.decorators = [
            { type: i0.NgModule, args: [{
                        providers: [
                            { provide: DELON_LOCALE, useValue: ɵ0 },
                            DELON_LOCALE_SERVICE_PROVIDER,
                        ],
                    },] }
        ];
        return DelonLocaleModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var enUS = {
        abbr: 'en-US',
        exception: {
            403: "Sorry, you don't have access to this page",
            404: "Sorry, that page don't exist",
            500: "Sorry, server error",
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
            clear: 'Clear tabs',
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
        },
        sf: {
            submit: 'Submit',
            reset: 'Reset',
            search: 'Search',
            edit: 'Save',
            addText: 'Add',
            removeText: 'Remove',
            checkAllText: 'Check all',
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var zhTW = {
        abbr: 'zh-TW',
        exception: {
            403: '抱歉，妳無權訪問該頁面',
            404: '抱歉，妳訪問的頁面不存在',
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
            clear: '清空',
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
        },
        sf: {
            submit: '提交',
            reset: '重置',
            search: '搜索',
            edit: '保存',
            addText: '添加',
            removeText: '移除',
            checkAllText: '全選',
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * 对话框辅助类
     */
    var ModalHelper = /** @class */ (function () {
        function ModalHelper(srv) {
            this.srv = srv;
            this.zIndex = 500;
        }
        /**
         * 构建一个对话框
         *
         * @param comp 组件
         * @param params 组件参数
         * @param options 额外参数
         *
         * 示例：
        ```ts
      this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());
      // 对于组件的成功&关闭的处理说明
      // 成功
      this.NzModalRef.close(data);
      this.NzModalRef.close();
      // 关闭
      this.NzModalRef.destroy();
      ```
         */
        /**
         * 构建一个对话框
         *
         * @param {?} comp 组件
         * @param {?=} params 组件参数
         * @param {?=} options 额外参数
         *
         * 示例：
         * ```ts
         * this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());
         * // 对于组件的成功&关闭的处理说明
         * // 成功
         * this.NzModalRef.close(data);
         * this.NzModalRef.close();
         * // 关闭
         * this.NzModalRef.destroy();
         * ```
         * @return {?}
         */
        ModalHelper.prototype.create = /**
         * 构建一个对话框
         *
         * @param {?} comp 组件
         * @param {?=} params 组件参数
         * @param {?=} options 额外参数
         *
         * 示例：
         * ```ts
         * this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());
         * // 对于组件的成功&关闭的处理说明
         * // 成功
         * this.NzModalRef.close(data);
         * this.NzModalRef.close();
         * // 关闭
         * this.NzModalRef.destroy();
         * ```
         * @return {?}
         */
            function (comp, params, options) {
                var _this = this;
                options = Object.assign({
                    size: 'lg',
                    exact: true,
                    includeTabs: false,
                }, options);
                return new rxjs.Observable(function (observer) {
                    /** @type {?} */
                    var cls = '';
                    /** @type {?} */
                    var width = '';
                    if (options.size) {
                        if (typeof options.size === 'number') {
                            width = options.size + "px";
                        }
                        else {
                            cls = "modal-" + options.size;
                        }
                    }
                    if (options.includeTabs) {
                        cls += ' modal-include-tabs';
                    }
                    /** @type {?} */
                    var defaultOptions = {
                        nzWrapClassName: cls,
                        nzContent: comp,
                        nzWidth: width ? width : undefined,
                        nzFooter: null,
                        nzComponentParams: params,
                        nzZIndex: ++_this.zIndex,
                    };
                    /** @type {?} */
                    var subject = _this.srv.create(Object.assign(defaultOptions, options.modalOptions));
                    /** @type {?} */
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
         * 示例：
        ```ts
      this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
      // 对于组件的成功&关闭的处理说明
      // 成功
      this.NzModalRef.close(data);
      this.NzModalRef.close();
      // 关闭
      this.NzModalRef.destroy();
      ```
         */
        /**
         * 构建静态框，点击蒙层不允许关闭
         *
         * @param {?} comp 组件
         * @param {?=} params 组件参数
         * @param {?=} options 额外参数
         *
         * 示例：
         * ```ts
         * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
         * // 对于组件的成功&关闭的处理说明
         * // 成功
         * this.NzModalRef.close(data);
         * this.NzModalRef.close();
         * // 关闭
         * this.NzModalRef.destroy();
         * ```
         * @return {?}
         */
        ModalHelper.prototype.createStatic = /**
         * 构建静态框，点击蒙层不允许关闭
         *
         * @param {?} comp 组件
         * @param {?=} params 组件参数
         * @param {?=} options 额外参数
         *
         * 示例：
         * ```ts
         * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
         * // 对于组件的成功&关闭的处理说明
         * // 成功
         * this.NzModalRef.close(data);
         * this.NzModalRef.close();
         * // 关闭
         * this.NzModalRef.destroy();
         * ```
         * @return {?}
         */
            function (comp, params, options) {
                /** @type {?} */
                var modalOptions = Object.assign({ nzMaskClosable: false }, options && options.modalOptions);
                return this.create(comp, params, Object.assign({}, options, { modalOptions: modalOptions }));
            };
        /**
         * 打开对话框
         * @param comp 组件
         * @param params 组件参数
         * @param size 大小；例如：lg、600，默认：lg
         * @param options 对话框 `ModalOptionsForService` 参数
         *
         * 示例：
        ```ts
      this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
      // 对于组件的成功&关闭的处理说明
      // 成功
      this.NzModalRef.close(data);
      this.NzModalRef.close();
      // 关闭
      this.NzModalRef.destroy();
      ```
         */
        /**
         * 打开对话框
         * @param {?} comp 组件
         * @param {?=} params 组件参数
         * @param {?=} size 大小；例如：lg、600，默认：lg
         * @param {?=} options 对话框 `ModalOptionsForService` 参数
         *
         * 示例：
         * ```ts
         * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
         * // 对于组件的成功&关闭的处理说明
         * // 成功
         * this.NzModalRef.close(data);
         * this.NzModalRef.close();
         * // 关闭
         * this.NzModalRef.destroy();
         * ```
         * @return {?}
         */
        ModalHelper.prototype.open = /**
         * 打开对话框
         * @param {?} comp 组件
         * @param {?=} params 组件参数
         * @param {?=} size 大小；例如：lg、600，默认：lg
         * @param {?=} options 对话框 `ModalOptionsForService` 参数
         *
         * 示例：
         * ```ts
         * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
         * // 对于组件的成功&关闭的处理说明
         * // 成功
         * this.NzModalRef.close(data);
         * this.NzModalRef.close();
         * // 关闭
         * this.NzModalRef.destroy();
         * ```
         * @return {?}
         */
            function (comp, params, size, options) {
                if (size === void 0) {
                    size = 'lg';
                }
                return this.create(comp, params, {
                    size: size,
                    modalOptions: options,
                    exact: false,
                });
            };
        /**
         * 静态框，点击蒙层不允许关闭
         * @param comp 组件
         * @param params 组件参数
         * @param size 大小；例如：lg、600，默认：lg
         * @param options 对话框 `ModalOptionsForService` 参数
         *
         * 示例：
        ```ts
      this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
      // 对于组件的成功&关闭的处理说明
      // 成功
      this.NzModalRef.close(data);
      this.NzModalRef.close();
      // 关闭
      this.NzModalRef.destroy();
      ```
         */
        /**
         * 静态框，点击蒙层不允许关闭
         * @param {?} comp 组件
         * @param {?=} params 组件参数
         * @param {?=} size 大小；例如：lg、600，默认：lg
         * @param {?=} options 对话框 `ModalOptionsForService` 参数
         *
         * 示例：
         * ```ts
         * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
         * // 对于组件的成功&关闭的处理说明
         * // 成功
         * this.NzModalRef.close(data);
         * this.NzModalRef.close();
         * // 关闭
         * this.NzModalRef.destroy();
         * ```
         * @return {?}
         */
        ModalHelper.prototype.static = /**
         * 静态框，点击蒙层不允许关闭
         * @param {?} comp 组件
         * @param {?=} params 组件参数
         * @param {?=} size 大小；例如：lg、600，默认：lg
         * @param {?=} options 对话框 `ModalOptionsForService` 参数
         *
         * 示例：
         * ```ts
         * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
         * // 对于组件的成功&关闭的处理说明
         * // 成功
         * this.NzModalRef.close(data);
         * this.NzModalRef.close();
         * // 关闭
         * this.NzModalRef.destroy();
         * ```
         * @return {?}
         */
            function (comp, params, size, options) {
                if (size === void 0) {
                    size = 'lg';
                }
                return this.open(comp, params, size, Object.assign({
                    nzMaskClosable: false,
                }, options));
            };
        ModalHelper.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        ModalHelper.ctorParameters = function () {
            return [
                { type: i1$1.NzModalService }
            ];
        };
        /** @nocollapse */ ModalHelper.ngInjectableDef = i0.defineInjectable({ factory: function ModalHelper_Factory() { return new ModalHelper(i0.inject(i1$1.NzModalService)); }, token: ModalHelper, providedIn: "root" });
        return ModalHelper;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * 抽屉辅助类
     *
     * **注意：** 构建结果都可被订阅，但永远都不会触发 `observer.error`
     *
     * 示例：
     * ```ts
     * this.drawerHelper.create('Edit', FormEditComponent, { i }).subscribe(res => this.load());
     * // 对于组件的成功&关闭的处理说明
     * // 成功
     * this.NzDrawerRef.close(data);
     * this.NzDrawerRef.close(true);
     * // 关闭
     * this.NzDrawerRef.close();
     * this.NzDrawerRef.close(false);
     * ```
     */
    var DrawerHelper = /** @class */ (function () {
        function DrawerHelper(srv) {
            this.srv = srv;
            this.zIndex = 400;
        }
        /**
         * 构建一个抽屉
         */
        /**
         * 构建一个抽屉
         * @param {?} title
         * @param {?} comp
         * @param {?=} params
         * @param {?=} options
         * @return {?}
         */
        DrawerHelper.prototype.create = /**
         * 构建一个抽屉
         * @param {?} title
         * @param {?} comp
         * @param {?=} params
         * @param {?=} options
         * @return {?}
         */
            function (title, comp, params, options) {
                var _this = this;
                options = Object.assign(/** @type {?} */ ({
                    size: 'md',
                    footer: true,
                    footerHeight: 55,
                    drawerOptions: {
                        nzPlacement: 'right',
                        nzWrapClassName: ''
                    }
                }), options);
                return new rxjs.Observable(function (observer) {
                    var size = options.size, footer = options.footer, footerHeight = options.footerHeight, drawerOptions = options.drawerOptions;
                    /** @type {?} */
                    var defaultOptions = {
                        nzContent: comp,
                        nzContentParams: params,
                        nzZIndex: ++_this.zIndex,
                        nzTitle: title
                    };
                    if (footer) {
                        defaultOptions.nzBodyStyle = {
                            height: "calc(100% - " + footerHeight + "px)",
                            overflow: 'auto',
                            'padding-bottom': footerHeight - 2 + "px"
                        };
                    }
                    if (typeof size === 'number') {
                        defaultOptions[drawerOptions.nzPlacement === 'top' || drawerOptions.nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'] = options.size;
                    }
                    else {
                        defaultOptions.nzWrapClassName = (drawerOptions.nzWrapClassName + (" drawer-" + options.size)).trim();
                        delete drawerOptions.nzWrapClassName;
                    }
                    /** @type {?} */
                    var subject = _this.srv.create(Object.assign(defaultOptions, drawerOptions));
                    /** @type {?} */
                    var afterClose$ = subject.afterClose.subscribe(function (res) {
                        if (res != null && res !== false) {
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
        /**
         * 构建一个抽屉，点击蒙层不允许关闭
         * @param {?} title
         * @param {?} comp
         * @param {?=} params
         * @param {?=} options
         * @return {?}
         */
        DrawerHelper.prototype.static = /**
         * 构建一个抽屉，点击蒙层不允许关闭
         * @param {?} title
         * @param {?} comp
         * @param {?=} params
         * @param {?=} options
         * @return {?}
         */
            function (title, comp, params, options) {
                /** @type {?} */
                var drawerOptions = Object.assign({ nzMaskClosable: false }, options && options.drawerOptions);
                return this.create(title, comp, params, Object.assign({}, options, { drawerOptions: drawerOptions }));
            };
        DrawerHelper.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        DrawerHelper.ctorParameters = function () {
            return [
                { type: i1$1.NzDrawerService }
            ];
        };
        /** @nocollapse */ DrawerHelper.ngInjectableDef = i0.defineInjectable({ factory: function DrawerHelper_Factory() { return new DrawerHelper(i0.inject(i1$1.NzDrawerService)); }, token: DrawerHelper, providedIn: "root" });
        return DrawerHelper;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * 封装HttpClient，主要解决：
     * + 优化HttpClient在参数上便利性
     * + 统一实现 loading
     * + 统一处理时间格式问题
     */
    var _HttpClient = /** @class */ (function () {
        function _HttpClient(http, cog) {
            this.http = http;
            this._loading = false;
            this.cog = Object.assign(/** @type {?} */ ({
                nullValueHandling: 'include',
                dateValueHandling: 'timestamp',
            }), /** @type {?} */ ((cog)).http);
        }
        Object.defineProperty(_HttpClient.prototype, "loading", {
            /** 是否正在加载中 */
            get: /**
             * 是否正在加载中
             * @return {?}
             */ function () {
                return this._loading;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} params
         * @return {?}
         */
        _HttpClient.prototype.parseParams = /**
         * @param {?} params
         * @return {?}
         */
            function (params) {
                var _this = this;
                /** @type {?} */
                var newParams = {};
                Object.keys(params).forEach(function (key) {
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
                });
                return new i1$2.HttpParams({ fromObject: newParams });
            };
        /**
         * @param {?} url
         * @param {?=} params
         * @return {?}
         */
        _HttpClient.prototype.appliedUrl = /**
         * @param {?} url
         * @param {?=} params
         * @return {?}
         */
            function (url, params) {
                if (!params)
                    return url;
                url += ~url.indexOf('?') ? '' : '?';
                /** @type {?} */
                var arr = [];
                // tslint:disable-next-line:forin
                for (var key in params) {
                    arr.push(key + "=" + params[key]);
                }
                return url + arr.join('&');
            };
        /**
         * @return {?}
         */
        _HttpClient.prototype.begin = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // console.time('http');
                setTimeout(function () { return (_this._loading = true); });
            };
        /**
         * @return {?}
         */
        _HttpClient.prototype.end = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // console.timeEnd('http');
                setTimeout(function () { return (_this._loading = false); });
            };
        /**
         * GET 请求
         */
        /**
         * GET 请求
         * @param {?} url
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
        _HttpClient.prototype.get = /**
         * GET 请求
         * @param {?} url
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
            function (url, params, options) {
                return this.request('GET', url, Object.assign({
                    params: params,
                }, options));
            };
        /**
         * POST 请求
         */
        /**
         * POST 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
        _HttpClient.prototype.post = /**
         * POST 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
            function (url, body, params, options) {
                return this.request('POST', url, Object.assign({
                    body: body,
                    params: params,
                }, options));
            };
        /**
         * DELETE 请求
         */
        /**
         * DELETE 请求
         * @param {?} url
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
        _HttpClient.prototype.delete = /**
         * DELETE 请求
         * @param {?} url
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
            function (url, params, options) {
                return this.request('DELETE', url, Object.assign({
                    params: params,
                }, options));
            };
        // #endregion
        /**
         * `jsonp` 请求
         *
         * @param url URL地址
         * @param params 请求参数
         * @param callbackParam CALLBACK值，默认：JSONP_CALLBACK
         */
        /**
         * `jsonp` 请求
         *
         * @param {?} url URL地址
         * @param {?=} params 请求参数
         * @param {?=} callbackParam CALLBACK值，默认：JSONP_CALLBACK
         * @return {?}
         */
        _HttpClient.prototype.jsonp = /**
         * `jsonp` 请求
         *
         * @param {?} url URL地址
         * @param {?=} params 请求参数
         * @param {?=} callbackParam CALLBACK值，默认：JSONP_CALLBACK
         * @return {?}
         */
            function (url, params, callbackParam) {
                var _this = this;
                if (callbackParam === void 0) {
                    callbackParam = 'JSONP_CALLBACK';
                }
                return this.http.jsonp(this.appliedUrl(url, params), callbackParam).pipe(operators.tap(function () {
                    _this.end();
                }), operators.catchError(function (res) {
                    _this.end();
                    return rxjs.throwError(res);
                }));
            };
        /**
         * PATCH 请求
         */
        /**
         * PATCH 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
        _HttpClient.prototype.patch = /**
         * PATCH 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
            function (url, body, params, options) {
                return this.request('PATCH', url, Object.assign({
                    body: body,
                    params: params,
                }, options));
            };
        /**
         * PUT 请求
         */
        /**
         * PUT 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
        _HttpClient.prototype.put = /**
         * PUT 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?} options
         * @return {?}
         */
            function (url, body, params, options) {
                return this.request('PUT', url, Object.assign({
                    body: body,
                    params: params,
                }, options));
            };
        /**
         * `request` 请求
         *
         * @param method 请求方法类型
         * @param url URL地址
         * @param options 参数
         */
        /**
         * `request` 请求
         *
         * @param {?} method 请求方法类型
         * @param {?} url URL地址
         * @param {?=} options 参数
         * @return {?}
         */
        _HttpClient.prototype.request = /**
         * `request` 请求
         *
         * @param {?} method 请求方法类型
         * @param {?} url URL地址
         * @param {?=} options 参数
         * @return {?}
         */
            function (method, url, options) {
                var _this = this;
                this.begin();
                if (options) {
                    if (options.params)
                        options.params = this.parseParams(options.params);
                }
                return this.http.request(method, url, options).pipe(operators.tap(function () {
                    _this.end();
                }), operators.catchError(function (res) {
                    _this.end();
                    return rxjs.throwError(res);
                }));
            };
        _HttpClient.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        _HttpClient.ctorParameters = function () {
            return [
                { type: i1$2.HttpClient },
                { type: AlainThemeConfig }
            ];
        };
        /** @nocollapse */ _HttpClient.ngInjectableDef = i0.defineInjectable({ factory: function _HttpClient_Factory() { return new _HttpClient(i0.inject(i1$2.HttpClient), i0.inject(AlainThemeConfig)); }, token: _HttpClient, providedIn: "root" });
        return _HttpClient;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DatePipe = /** @class */ (function () {
        function DatePipe() {
        }
        /**
         * @param {?} value
         * @param {?=} formatString
         * @return {?}
         */
        DatePipe.prototype.transform = /**
         * @param {?} value
         * @param {?=} formatString
         * @return {?}
         */
            function (value, formatString) {
                if (formatString === void 0) {
                    formatString = 'YYYY-MM-DD HH:mm';
                }
                if (value) {
                    if (formatString === 'fn') {
                        return distanceInWordsToNow(value, {
                            locale: ( /** @type {?} */(window)).__locale__,
                        });
                    }
                    if (typeof value === 'string' && !isNaN(+value)) {
                        value = +value;
                    }
                    return format(value, formatString);
                }
                else {
                    return '';
                }
            };
        DatePipe.decorators = [
            { type: i0.Pipe, args: [{ name: '_date' },] }
        ];
        return DatePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @see https://ng-alain.com/docs/service-pipe#%E8%B4%A7%E5%B8%81-_currenty
     */
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
        CNCurrencyPipe.prototype.transform = /**
         * @param {?} value
         * @param {?=} currencyCode
         * @param {?=} display
         * @param {?=} digits
         * @return {?}
         */
            function (value, currencyCode, display, digits) {
                if (currencyCode === void 0) {
                    currencyCode = '￥';
                }
                if (display === void 0) {
                    display = 'code';
                }
                return _super.prototype.transform.call(this, value, currencyCode, /** @type {?} */ (display), digits);
            };
        CNCurrencyPipe.decorators = [
            { type: i0.Pipe, args: [{ name: '_currency' },] }
        ];
        return CNCurrencyPipe;
    }(i2$1.CurrencyPipe));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @see https://ng-alain.com/docs/common#%E5%8F%AF%E8%BF%AD%E4%BB%A3-keys
     */
    var KeysPipe = /** @class */ (function () {
        function KeysPipe() {
        }
        /**
         * @param {?} value
         * @param {?=} keyIsNumber
         * @return {?}
         */
        KeysPipe.prototype.transform = /**
         * @param {?} value
         * @param {?=} keyIsNumber
         * @return {?}
         */
            function (value, keyIsNumber) {
                if (keyIsNumber === void 0) {
                    keyIsNumber = false;
                }
                /** @type {?} */
                var ret = [];
                // tslint:disable-next-line:forin
                for (var key in value) {
                    ret.push({ key: keyIsNumber ? +key : key, value: value[key] });
                }
                return ret;
            };
        KeysPipe.decorators = [
            { type: i0.Pipe, args: [{ name: 'keys' },] }
        ];
        return KeysPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @see https://ng-alain.com/docs/service-pipe#%E5%BE%BD%E7%AB%A0-yn
     */
    var YNPipe = /** @class */ (function () {
        function YNPipe() {
        }
        /**
         * @param {?} value
         * @param {?} yes
         * @param {?} no
         * @return {?}
         */
        YNPipe.prototype.transform = /**
         * @param {?} value
         * @param {?} yes
         * @param {?} no
         * @return {?}
         */
            function (value, yes, no) {
                if (value) {
                    return '<span class="badge badge-success">' + (yes || '是') + '</span>';
                }
                else {
                    return '<span class="badge badge-error">' + (no || '否') + '</span>';
                }
            };
        YNPipe.decorators = [
            { type: i0.Pipe, args: [{ name: 'yn' },] }
        ];
        return YNPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var I18nPipe = /** @class */ (function () {
        function I18nPipe(i18n) {
            this.i18n = i18n;
        }
        /**
         * @param {?} key
         * @param {?=} interpolateParams
         * @param {?=} isSafe
         * @return {?}
         */
        I18nPipe.prototype.transform = /**
         * @param {?} key
         * @param {?=} interpolateParams
         * @param {?=} isSafe
         * @return {?}
         */
            function (key, interpolateParams, isSafe) {
                return this.i18n.fanyi(key, interpolateParams, isSafe);
            };
        I18nPipe.decorators = [
            { type: i0.Pipe, args: [{ name: 'i18n' },] }
        ];
        /** @nocollapse */
        I18nPipe.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [ALAIN_I18N_TOKEN,] }] }
            ];
        };
        return I18nPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var HELPERS = [ModalHelper, DrawerHelper];
    /** @type {?} */
    var COMPONENTS = [];
    /** @type {?} */
    var PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, I18nPipe];
    /** @type {?} */
    var ICONS = [
        icons.BellOutline,
        icons.FilterFill,
        icons.CaretUpOutline,
        icons.CaretDownOutline,
        icons.DeleteOutline,
        icons.PlusOutline,
        icons.InboxOutline,
    ];
    var AlainThemeModule = /** @class */ (function () {
        function AlainThemeModule(iconSrv) {
            iconSrv.addIcon.apply(iconSrv, __spread(ICONS));
        }
        /**
         * @return {?}
         */
        AlainThemeModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: AlainThemeModule,
                    providers: __spread([
                        { provide: WINDOW, useValue: window },
                        { provide: ALAIN_I18N_TOKEN, useClass: AlainI18NServiceFake }
                    ], HELPERS),
                };
            };
        /**
         * @return {?}
         */
        AlainThemeModule.forChild = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: AlainThemeModule,
                    providers: __spread(HELPERS),
                };
            };
        AlainThemeModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [i2$1.CommonModule, router.RouterModule, overlay.OverlayModule],
                        declarations: __spread(COMPONENTS, PIPES),
                        exports: __spread(COMPONENTS, PIPES, [DelonLocaleModule]),
                    },] }
        ];
        /** @nocollapse */
        AlainThemeModule.ctorParameters = function () {
            return [
                { type: i1$1.NzIconService }
            ];
        };
        return AlainThemeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var VERSION = new i0.Version('2.0.0-rc.1-c33cee3');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.WINDOW = WINDOW;
    exports.preloaderFinished = preloaderFinished;
    exports.TitleService = TitleService;
    exports.ALAIN_I18N_TOKEN = ALAIN_I18N_TOKEN;
    exports.AlainI18NServiceFake = AlainI18NServiceFake;
    exports._HttpClient = _HttpClient;
    exports.DatePipe = DatePipe;
    exports.CNCurrencyPipe = CNCurrencyPipe;
    exports.KeysPipe = KeysPipe;
    exports.YNPipe = YNPipe;
    exports.AlainThemeConfig = AlainThemeConfig;
    exports.AlainThemeModule = AlainThemeModule;
    exports.VERSION = VERSION;
    exports.MenuService = MenuService;
    exports.ScrollService = ScrollService;
    exports.SettingsService = SettingsService;
    exports.REP_MAX = REP_MAX;
    exports.ResponsiveService = ResponsiveService;
    exports.en_US = enUS;
    exports.zh_CN = zhCN;
    exports.zh_TW = zhTW;
    exports.DELON_LOCALE = DELON_LOCALE;
    exports.DELON_LOCALE_SERVICE_PROVIDER_FACTORY = DELON_LOCALE_SERVICE_PROVIDER_FACTORY;
    exports.DelonLocaleService = DelonLocaleService;
    exports.DELON_LOCALE_SERVICE_PROVIDER = DELON_LOCALE_SERVICE_PROVIDER;
    exports.DelonLocaleModule = DelonLocaleModule;
    exports.ModalHelper = ModalHelper;
    exports.DrawerHelper = DrawerHelper;
    exports.ɵa = I18nPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3dpbl90b2tlbnMudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvcHJlbG9hZGVyL3ByZWxvYWRlci50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvaTE4bi9pMThuLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL21lbnUvbWVudS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL3Njcm9sbC9zY3JvbGwuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3RoZW1lLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9yZXNwb25zaXZlL3Jlc3BvbnNpdmUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvdGl0bGUvdGl0bGUuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9sb2NhbGUvbG9jYWxlLnRva2Vucy50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9sb2NhbGUvbGFuZ3VhZ2VzL3poLUNOLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL2xvY2FsZS9sb2NhbGUuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9sb2NhbGUvbG9jYWxlLm1vZHVsZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9sb2NhbGUvbGFuZ3VhZ2VzL2VuLVVTLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL2xvY2FsZS9sYW5ndWFnZXMvemgtVFcudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvbW9kYWwvbW9kYWwuaGVscGVyLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL2RyYXdlci9kcmF3ZXIuaGVscGVyLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL2h0dHAvaHR0cC5jbGllbnQudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvcGlwZXMvZGF0ZS9kYXRlLnBpcGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvcGlwZXMvY3VycmVuY3kvY24tY3VycmVuY3kucGlwZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9waXBlcy9rZXlzL2tleXMucGlwZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9waXBlcy95bi95bi5waXBlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL2kxOG4vaTE4bi5waXBlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3RoZW1lLm1vZHVsZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy92ZXJzaW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBXSU5ET1cgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ1dpbmRvdycpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRlckZpbmlzaGVkKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyJyk7XG5cbiAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAvLyBwcmVsb2FkZXIgdmFsdWUgbnVsbCB3aGVuIHJ1bm5pbmcgLS1obXJcbiAgICBpZiAoIXByZWxvYWRlcikgcmV0dXJuO1xuICAgIHByZWxvYWRlci5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICBwcmVsb2FkZXIuY2xhc3NOYW1lID0gJ3ByZWxvYWRlci1oaWRkZW4nO1xuICAgIH0pO1xuXG4gICAgcHJlbG9hZGVyLmNsYXNzTmFtZSArPSAnIHByZWxvYWRlci1oaWRkZW4tYWRkIHByZWxvYWRlci1oaWRkZW4tYWRkLWFjdGl2ZSc7XG4gIH1cblxuICAoPGFueT53aW5kb3cpLmFwcEJvb3RzdHJhcCA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlbW92ZSgpO1xuICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgIH0sIDEwMCk7XG4gIH07XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkkxOE5TZXJ2aWNlIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIC8qKlxuICAgKiDDpcKPwpjDpsKbwrTDqMKvwq3DqMKowoBcbiAgICogQHBhcmFtIGxhbmcgw6jCr8Ktw6jCqMKAw6TCu8Kjw6fCoMKBXG4gICAqIEBwYXJhbSBlbWl0IMOmwpjCr8OlwpDCpsOowqfCpsOlwo/CkSBgY2hhbmdlYMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmnRydWVcbiAgICovXG4gIHVzZShsYW5nOiBzdHJpbmcsIGVtaXQ/OiBib29sZWFuKTogdm9pZDtcblxuICAvKipcbiAgICogw6jCv8KUw6XCm8Kew6XCvcKTw6XCicKNw6jCr8Ktw6jCqMKAw6XCiMKXw6jCocKoXG4gICAqL1xuICBnZXRMYW5ncygpOiBhbnlbXTtcblxuICAvKipcbiAgICogw6fCv8K7w6jCr8KRXG4gICAqIC0gYGludGVycG9sYXRlUGFyYW1zYCDDpsKowqHDpsKdwr/DpsKJwoDDqcKcwoDDqMKmwoHDp8KawoTDpcKPwoLDpsKVwrDDpcKvwrnDqMKxwqFcbiAgICogLSBgaXNTYWZlYCDDpsKYwq/DpcKQwqbDqMK/wpTDpcKbwp7DpcKuwonDpcKFwqjDpcKtwpfDp8KswqbDr8K8wozDqMKHwqrDpcKKwqjDqMKwwoPDp8KUwqggYGJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sYFxuICAgKi9cbiAgZmFueWkoa2V5OiBzdHJpbmcsIGludGVycG9sYXRlUGFyYW1zPzogT2JqZWN0LCBpc1NhZmU/OiBib29sZWFuKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDDqMKwwoPDp8KUwqggYHVzZWAgw6jCp8Kmw6XCj8KRw6XCj8KYw6bCm8K0w6nCgMKaw6fCn8KlXG4gICAqL1xuICByZWFkb25seSBjaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGNvbnN0IEFMQUlOX0kxOE5fVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWxhaW5JMThOU2VydmljZT4oXG4gICdhbGFpblRyYW5zbGF0b3JUb2tlbicsXG4pO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFsYWluSTE4TlNlcnZpY2VGYWtlIGltcGxlbWVudHMgQWxhaW5JMThOU2VydmljZSB7XG4gIHByaXZhdGUgY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5hc09ic2VydmFibGUoKS5waXBlKGZpbHRlcih3ID0+IHcgIT0gbnVsbCkpO1xuICB9XG5cbiAgdXNlKGxhbmc6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGxhbmcpO1xuICB9XG5cbiAgZ2V0TGFuZ3MoKTogYW55W10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGZhbnlpKGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWNsJztcblxuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiwgQWxhaW5JMThOU2VydmljZSB9IGZyb20gJy4uL2kxOG4vaTE4bic7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE1lbnVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfY2hhbmdlJDogQmVoYXZpb3JTdWJqZWN0PE1lbnVbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE1lbnVbXT4oW10pO1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBkYXRhOiBNZW51W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcbiAgICBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBhY2xTZXJ2aWNlOiBBQ0xTZXJ2aWNlLFxuICApIHtcbiAgICBpZiAodGhpcy5pMThuU3J2KVxuICAgICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4blNydi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVzdW1lKCkpO1xuICB9XG5cbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPE1lbnVbXT4ge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UkLnBpcGUoc2hhcmUoKSk7XG4gIH1cblxuICB2aXNpdChjYWxsYmFjazogKGl0ZW06IE1lbnUsIHBhcmVudE1lbnVtOiBNZW51LCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCkge1xuICAgIGNvbnN0IGluRm4gPSAobGlzdDogTWVudVtdLCBwYXJlbnRNZW51OiBNZW51LCBkZXB0aDogbnVtYmVyKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgICBjYWxsYmFjayhpdGVtLCBwYXJlbnRNZW51LCBkZXB0aCk7XG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGluRm4oaXRlbS5jaGlsZHJlbiwgaXRlbSwgZGVwdGggKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW5Gbih0aGlzLmRhdGEsIG51bGwsIDApO1xuICB9XG5cbiAgYWRkKGl0ZW1zOiBNZW51W10pIHtcbiAgICB0aGlzLmRhdGEgPSBpdGVtcztcbiAgICB0aGlzLnJlc3VtZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOpwofCjcOnwr3CrsOowo/CnMOlwo3ClcOvwrzCjMOlwo/Cr8OowoPCvUkxOE7Do8KAwoHDp8KUwqjDpsKIwrfDpsKdwoPDqcKZwpDDpcKPwpjDpcKKwqjDpsKXwrbDqcKcwoDDqMKmwoHDqMKwwoPDp8KUwqjDpcKIwrfDpsKWwrBcbiAgICovXG4gIHJlc3VtZShjYWxsYmFjaz86IChpdGVtOiBNZW51LCBwYXJlbnRNZW51bTogTWVudSwgZGVwdGg/OiBudW1iZXIpID0+IHZvaWQpIHtcbiAgICBsZXQgaSA9IDE7XG4gICAgY29uc3Qgc2hvcnRjdXRzOiBNZW51W10gPSBbXTtcbiAgICB0aGlzLnZpc2l0KChpdGVtLCBwYXJlbnQsIGRlcHRoKSA9PiB7XG4gICAgICBpdGVtLl9faWQgPSBpKys7XG4gICAgICBpdGVtLl9fcGFyZW50ID0gcGFyZW50O1xuICAgICAgaXRlbS5fZGVwdGggPSBkZXB0aDtcblxuICAgICAgaWYgKCFpdGVtLmxpbmspIGl0ZW0ubGluayA9ICcnO1xuICAgICAgaWYgKHR5cGVvZiBpdGVtLmxpbmtFeGFjdCA9PT0gJ3VuZGVmaW5lZCcpIGl0ZW0ubGlua0V4YWN0ID0gZmFsc2U7XG4gICAgICBpZiAoIWl0ZW0uZXh0ZXJuYWxMaW5rKSBpdGVtLmV4dGVybmFsTGluayA9ICcnO1xuXG4gICAgICAvLyBiYWRnZVxuICAgICAgaWYgKGl0ZW0uYmFkZ2UpIHtcbiAgICAgICAgaWYgKGl0ZW0uYmFkZ2VEb3QgIT09IHRydWUpIHtcbiAgICAgICAgICBpdGVtLmJhZGdlRG90ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpdGVtLmJhZGdlU3RhdHVzKSB7XG4gICAgICAgICAgaXRlbS5iYWRnZVN0YXR1cyA9ICdlcnJvcic7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaXRlbS5fdHlwZSA9IGl0ZW0uZXh0ZXJuYWxMaW5rID8gMiA6IDE7XG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaXRlbS5fdHlwZSA9IDM7XG4gICAgICB9XG5cbiAgICAgIC8vIGljb25cbiAgICAgIGlmICh0eXBlb2YgaXRlbS5pY29uID09PSAnc3RyaW5nJykge1xuICAgICAgICBsZXQgdHlwZSA9ICdjbGFzcyc7XG4gICAgICAgIGxldCB2YWx1ZSA9IGl0ZW0uaWNvbjtcbiAgICAgICAgLy8gY29tcGF0aWJsZSBgYW50aWNvbiBhbnRpY29uLXVzZXJgXG4gICAgICAgIGlmICh+aXRlbS5pY29uLmluZGV4T2YoYGFudGljb24tYCkpIHtcbiAgICAgICAgICB0eXBlID0gJ2ljb24nO1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJy0nKS5zbGljZSgxKS5qb2luKCctJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoL15odHRwcz86XFwvXFwvLy50ZXN0KGl0ZW0uaWNvbikpIHtcbiAgICAgICAgICB0eXBlID0gJ2ltZyc7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbS5pY29uID0geyB0eXBlLCB2YWx1ZSB9IGFzIGFueTtcbiAgICAgIH1cblxuICAgICAgLy8gc2hvcnRjdXRcbiAgICAgIGlmIChwYXJlbnQgJiYgaXRlbS5zaG9ydGN1dCA9PT0gdHJ1ZSAmJiBwYXJlbnQuc2hvcnRjdXRSb290ICE9PSB0cnVlKVxuICAgICAgICBzaG9ydGN1dHMucHVzaChpdGVtKTtcblxuICAgICAgaXRlbS50ZXh0ID1cbiAgICAgICAgaXRlbS5pMThuICYmIHRoaXMuaTE4blNydiA/IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pIDogaXRlbS50ZXh0O1xuXG4gICAgICAvLyBncm91cFxuICAgICAgaXRlbS5ncm91cCA9IHR5cGVvZiBpdGVtLmdyb3VwICE9PSAnYm9vbGVhbicgPyB0cnVlIDogaXRlbS5ncm91cDtcblxuICAgICAgLy8gaGlkZGVuXG4gICAgICBpdGVtLl9oaWRkZW4gPSB0eXBlb2YgaXRlbS5oaWRlID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogaXRlbS5oaWRlO1xuXG4gICAgICAvLyBhY2xcbiAgICAgIGlmIChpdGVtLmFjbCAmJiB0aGlzLmFjbFNlcnZpY2UpIHtcbiAgICAgICAgaXRlbS5faGlkZGVuID0gIXRoaXMuYWNsU2VydmljZS5jYW4oaXRlbS5hY2wpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGl0ZW0sIHBhcmVudCwgZGVwdGgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkU2hvcnRjdXQoc2hvcnRjdXRzKTtcbiAgICB0aGlzLl9jaGFuZ2UkLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpcKKwqDDqMK9wr3DpcK/wqvDpsKNwrfDqMKPwpzDpcKNwpXDr8K8wozDpcKKwqDDqMK9wr3DpMK9wo3Dp8K9wq7DqMKnwoTDpcKIwpnDpcKmwoLDpMK4wovDr8K8wppcbiAgICogMcOjwoDCgcOnwrvCn8OkwrjCgMOlwpzCqMOkwrjCi8OmwqDChzDDp8KawoTDqMKKwoLDp8KCwrnDpMK4wovDr8K8wojDpcKNwrPDo8KAwpDDpMK4wrvDpcKvwrzDqMKIwqrDo8KAwpHDqMKKwoLDp8KCwrnDpMK4wovDpsKWwrnDr8K8wolcbiAgICogICAgICAxw6PCgMKBw6jCi8KlIGNoaWxkcmVuIMOlwq3CmMOlwpzCqCDDo8KAwpBzaG9ydGN1dFJvb3Q6IHRydWXDo8KAwpHDpcKIwpnDpsKcwoDDpMK8wpjDpcKFwojDo8KAwpDDpsKOwqjDqMKNwpDDo8KAwpHDqMK/wpnDp8Knwo3DpsKWwrnDpcK8wo9cbiAgICogICAgICAyw6PCgMKBw6XCkMKmw6XCiMKZw6bCn8Klw6bCicK+w6XCuMKmw6bCnMKJw6PCgMKQZGFzaGJvYXJkw6PCgMKRw6XCrcKXw6bCoMK3w6nCk8K+w6bCjsKlw6/CvMKMw6jCi8Klw6XCrcKYw6XCnMKow6XCiMKZw6XCnMKow6bCrcKkw6jCj8Kcw6XCjcKVw6fCmsKEw6TCuMKLw6bClsK5w6XCiMKbw6XCu8K6w6XCv8Krw6bCjcK3w6XChcKlw6XCj8KjXG4gICAqICAgICAgM8OjwoDCgcOlwpDCpsOlwojCmcOmwpTCvsOlwpzCqDDDqMKKwoLDp8KCwrnDpMK9wo3Dp8K9wq5cbiAgICovXG4gIHByaXZhdGUgbG9hZFNob3J0Y3V0KHNob3J0Y3V0czogTWVudVtdKSB7XG4gICAgaWYgKHNob3J0Y3V0cy5sZW5ndGggPT09IDAgfHwgdGhpcy5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxzID0gdGhpcy5kYXRhWzBdLmNoaWxkcmVuO1xuICAgIGxldCBwb3MgPSBscy5maW5kSW5kZXgodyA9PiB3LnNob3J0Y3V0Um9vdCA9PT0gdHJ1ZSk7XG4gICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgIHBvcyA9IGxzLmZpbmRJbmRleCh3ID0+IHcubGluay5pbmNsdWRlcygnZGFzaGJvYXJkJykpO1xuICAgICAgcG9zID0gKHBvcyAhPT0gLTEgPyBwb3MgOiAtMSkgKyAxO1xuICAgICAgY29uc3Qgc2hvcnRjdXRNZW51ID0gPE1lbnU+e1xuICAgICAgICB0ZXh0OiAnw6XCv8Krw6bCjcK3w6jCj8Kcw6XCjcKVJyxcbiAgICAgICAgaTE4bjogJ3Nob3J0Y3V0JyxcbiAgICAgICAgaWNvbjogJ2ljb24tcm9ja2V0JyxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgfTtcbiAgICAgIHRoaXMuZGF0YVswXS5jaGlsZHJlbi5zcGxpY2UocG9zLCAwLCBzaG9ydGN1dE1lbnUpO1xuICAgIH1cbiAgICBsZXQgX2RhdGEgPSB0aGlzLmRhdGFbMF0uY2hpbGRyZW5bcG9zXTtcbiAgICBpZiAoX2RhdGEuaTE4biAmJiB0aGlzLmkxOG5TcnYpIF9kYXRhLnRleHQgPSB0aGlzLmkxOG5TcnYuZmFueWkoX2RhdGEuaTE4bik7XG4gICAgX2RhdGEgPSBPYmplY3QuYXNzaWduKF9kYXRhLCB7XG4gICAgICBzaG9ydGN1dFJvb3Q6IHRydWUsXG4gICAgICBfdHlwZTogMyxcbiAgICAgIF9faWQ6IC0xLFxuICAgICAgX2RlcHRoOiAxLFxuICAgIH0pO1xuICAgIF9kYXRhLmNoaWxkcmVuID0gc2hvcnRjdXRzLm1hcChpID0+IHtcbiAgICAgIGkuX2RlcHRoID0gMjtcbiAgICAgIHJldHVybiBpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IG1lbnVzKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICAvKipcbiAgICogw6bCuMKFw6fCqcK6w6jCj8Kcw6XCjcKVXG4gICAqL1xuICBjbGVhcigpIHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLl9jaGFuZ2UkLm5leHQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKgwrnDpsKNwq5VUkzDqMKuwr7Dp8K9wq7DqMKPwpzDpcKNwpUgYF9vcGVuYCDDpcKxwp7DpsKAwqdcbiAgICogQHBhcmFtIHVybCBVUkzDpcKcwrDDpcKdwoBcbiAgICovXG4gIG9wZW5lZEJ5VXJsKHVybDogc3RyaW5nKSB7XG4gICAgaWYgKCF1cmwpIHJldHVybjtcblxuICAgIGxldCBmaW5kSXRlbTogTWVudSA9IG51bGw7XG4gICAgdGhpcy52aXNpdChpdGVtID0+IHtcbiAgICAgIGl0ZW0uX29wZW4gPSBmYWxzZTtcbiAgICAgIGlmICghaXRlbS5saW5rKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghZmluZEl0ZW0gJiYgdXJsLnN0YXJ0c1dpdGgoaXRlbS5saW5rKSkge1xuICAgICAgICBmaW5kSXRlbSA9IGl0ZW07XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFmaW5kSXRlbSkgcmV0dXJuO1xuXG4gICAgZG8ge1xuICAgICAgZmluZEl0ZW0uX29wZW4gPSB0cnVlO1xuICAgICAgZmluZEl0ZW0gPSBmaW5kSXRlbS5fX3BhcmVudDtcbiAgICB9IHdoaWxlIChmaW5kSXRlbSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCoMK5w6bCjcKudXJsw6jCjsK3w6XCj8KWw6jCj8Kcw6XCjcKVw6XCiMKXw6jCocKoXG4gICAqIEBwYXJhbSB1cmxcbiAgICovXG4gIGdldFBhdGhCeVVybCh1cmw6IHN0cmluZyk6IE1lbnVbXSB7XG4gICAgbGV0IGl0ZW06IE1lbnUgPSBudWxsO1xuICAgIHRoaXMudmlzaXQoKGksIHBhcmVudCwgZGVwdGgpID0+IHtcbiAgICAgIGlmIChpLmxpbmsgPT09IHVybCkge1xuICAgICAgICBpdGVtID0gaTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJldDogTWVudVtdID0gW107XG4gICAgaWYgKCFpdGVtKSByZXR1cm4gcmV0O1xuXG4gICAgZG8ge1xuICAgICAgcmV0LnNwbGljZSgwLCAwLCBpdGVtKTtcbiAgICAgIGl0ZW0gPSBpdGVtLl9fcGFyZW50O1xuICAgIH0gd2hpbGUgKGl0ZW0pO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2NoYW5nZSQudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5pMThuJCkgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJy4uLy4uL3dpbl90b2tlbnMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSB3aW46IGFueSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICApIHt9XG5cbiAgLyoqXG4gICAqIMOowq7CvsOnwr3CrsOmwrvCmsOlworCqMOmwp3CocOowofCs8OmwozCh8Olwq7CmsOlwoXCg8OnwrTCoFxuICAgKiBAcGFyYW0gZWxlbWVudCDDpsKMwofDpcKuwprDpcKFwoPDp8K0wqDDr8K8wozDqcK7wpjDqMKuwqQgYGRvY3VtZW50LmJvZHlgXG4gICAqIEBwYXJhbSB0b3BPZmZzZXQgw6XCgcKPw6fCp8K7w6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkIGAwYFxuICAgKi9cbiAgc2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQ/OiBFbGVtZW50LCB0b3BPZmZzZXQgPSAwKSB7XG4gICAgaWYgKCFlbGVtZW50KSBlbGVtZW50ID0gdGhpcy5kb2MuYm9keTtcblxuICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcblxuICAgIGNvbnN0IHcgPSB0aGlzLndpbjtcbiAgICBpZiAodyAmJiB3LnNjcm9sbEJ5KSB7XG4gICAgICB3LnNjcm9sbEJ5KDAsIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gdG9wT2Zmc2V0KTtcblxuICAgICAgaWYgKHcucGFnZVlPZmZzZXQgPCAyMCkge1xuICAgICAgICB3LnNjcm9sbEJ5KDAsIC13LnBhZ2VZT2Zmc2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogw6bCu8Kaw6XCisKow6jCh8Kzw6nCocK2w6nCg8KoXG4gICAqIEBwYXJhbSB0b3BPZmZzZXQgw6XCgcKPw6fCp8K7w6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkIGAwYFxuICAgKi9cbiAgc2Nyb2xsVG9Ub3AodG9wT2Zmc2V0ID0gMCkge1xuICAgIHRoaXMuc2Nyb2xsVG9FbGVtZW50KHRoaXMuZG9jLmJvZHksIHRvcE9mZnNldCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFwcCwgTGF5b3V0LCBVc2VyLCBTZXR0aW5nc05vdGlmeSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuY29uc3QgTEFZT1VUX0tFWSA9ICdsYXlvdXQnO1xuY29uc3QgVVNFUl9LRVkgPSAndXNlcic7XG5jb25zdCBBUFBfS0VZID0gJ2FwcCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBub3RpZnkkID0gbmV3IFN1YmplY3Q8U2V0dGluZ3NOb3RpZnk+KCk7XG4gIHByaXZhdGUgX2FwcDogQXBwID0gbnVsbDtcbiAgcHJpdmF0ZSBfdXNlcjogVXNlciA9IG51bGw7XG4gIHByaXZhdGUgX2xheW91dDogTGF5b3V0ID0gbnVsbDtcblxuICBwcml2YXRlIGdldChrZXk6IHN0cmluZykge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgJ251bGwnKSB8fCBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH1cblxuICBnZXQgbGF5b3V0KCk6IExheW91dCB7XG4gICAgaWYgKCF0aGlzLl9sYXlvdXQpIHtcbiAgICAgIHRoaXMuX2xheW91dCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIDxMYXlvdXQ+e1xuICAgICAgICAgIGZpeGVkOiB0cnVlLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgYm94ZWQ6IGZhbHNlLFxuICAgICAgICAgIGxhbmc6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuZ2V0KExBWU9VVF9LRVkpLFxuICAgICAgKTtcbiAgICAgIHRoaXMuc2V0KExBWU9VVF9LRVksIHRoaXMuX2xheW91dCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9sYXlvdXQ7XG4gIH1cblxuICBnZXQgYXBwKCk6IEFwcCB7XG4gICAgaWYgKCF0aGlzLl9hcHApIHtcbiAgICAgIHRoaXMuX2FwcCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIDxBcHA+e1xuICAgICAgICAgIHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5nZXQoQVBQX0tFWSksXG4gICAgICApO1xuICAgICAgdGhpcy5zZXQoQVBQX0tFWSwgdGhpcy5fYXBwKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2FwcDtcbiAgfVxuXG4gIGdldCB1c2VyKCk6IFVzZXIge1xuICAgIGlmICghdGhpcy5fdXNlcikge1xuICAgICAgdGhpcy5fdXNlciA9IE9iamVjdC5hc3NpZ24oPFVzZXI+e30sIHRoaXMuZ2V0KFVTRVJfS0VZKSk7XG4gICAgICB0aGlzLnNldChVU0VSX0tFWSwgdGhpcy5fdXNlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl91c2VyO1xuICB9XG5cbiAgZ2V0IG5vdGlmeSgpOiBPYnNlcnZhYmxlPFNldHRpbmdzTm90aWZ5PiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5JC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldExheW91dChuYW1lOiBzdHJpbmcgfCBMYXlvdXQsIHZhbHVlPzogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5sYXlvdXRbbmFtZV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbGF5b3V0ID0gbmFtZTtcbiAgICB9XG4gICAgdGhpcy5zZXQoTEFZT1VUX0tFWSwgdGhpcy5fbGF5b3V0KTtcbiAgICB0aGlzLm5vdGlmeSQubmV4dCh7IHR5cGU6ICdsYXlvdXQnLCBuYW1lLCB2YWx1ZSB9IGFzIGFueSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzZXRBcHAodmFsdWU6IEFwcCkge1xuICAgIHRoaXMuX2FwcCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0KEFQUF9LRVksIHZhbHVlKTtcbiAgICB0aGlzLm5vdGlmeSQubmV4dCh7IHR5cGU6ICdhcHAnLCB2YWx1ZSB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldFVzZXIodmFsdWU6IFVzZXIpIHtcbiAgICB0aGlzLl91c2VyID0gdmFsdWU7XG4gICAgdGhpcy5zZXQoVVNFUl9LRVksIHZhbHVlKTtcbiAgICB0aGlzLm5vdGlmeSQubmV4dCh7IHR5cGU6ICd1c2VyJywgdmFsdWUgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcgfSBmcm9tICcuL3NlcnZpY2VzL2h0dHAvaHR0cC5jb25maWcnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZUNvbmZpZyB9IGZyb20gJy4vc2VydmljZXMvcmVzcG9uc2l2ZS9yZXNwb25zaXZlLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQWxhaW5UaGVtZUNvbmZpZyB7XG4gIGh0dHA/OiBIdHRwQ2xpZW50Q29uZmlnO1xuICByZXNwb25zaXZlPzogUmVzcG9uc2l2ZUNvbmZpZztcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluVGhlbWVDb25maWcgfSBmcm9tICcuLi8uLi90aGVtZS5jb25maWcnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZUNvbmZpZyB9IGZyb20gJy4vcmVzcG9uc2l2ZS5jb25maWcnO1xuXG5leHBvcnQgY29uc3QgUkVQX01BWCA9IDY7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUmVzcG9uc2l2ZVNlcnZpY2Uge1xuICBwcml2YXRlIGNvZzogUmVzcG9uc2l2ZUNvbmZpZztcbiAgY29uc3RydWN0b3IoY29nOiBBbGFpblRoZW1lQ29uZmlnKSB7XG4gICAgdGhpcy5jb2cgPSBPYmplY3QuYXNzaWduKFxuICAgICAgPFJlc3BvbnNpdmVDb25maWc+e1xuICAgICAgICBydWxlczoge1xuICAgICAgICAgIDE6IHsgeHM6IDI0IH0sXG4gICAgICAgICAgMjogeyB4czogMjQsIHNtOiAxMiB9LFxuICAgICAgICAgIDM6IHsgeHM6IDI0LCBzbTogMTIsIG1kOiA4IH0sXG4gICAgICAgICAgNDogeyB4czogMjQsIHNtOiAxMiwgbWQ6IDgsIGxnOiA2IH0sXG4gICAgICAgICAgNTogeyB4czogMjQsIHNtOiAxMiwgbWQ6IDgsIGxnOiA2LCB4bDogNCB9LFxuICAgICAgICAgIDY6IHsgeHM6IDI0LCBzbTogMTIsIG1kOiA4LCBsZzogNiwgeGw6IDQsIHh4bDogMiB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNvZyEucmVzcG9uc2l2ZSxcbiAgICApO1xuICAgIGlmIChcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuY29nLnJ1bGVzKVxuICAgICAgICAubWFwKGkgPT4gK2kpXG4gICAgICAgIC5zb21lKChpOiBudW1iZXIpID0+IGkgPCAxIHx8IGkgPiBSRVBfTUFYKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgW3RoZW1lXSB0aGUgcmVzcG9uc2VpdmUgcnVsZSBpbmRleCB2YWx1ZSByYW5nZSBtdXN0IGJlIDEtJHtSRVBfTUFYfWAsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGdlbkNscyhjb3VudDogbnVtYmVyKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmNvZy5ydWxlc1tjb3VudCA+IFJFUF9NQVggPyBSRVBfTUFYIDogTWF0aC5tYXgoY291bnQsIDEpXTtcbiAgICBjb25zdCBhbnRDb2xDbGFzcyA9ICdhbnQtY29sJztcbiAgICBjb25zdCBjbHNNYXAgPSBbYCR7YW50Q29sQ2xhc3N9LXhzLSR7cnVsZS54c31gXTtcbiAgICBpZiAocnVsZS5zbSkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LXNtLSR7cnVsZS5zbX1gKTtcbiAgICBpZiAocnVsZS5tZCkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LW1kLSR7cnVsZS5tZH1gKTtcbiAgICBpZiAocnVsZS5sZykgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LWxnLSR7cnVsZS5sZ31gKTtcbiAgICBpZiAocnVsZS54bCkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LXhsLSR7cnVsZS54bH1gKTtcbiAgICBpZiAocnVsZS54eGwpIGNsc01hcC5wdXNoKGAke2FudENvbENsYXNzfS14eGwtJHtydWxlLnh4bH1gKTtcbiAgICByZXR1cm4gY2xzTWFwO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxuICBJbmplY3RvcixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJy4uL21lbnUvbWVudS5zZXJ2aWNlJztcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2UgfSBmcm9tICcuLi9pMThuL2kxOG4nO1xuXG4vKipcbiAqIMOowq7CvsOnwr3CrsOmwqDCh8OpwqLCmFxuICogQHNlZSBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL3NlcnZpY2UjVGl0bGVTZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgVGl0bGVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfcHJlZml4ID0gJyc7XG4gIHByaXZhdGUgX3N1ZmZpeCA9ICcnO1xuICBwcml2YXRlIF9zZXBhcmF0b3IgPSAnIC0gJztcbiAgcHJpdmF0ZSBfcmV2ZXJzZSA9IGZhbHNlO1xuICBwcml2YXRlIF9kZWZhdWx0ID0gJ05vdCBQYWdlIE5hbWUnO1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSB0aXRsZTogVGl0bGUsXG4gICAgcHJpdmF0ZSBtZW51U3J2OiBNZW51U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcbiAgICBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuaTE4blNydilcbiAgICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldFRpdGxlKCkpO1xuICB9XG5cbiAgLyoqIMOowq7CvsOnwr3CrsOlwojChsOpwprClMOnwqzCpiAqL1xuICBzZXQgc2VwYXJhdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXBhcmF0b3IgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiDDqMKuwr7Dp8K9wq7DpcKJwo3Dp8K8woAgKi9cbiAgc2V0IHByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gdmFsdWU7XG4gIH1cblxuICAvKiogw6jCrsK+w6fCvcKuw6XCkMKOw6fCvMKAICovXG4gIHNldCBzdWZmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N1ZmZpeCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIMOowq7CvsOnwr3CrsOmwpjCr8OlwpDCpsOlwo/CjcOowr3CrCAqL1xuICBzZXQgcmV2ZXJzZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JldmVyc2UgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiDDqMKuwr7Dp8K9wq7DqcK7wpjDqMKuwqTDpsKgwofDqcKiwpjDpcKQwo0gKi9cbiAgc2V0IGRlZmF1bHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHQgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlFbGVtZW50KCk6IHN0cmluZyB7XG4gICAgY29uc3QgZWwgPVxuICAgICAgdGhpcy5kb2MucXVlcnlTZWxlY3RvcignLmFsYWluLWRlZmF1bHRfX2NvbnRlbnQtdGl0bGUgaDEnKSB8fFxuICAgICAgdGhpcy5kb2MucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyX190aXRsZScpO1xuICAgIGlmIChlbCkge1xuICAgICAgcmV0dXJuIGVsLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBwcml2YXRlIGdldEJ5Um91dGUoKTogc3RyaW5nIHtcbiAgICBsZXQgbmV4dCA9IHRoaXMuaW5qZWN0b3IuZ2V0KEFjdGl2YXRlZFJvdXRlKTtcbiAgICB3aGlsZSAobmV4dC5maXJzdENoaWxkKSBuZXh0ID0gbmV4dC5maXJzdENoaWxkO1xuICAgIGNvbnN0IGRhdGEgPSAobmV4dC5zbmFwc2hvdCAmJiBuZXh0LnNuYXBzaG90LmRhdGEpIHx8IHt9O1xuICAgIGlmIChkYXRhLnRpdGxlSTE4biAmJiB0aGlzLmkxOG5TcnYpXG4gICAgICBkYXRhLnRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGRhdGEudGl0bGVJMThuKTtcbiAgICByZXR1cm4gZGF0YS50aXRsZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlNZW51KCk6IHN0cmluZyB7XG4gICAgY29uc3QgbWVudXMgPSB0aGlzLm1lbnVTcnYuZ2V0UGF0aEJ5VXJsKHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcikudXJsKTtcbiAgICBpZiAoIW1lbnVzIHx8IG1lbnVzLmxlbmd0aCA8PSAwKSByZXR1cm4gJyc7XG5cbiAgICBjb25zdCBpdGVtID0gbWVudXNbbWVudXMubGVuZ3RoIC0gMV07XG4gICAgbGV0IHRpdGxlO1xuICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB0aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgIHJldHVybiB0aXRsZSB8fCBpdGVtLnRleHQ7XG4gIH1cblxuICAvKipcbiAgICogw6jCrsK+w6fCvcKuw6bCoMKHw6nCosKYXG4gICAqL1xuICBzZXRUaXRsZSh0aXRsZT86IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgdGl0bGUgPVxuICAgICAgICB0aGlzLmdldEJ5Um91dGUoKSB8fFxuICAgICAgICB0aGlzLmdldEJ5TWVudSgpIHx8XG4gICAgICAgIHRoaXMuZ2V0QnlFbGVtZW50KCkgfHxcbiAgICAgICAgdGhpcy5fZGVmYXVsdDtcbiAgICB9XG4gICAgaWYgKHRpdGxlICYmICFBcnJheS5pc0FycmF5KHRpdGxlKSkge1xuICAgICAgdGl0bGUgPSBbdGl0bGVdO1xuICAgIH1cblxuICAgIGxldCBuZXdUaXRsZXMgPSBbXTtcbiAgICBpZiAodGhpcy5fcHJlZml4KSB7XG4gICAgICBuZXdUaXRsZXMucHVzaCh0aGlzLl9wcmVmaXgpO1xuICAgIH1cbiAgICBuZXdUaXRsZXMucHVzaCguLi4odGl0bGUgYXMgc3RyaW5nW10pKTtcbiAgICBpZiAodGhpcy5fc3VmZml4KSB7XG4gICAgICBuZXdUaXRsZXMucHVzaCh0aGlzLl9zdWZmaXgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmV2ZXJzZSkge1xuICAgICAgbmV3VGl0bGVzID0gbmV3VGl0bGVzLnJldmVyc2UoKTtcbiAgICB9XG4gICAgdGhpcy50aXRsZS5zZXRUaXRsZShuZXdUaXRsZXMuam9pbih0aGlzLl9zZXBhcmF0b3IpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmkxOG4kKSB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBERUxPTl9MT0NBTEUgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignZGVsb24tbG9jYWxlJyk7XG4iLCJpbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlLnR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgPExvY2FsZURhdGE+e1xuICBhYmJyOiAnemgtQ04nLFxuICBleGNlcHRpb246IHtcbiAgICA0MDM6ICfDpsKKwrHDpsKtwonDr8K8wozDpMK9wqDDpsKXwqDDpsKdwoPDqMKuwr/DqcKXwq7DqMKvwqXDqcKhwrXDqcKdwqInLFxuICAgIDQwNDogJ8OmworCscOmwq3CicOvwrzCjMOkwr3CoMOowq7Cv8OpwpfCrsOnwprChMOpwqHCtcOpwp3CosOkwrjCjcOlwq3CmMOlwpzCqCcsXG4gICAgNTAwOiAnw6bCisKxw6bCrcKJw6/CvMKMw6bCnMKNw6XCisKhw6XCmcKow6XCh8K6w6nClMKZw6TCusKGJyxcbiAgICBiYWNrVG9Ib21lOiAnw6jCv8KUw6XCm8Kew6nCpsKWw6nCocK1JyxcbiAgfSxcbiAgbm90aWNlSWNvbjoge1xuICAgIGVtcHR5VGV4dDogJ8OmwprCgsOmwpfCoMOmwpXCsMOmwo3CricsXG4gICAgY2xlYXJUZXh0OiAnw6bCuMKFw6fCqcK6JyxcbiAgfSxcbiAgcmV1c2VUYWI6IHtcbiAgICBjbG9zZTogJ8OlwoXCs8OpwpfCrcOmwqDCh8Onwq3CvicsXG4gICAgY2xvc2VPdGhlcjogJ8OlwoXCs8OpwpfCrcOlwoXCtsOlwq7Cg8OmwqDCh8Onwq3CvicsXG4gICAgY2xvc2VSaWdodDogJ8OlwoXCs8OpwpfCrcOlwo/Cs8Okwr7Cp8OmwqDCh8Onwq3CvicsXG4gICAgY2xlYXI6ICfDpsK4woXDp8KpwronLFxuICB9LFxuICB0YWdTZWxlY3Q6IHtcbiAgICBleHBhbmQ6ICfDpcKxwpXDpcK8woAnLFxuICAgIGNvbGxhcHNlOiAnw6bClMK2w6jCtcK3JyxcbiAgfSxcbiAgbWluaVByb2dyZXNzOiB7XG4gICAgdGFyZ2V0OiAnw6fCm8Kuw6bCoMKHw6XCgMK8w6/CvMKaJ1xuICB9LFxuICBzdDoge1xuICAgIHRvdGFsOiAnw6XChcKxIHt7dG90YWx9fSDDpsKdwqEnLFxuICB9LFxuICBzZjoge1xuICAgIHN1Ym1pdDogJ8Omwo/CkMOkwrrCpCcsXG4gICAgcmVzZXQ6ICfDqcKHwo3Dp8K9wq4nLFxuICAgIHNlYXJjaDogJ8OmwpDCnMOnwrTCoicsXG4gICAgZWRpdDogJ8Okwr/CncOlwq3CmCcsXG4gICAgYWRkVGV4dDogJ8OmwrfCu8OlworCoCcsXG4gICAgcmVtb3ZlVGV4dDogJ8OnwqfCu8OpwpnCpCcsXG4gICAgY2hlY2tBbGxUZXh0OiAnw6XChcKow6nCgMKJJyxcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIFByb3ZpZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi9sb2NhbGUudHlwZXMnO1xuaW1wb3J0IHsgREVMT05fTE9DQUxFIH0gZnJvbSAnLi9sb2NhbGUudG9rZW5zJztcbmltcG9ydCB6aENOIGZyb20gJy4vbGFuZ3VhZ2VzL3poLUNOJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERlbG9uTG9jYWxlU2VydmljZSB7XG4gIHByaXZhdGUgX2xvY2FsZTogTG9jYWxlRGF0YTtcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMb2NhbGVEYXRhPih0aGlzLl9sb2NhbGUpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoREVMT05fTE9DQUxFKSBsb2NhbGU6IExvY2FsZURhdGEpIHtcbiAgICB0aGlzLnNldExvY2FsZShsb2NhbGUgfHwgemhDTik7XG4gIH1cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TG9jYWxlRGF0YT4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRMb2NhbGUobG9jYWxlOiBMb2NhbGVEYXRhKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvY2FsZSAmJiB0aGlzLl9sb2NhbGUuYWJiciA9PT0gbG9jYWxlLmFiYnIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gbG9jYWxlO1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGxvY2FsZSk7XG4gIH1cblxuICBnZXQgbG9jYWxlKCk6IExvY2FsZURhdGEge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cblxuICBnZXREYXRhKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGVbcGF0aF0gfHwge307XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlkoZXhpc3Q6IERlbG9uTG9jYWxlU2VydmljZSwgbG9jYWxlOiBMb2NhbGVEYXRhKTogRGVsb25Mb2NhbGVTZXJ2aWNlIHtcbiAgcmV0dXJuIGV4aXN0IHx8IG5ldyBEZWxvbkxvY2FsZVNlcnZpY2UobG9jYWxlKTtcbn1cblxuZXhwb3J0IGNvbnN0IERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZSAgIDogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICB1c2VGYWN0b3J5OiBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZLFxuICBkZXBzICAgICAgOiBbIFsgbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBEZWxvbkxvY2FsZVNlcnZpY2UgXSwgREVMT05fTE9DQUxFIF1cbn07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgemhDTiBmcm9tICcuL2xhbmd1YWdlcy96aC1DTic7XG5cbmltcG9ydCB7IERFTE9OX0xPQ0FMRSB9IGZyb20gJy4vbG9jYWxlLnRva2Vucyc7XG5pbXBvcnQgeyBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUiB9IGZyb20gJy4vbG9jYWxlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IERFTE9OX0xPQ0FMRSwgdXNlVmFsdWU6IHpoQ04gfSxcbiAgICBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRGVsb25Mb2NhbGVNb2R1bGUge31cbiIsImltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUudHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCA8TG9jYWxlRGF0YT57XG4gIGFiYnI6ICdlbi1VUycsXG4gIGV4Y2VwdGlvbjoge1xuICAgIDQwMzogYFNvcnJ5LCB5b3UgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gdGhpcyBwYWdlYCxcbiAgICA0MDQ6IGBTb3JyeSwgdGhhdCBwYWdlIGRvbid0IGV4aXN0YCxcbiAgICA1MDA6IGBTb3JyeSwgc2VydmVyIGVycm9yYCxcbiAgICBiYWNrVG9Ib21lOiAnQmFjayBUbyBIb21lJyxcbiAgfSxcbiAgbm90aWNlSWNvbjoge1xuICAgIGVtcHR5VGV4dDogJ05vIGRhdGEnLFxuICAgIGNsZWFyVGV4dDogJ0NsZWFyJyxcbiAgfSxcbiAgcmV1c2VUYWI6IHtcbiAgICBjbG9zZTogJ0Nsb3NlIHRhYicsXG4gICAgY2xvc2VPdGhlcjogJ0Nsb3NlIG90aGVyIHRhYnMnLFxuICAgIGNsb3NlUmlnaHQ6ICdDbG9zZSB0YWJzIHRvIHJpZ2h0JyxcbiAgICBjbGVhcjogJ0NsZWFyIHRhYnMnLFxuICB9LFxuICB0YWdTZWxlY3Q6IHtcbiAgICBleHBhbmQ6ICdFeHBhbmQnLFxuICAgIGNvbGxhcHNlOiAnQ29sbGFwc2UnLFxuICB9LFxuICBtaW5pUHJvZ3Jlc3M6IHtcbiAgICB0YXJnZXQ6ICdUYXJnZXQ6ICcsXG4gIH0sXG4gIHN0OiB7XG4gICAgdG90YWw6ICd7e3JhbmdlWzBdfX0gLSB7e3JhbmdlWzFdfX0gb2Yge3t0b3RhbH19JyxcbiAgfSxcbiAgc2Y6IHtcbiAgICBzdWJtaXQ6ICdTdWJtaXQnLFxuICAgIHJlc2V0OiAnUmVzZXQnLFxuICAgIHNlYXJjaDogJ1NlYXJjaCcsXG4gICAgZWRpdDogJ1NhdmUnLFxuICAgIGFkZFRleHQ6ICdBZGQnLFxuICAgIHJlbW92ZVRleHQ6ICdSZW1vdmUnLFxuICAgIGNoZWNrQWxsVGV4dDogJ0NoZWNrIGFsbCcsXG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS50eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IDxMb2NhbGVEYXRhPntcbiAgYWJicjogJ3poLVRXJyxcbiAgZXhjZXB0aW9uOiB7XG4gICAgNDAzOiAnw6bCisKxw6bCrcKJw6/CvMKMw6XCpsKzw6fChMKhw6bCrMKKw6jCqMKqw6XClcKPw6jCqcKyw6nCoMKBw6nCncKiJyxcbiAgICA0MDQ6ICfDpsKKwrHDpsKtwonDr8K8wozDpcKmwrPDqMKowqrDpcKVwo/Dp8KawoTDqcKgwoHDqcKdwqLDpMK4wo3DpcKtwpjDpcKcwqgnLFxuICAgIDUwMDogJ8OmworCscOmwq3CicOvwrzCjMOmwpzCjcOlwovCmcOlwpnCqMOlwofCusOpwozCr8OkwrrChicsXG4gICAgYmFja1RvSG9tZTogJ8Oowr/ClMOlwpvCnsOpwqbClsOpwqDCgScsXG4gIH0sXG4gIG5vdGljZUljb246IHtcbiAgICBlbXB0eVRleHQ6ICfDpsKawqvDp8KEwqHDpsKVwrjDpsKTwponLFxuICAgIGNsZWFyVGV4dDogJ8OmwrjChcOnwqnCuicsXG4gIH0sXG4gIHJldXNlVGFiOiB7XG4gICAgY2xvc2U6ICfDqcKXwpzDqcKWwonDpsKowpnDp8Kwwr0nLFxuICAgIGNsb3NlT3RoZXI6ICfDqcKXwpzDqcKWwonDpcKFwrbDpcKuwoPDpsKowpnDp8Kwwr0nLFxuICAgIGNsb3NlUmlnaHQ6ICfDqcKXwpzDqcKWwonDpcKPwrPDpcKBwrTDpsKowpnDp8Kwwr0nLFxuICAgIGNsZWFyOiAnw6bCuMKFw6fCqcK6JyxcbiAgfSxcbiAgdGFnU2VsZWN0OiB7XG4gICAgZXhwYW5kOiAnw6XCscKVw6nClsKLJyxcbiAgICBjb2xsYXBzZTogJ8OmwpTCtsOowrXCtycsXG4gIH0sXG4gIG1pbmlQcm9ncmVzczoge1xuICAgIHRhcmdldDogJ8OnwpvCrsOmwqjCmcOlwoDCvMOvwrzCmicsXG4gIH0sXG4gIHN0OiB7XG4gICAgdG90YWw6ICfDpcKFwrEge3t0b3RhbH19IMOmwqLCnScsXG4gIH0sXG4gIHNmOiB7XG4gICAgc3VibWl0OiAnw6bCj8KQw6TCusKkJyxcbiAgICByZXNldDogJ8OpwofCjcOnwr3CricsXG4gICAgc2VhcmNoOiAnw6bCkMKcw6fCtMKiJyxcbiAgICBlZGl0OiAnw6TCv8Kdw6XCrcKYJyxcbiAgICBhZGRUZXh0OiAnw6bCt8K7w6XCisKgJyxcbiAgICByZW1vdmVUZXh0OiAnw6fCp8K7w6nCmcKkJyxcbiAgICBjaGVja0FsbFRleHQ6ICfDpcKFwqjDqcKBwrgnLFxuICB9LFxufTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOek1vZGFsU2VydmljZSwgTW9kYWxPcHRpb25zRm9yU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsSGVscGVyT3B0aW9ucyB7XG4gIC8qKiDDpcKkwqfDpcKwwo/Dr8K8wpvDpMK+wovDpcKmwoLDr8K8wppsZ8OjwoDCgTYwMMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBsZ2AgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlcjtcbiAgLyoqIMOlwq/CucOowq/CncOmwqHChiBbTW9kYWxPcHRpb25zRm9yU2VydmljZV0oaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9tb2RhbC9uei1tb2RhbC50eXBlLnRzKSDDpcKPwoLDpsKVwrAgKi9cbiAgbW9kYWxPcHRpb25zPzogTW9kYWxPcHRpb25zRm9yU2VydmljZTtcbiAgLyoqIMOmwpjCr8OlwpDCpsOnwrLCvsOlwofChsOvwrzCiMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYMOvwrzCicOvwrzCjMOowovCpcOowr/ClMOlwpvCnsOlwoDCvMOpwp3CnsOnwqnCusOlwoDCvMOvwrzCiGBudWxsYMOmwojClmB1bmRlZmluZWRgw6/CvMKJw6jCp8KGw6TCuMK6w6bCiMKQw6XCisKfw6/CvMKMw6XCkMKmw6XCiMKZw6jCp8KGw6TCuMK6w6nClMKZw6jCr8KvICovXG4gIGV4YWN0PzogYm9vbGVhbjtcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwozChcOowqPCucOmwqDCh8Onwq3CvsOpwqHCtcOvwrzCjMOkwr/CrsOlwqTCjcOmwqjCocOmwoDCgcOlwozChcOlwpDCq8OmwqDCh8Onwq3CvsOpwpfCtMOowrfCncOpwpfCrsOpwqLCmCAqL1xuICBpbmNsdWRlVGFicz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogw6XCr8K5w6jCr8Kdw6bCocKGw6jCvsKFw6XCisKpw6fCscK7XG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTW9kYWxIZWxwZXIge1xuICBwcml2YXRlIHpJbmRleCA9IDUwMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogTnpNb2RhbFNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIMOmwp7ChMOlwrvCusOkwrjCgMOkwrjCqsOlwq/CucOowq/CncOmwqHChlxuICAgKlxuICAgKiBAcGFyYW0gY29tcCDDp8K7woTDpMK7wrZcbiAgICogQHBhcmFtIHBhcmFtcyDDp8K7woTDpMK7wrbDpcKPwoLDpsKVwrBcbiAgICogQHBhcmFtIG9wdGlvbnMgw6nCosKdw6XCpMKWw6XCj8KCw6bClcKwXG4gICAqXG4gICAqIMOnwqTCusOkwr7Ci8OvwrzCmlxuICBgYGB0c1xudGhpcy5tb2RhbEhlbHBlci5jcmVhdGUoRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbi8vIMOlwq/CucOkwrrCjsOnwrvChMOkwrvCtsOnwprChMOmwojCkMOlworCnybDpcKFwrPDqcKXwq3Dp8KawoTDpcKkwoTDp8KQwobDqMKvwrTDpsKYwo5cbi8vIMOmwojCkMOlworCn1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XG4vLyDDpcKFwrPDqcKXwq1cbnRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG5gYGBcbiAgICovXG4gIGNyZWF0ZShcbiAgICBjb21wOiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiBNb2RhbEhlbHBlck9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBzaXplOiAnbGcnLFxuICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICBpbmNsdWRlVGFiczogZmFsc2UsXG4gICAgfSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuICAgICAgbGV0IGNscyA9ICcnLFxuICAgICAgICB3aWR0aCA9ICcnO1xuICAgICAgaWYgKG9wdGlvbnMuc2l6ZSkge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB3aWR0aCA9IGAke29wdGlvbnMuc2l6ZX1weGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xzID0gYG1vZGFsLSR7b3B0aW9ucy5zaXplfWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLmluY2x1ZGVUYWJzKSB7XG4gICAgICAgIGNscyArPSAnIG1vZGFsLWluY2x1ZGUtdGFicyc7XG4gICAgICB9XG4gICAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZSA9IHtcbiAgICAgICAgbnpXcmFwQ2xhc3NOYW1lOiBjbHMsXG4gICAgICAgIG56Q29udGVudDogY29tcCxcbiAgICAgICAgbnpXaWR0aDogd2lkdGggPyB3aWR0aCA6IHVuZGVmaW5lZCxcbiAgICAgICAgbnpGb290ZXI6IG51bGwsXG4gICAgICAgIG56Q29tcG9uZW50UGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIG56WkluZGV4OiArK3RoaXMuekluZGV4LFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHN1YmplY3QgPSB0aGlzLnNydi5jcmVhdGUoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMubW9kYWxPcHRpb25zKSxcbiAgICAgICk7XG4gICAgICBjb25zdCBhZnRlckNsb3NlJCA9IHN1YmplY3QuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLmV4YWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHJlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICBhZnRlckNsb3NlJC51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCnsKEw6XCu8K6w6nCncKZw6bCgMKBw6bCocKGw6/CvMKMw6fCgsK5w6XCh8K7w6jCksKZw6XCscKCw6TCuMKNw6XChcKBw6jCrsK4w6XChcKzw6nCl8KtXG4gICAqXG4gICAqIEBwYXJhbSBjb21wIMOnwrvChMOkwrvCtlxuICAgKiBAcGFyYW0gcGFyYW1zIMOnwrvChMOkwrvCtsOlwo/CgsOmwpXCsFxuICAgKiBAcGFyYW0gb3B0aW9ucyDDqcKiwp3DpcKkwpbDpcKPwoLDpsKVwrBcbiAgICpcbiAgICogw6fCpMK6w6TCvsKLw6/CvMKaXG4gIGBgYHRzXG50aGlzLm1vZGFsSGVscGVyLm9wZW4oRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbi8vIMOlwq/CucOkwrrCjsOnwrvChMOkwrvCtsOnwprChMOmwojCkMOlworCnybDpcKFwrPDqcKXwq3Dp8KawoTDpcKkwoTDp8KQwobDqMKvwrTDpsKYwo5cbi8vIMOmwojCkMOlworCn1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XG4vLyDDpcKFwrPDqcKXwq1cbnRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG5gYGBcbiAgICovXG4gIGNyZWF0ZVN0YXRpYyhcbiAgICBjb21wOiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiBNb2RhbEhlbHBlck9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBtb2RhbE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgeyBuek1hc2tDbG9zYWJsZTogZmFsc2UgfSxcbiAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5tb2RhbE9wdGlvbnMsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoY29tcCwgcGFyYW1zLCBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7IG1vZGFsT3B0aW9ucyB9KSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCicKTw6XCvMKAw6XCr8K5w6jCr8Kdw6bCocKGXG4gICAqIEBwYXJhbSBjb21wIMOnwrvChMOkwrvCtlxuICAgKiBAcGFyYW0gcGFyYW1zIMOnwrvChMOkwrvCtsOlwo/CgsOmwpXCsFxuICAgKiBAcGFyYW0gc2l6ZSDDpcKkwqfDpcKwwo/Dr8K8wpvDpMK+wovDpcKmwoLDr8K8wppsZ8OjwoDCgTYwMMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmxnXG4gICAqIEBwYXJhbSBvcHRpb25zIMOlwq/CucOowq/CncOmwqHChiBgTW9kYWxPcHRpb25zRm9yU2VydmljZWAgw6XCj8KCw6bClcKwXG4gICAqXG4gICAqIMOnwqTCusOkwr7Ci8OvwrzCmlxuICBgYGB0c1xudGhpcy5tb2RhbEhlbHBlci5vcGVuKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4vLyDDpcKvwrnDpMK6wo7Dp8K7woTDpMK7wrbDp8KawoTDpsKIwpDDpcKKwp8mw6XChcKzw6nCl8Ktw6fCmsKEw6XCpMKEw6fCkMKGw6jCr8K0w6bCmMKOXG4vLyDDpsKIwpDDpcKKwp9cbnRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcbnRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xuLy8gw6XChcKzw6nCl8KtXG50aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xuYGBgXG4gICAqL1xuICBvcGVuKFxuICAgIGNvbXA6IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgc2l6ZTogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyID0gJ2xnJyxcbiAgICBvcHRpb25zPzogTW9kYWxPcHRpb25zRm9yU2VydmljZSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoY29tcCwgcGFyYW1zLCB7XG4gICAgICBzaXplLFxuICAgICAgbW9kYWxPcHRpb25zOiBvcHRpb25zLFxuICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIMOpwp3CmcOmwoDCgcOmwqHChsOvwrzCjMOnwoLCucOlwofCu8OowpLCmcOlwrHCgsOkwrjCjcOlwoXCgcOowq7CuMOlwoXCs8OpwpfCrVxuICAgKiBAcGFyYW0gY29tcCDDp8K7woTDpMK7wrZcbiAgICogQHBhcmFtIHBhcmFtcyDDp8K7woTDpMK7wrbDpcKPwoLDpsKVwrBcbiAgICogQHBhcmFtIHNpemUgw6XCpMKnw6XCsMKPw6/CvMKbw6TCvsKLw6XCpsKCw6/CvMKabGfDo8KAwoE2MDDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppsZ1xuICAgKiBAcGFyYW0gb3B0aW9ucyDDpcKvwrnDqMKvwp3DpsKhwoYgYE1vZGFsT3B0aW9uc0ZvclNlcnZpY2VgIMOlwo/CgsOmwpXCsFxuICAgKlxuICAgKiDDp8KkwrrDpMK+wovDr8K8wppcbiAgYGBgdHNcbnRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuLy8gw6XCr8K5w6TCusKOw6fCu8KEw6TCu8K2w6fCmsKEw6bCiMKQw6XCisKfJsOlwoXCs8OpwpfCrcOnwprChMOlwqTChMOnwpDChsOowq/CtMOmwpjCjlxuLy8gw6bCiMKQw6XCisKfXG50aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG50aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcbi8vIMOlwoXCs8OpwpfCrVxudGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcbmBgYFxuICAgKi9cbiAgc3RhdGljKFxuICAgIGNvbXA6IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgc2l6ZTogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyID0gJ2xnJyxcbiAgICBvcHRpb25zPzogYW55LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLm9wZW4oXG4gICAgICBjb21wLFxuICAgICAgcGFyYW1zLFxuICAgICAgc2l6ZSxcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBuek1hc2tDbG9zYWJsZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOekRyYXdlclNlcnZpY2UsIE56RHJhd2VyT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYXdlckhlbHBlck9wdGlvbnMge1xuICAvKipcbiAgICogw6XCpMKnw6XCsMKPw6/CvMKbw6TCvsKLw6XCpsKCw6/CvMKabGfDo8KAwoE2MDDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgbWRgXG4gICAqXG4gICAqIHwgw6fCscK7w6XCnsKLIHwgw6nCu8KYw6jCrsKkw6XCpMKnw6XCsMKPIHxcbiAgICogfCAtLS0gfCAtLS0tLS0gfFxuICAgKiB8IGBzbWAgfCBgMzAwYCB8XG4gICAqIHwgYG1kYCB8IGA2MDBgIHxcbiAgICogfCBgbGdgIHwgYDkwMGAgfFxuICAgKiB8IGB4bGAgfCBgMTIwMGAgfFxuICAgKlxuICAgKiA+IMOkwrvCpcOkwrjCisOlwoDCvMOvwrzCjMOlwo/Cr8OpwoDCmsOowr/Ch8OowqbChsOnwpvClsOnwpvCuMOlwrrClMOnwprChExFU1PDpcKPwoLDpsKVwrDDqMKHwqrDqMKhwozDqMKwwoPDpsKVwrRcbiAgICovXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgbnVtYmVyO1xuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6XCjMKFw6XCkMKrw6XCusKVw6nCg8Kow6XCt8Klw6XChcK3w6bCncKhw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHRydWVgXG4gICAqL1xuICBmb290ZXI/OiBib29sZWFuO1xuICAvKipcbiAgICogw6XCusKVw6nCg8Kow6XCt8Klw6XChcK3w6bCncKhw6nCq8KYw6XCusKmw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDU1YFxuICAgKi9cbiAgZm9vdGVySGVpZ2h0PzogbnVtYmVyO1xuICAvKiogw6bCisK9w6XCscKJIFtOekRyYXdlck9wdGlvbnNdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2RyYXdlci96aCNuemRyYXdlcm9wdGlvbnMpIMOlwo/CgsOmwpXCsCAqL1xuICBkcmF3ZXJPcHRpb25zPzogTnpEcmF3ZXJPcHRpb25zO1xufVxuXG4vKipcbiAqIMOmworCvcOlwrHCicOowr7ChcOlworCqcOnwrHCu1xuICpcbiAqICoqw6bCs8Kow6bChMKPw6/CvMKaKiogw6bCnsKEw6XCu8K6w6fCu8KTw6bCnsKcw6nCg8K9w6XCj8Kvw6jCosKrw6jCrsKiw6nCmMKFw6/CvMKMw6TCvcKGw6bCsMK4w6jCv8Kcw6nCg8K9w6TCuMKNw6TCvMKaw6jCp8Kmw6XCj8KRIGBvYnNlcnZlci5lcnJvcmBcbiAqXG4gKiDDp8KkwrrDpMK+wovDr8K8wppcbmBgYHRzXG50aGlzLmRyYXdlckhlbHBlci5jcmVhdGUoJ0VkaXQnLCBGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuLy8gw6XCr8K5w6TCusKOw6fCu8KEw6TCu8K2w6fCmsKEw6bCiMKQw6XCisKfJsOlwoXCs8OpwpfCrcOnwprChMOlwqTChMOnwpDChsOowq/CtMOmwpjCjlxuLy8gw6bCiMKQw6XCisKfXG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKGRhdGEpO1xudGhpcy5OekRyYXdlclJlZi5jbG9zZSh0cnVlKTtcbi8vIMOlwoXCs8OpwpfCrVxudGhpcy5OekRyYXdlclJlZi5jbG9zZSgpO1xudGhpcy5OekRyYXdlclJlZi5jbG9zZShmYWxzZSk7XG5gYGBcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBEcmF3ZXJIZWxwZXIge1xuICAvLyDDpcKkwqfDqcKDwqjDpcKIwobDpsKDwoXDpcKGwrXDpMK4wovDpsKKwr3DpcKxwonDp8KawoTDpcKxwoLDp8K6wqfDpsKvwpQgTW9kYWwgw6TCvMKaw6bCm8K0w6TCvcKOw6TCuMKAw6TCusKbXG4gIHByaXZhdGUgekluZGV4ID0gNDAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBOekRyYXdlclNlcnZpY2UpIHsgfVxuXG4gIC8qKlxuICAgKiDDpsKewoTDpcK7wrrDpMK4woDDpMK4wqrDpsKKwr3DpcKxwolcbiAgICovXG4gIGNyZWF0ZShcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGNvbXA6IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IERyYXdlckhlbHBlck9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbig8RHJhd2VySGVscGVyT3B0aW9ucz57XG4gICAgICBzaXplOiAnbWQnLFxuICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgZm9vdGVySGVpZ2h0OiA1NSxcbiAgICAgIGRyYXdlck9wdGlvbnM6IHtcbiAgICAgICAgbnpQbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgICAgIG56V3JhcENsYXNzTmFtZTogJydcbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICBjb25zdCB7IHNpemUsIGZvb3RlciwgZm9vdGVySGVpZ2h0LCBkcmF3ZXJPcHRpb25zIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE56RHJhd2VyT3B0aW9ucyA9IHtcbiAgICAgICAgbnpDb250ZW50OiBjb21wLFxuICAgICAgICBuekNvbnRlbnRQYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgbnpaSW5kZXg6ICsrdGhpcy56SW5kZXgsXG4gICAgICAgIG56VGl0bGU6IHRpdGxlXG4gICAgICB9O1xuXG4gICAgICBpZiAoZm9vdGVyKSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zLm56Qm9keVN0eWxlID0ge1xuICAgICAgICAgIGhlaWdodDogYGNhbGMoMTAwJSAtICR7Zm9vdGVySGVpZ2h0fXB4KWAsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICAncGFkZGluZy1ib3R0b20nOiBgJHtmb290ZXJIZWlnaHQgLSAyfXB4YFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHNpemUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zW2RyYXdlck9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICd0b3AnIHx8IGRyYXdlck9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ256SGVpZ2h0JyA6ICdueldpZHRoJ10gPSBvcHRpb25zLnNpemU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZhdWx0T3B0aW9ucy5ueldyYXBDbGFzc05hbWUgPSAoZHJhd2VyT3B0aW9ucy5ueldyYXBDbGFzc05hbWUgKyBgIGRyYXdlci0ke29wdGlvbnMuc2l6ZX1gKS50cmltKCk7XG4gICAgICAgIGRlbGV0ZSBkcmF3ZXJPcHRpb25zLm56V3JhcENsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3ViamVjdCA9IHRoaXMuc3J2LmNyZWF0ZShcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgZHJhd2VyT3B0aW9ucyksXG4gICAgICApO1xuICAgICAgY29uc3QgYWZ0ZXJDbG9zZSQgPSBzdWJqZWN0LmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzICE9IG51bGwgJiYgcmVzICE9PSBmYWxzZSkge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICBhZnRlckNsb3NlJC51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCnsKEw6XCu8K6w6TCuMKAw6TCuMKqw6bCisK9w6XCscKJw6/CvMKMw6fCgsK5w6XCh8K7w6jCksKZw6XCscKCw6TCuMKNw6XChcKBw6jCrsK4w6XChcKzw6nCl8KtXG4gICAqL1xuICBzdGF0aWMoXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBjb21wOiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiBEcmF3ZXJIZWxwZXJPcHRpb25zXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgZHJhd2VyT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7IG56TWFza0Nsb3NhYmxlOiBmYWxzZSB9LFxuICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLmRyYXdlck9wdGlvbnMsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUodGl0bGUsIGNvbXAsIHBhcmFtcywgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgeyBkcmF3ZXJPcHRpb25zIH0pKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cENsaWVudCxcbiAgSHR0cEhlYWRlcnMsXG4gIEh0dHBQYXJhbXMsXG4gIEh0dHBSZXNwb25zZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWxhaW5UaGVtZUNvbmZpZyB9IGZyb20gJy4uLy4uL3RoZW1lLmNvbmZpZyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50Q29uZmlnIH0gZnJvbSAnLi9odHRwLmNvbmZpZyc7XG5cbi8qKlxuICogw6XCsMKBw6jCo8KFSHR0cENsaWVudMOvwrzCjMOkwrjCu8OowqbCgcOowqfCo8OlwobCs8OvwrzCmlxuICogKyDDpMK8wpjDpcKMwpZIdHRwQ2xpZW50w6XCnMKow6XCj8KCw6bClcKww6TCuMKKw6TCvsK/w6XCiMKpw6bCgMKnXG4gKiArIMOnwrvCn8OkwrjCgMOlwq7CnsOnwo7CsCBsb2FkaW5nXG4gKiArIMOnwrvCn8OkwrjCgMOlwqTChMOnwpDChsOmwpfCtsOpwpfCtMOmwqDCvMOlwrzCj8OpwpfCrsOpwqLCmFxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNsYXNzLW5hbWVcbmV4cG9ydCBjbGFzcyBfSHR0cENsaWVudCB7XG4gIHByaXZhdGUgY29nOiBIdHRwQ2xpZW50Q29uZmlnO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIGNvZzogQWxhaW5UaGVtZUNvbmZpZykge1xuICAgIHRoaXMuY29nID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIDxIdHRwQ2xpZW50Q29uZmlnPntcbiAgICAgICAgbnVsbFZhbHVlSGFuZGxpbmc6ICdpbmNsdWRlJyxcbiAgICAgICAgZGF0ZVZhbHVlSGFuZGxpbmc6ICd0aW1lc3RhbXAnLFxuICAgICAgfSxcbiAgICAgIGNvZyEuaHR0cCxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xuXG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKtwqPDpcKcwqjDpcKKwqDDqMK9wr3DpMK4wq0gKi9cbiAgZ2V0IGxvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gIH1cblxuICBwYXJzZVBhcmFtcyhwYXJhbXM6IGFueSk6IEh0dHBQYXJhbXMge1xuICAgIGNvbnN0IG5ld1BhcmFtcyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IF9kYXRhID0gcGFyYW1zW2tleV07XG4gICAgICAvLyDDpcK/wr3Dp8KVwqXDp8KpwrrDpcKAwrxcbiAgICAgIGlmICh0aGlzLmNvZy5udWxsVmFsdWVIYW5kbGluZyA9PT0gJ2lnbm9yZScgJiYgX2RhdGEgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgLy8gw6XCsMKGw6bCl8K2w6nCl8K0w6jCvcKsw6XCjMKWw6TCuMK6w6/CvMKaw6bCl8K2w6nCl8K0w6bCiMKzICjDp8KnwpIpXG4gICAgICBpZiAodGhpcy5jb2cuZGF0ZVZhbHVlSGFuZGxpbmcgPT09ICd0aW1lc3RhbXAnICYmIF9kYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBfZGF0YSA9IF9kYXRhLnZhbHVlT2YoKTtcbiAgICAgIH1cbiAgICAgIG5ld1BhcmFtc1trZXldID0gX2RhdGE7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBIdHRwUGFyYW1zKHsgZnJvbU9iamVjdDogbmV3UGFyYW1zIH0pO1xuICB9XG5cbiAgYXBwbGllZFVybCh1cmw6IHN0cmluZywgcGFyYW1zPzogYW55KSB7XG4gICAgaWYgKCFwYXJhbXMpIHJldHVybiB1cmw7XG4gICAgdXJsICs9IH51cmwuaW5kZXhPZignPycpID8gJycgOiAnPyc7XG4gICAgY29uc3QgYXJyOiBzdHJpbmdbXSA9IFtdO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxuICAgIGZvciAoY29uc3Qga2V5IGluIHBhcmFtcykge1xuICAgICAgYXJyLnB1c2goYCR7a2V5fT0ke3BhcmFtc1trZXldfWApO1xuICAgIH1cbiAgICByZXR1cm4gdXJsICsgYXJyLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGJlZ2luKCkge1xuICAgIC8vIGNvbnNvbGUudGltZSgnaHR0cCcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMuX2xvYWRpbmcgPSB0cnVlKSk7XG4gIH1cblxuICBlbmQoKSB7XG4gICAgLy8gY29uc29sZS50aW1lRW5kKCdodHRwJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5fbG9hZGluZyA9IGZhbHNlKSk7XG4gIH1cblxuICAvLyAjcmVnaW9uIGdldFxuXG4gIC8qKlxuICAgKiBHRVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYFRgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgZ2V0PFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuXG4gIC8qKlxuICAgKiBHRVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYHN0cmluZ2Agw6fCscK7w6XCnsKLXG4gICAqL1xuICBnZXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIEdFVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBnZXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XG5cbiAgLyoqXG4gICAqIEdFVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBnZXQ8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xuXG4gIC8qKlxuICAgKiBHRVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYGFueWAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBnZXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBHRVQgw6jCr8K3w6bCscKCXG4gICAqL1xuICBnZXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgICdHRVQnLFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHBvc3RcblxuICAvKipcbiAgICogUE9TVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgc3RyaW5nYCDDp8KxwrvDpcKewotcbiAgICovXG4gIHBvc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBQT1NUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBIdHRwUmVzcG9uc2U8SlNPTj5gIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcG9zdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XG5cbiAgLyoqXG4gICAqIFBPU1TDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEpTT05gIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcG9zdDxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcblxuICAvKipcbiAgICogUE9TVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgYW55YCDDp8KxwrvDpcKewotcbiAgICovXG4gIHBvc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIFBPU1Qgw6jCr8K3w6bCscKCXG4gICAqL1xuICBwb3N0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgJ1BPU1QnLFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZGVsZXRlXG5cbiAgLyoqXG4gICAqIERFTEVURcOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgc3RyaW5nYCDDp8KxwrvDpcKewotcbiAgICovXG4gIGRlbGV0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICAvKipcbiAgICogREVMRVRFw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBKU09OYCDDp8KxwrvDpcKewotcbiAgICovXG4gIGRlbGV0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcblxuICAvKipcbiAgICogREVMRVRFw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBhbnlgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgZGVsZXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogREVMRVRFIMOowq/Ct8OmwrHCglxuICAgKi9cbiAgZGVsZXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICAnREVMRVRFJyxcbiAgICAgIHVybCxcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLyoqXG4gICAqIGBqc29ucGAgw6jCr8K3w6bCscKCXG4gICAqXG4gICAqIEBwYXJhbSB1cmwgVVJMw6XCnMKww6XCncKAXG4gICAqIEBwYXJhbSBwYXJhbXMgw6jCr8K3w6bCscKCw6XCj8KCw6bClcKwXG4gICAqIEBwYXJhbSBjYWxsYmFja1BhcmFtIENBTExCQUNLw6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaSlNPTlBfQ0FMTEJBQ0tcbiAgICovXG4gIGpzb25wKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBjYWxsYmFja1BhcmFtOiBzdHJpbmcgPSAnSlNPTlBfQ0FMTEJBQ0snLFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuanNvbnAodGhpcy5hcHBsaWVkVXJsKHVybCwgcGFyYW1zKSwgY2FsbGJhY2tQYXJhbSkucGlwZShcbiAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IocmVzID0+IHtcbiAgICAgICAgdGhpcy5lbmQoKTtcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IocmVzKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvLyAjcmVnaW9uIHBhdGNoXG5cbiAgLyoqXG4gICAqIFBBVENIw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBzdHJpbmdgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcGF0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBQQVRDSMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSHR0cFJlc3BvbnNlPEpTT04+YCDDp8KxwrvDpcKewotcbiAgICovXG4gIHBhdGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcblxuICAvKipcbiAgICogUEFUQ0jDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEpTT05gIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcGF0Y2g8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8VD47XG5cbiAgLyoqXG4gICAqIFBBVENIw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBhbnlgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcGF0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIFBBVENIIMOowq/Ct8OmwrHCglxuICAgKi9cbiAgcGF0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICAnUEFUQ0gnLFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcHV0XG5cbiAgLyoqXG4gICAqIFBVVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgc3RyaW5nYCDDp8KxwrvDpcKewotcbiAgICovXG4gIHB1dChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIFBVVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSHR0cFJlc3BvbnNlPEpTT04+YCDDp8KxwrvDpcKewotcbiAgICovXG4gIHB1dChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XG5cbiAgLyoqXG4gICAqIFBVVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBwdXQ8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8VD47XG5cbiAgLyoqXG4gICAqIFBVVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgYW55YCDDp8KxwrvDpcKewotcbiAgICovXG4gIHB1dChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogUFVUIMOowq/Ct8OmwrHCglxuICAgKi9cbiAgcHV0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgJ1BVVCcsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLyoqXG4gICAqIGByZXF1ZXN0YCDDqMKvwrfDpsKxwoJcbiAgICpcbiAgICogQHBhcmFtIG1ldGhvZCDDqMKvwrfDpsKxwoLDpsKWwrnDpsKzwpXDp8KxwrvDpcKewotcbiAgICogQHBhcmFtIHVybCBVUkzDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIG9wdGlvbnMgw6XCj8KCw6bClcKwXG4gICAqL1xuICByZXF1ZXN0PFI+KFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBib2R5PzogYW55O1xuICAgICAgaGVhZGVycz86XG4gICAgICAgIHwgSHR0cEhlYWRlcnNcbiAgICAgICAgfCB7XG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgICAgICB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHBhcmFtcz86XG4gICAgICAgIHwgSHR0cFBhcmFtc1xuICAgICAgICB8IHtcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICAgICAgfTtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8Uj47XG4gIC8qKlxuICAgKiBgcmVxdWVzdGAgw6jCr8K3w6bCscKCXG4gICAqXG4gICAqIEBwYXJhbSBtZXRob2Qgw6jCr8K3w6bCscKCw6bClsK5w6bCs8KVw6fCscK7w6XCnsKLXG4gICAqIEBwYXJhbSB1cmwgVVJMw6XCnMKww6XCncKAXG4gICAqIEBwYXJhbSBvcHRpb25zIMOlwo/CgsOmwpXCsFxuICAgKi9cbiAgcmVxdWVzdChcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgYm9keT86IGFueTtcbiAgICAgIGhlYWRlcnM/OlxuICAgICAgICB8IEh0dHBIZWFkZXJzXG4gICAgICAgIHwge1xuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICAgICAgfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICBwYXJhbXM/OlxuICAgICAgICB8IEh0dHBQYXJhbXNcbiAgICAgICAgfCB7XG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgICAgIH07XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRoaXMuYmVnaW4oKTtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMucGFyYW1zKSBvcHRpb25zLnBhcmFtcyA9IHRoaXMucGFyc2VQYXJhbXMob3B0aW9ucy5wYXJhbXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpLnBpcGUoXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHJlcyk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgZGlzdGFuY2VJbldvcmRzVG9Ob3cgZnJvbSAnZGF0ZS1mbnMvZGlzdGFuY2VfaW5fd29yZHNfdG9fbm93JztcblxuQFBpcGUoeyBuYW1lOiAnX2RhdGUnIH0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKFxuICAgIHZhbHVlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyLFxuICAgIGZvcm1hdFN0cmluZzogc3RyaW5nID0gJ1lZWVktTU0tREQgSEg6bW0nLFxuICApOiBzdHJpbmcge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKGZvcm1hdFN0cmluZyA9PT0gJ2ZuJykge1xuICAgICAgICByZXR1cm4gZGlzdGFuY2VJbldvcmRzVG9Ob3codmFsdWUsIHtcbiAgICAgICAgICBsb2NhbGU6ICh3aW5kb3cgYXMgYW55KS5fX2xvY2FsZV9fLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICFpc05hTigrdmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gK3ZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdCh2YWx1ZSwgZm9ybWF0U3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VycmVuY3lQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3Mvc2VydmljZS1waXBlIyVFOCVCNCVBNyVFNSVCOCU4MS1fY3VycmVudHlcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1waXBlLXRyYW5zZm9ybS1pbnRlcmZhY2VcbkBQaXBlKHsgbmFtZTogJ19jdXJyZW5jeScgfSlcbmV4cG9ydCBjbGFzcyBDTkN1cnJlbmN5UGlwZSBleHRlbmRzIEN1cnJlbmN5UGlwZSB7XG4gIHRyYW5zZm9ybShcbiAgICB2YWx1ZTogYW55LFxuICAgIGN1cnJlbmN5Q29kZTogc3RyaW5nID0gJ8Ovwr/CpScsXG4gICAgZGlzcGxheTogJ2NvZGUnIHwgJ3N5bWJvbCcgfCAnc3ltYm9sLW5hcnJvdycgfCBib29sZWFuID0gJ2NvZGUnLFxuICAgIGRpZ2l0cz86IHN0cmluZyxcbiAgKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgY3VycmVuY3lDb2RlLCA8YW55PmRpc3BsYXksIGRpZ2l0cyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvY29tbW9uIyVFNSU4RiVBRiVFOCVCRiVBRCVFNCVCQiVBMy1rZXlzXG4gKi9cbkBQaXBlKHsgbmFtZTogJ2tleXMnIH0pXG5leHBvcnQgY2xhc3MgS2V5c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGtleUlzTnVtYmVyOiBib29sZWFuID0gZmFsc2UpOiBhbnlbXSB7XG4gICAgY29uc3QgcmV0ID0gW107XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgIHJldC5wdXNoKHsga2V5OiBrZXlJc051bWJlciA/ICtrZXkgOiBrZXksIHZhbHVlOiB2YWx1ZVtrZXldIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHNlZSBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL3NlcnZpY2UtcGlwZSMlRTUlQkUlQkQlRTclQUIlQTAteW5cbiAqL1xuQFBpcGUoeyBuYW1lOiAneW4nIH0pXG5leHBvcnQgY2xhc3MgWU5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogYm9vbGVhbiwgeWVzOiBzdHJpbmcsIG5vOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXN1Y2Nlc3NcIj4nICsgKHllcyB8fCAnw6bCmMKvJykgKyAnPC9zcGFuPic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1lcnJvclwiPicgKyAobm8gfHwgJ8OlwpDCpicpICsgJzwvc3Bhbj4nO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlIH0gZnJvbSAnLi9pMThuJztcblxuQFBpcGUoeyBuYW1lOiAnaTE4bicgfSlcbmV4cG9ydCBjbGFzcyBJMThuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIHByaXZhdGUgaTE4bjogQWxhaW5JMThOU2VydmljZSkge31cblxuICB0cmFuc2Zvcm0oa2V5OiBzdHJpbmcsIGludGVycG9sYXRlUGFyYW1zPzogT2JqZWN0LCBpc1NhZmU/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pMThuLmZhbnlpKGtleSwgaW50ZXJwb2xhdGVQYXJhbXMsIGlzU2FmZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJy4vd2luX3Rva2Vucyc7XG5cbmltcG9ydCB7IERlbG9uTG9jYWxlTW9kdWxlIH0gZnJvbSAnLi9sb2NhbGUvbG9jYWxlLm1vZHVsZSc7XG5cbi8vICNyZWdpb24gaW1wb3J0XG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlRmFrZSB9IGZyb20gJy4vc2VydmljZXMvaTE4bi9pMThuJztcblxuaW1wb3J0IHsgTW9kYWxIZWxwZXIgfSBmcm9tICcuL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlcic7XG5pbXBvcnQgeyBEcmF3ZXJIZWxwZXIgfSBmcm9tICcuL3NlcnZpY2VzL2RyYXdlci9kcmF3ZXIuaGVscGVyJztcbmNvbnN0IEhFTFBFUlMgPSBbTW9kYWxIZWxwZXIsIERyYXdlckhlbHBlcl07XG5cbi8vIGNvbXBvbmVudHNcbmNvbnN0IENPTVBPTkVOVFMgPSBbXTtcblxuLy8gcGlwZXNcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy9kYXRlL2RhdGUucGlwZSc7XG5pbXBvcnQgeyBDTkN1cnJlbmN5UGlwZSB9IGZyb20gJy4vcGlwZXMvY3VycmVuY3kvY24tY3VycmVuY3kucGlwZSc7XG5pbXBvcnQgeyBLZXlzUGlwZSB9IGZyb20gJy4vcGlwZXMva2V5cy9rZXlzLnBpcGUnO1xuaW1wb3J0IHsgWU5QaXBlIH0gZnJvbSAnLi9waXBlcy95bi95bi5waXBlJztcbmltcG9ydCB7IEkxOG5QaXBlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pMThuL2kxOG4ucGlwZSc7XG5jb25zdCBQSVBFUyA9IFtEYXRlUGlwZSwgQ05DdXJyZW5jeVBpcGUsIEtleXNQaXBlLCBZTlBpcGUsIEkxOG5QaXBlXTtcblxuLy8gI2VuZHJlZ2lvblxuXG4vLyAjcmVnaW9uIGFsbCBkZWxvbiB1c2VkIGljb25zXG5cbmltcG9ydCB7IE56SWNvblNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7XG4gIEJlbGxPdXRsaW5lLFxuICBGaWx0ZXJGaWxsLFxuICBDYXJldFVwT3V0bGluZSxcbiAgQ2FyZXREb3duT3V0bGluZSxcbiAgRGVsZXRlT3V0bGluZSxcbiAgUGx1c091dGxpbmUsXG4gIEluYm94T3V0bGluZSxcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhci9pY29ucyc7XG5jb25zdCBJQ09OUyA9IFtcbiAgQmVsbE91dGxpbmUsXG4gIEZpbHRlckZpbGwsXG4gIENhcmV0VXBPdXRsaW5lLFxuICBDYXJldERvd25PdXRsaW5lLFxuICBEZWxldGVPdXRsaW5lLFxuICBQbHVzT3V0bGluZSxcbiAgSW5ib3hPdXRsaW5lLFxuXTtcblxuLy8gI2VuZHJlZ2lvblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIE92ZXJsYXlNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCAuLi5QSVBFU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTLCAuLi5QSVBFUywgRGVsb25Mb2NhbGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBBbGFpblRoZW1lTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoaWNvblNydjogTnpJY29uU2VydmljZSkge1xuICAgIGljb25TcnYuYWRkSWNvbiguLi5JQ09OUyk7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFsYWluVGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBXSU5ET1csIHVzZVZhbHVlOiB3aW5kb3cgfSxcbiAgICAgICAgeyBwcm92aWRlOiBBTEFJTl9JMThOX1RPS0VOLCB1c2VDbGFzczogQWxhaW5JMThOU2VydmljZUZha2UgfSxcbiAgICAgICAgLi4uSEVMUEVSUyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFsYWluVGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFsuLi5IRUxQRVJTXSxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBWZXJzaW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gbmV3IFZlcnNpb24oJzAuMC4wLVBMQUNFSE9MREVSJyk7XG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJCZWhhdmlvclN1YmplY3QiLCJmaWx0ZXIiLCJJbmplY3RhYmxlIiwic2hhcmUiLCJ0c2xpYl8xLl9fdmFsdWVzIiwiT3B0aW9uYWwiLCJJbmplY3QiLCJBQ0xTZXJ2aWNlIiwiRE9DVU1FTlQiLCJTdWJqZWN0IiwiQWN0aXZhdGVkUm91dGUiLCJSb3V0ZXIiLCJJbmplY3RvciIsIlRpdGxlIiwiU2tpcFNlbGYiLCJOZ01vZHVsZSIsIk9ic2VydmFibGUiLCJOek1vZGFsU2VydmljZSIsIk56RHJhd2VyU2VydmljZSIsIkh0dHBQYXJhbXMiLCJ0YXAiLCJjYXRjaEVycm9yIiwidGhyb3dFcnJvciIsIkh0dHBDbGllbnQiLCJQaXBlIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJDdXJyZW5jeVBpcGUiLCJCZWxsT3V0bGluZSIsIkZpbHRlckZpbGwiLCJDYXJldFVwT3V0bGluZSIsIkNhcmV0RG93bk91dGxpbmUiLCJEZWxldGVPdXRsaW5lIiwiUGx1c091dGxpbmUiLCJJbmJveE91dGxpbmUiLCJDb21tb25Nb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJPdmVybGF5TW9kdWxlIiwiTnpJY29uU2VydmljZSIsIlZlcnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLFFBQWEsTUFBTSxHQUFHLElBQUlBLGlCQUFjLENBQUMsUUFBUSxDQUFDOzs7Ozs7Ozs7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