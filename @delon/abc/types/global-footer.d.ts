import { SafeHtml } from "@angular/platform-browser";
import { NzSafeAny } from "ng-zorro-antd/core/types";
import * as i0 from "@angular/core";
import { TemplateRef } from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
export interface GlobalFooterLink {
  [key: string]: NzSafeAny;
  title: string | SafeHtml;
  href: string;
  blankTarget?: boolean;
}
declare namespace global_footer_item_component_d_exports {
  export { GlobalFooterItemComponent };
}
export declare class GlobalFooterItemComponent {
  readonly host: import("@angular/core").Signal<TemplateRef<void>>;
  readonly href: import("@angular/core").InputSignal<string | undefined>;
  readonly blankTarget: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
  static ɵfac: i0.ɵɵFactoryDeclaration<GlobalFooterItemComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<GlobalFooterItemComponent, "global-footer-item", ["globalFooterItem"], {
    "href": {
      "alias": "href";
      "required": false;
      "isSignal": true;
    };
    "blankTarget": {
      "alias": "blankTarget";
      "required": false;
      "isSignal": true;
    };
  }, {}, never, ["*"], true, never>;
}
declare namespace global_footer_component_d_exports {
  export { GlobalFooterComponent };
}
export declare class GlobalFooterComponent {
  private readonly router;
  private readonly win;
  private readonly dom;
  protected dir: import("@angular/core").WritableSignal<import("@angular/cdk/bidi").Direction>;
  readonly links: import("@angular/core").InputSignal<GlobalFooterLink[]>;
  readonly items: import("@angular/core").Signal<readonly GlobalFooterItemComponent[]>;
  protected linkHtmls: import("@angular/core").Signal<GlobalFooterLink[]>;
  protected to(item: GlobalFooterLink | GlobalFooterItemComponent): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<GlobalFooterComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<GlobalFooterComponent, "global-footer", ["globalFooter"], {
    "links": {
      "alias": "links";
      "required": false;
      "isSignal": true;
    };
  }, {}, ["items"], ["*"], true, never>;
}
export declare class GlobalFooterModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<GlobalFooterModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<GlobalFooterModule, never, [typeof i1.CommonModule, typeof i2.RouterModule, typeof GlobalFooterComponent, typeof GlobalFooterItemComponent], [typeof GlobalFooterComponent, typeof GlobalFooterItemComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<GlobalFooterModule>;
}