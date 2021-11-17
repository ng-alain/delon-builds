import * as i0 from '@angular/core';
import { InjectionToken, inject, Injectable, Optional, Inject, Injector, SkipSelf, NgModule, Pipe, Version } from '@angular/core';
import { BehaviorSubject, Subject, Observable, of, throwError } from 'rxjs';
import { filter, share, map, delay, tap, switchMap, finalize, catchError } from 'rxjs/operators';
import * as i2 from '@delon/acl';
import { ACLService } from '@delon/acl';
import * as i1 from '@delon/util/config';
import { AlainConfigService } from '@delon/util/config';
import * as i1$1 from '@angular/cdk/platform';
import { Platform } from '@angular/cdk/platform';
import * as i1$2 from '@angular/cdk/bidi';
import { Directionality } from '@angular/cdk/bidi';
import * as i6 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as i3 from 'ng-zorro-antd/core/config';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import * as i1$3 from '@angular/platform-browser';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { deepMerge } from '@delon/util/other';
import * as i1$4 from 'ng-zorro-antd/modal';
import { NzModalService } from 'ng-zorro-antd/modal';
import * as i1$5 from 'ng-zorro-antd/drawer';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import * as i1$6 from '@angular/common/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import { formatDistanceToNow, format } from 'date-fns';
import { toDate } from '@delon/util/date-time';
import { NzI18nService, NzI18nModule } from 'ng-zorro-antd/i18n';
import { OverlayModule } from '@angular/cdk/overlay';
import { BellOutline, DeleteOutline, PlusOutline, InboxOutline } from '@ant-design/icons-angular/icons';
import { NzIconService } from 'ng-zorro-antd/icon';

function preloaderFinished() {
    const body = document.querySelector('body');
    const preloader = document.querySelector('.preloader');
    body.style.overflow = 'hidden';
    function remove() {
        // preloader value null when running --hmr
        if (!preloader)
            return;
        preloader.addEventListener('transitionend', () => {
            preloader.className = 'preloader-hidden';
        });
        preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
    }
    window.appBootstrap = () => {
        setTimeout(() => {
            remove();
            body.style.overflow = '';
        }, 100);
    };
}

const ALAIN_I18N_TOKEN = new InjectionToken('alainI18nToken', {
    providedIn: 'root',
    factory: () => new AlainI18NServiceFake(inject(AlainConfigService))
});
class AlainI18nBaseService {
    constructor(cogSrv) {
        this._change$ = new BehaviorSubject(null);
        this._currentLang = '';
        this._defaultLang = '';
        this._data = {};
        this.cog = cogSrv.merge('themeI18n', {
            interpolation: ['{{', '}}']
        });
    }
    get change() {
        return this._change$.asObservable().pipe(filter(w => w != null));
    }
    get defaultLang() {
        return this._defaultLang;
    }
    get currentLang() {
        return this._currentLang;
    }
    get data() {
        return this._data;
    }
    /**
     * Flattened data source
     *
     * @example
     * {
     *   "name": "Name",
     *   "sys": {
     *     "": "System",
     *     "title": "Title"
     *   }
     * }
     * =>
     * {
     *   "name": "Name",
     *   "sys": "System",
     *   "sys.title": "Title"
     * }
     */
    flatData(data, parentKey) {
        const res = {};
        for (const key of Object.keys(data)) {
            const value = data[key];
            if (typeof value === 'object') {
                const child = this.flatData(value, parentKey.concat(key));
                Object.keys(child).forEach(childKey => (res[childKey] = child[childKey]));
            }
            else {
                res[(key ? parentKey.concat(key) : parentKey).join('.')] = `${value}`;
            }
        }
        return res;
    }
    fanyi(path, params) {
        let content = this._data[path] || '';
        if (!content)
            return path;
        if (params) {
            const interpolation = this.cog.interpolation;
            Object.keys(params).forEach(key => (content = content.replace(new RegExp(`${interpolation[0]}\s?${key}\s?${interpolation[1]}`, 'g'), `${params[key]}`)));
        }
        return content;
    }
}
AlainI18nBaseService.decorators = [
    { type: Injectable }
];
AlainI18nBaseService.ctorParameters = () => [
    { type: AlainConfigService }
];
class AlainI18NServiceFake extends AlainI18nBaseService {
    use(lang, data) {
        this._data = this.flatData(data, []);
        this._currentLang = lang;
        this._change$.next(lang);
    }
    getLangs() {
        return [];
    }
}
AlainI18NServiceFake.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlainI18NServiceFake_Factory() { return new AlainI18NServiceFake(i0.ɵɵinject(i1.AlainConfigService)); }, token: AlainI18NServiceFake, providedIn: "root" });
AlainI18NServiceFake.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];

/**
 * 菜单服务，[在线文档](https://ng-alain.com/theme/menu)
 */
