import { Direction, Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AlainConfigService } from '@delon/util';
import * as i0 from "@angular/core";
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
    private directionality;
    private theme;
    isDev: boolean;
    types: ThemeBtnType[];
    devTips: string;
    private el;
    private destroy$;
    dir: Direction;
    constructor(renderer: Renderer2, configSrv: AlainConfigService, platform: Platform, doc: any, directionality: Directionality);
    ngOnInit(): void;
    private initTheme;
    private updateChartTheme;
    onThemeChange(theme: string): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ThemeBtnComponent, [null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ThemeBtnComponent, "theme-btn", never, { "types": "types"; "devTips": "devTips"; }, {}, never, never>;
}
