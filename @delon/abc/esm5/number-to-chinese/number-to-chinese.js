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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRvLWNoaW5lc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL251bWJlci10by1jaGluZXNlLyIsInNvdXJjZXMiOlsibnVtYmVyLXRvLWNoaW5lc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxNQUFNLDBCQUNKLEtBQXNCLEVBQ3RCLEdBQVUsRUFDVixPQUFnQztJQURoQyxvQkFBQSxFQUFBLFVBQVU7O0lBR1YsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3JCO1FBQ0UsV0FBVyxFQUFFLEdBQUc7UUFDaEIsVUFBVSxFQUFFLEtBQUs7S0FDbEIsRUFDRCxPQUFPLENBQ1IsQ0FBQztJQUNGLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtRQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDeEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVTtRQUN0RCxNQUFNLElBQUksS0FBSyxDQUFJLEtBQUssNEJBQXlCLENBQUMsQ0FBQzs7SUFDckQsSUFBSSxPQUFPLENBQTRDOztJQUF2RCxJQUE4QixPQUFPLENBQWtCO0lBQ3ZELHdDQUFxQyxFQUFwQyxlQUFPLEVBQUUsZUFBTyxDQUFxQjs7SUFDdEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUMzQixNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUM3QixPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM3QjtJQUNELElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7O0lB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LENBQUMsQ0FBQyxDQUdjOztZQUhsQyxJQUNFLE1BQU0sR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FFRzs7WUFIbEMsSUFFRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDYTs7WUFIbEMsSUFHRSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbEMsVUFBVSxJQUFJLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO1NBQ3ZDO0tBQ0Y7O0lBQ0QsSUFBTSxHQUFHLEdBQ1AsTUFBTTtRQUNOLENBQUMsR0FBRztZQUNGLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQUksVUFBWSxDQUFDO1lBQzdELENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQUksVUFBWSxDQUFDLENBQUMsQ0FBQztJQUNoRSxPQUFPLEdBQUcsQ0FBQztDQUNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTnVtYmVyVG9DaGluZXNlT3B0aW9ucyB9IGZyb20gJy4vbnVtYmVyLXRvLWNoaW5lc2UuaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyVG9DaGluZXNlKFxyXG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgcm1iID0gdHJ1ZSxcclxuICBvcHRpb25zPzogTnVtYmVyVG9DaGluZXNlT3B0aW9ucyxcclxuKTogc3RyaW5nIHtcclxuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcclxuICAgIHtcclxuICAgICAgbWludXNTeW1ib2w6ICfotJ8nLFxyXG4gICAgICB2YWxpZFRocm93OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBvcHRpb25zLFxyXG4gICk7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICBpZiAoIS9eLT9cXGQrKFxcLlxcZCspPyQvLnRlc3QodmFsdWUpICYmIG9wdGlvbnMudmFsaWRUaHJvdylcclxuICAgIHRocm93IG5ldyBFcnJvcihgJHt2YWx1ZX0gaXMgaW52YWxpZCBudW1iZXIgdHlwZWApO1xyXG4gIGxldCBpbnRlZ2VyOiBudW1iZXIgfCBzdHJpbmcsIGRlY2ltYWw6IG51bWJlciB8IHN0cmluZztcclxuICBbaW50ZWdlciwgZGVjaW1hbF0gPSB2YWx1ZS5zcGxpdCgnLicpO1xyXG4gIGxldCBzeW1ib2wgPSAnJztcclxuICBpZiAoaW50ZWdlci5zdGFydHNXaXRoKCctJykpIHtcclxuICAgIHN5bWJvbCA9IG9wdGlvbnMubWludXNTeW1ib2w7XHJcbiAgICBpbnRlZ2VyID0gaW50ZWdlci5zdWJzdHIoMSk7XHJcbiAgfVxyXG4gIGlmICgvXi0/XFxkKyQvLnRlc3QodmFsdWUpKSBkZWNpbWFsID0gbnVsbDtcclxuICBpbnRlZ2VyID0gKCtpbnRlZ2VyKS50b1N0cmluZygpO1xyXG4gIGNvbnN0IHVuaXQgPSB7XHJcbiAgICBudW06IHJtYlxyXG4gICAgICA/IFsnJywgJ+WjuScsICfotLAnLCAn5Y+BJywgJ+iChicsICfkvI0nLCAn6ZmGJywgJ+afkicsICfmjYwnLCAn546WJywgJ+eCuSddXHJcbiAgICAgIDogWycnLCAn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nLCAn5LiDJywgJ+WFqycsICfkuZ0nLCAn54K5J10sXHJcbiAgICByYWRpY2U6IHJtYlxyXG4gICAgICA/IFtcclxuICAgICAgICAgICcnLFxyXG4gICAgICAgICAgJ+aLvicsXHJcbiAgICAgICAgICAn5L2wJyxcclxuICAgICAgICAgICfku58nLFxyXG4gICAgICAgICAgJ+S4hycsXHJcbiAgICAgICAgICAn5ou+JyxcclxuICAgICAgICAgICfkvbAnLFxyXG4gICAgICAgICAgJ+S7nycsXHJcbiAgICAgICAgICAn5Lq/JyxcclxuICAgICAgICAgICfmi74nLFxyXG4gICAgICAgICAgJ+S9sCcsXHJcbiAgICAgICAgICAn5LufJyxcclxuICAgICAgICAgICfkuIfkur8nLFxyXG4gICAgICAgICAgJ+aLvicsXHJcbiAgICAgICAgICAn5L2wJyxcclxuICAgICAgICAgICfku58nLFxyXG4gICAgICAgICAgJ+WFhicsXHJcbiAgICAgICAgICAn5ou+JyxcclxuICAgICAgICAgICfkvbAnLFxyXG4gICAgICAgICAgJ+S7nycsXHJcbiAgICAgICAgXVxyXG4gICAgICA6IFtcclxuICAgICAgICAgICcnLFxyXG4gICAgICAgICAgJ+WNgScsXHJcbiAgICAgICAgICAn55m+JyxcclxuICAgICAgICAgICfljYMnLFxyXG4gICAgICAgICAgJ+S4hycsXHJcbiAgICAgICAgICAn5Y2BJyxcclxuICAgICAgICAgICfnmb4nLFxyXG4gICAgICAgICAgJ+WNgycsXHJcbiAgICAgICAgICAn5Lq/JyxcclxuICAgICAgICAgICfljYEnLFxyXG4gICAgICAgICAgJ+eZvicsXHJcbiAgICAgICAgICAn5Y2DJyxcclxuICAgICAgICAgICfkuIfkur8nLFxyXG4gICAgICAgICAgJ+WNgScsXHJcbiAgICAgICAgICAn55m+JyxcclxuICAgICAgICAgICfljYMnLFxyXG4gICAgICAgICAgJ+WFhicsXHJcbiAgICAgICAgICAn5Y2BJyxcclxuICAgICAgICAgICfnmb4nLFxyXG4gICAgICAgICAgJ+WNgycsXHJcbiAgICAgICAgXSxcclxuICAgIGRlYzogWyfop5InLCAn5YiGJywgJ+WOmCcsICfmr6snXSxcclxuICB9O1xyXG4gIGlmIChybWIpIHZhbHVlID0gKCt2YWx1ZSkudG9GaXhlZCg1KS50b1N0cmluZygpO1xyXG4gIGxldCBpbnRlZ2VyUmVzID0gJyc7XHJcbiAgY29uc3QgaW50ZWdlckNvdW50ID0gaW50ZWdlci5sZW5ndGg7XHJcbiAgaWYgKGludGVnZXIgPT09ICcwJyB8fCBpbnRlZ2VyQ291bnQgPT09IDApIHtcclxuICAgIGludGVnZXJSZXMgPSAn6Zu2JztcclxuICB9IGVsc2Uge1xyXG4gICAgbGV0IGNuRGVzYyA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlZ2VyQ291bnQ7IGkrKykge1xyXG4gICAgICBjb25zdCBuID0gK2ludGVnZXJbaV0sXHJcbiAgICAgICAgaiA9IGludGVnZXJDb3VudCAtIGkgLSAxLFxyXG4gICAgICAgIGlzWmVybyA9IGkgPiAxICYmIG4gIT09IDAgJiYgaW50ZWdlcltpIC0gMV0gPT09ICcwJyxcclxuICAgICAgICBjblplcm8gPSBpc1plcm8gPyAn6Zu2JyA6ICcnLFxyXG4gICAgICAgIGlzRW1wcHR5VW5pdCA9XHJcbiAgICAgICAgICAobiA9PT0gMCAmJiBqICUgNCAhPT0gMCkgfHwgaW50ZWdlci5zdWJzdHIoaSAtIDMsIDQpID09PSAnMDAwMCcsXHJcbiAgICAgICAgZGVzY01hcmsgPSBjbkRlc2M7XHJcbiAgICAgIGxldCBjbk51bSA9IHVuaXQubnVtW25dO1xyXG5cclxuICAgICAgY25EZXNjID0gaXNFbXBwdHlVbml0ID8gJycgOiB1bml0LnJhZGljZVtqXTtcclxuICAgICAgLy8g56ys5LiA5L2N5piv5LiA5Y2BXHJcbiAgICAgIGlmIChpID09PSAwICYmIGNuTnVtID09PSAn5LiAJyAmJiBjbkRlc2MgPT09ICfljYEnKSBjbk51bSA9ICcnO1xyXG4gICAgICBjb25zdCBpc0NoYW5nZUVyID1cclxuICAgICAgICBuID4gMSAmJlxyXG4gICAgICAgIGNuTnVtID09PSAn5LqMJyAmJiAvLyDljrvpmaTpppbkvY1cclxuICAgICAgICBbJycsICfljYEnLCAn55m+J10uaW5kZXhPZihjbkRlc2MpID09PSAtMSAmJiAvLyDkuI3or7vkuKRcXOS4pOWNgVxc5Lik55m+XHJcbiAgICAgICAgZGVzY01hcmsgIT09ICfljYEnOyAvLyDkuI3or7vljYHkuKRcclxuICAgICAgaWYgKGlzQ2hhbmdlRXIpIGNuTnVtID0gJ+S4pCc7XHJcbiAgICAgIGludGVnZXJSZXMgKz0gY25aZXJvICsgY25OdW0gKyBjbkRlc2M7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDlsI/mlbDpg6jliIbmi7zmjqVcclxuICBsZXQgZGVjaW1hbFJlcyA9ICcnO1xyXG4gIGNvbnN0IGRlY2ltYWxDb3VudCA9IGRlY2ltYWwgPyBkZWNpbWFsLnRvU3RyaW5nKCkubGVuZ3RoIDogMDtcclxuICBpZiAoZGVjaW1hbCA9PT0gbnVsbCkge1xyXG4gICAgZGVjaW1hbFJlcyA9IHJtYiA/ICfmlbQnIDogJyc7XHJcbiAgfSBlbHNlIGlmIChkZWNpbWFsID09PSAnMCcpIHtcclxuICAgIGRlY2ltYWxSZXMgPSAn6Zu2JztcclxuICB9IGVsc2Uge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWNpbWFsQ291bnQ7IGkrKykge1xyXG4gICAgICBpZiAocm1iICYmIGkgPiB1bml0LmRlYy5sZW5ndGggLSAxKSBicmVhaztcclxuICAgICAgY29uc3QgbiA9IGRlY2ltYWxbaV0sXHJcbiAgICAgICAgY25aZXJvID0gbiA9PT0gJzAnID8gJ+mbticgOiAnJyxcclxuICAgICAgICBjbk51bSA9IHVuaXQubnVtW25dLFxyXG4gICAgICAgIGNuRGVzYyA9IHJtYiA/IHVuaXQuZGVjW2ldIDogJyc7XHJcbiAgICAgIGRlY2ltYWxSZXMgKz0gY25aZXJvICsgY25OdW0gKyBjbkRlc2M7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHJldCA9XHJcbiAgICBzeW1ib2wgK1xyXG4gICAgKHJtYlxyXG4gICAgICA/IGludGVnZXJSZXMgKyAoZGVjaW1hbFJlcyA9PT0gJ+mbticgPyAn5YWD5pW0JyA6IGDlhYMke2RlY2ltYWxSZXN9YClcclxuICAgICAgOiBpbnRlZ2VyUmVzICsgKGRlY2ltYWxSZXMgPT09ICcnID8gJycgOiBg54K5JHtkZWNpbWFsUmVzfWApKTtcclxuICByZXR1cm4gcmV0O1xyXG59XHJcbiJdfQ==