import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { NumberInput } from '@delon/util/decorator';
import { LazyService } from '@delon/util/other';
import * as i0 from "@angular/core";
export declare class QRComponent implements OnChanges, AfterViewInit, OnDestroy {
    private cdr;
    private lazySrv;
    private platform;
    static ngAcceptInputType_padding: NumberInput;
    static ngAcceptInputType_size: NumberInput;
    static ngAcceptInputType_delay: NumberInput;
    private lazy$;
    private qr;
    private cog;
    private option;
    private inited;
    dataURL: string;
    background: string;
    backgroundAlpha: number;
    foreground: string;
    foregroundAlpha: number;
    level: string;
    mime: string;
    padding: number;
    size: number;
    value: string;
    delay: number;
    readonly change: EventEmitter<string>;
    constructor(cdr: ChangeDetectorRef, configSrv: AlainConfigService, lazySrv: LazyService, platform: Platform);
    private init;
    private initDelay;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    private toUtf8ByteArray;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QRComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QRComponent, "qr", ["qr"], { "background": "background"; "backgroundAlpha": "backgroundAlpha"; "foreground": "foreground"; "foregroundAlpha": "foregroundAlpha"; "level": "level"; "mime": "mime"; "padding": "padding"; "size": "size"; "value": "value"; "delay": "delay"; }, { "change": "change"; }, never, never>;
}
