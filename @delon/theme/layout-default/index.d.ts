import * as i0 from '@angular/core';
import { TemplateRef, QueryList, OnInit, OnDestroy, EventEmitter, AfterViewInit } from '@angular/core';
import * as i8 from '@angular/router';
import { Event } from '@angular/router';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Direction } from '@angular/cdk/bidi';
import { SafeHtml } from '@angular/platform-browser';
import { MenuInner, Menu, App } from '@delon/theme';
import * as i7 from '@angular/common';
import * as i9 from 'ng-zorro-antd/tooltip';
import * as i10 from 'ng-zorro-antd/icon';
import * as i11 from 'ng-zorro-antd/avatar';
import * as i12 from 'ng-zorro-antd/dropdown';
import * as i13 from 'ng-zorro-antd/badge';
import { Observable } from 'rxjs';

type LayoutDefaultHeaderItemHidden = 'pc' | 'mobile' | 'none';
type LayoutDefaultHeaderItemDirection = 'left' | 'middle' | 'right';
interface LayoutDefaultOptions {
    /**
     * Custom Logo Area
     *
     * 自定义 Logo 区域
     */
    logo?: TemplateRef<NzSafeAny> | null;
    /**
     * Logo url of expanded status, default: `./assets/logo-full.svg`
     *
     * 展开时 Logo 地址，默认：`./assets/logo-full.svg`
     */
    logoExpanded?: string;
    /**
     * Logo url of collapsed status, default: `./assets/logo.svg`
     *
     * 收缩时 Logo 地址，默认：`./assets/logo.svg`
     */
    logoCollapsed?: string;
    /**
     * Specify the logo routing address, default: `/`
     *
     * 指定 Logo 路由地址，默认：`/`
     */
    logoLink?: string;
    /**
     * Specify a fixed logo width
     *
     * 指定固定 Logo 宽度
     */
    logoFixWidth?: number;
    /**
     * Hide the sidebar without showing the collapsed icon button, default: `false`
     *
     * 隐藏侧边栏，同时不显收缩图标按钮，默认：`false`
     */
    hideAside?: boolean;
    /**
     * Hide top bar, default: `false`
     *
     * 隐藏顶栏，默认：`false`
     */
    hideHeader?: boolean;
    /**
     * Whether to display the menu collapse button on the top bar, default: `true`
     *
     * 是否在顶栏显示菜单折叠按钮，默认：`true`
     */
    showHeaderCollapse?: boolean;
    /**
     * Whether to show the menu collapse button at the bottom of the sidebar, default: `false`
     *
     * 是否在侧边栏底部显示菜单折叠按钮，默认：`false`
     */
    showSiderCollapse?: boolean;
}