class MenuService {
    constructor(i18nSrv, aclService) {
        this.i18nSrv = i18nSrv;
        this.aclService = aclService;
        this._change$ = new BehaviorSubject([]);
        this.data = [];
        this.i18n$ = this.i18nSrv.change.subscribe(() => this.resume());
    }
    get change() {
        return this._change$.pipe(share());
    }
    visit(data, callback) {
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
        inFn(data, null, 0);
    }
    add(items) {
        this.data = items;
        this.resume();
    }
    fixItem(item) {
        item._aclResult = true;
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
            let type = 'class';
            let value = item.icon;
            // compatible `anticon anticon-user`
            if (~item.icon.indexOf(`anticon-`)) {
                type = 'icon';
                value = value.split('-').slice(1).join('-');
            }
            else if (/^https?:\/\//.test(item.icon)) {
                type = 'img';
            }
            item.icon = { type, value };
        }
        if (item.icon != null) {
            item.icon = Object.assign({ theme: 'outline', spin: false }, item.icon);
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
    }
    /**
     * 重置菜单，可能I18N、用户权限变动时需要调用刷新
     */
    resume(callback) {
        let i = 1;
        const shortcuts = [];
        this.visit(this.data, (item, parent, depth) => {
            item._id = i++;
            item._parent = parent;
            item._depth = depth;
            this.fixItem(item);
            // shortcut
            if (parent && item.shortcut === true && parent.shortcutRoot !== true) {
                shortcuts.push(item);
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
     */
    loadShortcut(shortcuts) {
        if (shortcuts.length === 0 || this.data.length === 0) {
            return;
        }
        const ls = this.data[0].children;
        let pos = ls.findIndex(w => w.shortcutRoot === true);
        if (pos === -1) {
            pos = ls.findIndex(w => w.link.includes('dashboard'));
            pos = (pos !== -1 ? pos : -1) + 1;
            const shortcutMenu = {
                text: '快捷菜单',
                i18n: 'shortcut',
                icon: 'icon-rocket',
                children: []
            };
            this.data[0].children.splice(pos, 0, shortcutMenu);
        }
        let _data = this.data[0].children[pos];
        if (_data.i18n && this.i18nSrv)
            _data.text = this.i18nSrv.fanyi(_data.i18n);
        _data = Object.assign(_data, {
            shortcutRoot: true,
            _id: -1,
            _parent: null,
            _depth: 1
        });
        _data.children = shortcuts.map(i => {
            i._depth = 2;
            i._parent = _data;
            return i;
        });
    }
    get menus() {
        return this.data;
    }
    /**
     * 清空菜单
     */
    clear() {
        this.data = [];
        this._change$.next(this.data);
    }
    getHit(data, url, recursive = false, cb = null) {
        let item = null;
        while (!item && url) {
            this.visit(data, i => {
                if (cb) {
                    cb(i);
                }
                if (i.link != null && i.link === url) {
                    item = i;
                }
            });
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
     */
    openedByUrl(url, recursive = false) {
        if (!url)
            return;
        let findItem = this.getHit(this.data, url, recursive, (i) => {
            i._selected = false;
            i._open = false;
        });
        if (findItem == null)
            return;
        do {
            findItem._selected = true;
            findItem._open = true;
            findItem = findItem._parent;
        } while (findItem);
    }
    /**
     * 根据url获取菜单列表
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     */
    getPathByUrl(url, recursive = false) {
        const ret = [];
        let item = this.getHit(this.data, url, recursive);
        if (!item)
            return ret;
        do {
            ret.splice(0, 0, item);
            item = item._parent;
        } while (item);
        return ret;
    }
    /**
     * Get menu based on `key`
     */
    getItem(key) {
        let res = null;
        this.visit(this.data, item => {
            if (res == null && item.key === key) {
                res = item;
            }
        });
        return res;
    }
    /**
     * Set menu based on `key`
     */
    setItem(key, value) {
        const item = this.getItem(key);
        if (item == null)
            return;
        Object.keys(value).forEach(k => {
            item[k] = value[k];
        });
        this.fixItem(item);
        this._change$.next(this.data);
    }
    ngOnDestroy() {
        this._change$.unsubscribe();
        this.i18n$.unsubscribe();
    }
}
MenuService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MenuService_Factory() { return new MenuService(i0.ɵɵinject(ALAIN_I18N_TOKEN, 8), i0.ɵɵinject(i2.ACLService, 8)); }, token: MenuService, providedIn: "root" });
MenuService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
MenuService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: ACLService, decorators: [{ type: Optional }] }
];

const ALAIN_SETTING_KEYS = new InjectionToken('ALAIN_SETTING_KEYS');
class SettingsService {
    constructor(platform, KEYS) {
        this.platform = platform;
        this.KEYS = KEYS;
        this.notify$ = new Subject();
        this._app = null;
        this._user = null;
        this._layout = null;
    }
    getData(key) {
        if (!this.platform.isBrowser) {
            return null;
        }
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    }
    setData(key, value) {
        if (!this.platform.isBrowser) {
            return;
        }
        localStorage.setItem(key, JSON.stringify(value));
    }
    get layout() {
        if (!this._layout) {
            this._layout = Object.assign({ fixed: true, collapsed: false, boxed: false, lang: null }, this.getData(this.KEYS.layout));
            this.setData(this.KEYS.layout, this._layout);
        }
        return this._layout;
    }
    get app() {
        if (!this._app) {
            this._app = Object.assign({ year: new Date().getFullYear() }, this.getData(this.KEYS.app));
            this.setData(this.KEYS.app, this._app);
        }
        return this._app;
    }
    get user() {
        if (!this._user) {
            this._user = Object.assign({}, this.getData(this.KEYS.user));
            this.setData(this.KEYS.user, this._user);
        }
        return this._user;
    }
    get notify() {
        return this.notify$.asObservable();
    }
    setLayout(name, value) {
        if (typeof name === 'string') {
            this.layout[name] = value;
        }
        else {
            this._layout = name;
        }
        this.setData(this.KEYS.layout, this._layout);
        this.notify$.next({ type: 'layout', name, value });
        return true;
    }
    setApp(value) {
        this._app = value;
        this.setData(this.KEYS.app, value);
        this.notify$.next({ type: 'app', value });
    }
    setUser(value) {
        this._user = value;
        this.setData(this.KEYS.user, value);
        this.notify$.next({ type: 'user', value });
    }
}
SettingsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SettingsService_Factory() { return new SettingsService(i0.ɵɵinject(i1$1.Platform), i0.ɵɵinject(ALAIN_SETTING_KEYS)); }, token: SettingsService, providedIn: "root" });
SettingsService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
SettingsService.ctorParameters = () => [
    { type: Platform },
    { type: undefined, decorators: [{ type: Inject, args: [ALAIN_SETTING_KEYS,] }] }
];

const REP_MAX = 6;
class ResponsiveService {
    constructor(cogSrv) {
        this.cog = cogSrv.merge('themeResponsive', {
            rules: {
                1: { xs: 24 },
                2: { xs: 24, sm: 12 },
                3: { xs: 24, sm: 12, md: 8 },
                4: { xs: 24, sm: 12, md: 8, lg: 6 },
                5: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4 },
                6: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 2 }
            }
        });
        if (Object.keys(this.cog.rules)
            .map(i => +i)
            .some((i) => i < 1 || i > REP_MAX)) {
            throw new Error(`[theme] the responseive rule index value range must be 1-${REP_MAX}`);
        }
    }
    genCls(count) {
        const rule = this.cog.rules[count > REP_MAX ? REP_MAX : Math.max(count, 1)];
        const antColClass = 'ant-col';
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
ResponsiveService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ResponsiveService_Factory() { return new ResponsiveService(i0.ɵɵinject(i1.AlainConfigService)); }, token: ResponsiveService, providedIn: "root" });
ResponsiveService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ResponsiveService.ctorParameters = () => [
    { type: AlainConfigService }
];

const HTML_DIR = 'dir';
const RTL_DIRECTION = 'direction';
const RTL_NZ_COMPONENTS = ['modal', 'drawer', 'message', 'notification', 'image'];
const RTL_DELON_COMPONENTS = ['loading', 'onboarding'];
const LTR = 'ltr';
const RTL = 'rtl';
class RTLService {
    constructor(d, srv, nz, delon, platform, doc) {
        this.d = d;
        this.srv = srv;
        this.nz = nz;
        this.delon = delon;
        this.platform = platform;
        this.doc = doc;
        this._dir = LTR;
        this.dir = srv.layout.direction === RTL ? RTL : LTR;
    }
    /**
     * Get or Set the current text direction
     *
     * 获取或设置当前文字方向
     */
    get dir() {
        return this._dir;
    }
    set dir(value) {
        this._dir = value;
        this.updateLibConfig();
        this.updateHtml();
        // Should be wait inited
        Promise.resolve().then(() => {
            this.d.value = value;
            this.d.change.emit(value);
            this.srv.setLayout(RTL_DIRECTION, value);
        });
    }
    /**
     * Get the next text direction
     *
     * 获取下一次文字方向
     */
    get nextDir() {
        return this.dir === LTR ? RTL : LTR;
    }
    /**
     * Subscription change notification
     *
     * 订阅变更通知
     */
    get change() {
        return this.srv.notify.pipe(filter(w => w.name === RTL_DIRECTION), map(v => v.value));
    }
    /**
     * Toggle text direction
     *
     * 切换文字方向
     */
    toggle() {
        this.dir = this.nextDir;
    }
    updateHtml() {
        if (!this.platform.isBrowser) {
            return;
        }
        const htmlEl = this.doc.querySelector('html');
        if (htmlEl) {
            const dir = this.dir;
            htmlEl.style.direction = dir;
            htmlEl.classList.remove(RTL, LTR);
            htmlEl.classList.add(dir);
            htmlEl.setAttribute(HTML_DIR, dir);
        }
    }
    updateLibConfig() {
        RTL_NZ_COMPONENTS.forEach(name => {
            this.nz.set(name, { nzDirection: this.dir });
        });
        RTL_DELON_COMPONENTS.forEach(name => {
            this.delon.set(name, { direction: this.dir });
        });
    }
}
RTLService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RTLService_Factory() { return new RTLService(i0.ɵɵinject(i1$2.Directionality), i0.ɵɵinject(SettingsService), i0.ɵɵinject(i3.NzConfigService), i0.ɵɵinject(i1.AlainConfigService), i0.ɵɵinject(i1$1.Platform), i0.ɵɵinject(i6.DOCUMENT)); }, token: RTLService, providedIn: "root" });
RTLService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
RTLService.ctorParameters = () => [
    { type: Directionality },
    { type: SettingsService },
    { type: NzConfigService },
    { type: AlainConfigService },
    { type: Platform },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];

