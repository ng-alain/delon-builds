import { formatNumber } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { CurrencyMega_Powers } from './currency.types';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export class CurrencyService {
    constructor(cog, locale) {
        this.locale = locale;
        this.c = cog.merge('utilCurrency', { startingUnit: 'yuan', megaUnit: { Q: '京', T: '兆', B: '亿', M: '万', K: '千' } });
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
        options = Object.assign({ startingUnit: this.c.startingUnit, precision: 2 }, options);
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
     */
    mega(value, options) {
        options = Object.assign({ precision: 2, unitI18n: this.c.megaUnit, startingUnit: this.c.startingUnit }, options);
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
/** @nocollapse */ CurrencyService.ɵfac = function CurrencyService_Factory(t) { return new (t || CurrencyService)(i0.ɵɵinject(i1.AlainConfigService), i0.ɵɵinject(LOCALE_ID)); };
/** @nocollapse */ CurrencyService.ɵprov = i0.ɵɵdefineInjectable({ token: CurrencyService, factory: CurrencyService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CurrencyService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.AlainConfigService }, { type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvZm9ybWF0L2N1cnJlbmN5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQTJCLE1BQU0sb0JBQW9CLENBQUM7QUFDakYsT0FBTyxFQUFzRixtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFHM0ksTUFBTSxPQUFPLGVBQWU7SUFHMUIsWUFBWSxHQUF1QixFQUE2QixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM1RSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFFLENBQUM7SUFDdEgsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsTUFBTSxDQUFDLEtBQXNCLEVBQUUsT0FBK0I7UUFDNUQsT0FBTyxtQkFBSyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLENBQUMsSUFBSyxPQUFPLENBQUUsQ0FBQztRQUMxRSxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QyxPQUFPLEVB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QUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFDN0QsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLFVBQVUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEUsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztpR0FyS1UsZUFBZSxrREFHbUIsU0FBUzswRUFIM0MsZUFBZSxXQUFmLGVBQWUsbUJBREYsTUFBTTt1RkFDbkIsZUFBZTtjQUQzQixVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOztzQkFJTSxNQUFNO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXROdW1iZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5VdGlsQ3VycmVuY3lDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQ3VycmVuY3lDTllPcHRpb25zLCBDdXJyZW5jeUZvcm1hdE9wdGlvbnMsIEN1cnJlbmN5TWVnYU9wdGlvbnMsIEN1cnJlbmN5TWVnYVJlc3VsdCwgQ3VycmVuY3lNZWdhX1Bvd2VycyB9IGZyb20gJy4vY3VycmVuY3kudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5U2VydmljZSB7XG4gIHByaXZhdGUgYzogQWxhaW5VdGlsQ3VycmVuY3lDb25maWc7XG5cbiAgY29uc3RydWN0b3IoY29nOiBBbGFpbkNvbmZpZ1NlcnZpY2UsIEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jID0gY29nLm1lcmdlKCd1dGlsQ3VycmVuY3knLCB7IHN0YXJ0aW5nVW5pdDogJ3l1YW4nLCBtZWdhVW5pdDogeyBROiAn5LqsJywgVDogJ+WFhicsIEI6ICfkur8nLCBNOiAn5LiHJywgSzogJ+WNgycgfSB9KSE7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IGEgbnVtYmVyIHdpdGggY29tbWFzIGFzIHRob3VzYW5kcyBzZXBhcmF0b3JzXG4gICAqXG4gICAqIOagvOW8j+WMlui0p+W4ge+8jOeUqOmAl+WPt+WwhuaVsOWtl+agvOW8j+WMluS4uuWNg+S9jeWIhumalOesplxuICAgKiBgYGB0c1xuICAgKiAxMDAwMCA9PiBgMTAsMDAwYFxuICAgKiAxMDAwMC41NjcgPT4gYDEwLDAwMC41N2BcbiAgICogYGBgXG4gICAqL1xuICBmb3JtYXQodmFsdWU6IG51bWJlciB8IHN0cmluZywgb3B0aW9ucz86IEN1cnJlbmN5Rm9ybWF0T3B0aW9ucyk6IHN0cmluZyB7XG4gICAgb3B0aW9ucyA9IHsgc3RhcnRpbmdVbml0OiB0aGlzLmMuc3RhcnRpbmdVbml0LCBwcmVjaXNpb246IDIsIC4uLm9wdGlvbnMgfTtcbiAgICBsZXQgdHJ1dGhWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgaXNOYU4odHJ1dGhWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuc3RhcnRpbmdVbml0ID09PSAnY2VudCcpIHtcbiAgICAgIHRydXRoVmFsdWUgPSB0cnV0aFZhbHVlIC8gMTAwO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0TnVtYmVyKHRydXRoVmFsdWUsIHRoaXMubG9jYWxlLCBgLjEtJHtvcHRpb25zLnByZWNpc2lvbn1gKS5yZXBsYWNlKC8oPzpcXC5bMF0rKSQvZywgJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIExhcmdlIG51bWJlciBmb3JtYXQgZmlsdGVyXG4gICAqXG4gICAqIOWkp+aVsOaNruagvOW8j+WMllxuICAgKiBgYGB0c1xuICAgKiAxMDAwID0+IHsgdmFsdWU6ICcxJywgdW5pdDogJ0snLCB1bml0STE4bjogJ+WNgycgfVxuICAgKiAxMjQ1NiA9PiB7IHZhbHVlOiAnMTIuNDYnLCB1bml0OiAnSycsIHVuaXRJMThuOiAn5Y2DJyB9XG4gICAqIGBgYFxuICAgKi9cbiAgbWVnYSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPzogQ3VycmVuY3lNZWdhT3B0aW9ucyk6IEN1cnJlbmN5TWVnYVJlc3VsdCB7XG4gICAgb3B0aW9ucyA9IHsgcHJlY2lzaW9uOiAyLCB1bml0STE4bjogdGhpcy5jLm1lZ2FVbml0LCBzdGFydGluZ1VuaXQ6IHRoaXMuYy5zdGFydGluZ1VuaXQsIC4uLm9wdGlvbnMgfTtcbiAgICBsZXQgbnVtID0gTnVtYmVyKHZhbHVlKTtcbiAgICBjb25zdCByZXM6IEN1cnJlbmN5TWVnYVJlc3VsdCA9IHsgcmF3OiB2YWx1ZSwgdmFsdWU6ICcnLCB1bml0OiAnJywgdW5pdEkxOG46ICcnIH07XG4gICAgaWYgKGlzTmFOKG51bSkgfHwgbnVtID09PSAwKSB7XG4gICAgICByZXMudmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuc3RhcnRpbmdVbml0ID09PSAnY2VudCcpIHtcbiAgICAgIG51bSA9IG51bSAvIDEwMDtcbiAgICB9XG4gICAgbGV0IGFicyA9IE1hdGguYWJzKCtudW0pO1xuICAgIGNvbnN0IHJvdW5kZXIgPSBNYXRoLnBvdygxMCwgb3B0aW9ucy5wcmVjaXNpb24hKTtcbiAgICBjb25zdCBpc05lZ2F0aXZlID0gbnVtIDwgMDtcbiAgICBmb3IgKGNvbnN0IHAgb2YgQ3VycmVuY3lNZWdhX1Bvd2Vycykge1xuICAgICAgbGV0IHJlZHVjZWQgPSBhYnMgLyBwLnZhbHVlO1xuXG4gICAgICByZWR1Y2VkID0gTWF0aC5yb3VuZChyZWR1Y2VkICogcm91bmRlcikgLyByb3VuZGVyO1xuXG4gICAgICBpZiAocmVkdWNlZCA+PSAxKSB7XG4gICAgICAgIGFicyA9IHJlZHVjZWQ7XG4gICAgICAgIHJlcy51bml0ID0gcC51bml0O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXMudmFsdWUgPSAoaXNOZWdhdGl2ZSA/ICctJyA6ICcnKSArIGFicztcbiAgICByZXMudW5pdEkxOG4gPSAob3B0aW9ucy51bml0STE4biBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KVtyZXMudW5pdF07XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0ZWQgaW50byBSTUIgbm90YXRpb24uXG4gICAqXG4gICAqIOi9rOWMluaIkOS6uuawkeW4geihqOekuuazlVxuICAgKi9cbiAgY255KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIG9wdGlvbnM/OiBDdXJyZW5jeUNOWU9wdGlvbnMpOiBzdHJpbmcge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICBpbldvcmRzOiB0cnVlLFxuICAgICAgbWludXNTeW1ib2w6ICfotJ8nLFxuICAgICAgc3RhcnRpbmdVbml0OiB0aGlzLmMuc3RhcnRpbmdVbml0LFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9O1xuXG4gICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuc3RhcnRpbmdVbml0ID09PSAnY2VudCcpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDA7XG4gICAgfVxuICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICBsZXQgaW50ZWdlcjogbnVtYmVyIHwgc3RyaW5nO1xuICAgIGxldCBkZWNpbWFsOiBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xuICAgIFtpbnRlZ2VyLCBkZWNpbWFsXSA9IHZhbHVlLnNwbGl0KCcuJyk7XG4gICAgbGV0IHN5bWJvbCA9ICcnO1xuICAgIGlmIChpbnRlZ2VyLnN0YXJ0c1dpdGgoJy0nKSkge1xuICAgICAgc3ltYm9sID0gb3B0aW9ucy5taW51c1N5bWJvbCE7XG4gICAgICBpbnRlZ2VyID0gaW50ZWdlci5zdWJzdHIoMSk7XG4gICAgfVxuICAgIGlmICgvXi0/XFxkKyQvLnRlc3QodmFsdWUpKSB7XG4gICAgICBkZWNpbWFsID0gbnVsbDtcbiAgICB9XG4gICAgaW50ZWdlciA9ICgraW50ZWdlcikudG9TdHJpbmcoKTtcbiAgICBjb25zdCBpbldvcmRzID0gb3B0aW9ucy5pbldvcmRzO1xuICAgIGNvbnN0IHVuaXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfSA9IHtcbiAgICAgIG51bTogaW5Xb3Jkc1xuICAgICAgICA/IFsnJywgJ+WjuScsICfotLAnLCAn5Y+BJywgJ+iChicsICfkvI0nLCAn6ZmGJywgJ+afkicsICfmjYwnLCAn546WJywgJ+eCuSddXG4gICAgICAgIDogWycnLCAn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nLCAn5LiDJywgJ+WFqycsICfkuZ0nLCAn54K5J10sXG4gICAgICByYWRpY2U6IGluV29yZHNcbiAgICAgICAgPyBbJycsICfmi74nLCAn5L2wJywgJ+S7nycsICfkuIcnLCAn5ou+JywgJ+S9sCcsICfku58nLCAn5Lq/JywgJ+aLvicsICfkvbAnLCAn5LufJywgJ+S4h+S6vycsICfmi74nLCAn5L2wJywgJ+S7nycsICflhYYnLCAn5ou+JywgJ+S9sCcsICfku58nXVxuICAgICAgICA6IFsnJywgJ+WNgScsICfnmb4nLCAn5Y2DJywgJ+S4hycsICfljYEnLCAn55m+JywgJ+WNgycsICfkur8nLCAn5Y2BJywgJ+eZvicsICfljYMnLCAn5LiH5Lq/JywgJ+WNgScsICfnmb4nLCAn5Y2DJywgJ+WFhicsICfljYEnLCAn55m+JywgJ+WNgyddLFxuICAgICAgZGVjOiBbJ+inkicsICfliIYnLCAn5Y6YJywgJ+avqyddLFxuICAgIH07XG4gICAgaWYgKGluV29yZHMpIHtcbiAgICAgIHZhbHVlID0gKCt2YWx1ZSkudG9GaXhlZCg1KS50b1N0cmluZygpO1xuICAgIH1cbiAgICBsZXQgaW50ZWdlclJlcyA9ICcnO1xuICAgIGNvbnN0IGludGVnZXJDb3VudCA9IGludGVnZXIubGVuZ3RoO1xuICAgIGlmIChpbnRlZ2VyID09PSAnMCcgfHwgaW50ZWdlckNvdW50ID09PSAwKSB7XG4gICAgICBpbnRlZ2VyUmVzID0gJ+mbtic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBjbkRlc2MgPSAnJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZWdlckNvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgbiA9ICtpbnRlZ2VyW2ldO1xuICAgICAgICBjb25zdCBqID0gaW50ZWdlckNvdW50IC0gaSAtIDE7XG4gICAgICAgIGNvbnN0IGlzWmVybyA9IGkgPiAxICYmIG4gIT09IDAgJiYgaW50ZWdlcltpIC0gMV0gPT09ICcwJztcbiAgICAgICAgY29uc3QgY25aZXJvID0gaXNaZXJvID8gJ+mbticgOiAnJztcbiAgICAgICAgY29uc3QgaXNFbXBwdHlVbml0ID0gKG4gPT09IDAgJiYgaiAlIDQgIT09IDApIHx8IGludGVnZXIuc3Vic3RyKGkgLSAzLCA0KSA9PT0gJzAwMDAnO1xuICAgICAgICBjb25zdCBkZXNjTWFyayA9IGNuRGVzYztcbiAgICAgICAgbGV0IGNuTnVtID0gdW5pdC5udW1bbl07XG5cbiAgICAgICAgY25EZXNjID0gaXNFbXBwdHlVbml0ID8gJycgOiB1bml0LnJhZGljZVtqXTtcbiAgICAgICAgLy8g56ys5LiA5L2N5piv5LiA5Y2BXG4gICAgICAgIGlmIChpID09PSAwICYmIGNuTnVtID09PSAn5LiAJyAmJiBjbkRlc2MgPT09ICfljYEnKSBjbk51bSA9ICcnO1xuICAgICAgICBjb25zdCBpc0NoYW5nZUVyID1cbiAgICAgICAgICBuID4gMSAmJlxuICAgICAgICAgIGNuTnVtID09PSAn5LqMJyAmJiAvLyDljrvpmaTpppbkvY1cbiAgICAgICAgICBbJycsICfljYEnLCAn55m+J10uaW5kZXhPZihjbkRlc2MpID09PSAtMSAmJiAvLyDkuI3or7vkuKRcXOS4pOWNgVxc5Lik55m+XG4gICAgICAgICAgZGVzY01hcmsgIT09ICfljYEnOyAvLyDkuI3or7vljYHkuKRcbiAgICAgICAgaWYgKGlzQ2hhbmdlRXIpIGNuTnVtID0gJ+S4pCc7XG4gICAgICAgIGludGVnZXJSZXMgKz0gY25aZXJvICsgY25OdW0gKyBjbkRlc2M7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5bCP5pWw6YOo5YiG5ou85o6lXG4gICAgbGV0IGRlY2ltYWxSZXMgPSAnJztcbiAgICBjb25zdCBkZWNpbWFsQ291bnQgPSBkZWNpbWFsID8gZGVjaW1hbC50b1N0cmluZygpLmxlbmd0aCA6IDA7XG4gICAgaWYgKGRlY2ltYWwgPT09IG51bGwpIHtcbiAgICAgIGRlY2ltYWxSZXMgPSBpbldvcmRzID8gJ+aVtCcgOiAnJztcbiAgICB9IGVsc2UgaWYgKGRlY2ltYWwgPT09ICcwJykge1xuICAgICAgZGVjaW1hbFJlcyA9ICfpm7YnO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlY2ltYWxDb3VudDsgaSsrKSB7XG4gICAgICAgIGlmIChpbldvcmRzICYmIGkgPiB1bml0LmRlYy5sZW5ndGggLSAxKSBicmVhaztcbiAgICAgICAgY29uc3QgbiA9IGRlY2ltYWxbaV07XG4gICAgICAgIGNvbnN0IGNuWmVybyA9IG4gPT09ICcwJyA/ICfpm7YnIDogJyc7XG4gICAgICAgIGNvbnN0IGNuTnVtID0gdW5pdC5udW1bK25dO1xuICAgICAgICBjb25zdCBjbkRlc2MgPSBpbldvcmRzID8gdW5pdC5kZWNbaV0gOiAnJztcbiAgICAgICAgZGVjaW1hbFJlcyArPSBjblplcm8gKyBjbk51bSArIGNuRGVzYztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcmV0ID1cbiAgICAgIHN5bWJvbCArXG4gICAgICAoaW5Xb3Jkc1xuICAgICAgICA/IGludGVnZXJSZXMgKyAoZGVjaW1hbFJlcyA9PT0gJ+mbticgPyAn5YWD5pW0JyA6IGDlhYMke2RlY2ltYWxSZXN9YClcbiAgICAgICAgOiBpbnRlZ2VyUmVzICsgKGRlY2ltYWxSZXMgPT09ICcnID8gJycgOiBg54K5JHtkZWNpbWFsUmVzfWApKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iXX0=