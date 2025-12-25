import { SafeHtml, SafeUrl } from '@angular/platform-browser';
import { ACLCanType } from '@delon/acl';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from '@angular/core';
import { OnDestroy, InjectionToken, Provider, PipeTransform, TemplateRef, Type, Injector, Signal, ModuleWithProviders, EnvironmentProviders, Version } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Direction } from '@angular/cdk/bidi';
import { AlainConfigService, AlainConfig } from '@delon/util/config';
import * as i2 from '@angular/router';
import { ActivatedRouteSnapshot, CanActivateFn, CanActivateChildFn, PreloadingStrategy, Route } from '@angular/router';
import { ModalOptions } from 'ng-zorro-antd/modal';
import { NzDrawerOptions, NzDrawerRef } from 'ng-zorro-antd/drawer';
import { HttpHeaders, HttpParams, HttpContext, HttpEvent, HttpResponse, HttpContextToken, HttpInterceptorFn } from '@angular/common/http';
import { NzIconService } from 'ng-zorro-antd/icon';
import * as i1 from '@angular/common';
import * as i3 from '@angular/cdk/overlay';
import * as i4 from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';

declare function stepPreloader(): () => void;

interface MenuIcon {
    /**
     * Type for icon
     *
     * - `img`, `svg` Size uses `14px` width and height
     */
    type: 'class' | 'icon' | 'iconfont' | 'img' | 'svg';
    /** Value for the icon, can be set Class Name, nz-icon of `nzType`, image */
    value?: string | SafeHtml;
    /** Type of the ant design icon, default: `outline` */
    theme?: 'outline' | 'twotone' | 'fill';
    /** Rotate icon with animation, default: `false` */
    spin?: boolean;
    /** Only support the two-tone icon. Specific the primary color */
    twoToneColor?: string;
    /** Type of the icon from iconfont */
    iconfont?: string;
    /** Rotate degrees */
    rotate?: number;
}
interface Menu {
    [key: string]: NzSafeAny;
    /** Rendering type of menu item */
    render_type?: 'item' | 'divider';
    /** Text of menu item, can be choose one of  `text` or `i18n` (Support HTML) */
    text?: string;
    /** I18n key of menu item, can be choose one of  `text` or `i18n` (Support HTML) */
    i18n?: string;
    /** Whether to display the group name, default: `true` */
    group?: boolean;
    /** Routing for the menu item, can be choose one of `link` or `externalLink` */
    link?: string;
    /** External link for the menu item, can be choose one of `link` or `externalLink` */
    externalLink?: string;
    /** Specifies `externalLink` where to display the linked URL */
    target?: '_blank' | '_self' | '_parent' | '_top';
    /** Icon for the menu item, only valid for the first level menu */
    icon?: string | MenuIcon | null;
    /** Badget for the menu item when `group` is `true` */
    badge?: number;
    /** Whether to display a red dot instead of `badge` value */
    badgeDot?: boolean;
    /** Badge [color](https://ng.ant.design/components/badge/en#nz-badge) */
    badgeStatus?: 'success' | 'processing' | 'default' | 'error' | 'warning';
    /** Maximum count to show in badge, show `${badgeOverflowCount}+` when exceed */
    badgeOverflowCount?: number;
    /** Whether disable for the menu item */
    disabled?: boolean;
    /** Whether hidden for the menu item */
    hide?: boolean;
    /** Whether hide in breadcrumbs, which are valid when the `page-header` component automatically generates breadcrumbs */
    hideInBreadcrumb?: boolean;
    /** ACL configuration, it's equivalent to `ACLService.can(roleOrAbility: ACLCanType)` parameter value */
    acl?: ACLCanType;
    /** Whether shortcut menu item */
    shortcut?: boolean;
    /** Wheter shortcut menu root node */
    shortcutRoot?: boolean;
    /** Whether to allow reuse, need to cooperate with the `reuse-tab` component */
    reuse?: boolean;
    /**
     * Whether to expand, when `checkStrictly` is valid in `sidebar-nav` component
     */
    open?: boolean;
    /** Unique identifier of the menu item, can be used in `getItem`,` setItem` to update a menu */
    key?: string;
    /** Children menu of menu item */
    children?: Menu[];
}
/** @inner Just only inner type */
interface MenuInner extends Menu {
    _id?: number;
    _parent?: Menu | null;
    _depth?: number;
    _hidden?: boolean;
    _selected?: boolean;
    _aclResult?: boolean;
}

/**
 * 菜单服务，[在线文档](https://ng-alain.com/theme/menu)
 */