class TitleService {
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
        /** 设置默认标题名 */
        this.default = `Not Page Name`;
        this.i18n$ = this.i18nSrv.change.pipe(filter(() => !!this.i18n$)).subscribe(() => this.setTitle());
    }
    /** 设置分隔符 */
    set separator(value) {
        this._separator = value;
    }
    /** 设置前缀 */
    set prefix(value) {
        this._prefix = value;
    }
    /** 设置后缀 */
    set suffix(value) {
        this._suffix = value;
    }
    /** 设置是否反转 */
    set reverse(value) {
        this._reverse = value;
    }
    getByElement() {
        const el = (this.doc.querySelector('.alain-default__content-title h1') ||
            this.doc.querySelector('.page-header__title'));
        if (el) {
            let text = '';
            el.childNodes.forEach(val => {
                if (!text && val.nodeType === 3) {
                    text = val.textContent.trim();
                }
            });
            return text || el.firstChild.textContent.trim();
        }
        return '';
    }
    getByRoute() {
        let next = this.injector.get(ActivatedRoute);
        while (next.firstChild)
            next = next.firstChild;
        const data = (next.snapshot && next.snapshot.data) || {};
        if (data.titleI18n && this.i18nSrv)
            data.title = this.i18nSrv.fanyi(data.titleI18n);
        return data.title;
    }
    getByMenu() {
        const menus = this.menuSrv.getPathByUrl(this.injector.get(Router).url);
        if (!menus || menus.length <= 0)
            return '';
        const item = menus[menus.length - 1];
        let title;
        if (item.i18n && this.i18nSrv)
            title = this.i18nSrv.fanyi(item.i18n);
        return title || item.text;
    }
    _setTitle(title) {
        if (!title) {
            title = this.getByRoute() || this.getByMenu() || this.getByElement() || this.default;
        }
        if (title && !Array.isArray(title)) {
            title = [title];
        }
        let newTitles = [];
        if (this._prefix) {
            newTitles.push(this._prefix);
        }
        newTitles.push(...title);
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
     */
    setTitle(title) {
        setTimeout(() => this._setTitle(title), this.DELAY_TIME);
    }
    /**
     * Set i18n key of the document title
     */
    setTitleByI18n(key, params) {
        this.setTitle(this.i18nSrv.fanyi(key, params));
    }
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
TitleService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TitleService_Factory() { return new TitleService(i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1$3.Title), i0.ɵɵinject(MenuService), i0.ɵɵinject(ALAIN_I18N_TOKEN, 8), i0.ɵɵinject(i6.DOCUMENT)); }, token: TitleService, providedIn: "root" });
TitleService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
TitleService.ctorParameters = () => [
    { type: Injector },
    { type: Title },
    { type: MenuService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];

const DELON_LOCALE = new InjectionToken('delon-locale');

var zhCN = {
    abbr: 'zh-CN',
    exception: {
        403: '抱歉，你无权访问该页面',
        404: '抱歉，你访问的页面不存在',
        500: '抱歉，服务器出错了',
        backToHome: '返回首页'
    },
    noticeIcon: {
        emptyText: '暂无数据',
        clearText: '清空'
    },
    reuseTab: {
        close: '关闭标签',
        closeOther: '关闭其它标签',
        closeRight: '关闭右侧标签',
        refresh: '刷新'
    },
    tagSelect: {
        expand: '展开',
        collapse: '收起'
    },
    miniProgress: {
        target: '目标值：'
    },
    st: {
        total: '共 {{total}} 条',
        filterConfirm: '确定',
        filterReset: '重置'
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
            if: `应当匹配模式 "{failingKeyword}"`
        }
    },
    onboarding: {
        skip: `跳过`,
        prev: `上一项`,
        next: `下一项`,
        done: `完成`
    }
};

class DelonLocaleService {
    constructor(locale) {
        this._locale = zhCN;
        this.change$ = new BehaviorSubject(this._locale);
        this.setLocale(locale || zhCN);
    }
    get change() {
        return this.change$.asObservable();
    }
    setLocale(locale) {
        if (this._locale && this._locale.abbr === locale.abbr) {
            return;
        }
        this._locale = locale;
        this.change$.next(locale);
    }
    get locale() {
        return this._locale;
    }
    getData(path) {
        return (this._locale[path] || {});
    }
}
DelonLocaleService.decorators = [
    { type: Injectable }
];
DelonLocaleService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DELON_LOCALE,] }] }
];
function DELON_LOCALE_SERVICE_PROVIDER_FACTORY(exist, locale) {
    return exist || new DelonLocaleService(locale);
}
const DELON_LOCALE_SERVICE_PROVIDER = {
    provide: DelonLocaleService,
    useFactory: DELON_LOCALE_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), DelonLocaleService], DELON_LOCALE]
};

const ɵ0$1 = zhCN;
class DelonLocaleModule {
}
DelonLocaleModule.decorators = [
    { type: NgModule, args: [{
                providers: [{ provide: DELON_LOCALE, useValue: ɵ0$1 }, DELON_LOCALE_SERVICE_PROVIDER]
            },] }
];

var enUS = {
    abbr: 'en-US',
    exception: {
        403: `Sorry, you don't have access to this page`,
        404: `Sorry, the page you visited does not exist`,
        500: `Sorry, the server is reporting an error`,
        backToHome: 'Back To Home'
    },
    noticeIcon: {
        emptyText: 'No data',
        clearText: 'Clear'
    },
    reuseTab: {
        close: 'Close tab',
        closeOther: 'Close other tabs',
        closeRight: 'Close tabs to right',
        refresh: 'Refresh'
    },
    tagSelect: {
        expand: 'Expand',
        collapse: 'Collapse'
    },
    miniProgress: {
        target: 'Target: '
    },
    st: {
        total: '{{range[0]}} - {{range[1]}} of {{total}}',
        filterConfirm: 'OK',
        filterReset: 'Reset'
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
            if: `Should match "{failingKeyword}" schema`
        }
    },
    onboarding: {
        skip: `Skip`,
        prev: `Prev`,
        next: `Next`,
        done: `Done`
    }
};

var zhTW = {
    abbr: 'zh-TW',
    exception: {
        403: '抱歉，你無權訪問該頁麵',
        404: '抱歉，你訪問的頁麵不存在',
        500: '抱歉，服務器出錯了',
        backToHome: '返回首頁'
    },
    noticeIcon: {
        emptyText: '暫無數據',
        clearText: '清空'
    },
    reuseTab: {
        close: '關閉標簽',
        closeOther: '關閉其它標簽',
        closeRight: '關閉右側標簽',
        refresh: '刷新'
    },
    tagSelect: {
        expand: '展開',
        collapse: '收起'
    },
    miniProgress: {
        target: '目標值：'
    },
    st: {
        total: '共 {{total}} 條',
        filterConfirm: '確定',
        filterReset: '重置'
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
            'false schema': `佈爾模式出錯`,
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
            oneOf: `隻能匹配一個 "oneOf" 中的 schema`,
            pattern: `數據格式不正確`,
            uniqueItems: `不應當含有重複項 (第 {j} 項與第 {i} 項是重複的)`,
            custom: `格式不正確`,
            propertyNames: `屬性名 "{propertyName}" 無效`,
            patternRequired: `應當有屬性匹配模式 {missingPattern}`,
            switch: `由於 {caseIndex} 失敗，未通過 "switch" 校驗`,
            const: `應當等於常量`,
            contains: `應當包含一個有效項`,
            formatExclusiveMaximum: `formatExclusiveMaximum 應當是佈爾值`,
            formatExclusiveMinimum: `formatExclusiveMinimum 應當是佈爾值`,
            if: `應當匹配模式 "{failingKeyword}"`
        }
    },
    onboarding: {
        skip: `跳過`,
        prev: `上一項`,
        next: `下一項`,
        done: `完成`
    }
};

