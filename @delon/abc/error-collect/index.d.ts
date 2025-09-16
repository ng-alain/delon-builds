import * as _angular_cdk_bidi_module_d_IN1Vp56w from '@angular/cdk/bidi-module.d-IN1Vp56w';
import * as _angular_core from '@angular/core';
import { OnInit } from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/icon';

declare class ErrorCollectComponent implements OnInit {
    private readonly el;
    private readonly doc;
    private readonly platform;
    private readonly destroy$;
    private readonly cogSrv;
    private formEl;
    _hiden: _angular_core.WritableSignal<boolean>;
    count: _angular_core.WritableSignal<number>;
    dir: _angular_core.WritableSignal<_angular_cdk_bidi_module_d_IN1Vp56w.a>;
    readonly freq: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly offsetTop: _angular_core.InputSignalWithTransform<number, unknown>;
    constructor();
    private get errEls();
    private update;
    _click(): boolean;
    private findParent;
    ngOnInit(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ErrorCollectComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<ErrorCollectComponent, "error-collect, [error-collect]", ["errorCollect"], { "freq": { "alias": "freq"; "required": false; "isSignal": true; }; "offsetTop": { "alias": "offsetTop"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class ErrorCollectModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<ErrorCollectModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<ErrorCollectModule, never, [typeof i1.CommonModule, typeof i2.NzIconModule, typeof ErrorCollectComponent], [typeof ErrorCollectComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<ErrorCollectModule>;
}

export { ErrorCollectComponent, ErrorCollectModule };
