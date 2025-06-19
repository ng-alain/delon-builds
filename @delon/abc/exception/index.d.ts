import { Direction } from '@angular/cdk/bidi';
import * as i0 from '@angular/core';
import { OnInit } from '@angular/core';
import { SafeUrl, SafeHtml } from '@angular/platform-browser';
import * as i4 from '@delon/theme';
import { LocaleData } from '@delon/theme';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i1 from '@angular/common';
import * as i2 from '@angular/cdk/observers';
import * as i3 from '@angular/router';
import * as i5 from 'ng-zorro-antd/button';

type ExceptionType = 403 | 404 | 500;
declare class ExceptionComponent implements OnInit {
    static ngAcceptInputType_type: ExceptionType | string;
    private readonly i18n;
    private readonly dom;
    private readonly directionality;
    private readonly cdr;
    private readonly destroy$;
    private readonly cogSrv;
    private conTpl;
    _type: ExceptionType;
    locale: LocaleData;
    hasCon: boolean;
    dir?: Direction;
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
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExceptionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExceptionComponent, "exception", ["exception"], { "type": { "alias": "type"; "required": false; }; "img": { "alias": "img"; "required": false; }; "title": { "alias": "title"; "required": false; }; "desc": { "alias": "desc"; "required": false; }; "backRouterLink": { "alias": "backRouterLink"; "required": false; }; }, {}, never, ["*"], true, never>;
}

declare class ExceptionModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ExceptionModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ExceptionModule, never, [typeof i1.CommonModule, typeof i2.ObserversModule, typeof i3.RouterModule, typeof i4.DelonLocaleModule, typeof i5.NzButtonModule, typeof ExceptionComponent], [typeof ExceptionComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ExceptionModule>;
}

export { ExceptionComponent, ExceptionModule };
export type { ExceptionType };
