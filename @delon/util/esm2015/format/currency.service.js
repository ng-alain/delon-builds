/**
 * @fileoverview added by tsickle
 * Generated from: currency.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { FormatCurrencyMega_Powers } from './currency.types';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export class FormatCurrencyService {
    /**
     * @param {?} cog
     */
    constructor(cog) {
        this.c = (/** @type {?} */ (cog.merge('utilFormat', {})));
    }
    /**
     * Format a number with commas as thousands separators
     *
     * 用逗号将数字格式化为千位分隔符
     * ```ts
     * 10000 => `10,000`
     * ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    commas(value, options) {
        var _a;
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, (_a = options === null || options === void 0 ? void 0 : options.separator) !== null && _a !== void 0 ? _a : ',');
    }
    /**
     * Large number format filter
     *
     * 大数据格式化
     * ```ts
     * 1000 => { value: '1', unit: 'K', unitI18n: '千' }
     * 12456 => { value: '12.46', unit: 'K', unitI18n: '千' }
     * ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    mega(value, options) {
        options = Object.assign(Object.assign({ precision: 2, unitI18n: { Q: '京', T: '兆', B: '亿', M: '万', K: '千' } }, this.c.currencyMegaUnit), options);
        /** @type {?} */
        const num = parseFloat(value.toString());
        /** @type {?} */
        const res = { raw: value, value: '', unit: '', unitI18n: '' };
        if (isNaN(num) || num === 0) {
            res.value = value.toString();
            return res;
        }
        /** @type {?} */
        let abs = Math.abs(+value);
        /** @type {?} */
        const rounder = Math.pow(10, (/** @type {?} */ (options.precision)));
        /** @type {?} */
        const isNegative = num < 0;
        for (const p of FormatCurrencyMega_Powers) {
            /** @type {?} */
            let reduced = abs / p.value;
            reduced = Math.round(reduced * rounder) / rounder;
            if (reduced >= 1) {
                abs = reduced;
                res.unit = p.unit;
                break;
            }
        }
        res.value = (isNegative ? '-' : '') + abs;
        res.unitI18n = ((/** @type {?} */ (options.unitI18n)))[res.unit];
        return res;
    }
}
FormatCurrencyService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
FormatCurrencyService.ctorParameters = () => [
    { type: AlainConfigService }
];
/** @nocollapse */ FormatCurrencyService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FormatCurrencyService_Factory() { return new FormatCurrencyService(i0.ɵɵinject(i1.AlainConfigService)); }, token: FormatCurrencyService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormatCurrencyService.prototype.c;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvZm9ybWF0L2N1cnJlbmN5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBeUIsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRSxPQUFPLEVBQXVELHlCQUF5QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUdsSCxNQUFNLE9BQU8scUJBQXFCOzs7O0lBR2hDLFlBQVksR0FBdUI7UUFDakMsSUFBSSxDQUFDLENBQUMsR0FBRyxtQkFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7Ozs7Ozs7OztJQVVELE1BQU0sQ0FBQyxLQUFzQixFQUFFLE9BQWdDOztRQUM3RCxPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLFFBQUUsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFNBQVMsbUNBQUksR0FBRyxDQUFDLENBQUM7SUFDdEYsQ0FBQzs7Ozs7Ozs7Ozs7OztJQVdELElBQUksQ0FBQyxLQUFzQixFQUFFLE9BQW1DO1FBQzlELE9BQU8saUNBQUssU0FBUyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixHQUFLLE9BQU8sQ0FBRSxDQUFDOztjQUNuSCxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7Y0FDbEMsR0FBRyxHQUE2QixFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7UUFDdkYsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtZQUMzQixHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM3QixPQUFPLEdBQUcsQ0FBQztTQUNaOztZQUNHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDOztjQUNwQixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsbUJBQUEsT0FBTyxDQUFDLFNBQVMsRUFBQyxDQUFDOztjQUMxQyxVQUFVLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDMUIsS0FBSyxNQUFNLENBQUMsSUFBSSx5QkFBeUIsRUFBRTs7Z0JBQ3JDLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUs7WUFFM0IsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUVsRCxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUU7Z0JBQ2hCLEdBQUcsR0FBRyxPQUFPLENBQUM7Z0JBQ2QsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNsQixNQUFNO2FBQ1A7U0FDRjtRQUVELEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxtQkFBQSxPQUFPLENBQUMsUUFBUSxFQUEwQixDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7O1lBdkRGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFIekIsa0JBQWtCOzs7Ozs7OztJQUt6QixrQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluVXRpbEZvcm1hdENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBGb3JtYXRDdXJyZW5jeU1lZ2FPcHRpb25zLCBGb3JtYXRDdXJyZW5jeU1lZ2FSZXN1bHQsIEZvcm1hdEN1cnJlbmN5TWVnYV9Qb3dlcnMgfSBmcm9tICcuL2N1cnJlbmN5LnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBGb3JtYXRDdXJyZW5jeVNlcnZpY2Uge1xuICBwcml2YXRlIGM6IEFsYWluVXRpbEZvcm1hdENvbmZpZztcblxuICBjb25zdHJ1Y3Rvcihjb2c6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIHRoaXMuYyA9IGNvZy5tZXJnZSgndXRpbEZvcm1hdCcsIHt9KSE7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IGEgbnVtYmVyIHdpdGggY29tbWFzIGFzIHRob3VzYW5kcyBzZXBhcmF0b3JzXG4gICAqXG4gICAqIOeUqOmAl+WPt+WwhuaVsOWtl+agvOW8j+WMluS4uuWNg+S9jeWIhumalOesplxuICAgKiBgYGB0c1xuICAgKiAxMDAwMCA9PiBgMTAsMDAwYFxuICAgKiBgYGBcbiAgICovXG4gIGNvbW1hcyh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogeyBzZXBhcmF0b3I/OiBzdHJpbmcgfSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgb3B0aW9ucz8uc2VwYXJhdG9yID8/ICcsJyk7XG4gIH1cblxuICAvKipcbiAgICogTGFyZ2UgbnVtYmVyIGZvcm1hdCBmaWx0ZXJcbiAgICpcbiAgICog5aSn5pWw5o2u5qC85byP5YyWXG4gICAqIGBgYHRzXG4gICAqIDEwMDAgPT4geyB2YWx1ZTogJzEnLCB1bml0OiAnSycsIHVuaXRJMThuOiAn5Y2DJyB9XG4gICAqIDEyNDU2ID0+IHsgdmFsdWU6ICcxMi40NicsIHVuaXQ6ICdLJywgdW5pdEkxOG46ICfljYMnIH1cbiAgICogYGBgXG4gICAqL1xuICBtZWdhKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIG9wdGlvbnM/OiBGb3JtYXRDdXJyZW5jeU1lZ2FPcHRpb25zKTogRm9ybWF0Q3VycmVuY3lNZWdhUmVzdWx0IHtcbiAgICBvcHRpb25zID0geyBwcmVjaXNpb246IDIsIHVuaXRJMThuOiB7IFE6ICfkuqwnLCBUOiAn5YWGJywgQjogJ+S6vycsIE06ICfkuIcnLCBLOiAn5Y2DJyB9LCAuLi50aGlzLmMuY3VycmVuY3lNZWdhVW5pdCwgLi4ub3B0aW9ucyB9O1xuICAgIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQodmFsdWUudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgcmVzOiBGb3JtYXRDdXJyZW5jeU1lZ2FSZXN1bHQgPSB7IHJhdzogdmFsdWUsIHZhbHVlOiAnJywgdW5pdDogJycsIHVuaXRJMThuOiAnJyB9O1xuICAgIGlmIChpc05hTihudW0pIHx8IG51bSA9PT0gMCkge1xuICAgICAgcmVzLnZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIGxldCBhYnMgPSBNYXRoLmFicygrdmFsdWUpO1xuICAgIGNvbnN0IHJvdW5kZXIgPSBNYXRoLnBvdygxMCwgb3B0aW9ucy5wcmVjaXNpb24hKTtcbiAgICBjb25zdCBpc05lZ2F0aXZlID0gbnVtIDwgMDtcbiAgICBmb3IgKGNvbnN0IHAgb2YgRm9ybWF0Q3VycmVuY3lNZWdhX1Bvd2Vycykge1xuICAgICAgbGV0IHJlZHVjZWQgPSBhYnMgLyBwLnZhbHVlO1xuXG4gICAgICByZWR1Y2VkID0gTWF0aC5yb3VuZChyZWR1Y2VkICogcm91bmRlcikgLyByb3VuZGVyO1xuXG4gICAgICBpZiAocmVkdWNlZCA+PSAxKSB7XG4gICAgICAgIGFicyA9IHJlZHVjZWQ7XG4gICAgICAgIHJlcy51bml0ID0gcC51bml0O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXMudmFsdWUgPSAoaXNOZWdhdGl2ZSA/ICctJyA6ICcnKSArIGFicztcbiAgICByZXMudW5pdEkxOG4gPSAob3B0aW9ucy51bml0STE4biBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KVtyZXMudW5pdF07XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuIl19