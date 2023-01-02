import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { DelonLocaleService, LocaleData } from '@delon/theme';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
import type { NgClassType } from 'ng-zorro-antd/core/types';
import { NoticeIconSelect, NoticeItem } from './notice-icon.types';
import * as i0 from "@angular/core";
export declare class NoticeIconComponent implements OnInit, OnChanges, OnDestroy {
    private i18n;
    private cdr;
    static ngAcceptInputType_count: NumberInput;
    static ngAcceptInputType_loading: BooleanInput;
    static ngAcceptInputType_popoverVisible: BooleanInput;
    static ngAcceptInputType_centered: BooleanInput;
    private i18n$;
    locale: LocaleData;
    data: NoticeItem[];
    count?: number;
    loading: boolean;
    popoverVisible: boolean;
    btnClass?: NgClassType;
    btnIconClass?: NgClassType;
    centered: boolean;
    readonly select: EventEmitter<NoticeIconSelect>;
    readonly clear: EventEmitter<string>;
    readonly popoverVisibleChange: EventEmitter<boolean>;
    get overlayCls(): string;
    constructor(i18n: DelonLocaleService, cdr: ChangeDetectorRef);
    onVisibleChange(result: boolean): void;
    onSelect(i: NoticeIconSelect): void;
    onClear(title: string): void;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NoticeIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NoticeIconComponent, "notice-icon", ["noticeIcon"], { "data": "data"; "count": "count"; "loading": "loading"; "popoverVisible": "popoverVisible"; "btnClass": "btnClass"; "btnIconClass": "btnIconClass"; "centered": "centered"; }, { "select": "select"; "clear": "clear"; "popoverVisibleChange": "popoverVisibleChange"; }, never, never, false, never>;
}