declare class MenuService implements OnDestroy {
    private readonly i18nSrv;
    private readonly aclService;
    private _change$;
    private i18n$?;
    private data;
    /**
     * 是否完全受控菜单打开状态，默认：`false`
     */
    openStrictly: boolean;
    constructor();
    get change(): Observable<Menu[]>;
    get menus(): Menu[];
    /**
     * Returns a default menu link
     *
     * 返回一个默认跳转的菜单链接
     */
    getDefaultRedirect(opt?: {
        redirectUrl?: string;
    }): string | null | undefined;
    visit<T extends Menu = Menu>(data: T[], callback: (item: T, parentMenum: T | null, depth?: number) => void): void;
    visit(data: Menu[], callback: (item: Menu, parentMenum: Menu | null, depth?: number) => void): void;
    add(items: Menu[]): void;
    private fixItem;
    /**
     * 重置菜单，可能I18N、用户权限变动时需要调用刷新
     */
    resume<T extends Menu = Menu>(callback?: (item: T, parentMenum: T | null, depth?: number) => void): void;
    resume(callback?: (item: Menu, parentMenum: Menu | null, depth?: number) => void): void;
    /**
     * 加载快捷菜单，加载位置规则如下：
     * 1、统一在下标0的节点下（即【主导航】节点下方）
     *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
     *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
     *      3、否则放在0节点位置
     */
    private loadShortcut;
    /**
     * 清空菜单
     */
    clear(): void;
    /**
     * Use `url` or `key` to find menus
     *
     * 利用 `url` 或 `key` 查找菜单
     */
    find(options: {
        key?: string | null;
        url?: string | null;
        recursive?: boolean | null;
        /**
         * When the callback returns a Boolean type, it means the custom validation result
         *
         * 当回调返回一个布尔类型时，表示自定义校验结果
         */
        cb?: ((i: Menu) => boolean | null) | null;
        /**
         * Use the current menu data by default
         *
         * 默认使用当前菜单数据
         */
        data?: Menu[] | null;
        /**
         * Whether to ignore hide items, default: `false`
         *
         * 是否忽略隐藏的项，默认：`false`
         */
        ignoreHide?: boolean;
        /**
         * Whether to return the last one, default: `false`
         *
         * 是否返回最后一个，默认：`false`
         */
        last?: boolean;
    }): Menu | null;
    /**
     * 根据url获取菜单列表
     * - 若 `recursive: true` 则会自动向上递归查找
     *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
     */
    getPathByUrl(url: string, recursive?: boolean): Menu[];
    /**
     * Get menu based on `key`
     */
    getItem(key: string): Menu | null;
    /**
     * Set menu based on `key`
     */
    setItem(key: string | Menu, value: Menu, options?: {
        emit?: boolean;
    }): void;
    /**
     * Open menu based on `key` or menu object
     */
    open(keyOrItem: string | Menu | null, options?: {
        emit?: boolean;
    }): void;
    openAll(status?: boolean): void;
    toggleOpen(keyOrItem: string | Menu | null, options?: {
        allStatus?: boolean;
        emit?: boolean;
    }): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MenuService>;
}

interface App {
    [key: string]: NzSafeAny;
    /** Name for app */
    name?: string;
    /** Description for app */
    description?: string;
}
interface User {
    [key: string]: NzSafeAny;
    /** Name for current user */
    name?: string;
    /** Avatar for current user */
    avatar?: string;
    /** Email for current user */
    email?: string;
}
interface Layout {
    [key: string]: NzSafeAny;
    /** Whether to fold menu */
    collapsed: boolean;
    /** Current language */
    lang: string;
    /** Color weak */
    colorWeak: boolean;
    /** Direction of the text */
    direction: Direction;
}
interface SettingsNotify {
    type: 'layout' | 'app' | 'user';
    /** Update `key` name, limited `layout` type */
    name?: string;
    value: NzSafeAny;
}

interface SettingsKeys {
    /** Layout data specifies the stored key,  default: `layout` */
    layout: string;
    /** User data specifies the stored key,  default: `user` */
    user: string;
    /** App data specifies the stored key,  default: `app` */
    app: string;
}
declare const ALAIN_SETTING_KEYS: InjectionToken<SettingsKeys>;
declare const ALAIN_SETTING_DEFAULT: Provider;
declare class SettingsService<L extends Layout = Layout, U extends User = User, A extends App = App> {
    private readonly KEYS;
    private readonly platform;
    private notify$;
    private _app;
    private _user;
    private _layout;
    getData(key: string): NzSafeAny;
    setData(key: string, value: NzSafeAny): void;
    get layout(): L;
    get app(): A;
    get user(): U;
    get notify(): Observable<SettingsNotify>;
    setLayout<T extends Layout = Layout>(name: T, value?: NzSafeAny): boolean;
    setLayout(name: string | L, value?: NzSafeAny): boolean;
    getLayout<T>(): T;
    setApp<T extends App = App>(value: T): void;
    setApp(value: A): void;
    getApp<T>(): T;
    setUser<T extends User = User>(value: T): void;
    setUser(value: U): void;
    getUser<T>(): T;
    static ɵfac: i0.ɵɵFactoryDeclaration<SettingsService<any, any, any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SettingsService<any, any, any>>;
}

declare const REP_MAX = 6;
declare const SPAN_MAX = 24;
type REP_TYPE = 1 | 2 | 3 | 4 | 5 | 6;
declare class ResponsiveService {
    private readonly cogSrv;
    private cog;
    constructor();
    genCls(count: number, defaultCol?: number): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ResponsiveService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ResponsiveService>;
}

declare const HTML_DIR = "dir";
declare const RTL_DIRECTION = "direction";
declare const RTL_NZ_COMPONENTS: string[];
declare const RTL_DELON_COMPONENTS: string[];
declare const LTR = "ltr";
declare const RTL = "rtl";
declare class RTLService {
    private readonly d;
    private readonly nz;
    private readonly delon;
    private readonly platform;
    private readonly doc;
    private readonly srv;
    private _dir;
    /**
     * Get or Set the current text direction
     *
     * 获取或设置当前文字方向
     */
    get dir(): Direction;
    set dir(value: Direction);
    /**
     * Get the next text direction
     *
     * 获取下一次文字方向
     */
    get nextDir(): Direction;
    /**
     * Subscription change notification
     *
     * 订阅变更通知
     */
    get change(): Observable<Direction>;
    constructor();
    /**
     * Toggle text direction
     *
     * 切换文字方向
     */
    toggle(): void;
    private updateHtml;
    private updateLibConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<RTLService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RTLService>;
}

