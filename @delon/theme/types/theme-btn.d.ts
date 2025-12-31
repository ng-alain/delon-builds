import * as _angular_core from '@angular/core';
import { InjectionToken, OnDestroy } from '@angular/core';
import * as _angular_cdk_bidi from '@angular/cdk/bidi';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/dropdown';
import * as i3 from 'ng-zorro-antd/tooltip';

interface ThemeBtnType {
    key: string;
    text: string;
}
declare const ALAIN_THEME_BTN_KEYS: InjectionToken<string>;
declare class ThemeBtnComponent implements OnDestroy {
    private readonly doc;
    private readonly platform;
    private readonly renderer;
    private readonly configSrv;
    protected dir: _angular_core.WritableSignal<_angular_cdk_bidi.Direction>;
    private key;
    private theme;
    protected isDev: boolean;
    readonly types: _angular_core.InputSignal<ThemeBtnType[]>;
    readonly devTips: _angular_core.InputSignal<string>;
    readonly deployUrl: _angular_core.InputSignal<string>;
    readonly themeChange: _angular_core.OutputEmitterRef<string>;
    constructor();
    private initTheme;
    private updateChartTheme;
    onThemeChange(theme: string): void;
    ngOnDestroy(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ThemeBtnComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<ThemeBtnComponent, "theme-btn", never, { "types": { "alias": "types"; "required": false; "isSignal": true; }; "devTips": { "alias": "devTips"; "required": false; "isSignal": true; }; "deployUrl": { "alias": "deployUrl"; "required": false; "isSignal": true; }; }, { "themeChange": "themeChange"; }, never, never, true, never>;
}

declare class ThemeBtnModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ThemeBtnModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<ThemeBtnModule, never, [typeof i1.CommonModule, typeof i2.NzDropdownModule, typeof i3.NzTooltipModule, typeof ThemeBtnComponent], [typeof ThemeBtnComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<ThemeBtnModule>;
}

export { ALAIN_THEME_BTN_KEYS, ThemeBtnComponent, ThemeBtnModule };
export type { ThemeBtnType };
