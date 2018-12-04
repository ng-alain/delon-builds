import { OnInit, OnDestroy } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
export declare class ExceptionComponent implements OnInit, OnDestroy {
    private i18n;
    private i18n$;
    private conTpl;
    _type: number;
    locale: any;
    hasCon: boolean;
    _img: string;
    _title: string;
    _desc: string;
    type: 403 | 404 | 500;
    img: any;
    title: any;
    desc: any;
    checkContent(): void;
    constructor(i18n: DelonLocaleService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
