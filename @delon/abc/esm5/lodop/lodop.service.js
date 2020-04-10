/**
 * @fileoverview added by tsickle
 * Generated from: lodop.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __read, __spread } from "tslib";
import { Injectable } from '@angular/core';
import { LazyService } from '@delon/util';
import { of, Subject } from 'rxjs';
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
            this._cog = __assign(__assign({ url: 'https://localhost:8443/CLodopfuncs.js', name: 'CLODOP', companyName: '', checkMaxCount: 100 }, this.defCog), value);
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
            /** @type {?} */
            var win = (/** @type {?} */ (window));
            if (win.hasOwnProperty((/** @type {?} */ (_this.cog.name)))) {
                _this._lodop = (/** @type {?} */ (win[(/** @type {?} */ (_this.cog.name))]));
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
            _this._events.next(__assign({ ok: value === true, error: value === true ? null : value }, data));
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
            (_a = this.printBuffer).push.apply(_a, __spread((Array.isArray(contextObj) ? contextObj : [contextObj]).map((/**
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
    /** @nocollapse */ LodopService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LodopService_Factory() { return new LodopService(i0.ɵɵinject(i1.LodopConfig), i0.ɵɵinject(i2.LazyService)); }, token: LodopService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbG9kb3AvIiwic291cmNlcyI6WyJsb2RvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHN0M7SUFFRSxzQkFBb0IsTUFBbUIsRUFBVSxTQUFzQjtRQUFuRCxXQUFNLEdBQU4sTUFBTSxDQUFhO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQWtEL0QsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQWlCLElBQUksQ0FBQztRQUM1QixVQUFLLEdBQUcsSUFBSSxPQUFPLEVBQWUsQ0FBQztRQUNuQyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQW9CLENBQUM7UUFDMUMsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFyRDlCLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFPRCxzQkFBSSw2QkFBRztRQUxQOzs7O1dBSUc7Ozs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDOzs7OztRQUNELFVBQVEsS0FBa0I7WUFDeEIsSUFBSSxDQUFDLElBQUksdUJBQ1AsR0FBRyxFQUFFLHVDQUF1QyxFQUM1QyxJQUFJLEVBQUUsUUFBUSxFQUNkLFdBQVcsRUFBRSxFQUFFLEVBQ2YsYUFBYSxFQUFFLEdBQUcsSUFDZixJQUFJLENBQUMsTUFBTSxHQUNYLEtBQUssQ0FDVCxDQUFDO1FBQ0osQ0FBQzs7O09BVkE7SUFhRCxzQkFBSSxnQ0FBTTtRQURWLGFBQWE7Ozs7O1FB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V0FBVzs7O3VCQURwQjtDQXFOQyxBQTlNRCxJQThNQztTQTdNWSxZQUFZOzs7Ozs7SUFrRHZCLDRCQUEwQjs7Ozs7SUFDMUIsK0JBQXdCOzs7OztJQUN4Qiw4QkFBb0M7Ozs7O0lBQ3BDLDZCQUEyQzs7Ozs7SUFDM0MsK0JBQWtEOzs7OztJQUNsRCxtQ0FBZ0M7Ozs7O0lBdERwQiw4QkFBMkI7Ozs7O0lBQUUsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTG9kb3BDb25maWcgfSBmcm9tICcuL2xvZG9wLmNvbmZpZyc7XG5pbXBvcnQgeyBMb2RvcCwgTG9kb3BQcmludFJlc3VsdCwgTG9kb3BSZXN1bHQgfSBmcm9tICcuL2xvZG9wLnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMb2RvcFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlZkNvZzogTG9kb3BDb25maWcsIHByaXZhdGUgc2NyaXB0U3J2OiBMYXp5U2VydmljZSkge1xuICAgIHRoaXMuY29nID0gZGVmQ29nO1xuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPluaIlumHjeaWsOiuvue9rumFjee9rlxuICAgKlxuICAgKiAqKuazqO+8mioq6YeN5paw6K6+572u5Lya5YCS572u6YeN5paw5Yqg6L296ISa5pys6LWE5rqQXG4gICAqL1xuICBnZXQgY29nKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2c7XG4gIH1cbiAgc2V0IGNvZyh2YWx1ZTogTG9kb3BDb25maWcpIHtcbiAgICB0aGlzLl9jb2cgPSB7XG4gICAgICB1cmw6ICdodHRwczovL2xvY2FsaG9zdDo4NDQzL0NMb2RvcGZ1bmNzLmpzJyxcbiAgICAgIG5hbWU6ICdDTE9ET1AnLFxuICAgICAgY29tcGFueU5hbWU6ICcnLFxuICAgICAgY2hlY2tNYXhDb3VudDogMTAwLFxuICAgICAgLi4udGhpcy5kZWZDb2csXG4gICAgICAuLi52YWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIOS6i+S7tuWPmOabtOmAmuefpSAqL1xuICBnZXQgZXZlbnRzKCk6IE9ic2VydmFibGU8TG9kb3BQcmludFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLl9ldmVudHMuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiog6I635Y+WIGxvZG9wIOWvueixoSAqL1xuICBnZXQgbG9kb3AoKTogT2JzZXJ2YWJsZTxMb2RvcFJlc3VsdD4ge1xuICAgIGlmICh0aGlzLl9sb2RvcCkgcmV0dXJuIG9mKHsgb2s6IHRydWUsIGxvZG9wOiB0aGlzLl9sb2RvcCB9IGFzIExvZG9wUmVzdWx0KTtcbiAgICBpZiAodGhpcy5wZW5kaW5nKSByZXR1cm4gdGhpcy5faW5pdC5hc09ic2VydmFibGUoKTtcblxuICAgIHRoaXMucmVxdWVzdCgpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2luaXQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiog6I635Y+W5omT5Y2w5py65YiX6KGoICovXG4gIGdldCBwcmludGVyKCk6IHN0cmluZ1tdIHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgY29uc3QgcmV0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5fbG9kb3AhLkdFVF9QUklOVEVSX0NPVU5UKCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICByZXQucHVzaCh0aGlzLl9sb2RvcCEuR0VUX1BSSU5URVJfTkFNRShpbmRleCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBfY29nOiBMb2RvcENvbmZpZztcbiAgcHJpdmF0ZSBwZW5kaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgX2xvZG9wOiBMb2RvcCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9pbml0ID0gbmV3IFN1YmplY3Q8TG9kb3BSZXN1bHQ+KCk7XG4gIHByaXZhdGUgX2V2ZW50cyA9IG5ldyBTdWJqZWN0PExvZG9wUHJpbnRSZXN1bHQ+KCk7XG4gIHByaXZhdGUgcHJpbnRCdWZmZXI6IGFueVtdID0gW107XG5cbiAgcHJpdmF0ZSBjaGVjaygpIHtcbiAgICBpZiAoIXRoaXMuX2xvZG9wKSB0aHJvdyBuZXcgRXJyb3IoYOivt+WKoeW/heWFiOiwg+eUqCBsb2RvcCDojrflj5blr7nosaFgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVxdWVzdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xuXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb2cudXJsfT9uYW1lPSR7dGhpcy5jb2cubmFtZX1gO1xuICAgIGxldCBjaGVja01heENvdW50ID0gdGhpcy5jb2cuY2hlY2tNYXhDb3VudCBhcyBudW1iZXI7XG4gICAgY29uc3Qgb25SZXNvbHZlID0gKHN0YXR1czogTnpTYWZlQW55LCBlcnJvcj86IHt9KSA9PiB7XG4gICAgICB0aGlzLl9pbml0Lm5leHQoe1xuICAgICAgICBvazogc3RhdHVzID09PSAnb2snLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGVycm9yLFxuICAgICAgICBsb2RvcDogdGhpcy5fbG9kb3AhLFxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcbiAgICAgIC0tY2hlY2tNYXhDb3VudDtcbiAgICAgIGlmICh0aGlzLl9sb2RvcCEud2Vic2t0ICYmIHRoaXMuX2xvZG9wIS53ZWJza3QucmVhZHlTdGF0ZSA9PT0gMSkge1xuICAgICAgICBvblJlc29sdmUoJ29rJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2hlY2tNYXhDb3VudCA8IDApIHtcbiAgICAgICAgICBvblJlc29sdmUoJ2NoZWNrLWxpbWl0Jyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2hlY2tTdGF0dXMoKSwgMTAwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5zY3JpcHRTcnYubG9hZFNjcmlwdCh1cmwpLnRoZW4oKHJlczogTnpTYWZlQW55KSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gJ29rJykge1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgb25SZXNvbHZlKCdzY3JpcHQtbG9hZC1lcnJvcicsIHJlc1swXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHdpbiA9IHdpbmRvdyBhcyBOelNhZmVBbnk7XG4gICAgICBpZiAod2luLmhhc093blByb3BlcnR5KHRoaXMuY29nLm5hbWUhKSkge1xuICAgICAgICB0aGlzLl9sb2RvcCA9IHdpblt0aGlzLmNvZy5uYW1lIV0gYXMgTG9kb3A7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fbG9kb3AgPT09IG51bGwpIHtcbiAgICAgICAgb25SZXNvbHZlKCdsb2FkLXZhcmlhYmxlLW5hbWUtZXJyb3InLCB7IG5hbWU6IHRoaXMuY29nLm5hbWUgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xvZG9wLlNFVF9MSUNFTlNFUyh0aGlzLmNvZy5jb21wYW55TmFtZSEsIHRoaXMuY29nLmxpY2Vuc2UsIHRoaXMuY29nLmxpY2Vuc2VBLCB0aGlzLmNvZy5saWNlbnNlQik7XG4gICAgICBjaGVja1N0YXR1cygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIOmHjee9riBsb2RvcCDlr7nosaEgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fbG9kb3AgPSBudWxsO1xuICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgIHRoaXMucmVxdWVzdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmZhOWKoOS7o+eggeiHsyBgbG9kb3BgIOWvueixoeS4iu+8jOWtl+espuS4suexu+aUr+aMgSBge3trZXl9fWAg55qE5Yqo5oCB5Y+C5pWwXG4gICAqXG4gICAqICoq5rOo77yaKiog5Luj56CB5piv5oyH5omT5Y2w6K6+6K6h5omA5Lqn55Sf5a2X56ym5Liy5pWw5o2uXG4gICAqXG4gICAqIEBwYXJhbSBjb2RlIOS7o+eggVxuICAgKiBAcGFyYW0gY29udGV4dE9iaiDliqjmgIHlj4LmlbDkuIrkuIvmloflr7nosaFcbiAgICogQHBhcmFtIHBhcnNlciDoh6rlrprkuYnop6PmnpDooajovr7lvI/vvIzpu5jorqTvvJpgL0xPRE9QXFwuKFteKF0rKVxcKChbXlxcbl0rKVxcKTsvaWBcbiAgICovXG4gIGF0dGFjaENvZGUoY29kZTogc3RyaW5nLCBjb250ZXh0T2JqPzogTnpTYWZlQW55LCBwYXJzZXI/OiBSZWdFeHApOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgaWYgKCFwYXJzZXIpIHBhcnNlciA9IC9MT0RPUFxcLihbXihdKylcXCgoW15cXG5dKylcXCk7L2k7XG4gICAgY29kZS5zcGxpdCgnXFxuJykuZm9yRWFjaChsaW5lID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhcnNlciEuZXhlYyhsaW5lLnRyaW0oKSk7XG4gICAgICBpZiAoIXJlcykgcmV0dXJuO1xuICAgICAgY29uc3QgZm4gPSB0aGlzLl9sb2RvcCFbcmVzWzFdXTtcbiAgICAgIGlmIChmbikge1xuICAgICAgICBsZXQgYXJyOiBhbnlbXSB8IG51bGwgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZnVuY3Rpb24tY29uc3RydWN0b3JcbiAgICAgICAgICBjb25zdCBmYWtlRm4gPSBuZXcgRnVuY3Rpb24oYHJldHVybiBbJHtyZXNbMl19XWApO1xuICAgICAgICAgIGFyciA9IGZha2VGbigpO1xuICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgaWYgKGFyciAhPSBudWxsICYmIEFycmF5LmlzQXJyYXkoYXJyKSAmJiBjb250ZXh0T2JqKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJyW2ldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBhcnJbaV0gPSAoYXJyW2ldIGFzIHN0cmluZykucmVwbGFjZSgve3soLio/KX19L2csIChfbWF0Y2gsIGtleSkgPT4gY29udGV4dE9ialtrZXkudHJpbSgpXSB8fCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZuLmFwcGx5KHRoaXMuX2xvZG9wLCBhcnIhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmiZPlvIDmiZPljbDorr7orqHlhbPpl63lkI7oh6rliqjov5Tlm57ku6PnoIFcbiAgICpcbiAgICogKirms6jvvJoqKiDoh6rliqjnm5HlkKwgYE9uX1JldHVybmAg5LqL5Lu277yM6L+Q6KGM5ZCO5Lya56e76ZmkXG4gICAqL1xuICBkZXNpZ24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgY29uc3QgdGlkID0gdGhpcy5fbG9kb3AhLlBSSU5UX0RFU0lHTigpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuX2xvZG9wIS5Pbl9SZXR1cm4gPSAodGFza0lEOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICh0aWQgIT09IHRhc2tJRCkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9sb2RvcCEuT25fUmV0dXJuID0gbnVsbDtcbiAgICAgICAgcmVzb2x2ZSgnJyArIHZhbHVlKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbiAgcHJpdmF0ZSBwcmludERvKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnByaW50QnVmZmVyLnNoaWZ0KCk7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG4gICAgdGhpcy5hdHRhY2hDb2RlKGRhdGEuY29kZSwgZGF0YS5pdGVtLCBkYXRhLnBhcnNlcik7XG4gICAgY29uc3QgdGlkID0gdGhpcy5fbG9kb3AhLlBSSU5UKCk7XG4gICAgdGhpcy5fbG9kb3AhLk9uX1JldHVybiA9ICh0YXNrSUQ6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh0aWQgIT09IHRhc2tJRCkgcmV0dXJuO1xuICAgICAgdGhpcy5fbG9kb3AhLk9uX1JldHVybiA9IG51bGw7XG4gICAgICB0aGlzLl9ldmVudHMubmV4dCh7XG4gICAgICAgIG9rOiB2YWx1ZSA9PT0gdHJ1ZSxcbiAgICAgICAgZXJyb3I6IHZhbHVlID09PSB0cnVlID8gbnVsbCA6IHZhbHVlLFxuICAgICAgICAuLi5kYXRhLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnByaW50RG8oKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOeri+WNs+aJk+WNsO+8jOS4gOiIrOeUqOS6juaJuemHj+Wll+aJk1xuICAgKlxuICAgKiBAcGFyYW0gY29kZSDku6PnoIFcbiAgICogQHBhcmFtIGNvbnRleHRPYmog5Yqo5oCB5Y+C5pWw5LiK5LiL5paH5a+56LGhXG4gICAqIEBwYXJhbSBwYXJzZXIg6Ieq5a6a5LmJ6Kej5p6Q6KGo6L6+5byP77yM6buY6K6k77yaYC9MT0RPUFxcLihbXihdKylcXCgoW15cXG5dKylcXCk7L2lgXG4gICAqL1xuICBwcmludChjb2RlOiBzdHJpbmcsIGNvbnRleHRPYmo6IHt9IHwgQXJyYXk8e30+LCBwYXJzZXI/OiBSZWdFeHApOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgaWYgKGNvbnRleHRPYmopIHtcbiAgICAgIHRoaXMucHJpbnRCdWZmZXIucHVzaChcbiAgICAgICAgLi4uKEFycmF5LmlzQXJyYXkoY29udGV4dE9iaikgPyBjb250ZXh0T2JqIDogW2NvbnRleHRPYmpdKS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgY29kZSwgcGFyc2VyLCBpdGVtIH07XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5wcmludERvKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0LnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fZXZlbnRzLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==