interface RouteTitle {
    title?: string | Observable<string>;
    titleI18n?: string;
}
declare class TitleService implements OnDestroy {
    private destroy$;
    private _prefix;
    private _suffix;
    private _separator;
    private _reverse;
    private tit$?;
    readonly DELAY_TIME = 25;
    private readonly doc;
    private readonly injector;
    private readonly title;
    private readonly menuSrv;
    private readonly i18nSrv;
    constructor();
    /**
     * Set separator
     *
     * 设置分隔符
     */
    set separator(value: string);
    /**
     * Set prefix
     *
     * 设置前缀
     */
    set prefix(value: string);
    /**
     * Set suffix
     *
     * 设置后缀
     */
    set suffix(value: string);
    /**
     * Set whether to reverse
     *
     * 设置是否反转
     */
    set reverse(value: boolean);
    /**
     * Set the default CSS selector string
     *
     * 设置默认CSS选择器字符串
     */
    selector?: string | null;
    /**
     * Set default title name
     *
     * 设置默认标题名
     */
    default: string;
    private getByElement;
    private getByRoute;
    private getByMenu;
    /**
     * Set the document title
     */
    setTitle(title?: string | string[]): void;
    /**
     * Set i18n key of the document title
     */
    setTitleByI18n(key: string, params?: unknown): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TitleService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TitleService>;
}

interface AlainI18NService {
    [key: string]: NzSafeAny;
    /**
     * Call `use` to trigger change notification
     *
     * 调用 `use` 触发变更通知
     */
    readonly change: Observable<string>;
    /**
     * Get the default language
     *
     * 获取默认语言
     */
    readonly defaultLang: string;
    /**
     * Get current language
     *
     * 获取当前语言
     */
    readonly currentLang: string;
    /**
     * Change language
     *
     * 变更语言
     */
    use(lang: string, data?: Record<string, unknown>): void;
    /**
     * Return to the current language list
     *
     * 返回当前语言列表
     */
    getLangs(): NzSafeAny[];
    /**
     * Translate 翻译
     *
     * @param params 模板所需要的参数对象
     */
    fanyi(path: string, params?: unknown | unknown[]): string;
}
declare const ALAIN_I18N_TOKEN: InjectionToken<AlainI18NService>;
declare abstract class AlainI18nBaseService implements AlainI18NService {
    protected readonly cogSrv: AlainConfigService;
    private cog;
    protected _change$: BehaviorSubject<string | null>;
    protected _currentLang: string;
    protected _defaultLang: string;
    protected _data: Record<string, string>;
    get change(): Observable<string>;
    get defaultLang(): string;
    get currentLang(): string;
    get data(): Record<string, string>;
    constructor();
    /**
     * Merge the data into the current language data.
     */
    mergeData(data?: Record<string, unknown>): void;
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
    flatData(data: Record<string, unknown>, parentKey: string[]): Record<string, string>;
    abstract use(lang: string, data?: Record<string, unknown>): void;
    abstract getLangs(): NzSafeAny[];
    fanyi(path: string, params?: unknown | unknown[]): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlainI18nBaseService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlainI18nBaseService>;
}
declare class AlainI18NServiceFake extends AlainI18nBaseService {
    use(lang: string, data: Record<string, unknown>): void;
    getLangs(): NzSafeAny[];
    static ɵfac: i0.ɵɵFactoryDeclaration<AlainI18NServiceFake, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlainI18NServiceFake>;
}

declare class I18nPipe implements PipeTransform {
    private readonly i18n;
    transform(key: string, params?: unknown | unknown[]): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18nPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<I18nPipe, "i18n", true>;
}

declare class AlainI18NGuardService {
    private readonly i18nSrv;
    private readonly cogSrv;
    process(route: ActivatedRouteSnapshot): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlainI18NGuardService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlainI18NGuardService>;
}
/**
 * Internationalization guard, automatically recognizes the language in Url and triggers the `ALAIN_I18N_TOKEN.use` method
 *
 * 国际化守卫，自动识别Url中的语言，并触发 `ALAIN_I18N_TOKEN.use` 方法
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ alainI18nCanActivate ]
 * }
 * ```
 */
declare const alainI18nCanActivate: CanActivateFn;
/**
 * Internationalization guard, automatically recognizes the language in Url and triggers the `ALAIN_I18N_TOKEN.use` method
 *
 * 国际化守卫，自动识别Url中的语言，并触发 `ALAIN_I18N_TOKEN.use` 方法
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivateChild: [ alainI18nCanActivateChild ]
 * }
 * ```
 */
declare const alainI18nCanActivateChild: CanActivateChildFn;

interface ModalHelperOptions {
    /** 大小；例如：lg、600、80%，默认：`lg` */
    size?: 'sm' | 'md' | 'lg' | 'xl' | '' | number | string;
    /** 对话框 [ModalOptions](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts) 参数 */
    modalOptions?: ModalOptions;
    /** 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 */
    exact?: boolean;
    /** 是否包裹标签页，修复模态包含标签间距问题 */
    includeTabs?: boolean;
    /**
     * 是否支持拖动，默认是通过标题来触发
     */
    drag?: ModalHelperDragOptions | boolean;
    /**
     * 是否强制使用 `nzData` 传递参数，若为 `false` 表示参数会直接映射到组件实例中，其他值只能通过 `NZ_MODAL_DATA` 的方式来获取参数，默认：`false`
     */
    useNzData?: boolean;
    /**
     * 设置焦点按钮
     */
    focus?: 'ok' | 'cancel';
}
interface ModalHelperDragOptions {
    /**
     * 指定拖地区域的类名，若指定为 `null` 时表示整个对话框，默认：`.modal-header, .ant-modal-title`
     */
    handleCls?: string | null;
}
/**
 * 对话框辅助类
 */
