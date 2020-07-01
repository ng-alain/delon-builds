import { InjectionToken, Injectable, ɵɵdefineInjectable, Optional, Inject, ɵɵinject, Injector, INJECTOR, SkipSelf, NgModule, Pipe, Version } from '@angular/core';
import { ACLService } from '@delon/acl';
import { BehaviorSubject, Subject, Observable, throwError, of } from 'rxjs';
import { filter, share, tap, catchError, switchMap } from 'rxjs/operators';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT, CurrencyPipe, CommonModule } from '@angular/common';
import { AlainConfigService, deepMerge, toDate } from '@delon/util';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { HttpParams, HttpClient } from '@angular/common/http';
import format from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { OverlayModule } from '@angular/cdk/overlay';
import { BellOutline, DeleteOutline, PlusOutline, InboxOutline } from '@ant-design/icons-angular/icons';
import { NzIconService } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * Generated from: src/win_tokens.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function WINDOW_FACTORY() {
    return typeof window === 'object' && !!window ? window : null;
}
/** @type {?} */
const WINDOW = new InjectionToken('Window', {
    providedIn: 'root',
    factory: WINDOW_FACTORY,
});

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/preloader/preloader.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function preloaderFinished() {
    /** @type {?} */
    const body = (/** @type {?} */ (document.querySelector('body')));
    /** @type {?} */
    const preloader = (/** @type {?} */ (document.querySelector('.preloader')));
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
        () => {
            preloader.className = 'preloader-hidden';
        }));
        preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
    }
    ((/** @type {?} */ (window))).appBootstrap = (/**
     * @return {?}
     */
    () => {
        setTimeout((/**
         * @return {?}
         */
        () => {
            remove();
            body.style.overflow = '';
        }), 100);
    });
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/menu/interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MenuIcon() { }
if (false) {
    /**
     * Type for icon
     * @type {?}
     */
    MenuIcon.prototype.type;
    /**
     * Value for the icon, can be set Class Name, nz-icon of `nzType`, image
     * @type {?|undefined}
     */
    MenuIcon.prototype.value;
    /**
     * Type of the ant design icon, default: `outline`
     * @type {?|undefined}
     */
    MenuIcon.prototype.theme;
    /**
     * Rotate icon with animation, default: `false`
     * @type {?|undefined}
     */
    MenuIcon.prototype.spin;
    /**
     * Only support the two-tone icon. Specific the primary color
     * @type {?|undefined}
     */
    MenuIcon.prototype.twoToneColor;
    /**
     * Type of the icon from iconfont
     * @type {?|undefined}
     */
    MenuIcon.prototype.iconfont;
}
/**
 * @record
 */
