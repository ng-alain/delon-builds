import { Pipe, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @deprecated Will be removed in 12.0.0, Pls used `CurrencyService.cny` instead
 */
function numberToChinese(value, rmb = true, options) {
    options = Object.assign({ minusSymbol: '负', validThrow: false }, options);
    if (typeof value === 'number')
        value = value.toString();
    if (!/^-?\d+(\.\d+)?$/.test(value) && options.validThrow)
        throw new Error(`${value} is invalid number type`);
    let integer;
    let decimal;
    [integer, decimal] = value.split('.');
    let symbol = '';
    if (integer.startsWith('-')) {
        symbol = options.minusSymbol;
        integer = integer.substr(1);
    }
    if (/^-?\d+$/.test(value))
        decimal = null;
    integer = (+integer).toString();
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
                '仟'
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
                '千'
            ],
        dec: ['角', '分', '厘', '毫']
    };
    if (rmb)
        value = (+value).toFixed(5).toString();
    let integerRes = '';
    const integerCount = integer.length;
    if (integer === '0' || integerCount === 0) {
        integerRes = '零';
    }
    else {
        let cnDesc = '';
        for (let i = 0; i < integerCount; i++) {
            const n = +integer[i];
            const j = integerCount - i - 1;
            const isZero = i > 1 && n !== 0 && integer[i - 1] === '0';
            const cnZero = isZero ? '零' : '';
            const isEmpptyUnit = (n === 0 && j % 4 !== 0) || integer.substr(i - 3, 4) === '0000';
            const descMark = cnDesc;
            let cnNum = unit.num[n];
            cnDesc = isEmpptyUnit ? '' : unit.radice[j];
            // 第一位是一十
            if (i === 0 && cnNum === '一' && cnDesc === '十')
                cnNum = '';
            const isChangeEr = n > 1 &&
                cnNum === '二' && // 去除首位
                ['', '十', '百'].indexOf(cnDesc) === -1 && // 不读两\两十\两百
                descMark !== '十'; // 不读十两
            if (isChangeEr)
                cnNum = '两';
            integerRes += cnZero + cnNum + cnDesc;
        }
    }
    // 小数部分拼接
    let decimalRes = '';
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
            const n = decimal[i];
            const cnZero = n === '0' ? '零' : '';
            const cnNum = unit.num[n];
            const cnDesc = rmb ? unit.dec[i] : '';
            decimalRes += cnZero + cnNum + cnDesc;
        }
    }
    const ret = symbol +
        (rmb
            ? integerRes + (decimalRes === '零' ? '元整' : `元${decimalRes}`)
            : integerRes + (decimalRes === '' ? '' : `点${decimalRes}`));
    return ret;
}

/**
 *  @deprecated Will be removed in 12.0.0, Pls used [cny](/util/pipes-currency/zh#cny) pipe instead
 */
class NaNumberToChinesePipe {
    transform(value, rmb = true, minusSymbol = '负') {
        return numberToChinese(value, rmb, { minusSymbol });
    }
}
NaNumberToChinesePipe.decorators = [
    { type: Pipe, args: [{ name: 'n2c' },] }
];

const PIPES = [NaNumberToChinesePipe];
/**
 * @deprecated Will be removed in 12.0.0, Pls used `CurrencyService.cny` instead
 */
class NumberToChineseModule {
}
NumberToChineseModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: PIPES,
                exports: PIPES
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { NaNumberToChinesePipe, NumberToChineseModule, numberToChinese };
//# sourceMappingURL=numberToChinese.js.map
