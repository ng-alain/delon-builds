import { CurrencyPipe, formatNumber } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, Inject, Injectable, LOCALE_ID } from '@angular/core';
import { CurrencyMega_Powers } from './currency.types';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export class CurrencyService {
    constructor(cog, locale, _defaultCurrencyCode = 'USD') {
        this.locale = locale;
        this.currencyPipe = new CurrencyPipe(locale, _defaultCurrencyCode);
        this.c = cog.merge('utilCurrency', {
            startingUnit: 'yuan',
            megaUnit: { Q: '京', T: '兆', B: '亿', M: '万', K: '千' },
            precision: 2,
            ingoreZeroPrecision: true
        });
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
    format(value, options) {
        options = {
            startingUnit: this.c.startingUnit,
            precision: this.c.precision,
            ingoreZeroPrecision: this.c.ingoreZeroPrecision,
            ngCurrency: this.c.ngCurrency,
            ...options
        };
        let truthValue = Number(value);
        if (value == null || isNaN(truthValue)) {
            return '';
        }
        if (options.startingUnit === 'cent') {
            truthValue = truthValue / 100;
        }
        if (options.ngCurrency != null) {
            const cur = options.ngCurrency;
            return this.currencyPipe.transform(truthValue, cur.currencyCode, cur.display, cur.digitsInfo, cur.locale || this.locale);
        }
        const res = formatNumber(truthValue, this.locale, `.${options.ingoreZeroPrecision ? 1 : options.precision}-${options.precision}`);
        return options.ingoreZeroPrecision ? res.replace(/(?:\.[0]+)$/g, '') : res;
    }
    /**
     * Large number format filter
     *
     * 大数据格式化
     * ```ts
     * 1000 => { value: '1', unit: 'K', unitI18n: '千' }
     * 12456 => { value: '12.46', unit: 'K', unitI18n: '千' }
     * ```
     */
    mega(value, options) {
        options = { precision: this.c.precision, unitI18n: this.c.megaUnit, startingUnit: this.c.startingUnit, ...options };
        let num = Number(value);
        const res = { raw: value, value: '', unit: '', unitI18n: '' };
        if (isNaN(num) || num === 0) {
            res.value = value.toString();
            return res;
        }
        if (options.startingUnit === 'cent') {
            num = num / 100;
        }
        let abs = Math.abs(+num);
        const rounder = Math.pow(10, options.precision);
        const isNegative = num < 0;
        for (const p of CurrencyMega_Powers) {
            let reduced = abs / p.value;
            reduced = Math.round(reduced * rounder) / rounder;
            if (reduced >= 1) {
                abs = reduced;
                res.unit = p.unit;
                break;
            }
        }
        res.value = (isNegative ? '-' : '') + abs;
        res.unitI18n = options.unitI18n[res.unit];
        return res;
    }
    /**
     * Converted into RMB notation.
     *
     * 转化成人民币表示法
     */
    cny(value, options) {
        options = {
            inWords: true,
            minusSymbol: '负',
            startingUnit: this.c.startingUnit,
            ...options
        };
        value = Number(value);
        if (isNaN(value)) {
            return '';
        }
        if (options.startingUnit === 'cent') {
            value = value / 100;
        }
        value = value.toString();
        let integer;
        let decimal;
        [integer, decimal] = value.split('.');
        let symbol = '';
        if (integer.startsWith('-')) {
            symbol = options.minusSymbol;
            integer = integer.substring(1);
        }
        if (/^-?\d+$/.test(value)) {
            decimal = null;
        }
        integer = (+integer).toString();
        const inWords = options.inWords;
        const unit = {
            num: inWords
                ? ['', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '点']
                : ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '点'],
            radice: inWords
                ? [
                    '',
                    '拾',
                    '佰',
                    '仟',
                    '万',
                    '拾',
                    '佰',
                    '仟',
                    '亿',
                    '拾',
                    '佰',
                    '仟',
                    '万亿',
                    '拾',
                    '佰',
                    '仟',
                    '兆',
                    '拾',
                    '佰',
                    '仟'
                ]
                : [
                    '',
                    '十',
                    '百',
                    '千',
                    '万',
                    '十',
                    '百',
                    '千',
                    '亿',
                    '十',
                    '百',
                    '千',
                    '万亿',
                    '十',
                    '百',
                    '千',
                    '兆',
                    '十',
                    '百',
                    '千'
                ],
            dec: ['角', '分', '厘', '毫']
        };
        if (inWords) {
            value = (+value).toFixed(5).toString();
        }
        let integerRes = '';
        const integerCount = integer.length;
        if (integer === '0' || integerCount === 0) {
            integerRes = '零';
        }
        else {
            let cnDesc = '';
            for (let i = 0; i < integerCount; i++) {
                const n = +integer[i];
                const j = integerCount - i - 1;
                const isZero = i > 1 && n !== 0 && integer[i - 1] === '0';
                const cnZero = isZero ? '零' : '';
                const isEmpptyUnit = (n === 0 && j % 4 !== 0) || integer.substring(i - 3, i - 3 + 4) === '0000';
                const descMark = cnDesc;
                let cnNum = unit.num[n];
                cnDesc = isEmpptyUnit ? '' : unit.radice[j];
                // 第一位是一十
                if (i === 0 && cnNum === '一' && cnDesc === '十')
                    cnNum = '';
                const isChangeEr = n > 1 &&
                    cnNum === '二' && // 去除首位
                    ['', '十', '百'].indexOf(cnDesc) === -1 && // 不读两\两十\两百
                    descMark !== '十'; // 不读十两
                if (isChangeEr)
                    cnNum = '两';
                integerRes += cnZero + cnNum + cnDesc;
            }
        }
        // 小数部分拼接
        let decimalRes = '';
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
                const n = decimal[i];
                const cnZero = n === '0' ? '零' : '';
                const cnNum = unit.num[+n];
                const cnDesc = inWords ? unit.dec[i] : '';
                decimalRes += cnZero + cnNum + cnDesc;
            }
        }
        const ret = symbol +
            (inWords
                ? integerRes + (decimalRes === '零' ? '元整' : `元${decimalRes}`)
                : integerRes + (decimalRes === '' ? '' : `点${decimalRes}`));
        return ret;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CurrencyService, deps: [{ token: i1.AlainConfigService }, { token: LOCALE_ID }, { token: DEFAULT_CURRENCY_CODE }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CurrencyService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CurrencyService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DEFAULT_CURRENCY_CODE]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvZm9ybWF0L2N1cnJlbmN5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLckYsT0FBTyxFQUtMLG1CQUFtQixFQUNwQixNQUFNLGtCQUFrQixDQUFDOzs7QUFHMUIsTUFBTSxPQUFPLGVBQWU7SUFJMUIsWUFDRSxHQUF1QixFQUNJLE1BQWMsRUFDVix1QkFBK0IsS0FBSztRQUR4QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBR3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRTtZQUNqQyxZQUFZLEVBQUUsTUFBTTtZQUNwQixRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUU7WUFDcEQsU0FBUyxFQUFFLENBQUM7WUFDWixtQkFBbUIsRUFBRSxJQUFJO1NBQzFCLENBQUUsQ0FBQztJQUNOLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILE1BQU0sQ0FBQyxLQUFzQixFQUFFLE9BQStCO1FBQzVELE9BQU8sR0FBRztZQUNSLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVk7WUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUztZQUMz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Q2IsQ0FBQzsrR0EvT1UsZUFBZSxvREFNaEIsU0FBUyxhQUNULHFCQUFxQjttSEFQcEIsZUFBZSxjQURGLE1BQU07OzRGQUNuQixlQUFlO2tCQUQzQixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7MEJBTzdCLE1BQU07MkJBQUMsU0FBUzs7MEJBQ2hCLE1BQU07MkJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3VycmVuY3lQaXBlLCBmb3JtYXROdW1iZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgREVGQVVMVF9DVVJSRU5DWV9DT0RFLCBJbmplY3QsIEluamVjdGFibGUsIExPQ0FMRV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluVXRpbEN1cnJlbmN5Q29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHtcbiAgQ3VycmVuY3lDTllPcHRpb25zLFxuICBDdXJyZW5jeUZvcm1hdE9wdGlvbnMsXG4gIEN1cnJlbmN5TWVnYU9wdGlvbnMsXG4gIEN1cnJlbmN5TWVnYVJlc3VsdCxcbiAgQ3VycmVuY3lNZWdhX1Bvd2Vyc1xufSBmcm9tICcuL2N1cnJlbmN5LnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVNlcnZpY2Uge1xuICBwcml2YXRlIGM6IEFsYWluVXRpbEN1cnJlbmN5Q29uZmlnO1xuICBwcml2YXRlIHJlYWRvbmx5IGN1cnJlbmN5UGlwZTogQ3VycmVuY3lQaXBlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvZzogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIGxvY2FsZTogc3RyaW5nLFxuICAgIEBJbmplY3QoREVGQVVMVF9DVVJSRU5DWV9DT0RFKSBfZGVmYXVsdEN1cnJlbmN5Q29kZTogc3RyaW5nID0gJ1VTRCdcbiAgKSB7XG4gICAgdGhpcy5jdXJyZW5jeVBpcGUgPSBuZXcgQ3VycmVuY3lQaXBlKGxvY2FsZSwgX2RlZmF1bHRDdXJyZW5jeUNvZGUpO1xuICAgIHRoaXMuYyA9IGNvZy5tZXJnZSgndXRpbEN1cnJlbmN5Jywge1xuICAgICAgc3RhcnRpbmdVbml0OiAneXVhbicsXG4gICAgICBtZWdhVW5pdDogeyBROiAn5LqsJywgVDogJ+WFhicsIEI6ICfkur8nLCBNOiAn5LiHJywgSzogJ+WNgycgfSxcbiAgICAgIHByZWNpc2lvbjogMixcbiAgICAgIGluZ29yZVplcm9QcmVjaXNpb246IHRydWVcbiAgICB9KSE7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IGEgbnVtYmVyIHdpdGggY29tbWFzIGFzIHRob3VzYW5kcyBzZXBhcmF0b3JzXG4gICAqXG4gICAqIOagvOW8j+WMlui0p+W4ge+8jOeUqOmAl+WPt+WwhuaVsOWtl+agvOW8j+WMluS4uuWNg+S9jeWIhumalOesplxuICAgKiBgYGB0c1xuICAgKiAxMDAwMCA9PiBgMTAsMDAwYFxuICAgKiAxMDAwMC41NjcgPT4gYDEwLDAwMC41N2BcbiAgICogYGBgXG4gICAqL1xuICBmb3JtYXQodmFsdWU6IG51bWJlciB8IHN0cmluZywgb3B0aW9ucz86IEN1cnJlbmN5Rm9ybWF0T3B0aW9ucyk6IHN0cmluZyB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIHN0YXJ0aW5nVW5pdDogdGhpcy5jLnN0YXJ0aW5nVW5pdCxcbiAgICAgIHByZWNpc2lvbjogdGhpcy5jLnByZWNpc2lvbixcbiAgICAgIGluZ29yZVplcm9QcmVjaXNpb246IHRoaXMuYy5pbmdvcmVaZXJvUHJlY2lzaW9uLFxuICAgICAgbmdDdXJyZW5jeTogdGhpcy5jLm5nQ3VycmVuY3ksXG4gICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICBsZXQgdHJ1dGhWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgaXNOYU4odHJ1dGhWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuc3RhcnRpbmdVbml0ID09PSAnY2VudCcpIHtcbiAgICAgIHRydXRoVmFsdWUgPSB0cnV0aFZhbHVlIC8gMTAwO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5uZ0N1cnJlbmN5ICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGN1ciA9IG9wdGlvbnMubmdDdXJyZW5jeSE7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW5jeVBpcGUudHJhbnNmb3JtKFxuICAgICAgICB0cnV0aFZhbHVlLFxuICAgICAgICBjdXIuY3VycmVuY3lDb2RlLFxuICAgICAgICBjdXIuZGlzcGxheSxcbiAgICAgICAgY3VyLmRpZ2l0c0luZm8sXG4gICAgICAgIGN1ci5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcbiAgICAgICkhO1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBmb3JtYXROdW1iZXIoXG4gICAgICB0cnV0aFZhbHVlLFxuICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICBgLiR7b3B0aW9ucy5pbmdvcmVaZXJvUHJlY2lzaW9uID8gMSA6IG9wdGlvbnMucHJlY2lzaW9ufS0ke29wdGlvbnMucHJlY2lzaW9ufWBcbiAgICApO1xuICAgIHJldHVybiBvcHRpb25zLmluZ29yZVplcm9QcmVjaXNpb24gPyByZXMucmVwbGFjZSgvKD86XFwuWzBdKykkL2csICcnKSA6IHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBMYXJnZSBudW1iZXIgZm9ybWF0IGZpbHRlclxuICAgKlxuICAgKiDlpKfmlbDmja7moLzlvI/ljJZcbiAgICogYGBgdHNcbiAgICogMTAwMCA9PiB7IHZhbHVlOiAnMScsIHVuaXQ6ICdLJywgdW5pdEkxOG46ICfljYMnIH1cbiAgICogMTI0NTYgPT4geyB2YWx1ZTogJzEyLjQ2JywgdW5pdDogJ0snLCB1bml0STE4bjogJ+WNgycgfVxuICAgKiBgYGBcbiAgICovXG4gIG1lZ2EodmFsdWU6IG51bWJlciB8IHN0cmluZywgb3B0aW9ucz86IEN1cnJlbmN5TWVnYU9wdGlvbnMpOiBDdXJyZW5jeU1lZ2FSZXN1bHQge1xuICAgIG9wdGlvbnMgPSB7IHByZWNpc2lvbjogdGhpcy5jLnByZWNpc2lvbiwgdW5pdEkxOG46IHRoaXMuYy5tZWdhVW5pdCwgc3RhcnRpbmdVbml0OiB0aGlzLmMuc3RhcnRpbmdVbml0LCAuLi5vcHRpb25zIH07XG4gICAgbGV0IG51bSA9IE51bWJlcih2YWx1ZSk7XG4gICAgY29uc3QgcmVzOiBDdXJyZW5jeU1lZ2FSZXN1bHQgPSB7IHJhdzogdmFsdWUsIHZhbHVlOiAnJywgdW5pdDogJycsIHVuaXRJMThuOiAnJyB9O1xuICAgIGlmIChpc05hTihudW0pIHx8IG51bSA9PT0gMCkge1xuICAgICAgcmVzLnZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnN0YXJ0aW5nVW5pdCA9PT0gJ2NlbnQnKSB7XG4gICAgICBudW0gPSBudW0gLyAxMDA7XG4gICAgfVxuICAgIGxldCBhYnMgPSBNYXRoLmFicygrbnVtKTtcbiAgICBjb25zdCByb3VuZGVyID0gTWF0aC5wb3coMTAsIG9wdGlvbnMucHJlY2lzaW9uISk7XG4gICAgY29uc3QgaXNOZWdhdGl2ZSA9IG51bSA8IDA7XG4gICAgZm9yIChjb25zdCBwIG9mIEN1cnJlbmN5TWVnYV9Qb3dlcnMpIHtcbiAgICAgIGxldCByZWR1Y2VkID0gYWJzIC8gcC52YWx1ZTtcblxuICAgICAgcmVkdWNlZCA9IE1hdGgucm91bmQocmVkdWNlZCAqIHJvdW5kZXIpIC8gcm91bmRlcjtcblxuICAgICAgaWYgKHJlZHVjZWQgPj0gMSkge1xuICAgICAgICBhYnMgPSByZWR1Y2VkO1xuICAgICAgICByZXMudW5pdCA9IHAudW5pdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVzLnZhbHVlID0gKGlzTmVnYXRpdmUgPyAnLScgOiAnJykgKyBhYnM7XG4gICAgcmVzLnVuaXRJMThuID0gKG9wdGlvbnMudW5pdEkxOG4gYXMgeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSlbcmVzLnVuaXRdO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydGVkIGludG8gUk1CIG5vdGF0aW9uLlxuICAgKlxuICAgKiDovazljJbmiJDkurrmsJHluIHooajnpLrms5VcbiAgICovXG4gIGNueSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogQ3VycmVuY3lDTllPcHRpb25zKTogc3RyaW5nIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgaW5Xb3JkczogdHJ1ZSxcbiAgICAgIG1pbnVzU3ltYm9sOiAn6LSfJyxcbiAgICAgIHN0YXJ0aW5nVW5pdDogdGhpcy5jLnN0YXJ0aW5nVW5pdCxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuXG4gICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuc3RhcnRpbmdVbml0ID09PSAnY2VudCcpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDA7XG4gICAgfVxuICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICBsZXQgaW50ZWdlcjogbnVtYmVyIHwgc3RyaW5nO1xuICAgIGxldCBkZWNpbWFsOiBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xuICAgIFtpbnRlZ2VyLCBkZWNpbWFsXSA9IHZhbHVlLnNwbGl0KCcuJyk7XG4gICAgbGV0IHN5bWJvbCA9ICcnO1xuICAgIGlmIChpbnRlZ2VyLnN0YXJ0c1dpdGgoJy0nKSkge1xuICAgICAgc3ltYm9sID0gb3B0aW9ucy5taW51c1N5bWJvbCE7XG4gICAgICBpbnRlZ2VyID0gaW50ZWdlci5zdWJzdHJpbmcoMSk7XG4gICAgfVxuICAgIGlmICgvXi0/XFxkKyQvLnRlc3QodmFsdWUpKSB7XG4gICAgICBkZWNpbWFsID0gbnVsbDtcbiAgICB9XG4gICAgaW50ZWdlciA9ICgraW50ZWdlcikudG9TdHJpbmcoKTtcbiAgICBjb25zdCBpbldvcmRzID0gb3B0aW9ucy5pbldvcmRzO1xuICAgIGNvbnN0IHVuaXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfSA9IHtcbiAgICAgIG51bTogaW5Xb3Jkc1xuICAgICAgICA/IFsnJywgJ+WjuScsICfotLAnLCAn5Y+BJywgJ+iChicsICfkvI0nLCAn6ZmGJywgJ+afkicsICfmjYwnLCAn546WJywgJ+eCuSddXG4gICAgICAgIDogWycnLCAn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nLCAn5LiDJywgJ+WFqycsICfkuZ0nLCAn54K5J10sXG4gICAgICByYWRpY2U6IGluV29yZHNcbiAgICAgICAgPyBbXG4gICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICfmi74nLFxuICAgICAgICAgICAgJ+S9sCcsXG4gICAgICAgICAgICAn5LufJyxcbiAgICAgICAgICAgICfkuIcnLFxuICAgICAgICAgICAgJ+aLvicsXG4gICAgICAgICAgICAn5L2wJyxcbiAgICAgICAgICAgICfku58nLFxuICAgICAgICAgICAgJ+S6vycsXG4gICAgICAgICAgICAn5ou+JyxcbiAgICAgICAgICAgICfkvbAnLFxuICAgICAgICAgICAgJ+S7nycsXG4gICAgICAgICAgICAn5LiH5Lq/JyxcbiAgICAgICAgICAgICfmi74nLFxuICAgICAgICAgICAgJ+S9sCcsXG4gICAgICAgICAgICAn5LufJyxcbiAgICAgICAgICAgICflhYYnLFxuICAgICAgICAgICAgJ+aLvicsXG4gICAgICAgICAgICAn5L2wJyxcbiAgICAgICAgICAgICfku58nXG4gICAgICAgICAgXVxuICAgICAgICA6IFtcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgJ+WNgScsXG4gICAgICAgICAgICAn55m+JyxcbiAgICAgICAgICAgICfljYMnLFxuICAgICAgICAgICAgJ+S4hycsXG4gICAgICAgICAgICAn5Y2BJyxcbiAgICAgICAgICAgICfnmb4nLFxuICAgICAgICAgICAgJ+WNgycsXG4gICAgICAgICAgICAn5Lq/JyxcbiAgICAgICAgICAgICfljYEnLFxuICAgICAgICAgICAgJ+eZvicsXG4gICAgICAgICAgICAn5Y2DJyxcbiAgICAgICAgICAgICfkuIfkur8nLFxuICAgICAgICAgICAgJ+WNgScsXG4gICAgICAgICAgICAn55m+JyxcbiAgICAgICAgICAgICfljYMnLFxuICAgICAgICAgICAgJ+WFhicsXG4gICAgICAgICAgICAn5Y2BJyxcbiAgICAgICAgICAgICfnmb4nLFxuICAgICAgICAgICAgJ+WNgydcbiAgICAgICAgICBdLFxuICAgICAgZGVjOiBbJ+inkicsICfliIYnLCAn5Y6YJywgJ+avqyddXG4gICAgfTtcbiAgICBpZiAoaW5Xb3Jkcykge1xuICAgICAgdmFsdWUgPSAoK3ZhbHVlKS50b0ZpeGVkKDUpLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGxldCBpbnRlZ2VyUmVzID0gJyc7XG4gICAgY29uc3QgaW50ZWdlckNvdW50ID0gaW50ZWdlci5sZW5ndGg7XG4gICAgaWYgKGludGVnZXIgPT09ICcwJyB8fCBpbnRlZ2VyQ291bnQgPT09IDApIHtcbiAgICAgIGludGVnZXJSZXMgPSAn6Zu2JztcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNuRGVzYyA9ICcnO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlZ2VyQ291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCBuID0gK2ludGVnZXJbaV07XG4gICAgICAgIGNvbnN0IGogPSBpbnRlZ2VyQ291bnQgLSBpIC0gMTtcbiAgICAgICAgY29uc3QgaXNaZXJvID0gaSA+IDEgJiYgbiAhPT0gMCAmJiBpbnRlZ2VyW2kgLSAxXSA9PT0gJzAnO1xuICAgICAgICBjb25zdCBjblplcm8gPSBpc1plcm8gPyAn6Zu2JyA6ICcnO1xuICAgICAgICBjb25zdCBpc0VtcHB0eVVuaXQgPSAobiA9PT0gMCAmJiBqICUgNCAhPT0gMCkgfHwgaW50ZWdlci5zdWJzdHJpbmcoaSAtIDMsIGkgLSAzICsgNCkgPT09ICcwMDAwJztcbiAgICAgICAgY29uc3QgZGVzY01hcmsgPSBjbkRlc2M7XG4gICAgICAgIGxldCBjbk51bSA9IHVuaXQubnVtW25dO1xuXG4gICAgICAgIGNuRGVzYyA9IGlzRW1wcHR5VW5pdCA/ICcnIDogdW5pdC5yYWRpY2Vbal07XG4gICAgICAgIC8vIOesrOS4gOS9jeaYr+S4gOWNgVxuICAgICAgICBpZiAoaSA9PT0gMCAmJiBjbk51bSA9PT0gJ+S4gCcgJiYgY25EZXNjID09PSAn5Y2BJykgY25OdW0gPSAnJztcbiAgICAgICAgY29uc3QgaXNDaGFuZ2VFciA9XG4gICAgICAgICAgbiA+IDEgJiZcbiAgICAgICAgICBjbk51bSA9PT0gJ+S6jCcgJiYgLy8g5Y676Zmk6aaW5L2NXG4gICAgICAgICAgWycnLCAn5Y2BJywgJ+eZviddLmluZGV4T2YoY25EZXNjKSA9PT0gLTEgJiYgLy8g5LiN6K+75LikXFzkuKTljYFcXOS4pOeZvlxuICAgICAgICAgIGRlc2NNYXJrICE9PSAn5Y2BJzsgLy8g5LiN6K+75Y2B5LikXG4gICAgICAgIGlmIChpc0NoYW5nZUVyKSBjbk51bSA9ICfkuKQnO1xuICAgICAgICBpbnRlZ2VyUmVzICs9IGNuWmVybyArIGNuTnVtICsgY25EZXNjO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWwj+aVsOmDqOWIhuaLvOaOpVxuICAgIGxldCBkZWNpbWFsUmVzID0gJyc7XG4gICAgY29uc3QgZGVjaW1hbENvdW50ID0gZGVjaW1hbCA/IGRlY2ltYWwudG9TdHJpbmcoKS5sZW5ndGggOiAwO1xuICAgIGlmIChkZWNpbWFsID09PSBudWxsKSB7XG4gICAgICBkZWNpbWFsUmVzID0gaW5Xb3JkcyA/ICfmlbQnIDogJyc7XG4gICAgfSBlbHNlIGlmIChkZWNpbWFsID09PSAnMCcpIHtcbiAgICAgIGRlY2ltYWxSZXMgPSAn6Zu2JztcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWNpbWFsQ291bnQ7IGkrKykge1xuICAgICAgICBpZiAoaW5Xb3JkcyAmJiBpID4gdW5pdC5kZWMubGVuZ3RoIC0gMSkgYnJlYWs7XG4gICAgICAgIGNvbnN0IG4gPSBkZWNpbWFsW2ldO1xuICAgICAgICBjb25zdCBjblplcm8gPSBuID09PSAnMCcgPyAn6Zu2JyA6ICcnO1xuICAgICAgICBjb25zdCBjbk51bSA9IHVuaXQubnVtWytuXTtcbiAgICAgICAgY29uc3QgY25EZXNjID0gaW5Xb3JkcyA/IHVuaXQuZGVjW2ldIDogJyc7XG4gICAgICAgIGRlY2ltYWxSZXMgKz0gY25aZXJvICsgY25OdW0gKyBjbkRlc2M7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJldCA9XG4gICAgICBzeW1ib2wgK1xuICAgICAgKGluV29yZHNcbiAgICAgICAgPyBpbnRlZ2VyUmVzICsgKGRlY2ltYWxSZXMgPT09ICfpm7YnID8gJ+WFg+aVtCcgOiBg5YWDJHtkZWNpbWFsUmVzfWApXG4gICAgICAgIDogaW50ZWdlclJlcyArIChkZWNpbWFsUmVzID09PSAnJyA/ICcnIDogYOeCuSR7ZGVjaW1hbFJlc31gKSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuIl19