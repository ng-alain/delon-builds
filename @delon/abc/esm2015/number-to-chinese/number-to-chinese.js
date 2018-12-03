/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @param {?=} rmb
 * @param {?=} options
 * @return {?}
 */
export function numberToChinese(value, rmb = true, options) {
    options = Object.assign({
        minusSymbol: '负',
        validThrow: false,
    }, options);
    if (typeof value === 'number')
        value = value.toString();
    if (!/^-?\d+(\.\d+)?$/.test(value) && options.validThrow)
        throw new Error(`${value} is invalid number type`);
    /** @type {?} */
    let integer;
    /** @type {?} */
    let decimal;
    [integer, decimal] = value.split('.');
    /** @type {?} */
    let symbol = '';
    if (integer.startsWith('-')) {
        symbol = options.minusSymbol;
        integer = integer.substr(1);
    }
    if (/^-?\d+$/.test(value))
        decimal = null;
    integer = (+integer).toString();
    /** @type {?} */
    const unit = {
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
        decimalRes = rmb ? '整' : '';
    }
    else if (decimal === '0') {
        decimalRes = '零';
    }
    else {
        for (let i = 0; i < decimalCount; i++) {
            if (rmb && i > unit.dec.length - 1)
                break;
            /** @type {?} */
            const n = decimal[i];
            /** @type {?} */
            const cnZero = n === '0' ? '零' : '';
            /** @type {?} */
            const cnNum = unit.num[n];
            /** @type {?} */
            const cnDesc = rmb ? unit.dec[i] : '';
            decimalRes += cnZero + cnNum + cnDesc;
        }
    }
    /** @type {?} */
    const ret = symbol +
        (rmb
            ? integerRes + (decimalRes === '零' ? '元整' : `元${decimalRes}`)
            : integerRes + (decimalRes === '' ? '' : `点${decimalRes}`));
    return ret;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRvLWNoaW5lc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL251bWJlci10by1jaGluZXNlLyIsInNvdXJjZXMiOlsibnVtYmVyLXRvLWNoaW5lc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLE1BQU0sVUFBVSxlQUFlLENBQzdCLEtBQXNCLEVBQ3RCLEdBQUcsR0FBRyxJQUFJLEVBQ1YsT0FBZ0M7SUFFaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3JCO1FBQ0UsV0FBVyxFQUFFLEdBQUc7UUFDaEIsVUFBVSxFQUFFLEtBQUs7S0FDbEIsRUFDRCxPQUFPLENBQ1IsQ0FBQztJQUNGLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtRQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDeEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVTtRQUN0RCxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyx5QkFBeUIsQ0FBQyxDQUFDOztRQUNqRCxPQUF3Qjs7UUFBRSxPQUF3QjtJQUN0RCxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztRQUNsQyxNQUFNLEdBQUcsRUFBRTtJQUNmLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUMzQixNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUM3QixPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM3QjtJQUNELElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7O1VBQzFCLElBQUksR0FBRztRQUNYLEdBQUcsRUFBRSxHQUFHO1lBQ04sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQzFELE1BQU0sRUFBRSxHQUFHO1lBQ1QsQ0FBQyxDQUFDO2dCQUNFLEVBQUU7Z0JBQ0YsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILElBQUk7Z0JBQ0osR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRzthQUNKO1lBQ0gsQ0FBQyxDQUFDO2dCQUNFLEVBQUU7Z0JBQ0YsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILElBQUk7Z0JBQ0osR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRzthQUNKO1FBQ0wsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0tBQzFCO0lBQ0QsSUFBSSxHQUFHO1FBQUUsS0FBSyxHQUFHLENBQUMsQ0FB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QkFDbkIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQyxVQUFVLElBQUksTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7U0FDdkM7S0FDRjs7VUFDSyxHQUFHLEdBQ1AsTUFBTTtRQUNOLENBQUMsR0FBRztZQUNGLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFLENBQUM7WUFDN0QsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLFVBQVUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE51bWJlclRvQ2hpbmVzZU9wdGlvbnMgfSBmcm9tICcuL251bWJlci10by1jaGluZXNlLmludGVyZmFjZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyVG9DaGluZXNlKFxuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLFxuICBybWIgPSB0cnVlLFxuICBvcHRpb25zPzogTnVtYmVyVG9DaGluZXNlT3B0aW9ucyxcbik6IHN0cmluZyB7XG4gIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgIHtcbiAgICAgIG1pbnVzU3ltYm9sOiAn6LSfJyxcbiAgICAgIHZhbGlkVGhyb3c6IGZhbHNlLFxuICAgIH0sXG4gICAgb3B0aW9ucyxcbiAgKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgaWYgKCEvXi0/XFxkKyhcXC5cXGQrKT8kLy50ZXN0KHZhbHVlKSAmJiBvcHRpb25zLnZhbGlkVGhyb3cpXG4gICAgdGhyb3cgbmV3IEVycm9yKGAke3ZhbHVlfSBpcyBpbnZhbGlkIG51bWJlciB0eXBlYCk7XG4gIGxldCBpbnRlZ2VyOiBudW1iZXIgfCBzdHJpbmcsIGRlY2ltYWw6IG51bWJlciB8IHN0cmluZztcbiAgW2ludGVnZXIsIGRlY2ltYWxdID0gdmFsdWUuc3BsaXQoJy4nKTtcbiAgbGV0IHN5bWJvbCA9ICcnO1xuICBpZiAoaW50ZWdlci5zdGFydHNXaXRoKCctJykpIHtcbiAgICBzeW1ib2wgPSBvcHRpb25zLm1pbnVzU3ltYm9sO1xuICAgIGludGVnZXIgPSBpbnRlZ2VyLnN1YnN0cigxKTtcbiAgfVxuICBpZiAoL14tP1xcZCskLy50ZXN0KHZhbHVlKSkgZGVjaW1hbCA9IG51bGw7XG4gIGludGVnZXIgPSAoK2ludGVnZXIpLnRvU3RyaW5nKCk7XG4gIGNvbnN0IHVuaXQgPSB7XG4gICAgbnVtOiBybWJcbiAgICAgID8gWycnLCAn5aO5JywgJ+i0sCcsICflj4EnLCAn6IKGJywgJ+S8jScsICfpmYYnLCAn5p+SJywgJ+aNjCcsICfnjpYnLCAn54K5J11cbiAgICAgIDogWycnLCAn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nLCAn5LiDJywgJ+WFqycsICfkuZ0nLCAn54K5J10sXG4gICAgcmFkaWNlOiBybWJcbiAgICAgID8gW1xuICAgICAgICAgICcnLFxuICAgICAgICAgICfmi74nLFxuICAgICAgICAgICfkvbAnLFxuICAgICAgICAgICfku58nLFxuICAgICAgICAgICfkuIcnLFxuICAgICAgICAgICfmi74nLFxuICAgICAgICAgICfkvbAnLFxuICAgICAgICAgICfku58nLFxuICAgICAgICAgICfkur8nLFxuICAgICAgICAgICfmi74nLFxuICAgICAgICAgICfkvbAnLFxuICAgICAgICAgICfku58nLFxuICAgICAgICAgICfkuIfkur8nLFxuICAgICAgICAgICfmi74nLFxuICAgICAgICAgICfkvbAnLFxuICAgICAgICAgICfku58nLFxuICAgICAgICAgICflhYYnLFxuICAgICAgICAgICfmi74nLFxuICAgICAgICAgICfkvbAnLFxuICAgICAgICAgICfku58nLFxuICAgICAgICBdXG4gICAgICA6IFtcbiAgICAgICAgICAnJyxcbiAgICAgICAgICAn5Y2BJyxcbiAgICAgICAgICAn55m+JyxcbiAgICAgICAgICAn5Y2DJyxcbiAgICAgICAgICAn5LiHJyxcbiAgICAgICAgICAn5Y2BJyxcbiAgICAgICAgICAn55m+JyxcbiAgICAgICAgICAn5Y2DJyxcbiAgICAgICAgICAn5Lq/JyxcbiAgICAgICAgICAn5Y2BJyxcbiAgICAgICAgICAn55m+JyxcbiAgICAgICAgICAn5Y2DJyxcbiAgICAgICAgICAn5LiH5Lq/JyxcbiAgICAgICAgICAn5Y2BJyxcbiAgICAgICAgICAn55m+JyxcbiAgICAgICAgICAn5Y2DJyxcbiAgICAgICAgICAn5YWGJyxcbiAgICAgICAgICAn5Y2BJyxcbiAgICAgICAgICAn55m+JyxcbiAgICAgICAgICAn5Y2DJyxcbiAgICAgICAgXSxcbiAgICBkZWM6IFsn6KeSJywgJ+WIhicsICfljpgnLCAn5q+rJ10sXG4gIH07XG4gIGlmIChybWIpIHZhbHVlID0gKCt2YWx1ZSkudG9GaXhlZCg1KS50b1N0cmluZygpO1xuICBsZXQgaW50ZWdlclJlcyA9ICcnO1xuICBjb25zdCBpbnRlZ2VyQ291bnQgPSBpbnRlZ2VyLmxlbmd0aDtcbiAgaWYgKGludGVnZXIgPT09ICcwJyB8fCBpbnRlZ2VyQ291bnQgPT09IDApIHtcbiAgICBpbnRlZ2VyUmVzID0gJ+mbtic7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGNuRGVzYyA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZWdlckNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IG4gPSAraW50ZWdlcltpXSxcbiAgICAgICAgaiA9IGludGVnZXJDb3VudCAtIGkgLSAxLFxuICAgICAgICBpc1plcm8gPSBpID4gMSAmJiBuICE9PSAwICYmIGludGVnZXJbaSAtIDFdID09PSAnMCcsXG4gICAgICAgIGNuWmVybyA9IGlzWmVybyA/ICfpm7YnIDogJycsXG4gICAgICAgIGlzRW1wcHR5VW5pdCA9XG4gICAgICAgICAgKG4gPT09IDAgJiYgaiAlIDQgIT09IDApIHx8IGludGVnZXIuc3Vic3RyKGkgLSAzLCA0KSA9PT0gJzAwMDAnLFxuICAgICAgICBkZXNjTWFyayA9IGNuRGVzYztcbiAgICAgIGxldCBjbk51bSA9IHVuaXQubnVtW25dO1xuXG4gICAgICBjbkRlc2MgPSBpc0VtcHB0eVVuaXQgPyAnJyA6IHVuaXQucmFkaWNlW2pdO1xuICAgICAgLy8g56ys5LiA5L2N5piv5LiA5Y2BXG4gICAgICBpZiAoaSA9PT0gMCAmJiBjbk51bSA9PT0gJ+S4gCcgJiYgY25EZXNjID09PSAn5Y2BJykgY25OdW0gPSAnJztcbiAgICAgIGNvbnN0IGlzQ2hhbmdlRXIgPVxuICAgICAgICBuID4gMSAmJlxuICAgICAgICBjbk51bSA9PT0gJ+S6jCcgJiYgLy8g5Y676Zmk6aaW5L2NXG4gICAgICAgIFsnJywgJ+WNgScsICfnmb4nXS5pbmRleE9mKGNuRGVzYykgPT09IC0xICYmIC8vIOS4jeivu+S4pFxc5Lik5Y2BXFzkuKTnmb5cbiAgICAgICAgZGVzY01hcmsgIT09ICfljYEnOyAvLyDkuI3or7vljYHkuKRcbiAgICAgIGlmIChpc0NoYW5nZUVyKSBjbk51bSA9ICfkuKQnO1xuICAgICAgaW50ZWdlclJlcyArPSBjblplcm8gKyBjbk51bSArIGNuRGVzYztcbiAgICB9XG4gIH1cblxuICAvLyDlsI/mlbDpg6jliIbmi7zmjqVcbiAgbGV0IGRlY2ltYWxSZXMgPSAnJztcbiAgY29uc3QgZGVjaW1hbENvdW50ID0gZGVjaW1hbCA/IGRlY2ltYWwudG9TdHJpbmcoKS5sZW5ndGggOiAwO1xuICBpZiAoZGVjaW1hbCA9PT0gbnVsbCkge1xuICAgIGRlY2ltYWxSZXMgPSBybWIgPyAn5pW0JyA6ICcnO1xuICB9IGVsc2UgaWYgKGRlY2ltYWwgPT09ICcwJykge1xuICAgIGRlY2ltYWxSZXMgPSAn6Zu2JztcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlY2ltYWxDb3VudDsgaSsrKSB7XG4gICAgICBpZiAocm1iICYmIGkgPiB1bml0LmRlYy5sZW5ndGggLSAxKSBicmVhaztcbiAgICAgIGNvbnN0IG4gPSBkZWNpbWFsW2ldLFxuICAgICAgICBjblplcm8gPSBuID09PSAnMCcgPyAn6Zu2JyA6ICcnLFxuICAgICAgICBjbk51bSA9IHVuaXQubnVtW25dLFxuICAgICAgICBjbkRlc2MgPSBybWIgPyB1bml0LmRlY1tpXSA6ICcnO1xuICAgICAgZGVjaW1hbFJlcyArPSBjblplcm8gKyBjbk51bSArIGNuRGVzYztcbiAgICB9XG4gIH1cbiAgY29uc3QgcmV0ID1cbiAgICBzeW1ib2wgK1xuICAgIChybWJcbiAgICAgID8gaW50ZWdlclJlcyArIChkZWNpbWFsUmVzID09PSAn6Zu2JyA/ICflhYPmlbQnIDogYOWFgyR7ZGVjaW1hbFJlc31gKVxuICAgICAgOiBpbnRlZ2VyUmVzICsgKGRlY2ltYWxSZXMgPT09ICcnID8gJycgOiBg54K5JHtkZWNpbWFsUmVzfWApKTtcbiAgcmV0dXJuIHJldDtcbn1cbiJdfQ==