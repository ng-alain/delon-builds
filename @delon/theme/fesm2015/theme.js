import { InjectionToken, Injectable, Pipe, Inject, NgModule, Version, Optional, Injector, SkipSelf, defineInjectable, inject, INJECTOR } from '@angular/core';
import { BehaviorSubject, Subject, Observable, throwError } from 'rxjs';
import { filter, share, tap, catchError } from 'rxjs/operators';
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
                    value = value
                        .split('-')
                        .slice(1)
                        .join('-');
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
            item.group = item.group !== false;
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
     * @param {?} url
     * @param {?=} recursive
     * @param {?=} cb
     * @return {?}
     */
    getHit(url, recursive = false, cb = null) {
        /** @type {?} */
        let item = null;
        while (!item && url) {
            this.visit(i => {
                if (cb) {
                    cb(i);
                }
                if (i.link != null && i.link === url) {
                    item = i;
                }
            });
            if (!recursive)
                break;
            url = url
                .split('/')
                .slice(0, -1)
                .join('/');
        }
        return item;
    }
    /**
     * 根据URL设置菜单 `_open` 属性
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     * @param {?} url
     * @param {?=} recursive
     * @return {?}
     */
    openedByUrl(url, recursive = false) {
        if (!url)
            return;
        /** @type {?} */
        let findItem = this.getHit(url, recursive, i => (i["_open"] = false));
        if (!findItem)
            return;
        do {
            findItem["_open"] = true;
            findItem = findItem["__parent"];
        } while (findItem);
    }
    /**
     * 根据url获取菜单列表
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     * @param {?} url
     * @param {?=} recursive
     * @return {?}
     */
    getPathByUrl(url, recursive = false) {
        /** @type {?} */
        const ret = [];
        /** @type {?} */
        let item = this.getHit(url, recursive);
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
class YNPipe {
    /**
     * @param {?} dom
     */
    constructor(dom) {
        this.dom = dom;
    }
    /**
     * @param {?} value
     * @param {?} yes
     * @param {?} no
     * @return {?}
     */
    transform(value, yes, no) {
        return this.dom.bypassSecurityTrustHtml(value ?
            `<i class="text-blue" title="${yes || '是'}"><svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg></i>` :
            `<i class="text-grey" title="${no || '否'}"><svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></i>`);
    }
}
YNPipe.decorators = [
    { type: Pipe, args: [{ name: 'yn' },] }
];
/** @nocollapse */
YNPipe.ctorParameters = () => [
    { type: DomSanitizer }
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
class HTMLPipe {
    /**
     * @param {?} dom
     */
    constructor(dom) {
        this.dom = dom;
    }
    /**
     * @param {?} html
     * @return {?}
     */
    transform(html) {
        return html ? /** @type {?} */ (this.dom.bypassSecurityTrustHtml(html)) : '';
    }
}
HTMLPipe.decorators = [
    { type: Pipe, args: [{ name: 'html' },] }
];
/** @nocollapse */
HTMLPipe.ctorParameters = () => [
    { type: DomSanitizer }
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
const PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, I18nPipe, HTMLPipe];
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
const VERSION = new Version('2.0.0-rc.1-5ece446');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { WINDOW, preloaderFinished, TitleService, ALAIN_I18N_TOKEN, AlainI18NServiceFake, _HttpClient, DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, AlainThemeConfig, AlainThemeModule, VERSION, MenuService, ScrollService, SettingsService, REP_MAX, ResponsiveService, enUS as en_US, zhCN as zh_CN, zhTW as zh_TW, DELON_LOCALE, DELON_LOCALE_SERVICE_PROVIDER_FACTORY, DelonLocaleService, DELON_LOCALE_SERVICE_PROVIDER, DelonLocaleModule, ModalHelper, DrawerHelper, HTMLPipe as ɵb, I18nPipe as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi90aGVtZS9zcmMvd2luX3Rva2Vucy50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9wcmVsb2FkZXIvcHJlbG9hZGVyLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL2kxOG4vaTE4bi50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9tZW51L21lbnUuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9zY3JvbGwvc2Nyb2xsLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy90aGVtZS5jb25maWcudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvcmVzcG9uc2l2ZS9yZXNwb25zaXZlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL3RpdGxlL3RpdGxlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xvY2FsZS50b2tlbnMudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xhbmd1YWdlcy96aC1DTi50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9sb2NhbGUvbG9jYWxlLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xvY2FsZS5tb2R1bGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xhbmd1YWdlcy9lbi1VUy50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9sb2NhbGUvbGFuZ3VhZ2VzL3poLVRXLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlci50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlci50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9odHRwL2h0dHAuY2xpZW50LnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3BpcGVzL2RhdGUvZGF0ZS5waXBlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3BpcGVzL2N1cnJlbmN5L2NuLWN1cnJlbmN5LnBpcGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvcGlwZXMva2V5cy9rZXlzLnBpcGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvcGlwZXMveW4veW4ucGlwZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9pMThuL2kxOG4ucGlwZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9waXBlcy9odG1sL2h0bWwucGlwZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy90aGVtZS5tb2R1bGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvdmVyc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgV0lORE9XID0gbmV3IEluamVjdGlvblRva2VuKCdXaW5kb3cnKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkZXJGaW5pc2hlZCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcicpO1xuXG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgLy8gcHJlbG9hZGVyIHZhbHVlIG51bGwgd2hlbiBydW5uaW5nIC0taG1yXG4gICAgaWYgKCFwcmVsb2FkZXIpIHJldHVybjtcbiAgICBwcmVsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgcHJlbG9hZGVyLmNsYXNzTmFtZSA9ICdwcmVsb2FkZXItaGlkZGVuJztcbiAgICB9KTtcblxuICAgIHByZWxvYWRlci5jbGFzc05hbWUgKz0gJyBwcmVsb2FkZXItaGlkZGVuLWFkZCBwcmVsb2FkZXItaGlkZGVuLWFkZC1hY3RpdmUnO1xuICB9XG5cbiAgKDxhbnk+d2luZG93KS5hcHBCb290c3RyYXAgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZW1vdmUoKTtcbiAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICB9LCAxMDApO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsYWluSTE4TlNlcnZpY2Uge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgLyoqXG4gICAqIMOlwo/CmMOmwpvCtMOowq/CrcOowqjCgFxuICAgKiBAcGFyYW0gbGFuZyDDqMKvwq3DqMKowoDDpMK7wqPDp8KgwoFcbiAgICogQHBhcmFtIGVtaXQgw6bCmMKvw6XCkMKmw6jCp8Kmw6XCj8KRIGBjaGFuZ2Vgw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKadHJ1ZVxuICAgKi9cbiAgdXNlKGxhbmc6IHN0cmluZywgZW1pdD86IGJvb2xlYW4pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiDDqMK/wpTDpcKbwp7DpcK9wpPDpcKJwo3DqMKvwq3DqMKowoDDpcKIwpfDqMKhwqhcbiAgICovXG4gIGdldExhbmdzKCk6IGFueVtdO1xuXG4gIC8qKlxuICAgKiDDp8K/wrvDqMKvwpFcbiAgICogLSBgaW50ZXJwb2xhdGVQYXJhbXNgIMOmwqjCocOmwp3Cv8OmwonCgMOpwpzCgMOowqbCgcOnwprChMOlwo/CgsOmwpXCsMOlwq/CucOowrHCoVxuICAgKiAtIGBpc1NhZmVgIMOmwpjCr8OlwpDCpsOowr/ClMOlwpvCnsOlwq7CicOlwoXCqMOlwq3Cl8OnwqzCpsOvwrzCjMOowofCqsOlworCqMOowrDCg8OnwpTCqCBgYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWxgXG4gICAqL1xuICBmYW55aShrZXk6IHN0cmluZywgaW50ZXJwb2xhdGVQYXJhbXM/OiBPYmplY3QsIGlzU2FmZT86IGJvb2xlYW4pOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIMOowrDCg8OnwpTCqCBgdXNlYCDDqMKnwqbDpcKPwpHDpcKPwpjDpsKbwrTDqcKAwprDp8KfwqVcbiAgICovXG4gIHJlYWRvbmx5IGNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xufVxuXG5leHBvcnQgY29uc3QgQUxBSU5fSTE4Tl9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBbGFpbkkxOE5TZXJ2aWNlPihcbiAgJ2FsYWluVHJhbnNsYXRvclRva2VuJyxcbik7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQWxhaW5JMThOU2VydmljZUZha2UgaW1wbGVtZW50cyBBbGFpbkkxOE5TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlsdGVyKHcgPT4gdyAhPSBudWxsKSk7XG4gIH1cblxuICB1c2UobGFuZzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQobGFuZyk7XG4gIH1cblxuICBnZXRMYW5ncygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZmFueWkoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4ga2V5O1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuXG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9pMThuJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTWVudVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9jaGFuZ2UkOiBCZWhhdmlvclN1YmplY3Q8TWVudVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TWVudVtdPihbXSk7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGRhdGE6IE1lbnVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbFNlcnZpY2U6IEFDTFNlcnZpY2UsXG4gICkge1xuICAgIGlmICh0aGlzLmkxOG5TcnYpXG4gICAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuU3J2LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXN1bWUoKSk7XG4gIH1cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TWVudVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZSQucGlwZShzaGFyZSgpKTtcbiAgfVxuXG4gIHZpc2l0KGNhbGxiYWNrOiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKSB7XG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBNZW51W10sIHBhcmVudE1lbnU6IE1lbnUsIGRlcHRoOiBudW1iZXIpID0+IHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICAgIGNhbGxiYWNrKGl0ZW0sIHBhcmVudE1lbnUsIGRlcHRoKTtcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5GbihpdGVtLmNoaWxkcmVuLCBpdGVtLCBkZXB0aCArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpbkZuKHRoaXMuZGF0YSwgbnVsbCwgMCk7XG4gIH1cblxuICBhZGQoaXRlbXM6IE1lbnVbXSkge1xuICAgIHRoaXMuZGF0YSA9IGl0ZW1zO1xuICAgIHRoaXMucmVzdW1lKCk7XG4gIH1cblxuICAvKipcbiAgICogw6nCh8KNw6fCvcKuw6jCj8Kcw6XCjcKVw6/CvMKMw6XCj8Kvw6jCg8K9STE4TsOjwoDCgcOnwpTCqMOmwojCt8Omwp3Cg8OpwpnCkMOlwo/CmMOlworCqMOmwpfCtsOpwpzCgMOowqbCgcOowrDCg8OnwpTCqMOlwojCt8OmwpbCsFxuICAgKi9cbiAgcmVzdW1lKGNhbGxiYWNrPzogKGl0ZW06IE1lbnUsIHBhcmVudE1lbnVtOiBNZW51LCBkZXB0aD86IG51bWJlcikgPT4gdm9pZCkge1xuICAgIGxldCBpID0gMTtcbiAgICBjb25zdCBzaG9ydGN1dHM6IE1lbnVbXSA9IFtdO1xuICAgIHRoaXMudmlzaXQoKGl0ZW0sIHBhcmVudCwgZGVwdGgpID0+IHtcbiAgICAgIGl0ZW0uX19pZCA9IGkrKztcbiAgICAgIGl0ZW0uX19wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICBpdGVtLl9kZXB0aCA9IGRlcHRoO1xuXG4gICAgICBpZiAoIWl0ZW0ubGluaykgaXRlbS5saW5rID0gJyc7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0ubGlua0V4YWN0ID09PSAndW5kZWZpbmVkJykgaXRlbS5saW5rRXhhY3QgPSBmYWxzZTtcbiAgICAgIGlmICghaXRlbS5leHRlcm5hbExpbmspIGl0ZW0uZXh0ZXJuYWxMaW5rID0gJyc7XG5cbiAgICAgIC8vIGJhZGdlXG4gICAgICBpZiAoaXRlbS5iYWRnZSkge1xuICAgICAgICBpZiAoaXRlbS5iYWRnZURvdCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGl0ZW0uYmFkZ2VEb3QgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWl0ZW0uYmFkZ2VTdGF0dXMpIHtcbiAgICAgICAgICBpdGVtLmJhZGdlU3RhdHVzID0gJ2Vycm9yJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpdGVtLl90eXBlID0gaXRlbS5leHRlcm5hbExpbmsgPyAyIDogMTtcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBpdGVtLl90eXBlID0gMztcbiAgICAgIH1cblxuICAgICAgLy8gaWNvblxuICAgICAgaWYgKHR5cGVvZiBpdGVtLmljb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCB0eXBlID0gJ2NsYXNzJztcbiAgICAgICAgbGV0IHZhbHVlID0gaXRlbS5pY29uO1xuICAgICAgICAvLyBjb21wYXRpYmxlIGBhbnRpY29uIGFudGljb24tdXNlcmBcbiAgICAgICAgaWYgKH5pdGVtLmljb24uaW5kZXhPZihgYW50aWNvbi1gKSkge1xuICAgICAgICAgIHR5cGUgPSAnaWNvbic7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgICAgICAgLnNwbGl0KCctJylcbiAgICAgICAgICAgIC5zbGljZSgxKVxuICAgICAgICAgICAgLmpvaW4oJy0nKTtcbiAgICAgICAgfSBlbHNlIGlmICgvXmh0dHBzPzpcXC9cXC8vLnRlc3QoaXRlbS5pY29uKSkge1xuICAgICAgICAgIHR5cGUgPSAnaW1nJztcbiAgICAgICAgfVxuICAgICAgICBpdGVtLmljb24gPSB7IHR5cGUsIHZhbHVlIH0gYXMgYW55O1xuICAgICAgfVxuXG4gICAgICAvLyBzaG9ydGN1dFxuICAgICAgaWYgKHBhcmVudCAmJiBpdGVtLnNob3J0Y3V0ID09PSB0cnVlICYmIHBhcmVudC5zaG9ydGN1dFJvb3QgIT09IHRydWUpXG4gICAgICAgIHNob3J0Y3V0cy5wdXNoKGl0ZW0pO1xuXG4gICAgICBpdGVtLnRleHQgPVxuICAgICAgICBpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2ID8gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bikgOiBpdGVtLnRleHQ7XG5cbiAgICAgIC8vIGdyb3VwXG4gICAgICBpdGVtLmdyb3VwID0gaXRlbS5ncm91cCAhPT0gZmFsc2U7XG5cbiAgICAgIC8vIGhpZGRlblxuICAgICAgaXRlbS5faGlkZGVuID0gdHlwZW9mIGl0ZW0uaGlkZSA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IGl0ZW0uaGlkZTtcblxuICAgICAgLy8gYWNsXG4gICAgICBpZiAoaXRlbS5hY2wgJiYgdGhpcy5hY2xTZXJ2aWNlKSB7XG4gICAgICAgIGl0ZW0uX2hpZGRlbiA9ICF0aGlzLmFjbFNlcnZpY2UuY2FuKGl0ZW0uYWNsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhpdGVtLCBwYXJlbnQsIGRlcHRoKTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZFNob3J0Y3V0KHNob3J0Y3V0cyk7XG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogw6XCisKgw6jCvcK9w6XCv8Krw6bCjcK3w6jCj8Kcw6XCjcKVw6/CvMKMw6XCisKgw6jCvcK9w6TCvcKNw6fCvcKuw6jCp8KEw6XCiMKZw6XCpsKCw6TCuMKLw6/CvMKaXG4gICAqIDHDo8KAwoHDp8K7wp/DpMK4woDDpcKcwqjDpMK4wovDpsKgwocww6fCmsKEw6jCisKCw6fCgsK5w6TCuMKLw6/CvMKIw6XCjcKzw6PCgMKQw6TCuMK7w6XCr8K8w6jCiMKqw6PCgMKRw6jCisKCw6fCgsK5w6TCuMKLw6bClsK5w6/CvMKJXG4gICAqICAgICAgMcOjwoDCgcOowovCpSBjaGlsZHJlbiDDpcKtwpjDpcKcwqggw6PCgMKQc2hvcnRjdXRSb290OiB0cnVlw6PCgMKRw6XCiMKZw6bCnMKAw6TCvMKYw6XChcKIw6PCgMKQw6bCjsKow6jCjcKQw6PCgMKRw6jCv8KZw6fCp8KNw6bClsK5w6XCvMKPXG4gICAqICAgICAgMsOjwoDCgcOlwpDCpsOlwojCmcOmwp/CpcOmwonCvsOlwrjCpsOmwpzCicOjwoDCkGRhc2hib2FyZMOjwoDCkcOlwq3Cl8OmwqDCt8OpwpPCvsOmwo7CpcOvwrzCjMOowovCpcOlwq3CmMOlwpzCqMOlwojCmcOlwpzCqMOmwq3CpMOowo/CnMOlwo3ClcOnwprChMOkwrjCi8OmwpbCucOlwojCm8OlwrvCusOlwr/Cq8Omwo3Ct8OlwoXCpcOlwo/Co1xuICAgKiAgICAgIDPDo8KAwoHDpcKQwqbDpcKIwpnDpsKUwr7DpcKcwqgww6jCisKCw6fCgsK5w6TCvcKNw6fCvcKuXG4gICAqL1xuICBwcml2YXRlIGxvYWRTaG9ydGN1dChzaG9ydGN1dHM6IE1lbnVbXSkge1xuICAgIGlmIChzaG9ydGN1dHMubGVuZ3RoID09PSAwIHx8IHRoaXMuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBscyA9IHRoaXMuZGF0YVswXS5jaGlsZHJlbjtcbiAgICBsZXQgcG9zID0gbHMuZmluZEluZGV4KHcgPT4gdy5zaG9ydGN1dFJvb3QgPT09IHRydWUpO1xuICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICBwb3MgPSBscy5maW5kSW5kZXgodyA9PiB3LmxpbmsuaW5jbHVkZXMoJ2Rhc2hib2FyZCcpKTtcbiAgICAgIHBvcyA9IChwb3MgIT09IC0xID8gcG9zIDogLTEpICsgMTtcbiAgICAgIGNvbnN0IHNob3J0Y3V0TWVudSA9IDxNZW51PntcbiAgICAgICAgdGV4dDogJ8Olwr/Cq8Omwo3Ct8Oowo/CnMOlwo3ClScsXG4gICAgICAgIGkxOG46ICdzaG9ydGN1dCcsXG4gICAgICAgIGljb246ICdpY29uLXJvY2tldCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIH07XG4gICAgICB0aGlzLmRhdGFbMF0uY2hpbGRyZW4uc3BsaWNlKHBvcywgMCwgc2hvcnRjdXRNZW51KTtcbiAgICB9XG4gICAgbGV0IF9kYXRhID0gdGhpcy5kYXRhWzBdLmNoaWxkcmVuW3Bvc107XG4gICAgaWYgKF9kYXRhLmkxOG4gJiYgdGhpcy5pMThuU3J2KSBfZGF0YS50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKF9kYXRhLmkxOG4pO1xuICAgIF9kYXRhID0gT2JqZWN0LmFzc2lnbihfZGF0YSwge1xuICAgICAgc2hvcnRjdXRSb290OiB0cnVlLFxuICAgICAgX3R5cGU6IDMsXG4gICAgICBfX2lkOiAtMSxcbiAgICAgIF9kZXB0aDogMSxcbiAgICB9KTtcbiAgICBfZGF0YS5jaGlsZHJlbiA9IHNob3J0Y3V0cy5tYXAoaSA9PiB7XG4gICAgICBpLl9kZXB0aCA9IDI7XG4gICAgICByZXR1cm4gaTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBtZW51cygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwrjChcOnwqnCusOowo/CnMOlwo3ClVxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5fY2hhbmdlJC5uZXh0KHRoaXMuZGF0YSk7XG4gIH1cblxuICBwcml2YXRlIGdldEhpdCh1cmw6IHN0cmluZywgcmVjdXJzaXZlID0gZmFsc2UsIGNiOiAoaTogTWVudSkgPT4gdm9pZCA9IG51bGwpIHtcbiAgICBsZXQgaXRlbTogTWVudSA9IG51bGw7XG5cbiAgICB3aGlsZSAoIWl0ZW0gJiYgdXJsKSB7XG4gICAgICB0aGlzLnZpc2l0KGkgPT4ge1xuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICBjYihpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaS5saW5rICE9IG51bGwgJiYgaS5saW5rID09PSB1cmwpIHtcbiAgICAgICAgICBpdGVtID0gaTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVjdXJzaXZlKSBicmVhaztcblxuICAgICAgdXJsID0gdXJsXG4gICAgICAgIC5zcGxpdCgnLycpXG4gICAgICAgIC5zbGljZSgwLCAtMSlcbiAgICAgICAgLmpvaW4oJy8nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKgwrnDpsKNwq5VUkzDqMKuwr7Dp8K9wq7DqMKPwpzDpcKNwpUgYF9vcGVuYCDDpcKxwp7DpsKAwqdcbiAgICogLSDDqMKLwqUgYHJlY3Vyc2l2ZTogdHJ1ZWAgw6XCiMKZw6TCvMKaw6jCh8Kqw6XCisKow6XCkMKRw6TCuMKKw6nCgMKSw6XCvcKSw6bCn8Klw6bCicK+XG4gICAqICAtIMOowo/CnMOlwo3ClcOmwpXCsMOmwo3CrsOmwrrCkMOlwozChcOlwpDCqyBgL3dhcmVgw6/CvMKMw6XCiMKZIGAvd2FyZS8xYCDDpMK5wp/DqMKnwobDpMK4wrogYC93YXJlYCDDqcKhwrlcbiAgICovXG4gIG9wZW5lZEJ5VXJsKHVybDogc3RyaW5nLCByZWN1cnNpdmUgPSBmYWxzZSkge1xuICAgIGlmICghdXJsKSByZXR1cm47XG5cbiAgICBsZXQgZmluZEl0ZW0gPSB0aGlzLmdldEhpdCh1cmwsIHJlY3Vyc2l2ZSwgaSA9PiAoaS5fb3BlbiA9IGZhbHNlKSk7XG4gICAgaWYgKCFmaW5kSXRlbSkgcmV0dXJuO1xuXG4gICAgZG8ge1xuICAgICAgZmluZEl0ZW0uX29wZW4gPSB0cnVlO1xuICAgICAgZmluZEl0ZW0gPSBmaW5kSXRlbS5fX3BhcmVudDtcbiAgICB9IHdoaWxlIChmaW5kSXRlbSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCoMK5w6bCjcKudXJsw6jCjsK3w6XCj8KWw6jCj8Kcw6XCjcKVw6XCiMKXw6jCocKoXG4gICAqIC0gw6jCi8KlIGByZWN1cnNpdmU6IHRydWVgIMOlwojCmcOkwrzCmsOowofCqsOlworCqMOlwpDCkcOkwrjCisOpwoDCksOlwr3CksOmwp/CpcOmwonCvlxuICAgKiAgLSDDqMKPwpzDpcKNwpXDpsKVwrDDpsKNwq7DpsK6wpDDpcKMwoXDpcKQwqsgYC93YXJlYMOvwrzCjMOlwojCmSBgL3dhcmUvMWAgw6TCucKfw6jCp8KGw6TCuMK6IGAvd2FyZWAgw6nCocK5XG4gICAqL1xuICBnZXRQYXRoQnlVcmwodXJsOiBzdHJpbmcsIHJlY3Vyc2l2ZSA9IGZhbHNlKTogTWVudVtdIHtcbiAgICBjb25zdCByZXQ6IE1lbnVbXSA9IFtdO1xuICAgIGxldCBpdGVtID0gdGhpcy5nZXRIaXQodXJsLCByZWN1cnNpdmUpO1xuXG4gICAgaWYgKCFpdGVtKSByZXR1cm4gcmV0O1xuXG4gICAgZG8ge1xuICAgICAgcmV0LnNwbGljZSgwLCAwLCBpdGVtKTtcbiAgICAgIGl0ZW0gPSBpdGVtLl9fcGFyZW50O1xuICAgIH0gd2hpbGUgKGl0ZW0pO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2NoYW5nZSQudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5pMThuJCkgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJy4uLy4uL3dpbl90b2tlbnMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFdJTkRPVykgcHJpdmF0ZSB3aW46IGFueSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICApIHt9XG5cbiAgLyoqXG4gICAqIMOowq7CvsOnwr3CrsOmwrvCmsOlworCqMOmwp3CocOowofCs8OmwozCh8Olwq7CmsOlwoXCg8OnwrTCoFxuICAgKiBAcGFyYW0gZWxlbWVudCDDpsKMwofDpcKuwprDpcKFwoPDp8K0wqDDr8K8wozDqcK7wpjDqMKuwqQgYGRvY3VtZW50LmJvZHlgXG4gICAqIEBwYXJhbSB0b3BPZmZzZXQgw6XCgcKPw6fCp8K7w6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkIGAwYFxuICAgKi9cbiAgc2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQ/OiBFbGVtZW50LCB0b3BPZmZzZXQgPSAwKSB7XG4gICAgaWYgKCFlbGVtZW50KSBlbGVtZW50ID0gdGhpcy5kb2MuYm9keTtcblxuICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcblxuICAgIGNvbnN0IHcgPSB0aGlzLndpbjtcbiAgICBpZiAodyAmJiB3LnNjcm9sbEJ5KSB7XG4gICAgICB3LnNjcm9sbEJ5KDAsIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gdG9wT2Zmc2V0KTtcblxuICAgICAgaWYgKHcucGFnZVlPZmZzZXQgPCAyMCkge1xuICAgICAgICB3LnNjcm9sbEJ5KDAsIC13LnBhZ2VZT2Zmc2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogw6bCu8Kaw6XCisKow6jCh8Kzw6nCocK2w6nCg8KoXG4gICAqIEBwYXJhbSB0b3BPZmZzZXQgw6XCgcKPw6fCp8K7w6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkIGAwYFxuICAgKi9cbiAgc2Nyb2xsVG9Ub3AodG9wT2Zmc2V0ID0gMCkge1xuICAgIHRoaXMuc2Nyb2xsVG9FbGVtZW50KHRoaXMuZG9jLmJvZHksIHRvcE9mZnNldCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFwcCwgTGF5b3V0LCBVc2VyLCBTZXR0aW5nc05vdGlmeSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuY29uc3QgTEFZT1VUX0tFWSA9ICdsYXlvdXQnO1xuY29uc3QgVVNFUl9LRVkgPSAndXNlcic7XG5jb25zdCBBUFBfS0VZID0gJ2FwcCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBub3RpZnkkID0gbmV3IFN1YmplY3Q8U2V0dGluZ3NOb3RpZnk+KCk7XG4gIHByaXZhdGUgX2FwcDogQXBwID0gbnVsbDtcbiAgcHJpdmF0ZSBfdXNlcjogVXNlciA9IG51bGw7XG4gIHByaXZhdGUgX2xheW91dDogTGF5b3V0ID0gbnVsbDtcblxuICBwcml2YXRlIGdldChrZXk6IHN0cmluZykge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgJ251bGwnKSB8fCBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH1cblxuICBnZXQgbGF5b3V0KCk6IExheW91dCB7XG4gICAgaWYgKCF0aGlzLl9sYXlvdXQpIHtcbiAgICAgIHRoaXMuX2xheW91dCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIDxMYXlvdXQ+e1xuICAgICAgICAgIGZpeGVkOiB0cnVlLFxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgICAgYm94ZWQ6IGZhbHNlLFxuICAgICAgICAgIGxhbmc6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuZ2V0KExBWU9VVF9LRVkpLFxuICAgICAgKTtcbiAgICAgIHRoaXMuc2V0KExBWU9VVF9LRVksIHRoaXMuX2xheW91dCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9sYXlvdXQ7XG4gIH1cblxuICBnZXQgYXBwKCk6IEFwcCB7XG4gICAgaWYgKCF0aGlzLl9hcHApIHtcbiAgICAgIHRoaXMuX2FwcCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIDxBcHA+e1xuICAgICAgICAgIHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5nZXQoQVBQX0tFWSksXG4gICAgICApO1xuICAgICAgdGhpcy5zZXQoQVBQX0tFWSwgdGhpcy5fYXBwKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2FwcDtcbiAgfVxuXG4gIGdldCB1c2VyKCk6IFVzZXIge1xuICAgIGlmICghdGhpcy5fdXNlcikge1xuICAgICAgdGhpcy5fdXNlciA9IE9iamVjdC5hc3NpZ24oPFVzZXI+e30sIHRoaXMuZ2V0KFVTRVJfS0VZKSk7XG4gICAgICB0aGlzLnNldChVU0VSX0tFWSwgdGhpcy5fdXNlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl91c2VyO1xuICB9XG5cbiAgZ2V0IG5vdGlmeSgpOiBPYnNlcnZhYmxlPFNldHRpbmdzTm90aWZ5PiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5JC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldExheW91dChuYW1lOiBzdHJpbmcgfCBMYXlvdXQsIHZhbHVlPzogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5sYXlvdXRbbmFtZV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbGF5b3V0ID0gbmFtZTtcbiAgICB9XG4gICAgdGhpcy5zZXQoTEFZT1VUX0tFWSwgdGhpcy5fbGF5b3V0KTtcbiAgICB0aGlzLm5vdGlmeSQubmV4dCh7IHR5cGU6ICdsYXlvdXQnLCBuYW1lLCB2YWx1ZSB9IGFzIGFueSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzZXRBcHAodmFsdWU6IEFwcCkge1xuICAgIHRoaXMuX2FwcCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0KEFQUF9LRVksIHZhbHVlKTtcbiAgICB0aGlzLm5vdGlmeSQubmV4dCh7IHR5cGU6ICdhcHAnLCB2YWx1ZSB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldFVzZXIodmFsdWU6IFVzZXIpIHtcbiAgICB0aGlzLl91c2VyID0gdmFsdWU7XG4gICAgdGhpcy5zZXQoVVNFUl9LRVksIHZhbHVlKTtcbiAgICB0aGlzLm5vdGlmeSQubmV4dCh7IHR5cGU6ICd1c2VyJywgdmFsdWUgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcgfSBmcm9tICcuL3NlcnZpY2VzL2h0dHAvaHR0cC5jb25maWcnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZUNvbmZpZyB9IGZyb20gJy4vc2VydmljZXMvcmVzcG9uc2l2ZS9yZXNwb25zaXZlLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQWxhaW5UaGVtZUNvbmZpZyB7XG4gIGh0dHA/OiBIdHRwQ2xpZW50Q29uZmlnO1xuICByZXNwb25zaXZlPzogUmVzcG9uc2l2ZUNvbmZpZztcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluVGhlbWVDb25maWcgfSBmcm9tICcuLi8uLi90aGVtZS5jb25maWcnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZUNvbmZpZyB9IGZyb20gJy4vcmVzcG9uc2l2ZS5jb25maWcnO1xuXG5leHBvcnQgY29uc3QgUkVQX01BWCA9IDY7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUmVzcG9uc2l2ZVNlcnZpY2Uge1xuICBwcml2YXRlIGNvZzogUmVzcG9uc2l2ZUNvbmZpZztcbiAgY29uc3RydWN0b3IoY29nOiBBbGFpblRoZW1lQ29uZmlnKSB7XG4gICAgdGhpcy5jb2cgPSBPYmplY3QuYXNzaWduKFxuICAgICAgPFJlc3BvbnNpdmVDb25maWc+e1xuICAgICAgICBydWxlczoge1xuICAgICAgICAgIDE6IHsgeHM6IDI0IH0sXG4gICAgICAgICAgMjogeyB4czogMjQsIHNtOiAxMiB9LFxuICAgICAgICAgIDM6IHsgeHM6IDI0LCBzbTogMTIsIG1kOiA4IH0sXG4gICAgICAgICAgNDogeyB4czogMjQsIHNtOiAxMiwgbWQ6IDgsIGxnOiA2IH0sXG4gICAgICAgICAgNTogeyB4czogMjQsIHNtOiAxMiwgbWQ6IDgsIGxnOiA2LCB4bDogNCB9LFxuICAgICAgICAgIDY6IHsgeHM6IDI0LCBzbTogMTIsIG1kOiA4LCBsZzogNiwgeGw6IDQsIHh4bDogMiB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNvZyEucmVzcG9uc2l2ZSxcbiAgICApO1xuICAgIGlmIChcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuY29nLnJ1bGVzKVxuICAgICAgICAubWFwKGkgPT4gK2kpXG4gICAgICAgIC5zb21lKChpOiBudW1iZXIpID0+IGkgPCAxIHx8IGkgPiBSRVBfTUFYKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgW3RoZW1lXSB0aGUgcmVzcG9uc2VpdmUgcnVsZSBpbmRleCB2YWx1ZSByYW5nZSBtdXN0IGJlIDEtJHtSRVBfTUFYfWAsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGdlbkNscyhjb3VudDogbnVtYmVyKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmNvZy5ydWxlc1tjb3VudCA+IFJFUF9NQVggPyBSRVBfTUFYIDogTWF0aC5tYXgoY291bnQsIDEpXTtcbiAgICBjb25zdCBhbnRDb2xDbGFzcyA9ICdhbnQtY29sJztcbiAgICBjb25zdCBjbHNNYXAgPSBbYCR7YW50Q29sQ2xhc3N9LXhzLSR7cnVsZS54c31gXTtcbiAgICBpZiAocnVsZS5zbSkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LXNtLSR7cnVsZS5zbX1gKTtcbiAgICBpZiAocnVsZS5tZCkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LW1kLSR7cnVsZS5tZH1gKTtcbiAgICBpZiAocnVsZS5sZykgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LWxnLSR7cnVsZS5sZ31gKTtcbiAgICBpZiAocnVsZS54bCkgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LXhsLSR7cnVsZS54bH1gKTtcbiAgICBpZiAocnVsZS54eGwpIGNsc01hcC5wdXNoKGAke2FudENvbENsYXNzfS14eGwtJHtydWxlLnh4bH1gKTtcbiAgICByZXR1cm4gY2xzTWFwO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxuICBJbmplY3RvcixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJy4uL21lbnUvbWVudS5zZXJ2aWNlJztcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2UgfSBmcm9tICcuLi9pMThuL2kxOG4nO1xuXG4vKipcbiAqIMOowq7CvsOnwr3CrsOmwqDCh8OpwqLCmFxuICogQHNlZSBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL3NlcnZpY2UjVGl0bGVTZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgVGl0bGVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfcHJlZml4ID0gJyc7XG4gIHByaXZhdGUgX3N1ZmZpeCA9ICcnO1xuICBwcml2YXRlIF9zZXBhcmF0b3IgPSAnIC0gJztcbiAgcHJpdmF0ZSBfcmV2ZXJzZSA9IGZhbHNlO1xuICBwcml2YXRlIF9kZWZhdWx0ID0gJ05vdCBQYWdlIE5hbWUnO1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSB0aXRsZTogVGl0bGUsXG4gICAgcHJpdmF0ZSBtZW51U3J2OiBNZW51U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcbiAgICBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgKSB7XG4gICAgaWYgKHRoaXMuaTE4blNydilcbiAgICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldFRpdGxlKCkpO1xuICB9XG5cbiAgLyoqIMOowq7CvsOnwr3CrsOlwojChsOpwprClMOnwqzCpiAqL1xuICBzZXQgc2VwYXJhdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXBhcmF0b3IgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiDDqMKuwr7Dp8K9wq7DpcKJwo3Dp8K8woAgKi9cbiAgc2V0IHByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gdmFsdWU7XG4gIH1cblxuICAvKiogw6jCrsK+w6fCvcKuw6XCkMKOw6fCvMKAICovXG4gIHNldCBzdWZmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N1ZmZpeCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIMOowq7CvsOnwr3CrsOmwpjCr8OlwpDCpsOlwo/CjcOowr3CrCAqL1xuICBzZXQgcmV2ZXJzZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JldmVyc2UgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiDDqMKuwr7Dp8K9wq7DqcK7wpjDqMKuwqTDpsKgwofDqcKiwpjDpcKQwo0gKi9cbiAgc2V0IGRlZmF1bHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2RlZmF1bHQgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlFbGVtZW50KCk6IHN0cmluZyB7XG4gICAgY29uc3QgZWwgPVxuICAgICAgdGhpcy5kb2MucXVlcnlTZWxlY3RvcignLmFsYWluLWRlZmF1bHRfX2NvbnRlbnQtdGl0bGUgaDEnKSB8fFxuICAgICAgdGhpcy5kb2MucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyX190aXRsZScpO1xuICAgIGlmIChlbCkge1xuICAgICAgcmV0dXJuIGVsLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBwcml2YXRlIGdldEJ5Um91dGUoKTogc3RyaW5nIHtcbiAgICBsZXQgbmV4dCA9IHRoaXMuaW5qZWN0b3IuZ2V0KEFjdGl2YXRlZFJvdXRlKTtcbiAgICB3aGlsZSAobmV4dC5maXJzdENoaWxkKSBuZXh0ID0gbmV4dC5maXJzdENoaWxkO1xuICAgIGNvbnN0IGRhdGEgPSAobmV4dC5zbmFwc2hvdCAmJiBuZXh0LnNuYXBzaG90LmRhdGEpIHx8IHt9O1xuICAgIGlmIChkYXRhLnRpdGxlSTE4biAmJiB0aGlzLmkxOG5TcnYpXG4gICAgICBkYXRhLnRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGRhdGEudGl0bGVJMThuKTtcbiAgICByZXR1cm4gZGF0YS50aXRsZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlNZW51KCk6IHN0cmluZyB7XG4gICAgY29uc3QgbWVudXMgPSB0aGlzLm1lbnVTcnYuZ2V0UGF0aEJ5VXJsKHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcikudXJsKTtcbiAgICBpZiAoIW1lbnVzIHx8IG1lbnVzLmxlbmd0aCA8PSAwKSByZXR1cm4gJyc7XG5cbiAgICBjb25zdCBpdGVtID0gbWVudXNbbWVudXMubGVuZ3RoIC0gMV07XG4gICAgbGV0IHRpdGxlO1xuICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB0aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgIHJldHVybiB0aXRsZSB8fCBpdGVtLnRleHQ7XG4gIH1cblxuICAvKipcbiAgICogw6jCrsK+w6fCvcKuw6bCoMKHw6nCosKYXG4gICAqL1xuICBzZXRUaXRsZSh0aXRsZT86IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgdGl0bGUgPVxuICAgICAgICB0aGlzLmdldEJ5Um91dGUoKSB8fFxuICAgICAgICB0aGlzLmdldEJ5TWVudSgpIHx8XG4gICAgICAgIHRoaXMuZ2V0QnlFbGVtZW50KCkgfHxcbiAgICAgICAgdGhpcy5fZGVmYXVsdDtcbiAgICB9XG4gICAgaWYgKHRpdGxlICYmICFBcnJheS5pc0FycmF5KHRpdGxlKSkge1xuICAgICAgdGl0bGUgPSBbdGl0bGVdO1xuICAgIH1cblxuICAgIGxldCBuZXdUaXRsZXMgPSBbXTtcbiAgICBpZiAodGhpcy5fcHJlZml4KSB7XG4gICAgICBuZXdUaXRsZXMucHVzaCh0aGlzLl9wcmVmaXgpO1xuICAgIH1cbiAgICBuZXdUaXRsZXMucHVzaCguLi4odGl0bGUgYXMgc3RyaW5nW10pKTtcbiAgICBpZiAodGhpcy5fc3VmZml4KSB7XG4gICAgICBuZXdUaXRsZXMucHVzaCh0aGlzLl9zdWZmaXgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmV2ZXJzZSkge1xuICAgICAgbmV3VGl0bGVzID0gbmV3VGl0bGVzLnJldmVyc2UoKTtcbiAgICB9XG4gICAgdGhpcy50aXRsZS5zZXRUaXRsZShuZXdUaXRsZXMuam9pbih0aGlzLl9zZXBhcmF0b3IpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmkxOG4kKSB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBERUxPTl9MT0NBTEUgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignZGVsb24tbG9jYWxlJyk7XG4iLCJpbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlLnR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgPExvY2FsZURhdGE+e1xuICBhYmJyOiAnemgtQ04nLFxuICBleGNlcHRpb246IHtcbiAgICA0MDM6ICfDpsKKwrHDpsKtwonDr8K8wozDpMK9wqDDpsKXwqDDpsKdwoPDqMKuwr/DqcKXwq7DqMKvwqXDqcKhwrXDqcKdwqInLFxuICAgIDQwNDogJ8OmworCscOmwq3CicOvwrzCjMOkwr3CoMOowq7Cv8OpwpfCrsOnwprChMOpwqHCtcOpwp3CosOkwrjCjcOlwq3CmMOlwpzCqCcsXG4gICAgNTAwOiAnw6bCisKxw6bCrcKJw6/CvMKMw6bCnMKNw6XCisKhw6XCmcKow6XCh8K6w6nClMKZw6TCusKGJyxcbiAgICBiYWNrVG9Ib21lOiAnw6jCv8KUw6XCm8Kew6nCpsKWw6nCocK1JyxcbiAgfSxcbiAgbm90aWNlSWNvbjoge1xuICAgIGVtcHR5VGV4dDogJ8OmwprCgsOmwpfCoMOmwpXCsMOmwo3CricsXG4gICAgY2xlYXJUZXh0OiAnw6bCuMKFw6fCqcK6JyxcbiAgfSxcbiAgcmV1c2VUYWI6IHtcbiAgICBjbG9zZTogJ8OlwoXCs8OpwpfCrcOmwqDCh8Onwq3CvicsXG4gICAgY2xvc2VPdGhlcjogJ8OlwoXCs8OpwpfCrcOlwoXCtsOlwq7Cg8OmwqDCh8Onwq3CvicsXG4gICAgY2xvc2VSaWdodDogJ8OlwoXCs8OpwpfCrcOlwo/Cs8Okwr7Cp8OmwqDCh8Onwq3CvicsXG4gICAgY2xlYXI6ICfDpsK4woXDp8KpwronLFxuICB9LFxuICB0YWdTZWxlY3Q6IHtcbiAgICBleHBhbmQ6ICfDpcKxwpXDpcK8woAnLFxuICAgIGNvbGxhcHNlOiAnw6bClMK2w6jCtcK3JyxcbiAgfSxcbiAgbWluaVByb2dyZXNzOiB7XG4gICAgdGFyZ2V0OiAnw6fCm8Kuw6bCoMKHw6XCgMK8w6/CvMKaJ1xuICB9LFxuICBzdDoge1xuICAgIHRvdGFsOiAnw6XChcKxIHt7dG90YWx9fSDDpsKdwqEnLFxuICB9LFxuICBzZjoge1xuICAgIHN1Ym1pdDogJ8Omwo/CkMOkwrrCpCcsXG4gICAgcmVzZXQ6ICfDqcKHwo3Dp8K9wq4nLFxuICAgIHNlYXJjaDogJ8OmwpDCnMOnwrTCoicsXG4gICAgZWRpdDogJ8Okwr/CncOlwq3CmCcsXG4gICAgYWRkVGV4dDogJ8OmwrfCu8OlworCoCcsXG4gICAgcmVtb3ZlVGV4dDogJ8OnwqfCu8OpwpnCpCcsXG4gICAgY2hlY2tBbGxUZXh0OiAnw6XChcKow6nCgMKJJyxcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIFByb3ZpZGVyLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi9sb2NhbGUudHlwZXMnO1xuaW1wb3J0IHsgREVMT05fTE9DQUxFIH0gZnJvbSAnLi9sb2NhbGUudG9rZW5zJztcbmltcG9ydCB6aENOIGZyb20gJy4vbGFuZ3VhZ2VzL3poLUNOJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERlbG9uTG9jYWxlU2VydmljZSB7XG4gIHByaXZhdGUgX2xvY2FsZTogTG9jYWxlRGF0YTtcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMb2NhbGVEYXRhPih0aGlzLl9sb2NhbGUpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoREVMT05fTE9DQUxFKSBsb2NhbGU6IExvY2FsZURhdGEpIHtcbiAgICB0aGlzLnNldExvY2FsZShsb2NhbGUgfHwgemhDTik7XG4gIH1cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TG9jYWxlRGF0YT4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRMb2NhbGUobG9jYWxlOiBMb2NhbGVEYXRhKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvY2FsZSAmJiB0aGlzLl9sb2NhbGUuYWJiciA9PT0gbG9jYWxlLmFiYnIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gbG9jYWxlO1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGxvY2FsZSk7XG4gIH1cblxuICBnZXQgbG9jYWxlKCk6IExvY2FsZURhdGEge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XG4gIH1cblxuICBnZXREYXRhKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGVbcGF0aF0gfHwge307XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlkoZXhpc3Q6IERlbG9uTG9jYWxlU2VydmljZSwgbG9jYWxlOiBMb2NhbGVEYXRhKTogRGVsb25Mb2NhbGVTZXJ2aWNlIHtcbiAgcmV0dXJuIGV4aXN0IHx8IG5ldyBEZWxvbkxvY2FsZVNlcnZpY2UobG9jYWxlKTtcbn1cblxuZXhwb3J0IGNvbnN0IERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZSAgIDogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICB1c2VGYWN0b3J5OiBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZLFxuICBkZXBzICAgICAgOiBbIFsgbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBEZWxvbkxvY2FsZVNlcnZpY2UgXSwgREVMT05fTE9DQUxFIF1cbn07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgemhDTiBmcm9tICcuL2xhbmd1YWdlcy96aC1DTic7XG5cbmltcG9ydCB7IERFTE9OX0xPQ0FMRSB9IGZyb20gJy4vbG9jYWxlLnRva2Vucyc7XG5pbXBvcnQgeyBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUiB9IGZyb20gJy4vbG9jYWxlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IERFTE9OX0xPQ0FMRSwgdXNlVmFsdWU6IHpoQ04gfSxcbiAgICBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRGVsb25Mb2NhbGVNb2R1bGUge31cbiIsImltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUudHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCA8TG9jYWxlRGF0YT57XG4gIGFiYnI6ICdlbi1VUycsXG4gIGV4Y2VwdGlvbjoge1xuICAgIDQwMzogYFNvcnJ5LCB5b3UgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gdGhpcyBwYWdlYCxcbiAgICA0MDQ6IGBTb3JyeSwgdGhhdCBwYWdlIGRvbid0IGV4aXN0YCxcbiAgICA1MDA6IGBTb3JyeSwgc2VydmVyIGVycm9yYCxcbiAgICBiYWNrVG9Ib21lOiAnQmFjayBUbyBIb21lJyxcbiAgfSxcbiAgbm90aWNlSWNvbjoge1xuICAgIGVtcHR5VGV4dDogJ05vIGRhdGEnLFxuICAgIGNsZWFyVGV4dDogJ0NsZWFyJyxcbiAgfSxcbiAgcmV1c2VUYWI6IHtcbiAgICBjbG9zZTogJ0Nsb3NlIHRhYicsXG4gICAgY2xvc2VPdGhlcjogJ0Nsb3NlIG90aGVyIHRhYnMnLFxuICAgIGNsb3NlUmlnaHQ6ICdDbG9zZSB0YWJzIHRvIHJpZ2h0JyxcbiAgICBjbGVhcjogJ0NsZWFyIHRhYnMnLFxuICB9LFxuICB0YWdTZWxlY3Q6IHtcbiAgICBleHBhbmQ6ICdFeHBhbmQnLFxuICAgIGNvbGxhcHNlOiAnQ29sbGFwc2UnLFxuICB9LFxuICBtaW5pUHJvZ3Jlc3M6IHtcbiAgICB0YXJnZXQ6ICdUYXJnZXQ6ICcsXG4gIH0sXG4gIHN0OiB7XG4gICAgdG90YWw6ICd7e3JhbmdlWzBdfX0gLSB7e3JhbmdlWzFdfX0gb2Yge3t0b3RhbH19JyxcbiAgfSxcbiAgc2Y6IHtcbiAgICBzdWJtaXQ6ICdTdWJtaXQnLFxuICAgIHJlc2V0OiAnUmVzZXQnLFxuICAgIHNlYXJjaDogJ1NlYXJjaCcsXG4gICAgZWRpdDogJ1NhdmUnLFxuICAgIGFkZFRleHQ6ICdBZGQnLFxuICAgIHJlbW92ZVRleHQ6ICdSZW1vdmUnLFxuICAgIGNoZWNrQWxsVGV4dDogJ0NoZWNrIGFsbCcsXG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS50eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IDxMb2NhbGVEYXRhPntcbiAgYWJicjogJ3poLVRXJyxcbiAgZXhjZXB0aW9uOiB7XG4gICAgNDAzOiAnw6bCisKxw6bCrcKJw6/CvMKMw6XCpsKzw6fChMKhw6bCrMKKw6jCqMKqw6XClcKPw6jCqcKyw6nCoMKBw6nCncKiJyxcbiAgICA0MDQ6ICfDpsKKwrHDpsKtwonDr8K8wozDpcKmwrPDqMKowqrDpcKVwo/Dp8KawoTDqcKgwoHDqcKdwqLDpMK4wo3DpcKtwpjDpcKcwqgnLFxuICAgIDUwMDogJ8OmworCscOmwq3CicOvwrzCjMOmwpzCjcOlwovCmcOlwpnCqMOlwofCusOpwozCr8OkwrrChicsXG4gICAgYmFja1RvSG9tZTogJ8Oowr/ClMOlwpvCnsOpwqbClsOpwqDCgScsXG4gIH0sXG4gIG5vdGljZUljb246IHtcbiAgICBlbXB0eVRleHQ6ICfDpsKawqvDp8KEwqHDpsKVwrjDpsKTwponLFxuICAgIGNsZWFyVGV4dDogJ8OmwrjChcOnwqnCuicsXG4gIH0sXG4gIHJldXNlVGFiOiB7XG4gICAgY2xvc2U6ICfDqcKXwpzDqcKWwonDpsKowpnDp8Kwwr0nLFxuICAgIGNsb3NlT3RoZXI6ICfDqcKXwpzDqcKWwonDpcKFwrbDpcKuwoPDpsKowpnDp8Kwwr0nLFxuICAgIGNsb3NlUmlnaHQ6ICfDqcKXwpzDqcKWwonDpcKPwrPDpcKBwrTDpsKowpnDp8Kwwr0nLFxuICAgIGNsZWFyOiAnw6bCuMKFw6fCqcK6JyxcbiAgfSxcbiAgdGFnU2VsZWN0OiB7XG4gICAgZXhwYW5kOiAnw6XCscKVw6nClsKLJyxcbiAgICBjb2xsYXBzZTogJ8OmwpTCtsOowrXCtycsXG4gIH0sXG4gIG1pbmlQcm9ncmVzczoge1xuICAgIHRhcmdldDogJ8OnwpvCrsOmwqjCmcOlwoDCvMOvwrzCmicsXG4gIH0sXG4gIHN0OiB7XG4gICAgdG90YWw6ICfDpcKFwrEge3t0b3RhbH19IMOmwqLCnScsXG4gIH0sXG4gIHNmOiB7XG4gICAgc3VibWl0OiAnw6bCj8KQw6TCusKkJyxcbiAgICByZXNldDogJ8OpwofCjcOnwr3CricsXG4gICAgc2VhcmNoOiAnw6bCkMKcw6fCtMKiJyxcbiAgICBlZGl0OiAnw6TCv8Kdw6XCrcKYJyxcbiAgICBhZGRUZXh0OiAnw6bCt8K7w6XCisKgJyxcbiAgICByZW1vdmVUZXh0OiAnw6fCp8K7w6nCmcKkJyxcbiAgICBjaGVja0FsbFRleHQ6ICfDpcKFwqjDqcKBwrgnLFxuICB9LFxufTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOek1vZGFsU2VydmljZSwgTW9kYWxPcHRpb25zRm9yU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsSGVscGVyT3B0aW9ucyB7XG4gIC8qKiDDpcKkwqfDpcKwwo/Dr8K8wpvDpMK+wovDpcKmwoLDr8K8wppsZ8OjwoDCgTYwMMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBsZ2AgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlcjtcbiAgLyoqIMOlwq/CucOowq/CncOmwqHChiBbTW9kYWxPcHRpb25zRm9yU2VydmljZV0oaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9tb2RhbC9uei1tb2RhbC50eXBlLnRzKSDDpcKPwoLDpsKVwrAgKi9cbiAgbW9kYWxPcHRpb25zPzogTW9kYWxPcHRpb25zRm9yU2VydmljZTtcbiAgLyoqIMOmwpjCr8OlwpDCpsOnwrLCvsOlwofChsOvwrzCiMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYMOvwrzCicOvwrzCjMOowovCpcOowr/ClMOlwpvCnsOlwoDCvMOpwp3CnsOnwqnCusOlwoDCvMOvwrzCiGBudWxsYMOmwojClmB1bmRlZmluZWRgw6/CvMKJw6jCp8KGw6TCuMK6w6bCiMKQw6XCisKfw6/CvMKMw6XCkMKmw6XCiMKZw6jCp8KGw6TCuMK6w6nClMKZw6jCr8KvICovXG4gIGV4YWN0PzogYm9vbGVhbjtcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwozChcOowqPCucOmwqDCh8Onwq3CvsOpwqHCtcOvwrzCjMOkwr/CrsOlwqTCjcOmwqjCocOmwoDCgcOlwozChcOlwpDCq8OmwqDCh8Onwq3CvsOpwpfCtMOowrfCncOpwpfCrsOpwqLCmCAqL1xuICBpbmNsdWRlVGFicz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogw6XCr8K5w6jCr8Kdw6bCocKGw6jCvsKFw6XCisKpw6fCscK7XG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTW9kYWxIZWxwZXIge1xuICBwcml2YXRlIHpJbmRleCA9IDUwMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogTnpNb2RhbFNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIMOmwp7ChMOlwrvCusOkwrjCgMOkwrjCqsOlwq/CucOowq/CncOmwqHChlxuICAgKlxuICAgKiBAcGFyYW0gY29tcCDDp8K7woTDpMK7wrZcbiAgICogQHBhcmFtIHBhcmFtcyDDp8K7woTDpMK7wrbDpcKPwoLDpsKVwrBcbiAgICogQHBhcmFtIG9wdGlvbnMgw6nCosKdw6XCpMKWw6XCj8KCw6bClcKwXG4gICAqXG4gICAqIMOnwqTCusOkwr7Ci8OvwrzCmlxuICBgYGB0c1xudGhpcy5tb2RhbEhlbHBlci5jcmVhdGUoRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbi8vIMOlwq/CucOkwrrCjsOnwrvChMOkwrvCtsOnwprChMOmwojCkMOlworCnybDpcKFwrPDqcKXwq3Dp8KawoTDpcKkwoTDp8KQwobDqMKvwrTDpsKYwo5cbi8vIMOmwojCkMOlworCn1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XG4vLyDDpcKFwrPDqcKXwq1cbnRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG5gYGBcbiAgICovXG4gIGNyZWF0ZShcbiAgICBjb21wOiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiBNb2RhbEhlbHBlck9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBzaXplOiAnbGcnLFxuICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICBpbmNsdWRlVGFiczogZmFsc2UsXG4gICAgfSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuICAgICAgbGV0IGNscyA9ICcnLFxuICAgICAgICB3aWR0aCA9ICcnO1xuICAgICAgaWYgKG9wdGlvbnMuc2l6ZSkge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB3aWR0aCA9IGAke29wdGlvbnMuc2l6ZX1weGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xzID0gYG1vZGFsLSR7b3B0aW9ucy5zaXplfWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLmluY2x1ZGVUYWJzKSB7XG4gICAgICAgIGNscyArPSAnIG1vZGFsLWluY2x1ZGUtdGFicyc7XG4gICAgICB9XG4gICAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZSA9IHtcbiAgICAgICAgbnpXcmFwQ2xhc3NOYW1lOiBjbHMsXG4gICAgICAgIG56Q29udGVudDogY29tcCxcbiAgICAgICAgbnpXaWR0aDogd2lkdGggPyB3aWR0aCA6IHVuZGVmaW5lZCxcbiAgICAgICAgbnpGb290ZXI6IG51bGwsXG4gICAgICAgIG56Q29tcG9uZW50UGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIG56WkluZGV4OiArK3RoaXMuekluZGV4LFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHN1YmplY3QgPSB0aGlzLnNydi5jcmVhdGUoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMubW9kYWxPcHRpb25zKSxcbiAgICAgICk7XG4gICAgICBjb25zdCBhZnRlckNsb3NlJCA9IHN1YmplY3QuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLmV4YWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHJlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICBhZnRlckNsb3NlJC51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCnsKEw6XCu8K6w6nCncKZw6bCgMKBw6bCocKGw6/CvMKMw6fCgsK5w6XCh8K7w6jCksKZw6XCscKCw6TCuMKNw6XChcKBw6jCrsK4w6XChcKzw6nCl8KtXG4gICAqXG4gICAqIEBwYXJhbSBjb21wIMOnwrvChMOkwrvCtlxuICAgKiBAcGFyYW0gcGFyYW1zIMOnwrvChMOkwrvCtsOlwo/CgsOmwpXCsFxuICAgKiBAcGFyYW0gb3B0aW9ucyDDqcKiwp3DpcKkwpbDpcKPwoLDpsKVwrBcbiAgICpcbiAgICogw6fCpMK6w6TCvsKLw6/CvMKaXG4gIGBgYHRzXG50aGlzLm1vZGFsSGVscGVyLm9wZW4oRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbi8vIMOlwq/CucOkwrrCjsOnwrvChMOkwrvCtsOnwprChMOmwojCkMOlworCnybDpcKFwrPDqcKXwq3Dp8KawoTDpcKkwoTDp8KQwobDqMKvwrTDpsKYwo5cbi8vIMOmwojCkMOlworCn1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XG4vLyDDpcKFwrPDqcKXwq1cbnRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG5gYGBcbiAgICovXG4gIGNyZWF0ZVN0YXRpYyhcbiAgICBjb21wOiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiBNb2RhbEhlbHBlck9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBtb2RhbE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgeyBuek1hc2tDbG9zYWJsZTogZmFsc2UgfSxcbiAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5tb2RhbE9wdGlvbnMsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoY29tcCwgcGFyYW1zLCBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7IG1vZGFsT3B0aW9ucyB9KSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCicKTw6XCvMKAw6XCr8K5w6jCr8Kdw6bCocKGXG4gICAqIEBwYXJhbSBjb21wIMOnwrvChMOkwrvCtlxuICAgKiBAcGFyYW0gcGFyYW1zIMOnwrvChMOkwrvCtsOlwo/CgsOmwpXCsFxuICAgKiBAcGFyYW0gc2l6ZSDDpcKkwqfDpcKwwo/Dr8K8wpvDpMK+wovDpcKmwoLDr8K8wppsZ8OjwoDCgTYwMMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmxnXG4gICAqIEBwYXJhbSBvcHRpb25zIMOlwq/CucOowq/CncOmwqHChiBgTW9kYWxPcHRpb25zRm9yU2VydmljZWAgw6XCj8KCw6bClcKwXG4gICAqXG4gICAqIMOnwqTCusOkwr7Ci8OvwrzCmlxuICBgYGB0c1xudGhpcy5tb2RhbEhlbHBlci5vcGVuKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4vLyDDpcKvwrnDpMK6wo7Dp8K7woTDpMK7wrbDp8KawoTDpsKIwpDDpcKKwp8mw6XChcKzw6nCl8Ktw6fCmsKEw6XCpMKEw6fCkMKGw6jCr8K0w6bCmMKOXG4vLyDDpsKIwpDDpcKKwp9cbnRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcbnRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xuLy8gw6XChcKzw6nCl8KtXG50aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xuYGBgXG4gICAqL1xuICBvcGVuKFxuICAgIGNvbXA6IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgc2l6ZTogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyID0gJ2xnJyxcbiAgICBvcHRpb25zPzogTW9kYWxPcHRpb25zRm9yU2VydmljZSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoY29tcCwgcGFyYW1zLCB7XG4gICAgICBzaXplLFxuICAgICAgbW9kYWxPcHRpb25zOiBvcHRpb25zLFxuICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIMOpwp3CmcOmwoDCgcOmwqHChsOvwrzCjMOnwoLCucOlwofCu8OowpLCmcOlwrHCgsOkwrjCjcOlwoXCgcOowq7CuMOlwoXCs8OpwpfCrVxuICAgKiBAcGFyYW0gY29tcCDDp8K7woTDpMK7wrZcbiAgICogQHBhcmFtIHBhcmFtcyDDp8K7woTDpMK7wrbDpcKPwoLDpsKVwrBcbiAgICogQHBhcmFtIHNpemUgw6XCpMKnw6XCsMKPw6/CvMKbw6TCvsKLw6XCpsKCw6/CvMKabGfDo8KAwoE2MDDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppsZ1xuICAgKiBAcGFyYW0gb3B0aW9ucyDDpcKvwrnDqMKvwp3DpsKhwoYgYE1vZGFsT3B0aW9uc0ZvclNlcnZpY2VgIMOlwo/CgsOmwpXCsFxuICAgKlxuICAgKiDDp8KkwrrDpMK+wovDr8K8wppcbiAgYGBgdHNcbnRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuLy8gw6XCr8K5w6TCusKOw6fCu8KEw6TCu8K2w6fCmsKEw6bCiMKQw6XCisKfJsOlwoXCs8OpwpfCrcOnwprChMOlwqTChMOnwpDChsOowq/CtMOmwpjCjlxuLy8gw6bCiMKQw6XCisKfXG50aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG50aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcbi8vIMOlwoXCs8OpwpfCrVxudGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcbmBgYFxuICAgKi9cbiAgc3RhdGljKFxuICAgIGNvbXA6IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgc2l6ZTogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyID0gJ2xnJyxcbiAgICBvcHRpb25zPzogYW55LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLm9wZW4oXG4gICAgICBjb21wLFxuICAgICAgcGFyYW1zLFxuICAgICAgc2l6ZSxcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBuek1hc2tDbG9zYWJsZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOekRyYXdlclNlcnZpY2UsIE56RHJhd2VyT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYXdlckhlbHBlck9wdGlvbnMge1xuICAvKipcbiAgICogw6XCpMKnw6XCsMKPw6/CvMKbw6TCvsKLw6XCpsKCw6/CvMKabGfDo8KAwoE2MDDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgbWRgXG4gICAqXG4gICAqIHwgw6fCscK7w6XCnsKLIHwgw6nCu8KYw6jCrsKkw6XCpMKnw6XCsMKPIHxcbiAgICogfCAtLS0gfCAtLS0tLS0gfFxuICAgKiB8IGBzbWAgfCBgMzAwYCB8XG4gICAqIHwgYG1kYCB8IGA2MDBgIHxcbiAgICogfCBgbGdgIHwgYDkwMGAgfFxuICAgKiB8IGB4bGAgfCBgMTIwMGAgfFxuICAgKlxuICAgKiA+IMOkwrvCpcOkwrjCisOlwoDCvMOvwrzCjMOlwo/Cr8OpwoDCmsOowr/Ch8OowqbChsOnwpvClsOnwpvCuMOlwrrClMOnwprChExFU1PDpcKPwoLDpsKVwrDDqMKHwqrDqMKhwozDqMKwwoPDpsKVwrRcbiAgICovXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgbnVtYmVyO1xuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6XCjMKFw6XCkMKrw6XCusKVw6nCg8Kow6XCt8Klw6XChcK3w6bCncKhw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHRydWVgXG4gICAqL1xuICBmb290ZXI/OiBib29sZWFuO1xuICAvKipcbiAgICogw6XCusKVw6nCg8Kow6XCt8Klw6XChcK3w6bCncKhw6nCq8KYw6XCusKmw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDU1YFxuICAgKi9cbiAgZm9vdGVySGVpZ2h0PzogbnVtYmVyO1xuICAvKiogw6bCisK9w6XCscKJIFtOekRyYXdlck9wdGlvbnNdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2RyYXdlci96aCNuemRyYXdlcm9wdGlvbnMpIMOlwo/CgsOmwpXCsCAqL1xuICBkcmF3ZXJPcHRpb25zPzogTnpEcmF3ZXJPcHRpb25zO1xufVxuXG4vKipcbiAqIMOmworCvcOlwrHCicOowr7ChcOlworCqcOnwrHCu1xuICpcbiAqICoqw6bCs8Kow6bChMKPw6/CvMKaKiogw6bCnsKEw6XCu8K6w6fCu8KTw6bCnsKcw6nCg8K9w6XCj8Kvw6jCosKrw6jCrsKiw6nCmMKFw6/CvMKMw6TCvcKGw6bCsMK4w6jCv8Kcw6nCg8K9w6TCuMKNw6TCvMKaw6jCp8Kmw6XCj8KRIGBvYnNlcnZlci5lcnJvcmBcbiAqXG4gKiDDp8KkwrrDpMK+wovDr8K8wppcbmBgYHRzXG50aGlzLmRyYXdlckhlbHBlci5jcmVhdGUoJ0VkaXQnLCBGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuLy8gw6XCr8K5w6TCusKOw6fCu8KEw6TCu8K2w6fCmsKEw6bCiMKQw6XCisKfJsOlwoXCs8OpwpfCrcOnwprChMOlwqTChMOnwpDChsOowq/CtMOmwpjCjlxuLy8gw6bCiMKQw6XCisKfXG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKGRhdGEpO1xudGhpcy5OekRyYXdlclJlZi5jbG9zZSh0cnVlKTtcbi8vIMOlwoXCs8OpwpfCrVxudGhpcy5OekRyYXdlclJlZi5jbG9zZSgpO1xudGhpcy5OekRyYXdlclJlZi5jbG9zZShmYWxzZSk7XG5gYGBcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBEcmF3ZXJIZWxwZXIge1xuICAvLyDDpcKkwqfDqcKDwqjDpcKIwobDpsKDwoXDpcKGwrXDpMK4wovDpsKKwr3DpcKxwonDp8KawoTDpcKxwoLDp8K6wqfDpsKvwpQgTW9kYWwgw6TCvMKaw6bCm8K0w6TCvcKOw6TCuMKAw6TCusKbXG4gIHByaXZhdGUgekluZGV4ID0gNDAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBOekRyYXdlclNlcnZpY2UpIHsgfVxuXG4gIC8qKlxuICAgKiDDpsKewoTDpcK7wrrDpMK4woDDpMK4wqrDpsKKwr3DpcKxwolcbiAgICovXG4gIGNyZWF0ZShcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGNvbXA6IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IERyYXdlckhlbHBlck9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbig8RHJhd2VySGVscGVyT3B0aW9ucz57XG4gICAgICBzaXplOiAnbWQnLFxuICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgZm9vdGVySGVpZ2h0OiA1NSxcbiAgICAgIGRyYXdlck9wdGlvbnM6IHtcbiAgICAgICAgbnpQbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgICAgIG56V3JhcENsYXNzTmFtZTogJydcbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICBjb25zdCB7IHNpemUsIGZvb3RlciwgZm9vdGVySGVpZ2h0LCBkcmF3ZXJPcHRpb25zIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE56RHJhd2VyT3B0aW9ucyA9IHtcbiAgICAgICAgbnpDb250ZW50OiBjb21wLFxuICAgICAgICBuekNvbnRlbnRQYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgbnpaSW5kZXg6ICsrdGhpcy56SW5kZXgsXG4gICAgICAgIG56VGl0bGU6IHRpdGxlXG4gICAgICB9O1xuXG4gICAgICBpZiAoZm9vdGVyKSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zLm56Qm9keVN0eWxlID0ge1xuICAgICAgICAgIGhlaWdodDogYGNhbGMoMTAwJSAtICR7Zm9vdGVySGVpZ2h0fXB4KWAsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICAncGFkZGluZy1ib3R0b20nOiBgJHtmb290ZXJIZWlnaHQgLSAyfXB4YFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHNpemUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zW2RyYXdlck9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICd0b3AnIHx8IGRyYXdlck9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ256SGVpZ2h0JyA6ICdueldpZHRoJ10gPSBvcHRpb25zLnNpemU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZhdWx0T3B0aW9ucy5ueldyYXBDbGFzc05hbWUgPSAoZHJhd2VyT3B0aW9ucy5ueldyYXBDbGFzc05hbWUgKyBgIGRyYXdlci0ke29wdGlvbnMuc2l6ZX1gKS50cmltKCk7XG4gICAgICAgIGRlbGV0ZSBkcmF3ZXJPcHRpb25zLm56V3JhcENsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3ViamVjdCA9IHRoaXMuc3J2LmNyZWF0ZShcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgZHJhd2VyT3B0aW9ucyksXG4gICAgICApO1xuICAgICAgY29uc3QgYWZ0ZXJDbG9zZSQgPSBzdWJqZWN0LmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzICE9IG51bGwgJiYgcmVzICE9PSBmYWxzZSkge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICBhZnRlckNsb3NlJC51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCnsKEw6XCu8K6w6TCuMKAw6TCuMKqw6bCisK9w6XCscKJw6/CvMKMw6fCgsK5w6XCh8K7w6jCksKZw6XCscKCw6TCuMKNw6XChcKBw6jCrsK4w6XChcKzw6nCl8KtXG4gICAqL1xuICBzdGF0aWMoXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBjb21wOiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiBEcmF3ZXJIZWxwZXJPcHRpb25zXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgZHJhd2VyT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7IG56TWFza0Nsb3NhYmxlOiBmYWxzZSB9LFxuICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLmRyYXdlck9wdGlvbnMsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUodGl0bGUsIGNvbXAsIHBhcmFtcywgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgeyBkcmF3ZXJPcHRpb25zIH0pKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cENsaWVudCxcbiAgSHR0cEhlYWRlcnMsXG4gIEh0dHBQYXJhbXMsXG4gIEh0dHBSZXNwb25zZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWxhaW5UaGVtZUNvbmZpZyB9IGZyb20gJy4uLy4uL3RoZW1lLmNvbmZpZyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50Q29uZmlnIH0gZnJvbSAnLi9odHRwLmNvbmZpZyc7XG5cbi8qKlxuICogw6XCsMKBw6jCo8KFSHR0cENsaWVudMOvwrzCjMOkwrjCu8OowqbCgcOowqfCo8OlwobCs8OvwrzCmlxuICogKyDDpMK8wpjDpcKMwpZIdHRwQ2xpZW50w6XCnMKow6XCj8KCw6bClcKww6TCuMKKw6TCvsK/w6XCiMKpw6bCgMKnXG4gKiArIMOnwrvCn8OkwrjCgMOlwq7CnsOnwo7CsCBsb2FkaW5nXG4gKiArIMOnwrvCn8OkwrjCgMOlwqTChMOnwpDChsOmwpfCtsOpwpfCtMOmwqDCvMOlwrzCj8OpwpfCrsOpwqLCmFxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNsYXNzLW5hbWVcbmV4cG9ydCBjbGFzcyBfSHR0cENsaWVudCB7XG4gIHByaXZhdGUgY29nOiBIdHRwQ2xpZW50Q29uZmlnO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIGNvZzogQWxhaW5UaGVtZUNvbmZpZykge1xuICAgIHRoaXMuY29nID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIDxIdHRwQ2xpZW50Q29uZmlnPntcbiAgICAgICAgbnVsbFZhbHVlSGFuZGxpbmc6ICdpbmNsdWRlJyxcbiAgICAgICAgZGF0ZVZhbHVlSGFuZGxpbmc6ICd0aW1lc3RhbXAnLFxuICAgICAgfSxcbiAgICAgIGNvZyEuaHR0cCxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xuXG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKtwqPDpcKcwqjDpcKKwqDDqMK9wr3DpMK4wq0gKi9cbiAgZ2V0IGxvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gIH1cblxuICBwYXJzZVBhcmFtcyhwYXJhbXM6IGFueSk6IEh0dHBQYXJhbXMge1xuICAgIGNvbnN0IG5ld1BhcmFtcyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgbGV0IF9kYXRhID0gcGFyYW1zW2tleV07XG4gICAgICAvLyDDpcK/wr3Dp8KVwqXDp8KpwrrDpcKAwrxcbiAgICAgIGlmICh0aGlzLmNvZy5udWxsVmFsdWVIYW5kbGluZyA9PT0gJ2lnbm9yZScgJiYgX2RhdGEgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgLy8gw6XCsMKGw6bCl8K2w6nCl8K0w6jCvcKsw6XCjMKWw6TCuMK6w6/CvMKaw6bCl8K2w6nCl8K0w6bCiMKzICjDp8KnwpIpXG4gICAgICBpZiAodGhpcy5jb2cuZGF0ZVZhbHVlSGFuZGxpbmcgPT09ICd0aW1lc3RhbXAnICYmIF9kYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBfZGF0YSA9IF9kYXRhLnZhbHVlT2YoKTtcbiAgICAgIH1cbiAgICAgIG5ld1BhcmFtc1trZXldID0gX2RhdGE7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBIdHRwUGFyYW1zKHsgZnJvbU9iamVjdDogbmV3UGFyYW1zIH0pO1xuICB9XG5cbiAgYXBwbGllZFVybCh1cmw6IHN0cmluZywgcGFyYW1zPzogYW55KSB7XG4gICAgaWYgKCFwYXJhbXMpIHJldHVybiB1cmw7XG4gICAgdXJsICs9IH51cmwuaW5kZXhPZignPycpID8gJycgOiAnPyc7XG4gICAgY29uc3QgYXJyOiBzdHJpbmdbXSA9IFtdO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxuICAgIGZvciAoY29uc3Qga2V5IGluIHBhcmFtcykge1xuICAgICAgYXJyLnB1c2goYCR7a2V5fT0ke3BhcmFtc1trZXldfWApO1xuICAgIH1cbiAgICByZXR1cm4gdXJsICsgYXJyLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGJlZ2luKCkge1xuICAgIC8vIGNvbnNvbGUudGltZSgnaHR0cCcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMuX2xvYWRpbmcgPSB0cnVlKSk7XG4gIH1cblxuICBlbmQoKSB7XG4gICAgLy8gY29uc29sZS50aW1lRW5kKCdodHRwJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5fbG9hZGluZyA9IGZhbHNlKSk7XG4gIH1cblxuICAvLyAjcmVnaW9uIGdldFxuXG4gIC8qKlxuICAgKiBHRVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYFRgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgZ2V0PFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPFQ+O1xuXG4gIC8qKlxuICAgKiBHRVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYHN0cmluZ2Agw6fCscK7w6XCnsKLXG4gICAqL1xuICBnZXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIEdFVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBnZXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XG5cbiAgLyoqXG4gICAqIEdFVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBnZXQ8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xuXG4gIC8qKlxuICAgKiBHRVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYGFueWAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBnZXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBHRVQgw6jCr8K3w6bCscKCXG4gICAqL1xuICBnZXQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgICdHRVQnLFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHBvc3RcblxuICAvKipcbiAgICogUE9TVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgc3RyaW5nYCDDp8KxwrvDpcKewotcbiAgICovXG4gIHBvc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBQT1NUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBIdHRwUmVzcG9uc2U8SlNPTj5gIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcG9zdChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XG5cbiAgLyoqXG4gICAqIFBPU1TDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEpTT05gIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcG9zdDxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxUPjtcblxuICAvKipcbiAgICogUE9TVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgYW55YCDDp8KxwrvDpcKewotcbiAgICovXG4gIHBvc3QoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIFBPU1Qgw6jCr8K3w6bCscKCXG4gICAqL1xuICBwb3N0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgJ1BPU1QnLFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZGVsZXRlXG5cbiAgLyoqXG4gICAqIERFTEVURcOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgc3RyaW5nYCDDp8KxwrvDpcKewotcbiAgICovXG4gIGRlbGV0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICAvKipcbiAgICogREVMRVRFw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBKU09OYCDDp8KxwrvDpcKewotcbiAgICovXG4gIGRlbGV0ZShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcblxuICAvKipcbiAgICogREVMRVRFw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBhbnlgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgZGVsZXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogREVMRVRFIMOowq/Ct8OmwrHCglxuICAgKi9cbiAgZGVsZXRlKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICAnREVMRVRFJyxcbiAgICAgIHVybCxcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLyoqXG4gICAqIGBqc29ucGAgw6jCr8K3w6bCscKCXG4gICAqXG4gICAqIEBwYXJhbSB1cmwgVVJMw6XCnMKww6XCncKAXG4gICAqIEBwYXJhbSBwYXJhbXMgw6jCr8K3w6bCscKCw6XCj8KCw6bClcKwXG4gICAqIEBwYXJhbSBjYWxsYmFja1BhcmFtIENBTExCQUNLw6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaSlNPTlBfQ0FMTEJBQ0tcbiAgICovXG4gIGpzb25wKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBjYWxsYmFja1BhcmFtOiBzdHJpbmcgPSAnSlNPTlBfQ0FMTEJBQ0snLFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuanNvbnAodGhpcy5hcHBsaWVkVXJsKHVybCwgcGFyYW1zKSwgY2FsbGJhY2tQYXJhbSkucGlwZShcbiAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IocmVzID0+IHtcbiAgICAgICAgdGhpcy5lbmQoKTtcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IocmVzKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvLyAjcmVnaW9uIHBhdGNoXG5cbiAgLyoqXG4gICAqIFBBVENIw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBzdHJpbmdgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcGF0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBQQVRDSMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSHR0cFJlc3BvbnNlPEpTT04+YCDDp8KxwrvDpcKewotcbiAgICovXG4gIHBhdGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcblxuICAvKipcbiAgICogUEFUQ0jDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEpTT05gIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcGF0Y2g8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8VD47XG5cbiAgLyoqXG4gICAqIFBBVENIw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBhbnlgIMOnwrHCu8Olwp7Ci1xuICAgKi9cbiAgcGF0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIFBBVENIIMOowq/Ct8OmwrHCglxuICAgKi9cbiAgcGF0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keTogYW55LFxuICAgIHBhcmFtczogYW55LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICAnUEFUQ0gnLFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge1xuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcHV0XG5cbiAgLyoqXG4gICAqIFBVVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgc3RyaW5nYCDDp8KxwrvDpcKewotcbiAgICovXG4gIHB1dChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIFBVVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSHR0cFJlc3BvbnNlPEpTT04+YCDDp8KxwrvDpcKewotcbiAgICovXG4gIHB1dChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5OiBhbnksXG4gICAgcGFyYW1zOiBhbnksXG4gICAgb3B0aW9uczoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XG5cbiAgLyoqXG4gICAqIFBVVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXG4gICAqL1xuICBwdXQ8VD4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYm9keT86IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8VD47XG5cbiAgLyoqXG4gICAqIFBVVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgYW55YCDDp8KxwrvDpcKewotcbiAgICovXG4gIHB1dChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBib2R5PzogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogUFVUIMOowq/Ct8OmwrHCglxuICAgKi9cbiAgcHV0KFxuICAgIHVybDogc3RyaW5nLFxuICAgIGJvZHk6IGFueSxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgJ1BVVCcsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLyoqXG4gICAqIGByZXF1ZXN0YCDDqMKvwrfDpsKxwoJcbiAgICpcbiAgICogQHBhcmFtIG1ldGhvZCDDqMKvwrfDpsKxwoLDpsKWwrnDpsKzwpXDp8KxwrvDpcKewotcbiAgICogQHBhcmFtIHVybCBVUkzDpcKcwrDDpcKdwoBcbiAgICogQHBhcmFtIG9wdGlvbnMgw6XCj8KCw6bClcKwXG4gICAqL1xuICByZXF1ZXN0PFI+KFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBib2R5PzogYW55O1xuICAgICAgaGVhZGVycz86XG4gICAgICAgIHwgSHR0cEhlYWRlcnNcbiAgICAgICAgfCB7XG4gICAgICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgICAgICB9O1xuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcbiAgICAgIHBhcmFtcz86XG4gICAgICAgIHwgSHR0cFBhcmFtc1xuICAgICAgICB8IHtcbiAgICAgICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICAgICAgfTtcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8Uj47XG4gIC8qKlxuICAgKiBgcmVxdWVzdGAgw6jCr8K3w6bCscKCXG4gICAqXG4gICAqIEBwYXJhbSBtZXRob2Qgw6jCr8K3w6bCscKCw6bClsK5w6bCs8KVw6fCscK7w6XCnsKLXG4gICAqIEBwYXJhbSB1cmwgVVJMw6XCnMKww6XCncKAXG4gICAqIEBwYXJhbSBvcHRpb25zIMOlwo/CgsOmwpXCsFxuICAgKi9cbiAgcmVxdWVzdChcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgYm9keT86IGFueTtcbiAgICAgIGhlYWRlcnM/OlxuICAgICAgICB8IEh0dHBIZWFkZXJzXG4gICAgICAgIHwge1xuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICAgICAgfTtcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XG4gICAgICBwYXJhbXM/OlxuICAgICAgICB8IEh0dHBQYXJhbXNcbiAgICAgICAgfCB7XG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgICAgICAgIH07XG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRoaXMuYmVnaW4oKTtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMucGFyYW1zKSBvcHRpb25zLnBhcmFtcyA9IHRoaXMucGFyc2VQYXJhbXMob3B0aW9ucy5wYXJhbXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpLnBpcGUoXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICB0aGlzLmVuZCgpO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuZW5kKCk7XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHJlcyk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgZGlzdGFuY2VJbldvcmRzVG9Ob3cgZnJvbSAnZGF0ZS1mbnMvZGlzdGFuY2VfaW5fd29yZHNfdG9fbm93JztcblxuQFBpcGUoeyBuYW1lOiAnX2RhdGUnIH0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKFxuICAgIHZhbHVlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyLFxuICAgIGZvcm1hdFN0cmluZzogc3RyaW5nID0gJ1lZWVktTU0tREQgSEg6bW0nLFxuICApOiBzdHJpbmcge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKGZvcm1hdFN0cmluZyA9PT0gJ2ZuJykge1xuICAgICAgICByZXR1cm4gZGlzdGFuY2VJbldvcmRzVG9Ob3codmFsdWUsIHtcbiAgICAgICAgICBsb2NhbGU6ICh3aW5kb3cgYXMgYW55KS5fX2xvY2FsZV9fLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICFpc05hTigrdmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gK3ZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdCh2YWx1ZSwgZm9ybWF0U3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VycmVuY3lQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3Mvc2VydmljZS1waXBlIyVFOCVCNCVBNyVFNSVCOCU4MS1fY3VycmVudHlcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVzZS1waXBlLXRyYW5zZm9ybS1pbnRlcmZhY2VcbkBQaXBlKHsgbmFtZTogJ19jdXJyZW5jeScgfSlcbmV4cG9ydCBjbGFzcyBDTkN1cnJlbmN5UGlwZSBleHRlbmRzIEN1cnJlbmN5UGlwZSB7XG4gIHRyYW5zZm9ybShcbiAgICB2YWx1ZTogYW55LFxuICAgIGN1cnJlbmN5Q29kZTogc3RyaW5nID0gJ8Ovwr/CpScsXG4gICAgZGlzcGxheTogJ2NvZGUnIHwgJ3N5bWJvbCcgfCAnc3ltYm9sLW5hcnJvdycgfCBib29sZWFuID0gJ2NvZGUnLFxuICAgIGRpZ2l0cz86IHN0cmluZyxcbiAgKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgY3VycmVuY3lDb2RlLCA8YW55PmRpc3BsYXksIGRpZ2l0cyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvY29tbW9uIyVFNSU4RiVBRiVFOCVCRiVBRCVFNCVCQiVBMy1rZXlzXG4gKi9cbkBQaXBlKHsgbmFtZTogJ2tleXMnIH0pXG5leHBvcnQgY2xhc3MgS2V5c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGtleUlzTnVtYmVyOiBib29sZWFuID0gZmFsc2UpOiBhbnlbXSB7XG4gICAgY29uc3QgcmV0ID0gW107XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgIHJldC5wdXNoKHsga2V5OiBrZXlJc051bWJlciA/ICtrZXkgOiBrZXksIHZhbHVlOiB2YWx1ZVtrZXldIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBQaXBlKHsgbmFtZTogJ3luJyB9KVxuZXhwb3J0IGNsYXNzIFlOUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyKSB7fVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYm9vbGVhbiwgeWVzOiBzdHJpbmcsIG5vOiBzdHJpbmcpOiBTYWZlSHRtbCB7XG4gICAgcmV0dXJuIHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKFxuICAgICAgdmFsdWUgP1xuICAgICAgYDxpIGNsYXNzPVwidGV4dC1ibHVlXCIgdGl0bGU9XCIke3llcyB8fCAnw6bCmMKvJ31cIj48c3ZnIHZpZXdCb3g9XCI2NCA2NCA4OTYgODk2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHBhdGggZD1cIk05MTIgMTkwaC02OS45Yy05LjggMC0xOS4xIDQuNS0yNS4xIDEyLjJMNDA0LjcgNzI0LjUgMjA3IDQ3NGEzMiAzMiAwIDAgMC0yNS4xLTEyLjJIMTEyYy02LjcgMC0xMC40IDcuNy02LjMgMTIuOWwyNzMuOSAzNDdjMTIuOCAxNi4yIDM3LjQgMTYuMiA1MC4zIDBsNDg4LjQtNjE4LjljNC4xLTUuMS40LTEyLjgtNi4zLTEyLjh6XCI+PC9wYXRoPjwvc3ZnPjwvaT5gIDpcbiAgICAgIGA8aSBjbGFzcz1cInRleHQtZ3JleVwiIHRpdGxlPVwiJHtubyB8fCAnw6XCkMKmJ31cIj48c3ZnIHZpZXdCb3g9XCI2NCA2NCA4OTYgODk2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHBhdGggZD1cIk01NjMuOCA1MTJsMjYyLjUtMzEyLjljNC40LTUuMi43LTEzLjEtNi4xLTEzLjFoLTc5LjhjLTQuNyAwLTkuMiAyLjEtMTIuMyA1LjdMNTExLjYgNDQ5LjggMjk1LjEgMTkxLjdjLTMtMy42LTcuNS01LjctMTIuMy01LjdIMjAzYy02LjggMC0xMC41IDcuOS02LjEgMTMuMUw0NTkuNCA1MTIgMTk2LjkgODI0LjlBNy45NSA3Ljk1IDAgMCAwIDIwMyA4MzhoNzkuOGM0LjcgMCA5LjItMi4xIDEyLjMtNS43bDIxNi41LTI1OC4xIDIxNi41IDI1OC4xYzMgMy42IDcuNSA1LjcgMTIuMyA1LjdoNzkuOGM2LjggMCAxMC41LTcuOSA2LjEtMTMuMUw1NjMuOCA1MTJ6XCI+PC9wYXRoPjwvc3ZnPjwvaT5gXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlIH0gZnJvbSAnLi9pMThuJztcblxuQFBpcGUoeyBuYW1lOiAnaTE4bicgfSlcbmV4cG9ydCBjbGFzcyBJMThuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIHByaXZhdGUgaTE4bjogQWxhaW5JMThOU2VydmljZSkge31cblxuICB0cmFuc2Zvcm0oa2V5OiBzdHJpbmcsIGludGVycG9sYXRlUGFyYW1zPzogT2JqZWN0LCBpc1NhZmU/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pMThuLmZhbnlpKGtleSwgaW50ZXJwb2xhdGVQYXJhbXMsIGlzU2FmZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AUGlwZSh7IG5hbWU6ICdodG1sJyB9KVxuZXhwb3J0IGNsYXNzIEhUTUxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIpIHt9XG5cbiAgdHJhbnNmb3JtKGh0bWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGh0bWwgPyB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKSBhcyBhbnkgOiAnJztcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnLi93aW5fdG9rZW5zJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICcuL2xvY2FsZS9sb2NhbGUubW9kdWxlJztcblxuLy8gI3JlZ2lvbiBpbXBvcnRcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2VGYWtlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pMThuL2kxOG4nO1xuXG5pbXBvcnQgeyBNb2RhbEhlbHBlciB9IGZyb20gJy4vc2VydmljZXMvbW9kYWwvbW9kYWwuaGVscGVyJztcbmltcG9ydCB7IERyYXdlckhlbHBlciB9IGZyb20gJy4vc2VydmljZXMvZHJhd2VyL2RyYXdlci5oZWxwZXInO1xuY29uc3QgSEVMUEVSUyA9IFtNb2RhbEhlbHBlciwgRHJhd2VySGVscGVyXTtcblxuLy8gY29tcG9uZW50c1xuY29uc3QgQ09NUE9ORU5UUyA9IFtdO1xuXG4vLyBwaXBlc1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICcuL3BpcGVzL2RhdGUvZGF0ZS5waXBlJztcbmltcG9ydCB7IENOQ3VycmVuY3lQaXBlIH0gZnJvbSAnLi9waXBlcy9jdXJyZW5jeS9jbi1jdXJyZW5jeS5waXBlJztcbmltcG9ydCB7IEtleXNQaXBlIH0gZnJvbSAnLi9waXBlcy9rZXlzL2tleXMucGlwZSc7XG5pbXBvcnQgeyBZTlBpcGUgfSBmcm9tICcuL3BpcGVzL3luL3luLnBpcGUnO1xuaW1wb3J0IHsgSTE4blBpcGUgfSBmcm9tICcuL3NlcnZpY2VzL2kxOG4vaTE4bi5waXBlJztcbmltcG9ydCB7IEhUTUxQaXBlIH0gZnJvbSAnLi9waXBlcy9odG1sL2h0bWwucGlwZSc7XG5jb25zdCBQSVBFUyA9IFtEYXRlUGlwZSwgQ05DdXJyZW5jeVBpcGUsIEtleXNQaXBlLCBZTlBpcGUsIEkxOG5QaXBlLCBIVE1MUGlwZV07XG5cbi8vICNlbmRyZWdpb25cblxuLy8gI3JlZ2lvbiBhbGwgZGVsb24gdXNlZCBpY29uc1xuXG5pbXBvcnQgeyBOekljb25TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQge1xuICBCZWxsT3V0bGluZSxcbiAgRmlsdGVyRmlsbCxcbiAgQ2FyZXRVcE91dGxpbmUsXG4gIENhcmV0RG93bk91dGxpbmUsXG4gIERlbGV0ZU91dGxpbmUsXG4gIFBsdXNPdXRsaW5lLFxuICBJbmJveE91dGxpbmUsXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvaWNvbnMnO1xuY29uc3QgSUNPTlMgPSBbXG4gIEJlbGxPdXRsaW5lLFxuICBGaWx0ZXJGaWxsLFxuICBDYXJldFVwT3V0bGluZSxcbiAgQ2FyZXREb3duT3V0bGluZSxcbiAgRGVsZXRlT3V0bGluZSxcbiAgUGx1c091dGxpbmUsXG4gIEluYm94T3V0bGluZSxcbl07XG5cbi8vICNlbmRyZWdpb25cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBPdmVybGF5TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UUywgLi4uUElQRVNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UUywgLi4uUElQRVMsIERlbG9uTG9jYWxlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQWxhaW5UaGVtZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKGljb25TcnY6IE56SWNvblNlcnZpY2UpIHtcbiAgICBpY29uU3J2LmFkZEljb24oLi4uSUNPTlMpO1xuICB9XG5cbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBbGFpblRoZW1lTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogV0lORE9XLCB1c2VWYWx1ZTogd2luZG93IH0sXG4gICAgICAgIHsgcHJvdmlkZTogQUxBSU5fSTE4Tl9UT0tFTiwgdXNlQ2xhc3M6IEFsYWluSTE4TlNlcnZpY2VGYWtlIH0sXG4gICAgICAgIC4uLkhFTFBFUlMsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBbGFpblRoZW1lTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbLi4uSEVMUEVSU10sXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmVyc2lvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgVkVSU0lPTiA9IG5ldyBWZXJzaW9uKCcwLjAuMC1QTEFDRUhPTERFUicpO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBYSxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDOzs7Ozs7Ozs7QUNGbEQ7O0lBQ0UsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7SUFDNUMsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUV2RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Ozs7SUFFL0I7O1FBRUUsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQ3ZCLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUU7WUFDMUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztTQUMxQyxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsU0FBUyxJQUFJLG1EQUFtRCxDQUFDO0tBQzVFO0lBRUQsbUJBQU0sTUFBTSxHQUFFLFlBQVksR0FBRztRQUMzQixVQUFVLENBQUM7WUFDVCxNQUFNLEVBQUUsQ0FBQztZQUNULElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUMxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ1QsQ0FBQztDQUNIOzs7Ozs7QUN0QkQ7QUFnQ0EsTUFBYSxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FDaEQsc0JBQXNCLENBQ3ZCLENBQUM7QUFHRjs7dUJBQ29CLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQzs7Ozs7SUFFbkQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ2pFOzs7OztJQUVELEdBQUcsQ0FBQyxJQUFZO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxFQUFFLENBQUM7S0FDWDs7Ozs7SUFFRCxLQUFLLENBQUMsR0FBVztRQUNmLE9BQU8sR0FBRyxDQUFDO0tBQ1o7OztZQWxCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7Ozs7OztBQ3BDbEM7Ozs7O0lBZ0JFLFlBR1UsT0FBeUIsRUFDYixVQUFzQjtRQURsQyxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUNiLGVBQVUsR0FBVixVQUFVLENBQVk7d0JBVEEsSUFBSSxlQUFlLENBQVMsRUFBRSxDQUFDO29CQUdwRCxFQUFFO1FBUXZCLElBQUksSUFBSSxDQUFDLE9BQU87WUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0tBQ25FOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQ3BDOzs7OztJQUVELEtBQUssQ0FBQyxRQUFpRTs7UUFDckUsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFZLEVBQUUsVUFBZ0IsRUFBRSxLQUFhO1lBQ3pELEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUN2QixRQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDdEM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7aUJBQ3BCO2FBQ0Y7U0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzFCOzs7OztJQUVELEdBQUcsQ0FBQyxLQUFhO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ2Y7Ozs7OztJQUtELE1BQU0sQ0FBQyxRQUFrRTs7UUFDdkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztRQUNWLE1BQU0sU0FBUyxHQUFXLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLO1lBQzdCLElBQUksV0FBUSxDQUFDLEVBQUUsQ0FBQztZQUNoQixJQUFJLGVBQVksTUFBTSxDQUFDO1lBQ3ZCLElBQUksYUFBVSxLQUFLLENBQUM7WUFFcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQy9CLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFdBQVc7Z0JBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO2dCQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDOztZQUcvQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtvQkFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7aUJBQ3ZCO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztpQkFDNUI7YUFDRjtZQUVELElBQUksWUFBUyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDN0MsSUFBSSxZQUFTLENBQUMsQ0FBQzthQUNoQjs7WUFHRCxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7O2dCQUNqQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUM7O2dCQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDOztnQkFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNsQyxJQUFJLEdBQUcsTUFBTSxDQUFDO29CQUNkLEtBQUssR0FBRyxLQUFLO3lCQUNWLEtBQUssQ0FBQyxHQUFHLENBQUM7eUJBQ1YsS0FBSyxDQUFDLENBQUMsQ0FBQzt5QkFDUixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2Q7cUJBQU0sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDekMsSUFBSSxHQUFHLEtBQUssQ0FBQztpQkFDZDtnQkFDRCxJQUFJLENBQUMsSUFBSSxxQkFBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQVMsQ0FBQSxDQUFDO2FBQ3BDOztZQUdELElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSTtnQkFDbEUsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV2QixJQUFJLENBQUMsSUFBSTtnQkFDUCxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7O1lBR3hFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUM7O1lBR2xDLElBQUksY0FBVyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDOztZQUdwRSxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDL0IsSUFBSSxjQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQy9DO1lBRUQsSUFBSSxRQUFRO2dCQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQy9COzs7Ozs7Ozs7O0lBU08sWUFBWSxDQUFDLFNBQWlCO1FBQ3BDLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3BELE9BQU87U0FDUjs7UUFFRCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQzs7UUFDakMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNyRCxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNkLEdBQUcsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3RELEdBQUcsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUNsQyxNQUFNLFlBQVkscUJBQVM7Z0JBQ3pCLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxVQUFVO2dCQUNoQixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsUUFBUSxFQUFFLEVBQUU7YUFDYixFQUFDO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDcEQ7O1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQzNCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLEtBQUssRUFBRSxDQUFDO1lBQ1IsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNSLE1BQU0sRUFBRSxDQUFDO1NBQ1YsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxhQUFVLENBQUMsQ0FBQztZQUNiLE9BQU8sQ0FBQyxDQUFDO1NBQ1YsQ0FBQyxDQUFDOzs7OztJQUdMLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztLQUNsQjs7Ozs7SUFLRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDL0I7Ozs7Ozs7SUFFTyxNQUFNLENBQUMsR0FBVyxFQUFFLFNBQVMsR0FBRyxLQUFLLEVBQUUsS0FBd0IsSUFBSTs7UUFDekUsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDO1FBRXRCLE9BQU8sQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFO1lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDVixJQUFJLEVBQUUsRUFBRTtvQkFDTixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ1A7Z0JBQ0QsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtvQkFDcEMsSUFBSSxHQUFHLENBQUMsQ0FBQztpQkFDVjthQUNGLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxTQUFTO2dCQUFFLE1BQU07WUFFdEIsR0FBRyxHQUFHLEdBQUc7aUJBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQztpQkFDVixLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNkO1FBRUQsT0FBTyxJQUFJLENBQUM7Ozs7Ozs7Ozs7SUFRZCxXQUFXLENBQUMsR0FBVyxFQUFFLFNBQVMsR0FBRyxLQUFLO1FBQ3hDLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTzs7UUFFakIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFFdEIsR0FBRztZQUNELFFBQVEsWUFBUyxJQUFJLENBQUM7WUFDdEIsUUFBUSxHQUFHLFFBQVEsWUFBUyxDQUFDO1NBQzlCLFFBQVEsUUFBUSxFQUFFO0tBQ3BCOzs7Ozs7Ozs7SUFPRCxZQUFZLENBQUMsR0FBVyxFQUFFLFNBQVMsR0FBRyxLQUFLOztRQUN6QyxNQUFNLEdBQUcsR0FBVyxFQUFFLENBQUM7O1FBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxHQUFHLENBQUM7UUFFdEIsR0FBRztZQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2QixJQUFJLEdBQUcsSUFBSSxZQUFTLENBQUM7U0FDdEIsUUFBUSxJQUFJLEVBQUU7UUFFZixPQUFPLEdBQUcsQ0FBQztLQUNaOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDMUM7OztZQW5PRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OzRDQVE3QixRQUFRLFlBQ1IsTUFBTSxTQUFDLGdCQUFnQjtZQWRuQixVQUFVLHVCQWdCZCxRQUFROzs7Ozs7OztBQ3BCYjs7Ozs7SUFNRSxZQUMwQixHQUFRLEVBQ04sR0FBUTtRQURWLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFDTixRQUFHLEdBQUgsR0FBRyxDQUFLO0tBQ2hDOzs7Ozs7O0lBT0osZUFBZSxDQUFDLE9BQWlCLEVBQUUsU0FBUyxHQUFHLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFFdEMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDOztRQUV6QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBRS9ELElBQUksQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLEVBQUU7Z0JBQ3RCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7S0FDRjs7Ozs7O0lBTUQsV0FBVyxDQUFDLFNBQVMsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDaEQ7OztZQWpDRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OzRDQUc3QixNQUFNLFNBQUMsTUFBTTs0Q0FDYixNQUFNLFNBQUMsUUFBUTs7Ozs7Ozs7QUNScEI7QUFJQSxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUM7O0FBQzVCLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQzs7QUFDeEIsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBR3RCOzt1QkFDb0IsSUFBSSxPQUFPLEVBQWtCO29CQUMzQixJQUFJO3FCQUNGLElBQUk7dUJBQ0EsSUFBSTs7Ozs7O0lBRXRCLEdBQUcsQ0FBQyxHQUFXO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQzs7Ozs7OztJQUd6RCxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQVU7UUFDakMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7OztJQUduRCxJQUFJLE1BQU07UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLG1CQUNsQjtnQkFDTixLQUFLLEVBQUUsSUFBSTtnQkFDWCxTQUFTLEVBQUUsS0FBSztnQkFDaEIsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osSUFBSSxFQUFFLElBQUk7YUFDWCxHQUNELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQ3JCLENBQUM7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEM7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7SUFFRCxJQUFJLEdBQUc7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sbUJBQ2xCO2dCQUNILElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRTthQUMvQixHQUNELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQ2xCLENBQUM7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUI7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDbEI7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sbUJBQU8sRUFBRSxHQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkI7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDcEM7Ozs7OztJQUVELFNBQVMsQ0FBQyxJQUFxQixFQUFFLEtBQVc7UUFDMUMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxtQkFBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBUyxFQUFDLENBQUM7UUFDMUQsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBVTtRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQVc7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDM0MsT0FBTyxJQUFJLENBQUM7S0FDYjs7O1lBL0VGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Ozs7O0FDUmxDOzs7WUFJQyxVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7Ozs7OztBQ0psQztBQUlBLE1BQWEsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUd6Qjs7OztJQUVFLFlBQVksR0FBcUI7UUFDL0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxtQkFDSjtZQUNoQixLQUFLLEVBQUU7Z0JBQ0wsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtnQkFDYixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7Z0JBQ3JCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUM1QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUNuQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQzFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO2FBQ25EO1NBQ0Ysc0JBQ0QsR0FBRyxHQUFFLFVBQVUsQ0FDaEIsQ0FBQztRQUNGLElBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQzthQUN4QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ1osSUFBSSxDQUFDLENBQUMsQ0FBUyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUM1QztZQUNBLE1BQU0sSUFBSSxLQUFLLENBQ2IsNERBQTRELE9BQU8sRUFBRSxDQUN0RSxDQUFDO1NBQ0g7S0FDRjs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBYTs7UUFDbEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFDNUUsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDOztRQUM5QixNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsV0FBVyxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELElBQUksSUFBSSxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEdBQUc7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxRQUFRLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE9BQU8sTUFBTSxDQUFDO0tBQ2Y7OztZQXRDRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBTHpCLGdCQUFnQjs7Ozs7Ozs7QUNEekI7Ozs7QUFvQkE7Ozs7Ozs7O0lBUUUsWUFDVSxVQUNBLE9BQ0EsU0FHQSxPQUF5QixFQUNQLEdBQVE7UUFOMUIsYUFBUSxHQUFSLFFBQVE7UUFDUixVQUFLLEdBQUwsS0FBSztRQUNMLFlBQU8sR0FBUCxPQUFPO1FBR1AsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDUCxRQUFHLEdBQUgsR0FBRyxDQUFLO3VCQWRsQixFQUFFO3VCQUNGLEVBQUU7MEJBQ0MsS0FBSzt3QkFDUCxLQUFLO3dCQUNMLGVBQWU7UUFZaEMsSUFBSSxJQUFJLENBQUMsT0FBTztZQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDckU7Ozs7OztJQUdELElBQUksU0FBUyxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7S0FDekI7Ozs7OztJQUdELElBQUksTUFBTSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDdEI7Ozs7OztJQUdELElBQUksTUFBTSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDdEI7Ozs7OztJQUdELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7S0FDdkI7Ozs7OztJQUdELElBQUksT0FBTyxDQUFDLEtBQWE7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7S0FDdkI7Ozs7SUFFTyxZQUFZOztRQUNsQixNQUFNLEVBQUUsR0FDTixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxrQ0FBa0MsQ0FBQztZQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2hELElBQUksRUFBRSxFQUFFO1lBQ04sT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QztRQUNELE9BQU8sRUFBRSxDQUFDOzs7OztJQUdKLFVBQVU7O1FBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sSUFBSSxDQUFDLFVBQVU7WUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7UUFDL0MsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN6RCxJQUFJLElBQUksaUJBQWMsSUFBSSxDQUFDLE9BQU87WUFDaEMsSUFBSSxZQUFTLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksY0FBVyxDQUFDO1FBQ2xELE9BQU8sSUFBSSxVQUFPOzs7OztJQUdaLFNBQVM7O1FBQ2YsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPLEVBQUUsQ0FBQzs7UUFFM0MsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1FBQ3JDLElBQUksS0FBSyxDQUFDO1FBQ1YsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRSxPQUFPLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDOzs7Ozs7O0lBTTVCLFFBQVEsQ0FBQyxLQUF5QjtRQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsS0FBSztnQkFDSCxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNoQixJQUFJLENBQUMsWUFBWSxFQUFFO29CQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ2pCO1FBQ0QsSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pCOztRQUVELElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUI7UUFDRCxTQUFTLENBQUMsSUFBSSxDQUFDLHNCQUFJLEtBQWlCLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztLQUN0RDs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUMxQzs7O1lBM0dGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFmaEMsUUFBUTtZQUlELEtBQUs7WUFJTCxXQUFXOzRDQW9CZixRQUFRLFlBQ1IsTUFBTSxTQUFDLGdCQUFnQjs0Q0FFdkIsTUFBTSxTQUFDLFFBQVE7Ozs7Ozs7O0FDbkNwQjtBQUVBLE1BQWEsWUFBWSxHQUFHLElBQUksY0FBYyxDQUFTLGNBQWMsQ0FBQzs7Ozs7O0FDQXRFLFdBQTJCO0lBQ3pCLElBQUksRUFBRSxPQUFPO0lBQ2IsU0FBUyxFQUFFO1FBQ1QsR0FBRyxFQUFFLGFBQWE7UUFDbEIsR0FBRyxFQUFFLGNBQWM7UUFDbkIsR0FBRyxFQUFFLFdBQVc7UUFDaEIsVUFBVSxFQUFFLE1BQU07S0FDbkI7SUFDRCxVQUFVLEVBQUU7UUFDVixTQUFTLEVBQUUsTUFBTTtRQUNqQixTQUFTLEVBQUUsSUFBSTtLQUNoQjtJQUNELFFBQVEsRUFBRTtRQUNSLEtBQUssRUFBRSxNQUFNO1FBQ2IsVUFBVSxFQUFFLFFBQVE7UUFDcEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNELFNBQVMsRUFBRTtRQUNULE1BQU0sRUFBRSxJQUFJO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxNQUFNO0tBQ2Y7SUFDRCxFQUFFLEVBQUU7UUFDRixLQUFLLEVBQUUsZUFBZTtLQUN2QjtJQUNELEVBQUUsRUFBRTtRQUNGLE1BQU0sRUFBRSxJQUFJO1FBQ1osS0FBSyxFQUFFLElBQUk7UUFDWCxNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLElBQUk7UUFDYixVQUFVLEVBQUUsSUFBSTtRQUNoQixZQUFZLEVBQUUsSUFBSTtLQUNuQjtDQUNGLENBQUM7Ozs7OztBQ3ZDRjs7OztJQVlFLFlBQWtDLE1BQWtCO3VCQUZsQyxJQUFJLGVBQWUsQ0FBYSxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRzdELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDO0tBQ2hDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3BDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFrQjtRQUMxQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLElBQUksRUFBRTtZQUNyRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMzQjs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNyQjs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2pDOzs7WUEzQkYsVUFBVTs7Ozs0Q0FLSSxNQUFNLFNBQUMsWUFBWTs7Ozs7OztBQXlCbEMsK0NBQXNELEtBQXlCLEVBQUUsTUFBa0I7SUFDakcsT0FBTyxLQUFLLElBQUksSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUNoRDs7QUFFRCxNQUFhLDZCQUE2QixHQUFhO0lBQ3JELE9BQU8sRUFBSyxrQkFBa0I7SUFDOUIsVUFBVSxFQUFFLHFDQUFxQztJQUNqRCxJQUFJLEVBQVEsQ0FBRSxDQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxrQkFBa0IsQ0FBRSxFQUFFLFlBQVksQ0FBRTtDQUNyRjs7Ozs7O0FDN0NELFdBU3VDLElBQUk7QUFJM0M7OztZQU5DLFFBQVEsU0FBQztnQkFDUixTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsSUFBTSxFQUFFO29CQUN6Qyw2QkFBNkI7aUJBQzlCO2FBQ0Y7Ozs7Ozs7QUNWRCxXQUEyQjtJQUN6QixJQUFJLEVBQUUsT0FBTztJQUNiLFNBQVMsRUFBRTtRQUNULEdBQUcsRUFBRSwyQ0FBMkM7UUFDaEQsR0FBRyxFQUFFLDhCQUE4QjtRQUNuQyxHQUFHLEVBQUUscUJBQXFCO1FBQzFCLFVBQVUsRUFBRSxjQUFjO0tBQzNCO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsU0FBUyxFQUFFLFNBQVM7UUFDcEIsU0FBUyxFQUFFLE9BQU87S0FDbkI7SUFDRCxRQUFRLEVBQUU7UUFDUixLQUFLLEVBQUUsV0FBVztRQUNsQixVQUFVLEVBQUUsa0JBQWtCO1FBQzlCLFVBQVUsRUFBRSxxQkFBcUI7UUFDakMsS0FBSyxFQUFFLFlBQVk7S0FDcEI7SUFDRCxTQUFTLEVBQUU7UUFDVCxNQUFNLEVBQUUsUUFBUTtRQUNoQixRQUFRLEVBQUUsVUFBVTtLQUNyQjtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxVQUFVO0tBQ25CO0lBQ0QsRUFBRSxFQUFFO1FBQ0YsS0FBSyxFQUFFLDBDQUEwQztLQUNsRDtJQUNELEVBQUUsRUFBRTtRQUNGLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEtBQUssRUFBRSxPQUFPO1FBQ2QsTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsS0FBSztRQUNkLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFlBQVksRUFBRSxXQUFXO0tBQzFCO0NBQ0YsQ0FBQzs7Ozs7O0FDckNGLFdBQTJCO0lBQ3pCLElBQUksRUFBRSxPQUFPO0lBQ2IsU0FBUyxFQUFFO1FBQ1QsR0FBRyxFQUFFLGFBQWE7UUFDbEIsR0FBRyxFQUFFLGNBQWM7UUFDbkIsR0FBRyxFQUFFLFdBQVc7UUFDaEIsVUFBVSxFQUFFLE1BQU07S0FDbkI7SUFDRCxVQUFVLEVBQUU7UUFDVixTQUFTLEVBQUUsTUFBTTtRQUNqQixTQUFTLEVBQUUsSUFBSTtLQUNoQjtJQUNELFFBQVEsRUFBRTtRQUNSLEtBQUssRUFBRSxNQUFNO1FBQ2IsVUFBVSxFQUFFLFFBQVE7UUFDcEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNELFNBQVMsRUFBRTtRQUNULE1BQU0sRUFBRSxJQUFJO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxNQUFNO0tBQ2Y7SUFDRCxFQUFFLEVBQUU7UUFDRixLQUFLLEVBQUUsZUFBZTtLQUN2QjtJQUNELEVBQUUsRUFBRTtRQUNGLE1BQU0sRUFBRSxJQUFJO1FBQ1osS0FBSyxFQUFFLElBQUk7UUFDWCxNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLElBQUk7UUFDYixVQUFVLEVBQUUsSUFBSTtRQUNoQixZQUFZLEVBQUUsSUFBSTtLQUNuQjtDQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0Y7OztBQW1CQTs7OztJQUdFLFlBQW9CLEdBQW1CO1FBQW5CLFFBQUcsR0FBSCxHQUFHLENBQWdCO3NCQUZ0QixHQUFHO0tBRXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9CM0MsTUFBTSxDQUNKLElBQVMsRUFDVCxNQUFZLEVBQ1osT0FBNEI7UUFFNUIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDdEIsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsSUFBSTtZQUNYLFdBQVcsRUFBRSxLQUFLO1NBQ25CLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDWixPQUFPLElBQUksVUFBVSxDQUFDLENBQUMsUUFBdUI7O1lBQzVDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FDQzs7WUFEYixJQUNFLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDYixJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQ2hCLElBQUksT0FBTyxPQUFPLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtvQkFDcEMsS0FBSyxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDO2lCQUM3QjtxQkFBTTtvQkFDTCxHQUFHLEdBQUcsU0FBUyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQy9CO2FBQ0Y7WUFDRCxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7Z0JBQ3ZCLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQzthQUM5Qjs7WUFDRCxNQUFNLGNBQWMsR0FBMkI7Z0JBQzdDLGVBQWUsRUFBRSxHQUFHO2dCQUNwQixTQUFTLEVBQUUsSUFBSTtnQkFDZixPQUFPLEVBQUUsS0FBSyxHQUFHLEtBQUssR0FBRyxTQUFTO2dCQUNsQyxRQUFRLEVBQUUsSUFBSTtnQkFDZCxpQkFBaUIsRUFBRSxNQUFNO2dCQUN6QixRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTTthQUN4QixDQUFDOztZQUNGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUM3QixNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQ3BELENBQUM7O1lBQ0YsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRO2dCQUN4RCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO29CQUMxQixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7d0JBQ2YsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDcEI7aUJBQ0Y7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQixXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDM0IsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxDQUFDO0tBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JELFlBQVksQ0FDVixJQUFTLEVBQ1QsTUFBWSxFQUNaLE9BQTRCOztRQUU1QixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUNoQyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsRUFDekIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQ2hDLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDaEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JELElBQUksQ0FDRixJQUFTLEVBQ1QsTUFBWSxFQUNaLE9BQWdELElBQUksRUFDcEQsT0FBZ0M7UUFFaEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7WUFDL0IsSUFBSTtZQUNKLFlBQVksRUFBRSxPQUFPO1lBQ3JCLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO0tBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JELE1BQU0sQ0FDSixJQUFTLEVBQ1QsTUFBWSxFQUNaLE9BQWdELElBQUksRUFDcEQsT0FBYTtRQUViLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FDZCxJQUFJLEVBQ0osTUFBTSxFQUNOLElBQUksRUFDSixNQUFNLENBQUMsTUFBTSxDQUNYO1lBQ0UsY0FBYyxFQUFFLEtBQUs7U0FDdEIsRUFDRCxPQUFPLENBQ1IsQ0FDRixDQUFDO0tBQ0g7OztZQXhLRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBaEJ6QixjQUFjOzs7Ozs7OztBQ0Z2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnREE7Ozs7SUFJRSxZQUFvQixHQUFvQjtRQUFwQixRQUFHLEdBQUgsR0FBRyxDQUFpQjtzQkFGdkIsR0FBRztLQUV5Qjs7Ozs7Ozs7O0lBSzdDLE1BQU0sQ0FDSixLQUFhLEVBQ2IsSUFBUyxFQUNULE1BQVksRUFDWixPQUE2QjtRQUU3QixPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sbUJBQXNCO1lBQzNDLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFLElBQUk7WUFDWixZQUFZLEVBQUUsRUFBRTtZQUNoQixhQUFhLEVBQUU7Z0JBQ2IsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLGVBQWUsRUFBRSxFQUFFO2FBQ3BCO1NBQ0YsR0FBRSxPQUFPLENBQUMsQ0FBQztRQUNaLE9BQU8sSUFBSSxVQUFVLENBQUMsQ0FBQyxRQUF1QjtZQUM1QyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLEdBQUcsT0FBTyxDQUFDOztZQUM5RCxNQUFNLGNBQWMsR0FBb0I7Z0JBQ3RDLFNBQVMsRUFBRSxJQUFJO2dCQUNmLGVBQWUsRUFBRSxNQUFNO2dCQUN2QixRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDdkIsT0FBTyxFQUFFLEtBQUs7YUFDZixDQUFDO1lBRUYsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsY0FBYyxDQUFDLFdBQVcsR0FBRztvQkFDM0IsTUFBTSxFQUFFLGVBQWUsWUFBWSxLQUFLO29CQUN4QyxRQUFRLEVBQUUsTUFBTTtvQkFDaEIsZ0JBQWdCLEVBQUUsR0FBRyxZQUFZLEdBQUcsQ0FBQyxJQUFJO2lCQUMxQyxDQUFDO2FBQ0g7WUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDNUIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEtBQUssS0FBSyxJQUFJLGFBQWEsQ0FBQyxXQUFXLEtBQUssUUFBUSxHQUFHLFVBQVUsR0FBRyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ3ZJO2lCQUFNO2dCQUNMLGNBQWMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLFdBQVcsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUNwRyxPQUFPLGFBQWEsQ0FBQyxlQUFlLENBQUM7YUFDdEM7O1lBRUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyxDQUM3QyxDQUFDOztZQUNGLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUTtnQkFDeEQsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxLQUFLLEVBQUU7b0JBQ2hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3BCO2dCQUNELFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEIsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzNCLENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQztLQUNKOzs7Ozs7Ozs7SUFLRCxNQUFNLENBQ0osS0FBYSxFQUNiLElBQVMsRUFDVCxNQUFZLEVBQ1osT0FBNkI7O1FBRTdCLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ2pDLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxFQUN6QixPQUFPLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FDakMsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDeEY7OztZQTVFRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBN0N6QixlQUFlOzs7Ozs7OztBQ0Z4Qjs7Ozs7OztBQW9CQTs7Ozs7SUFFRSxZQUFvQixJQUFnQixFQUFFLEdBQXFCO1FBQXZDLFNBQUksR0FBSixJQUFJLENBQVk7d0JBVWpCLEtBQUs7UUFUdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxtQkFDSjtZQUNoQixpQkFBaUIsRUFBRSxTQUFTO1lBQzVCLGlCQUFpQixFQUFFLFdBQVc7U0FDL0Isc0JBQ0QsR0FBRyxHQUFFLElBQUksQ0FDVixDQUFDO0tBQ0g7Ozs7O0lBS0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ3RCOzs7OztJQUVELFdBQVcsQ0FBQyxNQUFXOztRQUNyQixNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRzs7WUFDN0IsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUV4QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEtBQUssUUFBUSxJQUFJLEtBQUssSUFBSSxJQUFJO2dCQUFFLE9BQU87O1lBRXJFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsS0FBSyxXQUFXLElBQUksS0FBSyxZQUFZLElBQUksRUFBRTtnQkFDdkUsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN6QjtZQUNELFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0tBQ2xEOzs7Ozs7SUFFRCxVQUFVLENBQUMsR0FBVyxFQUFFLE1BQVk7UUFDbEMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPLEdBQUcsQ0FBQztRQUN4QixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7O1FBQ3BDLE1BQU0sR0FBRyxHQUFhLEVBQUUsQ0FBQzs7UUFFekIsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM1Qjs7OztJQUVELEtBQUs7O1FBRUgsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQzFDOzs7O0lBRUQsR0FBRzs7UUFFRCxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDM0M7Ozs7Ozs7O0lBa0ZELEdBQUcsQ0FDRCxHQUFXLEVBQ1gsTUFBVyxFQUNYLE9BTUM7UUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQ2pCLEtBQUssRUFDTCxHQUFHLEVBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FDWDtZQUNFLE1BQU07U0FDUCxFQUNELE9BQU8sQ0FDUixDQUNGLENBQUM7S0FDSDs7Ozs7Ozs7O0lBeUVELElBQUksQ0FDRixHQUFXLEVBQ1gsSUFBUyxFQUNULE1BQVcsRUFDWCxPQU1DO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUNqQixNQUFNLEVBQ04sR0FBRyxFQUNILE1BQU0sQ0FBQyxNQUFNLENBQ1g7WUFDRSxJQUFJO1lBQ0osTUFBTTtTQUNQLEVBQ0QsT0FBTyxDQUNSLENBQ0YsQ0FBQztLQUNIOzs7Ozs7OztJQXNERCxNQUFNLENBQ0osR0FBVyxFQUNYLE1BQVcsRUFDWCxPQU1DO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUNqQixRQUFRLEVBQ1IsR0FBRyxFQUNILE1BQU0sQ0FBQyxNQUFNLENBQ1g7WUFDRSxNQUFNO1NBQ1AsRUFDRCxPQUFPLENBQ1IsQ0FDRixDQUFDO0tBQ0g7Ozs7Ozs7OztJQVdELEtBQUssQ0FDSCxHQUFXLEVBQ1gsTUFBWSxFQUNaLGdCQUF3QixnQkFBZ0I7UUFFeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQ3RFLEdBQUcsQ0FBQztZQUNGLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNaLENBQUMsRUFDRixVQUFVLENBQUMsR0FBRztZQUNaLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNYLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCLENBQUMsQ0FDSCxDQUFDO0tBQ0g7Ozs7Ozs7OztJQXVFRCxLQUFLLENBQ0gsR0FBVyxFQUNYLElBQVMsRUFDVCxNQUFXLEVBQ1gsT0FNQztRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FDakIsT0FBTyxFQUNQLEdBQUcsRUFDSCxNQUFNLENBQUMsTUFBTSxDQUNYO1lBQ0UsSUFBSTtZQUNKLE1BQU07U0FDUCxFQUNELE9BQU8sQ0FDUixDQUNGLENBQUM7S0FDSDs7Ozs7Ozs7O0lBeUVELEdBQUcsQ0FDRCxHQUFXLEVBQ1gsSUFBUyxFQUNULE1BQVcsRUFDWCxPQU1DO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUNqQixLQUFLLEVBQ0wsR0FBRyxFQUNILE1BQU0sQ0FBQyxNQUFNLENBQ1g7WUFDRSxJQUFJO1lBQ0osTUFBTTtTQUNQLEVBQ0QsT0FBTyxDQUNSLENBQ0YsQ0FBQztLQUNIOzs7Ozs7Ozs7SUF1Q0QsT0FBTyxDQUNMLE1BQWMsRUFDZCxHQUFXLEVBQ1gsT0FnQkM7UUFFRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksT0FBTyxDQUFDLE1BQU07Z0JBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN2RTtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ2pELEdBQUcsQ0FBQztZQUNGLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNaLENBQUMsRUFDRixVQUFVLENBQUMsR0FBRztZQUNaLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNYLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCLENBQUMsQ0FDSCxDQUFDO0tBQ0g7OztZQXptQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQWhCaEMsVUFBVTtZQU9ILGdCQUFnQjs7Ozs7Ozs7QUNUekI7Ozs7OztJQU1FLFNBQVMsQ0FDUCxLQUE2QixFQUM3QixlQUF1QixrQkFBa0I7UUFFekMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7Z0JBQ3pCLE9BQU8sb0JBQW9CLENBQUMsS0FBSyxFQUFFO29CQUNqQyxNQUFNLEVBQUUsbUJBQUMsTUFBYSxHQUFFLFVBQVU7aUJBQ25DLENBQUMsQ0FBQzthQUNKO1lBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDL0MsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxPQUFPLEVBQUUsQ0FBQztTQUNYO0tBQ0Y7OztZQW5CRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFOzs7Ozs7O0FDSnZCOzs7QUFRQSxvQkFBNEIsU0FBUSxZQUFZOzs7Ozs7OztJQUM5QyxTQUFTLENBQ1AsS0FBVSxFQUNWLGVBQXVCLEdBQUcsRUFDMUIsVUFBeUQsTUFBTSxFQUMvRCxNQUFlO1FBRWYsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxZQUFZLG9CQUFPLE9BQU8sR0FBRSxNQUFNLENBQUMsQ0FBQztLQUNuRTs7O1lBVEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs7Ozs7OztBQ1AzQjs7O0FBTUE7Ozs7OztJQUNFLFNBQVMsQ0FBQyxLQUFVLEVBQUUsY0FBdUIsS0FBSzs7UUFDaEQsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDOztRQUVmLEtBQUssTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1lBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsV0FBVyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNoRTtRQUNELE9BQU8sR0FBRyxDQUFDO0tBQ1o7OztZQVRGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7Ozs7Ozs7QUNMdEI7Ozs7SUFLRSxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0tBQUk7Ozs7Ozs7SUFFekMsU0FBUyxDQUFDLEtBQWMsRUFBRSxHQUFXLEVBQUUsRUFBVTtRQUMvQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQ3JDLEtBQUs7WUFDTCwrQkFBK0IsR0FBRyxJQUFJLEdBQUcsc1RBQXNUO1lBQy9WLCtCQUErQixFQUFFLElBQUksR0FBRyx1YkFBdWIsQ0FDaGUsQ0FBQztLQUNIOzs7WUFWRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFOzs7O1lBRlgsWUFBWTs7Ozs7OztBQ0RyQjs7OztJQUtFLFlBQThDLElBQXNCO1FBQXRCLFNBQUksR0FBSixJQUFJLENBQWtCO0tBQUk7Ozs7Ozs7SUFFeEUsU0FBUyxDQUFDLEdBQVcsRUFBRSxpQkFBMEIsRUFBRSxNQUFnQjtRQUNqRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUN4RDs7O1lBTkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTs7Ozs0Q0FFUCxNQUFNLFNBQUMsZ0JBQWdCOzs7Ozs7O0FDTHRDOzs7O0lBS0UsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztLQUFJOzs7OztJQUV6QyxTQUFTLENBQUMsSUFBWTtRQUNwQixPQUFPLElBQUkscUJBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQVEsSUFBRyxFQUFFLENBQUM7S0FDbEU7OztZQU5GLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7Ozs7WUFGYixZQUFZOzs7Ozs7O0FDRHJCO0FBY0EsTUFBTSxPQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7O0FBRzVDLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUd0QjtBQU1BLE1BQU0sS0FBSyxHQUFHLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQU0vRTtBQVVBLE1BQU0sS0FBSyxHQUFHO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtDQUNiLENBQUM7QUFTRjs7OztJQUNFLFlBQVksT0FBc0I7UUFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0tBQzNCOzs7O0lBRUQsT0FBTyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUNyQyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUU7Z0JBQzdELEdBQUcsT0FBTzthQUNYO1NBQ0YsQ0FBQztLQUNIOzs7O0lBRUQsT0FBTyxRQUFRO1FBQ2IsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7U0FDeEIsQ0FBQztLQUNIOzs7WUExQkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDO2dCQUNwRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQztnQkFDdkMsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsR0FBRyxLQUFLLEVBQUUsaUJBQWlCLENBQUM7YUFDdEQ7Ozs7WUExQlEsYUFBYTs7Ozs7OztBQ2hDdEI7QUFFQSxNQUFhLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7In0=