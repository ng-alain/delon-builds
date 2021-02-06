import { Pipe } from '@angular/core';
import { formatMask } from '@delon/util/format';
export class FormatMaskPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9waXBlcy9mb3JtYXQvbWFzay5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdoRCxNQUFNLE9BQU8sY0FBYztJQUN6Qjs7Ozs7OztPQU9HO0lBQ0gsU0FBUyxDQUFDLEtBQWEsRUFBRSxJQUFZO1FBQ25DLE9BQU8sVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFaRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZm9ybWF0TWFzayB9IGZyb20gJ0BkZWxvbi91dGlsL2Zvcm1hdCc7XG5cbkBQaXBlKHsgbmFtZTogJ21hc2snIH0pXG5leHBvcnQgY2xhc3MgRm9ybWF0TWFza1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgLyoqXG4gICAqIEZvcm1hdCBtYXNrXG4gICAqXG4gICAqIOagvOW8j+WMluaOqeeggVxuICAgKiBgYGB0c1xuICAgKiBmb3JtYXRNYXNrKCcxMjMnLCAnKCMjIyknKSA9PiAoMTIzKVxuICAgKiBgYGBcbiAgICovXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBtYXNrOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBmb3JtYXRNYXNrKHZhbHVlLCBtYXNrKTtcbiAgfVxufVxuIl19