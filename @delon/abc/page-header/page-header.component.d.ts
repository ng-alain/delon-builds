import { TemplateRef, OnInit, OnChanges, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService, AlainI18NService, TitleService, SettingsService } from '@delon/theme';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { PageHeaderConfig } from './page-header.config';
export declare class PageHeaderComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private renderer;
    private route;
    private menuSrv;
    private i18nSrv;
    private titleSrv;
    private reuseSrv;
    private inited;
    private i18n$;
    private set$;
    private conTpl;
    private affix;
    private _menus;
    private readonly menus;
    _title: string;
    _titleTpl: TemplateRef<any>;
    title: string | TemplateRef<any>;
    loading: boolean;
    wide: boolean;
    home: string;
    homeLink: string;
    homeI18n: string;
    /**
     * 自动生成导航，以当前路由从主菜单中定位
     */
    autoBreadcrumb: boolean;
    /**
     * 自动生成标题，以当前路由从主菜单中定位
     */
    autoTitle: boolean;
    /**
     * 是否自动将标题同步至 `TitleService`、`ReuseService` 下，仅 `title` 为 `string` 类型时有效
     */
    syncTitle: boolean;
    fixed: boolean;
    fixedOffsetTop: number;
    paths: any[];
    breadcrumb: TemplateRef<any>;
    logo: TemplateRef<any>;
    action: TemplateRef<any>;
    content: TemplateRef<any>;
    extra: TemplateRef<any>;
    tab: TemplateRef<any>;
    constructor(cog: PageHeaderConfig, settings: SettingsService, renderer: Renderer2, route: Router, menuSrv: MenuService, i18nSrv: AlainI18NService, titleSrv: TitleService, reuseSrv: ReuseTabService);
    refresh(): void;
    private genBreadcrumb;
    private setTitle;
    checkContent(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
