/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    options = Object.assign({
        minusSymbol: '负',
        validThrow: false,
    }, options);
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
        symbol = options.minusSymbol;
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
                // 去除首位
                ['', '十', '百'].indexOf(cnDesc) === -1 && // 不读两\两十\两百
                // 不读两\两十\两百
                descMark !== '十'; // 不读十两
            if (isChangeEr)
                cnNum = '两';
            integerRes += cnZero + cnNum + cnDesc;
        }
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRvLWNoaW5lc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL251bWJlci10by1jaGluZXNlLyIsInNvdXJjZXMiOlsibnVtYmVyLXRvLWNoaW5lc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxNQUFNLDBCQUNKLEtBQXNCLEVBQ3RCLEdBQVUsRUFDVixPQUFnQztJQURoQyxvQkFBQSxFQUFBLFVBQVU7O0lBR1YsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3JCO1FBQ0UsV0FBVyxFQUFFLEdBQUc7UUFDaEIsVUFBVSxFQUFFLEtBQUs7S0FDbEIsRUFDRCxPQUFPLENBQ1IsQ0FBQztJQUNGLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtRQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDeEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVTtRQUN0RCxNQUFNLElBQUksS0FBSyxDQUFJLEtBQUssNEJBQXlCLENBQUMsQ0FBQzs7SUFDckQsSUFBSSxPQUFPLENBQTRDOztJQUF2RCxJQUE4QixPQUFPLENBQWtCO0lBQ3ZELHdDQUFxQyxFQUFwQyxlQUFPLEVBQUUsZUFBTyxDQUFxQjs7SUFDdEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUMzQixNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUM3QixPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM3QjtJQUNELElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7O0lB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LENBQUMsQ0FBQyxDQUdjOztZQUhsQyxJQUNFLE1BQU0sR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FFRzs7WUFIbEMsSUFFRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDYTs7WUFIbEMsSUFHRSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbEMsVUFBVSxJQUFJLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO1NBQ3ZDO0tBQ0Y7O0lBQ0QsSUFBTSxHQUFHLEdBQ1AsTUFBTTtRQUNOLENBQUMsR0FBRztZQUNGLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQUksVUFBWSxDQUFDO1lBQzdELENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQUksVUFBWSxDQUFDLENBQUMsQ0FBQztJQUNoRSxPQUFPLEdBQUcsQ0FBQztDQUNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTnVtYmVyVG9DaGluZXNlT3B0aW9ucyB9IGZyb20gJy4vbnVtYmVyLXRvLWNoaW5lc2UuaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJUb0NoaW5lc2UoXG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsXG4gIHJtYiA9IHRydWUsXG4gIG9wdGlvbnM/OiBOdW1iZXJUb0NoaW5lc2VPcHRpb25zLFxuKTogc3RyaW5nIHtcbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAge1xuICAgICAgbWludXNTeW1ib2w6ICfotJ8nLFxuICAgICAgdmFsaWRUaHJvdzogZmFsc2UsXG4gICAgfSxcbiAgICBvcHRpb25zLFxuICApO1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICBpZiAoIS9eLT9cXGQrKFxcLlxcZCspPyQvLnRlc3QodmFsdWUpICYmIG9wdGlvbnMudmFsaWRUaHJvdylcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsdWV9IGlzIGludmFsaWQgbnVtYmVyIHR5cGVgKTtcbiAgbGV0IGludGVnZXI6IG51bWJlciB8IHN0cmluZywgZGVjaW1hbDogbnVtYmVyIHwgc3RyaW5nO1xuICBbaW50ZWdlciwgZGVjaW1hbF0gPSB2YWx1ZS5zcGxpdCgnLicpO1xuICBsZXQgc3ltYm9sID0gJyc7XG4gIGlmIChpbnRlZ2VyLnN0YXJ0c1dpdGgoJy0nKSkge1xuICAgIHN5bWJvbCA9IG9wdGlvbnMubWludXNTeW1ib2w7XG4gICAgaW50ZWdlciA9IGludGVnZXIuc3Vic3RyKDEpO1xuICB9XG4gIGlmICgvXi0/XFxkKyQvLnRlc3QodmFsdWUpKSBkZWNpbWFsID0gbnVsbDtcbiAgaW50ZWdlciA9ICgraW50ZWdlcikudG9TdHJpbmcoKTtcbiAgY29uc3QgdW5pdCA9IHtcbiAgICBudW06IHJtYlxuICAgICAgPyBbJycsICflo7knLCAn6LSwJywgJ+WPgScsICfogoYnLCAn5LyNJywgJ+mZhicsICfmn5InLCAn5o2MJywgJ+eOlicsICfngrknXVxuICAgICAgOiBbJycsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrScsICfkuIMnLCAn5YWrJywgJ+S5nScsICfngrknXSxcbiAgICByYWRpY2U6IHJtYlxuICAgICAgPyBbXG4gICAgICAgICAgJycsXG4gICAgICAgICAgJ+aLvicsXG4gICAgICAgICAgJ+S9sCcsXG4gICAgICAgICAgJ+S7nycsXG4gICAgICAgICAgJ+S4hycsXG4gICAgICAgICAgJ+aLvicsXG4gICAgICAgICAgJ+S9sCcsXG4gICAgICAgICAgJ+S7nycsXG4gICAgICAgICAgJ+S6vycsXG4gICAgICAgICAgJ+aLvicsXG4gICAgICAgICAgJ+S9sCcsXG4gICAgICAgICAgJ+S7nycsXG4gICAgICAgICAgJ+S4h+S6vycsXG4gICAgICAgICAgJ+aLvicsXG4gICAgICAgICAgJ+S9sCcsXG4gICAgICAgICAgJ+S7nycsXG4gICAgICAgICAgJ+WFhicsXG4gICAgICAgICAgJ+aLvicsXG4gICAgICAgICAgJ+S9sCcsXG4gICAgICAgICAgJ+S7nycsXG4gICAgICAgIF1cbiAgICAgIDogW1xuICAgICAgICAgICcnLFxuICAgICAgICAgICfljYEnLFxuICAgICAgICAgICfnmb4nLFxuICAgICAgICAgICfljYMnLFxuICAgICAgICAgICfkuIcnLFxuICAgICAgICAgICfljYEnLFxuICAgICAgICAgICfnmb4nLFxuICAgICAgICAgICfljYMnLFxuICAgICAgICAgICfkur8nLFxuICAgICAgICAgICfljYEnLFxuICAgICAgICAgICfnmb4nLFxuICAgICAgICAgICfljYMnLFxuICAgICAgICAgICfkuIfkur8nLFxuICAgICAgICAgICfljYEnLFxuICAgICAgICAgICfnmb4nLFxuICAgICAgICAgICfljYMnLFxuICAgICAgICAgICflhYYnLFxuICAgICAgICAgICfljYEnLFxuICAgICAgICAgICfnmb4nLFxuICAgICAgICAgICfljYMnLFxuICAgICAgICBdLFxuICAgIGRlYzogWyfop5InLCAn5YiGJywgJ+WOmCcsICfmr6snXSxcbiAgfTtcbiAgaWYgKHJtYikgdmFsdWUgPSAoK3ZhbHVlKS50b0ZpeGVkKDUpLnRvU3RyaW5nKCk7XG4gIGxldCBpbnRlZ2VyUmVzID0gJyc7XG4gIGNvbnN0IGludGVnZXJDb3VudCA9IGludGVnZXIubGVuZ3RoO1xuICBpZiAoaW50ZWdlciA9PT0gJzAnIHx8IGludGVnZXJDb3VudCA9PT0gMCkge1xuICAgIGludGVnZXJSZXMgPSAn6Zu2JztcbiAgfSBlbHNlIHtcbiAgICBsZXQgY25EZXNjID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlZ2VyQ291bnQ7IGkrKykge1xuICAgICAgY29uc3QgbiA9ICtpbnRlZ2VyW2ldLFxuICAgICAgICBqID0gaW50ZWdlckNvdW50IC0gaSAtIDEsXG4gICAgICAgIGlzWmVybyA9IGkgPiAxICYmIG4gIT09IDAgJiYgaW50ZWdlcltpIC0gMV0gPT09ICcwJyxcbiAgICAgICAgY25aZXJvID0gaXNaZXJvID8gJ+mbticgOiAnJyxcbiAgICAgICAgaXNFbXBwdHlVbml0ID1cbiAgICAgICAgICAobiA9PT0gMCAmJiBqICUgNCAhPT0gMCkgfHwgaW50ZWdlci5zdWJzdHIoaSAtIDMsIDQpID09PSAnMDAwMCcsXG4gICAgICAgIGRlc2NNYXJrID0gY25EZXNjO1xuICAgICAgbGV0IGNuTnVtID0gdW5pdC5udW1bbl07XG5cbiAgICAgIGNuRGVzYyA9IGlzRW1wcHR5VW5pdCA/ICcnIDogdW5pdC5yYWRpY2Vbal07XG4gICAgICAvLyDnrKzkuIDkvY3mmK/kuIDljYFcbiAgICAgIGlmIChpID09PSAwICYmIGNuTnVtID09PSAn5LiAJyAmJiBjbkRlc2MgPT09ICfljYEnKSBjbk51bSA9ICcnO1xuICAgICAgY29uc3QgaXNDaGFuZ2VFciA9XG4gICAgICAgIG4gPiAxICYmXG4gICAgICAgIGNuTnVtID09PSAn5LqMJyAmJiAvLyDljrvpmaTpppbkvY1cbiAgICAgICAgWycnLCAn5Y2BJywgJ+eZviddLmluZGV4T2YoY25EZXNjKSA9PT0gLTEgJiYgLy8g5LiN6K+75LikXFzkuKTljYFcXOS4pOeZvlxuICAgICAgICBkZXNjTWFyayAhPT0gJ+WNgSc7IC8vIOS4jeivu+WNgeS4pFxuICAgICAgaWYgKGlzQ2hhbmdlRXIpIGNuTnVtID0gJ+S4pCc7XG4gICAgICBpbnRlZ2VyUmVzICs9IGNuWmVybyArIGNuTnVtICsgY25EZXNjO1xuICAgIH1cbiAgfVxuXG4gIC8vIOWwj+aVsOmDqOWIhuaLvOaOpVxuICBsZXQgZGVjaW1hbFJlcyA9ICcnO1xuICBjb25zdCBkZWNpbWFsQ291bnQgPSBkZWNpbWFsID8gZGVjaW1hbC50b1N0cmluZygpLmxlbmd0aCA6IDA7XG4gIGlmIChkZWNpbWFsID09PSBudWxsKSB7XG4gICAgZGVjaW1hbFJlcyA9IHJtYiA/ICfmlbQnIDogJyc7XG4gIH0gZWxzZSBpZiAoZGVjaW1hbCA9PT0gJzAnKSB7XG4gICAgZGVjaW1hbFJlcyA9ICfpm7YnO1xuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVjaW1hbENvdW50OyBpKyspIHtcbiAgICAgIGlmIChybWIgJiYgaSA+IHVuaXQuZGVjLmxlbmd0aCAtIDEpIGJyZWFrO1xuICAgICAgY29uc3QgbiA9IGRlY2ltYWxbaV0sXG4gICAgICAgIGNuWmVybyA9IG4gPT09ICcwJyA/ICfpm7YnIDogJycsXG4gICAgICAgIGNuTnVtID0gdW5pdC5udW1bbl0sXG4gICAgICAgIGNuRGVzYyA9IHJtYiA/IHVuaXQuZGVjW2ldIDogJyc7XG4gICAgICBkZWNpbWFsUmVzICs9IGNuWmVybyArIGNuTnVtICsgY25EZXNjO1xuICAgIH1cbiAgfVxuICBjb25zdCByZXQgPVxuICAgIHN5bWJvbCArXG4gICAgKHJtYlxuICAgICAgPyBpbnRlZ2VyUmVzICsgKGRlY2ltYWxSZXMgPT09ICfpm7YnID8gJ+WFg+aVtCcgOiBg5YWDJHtkZWNpbWFsUmVzfWApXG4gICAgICA6IGludGVnZXJSZXMgKyAoZGVjaW1hbFJlcyA9PT0gJycgPyAnJyA6IGDngrkke2RlY2ltYWxSZXN9YCkpO1xuICByZXR1cm4gcmV0O1xufVxuIl19