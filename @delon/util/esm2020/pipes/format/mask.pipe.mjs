import { Pipe } from '@angular/core';
import { formatMask } from '@delon/util/format';
import * as i0 from "@angular/core";
export class FormatMaskPipe {
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
FormatMaskPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: FormatMaskPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
FormatMaskPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.4", ngImport: i0, type: FormatMaskPipe, name: "mask" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: FormatMaskPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'mask' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9waXBlcy9mb3JtYXQvbWFzay5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxVQUFVLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7O0FBR2xFLE1BQU0sT0FBTyxjQUFjO0lBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FrQkc7SUFDSCxTQUFTLENBQUMsS0FBYSxFQUFFLElBQStCO1FBQ3RELE9BQU8sVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzsyR0F0QlUsY0FBYzt5R0FBZCxjQUFjOzJGQUFkLGNBQWM7a0JBRDFCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBmb3JtYXRNYXNrLCBGb3JtYXRNYXNrT3B0aW9uIH0gZnJvbSAnQGRlbG9uL3V0aWwvZm9ybWF0JztcblxuQFBpcGUoeyBuYW1lOiAnbWFzaycgfSlcbmV4cG9ydCBjbGFzcyBGb3JtYXRNYXNrUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICogRm9ybWF0IG1hc2tcbiAgICpcbiAgICog5qC85byP5YyW5o6p56CBXG4gICAqXG4gICAqIHwg5a2X56ymIHwg5o+P6L+wIHxcbiAgICogfCAtLS0gfCAtLS0gfFxuICAgKiB8IGAwYCB8IOS7u+aEj+aVsOWtl++8jOiLpeivpeS9jee9ruWtl+espuS4jeespuWQiO+8jOWImem7mOiupOS4uiBgMGAg5aGr5YWFIHxcbiAgICogfCBgOWAgfCDku7vmhI/mlbDlrZcgfFxuICAgKiB8IGAjYCB8IOS7u+aEj+Wtl+espiB8XG4gICAqIHwgYFVgIHwg6L2s5o2i5aSn5YaZIHxcbiAgICogfCBgTGAgfCDovazmjaLlsI/lhpkgfFxuICAgKiB8IGAqYCB8IOi9rOaNouS4uiBgKmAg5a2X56ymIHxcbiAgICpcbiAgICogYGBgdHNcbiAgICogZm9ybWF0TWFzaygnMTIzJywgJygjIyMpJykgPT4gKDEyMylcbiAgICogZm9ybWF0TWFzaygnMTU5MDAwMDAwMDAnLCAnOTk5KioqKjk5OTknKSA9PiAxNTkqKioqMDAwMFxuICAgKiBgYGBcbiAgICovXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBtYXNrOiBzdHJpbmcgfCBGb3JtYXRNYXNrT3B0aW9uKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0TWFzayh2YWx1ZSwgbWFzayk7XG4gIH1cbn1cbiJdfQ==