import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
export declare class ErrorCollectComponent implements OnInit {
    private el;
    private cdr;
    private doc;
    private directionality;
    private formEl;
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
}
