/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { LazyService } from '@delon/util';
import { LodopConfig } from './lodop.config';
import * as i0 from "@angular/core";
import * as i1 from "./lodop.config";
import * as i2 from "@delon/util";
var LodopService = /** @class */ (function () {
    function LodopService(defCog, scriptSrv) {
        this.defCog = defCog;
        this.scriptSrv = scriptSrv;
        this.pending = false;
        this._lodop = null;
        this._init = new Subject();
        this._events = new Subject();
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
         */
        function () {
            return this._cog;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._cog = tslib_1.__assign({ url: 'https://localhost:8443/CLodopfuncs.js', name: 'CLODOP', companyName: '', checkMaxCount: 100 }, this.defCog, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LodopService.prototype, "events", {
        /** 事件变更通知 */
        get: /**
         * 事件变更通知
         * @return {?}
         */
        function () {
            return this._events.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LodopService.prototype, "lodop", {
        /** 获取 lodop 对象 */
        get: /**
         * 获取 lodop 对象
         * @return {?}
         */
        function () {
            if (this._lodop)
                return of((/** @type {?} */ ({ ok: true, lodop: this._lodop })));
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
         */
        function () {
            this.check();
            /** @type {?} */
            var ret = [];
            /** @type {?} */
            var count = (/** @type {?} */ (this._lodop)).GET_PRINTER_COUNT();
            for (var index = 0; index < count; index++) {
                ret.push((/** @type {?} */ (this._lodop)).GET_PRINTER_NAME(index));
            }
            return ret;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    LodopService.prototype.check = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this._lodop)
            throw new Error("\u8BF7\u52A1\u5FC5\u5148\u8C03\u7528 lodop \u83B7\u53D6\u5BF9\u8C61");
    };
    /**
     * @private
     * @return {?}
     */
    LodopService.prototype.request = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.pending = true;
        /** @type {?} */
        var url = this.cog.url + "?name=" + this.cog.name;
        /** @type {?} */
        var checkMaxCount = (/** @type {?} */ (this.cog.checkMaxCount));
        /** @type {?} */
        var onResolve = (/**
         * @param {?} status
         * @param {?=} error
         * @return {?}
         */
        function (status, error) {
            _this._init.next({
                ok: status === 'ok',
                status: status,
                error: error,
                lodop: (/** @type {?} */ (_this._lodop)),
            });
        });
        /** @type {?} */
        var checkStatus = (/**
         * @return {?}
         */
        function () {
            --checkMaxCount;
            if ((/** @type {?} */ (_this._lodop)).webskt && (/** @type {?} */ (_this._lodop)).webskt.readyState === 1) {
                onResolve('ok');
            }
            else {
                if (checkMaxCount < 0) {
                    onResolve('check-limit');
                    return;
                }
                setTimeout((/**
                 * @return {?}
                 */
                function () { return checkStatus(); }), 100);
            }
        });
        this.scriptSrv.loadScript(url).then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (res.status !== 'ok') {
                _this.pending = false;
                onResolve('script-load-error', res[0]);
                return;
            }
            if (window.hasOwnProperty((/** @type {?} */ (_this.cog.name)))) {
                _this._lodop = (/** @type {?} */ (window[(/** @type {?} */ (_this.cog.name))]));
            }
            if (_this._lodop === null) {
                onResolve('load-variable-name-error', { name: _this.cog.name });
                return;
            }
            _this._lodop.SET_LICENSES((/** @type {?} */ (_this.cog.companyName)), _this.cog.license, _this.cog.licenseA, _this.cog.licenseB);
            checkStatus();
        }));
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
        code.split('\n').forEach((/**
         * @param {?} line
         * @return {?}
         */
        function (line) {
            /** @type {?} */
            var res = (/** @type {?} */ (parser)).exec(line.trim());
            if (!res)
                return;
            /** @type {?} */
            var fn = (/** @type {?} */ (_this._lodop))[res[1]];
            if (fn) {
                /** @type {?} */
                var arr = null;
                try {
                    // tslint:disable-next-line: function-constructor
                    /** @type {?} */
                    var fakeFn = new Function("return [" + res[2] + "]");
                    arr = fakeFn();
                }
                catch (_a) { }
                if (arr != null && Array.isArray(arr) && contextObj) {
                    for (var i = 0; i < arr.length; i++) {
                        if (typeof arr[i] === 'string') {
                            arr[i] = ((/** @type {?} */ (arr[i]))).replace(/{{(.*?)}}/g, (/**
                             * @param {?} _match
                             * @param {?} key
                             * @return {?}
                             */
                            function (_match, key) { return contextObj[key.trim()] || ''; }));
                        }
                    }
                }
                fn.apply(_this._lodop, (/** @type {?} */ (arr)));
            }
        }));
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
        var tid = (/** @type {?} */ (this._lodop)).PRINT_DESIGN();
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            (/** @type {?} */ (_this._lodop)).On_Return = (/**
             * @param {?} taskID
             * @param {?} value
             * @return {?}
             */
            function (taskID, value) {
                if (tid !== taskID)
                    return;
                (/** @type {?} */ (_this._lodop)).On_Return = null;
                resolve('' + value);
            });
        }));
    };
    /**
     * @private
     * @return {?}
     */
    LodopService.prototype.printDo = /**
     * @private
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
        var tid = (/** @type {?} */ (this._lodop)).PRINT();
        (/** @type {?} */ (this._lodop)).On_Return = (/**
         * @param {?} taskID
         * @param {?} value
         * @return {?}
         */
        function (taskID, value) {
            if (tid !== taskID)
                return;
            (/** @type {?} */ (_this._lodop)).On_Return = null;
            _this._events.next(tslib_1.__assign({ ok: value === true, error: value === true ? null : value }, data));
            _this.printDo();
        });
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
            (_a = this.printBuffer).push.apply(_a, tslib_1.__spread((Array.isArray(contextObj) ? contextObj : [contextObj]).map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return { code: code, parser: parser, item: item };
            }))));
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LodopService.ctorParameters = function () { return [
        { type: LodopConfig },
        { type: LazyService }
    ]; };
    /** @nocollapse */ LodopService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LodopService_Factory() { return new LodopService(i0.ɵɵinject(i1.LodopConfig), i0.ɵɵinject(i2.LazyService)); }, token: LodopService, providedIn: "root" });
    return LodopService;
}());
export { LodopService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LodopService.prototype._cog;
    /**
     * @type {?}
     * @private
     */
    LodopService.prototype.pending;
    /**
     * @type {?}
     * @private
     */
    LodopService.prototype._lodop;
    /**
     * @type {?}
     * @private
     */
    LodopService.prototype._init;
    /**
     * @type {?}
     * @private
     */
    LodopService.prototype._events;
    /**
     * @type {?}
     * @private
     */
    LodopService.prototype.printBuffer;
    /**
     * @type {?}
     * @private
     */
    LodopService.prototype.defCog;
    /**
     * @type {?}
     * @private
     */
    LodopService.prototype.scriptSrv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbG9kb3AvIiwic291cmNlcyI6WyJsb2RvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsRUFBRSxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUc3QztJQUVFLHNCQUFvQixNQUFtQixFQUFVLFNBQXNCO1FBQW5ELFdBQU0sR0FBTixNQUFNLENBQWE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBa0QvRCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBaUIsSUFBSSxDQUFDO1FBQzVCLFVBQUssR0FBRyxJQUFJLE9BQU8sRUFBZSxDQUFDO1FBQ25DLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBb0IsQ0FBQztRQUMxQyxnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQXJEOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQU9ELHNCQUFJLDZCQUFHO1FBTFA7Ozs7V0FJRzs7Ozs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLENBQUM7Ozs7O1FBQ0QsVUFBUSxLQUFrQjtZQUN4QixJQUFJLENBQUMsSUFBSSxzQkFDUCxHQUFHLEVBQUUsdUNBQXVDLEVBQzVDLElBQUksRUFBRSxRQUFRLEVBQ2QsV0FBVyxFQUFFLEVBQUUsRUFDZixhQUFhLEVBQUUsR0FBRyxJQUNmLElBQUksQ0FBQyxNQUFNLEVBQ1gsS0FBSyxDQUNULENBQUM7UUFDSixDQUFDOzs7T0FWQTtJQWFELHNCQUFJLGdDQUFNO1FBRFYsYUFBYTs7Ozs7UUFDYjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUdELHNCQUFJLCtCQUFLO1FBRFQsa0JBQWtCOzs7OztRQUNsQjtZQUNFLElBQUksSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTyxFQUFFLENBQUMsbUJBQUEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQWUsQ0FBQyxDQUFDO1lBQzVFLElBQUksSUFBSSxDQUFDLE9BQU87Z0JBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRW5ELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUVmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUdELHNCQUFJLGlDQUFPO1FBRFgsY0FBYzs7Ozs7UUFDZDtZQUNFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Z0JBQ1AsR0FBRyxHQUFhLEVBQUU7O2dCQUNsQixLQUFLLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLGlCQUFpQixFQUFFO1lBQzlDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQzFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQUEsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDaEQ7WUFDRCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUM7OztPQUFBOzs7OztJQVNPLDRCQUFLOzs7O0lBQWI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHFFQUFtQixDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFTyw4QkFBTzs7OztJQUFmO1FBQUEsaUJBMENDO1FBekNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOztZQUVkLEdBQUcsR0FBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsY0FBUyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQU07O1lBQy9DLGFBQWEsR0FBRyxtQkFBQSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBVTs7WUFDOUMsU0FBUzs7Ozs7UUFBRyxVQUFDLE1BQU0sRUFBRSxLQUFVO1lBQ25DLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNkLEVBQUUsRUFBRSxNQUFNLEtBQUssSUFBSTtnQkFDbkIsTUFBTSxRQUFBO2dCQUNOLEtBQUssT0FBQTtnQkFDTCxLQUFLLEVBQUUsbUJBQUEsS0FBSSxDQUFDLE1BQU0sRUFBQzthQUNwQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7O1lBQ0ssV0FBVzs7O1FBQUc7WUFDbEIsRUFBRSxhQUFhLENBQUM7WUFDaEIsSUFBSSxtQkFBQSxLQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsTUFBTSxJQUFJLG1CQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtnQkFDL0QsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNMLElBQUksYUFBYSxHQUFHLENBQUMsRUFBRTtvQkFDckIsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUN6QixPQUFPO2lCQUNSO2dCQUNELFVBQVU7OztnQkFBQyxjQUFNLE9BQUEsV0FBVyxFQUFFLEVBQWIsQ0FBYSxHQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3RDO1FBQ0gsQ0FBQyxDQUFBO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsR0FBRztZQUNyQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO2dCQUN2QixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsU0FBUyxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPO2FBQ1I7WUFDRCxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsbUJBQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFFO2dCQUN6QyxLQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFBLE1BQU0sQ0FBQyxtQkFBQSxLQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxDQUFDLEVBQVMsQ0FBQzthQUMvQztZQUNELElBQUksS0FBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQ3hCLFNBQVMsQ0FBQywwQkFBMEIsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQy9ELE9BQU87YUFDUjtZQUNELEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLG1CQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLEVBQUUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4RyxXQUFXLEVBQUUsQ0FBQztRQUNoQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQkFBa0I7Ozs7O0lBQ2xCLDRCQUFLOzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHOzs7Ozs7Ozs7OztJQUNILGlDQUFVOzs7Ozs7Ozs7O0lBQVYsVUFBVyxJQUFZLEVBQUUsVUFBZSxFQUFFLE1BQWU7UUFBekQsaUJBeUJDO1FBeEJDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxNQUFNO1lBQUUsTUFBTSxHQUFHLDhCQUE4QixDQUFDO1FBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsSUFBSTs7Z0JBQ3JCLEdBQUcsR0FBRyxtQkFBQSxNQUFNLEVBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxHQUFHO2dCQUFFLE9BQU87O2dCQUNYLEVBQUUsR0FBRyxtQkFBQSxLQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksRUFBRSxFQUFFOztvQkFDRixHQUFHLEdBQWlCLElBQUk7Z0JBQzVCLElBQUk7Ozt3QkFFSSxNQUFNLEdBQUcsSUFBSSxRQUFRLENBQUMsYUFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQUcsQ0FBQztvQkFDakQsR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDO2lCQUNoQjtnQkFBQyxXQUFNLEdBQUU7Z0JBRVYsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksVUFBVSxFQUFFO29CQUNuRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDbkMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7NEJBQzlCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLG1CQUFBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVk7Ozs7OzRCQUFFLFVBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSyxPQUFBLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQTVCLENBQTRCLEVBQUMsQ0FBQzt5QkFDbEc7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFFLG1CQUFBLEdBQUcsRUFBQyxDQUFDLENBQUM7YUFDN0I7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsNkJBQU07Ozs7OztJQUFOO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7O1lBQ1AsR0FBRyxHQUFHLG1CQUFBLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxZQUFZLEVBQUU7UUFDdkMsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDeEIsbUJBQUEsS0FBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLFNBQVM7Ozs7O1lBQUcsVUFBQyxNQUFjLEVBQUUsS0FBdUI7Z0JBQy9ELElBQUksR0FBRyxLQUFLLE1BQU07b0JBQUUsT0FBTztnQkFDM0IsbUJBQUEsS0FBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQzlCLE9BQU8sQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFBLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBQ08sOEJBQU87Ozs7SUFBZjtRQUFBLGlCQWVDOztZQWRPLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTtRQUNyQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztZQUM3QyxHQUFHLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLEtBQUssRUFBRTtRQUNoQyxtQkFBQSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsU0FBUzs7Ozs7UUFBRyxVQUFDLE1BQWMsRUFBRSxLQUF1QjtZQUMvRCxJQUFJLEdBQUcsS0FBSyxNQUFNO2dCQUFFLE9BQU87WUFDM0IsbUJBQUEsS0FBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDOUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLG9CQUNmLEVBQUUsRUFBRSxLQUFLLEtBQUssSUFBSSxFQUNsQixLQUFLLEVBQUUsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQ2pDLElBQUksRUFDUCxDQUFDO1lBQ0gsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7O0lBQ0gsNEJBQUs7Ozs7Ozs7O0lBQUwsVUFBTSxJQUFZLEVBQUUsVUFBMEIsRUFBRSxNQUFlOztRQUM3RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLFVBQVUsRUFBRTtZQUNkLENBQUEsS0FBQSxJQUFJLENBQUMsV0FBVyxDQUFBLENBQUMsSUFBSSw0QkFDaEIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxJQUFJO2dCQUNqRSxPQUFPLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQztZQUNoQyxDQUFDLEVBQUMsR0FDRjtTQUNIO1FBQ0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxrQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Z0JBNU1GLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBSHpCLFdBQVc7Z0JBRlgsV0FBVzs7O3VCQUhwQjtDQXFOQyxBQTdNRCxJQTZNQztTQTVNWSxZQUFZOzs7Ozs7SUFrRHZCLDRCQUEwQjs7Ozs7SUFDMUIsK0JBQXdCOzs7OztJQUN4Qiw4QkFBb0M7Ozs7O0lBQ3BDLDZCQUEyQzs7Ozs7SUFDM0MsK0JBQWtEOzs7OztJQUNsRCxtQ0FBZ0M7Ozs7O0lBdERwQiw4QkFBMkI7Ozs7O0lBQUUsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgTG9kb3BDb25maWcgfSBmcm9tICcuL2xvZG9wLmNvbmZpZyc7XG5pbXBvcnQgeyBMb2RvcCwgTG9kb3BQcmludFJlc3VsdCwgTG9kb3BSZXN1bHQgfSBmcm9tICcuL2xvZG9wLnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMb2RvcFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlZkNvZzogTG9kb3BDb25maWcsIHByaXZhdGUgc2NyaXB0U3J2OiBMYXp5U2VydmljZSkge1xuICAgIHRoaXMuY29nID0gZGVmQ29nO1xuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPluaIlumHjeaWsOiuvue9rumFjee9rlxuICAgKlxuICAgKiAqKuazqO+8mioq6YeN5paw6K6+572u5Lya5YCS572u6YeN5paw5Yqg6L296ISa5pys6LWE5rqQXG4gICAqL1xuICBnZXQgY29nKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2c7XG4gIH1cbiAgc2V0IGNvZyh2YWx1ZTogTG9kb3BDb25maWcpIHtcbiAgICB0aGlzLl9jb2cgPSB7XG4gICAgICB1cmw6ICdodHRwczovL2xvY2FsaG9zdDo4NDQzL0NMb2RvcGZ1bmNzLmpzJyxcbiAgICAgIG5hbWU6ICdDTE9ET1AnLFxuICAgICAgY29tcGFueU5hbWU6ICcnLFxuICAgICAgY2hlY2tNYXhDb3VudDogMTAwLFxuICAgICAgLi4udGhpcy5kZWZDb2csXG4gICAgICAuLi52YWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIOS6i+S7tuWPmOabtOmAmuefpSAqL1xuICBnZXQgZXZlbnRzKCk6IE9ic2VydmFibGU8TG9kb3BQcmludFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLl9ldmVudHMuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiog6I635Y+WIGxvZG9wIOWvueixoSAqL1xuICBnZXQgbG9kb3AoKTogT2JzZXJ2YWJsZTxMb2RvcFJlc3VsdD4ge1xuICAgIGlmICh0aGlzLl9sb2RvcCkgcmV0dXJuIG9mKHsgb2s6IHRydWUsIGxvZG9wOiB0aGlzLl9sb2RvcCB9IGFzIExvZG9wUmVzdWx0KTtcbiAgICBpZiAodGhpcy5wZW5kaW5nKSByZXR1cm4gdGhpcy5faW5pdC5hc09ic2VydmFibGUoKTtcblxuICAgIHRoaXMucmVxdWVzdCgpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2luaXQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiog6I635Y+W5omT5Y2w5py65YiX6KGoICovXG4gIGdldCBwcmludGVyKCk6IHN0cmluZ1tdIHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgY29uc3QgcmV0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5fbG9kb3AhLkdFVF9QUklOVEVSX0NPVU5UKCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICByZXQucHVzaCh0aGlzLl9sb2RvcCEuR0VUX1BSSU5URVJfTkFNRShpbmRleCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBfY29nOiBMb2RvcENvbmZpZztcbiAgcHJpdmF0ZSBwZW5kaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgX2xvZG9wOiBMb2RvcCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9pbml0ID0gbmV3IFN1YmplY3Q8TG9kb3BSZXN1bHQ+KCk7XG4gIHByaXZhdGUgX2V2ZW50cyA9IG5ldyBTdWJqZWN0PExvZG9wUHJpbnRSZXN1bHQ+KCk7XG4gIHByaXZhdGUgcHJpbnRCdWZmZXI6IGFueVtdID0gW107XG5cbiAgcHJpdmF0ZSBjaGVjaygpIHtcbiAgICBpZiAoIXRoaXMuX2xvZG9wKSB0aHJvdyBuZXcgRXJyb3IoYOivt+WKoeW/heWFiOiwg+eUqCBsb2RvcCDojrflj5blr7nosaFgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVxdWVzdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xuXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb2cudXJsfT9uYW1lPSR7dGhpcy5jb2cubmFtZX1gO1xuICAgIGxldCBjaGVja01heENvdW50ID0gdGhpcy5jb2cuY2hlY2tNYXhDb3VudCBhcyBudW1iZXI7XG4gICAgY29uc3Qgb25SZXNvbHZlID0gKHN0YXR1cywgZXJyb3I/OiB7fSkgPT4ge1xuICAgICAgdGhpcy5faW5pdC5uZXh0KHtcbiAgICAgICAgb2s6IHN0YXR1cyA9PT0gJ29rJyxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBlcnJvcixcbiAgICAgICAgbG9kb3A6IHRoaXMuX2xvZG9wISxcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgY2hlY2tTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAtLWNoZWNrTWF4Q291bnQ7XG4gICAgICBpZiAodGhpcy5fbG9kb3AhLndlYnNrdCAmJiB0aGlzLl9sb2RvcCEud2Vic2t0LnJlYWR5U3RhdGUgPT09IDEpIHtcbiAgICAgICAgb25SZXNvbHZlKCdvaycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoZWNrTWF4Q291bnQgPCAwKSB7XG4gICAgICAgICAgb25SZXNvbHZlKCdjaGVjay1saW1pdCcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNoZWNrU3RhdHVzKCksIDEwMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuc2NyaXB0U3J2LmxvYWRTY3JpcHQodXJsKS50aGVuKHJlcyA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gJ29rJykge1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgb25SZXNvbHZlKCdzY3JpcHQtbG9hZC1lcnJvcicsIHJlc1swXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh3aW5kb3cuaGFzT3duUHJvcGVydHkodGhpcy5jb2cubmFtZSEpKSB7XG4gICAgICAgIHRoaXMuX2xvZG9wID0gd2luZG93W3RoaXMuY29nLm5hbWUhXSBhcyBMb2RvcDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9sb2RvcCA9PT0gbnVsbCkge1xuICAgICAgICBvblJlc29sdmUoJ2xvYWQtdmFyaWFibGUtbmFtZS1lcnJvcicsIHsgbmFtZTogdGhpcy5jb2cubmFtZSB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fbG9kb3AuU0VUX0xJQ0VOU0VTKHRoaXMuY29nLmNvbXBhbnlOYW1lISwgdGhpcy5jb2cubGljZW5zZSwgdGhpcy5jb2cubGljZW5zZUEsIHRoaXMuY29nLmxpY2Vuc2VCKTtcbiAgICAgIGNoZWNrU3RhdHVzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiog6YeN572uIGxvZG9wIOWvueixoSAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLl9sb2RvcCA9IG51bGw7XG4gICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgdGhpcy5yZXF1ZXN0KCk7XG4gIH1cblxuICAvKipcbiAgICog6ZmE5Yqg5Luj56CB6IezIGBsb2RvcGAg5a+56LGh5LiK77yM5a2X56ym5Liy57G75pSv5oyBIGB7e2tleX19YCDnmoTliqjmgIHlj4LmlbBcbiAgICpcbiAgICogKirms6jvvJoqKiDku6PnoIHmmK/mjIfmiZPljbDorr7orqHmiYDkuqfnlJ/lrZfnrKbkuLLmlbDmja5cbiAgICpcbiAgICogQHBhcmFtIGNvZGUg5Luj56CBXG4gICAqIEBwYXJhbSBjb250ZXh0T2JqIOWKqOaAgeWPguaVsOS4iuS4i+aWh+WvueixoVxuICAgKiBAcGFyYW0gcGFyc2VyIOiHquWumuS5ieino+aekOihqOi+vuW8j++8jOm7mOiupO+8mmAvTE9ET1BcXC4oW14oXSspXFwoKFteXFxuXSspXFwpOy9pYFxuICAgKi9cbiAgYXR0YWNoQ29kZShjb2RlOiBzdHJpbmcsIGNvbnRleHRPYmo/OiB7fSwgcGFyc2VyPzogUmVnRXhwKTogdm9pZCB7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGlmICghcGFyc2VyKSBwYXJzZXIgPSAvTE9ET1BcXC4oW14oXSspXFwoKFteXFxuXSspXFwpOy9pO1xuICAgIGNvZGUuc3BsaXQoJ1xcbicpLmZvckVhY2gobGluZSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXJzZXIhLmV4ZWMobGluZS50cmltKCkpO1xuICAgICAgaWYgKCFyZXMpIHJldHVybjtcbiAgICAgIGNvbnN0IGZuID0gdGhpcy5fbG9kb3AhW3Jlc1sxXV07XG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgbGV0IGFycjogYW55W10gfCBudWxsID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGZ1bmN0aW9uLWNvbnN0cnVjdG9yXG4gICAgICAgICAgY29uc3QgZmFrZUZuID0gbmV3IEZ1bmN0aW9uKGByZXR1cm4gWyR7cmVzWzJdfV1gKTtcbiAgICAgICAgICBhcnIgPSBmYWtlRm4oKTtcbiAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgIGlmIChhcnIgIT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KGFycikgJiYgY29udGV4dE9iaikge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFycltpXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgYXJyW2ldID0gKGFycltpXSBhcyBzdHJpbmcpLnJlcGxhY2UoL3t7KC4qPyl9fS9nLCAoX21hdGNoLCBrZXkpID0+IGNvbnRleHRPYmpba2V5LnRyaW0oKV0gfHwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmbi5hcHBseSh0aGlzLl9sb2RvcCwgYXJyISk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5omT5byA5omT5Y2w6K6+6K6h5YWz6Zet5ZCO6Ieq5Yqo6L+U5Zue5Luj56CBXG4gICAqXG4gICAqICoq5rOo77yaKiog6Ieq5Yqo55uR5ZCsIGBPbl9SZXR1cm5gIOS6i+S7tu+8jOi/kOihjOWQjuS8muenu+mZpFxuICAgKi9cbiAgZGVzaWduKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGNvbnN0IHRpZCA9IHRoaXMuX2xvZG9wIS5QUklOVF9ERVNJR04oKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLl9sb2RvcCEuT25fUmV0dXJuID0gKHRhc2tJRDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAodGlkICE9PSB0YXNrSUQpIHJldHVybjtcbiAgICAgICAgdGhpcy5fbG9kb3AhLk9uX1JldHVybiA9IG51bGw7XG4gICAgICAgIHJlc29sdmUoJycgKyB2YWx1ZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgcHJpbnREbygpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcmludEJ1ZmZlci5zaGlmdCgpO1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuICAgIHRoaXMuYXR0YWNoQ29kZShkYXRhLmNvZGUsIGRhdGEuaXRlbSwgZGF0YS5wYXJzZXIpO1xuICAgIGNvbnN0IHRpZCA9IHRoaXMuX2xvZG9wIS5QUklOVCgpO1xuICAgIHRoaXMuX2xvZG9wIS5Pbl9SZXR1cm4gPSAodGFza0lEOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodGlkICE9PSB0YXNrSUQpIHJldHVybjtcbiAgICAgIHRoaXMuX2xvZG9wIS5Pbl9SZXR1cm4gPSBudWxsO1xuICAgICAgdGhpcy5fZXZlbnRzLm5leHQoe1xuICAgICAgICBvazogdmFsdWUgPT09IHRydWUsXG4gICAgICAgIGVycm9yOiB2YWx1ZSA9PT0gdHJ1ZSA/IG51bGwgOiB2YWx1ZSxcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcmludERvKCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnq4vljbPmiZPljbDvvIzkuIDoiKznlKjkuo7mibnph4/lpZfmiZNcbiAgICpcbiAgICogQHBhcmFtIGNvZGUg5Luj56CBXG4gICAqIEBwYXJhbSBjb250ZXh0T2JqIOWKqOaAgeWPguaVsOS4iuS4i+aWh+WvueixoVxuICAgKiBAcGFyYW0gcGFyc2VyIOiHquWumuS5ieino+aekOihqOi+vuW8j++8jOm7mOiupO+8mmAvTE9ET1BcXC4oW14oXSspXFwoKFteXFxuXSspXFwpOy9pYFxuICAgKi9cbiAgcHJpbnQoY29kZTogc3RyaW5nLCBjb250ZXh0T2JqOiB7fSB8IEFycmF5PHt9PiwgcGFyc2VyPzogUmVnRXhwKTogdm9pZCB7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGlmIChjb250ZXh0T2JqKSB7XG4gICAgICB0aGlzLnByaW50QnVmZmVyLnB1c2goXG4gICAgICAgIC4uLihBcnJheS5pc0FycmF5KGNvbnRleHRPYmopID8gY29udGV4dE9iaiA6IFtjb250ZXh0T2JqXSkubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiB7IGNvZGUsIHBhcnNlciwgaXRlbSB9O1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMucHJpbnREbygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2V2ZW50cy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=