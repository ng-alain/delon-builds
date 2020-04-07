import { Injector, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuService } from '@delon/theme';
import { ReuseTabCached, ReuseTabMatchMode, ReuseTabNotify, ReuseTitle } from './reuse-tab.interfaces';
/**
 * 路由复用类，提供复用所需要一些基本接口
 *
 * **注：** 所有缓存数据来源于路由离开后才会产生
 */
export declare class ReuseTabService implements OnDestroy {
    private injector;
    private menuService;
    private _inited;
    private _max;
    private _keepingScroll;
    private _cachedChange;
    private _cached;
    private _titleCached;
    private _closableCached;
    private _router$;
    private removeUrlBuffer;
    private positionBuffer;
    debug: boolean;
    mode: ReuseTabMatchMode;
    /** 排除规则，限 `mode=URL` */
    excludes: RegExp[];
    private readonly snapshot;
    readonly inited: boolean;
    /** 当前路由地址 */
    readonly curUrl: string;
    /** 允许最多复用多少个页面，取值范围 `2-100`，值发生变更时会强制关闭且忽略可关闭条件 */
    max: number;
    keepingScroll: boolean;
    keepingScrollContainer: Element;
    /** 获取已缓存的路由 */
    readonly items: ReuseTabCached[];
    /** 获取当前缓存的路由总数 */
    readonly count: number;
    /** 订阅缓存变更通知 */
    readonly change: Observable<ReuseTabNotify | null>;
    /** 自定义当前标题 */
    title: string | ReuseTitle;
    /** 获取指定路径缓存所在位置，`-1` 表示无缓存 */
    index(url: string): number;
    /** 获取指定路径缓存是否存在 */
    exists(url: string): boolean;
    /** 获取指定路径缓存 */
    get(url?: string): ReuseTabCached | null;
    private remove;
    /**
     * 根据URL移除标签
     *
     * @param [includeNonCloseable=false] 是否强制包含不可关闭
     */
    close(url: string, includeNonCloseable?: boolean): boolean;
    /**
     * 清除右边
     *
     * @param [includeNonCloseable=false] 是否强制包含不可关闭
     */
    closeRight(url: string, includeNonCloseable?: boolean): boolean;
    /**
     * 清除所有缓存
     *
     * @param [includeNonCloseable=false] 是否强制包含不可关闭
     */
    clear(includeNonCloseable?: boolean): void;
    /**
     * 移动缓存数据
     * @param url 要移动的URL地址
     * @param position 新位置，下标从 `0` 开始
     *
     * @example
     * ```
     * // source
     * [ '/a/1', '/a/2', '/a/3', '/a/4', '/a/5' ]
     * move('/a/1', 2);
     * // output
     * [ '/a/2', '/a/3', '/a/1', '/a/4', '/a/5' ]
     * move('/a/1', -1);
     * // output
     * [ '/a/2', '/a/3', '/a/4', '/a/5', '/a/1' ]
     * ```
     */
    move(url: string, position: number): void;
    /**
     * 强制关闭当前路由（包含不可关闭状态），并重新导航至 `newUrl` 路由
     */
    replace(newUrl: string): void;
    /**
     * 获取标题，顺序如下：
     *
     * 1. 组件内使用 `ReuseTabService.title = 'new title'` 重新指定文本
     * 2. 路由配置中 data 属性中包含 titleI18n > title
     * 3. 菜单数据中 text 属性
     *
     * @param url 指定URL
     * @param route 指定路由快照
     */
    getTitle(url: string, route?: ActivatedRouteSnapshot): ReuseTitle;
    /**
     * 清除标题缓存
     */
    clearTitleCached(): void;
    /** 自定义当前 `closable` 状态 */
    closable: boolean;
    /**
     * 获取 `closable` 状态，顺序如下：
     *
     * 1. 组件内使用 `ReuseTabService.closable = true` 重新指定 `closable` 状态
     * 2. 路由配置中 data 属性中包含 `reuseClosable`
     * 3. 菜单数据中 `reuseClosable` 属性
     *
     * @param url 指定URL
     * @param route 指定路由快照
     */
    getClosable(url: string, route?: ActivatedRouteSnapshot): boolean;
    /**
     * 清空 `closable` 缓存
     */
    clearClosableCached(): void;
    getTruthRoute(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot;
    /**
     * 根据快照获取URL地址
     */
    getUrl(route: ActivatedRouteSnapshot): string;
    /**
     * 检查快照是否允许被复用
     */
    can(route: ActivatedRouteSnapshot): boolean;
    /**
     * 刷新，触发一个 refresh 类型事件
     */
    refresh(data?: any): void;
    private destroy;
    private di;
    constructor(injector: Injector, menuService: MenuService);
    init(): void;
    private getMenu;
    private runHook;
    private hasInValidRoute;
    /**
     * 决定是否允许路由复用，若 `true` 会触发 `store`
     */
    shouldDetach(route: ActivatedRouteSnapshot): boolean;
    /**
     * 存储
     */
    store(_snapshot: ActivatedRouteSnapshot, _handle: any): void;
    /**
     * 决定是否允许应用缓存数据
     */
    shouldAttach(route: ActivatedRouteSnapshot): boolean;
    /**
     * 提取复用数据
     */
    retrieve(route: ActivatedRouteSnapshot): {} | null;
    /**
     * 决定是否应该进行复用路由处理
     */
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean;
    /**
     * 获取 `keepingScroll` 状态，顺序如下：
     *
     * 1. 路由配置中 data 属性中包含 `keepingScroll`
     * 2. 菜单数据中 `keepingScroll` 属性
     * 3. 组件 `keepingScroll` 值
     */
    getKeepingScroll(url: string, route?: ActivatedRouteSnapshot): boolean;
    private readonly isDisabledInRouter;
    private readonly ss;
    private initScroll;
    ngOnDestroy(): void;
}
