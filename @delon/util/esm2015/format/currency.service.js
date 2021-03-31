import { formatNumber } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { CurrencyMega_Powers } from './currency.types';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export class CurrencyService {
    constructor(cog, locale) {
        this.locale = locale;
        this.c = cog.merge('utilCurrency', {
            startingUnit: 'yuan',
            megaUnit: { Q: '京', T: '兆', B: '亿', M: '万', K: '千' },
            precision: 2,
            ingoreZeroPrecision: true,
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
        options = Object.assign({ startingUnit: this.c.startingUnit, precision: this.c.precision, ingoreZeroPrecision: this.c.ingoreZeroPrecision }, options);
        let truthValue = Number(value);
        if (value == null || isNaN(truthValue)) {
            return '';
        }
        if (options.startingUnit === 'cent') {
            truthValue = truthValue / 100;
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
        options = Object.assign({ precision: this.c.precision, unitI18n: this.c.megaUnit, startingUnit: this.c.startingUnit }, options);
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
        options = Object.assign({ inWords: true, minusSymbol: '负', startingUnit: this.c.startingUnit }, options);
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
            integer = integer.substr(1);
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
                ? ['', '拾', '佰', '仟', '万', '拾', '佰', '仟', '亿', '拾', '佰', '仟', '万亿', '拾', '佰', '仟', '兆', '拾', '佰', '仟']
                : ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万亿', '十', '百', '千', '兆', '十', '百', '千'],
            dec: ['角', '分', '厘', '毫'],
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
                const isEmpptyUnit = (n === 0 && j % 4 !== 0) || integer.substr(i - 3, 4) === '0000';
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
}
/** @nocollapse */ CurrencyService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CurrencyService_Factory() { return new CurrencyService(i0.ɵɵinject(i1.AlainConfigService), i0.ɵɵinject(i0.LOCALE_ID)); }, token: CurrencyService, providedIn: "root" });
CurrencyService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
CurrencyService.ctorParameters = () => [
    { type: AlainConfigService },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvZm9ybWF0L2N1cnJlbmN5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQTJCLE1BQU0sb0JBQW9CLENBQUM7QUFDakYsT0FBTyxFQUFzRixtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFHM0ksTUFBTSxPQUFPLGVBQWU7SUFHMUIsWUFBWSxHQUF1QixFQUE2QixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM1RSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFO1lBQ2pDLFlBQVksRUFBRSxNQUFNO1lBQ3BCLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUNwRCxTQUFTLEVBQUUsQ0FBQztZQUNaLG1CQUFtQixFQUFFLElBQUk7U0FDMUIsQ0FBRSxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsTUFBTSxDQUFDLEtBQXNCLEVBQUUsT0FBK0I7UUFDNUQsT0FBTyxtQkFDTCxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFDM0IsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsSUFDNUMsT0FBTyxDQUNYLENBQUM7UUFD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QUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDMUMsVUFBVSxJQUFJLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO2FBQ3ZDO1NBQ0Y7UUFDRCxNQUFNLEdBQUcsR0FDUCxNQUFNO1lBQ04sQ0FBQyxPQUFPO2dCQUNOLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFLENBQUM7Z0JBQzdELENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7OztZQWpMRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBSHpCLGtCQUFrQjt5Q0FPYSxNQUFNLFNBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdE51bWJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIExPQ0FMRV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblV0aWxDdXJyZW5jeUNvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBDdXJyZW5jeUNOWU9wdGlvbnMsIEN1cnJlbmN5Rm9ybWF0T3B0aW9ucywgQ3VycmVuY3lNZWdhT3B0aW9ucywgQ3VycmVuY3lNZWdhUmVzdWx0LCBDdXJyZW5jeU1lZ2FfUG93ZXJzIH0gZnJvbSAnLi9jdXJyZW5jeS50eXBlcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjOiBBbGFpblV0aWxDdXJyZW5jeUNvbmZpZztcblxuICBjb25zdHJ1Y3Rvcihjb2c6IEFsYWluQ29uZmlnU2VydmljZSwgQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmMgPSBjb2cubWVyZ2UoJ3V0aWxDdXJyZW5jeScsIHtcbiAgICAgIHN0YXJ0aW5nVW5pdDogJ3l1YW4nLFxuICAgICAgbWVnYVVuaXQ6IHsgUTogJ+S6rCcsIFQ6ICflhYYnLCBCOiAn5Lq/JywgTTogJ+S4hycsIEs6ICfljYMnIH0sXG4gICAgICBwcmVjaXNpb246IDIsXG4gICAgICBpbmdvcmVaZXJvUHJlY2lzaW9uOiB0cnVlLFxuICAgIH0pITtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgYSBudW1iZXIgd2l0aCBjb21tYXMgYXMgdGhvdXNhbmRzIHNlcGFyYXRvcnNcbiAgICpcbiAgICog5qC85byP5YyW6LSn5biB77yM55So6YCX5Y+35bCG5pWw5a2X5qC85byP5YyW5Li65Y2D5L2N5YiG6ZqU56ymXG4gICAqIGBgYHRzXG4gICAqIDEwMDAwID0+IGAxMCwwMDBgXG4gICAqIDEwMDAwLjU2NyA9PiBgMTAsMDAwLjU3YFxuICAgKiBgYGBcbiAgICovXG4gIGZvcm1hdCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogQ3VycmVuY3lGb3JtYXRPcHRpb25zKTogc3RyaW5nIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgc3RhcnRpbmdVbml0OiB0aGlzLmMuc3RhcnRpbmdVbml0LFxuICAgICAgcHJlY2lzaW9uOiB0aGlzLmMucHJlY2lzaW9uLFxuICAgICAgaW5nb3JlWmVyb1ByZWNpc2lvbjogdGhpcy5jLmluZ29yZVplcm9QcmVjaXNpb24sXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH07XG4gICAgbGV0IHRydXRoVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IGlzTmFOKHRydXRoVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnN0YXJ0aW5nVW5pdCA9PT0gJ2NlbnQnKSB7XG4gICAgICB0cnV0aFZhbHVlID0gdHJ1dGhWYWx1ZSAvIDEwMDtcbiAgICB9XG4gICAgY29uc3QgcmVzID0gZm9ybWF0TnVtYmVyKHRydXRoVmFsdWUsIHRoaXMubG9jYWxlLCBgLiR7b3B0aW9ucy5pbmdvcmVaZXJvUHJlY2lzaW9uID8gMSA6IG9wdGlvbnMucHJlY2lzaW9ufS0ke29wdGlvbnMucHJlY2lzaW9ufWApO1xuICAgIHJldHVybiBvcHRpb25zLmluZ29yZVplcm9QcmVjaXNpb24gPyByZXMucmVwbGFjZSgvKD86XFwuWzBdKykkL2csICcnKSA6IHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBMYXJnZSBudW1iZXIgZm9ybWF0IGZpbHRlclxuICAgKlxuICAgKiDlpKfmlbDmja7moLzlvI/ljJZcbiAgICogYGBgdHNcbiAgICogMTAwMCA9PiB7IHZhbHVlOiAnMScsIHVuaXQ6ICdLJywgdW5pdEkxOG46ICfljYMnIH1cbiAgICogMTI0NTYgPT4geyB2YWx1ZTogJzEyLjQ2JywgdW5pdDogJ0snLCB1bml0STE4bjogJ+WNgycgfVxuICAgKiBgYGBcbiAgICovXG4gIG1lZ2EodmFsdWU6IG51bWJlciB8IHN0cmluZywgb3B0aW9ucz86IEN1cnJlbmN5TWVnYU9wdGlvbnMpOiBDdXJyZW5jeU1lZ2FSZXN1bHQge1xuICAgIG9wdGlvbnMgPSB7IHByZWNpc2lvbjogdGhpcy5jLnByZWNpc2lvbiwgdW5pdEkxOG46IHRoaXMuYy5tZWdhVW5pdCwgc3RhcnRpbmdVbml0OiB0aGlzLmMuc3RhcnRpbmdVbml0LCAuLi5vcHRpb25zIH07XG4gICAgbGV0IG51bSA9IE51bWJlcih2YWx1ZSk7XG4gICAgY29uc3QgcmVzOiBDdXJyZW5jeU1lZ2FSZXN1bHQgPSB7IHJhdzogdmFsdWUsIHZhbHVlOiAnJywgdW5pdDogJycsIHVuaXRJMThuOiAnJyB9O1xuICAgIGlmIChpc05hTihudW0pIHx8IG51bSA9PT0gMCkge1xuICAgICAgcmVzLnZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnN0YXJ0aW5nVW5pdCA9PT0gJ2NlbnQnKSB7XG4gICAgICBudW0gPSBudW0gLyAxMDA7XG4gICAgfVxuICAgIGxldCBhYnMgPSBNYXRoLmFicygrbnVtKTtcbiAgICBjb25zdCByb3VuZGVyID0gTWF0aC5wb3coMTAsIG9wdGlvbnMucHJlY2lzaW9uISk7XG4gICAgY29uc3QgaXNOZWdhdGl2ZSA9IG51bSA8IDA7XG4gICAgZm9yIChjb25zdCBwIG9mIEN1cnJlbmN5TWVnYV9Qb3dlcnMpIHtcbiAgICAgIGxldCByZWR1Y2VkID0gYWJzIC8gcC52YWx1ZTtcblxuICAgICAgcmVkdWNlZCA9IE1hdGgucm91bmQocmVkdWNlZCAqIHJvdW5kZXIpIC8gcm91bmRlcjtcblxuICAgICAgaWYgKHJlZHVjZWQgPj0gMSkge1xuICAgICAgICBhYnMgPSByZWR1Y2VkO1xuICAgICAgICByZXMudW5pdCA9IHAudW5pdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVzLnZhbHVlID0gKGlzTmVnYXRpdmUgPyAnLScgOiAnJykgKyBhYnM7XG4gICAgcmVzLnVuaXRJMThuID0gKG9wdGlvbnMudW5pdEkxOG4gYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSlbcmVzLnVuaXRdO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydGVkIGludG8gUk1CIG5vdGF0aW9uLlxuICAgKlxuICAgKiDovazljJbmiJDkurrmsJHluIHooajnpLrms5VcbiAgICovXG4gIGNueSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogQ3VycmVuY3lDTllPcHRpb25zKTogc3RyaW5nIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgaW5Xb3JkczogdHJ1ZSxcbiAgICAgIG1pbnVzU3ltYm9sOiAn6LSfJyxcbiAgICAgIHN0YXJ0aW5nVW5pdDogdGhpcy5jLnN0YXJ0aW5nVW5pdCxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcblxuICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnN0YXJ0aW5nVW5pdCA9PT0gJ2NlbnQnKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlIC8gMTAwO1xuICAgIH1cbiAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgbGV0IGludGVnZXI6IG51bWJlciB8IHN0cmluZztcbiAgICBsZXQgZGVjaW1hbDogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcbiAgICBbaW50ZWdlciwgZGVjaW1hbF0gPSB2YWx1ZS5zcGxpdCgnLicpO1xuICAgIGxldCBzeW1ib2wgPSAnJztcbiAgICBpZiAoaW50ZWdlci5zdGFydHNXaXRoKCctJykpIHtcbiAgICAgIHN5bWJvbCA9IG9wdGlvbnMubWludXNTeW1ib2whO1xuICAgICAgaW50ZWdlciA9IGludGVnZXIuc3Vic3RyKDEpO1xuICAgIH1cbiAgICBpZiAoL14tP1xcZCskLy50ZXN0KHZhbHVlKSkge1xuICAgICAgZGVjaW1hbCA9IG51bGw7XG4gICAgfVxuICAgIGludGVnZXIgPSAoK2ludGVnZXIpLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgaW5Xb3JkcyA9IG9wdGlvbnMuaW5Xb3JkcztcbiAgICBjb25zdCB1bml0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIH0gPSB7XG4gICAgICBudW06IGluV29yZHNcbiAgICAgICAgPyBbJycsICflo7knLCAn6LSwJywgJ+WPgScsICfogoYnLCAn5LyNJywgJ+mZhicsICfmn5InLCAn5o2MJywgJ+eOlicsICfngrknXVxuICAgICAgICA6IFsnJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJywgJ+S4gycsICflhasnLCAn5LmdJywgJ+eCuSddLFxuICAgICAgcmFkaWNlOiBpbldvcmRzXG4gICAgICAgID8gWycnLCAn5ou+JywgJ+S9sCcsICfku58nLCAn5LiHJywgJ+aLvicsICfkvbAnLCAn5LufJywgJ+S6vycsICfmi74nLCAn5L2wJywgJ+S7nycsICfkuIfkur8nLCAn5ou+JywgJ+S9sCcsICfku58nLCAn5YWGJywgJ+aLvicsICfkvbAnLCAn5LufJ11cbiAgICAgICAgOiBbJycsICfljYEnLCAn55m+JywgJ+WNgycsICfkuIcnLCAn5Y2BJywgJ+eZvicsICfljYMnLCAn5Lq/JywgJ+WNgScsICfnmb4nLCAn5Y2DJywgJ+S4h+S6vycsICfljYEnLCAn55m+JywgJ+WNgycsICflhYYnLCAn5Y2BJywgJ+eZvicsICfljYMnXSxcbiAgICAgIGRlYzogWyfop5InLCAn5YiGJywgJ+WOmCcsICfmr6snXSxcbiAgICB9O1xuICAgIGlmIChpbldvcmRzKSB7XG4gICAgICB2YWx1ZSA9ICgrdmFsdWUpLnRvRml4ZWQoNSkudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgbGV0IGludGVnZXJSZXMgPSAnJztcbiAgICBjb25zdCBpbnRlZ2VyQ291bnQgPSBpbnRlZ2VyLmxlbmd0aDtcbiAgICBpZiAoaW50ZWdlciA9PT0gJzAnIHx8IGludGVnZXJDb3VudCA9PT0gMCkge1xuICAgICAgaW50ZWdlclJlcyA9ICfpm7YnO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY25EZXNjID0gJyc7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVnZXJDb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG4gPSAraW50ZWdlcltpXTtcbiAgICAgICAgY29uc3QgaiA9IGludGVnZXJDb3VudCAtIGkgLSAxO1xuICAgICAgICBjb25zdCBpc1plcm8gPSBpID4gMSAmJiBuICE9PSAwICYmIGludGVnZXJbaSAtIDFdID09PSAnMCc7XG4gICAgICAgIGNvbnN0IGNuWmVybyA9IGlzWmVybyA/ICfpm7YnIDogJyc7XG4gICAgICAgIGNvbnN0IGlzRW1wcHR5VW5pdCA9IChuID09PSAwICYmIGogJSA0ICE9PSAwKSB8fCBpbnRlZ2VyLnN1YnN0cihpIC0gMywgNCkgPT09ICcwMDAwJztcbiAgICAgICAgY29uc3QgZGVzY01hcmsgPSBjbkRlc2M7XG4gICAgICAgIGxldCBjbk51bSA9IHVuaXQubnVtW25dO1xuXG4gICAgICAgIGNuRGVzYyA9IGlzRW1wcHR5VW5pdCA/ICcnIDogdW5pdC5yYWRpY2Vbal07XG4gICAgICAgIC8vIOesrOS4gOS9jeaYr+S4gOWNgVxuICAgICAgICBpZiAoaSA9PT0gMCAmJiBjbk51bSA9PT0gJ+S4gCcgJiYgY25EZXNjID09PSAn5Y2BJykgY25OdW0gPSAnJztcbiAgICAgICAgY29uc3QgaXNDaGFuZ2VFciA9XG4gICAgICAgICAgbiA+IDEgJiZcbiAgICAgICAgICBjbk51bSA9PT0gJ+S6jCcgJiYgLy8g5Y676Zmk6aaW5L2NXG4gICAgICAgICAgWycnLCAn5Y2BJywgJ+eZviddLmluZGV4T2YoY25EZXNjKSA9PT0gLTEgJiYgLy8g5LiN6K+75LikXFzkuKTljYFcXOS4pOeZvlxuICAgICAgICAgIGRlc2NNYXJrICE9PSAn5Y2BJzsgLy8g5LiN6K+75Y2B5LikXG4gICAgICAgIGlmIChpc0NoYW5nZUVyKSBjbk51bSA9ICfkuKQnO1xuICAgICAgICBpbnRlZ2VyUmVzICs9IGNuWmVybyArIGNuTnVtICsgY25EZXNjO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWwj+aVsOmDqOWIhuaLvOaOpVxuICAgIGxldCBkZWNpbWFsUmVzID0gJyc7XG4gICAgY29uc3QgZGVjaW1hbENvdW50ID0gZGVjaW1hbCA/IGRlY2ltYWwudG9TdHJpbmcoKS5sZW5ndGggOiAwO1xuICAgIGlmIChkZWNpbWFsID09PSBudWxsKSB7XG4gICAgICBkZWNpbWFsUmVzID0gaW5Xb3JkcyA/ICfmlbQnIDogJyc7XG4gICAgfSBlbHNlIGlmIChkZWNpbWFsID09PSAnMCcpIHtcbiAgICAgIGRlY2ltYWxSZXMgPSAn6Zu2JztcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWNpbWFsQ291bnQ7IGkrKykge1xuICAgICAgICBpZiAoaW5Xb3JkcyAmJiBpID4gdW5pdC5kZWMubGVuZ3RoIC0gMSkgYnJlYWs7XG4gICAgICAgIGNvbnN0IG4gPSBkZWNpbWFsW2ldO1xuICAgICAgICBjb25zdCBjblplcm8gPSBuID09PSAnMCcgPyAn6Zu2JyA6ICcnO1xuICAgICAgICBjb25zdCBjbk51bSA9IHVuaXQubnVtWytuXTtcbiAgICAgICAgY29uc3QgY25EZXNjID0gaW5Xb3JkcyA/IHVuaXQuZGVjW2ldIDogJyc7XG4gICAgICAgIGRlY2ltYWxSZXMgKz0gY25aZXJvICsgY25OdW0gKyBjbkRlc2M7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJldCA9XG4gICAgICBzeW1ib2wgK1xuICAgICAgKGluV29yZHNcbiAgICAgICAgPyBpbnRlZ2VyUmVzICsgKGRlY2ltYWxSZXMgPT09ICfpm7YnID8gJ+WFg+aVtCcgOiBg5YWDJHtkZWNpbWFsUmVzfWApXG4gICAgICAgIDogaW50ZWdlclJlcyArIChkZWNpbWFsUmVzID09PSAnJyA/ICcnIDogYOeCuSR7ZGVjaW1hbFJlc31gKSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuIl19