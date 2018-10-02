import { InjectionToken, Injectable, Version, NgModule, Inject, Optional, TemplateRef, ElementRef, Injector, Pipe, SkipSelf, defineInjectable, inject, INJECTOR } from '@angular/core';
import { BehaviorSubject, Subject, Observable, throwError } from 'rxjs';
import { filter, share, tap, catchError } from 'rxjs/operators';
import { ACLService } from '@delon/acl';
import { Overlay, ConnectionPositionPair, OverlayModule } from '@angular/cdk/overlay';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT, CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NzModalService, NzDrawerService } from 'ng-zorro-antd';
import { HttpClient, HttpParams } from '@angular/common/http';
import format from 'date-fns/format';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

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
class ContextMenuService {
    /**
     * @param {?} overlay
     */
    constructor(overlay) {
        this.overlay = overlay;
    }
    /**
     * @param {?} event
     * @param {?=} options
     * @return {?}
     */
    create(event, options) {
        /** @type {?} */
        const fakeElement = new ElementRef({
            getBoundingClientRect: () => ({
                bottom: event.clientY,
                height: 0,
                left: event.clientX,
                right: event.clientX,
                top: event.clientY,
                width: 0,
            }),
        });
        /** @type {?} */
        const positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
        ];
        /** @type {?} */
        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(fakeElement)
            .withPositions(positions);
        this.ref = this.overlay.create(Object.assign({
            positionStrategy,
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.close(),
        }, options));
        if (this.type instanceof TemplateRef) {
            this.ref.attach(new TemplatePortal(this.type, this.containerRef));
        }
        else {
            this.ref.attach(new ComponentPortal(this.type, this.containerRef));
        }
        this.ref.backdropClick().subscribe(() => this.close());
    }
    /**
     * @param {?} event
     * @param {?} ref
     * @param {?} containerRef
     * @param {?=} options
     * @return {?}
     */
    open(event, ref, containerRef, options) {
        this.close();
        this.type = ref;
        this.containerRef = containerRef;
        this.create(event, options);
        event.preventDefault();
        event.stopPropagation();
        return false;
    }
    /**
     * @return {?}
     */
    close() {
        if (!this.ref)
            return;
        this.ref.detach();
        this.ref.dispose();
        this.ref = null;
    }
}
ContextMenuService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ContextMenuService.ctorParameters = () => [
    { type: Overlay }
];
/** @nocollapse */ ContextMenuService.ngInjectableDef = defineInjectable({ factory: function ContextMenuService_Factory() { return new ContextMenuService(inject(Overlay)); }, token: ContextMenuService, providedIn: "root" });

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
/**
 * @see https://ng-alain.com/docs/service-pipe#%E6%97%A5%E6%9C%9F-_date
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
/** @type {?} */
const HELPERS = [ModalHelper];
/** @type {?} */
const COMPONENTS = [];
/** @type {?} */
const PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe];
class AlainThemeModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const VERSION = new Version('2.0.0-beta.3-ed90aa6');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { WINDOW, preloaderFinished, TitleService, ALAIN_I18N_TOKEN, AlainI18NServiceFake, _HttpClient, DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, AlainThemeConfig, AlainThemeModule, VERSION, MenuService, ContextMenuService, ScrollService, SettingsService, REP_MAX, ResponsiveService, enUS as en_US, zhCN as zh_CN, zhTW as zh_TW, DELON_LOCALE, DELON_LOCALE_SERVICE_PROVIDER_FACTORY, DelonLocaleService, DELON_LOCALE_SERVICE_PROVIDER, DelonLocaleModule, ModalHelper, DrawerHelper };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi90aGVtZS9zcmMvd2luX3Rva2Vucy50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9wcmVsb2FkZXIvcHJlbG9hZGVyLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL2kxOG4vaTE4bi50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9tZW51L21lbnUuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvc2Nyb2xsL3Njcm9sbC5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL3NldHRpbmdzL3NldHRpbmdzLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvdGhlbWUuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3NlcnZpY2VzL3Jlc3BvbnNpdmUvcmVzcG9uc2l2ZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy90aXRsZS90aXRsZS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL2xvY2FsZS9sb2NhbGUudG9rZW5zLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL2xvY2FsZS9sYW5ndWFnZXMvemgtQ04udHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xvY2FsZS5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL2xvY2FsZS9sb2NhbGUubW9kdWxlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL2xvY2FsZS9sYW5ndWFnZXMvZW4tVVMudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvbG9jYWxlL2xhbmd1YWdlcy96aC1UVy50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9zZXJ2aWNlcy9tb2RhbC9tb2RhbC5oZWxwZXIudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvZHJhd2VyL2RyYXdlci5oZWxwZXIudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvc2VydmljZXMvaHR0cC9odHRwLmNsaWVudC50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9waXBlcy9kYXRlL2RhdGUucGlwZS50cyIsIm5nOi8vQGRlbG9uL3RoZW1lL3NyYy9waXBlcy9jdXJyZW5jeS9jbi1jdXJyZW5jeS5waXBlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3BpcGVzL2tleXMva2V5cy5waXBlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3BpcGVzL3luL3luLnBpcGUudHMiLCJuZzovL0BkZWxvbi90aGVtZS9zcmMvdGhlbWUubW9kdWxlLnRzIiwibmc6Ly9AZGVsb24vdGhlbWUvc3JjL3ZlcnNpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBXSU5ET1cgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ1dpbmRvdycpO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gcHJlbG9hZGVyRmluaXNoZWQoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICBjb25zdCBwcmVsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyJyk7XHJcblxyXG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlKCkge1xyXG4gICAgLy8gcHJlbG9hZGVyIHZhbHVlIG51bGwgd2hlbiBydW5uaW5nIC0taG1yXHJcbiAgICBpZiAoIXByZWxvYWRlcikgcmV0dXJuO1xyXG4gICAgcHJlbG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgcHJlbG9hZGVyLmNsYXNzTmFtZSA9ICdwcmVsb2FkZXItaGlkZGVuJztcclxuICAgIH0pO1xyXG5cclxuICAgIHByZWxvYWRlci5jbGFzc05hbWUgKz0gJyBwcmVsb2FkZXItaGlkZGVuLWFkZCBwcmVsb2FkZXItaGlkZGVuLWFkZC1hY3RpdmUnO1xyXG4gIH1cclxuXHJcbiAgKDxhbnk+d2luZG93KS5hcHBCb290c3RyYXAgPSAoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcmVtb3ZlKCk7XHJcbiAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgIH0sIDEwMCk7XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkkxOE5TZXJ2aWNlIHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG4gIHVzZShsYW5nOiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICBnZXRMYW5ncygpOiBhbnlbXTtcclxuXHJcbiAgZmFueWkoa2V5OiBzdHJpbmcpOiBhbnk7XHJcblxyXG4gIHJlYWRvbmx5IGNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQUxBSU5fSTE4Tl9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBbGFpbkkxOE5TZXJ2aWNlPihcclxuICAnYWxhaW5UcmFuc2xhdG9yVG9rZW4nLFxyXG4pO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEFsYWluSTE4TlNlcnZpY2VGYWtlIGltcGxlbWVudHMgQWxhaW5JMThOU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xyXG5cclxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlsdGVyKHcgPT4gdyAhPSBudWxsKSk7XHJcbiAgfVxyXG5cclxuICB1c2UobGFuZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZSQubmV4dChsYW5nKTtcclxuICB9XHJcblxyXG4gIGdldExhbmdzKCk6IGFueVtdIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIGZhbnlpKGtleTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4ga2V5O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIE9wdGlvbmFsLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XHJcblxyXG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9pMThuJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBNZW51U2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfY2hhbmdlJDogQmVoYXZpb3JTdWJqZWN0PE1lbnVbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE1lbnVbXT4oW10pO1xyXG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBkYXRhOiBNZW51W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxyXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBhY2xTZXJ2aWNlOiBBQ0xTZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgaWYgKHRoaXMuaTE4blNydilcclxuICAgICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4blNydi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVzdW1lKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPE1lbnVbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZSQucGlwZShzaGFyZSgpKTtcclxuICB9XHJcblxyXG4gIHZpc2l0KGNhbGxiYWNrOiAoaXRlbTogTWVudSwgcGFyZW50TWVudW06IE1lbnUsIGRlcHRoPzogbnVtYmVyKSA9PiB2b2lkKSB7XHJcbiAgICBjb25zdCBpbkZuID0gKGxpc3Q6IE1lbnVbXSwgcGFyZW50TWVudTogTWVudSwgZGVwdGg6IG51bWJlcikgPT4ge1xyXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xyXG4gICAgICAgIGNhbGxiYWNrKGl0ZW0sIHBhcmVudE1lbnUsIGRlcHRoKTtcclxuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGluRm4oaXRlbS5jaGlsZHJlbiwgaXRlbSwgZGVwdGggKyAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpbkZuKHRoaXMuZGF0YSwgbnVsbCwgMCk7XHJcbiAgfVxyXG5cclxuICBhZGQoaXRlbXM6IE1lbnVbXSkge1xyXG4gICAgdGhpcy5kYXRhID0gaXRlbXM7XHJcbiAgICB0aGlzLnJlc3VtZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6nCh8KNw6fCvcKuw6jCj8Kcw6XCjcKVw6/CvMKMw6XCj8Kvw6jCg8K9STE4TsOjwoDCgcOnwpTCqMOmwojCt8Omwp3Cg8OpwpnCkMOlwo/CmMOlworCqMOmwpfCtsOpwpzCgMOowqbCgcOowrDCg8OnwpTCqMOlwojCt8OmwpbCsFxyXG4gICAqL1xyXG4gIHJlc3VtZShjYWxsYmFjaz86IChpdGVtOiBNZW51LCBwYXJlbnRNZW51bTogTWVudSwgZGVwdGg/OiBudW1iZXIpID0+IHZvaWQpIHtcclxuICAgIGxldCBpID0gMTtcclxuICAgIGNvbnN0IHNob3J0Y3V0czogTWVudVtdID0gW107XHJcbiAgICB0aGlzLnZpc2l0KChpdGVtLCBwYXJlbnQsIGRlcHRoKSA9PiB7XHJcbiAgICAgIGl0ZW0uX19pZCA9IGkrKztcclxuICAgICAgaXRlbS5fX3BhcmVudCA9IHBhcmVudDtcclxuICAgICAgaXRlbS5fZGVwdGggPSBkZXB0aDtcclxuXHJcbiAgICAgIGlmICghaXRlbS5saW5rKSBpdGVtLmxpbmsgPSAnJztcclxuICAgICAgaWYgKHR5cGVvZiBpdGVtLmxpbmtFeGFjdCA9PT0gJ3VuZGVmaW5lZCcpIGl0ZW0ubGlua0V4YWN0ID0gZmFsc2U7XHJcbiAgICAgIGlmICghaXRlbS5leHRlcm5hbExpbmspIGl0ZW0uZXh0ZXJuYWxMaW5rID0gJyc7XHJcblxyXG4gICAgICAvLyBiYWRnZVxyXG4gICAgICBpZiAoaXRlbS5iYWRnZSkge1xyXG4gICAgICAgIGlmIChpdGVtLmJhZGdlRG90ICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICBpdGVtLmJhZGdlRG90ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXRlbS5iYWRnZVN0YXR1cykge1xyXG4gICAgICAgICAgaXRlbS5iYWRnZVN0YXR1cyA9ICdlcnJvcic7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpdGVtLl90eXBlID0gaXRlbS5leHRlcm5hbExpbmsgPyAyIDogMTtcclxuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaXRlbS5fdHlwZSA9IDM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHNob3J0Y3V0XHJcbiAgICAgIGlmIChwYXJlbnQgJiYgaXRlbS5zaG9ydGN1dCA9PT0gdHJ1ZSAmJiBwYXJlbnQuc2hvcnRjdXRSb290ICE9PSB0cnVlKVxyXG4gICAgICAgIHNob3J0Y3V0cy5wdXNoKGl0ZW0pO1xyXG5cclxuICAgICAgaXRlbS50ZXh0ID1cclxuICAgICAgICBpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2ID8gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bikgOiBpdGVtLnRleHQ7XHJcblxyXG4gICAgICAvLyBncm91cFxyXG4gICAgICBpdGVtLmdyb3VwID0gdHlwZW9mIGl0ZW0uZ3JvdXAgIT09ICdib29sZWFuJyA/IHRydWUgOiBpdGVtLmdyb3VwO1xyXG5cclxuICAgICAgLy8gaGlkZGVuXHJcbiAgICAgIGl0ZW0uX2hpZGRlbiA9IHR5cGVvZiBpdGVtLmhpZGUgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBpdGVtLmhpZGU7XHJcblxyXG4gICAgICAvLyBhY2xcclxuICAgICAgaWYgKGl0ZW0uYWNsICYmIHRoaXMuYWNsU2VydmljZSkge1xyXG4gICAgICAgIGl0ZW0uX2hpZGRlbiA9ICF0aGlzLmFjbFNlcnZpY2UuY2FuKGl0ZW0uYWNsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhpdGVtLCBwYXJlbnQsIGRlcHRoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubG9hZFNob3J0Y3V0KHNob3J0Y3V0cyk7XHJcbiAgICB0aGlzLl9jaGFuZ2UkLm5leHQodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOlworCoMOowr3CvcOlwr/Cq8Omwo3Ct8Oowo/CnMOlwo3ClcOvwrzCjMOlworCoMOowr3CvcOkwr3CjcOnwr3CrsOowqfChMOlwojCmcOlwqbCgsOkwrjCi8OvwrzCmlxyXG4gICAqIDHDo8KAwoHDp8K7wp/DpMK4woDDpcKcwqjDpMK4wovDpsKgwocww6fCmsKEw6jCisKCw6fCgsK5w6TCuMKLw6/CvMKIw6XCjcKzw6PCgMKQw6TCuMK7w6XCr8K8w6jCiMKqw6PCgMKRw6jCisKCw6fCgsK5w6TCuMKLw6bClsK5w6/CvMKJXHJcbiAgICogICAgICAxw6PCgMKBw6jCi8KlIGNoaWxkcmVuIMOlwq3CmMOlwpzCqCDDo8KAwpBzaG9ydGN1dFJvb3Q6IHRydWXDo8KAwpHDpcKIwpnDpsKcwoDDpMK8wpjDpcKFwojDo8KAwpDDpsKOwqjDqMKNwpDDo8KAwpHDqMK/wpnDp8Knwo3DpsKWwrnDpcK8wo9cclxuICAgKiAgICAgIDLDo8KAwoHDpcKQwqbDpcKIwpnDpsKfwqXDpsKJwr7DpcK4wqbDpsKcwonDo8KAwpBkYXNoYm9hcmTDo8KAwpHDpcKtwpfDpsKgwrfDqcKTwr7DpsKOwqXDr8K8wozDqMKLwqXDpcKtwpjDpcKcwqjDpcKIwpnDpcKcwqjDpsKtwqTDqMKPwpzDpcKNwpXDp8KawoTDpMK4wovDpsKWwrnDpcKIwpvDpcK7wrrDpcK/wqvDpsKNwrfDpcKFwqXDpcKPwqNcclxuICAgKiAgICAgIDPDo8KAwoHDpcKQwqbDpcKIwpnDpsKUwr7DpcKcwqgww6jCisKCw6fCgsK5w6TCvcKNw6fCvcKuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBsb2FkU2hvcnRjdXQoc2hvcnRjdXRzOiBNZW51W10pIHtcclxuICAgIGlmIChzaG9ydGN1dHMubGVuZ3RoID09PSAwIHx8IHRoaXMuZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxzID0gdGhpcy5kYXRhWzBdLmNoaWxkcmVuO1xyXG4gICAgbGV0IHBvcyA9IGxzLmZpbmRJbmRleCh3ID0+IHcuc2hvcnRjdXRSb290ID09PSB0cnVlKTtcclxuICAgIGlmIChwb3MgPT09IC0xKSB7XHJcbiAgICAgIHBvcyA9IGxzLmZpbmRJbmRleCh3ID0+IHcubGluay5pbmNsdWRlcygnZGFzaGJvYXJkJykpO1xyXG4gICAgICBwb3MgPSAocG9zICE9PSAtMSA/IHBvcyA6IC0xKSArIDE7XHJcbiAgICAgIGNvbnN0IHNob3J0Y3V0TWVudSA9IDxNZW51PntcclxuICAgICAgICB0ZXh0OiAnw6XCv8Krw6bCjcK3w6jCj8Kcw6XCjcKVJyxcclxuICAgICAgICBpMThuOiAnc2hvcnRjdXQnLFxyXG4gICAgICAgIGljb246ICdpY29uLXJvY2tldCcsXHJcbiAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmRhdGFbMF0uY2hpbGRyZW4uc3BsaWNlKHBvcywgMCwgc2hvcnRjdXRNZW51KTtcclxuICAgIH1cclxuICAgIGxldCBfZGF0YSA9IHRoaXMuZGF0YVswXS5jaGlsZHJlbltwb3NdO1xyXG4gICAgaWYgKF9kYXRhLmkxOG4gJiYgdGhpcy5pMThuU3J2KSBfZGF0YS50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKF9kYXRhLmkxOG4pO1xyXG4gICAgX2RhdGEgPSBPYmplY3QuYXNzaWduKF9kYXRhLCB7XHJcbiAgICAgIHNob3J0Y3V0Um9vdDogdHJ1ZSxcclxuICAgICAgX3R5cGU6IDMsXHJcbiAgICAgIF9faWQ6IC0xLFxyXG4gICAgICBfZGVwdGg6IDEsXHJcbiAgICB9KTtcclxuICAgIF9kYXRhLmNoaWxkcmVuID0gc2hvcnRjdXRzLm1hcChpID0+IHtcclxuICAgICAgaS5fZGVwdGggPSAyO1xyXG4gICAgICByZXR1cm4gaTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1lbnVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwrjChcOnwqnCusOowo/CnMOlwo3ClVxyXG4gICAqL1xyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5kYXRhID0gW107XHJcbiAgICB0aGlzLl9jaGFuZ2UkLm5leHQodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwqDCucOmwo3CrlVSTMOowq7CvsOnwr3CrsOowo/CnMOlwo3ClSBgX29wZW5gIMOlwrHCnsOmwoDCp1xyXG4gICAqIEBwYXJhbSB1cmwgVVJMw6XCnMKww6XCncKAXHJcbiAgICovXHJcbiAgb3BlbmVkQnlVcmwodXJsOiBzdHJpbmcpIHtcclxuICAgIGlmICghdXJsKSByZXR1cm47XHJcblxyXG4gICAgbGV0IGZpbmRJdGVtOiBNZW51ID0gbnVsbDtcclxuICAgIHRoaXMudmlzaXQoaXRlbSA9PiB7XHJcbiAgICAgIGl0ZW0uX29wZW4gPSBmYWxzZTtcclxuICAgICAgaWYgKCFpdGVtLmxpbmspIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFmaW5kSXRlbSAmJiB1cmwuc3RhcnRzV2l0aChpdGVtLmxpbmspKSB7XHJcbiAgICAgICAgZmluZEl0ZW0gPSBpdGVtO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICghZmluZEl0ZW0pIHJldHVybjtcclxuXHJcbiAgICBkbyB7XHJcbiAgICAgIGZpbmRJdGVtLl9vcGVuID0gdHJ1ZTtcclxuICAgICAgZmluZEl0ZW0gPSBmaW5kSXRlbS5fX3BhcmVudDtcclxuICAgIH0gd2hpbGUgKGZpbmRJdGVtKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwqDCucOmwo3CrnVybMOowo7Ct8Olwo/ClsOowo/CnMOlwo3ClcOlwojCl8OowqHCqFxyXG4gICAqIEBwYXJhbSB1cmxcclxuICAgKi9cclxuICBnZXRQYXRoQnlVcmwodXJsOiBzdHJpbmcpOiBNZW51W10ge1xyXG4gICAgbGV0IGl0ZW06IE1lbnUgPSBudWxsO1xyXG4gICAgdGhpcy52aXNpdCgoaSwgcGFyZW50LCBkZXB0aCkgPT4ge1xyXG4gICAgICBpZiAoaS5saW5rID09PSB1cmwpIHtcclxuICAgICAgICBpdGVtID0gaTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmV0OiBNZW51W10gPSBbXTtcclxuICAgIGlmICghaXRlbSkgcmV0dXJuIHJldDtcclxuXHJcbiAgICBkbyB7XHJcbiAgICAgIHJldC5zcGxpY2UoMCwgMCwgaXRlbSk7XHJcbiAgICAgIGl0ZW0gPSBpdGVtLl9fcGFyZW50O1xyXG4gICAgfSB3aGlsZSAoaXRlbSk7XHJcblxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2hhbmdlJC51bnN1YnNjcmliZSgpO1xyXG4gICAgaWYgKHRoaXMuaTE4biQpIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBJbmplY3RhYmxlLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgRWxlbWVudFJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBPdmVybGF5LFxyXG4gIE92ZXJsYXlSZWYsXHJcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcclxuICBPdmVybGF5Q29uZmlnLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBUZW1wbGF0ZVBvcnRhbCxcclxuICBDb21wb25lbnRQb3J0YWwsXHJcbiAgQ29tcG9uZW50VHlwZSxcclxufSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuXHJcbmV4cG9ydCB0eXBlIENvbnRleHRNZW51VHlwZSA9IFRlbXBsYXRlUmVmPHt9PiB8IENvbXBvbmVudFR5cGU8e30+O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51U2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWY6IE92ZXJsYXlSZWY7XHJcbiAgcHJpdmF0ZSB0eXBlOiBDb250ZXh0TWVudVR5cGU7XHJcbiAgcHJpdmF0ZSBjb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge31cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGUoZXZlbnQ6IE1vdXNlRXZlbnQsIG9wdGlvbnM/OiBPdmVybGF5Q29uZmlnKSB7XHJcbiAgICBjb25zdCBmYWtlRWxlbWVudCA9IG5ldyBFbGVtZW50UmVmKHtcclxuICAgICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiAoKTogQ2xpZW50UmVjdCA9PiAoe1xyXG4gICAgICAgIGJvdHRvbTogZXZlbnQuY2xpZW50WSxcclxuICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgbGVmdDogZXZlbnQuY2xpZW50WCxcclxuICAgICAgICByaWdodDogZXZlbnQuY2xpZW50WCxcclxuICAgICAgICB0b3A6IGV2ZW50LmNsaWVudFksXHJcbiAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgIH0pLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXHJcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxyXG4gICAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSxcclxuICAgICAgICB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSxcclxuICAgICAgKSxcclxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXHJcbiAgICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LFxyXG4gICAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9LFxyXG4gICAgICApLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcclxuICAgICAgLnBvc2l0aW9uKClcclxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8oZmFrZUVsZW1lbnQpXHJcbiAgICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucyk7XHJcbiAgICB0aGlzLnJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoXHJcbiAgICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcG9zaXRpb25TdHJhdGVneSxcclxuICAgICAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxyXG4gICAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICAgIGlmICh0aGlzLnR5cGUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLnJlZi5hdHRhY2gobmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMudHlwZSwgdGhpcy5jb250YWluZXJSZWYpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKHRoaXMudHlwZSwgdGhpcy5jb250YWluZXJSZWYpKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZSgpKTtcclxuICB9XHJcblxyXG4gIG9wZW4oXHJcbiAgICBldmVudDogTW91c2VFdmVudCxcclxuICAgIHJlZjogQ29udGV4dE1lbnVUeXBlLFxyXG4gICAgY29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgb3B0aW9ucz86IE92ZXJsYXlDb25maWcsXHJcbiAgKTogZmFsc2Uge1xyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgdGhpcy50eXBlID0gcmVmO1xyXG4gICAgdGhpcy5jb250YWluZXJSZWYgPSBjb250YWluZXJSZWY7XHJcbiAgICB0aGlzLmNyZWF0ZShldmVudCwgb3B0aW9ucyk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIGlmICghdGhpcy5yZWYpIHJldHVybjtcclxuICAgIHRoaXMucmVmLmRldGFjaCgpO1xyXG4gICAgdGhpcy5yZWYuZGlzcG9zZSgpO1xyXG4gICAgdGhpcy5yZWYgPSBudWxsO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICcuLi8uLi93aW5fdG9rZW5zJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbjogYW55LFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcclxuICApIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowq7CvsOnwr3CrsOmwrvCmsOlworCqMOmwp3CocOowofCs8OmwozCh8Olwq7CmsOlwoXCg8OnwrTCoFxyXG4gICAqIEBwYXJhbSBlbGVtZW50IMOmwozCh8Olwq7CmsOlwoXCg8OnwrTCoMOvwrzCjMOpwrvCmMOowq7CpCBgZG9jdW1lbnQuYm9keWBcclxuICAgKiBAcGFyYW0gdG9wT2Zmc2V0IMOlwoHCj8OnwqfCu8OlwoDCvMOvwrzCjMOpwrvCmMOowq7CpCBgMGBcclxuICAgKi9cclxuICBzY3JvbGxUb0VsZW1lbnQoZWxlbWVudD86IEVsZW1lbnQsIHRvcE9mZnNldCA9IDApIHtcclxuICAgIGlmICghZWxlbWVudCkgZWxlbWVudCA9IHRoaXMuZG9jLmJvZHk7XHJcblxyXG4gICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xyXG5cclxuICAgIGNvbnN0IHcgPSB0aGlzLndpbjtcclxuICAgIGlmICh3ICYmIHcuc2Nyb2xsQnkpIHtcclxuICAgICAgdy5zY3JvbGxCeSgwLCBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHRvcE9mZnNldCk7XHJcblxyXG4gICAgICBpZiAody5wYWdlWU9mZnNldCA8IDIwKSB7XHJcbiAgICAgICAgdy5zY3JvbGxCeSgwLCAtdy5wYWdlWU9mZnNldCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwrvCmsOlworCqMOowofCs8OpwqHCtsOpwoPCqFxyXG4gICAqIEBwYXJhbSB0b3BPZmZzZXQgw6XCgcKPw6fCp8K7w6XCgMK8w6/CvMKMw6nCu8KYw6jCrsKkIGAwYFxyXG4gICAqL1xyXG4gIHNjcm9sbFRvVG9wKHRvcE9mZnNldCA9IDApIHtcclxuICAgIHRoaXMuc2Nyb2xsVG9FbGVtZW50KHRoaXMuZG9jLmJvZHksIHRvcE9mZnNldCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBcHAsIExheW91dCwgVXNlciwgU2V0dGluZ3NOb3RpZnkgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5jb25zdCBMQVlPVVRfS0VZID0gJ2xheW91dCc7XHJcbmNvbnN0IFVTRVJfS0VZID0gJ3VzZXInO1xyXG5jb25zdCBBUFBfS0VZID0gJ2FwcCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlIHtcclxuICBwcml2YXRlIG5vdGlmeSQgPSBuZXcgU3ViamVjdDxTZXR0aW5nc05vdGlmeT4oKTtcclxuICBwcml2YXRlIF9hcHA6IEFwcCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfdXNlcjogVXNlciA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfbGF5b3V0OiBMYXlvdXQgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIGdldChrZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCAnbnVsbCcpIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxheW91dCgpOiBMYXlvdXQge1xyXG4gICAgaWYgKCF0aGlzLl9sYXlvdXQpIHtcclxuICAgICAgdGhpcy5fbGF5b3V0ID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgICA8TGF5b3V0PntcclxuICAgICAgICAgIGZpeGVkOiB0cnVlLFxyXG4gICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcclxuICAgICAgICAgIGJveGVkOiBmYWxzZSxcclxuICAgICAgICAgIGxhbmc6IG51bGwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aGlzLmdldChMQVlPVVRfS0VZKSxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXQoTEFZT1VUX0tFWSwgdGhpcy5fbGF5b3V0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9sYXlvdXQ7XHJcbiAgfVxyXG5cclxuICBnZXQgYXBwKCk6IEFwcCB7XHJcbiAgICBpZiAoIXRoaXMuX2FwcCkge1xyXG4gICAgICB0aGlzLl9hcHAgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgIDxBcHA+e1xyXG4gICAgICAgICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhpcy5nZXQoQVBQX0tFWSksXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0KEFQUF9LRVksIHRoaXMuX2FwcCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fYXBwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHVzZXIoKTogVXNlciB7XHJcbiAgICBpZiAoIXRoaXMuX3VzZXIpIHtcclxuICAgICAgdGhpcy5fdXNlciA9IE9iamVjdC5hc3NpZ24oPFVzZXI+e30sIHRoaXMuZ2V0KFVTRVJfS0VZKSk7XHJcbiAgICAgIHRoaXMuc2V0KFVTRVJfS0VZLCB0aGlzLl91c2VyKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl91c2VyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5vdGlmeSgpOiBPYnNlcnZhYmxlPFNldHRpbmdzTm90aWZ5PiB7XHJcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0TGF5b3V0KG5hbWU6IHN0cmluZyB8IExheW91dCwgdmFsdWU/OiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5sYXlvdXRbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xheW91dCA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldChMQVlPVVRfS0VZLCB0aGlzLl9sYXlvdXQpO1xyXG4gICAgdGhpcy5ub3RpZnkkLm5leHQoeyB0eXBlOiAnbGF5b3V0JywgbmFtZSwgdmFsdWUgfSBhcyBhbnkpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBzZXRBcHAodmFsdWU6IEFwcCkge1xyXG4gICAgdGhpcy5fYXBwID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldChBUFBfS0VZLCB2YWx1ZSk7XHJcbiAgICB0aGlzLm5vdGlmeSQubmV4dCh7IHR5cGU6ICdhcHAnLCB2YWx1ZSB9KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlcih2YWx1ZTogVXNlcikge1xyXG4gICAgdGhpcy5fdXNlciA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXQoVVNFUl9LRVksIHZhbHVlKTtcclxuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ3VzZXInLCB2YWx1ZSB9KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcgfSBmcm9tICcuL3NlcnZpY2VzL2h0dHAvaHR0cC5jb25maWcnO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlQ29uZmlnIH0gZnJvbSAnLi9zZXJ2aWNlcy9yZXNwb25zaXZlL3Jlc3BvbnNpdmUuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBBbGFpblRoZW1lQ29uZmlnIHtcclxuICBodHRwPzogSHR0cENsaWVudENvbmZpZztcclxuICByZXNwb25zaXZlPzogUmVzcG9uc2l2ZUNvbmZpZztcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFsYWluVGhlbWVDb25maWcgfSBmcm9tICcuLi8uLi90aGVtZS5jb25maWcnO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlQ29uZmlnIH0gZnJvbSAnLi9yZXNwb25zaXZlLmNvbmZpZyc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVQX01BWCA9IDY7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgUmVzcG9uc2l2ZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgY29nOiBSZXNwb25zaXZlQ29uZmlnO1xyXG4gIGNvbnN0cnVjdG9yKGNvZzogQWxhaW5UaGVtZUNvbmZpZykge1xyXG4gICAgdGhpcy5jb2cgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICA8UmVzcG9uc2l2ZUNvbmZpZz57XHJcbiAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgIDE6IHsgeHM6IDI0IH0sXHJcbiAgICAgICAgICAyOiB7IHhzOiAyNCwgc206IDEyIH0sXHJcbiAgICAgICAgICAzOiB7IHhzOiAyNCwgc206IDEyLCBtZDogOCB9LFxyXG4gICAgICAgICAgNDogeyB4czogMjQsIHNtOiAxMiwgbWQ6IDgsIGxnOiA2IH0sXHJcbiAgICAgICAgICA1OiB7IHhzOiAyNCwgc206IDEyLCBtZDogOCwgbGc6IDYsIHhsOiA0IH0sXHJcbiAgICAgICAgICA2OiB7IHhzOiAyNCwgc206IDEyLCBtZDogOCwgbGc6IDYsIHhsOiA0LCB4eGw6IDIgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBjb2chLnJlc3BvbnNpdmUsXHJcbiAgICApO1xyXG4gICAgaWYgKFxyXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmNvZy5ydWxlcylcclxuICAgICAgICAubWFwKGkgPT4gK2kpXHJcbiAgICAgICAgLnNvbWUoKGk6IG51bWJlcikgPT4gaSA8IDEgfHwgaSA+IFJFUF9NQVgpXHJcbiAgICApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIGBbdGhlbWVdIHRoZSByZXNwb25zZWl2ZSBydWxlIGluZGV4IHZhbHVlIHJhbmdlIG11c3QgYmUgMS0ke1JFUF9NQVh9YCxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdlbkNscyhjb3VudDogbnVtYmVyKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgcnVsZSA9IHRoaXMuY29nLnJ1bGVzW2NvdW50ID4gUkVQX01BWCA/IFJFUF9NQVggOiBNYXRoLm1heChjb3VudCwgMSldO1xyXG4gICAgY29uc3QgYW50Q29sQ2xhc3MgPSAnYW50LWNvbCc7XHJcbiAgICBjb25zdCBjbHNNYXAgPSBbYCR7YW50Q29sQ2xhc3N9LXhzLSR7cnVsZS54c31gXTtcclxuICAgIGlmIChydWxlLnNtKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30tc20tJHtydWxlLnNtfWApO1xyXG4gICAgaWYgKHJ1bGUubWQpIGNsc01hcC5wdXNoKGAke2FudENvbENsYXNzfS1tZC0ke3J1bGUubWR9YCk7XHJcbiAgICBpZiAocnVsZS5sZykgY2xzTWFwLnB1c2goYCR7YW50Q29sQ2xhc3N9LWxnLSR7cnVsZS5sZ31gKTtcclxuICAgIGlmIChydWxlLnhsKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30teGwtJHtydWxlLnhsfWApO1xyXG4gICAgaWYgKHJ1bGUueHhsKSBjbHNNYXAucHVzaChgJHthbnRDb2xDbGFzc30teHhsLSR7cnVsZS54eGx9YCk7XHJcbiAgICByZXR1cm4gY2xzTWFwO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEluamVjdGFibGUsXHJcbiAgSW5qZWN0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIEluamVjdG9yLFxyXG4gIE9uRGVzdHJveSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJy4uL21lbnUvbWVudS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiwgQWxhaW5JMThOU2VydmljZSB9IGZyb20gJy4uL2kxOG4vaTE4bic7XHJcblxyXG4vKipcclxuICogw6jCrsK+w6fCvcKuw6bCoMKHw6nCosKYXHJcbiAqIEBzZWUgaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9zZXJ2aWNlI1RpdGxlU2VydmljZVxyXG4gKi9cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFRpdGxlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfcHJlZml4ID0gJyc7XHJcbiAgcHJpdmF0ZSBfc3VmZml4ID0gJyc7XHJcbiAgcHJpdmF0ZSBfc2VwYXJhdG9yID0gJyAtICc7XHJcbiAgcHJpdmF0ZSBfcmV2ZXJzZSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2RlZmF1bHQgPSAnTm90IFBhZ2UgTmFtZSc7XHJcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSB0aXRsZTogVGl0bGUsXHJcbiAgICBwcml2YXRlIG1lbnVTcnY6IE1lbnVTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcclxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5pMThuU3J2KVxyXG4gICAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuU3J2LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRUaXRsZSgpKTtcclxuICB9XHJcblxyXG4gIC8qKiDDqMKuwr7Dp8K9wq7DpcKIwobDqcKawpTDp8KswqYgKi9cclxuICBzZXQgc2VwYXJhdG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NlcGFyYXRvciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIMOowq7CvsOnwr3CrsOlwonCjcOnwrzCgCAqL1xyXG4gIHNldCBwcmVmaXgodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcHJlZml4ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiogw6jCrsK+w6fCvcKuw6XCkMKOw6fCvMKAICovXHJcbiAgc2V0IHN1ZmZpeCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9zdWZmaXggPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiDDqMKuwr7Dp8K9wq7DpsKYwq/DpcKQwqbDpcKPwo3DqMK9wqwgKi9cclxuICBzZXQgcmV2ZXJzZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fcmV2ZXJzZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIMOowq7CvsOnwr3CrsOpwrvCmMOowq7CpMOmwqDCh8OpwqLCmMOlwpDCjSAqL1xyXG4gIHNldCBkZWZhdWx0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2RlZmF1bHQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QnlFbGVtZW50KCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBlbCA9XHJcbiAgICAgIHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJy5hbGFpbi1kZWZhdWx0X19jb250ZW50LXRpdGxlIGgxJykgfHxcclxuICAgICAgdGhpcy5kb2MucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyX190aXRsZScpO1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgIHJldHVybiBlbC5maXJzdENoaWxkLnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QnlSb3V0ZSgpOiBzdHJpbmcge1xyXG4gICAgbGV0IG5leHQgPSB0aGlzLmluamVjdG9yLmdldChBY3RpdmF0ZWRSb3V0ZSk7XHJcbiAgICB3aGlsZSAobmV4dC5maXJzdENoaWxkKSBuZXh0ID0gbmV4dC5maXJzdENoaWxkO1xyXG4gICAgY29uc3QgZGF0YSA9IChuZXh0LnNuYXBzaG90ICYmIG5leHQuc25hcHNob3QuZGF0YSkgfHwge307XHJcbiAgICBpZiAoZGF0YS50aXRsZUkxOG4gJiYgdGhpcy5pMThuU3J2KVxyXG4gICAgICBkYXRhLnRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGRhdGEudGl0bGVJMThuKTtcclxuICAgIHJldHVybiBkYXRhLnRpdGxlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRCeU1lbnUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG1lbnVzID0gdGhpcy5tZW51U3J2LmdldFBhdGhCeVVybCh0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpLnVybCk7XHJcbiAgICBpZiAoIW1lbnVzIHx8IG1lbnVzLmxlbmd0aCA8PSAwKSByZXR1cm4gJyc7XHJcblxyXG4gICAgY29uc3QgaXRlbSA9IG1lbnVzW21lbnVzLmxlbmd0aCAtIDFdO1xyXG4gICAgbGV0IHRpdGxlO1xyXG4gICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XHJcbiAgICByZXR1cm4gdGl0bGUgfHwgaXRlbS50ZXh0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6jCrsK+w6fCvcKuw6bCoMKHw6nCosKYXHJcbiAgICovXHJcbiAgc2V0VGl0bGUodGl0bGU/OiBzdHJpbmcgfCBzdHJpbmdbXSkge1xyXG4gICAgaWYgKCF0aXRsZSkge1xyXG4gICAgICB0aXRsZSA9XHJcbiAgICAgICAgdGhpcy5nZXRCeVJvdXRlKCkgfHxcclxuICAgICAgICB0aGlzLmdldEJ5TWVudSgpIHx8XHJcbiAgICAgICAgdGhpcy5nZXRCeUVsZW1lbnQoKSB8fFxyXG4gICAgICAgIHRoaXMuX2RlZmF1bHQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGl0bGUgJiYgIUFycmF5LmlzQXJyYXkodGl0bGUpKSB7XHJcbiAgICAgIHRpdGxlID0gW3RpdGxlXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbmV3VGl0bGVzID0gW107XHJcbiAgICBpZiAodGhpcy5fcHJlZml4KSB7XHJcbiAgICAgIG5ld1RpdGxlcy5wdXNoKHRoaXMuX3ByZWZpeCk7XHJcbiAgICB9XHJcbiAgICBuZXdUaXRsZXMucHVzaCguLi4odGl0bGUgYXMgc3RyaW5nW10pKTtcclxuICAgIGlmICh0aGlzLl9zdWZmaXgpIHtcclxuICAgICAgbmV3VGl0bGVzLnB1c2godGhpcy5fc3VmZml4KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9yZXZlcnNlKSB7XHJcbiAgICAgIG5ld1RpdGxlcyA9IG5ld1RpdGxlcy5yZXZlcnNlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRpdGxlLnNldFRpdGxlKG5ld1RpdGxlcy5qb2luKHRoaXMuX3NlcGFyYXRvcikpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pMThuJCkgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTE9OX0xPQ0FMRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdkZWxvbi1sb2NhbGUnKTtcclxuIiwiaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS50eXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCA8TG9jYWxlRGF0YT57XHJcbiAgYWJicjogJ3poLUNOJyxcclxuICBleGNlcHRpb246IHtcclxuICAgIDQwMzogJ8OmworCscOmwq3CicOvwrzCjMOkwr3CoMOmwpfCoMOmwp3Cg8Oowq7Cv8OpwpfCrsOowq/CpcOpwqHCtcOpwp3CoicsXHJcbiAgICA0MDQ6ICfDpsKKwrHDpsKtwonDr8K8wozDpMK9wqDDqMKuwr/DqcKXwq7Dp8KawoTDqcKhwrXDqcKdwqLDpMK4wo3DpcKtwpjDpcKcwqgnLFxyXG4gICAgNTAwOiAnw6bCisKxw6bCrcKJw6/CvMKMw6bCnMKNw6XCisKhw6XCmcKow6XCh8K6w6nClMKZw6TCusKGJyxcclxuICAgIGJhY2tUb0hvbWU6ICfDqMK/wpTDpcKbwp7DqcKmwpbDqcKhwrUnLFxyXG4gIH0sXHJcbiAgbm90aWNlSWNvbjoge1xyXG4gICAgZW1wdHlUZXh0OiAnw6bCmsKCw6bCl8Kgw6bClcKww6bCjcKuJyxcclxuICAgIGNsZWFyVGV4dDogJ8OmwrjChcOnwqnCuicsXHJcbiAgfSxcclxuICByZXVzZVRhYjoge1xyXG4gICAgY2xvc2U6ICfDpcKFwrPDqcKXwq3DpsKgwofDp8Ktwr4nLFxyXG4gICAgY2xvc2VPdGhlcjogJ8OlwoXCs8OpwpfCrcOlwoXCtsOlwq7Cg8OmwqDCh8Onwq3CvicsXHJcbiAgICBjbG9zZVJpZ2h0OiAnw6XChcKzw6nCl8Ktw6XCj8Kzw6TCvsKnw6bCoMKHw6fCrcK+JyxcclxuICAgIGNsZWFyOiAnw6bCuMKFw6fCqcK6JyxcclxuICB9LFxyXG4gIHRhZ1NlbGVjdDoge1xyXG4gICAgZXhwYW5kOiAnw6XCscKVw6XCvMKAJyxcclxuICAgIGNvbGxhcHNlOiAnw6bClMK2w6jCtcK3JyxcclxuICB9LFxyXG4gIG1pbmlQcm9ncmVzczoge1xyXG4gICAgdGFyZ2V0OiAnw6fCm8Kuw6bCoMKHw6XCgMK8w6/CvMKaJ1xyXG4gIH0sXHJcbiAgc2Y6IHtcclxuICAgIHN1Ym1pdDogJ8Omwo/CkMOkwrrCpCcsXHJcbiAgICByZXNldDogJ8OpwofCjcOnwr3CricsXHJcbiAgICBzZWFyY2g6ICfDpsKQwpzDp8K0wqInLFxyXG4gICAgZWRpdDogJ8Okwr/CncOlwq3CmCcsXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBQcm92aWRlciwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4vbG9jYWxlLnR5cGVzJztcclxuaW1wb3J0IHsgREVMT05fTE9DQUxFIH0gZnJvbSAnLi9sb2NhbGUudG9rZW5zJztcclxuaW1wb3J0IHpoQ04gZnJvbSAnLi9sYW5ndWFnZXMvemgtQ04nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGVsb25Mb2NhbGVTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9sb2NhbGU6IExvY2FsZURhdGE7XHJcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMb2NhbGVEYXRhPih0aGlzLl9sb2NhbGUpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERFTE9OX0xPQ0FMRSkgbG9jYWxlOiBMb2NhbGVEYXRhKSB7XHJcbiAgICB0aGlzLnNldExvY2FsZShsb2NhbGUgfHwgemhDTik7XHJcbiAgfVxyXG5cclxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TG9jYWxlRGF0YT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHNldExvY2FsZShsb2NhbGU6IExvY2FsZURhdGEpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9sb2NhbGUgJiYgdGhpcy5fbG9jYWxlLmFiYnIgPT09IGxvY2FsZS5hYmJyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2xvY2FsZSA9IGxvY2FsZTtcclxuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGxvY2FsZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbG9jYWxlKCk6IExvY2FsZURhdGEge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcclxuICB9XHJcblxyXG4gIGdldERhdGEocGF0aDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlW3BhdGhdIHx8IHt9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlkoZXhpc3Q6IERlbG9uTG9jYWxlU2VydmljZSwgbG9jYWxlOiBMb2NhbGVEYXRhKTogRGVsb25Mb2NhbGVTZXJ2aWNlIHtcclxuICByZXR1cm4gZXhpc3QgfHwgbmV3IERlbG9uTG9jYWxlU2VydmljZShsb2NhbGUpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgREVMT05fTE9DQUxFX1NFUlZJQ0VfUFJPVklERVI6IFByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGUgICA6IERlbG9uTG9jYWxlU2VydmljZSxcclxuICB1c2VGYWN0b3J5OiBERUxPTl9MT0NBTEVfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZLFxyXG4gIGRlcHMgICAgICA6IFsgWyBuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIERlbG9uTG9jYWxlU2VydmljZSBdLCBERUxPTl9MT0NBTEUgXVxyXG59O1xyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHpoQ04gZnJvbSAnLi9sYW5ndWFnZXMvemgtQ04nO1xyXG5cclxuaW1wb3J0IHsgREVMT05fTE9DQUxFIH0gZnJvbSAnLi9sb2NhbGUudG9rZW5zJztcclxuaW1wb3J0IHsgREVMT05fTE9DQUxFX1NFUlZJQ0VfUFJPVklERVIgfSBmcm9tICcuL2xvY2FsZS5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7IHByb3ZpZGU6IERFTE9OX0xPQ0FMRSwgdXNlVmFsdWU6IHpoQ04gfSxcclxuICAgIERFTE9OX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWxvbkxvY2FsZU1vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlLnR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IDxMb2NhbGVEYXRhPntcclxuICBhYmJyOiAnZW4tVVMnLFxyXG4gIGV4Y2VwdGlvbjoge1xyXG4gICAgNDAzOiBgU29ycnksIHlvdSBkb24ndCBoYXZlIGFjY2VzcyB0byB0aGlzIHBhZ2VgLFxyXG4gICAgNDA0OiBgU29ycnksIHRoYXQgcGFnZSBkb24ndCBleGlzdGAsXHJcbiAgICA1MDA6IGBTb3JyeSwgc2VydmVyIGVycm9yYCxcclxuICAgIGJhY2tUb0hvbWU6ICdCYWNrIFRvIEhvbWUnLFxyXG4gIH0sXHJcbiAgbm90aWNlSWNvbjoge1xyXG4gICAgZW1wdHlUZXh0OiAnTm8gZGF0YScsXHJcbiAgICBjbGVhclRleHQ6ICdDbGVhcicsXHJcbiAgfSxcclxuICByZXVzZVRhYjoge1xyXG4gICAgY2xvc2U6ICdDbG9zZSB0YWInLFxyXG4gICAgY2xvc2VPdGhlcjogJ0Nsb3NlIG90aGVyIHRhYnMnLFxyXG4gICAgY2xvc2VSaWdodDogJ0Nsb3NlIHRhYnMgdG8gcmlnaHQnLFxyXG4gICAgY2xlYXI6ICdDbGVhciB0YWJzJyxcclxuICB9LFxyXG4gIHRhZ1NlbGVjdDoge1xyXG4gICAgZXhwYW5kOiAnRXhwYW5kJyxcclxuICAgIGNvbGxhcHNlOiAnQ29sbGFwc2UnLFxyXG4gIH0sXHJcbiAgbWluaVByb2dyZXNzOiB7XHJcbiAgICB0YXJnZXQ6ICdUYXJnZXQ6ICcsXHJcbiAgfSxcclxuICBzZjoge1xyXG4gICAgc3VibWl0OiAnU3VibWl0JyxcclxuICAgIHJlc2V0OiAnUmVzZXQnLFxyXG4gICAgc2VhcmNoOiAnU2VhcmNoJyxcclxuICAgIGVkaXQ6ICdTYXZlJyxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlLnR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IDxMb2NhbGVEYXRhPntcclxuICBhYmJyOiAnemgtVFcnLFxyXG4gIGV4Y2VwdGlvbjoge1xyXG4gICAgNDAzOiAnw6bCisKxw6bCrcKJw6/CvMKMw6XCpsKzw6fChMKhw6bCrMKKw6jCqMKqw6XClcKPw6jCqcKyw6nCoMKBw6nCncKiJyxcclxuICAgIDQwNDogJ8OmworCscOmwq3CicOvwrzCjMOlwqbCs8OowqjCqsOlwpXCj8OnwprChMOpwqDCgcOpwp3CosOkwrjCjcOlwq3CmMOlwpzCqCcsXHJcbiAgICA1MDA6ICfDpsKKwrHDpsKtwonDr8K8wozDpsKcwo3DpcKLwpnDpcKZwqjDpcKHwrrDqcKMwq/DpMK6woYnLFxyXG4gICAgYmFja1RvSG9tZTogJ8Oowr/ClMOlwpvCnsOpwqbClsOpwqDCgScsXHJcbiAgfSxcclxuICBub3RpY2VJY29uOiB7XHJcbiAgICBlbXB0eVRleHQ6ICfDpsKawqvDp8KEwqHDpsKVwrjDpsKTwponLFxyXG4gICAgY2xlYXJUZXh0OiAnw6bCuMKFw6fCqcK6JyxcclxuICB9LFxyXG4gIHJldXNlVGFiOiB7XHJcbiAgICBjbG9zZTogJ8OpwpfCnMOpwpbCicOmwqjCmcOnwrDCvScsXHJcbiAgICBjbG9zZU90aGVyOiAnw6nCl8Kcw6nClsKJw6XChcK2w6XCrsKDw6bCqMKZw6fCsMK9JyxcclxuICAgIGNsb3NlUmlnaHQ6ICfDqcKXwpzDqcKWwonDpcKPwrPDpcKBwrTDpsKowpnDp8Kwwr0nLFxyXG4gICAgY2xlYXI6ICfDpsK4woXDp8KpwronLFxyXG4gIH0sXHJcbiAgdGFnU2VsZWN0OiB7XHJcbiAgICBleHBhbmQ6ICfDpcKxwpXDqcKWwosnLFxyXG4gICAgY29sbGFwc2U6ICfDpsKUwrbDqMK1wrcnLFxyXG4gIH0sXHJcbiAgbWluaVByb2dyZXNzOiB7XHJcbiAgICB0YXJnZXQ6ICfDp8Kbwq7DpsKowpnDpcKAwrzDr8K8wponLFxyXG4gIH0sXHJcbiAgc2Y6IHtcclxuICAgIHN1Ym1pdDogJ8Omwo/CkMOkwrrCpCcsXHJcbiAgICByZXNldDogJ8OpwofCjcOnwr3CricsXHJcbiAgICBzZWFyY2g6ICfDpsKQwpzDp8K0wqInLFxyXG4gICAgZWRpdDogJ8Okwr/CncOlwq3CmCcsXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOek1vZGFsU2VydmljZSwgTW9kYWxPcHRpb25zRm9yU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb2RhbEhlbHBlck9wdGlvbnMge1xyXG4gIC8qKiDDpcKkwqfDpcKwwo/Dr8K8wpvDpMK+wovDpcKmwoLDr8K8wppsZ8OjwoDCgTYwMMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBsZ2AgKi9cclxuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyO1xyXG4gIC8qKiDDpcKvwrnDqMKvwp3DpsKhwoYgW01vZGFsT3B0aW9uc0ZvclNlcnZpY2VdKGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvbW9kYWwvbnotbW9kYWwudHlwZS50cykgw6XCj8KCw6bClcKwICovXHJcbiAgbW9kYWxPcHRpb25zPzogTW9kYWxPcHRpb25zRm9yU2VydmljZTtcclxuICAvKiogw6bCmMKvw6XCkMKmw6fCssK+w6XCh8KGw6/CvMKIw6nCu8KYw6jCrsKkw6/CvMKaYHRydWVgw6/CvMKJw6/CvMKMw6jCi8Klw6jCv8KUw6XCm8Kew6XCgMK8w6nCncKew6fCqcK6w6XCgMK8w6/CvMKIYG51bGxgw6bCiMKWYHVuZGVmaW5lZGDDr8K8wonDqMKnwobDpMK4wrrDpsKIwpDDpcKKwp/Dr8K8wozDpcKQwqbDpcKIwpnDqMKnwobDpMK4wrrDqcKUwpnDqMKvwq8gKi9cclxuICBleGFjdD86IGJvb2xlYW47XHJcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwozChcOowqPCucOmwqDCh8Onwq3CvsOpwqHCtcOvwrzCjMOkwr/CrsOlwqTCjcOmwqjCocOmwoDCgcOlwozChcOlwpDCq8OmwqDCh8Onwq3CvsOpwpfCtMOowrfCncOpwpfCrsOpwqLCmCAqL1xyXG4gIGluY2x1ZGVUYWJzPzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIMOlwq/CucOowq/CncOmwqHChsOowr7ChcOlworCqcOnwrHCu1xyXG4gKi9cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsSGVscGVyIHtcclxuICBwcml2YXRlIHpJbmRleCA9IDUwMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IE56TW9kYWxTZXJ2aWNlKSB7fVxyXG5cclxuICAvKipcclxuICAgKiDDpsKewoTDpcK7wrrDpMK4woDDpMK4wqrDpcKvwrnDqMKvwp3DpsKhwoZcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb21wIMOnwrvChMOkwrvCtlxyXG4gICAqIEBwYXJhbSBwYXJhbXMgw6fCu8KEw6TCu8K2w6XCj8KCw6bClcKwXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgw6nCosKdw6XCpMKWw6XCj8KCw6bClcKwXHJcbiAgICpcclxuICAgKiDDp8KkwrrDpMK+wovDr8K8wppcclxuICBgYGB0c1xyXG50aGlzLm1vZGFsSGVscGVyLmNyZWF0ZShGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xyXG4vLyDDpcKvwrnDpMK6wo7Dp8K7woTDpMK7wrbDp8KawoTDpsKIwpDDpcKKwp8mw6XChcKzw6nCl8Ktw6fCmsKEw6XCpMKEw6fCkMKGw6jCr8K0w6bCmMKOXHJcbi8vIMOmwojCkMOlworCn1xyXG50aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XHJcbnRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xyXG4vLyDDpcKFwrPDqcKXwq1cclxudGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcclxuYGBgXHJcbiAgICovXHJcbiAgY3JlYXRlKFxyXG4gICAgY29tcDogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IE1vZGFsSGVscGVyT3B0aW9uc1xyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgIHNpemU6ICdsZycsXHJcbiAgICAgIGV4YWN0OiB0cnVlLFxyXG4gICAgICBpbmNsdWRlVGFiczogZmFsc2UsXHJcbiAgICB9LCBvcHRpb25zKTtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcclxuICAgICAgbGV0IGNscyA9ICcnLFxyXG4gICAgICAgIHdpZHRoID0gJyc7XHJcbiAgICAgIGlmIChvcHRpb25zLnNpemUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc2l6ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgIHdpZHRoID0gYCR7b3B0aW9ucy5zaXplfXB4YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2xzID0gYG1vZGFsLSR7b3B0aW9ucy5zaXplfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChvcHRpb25zLmluY2x1ZGVUYWJzKSB7XHJcbiAgICAgICAgY2xzICs9ICcgbW9kYWwtaW5jbHVkZS10YWJzJztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZSA9IHtcclxuICAgICAgICBueldyYXBDbGFzc05hbWU6IGNscyxcclxuICAgICAgICBuekNvbnRlbnQ6IGNvbXAsXHJcbiAgICAgICAgbnpXaWR0aDogd2lkdGggPyB3aWR0aCA6IHVuZGVmaW5lZCxcclxuICAgICAgICBuekZvb3RlcjogbnVsbCxcclxuICAgICAgICBuekNvbXBvbmVudFBhcmFtczogcGFyYW1zLFxyXG4gICAgICAgIG56WkluZGV4OiArK3RoaXMuekluZGV4LFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBzdWJqZWN0ID0gdGhpcy5zcnYuY3JlYXRlKFxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMubW9kYWxPcHRpb25zKSxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgYWZ0ZXJDbG9zZSQgPSBzdWJqZWN0LmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChvcHRpb25zLmV4YWN0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBpZiAocmVzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgYWZ0ZXJDbG9zZSQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwp7ChMOlwrvCusOpwp3CmcOmwoDCgcOmwqHChsOvwrzCjMOnwoLCucOlwofCu8OowpLCmcOlwrHCgsOkwrjCjcOlwoXCgcOowq7CuMOlwoXCs8OpwpfCrVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvbXAgw6fCu8KEw6TCu8K2XHJcbiAgICogQHBhcmFtIHBhcmFtcyDDp8K7woTDpMK7wrbDpcKPwoLDpsKVwrBcclxuICAgKiBAcGFyYW0gb3B0aW9ucyDDqcKiwp3DpcKkwpbDpcKPwoLDpsKVwrBcclxuICAgKlxyXG4gICAqIMOnwqTCusOkwr7Ci8OvwrzCmlxyXG4gIGBgYHRzXHJcbnRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xyXG4vLyDDpcKvwrnDpMK6wo7Dp8K7woTDpMK7wrbDp8KawoTDpsKIwpDDpcKKwp8mw6XChcKzw6nCl8Ktw6fCmsKEw6XCpMKEw6fCkMKGw6jCr8K0w6bCmMKOXHJcbi8vIMOmwojCkMOlworCn1xyXG50aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XHJcbnRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xyXG4vLyDDpcKFwrPDqcKXwq1cclxudGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcclxuYGBgXHJcbiAgICovXHJcbiAgY3JlYXRlU3RhdGljKFxyXG4gICAgY29tcDogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IE1vZGFsSGVscGVyT3B0aW9uc1xyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCBtb2RhbE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7IG56TWFza0Nsb3NhYmxlOiBmYWxzZSB9LFxyXG4gICAgICBvcHRpb25zICYmIG9wdGlvbnMubW9kYWxPcHRpb25zLFxyXG4gICAgKTtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZShjb21wLCBwYXJhbXMsIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHsgbW9kYWxPcHRpb25zIH0pKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOmwonCk8OlwrzCgMOlwq/CucOowq/CncOmwqHChlxyXG4gICAqIEBwYXJhbSBjb21wIMOnwrvChMOkwrvCtlxyXG4gICAqIEBwYXJhbSBwYXJhbXMgw6fCu8KEw6TCu8K2w6XCj8KCw6bClcKwXHJcbiAgICogQHBhcmFtIHNpemUgw6XCpMKnw6XCsMKPw6/CvMKbw6TCvsKLw6XCpsKCw6/CvMKabGfDo8KAwoE2MDDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppsZ1xyXG4gICAqIEBwYXJhbSBvcHRpb25zIMOlwq/CucOowq/CncOmwqHChiBgTW9kYWxPcHRpb25zRm9yU2VydmljZWAgw6XCj8KCw6bClcKwXHJcbiAgICpcclxuICAgKiDDp8KkwrrDpMK+wovDr8K8wppcclxuICBgYGB0c1xyXG50aGlzLm1vZGFsSGVscGVyLm9wZW4oRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcclxuLy8gw6XCr8K5w6TCusKOw6fCu8KEw6TCu8K2w6fCmsKEw6bCiMKQw6XCisKfJsOlwoXCs8OpwpfCrcOnwprChMOlwqTChMOnwpDChsOowq/CtMOmwpjCjlxyXG4vLyDDpsKIwpDDpcKKwp9cclxudGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xyXG50aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcclxuLy8gw6XChcKzw6nCl8KtXHJcbnRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XHJcbmBgYFxyXG4gICAqL1xyXG4gIG9wZW4oXHJcbiAgICBjb21wOiBhbnksXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBzaXplOiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXIgPSAnbGcnLFxyXG4gICAgb3B0aW9ucz86IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2UsXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZShjb21wLCBwYXJhbXMsIHtcclxuICAgICAgc2l6ZSxcclxuICAgICAgbW9kYWxPcHRpb25zOiBvcHRpb25zLFxyXG4gICAgICBleGFjdDogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOpwp3CmcOmwoDCgcOmwqHChsOvwrzCjMOnwoLCucOlwofCu8OowpLCmcOlwrHCgsOkwrjCjcOlwoXCgcOowq7CuMOlwoXCs8OpwpfCrVxyXG4gICAqIEBwYXJhbSBjb21wIMOnwrvChMOkwrvCtlxyXG4gICAqIEBwYXJhbSBwYXJhbXMgw6fCu8KEw6TCu8K2w6XCj8KCw6bClcKwXHJcbiAgICogQHBhcmFtIHNpemUgw6XCpMKnw6XCsMKPw6/CvMKbw6TCvsKLw6XCpsKCw6/CvMKabGfDo8KAwoE2MDDDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppsZ1xyXG4gICAqIEBwYXJhbSBvcHRpb25zIMOlwq/CucOowq/CncOmwqHChiBgTW9kYWxPcHRpb25zRm9yU2VydmljZWAgw6XCj8KCw6bClcKwXHJcbiAgICpcclxuICAgKiDDp8KkwrrDpMK+wovDr8K8wppcclxuICBgYGB0c1xyXG50aGlzLm1vZGFsSGVscGVyLm9wZW4oRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcclxuLy8gw6XCr8K5w6TCusKOw6fCu8KEw6TCu8K2w6fCmsKEw6bCiMKQw6XCisKfJsOlwoXCs8OpwpfCrcOnwprChMOlwqTChMOnwpDChsOowq/CtMOmwpjCjlxyXG4vLyDDpsKIwpDDpcKKwp9cclxudGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xyXG50aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcclxuLy8gw6XChcKzw6nCl8KtXHJcbnRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XHJcbmBgYFxyXG4gICAqL1xyXG4gIHN0YXRpYyhcclxuICAgIGNvbXA6IGFueSxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIHNpemU6ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlciA9ICdsZycsXHJcbiAgICBvcHRpb25zPzogYW55LFxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5vcGVuKFxyXG4gICAgICBjb21wLFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgIHNpemUsXHJcbiAgICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbnpNYXNrQ2xvc2FibGU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9ucyxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpEcmF3ZXJTZXJ2aWNlLCBOekRyYXdlclBsYWNlbWVudCwgTnpEcmF3ZXJPcHRpb25zIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERyYXdlckhlbHBlck9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIMOlwqTCp8OlwrDCj8OvwrzCm8Okwr7Ci8OlwqbCgsOvwrzCmmxnw6PCgMKBNjAww6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYG1kYFxyXG4gICAqIFxyXG4gICAqIHwgw6fCscK7w6XCnsKLIHwgw6nCu8KYw6jCrsKkw6XCpMKnw6XCsMKPIHxcclxuICAgKiB8IC0tLSB8IC0tLS0tLSB8XHJcbiAgICogfCBgc21gIHwgYDMwMGAgfFxyXG4gICAqIHwgYG1kYCB8IGA2MDBgIHxcclxuICAgKiB8IGBsZ2AgfCBgOTAwYCB8XHJcbiAgICogfCBgeGxgIHwgYDEyMDBgIHxcclxuICAgKiBcclxuICAgKiA+IMOkwrvCpcOkwrjCisOlwoDCvMOvwrzCjMOlwo/Cr8OpwoDCmsOowr/Ch8OowqbChsOnwpvClsOnwpvCuMOlwrrClMOnwprChExFU1PDpcKPwoLDpsKVwrDDqMKHwqrDqMKhwozDqMKwwoPDpsKVwrRcclxuICAgKi9cclxuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8IG51bWJlcjtcclxuICAvKipcclxuICAgKiDDpsKYwq/DpcKQwqbDpcKMwoXDpcKQwqvDpcK6wpXDqcKDwqjDpcK3wqXDpcKFwrfDpsKdwqHDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgdHJ1ZWBcclxuICAgKi9cclxuICBmb290ZXI/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIMOlwrrClcOpwoPCqMOlwrfCpcOlwoXCt8Omwp3CocOpwqvCmMOlwrrCpsOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmA1NWBcclxuICAgKi9cclxuICBmb290ZXJIZWlnaHQ/OiBudW1iZXI7XHJcbiAgLyoqIMOmworCvcOlwrHCiSBbTnpEcmF3ZXJPcHRpb25zXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kcmF3ZXIvemgjbnpkcmF3ZXJvcHRpb25zKSDDpcKPwoLDpsKVwrAgKi9cclxuICBkcmF3ZXJPcHRpb25zPzogTnpEcmF3ZXJPcHRpb25zO1xyXG59XHJcblxyXG4vKipcclxuICogw6bCisK9w6XCscKJw6jCvsKFw6XCisKpw6fCscK7XHJcbiAqIFxyXG4gKiAqKsOmwrPCqMOmwoTCj8OvwrzCmioqIMOmwp7ChMOlwrvCusOnwrvCk8Omwp7CnMOpwoPCvcOlwo/Cr8OowqLCq8Oowq7CosOpwpjChcOvwrzCjMOkwr3ChsOmwrDCuMOowr/CnMOpwoPCvcOkwrjCjcOkwrzCmsOowqfCpsOlwo/CkSBgb2JzZXJ2ZXIuZXJyb3JgXHJcbiAqIFxyXG4gKiDDp8KkwrrDpMK+wovDr8K8wppcclxuYGBgdHNcclxudGhpcy5kcmF3ZXJIZWxwZXIuY3JlYXRlKCdFZGl0JywgRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcclxuLy8gw6XCr8K5w6TCusKOw6fCu8KEw6TCu8K2w6fCmsKEw6bCiMKQw6XCisKfJsOlwoXCs8OpwpfCrcOnwprChMOlwqTChMOnwpDChsOowq/CtMOmwpjCjlxyXG4vLyDDpsKIwpDDpcKKwp9cclxudGhpcy5OekRyYXdlclJlZi5jbG9zZShkYXRhKTtcclxudGhpcy5OekRyYXdlclJlZi5jbG9zZSh0cnVlKTtcclxuLy8gw6XChcKzw6nCl8KtXHJcbnRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoKTtcclxudGhpcy5OekRyYXdlclJlZi5jbG9zZShmYWxzZSk7XHJcbmBgYFxyXG4gKi9cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIERyYXdlckhlbHBlciB7XHJcbiAgLy8gw6XCpMKnw6nCg8Kow6XCiMKGw6bCg8KFw6XChsK1w6TCuMKLw6bCisK9w6XCscKJw6fCmsKEw6XCscKCw6fCusKnw6bCr8KUIE1vZGFsIMOkwrzCmsOmwpvCtMOkwr3CjsOkwrjCgMOkwrrCm1xyXG4gIHByaXZhdGUgekluZGV4ID0gNDAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogTnpEcmF3ZXJTZXJ2aWNlKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6bCnsKEw6XCu8K6w6TCuMKAw6TCuMKqw6bCisK9w6XCscKJXHJcbiAgICovXHJcbiAgY3JlYXRlKFxyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIGNvbXA6IGFueSxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM/OiBEcmF3ZXJIZWxwZXJPcHRpb25zXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKDxEcmF3ZXJIZWxwZXJPcHRpb25zPntcclxuICAgICAgc2l6ZTogJ21kJyxcclxuICAgICAgZm9vdGVyOiB0cnVlLFxyXG4gICAgICBmb290ZXJIZWlnaHQ6IDU1LFxyXG4gICAgICBkcmF3ZXJPcHRpb25zOiB7XHJcbiAgICAgICAgbnpQbGFjZW1lbnQ6ICdyaWdodCcsXHJcbiAgICAgICAgbnpXcmFwQ2xhc3NOYW1lOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9LCBvcHRpb25zKTtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcclxuICAgICAgY29uc3QgeyBzaXplLCBmb290ZXIsIGZvb3RlckhlaWdodCwgZHJhd2VyT3B0aW9ucyB9ID0gb3B0aW9ucztcclxuICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE56RHJhd2VyT3B0aW9ucyA9IHtcclxuICAgICAgICBuekNvbnRlbnQ6IGNvbXAsXHJcbiAgICAgICAgbnpDb250ZW50UGFyYW1zOiBwYXJhbXMsXHJcbiAgICAgICAgbnpaSW5kZXg6ICsrdGhpcy56SW5kZXgsXHJcbiAgICAgICAgbnpUaXRsZTogdGl0bGVcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChmb290ZXIpIHtcclxuICAgICAgICBkZWZhdWx0T3B0aW9ucy5uekJvZHlTdHlsZSA9IHtcclxuICAgICAgICAgIGhlaWdodDogYGNhbGMoMTAwJSAtICR7Zm9vdGVySGVpZ2h0fXB4KWAsXHJcbiAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgJ3BhZGRpbmctYm90dG9tJzogYCR7Zm9vdGVySGVpZ2h0IC0gMn1weGBcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHNpemUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgZGVmYXVsdE9wdGlvbnNbZHJhd2VyT3B0aW9ucy5uelBsYWNlbWVudCA9PT0gJ3RvcCcgfHwgZHJhd2VyT3B0aW9ucy5uelBsYWNlbWVudCA9PT0gJ2JvdHRvbScgPyAnbnpIZWlnaHQnIDogJ256V2lkdGgnXSA9IG9wdGlvbnMuc2l6ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWZhdWx0T3B0aW9ucy5ueldyYXBDbGFzc05hbWUgPSAoZHJhd2VyT3B0aW9ucy5ueldyYXBDbGFzc05hbWUgKyBgIGRyYXdlci0ke29wdGlvbnMuc2l6ZX1gKS50cmltKCk7XHJcbiAgICAgICAgZGVsZXRlIGRyYXdlck9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzdWJqZWN0ID0gdGhpcy5zcnYuY3JlYXRlKFxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIGRyYXdlck9wdGlvbnMpLFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBhZnRlckNsb3NlJCA9IHN1YmplY3QuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcyAhPSBudWxsICYmIHJlcyAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICBhZnRlckNsb3NlJC51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6bCnsKEw6XCu8K6w6TCuMKAw6TCuMKqw6bCisK9w6XCscKJw6/CvMKMw6fCgsK5w6XCh8K7w6jCksKZw6XCscKCw6TCuMKNw6XChcKBw6jCrsK4w6XChcKzw6nCl8KtXHJcbiAgICovXHJcbiAgc3RhdGljKFxyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIGNvbXA6IGFueSxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM/OiBEcmF3ZXJIZWxwZXJPcHRpb25zXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IGRyYXdlck9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7IG56TWFza0Nsb3NhYmxlOiBmYWxzZSB9LFxyXG4gICAgICBvcHRpb25zICYmIG9wdGlvbnMuZHJhd2VyT3B0aW9ucyxcclxuICAgICk7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUodGl0bGUsIGNvbXAsIHBhcmFtcywgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgeyBkcmF3ZXJPcHRpb25zIH0pKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBDbGllbnQsXHJcbiAgSHR0cEhlYWRlcnMsXHJcbiAgSHR0cFBhcmFtcyxcclxuICBIdHRwUmVzcG9uc2UsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQWxhaW5UaGVtZUNvbmZpZyB9IGZyb20gJy4uLy4uL3RoZW1lLmNvbmZpZyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRDb25maWcgfSBmcm9tICcuL2h0dHAuY29uZmlnJztcclxuXHJcbi8qKlxyXG4gKiDDpcKwwoHDqMKjwoVIdHRwQ2xpZW50w6/CvMKMw6TCuMK7w6jCpsKBw6jCp8Kjw6XChsKzw6/CvMKaXHJcbiAqICsgw6TCvMKYw6XCjMKWSHR0cENsaWVudMOlwpzCqMOlwo/CgsOmwpXCsMOkwrjCisOkwr7Cv8OlwojCqcOmwoDCp1xyXG4gKiArIMOnwrvCn8OkwrjCgMOlwq7CnsOnwo7CsCBsb2FkaW5nXHJcbiAqICsgw6fCu8Kfw6TCuMKAw6XCpMKEw6fCkMKGw6bCl8K2w6nCl8K0w6bCoMK8w6XCvMKPw6nCl8Kuw6nCosKYXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y2xhc3MtbmFtZVxyXG5leHBvcnQgY2xhc3MgX0h0dHBDbGllbnQge1xyXG4gIHByaXZhdGUgY29nOiBIdHRwQ2xpZW50Q29uZmlnO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgY29nOiBBbGFpblRoZW1lQ29uZmlnKSB7XHJcbiAgICB0aGlzLmNvZyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIDxIdHRwQ2xpZW50Q29uZmlnPntcclxuICAgICAgICBudWxsVmFsdWVIYW5kbGluZzogJ2luY2x1ZGUnLFxyXG4gICAgICAgIGRhdGVWYWx1ZUhhbmRsaW5nOiAndGltZXN0YW1wJyxcclxuICAgICAgfSxcclxuICAgICAgY29nIS5odHRwLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgLyoqIMOmwpjCr8OlwpDCpsOmwq3Co8OlwpzCqMOlworCoMOowr3CvcOkwrjCrSAqL1xyXG4gIGdldCBsb2FkaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBwYXJzZVBhcmFtcyhwYXJhbXM6IGFueSk6IEh0dHBQYXJhbXMge1xyXG4gICAgY29uc3QgbmV3UGFyYW1zID0ge307XHJcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgbGV0IF9kYXRhID0gcGFyYW1zW2tleV07XHJcbiAgICAgIC8vIMOlwr/CvcOnwpXCpcOnwqnCusOlwoDCvFxyXG4gICAgICBpZiAodGhpcy5jb2cubnVsbFZhbHVlSGFuZGxpbmcgPT09ICdpZ25vcmUnICYmIF9kYXRhID09IG51bGwpIHJldHVybjtcclxuICAgICAgLy8gw6XCsMKGw6bCl8K2w6nCl8K0w6jCvcKsw6XCjMKWw6TCuMK6w6/CvMKaw6bCl8K2w6nCl8K0w6bCiMKzICjDp8KnwpIpXHJcbiAgICAgIGlmICh0aGlzLmNvZy5kYXRlVmFsdWVIYW5kbGluZyA9PT0gJ3RpbWVzdGFtcCcgJiYgX2RhdGEgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgX2RhdGEgPSBfZGF0YS52YWx1ZU9mKCk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3UGFyYW1zW2tleV0gPSBfZGF0YTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5ldyBIdHRwUGFyYW1zKHsgZnJvbU9iamVjdDogbmV3UGFyYW1zIH0pO1xyXG4gIH1cclxuXHJcbiAgYXBwbGllZFVybCh1cmw6IHN0cmluZywgcGFyYW1zPzogYW55KSB7XHJcbiAgICBpZiAoIXBhcmFtcykgcmV0dXJuIHVybDtcclxuICAgIHVybCArPSB+dXJsLmluZGV4T2YoJz8nKSA/ICcnIDogJz8nO1xyXG4gICAgY29uc3QgYXJyOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwYXJhbXMpIHtcclxuICAgICAgYXJyLnB1c2goYCR7a2V5fT0ke3BhcmFtc1trZXldfWApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVybCArIGFyci5qb2luKCcmJyk7XHJcbiAgfVxyXG5cclxuICBiZWdpbigpIHtcclxuICAgIC8vIGNvbnNvbGUudGltZSgnaHR0cCcpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5fbG9hZGluZyA9IHRydWUpKTtcclxuICB9XHJcblxyXG4gIGVuZCgpIHtcclxuICAgIC8vIGNvbnNvbGUudGltZUVuZCgnaHR0cCcpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5fbG9hZGluZyA9IGZhbHNlKSk7XHJcbiAgfVxyXG5cclxuICAvLyByZWdpb246IGdldFxyXG5cclxuICAvKipcclxuICAgKiBHRVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYFRgIMOnwrHCu8Olwp7Ci1xyXG4gICAqL1xyXG4gIGdldDxUPihcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPFQ+O1xyXG5cclxuICAvKipcclxuICAgKiBHRVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYHN0cmluZ2Agw6fCscK7w6XCnsKLXHJcbiAgICovXHJcbiAgZ2V0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblxyXG4gIC8qKlxyXG4gICAqIEdFVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXHJcbiAgICovXHJcbiAgZ2V0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XHJcblxyXG4gIC8qKlxyXG4gICAqIEdFVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXHJcbiAgICovXHJcbiAgZ2V0PFQ+KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+O1xyXG5cclxuICAvKipcclxuICAgKiBHRVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYGFueWAgw6fCscK7w6XCnsKLXHJcbiAgICovXHJcbiAgZ2V0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICAvKipcclxuICAgKiBHRVQgw6jCr8K3w6bCscKCXHJcbiAgICovXHJcbiAgZ2V0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxyXG4gICAgICAnR0VUJyxcclxuICAgICAgdXJsLFxyXG4gICAgICBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhcmFtcyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gZW5kcmVnaW9uXHJcblxyXG4gIC8vIHJlZ2lvbjogcG9zdFxyXG5cclxuICAvKipcclxuICAgKiBQT1NUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBzdHJpbmdgIMOnwrHCu8Olwp7Ci1xyXG4gICAqL1xyXG4gIHBvc3QoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHJcbiAgLyoqXHJcbiAgICogUE9TVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSHR0cFJlc3BvbnNlPEpTT04+YCDDp8KxwrvDpcKewotcclxuICAgKi9cclxuICBwb3N0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBPU1TDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYEpTT05gIMOnwrHCu8Olwp7Ci1xyXG4gICAqL1xyXG4gIHBvc3Q8VD4oXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk/OiBhbnksXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPFQ+O1xyXG5cclxuICAvKipcclxuICAgKiBQT1NUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBhbnlgIMOnwrHCu8Olwp7Ci1xyXG4gICAqL1xyXG4gIHBvc3QoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk/OiBhbnksXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICAvKipcclxuICAgKiBQT1NUIMOowq/Ct8OmwrHCglxyXG4gICAqL1xyXG4gIHBvc3QoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXHJcbiAgICAgICdQT1NUJyxcclxuICAgICAgdXJsLFxyXG4gICAgICBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJvZHksXHJcbiAgICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG5cclxuICAvLyByZWdpb246IGRlbGV0ZVxyXG5cclxuICAvKipcclxuICAgKiBERUxFVEXDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYHN0cmluZ2Agw6fCscK7w6XCnsKLXHJcbiAgICovXHJcbiAgZGVsZXRlKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblxyXG4gIC8qKlxyXG4gICAqIERFTEVURcOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXHJcbiAgICovXHJcbiAgZGVsZXRlKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlOiAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8T2JqZWN0Pj47XHJcblxyXG4gIC8qKlxyXG4gICAqIERFTEVURcOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgYW55YCDDp8KxwrvDpcKewotcclxuICAgKi9cclxuICBkZWxldGUoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIERFTEVURSDDqMKvwrfDpsKxwoJcclxuICAgKi9cclxuICBkZWxldGUoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU/OiAnYm9keScgfCAnZXZlbnRzJyB8ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXHJcbiAgICAgICdERUxFVEUnLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcGFyYW1zLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9ucyxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgLyoqXHJcbiAgICogYGpzb25wYCDDqMKvwrfDpsKxwoJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB1cmwgVVJMw6XCnMKww6XCncKAXHJcbiAgICogQHBhcmFtIHBhcmFtcyDDqMKvwrfDpsKxwoLDpcKPwoLDpsKVwrBcclxuICAgKiBAcGFyYW0gY2FsbGJhY2tQYXJhbSBDQUxMQkFDS8OlwoDCvMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmkpTT05QX0NBTExCQUNLXHJcbiAgICovXHJcbiAganNvbnAoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIGNhbGxiYWNrUGFyYW06IHN0cmluZyA9ICdKU09OUF9DQUxMQkFDSycsXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuanNvbnAodGhpcy5hcHBsaWVkVXJsKHVybCwgcGFyYW1zKSwgY2FsbGJhY2tQYXJhbSkucGlwZShcclxuICAgICAgdGFwKCgpID0+IHtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICB9KSxcclxuICAgICAgY2F0Y2hFcnJvcihyZXMgPT4ge1xyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IocmVzKTtcclxuICAgICAgfSksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gI3JlZ2lvbiBwYXRjaFxyXG5cclxuICAvKipcclxuICAgKiBQQVRDSMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgc3RyaW5nYCDDp8KxwrvDpcKewotcclxuICAgKi9cclxuICBwYXRjaChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU6ICd0ZXh0JztcclxuICAgICAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cclxuICAvKipcclxuICAgKiBQQVRDSMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSHR0cFJlc3BvbnNlPEpTT04+YCDDp8KxwrvDpcKewotcclxuICAgKi9cclxuICBwYXRjaChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnanNvbic7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPE9iamVjdD4+O1xyXG5cclxuICAvKipcclxuICAgKiBQQVRDSMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSlNPTmAgw6fCscK7w6XCnsKLXHJcbiAgICovXHJcbiAgcGF0Y2g8VD4oXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk/OiBhbnksXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPFQ+O1xyXG5cclxuICAvKipcclxuICAgKiBQQVRDSMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgYW55YCDDp8KxwrvDpcKewotcclxuICAgKi9cclxuICBwYXRjaChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keT86IGFueSxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBBVENIIMOowq/Ct8OmwrHCglxyXG4gICAqL1xyXG4gIHBhdGNoKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxyXG4gICAgICAnUEFUQ0gnLFxyXG4gICAgICB1cmwsXHJcbiAgICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYm9keSxcclxuICAgICAgICAgIHBhcmFtcyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAvLyAjcmVnaW9uIHB1dFxyXG5cclxuICAvKipcclxuICAgKiBQVVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYHN0cmluZ2Agw6fCscK7w6XCnsKLXHJcbiAgICovXHJcbiAgcHV0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5OiBhbnksXHJcbiAgICBwYXJhbXM6IGFueSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBVVMOvwrzCmsOowr/ClMOlwpvCnsOkwrjCgMOkwrjCqiBgSHR0cFJlc3BvbnNlPEpTT04+YCDDp8KxwrvDpcKewotcclxuICAgKi9cclxuICBwdXQoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk6IGFueSxcclxuICAgIHBhcmFtczogYW55LFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxPYmplY3Q+PjtcclxuXHJcbiAgLyoqXHJcbiAgICogUFVUw6/CvMKaw6jCv8KUw6XCm8Kew6TCuMKAw6TCuMKqIGBKU09OYCDDp8KxwrvDpcKewotcclxuICAgKi9cclxuICBwdXQ8VD4oXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGJvZHk/OiBhbnksXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH07XHJcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZSc7XHJcbiAgICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbjtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPFQ+O1xyXG5cclxuICAvKipcclxuICAgKiBQVVTDr8K8wprDqMK/wpTDpcKbwp7DpMK4woDDpMK4wqogYGFueWAgw6fCscK7w6XCnsKLXHJcbiAgICovXHJcbiAgcHV0KFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBib2R5PzogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwgeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xyXG4gICAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgICAgIHJlc3BvbnNlVHlwZT86ICdhcnJheWJ1ZmZlcicgfCAnYmxvYicgfCAnanNvbicgfCAndGV4dCc7XHJcbiAgICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbiAgICB9LFxyXG4gICk6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogUFVUIMOowq/Ct8OmwrHCglxyXG4gICAqL1xyXG4gIHB1dChcclxuICAgIHVybDogc3RyaW5nLFxyXG4gICAgYm9keTogYW55LFxyXG4gICAgcGFyYW1zOiBhbnksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfTtcclxuICAgICAgb2JzZXJ2ZT86ICdib2R5JyB8ICdldmVudHMnIHwgJ3Jlc3BvbnNlJztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICByZXNwb25zZVR5cGU/OiAnYXJyYXlidWZmZXInIHwgJ2Jsb2InIHwgJ2pzb24nIHwgJ3RleHQnO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcclxuICAgICAgJ1BVVCcsXHJcbiAgICAgIHVybCxcclxuICAgICAgT2JqZWN0LmFzc2lnbihcclxuICAgICAgICB7XHJcbiAgICAgICAgICBib2R5LFxyXG4gICAgICAgICAgcGFyYW1zLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9ucyxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8qKlxyXG4gICAqIGByZXF1ZXN0YCDDqMKvwrfDpsKxwoJcclxuICAgKlxyXG4gICAqIEBwYXJhbSBtZXRob2Qgw6jCr8K3w6bCscKCw6bClsK5w6bCs8KVw6fCscK7w6XCnsKLXHJcbiAgICogQHBhcmFtIHVybCBVUkzDpcKcwrDDpcKdwoBcclxuICAgKiBAcGFyYW0gb3B0aW9ucyDDpcKPwoLDpsKVwrBcclxuICAgKi9cclxuICByZXF1ZXN0PFI+KFxyXG4gICAgbWV0aG9kOiBzdHJpbmcsXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIGJvZHk/OiBhbnk7XHJcbiAgICAgIGhlYWRlcnM/OlxyXG4gICAgICAgIHwgSHR0cEhlYWRlcnNcclxuICAgICAgICB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgICB9O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xyXG4gICAgICBwYXJhbXM/OlxyXG4gICAgICAgIHwgSHR0cFBhcmFtc1xyXG4gICAgICAgIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPFI+O1xyXG4gIC8qKlxyXG4gICAqIGByZXF1ZXN0YCDDqMKvwrfDpsKxwoJcclxuICAgKlxyXG4gICAqIEBwYXJhbSBtZXRob2Qgw6jCr8K3w6bCscKCw6bClsK5w6bCs8KVw6fCscK7w6XCnsKLXHJcbiAgICogQHBhcmFtIHVybCBVUkzDpcKcwrDDpcKdwoBcclxuICAgKiBAcGFyYW0gb3B0aW9ucyDDpcKPwoLDpsKVwrBcclxuICAgKi9cclxuICByZXF1ZXN0KFxyXG4gICAgbWV0aG9kOiBzdHJpbmcsXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIGJvZHk/OiBhbnk7XHJcbiAgICAgIGhlYWRlcnM/OlxyXG4gICAgICAgIHwgSHR0cEhlYWRlcnNcclxuICAgICAgICB8IHtcclxuICAgICAgICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgICAgICB9O1xyXG4gICAgICBvYnNlcnZlPzogJ2JvZHknIHwgJ2V2ZW50cycgfCAncmVzcG9uc2UnO1xyXG4gICAgICBwYXJhbXM/OlxyXG4gICAgICAgIHwgSHR0cFBhcmFtc1xyXG4gICAgICAgIHwge1xyXG4gICAgICAgICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgcmVzcG9uc2VUeXBlPzogJ2FycmF5YnVmZmVyJyB8ICdibG9iJyB8ICdqc29uJyB8ICd0ZXh0JztcclxuICAgICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG4gICAgfSxcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgdGhpcy5iZWdpbigpO1xyXG4gICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgaWYgKG9wdGlvbnMucGFyYW1zKSBvcHRpb25zLnBhcmFtcyA9IHRoaXMucGFyc2VQYXJhbXMob3B0aW9ucy5wYXJhbXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKS5waXBlKFxyXG4gICAgICB0YXAoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICAgIH0pLFxyXG4gICAgICBjYXRjaEVycm9yKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5lbmQoKTtcclxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihyZXMpO1xyXG4gICAgICB9KSxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQnO1xyXG5pbXBvcnQgZGlzdGFuY2VJbldvcmRzVG9Ob3cgZnJvbSAnZGF0ZS1mbnMvZGlzdGFuY2VfaW5fd29yZHNfdG9fbm93JztcclxuXHJcbi8qKlxyXG4gKiBAc2VlIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3Mvc2VydmljZS1waXBlIyVFNiU5NyVBNSVFNiU5QyU5Ri1fZGF0ZVxyXG4gKi9cclxuQFBpcGUoeyBuYW1lOiAnX2RhdGUnIH0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShcclxuICAgIHZhbHVlOiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyLFxyXG4gICAgZm9ybWF0U3RyaW5nOiBzdHJpbmcgPSAnWVlZWS1NTS1ERCBISDptbScsXHJcbiAgKTogc3RyaW5nIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBpZiAoZm9ybWF0U3RyaW5nID09PSAnZm4nKSB7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlSW5Xb3Jkc1RvTm93KHZhbHVlLCB7XHJcbiAgICAgICAgICBsb2NhbGU6ICh3aW5kb3cgYXMgYW55KS5fX2xvY2FsZV9fLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmb3JtYXQodmFsdWUsIGZvcm1hdFN0cmluZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ3VycmVuY3lQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbi8qKlxyXG4gKiBAc2VlIGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3Mvc2VydmljZS1waXBlIyVFOCVCNCVBNyVFNSVCOCU4MS1fY3VycmVudHlcclxuICovXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1c2UtcGlwZS10cmFuc2Zvcm0taW50ZXJmYWNlXHJcbkBQaXBlKHsgbmFtZTogJ19jdXJyZW5jeScgfSlcclxuZXhwb3J0IGNsYXNzIENOQ3VycmVuY3lQaXBlIGV4dGVuZHMgQ3VycmVuY3lQaXBlIHtcclxuICB0cmFuc2Zvcm0oXHJcbiAgICB2YWx1ZTogYW55LFxyXG4gICAgY3VycmVuY3lDb2RlOiBzdHJpbmcgPSAnw6/Cv8KlJyxcclxuICAgIGRpc3BsYXk6ICdjb2RlJyB8ICdzeW1ib2wnIHwgJ3N5bWJvbC1uYXJyb3cnIHwgYm9vbGVhbiA9ICdjb2RlJyxcclxuICAgIGRpZ2l0cz86IHN0cmluZyxcclxuICApOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0odmFsdWUsIGN1cnJlbmN5Q29kZSwgPGFueT5kaXNwbGF5LCBkaWdpdHMpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQHNlZSBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2NvbW1vbiMlRTUlOEYlQUYlRTglQkYlQUQlRTQlQkIlQTMta2V5c1xyXG4gKi9cclxuQFBpcGUoeyBuYW1lOiAna2V5cycgfSlcclxuZXhwb3J0IGNsYXNzIEtleXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGtleUlzTnVtYmVyOiBib29sZWFuID0gZmFsc2UpOiBhbnlbXSB7XHJcbiAgICBjb25zdCByZXQgPSBbXTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcclxuICAgICAgcmV0LnB1c2goeyBrZXk6IGtleUlzTnVtYmVyID8gK2tleSA6IGtleSwgdmFsdWU6IHZhbHVlW2tleV0gfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQHNlZSBodHRwczovL25nLWFsYWluLmNvbS9kb2NzL3NlcnZpY2UtcGlwZSMlRTUlQkUlQkQlRTclQUIlQTAteW5cclxuICovXHJcbkBQaXBlKHsgbmFtZTogJ3luJyB9KVxyXG5leHBvcnQgY2xhc3MgWU5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBib29sZWFuLCB5ZXM6IHN0cmluZywgbm86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXN1Y2Nlc3NcIj4nICsgKHllcyB8fCAnw6bCmMKvJykgKyAnPC9zcGFuPic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtZXJyb3JcIj4nICsgKG5vIHx8ICfDpcKQwqYnKSArICc8L3NwYW4+JztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuXHJcbmltcG9ydCB7IFdJTkRPVyB9IGZyb20gJy4vd2luX3Rva2Vucyc7XHJcblxyXG5pbXBvcnQgeyBEZWxvbkxvY2FsZU1vZHVsZSB9IGZyb20gJy4vbG9jYWxlL2xvY2FsZS5tb2R1bGUnO1xyXG5cclxuLy8gcmVnaW9uOiBpbXBvcnRcclxuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiwgQWxhaW5JMThOU2VydmljZUZha2UgfSBmcm9tICcuL3NlcnZpY2VzL2kxOG4vaTE4bic7XHJcblxyXG5pbXBvcnQgeyBNb2RhbEhlbHBlciB9IGZyb20gJy4vc2VydmljZXMvbW9kYWwvbW9kYWwuaGVscGVyJztcclxuY29uc3QgSEVMUEVSUyA9IFtNb2RhbEhlbHBlcl07XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbXTtcclxuXHJcbi8vIHBpcGVzXHJcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy9kYXRlL2RhdGUucGlwZSc7XHJcbmltcG9ydCB7IENOQ3VycmVuY3lQaXBlIH0gZnJvbSAnLi9waXBlcy9jdXJyZW5jeS9jbi1jdXJyZW5jeS5waXBlJztcclxuaW1wb3J0IHsgS2V5c1BpcGUgfSBmcm9tICcuL3BpcGVzL2tleXMva2V5cy5waXBlJztcclxuaW1wb3J0IHsgWU5QaXBlIH0gZnJvbSAnLi9waXBlcy95bi95bi5waXBlJztcclxuY29uc3QgUElQRVMgPSBbRGF0ZVBpcGUsIENOQ3VycmVuY3lQaXBlLCBLZXlzUGlwZSwgWU5QaXBlXTtcclxuXHJcbi8vIGVuZHJlZ2lvblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIE92ZXJsYXlNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLlBJUEVTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UUywgLi4uUElQRVMsIERlbG9uTG9jYWxlTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsYWluVGhlbWVNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEFsYWluVGhlbWVNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogV0lORE9XLCB1c2VWYWx1ZTogd2luZG93IH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBBTEFJTl9JMThOX1RPS0VOLCB1c2VDbGFzczogQWxhaW5JMThOU2VydmljZUZha2UgfSxcclxuICAgICAgICAuLi5IRUxQRVJTLFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBBbGFpblRoZW1lTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFsuLi5IRUxQRVJTXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlcnNpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSBuZXcgVmVyc2lvbignMC4wLjAtUExBQ0VIT0xERVInKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQWEsTUFBTSxHQUFHLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQzs7Ozs7Ozs7O0FDRmxEOztJQUNFLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7O0lBQzVDLE1BQU0sU0FBUyxH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