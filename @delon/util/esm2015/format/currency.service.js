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
        this.c = (/** @type {?} */ (cog.merge('utilCurrency', { startingUnit: 'yuan', megaUnit: { Q: '京', T: '兆', B: '亿', M: '万', K: '千' } })));
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
        options = Object.assign({ startingUnit: this.c.startingUnit }, options);
        /** @type {?} */
        let truthValue = Number(value);
        if (value == null || isNaN(truthValue)) {
            return '';
        }
        if (options.startingUnit === 'cent') {
            truthValue = truthValue / 100;
        }
        return truthValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, (_a = options === null || options === void 0 ? void 0 : options.separator) !== null && _a !== void 0 ? _a : ',');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvZm9ybWF0L2N1cnJlbmN5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBMkIsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRixPQUFPLEVBQXNGLG1CQUFtQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUczSSxNQUFNLE9BQU8sZUFBZTs7OztJQUcxQixZQUFZLEdBQXVCO1FBQ2pDLElBQUksQ0FBQyxDQUFDLEdBQUcsbUJBQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBQyxDQUFDO0lBQ3RILENBQUM7Ozs7Ozs7Ozs7OztJQVVELE1BQU0sQ0FBQyxLQUFzQixFQUFFLE9BQStCOztRQUM1RCxPQUFPLG1CQUFLLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksSUFBSyxPQUFPLENBQUUsQ0FBQzs7WUFDeEQsVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDOUIsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QyxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsSUFBSSxPQUFPLENBQUMsWUFBWSxLQUFLLE1BQU0sRUFBRTtZQUNuQyxVQUFVLEdBQUcsVUFBVSxHQUFHLEdBQUcsQ0FBQztTQUMvQjtRQUNELE9BQU8sVUFBVSxDQUFD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QUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JDLElBQUksT0FBTyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDO29CQUFFLE1BQU07O3NCQUN4QyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQzs7c0JBQ2QsTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTs7c0JBQzdCLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztzQkFDcEIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDekMsVUFBVSxJQUFJLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO2FBQ3ZDO1NBQ0Y7O2NBQ0ssR0FBRyxHQUNQLE1BQU07WUFDTixDQUFDLE9BQU87Z0JBQ04sQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLFVBQVUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFDN0QsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLFVBQVUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7O1lBcktGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFIekIsa0JBQWtCOzs7Ozs7OztJQUt6Qiw0QkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluVXRpbEN1cnJlbmN5Q29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IEN1cnJlbmN5Q05ZT3B0aW9ucywgQ3VycmVuY3lDb21tYXNPcHRpb25zLCBDdXJyZW5jeU1lZ2FPcHRpb25zLCBDdXJyZW5jeU1lZ2FSZXN1bHQsIEN1cnJlbmN5TWVnYV9Qb3dlcnMgfSBmcm9tICcuL2N1cnJlbmN5LnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVNlcnZpY2Uge1xuICBwcml2YXRlIGM6IEFsYWluVXRpbEN1cnJlbmN5Q29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKGNvZzogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5jID0gY29nLm1lcmdlKCd1dGlsQ3VycmVuY3knLCB7IHN0YXJ0aW5nVW5pdDogJ3l1YW4nLCBtZWdhVW5pdDogeyBROiAn5LqsJywgVDogJ+WFhicsIEI6ICfkur8nLCBNOiAn5LiHJywgSzogJ+WNgycgfSB9KSE7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IGEgbnVtYmVyIHdpdGggY29tbWFzIGFzIHRob3VzYW5kcyBzZXBhcmF0b3JzXG4gICAqXG4gICAqIOeUqOmAl+WPt+WwhuaVsOWtl+agvOW8j+WMluS4uuWNg+S9jeWIhumalOesplxuICAgKiBgYGB0c1xuICAgKiAxMDAwMCA9PiBgMTAsMDAwYFxuICAgKiBgYGBcbiAgICovXG4gIGNvbW1hcyh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogQ3VycmVuY3lDb21tYXNPcHRpb25zKTogc3RyaW5nIHtcbiAgICBvcHRpb25zID0geyBzdGFydGluZ1VuaXQ6IHRoaXMuYy5zdGFydGluZ1VuaXQsIC4uLm9wdGlvbnMgfTtcbiAgICBsZXQgdHJ1dGhWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgaXNOYU4odHJ1dGhWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuc3RhcnRpbmdVbml0ID09PSAnY2VudCcpIHtcbiAgICAgIHRydXRoVmFsdWUgPSB0cnV0aFZhbHVlIC8gMTAwO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1dGhWYWx1ZS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIG9wdGlvbnM/LnNlcGFyYXRvciA/PyAnLCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIExhcmdlIG51bWJlciBmb3JtYXQgZmlsdGVyXG4gICAqXG4gICAqIOWkp+aVsOaNruagvOW8j+WMllxuICAgKiBgYGB0c1xuICAgKiAxMDAwID0+IHsgdmFsdWU6ICcxJywgdW5pdDogJ0snLCB1bml0STE4bjogJ+WNgycgfVxuICAgKiAxMjQ1NiA9PiB7IHZhbHVlOiAnMTIuNDYnLCB1bml0OiAnSycsIHVuaXRJMThuOiAn5Y2DJyB9XG4gICAqIGBgYFxuICAgKi9cbiAgbWVnYSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogQ3VycmVuY3lNZWdhT3B0aW9ucyk6IEN1cnJlbmN5TWVnYVJlc3VsdCB7XG4gICAgb3B0aW9ucyA9IHsgcHJlY2lzaW9uOiAyLCB1bml0STE4bjogdGhpcy5jLm1lZ2FVbml0LCBzdGFydGluZ1VuaXQ6IHRoaXMuYy5zdGFydGluZ1VuaXQsIC4uLm9wdGlvbnMgfTtcbiAgICBsZXQgbnVtID0gTnVtYmVyKHZhbHVlKTtcbiAgICBjb25zdCByZXM6IEN1cnJlbmN5TWVnYVJlc3VsdCA9IHsgcmF3OiB2YWx1ZSwgdmFsdWU6ICcnLCB1bml0OiAnJywgdW5pdEkxOG46ICcnIH07XG4gICAgaWYgKGlzTmFOKG51bSkgfHwgbnVtID09PSAwKSB7XG4gICAgICByZXMudmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuc3RhcnRpbmdVbml0ID09PSAnY2VudCcpIHtcbiAgICAgIG51bSA9IG51bSAvIDEwMDtcbiAgICB9XG4gICAgbGV0IGFicyA9IE1hdGguYWJzKCtudW0pO1xuICAgIGNvbnN0IHJvdW5kZXIgPSBNYXRoLnBvdygxMCwgb3B0aW9ucy5wcmVjaXNpb24hKTtcbiAgICBjb25zdCBpc05lZ2F0aXZlID0gbnVtIDwgMDtcbiAgICBmb3IgKGNvbnN0IHAgb2YgQ3VycmVuY3lNZWdhX1Bvd2Vycykge1xuICAgICAgbGV0IHJlZHVjZWQgPSBhYnMgLyBwLnZhbHVlO1xuXG4gICAgICByZWR1Y2VkID0gTWF0aC5yb3VuZChyZWR1Y2VkICogcm91bmRlcikgLyByb3VuZGVyO1xuXG4gICAgICBpZiAocmVkdWNlZCA+PSAxKSB7XG4gICAgICAgIGFicyA9IHJlZHVjZWQ7XG4gICAgICAgIHJlcy51bml0ID0gcC51bml0O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXMudmFsdWUgPSAoaXNOZWdhdGl2ZSA/ICctJyA6ICcnKSArIGFicztcbiAgICByZXMudW5pdEkxOG4gPSAob3B0aW9ucy51bml0STE4biBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KVtyZXMudW5pdF07XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0ZWQgaW50byBSTUIgbm90YXRpb24uXG4gICAqXG4gICAqIOi9rOWMluaIkOS6uuawkeW4geihqOekuuazlVxuICAgKi9cbiAgY255KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIG9wdGlvbnM/OiBDdXJyZW5jeUNOWU9wdGlvbnMpOiBzdHJpbmcge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICBpbldvcmRzOiB0cnVlLFxuICAgICAgbWludXNTeW1ib2w6ICfotJ8nLFxuICAgICAgc3RhcnRpbmdVbml0OiB0aGlzLmMuc3RhcnRpbmdVbml0LFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9O1xuXG4gICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuc3RhcnRpbmdVbml0ID09PSAnY2VudCcpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDA7XG4gICAgfVxuICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICBsZXQgaW50ZWdlcjogbnVtYmVyIHwgc3RyaW5nO1xuICAgIGxldCBkZWNpbWFsOiBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xuICAgIFtpbnRlZ2VyLCBkZWNpbWFsXSA9IHZhbHVlLnNwbGl0KCcuJyk7XG4gICAgbGV0IHN5bWJvbCA9ICcnO1xuICAgIGlmIChpbnRlZ2VyLnN0YXJ0c1dpdGgoJy0nKSkge1xuICAgICAgc3ltYm9sID0gb3B0aW9ucy5taW51c1N5bWJvbCE7XG4gICAgICBpbnRlZ2VyID0gaW50ZWdlci5zdWJzdHIoMSk7XG4gICAgfVxuICAgIGlmICgvXi0/XFxkKyQvLnRlc3QodmFsdWUpKSB7XG4gICAgICBkZWNpbWFsID0gbnVsbDtcbiAgICB9XG4gICAgaW50ZWdlciA9ICgraW50ZWdlcikudG9TdHJpbmcoKTtcbiAgICBjb25zdCBpbldvcmRzID0gb3B0aW9ucy5pbldvcmRzO1xuICAgIGNvbnN0IHVuaXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfSA9IHtcbiAgICAgIG51bTogaW5Xb3Jkc1xuICAgICAgICA/IFsnJywgJ+WjuScsICfotLAnLCAn5Y+BJywgJ+iChicsICfkvI0nLCAn6ZmGJywgJ+afkicsICfmjYwnLCAn546WJywgJ+eCuSddXG4gICAgICAgIDogWycnLCAn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nLCAn5LiDJywgJ+WFqycsICfkuZ0nLCAn54K5J10sXG4gICAgICByYWRpY2U6IGluV29yZHNcbiAgICAgICAgPyBbJycsICfmi74nLCAn5L2wJywgJ+S7nycsICfkuIcnLCAn5ou+JywgJ+S9sCcsICfku58nLCAn5Lq/JywgJ+aLvicsICfkvbAnLCAn5LufJywgJ+S4h+S6vycsICfmi74nLCAn5L2wJywgJ+S7nycsICflhYYnLCAn5ou+JywgJ+S9sCcsICfku58nXVxuICAgICAgICA6IFsnJywgJ+WNgScsICfnmb4nLCAn5Y2DJywgJ+S4hycsICfljYEnLCAn55m+JywgJ+WNgycsICfkur8nLCAn5Y2BJywgJ+eZvicsICfljYMnLCAn5LiH5Lq/JywgJ+WNgScsICfnmb4nLCAn5Y2DJywgJ+WFhicsICfljYEnLCAn55m+JywgJ+WNgyddLFxuICAgICAgZGVjOiBbJ+inkicsICfliIYnLCAn5Y6YJywgJ+avqyddLFxuICAgIH07XG4gICAgaWYgKGluV29yZHMpIHtcbiAgICAgIHZhbHVlID0gKCt2YWx1ZSkudG9GaXhlZCg1KS50b1N0cmluZygpO1xuICAgIH1cbiAgICBsZXQgaW50ZWdlclJlcyA9ICcnO1xuICAgIGNvbnN0IGludGVnZXJDb3VudCA9IGludGVnZXIubGVuZ3RoO1xuICAgIGlmIChpbnRlZ2VyID09PSAnMCcgfHwgaW50ZWdlckNvdW50ID09PSAwKSB7XG4gICAgICBpbnRlZ2VyUmVzID0gJ+mbtic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjbkRlc2MgPSAnJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZWdlckNvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgbiA9ICtpbnRlZ2VyW2ldO1xuICAgICAgICBjb25zdCBqID0gaW50ZWdlckNvdW50IC0gaSAtIDE7XG4gICAgICAgIGNvbnN0IGlzWmVybyA9IGkgPiAxICYmIG4gIT09IDAgJiYgaW50ZWdlcltpIC0gMV0gPT09ICcwJztcbiAgICAgICAgY29uc3QgY25aZXJvID0gaXNaZXJvID8gJ+mbticgOiAnJztcbiAgICAgICAgY29uc3QgaXNFbXBwdHlVbml0ID0gKG4gPT09IDAgJiYgaiAlIDQgIT09IDApIHx8IGludGVnZXIuc3Vic3RyKGkgLSAzLCA0KSA9PT0gJzAwMDAnO1xuICAgICAgICBjb25zdCBkZXNjTWFyayA9IGNuRGVzYztcbiAgICAgICAgbGV0IGNuTnVtID0gdW5pdC5udW1bbl07XG5cbiAgICAgICAgY25EZXNjID0gaXNFbXBwdHlVbml0ID8gJycgOiB1bml0LnJhZGljZVtqXTtcbiAgICAgICAgLy8g56ys5LiA5L2N5piv5LiA5Y2BXG4gICAgICAgIGlmIChpID09PSAwICYmIGNuTnVtID09PSAn5LiAJyAmJiBjbkRlc2MgPT09ICfljYEnKSBjbk51bSA9ICcnO1xuICAgICAgICBjb25zdCBpc0NoYW5nZUVyID1cbiAgICAgICAgICBuID4gMSAmJlxuICAgICAgICAgIGNuTnVtID09PSAn5LqMJyAmJiAvLyDljrvpmaTpppbkvY1cbiAgICAgICAgICBbJycsICfljYEnLCAn55m+J10uaW5kZXhPZihjbkRlc2MpID09PSAtMSAmJiAvLyDkuI3or7vkuKRcXOS4pOWNgVxc5Lik55m+XG4gICAgICAgICAgZGVzY01hcmsgIT09ICfljYEnOyAvLyDkuI3or7vljYHkuKRcbiAgICAgICAgaWYgKGlzQ2hhbmdlRXIpIGNuTnVtID0gJ+S4pCc7XG4gICAgICAgIGludGVnZXJSZXMgKz0gY25aZXJvICsgY25OdW0gKyBjbkRlc2M7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5bCP5pWw6YOo5YiG5ou85o6lXG4gICAgbGV0IGRlY2ltYWxSZXMgPSAnJztcbiAgICBjb25zdCBkZWNpbWFsQ291bnQgPSBkZWNpbWFsID8gZGVjaW1hbC50b1N0cmluZygpLmxlbmd0aCA6IDA7XG4gICAgaWYgKGRlY2ltYWwgPT09IG51bGwpIHtcbiAgICAgIGRlY2ltYWxSZXMgPSBpbldvcmRzID8gJ+aVtCcgOiAnJztcbiAgICB9IGVsc2UgaWYgKGRlY2ltYWwgPT09ICcwJykge1xuICAgICAgZGVjaW1hbFJlcyA9ICfpm7YnO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlY2ltYWxDb3VudDsgaSsrKSB7XG4gICAgICAgIGlmIChpbldvcmRzICYmIGkgPiB1bml0LmRlYy5sZW5ndGggLSAxKSBicmVhaztcbiAgICAgICAgY29uc3QgbiA9IGRlY2ltYWxbaV07XG4gICAgICAgIGNvbnN0IGNuWmVybyA9IG4gPT09ICcwJyA/ICfpm7YnIDogJyc7XG4gICAgICAgIGNvbnN0IGNuTnVtID0gdW5pdC5udW1bK25dO1xuICAgICAgICBjb25zdCBjbkRlc2MgPSBpbldvcmRzID8gdW5pdC5kZWNbaV0gOiAnJztcbiAgICAgICAgZGVjaW1hbFJlcyArPSBjblplcm8gKyBjbk51bSArIGNuRGVzYztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcmV0ID1cbiAgICAgIHN5bWJvbCArXG4gICAgICAoaW5Xb3Jkc1xuICAgICAgICA/IGludGVnZXJSZXMgKyAoZGVjaW1hbFJlcyA9PT0gJ+mbticgPyAn5YWD5pW0JyA6IGDlhYMke2RlY2ltYWxSZXN9YClcbiAgICAgICAgOiBpbnRlZ2VyUmVzICsgKGRlY2ltYWxSZXMgPT09ICcnID8gJycgOiBg54K5JHtkZWNpbWFsUmVzfWApKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iXX0=