import { Pipe } from '@angular/core';
import { CurrencyService } from '@delon/util/format';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/format";
export class CurrencyCNYPipe {
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * Converted into RMB notation.
     *
     * 转化成人民币表示法
     */
    transform(value, options) {
        return this.srv.cny(value, options);
    }
}
/** @nocollapse */ CurrencyCNYPipe.ɵfac = function CurrencyCNYPipe_Factory(t) { return new (t || CurrencyCNYPipe)(i0.ɵɵdirectiveInject(i1.CurrencyService)); };
/** @nocollapse */ CurrencyCNYPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "cny", type: CurrencyCNYPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CurrencyCNYPipe, [{
        type: Pipe,
        args: [{ name: 'cny' }]
    }], function () { return [{ type: i1.CurrencyService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY255LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3BpcGVzL2N1cnJlbmN5L2NueS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBc0IsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUd6RSxNQUFNLE9BQU8sZUFBZTtJQUMxQixZQUFvQixHQUFvQjtRQUFwQixRQUFHLEdBQUgsR0FBRyxDQUFpQjtJQUFHLENBQUM7SUFFNUM7Ozs7T0FJRztJQUNILFNBQVMsQ0FBQyxLQUFzQixFQUFFLE9BQTRCO1FBQzVELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2lHQVZVLGVBQWU7Z0ZBQWYsZUFBZTt1RkFBZixlQUFlO2NBRDNCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXJyZW5jeUNOWU9wdGlvbnMsIEN1cnJlbmN5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2Zvcm1hdCc7XG5cbkBQaXBlKHsgbmFtZTogJ2NueScgfSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeUNOWVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IEN1cnJlbmN5U2VydmljZSkge31cblxuICAvKipcbiAgICogQ29udmVydGVkIGludG8gUk1CIG5vdGF0aW9uLlxuICAgKlxuICAgKiDovazljJbmiJDkurrmsJHluIHooajnpLrms5VcbiAgICovXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogQ3VycmVuY3lDTllPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zcnYuY255KHZhbHVlLCBvcHRpb25zKTtcbiAgfVxufVxuIl19