declare class ModalHelper {
    private readonly srv;
    private readonly drag;
    private readonly doc;
    private createDragRef;
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
    create(comp?: TemplateRef<NzSafeAny> | Type<NzSafeAny> | 'confirm' | 'info' | 'success' | 'error' | 'warning', params?: NzSafeAny | ModalHelperOptions | null, options?: ModalHelperOptions): Observable<NzSafeAny>;
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
    createStatic(comp: TemplateRef<NzSafeAny> | Type<NzSafeAny>, params?: NzSafeAny, options?: ModalHelperOptions): Observable<NzSafeAny>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalHelper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ModalHelper>;
}

interface DrawerHelperOptions {
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
     */
    size?: 'sm' | 'md' | 'lg' | 'xl' | number;
    /**
     * 是否包含底部工具条，默认：`true`
     */
    footer?: boolean;
    /**
     * 底部工具条高度，默认：`55`
     */
    footerHeight?: number;
    /** 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 */
    exact?: boolean;
    /** 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数 */
    drawerOptions?: NzDrawerOptions;
}
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
declare class DrawerHelper {
    private readonly srv;
    private readonly parentDrawer;
    private openDrawersAtThisLevel;
    get openDrawers(): NzDrawerRef[];
    /**
     * 构建一个抽屉
     */
    create(title: string | TemplateRef<NzSafeAny> | undefined | null, comp: TemplateRef<{
        $implicit: NzSafeAny;
        drawerRef: NzDrawerRef;
    }> | Type<NzSafeAny>, params?: NzSafeAny, options?: DrawerHelperOptions): Observable<NzSafeAny>;
    private close;
    closeAll(): void;
    /**
     * 构建一个抽屉，点击蒙层不允许关闭
     */
    static(title: string | TemplateRef<NzSafeAny> | undefined | null, comp: TemplateRef<{
        $implicit: NzSafeAny;
        drawerRef: NzDrawerRef;
    }> | Type<NzSafeAny>, params?: NzSafeAny, options?: DrawerHelperOptions): Observable<NzSafeAny>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DrawerHelper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DrawerHelper>;
}

type _HttpHeaders = HttpHeaders | Record<string, string | string[]>;
type HttpObserve = 'body' | 'events' | 'response';
/**
 * 封装HttpClient，主要解决：
 * + 优化HttpClient在参数上便利性
 * + 统一实现 loading
 * + 统一处理时间格式问题
 */
