import * as i0 from '@angular/core';
import { PipeTransform } from '@angular/core';
import { FormatMaskOption } from '@delon/util/format';

/**
 * Format mask
 *
 * 格式化掩码
 *
 * | 字符 | 描述 |
 * | --- | --- |
 * | `0` | 任意数字，若该位置字符不符合，则默认为 `0` 填充 |
 * | `9` | 任意数字 |
 * | `#` | 任意字符 |
 * | `U` | 转换大写 |
 * | `L` | 转换小写 |
 * | `*` | 转换为 `*` 字符 |
 *
 * ```ts
 * formatMask('123', '(###)') => (123)
 * formatMask('15900000000', '999****9999') => 159****0000
 * ```
 */
declare class FormatMaskPipe implements PipeTransform {
    transform(value: string, mask: string | FormatMaskOption): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormatMaskPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FormatMaskPipe, "mask", true>;
}

declare class FormatPipeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormatPipeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormatPipeModule, never, [typeof FormatMaskPipe], [typeof FormatMaskPipe]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormatPipeModule>;
}

export { FormatMaskPipe, FormatPipeModule };
