import { ChangeDetectorRef, EventEmitter, OnChanges } from '@angular/core';
import { AlainConfigService } from '@delon/theme';
import { QRService } from './qr.service';
export declare class QRComponent implements OnChanges {
    private srv;
    private cdr;
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
    readonly change: EventEmitter<string>;
    constructor(srv: QRService, cdr: ChangeDetectorRef, configSrv: AlainConfigService);
    ngOnChanges(): void;
}
