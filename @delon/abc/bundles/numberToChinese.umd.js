/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-ed90aa6
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/number-to-chinese', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['number-to-chinese'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

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
        if (rmb === void 0) {
            rmb = true;
        }
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
                if (rmb === void 0) {
                    rmb = true;
                }
                if (minusSymbol === void 0) {
                    minusSymbol = '负';
                }
                return numberToChinese(value, rmb, { minusSymbol: minusSymbol });
            };
        NaNumberToChinesePipe.decorators = [
            { type: core.Pipe, args: [{ name: 'n2c' },] }
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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

    exports.numberToChinese = numberToChinese;
    exports.NaNumberToChinesePipe = NaNumberToChinesePipe;
    exports.NumberToChineseModule = NumberToChineseModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyVG9DaGluZXNlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BkZWxvbi9hYmMvbnVtYmVyLXRvLWNoaW5lc2UvbnVtYmVyLXRvLWNoaW5lc2UudHMiLCJuZzovL0BkZWxvbi9hYmMvbnVtYmVyLXRvLWNoaW5lc2UvbnVtYmVyLXRvLWNoaW5lc2UucGlwZS50cyIsIm5nOi8vQGRlbG9uL2FiYy9udW1iZXItdG8tY2hpbmVzZS9udW1iZXItdG8tY2hpbmVzZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBOdW1iZXJUb0NoaW5lc2VPcHRpb25zIH0gZnJvbSAnLi9udW1iZXItdG8tY2hpbmVzZS5pbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJUb0NoaW5lc2UoXHJcbiAgdmFsdWU6IG51bWJlciB8IHN0cmluZyxcclxuICBybWIgPSB0cnVlLFxyXG4gIG9wdGlvbnM/OiBOdW1iZXJUb0NoaW5lc2VPcHRpb25zLFxyXG4pOiBzdHJpbmcge1xyXG4gIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAge1xyXG4gICAgICBtaW51c1N5bWJvbDogJ8OowrTCnycsXHJcbiAgICAgIHZhbGlkVGhyb3c6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG9wdGlvbnMsXHJcbiAgKTtcclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gIGlmICghL14tP1xcZCsoXFwuXFxkKyk/JC8udGVzdCh2YWx1ZSkgJiYgb3B0aW9ucy52YWxpZFRocm93KVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKGAke3ZhbHVlfSBpcyBpbnZhbGlkIG51bWJlciB0eXBlYCk7XHJcbiAgbGV0IGludGVnZXI6IG51bWJlciB8IHN0cmluZywgZGVjaW1hbDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIFtpbnRlZ2VyLCBkZWNpbWFsXSA9IHZhbHVlLnNwbGl0KCcuJyk7XHJcbiAgbGV0IHN5bWJvbCA9ICcnO1xyXG4gIGlmIChpbnRlZ2VyLnN0YXJ0c1dpdGgoJy0nKSkge1xyXG4gICAgc3ltYm9sID0gb3B0aW9ucy5taW51c1N5bWJvbDtcclxuICAgIGludGVnZXIgPSBpbnRlZ2VyLnN1YnN0cigxKTtcclxuICB9XHJcbiAgaWYgKC9eLT9cXGQrJC8udGVzdCh2YWx1ZSkpIGRlY2ltYWwgPSBudWxsO1xyXG4gIGludGVnZXIgPSAoK2ludGVnZXIpLnRvU3RyaW5nKCk7XHJcbiAgY29uc3QgdW5pdCA9IHtcclxuICAgIG51bTogcm1iXHJcbiAgICAgID8gWycnLCAnw6XCo8K5JywgJ8OowrTCsCcsICfDpcKPwoEnLCAnw6jCgsKGJywgJ8OkwrzCjScsICfDqcKZwoYnLCAnw6bCn8KSJywgJ8Omwo3CjCcsICfDp8KOwpYnLCAnw6fCgsK5J11cclxuICAgICAgOiBbJycsICfDpMK4woAnLCAnw6TCusKMJywgJ8OkwrjCiScsICfDpcKbwpsnLCAnw6TCusKUJywgJ8OlwoXCrScsICfDpMK4woMnLCAnw6XChcKrJywgJ8OkwrnCnScsICfDp8KCwrknXSxcclxuICAgIHJhZGljZTogcm1iXHJcbiAgICAgID8gW1xyXG4gICAgICAgICAgJycsXHJcbiAgICAgICAgICAnw6bCi8K+JyxcclxuICAgICAgICAgICfDpMK9wrAnLFxyXG4gICAgICAgICAgJ8OkwrvCnycsXHJcbiAgICAgICAgICAnw6TCuMKHJyxcclxuICAgICAgICAgICfDpsKLwr4nLFxyXG4gICAgICAgICAgJ8Okwr3CsCcsXHJcbiAgICAgICAgICAnw6TCu8KfJyxcclxuICAgICAgICAgICfDpMK6wr8nLFxyXG4gICAgICAgICAgJ8OmwovCvicsXHJcbiAgICAgICAgICAnw6TCvcKwJyxcclxuICAgICAgICAgICfDpMK7wp8nLFxyXG4gICAgICAgICAgJ8OkwrjCh8OkwrrCvycsXHJcbiAgICAgICAgICAnw6bCi8K+JyxcclxuICAgICAgICAgICfDpMK9wrAnLFxyXG4gICAgICAgICAgJ8OkwrvCnycsXHJcbiAgICAgICAgICAnw6XChcKGJyxcclxuICAgICAgICAgICfDpsKLwr4nLFxyXG4gICAgICAgICAgJ8Okwr3CsCcsXHJcbiAgICAgICAgICAnw6TCu8KfJyxcclxuICAgICAgICBdXHJcbiAgICAgIDogW1xyXG4gICAgICAgICAgJycsXHJcbiAgICAgICAgICAnw6XCjcKBJyxcclxuICAgICAgICAgICfDp8KZwr4nLFxyXG4gICAgICAgICAgJ8Olwo3CgycsXHJcbiAgICAgICAgICAnw6TCuMKHJyxcclxuICAgICAgICAgICfDpcKNwoEnLFxyXG4gICAgICAgICAgJ8OnwpnCvicsXHJcbiAgICAgICAgICAnw6XCjcKDJyxcclxuICAgICAgICAgICfDpMK6wr8nLFxyXG4gICAgICAgICAgJ8Olwo3CgScsXHJcbiAgICAgICAgICAnw6fCmcK+JyxcclxuICAgICAgICAgICfDpcKNwoMnLFxyXG4gICAgICAgICAgJ8OkwrjCh8OkwrrCvycsXHJcbiAgICAgICAgICAnw6XCjcKBJyxcclxuICAgICAgICAgICfDp8KZwr4nLFxyXG4gICAgICAgICAgJ8Olwo3CgycsXHJcbiAgICAgICAgICAnw6XChcKGJyxcclxuICAgICAgICAgICfDpcKNwoEnLFxyXG4gICAgICAgICAgJ8OnwpnCvicsXHJcbiAgICAgICAgICAnw6XCjcKDJyxcclxuICAgICAgICBdLFxyXG4gICAgZGVjOiBbJ8OowqfCkicsICfDpcKIwoYnLCAnw6XCjsKYJywgJ8Omwq/CqyddLFxyXG4gIH07XHJcbiAgaWYgKHJtYikgdmFsdWUgPSAoK3ZhbHVlKS50b0ZpeGVkKDUpLnRvU3RyaW5nKCk7XHJcbiAgbGV0IGludGVnZXJSZXMgPSAnJztcclxuICBjb25zdCBpbnRlZ2VyQ291bnQgPSBpbnRlZ2VyLmxlbmd0aDtcclxuICBpZiAoaW50ZWdlciA9PT0gJzAnIHx8IGludGVnZXJDb3VudCA9PT0gMCkge1xyXG4gICAgaW50ZWdlclJlcyA9ICfDqcKbwrYnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgY25EZXNjID0gJyc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludGVnZXJDb3VudDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG4gPSAraW50ZWdlcltpXSxcclxuICAgICAgICBqID0gaW50ZWdlckNvdW50IC0gaSAtIDEsXHJcbiAgICAgICAgaXNaZXJvID0gaSA+IDEgJiYgbiAhPT0gMCAmJiBpbnRlZ2VyW2kgLSAxXSA9PT0gJzAnLFxyXG4gICAgICAgIGNuWmVybyA9IGlzWmVybyA/ICfDqcKbwrYnIDogJycsXHJcbiAgICAgICAgaXNFbXBwdHlVbml0ID1cclxuICAgICAgICAgIChuID09PSAwICYmIGogJSA0ICE9PSAwKSB8fCBpbnRlZ2VyLnN1YnN0cihpIC0gMywgNCkgPT09ICcwMDAwJyxcclxuICAgICAgICBkZXNjTWFyayA9IGNuRGVzYztcclxuICAgICAgbGV0IGNuTnVtID0gdW5pdC5udW1bbl07XHJcblxyXG4gICAgICBjbkRlc2MgPSBpc0VtcHB0eVVuaXQgPyAnJyA6IHVuaXQucmFkaWNlW2pdO1xyXG4gICAgICAvLyDDp8KswqzDpMK4woDDpMK9wo3DpsKYwq/DpMK4woDDpcKNwoFcclxuICAgICAgaWYgKGkgPT09IDAgJiYgY25OdW0gPT09ICfDpMK4woAnICYmIGNuRGVzYyA9PT0gJ8Olwo3CgScpIGNuTnVtID0gJyc7XHJcbiAgICAgIGNvbnN0IGlzQ2hhbmdlRXIgPVxyXG4gICAgICAgIG4gPiAxICYmXHJcbiAgICAgICAgY25OdW0gPT09ICfDpMK6wownICYmIC8vIMOlwo7Cu8OpwpnCpMOpwqbClsOkwr3CjVxyXG4gICAgICAgIFsnJywgJ8Olwo3CgScsICfDp8KZwr4nXS5pbmRleE9mKGNuRGVzYykgPT09IC0xICYmIC8vIMOkwrjCjcOowq/Cu8OkwrjCpFxcw6TCuMKkw6XCjcKBXFzDpMK4wqTDp8KZwr5cclxuICAgICAgICBkZXNjTWFyayAhPT0gJ8Olwo3CgSc7IC8vIMOkwrjCjcOowq/Cu8Olwo3CgcOkwrjCpFxyXG4gICAgICBpZiAoaXNDaGFuZ2VFcikgY25OdW0gPSAnw6TCuMKkJztcclxuICAgICAgaW50ZWdlclJlcyArPSBjblplcm8gKyBjbk51bSArIGNuRGVzYztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIMOlwrDCj8OmwpXCsMOpwoPCqMOlwojChsOmwovCvMOmwo7CpVxyXG4gIGxldCBkZWNpbWFsUmVzID0gJyc7XHJcbiAgY29uc3QgZGVjaW1hbENvdW50ID0gZGVjaW1hbCA/IGRlY2ltYWwudG9TdHJpbmcoKS5sZW5ndGggOiAwO1xyXG4gIGlmIChkZWNpbWFsID09PSBudWxsKSB7XHJcbiAgICBkZWNpbWFsUmVzID0gcm1iID8gJ8OmwpXCtCcgOiAnJztcclxuICB9IGVsc2UgaWYgKGRlY2ltYWwgPT09ICcwJykge1xyXG4gICAgZGVjaW1hbFJlcyA9ICfDqcKbwrYnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlY2ltYWxDb3VudDsgaSsrKSB7XHJcbiAgICAgIGlmIChybWIgJiYgaSA+IHVuaXQuZGVjLmxlbmd0aCAtIDEpIGJyZWFrO1xyXG4gICAgICBjb25zdCBuID0gZGVjaW1hbFtpXSxcclxuICAgICAgICBjblplcm8gPSBuID09PSAnMCcgPyAnw6nCm8K2JyA6ICcnLFxyXG4gICAgICAgIGNuTnVtID0gdW5pdC5udW1bbl0sXHJcbiAgICAgICAgY25EZXNjID0gcm1iID8gdW5pdC5kZWNbaV0gOiAnJztcclxuICAgICAgZGVjaW1hbFJlcyArPSBjblplcm8gKyBjbk51bSArIGNuRGVzYztcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgcmV0ID1cclxuICAgIHN5bWJvbCArXHJcbiAgICAocm1iXHJcbiAgICAgID8gaW50ZWdlclJlcyArIChkZWNpbWFsUmVzID09PSAnw6nCm8K2JyA/ICfDpcKFwoPDpsKVwrQnIDogYMOlwoXCgyR7ZGVjaW1hbFJlc31gKVxyXG4gICAgICA6IGludGVnZXJSZXMgKyAoZGVjaW1hbFJlcyA9PT0gJycgPyAnJyA6IGDDp8KCwrkke2RlY2ltYWxSZXN9YCkpO1xyXG4gIHJldHVybiByZXQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSwgUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBudW1iZXJUb0NoaW5lc2UgfSBmcm9tICcuL251bWJlci10by1jaGluZXNlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ24yYycgfSlcclxuZXhwb3J0IGNsYXNzIE5hTnVtYmVyVG9DaGluZXNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShcclxuICAgIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICBybWI6IGJvb2xlYW4gPSB0cnVlLFxyXG4gICAgbWludXNTeW1ib2w6IHN0cmluZyA9ICfDqMK0wp8nLFxyXG4gICk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbnVtYmVyVG9DaGluZXNlKHZhbHVlLCBybWIsIHsgbWludXNTeW1ib2wgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBOYU51bWJlclRvQ2hpbmVzZVBpcGUgfSBmcm9tICcuL251bWJlci10by1jaGluZXNlLnBpcGUnO1xyXG5cclxuY29uc3QgUElQRVMgPSBbTmFOdW1iZXJUb0NoaW5lc2VQaXBlXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBQSVBFUyxcclxuICBleHBvcnRzOiBQSVBFUyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWJlclRvQ2hpbmVzZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogTnVtYmVyVG9DaGluZXNlTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJQaXBlIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLG9CQXVHdUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJO1lBQ0EsT0FBTyxDQUFDLENB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