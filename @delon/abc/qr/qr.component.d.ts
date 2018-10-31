import { OnChanges, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { QRService } from './qr.service';
import { QRConfig } from './qr.config';
export declare class QRComponent implements OnChanges {
    private srv;
    private cd;
    dataURL: string;
    /** 背景 */
    background: string;
    /** 背景透明级别，范围：`0-1` 之间 */
    backgroundAlpha: number;
    /** 前景 */
    foreground: string;
    /** 前景透明级别，范围：`0-1` 之间 */
    foregroundAlpha: number;
    /** 误差校正级别 */
    level: string;
    /** 二维码输出图片MIME类型 */
    mime: string;
    /** 内边距（单位：px） */
    padding: number;
    /** 大小（单位：px） */
    size: number;
    /** 值 */
    value: string;
    /** 变更时回调 */
    change: EventEmitter<string>;
    constructor(cog: QRConfig, srv: QRService, cd: ChangeDetectorRef);
    ngOnChanges(): void;
}
