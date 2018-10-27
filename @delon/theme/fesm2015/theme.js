import { InjectionToken, Injectable, Pipe, Inject, NgModule, Version, Optional, Injector, SkipSelf, defineInjectable, inject, INJECTOR } from '@angular/core';
import { BehaviorSubject, Subject, Observable, throwError } from 'rxjs';
import { filter, share, tap, catchError } from 'rxjs/operators';
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
const WINDOW = new InjectionToken('Window');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function preloaderFinished() {
    /** @type {?} */
    const body = document.querySelector('body');
    /** @type {?} */
    const preloader = document.querySelector('.preloader');
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
    (/** @type {?} */ (window)).appBootstrap = () => {
        setTimeout(() => {
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
const ALAIN_I18N_TOKEN = new InjectionToken('alainTranslatorToken');
class AlainI18NServiceFake {
    constructor() {
        this.change$ = new BehaviorSubject(null);
    }
    /**
     * @return {?}
     */
    get change() {
        return this.change$.asObservable().pipe(filter(w => w != null));
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    use(lang) {
        this.change$.next(lang);
    }
    /**
     * @return {?}
     */
    getLangs() {
        return [];
    }
    /**
     * @param {?} key
     * @return {?}
     */
    fanyi(key) {
        return key;
    }
}
AlainI18NServiceFake.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ AlainI18NServiceFake.ngInjectableDef = defineInjectable({ factory: function AlainI18NServiceFake_Factory() { return new AlainI18NServiceFake(); }, token: AlainI18NServiceFake, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MenuService {
    /**
     * @param {?} i18nSrv
     * @param {?} aclService
     */
    constructor(i18nSrv, aclService) {
        this.i18nSrv = i18nSrv;
        this.aclService = aclService;
        this._change$ = new BehaviorSubject([]);
        this.data = [];
        if (this.i18nSrv)
            this.i18n$ = this.i18nSrv.change.subscribe(() => this.resume());
    }
    /**
     * @return {?}
     */
    get change() {
        return this._change$.pipe(share());
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    visit(callback) {
        /** @type {?} */
        const inFn = (list, parentMenu, depth) => {
            for (const item of list) {
                callback(item, parentMenu, depth);
                if (item.children && item.children.length > 0) {
                    inFn(item.children, item, depth + 1);
                }
                else {
                    item.children = [];
                }
            }
        };
        inFn(this.data, null, 0);
    }
    /**
     * @param {?} items
     * @return {?}
     */
    add(items) {
        this.data = items;
        this.resume();
    }
    /**
     * 重置菜单，可能I18N、用户权限变动时需要调用刷新
     * @param {?=} callback
     * @return {?}
     */
    resume(callback) {
        /** @type {?} */
        let i = 1;
        /** @type {?} */
        const shortcuts = [];
        this.visit((item, parent, depth) => {
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
                let type = 'class';
                /** @type {?} */
                let value = item.icon;
                // compatible `anticon anticon-user`
                if (~item.icon.indexOf(`anticon-`)) {
                    type = 'icon';
                    value = value.split('-').slice(1).join('-');
                }
                else if (/^https?:\/\//.test(item.icon)) {
                    type = 'img';
                }
                item.icon = /** @type {?} */ ({ type, value });
            }
            // shortcut
            if (parent && item.shortcut === true && parent.shortcutRoot !== true)
                shortcuts.push(item);
            item.text =
                item.i18n && this.i18nSrv ? this.i18nSrv.fanyi(item.i18n) : item.text;
            // group
            item.group = typeof item.group !== 'boolean' ? true : item.group;
            // hidden
            item["_hidden"] = typeof item.hide === 'undefined' ? false : item.hide;
            // acl
            if (item.acl && this.aclService) {
                item["_hidden"] = !this.aclService.can(item.acl);
            }
            if (callback)
                callback(item, parent, depth);
        });
        this.loadShortcut(shortcuts);
        this._change$.next(this.data);
    }
    /**
     * 加载快捷菜单，加载位置规则如下：
     * 1、统一在下标0的节点下（即【主导航】节点下方）
     *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
     *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
     *      3、否则放在0节点位置
     * @param {?} shortcuts
     * @return {?}
     */
    loadShortcut(shortcuts) {
        if (shortcuts.length === 0 || this.data.length === 0) {
            return;
        }
        /** @type {?} */
        const ls = this.data[0].children;
        /** @type {?} */
        let pos = ls.findIndex(w => w.shortcutRoot === true);
        if (pos === -1) {
            pos = ls.findIndex(w => w.link.includes('dashboard'));
            pos = (pos !== -1 ? pos : -1) + 1;
            /** @type {?} */
            const shortcutMenu = /** @type {?} */ ({
                text: '快捷菜单',
                i18n: 'shortcut',
                icon: 'icon-rocket',
                children: [],
            });
            this.data[0].children.splice(pos, 0, shortcutMenu);
        }
        /** @type {?} */
        let _data = this.data[0].children[pos];
        if (_data.i18n && this.i18nSrv)
            _data.text = this.i18nSrv.fanyi(_data.i18n);
        _data = Object.assign(_data, {
            shortcutRoot: true,
            _type: 3,
            __id: -1,
            _depth: 1,
        });
        _data.children = shortcuts.map(i => {
            i["_depth"] = 2;
            return i;
        });
    }
    /**
     * @return {?}
     */
    get menus() {
        return this.data;
    }
    /**
     * 清空菜单
     * @return {?}
     */
    clear() {
        this.data = [];
        this._change$.next(this.data);
    }
    /**
     * 根据URL设置菜单 `_open` 属性
     * @param {?} url URL地址
     * @return {?}
     */
    openedByUrl(url) {
        if (!url)
            return;
        /** @type {?} */
        let findItem = null;
        this.visit(item => {
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
    }
    /**
     * 根据url获取菜单列表
     * @param {?} url
     * @return {?}
     */
    getPathByUrl(url) {
        /** @type {?} */
        let item = null;
        this.visit((i, parent, depth) => {
            if (i.link === url) {
                item = i;
            }
        });
        /** @type {?} */
        const ret = [];
        if (!item)
            return ret;
        do {
            ret.splice(0, 0, item);
            item = item["__parent"];
        } while (item);
        return ret;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._change$.unsubscribe();
        if (this.i18n$)
            this.i18n$.unsubscribe();
    }
}
MenuService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
MenuService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: ACLService, decorators: [{ type: Optional }] }
];
/** @nocollapse */ MenuService.ngInjectableDef = defineInjectable({ factory: function MenuService_Factory() { return new MenuService(inject(ALAIN_I18N_TOKEN, 8), inject(ACLService, 8)); }, token: MenuService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ScrollService {
    /**
     * @param {?} win
     * @param {?} doc
     */
    constructor(win, doc) {
        this.win = win;
        this.doc = doc;
    }
    /**
     * 设置滚动条至指定元素
     * @param {?=} element 指定元素，默认 `document.body`
     * @param {?=} topOffset 偏移值，默认 `0`
     * @return {?}
     */
    scrollToElement(element, topOffset = 0) {
        if (!element)
            element = this.doc.body;
        element.scrollIntoView();
        /** @type {?} */
        const w = this.win;
        if (w && w.scrollBy) {
            w.scrollBy(0, element.getBoundingClientRect().top - topOffset);
            if (w.pageYOffset < 20) {
                w.scrollBy(0, -w.pageYOffset);
            }
        }
    }
    /**
     * 滚动至顶部
     * @param {?=} topOffset 偏移值，默认 `0`
     * @return {?}
     */
    scrollToTop(topOffset = 0) {
        this.scrollToElement(this.doc.body, topOffset);
    }
}
ScrollService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ScrollService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [WINDOW,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ ScrollService.ngInjectableDef = defineInjectable({ factory: function ScrollService_Factory() { return new ScrollService(inject(WINDOW), inject(DOCUMENT)); }, token: ScrollService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const LAYOUT_KEY = 'layout';
/** @type {?} */
const USER_KEY = 'user';
/** @type {?} */
const APP_KEY = 'app';
class SettingsService {
    constructor() {
        this.notify$ = new Subject();
        this._app = null;
        this._user = null;
        this._layout = null;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    /**
     * @return {?}
     */
    get layout() {
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
    }
    /**
     * @return {?}
     */
    get app() {
        if (!this._app) {
            this._app = Object.assign(/** @type {?} */ ({
                year: new Date().getFullYear(),
            }), this.get(APP_KEY));
            this.set(APP_KEY, this._app);
        }
        return this._app;
    }
    /**
     * @return {?}
     */
    get user() {
        if (!this._user) {
            this._user = Object.assign(/** @type {?} */ ({}), this.get(USER_KEY));
            this.set(USER_KEY, this._user);
        }
        return this._user;
    }
    /**
     * @return {?}
     */
    get notify() {
        return this.notify$.asObservable();
    }
    /**
     * @param {?} name
     * @param {?=} value
     * @return {?}
     */
    setLayout(name, value) {
        if (typeof name === 'string') {
            this.layout[name] = value;
        }
        else {
            this._layout = name;
        }
        this.set(LAYOUT_KEY, this._layout);
        this.notify$.next(/** @type {?} */ ({ type: 'layout', name, value }));
        return true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setApp(value) {
        this._app = value;
        this.set(APP_KEY, value);
        this.notify$.next({ type: 'app', value });
        return true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setUser(value) {
        this._user = value;
        this.set(USER_KEY, value);
        this.notify$.next({ type: 'user', value });
        return true;
    }
}
SettingsService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ SettingsService.ngInjectableDef = defineInjectable({ factory: function SettingsService_Factory() { return new SettingsService(); }, token: SettingsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AlainThemeConfig {
}
AlainThemeConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ AlainThemeConfig.ngInjectableDef = defineInjectable({ factory: function AlainThemeConfig_Factory() { return new AlainThemeConfig(); }, token: AlainThemeConfig, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const REP_MAX = 6;
class ResponsiveService {
    /**
     * @param {?} cog
     */
    constructor(cog) {
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
            .map(i => +i)
            .some((i) => i < 1 || i > REP_MAX)) {
            throw new Error(`[theme] the responseive rule index value range must be 1-${REP_MAX}`);
        }
    }
    /**
     * @param {?} count
     * @return {?}
     */
    genCls(count) {
        /** @type {?} */
        const rule = this.cog.rules[count > REP_MAX ? REP_MAX : Math.max(count, 1)];
        /** @type {?} */
        const antColClass = 'ant-col';
        /** @type {?} */
        const clsMap = [`${antColClass}-xs-${rule.xs}`];
        if (rule.sm)
            clsMap.push(`${antColClass}-sm-${rule.sm}`);
        if (rule.md)
            clsMap.push(`${antColClass}-md-${rule.md}`);
        if (rule.lg)
            clsMap.push(`${antColClass}-lg-${rule.lg}`);
        if (rule.xl)
            clsMap.push(`${antColClass}-xl-${rule.xl}`);
        if (rule.xxl)
            clsMap.push(`${antColClass}-xxl-${rule.xxl}`);
        return clsMap;
    }
}
ResponsiveService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ResponsiveService.ctorParameters = () => [
    { type: AlainThemeConfig }
];
/** @nocollapse */ ResponsiveService.ngInjectableDef = defineInjectable({ factory: function ResponsiveService_Factory() { return new ResponsiveService(inject(AlainThemeConfig)); }, token: ResponsiveService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 设置标题
 * @see https://ng-alain.com/docs/service#TitleService
 */
class TitleService {
    /**
     * @param {?} injector
     * @param {?} title
     * @param {?} menuSrv
     * @param {?} i18nSrv
     * @param {?} doc
     */
    constructor(injector, title, menuSrv, i18nSrv, doc) {
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
            this.i18n$ = this.i18nSrv.change.subscribe(() => this.setTitle());
    }
    /**
     * 设置分隔符
     * @param {?} value
     * @return {?}
     */
    set separator(value) {
        this._separator = value;
    }
    /**
     * 设置前缀
     * @param {?} value
     * @return {?}
     */
    set prefix(value) {
        this._prefix = value;
    }
    /**
     * 设置后缀
     * @param {?} value
     * @return {?}
     */
    set suffix(value) {
        this._suffix = value;
    }
    /**
     * 设置是否反转
     * @param {?} value
     * @return {?}
     */
    set reverse(value) {
        this._reverse = value;
    }
    /**
     * 设置默认标题名
     * @param {?} value
     * @return {?}
     */
    set default(value) {
        this._default = value;
    }
    /**
     * @return {?}
     */
    getByElement() {
        /** @type {?} */
        const el = this.doc.querySelector('.alain-default__content-title h1') ||
            this.doc.querySelector('.page-header__title');
        if (el) {
            return el.firstChild.textContent.trim();
        }
        return '';
    }
    /**
     * @return {?}
     */
    getByRoute() {
        /** @type {?} */
        let next = this.injector.get(ActivatedRoute);
        while (next.firstChild)
            next = next.firstChild;
        /** @type {?} */
        const data = (next.snapshot && next.snapshot.data) || {};
        if (data["titleI18n"] && this.i18nSrv)
            data["title"] = this.i18nSrv.fanyi(data["titleI18n"]);
        return data["title"];
    }
    /**
     * @return {?}
     */
    getByMenu() {
        /** @type {?} */
        const menus = this.menuSrv.getPathByUrl(this.injector.get(Router).url);
        if (!menus || menus.length <= 0)
            return '';
        /** @type {?} */
        const item = menus[menus.length - 1];
        /** @type {?} */
        let title;
        if (item.i18n && this.i18nSrv)
            title = this.i18nSrv.fanyi(item.i18n);
        return title || item.text;
    }
    /**
     * 设置标题
     * @param {?=} title
     * @return {?}
     */
    setTitle(title) {
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
        let newTitles = [];
        if (this._prefix) {
            newTitles.push(this._prefix);
        }
        newTitles.push(...(/** @type {?} */ (title)));
        if (this._suffix) {
            newTitles.push(this._suffix);
        }
        if (this._reverse) {
            newTitles = newTitles.reverse();
        }
        this.title.setTitle(newTitles.join(this._separator));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.i18n$)
            this.i18n$.unsubscribe();
    }
}
TitleService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
TitleService.ctorParameters = () => [
    { type: Injector },
    { type: Title },
    { type: MenuService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ TitleService.ngInjectableDef = defineInjectable({ factory: function TitleService_Factory() { return new TitleService(inject(INJECTOR), inject(Title), inject(MenuService), inject(ALAIN_I18N_TOKEN, 8), inject(DOCUMENT)); }, token: TitleService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const DELON_LOCALE = new InjectionToken('delon-locale');

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
class DelonLocaleService {
    /**
     * @param {?} locale
     */
    constructor(locale) {
        this.change$ = new BehaviorSubject(this._locale);
        this.setLocale(locale || zhCN);
    }
    /**
     * @return {?}
     */
    get change() {
        return this.change$.asObservable();
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    setLocale(locale) {
        if (this._locale && this._locale.abbr === locale.abbr) {
            return;
        }
        this._locale = locale;
        this.change$.next(locale);
    }
    /**
     * @return {?}
     */
    get locale() {
        return this._locale;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    getData(path) {
        return this._locale[path] || {};
    }
}
DelonLocaleService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DelonLocaleService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DELON_LOCALE,] }] }
];
/**
 * @param {?} exist
 * @param {?} locale
 * @return {?}
 */
function DELON_LOCALE_SERVICE_PROVIDER_FACTORY(exist, locale) {
    return exist || new DelonLocaleService(locale);
}
/** @type {?} */
const DELON_LOCALE_SERVICE_PROVIDER = {
    provide: DelonLocaleService,
    useFactory: DELON_LOCALE_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), DelonLocaleService], DELON_LOCALE]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
const ɵ0 = zhCN;
class DelonLocaleModule {
}
DelonLocaleModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    { provide: DELON_LOCALE, useValue: ɵ0 },
                    DELON_LOCALE_SERVICE_PROVIDER,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var enUS = {
    abbr: 'en-US',
    exception: {
        403: `Sorry, you don't have access to this page`,
        404: `Sorry, that page don't exist`,
        500: `Sorry, server error`,
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
class ModalHelper {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
        this.zIndex = 500;
    }
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
    create(comp, params, options) {
        options = Object.assign({
            size: 'lg',
            exact: true,
            includeTabs: false,
        }, options);
        return new Observable((observer) => {
            /** @type {?} */
            let cls = '';
            /** @type {?} */
            let width = '';
            if (options.size) {
                if (typeof options.size === 'number') {
                    width = `${options.size}px`;
                }
                else {
                    cls = `modal-${options.size}`;
                }
            }
            if (options.includeTabs) {
                cls += ' modal-include-tabs';
            }
            /** @type {?} */
            const defaultOptions = {
                nzWrapClassName: cls,
                nzContent: comp,
                nzWidth: width ? width : undefined,
                nzFooter: null,
                nzComponentParams: params,
                nzZIndex: ++this.zIndex,
            };
            /** @type {?} */
            const subject = this.srv.create(Object.assign(defaultOptions, options.modalOptions));
            /** @type {?} */
            const afterClose$ = subject.afterClose.subscribe((res) => {
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
    }
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
    createStatic(comp, params, options) {
        /** @type {?} */
        const modalOptions = Object.assign({ nzMaskClosable: false }, options && options.modalOptions);
        return this.create(comp, params, Object.assign({}, options, { modalOptions }));
    }
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
    open(comp, params, size = 'lg', options) {
        return this.create(comp, params, {
            size,
            modalOptions: options,
            exact: false,
        });
    }
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
    static(comp, params, size = 'lg', options) {
        return this.open(comp, params, size, Object.assign({
            nzMaskClosable: false,
        }, options));
    }
}
ModalHelper.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ModalHelper.ctorParameters = () => [
    { type: NzModalService }
];
/** @nocollapse */ ModalHelper.ngInjectableDef = defineInjectable({ factory: function ModalHelper_Factory() { return new ModalHelper(inject(NzModalService)); }, token: ModalHelper, providedIn: "root" });

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
class DrawerHelper {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
        this.zIndex = 400;
    }
    /**
     * 构建一个抽屉
     * @param {?} title
     * @param {?} comp
     * @param {?=} params
     * @param {?=} options
     * @return {?}
     */
    create(title, comp, params, options) {
        options = Object.assign(/** @type {?} */ ({
            size: 'md',
            footer: true,
            footerHeight: 55,
            drawerOptions: {
                nzPlacement: 'right',
                nzWrapClassName: ''
            }
        }), options);
        return new Observable((observer) => {
            const { size, footer, footerHeight, drawerOptions } = options;
            /** @type {?} */
            const defaultOptions = {
                nzContent: comp,
                nzContentParams: params,
                nzZIndex: ++this.zIndex,
                nzTitle: title
            };
            if (footer) {
                defaultOptions.nzBodyStyle = {
                    height: `calc(100% - ${footerHeight}px)`,
                    overflow: 'auto',
                    'padding-bottom': `${footerHeight - 2}px`
                };
            }
            if (typeof size === 'number') {
                defaultOptions[drawerOptions.nzPlacement === 'top' || drawerOptions.nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'] = options.size;
            }
            else {
                defaultOptions.nzWrapClassName = (drawerOptions.nzWrapClassName + ` drawer-${options.size}`).trim();
                delete drawerOptions.nzWrapClassName;
            }
            /** @type {?} */
            const subject = this.srv.create(Object.assign(defaultOptions, drawerOptions));
            /** @type {?} */
            const afterClose$ = subject.afterClose.subscribe((res) => {
                if (res != null && res !== false) {
                    observer.next(res);
                }
                observer.complete();
                afterClose$.unsubscribe();
            });
        });
    }
    /**
     * 构建一个抽屉，点击蒙层不允许关闭
     * @param {?} title
     * @param {?} comp
     * @param {?=} params
     * @param {?=} options
     * @return {?}
     */
    static(title, comp, params, options) {
        /** @type {?} */
        const drawerOptions = Object.assign({ nzMaskClosable: false }, options && options.drawerOptions);
        return this.create(title, comp, params, Object.assign({}, options, { drawerOptions }));
    }
}
DrawerHelper.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
DrawerHelper.ctorParameters = () => [
    { type: NzDrawerService }
];
/** @nocollapse */ DrawerHelper.ngInjectableDef = defineInjectable({ factory: function DrawerHelper_Factory() { return new DrawerHelper(inject(NzDrawerService)); }, token: DrawerHelper, providedIn: "root" });

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
// tslint:disable-next-line:class-name
class _HttpClient {
    /**
     * @param {?} http
     * @param {?} cog
     */
    constructor(http, cog) {
        this.http = http;
        this._loading = false;
        this.cog = Object.assign(/** @type {?} */ ({
            nullValueHandling: 'include',
            dateValueHandling: 'timestamp',
        }), /** @type {?} */ ((cog)).http);
    }
    /**
     * 是否正在加载中
     * @return {?}
     */
    get loading() {
        return this._loading;
    }
    /**
     * @param {?} params
     * @return {?}
     */
    parseParams(params) {
        /** @type {?} */
        const newParams = {};
        Object.keys(params).forEach(key => {
            /** @type {?} */
            let _data = params[key];
            // 忽略空值
            if (this.cog.nullValueHandling === 'ignore' && _data == null)
                return;
            // 将时间转化为：时间戳 (秒)
            if (this.cog.dateValueHandling === 'timestamp' && _data instanceof Date) {
                _data = _data.valueOf();
            }
            newParams[key] = _data;
        });
        return new HttpParams({ fromObject: newParams });
    }
    /**
     * @param {?} url
     * @param {?=} params
     * @return {?}
     */
    appliedUrl(url, params) {
        if (!params)
            return url;
        url += ~url.indexOf('?') ? '' : '?';
        /** @type {?} */
        const arr = [];
        // tslint:disable-next-line:forin
        for (const key in params) {
            arr.push(`${key}=${params[key]}`);
        }
        return url + arr.join('&');
    }
    /**
     * @return {?}
     */
    begin() {
        // console.time('http');
        setTimeout(() => (this._loading = true));
    }
    /**
     * @return {?}
     */
    end() {
        // console.timeEnd('http');
        setTimeout(() => (this._loading = false));
    }
    /**
     * GET 请求
     * @param {?} url
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    get(url, params, options) {
        return this.request('GET', url, Object.assign({
            params,
        }, options));
    }
    /**
     * POST 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    post(url, body, params, options) {
        return this.request('POST', url, Object.assign({
            body,
            params,
        }, options));
    }
    /**
     * DELETE 请求
     * @param {?} url
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    delete(url, params, options) {
        return this.request('DELETE', url, Object.assign({
            params,
        }, options));
    }
    /**
     * `jsonp` 请求
     *
     * @param {?} url URL地址
     * @param {?=} params 请求参数
     * @param {?=} callbackParam CALLBACK值，默认：JSONP_CALLBACK
     * @return {?}
     */
    jsonp(url, params, callbackParam = 'JSONP_CALLBACK') {
        return this.http.jsonp(this.appliedUrl(url, params), callbackParam).pipe(tap(() => {
            this.end();
        }), catchError(res => {
            this.end();
            return throwError(res);
        }));
    }
    /**
     * PATCH 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    patch(url, body, params, options) {
        return this.request('PATCH', url, Object.assign({
            body,
            params,
        }, options));
    }
    /**
     * PUT 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?} options
     * @return {?}
     */
    put(url, body, params, options) {
        return this.request('PUT', url, Object.assign({
            body,
            params,
        }, options));
    }
    /**
     * `request` 请求
     *
     * @param {?} method 请求方法类型
     * @param {?} url URL地址
     * @param {?=} options 参数
     * @return {?}
     */
    request(method, url, options) {
        this.begin();
        if (options) {
            if (options.params)
                options.params = this.parseParams(options.params);
        }
        return this.http.request(method, url, options).pipe(tap(() => {
            this.end();
        }), catchError(res => {
            this.end();
            return throwError(res);
        }));
    }
}
_HttpClient.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
_HttpClient.ctorParameters = () => [
    { type: HttpClient },
    { type: AlainThemeConfig }
];
/** @nocollapse */ _HttpClient.ngInjectableDef = defineInjectable({ factory: function _HttpClient_Factory() { return new _HttpClient(inject(HttpClient), inject(AlainThemeConfig)); }, token: _HttpClient, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DatePipe {
    /**
     * @param {?} value
     * @param {?=} formatString
     * @return {?}
     */
    transform(value, formatString = 'YYYY-MM-DD HH:mm') {
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
    }
}
DatePipe.decorators = [
    { type: Pipe, args: [{ name: '_date' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @see https://ng-alain.com/docs/service-pipe#%E8%B4%A7%E5%B8%81-_currenty
 */
class CNCurrencyPipe extends CurrencyPipe {
    /**
     * @param {?} value
     * @param {?=} currencyCode
     * @param {?=} display
     * @param {?=} digits
     * @return {?}
     */
    transform(value, currencyCode = '￥', display = 'code', digits) {
        return super.transform(value, currencyCode, /** @type {?} */ (display), digits);
    }
}
CNCurrencyPipe.decorators = [
    { type: Pipe, args: [{ name: '_currency' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @see https://ng-alain.com/docs/common#%E5%8F%AF%E8%BF%AD%E4%BB%A3-keys
 */
class KeysPipe {
    /**
     * @param {?} value
     * @param {?=} keyIsNumber
     * @return {?}
     */
    transform(value, keyIsNumber = false) {
        /** @type {?} */
        const ret = [];
        // tslint:disable-next-line:forin
        for (const key in value) {
            ret.push({ key: keyIsNumber ? +key : key, value: value[key] });
        }
        return ret;
    }
}
KeysPipe.decorators = [
    { type: Pipe, args: [{ name: 'keys' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @see https://ng-alain.com/docs/service-pipe#%E5%BE%BD%E7%AB%A0-yn
 */
class YNPipe {
    /**
     * @param {?} value
     * @param {?} yes
     * @param {?} no
     * @return {?}
     */
    transform(value, yes, no) {
        if (value) {
            return '<span class="badge badge-success">' + (yes || '是') + '</span>';
        }
        else {
            return '<span class="badge badge-error">' + (no || '否') + '</span>';
        }
    }
}
YNPipe.decorators = [
    { type: Pipe, args: [{ name: 'yn' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class I18nPipe {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
    }
    /**
     * @param {?} key
     * @param {?=} interpolateParams
     * @param {?=} isSafe
     * @return {?}
     */
    transform(key, interpolateParams, isSafe) {
        return this.i18n.fanyi(key, interpolateParams, isSafe);
    }
}
I18nPipe.decorators = [
    { type: Pipe, args: [{ name: 'i18n' },] }
];
/** @nocollapse */
I18nPipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ALAIN_I18N_TOKEN,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const HELPERS = [ModalHelper, DrawerHelper];
/** @type {?} */
const COMPONENTS = [];
/** @type {?} */
const PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, I18nPipe];
/** @type {?} */
const ICONS = [
    BellOutline,
    FilterFill,
    CaretUpOutline,
    CaretDownOutline,
    DeleteOutline,
    PlusOutline,
    InboxOutline,
];
class AlainThemeModule {
    /**
     * @param {?} iconSrv
     */
    constructor(iconSrv) {
        iconSrv.addIcon(...ICONS);
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: AlainThemeModule,
            providers: [
                { provide: WINDOW, useValue: window },
                { provide: ALAIN_I18N_TOKEN, useClass: AlainI18NServiceFake },
                ...HELPERS,
            ],
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: AlainThemeModule,
            providers: [...HELPERS],
        };
    }
}
AlainThemeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule, OverlayModule],
                declarations: [...COMPONENTS, ...PIPES],
                exports: [...COMPONENTS, ...PIPES, DelonLocaleModule],
            },] }
];
/** @nocollapse */
AlainThemeModule.ctorParameters = () => [
    { type: NzIconService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const VERSION = new Version('2.0.0-rc.1-c33cee3');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { WINDOW, preloaderFinished, TitleService, ALAIN_I18N_TOKEN, AlainI18NServiceFake, _HttpClient, DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, AlainThemeConfig, AlainThemeModule, VERSION, MenuService, ScrollService, SettingsService, REP_MAX, ResponsiveService, enUS as en_US, zhCN as zh_CN, zhTW as zh_TW, DELON_LOCALE, DELON_LOCALE_SERVICE_PROVIDER_FACTORY, DelonLocaleService, DELON_LOCALE_SERVICE_PROVIDER, DelonLocaleModule, ModalHelper, DrawerHelper, I18nPipe as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi90aGVtZS9zcmMvd2luX3Rva2Vucy50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9wcmVsb2FkZXIvcHJlbG9hZGVyLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL2kxOG4vaTE4bi50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9tZW51L21lbnUuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9zY3JvbGwvc2Nyb2xsLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy90aGVtZS5jb25maWcudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvcmVzcG9uc2l2ZS9yZXNwb25zaXZlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL3RpdGxlL3RpdGxlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xvY2FsZS50b2tlbnMudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xhbmd1YWdlcy96aC1DTi50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9sb2NhbGUvbG9jYWxlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xvY2FsZS5tb2R1bGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xhbmd1YWdlcy9lbi1VUy50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9sb2NhbGUvbGFuZ3VhZ2VzL3poLVRXLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlci50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlci50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9odHRwL2h0dHAuY2xpZW50LnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3BpcGVzL2N1cnJlbmN5L2NuLWN1cnJlbmN5LnBpcGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvcGlwZXMva2V5cy9rZXlzLnBpcGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvcGlwZXMveW4veW4ucGlwZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9pMThuL2kxOG4ucGlwZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy90aGVtZS5tb2R1bGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvdmVyc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgV0lORE9XID0gbmV3IEluamVjdGlvblRva2VuKCdXaW5kb3cnKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkZXJGaW5pc2hlZCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcicpO1xuXG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgLy8gcHJlbG9hZGVyIHZhbHVlIG51bGwgd2hlbiBydW5uaW5nIC0taG1yXG4gICAgaWYgKCFwcmVsb2FkZXIpIHJldHVybjtcbiAgICBwcmVsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgcHJlbG9hZGVyLmNsYXNzTmFtZSA9ICdwcmVsb2FkZXItaGlkZGVuJztcbiAgICB9KTtcblxuICAgIHByZWxvYWRlci5jbGFzc05hbWUgKz0gJyBwcmVsb2FkZXItaGlkZGVuLWFkZCBwcmVsb2FkZXItaGlkZGVuLWFkZC1hY3RpdmUnO1xuICB9XG5cbiAgKDxhbnk+d2luZG93KS5hcHBCb290c3RyYXAgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZW1vdmUoKTtcbiAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluSTE4TlNlcnZpY2Uge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgLyoqXG4gICAqIMOlwo/CmMOmwpvCtMOowq/CrcOowqjCgFxuICAgKiBAcGFyYW0gbGFuZyDDqMKvwq3DqMKowoDDpMK7wqPDp8KgwoFcbiAgICogQHBhcmFtIGVtaXQgw6bCmMKvw6XCkMKmw6jCp8Kmw6XCj8KRIGBjaGFuZ2Vgw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKadHJ1ZVxuICAgKi9cbiAgdXNlKGxhbmc6IHN0cmluZywgZW1pdD86IGJvb2xlYW4pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiDDqMK/wpTDpcKbwp7DpcK9wpPDpcKJwo3DqMKvwq3DqMKowoDDpcKIwpfDqMKhwqhcbiAgICovXG4gIGdldExhbmdzKCk6IGFueVtdO1xuXG4gIC8qKlxuICAgKiDDp8K/wrvDqMKvwpFcbiAgICogLSBgaW50ZXJwb2xhdGVQYXJhbXNgIMOmwqjCocOmwp3Cv8OmwonCgMOpwpzCgMOowqbCgcOnwprChMOlwo/CgsOmwpXCsMOlwq/CucOowrHCoVxuICAgKiAtIGBpc1NhZmVgIMOmwpjCr8OlwpDCpsOowr/ClMOlwpvCnsOlwq7CicOlwoXCqMOlwq3Cl8OnwqzCpsOvwrzCjMOowofCqsOlworCqMOowrDCg8OnwpTCqCBgYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWxgXG4gICAqL1xuICBmYW55aShrZXk6IHN0cmluZywgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QsIGlzU2FmZT86IGJvb2xlYW4pOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIMOowrDCg8OnwpTCqCBgdXNlYCDDqMKnwqbDpcKPwpHDpcKPwpjDpsKbwrTDqcKAwprDp8KfwqVcbiAgICovXG4gIHJlYWRvbmx5IGNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xufVxuXG5leHBvcnQgY29uc3QgQUxBSU5fSTE4Tl9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBbGFpbkkxOE5TZXJ2aWNlPihcbiAgJ2FsYWluVHJhbnNsYXRvclRva2VuJyxcbik7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQWxhaW5JMThOU2VydmljZUZha2UgaW1wbGVtZW50cyBBbGFpbkkxOE5TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlsdGVyKHcgPT4gdyAhPSBudWxsKSk7XG4gIH1cblxuICB1c2UobGFuZzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQobGFuZyk7XG4gIH1cblxuICBnZXRMYW5ncygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZmFueWkoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4ga2V5O1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuXG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9pMThuJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTWVudVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9jaGFuZ2UkOiBCZWhhdmlvclN1YmplY3Q8TWVudVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TWVudVtdPihbXSk7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGRhdGE6IE1lbnVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbFNlcnZpY2U6IEFDTFNlcnZpY2UsXG4gICkge1xuICAgIGlmICh0aGlzLmkxOG5TcnYpXG4gICAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuU3J2LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXN1bWUoKSk7XG4gIH1cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TWVudVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZSQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIHZpc2l0KGNhbGxiYWNrOiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKSB7XG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBNZW51W10sIHBhcmVudE1lbnU6IE1lbnUsIGRlcHRoOiBudW1iZXIpID0+IHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICAgIGNhbGxiYWNrKGl0ZW0sIHBhcmVudE1lbnUsIGRlcHRoKTtcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5GbihpdGVtLmNoaWxkcmVuLCBpdGVtLCBkZXB0aCArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpbkZuKHRoaXMuZGF0YSwgbnVsbCwgMCk7XG4gIH1cblxuICBhZGQoaXRlbXM6IE1lbnVbXSkge1xuICAgIHRoaXMuZGF0YSA9IGl0ZW1zO1xuICAgIHRoaXMucmVzdW1lKCk7XG4gIH1cblxuICAvKipcbiAgICogw6nCh8KNw6fCvcKuw6jCj8Kcw6XCjcKVw6/CvMKMw6XCj8Kvw6jCg8K9STE4TsOjwoDCgcOnwpTCqMOmwojCt8Omwp3Cg8OpwpnCkMOlwo/CmMOlworCqMOmwpfCtsOpwpzCgMOowqbCgcOowrDCg8OnwpTCqMOlwojCt8OmwpbCsFxuICAgKi9cbiAgcmVzdW1lKGNhbGxiYWNrPzogKGl0ZW06IE1lbnUsIHBhcmVudE1lbnVtOiBNZW51LCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCkge1xuICAgIGxldCBpID0gMTtcbiAgICBjb25zdCBzaG9ydGN1dHM6IE1lbnVbXSA9IFtdO1xuICAgIHRoaXMudmlzaXQoKGl0ZW0sIHBhcmVudCwgZGVwdGgpID0+IHtcbiAgICAgIGl0ZW0uX19pZCA9IGkrKztcbiAgICAgIGl0ZW0uX19wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICBpdGVtLl9kZXB0aCA9IGRlcHRoO1xuXG4gICAgICBpZiAoIWl0ZW0ubGluaykgaXRlbS5saW5rID0gJyc7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0ubGlua0V4YWN0ID09PSAndW5kZWZpbmVkJykgaXRlbS5saW5rRXhhY3QgPSBmYWxzZTtcbiAgICAgIGlmICghaXRlbS5leHRlcm5hbExpbmspIGl0ZW0uZXh0ZXJuYWxMaW5rID0gJyc7XG5cbiAgICAgIC8vIGJhZGdlXG4gICAgICBpZiAoaXRlbS5iYWRnZSkge1xuICAgICAgICBpZiAoaXRlbS5iYWRnZURvdCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGl0ZW0uYmFkZ2VEb3QgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWl0ZW0uYmFkZ2VTdGF0dXMpIHtcbiAgICAgICAgICBpdGVtLmJhZGdlU3RhdHVzID0gJ2Vycm9yJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpdGVtLl90eXBlID0gaXRlbS5leHRlcm5hbExpbmsgPyAyIDogMTtcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBpdGVtLl90eXBlID0gMztcbiAgICAgIH1cblxuICAgICAgLy8gaWNvblxuICAgICAgaWYgKHR5cGVvZiBpdGVtLmljb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCB0eXBlID0gJ2NsYXNzJztcbiAgICAgICAgbGV0IHZhbHVlID0gaXRlbS5pY29uO1xuICAgICAgICAvLyBjb21wYXRpYmxlIGBhbnRpY29uIGFudGljb24tdXNlcmBcbiAgICAgICAgaWYgKH5pdGVtLmljb24uaW5kZXhPZihgYW50aWNvbi1gKSkge1xuICAgICAgICAgIHR5cGUgPSAnaWNvbic7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLScpLnNsaWNlKDEpLmpvaW4oJy0nKTtcbiAgICAgICAgfSBlbHNlIGlmICgvXmh0dHBzPzpcXC9cXC8vLnRlc3QoaXRlbS5pY29uKSkge1xuICAgICAgICAgIHR5cGUgPSAnaW1nJztcbiAgICAgICAgfVxuICAgICAgICBpdGVtLmljb24gPSB7IHR5cGUsIHZhbHVlIH0gYXMgYW55O1xuICAgICAgfVxuXG4gICAgICAvLyBzaG9ydGN1dFxuICAgICAgaWYgKHBhcmVudCAmJiBpdGVtLnNob3J0Y3V0ID09PSB0cnVlICYmIHBhcmVudC5zaG9ydGN1dFJvb3QgIT09IHRydWUpXG4gICAgICAgIHNob3J0Y3V0cy5wdXNoKGl0ZW0pO1xuXG4gICAgICBpdGVtLnRleHQgPVxuICAgICAgICBpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2ID8gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bikgOiBpdGVtLnRleHQ7XG5cbiAgICAgIC8vIGdyb3VwXG4gICAgICBpdGVtLmdyb3VwID0gdHlwZW9mIGl0ZW0uZ3JvdXAgIT09ICdib29sZWFuJyA/IHRydWUgOiBpdGVtLmdyb3VwO1xuXG4gICAgICAvLyBoaWRkZW5cbiAgICAgIGl0ZW0uX2hpZGRlbiA9IHR5cGVvZiBpdGVtLmhpZGUgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBpdGVtLmhpZGU7XG5cbiAgICAgIC8vIGFjbFxuICAgICAgaWYgKGl0ZW0uYWNsICYmIHRoaXMuYWNsU2VydmljZSkge1xuICAgICAgICBpdGVtLl9oaWRkZW4gPSAhdGhpcy5hY2xTZXJ2aWNlLmNhbihpdGVtLmFjbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soaXRlbSwgcGFyZW50LCBkZXB0aCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWRTaG9ydGN1dChzaG9ydGN1dHMpO1xuICAgIHRoaXMuX2NoYW5nZSQubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOlworCoMOowr3CvcOlwr/Cq8Omwo3Ct8Oowo/CnMOlwo3ClcOvwrzCjMOlworCoMOowr3CvcOkwr3CjcOnwr3CrsOowqfChMOlwojCmcOlwqbCgsOkwrjCi8OvwrzCmlxuICAgKiAxw6PCgMKBw6fCu8Kfw6TCuMKAw6XCnMKow6TCuMKLw6bCoMKHMMOnwprChMOoworCgsOnwoLCucOkwrjCi8OvwrzCiMOlwo3Cs8OjwoDCkMOkwrjCu8Olwq/CvMOowojCqsOjwoDCkcOoworCgsOnwoLCucOkwrjCi8OmwpbCucOvwrzCiVxuICAgKiAgICAgIDHDo8KAwoHDqMKLwqUgY2hpbGRyZW4gw6XCrcKYw6XCnMKoIMOjwoDCkHNob3J0Y3V0Um9vdDogdHJ1ZcOjwoDCkcOlwojCmcOmwpzCgMOkwrzCmMOlwoXCiMOjwoDCkMOmwo7CqMOowo3CkMOjwoDCkcOowr/CmcOnwqfCjcOmwpbCucOlwrzCj1xuICAgKiAgICAgIDLDo8KAwoHDpcKQwqbDpcKIwpnDpsKfwqXDpsKJwr7DpcK4wqbDpsKcwonDo8KAwpBkYXNoYm9hcmTDo8KAwpHDpcKtwpfDpsKgwrfDqcKTwr7DpsKOwqXDr8K8wozDqMKLwqXDpcKtwpjDpcKcwqjDpcKIwpnDpcKcwqjDpsKtwqTDqMKPwpzDpcKNwpXDp8KawoTDpMK4wovDpsKWwrnDpcKIwpvDpcK7wrrDpcK/wqvDpsKNwrfDpcKFwqXDpcKPwqNcbiAgICogICAgICAzw6PCgMKBw6XCkMKmw6XCiMKZw6bClMK+w6XCnMKoMMOoworCgsOnwoLCucOkwr3CjcOnwr3CrlxuICAgKi9cbiAgcHJpdmF0ZSBsb2FkU2hvcnRjdXQoc2hvcnRjdXRzOiBNZW51W10pIHtcbiAgICBpZiAoc2hvcnRjdXRzLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbHMgPSB0aGlzLmRhdGFbMF0uY2hpbGRyZW47XG4gICAgbGV0IHBvcyA9IGxzLmZpbmRJbmRleCh3ID0+IHcuc2hvcnRjdXRSb290ID09PSB0cnVlKTtcbiAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgcG9zID0gbHMuZmluZEluZGV4KHcgPT4gdy5saW5rLmluY2x1ZGVzKCdkYXNoYm9hcmQnKSk7XG4gICAgICBwb3MgPSAocG9zICE9PSAtMSA/IHBvcyA6IC0xKSArIDE7XG4gICAgICBjb25zdCBzaG9ydGN1dE1lbnUgPSA8TWVudT57XG4gICAgICAgIHRleHQ6ICfDpcK/wqvDpsKNwrfDqMKPwpzDpcKNwpUnLFxuICAgICAgICBpMThuOiAnc2hvcnRjdXQnLFxuICAgICAgICBpY29uOiAnaWNvbi1yb2NrZXQnLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICB9O1xuICAgICAgdGhpcy5kYXRhWzBdLmNoaWxkcmVuLnNwbGljZShwb3MsIDAsIHNob3J0Y3V0TWVudSk7XG4gICAgfVxuICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YVswXS5jaGlsZHJlbltwb3NdO1xuICAgIGlmIChfZGF0YS5pMThuICYmIHRoaXMuaTE4blNydikgX2RhdGEudGV4dCA9IHRoaXMuaTE4blNydi5mYW55aShfZGF0YS5pMThuKTtcbiAgICBfZGF0YSA9IE9iamVjdC5hc3NpZ24oX2RhdGEsIHtcbiAgICAgIHNob3J0Y3V0Um9vdDogdHJ1ZSxcbiAgICAgIF90eXBlOiAzLFxuICAgICAgX19pZDogLTEsXG4gICAgICBfZGVwdGg6IDEsXG4gICAgfSk7XG4gICAgX2RhdGEuY2hpbGRyZW4gPSBzaG9ydGN1dHMubWFwKGkgPT4ge1xuICAgICAgaS5fZGVwdGggPSAyO1xuICAgICAgcmV0dXJuIGk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgbWVudXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsK4woXDp8KpwrrDqMKPwpzDpcKNwpVcbiAgICovXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgIHRoaXMuX2NoYW5nZSQubmV4dCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwqDCucOmwo3CrlVSTMOowq7CvsOnwr3CrsOowo/CnMOlwo3ClSBgX29wZW5gIMOlwrHCnsOmwoDCp1xuICAgKiBAcGFyYW0gdXJsIFVSTMOlwpzCsMOlwp3CgFxuICAgKi9cbiAgb3BlbmVkQnlVcmwodXJsOiBzdHJpbmcpIHtcbiAgICBpZiAoIXVybCkgcmV0dXJuO1xuXG4gICAgbGV0IGZpbmRJdGVtOiBNZW51ID0gbnVsbDtcbiAgICB0aGlzLnZpc2l0KGl0ZW0gPT4ge1xuICAgICAgaXRlbS5fb3BlbiA9IGZhbHNlO1xuICAgICAgaWYgKCFpdGVtLmxpbmspIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFmaW5kSXRlbSAmJiB1cmwuc3RhcnRzV2l0aChpdGVtLmxpbmspKSB7XG4gICAgICAgIGZpbmRJdGVtID0gaXRlbTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIWZpbmRJdGVtKSByZXR1cm47XG5cbiAgICBkbyB7XG4gICAgICBmaW5kSXRlbS5fb3BlbiA9IHRydWU7XG4gICAgICBmaW5kSXRlbSA9IGZpbmRJdGVtLl9fcGFyZW50O1xuICAgIH0gd2hpbGUgKGZpbmRJdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKgwrnDpsKNwq51cmzDqMKOwrfDpcKPwpbDqMKPwpzDpcKNwpXDpcKIwpfDqMKhwqhcbiAgICogQHBhcmFtIHVybFxuICAgKi9cbiAgZ2V0UGF0aEJ5VXJsKHVybDogc3RyaW5nKTogTWVudVtdIHtcbiAgICBsZXQgaXRlbTogTWVudSA9IG51bGw7XG4gICAgdGhpcy52aXNpdCgoaSwgcGFyZW50LCBkZXB0aCkgPT4ge1xuICAgICAgaWYgKGkubGluayA9PT0gdXJsKSB7XG4gICAgICAgIGl0ZW0gPSBpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcmV0OiBNZW51W10gPSBbXTtcbiAgICBpZiAoIWl0ZW0pIHJldHVybiByZXQ7XG5cbiAgICBkbyB7XG4gICAgICByZXQuc3BsaWNlKDAsIDAsIGl0ZW0pO1xuICAgICAgaXRlbSA9IGl0ZW0uX19wYXJlbnQ7XG4gICAgfSB3aGlsZSAoaXRlbSk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlJC51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLmkxOG4kKSB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnLi4vLi4vd2luX3Rva2Vucyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbjogYW55LFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge31cblxuICAvKipcbiAgICogw6jCrsK+w6fCvcKuw6bCu8Kaw6XCisKow6bCncKhw6jCh8Kzw6bCjMKHw6XCrsKaw6XChcKDw6fCtMKgXG4gICAqIEBwYXJhbSBlbGVtZW50IMOmwozCh8Olwq7CmsOlwoXCg8OnwrTCoMOvwrzCjMOpwrvCmMOowq7CpCBgZG9jdW1lbnQuYm9keWBcbiAgICogQHBhcmFtIHRvcE9mZnNldCDDpcKBwo/Dp8KnwrvDpcKAwrzDr8K8wozDqcK7wpjDqMKuwqQgYDBgXG4gICAqL1xuICBzY3JvbGxUb0VsZW1lbnQoZWxlbWVudD86IEVsZW1lbnQsIHRvcE9mZnNldCA9IDApIHtcbiAgICBpZiAoIWVsZW1lbnQpIGVsZW1lbnQgPSB0aGlzLmRvYy5ib2R5O1xuXG4gICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xuXG4gICAgY29uc3QgdyA9IHRoaXMud2luO1xuICAgIGlmICh3ICYmIHcuc2Nyb2xsQnkpIHtcbiAgICAgIHcuc2Nyb2xsQnkoMCwgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0b3BPZmZzZXQpO1xuXG4gICAgICBpZiAody5wYWdlWU9mZnNldCA8IDIwKSB7XG4gICAgICAgIHcuc2Nyb2xsQnkoMCwgLXcucGFnZVlPZmZzZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDDpsK7wprDpcKKwqjDqMKHwrPDqcKhwrbDqcKDwqhcbiAgICogQHBhcmFtIHRvcE9mZnNldCDDpcKBwo/Dp8KnwrvDpcKAwrzDr8K8wozDqcK7wpjDqMKuwqQgYDBgXG4gICAqL1xuICBzY3JvbGxUb1RvcCh0b3BPZmZzZXQgPSAwKSB7XG4gICAgdGhpcy5zY3JvbGxUb0VsZW1lbnQodGhpcy5kb2MuYm9keSwgdG9wT2Zmc2V0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXBwLCBMYXlvdXQsIFVzZXIsIFNldHRpbmdzTm90aWZ5IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5jb25zdCBMQVlPVVRfS0VZID0gJ2xheW91dCc7XG5jb25zdCBVU0VSX0tFWSA9ICd1c2VyJztcbmNvbnN0IEFQUF9LRVkgPSAnYXBwJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2Uge1xuICBwcml2YXRlIG5vdGlmeSQgPSBuZXcgU3ViamVjdDxTZXR0aW5nc05vdGlmeT4oKTtcbiAgcHJpdmF0ZSBfYXBwOiBBcHAgPSBudWxsO1xuICBwcml2YXRlIF91c2VyOiBVc2VyID0gbnVsbDtcbiAgcHJpdmF0ZSBfbGF5b3V0OiBMYXlvdXQgPSBudWxsO1xuXG4gIHByaXZhdGUgZ2V0KGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCAnbnVsbCcpIHx8IG51bGw7XG4gIH1cblxuICBwcml2YXRlIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfVxuXG4gIGdldCBsYXlvdXQoKTogTGF5b3V0IHtcbiAgICBpZiAoIXRoaXMuX2xheW91dCkge1xuICAgICAgdGhpcy5fbGF5b3V0ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgPExheW91dD57XG4gICAgICAgICAgZml4ZWQ6IHRydWUsXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgICBib3hlZDogZmFsc2UsXG4gICAgICAgICAgbGFuZzogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5nZXQoTEFZT1VUX0tFWSksXG4gICAgICApO1xuICAgICAgdGhpcy5zZXQoTEFZT1VUX0tFWSwgdGhpcy5fbGF5b3V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dDtcbiAgfVxuXG4gIGdldCBhcHAoKTogQXBwIHtcbiAgICBpZiAoIXRoaXMuX2FwcCkge1xuICAgICAgdGhpcy5fYXBwID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgPEFwcD57XG4gICAgICAgICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICB9LFxuICAgICAgICB0aGlzLmdldChBUFBfS0VZKSxcbiAgICAgICk7XG4gICAgICB0aGlzLnNldChBUFBfS0VZLCB0aGlzLl9hcHApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYXBwO1xuICB9XG5cbiAgZ2V0IHVzZXIoKTogVXNlciB7XG4gICAgaWYgKCF0aGlzLl91c2VyKSB7XG4gICAgICB0aGlzLl91c2VyID0gT2JqZWN0LmFzc2lnbig8VXNlcj57fSwgdGhpcy5nZXQoVVNFUl9LRVkpKTtcbiAgICAgIHRoaXMuc2V0KFVTRVJfS0VZLCB0aGlzLl91c2VyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3VzZXI7XG4gIH1cblxuICBnZXQgbm90aWZ5KCk6IE9ic2VydmFibGU8U2V0dGluZ3NOb3RpZnk+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0TGF5b3V0KG5hbWU6IHN0cmluZyB8IExheW91dCwgdmFsdWU/OiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmxheW91dFtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sYXlvdXQgPSBuYW1lO1xuICAgIH1cbiAgICB0aGlzLnNldChMQVlPVVRfS0VZLCB0aGlzLl9sYXlvdXQpO1xuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ2xheW91dCcsIG5hbWUsIHZhbHVlIH0gYXMgYW55KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldEFwcCh2YWx1ZTogQXBwKSB7XG4gICAgdGhpcy5fYXBwID0gdmFsdWU7XG4gICAgdGhpcy5zZXQoQVBQX0tFWSwgdmFsdWUpO1xuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ2FwcCcsIHZhbHVlIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0VXNlcih2YWx1ZTogVXNlcikge1xuICAgIHRoaXMuX3VzZXIgPSB2YWx1ZTtcbiAgICB0aGlzLnNldChVU0VSX0tFWSwgdmFsdWUpO1xuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ3VzZXInLCB2YWx1ZSB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudENvbmZpZyB9IGZyb20gJy4vc2VydmljZXMvaHR0cC9odHRwLmNvbmZpZyc7XG5pbXBvcnQgeyBSZXNwb25zaXZlQ29uZmlnIH0gZnJvbSAnLi9zZXJ2aWNlcy9yZXNwb25zaXZlL3Jlc3BvbnNpdmUuY29uZmlnJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbGFpblRoZW1lQ29uZmlnIHtcbiAgaHR0cD86IEh0dHBDbGllbnRDb25maWc7XG4gIHJlc3BvbnNpdmU/OiBSZXNwb25zaXZlQ29uZmlnO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5UaGVtZUNvbmZpZyB9IGZyb20gJy4uLy4uL3RoZW1lLmNvbmZpZyc7XG5pbXBvcnQgeyBSZXNwb25zaXZlQ29uZmlnIH0gZnJvbSAnLi9yZXNwb25zaXZlLmNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBSRVBfTUFYID0gNjtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlU2VydmljZSB7XG4gIHByaXZhdGUgY29nOiBSZXNwb25zaXZlQ29uZmlnO1xuICBjb25zdHJ1Y3Rvcihjb2c6IEFsYWluVGhlbWVDb25maWcpIHtcbiAgICB0aGlzLmNvZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICA8UmVzcG9uc2l2ZUNvbmZpZz57XG4gICAgICAgIHJ1bGVzOiB7XG4gICAgICAgICAgMTogeyB4czogMjQgfSxcbiAgICAgICAgICAyOiB7IHhzOiAyNCwgc206IDEyIH0sXG4gICAgICAgICAgMzogeyB4czogMjQsIHNtOiAxMiwgbWQ6IDggfSxcbiAgICAgICAgICA0OiB7IHhzOiAyNCwgc206IDEyLCBtZDogOCwgbGc6IDYgfSxcbiAgICAgICAgICA1OiB7IHhzOiAyNCwgc206IDEyLCBtZDogOCwgbGc6IDYsIHhsOiA0IH0sXG4gICAgICAgICAgNjogeyB4czogMjQsIHNtOiAxMiwgbWQ6IDgsIGxnOiA2LCB4bDogNCwgeHhsOiAyIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgY29nIS5yZXNwb25zaXZlLFxuICAgICk7XG4gICAgaWYgKFxuICAgICAgT2JqZWN0LmtleXModGhpcy5jb2cucnVsZXMpXG4gICAgICAgIC5tYXAoaSA9PiAraSlcbiAgICAgICAgLnNvbWUoKGk6IG51bWJlcikgPT4gaSA8IDEgfHwgaSA+IFJFUF9NQVgpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBbdGhlbWVdIHRoZSByZXNwb25zZWl2ZSBydWxlIGluZGV4IHZhbHVlIHJhbmdlIG11c3QgYmUgMS0ke1JFUF9NQVh9YCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZ2VuQ2xzKGNvdW50OiBudW1iZXIpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgcnVsZSA9IHRoaXMuY29nLnJ1bGVzW2NvdW50ID4gUkVQX01BWCA/IFJFUF9NQVggOiBNYXRoLm1heChjb3VudCwgMSldO1xuICAgIGNvbnN0IGFudENvbENsYXNzID0gJ2FudC1jb2wnO1xuICAgIGNvbnN0IGNsc01hcCA9IFtgJHthbnRDb2xDbGFzc30teHMtJHtydWxlLnhzfWBdO1xuICAgIGlmIChydWxlLnNtKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30tc20tJHtydWxlLnNtfWApO1xuICAgIGlmIChydWxlLm1kKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30tbWQtJHtydWxlLm1kfWApO1xuICAgIGlmIChydWxlLmxnKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30tbGctJHtydWxlLmxnfWApO1xuICAgIGlmIChydWxlLnhsKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30teGwtJHtydWxlLnhsfWApO1xuICAgIGlmIChydWxlLnh4bCkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LXh4bC0ke3J1bGUueHhsfWApO1xuICAgIHJldHVybiBjbHNNYXA7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEluamVjdCxcbiAgT3B0aW9uYWwsXG4gIEluamVjdG9yLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vbWVudS9tZW51LnNlcnZpY2UnO1xuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiwgQWxhaW5JMThOU2VydmljZSB9IGZyb20gJy4uL2kxOG4vaTE4bic7XG5cbi8qKlxuICogw6jCrsK+w6fCvcKuw6bCoMKHw6nCosKYXG4gKiBAc2VlIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3Mvc2VydmljZSNUaXRsZVNlcnZpY2VcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBUaXRsZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9wcmVmaXggPSAnJztcbiAgcHJpdmF0ZSBfc3VmZml4ID0gJyc7XG4gIHByaXZhdGUgX3NlcGFyYXRvciA9ICcgLSAnO1xuICBwcml2YXRlIF9yZXZlcnNlID0gZmFsc2U7XG4gIHByaXZhdGUgX2RlZmF1bHQgPSAnTm90IFBhZ2UgTmFtZSc7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHRpdGxlOiBUaXRsZSxcbiAgICBwcml2YXRlIG1lbnVTcnY6IE1lbnVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICApIHtcbiAgICBpZiAodGhpcy5pMThuU3J2KVxuICAgICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4blNydi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0VGl0bGUoKSk7XG4gIH1cblxuICAvKiogw6jCrsK+w6fCvcKuw6XCiMKGw6nCmsKUw6fCrMKmICovXG4gIHNldCBzZXBhcmF0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcGFyYXRvciA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIMOowq7CvsOnwr3CrsOlwonCjcOnwrzCgCAqL1xuICBzZXQgcHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVmaXggPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiDDqMKuwr7Dp8K9wq7DpcKQwo7Dp8K8woAgKi9cbiAgc2V0IHN1ZmZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3VmZml4ID0gdmFsdWU7XG4gIH1cblxuICAvKiogw6jCrsK+w6fCvcKuw6bCmMKvw6XCkMKmw6XCj8KNw6jCvcKsICovXG4gIHNldCByZXZlcnNlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmV2ZXJzZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIMOowq7CvsOnwr3CrsOpwrvCmMOowq7CpMOmwqDCh8OpwqLCmMOlwpDCjSAqL1xuICBzZXQgZGVmYXVsdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGVmYXVsdCA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeUVsZW1lbnQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBlbCA9XG4gICAgICB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCcuYWxhaW4tZGVmYXVsdF9fY29udGVudC10aXRsZSBoMScpIHx8XG4gICAgICB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZWFkZXJfX3RpdGxlJyk7XG4gICAgaWYgKGVsKSB7XG4gICAgICByZXR1cm4gZWwuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlSb3V0ZSgpOiBzdHJpbmcge1xuICAgIGxldCBuZXh0ID0gdGhpcy5pbmplY3Rvci5nZXQoQWN0aXZhdGVkUm91dGUpO1xuICAgIHdoaWxlIChuZXh0LmZpcnN0Q2hpbGQpIG5leHQgPSBuZXh0LmZpcnN0Q2hpbGQ7XG4gICAgY29uc3QgZGF0YSA9IChuZXh0LnNuYXBzaG90ICYmIG5leHQuc25hcHNob3QuZGF0YSkgfHwge307XG4gICAgaWYgKGRhdGEudGl0bGVJMThuICYmIHRoaXMuaTE4blNydilcbiAgICAgIGRhdGEudGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoZGF0YS50aXRsZUkxOG4pO1xuICAgIHJldHVybiBkYXRhLnRpdGxlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeU1lbnUoKTogc3RyaW5nIHtcbiAgICBjb25zdCBtZW51cyA9IHRoaXMubWVudVNydi5nZXRQYXRoQnlVcmwodGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKS51cmwpO1xuICAgIGlmICghbWVudXMgfHwgbWVudXMubGVuZ3RoIDw9IDApIHJldHVybiAnJztcblxuICAgIGNvbnN0IGl0ZW0gPSBtZW51c1ttZW51cy5sZW5ndGggLSAxXTtcbiAgICBsZXQgdGl0bGU7XG4gICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgcmV0dXJuIHRpdGxlIHx8IGl0ZW0udGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqMKuwr7Dp8K9wq7DpsKgwofDqcKiwphcbiAgICovXG4gIHNldFRpdGxlKHRpdGxlPzogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICB0aXRsZSA9XG4gICAgICAgIHRoaXMuZ2V0QnlSb3V0ZSgpIHx8XG4gICAgICAgIHRoaXMuZ2V0QnlNZW51KCkgfHxcbiAgICAgICAgdGhpcy5nZXRCeUVsZW1lbnQoKSB8fFxuICAgICAgICB0aGlzLl9kZWZhdWx0O1xuICAgIH1cbiAgICBpZiAodGl0bGUgJiYgIUFycmF5LmlzQXJyYXkodGl0bGUpKSB7XG4gICAgICB0aXRsZSA9IFt0aXRsZV07XG4gICAgfVxuXG4gICAgbGV0IG5ld1RpdGxlcyA9IFtdO1xuICAgIGlmICh0aGlzLl9wcmVmaXgpIHtcbiAgICAgIG5ld1RpdGxlcy5wdXNoKHRoaXMuX3ByZWZpeCk7XG4gICAgfVxuICAgIG5ld1RpdGxlcy5wdXNoKC4uLih0aXRsZSBhcyBzdHJpbmdbXSkpO1xuICAgIGlmICh0aGlzLl9zdWZmaXgpIHtcbiAgICAgIG5ld1RpdGxlcy5wdXNoKHRoaXMuX3N1ZmZpeCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXZlcnNlKSB7XG4gICAgICBuZXdUaXRsZXMgPSBuZXdUaXRsZXMucmV2ZXJzZSgpO1xuICAgIH1cbiAgICB0aGlzLnRpdGxlLnNldFRpdGxlKG5ld1RpdGxlcy5qb2luKHRoaXMuX3NlcGFyYXRvcikpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaTE4biQpIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IERFTE9OX0xPQ0FMRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdkZWxvbi1sb2NhbGUnKTtcbiIsImltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUudHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCA8TG9jYWxlRGF0YT57XG4gIGFiYnI6ICd6aC1DTicsXG4gIGV4Y2VwdGlvbjoge1xuICAgIDQwMzogJ8OmworCscOmwq3CicOvwrzCjMOkwr3CoMOmwpfCoMOmwp3Cg8Oowq7Cv8OpwpfCrsOowq/CpcOpwqHCtcOpwp3CoicsXG4gICAgNDA0OiAnw6bCisKxw6bCrcKJw6/CvMKMw6TCvcKgw6jCrsK/w6nCl8Kuw6fCmsKEw6nCocK1w6nCncKiw6TCuMKNw6XCrcKYw6XCnMKoJyxcbiAgICA1MDA6ICfDpsKKwrHDpsKtwonDr8K8wozDpsKcwo3DpcKKwqHDpcKZwqjDpcKHwrrDqcKUwpnDpMK6woYnLFxuICAgIGJhY2tUb0hvbWU6ICfDqMK/wpTDpcKbwp7DqcKmwpbDqcKhwrUnLFxuICB9LFxuICBub3RpY2VJY29uOiB7XG4gICAgZW1wdHlUZXh0OiAnw6bCmsKCw6bCl8Kgw6bClcKww6bCjcKuJyxcbiAgICBjbGVhclRleHQ6ICfDpsK4woXDp8KpwronLFxuICB9LFxuICByZXVzZVRhYjoge1xuICAgIGNsb3NlOiAnw6XChcKzw6nCl8Ktw6bCoMKHw6fCrcK+JyxcbiAgICBjbG9zZU90aGVyOiAnw6XChcKzw6nCl8Ktw6XChcK2w6XCrsKDw6bCoMKHw6fCrcK+JyxcbiAgICBjbG9zZVJpZ2h0OiAnw6XChcKzw6nCl8Ktw6XCj8Kzw6TCvsKnw6bCoMKHw6fCrcK+JyxcbiAgICBjbGVhcjogJ8OmwrjChcOnwqnCuicsXG4gIH0sXG4gIHRhZ1NlbGVjdDoge1xuICAgIGV4cGFuZDogJ8OlwrHClcOlwrzCgCcsXG4gICAgY29sbGFwc2U6ICfDpsKUwrbDqMK1wrcnLFxuICB9LFxuICBtaW5pUHJvZ3Jlc3M6IHtcbiAgICB0YXJnZXQ6ICfDp8Kbwq7DpsKgwofDpcKAwrzDr8K8wponXG4gIH0sXG4gIHN0OiB7XG4gICAgdG90YWw6ICfDpcKFwrEge3t0b3RhbH19IMOmwp3CoScsXG4gIH0sXG4gIHNmOiB7XG4gICAgc3VibWl0OiAnw6bCj8KQw6TCusKkJyxcbiAgICByZXNldDogJ8OpwofCjcOnwr3CricsXG4gICAgc2VhcmNoOiAnw6bCkMKcw6fCtMKiJyxcbiAgICBlZGl0OiAnw6TCv8Kdw6XCrcKYJyxcbiAgICBhZGRUZXh0OiAnw6bCt8K7w6XCisKgJyxcbiAgICByZW1vdmVUZXh0OiAnw6fCp8K7w6nCmcKkJyxcbiAgICBjaGVja0FsbFRleHQ6ICfDpcKFwqjDqcKAwoknLFxuICB9LFxufTtcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgUHJvdmlkZXIsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuL2xvY2FsZS50eXBlcyc7XG5pbXBvcnQgeyBERUxPTl9MT0NBTEUgfSBmcm9tICcuL2xvY2FsZS50b2tlbnMnO1xuaW1wb3J0IHpoQ04gZnJvbSAnLi9sYW5ndWFnZXMvemgtQ04nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVsb25Mb2NhbGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfbG9jYWxlOiBMb2NhbGVEYXRhO1xuICBwcml2YXRlIGNoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PExvY2FsZURhdGE+KHRoaXMuX2xvY2FsZSk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChERUxPTl9MT0NBTEUpIGxvY2FsZTogTG9jYWxlRGF0YSkge1xuICAgIHRoaXMuc2V0TG9jYWxlKGxvY2FsZSB8fCB6aENOKTtcbiAgfVxuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxMb2NhbGVEYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldExvY2FsZShsb2NhbGU6IExvY2FsZURhdGEpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbG9jYWxlICYmIHRoaXMuX2xvY2FsZS5hYmJyID09PSBsb2NhbGUuYWJicikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBsb2NhbGU7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQobG9jYWxlKTtcbiAgfVxuXG4gIGdldCBsb2NhbGUoKTogTG9jYWxlRGF0YSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgfVxuXG4gIGdldERhdGEocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZVtwYXRoXSB8fCB7fTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gREVMT05fTE9DQUxFX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShleGlzdDogRGVsb25Mb2NhbGVTZXJ2aWNlLCBsb2NhbGU6IExvY2FsZURhdGEpOiBEZWxvbkxvY2FsZVNlcnZpY2Uge1xuICByZXR1cm4gZXhpc3QgfHwgbmV3IERlbG9uTG9jYWxlU2VydmljZShsb2NhbGUpO1xufVxuXG5leHBvcnQgY29uc3QgREVMT05fTE9DQUxFX1NFUlZJQ0VfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlICAgOiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gIHVzZUZhY3Rvcnk6IERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlksXG4gIGRlcHMgICAgICA6IFsgWyBuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIERlbG9uTG9jYWxlU2VydmljZSBdLCBERUxPTl9MT0NBTEUgXVxufTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB6aENOIGZyb20gJy4vbGFuZ3VhZ2VzL3poLUNOJztcblxuaW1wb3J0IHsgREVMT05fTE9DQUxFIH0gZnJvbSAnLi9sb2NhbGUudG9rZW5zJztcbmltcG9ydCB7IERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSIH0gZnJvbSAnLi9sb2NhbGUuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogREVMT05fTE9DQUxFLCB1c2VWYWx1ZTogemhDTiB9LFxuICAgIERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEZWxvbkxvY2FsZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS50eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IDxMb2NhbGVEYXRhPntcbiAgYWJicjogJ2VuLVVTJyxcbiAgZXhjZXB0aW9uOiB7XG4gICAgNDAzOiBgU29ycnksIHlvdSBkb24ndCBoYXZlIGFjY2VzcyB0byB0aGlzIHBhZ2VgLFxuICAgIDQwNDogYFNvcnJ5LCB0aGF0IHBhZ2UgZG9uJ3QgZXhpc3RgLFxuICAgIDUwMDogYFNvcnJ5LCBzZXJ2ZXIgZXJyb3JgLFxuICAgIGJhY2tUb0hvbWU6ICdCYWNrIFRvIEhvbWUnLFxuICB9LFxuICBub3RpY2VJY29uOiB7XG4gICAgZW1wdHlUZXh0OiAnTm8gZGF0YScsXG4gICAgY2xlYXJUZXh0OiAnQ2xlYXInLFxuICB9LFxuICByZXVzZVRhYjoge1xuICAgIGNsb3NlOiAnQ2xvc2UgdGFiJyxcbiAgICBjbG9zZU90aGVyOiAnQ2xvc2Ugb3RoZXIgdGFicycsXG4gICAgY2xvc2VSaWdodDogJ0Nsb3NlIHRhYnMgdG8gcmlnaHQnLFxuICAgIGNsZWFyOiAnQ2xlYXIgdGFicycsXG4gIH0sXG4gIHRhZ1NlbGVjdDoge1xuICAgIGV4cGFuZDogJ0V4cGFuZCcsXG4gICAgY29sbGFwc2U6ICdDb2xsYXBzZScsXG4gIH0sXG4gIG1pbmlQcm9ncmVzczoge1xuICAgIHRhcmdldDogJ1RhcmdldDogJyxcbiAgfSxcbiAgc3Q6IHtcbiAgICB0b3RhbDogJ3t7cmFuZ2VbMF19fSAtIHt7cmFuZ2VbMV19fSBvZiB7e3RvdGFsfX0nLFxuICB9LFxuICBzZjoge1xuICAgIHN1Ym1pdDogJ1N1Ym1pdCcsXG4gICAgcmVzZXQ6ICdSZXNldCcsXG4gICAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgICBlZGl0OiAnU2F2ZScsXG4gICAgYWRkVGV4dDogJ0FkZCcsXG4gICAgcmVtb3ZlVGV4dDogJ1JlbW92ZScsXG4gICAgY2hlY2tBbGxUZXh0OiAnQ2hlY2sgYWxsJyxcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlLnR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgPExvY2FsZURhdGE+e1xuICBhYmJyOiAnemgtVFcnLFxuICBleGNlcHRpb246IHtcbiAgICA0MDM6ICfDpsKKwrHDpsKtwonDr8K8wozDpcKmwrPDp8KEwqHDpsKsworDqMKowqrDpcKVwo/DqMKpwrLDqcKgwoHDqcKdwqInLFxuICAgIDQwNDogJ8OmworCscOmwq3CicOvwrzCjMOlwqbCs8OowqjCqsOlwpXCj8OnwprChMOpwqDCgcOpwp3CosOkwrjCjcOlwq3CmMOlwpzCqCcsXG4gICAgNTAwOiAnw6bCisKxw6bCrcKJw6/CvMKMw6bCnMKNw6XCi8KZw6XCmcKow6XCh8K6w6nCjMKvw6TCusKGJyxcbiAgICBiYWNrVG9Ib21lOiAnw6jCv8KUw6XCm8Kew6nCpsKWw6nCoMKBJyxcbiAgfSxcbiAgbm90aWNlSWNvbjoge1xuICAgIGVtcHR5VGV4dDogJ8OmwprCq8OnwoTCocOmwpXCuMOmwpPCmicsXG4gICAgY2xlYXJUZXh0OiAnw6bCuMKFw6fCqcK6JyxcbiAgfSxcbiAgcmV1c2VUYWI6IHtcbiAgICBjbG9zZTogJ8OpwpfCnMOpwpbCicOmwqjCmcOnwrDCvScsXG4gICAgY2xvc2VPdGhlcjogJ8OpwpfCnMOpwpbCicOlwoXCtsOlwq7Cg8OmwqjCmcOnwrDCvScsXG4gICAgY2xvc2VSaWdodDogJ8OpwpfCnMOpwpbCicOlwo/Cs8OlwoHCtMOmwqjCmcOnwrDCvScsXG4gICAgY2xlYXI6ICfDpsK4woXDp8KpwronLFxuICB9LFxuICB0YWdTZWxlY3Q6IHtcbiAgICBleHBhbmQ6ICfDpcKxwpXDqcKWwosnLFxuICAgIGNvbGxhcHNlOiAnw6bClMK2w6jCtcK3JyxcbiAgfSxcbiAgbWluaVByb2dyZXNzOiB7XG4gICAgdGFyZ2V0OiAnw6fCm8Kuw6bCqMKZw6XCgMK8w6/CvMKaJyxcbiAgfSxcbiAgc3Q6IHtcbiAgICB0b3RhbDogJ8OlwoXCsSB7e3RvdGFsfX0gw6bCosKdJyxcbiAgfSxcbiAgc2Y6IHtcbiAgICBzdWJtaXQ6ICfDpsKPwpDDpMK6wqQnLFxuICAgIHJlc2V0OiAnw6nCh8KNw6fCvcKuJyxcbiAgICBzZWFyY2g6ICfDpsKQwpzDp8K0wqInLFxuICAgIGVkaXQ6ICfDpMK/wp3DpcKtwpgnLFxuICAgIGFkZFRleHQ6ICfDpsK3wrvDpcKKwqAnLFxuICAgIHJlbW92ZVRleHQ6ICfDp8KnwrvDqcKZwqQnLFxuICAgIGNoZWNrQWxsVGV4dDogJ8OlwoXCqMOpwoHCuCcsXG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE56TW9kYWxTZXJ2aWNlLCBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxIZWxwZXJPcHRpb25zIHtcbiAgLyoqIMOlwqTCp8OlwrDCj8OvwrzCm8Okwr7Ci8OlwqbCgsOvwrzCmmxnw6PCgMKBNjAww6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYGxnYCAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyO1xuICAvKiogw6XCr8K5w6jCr8Kdw6bCocKGIFtNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlXShodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9jb21wb25lbnRzL21vZGFsL256LW1vZGFsLnR5cGUudHMpIMOlwo/CgsOmwpXCsCAqL1xuICBtb2RhbE9wdGlvbnM/OiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlO1xuICAvKiogw6bCmMKvw6XCkMKmw6fCssK+w6XCh8KGw6/CvMKIw6nCu8KYw6jCrsKkw6/CvMKaYHRydWVgw6/CvMKJw6/CvMKMw6jCi8Klw6jCv8KUw6XCm8Kew6XCgMK8w6nCncKew6fCqcK6w6XCgMK8w6/CvMKIYG51bGxgw6bCiMKWYHVuZGVmaW5lZGDDr8K8wonDqMKnwobDpMK4wrrDpsKIwpDDpcKKwp/Dr8K8wozDpcKQwqbDpcKIwpnDqMKnwobDpMK4wrrDqcKUwpnDqMKvwq8gKi9cbiAgZXhhY3Q/OiBib29sZWFuO1xuICAvKiogw6bCmMKvw6XCkMKmw6XCjMKFw6jCo8K5w6bCoMKHw6fCrcK+w6nCocK1w6/CvMKMw6TCv8Kuw6XCpMKNw6bCqMKhw6bCgMKBw6XCjMKFw6XCkMKrw6bCoMKHw6fCrcK+w6nCl8K0w6jCt8Kdw6nCl8Kuw6nCosKYICovXG4gIGluY2x1ZGVUYWJzPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiDDpcKvwrnDqMKvwp3DpsKhwobDqMK+woXDpcKKwqnDp8KxwrtcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBNb2RhbEhlbHBlciB7XG4gIHByaXZhdGUgekluZGV4ID0gNTAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBOek1vZGFsU2VydmljZSkge31cblxuICAvKipcbiAgICogw6bCnsKEw6XCu8K6w6TCuMKAw6TCuMKqw6XCr8K5w6jCr8Kdw6bCocKGXG4gICAqXG4gICAqIEBwYXJhbSBjb21wIMOnwrvChMOkwrvCtlxuICAgKiBAcGFyYW0gcGFyYW1zIMOnwrvChMOkwrvCtsOlwo/CgsOmwpXCsFxuICAgKiBAcGFyYW0gb3B0aW9ucyDDqcKiwp3DpcKkwpbDpcKPwoLDpsKVwrBcbiAgICpcbiAgICogw6fCpMK6w6TCvsKLw6/CvMKaXG4gIGBgYHRzXG50aGlzLm1vZGFsSGVscGVyLmNyZWF0ZShGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuLy8gw6XCr8K5w6TCusKOw6fCu8KEw6TCu8K2w6fCmsKEw6bCiMKQw6XCisKfJsOlwoXCs8OpwpfCrcOnwprChMOlwqTChMOnwpDChsOowq/CtMOmwpjCjlxuLy8gw6bCiMKQw6XCisKfXG50aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG50aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcbi8vIMOlwoXCs8OpwpfCrVxudGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcbmBgYFxuICAgKi9cbiAgY3JlYXRlKFxuICAgIGNvbXA6IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IE1vZGFsSGVscGVyT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHNpemU6ICdsZycsXG4gICAgICBleGFjdDogdHJ1ZSxcbiAgICAgIGluY2x1ZGVUYWJzOiBmYWxzZSxcbiAgICB9LCBvcHRpb25zKTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICBsZXQgY2xzID0gJycsXG4gICAgICAgIHdpZHRoID0gJyc7XG4gICAgICBpZiAob3B0aW9ucy5zaXplKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zaXplID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHdpZHRoID0gYCR7b3B0aW9ucy5zaXplfXB4YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbHMgPSBgbW9kYWwtJHtvcHRpb25zLnNpemV9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMuaW5jbHVkZVRhYnMpIHtcbiAgICAgICAgY2xzICs9ICcgbW9kYWwtaW5jbHVkZS10YWJzJztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlID0ge1xuICAgICAgICBueldyYXBDbGFzc05hbWU6IGNscyxcbiAgICAgICAgbnpDb250ZW50OiBjb21wLFxuICAgICAgICBueldpZHRoOiB3aWR0aCA/IHdpZHRoIDogdW5kZWZpbmVkLFxuICAgICAgICBuekZvb3RlcjogbnVsbCxcbiAgICAgICAgbnpDb21wb25lbnRQYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgbnpaSW5kZXg6ICsrdGhpcy56SW5kZXgsXG4gICAgICB9O1xuICAgICAgY29uc3Qgc3ViamVjdCA9IHRoaXMuc3J2LmNyZWF0ZShcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgb3B0aW9ucy5tb2RhbE9wdGlvbnMpLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGFmdGVyQ2xvc2UkID0gc3ViamVjdC5hZnRlckNsb3NlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXhhY3QgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAocmVzICE9IG51bGwpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICB9XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIGFmdGVyQ2xvc2UkLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKewoTDpcK7wrrDqcKdwpnDpsKAwoHDpsKhwobDr8K8wozDp8KCwrnDpcKHwrvDqMKSwpnDpcKxwoLDpMK4wo3DpcKFwoHDqMKuwrjDpcKFwrPDqcKXwq1cbiAgICpcbiAgICogQHBhcmFtIGNvbXAgw6fCu8KEw6TCu8K2XG4gICAqIEBwYXJhbSBwYXJhbXMgw6fCu8KEw6TCu8K2w6XCj8KCw6bClcKwXG4gICAqIEBwYXJhbSBvcHRpb25zIMOpwqLCncOlwqTClsOlwo/CgsOmwpXCsFxuICAgKlxuICAgKiDDp8KkwrrDpMK+wovDr8K8wppcbiAgYGBgdHNcbnRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuLy8gw6XCr8K5w6TCusKOw6fCu8KEw6TCu8K2w6fCmsKEw6bCiMKQw6XCisKfJsOlwoXCs8OpwpfCrcOnwprChMOlwqTChMOnwpDChsOowq/CtMOmwpjCjlxuLy8gw6bCiMKQw6XCisKfXG50aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG50aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcbi8vIMOlwoXCs8OpwpfCrVxudGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcbmBgYFxuICAgKi9cbiAgY3JlYXRlU3RhdGljKFxuICAgIGNvbXA6IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IE1vZGFsSGVscGVyT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG1vZGFsT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7IG56TWFza0Nsb3NhYmxlOiBmYWxzZSB9LFxuICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLm1vZGFsT3B0aW9ucyxcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZShjb21wLCBwYXJhbXMsIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHsgbW9kYWxPcHRpb25zIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKJwpPDpcK8woDDpcKvwrnDqMKvwp3DpsKhwoZcbiAgICogQHBhcmFtIGNvbXAgw6fCu8KEw6TCu8K2XG4gICAqIEBwYXJhbSBwYXJhbXMgw6fCu8KEw6TCu8K2w6XCj8KCw6bClcKwXG4gICAqIEBwYXJhbSBzaXplIMOlwqTCp8OlwrDCj8OvwrzCm8Okwr7Ci8OlwqbCgsOvwrzCmmxnw6PCgMKBNjAww6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKabGdcbiAgICogQHBhcmFtIG9wdGlvbnMgw6XCr8K5w6jCr8Kdw6bCocKGIGBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlYCDDpcKPwoLDpsKVwrBcbiAgICpcbiAgICogw6fCpMK6w6TCvsKLw6/CvMKaXG4gIGBgYHRzXG50aGlzLm1vZGFsSGVscGVyLm9wZW4oRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbi8vIMOlwq/CucOkwrrCjsOnwrvChMOkwrvCtsOnwprChMOmwojCkMOlworCnybDpcKFwrPDqcKXwq3Dp8KawoTDpcKkwoTDp8KQwobDqMKvwrTDpsKYwo5cbi8vIMOmwojCkMOlworCn1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XG4vLyDDpcKFwrPDqcKXwq1cbnRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG5gYGBcbiAgICovXG4gIG9wZW4oXG4gICAgY29tcDogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBzaXplOiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXIgPSAnbGcnLFxuICAgIG9wdGlvbnM/OiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlLFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZShjb21wLCBwYXJhbXMsIHtcbiAgICAgIHNpemUsXG4gICAgICBtb2RhbE9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICBleGFjdDogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6nCncKZw6bCgMKBw6bCocKGw6/CvMKMw6fCgsK5w6XCh8K7w6jCksKZw6XCscKCw6TCuMKNw6XChcKBw6jCrsK4w6XChcKzw6nCl8KtXG4gICAqIEBwYXJhbSBjb21wIMOnwrvChMOkwrvCtlxuICAgKiBAcGFyYW0gcGFyYW1zIMOnwrvChMOkwrvCtsOlwo/CgsOmwpXCsFxuICAgKiBAcGFyYW0gc2l6ZSDDpcKkwqfDpcKwwo/Dr8K8wpvDpMK+wovDpcKmwoLDr8K8wppsZ8OjwoDCgTYwMMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmxnXG4gICAqIEBwYXJhbSBvcHRpb25zIMOlwq/CucOowq/CncOmwqHChiBgTW9kYWxPcHRpb25zRm9yU2VydmljZWAgw6XCj8KCw6bClcKwXG4gICAqXG4gICAqIMOnwqTCusOkwr7Ci8OvwrzCmlxuICBgYGB0c1xudGhpcy5tb2RhbEhlbHBlci5vcGVuKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4vLyDDpcKvwrnDpMK6wo7Dp8K7woTDpMK7wrbDp8KawoTDpsKIwpDDpcKKwp8mw6XChcKzw6nCl8Ktw6fCmsKEw6XCpMKEw6fCkMKGw6jCr8K0w6bCmMKOXG4vLyDDpsKIwpDDpcKKwp9cbnRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcbnRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xuLy8gw6XChcKzw6nCl8KtXG50aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xuYGBgXG4gICAqL1xuICBzdGF0aWMoXG4gICAgY29tcDogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBzaXplOiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXIgPSAnbGcnLFxuICAgIG9wdGlvbnM/OiBhbnksXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMub3BlbihcbiAgICAgIGNvbXAsXG4gICAgICBwYXJhbXMsXG4gICAgICBzaXplLFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIG56TWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICksXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE56RHJhd2VyU2VydmljZSwgTnpEcmF3ZXJPcHRpb25zIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd2VySGVscGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDDpcKkwqfDpcKwwo/Dr8K8wpvDpMK+wovDpcKmwoLDr8K8wppsZ8OjwoDCgTYwMMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBtZGBcbiAgICpcbiAgICogfCDDp8KxwrvDpcKewosgfCDDqcK7wpjDqMKuwqTDpcKkwqfDpcKwwo8gfFxuICAgKiB8IC0tLSB8IC0tLS0tLSB8XG4gICAqIHwgYHNtYCB8IGAzMDBgIHxcbiAgICogfCBgbWRgIHwgYDYwMGAgfFxuICAgKiB8IGBsZ2AgfCBgOTAwYCB8XG4gICAqIHwgYHhsYCB8IGAxMjAwYCB8XG4gICAqXG4gICAqID4gw6TCu8Klw6TCuMKKw6XCgMK8w6/CvMKMw6XCj8Kvw6nCgMKaw6jCv8KHw6jCpsKGw6fCm8KWw6fCm8K4w6XCusKUw6fCmsKETEVTU8Olwo/CgsOmwpXCsMOowofCqsOowqHCjMOowrDCg8OmwpXCtFxuICAgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCBudW1iZXI7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKMwoXDpcKQwqvDpcK6wpXDqcKDwqjDpcK3wqXDpcKFwrfDpsKdwqHDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWBcbiAgICovXG4gIGZvb3Rlcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDDpcK6wpXDqcKDwqjDpcK3wqXDpcKFwrfDpsKdwqHDqcKrwpjDpcK6wqbDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgNTVgXG4gICAqL1xuICBmb290ZXJIZWlnaHQ/OiBudW1iZXI7XG4gIC8qKiDDpsKKwr3DpcKxwokgW056RHJhd2VyT3B0aW9uc10oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZHJhd2VyL3poI256ZHJhd2Vyb3B0aW9ucykgw6XCj8KCw6bClcKwICovXG4gIGRyYXdlck9wdGlvbnM/OiBOekRyYXdlck9wdGlvbnM7XG59XG5cbi8qKlxuICogw6bCisK9w6XCscKJw6jCvsKFw6XCisKpw6fCscK7XG4gKlxuICogKirDpsKzwqjDpsKEwo/Dr8K8wpoqKiDDpsKewoTDpcK7wrrDp8K7wpPDpsKewpzDqcKDwr3DpcKPwq/DqMKiwqvDqMKuwqLDqcKYwoXDr8K8wozDpMK9wobDpsKwwrjDqMK/wpzDqcKDwr3DpMK4wo3DpMK8wprDqMKnwqbDpcKPwpEgYG9ic2VydmVyLmVycm9yYFxuICpcbiAqIMOnwqTCusOkwr7Ci8OvwrzCmlxuYGBgdHNcbnRoaXMuZHJhd2VySGVscGVyLmNyZWF0ZSgnRWRpdCcsIEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4vLyDDpcKvwrnDpMK6wo7Dp8K7woTDpMK7wrbDp8KawoTDpsKIwpDDpcKKwp8mw6XChcKzw6nCl8Ktw6fCmsKEw6XCpMKEw6fCkMKGw6jCr8K0w6bCmMKOXG4vLyDDpsKIwpDDpcKKwp9cbnRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoZGF0YSk7XG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKHRydWUpO1xuLy8gw6XChcKzw6nCl8KtXG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKCk7XG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKGZhbHNlKTtcbmBgYFxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIERyYXdlckhlbHBlciB7XG4gIC8vIMOlwqTCp8OpwoPCqMOlwojChsOmwoPChcOlwobCtcOkwrjCi8OmworCvcOlwrHCicOnwprChMOlwrHCgsOnwrrCp8Omwq/ClCBNb2RhbCDDpMK8wprDpsKbwrTDpMK9wo7DpMK4woDDpMK6wptcbiAgcHJpdmF0ZSB6SW5kZXggPSA0MDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IE56RHJhd2VyU2VydmljZSkgeyB9XG5cbiAgLyoqXG4gICAqIMOmwp7ChMOlwrvCusOkwrjCgMOkwrjCqsOmworCvcOlwrHCiVxuICAgKi9cbiAgY3JlYXRlKFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgY29tcDogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzogRHJhd2VySGVscGVyT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKDxEcmF3ZXJIZWxwZXJPcHRpb25zPntcbiAgICAgIHNpemU6ICdtZCcsXG4gICAgICBmb290ZXI6IHRydWUsXG4gICAgICBmb290ZXJIZWlnaHQ6IDU1LFxuICAgICAgZHJhd2VyT3B0aW9uczoge1xuICAgICAgICBuelBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICAgICAgbnpXcmFwQ2xhc3NOYW1lOiAnJ1xuICAgICAgfVxuICAgIH0sIG9wdGlvbnMpO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgIGNvbnN0IHsgc2l6ZSwgZm9vdGVyLCBmb290ZXJIZWlnaHQsIGRyYXdlck9wdGlvbnMgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogTnpEcmF3ZXJPcHRpb25zID0ge1xuICAgICAgICBuekNvbnRlbnQ6IGNvbXAsXG4gICAgICAgIG56Q29udGVudFBhcmFtczogcGFyYW1zLFxuICAgICAgICBuelpJbmRleDogKyt0aGlzLnpJbmRleCxcbiAgICAgICAgbnpUaXRsZTogdGl0bGVcbiAgICAgIH07XG5cbiAgICAgIGlmIChmb290ZXIpIHtcbiAgICAgICAgZGVmYXVsdE9wdGlvbnMubnpCb2R5U3R5bGUgPSB7XG4gICAgICAgICAgaGVpZ2h0OiBgY2FsYygxMDAlIC0gJHtmb290ZXJIZWlnaHR9cHgpYCxcbiAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgICdwYWRkaW5nLWJvdHRvbSc6IGAke2Zvb3RlckhlaWdodCAtIDJ9cHhgXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgZGVmYXVsdE9wdGlvbnNbZHJhd2VyT3B0aW9ucy5uelBsYWNlbWVudCA9PT0gJ3RvcCcgfHwgZHJhd2VyT3B0aW9ucy5uelBsYWNlbWVudCA9PT0gJ2JvdHRvbScgPyAnbnpIZWlnaHQnIDogJ256V2lkdGgnXSA9IG9wdGlvbnMuc2l6ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zLm56V3JhcENsYXNzTmFtZSA9IChkcmF3ZXJPcHRpb25zLm56V3JhcENsYXNzTmFtZSArIGAgZHJhd2VyLSR7b3B0aW9ucy5zaXplfWApLnRyaW0oKTtcbiAgICAgICAgZGVsZXRlIGRyYXdlck9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdWJqZWN0ID0gdGhpcy5zcnYuY3JlYXRlKFxuICAgICAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBkcmF3ZXJPcHRpb25zKSxcbiAgICAgICk7XG4gICAgICBjb25zdCBhZnRlckNsb3NlJCA9IHN1YmplY3QuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXMgIT0gbnVsbCAmJiByZXMgIT09IGZhbHNlKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICB9XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIGFmdGVyQ2xvc2UkLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKewoTDpcK7wrrDpMK4woDDpMK4wqrDpsKKwr3DpcKxwonDr8K8wozDp8KCwrnDpcKHwrvDqMKSwpnDpcKxwoLDpMK4wo3DpcKFwoHDqMKuwrjDpcKFwrPDqcKXwq1cbiAgICovXG4gIHN0YXRpYyhcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGNvbXA6IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IERyYXdlckhlbHBlck9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBkcmF3ZXJPcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHsgbnpNYXNrQ2xvc2FibGU6IGZhbHNlIH0sXG4gICAgICBvcHRpb25zICYmIG9wdGlvbnMuZHJhd2VyT3B0aW9ucyxcbiAgICApO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZSh0aXRsZSwgY29tcCwgcGFyYW1zLCBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7IGRyYXdlck9wdGlvbnMgfSkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwQ2xpZW50LFxuICBIdHRwSGVhZGVycyxcbiAgSHR0cFBhcmFtcyxcbiAgSHR0cFJlc3BvbnNlLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBbGFpblRoZW1lQ29uZmlnIH0gZnJvbSAnLi4vLi4vdGhlbWUuY29uZmlnJztcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcgfSBmcm9tICcuL2h0dHAuY29uZmlnJztcblxuLyoqXG4gKiDDpcKwwoHDqMKjwoVIdHRwQ2xpZW50w6/CvMKMw6TCuMK7w6jCpsKBw6jCp8Kjw6XChsKzw6/CvMKaXG4gKiArIMOkwrzCmMOlwozClkh0dHBDbGllbnTDpcKcwqjDpcKPwoLDpsKVwrDDpMK4worDpMK+wr/DpcKIwqnDpsKAwqdcbiAqICsgw6fCu8Kfw6TCuMKAw6XCrsKew6fCjsKwIGxvYWRpbmdcbiAqICsgw6fCu8Kfw6TCuMKAw6XCpMKEw6fCkMKGw6bCl8K2w6nCl8K0w6bCoMK8w6XCvMKPw6nCl8Kuw6nCosKYXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y2xhc3MtbmFtZVxuZXhwb3J0IGNsYXNzIF9IdHRwQ2xpZW50IHtcbiAgcHJpdmF0ZSBjb2c6IEh0dHBDbGllbnRDb25maWc7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgY29nOiBBbGFpblRoZW1lQ29uZmlnKSB7XG4gICAgdGhpcy5jb2cgPSBPYmplY3QuYXNzaWduKFxuICAgICAgPEh0dHBDbGllbnRDb25maWc+e1xuICAgICAgICBudWxsVmFsdWVIYW5kbGluZzogJ2luY2x1ZGUnLFxuICAgICAgICBkYXRlVmFsdWVIYW5kbGluZzogJ3RpbWVzdGFtcCcsXG4gICAgICB9LFxuICAgICAgY29nIS5odHRwLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XG5cbiAgLyoqIMOmwpjCr8OlwpDCpsOmwq3Co8OlwpzCqMOlworCoMOowr3CvcOkwrjCrSAqL1xuICBnZXQgbG9hZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgfVxuXG4gIHBhcnNlUGFyYW1zKHBhcmFtczogYW55KTogSHR0cFBhcmFtcyB7XG4gICAgY29uc3QgbmV3UGFyYW1zID0ge307XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBsZXQgX2RhdGEgPSBwYXJhbXNba2V5XTtcbiAgICAgIC8vIMOlwr/CvcOnwpXCpcOnwqnCusOlwoDCvFxuICAgICAgaWYgKHRoaXMuY29nLm51bGxWYWx1ZUhhbmRsaW5nID09PSAnaWdub3JlJyAmJiBfZGF0YSA9PSBudWxsKSByZXR1cm47XG4gICAgICAvLyDDpcKwwobDpsKXwrbDqcKXwrTDqMK9wqzDpcKMwpbDpMK4wrrDr8K8wprDpsKXwrbDqcKXwrTDpsKIwrMgKMOnwqfCkilcbiAgICAgIGlmICh0aGlzLmNvZy5kYXRlVmFsdWVIYW5kbGluZyA9PT0gJ3RpbWVzdGFtcCcgJiYgX2RhdGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIF9kYXRhID0gX2RhdGEudmFsdWVPZigpO1xuICAgICAgfVxuICAgICAgbmV3UGFyYW1zW2tleV0gPSBfZGF0YTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IEh0dHBQYXJhbXMoeyBmcm9tT2JqZWN0OiBuZXdQYXJhbXMgfSk7XG4gIH1cblxuICBhcHBsaWVkVXJsKHVybDogc3RyaW5nLCBwYXJhbXM/OiBhbnkpIHtcbiAgICBpZiAoIXBhcmFtcykgcmV0dXJuIHVybDtcbiAgICB1cmwgKz0gfnVybC5pbmRleE9mKCc/JykgPyAnJyA6ICc/JztcbiAgICBjb25zdCBhcnI6IHN0cmluZ1tdID0gW107XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXG4gICAgZm9yIChjb25zdCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICBhcnIucHVzaChgJHtrZXl9PSR7cGFyYW1zW2tleV19YCk7XG4gICAgfVxuICAgIHJldHVybiB1cmwgKyBhcnIuam9pbignJicpO1xuICB9XG5cbiAgYmVnaW4oKSB7XG4gICAgLy8gY29uc29sZS50aW1lKCdodHRwJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5fbG9hZGluZyA9IHRydWUpKTtcbiAgfVxuXG4gIGVuZCgpIHtcbiAgICAvLyBjb25zb2xlLnRpbWVFbmQoJ2h0dHAnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLl9sb2FkaW5nID0gZmFsc2UpKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gZ2V0XG5cbiAgLyoqXG4gICAqIEdFVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgVGAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBnZXQ8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8VD47XG5cbiAgLyoqXG4gICAqIEdFVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgc3RyaW5nYCDDp8KxwrvDpcKewotcbiAgICovXG4gIGdldChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICAvKipcbiAgICogR0VUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBKU09OYCDDp8KxwrvDpcKewotcbiAgICovXG4gIGdldChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcblxuICAvKipcbiAgICogR0VUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBKU09OYCDDp8KxwrvDpcKewotcbiAgICovXG4gIGdldDxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj47XG5cbiAgLyoqXG4gICAqIEdFVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgYW55YCDDp8KxwrvDpcKewotcbiAgICovXG4gIGdldChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIEdFVCDDqMKvwrfDpsKxwoJcbiAgICovXG4gIGdldChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgJ0dFVCcsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcG9zdFxuXG4gIC8qKlxuICAgKiBQT1NUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBzdHJpbmdgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcG9zdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIFBPU1TDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEh0dHBSZXNwb25zZTxKU09OPmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBwb3N0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcblxuICAvKipcbiAgICogUE9TVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBwb3N0PFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuXG4gIC8qKlxuICAgKiBQT1NUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBhbnlgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcG9zdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogUE9TVCDDqMKvwrfDpsKxwoJcbiAgICovXG4gIHBvc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICAnUE9TVCcsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBkZWxldGVcblxuICAvKipcbiAgICogREVMRVRFw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBzdHJpbmdgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgZGVsZXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBERUxFVEXDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEpTT05gIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgZGVsZXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xuXG4gIC8qKlxuICAgKiBERUxFVEXDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYGFueWAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBkZWxldGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBERUxFVEUgw6jCr8K3w6bCscKCXG4gICAqL1xuICBkZWxldGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgICdERUxFVEUnLFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvKipcbiAgICogYGpzb25wYCDDqMKvwrfDpsKxwoJcbiAgICpcbiAgICogQHBhcmFtIHVybCBVUkzDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIHBhcmFtcyDDqMKvwrfDpsKxwoLDpcKPwoLDpsKVwrBcbiAgICogQHBhcmFtIGNhbGxiYWNrUGFyYW0gQ0FMTEJBQ0vDpcKAwrzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppKU09OUF9DQUxMQkFDS1xuICAgKi9cbiAganNvbnAoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zPzogYW55LFxuICAgIGNhbGxiYWNrUGFyYW06IHN0cmluZyA9ICdKU09OUF9DQUxMQkFDSycsXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5qc29ucCh0aGlzLmFwcGxpZWRVcmwodXJsLCBwYXJhbXMpLCBjYWxsYmFja1BhcmFtKS5waXBlKFxuICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgdGhpcy5lbmQoKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcihyZXMgPT4ge1xuICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihyZXMpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gcGF0Y2hcblxuICAvKipcbiAgICogUEFUQ0jDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYHN0cmluZ2Agw6fCscK7w6XCnsKLXG4gICAqL1xuICBwYXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIFBBVENIw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBIdHRwUmVzcG9uc2U8SlNPTj5gIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcGF0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xuXG4gIC8qKlxuICAgKiBQQVRDSMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBwYXRjaDxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcblxuICAvKipcbiAgICogUEFUQ0jDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYGFueWAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBwYXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogUEFUQ0ggw6jCr8K3w6bCscKCXG4gICAqL1xuICBwYXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgICdQQVRDSCcsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBwdXRcblxuICAvKipcbiAgICogUFVUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBzdHJpbmdgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcHV0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICAvKipcbiAgICogUFVUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBIdHRwUmVzcG9uc2U8SlNPTj5gIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcHV0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcblxuICAvKipcbiAgICogUFVUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBKU09OYCDDp8KxwrvDpcKewotcbiAgICovXG4gIHB1dDxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcblxuICAvKipcbiAgICogUFVUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBhbnlgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcHV0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk/OiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBQVVQgw6jCr8K3w6bCscKCXG4gICAqL1xuICBwdXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICAnUFVUJyxcbiAgICAgIHVybCxcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvKipcbiAgICogYHJlcXVlc3RgIMOowq/Ct8OmwrHCglxuICAgKlxuICAgKiBAcGFyYW0gbWV0aG9kIMOowq/Ct8OmwrHCgsOmwpbCucOmwrPClcOnwrHCu8Olwp7Ci1xuICAgKiBAcGFyYW0gdXJsIFVSTMOlwpzCsMOlwp3CgFxuICAgKiBAcGFyYW0gb3B0aW9ucyDDpcKPwoLDpsKVwrBcbiAgICovXG4gIHJlcXVlc3Q8Uj4oXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGJvZHk/OiBhbnk7XG4gICAgICBoZWFkZXJzPzpcbiAgICAgICAgfCBIdHRwSGVhZGVyc1xuICAgICAgICB8IHtcbiAgICAgICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgICAgIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcGFyYW1zPzpcbiAgICAgICAgfCBIdHRwUGFyYW1zXG4gICAgICAgIHwge1xuICAgICAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgICAgICB9O1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxSPjtcbiAgLyoqXG4gICAqIGByZXF1ZXN0YCDDqMKvwrfDpsKxwoJcbiAgICpcbiAgICogQHBhcmFtIG1ldGhvZCDDqMKvwrfDpsKxwoLDpsKWwrnDpsKzwpXDp8KxwrvDpcKewotcbiAgICogQHBhcmFtIHVybCBVUkzDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIG9wdGlvbnMgw6XCj8KCw6bClcKwXG4gICAqL1xuICByZXF1ZXN0KFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBib2R5PzogYW55O1xuICAgICAgaGVhZGVycz86XG4gICAgICAgIHwgSHR0cEhlYWRlcnNcbiAgICAgICAgfCB7XG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgICAgICB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHBhcmFtcz86XG4gICAgICAgIHwgSHR0cFBhcmFtc1xuICAgICAgICB8IHtcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICAgICAgfTtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5iZWdpbigpO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy5wYXJhbXMpIG9wdGlvbnMucGFyYW1zID0gdGhpcy5wYXJzZVBhcmFtcyhvcHRpb25zLnBhcmFtcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgb3B0aW9ucykucGlwZShcbiAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IocmVzID0+IHtcbiAgICAgICAgdGhpcy5lbmQoKTtcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IocmVzKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCBkaXN0YW5jZUluV29yZHNUb05vdyBmcm9tICdkYXRlLWZucy9kaXN0YW5jZV9pbl93b3Jkc190b19ub3cnO1xuXG5AUGlwZSh7IG5hbWU6ICdfZGF0ZScgfSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oXG4gICAgdmFsdWU6IERhdGUgfCBzdHJpbmcgfCBudW1iZXIsXG4gICAgZm9ybWF0U3RyaW5nOiBzdHJpbmcgPSAnWVlZWS1NTS1ERCBISDptbScsXG4gICk6IHN0cmluZyB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoZm9ybWF0U3RyaW5nID09PSAnZm4nKSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZUluV29yZHNUb05vdyh2YWx1ZSwge1xuICAgICAgICAgIGxvY2FsZTogKHdpbmRvdyBhcyBhbnkpLl9fbG9jYWxlX18sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgIWlzTmFOKCt2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSArdmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm9ybWF0KHZhbHVlLCBmb3JtYXRTdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXJyZW5jeVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vKipcbiAqIEBzZWUgaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9zZXJ2aWNlLXBpcGUjJUU4JUI0JUE3JUU1JUI4JTgxLV9jdXJyZW50eVxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dXNlLXBpcGUtdHJhbnNmb3JtLWludGVyZmFjZVxuQFBpcGUoeyBuYW1lOiAnX2N1cnJlbmN5JyB9KVxuZXhwb3J0IGNsYXNzIENOQ3VycmVuY3lQaXBlIGV4dGVuZHMgQ3VycmVuY3lQaXBlIHtcbiAgdHJhbnNmb3JtKFxuICAgIHZhbHVlOiBhbnksXG4gICAgY3VycmVuY3lDb2RlOiBzdHJpbmcgPSAnw6/Cv8KlJyxcbiAgICBkaXNwbGF5OiAnY29kZScgfCAnc3ltYm9sJyB8ICdzeW1ib2wtbmFycm93JyB8IGJvb2xlYW4gPSAnY29kZScsXG4gICAgZGlnaXRzPzogc3RyaW5nLFxuICApOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKHZhbHVlLCBjdXJyZW5jeUNvZGUsIDxhbnk+ZGlzcGxheSwgZGlnaXRzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBzZWUgaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9jb21tb24jJUU1JThGJUFGJUU4JUJGJUFEJUU0JUJCJUEzLWtleXNcbiAqL1xuQFBpcGUoeyBuYW1lOiAna2V5cycgfSlcbmV4cG9ydCBjbGFzcyBLZXlzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwga2V5SXNOdW1iZXI6IGJvb2xlYW4gPSBmYWxzZSk6IGFueVtdIHtcbiAgICBjb25zdCByZXQgPSBbXTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xuICAgICAgcmV0LnB1c2goeyBrZXk6IGtleUlzTnVtYmVyID8gK2tleSA6IGtleSwgdmFsdWU6IHZhbHVlW2tleV0gfSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3Mvc2VydmljZS1waXBlIyVFNSVCRSVCRCVFNyVBQiVBMC15blxuICovXG5AUGlwZSh7IG5hbWU6ICd5bicgfSlcbmV4cG9ydCBjbGFzcyBZTlBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBib29sZWFuLCB5ZXM6IHN0cmluZywgbm86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utc3VjY2Vzc1wiPicgKyAoeWVzIHx8ICfDpsKYwq8nKSArICc8L3NwYW4+JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLWVycm9yXCI+JyArIChubyB8fCAnw6XCkMKmJykgKyAnPC9zcGFuPic7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2UgfSBmcm9tICcuL2kxOG4nO1xuXG5AUGlwZSh7IG5hbWU6ICdpMThuJyB9KVxuZXhwb3J0IGNsYXNzIEkxOG5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgcHJpdmF0ZSBpMThuOiBBbGFpbkkxOE5TZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybShrZXk6IHN0cmluZywgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QsIGlzU2FmZT86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmkxOG4uZmFueWkoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcywgaXNTYWZlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnLi93aW5fdG9rZW5zJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICcuL2xvY2FsZS9sb2NhbGUubW9kdWxlJztcblxuLy8gI3JlZ2lvbiBpbXBvcnRcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2VGYWtlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pMThuL2kxOG4nO1xuXG5pbXBvcnQgeyBNb2RhbEhlbHBlciB9IGZyb20gJy4vc2VydmljZXMvbW9kYWwvbW9kYWwuaGVscGVyJztcbmltcG9ydCB7IERyYXdlckhlbHBlciB9IGZyb20gJy4vc2VydmljZXMvZHJhd2VyL2RyYXdlci5oZWxwZXInO1xuY29uc3QgSEVMUEVSUyA9IFtNb2RhbEhlbHBlciwgRHJhd2VySGVscGVyXTtcblxuLy8gY29tcG9uZW50c1xuY29uc3QgQ09NUE9ORU5UUyA9IFtdO1xuXG4vLyBwaXBlc1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICcuL3BpcGVzL2RhdGUvZGF0ZS5waXBlJztcbmltcG9ydCB7IENOQ3VycmVuY3lQaXBlIH0gZnJvbSAnLi9waXBlcy9jdXJyZW5jeS9jbi1jdXJyZW5jeS5waXBlJztcbmltcG9ydCB7IEtleXNQaXBlIH0gZnJvbSAnLi9waXBlcy9rZXlzL2tleXMucGlwZSc7XG5pbXBvcnQgeyBZTlBpcGUgfSBmcm9tICcuL3BpcGVzL3luL3luLnBpcGUnO1xuaW1wb3J0IHsgSTE4blBpcGUgfSBmcm9tICcuL3NlcnZpY2VzL2kxOG4vaTE4bi5waXBlJztcbmNvbnN0IFBJUEVTID0gW0RhdGVQaXBlLCBDTkN1cnJlbmN5UGlwZSwgS2V5c1BpcGUsIFlOUGlwZSwgSTE4blBpcGVdO1xuXG4vLyAjZW5kcmVnaW9uXG5cbi8vICNyZWdpb24gYWxsIGRlbG9uIHVzZWQgaWNvbnNcblxuaW1wb3J0IHsgTnpJY29uU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHtcbiAgQmVsbE91dGxpbmUsXG4gIEZpbHRlckZpbGwsXG4gIENhcmV0VXBPdXRsaW5lLFxuICBDYXJldERvd25PdXRsaW5lLFxuICBEZWxldGVPdXRsaW5lLFxuICBQbHVzT3V0bGluZSxcbiAgSW5ib3hPdXRsaW5lLFxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyL2ljb25zJztcbmNvbnN0IElDT05TID0gW1xuICBCZWxsT3V0bGluZSxcbiAgRmlsdGVyRmlsbCxcbiAgQ2FyZXRVcE91dGxpbmUsXG4gIENhcmV0RG93bk91dGxpbmUsXG4gIERlbGV0ZU91dGxpbmUsXG4gIFBsdXNPdXRsaW5lLFxuICBJbmJveE91dGxpbmUsXG5dO1xuXG4vLyAjZW5kcmVnaW9uXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgT3ZlcmxheU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLlBJUEVTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFMsIC4uLlBJUEVTLCBEZWxvbkxvY2FsZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFsYWluVGhlbWVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihpY29uU3J2OiBOekljb25TZXJ2aWNlKSB7XG4gICAgaWNvblNydi5hZGRJY29uKC4uLklDT05TKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQWxhaW5UaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFdJTkRPVywgdXNlVmFsdWU6IHdpbmRvdyB9LFxuICAgICAgICB7IHByb3ZpZGU6IEFMQUlOX0kxOE5fVE9LRU4sIHVzZUNsYXNzOiBBbGFpbkkxOE5TZXJ2aWNlRmFrZSB9LFxuICAgICAgICAuLi5IRUxQRVJTLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQWxhaW5UaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWy4uLkhFTFBFUlNdLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IFZlcnNpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSBuZXcgVmVyc2lvbignMC4wLjAtUExBQ0VIT0xERVInKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQWEsTUFBTSxHQUFHLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQzs7Ozs7Ozs7O0FDRmxEOztJQUNFLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7O0lBQzVDLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcs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