var trTR = {
    abbr: 'tr-TR',
    exception: {
        403: `Üzgünüz, bu sayfaya erişiminiz yok`,
        404: `Maalesef bu sayfa mevcut değil`,
        500: `Üzgünüz, sunucu hatası`,
        backToHome: `Ana Sayfa'ya geri dön`
    },
    noticeIcon: {
        emptyText: 'Veri yok',
        clearText: 'Temiz'
    },
    reuseTab: {
        close: 'Sekmeyi Kapat',
        closeOther: 'Diğer sekmeleri kapat',
        closeRight: 'Sağdaki sekmeleri kapat',
        refresh: 'täzele'
    },
    tagSelect: {
        expand: 'Genişlet',
        collapse: 'Daralt'
    },
    miniProgress: {
        target: 'Hedef: '
    },
    st: {
        total: '{{range[0]}} ile {{range[1]}} arasında {{total}}',
        filterConfirm: 'Tamam',
        filterReset: 'Sıfırla'
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
            if: `Should match "{failingKeyword}" schema`
        }
    },
    onboarding: {
        skip: `Atla`,
        prev: `Önceki`,
        next: `Sonraki`,
        done: `Bitti`
    }
};

var plPL = {
    abbr: 'pl-PL',
    exception: {
        403: `Niestety, nie masz uprawnień do tej strony`,
        404: `Niestety, ta strona nie istnieje`,
        500: `Niestety, błąd serwera`,
        backToHome: 'Powróć do strony głównej'
    },
    noticeIcon: {
        emptyText: 'Brak danych',
        clearText: 'Wyczyść'
    },
    reuseTab: {
        close: 'Zamknij kartę',
        closeOther: 'Zamknij inne karty',
        closeRight: 'Zamknij karty po prawej',
        refresh: 'Refresh'
    },
    tagSelect: {
        expand: 'Rozszerz',
        collapse: 'Zmniejsz'
    },
    miniProgress: {
        target: 'Cel: '
    },
    st: {
        total: '{{range[0]}} - {{range[1]}} z {{total}}',
        filterConfirm: 'OK',
        filterReset: 'Wyczyść'
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
            if: `Should match "{failingKeyword}" schema`
        }
    },
    onboarding: {
        skip: `Pominąć`,
        prev: `Poprzedni`,
        next: `Kolejny`,
        done: `Gotowe`
    }
};

var elGR = {
    abbr: 'el-GR',
    exception: {
        403: `Λυπούμαστε, δεν έχετε πρόσβαση σε αυτήν τη σελίδα`,
        404: `Λυπούμαστε, η σελίδα αυτή δεν βρέθηκε`,
        500: `Λυπούμαστε, σφάλμα διακομιστή`,
        backToHome: 'Επιστροφή στην αρχική σελίδα'
    },
    noticeIcon: {
        emptyText: 'Δεν υπάρχουν δεδομένα',
        clearText: 'Καθαρισμός'
    },
    reuseTab: {
        close: 'Κλείσιμο καρτέλας',
        closeOther: 'Κλείσιμο των άλλων καρτέλων',
        closeRight: 'Κλείσιμο των καρτελών δεξιά',
        refresh: 'Ανανέωση'
    },
    tagSelect: {
        expand: 'Επέκταση',
        collapse: 'Σύμπτυξη'
    },
    miniProgress: {
        target: 'Στόχος: '
    },
    st: {
        total: '{{range[0]}} - {{range[1]}} από {{total}}',
        filterConfirm: 'ΟΚ',
        filterReset: 'Επαναφορά'
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
            if: `Πρέπει να ταιριάζει στην δομή "{failingKeyword}"`
        }
    },
    onboarding: {
        skip: `Παράλειψη`,
        prev: `Προηγούμενο`,
        next: `Επόμενο`,
        done: `Ολοκληρώθηκε`
    }
};

var koKR = {
    abbr: 'ko-KR',
    exception: {
        403: `죄송합니다.이 페이지에 액세스 할 수 없습니다.`,
        404: `죄송합니다. 해당 페이지가 없습니다.`,
        500: `죄송합니다, 서버 오류가 있습니다.`,
        backToHome: '홈으로 돌아갑니다.'
    },
    noticeIcon: {
        emptyText: '데이터 없음',
        clearText: '지우기'
    },
    reuseTab: {
        close: '탭 닫기',
        closeOther: '다른 탭 닫기',
        closeRight: '오른쪽 탭 닫기',
        refresh: '새롭게 하다'
    },
    tagSelect: {
        expand: '펼치기',
        collapse: '접기'
    },
    miniProgress: {
        target: '대상: '
    },
    st: {
        total: '전체 {{total}}건',
        filterConfirm: '확인',
        filterReset: '초기화'
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
            if: `Should match "{failingKeyword}" schema`
        }
    },
    onboarding: {
        skip: `건너 뛰기`,
        prev: `이전`,
        next: `다음`,
        done: `끝난`
    }
};

var hrHR = {
    abbr: 'hr-HR',
    exception: {
        403: `Nažalost, nemate pristup ovoj lokaciji`,
        404: `Nažalost, lokacija ne postoji`,
        500: `Nažalost, server je javio pogrešku`,
        backToHome: 'Nazad na početnu stranicu'
    },
    noticeIcon: {
        emptyText: 'Nema podataka',
        clearText: 'Obriši'
    },
    reuseTab: {
        close: 'Zatvori karticu',
        closeOther: 'Zatvori druge kartice',
        closeRight: 'Zatvori kartice desno',
        refresh: 'Refresh'
    },
    tagSelect: {
        expand: 'Proširi',
        collapse: 'Skupi'
    },
    miniProgress: {
        target: 'Cilj: '
    },
    st: {
        total: '{{range[0]}} - {{range[1]}} od {{total}}',
        filterConfirm: 'U redu',
        filterReset: 'Poništi'
    },
    sf: {
        submit: 'Pošalji',
        reset: 'Poništi',
        search: 'Pretraži',
        edit: 'Spremi',
        addText: 'Dodaj',
        removeText: 'Ukloni',
        checkAllText: 'Označi sve'
    },
    onboarding: {
        skip: `Preskočiti`,
        prev: `Prethodna`,
        next: `Sljedeći`,
        done: `Sastavljeno`
    }
};

var jaJP = {
    abbr: 'ja-JP',
    exception: {
        403: 'ページへのアクセス権限がありません',
        404: 'ページが存在しません',
        500: 'サーバーエラーが発生しました',
        backToHome: 'ホームに戻る'
    },
    noticeIcon: {
        emptyText: 'データが有りません',
        clearText: 'クリア'
    },
    reuseTab: {
        close: 'タブを閉じる',
        closeOther: '他のタブを閉じる',
        closeRight: '右のタブを閉じる',
        refresh: 'リフレッシュ'
    },
    tagSelect: {
        expand: '展開する',
        collapse: '折りたたむ'
    },
    miniProgress: {
        target: '設定値: '
    },
    st: {
        total: '{{range[0]}} - {{range[1]}} / {{total}}',
        filterConfirm: '確定',
        filterReset: 'リセット'
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
            maxItems: `最大選択数は {limit} より小さい必要があります`,
            minItems: `最小選択数は {limit} より大きい必要があります`,
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
            if: `パターンと一致する必要があります: "{failingKeyword}" `
        }
    },
    onboarding: {
        skip: `スキップ`,
        prev: `前へ`,
        next: `次`,
        done: `できた`
    }
};

