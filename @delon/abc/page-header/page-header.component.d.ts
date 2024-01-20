import { Direction } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, OnChanges, OnInit, TemplateRef } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
interface PageHeaderPath {
    title?: string;
    link?: string[];
}
export declare class PageHeaderComponent implements OnInit, OnChanges, AfterViewInit {
    private readonly renderer;
    private readonly router;
    private readonly cdr;
    private readonly menuSrv;
    private readonly i18nSrv;
    private readonly titleSrv;
    private readonly reuseSrv;
    private readonly directionality;
    private readonly destroy$;
    private conTpl;
    private affix;
    inited: boolean;
    isBrowser: boolean;
    dir?: Direction;
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
    constructor(settings: SettingsService, configSrv: AlainConfigService, platform: Platform);
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
export {};
