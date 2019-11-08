/**
 * @fileoverview added by tsickle
 * Generated from: number-to-chinese.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @param {?} value
 * @param {?=} rmb
 * @param {?=} options
 * @return {?}
 */
export function numberToChinese(value, rmb, options) {
    var _a;
    if (rmb === void 0) { rmb = true; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRvLWNoaW5lc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL251bWJlci10by1jaGluZXNlLyIsInNvdXJjZXMiOlsibnVtYmVyLXRvLWNoaW5lc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTSxVQUFVLGVBQWUsQ0FBQyxLQUFzQixFQUFFLEdBQVUsRUFBRSxPQUFnQzs7SUFBNUMsb0JBQUEsRUFBQSxVQUFVO0lBQ2hFLE9BQU8sc0JBQ0wsV0FBVyxFQUFFLEdBQUcsRUFDaEIsVUFBVSxFQUFFLEtBQUssSUFDZCxPQUFPLENBQ1gsQ0FBQztJQUNGLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtRQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDeEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVTtRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUksS0FBSyw0QkFBeUIsQ0FBQyxDQUFDOztRQUN6RyxPQUF3Qjs7UUFDeEIsT0FBK0I7SUFDbkMsd0NBQXFDLEVBQXBDLGVBQU8sRUFBRSxlQUFPLENBQXFCOztRQUNsQyxNQUFNLEdBQUcsRUFBRTtJQUNmLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUMzQixNQUFNLEdBQUcsbUJBQUEsT0FBTyxDQUFDLFdBQVcsRUFBQyxDQUFDO1FBQzlCLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdCO0lBQ0QsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDMUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7UUFDMUIsSUFBSSxHQUFHO1FBQ1gsR0FBRyxFQUFFLEdBQUc7WUFDTixDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDMUQsTUFBTSxFQUFFLEdBQUc7WUFDVCxDQUFDLENBQUM7Z0JBQ0UsRUFBRTtnQkFDRixHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsSUFBSTtnQkFDSixHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2FBQ0o7WUFDSCxDQUFDLENBQUM7Z0JBQ0UsRUFBRTtnQkFDRixHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsSUFBSTtnQkFDSixHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2FBQ0o7UUFDTCxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7S0FDMUI7SUFDRCxJQUFJLEdBQUc7UUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7UUFDNUMsVUFBVSxHQUFHLEVBQUU7O1FBQ2IsWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNO0lBQ25DLElBQUksT0FBTyxLQUFLLEdBQUcsSUFBSSxZQUFZLEtBQUssQ0FBQyxFQUFFO1FBQ3pDLFVBQVUsR0FBRyxHQUFHLENBQUM7S0FDbEI7U0FBTTs7WUFDRCxNQUFNLEdBQUcsRUFBRTtRQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUMvQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOztnQkFDZixDQUFDLEdBQUcsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDOztnQkFDeEIsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUc7O2dCQUNuRCxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7O2dCQUMxQixZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU07O2dCQUM5RSxRQUFRLEdBQUcsTUFBTTs7Z0JBQ25CLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUV2QixNQUFNLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsU0FBUztZQUNULElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssR0FBRyxJQUFJLE1BQU0sS0FBSyxHQUFHO2dCQUFFLEtBQUssR0FBRyxFQUFFLENBQUM7O2dCQUNyRCxVQUFVLEdBQ2QsQ0FBQyxHQUFHLENBQUM7Z0JBQ0wsS0FBSyxLQUFLLEdBQUcsSUFBSSxPQUFPO2dCQUN4QixDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLFlBQVk7Z0JBQ3JELFFBQVEsS0FBSyxHQUFHO1lBQ2xCLElBQUksVUFBVTtnQkFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQzVCLFVBQVUsSUFBSSxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztTQUN2QztLQUNGOzs7UUFHRyxVQUFVLEdBQUcsRUFBRTs7UUFDYixZQUFZLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtRQUNwQixVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUM3QjtTQUFNLElBQUksT0FBTyxLQUFLLEdBQUcsRUFBRTtRQUMxQixVQUFVLEdBQUcsR0FBRyxDQUFDO0tBQ2xCO1NBQU07UUFDTCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUFFLE1BQU07O2dCQUNwQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQzs7Z0JBQ2QsTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTs7Z0JBQzdCLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7Z0JBQ25CLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDckMsVUFBVSxJQUFJLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO1NBQ3ZDO0tBQ0Y7O1FBQ0ssR0FBRyxHQUNQLE1BQU07UUFDTixDQUFDLEdBQUc7WUFDRixDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFJLFVBQVksQ0FBQztZQUM3RCxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFJLFVBQVksQ0FBQyxDQUFDO0lBQy9ELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE51bWJlclRvQ2hpbmVzZU9wdGlvbnMgfSBmcm9tICcuL251bWJlci10by1jaGluZXNlLmludGVyZmFjZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyVG9DaGluZXNlKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIHJtYiA9IHRydWUsIG9wdGlvbnM/OiBOdW1iZXJUb0NoaW5lc2VPcHRpb25zKTogc3RyaW5nIHtcbiAgb3B0aW9ucyA9IHtcbiAgICBtaW51c1N5bWJvbDogJ+i0nycsXG4gICAgdmFsaWRUaHJvdzogZmFsc2UsXG4gICAgLi4ub3B0aW9ucyxcbiAgfTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgaWYgKCEvXi0/XFxkKyhcXC5cXGQrKT8kLy50ZXN0KHZhbHVlKSAmJiBvcHRpb25zLnZhbGlkVGhyb3cpIHRocm93IG5ldyBFcnJvcihgJHt2YWx1ZX0gaXMgaW52YWxpZCBudW1iZXIgdHlwZWApO1xuICBsZXQgaW50ZWdlcjogbnVtYmVyIHwgc3RyaW5nO1xuICBsZXQgZGVjaW1hbDogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcbiAgW2ludGVnZXIsIGRlY2ltYWxdID0gdmFsdWUuc3BsaXQoJy4nKTtcbiAgbGV0IHN5bWJvbCA9ICcnO1xuICBpZiAoaW50ZWdlci5zdGFydHNXaXRoKCctJykpIHtcbiAgICBzeW1ib2wgPSBvcHRpb25zLm1pbnVzU3ltYm9sITtcbiAgICBpbnRlZ2VyID0gaW50ZWdlci5zdWJzdHIoMSk7XG4gIH1cbiAgaWYgKC9eLT9cXGQrJC8udGVzdCh2YWx1ZSkpIGRlY2ltYWwgPSBudWxsO1xuICBpbnRlZ2VyID0gKCtpbnRlZ2VyKS50b1N0cmluZygpO1xuICBjb25zdCB1bml0ID0ge1xuICAgIG51bTogcm1iXG4gICAgICA/IFsnJywgJ+WjuScsICfotLAnLCAn5Y+BJywgJ+iChicsICfkvI0nLCAn6ZmGJywgJ+afkicsICfmjYwnLCAn546WJywgJ+eCuSddXG4gICAgICA6IFsnJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJywgJ+S4gycsICflhasnLCAn5LmdJywgJ+eCuSddLFxuICAgIHJhZGljZTogcm1iXG4gICAgICA/IFtcbiAgICAgICAgICAnJyxcbiAgICAgICAgICAn5ou+JyxcbiAgICAgICAgICAn5L2wJyxcbiAgICAgICAgICAn5LufJyxcbiAgICAgICAgICAn5LiHJyxcbiAgICAgICAgICAn5ou+JyxcbiAgICAgICAgICAn5L2wJyxcbiAgICAgICAgICAn5LufJyxcbiAgICAgICAgICAn5Lq/JyxcbiAgICAgICAgICAn5ou+JyxcbiAgICAgICAgICAn5L2wJyxcbiAgICAgICAgICAn5LufJyxcbiAgICAgICAgICAn5LiH5Lq/JyxcbiAgICAgICAgICAn5ou+JyxcbiAgICAgICAgICAn5L2wJyxcbiAgICAgICAgICAn5LufJyxcbiAgICAgICAgICAn5YWGJyxcbiAgICAgICAgICAn5ou+JyxcbiAgICAgICAgICAn5L2wJyxcbiAgICAgICAgICAn5LufJyxcbiAgICAgICAgXVxuICAgICAgOiBbXG4gICAgICAgICAgJycsXG4gICAgICAgICAgJ+WNgScsXG4gICAgICAgICAgJ+eZvicsXG4gICAgICAgICAgJ+WNgycsXG4gICAgICAgICAgJ+S4hycsXG4gICAgICAgICAgJ+WNgScsXG4gICAgICAgICAgJ+eZvicsXG4gICAgICAgICAgJ+WNgycsXG4gICAgICAgICAgJ+S6vycsXG4gICAgICAgICAgJ+WNgScsXG4gICAgICAgICAgJ+eZvicsXG4gICAgICAgICAgJ+WNgycsXG4gICAgICAgICAgJ+S4h+S6vycsXG4gICAgICAgICAgJ+WNgScsXG4gICAgICAgICAgJ+eZvicsXG4gICAgICAgICAgJ+WNgycsXG4gICAgICAgICAgJ+WFhicsXG4gICAgICAgICAgJ+WNgScsXG4gICAgICAgICAgJ+eZvicsXG4gICAgICAgICAgJ+WNgycsXG4gICAgICAgIF0sXG4gICAgZGVjOiBbJ+inkicsICfliIYnLCAn5Y6YJywgJ+avqyddLFxuICB9O1xuICBpZiAocm1iKSB2YWx1ZSA9ICgrdmFsdWUpLnRvRml4ZWQoNSkudG9TdHJpbmcoKTtcbiAgbGV0IGludGVnZXJSZXMgPSAnJztcbiAgY29uc3QgaW50ZWdlckNvdW50ID0gaW50ZWdlci5sZW5ndGg7XG4gIGlmIChpbnRlZ2VyID09PSAnMCcgfHwgaW50ZWdlckNvdW50ID09PSAwKSB7XG4gICAgaW50ZWdlclJlcyA9ICfpm7YnO1xuICB9IGVsc2Uge1xuICAgIGxldCBjbkRlc2MgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVnZXJDb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBuID0gK2ludGVnZXJbaV07XG4gICAgICBjb25zdCBqID0gaW50ZWdlckNvdW50IC0gaSAtIDE7XG4gICAgICBjb25zdCBpc1plcm8gPSBpID4gMSAmJiBuICE9PSAwICYmIGludGVnZXJbaSAtIDFdID09PSAnMCc7XG4gICAgICBjb25zdCBjblplcm8gPSBpc1plcm8gPyAn6Zu2JyA6ICcnO1xuICAgICAgY29uc3QgaXNFbXBwdHlVbml0ID0gKG4gPT09IDAgJiYgaiAlIDQgIT09IDApIHx8IGludGVnZXIuc3Vic3RyKGkgLSAzLCA0KSA9PT0gJzAwMDAnO1xuICAgICAgY29uc3QgZGVzY01hcmsgPSBjbkRlc2M7XG4gICAgICBsZXQgY25OdW0gPSB1bml0Lm51bVtuXTtcblxuICAgICAgY25EZXNjID0gaXNFbXBwdHlVbml0ID8gJycgOiB1bml0LnJhZGljZVtqXTtcbiAgICAgIC8vIOesrOS4gOS9jeaYr+S4gOWNgVxuICAgICAgaWYgKGkgPT09IDAgJiYgY25OdW0gPT09ICfkuIAnICYmIGNuRGVzYyA9PT0gJ+WNgScpIGNuTnVtID0gJyc7XG4gICAgICBjb25zdCBpc0NoYW5nZUVyID1cbiAgICAgICAgbiA+IDEgJiZcbiAgICAgICAgY25OdW0gPT09ICfkuownICYmIC8vIOWOu+mZpOmmluS9jVxuICAgICAgICBbJycsICfljYEnLCAn55m+J10uaW5kZXhPZihjbkRlc2MpID09PSAtMSAmJiAvLyDkuI3or7vkuKRcXOS4pOWNgVxc5Lik55m+XG4gICAgICAgIGRlc2NNYXJrICE9PSAn5Y2BJzsgLy8g5LiN6K+75Y2B5LikXG4gICAgICBpZiAoaXNDaGFuZ2VFcikgY25OdW0gPSAn5LikJztcbiAgICAgIGludGVnZXJSZXMgKz0gY25aZXJvICsgY25OdW0gKyBjbkRlc2M7XG4gICAgfVxuICB9XG5cbiAgLy8g5bCP5pWw6YOo5YiG5ou85o6lXG4gIGxldCBkZWNpbWFsUmVzID0gJyc7XG4gIGNvbnN0IGRlY2ltYWxDb3VudCA9IGRlY2ltYWwgPyBkZWNpbWFsLnRvU3RyaW5nKCkubGVuZ3RoIDogMDtcbiAgaWYgKGRlY2ltYWwgPT09IG51bGwpIHtcbiAgICBkZWNpbWFsUmVzID0gcm1iID8gJ+aVtCcgOiAnJztcbiAgfSBlbHNlIGlmIChkZWNpbWFsID09PSAnMCcpIHtcbiAgICBkZWNpbWFsUmVzID0gJ+mbtic7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWNpbWFsQ291bnQ7IGkrKykge1xuICAgICAgaWYgKHJtYiAmJiBpID4gdW5pdC5kZWMubGVuZ3RoIC0gMSkgYnJlYWs7XG4gICAgICBjb25zdCBuID0gZGVjaW1hbFtpXTtcbiAgICAgIGNvbnN0IGNuWmVybyA9IG4gPT09ICcwJyA/ICfpm7YnIDogJyc7XG4gICAgICBjb25zdCBjbk51bSA9IHVuaXQubnVtW25dO1xuICAgICAgY29uc3QgY25EZXNjID0gcm1iID8gdW5pdC5kZWNbaV0gOiAnJztcbiAgICAgIGRlY2ltYWxSZXMgKz0gY25aZXJvICsgY25OdW0gKyBjbkRlc2M7XG4gICAgfVxuICB9XG4gIGNvbnN0IHJldCA9XG4gICAgc3ltYm9sICtcbiAgICAocm1iXG4gICAgICA/IGludGVnZXJSZXMgKyAoZGVjaW1hbFJlcyA9PT0gJ+mbticgPyAn5YWD5pW0JyA6IGDlhYMke2RlY2ltYWxSZXN9YClcbiAgICAgIDogaW50ZWdlclJlcyArIChkZWNpbWFsUmVzID09PSAnJyA/ICcnIDogYOeCuSR7ZGVjaW1hbFJlc31gKSk7XG4gIHJldHVybiByZXQ7XG59XG4iXX0=