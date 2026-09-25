import * as i0 from "@angular/core";
import { EnvironmentProviders, EventEmitter, InjectionToken, OnChanges, OnDestroy, OnInit, Provider, SimpleChange, SimpleChanges, TemplateRef } from "@angular/core";
import * as i2 from "@angular/router";
import { ActivatedRouteSnapshot, RouteReuseStrategy } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { NzSafeAny } from "ng-zorro-antd/core/types";
import * as i1 from "@angular/common";
import * as i3 from "@delon/theme";
import * as i4 from "ng-zorro-antd/menu";
import * as i5 from "ng-zorro-antd/tabs";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "@angular/cdk/overlay";
declare namespace reuse_tab_context_component_d_exports {
  export { ReuseTabContextComponent };
}
export declare class ReuseTabContextComponent {
  private readonly srv;
  set i18n(value: ReuseContextI18n | undefined);
  readonly change: EventEmitter<ReuseContextCloseEvent>;
  constructor();
  static ɵfac: i0.ɵɵFactoryDeclaration<ReuseTabContextComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<ReuseTabContextComponent, "reuse-tab-context", never, {
    "i18n": {
      "alias": "i18n";
      "required": false;
    };
  }, {
    "change": "change";
  }, never, never, true, never>;
}
/**
 * 复用匹配模式
 */
