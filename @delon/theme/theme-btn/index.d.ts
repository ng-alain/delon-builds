import * as i0 from '@angular/core';
import { InjectionToken, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import * as _angular_cdk_bidi from '@angular/cdk/bidi';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/dropdown';
import * as i3 from 'ng-zorro-antd/tooltip';

interface ThemeBtnType {
    key: string;
    text: string;
}
declare const ALAIN_THEME_BTN_KEYS: InjectionToken<string>;
declare class ThemeBtnComponent implements OnInit, OnDestroy {
    private readonly doc;
    private readonly platform;
    private readonly renderer;
    private readonly configSrv;
    private theme;
    isDev: boolean;
    types: ThemeBtnType[];
    devTips: string;
    deployUrl: string;
    readonly themeChange: EventEmitter<string>;
    dir: i0.WritableSignal<_angular_cdk_bidi.Direction>;
    private key;
    ngOnInit(): void;
    private initTheme;
    private updateChartTheme;
    onThemeChange(theme: string): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeBtnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThemeBtnComponent, "theme-btn", never, { "types": { "alias": "types"; "required": false; }; "devTips": { "alias": "devTips"; "required": false; }; "deployUrl": { "alias": "deployUrl"; "required": false; }; }, { "themeChange": "themeChange"; }, never, never, true, never>;
}

declare class ThemeBtnModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeBtnModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ThemeBtnModule, never, [typeof i1.CommonModule, typeof i2.NzDropDownModule, typeof i3.NzTooltipModule, typeof ThemeBtnComponent], [typeof ThemeBtnComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ThemeBtnModule>;
}

export { ALAIN_THEME_BTN_KEYS, ThemeBtnComponent, ThemeBtnModule };
export type { ThemeBtnType };
