import { Pipe } from '@angular/core';
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
CurrencyPricePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: CurrencyPricePipe, deps: [{ token: i1.CurrencyService }], target: i0.ɵɵFactoryTarget.Pipe });
CurrencyPricePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: CurrencyPricePipe, name: "price" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.2", ngImport: i0, type: CurrencyPricePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'price' }]
        }], ctorParameters: function () { return [{ type: i1.CurrencyService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvcGlwZXMvY3VycmVuY3kvcHJpY2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O0FBS3BELE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsWUFBb0IsR0FBb0I7UUFBcEIsUUFBRyxHQUFILEdBQUcsQ0FBaUI7SUFBRyxDQUFDO0lBQzVDOzs7Ozs7OztPQVFHO0lBQ0gsU0FBUyxDQUFDLEtBQXNCLEVBQUUsT0FBK0I7UUFDL0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OEdBYlUsaUJBQWlCOzRHQUFqQixpQkFBaUI7MkZBQWpCLGlCQUFpQjtrQkFEN0IsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEN1cnJlbmN5Rm9ybWF0T3B0aW9ucywgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZm9ybWF0JztcblxuQFBpcGUoeyBuYW1lOiAncHJpY2UnIH0pXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lQcmljZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IEN1cnJlbmN5U2VydmljZSkge31cbiAgLyoqXG4gICAqIEZvcm1hdCBhIG51bWJlciB3aXRoIGNvbW1hcyBhcyB0aG91c2FuZHMgc2VwYXJhdG9yc1xuICAgKlxuICAgKiDmoLzlvI/ljJbotKfluIHvvIznlKjpgJflj7flsIbmlbDlrZfmoLzlvI/ljJbkuLrljYPkvY3liIbpmpTnrKZcbiAgICogYGBgdHNcbiAgICogMTAwMDAgPT4gYDEwLDAwMGBcbiAgICogMTAwMDAuNTY3ID0+IGAxMCwwMDAuNTdgXG4gICAqIGBgYFxuICAgKi9cbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIG9wdGlvbnM/OiBDdXJyZW5jeUZvcm1hdE9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNydi5mb3JtYXQodmFsdWUsIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=