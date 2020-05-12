import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { OnDestroy, OnInit } from '@angular/core';
import { DelonLocaleService, LocaleData } from '@delon/theme';
export declare type ExceptionType = 403 | 404 | 500;
export declare class ExceptionComponent implements OnInit, OnDestroy {
    private i18n;
    private dom;
    private i18n$;
    private conTpl;
    _type: ExceptionType;
    locale: LocaleData;
    hasCon: boolean;
    _img: SafeUrl;
    _title: SafeHtml;
    _desc: SafeHtml;
    type: ExceptionType;
    private fixImg;
    img: string;
    title: string;
    desc: string;
    checkContent(): void;
    constructor(i18n: DelonLocaleService, dom: DomSanitizer);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
