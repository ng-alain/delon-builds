import { Direction } from '@angular/cdk/bidi';
import { OnInit } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import * as i0 from "@angular/core";
export declare class ErrorCollectComponent implements OnInit {
    private readonly el;
    private readonly cdr;
    private readonly doc;
    private readonly directionality;
    private readonly platform;
    private readonly destroy$;
    private formEl;
    _hiden: boolean;
    count: number;
    dir?: Direction;
    freq: number;
    offsetTop: number;
    constructor(configSrv: AlainConfigService);
    private get errEls();
    private update;
    _click(): boolean;
    private install;
    private findParent;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorCollectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ErrorCollectComponent, "error-collect, [error-collect]", ["errorCollect"], { "freq": { "alias": "freq"; "required": false; }; "offsetTop": { "alias": "offsetTop"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_freq: unknown;
    static ngAcceptInputType_offsetTop: unknown;
}