function Menu() { }
if (false) {
    /**
     * Text of menu item, can be choose one of  `text` or `i18n` (Support HTML)
     * @type {?|undefined}
     */
    Menu.prototype.text;
    /**
     * I18n key of menu item, can be choose one of  `text` or `i18n` (Support HTML)
     * @type {?|undefined}
     */
    Menu.prototype.i18n;
    /**
     * Whether to display the group name, default: `true`
     * @type {?|undefined}
     */
    Menu.prototype.group;
    /**
     * Routing for the menu item, can be choose one of `link` or `externalLink`
     * @type {?|undefined}
     */
    Menu.prototype.link;
    /**
     * External link for the menu item, can be choose one of `link` or `externalLink`
     * @type {?|undefined}
     */
    Menu.prototype.externalLink;
    /**
     * Specifies `externalLink` where to display the linked URL
     * @type {?|undefined}
     */
    Menu.prototype.target;
    /**
     * Icon for the menu item, only valid for the first level menu
     * @type {?|undefined}
     */
    Menu.prototype.icon;
    /**
     * Badget for the menu item when `group` is `true`
     * @type {?|undefined}
     */
    Menu.prototype.badge;
    /**
     * Whether to display a red dot instead of `badge` value
     * @type {?|undefined}
     */
    Menu.prototype.badgeDot;
    /**
     * Badge [color](https://ng.ant.design/components/badge/en#nz-badge)
     * @type {?|undefined}
     */
    Menu.prototype.badgeStatus;
    /**
     * Whether disable for the menu item
     * @type {?|undefined}
     */
    Menu.prototype.disabled;
    /**
     * Whether hidden for the menu item
     * @type {?|undefined}
     */
    Menu.prototype.hide;
    /**
     * Whether hide in breadcrumbs, which are valid when the `page-header` component automatically generates breadcrumbs
     * @type {?|undefined}
     */
    Menu.prototype.hideInBreadcrumb;
    /**
     * ACL configuration, it's equivalent to `ACLService.can(roleOrAbility: ACLCanType)` parameter value
     * @type {?|undefined}
     */
    Menu.prototype.acl;
    /**
     * Whether shortcut menu item
     * @type {?|undefined}
     */
    Menu.prototype.shortcut;
    /**
     * Wheter shortcut menu root node
     * @type {?|undefined}
     */
    Menu.prototype.shortcutRoot;
    /**
     * Whether to allow reuse, need to cooperate with the `reuse-tab` component
     * @type {?|undefined}
     */
    Menu.prototype.reuse;
    /**
     * Whether to expand, when `checkStrictly` is valid in `sidebar-nav` component
     * @type {?|undefined}
     */
    Menu.prototype.open;
    /**
     * Unique identifier of the menu item, can be used in `getItem`,` setItem` to update a menu
     * @type {?|undefined}
     */
    Menu.prototype.key;
    /**
     * Children menu of menu item
     * @type {?|undefined}
     */
    Menu.prototype.children;
    /**
     * \@inner Not recommended
     * @type {?|undefined}
     */
    Menu.prototype._id;
    /**
     * \@inner Not recommended
     * @type {?|undefined}
     */
    Menu.prototype._parent;
    /**
     * \@inner Not recommended
     * @type {?|undefined}
     */
    Menu.prototype._depth;
    /**
     * \@inner Not recommended
     * @type {?|undefined}
     */
    Menu.prototype._hidden;
    /**
     * \@inner Not recommended
     * @type {?|undefined}
     */
    Menu.prototype._selected;
    /**
     * \@inner Not recommended
     * @type {?|undefined}
     */
    Menu.prototype._open;
    /**
     * \@inner Not recommended
     * @type {?|undefined}
     */
    Menu.prototype._aclResult;
    /* Skipping unhandled member: [key: string]: any;*/
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/i18n/i18n.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function AlainI18NService() { }
if (false) {
    /**
     * 调用 `use` 触发变更通知
     * @type {?}
     */
    AlainI18NService.prototype.change;
    /* Skipping unhandled member: [key: string]: any;*/
    /**
     * 变更语言
     * @param {?} lang 语言代码
     * @param {?=} emit 是否触发 `change`，默认：true
     * @return {?}
     */
    AlainI18NService.prototype.use = function (lang, emit) { };
    /**
     * 返回当前语言列表
     * @return {?}
     */
    AlainI18NService.prototype.getLangs = function () { };
    /**
     * 翻译
     * - `params` 模板所需要的参数对象
     * - `isSafe` 是否返回安全字符，自动调用 `bypassSecurityTrustHtml`
     * @param {?} key
     * @param {?=} params
     * @param {?=} isSafe
     * @return {?}
     */
    AlainI18NService.prototype.fanyi = function (key, params, isSafe) { };
}
/** @type {?} */
const ALAIN_I18N_TOKEN = new InjectionToken('alainTranslatorToken', {
    providedIn: 'root',
    factory: ALAIN_I18N_TOKEN_FACTORY,
});
/**
 * @return {?}
 */
function ALAIN_I18N_TOKEN_FACTORY() {
    return new AlainI18NServiceFake();
}
class AlainI18NServiceFake {
    constructor() {
        this.change$ = new BehaviorSubject(null);
    }
    /**
     * @return {?}
     */
    get change() {
        return (/** @type {?} */ (this.change$.asObservable().pipe(filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w != null)))));
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
/** @nocollapse */ AlainI18NServiceFake.ɵprov = ɵɵdefineInjectable({ factory: function AlainI18NServiceFake_Factory() { return new AlainI18NServiceFake(); }, token: AlainI18NServiceFake, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AlainI18NServiceFake.prototype.change$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/menu/menu.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 菜单服务，[在线文档](https://ng-alain.com/theme/menu)
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
        this.i18n$ = this.i18nSrv.change.subscribe((/**
         * @return {?}
         */
        () => this.resume()));
    }
    /**
     * @return {?}
     */
    get change() {
        return this._change$.pipe(share());
    }
    /**
     * @param {?} data
     * @param {?} callback
     * @return {?}
     */
    visit(data, callback) {
        /** @type {?} */
        const inFn = (/**
         * @param {?} list
         * @param {?} parentMenu
         * @param {?} depth
         * @return {?}
         */
        (list, parentMenu, depth) => {
            for (const item of list) {
                callback(item, parentMenu, depth);
                if (item.children && item.children.length > 0) {
                    inFn(item.children, item, depth + 1);
                }
                else {
                    item.children = [];
                }
            }
        });
        inFn(data, null, 0);
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
        this.visit(this.data, (/**
         * @param {?} item
         * @param {?} parent
         * @param {?} depth
         * @return {?}
         */
        (item, parent, depth) => {
            item._aclResult = true;
            item._id = i++;
            item._parent = parent;
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
            if (!Array.isArray(item.children)) {
                item.children = [];
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
                item.icon = (/** @type {?} */ ({ type, value }));
            }
            if (item.icon != null) {
                item.icon = Object.assign({ theme: 'outline', spin: false }, ((/** @type {?} */ (item.icon))));
            }
            item.text = item.i18n && this.i18nSrv ? this.i18nSrv.fanyi(item.i18n) : item.text;
            // group
            item.group = item.group !== false;
            // hidden
            item._hidden = typeof item.hide === 'undefined' ? false : item.hide;
            // disabled
            item.disabled = typeof item.disabled === 'undefined' ? false : item.disabled;
            // acl
            item._aclResult = item.acl && this.aclService ? this.aclService.can(item.acl) : true;
            // shortcut
            if (parent && item.shortcut === true && parent.shortcutRoot !== true) {
                shortcuts.push(item);
            }
            if (callback)
                callback(item, parent, depth);
        }));
        this.loadShortcut(shortcuts);
        this._change$.next(this.data);
    }
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
    loadShortcut(shortcuts) {
        if (shortcuts.length === 0 || this.data.length === 0) {
            return;
        }
        /** @type {?} */
        const ls = (/** @type {?} */ (this.data[0].children));
        /** @type {?} */
        let pos = ls.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        w => w.shortcutRoot === true));
        if (pos === -1) {
            pos = ls.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            w => (/** @type {?} */ (w.link)).includes('dashboard')));
            pos = (pos !== -1 ? pos : -1) + 1;
            /** @type {?} */
            const shortcutMenu = (/** @type {?} */ ({
                text: '快捷菜单',
                i18n: 'shortcut',
                icon: 'icon-rocket',
                children: [],
            }));
            (/** @type {?} */ (this.data[0].children)).splice(pos, 0, shortcutMenu);
        }
        /** @type {?} */
        let _data = (/** @type {?} */ (this.data[0].children))[pos];
        if (_data.i18n && this.i18nSrv)
            _data.text = this.i18nSrv.fanyi(_data.i18n);
        // tslint:disable-next-line:prefer-object-spread
        _data = Object.assign(_data, (/** @type {?} */ ({
            shortcutRoot: true,
            _id: -1,
            _parent: null,
            _depth: 1,
        })));
        _data.children = shortcuts.map((/**
         * @param {?} i
         * @return {?}
         */
        i => {
            i._depth = 2;
            i._parent = _data;
            return i;
        }));
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
     * @param {?} data
     * @param {?} url
     * @param {?=} recursive
     * @param {?=} cb
     * @return {?}
     */
    getHit(data, url, recursive = false, cb = null) {
        /** @type {?} */
        let item = null;
        while (!item && url) {
            this.visit(data, (/**
             * @param {?} i
             * @return {?}
             */
            i => {
                if (cb) {
                    cb(i);
                }
                if (i.link != null && i.link === url) {
                    item = i;
                }
            }));
            if (!recursive)
                break;
            if (/[?;]/g.test(url)) {
                url = url.split(/[?;]/g)[0];
            }
            else {
                url = url.split('/').slice(0, -1).join('/');
            }
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
        let findItem = this.getHit(this.data, url, recursive, (/**
         * @param {?} i
         * @return {?}
         */
        i => {
            i._selected = false;
            i._open = false;
        }));
        if (findItem == null)
            return;
        do {
            findItem._selected = true;
            findItem._open = true;
            findItem = (/** @type {?} */ (findItem._parent));
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
        let item = this.getHit(this.data, url, recursive);
        if (!item)
            return ret;
        do {
            ret.splice(0, 0, item);
            item = (/** @type {?} */ (item._parent));
        } while (item);
        return ret;
    }
    /**
     * Get menu based on `key`
     * @param {?} key
     * @return {?}
     */
    getItem(key) {
        /** @type {?} */
        let res = null;
        this.visit(this.data, (/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (res == null && item.key === key) {
                res = item;
            }
        }));
        return res;
    }
    /**
     * Set menu based on `key`
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setItem(key, value) {
        /** @type {?} */
        const item = this.getItem(key);
        if (item == null)
            return;
        Object.keys(value).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => {
            item[k] = value[k];
        }));
        this._change$.next(this.data);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._change$.unsubscribe();
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
/** @nocollapse */ MenuService.ɵprov = ɵɵdefineInjectable({ factory: function MenuService_Factory() { return new MenuService(ɵɵinject(ALAIN_I18N_TOKEN, 8), ɵɵinject(ACLService, 8)); }, token: MenuService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype._change$;
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype.i18n$;
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype.i18nSrv;
    /**
     * @type {?}
     * @private
     */
    MenuService.prototype.aclService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/scroll/scroll.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScrollService {
    /**
     * @param {?} _doc
     * @param {?} platform
     */
    constructor(_doc, platform) {
        this._doc = _doc;
        this.platform = platform;
    }
    /**
     * @private
     * @return {?}
     */
    _getDoc() {
        return this._doc || document;
    }
    /**
     * @private
     * @return {?}
     */
    _getWin() {
        /** @type {?} */
        const doc = this._getDoc();
        return doc.defaultView || window;
    }
    /**
     * 获取滚动条位置
     * @param {?=} element 指定元素，默认 `window`
     * @return {?}
     */
    getScrollPosition(element) {
        if (!this.platform.isBrowser) {
            return [0, 0];
        }
        /** @type {?} */
        const win = this._getWin();
        if (element && element !== win) {
            return [((/** @type {?} */ (element))).scrollLeft, ((/** @type {?} */ (element))).scrollTop];
        }
        else {
            return [win.pageXOffset, win.pageYOffset];
        }
    }
    /**
     * 设置滚动条位置
     * @param {?} element 指定元素
     * @param {?} position
     * @return {?}
     */
    scrollToPosition(element, position) {
        if (!this.platform.isBrowser) {
            return;
        }
        (element || this._getWin()).scrollTo(position[0], position[1]);
    }
    /**
     * 设置滚动条至指定元素
     * @param {?=} element 指定元素，默认 `document.body`
     * @param {?=} topOffset 偏移值，默认 `0`
     * @return {?}
     */
    scrollToElement(element, topOffset = 0) {
        if (!this.platform.isBrowser) {
            return;
        }
        if (!element) {
            element = this._getDoc().body;
        }
        element.scrollIntoView();
        /** @type {?} */
        const win = this._getWin();
        if (win && win.scrollBy) {
            win.scrollBy(0, (/** @type {?} */ (element)).getBoundingClientRect().top - topOffset);
            if (win.pageYOffset < 20) {
                win.scrollBy(0, -win.pageYOffset);
            }
        }
    }
    /**
     * 滚动至顶部
     * @param {?=} topOffset 偏移值，默认 `0`
     * @return {?}
     */
    scrollToTop(topOffset = 0) {
        if (!this.platform.isBrowser) {
            return;
        }
        this.scrollToElement(this._getDoc().body, topOffset);
    }
}
ScrollService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ScrollService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Platform }
];
/** @nocollapse */ ScrollService.ɵprov = ɵɵdefineInjectable({ factory: function ScrollService_Factory() { return new ScrollService(ɵɵinject(DOCUMENT), ɵɵinject(Platform)); }, token: ScrollService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollService.prototype._doc;
    /**
     * @type {?}
     * @private
     */
    ScrollService.prototype.platform;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/settings/interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function App() { }
if (false) {
    /**
     * Name for app
     * @type {?|undefined}
     */
    App.prototype.name;
    /**
     * Description for app
     * @type {?|undefined}
     */
    App.prototype.description;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
function User() { }
if (false) {
    /**
     * Name for current user
     * @type {?|undefined}
     */
    User.prototype.name;
    /**
     * Avatar for current user
     * @type {?|undefined}
     */
    User.prototype.avatar;
    /**
     * Email for current user
     * @type {?|undefined}
     */
    User.prototype.email;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
function Layout() { }
if (false) {
    /**
     * Whether to fold menu
     * @type {?}
     */
    Layout.prototype.collapsed;
    /**
     * Current language
     * @type {?}
     */
    Layout.prototype.lang;
    /**
     * Color weak
     * @type {?}
     */
    Layout.prototype.colorWeak;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
function SettingsNotify() { }
if (false) {
    /** @type {?} */
    SettingsNotify.prototype.type;
    /**
     * Update `key` name, limited `layout` type
     * @type {?|undefined}
     */
    SettingsNotify.prototype.name;
    /** @type {?} */
    SettingsNotify.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/settings/settings.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LAYOUT = 'layout';
/** @type {?} */
const USER = 'user';
/** @type {?} */
const APP = 'app';
class SettingsService {
    /**
     * @param {?} platform
     */
    constructor(platform) {
        this.platform = platform;
        this.notify$ = new Subject();
        this._app = null;
        this._user = null;
        this._layout = null;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getData(key) {
        if (!this.platform.isBrowser) {
            return null;
        }
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setData(key, value) {
        if (!this.platform.isBrowser) {
            return;
        }
        localStorage.setItem(key, JSON.stringify(value));
    }
    /**
     * @return {?}
     */
    get layout() {
        if (!this._layout) {
            this._layout = Object.assign({ fixed: true, collapsed: false, boxed: false, lang: null }, this.getData(LAYOUT));
            this.setData(LAYOUT, this._layout);
        }
        return (/** @type {?} */ (this._layout));
    }
    /**
     * @return {?}
     */
    get app() {
        if (!this._app) {
            this._app = Object.assign({ year: new Date().getFullYear() }, this.getData(APP));
            this.setData(APP, this._app);
        }
        return (/** @type {?} */ (this._app));
    }
    /**
     * @return {?}
     */
    get user() {
        if (!this._user) {
            this._user = Object.assign({}, this.getData(USER));
            this.setData(USER, this._user);
        }
        return (/** @type {?} */ (this._user));
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
        this.setData(LAYOUT, this._layout);
        this.notify$.next((/** @type {?} */ ({ type: 'layout', name, value })));
        return true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setApp(value) {
        this._app = value;
        this.setData(APP, value);
        this.notify$.next({ type: 'app', value });
        return true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setUser(value) {
        this._user = value;
        this.setData(USER, value);
        this.notify$.next({ type: 'user', value });
        return true;
    }
}
SettingsService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
SettingsService.ctorParameters = () => [
    { type: Platform }
];
/** @nocollapse */ SettingsService.ɵprov = ɵɵdefineInjectable({ factory: function SettingsService_Factory() { return new SettingsService(ɵɵinject(Platform)); }, token: SettingsService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingsService.prototype.notify$;
    /**
     * @type {?}
     * @private
     */
    SettingsService.prototype._app;
    /**
     * @type {?}
     * @private
     */
    SettingsService.prototype._user;
    /**
     * @type {?}
     * @private
     */
    SettingsService.prototype._layout;
    /**
     * @type {?}
     * @private
     */
    SettingsService.prototype.platform;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/responsive/responsive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const REP_MAX = 6;
class ResponsiveService {
    /**
     * @param {?} cogSrv
     */
    constructor(cogSrv) {
        this.cog = (/** @type {?} */ (cogSrv.merge('themeResponsive', {
            rules: {
                1: { xs: 24 },
                2: { xs: 24, sm: 12 },
                3: { xs: 24, sm: 12, md: 8 },
                4: { xs: 24, sm: 12, md: 8, lg: 6 },
                5: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4 },
                6: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 2 },
            },
        })));
        if (Object.keys(this.cog.rules)
            .map((/**
         * @param {?} i
         * @return {?}
         */
        i => +i))
            .some((/**
         * @param {?} i
         * @return {?}
         */
        (i) => i < 1 || i > REP_MAX))) {
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
    { type: AlainConfigService }
];
/** @nocollapse */ ResponsiveService.ɵprov = ɵɵdefineInjectable({ factory: function ResponsiveService_Factory() { return new ResponsiveService(ɵɵinject(AlainConfigService)); }, token: ResponsiveService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ResponsiveService.prototype.cog;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/title/title.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.DELAY_TIME = 25;
        /**
         * 设置默认标题名
         */
        this.default = `Not Page Name`;
        this.i18n$ = this.i18nSrv.change.pipe(filter((/**
         * @return {?}
         */
        () => !!this.i18n$))).subscribe((/**
         * @return {?}
         */
        () => this.setTitle()));
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
     * @private
     * @return {?}
     */
    getByElement() {
        /** @type {?} */
        const el = (/** @type {?} */ ((this.doc.querySelector('.alain-default__content-title h1') || this.doc.querySelector('.page-header__title'))));
        if (el) {
            /** @type {?} */
            let text = '';
            el.childNodes.forEach((/**
             * @param {?} val
             * @return {?}
             */
            val => {
                if (!text && val.nodeType === 3) {
                    text = (/** @type {?} */ (val.textContent)).trim();
                }
            }));
            return text || (/** @type {?} */ ((/** @type {?} */ (el.firstChild)).textContent)).trim();
        }
        return '';
    }
    /**
     * @private
     * @return {?}
     */
    getByRoute() {
        /** @type {?} */
        let next = this.injector.get(ActivatedRoute);
        while (next.firstChild)
            next = next.firstChild;
        /** @type {?} */
        const data = (next.snapshot && next.snapshot.data) || {};
        if (data.titleI18n && this.i18nSrv)
            data.title = this.i18nSrv.fanyi(data.titleI18n);
        return data.title;
    }
    /**
     * @private
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
        return title || (/** @type {?} */ (item.text));
    }
    /**
     * @private
     * @param {?=} title
     * @return {?}
     */
    _setTitle(title) {
        if (!title) {
            title = this.getByRoute() || this.getByMenu() || this.getByElement() || this.default;
        }
        if (title && !Array.isArray(title)) {
            title = [title];
        }
        /** @type {?} */
        let newTitles = [];
        if (this._prefix) {
            newTitles.push(this._prefix);
        }
        newTitles.push(...((/** @type {?} */ (title))));
        if (this._suffix) {
            newTitles.push(this._suffix);
        }
        if (this._reverse) {
            newTitles = newTitles.reverse();
        }
        this.title.setTitle(newTitles.join(this._separator));
    }
    /**
     * Set the document title, will be delay `25ms`, pls refer to [#1261](https://github.com/ng-alain/ng-alain/issues/1261)
     * @param {?=} title
     * @return {?}
     */
    setTitle(title) {
        setTimeout((/**
         * @return {?}
         */
        () => this._setTitle(title)), this.DELAY_TIME);
    }
    /**
     * Set i18n key of the document title
     * @param {?} key
     * @param {?=} params
     * @return {?}
     */
    setTitleByI18n(key, params) {
        this.setTitle(this.i18nSrv.fanyi(key, params));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
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
/** @nocollapse */ TitleService.ɵprov = ɵɵdefineInjectable({ factory: function TitleService_Factory() { return new TitleService(ɵɵinject(INJECTOR), ɵɵinject(Title), ɵɵinject(MenuService), ɵɵinject(ALAIN_I18N_TOKEN, 8), ɵɵinject(DOCUMENT)); }, token: TitleService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype._prefix;
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype._suffix;
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype._separator;
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype._reverse;
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype.i18n$;
    /** @type {?} */
    TitleService.prototype.DELAY_TIME;
    /**
     * 设置默认标题名
     * @type {?}
     */
    TitleService.prototype.default;
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype.title;
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype.menuSrv;
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype.i18nSrv;
    /**
     * @type {?}
     * @private
     */
    TitleService.prototype.doc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/locale/locale.tokens.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DELON_LOCALE = new InjectionToken('delon-locale');

/**
 * @fileoverview added by tsickle
 * Generated from: src/locale/locale.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function LocaleData() { }
/**
 * @record
 */
function ExceptionLocaleData() { }
if (false) {
    /* Skipping unnamed member:
    403: string;*/
    /* Skipping unnamed member:
    404: string;*/
    /* Skipping unnamed member:
    500: string;*/
    /** @type {?} */
    ExceptionLocaleData.prototype.backToHome;
}
/**
 * @record
 */
function NoticeIconLocaleData() { }
if (false) {
    /** @type {?} */
    NoticeIconLocaleData.prototype.emptyText;
    /** @type {?} */
    NoticeIconLocaleData.prototype.clearText;
}
/**
 * @record
 */
function ReuseTabLocaleData() { }
if (false) {
    /** @type {?} */
    ReuseTabLocaleData.prototype.close;
    /** @type {?} */
    ReuseTabLocaleData.prototype.closeOther;
    /** @type {?} */
    ReuseTabLocaleData.prototype.closeRight;
    /** @type {?} */
    ReuseTabLocaleData.prototype.clear;
    /** @type {?} */
    ReuseTabLocaleData.prototype.refresh;
}
/**
 * @record
 */
function TagSelectLocaleData() { }
if (false) {
    /** @type {?} */
    TagSelectLocaleData.prototype.expand;
    /** @type {?} */
    TagSelectLocaleData.prototype.collapse;
}
/**
 * @record
 */
function MiniProgressLocaleData() { }
if (false) {
    /** @type {?} */
    MiniProgressLocaleData.prototype.target;
}
/**
 * @record
 */
function STLocaleData() { }
if (false) {
    /** @type {?} */
    STLocaleData.prototype.total;
    /** @type {?} */
    STLocaleData.prototype.filterConfirm;
    /** @type {?} */
    STLocaleData.prototype.filterReset;
}
/**
 * @record
 */
function SFLocaleData() { }
if (false) {
    /** @type {?} */
    SFLocaleData.prototype.submit;
    /** @type {?} */
    SFLocaleData.prototype.reset;
    /** @type {?} */
    SFLocaleData.prototype.search;
    /** @type {?} */
    SFLocaleData.prototype.edit;
    /** @type {?} */
    SFLocaleData.prototype.addText;
    /** @type {?} */
    SFLocaleData.prototype.removeText;
    /** @type {?} */
    SFLocaleData.prototype.checkAllText;
    /** @type {?} */
    SFLocaleData.prototype.error;
}
/**
 * @record
 */
function SFErrorLocaleData() { }
if (false) {
    /* Skipping unnamed member:
    'false schema': string;*/
    /** @type {?} */
    SFErrorLocaleData.prototype.$ref;
    /** @type {?} */
    SFErrorLocaleData.prototype.additionalItems;
    /** @type {?} */
    SFErrorLocaleData.prototype.additionalProperties;
    /** @type {?} */
    SFErrorLocaleData.prototype.anyOf;
    /** @type {?} */
    SFErrorLocaleData.prototype.dependencies;
    /** @type {?} */
    SFErrorLocaleData.prototype.enum;
    /** @type {?} */
    SFErrorLocaleData.prototype.format;
    /** @type {?} */
    SFErrorLocaleData.prototype.type;
    /** @type {?} */
    SFErrorLocaleData.prototype.required;
    /** @type {?} */
    SFErrorLocaleData.prototype.maxLength;
    /** @type {?} */
    SFErrorLocaleData.prototype.minLength;
    /** @type {?} */
    SFErrorLocaleData.prototype.minimum;
    /** @type {?} */
    SFErrorLocaleData.prototype.formatMinimum;
    /** @type {?} */
    SFErrorLocaleData.prototype.maximum;
    /** @type {?} */
    SFErrorLocaleData.prototype.formatMaximum;
    /** @type {?} */
    SFErrorLocaleData.prototype.maxItems;
    /** @type {?} */
    SFErrorLocaleData.prototype.minItems;
    /** @type {?} */
    SFErrorLocaleData.prototype.maxProperties;
    /** @type {?} */
    SFErrorLocaleData.prototype.minProperties;
    /** @type {?} */
    SFErrorLocaleData.prototype.multipleOf;
    /** @type {?} */
    SFErrorLocaleData.prototype.not;
    /** @type {?} */
    SFErrorLocaleData.prototype.oneOf;
    /** @type {?} */
    SFErrorLocaleData.prototype.pattern;
    /** @type {?} */
    SFErrorLocaleData.prototype.uniqueItems;
    /** @type {?} */
    SFErrorLocaleData.prototype.custom;
    /** @type {?} */
    SFErrorLocaleData.prototype.propertyNames;
    /** @type {?} */
    SFErrorLocaleData.prototype.patternRequired;
    /** @type {?} */
    SFErrorLocaleData.prototype.switch;
    /** @type {?} */
    SFErrorLocaleData.prototype.const;
    /** @type {?} */
    SFErrorLocaleData.prototype.contains;
    /** @type {?} */
    SFErrorLocaleData.prototype.formatExclusiveMaximum;
    /** @type {?} */
    SFErrorLocaleData.prototype.formatExclusiveMinimum;
    /** @type {?} */
    SFErrorLocaleData.prototype.if;
}
/**
 * @record
 */
function FullLocaleData() { }
if (false) {
    /** @type {?} */
    FullLocaleData.prototype.abbr;
    /** @type {?} */
    FullLocaleData.prototype.exception;
    /** @type {?} */
    FullLocaleData.prototype.noticeIcon;
    /** @type {?} */
    FullLocaleData.prototype.reuseTab;
    /** @type {?} */
    FullLocaleData.prototype.tagSelect;
    /** @type {?} */
    FullLocaleData.prototype.miniProgress;
    /** @type {?} */
    FullLocaleData.prototype.st;
    /** @type {?} */
    FullLocaleData.prototype.sf;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/locale/languages/zh-CN.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        refresh: '刷新',
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
            'false schema': `布尔模式出错`,
            $ref: `无法找到引用{ref}`,
            additionalItems: `不允许超过{limit}个元素`,
            additionalProperties: `不允许有额外的属性`,
            anyOf: `数据应为 anyOf 所指定的其中一个`,
            dependencies: `应当拥有属性{property}的依赖属性{deps}`,
            enum: `应当是预设定的枚举值之一`,
            format: `格式不正确`,
            type: `类型应当是 {type}`,
            required: `必填项`,
            maxLength: `至多 {limit} 个字符`,
            minLength: `至少 {limit} 个字符以上`,
            minimum: `必须 {comparison}{limit}`,
            formatMinimum: `必须 {comparison}{limit}`,
            maximum: `必须 {comparison}{limit}`,
            formatMaximum: `必须 {comparison}{limit}`,
            maxItems: `不应多于 {limit} 个项`,
            minItems: `不应少于 {limit} 个项`,
            maxProperties: `不应多于 {limit} 个属性`,
            minProperties: `不应少于 {limit} 个属性`,
            multipleOf: `应当是 {multipleOf} 的整数倍`,
            not: `不应当匹配 "not" schema`,
            oneOf: `只能匹配一个 "oneOf" 中的 schema`,
            pattern: `数据格式不正确`,
            uniqueItems: `不应当含有重复项 (第 {j} 项与第 {i} 项是重复的)`,
            custom: `格式不正确`,
            propertyNames: `属性名 "{propertyName}" 无效`,
            patternRequired: `应当有属性匹配模式 {missingPattern}`,
            switch: `由于 {caseIndex} 失败，未通过 "switch" 校验`,
            const: `应当等于常量`,
            contains: `应当包含一个有效项`,
            formatExclusiveMaximum: `formatExclusiveMaximum 应当是布尔值`,
            formatExclusiveMinimum: `formatExclusiveMinimum 应当是布尔值`,
            if: `应当匹配模式 "{failingKeyword}"`,
        },
    },
}));

/**
 * @fileoverview added by tsickle
 * Generated from: src/locale/locale.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return (/** @type {?} */ ((this._locale[path] || {})));
    }
}
DelonLocaleService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DelonLocaleService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DELON_LOCALE,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DelonLocaleService.prototype._locale;
    /**
     * @type {?}
     * @private
     */
    DelonLocaleService.prototype.change$;
}
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
    deps: [[new Optional(), new SkipSelf(), DelonLocaleService], DELON_LOCALE],
};

/**
 * @fileoverview added by tsickle
 * Generated from: src/locale/locale.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = zhCN;
class DelonLocaleModule {
}
DelonLocaleModule.decorators = [
    { type: NgModule, args: [{
                providers: [{ provide: DELON_LOCALE, useValue: ɵ0 }, DELON_LOCALE_SERVICE_PROVIDER],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/locale/languages/en-US.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var enUS = (/** @type {?} */ ({
    abbr: 'en-US',
    exception: {
        403: `Sorry, you don't have access to this page`,
        404: `Sorry, the page you visited does not exist`,
        500: `Sorry, the server is reporting an error`,
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
        refresh: 'Refresh',
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
            'false schema': `Boolean schema is false`,
            $ref: `Can't resolve reference {ref}`,
            additionalItems: `Should not have more than {limit} item`,
            additionalProperties: `Should not have additional properties`,
            anyOf: `Should match some schema in "anyOf"`,
            dependencies: `should have property {deps} when property {property} is present`,
            enum: `Should be equal to one of predefined values`,
            format: `Should match format "{format}"`,
            type: `Should be {type}`,
            required: `Required`,
            maxLength: `Should not be longer than {limit} character`,
            minLength: `Should not be shorter than {limit} character`,
            minimum: `Should be {comparison} {limit}`,
            formatMinimum: `Should be {comparison} {limit}`,
            maximum: `Should be {comparison} {limit}`,
            formatMaximum: `Should be {comparison} {limit}`,
            maxItems: `Should not have more than {limit} item`,
            minItems: `Should not have less than {limit} item`,
            maxProperties: `Should not have more than {limit} property`,
            minProperties: `Should not have less than {limit} property`,
            multipleOf: `Should be a multiple of {multipleOf}`,
            not: `Should not be valid according to schema in "not"`,
            oneOf: `Should match exactly one schema in "oneOf"`,
            pattern: `Should match pattern "{pattern}"`,
            uniqueItems: `Should not have duplicate items (items ## {j} and {i} are identical)`,
            custom: `Should match format`,
            propertyNames: `Property name "{propertyName}" is invalid`,
            patternRequired: `Should have property matching pattern "{missingPattern}"`,
            switch: `Should pass "switch" keyword validation, case {caseIndex} fails`,
            const: `Should be equal to constant`,
            contains: `Should contain a valid item`,
            formatExclusiveMaximum: `formatExclusiveMaximum should be boolean`,
            formatExclusiveMinimum: `formatExclusiveMinimum should be boolean`,
            if: `Should match "{failingKeyword}" schema`,
        },
    },
}));

/**
 * @fileoverview added by tsickle
 * Generated from: src/locale/languages/zh-TW.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var zhTW = (/** @type {?} */ ({
    abbr: 'zh-TW',
    exception: {
        403: '抱歉，你無權訪問該頁面',
        404: '抱歉，你訪問的頁面不存在',
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
        refresh: '刷新',
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
            'false schema': `布爾模式出錯`,
            $ref: `無法找到引用{ref}`,
            additionalItems: `不允許超過{ref}`,
            additionalProperties: `不允許有額外的屬性`,
            anyOf: `數據應為 anyOf 所指定的其中一個`,
            dependencies: `應當擁有屬性{property}的依賴屬性{deps}`,
            enum: `應當是預設定的枚舉值之一`,
            format: `格式不正確`,
            type: `類型應當是 {type}`,
            required: `必填項`,
            maxLength: `至多 {limit} 個字符`,
            minLength: `至少 {limit} 個字符以上`,
            minimum: `必須 {comparison}{limit}`,
            formatMinimum: `必須 {comparison}{limit}`,
            maximum: `必須 {comparison}{limit}`,
            formatMaximum: `必須 {comparison}{limit}`,
            maxItems: `不應多於 {limit} 個項`,
            minItems: `不應少於 {limit} 個項`,
            maxProperties: `不應多於 {limit} 個屬性`,
            minProperties: `不應少於 {limit} 個屬性`,
            multipleOf: `應當是 {multipleOf} 的整數倍`,
            not: `不應當匹配 "not" schema`,
            oneOf: `只能匹配一個 "oneOf" 中的 schema`,
            pattern: `數據格式不正確`,
            uniqueItems: `不應當含有重複項 (第 {j} 項與第 {i} 項是重複的)`,
            custom: `格式不正確`,
            propertyNames: `屬性名 "{propertyName}" 無效`,
            patternRequired: `應當有屬性匹配模式 {missingPattern}`,
            switch: `由於 {caseIndex} 失敗，未通過 "switch" 校驗`,
            const: `應當等於常量`,
            contains: `應當包含一個有效項`,
            formatExclusiveMaximum: `formatExclusiveMaximum 應當是布爾值`,
            formatExclusiveMinimum: `formatExclusiveMinimum 應當是布爾值`,
            if: `應當匹配模式 "{failingKeyword}"`,
        },
    },
}));

/**
 * @fileoverview added by tsickle
 * Generated from: src/locale/languages/tr-TR.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var trTR = (/** @type {?} */ ({
    abbr: 'tr-TR',
    exception: {
        403: `Üzgünüz, bu sayfaya erişiminiz yok`,
        404: `Maalesef bu sayfa mevcut değil`,
        500: `Üzgünüz, sunucu hatası`,
        backToHome: `Ana Sayfa'ya geri dön`,
    },
    noticeIcon: {
        emptyText: 'Veri yok',
        clearText: 'Temiz',
    },
    reuseTab: {
        close: 'Sekmeyi Kapat',
        closeOther: 'Diğer sekmeleri kapat',
        closeRight: 'Sağdaki sekmeleri kapat',
        refresh: 'täzele',
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
            'false schema': `Boolean schema is false`,
            $ref: `Can't resolve reference {ref}`,
            additionalItems: `Should not have more than {limit} item`,
            additionalProperties: `Should not have additional properties`,
            anyOf: `Should match some schema in "anyOf"`,
            dependencies: `should have property {deps} when property {property} is present`,
            enum: `Should be equal to one of predefined values`,
            format: `Should match format "{format}"`,
            type: `Should be {type}`,
            required: `Required`,
            maxLength: `Should not be longer than {limit} character`,
            minLength: `Should not be shorter than {limit} character`,
            minimum: `Should be {comparison} {limit}`,
            formatMinimum: `Should be {comparison} {limit}`,
            maximum: `Should be {comparison} {limit}`,
            formatMaximum: `Should be {comparison} {limit}`,
            maxItems: `Should not have more than {limit} item`,
            minItems: `Should not have less than {limit} item`,
            maxProperties: `Should not have more than {limit} property`,
            minProperties: `Should not have less than {limit} property`,
            multipleOf: `Should be a multiple of {multipleOf}`,
            not: `Should not be valid according to schema in "not"`,
            oneOf: `Should match exactly one schema in "oneOf"`,
            pattern: `Should match pattern "{pattern}"`,
            uniqueItems: `Should not have duplicate items (items ## {j} and {i} are identical)`,
            custom: `Should match format`,
            propertyNames: `Property name "{propertyName}" is invalid`,
            patternRequired: `Should have property matching pattern "{missingPattern}"`,
            switch: `Should pass "switch" keyword validation, case {caseIndex} fails`,
            const: `Should be equal to constant`,
            contains: `Should contain a valid item`,
            formatExclusiveMaximum: `formatExclusiveMaximum should be boolean`,
            formatExclusiveMinimum: `formatExclusiveMinimum should be boolean`,
            if: `Should match "{failingKeyword}" schema`,
        },
    },
}));

