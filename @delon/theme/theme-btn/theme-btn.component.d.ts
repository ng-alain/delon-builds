import { Direction } from '@angular/cdk/bidi';
import { EventEmitter, InjectionToken, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export interface ThemeBtnType {
    key: string;
    text: string;
}
export declare const ALAIN_THEME_BTN_KEYS: InjectionToken<string>;
export declare class ThemeBtnComponent implements OnInit, OnDestroy {
    private readonly doc;
    private readonly platform;
    private readonly renderer;
    private readonly configSrv;
    private readonly directionality;
    private readonly cdr;
    private theme;
    isDev: boolean;
    types: ThemeBtnType[];
    devTips: string;
    deployUrl: string;
    readonly themeChange: EventEmitter<string>;
    private dir$;
    dir?: Direction;
    private key;
    ngOnInit(): void;
    private initTheme;
    private updateChartTheme;
    onThemeChange(theme: string): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeBtnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThemeBtnComponent, "theme-btn", never, { "types": { "alias": "types"; "required": false; }; "devTips": { "alias": "devTips"; "required": false; }; "deployUrl": { "alias": "deployUrl"; "required": false; }; }, { "themeChange": "themeChange"; }, never, never, true, never>;
}
