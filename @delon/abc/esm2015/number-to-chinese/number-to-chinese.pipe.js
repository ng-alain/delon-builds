import { Pipe } from '@angular/core';
import { numberToChinese } from './number-to-chinese';
import * as i0 from "@angular/core";
/**
 *  @deprecated Will be removed in 12.0.0, Pls used [cny](/util/pipes-currency/zh#cny) pipe instead
 */
export class NaNumberToChinesePipe {
    transform(value, rmb = true, minusSymbol = '负') {
        return numberToChinese(value, rmb, { minusSymbol });
    }
}
/** @nocollapse */ NaNumberToChinesePipe.ɵfac = function NaNumberToChinesePipe_Factory(t) { return new (t || NaNumberToChinesePipe)(); };
/** @nocollapse */ NaNumberToChinesePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "n2c", type: NaNumberToChinesePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NaNumberToChinesePipe, [{
        type: Pipe,
        args: [{ name: 'n2c' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRvLWNoaW5lc2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9udW1iZXItdG8tY2hpbmVzZS9udW1iZXItdG8tY2hpbmVzZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdEQ7O0dBRUc7QUFFSCxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLFNBQVMsQ0FBQyxLQUFzQixFQUFFLE1BQWUsSUFBSSxFQUFFLGNBQXNCLEdBQUc7UUFDOUUsT0FBTyxlQUFlLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7NkdBSFUscUJBQXFCO3NGQUFyQixxQkFBcUI7dUZBQXJCLHFCQUFxQjtjQURqQyxJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbnVtYmVyVG9DaGluZXNlIH0gZnJvbSAnLi9udW1iZXItdG8tY2hpbmVzZSc7XG5cbi8qKlxuICogIEBkZXByZWNhdGVkIFdpbGwgYmUgcmVtb3ZlZCBpbiAxMi4wLjAsIFBscyB1c2VkIFtjbnldKC91dGlsL3BpcGVzLWN1cnJlbmN5L3poI2NueSkgcGlwZSBpbnN0ZWFkXG4gKi9cbkBQaXBlKHsgbmFtZTogJ24yYycgfSlcbmV4cG9ydCBjbGFzcyBOYU51bWJlclRvQ2hpbmVzZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIHJtYjogYm9vbGVhbiA9IHRydWUsIG1pbnVzU3ltYm9sOiBzdHJpbmcgPSAn6LSfJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG51bWJlclRvQ2hpbmVzZSh2YWx1ZSwgcm1iLCB7IG1pbnVzU3ltYm9sIH0pO1xuICB9XG59XG4iXX0=