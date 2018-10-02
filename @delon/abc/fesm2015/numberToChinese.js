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
function numberToChinese(value, rmb = true, options) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NaNumberToChinesePipe {
    /**
     * @param {?} value
     * @param {?=} rmb
     * @param {?=} minusSymbol
     * @return {?}
     */
    transform(value, rmb = true, minusSymbol = '负') {
        return numberToChinese(value, rmb, { minusSymbol });
    }
}
NaNumberToChinesePipe.decorators = [
    { type: Pipe, args: [{ name: 'n2c' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const PIPES = [NaNumberToChinesePipe];
class NumberToChineseModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: NumberToChineseModule, providers: [] };
    }
}
NumberToChineseModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: PIPES,
                exports: PIPES,
            },] }
];

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