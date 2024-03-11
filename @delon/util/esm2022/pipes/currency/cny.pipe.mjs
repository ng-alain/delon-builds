import { Pipe, inject } from '@angular/core';
import { CurrencyService } from '@delon/util/format';
import * as i0 from "@angular/core";
/**
 * Converted into RMB notation.
 *
 * 转化成人民币表示法
 */
export class CurrencyCNYPipe {
    constructor() {
        this.srv = inject(CurrencyService);
    }
    transform(value, options) {
        return this.srv.cny(value, options);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.4", ngImport: i0, type: CurrencyCNYPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "17.2.4", ngImport: i0, type: CurrencyCNYPipe, isStandalone: true, name: "cny" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.4", ngImport: i0, type: CurrencyCNYPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'cny', standalone: true }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY255LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3BpcGVzL2N1cnJlbmN5L2NueS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQXNCLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUV6RTs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLGVBQWU7SUFENUI7UUFFbUIsUUFBRyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUtoRDtJQUhDLFNBQVMsQ0FBQyxLQUFzQixFQUFFLE9BQTRCO1FBQzVELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7OEdBTFUsZUFBZTs0R0FBZixlQUFlOzsyRkFBZixlQUFlO2tCQUQzQixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEN1cnJlbmN5Q05ZT3B0aW9ucywgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZm9ybWF0JztcblxuLyoqXG4gKiBDb252ZXJ0ZWQgaW50byBSTUIgbm90YXRpb24uXG4gKlxuICog6L2s5YyW5oiQ5Lq65rCR5biB6KGo56S65rOVXG4gKi9cbkBQaXBlKHsgbmFtZTogJ2NueScsIHN0YW5kYWxvbmU6IHRydWUgfSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeUNOWVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzcnYgPSBpbmplY3QoQ3VycmVuY3lTZXJ2aWNlKTtcblxuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZywgb3B0aW9ucz86IEN1cnJlbmN5Q05ZT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3J2LmNueSh2YWx1ZSwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==