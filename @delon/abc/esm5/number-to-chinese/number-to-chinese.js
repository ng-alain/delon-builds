/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @param {?} value
 * @param {?=} rmb
 * @param {?=} options
 * @return {?}
 */
export function numberToChinese(value, rmb, options) {
    if (rmb === void 0) { rmb = true; }
    var _a;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRvLWNoaW5lc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL251bWJlci10by1jaGluZXNlLyIsInNvdXJjZXMiOlsibnVtYmVyLXRvLWNoaW5lc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxNQUFNLFVBQVUsZUFBZSxDQUM3QixLQUFzQixFQUN0QixHQUFVLEVBQ1YsT0FBZ0M7SUFEaEMsb0JBQUEsRUFBQSxVQUFVOztJQUdWLE9BQU8sc0JBQ0wsV0FBVyxFQUFFLEdBQUcsRUFDaEIsVUFBVSxFQUFFLEtBQUssSUFDZCxPQUFPLENBQ1gsQ0FBQztJQUNGLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtRQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDeEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVTtRQUN0RCxNQUFNLElBQUksS0FBSyxDQUFJLEtBQUssNEJBQXlCLENBQUMsQ0FBQzs7UUFDakQsT0FBd0I7O1FBQ3hCLE9BQStCO0lBQ25DLHdDQUFxQyxFQUFwQyxlQUFPLEVBQUUsZUFBTyxDQUFxQjs7UUFDbEMsTUFBTSxHQUFHLEVBQUU7SUFDZixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDM0IsTUFBTSxHQUFHLG1CQUFBLE9BQU8sQ0FBQyxXQUFXLEVBQUMsQ0FBQztRQUM5QixPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM3QjtJQUNELElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBQzFCLElBQUksR0FBRztRQUNYLEdBQUcsRUFBRSxHQUFHO1lBQ04sQ0FB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QUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLFVBQVUsSUFBSSxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztTQUN2QztLQUNGOztRQUNLLEdBQUcsR0FDUCxNQUFNO1FBQ04sQ0FBQyxHQUFHO1lBQ0YsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLFVBQVUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBSSxVQUFZLENBQUM7WUFDN0QsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLFVBQVUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBSSxVQUFZLENBQUMsQ0FBQztJQUMvRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOdW1iZXJUb0NoaW5lc2VPcHRpb25zIH0gZnJvbSAnLi9udW1iZXItdG8tY2hpbmVzZS5pbnRlcmZhY2VzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlclRvQ2hpbmVzZShcbiAgdmFsdWU6IG51bWJlciB8IHN0cmluZyxcbiAgcm1iID0gdHJ1ZSxcbiAgb3B0aW9ucz86IE51bWJlclRvQ2hpbmVzZU9wdGlvbnMsXG4pOiBzdHJpbmcge1xuICBvcHRpb25zID0ge1xuICAgIG1pbnVzU3ltYm9sOiAn6LSfJyxcbiAgICB2YWxpZFRocm93OiBmYWxzZSxcbiAgICAuLi5vcHRpb25zLFxuICB9O1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICBpZiAoIS9eLT9cXGQrKFxcLlxcZCspPyQvLnRlc3QodmFsdWUpICYmIG9wdGlvbnMudmFsaWRUaHJvdylcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsdWV9IGlzIGludmFsaWQgbnVtYmVyIHR5cGVgKTtcbiAgbGV0IGludGVnZXI6IG51bWJlciB8IHN0cmluZztcbiAgbGV0IGRlY2ltYWw6IG51bWJlciB8IHN0cmluZyB8IG51bGw7XG4gIFtpbnRlZ2VyLCBkZWNpbWFsXSA9IHZhbHVlLnNwbGl0KCcuJyk7XG4gIGxldCBzeW1ib2wgPSAnJztcbiAgaWYgKGludGVnZXIuc3RhcnRzV2l0aCgnLScpKSB7XG4gICAgc3ltYm9sID0gb3B0aW9ucy5taW51c1N5bWJvbCE7XG4gICAgaW50ZWdlciA9IGludGVnZXIuc3Vic3RyKDEpO1xuICB9XG4gIGlmICgvXi0/XFxkKyQvLnRlc3QodmFsdWUpKSBkZWNpbWFsID0gbnVsbDtcbiAgaW50ZWdlciA9ICgraW50ZWdlcikudG9TdHJpbmcoKTtcbiAgY29uc3QgdW5pdCA9IHtcbiAgICBudW06IHJtYlxuICAgICAgPyBbJycsICflo7knLCAn6LSwJywgJ+WPgScsICfogoYnLCAn5LyNJywgJ+mZhicsICfmn5InLCAn5o2MJywgJ+eOlicsICfngrknXVxuICAgICAgOiBbJycsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrScsICfkuIMnLCAn5YWrJywgJ+S5nScsICfngrknXSxcbiAgICByYWRpY2U6IHJtYlxuICAgICAgPyBbXG4gICAgICAgICAgJycsXG4gICAgICAgICAgJ+aLvicsXG4gICAgICAgICAgJ+S9sCcsXG4gICAgICAgICAgJ+S7nycsXG4gICAgICAgICAgJ+S4hycsXG4gICAgICAgICAgJ+aLvicsXG4gICAgICAgICAgJ+S9sCcsXG4gICAgICAgICAgJ+S7nycsXG4gICAgICAgICAgJ+S6vycsXG4gICAgICAgICAgJ+aLvicsXG4gICAgICAgICAgJ+S9sCcsXG4gICAgICAgICAgJ+S7nycsXG4gICAgICAgICAgJ+S4h+S6vycsXG4gICAgICAgICAgJ+aLvicsXG4gICAgICAgICAgJ+S9sCcsXG4gICAgICAgICAgJ+S7nycsXG4gICAgICAgICAgJ+WFhicsXG4gICAgICAgICAgJ+aLvicsXG4gICAgICAgICAgJ+S9sCcsXG4gICAgICAgICAgJ+S7nycsXG4gICAgICAgIF1cbiAgICAgIDogW1xuICAgICAgICAgICcnLFxuICAgICAgICAgICfljYEnLFxuICAgICAgICAgICfnmb4nLFxuICAgICAgICAgICfljYMnLFxuICAgICAgICAgICfkuIcnLFxuICAgICAgICAgICfljYEnLFxuICAgICAgICAgICfnmb4nLFxuICAgICAgICAgICfljYMnLFxuICAgICAgICAgICfkur8nLFxuICAgICAgICAgICfljYEnLFxuICAgICAgICAgICfnmb4nLFxuICAgICAgICAgICfljYMnLFxuICAgICAgICAgICfkuIfkur8nLFxuICAgICAgICAgICfljYEnLFxuICAgICAgICAgICfnmb4nLFxuICAgICAgICAgICfljYMnLFxuICAgICAgICAgICflhYYnLFxuICAgICAgICAgICfljYEnLFxuICAgICAgICAgICfnmb4nLFxuICAgICAgICAgICfljYMnLFxuICAgICAgICBdLFxuICAgIGRlYzogWyfop5InLCAn5YiGJywgJ+WOmCcsICfmr6snXSxcbiAgfTtcbiAgaWYgKHJtYikgdmFsdWUgPSAoK3ZhbHVlKS50b0ZpeGVkKDUpLnRvU3RyaW5nKCk7XG4gIGxldCBpbnRlZ2VyUmVzID0gJyc7XG4gIGNvbnN0IGludGVnZXJDb3VudCA9IGludGVnZXIubGVuZ3RoO1xuICBpZiAoaW50ZWdlciA9PT0gJzAnIHx8IGludGVnZXJDb3VudCA9PT0gMCkge1xuICAgIGludGVnZXJSZXMgPSAn6Zu2JztcbiAgfSBlbHNlIHtcbiAgICBsZXQgY25EZXNjID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlZ2VyQ291bnQ7IGkrKykge1xuICAgICAgY29uc3QgbiA9ICtpbnRlZ2VyW2ldO1xuICAgICAgY29uc3QgaiA9IGludGVnZXJDb3VudCAtIGkgLSAxO1xuICAgICAgY29uc3QgaXNaZXJvID0gaSA+IDEgJiYgbiAhPT0gMCAmJiBpbnRlZ2VyW2kgLSAxXSA9PT0gJzAnO1xuICAgICAgY29uc3QgY25aZXJvID0gaXNaZXJvID8gJ+mbticgOiAnJztcbiAgICAgIGNvbnN0IGlzRW1wcHR5VW5pdCA9IChuID09PSAwICYmIGogJSA0ICE9PSAwKSB8fCBpbnRlZ2VyLnN1YnN0cihpIC0gMywgNCkgPT09ICcwMDAwJztcbiAgICAgIGNvbnN0IGRlc2NNYXJrID0gY25EZXNjO1xuICAgICAgbGV0IGNuTnVtID0gdW5pdC5udW1bbl07XG5cbiAgICAgIGNuRGVzYyA9IGlzRW1wcHR5VW5pdCA/ICcnIDogdW5pdC5yYWRpY2Vbal07XG4gICAgICAvLyDnrKzkuIDkvY3mmK/kuIDljYFcbiAgICAgIGlmIChpID09PSAwICYmIGNuTnVtID09PSAn5LiAJyAmJiBjbkRlc2MgPT09ICfljYEnKSBjbk51bSA9ICcnO1xuICAgICAgY29uc3QgaXNDaGFuZ2VFciA9XG4gICAgICAgIG4gPiAxICYmXG4gICAgICAgIGNuTnVtID09PSAn5LqMJyAmJiAvLyDljrvpmaTpppbkvY1cbiAgICAgICAgWycnLCAn5Y2BJywgJ+eZviddLmluZGV4T2YoY25EZXNjKSA9PT0gLTEgJiYgLy8g5LiN6K+75LikXFzkuKTljYFcXOS4pOeZvlxuICAgICAgICBkZXNjTWFyayAhPT0gJ+WNgSc7IC8vIOS4jeivu+WNgeS4pFxuICAgICAgaWYgKGlzQ2hhbmdlRXIpIGNuTnVtID0gJ+S4pCc7XG4gICAgICBpbnRlZ2VyUmVzICs9IGNuWmVybyArIGNuTnVtICsgY25EZXNjO1xuICAgIH1cbiAgfVxuXG4gIC8vIOWwj+aVsOmDqOWIhuaLvOaOpVxuICBsZXQgZGVjaW1hbFJlcyA9ICcnO1xuICBjb25zdCBkZWNpbWFsQ291bnQgPSBkZWNpbWFsID8gZGVjaW1hbC50b1N0cmluZygpLmxlbmd0aCA6IDA7XG4gIGlmIChkZWNpbWFsID09PSBudWxsKSB7XG4gICAgZGVjaW1hbFJlcyA9IHJtYiA/ICfmlbQnIDogJyc7XG4gIH0gZWxzZSBpZiAoZGVjaW1hbCA9PT0gJzAnKSB7XG4gICAgZGVjaW1hbFJlcyA9ICfpm7YnO1xuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVjaW1hbENvdW50OyBpKyspIHtcbiAgICAgIGlmIChybWIgJiYgaSA+IHVuaXQuZGVjLmxlbmd0aCAtIDEpIGJyZWFrO1xuICAgICAgY29uc3QgbiA9IGRlY2ltYWxbaV07XG4gICAgICBjb25zdCBjblplcm8gPSBuID09PSAnMCcgPyAn6Zu2JyA6ICcnO1xuICAgICAgY29uc3QgY25OdW0gPSB1bml0Lm51bVtuXTtcbiAgICAgIGNvbnN0IGNuRGVzYyA9IHJtYiA/IHVuaXQuZGVjW2ldIDogJyc7XG4gICAgICBkZWNpbWFsUmVzICs9IGNuWmVybyArIGNuTnVtICsgY25EZXNjO1xuICAgIH1cbiAgfVxuICBjb25zdCByZXQgPVxuICAgIHN5bWJvbCArXG4gICAgKHJtYlxuICAgICAgPyBpbnRlZ2VyUmVzICsgKGRlY2ltYWxSZXMgPT09ICfpm7YnID8gJ+WFg+aVtCcgOiBg5YWDJHtkZWNpbWFsUmVzfWApXG4gICAgICA6IGludGVnZXJSZXMgKyAoZGVjaW1hbFJlcyA9PT0gJycgPyAnJyA6IGDngrkke2RlY2ltYWxSZXN9YCkpO1xuICByZXR1cm4gcmV0O1xufVxuIl19