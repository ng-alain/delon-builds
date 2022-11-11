import { ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, Renderer2 } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BooleanInput } from '@delon/util/decorator';
import { NzImageService } from 'ng-zorro-antd/image';
import { CellService } from './cell.service';
import type { CellOptions, CellTextResult, CellWidgetData } from './cell.types';
import * as i0 from "@angular/core";
export declare class CellComponent implements OnChanges, OnDestroy {
    private srv;
    private router;
    private cdr;
    private el;
    private renderer;
    private imgSrv;
    private win;
    static ngAcceptInputType_truncate: BooleanInput;
    static ngAcceptInputType_loading: BooleanInput;
    private destroy$?;
    _text: string | SafeHtml;
    _unit?: string;
    res?: CellTextResult;
    showDefault: boolean;
    value?: unknown;
    default: string;
    defaultCondition?: unknown;
    options?: CellOptions;
    unit?: string;
    truncate: boolean;
    loading: boolean;
    type?: 'primary' | 'success' | 'danger' | 'warning';
    size?: 'large' | 'small';
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
    ngOnChanges(): void;
    _link(e: Event): void;
    _showImg(img: string): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CellComponent, "cell, [cell]", ["cell"], { "value": "value"; "default": "default"; "defaultCondition": "defaultCondition"; "options": "options"; "unit": "unit"; "truncate": "truncate"; "loading": "loading"; "type": "type"; "size": "size"; "currency": "currency"; }, {}, never, never, false>;
}
