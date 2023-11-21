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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormatMaskPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.0.4", ngImport: i0, type: FormatMaskPipe, isStandalone: true, name: "mask" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: FormatMaskPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'mask', standalone: true }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9waXBlcy9mb3JtYXQvbWFzay5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxVQUFVLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7O0FBR2xFLE1BQU0sT0FBTyxjQUFjO0lBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FrQkc7SUFDSCxTQUFTLENBQUMsS0FBYSxFQUFFLElBQStCO1FBQ3RELE9BQU8sVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzhHQXRCVSxjQUFjOzRHQUFkLGNBQWM7OzJGQUFkLGNBQWM7a0JBRDFCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGZvcm1hdE1hc2ssIEZvcm1hdE1hc2tPcHRpb24gfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuXG5AUGlwZSh7IG5hbWU6ICdtYXNrJywgc3RhbmRhbG9uZTogdHJ1ZSB9KVxuZXhwb3J0IGNsYXNzIEZvcm1hdE1hc2tQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIC8qKlxuICAgKiBGb3JtYXQgbWFza1xuICAgKlxuICAgKiDmoLzlvI/ljJbmjqnnoIFcbiAgICpcbiAgICogfCDlrZfnrKYgfCDmj4/ov7AgfFxuICAgKiB8IC0tLSB8IC0tLSB8XG4gICAqIHwgYDBgIHwg5Lu75oSP5pWw5a2X77yM6Iul6K+l5L2N572u5a2X56ym5LiN56ym5ZCI77yM5YiZ6buY6K6k5Li6IGAwYCDloavlhYUgfFxuICAgKiB8IGA5YCB8IOS7u+aEj+aVsOWtlyB8XG4gICAqIHwgYCNgIHwg5Lu75oSP5a2X56ymIHxcbiAgICogfCBgVWAgfCDovazmjaLlpKflhpkgfFxuICAgKiB8IGBMYCB8IOi9rOaNouWwj+WGmSB8XG4gICAqIHwgYCpgIHwg6L2s5o2i5Li6IGAqYCDlrZfnrKYgfFxuICAgKlxuICAgKiBgYGB0c1xuICAgKiBmb3JtYXRNYXNrKCcxMjMnLCAnKCMjIyknKSA9PiAoMTIzKVxuICAgKiBmb3JtYXRNYXNrKCcxNTkwMDAwMDAwMCcsICc5OTkqKioqOTk5OScpID0+IDE1OSoqKiowMDAwXG4gICAqIGBgYFxuICAgKi9cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIG1hc2s6IHN0cmluZyB8IEZvcm1hdE1hc2tPcHRpb24pOiBzdHJpbmcge1xuICAgIHJldHVybiBmb3JtYXRNYXNrKHZhbHVlLCBtYXNrKTtcbiAgfVxufVxuIl19