declare class _HttpClient {
    private readonly http;
    private readonly cogSrv;
    private cog;
    constructor();
    private lc;
    /**
     * Get whether it's loading
     *
     * 获取是否正在加载中
     */
    get loading(): boolean;
    /**
     * Get the currently loading count
     *
     * 获取当前加载中的数量
     */
    get loadingCount(): number;
    parseParams(params: NzSafeAny): HttpParams;
    appliedUrl(url: string, params?: NzSafeAny): string;
    private setCount;
    private push;
    private pop;
    /**
     * Clean loading count
     *
     * 清空加载中
     */
    cleanLoading(): void;
    /**
     * **GET Request** Return a `string` type / 返回一个 `string` 类型
     */
    get(url: string, params: any, options: {
        headers?: _HttpHeaders;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<string>;
    /**
     * **GET Request** Return a `HttpEvent<T>` type / 返回一个 `HttpEvent<T>` 类型
     */
    get<T>(url: string, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'events';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpEvent<T>>;
    /**
     * **GET Request** Return a `HttpResponse<any>` type / 返回一个 `HttpResponse<any>` 类型
     */
    get(url: string, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpResponse<any>>;
    /**
     * **GET Request** Return a `HttpResponse<T>` type / 返回一个 `HttpResponse<T>` 类型
     */
    get<T>(url: string, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpResponse<T>>;
    /**
     * **GET Request** Return a `any` type / 返回一个 `any` 类型
     */
    get(url: string, params?: any, options?: {
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<any>;
    /**
     * **GET Request** Return a generic type / 返回一个泛类型
     */
    get<T>(url: string, params?: any, options?: {
        headers?: _HttpHeaders;
        observe: 'body';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<T>;
    /**
     * **POST Request** Return a `string` type / 返回一个 `string` 类型
     */
    post(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<string>;
    /**
     * **POST Request** Return a `HttpEvent<T>` type / 返回一个 `HttpEvent<T>` 类型
     */
    post<T>(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'events';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpEvent<T>>;
    /**
     * **POST Request** Return a `HttpResponse<any>` type / 返回一个 `HttpResponse<any>` 类型
     */
    post(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpResponse<any>>;
    /**
     * **POST Request** Return a `any` type / 返回一个 `any` 类型
     */
    post(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<any>;
    /**
     * **POST Request** Return a JSON type / 返回一个 `JSON` 类型
     */
    post<T>(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe: 'body' | 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<T>;
    /**
     * **DELETE Request** Return a `string` type / 返回一个 `string` 类型
     */
    delete(url: string, params: any, options: {
        body?: any;
        headers?: _HttpHeaders;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<string>;
    /**
     * **DELETE Request** Return a `JSON` type / 返回一个 `JSON` 类型
     */
    delete(url: string, params: any, options: {
        body?: any;
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpResponse<NzSafeAny>>;
    /**
     * **DELETE Request** Return a `any` type / 返回一个 `any` 类型
     */
    delete(url: string, params?: any, options?: {
        body?: any;
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<any>;
    /**
     * c返回一个泛类型
     */
    delete<T>(url: string, params?: any, options?: {
        body?: any;
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<T>;
    /**
     * **JSONP Request**
     *
     * @param callbackParam CALLBACK值，默认：JSONP_CALLBACK
     */
    jsonp(url: string, params?: any, callbackParam?: string): Observable<any>;
    /**
     * **PATCH Request** Return a `string` type / 返回一个 `string` 类型
     */
    patch(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<string>;
    /**
     * **PATCH Request** Return a `HttpResponse<JSON>` type / 返回一个 `HttpResponse<JSON>` 类型
     */
    patch(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpResponse<NzSafeAny>>;
    /**
     * **PATCH Request** Return a `any` type / 返回一个 `any` 类型
     */
    patch(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<any>;
    /**
     * **PATCH Request** Return a `JSON` type / 返回一个 `JSON` 类型
     */
    patch<T>(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<T>;
    /**
     * **PUT Request** Return a `string` type / 返回一个 `string` 类型
     */
    put(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<string>;
    /**
     * **PUT Request** Return a `HttpResponse<JSON>` type / 返回一个 `HttpResponse<JSON>` 类型
     */
    put(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpResponse<NzSafeAny>>;
    /**
     * **PUT Request** Return a `any` type / 返回一个 `any` 类型
     */
    put(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<any>;
    /**
     * **PUT Request** Return a `JSON` type / 返回一个 `JSON` 类型
     */
    put<T>(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<T>;
    /**
     * **Form Request** Return a `string` type / 返回一个 `string` 类型
     */
    form(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<string>;
    /**
     * **Form Request** Return a `HttpEvent<T>` type / 返回一个 `HttpEvent<T>` 类型
     */
    form<T>(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'events';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpEvent<T>>;
    /**
     * **Form Request** Return a `HttpResponse<JSON>` type / 返回一个 `HttpResponse<JSON>` 类型
     */
    form(url: string, body: any, params: any, options: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpResponse<any>>;
    /**
     * **Form Request** Return a `any` type / 返回一个 `any` 类型
     */
    form(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe?: 'body' | 'events' | 'response';
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<any>;
    /**
     * **Form Request** Return a `JSON` type / 返回一个 `JSON` 类型
     */
    form<T>(url: string, body?: any, params?: any, options?: {
        headers?: _HttpHeaders;
        observe: 'response';
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<T>;
    /**
     * **Request** Return a `ArrayBuffer` type / 返回一个 `ArrayBuffer` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<ArrayBuffer>;
    /**
     * **Request** Return a `Blob` type / 返回一个 `Blob` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<Blob>;
    /**
     * **Request** Return a `string` type / 返回一个 `string` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe?: 'body';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<string>;
    /**
     * **Request** Return a `HttpEvent<ArrayBuffer>` type / 返回一个 `HttpEvent<ArrayBuffer>` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe: 'events';
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpEvent<ArrayBuffer>>;
    /**
     * **Request** Return a `HttpEvent<Blob>` type / 返回一个 `HttpEvent<Blob>` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe: 'events';
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpEvent<Blob>>;
    /**
     * **Request** Return a `HttpEvent<string>` type / 返回一个 `HttpEvent<string>` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe: 'events';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpEvent<string>>;
    /**
     * **Request** Return a `HttpEvent<any>` type / 返回一个 `HttpEvent<any>` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        reportProgress?: boolean;
        observe: 'events';
        responseType?: 'json';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpEvent<any>>;
    /**
     * **Request** Return a `HttpEvent<R>` type / 返回一个 `HttpEvent<R>` 类型
     */
    request<R>(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        reportProgress?: boolean;
        observe: 'events';
        responseType?: 'json';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpEvent<R>>;
    /**
     * **Request** Return a `HttpResponse<ArrayBuffer>` type / 返回一个 `HttpResponse<ArrayBuffer>` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe: 'response';
        reportProgress?: boolean;
        responseType: 'arraybuffer';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpResponse<ArrayBuffer>>;
    /**
     * **Request** Return a `HttpResponse<Blob>` type / 返回一个 `HttpResponse<Blob>` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe: 'response';
        reportProgress?: boolean;
        responseType: 'blob';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpResponse<Blob>>;
    /**
     * **Request** Return a `HttpResponse<string>` type / 返回一个 `HttpResponse<string>` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe: 'response';
        reportProgress?: boolean;
        responseType: 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpResponse<string>>;
    /**
     * **Request** Return a `HttpResponse<Object>` type / 返回一个 `HttpResponse<Object>` 类型
     */
    request(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        reportProgress?: boolean;
        observe: 'response';
        responseType?: 'json';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpResponse<NzSafeAny>>;
    /**
     * **Request** Return a `HttpResponse<R>` type / 返回一个 `HttpResponse<R>` 类型
     */
    request<R>(method: string, url: string, options: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        reportProgress?: boolean;
        observe: 'response';
        responseType?: 'json';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<HttpResponse<R>>;
    /**
     * **Request** Return a `HttpResponse<Object>` type / 返回一个 `HttpResponse<Object>` 类型
     */
    request(method: string, url: string, options?: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe?: 'body';
        responseType?: 'json';
        reportProgress?: boolean;
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<Record<string, unknown>>;
    /**
     * **Request** Return a `R` type / 返回一个 `R` 类型
     */
    request<R>(method: string, url: string, options?: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe?: 'body';
        responseType?: 'json';
        reportProgress?: boolean;
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<R>;
    /**
     * **Request** Return a `any` type / 返回一个 `any` 类型
     */
    request(method: string, url: string, options?: {
        body?: any;
        headers?: _HttpHeaders;
        params?: any;
        observe?: HttpObserve;
        reportProgress?: boolean;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
        context?: HttpContext;
    }): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<_HttpClient, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<_HttpClient>;
}

/**
 * Every http decorator must be based on `BaseAPI`, Like this:
 * ```ts
 * \@Injectable()
 * class DataService extends BaseApi {}
 * ```
 */
declare abstract class BaseApi {
    protected readonly injector: Injector;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseApi, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BaseApi>;
}
interface HttpOptions {
    /** ACL配置，若导入 `@delon/acl` 时自动有效，等同于 `ACLService.can(roleOrAbility: ACLCanType)` 参数值 */
    acl?: ACLCanType;
    observe?: 'body' | 'events' | 'response';
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    reportProgress?: boolean;
    withCredentials?: boolean;
    context?: HttpContext;
}
/**
 * 默认基准URL
 * - 有效范围：类
 */
declare function BaseUrl(url: string): <TClass extends new (...args: any[]) => BaseApi>(target: TClass) => TClass;
/**
 * 默认 `headers`
 * - 有效范围：类
 */
declare function BaseHeaders(headers: HttpHeaders | Record<string, string | string[]>): <TClass extends new (...args: any[]) => BaseApi>(target: TClass) => TClass;
/**
 * URL路由参数
 * - 有效范围：方法参数
 */
declare const Path: (key?: string) => (target: BaseApi, propertyKey: string, index: number) => void;
/**
 * URL 参数 `QueryString`
 * - 有效范围：方法参数
 */
declare const Query: (key?: string) => (target: BaseApi, propertyKey: string, index: number) => void;
/**
 * 参数 `Body`
 * - 有效范围：方法参数
 */
declare const Body: (target: BaseApi, propertyKey: string, index: number) => void;
/**
 * 参数 `headers`
 * - 有效范围：方法参数
 * - 合并 `BaseHeaders`
 */
declare const Headers: (key?: string) => (target: BaseApi, propertyKey: string, index: number) => void;
/**
 * Request Payload
 * - Supported body (like`POST`, `PUT`) as a body data, equivalent to `@Body`
 * - Not supported body (like `GET`, `DELETE` etc) as a `QueryString`
 */
declare const Payload: (target: BaseApi, propertyKey: string, index: number) => void;
type METHOD_TYPE = 'OPTIONS' | 'GET' | 'POST' | 'DELETE' | 'PUT' | 'HEAD' | 'PATCH' | 'JSONP' | 'FORM';
/**
 * `OPTIONS` 请求
 * - 有效范围：方法
 */
declare const OPTIONS: (url?: string, options?: HttpOptions) => (_target: BaseApi, targetKey?: string, descriptor?: PropertyDescriptor) => PropertyDescriptor | undefined;
/**
 * `GET` 请求
 * - 有效范围：方法
 */
declare const GET: (url?: string, options?: HttpOptions) => (_target: BaseApi, targetKey?: string, descriptor?: PropertyDescriptor) => PropertyDescriptor | undefined;
/**
 * `POST` 请求
 * - 有效范围：方法
 */
declare const POST: (url?: string, options?: HttpOptions) => (_target: BaseApi, targetKey?: string, descriptor?: PropertyDescriptor) => PropertyDescriptor | undefined;
/**
 * `DELETE` 请求
 * - 有效范围：方法
 */
declare const DELETE: (url?: string, options?: HttpOptions) => (_target: BaseApi, targetKey?: string, descriptor?: PropertyDescriptor) => PropertyDescriptor | undefined;
/**
 * `PUT` 请求
 * - 有效范围：方法
 */
declare const PUT: (url?: string, options?: HttpOptions) => (_target: BaseApi, targetKey?: string, descriptor?: PropertyDescriptor) => PropertyDescriptor | undefined;
/**
 * `HEAD` 请求
 * - 有效范围：方法
 */
declare const HEAD: (url?: string, options?: HttpOptions) => (_target: BaseApi, targetKey?: string, descriptor?: PropertyDescriptor) => PropertyDescriptor | undefined;
/**
 * `PATCH` 请求
 * - 有效范围：方法
 */
declare const PATCH: (url?: string, options?: HttpOptions) => (_target: BaseApi, targetKey?: string, descriptor?: PropertyDescriptor) => PropertyDescriptor | undefined;
/**
 * `JSONP` 请求
 * - 有效范围：方法
 */
declare const JSONP: (url?: string, options?: HttpOptions) => (_target: BaseApi, targetKey?: string, descriptor?: PropertyDescriptor) => PropertyDescriptor | undefined;
/**
 * `FORM` 请求
 * - 有效范围：方法
 */
declare const FORM: (url?: string, options?: HttpOptions) => (_target: BaseApi, targetKey?: string, descriptor?: PropertyDescriptor) => PropertyDescriptor | undefined;

/**
 * Whether to customize the handling of exception messages
 *
 * 是否自定义处理异常消息
 *
 * @example
 * this.http.post(`login`, {
 *  name: 'cipchk', pwd: '123456'
 * }, {
 *  context: new HttpContext()
 *              .set(ALLOW_ANONYMOUS, true)
 *              .set(CUSTOM_ERROR, true)
 * }).subscribe({
 *  next: console.log,
 *  error: console.log
 * });
 */
declare const CUSTOM_ERROR: HttpContextToken<boolean>;
/**
 * Whether to ignore API prefixes
 *
 * 是否忽略API前缀
 *
 * @example
 * // When environment.api.baseUrl set '/api'
 *
 * this.http.get(`/path`) // Request Url: /api/path
 * this.http.get(`/path`, { context: new HttpContext().set(IGNORE_BASE_URL, true) }) // Request Url: /path
 */
declare const IGNORE_BASE_URL: HttpContextToken<boolean>;
/**
 * Whether to return raw response body
 *
 * 是否原样返回请求Body
 */
declare const RAW_BODY: HttpContextToken<boolean>;

type LocaleData = Record<string, NzSafeAny>;
interface ExceptionLocaleData extends LocaleData {
    403: string;
    404: string;
    500: string;
    backToHome: string;
}
interface NoticeIconLocaleData extends LocaleData {
    emptyText: string;
    clearText: string;
}
interface ReuseTabLocaleData extends LocaleData {
    close: string;
    closeOther: string;
    closeRight: string;
    refresh: string;
}
interface TagSelectLocaleData extends LocaleData {
    expand: string;
    collapse: string;
}
interface MiniProgressLocaleData extends LocaleData {
    target: string;
}
interface STLocaleData extends LocaleData {
    total: string;
    filterConfirm: string;
    filterReset: string;
}
interface SFLocaleData extends LocaleData {
    submit: string;
    reset: string;
    search: string;
    edit: string;
    addText: string;
    removeText: string;
    checkAllText: string;
    error: SFErrorLocaleData;
}
interface SFErrorLocaleData extends LocaleData {
    'false schema': string;
    $ref: string;
    additionalItems: string;
    additionalProperties: string;
    anyOf: string;
    dependencies: string;
    enum: string;
    format: string;
    type: string;
    required: string;
    maxLength: string;
    minLength: string;
    minimum: string;
    formatMinimum: string;
    maximum: string;
    formatMaximum: string;
    maxItems: string;
    minItems: string;
    maxProperties: string;
    minProperties: string;
    multipleOf: string;
    not: string;
    oneOf: string;
    pattern: string;
    uniqueItems: string;
    custom: string;
    propertyNames: string;
    patternRequired: string;
    switch: string;
    const: string;
    contains: string;
    formatExclusiveMaximum: string;
    formatExclusiveMinimum: string;
    if: string;
}
interface OnboardingLocaleData extends LocaleData {
    skip: string;
    prev: string;
    next: string;
    done: string;
}
interface FullLocaleData {
    abbr: string;
    exception: ExceptionLocaleData;
    noticeIcon: NoticeIconLocaleData;
    reuseTab: ReuseTabLocaleData;
    tagSelect: TagSelectLocaleData;
    onboarding: OnboardingLocaleData;
    miniProgress: MiniProgressLocaleData;
    st: STLocaleData;
    sf: SFLocaleData;
}

declare const DELON_LOCALE: InjectionToken<FullLocaleData>;

declare class DelonLocaleService {
    private defLocale;
    private _locale;
    private change$;
    constructor();
    get change(): Observable<FullLocaleData>;
    setLocale(locale: FullLocaleData): void;
    valueSignal<K extends keyof FullLocaleData>(key: K): Signal<FullLocaleData[K]>;
    get locale(): FullLocaleData;
    getData<K extends keyof FullLocaleData>(key: K): FullLocaleData[K];
    static ɵfac: i0.ɵɵFactoryDeclaration<DelonLocaleService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DelonLocaleService>;
}
declare function DELON_LOCALE_SERVICE_PROVIDER_FACTORY(exist: DelonLocaleService): DelonLocaleService;
declare const DELON_LOCALE_SERVICE_PROVIDER: Provider;

declare class DelonLocaleModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DelonLocaleModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DelonLocaleModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DelonLocaleModule>;
}

declare const _default$j: FullLocaleData;

declare const _default$i: FullLocaleData;

declare const _default$h: FullLocaleData;

declare const _default$g: FullLocaleData;

declare const _default$f: FullLocaleData;

declare const _default$e: FullLocaleData;

declare const _default$d: FullLocaleData;

declare const _default$c: FullLocaleData;

declare const _default$b: FullLocaleData;

declare const _default$a: FullLocaleData;

declare const _default$9: FullLocaleData;

declare const _default$8: FullLocaleData;

declare const _default$7: FullLocaleData;

declare const _default$6: FullLocaleData;

declare const _default$5: FullLocaleData;

declare const _default$4: FullLocaleData;

declare const _default$3: FullLocaleData;

declare const _default$2: FullLocaleData;

declare const _default$1: FullLocaleData;

declare const _default: FullLocaleData;

declare class DatePipe implements PipeTransform {
    private nzI18n;
    private cog;
    transform(value: Date | string | number, formatString?: string | null): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<DatePipe, "_date", true>;
}

/**
 * [Document](https://ng-alain.com/theme/keys)
 */
declare class KeysPipe implements PipeTransform {
    transform(value: NzSafeAny, keyIsNumber?: boolean): NzSafeAny[];
    static ɵfac: i0.ɵɵFactoryDeclaration<KeysPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<KeysPipe, "keys", true>;
}

type YNMode = 'full' | 'icon' | 'text';
interface YNOptions {
    yes?: string;
    no?: string;
    mode?: YNMode;
}
declare function yn(value: boolean, opt?: YNOptions): string;
declare class YNPipe implements PipeTransform {
    private readonly dom;
    transform(value: boolean, yes?: string, no?: string, mode?: YNMode, isSafeHtml?: boolean): SafeHtml;
    static ɵfac: i0.ɵɵFactoryDeclaration<YNPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<YNPipe, "yn", true>;
}

declare class HTMLPipe implements PipeTransform {
    private readonly dom;
    transform(html: string): string | SafeHtml;
    static ɵfac: i0.ɵɵFactoryDeclaration<HTMLPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<HTMLPipe, "html", true>;
}

declare class URLPipe implements PipeTransform {
    private readonly dom;
    transform(url: string): string | SafeUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<URLPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<URLPipe, "url", true>;
}

interface Environment {
    [key: string]: NzSafeAny;
    /**
     * Whether production environment
     *
     * 是否生产环境
     */
    production: boolean;
    /**
     * Whether uses the URL fragment instead of the history API.
     *
     * 是否启用 URL 片段（#）代替 history API
     */
    useHash: boolean;
    /**
     * API configuration
     *
     * API配置
     */
    api: ApiConfig;
    /**
     * Defined imported modules in `app-config.ts`
     *
     * 定义在 `app-config.ts` 导入的模块列表
     */
    modules?: Array<Type<NzSafeAny> | ModuleWithProviders<NzSafeAny> | NzSafeAny[]>;
    /**
     * Defined providers in `app-config.ts`
     *
     * 定义在 `app-config.ts` 导入的 providers 列表
     */
    providers?: Array<Provider | EnvironmentProviders>;
    /**
     * Defined interceptorFns in `app-config.ts`
     *
     * 定义在 `app-config.ts` 导入的 interceptorFns 列表
     */
    interceptorFns?: HttpInterceptorFn[];
}
interface ApiConfig {
    [key: string]: NzSafeAny;
    /**
     * Specify API prefix
     *
     * 指定API前缀
     */
    baseUrl: string;
    /**
     * Whether to enable automatic refresh token
     *
     * 是否启用自动刷新Token
     */
    refreshTokenEnabled: boolean;
    /**
     * Token refresh type, `re-request` Trigger token refresh request when the detection time expires, and then re-send the original request, `auth-refresh` uses `@delon/auth` to periodically check whether it has expired
     *
     * 刷新Token方式，`re-request` 当检测过期时间到期时先发起刷新Token请求，再重新发起原请求，`auth-refresh` 利用 `@delon/auth` 来定期检测是否过期
     */
    refreshTokenType: 're-request' | 'auth-refresh';
}

declare class AlainThemeModule {
    constructor(iconSrv: NzIconService);
    static forRoot(): ModuleWithProviders<AlainThemeModule>;
    static forChild(): ModuleWithProviders<AlainThemeModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlainThemeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AlainThemeModule, never, [typeof i1.CommonModule, typeof i2.RouterModule, typeof i3.OverlayModule, typeof i4.NzI18nModule, typeof DatePipe, typeof KeysPipe, typeof YNPipe, typeof I18nPipe, typeof HTMLPipe, typeof URLPipe], [typeof DatePipe, typeof KeysPipe, typeof YNPipe, typeof I18nPipe, typeof HTMLPipe, typeof URLPipe, typeof DelonLocaleModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AlainThemeModule>;
}

interface AlainProvideOptions {
    config?: AlainConfig;
    /**
     * Initialize default language
     *
     * 初始化默认语言
     */
    defaultLang?: AlainProvideLang;
    i18nClass?: Type<NzSafeAny>;
    icons?: IconDefinition[];
}
interface AlainProvideLang {
    abbr: string;
    ng: NzSafeAny;
    zorro: NzSafeAny;
    date: NzSafeAny;
    delon: NzSafeAny;
}
declare function provideAlain(options: AlainProvideOptions): EnvironmentProviders;

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
declare class PreloadOptionalModules implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<NzSafeAny>): Observable<NzSafeAny>;
}

declare const VERSION: Version;

export { ALAIN_I18N_TOKEN, ALAIN_SETTING_DEFAULT, ALAIN_SETTING_KEYS, AlainI18NGuardService, AlainI18NServiceFake, AlainI18nBaseService, AlainThemeModule, BaseApi, BaseHeaders, BaseUrl, Body, CUSTOM_ERROR, DELETE, DELON_LOCALE, DELON_LOCALE_SERVICE_PROVIDER, DELON_LOCALE_SERVICE_PROVIDER_FACTORY, DatePipe, DelonLocaleModule, DelonLocaleService, DrawerHelper, FORM, GET, HEAD, HTMLPipe, HTML_DIR, Headers, I18nPipe, IGNORE_BASE_URL, JSONP, KeysPipe, LTR, MenuService, ModalHelper, OPTIONS, PATCH, POST, PUT, Path, Payload, PreloadOptionalModules, Query, RAW_BODY, REP_MAX, RTL, RTLService, RTL_DELON_COMPONENTS, RTL_DIRECTION, RTL_NZ_COMPONENTS, ResponsiveService, SPAN_MAX, SettingsService, TitleService, URLPipe, VERSION, YNPipe, _HttpClient, alainI18nCanActivate, alainI18nCanActivateChild, _default$4 as ar_SA, _default$d as el_GR, _default$j as en_US, _default$7 as es_ES, _default$8 as fr_FR, _default$b as hr_HR, _default$3 as id_ID, _default$6 as it_IT, _default$a as ja_JP, _default$2 as km_KH, _default$c as ko_KR, _default$1 as ms_MY, _default$e as pl_PL, provideAlain, _default$9 as sl_SI, stepPreloader, _default as th_TH, _default$f as tr_TR, _default$5 as vi_VN, yn, _default$i as zh_CN, _default$h as zh_HK, _default$g as zh_TW };
export type { AlainI18NService, AlainProvideLang, AlainProvideOptions, ApiConfig, App, DrawerHelperOptions, Environment, ExceptionLocaleData, FullLocaleData, HttpObserve, HttpOptions, Layout, LocaleData, METHOD_TYPE, Menu, MenuIcon, MenuInner, MiniProgressLocaleData, ModalHelperDragOptions, ModalHelperOptions, NoticeIconLocaleData, OnboardingLocaleData, REP_TYPE, ReuseTabLocaleData, RouteTitle, SFErrorLocaleData, SFLocaleData, STLocaleData, SettingsKeys, SettingsNotify, TagSelectLocaleData, User, YNMode, YNOptions, _HttpHeaders };
