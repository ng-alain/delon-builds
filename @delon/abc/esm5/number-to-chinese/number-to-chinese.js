/**
 * @fileoverview added by tsickle
 * Generated from: number-to-chinese.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __read } from "tslib";
/**
 * @param {?} value
 * @param {?=} rmb
 * @param {?=} options
 * @return {?}
 */
export function numberToChinese(value, rmb, options) {
    var _a;
    if (rmb === void 0) { rmb = true; }
    options = __assign({ minusSymbol: '负', validThrow: false }, options);
    if (typeof value === 'number')
        value = value.toString();
    if (!/^-?\d+(\.\d+)?$/.test(value) && options.validThrow)
        throw new Error(value + " is invalid number type");
    /** @type {?} */
    var integer;
    /** @type {?} */
    var decimal;
    _a = __read(value.split('.'), 2), integer = _a[0], decimal = _a[1];
    /** @type {?} */
    var symbol = '';
    if (integer.startsWith('-')) {
        symbol = (/** @type {?} */ (options.minusSymbol));
        integer = integer.substr(1);
    }
    if (/^-?\d+$/.test(value))
        decimal = null;
    integer = (+integer).toString();
    /** @type {?} */
    var unit = {
        num: rmb
            ? ['', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '点']
            : ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '点'],
        radice: rmb
            ? ['', '拾', '佰', '仟', '万', '拾', '佰', '仟', '亿', '拾', '佰', '仟', '万亿', '拾', '佰', '仟', '兆', '拾', '佰', '仟']
            : ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万亿', '十', '百', '千', '兆', '十', '百', '千'],
        dec: ['角', '分', '厘', '毫'],
    };
    if (rmb)
        value = (+value).toFixed(5).toString();
    /** @type {?} */
    var integerRes = '';
    /** @type {?} */
    var integerCount = integer.length;
    if (integer === '0' || integerCount === 0) {
        integerRes = '零';
    }
    else {
        /** @type {?} */
        var cnDesc = '';
        for (var i = 0; i < integerCount; i++) {
            /** @type {?} */
            var n = +integer[i];
            /** @type {?} */
            var j = integerCount - i - 1;
            /** @type {?} */
            var isZero = i > 1 && n !== 0 && integer[i - 1] === '0';
            /** @type {?} */
            var cnZero = isZero ? '零' : '';
            /** @type {?} */
            var isEmpptyUnit = (n === 0 && j % 4 !== 0) || integer.substr(i - 3, 4) === '0000';
            /** @type {?} */
            var descMark = cnDesc;
            /** @type {?} */
            var cnNum = unit.num[n];
            cnDesc = isEmpptyUnit ? '' : unit.radice[j];
            // 第一位是一十
            if (i === 0 && cnNum === '一' && cnDesc === '十')
                cnNum = '';
            /** @type {?} */
            var isChangeEr = n > 1 &&
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
    var decimalRes = '';
    /** @type {?} */
    var decimalCount = decimal ? decimal.toString().length : 0;
    if (decimal === null) {
        decimalRes = rmb ? '整' : '';
    }
    else if (decimal === '0') {
        decimalRes = '零';
    }
    else {
        for (var i = 0; i < decimalCount; i++) {
            if (rmb && i > unit.dec.length - 1)
                break;
            /** @type {?} */
            var n = decimal[i];
            /** @type {?} */
            var cnZero = n === '0' ? '零' : '';
            /** @type {?} */
            var cnNum = ((/** @type {?} */ (unit.num)))[n];
            /** @type {?} */
            var cnDesc = rmb ? unit.dec[i] : '';
            decimalRes += cnZero + cnNum + cnDesc;
        }
    }
    /** @type {?} */
    var ret = symbol +
        (rmb ? integerRes + (decimalRes === '零' ? '元整' : "\u5143" + decimalRes) : integerRes + (decimalRes === '' ? '' : "\u70B9" + decimalRes));
    return ret;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRvLWNoaW5lc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL251bWJlci10by1jaGluZXNlLyIsInNvdXJjZXMiOlsibnVtYmVyLXRvLWNoaW5lc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBR0EsTUFBTSxVQUFVLGVBQWUsQ0FBQyxLQUFzQixFQUFFLEdBQVUsRUFBRSxPQUFnQzs7SUFBNUMsb0JBQUEsRUFBQSxVQUFVO0lBQ2hFLE9BQU8sY0FDTCxXQUFXLEVBQUUsR0FBRyxFQUNoQixVQUFVLEVBQUUsS0FBSyxJQUNkLE9BQU8sQ0FDWCxDQUFDO0lBQ0YsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRO1FBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFVO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBSSxLQUFLLDRCQUF5QixDQUFDLENBQUM7O1FBQ3pHLE9BQXdCOztRQUN4QixPQUErQjtJQUNuQyxnQ0FBcUMsRUFBcEMsZUFBTyxFQUFFLGVBQU8sQ0FBcUI7O1FBQ2xDLE1BQU0sR0FBRyxFQUFFO0lBQ2YsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQzNCLE1BQU0sR0FBRyxtQkFBQSxPQUFPLENBQUMsV0FBVyxFQUFDLENBQUM7UUFDOUIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDN0I7SUFDRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMxQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUMxQixJQUFJLEdBQUc7UUFDWCxHQUFHLEVBQUUsR0FBRztZQUNOLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDeEQsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUMxRCxNQUFNLEVBQUUsR0FBRztZQUNULENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDdEcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUN4RyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7S0FDMUI7SUFDRCxJQUFJLEdBQUc7UUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7UUFDNUMsVUFBVSxHQUFHLEVBQUU7O1FB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QUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDckMsVUFBVSxJQUFJLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO1NBQ3ZDO0tBQ0Y7O1FBQ0ssR0FBRyxHQUNQLE1BQU07UUFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFJLFVBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQUksVUFBWSxDQUFDLENBQUM7SUFDaEksT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzL2FueSc7XG5pbXBvcnQgeyBOdW1iZXJUb0NoaW5lc2VPcHRpb25zIH0gZnJvbSAnLi9udW1iZXItdG8tY2hpbmVzZS5pbnRlcmZhY2VzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlclRvQ2hpbmVzZSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBybWIgPSB0cnVlLCBvcHRpb25zPzogTnVtYmVyVG9DaGluZXNlT3B0aW9ucyk6IHN0cmluZyB7XG4gIG9wdGlvbnMgPSB7XG4gICAgbWludXNTeW1ib2w6ICfotJ8nLFxuICAgIHZhbGlkVGhyb3c6IGZhbHNlLFxuICAgIC4uLm9wdGlvbnMsXG4gIH07XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gIGlmICghL14tP1xcZCsoXFwuXFxkKyk/JC8udGVzdCh2YWx1ZSkgJiYgb3B0aW9ucy52YWxpZFRocm93KSB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsdWV9IGlzIGludmFsaWQgbnVtYmVyIHR5cGVgKTtcbiAgbGV0IGludGVnZXI6IG51bWJlciB8IHN0cmluZztcbiAgbGV0IGRlY2ltYWw6IG51bWJlciB8IHN0cmluZyB8IG51bGw7XG4gIFtpbnRlZ2VyLCBkZWNpbWFsXSA9IHZhbHVlLnNwbGl0KCcuJyk7XG4gIGxldCBzeW1ib2wgPSAnJztcbiAgaWYgKGludGVnZXIuc3RhcnRzV2l0aCgnLScpKSB7XG4gICAgc3ltYm9sID0gb3B0aW9ucy5taW51c1N5bWJvbCE7XG4gICAgaW50ZWdlciA9IGludGVnZXIuc3Vic3RyKDEpO1xuICB9XG4gIGlmICgvXi0/XFxkKyQvLnRlc3QodmFsdWUpKSBkZWNpbWFsID0gbnVsbDtcbiAgaW50ZWdlciA9ICgraW50ZWdlcikudG9TdHJpbmcoKTtcbiAgY29uc3QgdW5pdCA9IHtcbiAgICBudW06IHJtYlxuICAgICAgPyBbJycsICflo7knLCAn6LSwJywgJ+WPgScsICfogoYnLCAn5LyNJywgJ+mZhicsICfmn5InLCAn5o2MJywgJ+eOlicsICfngrknXVxuICAgICAgOiBbJycsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrScsICfkuIMnLCAn5YWrJywgJ+S5nScsICfngrknXSxcbiAgICByYWRpY2U6IHJtYlxuICAgICAgPyBbJycsICfmi74nLCAn5L2wJywgJ+S7nycsICfkuIcnLCAn5ou+JywgJ+S9sCcsICfku58nLCAn5Lq/JywgJ+aLvicsICfkvbAnLCAn5LufJywgJ+S4h+S6vycsICfmi74nLCAn5L2wJywgJ+S7nycsICflhYYnLCAn5ou+JywgJ+S9sCcsICfku58nXVxuICAgICAgOiBbJycsICfljYEnLCAn55m+JywgJ+WNgycsICfkuIcnLCAn5Y2BJywgJ+eZvicsICfljYMnLCAn5Lq/JywgJ+WNgScsICfnmb4nLCAn5Y2DJywgJ+S4h+S6vycsICfljYEnLCAn55m+JywgJ+WNgycsICflhYYnLCAn5Y2BJywgJ+eZvicsICfljYMnXSxcbiAgICBkZWM6IFsn6KeSJywgJ+WIhicsICfljpgnLCAn5q+rJ10sXG4gIH07XG4gIGlmIChybWIpIHZhbHVlID0gKCt2YWx1ZSkudG9GaXhlZCg1KS50b1N0cmluZygpO1xuICBsZXQgaW50ZWdlclJlcyA9ICcnO1xuICBjb25zdCBpbnRlZ2VyQ291bnQgPSBpbnRlZ2VyLmxlbmd0aDtcbiAgaWYgKGludGVnZXIgPT09ICcwJyB8fCBpbnRlZ2VyQ291bnQgPT09IDApIHtcbiAgICBpbnRlZ2VyUmVzID0gJ+mbtic7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGNuRGVzYyA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZWdlckNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IG4gPSAraW50ZWdlcltpXTtcbiAgICAgIGNvbnN0IGogPSBpbnRlZ2VyQ291bnQgLSBpIC0gMTtcbiAgICAgIGNvbnN0IGlzWmVybyA9IGkgPiAxICYmIG4gIT09IDAgJiYgaW50ZWdlcltpIC0gMV0gPT09ICcwJztcbiAgICAgIGNvbnN0IGNuWmVybyA9IGlzWmVybyA/ICfpm7YnIDogJyc7XG4gICAgICBjb25zdCBpc0VtcHB0eVVuaXQgPSAobiA9PT0gMCAmJiBqICUgNCAhPT0gMCkgfHwgaW50ZWdlci5zdWJzdHIoaSAtIDMsIDQpID09PSAnMDAwMCc7XG4gICAgICBjb25zdCBkZXNjTWFyayA9IGNuRGVzYztcbiAgICAgIGxldCBjbk51bSA9IHVuaXQubnVtW25dO1xuXG4gICAgICBjbkRlc2MgPSBpc0VtcHB0eVVuaXQgPyAnJyA6IHVuaXQucmFkaWNlW2pdO1xuICAgICAgLy8g56ys5LiA5L2N5piv5LiA5Y2BXG4gICAgICBpZiAoaSA9PT0gMCAmJiBjbk51bSA9PT0gJ+S4gCcgJiYgY25EZXNjID09PSAn5Y2BJykgY25OdW0gPSAnJztcbiAgICAgIGNvbnN0IGlzQ2hhbmdlRXIgPVxuICAgICAgICBuID4gMSAmJlxuICAgICAgICBjbk51bSA9PT0gJ+S6jCcgJiYgLy8g5Y676Zmk6aaW5L2NXG4gICAgICAgIFsnJywgJ+WNgScsICfnmb4nXS5pbmRleE9mKGNuRGVzYykgPT09IC0xICYmIC8vIOS4jeivu+S4pFxc5Lik5Y2BXFzkuKTnmb5cbiAgICAgICAgZGVzY01hcmsgIT09ICfljYEnOyAvLyDkuI3or7vljYHkuKRcbiAgICAgIGlmIChpc0NoYW5nZUVyKSBjbk51bSA9ICfkuKQnO1xuICAgICAgaW50ZWdlclJlcyArPSBjblplcm8gKyBjbk51bSArIGNuRGVzYztcbiAgICB9XG4gIH1cblxuICAvLyDlsI/mlbDpg6jliIbmi7zmjqVcbiAgbGV0IGRlY2ltYWxSZXMgPSAnJztcbiAgY29uc3QgZGVjaW1hbENvdW50ID0gZGVjaW1hbCA/IGRlY2ltYWwudG9TdHJpbmcoKS5sZW5ndGggOiAwO1xuICBpZiAoZGVjaW1hbCA9PT0gbnVsbCkge1xuICAgIGRlY2ltYWxSZXMgPSBybWIgPyAn5pW0JyA6ICcnO1xuICB9IGVsc2UgaWYgKGRlY2ltYWwgPT09ICcwJykge1xuICAgIGRlY2ltYWxSZXMgPSAn6Zu2JztcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlY2ltYWxDb3VudDsgaSsrKSB7XG4gICAgICBpZiAocm1iICYmIGkgPiB1bml0LmRlYy5sZW5ndGggLSAxKSBicmVhaztcbiAgICAgIGNvbnN0IG4gPSBkZWNpbWFsW2ldO1xuICAgICAgY29uc3QgY25aZXJvID0gbiA9PT0gJzAnID8gJ+mbticgOiAnJztcbiAgICAgIGNvbnN0IGNuTnVtID0gKHVuaXQubnVtIGFzIE56U2FmZUFueSlbbl07XG4gICAgICBjb25zdCBjbkRlc2MgPSBybWIgPyB1bml0LmRlY1tpXSA6ICcnO1xuICAgICAgZGVjaW1hbFJlcyArPSBjblplcm8gKyBjbk51bSArIGNuRGVzYztcbiAgICB9XG4gIH1cbiAgY29uc3QgcmV0ID1cbiAgICBzeW1ib2wgK1xuICAgIChybWIgPyBpbnRlZ2VyUmVzICsgKGRlY2ltYWxSZXMgPT09ICfpm7YnID8gJ+WFg+aVtCcgOiBg5YWDJHtkZWNpbWFsUmVzfWApIDogaW50ZWdlclJlcyArIChkZWNpbWFsUmVzID09PSAnJyA/ICcnIDogYOeCuSR7ZGVjaW1hbFJlc31gKSk7XG4gIHJldHVybiByZXQ7XG59XG4iXX0=