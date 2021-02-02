import { PipeTransform } from '@angular/core';
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
}
