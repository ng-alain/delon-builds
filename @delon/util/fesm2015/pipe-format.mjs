import * as i0 from '@angular/core';
import { Pipe, NgModule } from '@angular/core';
import { formatMask } from '@delon/util/format';

class FormatMaskPipe {
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
    transform(value, mask) {
        return formatMask(value, mask);
    }
}
FormatMaskPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: FormatMaskPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
FormatMaskPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: FormatMaskPipe, name: "mask" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: FormatMaskPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'mask' }]
        }] });

const PIPES = [FormatMaskPipe];
class FormatPipeModule {
}
FormatPipeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: FormatPipeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormatPipeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.4", ngImport: i0, type: FormatPipeModule, declarations: [FormatMaskPipe], exports: [FormatMaskPipe] });
FormatPipeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: FormatPipeModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: FormatPipeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: PIPES,
                    exports: PIPES
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FormatMaskPipe, FormatPipeModule };
//# sourceMappingURL=pipe-format.mjs.map