/**
 * @fileoverview added by tsickle
 * Generated from: src/locale/languages/pl-PL.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var plPL = (/** @type {?} */ ({
    abbr: 'en-US',
    exception: {
        403: `Niestety, nie masz uprawnień do tej strony`,
        404: `Niestety, ta strona nie istnieje`,
        500: `Niestety, błąd serwera`,
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
        refresh: 'Refresh',
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
            'false schema': `Boolean schema is false`,
            $ref: `Can't resolve reference {ref}`,
            additionalItems: `Should not have more than {limit} item`,
            additionalProperties: `Should not have additional properties`,
            anyOf: `Should match some schema in "anyOf"`,
            dependencies: `should have property {deps} when property {property} is present`,
            enum: `Should be equal to one of predefined values`,
            format: `Should match format "{format}"`,
            type: `Should be {type}`,
            required: `Required`,
            maxLength: `Should not be longer than {limit} character`,
            minLength: `Should not be shorter than {limit} character`,
            minimum: `Should be {comparison} {limit}`,
            formatMinimum: `Should be {comparison} {limit}`,
            maximum: `Should be {comparison} {limit}`,
            formatMaximum: `Should be {comparison} {limit}`,
            maxItems: `Should not have more than {limit} item`,
            minItems: `Should not have less than {limit} item`,
            maxProperties: `Should not have more than {limit} property`,
            minProperties: `Should not have less than {limit} property`,
            multipleOf: `Should be a multiple of {multipleOf}`,
            not: `Should not be valid according to schema in "not"`,
            oneOf: `Should match exactly one schema in "oneOf"`,
            pattern: `Should match pattern "{pattern}"`,
            uniqueItems: `Should not have duplicate items (items ## {j} and {i} are identical)`,
            custom: `Should match format`,
            propertyNames: `Property name "{propertyName}" is invalid`,
            patternRequired: `Should have property matching pattern "{missingPattern}"`,
            switch: `Should pass "switch" keyword validation, case {caseIndex} fails`,
            const: `Should be equal to constant`,
            contains: `Should contain a valid item`,
            formatExclusiveMaximum: `formatExclusiveMaximum should be boolean`,
            formatExclusiveMinimum: `formatExclusiveMinimum should be boolean`,
            if: `Should match "{failingKeyword}" schema`,
        },
    },
}));

