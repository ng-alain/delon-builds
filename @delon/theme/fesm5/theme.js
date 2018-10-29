import { InjectionToken, Injectable, Pipe, Inject, Version, NgModule, Optional, SkipSelf, defineInjectable, inject, Injector, INJECTOR } from '@angular/core';
import { BehaviorSubject, Subject, Observable, throwError } from 'rxjs';
import { filter, share, tap, catchError } from 'rxjs/operators';
import { __spread, __values, __extends } from 'tslib';
import { ACLService } from '@delon/acl';
import { DOCUMENT, CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { NzModalService, NzIconService, NzDrawerService } from 'ng-zorro-antd';
import { HttpClient, HttpParams } from '@angular/common/http';
import format from 'date-fns/format';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { OverlayModule } from '@angular/cdk/overlay';
import { BellOutline, FilterFill, CaretUpOutline, CaretDownOutline, DeleteOutline, PlusOutline, InboxOutline } from '@ant-design/icons-angular/icons';

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
            item.group = item.group !== false;
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
var YNPipe = /** @class */ (function () {
    function YNPipe(dom) {
        this.dom = dom;
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
        return this.dom.bypassSecurityTrustHtml(value ?
            "<i class=\"text-blue\" title=\"" + (yes || '是') + "\"><svg viewBox=\"64 64 896 896\" fill=\"currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\"><path d=\"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z\"></path></svg></i>" :
            "<i class=\"text-grey\" title=\"" + (no || '否') + "\"><svg viewBox=\"64 64 896 896\" fill=\"currentColor\" width=\"1em\" height=\"1em\" aria-hidden=\"true\"><path d=\"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z\"></path></svg></i>");
    };
    YNPipe.decorators = [
        { type: Pipe, args: [{ name: 'yn' },] }
    ];
    /** @nocollapse */
    YNPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
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
        { type: Pipe, args: [{ name: 'i18n' },] }
    ];
    /** @nocollapse */
    I18nPipe.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [ALAIN_I18N_TOKEN,] }] }
    ]; };
    return I18nPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        return html ? /** @type {?} */ (this.dom.bypassSecurityTrustHtml(html)) : '';
    };
    HTMLPipe.decorators = [
        { type: Pipe, args: [{ name: 'html' },] }
    ];
    /** @nocollapse */
    HTMLPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    return HTMLPipe;
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
var PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, I18nPipe, HTMLPipe];
/** @type {?} */
var ICONS = [
    BellOutline,
    FilterFill,
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
var VERSION = new Version('2.0.0-rc.1-ef55d63');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { WINDOW, preloaderFinished, TitleService, ALAIN_I18N_TOKEN, AlainI18NServiceFake, _HttpClient, DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, AlainThemeConfig, AlainThemeModule, VERSION, MenuService, ScrollService, SettingsService, REP_MAX, ResponsiveService, enUS as en_US, zhCN as zh_CN, zhTW as zh_TW, DELON_LOCALE, DELON_LOCALE_SERVICE_PROVIDER_FACTORY, DelonLocaleService, DELON_LOCALE_SERVICE_PROVIDER, DelonLocaleModule, ModalHelper, DrawerHelper, HTMLPipe as ɵb, I18nPipe as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi90aGVtZS9zcmMvd2luX3Rva2Vucy50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9wcmVsb2FkZXIvcHJlbG9hZGVyLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL2kxOG4vaTE4bi50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9tZW51L21lbnUuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9zY3JvbGwvc2Nyb2xsLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy90aGVtZS5jb25maWcudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvcmVzcG9uc2l2ZS9yZXNwb25zaXZlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL3RpdGxlL3RpdGxlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xvY2FsZS50b2tlbnMudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xhbmd1YWdlcy96aC1DTi50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9sb2NhbGUvbG9jYWxlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xvY2FsZS5tb2R1bGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xhbmd1YWdlcy9lbi1VUy50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9sb2NhbGUvbGFuZ3VhZ2VzL3poLVRXLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlci50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlci50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9odHRwL2h0dHAuY2xpZW50LnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3BpcGVzL2N1cnJlbmN5L2NuLWN1cnJlbmN5LnBpcGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvcGlwZXMva2V5cy9rZXlzLnBpcGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvcGlwZXMveW4veW4ucGlwZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9pMThuL2kxOG4ucGlwZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9waXBlcy9odG1sL2h0bWwucGlwZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy90aGVtZS5tb2R1bGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvdmVyc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgV0lORE9XID0gbmV3IEluamVjdGlvblRva2VuKCdXaW5kb3cnKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkZXJGaW5pc2hlZCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcicpO1xuXG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgLy8gcHJlbG9hZGVyIHZhbHVlIG51bGwgd2hlbiBydW5uaW5nIC0taG1yXG4gICAgaWYgKCFwcmVsb2FkZXIpIHJldHVybjtcbiAgICBwcmVsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgcHJlbG9hZGVyLmNsYXNzTmFtZSA9ICdwcmVsb2FkZXItaGlkZGVuJztcbiAgICB9KTtcblxuICAgIHByZWxvYWRlci5jbGFzc05hbWUgKz0gJyBwcmVsb2FkZXItaGlkZGVuLWFkZCBwcmVsb2FkZXItaGlkZGVuLWFkZC1hY3RpdmUnO1xuICB9XG5cbiAgKDxhbnk+d2luZG93KS5hcHBCb290c3RyYXAgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZW1vdmUoKTtcbiAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluSTE4TlNlcnZpY2Uge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgLyoqXG4gICAqIMOlwo/CmMOmwpvCtMOowq/CrcOowqjCgFxuICAgKiBAcGFyYW0gbGFuZyDDqMKvwq3DqMKowoDDpMK7wqPDp8KgwoFcbiAgICogQHBhcmFtIGVtaXQgw6bCmMKvw6XCkMKmw6jCp8Kmw6XCj8KRIGBjaGFuZ2Vgw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKadHJ1ZVxuICAgKi9cbiAgdXNlKGxhbmc6IHN0cmluZywgZW1pdD86IGJvb2xlYW4pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiDDqMK/wpTDpcKbwp7DpcK9wpPDpcKJwo3DqMKvwq3DqMKowoDDpcKIwpfDqMKhwqhcbiAgICovXG4gIGdldExhbmdzKCk6IGFueVtdO1xuXG4gIC8qKlxuICAgKiDDp8K/wrvDqMKvwpFcbiAgICogLSBgaW50ZXJwb2xhdGVQYXJhbXNgIMOmwqjCocOmwp3Cv8OmwonCgMOpwpzCgMOowqbCgcOnwprChMOlwo/CgsOmwpXCsMOlwq/CucOowrHCoVxuICAgKiAtIGBpc1NhZmVgIMOmwpjCr8OlwpDCpsOowr/ClMOlwpvCnsOlwq7CicOlwoXCqMOlwq3Cl8OnwqzCpsOvwrzCjMOowofCqsOlworCqMOowrDCg8OnwpTCqCBgYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWxgXG4gICAqL1xuICBmYW55aShrZXk6IHN0cmluZywgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QsIGlzU2FmZT86IGJvb2xlYW4pOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIMOowrDCg8OnwpTCqCBgdXNlYCDDqMKnwqbDpcKPwpHDpcKPwpjDpsKbwrTDqcKAwprDp8KfwqVcbiAgICovXG4gIHJlYWRvbmx5IGNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xufVxuXG5leHBvcnQgY29uc3QgQUxBSU5fSTE4Tl9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBbGFpbkkxOE5TZXJ2aWNlPihcbiAgJ2FsYWluVHJhbnNsYXRvclRva2VuJyxcbik7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQWxhaW5JMThOU2VydmljZUZha2UgaW1wbGVtZW50cyBBbGFpbkkxOE5TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlsdGVyKHcgPT4gdyAhPSBudWxsKSk7XG4gIH1cblxuICB1c2UobGFuZzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQobGFuZyk7XG4gIH1cblxuICBnZXRMYW5ncygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZmFueWkoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4ga2V5O1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuXG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9pMThuJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTWVudVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9jaGFuZ2UkOiBCZWhhdmlvclN1YmplY3Q8TWVudVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TWVudVtdPihbXSk7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGRhdGE6IE1lbnVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbFNlcnZpY2U6IEFDTFNlcnZpY2UsXG4gICkge1xuICAgIGlmICh0aGlzLmkxOG5TcnYpXG4gICAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuU3J2LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXN1bWUoKSk7XG4gIH1cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TWVudVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZSQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIHZpc2l0KGNhbGxiYWNrOiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKSB7XG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBNZW51W10sIHBhcmVudE1lbnU6IE1lbnUsIGRlcHRoOiBudW1iZXIpID0+IHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICAgIGNhbGxiYWNrKGl0ZW0sIHBhcmVudE1lbnUsIGRlcHRoKTtcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5GbihpdGVtLmNoaWxkcmVuLCBpdGVtLCBkZXB0aCArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpbkZuKHRoaXMuZGF0YSwgbnVsbCwgMCk7XG4gIH1cblxuICBhZGQoaXRlbXM6IE1lbnVbXSkge1xuICAgIHRoaXMuZGF0YSA9IGl0ZW1zO1xuICAgIHRoaXMucmVzdW1lKCk7XG4gIH1cblxuICAvKipcbiAgICogw6nCh8KNw6fCvcKuw6jCj8Kcw6XCjcKVw6/CvMKMw6XCj8Kvw6jCg8K9STE4TsOjwoDCgcOnwpTCqMOmwojCt8Omwp3Cg8OpwpnCkMOlwo/CmMOlworCqMOmwpfCtsOpwpzCgMOowqbCgcOowrDCg8OnwpTCqMOlwojCt8OmwpbCsFxuICAgKi9cbiAgcmVzdW1lKGNhbGxiYWNrPzogKGl0ZW06IE1lbnUsIHBhcmVudE1lbnVtOiBNZW51LCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCkge1xuICAgIGxldCBpID0gMTtcbiAgICBjb25zdCBzaG9ydGN1dHM6IE1lbnVbXSA9IFtdO1xuICAgIHRoaXMudmlzaXQoKGl0ZW0sIHBhcmVudCwgZGVwdGgpID0+IHtcbiAgICAgIGl0ZW0uX19pZCA9IGkrKztcbiAgICAgIGl0ZW0uX19wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICBpdGVtLl9kZXB0aCA9IGRlcHRoO1xuXG4gICAgICBpZiAoIWl0ZW0ubGluaykgaXRlbS5saW5rID0gJyc7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0ubGlua0V4YWN0ID09PSAndW5kZWZpbmVkJykgaXRlbS5saW5rRXhhY3QgPSBmYWxzZTtcbiAgICAgIGlmICghaXRlbS5leHRlcm5hbExpbmspIGl0ZW0uZXh0ZXJuYWxMaW5rID0gJyc7XG5cbiAgICAgIC8vIGJhZGdlXG4gICAgICBpZiAoaXRlbS5iYWRnZSkge1xuICAgICAgICBpZiAoaXRlbS5iYWRnZURvdCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGl0ZW0uYmFkZ2VEb3QgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWl0ZW0uYmFkZ2VTdGF0dXMpIHtcbiAgICAgICAgICBpdGVtLmJhZGdlU3RhdHVzID0gJ2Vycm9yJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpdGVtLl90eXBlID0gaXRlbS5leHRlcm5hbExpbmsgPyAyIDogMTtcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBpdGVtLl90eXBlID0gMztcbiAgICAgIH1cblxuICAgICAgLy8gaWNvblxuICAgICAgaWYgKHR5cGVvZiBpdGVtLmljb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCB0eXBlID0gJ2NsYXNzJztcbiAgICAgICAgbGV0IHZhbHVlID0gaXRlbS5pY29uO1xuICAgICAgICAvLyBjb21wYXRpYmxlIGBhbnRpY29uIGFudGljb24tdXNlcmBcbiAgICAgICAgaWYgKH5pdGVtLmljb24uaW5kZXhPZihgYW50aWNvbi1gKSkge1xuICAgICAgICAgIHR5cGUgPSAnaWNvbic7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLScpLnNsaWNlKDEpLmpvaW4oJy0nKTtcbiAgICAgICAgfSBlbHNlIGlmICgvXmh0dHBzPzpcXC9cXC8vLnRlc3QoaXRlbS5pY29uKSkge1xuICAgICAgICAgIHR5cGUgPSAnaW1nJztcbiAgICAgICAgfVxuICAgICAgICBpdGVtLmljb24gPSB7IHR5cGUsIHZhbHVlIH0gYXMgYW55O1xuICAgICAgfVxuXG4gICAgICAvLyBzaG9ydGN1dFxuICAgICAgaWYgKHBhcmVudCAmJiBpdGVtLnNob3J0Y3V0ID09PSB0cnVlICYmIHBhcmVudC5zaG9ydGN1dFJvb3QgIT09IHRydWUpXG4gICAgICAgIHNob3J0Y3V0cy5wdXNoKGl0ZW0pO1xuXG4gICAgICBpdGVtLnRleHQgPVxuICAgICAgICBpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2ID8gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bikgOiBpdGVtLnRleHQ7XG5cbiAgICAgIC8vIGdyb3VwXG4gICAgICBpdGVtLmdyb3VwID0gaXRlbS5ncm91cCAhPT0gZmFsc2U7XG5cbiAgICAgIC8vIGhpZGRlblxuICAgICAgaXRlbS5faGlkZGVuID0gdHlwZW9mIGl0ZW0uaGlkZSA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IGl0ZW0uaGlkZTtcblxuICAgICAgLy8gYWNsXG4gICAgICBpZiAoaXRlbS5hY2wgJiYgdGhpcy5hY2xTZXJ2aWNlKSB7XG4gICAgICAgIGl0ZW0uX2hpZGRlbiA9ICF0aGlzLmFjbFNlcnZpY2UuY2FuKGl0ZW0uYWNsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhpdGVtLCBwYXJlbnQsIGRlcHRoKTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZFNob3J0Y3V0KHNob3J0Y3V0cyk7XG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogw6XCisKgw6jCvcK9w6XCv8Krw6bCjcK3w6jCj8Kcw6XCjcKVw6/CvMKMw6XCisKgw6jCvcK9w6TCvcKNw6fCvcKuw6jCp8KEw6XCiMKZw6XCpsKCw6TCuMKLw6/CvMKaXG4gICAqIDHDo8KAwoHDp8K7wp/DpMK4woDDpcKcwqjDpMK4wovDpsKgwocww6fCmsKEw6jCisKCw6fCgsK5w6TCuMKLw6/CvMKIw6XCjcKzw6PCgMKQw6TCuMK7w6XCr8K8w6jCiMKqw6PCgMKRw6jCisKCw6fCgsK5w6TCuMKLw6bClsK5w6/CvMKJXG4gICAqICAgICAgMcOjwoDCgcOowovCpSBjaGlsZHJlbiDDpcKtwpjDpcKcwqggw6PCgMKQc2hvcnRjdXRSb290OiB0cnVlw6PCgMKRw6XCiMKZw6bCnMKAw6TCvMKYw6XChcKIw6PCgMKQw6bCjsKow6jCjcKQw6PCgMKRw6jCv8KZw6fCp8KNw6bClsK5w6XCvMKPXG4gICAqICAgICAgMsOjwoDCgcOlwpDCpsOlwojCmcOmwp/CpcOmwonCvsOlwrjCpsOmwpzCicOjwoDCkGRhc2hib2FyZMOjwoDCkcOlwq3Cl8OmwqDCt8OpwpPCvsOmwo7CpcOvwrzCjMOowovCpcOlwq3CmMOlwpzCqMOlwojCmcOlwpzCqMOmwq3CpMOowo/CnMOlwo3ClcOnwprChMOkwrjCi8OmwpbCucOlwojCm8OlwrvCusOlwr/Cq8Omwo3Ct8OlwoXCpcOlwo/Co1xuICAgKiAgICAgIDPDo8KAwoHDpcKQwqbDpcKIwpnDpsKUwr7DpcKcwqgww6jCisKCw6fCgsK5w6TCvcKNw6fCvcKuXG4gICAqL1xuICBwcml2YXRlIGxvYWRTaG9ydGN1dChzaG9ydGN1dHM6IE1lbnVbXSkge1xuICAgIGlmIChzaG9ydGN1dHMubGVuZ3RoID09PSAwIHx8IHRoaXMuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBscyA9IHRoaXMuZGF0YVswXS5jaGlsZHJlbjtcbiAgICBsZXQgcG9zID0gbHMuZmluZEluZGV4KHcgPT4gdy5zaG9ydGN1dFJvb3QgPT09IHRydWUpO1xuICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICBwb3MgPSBscy5maW5kSW5kZXgodyA9PiB3LmxpbmsuaW5jbHVkZXMoJ2Rhc2hib2FyZCcpKTtcbiAgICAgIHBvcyA9IChwb3MgIT09IC0xID8gcG9zIDogLTEpICsgMTtcbiAgICAgIGNvbnN0IHNob3J0Y3V0TWVudSA9IDxNZW51PntcbiAgICAgICAgdGV4dDogJ8Olwr/Cq8Omwo3Ct8Oowo/CnMOlwo3ClScsXG4gICAgICAgIGkxOG46ICdzaG9ydGN1dCcsXG4gICAgICAgIGljb246ICdpY29uLXJvY2tldCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIH07XG4gICAgICB0aGlzLmRhdGFbMF0uY2hpbGRyZW4uc3BsaWNlKHBvcywgMCwgc2hvcnRjdXRNZW51KTtcbiAgICB9XG4gICAgbGV0IF9kYXRhID0gdGhpcy5kYXRhWzBdLmNoaWxkcmVuW3Bvc107XG4gICAgaWYgKF9kYXRhLmkxOG4gJiYgdGhpcy5pMThuU3J2KSBfZGF0YS50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKF9kYXRhLmkxOG4pO1xuICAgIF9kYXRhID0gT2JqZWN0LmFzc2lnbihfZGF0YSwge1xuICAgICAgc2hvcnRjdXRSb290OiB0cnVlLFxuICAgICAgX3R5cGU6IDMsXG4gICAgICBfX2lkOiAtMSxcbiAgICAgIF9kZXB0aDogMSxcbiAgICB9KTtcbiAgICBfZGF0YS5jaGlsZHJlbiA9IHNob3J0Y3V0cy5tYXAoaSA9PiB7XG4gICAgICBpLl9kZXB0aCA9IDI7XG4gICAgICByZXR1cm4gaTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBtZW51cygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwrjChcOnwqnCusOowo/CnMOlwo3ClVxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCoMK5w6bCjcKuVVJMw6jCrsK+w6fCvcKuw6jCj8Kcw6XCjcKVIGBfb3BlbmAgw6XCscKew6bCgMKnXG4gICAqIEBwYXJhbSB1cmwgVVJMw6XCnMKww6XCncKAXG4gICAqL1xuICBvcGVuZWRCeVVybCh1cmw6IHN0cmluZykge1xuICAgIGlmICghdXJsKSByZXR1cm47XG5cbiAgICBsZXQgZmluZEl0ZW06IE1lbnUgPSBudWxsO1xuICAgIHRoaXMudmlzaXQoaXRlbSA9PiB7XG4gICAgICBpdGVtLl9vcGVuID0gZmFsc2U7XG4gICAgICBpZiAoIWl0ZW0ubGluaykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIWZpbmRJdGVtICYmIHVybC5zdGFydHNXaXRoKGl0ZW0ubGluaykpIHtcbiAgICAgICAgZmluZEl0ZW0gPSBpdGVtO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghZmluZEl0ZW0pIHJldHVybjtcblxuICAgIGRvIHtcbiAgICAgIGZpbmRJdGVtLl9vcGVuID0gdHJ1ZTtcbiAgICAgIGZpbmRJdGVtID0gZmluZEl0ZW0uX19wYXJlbnQ7XG4gICAgfSB3aGlsZSAoZmluZEl0ZW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwqDCucOmwo3CrnVybMOowo7Ct8Olwo/ClsOowo/CnMOlwo3ClcOlwojCl8OowqHCqFxuICAgKiBAcGFyYW0gdXJsXG4gICAqL1xuICBnZXRQYXRoQnlVcmwodXJsOiBzdHJpbmcpOiBNZW51W10ge1xuICAgIGxldCBpdGVtOiBNZW51ID0gbnVsbDtcbiAgICB0aGlzLnZpc2l0KChpLCBwYXJlbnQsIGRlcHRoKSA9PiB7XG4gICAgICBpZiAoaS5saW5rID09PSB1cmwpIHtcbiAgICAgICAgaXRlbSA9IGk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXQ6IE1lbnVbXSA9IFtdO1xuICAgIGlmICghaXRlbSkgcmV0dXJuIHJldDtcblxuICAgIGRvIHtcbiAgICAgIHJldC5zcGxpY2UoMCwgMCwgaXRlbSk7XG4gICAgICBpdGVtID0gaXRlbS5fX3BhcmVudDtcbiAgICB9IHdoaWxlIChpdGVtKTtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMuaTE4biQpIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICcuLi8uLi93aW5fdG9rZW5zJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luOiBhbnksXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiDDqMKuwr7Dp8K9wq7DpsK7wprDpcKKwqjDpsKdwqHDqMKHwrPDpsKMwofDpcKuwprDpcKFwoPDp8K0wqBcbiAgICogQHBhcmFtIGVsZW1lbnQgw6bCjMKHw6XCrsKaw6XChcKDw6fCtMKgw6/CvMKMw6nCu8KYw6jCrsKkIGBkb2N1bWVudC5ib2R5YFxuICAgKiBAcGFyYW0gdG9wT2Zmc2V0IMOlwoHCj8OnwqfCu8OlwoDCvMOvwrzCjMOpwrvCmMOowq7CpCBgMGBcbiAgICovXG4gIHNjcm9sbFRvRWxlbWVudChlbGVtZW50PzogRWxlbWVudCwgdG9wT2Zmc2V0ID0gMCkge1xuICAgIGlmICghZWxlbWVudCkgZWxlbWVudCA9IHRoaXMuZG9jLmJvZHk7XG5cbiAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KCk7XG5cbiAgICBjb25zdCB3ID0gdGhpcy53aW47XG4gICAgaWYgKHcgJiYgdy5zY3JvbGxCeSkge1xuICAgICAgdy5zY3JvbGxCeSgwLCBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHRvcE9mZnNldCk7XG5cbiAgICAgIGlmICh3LnBhZ2VZT2Zmc2V0IDwgMjApIHtcbiAgICAgICAgdy5zY3JvbGxCeSgwLCAtdy5wYWdlWU9mZnNldCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIMOmwrvCmsOlworCqMOowofCs8OpwqHCtsOpwoPCqFxuICAgKiBAcGFyYW0gdG9wT2Zmc2V0IMOlwoHCj8OnwqfCu8OlwoDCvMOvwrzCjMOpwrvCmMOowq7CpCBgMGBcbiAgICovXG4gIHNjcm9sbFRvVG9wKHRvcE9mZnNldCA9IDApIHtcbiAgICB0aGlzLnNjcm9sbFRvRWxlbWVudCh0aGlzLmRvYy5ib2R5LCB0b3BPZmZzZXQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBcHAsIExheW91dCwgVXNlciwgU2V0dGluZ3NOb3RpZnkgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmNvbnN0IExBWU9VVF9LRVkgPSAnbGF5b3V0JztcbmNvbnN0IFVTRVJfS0VZID0gJ3VzZXInO1xuY29uc3QgQVBQX0tFWSA9ICdhcHAnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU2VydmljZSB7XG4gIHByaXZhdGUgbm90aWZ5JCA9IG5ldyBTdWJqZWN0PFNldHRpbmdzTm90aWZ5PigpO1xuICBwcml2YXRlIF9hcHA6IEFwcCA9IG51bGw7XG4gIHByaXZhdGUgX3VzZXI6IFVzZXIgPSBudWxsO1xuICBwcml2YXRlIF9sYXlvdXQ6IExheW91dCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBnZXQoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8ICdudWxsJykgfHwgbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICB9XG5cbiAgZ2V0IGxheW91dCgpOiBMYXlvdXQge1xuICAgIGlmICghdGhpcy5fbGF5b3V0KSB7XG4gICAgICB0aGlzLl9sYXlvdXQgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICA8TGF5b3V0PntcbiAgICAgICAgICBmaXhlZDogdHJ1ZSxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGJveGVkOiBmYWxzZSxcbiAgICAgICAgICBsYW5nOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICB0aGlzLmdldChMQVlPVVRfS0VZKSxcbiAgICAgICk7XG4gICAgICB0aGlzLnNldChMQVlPVVRfS0VZLCB0aGlzLl9sYXlvdXQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0O1xuICB9XG5cbiAgZ2V0IGFwcCgpOiBBcHAge1xuICAgIGlmICghdGhpcy5fYXBwKSB7XG4gICAgICB0aGlzLl9hcHAgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICA8QXBwPntcbiAgICAgICAgICB5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuZ2V0KEFQUF9LRVkpLFxuICAgICAgKTtcbiAgICAgIHRoaXMuc2V0KEFQUF9LRVksIHRoaXMuX2FwcCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9hcHA7XG4gIH1cblxuICBnZXQgdXNlcigpOiBVc2VyIHtcbiAgICBpZiAoIXRoaXMuX3VzZXIpIHtcbiAgICAgIHRoaXMuX3VzZXIgPSBPYmplY3QuYXNzaWduKDxVc2VyPnt9LCB0aGlzLmdldChVU0VSX0tFWSkpO1xuICAgICAgdGhpcy5zZXQoVVNFUl9LRVksIHRoaXMuX3VzZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdXNlcjtcbiAgfVxuXG4gIGdldCBub3RpZnkoKTogT2JzZXJ2YWJsZTxTZXR0aW5nc05vdGlmeT4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRMYXlvdXQobmFtZTogc3RyaW5nIHwgTGF5b3V0LCB2YWx1ZT86IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMubGF5b3V0W25hbWVdID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xheW91dCA9IG5hbWU7XG4gICAgfVxuICAgIHRoaXMuc2V0KExBWU9VVF9LRVksIHRoaXMuX2xheW91dCk7XG4gICAgdGhpcy5ub3RpZnkkLm5leHQoeyB0eXBlOiAnbGF5b3V0JywgbmFtZSwgdmFsdWUgfSBhcyBhbnkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0QXBwKHZhbHVlOiBBcHApIHtcbiAgICB0aGlzLl9hcHAgPSB2YWx1ZTtcbiAgICB0aGlzLnNldChBUFBfS0VZLCB2YWx1ZSk7XG4gICAgdGhpcy5ub3RpZnkkLm5leHQoeyB0eXBlOiAnYXBwJywgdmFsdWUgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzZXRVc2VyKHZhbHVlOiBVc2VyKSB7XG4gICAgdGhpcy5fdXNlciA9IHZhbHVlO1xuICAgIHRoaXMuc2V0KFVTRVJfS0VZLCB2YWx1ZSk7XG4gICAgdGhpcy5ub3RpZnkkLm5leHQoeyB0eXBlOiAndXNlcicsIHZhbHVlIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50Q29uZmlnIH0gZnJvbSAnLi9zZXJ2aWNlcy9odHRwL2h0dHAuY29uZmlnJztcbmltcG9ydCB7IFJlc3BvbnNpdmVDb25maWcgfSBmcm9tICcuL3NlcnZpY2VzL3Jlc3BvbnNpdmUvcmVzcG9uc2l2ZS5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFsYWluVGhlbWVDb25maWcge1xuICBodHRwPzogSHR0cENsaWVudENvbmZpZztcbiAgcmVzcG9uc2l2ZT86IFJlc3BvbnNpdmVDb25maWc7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpblRoZW1lQ29uZmlnIH0gZnJvbSAnLi4vLi4vdGhlbWUuY29uZmlnJztcbmltcG9ydCB7IFJlc3BvbnNpdmVDb25maWcgfSBmcm9tICcuL3Jlc3BvbnNpdmUuY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IFJFUF9NQVggPSA2O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFJlc3BvbnNpdmVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjb2c6IFJlc3BvbnNpdmVDb25maWc7XG4gIGNvbnN0cnVjdG9yKGNvZzogQWxhaW5UaGVtZUNvbmZpZykge1xuICAgIHRoaXMuY29nID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIDxSZXNwb25zaXZlQ29uZmlnPntcbiAgICAgICAgcnVsZXM6IHtcbiAgICAgICAgICAxOiB7IHhzOiAyNCB9LFxuICAgICAgICAgIDI6IHsgeHM6IDI0LCBzbTogMTIgfSxcbiAgICAgICAgICAzOiB7IHhzOiAyNCwgc206IDEyLCBtZDogOCB9LFxuICAgICAgICAgIDQ6IHsgeHM6IDI0LCBzbTogMTIsIG1kOiA4LCBsZzogNiB9LFxuICAgICAgICAgIDU6IHsgeHM6IDI0LCBzbTogMTIsIG1kOiA4LCBsZzogNiwgeGw6IDQgfSxcbiAgICAgICAgICA2OiB7IHhzOiAyNCwgc206IDEyLCBtZDogOCwgbGc6IDYsIHhsOiA0LCB4eGw6IDIgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjb2chLnJlc3BvbnNpdmUsXG4gICAgKTtcbiAgICBpZiAoXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmNvZy5ydWxlcylcbiAgICAgICAgLm1hcChpID0+ICtpKVxuICAgICAgICAuc29tZSgoaTogbnVtYmVyKSA9PiBpIDwgMSB8fCBpID4gUkVQX01BWClcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFt0aGVtZV0gdGhlIHJlc3BvbnNlaXZlIHJ1bGUgaW5kZXggdmFsdWUgcmFuZ2UgbXVzdCBiZSAxLSR7UkVQX01BWH1gLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBnZW5DbHMoY291bnQ6IG51bWJlcik6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBydWxlID0gdGhpcy5jb2cucnVsZXNbY291bnQgPiBSRVBfTUFYID8gUkVQX01BWCA6IE1hdGgubWF4KGNvdW50LCAxKV07XG4gICAgY29uc3QgYW50Q29sQ2xhc3MgPSAnYW50LWNvbCc7XG4gICAgY29uc3QgY2xzTWFwID0gW2Ake2FudENvbENsYXNzfS14cy0ke3J1bGUueHN9YF07XG4gICAgaWYgKHJ1bGUuc20pIGNsc01hcC5wdXNoKGAke2FudENvbENsYXNzfS1zbS0ke3J1bGUuc219YCk7XG4gICAgaWYgKHJ1bGUubWQpIGNsc01hcC5wdXNoKGAke2FudENvbENsYXNzfS1tZC0ke3J1bGUubWR9YCk7XG4gICAgaWYgKHJ1bGUubGcpIGNsc01hcC5wdXNoKGAke2FudENvbENsYXNzfS1sZy0ke3J1bGUubGd9YCk7XG4gICAgaWYgKHJ1bGUueGwpIGNsc01hcC5wdXNoKGAke2FudENvbENsYXNzfS14bC0ke3J1bGUueGx9YCk7XG4gICAgaWYgKHJ1bGUueHhsKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30teHhsLSR7cnVsZS54eGx9YCk7XG4gICAgcmV0dXJuIGNsc01hcDtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0LFxuICBPcHRpb25hbCxcbiAgSW5qZWN0b3IsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuLi9tZW51L21lbnUuc2VydmljZSc7XG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9pMThuJztcblxuLyoqXG4gKiDDqMKuwr7Dp8K9wq7DpsKgwofDqcKiwphcbiAqIEBzZWUgaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9zZXJ2aWNlI1RpdGxlU2VydmljZVxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFRpdGxlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3ByZWZpeCA9ICcnO1xuICBwcml2YXRlIF9zdWZmaXggPSAnJztcbiAgcHJpdmF0ZSBfc2VwYXJhdG9yID0gJyAtICc7XG4gIHByaXZhdGUgX3JldmVyc2UgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGVmYXVsdCA9ICdOb3QgUGFnZSBOYW1lJztcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgdGl0bGU6IFRpdGxlLFxuICAgIHByaXZhdGUgbWVudVNydjogTWVudVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge1xuICAgIGlmICh0aGlzLmkxOG5TcnYpXG4gICAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuU3J2LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRUaXRsZSgpKTtcbiAgfVxuXG4gIC8qKiDDqMKuwr7Dp8K9wq7DpcKIwobDqcKawpTDp8KswqYgKi9cbiAgc2V0IHNlcGFyYXRvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VwYXJhdG9yID0gdmFsdWU7XG4gIH1cblxuICAvKiogw6jCrsK+w6fCvcKuw6XCicKNw6fCvMKAICovXG4gIHNldCBwcmVmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ByZWZpeCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIMOowq7CvsOnwr3CrsOlwpDCjsOnwrzCgCAqL1xuICBzZXQgc3VmZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdWZmaXggPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiDDqMKuwr7Dp8K9wq7DpsKYwq/DpcKQwqbDpcKPwo3DqMK9wqwgKi9cbiAgc2V0IHJldmVyc2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXZlcnNlID0gdmFsdWU7XG4gIH1cblxuICAvKiogw6jCrsK+w6fCvcKuw6nCu8KYw6jCrsKkw6bCoMKHw6nCosKYw6XCkMKNICovXG4gIHNldCBkZWZhdWx0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZWZhdWx0ID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGdldEJ5RWxlbWVudCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGVsID1cbiAgICAgIHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJy5hbGFpbi1kZWZhdWx0X19jb250ZW50LXRpdGxlIGgxJykgfHxcbiAgICAgIHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlYWRlcl9fdGl0bGUnKTtcbiAgICBpZiAoZWwpIHtcbiAgICAgIHJldHVybiBlbC5maXJzdENoaWxkLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeVJvdXRlKCk6IHN0cmluZyB7XG4gICAgbGV0IG5leHQgPSB0aGlzLmluamVjdG9yLmdldChBY3RpdmF0ZWRSb3V0ZSk7XG4gICAgd2hpbGUgKG5leHQuZmlyc3RDaGlsZCkgbmV4dCA9IG5leHQuZmlyc3RDaGlsZDtcbiAgICBjb25zdCBkYXRhID0gKG5leHQuc25hcHNob3QgJiYgbmV4dC5zbmFwc2hvdC5kYXRhKSB8fCB7fTtcbiAgICBpZiAoZGF0YS50aXRsZUkxOG4gJiYgdGhpcy5pMThuU3J2KVxuICAgICAgZGF0YS50aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShkYXRhLnRpdGxlSTE4bik7XG4gICAgcmV0dXJuIGRhdGEudGl0bGU7XG4gIH1cblxuICBwcml2YXRlIGdldEJ5TWVudSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1lbnVzID0gdGhpcy5tZW51U3J2LmdldFBhdGhCeVVybCh0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpLnVybCk7XG4gICAgaWYgKCFtZW51cyB8fCBtZW51cy5sZW5ndGggPD0gMCkgcmV0dXJuICcnO1xuXG4gICAgY29uc3QgaXRlbSA9IG1lbnVzW21lbnVzLmxlbmd0aCAtIDFdO1xuICAgIGxldCB0aXRsZTtcbiAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikgdGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICByZXR1cm4gdGl0bGUgfHwgaXRlbS50ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIMOowq7CvsOnwr3CrsOmwqDCh8OpwqLCmFxuICAgKi9cbiAgc2V0VGl0bGUodGl0bGU/OiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIHRpdGxlID1cbiAgICAgICAgdGhpcy5nZXRCeVJvdXRlKCkgfHxcbiAgICAgICAgdGhpcy5nZXRCeU1lbnUoKSB8fFxuICAgICAgICB0aGlzLmdldEJ5RWxlbWVudCgpIHx8XG4gICAgICAgIHRoaXMuX2RlZmF1bHQ7XG4gICAgfVxuICAgIGlmICh0aXRsZSAmJiAhQXJyYXkuaXNBcnJheSh0aXRsZSkpIHtcbiAgICAgIHRpdGxlID0gW3RpdGxlXTtcbiAgICB9XG5cbiAgICBsZXQgbmV3VGl0bGVzID0gW107XG4gICAgaWYgKHRoaXMuX3ByZWZpeCkge1xuICAgICAgbmV3VGl0bGVzLnB1c2godGhpcy5fcHJlZml4KTtcbiAgICB9XG4gICAgbmV3VGl0bGVzLnB1c2goLi4uKHRpdGxlIGFzIHN0cmluZ1tdKSk7XG4gICAgaWYgKHRoaXMuX3N1ZmZpeCkge1xuICAgICAgbmV3VGl0bGVzLnB1c2godGhpcy5fc3VmZml4KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JldmVyc2UpIHtcbiAgICAgIG5ld1RpdGxlcyA9IG5ld1RpdGxlcy5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHRoaXMudGl0bGUuc2V0VGl0bGUobmV3VGl0bGVzLmpvaW4odGhpcy5fc2VwYXJhdG9yKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pMThuJCkgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgREVMT05fTE9DQUxFID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oJ2RlbG9uLWxvY2FsZScpO1xuIiwiaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS50eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IDxMb2NhbGVEYXRhPntcbiAgYWJicjogJ3poLUNOJyxcbiAgZXhjZXB0aW9uOiB7XG4gICAgNDAzOiAnw6bCisKxw6bCrcKJw6/CvMKMw6TCvcKgw6bCl8Kgw6bCncKDw6jCrsK/w6nCl8Kuw6jCr8Klw6nCocK1w6nCncKiJyxcbiAgICA0MDQ6ICfDpsKKwrHDpsKtwonDr8K8wozDpMK9wqDDqMKuwr/DqcKXwq7Dp8KawoTDqcKhwrXDqcKdwqLDpMK4wo3DpcKtwpjDpcKcwqgnLFxuICAgIDUwMDogJ8OmworCscOmwq3CicOvwrzCjMOmwpzCjcOlworCocOlwpnCqMOlwofCusOpwpTCmcOkwrrChicsXG4gICAgYmFja1RvSG9tZTogJ8Oowr/ClMOlwpvCnsOpwqbClsOpwqHCtScsXG4gIH0sXG4gIG5vdGljZUljb246IHtcbiAgICBlbXB0eVRleHQ6ICfDpsKawoLDpsKXwqDDpsKVwrDDpsKNwq4nLFxuICAgIGNsZWFyVGV4dDogJ8OmwrjChcOnwqnCuicsXG4gIH0sXG4gIHJldXNlVGFiOiB7XG4gICAgY2xvc2U6ICfDpcKFwrPDqcKXwq3DpsKgwofDp8Ktwr4nLFxuICAgIGNsb3NlT3RoZXI6ICfDpcKFwrPDqcKXwq3DpcKFwrbDpcKuwoPDpsKgwofDp8Ktwr4nLFxuICAgIGNsb3NlUmlnaHQ6ICfDpcKFwrPDqcKXwq3DpcKPwrPDpMK+wqfDpsKgwofDp8Ktwr4nLFxuICAgIGNsZWFyOiAnw6bCuMKFw6fCqcK6JyxcbiAgfSxcbiAgdGFnU2VsZWN0OiB7XG4gICAgZXhwYW5kOiAnw6XCscKVw6XCvMKAJyxcbiAgICBjb2xsYXBzZTogJ8OmwpTCtsOowrXCtycsXG4gIH0sXG4gIG1pbmlQcm9ncmVzczoge1xuICAgIHRhcmdldDogJ8OnwpvCrsOmwqDCh8OlwoDCvMOvwrzCmidcbiAgfSxcbiAgc3Q6IHtcbiAgICB0b3RhbDogJ8OlwoXCsSB7e3RvdGFsfX0gw6bCncKhJyxcbiAgfSxcbiAgc2Y6IHtcbiAgICBzdWJtaXQ6ICfDpsKPwpDDpMK6wqQnLFxuICAgIHJlc2V0OiAnw6nCh8KNw6fCvcKuJyxcbiAgICBzZWFyY2g6ICfDpsKQwpzDp8K0wqInLFxuICAgIGVkaXQ6ICfDpMK/wp3DpcKtwpgnLFxuICAgIGFkZFRleHQ6ICfDpsK3wrvDpcKKwqAnLFxuICAgIHJlbW92ZVRleHQ6ICfDp8KnwrvDqcKZwqQnLFxuICAgIGNoZWNrQWxsVGV4dDogJ8OlwoXCqMOpwoDCiScsXG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBQcm92aWRlciwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4vbG9jYWxlLnR5cGVzJztcbmltcG9ydCB7IERFTE9OX0xPQ0FMRSB9IGZyb20gJy4vbG9jYWxlLnRva2Vucyc7XG5pbXBvcnQgemhDTiBmcm9tICcuL2xhbmd1YWdlcy96aC1DTic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZWxvbkxvY2FsZVNlcnZpY2Uge1xuICBwcml2YXRlIF9sb2NhbGU6IExvY2FsZURhdGE7XG4gIHByaXZhdGUgY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TG9jYWxlRGF0YT4odGhpcy5fbG9jYWxlKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERFTE9OX0xPQ0FMRSkgbG9jYWxlOiBMb2NhbGVEYXRhKSB7XG4gICAgdGhpcy5zZXRMb2NhbGUobG9jYWxlIHx8IHpoQ04pO1xuICB9XG5cbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPExvY2FsZURhdGE+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0TG9jYWxlKGxvY2FsZTogTG9jYWxlRGF0YSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9sb2NhbGUgJiYgdGhpcy5fbG9jYWxlLmFiYnIgPT09IGxvY2FsZS5hYmJyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2xvY2FsZSA9IGxvY2FsZTtcbiAgICB0aGlzLmNoYW5nZSQubmV4dChsb2NhbGUpO1xuICB9XG5cbiAgZ2V0IGxvY2FsZSgpOiBMb2NhbGVEYXRhIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xuICB9XG5cbiAgZ2V0RGF0YShwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlW3BhdGhdIHx8IHt9O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZKGV4aXN0OiBEZWxvbkxvY2FsZVNlcnZpY2UsIGxvY2FsZTogTG9jYWxlRGF0YSk6IERlbG9uTG9jYWxlU2VydmljZSB7XG4gIHJldHVybiBleGlzdCB8fCBuZXcgRGVsb25Mb2NhbGVTZXJ2aWNlKGxvY2FsZSk7XG59XG5cbmV4cG9ydCBjb25zdCBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGUgICA6IERlbG9uTG9jYWxlU2VydmljZSxcbiAgdXNlRmFjdG9yeTogREVMT05fTE9DQUxFX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWSxcbiAgZGVwcyAgICAgIDogWyBbIG5ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgRGVsb25Mb2NhbGVTZXJ2aWNlIF0sIERFTE9OX0xPQ0FMRSBdXG59O1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHpoQ04gZnJvbSAnLi9sYW5ndWFnZXMvemgtQ04nO1xuXG5pbXBvcnQgeyBERUxPTl9MT0NBTEUgfSBmcm9tICcuL2xvY2FsZS50b2tlbnMnO1xuaW1wb3J0IHsgREVMT05fTE9DQUxFX1NFUlZJQ0VfUFJPVklERVIgfSBmcm9tICcuL2xvY2FsZS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBERUxPTl9MT0NBTEUsIHVzZVZhbHVlOiB6aENOIH0sXG4gICAgREVMT05fTE9DQUxFX1NFUlZJQ0VfUFJPVklERVIsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERlbG9uTG9jYWxlTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlLnR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgPExvY2FsZURhdGE+e1xuICBhYmJyOiAnZW4tVVMnLFxuICBleGNlcHRpb246IHtcbiAgICA0MDM6IGBTb3JyeSwgeW91IGRvbid0IGhhdmUgYWNjZXNzIHRvIHRoaXMgcGFnZWAsXG4gICAgNDA0OiBgU29ycnksIHRoYXQgcGFnZSBkb24ndCBleGlzdGAsXG4gICAgNTAwOiBgU29ycnksIHNlcnZlciBlcnJvcmAsXG4gICAgYmFja1RvSG9tZTogJ0JhY2sgVG8gSG9tZScsXG4gIH0sXG4gIG5vdGljZUljb246IHtcbiAgICBlbXB0eVRleHQ6ICdObyBkYXRhJyxcbiAgICBjbGVhclRleHQ6ICdDbGVhcicsXG4gIH0sXG4gIHJldXNlVGFiOiB7XG4gICAgY2xvc2U6ICdDbG9zZSB0YWInLFxuICAgIGNsb3NlT3RoZXI6ICdDbG9zZSBvdGhlciB0YWJzJyxcbiAgICBjbG9zZVJpZ2h0OiAnQ2xvc2UgdGFicyB0byByaWdodCcsXG4gICAgY2xlYXI6ICdDbGVhciB0YWJzJyxcbiAgfSxcbiAgdGFnU2VsZWN0OiB7XG4gICAgZXhwYW5kOiAnRXhwYW5kJyxcbiAgICBjb2xsYXBzZTogJ0NvbGxhcHNlJyxcbiAgfSxcbiAgbWluaVByb2dyZXNzOiB7XG4gICAgdGFyZ2V0OiAnVGFyZ2V0OiAnLFxuICB9LFxuICBzdDoge1xuICAgIHRvdGFsOiAne3tyYW5nZVswXX19IC0ge3tyYW5nZVsxXX19IG9mIHt7dG90YWx9fScsXG4gIH0sXG4gIHNmOiB7XG4gICAgc3VibWl0OiAnU3VibWl0JyxcbiAgICByZXNldDogJ1Jlc2V0JyxcbiAgICBzZWFyY2g6ICdTZWFyY2gnLFxuICAgIGVkaXQ6ICdTYXZlJyxcbiAgICBhZGRUZXh0OiAnQWRkJyxcbiAgICByZW1vdmVUZXh0OiAnUmVtb3ZlJyxcbiAgICBjaGVja0FsbFRleHQ6ICdDaGVjayBhbGwnLFxuICB9LFxufTtcbiIsImltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUudHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCA8TG9jYWxlRGF0YT57XG4gIGFiYnI6ICd6aC1UVycsXG4gIGV4Y2VwdGlvbjoge1xuICAgIDQwMzogJ8OmworCscOmwq3CicOvwrzCjMOlwqbCs8OnwoTCocOmwqzCisOowqjCqsOlwpXCj8OowqnCssOpwqDCgcOpwp3CoicsXG4gICAgNDA0OiAnw6bCisKxw6bCrcKJw6/CvMKMw6XCpsKzw6jCqMKqw6XClcKPw6fCmsKEw6nCoMKBw6nCncKiw6TCuMKNw6XCrcKYw6XCnMKoJyxcbiAgICA1MDA6ICfDpsKKwrHDpsKtwonDr8K8wozDpsKcwo3DpcKLwpnDpcKZwqjDpcKHwrrDqcKMwq/DpMK6woYnLFxuICAgIGJhY2tUb0hvbWU6ICfDqMK/wpTDpcKbwp7DqcKmwpbDqcKgwoEnLFxuICB9LFxuICBub3RpY2VJY29uOiB7XG4gICAgZW1wdHlUZXh0OiAnw6bCmsKrw6fChMKhw6bClcK4w6bCk8KaJyxcbiAgICBjbGVhclRleHQ6ICfDpsK4woXDp8KpwronLFxuICB9LFxuICByZXVzZVRhYjoge1xuICAgIGNsb3NlOiAnw6nCl8Kcw6nClsKJw6bCqMKZw6fCsMK9JyxcbiAgICBjbG9zZU90aGVyOiAnw6nCl8Kcw6nClsKJw6XChcK2w6XCrsKDw6bCqMKZw6fCsMK9JyxcbiAgICBjbG9zZVJpZ2h0OiAnw6nCl8Kcw6nClsKJw6XCj8Kzw6XCgcK0w6bCqMKZw6fCsMK9JyxcbiAgICBjbGVhcjogJ8OmwrjChcOnwqnCuicsXG4gIH0sXG4gIHRhZ1NlbGVjdDoge1xuICAgIGV4cGFuZDogJ8OlwrHClcOpwpbCiycsXG4gICAgY29sbGFwc2U6ICfDpsKUwrbDqMK1wrcnLFxuICB9LFxuICBtaW5pUHJvZ3Jlc3M6IHtcbiAgICB0YXJnZXQ6ICfDp8Kbwq7DpsKowpnDpcKAwrzDr8K8wponLFxuICB9LFxuICBzdDoge1xuICAgIHRvdGFsOiAnw6XChcKxIHt7dG90YWx9fSDDpsKiwp0nLFxuICB9LFxuICBzZjoge1xuICAgIHN1Ym1pdDogJ8Omwo/CkMOkwrrCpCcsXG4gICAgcmVzZXQ6ICfDqcKHwo3Dp8K9wq4nLFxuICAgIHNlYXJjaDogJ8OmwpDCnMOnwrTCoicsXG4gICAgZWRpdDogJ8Okwr/CncOlwq3CmCcsXG4gICAgYWRkVGV4dDogJ8OmwrfCu8OlworCoCcsXG4gICAgcmVtb3ZlVGV4dDogJ8OnwqfCu8OpwpnCpCcsXG4gICAgY2hlY2tBbGxUZXh0OiAnw6XChcKow6nCgcK4JyxcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTnpNb2RhbFNlcnZpY2UsIE1vZGFsT3B0aW9uc0ZvclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbEhlbHBlck9wdGlvbnMge1xuICAvKiogw6XCpMKnw6XCsMKPw6/CvMKbw6TCvsKLw6XCpsKCw6/CvMKabGfDo8KAwoE2MDDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgbGdgICovXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXI7XG4gIC8qKiDDpcKvwrnDqMKvwp3DpsKhwoYgW01vZGFsT3B0aW9uc0ZvclNlcnZpY2VdKGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvbW9kYWwvbnotbW9kYWwudHlwZS50cykgw6XCj8KCw6bClcKwICovXG4gIG1vZGFsT3B0aW9ucz86IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U7XG4gIC8qKiDDpsKYwq/DpcKQwqbDp8Kywr7DpcKHwobDr8K8wojDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWDDr8K8wonDr8K8wozDqMKLwqXDqMK/wpTDpcKbwp7DpcKAwrzDqcKdwp7Dp8KpwrrDpcKAwrzDr8K8wohgbnVsbGDDpsKIwpZgdW5kZWZpbmVkYMOvwrzCicOowqfChsOkwrjCusOmwojCkMOlworCn8OvwrzCjMOlwpDCpsOlwojCmcOowqfChsOkwrjCusOpwpTCmcOowq/CryAqL1xuICBleGFjdD86IGJvb2xlYW47XG4gIC8qKiDDpsKYwq/DpcKQwqbDpcKMwoXDqMKjwrnDpsKgwofDp8Ktwr7DqcKhwrXDr8K8wozDpMK/wq7DpcKkwo3DpsKowqHDpsKAwoHDpcKMwoXDpcKQwqvDpsKgwofDp8Ktwr7DqcKXwrTDqMK3wp3DqcKXwq7DqcKiwpggKi9cbiAgaW5jbHVkZVRhYnM/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIMOlwq/CucOowq/CncOmwqHChsOowr7ChcOlworCqcOnwrHCu1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE1vZGFsSGVscGVyIHtcbiAgcHJpdmF0ZSB6SW5kZXggPSA1MDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IE56TW9kYWxTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiDDpsKewoTDpcK7wrrDpMK4woDDpMK4wqrDpcKvwrnDqMKvwp3DpsKhwoZcbiAgICpcbiAgICogQHBhcmFtIGNvbXAgw6fCu8KEw6TCu8K2XG4gICAqIEBwYXJhbSBwYXJhbXMgw6fCu8KEw6TCu8K2w6XCj8KCw6bClcKwXG4gICAqIEBwYXJhbSBvcHRpb25zIMOpwqLCncOlwqTClsOlwo/CgsOmwpXCsFxuICAgKlxuICAgKiDDp8KkwrrDpMK+wovDr8K8wppcbiAgYGBgdHNcbnRoaXMubW9kYWxIZWxwZXIuY3JlYXRlKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4vLyDDpcKvwrnDpMK6wo7Dp8K7woTDpMK7wrbDp8KawoTDpsKIwpDDpcKKwp8mw6XChcKzw6nCl8Ktw6fCmsKEw6XCpMKEw6fCkMKGw6jCr8K0w6bCmMKOXG4vLyDDpsKIwpDDpcKKwp9cbnRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcbnRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xuLy8gw6XChcKzw6nCl8KtXG50aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xuYGBgXG4gICAqL1xuICBjcmVhdGUoXG4gICAgY29tcDogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzogTW9kYWxIZWxwZXJPcHRpb25zXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgc2l6ZTogJ2xnJyxcbiAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgaW5jbHVkZVRhYnM6IGZhbHNlLFxuICAgIH0sIG9wdGlvbnMpO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgIGxldCBjbHMgPSAnJyxcbiAgICAgICAgd2lkdGggPSAnJztcbiAgICAgIGlmIChvcHRpb25zLnNpemUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNpemUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgd2lkdGggPSBgJHtvcHRpb25zLnNpemV9cHhgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNscyA9IGBtb2RhbC0ke29wdGlvbnMuc2l6ZX1gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5pbmNsdWRlVGFicykge1xuICAgICAgICBjbHMgKz0gJyBtb2RhbC1pbmNsdWRlLXRhYnMnO1xuICAgICAgfVxuICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2UgPSB7XG4gICAgICAgIG56V3JhcENsYXNzTmFtZTogY2xzLFxuICAgICAgICBuekNvbnRlbnQ6IGNvbXAsXG4gICAgICAgIG56V2lkdGg6IHdpZHRoID8gd2lkdGggOiB1bmRlZmluZWQsXG4gICAgICAgIG56Rm9vdGVyOiBudWxsLFxuICAgICAgICBuekNvbXBvbmVudFBhcmFtczogcGFyYW1zLFxuICAgICAgICBuelpJbmRleDogKyt0aGlzLnpJbmRleCxcbiAgICAgIH07XG4gICAgICBjb25zdCBzdWJqZWN0ID0gdGhpcy5zcnYuY3JlYXRlKFxuICAgICAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zLm1vZGFsT3B0aW9ucyksXG4gICAgICApO1xuICAgICAgY29uc3QgYWZ0ZXJDbG9zZSQgPSBzdWJqZWN0LmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucy5leGFjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmIChyZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgYWZ0ZXJDbG9zZSQudW5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwp7ChMOlwrvCusOpwp3CmcOmwoDCgcOmwqHChsOvwrzCjMOnwoLCucOlwofCu8OowpLCmcOlwrHCgsOkwrjCjcOlwoXCgcOowq7CuMOlwoXCs8OpwpfCrVxuICAgKlxuICAgKiBAcGFyYW0gY29tcCDDp8K7woTDpMK7wrZcbiAgICogQHBhcmFtIHBhcmFtcyDDp8K7woTDpMK7wrbDpcKPwoLDpsKVwrBcbiAgICogQHBhcmFtIG9wdGlvbnMgw6nCosKdw6XCpMKWw6XCj8KCw6bClcKwXG4gICAqXG4gICAqIMOnwqTCusOkwr7Ci8OvwrzCmlxuICBgYGB0c1xudGhpcy5tb2RhbEhlbHBlci5vcGVuKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4vLyDDpcKvwrnDpMK6wo7Dp8K7woTDpMK7wrbDp8KawoTDpsKIwpDDpcKKwp8mw6XChcKzw6nCl8Ktw6fCmsKEw6XCpMKEw6fCkMKGw6jCr8K0w6bCmMKOXG4vLyDDpsKIwpDDpcKKwp9cbnRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcbnRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xuLy8gw6XChcKzw6nCl8KtXG50aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xuYGBgXG4gICAqL1xuICBjcmVhdGVTdGF0aWMoXG4gICAgY29tcDogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzogTW9kYWxIZWxwZXJPcHRpb25zXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgbW9kYWxPcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHsgbnpNYXNrQ2xvc2FibGU6IGZhbHNlIH0sXG4gICAgICBvcHRpb25zICYmIG9wdGlvbnMubW9kYWxPcHRpb25zLFxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKGNvbXAsIHBhcmFtcywgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgeyBtb2RhbE9wdGlvbnMgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwonCk8OlwrzCgMOlwq/CucOowq/CncOmwqHChlxuICAgKiBAcGFyYW0gY29tcCDDp8K7woTDpMK7wrZcbiAgICogQHBhcmFtIHBhcmFtcyDDp8K7woTDpMK7wrbDpcKPwoLDpsKVwrBcbiAgICogQHBhcmFtIHNpemUgw6XCpMKnw6XCsMKPw6/CvMKbw6TCvsKLw6XCpsKCw6/CvMKabGfDo8KAwoE2MDDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppsZ1xuICAgKiBAcGFyYW0gb3B0aW9ucyDDpcKvwrnDqMKvwp3DpsKhwoYgYE1vZGFsT3B0aW9uc0ZvclNlcnZpY2VgIMOlwo/CgsOmwpXCsFxuICAgKlxuICAgKiDDp8KkwrrDpMK+wovDr8K8wppcbiAgYGBgdHNcbnRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuLy8gw6XCr8K5w6TCusKOw6fCu8KEw6TCu8K2w6fCmsKEw6bCiMKQw6XCisKfJsOlwoXCs8OpwpfCrcOnwprChMOlwqTChMOnwpDChsOowq/CtMOmwpjCjlxuLy8gw6bCiMKQw6XCisKfXG50aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG50aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcbi8vIMOlwoXCs8OpwpfCrVxudGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcbmBgYFxuICAgKi9cbiAgb3BlbihcbiAgICBjb21wOiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIHNpemU6ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlciA9ICdsZycsXG4gICAgb3B0aW9ucz86IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2UsXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKGNvbXAsIHBhcmFtcywge1xuICAgICAgc2l6ZSxcbiAgICAgIG1vZGFsT3B0aW9uczogb3B0aW9ucyxcbiAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqcKdwpnDpsKAwoHDpsKhwobDr8K8wozDp8KCwrnDpcKHwrvDqMKSwpnDpcKxwoLDpMK4wo3DpcKFwoHDqMKuwrjDpcKFwrPDqcKXwq1cbiAgICogQHBhcmFtIGNvbXAgw6fCu8KEw6TCu8K2XG4gICAqIEBwYXJhbSBwYXJhbXMgw6fCu8KEw6TCu8K2w6XCj8KCw6bClcKwXG4gICAqIEBwYXJhbSBzaXplIMOlwqTCp8OlwrDCj8OvwrzCm8Okwr7Ci8OlwqbCgsOvwrzCmmxnw6PCgMKBNjAww6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKabGdcbiAgICogQHBhcmFtIG9wdGlvbnMgw6XCr8K5w6jCr8Kdw6bCocKGIGBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlYCDDpcKPwoLDpsKVwrBcbiAgICpcbiAgICogw6fCpMK6w6TCvsKLw6/CvMKaXG4gIGBgYHRzXG50aGlzLm1vZGFsSGVscGVyLm9wZW4oRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbi8vIMOlwq/CucOkwrrCjsOnwrvChMOkwrvCtsOnwprChMOmwojCkMOlworCnybDpcKFwrPDqcKXwq3Dp8KawoTDpcKkwoTDp8KQwobDqMKvwrTDpsKYwo5cbi8vIMOmwojCkMOlworCn1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XG4vLyDDpcKFwrPDqcKXwq1cbnRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG5gYGBcbiAgICovXG4gIHN0YXRpYyhcbiAgICBjb21wOiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIHNpemU6ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlciA9ICdsZycsXG4gICAgb3B0aW9ucz86IGFueSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5vcGVuKFxuICAgICAgY29tcCxcbiAgICAgIHBhcmFtcyxcbiAgICAgIHNpemUsXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgbnpNYXNrQ2xvc2FibGU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKSxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTnpEcmF3ZXJTZXJ2aWNlLCBOekRyYXdlck9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuZXhwb3J0IGludGVyZmFjZSBEcmF3ZXJIZWxwZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIMOlwqTCp8OlwrDCj8OvwrzCm8Okwr7Ci8OlwqbCgsOvwrzCmmxnw6PCgMKBNjAww6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYG1kYFxuICAgKlxuICAgKiB8IMOnwrHCu8Olwp7CiyB8IMOpwrvCmMOowq7CpMOlwqTCp8OlwrDCjyB8XG4gICAqIHwgLS0tIHwgLS0tLS0tIHxcbiAgICogfCBgc21gIHwgYDMwMGAgfFxuICAgKiB8IGBtZGAgfCBgNjAwYCB8XG4gICAqIHwgYGxnYCB8IGA5MDBgIHxcbiAgICogfCBgeGxgIHwgYDEyMDBgIHxcbiAgICpcbiAgICogPiDDpMK7wqXDpMK4worDpcKAwrzDr8K8wozDpcKPwq/DqcKAwprDqMK/wofDqMKmwobDp8KbwpbDp8KbwrjDpcK6wpTDp8KawoRMRVNTw6XCj8KCw6bClcKww6jCh8Kqw6jCocKMw6jCsMKDw6bClcK0XG4gICAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8IG51bWJlcjtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwozChcOlwpDCq8OlwrrClcOpwoPCqMOlwrfCpcOlwoXCt8Omwp3CocOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYFxuICAgKi9cbiAgZm9vdGVyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIMOlwrrClcOpwoPCqMOlwrfCpcOlwoXCt8Omwp3CocOpwqvCmMOlwrrCpsOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmA1NWBcbiAgICovXG4gIGZvb3RlckhlaWdodD86IG51bWJlcjtcbiAgLyoqIMOmworCvcOlwrHCiSBbTnpEcmF3ZXJPcHRpb25zXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kcmF3ZXIvemgjbnpkcmF3ZXJvcHRpb25zKSDDpcKPwoLDpsKVwrAgKi9cbiAgZHJhd2VyT3B0aW9ucz86IE56RHJhd2VyT3B0aW9ucztcbn1cblxuLyoqXG4gKiDDpsKKwr3DpcKxwonDqMK+woXDpcKKwqnDp8KxwrtcbiAqXG4gKiAqKsOmwrPCqMOmwoTCj8OvwrzCmioqIMOmwp7ChMOlwrvCusOnwrvCk8Omwp7CnMOpwoPCvcOlwo/Cr8OowqLCq8Oowq7CosOpwpjChcOvwrzCjMOkwr3ChsOmwrDCuMOowr/CnMOpwoPCvcOkwrjCjcOkwrzCmsOowqfCpsOlwo/CkSBgb2JzZXJ2ZXIuZXJyb3JgXG4gKlxuICogw6fCpMK6w6TCvsKLw6/CvMKaXG5gYGB0c1xudGhpcy5kcmF3ZXJIZWxwZXIuY3JlYXRlKCdFZGl0JywgRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbi8vIMOlwq/CucOkwrrCjsOnwrvChMOkwrvCtsOnwprChMOmwojCkMOlworCnybDpcKFwrPDqcKXwq3Dp8KawoTDpcKkwoTDp8KQwobDqMKvwrTDpsKYwo5cbi8vIMOmwojCkMOlworCn1xudGhpcy5OekRyYXdlclJlZi5jbG9zZShkYXRhKTtcbnRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UodHJ1ZSk7XG4vLyDDpcKFwrPDqcKXwq1cbnRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoKTtcbnRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoZmFsc2UpO1xuYGBgXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgRHJhd2VySGVscGVyIHtcbiAgLy8gw6XCpMKnw6nCg8Kow6XCiMKGw6bCg8KFw6XChsK1w6TCuMKLw6bCisK9w6XCscKJw6fCmsKEw6XCscKCw6fCusKnw6bCr8KUIE1vZGFsIMOkwrzCmsOmwpvCtMOkwr3CjsOkwrjCgMOkwrrCm1xuICBwcml2YXRlIHpJbmRleCA9IDQwMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogTnpEcmF3ZXJTZXJ2aWNlKSB7IH1cblxuICAvKipcbiAgICogw6bCnsKEw6XCu8K6w6TCuMKAw6TCuMKqw6bCisK9w6XCscKJXG4gICAqL1xuICBjcmVhdGUoXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBjb21wOiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiBEcmF3ZXJIZWxwZXJPcHRpb25zXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oPERyYXdlckhlbHBlck9wdGlvbnM+e1xuICAgICAgc2l6ZTogJ21kJyxcbiAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgIGZvb3RlckhlaWdodDogNTUsXG4gICAgICBkcmF3ZXJPcHRpb25zOiB7XG4gICAgICAgIG56UGxhY2VtZW50OiAncmlnaHQnLFxuICAgICAgICBueldyYXBDbGFzc05hbWU6ICcnXG4gICAgICB9XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuICAgICAgY29uc3QgeyBzaXplLCBmb290ZXIsIGZvb3RlckhlaWdodCwgZHJhd2VyT3B0aW9ucyB9ID0gb3B0aW9ucztcbiAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBOekRyYXdlck9wdGlvbnMgPSB7XG4gICAgICAgIG56Q29udGVudDogY29tcCxcbiAgICAgICAgbnpDb250ZW50UGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIG56WkluZGV4OiArK3RoaXMuekluZGV4LFxuICAgICAgICBuelRpdGxlOiB0aXRsZVxuICAgICAgfTtcblxuICAgICAgaWYgKGZvb3Rlcikge1xuICAgICAgICBkZWZhdWx0T3B0aW9ucy5uekJvZHlTdHlsZSA9IHtcbiAgICAgICAgICBoZWlnaHQ6IGBjYWxjKDEwMCUgLSAke2Zvb3RlckhlaWdodH1weClgLFxuICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgICAgJ3BhZGRpbmctYm90dG9tJzogYCR7Zm9vdGVySGVpZ2h0IC0gMn1weGBcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBzaXplID09PSAnbnVtYmVyJykge1xuICAgICAgICBkZWZhdWx0T3B0aW9uc1tkcmF3ZXJPcHRpb25zLm56UGxhY2VtZW50ID09PSAndG9wJyB8fCBkcmF3ZXJPcHRpb25zLm56UGxhY2VtZW50ID09PSAnYm90dG9tJyA/ICduekhlaWdodCcgOiAnbnpXaWR0aCddID0gb3B0aW9ucy5zaXplO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmYXVsdE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lID0gKGRyYXdlck9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lICsgYCBkcmF3ZXItJHtvcHRpb25zLnNpemV9YCkudHJpbSgpO1xuICAgICAgICBkZWxldGUgZHJhd2VyT3B0aW9ucy5ueldyYXBDbGFzc05hbWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN1YmplY3QgPSB0aGlzLnNydi5jcmVhdGUoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIGRyYXdlck9wdGlvbnMpLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGFmdGVyQ2xvc2UkID0gc3ViamVjdC5hZnRlckNsb3NlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlcyAhPSBudWxsICYmIHJlcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgYWZ0ZXJDbG9zZSQudW5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwp7ChMOlwrvCusOkwrjCgMOkwrjCqsOmworCvcOlwrHCicOvwrzCjMOnwoLCucOlwofCu8OowpLCmcOlwrHCgsOkwrjCjcOlwoXCgcOowq7CuMOlwoXCs8OpwpfCrVxuICAgKi9cbiAgc3RhdGljKFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgY29tcDogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzogRHJhd2VySGVscGVyT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGRyYXdlck9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgeyBuek1hc2tDbG9zYWJsZTogZmFsc2UgfSxcbiAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5kcmF3ZXJPcHRpb25zLFxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKHRpdGxlLCBjb21wLCBwYXJhbXMsIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHsgZHJhd2VyT3B0aW9ucyB9KSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBDbGllbnQsXG4gIEh0dHBIZWFkZXJzLFxuICBIdHRwUGFyYW1zLFxuICBIdHRwUmVzcG9uc2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFsYWluVGhlbWVDb25maWcgfSBmcm9tICcuLi8uLi90aGVtZS5jb25maWcnO1xuaW1wb3J0IHsgSHR0cENsaWVudENvbmZpZyB9IGZyb20gJy4vaHR0cC5jb25maWcnO1xuXG4vKipcbiAqIMOlwrDCgcOowqPChUh0dHBDbGllbnTDr8K8wozDpMK4wrvDqMKmwoHDqMKnwqPDpcKGwrPDr8K8wppcbiAqICsgw6TCvMKYw6XCjMKWSHR0cENsaWVudMOlwpzCqMOlwo/CgsOmwpXCsMOkwrjCisOkwr7Cv8OlwojCqcOmwoDCp1xuICogKyDDp8K7wp/DpMK4woDDpcKuwp7Dp8KOwrAgbG9hZGluZ1xuICogKyDDp8K7wp/DpMK4woDDpcKkwoTDp8KQwobDpsKXwrbDqcKXwrTDpsKgwrzDpcK8wo/DqcKXwq7DqcKiwphcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjbGFzcy1uYW1lXG5leHBvcnQgY2xhc3MgX0h0dHBDbGllbnQge1xuICBwcml2YXRlIGNvZzogSHR0cENsaWVudENvbmZpZztcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBjb2c6IEFsYWluVGhlbWVDb25maWcpIHtcbiAgICB0aGlzLmNvZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICA8SHR0cENsaWVudENvbmZpZz57XG4gICAgICAgIG51bGxWYWx1ZUhhbmRsaW5nOiAnaW5jbHVkZScsXG4gICAgICAgIGRhdGVWYWx1ZUhhbmRsaW5nOiAndGltZXN0YW1wJyxcbiAgICAgIH0sXG4gICAgICBjb2chLmh0dHAsXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcblxuICAvKiogw6bCmMKvw6XCkMKmw6bCrcKjw6XCnMKow6XCisKgw6jCvcK9w6TCuMKtICovXG4gIGdldCBsb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xuICB9XG5cbiAgcGFyc2VQYXJhbXMocGFyYW1zOiBhbnkpOiBIdHRwUGFyYW1zIHtcbiAgICBjb25zdCBuZXdQYXJhbXMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGxldCBfZGF0YSA9IHBhcmFtc1trZXldO1xuICAgICAgLy8gw6XCv8K9w6fClcKlw6fCqcK6w6XCgMK8XG4gICAgICBpZiAodGhpcy5jb2cubnVsbFZhbHVlSGFuZGxpbmcgPT09ICdpZ25vcmUnICYmIF9kYXRhID09IG51bGwpIHJldHVybjtcbiAgICAgIC8vIMOlwrDChsOmwpfCtsOpwpfCtMOowr3CrMOlwozClsOkwrjCusOvwrzCmsOmwpfCtsOpwpfCtMOmwojCsyAow6fCp8KSKVxuICAgICAgaWYgKHRoaXMuY29nLmRhdGVWYWx1ZUhhbmRsaW5nID09PSAndGltZXN0YW1wJyAmJiBfZGF0YSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgX2RhdGEgPSBfZGF0YS52YWx1ZU9mKCk7XG4gICAgICB9XG4gICAgICBuZXdQYXJhbXNba2V5XSA9IF9kYXRhO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgSHR0cFBhcmFtcyh7IGZyb21PYmplY3Q6IG5ld1BhcmFtcyB9KTtcbiAgfVxuXG4gIGFwcGxpZWRVcmwodXJsOiBzdHJpbmcsIHBhcmFtcz86IGFueSkge1xuICAgIGlmICghcGFyYW1zKSByZXR1cm4gdXJsO1xuICAgIHVybCArPSB+dXJsLmluZGV4T2YoJz8nKSA/ICcnIDogJz8nO1xuICAgIGNvbnN0IGFycjogc3RyaW5nW10gPSBbXTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIGFyci5wdXNoKGAke2tleX09JHtwYXJhbXNba2V5XX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybCArIGFyci5qb2luKCcmJyk7XG4gIH1cblxuICBiZWdpbigpIHtcbiAgICAvLyBjb25zb2xlLnRpbWUoJ2h0dHAnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLl9sb2FkaW5nID0gdHJ1ZSkpO1xuICB9XG5cbiAgZW5kKCkge1xuICAgIC8vIGNvbnNvbGUudGltZUVuZCgnaHR0cCcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMuX2xvYWRpbmcgPSBmYWxzZSkpO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBnZXRcblxuICAvKipcbiAgICogR0VUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBUYCDDp8KxwrvDpcKewotcbiAgICovXG4gIGdldDxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcblxuICAvKipcbiAgICogR0VUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBzdHJpbmdgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgZ2V0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBHRVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEpTT05gIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgZ2V0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xuXG4gIC8qKlxuICAgKiBHRVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEpTT05gIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgZ2V0PFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PjtcblxuICAvKipcbiAgICogR0VUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBhbnlgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgZ2V0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogR0VUIMOowq/Ct8OmwrHCglxuICAgKi9cbiAgZ2V0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICAnR0VUJyxcbiAgICAgIHVybCxcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBwb3N0XG5cbiAgLyoqXG4gICAqIFBPU1TDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYHN0cmluZ2Agw6fCscK7w6XCnsKLXG4gICAqL1xuICBwb3N0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICAvKipcbiAgICogUE9TVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSHR0cFJlc3BvbnNlPEpTT04+YCDDp8KxwrvDpcKewotcbiAgICovXG4gIHBvc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xuXG4gIC8qKlxuICAgKiBQT1NUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBKU09OYCDDp8KxwrvDpcKewotcbiAgICovXG4gIHBvc3Q8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8VD47XG5cbiAgLyoqXG4gICAqIFBPU1TDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYGFueWAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBwb3N0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBQT1NUIMOowq/Ct8OmwrHCglxuICAgKi9cbiAgcG9zdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgICdQT1NUJyxcbiAgICAgIHVybCxcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGRlbGV0ZVxuXG4gIC8qKlxuICAgKiBERUxFVEXDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYHN0cmluZ2Agw6fCscK7w6XCnsKLXG4gICAqL1xuICBkZWxldGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIERFTEVURcOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBkZWxldGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XG5cbiAgLyoqXG4gICAqIERFTEVURcOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgYW55YCDDp8KxwrvDpcKewotcbiAgICovXG4gIGRlbGV0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIERFTEVURSDDqMKvwrfDpsKxwoJcbiAgICovXG4gIGRlbGV0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgJ0RFTEVURScsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8qKlxuICAgKiBganNvbnBgIMOowq/Ct8OmwrHCglxuICAgKlxuICAgKiBAcGFyYW0gdXJsIFVSTMOlwpzCsMOlwp3CgFxuICAgKiBAcGFyYW0gcGFyYW1zIMOowq/Ct8OmwrHCgsOlwo/CgsOmwpXCsFxuICAgKiBAcGFyYW0gY2FsbGJhY2tQYXJhbSBDQUxMQkFDS8OlwoDCvMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmkpTT05QX0NBTExCQUNLXG4gICAqL1xuICBqc29ucChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgY2FsbGJhY2tQYXJhbTogc3RyaW5nID0gJ0pTT05QX0NBTExCQUNLJyxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmpzb25wKHRoaXMuYXBwbGllZFVybCh1cmwsIHBhcmFtcyksIGNhbGxiYWNrUGFyYW0pLnBpcGUoXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHJlcyk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBwYXRjaFxuXG4gIC8qKlxuICAgKiBQQVRDSMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgc3RyaW5nYCDDp8KxwrvDpcKewotcbiAgICovXG4gIHBhdGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICAvKipcbiAgICogUEFUQ0jDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEh0dHBSZXNwb25zZTxKU09OPmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBwYXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XG5cbiAgLyoqXG4gICAqIFBBVENIw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBKU09OYCDDp8KxwrvDpcKewotcbiAgICovXG4gIHBhdGNoPFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuXG4gIC8qKlxuICAgKiBQQVRDSMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgYW55YCDDp8KxwrvDpcKewotcbiAgICovXG4gIHBhdGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBQQVRDSCDDqMKvwrfDpsKxwoJcbiAgICovXG4gIHBhdGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgJ1BBVENIJyxcbiAgICAgIHVybCxcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHB1dFxuXG4gIC8qKlxuICAgKiBQVVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYHN0cmluZ2Agw6fCscK7w6XCnsKLXG4gICAqL1xuICBwdXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBQVVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEh0dHBSZXNwb25zZTxKU09OPmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBwdXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xuXG4gIC8qKlxuICAgKiBQVVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEpTT05gIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcHV0PFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuXG4gIC8qKlxuICAgKiBQVVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYGFueWAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBwdXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIFBVVCDDqMKvwrfDpsKxwoJcbiAgICovXG4gIHB1dChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgICdQVVQnLFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8qKlxuICAgKiBgcmVxdWVzdGAgw6jCr8K3w6bCscKCXG4gICAqXG4gICAqIEBwYXJhbSBtZXRob2Qgw6jCr8K3w6bCscKCw6bClsK5w6bCs8KVw6fCscK7w6XCnsKLXG4gICAqIEBwYXJhbSB1cmwgVVJMw6XCnMKww6XCncKAXG4gICAqIEBwYXJhbSBvcHRpb25zIMOlwo/CgsOmwpXCsFxuICAgKi9cbiAgcmVxdWVzdDxSPihcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgYm9keT86IGFueTtcbiAgICAgIGhlYWRlcnM/OlxuICAgICAgICB8IEh0dHBIZWFkZXJzXG4gICAgICAgIHwge1xuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICAgICAgfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICBwYXJhbXM/OlxuICAgICAgICB8IEh0dHBQYXJhbXNcbiAgICAgICAgfCB7XG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgICAgIH07XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFI+O1xuICAvKipcbiAgICogYHJlcXVlc3RgIMOowq/Ct8OmwrHCglxuICAgKlxuICAgKiBAcGFyYW0gbWV0aG9kIMOowq/Ct8OmwrHCgsOmwpbCucOmwrPClcOnwrHCu8Olwp7Ci1xuICAgKiBAcGFyYW0gdXJsIFVSTMOlwpzCsMOlwp3CgFxuICAgKiBAcGFyYW0gb3B0aW9ucyDDpcKPwoLDpsKVwrBcbiAgICovXG4gIHJlcXVlc3QoXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGJvZHk/OiBhbnk7XG4gICAgICBoZWFkZXJzPzpcbiAgICAgICAgfCBIdHRwSGVhZGVyc1xuICAgICAgICB8IHtcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgICAgIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcGFyYW1zPzpcbiAgICAgICAgfCBIdHRwUGFyYW1zXG4gICAgICAgIHwge1xuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgICAgICB9O1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0aGlzLmJlZ2luKCk7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLnBhcmFtcykgb3B0aW9ucy5wYXJhbXMgPSB0aGlzLnBhcnNlUGFyYW1zKG9wdGlvbnMucGFyYW1zKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKS5waXBlKFxuICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgdGhpcy5lbmQoKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcihyZXMgPT4ge1xuICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihyZXMpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xuaW1wb3J0IGRpc3RhbmNlSW5Xb3Jkc1RvTm93IGZyb20gJ2RhdGUtZm5zL2Rpc3RhbmNlX2luX3dvcmRzX3RvX25vdyc7XG5cbkBQaXBlKHsgbmFtZTogJ19kYXRlJyB9KVxuZXhwb3J0IGNsYXNzIERhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShcbiAgICB2YWx1ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlcixcbiAgICBmb3JtYXRTdHJpbmc6IHN0cmluZyA9ICdZWVlZLU1NLUREIEhIOm1tJyxcbiAgKTogc3RyaW5nIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmIChmb3JtYXRTdHJpbmcgPT09ICdmbicpIHtcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlSW5Xb3Jkc1RvTm93KHZhbHVlLCB7XG4gICAgICAgICAgbG9jYWxlOiAod2luZG93IGFzIGFueSkuX19sb2NhbGVfXyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhaXNOYU4oK3ZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9ICt2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JtYXQodmFsdWUsIGZvcm1hdFN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN1cnJlbmN5UGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8qKlxuICogQHNlZSBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL3NlcnZpY2UtcGlwZSMlRTglQjQlQTclRTUlQjglODEtX2N1cnJlbnR5XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtcGlwZS10cmFuc2Zvcm0taW50ZXJmYWNlXG5AUGlwZSh7IG5hbWU6ICdfY3VycmVuY3knIH0pXG5leHBvcnQgY2xhc3MgQ05DdXJyZW5jeVBpcGUgZXh0ZW5kcyBDdXJyZW5jeVBpcGUge1xuICB0cmFuc2Zvcm0oXG4gICAgdmFsdWU6IGFueSxcbiAgICBjdXJyZW5jeUNvZGU6IHN0cmluZyA9ICfDr8K/wqUnLFxuICAgIGRpc3BsYXk6ICdjb2RlJyB8ICdzeW1ib2wnIHwgJ3N5bWJvbC1uYXJyb3cnIHwgYm9vbGVhbiA9ICdjb2RlJyxcbiAgICBkaWdpdHM/OiBzdHJpbmcsXG4gICk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0odmFsdWUsIGN1cnJlbmN5Q29kZSwgPGFueT5kaXNwbGF5LCBkaWdpdHMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHNlZSBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2NvbW1vbiMlRTUlOEYlQUYlRTglQkYlQUQlRTQlQkIlQTMta2V5c1xuICovXG5AUGlwZSh7IG5hbWU6ICdrZXlzJyB9KVxuZXhwb3J0IGNsYXNzIEtleXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBrZXlJc051bWJlcjogYm9vbGVhbiA9IGZhbHNlKTogYW55W10ge1xuICAgIGNvbnN0IHJldCA9IFtdO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxuICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XG4gICAgICByZXQucHVzaCh7IGtleToga2V5SXNOdW1iZXIgPyAra2V5IDoga2V5LCB2YWx1ZTogdmFsdWVba2V5XSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AUGlwZSh7IG5hbWU6ICd5bicgfSlcbmV4cG9ydCBjbGFzcyBZTlBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkb206IERvbVNhbml0aXplcikge31cblxuICB0cmFuc2Zvcm0odmFsdWU6IGJvb2xlYW4sIHllczogc3RyaW5nLCBubzogc3RyaW5nKTogU2FmZUh0bWwge1xuICAgIHJldHVybiB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChcbiAgICAgIHZhbHVlID9cbiAgICAgIGA8aSBjbGFzcz1cInRleHQtYmx1ZVwiIHRpdGxlPVwiJHt5ZXMgfHwgJ8OmwpjCryd9XCI+PHN2ZyB2aWV3Qm94PVwiNjQgNjQgODk2IDg5NlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxwYXRoIGQ9XCJNOTEyIDE5MGgtNjkuOWMtOS44IDAtMTkuMSA0LjUtMjUuMSAxMi4yTDQwNC43IDcyNC41IDIwNyA0NzRhMzIgMzIgMCAwIDAtMjUuMS0xMi4ySDExMmMtNi43IDAtMTAuNCA3LjctNi4zIDEyLjlsMjczLjkgMzQ3YzEyLjggMTYuMiAzNy40IDE2LjIgNTAuMyAwbDQ4OC40LTYxOC45YzQuMS01LjEuNC0xMi44LTYuMy0xMi44elwiPjwvcGF0aD48L3N2Zz48L2k+YCA6XG4gICAgICBgPGkgY2xhc3M9XCJ0ZXh0LWdyZXlcIiB0aXRsZT1cIiR7bm8gfHwgJ8OlwpDCpid9XCI+PHN2ZyB2aWV3Qm94PVwiNjQgNjQgODk2IDg5NlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxwYXRoIGQ9XCJNNTYzLjggNTEybDI2Mi41LTMxMi45YzQuNC01LjIuNy0xMy4xLTYuMS0xMy4xaC03OS44Yy00LjcgMC05LjIgMi4xLTEyLjMgNS43TDUxMS42IDQ0OS44IDI5NS4xIDE5MS43Yy0zLTMuNi03LjUtNS43LTEyLjMtNS43SDIwM2MtNi44IDAtMTAuNSA3LjktNi4xIDEzLjFMNDU5LjQgNTEyIDE5Ni45IDgyNC45QTcuOTUgNy45NSAwIDAgMCAyMDMgODM4aDc5LjhjNC43IDAgOS4yLTIuMSAxMi4zLTUuN2wyMTYuNS0yNTguMSAyMTYuNSAyNTguMWMzIDMuNiA3LjUgNS43IDEyLjMgNS43aDc5LjhjNi44IDAgMTAuNS03LjkgNi4xLTEzLjFMNTYzLjggNTEyelwiPjwvcGF0aD48L3N2Zz48L2k+YFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiwgQWxhaW5JMThOU2VydmljZSB9IGZyb20gJy4vaTE4bic7XG5cbkBQaXBlKHsgbmFtZTogJ2kxOG4nIH0pXG5leHBvcnQgY2xhc3MgSTE4blBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBwcml2YXRlIGkxOG46IEFsYWluSTE4TlNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKGtleTogc3RyaW5nLCBpbnRlcnBvbGF0ZVBhcmFtcz86IE9iamVjdCwgaXNTYWZlPzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bi5mYW55aShrZXksIGludGVycG9sYXRlUGFyYW1zLCBpc1NhZmUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQFBpcGUoeyBuYW1lOiAnaHRtbCcgfSlcbmV4cG9ydCBjbGFzcyBIVE1MUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyKSB7fVxuXG4gIHRyYW5zZm9ybShodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBodG1sID8gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCkgYXMgYW55IDogJyc7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJy4vd2luX3Rva2Vucyc7XG5cbmltcG9ydCB7IERlbG9uTG9jYWxlTW9kdWxlIH0gZnJvbSAnLi9sb2NhbGUvbG9jYWxlLm1vZHVsZSc7XG5cbi8vICNyZWdpb24gaW1wb3J0XG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlRmFrZSB9IGZyb20gJy4vc2VydmljZXMvaTE4bi9pMThuJztcblxuaW1wb3J0IHsgTW9kYWxIZWxwZXIgfSBmcm9tICcuL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlcic7XG5pbXBvcnQgeyBEcmF3ZXJIZWxwZXIgfSBmcm9tICcuL3NlcnZpY2VzL2RyYXdlci9kcmF3ZXIuaGVscGVyJztcbmNvbnN0IEhFTFBFUlMgPSBbTW9kYWxIZWxwZXIsIERyYXdlckhlbHBlcl07XG5cbi8vIGNvbXBvbmVudHNcbmNvbnN0IENPTVBPTkVOVFMgPSBbXTtcblxuLy8gcGlwZXNcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy9kYXRlL2RhdGUucGlwZSc7XG5pbXBvcnQgeyBDTkN1cnJlbmN5UGlwZSB9IGZyb20gJy4vcGlwZXMvY3VycmVuY3kvY24tY3VycmVuY3kucGlwZSc7XG5pbXBvcnQgeyBLZXlzUGlwZSB9IGZyb20gJy4vcGlwZXMva2V5cy9rZXlzLnBpcGUnO1xuaW1wb3J0IHsgWU5QaXBlIH0gZnJvbSAnLi9waXBlcy95bi95bi5waXBlJztcbmltcG9ydCB7IEkxOG5QaXBlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pMThuL2kxOG4ucGlwZSc7XG5pbXBvcnQgeyBIVE1MUGlwZSB9IGZyb20gJy4vcGlwZXMvaHRtbC9odG1sLnBpcGUnO1xuY29uc3QgUElQRVMgPSBbRGF0ZVBpcGUsIENOQ3VycmVuY3lQaXBlLCBLZXlzUGlwZSwgWU5QaXBlLCBJMThuUGlwZSwgSFRNTFBpcGVdO1xuXG4vLyAjZW5kcmVnaW9uXG5cbi8vICNyZWdpb24gYWxsIGRlbG9uIHVzZWQgaWNvbnNcblxuaW1wb3J0IHsgTnpJY29uU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHtcbiAgQmVsbE91dGxpbmUsXG4gIEZpbHRlckZpbGwsXG4gIENhcmV0VXBPdXRsaW5lLFxuICBDYXJldERvd25PdXRsaW5lLFxuICBEZWxldGVPdXRsaW5lLFxuICBQbHVzT3V0bGluZSxcbiAgSW5ib3hPdXRsaW5lLFxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyL2ljb25zJztcbmNvbnN0IElDT05TID0gW1xuICBCZWxsT3V0bGluZSxcbiAgRmlsdGVyRmlsbCxcbiAgQ2FyZXRVcE91dGxpbmUsXG4gIENhcmV0RG93bk91dGxpbmUsXG4gIERlbGV0ZU91dGxpbmUsXG4gIFBsdXNPdXRsaW5lLFxuICBJbmJveE91dGxpbmUsXG5dO1xuXG4vLyAjZW5kcmVnaW9uXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgT3ZlcmxheU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLlBJUEVTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFMsIC4uLlBJUEVTLCBEZWxvbkxvY2FsZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFsYWluVGhlbWVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihpY29uU3J2OiBOekljb25TZXJ2aWNlKSB7XG4gICAgaWNvblNydi5hZGRJY29uKC4uLklDT05TKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQWxhaW5UaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFdJTkRPVywgdXNlVmFsdWU6IHdpbmRvdyB9LFxuICAgICAgICB7IHByb3ZpZGU6IEFMQUlOX0kxOE5fVE9LRU4sIHVzZUNsYXNzOiBBbGFpbkkxOE5TZXJ2aWNlRmFrZSB9LFxuICAgICAgICAuLi5IRUxQRVJTLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQWxhaW5UaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWy4uLkhFTFBFUlNdLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IFZlcnNpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSBuZXcgVmVyc2lvbignMC4wLjAtUExBQ0VIT0xERVInKTtcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fdmFsdWVzIiwidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQWEsTUFBTSxHQUFHLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQzs7Ozs7Ozs7O0FDRmxEOztJQUNFLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7O0lBQzVDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDOzs7O0lBRS9COztRQUVFLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUN2QixTQUFTLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFO1lBQzFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7U0FDMUMsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLFNBQVMsSUFBSSxtREFBbUQsQ0FBQztLQUM1RTtJQUVELG1CQUFNLE1BQU0sR0FBRSxZQUFZLEdBQUc7UUFDM0IsVUFBVSxDQUFDO1lBQ1QsTUFBTSxFQUFFLENBQUM7WUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDMUIsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNULENBQUM7Q0FDSDs7Ozs7O0FDdEJEO0FBZ0NBLElBQWEsZ0JBQWdCLEdBQUcsSUFBSSxjQUFjLENBQ2hELHNCQUFzQixDQUN2QixDQUFDOzs7dUJBSWtCLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQzs7SUFFbkQsc0JBQUksd0NBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEs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