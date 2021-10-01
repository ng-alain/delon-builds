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
FormatMaskPipe.decorators = [
    { type: Pipe, args: [{ name: 'mask' },] }
];

const PIPES = [FormatMaskPipe];
class FormatPipeModule {
}
FormatPipeModule.decorators = [
    { type: NgModule, args: [{
                declarations: PIPES,
                exports: PIPES
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { FormatMaskPipe, FormatPipeModule };
//# sourceMappingURL=delon-util-pipes-format.js.map
