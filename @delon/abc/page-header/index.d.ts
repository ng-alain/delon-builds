import * as i0 from '@angular/core';
import { OnInit, OnChanges, AfterViewInit, TemplateRef } from '@angular/core';
import * as _angular_cdk_bidi_module_d_IN1Vp56w from '@angular/cdk/bidi-module.d-IN1Vp56w';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
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
declare class PageHeaderComponent implements OnInit, OnChanges, AfterViewInit {
    private readonly renderer;
    private readonly router;
    private readonly cdr;
    private readonly menuSrv;
    private readonly i18nSrv;
    private readonly titleSrv;
    private readonly reuseSrv;
    private readonly settings;
    private readonly platform;
    private readonly cogSrv;
    private conTpl;
    private affix;
    inited: boolean;
    isBrowser: boolean;
    dir: i0.WritableSignal<_angular_cdk_bidi_module_d_IN1Vp56w.a>;
    private get menus();
    _titleVal: string | null;
    paths: PageHeaderPath[];
    _title: string | null;
    _titleTpl: TemplateRef<NzSafeAny> | null;
    set title(value: string | TemplateRef<void> | null);
    titleSub?: string | TemplateRef<void> | null;
    loading: boolean;
    wide: boolean;
    home?: string;
    homeLink?: string;
    homeI18n?: string;
    autoBreadcrumb: boolean;
    autoTitle: boolean;
    syncTitle: boolean;
    fixed: boolean;
    fixedOffsetTop: number;
    breadcrumb?: TemplateRef<NzSafeAny> | null;
    recursiveBreadcrumb: boolean;
    logo?: TemplateRef<void> | null;
    action?: TemplateRef<void> | null;
    content?: TemplateRef<void> | null;
    extra?: TemplateRef<void> | null;
    tab?: TemplateRef<void> | null;
    constructor();
    refresh(): void;
    private genBreadcrumb;
    private setTitle;
    checkContent(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageHeaderComponent, "page-header", ["pageHeader"], { "title": { "alias": "title"; "required": false; }; "titleSub": { "alias": "titleSub"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "wide": { "alias": "wide"; "required": false; }; "home": { "alias": "home"; "required": false; }; "homeLink": { "alias": "homeLink"; "required": false; }; "homeI18n": { "alias": "homeI18n"; "required": false; }; "autoBreadcrumb": { "alias": "autoBreadcrumb"; "required": false; }; "autoTitle": { "alias": "autoTitle"; "required": false; }; "syncTitle": { "alias": "syncTitle"; "required": false; }; "fixed": { "alias": "fixed"; "required": false; }; "fixedOffsetTop": { "alias": "fixedOffsetTop"; "required": false; }; "breadcrumb": { "alias": "breadcrumb"; "required": false; }; "recursiveBreadcrumb": { "alias": "recursiveBreadcrumb"; "required": false; }; "logo": { "alias": "logo"; "required": false; }; "action": { "alias": "action"; "required": false; }; "content": { "alias": "content"; "required": false; }; "extra": { "alias": "extra"; "required": false; }; "tab": { "alias": "tab"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_loading: unknown;
    static ngAcceptInputType_wide: unknown;
    static ngAcceptInputType_autoBreadcrumb: unknown;
    static ngAcceptInputType_autoTitle: unknown;
    static ngAcceptInputType_syncTitle: unknown;
    static ngAcceptInputType_fixed: unknown;
    static ngAcceptInputType_fixedOffsetTop: unknown;
    static ngAcceptInputType_recursiveBreadcrumb: unknown;
}

declare class PageHeaderModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PageHeaderModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PageHeaderModule, never, [typeof i1.CommonModule, typeof i2.RouterModule, typeof i3.ObserversModule, typeof i4.NzAffixModule, typeof i5.NzSkeletonModule, typeof i6.NzBreadCrumbModule, typeof i7.NzOutletModule, typeof PageHeaderComponent], [typeof PageHeaderComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PageHeaderModule>;
}

export { PageHeaderComponent, PageHeaderModule };
