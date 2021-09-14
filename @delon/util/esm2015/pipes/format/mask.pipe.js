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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9waXBlcy9mb3JtYXQvbWFzay5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdoRCxNQUFNLE9BQU8sY0FBYztJQUN6Qjs7Ozs7OztPQU9HO0lBQ0gsU0FBUyxDQUFDLEtBQWEsRUFBRSxJQUFZO1FBQ25DLE9BQU8sVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFaRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBmb3JtYXRNYXNrIH0gZnJvbSAnQGRlbG9uL3V0aWwvZm9ybWF0JztcblxuQFBpcGUoeyBuYW1lOiAnbWFzaycgfSlcbmV4cG9ydCBjbGFzcyBGb3JtYXRNYXNrUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICogRm9ybWF0IG1hc2tcbiAgICpcbiAgICog5qC85byP5YyW5o6p56CBXG4gICAqIGBgYHRzXG4gICAqIGZvcm1hdE1hc2soJzEyMycsICcoIyMjKScpID0+ICgxMjMpXG4gICAqIGBgYFxuICAgKi9cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIG1hc2s6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZvcm1hdE1hc2sodmFsdWUsIG1hc2spO1xuICB9XG59XG4iXX0=