/**
 * @fileoverview added by tsickle
 * Generated from: src/locale/languages/el-GR.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var elGR = (/** @type {?} */ ({
    abbr: 'el-GR',
    exception: {
        403: `Λυπούμαστε, δεν έχετε πρόσβαση σε αυτήν τη σελίδα`,
        404: `Λυπούμαστε, η σελίδα αυτή δεν βρέθηκε`,
        500: `Λυπούμαστε, σφάλμα διακομιστή`,
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
        refresh: 'Ανανέωση',
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
            'false schema': `Η δυαδική δομή είναι ψευδής`,
            $ref: `Δεν είναι δυνατή η επίλυση της αναφοράς {ref}`,
            additionalItems: `Δεν πρέπει να έχει περισσότερα από {limit} στοιχεία`,
            additionalProperties: `Δεν πρέπει να έχει επιπλέον χαρακτηριστικά`,
            anyOf: `Πρέπει να ταιριάζει με κάποια απο τις δομές στο "anyOf"`,
            dependencies: `τα χαρακτηριστικά {deps} είναι απαραίτητα, όταν υπάρχει το χαρακτηριστικό {property}`,
            enum: `Πρέπει να είναι ίσο με μία από τις προκαθορισμένες τιμές`,
            format: `Πρέπει να έχει την μορφή "{format}"`,
            type: `Πρέπει να είναι {type}`,
            required: `Απαιτείται`,
            maxLength: `Δεν πρέπει να είναι μεγαλύτερο από {limit} χαρακτήρες`,
            minLength: `Δεν πρέπει να είναι μικρότερο από {limit} χαρακτήρες`,
            minimum: `Πρέπει να είναι {comparison} {limit}`,
            formatMinimum: `Πρέπει να είναι {comparison} {limit}`,
            maximum: `Πρέπει να είναι {comparison} {limit}`,
            formatMaximum: `Πρέπει να είναι {comparison} {limit}`,
            maxItems: `Δεν πρέπει να έχει περισσότερα από {limit} στοιχεία`,
            minItems: `Δεν πρέπει να έχει λιγότερα από {limit} στοιχεία`,
            maxProperties: `Δεν πρέπει να έχει περισσότερα από {limit} χαρακτηριστικά`,
            minProperties: `Δεν πρέπει να έχει λιγότερα από {limit} χαρακτηριστικά`,
            multipleOf: `Πρέπει να είναι πολλαπλάσιο του {multipleOf}`,
            not: `Δεν πρέπει να είναι εγκύρο, σύμφωνα με την δομή στο "not"`,
            oneOf: `Πρέπει να ταιριάζει με ακριβώς μια απο τις δομές στο "oneOf"`,
            pattern: `Πρέπει να ταιριάζει με το πρότυπο "{pattern}"`,
            uniqueItems: `Τα στοιχεία δεν πρέπει να επαναλαμβάνονται (τα στοιχεία ## {j} και {i} είναι ίδια)`,
            custom: `Πρέπει να έχει την μορφή`,
            propertyNames: `Το όνομα του χαρακτηριστικού "{propertyName}" δεν είναι έγκυρο`,
            patternRequired: `Πρέπει να υπάρχει το χαρακτηριστικό αντιπαραβολής προτύπου "{missingPattern}"`,
            switch: `Πρέπει να περάσει ο έλεγχος εγκυρότητας της λέξης-κλειδιού με την χρήση της "switch", η περίπτωση {caseIndex} αποτυγχάνει`,
            const: `Πρέπει να είναι ίσο με σταθερά`,
            contains: `Πρέπει να περιέχει κάποιο έγκυρο στοιχείο`,
            formatExclusiveMaximum: `formatExclusiveMaximum πρέπει να είναι boolean`,
            formatExclusiveMinimum: `formatExclusiveMinimum πρέπει να είναι boolean`,
            if: `Πρέπει να ταιριάζει στην δομή "{failingKeyword}"`,
        },
    },
}));

