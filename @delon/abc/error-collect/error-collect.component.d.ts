import { OnInit } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import * as i0 from "@angular/core";
export declare class ErrorCollectComponent implements OnInit {
    private readonly el;
    private readonly doc;
    private readonly platform;
    private readonly destroy$;
    private formEl;
    _hiden: import("@angular/core").WritableSignal<boolean>;
    count: import("@angular/core").WritableSignal<number>;
    dir: import("@angular/core").Signal<import("@angular/cdk/bidi-module.d-dc5464ba").a | undefined>;
    readonly freq: import("@angular/core").InputSignalWithTransform<number, unknown>;
    readonly offsetTop: import("@angular/core").InputSignalWithTransform<number, unknown>;
    constructor(configSrv: AlainConfigService);
    private get errEls();
    private update;
    _click(): boolean;
    private findParent;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorCollectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ErrorCollectComponent, "error-collect, [error-collect]", ["errorCollect"], { "freq": { "alias": "freq"; "required": false; "isSignal": true; }; "offsetTop": { "alias": "offsetTop"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