var slSI = {
    abbr: 'sl-SI',
    exception: {
        403: `Žal nimate dostopa do te strani`,
        404: `Žal stran, ki ste jo obiskali, ne obstaja`,
        500: `Žal strežnik poroča o napaki`,
        backToHome: 'Nazaj domov'
    },
    noticeIcon: {
        emptyText: 'Ni podatkov',
        clearText: 'Počisti'
    },
    reuseTab: {
        close: 'Zapri zavihek',
        closeOther: 'Zaprite druge zavihke',
        closeRight: 'Zaprite zavihke na desni'
    },
    tagSelect: {
        expand: 'Razširi',
        collapse: 'Strni'
    },
    miniProgress: {
        target: 'Cilj: '
    },
    st: {
        total: '{{range[0]}} - {{range[1]}} of {{total}}',
        filterConfirm: 'OK',
        filterReset: 'Reset'
    },
    sf: {
        submit: 'Pošlji',
        reset: 'Reset',
        search: 'Išči',
        edit: 'Shrani',
        addText: 'Dodaj',
        removeText: 'Odstrani',
        checkAllText: 'Preveri vse',
        error: {
            'false schema': `Boolova shema je napačna`,
            $ref: `Referenc ni mogoče razrešiti {ref}`,
            additionalItems: `Ne sme imeti več kot {limit} artiklov`,
            additionalProperties: `Ne bi smel imeti dodatnih lastnosti`,
            anyOf: `Se mora ujemati s shemo v "anyOf"`,
            dependencies: `mora imeti lastnosti {deps} ko je artikel {property} prisoten`,
            enum: `Mora biti enaka eni od vnaprej določenih vrednosti`,
            format: `Naj ustreza formatu "{format}"`,
            type: `Naj bo {type}`,
            required: `Zahtevano`,
            maxLength: `Ne sme biti daljši od {limit} znakov`,
            minLength: `Ne sme biti krajši od {limit} znakov`,
            minimum: `Naj bo {comparison} {limit}`,
            formatMinimum: `Naj bo {comparison} {limit}`,
            maximum: `Naj bo {comparison} {limit}`,
            formatMaximum: `Naj bo {comparison} {limit}`,
            maxItems: `Ne sme imeti več kot {limit} artiklov`,
            minItems: `Ne sme imeti manj kot {limit} artiklov`,
            maxProperties: `Ne sme imeti več kot {limit} lastnosti`,
            minProperties: `Ne sme imeti manj kot {limit} lastnosti`,
            multipleOf: `Mora biti večkratnik od {multipleOf}`,
            not: `Ne sme biti veljaven po shemi v "not"`,
            oneOf: `Naj ustreza natančno eni shemi v "oneOf"`,
            pattern: `Naj se ujema z vzorcem "{pattern}"`,
            uniqueItems: `Ne bi smel imeti dvojnikov (items ## {j} in {i} so identični)`,
            custom: `Naj ustreza formatu`,
            propertyNames: `Ime artikla "{propertyName}" je neveljavno`,
            patternRequired: `Mora imeti vzorec ujemanja lastnosti "{missingPattern}"`,
            switch: `Mora prestati "switch" validacijo ključne besede, primer {caseIndex} ne uspe`,
            const: `Naj bo enako konstanti`,
            contains: `Naj vsebuje veljaven artikel`,
            formatExclusiveMaximum: `formatExclusiveMaximum naj bo boolean`,
            formatExclusiveMinimum: `formatExclusiveMinimum naj bo boolean`,
            if: `Naj se ujema s shemo "{failingKeyword}"`
        }
    },
    onboarding: {
        skip: `Preskoči`,
        prev: `Prejšnje`,
        next: `Naslednji`,
        done: `Končano`
    }
};

var frFR = {
    abbr: 'fr-FR',
    exception: {
        403: `Désolé, vous n'avez pas accès à cette page`,
        404: `Désolé, la page que vous avez visitée n'existe pas`,
        500: `Désolé, le serveur signale une erreur`,
        backToHome: "Retour à l'accueil"
    },
    noticeIcon: {
        emptyText: 'Pas de données',
        clearText: 'Effacer'
    },
    reuseTab: {
        close: "Fermer l'onglet",
        closeOther: 'Fermer les autres onglets',
        closeRight: 'Fermer les onglets à droite',
        refresh: 'Rafraîchir'
    },
    tagSelect: {
        expand: 'Etendre',
        collapse: 'Effondrer'
    },
    miniProgress: {
        target: 'Cible: '
    },
    st: {
        total: '{{range[0]}} - {{range[1]}} de {{total}}',
        filterConfirm: 'OK',
        filterReset: 'Réinitialiser'
    },
    sf: {
        submit: 'Soumettre',
        reset: 'Réinitialiser',
        search: 'Rechercher',
        edit: 'Sauvegarder',
        addText: 'Ajouter',
        removeText: 'Supprimer',
        checkAllText: 'Cochez toutes',
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
            if: `Should match "{failingKeyword}" schema`
        }
    },
    onboarding: {
        skip: `Passer`,
        prev: `Précédent`,
        next: `Suivant`,
        done: `Terminé`
    }
};

var esES = {
    abbr: 'es-ES',
    exception: {
        403: `Lo sentimos, no tiene acceso a esta página`,
        404: `Lo sentimos, la página que ha visitado no existe`,
        500: `Lo siento, error interno del servidor `,
        backToHome: 'Volver a la página de inicio'
    },
    noticeIcon: {
        emptyText: 'No hay datos',
        clearText: 'Limpiar'
    },
    reuseTab: {
        close: 'Cerrar pestaña',
        closeOther: 'Cerrar otras pestañas',
        closeRight: 'Cerrar pestañas a la derecha',
        refresh: 'Actualizar'
    },
    tagSelect: {
        expand: 'Expandir',
        collapse: 'Ocultar'
    },
    miniProgress: {
        target: 'Target: '
    },
    st: {
        total: '{{rango[0]}} - {{rango[1]}} de {{total}}',
        filterConfirm: 'Aceptar',
        filterReset: 'Reiniciar'
    },
    sf: {
        submit: 'Submit',
        reset: 'Reiniciar',
        search: 'Buscar',
        edit: 'Guardar',
        addText: 'Añadir',
        removeText: 'Eliminar',
        checkAllText: 'Comprobar todo',
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
            if: `Should match "{failingKeyword}" schema`
        }
    },
    onboarding: {
        skip: `Omitir`,
        prev: `Previo`,
        next: `Siguiente`,
        done: `Terminado`
    }
};

