/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-ed90aa6
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@delon/acl'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/common'), require('@angular/router'), require('@angular/platform-browser'), require('ng-zorro-antd'), require('@angular/common/http'), require('date-fns/format'), require('date-fns/distance_in_words_to_now')) :
    typeof define === 'function' && define.amd ? define('@delon/theme', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@delon/acl', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/common', '@angular/router', '@angular/platform-browser', 'ng-zorro-antd', '@angular/common/http', 'date-fns/format', 'date-fns/distance_in_words_to_now'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.theme = {}),global.ng.core,global.rxjs,global.rxjs.operators,global.delon.acl,global.ng.cdk.overlay,global.ng.cdk.portal,global.ng.common,global.ng.router,global.ng.platformBrowser,global.ngZorro.antd,global.ng.common.http,global.format,global.distanceInWordsToNow));
}(this, (function (exports,i0,rxjs,operators,i2,i1,portal,i4,router,i1$1,i1$2,i1$3,format,distanceInWordsToNow) { 'use strict';

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
                { type: undefined, decorators: [{ type: i0.Inject, args: [i4.DOCUMENT,] }] }
            ];
        };
        /** @nocollapse */ ScrollService.ngInjectableDef = i0.defineInjectable({ factory: function ScrollService_Factory() { return new ScrollService(i0.inject(WINDOW), i0.inject(i4.DOCUMENT)); }, token: ScrollService, providedIn: "root" });
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
                { type: undefined, decorators: [{ type: i0.Inject, args: [i4.DOCUMENT,] }] }
            ];
        };
        /** @nocollapse */ TitleService.ngInjectableDef = i0.defineInjectable({ factory: function TitleService_Factory() { return new TitleService(i0.inject(i0.INJECTOR), i0.inject(i1$1.Title), i0.inject(MenuService), i0.inject(ALAIN_I18N_TOKEN, 8), i0.inject(i4.DOCUMENT)); }, token: TitleService, providedIn: "root" });
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
    }(i4.CurrencyPipe));

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
    var HELPERS = [ModalHelper];
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
                        imports: [i4.CommonModule, router.RouterModule, i1.OverlayModule],
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
    var VERSION = new i0.Version('2.0.0-beta.3-ed90aa6');

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3dpbl90b2tlbnMudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvcHJlbG9hZGVyL3ByZWxvYWRlci50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvaTE4bi9pMThuLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL21lbnUvbWVudS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL2NvbnRleHQtbWVudS9jb250ZXh0LW1lbnUuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9zY3JvbGwvc2Nyb2xsLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy90aGVtZS5jb25maWcudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvcmVzcG9uc2l2ZS9yZXNwb25zaXZlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL3RpdGxlL3RpdGxlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xvY2FsZS50b2tlbnMudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xhbmd1YWdlcy96aC1DTi50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9sb2NhbGUvbG9jYWxlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xvY2FsZS5tb2R1bGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xhbmd1YWdlcy9lbi1VUy50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9sb2NhbGUvbGFuZ3VhZ2VzL3poLVRXLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlci50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlci50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9odHRwL2h0dHAuY2xpZW50LnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3BpcGVzL2N1cnJlbmN5L2NuLWN1cnJlbmN5LnBpcGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvcGlwZXMva2V5cy9rZXlzLnBpcGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvcGlwZXMveW4veW4ucGlwZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy90aGVtZS5tb2R1bGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvdmVyc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdJTkRPVyA9IG5ldyBJbmplY3Rpb25Ub2tlbignV2luZG93Jyk7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkZXJGaW5pc2hlZCgpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gIGNvbnN0IHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXInKTtcclxuXHJcbiAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cclxuICBmdW5jdGlvbiByZW1vdmUoKSB7XHJcbiAgICAvLyBwcmVsb2FkZXIgdmFsdWUgbnVsbCB3aGVuIHJ1bm5pbmcgLS1obXJcclxuICAgIGlmICghcHJlbG9hZGVyKSByZXR1cm47XHJcbiAgICBwcmVsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBwcmVsb2FkZXIuY2xhc3NOYW1lID0gJ3ByZWxvYWRlci1oaWRkZW4nO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHJlbG9hZGVyLmNsYXNzTmFtZSArPSAnIHByZWxvYWRlci1oaWRkZW4tYWRkIHByZWxvYWRlci1oaWRkZW4tYWRkLWFjdGl2ZSc7XHJcbiAgfVxyXG5cclxuICAoPGFueT53aW5kb3cpLmFwcEJvb3RzdHJhcCA9ICgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByZW1vdmUoKTtcclxuICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgfSwgMTAwKTtcclxuICB9O1xyXG59XHJcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWxhaW5JMThOU2VydmljZSB7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG5cclxuICB1c2UobGFuZzogc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgZ2V0TGFuZ3MoKTogYW55W107XHJcblxyXG4gIGZhbnlpKGtleTogc3RyaW5nKTogYW55O1xyXG5cclxuICByZWFkb25seSBjaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFMQUlOX0kxOE5fVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWxhaW5JMThOU2VydmljZT4oXHJcbiAgJ2FsYWluVHJhbnNsYXRvclRva2VuJyxcclxuKTtcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBBbGFpbkkxOE5TZXJ2aWNlRmFrZSBpbXBsZW1lbnRzIEFsYWluSTE4TlNlcnZpY2Uge1xyXG4gIHByaXZhdGUgY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcclxuXHJcbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5hc09ic2VydmFibGUoKS5waXBlKGZpbHRlcih3ID0+IHcgIT0gbnVsbCkpO1xyXG4gIH1cclxuXHJcbiAgdXNlKGxhbmc6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2UkLm5leHQobGFuZyk7XHJcbiAgfVxyXG5cclxuICBnZXRMYW5ncygpOiBhbnlbXSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG5cclxuICBmYW55aShrZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGtleTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xyXG5cclxuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiwgQWxhaW5JMThOU2VydmljZSB9IGZyb20gJy4uL2kxOG4vaTE4bic7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgTWVudVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX2NoYW5nZSQ6IEJlaGF2aW9yU3ViamVjdDxNZW51W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxNZW51W10+KFtdKTtcclxuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHByaXZhdGUgZGF0YTogTWVudVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcclxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYWNsU2VydmljZTogQUNMU2VydmljZSxcclxuICApIHtcclxuICAgIGlmICh0aGlzLmkxOG5TcnYpXHJcbiAgICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlc3VtZSgpKTtcclxuICB9XHJcblxyXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxNZW51W10+IHtcclxuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UkLnBpcGUoc2hhcmUoKSk7XHJcbiAgfVxyXG5cclxuICB2aXNpdChjYWxsYmFjazogKGl0ZW06IE1lbnUsIHBhcmVudE1lbnVtOiBNZW51LCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCkge1xyXG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBNZW51W10sIHBhcmVudE1lbnU6IE1lbnUsIGRlcHRoOiBudW1iZXIpID0+IHtcclxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcclxuICAgICAgICBjYWxsYmFjayhpdGVtLCBwYXJlbnRNZW51LCBkZXB0aCk7XHJcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBpbkZuKGl0ZW0uY2hpbGRyZW4sIGl0ZW0sIGRlcHRoICsgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaW5Gbih0aGlzLmRhdGEsIG51bGwsIDApO1xyXG4gIH1cclxuXHJcbiAgYWRkKGl0ZW1zOiBNZW51W10pIHtcclxuICAgIHRoaXMuZGF0YSA9IGl0ZW1zO1xyXG4gICAgdGhpcy5yZXN1bWUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOpwofCjcOnwr3CrsOowo/CnMOlwo3ClcOvwrzCjMOlwo/Cr8OowoPCvUkxOE7Do8KAwoHDp8KUwqjDpsKIwrfDpsKdwoPDqcKZwpDDpcKPwpjDpcKKwqjDpsKXwrbDqcKcwoDDqMKmwoHDqMKwwoPDp8KUwqjDpcKIwrfDpsKWwrBcclxuICAgKi9cclxuICByZXN1bWUoY2FsbGJhY2s/OiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKSB7XHJcbiAgICBsZXQgaSA9IDE7XHJcbiAgICBjb25zdCBzaG9ydGN1dHM6IE1lbnVbXSA9IFtdO1xyXG4gICAgdGhpcy52aXNpdCgoaXRlbSwgcGFyZW50LCBkZXB0aCkgPT4ge1xyXG4gICAgICBpdGVtLl9faWQgPSBpKys7XHJcbiAgICAgIGl0ZW0uX19wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgIGl0ZW0uX2RlcHRoID0gZGVwdGg7XHJcblxyXG4gICAgICBpZiAoIWl0ZW0ubGluaykgaXRlbS5saW5rID0gJyc7XHJcbiAgICAgIGlmICh0eXBlb2YgaXRlbS5saW5rRXhhY3QgPT09ICd1bmRlZmluZWQnKSBpdGVtLmxpbmtFeGFjdCA9IGZhbHNlO1xyXG4gICAgICBpZiAoIWl0ZW0uZXh0ZXJuYWxMaW5rKSBpdGVtLmV4dGVybmFsTGluayA9ICcnO1xyXG5cclxuICAgICAgLy8gYmFkZ2VcclxuICAgICAgaWYgKGl0ZW0uYmFkZ2UpIHtcclxuICAgICAgICBpZiAoaXRlbS5iYWRnZURvdCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgaXRlbS5iYWRnZURvdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWl0ZW0uYmFkZ2VTdGF0dXMpIHtcclxuICAgICAgICAgIGl0ZW0uYmFkZ2VTdGF0dXMgPSAnZXJyb3InO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaXRlbS5fdHlwZSA9IGl0ZW0uZXh0ZXJuYWxMaW5rID8gMiA6IDE7XHJcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGl0ZW0uX3R5cGUgPSAzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzaG9ydGN1dFxyXG4gICAgICBpZiAocGFyZW50ICYmIGl0ZW0uc2hvcnRjdXQgPT09IHRydWUgJiYgcGFyZW50LnNob3J0Y3V0Um9vdCAhPT0gdHJ1ZSlcclxuICAgICAgICBzaG9ydGN1dHMucHVzaChpdGVtKTtcclxuXHJcbiAgICAgIGl0ZW0udGV4dCA9XHJcbiAgICAgICAgaXRlbS5pMThuICYmIHRoaXMuaTE4blNydiA/IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pIDogaXRlbS50ZXh0O1xyXG5cclxuICAgICAgLy8gZ3JvdXBcclxuICAgICAgaXRlbS5ncm91cCA9IHR5cGVvZiBpdGVtLmdyb3VwICE9PSAnYm9vbGVhbicgPyB0cnVlIDogaXRlbS5ncm91cDtcclxuXHJcbiAgICAgIC8vIGhpZGRlblxyXG4gICAgICBpdGVtLl9oaWRkZW4gPSB0eXBlb2YgaXRlbS5oaWRlID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogaXRlbS5oaWRlO1xyXG5cclxuICAgICAgLy8gYWNsXHJcbiAgICAgIGlmIChpdGVtLmFjbCAmJiB0aGlzLmFjbFNlcnZpY2UpIHtcclxuICAgICAgICBpdGVtLl9oaWRkZW4gPSAhdGhpcy5hY2xTZXJ2aWNlLmNhbihpdGVtLmFjbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soaXRlbSwgcGFyZW50LCBkZXB0aCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmxvYWRTaG9ydGN1dChzaG9ydGN1dHMpO1xyXG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpcKKwqDDqMK9wr3DpcK/wqvDpsKNwrfDqMKPwpzDpcKNwpXDr8K8wozDpcKKwqDDqMK9wr3DpMK9wo3Dp8K9wq7DqMKnwoTDpcKIwpnDpcKmwoLDpMK4wovDr8K8wppcclxuICAgKiAxw6PCgMKBw6fCu8Kfw6TCuMKAw6XCnMKow6TCuMKLw6bCoMKHMMOnwprChMOoworCgsOnwoLCucOkwrjCi8OvwrzCiMOlwo3Cs8OjwoDCkMOkwrjCu8Olwq/CvMOowojCqsOjwoDCkcOoworCgsOnwoLCucOkwrjCi8OmwpbCucOvwrzCiVxyXG4gICAqICAgICAgMcOjwoDCgcOowovCpSBjaGlsZHJlbiDDpcKtwpjDpcKcwqggw6PCgMKQc2hvcnRjdXRSb290OiB0cnVlw6PCgMKRw6XCiMKZw6bCnMKAw6TCvMKYw6XChcKIw6PCgMKQw6bCjsKow6jCjcKQw6PCgMKRw6jCv8KZw6fCp8KNw6bClsK5w6XCvMKPXHJcbiAgICogICAgICAyw6PCgMKBw6XCkMKmw6XCiMKZw6bCn8Klw6bCicK+w6XCuMKmw6bCnMKJw6PCgMKQZGFzaGJvYXJkw6PCgMKRw6XCrcKXw6bCoMK3w6nCk8K+w6bCjsKlw6/CvMKMw6jCi8Klw6XCrcKYw6XCnMKow6XCiMKZw6XCnMKow6bCrcKkw6jCj8Kcw6XCjcKVw6fCmsKEw6TCuMKLw6bClsK5w6XCiMKbw6XCu8K6w6XCv8Krw6bCjcK3w6XChcKlw6XCj8KjXHJcbiAgICogICAgICAzw6PCgMKBw6XCkMKmw6XCiMKZw6bClMK+w6XCnMKoMMOoworCgsOnwoLCucOkwr3CjcOnwr3CrlxyXG4gICAqL1xyXG4gIHByaXZhdGUgbG9hZFNob3J0Y3V0KHNob3J0Y3V0czogTWVudVtdKSB7XHJcbiAgICBpZiAoc2hvcnRjdXRzLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBscyA9IHRoaXMuZGF0YVswXS5jaGlsZHJlbjtcclxuICAgIGxldCBwb3MgPSBscy5maW5kSW5kZXgodyA9PiB3LnNob3J0Y3V0Um9vdCA9PT0gdHJ1ZSk7XHJcbiAgICBpZiAocG9zID09PSAtMSkge1xyXG4gICAgICBwb3MgPSBscy5maW5kSW5kZXgodyA9PiB3LmxpbmsuaW5jbHVkZXMoJ2Rhc2hib2FyZCcpKTtcclxuICAgICAgcG9zID0gKHBvcyAhPT0gLTEgPyBwb3MgOiAtMSkgKyAxO1xyXG4gICAgICBjb25zdCBzaG9ydGN1dE1lbnUgPSA8TWVudT57XHJcbiAgICAgICAgdGV4dDogJ8Olwr/Cq8Omwo3Ct8Oowo/CnMOlwo3ClScsXHJcbiAgICAgICAgaTE4bjogJ3Nob3J0Y3V0JyxcclxuICAgICAgICBpY29uOiAnaWNvbi1yb2NrZXQnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5kYXRhWzBdLmNoaWxkcmVuLnNwbGljZShwb3MsIDAsIHNob3J0Y3V0TWVudSk7XHJcbiAgICB9XHJcbiAgICBsZXQgX2RhdGEgPSB0aGlzLmRhdGFbMF0uY2hpbGRyZW5bcG9zXTtcclxuICAgIGlmIChfZGF0YS5pMThuICYmIHRoaXMuaTE4blNydikgX2RhdGEudGV4dCA9IHRoaXMuaTE4blNydi5mYW55aShfZGF0YS5pMThuKTtcclxuICAgIF9kYXRhID0gT2JqZWN0LmFzc2lnbihfZGF0YSwge1xyXG4gICAgICBzaG9ydGN1dFJvb3Q6IHRydWUsXHJcbiAgICAgIF90eXBlOiAzLFxyXG4gICAgICBfX2lkOiAtMSxcclxuICAgICAgX2RlcHRoOiAxLFxyXG4gICAgfSk7XHJcbiAgICBfZGF0YS5jaGlsZHJlbiA9IHNob3J0Y3V0cy5tYXAoaSA9PiB7XHJcbiAgICAgIGkuX2RlcHRoID0gMjtcclxuICAgICAgcmV0dXJuIGk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldCBtZW51cygpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpsK4woXDp8KpwrrDqMKPwpzDpcKNwpVcclxuICAgKi9cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpsKgwrnDpsKNwq5VUkzDqMKuwr7Dp8K9wq7DqMKPwpzDpcKNwpUgYF9vcGVuYCDDpcKxwp7DpsKAwqdcclxuICAgKiBAcGFyYW0gdXJsIFVSTMOlwpzCsMOlwp3CgFxyXG4gICAqL1xyXG4gIG9wZW5lZEJ5VXJsKHVybDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXVybCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBmaW5kSXRlbTogTWVudSA9IG51bGw7XHJcbiAgICB0aGlzLnZpc2l0KGl0ZW0gPT4ge1xyXG4gICAgICBpdGVtLl9vcGVuID0gZmFsc2U7XHJcbiAgICAgIGlmICghaXRlbS5saW5rKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghZmluZEl0ZW0gJiYgdXJsLnN0YXJ0c1dpdGgoaXRlbS5saW5rKSkge1xyXG4gICAgICAgIGZpbmRJdGVtID0gaXRlbTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWZpbmRJdGVtKSByZXR1cm47XHJcblxyXG4gICAgZG8ge1xyXG4gICAgICBmaW5kSXRlbS5fb3BlbiA9IHRydWU7XHJcbiAgICAgIGZpbmRJdGVtID0gZmluZEl0ZW0uX19wYXJlbnQ7XHJcbiAgICB9IHdoaWxlIChmaW5kSXRlbSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpsKgwrnDpsKNwq51cmzDqMKOwrfDpcKPwpbDqMKPwpzDpcKNwpXDpcKIwpfDqMKhwqhcclxuICAgKiBAcGFyYW0gdXJsXHJcbiAgICovXHJcbiAgZ2V0UGF0aEJ5VXJsKHVybDogc3RyaW5nKTogTWVudVtdIHtcclxuICAgIGxldCBpdGVtOiBNZW51ID0gbnVsbDtcclxuICAgIHRoaXMudmlzaXQoKGksIHBhcmVudCwgZGVwdGgpID0+IHtcclxuICAgICAgaWYgKGkubGluayA9PT0gdXJsKSB7XHJcbiAgICAgICAgaXRlbSA9IGk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJldDogTWVudVtdID0gW107XHJcbiAgICBpZiAoIWl0ZW0pIHJldHVybiByZXQ7XHJcblxyXG4gICAgZG8ge1xyXG4gICAgICByZXQuc3BsaWNlKDAsIDAsIGl0ZW0pO1xyXG4gICAgICBpdGVtID0gaXRlbS5fX3BhcmVudDtcclxuICAgIH0gd2hpbGUgKGl0ZW0pO1xyXG5cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NoYW5nZSQudW5zdWJzY3JpYmUoKTtcclxuICAgIGlmICh0aGlzLmkxOG4kKSB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgSW5qZWN0YWJsZSxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIEVsZW1lbnRSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgT3ZlcmxheSxcclxuICBPdmVybGF5UmVmLFxyXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXHJcbiAgT3ZlcmxheUNvbmZpZyxcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgVGVtcGxhdGVQb3J0YWwsXHJcbiAgQ29tcG9uZW50UG9ydGFsLFxyXG4gIENvbXBvbmVudFR5cGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcblxyXG5leHBvcnQgdHlwZSBDb250ZXh0TWVudVR5cGUgPSBUZW1wbGF0ZVJlZjx7fT4gfCBDb21wb25lbnRUeXBlPHt9PjtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVmOiBPdmVybGF5UmVmO1xyXG4gIHByaXZhdGUgdHlwZTogQ29udGV4dE1lbnVUeXBlO1xyXG4gIHByaXZhdGUgY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHt9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlKGV2ZW50OiBNb3VzZUV2ZW50LCBvcHRpb25zPzogT3ZlcmxheUNvbmZpZykge1xyXG4gICAgY29uc3QgZmFrZUVsZW1lbnQgPSBuZXcgRWxlbWVudFJlZih7XHJcbiAgICAgIGdldEJvdW5kaW5nQ2xpZW50UmVjdDogKCk6IENsaWVudFJlY3QgPT4gKHtcclxuICAgICAgICBib3R0b206IGV2ZW50LmNsaWVudFksXHJcbiAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgIGxlZnQ6IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgcmlnaHQ6IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgdG9wOiBldmVudC5jbGllbnRZLFxyXG4gICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICB9KSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xyXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcclxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sXHJcbiAgICAgICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0sXHJcbiAgICAgICksXHJcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxyXG4gICAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSxcclxuICAgICAgICB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSxcclxuICAgICAgKSxcclxuICAgIF07XHJcbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XHJcbiAgICAgIC5wb3NpdGlvbigpXHJcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKGZha2VFbGVtZW50KVxyXG4gICAgICAud2l0aFBvc2l0aW9ucyhwb3NpdGlvbnMpO1xyXG4gICAgdGhpcy5yZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKFxyXG4gICAgICBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgICAgICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcclxuICAgICAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5jbG9zZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9ucyxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgICBpZiAodGhpcy50eXBlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5yZWYuYXR0YWNoKG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLnR5cGUsIHRoaXMuY29udGFpbmVyUmVmKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbCh0aGlzLnR5cGUsIHRoaXMuY29udGFpbmVyUmVmKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XHJcbiAgfVxyXG5cclxuICBvcGVuKFxyXG4gICAgZXZlbnQ6IE1vdXNlRXZlbnQsXHJcbiAgICByZWY6IENvbnRleHRNZW51VHlwZSxcclxuICAgIGNvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIG9wdGlvbnM/OiBPdmVybGF5Q29uZmlnLFxyXG4gICk6IGZhbHNlIHtcclxuICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIHRoaXMudHlwZSA9IHJlZjtcclxuICAgIHRoaXMuY29udGFpbmVyUmVmID0gY29udGFpbmVyUmVmO1xyXG4gICAgdGhpcy5jcmVhdGUoZXZlbnQsIG9wdGlvbnMpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBpZiAoIXRoaXMucmVmKSByZXR1cm47XHJcbiAgICB0aGlzLnJlZi5kZXRhY2goKTtcclxuICAgIHRoaXMucmVmLmRpc3Bvc2UoKTtcclxuICAgIHRoaXMucmVmID0gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnLi4vLi4vd2luX3Rva2Vucyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgU2Nyb2xsU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSB3aW46IGFueSxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXHJcbiAgKSB7fVxyXG5cclxuICAvKipcclxuICAgKiDDqMKuwr7Dp8K9wq7DpsK7wprDpcKKwqjDpsKdwqHDqMKHwrPDpsKMwofDpcKuwprDpcKFwoPDp8K0wqBcclxuICAgKiBAcGFyYW0gZWxlbWVudCDDpsKMwofDpcKuwprDpcKFwoPDp8K0wqDDr8K8wozDqcK7wpjDqMKuwqQgYGRvY3VtZW50LmJvZHlgXHJcbiAgICogQHBhcmFtIHRvcE9mZnNldCDDpcKBwo/Dp8KnwrvDpcKAwrzDr8K8wozDqcK7wpjDqMKuwqQgYDBgXHJcbiAgICovXHJcbiAgc2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQ/OiBFbGVtZW50LCB0b3BPZmZzZXQgPSAwKSB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIGVsZW1lbnQgPSB0aGlzLmRvYy5ib2R5O1xyXG5cclxuICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcclxuXHJcbiAgICBjb25zdCB3ID0gdGhpcy53aW47XHJcbiAgICBpZiAodyAmJiB3LnNjcm9sbEJ5KSB7XHJcbiAgICAgIHcuc2Nyb2xsQnkoMCwgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0b3BPZmZzZXQpO1xyXG5cclxuICAgICAgaWYgKHcucGFnZVlPZmZzZXQgPCAyMCkge1xyXG4gICAgICAgIHcuc2Nyb2xsQnkoMCwgLXcucGFnZVlPZmZzZXQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpsK7wprDpcKKwqjDqMKHwrPDqcKhwrbDqcKDwqhcclxuICAgKiBAcGFyYW0gdG9wT2Zmc2V0IMOlwoHCj8OnwqfCu8OlwoDCvMOvwrzCjMOpwrvCmMOowq7CpCBgMGBcclxuICAgKi9cclxuICBzY3JvbGxUb1RvcCh0b3BPZmZzZXQgPSAwKSB7XHJcbiAgICB0aGlzLnNjcm9sbFRvRWxlbWVudCh0aGlzLmRvYy5ib2R5LCB0b3BPZmZzZXQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQXBwLCBMYXlvdXQsIFVzZXIsIFNldHRpbmdzTm90aWZ5IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuY29uc3QgTEFZT1VUX0tFWSA9ICdsYXlvdXQnO1xyXG5jb25zdCBVU0VSX0tFWSA9ICd1c2VyJztcclxuY29uc3QgQVBQX0tFWSA9ICdhcHAnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBub3RpZnkkID0gbmV3IFN1YmplY3Q8U2V0dGluZ3NOb3RpZnk+KCk7XHJcbiAgcHJpdmF0ZSBfYXBwOiBBcHAgPSBudWxsO1xyXG4gIHByaXZhdGUgX3VzZXI6IFVzZXIgPSBudWxsO1xyXG4gIHByaXZhdGUgX2xheW91dDogTGF5b3V0ID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBnZXQoa2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgJ251bGwnKSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICB9XHJcblxyXG4gIGdldCBsYXlvdXQoKTogTGF5b3V0IHtcclxuICAgIGlmICghdGhpcy5fbGF5b3V0KSB7XHJcbiAgICAgIHRoaXMuX2xheW91dCA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAgPExheW91dD57XHJcbiAgICAgICAgICBmaXhlZDogdHJ1ZSxcclxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXHJcbiAgICAgICAgICBib3hlZDogZmFsc2UsXHJcbiAgICAgICAgICBsYW5nOiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhpcy5nZXQoTEFZT1VUX0tFWSksXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0KExBWU9VVF9LRVksIHRoaXMuX2xheW91dCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFwcCgpOiBBcHAge1xyXG4gICAgaWYgKCF0aGlzLl9hcHApIHtcclxuICAgICAgdGhpcy5fYXBwID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgICA8QXBwPntcclxuICAgICAgICAgIHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRoaXMuZ2V0KEFQUF9LRVkpLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldChBUFBfS0VZLCB0aGlzLl9hcHApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2FwcDtcclxuICB9XHJcblxyXG4gIGdldCB1c2VyKCk6IFVzZXIge1xyXG4gICAgaWYgKCF0aGlzLl91c2VyKSB7XHJcbiAgICAgIHRoaXMuX3VzZXIgPSBPYmplY3QuYXNzaWduKDxVc2VyPnt9LCB0aGlzLmdldChVU0VSX0tFWSkpO1xyXG4gICAgICB0aGlzLnNldChVU0VSX0tFWSwgdGhpcy5fdXNlcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fdXNlcjtcclxuICB9XHJcblxyXG4gIGdldCBub3RpZnkoKTogT2JzZXJ2YWJsZTxTZXR0aW5nc05vdGlmeT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5JC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHNldExheW91dChuYW1lOiBzdHJpbmcgfCBMYXlvdXQsIHZhbHVlPzogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMubGF5b3V0W25hbWVdID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9sYXlvdXQgPSBuYW1lO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXQoTEFZT1VUX0tFWSwgdGhpcy5fbGF5b3V0KTtcclxuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ2xheW91dCcsIG5hbWUsIHZhbHVlIH0gYXMgYW55KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0QXBwKHZhbHVlOiBBcHApIHtcclxuICAgIHRoaXMuX2FwcCA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXQoQVBQX0tFWSwgdmFsdWUpO1xyXG4gICAgdGhpcy5ub3RpZnkkLm5leHQoeyB0eXBlOiAnYXBwJywgdmFsdWUgfSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNldFVzZXIodmFsdWU6IFVzZXIpIHtcclxuICAgIHRoaXMuX3VzZXIgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2V0KFVTRVJfS0VZLCB2YWx1ZSk7XHJcbiAgICB0aGlzLm5vdGlmeSQubmV4dCh7IHR5cGU6ICd1c2VyJywgdmFsdWUgfSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50Q29uZmlnIH0gZnJvbSAnLi9zZXJ2aWNlcy9odHRwL2h0dHAuY29uZmlnJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZUNvbmZpZyB9IGZyb20gJy4vc2VydmljZXMvcmVzcG9uc2l2ZS9yZXNwb25zaXZlLmNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQWxhaW5UaGVtZUNvbmZpZyB7XHJcbiAgaHR0cD86IEh0dHBDbGllbnRDb25maWc7XHJcbiAgcmVzcG9uc2l2ZT86IFJlc3BvbnNpdmVDb25maWc7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbGFpblRoZW1lQ29uZmlnIH0gZnJvbSAnLi4vLi4vdGhlbWUuY29uZmlnJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZUNvbmZpZyB9IGZyb20gJy4vcmVzcG9uc2l2ZS5jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFUF9NQVggPSA2O1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFJlc3BvbnNpdmVTZXJ2aWNlIHtcclxuICBwcml2YXRlIGNvZzogUmVzcG9uc2l2ZUNvbmZpZztcclxuICBjb25zdHJ1Y3Rvcihjb2c6IEFsYWluVGhlbWVDb25maWcpIHtcclxuICAgIHRoaXMuY29nID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgPFJlc3BvbnNpdmVDb25maWc+e1xyXG4gICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAxOiB7IHhzOiAyNCB9LFxyXG4gICAgICAgICAgMjogeyB4czogMjQsIHNtOiAxMiB9LFxyXG4gICAgICAgICAgMzogeyB4czogMjQsIHNtOiAxMiwgbWQ6IDggfSxcclxuICAgICAgICAgIDQ6IHsgeHM6IDI0LCBzbTogMTIsIG1kOiA4LCBsZzogNiB9LFxyXG4gICAgICAgICAgNTogeyB4czogMjQsIHNtOiAxMiwgbWQ6IDgsIGxnOiA2LCB4bDogNCB9LFxyXG4gICAgICAgICAgNjogeyB4czogMjQsIHNtOiAxMiwgbWQ6IDgsIGxnOiA2LCB4bDogNCwgeHhsOiAyIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgY29nIS5yZXNwb25zaXZlLFxyXG4gICAgKTtcclxuICAgIGlmIChcclxuICAgICAgT2JqZWN0LmtleXModGhpcy5jb2cucnVsZXMpXHJcbiAgICAgICAgLm1hcChpID0+ICtpKVxyXG4gICAgICAgIC5zb21lKChpOiBudW1iZXIpID0+IGkgPCAxIHx8IGkgPiBSRVBfTUFYKVxyXG4gICAgKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBgW3RoZW1lXSB0aGUgcmVzcG9uc2VpdmUgcnVsZSBpbmRleCB2YWx1ZSByYW5nZSBtdXN0IGJlIDEtJHtSRVBfTUFYfWAsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZW5DbHMoY291bnQ6IG51bWJlcik6IHN0cmluZ1tdIHtcclxuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmNvZy5ydWxlc1tjb3VudCA+IFJFUF9NQVggPyBSRVBfTUFYIDogTWF0aC5tYXgoY291bnQsIDEpXTtcclxuICAgIGNvbnN0IGFudENvbENsYXNzID0gJ2FudC1jb2wnO1xyXG4gICAgY29uc3QgY2xzTWFwID0gW2Ake2FudENvbENsYXNzfS14cy0ke3J1bGUueHN9YF07XHJcbiAgICBpZiAocnVsZS5zbSkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LXNtLSR7cnVsZS5zbX1gKTtcclxuICAgIGlmIChydWxlLm1kKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30tbWQtJHtydWxlLm1kfWApO1xyXG4gICAgaWYgKHJ1bGUubGcpIGNsc01hcC5wdXNoKGAke2FudENvbENsYXNzfS1sZy0ke3J1bGUubGd9YCk7XHJcbiAgICBpZiAocnVsZS54bCkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LXhsLSR7cnVsZS54bH1gKTtcclxuICAgIGlmIChydWxlLnh4bCkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LXh4bC0ke3J1bGUueHhsfWApO1xyXG4gICAgcmV0dXJuIGNsc01hcDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBJbmplY3RhYmxlLFxyXG4gIEluamVjdCxcclxuICBPcHRpb25hbCxcclxuICBJbmplY3RvcixcclxuICBPbkRlc3Ryb3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuLi9tZW51L21lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2UgfSBmcm9tICcuLi9pMThuL2kxOG4nO1xyXG5cclxuLyoqXHJcbiAqIMOowq7CvsOnwr3CrsOmwqDCh8OpwqLCmFxyXG4gKiBAc2VlIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3Mvc2VydmljZSNUaXRsZVNlcnZpY2VcclxuICovXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBUaXRsZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX3ByZWZpeCA9ICcnO1xyXG4gIHByaXZhdGUgX3N1ZmZpeCA9ICcnO1xyXG4gIHByaXZhdGUgX3NlcGFyYXRvciA9ICcgLSAnO1xyXG4gIHByaXZhdGUgX3JldmVyc2UgPSBmYWxzZTtcclxuICBwcml2YXRlIF9kZWZhdWx0ID0gJ05vdCBQYWdlIE5hbWUnO1xyXG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgdGl0bGU6IFRpdGxlLFxyXG4gICAgcHJpdmF0ZSBtZW51U3J2OiBNZW51U2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXHJcbiAgICBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxyXG4gICkge1xyXG4gICAgaWYgKHRoaXMuaTE4blNydilcclxuICAgICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4blNydi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0VGl0bGUoKSk7XHJcbiAgfVxyXG5cclxuICAvKiogw6jCrsK+w6fCvcKuw6XCiMKGw6nCmsKUw6fCrMKmICovXHJcbiAgc2V0IHNlcGFyYXRvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9zZXBhcmF0b3IgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiDDqMKuwr7Dp8K9wq7DpcKJwo3Dp8K8woAgKi9cclxuICBzZXQgcHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3ByZWZpeCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIMOowq7CvsOnwr3CrsOlwpDCjsOnwrzCgCAqL1xyXG4gIHNldCBzdWZmaXgodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc3VmZml4ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiogw6jCrsK+w6fCvcKuw6bCmMKvw6XCkMKmw6XCj8KNw6jCvcKsICovXHJcbiAgc2V0IHJldmVyc2UodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3JldmVyc2UgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiDDqMKuwr7Dp8K9wq7DqcK7wpjDqMKuwqTDpsKgwofDqcKiwpjDpcKQwo0gKi9cclxuICBzZXQgZGVmYXVsdCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9kZWZhdWx0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEJ5RWxlbWVudCgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgZWwgPVxyXG4gICAgICB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCcuYWxhaW4tZGVmYXVsdF9fY29udGVudC10aXRsZSBoMScpIHx8XHJcbiAgICAgIHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlYWRlcl9fdGl0bGUnKTtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICByZXR1cm4gZWwuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEJ5Um91dGUoKTogc3RyaW5nIHtcclxuICAgIGxldCBuZXh0ID0gdGhpcy5pbmplY3Rvci5nZXQoQWN0aXZhdGVkUm91dGUpO1xyXG4gICAgd2hpbGUgKG5leHQuZmlyc3RDaGlsZCkgbmV4dCA9IG5leHQuZmlyc3RDaGlsZDtcclxuICAgIGNvbnN0IGRhdGEgPSAobmV4dC5zbmFwc2hvdCAmJiBuZXh0LnNuYXBzaG90LmRhdGEpIHx8IHt9O1xyXG4gICAgaWYgKGRhdGEudGl0bGVJMThuICYmIHRoaXMuaTE4blNydilcclxuICAgICAgZGF0YS50aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShkYXRhLnRpdGxlSTE4bik7XHJcbiAgICByZXR1cm4gZGF0YS50aXRsZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QnlNZW51KCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBtZW51cyA9IHRoaXMubWVudVNydi5nZXRQYXRoQnlVcmwodGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKS51cmwpO1xyXG4gICAgaWYgKCFtZW51cyB8fCBtZW51cy5sZW5ndGggPD0gMCkgcmV0dXJuICcnO1xyXG5cclxuICAgIGNvbnN0IGl0ZW0gPSBtZW51c1ttZW51cy5sZW5ndGggLSAxXTtcclxuICAgIGxldCB0aXRsZTtcclxuICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB0aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xyXG4gICAgcmV0dXJuIHRpdGxlIHx8IGl0ZW0udGV4dDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowq7CvsOnwr3CrsOmwqDCh8OpwqLCmFxyXG4gICAqL1xyXG4gIHNldFRpdGxlKHRpdGxlPzogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuICAgIGlmICghdGl0bGUpIHtcclxuICAgICAgdGl0bGUgPVxyXG4gICAgICAgIHRoaXMuZ2V0QnlSb3V0ZSgpIHx8XHJcbiAgICAgICAgdGhpcy5nZXRCeU1lbnUoKSB8fFxyXG4gICAgICAgIHRoaXMuZ2V0QnlFbGVtZW50KCkgfHxcclxuICAgICAgICB0aGlzLl9kZWZhdWx0O1xyXG4gICAgfVxyXG4gICAgaWYgKHRpdGxlICYmICFBcnJheS5pc0FycmF5KHRpdGxlKSkge1xyXG4gICAgICB0aXRsZSA9IFt0aXRsZV07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5ld1RpdGxlcyA9IFtdO1xyXG4gICAgaWYgKHRoaXMuX3ByZWZpeCkge1xyXG4gICAgICBuZXdUaXRsZXMucHVzaCh0aGlzLl9wcmVmaXgpO1xyXG4gICAgfVxyXG4gICAgbmV3VGl0bGVzLnB1c2goLi4uKHRpdGxlIGFzIHN0cmluZ1tdKSk7XHJcbiAgICBpZiAodGhpcy5fc3VmZml4KSB7XHJcbiAgICAgIG5ld1RpdGxlcy5wdXNoKHRoaXMuX3N1ZmZpeCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fcmV2ZXJzZSkge1xyXG4gICAgICBuZXdUaXRsZXMgPSBuZXdUaXRsZXMucmV2ZXJzZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50aXRsZS5zZXRUaXRsZShuZXdUaXRsZXMuam9pbih0aGlzLl9zZXBhcmF0b3IpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaTE4biQpIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBERUxPTl9MT0NBTEUgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignZGVsb24tbG9jYWxlJyk7XHJcbiIsImltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUudHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgPExvY2FsZURhdGE+e1xyXG4gIGFiYnI6ICd6aC1DTicsXHJcbiAgZXhjZXB0aW9uOiB7XHJcbiAgICA0MDM6ICfDpsKKwrHDpsKtwonDr8K8wozDpMK9wqDDpsKXwqDDpsKdwoPDqMKuwr/DqcKXwq7DqMKvwqXDqcKhwrXDqcKdwqInLFxyXG4gICAgNDA0OiAnw6bCisKxw6bCrcKJw6/CvMKMw6TCvcKgw6jCrsK/w6nCl8Kuw6fCmsKEw6nCocK1w6nCncKiw6TCuMKNw6XCrcKYw6XCnMKoJyxcclxuICAgIDUwMDogJ8OmworCscOmwq3CicOvwrzCjMOmwpzCjcOlworCocOlwpnCqMOlwofCusOpwpTCmcOkwrrChicsXHJcbiAgICBiYWNrVG9Ib21lOiAnw6jCv8KUw6XCm8Kew6nCpsKWw6nCocK1JyxcclxuICB9LFxyXG4gIG5vdGljZUljb246IHtcclxuICAgIGVtcHR5VGV4dDogJ8OmwprCgsOmwpfCoMOmwpXCsMOmwo3CricsXHJcbiAgICBjbGVhclRleHQ6ICfDpsK4woXDp8KpwronLFxyXG4gIH0sXHJcbiAgcmV1c2VUYWI6IHtcclxuICAgIGNsb3NlOiAnw6XChcKzw6nCl8Ktw6bCoMKHw6fCrcK+JyxcclxuICAgIGNsb3NlT3RoZXI6ICfDpcKFwrPDqcKXwq3DpcKFwrbDpcKuwoPDpsKgwofDp8Ktwr4nLFxyXG4gICAgY2xvc2VSaWdodDogJ8OlwoXCs8OpwpfCrcOlwo/Cs8Okwr7Cp8OmwqDCh8Onwq3CvicsXHJcbiAgICBjbGVhcjogJ8OmwrjChcOnwqnCuicsXHJcbiAgfSxcclxuICB0YWdTZWxlY3Q6IHtcclxuICAgIGV4cGFuZDogJ8OlwrHClcOlwrzCgCcsXHJcbiAgICBjb2xsYXBzZTogJ8OmwpTCtsOowrXCtycsXHJcbiAgfSxcclxuICBtaW5pUHJvZ3Jlc3M6IHtcclxuICAgIHRhcmdldDogJ8OnwpvCrsOmwqDCh8OlwoDCvMOvwrzCmidcclxuICB9LFxyXG4gIHNmOiB7XHJcbiAgICBzdWJtaXQ6ICfDpsKPwpDDpMK6wqQnLFxyXG4gICAgcmVzZXQ6ICfDqcKHwo3Dp8K9wq4nLFxyXG4gICAgc2VhcmNoOiAnw6bCkMKcw6fCtMKiJyxcclxuICAgIGVkaXQ6ICfDpMK/wp3DpcKtwpgnLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgUHJvdmlkZXIsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuL2xvY2FsZS50eXBlcyc7XHJcbmltcG9ydCB7IERFTE9OX0xPQ0FMRSB9IGZyb20gJy4vbG9jYWxlLnRva2Vucyc7XHJcbmltcG9ydCB6aENOIGZyb20gJy4vbGFuZ3VhZ2VzL3poLUNOJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERlbG9uTG9jYWxlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfbG9jYWxlOiBMb2NhbGVEYXRhO1xyXG4gIHByaXZhdGUgY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TG9jYWxlRGF0YT4odGhpcy5fbG9jYWxlKTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChERUxPTl9MT0NBTEUpIGxvY2FsZTogTG9jYWxlRGF0YSkge1xyXG4gICAgdGhpcy5zZXRMb2NhbGUobG9jYWxlIHx8IHpoQ04pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPExvY2FsZURhdGE+IHtcclxuICAgIHJldHVybiB0aGlzLmNoYW5nZSQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRMb2NhbGUobG9jYWxlOiBMb2NhbGVEYXRhKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fbG9jYWxlICYmIHRoaXMuX2xvY2FsZS5hYmJyID09PSBsb2NhbGUuYWJicikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9sb2NhbGUgPSBsb2NhbGU7XHJcbiAgICB0aGlzLmNoYW5nZSQubmV4dChsb2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxvY2FsZSgpOiBMb2NhbGVEYXRhIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKHBhdGg6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZVtwYXRoXSB8fCB7fTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZKGV4aXN0OiBEZWxvbkxvY2FsZVNlcnZpY2UsIGxvY2FsZTogTG9jYWxlRGF0YSk6IERlbG9uTG9jYWxlU2VydmljZSB7XHJcbiAgcmV0dXJuIGV4aXN0IHx8IG5ldyBEZWxvbkxvY2FsZVNlcnZpY2UobG9jYWxlKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSOiBQcm92aWRlciA9IHtcclxuICBwcm92aWRlICAgOiBEZWxvbkxvY2FsZVNlcnZpY2UsXHJcbiAgdXNlRmFjdG9yeTogREVMT05fTE9DQUxFX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWSxcclxuICBkZXBzICAgICAgOiBbIFsgbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBEZWxvbkxvY2FsZVNlcnZpY2UgXSwgREVMT05fTE9DQUxFIF1cclxufTtcclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB6aENOIGZyb20gJy4vbGFuZ3VhZ2VzL3poLUNOJztcclxuXHJcbmltcG9ydCB7IERFTE9OX0xPQ0FMRSB9IGZyb20gJy4vbG9jYWxlLnRva2Vucyc7XHJcbmltcG9ydCB7IERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSIH0gZnJvbSAnLi9sb2NhbGUuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgeyBwcm92aWRlOiBERUxPTl9MT0NBTEUsIHVzZVZhbHVlOiB6aENOIH0sXHJcbiAgICBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUixcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVsb25Mb2NhbGVNb2R1bGUge31cclxuIiwiaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS50eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCA8TG9jYWxlRGF0YT57XHJcbiAgYWJicjogJ2VuLVVTJyxcclxuICBleGNlcHRpb246IHtcclxuICAgIDQwMzogYFNvcnJ5LCB5b3UgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gdGhpcyBwYWdlYCxcclxuICAgIDQwNDogYFNvcnJ5LCB0aGF0IHBhZ2UgZG9uJ3QgZXhpc3RgLFxyXG4gICAgNTAwOiBgU29ycnksIHNlcnZlciBlcnJvcmAsXHJcbiAgICBiYWNrVG9Ib21lOiAnQmFjayBUbyBIb21lJyxcclxuICB9LFxyXG4gIG5vdGljZUljb246IHtcclxuICAgIGVtcHR5VGV4dDogJ05vIGRhdGEnLFxyXG4gICAgY2xlYXJUZXh0OiAnQ2xlYXInLFxyXG4gIH0sXHJcbiAgcmV1c2VUYWI6IHtcclxuICAgIGNsb3NlOiAnQ2xvc2UgdGFiJyxcclxuICAgIGNsb3NlT3RoZXI6ICdDbG9zZSBvdGhlciB0YWJzJyxcclxuICAgIGNsb3NlUmlnaHQ6ICdDbG9zZSB0YWJzIHRvIHJpZ2h0JyxcclxuICAgIGNsZWFyOiAnQ2xlYXIgdGFicycsXHJcbiAgfSxcclxuICB0YWdTZWxlY3Q6IHtcclxuICAgIGV4cGFuZDogJ0V4cGFuZCcsXHJcbiAgICBjb2xsYXBzZTogJ0NvbGxhcHNlJyxcclxuICB9LFxyXG4gIG1pbmlQcm9ncmVzczoge1xyXG4gICAgdGFyZ2V0OiAnVGFyZ2V0OiAnLFxyXG4gIH0sXHJcbiAgc2Y6IHtcclxuICAgIHN1Ym1pdDogJ1N1Ym1pdCcsXHJcbiAgICByZXNldDogJ1Jlc2V0JyxcclxuICAgIHNlYXJjaDogJ1NlYXJjaCcsXHJcbiAgICBlZGl0OiAnU2F2ZScsXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS50eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCA8TG9jYWxlRGF0YT57XHJcbiAgYWJicjogJ3poLVRXJyxcclxuICBleGNlcHRpb246IHtcclxuICAgIDQwMzogJ8OmworCscOmwq3CicOvwrzCjMOlwqbCs8OnwoTCocOmwqzCisOowqjCqsOlwpXCj8OowqnCssOpwqDCgcOpwp3CoicsXHJcbiAgICA0MDQ6ICfDpsKKwrHDpsKtwonDr8K8wozDpcKmwrPDqMKowqrDpcKVwo/Dp8KawoTDqcKgwoHDqcKdwqLDpMK4wo3DpcKtwpjDpcKcwqgnLFxyXG4gICAgNTAwOiAnw6bCisKxw6bCrcKJw6/CvMKMw6bCnMKNw6XCi8KZw6XCmcKow6XCh8K6w6nCjMKvw6TCusKGJyxcclxuICAgIGJhY2tUb0hvbWU6ICfDqMK/wpTDpcKbwp7DqcKmwpbDqcKgwoEnLFxyXG4gIH0sXHJcbiAgbm90aWNlSWNvbjoge1xyXG4gICAgZW1wdHlUZXh0OiAnw6bCmsKrw6fChMKhw6bClcK4w6bCk8KaJyxcclxuICAgIGNsZWFyVGV4dDogJ8OmwrjChcOnwqnCuicsXHJcbiAgfSxcclxuICByZXVzZVRhYjoge1xyXG4gICAgY2xvc2U6ICfDqcKXwpzDqcKWwonDpsKowpnDp8Kwwr0nLFxyXG4gICAgY2xvc2VPdGhlcjogJ8OpwpfCnMOpwpbCicOlwoXCtsOlwq7Cg8OmwqjCmcOnwrDCvScsXHJcbiAgICBjbG9zZVJpZ2h0OiAnw6nCl8Kcw6nClsKJw6XCj8Kzw6XCgcK0w6bCqMKZw6fCsMK9JyxcclxuICAgIGNsZWFyOiAnw6bCuMKFw6fCqcK6JyxcclxuICB9LFxyXG4gIHRhZ1NlbGVjdDoge1xyXG4gICAgZXhwYW5kOiAnw6XCscKVw6nClsKLJyxcclxuICAgIGNvbGxhcHNlOiAnw6bClMK2w6jCtcK3JyxcclxuICB9LFxyXG4gIG1pbmlQcm9ncmVzczoge1xyXG4gICAgdGFyZ2V0OiAnw6fCm8Kuw6bCqMKZw6XCgMK8w6/CvMKaJyxcclxuICB9LFxyXG4gIHNmOiB7XHJcbiAgICBzdWJtaXQ6ICfDpsKPwpDDpMK6wqQnLFxyXG4gICAgcmVzZXQ6ICfDqcKHwo3Dp8K9wq4nLFxyXG4gICAgc2VhcmNoOiAnw6bCkMKcw6fCtMKiJyxcclxuICAgIGVkaXQ6ICfDpMK/wp3DpcKtwpgnLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpNb2RhbFNlcnZpY2UsIE1vZGFsT3B0aW9uc0ZvclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxIZWxwZXJPcHRpb25zIHtcclxuICAvKiogw6XCpMKnw6XCsMKPw6/CvMKbw6TCvsKLw6XCpsKCw6/CvMKabGfDo8KAwoE2MDDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgbGdgICovXHJcbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlcjtcclxuICAvKiogw6XCr8K5w6jCr8Kdw6bCocKGIFtNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlXShodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9jb21wb25lbnRzL21vZGFsL256LW1vZGFsLnR5cGUudHMpIMOlwo/CgsOmwpXCsCAqL1xyXG4gIG1vZGFsT3B0aW9ucz86IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U7XHJcbiAgLyoqIMOmwpjCr8OlwpDCpsOnwrLCvsOlwofChsOvwrzCiMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYMOvwrzCicOvwrzCjMOowovCpcOowr/ClMOlwpvCnsOlwoDCvMOpwp3CnsOnwqnCusOlwoDCvMOvwrzCiGBudWxsYMOmwojClmB1bmRlZmluZWRgw6/CvMKJw6jCp8KGw6TCuMK6w6bCiMKQw6XCisKfw6/CvMKMw6XCkMKmw6XCiMKZw6jCp8KGw6TCuMK6w6nClMKZw6jCr8KvICovXHJcbiAgZXhhY3Q/OiBib29sZWFuO1xyXG4gIC8qKiDDpsKYwq/DpcKQwqbDpcKMwoXDqMKjwrnDpsKgwofDp8Ktwr7DqcKhwrXDr8K8wozDpMK/wq7DpcKkwo3DpsKowqHDpsKAwoHDpcKMwoXDpcKQwqvDpsKgwofDp8Ktwr7DqcKXwrTDqMK3wp3DqcKXwq7DqcKiwpggKi9cclxuICBpbmNsdWRlVGFicz86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDDpcKvwrnDqMKvwp3DpsKhwobDqMK+woXDpcKKwqnDp8KxwrtcclxuICovXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbEhlbHBlciB7XHJcbiAgcHJpdmF0ZSB6SW5kZXggPSA1MDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBOek1vZGFsU2VydmljZSkge31cclxuXHJcbiAgLyoqXHJcbiAgICogw6bCnsKEw6XCu8K6w6TCuMKAw6TCuMKqw6XCr8K5w6jCr8Kdw6bCocKGXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29tcCDDp8K7woTDpMK7wrZcclxuICAgKiBAcGFyYW0gcGFyYW1zIMOnwrvChMOkwrvCtsOlwo/CgsOmwpXCsFxyXG4gICAqIEBwYXJhbSBvcHRpb25zIMOpwqLCncOlwqTClsOlwo/CgsOmwpXCsFxyXG4gICAqXHJcbiAgICogw6fCpMK6w6TCvsKLw6/CvMKaXHJcbiAgYGBgdHNcclxudGhpcy5tb2RhbEhlbHBlci5jcmVhdGUoRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcclxuLy8gw6XCr8K5w6TCusKOw6fCu8KEw6TCu8K2w6fCmsKEw6bCiMKQw6XCisKfJsOlwoXCs8OpwpfCrcOnwprChMOlwqTChMOnwpDChsOowq/CtMOmwpjCjlxyXG4vLyDDpsKIwpDDpcKKwp9cclxudGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xyXG50aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcclxuLy8gw6XChcKzw6nCl8KtXHJcbnRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XHJcbmBgYFxyXG4gICAqL1xyXG4gIGNyZWF0ZShcclxuICAgIGNvbXA6IGFueSxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM/OiBNb2RhbEhlbHBlck9wdGlvbnNcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICBzaXplOiAnbGcnLFxyXG4gICAgICBleGFjdDogdHJ1ZSxcclxuICAgICAgaW5jbHVkZVRhYnM6IGZhbHNlLFxyXG4gICAgfSwgb3B0aW9ucyk7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XHJcbiAgICAgIGxldCBjbHMgPSAnJyxcclxuICAgICAgICB3aWR0aCA9ICcnO1xyXG4gICAgICBpZiAob3B0aW9ucy5zaXplKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNpemUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICB3aWR0aCA9IGAke29wdGlvbnMuc2l6ZX1weGA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNscyA9IGBtb2RhbC0ke29wdGlvbnMuc2l6ZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAob3B0aW9ucy5pbmNsdWRlVGFicykge1xyXG4gICAgICAgIGNscyArPSAnIG1vZGFsLWluY2x1ZGUtdGFicyc7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2UgPSB7XHJcbiAgICAgICAgbnpXcmFwQ2xhc3NOYW1lOiBjbHMsXHJcbiAgICAgICAgbnpDb250ZW50OiBjb21wLFxyXG4gICAgICAgIG56V2lkdGg6IHdpZHRoID8gd2lkdGggOiB1bmRlZmluZWQsXHJcbiAgICAgICAgbnpGb290ZXI6IG51bGwsXHJcbiAgICAgICAgbnpDb21wb25lbnRQYXJhbXM6IHBhcmFtcyxcclxuICAgICAgICBuelpJbmRleDogKyt0aGlzLnpJbmRleCxcclxuICAgICAgfTtcclxuICAgICAgY29uc3Qgc3ViamVjdCA9IHRoaXMuc3J2LmNyZWF0ZShcclxuICAgICAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zLm1vZGFsT3B0aW9ucyksXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGFmdGVyQ2xvc2UkID0gc3ViamVjdC5hZnRlckNsb3NlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAob3B0aW9ucy5leGFjdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgaWYgKHJlcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgIGFmdGVyQ2xvc2UkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpsKewoTDpcK7wrrDqcKdwpnDpsKAwoHDpsKhwobDr8K8wozDp8KCwrnDpcKHwrvDqMKSwpnDpcKxwoLDpMK4wo3DpcKFwoHDqMKuwrjDpcKFwrPDqcKXwq1cclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb21wIMOnwrvChMOkwrvCtlxyXG4gICAqIEBwYXJhbSBwYXJhbXMgw6fCu8KEw6TCu8K2w6XCj8KCw6bClcKwXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgw6nCosKdw6XCpMKWw6XCj8KCw6bClcKwXHJcbiAgICpcclxuICAgKiDDp8KkwrrDpMK+wovDr8K8wppcclxuICBgYGB0c1xyXG50aGlzLm1vZGFsSGVscGVyLm9wZW4oRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcclxuLy8gw6XCr8K5w6TCusKOw6fCu8KEw6TCu8K2w6fCmsKEw6bCiMKQw6XCisKfJsOlwoXCs8OpwpfCrcOnwprChMOlwqTChMOnwpDChsOowq/CtMOmwpjCjlxyXG4vLyDDpsKIwpDDpcKKwp9cclxudGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xyXG50aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcclxuLy8gw6XChcKzw6nCl8KtXHJcbnRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XHJcbmBgYFxyXG4gICAqL1xyXG4gIGNyZWF0ZVN0YXRpYyhcclxuICAgIGNvbXA6IGFueSxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM/OiBNb2RhbEhlbHBlck9wdGlvbnNcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgbW9kYWxPcHRpb25zID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgeyBuek1hc2tDbG9zYWJsZTogZmFsc2UgfSxcclxuICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLm1vZGFsT3B0aW9ucyxcclxuICAgICk7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoY29tcCwgcGFyYW1zLCBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7IG1vZGFsT3B0aW9ucyB9KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpsKJwpPDpcK8woDDpcKvwrnDqMKvwp3DpsKhwoZcclxuICAgKiBAcGFyYW0gY29tcCDDp8K7woTDpMK7wrZcclxuICAgKiBAcGFyYW0gcGFyYW1zIMOnwrvChMOkwrvCtsOlwo/CgsOmwpXCsFxyXG4gICAqIEBwYXJhbSBzaXplIMOlwqTCp8OlwrDCj8OvwrzCm8Okwr7Ci8OlwqbCgsOvwrzCmmxnw6PCgMKBNjAww6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKabGdcclxuICAgKiBAcGFyYW0gb3B0aW9ucyDDpcKvwrnDqMKvwp3DpsKhwoYgYE1vZGFsT3B0aW9uc0ZvclNlcnZpY2VgIMOlwo/CgsOmwpXCsFxyXG4gICAqXHJcbiAgICogw6fCpMK6w6TCvsKLw6/CvMKaXHJcbiAgYGBgdHNcclxudGhpcy5tb2RhbEhlbHBlci5vcGVuKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XHJcbi8vIMOlwq/CucOkwrrCjsOnwrvChMOkwrvCtsOnwprChMOmwojCkMOlworCnybDpcKFwrPDqcKXwq3Dp8KawoTDpcKkwoTDp8KQwobDqMKvwrTDpsKYwo5cclxuLy8gw6bCiMKQw6XCisKfXHJcbnRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcclxudGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XHJcbi8vIMOlwoXCs8OpwpfCrVxyXG50aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xyXG5gYGBcclxuICAgKi9cclxuICBvcGVuKFxyXG4gICAgY29tcDogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgc2l6ZTogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyID0gJ2xnJyxcclxuICAgIG9wdGlvbnM/OiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlLFxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoY29tcCwgcGFyYW1zLCB7XHJcbiAgICAgIHNpemUsXHJcbiAgICAgIG1vZGFsT3B0aW9uczogb3B0aW9ucyxcclxuICAgICAgZXhhY3Q6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDqcKdwpnDpsKAwoHDpsKhwobDr8K8wozDp8KCwrnDpcKHwrvDqMKSwpnDpcKxwoLDpMK4wo3DpcKFwoHDqMKuwrjDpcKFwrPDqcKXwq1cclxuICAgKiBAcGFyYW0gY29tcCDDp8K7woTDpMK7wrZcclxuICAgKiBAcGFyYW0gcGFyYW1zIMOnwrvChMOkwrvCtsOlwo/CgsOmwpXCsFxyXG4gICAqIEBwYXJhbSBzaXplIMOlwqTCp8OlwrDCj8OvwrzCm8Okwr7Ci8OlwqbCgsOvwrzCmmxnw6PCgMKBNjAww6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKabGdcclxuICAgKiBAcGFyYW0gb3B0aW9ucyDDpcKvwrnDqMKvwp3DpsKhwoYgYE1vZGFsT3B0aW9uc0ZvclNlcnZpY2VgIMOlwo/CgsOmwpXCsFxyXG4gICAqXHJcbiAgICogw6fCpMK6w6TCvsKLw6/CvMKaXHJcbiAgYGBgdHNcclxudGhpcy5tb2RhbEhlbHBlci5vcGVuKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XHJcbi8vIMOlwq/CucOkwrrCjsOnwrvChMOkwrvCtsOnwprChMOmwojCkMOlworCnybDpcKFwrPDqcKXwq3Dp8KawoTDpcKkwoTDp8KQwobDqMKvwrTDpsKYwo5cclxuLy8gw6bCiMKQw6XCisKfXHJcbnRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcclxudGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XHJcbi8vIMOlwoXCs8OpwpfCrVxyXG50aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xyXG5gYGBcclxuICAgKi9cclxuICBzdGF0aWMoXHJcbiAgICBjb21wOiBhbnksXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBzaXplOiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXIgPSAnbGcnLFxyXG4gICAgb3B0aW9ucz86IGFueSxcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMub3BlbihcclxuICAgICAgY29tcCxcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICBzaXplLFxyXG4gICAgICBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG56TWFza0Nsb3NhYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56RHJhd2VyU2VydmljZSwgTnpEcmF3ZXJQbGFjZW1lbnQsIE56RHJhd2VyT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEcmF3ZXJIZWxwZXJPcHRpb25zIHtcclxuICAvKipcclxuICAgKiDDpcKkwqfDpcKwwo/Dr8K8wpvDpMK+wovDpcKmwoLDr8K8wppsZ8OjwoDCgTYwMMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBtZGBcclxuICAgKiBcclxuICAgKiB8IMOnwrHCu8Olwp7CiyB8IMOpwrvCmMOowq7CpMOlwqTCp8OlwrDCjyB8XHJcbiAgICogfCAtLS0gfCAtLS0tLS0gfFxyXG4gICAqIHwgYHNtYCB8IGAzMDBgIHxcclxuICAgKiB8IGBtZGAgfCBgNjAwYCB8XHJcbiAgICogfCBgbGdgIHwgYDkwMGAgfFxyXG4gICAqIHwgYHhsYCB8IGAxMjAwYCB8XHJcbiAgICogXHJcbiAgICogPiDDpMK7wqXDpMK4worDpcKAwrzDr8K8wozDpcKPwq/DqcKAwprDqMK/wofDqMKmwobDp8KbwpbDp8KbwrjDpcK6wpTDp8KawoRMRVNTw6XCj8KCw6bClcKww6jCh8Kqw6jCocKMw6jCsMKDw6bClcK0XHJcbiAgICovXHJcbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogw6bCmMKvw6XCkMKmw6XCjMKFw6XCkMKrw6XCusKVw6nCg8Kow6XCt8Klw6XChcK3w6bCncKhw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHRydWVgXHJcbiAgICovXHJcbiAgZm9vdGVyPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiDDpcK6wpXDqcKDwqjDpcK3wqXDpcKFwrfDpsKdwqHDqcKrwpjDpcK6wqbDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgNTVgXHJcbiAgICovXHJcbiAgZm9vdGVySGVpZ2h0PzogbnVtYmVyO1xyXG4gIC8qKiDDpsKKwr3DpcKxwokgW056RHJhd2VyT3B0aW9uc10oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZHJhd2VyL3poI256ZHJhd2Vyb3B0aW9ucykgw6XCj8KCw6bClcKwICovXHJcbiAgZHJhd2VyT3B0aW9ucz86IE56RHJhd2VyT3B0aW9ucztcclxufVxyXG5cclxuLyoqXHJcbiAqIMOmworCvcOlwrHCicOowr7ChcOlworCqcOnwrHCu1xyXG4gKiBcclxuICogKirDpsKzwqjDpsKEwo/Dr8K8wpoqKiDDpsKewoTDpcK7wrrDp8K7wpPDpsKewpzDqcKDwr3DpcKPwq/DqMKiwqvDqMKuwqLDqcKYwoXDr8K8wozDpMK9wobDpsKwwrjDqMK/wpzDqcKDwr3DpMK4wo3DpMK8wprDqMKnwqbDpcKPwpEgYG9ic2VydmVyLmVycm9yYFxyXG4gKiBcclxuICogw6fCpMK6w6TCvsKLw6/CvMKaXHJcbmBgYHRzXHJcbnRoaXMuZHJhd2VySGVscGVyLmNyZWF0ZSgnRWRpdCcsIEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XHJcbi8vIMOlwq/CucOkwrrCjsOnwrvChMOkwrvCtsOnwprChMOmwojCkMOlworCnybDpcKFwrPDqcKXwq3Dp8KawoTDpcKkwoTDp8KQwobDqMKvwrTDpsKYwo5cclxuLy8gw6bCiMKQw6XCisKfXHJcbnRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoZGF0YSk7XHJcbnRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UodHJ1ZSk7XHJcbi8vIMOlwoXCs8OpwpfCrVxyXG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKCk7XHJcbnRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoZmFsc2UpO1xyXG5gYGBcclxuICovXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBEcmF3ZXJIZWxwZXIge1xyXG4gIC8vIMOlwqTCp8OpwoPCqMOlwojChsOmwoPChcOlwobCtcOkwrjCi8OmworCvcOlwrHCicOnwprChMOlwrHCgsOnwrrCp8Omwq/ClCBNb2RhbCDDpMK8wprDpsKbwrTDpMK9wo7DpMK4woDDpMK6wptcclxuICBwcml2YXRlIHpJbmRleCA9IDQwMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IE56RHJhd2VyU2VydmljZSkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwp7ChMOlwrvCusOkwrjCgMOkwrjCqsOmworCvcOlwrHCiVxyXG4gICAqL1xyXG4gIGNyZWF0ZShcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBjb21wOiBhbnksXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzogRHJhd2VySGVscGVyT3B0aW9uc1xyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbig8RHJhd2VySGVscGVyT3B0aW9ucz57XHJcbiAgICAgIHNpemU6ICdtZCcsXHJcbiAgICAgIGZvb3RlcjogdHJ1ZSxcclxuICAgICAgZm9vdGVySGVpZ2h0OiA1NSxcclxuICAgICAgZHJhd2VyT3B0aW9uczoge1xyXG4gICAgICAgIG56UGxhY2VtZW50OiAncmlnaHQnLFxyXG4gICAgICAgIG56V3JhcENsYXNzTmFtZTogJydcclxuICAgICAgfVxyXG4gICAgfSwgb3B0aW9ucyk7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgc2l6ZSwgZm9vdGVyLCBmb290ZXJIZWlnaHQsIGRyYXdlck9wdGlvbnMgfSA9IG9wdGlvbnM7XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBOekRyYXdlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgbnpDb250ZW50OiBjb21wLFxyXG4gICAgICAgIG56Q29udGVudFBhcmFtczogcGFyYW1zLFxyXG4gICAgICAgIG56WkluZGV4OiArK3RoaXMuekluZGV4LFxyXG4gICAgICAgIG56VGl0bGU6IHRpdGxlXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoZm9vdGVyKSB7XHJcbiAgICAgICAgZGVmYXVsdE9wdGlvbnMubnpCb2R5U3R5bGUgPSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IGBjYWxjKDEwMCUgLSAke2Zvb3RlckhlaWdodH1weClgLFxyXG4gICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgICdwYWRkaW5nLWJvdHRvbSc6IGAke2Zvb3RlckhlaWdodCAtIDJ9cHhgXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBzaXplID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIGRlZmF1bHRPcHRpb25zW2RyYXdlck9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICd0b3AnIHx8IGRyYXdlck9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ256SGVpZ2h0JyA6ICdueldpZHRoJ10gPSBvcHRpb25zLnNpemU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVmYXVsdE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lID0gKGRyYXdlck9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lICsgYCBkcmF3ZXItJHtvcHRpb25zLnNpemV9YCkudHJpbSgpO1xyXG4gICAgICAgIGRlbGV0ZSBkcmF3ZXJPcHRpb25zLm56V3JhcENsYXNzTmFtZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc3ViamVjdCA9IHRoaXMuc3J2LmNyZWF0ZShcclxuICAgICAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBkcmF3ZXJPcHRpb25zKSxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgYWZ0ZXJDbG9zZSQgPSBzdWJqZWN0LmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXMgIT0gbnVsbCAmJiByZXMgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgYWZ0ZXJDbG9zZSQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwp7ChMOlwrvCusOkwrjCgMOkwrjCqsOmworCvcOlwrHCicOvwrzCjMOnwoLCucOlwofCu8OowpLCmcOlwrHCgsOkwrjCjcOlwoXCgcOowq7CuMOlwoXCs8OpwpfCrVxyXG4gICAqL1xyXG4gIHN0YXRpYyhcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBjb21wOiBhbnksXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzogRHJhd2VySGVscGVyT3B0aW9uc1xyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCBkcmF3ZXJPcHRpb25zID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgeyBuek1hc2tDbG9zYWJsZTogZmFsc2UgfSxcclxuICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLmRyYXdlck9wdGlvbnMsXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKHRpdGxlLCBjb21wLCBwYXJhbXMsIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHsgZHJhd2VyT3B0aW9ucyB9KSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBIdHRwQ2xpZW50LFxyXG4gIEh0dHBIZWFkZXJzLFxyXG4gIEh0dHBQYXJhbXMsXHJcbiAgSHR0cFJlc3BvbnNlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEFsYWluVGhlbWVDb25maWcgfSBmcm9tICcuLi8uLi90aGVtZS5jb25maWcnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50Q29uZmlnIH0gZnJvbSAnLi9odHRwLmNvbmZpZyc7XHJcblxyXG4vKipcclxuICogw6XCsMKBw6jCo8KFSHR0cENsaWVudMOvwrzCjMOkwrjCu8OowqbCgcOowqfCo8OlwobCs8OvwrzCmlxyXG4gKiArIMOkwrzCmMOlwozClkh0dHBDbGllbnTDpcKcwqjDpcKPwoLDpsKVwrDDpMK4worDpMK+wr/DpcKIwqnDpsKAwqdcclxuICogKyDDp8K7wp/DpMK4woDDpcKuwp7Dp8KOwrAgbG9hZGluZ1xyXG4gKiArIMOnwrvCn8OkwrjCgMOlwqTChMOnwpDChsOmwpfCtsOpwpfCtMOmwqDCvMOlwrzCj8OpwpfCrsOpwqLCmFxyXG4gKi9cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNsYXNzLW5hbWVcclxuZXhwb3J0IGNsYXNzIF9IdHRwQ2xpZW50IHtcclxuICBwcml2YXRlIGNvZzogSHR0cENsaWVudENvbmZpZztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIGNvZzogQWxhaW5UaGVtZUNvbmZpZykge1xyXG4gICAgdGhpcy5jb2cgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICA8SHR0cENsaWVudENvbmZpZz57XHJcbiAgICAgICAgbnVsbFZhbHVlSGFuZGxpbmc6ICdpbmNsdWRlJyxcclxuICAgICAgICBkYXRlVmFsdWVIYW5kbGluZzogJ3RpbWVzdGFtcCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvZyEuaHR0cCxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKtwqPDpcKcwqjDpcKKwqDDqMK9wr3DpMK4wq0gKi9cclxuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VQYXJhbXMocGFyYW1zOiBhbnkpOiBIdHRwUGFyYW1zIHtcclxuICAgIGNvbnN0IG5ld1BhcmFtcyA9IHt9O1xyXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGxldCBfZGF0YSA9IHBhcmFtc1trZXldO1xyXG4gICAgICAvLyDDpcK/wr3Dp8KVwqXDp8KpwrrDpcKAwrxcclxuICAgICAgaWYgKHRoaXMuY29nLm51bGxWYWx1ZUhhbmRsaW5nID09PSAnaWdub3JlJyAmJiBfZGF0YSA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgIC8vIMOlwrDChsOmwpfCtsOpwpfCtMOowr3CrMOlwozClsOkwrjCusOvwrzCmsOmwpfCtsOpwpfCtMOmwojCsyAow6fCp8KSKVxyXG4gICAgICBpZiAodGhpcy5jb2cuZGF0ZVZhbHVlSGFuZGxpbmcgPT09ICd0aW1lc3RhbXAnICYmIF9kYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgIF9kYXRhID0gX2RhdGEudmFsdWVPZigpO1xyXG4gICAgICB9XHJcbiAgICAgIG5ld1BhcmFtc1trZXldID0gX2RhdGE7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBuZXcgSHR0cFBhcmFtcyh7IGZyb21PYmplY3Q6IG5ld1BhcmFtcyB9KTtcclxuICB9XHJcblxyXG4gIGFwcGxpZWRVcmwodXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSkge1xyXG4gICAgaWYgKCFwYXJhbXMpIHJldHVybiB1cmw7XHJcbiAgICB1cmwgKz0gfnVybC5pbmRleE9mKCc/JykgPyAnJyA6ICc/JztcclxuICAgIGNvbnN0IGFycjogc3RyaW5nW10gPSBbXTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gcGFyYW1zKSB7XHJcbiAgICAgIGFyci5wdXNoKGAke2tleX09JHtwYXJhbXNba2V5XX1gKTtcclxuICAgIH1cclxuICAgIHJldHVybiB1cmwgKyBhcnIuam9pbignJicpO1xyXG4gIH1cclxuXHJcbiAgYmVnaW4oKSB7XHJcbiAgICAvLyBjb25zb2xlLnRpbWUoJ2h0dHAnKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMuX2xvYWRpbmcgPSB0cnVlKSk7XHJcbiAgfVxyXG5cclxuICBlbmQoKSB7XHJcbiAgICAvLyBjb25zb2xlLnRpbWVFbmQoJ2h0dHAnKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMuX2xvYWRpbmcgPSBmYWxzZSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVnaW9uOiBnZXRcclxuXHJcbiAgLyoqXHJcbiAgICogR0VUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBUYCDDp8KxwrvDpcKewotcclxuICAgKi9cclxuICBnZXQ8VD4oXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxUPjtcclxuXHJcbiAgLyoqXHJcbiAgICogR0VUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBzdHJpbmdgIMOnwrHCu8Olwp7Ci1xyXG4gICAqL1xyXG4gIGdldChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cclxuICAvKipcclxuICAgKiBHRVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEpTT05gIMOnwrHCu8Olwp7Ci1xyXG4gICAqL1xyXG4gIGdldChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xyXG5cclxuICAvKipcclxuICAgKiBHRVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEpTT05gIMOnwrHCu8Olwp7Ci1xyXG4gICAqL1xyXG4gIGdldDxUPihcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjtcclxuXHJcbiAgLyoqXHJcbiAgICogR0VUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBhbnlgIMOnwrHCu8Olwp7Ci1xyXG4gICAqL1xyXG4gIGdldChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogR0VUIMOowq/Ct8OmwrHCglxyXG4gICAqL1xyXG4gIGdldChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcclxuICAgICAgJ0dFVCcsXHJcbiAgICAgIHVybCxcclxuICAgICAgT2JqZWN0LmFzc2lnbihcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG5cclxuICAvLyByZWdpb246IHBvc3RcclxuXHJcbiAgLyoqXHJcbiAgICogUE9TVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgc3RyaW5nYCDDp8KxwrvDpcKewotcclxuICAgKi9cclxuICBwb3N0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBPU1TDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEh0dHBSZXNwb25zZTxKU09OPmAgw6fCscK7w6XCnsKLXHJcbiAgICovXHJcbiAgcG9zdChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xyXG5cclxuICAvKipcclxuICAgKiBQT1NUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBKU09OYCDDp8KxwrvDpcKewotcclxuICAgKi9cclxuICBwb3N0PFQ+KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5PzogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxUPjtcclxuXHJcbiAgLyoqXHJcbiAgICogUE9TVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgYW55YCDDp8KxwrvDpcKewotcclxuICAgKi9cclxuICBwb3N0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5PzogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogUE9TVCDDqMKvwrfDpsKxwoJcclxuICAgKi9cclxuICBwb3N0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxyXG4gICAgICAnUE9TVCcsXHJcbiAgICAgIHVybCxcclxuICAgICAgT2JqZWN0LmFzc2lnbihcclxuICAgICAgICB7XHJcbiAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgcGFyYW1zLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9ucyxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgLy8gcmVnaW9uOiBkZWxldGVcclxuXHJcbiAgLyoqXHJcbiAgICogREVMRVRFw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBzdHJpbmdgIMOnwrHCu8Olwp7Ci1xyXG4gICAqL1xyXG4gIGRlbGV0ZShcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cclxuICAvKipcclxuICAgKiBERUxFVEXDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEpTT05gIMOnwrHCu8Olwp7Ci1xyXG4gICAqL1xyXG4gIGRlbGV0ZShcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xyXG5cclxuICAvKipcclxuICAgKiBERUxFVEXDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYGFueWAgw6fCscK7w6XCnsKLXHJcbiAgICovXHJcbiAgZGVsZXRlKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICAvKipcclxuICAgKiBERUxFVEUgw6jCr8K3w6bCscKCXHJcbiAgICovXHJcbiAgZGVsZXRlKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxyXG4gICAgICAnREVMRVRFJyxcclxuICAgICAgdXJsLFxyXG4gICAgICBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhcmFtcyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gZW5kcmVnaW9uXHJcblxyXG4gIC8qKlxyXG4gICAqIGBqc29ucGAgw6jCr8K3w6bCscKCXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXJsIFVSTMOlwpzCsMOlwp3CgFxyXG4gICAqIEBwYXJhbSBwYXJhbXMgw6jCr8K3w6bCscKCw6XCj8KCw6bClcKwXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrUGFyYW0gQ0FMTEJBQ0vDpcKAwrzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppKU09OUF9DQUxMQkFDS1xyXG4gICAqL1xyXG4gIGpzb25wKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBjYWxsYmFja1BhcmFtOiBzdHJpbmcgPSAnSlNPTlBfQ0FMTEJBQ0snLFxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmpzb25wKHRoaXMuYXBwbGllZFVybCh1cmwsIHBhcmFtcyksIGNhbGxiYWNrUGFyYW0pLnBpcGUoXHJcbiAgICAgIHRhcCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbmQoKTtcclxuICAgICAgfSksXHJcbiAgICAgIGNhdGNoRXJyb3IocmVzID0+IHtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHJlcyk7XHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vICNyZWdpb24gcGF0Y2hcclxuXHJcbiAgLyoqXHJcbiAgICogUEFUQ0jDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYHN0cmluZ2Agw6fCscK7w6XCnsKLXHJcbiAgICovXHJcbiAgcGF0Y2goXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHJcbiAgLyoqXHJcbiAgICogUEFUQ0jDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEh0dHBSZXNwb25zZTxKU09OPmAgw6fCscK7w6XCnsKLXHJcbiAgICovXHJcbiAgcGF0Y2goXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcclxuXHJcbiAgLyoqXHJcbiAgICogUEFUQ0jDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEpTT05gIMOnwrHCu8Olwp7Ci1xyXG4gICAqL1xyXG4gIHBhdGNoPFQ+KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5PzogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxUPjtcclxuXHJcbiAgLyoqXHJcbiAgICogUEFUQ0jDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYGFueWAgw6fCscK7w6XCnsKLXHJcbiAgICovXHJcbiAgcGF0Y2goXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk/OiBhbnksXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICAvKipcclxuICAgKiBQQVRDSCDDqMKvwrfDpsKxwoJcclxuICAgKi9cclxuICBwYXRjaChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcclxuICAgICAgJ1BBVENIJyxcclxuICAgICAgdXJsLFxyXG4gICAgICBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBwdXRcclxuXHJcbiAgLyoqXHJcbiAgICogUFVUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBzdHJpbmdgIMOnwrHCu8Olwp7Ci1xyXG4gICAqL1xyXG4gIHB1dChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cclxuICAvKipcclxuICAgKiBQVVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEh0dHBSZXNwb25zZTxKU09OPmAgw6fCscK7w6XCnsKLXHJcbiAgICovXHJcbiAgcHV0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBVVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXHJcbiAgICovXHJcbiAgcHV0PFQ+KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5PzogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxUPjtcclxuXHJcbiAgLyoqXHJcbiAgICogUFVUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBhbnlgIMOnwrHCu8Olwp7Ci1xyXG4gICAqL1xyXG4gIHB1dChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keT86IGFueSxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBVVCDDqMKvwrfDpsKxwoJcclxuICAgKi9cclxuICBwdXQoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXHJcbiAgICAgICdQVVQnLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYm9keSxcclxuICAgICAgICAgIHBhcmFtcyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvKipcclxuICAgKiBgcmVxdWVzdGAgw6jCr8K3w6bCscKCXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbWV0aG9kIMOowq/Ct8OmwrHCgsOmwpbCucOmwrPClcOnwrHCu8Olwp7Ci1xyXG4gICAqIEBwYXJhbSB1cmwgVVJMw6XCnMKww6XCncKAXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgw6XCj8KCw6bClcKwXHJcbiAgICovXHJcbiAgcmVxdWVzdDxSPihcclxuICAgIG1ldGhvZDogc3RyaW5nLFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBib2R5PzogYW55O1xyXG4gICAgICBoZWFkZXJzPzpcclxuICAgICAgICB8IEh0dHBIZWFkZXJzXHJcbiAgICAgICAgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcclxuICAgICAgcGFyYW1zPzpcclxuICAgICAgICB8IEh0dHBQYXJhbXNcclxuICAgICAgICB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICAgIH07XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxSPjtcclxuICAvKipcclxuICAgKiBgcmVxdWVzdGAgw6jCr8K3w6bCscKCXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbWV0aG9kIMOowq/Ct8OmwrHCgsOmwpbCucOmwrPClcOnwrHCu8Olwp7Ci1xyXG4gICAqIEBwYXJhbSB1cmwgVVJMw6XCnMKww6XCncKAXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgw6XCj8KCw6bClcKwXHJcbiAgICovXHJcbiAgcmVxdWVzdChcclxuICAgIG1ldGhvZDogc3RyaW5nLFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBib2R5PzogYW55O1xyXG4gICAgICBoZWFkZXJzPzpcclxuICAgICAgICB8IEh0dHBIZWFkZXJzXHJcbiAgICAgICAgfCB7XHJcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcclxuICAgICAgcGFyYW1zPzpcclxuICAgICAgICB8IEh0dHBQYXJhbXNcclxuICAgICAgICB8IHtcclxuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgICAgIH07XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHRoaXMuYmVnaW4oKTtcclxuICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLnBhcmFtcykgb3B0aW9ucy5wYXJhbXMgPSB0aGlzLnBhcnNlUGFyYW1zKG9wdGlvbnMucGFyYW1zKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgb3B0aW9ucykucGlwZShcclxuICAgICAgdGFwKCgpID0+IHtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICB9KSxcclxuICAgICAgY2F0Y2hFcnJvcihyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IocmVzKTtcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcclxuaW1wb3J0IGRpc3RhbmNlSW5Xb3Jkc1RvTm93IGZyb20gJ2RhdGUtZm5zL2Rpc3RhbmNlX2luX3dvcmRzX3RvX25vdyc7XHJcblxyXG4vKipcclxuICogQHNlZSBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL3NlcnZpY2UtcGlwZSMlRTYlOTclQTUlRTYlOUMlOUYtX2RhdGVcclxuICovXHJcbkBQaXBlKHsgbmFtZTogJ19kYXRlJyB9KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oXHJcbiAgICB2YWx1ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlcixcclxuICAgIGZvcm1hdFN0cmluZzogc3RyaW5nID0gJ1lZWVktTU0tREQgSEg6bW0nLFxyXG4gICk6IHN0cmluZyB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgaWYgKGZvcm1hdFN0cmluZyA9PT0gJ2ZuJykge1xyXG4gICAgICAgIHJldHVybiBkaXN0YW5jZUluV29yZHNUb05vdyh2YWx1ZSwge1xyXG4gICAgICAgICAgbG9jYWxlOiAod2luZG93IGFzIGFueSkuX19sb2NhbGVfXyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZm9ybWF0KHZhbHVlLCBmb3JtYXRTdHJpbmcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEN1cnJlbmN5UGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG4vKipcclxuICogQHNlZSBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL3NlcnZpY2UtcGlwZSMlRTglQjQlQTclRTUlQjglODEtX2N1cnJlbnR5XHJcbiAqL1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLXBpcGUtdHJhbnNmb3JtLWludGVyZmFjZVxyXG5AUGlwZSh7IG5hbWU6ICdfY3VycmVuY3knIH0pXHJcbmV4cG9ydCBjbGFzcyBDTkN1cnJlbmN5UGlwZSBleHRlbmRzIEN1cnJlbmN5UGlwZSB7XHJcbiAgdHJhbnNmb3JtKFxyXG4gICAgdmFsdWU6IGFueSxcclxuICAgIGN1cnJlbmN5Q29kZTogc3RyaW5nID0gJ8Ovwr/CpScsXHJcbiAgICBkaXNwbGF5OiAnY29kZScgfCAnc3ltYm9sJyB8ICdzeW1ib2wtbmFycm93JyB8IGJvb2xlYW4gPSAnY29kZScsXHJcbiAgICBkaWdpdHM/OiBzdHJpbmcsXHJcbiAgKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKHZhbHVlLCBjdXJyZW5jeUNvZGUsIDxhbnk+ZGlzcGxheSwgZGlnaXRzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBzZWUgaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9jb21tb24jJUU1JThGJUFGJUU4JUJGJUFEJUU0JUJCJUEzLWtleXNcclxuICovXHJcbkBQaXBlKHsgbmFtZTogJ2tleXMnIH0pXHJcbmV4cG9ydCBjbGFzcyBLZXlzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBrZXlJc051bWJlcjogYm9vbGVhbiA9IGZhbHNlKTogYW55W10ge1xyXG4gICAgY29uc3QgcmV0ID0gW107XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XHJcbiAgICAgIHJldC5wdXNoKHsga2V5OiBrZXlJc051bWJlciA/ICtrZXkgOiBrZXksIHZhbHVlOiB2YWx1ZVtrZXldIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBzZWUgaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9zZXJ2aWNlLXBpcGUjJUU1JUJFJUJEJUU3JUFCJUEwLXluXHJcbiAqL1xyXG5AUGlwZSh7IG5hbWU6ICd5bicgfSlcclxuZXhwb3J0IGNsYXNzIFlOUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYm9vbGVhbiwgeWVzOiBzdHJpbmcsIG5vOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1zdWNjZXNzXCI+JyArICh5ZXMgfHwgJ8OmwpjCrycpICsgJzwvc3Bhbj4nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLWVycm9yXCI+JyArIChubyB8fCAnw6XCkMKmJykgKyAnPC9zcGFuPic7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcblxyXG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICcuL3dpbl90b2tlbnMnO1xyXG5cclxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICcuL2xvY2FsZS9sb2NhbGUubW9kdWxlJztcclxuXHJcbi8vIHJlZ2lvbjogaW1wb3J0XHJcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2VGYWtlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pMThuL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxIZWxwZXIgfSBmcm9tICcuL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlcic7XHJcbmNvbnN0IEhFTFBFUlMgPSBbTW9kYWxIZWxwZXJdO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5jb25zdCBDT01QT05FTlRTID0gW107XHJcblxyXG4vLyBwaXBlc1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJy4vcGlwZXMvZGF0ZS9kYXRlLnBpcGUnO1xyXG5pbXBvcnQgeyBDTkN1cnJlbmN5UGlwZSB9IGZyb20gJy4vcGlwZXMvY3VycmVuY3kvY24tY3VycmVuY3kucGlwZSc7XHJcbmltcG9ydCB7IEtleXNQaXBlIH0gZnJvbSAnLi9waXBlcy9rZXlzL2tleXMucGlwZSc7XHJcbmltcG9ydCB7IFlOUGlwZSB9IGZyb20gJy4vcGlwZXMveW4veW4ucGlwZSc7XHJcbmNvbnN0IFBJUEVTID0gW0RhdGVQaXBlLCBDTkN1cnJlbmN5UGlwZSwgS2V5c1BpcGUsIFlOUGlwZV07XHJcblxyXG4vLyBlbmRyZWdpb25cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBPdmVybGF5TW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCAuLi5QSVBFU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFMsIC4uLlBJUEVTLCBEZWxvbkxvY2FsZU1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGFpblRoZW1lTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBBbGFpblRoZW1lTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IFdJTkRPVywgdXNlVmFsdWU6IHdpbmRvdyB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogQUxBSU5fSTE4Tl9UT0tFTiwgdXNlQ2xhc3M6IEFsYWluSTE4TlNlcnZpY2VGYWtlIH0sXHJcbiAgICAgICAgLi4uSEVMUEVSUyxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQWxhaW5UaGVtZU1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbLi4uSEVMUEVSU10sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZXJzaW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gbmV3IFZlcnNpb24oJzAuMC4wLVBMQUNFSE9MREVSJyk7XG4iXSwibmFtZXMiOlsiSW5qZWN0aW9uVG9rZW4iLCJCZWhhdmlvclN1YmplY3QiLCJmaWx0ZXIiLCJJbmplY3RhYmxlIiwic2hhcmUiLCJ0c2xpYl8xLl9fdmFsdWVzIiwiT3B0aW9uYWwiLCJJbmplY3QiLCJBQ0xTZXJ2aWNlIiwiRWxlbWVudFJlZiIsIkNvbm5lY3Rpb25Qb3NpdGlvblBhaXIiLCJUZW1wbGF0ZVJlZiIsIlRlbXBsYXRlUG9ydGFsIiwiQ29tcG9uZW50UG9ydGFsIiwiT3ZlcmxheSIsIkRPQ1VNRU5UIiwiU3ViamVjdCIsIkFjdGl2YXRlZFJvdXRlIiwiUm91dGVyIiwiSW5qZWN0b3IiLCJUaXRsZSIsIlNraXBTZWxmIiwiTmdNb2R1bGUiLCJPYnNlcnZhYmxlIiwiTnpNb2RhbFNlcnZpY2UiLCJOekRyYXdlclNlcnZpY2UiLCJIdHRwUGFyYW1zIiwidGFwIiwiY2F0Y2hFcnJvciIsInRocm93RXJyb3IiLCJIdHRwQ2xpZW50IiwiUGlwZSIsInRzbGliXzEuX19leHRlbmRzIiwiQ3VycmVuY3lQaXBlIiwiQ29tbW9uTW9kdWxlIiwiUm91dGVyTW9kdWxlIiwiT3ZlcmxheU1vZHVsZSIsIlZlcnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLFFB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