/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @param {?} value
 * @param {?=} rmb
 * @param {?=} options
 * @return {?}
 */
export function numberToChinese(value, rmb, options) {
    var _a;
    if (rmb === void 0) { rmb = true; }
    options = tslib_1.__assign({ minusSymbol: '负', validThrow: false }, options);
    if (typeof value === 'number')
        value = value.toString();
    if (!/^-?\d+(\.\d+)?$/.test(value) && options.validThrow)
        throw new Error(value + " is invalid number type");
    /** @type {?} */
    var integer;
    /** @type {?} */
    var decimal;
    _a = tslib_1.__read(value.split('.'), 2), integer = _a[0], decimal = _a[1];
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
                '仟',
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
                '千',
            ],
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
            var cnNum = unit.num[n];
            /** @type {?} */
            var cnDesc = rmb ? unit.dec[i] : '';
            decimalRes += cnZero + cnNum + cnDesc;
        }
    }
    /** @type {?} */
    var ret = symbol +
        (rmb
            ? integerRes + (decimalRes === '零' ? '元整' : "\u5143" + decimalRes)
            : integerRes + (decimalRes === '' ? '' : "\u70B9" + decimalRes));
    return ret;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRvLWNoaW5lc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL251bWJlci10by1jaGluZXNlLyIsInNvdXJjZXMiOlsibnVtYmVyLXRvLWNoaW5lc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxNQUFNLFVBQVUsZUFBZSxDQUFDLEtBQXNCLEVBQUUsR0FBVSxFQUFFLE9BQWdDOztJQUE1QyxvQkFBQSxFQUFBLFVBQVU7SUFDaEUsT0FBTyxzQkFDTCxXQUFXLEVBQUUsR0FBRyxFQUNoQixVQUFVLEVBQUUsS0FBSyxJQUNkLE9BQU8sQ0FDWCxDQUFDO0lBQ0YsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRO1FBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFVO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBSSxLQUFLLDRCQUF5QixDQUFDLENBQUM7O1FBQ3pHLE9BQXdCOztRQUN4QixPQUErQjtJQUNuQyx3Q0FBcUMsRUFBcEMsZUFBTyxFQUFFLGVBQU8sQ0FBcUI7O1FBQ2xDLE1BQU0sR0FBRyxFQUFFO0lBQ2YsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQzNCLE1BQU0sR0FBRyxtQkFBQSxPQUFPLENBQUMsV0FBVyxFQUFDLENBQUM7UUFDOUIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDN0I7SUFDRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMxQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUMxQixJQUFJLEdBQUc7UUFDWCxHQUFHLEVBQUUsR0FBRztZQUNOLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDeEQsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUMxRCxNQUFNLEVBQUUsR0FBRztZQUNULENBQUMsQ0FBQztnQkFDRSxFQUFFO2dCQUNGLEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxJQUFJO2dCQUNKLEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7YUFDSjtZQUNILENBQUMsQ0FBQztnQkFDRSxFQUFFO2dCQUNGLEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxJQUFJO2dCQUNKLEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7YUFDSjtRQUNMLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztLQUMxQjtJQUNELElBQUksR0FBRztRQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFB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LEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyQyxVQUFVLElBQUksTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7U0FDdkM7S0FDRjs7UUFDSyxHQUFHLEdBQ1AsTUFBTTtRQUNOLENBQUMsR0FBRztZQUNGLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQUksVUFBWSxDQUFDO1lBQzdELENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQUksVUFBWSxDQUFDLENBQUM7SUFDL0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTnVtYmVyVG9DaGluZXNlT3B0aW9ucyB9IGZyb20gJy4vbnVtYmVyLXRvLWNoaW5lc2UuaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJUb0NoaW5lc2UodmFsdWU6IG51bWJlciB8IHN0cmluZywgcm1iID0gdHJ1ZSwgb3B0aW9ucz86IE51bWJlclRvQ2hpbmVzZU9wdGlvbnMpOiBzdHJpbmcge1xuICBvcHRpb25zID0ge1xuICAgIG1pbnVzU3ltYm9sOiAn6LSfJyxcbiAgICB2YWxpZFRocm93OiBmYWxzZSxcbiAgICAuLi5vcHRpb25zLFxuICB9O1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICBpZiAoIS9eLT9cXGQrKFxcLlxcZCspPyQvLnRlc3QodmFsdWUpICYmIG9wdGlvbnMudmFsaWRUaHJvdykgdGhyb3cgbmV3IEVycm9yKGAke3ZhbHVlfSBpcyBpbnZhbGlkIG51bWJlciB0eXBlYCk7XG4gIGxldCBpbnRlZ2VyOiBudW1iZXIgfCBzdHJpbmc7XG4gIGxldCBkZWNpbWFsOiBudW1iZXIgfCBzdHJpbmcgfCBudWxsO1xuICBbaW50ZWdlciwgZGVjaW1hbF0gPSB2YWx1ZS5zcGxpdCgnLicpO1xuICBsZXQgc3ltYm9sID0gJyc7XG4gIGlmIChpbnRlZ2VyLnN0YXJ0c1dpdGgoJy0nKSkge1xuICAgIHN5bWJvbCA9IG9wdGlvbnMubWludXNTeW1ib2whO1xuICAgIGludGVnZXIgPSBpbnRlZ2VyLnN1YnN0cigxKTtcbiAgfVxuICBpZiAoL14tP1xcZCskLy50ZXN0KHZhbHVlKSkgZGVjaW1hbCA9IG51bGw7XG4gIGludGVnZXIgPSAoK2ludGVnZXIpLnRvU3RyaW5nKCk7XG4gIGNvbnN0IHVuaXQgPSB7XG4gICAgbnVtOiBybWJcbiAgICAgID8gWycnLCAn5aO5JywgJ+i0sCcsICflj4EnLCAn6IKGJywgJ+S8jScsICfpmYYnLCAn5p+SJywgJ+aNjCcsICfnjpYnLCAn54K5J11cbiAgICAgIDogWycnLCAn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nLCAn5LiDJywgJ+WFqycsICfkuZ0nLCAn54K5J10sXG4gICAgcmFkaWNlOiBybWJcbiAgICAgID8gW1xuICAgICAgICAgICcnLFxuICAgICAgICAgICfmi74nLFxuICAgICAgICAgICfkvbAnLFxuICAgICAgICAgICfku58nLFxuICAgICAgICAgICfkuIcnLFxuICAgICAgICAgICfmi74nLFxuICAgICAgICAgICfkvbAnLFxuICAgICAgICAgICfku58nLFxuICAgICAgICAgICfkur8nLFxuICAgICAgICAgICfmi74nLFxuICAgICAgICAgICfkvbAnLFxuICAgICAgICAgICfku58nLFxuICAgICAgICAgICfkuIfkur8nLFxuICAgICAgICAgICfmi74nLFxuICAgICAgICAgICfkvbAnLFxuICAgICAgICAgICfku58nLFxuICAgICAgICAgICflhYYnLFxuICAgICAgICAgICfmi74nLFxuICAgICAgICAgICfkvbAnLFxuICAgICAgICAgICfku58nLFxuICAgICAgICBdXG4gICAgICA6IFtcbiAgICAgICAgICAnJyxcbiAgICAgICAgICAn5Y2BJyxcbiAgICAgICAgICAn55m+JyxcbiAgICAgICAgICAn5Y2DJyxcbiAgICAgICAgICAn5LiHJyxcbiAgICAgICAgICAn5Y2BJyxcbiAgICAgICAgICAn55m+JyxcbiAgICAgICAgICAn5Y2DJyxcbiAgICAgICAgICAn5Lq/JyxcbiAgICAgICAgICAn5Y2BJyxcbiAgICAgICAgICAn55m+JyxcbiAgICAgICAgICAn5Y2DJyxcbiAgICAgICAgICAn5LiH5Lq/JyxcbiAgICAgICAgICAn5Y2BJyxcbiAgICAgICAgICAn55m+JyxcbiAgICAgICAgICAn5Y2DJyxcbiAgICAgICAgICAn5YWGJyxcbiAgICAgICAgICAn5Y2BJyxcbiAgICAgICAgICAn55m+JyxcbiAgICAgICAgICAn5Y2DJyxcbiAgICAgICAgXSxcbiAgICBkZWM6IFsn6KeSJywgJ+WIhicsICfljpgnLCAn5q+rJ10sXG4gIH07XG4gIGlmIChybWIpIHZhbHVlID0gKCt2YWx1ZSkudG9GaXhlZCg1KS50b1N0cmluZygpO1xuICBsZXQgaW50ZWdlclJlcyA9ICcnO1xuICBjb25zdCBpbnRlZ2VyQ291bnQgPSBpbnRlZ2VyLmxlbmd0aDtcbiAgaWYgKGludGVnZXIgPT09ICcwJyB8fCBpbnRlZ2VyQ291bnQgPT09IDApIHtcbiAgICBpbnRlZ2VyUmVzID0gJ+mbtic7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGNuRGVzYyA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZWdlckNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IG4gPSAraW50ZWdlcltpXTtcbiAgICAgIGNvbnN0IGogPSBpbnRlZ2VyQ291bnQgLSBpIC0gMTtcbiAgICAgIGNvbnN0IGlzWmVybyA9IGkgPiAxICYmIG4gIT09IDAgJiYgaW50ZWdlcltpIC0gMV0gPT09ICcwJztcbiAgICAgIGNvbnN0IGNuWmVybyA9IGlzWmVybyA/ICfpm7YnIDogJyc7XG4gICAgICBjb25zdCBpc0VtcHB0eVVuaXQgPSAobiA9PT0gMCAmJiBqICUgNCAhPT0gMCkgfHwgaW50ZWdlci5zdWJzdHIoaSAtIDMsIDQpID09PSAnMDAwMCc7XG4gICAgICBjb25zdCBkZXNjTWFyayA9IGNuRGVzYztcbiAgICAgIGxldCBjbk51bSA9IHVuaXQubnVtW25dO1xuXG4gICAgICBjbkRlc2MgPSBpc0VtcHB0eVVuaXQgPyAnJyA6IHVuaXQucmFkaWNlW2pdO1xuICAgICAgLy8g56ys5LiA5L2N5piv5LiA5Y2BXG4gICAgICBpZiAoaSA9PT0gMCAmJiBjbk51bSA9PT0gJ+S4gCcgJiYgY25EZXNjID09PSAn5Y2BJykgY25OdW0gPSAnJztcbiAgICAgIGNvbnN0IGlzQ2hhbmdlRXIgPVxuICAgICAgICBuID4gMSAmJlxuICAgICAgICBjbk51bSA9PT0gJ+S6jCcgJiYgLy8g5Y676Zmk6aaW5L2NXG4gICAgICAgIFsnJywgJ+WNgScsICfnmb4nXS5pbmRleE9mKGNuRGVzYykgPT09IC0xICYmIC8vIOS4jeivu+S4pFxc5Lik5Y2BXFzkuKTnmb5cbiAgICAgICAgZGVzY01hcmsgIT09ICfljYEnOyAvLyDkuI3or7vljYHkuKRcbiAgICAgIGlmIChpc0NoYW5nZUVyKSBjbk51bSA9ICfkuKQnO1xuICAgICAgaW50ZWdlclJlcyArPSBjblplcm8gKyBjbk51bSArIGNuRGVzYztcbiAgICB9XG4gIH1cblxuICAvLyDlsI/mlbDpg6jliIbmi7zmjqVcbiAgbGV0IGRlY2ltYWxSZXMgPSAnJztcbiAgY29uc3QgZGVjaW1hbENvdW50ID0gZGVjaW1hbCA/IGRlY2ltYWwudG9TdHJpbmcoKS5sZW5ndGggOiAwO1xuICBpZiAoZGVjaW1hbCA9PT0gbnVsbCkge1xuICAgIGRlY2ltYWxSZXMgPSBybWIgPyAn5pW0JyA6ICcnO1xuICB9IGVsc2UgaWYgKGRlY2ltYWwgPT09ICcwJykge1xuICAgIGRlY2ltYWxSZXMgPSAn6Zu2JztcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlY2ltYWxDb3VudDsgaSsrKSB7XG4gICAgICBpZiAocm1iICYmIGkgPiB1bml0LmRlYy5sZW5ndGggLSAxKSBicmVhaztcbiAgICAgIGNvbnN0IG4gPSBkZWNpbWFsW2ldO1xuICAgICAgY29uc3QgY25aZXJvID0gbiA9PT0gJzAnID8gJ+mbticgOiAnJztcbiAgICAgIGNvbnN0IGNuTnVtID0gdW5pdC5udW1bbl07XG4gICAgICBjb25zdCBjbkRlc2MgPSBybWIgPyB1bml0LmRlY1tpXSA6ICcnO1xuICAgICAgZGVjaW1hbFJlcyArPSBjblplcm8gKyBjbk51bSArIGNuRGVzYztcbiAgICB9XG4gIH1cbiAgY29uc3QgcmV0ID1cbiAgICBzeW1ib2wgK1xuICAgIChybWJcbiAgICAgID8gaW50ZWdlclJlcyArIChkZWNpbWFsUmVzID09PSAn6Zu2JyA/ICflhYPmlbQnIDogYOWFgyR7ZGVjaW1hbFJlc31gKVxuICAgICAgOiBpbnRlZ2VyUmVzICsgKGRlY2ltYWxSZXMgPT09ICcnID8gJycgOiBg54K5JHtkZWNpbWFsUmVzfWApKTtcbiAgcmV0dXJuIHJldDtcbn1cbiJdfQ==