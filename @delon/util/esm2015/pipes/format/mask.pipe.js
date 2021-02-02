import { Pipe } from '@angular/core';
import { formatMask } from '@delon/util/format';
import * as i0 from "@angular/core";
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
/** @nocollapse */ FormatMaskPipe.ɵfac = function FormatMaskPipe_Factory(t) { return new (t || FormatMaskPipe)(); };
/** @nocollapse */ FormatMaskPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "mask", type: FormatMaskPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormatMaskPipe, [{
        type: Pipe,
        args: [{ name: 'mask' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9waXBlcy9mb3JtYXQvbWFzay5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFHaEQsTUFBTSxPQUFPLGNBQWM7SUFDekI7Ozs7Ozs7T0FPRztJQUNILFNBQVMsQ0FBQyxLQUFhLEVBQUUsSUFBWTtRQUNuQyxPQUFPLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7K0ZBWFUsY0FBYztnRkFBZCxjQUFjO3VGQUFkLGNBQWM7Y0FEMUIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZvcm1hdE1hc2sgfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuXG5AUGlwZSh7IG5hbWU6ICdtYXNrJyB9KVxuZXhwb3J0IGNsYXNzIEZvcm1hdE1hc2tQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIC8qKlxuICAgKiBGb3JtYXQgbWFza1xuICAgKlxuICAgKiDmoLzlvI/ljJbmjqnnoIFcbiAgICogYGBgdHNcbiAgICogZm9ybWF0TWFzaygnMTIzJywgJygjIyMpJykgPT4gKDEyMylcbiAgICogYGBgXG4gICAqL1xuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgbWFzazogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0TWFzayh2YWx1ZSwgbWFzayk7XG4gIH1cbn1cbiJdfQ==