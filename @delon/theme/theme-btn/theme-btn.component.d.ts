import { Platform } from '@angular/cdk/platform';
import { OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AlainConfigService } from '@delon/util';
export declare const ThemeBtnStorageKey = "site-theme";
export interface ThemeBtnType {
    key: string;
    text: string;
}
export declare class ThemeBtnComponent implements OnInit, OnDestroy {
    private renderer;
    private configSrv;
    private platform;
    private doc;
    private theme;
    isDev: boolean;
    types: ThemeBtnType[];
    devTips: string;
    private el;
    constructor(renderer: Renderer2, configSrv: AlainConfigService, platform: Platform, doc: any);
    ngOnInit(): void;
    private initTheme;
    private updateChartTheme;
    onThemeChange(theme: string): void;
    ngOnDestroy(): void;
}
