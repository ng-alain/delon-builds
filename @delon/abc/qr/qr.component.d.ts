import { ChangeDetectorRef, EventEmitter, OnChanges } from '@angular/core';
import { QRConfig } from './qr.config';
import { QRService } from './qr.service';
export declare class QRComponent implements OnChanges {
    private srv;
    private cd;
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
    constructor(cog: QRConfig, srv: QRService, cd: ChangeDetectorRef);
    ngOnChanges(): void;
}