var itIT = {
    abbr: 'it-IT',
    exception: {
        403: `Spiacenti, non hai accesso a questa pagina`,
        404: `Spiacenti, la pagina che hai visitato non esiste`,
        500: `Spiacenti, il server sta riscontrando un errore`,
        backToHome: 'Torna alla Home'
    },
    noticeIcon: {
        emptyText: 'Nessun dato',
        clearText: 'Cancella memoria locale'
    },
    reuseTab: {
        close: 'Chiudi la scheda',
        closeOther: 'Chiudi le altre schede',
        closeRight: 'Chiudi le schede a destra',
        refresh: 'Aggiorna'
    },
    tagSelect: {
        expand: 'Espandi',
        collapse: 'Comprimi'
    },
    miniProgress: {
        target: 'Obiettivo: '
    },
    st: {
        total: '{{range[0]}} - {{range[1]}} di {{total}}',
        filterConfirm: 'OK',
        filterReset: 'Reimposta'
    },
    sf: {
        submit: 'Invia',
        reset: 'Reimposta',
        search: 'Cerca',
        edit: 'Salva',
        addText: 'Aggiungi',
        removeText: 'Rimuovi',
        checkAllText: 'Seleziona tutto',
        error: {
            'false schema': `Lo schema booleano è falso`,
            $ref: `Impossibile risolvere il riferimento {ref}`,
            additionalItems: `Non deve avere più di {limit} elementi`,
            additionalProperties: `Non deve avere proprietà aggiuntive`,
            anyOf: `Deve corrispondere a uno schema in "anyOf"`,
            dependencies: `Deve avere una proprietà {deps} quando è presente la proprietà {property}`,
            enum: `Deve essere uguale a uno dei valori predefiniti`,
            format: `Deve corrispondere al formato "{format}"`,
            type: `Deve essere {type}`,
            required: `Obbligatorio`,
            maxLength: `Non deve essere superiore a {limit} caratteri`,
            minLength: `Non deve essere superiore a {limit} caratteri`,
            minimum: `Deve essere {comparison} {limit}`,
            formatMinimum: `Deve essere {comparison} {limit}`,
            maximum: `Deve essere {comparison} {limit}`,
            formatMaximum: `Deve essere {comparison} {limit}`,
            maxItems: `Non deve avere più di {limit} elementi`,
            minItems: `Non deve avere meno di {limit} elementi`,
            maxProperties: `Non deve avere più di {limit} proprietà`,
            minProperties: `Non deve avere meno di {limit} proprietà`,
            multipleOf: `Deve essere un multiplo di {multipleOf}`,
            not: `Non deve essere valido secondo lo schema in "not"`,
            oneOf: `Deve corrispondere esattamente a uno schema in "oneOf"`,
            pattern: `Deve corrispondere al modello "{pattern}"`,
            uniqueItems: `Non deve avere elementi duplicati (gli elementi ## {j} e {i} sono identici)`,
            custom: `Deve corrispondere al formato "{format}"`,
            propertyNames: `Il nome della proprietà "{propertyName}" non è valido`,
            patternRequired: `Deve avere una proprietà corrispondete al modello "{missingPattern}"`,
            switch: `Deve superare la convalida della parola chiave "switch", il caso {caseIndex} non è riuscito`,
            const: `Deve essere uguale alla costante`,
            contains: `Deve contenere un elemento valido`,
            formatExclusiveMaximum: `formatExclusiveMaximum deve essere booleano`,
            formatExclusiveMinimum: `formatExclusiveMaximum deve essere booleano`,
            if: `Deve corrispondere allo schema "{failingKeyword}"`
        }
    },
    onboarding: {
        skip: `Salta`,
        prev: `Precedente`,
        next: `Successivo`,
        done: `Fatto`
    }
};

/**
 * 对话框辅助类
 */
