/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value
 * @param {?=} rmb
 * @param {?=} options
 * @return {?}
 */
export function numberToChinese(value, rmb = true, options) {
    options = Object.assign({ minusSymbol: '负', validThrow: false }, options);
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
        symbol = (/** @type {?} */ (options.minusSymbol));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRvLWNoaW5lc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL251bWJlci10by1jaGluZXNlLyIsInNvdXJjZXMiOlsibnVtYmVyLXRvLWNoaW5lc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLE1BQU0sVUFBVSxlQUFlLENBQUMsS0FBc0IsRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLE9BQWdDO0lBQ2xHLE9BQU8sbUJBQ0wsV0FBVyxFQUFFLEdBQUcsRUFDaEIsVUFBVSxFQUFFLEtBQUssSUFDZCxPQUFPLENBQ1gsQ0FBQztJQUNGLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtRQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDeEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVTtRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLHlCQUF5QixDQUFDLENBQUM7O1FBQ3pHLE9BQXdCOztRQUN4QixPQUErQjtJQUNuQyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztRQUNsQyxNQUFNLEdBQUcsRUFBRTtJQUNmLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUMzQixNQUFNLEdBQUcsbUJBQUEsT0FBTyxDQUFDLFdBQVcsRUFBQyxDQUFDO1FBQzlCLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdCO0lBQ0QsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDMUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7VUFDMUIsSUFBSSxHQUFHO1FBQ1gsR0FB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QUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDckMsVUFBVSxJQUFJLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO1NBQ3ZDO0tBQ0Y7O1VBQ0ssR0FBRyxHQUNQLE1BQU07UUFDTixDQUFDLEdBQUc7WUFDRixDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQzdELENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQztJQUMvRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOdW1iZXJUb0NoaW5lc2VPcHRpb25zIH0gZnJvbSAnLi9udW1iZXItdG8tY2hpbmVzZS5pbnRlcmZhY2VzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlclRvQ2hpbmVzZSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBybWIgPSB0cnVlLCBvcHRpb25zPzogTnVtYmVyVG9DaGluZXNlT3B0aW9ucyk6IHN0cmluZyB7XG4gIG9wdGlvbnMgPSB7XG4gICAgbWludXNTeW1ib2w6ICfotJ8nLFxuICAgIHZhbGlkVGhyb3c6IGZhbHNlLFxuICAgIC4uLm9wdGlvbnMsXG4gIH07XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gIGlmICghL14tP1xcZCsoXFwuXFxkKyk/JC8udGVzdCh2YWx1ZSkgJiYgb3B0aW9ucy52YWxpZFRocm93KSB0aHJvdyBuZXcgRXJyb3IoYCR7dmFsdWV9IGlzIGludmFsaWQgbnVtYmVyIHR5cGVgKTtcbiAgbGV0IGludGVnZXI6IG51bWJlciB8IHN0cmluZztcbiAgbGV0IGRlY2ltYWw6IG51bWJlciB8IHN0cmluZyB8IG51bGw7XG4gIFtpbnRlZ2VyLCBkZWNpbWFsXSA9IHZhbHVlLnNwbGl0KCcuJyk7XG4gIGxldCBzeW1ib2wgPSAnJztcbiAgaWYgKGludGVnZXIuc3RhcnRzV2l0aCgnLScpKSB7XG4gICAgc3ltYm9sID0gb3B0aW9ucy5taW51c1N5bWJvbCE7XG4gICAgaW50ZWdlciA9IGludGVnZXIuc3Vic3RyKDEpO1xuICB9XG4gIGlmICgvXi0/XFxkKyQvLnRlc3QodmFsdWUpKSBkZWNpbWFsID0gbnVsbDtcbiAgaW50ZWdlciA9ICgraW50ZWdlcikudG9TdHJpbmcoKTtcbiAgY29uc3QgdW5pdCA9IHtcbiAgICBudW06IHJtYlxuICAgICAgPyBbJycsICflo7knLCAn6LSwJywgJ+WPgScsICfogoYnLCAn5LyNJywgJ+mZhicsICfmn5InLCAn5o2MJywgJ+eOlicsICfngrknXVxuICAgICAgOiBbJycsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrScsICfkuIMnLCAn5YWrJywgJ+S5nScsICfngrknXSxcbiAgICByYWRpY2U6IHJtYlxuICAgICAgPyBbXG4gICAgICAgICAgJycsXG4gICAgICAgICAgJ+aLvicsXG4gICAgICAgICAgJ+S9sCcsXG4gICAgICAgICAgJ+S7nycsXG4gICAgICAgICAgJ+S4hycsXG4gICAgICAgICAgJ+aLvicsXG4gICAgICAgICAgJ+S9sCcsXG4gICAgICAgICAgJ+S7nycsXG4gICAgICAgICAgJ+S6vycsXG4gICAgICAgICAgJ+aLvicsXG4gICAgICAgICAgJ+S9sCcsXG4gICAgICAgICAgJ+S7nycsXG4gICAgICAgICAgJ+S4h+S6vycsXG4gICAgICAgICAgJ+aLvicsXG4gICAgICAgICAgJ+S9sCcsXG4gICAgICAgICAgJ+S7nycsXG4gICAgICAgICAgJ+WFhicsXG4gICAgICAgICAgJ+aLvicsXG4gICAgICAgICAgJ+S9sCcsXG4gICAgICAgICAgJ+S7nycsXG4gICAgICAgIF1cbiAgICAgIDogW1xuICAgICAgICAgICcnLFxuICAgICAgICAgICfljYEnLFxuICAgICAgICAgICfnmb4nLFxuICAgICAgICAgICfljYMnLFxuICAgICAgICAgICfkuIcnLFxuICAgICAgICAgICfljYEnLFxuICAgICAgICAgICfnmb4nLFxuICAgICAgICAgICfljYMnLFxuICAgICAgICAgICfkur8nLFxuICAgICAgICAgICfljYEnLFxuICAgICAgICAgICfnmb4nLFxuICAgICAgICAgICfljYMnLFxuICAgICAgICAgICfkuIfkur8nLFxuICAgICAgICAgICfljYEnLFxuICAgICAgICAgICfnmb4nLFxuICAgICAgICAgICfljYMnLFxuICAgICAgICAgICflhYYnLFxuICAgICAgICAgICfljYEnLFxuICAgICAgICAgICfnmb4nLFxuICAgICAgICAgICfljYMnLFxuICAgICAgICBdLFxuICAgIGRlYzogWyfop5InLCAn5YiGJywgJ+WOmCcsICfmr6snXSxcbiAgfTtcbiAgaWYgKHJtYikgdmFsdWUgPSAoK3ZhbHVlKS50b0ZpeGVkKDUpLnRvU3RyaW5nKCk7XG4gIGxldCBpbnRlZ2VyUmVzID0gJyc7XG4gIGNvbnN0IGludGVnZXJDb3VudCA9IGludGVnZXIubGVuZ3RoO1xuICBpZiAoaW50ZWdlciA9PT0gJzAnIHx8IGludGVnZXJDb3VudCA9PT0gMCkge1xuICAgIGludGVnZXJSZXMgPSAn6Zu2JztcbiAgfSBlbHNlIHtcbiAgICBsZXQgY25EZXNjID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlZ2VyQ291bnQ7IGkrKykge1xuICAgICAgY29uc3QgbiA9ICtpbnRlZ2VyW2ldO1xuICAgICAgY29uc3QgaiA9IGludGVnZXJDb3VudCAtIGkgLSAxO1xuICAgICAgY29uc3QgaXNaZXJvID0gaSA+IDEgJiYgbiAhPT0gMCAmJiBpbnRlZ2VyW2kgLSAxXSA9PT0gJzAnO1xuICAgICAgY29uc3QgY25aZXJvID0gaXNaZXJvID8gJ+mbticgOiAnJztcbiAgICAgIGNvbnN0IGlzRW1wcHR5VW5pdCA9IChuID09PSAwICYmIGogJSA0ICE9PSAwKSB8fCBpbnRlZ2VyLnN1YnN0cihpIC0gMywgNCkgPT09ICcwMDAwJztcbiAgICAgIGNvbnN0IGRlc2NNYXJrID0gY25EZXNjO1xuICAgICAgbGV0IGNuTnVtID0gdW5pdC5udW1bbl07XG5cbiAgICAgIGNuRGVzYyA9IGlzRW1wcHR5VW5pdCA/ICcnIDogdW5pdC5yYWRpY2Vbal07XG4gICAgICAvLyDnrKzkuIDkvY3mmK/kuIDljYFcbiAgICAgIGlmIChpID09PSAwICYmIGNuTnVtID09PSAn5LiAJyAmJiBjbkRlc2MgPT09ICfljYEnKSBjbk51bSA9ICcnO1xuICAgICAgY29uc3QgaXNDaGFuZ2VFciA9XG4gICAgICAgIG4gPiAxICYmXG4gICAgICAgIGNuTnVtID09PSAn5LqMJyAmJiAvLyDljrvpmaTpppbkvY1cbiAgICAgICAgWycnLCAn5Y2BJywgJ+eZviddLmluZGV4T2YoY25EZXNjKSA9PT0gLTEgJiYgLy8g5LiN6K+75LikXFzkuKTljYFcXOS4pOeZvlxuICAgICAgICBkZXNjTWFyayAhPT0gJ+WNgSc7IC8vIOS4jeivu+WNgeS4pFxuICAgICAgaWYgKGlzQ2hhbmdlRXIpIGNuTnVtID0gJ+S4pCc7XG4gICAgICBpbnRlZ2VyUmVzICs9IGNuWmVybyArIGNuTnVtICsgY25EZXNjO1xuICAgIH1cbiAgfVxuXG4gIC8vIOWwj+aVsOmDqOWIhuaLvOaOpVxuICBsZXQgZGVjaW1hbFJlcyA9ICcnO1xuICBjb25zdCBkZWNpbWFsQ291bnQgPSBkZWNpbWFsID8gZGVjaW1hbC50b1N0cmluZygpLmxlbmd0aCA6IDA7XG4gIGlmIChkZWNpbWFsID09PSBudWxsKSB7XG4gICAgZGVjaW1hbFJlcyA9IHJtYiA/ICfmlbQnIDogJyc7XG4gIH0gZWxzZSBpZiAoZGVjaW1hbCA9PT0gJzAnKSB7XG4gICAgZGVjaW1hbFJlcyA9ICfpm7YnO1xuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVjaW1hbENvdW50OyBpKyspIHtcbiAgICAgIGlmIChybWIgJiYgaSA+IHVuaXQuZGVjLmxlbmd0aCAtIDEpIGJyZWFrO1xuICAgICAgY29uc3QgbiA9IGRlY2ltYWxbaV07XG4gICAgICBjb25zdCBjblplcm8gPSBuID09PSAnMCcgPyAn6Zu2JyA6ICcnO1xuICAgICAgY29uc3QgY25OdW0gPSB1bml0Lm51bVtuXTtcbiAgICAgIGNvbnN0IGNuRGVzYyA9IHJtYiA/IHVuaXQuZGVjW2ldIDogJyc7XG4gICAgICBkZWNpbWFsUmVzICs9IGNuWmVybyArIGNuTnVtICsgY25EZXNjO1xuICAgIH1cbiAgfVxuICBjb25zdCByZXQgPVxuICAgIHN5bWJvbCArXG4gICAgKHJtYlxuICAgICAgPyBpbnRlZ2VyUmVzICsgKGRlY2ltYWxSZXMgPT09ICfpm7YnID8gJ+WFg+aVtCcgOiBg5YWDJHtkZWNpbWFsUmVzfWApXG4gICAgICA6IGludGVnZXJSZXMgKyAoZGVjaW1hbFJlcyA9PT0gJycgPyAnJyA6IGDngrkke2RlY2ltYWxSZXN9YCkpO1xuICByZXR1cm4gcmV0O1xufVxuIl19