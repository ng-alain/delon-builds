import * as i0 from "@angular/core";
import { TemplateRef } from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "@angular/cdk/observers";
import * as i4 from "ng-zorro-antd/affix";
import * as i5 from "ng-zorro-antd/skeleton";
import * as i6 from "ng-zorro-antd/breadcrumb";
import * as i7 from "ng-zorro-antd/core/outlet";
declare namespace page_header_component_d_exports {
  export { PageHeaderComponent };
}
interface PageHeaderPath {
  title?: string;
  link?: string[];
}
export declare class PageHeaderComponent {
  private readonly renderer;
  private readonly router;
  private readonly menuSrv;
  private readonly i18nSrv;
  private readonly titleSrv;
  private readonly reuseSrv;
  private readonly settings;
  private readonly cogSrv;
  private readonly conTpl;
  private readonly affix;
  protected readonly isBrowser: boolean;
  protected readonly dir: import("@angular/core").WritableSignal<import("@angular/cdk/bidi").Direction>;
  private get menus();
  protected paths: import("@angular/core").WritableSignal<PageHeaderPath[]>;
  protected titleIsTpl: import("@angular/core").Signal<boolean>;
  protected titleText: import("@angular/core").WritableSignal<string | null | undefined>;
  readonly titleSub: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  readonly title: import("@angular/core").InputSignal<string | TemplateRef<void> | null | undefined>;
  readonly loading: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly wide: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly home: import("@angular/core").InputSignal<string | undefined>;
  readonly homeLink: import("@angular/core").InputSignal<string>;
  readonly homeI18n: import("@angular/core").InputSignal<string | undefined>;
  readonly autoBreadcrumb: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly autoTitle: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly syncTitle: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly fixed: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly fixedOffsetTop: import("@angular/core").InputSignalWithTransform<number, unknown>;
  readonly breadcrumb: import("@angular/core").InputSignal<TemplateRef<any> | null>;
  readonly recursiveBreadcrumb: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  readonly logo: import("@angular/core").InputSignal<TemplateRef<void> | null>;
  readonly action: import("@angular/core").InputSignal<TemplateRef<void> | null>;
  readonly content: import("@angular/core").InputSignal<TemplateRef<void> | null>;
  readonly extra: import("@angular/core").InputSignal<TemplateRef<void> | null>;
  readonly tab: import("@angular/core").InputSignal<TemplateRef<void> | null>;
  private locale;
  constructor();
  refresh(): void;
  private genBreadcrumb;
  protected checkContent(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PageHeaderComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<PageHeaderComponent, "page-header", ["pageHeader"], {
    "titleSub": {
      "alias": "titleSub";
      "required": false;
      "isSignal": true;
    };
    "title": {
      "alias": "title";
      "required": false;
      "isSignal": true;
    };
    "loading": {
      "alias": "loading";
      "required": false;
      "isSignal": true;
    };
    "wide": {
      "alias": "wide";
      "required": false;
      "isSignal": true;
    };
    "home": {
      "alias": "home";
      "required": false;
      "isSignal": true;
    };
    "homeLink": {
      "alias": "homeLink";
      "required": false;
      "isSignal": true;
    };
    "homeI18n": {
      "alias": "homeI18n";
      "required": false;
      "isSignal": true;
    };
    "autoBreadcrumb": {
      "alias": "autoBreadcrumb";
      "required": false;
      "isSignal": true;
    };
    "autoTitle": {
      "alias": "autoTitle";
      "required": false;
      "isSignal": true;
    };
    "syncTitle": {
      "alias": "syncTitle";
      "required": false;
      "isSignal": true;
    };
    "fixed": {
      "alias": "fixed";
      "required": false;
      "isSignal": true;
    };
    "fixedOffsetTop": {
      "alias": "fixedOffsetTop";
      "required": false;
      "isSignal": true;
    };
    "breadcrumb": {
      "alias": "breadcrumb";
      "required": false;
      "isSignal": true;
    };
    "recursiveBreadcrumb": {
      "alias": "recursiveBreadcrumb";
      "required": false;
      "isSignal": true;
    };
    "logo": {
      "alias": "logo";
      "required": false;
      "isSignal": true;
    };
    "action": {
      "alias": "action";
      "required": false;
      "isSignal": true;
    };
    "content": {
      "alias": "content";
      "required": false;
      "isSignal": true;
    };
    "extra": {
      "alias": "extra";
      "required": false;
      "isSignal": true;
    };
    "tab": {
      "alias": "tab";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, ["*"], true, never>;
}
export declare class PageHeaderModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<PageHeaderModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<PageHeaderModule, never, [typeof i1.CommonModule, typeof i2.RouterModule, typeof i3.ObserversModule, typeof i4.NzAffixModule, typeof i5.NzSkeletonModule, typeof i6.NzBreadCrumbModule, typeof i7.NzOutletModule, typeof PageHeaderComponent], [typeof PageHeaderComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<PageHeaderModule>;
}