import { InjectionToken, Injectable, Pipe, Inject, Version, NgModule, Optional, SkipSelf, defineInjectable, inject, Injector, INJECTOR } from '@angular/core';
import { BehaviorSubject, Subject, Observable, throwError } from 'rxjs';
import { filter, share, tap, catchError } from 'rxjs/operators';
import { __spread, __values, __extends } from 'tslib';
import { ACLService } from '@delon/acl';
import { DOCUMENT, CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
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
/** @type {?} */
var HELPERS = [ModalHelper, DrawerHelper];
/** @type {?} */
var COMPONENTS = [];
/** @type {?} */
var PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, I18nPipe];
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
var VERSION = new Version('2.0.0-rc.1-c33cee3');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { WINDOW, preloaderFinished, TitleService, ALAIN_I18N_TOKEN, AlainI18NServiceFake, _HttpClient, DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, AlainThemeConfig, AlainThemeModule, VERSION, MenuService, ScrollService, SettingsService, REP_MAX, ResponsiveService, enUS as en_US, zhCN as zh_CN, zhTW as zh_TW, DELON_LOCALE, DELON_LOCALE_SERVICE_PROVIDER_FACTORY, DelonLocaleService, DELON_LOCALE_SERVICE_PROVIDER, DelonLocaleModule, ModalHelper, DrawerHelper, I18nPipe as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi90aGVtZS9zcmMvd2luX3Rva2Vucy50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9wcmVsb2FkZXIvcHJlbG9hZGVyLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL2kxOG4vaTE4bi50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9tZW51L21lbnUuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9zY3JvbGwvc2Nyb2xsLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy90aGVtZS5jb25maWcudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvcmVzcG9uc2l2ZS9yZXNwb25zaXZlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL3RpdGxlL3RpdGxlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xvY2FsZS50b2tlbnMudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xhbmd1YWdlcy96aC1DTi50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9sb2NhbGUvbG9jYWxlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xvY2FsZS5tb2R1bGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xhbmd1YWdlcy9lbi1VUy50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9sb2NhbGUvbGFuZ3VhZ2VzL3poLVRXLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlci50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlci50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9odHRwL2h0dHAuY2xpZW50LnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3BpcGVzL2N1cnJlbmN5L2NuLWN1cnJlbmN5LnBpcGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvcGlwZXMva2V5cy9rZXlzLnBpcGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvcGlwZXMveW4veW4ucGlwZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9pMThuL2kxOG4ucGlwZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy90aGVtZS5tb2R1bGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvdmVyc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgV0lORE9XID0gbmV3IEluamVjdGlvblRva2VuKCdXaW5kb3cnKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkZXJGaW5pc2hlZCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcicpO1xuXG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgLy8gcHJlbG9hZGVyIHZhbHVlIG51bGwgd2hlbiBydW5uaW5nIC0taG1yXG4gICAgaWYgKCFwcmVsb2FkZXIpIHJldHVybjtcbiAgICBwcmVsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgcHJlbG9hZGVyLmNsYXNzTmFtZSA9ICdwcmVsb2FkZXItaGlkZGVuJztcbiAgICB9KTtcblxuICAgIHByZWxvYWRlci5jbGFzc05hbWUgKz0gJyBwcmVsb2FkZXItaGlkZGVuLWFkZCBwcmVsb2FkZXItaGlkZGVuLWFkZC1hY3RpdmUnO1xuICB9XG5cbiAgKDxhbnk+d2luZG93KS5hcHBCb290c3RyYXAgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZW1vdmUoKTtcbiAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluSTE4TlNlcnZpY2Uge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgLyoqXG4gICAqIMOlwo/CmMOmwpvCtMOowq/CrcOowqjCgFxuICAgKiBAcGFyYW0gbGFuZyDDqMKvwq3DqMKowoDDpMK7wqPDp8KgwoFcbiAgICogQHBhcmFtIGVtaXQgw6bCmMKvw6XCkMKmw6jCp8Kmw6XCj8KRIGBjaGFuZ2Vgw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKadHJ1ZVxuICAgKi9cbiAgdXNlKGxhbmc6IHN0cmluZywgZW1pdD86IGJvb2xlYW4pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiDDqMK/wpTDpcKbwp7DpcK9wpPDpcKJwo3DqMKvwq3DqMKowoDDpcKIwpfDqMKhwqhcbiAgICovXG4gIGdldExhbmdzKCk6IGFueVtdO1xuXG4gIC8qKlxuICAgKiDDp8K/wrvDqMKvwpFcbiAgICogLSBgaW50ZXJwb2xhdGVQYXJhbXNgIMOmwqjCocOmwp3Cv8OmwonCgMOpwpzCgMOowqbCgcOnwprChMOlwo/CgsOmwpXCsMOlwq/CucOowrHCoVxuICAgKiAtIGBpc1NhZmVgIMOmwpjCr8OlwpDCpsOowr/ClMOlwpvCnsOlwq7CicOlwoXCqMOlwq3Cl8OnwqzCpsOvwrzCjMOowofCqsOlworCqMOowrDCg8OnwpTCqCBgYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWxgXG4gICAqL1xuICBmYW55aShrZXk6IHN0cmluZywgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QsIGlzU2FmZT86IGJvb2xlYW4pOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIMOowrDCg8OnwpTCqCBgdXNlYCDDqMKnwqbDpcKPwpHDpcKPwpjDpsKbwrTDqcKAwprDp8KfwqVcbiAgICovXG4gIHJlYWRvbmx5IGNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xufVxuXG5leHBvcnQgY29uc3QgQUxBSU5fSTE4Tl9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBbGFpbkkxOE5TZXJ2aWNlPihcbiAgJ2FsYWluVHJhbnNsYXRvclRva2VuJyxcbik7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQWxhaW5JMThOU2VydmljZUZha2UgaW1wbGVtZW50cyBBbGFpbkkxOE5TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlsdGVyKHcgPT4gdyAhPSBudWxsKSk7XG4gIH1cblxuICB1c2UobGFuZzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQobGFuZyk7XG4gIH1cblxuICBnZXRMYW5ncygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZmFueWkoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4ga2V5O1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuXG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9pMThuJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTWVudVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9jaGFuZ2UkOiBCZWhhdmlvclN1YmplY3Q8TWVudVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TWVudVtdPihbXSk7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGRhdGE6IE1lbnVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbFNlcnZpY2U6IEFDTFNlcnZpY2UsXG4gICkge1xuICAgIGlmICh0aGlzLmkxOG5TcnYpXG4gICAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuU3J2LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXN1bWUoKSk7XG4gIH1cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TWVudVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZSQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIHZpc2l0KGNhbGxiYWNrOiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKSB7XG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBNZW51W10sIHBhcmVudE1lbnU6IE1lbnUsIGRlcHRoOiBudW1iZXIpID0+IHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICAgIGNhbGxiYWNrKGl0ZW0sIHBhcmVudE1lbnUsIGRlcHRoKTtcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5GbihpdGVtLmNoaWxkcmVuLCBpdGVtLCBkZXB0aCArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpbkZuKHRoaXMuZGF0YSwgbnVsbCwgMCk7XG4gIH1cblxuICBhZGQoaXRlbXM6IE1lbnVbXSkge1xuICAgIHRoaXMuZGF0YSA9IGl0ZW1zO1xuICAgIHRoaXMucmVzdW1lKCk7XG4gIH1cblxuICAvKipcbiAgICogw6nCh8KNw6fCvcKuw6jCj8Kcw6XCjcKVw6/CvMKMw6XCj8Kvw6jCg8K9STE4TsOjwoDCgcOnwpTCqMOmwojCt8Omwp3Cg8OpwpnCkMOlwo/CmMOlworCqMOmwpfCtsOpwpzCgMOowqbCgcOowrDCg8OnwpTCqMOlwojCt8OmwpbCsFxuICAgKi9cbiAgcmVzdW1lKGNhbGxiYWNrPzogKGl0ZW06IE1lbnUsIHBhcmVudE1lbnVtOiBNZW51LCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCkge1xuICAgIGxldCBpID0gMTtcbiAgICBjb25zdCBzaG9ydGN1dHM6IE1lbnVbXSA9IFtdO1xuICAgIHRoaXMudmlzaXQoKGl0ZW0sIHBhcmVudCwgZGVwdGgpID0+IHtcbiAgICAgIGl0ZW0uX19pZCA9IGkrKztcbiAgICAgIGl0ZW0uX19wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICBpdGVtLl9kZXB0aCA9IGRlcHRoO1xuXG4gICAgICBpZiAoIWl0ZW0ubGluaykgaXRlbS5saW5rID0gJyc7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0ubGlua0V4YWN0ID09PSAndW5kZWZpbmVkJykgaXRlbS5saW5rRXhhY3QgPSBmYWxzZTtcbiAgICAgIGlmICghaXRlbS5leHRlcm5hbExpbmspIGl0ZW0uZXh0ZXJuYWxMaW5rID0gJyc7XG5cbiAgICAgIC8vIGJhZGdlXG4gICAgICBpZiAoaXRlbS5iYWRnZSkge1xuICAgICAgICBpZiAoaXRlbS5iYWRnZURvdCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGl0ZW0uYmFkZ2VEb3QgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWl0ZW0uYmFkZ2VTdGF0dXMpIHtcbiAgICAgICAgICBpdGVtLmJhZGdlU3RhdHVzID0gJ2Vycm9yJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpdGVtLl90eXBlID0gaXRlbS5leHRlcm5hbExpbmsgPyAyIDogMTtcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBpdGVtLl90eXBlID0gMztcbiAgICAgIH1cblxuICAgICAgLy8gaWNvblxuICAgICAgaWYgKHR5cGVvZiBpdGVtLmljb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCB0eXBlID0gJ2NsYXNzJztcbiAgICAgICAgbGV0IHZhbHVlID0gaXRlbS5pY29uO1xuICAgICAgICAvLyBjb21wYXRpYmxlIGBhbnRpY29uIGFudGljb24tdXNlcmBcbiAgICAgICAgaWYgKH5pdGVtLmljb24uaW5kZXhPZihgYW50aWNvbi1gKSkge1xuICAgICAgICAgIHR5cGUgPSAnaWNvbic7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLScpLnNsaWNlKDEpLmpvaW4oJy0nKTtcbiAgICAgICAgfSBlbHNlIGlmICgvXmh0dHBzPzpcXC9cXC8vLnRlc3QoaXRlbS5pY29uKSkge1xuICAgICAgICAgIHR5cGUgPSAnaW1nJztcbiAgICAgICAgfVxuICAgICAgICBpdGVtLmljb24gPSB7IHR5cGUsIHZhbHVlIH0gYXMgYW55O1xuICAgICAgfVxuXG4gICAgICAvLyBzaG9ydGN1dFxuICAgICAgaWYgKHBhcmVudCAmJiBpdGVtLnNob3J0Y3V0ID09PSB0cnVlICYmIHBhcmVudC5zaG9ydGN1dFJvb3QgIT09IHRydWUpXG4gICAgICAgIHNob3J0Y3V0cy5wdXNoKGl0ZW0pO1xuXG4gICAgICBpdGVtLnRleHQgPVxuICAgICAgICBpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2ID8gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bikgOiBpdGVtLnRleHQ7XG5cbiAgICAgIC8vIGdyb3VwXG4gICAgICBpdGVtLmdyb3VwID0gdHlwZW9mIGl0ZW0uZ3JvdXAgIT09ICdib29sZWFuJyA/IHRydWUgOiBpdGVtLmdyb3VwO1xuXG4gICAgICAvLyBoaWRkZW5cbiAgICAgIGl0ZW0uX2hpZGRlbiA9IHR5cGVvZiBpdGVtLmhpZGUgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBpdGVtLmhpZGU7XG5cbiAgICAgIC8vIGFjbFxuICAgICAgaWYgKGl0ZW0uYWNsICYmIHRoaXMuYWNsU2VydmljZSkge1xuICAgICAgICBpdGVtLl9oaWRkZW4gPSAhdGhpcy5hY2xTZXJ2aWNlLmNhbihpdGVtLmFjbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soaXRlbSwgcGFyZW50LCBkZXB0aCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWRTaG9ydGN1dChzaG9ydGN1dHMpO1xuICAgIHRoaXMuX2NoYW5nZSQubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOlworCoMOowr3CvcOlwr/Cq8Omwo3Ct8Oowo/CnMOlwo3ClcOvwrzCjMOlworCoMOowr3CvcOkwr3CjcOnwr3CrsOowqfChMOlwojCmcOlwqbCgsOkwrjCi8OvwrzCmlxuICAgKiAxw6PCgMKBw6fCu8Kfw6TCuMKAw6XCnMKow6TCuMKLw6bCoMKHMMOnwprChMOoworCgsOnwoLCucOkwrjCi8OvwrzCiMOlwo3Cs8OjwoDCkMOkwrjCu8Olwq/CvMOowojCqsOjwoDCkcOoworCgsOnwoLCucOkwrjCi8OmwpbCucOvwrzCiVxuICAgKiAgICAgIDHDo8KAwoHDqMKLwqUgY2hpbGRyZW4gw6XCrcKYw6XCnMKoIMOjwoDCkHNob3J0Y3V0Um9vdDogdHJ1ZcOjwoDCkcOlwojCmcOmwpzCgMOkwrzCmMOlwoXCiMOjwoDCkMOmwo7CqMOowo3CkMOjwoDCkcOowr/CmcOnwqfCjcOmwpbCucOlwrzCj1xuICAgKiAgICAgIDLDo8KAwoHDpcKQwqbDpcKIwpnDpsKfwqXDpsKJwr7DpcK4wqbDpsKcwonDo8KAwpBkYXNoYm9hcmTDo8KAwpHDpcKtwpfDpsKgwrfDqcKTwr7DpsKOwqXDr8K8wozDqMKLwqXDpcKtwpjDpcKcwqjDpcKIwpnDpcKcwqjDpsKtwqTDqMKPwpzDpcKNwpXDp8KawoTDpMK4wovDpsKWwrnDpcKIwpvDpcK7wrrDpcK/wqvDpsKNwrfDpcKFwqXDpcKPwqNcbiAgICogICAgICAzw6PCgMKBw6XCkMKmw6XCiMKZw6bClMK+w6XCnMKoMMOoworCgsOnwoLCucOkwr3CjcOnwr3CrlxuICAgKi9cbiAgcHJpdmF0ZSBsb2FkU2hvcnRjdXQoc2hvcnRjdXRzOiBNZW51W10pIHtcbiAgICBpZiAoc2hvcnRjdXRzLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbHMgPSB0aGlzLmRhdGFbMF0uY2hpbGRyZW47XG4gICAgbGV0IHBvcyA9IGxzLmZpbmRJbmRleCh3ID0+IHcuc2hvcnRjdXRSb290ID09PSB0cnVlKTtcbiAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgcG9zID0gbHMuZmluZEluZGV4KHcgPT4gdy5saW5rLmluY2x1ZGVzKCdkYXNoYm9hcmQnKSk7XG4gICAgICBwb3MgPSAocG9zICE9PSAtMSA/IHBvcyA6IC0xKSArIDE7XG4gICAgICBjb25zdCBzaG9ydGN1dE1lbnUgPSA8TWVudT57XG4gICAgICAgIHRleHQ6ICfDpcK/wqvDpsKNwrfDqMKPwpzDpcKNwpUnLFxuICAgICAgICBpMThuOiAnc2hvcnRjdXQnLFxuICAgICAgICBpY29uOiAnaWNvbi1yb2NrZXQnLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICB9O1xuICAgICAgdGhpcy5kYXRhWzBdLmNoaWxkcmVuLnNwbGljZShwb3MsIDAsIHNob3J0Y3V0TWVudSk7XG4gICAgfVxuICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YVswXS5jaGlsZHJlbltwb3NdO1xuICAgIGlmIChfZGF0YS5pMThuICYmIHRoaXMuaTE4blNydikgX2RhdGEudGV4dCA9IHRoaXMuaTE4blNydi5mYW55aShfZGF0YS5pMThuKTtcbiAgICBfZGF0YSA9IE9iamVjdC5hc3NpZ24oX2RhdGEsIHtcbiAgICAgIHNob3J0Y3V0Um9vdDogdHJ1ZSxcbiAgICAgIF90eXBlOiAzLFxuICAgICAgX19pZDogLTEsXG4gICAgICBfZGVwdGg6IDEsXG4gICAgfSk7XG4gICAgX2RhdGEuY2hpbGRyZW4gPSBzaG9ydGN1dHMubWFwKGkgPT4ge1xuICAgICAgaS5fZGVwdGggPSAyO1xuICAgICAgcmV0dXJuIGk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgbWVudXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsK4woXDp8KpwrrDqMKPwpzDpcKNwpVcbiAgICovXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuX2NoYW5nZSQubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwqDCucOmwo3CrlVSTMOowq7CvsOnwr3CrsOowo/CnMOlwo3ClSBgX29wZW5gIMOlwrHCnsOmwoDCp1xuICAgKiBAcGFyYW0gdXJsIFVSTMOlwpzCsMOlwp3CgFxuICAgKi9cbiAgb3BlbmVkQnlVcmwodXJsOiBzdHJpbmcpIHtcbiAgICBpZiAoIXVybCkgcmV0dXJuO1xuXG4gICAgbGV0IGZpbmRJdGVtOiBNZW51ID0gbnVsbDtcbiAgICB0aGlzLnZpc2l0KGl0ZW0gPT4ge1xuICAgICAgaXRlbS5fb3BlbiA9IGZhbHNlO1xuICAgICAgaWYgKCFpdGVtLmxpbmspIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFmaW5kSXRlbSAmJiB1cmwuc3RhcnRzV2l0aChpdGVtLmxpbmspKSB7XG4gICAgICAgIGZpbmRJdGVtID0gaXRlbTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIWZpbmRJdGVtKSByZXR1cm47XG5cbiAgICBkbyB7XG4gICAgICBmaW5kSXRlbS5fb3BlbiA9IHRydWU7XG4gICAgICBmaW5kSXRlbSA9IGZpbmRJdGVtLl9fcGFyZW50O1xuICAgIH0gd2hpbGUgKGZpbmRJdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKgwrnDpsKNwq51cmzDqMKOwrfDpcKPwpbDqMKPwpzDpcKNwpXDpcKIwpfDqMKhwqhcbiAgICogQHBhcmFtIHVybFxuICAgKi9cbiAgZ2V0UGF0aEJ5VXJsKHVybDogc3RyaW5nKTogTWVudVtdIHtcbiAgICBsZXQgaXRlbTogTWVudSA9IG51bGw7XG4gICAgdGhpcy52aXNpdCgoaSwgcGFyZW50LCBkZXB0aCkgPT4ge1xuICAgICAgaWYgKGkubGluayA9PT0gdXJsKSB7XG4gICAgICAgIGl0ZW0gPSBpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmV0OiBNZW51W10gPSBbXTtcbiAgICBpZiAoIWl0ZW0pIHJldHVybiByZXQ7XG5cbiAgICBkbyB7XG4gICAgICByZXQuc3BsaWNlKDAsIDAsIGl0ZW0pO1xuICAgICAgaXRlbSA9IGl0ZW0uX19wYXJlbnQ7XG4gICAgfSB3aGlsZSAoaXRlbSk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlJC51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLmkxOG4kKSB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnLi4vLi4vd2luX3Rva2Vucyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbjogYW55LFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge31cblxuICAvKipcbiAgICogw6jCrsK+w6fCvcKuw6bCu8Kaw6XCisKow6bCncKhw6jCh8Kzw6bCjMKHw6XCrsKaw6XChcKDw6fCtMKgXG4gICAqIEBwYXJhbSBlbGVtZW50IMOmwozCh8Olwq7CmsOlwoXCg8OnwrTCoMOvwrzCjMOpwrvCmMOowq7CpCBgZG9jdW1lbnQuYm9keWBcbiAgICogQHBhcmFtIHRvcE9mZnNldCDDpcKBwo/Dp8KnwrvDpcKAwrzDr8K8wozDqcK7wpjDqMKuwqQgYDBgXG4gICAqL1xuICBzY3JvbGxUb0VsZW1lbnQoZWxlbWVudD86IEVsZW1lbnQsIHRvcE9mZnNldCA9IDApIHtcbiAgICBpZiAoIWVsZW1lbnQpIGVsZW1lbnQgPSB0aGlzLmRvYy5ib2R5O1xuXG4gICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xuXG4gICAgY29uc3QgdyA9IHRoaXMud2luO1xuICAgIGlmICh3ICYmIHcuc2Nyb2xsQnkpIHtcbiAgICAgIHcuc2Nyb2xsQnkoMCwgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0b3BPZmZzZXQpO1xuXG4gICAgICBpZiAody5wYWdlWU9mZnNldCA8IDIwKSB7XG4gICAgICAgIHcuc2Nyb2xsQnkoMCwgLXcucGFnZVlPZmZzZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDDpsK7wprDpcKKwqjDqMKHwrPDqcKhwrbDqcKDwqhcbiAgICogQHBhcmFtIHRvcE9mZnNldCDDpcKBwo/Dp8KnwrvDpcKAwrzDr8K8wozDqcK7wpjDqMKuwqQgYDBgXG4gICAqL1xuICBzY3JvbGxUb1RvcCh0b3BPZmZzZXQgPSAwKSB7XG4gICAgdGhpcy5zY3JvbGxUb0VsZW1lbnQodGhpcy5kb2MuYm9keSwgdG9wT2Zmc2V0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXBwLCBMYXlvdXQsIFVzZXIsIFNldHRpbmdzTm90aWZ5IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5jb25zdCBMQVlPVVRfS0VZID0gJ2xheW91dCc7XG5jb25zdCBVU0VSX0tFWSA9ICd1c2VyJztcbmNvbnN0IEFQUF9LRVkgPSAnYXBwJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2Uge1xuICBwcml2YXRlIG5vdGlmeSQgPSBuZXcgU3ViamVjdDxTZXR0aW5nc05vdGlmeT4oKTtcbiAgcHJpdmF0ZSBfYXBwOiBBcHAgPSBudWxsO1xuICBwcml2YXRlIF91c2VyOiBVc2VyID0gbnVsbDtcbiAgcHJpdmF0ZSBfbGF5b3V0OiBMYXlvdXQgPSBudWxsO1xuXG4gIHByaXZhdGUgZ2V0KGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCAnbnVsbCcpIHx8IG51bGw7XG4gIH1cblxuICBwcml2YXRlIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfVxuXG4gIGdldCBsYXlvdXQoKTogTGF5b3V0IHtcbiAgICBpZiAoIXRoaXMuX2xheW91dCkge1xuICAgICAgdGhpcy5fbGF5b3V0ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgPExheW91dD57XG4gICAgICAgICAgZml4ZWQ6IHRydWUsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBib3hlZDogZmFsc2UsXG4gICAgICAgICAgbGFuZzogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5nZXQoTEFZT1VUX0tFWSksXG4gICAgICApO1xuICAgICAgdGhpcy5zZXQoTEFZT1VUX0tFWSwgdGhpcy5fbGF5b3V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dDtcbiAgfVxuXG4gIGdldCBhcHAoKTogQXBwIHtcbiAgICBpZiAoIXRoaXMuX2FwcCkge1xuICAgICAgdGhpcy5fYXBwID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgPEFwcD57XG4gICAgICAgICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICB9LFxuICAgICAgICB0aGlzLmdldChBUFBfS0VZKSxcbiAgICAgICk7XG4gICAgICB0aGlzLnNldChBUFBfS0VZLCB0aGlzLl9hcHApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYXBwO1xuICB9XG5cbiAgZ2V0IHVzZXIoKTogVXNlciB7XG4gICAgaWYgKCF0aGlzLl91c2VyKSB7XG4gICAgICB0aGlzLl91c2VyID0gT2JqZWN0LmFzc2lnbig8VXNlcj57fSwgdGhpcy5nZXQoVVNFUl9LRVkpKTtcbiAgICAgIHRoaXMuc2V0KFVTRVJfS0VZLCB0aGlzLl91c2VyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3VzZXI7XG4gIH1cblxuICBnZXQgbm90aWZ5KCk6IE9ic2VydmFibGU8U2V0dGluZ3NOb3RpZnk+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0TGF5b3V0KG5hbWU6IHN0cmluZyB8IExheW91dCwgdmFsdWU/OiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmxheW91dFtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sYXlvdXQgPSBuYW1lO1xuICAgIH1cbiAgICB0aGlzLnNldChMQVlPVVRfS0VZLCB0aGlzLl9sYXlvdXQpO1xuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ2xheW91dCcsIG5hbWUsIHZhbHVlIH0gYXMgYW55KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldEFwcCh2YWx1ZTogQXBwKSB7XG4gICAgdGhpcy5fYXBwID0gdmFsdWU7XG4gICAgdGhpcy5zZXQoQVBQX0tFWSwgdmFsdWUpO1xuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ2FwcCcsIHZhbHVlIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0VXNlcih2YWx1ZTogVXNlcikge1xuICAgIHRoaXMuX3VzZXIgPSB2YWx1ZTtcbiAgICB0aGlzLnNldChVU0VSX0tFWSwgdmFsdWUpO1xuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ3VzZXInLCB2YWx1ZSB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudENvbmZpZyB9IGZyb20gJy4vc2VydmljZXMvaHR0cC9odHRwLmNvbmZpZyc7XG5pbXBvcnQgeyBSZXNwb25zaXZlQ29uZmlnIH0gZnJvbSAnLi9zZXJ2aWNlcy9yZXNwb25zaXZlL3Jlc3BvbnNpdmUuY29uZmlnJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbGFpblRoZW1lQ29uZmlnIHtcbiAgaHR0cD86IEh0dHBDbGllbnRDb25maWc7XG4gIHJlc3BvbnNpdmU/OiBSZXNwb25zaXZlQ29uZmlnO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5UaGVtZUNvbmZpZyB9IGZyb20gJy4uLy4uL3RoZW1lLmNvbmZpZyc7XG5pbXBvcnQgeyBSZXNwb25zaXZlQ29uZmlnIH0gZnJvbSAnLi9yZXNwb25zaXZlLmNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBSRVBfTUFYID0gNjtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlU2VydmljZSB7XG4gIHByaXZhdGUgY29nOiBSZXNwb25zaXZlQ29uZmlnO1xuICBjb25zdHJ1Y3Rvcihjb2c6IEFsYWluVGhlbWVDb25maWcpIHtcbiAgICB0aGlzLmNvZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICA8UmVzcG9uc2l2ZUNvbmZpZz57XG4gICAgICAgIHJ1bGVzOiB7XG4gICAgICAgICAgMTogeyB4czogMjQgfSxcbiAgICAgICAgICAyOiB7IHhzOiAyNCwgc206IDEyIH0sXG4gICAgICAgICAgMzogeyB4czogMjQsIHNtOiAxMiwgbWQ6IDggfSxcbiAgICAgICAgICA0OiB7IHhzOiAyNCwgc206IDEyLCBtZDogOCwgbGc6IDYgfSxcbiAgICAgICAgICA1OiB7IHhzOiAyNCwgc206IDEyLCBtZDogOCwgbGc6IDYsIHhsOiA0IH0sXG4gICAgICAgICAgNjogeyB4czogMjQsIHNtOiAxMiwgbWQ6IDgsIGxnOiA2LCB4bDogNCwgeHhsOiAyIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY29nIS5yZXNwb25zaXZlLFxuICAgICk7XG4gICAgaWYgKFxuICAgICAgT2JqZWN0LmtleXModGhpcy5jb2cucnVsZXMpXG4gICAgICAgIC5tYXAoaSA9PiAraSlcbiAgICAgICAgLnNvbWUoKGk6IG51bWJlcikgPT4gaSA8IDEgfHwgaSA+IFJFUF9NQVgpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBbdGhlbWVdIHRoZSByZXNwb25zZWl2ZSBydWxlIGluZGV4IHZhbHVlIHJhbmdlIG11c3QgYmUgMS0ke1JFUF9NQVh9YCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZ2VuQ2xzKGNvdW50OiBudW1iZXIpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgcnVsZSA9IHRoaXMuY29nLnJ1bGVzW2NvdW50ID4gUkVQX01BWCA/IFJFUF9NQVggOiBNYXRoLm1heChjb3VudCwgMSldO1xuICAgIGNvbnN0IGFudENvbENsYXNzID0gJ2FudC1jb2wnO1xuICAgIGNvbnN0IGNsc01hcCA9IFtgJHthbnRDb2xDbGFzc30teHMtJHtydWxlLnhzfWBdO1xuICAgIGlmIChydWxlLnNtKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30tc20tJHtydWxlLnNtfWApO1xuICAgIGlmIChydWxlLm1kKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30tbWQtJHtydWxlLm1kfWApO1xuICAgIGlmIChydWxlLmxnKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30tbGctJHtydWxlLmxnfWApO1xuICAgIGlmIChydWxlLnhsKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30teGwtJHtydWxlLnhsfWApO1xuICAgIGlmIChydWxlLnh4bCkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LXh4bC0ke3J1bGUueHhsfWApO1xuICAgIHJldHVybiBjbHNNYXA7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEluamVjdCxcbiAgT3B0aW9uYWwsXG4gIEluamVjdG9yLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vbWVudS9tZW51LnNlcnZpY2UnO1xuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiwgQWxhaW5JMThOU2VydmljZSB9IGZyb20gJy4uL2kxOG4vaTE4bic7XG5cbi8qKlxuICogw6jCrsK+w6fCvcKuw6bCoMKHw6nCosKYXG4gKiBAc2VlIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3Mvc2VydmljZSNUaXRsZVNlcnZpY2VcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBUaXRsZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9wcmVmaXggPSAnJztcbiAgcHJpdmF0ZSBfc3VmZml4ID0gJyc7XG4gIHByaXZhdGUgX3NlcGFyYXRvciA9ICcgLSAnO1xuICBwcml2YXRlIF9yZXZlcnNlID0gZmFsc2U7XG4gIHByaXZhdGUgX2RlZmF1bHQgPSAnTm90IFBhZ2UgTmFtZSc7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHRpdGxlOiBUaXRsZSxcbiAgICBwcml2YXRlIG1lbnVTcnY6IE1lbnVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICApIHtcbiAgICBpZiAodGhpcy5pMThuU3J2KVxuICAgICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4blNydi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0VGl0bGUoKSk7XG4gIH1cblxuICAvKiogw6jCrsK+w6fCvcKuw6XCiMKGw6nCmsKUw6fCrMKmICovXG4gIHNldCBzZXBhcmF0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcGFyYXRvciA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIMOowq7CvsOnwr3CrsOlwonCjcOnwrzCgCAqL1xuICBzZXQgcHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVmaXggPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiDDqMKuwr7Dp8K9wq7DpcKQwo7Dp8K8woAgKi9cbiAgc2V0IHN1ZmZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3VmZml4ID0gdmFsdWU7XG4gIH1cblxuICAvKiogw6jCrsK+w6fCvcKuw6bCmMKvw6XCkMKmw6XCj8KNw6jCvcKsICovXG4gIHNldCByZXZlcnNlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmV2ZXJzZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIMOowq7CvsOnwr3CrsOpwrvCmMOowq7CpMOmwqDCh8OpwqLCmMOlwpDCjSAqL1xuICBzZXQgZGVmYXVsdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdCA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeUVsZW1lbnQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBlbCA9XG4gICAgICB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCcuYWxhaW4tZGVmYXVsdF9fY29udGVudC10aXRsZSBoMScpIHx8XG4gICAgICB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZWFkZXJfX3RpdGxlJyk7XG4gICAgaWYgKGVsKSB7XG4gICAgICByZXR1cm4gZWwuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlSb3V0ZSgpOiBzdHJpbmcge1xuICAgIGxldCBuZXh0ID0gdGhpcy5pbmplY3Rvci5nZXQoQWN0aXZhdGVkUm91dGUpO1xuICAgIHdoaWxlIChuZXh0LmZpcnN0Q2hpbGQpIG5leHQgPSBuZXh0LmZpcnN0Q2hpbGQ7XG4gICAgY29uc3QgZGF0YSA9IChuZXh0LnNuYXBzaG90ICYmIG5leHQuc25hcHNob3QuZGF0YSkgfHwge307XG4gICAgaWYgKGRhdGEudGl0bGVJMThuICYmIHRoaXMuaTE4blNydilcbiAgICAgIGRhdGEudGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoZGF0YS50aXRsZUkxOG4pO1xuICAgIHJldHVybiBkYXRhLnRpdGxlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeU1lbnUoKTogc3RyaW5nIHtcbiAgICBjb25zdCBtZW51cyA9IHRoaXMubWVudVNydi5nZXRQYXRoQnlVcmwodGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKS51cmwpO1xuICAgIGlmICghbWVudXMgfHwgbWVudXMubGVuZ3RoIDw9IDApIHJldHVybiAnJztcblxuICAgIGNvbnN0IGl0ZW0gPSBtZW51c1ttZW51cy5sZW5ndGggLSAxXTtcbiAgICBsZXQgdGl0bGU7XG4gICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgcmV0dXJuIHRpdGxlIHx8IGl0ZW0udGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqMKuwr7Dp8K9wq7DpsKgwofDqcKiwphcbiAgICovXG4gIHNldFRpdGxlKHRpdGxlPzogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICB0aXRsZSA9XG4gICAgICAgIHRoaXMuZ2V0QnlSb3V0ZSgpIHx8XG4gICAgICAgIHRoaXMuZ2V0QnlNZW51KCkgfHxcbiAgICAgICAgdGhpcy5nZXRCeUVsZW1lbnQoKSB8fFxuICAgICAgICB0aGlzLl9kZWZhdWx0O1xuICAgIH1cbiAgICBpZiAodGl0bGUgJiYgIUFycmF5LmlzQXJyYXkodGl0bGUpKSB7XG4gICAgICB0aXRsZSA9IFt0aXRsZV07XG4gICAgfVxuXG4gICAgbGV0IG5ld1RpdGxlcyA9IFtdO1xuICAgIGlmICh0aGlzLl9wcmVmaXgpIHtcbiAgICAgIG5ld1RpdGxlcy5wdXNoKHRoaXMuX3ByZWZpeCk7XG4gICAgfVxuICAgIG5ld1RpdGxlcy5wdXNoKC4uLih0aXRsZSBhcyBzdHJpbmdbXSkpO1xuICAgIGlmICh0aGlzLl9zdWZmaXgpIHtcbiAgICAgIG5ld1RpdGxlcy5wdXNoKHRoaXMuX3N1ZmZpeCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXZlcnNlKSB7XG4gICAgICBuZXdUaXRsZXMgPSBuZXdUaXRsZXMucmV2ZXJzZSgpO1xuICAgIH1cbiAgICB0aGlzLnRpdGxlLnNldFRpdGxlKG5ld1RpdGxlcy5qb2luKHRoaXMuX3NlcGFyYXRvcikpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaTE4biQpIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IERFTE9OX0xPQ0FMRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdkZWxvbi1sb2NhbGUnKTtcbiIsImltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUudHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCA8TG9jYWxlRGF0YT57XG4gIGFiYnI6ICd6aC1DTicsXG4gIGV4Y2VwdGlvbjoge1xuICAgIDQwMzogJ8OmworCscOmwq3CicOvwrzCjMOkwr3CoMOmwpfCoMOmwp3Cg8Oowq7Cv8OpwpfCrsOowq/CpcOpwqHCtcOpwp3CoicsXG4gICAgNDA0OiAnw6bCisKxw6bCrcKJw6/CvMKMw6TCvcKgw6jCrsK/w6nCl8Kuw6fCmsKEw6nCocK1w6nCncKiw6TCuMKNw6XCrcKYw6XCnMKoJyxcbiAgICA1MDA6ICfDpsKKwrHDpsKtwonDr8K8wozDpsKcwo3DpcKKwqHDpcKZwqjDpcKHwrrDqcKUwpnDpMK6woYnLFxuICAgIGJhY2tUb0hvbWU6ICfDqMK/wpTDpcKbwp7DqcKmwpbDqcKhwrUnLFxuICB9LFxuICBub3RpY2VJY29uOiB7XG4gICAgZW1wdHlUZXh0OiAnw6bCmsKCw6bCl8Kgw6bClcKww6bCjcKuJyxcbiAgICBjbGVhclRleHQ6ICfDpsK4woXDp8KpwronLFxuICB9LFxuICByZXVzZVRhYjoge1xuICAgIGNsb3NlOiAnw6XChcKzw6nCl8Ktw6bCoMKHw6fCrcK+JyxcbiAgICBjbG9zZU90aGVyOiAnw6XChcKzw6nCl8Ktw6XChcK2w6XCrsKDw6bCoMKHw6fCrcK+JyxcbiAgICBjbG9zZVJpZ2h0OiAnw6XChcKzw6nCl8Ktw6XCj8Kzw6TCvsKnw6bCoMKHw6fCrcK+JyxcbiAgICBjbGVhcjogJ8OmwrjChcOnwqnCuicsXG4gIH0sXG4gIHRhZ1NlbGVjdDoge1xuICAgIGV4cGFuZDogJ8OlwrHClcOlwrzCgCcsXG4gICAgY29sbGFwc2U6ICfDpsKUwrbDqMK1wrcnLFxuICB9LFxuICBtaW5pUHJvZ3Jlc3M6IHtcbiAgICB0YXJnZXQ6ICfDp8Kbwq7DpsKgwofDpcKAwrzDr8K8wponXG4gIH0sXG4gIHN0OiB7XG4gICAgdG90YWw6ICfDpcKFwrEge3t0b3RhbH19IMOmwp3CoScsXG4gIH0sXG4gIHNmOiB7XG4gICAgc3VibWl0OiAnw6bCj8KQw6TCusKkJyxcbiAgICByZXNldDogJ8OpwofCjcOnwr3CricsXG4gICAgc2VhcmNoOiAnw6bCkMKcw6fCtMKiJyxcbiAgICBlZGl0OiAnw6TCv8Kdw6XCrcKYJyxcbiAgICBhZGRUZXh0OiAnw6bCt8K7w6XCisKgJyxcbiAgICByZW1vdmVUZXh0OiAnw6fCp8K7w6nCmcKkJyxcbiAgICBjaGVja0FsbFRleHQ6ICfDpcKFwqjDqcKAwoknLFxuICB9LFxufTtcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgUHJvdmlkZXIsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuL2xvY2FsZS50eXBlcyc7XG5pbXBvcnQgeyBERUxPTl9MT0NBTEUgfSBmcm9tICcuL2xvY2FsZS50b2tlbnMnO1xuaW1wb3J0IHpoQ04gZnJvbSAnLi9sYW5ndWFnZXMvemgtQ04nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVsb25Mb2NhbGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfbG9jYWxlOiBMb2NhbGVEYXRhO1xuICBwcml2YXRlIGNoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PExvY2FsZURhdGE+KHRoaXMuX2xvY2FsZSk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChERUxPTl9MT0NBTEUpIGxvY2FsZTogTG9jYWxlRGF0YSkge1xuICAgIHRoaXMuc2V0TG9jYWxlKGxvY2FsZSB8fCB6aENOKTtcbiAgfVxuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxMb2NhbGVEYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldExvY2FsZShsb2NhbGU6IExvY2FsZURhdGEpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbG9jYWxlICYmIHRoaXMuX2xvY2FsZS5hYmJyID09PSBsb2NhbGUuYWJicikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBsb2NhbGU7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQobG9jYWxlKTtcbiAgfVxuXG4gIGdldCBsb2NhbGUoKTogTG9jYWxlRGF0YSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgfVxuXG4gIGdldERhdGEocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZVtwYXRoXSB8fCB7fTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gREVMT05fTE9DQUxFX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShleGlzdDogRGVsb25Mb2NhbGVTZXJ2aWNlLCBsb2NhbGU6IExvY2FsZURhdGEpOiBEZWxvbkxvY2FsZVNlcnZpY2Uge1xuICByZXR1cm4gZXhpc3QgfHwgbmV3IERlbG9uTG9jYWxlU2VydmljZShsb2NhbGUpO1xufVxuXG5leHBvcnQgY29uc3QgREVMT05fTE9DQUxFX1NFUlZJQ0VfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlICAgOiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gIHVzZUZhY3Rvcnk6IERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlksXG4gIGRlcHMgICAgICA6IFsgWyBuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIERlbG9uTG9jYWxlU2VydmljZSBdLCBERUxPTl9MT0NBTEUgXVxufTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB6aENOIGZyb20gJy4vbGFuZ3VhZ2VzL3poLUNOJztcblxuaW1wb3J0IHsgREVMT05fTE9DQUxFIH0gZnJvbSAnLi9sb2NhbGUudG9rZW5zJztcbmltcG9ydCB7IERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSIH0gZnJvbSAnLi9sb2NhbGUuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogREVMT05fTE9DQUxFLCB1c2VWYWx1ZTogemhDTiB9LFxuICAgIERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEZWxvbkxvY2FsZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS50eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IDxMb2NhbGVEYXRhPntcbiAgYWJicjogJ2VuLVVTJyxcbiAgZXhjZXB0aW9uOiB7XG4gICAgNDAzOiBgU29ycnksIHlvdSBkb24ndCBoYXZlIGFjY2VzcyB0byB0aGlzIHBhZ2VgLFxuICAgIDQwNDogYFNvcnJ5LCB0aGF0IHBhZ2UgZG9uJ3QgZXhpc3RgLFxuICAgIDUwMDogYFNvcnJ5LCBzZXJ2ZXIgZXJyb3JgLFxuICAgIGJhY2tUb0hvbWU6ICdCYWNrIFRvIEhvbWUnLFxuICB9LFxuICBub3RpY2VJY29uOiB7XG4gICAgZW1wdHlUZXh0OiAnTm8gZGF0YScsXG4gICAgY2xlYXJUZXh0OiAnQ2xlYXInLFxuICB9LFxuICByZXVzZVRhYjoge1xuICAgIGNsb3NlOiAnQ2xvc2UgdGFiJyxcbiAgICBjbG9zZU90aGVyOiAnQ2xvc2Ugb3RoZXIgdGFicycsXG4gICAgY2xvc2VSaWdodDogJ0Nsb3NlIHRhYnMgdG8gcmlnaHQnLFxuICAgIGNsZWFyOiAnQ2xlYXIgdGFicycsXG4gIH0sXG4gIHRhZ1NlbGVjdDoge1xuICAgIGV4cGFuZDogJ0V4cGFuZCcsXG4gICAgY29sbGFwc2U6ICdDb2xsYXBzZScsXG4gIH0sXG4gIG1pbmlQcm9ncmVzczoge1xuICAgIHRhcmdldDogJ1RhcmdldDogJyxcbiAgfSxcbiAgc3Q6IHtcbiAgICB0b3RhbDogJ3t7cmFuZ2VbMF19fSAtIHt7cmFuZ2VbMV19fSBvZiB7e3RvdGFsfX0nLFxuICB9LFxuICBzZjoge1xuICAgIHN1Ym1pdDogJ1N1Ym1pdCcsXG4gICAgcmVzZXQ6ICdSZXNldCcsXG4gICAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgICBlZGl0OiAnU2F2ZScsXG4gICAgYWRkVGV4dDogJ0FkZCcsXG4gICAgcmVtb3ZlVGV4dDogJ1JlbW92ZScsXG4gICAgY2hlY2tBbGxUZXh0OiAnQ2hlY2sgYWxsJyxcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlLnR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgPExvY2FsZURhdGE+e1xuICBhYmJyOiAnemgtVFcnLFxuICBleGNlcHRpb246IHtcbiAgICA0MDM6ICfDpsKKwrHDpsKtwonDr8K8wozDpcKmwrPDp8KEwqHDpsKsworDqMKowqrDpcKVwo/DqMKpwrLDqcKgwoHDqcKdwqInLFxuICAgIDQwNDogJ8OmworCscOmwq3CicOvwrzCjMOlwqbCs8OowqjCqsOlwpXCj8OnwprChMOpwqDCgcOpwp3CosOkwrjCjcOlwq3CmMOlwpzCqCcsXG4gICAgNTAwOiAnw6bCisKxw6bCrcKJw6/CvMKMw6bCnMKNw6XCi8KZw6XCmcKow6XCh8K6w6nCjMKvw6TCusKGJyxcbiAgICBiYWNrVG9Ib21lOiAnw6jCv8KUw6XCm8Kew6nCpsKWw6nCoMKBJyxcbiAgfSxcbiAgbm90aWNlSWNvbjoge1xuICAgIGVtcHR5VGV4dDogJ8OmwprCq8OnwoTCocOmwpXCuMOmwpPCmicsXG4gICAgY2xlYXJUZXh0OiAnw6bCuMKFw6fCqcK6JyxcbiAgfSxcbiAgcmV1c2VUYWI6IHtcbiAgICBjbG9zZTogJ8OpwpfCnMOpwpbCicOmwqjCmcOnwrDCvScsXG4gICAgY2xvc2VPdGhlcjogJ8OpwpfCnMOpwpbCicOlwoXCtsOlwq7Cg8OmwqjCmcOnwrDCvScsXG4gICAgY2xvc2VSaWdodDogJ8OpwpfCnMOpwpbCicOlwo/Cs8OlwoHCtMOmwqjCmcOnwrDCvScsXG4gICAgY2xlYXI6ICfDpsK4woXDp8KpwronLFxuICB9LFxuICB0YWdTZWxlY3Q6IHtcbiAgICBleHBhbmQ6ICfDpcKxwpXDqcKWwosnLFxuICAgIGNvbGxhcHNlOiAnw6bClMK2w6jCtcK3JyxcbiAgfSxcbiAgbWluaVByb2dyZXNzOiB7XG4gICAgdGFyZ2V0OiAnw6fCm8Kuw6bCqMKZw6XCgMK8w6/CvMKaJyxcbiAgfSxcbiAgc3Q6IHtcbiAgICB0b3RhbDogJ8OlwoXCsSB7e3RvdGFsfX0gw6bCosKdJyxcbiAgfSxcbiAgc2Y6IHtcbiAgICBzdWJtaXQ6ICfDpsKPwpDDpMK6wqQnLFxuICAgIHJlc2V0OiAnw6nCh8KNw6fCvcKuJyxcbiAgICBzZWFyY2g6ICfDpsKQwpzDp8K0wqInLFxuICAgIGVkaXQ6ICfDpMK/wp3DpcKtwpgnLFxuICAgIGFkZFRleHQ6ICfDpsK3wrvDpcKKwqAnLFxuICAgIHJlbW92ZVRleHQ6ICfDp8KnwrvDqcKZwqQnLFxuICAgIGNoZWNrQWxsVGV4dDogJ8OlwoXCqMOpwoHCuCcsXG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE56TW9kYWxTZXJ2aWNlLCBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxIZWxwZXJPcHRpb25zIHtcbiAgLyoqIMOlwqTCp8OlwrDCj8OvwrzCm8Okwr7Ci8OlwqbCgsOvwrzCmmxnw6PCgMKBNjAww6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYGxnYCAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyO1xuICAvKiogw6XCr8K5w6jCr8Kdw6bCocKGIFtNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlXShodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9jb21wb25lbnRzL21vZGFsL256LW1vZGFsLnR5cGUudHMpIMOlwo/CgsOmwpXCsCAqL1xuICBtb2RhbE9wdGlvbnM/OiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlO1xuICAvKiogw6bCmMKvw6XCkMKmw6fCssK+w6XCh8KGw6/CvMKIw6nCu8KYw6jCrsKkw6/CvMKaYHRydWVgw6/CvMKJw6/CvMKMw6jCi8Klw6jCv8KUw6XCm8Kew6XCgMK8w6nCncKew6fCqcK6w6XCgMK8w6/CvMKIYG51bGxgw6bCiMKWYHVuZGVmaW5lZGDDr8K8wonDqMKnwobDpMK4wrrDpsKIwpDDpcKKwp/Dr8K8wozDpcKQwqbDpcKIwpnDqMKnwobDpMK4wrrDqcKUwpnDqMKvwq8gKi9cbiAgZXhhY3Q/OiBib29sZWFuO1xuICAvKiogw6bCmMKvw6XCkMKmw6XCjMKFw6jCo8K5w6bCoMKHw6fCrcK+w6nCocK1w6/CvMKMw6TCv8Kuw6XCpMKNw6bCqMKhw6bCgMKBw6XCjMKFw6XCkMKrw6bCoMKHw6fCrcK+w6nCl8K0w6jCt8Kdw6nCl8Kuw6nCosKYICovXG4gIGluY2x1ZGVUYWJzPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiDDpcKvwrnDqMKvwp3DpsKhwobDqMK+woXDpcKKwqnDp8KxwrtcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBNb2RhbEhlbHBlciB7XG4gIHByaXZhdGUgekluZGV4ID0gNTAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBOek1vZGFsU2VydmljZSkge31cblxuICAvKipcbiAgICogw6bCnsKEw6XCu8K6w6TCuMKAw6TCuMKqw6XCr8K5w6jCr8Kdw6bCocKGXG4gICAqXG4gICAqIEBwYXJhbSBjb21wIMOnwrvChMOkwrvCtlxuICAgKiBAcGFyYW0gcGFyYW1zIMOnwrvChMOkwrvCtsOlwo/CgsOmwpXCsFxuICAgKiBAcGFyYW0gb3B0aW9ucyDDqcKiwp3DpcKkwpbDpcKPwoLDpsKVwrBcbiAgICpcbiAgICogw6fCpMK6w6TCvsKLw6/CvMKaXG4gIGBgYHRzXG50aGlzLm1vZGFsSGVscGVyLmNyZWF0ZShGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuLy8gw6XCr8K5w6TCusKOw6fCu8KEw6TCu8K2w6fCmsKEw6bCiMKQw6XCisKfJsOlwoXCs8OpwpfCrcOnwprChMOlwqTChMOnwpDChsOowq/CtMOmwpjCjlxuLy8gw6bCiMKQw6XCisKfXG50aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG50aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcbi8vIMOlwoXCs8OpwpfCrVxudGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcbmBgYFxuICAgKi9cbiAgY3JlYXRlKFxuICAgIGNvbXA6IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IE1vZGFsSGVscGVyT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHNpemU6ICdsZycsXG4gICAgICBleGFjdDogdHJ1ZSxcbiAgICAgIGluY2x1ZGVUYWJzOiBmYWxzZSxcbiAgICB9LCBvcHRpb25zKTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICBsZXQgY2xzID0gJycsXG4gICAgICAgIHdpZHRoID0gJyc7XG4gICAgICBpZiAob3B0aW9ucy5zaXplKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zaXplID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHdpZHRoID0gYCR7b3B0aW9ucy5zaXplfXB4YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbHMgPSBgbW9kYWwtJHtvcHRpb25zLnNpemV9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMuaW5jbHVkZVRhYnMpIHtcbiAgICAgICAgY2xzICs9ICcgbW9kYWwtaW5jbHVkZS10YWJzJztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlID0ge1xuICAgICAgICBueldyYXBDbGFzc05hbWU6IGNscyxcbiAgICAgICAgbnpDb250ZW50OiBjb21wLFxuICAgICAgICBueldpZHRoOiB3aWR0aCA/IHdpZHRoIDogdW5kZWZpbmVkLFxuICAgICAgICBuekZvb3RlcjogbnVsbCxcbiAgICAgICAgbnpDb21wb25lbnRQYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgbnpaSW5kZXg6ICsrdGhpcy56SW5kZXgsXG4gICAgICB9O1xuICAgICAgY29uc3Qgc3ViamVjdCA9IHRoaXMuc3J2LmNyZWF0ZShcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgb3B0aW9ucy5tb2RhbE9wdGlvbnMpLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGFmdGVyQ2xvc2UkID0gc3ViamVjdC5hZnRlckNsb3NlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXhhY3QgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAocmVzICE9IG51bGwpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICB9XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIGFmdGVyQ2xvc2UkLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKewoTDpcK7wrrDqcKdwpnDpsKAwoHDpsKhwobDr8K8wozDp8KCwrnDpcKHwrvDqMKSwpnDpcKxwoLDpMK4wo3DpcKFwoHDqMKuwrjDpcKFwrPDqcKXwq1cbiAgICpcbiAgICogQHBhcmFtIGNvbXAgw6fCu8KEw6TCu8K2XG4gICAqIEBwYXJhbSBwYXJhbXMgw6fCu8KEw6TCu8K2w6XCj8KCw6bClcKwXG4gICAqIEBwYXJhbSBvcHRpb25zIMOpwqLCncOlwqTClsOlwo/CgsOmwpXCsFxuICAgKlxuICAgKiDDp8KkwrrDpMK+wovDr8K8wppcbiAgYGBgdHNcbnRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuLy8gw6XCr8K5w6TCusKOw6fCu8KEw6TCu8K2w6fCmsKEw6bCiMKQw6XCisKfJsOlwoXCs8OpwpfCrcOnwprChMOlwqTChMOnwpDChsOowq/CtMOmwpjCjlxuLy8gw6bCiMKQw6XCisKfXG50aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG50aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcbi8vIMOlwoXCs8OpwpfCrVxudGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcbmBgYFxuICAgKi9cbiAgY3JlYXRlU3RhdGljKFxuICAgIGNvbXA6IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IE1vZGFsSGVscGVyT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG1vZGFsT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7IG56TWFza0Nsb3NhYmxlOiBmYWxzZSB9LFxuICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLm1vZGFsT3B0aW9ucyxcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZShjb21wLCBwYXJhbXMsIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHsgbW9kYWxPcHRpb25zIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKJwpPDpcK8woDDpcKvwrnDqMKvwp3DpsKhwoZcbiAgICogQHBhcmFtIGNvbXAgw6fCu8KEw6TCu8K2XG4gICAqIEBwYXJhbSBwYXJhbXMgw6fCu8KEw6TCu8K2w6XCj8KCw6bClcKwXG4gICAqIEBwYXJhbSBzaXplIMOlwqTCp8OlwrDCj8OvwrzCm8Okwr7Ci8OlwqbCgsOvwrzCmmxnw6PCgMKBNjAww6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKabGdcbiAgICogQHBhcmFtIG9wdGlvbnMgw6XCr8K5w6jCr8Kdw6bCocKGIGBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlYCDDpcKPwoLDpsKVwrBcbiAgICpcbiAgICogw6fCpMK6w6TCvsKLw6/CvMKaXG4gIGBgYHRzXG50aGlzLm1vZGFsSGVscGVyLm9wZW4oRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbi8vIMOlwq/CucOkwrrCjsOnwrvChMOkwrvCtsOnwprChMOmwojCkMOlworCnybDpcKFwrPDqcKXwq3Dp8KawoTDpcKkwoTDp8KQwobDqMKvwrTDpsKYwo5cbi8vIMOmwojCkMOlworCn1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XG4vLyDDpcKFwrPDqcKXwq1cbnRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG5gYGBcbiAgICovXG4gIG9wZW4oXG4gICAgY29tcDogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBzaXplOiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXIgPSAnbGcnLFxuICAgIG9wdGlvbnM/OiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlLFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZShjb21wLCBwYXJhbXMsIHtcbiAgICAgIHNpemUsXG4gICAgICBtb2RhbE9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICBleGFjdDogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6nCncKZw6bCgMKBw6bCocKGw6/CvMKMw6fCgsK5w6XCh8K7w6jCksKZw6XCscKCw6TCuMKNw6XChcKBw6jCrsK4w6XChcKzw6nCl8KtXG4gICAqIEBwYXJhbSBjb21wIMOnwrvChMOkwrvCtlxuICAgKiBAcGFyYW0gcGFyYW1zIMOnwrvChMOkwrvCtsOlwo/CgsOmwpXCsFxuICAgKiBAcGFyYW0gc2l6ZSDDpcKkwqfDpcKwwo/Dr8K8wpvDpMK+wovDpcKmwoLDr8K8wppsZ8OjwoDCgTYwMMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmxnXG4gICAqIEBwYXJhbSBvcHRpb25zIMOlwq/CucOowq/CncOmwqHChiBgTW9kYWxPcHRpb25zRm9yU2VydmljZWAgw6XCj8KCw6bClcKwXG4gICAqXG4gICAqIMOnwqTCusOkwr7Ci8OvwrzCmlxuICBgYGB0c1xudGhpcy5tb2RhbEhlbHBlci5vcGVuKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4vLyDDpcKvwrnDpMK6wo7Dp8K7woTDpMK7wrbDp8KawoTDpsKIwpDDpcKKwp8mw6XChcKzw6nCl8Ktw6fCmsKEw6XCpMKEw6fCkMKGw6jCr8K0w6bCmMKOXG4vLyDDpsKIwpDDpcKKwp9cbnRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcbnRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xuLy8gw6XChcKzw6nCl8KtXG50aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xuYGBgXG4gICAqL1xuICBzdGF0aWMoXG4gICAgY29tcDogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBzaXplOiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXIgPSAnbGcnLFxuICAgIG9wdGlvbnM/OiBhbnksXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMub3BlbihcbiAgICAgIGNvbXAsXG4gICAgICBwYXJhbXMsXG4gICAgICBzaXplLFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIG56TWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICksXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE56RHJhd2VyU2VydmljZSwgTnpEcmF3ZXJPcHRpb25zIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd2VySGVscGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDDpcKkwqfDpcKwwo/Dr8K8wpvDpMK+wovDpcKmwoLDr8K8wppsZ8OjwoDCgTYwMMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBtZGBcbiAgICpcbiAgICogfCDDp8KxwrvDpcKewosgfCDDqcK7wpjDqMKuwqTDpcKkwqfDpcKwwo8gfFxuICAgKiB8IC0tLSB8IC0tLS0tLSB8XG4gICAqIHwgYHNtYCB8IGAzMDBgIHxcbiAgICogfCBgbWRgIHwgYDYwMGAgfFxuICAgKiB8IGBsZ2AgfCBgOTAwYCB8XG4gICAqIHwgYHhsYCB8IGAxMjAwYCB8XG4gICAqXG4gICAqID4gw6TCu8Klw6TCuMKKw6XCgMK8w6/CvMKMw6XCj8Kvw6nCgMKaw6jCv8KHw6jCpsKGw6fCm8KWw6fCm8K4w6XCusKUw6fCmsKETEVTU8Olwo/CgsOmwpXCsMOowofCqsOowqHCjMOowrDCg8OmwpXCtFxuICAgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCBudW1iZXI7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKMwoXDpcKQwqvDpcK6wpXDqcKDwqjDpcK3wqXDpcKFwrfDpsKdwqHDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWBcbiAgICovXG4gIGZvb3Rlcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDDpcK6wpXDqcKDwqjDpcK3wqXDpcKFwrfDpsKdwqHDqcKrwpjDpcK6wqbDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgNTVgXG4gICAqL1xuICBmb290ZXJIZWlnaHQ/OiBudW1iZXI7XG4gIC8qKiDDpsKKwr3DpcKxwokgW056RHJhd2VyT3B0aW9uc10oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZHJhd2VyL3poI256ZHJhd2Vyb3B0aW9ucykgw6XCj8KCw6bClcKwICovXG4gIGRyYXdlck9wdGlvbnM/OiBOekRyYXdlck9wdGlvbnM7XG59XG5cbi8qKlxuICogw6bCisK9w6XCscKJw6jCvsKFw6XCisKpw6fCscK7XG4gKlxuICogKirDpsKzwqjDpsKEwo/Dr8K8wpoqKiDDpsKewoTDpcK7wrrDp8K7wpPDpsKewpzDqcKDwr3DpcKPwq/DqMKiwqvDqMKuwqLDqcKYwoXDr8K8wozDpMK9wobDpsKwwrjDqMK/wpzDqcKDwr3DpMK4wo3DpMK8wprDqMKnwqbDpcKPwpEgYG9ic2VydmVyLmVycm9yYFxuICpcbiAqIMOnwqTCusOkwr7Ci8OvwrzCmlxuYGBgdHNcbnRoaXMuZHJhd2VySGVscGVyLmNyZWF0ZSgnRWRpdCcsIEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4vLyDDpcKvwrnDpMK6wo7Dp8K7woTDpMK7wrbDp8KawoTDpsKIwpDDpcKKwp8mw6XChcKzw6nCl8Ktw6fCmsKEw6XCpMKEw6fCkMKGw6jCr8K0w6bCmMKOXG4vLyDDpsKIwpDDpcKKwp9cbnRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoZGF0YSk7XG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKHRydWUpO1xuLy8gw6XChcKzw6nCl8KtXG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKCk7XG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKGZhbHNlKTtcbmBgYFxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIERyYXdlckhlbHBlciB7XG4gIC8vIMOlwqTCp8OpwoPCqMOlwojChsOmwoPChcOlwobCtcOkwrjCi8OmworCvcOlwrHCicOnwprChMOlwrHCgsOnwrrCp8Omwq/ClCBNb2RhbCDDpMK8wprDpsKbwrTDpMK9wo7DpMK4woDDpMK6wptcbiAgcHJpdmF0ZSB6SW5kZXggPSA0MDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IE56RHJhd2VyU2VydmljZSkgeyB9XG5cbiAgLyoqXG4gICAqIMOmwp7ChMOlwrvCusOkwrjCgMOkwrjCqsOmworCvcOlwrHCiVxuICAgKi9cbiAgY3JlYXRlKFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgY29tcDogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzogRHJhd2VySGVscGVyT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKDxEcmF3ZXJIZWxwZXJPcHRpb25zPntcbiAgICAgIHNpemU6ICdtZCcsXG4gICAgICBmb290ZXI6IHRydWUsXG4gICAgICBmb290ZXJIZWlnaHQ6IDU1LFxuICAgICAgZHJhd2VyT3B0aW9uczoge1xuICAgICAgICBuelBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICAgICAgbnpXcmFwQ2xhc3NOYW1lOiAnJ1xuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgIGNvbnN0IHsgc2l6ZSwgZm9vdGVyLCBmb290ZXJIZWlnaHQsIGRyYXdlck9wdGlvbnMgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogTnpEcmF3ZXJPcHRpb25zID0ge1xuICAgICAgICBuekNvbnRlbnQ6IGNvbXAsXG4gICAgICAgIG56Q29udGVudFBhcmFtczogcGFyYW1zLFxuICAgICAgICBuelpJbmRleDogKyt0aGlzLnpJbmRleCxcbiAgICAgICAgbnpUaXRsZTogdGl0bGVcbiAgICAgIH07XG5cbiAgICAgIGlmIChmb290ZXIpIHtcbiAgICAgICAgZGVmYXVsdE9wdGlvbnMubnpCb2R5U3R5bGUgPSB7XG4gICAgICAgICAgaGVpZ2h0OiBgY2FsYygxMDAlIC0gJHtmb290ZXJIZWlnaHR9cHgpYCxcbiAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgICdwYWRkaW5nLWJvdHRvbSc6IGAke2Zvb3RlckhlaWdodCAtIDJ9cHhgXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgZGVmYXVsdE9wdGlvbnNbZHJhd2VyT3B0aW9ucy5uelBsYWNlbWVudCA9PT0gJ3RvcCcgfHwgZHJhd2VyT3B0aW9ucy5uelBsYWNlbWVudCA9PT0gJ2JvdHRvbScgPyAnbnpIZWlnaHQnIDogJ256V2lkdGgnXSA9IG9wdGlvbnMuc2l6ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zLm56V3JhcENsYXNzTmFtZSA9IChkcmF3ZXJPcHRpb25zLm56V3JhcENsYXNzTmFtZSArIGAgZHJhd2VyLSR7b3B0aW9ucy5zaXplfWApLnRyaW0oKTtcbiAgICAgICAgZGVsZXRlIGRyYXdlck9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdWJqZWN0ID0gdGhpcy5zcnYuY3JlYXRlKFxuICAgICAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBkcmF3ZXJPcHRpb25zKSxcbiAgICAgICk7XG4gICAgICBjb25zdCBhZnRlckNsb3NlJCA9IHN1YmplY3QuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXMgIT0gbnVsbCAmJiByZXMgIT09IGZhbHNlKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICB9XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIGFmdGVyQ2xvc2UkLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKewoTDpcK7wrrDpMK4woDDpMK4wqrDpsKKwr3DpcKxwonDr8K8wozDp8KCwrnDpcKHwrvDqMKSwpnDpcKxwoLDpMK4wo3DpcKFwoHDqMKuwrjDpcKFwrPDqcKXwq1cbiAgICovXG4gIHN0YXRpYyhcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGNvbXA6IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IERyYXdlckhlbHBlck9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBkcmF3ZXJPcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHsgbnpNYXNrQ2xvc2FibGU6IGZhbHNlIH0sXG4gICAgICBvcHRpb25zICYmIG9wdGlvbnMuZHJhd2VyT3B0aW9ucyxcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZSh0aXRsZSwgY29tcCwgcGFyYW1zLCBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7IGRyYXdlck9wdGlvbnMgfSkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwQ2xpZW50LFxuICBIdHRwSGVhZGVycyxcbiAgSHR0cFBhcmFtcyxcbiAgSHR0cFJlc3BvbnNlLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBbGFpblRoZW1lQ29uZmlnIH0gZnJvbSAnLi4vLi4vdGhlbWUuY29uZmlnJztcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcgfSBmcm9tICcuL2h0dHAuY29uZmlnJztcblxuLyoqXG4gKiDDpcKwwoHDqMKjwoVIdHRwQ2xpZW50w6/CvMKMw6TCuMK7w6jCpsKBw6jCp8Kjw6XChsKzw6/CvMKaXG4gKiArIMOkwrzCmMOlwozClkh0dHBDbGllbnTDpcKcwqjDpcKPwoLDpsKVwrDDpMK4worDpMK+wr/DpcKIwqnDpsKAwqdcbiAqICsgw6fCu8Kfw6TCuMKAw6XCrsKew6fCjsKwIGxvYWRpbmdcbiAqICsgw6fCu8Kfw6TCuMKAw6XCpMKEw6fCkMKGw6bCl8K2w6nCl8K0w6bCoMK8w6XCvMKPw6nCl8Kuw6nCosKYXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y2xhc3MtbmFtZVxuZXhwb3J0IGNsYXNzIF9IdHRwQ2xpZW50IHtcbiAgcHJpdmF0ZSBjb2c6IEh0dHBDbGllbnRDb25maWc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgY29nOiBBbGFpblRoZW1lQ29uZmlnKSB7XG4gICAgdGhpcy5jb2cgPSBPYmplY3QuYXNzaWduKFxuICAgICAgPEh0dHBDbGllbnRDb25maWc+e1xuICAgICAgICBudWxsVmFsdWVIYW5kbGluZzogJ2luY2x1ZGUnLFxuICAgICAgICBkYXRlVmFsdWVIYW5kbGluZzogJ3RpbWVzdGFtcCcsXG4gICAgICB9LFxuICAgICAgY29nIS5odHRwLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XG5cbiAgLyoqIMOmwpjCr8OlwpDCpsOmwq3Co8OlwpzCqMOlworCoMOowr3CvcOkwrjCrSAqL1xuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgfVxuXG4gIHBhcnNlUGFyYW1zKHBhcmFtczogYW55KTogSHR0cFBhcmFtcyB7XG4gICAgY29uc3QgbmV3UGFyYW1zID0ge307XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBsZXQgX2RhdGEgPSBwYXJhbXNba2V5XTtcbiAgICAgIC8vIMOlwr/CvcOnwpXCpcOnwqnCusOlwoDCvFxuICAgICAgaWYgKHRoaXMuY29nLm51bGxWYWx1ZUhhbmRsaW5nID09PSAnaWdub3JlJyAmJiBfZGF0YSA9PSBudWxsKSByZXR1cm47XG4gICAgICAvLyDDpcKwwobDpsKXwrbDqcKXwrTDqMK9wqzDpcKMwpbDpMK4wrrDr8K8wprDpsKXwrbDqcKXwrTDpsKIwrMgKMOnwqfCkilcbiAgICAgIGlmICh0aGlzLmNvZy5kYXRlVmFsdWVIYW5kbGluZyA9PT0gJ3RpbWVzdGFtcCcgJiYgX2RhdGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIF9kYXRhID0gX2RhdGEudmFsdWVPZigpO1xuICAgICAgfVxuICAgICAgbmV3UGFyYW1zW2tleV0gPSBfZGF0YTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IEh0dHBQYXJhbXMoeyBmcm9tT2JqZWN0OiBuZXdQYXJhbXMgfSk7XG4gIH1cblxuICBhcHBsaWVkVXJsKHVybDogc3RyaW5nLCBwYXJhbXM/OiBhbnkpIHtcbiAgICBpZiAoIXBhcmFtcykgcmV0dXJuIHVybDtcbiAgICB1cmwgKz0gfnVybC5pbmRleE9mKCc/JykgPyAnJyA6ICc/JztcbiAgICBjb25zdCBhcnI6IHN0cmluZ1tdID0gW107XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXG4gICAgZm9yIChjb25zdCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICBhcnIucHVzaChgJHtrZXl9PSR7cGFyYW1zW2tleV19YCk7XG4gICAgfVxuICAgIHJldHVybiB1cmwgKyBhcnIuam9pbignJicpO1xuICB9XG5cbiAgYmVnaW4oKSB7XG4gICAgLy8gY29uc29sZS50aW1lKCdodHRwJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5fbG9hZGluZyA9IHRydWUpKTtcbiAgfVxuXG4gIGVuZCgpIHtcbiAgICAvLyBjb25zb2xlLnRpbWVFbmQoJ2h0dHAnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLl9sb2FkaW5nID0gZmFsc2UpKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gZ2V0XG5cbiAgLyoqXG4gICAqIEdFVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgVGAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBnZXQ8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8VD47XG5cbiAgLyoqXG4gICAqIEdFVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgc3RyaW5nYCDDp8KxwrvDpcKewotcbiAgICovXG4gIGdldChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICAvKipcbiAgICogR0VUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBKU09OYCDDp8KxwrvDpcKewotcbiAgICovXG4gIGdldChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcblxuICAvKipcbiAgICogR0VUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBKU09OYCDDp8KxwrvDpcKewotcbiAgICovXG4gIGdldDxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj47XG5cbiAgLyoqXG4gICAqIEdFVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgYW55YCDDp8KxwrvDpcKewotcbiAgICovXG4gIGdldChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIEdFVCDDqMKvwrfDpsKxwoJcbiAgICovXG4gIGdldChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgJ0dFVCcsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcG9zdFxuXG4gIC8qKlxuICAgKiBQT1NUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBzdHJpbmdgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcG9zdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIFBPU1TDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEh0dHBSZXNwb25zZTxKU09OPmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBwb3N0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcblxuICAvKipcbiAgICogUE9TVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBwb3N0PFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuXG4gIC8qKlxuICAgKiBQT1NUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBhbnlgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcG9zdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogUE9TVCDDqMKvwrfDpsKxwoJcbiAgICovXG4gIHBvc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICAnUE9TVCcsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBkZWxldGVcblxuICAvKipcbiAgICogREVMRVRFw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBzdHJpbmdgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgZGVsZXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBERUxFVEXDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEpTT05gIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgZGVsZXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xuXG4gIC8qKlxuICAgKiBERUxFVEXDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYGFueWAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBkZWxldGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBERUxFVEUgw6jCr8K3w6bCscKCXG4gICAqL1xuICBkZWxldGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgICdERUxFVEUnLFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvKipcbiAgICogYGpzb25wYCDDqMKvwrfDpsKxwoJcbiAgICpcbiAgICogQHBhcmFtIHVybCBVUkzDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIHBhcmFtcyDDqMKvwrfDpsKxwoLDpcKPwoLDpsKVwrBcbiAgICogQHBhcmFtIGNhbGxiYWNrUGFyYW0gQ0FMTEJBQ0vDpcKAwrzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppKU09OUF9DQUxMQkFDS1xuICAgKi9cbiAganNvbnAoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zPzogYW55LFxuICAgIGNhbGxiYWNrUGFyYW06IHN0cmluZyA9ICdKU09OUF9DQUxMQkFDSycsXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5qc29ucCh0aGlzLmFwcGxpZWRVcmwodXJsLCBwYXJhbXMpLCBjYWxsYmFja1BhcmFtKS5waXBlKFxuICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgdGhpcy5lbmQoKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcihyZXMgPT4ge1xuICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihyZXMpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gcGF0Y2hcblxuICAvKipcbiAgICogUEFUQ0jDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYHN0cmluZ2Agw6fCscK7w6XCnsKLXG4gICAqL1xuICBwYXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIFBBVENIw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBIdHRwUmVzcG9uc2U8SlNPTj5gIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcGF0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xuXG4gIC8qKlxuICAgKiBQQVRDSMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBwYXRjaDxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcblxuICAvKipcbiAgICogUEFUQ0jDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYGFueWAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBwYXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogUEFUQ0ggw6jCr8K3w6bCscKCXG4gICAqL1xuICBwYXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgICdQQVRDSCcsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBwdXRcblxuICAvKipcbiAgICogUFVUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBzdHJpbmdgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcHV0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICAvKipcbiAgICogUFVUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBIdHRwUmVzcG9uc2U8SlNPTj5gIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcHV0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcblxuICAvKipcbiAgICogUFVUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBKU09OYCDDp8KxwrvDpcKewotcbiAgICovXG4gIHB1dDxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcblxuICAvKipcbiAgICogUFVUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBhbnlgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcHV0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBQVVQgw6jCr8K3w6bCscKCXG4gICAqL1xuICBwdXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICAnUFVUJyxcbiAgICAgIHVybCxcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvKipcbiAgICogYHJlcXVlc3RgIMOowq/Ct8OmwrHCglxuICAgKlxuICAgKiBAcGFyYW0gbWV0aG9kIMOowq/Ct8OmwrHCgsOmwpbCucOmwrPClcOnwrHCu8Olwp7Ci1xuICAgKiBAcGFyYW0gdXJsIFVSTMOlwpzCsMOlwp3CgFxuICAgKiBAcGFyYW0gb3B0aW9ucyDDpcKPwoLDpsKVwrBcbiAgICovXG4gIHJlcXVlc3Q8Uj4oXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGJvZHk/OiBhbnk7XG4gICAgICBoZWFkZXJzPzpcbiAgICAgICAgfCBIdHRwSGVhZGVyc1xuICAgICAgICB8IHtcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgICAgIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcGFyYW1zPzpcbiAgICAgICAgfCBIdHRwUGFyYW1zXG4gICAgICAgIHwge1xuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgICAgICB9O1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxSPjtcbiAgLyoqXG4gICAqIGByZXF1ZXN0YCDDqMKvwrfDpsKxwoJcbiAgICpcbiAgICogQHBhcmFtIG1ldGhvZCDDqMKvwrfDpsKxwoLDpsKWwrnDpsKzwpXDp8KxwrvDpcKewotcbiAgICogQHBhcmFtIHVybCBVUkzDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIG9wdGlvbnMgw6XCj8KCw6bClcKwXG4gICAqL1xuICByZXF1ZXN0KFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBib2R5PzogYW55O1xuICAgICAgaGVhZGVycz86XG4gICAgICAgIHwgSHR0cEhlYWRlcnNcbiAgICAgICAgfCB7XG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgICAgICB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHBhcmFtcz86XG4gICAgICAgIHwgSHR0cFBhcmFtc1xuICAgICAgICB8IHtcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICAgICAgfTtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5iZWdpbigpO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy5wYXJhbXMpIG9wdGlvbnMucGFyYW1zID0gdGhpcy5wYXJzZVBhcmFtcyhvcHRpb25zLnBhcmFtcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgb3B0aW9ucykucGlwZShcbiAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IocmVzID0+IHtcbiAgICAgICAgdGhpcy5lbmQoKTtcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IocmVzKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCBkaXN0YW5jZUluV29yZHNUb05vdyBmcm9tICdkYXRlLWZucy9kaXN0YW5jZV9pbl93b3Jkc190b19ub3cnO1xuXG5AUGlwZSh7IG5hbWU6ICdfZGF0ZScgfSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oXG4gICAgdmFsdWU6IERhdGUgfCBzdHJpbmcgfCBudW1iZXIsXG4gICAgZm9ybWF0U3RyaW5nOiBzdHJpbmcgPSAnWVlZWS1NTS1ERCBISDptbScsXG4gICk6IHN0cmluZyB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoZm9ybWF0U3RyaW5nID09PSAnZm4nKSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZUluV29yZHNUb05vdyh2YWx1ZSwge1xuICAgICAgICAgIGxvY2FsZTogKHdpbmRvdyBhcyBhbnkpLl9fbG9jYWxlX18sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgIWlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSArdmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm9ybWF0KHZhbHVlLCBmb3JtYXRTdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXJyZW5jeVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vKipcbiAqIEBzZWUgaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9zZXJ2aWNlLXBpcGUjJUU4JUI0JUE3JUU1JUI4JTgxLV9jdXJyZW50eVxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLXBpcGUtdHJhbnNmb3JtLWludGVyZmFjZVxuQFBpcGUoeyBuYW1lOiAnX2N1cnJlbmN5JyB9KVxuZXhwb3J0IGNsYXNzIENOQ3VycmVuY3lQaXBlIGV4dGVuZHMgQ3VycmVuY3lQaXBlIHtcbiAgdHJhbnNmb3JtKFxuICAgIHZhbHVlOiBhbnksXG4gICAgY3VycmVuY3lDb2RlOiBzdHJpbmcgPSAnw6/Cv8KlJyxcbiAgICBkaXNwbGF5OiAnY29kZScgfCAnc3ltYm9sJyB8ICdzeW1ib2wtbmFycm93JyB8IGJvb2xlYW4gPSAnY29kZScsXG4gICAgZGlnaXRzPzogc3RyaW5nLFxuICApOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKHZhbHVlLCBjdXJyZW5jeUNvZGUsIDxhbnk+ZGlzcGxheSwgZGlnaXRzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBzZWUgaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9jb21tb24jJUU1JThGJUFGJUU4JUJGJUFEJUU0JUJCJUEzLWtleXNcbiAqL1xuQFBpcGUoeyBuYW1lOiAna2V5cycgfSlcbmV4cG9ydCBjbGFzcyBLZXlzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwga2V5SXNOdW1iZXI6IGJvb2xlYW4gPSBmYWxzZSk6IGFueVtdIHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xuICAgICAgcmV0LnB1c2goeyBrZXk6IGtleUlzTnVtYmVyID8gK2tleSA6IGtleSwgdmFsdWU6IHZhbHVlW2tleV0gfSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3Mvc2VydmljZS1waXBlIyVFNSVCRSVCRCVFNyVBQiVBMC15blxuICovXG5AUGlwZSh7IG5hbWU6ICd5bicgfSlcbmV4cG9ydCBjbGFzcyBZTlBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBib29sZWFuLCB5ZXM6IHN0cmluZywgbm86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utc3VjY2Vzc1wiPicgKyAoeWVzIHx8ICfDpsKYwq8nKSArICc8L3NwYW4+JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLWVycm9yXCI+JyArIChubyB8fCAnw6XCkMKmJykgKyAnPC9zcGFuPic7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2UgfSBmcm9tICcuL2kxOG4nO1xuXG5AUGlwZSh7IG5hbWU6ICdpMThuJyB9KVxuZXhwb3J0IGNsYXNzIEkxOG5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgcHJpdmF0ZSBpMThuOiBBbGFpbkkxOE5TZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybShrZXk6IHN0cmluZywgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QsIGlzU2FmZT86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmkxOG4uZmFueWkoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcywgaXNTYWZlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnLi93aW5fdG9rZW5zJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICcuL2xvY2FsZS9sb2NhbGUubW9kdWxlJztcblxuLy8gI3JlZ2lvbiBpbXBvcnRcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2VGYWtlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pMThuL2kxOG4nO1xuXG5pbXBvcnQgeyBNb2RhbEhlbHBlciB9IGZyb20gJy4vc2VydmljZXMvbW9kYWwvbW9kYWwuaGVscGVyJztcbmltcG9ydCB7IERyYXdlckhlbHBlciB9IGZyb20gJy4vc2VydmljZXMvZHJhd2VyL2RyYXdlci5oZWxwZXInO1xuY29uc3QgSEVMUEVSUyA9IFtNb2RhbEhlbHBlciwgRHJhd2VySGVscGVyXTtcblxuLy8gY29tcG9uZW50c1xuY29uc3QgQ09NUE9ORU5UUyA9IFtdO1xuXG4vLyBwaXBlc1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICcuL3BpcGVzL2RhdGUvZGF0ZS5waXBlJztcbmltcG9ydCB7IENOQ3VycmVuY3lQaXBlIH0gZnJvbSAnLi9waXBlcy9jdXJyZW5jeS9jbi1jdXJyZW5jeS5waXBlJztcbmltcG9ydCB7IEtleXNQaXBlIH0gZnJvbSAnLi9waXBlcy9rZXlzL2tleXMucGlwZSc7XG5pbXBvcnQgeyBZTlBpcGUgfSBmcm9tICcuL3BpcGVzL3luL3luLnBpcGUnO1xuaW1wb3J0IHsgSTE4blBpcGUgfSBmcm9tICcuL3NlcnZpY2VzL2kxOG4vaTE4bi5waXBlJztcbmNvbnN0IFBJUEVTID0gW0RhdGVQaXBlLCBDTkN1cnJlbmN5UGlwZSwgS2V5c1BpcGUsIFlOUGlwZSwgSTE4blBpcGVdO1xuXG4vLyAjZW5kcmVnaW9uXG5cbi8vICNyZWdpb24gYWxsIGRlbG9uIHVzZWQgaWNvbnNcblxuaW1wb3J0IHsgTnpJY29uU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHtcbiAgQmVsbE91dGxpbmUsXG4gIEZpbHRlckZpbGwsXG4gIENhcmV0VXBPdXRsaW5lLFxuICBDYXJldERvd25PdXRsaW5lLFxuICBEZWxldGVPdXRsaW5lLFxuICBQbHVzT3V0bGluZSxcbiAgSW5ib3hPdXRsaW5lLFxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyL2ljb25zJztcbmNvbnN0IElDT05TID0gW1xuICBCZWxsT3V0bGluZSxcbiAgRmlsdGVyRmlsbCxcbiAgQ2FyZXRVcE91dGxpbmUsXG4gIENhcmV0RG93bk91dGxpbmUsXG4gIERlbGV0ZU91dGxpbmUsXG4gIFBsdXNPdXRsaW5lLFxuICBJbmJveE91dGxpbmUsXG5dO1xuXG4vLyAjZW5kcmVnaW9uXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgT3ZlcmxheU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLlBJUEVTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFMsIC4uLlBJUEVTLCBEZWxvbkxvY2FsZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFsYWluVGhlbWVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihpY29uU3J2OiBOekljb25TZXJ2aWNlKSB7XG4gICAgaWNvblNydi5hZGRJY29uKC4uLklDT05TKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQWxhaW5UaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFdJTkRPVywgdXNlVmFsdWU6IHdpbmRvdyB9LFxuICAgICAgICB7IHByb3ZpZGU6IEFMQUlOX0kxOE5fVE9LRU4sIHVzZUNsYXNzOiBBbGFpbkkxOE5TZXJ2aWNlRmFrZSB9LFxuICAgICAgICAuLi5IRUxQRVJTLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQWxhaW5UaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWy4uLkhFTFBFUlNdLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IFZlcnNpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSBuZXcgVmVyc2lvbignMC4wLjAtUExBQ0VIT0xERVInKTtcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fdmFsdWVzIiwidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQWEsTUFBTSxHQUFHLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQzs7Ozs7Ozs7O0FDRmxEOztJQUNFLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7O0lBQzVDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENB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