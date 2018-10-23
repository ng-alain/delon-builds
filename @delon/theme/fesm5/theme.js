import { InjectionToken, Injectable, Version, TemplateRef, ElementRef, Inject, Pipe, NgModule, Optional, SkipSelf, defineInjectable, inject, Injector, INJECTOR } from '@angular/core';
import { BehaviorSubject, Subject, Observable, throwError } from 'rxjs';
import { filter, share, tap, catchError } from 'rxjs/operators';
import { __spread, __values, __extends } from 'tslib';
import { ACLService } from '@delon/acl';
import { Overlay, ConnectionPositionPair, OverlayModule } from '@angular/cdk/overlay';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT, CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NzModalService, NzIconService, NzDrawerService } from 'ng-zorro-antd';
import { HttpClient, HttpParams } from '@angular/common/http';
import format from 'date-fns/format';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { BellOutline, FilterOutline, CaretUpOutline, CaretDownOutline, DeleteOutline, PlusOutline, InboxOutline } from '@ant-design/icons-angular/icons';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var WINDOW = new InjectionToken('Window');

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
    (/** @type {?} */ (window)).appBootstrap = function () {
        setTimeout(function () {
            remove();
            body.style.overflow = '';
        }, 100);
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ALAIN_I18N_TOKEN = new InjectionToken('alainTranslatorToken');
var AlainI18NServiceFake = /** @class */ (function () {
    function AlainI18NServiceFake() {
        this.change$ = new BehaviorSubject(null);
    }
    Object.defineProperty(AlainI18NServiceFake.prototype, "change", {
        get: /**
         * @return {?}
         */
        function () {
            return this.change$.asObservable().pipe(filter(function (w) { return w != null; }));
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ AlainI18NServiceFake.ngInjectableDef = defineInjectable({ factory: function AlainI18NServiceFake_Factory() { return new AlainI18NServiceFake(); }, token: AlainI18NServiceFake, providedIn: "root" });
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
        this._change$ = new BehaviorSubject([]);
        this.data = [];
        if (this.i18nSrv)
            this.i18n$ = this.i18nSrv.change.subscribe(function () { return _this.resume(); });
    }
    Object.defineProperty(MenuService.prototype, "change", {
        get: /**
         * @return {?}
         */
        function () {
            return this._change$.pipe(share());
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
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                }
                finally { if (e_1) throw e_1.error; }
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    MenuService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: ACLService, decorators: [{ type: Optional }] }
    ]; };
    /** @nocollapse */ MenuService.ngInjectableDef = defineInjectable({ factory: function MenuService_Factory() { return new MenuService(inject(ALAIN_I18N_TOKEN, 8), inject(ACLService, 8)); }, token: MenuService, providedIn: "root" });
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
        var fakeElement = new ElementRef({
            getBoundingClientRect: function () { return ({
                bottom: event.clientY,
                height: 0,
                left: event.clientX,
                right: event.clientX,
                top: event.clientY,
                width: 0,
            }); },
        });
        /** @type {?} */
        var positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
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
        if (this.type instanceof TemplateRef) {
            this.ref.attach(new TemplatePortal(this.type, this.containerRef));
        }
        else {
            this.ref.attach(new ComponentPortal(this.type, this.containerRef));
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ContextMenuService.ctorParameters = function () { return [
        { type: Overlay }
    ]; };
    /** @nocollapse */ ContextMenuService.ngInjectableDef = defineInjectable({ factory: function ContextMenuService_Factory() { return new ContextMenuService(inject(Overlay)); }, token: ContextMenuService, providedIn: "root" });
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
        if (topOffset === void 0) { topOffset = 0; }
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
        if (topOffset === void 0) { topOffset = 0; }
        this.scrollToElement(this.doc.body, topOffset);
    };
    ScrollService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ScrollService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [WINDOW,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ ScrollService.ngInjectableDef = defineInjectable({ factory: function ScrollService_Factory() { return new ScrollService(inject(WINDOW), inject(DOCUMENT)); }, token: ScrollService, providedIn: "root" });
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
        this.notify$ = new Subject();
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
         */
        function () {
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
         */
        function () {
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
         */
        function () {
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ SettingsService.ngInjectableDef = defineInjectable({ factory: function SettingsService_Factory() { return new SettingsService(); }, token: SettingsService, providedIn: "root" });
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ AlainThemeConfig.ngInjectableDef = defineInjectable({ factory: function AlainThemeConfig_Factory() { return new AlainThemeConfig(); }, token: AlainThemeConfig, providedIn: "root" });
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ResponsiveService.ctorParameters = function () { return [
        { type: AlainThemeConfig }
    ]; };
    /** @nocollapse */ ResponsiveService.ngInjectableDef = defineInjectable({ factory: function ResponsiveService_Factory() { return new ResponsiveService(inject(AlainThemeConfig)); }, token: ResponsiveService, providedIn: "root" });
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
    Object.defineProperty(TitleService.prototype, "default", {
        /** 设置默认标题名 */
        set: /**
         * 设置默认标题名
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        var next = this.injector.get(ActivatedRoute);
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
        var menus = this.menuSrv.getPathByUrl(this.injector.get(Router).url);
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
        newTitles.push.apply(newTitles, __spread((/** @type {?} */ (title))));
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    TitleService.ctorParameters = function () { return [
        { type: Injector },
        { type: Title },
        { type: MenuService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ TitleService.ngInjectableDef = defineInjectable({ factory: function TitleService_Factory() { return new TitleService(inject(INJECTOR), inject(Title), inject(MenuService), inject(ALAIN_I18N_TOKEN, 8), inject(DOCUMENT)); }, token: TitleService, providedIn: "root" });
    return TitleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var DELON_LOCALE = new InjectionToken('delon-locale');

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
        this.change$ = new BehaviorSubject(this._locale);
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
        { type: Injectable }
    ];
    /** @nocollapse */
    DelonLocaleService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DELON_LOCALE,] }] }
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
    deps: [[new Optional(), new SkipSelf(), DelonLocaleService], DELON_LOCALE]
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
        { type: NgModule, args: [{
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
        return new Observable(function (observer) {
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
        if (size === void 0) { size = 'lg'; }
        return this.open(comp, params, size, Object.assign({
            nzMaskClosable: false,
        }, options));
    };
    ModalHelper.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ModalHelper.ctorParameters = function () { return [
        { type: NzModalService }
    ]; };
    /** @nocollapse */ ModalHelper.ngInjectableDef = defineInjectable({ factory: function ModalHelper_Factory() { return new ModalHelper(inject(NzModalService)); }, token: ModalHelper, providedIn: "root" });
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
        return new Observable(function (observer) {
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    DrawerHelper.ctorParameters = function () { return [
        { type: NzDrawerService }
    ]; };
    /** @nocollapse */ DrawerHelper.ngInjectableDef = defineInjectable({ factory: function DrawerHelper_Factory() { return new DrawerHelper(inject(NzDrawerService)); }, token: DrawerHelper, providedIn: "root" });
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
        return new HttpParams({ fromObject: newParams });
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
        if (callbackParam === void 0) { callbackParam = 'JSONP_CALLBACK'; }
        return this.http.jsonp(this.appliedUrl(url, params), callbackParam).pipe(tap(function () {
            _this.end();
        }), catchError(function (res) {
            _this.end();
            return throwError(res);
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
        return this.http.request(method, url, options).pipe(tap(function () {
            _this.end();
        }), catchError(function (res) {
            _this.end();
            return throwError(res);
        }));
    };
    _HttpClient.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    _HttpClient.ctorParameters = function () { return [
        { type: HttpClient },
        { type: AlainThemeConfig }
    ]; };
    /** @nocollapse */ _HttpClient.ngInjectableDef = defineInjectable({ factory: function _HttpClient_Factory() { return new _HttpClient(inject(HttpClient), inject(AlainThemeConfig)); }, token: _HttpClient, providedIn: "root" });
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
        if (formatString === void 0) { formatString = 'YYYY-MM-DD HH:mm'; }
        if (value) {
            if (formatString === 'fn') {
                return distanceInWordsToNow(value, {
                    locale: (/** @type {?} */ (window)).__locale__,
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
        { type: Pipe, args: [{ name: '_date' },] }
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
        if (currencyCode === void 0) { currencyCode = '￥'; }
        if (display === void 0) { display = 'code'; }
        return _super.prototype.transform.call(this, value, currencyCode, /** @type {?} */ (display), digits);
    };
    CNCurrencyPipe.decorators = [
        { type: Pipe, args: [{ name: '_currency' },] }
    ];
    return CNCurrencyPipe;
}(CurrencyPipe));

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
        if (keyIsNumber === void 0) { keyIsNumber = false; }
        /** @type {?} */
        var ret = [];
        // tslint:disable-next-line:forin
        for (var key in value) {
            ret.push({ key: keyIsNumber ? +key : key, value: value[key] });
        }
        return ret;
    };
    KeysPipe.decorators = [
        { type: Pipe, args: [{ name: 'keys' },] }
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
        { type: Pipe, args: [{ name: 'yn' },] }
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
/** @type {?} */
var ICONS = [
    BellOutline,
    FilterOutline,
    CaretUpOutline,
    CaretDownOutline,
    DeleteOutline,
    PlusOutline,
    InboxOutline,
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
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule, OverlayModule],
                    declarations: __spread(COMPONENTS, PIPES),
                    exports: __spread(COMPONENTS, PIPES, [DelonLocaleModule]),
                },] }
    ];
    /** @nocollapse */
    AlainThemeModule.ctorParameters = function () { return [
        { type: NzIconService }
    ]; };
    return AlainThemeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var VERSION = new Version('2.0.0-beta.5-add216a');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { WINDOW, preloaderFinished, TitleService, ALAIN_I18N_TOKEN, AlainI18NServiceFake, _HttpClient, DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, AlainThemeConfig, AlainThemeModule, VERSION, MenuService, ContextMenuService, ScrollService, SettingsService, REP_MAX, ResponsiveService, enUS as en_US, zhCN as zh_CN, zhTW as zh_TW, DELON_LOCALE, DELON_LOCALE_SERVICE_PROVIDER_FACTORY, DelonLocaleService, DELON_LOCALE_SERVICE_PROVIDER, DelonLocaleModule, ModalHelper, DrawerHelper };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi90aGVtZS9zcmMvd2luX3Rva2Vucy50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9wcmVsb2FkZXIvcHJlbG9hZGVyLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL2kxOG4vaTE4bi50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9tZW51L21lbnUuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvc2Nyb2xsL3Njcm9sbC5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL3NldHRpbmdzL3NldHRpbmdzLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvdGhlbWUuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL3Jlc3BvbnNpdmUvcmVzcG9uc2l2ZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy90aXRsZS90aXRsZS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL2xvY2FsZS9sb2NhbGUudG9rZW5zLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL2xvY2FsZS9sYW5ndWFnZXMvemgtQ04udHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xvY2FsZS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL2xvY2FsZS9sb2NhbGUubW9kdWxlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL2xvY2FsZS9sYW5ndWFnZXMvZW4tVVMudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xhbmd1YWdlcy96aC1UVy50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9tb2RhbC9tb2RhbC5oZWxwZXIudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvZHJhd2VyL2RyYXdlci5oZWxwZXIudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvaHR0cC9odHRwLmNsaWVudC50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9waXBlcy9kYXRlL2RhdGUucGlwZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9waXBlcy9jdXJyZW5jeS9jbi1jdXJyZW5jeS5waXBlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3BpcGVzL2tleXMva2V5cy5waXBlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3BpcGVzL3luL3luLnBpcGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvdGhlbWUubW9kdWxlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3ZlcnNpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IFdJTkRPVyA9IG5ldyBJbmplY3Rpb25Ub2tlbignV2luZG93Jyk7XG4iLCJleHBvcnQgZnVuY3Rpb24gcHJlbG9hZGVyRmluaXNoZWQoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXInKTtcblxuICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgIC8vIHByZWxvYWRlciB2YWx1ZSBudWxsIHdoZW4gcnVubmluZyAtLWhtclxuICAgIGlmICghcHJlbG9hZGVyKSByZXR1cm47XG4gICAgcHJlbG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgIHByZWxvYWRlci5jbGFzc05hbWUgPSAncHJlbG9hZGVyLWhpZGRlbic7XG4gICAgfSk7XG5cbiAgICBwcmVsb2FkZXIuY2xhc3NOYW1lICs9ICcgcHJlbG9hZGVyLWhpZGRlbi1hZGQgcHJlbG9hZGVyLWhpZGRlbi1hZGQtYWN0aXZlJztcbiAgfVxuXG4gICg8YW55PndpbmRvdykuYXBwQm9vdHN0cmFwID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgfSwgMTAwKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkkxOE5TZXJ2aWNlIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIHVzZShsYW5nOiBzdHJpbmcpOiB2b2lkO1xuXG4gIGdldExhbmdzKCk6IGFueVtdO1xuXG4gIGZhbnlpKGtleTogc3RyaW5nKTogYW55O1xuXG4gIHJlYWRvbmx5IGNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xufVxuXG5leHBvcnQgY29uc3QgQUxBSU5fSTE4Tl9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBbGFpbkkxOE5TZXJ2aWNlPihcbiAgJ2FsYWluVHJhbnNsYXRvclRva2VuJyxcbik7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQWxhaW5JMThOU2VydmljZUZha2UgaW1wbGVtZW50cyBBbGFpbkkxOE5TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlsdGVyKHcgPT4gdyAhPSBudWxsKSk7XG4gIH1cblxuICB1c2UobGFuZzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQobGFuZyk7XG4gIH1cblxuICBnZXRMYW5ncygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZmFueWkoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4ga2V5O1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuXG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9pMThuJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTWVudVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9jaGFuZ2UkOiBCZWhhdmlvclN1YmplY3Q8TWVudVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TWVudVtdPihbXSk7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGRhdGE6IE1lbnVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbFNlcnZpY2U6IEFDTFNlcnZpY2UsXG4gICkge1xuICAgIGlmICh0aGlzLmkxOG5TcnYpXG4gICAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuU3J2LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXN1bWUoKSk7XG4gIH1cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TWVudVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZSQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIHZpc2l0KGNhbGxiYWNrOiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKSB7XG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBNZW51W10sIHBhcmVudE1lbnU6IE1lbnUsIGRlcHRoOiBudW1iZXIpID0+IHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICAgIGNhbGxiYWNrKGl0ZW0sIHBhcmVudE1lbnUsIGRlcHRoKTtcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5GbihpdGVtLmNoaWxkcmVuLCBpdGVtLCBkZXB0aCArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpbkZuKHRoaXMuZGF0YSwgbnVsbCwgMCk7XG4gIH1cblxuICBhZGQoaXRlbXM6IE1lbnVbXSkge1xuICAgIHRoaXMuZGF0YSA9IGl0ZW1zO1xuICAgIHRoaXMucmVzdW1lKCk7XG4gIH1cblxuICAvKipcbiAgICogw6nCh8KNw6fCvcKuw6jCj8Kcw6XCjcKVw6/CvMKMw6XCj8Kvw6jCg8K9STE4TsOjwoDCgcOnwpTCqMOmwojCt8Omwp3Cg8OpwpnCkMOlwo/CmMOlworCqMOmwpfCtsOpwpzCgMOowqbCgcOowrDCg8OnwpTCqMOlwojCt8OmwpbCsFxuICAgKi9cbiAgcmVzdW1lKGNhbGxiYWNrPzogKGl0ZW06IE1lbnUsIHBhcmVudE1lbnVtOiBNZW51LCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCkge1xuICAgIGxldCBpID0gMTtcbiAgICBjb25zdCBzaG9ydGN1dHM6IE1lbnVbXSA9IFtdO1xuICAgIHRoaXMudmlzaXQoKGl0ZW0sIHBhcmVudCwgZGVwdGgpID0+IHtcbiAgICAgIGl0ZW0uX19pZCA9IGkrKztcbiAgICAgIGl0ZW0uX19wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICBpdGVtLl9kZXB0aCA9IGRlcHRoO1xuXG4gICAgICBpZiAoIWl0ZW0ubGluaykgaXRlbS5saW5rID0gJyc7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0ubGlua0V4YWN0ID09PSAndW5kZWZpbmVkJykgaXRlbS5saW5rRXhhY3QgPSBmYWxzZTtcbiAgICAgIGlmICghaXRlbS5leHRlcm5hbExpbmspIGl0ZW0uZXh0ZXJuYWxMaW5rID0gJyc7XG5cbiAgICAgIC8vIGJhZGdlXG4gICAgICBpZiAoaXRlbS5iYWRnZSkge1xuICAgICAgICBpZiAoaXRlbS5iYWRnZURvdCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGl0ZW0uYmFkZ2VEb3QgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWl0ZW0uYmFkZ2VTdGF0dXMpIHtcbiAgICAgICAgICBpdGVtLmJhZGdlU3RhdHVzID0gJ2Vycm9yJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpdGVtLl90eXBlID0gaXRlbS5leHRlcm5hbExpbmsgPyAyIDogMTtcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBpdGVtLl90eXBlID0gMztcbiAgICAgIH1cblxuICAgICAgLy8gaWNvblxuICAgICAgaWYgKHR5cGVvZiBpdGVtLmljb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCB0eXBlID0gJ2NsYXNzJztcbiAgICAgICAgbGV0IHZhbHVlID0gaXRlbS5pY29uO1xuICAgICAgICAvLyBjb21wYXRpYmxlIGBhbnRpY29uIGFudGljb24tdXNlcmBcbiAgICAgICAgaWYgKH5pdGVtLmljb24uaW5kZXhPZihgYW50aWNvbi1gKSkge1xuICAgICAgICAgIHR5cGUgPSAnaWNvbic7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLScpLnNsaWNlKDEpLmpvaW4oJy0nKTtcbiAgICAgICAgfSBlbHNlIGlmICgvXmh0dHBzPzpcXC9cXC8vLnRlc3QoaXRlbS5pY29uKSkge1xuICAgICAgICAgIHR5cGUgPSAnaW1nJztcbiAgICAgICAgfVxuICAgICAgICBpdGVtLmljb24gPSB7IHR5cGUsIHZhbHVlIH0gYXMgYW55O1xuICAgICAgfVxuXG4gICAgICAvLyBzaG9ydGN1dFxuICAgICAgaWYgKHBhcmVudCAmJiBpdGVtLnNob3J0Y3V0ID09PSB0cnVlICYmIHBhcmVudC5zaG9ydGN1dFJvb3QgIT09IHRydWUpXG4gICAgICAgIHNob3J0Y3V0cy5wdXNoKGl0ZW0pO1xuXG4gICAgICBpdGVtLnRleHQgPVxuICAgICAgICBpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2ID8gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bikgOiBpdGVtLnRleHQ7XG5cbiAgICAgIC8vIGdyb3VwXG4gICAgICBpdGVtLmdyb3VwID0gdHlwZW9mIGl0ZW0uZ3JvdXAgIT09ICdib29sZWFuJyA/IHRydWUgOiBpdGVtLmdyb3VwO1xuXG4gICAgICAvLyBoaWRkZW5cbiAgICAgIGl0ZW0uX2hpZGRlbiA9IHR5cGVvZiBpdGVtLmhpZGUgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBpdGVtLmhpZGU7XG5cbiAgICAgIC8vIGFjbFxuICAgICAgaWYgKGl0ZW0uYWNsICYmIHRoaXMuYWNsU2VydmljZSkge1xuICAgICAgICBpdGVtLl9oaWRkZW4gPSAhdGhpcy5hY2xTZXJ2aWNlLmNhbihpdGVtLmFjbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soaXRlbSwgcGFyZW50LCBkZXB0aCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWRTaG9ydGN1dChzaG9ydGN1dHMpO1xuICAgIHRoaXMuX2NoYW5nZSQubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOlworCoMOowr3CvcOlwr/Cq8Omwo3Ct8Oowo/CnMOlwo3ClcOvwrzCjMOlworCoMOowr3CvcOkwr3CjcOnwr3CrsOowqfChMOlwojCmcOlwqbCgsOkwrjCi8OvwrzCmlxuICAgKiAxw6PCgMKBw6fCu8Kfw6TCuMKAw6XCnMKow6TCuMKLw6bCoMKHMMOnwprChMOoworCgsOnwoLCucOkwrjCi8OvwrzCiMOlwo3Cs8OjwoDCkMOkwrjCu8Olwq/CvMOowojCqsOjwoDCkcOoworCgsOnwoLCucOkwrjCi8OmwpbCucOvwrzCiVxuICAgKiAgICAgIDHDo8KAwoHDqMKLwqUgY2hpbGRyZW4gw6XCrcKYw6XCnMKoIMOjwoDCkHNob3J0Y3V0Um9vdDogdHJ1ZcOjwoDCkcOlwojCmcOmwpzCgMOkwrzCmMOlwoXCiMOjwoDCkMOmwo7CqMOowo3CkMOjwoDCkcOowr/CmcOnwqfCjcOmwpbCucOlwrzCj1xuICAgKiAgICAgIDLDo8KAwoHDpcKQwqbDpcKIwpnDpsKfwqXDpsKJwr7DpcK4wqbDpsKcwonDo8KAwpBkYXNoYm9hcmTDo8KAwpHDpcKtwpfDpsKgwrfDqcKTwr7DpsKOwqXDr8K8wozDqMKLwqXDpcKtwpjDpcKcwqjDpcKIwpnDpcKcwqjDpsKtwqTDqMKPwpzDpcKNwpXDp8KawoTDpMK4wovDpsKWwrnDpcKIwpvDpcK7wrrDpcK/wqvDpsKNwrfDpcKFwqXDpcKPwqNcbiAgICogICAgICAzw6PCgMKBw6XCkMKmw6XCiMKZw6bClMK+w6XCnMKoMMOoworCgsOnwoLCucOkwr3CjcOnwr3CrlxuICAgKi9cbiAgcHJpdmF0ZSBsb2FkU2hvcnRjdXQoc2hvcnRjdXRzOiBNZW51W10pIHtcbiAgICBpZiAoc2hvcnRjdXRzLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbHMgPSB0aGlzLmRhdGFbMF0uY2hpbGRyZW47XG4gICAgbGV0IHBvcyA9IGxzLmZpbmRJbmRleCh3ID0+IHcuc2hvcnRjdXRSb290ID09PSB0cnVlKTtcbiAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgcG9zID0gbHMuZmluZEluZGV4KHcgPT4gdy5saW5rLmluY2x1ZGVzKCdkYXNoYm9hcmQnKSk7XG4gICAgICBwb3MgPSAocG9zICE9PSAtMSA/IHBvcyA6IC0xKSArIDE7XG4gICAgICBjb25zdCBzaG9ydGN1dE1lbnUgPSA8TWVudT57XG4gICAgICAgIHRleHQ6ICfDpcK/wqvDpsKNwrfDqMKPwpzDpcKNwpUnLFxuICAgICAgICBpMThuOiAnc2hvcnRjdXQnLFxuICAgICAgICBpY29uOiAnaWNvbi1yb2NrZXQnLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICB9O1xuICAgICAgdGhpcy5kYXRhWzBdLmNoaWxkcmVuLnNwbGljZShwb3MsIDAsIHNob3J0Y3V0TWVudSk7XG4gICAgfVxuICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YVswXS5jaGlsZHJlbltwb3NdO1xuICAgIGlmIChfZGF0YS5pMThuICYmIHRoaXMuaTE4blNydikgX2RhdGEudGV4dCA9IHRoaXMuaTE4blNydi5mYW55aShfZGF0YS5pMThuKTtcbiAgICBfZGF0YSA9IE9iamVjdC5hc3NpZ24oX2RhdGEsIHtcbiAgICAgIHNob3J0Y3V0Um9vdDogdHJ1ZSxcbiAgICAgIF90eXBlOiAzLFxuICAgICAgX19pZDogLTEsXG4gICAgICBfZGVwdGg6IDEsXG4gICAgfSk7XG4gICAgX2RhdGEuY2hpbGRyZW4gPSBzaG9ydGN1dHMubWFwKGkgPT4ge1xuICAgICAgaS5fZGVwdGggPSAyO1xuICAgICAgcmV0dXJuIGk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgbWVudXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsK4woXDp8KpwrrDqMKPwpzDpcKNwpVcbiAgICovXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuX2NoYW5nZSQubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwqDCucOmwo3CrlVSTMOowq7CvsOnwr3CrsOowo/CnMOlwo3ClSBgX29wZW5gIMOlwrHCnsOmwoDCp1xuICAgKiBAcGFyYW0gdXJsIFVSTMOlwpzCsMOlwp3CgFxuICAgKi9cbiAgb3BlbmVkQnlVcmwodXJsOiBzdHJpbmcpIHtcbiAgICBpZiAoIXVybCkgcmV0dXJuO1xuXG4gICAgbGV0IGZpbmRJdGVtOiBNZW51ID0gbnVsbDtcbiAgICB0aGlzLnZpc2l0KGl0ZW0gPT4ge1xuICAgICAgaXRlbS5fb3BlbiA9IGZhbHNlO1xuICAgICAgaWYgKCFpdGVtLmxpbmspIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFmaW5kSXRlbSAmJiB1cmwuc3RhcnRzV2l0aChpdGVtLmxpbmspKSB7XG4gICAgICAgIGZpbmRJdGVtID0gaXRlbTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIWZpbmRJdGVtKSByZXR1cm47XG5cbiAgICBkbyB7XG4gICAgICBmaW5kSXRlbS5fb3BlbiA9IHRydWU7XG4gICAgICBmaW5kSXRlbSA9IGZpbmRJdGVtLl9fcGFyZW50O1xuICAgIH0gd2hpbGUgKGZpbmRJdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKgwrnDpsKNwq51cmzDqMKOwrfDpcKPwpbDqMKPwpzDpcKNwpXDpcKIwpfDqMKhwqhcbiAgICogQHBhcmFtIHVybFxuICAgKi9cbiAgZ2V0UGF0aEJ5VXJsKHVybDogc3RyaW5nKTogTWVudVtdIHtcbiAgICBsZXQgaXRlbTogTWVudSA9IG51bGw7XG4gICAgdGhpcy52aXNpdCgoaSwgcGFyZW50LCBkZXB0aCkgPT4ge1xuICAgICAgaWYgKGkubGluayA9PT0gdXJsKSB7XG4gICAgICAgIGl0ZW0gPSBpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmV0OiBNZW51W10gPSBbXTtcbiAgICBpZiAoIWl0ZW0pIHJldHVybiByZXQ7XG5cbiAgICBkbyB7XG4gICAgICByZXQuc3BsaWNlKDAsIDAsIGl0ZW0pO1xuICAgICAgaXRlbSA9IGl0ZW0uX19wYXJlbnQ7XG4gICAgfSB3aGlsZSAoaXRlbSk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlJC51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLmkxOG4kKSB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBFbGVtZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE92ZXJsYXksXG4gIE92ZXJsYXlSZWYsXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXG4gIE92ZXJsYXlDb25maWcsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gIFRlbXBsYXRlUG9ydGFsLFxuICBDb21wb25lbnRQb3J0YWwsXG4gIENvbXBvbmVudFR5cGUsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5leHBvcnQgdHlwZSBDb250ZXh0TWVudVR5cGUgPSBUZW1wbGF0ZVJlZjx7fT4gfCBDb21wb25lbnRUeXBlPHt9PjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51U2VydmljZSB7XG4gIHByaXZhdGUgcmVmOiBPdmVybGF5UmVmO1xuICBwcml2YXRlIHR5cGU6IENvbnRleHRNZW51VHlwZTtcbiAgcHJpdmF0ZSBjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5KSB7fVxuXG4gIHByaXZhdGUgY3JlYXRlKGV2ZW50OiBNb3VzZUV2ZW50LCBvcHRpb25zPzogT3ZlcmxheUNvbmZpZykge1xuICAgIGNvbnN0IGZha2VFbGVtZW50ID0gbmV3IEVsZW1lbnRSZWYoe1xuICAgICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiAoKTogQ2xpZW50UmVjdCA9PiAoe1xuICAgICAgICBib3R0b206IGV2ZW50LmNsaWVudFksXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgbGVmdDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgcmlnaHQ6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgIHRvcDogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcbiAgICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LFxuICAgICAgICB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSxcbiAgICAgICksXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcbiAgICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LFxuICAgICAgICB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSxcbiAgICAgICksXG4gICAgXTtcbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XG4gICAgICAucG9zaXRpb24oKVxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8oZmFrZUVsZW1lbnQpXG4gICAgICAud2l0aFBvc2l0aW9ucyhwb3NpdGlvbnMpO1xuICAgIHRoaXMucmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBwb3NpdGlvblN0cmF0ZWd5LFxuICAgICAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxuICAgICAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5jbG9zZSgpLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKSxcbiAgICApO1xuICAgIGlmICh0aGlzLnR5cGUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5yZWYuYXR0YWNoKG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLnR5cGUsIHRoaXMuY29udGFpbmVyUmVmKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKHRoaXMudHlwZSwgdGhpcy5jb250YWluZXJSZWYpKTtcbiAgICB9XG4gICAgdGhpcy5yZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlKCkpO1xuICB9XG5cbiAgb3BlbihcbiAgICBldmVudDogTW91c2VFdmVudCxcbiAgICByZWY6IENvbnRleHRNZW51VHlwZSxcbiAgICBjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgb3B0aW9ucz86IE92ZXJsYXlDb25maWcsXG4gICk6IGZhbHNlIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgdGhpcy50eXBlID0gcmVmO1xuICAgIHRoaXMuY29udGFpbmVyUmVmID0gY29udGFpbmVyUmVmO1xuICAgIHRoaXMuY3JlYXRlKGV2ZW50LCBvcHRpb25zKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGlmICghdGhpcy5yZWYpIHJldHVybjtcbiAgICB0aGlzLnJlZi5kZXRhY2goKTtcbiAgICB0aGlzLnJlZi5kaXNwb3NlKCk7XG4gICAgdGhpcy5yZWYgPSBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJy4uLy4uL3dpbl90b2tlbnMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSB3aW46IGFueSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICApIHt9XG5cbiAgLyoqXG4gICAqIMOowq7CvsOnwr3CrsOmwrvCmsOlworCqMOmwp3CocOowofCs8OmwozCh8Olwq7CmsOlwoXCg8OnwrTCoFxuICAgKiBAcGFyYW0gZWxlbWVudCDDpsKMwofDpcKuwprDpcKFwoPDp8K0wqDDr8K8wozDqcK7wpjDqMKuwqQgYGRvY3VtZW50LmJvZHlgXG4gICAqIEBwYXJhbSB0b3BPZmZzZXQgw6XCgcKPw6fCp8K7w6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkIGAwYFxuICAgKi9cbiAgc2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQ/OiBFbGVtZW50LCB0b3BPZmZzZXQgPSAwKSB7XG4gICAgaWYgKCFlbGVtZW50KSBlbGVtZW50ID0gdGhpcy5kb2MuYm9keTtcblxuICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcblxuICAgIGNvbnN0IHcgPSB0aGlzLndpbjtcbiAgICBpZiAodyAmJiB3LnNjcm9sbEJ5KSB7XG4gICAgICB3LnNjcm9sbEJ5KDAsIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gdG9wT2Zmc2V0KTtcblxuICAgICAgaWYgKHcucGFnZVlPZmZzZXQgPCAyMCkge1xuICAgICAgICB3LnNjcm9sbEJ5KDAsIC13LnBhZ2VZT2Zmc2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogw6bCu8Kaw6XCisKow6jCh8Kzw6nCocK2w6nCg8KoXG4gICAqIEBwYXJhbSB0b3BPZmZzZXQgw6XCgcKPw6fCp8K7w6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkIGAwYFxuICAgKi9cbiAgc2Nyb2xsVG9Ub3AodG9wT2Zmc2V0ID0gMCkge1xuICAgIHRoaXMuc2Nyb2xsVG9FbGVtZW50KHRoaXMuZG9jLmJvZHksIHRvcE9mZnNldCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFwcCwgTGF5b3V0LCBVc2VyLCBTZXR0aW5nc05vdGlmeSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuY29uc3QgTEFZT1VUX0tFWSA9ICdsYXlvdXQnO1xuY29uc3QgVVNFUl9LRVkgPSAndXNlcic7XG5jb25zdCBBUFBfS0VZID0gJ2FwcCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBub3RpZnkkID0gbmV3IFN1YmplY3Q8U2V0dGluZ3NOb3RpZnk+KCk7XG4gIHByaXZhdGUgX2FwcDogQXBwID0gbnVsbDtcbiAgcHJpdmF0ZSBfdXNlcjogVXNlciA9IG51bGw7XG4gIHByaXZhdGUgX2xheW91dDogTGF5b3V0ID0gbnVsbDtcblxuICBwcml2YXRlIGdldChrZXk6IHN0cmluZykge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgJ251bGwnKSB8fCBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH1cblxuICBnZXQgbGF5b3V0KCk6IExheW91dCB7XG4gICAgaWYgKCF0aGlzLl9sYXlvdXQpIHtcbiAgICAgIHRoaXMuX2xheW91dCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIDxMYXlvdXQ+e1xuICAgICAgICAgIGZpeGVkOiB0cnVlLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgYm94ZWQ6IGZhbHNlLFxuICAgICAgICAgIGxhbmc6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuZ2V0KExBWU9VVF9LRVkpLFxuICAgICAgKTtcbiAgICAgIHRoaXMuc2V0KExBWU9VVF9LRVksIHRoaXMuX2xheW91dCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9sYXlvdXQ7XG4gIH1cblxuICBnZXQgYXBwKCk6IEFwcCB7XG4gICAgaWYgKCF0aGlzLl9hcHApIHtcbiAgICAgIHRoaXMuX2FwcCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIDxBcHA+e1xuICAgICAgICAgIHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5nZXQoQVBQX0tFWSksXG4gICAgICApO1xuICAgICAgdGhpcy5zZXQoQVBQX0tFWSwgdGhpcy5fYXBwKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2FwcDtcbiAgfVxuXG4gIGdldCB1c2VyKCk6IFVzZXIge1xuICAgIGlmICghdGhpcy5fdXNlcikge1xuICAgICAgdGhpcy5fdXNlciA9IE9iamVjdC5hc3NpZ24oPFVzZXI+e30sIHRoaXMuZ2V0KFVTRVJfS0VZKSk7XG4gICAgICB0aGlzLnNldChVU0VSX0tFWSwgdGhpcy5fdXNlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl91c2VyO1xuICB9XG5cbiAgZ2V0IG5vdGlmeSgpOiBPYnNlcnZhYmxlPFNldHRpbmdzTm90aWZ5PiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5JC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldExheW91dChuYW1lOiBzdHJpbmcgfCBMYXlvdXQsIHZhbHVlPzogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5sYXlvdXRbbmFtZV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbGF5b3V0ID0gbmFtZTtcbiAgICB9XG4gICAgdGhpcy5zZXQoTEFZT1VUX0tFWSwgdGhpcy5fbGF5b3V0KTtcbiAgICB0aGlzLm5vdGlmeSQubmV4dCh7IHR5cGU6ICdsYXlvdXQnLCBuYW1lLCB2YWx1ZSB9IGFzIGFueSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzZXRBcHAodmFsdWU6IEFwcCkge1xuICAgIHRoaXMuX2FwcCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0KEFQUF9LRVksIHZhbHVlKTtcbiAgICB0aGlzLm5vdGlmeSQubmV4dCh7IHR5cGU6ICdhcHAnLCB2YWx1ZSB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldFVzZXIodmFsdWU6IFVzZXIpIHtcbiAgICB0aGlzLl91c2VyID0gdmFsdWU7XG4gICAgdGhpcy5zZXQoVVNFUl9LRVksIHZhbHVlKTtcbiAgICB0aGlzLm5vdGlmeSQubmV4dCh7IHR5cGU6ICd1c2VyJywgdmFsdWUgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcgfSBmcm9tICcuL3NlcnZpY2VzL2h0dHAvaHR0cC5jb25maWcnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZUNvbmZpZyB9IGZyb20gJy4vc2VydmljZXMvcmVzcG9uc2l2ZS9yZXNwb25zaXZlLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQWxhaW5UaGVtZUNvbmZpZyB7XG4gIGh0dHA/OiBIdHRwQ2xpZW50Q29uZmlnO1xuICByZXNwb25zaXZlPzogUmVzcG9uc2l2ZUNvbmZpZztcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluVGhlbWVDb25maWcgfSBmcm9tICcuLi8uLi90aGVtZS5jb25maWcnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZUNvbmZpZyB9IGZyb20gJy4vcmVzcG9uc2l2ZS5jb25maWcnO1xuXG5leHBvcnQgY29uc3QgUkVQX01BWCA9IDY7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUmVzcG9uc2l2ZVNlcnZpY2Uge1xuICBwcml2YXRlIGNvZzogUmVzcG9uc2l2ZUNvbmZpZztcbiAgY29uc3RydWN0b3IoY29nOiBBbGFpblRoZW1lQ29uZmlnKSB7XG4gICAgdGhpcy5jb2cgPSBPYmplY3QuYXNzaWduKFxuICAgICAgPFJlc3BvbnNpdmVDb25maWc+e1xuICAgICAgICBydWxlczoge1xuICAgICAgICAgIDE6IHsgeHM6IDI0IH0sXG4gICAgICAgICAgMjogeyB4czogMjQsIHNtOiAxMiB9LFxuICAgICAgICAgIDM6IHsgeHM6IDI0LCBzbTogMTIsIG1kOiA4IH0sXG4gICAgICAgICAgNDogeyB4czogMjQsIHNtOiAxMiwgbWQ6IDgsIGxnOiA2IH0sXG4gICAgICAgICAgNTogeyB4czogMjQsIHNtOiAxMiwgbWQ6IDgsIGxnOiA2LCB4bDogNCB9LFxuICAgICAgICAgIDY6IHsgeHM6IDI0LCBzbTogMTIsIG1kOiA4LCBsZzogNiwgeGw6IDQsIHh4bDogMiB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNvZyEucmVzcG9uc2l2ZSxcbiAgICApO1xuICAgIGlmIChcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuY29nLnJ1bGVzKVxuICAgICAgICAubWFwKGkgPT4gK2kpXG4gICAgICAgIC5zb21lKChpOiBudW1iZXIpID0+IGkgPCAxIHx8IGkgPiBSRVBfTUFYKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgW3RoZW1lXSB0aGUgcmVzcG9uc2VpdmUgcnVsZSBpbmRleCB2YWx1ZSByYW5nZSBtdXN0IGJlIDEtJHtSRVBfTUFYfWAsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGdlbkNscyhjb3VudDogbnVtYmVyKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmNvZy5ydWxlc1tjb3VudCA+IFJFUF9NQVggPyBSRVBfTUFYIDogTWF0aC5tYXgoY291bnQsIDEpXTtcbiAgICBjb25zdCBhbnRDb2xDbGFzcyA9ICdhbnQtY29sJztcbiAgICBjb25zdCBjbHNNYXAgPSBbYCR7YW50Q29sQ2xhc3N9LXhzLSR7cnVsZS54c31gXTtcbiAgICBpZiAocnVsZS5zbSkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LXNtLSR7cnVsZS5zbX1gKTtcbiAgICBpZiAocnVsZS5tZCkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LW1kLSR7cnVsZS5tZH1gKTtcbiAgICBpZiAocnVsZS5sZykgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LWxnLSR7cnVsZS5sZ31gKTtcbiAgICBpZiAocnVsZS54bCkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LXhsLSR7cnVsZS54bH1gKTtcbiAgICBpZiAocnVsZS54eGwpIGNsc01hcC5wdXNoKGAke2FudENvbENsYXNzfS14eGwtJHtydWxlLnh4bH1gKTtcbiAgICByZXR1cm4gY2xzTWFwO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxuICBJbmplY3RvcixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJy4uL21lbnUvbWVudS5zZXJ2aWNlJztcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2UgfSBmcm9tICcuLi9pMThuL2kxOG4nO1xuXG4vKipcbiAqIMOowq7CvsOnwr3CrsOmwqDCh8OpwqLCmFxuICogQHNlZSBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL3NlcnZpY2UjVGl0bGVTZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgVGl0bGVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfcHJlZml4ID0gJyc7XG4gIHByaXZhdGUgX3N1ZmZpeCA9ICcnO1xuICBwcml2YXRlIF9zZXBhcmF0b3IgPSAnIC0gJztcbiAgcHJpdmF0ZSBfcmV2ZXJzZSA9IGZhbHNlO1xuICBwcml2YXRlIF9kZWZhdWx0ID0gJ05vdCBQYWdlIE5hbWUnO1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSB0aXRsZTogVGl0bGUsXG4gICAgcHJpdmF0ZSBtZW51U3J2OiBNZW51U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcbiAgICBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuaTE4blNydilcbiAgICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldFRpdGxlKCkpO1xuICB9XG5cbiAgLyoqIMOowq7CvsOnwr3CrsOlwojChsOpwprClMOnwqzCpiAqL1xuICBzZXQgc2VwYXJhdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXBhcmF0b3IgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiDDqMKuwr7Dp8K9wq7DpcKJwo3Dp8K8woAgKi9cbiAgc2V0IHByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gdmFsdWU7XG4gIH1cblxuICAvKiogw6jCrsK+w6fCvcKuw6XCkMKOw6fCvMKAICovXG4gIHNldCBzdWZmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N1ZmZpeCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIMOowq7CvsOnwr3CrsOmwpjCr8OlwpDCpsOlwo/CjcOowr3CrCAqL1xuICBzZXQgcmV2ZXJzZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JldmVyc2UgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiDDqMKuwr7Dp8K9wq7DqcK7wpjDqMKuwqTDpsKgwofDqcKiwpjDpcKQwo0gKi9cbiAgc2V0IGRlZmF1bHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHQgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlFbGVtZW50KCk6IHN0cmluZyB7XG4gICAgY29uc3QgZWwgPVxuICAgICAgdGhpcy5kb2MucXVlcnlTZWxlY3RvcignLmFsYWluLWRlZmF1bHRfX2NvbnRlbnQtdGl0bGUgaDEnKSB8fFxuICAgICAgdGhpcy5kb2MucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyX190aXRsZScpO1xuICAgIGlmIChlbCkge1xuICAgICAgcmV0dXJuIGVsLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBwcml2YXRlIGdldEJ5Um91dGUoKTogc3RyaW5nIHtcbiAgICBsZXQgbmV4dCA9IHRoaXMuaW5qZWN0b3IuZ2V0KEFjdGl2YXRlZFJvdXRlKTtcbiAgICB3aGlsZSAobmV4dC5maXJzdENoaWxkKSBuZXh0ID0gbmV4dC5maXJzdENoaWxkO1xuICAgIGNvbnN0IGRhdGEgPSAobmV4dC5zbmFwc2hvdCAmJiBuZXh0LnNuYXBzaG90LmRhdGEpIHx8IHt9O1xuICAgIGlmIChkYXRhLnRpdGxlSTE4biAmJiB0aGlzLmkxOG5TcnYpXG4gICAgICBkYXRhLnRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGRhdGEudGl0bGVJMThuKTtcbiAgICByZXR1cm4gZGF0YS50aXRsZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlNZW51KCk6IHN0cmluZyB7XG4gICAgY29uc3QgbWVudXMgPSB0aGlzLm1lbnVTcnYuZ2V0UGF0aEJ5VXJsKHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcikudXJsKTtcbiAgICBpZiAoIW1lbnVzIHx8IG1lbnVzLmxlbmd0aCA8PSAwKSByZXR1cm4gJyc7XG5cbiAgICBjb25zdCBpdGVtID0gbWVudXNbbWVudXMubGVuZ3RoIC0gMV07XG4gICAgbGV0IHRpdGxlO1xuICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB0aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgIHJldHVybiB0aXRsZSB8fCBpdGVtLnRleHQ7XG4gIH1cblxuICAvKipcbiAgICogw6jCrsK+w6fCvcKuw6bCoMKHw6nCosKYXG4gICAqL1xuICBzZXRUaXRsZSh0aXRsZT86IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgdGl0bGUgPVxuICAgICAgICB0aGlzLmdldEJ5Um91dGUoKSB8fFxuICAgICAgICB0aGlzLmdldEJ5TWVudSgpIHx8XG4gICAgICAgIHRoaXMuZ2V0QnlFbGVtZW50KCkgfHxcbiAgICAgICAgdGhpcy5fZGVmYXVsdDtcbiAgICB9XG4gICAgaWYgKHRpdGxlICYmICFBcnJheS5pc0FycmF5KHRpdGxlKSkge1xuICAgICAgdGl0bGUgPSBbdGl0bGVdO1xuICAgIH1cblxuICAgIGxldCBuZXdUaXRsZXMgPSBbXTtcbiAgICBpZiAodGhpcy5fcHJlZml4KSB7XG4gICAgICBuZXdUaXRsZXMucHVzaCh0aGlzLl9wcmVmaXgpO1xuICAgIH1cbiAgICBuZXdUaXRsZXMucHVzaCguLi4odGl0bGUgYXMgc3RyaW5nW10pKTtcbiAgICBpZiAodGhpcy5fc3VmZml4KSB7XG4gICAgICBuZXdUaXRsZXMucHVzaCh0aGlzLl9zdWZmaXgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmV2ZXJzZSkge1xuICAgICAgbmV3VGl0bGVzID0gbmV3VGl0bGVzLnJldmVyc2UoKTtcbiAgICB9XG4gICAgdGhpcy50aXRsZS5zZXRUaXRsZShuZXdUaXRsZXMuam9pbih0aGlzLl9zZXBhcmF0b3IpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmkxOG4kKSB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBERUxPTl9MT0NBTEUgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignZGVsb24tbG9jYWxlJyk7XG4iLCJpbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlLnR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgPExvY2FsZURhdGE+e1xuICBhYmJyOiAnemgtQ04nLFxuICBleGNlcHRpb246IHtcbiAgICA0MDM6ICfDpsKKwrHDpsKtwonDr8K8wozDpMK9wqDDpsKXwqDDpsKdwoPDqMKuwr/DqcKXwq7DqMKvwqXDqcKhwrXDqcKdwqInLFxuICAgIDQwNDogJ8OmworCscOmwq3CicOvwrzCjMOkwr3CoMOowq7Cv8OpwpfCrsOnwprChMOpwqHCtcOpwp3CosOkwrjCjcOlwq3CmMOlwpzCqCcsXG4gICAgNTAwOiAnw6bCisKxw6bCrcKJw6/CvMKMw6bCnMKNw6XCisKhw6XCmcKow6XCh8K6w6nClMKZw6TCusKGJyxcbiAgICBiYWNrVG9Ib21lOiAnw6jCv8KUw6XCm8Kew6nCpsKWw6nCocK1JyxcbiAgfSxcbiAgbm90aWNlSWNvbjoge1xuICAgIGVtcHR5VGV4dDogJ8OmwprCgsOmwpfCoMOmwpXCsMOmwo3CricsXG4gICAgY2xlYXJUZXh0OiAnw6bCuMKFw6fCqcK6JyxcbiAgfSxcbiAgcmV1c2VUYWI6IHtcbiAgICBjbG9zZTogJ8OlwoXCs8OpwpfCrcOmwqDCh8Onwq3CvicsXG4gICAgY2xvc2VPdGhlcjogJ8OlwoXCs8OpwpfCrcOlwoXCtsOlwq7Cg8OmwqDCh8Onwq3CvicsXG4gICAgY2xvc2VSaWdodDogJ8OlwoXCs8OpwpfCrcOlwo/Cs8Okwr7Cp8OmwqDCh8Onwq3CvicsXG4gICAgY2xlYXI6ICfDpsK4woXDp8KpwronLFxuICB9LFxuICB0YWdTZWxlY3Q6IHtcbiAgICBleHBhbmQ6ICfDpcKxwpXDpcK8woAnLFxuICAgIGNvbGxhcHNlOiAnw6bClMK2w6jCtcK3JyxcbiAgfSxcbiAgbWluaVByb2dyZXNzOiB7XG4gICAgdGFyZ2V0OiAnw6fCm8Kuw6bCoMKHw6XCgMK8w6/CvMKaJ1xuICB9LFxuICBzdDoge1xuICAgIHRvdGFsOiAnw6XChcKxIHt7dG90YWx9fSDDpsKdwqEnLFxuICB9LFxuICBzZjoge1xuICAgIHN1Ym1pdDogJ8Omwo/CkMOkwrrCpCcsXG4gICAgcmVzZXQ6ICfDqcKHwo3Dp8K9wq4nLFxuICAgIHNlYXJjaDogJ8OmwpDCnMOnwrTCoicsXG4gICAgZWRpdDogJ8Okwr/CncOlwq3CmCcsXG4gICAgYWRkVGV4dDogJ8OmwrfCu8OlworCoCcsXG4gICAgcmVtb3ZlVGV4dDogJ8OnwqfCu8OpwpnCpCcsXG4gICAgY2hlY2tBbGxUZXh0OiAnw6XChcKow6nCgMKJJyxcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIFByb3ZpZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi9sb2NhbGUudHlwZXMnO1xuaW1wb3J0IHsgREVMT05fTE9DQUxFIH0gZnJvbSAnLi9sb2NhbGUudG9rZW5zJztcbmltcG9ydCB6aENOIGZyb20gJy4vbGFuZ3VhZ2VzL3poLUNOJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERlbG9uTG9jYWxlU2VydmljZSB7XG4gIHByaXZhdGUgX2xvY2FsZTogTG9jYWxlRGF0YTtcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMb2NhbGVEYXRhPih0aGlzLl9sb2NhbGUpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoREVMT05fTE9DQUxFKSBsb2NhbGU6IExvY2FsZURhdGEpIHtcbiAgICB0aGlzLnNldExvY2FsZShsb2NhbGUgfHwgemhDTik7XG4gIH1cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TG9jYWxlRGF0YT4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRMb2NhbGUobG9jYWxlOiBMb2NhbGVEYXRhKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvY2FsZSAmJiB0aGlzLl9sb2NhbGUuYWJiciA9PT0gbG9jYWxlLmFiYnIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gbG9jYWxlO1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGxvY2FsZSk7XG4gIH1cblxuICBnZXQgbG9jYWxlKCk6IExvY2FsZURhdGEge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cblxuICBnZXREYXRhKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGVbcGF0aF0gfHwge307XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlkoZXhpc3Q6IERlbG9uTG9jYWxlU2VydmljZSwgbG9jYWxlOiBMb2NhbGVEYXRhKTogRGVsb25Mb2NhbGVTZXJ2aWNlIHtcbiAgcmV0dXJuIGV4aXN0IHx8IG5ldyBEZWxvbkxvY2FsZVNlcnZpY2UobG9jYWxlKTtcbn1cblxuZXhwb3J0IGNvbnN0IERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZSAgIDogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICB1c2VGYWN0b3J5OiBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZLFxuICBkZXBzICAgICAgOiBbIFsgbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBEZWxvbkxvY2FsZVNlcnZpY2UgXSwgREVMT05fTE9DQUxFIF1cbn07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgemhDTiBmcm9tICcuL2xhbmd1YWdlcy96aC1DTic7XG5cbmltcG9ydCB7IERFTE9OX0xPQ0FMRSB9IGZyb20gJy4vbG9jYWxlLnRva2Vucyc7XG5pbXBvcnQgeyBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUiB9IGZyb20gJy4vbG9jYWxlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IERFTE9OX0xPQ0FMRSwgdXNlVmFsdWU6IHpoQ04gfSxcbiAgICBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRGVsb25Mb2NhbGVNb2R1bGUge31cbiIsImltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUudHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCA8TG9jYWxlRGF0YT57XG4gIGFiYnI6ICdlbi1VUycsXG4gIGV4Y2VwdGlvbjoge1xuICAgIDQwMzogYFNvcnJ5LCB5b3UgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gdGhpcyBwYWdlYCxcbiAgICA0MDQ6IGBTb3JyeSwgdGhhdCBwYWdlIGRvbid0IGV4aXN0YCxcbiAgICA1MDA6IGBTb3JyeSwgc2VydmVyIGVycm9yYCxcbiAgICBiYWNrVG9Ib21lOiAnQmFjayBUbyBIb21lJyxcbiAgfSxcbiAgbm90aWNlSWNvbjoge1xuICAgIGVtcHR5VGV4dDogJ05vIGRhdGEnLFxuICAgIGNsZWFyVGV4dDogJ0NsZWFyJyxcbiAgfSxcbiAgcmV1c2VUYWI6IHtcbiAgICBjbG9zZTogJ0Nsb3NlIHRhYicsXG4gICAgY2xvc2VPdGhlcjogJ0Nsb3NlIG90aGVyIHRhYnMnLFxuICAgIGNsb3NlUmlnaHQ6ICdDbG9zZSB0YWJzIHRvIHJpZ2h0JyxcbiAgICBjbGVhcjogJ0NsZWFyIHRhYnMnLFxuICB9LFxuICB0YWdTZWxlY3Q6IHtcbiAgICBleHBhbmQ6ICdFeHBhbmQnLFxuICAgIGNvbGxhcHNlOiAnQ29sbGFwc2UnLFxuICB9LFxuICBtaW5pUHJvZ3Jlc3M6IHtcbiAgICB0YXJnZXQ6ICdUYXJnZXQ6ICcsXG4gIH0sXG4gIHN0OiB7XG4gICAgdG90YWw6ICd7e3JhbmdlWzBdfX0gLSB7e3JhbmdlWzFdfX0gb2Yge3t0b3RhbH19JyxcbiAgfSxcbiAgc2Y6IHtcbiAgICBzdWJtaXQ6ICdTdWJtaXQnLFxuICAgIHJlc2V0OiAnUmVzZXQnLFxuICAgIHNlYXJjaDogJ1NlYXJjaCcsXG4gICAgZWRpdDogJ1NhdmUnLFxuICAgIGFkZFRleHQ6ICdBZGQnLFxuICAgIHJlbW92ZVRleHQ6ICdSZW1vdmUnLFxuICAgIGNoZWNrQWxsVGV4dDogJ0NoZWNrIGFsbCcsXG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS50eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IDxMb2NhbGVEYXRhPntcbiAgYWJicjogJ3poLVRXJyxcbiAgZXhjZXB0aW9uOiB7XG4gICAgNDAzOiAnw6bCisKxw6bCrcKJw6/CvMKMw6XCpsKzw6fChMKhw6bCrMKKw6jCqMKqw6XClcKPw6jCqcKyw6nCoMKBw6nCncKiJyxcbiAgICA0MDQ6ICfDpsKKwrHDpsKtwonDr8K8wozDpcKmwrPDqMKowqrDpcKVwo/Dp8KawoTDqcKgwoHDqcKdwqLDpMK4wo3DpcKtwpjDpcKcwqgnLFxuICAgIDUwMDogJ8OmworCscOmwq3CicOvwrzCjMOmwpzCjcOlwovCmcOlwpnCqMOlwofCusOpwozCr8OkwrrChicsXG4gICAgYmFja1RvSG9tZTogJ8Oowr/ClMOlwpvCnsOpwqbClsOpwqDCgScsXG4gIH0sXG4gIG5vdGljZUljb246IHtcbiAgICBlbXB0eVRleHQ6ICfDpsKawqvDp8KEwqHDpsKVwrjDpsKTwponLFxuICAgIGNsZWFyVGV4dDogJ8OmwrjChcOnwqnCuicsXG4gIH0sXG4gIHJldXNlVGFiOiB7XG4gICAgY2xvc2U6ICfDqcKXwpzDqcKWwonDpsKowpnDp8Kwwr0nLFxuICAgIGNsb3NlT3RoZXI6ICfDqcKXwpzDqcKWwonDpcKFwrbDpcKuwoPDpsKowpnDp8Kwwr0nLFxuICAgIGNsb3NlUmlnaHQ6ICfDqcKXwpzDqcKWwonDpcKPwrPDpcKBwrTDpsKowpnDp8Kwwr0nLFxuICAgIGNsZWFyOiAnw6bCuMKFw6fCqcK6JyxcbiAgfSxcbiAgdGFnU2VsZWN0OiB7XG4gICAgZXhwYW5kOiAnw6XCscKVw6nClsKLJyxcbiAgICBjb2xsYXBzZTogJ8OmwpTCtsOowrXCtycsXG4gIH0sXG4gIG1pbmlQcm9ncmVzczoge1xuICAgIHRhcmdldDogJ8OnwpvCrsOmwqjCmcOlwoDCvMOvwrzCmicsXG4gIH0sXG4gIHN0OiB7XG4gICAgdG90YWw6ICfDpcKFwrEge3t0b3RhbH19IMOmwqLCnScsXG4gIH0sXG4gIHNmOiB7XG4gICAgc3VibWl0OiAnw6bCj8KQw6TCusKkJyxcbiAgICByZXNldDogJ8OpwofCjcOnwr3CricsXG4gICAgc2VhcmNoOiAnw6bCkMKcw6fCtMKiJyxcbiAgICBlZGl0OiAnw6TCv8Kdw6XCrcKYJyxcbiAgICBhZGRUZXh0OiAnw6bCt8K7w6XCisKgJyxcbiAgICByZW1vdmVUZXh0OiAnw6fCp8K7w6nCmcKkJyxcbiAgICBjaGVja0FsbFRleHQ6ICfDpcKFwqjDqcKBwrgnLFxuICB9LFxufTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOek1vZGFsU2VydmljZSwgTW9kYWxPcHRpb25zRm9yU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsSGVscGVyT3B0aW9ucyB7XG4gIC8qKiDDpcKkwqfDpcKwwo/Dr8K8wpvDpMK+wovDpcKmwoLDr8K8wppsZ8OjwoDCgTYwMMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBsZ2AgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlcjtcbiAgLyoqIMOlwq/CucOowq/CncOmwqHChiBbTW9kYWxPcHRpb25zRm9yU2VydmljZV0oaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9tb2RhbC9uei1tb2RhbC50eXBlLnRzKSDDpcKPwoLDpsKVwrAgKi9cbiAgbW9kYWxPcHRpb25zPzogTW9kYWxPcHRpb25zRm9yU2VydmljZTtcbiAgLyoqIMOmwpjCr8OlwpDCpsOnwrLCvsOlwofChsOvwrzCiMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYMOvwrzCicOvwrzCjMOowovCpcOowr/ClMOlwpvCnsOlwoDCvMOpwp3CnsOnwqnCusOlwoDCvMOvwrzCiGBudWxsYMOmwojClmB1bmRlZmluZWRgw6/CvMKJw6jCp8KGw6TCuMK6w6bCiMKQw6XCisKfw6/CvMKMw6XCkMKmw6XCiMKZw6jCp8KGw6TCuMK6w6nClMKZw6jCr8KvICovXG4gIGV4YWN0PzogYm9vbGVhbjtcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwozChcOowqPCucOmwqDCh8Onwq3CvsOpwqHCtcOvwrzCjMOkwr/CrsOlwqTCjcOmwqjCocOmwoDCgcOlwozChcOlwpDCq8OmwqDCh8Onwq3CvsOpwpfCtMOowrfCncOpwpfCrsOpwqLCmCAqL1xuICBpbmNsdWRlVGFicz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogw6XCr8K5w6jCr8Kdw6bCocKGw6jCvsKFw6XCisKpw6fCscK7XG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTW9kYWxIZWxwZXIge1xuICBwcml2YXRlIHpJbmRleCA9IDUwMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogTnpNb2RhbFNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIMOmwp7ChMOlwrvCusOkwrjCgMOkwrjCqsOlwq/CucOowq/CncOmwqHChlxuICAgKlxuICAgKiBAcGFyYW0gY29tcCDDp8K7woTDpMK7wrZcbiAgICogQHBhcmFtIHBhcmFtcyDDp8K7woTDpMK7wrbDpcKPwoLDpsKVwrBcbiAgICogQHBhcmFtIG9wdGlvbnMgw6nCosKdw6XCpMKWw6XCj8KCw6bClcKwXG4gICAqXG4gICAqIMOnwqTCusOkwr7Ci8OvwrzCmlxuICBgYGB0c1xudGhpcy5tb2RhbEhlbHBlci5jcmVhdGUoRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbi8vIMOlwq/CucOkwrrCjsOnwrvChMOkwrvCtsOnwprChMOmwojCkMOlworCnybDpcKFwrPDqcKXwq3Dp8KawoTDpcKkwoTDp8KQwobDqMKvwrTDpsKYwo5cbi8vIMOmwojCkMOlworCn1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XG4vLyDDpcKFwrPDqcKXwq1cbnRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG5gYGBcbiAgICovXG4gIGNyZWF0ZShcbiAgICBjb21wOiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiBNb2RhbEhlbHBlck9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBzaXplOiAnbGcnLFxuICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICBpbmNsdWRlVGFiczogZmFsc2UsXG4gICAgfSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuICAgICAgbGV0IGNscyA9ICcnLFxuICAgICAgICB3aWR0aCA9ICcnO1xuICAgICAgaWYgKG9wdGlvbnMuc2l6ZSkge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB3aWR0aCA9IGAke29wdGlvbnMuc2l6ZX1weGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xzID0gYG1vZGFsLSR7b3B0aW9ucy5zaXplfWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLmluY2x1ZGVUYWJzKSB7XG4gICAgICAgIGNscyArPSAnIG1vZGFsLWluY2x1ZGUtdGFicyc7XG4gICAgICB9XG4gICAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZSA9IHtcbiAgICAgICAgbnpXcmFwQ2xhc3NOYW1lOiBjbHMsXG4gICAgICAgIG56Q29udGVudDogY29tcCxcbiAgICAgICAgbnpXaWR0aDogd2lkdGggPyB3aWR0aCA6IHVuZGVmaW5lZCxcbiAgICAgICAgbnpGb290ZXI6IG51bGwsXG4gICAgICAgIG56Q29tcG9uZW50UGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIG56WkluZGV4OiArK3RoaXMuekluZGV4LFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHN1YmplY3QgPSB0aGlzLnNydi5jcmVhdGUoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMubW9kYWxPcHRpb25zKSxcbiAgICAgICk7XG4gICAgICBjb25zdCBhZnRlckNsb3NlJCA9IHN1YmplY3QuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLmV4YWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHJlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICBhZnRlckNsb3NlJC51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCnsKEw6XCu8K6w6nCncKZw6bCgMKBw6bCocKGw6/CvMKMw6fCgsK5w6XCh8K7w6jCksKZw6XCscKCw6TCuMKNw6XChcKBw6jCrsK4w6XChcKzw6nCl8KtXG4gICAqXG4gICAqIEBwYXJhbSBjb21wIMOnwrvChMOkwrvCtlxuICAgKiBAcGFyYW0gcGFyYW1zIMOnwrvChMOkwrvCtsOlwo/CgsOmwpXCsFxuICAgKiBAcGFyYW0gb3B0aW9ucyDDqcKiwp3DpcKkwpbDpcKPwoLDpsKVwrBcbiAgICpcbiAgICogw6fCpMK6w6TCvsKLw6/CvMKaXG4gIGBgYHRzXG50aGlzLm1vZGFsSGVscGVyLm9wZW4oRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbi8vIMOlwq/CucOkwrrCjsOnwrvChMOkwrvCtsOnwprChMOmwojCkMOlworCnybDpcKFwrPDqcKXwq3Dp8KawoTDpcKkwoTDp8KQwobDqMKvwrTDpsKYwo5cbi8vIMOmwojCkMOlworCn1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XG4vLyDDpcKFwrPDqcKXwq1cbnRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG5gYGBcbiAgICovXG4gIGNyZWF0ZVN0YXRpYyhcbiAgICBjb21wOiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiBNb2RhbEhlbHBlck9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBtb2RhbE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgeyBuek1hc2tDbG9zYWJsZTogZmFsc2UgfSxcbiAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5tb2RhbE9wdGlvbnMsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoY29tcCwgcGFyYW1zLCBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7IG1vZGFsT3B0aW9ucyB9KSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCicKTw6XCvMKAw6XCr8K5w6jCr8Kdw6bCocKGXG4gICAqIEBwYXJhbSBjb21wIMOnwrvChMOkwrvCtlxuICAgKiBAcGFyYW0gcGFyYW1zIMOnwrvChMOkwrvCtsOlwo/CgsOmwpXCsFxuICAgKiBAcGFyYW0gc2l6ZSDDpcKkwqfDpcKwwo/Dr8K8wpvDpMK+wovDpcKmwoLDr8K8wppsZ8OjwoDCgTYwMMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmxnXG4gICAqIEBwYXJhbSBvcHRpb25zIMOlwq/CucOowq/CncOmwqHChiBgTW9kYWxPcHRpb25zRm9yU2VydmljZWAgw6XCj8KCw6bClcKwXG4gICAqXG4gICAqIMOnwqTCusOkwr7Ci8OvwrzCmlxuICBgYGB0c1xudGhpcy5tb2RhbEhlbHBlci5vcGVuKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4vLyDDpcKvwrnDpMK6wo7Dp8K7woTDpMK7wrbDp8KawoTDpsKIwpDDpcKKwp8mw6XChcKzw6nCl8Ktw6fCmsKEw6XCpMKEw6fCkMKGw6jCr8K0w6bCmMKOXG4vLyDDpsKIwpDDpcKKwp9cbnRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcbnRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xuLy8gw6XChcKzw6nCl8KtXG50aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xuYGBgXG4gICAqL1xuICBvcGVuKFxuICAgIGNvbXA6IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgc2l6ZTogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyID0gJ2xnJyxcbiAgICBvcHRpb25zPzogTW9kYWxPcHRpb25zRm9yU2VydmljZSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoY29tcCwgcGFyYW1zLCB7XG4gICAgICBzaXplLFxuICAgICAgbW9kYWxPcHRpb25zOiBvcHRpb25zLFxuICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIMOpwp3CmcOmwoDCgcOmwqHChsOvwrzCjMOnwoLCucOlwofCu8OowpLCmcOlwrHCgsOkwrjCjcOlwoXCgcOowq7CuMOlwoXCs8OpwpfCrVxuICAgKiBAcGFyYW0gY29tcCDDp8K7woTDpMK7wrZcbiAgICogQHBhcmFtIHBhcmFtcyDDp8K7woTDpMK7wrbDpcKPwoLDpsKVwrBcbiAgICogQHBhcmFtIHNpemUgw6XCpMKnw6XCsMKPw6/CvMKbw6TCvsKLw6XCpsKCw6/CvMKabGfDo8KAwoE2MDDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppsZ1xuICAgKiBAcGFyYW0gb3B0aW9ucyDDpcKvwrnDqMKvwp3DpsKhwoYgYE1vZGFsT3B0aW9uc0ZvclNlcnZpY2VgIMOlwo/CgsOmwpXCsFxuICAgKlxuICAgKiDDp8KkwrrDpMK+wovDr8K8wppcbiAgYGBgdHNcbnRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuLy8gw6XCr8K5w6TCusKOw6fCu8KEw6TCu8K2w6fCmsKEw6bCiMKQw6XCisKfJsOlwoXCs8OpwpfCrcOnwprChMOlwqTChMOnwpDChsOowq/CtMOmwpjCjlxuLy8gw6bCiMKQw6XCisKfXG50aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG50aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcbi8vIMOlwoXCs8OpwpfCrVxudGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcbmBgYFxuICAgKi9cbiAgc3RhdGljKFxuICAgIGNvbXA6IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgc2l6ZTogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyID0gJ2xnJyxcbiAgICBvcHRpb25zPzogYW55LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLm9wZW4oXG4gICAgICBjb21wLFxuICAgICAgcGFyYW1zLFxuICAgICAgc2l6ZSxcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBuek1hc2tDbG9zYWJsZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOekRyYXdlclNlcnZpY2UsIE56RHJhd2VyT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYXdlckhlbHBlck9wdGlvbnMge1xuICAvKipcbiAgICogw6XCpMKnw6XCsMKPw6/CvMKbw6TCvsKLw6XCpsKCw6/CvMKabGfDo8KAwoE2MDDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgbWRgXG4gICAqXG4gICAqIHwgw6fCscK7w6XCnsKLIHwgw6nCu8KYw6jCrsKkw6XCpMKnw6XCsMKPIHxcbiAgICogfCAtLS0gfCAtLS0tLS0gfFxuICAgKiB8IGBzbWAgfCBgMzAwYCB8XG4gICAqIHwgYG1kYCB8IGA2MDBgIHxcbiAgICogfCBgbGdgIHwgYDkwMGAgfFxuICAgKiB8IGB4bGAgfCBgMTIwMGAgfFxuICAgKlxuICAgKiA+IMOkwrvCpcOkwrjCisOlwoDCvMOvwrzCjMOlwo/Cr8OpwoDCmsOowr/Ch8OowqbChsOnwpvClsOnwpvCuMOlwrrClMOnwprChExFU1PDpcKPwoLDpsKVwrDDqMKHwqrDqMKhwozDqMKwwoPDpsKVwrRcbiAgICovXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgbnVtYmVyO1xuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6XCjMKFw6XCkMKrw6XCusKVw6nCg8Kow6XCt8Klw6XChcK3w6bCncKhw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHRydWVgXG4gICAqL1xuICBmb290ZXI/OiBib29sZWFuO1xuICAvKipcbiAgICogw6XCusKVw6nCg8Kow6XCt8Klw6XChcK3w6bCncKhw6nCq8KYw6XCusKmw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDU1YFxuICAgKi9cbiAgZm9vdGVySGVpZ2h0PzogbnVtYmVyO1xuICAvKiogw6bCisK9w6XCscKJIFtOekRyYXdlck9wdGlvbnNdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2RyYXdlci96aCNuemRyYXdlcm9wdGlvbnMpIMOlwo/CgsOmwpXCsCAqL1xuICBkcmF3ZXJPcHRpb25zPzogTnpEcmF3ZXJPcHRpb25zO1xufVxuXG4vKipcbiAqIMOmworCvcOlwrHCicOowr7ChcOlworCqcOnwrHCu1xuICpcbiAqICoqw6bCs8Kow6bChMKPw6/CvMKaKiogw6bCnsKEw6XCu8K6w6fCu8KTw6bCnsKcw6nCg8K9w6XCj8Kvw6jCosKrw6jCrsKiw6nCmMKFw6/CvMKMw6TCvcKGw6bCsMK4w6jCv8Kcw6nCg8K9w6TCuMKNw6TCvMKaw6jCp8Kmw6XCj8KRIGBvYnNlcnZlci5lcnJvcmBcbiAqXG4gKiDDp8KkwrrDpMK+wovDr8K8wppcbmBgYHRzXG50aGlzLmRyYXdlckhlbHBlci5jcmVhdGUoJ0VkaXQnLCBGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuLy8gw6XCr8K5w6TCusKOw6fCu8KEw6TCu8K2w6fCmsKEw6bCiMKQw6XCisKfJsOlwoXCs8OpwpfCrcOnwprChMOlwqTChMOnwpDChsOowq/CtMOmwpjCjlxuLy8gw6bCiMKQw6XCisKfXG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKGRhdGEpO1xudGhpcy5OekRyYXdlclJlZi5jbG9zZSh0cnVlKTtcbi8vIMOlwoXCs8OpwpfCrVxudGhpcy5OekRyYXdlclJlZi5jbG9zZSgpO1xudGhpcy5OekRyYXdlclJlZi5jbG9zZShmYWxzZSk7XG5gYGBcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBEcmF3ZXJIZWxwZXIge1xuICAvLyDDpcKkwqfDqcKDwqjDpcKIwobDpsKDwoXDpcKGwrXDpMK4wovDpsKKwr3DpcKxwonDp8KawoTDpcKxwoLDp8K6wqfDpsKvwpQgTW9kYWwgw6TCvMKaw6bCm8K0w6TCvcKOw6TCuMKAw6TCusKbXG4gIHByaXZhdGUgekluZGV4ID0gNDAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBOekRyYXdlclNlcnZpY2UpIHsgfVxuXG4gIC8qKlxuICAgKiDDpsKewoTDpcK7wrrDpMK4woDDpMK4wqrDpsKKwr3DpcKxwolcbiAgICovXG4gIGNyZWF0ZShcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGNvbXA6IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IERyYXdlckhlbHBlck9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbig8RHJhd2VySGVscGVyT3B0aW9ucz57XG4gICAgICBzaXplOiAnbWQnLFxuICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgZm9vdGVySGVpZ2h0OiA1NSxcbiAgICAgIGRyYXdlck9wdGlvbnM6IHtcbiAgICAgICAgbnpQbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgICAgIG56V3JhcENsYXNzTmFtZTogJydcbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICBjb25zdCB7IHNpemUsIGZvb3RlciwgZm9vdGVySGVpZ2h0LCBkcmF3ZXJPcHRpb25zIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE56RHJhd2VyT3B0aW9ucyA9IHtcbiAgICAgICAgbnpDb250ZW50OiBjb21wLFxuICAgICAgICBuekNvbnRlbnRQYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgbnpaSW5kZXg6ICsrdGhpcy56SW5kZXgsXG4gICAgICAgIG56VGl0bGU6IHRpdGxlXG4gICAgICB9O1xuXG4gICAgICBpZiAoZm9vdGVyKSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zLm56Qm9keVN0eWxlID0ge1xuICAgICAgICAgIGhlaWdodDogYGNhbGMoMTAwJSAtICR7Zm9vdGVySGVpZ2h0fXB4KWAsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICAncGFkZGluZy1ib3R0b20nOiBgJHtmb290ZXJIZWlnaHQgLSAyfXB4YFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHNpemUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zW2RyYXdlck9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICd0b3AnIHx8IGRyYXdlck9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ256SGVpZ2h0JyA6ICdueldpZHRoJ10gPSBvcHRpb25zLnNpemU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZhdWx0T3B0aW9ucy5ueldyYXBDbGFzc05hbWUgPSAoZHJhd2VyT3B0aW9ucy5ueldyYXBDbGFzc05hbWUgKyBgIGRyYXdlci0ke29wdGlvbnMuc2l6ZX1gKS50cmltKCk7XG4gICAgICAgIGRlbGV0ZSBkcmF3ZXJPcHRpb25zLm56V3JhcENsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3ViamVjdCA9IHRoaXMuc3J2LmNyZWF0ZShcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgZHJhd2VyT3B0aW9ucyksXG4gICAgICApO1xuICAgICAgY29uc3QgYWZ0ZXJDbG9zZSQgPSBzdWJqZWN0LmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzICE9IG51bGwgJiYgcmVzICE9PSBmYWxzZSkge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICBhZnRlckNsb3NlJC51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCnsKEw6XCu8K6w6TCuMKAw6TCuMKqw6bCisK9w6XCscKJw6/CvMKMw6fCgsK5w6XCh8K7w6jCksKZw6XCscKCw6TCuMKNw6XChcKBw6jCrsK4w6XChcKzw6nCl8KtXG4gICAqL1xuICBzdGF0aWMoXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBjb21wOiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiBEcmF3ZXJIZWxwZXJPcHRpb25zXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgZHJhd2VyT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7IG56TWFza0Nsb3NhYmxlOiBmYWxzZSB9LFxuICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLmRyYXdlck9wdGlvbnMsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUodGl0bGUsIGNvbXAsIHBhcmFtcywgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgeyBkcmF3ZXJPcHRpb25zIH0pKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cENsaWVudCxcbiAgSHR0cEhlYWRlcnMsXG4gIEh0dHBQYXJhbXMsXG4gIEh0dHBSZXNwb25zZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWxhaW5UaGVtZUNvbmZpZyB9IGZyb20gJy4uLy4uL3RoZW1lLmNvbmZpZyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50Q29uZmlnIH0gZnJvbSAnLi9odHRwLmNvbmZpZyc7XG5cbi8qKlxuICogw6XCsMKBw6jCo8KFSHR0cENsaWVudMOvwrzCjMOkwrjCu8OowqbCgcOowqfCo8OlwobCs8OvwrzCmlxuICogKyDDpMK8wpjDpcKMwpZIdHRwQ2xpZW50w6XCnMKow6XCj8KCw6bClcKww6TCuMKKw6TCvsK/w6XCiMKpw6bCgMKnXG4gKiArIMOnwrvCn8OkwrjCgMOlwq7CnsOnwo7CsCBsb2FkaW5nXG4gKiArIMOnwrvCn8OkwrjCgMOlwqTChMOnwpDChsOmwpfCtsOpwpfCtMOmwqDCvMOlwrzCj8OpwpfCrsOpwqLCmFxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNsYXNzLW5hbWVcbmV4cG9ydCBjbGFzcyBfSHR0cENsaWVudCB7XG4gIHByaXZhdGUgY29nOiBIdHRwQ2xpZW50Q29uZmlnO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIGNvZzogQWxhaW5UaGVtZUNvbmZpZykge1xuICAgIHRoaXMuY29nID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIDxIdHRwQ2xpZW50Q29uZmlnPntcbiAgICAgICAgbnVsbFZhbHVlSGFuZGxpbmc6ICdpbmNsdWRlJyxcbiAgICAgICAgZGF0ZVZhbHVlSGFuZGxpbmc6ICd0aW1lc3RhbXAnLFxuICAgICAgfSxcbiAgICAgIGNvZyEuaHR0cCxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xuXG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKtwqPDpcKcwqjDpcKKwqDDqMK9wr3DpMK4wq0gKi9cbiAgZ2V0IGxvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gIH1cblxuICBwYXJzZVBhcmFtcyhwYXJhbXM6IGFueSk6IEh0dHBQYXJhbXMge1xuICAgIGNvbnN0IG5ld1BhcmFtcyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IF9kYXRhID0gcGFyYW1zW2tleV07XG4gICAgICAvLyDDpcK/wr3Dp8KVwqXDp8KpwrrDpcKAwrxcbiAgICAgIGlmICh0aGlzLmNvZy5udWxsVmFsdWVIYW5kbGluZyA9PT0gJ2lnbm9yZScgJiYgX2RhdGEgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgLy8gw6XCsMKGw6bCl8K2w6nCl8K0w6jCvcKsw6XCjMKWw6TCuMK6w6/CvMKaw6bCl8K2w6nCl8K0w6bCiMKzICjDp8KnwpIpXG4gICAgICBpZiAodGhpcy5jb2cuZGF0ZVZhbHVlSGFuZGxpbmcgPT09ICd0aW1lc3RhbXAnICYmIF9kYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBfZGF0YSA9IF9kYXRhLnZhbHVlT2YoKTtcbiAgICAgIH1cbiAgICAgIG5ld1BhcmFtc1trZXldID0gX2RhdGE7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBIdHRwUGFyYW1zKHsgZnJvbU9iamVjdDogbmV3UGFyYW1zIH0pO1xuICB9XG5cbiAgYXBwbGllZFVybCh1cmw6IHN0cmluZywgcGFyYW1zPzogYW55KSB7XG4gICAgaWYgKCFwYXJhbXMpIHJldHVybiB1cmw7XG4gICAgdXJsICs9IH51cmwuaW5kZXhPZignPycpID8gJycgOiAnPyc7XG4gICAgY29uc3QgYXJyOiBzdHJpbmdbXSA9IFtdO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxuICAgIGZvciAoY29uc3Qga2V5IGluIHBhcmFtcykge1xuICAgICAgYXJyLnB1c2goYCR7a2V5fT0ke3BhcmFtc1trZXldfWApO1xuICAgIH1cbiAgICByZXR1cm4gdXJsICsgYXJyLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGJlZ2luKCkge1xuICAgIC8vIGNvbnNvbGUudGltZSgnaHR0cCcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMuX2xvYWRpbmcgPSB0cnVlKSk7XG4gIH1cblxuICBlbmQoKSB7XG4gICAgLy8gY29uc29sZS50aW1lRW5kKCdodHRwJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5fbG9hZGluZyA9IGZhbHNlKSk7XG4gIH1cblxuICAvLyAjcmVnaW9uIGdldFxuXG4gIC8qKlxuICAgKiBHRVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYFRgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgZ2V0PFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuXG4gIC8qKlxuICAgKiBHRVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYHN0cmluZ2Agw6fCscK7w6XCnsKLXG4gICAqL1xuICBnZXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIEdFVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBnZXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XG5cbiAgLyoqXG4gICAqIEdFVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBnZXQ8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xuXG4gIC8qKlxuICAgKiBHRVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYGFueWAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBnZXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBHRVQgw6jCr8K3w6bCscKCXG4gICAqL1xuICBnZXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgICdHRVQnLFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHBvc3RcblxuICAvKipcbiAgICogUE9TVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgc3RyaW5nYCDDp8KxwrvDpcKewotcbiAgICovXG4gIHBvc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBQT1NUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBIdHRwUmVzcG9uc2U8SlNPTj5gIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcG9zdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XG5cbiAgLyoqXG4gICAqIFBPU1TDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEpTT05gIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcG9zdDxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcblxuICAvKipcbiAgICogUE9TVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgYW55YCDDp8KxwrvDpcKewotcbiAgICovXG4gIHBvc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIFBPU1Qgw6jCr8K3w6bCscKCXG4gICAqL1xuICBwb3N0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgJ1BPU1QnLFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZGVsZXRlXG5cbiAgLyoqXG4gICAqIERFTEVURcOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgc3RyaW5nYCDDp8KxwrvDpcKewotcbiAgICovXG4gIGRlbGV0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICAvKipcbiAgICogREVMRVRFw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBKU09OYCDDp8KxwrvDpcKewotcbiAgICovXG4gIGRlbGV0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcblxuICAvKipcbiAgICogREVMRVRFw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBhbnlgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgZGVsZXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogREVMRVRFIMOowq/Ct8OmwrHCglxuICAgKi9cbiAgZGVsZXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICAnREVMRVRFJyxcbiAgICAgIHVybCxcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLyoqXG4gICAqIGBqc29ucGAgw6jCr8K3w6bCscKCXG4gICAqXG4gICAqIEBwYXJhbSB1cmwgVVJMw6XCnMKww6XCncKAXG4gICAqIEBwYXJhbSBwYXJhbXMgw6jCr8K3w6bCscKCw6XCj8KCw6bClcKwXG4gICAqIEBwYXJhbSBjYWxsYmFja1BhcmFtIENBTExCQUNLw6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaSlNPTlBfQ0FMTEJBQ0tcbiAgICovXG4gIGpzb25wKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBjYWxsYmFja1BhcmFtOiBzdHJpbmcgPSAnSlNPTlBfQ0FMTEJBQ0snLFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuanNvbnAodGhpcy5hcHBsaWVkVXJsKHVybCwgcGFyYW1zKSwgY2FsbGJhY2tQYXJhbSkucGlwZShcbiAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IocmVzID0+IHtcbiAgICAgICAgdGhpcy5lbmQoKTtcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IocmVzKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvLyAjcmVnaW9uIHBhdGNoXG5cbiAgLyoqXG4gICAqIFBBVENIw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBzdHJpbmdgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcGF0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBQQVRDSMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSHR0cFJlc3BvbnNlPEpTT04+YCDDp8KxwrvDpcKewotcbiAgICovXG4gIHBhdGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcblxuICAvKipcbiAgICogUEFUQ0jDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEpTT05gIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcGF0Y2g8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8VD47XG5cbiAgLyoqXG4gICAqIFBBVENIw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBhbnlgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcGF0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIFBBVENIIMOowq/Ct8OmwrHCglxuICAgKi9cbiAgcGF0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICAnUEFUQ0gnLFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcHV0XG5cbiAgLyoqXG4gICAqIFBVVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgc3RyaW5nYCDDp8KxwrvDpcKewotcbiAgICovXG4gIHB1dChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIFBVVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSHR0cFJlc3BvbnNlPEpTT04+YCDDp8KxwrvDpcKewotcbiAgICovXG4gIHB1dChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XG5cbiAgLyoqXG4gICAqIFBVVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBwdXQ8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8VD47XG5cbiAgLyoqXG4gICAqIFBVVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgYW55YCDDp8KxwrvDpcKewotcbiAgICovXG4gIHB1dChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogUFVUIMOowq/Ct8OmwrHCglxuICAgKi9cbiAgcHV0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgJ1BVVCcsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLyoqXG4gICAqIGByZXF1ZXN0YCDDqMKvwrfDpsKxwoJcbiAgICpcbiAgICogQHBhcmFtIG1ldGhvZCDDqMKvwrfDpsKxwoLDpsKWwrnDpsKzwpXDp8KxwrvDpcKewotcbiAgICogQHBhcmFtIHVybCBVUkzDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIG9wdGlvbnMgw6XCj8KCw6bClcKwXG4gICAqL1xuICByZXF1ZXN0PFI+KFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBib2R5PzogYW55O1xuICAgICAgaGVhZGVycz86XG4gICAgICAgIHwgSHR0cEhlYWRlcnNcbiAgICAgICAgfCB7XG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgICAgICB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHBhcmFtcz86XG4gICAgICAgIHwgSHR0cFBhcmFtc1xuICAgICAgICB8IHtcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICAgICAgfTtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8Uj47XG4gIC8qKlxuICAgKiBgcmVxdWVzdGAgw6jCr8K3w6bCscKCXG4gICAqXG4gICAqIEBwYXJhbSBtZXRob2Qgw6jCr8K3w6bCscKCw6bClsK5w6bCs8KVw6fCscK7w6XCnsKLXG4gICAqIEBwYXJhbSB1cmwgVVJMw6XCnMKww6XCncKAXG4gICAqIEBwYXJhbSBvcHRpb25zIMOlwo/CgsOmwpXCsFxuICAgKi9cbiAgcmVxdWVzdChcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgYm9keT86IGFueTtcbiAgICAgIGhlYWRlcnM/OlxuICAgICAgICB8IEh0dHBIZWFkZXJzXG4gICAgICAgIHwge1xuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICAgICAgfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICBwYXJhbXM/OlxuICAgICAgICB8IEh0dHBQYXJhbXNcbiAgICAgICAgfCB7XG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgICAgIH07XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRoaXMuYmVnaW4oKTtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMucGFyYW1zKSBvcHRpb25zLnBhcmFtcyA9IHRoaXMucGFyc2VQYXJhbXMob3B0aW9ucy5wYXJhbXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpLnBpcGUoXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHJlcyk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgZGlzdGFuY2VJbldvcmRzVG9Ob3cgZnJvbSAnZGF0ZS1mbnMvZGlzdGFuY2VfaW5fd29yZHNfdG9fbm93JztcblxuQFBpcGUoeyBuYW1lOiAnX2RhdGUnIH0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKFxuICAgIHZhbHVlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyLFxuICAgIGZvcm1hdFN0cmluZzogc3RyaW5nID0gJ1lZWVktTU0tREQgSEg6bW0nLFxuICApOiBzdHJpbmcge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKGZvcm1hdFN0cmluZyA9PT0gJ2ZuJykge1xuICAgICAgICByZXR1cm4gZGlzdGFuY2VJbldvcmRzVG9Ob3codmFsdWUsIHtcbiAgICAgICAgICBsb2NhbGU6ICh3aW5kb3cgYXMgYW55KS5fX2xvY2FsZV9fLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICFpc05hTigrdmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gK3ZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdCh2YWx1ZSwgZm9ybWF0U3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VycmVuY3lQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3Mvc2VydmljZS1waXBlIyVFOCVCNCVBNyVFNSVCOCU4MS1fY3VycmVudHlcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1waXBlLXRyYW5zZm9ybS1pbnRlcmZhY2VcbkBQaXBlKHsgbmFtZTogJ19jdXJyZW5jeScgfSlcbmV4cG9ydCBjbGFzcyBDTkN1cnJlbmN5UGlwZSBleHRlbmRzIEN1cnJlbmN5UGlwZSB7XG4gIHRyYW5zZm9ybShcbiAgICB2YWx1ZTogYW55LFxuICAgIGN1cnJlbmN5Q29kZTogc3RyaW5nID0gJ8Ovwr/CpScsXG4gICAgZGlzcGxheTogJ2NvZGUnIHwgJ3N5bWJvbCcgfCAnc3ltYm9sLW5hcnJvdycgfCBib29sZWFuID0gJ2NvZGUnLFxuICAgIGRpZ2l0cz86IHN0cmluZyxcbiAgKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgY3VycmVuY3lDb2RlLCA8YW55PmRpc3BsYXksIGRpZ2l0cyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvY29tbW9uIyVFNSU4RiVBRiVFOCVCRiVBRCVFNCVCQiVBMy1rZXlzXG4gKi9cbkBQaXBlKHsgbmFtZTogJ2tleXMnIH0pXG5leHBvcnQgY2xhc3MgS2V5c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGtleUlzTnVtYmVyOiBib29sZWFuID0gZmFsc2UpOiBhbnlbXSB7XG4gICAgY29uc3QgcmV0ID0gW107XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgIHJldC5wdXNoKHsga2V5OiBrZXlJc051bWJlciA/ICtrZXkgOiBrZXksIHZhbHVlOiB2YWx1ZVtrZXldIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHNlZSBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL3NlcnZpY2UtcGlwZSMlRTUlQkUlQkQlRTclQUIlQTAteW5cbiAqL1xuQFBpcGUoeyBuYW1lOiAneW4nIH0pXG5leHBvcnQgY2xhc3MgWU5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogYm9vbGVhbiwgeWVzOiBzdHJpbmcsIG5vOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXN1Y2Nlc3NcIj4nICsgKHllcyB8fCAnw6bCmMKvJykgKyAnPC9zcGFuPic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1lcnJvclwiPicgKyAobm8gfHwgJ8OlwpDCpicpICsgJzwvc3Bhbj4nO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnLi93aW5fdG9rZW5zJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICcuL2xvY2FsZS9sb2NhbGUubW9kdWxlJztcblxuLy8gI3JlZ2lvbiBpbXBvcnRcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2VGYWtlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pMThuL2kxOG4nO1xuXG5pbXBvcnQgeyBNb2RhbEhlbHBlciB9IGZyb20gJy4vc2VydmljZXMvbW9kYWwvbW9kYWwuaGVscGVyJztcbmltcG9ydCB7IERyYXdlckhlbHBlciB9IGZyb20gJy4vc2VydmljZXMvZHJhd2VyL2RyYXdlci5oZWxwZXInO1xuY29uc3QgSEVMUEVSUyA9IFtNb2RhbEhlbHBlciwgRHJhd2VySGVscGVyXTtcblxuLy8gY29tcG9uZW50c1xuY29uc3QgQ09NUE9ORU5UUyA9IFtdO1xuXG4vLyBwaXBlc1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICcuL3BpcGVzL2RhdGUvZGF0ZS5waXBlJztcbmltcG9ydCB7IENOQ3VycmVuY3lQaXBlIH0gZnJvbSAnLi9waXBlcy9jdXJyZW5jeS9jbi1jdXJyZW5jeS5waXBlJztcbmltcG9ydCB7IEtleXNQaXBlIH0gZnJvbSAnLi9waXBlcy9rZXlzL2tleXMucGlwZSc7XG5pbXBvcnQgeyBZTlBpcGUgfSBmcm9tICcuL3BpcGVzL3luL3luLnBpcGUnO1xuY29uc3QgUElQRVMgPSBbRGF0ZVBpcGUsIENOQ3VycmVuY3lQaXBlLCBLZXlzUGlwZSwgWU5QaXBlXTtcblxuLy8gI2VuZHJlZ2lvblxuXG4vLyAjcmVnaW9uIGFsbCBkZWxvbiB1c2VkIGljb25zXG5cbmltcG9ydCB7IE56SWNvblNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7XG4gIEJlbGxPdXRsaW5lLFxuICBGaWx0ZXJPdXRsaW5lLFxuICBDYXJldFVwT3V0bGluZSxcbiAgQ2FyZXREb3duT3V0bGluZSxcbiAgRGVsZXRlT3V0bGluZSxcbiAgUGx1c091dGxpbmUsXG4gIEluYm94T3V0bGluZSxcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhci9pY29ucyc7XG5jb25zdCBJQ09OUyA9IFtcbiAgQmVsbE91dGxpbmUsXG4gIEZpbHRlck91dGxpbmUsXG4gIENhcmV0VXBPdXRsaW5lLFxuICBDYXJldERvd25PdXRsaW5lLFxuICBEZWxldGVPdXRsaW5lLFxuICBQbHVzT3V0bGluZSxcbiAgSW5ib3hPdXRsaW5lLFxuXTtcblxuLy8gI2VuZHJlZ2lvblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIE92ZXJsYXlNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCAuLi5QSVBFU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTLCAuLi5QSVBFUywgRGVsb25Mb2NhbGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBBbGFpblRoZW1lTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoaWNvblNydjogTnpJY29uU2VydmljZSkge1xuICAgIGljb25TcnYuYWRkSWNvbiguLi5JQ09OUyk7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFsYWluVGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBXSU5ET1csIHVzZVZhbHVlOiB3aW5kb3cgfSxcbiAgICAgICAgeyBwcm92aWRlOiBBTEFJTl9JMThOX1RPS0VOLCB1c2VDbGFzczogQWxhaW5JMThOU2VydmljZUZha2UgfSxcbiAgICAgICAgLi4uSEVMUEVSUyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFsYWluVGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFsuLi5IRUxQRVJTXSxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBWZXJzaW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gbmV3IFZlcnNpb24oJzAuMC4wLVBMQUNFSE9MREVSJyk7XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX3ZhbHVlcyIsInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBYSxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDOzs7Ozs7Ozs7QUNGbEQ7O0lBQ0UsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7SUFDNUMsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUV2RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Ozs7SUFFL0I7O1FBRUUsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQ3ZCLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUU7WUFDMUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztTQUMxQyxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsU0FBUyxJQUFJLG1EQUFtRCxDQUFDO0tBQzVFO0lBRUQsbUJBQU0sTUFBTSxHQUFFLFlBQVksR0FBRztRQUMzQixVQUFVLENBQUM7WUFDVCxNQUFNLEVBQUUsQ0FBQztZQUNULElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUMxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ1QsQ0FBQztDQUNIOzs7Ozs7QUN0QkQ7QUFnQkEsSUFBYSxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FDaEQsc0JBQXNCLENBQ3ZCLENBQUM7Ozt1QkFJa0IsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDOztJQUVuRCxzQkFBSSx3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