/**
 * @fileoverview added by tsickle
 * Generated from: src/locale/languages/ko-KR.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var koKR = (/** @type {?} */ ({
    abbr: 'ko-KR',
    exception: {
        403: `죄송합니다.이 페이지에 액세스 할 수 없습니다.`,
        404: `죄송합니다. 해당 페이지가 없습니다.`,
        500: `죄송합니다, 서버 오류가 있습니다.`,
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
        refresh: '새롭게 하다',
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
            'false schema': `Boolean schema is false`,
            $ref: `Can't resolve reference {ref}`,
            additionalItems: `Should not have more than {limit} item`,
            additionalProperties: `Should not have additional properties`,
            anyOf: `Should match some schema in "anyOf"`,
            dependencies: `should have property {deps} when property {property} is present`,
            enum: `Should be equal to one of predefined values`,
            format: `Should match format "{format}"`,
            type: `Should be {type}`,
            required: `Required`,
            maxLength: `Should not be longer than {limit} character`,
            minLength: `Should not be shorter than {limit} character`,
            minimum: `Should be {comparison} {limit}`,
            formatMinimum: `Should be {comparison} {limit}`,
            maximum: `Should be {comparison} {limit}`,
            formatMaximum: `Should be {comparison} {limit}`,
            maxItems: `Should not have more than {limit} item`,
            minItems: `Should not have less than {limit} item`,
            maxProperties: `Should not have more than {limit} property`,
            minProperties: `Should not have less than {limit} property`,
            multipleOf: `Should be a multiple of {multipleOf}`,
            not: `Should not be valid according to schema in "not"`,
            oneOf: `Should match exactly one schema in "oneOf"`,
            pattern: `Should match pattern "{pattern}"`,
            uniqueItems: `Should not have duplicate items (items ## {j} and {i} are identical)`,
            custom: `Should match format`,
            propertyNames: `Property name "{propertyName}" is invalid`,
            patternRequired: `Should have property matching pattern "{missingPattern}"`,
            switch: `Should pass "switch" keyword validation, case {caseIndex} fails`,
            const: `Should be equal to constant`,
            contains: `Should contain a valid item`,
            formatExclusiveMaximum: `formatExclusiveMaximum should be boolean`,
            formatExclusiveMinimum: `formatExclusiveMinimum should be boolean`,
            if: `Should match "{failingKeyword}" schema`,
        },
    },
}));

