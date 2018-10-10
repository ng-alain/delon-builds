/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.4-8231e65
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@delon/acl'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/common'), require('@angular/router'), require('@angular/platform-browser'), require('ng-zorro-antd'), require('@angular/common/http'), require('date-fns/format'), require('date-fns/distance_in_words_to_now')) :
    typeof define === 'function' && define.amd ? define('@delon/theme', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@delon/acl', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/common', '@angular/router', '@angular/platform-browser', 'ng-zorro-antd', '@angular/common/http', 'date-fns/format', 'date-fns/distance_in_words_to_now'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.theme = {}),global.ng.core,global.rxjs,global.rxjs.operators,global.delon.acl,global.ng.cdk.overlay,global.ng.cdk.portal,global.ng.common,global.ng.router,global.ng.platformBrowser,global.ngZorro.antd,global.ng.common.http,global.format,global.distanceInWordsToNow));
}(this, (function (exports,i0,rxjs,operators,i2,i1,portal,i2$1,router,i1$1,i1$2,i1$3,format,distanceInWordsToNow) { 'use strict';

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
    var ContextMenuService = /** @class */ (function () {
        function ContextMenuService(overlay) {
            this.overlay = overlay;
        }
        /**
         * @param {?} event
         * @param {?=} options
         * @return {?}
         */
        ContextMenuService.prototype.create = /**
         * @param {?} event
         * @param {?=} options
         * @return {?}
         */
            function (event, options) {
                var _this = this;
                /** @type {?} */
                var fakeElement = new i0.ElementRef({
                    getBoundingClientRect: function () {
                        return ({
                            bottom: event.clientY,
                            height: 0,
                            left: event.clientX,
                            right: event.clientX,
                            top: event.clientY,
                            width: 0,
                        });
                    },
                });
                /** @type {?} */
                var positions = [
                    new i1.ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
                    new i1.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
                ];
                /** @type {?} */
                var positionStrategy = this.overlay
                    .position()
                    .flexibleConnectedTo(fakeElement)
                    .withPositions(positions);
                this.ref = this.overlay.create(Object.assign({
                    positionStrategy: positionStrategy,
                    hasBackdrop: true,
                    scrollStrategy: this.overlay.scrollStrategies.close(),
                }, options));
                if (this.type instanceof i0.TemplateRef) {
                    this.ref.attach(new portal.TemplatePortal(this.type, this.containerRef));
                }
                else {
                    this.ref.attach(new portal.ComponentPortal(this.type, this.containerRef));
                }
                this.ref.backdropClick().subscribe(function () { return _this.close(); });
            };
        /**
         * @param {?} event
         * @param {?} ref
         * @param {?} containerRef
         * @param {?=} options
         * @return {?}
         */
        ContextMenuService.prototype.open = /**
         * @param {?} event
         * @param {?} ref
         * @param {?} containerRef
         * @param {?=} options
         * @return {?}
         */
            function (event, ref, containerRef, options) {
                this.close();
                this.type = ref;
                this.containerRef = containerRef;
                this.create(event, options);
                event.preventDefault();
                event.stopPropagation();
                return false;
            };
        /**
         * @return {?}
         */
        ContextMenuService.prototype.close = /**
         * @return {?}
         */
            function () {
                if (!this.ref)
                    return;
                this.ref.detach();
                this.ref.dispose();
                this.ref = null;
            };
        ContextMenuService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        ContextMenuService.ctorParameters = function () {
            return [
                { type: i1.Overlay }
            ];
        };
        /** @nocollapse */ ContextMenuService.ngInjectableDef = i0.defineInjectable({ factory: function ContextMenuService_Factory() { return new ContextMenuService(i0.inject(i1.Overlay)); }, token: ContextMenuService, providedIn: "root" });
        return ContextMenuService;
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
                { type: i1$1.Title },
                { type: MenuService },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [ALAIN_I18N_TOKEN,] }] },
                { type: undefined, decorators: [{ type: i0.Inject, args: [i2$1.DOCUMENT,] }] }
            ];
        };
        /** @nocollapse */ TitleService.ngInjectableDef = i0.defineInjectable({ factory: function TitleService_Factory() { return new TitleService(i0.inject(i0.INJECTOR), i0.inject(i1$1.Title), i0.inject(MenuService), i0.inject(ALAIN_I18N_TOKEN, 8), i0.inject(i2$1.DOCUMENT)); }, token: TitleService, providedIn: "root" });
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
        sf: {
            submit: '提交',
            reset: '重置',
            search: '搜索',
            edit: '保存',
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
        sf: {
            submit: 'Submit',
            reset: 'Reset',
            search: 'Search',
            edit: 'Save',
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
        sf: {
            submit: '提交',
            reset: '重置',
            search: '搜索',
            edit: '保存',
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
                { type: i1$2.NzModalService }
            ];
        };
        /** @nocollapse */ ModalHelper.ngInjectableDef = i0.defineInjectable({ factory: function ModalHelper_Factory() { return new ModalHelper(i0.inject(i1$2.NzModalService)); }, token: ModalHelper, providedIn: "root" });
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
                { type: i1$2.NzDrawerService }
            ];
        };
        /** @nocollapse */ DrawerHelper.ngInjectableDef = i0.defineInjectable({ factory: function DrawerHelper_Factory() { return new DrawerHelper(i0.inject(i1$2.NzDrawerService)); }, token: DrawerHelper, providedIn: "root" });
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
                return new i1$3.HttpParams({ fromObject: newParams });
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
        // endregion
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
                { type: i1$3.HttpClient },
                { type: AlainThemeConfig }
            ];
        };
        /** @nocollapse */ _HttpClient.ngInjectableDef = i0.defineInjectable({ factory: function _HttpClient_Factory() { return new _HttpClient(i0.inject(i1$3.HttpClient), i0.inject(AlainThemeConfig)); }, token: _HttpClient, providedIn: "root" });
        return _HttpClient;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @see https://ng-alain.com/docs/service-pipe#%E6%97%A5%E6%9C%9F-_date
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
    /** @type {?} */
    var HELPERS = [ModalHelper, DrawerHelper];
    /** @type {?} */
    var COMPONENTS = [];
    /** @type {?} */
    var PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe];
    var AlainThemeModule = /** @class */ (function () {
        function AlainThemeModule() {
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
                        imports: [i2$1.CommonModule, router.RouterModule, i1.OverlayModule],
                        declarations: __spread(COMPONENTS, PIPES),
                        exports: __spread(COMPONENTS, PIPES, [DelonLocaleModule]),
                    },] }
        ];
        return AlainThemeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var VERSION = new i0.Version('2.0.0-beta.4-8231e65');

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
    exports.ContextMenuService = ContextMenuService;
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

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3dpbl90b2tlbnMudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvcHJlbG9hZGVyL3ByZWxvYWRlci50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvaTE4bi9pMThuLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL21lbnUvbWVudS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL2NvbnRleHQtbWVudS9jb250ZXh0LW1lbnUuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9zY3JvbGwvc2Nyb2xsLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy90aGVtZS5jb25maWcudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvcmVzcG9uc2l2ZS9yZXNwb25zaXZlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL3RpdGxlL3RpdGxlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xvY2FsZS50b2tlbnMudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xhbmd1YWdlcy96aC1DTi50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9sb2NhbGUvbG9jYWxlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xvY2FsZS5tb2R1bGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xhbmd1YWdlcy9lbi1VUy50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9sb2NhbGUvbGFuZ3VhZ2VzL3poLVRXLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlci50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlci50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9odHRwL2h0dHAuY2xpZW50LnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3BpcGVzL2N1cnJlbmN5L2NuLWN1cnJlbmN5LnBpcGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvcGlwZXMva2V5cy9rZXlzLnBpcGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvcGlwZXMveW4veW4ucGlwZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy90aGVtZS5tb2R1bGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvdmVyc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgV0lORE9XID0gbmV3IEluamVjdGlvblRva2VuKCdXaW5kb3cnKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkZXJGaW5pc2hlZCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcicpO1xuXG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgLy8gcHJlbG9hZGVyIHZhbHVlIG51bGwgd2hlbiBydW5uaW5nIC0taG1yXG4gICAgaWYgKCFwcmVsb2FkZXIpIHJldHVybjtcbiAgICBwcmVsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgcHJlbG9hZGVyLmNsYXNzTmFtZSA9ICdwcmVsb2FkZXItaGlkZGVuJztcbiAgICB9KTtcblxuICAgIHByZWxvYWRlci5jbGFzc05hbWUgKz0gJyBwcmVsb2FkZXItaGlkZGVuLWFkZCBwcmVsb2FkZXItaGlkZGVuLWFkZC1hY3RpdmUnO1xuICB9XG5cbiAgKDxhbnk+d2luZG93KS5hcHBCb290c3RyYXAgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZW1vdmUoKTtcbiAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5JMThOU2VydmljZSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICB1c2UobGFuZzogc3RyaW5nKTogdm9pZDtcblxuICBnZXRMYW5ncygpOiBhbnlbXTtcblxuICBmYW55aShrZXk6IHN0cmluZyk6IGFueTtcblxuICByZWFkb25seSBjaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGNvbnN0IEFMQUlOX0kxOE5fVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWxhaW5JMThOU2VydmljZT4oXG4gICdhbGFpblRyYW5zbGF0b3JUb2tlbicsXG4pO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFsYWluSTE4TlNlcnZpY2VGYWtlIGltcGxlbWVudHMgQWxhaW5JMThOU2VydmljZSB7XG4gIHByaXZhdGUgY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5hc09ic2VydmFibGUoKS5waXBlKGZpbHRlcih3ID0+IHcgIT0gbnVsbCkpO1xuICB9XG5cbiAgdXNlKGxhbmc6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGxhbmcpO1xuICB9XG5cbiAgZ2V0TGFuZ3MoKTogYW55W10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGZhbnlpKGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWNsJztcblxuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiwgQWxhaW5JMThOU2VydmljZSB9IGZyb20gJy4uL2kxOG4vaTE4bic7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE1lbnVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfY2hhbmdlJDogQmVoYXZpb3JTdWJqZWN0PE1lbnVbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE1lbnVbXT4oW10pO1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBkYXRhOiBNZW51W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcbiAgICBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBhY2xTZXJ2aWNlOiBBQ0xTZXJ2aWNlLFxuICApIHtcbiAgICBpZiAodGhpcy5pMThuU3J2KVxuICAgICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4blNydi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVzdW1lKCkpO1xuICB9XG5cbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPE1lbnVbXT4ge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UkLnBpcGUoc2hhcmUoKSk7XG4gIH1cblxuICB2aXNpdChjYWxsYmFjazogKGl0ZW06IE1lbnUsIHBhcmVudE1lbnVtOiBNZW51LCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCkge1xuICAgIGNvbnN0IGluRm4gPSAobGlzdDogTWVudVtdLCBwYXJlbnRNZW51OiBNZW51LCBkZXB0aDogbnVtYmVyKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgICBjYWxsYmFjayhpdGVtLCBwYXJlbnRNZW51LCBkZXB0aCk7XG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGluRm4oaXRlbS5jaGlsZHJlbiwgaXRlbSwgZGVwdGggKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW5Gbih0aGlzLmRhdGEsIG51bGwsIDApO1xuICB9XG5cbiAgYWRkKGl0ZW1zOiBNZW51W10pIHtcbiAgICB0aGlzLmRhdGEgPSBpdGVtcztcbiAgICB0aGlzLnJlc3VtZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOpwofCjcOnwr3CrsOowo/CnMOlwo3ClcOvwrzCjMOlwo/Cr8OowoPCvUkxOE7Do8KAwoHDp8KUwqjDpsKIwrfDpsKdwoPDqcKZwpDDpcKPwpjDpcKKwqjDpsKXwrbDqcKcwoDDqMKmwoHDqMKwwoPDp8KUwqjDpcKIwrfDpsKWwrBcbiAgICovXG4gIHJlc3VtZShjYWxsYmFjaz86IChpdGVtOiBNZW51LCBwYXJlbnRNZW51bTogTWVudSwgZGVwdGg/OiBudW1iZXIpID0+IHZvaWQpIHtcbiAgICBsZXQgaSA9IDE7XG4gICAgY29uc3Qgc2hvcnRjdXRzOiBNZW51W10gPSBbXTtcbiAgICB0aGlzLnZpc2l0KChpdGVtLCBwYXJlbnQsIGRlcHRoKSA9PiB7XG4gICAgICBpdGVtLl9faWQgPSBpKys7XG4gICAgICBpdGVtLl9fcGFyZW50ID0gcGFyZW50O1xuICAgICAgaXRlbS5fZGVwdGggPSBkZXB0aDtcblxuICAgICAgaWYgKCFpdGVtLmxpbmspIGl0ZW0ubGluayA9ICcnO1xuICAgICAgaWYgKHR5cGVvZiBpdGVtLmxpbmtFeGFjdCA9PT0gJ3VuZGVmaW5lZCcpIGl0ZW0ubGlua0V4YWN0ID0gZmFsc2U7XG4gICAgICBpZiAoIWl0ZW0uZXh0ZXJuYWxMaW5rKSBpdGVtLmV4dGVybmFsTGluayA9ICcnO1xuXG4gICAgICAvLyBiYWRnZVxuICAgICAgaWYgKGl0ZW0uYmFkZ2UpIHtcbiAgICAgICAgaWYgKGl0ZW0uYmFkZ2VEb3QgIT09IHRydWUpIHtcbiAgICAgICAgICBpdGVtLmJhZGdlRG90ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpdGVtLmJhZGdlU3RhdHVzKSB7XG4gICAgICAgICAgaXRlbS5iYWRnZVN0YXR1cyA9ICdlcnJvcic7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaXRlbS5fdHlwZSA9IGl0ZW0uZXh0ZXJuYWxMaW5rID8gMiA6IDE7XG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaXRlbS5fdHlwZSA9IDM7XG4gICAgICB9XG5cbiAgICAgIC8vIHNob3J0Y3V0XG4gICAgICBpZiAocGFyZW50ICYmIGl0ZW0uc2hvcnRjdXQgPT09IHRydWUgJiYgcGFyZW50LnNob3J0Y3V0Um9vdCAhPT0gdHJ1ZSlcbiAgICAgICAgc2hvcnRjdXRzLnB1c2goaXRlbSk7XG5cbiAgICAgIGl0ZW0udGV4dCA9XG4gICAgICAgIGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYgPyB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKSA6IGl0ZW0udGV4dDtcblxuICAgICAgLy8gZ3JvdXBcbiAgICAgIGl0ZW0uZ3JvdXAgPSB0eXBlb2YgaXRlbS5ncm91cCAhPT0gJ2Jvb2xlYW4nID8gdHJ1ZSA6IGl0ZW0uZ3JvdXA7XG5cbiAgICAgIC8vIGhpZGRlblxuICAgICAgaXRlbS5faGlkZGVuID0gdHlwZW9mIGl0ZW0uaGlkZSA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IGl0ZW0uaGlkZTtcblxuICAgICAgLy8gYWNsXG4gICAgICBpZiAoaXRlbS5hY2wgJiYgdGhpcy5hY2xTZXJ2aWNlKSB7XG4gICAgICAgIGl0ZW0uX2hpZGRlbiA9ICF0aGlzLmFjbFNlcnZpY2UuY2FuKGl0ZW0uYWNsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhpdGVtLCBwYXJlbnQsIGRlcHRoKTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZFNob3J0Y3V0KHNob3J0Y3V0cyk7XG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogw6XCisKgw6jCvcK9w6XCv8Krw6bCjcK3w6jCj8Kcw6XCjcKVw6/CvMKMw6XCisKgw6jCvcK9w6TCvcKNw6fCvcKuw6jCp8KEw6XCiMKZw6XCpsKCw6TCuMKLw6/CvMKaXG4gICAqIDHDo8KAwoHDp8K7wp/DpMK4woDDpcKcwqjDpMK4wovDpsKgwocww6fCmsKEw6jCisKCw6fCgsK5w6TCuMKLw6/CvMKIw6XCjcKzw6PCgMKQw6TCuMK7w6XCr8K8w6jCiMKqw6PCgMKRw6jCisKCw6fCgsK5w6TCuMKLw6bClsK5w6/CvMKJXG4gICAqICAgICAgMcOjwoDCgcOowovCpSBjaGlsZHJlbiDDpcKtwpjDpcKcwqggw6PCgMKQc2hvcnRjdXRSb290OiB0cnVlw6PCgMKRw6XCiMKZw6bCnMKAw6TCvMKYw6XChcKIw6PCgMKQw6bCjsKow6jCjcKQw6PCgMKRw6jCv8KZw6fCp8KNw6bClsK5w6XCvMKPXG4gICAqICAgICAgMsOjwoDCgcOlwpDCpsOlwojCmcOmwp/CpcOmwonCvsOlwrjCpsOmwpzCicOjwoDCkGRhc2hib2FyZMOjwoDCkcOlwq3Cl8OmwqDCt8OpwpPCvsOmwo7CpcOvwrzCjMOowovCpcOlwq3CmMOlwpzCqMOlwojCmcOlwpzCqMOmwq3CpMOowo/CnMOlwo3ClcOnwprChMOkwrjCi8OmwpbCucOlwojCm8OlwrvCusOlwr/Cq8Omwo3Ct8OlwoXCpcOlwo/Co1xuICAgKiAgICAgIDPDo8KAwoHDpcKQwqbDpcKIwpnDpsKUwr7DpcKcwqgww6jCisKCw6fCgsK5w6TCvcKNw6fCvcKuXG4gICAqL1xuICBwcml2YXRlIGxvYWRTaG9ydGN1dChzaG9ydGN1dHM6IE1lbnVbXSkge1xuICAgIGlmIChzaG9ydGN1dHMubGVuZ3RoID09PSAwIHx8IHRoaXMuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBscyA9IHRoaXMuZGF0YVswXS5jaGlsZHJlbjtcbiAgICBsZXQgcG9zID0gbHMuZmluZEluZGV4KHcgPT4gdy5zaG9ydGN1dFJvb3QgPT09IHRydWUpO1xuICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICBwb3MgPSBscy5maW5kSW5kZXgodyA9PiB3LmxpbmsuaW5jbHVkZXMoJ2Rhc2hib2FyZCcpKTtcbiAgICAgIHBvcyA9IChwb3MgIT09IC0xID8gcG9zIDogLTEpICsgMTtcbiAgICAgIGNvbnN0IHNob3J0Y3V0TWVudSA9IDxNZW51PntcbiAgICAgICAgdGV4dDogJ8Olwr/Cq8Omwo3Ct8Oowo/CnMOlwo3ClScsXG4gICAgICAgIGkxOG46ICdzaG9ydGN1dCcsXG4gICAgICAgIGljb246ICdpY29uLXJvY2tldCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIH07XG4gICAgICB0aGlzLmRhdGFbMF0uY2hpbGRyZW4uc3BsaWNlKHBvcywgMCwgc2hvcnRjdXRNZW51KTtcbiAgICB9XG4gICAgbGV0IF9kYXRhID0gdGhpcy5kYXRhWzBdLmNoaWxkcmVuW3Bvc107XG4gICAgaWYgKF9kYXRhLmkxOG4gJiYgdGhpcy5pMThuU3J2KSBfZGF0YS50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKF9kYXRhLmkxOG4pO1xuICAgIF9kYXRhID0gT2JqZWN0LmFzc2lnbihfZGF0YSwge1xuICAgICAgc2hvcnRjdXRSb290OiB0cnVlLFxuICAgICAgX3R5cGU6IDMsXG4gICAgICBfX2lkOiAtMSxcbiAgICAgIF9kZXB0aDogMSxcbiAgICB9KTtcbiAgICBfZGF0YS5jaGlsZHJlbiA9IHNob3J0Y3V0cy5tYXAoaSA9PiB7XG4gICAgICBpLl9kZXB0aCA9IDI7XG4gICAgICByZXR1cm4gaTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBtZW51cygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwrjChcOnwqnCusOowo/CnMOlwo3ClVxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCoMK5w6bCjcKuVVJMw6jCrsK+w6fCvcKuw6jCj8Kcw6XCjcKVIGBfb3BlbmAgw6XCscKew6bCgMKnXG4gICAqIEBwYXJhbSB1cmwgVVJMw6XCnMKww6XCncKAXG4gICAqL1xuICBvcGVuZWRCeVVybCh1cmw6IHN0cmluZykge1xuICAgIGlmICghdXJsKSByZXR1cm47XG5cbiAgICBsZXQgZmluZEl0ZW06IE1lbnUgPSBudWxsO1xuICAgIHRoaXMudmlzaXQoaXRlbSA9PiB7XG4gICAgICBpdGVtLl9vcGVuID0gZmFsc2U7XG4gICAgICBpZiAoIWl0ZW0ubGluaykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIWZpbmRJdGVtICYmIHVybC5zdGFydHNXaXRoKGl0ZW0ubGluaykpIHtcbiAgICAgICAgZmluZEl0ZW0gPSBpdGVtO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghZmluZEl0ZW0pIHJldHVybjtcblxuICAgIGRvIHtcbiAgICAgIGZpbmRJdGVtLl9vcGVuID0gdHJ1ZTtcbiAgICAgIGZpbmRJdGVtID0gZmluZEl0ZW0uX19wYXJlbnQ7XG4gICAgfSB3aGlsZSAoZmluZEl0ZW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwqDCucOmwo3CrnVybMOowo7Ct8Olwo/ClsOowo/CnMOlwo3ClcOlwojCl8OowqHCqFxuICAgKiBAcGFyYW0gdXJsXG4gICAqL1xuICBnZXRQYXRoQnlVcmwodXJsOiBzdHJpbmcpOiBNZW51W10ge1xuICAgIGxldCBpdGVtOiBNZW51ID0gbnVsbDtcbiAgICB0aGlzLnZpc2l0KChpLCBwYXJlbnQsIGRlcHRoKSA9PiB7XG4gICAgICBpZiAoaS5saW5rID09PSB1cmwpIHtcbiAgICAgICAgaXRlbSA9IGk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXQ6IE1lbnVbXSA9IFtdO1xuICAgIGlmICghaXRlbSkgcmV0dXJuIHJldDtcblxuICAgIGRvIHtcbiAgICAgIHJldC5zcGxpY2UoMCwgMCwgaXRlbSk7XG4gICAgICBpdGVtID0gaXRlbS5fX3BhcmVudDtcbiAgICB9IHdoaWxlIChpdGVtKTtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMuaTE4biQpIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVGVtcGxhdGVSZWYsXG4gIEVsZW1lbnRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheVJlZixcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbiAgT3ZlcmxheUNvbmZpZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgVGVtcGxhdGVQb3J0YWwsXG4gIENvbXBvbmVudFBvcnRhbCxcbiAgQ29tcG9uZW50VHlwZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbmV4cG9ydCB0eXBlIENvbnRleHRNZW51VHlwZSA9IFRlbXBsYXRlUmVmPHt9PiB8IENvbXBvbmVudFR5cGU8e30+O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWY6IE92ZXJsYXlSZWY7XG4gIHByaXZhdGUgdHlwZTogQ29udGV4dE1lbnVUeXBlO1xuICBwcml2YXRlIGNvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHt9XG5cbiAgcHJpdmF0ZSBjcmVhdGUoZXZlbnQ6IE1vdXNlRXZlbnQsIG9wdGlvbnM/OiBPdmVybGF5Q29uZmlnKSB7XG4gICAgY29uc3QgZmFrZUVsZW1lbnQgPSBuZXcgRWxlbWVudFJlZih7XG4gICAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3Q6ICgpOiBDbGllbnRSZWN0ID0+ICh7XG4gICAgICAgIGJvdHRvbTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBsZWZ0OiBldmVudC5jbGllbnRYLFxuICAgICAgICByaWdodDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgdG9wOiBldmVudC5jbGllbnRZLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sXG4gICAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9LFxuICAgICAgKSxcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sXG4gICAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9LFxuICAgICAgKSxcbiAgICBdO1xuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcbiAgICAgIC5wb3NpdGlvbigpXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyhmYWtlRWxlbWVudClcbiAgICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucyk7XG4gICAgdGhpcy5yZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXG4gICAgICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXG4gICAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCksXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApLFxuICAgICk7XG4gICAgaWYgKHRoaXMudHlwZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnJlZi5hdHRhY2gobmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMudHlwZSwgdGhpcy5jb250YWluZXJSZWYpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWYuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwodGhpcy50eXBlLCB0aGlzLmNvbnRhaW5lclJlZikpO1xuICAgIH1cbiAgICB0aGlzLnJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XG4gIH1cblxuICBvcGVuKFxuICAgIGV2ZW50OiBNb3VzZUV2ZW50LFxuICAgIHJlZjogQ29udGV4dE1lbnVUeXBlLFxuICAgIGNvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBvcHRpb25zPzogT3ZlcmxheUNvbmZpZyxcbiAgKTogZmFsc2Uge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLnR5cGUgPSByZWY7XG4gICAgdGhpcy5jb250YWluZXJSZWYgPSBjb250YWluZXJSZWY7XG4gICAgdGhpcy5jcmVhdGUoZXZlbnQsIG9wdGlvbnMpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgaWYgKCF0aGlzLnJlZikgcmV0dXJuO1xuICAgIHRoaXMucmVmLmRldGFjaCgpO1xuICAgIHRoaXMucmVmLmRpc3Bvc2UoKTtcbiAgICB0aGlzLnJlZiA9IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnLi4vLi4vd2luX3Rva2Vucyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbjogYW55LFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge31cblxuICAvKipcbiAgICogw6jCrsK+w6fCvcKuw6bCu8Kaw6XCisKow6bCncKhw6jCh8Kzw6bCjMKHw6XCrsKaw6XChcKDw6fCtMKgXG4gICAqIEBwYXJhbSBlbGVtZW50IMOmwozCh8Olwq7CmsOlwoXCg8OnwrTCoMOvwrzCjMOpwrvCmMOowq7CpCBgZG9jdW1lbnQuYm9keWBcbiAgICogQHBhcmFtIHRvcE9mZnNldCDDpcKBwo/Dp8KnwrvDpcKAwrzDr8K8wozDqcK7wpjDqMKuwqQgYDBgXG4gICAqL1xuICBzY3JvbGxUb0VsZW1lbnQoZWxlbWVudD86IEVsZW1lbnQsIHRvcE9mZnNldCA9IDApIHtcbiAgICBpZiAoIWVsZW1lbnQpIGVsZW1lbnQgPSB0aGlzLmRvYy5ib2R5O1xuXG4gICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xuXG4gICAgY29uc3QgdyA9IHRoaXMud2luO1xuICAgIGlmICh3ICYmIHcuc2Nyb2xsQnkpIHtcbiAgICAgIHcuc2Nyb2xsQnkoMCwgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0b3BPZmZzZXQpO1xuXG4gICAgICBpZiAody5wYWdlWU9mZnNldCA8IDIwKSB7XG4gICAgICAgIHcuc2Nyb2xsQnkoMCwgLXcucGFnZVlPZmZzZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDDpsK7wprDpcKKwqjDqMKHwrPDqcKhwrbDqcKDwqhcbiAgICogQHBhcmFtIHRvcE9mZnNldCDDpcKBwo/Dp8KnwrvDpcKAwrzDr8K8wozDqcK7wpjDqMKuwqQgYDBgXG4gICAqL1xuICBzY3JvbGxUb1RvcCh0b3BPZmZzZXQgPSAwKSB7XG4gICAgdGhpcy5zY3JvbGxUb0VsZW1lbnQodGhpcy5kb2MuYm9keSwgdG9wT2Zmc2V0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXBwLCBMYXlvdXQsIFVzZXIsIFNldHRpbmdzTm90aWZ5IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5jb25zdCBMQVlPVVRfS0VZID0gJ2xheW91dCc7XG5jb25zdCBVU0VSX0tFWSA9ICd1c2VyJztcbmNvbnN0IEFQUF9LRVkgPSAnYXBwJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2Uge1xuICBwcml2YXRlIG5vdGlmeSQgPSBuZXcgU3ViamVjdDxTZXR0aW5nc05vdGlmeT4oKTtcbiAgcHJpdmF0ZSBfYXBwOiBBcHAgPSBudWxsO1xuICBwcml2YXRlIF91c2VyOiBVc2VyID0gbnVsbDtcbiAgcHJpdmF0ZSBfbGF5b3V0OiBMYXlvdXQgPSBudWxsO1xuXG4gIHByaXZhdGUgZ2V0KGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCAnbnVsbCcpIHx8IG51bGw7XG4gIH1cblxuICBwcml2YXRlIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfVxuXG4gIGdldCBsYXlvdXQoKTogTGF5b3V0IHtcbiAgICBpZiAoIXRoaXMuX2xheW91dCkge1xuICAgICAgdGhpcy5fbGF5b3V0ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgPExheW91dD57XG4gICAgICAgICAgZml4ZWQ6IHRydWUsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBib3hlZDogZmFsc2UsXG4gICAgICAgICAgbGFuZzogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5nZXQoTEFZT1VUX0tFWSksXG4gICAgICApO1xuICAgICAgdGhpcy5zZXQoTEFZT1VUX0tFWSwgdGhpcy5fbGF5b3V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dDtcbiAgfVxuXG4gIGdldCBhcHAoKTogQXBwIHtcbiAgICBpZiAoIXRoaXMuX2FwcCkge1xuICAgICAgdGhpcy5fYXBwID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgPEFwcD57XG4gICAgICAgICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICB9LFxuICAgICAgICB0aGlzLmdldChBUFBfS0VZKSxcbiAgICAgICk7XG4gICAgICB0aGlzLnNldChBUFBfS0VZLCB0aGlzLl9hcHApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYXBwO1xuICB9XG5cbiAgZ2V0IHVzZXIoKTogVXNlciB7XG4gICAgaWYgKCF0aGlzLl91c2VyKSB7XG4gICAgICB0aGlzLl91c2VyID0gT2JqZWN0LmFzc2lnbig8VXNlcj57fSwgdGhpcy5nZXQoVVNFUl9LRVkpKTtcbiAgICAgIHRoaXMuc2V0KFVTRVJfS0VZLCB0aGlzLl91c2VyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3VzZXI7XG4gIH1cblxuICBnZXQgbm90aWZ5KCk6IE9ic2VydmFibGU8U2V0dGluZ3NOb3RpZnk+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0TGF5b3V0KG5hbWU6IHN0cmluZyB8IExheW91dCwgdmFsdWU/OiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmxheW91dFtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sYXlvdXQgPSBuYW1lO1xuICAgIH1cbiAgICB0aGlzLnNldChMQVlPVVRfS0VZLCB0aGlzLl9sYXlvdXQpO1xuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ2xheW91dCcsIG5hbWUsIHZhbHVlIH0gYXMgYW55KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldEFwcCh2YWx1ZTogQXBwKSB7XG4gICAgdGhpcy5fYXBwID0gdmFsdWU7XG4gICAgdGhpcy5zZXQoQVBQX0tFWSwgdmFsdWUpO1xuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ2FwcCcsIHZhbHVlIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0VXNlcih2YWx1ZTogVXNlcikge1xuICAgIHRoaXMuX3VzZXIgPSB2YWx1ZTtcbiAgICB0aGlzLnNldChVU0VSX0tFWSwgdmFsdWUpO1xuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ3VzZXInLCB2YWx1ZSB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudENvbmZpZyB9IGZyb20gJy4vc2VydmljZXMvaHR0cC9odHRwLmNvbmZpZyc7XG5pbXBvcnQgeyBSZXNwb25zaXZlQ29uZmlnIH0gZnJvbSAnLi9zZXJ2aWNlcy9yZXNwb25zaXZlL3Jlc3BvbnNpdmUuY29uZmlnJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbGFpblRoZW1lQ29uZmlnIHtcbiAgaHR0cD86IEh0dHBDbGllbnRDb25maWc7XG4gIHJlc3BvbnNpdmU/OiBSZXNwb25zaXZlQ29uZmlnO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5UaGVtZUNvbmZpZyB9IGZyb20gJy4uLy4uL3RoZW1lLmNvbmZpZyc7XG5pbXBvcnQgeyBSZXNwb25zaXZlQ29uZmlnIH0gZnJvbSAnLi9yZXNwb25zaXZlLmNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBSRVBfTUFYID0gNjtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlU2VydmljZSB7XG4gIHByaXZhdGUgY29nOiBSZXNwb25zaXZlQ29uZmlnO1xuICBjb25zdHJ1Y3Rvcihjb2c6IEFsYWluVGhlbWVDb25maWcpIHtcbiAgICB0aGlzLmNvZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICA8UmVzcG9uc2l2ZUNvbmZpZz57XG4gICAgICAgIHJ1bGVzOiB7XG4gICAgICAgICAgMTogeyB4czogMjQgfSxcbiAgICAgICAgICAyOiB7IHhzOiAyNCwgc206IDEyIH0sXG4gICAgICAgICAgMzogeyB4czogMjQsIHNtOiAxMiwgbWQ6IDggfSxcbiAgICAgICAgICA0OiB7IHhzOiAyNCwgc206IDEyLCBtZDogOCwgbGc6IDYgfSxcbiAgICAgICAgICA1OiB7IHhzOiAyNCwgc206IDEyLCBtZDogOCwgbGc6IDYsIHhsOiA0IH0sXG4gICAgICAgICAgNjogeyB4czogMjQsIHNtOiAxMiwgbWQ6IDgsIGxnOiA2LCB4bDogNCwgeHhsOiAyIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY29nIS5yZXNwb25zaXZlLFxuICAgICk7XG4gICAgaWYgKFxuICAgICAgT2JqZWN0LmtleXModGhpcy5jb2cucnVsZXMpXG4gICAgICAgIC5tYXAoaSA9PiAraSlcbiAgICAgICAgLnNvbWUoKGk6IG51bWJlcikgPT4gaSA8IDEgfHwgaSA+IFJFUF9NQVgpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBbdGhlbWVdIHRoZSByZXNwb25zZWl2ZSBydWxlIGluZGV4IHZhbHVlIHJhbmdlIG11c3QgYmUgMS0ke1JFUF9NQVh9YCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZ2VuQ2xzKGNvdW50OiBudW1iZXIpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgcnVsZSA9IHRoaXMuY29nLnJ1bGVzW2NvdW50ID4gUkVQX01BWCA/IFJFUF9NQVggOiBNYXRoLm1heChjb3VudCwgMSldO1xuICAgIGNvbnN0IGFudENvbENsYXNzID0gJ2FudC1jb2wnO1xuICAgIGNvbnN0IGNsc01hcCA9IFtgJHthbnRDb2xDbGFzc30teHMtJHtydWxlLnhzfWBdO1xuICAgIGlmIChydWxlLnNtKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30tc20tJHtydWxlLnNtfWApO1xuICAgIGlmIChydWxlLm1kKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30tbWQtJHtydWxlLm1kfWApO1xuICAgIGlmIChydWxlLmxnKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30tbGctJHtydWxlLmxnfWApO1xuICAgIGlmIChydWxlLnhsKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30teGwtJHtydWxlLnhsfWApO1xuICAgIGlmIChydWxlLnh4bCkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LXh4bC0ke3J1bGUueHhsfWApO1xuICAgIHJldHVybiBjbHNNYXA7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEluamVjdCxcbiAgT3B0aW9uYWwsXG4gIEluamVjdG9yLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vbWVudS9tZW51LnNlcnZpY2UnO1xuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiwgQWxhaW5JMThOU2VydmljZSB9IGZyb20gJy4uL2kxOG4vaTE4bic7XG5cbi8qKlxuICogw6jCrsK+w6fCvcKuw6bCoMKHw6nCosKYXG4gKiBAc2VlIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3Mvc2VydmljZSNUaXRsZVNlcnZpY2VcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBUaXRsZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9wcmVmaXggPSAnJztcbiAgcHJpdmF0ZSBfc3VmZml4ID0gJyc7XG4gIHByaXZhdGUgX3NlcGFyYXRvciA9ICcgLSAnO1xuICBwcml2YXRlIF9yZXZlcnNlID0gZmFsc2U7XG4gIHByaXZhdGUgX2RlZmF1bHQgPSAnTm90IFBhZ2UgTmFtZSc7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHRpdGxlOiBUaXRsZSxcbiAgICBwcml2YXRlIG1lbnVTcnY6IE1lbnVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICApIHtcbiAgICBpZiAodGhpcy5pMThuU3J2KVxuICAgICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4blNydi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0VGl0bGUoKSk7XG4gIH1cblxuICAvKiogw6jCrsK+w6fCvcKuw6XCiMKGw6nCmsKUw6fCrMKmICovXG4gIHNldCBzZXBhcmF0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcGFyYXRvciA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIMOowq7CvsOnwr3CrsOlwonCjcOnwrzCgCAqL1xuICBzZXQgcHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVmaXggPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiDDqMKuwr7Dp8K9wq7DpcKQwo7Dp8K8woAgKi9cbiAgc2V0IHN1ZmZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3VmZml4ID0gdmFsdWU7XG4gIH1cblxuICAvKiogw6jCrsK+w6fCvcKuw6bCmMKvw6XCkMKmw6XCj8KNw6jCvcKsICovXG4gIHNldCByZXZlcnNlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmV2ZXJzZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIMOowq7CvsOnwr3CrsOpwrvCmMOowq7CpMOmwqDCh8OpwqLCmMOlwpDCjSAqL1xuICBzZXQgZGVmYXVsdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdCA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeUVsZW1lbnQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBlbCA9XG4gICAgICB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCcuYWxhaW4tZGVmYXVsdF9fY29udGVudC10aXRsZSBoMScpIHx8XG4gICAgICB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZWFkZXJfX3RpdGxlJyk7XG4gICAgaWYgKGVsKSB7XG4gICAgICByZXR1cm4gZWwuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlSb3V0ZSgpOiBzdHJpbmcge1xuICAgIGxldCBuZXh0ID0gdGhpcy5pbmplY3Rvci5nZXQoQWN0aXZhdGVkUm91dGUpO1xuICAgIHdoaWxlIChuZXh0LmZpcnN0Q2hpbGQpIG5leHQgPSBuZXh0LmZpcnN0Q2hpbGQ7XG4gICAgY29uc3QgZGF0YSA9IChuZXh0LnNuYXBzaG90ICYmIG5leHQuc25hcHNob3QuZGF0YSkgfHwge307XG4gICAgaWYgKGRhdGEudGl0bGVJMThuICYmIHRoaXMuaTE4blNydilcbiAgICAgIGRhdGEudGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoZGF0YS50aXRsZUkxOG4pO1xuICAgIHJldHVybiBkYXRhLnRpdGxlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeU1lbnUoKTogc3RyaW5nIHtcbiAgICBjb25zdCBtZW51cyA9IHRoaXMubWVudVNydi5nZXRQYXRoQnlVcmwodGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKS51cmwpO1xuICAgIGlmICghbWVudXMgfHwgbWVudXMubGVuZ3RoIDw9IDApIHJldHVybiAnJztcblxuICAgIGNvbnN0IGl0ZW0gPSBtZW51c1ttZW51cy5sZW5ndGggLSAxXTtcbiAgICBsZXQgdGl0bGU7XG4gICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgcmV0dXJuIHRpdGxlIHx8IGl0ZW0udGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqMKuwr7Dp8K9wq7DpsKgwofDqcKiwphcbiAgICovXG4gIHNldFRpdGxlKHRpdGxlPzogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICB0aXRsZSA9XG4gICAgICAgIHRoaXMuZ2V0QnlSb3V0ZSgpIHx8XG4gICAgICAgIHRoaXMuZ2V0QnlNZW51KCkgfHxcbiAgICAgICAgdGhpcy5nZXRCeUVsZW1lbnQoKSB8fFxuICAgICAgICB0aGlzLl9kZWZhdWx0O1xuICAgIH1cbiAgICBpZiAodGl0bGUgJiYgIUFycmF5LmlzQXJyYXkodGl0bGUpKSB7XG4gICAgICB0aXRsZSA9IFt0aXRsZV07XG4gICAgfVxuXG4gICAgbGV0IG5ld1RpdGxlcyA9IFtdO1xuICAgIGlmICh0aGlzLl9wcmVmaXgpIHtcbiAgICAgIG5ld1RpdGxlcy5wdXNoKHRoaXMuX3ByZWZpeCk7XG4gICAgfVxuICAgIG5ld1RpdGxlcy5wdXNoKC4uLih0aXRsZSBhcyBzdHJpbmdbXSkpO1xuICAgIGlmICh0aGlzLl9zdWZmaXgpIHtcbiAgICAgIG5ld1RpdGxlcy5wdXNoKHRoaXMuX3N1ZmZpeCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXZlcnNlKSB7XG4gICAgICBuZXdUaXRsZXMgPSBuZXdUaXRsZXMucmV2ZXJzZSgpO1xuICAgIH1cbiAgICB0aGlzLnRpdGxlLnNldFRpdGxlKG5ld1RpdGxlcy5qb2luKHRoaXMuX3NlcGFyYXRvcikpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaTE4biQpIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IERFTE9OX0xPQ0FMRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdkZWxvbi1sb2NhbGUnKTtcbiIsImltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUudHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCA8TG9jYWxlRGF0YT57XG4gIGFiYnI6ICd6aC1DTicsXG4gIGV4Y2VwdGlvbjoge1xuICAgIDQwMzogJ8OmworCscOmwq3CicOvwrzCjMOkwr3CoMOmwpfCoMOmwp3Cg8Oowq7Cv8OpwpfCrsOowq/CpcOpwqHCtcOpwp3CoicsXG4gICAgNDA0OiAnw6bCisKxw6bCrcKJw6/CvMKMw6TCvcKgw6jCrsK/w6nCl8Kuw6fCmsKEw6nCocK1w6nCncKiw6TCuMKNw6XCrcKYw6XCnMKoJyxcbiAgICA1MDA6ICfDpsKKwrHDpsKtwonDr8K8wozDpsKcwo3DpcKKwqHDpcKZwqjDpcKHwrrDqcKUwpnDpMK6woYnLFxuICAgIGJhY2tUb0hvbWU6ICfDqMK/wpTDpcKbwp7DqcKmwpbDqcKhwrUnLFxuICB9LFxuICBub3RpY2VJY29uOiB7XG4gICAgZW1wdHlUZXh0OiAnw6bCmsKCw6bCl8Kgw6bClcKww6bCjcKuJyxcbiAgICBjbGVhclRleHQ6ICfDpsK4woXDp8KpwronLFxuICB9LFxuICByZXVzZVRhYjoge1xuICAgIGNsb3NlOiAnw6XChcKzw6nCl8Ktw6bCoMKHw6fCrcK+JyxcbiAgICBjbG9zZU90aGVyOiAnw6XChcKzw6nCl8Ktw6XChcK2w6XCrsKDw6bCoMKHw6fCrcK+JyxcbiAgICBjbG9zZVJpZ2h0OiAnw6XChcKzw6nCl8Ktw6XCj8Kzw6TCvsKnw6bCoMKHw6fCrcK+JyxcbiAgICBjbGVhcjogJ8OmwrjChcOnwqnCuicsXG4gIH0sXG4gIHRhZ1NlbGVjdDoge1xuICAgIGV4cGFuZDogJ8OlwrHClcOlwrzCgCcsXG4gICAgY29sbGFwc2U6ICfDpsKUwrbDqMK1wrcnLFxuICB9LFxuICBtaW5pUHJvZ3Jlc3M6IHtcbiAgICB0YXJnZXQ6ICfDp8Kbwq7DpsKgwofDpcKAwrzDr8K8wponXG4gIH0sXG4gIHNmOiB7XG4gICAgc3VibWl0OiAnw6bCj8KQw6TCusKkJyxcbiAgICByZXNldDogJ8OpwofCjcOnwr3CricsXG4gICAgc2VhcmNoOiAnw6bCkMKcw6fCtMKiJyxcbiAgICBlZGl0OiAnw6TCv8Kdw6XCrcKYJyxcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIFByb3ZpZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi9sb2NhbGUudHlwZXMnO1xuaW1wb3J0IHsgREVMT05fTE9DQUxFIH0gZnJvbSAnLi9sb2NhbGUudG9rZW5zJztcbmltcG9ydCB6aENOIGZyb20gJy4vbGFuZ3VhZ2VzL3poLUNOJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERlbG9uTG9jYWxlU2VydmljZSB7XG4gIHByaXZhdGUgX2xvY2FsZTogTG9jYWxlRGF0YTtcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMb2NhbGVEYXRhPih0aGlzLl9sb2NhbGUpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoREVMT05fTE9DQUxFKSBsb2NhbGU6IExvY2FsZURhdGEpIHtcbiAgICB0aGlzLnNldExvY2FsZShsb2NhbGUgfHwgemhDTik7XG4gIH1cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TG9jYWxlRGF0YT4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRMb2NhbGUobG9jYWxlOiBMb2NhbGVEYXRhKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvY2FsZSAmJiB0aGlzLl9sb2NhbGUuYWJiciA9PT0gbG9jYWxlLmFiYnIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gbG9jYWxlO1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGxvY2FsZSk7XG4gIH1cblxuICBnZXQgbG9jYWxlKCk6IExvY2FsZURhdGEge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cblxuICBnZXREYXRhKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGVbcGF0aF0gfHwge307XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlkoZXhpc3Q6IERlbG9uTG9jYWxlU2VydmljZSwgbG9jYWxlOiBMb2NhbGVEYXRhKTogRGVsb25Mb2NhbGVTZXJ2aWNlIHtcbiAgcmV0dXJuIGV4aXN0IHx8IG5ldyBEZWxvbkxvY2FsZVNlcnZpY2UobG9jYWxlKTtcbn1cblxuZXhwb3J0IGNvbnN0IERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZSAgIDogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICB1c2VGYWN0b3J5OiBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZLFxuICBkZXBzICAgICAgOiBbIFsgbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBEZWxvbkxvY2FsZVNlcnZpY2UgXSwgREVMT05fTE9DQUxFIF1cbn07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgemhDTiBmcm9tICcuL2xhbmd1YWdlcy96aC1DTic7XG5cbmltcG9ydCB7IERFTE9OX0xPQ0FMRSB9IGZyb20gJy4vbG9jYWxlLnRva2Vucyc7XG5pbXBvcnQgeyBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUiB9IGZyb20gJy4vbG9jYWxlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IERFTE9OX0xPQ0FMRSwgdXNlVmFsdWU6IHpoQ04gfSxcbiAgICBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRGVsb25Mb2NhbGVNb2R1bGUge31cbiIsImltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUudHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCA8TG9jYWxlRGF0YT57XG4gIGFiYnI6ICdlbi1VUycsXG4gIGV4Y2VwdGlvbjoge1xuICAgIDQwMzogYFNvcnJ5LCB5b3UgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gdGhpcyBwYWdlYCxcbiAgICA0MDQ6IGBTb3JyeSwgdGhhdCBwYWdlIGRvbid0IGV4aXN0YCxcbiAgICA1MDA6IGBTb3JyeSwgc2VydmVyIGVycm9yYCxcbiAgICBiYWNrVG9Ib21lOiAnQmFjayBUbyBIb21lJyxcbiAgfSxcbiAgbm90aWNlSWNvbjoge1xuICAgIGVtcHR5VGV4dDogJ05vIGRhdGEnLFxuICAgIGNsZWFyVGV4dDogJ0NsZWFyJyxcbiAgfSxcbiAgcmV1c2VUYWI6IHtcbiAgICBjbG9zZTogJ0Nsb3NlIHRhYicsXG4gICAgY2xvc2VPdGhlcjogJ0Nsb3NlIG90aGVyIHRhYnMnLFxuICAgIGNsb3NlUmlnaHQ6ICdDbG9zZSB0YWJzIHRvIHJpZ2h0JyxcbiAgICBjbGVhcjogJ0NsZWFyIHRhYnMnLFxuICB9LFxuICB0YWdTZWxlY3Q6IHtcbiAgICBleHBhbmQ6ICdFeHBhbmQnLFxuICAgIGNvbGxhcHNlOiAnQ29sbGFwc2UnLFxuICB9LFxuICBtaW5pUHJvZ3Jlc3M6IHtcbiAgICB0YXJnZXQ6ICdUYXJnZXQ6ICcsXG4gIH0sXG4gIHNmOiB7XG4gICAgc3VibWl0OiAnU3VibWl0JyxcbiAgICByZXNldDogJ1Jlc2V0JyxcbiAgICBzZWFyY2g6ICdTZWFyY2gnLFxuICAgIGVkaXQ6ICdTYXZlJyxcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlLnR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgPExvY2FsZURhdGE+e1xuICBhYmJyOiAnemgtVFcnLFxuICBleGNlcHRpb246IHtcbiAgICA0MDM6ICfDpsKKwrHDpsKtwonDr8K8wozDpcKmwrPDp8KEwqHDpsKsworDqMKowqrDpcKVwo/DqMKpwrLDqcKgwoHDqcKdwqInLFxuICAgIDQwNDogJ8OmworCscOmwq3CicOvwrzCjMOlwqbCs8OowqjCqsOlwpXCj8OnwprChMOpwqDCgcOpwp3CosOkwrjCjcOlwq3CmMOlwpzCqCcsXG4gICAgNTAwOiAnw6bCisKxw6bCrcKJw6/CvMKMw6bCnMKNw6XCi8KZw6XCmcKow6XCh8K6w6nCjMKvw6TCusKGJyxcbiAgICBiYWNrVG9Ib21lOiAnw6jCv8KUw6XCm8Kew6nCpsKWw6nCoMKBJyxcbiAgfSxcbiAgbm90aWNlSWNvbjoge1xuICAgIGVtcHR5VGV4dDogJ8OmwprCq8OnwoTCocOmwpXCuMOmwpPCmicsXG4gICAgY2xlYXJUZXh0OiAnw6bCuMKFw6fCqcK6JyxcbiAgfSxcbiAgcmV1c2VUYWI6IHtcbiAgICBjbG9zZTogJ8OpwpfCnMOpwpbCicOmwqjCmcOnwrDCvScsXG4gICAgY2xvc2VPdGhlcjogJ8OpwpfCnMOpwpbCicOlwoXCtsOlwq7Cg8OmwqjCmcOnwrDCvScsXG4gICAgY2xvc2VSaWdodDogJ8OpwpfCnMOpwpbCicOlwo/Cs8OlwoHCtMOmwqjCmcOnwrDCvScsXG4gICAgY2xlYXI6ICfDpsK4woXDp8KpwronLFxuICB9LFxuICB0YWdTZWxlY3Q6IHtcbiAgICBleHBhbmQ6ICfDpcKxwpXDqcKWwosnLFxuICAgIGNvbGxhcHNlOiAnw6bClMK2w6jCtcK3JyxcbiAgfSxcbiAgbWluaVByb2dyZXNzOiB7XG4gICAgdGFyZ2V0OiAnw6fCm8Kuw6bCqMKZw6XCgMK8w6/CvMKaJyxcbiAgfSxcbiAgc2Y6IHtcbiAgICBzdWJtaXQ6ICfDpsKPwpDDpMK6wqQnLFxuICAgIHJlc2V0OiAnw6nCh8KNw6fCvcKuJyxcbiAgICBzZWFyY2g6ICfDpsKQwpzDp8K0wqInLFxuICAgIGVkaXQ6ICfDpMK/wp3DpcKtwpgnLFxuICB9LFxufTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOek1vZGFsU2VydmljZSwgTW9kYWxPcHRpb25zRm9yU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsSGVscGVyT3B0aW9ucyB7XG4gIC8qKiDDpcKkwqfDpcKwwo/Dr8K8wpvDpMK+wovDpcKmwoLDr8K8wppsZ8OjwoDCgTYwMMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBsZ2AgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlcjtcbiAgLyoqIMOlwq/CucOowq/CncOmwqHChiBbTW9kYWxPcHRpb25zRm9yU2VydmljZV0oaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9tb2RhbC9uei1tb2RhbC50eXBlLnRzKSDDpcKPwoLDpsKVwrAgKi9cbiAgbW9kYWxPcHRpb25zPzogTW9kYWxPcHRpb25zRm9yU2VydmljZTtcbiAgLyoqIMOmwpjCr8OlwpDCpsOnwrLCvsOlwofChsOvwrzCiMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYMOvwrzCicOvwrzCjMOowovCpcOowr/ClMOlwpvCnsOlwoDCvMOpwp3CnsOnwqnCusOlwoDCvMOvwrzCiGBudWxsYMOmwojClmB1bmRlZmluZWRgw6/CvMKJw6jCp8KGw6TCuMK6w6bCiMKQw6XCisKfw6/CvMKMw6XCkMKmw6XCiMKZw6jCp8KGw6TCuMK6w6nClMKZw6jCr8KvICovXG4gIGV4YWN0PzogYm9vbGVhbjtcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwozChcOowqPCucOmwqDCh8Onwq3CvsOpwqHCtcOvwrzCjMOkwr/CrsOlwqTCjcOmwqjCocOmwoDCgcOlwozChcOlwpDCq8OmwqDCh8Onwq3CvsOpwpfCtMOowrfCncOpwpfCrsOpwqLCmCAqL1xuICBpbmNsdWRlVGFicz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogw6XCr8K5w6jCr8Kdw6bCocKGw6jCvsKFw6XCisKpw6fCscK7XG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTW9kYWxIZWxwZXIge1xuICBwcml2YXRlIHpJbmRleCA9IDUwMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogTnpNb2RhbFNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIMOmwp7ChMOlwrvCusOkwrjCgMOkwrjCqsOlwq/CucOowq/CncOmwqHChlxuICAgKlxuICAgKiBAcGFyYW0gY29tcCDDp8K7woTDpMK7wrZcbiAgICogQHBhcmFtIHBhcmFtcyDDp8K7woTDpMK7wrbDpcKPwoLDpsKVwrBcbiAgICogQHBhcmFtIG9wdGlvbnMgw6nCosKdw6XCpMKWw6XCj8KCw6bClcKwXG4gICAqXG4gICAqIMOnwqTCusOkwr7Ci8OvwrzCmlxuICBgYGB0c1xudGhpcy5tb2RhbEhlbHBlci5jcmVhdGUoRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbi8vIMOlwq/CucOkwrrCjsOnwrvChMOkwrvCtsOnwprChMOmwojCkMOlworCnybDpcKFwrPDqcKXwq3Dp8KawoTDpcKkwoTDp8KQwobDqMKvwrTDpsKYwo5cbi8vIMOmwojCkMOlworCn1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XG4vLyDDpcKFwrPDqcKXwq1cbnRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG5gYGBcbiAgICovXG4gIGNyZWF0ZShcbiAgICBjb21wOiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiBNb2RhbEhlbHBlck9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBzaXplOiAnbGcnLFxuICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICBpbmNsdWRlVGFiczogZmFsc2UsXG4gICAgfSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuICAgICAgbGV0IGNscyA9ICcnLFxuICAgICAgICB3aWR0aCA9ICcnO1xuICAgICAgaWYgKG9wdGlvbnMuc2l6ZSkge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB3aWR0aCA9IGAke29wdGlvbnMuc2l6ZX1weGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xzID0gYG1vZGFsLSR7b3B0aW9ucy5zaXplfWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLmluY2x1ZGVUYWJzKSB7XG4gICAgICAgIGNscyArPSAnIG1vZGFsLWluY2x1ZGUtdGFicyc7XG4gICAgICB9XG4gICAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZSA9IHtcbiAgICAgICAgbnpXcmFwQ2xhc3NOYW1lOiBjbHMsXG4gICAgICAgIG56Q29udGVudDogY29tcCxcbiAgICAgICAgbnpXaWR0aDogd2lkdGggPyB3aWR0aCA6IHVuZGVmaW5lZCxcbiAgICAgICAgbnpGb290ZXI6IG51bGwsXG4gICAgICAgIG56Q29tcG9uZW50UGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIG56WkluZGV4OiArK3RoaXMuekluZGV4LFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHN1YmplY3QgPSB0aGlzLnNydi5jcmVhdGUoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMubW9kYWxPcHRpb25zKSxcbiAgICAgICk7XG4gICAgICBjb25zdCBhZnRlckNsb3NlJCA9IHN1YmplY3QuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLmV4YWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHJlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICBhZnRlckNsb3NlJC51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCnsKEw6XCu8K6w6nCncKZw6bCgMKBw6bCocKGw6/CvMKMw6fCgsK5w6XCh8K7w6jCksKZw6XCscKCw6TCuMKNw6XChcKBw6jCrsK4w6XChcKzw6nCl8KtXG4gICAqXG4gICAqIEBwYXJhbSBjb21wIMOnwrvChMOkwrvCtlxuICAgKiBAcGFyYW0gcGFyYW1zIMOnwrvChMOkwrvCtsOlwo/CgsOmwpXCsFxuICAgKiBAcGFyYW0gb3B0aW9ucyDDqcKiwp3DpcKkwpbDpcKPwoLDpsKVwrBcbiAgICpcbiAgICogw6fCpMK6w6TCvsKLw6/CvMKaXG4gIGBgYHRzXG50aGlzLm1vZGFsSGVscGVyLm9wZW4oRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbi8vIMOlwq/CucOkwrrCjsOnwrvChMOkwrvCtsOnwprChMOmwojCkMOlworCnybDpcKFwrPDqcKXwq3Dp8KawoTDpcKkwoTDp8KQwobDqMKvwrTDpsKYwo5cbi8vIMOmwojCkMOlworCn1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XG4vLyDDpcKFwrPDqcKXwq1cbnRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG5gYGBcbiAgICovXG4gIGNyZWF0ZVN0YXRpYyhcbiAgICBjb21wOiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiBNb2RhbEhlbHBlck9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBtb2RhbE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgeyBuek1hc2tDbG9zYWJsZTogZmFsc2UgfSxcbiAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5tb2RhbE9wdGlvbnMsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoY29tcCwgcGFyYW1zLCBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7IG1vZGFsT3B0aW9ucyB9KSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCicKTw6XCvMKAw6XCr8K5w6jCr8Kdw6bCocKGXG4gICAqIEBwYXJhbSBjb21wIMOnwrvChMOkwrvCtlxuICAgKiBAcGFyYW0gcGFyYW1zIMOnwrvChMOkwrvCtsOlwo/CgsOmwpXCsFxuICAgKiBAcGFyYW0gc2l6ZSDDpcKkwqfDpcKwwo/Dr8K8wpvDpMK+wovDpcKmwoLDr8K8wppsZ8OjwoDCgTYwMMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmxnXG4gICAqIEBwYXJhbSBvcHRpb25zIMOlwq/CucOowq/CncOmwqHChiBgTW9kYWxPcHRpb25zRm9yU2VydmljZWAgw6XCj8KCw6bClcKwXG4gICAqXG4gICAqIMOnwqTCusOkwr7Ci8OvwrzCmlxuICBgYGB0c1xudGhpcy5tb2RhbEhlbHBlci5vcGVuKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4vLyDDpcKvwrnDpMK6wo7Dp8K7woTDpMK7wrbDp8KawoTDpsKIwpDDpcKKwp8mw6XChcKzw6nCl8Ktw6fCmsKEw6XCpMKEw6fCkMKGw6jCr8K0w6bCmMKOXG4vLyDDpsKIwpDDpcKKwp9cbnRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcbnRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xuLy8gw6XChcKzw6nCl8KtXG50aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xuYGBgXG4gICAqL1xuICBvcGVuKFxuICAgIGNvbXA6IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgc2l6ZTogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyID0gJ2xnJyxcbiAgICBvcHRpb25zPzogTW9kYWxPcHRpb25zRm9yU2VydmljZSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoY29tcCwgcGFyYW1zLCB7XG4gICAgICBzaXplLFxuICAgICAgbW9kYWxPcHRpb25zOiBvcHRpb25zLFxuICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIMOpwp3CmcOmwoDCgcOmwqHChsOvwrzCjMOnwoLCucOlwofCu8OowpLCmcOlwrHCgsOkwrjCjcOlwoXCgcOowq7CuMOlwoXCs8OpwpfCrVxuICAgKiBAcGFyYW0gY29tcCDDp8K7woTDpMK7wrZcbiAgICogQHBhcmFtIHBhcmFtcyDDp8K7woTDpMK7wrbDpcKPwoLDpsKVwrBcbiAgICogQHBhcmFtIHNpemUgw6XCpMKnw6XCsMKPw6/CvMKbw6TCvsKLw6XCpsKCw6/CvMKabGfDo8KAwoE2MDDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppsZ1xuICAgKiBAcGFyYW0gb3B0aW9ucyDDpcKvwrnDqMKvwp3DpsKhwoYgYE1vZGFsT3B0aW9uc0ZvclNlcnZpY2VgIMOlwo/CgsOmwpXCsFxuICAgKlxuICAgKiDDp8KkwrrDpMK+wovDr8K8wppcbiAgYGBgdHNcbnRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuLy8gw6XCr8K5w6TCusKOw6fCu8KEw6TCu8K2w6fCmsKEw6bCiMKQw6XCisKfJsOlwoXCs8OpwpfCrcOnwprChMOlwqTChMOnwpDChsOowq/CtMOmwpjCjlxuLy8gw6bCiMKQw6XCisKfXG50aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG50aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcbi8vIMOlwoXCs8OpwpfCrVxudGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcbmBgYFxuICAgKi9cbiAgc3RhdGljKFxuICAgIGNvbXA6IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgc2l6ZTogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyID0gJ2xnJyxcbiAgICBvcHRpb25zPzogYW55LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLm9wZW4oXG4gICAgICBjb21wLFxuICAgICAgcGFyYW1zLFxuICAgICAgc2l6ZSxcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBuek1hc2tDbG9zYWJsZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOekRyYXdlclNlcnZpY2UsIE56RHJhd2VyT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYXdlckhlbHBlck9wdGlvbnMge1xuICAvKipcbiAgICogw6XCpMKnw6XCsMKPw6/CvMKbw6TCvsKLw6XCpsKCw6/CvMKabGfDo8KAwoE2MDDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgbWRgXG4gICAqXG4gICAqIHwgw6fCscK7w6XCnsKLIHwgw6nCu8KYw6jCrsKkw6XCpMKnw6XCsMKPIHxcbiAgICogfCAtLS0gfCAtLS0tLS0gfFxuICAgKiB8IGBzbWAgfCBgMzAwYCB8XG4gICAqIHwgYG1kYCB8IGA2MDBgIHxcbiAgICogfCBgbGdgIHwgYDkwMGAgfFxuICAgKiB8IGB4bGAgfCBgMTIwMGAgfFxuICAgKlxuICAgKiA+IMOkwrvCpcOkwrjCisOlwoDCvMOvwrzCjMOlwo/Cr8OpwoDCmsOowr/Ch8OowqbChsOnwpvClsOnwpvCuMOlwrrClMOnwprChExFU1PDpcKPwoLDpsKVwrDDqMKHwqrDqMKhwozDqMKwwoPDpsKVwrRcbiAgICovXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgbnVtYmVyO1xuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6XCjMKFw6XCkMKrw6XCusKVw6nCg8Kow6XCt8Klw6XChcK3w6bCncKhw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHRydWVgXG4gICAqL1xuICBmb290ZXI/OiBib29sZWFuO1xuICAvKipcbiAgICogw6XCusKVw6nCg8Kow6XCt8Klw6XChcK3w6bCncKhw6nCq8KYw6XCusKmw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDU1YFxuICAgKi9cbiAgZm9vdGVySGVpZ2h0PzogbnVtYmVyO1xuICAvKiogw6bCisK9w6XCscKJIFtOekRyYXdlck9wdGlvbnNdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2RyYXdlci96aCNuemRyYXdlcm9wdGlvbnMpIMOlwo/CgsOmwpXCsCAqL1xuICBkcmF3ZXJPcHRpb25zPzogTnpEcmF3ZXJPcHRpb25zO1xufVxuXG4vKipcbiAqIMOmworCvcOlwrHCicOowr7ChcOlworCqcOnwrHCu1xuICpcbiAqICoqw6bCs8Kow6bChMKPw6/CvMKaKiogw6bCnsKEw6XCu8K6w6fCu8KTw6bCnsKcw6nCg8K9w6XCj8Kvw6jCosKrw6jCrsKiw6nCmMKFw6/CvMKMw6TCvcKGw6bCsMK4w6jCv8Kcw6nCg8K9w6TCuMKNw6TCvMKaw6jCp8Kmw6XCj8KRIGBvYnNlcnZlci5lcnJvcmBcbiAqXG4gKiDDp8KkwrrDpMK+wovDr8K8wppcbmBgYHRzXG50aGlzLmRyYXdlckhlbHBlci5jcmVhdGUoJ0VkaXQnLCBGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuLy8gw6XCr8K5w6TCusKOw6fCu8KEw6TCu8K2w6fCmsKEw6bCiMKQw6XCisKfJsOlwoXCs8OpwpfCrcOnwprChMOlwqTChMOnwpDChsOowq/CtMOmwpjCjlxuLy8gw6bCiMKQw6XCisKfXG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKGRhdGEpO1xudGhpcy5OekRyYXdlclJlZi5jbG9zZSh0cnVlKTtcbi8vIMOlwoXCs8OpwpfCrVxudGhpcy5OekRyYXdlclJlZi5jbG9zZSgpO1xudGhpcy5OekRyYXdlclJlZi5jbG9zZShmYWxzZSk7XG5gYGBcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBEcmF3ZXJIZWxwZXIge1xuICAvLyDDpcKkwqfDqcKDwqjDpcKIwobDpsKDwoXDpcKGwrXDpMK4wovDpsKKwr3DpcKxwonDp8KawoTDpcKxwoLDp8K6wqfDpsKvwpQgTW9kYWwgw6TCvMKaw6bCm8K0w6TCvcKOw6TCuMKAw6TCusKbXG4gIHByaXZhdGUgekluZGV4ID0gNDAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBOekRyYXdlclNlcnZpY2UpIHsgfVxuXG4gIC8qKlxuICAgKiDDpsKewoTDpcK7wrrDpMK4woDDpMK4wqrDpsKKwr3DpcKxwolcbiAgICovXG4gIGNyZWF0ZShcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGNvbXA6IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IERyYXdlckhlbHBlck9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbig8RHJhd2VySGVscGVyT3B0aW9ucz57XG4gICAgICBzaXplOiAnbWQnLFxuICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgZm9vdGVySGVpZ2h0OiA1NSxcbiAgICAgIGRyYXdlck9wdGlvbnM6IHtcbiAgICAgICAgbnpQbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgICAgIG56V3JhcENsYXNzTmFtZTogJydcbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICBjb25zdCB7IHNpemUsIGZvb3RlciwgZm9vdGVySGVpZ2h0LCBkcmF3ZXJPcHRpb25zIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE56RHJhd2VyT3B0aW9ucyA9IHtcbiAgICAgICAgbnpDb250ZW50OiBjb21wLFxuICAgICAgICBuekNvbnRlbnRQYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgbnpaSW5kZXg6ICsrdGhpcy56SW5kZXgsXG4gICAgICAgIG56VGl0bGU6IHRpdGxlXG4gICAgICB9O1xuXG4gICAgICBpZiAoZm9vdGVyKSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zLm56Qm9keVN0eWxlID0ge1xuICAgICAgICAgIGhlaWdodDogYGNhbGMoMTAwJSAtICR7Zm9vdGVySGVpZ2h0fXB4KWAsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICAncGFkZGluZy1ib3R0b20nOiBgJHtmb290ZXJIZWlnaHQgLSAyfXB4YFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHNpemUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zW2RyYXdlck9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICd0b3AnIHx8IGRyYXdlck9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ256SGVpZ2h0JyA6ICdueldpZHRoJ10gPSBvcHRpb25zLnNpemU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZhdWx0T3B0aW9ucy5ueldyYXBDbGFzc05hbWUgPSAoZHJhd2VyT3B0aW9ucy5ueldyYXBDbGFzc05hbWUgKyBgIGRyYXdlci0ke29wdGlvbnMuc2l6ZX1gKS50cmltKCk7XG4gICAgICAgIGRlbGV0ZSBkcmF3ZXJPcHRpb25zLm56V3JhcENsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3ViamVjdCA9IHRoaXMuc3J2LmNyZWF0ZShcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgZHJhd2VyT3B0aW9ucyksXG4gICAgICApO1xuICAgICAgY29uc3QgYWZ0ZXJDbG9zZSQgPSBzdWJqZWN0LmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzICE9IG51bGwgJiYgcmVzICE9PSBmYWxzZSkge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICBhZnRlckNsb3NlJC51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCnsKEw6XCu8K6w6TCuMKAw6TCuMKqw6bCisK9w6XCscKJw6/CvMKMw6fCgsK5w6XCh8K7w6jCksKZw6XCscKCw6TCuMKNw6XChcKBw6jCrsK4w6XChcKzw6nCl8KtXG4gICAqL1xuICBzdGF0aWMoXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBjb21wOiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiBEcmF3ZXJIZWxwZXJPcHRpb25zXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgZHJhd2VyT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7IG56TWFza0Nsb3NhYmxlOiBmYWxzZSB9LFxuICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLmRyYXdlck9wdGlvbnMsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUodGl0bGUsIGNvbXAsIHBhcmFtcywgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgeyBkcmF3ZXJPcHRpb25zIH0pKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cENsaWVudCxcbiAgSHR0cEhlYWRlcnMsXG4gIEh0dHBQYXJhbXMsXG4gIEh0dHBSZXNwb25zZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWxhaW5UaGVtZUNvbmZpZyB9IGZyb20gJy4uLy4uL3RoZW1lLmNvbmZpZyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50Q29uZmlnIH0gZnJvbSAnLi9odHRwLmNvbmZpZyc7XG5cbi8qKlxuICogw6XCsMKBw6jCo8KFSHR0cENsaWVudMOvwrzCjMOkwrjCu8OowqbCgcOowqfCo8OlwobCs8OvwrzCmlxuICogKyDDpMK8wpjDpcKMwpZIdHRwQ2xpZW50w6XCnMKow6XCj8KCw6bClcKww6TCuMKKw6TCvsK/w6XCiMKpw6bCgMKnXG4gKiArIMOnwrvCn8OkwrjCgMOlwq7CnsOnwo7CsCBsb2FkaW5nXG4gKiArIMOnwrvCn8OkwrjCgMOlwqTChMOnwpDChsOmwpfCtsOpwpfCtMOmwqDCvMOlwrzCj8OpwpfCrsOpwqLCmFxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNsYXNzLW5hbWVcbmV4cG9ydCBjbGFzcyBfSHR0cENsaWVudCB7XG4gIHByaXZhdGUgY29nOiBIdHRwQ2xpZW50Q29uZmlnO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIGNvZzogQWxhaW5UaGVtZUNvbmZpZykge1xuICAgIHRoaXMuY29nID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIDxIdHRwQ2xpZW50Q29uZmlnPntcbiAgICAgICAgbnVsbFZhbHVlSGFuZGxpbmc6ICdpbmNsdWRlJyxcbiAgICAgICAgZGF0ZVZhbHVlSGFuZGxpbmc6ICd0aW1lc3RhbXAnLFxuICAgICAgfSxcbiAgICAgIGNvZyEuaHR0cCxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xuXG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKtwqPDpcKcwqjDpcKKwqDDqMK9wr3DpMK4wq0gKi9cbiAgZ2V0IGxvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gIH1cblxuICBwYXJzZVBhcmFtcyhwYXJhbXM6IGFueSk6IEh0dHBQYXJhbXMge1xuICAgIGNvbnN0IG5ld1BhcmFtcyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IF9kYXRhID0gcGFyYW1zW2tleV07XG4gICAgICAvLyDDpcK/wr3Dp8KVwqXDp8KpwrrDpcKAwrxcbiAgICAgIGlmICh0aGlzLmNvZy5udWxsVmFsdWVIYW5kbGluZyA9PT0gJ2lnbm9yZScgJiYgX2RhdGEgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgLy8gw6XCsMKGw6bCl8K2w6nCl8K0w6jCvcKsw6XCjMKWw6TCuMK6w6/CvMKaw6bCl8K2w6nCl8K0w6bCiMKzICjDp8KnwpIpXG4gICAgICBpZiAodGhpcy5jb2cuZGF0ZVZhbHVlSGFuZGxpbmcgPT09ICd0aW1lc3RhbXAnICYmIF9kYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBfZGF0YSA9IF9kYXRhLnZhbHVlT2YoKTtcbiAgICAgIH1cbiAgICAgIG5ld1BhcmFtc1trZXldID0gX2RhdGE7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBIdHRwUGFyYW1zKHsgZnJvbU9iamVjdDogbmV3UGFyYW1zIH0pO1xuICB9XG5cbiAgYXBwbGllZFVybCh1cmw6IHN0cmluZywgcGFyYW1zPzogYW55KSB7XG4gICAgaWYgKCFwYXJhbXMpIHJldHVybiB1cmw7XG4gICAgdXJsICs9IH51cmwuaW5kZXhPZignPycpID8gJycgOiAnPyc7XG4gICAgY29uc3QgYXJyOiBzdHJpbmdbXSA9IFtdO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxuICAgIGZvciAoY29uc3Qga2V5IGluIHBhcmFtcykge1xuICAgICAgYXJyLnB1c2goYCR7a2V5fT0ke3BhcmFtc1trZXldfWApO1xuICAgIH1cbiAgICByZXR1cm4gdXJsICsgYXJyLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGJlZ2luKCkge1xuICAgIC8vIGNvbnNvbGUudGltZSgnaHR0cCcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMuX2xvYWRpbmcgPSB0cnVlKSk7XG4gIH1cblxuICBlbmQoKSB7XG4gICAgLy8gY29uc29sZS50aW1lRW5kKCdodHRwJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5fbG9hZGluZyA9IGZhbHNlKSk7XG4gIH1cblxuICAvLyByZWdpb246IGdldFxuXG4gIC8qKlxuICAgKiBHRVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYFRgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgZ2V0PFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuXG4gIC8qKlxuICAgKiBHRVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYHN0cmluZ2Agw6fCscK7w6XCnsKLXG4gICAqL1xuICBnZXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIEdFVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBnZXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XG5cbiAgLyoqXG4gICAqIEdFVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBnZXQ8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xuXG4gIC8qKlxuICAgKiBHRVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYGFueWAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBnZXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBHRVQgw6jCr8K3w6bCscKCXG4gICAqL1xuICBnZXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgICdHRVQnLFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuXG4gIC8vIHJlZ2lvbjogcG9zdFxuXG4gIC8qKlxuICAgKiBQT1NUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBzdHJpbmdgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcG9zdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIFBPU1TDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEh0dHBSZXNwb25zZTxKU09OPmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBwb3N0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcblxuICAvKipcbiAgICogUE9TVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBwb3N0PFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuXG4gIC8qKlxuICAgKiBQT1NUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBhbnlgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcG9zdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogUE9TVCDDqMKvwrfDpsKxwoJcbiAgICovXG4gIHBvc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICAnUE9TVCcsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cblxuICAvLyByZWdpb246IGRlbGV0ZVxuXG4gIC8qKlxuICAgKiBERUxFVEXDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYHN0cmluZ2Agw6fCscK7w6XCnsKLXG4gICAqL1xuICBkZWxldGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIERFTEVURcOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBkZWxldGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XG5cbiAgLyoqXG4gICAqIERFTEVURcOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgYW55YCDDp8KxwrvDpcKewotcbiAgICovXG4gIGRlbGV0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIERFTEVURSDDqMKvwrfDpsKxwoJcbiAgICovXG4gIGRlbGV0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgJ0RFTEVURScsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgLyoqXG4gICAqIGBqc29ucGAgw6jCr8K3w6bCscKCXG4gICAqXG4gICAqIEBwYXJhbSB1cmwgVVJMw6XCnMKww6XCncKAXG4gICAqIEBwYXJhbSBwYXJhbXMgw6jCr8K3w6bCscKCw6XCj8KCw6bClcKwXG4gICAqIEBwYXJhbSBjYWxsYmFja1BhcmFtIENBTExCQUNLw6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaSlNPTlBfQ0FMTEJBQ0tcbiAgICovXG4gIGpzb25wKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBjYWxsYmFja1BhcmFtOiBzdHJpbmcgPSAnSlNPTlBfQ0FMTEJBQ0snLFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuanNvbnAodGhpcy5hcHBsaWVkVXJsKHVybCwgcGFyYW1zKSwgY2FsbGJhY2tQYXJhbSkucGlwZShcbiAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IocmVzID0+IHtcbiAgICAgICAgdGhpcy5lbmQoKTtcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IocmVzKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvLyAjcmVnaW9uIHBhdGNoXG5cbiAgLyoqXG4gICAqIFBBVENIw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBzdHJpbmdgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcGF0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBQQVRDSMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSHR0cFJlc3BvbnNlPEpTT04+YCDDp8KxwrvDpcKewotcbiAgICovXG4gIHBhdGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcblxuICAvKipcbiAgICogUEFUQ0jDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEpTT05gIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcGF0Y2g8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8VD47XG5cbiAgLyoqXG4gICAqIFBBVENIw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBhbnlgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcGF0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIFBBVENIIMOowq/Ct8OmwrHCglxuICAgKi9cbiAgcGF0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICAnUEFUQ0gnLFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcHV0XG5cbiAgLyoqXG4gICAqIFBVVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgc3RyaW5nYCDDp8KxwrvDpcKewotcbiAgICovXG4gIHB1dChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIFBVVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSHR0cFJlc3BvbnNlPEpTT04+YCDDp8KxwrvDpcKewotcbiAgICovXG4gIHB1dChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XG5cbiAgLyoqXG4gICAqIFBVVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBwdXQ8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8VD47XG5cbiAgLyoqXG4gICAqIFBVVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgYW55YCDDp8KxwrvDpcKewotcbiAgICovXG4gIHB1dChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogUFVUIMOowq/Ct8OmwrHCglxuICAgKi9cbiAgcHV0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgJ1BVVCcsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLyoqXG4gICAqIGByZXF1ZXN0YCDDqMKvwrfDpsKxwoJcbiAgICpcbiAgICogQHBhcmFtIG1ldGhvZCDDqMKvwrfDpsKxwoLDpsKWwrnDpsKzwpXDp8KxwrvDpcKewotcbiAgICogQHBhcmFtIHVybCBVUkzDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIG9wdGlvbnMgw6XCj8KCw6bClcKwXG4gICAqL1xuICByZXF1ZXN0PFI+KFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBib2R5PzogYW55O1xuICAgICAgaGVhZGVycz86XG4gICAgICAgIHwgSHR0cEhlYWRlcnNcbiAgICAgICAgfCB7XG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgICAgICB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHBhcmFtcz86XG4gICAgICAgIHwgSHR0cFBhcmFtc1xuICAgICAgICB8IHtcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICAgICAgfTtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8Uj47XG4gIC8qKlxuICAgKiBgcmVxdWVzdGAgw6jCr8K3w6bCscKCXG4gICAqXG4gICAqIEBwYXJhbSBtZXRob2Qgw6jCr8K3w6bCscKCw6bClsK5w6bCs8KVw6fCscK7w6XCnsKLXG4gICAqIEBwYXJhbSB1cmwgVVJMw6XCnMKww6XCncKAXG4gICAqIEBwYXJhbSBvcHRpb25zIMOlwo/CgsOmwpXCsFxuICAgKi9cbiAgcmVxdWVzdChcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgYm9keT86IGFueTtcbiAgICAgIGhlYWRlcnM/OlxuICAgICAgICB8IEh0dHBIZWFkZXJzXG4gICAgICAgIHwge1xuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICAgICAgfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICBwYXJhbXM/OlxuICAgICAgICB8IEh0dHBQYXJhbXNcbiAgICAgICAgfCB7XG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgICAgIH07XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRoaXMuYmVnaW4oKTtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMucGFyYW1zKSBvcHRpb25zLnBhcmFtcyA9IHRoaXMucGFyc2VQYXJhbXMob3B0aW9ucy5wYXJhbXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpLnBpcGUoXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHJlcyk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgZGlzdGFuY2VJbldvcmRzVG9Ob3cgZnJvbSAnZGF0ZS1mbnMvZGlzdGFuY2VfaW5fd29yZHNfdG9fbm93JztcblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3Mvc2VydmljZS1waXBlIyVFNiU5NyVBNSVFNiU5QyU5Ri1fZGF0ZVxuICovXG5AUGlwZSh7IG5hbWU6ICdfZGF0ZScgfSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oXG4gICAgdmFsdWU6IERhdGUgfCBzdHJpbmcgfCBudW1iZXIsXG4gICAgZm9ybWF0U3RyaW5nOiBzdHJpbmcgPSAnWVlZWS1NTS1ERCBISDptbScsXG4gICk6IHN0cmluZyB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoZm9ybWF0U3RyaW5nID09PSAnZm4nKSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZUluV29yZHNUb05vdyh2YWx1ZSwge1xuICAgICAgICAgIGxvY2FsZTogKHdpbmRvdyBhcyBhbnkpLl9fbG9jYWxlX18sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdCh2YWx1ZSwgZm9ybWF0U3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VycmVuY3lQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3Mvc2VydmljZS1waXBlIyVFOCVCNCVBNyVFNSVCOCU4MS1fY3VycmVudHlcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1waXBlLXRyYW5zZm9ybS1pbnRlcmZhY2VcbkBQaXBlKHsgbmFtZTogJ19jdXJyZW5jeScgfSlcbmV4cG9ydCBjbGFzcyBDTkN1cnJlbmN5UGlwZSBleHRlbmRzIEN1cnJlbmN5UGlwZSB7XG4gIHRyYW5zZm9ybShcbiAgICB2YWx1ZTogYW55LFxuICAgIGN1cnJlbmN5Q29kZTogc3RyaW5nID0gJ8Ovwr/CpScsXG4gICAgZGlzcGxheTogJ2NvZGUnIHwgJ3N5bWJvbCcgfCAnc3ltYm9sLW5hcnJvdycgfCBib29sZWFuID0gJ2NvZGUnLFxuICAgIGRpZ2l0cz86IHN0cmluZyxcbiAgKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgY3VycmVuY3lDb2RlLCA8YW55PmRpc3BsYXksIGRpZ2l0cyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvY29tbW9uIyVFNSU4RiVBRiVFOCVCRiVBRCVFNCVCQiVBMy1rZXlzXG4gKi9cbkBQaXBlKHsgbmFtZTogJ2tleXMnIH0pXG5leHBvcnQgY2xhc3MgS2V5c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGtleUlzTnVtYmVyOiBib29sZWFuID0gZmFsc2UpOiBhbnlbXSB7XG4gICAgY29uc3QgcmV0ID0gW107XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgIHJldC5wdXNoKHsga2V5OiBrZXlJc051bWJlciA/ICtrZXkgOiBrZXksIHZhbHVlOiB2YWx1ZVtrZXldIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHNlZSBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL3NlcnZpY2UtcGlwZSMlRTUlQkUlQkQlRTclQUIlQTAteW5cbiAqL1xuQFBpcGUoeyBuYW1lOiAneW4nIH0pXG5leHBvcnQgY2xhc3MgWU5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogYm9vbGVhbiwgeWVzOiBzdHJpbmcsIG5vOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXN1Y2Nlc3NcIj4nICsgKHllcyB8fCAnw6bCmMKvJykgKyAnPC9zcGFuPic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1lcnJvclwiPicgKyAobm8gfHwgJ8OlwpDCpicpICsgJzwvc3Bhbj4nO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnLi93aW5fdG9rZW5zJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICcuL2xvY2FsZS9sb2NhbGUubW9kdWxlJztcblxuLy8gcmVnaW9uOiBpbXBvcnRcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2VGYWtlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pMThuL2kxOG4nO1xuXG5pbXBvcnQgeyBNb2RhbEhlbHBlciB9IGZyb20gJy4vc2VydmljZXMvbW9kYWwvbW9kYWwuaGVscGVyJztcbmltcG9ydCB7IERyYXdlckhlbHBlciB9IGZyb20gJy4vc2VydmljZXMvZHJhd2VyL2RyYXdlci5oZWxwZXInO1xuY29uc3QgSEVMUEVSUyA9IFtNb2RhbEhlbHBlciwgRHJhd2VySGVscGVyXTtcblxuLy8gY29tcG9uZW50c1xuY29uc3QgQ09NUE9ORU5UUyA9IFtdO1xuXG4vLyBwaXBlc1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICcuL3BpcGVzL2RhdGUvZGF0ZS5waXBlJztcbmltcG9ydCB7IENOQ3VycmVuY3lQaXBlIH0gZnJvbSAnLi9waXBlcy9jdXJyZW5jeS9jbi1jdXJyZW5jeS5waXBlJztcbmltcG9ydCB7IEtleXNQaXBlIH0gZnJvbSAnLi9waXBlcy9rZXlzL2tleXMucGlwZSc7XG5pbXBvcnQgeyBZTlBpcGUgfSBmcm9tICcuL3BpcGVzL3luL3luLnBpcGUnO1xuY29uc3QgUElQRVMgPSBbRGF0ZVBpcGUsIENOQ3VycmVuY3lQaXBlLCBLZXlzUGlwZSwgWU5QaXBlXTtcblxuLy8gZW5kcmVnaW9uXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgT3ZlcmxheU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLlBJUEVTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFMsIC4uLlBJUEVTLCBEZWxvbkxvY2FsZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFsYWluVGhlbWVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFsYWluVGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBXSU5ET1csIHVzZVZhbHVlOiB3aW5kb3cgfSxcbiAgICAgICAgeyBwcm92aWRlOiBBTEFJTl9JMThOX1RPS0VOLCB1c2VDbGFzczogQWxhaW5JMThOU2VydmljZUZha2UgfSxcbiAgICAgICAgLi4uSEVMUEVSUyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFsYWluVGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFsuLi5IRUxQRVJTXSxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBWZXJzaW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gbmV3IFZlcnNpb24oJzAuMC4wLVBMQUNFSE9MREVSJyk7XG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJCZWhhdmlvclN1YmplY3QiLCJmaWx0ZXIiLCJJbmplY3RhYmxlIiwic2hhcmUiLCJ0c2xpYl8xLl9fdmFsdWVzIiwiT3B0aW9uYWwiLCJJbmplY3QiLCJBQ0xTZXJ2aWNlIiwiRWxlbWVudFJlZiIsIkNvbm5lY3Rpb25Qb3NpdGlvblBhaXIiLCJUZW1wbGF0ZVJlZiIsIlRlbXBsYXRlUG9ydGFsIiwiQ29tcG9uZW50UG9ydGFsIiwiT3ZlcmxheSIsIkRPQ1VNRU5UIiwiU3ViamVjdCIsIkFjdGl2YXRlZFJvdXRlIiwiUm91dGVyIiwiSW5qZWN0b3IiLCJUaXRsZSIsIlNraXBTZWxmIiwiTmdNb2R1bGUiLCJPYnNlcnZhYmxlIiwiTnpNb2RhbFNlcnZpY2UiLCJOekRyYXdlclNlcnZpY2UiLCJIdHRwUGFyYW1zIiwidGFwIiwiY2F0Y2hFcnJvciIsInRocm93RXJyb3IiLCJIdHRwQ2xpZW50IiwiUGlwZSIsInRzbGliXzEuX19leHRlbmRzIiwiQ3VycmVuY3lQaXBlIiwiQ29tbW9uTW9kdWxlIiwiUm91dGVyTW9kdWxlIiwiT3ZlcmxheU1vZHVsZSIsIlZlcnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLFFBQWEsTUFBTSxHQUFHLElBQUlBLGlCQUFjLENBQUMsUUFBUSxDQUFDOzs7Ozs7Ozs7QUNGbEQ7O1FBQ0UsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7UUFDNUMsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsS0FB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