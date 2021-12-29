import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { DelonLocaleService, LocaleData } from '@delon/theme';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare type ExceptionType = 403 | 404 | 500;
export declare class ExceptionComponent implements OnInit, OnDestroy {
    private i18n;
    private dom;
    private directionality;
    private cdr;
    static ngAcceptInputType_type: ExceptionType | string;
    private destroy$;
    private conTpl;
    _type: ExceptionType;
    locale: LocaleData;
    hasCon: boolean;
    dir: Direction;
    _img: SafeUrl;
    _title: SafeHtml;
    _desc: SafeHtml;
    set type(value: ExceptionType);
    private fixImg;
    set img(value: string);
    set title(value: string);
    set desc(value: string);
    backRouterLink: string | NzSafeAny[];
    checkContent(): void;
    constructor(i18n: DelonLocaleService, dom: DomSanitizer, directionality: Directionality, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExceptionComponent, [null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExceptionComponent, "exception", ["exception"], { "type": "type"; "img": "img"; "title": "title"; "desc": "desc"; "backRouterLink": "backRouterLink"; }, {}, never, ["*"]>;
}