/**
 * @fileoverview added by tsickle
 * Generated from: src/locale/languages/hr-HR.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var hrHR = (/** @type {?} */ ({
    abbr: 'hr-HR',
    exception: {
        403: `Nažalost, nemate pristup ovoj lokaciji`,
        404: `Nažalost, lokacija ne postoji`,
        500: `Nažalost, server je javio pogrešku`,
        backToHome: 'Nazad na početnu stranicu',
    },
    noticeIcon: {
        emptyText: 'Nema podataka',
        clearText: 'Obriši',
    },
    reuseTab: {
        close: 'Zatvori karticu',
        closeOther: 'Zatvori druge kartice',
        closeRight: 'Zatvori kartice desno',
        refresh: 'Refresh',
    },
    tagSelect: {
        expand: 'Proširi',
        collapse: 'Skupi',
    },
    miniProgress: {
        target: 'Cilj: ',
    },
    st: {
        total: '{{range[0]}} - {{range[1]}} od {{total}}',
        filterConfirm: 'U redu',
        filterReset: 'Poništi',
    },
    sf: {
        submit: 'Pošalji',
        reset: 'Poništi',
        search: 'Pretraži',
        edit: 'Spremi',
        addText: 'Dodaj',
        removeText: 'Ukloni',
        checkAllText: 'Označi sve',
    },
}));

/**
 * @fileoverview added by tsickle
 * Generated from: src/locale/languages/ja-JP.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var jaJP = (/** @type {?} */ ({
    abbr: 'ja-JP',
    exception: {
        403: 'ページへのアクセス権限がありません',
        404: 'ページが存在しません',
        500: 'サーバーエラーが発生しました',
        backToHome: 'ホームに戻る',
    },
    noticeIcon: {
        emptyText: 'データが有りません',
        clearText: 'クリア',
    },
    reuseTab: {
        close: 'タブを閉じる',
        closeOther: '他のタブを閉じる',
        closeRight: '右のタブを閉じる',
        refresh: 'リフレッシュ',
    },
    tagSelect: {
        expand: '展開する',
        collapse: '折りたたむ',
    },
    miniProgress: {
        target: '設定値: ',
    },
    st: {
        total: '{{range[0]}} - {{range[1]}} / {{total}}',
        filterConfirm: '確定',
        filterReset: 'リセット',
    },
    sf: {
        submit: '送信',
        reset: 'リセット',
        search: '検索',
        edit: '保存',
        addText: '追加',
        removeText: '削除',
        checkAllText: '全選択',
        error: {
            'false schema': `真偽値スキーマが不正です`,
            $ref: `参照を解決できません: {ref}`,
            additionalItems: `{limit}個を超えるアイテムを含めることはできません`,
            additionalProperties: `追加のプロパティを使用しないでください`,
            anyOf: `"anyOf"のスキーマと一致する必要があります`,
            dependencies: `プロパティ {property} を指定した場合、次の依存関係を満たす必要があります: {deps}`,
            enum: `定義された値のいずれかに等しくなければなりません`,
            format: `入力形式に一致しません: "{format}"`,
            type: `型が不正です: {type}`,
            required: `必須項目です`,
            maxLength: `最大文字数: {limit}`,
            minLength: `最少文字数: {limit}`,
            minimum: `値が不正です: {comparison} {limit}`,
            formatMinimum: `値が不正です: {comparison} {limit}`,
            maximum: `値が不正です: {comparison} {limit}`,
            formatMaximum: `値が不正です: {comparison} {limit}`,
            maxItems: `最大選択数は {limit}　より小さい必要があります`,
            minItems: `最小選択数は {limit}　より大きい必要があります`,
            maxProperties: `値を{limit}より大きくすることはできません`,
            minProperties: `値を{limit}より小さくすることはできません`,
            multipleOf: `値は次の数の倍数である必要があります: {multipleOf}`,
            not: `値が不正です:`,
            oneOf: `値が不正です:`,
            pattern: `次のパターンに一致する必要があります: "{pattern}"`,
            uniqueItems: `値が重複しています: 選択肢: {j} 、{i}`,
            custom: `形式と一致する必要があります`,
            propertyNames: `次のプロパティの値が無効です: "{propertyName}"`,
            patternRequired: `次のパターンに一致するプロパティが必須です: "{missingPattern}"`,
            switch: `"switch" キーワードの値が不正です: {caseIndex}`,
            const: `値が定数に一致しません`,
            contains: `有効なアイテムを含める必要があります`,
            formatExclusiveMaximum: `formatExclusiveMaximum は真偽値である必要があります`,
            formatExclusiveMinimum: `formatExclusiveMaximum は真偽値である必要があります`,
            if: `パターンと一致する必要があります: "{failingKeyword}" `,
        },
    },
}));

/**
 * @fileoverview added by tsickle
 * Generated from: src/locale/public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: src/locale/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/modal/modal.helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ModalHelperOptions() { }
if (false) {
    /**
     * 大小；例如：lg、600，默认：`lg`
     * @type {?|undefined}
     */
    ModalHelperOptions.prototype.size;
    /**
     * 对话框 [ModalOptions](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts) 参数
     * @type {?|undefined}
     */
    ModalHelperOptions.prototype.modalOptions;
    /**
     * 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误
     * @type {?|undefined}
     */
    ModalHelperOptions.prototype.exact;
    /**
     * 是否包裹标签页，修复模态包含标签间距问题
     * @type {?|undefined}
     */
    ModalHelperOptions.prototype.includeTabs;
}
/**
 * 对话框辅助类
 */
