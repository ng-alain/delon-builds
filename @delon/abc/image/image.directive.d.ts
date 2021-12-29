import { Platform } from '@angular/cdk/platform';
import { ElementRef, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
import { ModalOptions, NzModalService } from 'ng-zorro-antd/modal';
import * as i0 from "@angular/core";
/**
 * @deprecated Will be removed in 14.0.0, Pls used [nz-image](https://ng.ant.design/components/image/en) instead, for examples:
 */
export declare class ImageDirective implements OnChanges, OnInit, OnDestroy {
    private http;
    private platform;
    private modal;
    static ngAcceptInputType_size: NumberInput;
    static ngAcceptInputType_useHttp: BooleanInput;
    src: string;
    size: number;
    error: string;
    useHttp: boolean;
    previewSrc: string;
    previewModalOptions: ModalOptions;
    private inited;
    private imgEl;
    private destroy$;
    constructor(el: ElementRef<HTMLImageElement>, configSrv: AlainConfigService, http: _HttpClient, platform: Platform, modal: NzModalService);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
    private update;
    private getSrc;
    private getByHttp;
    private updateError;
    private setError;
    open(ev: Event): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ImageDirective, "[_src]", ["_src"], { "src": "_src"; "size": "size"; "error": "error"; "useHttp": "useHttp"; "previewSrc": "previewSrc"; "previewModalOptions": "previewModalOptions"; }, {}, never>;
}
