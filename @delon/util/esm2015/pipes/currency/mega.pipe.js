/**
 * @fileoverview added by tsickle
 * Generated from: mega.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import { CurrencyService } from '@delon/util/format';
export class CurrencyMegaPipe {
    /**
     * @param {?} srv
     * @param {?} locale
     */
    constructor(srv, locale) {
        this.srv = srv;
        this.isCN = false;
        this.isCN = locale.startsWith('zh');
    }
    /**
     * Large number format filter
     *
     * 大数据格式化
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    transform(value, options) {
        /** @type {?} */
        const res = this.srv.mega(value, options);
        return res.value + (this.isCN ? res.unitI18n : res.unit);
    }
}
CurrencyMegaPipe.decorators = [
    { type: Pipe, args: [{ name: 'currencyMega' },] }
];
/** @nocollapse */
CurrencyMegaPipe.ctorParameters = () => [
    { type: CurrencyService },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrencyMegaPipe.prototype.isCN;
    /**
     * @type {?}
     * @private
     */
    CurrencyMegaPipe.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVnYS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9waXBlcy9jdXJyZW5jeS9tZWdhLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBdUIsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHMUUsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFFM0IsWUFBb0IsR0FBb0IsRUFBcUIsTUFBYztRQUF2RCxRQUFHLEdBQUgsR0FBRyxDQUFpQjtRQURoQyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBRW5CLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7Ozs7SUFPRCxTQUFTLENBQUMsS0FBc0IsRUFBRSxPQUE2Qjs7Y0FDdkQsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7UUFDekMsT0FBTyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQWZGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7Ozs7WUFGQSxlQUFlO3lDQUtBLE1BQU0sU0FBQyxTQUFTOzs7Ozs7O0lBRDNELGdDQUFxQjs7Ozs7SUFDVCwrQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIExPQ0FMRV9JRCwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3VycmVuY3lNZWdhT3B0aW9ucywgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZm9ybWF0JztcblxuQFBpcGUoeyBuYW1lOiAnY3VycmVuY3lNZWdhJyB9KVxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5TWVnYVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgcHJpdmF0ZSBpc0NOID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBDdXJyZW5jeVNlcnZpY2UsIEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZykge1xuICAgIHRoaXMuaXNDTiA9IGxvY2FsZS5zdGFydHNXaXRoKCd6aCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIExhcmdlIG51bWJlciBmb3JtYXQgZmlsdGVyXG4gICAqXG4gICAqIOWkp+aVsOaNruagvOW8j+WMllxuICAgKi9cbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIG9wdGlvbnM/OiBDdXJyZW5jeU1lZ2FPcHRpb25zKTogc3RyaW5nIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLnNydi5tZWdhKHZhbHVlLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVzLnZhbHVlICsgKHRoaXMuaXNDTiA/IHJlcy51bml0STE4biA6IHJlcy51bml0KTtcbiAgfVxufVxuIl19