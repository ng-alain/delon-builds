import { Pipe } from '@angular/core';
import { CurrencyService } from '@delon/util/format';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/format";
export class CurrencyPricePipe {
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * Format a number with commas as thousands separators
     *
     * 格式化货币，用逗号将数字格式化为千位分隔符
     * ```ts
     * 10000 => `10,000`
     * 10000.567 => `10,000.57`
     * ```
     */
    transform(value, options) {
        return this.srv.format(value, options);
    }
}
/** @nocollapse */ CurrencyPricePipe.ɵfac = function CurrencyPricePipe_Factory(t) { return new (t || CurrencyPricePipe)(i0.ɵɵdirectiveInject(i1.CurrencyService)); };
/** @nocollapse */ CurrencyPricePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "price", type: CurrencyPricePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CurrencyPricePipe, [{
        type: Pipe,
        args: [{ name: 'price' }]
    }], function () { return [{ type: i1.CurrencyService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvcGlwZXMvY3VycmVuY3kvcHJpY2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQXlCLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7QUFHNUUsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUFvQixHQUFvQjtRQUFwQixRQUFHLEdBQUgsR0FBRyxDQUFpQjtJQUFHLENBQUM7SUFDNUM7Ozs7Ozs7O09BUUc7SUFDSCxTQUFTLENBQUMsS0FBc0IsRUFBRSxPQUErQjtRQUMvRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDOztxR0FiVSxpQkFBaUI7b0ZBQWpCLGlCQUFpQjt1RkFBakIsaUJBQWlCO2NBRDdCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXJyZW5jeUZvcm1hdE9wdGlvbnMsIEN1cnJlbmN5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2Zvcm1hdCc7XG5cbkBQaXBlKHsgbmFtZTogJ3ByaWNlJyB9KVxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5UHJpY2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBDdXJyZW5jeVNlcnZpY2UpIHt9XG4gIC8qKlxuICAgKiBGb3JtYXQgYSBudW1iZXIgd2l0aCBjb21tYXMgYXMgdGhvdXNhbmRzIHNlcGFyYXRvcnNcbiAgICpcbiAgICog5qC85byP5YyW6LSn5biB77yM55So6YCX5Y+35bCG5pWw5a2X5qC85byP5YyW5Li65Y2D5L2N5YiG6ZqU56ymXG4gICAqIGBgYHRzXG4gICAqIDEwMDAwID0+IGAxMCwwMDBgXG4gICAqIDEwMDAwLjU2NyA9PiBgMTAsMDAwLjU3YFxuICAgKiBgYGBcbiAgICovXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogQ3VycmVuY3lGb3JtYXRPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zcnYuZm9ybWF0KHZhbHVlLCBvcHRpb25zKTtcbiAgfVxufVxuIl19