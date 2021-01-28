import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { AlainConfigService } from '@delon/util';
import * as i0 from "@angular/core";
export declare class ErrorCollectComponent implements OnInit, OnDestroy {
    private el;
    private cdr;
    private doc;
    private directionality;
    private formEl;
    private destroy$;
    _hiden: boolean;
    count: number;
    dir: Direction;
    freq: number;
    offsetTop: number;
    constructor(el: ElementRef, cdr: ChangeDetectorRef, doc: any, configSrv: AlainConfigService, directionality: Directionality);
    private get errEls();
    private update;
    _click(): boolean;
    private install;
    private findParent;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ErrorCollectComponent, [null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ErrorCollectComponent, "error-collect, [error-collect]", ["errorCollect"], { "freq": "freq"; "offsetTop": "offsetTop"; }, {}, never, never>;
}
