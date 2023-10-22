import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { NumberInput } from '@delon/util/decorator';
import { LazyService } from '@delon/util/other';
import * as i0 from "@angular/core";
/**
 * @deprecated Will be removed in 18.0.0, please use [nz-qrcode](https://ng.ant.design/components/qr-code) instead.
 */
export declare class QRComponent implements OnChanges, AfterViewInit, OnDestroy {
    private cdr;
    private lazySrv;
    private platform;
    static ngAcceptInputType_padding: NumberInput;
    static ngAcceptInputType_size: NumberInput;
    static ngAcceptInputType_delay: NumberInput;
    private lazy$?;
    private qr;
    private cog;
    private option;
    private inited;
    dataURL: string;
    background?: string;
    backgroundAlpha?: number;
    foreground?: string;
    foregroundAlpha?: number;
    level?: string;
    mime?: string;
    padding?: number;
    size?: number;
    value: string | (() => string);
    delay?: number;
    readonly change: EventEmitter<string>;
    constructor(cdr: ChangeDetectorRef, configSrv: AlainConfigService, lazySrv: LazyService, platform: Platform);
    private init;
    private initDelay;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    private toUtf8ByteArray;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QRComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QRComponent, "qr", ["qr"], { "background": { "alias": "background"; "required": false; }; "backgroundAlpha": { "alias": "backgroundAlpha"; "required": false; }; "foreground": { "alias": "foreground"; "required": false; }; "foregroundAlpha": { "alias": "foregroundAlpha"; "required": false; }; "level": { "alias": "level"; "required": false; }; "mime": { "alias": "mime"; "required": false; }; "padding": { "alias": "padding"; "required": false; }; "size": { "alias": "size"; "required": false; }; "value": { "alias": "value"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; }, { "change": "change"; }, never, never, false, never>;
}
