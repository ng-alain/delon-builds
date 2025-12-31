import * as _angular_cdk_bidi from '@angular/cdk/bidi';
import * as i0 from '@angular/core';
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
    protected count: i0.WritableSignal<number>;
    protected dir: i0.WritableSignal<_angular_cdk_bidi.Direction>;
    readonly freq: i0.InputSignalWithTransform<number, unknown>;
    readonly offsetTop: i0.InputSignalWithTransform<number, unknown>;
    constructor();
    private get errEls();
    private update;
    protected _click(): boolean;
    private findParent;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorCollectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ErrorCollectComponent, "error-collect, [error-collect]", ["errorCollect"], { "freq": { "alias": "freq"; "required": false; "isSignal": true; }; "offsetTop": { "alias": "offsetTop"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}

declare class ErrorCollectModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorCollectModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ErrorCollectModule, never, [typeof i1.CommonModule, typeof i2.NzIconModule, typeof ErrorCollectComponent], [typeof ErrorCollectComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ErrorCollectModule>;
}

export { ErrorCollectComponent, ErrorCollectModule };
