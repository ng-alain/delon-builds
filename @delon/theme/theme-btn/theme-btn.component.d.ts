import { Direction, Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { InjectionToken, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
export interface ThemeBtnType {
    key: string;
    text: string;
}
export declare const ALAIN_THEME_BTN_KEYS: InjectionToken<string>;
export declare class ThemeBtnComponent implements OnInit, OnDestroy {
    private renderer;
    private configSrv;
    private platform;
    private doc;
    private directionality;
    private KEYS;
    private theme;
    isDev: boolean;
    types: ThemeBtnType[];
    devTips: string;
    deployUrl: string;
    private destroy$;
    dir: Direction;
    constructor(renderer: Renderer2, configSrv: AlainConfigService, platform: Platform, doc: NzSafeAny, directionality: Directionality, KEYS: string);
    ngOnInit(): void;
    private initTheme;
    private updateChartTheme;
    onThemeChange(theme: string): void;
    ngOnDestroy(): void;
}
