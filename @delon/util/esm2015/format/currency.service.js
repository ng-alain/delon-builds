/**
 * @fileoverview added by tsickle
 * Generated from: currency.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { CurrencyMega_Powers } from './currency.types';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export class CurrencyService {
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
        for (const p of CurrencyMega_Powers) {
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
    /**
     * Converted into RMB notation.
     *
     * 转化成人民币表示法
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    cny(value, options) {
        options = Object.assign({ inWords: true, minusSymbol: '负', validThrow: false }, options);
        if (typeof value === 'number') {
            value = value.toString();
        }
        if (!/^-?\d+(\.\d+)?$/.test(value) && options.validThrow) {
            throw new Error(`${value} is invalid number type`);
        }
        /** @type {?} */
        let integer;
        /** @type {?} */
        let decimal;
        [integer, decimal] = value.split('.');
        /** @type {?} */
        let symbol = '';
        if (integer.startsWith('-')) {
            symbol = (/** @type {?} */ (options.minusSymbol));
            integer = integer.substr(1);
        }
        if (/^-?\d+$/.test(value)) {
            decimal = null;
        }
        integer = (+integer).toString();
        /** @type {?} */
        const inWords = options.inWords;
        /** @type {?} */
        const unit = {
            num: inWords
                ? ['', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '点']
                : ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '点'],
            radice: inWords
                ? ['', '拾', '佰', '仟', '万', '拾', '佰', '仟', '亿', '拾', '佰', '仟', '万亿', '拾', '佰', '仟', '兆', '拾', '佰', '仟']
                : ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万亿', '十', '百', '千', '兆', '十', '百', '千'],
            dec: ['角', '分', '厘', '毫'],
        };
        if (inWords) {
            value = (+value).toFixed(5).toString();
        }
        /** @type {?} */
        let integerRes = '';
        /** @type {?} */
        const integerCount = integer.length;
        if (integer === '0' || integerCount === 0) {
            integerRes = '零';
        }
        else {
            /** @type {?} */
            let cnDesc = '';
            for (let i = 0; i < integerCount; i++) {
                /** @type {?} */
                const n = +integer[i];
                /** @type {?} */
                const j = integerCount - i - 1;
                /** @type {?} */
                const isZero = i > 1 && n !== 0 && integer[i - 1] === '0';
                /** @type {?} */
                const cnZero = isZero ? '零' : '';
                /** @type {?} */
                const isEmpptyUnit = (n === 0 && j % 4 !== 0) || integer.substr(i - 3, 4) === '0000';
                /** @type {?} */
                const descMark = cnDesc;
                /** @type {?} */
                let cnNum = unit.num[n];
                cnDesc = isEmpptyUnit ? '' : unit.radice[j];
                // 第一位是一十
                if (i === 0 && cnNum === '一' && cnDesc === '十')
                    cnNum = '';
                /** @type {?} */
                const isChangeEr = n > 1 &&
                    cnNum === '二' && // 去除首位
                    ['', '十', '百'].indexOf(cnDesc) === -1 && // 不读两\两十\两百
                    descMark !== '十';
                if (isChangeEr)
                    cnNum = '两';
                integerRes += cnZero + cnNum + cnDesc;
            }
        }
        // 小数部分拼接
        /** @type {?} */
        let decimalRes = '';
        /** @type {?} */
        const decimalCount = decimal ? decimal.toString().length : 0;
        if (decimal === null) {
            decimalRes = inWords ? '整' : '';
        }
        else if (decimal === '0') {
            decimalRes = '零';
        }
        else {
            for (let i = 0; i < decimalCount; i++) {
                if (inWords && i > unit.dec.length - 1)
                    break;
                /** @type {?} */
                const n = decimal[i];
                /** @type {?} */
                const cnZero = n === '0' ? '零' : '';
                /** @type {?} */
                const cnNum = unit.num[+n];
                /** @type {?} */
                const cnDesc = inWords ? unit.dec[i] : '';
                decimalRes += cnZero + cnNum + cnDesc;
            }
        }
        /** @type {?} */
        const ret = symbol +
            (inWords
                ? integerRes + (decimalRes === '零' ? '元整' : `元${decimalRes}`)
                : integerRes + (decimalRes === '' ? '' : `点${decimalRes}`));
        return ret;
    }
}
CurrencyService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
CurrencyService.ctorParameters = () => [
    { type: AlainConfigService }
];
/** @nocollapse */ CurrencyService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CurrencyService_Factory() { return new CurrencyService(i0.ɵɵinject(i1.AlainConfigService)); }, token: CurrencyService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrencyService.prototype.c;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvZm9ybWF0L2N1cnJlbmN5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBeUIsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRSxPQUFPLEVBQStELG1CQUFtQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUdwSCxNQUFNLE9BQU8sZUFBZTs7OztJQUcxQixZQUFZLEdBQXVCO1FBQ2pDLElBQUksQ0FBQyxDQUFDLEdBQUcsbUJBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7Ozs7Ozs7SUFVRCxNQUFNLENBQUMsS0FBc0IsRUFBRSxPQUFnQzs7UUFDN0QsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLHVCQUF1QixRQUFFLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxTQUFTLG1DQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7Ozs7Ozs7Ozs7Ozs7SUFXRCxJQUFJLENBQUMsS0FBc0IsRUFBRSxPQUE2QjtRQUN4RCxPQUFPLGlDQUFLLFNBQVMsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FBSyxPQUFPLENBQUUsQ0FBQzs7Y0FDbkgsR0FBRyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7O2NBQ2xD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OztjQUNLLEdBQUcsR0FDUCxNQUFNO1lBQ04sQ0FBQyxPQUFPO2dCQUNOLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFLENBQUM7Z0JBQzdELENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQztRQUMvRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7OztZQXZKRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBSHpCLGtCQUFrQjs7Ozs7Ozs7SUFLekIsNEJBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblV0aWxGb3JtYXRDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQ3VycmVuY3lDTllPcHRpb25zLCBDdXJyZW5jeU1lZ2FPcHRpb25zLCBDdXJyZW5jeU1lZ2FSZXN1bHQsIEN1cnJlbmN5TWVnYV9Qb3dlcnMgfSBmcm9tICcuL2N1cnJlbmN5LnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVNlcnZpY2Uge1xuICBwcml2YXRlIGM6IEFsYWluVXRpbEZvcm1hdENvbmZpZztcblxuICBjb25zdHJ1Y3Rvcihjb2c6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIHRoaXMuYyA9IGNvZy5tZXJnZSgndXRpbEZvcm1hdCcsIHt9KSE7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IGEgbnVtYmVyIHdpdGggY29tbWFzIGFzIHRob3VzYW5kcyBzZXBhcmF0b3JzXG4gICAqXG4gICAqIOeUqOmAl+WPt+WwhuaVsOWtl+agvOW8j+WMluS4uuWNg+S9jeWIhumalOesplxuICAgKiBgYGB0c1xuICAgKiAxMDAwMCA9PiBgMTAsMDAwYFxuICAgKiBgYGBcbiAgICovXG4gIGNvbW1hcyh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogeyBzZXBhcmF0b3I/OiBzdHJpbmcgfSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgb3B0aW9ucz8uc2VwYXJhdG9yID8/ICcsJyk7XG4gIH1cblxuICAvKipcbiAgICogTGFyZ2UgbnVtYmVyIGZvcm1hdCBmaWx0ZXJcbiAgICpcbiAgICog5aSn5pWw5o2u5qC85byP5YyWXG4gICAqIGBgYHRzXG4gICAqIDEwMDAgPT4geyB2YWx1ZTogJzEnLCB1bml0OiAnSycsIHVuaXRJMThuOiAn5Y2DJyB9XG4gICAqIDEyNDU2ID0+IHsgdmFsdWU6ICcxMi40NicsIHVuaXQ6ICdLJywgdW5pdEkxOG46ICfljYMnIH1cbiAgICogYGBgXG4gICAqL1xuICBtZWdhKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIG9wdGlvbnM/OiBDdXJyZW5jeU1lZ2FPcHRpb25zKTogQ3VycmVuY3lNZWdhUmVzdWx0IHtcbiAgICBvcHRpb25zID0geyBwcmVjaXNpb246IDIsIHVuaXRJMThuOiB7IFE6ICfkuqwnLCBUOiAn5YWGJywgQjogJ+S6vycsIE06ICfkuIcnLCBLOiAn5Y2DJyB9LCAuLi50aGlzLmMuY3VycmVuY3lNZWdhVW5pdCwgLi4ub3B0aW9ucyB9O1xuICAgIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQodmFsdWUudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgcmVzOiBDdXJyZW5jeU1lZ2FSZXN1bHQgPSB7IHJhdzogdmFsdWUsIHZhbHVlOiAnJywgdW5pdDogJycsIHVuaXRJMThuOiAnJyB9O1xuICAgIGlmIChpc05hTihudW0pIHx8IG51bSA9PT0gMCkge1xuICAgICAgcmVzLnZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIGxldCBhYnMgPSBNYXRoLmFicygrdmFsdWUpO1xuICAgIGNvbnN0IHJvdW5kZXIgPSBNYXRoLnBvdygxMCwgb3B0aW9ucy5wcmVjaXNpb24hKTtcbiAgICBjb25zdCBpc05lZ2F0aXZlID0gbnVtIDwgMDtcbiAgICBmb3IgKGNvbnN0IHAgb2YgQ3VycmVuY3lNZWdhX1Bvd2Vycykge1xuICAgICAgbGV0IHJlZHVjZWQgPSBhYnMgLyBwLnZhbHVlO1xuXG4gICAgICByZWR1Y2VkID0gTWF0aC5yb3VuZChyZWR1Y2VkICogcm91bmRlcikgLyByb3VuZGVyO1xuXG4gICAgICBpZiAocmVkdWNlZCA+PSAxKSB7XG4gICAgICAgIGFicyA9IHJlZHVjZWQ7XG4gICAgICAgIHJlcy51bml0ID0gcC51bml0O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXMudmFsdWUgPSAoaXNOZWdhdGl2ZSA/ICctJyA6ICcnKSArIGFicztcbiAgICByZXMudW5pdEkxOG4gPSAob3B0aW9ucy51bml0STE4biBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KVtyZXMudW5pdF07XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0ZWQgaW50byBSTUIgbm90YXRpb24uXG4gICAqXG4gICAqIOi9rOWMluaIkOS6uuawkeW4geihqOekuuazlVxuICAgKi9cbiAgY255KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIG9wdGlvbnM/OiBDdXJyZW5jeUNOWU9wdGlvbnMpOiBzdHJpbmcge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICBpbldvcmRzOiB0cnVlLFxuICAgICAgbWludXNTeW1ib2w6ICfotJ8nLFxuICAgICAgdmFsaWRUaHJvdzogZmFsc2UsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKCEvXi0/XFxkKyhcXC5cXGQrKT8kLy50ZXN0KHZhbHVlKSAmJiBvcHRpb25zLnZhbGlkVGhyb3cpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHt2YWx1ZX0gaXMgaW52YWxpZCBudW1iZXIgdHlwZWApO1xuICAgIH1cbiAgICBsZXQgaW50ZWdlcjogbnVtYmVyIHwgc3RyaW5nO1xuICAgIGxldCBkZWNpbWFsOiBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xuICAgIFtpbnRlZ2VyLCBkZWNpbWFsXSA9IHZhbHVlLnNwbGl0KCcuJyk7XG4gICAgbGV0IHN5bWJvbCA9ICcnO1xuICAgIGlmIChpbnRlZ2VyLnN0YXJ0c1dpdGgoJy0nKSkge1xuICAgICAgc3ltYm9sID0gb3B0aW9ucy5taW51c1N5bWJvbCE7XG4gICAgICBpbnRlZ2VyID0gaW50ZWdlci5zdWJzdHIoMSk7XG4gICAgfVxuICAgIGlmICgvXi0/XFxkKyQvLnRlc3QodmFsdWUpKSB7XG4gICAgICBkZWNpbWFsID0gbnVsbDtcbiAgICB9XG4gICAgaW50ZWdlciA9ICgraW50ZWdlcikudG9TdHJpbmcoKTtcbiAgICBjb25zdCBpbldvcmRzID0gb3B0aW9ucy5pbldvcmRzO1xuICAgIGNvbnN0IHVuaXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfSA9IHtcbiAgICAgIG51bTogaW5Xb3Jkc1xuICAgICAgICA/IFsnJywgJ+WjuScsICfotLAnLCAn5Y+BJywgJ+iChicsICfkvI0nLCAn6ZmGJywgJ+afkicsICfmjYwnLCAn546WJywgJ+eCuSddXG4gICAgICAgIDogWycnLCAn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nLCAn5LiDJywgJ+WFqycsICfkuZ0nLCAn54K5J10sXG4gICAgICByYWRpY2U6IGluV29yZHNcbiAgICAgICAgPyBbJycsICfmi74nLCAn5L2wJywgJ+S7nycsICfkuIcnLCAn5ou+JywgJ+S9sCcsICfku58nLCAn5Lq/JywgJ+aLvicsICfkvbAnLCAn5LufJywgJ+S4h+S6vycsICfmi74nLCAn5L2wJywgJ+S7nycsICflhYYnLCAn5ou+JywgJ+S9sCcsICfku58nXVxuICAgICAgICA6IFsnJywgJ+WNgScsICfnmb4nLCAn5Y2DJywgJ+S4hycsICfljYEnLCAn55m+JywgJ+WNgycsICfkur8nLCAn5Y2BJywgJ+eZvicsICfljYMnLCAn5LiH5Lq/JywgJ+WNgScsICfnmb4nLCAn5Y2DJywgJ+WFhicsICfljYEnLCAn55m+JywgJ+WNgyddLFxuICAgICAgZGVjOiBbJ+inkicsICfliIYnLCAn5Y6YJywgJ+avqyddLFxuICAgIH07XG4gICAgaWYgKGluV29yZHMpIHtcbiAgICAgIHZhbHVlID0gKCt2YWx1ZSkudG9GaXhlZCg1KS50b1N0cmluZygpO1xuICAgIH1cbiAgICBsZXQgaW50ZWdlclJlcyA9ICcnO1xuICAgIGNvbnN0IGludGVnZXJDb3VudCA9IGludGVnZXIubGVuZ3RoO1xuICAgIGlmIChpbnRlZ2VyID09PSAnMCcgfHwgaW50ZWdlckNvdW50ID09PSAwKSB7XG4gICAgICBpbnRlZ2VyUmVzID0gJ+mbtic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjbkRlc2MgPSAnJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZWdlckNvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgbiA9ICtpbnRlZ2VyW2ldO1xuICAgICAgICBjb25zdCBqID0gaW50ZWdlckNvdW50IC0gaSAtIDE7XG4gICAgICAgIGNvbnN0IGlzWmVybyA9IGkgPiAxICYmIG4gIT09IDAgJiYgaW50ZWdlcltpIC0gMV0gPT09ICcwJztcbiAgICAgICAgY29uc3QgY25aZXJvID0gaXNaZXJvID8gJ+mbticgOiAnJztcbiAgICAgICAgY29uc3QgaXNFbXBwdHlVbml0ID0gKG4gPT09IDAgJiYgaiAlIDQgIT09IDApIHx8IGludGVnZXIuc3Vic3RyKGkgLSAzLCA0KSA9PT0gJzAwMDAnO1xuICAgICAgICBjb25zdCBkZXNjTWFyayA9IGNuRGVzYztcbiAgICAgICAgbGV0IGNuTnVtID0gdW5pdC5udW1bbl07XG5cbiAgICAgICAgY25EZXNjID0gaXNFbXBwdHlVbml0ID8gJycgOiB1bml0LnJhZGljZVtqXTtcbiAgICAgICAgLy8g56ys5LiA5L2N5piv5LiA5Y2BXG4gICAgICAgIGlmIChpID09PSAwICYmIGNuTnVtID09PSAn5LiAJyAmJiBjbkRlc2MgPT09ICfljYEnKSBjbk51bSA9ICcnO1xuICAgICAgICBjb25zdCBpc0NoYW5nZUVyID1cbiAgICAgICAgICBuID4gMSAmJlxuICAgICAgICAgIGNuTnVtID09PSAn5LqMJyAmJiAvLyDljrvpmaTpppbkvY1cbiAgICAgICAgICBbJycsICfljYEnLCAn55m+J10uaW5kZXhPZihjbkRlc2MpID09PSAtMSAmJiAvLyDkuI3or7vkuKRcXOS4pOWNgVxc5Lik55m+XG4gICAgICAgICAgZGVzY01hcmsgIT09ICfljYEnOyAvLyDkuI3or7vljYHkuKRcbiAgICAgICAgaWYgKGlzQ2hhbmdlRXIpIGNuTnVtID0gJ+S4pCc7XG4gICAgICAgIGludGVnZXJSZXMgKz0gY25aZXJvICsgY25OdW0gKyBjbkRlc2M7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5bCP5pWw6YOo5YiG5ou85o6lXG4gICAgbGV0IGRlY2ltYWxSZXMgPSAnJztcbiAgICBjb25zdCBkZWNpbWFsQ291bnQgPSBkZWNpbWFsID8gZGVjaW1hbC50b1N0cmluZygpLmxlbmd0aCA6IDA7XG4gICAgaWYgKGRlY2ltYWwgPT09IG51bGwpIHtcbiAgICAgIGRlY2ltYWxSZXMgPSBpbldvcmRzID8gJ+aVtCcgOiAnJztcbiAgICB9IGVsc2UgaWYgKGRlY2ltYWwgPT09ICcwJykge1xuICAgICAgZGVjaW1hbFJlcyA9ICfpm7YnO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlY2ltYWxDb3VudDsgaSsrKSB7XG4gICAgICAgIGlmIChpbldvcmRzICYmIGkgPiB1bml0LmRlYy5sZW5ndGggLSAxKSBicmVhaztcbiAgICAgICAgY29uc3QgbiA9IGRlY2ltYWxbaV07XG4gICAgICAgIGNvbnN0IGNuWmVybyA9IG4gPT09ICcwJyA/ICfpm7YnIDogJyc7XG4gICAgICAgIGNvbnN0IGNuTnVtID0gdW5pdC5udW1bK25dO1xuICAgICAgICBjb25zdCBjbkRlc2MgPSBpbldvcmRzID8gdW5pdC5kZWNbaV0gOiAnJztcbiAgICAgICAgZGVjaW1hbFJlcyArPSBjblplcm8gKyBjbk51bSArIGNuRGVzYztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcmV0ID1cbiAgICAgIHN5bWJvbCArXG4gICAgICAoaW5Xb3Jkc1xuICAgICAgICA/IGludGVnZXJSZXMgKyAoZGVjaW1hbFJlcyA9PT0gJ+mbticgPyAn5YWD5pW0JyA6IGDlhYMke2RlY2ltYWxSZXN9YClcbiAgICAgICAgOiBpbnRlZ2VyUmVzICsgKGRlY2ltYWxSZXMgPT09ICcnID8gJycgOiBg54K5JHtkZWNpbWFsUmVzfWApKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iXX0=