export declare enum ReuseTabMatchMode {
  /**
   * （推荐）按菜单 `Menu` 配置
   *
   * 可复用：
   * - `{ text:'Dashboard' }`
   * - `{ text:'Dashboard', reuse: true }`
   *
   * 不可复用：
   * - `{ text:'Dashboard', reuse: false }`
   */
  Menu = 0,
  /**
   * 按菜单 `Menu` 强制配置
   *
   * 可复用：
   * - `{ text:'Dashboard', reuse: true }`
   *
   * 不可复用：
   * - `{ text:'Dashboard' }`
   * - `{ text:'Dashboard', reuse: false }`
   */
  MenuForce = 1,
  /**
   * 对所有路由有效，可以配合 `excludes` 过滤无须复用路由
   */
  URL = 2
}
export type ReuseTabRouteParamMatchMode = 'strict' | 'loose' | ((future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot) => boolean);
export interface ReuseTitle {
  text?: string;
  i18n?: string;
}
export interface ReuseTabCached {
  title: ReuseTitle;
  url: string;
  /** 是否允许关闭，默认：`true` */
  closable?: boolean;
  /** 当前滚动条位置 */
  position?: [number, number] | null;
  _snapshot?: ActivatedRouteSnapshot;
  _handle?: ReuseComponentHandle;
}
export interface ReuseTabNotify {
  /** 事件类型 */
  active: 'add' | 'override' | 'title' | 'clear' | 'closable' | 'close' | 'closeRight' | 'move' | 'refresh' | 'loadState';
  url?: string;
  title?: ReuseTitle;
  item?: ReuseTabCached;
  list?: ReuseTabCached[];
  [key: string]: NzSafeAny;
}
export interface ReuseItem {
  url: string;
  title: string;
  closable: boolean;
  index: number;
  active: boolean;
  last: boolean;
  /** 当前滚动条位置 */
  position?: [number, number] | null;
}
export interface ReuseContextEvent {
  event: MouseEvent;
  item: ReuseItem;
  comp?: ReuseTabContextComponent;
  customContextMenu?: ReuseCustomContextMenu[];
}
export type CloseType = 'close' | 'closeOther' | 'closeRight' | 'custom' | 'refresh' | null;
export interface ReuseContextCloseEvent {
  type: CloseType;
  item: ReuseItem;
  includeNonCloseable: boolean;
}
export interface ReuseContextI18n {
  close?: string;
  closeOther?: string;
  closeRight?: string;
  refresh?: string;
}
export interface ReuseCustomContextMenu {
  id: string;
  title: string;
  fn: (item: ReuseItem, menu: ReuseCustomContextMenu) => void;
  disabled?: (item: ReuseItem) => boolean;
}
export interface ReuseComponentHandle {
  componentRef: ReuseComponentRef;
}
export interface ReuseComponentRef {
  instance: ReuseComponentInstance;
}
export type ReuseHookTypes = '_onReuseInit' | '_onReuseDestroy';
export type ReuseHookOnReuseInitType = 'init' | 'refresh';
export interface ReuseComponentInstance {
  _onReuseInit: (type: ReuseHookOnReuseInitType) => void;
  _onReuseDestroy: () => void;
  destroy: () => void;
}
export type ReuseCanClose = (options: {
  item: ReuseItem;
  includeNonCloseable: boolean;
}) => Observable<boolean>;
declare namespace reuse_tab_context_menu_component_d_exports {
  export { ReuseTabContextMenuComponent };
}
export declare class ReuseTabContextMenuComponent implements OnInit {
  private locale;
  private _i18n;
  set i18n(value: ReuseContextI18n);
  get i18n(): ReuseContextI18n;
  item: ReuseItem;
  event: MouseEvent;
  customContextMenu: ReuseCustomContextMenu[];
  readonly close: EventEmitter<ReuseContextCloseEvent>;
  get includeNonCloseable(): boolean;
  private notify;
  ngOnInit(): void;
  click(e: MouseEvent, type: CloseType, custom?: ReuseCustomContextMenu): void;
  isDisabled(custom: ReuseCustomContextMenu): boolean;
  closeMenu(event: MouseEvent): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<ReuseTabContextMenuComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<ReuseTabContextMenuComponent, "reuse-tab-context-menu", never, {
    "i18n": {
      "alias": "i18n";
      "required": false;
    };
    "item": {
      "alias": "item";
      "required": false;
    };
    "event": {
      "alias": "event";
      "required": false;
    };
    "customContextMenu": {
      "alias": "customContextMenu";
      "required": false;
    };
  }, {
    "close": "close";
  }, never, never, true, never>;
}
declare namespace reuse_tab_context_directive_d_exports {
  export { ReuseTabContextDirective };
}
export declare class ReuseTabContextDirective {
  private readonly srv;
  readonly item: import("@angular/core").InputSignal<ReuseItem>;
  readonly customContextMenu: import("@angular/core").InputSignal<ReuseCustomContextMenu[]>;
  protected _onContextMenu(event: MouseEvent): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<ReuseTabContextDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<ReuseTabContextDirective, "[reuse-tab-context-menu]", ["reuseTabContextMenu"], {
    "item": {
      "alias": "reuse-tab-context-menu";
      "required": true;
      "isSignal": true;
    };
    "customContextMenu": {
      "alias": "customContextMenu";
      "required": true;
      "isSignal": true;
    };
  }, {}, never, never, true, never>;
}
export declare class ReuseTabContextService {
  private readonly overlay;
  private ref;
  i18n?: ReuseContextI18n;
  show: Subject<ReuseContextEvent>;
  close: Subject<ReuseContextCloseEvent>;
  remove(): void;
  open(context: ReuseContextEvent): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<ReuseTabContextService, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
declare namespace reuse_tab_component_d_exports {
  export { ReuseTabComponent };
}
export declare class ReuseTabComponent implements OnInit, OnChanges {
  private readonly srv;
  private readonly router;
  private readonly route;
  private readonly i18nSrv;
  private readonly doc;
  private readonly platform;
  private readonly stateKey;
  private readonly stateSrv;
  private readonly tabset;
  private destroy$;
  protected dir: import("@angular/core").WritableSignal<import("@angular/cdk/bidi").Direction>;
  readonly list: import("@angular/core").WritableSignal<ReuseItem[]>;
  protected item?: ReuseItem;
  protected pos: import("@angular/core").WritableSignal<number>;
  readonly mode: import("@angular/core").InputSignal<ReuseTabMatchMode>;
  readonly i18n: import("@angular/core").InputSignal<ReuseContextI18n | undefined>;
  readonly debug: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly max: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
  readonly tabMaxWidth: import("@angular/core").InputSignalWithTransform<number | undefined, unknown>;
  readonly excludes: import("@angular/core").InputSignal<RegExp[] | undefined>;
  readonly allowClose: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly keepingScroll: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly storageState: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly keepingScrollContainer: import("@angular/core").InputSignal<string | Element | undefined>;
  readonly customContextMenu: import("@angular/core").InputSignal<ReuseCustomContextMenu[]>;
  readonly tabBarExtraContent: import("@angular/core").InputSignal<TemplateRef<void> | undefined>;
  readonly tabBarGutter: import("@angular/core").InputSignal<number | undefined>;
  readonly tabBarStyle: import("@angular/core").InputSignal<Record<string, string> | null>;
  readonly tabType: import("@angular/core").InputSignal<"line" | "card">;
  readonly routeParamMatchMode: import("@angular/core").InputSignal<ReuseTabRouteParamMatchMode>;
  readonly disabled: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly titleRender: import("@angular/core").InputSignal<TemplateRef<{
    $implicit: ReuseItem;
  }> | undefined>;
  readonly canClose: import("@angular/core").InputSignal<ReuseCanClose | undefined>;
  readonly trackByFn: import("@angular/core").InputSignal<(item: ReuseItem) => NzSafeAny>;
  readonly change: import("@angular/core").OutputEmitterRef<ReuseItem>;
  readonly close: import("@angular/core").OutputEmitterRef<ReuseItem | null>;
  private genTit;
  private get curUrl();
  private genCurItem;
  private genList;
  private updateTitle;
  private refresh;
  private saveState;
  contextMenuChange(res: ReuseContextCloseEvent): void;
  _to(index: number, cb?: () => void): void;
  _close(e: Event | null, idx: number, includeNonCloseable: boolean): boolean;
  /**
   * 设置激活路由的实例，在 `src/app/layout/basic/basic.ts` 修改：
   *
   * @example
   * <reuse-tab #reuseTab></reuse-tab>
   * <router-outlet (activate)="reuseTab.activate($event)" (attach)="reuseTab.activate($event)"></router-outlet>
   */
  activate(instance: NzSafeAny): void;
  private updatePos;
  ngOnInit(): void;
  ngOnChanges(changes: { [P in keyof this]?: SimpleChange; } & SimpleChanges): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<ReuseTabComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<ReuseTabComponent, "reuse-tab, [reuse-tab]", ["reuseTab"], {
    "mode": {
      "alias": "mode";
      "required": false;
      "isSignal": true;
    };
    "i18n": {
      "alias": "i18n";
      "required": false;
      "isSignal": true;
    };
    "debug": {
      "alias": "debug";
      "required": false;
      "isSignal": true;
    };
    "max": {
      "alias": "max";
      "required": false;
      "isSignal": true;
    };
    "tabMaxWidth": {
      "alias": "tabMaxWidth";
      "required": false;
      "isSignal": true;
    };
    "excludes": {
      "alias": "excludes";
      "required": false;
      "isSignal": true;
    };
    "allowClose": {
      "alias": "allowClose";
      "required": false;
      "isSignal": true;
    };
    "keepingScroll": {
      "alias": "keepingScroll";
      "required": false;
      "isSignal": true;
    };
    "storageState": {
      "alias": "storageState";
      "required": false;
      "isSignal": true;
    };
    "keepingScrollContainer": {
      "alias": "keepingScrollContainer";
      "required": false;
      "isSignal": true;
    };
    "customContextMenu": {
      "alias": "customContextMenu";
      "required": false;
      "isSignal": true;
    };
    "tabBarExtraContent": {
      "alias": "tabBarExtraContent";
      "required": false;
      "isSignal": true;
    };
    "tabBarGutter": {
      "alias": "tabBarGutter";
      "required": false;
      "isSignal": true;
    };
    "tabBarStyle": {
      "alias": "tabBarStyle";
      "required": false;
      "isSignal": true;
    };
    "tabType": {
      "alias": "tabType";
      "required": false;
      "isSignal": true;
    };
    "routeParamMatchMode": {
      "alias": "routeParamMatchMode";
      "required": false;
      "isSignal": true;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
      "isSignal": true;
    };
    "titleRender": {
      "alias": "titleRender";
      "required": false;
      "isSignal": true;
    };
    "canClose": {
      "alias": "canClose";
      "required": false;
      "isSignal": true;
    };
    "trackByFn": {
      "alias": "trackByFn";
      "required": false;
      "isSignal": true;
    };
  }, {
    "change": "change";
    "close": "close";
  }, never, never, true, never>;
}
export declare class ReuseTabService implements OnDestroy {
  private readonly injector;
  private readonly menuService;
  private readonly cached;
  private readonly stateKey;
  private readonly stateSrv;
  private _inited;
  private _max;
  private _keepingScroll;
  private _cachedChange;
  private _router$?;
  private removeUrlBuffer;
  private positionBuffer;
  componentRef?: ReuseComponentRef;
  debug: boolean;
  routeParamMatchMode: ReuseTabRouteParamMatchMode;
  mode: ReuseTabMatchMode;
  /** 排除规则，限 `mode=URL` */
  excludes: RegExp[];
  storageState: boolean;
  private get snapshot();
  /**
   * Get init status
   *
   * 是否已经初始化完成
   */
  get inited(): boolean;
  /**
   * Current routing address
   *
   * 当前路由地址
   */
  get curUrl(): string;
  /**
   * 允许最多复用多少个页面，取值范围 `2-100`，值发生变更时会强制关闭且忽略可关闭条件
   */
  set max(value: number);
  set keepingScroll(value: boolean);
  get keepingScroll(): boolean;
  keepingScrollContainer?: Element | null;
  /** 获取已缓存的路由 */
  get items(): ReuseTabCached[];
  /** 获取当前缓存的路由总数 */
  get count(): number;
  /** 订阅缓存变更通知 */
  get change(): Observable<ReuseTabNotify | null>;
  /** 自定义当前标题 */
  set title(value: string | ReuseTitle);
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
   *
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
  set closable(value: boolean);
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
  isExclude(url: string): boolean;
  /**
   * 刷新，触发一个 refresh 类型事件
   */
  refresh(data?: NzSafeAny): void;
  private destroy;
  private di;
  constructor();
  init(): void;
  private loadState;
  private getMenu;
  runHook(method: ReuseHookTypes, comp: ReuseComponentRef | number | undefined, type?: ReuseHookOnReuseInitType): void;
  private hasInValidRoute;
  /**
   * 决定是否允许路由复用，若 `true` 会触发 `store`
   */
  shouldDetach(route: ActivatedRouteSnapshot): boolean;
  saveCache(snapshot: ActivatedRouteSnapshot, _handle?: NzSafeAny, pos?: number): void;
  /**
   * 存储
   */
  store(_snapshot: ActivatedRouteSnapshot, _handle: NzSafeAny): void;
  /**
   * 决定是否允许应用缓存数据
   */
  shouldAttach(route: ActivatedRouteSnapshot): boolean;
  /**
   * 提取复用数据
   */
  retrieve(route: ActivatedRouteSnapshot): NzSafeAny | null;
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
  private get isDisabledInRouter();
  private get ss();
  private initScroll;
  ngOnDestroy(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<ReuseTabService, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export declare class ReuseTabStrategy implements RouteReuseStrategy {
  private readonly srv;
  shouldDetach(route: ActivatedRouteSnapshot): boolean;
  store(route: ActivatedRouteSnapshot, handle: unknown): void;
  shouldAttach(route: ActivatedRouteSnapshot): boolean;
  retrieve(route: ActivatedRouteSnapshot): NzSafeAny | null;
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean;
}
export declare class ReuseTabModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<ReuseTabModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<ReuseTabModule, never, [typeof i1.CommonModule, typeof i2.RouterModule, typeof i3.DelonLocaleModule, typeof i4.NzMenuModule, typeof i5.NzTabsModule, typeof i6.NzIconModule, typeof i7.OverlayModule, typeof ReuseTabComponent, typeof ReuseTabContextMenuComponent, typeof ReuseTabContextComponent, typeof ReuseTabContextDirective], [typeof ReuseTabComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<ReuseTabModule>;
}
/**
 * Triggered when the current route is in the reusing process, The values of `type` are:
 *
 * - `init` when routing process 当路由复用时
 * - `refresh` when refresh action via tab 当通过标签刷新时
 */
export interface OnReuseInit {
  _onReuseInit(type?: ReuseHookOnReuseInitType): void;
}
/**
 * Triggered when the current route allows reusing and leave route.
 */
export interface OnReuseDestroy {
  _onReuseDestroy(): void;
}
export declare const REUSE_TAB_STORAGE_KEY: InjectionToken<string>;
export declare const REUSE_TAB_STORAGE_STATE: InjectionToken<ReuseTabStorageState>;
export interface ReuseTabStorageState {
  get(key: string): ReuseItem[];
  update(key: string, value: ReuseItem[]): boolean;
  remove(key: string): void;
}
export declare class ReuseTabLocalStorageState implements ReuseTabStorageState {
  get(key: string): ReuseItem[];
  update(key: string, value: ReuseItem[]): boolean;
  remove(key: string): void;
}
/**
 * Storage manager that can change rules by implementing `get`, `set` accessors
 */
export declare const REUSE_TAB_CACHED_MANAGER: InjectionToken<ReuseTabCachedManager>;
interface ReuseTabCachedManager {
  list: ReuseTabCached[];
  title: Record<string, ReuseTitle>;
  closable: Record<string, boolean>;
}
declare class ReuseTabCachedManagerFactory implements ReuseTabCachedManager {
  list: ReuseTabCached[];
  title: Record<string, ReuseTitle>;
  closable: Record<string, boolean>;
}
export declare enum ReuseTabFeatureKind {
  CacheManager = 0,
  Store = 1
}
export interface ReuseTabFeature<KindT extends ReuseTabFeatureKind> {
  ɵkind: KindT;
  ɵproviders: Provider[];
}
/**
 * Configures reuse-tab to be available for injection.
 *
 * @see {@link withLocalStorage}
 * @see {@link withCacheManager}
 */
export declare function provideReuseTabConfig(options?: {
  debug?: boolean;
  mode?: ReuseTabMatchMode;
  routeParamMatchMode?: ReuseTabRouteParamMatchMode;
  max?: number;
  excludes?: RegExp[];
  storeKey?: string;
  cacheManager?: ReuseTabFeature<ReuseTabFeatureKind.CacheManager>;
  store?: ReuseTabFeature<ReuseTabFeatureKind.Store>;
}): EnvironmentProviders;
export declare function withCacheManager(): ReuseTabFeature<ReuseTabFeatureKind.CacheManager>;
export declare function withLocalStorage(): ReuseTabFeature<ReuseTabFeatureKind.Store>;
export type { ReuseTabCachedManager };