import { Platform } from '@angular/cdk/platform';
import { ElementRef, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { AlainConfigService, BooleanInput, NumberInput } from '@delon/util';
import * as i0 from "@angular/core";
export declare class ImageDirective implements OnChanges, OnInit {
    private http;
    private platform;
    static ngAcceptInputType_size: NumberInput;
    static ngAcceptInputType_useHttp: BooleanInput;
    src: string;
    size: number;
    error: string;
    useHttp: boolean;
    private inited;
    private imgEl;
    constructor(el: ElementRef<HTMLImageElement>, configSrv: AlainConfigService, http: _HttpClient, platform: Platform);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
    private update;
    private getByHttp;
    private updateError;
    private setError;
    static ɵfac: i0.ɵɵFactoryDef<ImageDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ImageDirective, "[_src]", ["_src"], { "src": "_src"; "size": "size"; "error": "error"; "useHttp": "useHttp"; }, {}, never>;
}
