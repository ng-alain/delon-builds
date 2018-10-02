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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRvLWNoaW5lc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL251bWJlci10by1jaGluZXNlLyIsInNvdXJjZXMiOlsibnVtYmVyLXRvLWNoaW5lc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLE1BQU0sMEJBQ0osS0FBc0IsRUFDdEIsR0FBRyxHQUFHLElBQUksRUFDVixPQUFnQztJQUVoQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDckI7UUFDRSxXQUFXLEVBQUUsR0FBRztRQUNoQixVQUFVLEVBQUUsS0FBSztLQUNsQixFQUNELE9BQU8sQ0FDUixDQUFDO0lBQ0YsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRO1FBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFVO1FBQ3RELE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLHlCQUF5QixDQUFDLENBQUM7O0lBQ3JELElBQUksT0FBTyxDQUE0Qzs7SUFBdkQsSUFBOEIsT0FBTyxDQUFrQjtJQUN2RCxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztJQUN0QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDaEIsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQzNCLE1BQU0sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQzdCLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdCO0lBQ0QsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDMUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMs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QUFNLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBR2M7O1lBSGxDLE1BQ0UsTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUVHOztZQUhsQyxNQUVFLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUNhOztZQUhsQyxNQUdFLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNsQyxVQUFVLElBQUksTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7U0FDdkM7S0FDRjs7SUFDRCxNQUFNLEdBQUcsR0FDUCxNQUFNO1FBQ04sQ0FBQyxHQUFHO1lBQ0YsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLFVBQVUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUM3RCxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRSxPQUFPLEdBQUcsQ0FBQztDQUNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTnVtYmVyVG9DaGluZXNlT3B0aW9ucyB9IGZyb20gJy4vbnVtYmVyLXRvLWNoaW5lc2UuaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyVG9DaGluZXNlKFxyXG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgcm1iID0gdHJ1ZSxcclxuICBvcHRpb25zPzogTnVtYmVyVG9DaGluZXNlT3B0aW9ucyxcclxuKTogc3RyaW5nIHtcclxuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcclxuICAgIHtcclxuICAgICAgbWludXNTeW1ib2w6ICfotJ8nLFxyXG4gICAgICB2YWxpZFRocm93OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBvcHRpb25zLFxyXG4gICk7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICBpZiAoIS9eLT9cXGQrKFxcLlxcZCspPyQvLnRlc3QodmFsdWUpICYmIG9wdGlvbnMudmFsaWRUaHJvdylcclxuICAgIHRocm93IG5ldyBFcnJvcihgJHt2YWx1ZX0gaXMgaW52YWxpZCBudW1iZXIgdHlwZWApO1xyXG4gIGxldCBpbnRlZ2VyOiBudW1iZXIgfCBzdHJpbmcsIGRlY2ltYWw6IG51bWJlciB8IHN0cmluZztcclxuICBbaW50ZWdlciwgZGVjaW1hbF0gPSB2YWx1ZS5zcGxpdCgnLicpO1xyXG4gIGxldCBzeW1ib2wgPSAnJztcclxuICBpZiAoaW50ZWdlci5zdGFydHNXaXRoKCctJykpIHtcclxuICAgIHN5bWJvbCA9IG9wdGlvbnMubWludXNTeW1ib2w7XHJcbiAgICBpbnRlZ2VyID0gaW50ZWdlci5zdWJzdHIoMSk7XHJcbiAgfVxyXG4gIGlmICgvXi0/XFxkKyQvLnRlc3QodmFsdWUpKSBkZWNpbWFsID0gbnVsbDtcclxuICBpbnRlZ2VyID0gKCtpbnRlZ2VyKS50b1N0cmluZygpO1xyXG4gIGNvbnN0IHVuaXQgPSB7XHJcbiAgICBudW06IHJtYlxyXG4gICAgICA/IFsnJywgJ+WjuScsICfotLAnLCAn5Y+BJywgJ+iChicsICfkvI0nLCAn6ZmGJywgJ+afkicsICfmjYwnLCAn546WJywgJ+eCuSddXHJcbiAgICAgIDogWycnLCAn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nLCAn5LiDJywgJ+WFqycsICfkuZ0nLCAn54K5J10sXHJcbiAgICByYWRpY2U6IHJtYlxyXG4gICAgICA/IFtcclxuICAgICAgICAgICcnLFxyXG4gICAgICAgICAgJ+aLvicsXHJcbiAgICAgICAgICAn5L2wJyxcclxuICAgICAgICAgICfku58nLFxyXG4gICAgICAgICAgJ+S4hycsXHJcbiAgICAgICAgICAn5ou+JyxcclxuICAgICAgICAgICfkvbAnLFxyXG4gICAgICAgICAgJ+S7nycsXHJcbiAgICAgICAgICAn5Lq/JyxcclxuICAgICAgICAgICfmi74nLFxyXG4gICAgICAgICAgJ+S9sCcsXHJcbiAgICAgICAgICAn5LufJyxcclxuICAgICAgICAgICfkuIfkur8nLFxyXG4gICAgICAgICAgJ+aLvicsXHJcbiAgICAgICAgICAn5L2wJyxcclxuICAgICAgICAgICfku58nLFxyXG4gICAgICAgICAgJ+WFhicsXHJcbiAgICAgICAgICAn5ou+JyxcclxuICAgICAgICAgICfkvbAnLFxyXG4gICAgICAgICAgJ+S7nycsXHJcbiAgICAgICAgXVxyXG4gICAgICA6IFtcclxuICAgICAgICAgICcnLFxyXG4gICAgICAgICAgJ+WNgScsXHJcbiAgICAgICAgICAn55m+JyxcclxuICAgICAgICAgICfljYMnLFxyXG4gICAgICAgICAgJ+S4hycsXHJcbiAgICAgICAgICAn5Y2BJyxcclxuICAgICAgICAgICfnmb4nLFxyXG4gICAgICAgICAgJ+WNgycsXHJcbiAgICAgICAgICAn5Lq/JyxcclxuICAgICAgICAgICfljYEnLFxyXG4gICAgICAgICAgJ+eZvicsXHJcbiAgICAgICAgICAn5Y2DJyxcclxuICAgICAgICAgICfkuIfkur8nLFxyXG4gICAgICAgICAgJ+WNgScsXHJcbiAgICAgICAgICAn55m+JyxcclxuICAgICAgICAgICfljYMnLFxyXG4gICAgICAgICAgJ+WFhicsXHJcbiAgICAgICAgICAn5Y2BJyxcclxuICAgICAgICAgICfnmb4nLFxyXG4gICAgICAgICAgJ+WNgycsXHJcbiAgICAgICAgXSxcclxuICAgIGRlYzogWyfop5InLCAn5YiGJywgJ+WOmCcsICfmr6snXSxcclxuICB9O1xyXG4gIGlmIChybWIpIHZhbHVlID0gKCt2YWx1ZSkudG9GaXhlZCg1KS50b1N0cmluZygpO1xyXG4gIGxldCBpbnRlZ2VyUmVzID0gJyc7XHJcbiAgY29uc3QgaW50ZWdlckNvdW50ID0gaW50ZWdlci5sZW5ndGg7XHJcbiAgaWYgKGludGVnZXIgPT09ICcwJyB8fCBpbnRlZ2VyQ291bnQgPT09IDApIHtcclxuICAgIGludGVnZXJSZXMgPSAn6Zu2JztcclxuICB9IGVsc2Uge1xyXG4gICAgbGV0IGNuRGVzYyA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnRlZ2VyQ291bnQ7IGkrKykge1xyXG4gICAgICBjb25zdCBuID0gK2ludGVnZXJbaV0sXHJcbiAgICAgICAgaiA9IGludGVnZXJDb3VudCAtIGkgLSAxLFxyXG4gICAgICAgIGlzWmVybyA9IGkgPiAxICYmIG4gIT09IDAgJiYgaW50ZWdlcltpIC0gMV0gPT09ICcwJyxcclxuICAgICAgICBjblplcm8gPSBpc1plcm8gPyAn6Zu2JyA6ICcnLFxyXG4gICAgICAgIGlzRW1wcHR5VW5pdCA9XHJcbiAgICAgICAgICAobiA9PT0gMCAmJiBqICUgNCAhPT0gMCkgfHwgaW50ZWdlci5zdWJzdHIoaSAtIDMsIDQpID09PSAnMDAwMCcsXHJcbiAgICAgICAgZGVzY01hcmsgPSBjbkRlc2M7XHJcbiAgICAgIGxldCBjbk51bSA9IHVuaXQubnVtW25dO1xyXG5cclxuICAgICAgY25EZXNjID0gaXNFbXBwdHlVbml0ID8gJycgOiB1bml0LnJhZGljZVtqXTtcclxuICAgICAgLy8g56ys5LiA5L2N5piv5LiA5Y2BXHJcbiAgICAgIGlmIChpID09PSAwICYmIGNuTnVtID09PSAn5LiAJyAmJiBjbkRlc2MgPT09ICfljYEnKSBjbk51bSA9ICcnO1xyXG4gICAgICBjb25zdCBpc0NoYW5nZUVyID1cclxuICAgICAgICBuID4gMSAmJlxyXG4gICAgICAgIGNuTnVtID09PSAn5LqMJyAmJiAvLyDljrvpmaTpppbkvY1cclxuICAgICAgICBbJycsICfljYEnLCAn55m+J10uaW5kZXhPZihjbkRlc2MpID09PSAtMSAmJiAvLyDkuI3or7vkuKRcXOS4pOWNgVxc5Lik55m+XHJcbiAgICAgICAgZGVzY01hcmsgIT09ICfljYEnOyAvLyDkuI3or7vljYHkuKRcclxuICAgICAgaWYgKGlzQ2hhbmdlRXIpIGNuTnVtID0gJ+S4pCc7XHJcbiAgICAgIGludGVnZXJSZXMgKz0gY25aZXJvICsgY25OdW0gKyBjbkRlc2M7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDlsI/mlbDpg6jliIbmi7zmjqVcclxuICBsZXQgZGVjaW1hbFJlcyA9ICcnO1xyXG4gIGNvbnN0IGRlY2ltYWxDb3VudCA9IGRlY2ltYWwgPyBkZWNpbWFsLnRvU3RyaW5nKCkubGVuZ3RoIDogMDtcclxuICBpZiAoZGVjaW1hbCA9PT0gbnVsbCkge1xyXG4gICAgZGVjaW1hbFJlcyA9IHJtYiA/ICfmlbQnIDogJyc7XHJcbiAgfSBlbHNlIGlmIChkZWNpbWFsID09PSAnMCcpIHtcclxuICAgIGRlY2ltYWxSZXMgPSAn6Zu2JztcclxuICB9IGVsc2Uge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWNpbWFsQ291bnQ7IGkrKykge1xyXG4gICAgICBpZiAocm1iICYmIGkgPiB1bml0LmRlYy5sZW5ndGggLSAxKSBicmVhaztcclxuICAgICAgY29uc3QgbiA9IGRlY2ltYWxbaV0sXHJcbiAgICAgICAgY25aZXJvID0gbiA9PT0gJzAnID8gJ+mbticgOiAnJyxcclxuICAgICAgICBjbk51bSA9IHVuaXQubnVtW25dLFxyXG4gICAgICAgIGNuRGVzYyA9IHJtYiA/IHVuaXQuZGVjW2ldIDogJyc7XHJcbiAgICAgIGRlY2ltYWxSZXMgKz0gY25aZXJvICsgY25OdW0gKyBjbkRlc2M7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHJldCA9XHJcbiAgICBzeW1ib2wgK1xyXG4gICAgKHJtYlxyXG4gICAgICA/IGludGVnZXJSZXMgKyAoZGVjaW1hbFJlcyA9PT0gJ+mbticgPyAn5YWD5pW0JyA6IGDlhYMke2RlY2ltYWxSZXN9YClcclxuICAgICAgOiBpbnRlZ2VyUmVzICsgKGRlY2ltYWxSZXMgPT09ICcnID8gJycgOiBg54K5JHtkZWNpbWFsUmVzfWApKTtcclxuICByZXR1cm4gcmV0O1xyXG59XHJcbiJdfQ==