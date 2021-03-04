import { Direction, Directionality } from '@angular/cdk/bidi';
import { OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { DelonLocaleService, LocaleData } from '@delon/theme';
export declare type ExceptionType = 403 | 404 | 500;
export declare class ExceptionComponent implements OnInit {
    private i18n;
    private dom;
    private directionality;
    static ngAcceptInputType_type: ExceptionType | string;
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
    checkContent(): void;
    constructor(i18n: DelonLocaleService, dom: DomSanitizer, directionality: Directionality);
    ngOnInit(): void;
}
