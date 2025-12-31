import * as _angular_platform_browser from '@angular/platform-browser';
import * as _angular_cdk_bidi from '@angular/cdk/bidi';
import * as _angular_core from '@angular/core';
import * as _delon_theme from '@delon/theme';
import * as i1 from '@angular/common';
import * as i2 from '@angular/cdk/observers';
import * as i3 from '@angular/router';
import * as i5 from 'ng-zorro-antd/button';

type ExceptionType = 403 | 404 | 500;
declare class ExceptionComponent {
    private readonly dom;
    private readonly cogSrv;
    private readonly conTpl;
    protected locale: _angular_core.Signal<_delon_theme.ExceptionLocaleData>;
    protected dir: _angular_core.WritableSignal<_angular_cdk_bidi.Direction>;
    protected hasCon: _angular_core.WritableSignal<boolean>;
    private typeDict;
    protected typeItem: _angular_core.WritableSignal<{
        img: string;
        title: string;
        desc?: string;
    } | null>;
    readonly type: _angular_core.InputSignal<ExceptionType>;
    readonly img: _angular_core.InputSignal<string | undefined>;
    readonly title: _angular_core.InputSignal<string | undefined>;
    readonly desc: _angular_core.InputSignal<string | undefined>;
    readonly backRouterLink: _angular_core.InputSignal<string | any[]>;
    protected readonly _img: _angular_core.Signal<_angular_platform_browser.SafeStyle | null>;
    protected readonly _title: _angular_core.Signal<_angular_platform_browser.SafeHtml | null>;
    protected readonly _desc: _angular_core.Signal<_angular_platform_browser.SafeHtml | null>;
    constructor();
    protected checkContent(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ExceptionComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<ExceptionComponent, "exception", ["exception"], { "type": { "alias": "type"; "required": false; "isSignal": true; }; "img": { "alias": "img"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "desc": { "alias": "desc"; "required": false; "isSignal": true; }; "backRouterLink": { "alias": "backRouterLink"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class ExceptionModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ExceptionModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<ExceptionModule, never, [typeof i1.CommonModule, typeof i2.ObserversModule, typeof i3.RouterModule, typeof _delon_theme.DelonLocaleModule, typeof i5.NzButtonModule, typeof ExceptionComponent], [typeof ExceptionComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<ExceptionModule>;
}

export { ExceptionComponent, ExceptionModule };
export type { ExceptionType };
