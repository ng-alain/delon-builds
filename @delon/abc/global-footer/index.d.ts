import { SafeHtml } from '@angular/platform-browser';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as _angular_core from '@angular/core';
import { TemplateRef } from '@angular/core';
import * as _angular_cdk_bidi from '@angular/cdk/bidi';
import * as i1 from '@angular/common';
import * as i2 from '@angular/router';

interface GlobalFooterLink {
    [key: string]: NzSafeAny;
    title: string | SafeHtml;
    href: string;
    blankTarget?: boolean;
}

declare class GlobalFooterItemComponent {
    host: _angular_core.Signal<TemplateRef<void>>;
    href: _angular_core.InputSignal<string | undefined>;
    blankTarget: _angular_core.InputSignalWithTransform<boolean, unknown>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<GlobalFooterItemComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<GlobalFooterItemComponent, "global-footer-item", ["globalFooterItem"], { "href": { "alias": "href"; "required": false; "isSignal": true; }; "blankTarget": { "alias": "blankTarget"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class GlobalFooterComponent {
    private readonly router;
    private readonly win;
    private readonly dom;
    dir: _angular_core.WritableSignal<_angular_cdk_bidi.Direction>;
    links: _angular_core.InputSignal<GlobalFooterLink[]>;
    readonly items: _angular_core.Signal<readonly GlobalFooterItemComponent[]>;
    linkHtmls: _angular_core.Signal<GlobalFooterLink[]>;
    to(item: GlobalFooterLink | GlobalFooterItemComponent): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<GlobalFooterComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<GlobalFooterComponent, "global-footer", ["globalFooter"], { "links": { "alias": "links"; "required": false; "isSignal": true; }; }, {}, ["items"], ["*"], true, never>;
}

declare class GlobalFooterModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<GlobalFooterModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<GlobalFooterModule, never, [typeof i1.CommonModule, typeof i2.RouterModule, typeof GlobalFooterComponent, typeof GlobalFooterItemComponent], [typeof GlobalFooterComponent, typeof GlobalFooterItemComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<GlobalFooterModule>;
}

export { GlobalFooterComponent, GlobalFooterItemComponent, GlobalFooterModule };
export type { GlobalFooterLink };
