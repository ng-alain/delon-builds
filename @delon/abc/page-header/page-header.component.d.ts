import { AfterViewInit, ChangeDetectorRef, OnChanges, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { AlainI18NService, MenuService, SettingsService, TitleService } from '@delon/theme';
import { AlainConfigService } from '@delon/util';
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
    private inited;
    private unsubscribe$;
    private conTpl;
    private affix;
    private get menus();
    _titleVal: string;
    paths: PageHeaderPath[];
    _title: string | null;
    _titleTpl: TemplateRef<void>;
    set title(value: string | TemplateRef<void>);
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
    breadcrumb: TemplateRef<void>;
    recursiveBreadcrumb: boolean;
    logo: TemplateRef<void>;
    action: TemplateRef<void>;
    content: TemplateRef<void>;
    extra: TemplateRef<void>;
    tab: TemplateRef<void>;
    constructor(settings: SettingsService, renderer: Renderer2, router: Router, menuSrv: MenuService, i18nSrv: AlainI18NService, titleSrv: TitleService, reuseSrv: ReuseTabService, cdr: ChangeDetectorRef, configSrv: AlainConfigService);
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
