/**
 * @fileoverview added by tsickle
 * Generated from: currency.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { formatNumber } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { CurrencyMega_Powers } from './currency.types';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export class CurrencyService {
    /**
     * @param {?} cog
     * @param {?} locale
     */
    constructor(cog, locale) {
        this.locale = locale;
        this.c = (/** @type {?} */ (cog.merge('utilCurrency', { startingUnit: 'yuan', megaUnit: { Q: '京', T: '兆', B: '亿', M: '万', K: '千' } })));
    }
    /**
     * Format a number with commas as thousands separators
     *
     * 格式化货币，用逗号将数字格式化为千位分隔符
     * ```ts
     * 10000 => `10,000`
     * 10000.567 => `10,000.57`
     * ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    format(value, options) {
        options = Object.assign({ startingUnit: this.c.startingUnit, precision: 2 }, options);
        /** @type {?} */
        let truthValue = Number(value);
        if (value == null || isNaN(truthValue)) {
            return '';
        }
        if (options.startingUnit === 'cent') {
            truthValue = truthValue / 100;
        }
        return formatNumber(truthValue, this.locale, `.1-${options.precision}`).replace(/(?:\.[0]+)$/g, '');
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
        options = Object.assign({ precision: 2, unitI18n: this.c.megaUnit, startingUnit: this.c.startingUnit }, options);
        /** @type {?} */
        let num = Number(value);
        /** @type {?} */
        const res = { raw: value, value: '', unit: '', unitI18n: '' };
        if (isNaN(num) || num === 0) {
            res.value = value.toString();
            return res;
        }
        if (options.startingUnit === 'cent') {
            num = num / 100;
        }
        /** @type {?} */
        let abs = Math.abs(+num);
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
        options = Object.assign({ inWords: true, minusSymbol: '负', startingUnit: this.c.startingUnit }, options);
        value = Number(value);
        if (isNaN(value)) {
            return '';
        }
        if (options.startingUnit === 'cent') {
            value = value / 100;
        }
        value = value.toString();
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
    { type: AlainConfigService },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
