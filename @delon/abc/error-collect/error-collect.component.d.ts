import { OnInit, OnDestroy, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ErrorCollectConfig } from './error-collect.config';
/**
 * 错误消息采集器
 * PS：虽然此法并不好看，但对响应式表单&模板表单有很好的效果。
 */
export declare class ErrorCollectComponent implements OnInit, OnDestroy {
    private el;
    private cd;
    private doc;
    private $time;
    private formEl;
    freq: number;
    offsetTop: number;
    _hiden: boolean;
    count: number;
    constructor(cog: ErrorCollectConfig, el: ElementRef, cd: ChangeDetectorRef, doc: any);
    private readonly errEls;
    private update;
    _click(): boolean;
    private install;
    private uninstall;
    private findParent;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
