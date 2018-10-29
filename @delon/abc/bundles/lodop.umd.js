/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-rc.1-8928d9f
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/lodop', ['exports', '@angular/core', 'rxjs', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.lodop = {}),global.ng.core,global.rxjs,global.delon.util));
}(this, (function (exports,core,rxjs,util) { 'use strict';

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
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LodopConfig = /** @class */ (function () {
        function LodopConfig() {
        }
        return LodopConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LodopService = /** @class */ (function () {
        function LodopService(defCog, scriptSrv) {
            this.defCog = defCog;
            this.scriptSrv = scriptSrv;
            this.pending = false;
            this._lodop = null;
            this._init = new rxjs.Subject();
            this._events = new rxjs.Subject();
            this.printBuffer = [];
            this.cog = defCog;
        }
        Object.defineProperty(LodopService.prototype, "cog", {
            /**
             * 获取或重新设置配置
             *
             * **注：**重新设置会倒置重新加载脚本资源
             */
            get: /**
             * 获取或重新设置配置
             *
             * **注：**重新设置会倒置重新加载脚本资源
             * @return {?}
             */ function () {
                return this._cog;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._cog = Object.assign({
                    url: 'https://localhost:8443/CLodopfuncs.js',
                    name: 'CLODOP',
                    companyName: '',
                    checkMaxCount: 100,
                }, this.defCog, value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LodopService.prototype, "events", {
            /** 事件变更通知 */
            get: /**
             * 事件变更通知
             * @return {?}
             */ function () {
                return this._events.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LodopService.prototype.check = /**
         * @return {?}
         */
            function () {
                if (!this._lodop)
                    throw new Error("\u8BF7\u52A1\u5FC5\u5148\u8C03\u7528 lodop \u83B7\u53D6\u5BF9\u8C61");
            };
        /**
         * @return {?}
         */
        LodopService.prototype.request = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.pending = true;
                /** @type {?} */
                var url = this.cog.url + "?name=" + this.cog.name;
                /** @type {?} */
                var checkMaxCount = this.cog.checkMaxCount;
                /** @type {?} */
                var onResolve = function (status, error) {
                    _this._init.next({
                        ok: status === 'ok',
                        status: status,
                        error: error,
                        lodop: _this._lodop,
                    });
                };
                /** @type {?} */
                var checkStatus = function () {
                    --checkMaxCount;
                    if (_this._lodop.webskt && _this._lodop.webskt.readyState === 1) {
                        onResolve('ok');
                    }
                    else {
                        if (checkMaxCount < 0) {
                            onResolve('check-limit');
                            return;
                        }
                        setTimeout(function () { return checkStatus(); }, 100);
                    }
                };
                this.scriptSrv.loadScript(url).then(function (res) {
                    if (res.status !== 'ok') {
                        _this.pending = false;
                        onResolve('script-load-error', res[0]);
                        return;
                    }
                    _this._lodop =
                        window.hasOwnProperty(_this.cog.name) &&
                            ( /** @type {?} */(window[_this.cog.name]));
                    if (_this._lodop === null) {
                        onResolve('load-variable-name-error', { name: _this.cog.name });
                        return;
                    }
                    _this._lodop.SET_LICENSES(_this.cog.companyName, _this.cog.license, _this.cog.licenseA, _this.cog.licenseB);
                    checkStatus();
                });
            };
        /** 重置 lodop 对象 */
        /**
         * 重置 lodop 对象
         * @return {?}
         */
        LodopService.prototype.reset = /**
         * 重置 lodop 对象
         * @return {?}
         */
            function () {
                this._lodop = null;
                this.pending = false;
                this.request();
            };
        Object.defineProperty(LodopService.prototype, "lodop", {
            /** 获取 lodop 对象 */
            get: /**
             * 获取 lodop 对象
             * @return {?}
             */ function () {
                if (this._lodop)
                    return rxjs.of(/** @type {?} */ ({ ok: true, lodop: this._lodop }));
                if (this.pending)
                    return this._init.asObservable();
                this.request();
                return this._init.asObservable();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LodopService.prototype, "printer", {
            /** 获取打印机列表 */
            get: /**
             * 获取打印机列表
             * @return {?}
             */ function () {
                this.check();
                /** @type {?} */
                var ret = [];
                /** @type {?} */
                var count = this._lodop.GET_PRINTER_COUNT();
                for (var index = 0; index < count; index++) {
                    ret.push(this._lodop.GET_PRINTER_NAME(index));
                }
                return ret;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 附加代码至 `lodop` 对象上，字符串类支持 `{{key}}` 的动态参数
         *
         * **注：** 代码是指打印设计所产生字符串数据
         *
         * @param code 代码
         * @param contextObj 动态参数上下文对象
         * @param parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)\);/i`
         */
        /**
         * 附加代码至 `lodop` 对象上，字符串类支持 `{{key}}` 的动态参数
         *
         * **注：** 代码是指打印设计所产生字符串数据
         *
         * @param {?} code 代码
         * @param {?=} contextObj 动态参数上下文对象
         * @param {?=} parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)\);/i`
         * @return {?}
         */
        LodopService.prototype.attachCode = /**
         * 附加代码至 `lodop` 对象上，字符串类支持 `{{key}}` 的动态参数
         *
         * **注：** 代码是指打印设计所产生字符串数据
         *
         * @param {?} code 代码
         * @param {?=} contextObj 动态参数上下文对象
         * @param {?=} parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)\);/i`
         * @return {?}
         */
            function (code, contextObj, parser) {
                var _this = this;
                this.check();
                if (!parser)
                    parser = /LODOP\.([^(]+)\(([^\n]+)\);/i;
                code.split('\n').forEach(function (line) {
                    /** @type {?} */
                    var res = parser.exec(line.trim());
                    if (!res)
                        return;
                    /** @type {?} */
                    var fn = _this._lodop[res[1]];
                    if (fn) {
                        /** @type {?} */
                        var arr = void 0;
                        try {
                            /** @type {?} */
                            var fakeFn = new Function("return [" + res[2] + "]");
                            arr = /** @type {?} */ (fakeFn());
                        }
                        catch (_a) { }
                        if (Array.isArray(arr) && contextObj) {
                            for (var i = 0; i < arr.length; i++) {
                                if (typeof arr[i] === 'string') {
                                    arr[i] = arr[i].replace(/{{(.*?)}}/g, function (match, key) { return contextObj[key.trim()] || ''; });
                                }
                            }
                        }
                        fn.apply(_this._lodop, arr);
                    }
                });
            };
        /**
         * 打开打印设计关闭后自动返回代码
         *
         * **注：** 自动监听 `On_Return` 事件，运行后会移除
         */
        /**
         * 打开打印设计关闭后自动返回代码
         *
         * **注：** 自动监听 `On_Return` 事件，运行后会移除
         * @return {?}
         */
        LodopService.prototype.design = /**
         * 打开打印设计关闭后自动返回代码
         *
         * **注：** 自动监听 `On_Return` 事件，运行后会移除
         * @return {?}
         */
            function () {
                var _this = this;
                this.check();
                /** @type {?} */
                var tid = this._lodop.PRINT_DESIGN();
                return new Promise(function (resolve) {
                    _this._lodop.On_Return = function (taskID, value) {
                        if (tid !== taskID)
                            return;
                        _this._lodop.On_Return = null;
                        resolve('' + value);
                    };
                });
            };
        /**
         * @return {?}
         */
        LodopService.prototype.printDo = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var data = this.printBuffer.shift();
                if (!data)
                    return;
                this.attachCode(data.code, data.item, data.parser);
                /** @type {?} */
                var tid = this._lodop.PRINT();
                this._lodop.On_Return = function (taskID, value) {
                    if (tid !== taskID)
                        return;
                    _this._lodop.On_Return = null;
                    _this._events.next(Object.assign(/** @type {?} */ ({
                        ok: value === true,
                        error: value === true ? null : value,
                    }), data));
                    _this.printDo();
                };
            };
        /**
         * 立即打印，一般用于批量套打
         *
         * @param code 代码
         * @param contextObj 动态参数上下文对象
         * @param parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)\);/i`
         */
        /**
         * 立即打印，一般用于批量套打
         *
         * @param {?} code 代码
         * @param {?} contextObj 动态参数上下文对象
         * @param {?=} parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)\);/i`
         * @return {?}
         */
        LodopService.prototype.print = /**
         * 立即打印，一般用于批量套打
         *
         * @param {?} code 代码
         * @param {?} contextObj 动态参数上下文对象
         * @param {?=} parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)\);/i`
         * @return {?}
         */
            function (code, contextObj, parser) {
                var _a;
                this.check();
                if (contextObj) {
                    (_a = this.printBuffer).push.apply(_a, __spread((Array.isArray(contextObj) ? contextObj : [contextObj]).map(function (item) {
                        return { code: code, parser: parser, item: item };
                    })));
                }
                this.printDo();
            };
        /**
         * @return {?}
         */
        LodopService.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._init.unsubscribe();
                this._events.unsubscribe();
            };
        LodopService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        LodopService.ctorParameters = function () {
            return [
                { type: LodopConfig },
                { type: util.LazyService }
            ];
        };
        return LodopService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LodopModule = /** @class */ (function () {
        function LodopModule() {
        }
        /**
         * @return {?}
         */
        LodopModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: LodopModule,
                    providers: [LodopService, LodopConfig],
                };
            };
        LodopModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [util.DelonUtilModule],
                    },] }
        ];
        return LodopModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.LodopService = LodopService;
    exports.LodopConfig = LodopConfig;
    exports.LodopModule = LodopModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3AudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGRlbG9uL2FiYy9sb2RvcC9sb2RvcC5jb25maWcudHMiLCJuZzovL0BkZWxvbi9hYmMvbG9kb3AvbG9kb3Auc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2FiYy9sb2RvcC9sb2RvcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTG9kb3BDb25maWcge1xuICAvKipcbiAgICogw6bCs8Kow6XChsKMw6TCv8Khw6bCgcKvw6/CvMKaw6TCuMK7w6bCs8Kow6XChsKMw6XCj8K3XG4gICAqL1xuICBsaWNlbnNlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiDDpsKzwqjDpcKGwozDpMK/wqHDpsKBwq/Dr8K8wprDqcKZwoTDpcKKwqDDpsKzwqjDpcKGwozDpcKPwrdBXG4gICAqL1xuICBsaWNlbnNlQTogc3RyaW5nO1xuICAvKipcbiAgICogw6bCs8Kow6XChsKMw6TCv8Khw6bCgcKvw6/CvMKaw6nCmcKEw6XCisKgw6bCs8Kow6XChsKMw6XCj8K3QlxuICAgKi9cbiAgbGljZW5zZUI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDDpsKzwqjDpcKGwozDpMK/wqHDpsKBwq/Dr8K8wprDpsKzwqjDpcKGwozDpcKNwpXDpMK9wo3DpcKQwo3Dp8KnwrBcbiAgICovXG4gIGNvbXBhbnlOYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogTG9kb3Agw6jCv8Kcw6fCqMKLw6jChMKaw6bCnMKsVVJMw6XCnMKww6XCncKAw6/CvMKMKirDpsKzwqjDpsKEwo8qKsOlworCocOlwr/ChcOkwr3Cv8OnwpTCqCBgbmFtZWAgw6XCscKew6bCgMKnw6bCjMKHw6XCrsKaw6XCj8KYw6nCh8KPw6XCgMK8XG4gICAqXG4gICAqIC0gaHR0cDovL2xvY2FsaG9zdDoxODAwMC9DTG9kb3BmdW5jcy5qc1xuICAgKiAtIGh0dHBzOi8vbG9jYWxob3N0Ojg0NDMvQ0xvZG9wZnVuY3MuanMgW8OpwrvCmMOowq7CpF1cbiAgICovXG4gIHVybD86IHN0cmluZztcbiAgLyoqXG4gICAqIExvZG9wIMOlwo/CmMOpwofCj8OlwpDCjcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBDTE9ET1BgXG4gICAqL1xuICBuYW1lPzogc3RyaW5nO1xuICAvKipcbiAgICogw6bCo8KAw6bCn8Klw6bCrMKhw6bClcKww6/CvMKMw6nCu8KYw6jCrsKkIGAxMDBgw6/CvMKMw6XCvcKTw6bCo8KAw6bCn8Klw6jCtsKFw6jCv8KHw6bCl8K2w6jCp8KGw6TCuMK6w6XCvMKCw6XCuMK4w6/CvMKMw6jCv8KZw6bCmMKvw6XCm8Kgw6TCuMK6IExvZG9wIMOpwpzCgMOowqbCgcOowr/CnsOmwo7CpSBXZWJTb2NrZXRcbiAgICovXG4gIGNoZWNrTWF4Q291bnQ/OiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBMb2RvcCwgTG9kb3BSZXN1bHQsIExvZG9wUHJpbnRSZXN1bHQgfSBmcm9tICcuL2xvZG9wLnR5cGVzJztcbmltcG9ydCB7IExvZG9wQ29uZmlnIH0gZnJvbSAnLi9sb2RvcC5jb25maWcnO1xuXG4vLyBUT0RPOiB6b25lXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9kb3BTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfY29nOiBMb2RvcENvbmZpZztcbiAgcHJpdmF0ZSBwZW5kaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgX2xvZG9wOiBMb2RvcCA9IG51bGw7XG4gIHByaXZhdGUgX2luaXQ6IFN1YmplY3Q8TG9kb3BSZXN1bHQ+ID0gbmV3IFN1YmplY3Q8TG9kb3BSZXN1bHQ+KCk7XG4gIHByaXZhdGUgX2V2ZW50czogU3ViamVjdDxMb2RvcFByaW50UmVzdWx0PiA9IG5ldyBTdWJqZWN0PExvZG9wUHJpbnRSZXN1bHQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWZDb2c6IExvZG9wQ29uZmlnLCBwcml2YXRlIHNjcmlwdFNydjogTGF6eVNlcnZpY2UpIHtcbiAgICB0aGlzLmNvZyA9IGRlZkNvZztcbiAgfVxuXG4gIC8qKlxuICAgKiDDqMKOwrfDpcKPwpbDpsKIwpbDqcKHwo3DpsKWwrDDqMKuwr7Dp8K9wq7DqcKFwo3Dp8K9wq5cbiAgICpcbiAgICogKirDpsKzwqjDr8K8wpoqKsOpwofCjcOmwpbCsMOowq7CvsOnwr3CrsOkwrzCmsOlwoDCksOnwr3CrsOpwofCjcOmwpbCsMOlworCoMOowr3CvcOowoTCmsOmwpzCrMOowrXChMOmwrrCkFxuICAgKi9cbiAgZ2V0IGNvZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29nO1xuICB9XG4gIHNldCBjb2codmFsdWU6IExvZG9wQ29uZmlnKSB7XG4gICAgdGhpcy5fY29nID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9sb2NhbGhvc3Q6ODQ0My9DTG9kb3BmdW5jcy5qcycsXG4gICAgICAgIG5hbWU6ICdDTE9ET1AnLFxuICAgICAgICBjb21wYW55TmFtZTogJycsXG4gICAgICAgIGNoZWNrTWF4Q291bnQ6IDEwMCxcbiAgICAgIH0sXG4gICAgICB0aGlzLmRlZkNvZyxcbiAgICAgIHZhbHVlLFxuICAgICk7XG4gIH1cblxuICAvKiogw6TCusKLw6TCu8K2w6XCj8KYw6bCm8K0w6nCgMKaw6fCn8KlICovXG4gIGdldCBldmVudHMoKTogT2JzZXJ2YWJsZTxMb2RvcFByaW50UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50cy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2soKSB7XG4gICAgaWYgKCF0aGlzLl9sb2RvcCkgdGhyb3cgbmV3IEVycm9yKGDDqMKvwrfDpcKKwqHDpcK/woXDpcKFwojDqMKwwoPDp8KUwqggbG9kb3Agw6jCjsK3w6XCj8KWw6XCr8K5w6jCscKhYCk7XG4gIH1cblxuICBwcml2YXRlIHJlcXVlc3QoKTogdm9pZCB7XG4gICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcblxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuY29nLnVybH0/bmFtZT0ke3RoaXMuY29nLm5hbWV9YDtcbiAgICBsZXQgY2hlY2tNYXhDb3VudCA9IHRoaXMuY29nLmNoZWNrTWF4Q291bnQ7XG4gICAgY29uc3Qgb25SZXNvbHZlID0gKHN0YXR1cywgZXJyb3I/OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuX2luaXQubmV4dCh7XG4gICAgICAgIG9rOiBzdGF0dXMgPT09ICdvaycsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZXJyb3IsXG4gICAgICAgIGxvZG9wOiB0aGlzLl9sb2RvcCxcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgY2hlY2tTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAtLWNoZWNrTWF4Q291bnQ7XG4gICAgICBpZiAodGhpcy5fbG9kb3Aud2Vic2t0ICYmIHRoaXMuX2xvZG9wLndlYnNrdC5yZWFkeVN0YXRlID09PSAxKSB7XG4gICAgICAgIG9uUmVzb2x2ZSgnb2snKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjaGVja01heENvdW50IDwgMCkge1xuICAgICAgICAgIG9uUmVzb2x2ZSgnY2hlY2stbGltaXQnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjaGVja1N0YXR1cygpLCAxMDApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnNjcmlwdFNydi5sb2FkU2NyaXB0KHVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gJ29rJykge1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgb25SZXNvbHZlKCdzY3JpcHQtbG9hZC1lcnJvcicsIHJlc1swXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xvZG9wID1cbiAgICAgICAgd2luZG93Lmhhc093blByb3BlcnR5KHRoaXMuY29nLm5hbWUpICYmXG4gICAgICAgICh3aW5kb3dbdGhpcy5jb2cubmFtZV0gYXMgTG9kb3ApO1xuICAgICAgaWYgKHRoaXMuX2xvZG9wID09PSBudWxsKSB7XG4gICAgICAgIG9uUmVzb2x2ZSgnbG9hZC12YXJpYWJsZS1uYW1lLWVycm9yJywgeyBuYW1lOiB0aGlzLmNvZy5uYW1lIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9sb2RvcC5TRVRfTElDRU5TRVMoXG4gICAgICAgIHRoaXMuY29nLmNvbXBhbnlOYW1lLFxuICAgICAgICB0aGlzLmNvZy5saWNlbnNlLFxuICAgICAgICB0aGlzLmNvZy5saWNlbnNlQSxcbiAgICAgICAgdGhpcy5jb2cubGljZW5zZUIsXG4gICAgICApO1xuICAgICAgY2hlY2tTdGF0dXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiDDqcKHwo3Dp8K9wq4gbG9kb3Agw6XCr8K5w6jCscKhICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX2xvZG9wID0gbnVsbDtcbiAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnJlcXVlc3QoKTtcbiAgfVxuXG4gIC8qKiDDqMKOwrfDpcKPwpYgbG9kb3Agw6XCr8K5w6jCscKhICovXG4gIGdldCBsb2RvcCgpOiBPYnNlcnZhYmxlPExvZG9wUmVzdWx0PiB7XG4gICAgaWYgKHRoaXMuX2xvZG9wKSByZXR1cm4gb2YoPExvZG9wUmVzdWx0Pnsgb2s6IHRydWUsIGxvZG9wOiB0aGlzLl9sb2RvcCB9KTtcbiAgICBpZiAodGhpcy5wZW5kaW5nKSByZXR1cm4gdGhpcy5faW5pdC5hc09ic2VydmFibGUoKTtcblxuICAgIHRoaXMucmVxdWVzdCgpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2luaXQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiogw6jCjsK3w6XCj8KWw6bCicKTw6XCjcKww6bCnMK6w6XCiMKXw6jCocKoICovXG4gIGdldCBwcmludGVyKCk6IHN0cmluZ1tdIHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgY29uc3QgcmV0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5fbG9kb3AuR0VUX1BSSU5URVJfQ09VTlQoKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgIHJldC5wdXNoKHRoaXMuX2xvZG9wLkdFVF9QUklOVEVSX05BTUUoaW5kZXgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqcKZwoTDpcKKwqDDpMK7wqPDp8KgwoHDqMKHwrMgYGxvZG9wYCDDpcKvwrnDqMKxwqHDpMK4worDr8K8wozDpcKtwpfDp8KswqbDpMK4wrLDp8KxwrvDpsKUwq/DpsKMwoEgYHt7a2V5fX1gIMOnwprChMOlworCqMOmwoDCgcOlwo/CgsOmwpXCsFxuICAgKlxuICAgKiAqKsOmwrPCqMOvwrzCmioqIMOkwrvCo8OnwqDCgcOmwpjCr8OmwozCh8OmwonCk8Olwo3CsMOowq7CvsOowq7CocOmwonCgMOkwrrCp8OnwpTCn8Olwq3Cl8OnwqzCpsOkwrjCssOmwpXCsMOmwo3CrlxuICAgKlxuICAgKiBAcGFyYW0gY29kZSDDpMK7wqPDp8KgwoFcbiAgICogQHBhcmFtIGNvbnRleHRPYmogw6XCisKow6bCgMKBw6XCj8KCw6bClcKww6TCuMKKw6TCuMKLw6bClsKHw6XCr8K5w6jCscKhXG4gICAqIEBwYXJhbSBwYXJzZXIgw6jCh8Kqw6XCrsKaw6TCucKJw6jCp8Kjw6bCnsKQw6jCocKow6jCvsK+w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYC9MT0RPUFxcLihbXihdKylcXCgoW15cXG5dKylcXCk7L2lgXG4gICAqL1xuICBhdHRhY2hDb2RlKGNvZGU6IHN0cmluZywgY29udGV4dE9iaj86IE9iamVjdCwgcGFyc2VyPzogUmVnRXhwKTogdm9pZCB7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGlmICghcGFyc2VyKSBwYXJzZXIgPSAvTE9ET1BcXC4oW14oXSspXFwoKFteXFxuXSspXFwpOy9pO1xuICAgIGNvZGUuc3BsaXQoJ1xcbicpLmZvckVhY2gobGluZSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXJzZXIuZXhlYyhsaW5lLnRyaW0oKSk7XG4gICAgICBpZiAoIXJlcykgcmV0dXJuO1xuICAgICAgY29uc3QgZm4gPSB0aGlzLl9sb2RvcFtyZXNbMV1dO1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIGxldCBhcnI6IEFycmF5PGFueT47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZmFrZUZuID0gbmV3IEZ1bmN0aW9uKGByZXR1cm4gWyR7cmVzWzJdfV1gKTtcbiAgICAgICAgICBhcnIgPSBmYWtlRm4oKSBhcyBhbnlbXTtcbiAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFycikgJiYgY29udGV4dE9iaikge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFycltpXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgYXJyW2ldID0gYXJyW2ldLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgL3t7KC4qPyl9fS9nLFxuICAgICAgICAgICAgICAgIChtYXRjaCwga2V5KSA9PiBjb250ZXh0T2JqW2tleS50cmltKCldIHx8ICcnLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmbi5hcHBseSh0aGlzLl9sb2RvcCwgYXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKJwpPDpcK8woDDpsKJwpPDpcKNwrDDqMKuwr7DqMKuwqHDpcKFwrPDqcKXwq3DpcKQwo7DqMKHwqrDpcKKwqjDqMK/wpTDpcKbwp7DpMK7wqPDp8KgwoFcbiAgICpcbiAgICogKirDpsKzwqjDr8K8wpoqKiDDqMKHwqrDpcKKwqjDp8KbwpHDpcKQwqwgYE9uX1JldHVybmAgw6TCusKLw6TCu8K2w6/CvMKMw6jCv8KQw6jCocKMw6XCkMKOw6TCvMKaw6fCp8K7w6nCmcKkXG4gICAqL1xuICBkZXNpZ24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgY29uc3QgdGlkID0gdGhpcy5fbG9kb3AuUFJJTlRfREVTSUdOKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5fbG9kb3AuT25fUmV0dXJuID0gKHRhc2tJRDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAodGlkICE9PSB0YXNrSUQpIHJldHVybjtcbiAgICAgICAgdGhpcy5fbG9kb3AuT25fUmV0dXJuID0gbnVsbDtcbiAgICAgICAgcmVzb2x2ZSgnJyArIHZhbHVlKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHByaW50QnVmZmVyOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIHByaW50RG8oKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucHJpbnRCdWZmZXIuc2hpZnQoKTtcbiAgICBpZiAoIWRhdGEpIHJldHVybjtcbiAgICB0aGlzLmF0dGFjaENvZGUoZGF0YS5jb2RlLCBkYXRhLml0ZW0sIGRhdGEucGFyc2VyKTtcbiAgICBjb25zdCB0aWQgPSB0aGlzLl9sb2RvcC5QUklOVCgpO1xuICAgIHRoaXMuX2xvZG9wLk9uX1JldHVybiA9ICh0YXNrSUQ6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh0aWQgIT09IHRhc2tJRCkgcmV0dXJuO1xuICAgICAgdGhpcy5fbG9kb3AuT25fUmV0dXJuID0gbnVsbDtcbiAgICAgIHRoaXMuX2V2ZW50cy5uZXh0KFxuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIDxMb2RvcFByaW50UmVzdWx0PntcbiAgICAgICAgICAgIG9rOiB2YWx1ZSA9PT0gdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yOiB2YWx1ZSA9PT0gdHJ1ZSA/IG51bGwgOiB2YWx1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICksXG4gICAgICApO1xuICAgICAgdGhpcy5wcmludERvKCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDp8KrwovDpcKNwrPDpsKJwpPDpcKNwrDDr8K8wozDpMK4woDDqMKIwqzDp8KUwqjDpMK6wo7DpsKJwrnDqcKHwo/DpcKlwpfDpsKJwpNcbiAgICpcbiAgICogQHBhcmFtIGNvZGUgw6TCu8Kjw6fCoMKBXG4gICAqIEBwYXJhbSBjb250ZXh0T2JqIMOlworCqMOmwoDCgcOlwo/CgsOmwpXCsMOkwrjCisOkwrjCi8OmwpbCh8Olwq/CucOowrHCoVxuICAgKiBAcGFyYW0gcGFyc2VyIMOowofCqsOlwq7CmsOkwrnCicOowqfCo8Omwp7CkMOowqHCqMOowr7CvsOlwrzCj8OvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAvTE9ET1BcXC4oW14oXSspXFwoKFteXFxuXSspXFwpOy9pYFxuICAgKi9cbiAgcHJpbnQoY29kZTogc3RyaW5nLCBjb250ZXh0T2JqOiBPYmplY3QgfCBPYmplY3RbXSwgcGFyc2VyPzogUmVnRXhwKTogdm9pZCB7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGlmIChjb250ZXh0T2JqKSB7XG4gICAgICB0aGlzLnByaW50QnVmZmVyLnB1c2goXG4gICAgICAgIC4uLihBcnJheS5pc0FycmF5KGNvbnRleHRPYmopID8gY29udGV4dE9iaiA6IFtjb250ZXh0T2JqXSkubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiB7IGNvZGUsIHBhcnNlciwgaXRlbSB9O1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMucHJpbnREbygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2V2ZW50cy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBMb2RvcENvbmZpZyB9IGZyb20gJy4vbG9kb3AuY29uZmlnJztcbmltcG9ydCB7IExvZG9wU2VydmljZSB9IGZyb20gJy4vbG9kb3Auc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtEZWxvblV0aWxNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2RvcE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTG9kb3BNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtMb2RvcFNlcnZpY2UsIExvZG9wQ29uZmlnXSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3ViamVjdCIsIm9mIiwiSW5qZWN0YWJsZSIsIkxhenlTZXJ2aWNlIiwiTmdNb2R1bGUiLCJEZWxvblV0aWxNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLG9CQXVHdUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJO1lBQ0EsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSTtnQkFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5RTtRQUNELE9BQU8sS0FBSyxFQUFFO1lBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQUU7Z0JBQy9CO1lBQ0osSUFBSTtnQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFBRSxD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