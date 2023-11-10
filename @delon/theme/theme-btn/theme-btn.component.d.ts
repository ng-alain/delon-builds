import { Direction, Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, EventEmitter, InjectionToken, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
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
    private cdr;
    private theme;
    isDev: boolean;
    types: ThemeBtnType[];
    devTips: string;
    deployUrl: string;
    readonly themeChange: EventEmitter<string>;
    private dir$;
    dir: Direction;
    private key;
    constructor(renderer: Renderer2, configSrv: AlainConfigService, platform: Platform, doc: NzSafeAny, directionality: Directionality, KEYS: string, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    private initTheme;
    private updateChartTheme;
    onThemeChange(theme: string): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeBtnComponent, [null, null, null, null, { optional: true; }, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThemeBtnComponent, "theme-btn", never, { "types": { "alias": "types"; "required": false; }; "devTips": { "alias": "devTips"; "required": false; }; "deployUrl": { "alias": "deployUrl"; "required": false; }; }, { "themeChange": "themeChange"; }, never, never, true, never>;
}
