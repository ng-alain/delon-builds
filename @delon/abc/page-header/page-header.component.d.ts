import { Direction, Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ChangeDetectorRef, OnChanges, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { AlainI18NService, MenuService, SettingsService, TitleService } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
interface PageHeaderPath {
    title?: string;
    link?: string[];
}
export declare class PageHeaderComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private renderer;
    private router;
    private menuSrv;
    private i18nSrv;
    private titleSrv;
    private reuseSrv;
    private cdr;
    private directionality;
    static ngAcceptInputType_loading: BooleanInput;
    static ngAcceptInputType_wide: BooleanInput;
    static ngAcceptInputType_autoBreadcrumb: BooleanInput;
    static ngAcceptInputType_autoTitle: BooleanInput;
    static ngAcceptInputType_syncTitle: BooleanInput;
    static ngAcceptInputType_fixed: BooleanInput;
    static ngAcceptInputType_fixedOffsetTop: NumberInput;
    static ngAcceptInputType_recursiveBreadcrumb: BooleanInput;
    private destroy$;
    private conTpl;
    private affix;
    inited: boolean;
    isBrowser: boolean;
    dir: Direction;
    private get menus();
    _titleVal: string | null;
    paths: PageHeaderPath[];
    _title: string | null;
    _titleTpl: TemplateRef<any>;
    set title(value: string | TemplateRef<void> | null);
    loading: boolean;
    wide: boolean;
    home: string;
    homeLink: string;
    homeI18n: string;
    autoBreadcrumb: boolean;
    autoTitle: boolean;
    syncTitle: boolean;
    fixed: boolean;
    fixedOffsetTop: number;
    breadcrumb: TemplateRef<any>;
    recursiveBreadcrumb: boolean;
    logo: TemplateRef<void>;
    action: TemplateRef<void>;
    content: TemplateRef<void>;
    extra: TemplateRef<void>;
    tab: TemplateRef<void>;
    constructor(settings: SettingsService, renderer: Renderer2, router: Router, menuSrv: MenuService, i18nSrv: AlainI18NService, titleSrv: TitleService, reuseSrv: ReuseTabService, cdr: ChangeDetectorRef, configSrv: AlainConfigService, platform: Platform, directionality: Directionality);
    refresh(): void;
    private genBreadcrumb;
    private setTitle;
    checkContent(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
export {};
