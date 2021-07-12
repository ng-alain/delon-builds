import { Pipe, NgModule } from '@angular/core';
import { formatMask } from '@delon/util/format';

class FormatMaskPipe {
    /**
     * Format mask
     *
     * 格式化掩码
     * ```ts
     * formatMask('123', '(###)') => (123)
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