class ModalHelper {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
    }
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
    create(comp, params, options) {
        options = deepMerge({
            size: 'lg',
            exact: true,
            includeTabs: false,
        }, options);
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            const { size, includeTabs, modalOptions } = (/** @type {?} */ (options));
            /** @type {?} */
            let cls = '';
            /** @type {?} */
            let width = '';
            if (size) {
                if (typeof size === 'number') {
                    width = `${size}px`;
                }
                else {
                    cls = `modal-${size}`;
                }
            }
            if (includeTabs) {
                cls += ' modal-include-tabs';
            }
            if (modalOptions && modalOptions.nzWrapClassName) {
                cls += ` ${modalOptions.nzWrapClassName}`;
                delete modalOptions.nzWrapClassName;
            }
            /** @type {?} */
            const defaultOptions = {
                nzWrapClassName: cls,
                nzContent: comp,
                nzWidth: width ? width : undefined,
                nzFooter: null,
                nzComponentParams: params,
            };
            /** @type {?} */
            const subject = this.srv.create(Object.assign(Object.assign({}, defaultOptions), modalOptions));
            /** @type {?} */
            const afterClose$ = subject.afterClose.subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
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
    }
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
    createStatic(comp, params, options) {
        /** @type {?} */
        const modalOptions = Object.assign({ nzMaskClosable: false }, (options && options.modalOptions));
        return this.create(comp, params, Object.assign(Object.assign({}, options), { modalOptions }));
    }
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
     *
     * @param {?=} options
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
     *
     * @param {?=} options
     * @return {?}
     */
    static(comp, params, size = 'lg', options) {
        return this.open(comp, params, size, Object.assign({ nzMaskClosable: false }, options));
    }
}
ModalHelper.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ModalHelper.ctorParameters = () => [
    { type: NzModalService }
];
/** @nocollapse */ ModalHelper.ɵprov = ɵɵdefineInjectable({ factory: function ModalHelper_Factory() { return new ModalHelper(ɵɵinject(NzModalService)); }, token: ModalHelper, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalHelper.prototype.srv;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/drawer/drawer.helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function DrawerHelperOptions() { }
if (false) {
    /**
     * 大小，若值为数值类型，则根据 `nzPlacement` 自动转化为 `nzHeight` 或 `nzWidth`；例如：lg、600，默认：`md`
     *
     * | 类型 | 默认大小 |
     * | --- | ------ |
     * | `sm` | `300` |
     * | `md` | `600` |
     * | `lg` | `900` |
     * | `xl` | `1200` |
     *
     * > 以上值，可通过覆盖相应的LESS参数自行调整
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.size;
    /**
     * 是否包含底部工具条，默认：`true`
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.footer;
    /**
     * 底部工具条高度，默认：`55`
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.footerHeight;
    /**
     * 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.exact;
    /**
     * 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.drawerOptions;
}
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
class DrawerHelper {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
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
        options = deepMerge({
            size: 'md',
            footer: true,
            footerHeight: 50,
            exact: true,
            drawerOptions: {
                nzPlacement: 'right',
                nzWrapClassName: '',
            },
        }, options);
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            const { size, footer, footerHeight, drawerOptions } = (/** @type {?} */ (options));
            /** @type {?} */
            const defaultOptions = {
                nzContent: comp,
                nzContentParams: params,
                nzTitle: title,
            };
            if (typeof size === 'number') {
                defaultOptions[(/** @type {?} */ (drawerOptions)).nzPlacement === 'top' || (/** @type {?} */ (drawerOptions)).nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'] = (/** @type {?} */ (options)).size;
            }
            else if (!(/** @type {?} */ (drawerOptions)).nzWidth) {
                defaultOptions.nzWrapClassName = ((/** @type {?} */ (drawerOptions)).nzWrapClassName + ` drawer-${(/** @type {?} */ (options)).size}`).trim();
                delete (/** @type {?} */ (drawerOptions)).nzWrapClassName;
            }
            if (footer) {
                // The 24 value is @drawer-body-padding
                defaultOptions.nzBodyStyle = {
                    'padding-bottom.px': (/** @type {?} */ (footerHeight)) + 24,
                };
            }
            /** @type {?} */
            const subject = this.srv.create(Object.assign(Object.assign({}, defaultOptions), drawerOptions));
            /** @type {?} */
            const afterClose$ = subject.afterClose.subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
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
        const drawerOptions = Object.assign({ nzMaskClosable: false }, (options && options.drawerOptions));
        return this.create(title, comp, params, Object.assign(Object.assign({}, options), { drawerOptions }));
    }
}
DrawerHelper.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
DrawerHelper.ctorParameters = () => [
    { type: NzDrawerService }
];
/** @nocollapse */ DrawerHelper.ɵprov = ɵɵdefineInjectable({ factory: function DrawerHelper_Factory() { return new DrawerHelper(ɵɵinject(NzDrawerService)); }, token: DrawerHelper, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DrawerHelper.prototype.srv;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/http/http.client.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @param {?} cogSrv
     */
    constructor(http, cogSrv) {
        this.http = http;
        this._loading = false;
        this.cog = (/** @type {?} */ (cogSrv.merge('themeHttp', {
            nullValueHandling: 'include',
            dateValueHandling: 'timestamp',
        })));
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
        Object.keys(params).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
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
        }));
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
        // tslint:disable-next-line: forin
        for (const key in params) {
            arr.push(`${key}=${params[key]}`);
        }
        return url + arr.join('&');
    }
    /**
     * @return {?}
     */
    begin() {
        Promise.resolve(null).then((/**
         * @return {?}
         */
        () => (this._loading = true)));
    }
    /**
     * @return {?}
     */
    end() {
        Promise.resolve(null).then((/**
         * @return {?}
         */
        () => (this._loading = false)));
    }
    /**
     * GET 请求
     * @param {?} url
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    get(url, params, options = {}) {
        return this.request('GET', url, Object.assign({ params }, options));
    }
    /**
     * POST 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    post(url, body, params, options = {}) {
        return this.request('POST', url, Object.assign({ body,
            params }, options));
    }
    /**
     * DELETE 请求
     * @param {?} url
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    delete(url, params, options = {}) {
        return this.request('DELETE', url, Object.assign({ params }, options));
    }
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
    jsonp(url, params, callbackParam = 'JSONP_CALLBACK') {
        this.begin();
        return this.http.jsonp(this.appliedUrl(url, params), callbackParam).pipe(tap((/**
         * @return {?}
         */
        () => this.end())), catchError((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.end();
            return throwError(res);
        })));
    }
    /**
     * PATCH 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    patch(url, body, params, options = {}) {
        return this.request('PATCH', url, Object.assign({ body,
            params }, options));
    }
    /**
     * PUT 请求
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    put(url, body, params, options = {}) {
        return this.request('PUT', url, Object.assign({ body,
            params }, options));
    }
    /**
     * 发送传统表单请求（即：`application/x-www-form-urlencoded`）
     * @param {?} url
     * @param {?} body
     * @param {?} params
     * @param {?=} options
     * @return {?}
     */
    form(url, body, params, options = {}) {
        return this.request('POST', url, Object.assign(Object.assign({ body,
            params }, options), { headers: {
                'content-type': `application/x-www-form-urlencoded`,
            } }));
    }
    /**
     * @param {?} method
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    request(method, url, options = {}) {
        this.begin();
        if (options.params)
            options.params = this.parseParams(options.params);
        return of(null).pipe(tap((/**
         * @return {?}
         */
        () => this.begin())), switchMap((/**
         * @return {?}
         */
        () => this.http.request(method, url, options))), tap((/**
         * @return {?}
         */
        () => this.end())), catchError((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.end();
            return throwError(res);
        })));
    }
}
_HttpClient.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
_HttpClient.ctorParameters = () => [
    { type: HttpClient },
    { type: AlainConfigService }
];
/** @nocollapse */ _HttpClient.ɵprov = ɵɵdefineInjectable({ factory: function _HttpClient_Factory() { return new _HttpClient(ɵɵinject(HttpClient), ɵɵinject(AlainConfigService)); }, token: _HttpClient, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    _HttpClient.prototype.cog;
    /**
     * @type {?}
     * @private
     */
    _HttpClient.prototype._loading;
    /**
     * @type {?}
     * @private
     */
    _HttpClient.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/http/http.decorator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Every http decorator must be based on `BaseAPI`, Like this:
 * ```ts
 * \\@Injectable()
 * class DataService extends BaseApi {}
 * ```
 * @abstract
 */
class BaseApi {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
}
BaseApi.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BaseApi.ctorParameters = () => [
    { type: Injector, decorators: [{ type: Inject, args: [Injector,] }] }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BaseApi.prototype.injector;
}
/**
 * @record
 */
function HttpOptions() { }
if (false) {
    /**
     * ACL配置，若导入 `\@delon/acl` 时自动有效，等同于 `ACLService.can(roleOrAbility: ACLCanType)` 参数值
     * @type {?|undefined}
     */
    HttpOptions.prototype.acl;
    /** @type {?|undefined} */
    HttpOptions.prototype.observe;
    /** @type {?|undefined} */
    HttpOptions.prototype.responseType;
    /** @type {?|undefined} */
    HttpOptions.prototype.reportProgress;
    /** @type {?|undefined} */
    HttpOptions.prototype.withCredentials;
}
/**
 * @record
 */
function ParamType() { }
if (false) {
    /** @type {?} */
    ParamType.prototype.key;
    /** @type {?} */
    ParamType.prototype.index;
    /* Skipping unhandled member: [key: string]: any;*/
    /* Skipping unhandled member: [key: number]: any;*/
}
/** @type {?} */
const paramKey = `__api_params`;
/**
 * @param {?} target
 * @param {?=} key
 * @return {?}
 */
function setParam(target, key = paramKey) {
    /** @type {?} */
    let params = target[key];
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
        const params = setParam(target.prototype);
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
        const params = setParam(target.prototype);
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
     * @return {?}
     */
    function (key) {
        return (/**
         * @param {?} target
         * @param {?} propertyKey
         * @param {?} index
         * @return {?}
         */
        function (target, propertyKey, index) {
            /** @type {?} */
            const params = setParam(setParam(target), propertyKey);
            /** @type {?} */
            let tParams = params[paramName];
            if (typeof tParams === 'undefined') {
                tParams = params[paramName] = [];
            }
            tParams.push({
                key,
                index,
            });
        });
    });
}
/**
 * URL路由参数
 * - 有效范围：方法参数
 * @type {?}
 */
const Path = makeParam('path');
/**
 * URL 参数 `QueryString`
 * - 有效范围：方法参数
 * @type {?}
 */
const Query = makeParam('query');
/**
 * 参数 `Body`
 * - 有效范围：方法参数
 * @type {?}
 */
const Body = makeParam('body')();
/**
 * 参数 `headers`
 * - 有效范围：方法参数
 * - 合并 `BaseHeaders`
 * @type {?}
 */
const Headers = makeParam('headers');
/**
 * Request Payload
 * - Supported body (like`POST`, `PUT`) as a body data, equivalent to `\@Body`
 * - Not supported body (like `GET`, `DELETE` etc) as a `QueryString`
 * @type {?}
 */
const Payload = makeParam('payload')();
/**
 * @param {?} data
 * @param {?} key
 * @param {?} args
 * @return {?}
 */
function getValidArgs(data, key, args) {
    if (!data[key] || !Array.isArray(data[key]) || data[key].length <= 0) {
        return undefined;
    }
    return args[data[key][0].index];
}
/**
 * @param {?=} data
 * @param {?=} payload
 * @return {?}
 */
function genBody(data, payload) {
    if (Array.isArray(data) || Array.isArray(payload)) {
        // tslint:disable-next-line:prefer-object-spread
        return Object.assign([], data, payload);
    }
    // tslint:disable-next-line:prefer-object-spread
    return Object.assign({}, data, payload);
}
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
    function (url = '', options) {
        return (/**
         * @param {?} _target
         * @param {?=} targetKey
         * @param {?=} descriptor
         * @return {?}
         */
        (_target, targetKey, descriptor) => {
            (/** @type {?} */ (descriptor)).value = (/**
             * @param {...?} args
             * @return {?}
             */
            function (...args) {
                options = options || {};
                /** @type {?} */
                const injector = (/** @type {?} */ (((/** @type {?} */ (this))).injector));
                /** @type {?} */
                const http = (/** @type {?} */ (injector.get(_HttpClient, null)));
                if (http == null) {
                    throw new TypeError(`Not found '_HttpClient', You can import 'AlainThemeModule' && 'HttpClientModule' in your root module.`);
                }
                /** @type {?} */
                const baseData = setParam(this);
                /** @type {?} */
                const data = setParam(baseData, targetKey);
                /** @type {?} */
                let requestUrl = url || '';
                requestUrl = [baseData.baseUrl || '', requestUrl.startsWith('/') ? requestUrl.substr(1) : requestUrl].join('/');
                // fix last split
                if (requestUrl.length > 1 && requestUrl.endsWith('/')) {
                    requestUrl = requestUrl.substr(0, requestUrl.length - 1);
                }
                if (options.acl) {
                    /** @type {?} */
                    const aclSrv = injector.get(ACLService, null);
                    if (aclSrv && !aclSrv.can(options.acl)) {
                        return throwError({
                            url: requestUrl,
                            status: 401,
                            statusText: `From Http Decorator`,
                        });
                    }
                    delete options.acl;
                }
                requestUrl = requestUrl.replace(/::/g, '^^');
                (((/** @type {?} */ (data.path))) || [])
                    .filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                w => typeof args[w.index] !== 'undefined'))
                    .forEach((/**
                 * @param {?} i
                 * @return {?}
                 */
                (i) => {
                    requestUrl = requestUrl.replace(new RegExp(`:${i.key}`, 'g'), encodeURIComponent(args[i.index]));
                }));
                requestUrl = requestUrl.replace(/\^\^/g, `:`);
                /** @type {?} */
                const params = (data.query || []).reduce((/**
                 * @param {?} p
                 * @param {?} i
                 * @return {?}
                 */
                (p, i) => {
                    p[i.key] = args[i.index];
                    return p;
                }), {});
                /** @type {?} */
                const headers = (data.headers || []).reduce((/**
                 * @param {?} p
                 * @param {?} i
                 * @return {?}
                 */
                (p, i) => {
                    p[i.key] = args[i.index];
                    return p;
                }), {});
                if (method === 'FORM') {
                    headers['content-type'] = 'application/x-www-form-urlencoded';
                }
                /** @type {?} */
                const payload = getValidArgs(data, 'payload', args);
                /** @type {?} */
                const supportedBody = method === 'POST' || method === 'PUT';
                return http.request(method, requestUrl, Object.assign({ body: supportedBody ? genBody(getValidArgs(data, 'body', args), payload) : null, params: !supportedBody ? Object.assign(Object.assign({}, params), payload) : params, headers: Object.assign(Object.assign({}, baseData.baseHeaders), headers) }, options));
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
const OPTIONS = makeMethod('OPTIONS');
/**
 * `GET` 请求
 * - 有效范围：方法
 * @type {?}
 */
const GET = makeMethod('GET');
/**
 * `POST` 请求
 * - 有效范围：方法
 * @type {?}
 */
const POST = makeMethod('POST');
/**
 * `DELETE` 请求
 * - 有效范围：方法
 * @type {?}
 */
const DELETE = makeMethod('DELETE');
/**
 * `PUT` 请求
 * - 有效范围：方法
 * @type {?}
 */
const PUT = makeMethod('PUT');
/**
 * `HEAD` 请求
 * - 有效范围：方法
 * @type {?}
 */
const HEAD = makeMethod('HEAD');
/**
 * `PATCH` 请求
 * - 有效范围：方法
 * @type {?}
 */
const PATCH = makeMethod('PATCH');
/**
 * `JSONP` 请求
 * - 有效范围：方法
 * @type {?}
 */
const JSONP = makeMethod('JSONP');
/**
 * `FORM` 请求
 * - 有效范围：方法
 * @type {?}
 */
const FORM = makeMethod('FORM');

/**
 * @fileoverview added by tsickle
 * Generated from: src/pipes/date/date.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DatePipe {
    /**
     * @param {?} nzI18n
     */
    constructor(nzI18n) {
        this.nzI18n = nzI18n;
    }
    /**
     * @param {?} value
     * @param {?=} formatString
     * @return {?}
     */
    transform(value, formatString = 'yyyy-MM-dd HH:mm') {
        value = toDate(value);
        if (isNaN((/** @type {?} */ (value))))
            return '';
        /** @type {?} */
        const langOpt = { locale: this.nzI18n.getDateLocale() };
        return formatString === 'fn' ? formatDistanceToNow(value, langOpt) : format(value, formatString, langOpt);
    }
}
DatePipe.decorators = [
    { type: Pipe, args: [{ name: '_date' },] }
];
/** @nocollapse */
DatePipe.ctorParameters = () => [
    { type: NzI18nService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    DatePipe.prototype.nzI18n;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/pipes/currency/cn-currency.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @see https://ng-alain.com/theme/currency
 */
// tslint:disable-next-line:use-pipe-transform-interface
class CNCurrencyPipe extends CurrencyPipe {
    /**
     * @param {?} value
     * @param {?=} currencyCode
     * @param {?=} display
     * @param {?=} digits
     * @return {?}
     */
    transform(value, currencyCode = '￥', display = 'code', digits) {
        return super.transform(value, currencyCode, (/** @type {?} */ (display)), digits);
    }
}
CNCurrencyPipe.decorators = [
    { type: Pipe, args: [{ name: '_currency' },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/pipes/keys/keys.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @see https://ng-alain.com/theme/keys
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
        // tslint:disable-next-line: forin
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
 * Generated from: src/pipes/yn/yn.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ICON_YES = `<svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9.4.1-91e0726e-5.1.4-12.8-6.3-12.8z"></path></svg>`;
/** @type {?} */
const ICON_NO = `<svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>`;
/** @type {?} */
const CLS_YES = `class="yn__yes"`;
/** @type {?} */
const CLS_NO = `class="yn__no"`;
class YNPipe {
    /**
     * @param {?} dom
     */
    constructor(dom) {
        this.dom = dom;
    }
    /**
     * @param {?} value
     * @param {?=} yes
     * @param {?=} no
     * @param {?=} mode
     * @param {?=} isSafeHtml
     * @return {?}
     */
    transform(value, yes, no, mode, isSafeHtml = true) {
        /** @type {?} */
        let html = '';
        yes = yes || '是';
        no = no || '否';
        switch (mode) {
            case 'full':
                html = value ? `<i ${CLS_YES}>${ICON_YES}<span>${yes}</span></i>` : `<i ${CLS_NO}>${ICON_NO}<span>${no}</span></i>`;
                break;
            case 'text':
                html = value ? `<i ${CLS_YES}>${yes}</i>` : `<i ${CLS_NO}>${no}</i>`;
                break;
            default:
                html = value ? `<i ${CLS_YES} title="${yes}">${ICON_YES}</i>` : `<i ${CLS_NO} title="${no}">${ICON_NO}</i>`;
                break;
        }
        return isSafeHtml ? this.dom.bypassSecurityTrustHtml(html) : html;
    }
}
YNPipe.decorators = [
    { type: Pipe, args: [{ name: 'yn' },] }
];
/** @nocollapse */
YNPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    YNPipe.prototype.dom;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/pipes/safe/html.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return html ? this.dom.bypassSecurityTrustHtml(html) : '';
    }
}
HTMLPipe.decorators = [
    { type: Pipe, args: [{ name: 'html' },] }
];
/** @nocollapse */
HTMLPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    HTMLPipe.prototype.dom;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/pipes/safe/url.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class URLPipe {
    /**
     * @param {?} dom
     */
    constructor(dom) {
        this.dom = dom;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    transform(url) {
        return url ? this.dom.bypassSecurityTrustUrl(url) : '';
    }
}
URLPipe.decorators = [
    { type: Pipe, args: [{ name: 'url' },] }
];
/** @nocollapse */
URLPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    URLPipe.prototype.dom;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/i18n/i18n.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    I18nPipe.prototype.i18n;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/theme.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const HELPERS = [ModalHelper, DrawerHelper];
/** @type {?} */
const PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, I18nPipe, HTMLPipe, URLPipe];
/** @type {?} */
const ICONS = [BellOutline, DeleteOutline, PlusOutline, InboxOutline];
// #endregion
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
            providers: [...HELPERS],
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
                imports: [CommonModule, RouterModule, OverlayModule, NzI18nModule],
                declarations: [...PIPES],
                exports: [...PIPES, DelonLocaleModule],
            },] }
];
/** @nocollapse */
AlainThemeModule.ctorParameters = () => [
    { type: NzIconService }
];

/**
 * @fileoverview added by tsickle
 * Generated from: src/version.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const VERSION = new Version('9.4.1-91e0726e');

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: theme.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ALAIN_I18N_TOKEN, APP, AlainI18NServiceFake, AlainThemeModule, BaseApi, BaseHeaders, BaseUrl, Body, CNCurrencyPipe, DELETE, DELON_LOCALE, DELON_LOCALE_SERVICE_PROVIDER, DELON_LOCALE_SERVICE_PROVIDER_FACTORY, DatePipe, DelonLocaleModule, DelonLocaleService, DrawerHelper, FORM, GET, HEAD, HTMLPipe, Headers, JSONP, KeysPipe, LAYOUT, MenuService, ModalHelper, OPTIONS, PATCH, POST, PUT, Path, Payload, Query, REP_MAX, ResponsiveService, ScrollService, SettingsService, TitleService, URLPipe, USER, VERSION, WINDOW, YNPipe, _HttpClient, elGR as el_GR, enUS as en_US, hrHR as hr_HR, jaJP as ja_JP, koKR as ko_KR, plPL as pl_PL, preloaderFinished, trTR as tr_TR, zhCN as zh_CN, zhTW as zh_TW, ALAIN_I18N_TOKEN_FACTORY as ɵa, I18nPipe as ɵb };
//# sourceMappingURL=theme.js.map
