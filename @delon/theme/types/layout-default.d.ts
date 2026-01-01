import * as _angular_core from '@angular/core';
import { TemplateRef, OnDestroy } from '@angular/core';
import * as i2 from '@angular/router';
import { Event } from '@angular/router';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i1 from '@angular/common';
import * as i3 from 'ng-zorro-antd/tooltip';
import * as i4 from 'ng-zorro-antd/icon';
import * as i5 from 'ng-zorro-antd/avatar';
import * as i6 from 'ng-zorro-antd/dropdown';
import * as i7 from 'ng-zorro-antd/badge';
import * as _angular_cdk_bidi from '@angular/cdk/bidi';
import { SafeHtml } from '@angular/platform-browser';
import { MenuInner, Menu } from '@delon/theme';
import * as _delon_theme_layout_default from '@delon/theme/layout-default';

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
    readonly host: _angular_core.Signal<TemplateRef<void> | undefined>;
    readonly hidden: _angular_core.InputSignal<LayoutDefaultHeaderItemHidden>;
    readonly direction: _angular_core.InputSignal<LayoutDefaultHeaderItemDirection>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<LayoutDefaultHeaderItemComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<LayoutDefaultHeaderItemComponent, "layout-default-header-item", never, { "hidden": { "alias": "hidden"; "required": false; "isSignal": true; }; "direction": { "alias": "direction"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class LayoutDefaultService {
    private readonly settings;
    private readonly bm;
    readonly options: _angular_core.WritableSignal<LayoutDefaultOptions>;
    readonly collapsedIcon: _angular_core.WritableSignal<string>;
    constructor();
    private checkMedia;
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
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<LayoutDefaultService, never>;
    static ɵprov: _angular_core.ɵɵInjectableDeclaration<LayoutDefaultService>;
}

declare class LayoutDefaultComponent {
    private readonly router;
    private readonly msgSrv;
    private readonly settings;
    private readonly doc;
    protected readonly srv: LayoutDefaultService;
    protected readonly headerItems: _angular_core.Signal<readonly LayoutDefaultHeaderItemComponent[]>;
    protected opt: _angular_core.WritableSignal<LayoutDefaultOptions>;
    protected layout: _angular_core.WritableSignal<any>;
    readonly options: _angular_core.InputSignal<LayoutDefaultOptions | undefined>;
    readonly asideUser: _angular_core.InputSignal<TemplateRef<void> | null | undefined>;
    readonly asideBottom: _angular_core.InputSignal<TemplateRef<any> | null | undefined>;
    readonly nav: _angular_core.InputSignal<TemplateRef<void> | null | undefined>;
    readonly content: _angular_core.InputSignal<TemplateRef<void> | null | undefined>;
    readonly customError: _angular_core.InputSignal<string | null | undefined>;
    readonly fetchingStrictly: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly fetching: _angular_core.InputSignalWithTransform<boolean, unknown>;
    private isFetching;
    readonly showFetching: _angular_core.Signal<boolean>;
    constructor();
    processEv(ev: Event): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<LayoutDefaultComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<LayoutDefaultComponent, "layout-default", ["layoutDefault"], { "options": { "alias": "options"; "required": false; "isSignal": true; }; "asideUser": { "alias": "asideUser"; "required": false; "isSignal": true; }; "asideBottom": { "alias": "asideBottom"; "required": false; "isSignal": true; }; "nav": { "alias": "nav"; "required": false; "isSignal": true; }; "content": { "alias": "content"; "required": false; "isSignal": true; }; "customError": { "alias": "customError"; "required": false; "isSignal": true; }; "fetchingStrictly": { "alias": "fetchingStrictly"; "required": false; "isSignal": true; }; "fetching": { "alias": "fetching"; "required": false; "isSignal": true; }; }, {}, ["headerItems"], ["*"], true, never>;
}

interface Nav extends MenuInner {
    _needIcon?: boolean;
    _text?: SafeHtml;
}
declare class LayoutDefaultNavComponent implements OnDestroy {
    private readonly doc;
    private readonly win;
    private readonly router;
    private readonly render;
    private readonly menuSrv;
    private readonly settings;
    private readonly sanitizer;
    private bodyEl;
    private floatingEl;
    dir: _angular_core.WritableSignal<_angular_cdk_bidi.Direction>;
    list: _angular_core.WritableSignal<Nav[]>;
    readonly disabledAcl: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly autoCloseUnderPad: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly recursivePath: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly hideEmptyChildren: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly openStrictly: _angular_core.InputSignal<boolean | undefined>;
    readonly maxLevelIcon: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly select: _angular_core.OutputEmitterRef<Menu>;
    get collapsed(): boolean;
    constructor();
    private getLinkNode;
    private floatingClickHandle;
    private clearFloating;
    private genFloating;
    private genSubNode;
    private hideAll;
    private calPos;
    protected showSubMenu(e: MouseEvent, item: Nav): void;
    protected to(item: Menu): void;
    protected toggleOpen(item: Nav): void;
    protected _click(): void;
    protected closeSubMenu(): void;
    private openByUrl;
    private fixHide;
    private get isPad();
    private underPad;
    private openAside;
    ngOnDestroy(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<LayoutDefaultNavComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<LayoutDefaultNavComponent, "layout-default-nav", never, { "disabledAcl": { "alias": "disabledAcl"; "required": false; "isSignal": true; }; "autoCloseUnderPad": { "alias": "autoCloseUnderPad"; "required": false; "isSignal": true; }; "recursivePath": { "alias": "recursivePath"; "required": false; "isSignal": true; }; "hideEmptyChildren": { "alias": "hideEmptyChildren"; "required": false; "isSignal": true; }; "openStrictly": { "alias": "openStrictly"; "required": false; "isSignal": true; }; "maxLevelIcon": { "alias": "maxLevelIcon"; "required": false; "isSignal": true; }; }, { "select": "select"; }, never, never, true, never>;
}

declare class LayoutDefaultHeaderComponent {
    protected readonly app: any;
    protected readonly srv: LayoutDefaultService;
    readonly items: _angular_core.InputSignal<readonly LayoutDefaultHeaderItemComponent[]>;
    protected left: _angular_core.Signal<LayoutDefaultHeaderItemComponent[]>;
    protected middle: _angular_core.Signal<LayoutDefaultHeaderItemComponent[]>;
    protected right: _angular_core.Signal<LayoutDefaultHeaderItemComponent[]>;
    protected opt: _angular_core.WritableSignal<_delon_theme_layout_default.LayoutDefaultOptions>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<LayoutDefaultHeaderComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<LayoutDefaultHeaderComponent, "layout-default-header", never, { "items": { "alias": "items"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class LayoutDefaultHeaderItemTriggerDirective {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<LayoutDefaultHeaderItemTriggerDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<LayoutDefaultHeaderItemTriggerDirective, "[layout-default-header-item-trigger]", never, {}, {}, never, never, true, never>;
}

declare class LayoutDefaultTopMenuItemComponent {
    readonly selected: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly disabled: _angular_core.InputSignalWithTransform<boolean, unknown>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<LayoutDefaultTopMenuItemComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<LayoutDefaultTopMenuItemComponent, "layout-default-top-menu-item", never, { "selected": { "alias": "selected"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class LayoutDefaultModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<LayoutDefaultModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<LayoutDefaultModule, never, [typeof i1.CommonModule, typeof i2.RouterModule, typeof i3.NzTooltipModule, typeof i4.NzIconModule, typeof i5.NzAvatarModule, typeof i6.NzDropdownModule, typeof i7.NzBadgeModule, typeof LayoutDefaultComponent, typeof LayoutDefaultNavComponent, typeof LayoutDefaultHeaderComponent, typeof LayoutDefaultHeaderItemComponent, typeof LayoutDefaultHeaderItemTriggerDirective, typeof LayoutDefaultTopMenuItemComponent], [typeof LayoutDefaultComponent, typeof LayoutDefaultNavComponent, typeof LayoutDefaultHeaderComponent, typeof LayoutDefaultHeaderItemComponent, typeof LayoutDefaultHeaderItemTriggerDirective, typeof LayoutDefaultTopMenuItemComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<LayoutDefaultModule>;
}

export { LayoutDefaultComponent, LayoutDefaultHeaderComponent, LayoutDefaultHeaderItemComponent, LayoutDefaultHeaderItemTriggerDirective, LayoutDefaultModule, LayoutDefaultNavComponent, LayoutDefaultService, LayoutDefaultTopMenuItemComponent };
export type { LayoutDefaultHeaderItemDirection, LayoutDefaultHeaderItemHidden, LayoutDefaultOptions, Nav };
