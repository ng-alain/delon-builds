import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FormatMaskPipe implements PipeTransform {
    /**
     * Format mask
     *
     * 格式化掩码
     * ```ts
     * formatMask('123', '(###)') => (123)
     * ```
     */
    transform(value: string, mask: string): string;
    static ɵfac: i0.ɵɵFactoryDef<FormatMaskPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<FormatMaskPipe, "mask">;
}
