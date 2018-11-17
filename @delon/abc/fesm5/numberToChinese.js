import { __read } from 'tslib';
import { Pipe, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @param {?=} rmb
 * @param {?=} options
 * @return {?}
 */
function numberToChinese(value, rmb, options) {
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
    _a = __read(value.split('.'), 2), integer = _a[0], decimal = _a[1];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NaNumberToChinesePipe = /** @class */ (function () {
    function NaNumberToChinesePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} rmb
     * @param {?=} minusSymbol
     * @return {?}
     */
    NaNumberToChinesePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} rmb
     * @param {?=} minusSymbol
     * @return {?}
     */
    function (value, rmb, minusSymbol) {
        if (rmb === void 0) { rmb = true; }
        if (minusSymbol === void 0) { minusSymbol = '负'; }
        return numberToChinese(value, rmb, { minusSymbol: minusSymbol });
    };
    NaNumberToChinesePipe.decorators = [
        { type: Pipe, args: [{ name: 'n2c' },] }
    ];
    return NaNumberToChinesePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var PIPES = [NaNumberToChinesePipe];
var NumberToChineseModule = /** @class */ (function () {
    function NumberToChineseModule() {
    }
    /**
     * @return {?}
     */
    NumberToChineseModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: NumberToChineseModule, providers: [] };
    };
    NumberToChineseModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: PIPES,
                    exports: PIPES,
                },] }
    ];
    return NumberToChineseModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { numberToChinese, NaNumberToChinesePipe, NumberToChineseModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyVG9DaGluZXNlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL251bWJlci10by1jaGluZXNlL251bWJlci10by1jaGluZXNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL251bWJlci10by1jaGluZXNlL251bWJlci10by1jaGluZXNlLnBpcGUudHMiLCJuZzovL0BkZWxvbi9hYmMvbnVtYmVyLXRvLWNoaW5lc2UvbnVtYmVyLXRvLWNoaW5lc2UubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE51bWJlclRvQ2hpbmVzZU9wdGlvbnMgfSBmcm9tICcuL251bWJlci10by1jaGluZXNlLmludGVyZmFjZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyVG9DaGluZXNlKFxuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLFxuICBybWIgPSB0cnVlLFxuICBvcHRpb25zPzogTnVtYmVyVG9DaGluZXNlT3B0aW9ucyxcbik6IHN0cmluZyB7XG4gIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgIHtcbiAgICAgIG1pbnVzU3ltYm9sOiAnw6jCtMKfJyxcbiAgICAgIHZhbGlkVGhyb3c6IGZhbHNlLFxuICAgIH0sXG4gICAgb3B0aW9ucyxcbiAgKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgaWYgKCEvXi0/XFxkKyhcXC5cXGQrKT8kLy50ZXN0KHZhbHVlKSAmJiBvcHRpb25zLnZhbGlkVGhyb3cpXG4gICAgdGhyb3cgbmV3IEVycm9yKGAke3ZhbHVlfSBpcyBpbnZhbGlkIG51bWJlciB0eXBlYCk7XG4gIGxldCBpbnRlZ2VyOiBudW1iZXIgfCBzdHJpbmcsIGRlY2ltYWw6IG51bWJlciB8IHN0cmluZztcbiAgW2ludGVnZXIsIGRlY2ltYWxdID0gdmFsdWUuc3BsaXQoJy4nKTtcbiAgbGV0IHN5bWJvbCA9ICcnO1xuICBpZiAoaW50ZWdlci5zdGFydHNXaXRoKCctJykpIHtcbiAgICBzeW1ib2wgPSBvcHRpb25zLm1pbnVzU3ltYm9sO1xuICAgIGludGVnZXIgPSBpbnRlZ2VyLnN1YnN0cigxKTtcbiAgfVxuICBpZiAoL14tP1xcZCskLy50ZXN0KHZhbHVlKSkgZGVjaW1hbCA9IG51bGw7XG4gIGludGVnZXIgPSAoK2ludGVnZXIpLnRvU3RyaW5nKCk7XG4gIGNvbnN0IHVuaXQgPSB7XG4gICAgbnVtOiBybWJcbiAgICAgID8gWycnLCAnw6XCo8K5JywgJ8OowrTCsCcsICfDpcKPwoEnLCAnw6jCgsKGJywgJ8OkwrzCjScsICfDqcKZwoYnLCAnw6bCn8KSJywgJ8Omwo3CjCcsICfDp8KOwpYnLCAnw6fCgsK5J11cbiAgICAgIDogWycnLCAnw6TCuMKAJywgJ8OkwrrCjCcsICfDpMK4woknLCAnw6XCm8KbJywgJ8OkwrrClCcsICfDpcKFwq0nLCAnw6TCuMKDJywgJ8OlwoXCqycsICfDpMK5wp0nLCAnw6fCgsK5J10sXG4gICAgcmFkaWNlOiBybWJcbiAgICAgID8gW1xuICAgICAgICAgICcnLFxuICAgICAgICAgICfDpsKLwr4nLFxuICAgICAgICAgICfDpMK9wrAnLFxuICAgICAgICAgICfDpMK7wp8nLFxuICAgICAgICAgICfDpMK4wocnLFxuICAgICAgICAgICfDpsKLwr4nLFxuICAgICAgICAgICfDpMK9wrAnLFxuICAgICAgICAgICfDpMK7wp8nLFxuICAgICAgICAgICfDpMK6wr8nLFxuICAgICAgICAgICfDpsKLwr4nLFxuICAgICAgICAgICfDpMK9wrAnLFxuICAgICAgICAgICfDpMK7wp8nLFxuICAgICAgICAgICfDpMK4wofDpMK6wr8nLFxuICAgICAgICAgICfDpsKLwr4nLFxuICAgICAgICAgICfDpMK9wrAnLFxuICAgICAgICAgICfDpMK7wp8nLFxuICAgICAgICAgICfDpcKFwoYnLFxuICAgICAgICAgICfDpsKLwr4nLFxuICAgICAgICAgICfDpMK9wrAnLFxuICAgICAgICAgICfDpMK7wp8nLFxuICAgICAgICBdXG4gICAgICA6IFtcbiAgICAgICAgICAnJyxcbiAgICAgICAgICAnw6XCjcKBJyxcbiAgICAgICAgICAnw6fCmcK+JyxcbiAgICAgICAgICAnw6XCjcKDJyxcbiAgICAgICAgICAnw6TCuMKHJyxcbiAgICAgICAgICAnw6XCjcKBJyxcbiAgICAgICAgICAnw6fCmcK+JyxcbiAgICAgICAgICAnw6XCjcKDJyxcbiAgICAgICAgICAnw6TCusK/JyxcbiAgICAgICAgICAnw6XCjcKBJyxcbiAgICAgICAgICAnw6fCmcK+JyxcbiAgICAgICAgICAnw6XCjcKDJyxcbiAgICAgICAgICAnw6TCuMKHw6TCusK/JyxcbiAgICAgICAgICAnw6XCjcKBJyxcbiAgICAgICAgICAnw6fCmcK+JyxcbiAgICAgICAgICAnw6XCjcKDJyxcbiAgICAgICAgICAnw6XChcKGJyxcbiAgICAgICAgICAnw6XCjcKBJyxcbiAgICAgICAgICAnw6fCmcK+JyxcbiAgICAgICAgICAnw6XCjcKDJyxcbiAgICAgICAgXSxcbiAgICBkZWM6IFsnw6jCp8KSJywgJ8OlwojChicsICfDpcKOwpgnLCAnw6bCr8KrJ10sXG4gIH07XG4gIGlmIChybWIpIHZhbHVlID0gKCt2YWx1ZSkudG9GaXhlZCg1KS50b1N0cmluZygpO1xuICBsZXQgaW50ZWdlclJlcyA9ICcnO1xuICBjb25zdCBpbnRlZ2VyQ291bnQgPSBpbnRlZ2VyLmxlbmd0aDtcbiAgaWYgKGludGVnZXIgPT09ICcwJyB8fCBpbnRlZ2VyQ291bnQgPT09IDApIHtcbiAgICBpbnRlZ2VyUmVzID0gJ8OpwpvCtic7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGNuRGVzYyA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZWdlckNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IG4gPSAraW50ZWdlcltpXSxcbiAgICAgICAgaiA9IGludGVnZXJDb3VudCAtIGkgLSAxLFxuICAgICAgICBpc1plcm8gPSBpID4gMSAmJiBuICE9PSAwICYmIGludGVnZXJbaSAtIDFdID09PSAnMCcsXG4gICAgICAgIGNuWmVybyA9IGlzWmVybyA/ICfDqcKbwrYnIDogJycsXG4gICAgICAgIGlzRW1wcHR5VW5pdCA9XG4gICAgICAgICAgKG4gPT09IDAgJiYgaiAlIDQgIT09IDApIHx8IGludGVnZXIuc3Vic3RyKGkgLSAzLCA0KSA9PT0gJzAwMDAnLFxuICAgICAgICBkZXNjTWFyayA9IGNuRGVzYztcbiAgICAgIGxldCBjbk51bSA9IHVuaXQubnVtW25dO1xuXG4gICAgICBjbkRlc2MgPSBpc0VtcHB0eVVuaXQgPyAnJyA6IHVuaXQucmFkaWNlW2pdO1xuICAgICAgLy8gw6fCrMKsw6TCuMKAw6TCvcKNw6bCmMKvw6TCuMKAw6XCjcKBXG4gICAgICBpZiAoaSA9PT0gMCAmJiBjbk51bSA9PT0gJ8OkwrjCgCcgJiYgY25EZXNjID09PSAnw6XCjcKBJykgY25OdW0gPSAnJztcbiAgICAgIGNvbnN0IGlzQ2hhbmdlRXIgPVxuICAgICAgICBuID4gMSAmJlxuICAgICAgICBjbk51bSA9PT0gJ8OkwrrCjCcgJiYgLy8gw6XCjsK7w6nCmcKkw6nCpsKWw6TCvcKNXG4gICAgICAgIFsnJywgJ8Olwo3CgScsICfDp8KZwr4nXS5pbmRleE9mKGNuRGVzYykgPT09IC0xICYmIC8vIMOkwrjCjcOowq/Cu8OkwrjCpFxcw6TCuMKkw6XCjcKBXFzDpMK4wqTDp8KZwr5cbiAgICAgICAgZGVzY01hcmsgIT09ICfDpcKNwoEnOyAvLyDDpMK4wo3DqMKvwrvDpcKNwoHDpMK4wqRcbiAgICAgIGlmIChpc0NoYW5nZUVyKSBjbk51bSA9ICfDpMK4wqQnO1xuICAgICAgaW50ZWdlclJlcyArPSBjblplcm8gKyBjbk51bSArIGNuRGVzYztcbiAgICB9XG4gIH1cblxuICAvLyDDpcKwwo/DpsKVwrDDqcKDwqjDpcKIwobDpsKLwrzDpsKOwqVcbiAgbGV0IGRlY2ltYWxSZXMgPSAnJztcbiAgY29uc3QgZGVjaW1hbENvdW50ID0gZGVjaW1hbCA/IGRlY2ltYWwudG9TdHJpbmcoKS5sZW5ndGggOiAwO1xuICBpZiAoZGVjaW1hbCA9PT0gbnVsbCkge1xuICAgIGRlY2ltYWxSZXMgPSBybWIgPyAnw6bClcK0JyA6ICcnO1xuICB9IGVsc2UgaWYgKGRlY2ltYWwgPT09ICcwJykge1xuICAgIGRlY2ltYWxSZXMgPSAnw6nCm8K2JztcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlY2ltYWxDb3VudDsgaSsrKSB7XG4gICAgICBpZiAocm1iICYmIGkgPiB1bml0LmRlYy5sZW5ndGggLSAxKSBicmVhaztcbiAgICAgIGNvbnN0IG4gPSBkZWNpbWFsW2ldLFxuICAgICAgICBjblplcm8gPSBuID09PSAnMCcgPyAnw6nCm8K2JyA6ICcnLFxuICAgICAgICBjbk51bSA9IHVuaXQubnVtW25dLFxuICAgICAgICBjbkRlc2MgPSBybWIgPyB1bml0LmRlY1tpXSA6ICcnO1xuICAgICAgZGVjaW1hbFJlcyArPSBjblplcm8gKyBjbk51bSArIGNuRGVzYztcbiAgICB9XG4gIH1cbiAgY29uc3QgcmV0ID1cbiAgICBzeW1ib2wgK1xuICAgIChybWJcbiAgICAgID8gaW50ZWdlclJlcyArIChkZWNpbWFsUmVzID09PSAnw6nCm8K2JyA/ICfDpcKFwoPDpsKVwrQnIDogYMOlwoXCgyR7ZGVjaW1hbFJlc31gKVxuICAgICAgOiBpbnRlZ2VyUmVzICsgKGRlY2ltYWxSZXMgPT09ICcnID8gJycgOiBgw6fCgsK5JHtkZWNpbWFsUmVzfWApKTtcbiAgcmV0dXJuIHJldDtcbn1cbiIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG51bWJlclRvQ2hpbmVzZSB9IGZyb20gJy4vbnVtYmVyLXRvLWNoaW5lc2UnO1xuXG5AUGlwZSh7IG5hbWU6ICduMmMnIH0pXG5leHBvcnQgY2xhc3MgTmFOdW1iZXJUb0NoaW5lc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShcbiAgICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHJtYjogYm9vbGVhbiA9IHRydWUsXG4gICAgbWludXNTeW1ib2w6IHN0cmluZyA9ICfDqMK0wp8nLFxuICApOiBzdHJpbmcge1xuICAgIHJldHVybiBudW1iZXJUb0NoaW5lc2UodmFsdWUsIHJtYiwgeyBtaW51c1N5bWJvbCB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5hTnVtYmVyVG9DaGluZXNlUGlwZSB9IGZyb20gJy4vbnVtYmVyLXRvLWNoaW5lc2UucGlwZSc7XG5cbmNvbnN0IFBJUEVTID0gW05hTnVtYmVyVG9DaGluZXNlUGlwZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFBJUEVTLFxuICBleHBvcnRzOiBQSVBFUyxcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyVG9DaGluZXNlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IE51bWJlclRvQ2hpbmVzZU1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSx5QkFDRSxLQUFzQixFQUN0QixHQUFVLEVBQ1YsT0FBZ0M7SUFEaEMsb0JBQUEsRUFBQSxVQUFVOztJQUdWLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUNyQjtRQUNFLFdBQVcsRUFBRSxHQUFHO1FBQ2hCLFVBQVUsRUFBRSxLQUFLO0tBQ2xCLEVBQ0QsT0FBTyxDQUNSLENBQUM7SUFDRixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVE7UUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJ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