declare class LayoutDefaultHeaderItemComponent {
    host: TemplateRef<void>;
    hidden: LayoutDefaultHeaderItemHidden;
    direction: LayoutDefaultHeaderItemDirection;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultHeaderItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutDefaultHeaderItemComponent, "layout-default-header-item", never, { "hidden": { "alias": "hidden"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; }, {}, never, ["*"], false, never>;
}

declare class LayoutDefaultComponent {
    headerItems: QueryList<LayoutDefaultHeaderItemComponent>;
    get opt(): LayoutDefaultOptions;
    set options(value: LayoutDefaultOptions | null | undefined);
    asideUser: TemplateRef<void> | null;
    asideBottom: TemplateRef<NzSafeAny> | null;
    nav: TemplateRef<void> | null;
    content: TemplateRef<void> | null;
    customError?: string | null;
    fetchingStrictly: boolean;
    fetching: boolean;
    private isFetching;
    get showFetching(): boolean;
    get collapsed(): boolean;
    get collapsedIcon(): string;
    toggleCollapsed(): void;
    private readonly router;
    private readonly msgSrv;
    private readonly settings;
    private readonly el;
    private readonly renderer;
    private readonly doc;
    private readonly srv;
    constructor();
    processEv(ev: Event): void;
    private setClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutDefaultComponent, "layout-default", ["layoutDefault"], { "options": { "alias": "options"; "required": false; }; "asideUser": { "alias": "asideUser"; "required": false; }; "asideBottom": { "alias": "asideBottom"; "required": false; }; "nav": { "alias": "nav"; "required": false; }; "content": { "alias": "content"; "required": false; }; "customError": { "alias": "customError"; "required": false; }; "fetchingStrictly": { "alias": "fetchingStrictly"; "required": false; }; "fetching": { "alias": "fetching"; "required": false; }; }, {}, ["headerItems"], ["*"], false, never>;
    static ngAcceptInputType_fetchingStrictly: unknown;
    static ngAcceptInputType_fetching: unknown;
}

interface Nav extends MenuInner {
    _needIcon?: boolean;
    _text?: SafeHtml;
}
declare class LayoutDefaultNavComponent implements OnInit, OnDestroy {
    private readonly doc;
    private readonly win;
    private readonly router;
    private readonly render;
    private readonly menuSrv;
    private readonly settings;
    private readonly cdr;
    private readonly ngZone;
    private readonly sanitizer;
    private readonly directionality;
    private bodyEl;
    private destroy$;
    private floatingEl;
    dir?: Direction;
    list: Nav[];
    disabledAcl: boolean;
    autoCloseUnderPad: boolean;
    recursivePath: boolean;
    hideEmptyChildren: boolean;
    set openStrictly(value: boolean);
    maxLevelIcon: number;
    readonly select: EventEmitter<Menu>;
    get collapsed(): boolean;
    private getLinkNode;
    private floatingClickHandle;
    private clearFloating;
    private genFloating;
    private genSubNode;
    private hideAll;
    private calPos;
    showSubMenu(e: MouseEvent, item: Nav): void;
    to(item: Menu): void;
    toggleOpen(item: Nav): void;
    _click(): void;
    closeSubMenu(): void;
    private openByUrl;
    ngOnInit(): void;
    private fixHide;
    ngOnDestroy(): void;
    private get isPad();
    private underPad;
    private openAside;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultNavComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutDefaultNavComponent, "layout-default-nav", never, { "disabledAcl": { "alias": "disabledAcl"; "required": false; }; "autoCloseUnderPad": { "alias": "autoCloseUnderPad"; "required": false; }; "recursivePath": { "alias": "recursivePath"; "required": false; }; "hideEmptyChildren": { "alias": "hideEmptyChildren"; "required": false; }; "openStrictly": { "alias": "openStrictly"; "required": false; }; "maxLevelIcon": { "alias": "maxLevelIcon"; "required": false; }; }, { "select": "select"; }, never, never, false, never>;
    static ngAcceptInputType_disabledAcl: unknown;
    static ngAcceptInputType_autoCloseUnderPad: unknown;
    static ngAcceptInputType_recursivePath: unknown;
    static ngAcceptInputType_hideEmptyChildren: unknown;
    static ngAcceptInputType_openStrictly: unknown;
    static ngAcceptInputType_maxLevelIcon: unknown;
}

interface LayoutDefaultHeaderItem {
    host: TemplateRef<NzSafeAny>;
    hidden?: LayoutDefaultHeaderItemHidden;
    direction?: LayoutDefaultHeaderItemDirection;
}
declare class LayoutDefaultHeaderComponent implements AfterViewInit {
    private readonly settings;
    private readonly srv;
    private readonly cdr;
    private readonly destroy$;
    items: QueryList<LayoutDefaultHeaderItemComponent>;
    left: LayoutDefaultHeaderItem[];
    middle: LayoutDefaultHeaderItem[];
    right: LayoutDefaultHeaderItem[];
    get opt(): LayoutDefaultOptions;
    get app(): App;
    get collapsed(): boolean;
    get collapsedIcon(): string;
    private refresh;
    ngAfterViewInit(): void;
    toggleCollapsed(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutDefaultHeaderComponent, "layout-default-header", never, { "items": { "alias": "items"; "required": false; }; }, {}, never, never, false, never>;
}

declare class LayoutDefaultHeaderItemTriggerDirective {
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultHeaderItemTriggerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LayoutDefaultHeaderItemTriggerDirective, "[layout-default-header-item-trigger]", never, {}, {}, never, never, false, never>;
}

declare class LayoutDefaultTopMenuItemComponent {
    selected: boolean;
    disabled: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultTopMenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutDefaultTopMenuItemComponent, "layout-default-top-menu-item", never, { "selected": { "alias": "selected"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["*"], false, never>;
    static ngAcceptInputType_selected: unknown;
    static ngAcceptInputType_disabled: unknown;
}

declare class LayoutDefaultModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<LayoutDefaultModule, [typeof LayoutDefaultComponent, typeof LayoutDefaultNavComponent, typeof LayoutDefaultHeaderComponent, typeof LayoutDefaultHeaderItemComponent, typeof LayoutDefaultHeaderItemTriggerDirective, typeof LayoutDefaultTopMenuItemComponent], [typeof i7.CommonModule, typeof i8.RouterModule, typeof i9.NzToolTipModule, typeof i10.NzIconModule, typeof i11.NzAvatarModule, typeof i12.NzDropDownModule, typeof i13.NzBadgeModule], [typeof LayoutDefaultComponent, typeof LayoutDefaultNavComponent, typeof LayoutDefaultHeaderComponent, typeof LayoutDefaultHeaderItemComponent, typeof LayoutDefaultHeaderItemTriggerDirective, typeof LayoutDefaultTopMenuItemComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<LayoutDefaultModule>;
}

declare class LayoutDefaultService {
    private readonly settings;
    private readonly bm;
    private _options$;
    private _options;
    get options(): LayoutDefaultOptions;
    get options$(): Observable<LayoutDefaultOptions>;
    get collapsedIcon(): string;
    constructor();
    private checkMedia;
    private notify;
    /**
     * Set layout configuration
     *
     * 设置布局配置
     */
    setOptions(options?: LayoutDefaultOptions | null): void;
    /**
     * Toggle the collapsed state of the sidebar menu bar
     *
     * 切换侧边栏菜单栏折叠状态
     */
    toggleCollapsed(status?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LayoutDefaultService>;
}

export { LayoutDefaultComponent, LayoutDefaultHeaderComponent, LayoutDefaultHeaderItemComponent, LayoutDefaultHeaderItemTriggerDirective, LayoutDefaultModule, LayoutDefaultNavComponent, LayoutDefaultService, LayoutDefaultTopMenuItemComponent };
export type { LayoutDefaultHeaderItemDirection, LayoutDefaultHeaderItemHidden, LayoutDefaultOptions, Nav };
