import { Pipe } from '@angular/core';
import { CurrencyService } from '@delon/util/format';
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
CurrencyPricePipe.decorators = [
    { type: Pipe, args: [{ name: 'price' },] }
];
CurrencyPricePipe.ctorParameters = () => [
    { type: CurrencyService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvcGlwZXMvY3VycmVuY3kvcHJpY2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQXlCLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzVFLE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsWUFBb0IsR0FBb0I7UUFBcEIsUUFBRyxHQUFILEdBQUcsQ0FBaUI7SUFBRyxDQUFDO0lBQzVDOzs7Ozs7OztPQVFHO0lBQ0gsU0FBUyxDQUFDLEtBQXNCLEVBQUUsT0FBK0I7UUFDL0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7O1lBZEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs7O1lBRlMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ3VycmVuY3lGb3JtYXRPcHRpb25zLCBDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9mb3JtYXQnO1xuXG5AUGlwZSh7IG5hbWU6ICdwcmljZScgfSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVByaWNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogQ3VycmVuY3lTZXJ2aWNlKSB7fVxuICAvKipcbiAgICogRm9ybWF0IGEgbnVtYmVyIHdpdGggY29tbWFzIGFzIHRob3VzYW5kcyBzZXBhcmF0b3JzXG4gICAqXG4gICAqIOagvOW8j+WMlui0p+W4ge+8jOeUqOmAl+WPt+WwhuaVsOWtl+agvOW8j+WMluS4uuWNg+S9jeWIhumalOesplxuICAgKiBgYGB0c1xuICAgKiAxMDAwMCA9PiBgMTAsMDAwYFxuICAgKiAxMDAwMC41NjcgPT4gYDEwLDAwMC41N2BcbiAgICogYGBgXG4gICAqL1xuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZywgb3B0aW9ucz86IEN1cnJlbmN5Rm9ybWF0T3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3J2LmZvcm1hdCh2YWx1ZSwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==