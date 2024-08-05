import { Pipe, inject } from '@angular/core';
import { CurrencyService } from '@delon/util/format';
import * as i0 from "@angular/core";
/**
 * Format a number with commas as thousands separators
 *
 * 格式化货币，用逗号将数字格式化为千位分隔符
 * ```ts
 * 10000 => `10,000`
 * 10000.567 => `10,000.57`
 * ```
 */
export class CurrencyPricePipe {
    constructor() {
        this.srv = inject(CurrencyService);
    }
    transform(value, options) {
        return this.srv.format(value, options);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: CurrencyPricePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.1.3", ngImport: i0, type: CurrencyPricePipe, isStandalone: true, name: "price" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: CurrencyPricePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'price', standalone: true }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvcGlwZXMvY3VycmVuY3kvcHJpY2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUF5QixlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFNUU7Ozs7Ozs7O0dBUUc7QUFFSCxNQUFNLE9BQU8saUJBQWlCO0lBRDlCO1FBRW1CLFFBQUcsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7S0FLaEQ7SUFIQyxTQUFTLENBQUMsS0FBc0IsRUFBRSxPQUErQjtRQUMvRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDOzhHQUxVLGlCQUFpQjs0R0FBakIsaUJBQWlCOzsyRkFBakIsaUJBQWlCO2tCQUQ3QixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEN1cnJlbmN5Rm9ybWF0T3B0aW9ucywgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZm9ybWF0JztcblxuLyoqXG4gKiBGb3JtYXQgYSBudW1iZXIgd2l0aCBjb21tYXMgYXMgdGhvdXNhbmRzIHNlcGFyYXRvcnNcbiAqXG4gKiDmoLzlvI/ljJbotKfluIHvvIznlKjpgJflj7flsIbmlbDlrZfmoLzlvI/ljJbkuLrljYPkvY3liIbpmpTnrKZcbiAqIGBgYHRzXG4gKiAxMDAwMCA9PiBgMTAsMDAwYFxuICogMTAwMDAuNTY3ID0+IGAxMCwwMDAuNTdgXG4gKiBgYGBcbiAqL1xuQFBpcGUoeyBuYW1lOiAncHJpY2UnLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lQcmljZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzcnYgPSBpbmplY3QoQ3VycmVuY3lTZXJ2aWNlKTtcblxuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZywgb3B0aW9ucz86IEN1cnJlbmN5Rm9ybWF0T3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3J2LmZvcm1hdCh2YWx1ZSwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==