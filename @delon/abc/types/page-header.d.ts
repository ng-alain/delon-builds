import * as _angular_core from '@angular/core';
import { TemplateRef } from '@angular/core';
import * as _angular_cdk_bidi from '@angular/cdk/bidi';
import * as i1 from '@angular/common';
import * as i2 from '@angular/router';
import * as i3 from '@angular/cdk/observers';
import * as i4 from 'ng-zorro-antd/affix';
import * as i5 from 'ng-zorro-antd/skeleton';
import * as i6 from 'ng-zorro-antd/breadcrumb';
import * as i7 from 'ng-zorro-antd/core/outlet';

interface PageHeaderPath {
    title?: string;
    link?: string[];
}
declare class PageHeaderComponent {
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
    protected readonly dir: _angular_core.WritableSignal<_angular_cdk_bidi.Direction>;
    private get menus();
    protected paths: _angular_core.WritableSignal<PageHeaderPath[]>;
    protected titleIsTpl: _angular_core.Signal<boolean>;
    protected titleText: _angular_core.WritableSignal<string | null | undefined>;
    readonly titleSub: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    readonly title: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    readonly loading: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly wide: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly home: _angular_core.InputSignal<string | undefined>;
    readonly homeLink: _angular_core.InputSignal<string>;
    readonly homeI18n: _angular_core.InputSignal<string | undefined>;
    readonly autoBreadcrumb: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly autoTitle: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly syncTitle: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly fixed: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly fixedOffsetTop: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly breadcrumb: _angular_core.InputSignal<TemplateRef<any> | null>;
    readonly recursiveBreadcrumb: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly logo: _angular_core.InputSignal<TemplateRef<void> | null>;
    readonly action: _angular_core.InputSignal<TemplateRef<void> | null>;
    readonly content: _angular_core.InputSignal<TemplateRef<void> | null>;
    readonly extra: _angular_core.InputSignal<TemplateRef<void> | null>;
    readonly tab: _angular_core.InputSignal<TemplateRef<void> | null>;
    private locale;
    constructor();
    refresh(): void;
    private genBreadcrumb;
    protected checkContent(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<PageHeaderComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<PageHeaderComponent, "page-header", ["pageHeader"], { "titleSub": { "alias": "titleSub"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "loading": { "alias": "loading"; "required": false; "isSignal": true; }; "wide": { "alias": "wide"; "required": false; "isSignal": true; }; "home": { "alias": "home"; "required": false; "isSignal": true; }; "homeLink": { "alias": "homeLink"; "required": false; "isSignal": true; }; "homeI18n": { "alias": "homeI18n"; "required": false; "isSignal": true; }; "autoBreadcrumb": { "alias": "autoBreadcrumb"; "required": false; "isSignal": true; }; "autoTitle": { "alias": "autoTitle"; "required": false; "isSignal": true; }; "syncTitle": { "alias": "syncTitle"; "required": false; "isSignal": true; }; "fixed": { "alias": "fixed"; "required": false; "isSignal": true; }; "fixedOffsetTop": { "alias": "fixedOffsetTop"; "required": false; "isSignal": true; }; "breadcrumb": { "alias": "breadcrumb"; "required": false; "isSignal": true; }; "recursiveBreadcrumb": { "alias": "recursiveBreadcrumb"; "required": false; "isSignal": true; }; "logo": { "alias": "logo"; "required": false; "isSignal": true; }; "action": { "alias": "action"; "required": false; "isSignal": true; }; "content": { "alias": "content"; "required": false; "isSignal": true; }; "extra": { "alias": "extra"; "required": false; "isSignal": true; }; "tab": { "alias": "tab"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class PageHeaderModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<PageHeaderModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<PageHeaderModule, never, [typeof i1.CommonModule, typeof i2.RouterModule, typeof i3.ObserversModule, typeof i4.NzAffixModule, typeof i5.NzSkeletonModule, typeof i6.NzBreadCrumbModule, typeof i7.NzOutletModule, typeof PageHeaderComponent], [typeof PageHeaderComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<PageHeaderModule>;
}

export { PageHeaderComponent, PageHeaderModule };
