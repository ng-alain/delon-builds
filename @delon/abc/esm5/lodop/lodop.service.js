/**
 * @fileoverview added by tsickle
 * Generated from: lodop.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __read, __spread } from "tslib";
import { Injectable } from '@angular/core';
import { AlainConfigService, LazyService } from '@delon/util';
import { of, Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util";
var LodopService = /** @class */ (function () {
    function LodopService(scriptSrv, configSrv) {
        this.scriptSrv = scriptSrv;
        this.pending = false;
        this._lodop = null;
        this._init = new Subject();
        this._events = new Subject();
        this.printBuffer = [];
        this.defaultConfig = configSrv.merge('lodop', {
            url: '//localhost:8443/CLodopfuncs.js',
            name: 'CLODOP',
            companyName: '',
            checkMaxCount: 100,
        });
        this.cog = this.defaultConfig;
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
            this._cog = __assign(__assign({}, this.defaultConfig), value);
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
            _this._lodop.SET_LICENSES((/** @type {?} */ (_this.cog.companyName)), (/** @type {?} */ (_this.cog.license)), _this.cog.licenseA, _this.cog.licenseB);
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
     * @param parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)?\);/i`
     */
    /**
     * 附加代码至 `lodop` 对象上，字符串类支持 `{{key}}` 的动态参数
     *
     * **注：** 代码是指打印设计所产生字符串数据
     *
     * @param {?} code 代码
     * @param {?=} contextObj 动态参数上下文对象
     * @param {?=} parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)?\);/i`
     * @return {?}
     */
    LodopService.prototype.attachCode = /**
     * 附加代码至 `lodop` 对象上，字符串类支持 `{{key}}` 的动态参数
     *
     * **注：** 代码是指打印设计所产生字符串数据
     *
     * @param {?} code 代码
     * @param {?=} contextObj 动态参数上下文对象
     * @param {?=} parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)?\);/i`
     * @return {?}
     */
    function (code, contextObj, parser) {
        var _this = this;
        this.check();
        if (!parser)
            parser = /LODOP\.([^(]+)\(([^\n]+)?\);/i;
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
     * @param parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)?\);/i`
     */
    /**
     * 立即打印，一般用于批量套打
     *
     * @param {?} code 代码
     * @param {?} contextObj 动态参数上下文对象
     * @param {?=} parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)?\);/i`
     * @return {?}
     */
    LodopService.prototype.print = /**
     * 立即打印，一般用于批量套打
     *
     * @param {?} code 代码
     * @param {?} contextObj 动态参数上下文对象
     * @param {?=} parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)?\);/i`
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
        { type: LazyService },
        { type: AlainConfigService }
    ]; };
    /** @nocollapse */ LodopService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LodopService_Factory() { return new LodopService(i0.ɵɵinject(i1.LazyService), i0.ɵɵinject(i1.AlainConfigService)); }, token: LodopService, providedIn: "root" });
    return LodopService;
}());
export { LodopService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LodopService.prototype.defaultConfig;
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
    LodopService.prototype.scriptSrv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbG9kb3AvIiwic291cmNlcyI6WyJsb2RvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFvQixXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFaEYsT0FBTyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUcvQztJQVVFLHNCQUFvQixTQUFzQixFQUFFLFNBQTZCO1FBQXJELGNBQVMsR0FBVCxTQUFTLENBQWE7UUFObEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQWlCLElBQUksQ0FBQztRQUM1QixVQUFLLEdBQUcsSUFBSSxPQUFPLEVBQWUsQ0FBQztRQUNuQyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQW9CLENBQUM7UUFDMUMsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFHOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUE0QixPQUFPLEVBQUU7WUFDdkUsR0FBRyxFQUFFLGlDQUFpQztZQUN0QyxJQUFJLEVBQUUsUUFBUTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsYUFBYSxFQUFFLEdBQUc7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ2hDLENBQUM7SUFPRCxzQkFBSSw2QkFBRztRQUxQOzs7O1dBSUc7Ozs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDOzs7OztRQUNELFVBQVEsS0FBdUI7WUFDN0IsSUFBSSxDQUFDLElBQUkseUJBQ0osSUFBSSxDQUFDLGFBQWEsR0FDbEIsS0FBSyxDQUNULENBQUM7UUFDSixDQUFDOzs7T0FOQTtJQVNELHNC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LEVBQUUsTUFBTSxFQUFFOzs7O2dCQUxhLFdBQVc7Z0JBQWpELGtCQUFrQjs7O3VCQUQzQjtDQXVOQyxBQWpORCxJQWlOQztTQWhOWSxZQUFZOzs7Ozs7SUFDdkIscUNBQXdDOzs7OztJQUN4Qyw0QkFBK0I7Ozs7O0lBQy9CLCtCQUF3Qjs7Ozs7SUFDeEIsOEJBQW9DOzs7OztJQUNwQyw2QkFBMkM7Ozs7O0lBQzNDLCtCQUFrRDs7Ozs7SUFDbEQsbUNBQWdDOzs7OztJQUVwQixpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5Mb2RvcENvbmZpZywgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExvZG9wLCBMb2RvcFByaW50UmVzdWx0LCBMb2RvcFJlc3VsdCB9IGZyb20gJy4vbG9kb3AudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExvZG9wU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZzogQWxhaW5Mb2RvcENvbmZpZztcbiAgcHJpdmF0ZSBfY29nOiBBbGFpbkxvZG9wQ29uZmlnO1xuICBwcml2YXRlIHBlbmRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbG9kb3A6IExvZG9wIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2luaXQgPSBuZXcgU3ViamVjdDxMb2RvcFJlc3VsdD4oKTtcbiAgcHJpdmF0ZSBfZXZlbnRzID0gbmV3IFN1YmplY3Q8TG9kb3BQcmludFJlc3VsdD4oKTtcbiAgcHJpdmF0ZSBwcmludEJ1ZmZlcjogYW55W10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjcmlwdFNydjogTGF6eVNlcnZpY2UsIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5kZWZhdWx0Q29uZmlnID0gY29uZmlnU3J2Lm1lcmdlPEFsYWluTG9kb3BDb25maWcsICdsb2RvcCc+KCdsb2RvcCcsIHtcbiAgICAgIHVybDogJy8vbG9jYWxob3N0Ojg0NDMvQ0xvZG9wZnVuY3MuanMnLFxuICAgICAgbmFtZTogJ0NMT0RPUCcsXG4gICAgICBjb21wYW55TmFtZTogJycsXG4gICAgICBjaGVja01heENvdW50OiAxMDAsXG4gICAgfSk7XG4gICAgdGhpcy5jb2cgPSB0aGlzLmRlZmF1bHRDb25maWc7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5oiW6YeN5paw6K6+572u6YWN572uXG4gICAqXG4gICAqICoq5rOo77yaKirph43mlrDorr7nva7kvJrlgJLnva7ph43mlrDliqDovb3ohJrmnKzotYTmupBcbiAgICovXG4gIGdldCBjb2coKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZztcbiAgfVxuICBzZXQgY29nKHZhbHVlOiBBbGFpbkxvZG9wQ29uZmlnKSB7XG4gICAgdGhpcy5fY29nID0ge1xuICAgICAgLi4udGhpcy5kZWZhdWx0Q29uZmlnLFxuICAgICAgLi4udmFsdWUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKiDkuovku7blj5jmm7TpgJrnn6UgKi9cbiAgZ2V0IGV2ZW50cygpOiBPYnNlcnZhYmxlPExvZG9wUHJpbnRSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnRzLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqIOiOt+WPliBsb2RvcCDlr7nosaEgKi9cbiAgZ2V0IGxvZG9wKCk6IE9ic2VydmFibGU8TG9kb3BSZXN1bHQ+IHtcbiAgICBpZiAodGhpcy5fbG9kb3ApIHJldHVybiBvZih7IG9rOiB0cnVlLCBsb2RvcDogdGhpcy5fbG9kb3AgfSBhcyBMb2RvcFJlc3VsdCk7XG4gICAgaWYgKHRoaXMucGVuZGluZykgcmV0dXJuIHRoaXMuX2luaXQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICB0aGlzLnJlcXVlc3QoKTtcblxuICAgIHJldHVybiB0aGlzLl9pbml0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqIOiOt+WPluaJk+WNsOacuuWIl+ihqCAqL1xuICBnZXQgcHJpbnRlcigpOiBzdHJpbmdbXSB7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGNvbnN0IHJldDogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuX2xvZG9wIS5HRVRfUFJJTlRFUl9DT1VOVCgpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgcmV0LnB1c2godGhpcy5fbG9kb3AhLkdFVF9QUklOVEVSX05BTUUoaW5kZXgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2soKSB7XG4gICAgaWYgKCF0aGlzLl9sb2RvcCkgdGhyb3cgbmV3IEVycm9yKGDor7fliqHlv4XlhYjosIPnlKggbG9kb3Ag6I635Y+W5a+56LGhYCk7XG4gIH1cblxuICBwcml2YXRlIHJlcXVlc3QoKTogdm9pZCB7XG4gICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcblxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuY29nLnVybH0/bmFtZT0ke3RoaXMuY29nLm5hbWV9YDtcbiAgICBsZXQgY2hlY2tNYXhDb3VudCA9IHRoaXMuY29nLmNoZWNrTWF4Q291bnQgYXMgbnVtYmVyO1xuICAgIGNvbnN0IG9uUmVzb2x2ZSA9IChzdGF0dXM6IE56U2FmZUFueSwgZXJyb3I/OiB7fSkgPT4ge1xuICAgICAgdGhpcy5faW5pdC5uZXh0KHtcbiAgICAgICAgb2s6IHN0YXR1cyA9PT0gJ29rJyxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBlcnJvcixcbiAgICAgICAgbG9kb3A6IHRoaXMuX2xvZG9wISxcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgY2hlY2tTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAtLWNoZWNrTWF4Q291bnQ7XG4gICAgICBpZiAodGhpcy5fbG9kb3AhLndlYnNrdCAmJiB0aGlzLl9sb2RvcCEud2Vic2t0LnJlYWR5U3RhdGUgPT09IDEpIHtcbiAgICAgICAgb25SZXNvbHZlKCdvaycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoZWNrTWF4Q291bnQgPCAwKSB7XG4gICAgICAgICAgb25SZXNvbHZlKCdjaGVjay1saW1pdCcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNoZWNrU3RhdHVzKCksIDEwMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuc2NyaXB0U3J2LmxvYWRTY3JpcHQodXJsKS50aGVuKChyZXM6IE56U2FmZUFueSkgPT4ge1xuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09ICdvaycpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIG9uUmVzb2x2ZSgnc2NyaXB0LWxvYWQtZXJyb3InLCByZXNbMF0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB3aW4gPSB3aW5kb3cgYXMgTnpTYWZlQW55O1xuICAgICAgaWYgKHdpbi5oYXNPd25Qcm9wZXJ0eSh0aGlzLmNvZy5uYW1lISkpIHtcbiAgICAgICAgdGhpcy5fbG9kb3AgPSB3aW5bdGhpcy5jb2cubmFtZSFdIGFzIExvZG9wO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2xvZG9wID09PSBudWxsKSB7XG4gICAgICAgIG9uUmVzb2x2ZSgnbG9hZC12YXJpYWJsZS1uYW1lLWVycm9yJywgeyBuYW1lOiB0aGlzLmNvZy5uYW1lIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9sb2RvcC5TRVRfTElDRU5TRVModGhpcy5jb2cuY29tcGFueU5hbWUhLCB0aGlzLmNvZy5saWNlbnNlISwgdGhpcy5jb2cubGljZW5zZUEsIHRoaXMuY29nLmxpY2Vuc2VCKTtcbiAgICAgIGNoZWNrU3RhdHVzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiog6YeN572uIGxvZG9wIOWvueixoSAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLl9sb2RvcCA9IG51bGw7XG4gICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgdGhpcy5yZXF1ZXN0KCk7XG4gIH1cblxuICAvKipcbiAgICog6ZmE5Yqg5Luj56CB6IezIGBsb2RvcGAg5a+56LGh5LiK77yM5a2X56ym5Liy57G75pSv5oyBIGB7e2tleX19YCDnmoTliqjmgIHlj4LmlbBcbiAgICpcbiAgICogKirms6jvvJoqKiDku6PnoIHmmK/mjIfmiZPljbDorr7orqHmiYDkuqfnlJ/lrZfnrKbkuLLmlbDmja5cbiAgICpcbiAgICogQHBhcmFtIGNvZGUg5Luj56CBXG4gICAqIEBwYXJhbSBjb250ZXh0T2JqIOWKqOaAgeWPguaVsOS4iuS4i+aWh+WvueixoVxuICAgKiBAcGFyYW0gcGFyc2VyIOiHquWumuS5ieino+aekOihqOi+vuW8j++8jOm7mOiupO+8mmAvTE9ET1BcXC4oW14oXSspXFwoKFteXFxuXSspP1xcKTsvaWBcbiAgICovXG4gIGF0dGFjaENvZGUoY29kZTogc3RyaW5nLCBjb250ZXh0T2JqPzogTnpTYWZlQW55LCBwYXJzZXI/OiBSZWdFeHApOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgaWYgKCFwYXJzZXIpIHBhcnNlciA9IC9MT0RPUFxcLihbXihdKylcXCgoW15cXG5dKyk/XFwpOy9pO1xuICAgIGNvZGUuc3BsaXQoJ1xcbicpLmZvckVhY2gobGluZSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXJzZXIhLmV4ZWMobGluZS50cmltKCkpO1xuICAgICAgaWYgKCFyZXMpIHJldHVybjtcbiAgICAgIGNvbnN0IGZuID0gdGhpcy5fbG9kb3AhW3Jlc1sxXV07XG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgbGV0IGFycjogYW55W10gfCBudWxsID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGZ1bmN0aW9uLWNvbnN0cnVjdG9yXG4gICAgICAgICAgY29uc3QgZmFrZUZuID0gbmV3IEZ1bmN0aW9uKGByZXR1cm4gWyR7cmVzWzJdfV1gKTtcbiAgICAgICAgICBhcnIgPSBmYWtlRm4oKTtcbiAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgIGlmIChhcnIgIT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KGFycikgJiYgY29udGV4dE9iaikge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFycltpXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgYXJyW2ldID0gKGFycltpXSBhcyBzdHJpbmcpLnJlcGxhY2UoL3t7KC4qPyl9fS9nLCAoX21hdGNoLCBrZXkpID0+IGNvbnRleHRPYmpba2V5LnRyaW0oKV0gfHwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmbi5hcHBseSh0aGlzLl9sb2RvcCwgYXJyISk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5omT5byA5omT5Y2w6K6+6K6h5YWz6Zet5ZCO6Ieq5Yqo6L+U5Zue5Luj56CBXG4gICAqXG4gICAqICoq5rOo77yaKiog6Ieq5Yqo55uR5ZCsIGBPbl9SZXR1cm5gIOS6i+S7tu+8jOi/kOihjOWQjuS8muenu+mZpFxuICAgKi9cbiAgZGVzaWduKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGNvbnN0IHRpZCA9IHRoaXMuX2xvZG9wIS5QUklOVF9ERVNJR04oKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLl9sb2RvcCEuT25fUmV0dXJuID0gKHRhc2tJRDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAodGlkICE9PSB0YXNrSUQpIHJldHVybjtcbiAgICAgICAgdGhpcy5fbG9kb3AhLk9uX1JldHVybiA9IG51bGw7XG4gICAgICAgIHJlc29sdmUoJycgKyB2YWx1ZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgcHJpbnREbygpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcmludEJ1ZmZlci5zaGlmdCgpO1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuICAgIHRoaXMuYXR0YWNoQ29kZShkYXRhLmNvZGUsIGRhdGEuaXRlbSwgZGF0YS5wYXJzZXIpO1xuICAgIGNvbnN0IHRpZCA9IHRoaXMuX2xvZG9wIS5QUklOVCgpO1xuICAgIHRoaXMuX2xvZG9wIS5Pbl9SZXR1cm4gPSAodGFza0lEOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodGlkICE9PSB0YXNrSUQpIHJldHVybjtcbiAgICAgIHRoaXMuX2xvZG9wIS5Pbl9SZXR1cm4gPSBudWxsO1xuICAgICAgdGhpcy5fZXZlbnRzLm5leHQoe1xuICAgICAgICBvazogdmFsdWUgPT09IHRydWUsXG4gICAgICAgIGVycm9yOiB2YWx1ZSA9PT0gdHJ1ZSA/IG51bGwgOiB2YWx1ZSxcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcmludERvKCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnq4vljbPmiZPljbDvvIzkuIDoiKznlKjkuo7mibnph4/lpZfmiZNcbiAgICpcbiAgICogQHBhcmFtIGNvZGUg5Luj56CBXG4gICAqIEBwYXJhbSBjb250ZXh0T2JqIOWKqOaAgeWPguaVsOS4iuS4i+aWh+WvueixoVxuICAgKiBAcGFyYW0gcGFyc2VyIOiHquWumuS5ieino+aekOihqOi+vuW8j++8jOm7mOiupO+8mmAvTE9ET1BcXC4oW14oXSspXFwoKFteXFxuXSspP1xcKTsvaWBcbiAgICovXG4gIHByaW50KGNvZGU6IHN0cmluZywgY29udGV4dE9iajoge30gfCBBcnJheTx7fT4sIHBhcnNlcj86IFJlZ0V4cCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgICBpZiAoY29udGV4dE9iaikge1xuICAgICAgdGhpcy5wcmludEJ1ZmZlci5wdXNoKFxuICAgICAgICAuLi4oQXJyYXkuaXNBcnJheShjb250ZXh0T2JqKSA/IGNvbnRleHRPYmogOiBbY29udGV4dE9ial0pLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4geyBjb2RlLCBwYXJzZXIsIGl0ZW0gfTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLnByaW50RG8oKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9ldmVudHMudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19