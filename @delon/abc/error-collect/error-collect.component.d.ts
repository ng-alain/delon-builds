import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { AlainConfigService } from '@delon/theme';
export declare class ErrorCollectComponent implements OnInit, OnDestroy {
    private el;
    private cdr;
    private doc;
    private $time;
    private formEl;
    freq: number;
    offsetTop: number;
    _hiden: boolean;
    count: number;
    constructor(el: ElementRef, cdr: ChangeDetectorRef, doc: any, configSrv: AlainConfigService);
    private get errEls();
    private update;
    _click(): boolean;
    private install;
    private uninstall;
    private findParent;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
