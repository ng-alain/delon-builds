import * as _angular_platform_browser from '@angular/platform-browser';
import * as _angular_cdk_bidi_module_d_IN1Vp56w from '@angular/cdk/bidi-module.d-IN1Vp56w';
import * as _angular_core from '@angular/core';
import * as i4 from '@delon/theme';
import { LocaleData } from '@delon/theme';
import * as i1 from '@angular/common';
import * as i2 from '@angular/cdk/observers';
import * as i3 from '@angular/router';
import * as i5 from 'ng-zorro-antd/button';

type ExceptionType = 403 | 404 | 500;
declare class ExceptionComponent {
    private readonly i18n;
    private readonly dom;
    private readonly directionality;
    private readonly cogSrv;
    private readonly conTpl;
    locale: _angular_core.Signal<LocaleData>;
    dir: _angular_core.Signal<_angular_cdk_bidi_module_d_IN1Vp56w.a>;
    hasCon: _angular_core.WritableSignal<boolean>;
    private typeDict;
    typeItem: _angular_core.WritableSignal<{
        img: string;
        title: string;
        desc?: string;
    } | null>;
    type: _angular_core.InputSignal<ExceptionType>;
    img: _angular_core.InputSignal<string | undefined>;
    title: _angular_core.InputSignal<string | undefined>;
    desc: _angular_core.InputSignal<string | undefined>;
    backRouterLink: _angular_core.InputSignal<string | any[]>;
    _img: _angular_core.Signal<_angular_platform_browser.SafeStyle | null>;
    _title: _angular_core.Signal<_angular_platform_browser.SafeHtml | null>;
    _desc: _angular_core.Signal<_angular_platform_browser.SafeHtml | null>;
    constructor();
    checkContent(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ExceptionComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<ExceptionComponent, "exception", ["exception"], { "type": { "alias": "type"; "required": false; "isSignal": true; }; "img": { "alias": "img"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "desc": { "alias": "desc"; "required": false; "isSignal": true; }; "backRouterLink": { "alias": "backRouterLink"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class ExceptionModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ExceptionModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<ExceptionModule, never, [typeof i1.CommonModule, typeof i2.ObserversModule, typeof i3.RouterModule, typeof i4.DelonLocaleModule, typeof i5.NzButtonModule, typeof ExceptionComponent], [typeof ExceptionComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<ExceptionModule>;
}

export { ExceptionComponent, ExceptionModule };
export type { ExceptionType };
