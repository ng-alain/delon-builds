import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, Renderer2, SimpleChange } from '@angular/core';
import type { SafeValue } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BooleanInput } from '@delon/util/decorator';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzImageService } from 'ng-zorro-antd/image';
import { CellService } from './cell.service';
import type { CellOptions, CellTextResult, CellValue, CellWidgetData } from './cell.types';
import * as i0 from "@angular/core";
export declare class CellComponent implements OnChanges, OnDestroy {
    private srv;
    private router;
    private cdr;
    private el;
    private renderer;
    private imgSrv;
    private win;
    static ngAcceptInputType_loading: BooleanInput;
    static ngAcceptInputType_disabled: BooleanInput;
    private destroy$?;
    _text: string | SafeValue | string[] | number;
    _unit?: string;
    res?: CellTextResult;
    showDefault: boolean;
    value?: CellValue;
    readonly valueChange: EventEmitter<any>;
    options?: CellOptions;
    loading: boolean;
    disabled: boolean;
    /**
     * 货币快捷项
     *
     * @example
     * <cell [currency]="1000"></cell>
     * 等同于
     * <cell [value]="1000" [options]="{type: 'currency'}"></cell>
     */
    set currency(value: number);
    get safeOpt(): CellOptions;
    get isText(): boolean;
    get hostData(): CellWidgetData;
    constructor(srv: CellService, router: Router, cdr: ChangeDetectorRef, el: ElementRef<HTMLElement>, renderer: Renderer2, imgSrv: NzImageService, win: any);
    private updateValue;
    private setClass;
    ngOnChanges(changes: {
        [p in keyof CellComponent]?: SimpleChange;
    }): void;
    change(value: NzSafeAny): void;
    _link(e: Event): void;
    _showImg(img: string): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CellComponent, "cell, [cell]", ["cell"], { "value": { "alias": "value"; "required": false; }; "options": { "alias": "options"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "currency": { "alias": "currency"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, false, never>;
}
