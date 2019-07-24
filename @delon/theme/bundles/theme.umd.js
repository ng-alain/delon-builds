/**
 * @license ng-alain(cipchk@qq.com) v8.2.0
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@delon/acl'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/router'), require('@delon/util'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/drawer'), require('@angular/common/http'), require('date-fns/distance_in_words_to_now'), require('date-fns/format'), require('@angular/cdk/overlay'), require('@ant-design/icons-angular/icons'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('@delon/theme', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@delon/acl', '@angular/common', '@angular/platform-browser', '@angular/router', '@delon/util', 'ng-zorro-antd/modal', 'ng-zorro-antd/drawer', '@angular/common/http', 'date-fns/distance_in_words_to_now', 'date-fns/format', '@angular/cdk/overlay', '@ant-design/icons-angular/icons', 'ng-zorro-antd/icon'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.theme = {}), global.ng.core, global.rxjs, global.rxjs.operators, global.delon.acl, global.ng.common, global.ng.platformBrowser, global.ng.router, global.delon.util, global['ng-zorro-antd/modal'], global['ng-zorro-antd/drawer'], global.ng.common.http, global.distanceInWordsToNow, global.format, global.ng.cdk.overlay, global.icons, global['ng-zorro-antd/icon']));
}(this, function (exports, core, rxjs, operators, acl, common, platformBrowser, router, util, modal, drawer, http, distanceInWordsToNow, format, overlay, icons, icon) { 'use strict';

    distanceInWordsToNow = distanceInWordsToNow && distanceInWordsToNow.hasOwnProperty('default') ? distanceInWordsToNow['default'] : distanceInWordsToNow;
    format = format && format.hasOwnProperty('default') ? format['default'] : format;

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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function WINDOW_FACTORY() {
        return window;
    }
    /** @type {?} */
    var WINDOW = new core.InjectionToken('Window', {
        providedIn: 'root',
        factory: WINDOW_FACTORY,
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function preloaderFinished() {
        /** @type {?} */
        var body = (/** @type {?} */ (document.querySelector('body')));
        /** @type {?} */
        var preloader = (/** @type {?} */ (document.querySelector('.preloader')));
        body.style.overflow = 'hidden';
        /**
         * @return {?}
         */
        function remove() {
            // preloader value null when running --hmr
            if (!preloader)
                return;
            preloader.addEventListener('transitionend', (/**
             * @return {?}
             */
            function () {
                preloader.className = 'preloader-hidden';
            }));
            preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
        }
        ((/** @type {?} */ (window))).appBootstrap = (/**
         * @return {?}
         */
        function () {
            setTimeout((/**
             * @return {?}
             */
            function () {
                remove();
                body.style.overflow = '';
            }), 100);
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ALAIN_I18N_TOKEN = new core.InjectionToken('alainTranslatorToken', {
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
            get: /**
             * @return {?}
             */
            function () {
                return (/** @type {?} */ (this.change$.asObservable().pipe(operators.filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return w != null; })))));
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
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ AlainI18NServiceFake.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AlainI18NServiceFake_Factory() { return new AlainI18NServiceFake(); }, token: AlainI18NServiceFake, providedIn: "root" });
        return AlainI18NServiceFake;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MenuService = /** @class */ (function () {
        function MenuService(i18nSrv, aclService) {
            var _this = this;
            this.i18nSrv = i18nSrv;
            this.aclService = aclService;
            this._change$ = new rxjs.BehaviorSubject([]);
            this.data = [];
            this.i18n$ = this.i18nSrv.change.subscribe((/**
             * @return {?}
             */
            function () { return _this.resume(); }));
        }
        Object.defineProperty(MenuService.prototype, "change", {
            get: /**
             * @return {?}
             */
            function () {
                return this._change$.pipe(operators.share());
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} data
         * @param {?} callback
         * @return {?}
         */
        MenuService.prototype.visit = /**
         * @param {?} data
         * @param {?} callback
         * @return {?}
         */
        function (data, callback) {
            /** @type {?} */
            var inFn = (/**
             * @param {?} list
             * @param {?} parentMenu
             * @param {?} depth
             * @return {?}
             */
            function (list, parentMenu, depth) {
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
            this.visit(this.data, (/**
             * @param {?} item
             * @param {?} parent
             * @param {?} depth
             * @return {?}
             */
            function (item, parent, depth) {
                item.__id = i++;
                item.__parent = parent;
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
                item._type = item.externalLink ? 2 : 1;
                if (item.children && item.children.length > 0) {
                    item._type = 3;
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
                        value = value
                            .split('-')
                            .slice(1)
                            .join('-');
                    }
                    else if (/^https?:\/\//.test(item.icon)) {
                        type = 'img';
                    }
                    item.icon = (/** @type {?} */ ({ type: type, value: value }));
                }
                if (item.icon != null) {
                    item.icon = __assign({ theme: 'outline', spin: false }, ((/** @type {?} */ (item.icon))));
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
         */
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
        MenuService.prototype.loadShortcut = /**
         * 加载快捷菜单，加载位置规则如下：
         * 1、统一在下标0的节点下（即【主导航】节点下方）
         *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
         *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
         *      3、否则放在0节点位置
         * @private
         * @param {?} shortcuts
         * @return {?}
         */
        function (shortcuts) {
            if (shortcuts.length === 0 || this.data.length === 0) {
                return;
            }
            /** @type {?} */
            var ls = (/** @type {?} */ (this.data[0].children));
            /** @type {?} */
            var pos = ls.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.shortcutRoot === true; }));
            if (pos === -1) {
                pos = ls.findIndex((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return (/** @type {?} */ (w.link)).includes('dashboard'); }));
                pos = (pos !== -1 ? pos : -1) + 1;
                /** @type {?} */
                var shortcutMenu = (/** @type {?} */ ({
                    text: '快捷菜单',
                    i18n: 'shortcut',
                    icon: 'icon-rocket',
                    children: [],
                }));
                (/** @type {?} */ (this.data[0].children)).splice(pos, 0, shortcutMenu);
            }
            /** @type {?} */
            var _data = (/** @type {?} */ (this.data[0].children))[pos];
            if (_data.i18n && this.i18nSrv)
                _data.text = this.i18nSrv.fanyi(_data.i18n);
            // tslint:disable-next-line:prefer-object-spread
            _data = Object.assign(_data, {
                shortcutRoot: true,
                __id: -1,
                __parent: null,
                _type: 3,
                _depth: 1,
            });
            _data.children = shortcuts.map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) {
                i._depth = 2;
                i.__parent = _data;
                return i;
            }));
        };
        Object.defineProperty(MenuService.prototype, "menus", {
            get: /**
             * @return {?}
             */
            function () {
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
         * @param {?} data
         * @param {?} url
         * @param {?=} recursive
         * @param {?=} cb
         * @return {?}
         */
        MenuService.prototype.getHit = /**
         * @param {?} data
         * @param {?} url
         * @param {?=} recursive
         * @param {?=} cb
         * @return {?}
         */
        function (data, url, recursive, cb) {
            if (recursive === void 0) { recursive = false; }
            if (cb === void 0) { cb = null; }
            /** @type {?} */
            var item = null;
            while (!item && url) {
                this.visit(data, (/**
                 * @param {?} i
                 * @return {?}
                 */
                function (i) {
                    if (cb) {
                        cb(i);
                    }
                    if (i.link != null && i.link === url) {
                        item = i;
                    }
                }));
                if (!recursive)
                    break;
                url = url
                    .split('/')
                    .slice(0, -1)
                    .join('/');
            }
            return item;
        };
        /**
         * 根据URL设置菜单 `_open` 属性
         * - 若 `recursive: true` 则会自动向上递归查找
         *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
         */
        /**
         * 根据URL设置菜单 `_open` 属性
         * - 若 `recursive: true` 则会自动向上递归查找
         *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
         * @param {?} url
         * @param {?=} recursive
         * @return {?}
         */
        MenuService.prototype.openedByUrl = /**
         * 根据URL设置菜单 `_open` 属性
         * - 若 `recursive: true` 则会自动向上递归查找
         *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
         * @param {?} url
         * @param {?=} recursive
         * @return {?}
         */
        function (url, recursive) {
            if (recursive === void 0) { recursive = false; }
            if (!url)
                return;
            /** @type {?} */
            var findItem = this.getHit(this.data, url, recursive, (/**
             * @param {?} i
             * @return {?}
             */
            function (i) {
                i._selected = false;
                i._open = false;
            }));
            if (findItem == null)
                return;
            do {
                findItem._selected = true;
                findItem._open = true;
                findItem = findItem.__parent;
            } while (findItem);
        };
        /**
         * 根据url获取菜单列表
         * - 若 `recursive: true` 则会自动向上递归查找
         *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
         */
        /**
         * 根据url获取菜单列表
         * - 若 `recursive: true` 则会自动向上递归查找
         *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
         * @param {?} url
         * @param {?=} recursive
         * @return {?}
         */
        MenuService.prototype.getPathByUrl = /**
         * 根据url获取菜单列表
         * - 若 `recursive: true` 则会自动向上递归查找
         *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
         * @param {?} url
         * @param {?=} recursive
         * @return {?}
         */
        function (url, recursive) {
            if (recursive === void 0) { recursive = false; }
            /** @type {?} */
            var ret = [];
            /** @type {?} */
            var item = this.getHit(this.data, url, recursive);
            if (!item)
                return ret;
            do {
                ret.splice(0, 0, item);
                item = item.__parent;
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
            this.i18n$.unsubscribe();
        };
        MenuService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        MenuService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [ALAIN_I18N_TOKEN,] }] },
            { type: acl.ACLService, decorators: [{ type: core.Optional }] }
        ]; };
        /** @nocollapse */ MenuService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MenuService_Factory() { return new MenuService(core.ɵɵinject(ALAIN_I18N_TOKEN, 8), core.ɵɵinject(acl.ACLService, 8)); }, token: MenuService, providedIn: "root" });
        return MenuService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScrollService = /** @class */ (function () {
        function ScrollService(win, doc) {
            this.win = win;
            this.doc = doc;
        }
        /**
         * 获取滚动条位置
         * @param element 指定元素，默认 `window`
         */
        /**
         * 获取滚动条位置
         * @param {?=} element 指定元素，默认 `window`
         * @return {?}
         */
        ScrollService.prototype.getScrollPosition = /**
         * 获取滚动条位置
         * @param {?=} element 指定元素，默认 `window`
         * @return {?}
         */
        function (element) {
            if (element && element !== this.win) {
                return [element.scrollLeft, element.scrollTop];
            }
            else {
                return [this.win.pageXOffset, this.win.pageYOffset];
            }
        };
        /**
         * 设置滚动条位置
         * @param element 指定元素
         */
        /**
         * 设置滚动条位置
         * @param {?} element 指定元素
         * @param {?} position
         * @return {?}
         */
        ScrollService.prototype.scrollToPosition = /**
         * 设置滚动条位置
         * @param {?} element 指定元素
         * @param {?} position
         * @return {?}
         */
        function (element, position) {
            (element || this.win).scrollTo(position[0], position[1]);
        };
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
            if (topOffset === void 0) { topOffset = 0; }
            if (!element)
                element = this.doc.body;
            (/** @type {?} */ (element)).scrollIntoView();
            /** @type {?} */
            var w = this.win;
            if (w && w.scrollBy) {
                w.scrollBy(0, (/** @type {?} */ (element)).getBoundingClientRect().top - topOffset);
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
            if (topOffset === void 0) { topOffset = 0; }
            this.scrollToElement(this.doc.body, topOffset);
        };
        ScrollService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        ScrollService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [WINDOW,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        /** @nocollapse */ ScrollService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ScrollService_Factory() { return new ScrollService(core.ɵɵinject(WINDOW), core.ɵɵinject(common.DOCUMENT)); }, token: ScrollService, providedIn: "root" });
        return ScrollService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LAYOUT = 'layout';
    /** @type {?} */
    var USER = 'user';
    /** @type {?} */
    var APP = 'app';
    var SettingsService = /** @class */ (function () {
        function SettingsService() {
            this.notify$ = new rxjs.Subject();
            this._app = null;
            this._user = null;
            this._layout = null;
        }
        /**
         * @private
         * @param {?} key
         * @return {?}
         */
        SettingsService.prototype.get = /**
         * @private
         * @param {?} key
         * @return {?}
         */
        function (key) {
            return JSON.parse(localStorage.getItem(key) || 'null') || null;
        };
        /**
         * @private
         * @param {?} key
         * @param {?} value
         * @return {?}
         */
        SettingsService.prototype.set = /**
         * @private
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
             */
            function () {
                if (!this._layout) {
                    this._layout = __assign({ fixed: true, collapsed: false, boxed: false, lang: null }, this.get(LAYOUT));
                    this.set(LAYOUT, this._layout);
                }
                return (/** @type {?} */ (this._layout));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SettingsService.prototype, "app", {
            get: /**
             * @return {?}
             */
            function () {
                if (!this._app) {
                    this._app = __assign({ year: new Date().getFullYear() }, this.get(APP));
                    this.set(APP, this._app);
                }
                return (/** @type {?} */ (this._app));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SettingsService.prototype, "user", {
            get: /**
             * @return {?}
             */
            function () {
                if (!this._user) {
                    this._user = __assign({}, this.get(USER));
                    this.set(USER, this._user);
                }
                return (/** @type {?} */ (this._user));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SettingsService.prototype, "notify", {
            get: /**
             * @return {?}
             */
            function () {
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
            this.set(LAYOUT, this._layout);
            this.notify$.next((/** @type {?} */ ({ type: 'layout', name: name, value: value })));
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
            this.set(APP, value);
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
            this.set(USER, value);
            this.notify$.next({ type: 'user', value: value });
            return true;
        };
        SettingsService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ SettingsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SettingsService_Factory() { return new SettingsService(); }, token: SettingsService, providedIn: "root" });
        return SettingsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlainThemeConfig = /** @class */ (function () {
        function AlainThemeConfig() {
        }
        AlainThemeConfig.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ AlainThemeConfig.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AlainThemeConfig_Factory() { return new AlainThemeConfig(); }, token: AlainThemeConfig, providedIn: "root" });
        return AlainThemeConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var REP_MAX = 6;
    var ResponsiveService = /** @class */ (function () {
        function ResponsiveService(cog) {
            this.cog = __assign({ rules: {
                    1: { xs: 24 },
                    2: { xs: 24, sm: 12 },
                    3: { xs: 24, sm: 12, md: 8 },
                    4: { xs: 24, sm: 12, md: 8, lg: 6 },
                    5: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4 },
                    6: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 2 },
                } }, (/** @type {?} */ (cog)).responsive);
            if (Object.keys(this.cog.rules)
                .map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return +i; }))
                .some((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i < 1 || i > REP_MAX; }))) {
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
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        ResponsiveService.ctorParameters = function () { return [
            { type: AlainThemeConfig }
        ]; };
        /** @nocollapse */ ResponsiveService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ResponsiveService_Factory() { return new ResponsiveService(core.ɵɵinject(AlainThemeConfig)); }, token: ResponsiveService, providedIn: "root" });
        return ResponsiveService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            /**
             * 设置默认标题名
             */
            this.default = "Not Page Name";
            this.i18n$ = this.i18nSrv.change.pipe(operators.filter((/**
             * @return {?}
             */
            function () { return !!_this.i18n$; }))).subscribe((/**
             * @return {?}
             */
            function () { return _this.setTitle(); }));
        }
        Object.defineProperty(TitleService.prototype, "separator", {
            /** 设置分隔符 */
            set: /**
             * 设置分隔符
             * @param {?} value
             * @return {?}
             */
            function (value) {
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
             */
            function (value) {
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
             */
            function (value) {
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
             */
            function (value) {
                this._reverse = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @return {?}
         */
        TitleService.prototype.getByElement = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var el = this.doc.querySelector('.alain-default__content-title h1') || this.doc.querySelector('.page-header__title');
            if (el) {
                return el.firstChild.textContent.trim();
            }
            return '';
        };
        /**
         * @private
         * @return {?}
         */
        TitleService.prototype.getByRoute = /**
         * @private
         * @return {?}
         */
        function () {
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
        TitleService.prototype.getByMenu = /**
         * @private
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
            newTitles.push.apply(newTitles, __spread(((/** @type {?} */ (title)))));
            if (this._suffix) {
                newTitles.push(this._suffix);
            }
            if (this._reverse) {
                newTitles = newTitles.reverse();
            }
            this.title.setTitle(newTitles.join(this._separator));
        };
        /**
         * 设置国际化标题
         */
        /**
         * 设置国际化标题
         * @param {?} key
         * @param {?=} params
         * @return {?}
         */
        TitleService.prototype.setTitleByI18n = /**
         * 设置国际化标题
         * @param {?} key
         * @param {?=} params
         * @return {?}
         */
        function (key, params) {
            this.setTitle(this.i18nSrv.fanyi(key, params));
        };
        /**
         * @return {?}
         */
        TitleService.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.i18n$.unsubscribe();
        };
        TitleService.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        TitleService.ctorParameters = function () { return [
            { type: core.Injector },
            { type: platformBrowser.Title },
            { type: MenuService },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [ALAIN_I18N_TOKEN,] }] },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        /** @nocollapse */ TitleService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function TitleService_Factory() { return new TitleService(core.ɵɵinject(core.INJECTOR), core.ɵɵinject(platformBrowser.Title), core.ɵɵinject(MenuService), core.ɵɵinject(ALAIN_I18N_TOKEN, 8), core.ɵɵinject(common.DOCUMENT)); }, token: TitleService, providedIn: "root" });
        return TitleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DELON_LOCALE = new core.InjectionToken('delon-locale');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var zhCN = (/** @type {?} */ ({
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
    }));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DelonLocaleService = /** @class */ (function () {
        function DelonLocaleService(locale) {
            this.change$ = new rxjs.BehaviorSubject(this._locale);
            this.setLocale(locale || zhCN);
        }
        Object.defineProperty(DelonLocaleService.prototype, "change", {
            get: /**
             * @return {?}
             */
            function () {
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
             */
            function () {
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DelonLocaleService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [DELON_LOCALE,] }] }
        ]; };
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
        deps: [[new core.Optional(), new core.SkipSelf(), DelonLocaleService], DELON_LOCALE],
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = zhCN;
    var DelonLocaleModule = /** @class */ (function () {
        function DelonLocaleModule() {
        }
        DelonLocaleModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [{ provide: DELON_LOCALE, useValue: ɵ0 }, DELON_LOCALE_SERVICE_PROVIDER],
                    },] }
        ];
        return DelonLocaleModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var enUS = (/** @type {?} */ ({
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
    }));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var zhTW = (/** @type {?} */ ({
        abbr: 'zh-TW',
        exception: {
            403: '抱歉，妳無權訪問該頁麵',
            404: '抱歉，妳訪問的頁麵不存在',
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
    }));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var trTR = (/** @type {?} */ ({
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
            clear: 'Sekmeleri temizle',
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
    }));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var plPL = (/** @type {?} */ ({
        abbr: 'en-US',
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
            clear: 'Wyczyść karty',
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
    }));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var elGR = (/** @type {?} */ ({
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
            clear: 'Καθαρισμός καρτελών',
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
    }));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var koKR = (/** @type {?} */ ({
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
            clear: '탭 지우기',
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
    }));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
         * // 成功
         * this.NzModalRef.close(data);
         * this.NzModalRef.close();
         * // 关闭
         * this.NzModalRef.destroy();
         */
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
        ModalHelper.prototype.create = /**
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
        function (comp, params, options) {
            var _this = this;
            options = util.deepMerge({
                size: 'lg',
                exact: true,
                includeTabs: false,
            }, options);
            return new rxjs.Observable((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                var _a = (/** @type {?} */ (options)), size = _a.size, includeTabs = _a.includeTabs, modalOptions = _a.modalOptions;
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
                var subject = _this.srv.create(__assign({}, defaultOptions, modalOptions));
                /** @type {?} */
                var afterClose$ = subject.afterClose.subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    if ((/** @type {?} */ (options)).exact === true) {
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
         * @param comp 组件
         * @param params 组件参数
         * @param options 额外参数
         *
         * @example
         * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
         * // 对于组件的成功&关闭的处理说明
         * // 成功
         * this.NzModalRef.close(data);
         * this.NzModalRef.close();
         * // 关闭
         * this.NzModalRef.destroy();
         */
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
        ModalHelper.prototype.createStatic = /**
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
        function (comp, params, options) {
            /** @type {?} */
            var modalOptions = __assign({ nzMaskClosable: false }, (options && options.modalOptions));
            return this.create(comp, params, __assign({}, options, { modalOptions: modalOptions }));
        };
        /**
         * 打开对话框
         * @param comp 组件
         * @param params 组件参数
         * @param size 大小；例如：lg、600，默认：lg
         * @param options 对话框 `ModalOptionsForService` 参数
         *
         * @example
         * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
         * // 对于组件的成功&关闭的处理说明
         * // 成功
         * this.NzModalRef.close(data);
         * this.NzModalRef.close();
         * // 关闭
         * this.NzModalRef.destroy();
         */
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
         * @param {?=} options 对话框 `ModalOptionsForService` 参数
         *
         * @return {?}
         */
        ModalHelper.prototype.open = /**
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
         * @param {?=} options 对话框 `ModalOptionsForService` 参数
         *
         * @return {?}
         */
        function (comp, params, size, options) {
            if (size === void 0) { size = 'lg'; }
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
         * @example
         * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
         * // 对于组件的成功&关闭的处理说明
         * // 成功
         * this.NzModalRef.close(data);
         * this.NzModalRef.close();
         * // 关闭
         * this.NzModalRef.destroy();
         */
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
         * @param {?=} options 对话框 `ModalOptionsForService` 参数
         *
         * @return {?}
         */
        ModalHelper.prototype.static = /**
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
         * @param {?=} options 对话框 `ModalOptionsForService` 参数
         *
         * @return {?}
         */
        function (comp, params, size, options) {
            if (size === void 0) { size = 'lg'; }
            return this.open(comp, params, size, __assign({ nzMaskClosable: false }, options));
        };
        ModalHelper.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        ModalHelper.ctorParameters = function () { return [
            { type: modal.NzModalService }
        ]; };
        /** @nocollapse */ ModalHelper.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ModalHelper_Factory() { return new ModalHelper(core.ɵɵinject(modal.NzModalService)); }, token: ModalHelper, providedIn: "root" });
        return ModalHelper;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
        function DrawerHelper(srv) {
            this.srv = srv;
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
            options = util.deepMerge({
                size: 'md',
                footer: true,
                footerHeight: 55,
                exact: true,
                drawerOptions: {
                    nzPlacement: 'right',
                    nzWrapClassName: '',
                },
            }, options);
            return new rxjs.Observable((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                var _a = (/** @type {?} */ (options)), size = _a.size, footer = _a.footer, footerHeight = _a.footerHeight, drawerOptions = _a.drawerOptions;
                /** @type {?} */
                var defaultOptions = {
                    nzContent: comp,
                    nzContentParams: params,
                    nzTitle: title,
                };
                if (typeof size === 'number') {
                    defaultOptions[(/** @type {?} */ (drawerOptions)).nzPlacement === 'top' || (/** @type {?} */ (drawerOptions)).nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'] = (/** @type {?} */ (options)).size;
                }
                else {
                    defaultOptions.nzWrapClassName = ((/** @type {?} */ (drawerOptions)).nzWrapClassName + (" drawer-" + (/** @type {?} */ (options)).size)).trim();
                    delete (/** @type {?} */ (drawerOptions)).nzWrapClassName;
                }
                if (footer) {
                    var _b = (/** @type {?} */ (drawerOptions)), nzPlacement = _b.nzPlacement, nzHeight = _b.nzHeight;
                    // Should be header * footer, because of includes header
                    /** @type {?} */
                    var reduceHeight = (/** @type {?} */ (footerHeight)) * 2 - 2;
                    if (nzPlacement === 'left' || nzPlacement === 'right') {
                        defaultOptions.nzBodyStyle = {
                            height: "calc(100% - " + reduceHeight + "px)",
                            overflow: 'auto',
                        };
                    }
                    else {
                        defaultOptions.nzBodyStyle = {
                            height: +(nzHeight || 256) - reduceHeight + "px",
                            overflow: 'auto',
                        };
                    }
                }
                /** @type {?} */
                var subject = _this.srv.create(__assign({}, defaultOptions, drawerOptions));
                /** @type {?} */
                var afterClose$ = subject.afterClose.subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    if ((/** @type {?} */ (options)).exact === true) {
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
            var drawerOptions = __assign({ nzMaskClosable: false }, (options && options.drawerOptions));
            return this.create(title, comp, params, __assign({}, options, { drawerOptions: drawerOptions }));
        };
        DrawerHelper.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        DrawerHelper.ctorParameters = function () { return [
            { type: drawer.NzDrawerService }
        ]; };
        /** @nocollapse */ DrawerHelper.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DrawerHelper_Factory() { return new DrawerHelper(core.ɵɵinject(drawer.NzDrawerService)); }, token: DrawerHelper, providedIn: "root" });
        return DrawerHelper;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.cog = __assign({ nullValueHandling: 'include', dateValueHandling: 'timestamp' }, (/** @type {?} */ (cog)).http);
        }
        Object.defineProperty(_HttpClient.prototype, "loading", {
            /** 是否正在加载中 */
            get: /**
             * 是否正在加载中
             * @return {?}
             */
            function () {
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
            Object.keys(params).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
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
            return new http.HttpParams({ fromObject: newParams });
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
            // tslint:disable-next-line: forin
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
            setTimeout((/**
             * @return {?}
             */
            function () { return (_this._loading = true); }), 10);
        };
        /**
         * @return {?}
         */
        _HttpClient.prototype.end = /**
         * @return {?}
         */
        function () {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () { return (_this._loading = false); }), 10);
        };
        /**
         * GET 请求
         */
        /**
         * GET 请求
         * @param {?} url
         * @param {?} params
         * @param {?=} options
         * @return {?}
         */
        _HttpClient.prototype.get = /**
         * GET 请求
         * @param {?} url
         * @param {?} params
         * @param {?=} options
         * @return {?}
         */
        function (url, params, options) {
            if (options === void 0) { options = {}; }
            return this.request('GET', url, __assign({ params: params }, options));
        };
        /**
         * POST 请求
         */
        /**
         * POST 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?=} options
         * @return {?}
         */
        _HttpClient.prototype.post = /**
         * POST 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?=} options
         * @return {?}
         */
        function (url, body, params, options) {
            if (options === void 0) { options = {}; }
            return this.request('POST', url, __assign({ body: body,
                params: params }, options));
        };
        /**
         * DELETE 请求
         */
        /**
         * DELETE 请求
         * @param {?} url
         * @param {?} params
         * @param {?=} options
         * @return {?}
         */
        _HttpClient.prototype.delete = /**
         * DELETE 请求
         * @param {?} url
         * @param {?} params
         * @param {?=} options
         * @return {?}
         */
        function (url, params, options) {
            if (options === void 0) { options = {}; }
            return this.request('DELETE', url, __assign({ params: params }, options));
        };
        // #endregion
        // #region jsonp
        /**
         * `jsonp` 请求
         *
         * @param url URL地址
         * @param params 请求参数
         * @param callbackParam CALLBACK值，默认：JSONP_CALLBACK
         */
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
        _HttpClient.prototype.jsonp = 
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
        function (url, params, callbackParam) {
            var _this = this;
            if (callbackParam === void 0) { callbackParam = 'JSONP_CALLBACK'; }
            this.begin();
            return this.http.jsonp(this.appliedUrl(url, params), callbackParam).pipe(operators.tap((/**
             * @return {?}
             */
            function () { return _this.end(); })), operators.catchError((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.end();
                return rxjs.throwError(res);
            })));
        };
        /**
         * PATCH 请求
         */
        /**
         * PATCH 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?=} options
         * @return {?}
         */
        _HttpClient.prototype.patch = /**
         * PATCH 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?=} options
         * @return {?}
         */
        function (url, body, params, options) {
            if (options === void 0) { options = {}; }
            return this.request('PATCH', url, __assign({ body: body,
                params: params }, options));
        };
        /**
         * PUT 请求
         */
        /**
         * PUT 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?=} options
         * @return {?}
         */
        _HttpClient.prototype.put = /**
         * PUT 请求
         * @param {?} url
         * @param {?} body
         * @param {?} params
         * @param {?=} options
         * @return {?}
         */
        function (url, body, params, options) {
            if (options === void 0) { options = {}; }
            return this.request('PUT', url, __assign({ body: body,
                params: params }, options));
        };
        /**
         * @param {?} method
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        _HttpClient.prototype.request = /**
         * @param {?} method
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */
        function (method, url, options) {
            var _this = this;
            if (options === void 0) { options = {}; }
            this.begin();
            if (options.params)
                options.params = this.parseParams(options.params);
            return this.http.request(method, url, options).pipe(operators.tap((/**
             * @return {?}
             */
            function () { return _this.end(); })), operators.catchError((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.end();
                return rxjs.throwError(res);
            })));
        };
        _HttpClient.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        _HttpClient.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: AlainThemeConfig }
        ]; };
        /** @nocollapse */ _HttpClient.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function _HttpClient_Factory() { return new _HttpClient(core.ɵɵinject(http.HttpClient), core.ɵɵinject(AlainThemeConfig)); }, token: _HttpClient, providedIn: "root" });
        return _HttpClient;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var BaseApi = /** @class */ (function () {
        function BaseApi(injector) {
            this.injector = injector;
        }
        /** @nocollapse */
        BaseApi.ctorParameters = function () { return [
            { type: core.Injector, decorators: [{ type: core.Inject, args: [core.Injector,] }] }
        ]; };
        return BaseApi;
    }());
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
        return (/**
         * @template TClass
         * @param {?} target
         * @return {?}
         */
        function (target) {
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
        return (/**
         * @template TClass
         * @param {?} target
         * @return {?}
         */
        function (target) {
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
        return (/**
         * @param {?=} key
         * @param {...?} extraOptions
         * @return {?}
         */
        function (key) {
            var extraOptions = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                extraOptions[_i - 1] = arguments[_i];
            }
            return (/**
             * @param {?} target
             * @param {?} propertyKey
             * @param {?} index
             * @return {?}
             */
            function (target, propertyKey, index) {
                /** @type {?} */
                var params = setParam(setParam(target), propertyKey);
                /** @type {?} */
                var tParams = params[paramName];
                if (typeof tParams === 'undefined') {
                    tParams = params[paramName] = [];
                }
                tParams.push(__assign({ key: key,
                    index: index }, extraOptions));
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
     * @param {?} method
     * @return {?}
     */
    function makeMethod(method) {
        return (/**
         * @param {?=} url
         * @param {?=} options
         * @return {?}
         */
        function (url, options) {
            if (url === void 0) { url = ''; }
            return (/**
             * @param {?} _target
             * @param {?=} targetKey
             * @param {?=} descriptor
             * @return {?}
             */
            function (_target, targetKey, descriptor) {
                (/** @type {?} */ (descriptor)).value = (/**
                 * @param {...?} args
                 * @return {?}
                 */
                function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    options = options || {};
                    /** @type {?} */
                    var http = this.injector.get(_HttpClient, null);
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
                        var aclSrv = this.injector.get(acl.ACLService, null);
                        if (aclSrv && !aclSrv.can(options.acl)) {
                            return rxjs.throwError({
                                url: requestUrl,
                                status: 401,
                                statusText: "From Http Decorator",
                            });
                        }
                        delete options.acl;
                    }
                    (data.path || []).forEach((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) {
                        requestUrl = requestUrl.replace(new RegExp(":" + i.key, 'g'), encodeURIComponent(args[i.index]));
                    }));
                    /** @type {?} */
                    var params = (data.query || []).reduce((/**
                     * @param {?} p
                     * @param {?} i
                     * @return {?}
                     */
                    function (p, i) {
                        p[i.key] = args[i.index];
                        return p;
                    }), {});
                    /** @type {?} */
                    var headers = (data.headers || []).reduce((/**
                     * @param {?} p
                     * @param {?} i
                     * @return {?}
                     */
                    function (p, i) {
                        p[i.key] = args[i.index];
                        return p;
                    }), {});
                    return http.request(method, requestUrl, __assign({ body: data.body && data.body.length > 0 ? args[data.body[0].index] : null, params: params, headers: __assign({}, baseData.baseHeaders, headers) }, options));
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
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            if (formatString === void 0) { formatString = 'YYYY-MM-DD HH:mm'; }
            if (value) {
                if (formatString === 'fn') {
                    return distanceInWordsToNow(value, {
                        locale: ((/** @type {?} */ (window))).__locale__,
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
            { type: core.Pipe, args: [{ name: '_date' },] }
        ];
        return DatePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
        CNCurrencyPipe.prototype.transform = /**
         * @param {?} value
         * @param {?=} currencyCode
         * @param {?=} display
         * @param {?=} digits
         * @return {?}
         */
        function (value, currencyCode, display, digits) {
            if (currencyCode === void 0) { currencyCode = '￥'; }
            if (display === void 0) { display = 'code'; }
            return _super.prototype.transform.call(this, value, currencyCode, (/** @type {?} */ (display)), digits);
        };
        CNCurrencyPipe.decorators = [
            { type: core.Pipe, args: [{ name: '_currency' },] }
        ];
        return CNCurrencyPipe;
    }(common.CurrencyPipe));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        KeysPipe.prototype.transform = /**
         * @param {?} value
         * @param {?=} keyIsNumber
         * @return {?}
         */
        function (value, keyIsNumber) {
            if (keyIsNumber === void 0) { keyIsNumber = false; }
            /** @type {?} */
            var ret = [];
            // tslint:disable-next-line: forin
            for (var key in value) {
                ret.push({ key: keyIsNumber ? +key : key, value: value[key] });
            }
            return ret;
        };
        KeysPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'keys' },] }
        ];
        return KeysPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        function YNPipe(dom) {
            this.dom = dom;
        }
        /**
         * @param {?} value
         * @param {?} yes
         * @param {?} no
         * @param {?} mode
         * @return {?}
         */
        YNPipe.prototype.transform = /**
         * @param {?} value
         * @param {?} yes
         * @param {?} no
         * @param {?} mode
         * @return {?}
         */
        function (value, yes, no, mode) {
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
            return this.dom.bypassSecurityTrustHtml(html);
        };
        YNPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'yn' },] }
        ];
        /** @nocollapse */
        YNPipe.ctorParameters = function () { return [
            { type: platformBrowser.DomSanitizer }
        ]; };
        return YNPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HTMLPipe = /** @class */ (function () {
        function HTMLPipe(dom) {
            this.dom = dom;
        }
        /**
         * @param {?} html
         * @return {?}
         */
        HTMLPipe.prototype.transform = /**
         * @param {?} html
         * @return {?}
         */
        function (html) {
            return html ? this.dom.bypassSecurityTrustHtml(html) : '';
        };
        HTMLPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'html' },] }
        ];
        /** @nocollapse */
        HTMLPipe.ctorParameters = function () { return [
            { type: platformBrowser.DomSanitizer }
        ]; };
        return HTMLPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var URLPipe = /** @class */ (function () {
        function URLPipe(dom) {
            this.dom = dom;
        }
        /**
         * @param {?} url
         * @return {?}
         */
        URLPipe.prototype.transform = /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            return url ? this.dom.bypassSecurityTrustUrl(url) : '';
        };
        URLPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'url' },] }
        ];
        /** @nocollapse */
        URLPipe.ctorParameters = function () { return [
            { type: platformBrowser.DomSanitizer }
        ]; };
        return URLPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            { type: core.Pipe, args: [{ name: 'i18n' },] }
        ];
        /** @nocollapse */
        I18nPipe.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [ALAIN_I18N_TOKEN,] }] }
        ]; };
        return I18nPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var HELPERS = [ModalHelper, DrawerHelper];
    // components
    /** @type {?} */
    var COMPONENTS = [];
    /** @type {?} */
    var PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, I18nPipe, HTMLPipe, URLPipe];
    /** @type {?} */
    var ICONS = [icons.BellOutline, icons.DeleteOutline, icons.PlusOutline, icons.InboxOutline];
    // #endregion
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
                providers: __spread(HELPERS),
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, router.RouterModule, overlay.OverlayModule],
                        declarations: __spread(COMPONENTS, PIPES),
                        exports: __spread(COMPONENTS, PIPES, [DelonLocaleModule]),
                    },] }
        ];
        /** @nocollapse */
        AlainThemeModule.ctorParameters = function () { return [
            { type: icon.NzIconService }
        ]; };
        return AlainThemeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var VERSION = new core.Version('8.2.0');

    exports.ALAIN_I18N_TOKEN = ALAIN_I18N_TOKEN;
    exports.APP = APP;
    exports.AlainI18NServiceFake = AlainI18NServiceFake;
    exports.AlainThemeConfig = AlainThemeConfig;
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
    exports.ko_KR = koKR;
    exports.pl_PL = plPL;
    exports.preloaderFinished = preloaderFinished;
    exports.tr_TR = trTR;
    exports.zh_CN = zhCN;
    exports.zh_TW = zhTW;
    exports.ɵa = ALAIN_I18N_TOKEN_FACTORY;
    exports.ɵb = I18nPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=theme.umd.js.map