class ModalHelper {
    constructor(srv) {
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
     * // 成功，其中 `nzModalRef` 指目标组件在构造函数 `NzModalRef` 变量名
     * this.nzModalRef.close(data);
     * this.nzModalRef.close();
     * // 关闭
     * this.nzModalRef.destroy();
     */
    create(comp, params, options) {
        options = deepMerge({
            size: 'lg',
            exact: true,
            includeTabs: false
        }, options);
        return new Observable((observer) => {
            const { size, includeTabs, modalOptions } = options;
            let cls = '';
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
            const defaultOptions = {
                nzWrapClassName: cls,
                nzContent: comp,
                nzWidth: width ? width : undefined,
                nzFooter: null,
                nzComponentParams: params
            };
            const subject = this.srv.create(Object.assign(Object.assign({}, defaultOptions), modalOptions));
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
     * @param comp 组件
     * @param params 组件参数
     * @param options 额外参数
     *
     * @example
     * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
     * // 对于组件的成功&关闭的处理说明
     * // 成功，其中 `nzModalRef` 指目标组件在构造函数 `NzModalRef` 变量名
     * this.nzModalRef.close(data);
     * this.nzModalRef.close();
     * // 关闭
     * this.nzModalRef.destroy();
     */
    createStatic(comp, params, options) {
        const modalOptions = Object.assign({ nzMaskClosable: false }, (options && options.modalOptions));
        return this.create(comp, params, Object.assign(Object.assign({}, options), { modalOptions }));
    }
}
ModalHelper.ɵprov = i0.ɵɵdefineInjectable({ factory: function ModalHelper_Factory() { return new ModalHelper(i0.ɵɵinject(i1$4.NzModalService)); }, token: ModalHelper, providedIn: "root" });
ModalHelper.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ModalHelper.ctorParameters = () => [
    { type: NzModalService }
];

/**
 * 抽屉辅助类
 *
 * **注意：** 构建结果都可被订阅，但永远都不会触发 `observer.error`
 *
 * @example
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
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * 构建一个抽屉
     */
    create(title, comp, params, options) {
        options = deepMerge({
            size: 'md',
            footer: true,
            footerHeight: 50,
            exact: true,
            drawerOptions: {
                nzPlacement: 'right',
                nzWrapClassName: ''
            }
        }, options);
        return new Observable((observer) => {
            const { size, footer, footerHeight, drawerOptions } = options;
            const defaultOptions = {
                nzContent: comp,
                nzContentParams: params,
                nzTitle: title
            };
            if (typeof size === 'number') {
                defaultOptions[drawerOptions.nzPlacement === 'top' || drawerOptions.nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'] = options.size;
            }
            else if (!drawerOptions.nzWidth) {
                defaultOptions.nzWrapClassName = `${drawerOptions.nzWrapClassName} drawer-${options.size}`.trim();
                delete drawerOptions.nzWrapClassName;
            }
            if (footer) {
                // The 24 value is @drawer-body-padding
                defaultOptions.nzBodyStyle = {
                    'padding-bottom.px': footerHeight + 24
                };
            }
            const subject = this.srv.create(Object.assign(Object.assign({}, defaultOptions), drawerOptions));
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
     * 构建一个抽屉，点击蒙层不允许关闭
     */
    static(title, comp, params, options) {
        const drawerOptions = Object.assign({ nzMaskClosable: false }, (options && options.drawerOptions));
        return this.create(title, comp, params, Object.assign(Object.assign({}, options), { drawerOptions }));
    }
}
DrawerHelper.ɵprov = i0.ɵɵdefineInjectable({ factory: function DrawerHelper_Factory() { return new DrawerHelper(i0.ɵɵinject(i1$5.NzDrawerService)); }, token: DrawerHelper, providedIn: "root" });
DrawerHelper.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
DrawerHelper.ctorParameters = () => [
    { type: NzDrawerService }
];

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * 封装HttpClient，主要解决：
 * + 优化HttpClient在参数上便利性
 * + 统一实现 loading
 * + 统一处理时间格式问题
 */
class _HttpClient {
    constructor(http, cogSrv) {
        this.http = http;
        this.lc = 0;
        this.cog = cogSrv.merge('themeHttp', {
            nullValueHandling: 'include',
            dateValueHandling: 'timestamp'
        });
    }
    /**
     * Get whether it's loading
     *
     * 获取是否正在加载中
     */
    get loading() {
        return this.lc > 0;
    }
    /**
     * Get the currently loading count
     *
     * 获取当前加载中的数量
     */
    get loadingCount() {
        return this.lc;
    }
    parseParams(params) {
        const newParams = {};
        if (params instanceof HttpParams) {
            return params;
        }
        Object.keys(params).forEach(key => {
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
    appliedUrl(url, params) {
        if (!params)
            return url;
        url += ~url.indexOf('?') ? '' : '?';
        const arr = [];
        Object.keys(params).forEach(key => {
            arr.push(`${key}=${params[key]}`);
        });
        return url + arr.join('&');
    }
    setCount(count) {
        Promise.resolve(null).then(() => (this.lc = count <= 0 ? 0 : count));
    }
    push() {
        this.setCount(++this.lc);
    }
    pop() {
        this.setCount(--this.lc);
    }
    /**
     * Clean loading count
     *
     * 清空加载中
     */
    cleanLoading() {
        this.setCount(0);
    }
    get(url, params, options = {}) {
        return this.request('GET', url, Object.assign({ params }, options));
    }
    post(url, body, params, options = {}) {
        return this.request('POST', url, Object.assign({ body,
            params }, options));
    }
    delete(url, params, options = {}) {
        return this.request('DELETE', url, Object.assign({ params }, options));
    }
    // #endregion
    // #region jsonp
    /**
     * **JSONP Request**
     *
     * @param callbackParam CALLBACK值，默认：JSONP_CALLBACK
     */
    jsonp(url, params, callbackParam = 'JSONP_CALLBACK') {
        return of(null).pipe(
        // Make sure to always be asynchronous, see issues: https://github.com/ng-alain/ng-alain/issues/1954
        delay(0), tap(() => this.push()), switchMap(() => this.http.jsonp(this.appliedUrl(url, params), callbackParam)), finalize(() => this.pop()));
    }
    patch(url, body, params, options = {}) {
        return this.request('PATCH', url, Object.assign({ body,
            params }, options));
    }
    put(url, body, params, options = {}) {
        return this.request('PUT', url, Object.assign({ body,
            params }, options));
    }
    form(url, body, params, options = {}) {
        return this.request('POST', url, Object.assign(Object.assign({ body,
            params }, options), { headers: {
                'content-type': `application/x-www-form-urlencoded`
            } }));
    }
    request(method, url, options = {}) {
        if (options.params)
            options.params = this.parseParams(options.params);
        return of(null).pipe(
        // Make sure to always be asynchronous, see issues: https://github.com/ng-alain/ng-alain/issues/1954
        delay(0), tap(() => this.push()), switchMap(() => this.http.request(method, url, options)), finalize(() => this.pop()));
    }
}
_HttpClient.ɵprov = i0.ɵɵdefineInjectable({ factory: function _HttpClient_Factory() { return new _HttpClient(i0.ɵɵinject(i1$6.HttpClient), i0.ɵɵinject(i1.AlainConfigService)); }, token: _HttpClient, providedIn: "root" });
_HttpClient.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
_HttpClient.ctorParameters = () => [
    { type: HttpClient },
    { type: AlainConfigService }
];

/**
 * Every http decorator must be based on `BaseAPI`, Like this:
 * ```ts
 * \@Injectable()
 * class DataService extends BaseApi {}
 * ```
 */
class BaseApi {
    constructor(injector) {
        this.injector = injector;
    }
}
BaseApi.decorators = [
    { type: Injectable }
];
BaseApi.ctorParameters = () => [
    { type: Injector, decorators: [{ type: Inject, args: [Injector,] }] }
];
const paramKey = `__api_params`;
function setParam(target, key = paramKey) {
    let params = target[key];
    if (typeof params === 'undefined') {
        params = target[key] = {};
    }
    return params;
}
/**
 * 默认基准URL
 * - 有效范围：类
 */
function BaseUrl(url) {
    return function (target) {
        const params = setParam(target.prototype);
        params.baseUrl = url;
        return target;
    };
}
/**
 * 默认 `headers`
 * - 有效范围：类
 */
function BaseHeaders(headers) {
    return function (target) {
        const params = setParam(target.prototype);
        params.baseHeaders = headers;
        return target;
    };
}
function makeParam(paramName) {
    return function (key) {
        return function (target, propertyKey, index) {
            const params = setParam(setParam(target), propertyKey);
            let tParams = params[paramName];
            if (typeof tParams === 'undefined') {
                tParams = params[paramName] = [];
            }
            tParams.push({
                key,
                index
            });
        };
    };
}
/**
 * URL路由参数
 * - 有效范围：方法参数
 */
const Path = makeParam('path');
/**
 * URL 参数 `QueryString`
 * - 有效范围：方法参数
 */
const Query = makeParam('query');
/**
 * 参数 `Body`
 * - 有效范围：方法参数
 */
const Body = makeParam('body')();
/**
 * 参数 `headers`
 * - 有效范围：方法参数
 * - 合并 `BaseHeaders`
 */
const Headers = makeParam('headers');
/**
 * Request Payload
 * - Supported body (like`POST`, `PUT`) as a body data, equivalent to `@Body`
 * - Not supported body (like `GET`, `DELETE` etc) as a `QueryString`
 */
const Payload = makeParam('payload')();
function getValidArgs(data, key, args) {
    if (!data[key] || !Array.isArray(data[key]) || data[key].length <= 0) {
        return undefined;
    }
    return args[data[key][0].index];
}
function genBody(data, payload) {
    if (Array.isArray(data) || Array.isArray(payload)) {
        return Object.assign([], data, payload);
    }
    return Object.assign(Object.assign({}, data), payload);
}
function makeMethod(method) {
    return function (url = '', options) {
        return (_target, targetKey, descriptor) => {
            descriptor.value = function (...args) {
                options = options || {};
                const injector = this.injector;
                const http = injector.get(_HttpClient, null);
                if (http == null) {
                    throw new TypeError(`Not found '_HttpClient', You can import 'AlainThemeModule' && 'HttpClientModule' in your root module.`);
                }
                const baseData = setParam(this);
                const data = setParam(baseData, targetKey);
                let requestUrl = url || '';
                requestUrl = [baseData.baseUrl || '', requestUrl.startsWith('/') ? requestUrl.substr(1) : requestUrl].join('/');
                // fix last split
                if (requestUrl.length > 1 && requestUrl.endsWith('/')) {
                    requestUrl = requestUrl.substr(0, requestUrl.length - 1);
                }
                if (options.acl) {
                    const aclSrv = injector.get(ACLService, null);
                    if (aclSrv && !aclSrv.can(options.acl)) {
                        return throwError({
                            url: requestUrl,
                            status: 401,
                            statusText: `From Http Decorator`
                        });
                    }
                    delete options.acl;
                }
                requestUrl = requestUrl.replace(/::/g, '^^');
                (data.path || [])
                    .filter(w => typeof args[w.index] !== 'undefined')
                    .forEach((i) => {
                    requestUrl = requestUrl.replace(new RegExp(`:${i.key}`, 'g'), encodeURIComponent(args[i.index]));
                });
                requestUrl = requestUrl.replace(/\^\^/g, `:`);
                const params = (data.query || []).reduce((p, i) => {
                    p[i.key] = args[i.index];
                    return p;
                }, {});
                const headers = (data.headers || []).reduce((p, i) => {
                    p[i.key] = args[i.index];
                    return p;
                }, {});
                if (method === 'FORM') {
                    headers['content-type'] = 'application/x-www-form-urlencoded';
                }
                const payload = getValidArgs(data, 'payload', args);
                const supportedBody = method === 'POST' || method === 'PUT';
                return http.request(method, requestUrl, Object.assign({ body: supportedBody ? genBody(getValidArgs(data, 'body', args), payload) : null, params: !supportedBody ? Object.assign(Object.assign({}, params), payload) : params, headers: Object.assign(Object.assign({}, baseData.baseHeaders), headers) }, options));
            };
            return descriptor;
        };
    };
}
/**
 * `OPTIONS` 请求
 * - 有效范围：方法
 */
const OPTIONS = makeMethod('OPTIONS');
/**
 * `GET` 请求
 * - 有效范围：方法
 */
const GET = makeMethod('GET');
/**
 * `POST` 请求
 * - 有效范围：方法
 */
const POST = makeMethod('POST');
/**
 * `DELETE` 请求
 * - 有效范围：方法
 */
const DELETE = makeMethod('DELETE');
/**
 * `PUT` 请求
 * - 有效范围：方法
 */
const PUT = makeMethod('PUT');
/**
 * `HEAD` 请求
 * - 有效范围：方法
 */
const HEAD = makeMethod('HEAD');
/**
 * `PATCH` 请求
 * - 有效范围：方法
 */
const PATCH = makeMethod('PATCH');
/**
 * `JSONP` 请求
 * - 有效范围：方法
 */
const JSONP = makeMethod('JSONP');
/**
 * `FORM` 请求
 * - 有效范围：方法
 */
const FORM = makeMethod('FORM');

class DatePipe {
    constructor(nzI18n) {
        this.nzI18n = nzI18n;
    }
    transform(value, formatString = 'yyyy-MM-dd HH:mm') {
        value = toDate(value);
        if (isNaN(value))
            return '';
        const langOpt = { locale: this.nzI18n.getDateLocale() };
        return formatString === 'fn' ? formatDistanceToNow(value, langOpt) : format(value, formatString, langOpt);
    }
}
DatePipe.decorators = [
    { type: Pipe, args: [{ name: '_date' },] }
];
DatePipe.ctorParameters = () => [
    { type: NzI18nService }
];

/**
 * [Document](https://ng-alain.com/theme/keys)
 */
class KeysPipe {
    transform(value, keyIsNumber = false) {
        const ret = [];
        Object.keys(value).forEach(key => {
            ret.push({ key: keyIsNumber ? +key : key, value: value[key] });
        });
        return ret;
    }
}
KeysPipe.decorators = [
    { type: Pipe, args: [{ name: 'keys' },] }
];

const ICON_YES = `<svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>`;
const ICON_NO = `<svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>`;
const CLS_YES = `class="yn__yes"`;
const CLS_NO = `class="yn__no"`;
class YNPipe {
    constructor(dom) {
        this.dom = dom;
    }
    transform(value, yes, no, mode, isSafeHtml = true) {
        let html = '';
        yes = yes || '是';
        no = no || '否';
        switch (mode) {
            case 'full':
                html = value
                    ? `<i ${CLS_YES}>${ICON_YES}<span>${yes}</span></i>`
                    : `<i ${CLS_NO}>${ICON_NO}<span>${no}</span></i>`;
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
YNPipe.ctorParameters = () => [
    { type: DomSanitizer }
];

class HTMLPipe {
    constructor(dom) {
        this.dom = dom;
    }
    transform(html) {
        return html ? this.dom.bypassSecurityTrustHtml(html) : '';
    }
}
HTMLPipe.decorators = [
    { type: Pipe, args: [{ name: 'html' },] }
];
HTMLPipe.ctorParameters = () => [
    { type: DomSanitizer }
];

class URLPipe {
    constructor(dom) {
        this.dom = dom;
    }
    transform(url) {
        return url ? this.dom.bypassSecurityTrustUrl(url) : '';
    }
}
URLPipe.decorators = [
    { type: Pipe, args: [{ name: 'url' },] }
];
URLPipe.ctorParameters = () => [
    { type: DomSanitizer }
];

class I18nPipe {
    constructor(i18n) {
        this.i18n = i18n;
    }
    transform(key, params) {
        return this.i18n.fanyi(key, params);
    }
}
I18nPipe.decorators = [
    { type: Pipe, args: [{ name: 'i18n' },] }
];
I18nPipe.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ALAIN_I18N_TOKEN,] }] }
];

/* eslint-disable import/order */
// #region import
const HELPERS = [ModalHelper, DrawerHelper];
const PIPES = [DatePipe, KeysPipe, YNPipe, I18nPipe, HTMLPipe, URLPipe];
const ICONS = [BellOutline, DeleteOutline, PlusOutline, InboxOutline];
const ɵ0 = {
    layout: 'layout',
    user: 'user',
    app: 'app'
};
// #endregion
class AlainThemeModule {
    constructor(iconSrv) {
        iconSrv.addIcon(...ICONS);
    }
    static forRoot() {
        return {
            ngModule: AlainThemeModule,
            providers: [...HELPERS]
        };
    }
    static forChild() {
        return {
            ngModule: AlainThemeModule,
            providers: [...HELPERS]
        };
    }
}
AlainThemeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule, OverlayModule, NzI18nModule],
                declarations: [...PIPES],
                providers: [
                    {
                        provide: ALAIN_SETTING_KEYS,
                        useValue: ɵ0
                    }
                ],
                exports: [...PIPES, DelonLocaleModule]
            },] }
];
AlainThemeModule.ctorParameters = () => [
    { type: NzIconService }
];

/**
 * Optional pre-loading module, when it's necessary to load the resource at the first page load for some lazy routes, [example](https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/routes-routing.module.ts).
 *
 * 可选预加载模块，当需要对某些懒路由在第一次页面加载时也一并加载该资源时，[示例](https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/routes-routing.module.ts)。
 *
 * @example
 * {AT}NgModule({
 *  providers: [PreloadOptionalModules],
 *  imports: [
 *    RouterModule.forRoot([
 *      { path: '', loadChildren: null, data: { preload: true } }
 *    ], { preloadingStrategy: PreloadOptionalModules})]
 * })
 */
class PreloadOptionalModules {
    preload(route, fn) {
        var _a;
        return ((_a = route.data) === null || _a === void 0 ? void 0 : _a.preload) === true ? fn().pipe(catchError(() => of(null))) : of(null);
    }
}

const VERSION = new Version('12.3.0-5abd17c0');

/**
 * Generated bundle index. Do not edit.
 */

export { ALAIN_I18N_TOKEN, ALAIN_SETTING_KEYS, AlainI18NServiceFake, AlainI18nBaseService, AlainThemeModule, BaseApi, BaseHeaders, BaseUrl, Body, DELETE, DELON_LOCALE, DELON_LOCALE_SERVICE_PROVIDER, DELON_LOCALE_SERVICE_PROVIDER_FACTORY, DatePipe, DelonLocaleModule, DelonLocaleService, DrawerHelper, FORM, GET, HEAD, HTMLPipe, HTML_DIR, Headers, JSONP, KeysPipe, LTR, MenuService, ModalHelper, OPTIONS, PATCH, POST, PUT, Path, Payload, PreloadOptionalModules, Query, REP_MAX, RTL, RTLService, RTL_DELON_COMPONENTS, RTL_DIRECTION, RTL_NZ_COMPONENTS, ResponsiveService, SettingsService, TitleService, URLPipe, VERSION, YNPipe, _HttpClient, elGR as el_GR, enUS as en_US, esES as es_ES, frFR as fr_FR, hrHR as hr_HR, itIT as it_IT, jaJP as ja_JP, koKR as ko_KR, plPL as pl_PL, preloaderFinished, slSI as sl_SI, trTR as tr_TR, zhCN as zh_CN, zhTW as zh_TW, I18nPipe as ɵa };
//# sourceMappingURL=theme.js.map
