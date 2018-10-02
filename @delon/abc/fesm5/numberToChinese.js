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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyVG9DaGluZXNlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL251bWJlci10by1jaGluZXNlL251bWJlci10by1jaGluZXNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL251bWJlci10by1jaGluZXNlL251bWJlci10by1jaGluZXNlLnBpcGUudHMiLCJuZzovL0BkZWxvbi9hYmMvbnVtYmVyLXRvLWNoaW5lc2UvbnVtYmVyLXRvLWNoaW5lc2UubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE51bWJlclRvQ2hpbmVzZU9wdGlvbnMgfSBmcm9tICcuL251bWJlci10by1jaGluZXNlLmludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlclRvQ2hpbmVzZShcclxuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLFxyXG4gIHJtYiA9IHRydWUsXHJcbiAgb3B0aW9ucz86IE51bWJlclRvQ2hpbmVzZU9wdGlvbnMsXHJcbik6IHN0cmluZyB7XHJcbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICB7XHJcbiAgICAgIG1pbnVzU3ltYm9sOiAnw6jCtMKfJyxcclxuICAgICAgdmFsaWRUaHJvdzogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgb3B0aW9ucyxcclxuICApO1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgaWYgKCEvXi0/XFxkKyhcXC5cXGQrKT8kLy50ZXN0KHZhbHVlKSAmJiBvcHRpb25zLnZhbGlkVGhyb3cpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsdWV9IGlzIGludmFsaWQgbnVtYmVyIHR5cGVgKTtcclxuICBsZXQgaW50ZWdlcjogbnVtYmVyIHwgc3RyaW5nLCBkZWNpbWFsOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgW2ludGVnZXIsIGRlY2ltYWxdID0gdmFsdWUuc3BsaXQoJy4nKTtcclxuICBsZXQgc3ltYm9sID0gJyc7XHJcbiAgaWYgKGludGVnZXIuc3RhcnRzV2l0aCgnLScpKSB7XHJcbiAgICBzeW1ib2wgPSBvcHRpb25zLm1pbnVzU3ltYm9sO1xyXG4gICAgaW50ZWdlciA9IGludGVnZXIuc3Vic3RyKDEpO1xyXG4gIH1cclxuICBpZiAoL14tP1xcZCskLy50ZXN0KHZhbHVlKSkgZGVjaW1hbCA9IG51bGw7XHJcbiAgaW50ZWdlciA9ICgraW50ZWdlcikudG9TdHJpbmcoKTtcclxuICBjb25zdCB1bml0ID0ge1xyXG4gICAgbnVtOiBybWJcclxuICAgICAgPyBbJycsICfDpcKjwrknLCAnw6jCtMKwJywgJ8Olwo/CgScsICfDqMKCwoYnLCAnw6TCvMKNJywgJ8OpwpnChicsICfDpsKfwpInLCAnw6bCjcKMJywgJ8Onwo7ClicsICfDp8KCwrknXVxyXG4gICAgICA6IFsnJywgJ8OkwrjCgCcsICfDpMK6wownLCAnw6TCuMKJJywgJ8OlwpvCmycsICfDpMK6wpQnLCAnw6XChcKtJywgJ8OkwrjCgycsICfDpcKFwqsnLCAnw6TCucKdJywgJ8OnwoLCuSddLFxyXG4gICAgcmFkaWNlOiBybWJcclxuICAgICAgPyBbXHJcbiAgICAgICAgICAnJyxcclxuICAgICAgICAgICfDpsKLwr4nLFxyXG4gICAgICAgICAgJ8Okwr3CsCcsXHJcbiAgICAgICAgICAnw6TCu8KfJyxcclxuICAgICAgICAgICfDpMK4wocnLFxyXG4gICAgICAgICAgJ8OmwovCvicsXHJcbiAgICAgICAgICAnw6TCvcKwJyxcclxuICAgICAgICAgICfDpMK7wp8nLFxyXG4gICAgICAgICAgJ8OkwrrCvycsXHJcbiAgICAgICAgICAnw6bCi8K+JyxcclxuICAgICAgICAgICfDpMK9wrAnLFxyXG4gICAgICAgICAgJ8OkwrvCnycsXHJcbiAgICAgICAgICAnw6TCuMKHw6TCusK/JyxcclxuICAgICAgICAgICfDpsKLwr4nLFxyXG4gICAgICAgICAgJ8Okwr3CsCcsXHJcbiAgICAgICAgICAnw6TCu8KfJyxcclxuICAgICAgICAgICfDpcKFwoYnLFxyXG4gICAgICAgICAgJ8OmwovCvicsXHJcbiAgICAgICAgICAnw6TCvcKwJyxcclxuICAgICAgICAgICfDpMK7wp8nLFxyXG4gICAgICAgIF1cclxuICAgICAgOiBbXHJcbiAgICAgICAgICAnJyxcclxuICAgICAgICAgICfDpcKNwoEnLFxyXG4gICAgICAgICAgJ8OnwpnCvicsXHJcbiAgICAgICAgICAnw6XCjcKDJyxcclxuICAgICAgICAgICfDpMK4wocnLFxyXG4gICAgICAgICAgJ8Olwo3CgScsXHJcbiAgICAgICAgICAnw6fCmcK+JyxcclxuICAgICAgICAgICfDpcKNwoMnLFxyXG4gICAgICAgICAgJ8OkwrrCvycsXHJcbiAgICAgICAgICAnw6XCjcKBJyxcclxuICAgICAgICAgICfDp8KZwr4nLFxyXG4gICAgICAgICAgJ8Olwo3CgycsXHJcbiAgICAgICAgICAnw6TCuMKHw6TCusK/JyxcclxuICAgICAgICAgICfDpcKNwoEnLFxyXG4gICAgICAgICAgJ8OnwpnCvicsXHJcbiAgICAgICAgICAnw6XCjcKDJyxcclxuICAgICAgICAgICfDpcKFwoYnLFxyXG4gICAgICAgICAgJ8Olwo3CgScsXHJcbiAgICAgICAgICAnw6fCmcK+JyxcclxuICAgICAgICAgICfDpcKNwoMnLFxyXG4gICAgICAgIF0sXHJcbiAgICBkZWM6IFsnw6jCp8KSJywgJ8OlwojChicsICfDpcKOwpgnLCAnw6bCr8KrJ10sXHJcbiAgfTtcclxuICBpZiAocm1iKSB2YWx1ZSA9ICgrdmFsdWUpLnRvRml4ZWQoNSkudG9TdHJpbmcoKTtcclxuICBsZXQgaW50ZWdlclJlcyA9ICcnO1xyXG4gIGNvbnN0IGludGVnZXJDb3VudCA9IGludGVnZXIubGVuZ3RoO1xyXG4gIGlmIChpbnRlZ2VyID09PSAnMCcgfHwgaW50ZWdlckNvdW50ID09PSAwKSB7XHJcbiAgICBpbnRlZ2VyUmVzID0gJ8OpwpvCtic7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxldCBjbkRlc2MgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZWdlckNvdW50OyBpKyspIHtcclxuICAgICAgY29uc3QgbiA9ICtpbnRlZ2VyW2ldLFxyXG4gICAgICAgIGogPSBpbnRlZ2VyQ291bnQgLSBpIC0gMSxcclxuICAgICAgICBpc1plcm8gPSBpID4gMSAmJiBuICE9PSAwICYmIGludGVnZXJbaSAtIDFdID09PSAnMCcsXHJcbiAgICAgICAgY25aZXJvID0gaXNaZXJvID8gJ8OpwpvCticgOiAnJyxcclxuICAgICAgICBpc0VtcHB0eVVuaXQgPVxyXG4gICAgICAgICAgKG4gPT09IDAgJiYgaiAlIDQgIT09IDApIHx8IGludGVnZXIuc3Vic3RyKGkgLSAzLCA0KSA9PT0gJzAwMDAnLFxyXG4gICAgICAgIGRlc2NNYXJrID0gY25EZXNjO1xyXG4gICAgICBsZXQgY25OdW0gPSB1bml0Lm51bVtuXTtcclxuXHJcbiAgICAgIGNuRGVzYyA9IGlzRW1wcHR5VW5pdCA/ICcnIDogdW5pdC5yYWRpY2Vbal07XHJcbiAgICAgIC8vIMOnwqzCrMOkwrjCgMOkwr3CjcOmwpjCr8OkwrjCgMOlwo3CgVxyXG4gICAgICBpZiAoaSA9PT0gMCAmJiBjbk51bSA9PT0gJ8OkwrjCgCcgJiYgY25EZXNjID09PSAnw6XCjcKBJykgY25OdW0gPSAnJztcclxuICAgICAgY29uc3QgaXNDaGFuZ2VFciA9XHJcbiAgICAgICAgbiA+IDEgJiZcclxuICAgICAgICBjbk51bSA9PT0gJ8OkwrrCjCcgJiYgLy8gw6XCjsK7w6nCmcKkw6nCpsKWw6TCvcKNXHJcbiAgICAgICAgWycnLCAnw6XCjcKBJywgJ8OnwpnCviddLmluZGV4T2YoY25EZXNjKSA9PT0gLTEgJiYgLy8gw6TCuMKNw6jCr8K7w6TCuMKkXFzDpMK4wqTDpcKNwoFcXMOkwrjCpMOnwpnCvlxyXG4gICAgICAgIGRlc2NNYXJrICE9PSAnw6XCjcKBJzsgLy8gw6TCuMKNw6jCr8K7w6XCjcKBw6TCuMKkXHJcbiAgICAgIGlmIChpc0NoYW5nZUVyKSBjbk51bSA9ICfDpMK4wqQnO1xyXG4gICAgICBpbnRlZ2VyUmVzICs9IGNuWmVybyArIGNuTnVtICsgY25EZXNjO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gw6XCsMKPw6bClcKww6nCg8Kow6XCiMKGw6bCi8K8w6bCjsKlXHJcbiAgbGV0IGRlY2ltYWxSZXMgPSAnJztcclxuICBjb25zdCBkZWNpbWFsQ291bnQgPSBkZWNpbWFsID8gZGVjaW1hbC50b1N0cmluZygpLmxlbmd0aCA6IDA7XHJcbiAgaWYgKGRlY2ltYWwgPT09IG51bGwpIHtcclxuICAgIGRlY2ltYWxSZXMgPSBybWIgPyAnw6bClcK0JyA6ICcnO1xyXG4gIH0gZWxzZSBpZiAoZGVjaW1hbCA9PT0gJzAnKSB7XHJcbiAgICBkZWNpbWFsUmVzID0gJ8OpwpvCtic7XHJcbiAgfSBlbHNlIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVjaW1hbENvdW50OyBpKyspIHtcclxuICAgICAgaWYgKHJtYiAmJiBpID4gdW5pdC5kZWMubGVuZ3RoIC0gMSkgYnJlYWs7XHJcbiAgICAgIGNvbnN0IG4gPSBkZWNpbWFsW2ldLFxyXG4gICAgICAgIGNuWmVybyA9IG4gPT09ICcwJyA/ICfDqcKbwrYnIDogJycsXHJcbiAgICAgICAgY25OdW0gPSB1bml0Lm51bVtuXSxcclxuICAgICAgICBjbkRlc2MgPSBybWIgPyB1bml0LmRlY1tpXSA6ICcnO1xyXG4gICAgICBkZWNpbWFsUmVzICs9IGNuWmVybyArIGNuTnVtICsgY25EZXNjO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCByZXQgPVxyXG4gICAgc3ltYm9sICtcclxuICAgIChybWJcclxuICAgICAgPyBpbnRlZ2VyUmVzICsgKGRlY2ltYWxSZXMgPT09ICfDqcKbwrYnID8gJ8OlwoXCg8OmwpXCtCcgOiBgw6XChcKDJHtkZWNpbWFsUmVzfWApXHJcbiAgICAgIDogaW50ZWdlclJlcyArIChkZWNpbWFsUmVzID09PSAnJyA/ICcnIDogYMOnwoLCuSR7ZGVjaW1hbFJlc31gKSk7XHJcbiAgcmV0dXJuIHJldDtcclxufVxyXG4iLCJpbXBvcnQgeyBQaXBlVHJhbnNmb3JtLCBQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG51bWJlclRvQ2hpbmVzZSB9IGZyb20gJy4vbnVtYmVyLXRvLWNoaW5lc2UnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnbjJjJyB9KVxyXG5leHBvcnQgY2xhc3MgTmFOdW1iZXJUb0NoaW5lc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKFxyXG4gICAgdmFsdWU6IG51bWJlciB8IHN0cmluZyxcclxuICAgIHJtYjogYm9vbGVhbiA9IHRydWUsXHJcbiAgICBtaW51c1N5bWJvbDogc3RyaW5nID0gJ8OowrTCnycsXHJcbiAgKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBudW1iZXJUb0NoaW5lc2UodmFsdWUsIHJtYiwgeyBtaW51c1N5bWJvbCB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IE5hTnVtYmVyVG9DaGluZXNlUGlwZSB9IGZyb20gJy4vbnVtYmVyLXRvLWNoaW5lc2UucGlwZSc7XHJcblxyXG5jb25zdCBQSVBFUyA9IFtOYU51bWJlclRvQ2hpbmVzZVBpcGVdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFBJUEVTLFxyXG4gIGV4cG9ydHM6IFBJUEVTLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyVG9DaGluZXNlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBOdW1iZXJUb0NoaW5lc2VNb2R1bGUsIHByb3ZpZGVyczogW10g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