/** @nocollapse */ CurrencyService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CurrencyService_Factory() { return new CurrencyService(i0.ɵɵinject(i1.AlainConfigService), i0.ɵɵinject(i0.LOCALE_ID)); }, token: CurrencyService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrencyService.prototype.c;
    /**
     * @type {?}
     * @private
     */
    CurrencyService.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvZm9ybWF0L2N1cnJlbmN5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBMkIsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRixPQUFPLEVBQXNGLG1CQUFtQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUczSSxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFHMUIsWUFBWSxHQUF1QixFQUE2QixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM1RSxJQUFJLENBQUMsQ0FBQyxHQUFHLG1CQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUN0SCxDQUFDOzs7Ozs7Ozs7Ozs7O0lBV0QsTUFBTSxDQUFDLEtBQXNCLEVBQUUsT0FBK0I7UUFDNUQsT0FBTyxtQkFBSyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLENBQUMsSUFBSyxPQUFPLENBQUUsQ0FBQzs7WUFDdEUsVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDOUIsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QyxP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O3lDQU9hLE1BQU0sU0FBQyxTQUFTOzs7Ozs7OztJQUZ0RCw0QkFBbUM7Ozs7O0lBRUUsaUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0TnVtYmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgTE9DQUxFX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluVXRpbEN1cnJlbmN5Q29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IEN1cnJlbmN5Q05ZT3B0aW9ucywgQ3VycmVuY3lGb3JtYXRPcHRpb25zLCBDdXJyZW5jeU1lZ2FPcHRpb25zLCBDdXJyZW5jeU1lZ2FSZXN1bHQsIEN1cnJlbmN5TWVnYV9Qb3dlcnMgfSBmcm9tICcuL2N1cnJlbmN5LnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVNlcnZpY2Uge1xuICBwcml2YXRlIGM6IEFsYWluVXRpbEN1cnJlbmN5Q29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKGNvZzogQWxhaW5Db25maWdTZXJ2aWNlLCBASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZykge1xuICAgIHRoaXMuYyA9IGNvZy5tZXJnZSgndXRpbEN1cnJlbmN5JywgeyBzdGFydGluZ1VuaXQ6ICd5dWFuJywgbWVnYVVuaXQ6IHsgUTogJ+S6rCcsIFQ6ICflhYYnLCBCOiAn5Lq/JywgTTogJ+S4hycsIEs6ICfljYMnIH0gfSkhO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdCBhIG51bWJlciB3aXRoIGNvbW1hcyBhcyB0aG91c2FuZHMgc2VwYXJhdG9yc1xuICAgKlxuICAgKiDmoLzlvI/ljJbotKfluIHvvIznlKjpgJflj7flsIbmlbDlrZfmoLzlvI/ljJbkuLrljYPkvY3liIbpmpTnrKZcbiAgICogYGBgdHNcbiAgICogMTAwMDAgPT4gYDEwLDAwMGBcbiAgICogMTAwMDAuNTY3ID0+IGAxMCwwMDAuNTdgXG4gICAqIGBgYFxuICAgKi9cbiAgZm9ybWF0KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIG9wdGlvbnM/OiBDdXJyZW5jeUZvcm1hdE9wdGlvbnMpOiBzdHJpbmcge1xuICAgIG9wdGlvbnMgPSB7IHN0YXJ0aW5nVW5pdDogdGhpcy5jLnN0YXJ0aW5nVW5pdCwgcHJlY2lzaW9uOiAyLCAuLi5vcHRpb25zIH07XG4gICAgbGV0IHRydXRoVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IGlzTmFOKHRydXRoVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnN0YXJ0aW5nVW5pdCA9PT0gJ2NlbnQnKSB7XG4gICAgICB0cnV0aFZhbHVlID0gdHJ1dGhWYWx1ZSAvIDEwMDtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm1hdE51bWJlcih0cnV0aFZhbHVlLCB0aGlzLmxvY2FsZSwgYC4xLSR7b3B0aW9ucy5wcmVjaXNpb259YCkucmVwbGFjZSgvKD86XFwuWzBdKykkL2csICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMYXJnZSBudW1iZXIgZm9ybWF0IGZpbHRlclxuICAgKlxuICAgKiDlpKfmlbDmja7moLzlvI/ljJZcbiAgICogYGBgdHNcbiAgICogMTAwMCA9PiB7IHZhbHVlOiAnMScsIHVuaXQ6ICdLJywgdW5pdEkxOG46ICfljYMnIH1cbiAgICogMTI0NTYgPT4geyB2YWx1ZTogJzEyLjQ2JywgdW5pdDogJ0snLCB1bml0STE4bjogJ+WNgycgfVxuICAgKiBgYGBcbiAgICovXG4gIG1lZ2EodmFsdWU6IG51bWJlciB8IHN0cmluZywgb3B0aW9ucz86IEN1cnJlbmN5TWVnYU9wdGlvbnMpOiBDdXJyZW5jeU1lZ2FSZXN1bHQge1xuICAgIG9wdGlvbnMgPSB7IHByZWNpc2lvbjogMiwgdW5pdEkxOG46IHRoaXMuYy5tZWdhVW5pdCwgc3RhcnRpbmdVbml0OiB0aGlzLmMuc3RhcnRpbmdVbml0LCAuLi5vcHRpb25zIH07XG4gICAgbGV0IG51bSA9IE51bWJlcih2YWx1ZSk7XG4gICAgY29uc3QgcmVzOiBDdXJyZW5jeU1lZ2FSZXN1bHQgPSB7IHJhdzogdmFsdWUsIHZhbHVlOiAnJywgdW5pdDogJycsIHVuaXRJMThuOiAnJyB9O1xuICAgIGlmIChpc05hTihudW0pIHx8IG51bSA9PT0gMCkge1xuICAgICAgcmVzLnZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnN0YXJ0aW5nVW5pdCA9PT0gJ2NlbnQnKSB7XG4gICAgICBudW0gPSBudW0gLyAxMDA7XG4gICAgfVxuICAgIGxldCBhYnMgPSBNYXRoLmFicygrbnVtKTtcbiAgICBjb25zdCByb3VuZGVyID0gTWF0aC5wb3coMTAsIG9wdGlvbnMucHJlY2lzaW9uISk7XG4gICAgY29uc3QgaXNOZWdhdGl2ZSA9IG51bSA8IDA7XG4gICAgZm9yIChjb25zdCBwIG9mIEN1cnJlbmN5TWVnYV9Qb3dlcnMpIHtcbiAgICAgIGxldCByZWR1Y2VkID0gYWJzIC8gcC52YWx1ZTtcblxuICAgICAgcmVkdWNlZCA9IE1hdGgucm91bmQocmVkdWNlZCAqIHJvdW5kZXIpIC8gcm91bmRlcjtcblxuICAgICAgaWYgKHJlZHVjZWQgPj0gMSkge1xuICAgICAgICBhYnMgPSByZWR1Y2VkO1xuICAgICAgICByZXMudW5pdCA9IHAudW5pdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVzLnZhbHVlID0gKGlzTmVnYXRpdmUgPyAnLScgOiAnJykgKyBhYnM7XG4gICAgcmVzLnVuaXRJMThuID0gKG9wdGlvbnMudW5pdEkxOG4gYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSlbcmVzLnVuaXRdO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydGVkIGludG8gUk1CIG5vdGF0aW9uLlxuICAgKlxuICAgKiDovazljJbmiJDkurrmsJHluIHooajnpLrms5VcbiAgICovXG4gIGNueSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogQ3VycmVuY3lDTllPcHRpb25zKTogc3RyaW5nIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgaW5Xb3JkczogdHJ1ZSxcbiAgICAgIG1pbnVzU3ltYm9sOiAn6LSfJyxcbiAgICAgIHN0YXJ0aW5nVW5pdDogdGhpcy5jLnN0YXJ0aW5nVW5pdCxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcblxuICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnN0YXJ0aW5nVW5pdCA9PT0gJ2NlbnQnKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAwO1xuICAgIH1cbiAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgbGV0IGludGVnZXI6IG51bWJlciB8IHN0cmluZztcbiAgICBsZXQgZGVjaW1hbDogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcbiAgICBbaW50ZWdlciwgZGVjaW1hbF0gPSB2YWx1ZS5zcGxpdCgnLicpO1xuICAgIGxldCBzeW1ib2wgPSAnJztcbiAgICBpZiAoaW50ZWdlci5zdGFydHNXaXRoKCctJykpIHtcbiAgICAgIHN5bWJvbCA9IG9wdGlvbnMubWludXNTeW1ib2whO1xuICAgICAgaW50ZWdlciA9IGludGVnZXIuc3Vic3RyKDEpO1xuICAgIH1cbiAgICBpZiAoL14tP1xcZCskLy50ZXN0KHZhbHVlKSkge1xuICAgICAgZGVjaW1hbCA9IG51bGw7XG4gICAgfVxuICAgIGludGVnZXIgPSAoK2ludGVnZXIpLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgaW5Xb3JkcyA9IG9wdGlvbnMuaW5Xb3JkcztcbiAgICBjb25zdCB1bml0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIH0gPSB7XG4gICAgICBudW06IGluV29yZHNcbiAgICAgICAgPyBbJycsICflo7knLCAn6LSwJywgJ+WPgScsICfogoYnLCAn5LyNJywgJ+mZhicsICfmn5InLCAn5o2MJywgJ+eOlicsICfngrknXVxuICAgICAgICA6IFsnJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJywgJ+S4gycsICflhasnLCAn5LmdJywgJ+eCuSddLFxuICAgICAgcmFkaWNlOiBpbldvcmRzXG4gICAgICAgID8gWycnLCAn5ou+JywgJ+S9sCcsICfku58nLCAn5LiHJywgJ+aLvicsICfkvbAnLCAn5LufJywgJ+S6vycsICfmi74nLCAn5L2wJywgJ+S7nycsICfkuIfkur8nLCAn5ou+JywgJ+S9sCcsICfku58nLCAn5YWGJywgJ+aLvicsICfkvbAnLCAn5LufJ11cbiAgICAgICAgOiBbJycsICfljYEnLCAn55m+JywgJ+WNgycsICfkuIcnLCAn5Y2BJywgJ+eZvicsICfljYMnLCAn5Lq/JywgJ+WNgScsICfnmb4nLCAn5Y2DJywgJ+S4h+S6vycsICfljYEnLCAn55m+JywgJ+WNgycsICflhYYnLCAn5Y2BJywgJ+eZvicsICfljYMnXSxcbiAgICAgIGRlYzogWyfop5InLCAn5YiGJywgJ+WOmCcsICfmr6snXSxcbiAgICB9O1xuICAgIGlmIChpbldvcmRzKSB7XG4gICAgICB2YWx1ZSA9ICgrdmFsdWUpLnRvRml4ZWQoNSkudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgbGV0IGludGVnZXJSZXMgPSAnJztcbiAgICBjb25zdCBpbnRlZ2VyQ291bnQgPSBpbnRlZ2VyLmxlbmd0aDtcbiAgICBpZiAoaW50ZWdlciA9PT0gJzAnIHx8IGludGVnZXJDb3VudCA9PT0gMCkge1xuICAgICAgaW50ZWdlclJlcyA9ICfpm7YnO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY25EZXNjID0gJyc7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVnZXJDb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG4gPSAraW50ZWdlcltpXTtcbiAgICAgICAgY29uc3QgaiA9IGludGVnZXJDb3VudCAtIGkgLSAxO1xuICAgICAgICBjb25zdCBpc1plcm8gPSBpID4gMSAmJiBuICE9PSAwICYmIGludGVnZXJbaSAtIDFdID09PSAnMCc7XG4gICAgICAgIGNvbnN0IGNuWmVybyA9IGlzWmVybyA/ICfpm7YnIDogJyc7XG4gICAgICAgIGNvbnN0IGlzRW1wcHR5VW5pdCA9IChuID09PSAwICYmIGogJSA0ICE9PSAwKSB8fCBpbnRlZ2VyLnN1YnN0cihpIC0gMywgNCkgPT09ICcwMDAwJztcbiAgICAgICAgY29uc3QgZGVzY01hcmsgPSBjbkRlc2M7XG4gICAgICAgIGxldCBjbk51bSA9IHVuaXQubnVtW25dO1xuXG4gICAgICAgIGNuRGVzYyA9IGlzRW1wcHR5VW5pdCA/ICcnIDogdW5pdC5yYWRpY2Vbal07XG4gICAgICAgIC8vIOesrOS4gOS9jeaYr+S4gOWNgVxuICAgICAgICBpZiAoaSA9PT0gMCAmJiBjbk51bSA9PT0gJ+S4gCcgJiYgY25EZXNjID09PSAn5Y2BJykgY25OdW0gPSAnJztcbiAgICAgICAgY29uc3QgaXNDaGFuZ2VFciA9XG4gICAgICAgICAgbiA+IDEgJiZcbiAgICAgICAgICBjbk51bSA9PT0gJ+S6jCcgJiYgLy8g5Y676Zmk6aaW5L2NXG4gICAgICAgICAgWycnLCAn5Y2BJywgJ+eZviddLmluZGV4T2YoY25EZXNjKSA9PT0gLTEgJiYgLy8g5LiN6K+75LikXFzkuKTljYFcXOS4pOeZvlxuICAgICAgICAgIGRlc2NNYXJrICE9PSAn5Y2BJzsgLy8g5LiN6K+75Y2B5LikXG4gICAgICAgIGlmIChpc0NoYW5nZUVyKSBjbk51bSA9ICfkuKQnO1xuICAgICAgICBpbnRlZ2VyUmVzICs9IGNuWmVybyArIGNuTnVtICsgY25EZXNjO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWwj+aVsOmDqOWIhuaLvOaOpVxuICAgIGxldCBkZWNpbWFsUmVzID0gJyc7XG4gICAgY29uc3QgZGVjaW1hbENvdW50ID0gZGVjaW1hbCA/IGRlY2ltYWwudG9TdHJpbmcoKS5sZW5ndGggOiAwO1xuICAgIGlmIChkZWNpbWFsID09PSBudWxsKSB7XG4gICAgICBkZWNpbWFsUmVzID0gaW5Xb3JkcyA/ICfmlbQnIDogJyc7XG4gICAgfSBlbHNlIGlmIChkZWNpbWFsID09PSAnMCcpIHtcbiAgICAgIGRlY2ltYWxSZXMgPSAn6Zu2JztcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWNpbWFsQ291bnQ7IGkrKykge1xuICAgICAgICBpZiAoaW5Xb3JkcyAmJiBpID4gdW5pdC5kZWMubGVuZ3RoIC0gMSkgYnJlYWs7XG4gICAgICAgIGNvbnN0IG4gPSBkZWNpbWFsW2ldO1xuICAgICAgICBjb25zdCBjblplcm8gPSBuID09PSAnMCcgPyAn6Zu2JyA6ICcnO1xuICAgICAgICBjb25zdCBjbk51bSA9IHVuaXQubnVtWytuXTtcbiAgICAgICAgY29uc3QgY25EZXNjID0gaW5Xb3JkcyA/IHVuaXQuZGVjW2ldIDogJyc7XG4gICAgICAgIGRlY2ltYWxSZXMgKz0gY25aZXJvICsgY25OdW0gKyBjbkRlc2M7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJldCA9XG4gICAgICBzeW1ib2wgK1xuICAgICAgKGluV29yZHNcbiAgICAgICAgPyBpbnRlZ2VyUmVzICsgKGRlY2ltYWxSZXMgPT09ICfpm7YnID8gJ+WFg+aVtCcgOiBg5YWDJHtkZWNpbWFsUmVzfWApXG4gICAgICAgIDogaW50ZWdlclJlcyArIChkZWNpbWFsUmVzID09PSAnJyA/ICcnIDogYOeCuSR7ZGVjaW1hbFJlc31gKSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuIl19