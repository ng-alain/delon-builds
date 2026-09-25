import * as i0 from "@angular/core";
import { OnDestroy, TemplateRef } from "@angular/core";
import * as i2 from "@angular/router";
import { Event } from "@angular/router";
import { NzSafeAny } from "ng-zorro-antd/core/types";
import * as i1 from "@angular/common";
import * as i3 from "ng-zorro-antd/tooltip";
import * as i4 from "ng-zorro-antd/icon";
import * as i5 from "ng-zorro-antd/avatar";
import * as i6 from "ng-zorro-antd/dropdown";
import * as i7 from "ng-zorro-antd/badge";
import { SafeHtml } from "@angular/platform-browser";
import { Menu, MenuInner } from "@delon/theme";
export type LayoutDefaultHeaderItemHidden = 'pc' | 'mobile' | 'none';
export type LayoutDefaultHeaderItemDirection = 'left' | 'middle' | 'right';
export interface LayoutDefaultOptions {
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
declare namespace layout_header_item_component_d_exports {
  export { LayoutDefaultHeaderItemComponent };
}
export declare class LayoutDefaultHeaderItemComponent {
  readonly host: import("@angular/core").Signal<TemplateRef<void> | undefined>;
  readonly hidden: import("@angular/core").InputSignal<LayoutDefaultHeaderItemHidden>;
  readonly direction: import("@angular/core").InputSignal<LayoutDefaultHeaderItemDirection>;
  static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultHeaderItemComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<LayoutDefaultHeaderItemComponent, "layout-default-header-item", never, {
    "hidden": {
      "alias": "hidden";
      "required": false;
      "isSignal": true;
    };
    "direction": {
      "alias": "direction";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, ["*"], true, never>;
}
export declare class LayoutDefaultService {
  private readonly settings;
  private readonly bm;
  readonly options: import("@angular/core").WritableSignal<LayoutDefaultOptions>;
  readonly collapsedIcon: import("@angular/core").WritableSignal<string>;
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
  static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultService, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
declare namespace layout_component_d_exports {
  export { LayoutDefaultComponent };
}
export declare class LayoutDefaultComponent {
  private readonly router;
  private readonly msgSrv;
  private readonly settings;
  private readonly doc;
  protected readonly srv: LayoutDefaultService;
  protected readonly headerItems: import("@angular/core").Signal<readonly LayoutDefaultHeaderItemComponent[]>;
  protected opt: import("@angular/core").WritableSignal<LayoutDefaultOptions>;
  protected layout: import("@angular/core").WritableSignal<any>;
  readonly options: import("@angular/core").InputSignal<LayoutDefaultOptions | undefined>;
  readonly asideUser: import("@angular/core").InputSignal<TemplateRef<void> | null | undefined>;
  readonly asideBottom: import("@angular/core").InputSignal<TemplateRef<any> | null | undefined>;
  readonly nav: import("@angular/core").InputSignal<TemplateRef<void> | null | undefined>;
  readonly content: import("@angular/core").InputSignal<TemplateRef<void> | null | undefined>;
  readonly customError: import("@angular/core").InputSignal<string | null | undefined>;
  readonly fetchingStrictly: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly fetching: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  private isFetching;
  readonly showFetching: import("@angular/core").Signal<boolean>;
  constructor();
  processEv(ev: Event): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<LayoutDefaultComponent, "layout-default", ["layoutDefault"], {
    "options": {
      "alias": "options";
      "required": false;
      "isSignal": true;
    };
    "asideUser": {
      "alias": "asideUser";
      "required": false;
      "isSignal": true;
    };
    "asideBottom": {
      "alias": "asideBottom";
      "required": false;
      "isSignal": true;
    };
    "nav": {
      "alias": "nav";
      "required": false;
      "isSignal": true;
    };
    "content": {
      "alias": "content";
      "required": false;
      "isSignal": true;
    };
    "customError": {
      "alias": "customError";
      "required": false;
      "isSignal": true;
    };
    "fetchingStrictly": {
      "alias": "fetchingStrictly";
      "required": false;
      "isSignal": true;
    };
    "fetching": {
      "alias": "fetching";
      "required": false;
      "isSignal": true;
    };
  }, {}, ["headerItems"], ["*"], true, never>;
}
declare namespace layout_nav_component_d_exports {
  export { LayoutDefaultNavComponent, Nav };
}
export interface Nav extends MenuInner {
  _needIcon?: boolean;
  _text?: SafeHtml;
}
export declare class LayoutDefaultNavComponent implements OnDestroy {
  private readonly doc;
  private readonly win;
  private readonly router;
  private readonly render;
  private readonly menuSrv;
  private readonly settings;
  private readonly sanitizer;
  private bodyEl;
  private floatingEl;
  dir: import("@angular/core").WritableSignal<import("@angular/cdk/bidi").Direction>;
  list: import("@angular/core").WritableSignal<Nav[]>;
  readonly disabledAcl: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly autoCloseUnderPad: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly recursivePath: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly hideEmptyChildren: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly openStrictly: import("@angular/core").InputSignal<boolean | undefined>;
  readonly maxLevelIcon: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly select: import("@angular/core").OutputEmitterRef<Menu>;
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
  static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultNavComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<LayoutDefaultNavComponent, "layout-default-nav", never, {
    "disabledAcl": {
      "alias": "disabledAcl";
      "required": false;
      "isSignal": true;
    };
    "autoCloseUnderPad": {
      "alias": "autoCloseUnderPad";
      "required": false;
      "isSignal": true;
    };
    "recursivePath": {
      "alias": "recursivePath";
      "required": false;
      "isSignal": true;
    };
    "hideEmptyChildren": {
      "alias": "hideEmptyChildren";
      "required": false;
      "isSignal": true;
    };
    "openStrictly": {
      "alias": "openStrictly";
      "required": false;
      "isSignal": true;
    };
    "maxLevelIcon": {
      "alias": "maxLevelIcon";
      "required": false;
      "isSignal": true;
    };
  }, {
    "select": "select";
  }, never, never, true, never>;
}
declare namespace layout_header_component_d_exports {
  export { LayoutDefaultHeaderComponent };
}
export declare class LayoutDefaultHeaderComponent {
  protected readonly app: any;
  protected readonly srv: LayoutDefaultService;
  readonly items: import("@angular/core").InputSignal<readonly LayoutDefaultHeaderItemComponent[]>;
  protected left: import("@angular/core").Signal<LayoutDefaultHeaderItemComponent[]>;
  protected middle: import("@angular/core").Signal<LayoutDefaultHeaderItemComponent[]>;
  protected right: import("@angular/core").Signal<LayoutDefaultHeaderItemComponent[]>;
  protected opt: import("@angular/core").WritableSignal<import("@delon/theme/layout-default").LayoutDefaultOptions>;
  static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultHeaderComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<LayoutDefaultHeaderComponent, "layout-default-header", never, {
    "items": {
      "alias": "items";
      "required": true;
      "isSignal": true;
    };
  }, {}, never, never, true, never>;
}
declare namespace layout_header_item_trigger_directive_d_exports {
  export { LayoutDefaultHeaderItemTriggerDirective };
}
export declare class LayoutDefaultHeaderItemTriggerDirective {
  static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultHeaderItemTriggerDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<LayoutDefaultHeaderItemTriggerDirective, "[layout-default-header-item-trigger]", never, {}, {}, never, never, true, never>;
}
declare namespace layout_top_menu_item_d_exports {
  export { LayoutDefaultTopMenuItemComponent };
}
export declare class LayoutDefaultTopMenuItemComponent {
  readonly selected: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly disabled: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultTopMenuItemComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<LayoutDefaultTopMenuItemComponent, "layout-default-top-menu-item", never, {
    "selected": {
      "alias": "selected";
      "required": false;
      "isSignal": true;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, ["*"], true, never>;
}
export declare class LayoutDefaultModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<LayoutDefaultModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<LayoutDefaultModule, never, [typeof i1.CommonModule, typeof i2.RouterModule, typeof i3.NzTooltipModule, typeof i4.NzIconModule, typeof i5.NzAvatarModule, typeof i6.NzDropdownModule, typeof i7.NzBadgeModule, typeof LayoutDefaultComponent, typeof LayoutDefaultNavComponent, typeof LayoutDefaultHeaderComponent, typeof LayoutDefaultHeaderItemComponent, typeof LayoutDefaultHeaderItemTriggerDirective, typeof LayoutDefaultTopMenuItemComponent], [typeof LayoutDefaultComponent, typeof LayoutDefaultNavComponent, typeof LayoutDefaultHeaderComponent, typeof LayoutDefaultHeaderItemComponent, typeof LayoutDefaultHeaderItemTriggerDirective, typeof LayoutDefaultTopMenuItemComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<LayoutDefaultModule>;
}