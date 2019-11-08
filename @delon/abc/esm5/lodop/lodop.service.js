/**
 * @fileoverview added by tsickle
 * Generated from: lodop.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbG9kb3AvIiwic291cmNlcyI6WyJsb2RvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLEVBQUUsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHN0M7SUFFRSxzQkFBb0IsTUFBbUIsRUFBVSxTQUFzQjtRQUFuRCxXQUFNLEdBQU4sTUFBTSxDQUFhO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQWtEL0QsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQWlCLElBQUksQ0FBQztRQUM1QixVQUFLLEdBQUcsSUFBSSxPQUFPLEVBQWUsQ0FBQztRQUNuQyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQW9CLENBQUM7UUFDMUMsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFyRDlCLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFPRCxzQkFBSSw2QkFBRztRQUxQOzs7O1dBSUc7Ozs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDOzs7OztRQUNELFVBQVEsS0FBa0I7WUFDeEIsSUFBSSxDQUFDLElBQUksc0JBQ1AsR0FBRyxFQUFFLHVDQUF1QyxFQUM1QyxJQUFJLEVBQUUsUUFBUSxFQUNkLFdBQVcsRUFBRSxFQUFFLEVBQ2YsYUFBYSxFQUFFLEdBQUcsSUFDZixJQUFJLENBQUMsTUFBTSxFQUNYLEtBQUssQ0FDVCxDQUFDO1FBQ0osQ0FBQzs7O09BVkE7SUFhRCxzQkFBSSxnQ0FBTTtRQURWLGFBQWE7Ozs7O1FBQ2I7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFHRCxzQkFBSSwrQkFBSztRQURULGtCQUFrQjs7Ozs7UUFDbEI7WUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNO2dCQUFFLE9BQU8sRUFBRSxDQUFDLG1CQUFBLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFlLENBQUMsQ0FBQztZQUM1RSxJQUFJLElBQUksQ0FBQyxPQUFPO2dCQUFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUVuRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFZixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFHRCxzQkFBSSxpQ0FBTztRQURYLGNBQWM7Ozs7O1FBQ2Q7WUFDRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7O2dCQUNQLEdBQUcsR0FBYSxFQUFFOztnQkFDbEIsS0FBSyxHQUFHLG1CQUFBLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxpQkFBaUIsRUFBRTtZQUM5QyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUMxQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFBLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ2hEO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDOzs7T0FBQTs7Ozs7SUFTTyw0QkFBSzs7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxxRUFBbUIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRU8sOEJBQU87Ozs7SUFBZjtRQUFBLGlCQTBDQztRQXpDQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7WUFFZCxHQUFHLEdBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFNOztZQUMvQyxhQUFhLEdBQUcsbUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQVU7O1lBQzlDLFNBQVM7Ozs7O1FBQUcsVUFBQyxNQUFNLEVBQUUsS0FBVTtZQUNuQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDZCxFQUFFLEVBQUUsTUFBTSxLQUFLLElBQUk7Z0JBQ25CLE1BQU0sUUFBQTtnQkFDTixLQUFLLE9BQUE7Z0JBQ0wsS0FBSyxFQUFFLG1CQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUM7YUFDcEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBOztZQUNLLFdBQVc7OztRQUFHO1lBQ2xCLEVBQUUsYUFBYSxDQUFDO1lBQ2hCLElBQUksbUJBQUEsS0FBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLE1BQU0sSUFBSSxtQkFBQSxLQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7Z0JBQy9ELFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQjtpQkFBTTtnQkFDTCxJQUFJLGFBQWEsR0FBRyxDQUFDLEVBQUU7b0JBQ3JCLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDekIsT0FBTztpQkFDUjtnQkFDRCxVQUFVOzs7Z0JBQUMsY0FBTSxPQUFBLFdBQVcsRUFBRSxFQUFiLENBQWEsR0FBRSxHQUFHLENBQUMsQ0FBQzthQUN0QztRQUNILENBQUMsQ0FBQTtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLEdBQUc7WUFDckMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDdkIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsT0FBTzthQUNSO1lBQ0QsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLG1CQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLENBQUMsRUFBRTtnQkFDekMsS0FBSSxDQUFDLE1BQU0sR0FBRyxtQkFBQSxNQUFNLENBQUMsbUJBQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxFQUFTLENBQUM7YUFDL0M7WUFDRCxJQUFJLEtBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO2dCQUN4QixTQUFTLENBQUMsMEJBQTBCLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRCxPQUFPO2FBQ1I7WUFDRCxLQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxtQkFBQSxLQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyxFQUFFLEtBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEcsV0FBVyxFQUFFLENBQUM7UUFDaEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0JBQWtCOzs7OztJQUNsQiw0QkFBSzs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRzs7Ozs7Ozs7Ozs7SUFDSCxpQ0FBVTs7Ozs7Ozs7OztJQUFWLFVBQVcsSUFBWSxFQUFFLFVBQWUsRUFBRSxNQUFlO1FBQXpELGlCQXlCQztRQXhCQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsTUFBTTtZQUFFLE1BQU0sR0FBRyw4QkFBOEIsQ0FBQztRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLElBQUk7O2dCQUNyQixHQUFHLEdBQUcsbUJBQUEsTUFBTSxFQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsR0FBRztnQkFBRSxPQUFPOztnQkFDWCxFQUFFLEdBQUcsbUJBQUEsS0FBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLEVBQUUsRUFBRTs7b0JBQ0YsR0FBRyxHQUFpQixJQUFJO2dCQUM1QixJQUFJOzs7d0JBRUksTUFBTSxHQUFHLElBQUksUUFBUSxDQUFDLGFBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFHLENBQUM7b0JBQ2pELEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQUMsV0FBTSxHQUFFO2dCQUVWLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsRUFBRTtvQkFDbkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ25DLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFOzRCQUM5QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxtQkFBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZOzs7Ozs0QkFBRSxVQUFDLE1BQU0sRUFBRSxHQUFHLElBQUssT0FBQSxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxFQUE1QixDQUE0QixFQUFDLENBQUM7eUJBQ2xHO3FCQUNGO2lCQUNGO2dCQUNELEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxtQkFBQSxHQUFHLEVBQUMsQ0FBQyxDQUFDO2FBQzdCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILDZCQUFNOzs7Ozs7SUFBTjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztZQUNQLEdBQUcsR0FBRyxtQkFBQSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsWUFBWSxFQUFFO1FBQ3ZDLE9BQU8sSUFBSSxPQUFPOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ3hCLG1CQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxTQUFTOzs7OztZQUFHLFVBQUMsTUFBYyxFQUFFLEtBQXVCO2dCQUMvRCxJQUFJLEdBQUcsS0FBSyxNQUFNO29CQUFFLE9BQU87Z0JBQzNCLG1CQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUM5QixPQUFPLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQSxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUNPLDhCQUFPOzs7O0lBQWY7UUFBQSxpQkFlQzs7WUFkTyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7UUFDckMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFDN0MsR0FBRyxHQUFHLG1CQUFBLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxLQUFLLEVBQUU7UUFDaEMsbUJBQUEsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLFNBQVM7Ozs7O1FBQUcsVUFBQyxNQUFjLEVBQUUsS0FBdUI7WUFDL0QsSUFBSSxHQUFHLEtBQUssTUFBTTtnQkFBRSxPQUFPO1lBQzNCLG1CQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxvQkFDZixFQUFFLEVBQUUsS0FBSyxLQUFLLElBQUksRUFDbEIsS0FBSyxFQUFFLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUNqQyxJQUFJLEVBQ1AsQ0FBQztZQUNILEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixDQUFDLENBQUEsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNILDRCQUFLOzs7Ozs7OztJQUFMLFVBQU0sSUFBWSxFQUFFLFVBQTBCLEVBQUUsTUFBZTs7UUFDN0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxVQUFVLEVBQUU7WUFDZCxDQUFBLEtBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQSxDQUFDLElBQUksNEJBQ2hCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsSUFBSTtnQkFDakUsT0FBTyxFQUFFLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUM7WUFDaEMsQ0FBQyxFQUFDLEdBQ0Y7U0FDSDtRQUNELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsa0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7O2dCQTVNRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQUh6QixXQUFXO2dCQUZYLFdBQVc7Ozt1QkFIcEI7Q0FxTkMsQUE3TUQsSUE2TUM7U0E1TVksWUFBWTs7Ozs7O0lBa0R2Qiw0QkFBMEI7Ozs7O0lBQzFCLCtCQUF3Qjs7Ozs7SUFDeEIsOEJBQW9DOzs7OztJQUNwQyw2QkFBMkM7Ozs7O0lBQzNDLCtCQUFrRDs7Ozs7SUFDbEQsbUNBQWdDOzs7OztJQXREcEIsOEJBQTJCOzs7OztJQUFFLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IExvZG9wQ29uZmlnIH0gZnJvbSAnLi9sb2RvcC5jb25maWcnO1xuaW1wb3J0IHsgTG9kb3AsIExvZG9wUHJpbnRSZXN1bHQsIExvZG9wUmVzdWx0IH0gZnJvbSAnLi9sb2RvcC50eXBlcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTG9kb3BTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWZDb2c6IExvZG9wQ29uZmlnLCBwcml2YXRlIHNjcmlwdFNydjogTGF6eVNlcnZpY2UpIHtcbiAgICB0aGlzLmNvZyA9IGRlZkNvZztcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bmiJbph43mlrDorr7nva7phY3nva5cbiAgICpcbiAgICogKirms6jvvJoqKumHjeaWsOiuvue9ruS8muWAkue9rumHjeaWsOWKoOi9veiEmuacrOi1hOa6kFxuICAgKi9cbiAgZ2V0IGNvZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29nO1xuICB9XG4gIHNldCBjb2codmFsdWU6IExvZG9wQ29uZmlnKSB7XG4gICAgdGhpcy5fY29nID0ge1xuICAgICAgdXJsOiAnaHR0cHM6Ly9sb2NhbGhvc3Q6ODQ0My9DTG9kb3BmdW5jcy5qcycsXG4gICAgICBuYW1lOiAnQ0xPRE9QJyxcbiAgICAgIGNvbXBhbnlOYW1lOiAnJyxcbiAgICAgIGNoZWNrTWF4Q291bnQ6IDEwMCxcbiAgICAgIC4uLnRoaXMuZGVmQ29nLFxuICAgICAgLi4udmFsdWUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKiDkuovku7blj5jmm7TpgJrnn6UgKi9cbiAgZ2V0IGV2ZW50cygpOiBPYnNlcnZhYmxlPExvZG9wUHJpbnRSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnRzLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqIOiOt+WPliBsb2RvcCDlr7nosaEgKi9cbiAgZ2V0IGxvZG9wKCk6IE9ic2VydmFibGU8TG9kb3BSZXN1bHQ+IHtcbiAgICBpZiAodGhpcy5fbG9kb3ApIHJldHVybiBvZih7IG9rOiB0cnVlLCBsb2RvcDogdGhpcy5fbG9kb3AgfSBhcyBMb2RvcFJlc3VsdCk7XG4gICAgaWYgKHRoaXMucGVuZGluZykgcmV0dXJuIHRoaXMuX2luaXQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICB0aGlzLnJlcXVlc3QoKTtcblxuICAgIHJldHVybiB0aGlzLl9pbml0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqIOiOt+WPluaJk+WNsOacuuWIl+ihqCAqL1xuICBnZXQgcHJpbnRlcigpOiBzdHJpbmdbXSB7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGNvbnN0IHJldDogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuX2xvZG9wIS5HRVRfUFJJTlRFUl9DT1VOVCgpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgcmV0LnB1c2godGhpcy5fbG9kb3AhLkdFVF9QUklOVEVSX05BTUUoaW5kZXgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHByaXZhdGUgX2NvZzogTG9kb3BDb25maWc7XG4gIHByaXZhdGUgcGVuZGluZyA9IGZhbHNlO1xuICBwcml2YXRlIF9sb2RvcDogTG9kb3AgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfaW5pdCA9IG5ldyBTdWJqZWN0PExvZG9wUmVzdWx0PigpO1xuICBwcml2YXRlIF9ldmVudHMgPSBuZXcgU3ViamVjdDxMb2RvcFByaW50UmVzdWx0PigpO1xuICBwcml2YXRlIHByaW50QnVmZmVyOiBhbnlbXSA9IFtdO1xuXG4gIHByaXZhdGUgY2hlY2soKSB7XG4gICAgaWYgKCF0aGlzLl9sb2RvcCkgdGhyb3cgbmV3IEVycm9yKGDor7fliqHlv4XlhYjosIPnlKggbG9kb3Ag6I635Y+W5a+56LGhYCk7XG4gIH1cblxuICBwcml2YXRlIHJlcXVlc3QoKTogdm9pZCB7XG4gICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcblxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuY29nLnVybH0/bmFtZT0ke3RoaXMuY29nLm5hbWV9YDtcbiAgICBsZXQgY2hlY2tNYXhDb3VudCA9IHRoaXMuY29nLmNoZWNrTWF4Q291bnQgYXMgbnVtYmVyO1xuICAgIGNvbnN0IG9uUmVzb2x2ZSA9IChzdGF0dXMsIGVycm9yPzoge30pID0+IHtcbiAgICAgIHRoaXMuX2luaXQubmV4dCh7XG4gICAgICAgIG9rOiBzdGF0dXMgPT09ICdvaycsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZXJyb3IsXG4gICAgICAgIGxvZG9wOiB0aGlzLl9sb2RvcCEsXG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuICAgICAgLS1jaGVja01heENvdW50O1xuICAgICAgaWYgKHRoaXMuX2xvZG9wIS53ZWJza3QgJiYgdGhpcy5fbG9kb3AhLndlYnNrdC5yZWFkeVN0YXRlID09PSAxKSB7XG4gICAgICAgIG9uUmVzb2x2ZSgnb2snKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjaGVja01heENvdW50IDwgMCkge1xuICAgICAgICAgIG9uUmVzb2x2ZSgnY2hlY2stbGltaXQnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjaGVja1N0YXR1cygpLCAxMDApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnNjcmlwdFNydi5sb2FkU2NyaXB0KHVybCkudGhlbihyZXMgPT4ge1xuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09ICdvaycpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIG9uUmVzb2x2ZSgnc2NyaXB0LWxvYWQtZXJyb3InLCByZXNbMF0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAod2luZG93Lmhhc093blByb3BlcnR5KHRoaXMuY29nLm5hbWUhKSkge1xuICAgICAgICB0aGlzLl9sb2RvcCA9IHdpbmRvd1t0aGlzLmNvZy5uYW1lIV0gYXMgTG9kb3A7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fbG9kb3AgPT09IG51bGwpIHtcbiAgICAgICAgb25SZXNvbHZlKCdsb2FkLXZhcmlhYmxlLW5hbWUtZXJyb3InLCB7IG5hbWU6IHRoaXMuY29nLm5hbWUgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xvZG9wLlNFVF9MSUNFTlNFUyh0aGlzLmNvZy5jb21wYW55TmFtZSEsIHRoaXMuY29nLmxpY2Vuc2UsIHRoaXMuY29nLmxpY2Vuc2VBLCB0aGlzLmNvZy5saWNlbnNlQik7XG4gICAgICBjaGVja1N0YXR1cygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIOmHjee9riBsb2RvcCDlr7nosaEgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fbG9kb3AgPSBudWxsO1xuICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgIHRoaXMucmVxdWVzdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmZhOWKoOS7o+eggeiHsyBgbG9kb3BgIOWvueixoeS4iu+8jOWtl+espuS4suexu+aUr+aMgSBge3trZXl9fWAg55qE5Yqo5oCB5Y+C5pWwXG4gICAqXG4gICAqICoq5rOo77yaKiog5Luj56CB5piv5oyH5omT5Y2w6K6+6K6h5omA5Lqn55Sf5a2X56ym5Liy5pWw5o2uXG4gICAqXG4gICAqIEBwYXJhbSBjb2RlIOS7o+eggVxuICAgKiBAcGFyYW0gY29udGV4dE9iaiDliqjmgIHlj4LmlbDkuIrkuIvmloflr7nosaFcbiAgICogQHBhcmFtIHBhcnNlciDoh6rlrprkuYnop6PmnpDooajovr7lvI/vvIzpu5jorqTvvJpgL0xPRE9QXFwuKFteKF0rKVxcKChbXlxcbl0rKVxcKTsvaWBcbiAgICovXG4gIGF0dGFjaENvZGUoY29kZTogc3RyaW5nLCBjb250ZXh0T2JqPzoge30sIHBhcnNlcj86IFJlZ0V4cCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgICBpZiAoIXBhcnNlcikgcGFyc2VyID0gL0xPRE9QXFwuKFteKF0rKVxcKChbXlxcbl0rKVxcKTsvaTtcbiAgICBjb2RlLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGFyc2VyIS5leGVjKGxpbmUudHJpbSgpKTtcbiAgICAgIGlmICghcmVzKSByZXR1cm47XG4gICAgICBjb25zdCBmbiA9IHRoaXMuX2xvZG9wIVtyZXNbMV1dO1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIGxldCBhcnI6IGFueVtdIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBmdW5jdGlvbi1jb25zdHJ1Y3RvclxuICAgICAgICAgIGNvbnN0IGZha2VGbiA9IG5ldyBGdW5jdGlvbihgcmV0dXJuIFske3Jlc1syXX1dYCk7XG4gICAgICAgICAgYXJyID0gZmFrZUZuKCk7XG4gICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICBpZiAoYXJyICE9IG51bGwgJiYgQXJyYXkuaXNBcnJheShhcnIpICYmIGNvbnRleHRPYmopIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcnJbaV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGFycltpXSA9IChhcnJbaV0gYXMgc3RyaW5nKS5yZXBsYWNlKC97eyguKj8pfX0vZywgKF9tYXRjaCwga2V5KSA9PiBjb250ZXh0T2JqW2tleS50cmltKCldIHx8ICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm4uYXBwbHkodGhpcy5fbG9kb3AsIGFyciEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOaJk+W8gOaJk+WNsOiuvuiuoeWFs+mXreWQjuiHquWKqOi/lOWbnuS7o+eggVxuICAgKlxuICAgKiAqKuazqO+8mioqIOiHquWKqOebkeWQrCBgT25fUmV0dXJuYCDkuovku7bvvIzov5DooYzlkI7kvJrnp7vpmaRcbiAgICovXG4gIGRlc2lnbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgICBjb25zdCB0aWQgPSB0aGlzLl9sb2RvcCEuUFJJTlRfREVTSUdOKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5fbG9kb3AhLk9uX1JldHVybiA9ICh0YXNrSUQ6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHRpZCAhPT0gdGFza0lEKSByZXR1cm47XG4gICAgICAgIHRoaXMuX2xvZG9wIS5Pbl9SZXR1cm4gPSBudWxsO1xuICAgICAgICByZXNvbHZlKCcnICsgdmFsdWUpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIHByaW50RG8oKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucHJpbnRCdWZmZXIuc2hpZnQoKTtcbiAgICBpZiAoIWRhdGEpIHJldHVybjtcbiAgICB0aGlzLmF0dGFjaENvZGUoZGF0YS5jb2RlLCBkYXRhLml0ZW0sIGRhdGEucGFyc2VyKTtcbiAgICBjb25zdCB0aWQgPSB0aGlzLl9sb2RvcCEuUFJJTlQoKTtcbiAgICB0aGlzLl9sb2RvcCEuT25fUmV0dXJuID0gKHRhc2tJRDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHRpZCAhPT0gdGFza0lEKSByZXR1cm47XG4gICAgICB0aGlzLl9sb2RvcCEuT25fUmV0dXJuID0gbnVsbDtcbiAgICAgIHRoaXMuX2V2ZW50cy5uZXh0KHtcbiAgICAgICAgb2s6IHZhbHVlID09PSB0cnVlLFxuICAgICAgICBlcnJvcjogdmFsdWUgPT09IHRydWUgPyBudWxsIDogdmFsdWUsXG4gICAgICAgIC4uLmRhdGEsXG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJpbnREbygpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog56uL5Y2z5omT5Y2w77yM5LiA6Iis55So5LqO5om56YeP5aWX5omTXG4gICAqXG4gICAqIEBwYXJhbSBjb2RlIOS7o+eggVxuICAgKiBAcGFyYW0gY29udGV4dE9iaiDliqjmgIHlj4LmlbDkuIrkuIvmloflr7nosaFcbiAgICogQHBhcmFtIHBhcnNlciDoh6rlrprkuYnop6PmnpDooajovr7lvI/vvIzpu5jorqTvvJpgL0xPRE9QXFwuKFteKF0rKVxcKChbXlxcbl0rKVxcKTsvaWBcbiAgICovXG4gIHByaW50KGNvZGU6IHN0cmluZywgY29udGV4dE9iajoge30gfCBBcnJheTx7fT4sIHBhcnNlcj86IFJlZ0V4cCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgICBpZiAoY29udGV4dE9iaikge1xuICAgICAgdGhpcy5wcmludEJ1ZmZlci5wdXNoKFxuICAgICAgICAuLi4oQXJyYXkuaXNBcnJheShjb250ZXh0T2JqKSA/IGNvbnRleHRPYmogOiBbY29udGV4dE9ial0pLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4geyBjb2RlLCBwYXJzZXIsIGl0ZW0gfTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLnByaW50RG8oKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9ldmVudHMudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19