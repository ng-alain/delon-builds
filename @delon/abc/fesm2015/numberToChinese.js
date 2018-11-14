import { Pipe, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { numberToChinese, NaNumberToChinesePipe, NumberToChineseModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyVG9DaGluZXNlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL251bWJlci10by1jaGluZXNlL251bWJlci10by1jaGluZXNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL251bWJlci10by1jaGluZXNlL251bWJlci10by1jaGluZXNlLnBpcGUudHMiLCJuZzovL0BkZWxvbi9hYmMvbnVtYmVyLXRvLWNoaW5lc2UvbnVtYmVyLXRvLWNoaW5lc2UubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE51bWJlclRvQ2hpbmVzZU9wdGlvbnMgfSBmcm9tICcuL251bWJlci10by1jaGluZXNlLmludGVyZmFjZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyVG9DaGluZXNlKFxuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLFxuICBybWIgPSB0cnVlLFxuICBvcHRpb25zPzogTnVtYmVyVG9DaGluZXNlT3B0aW9ucyxcbik6IHN0cmluZyB7XG4gIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgIHtcbiAgICAgIG1pbnVzU3ltYm9sOiAnw6jCtMKfJyxcbiAgICAgIHZhbGlkVGhyb3c6IGZhbHNlLFxuICAgIH0sXG4gICAgb3B0aW9ucyxcbiAgKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgaWYgKCEvXi0/XFxkKyhcXC5cXGQrKT8kLy50ZXN0KHZhbHVlKSAmJiBvcHRpb25zLnZhbGlkVGhyb3cpXG4gICAgdGhyb3cgbmV3IEVycm9yKGAke3ZhbHVlfSBpcyBpbnZhbGlkIG51bWJlciB0eXBlYCk7XG4gIGxldCBpbnRlZ2VyOiBudW1iZXIgfCBzdHJpbmcsIGRlY2ltYWw6IG51bWJlciB8IHN0cmluZztcbiAgW2ludGVnZXIsIGRlY2ltYWxdID0gdmFsdWUuc3BsaXQoJy4nKTtcbiAgbGV0IHN5bWJvbCA9ICcnO1xuICBpZiAoaW50ZWdlci5zdGFydHNXaXRoKCctJykpIHtcbiAgICBzeW1ib2wgPSBvcHRpb25zLm1pbnVzU3ltYm9sO1xuICAgIGludGVnZXIgPSBpbnRlZ2VyLnN1YnN0cigxKTtcbiAgfVxuICBpZiAoL14tP1xcZCskLy50ZXN0KHZhbHVlKSkgZGVjaW1hbCA9IG51bGw7XG4gIGludGVnZXIgPSAoK2ludGVnZXIpLnRvU3RyaW5nKCk7XG4gIGNvbnN0IHVuaXQgPSB7XG4gICAgbnVtOiBybWJcbiAgICAgID8gWycnLCAnw6XCo8K5JywgJ8OowrTCsCcsICfDpcKPwoEnLCAnw6jCgsKGJywgJ8OkwrzCjScsICfDqcKZwoYnLCAnw6bCn8KSJywgJ8Omwo3CjCcsICfDp8KOwpYnLCAnw6fCgsK5J11cbiAgICAgIDogWycnLCAnw6TCuMKAJywgJ8OkwrrCjCcsICfDpMK4woknLCAnw6XCm8KbJywgJ8OkwrrClCcsICfDpcKFwq0nLCAnw6TCuMKDJywgJ8OlwoXCqycsICfDpMK5wp0nLCAnw6fCgsK5J10sXG4gICAgcmFkaWNlOiBybWJcbiAgICAgID8gW1xuICAgICAgICAgICcnLFxuICAgICAgICAgICfDpsKLwr4nLFxuICAgICAgICAgICfDpMK9wrAnLFxuICAgICAgICAgICfDpMK7wp8nLFxuICAgICAgICAgICfDpMK4wocnLFxuICAgICAgICAgICfDpsKLwr4nLFxuICAgICAgICAgICfDpMK9wrAnLFxuICAgICAgICAgICfDpMK7wp8nLFxuICAgICAgICAgICfDpMK6wr8nLFxuICAgICAgICAgICfDpsKLwr4nLFxuICAgICAgICAgICfDpMK9wrAnLFxuICAgICAgICAgICfDpMK7wp8nLFxuICAgICAgICAgICfDpMK4wofDpMK6wr8nLFxuICAgICAgICAgICfDpsKLwr4nLFxuICAgICAgICAgICfDpMK9wrAnLFxuICAgICAgICAgICfDpMK7wp8nLFxuICAgICAgICAgICfDpcKFwoYnLFxuICAgICAgICAgICfDpsKLwr4nLFxuICAgICAgICAgICfDpMK9wrAnLFxuICAgICAgICAgICfDpMK7wp8nLFxuICAgICAgICBdXG4gICAgICA6IFtcbiAgICAgICAgICAnJyxcbiAgICAgICAgICAnw6XCjcKBJyxcbiAgICAgICAgICAnw6fCmcK+JyxcbiAgICAgICAgICAnw6XCjcKDJyxcbiAgICAgICAgICAnw6TCuMKHJyxcbiAgICAgICAgICAnw6XCjcKBJyxcbiAgICAgICAgICAnw6fCmcK+JyxcbiAgICAgICAgICAnw6XCjcKDJyxcbiAgICAgICAgICAnw6TCusK/JyxcbiAgICAgICAgICAnw6XCjcKBJyxcbiAgICAgICAgICAnw6fCmcK+JyxcbiAgICAgICAgICAnw6XCjcKDJyxcbiAgICAgICAgICAnw6TCuMKHw6TCusK/JyxcbiAgICAgICAgICAnw6XCjcKBJyxcbiAgICAgICAgICAnw6fCmcK+JyxcbiAgICAgICAgICAnw6XCjcKDJyxcbiAgICAgICAgICAnw6XChcKGJyxcbiAgICAgICAgICAnw6XCjcKBJyxcbiAgICAgICAgICAnw6fCmcK+JyxcbiAgICAgICAgICAnw6XCjcKDJyxcbiAgICAgICAgXSxcbiAgICBkZWM6IFsnw6jCp8KSJywgJ8OlwojChicsICfDpcKOwpgnLCAnw6bCr8KrJ10sXG4gIH07XG4gIGlmIChybWIpIHZhbHVlID0gKCt2YWx1ZSkudG9GaXhlZCg1KS50b1N0cmluZygpO1xuICBsZXQgaW50ZWdlclJlcyA9ICcnO1xuICBjb25zdCBpbnRlZ2VyQ291bnQgPSBpbnRlZ2VyLmxlbmd0aDtcbiAgaWYgKGludGVnZXIgPT09ICcwJyB8fCBpbnRlZ2VyQ291bnQgPT09IDApIHtcbiAgICBpbnRlZ2VyUmVzID0gJ8OpwpvCtic7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGNuRGVzYyA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZWdlckNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IG4gPSAraW50ZWdlcltpXSxcbiAgICAgICAgaiA9IGludGVnZXJDb3VudCAtIGkgLSAxLFxuICAgICAgICBpc1plcm8gPSBpID4gMSAmJiBuICE9PSAwICYmIGludGVnZXJbaSAtIDFdID09PSAnMCcsXG4gICAgICAgIGNuWmVybyA9IGlzWmVybyA/ICfDqcKbwrYnIDogJycsXG4gICAgICAgIGlzRW1wcHR5VW5pdCA9XG4gICAgICAgICAgKG4gPT09IDAgJiYgaiAlIDQgIT09IDApIHx8IGludGVnZXIuc3Vic3RyKGkgLSAzLCA0KSA9PT0gJzAwMDAnLFxuICAgICAgICBkZXNjTWFyayA9IGNuRGVzYztcbiAgICAgIGxldCBjbk51bSA9IHVuaXQubnVtW25dO1xuXG4gICAgICBjbkRlc2MgPSBpc0VtcHB0eVVuaXQgPyAnJyA6IHVuaXQucmFkaWNlW2pdO1xuICAgICAgLy8gw6fCrMKsw6TCuMKAw6TCvcKNw6bCmMKvw6TCuMKAw6XCjcKBXG4gICAgICBpZiAoaSA9PT0gMCAmJiBjbk51bSA9PT0gJ8OkwrjCgCcgJiYgY25EZXNjID09PSAnw6XCjcKBJykgY25OdW0gPSAnJztcbiAgICAgIGNvbnN0IGlzQ2hhbmdlRXIgPVxuICAgICAgICBuID4gMSAmJlxuICAgICAgICBjbk51bSA9PT0gJ8OkwrrCjCcgJiYgLy8gw6XCjsK7w6nCmcKkw6nCpsKWw6TCvcKNXG4gICAgICAgIFsnJywgJ8Olwo3CgScsICfDp8KZwr4nXS5pbmRleE9mKGNuRGVzYykgPT09IC0xICYmIC8vIMOkwrjCjcOowq/Cu8OkwrjCpFxcw6TCuMKkw6XCjcKBXFzDpMK4wqTDp8KZwr5cbiAgICAgICAgZGVzY01hcmsgIT09ICfDpcKNwoEnOyAvLyDDpMK4wo3DqMKvwrvDpcKNwoHDpMK4wqRcbiAgICAgIGlmIChpc0NoYW5nZUVyKSBjbk51bSA9ICfDpMK4wqQnO1xuICAgICAgaW50ZWdlclJlcyArPSBjblplcm8gKyBjbk51bSArIGNuRGVzYztcbiAgICB9XG4gIH1cblxuICAvLyDDpcKwwo/DpsKVwrDDqcKDwqjDpcKIwobDpsKLwrzDpsKOwqVcbiAgbGV0IGRlY2ltYWxSZXMgPSAnJztcbiAgY29uc3QgZGVjaW1hbENvdW50ID0gZGVjaW1hbCA/IGRlY2ltYWwudG9TdHJpbmcoKS5sZW5ndGggOiAwO1xuICBpZiAoZGVjaW1hbCA9PT0gbnVsbCkge1xuICAgIGRlY2ltYWxSZXMgPSBybWIgPyAnw6bClcK0JyA6ICcnO1xuICB9IGVsc2UgaWYgKGRlY2ltYWwgPT09ICcwJykge1xuICAgIGRlY2ltYWxSZXMgPSAnw6nCm8K2JztcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlY2ltYWxDb3VudDsgaSsrKSB7XG4gICAgICBpZiAocm1iICYmIGkgPiB1bml0LmRlYy5sZW5ndGggLSAxKSBicmVhaztcbiAgICAgIGNvbnN0IG4gPSBkZWNpbWFsW2ldLFxuICAgICAgICBjblplcm8gPSBuID09PSAnMCcgPyAnw6nCm8K2JyA6ICcnLFxuICAgICAgICBjbk51bSA9IHVuaXQubnVtW25dLFxuICAgICAgICBjbkRlc2MgPSBybWIgPyB1bml0LmRlY1tpXSA6ICcnO1xuICAgICAgZGVjaW1hbFJlcyArPSBjblplcm8gKyBjbk51bSArIGNuRGVzYztcbiAgICB9XG4gIH1cbiAgY29uc3QgcmV0ID1cbiAgICBzeW1ib2wgK1xuICAgIChybWJcbiAgICAgID8gaW50ZWdlclJlcyArIChkZWNpbWFsUmVzID09PSAnw6nCm8K2JyA/ICfDpcKFwoPDpsKVwrQnIDogYMOlwoXCgyR7ZGVjaW1hbFJlc31gKVxuICAgICAgOiBpbnRlZ2VyUmVzICsgKGRlY2ltYWxSZXMgPT09ICcnID8gJycgOiBgw6fCgsK5JHtkZWNpbWFsUmVzfWApKTtcbiAgcmV0dXJuIHJldDtcbn1cbiIsImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0sIFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG51bWJlclRvQ2hpbmVzZSB9IGZyb20gJy4vbnVtYmVyLXRvLWNoaW5lc2UnO1xuXG5AUGlwZSh7IG5hbWU6ICduMmMnIH0pXG5leHBvcnQgY2xhc3MgTmFOdW1iZXJUb0NoaW5lc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShcbiAgICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLFxuICAgIHJtYjogYm9vbGVhbiA9IHRydWUsXG4gICAgbWludXNTeW1ib2w6IHN0cmluZyA9ICfDqMK0wp8nLFxuICApOiBzdHJpbmcge1xuICAgIHJldHVybiBudW1iZXJUb0NoaW5lc2UodmFsdWUsIHJtYiwgeyBtaW51c1N5bWJvbCB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5hTnVtYmVyVG9DaGluZXNlUGlwZSB9IGZyb20gJy4vbnVtYmVyLXRvLWNoaW5lc2UucGlwZSc7XG5cbmNvbnN0IFBJUEVTID0gW05hTnVtYmVyVG9DaGluZXNlUGlwZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFBJUEVTLFxuICBleHBvcnRzOiBQSVBFUyxcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyVG9DaGluZXNlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IE51bWJlclRvQ2hpbmVzZU1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBZ0IsZUFBZSxDQUM3QixLQUFzQixFQUN0QixHQUFHLEdBQUcsSUFBSSxFQUNWLE9BQWdDO0lBRWhDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUNyQjtRQUNFLFdBQVcsRUFBRSxHQUFHO1FBQ2hCLFVBQVUsRUFBRSxLQUFLO0tBQ2xCLEVBQ0QsT0FBTyxDQUNSLENBQUM7SUFDRixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVE7UUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hELElBQUksQ0FBQyxpQkFBaUIsQ0FB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