import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { DelonLocaleService, LocaleData } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export type ExceptionType = 403 | 404 | 500;
export declare class ExceptionComponent implements OnInit {
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
    private typeDict;
    set type(value: ExceptionType);
    private fixImg;
    set img(value: string);
    set title(value: string);
    set desc(value: string);
    backRouterLink: string | NzSafeAny[];
    checkContent(): void;
    constructor(i18n: DelonLocaleService, dom: DomSanitizer, configSrv: AlainConfigService, directionality: Directionality, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExceptionComponent, [null, null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExceptionComponent, "exception", ["exception"], { "type": { "alias": "type"; "required": false; }; "img": { "alias": "img"; "required": false; }; "title": { "alias": "title"; "required": false; }; "desc": { "alias": "desc"; "required": false; }; "backRouterLink": { "alias": "backRouterLink"; "required": false; }; }, {}, never, ["*"], true, never>;
}
