import { Pipe } from '@angular/core';
import { formatMask } from '@delon/util/format';
import * as i0 from "@angular/core";
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
export class FormatMaskPipe {
    transform(value, mask) {
        return formatMask(value, mask);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: FormatMaskPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.1.0", ngImport: i0, type: FormatMaskPipe, isStandalone: true, name: "mask" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: FormatMaskPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'mask', standalone: true }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9waXBlcy9mb3JtYXQvbWFzay5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxVQUFVLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7O0FBRWxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkc7QUFFSCxNQUFNLE9BQU8sY0FBYztJQUN6QixTQUFTLENBQUMsS0FBYSxFQUFFLElBQStCO1FBQ3RELE9BQU8sVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzhHQUhVLGNBQWM7NEdBQWQsY0FBYzs7MkZBQWQsY0FBYztrQkFEMUIsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZm9ybWF0TWFzaywgRm9ybWF0TWFza09wdGlvbiB9IGZyb20gJ0BkZWxvbi91dGlsL2Zvcm1hdCc7XG5cbi8qKlxuICogRm9ybWF0IG1hc2tcbiAqXG4gKiDmoLzlvI/ljJbmjqnnoIFcbiAqXG4gKiB8IOWtl+espiB8IOaPj+i/sCB8XG4gKiB8IC0tLSB8IC0tLSB8XG4gKiB8IGAwYCB8IOS7u+aEj+aVsOWtl++8jOiLpeivpeS9jee9ruWtl+espuS4jeespuWQiO+8jOWImem7mOiupOS4uiBgMGAg5aGr5YWFIHxcbiAqIHwgYDlgIHwg5Lu75oSP5pWw5a2XIHxcbiAqIHwgYCNgIHwg5Lu75oSP5a2X56ymIHxcbiAqIHwgYFVgIHwg6L2s5o2i5aSn5YaZIHxcbiAqIHwgYExgIHwg6L2s5o2i5bCP5YaZIHxcbiAqIHwgYCpgIHwg6L2s5o2i5Li6IGAqYCDlrZfnrKYgfFxuICpcbiAqIGBgYHRzXG4gKiBmb3JtYXRNYXNrKCcxMjMnLCAnKCMjIyknKSA9PiAoMTIzKVxuICogZm9ybWF0TWFzaygnMTU5MDAwMDAwMDAnLCAnOTk5KioqKjk5OTknKSA9PiAxNTkqKioqMDAwMFxuICogYGBgXG4gKi9cbkBQaXBlKHsgbmFtZTogJ21hc2snLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgRm9ybWF0TWFza1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIG1hc2s6IHN0cmluZyB8IEZvcm1hdE1hc2tPcHRpb24pOiBzdHJpbmcge1xuICAgIHJldHVybiBmb3JtYXRNYXNrKHZhbHVlLCBtYXNrKTtcbiAgfVxufVxuIl19