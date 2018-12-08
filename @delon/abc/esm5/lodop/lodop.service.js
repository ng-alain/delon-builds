/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        // tslint:disable-next-line:no-any
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
                    ((/** @type {?} */ (window[_this.cog.name])));
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
                // tslint:disable-next-line:no-any
                /** @type {?} */
                var arr = void 0;
                try {
                    /** @type {?} */
                    var fakeFn = new Function("return [" + res[2] + "]");
                    arr = fakeFn();
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
            _this._events.next(tslib_1.__assign({ ok: value === true, error: value === true ? null : value }, data));
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
            (_a = this.printBuffer).push.apply(_a, tslib_1.__spread((Array.isArray(contextObj) ? contextObj : [contextObj]).map(function (item) {
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LodopService.ctorParameters = function () { return [
        { type: LodopConfig },
        { type: LazyService }
    ]; };
    /** @nocollapse */ LodopService.ngInjectableDef = i0.defineInjectable({ factory: function LodopService_Factory() { return new LodopService(i0.inject(i1.LodopConfig), i0.inject(i2.LazyService)); }, token: LodopService, providedIn: "root" });
    return LodopService;
}());
export { LodopService };
if (false) {
    /** @type {?} */
    LodopService.prototype._cog;
    /** @type {?} */
    LodopService.prototype.pending;
    /** @type {?} */
    LodopService.prototype._lodop;
    /** @type {?} */
    LodopService.prototype._init;
    /** @type {?} */
    LodopService.prototype._events;
    /** @type {?} */
    LodopService.prototype.printBuffer;
    /** @type {?} */
    LodopService.prototype.defCog;
    /** @type {?} */
    LodopService.prototype.scriptSrv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbG9kb3AvIiwic291cmNlcyI6WyJsb2RvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsRUFBRSxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUc3QztJQVFFLHNCQUFvQixNQUFtQixFQUFVLFNBQXNCO1FBQW5ELFdBQU0sR0FBTixNQUFNLENBQWE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBTC9ELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFVLElBQUksQ0FBQztRQUNyQixVQUFLLEdBQXlCLElBQUksT0FBTyxFQUFlLENBQUM7UUFDekQsWUFBTyxHQUE4QixJQUFJLE9BQU8sRUFBb0IsQ0FBQzs7UUF3S3JFLGdCQUFXLEdBQVUsRUFBRSxDQUFDO1FBcks5QixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztJQUNwQixDQUFDO0lBT0Qsc0JBQUksNkJBQUc7UUFMUDs7OztXQUlHOzs7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQzs7Ozs7UUFDRCxVQUFRLEtBQWtCO1lBQ3hCLElBQUksQ0FBQyxJQUFJLHNCQUNQLEdBQUcsRUFBRSx1Q0FBdUMsRUFDNUMsSUFBSSxFQUFFLFFBQVEsRUFDZCxXQUFXLEVBQUUsRUFBRSxFQUNmLGFBQWEsRUFBRSxHQUFHLElBQ2YsSUFBSSxDQUFDLE1BQU0sRUFDWCxLQUFLLENBQ1QsQ0FBQztRQUNKLENBQUM7OztPQVZBO0lBYUQsc0JBQUksZ0NBQU07UUFEVixhQUFhOzs7OztR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VUFBTSxJQUFZLEVBQUUsVUFBMEIsRUFBRSxNQUFlOztRQUM3RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLFVBQVUsRUFBRTtZQUNkLENBQUEsS0FBQSxJQUFJLENBQUMsV0FBVyxDQUFBLENBQUMsSUFBSSw0QkFDaEIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO2dCQUNqRSxPQUFPLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQztZQUNoQyxDQUFDLENBQUMsR0FDRjtTQUNIO1FBQ0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxrQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Z0JBdE5GLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBSHpCLFdBQVc7Z0JBRlgsV0FBVzs7O3VCQUhwQjtDQStOQyxBQXZORCxJQXVOQztTQXROWSxZQUFZOzs7SUFDdkIsNEJBQTBCOztJQUMxQiwrQkFBd0I7O0lBQ3hCLDhCQUE2Qjs7SUFDN0IsNkJBQWlFOztJQUNqRSwrQkFBNkU7O0lBd0s3RSxtQ0FBZ0M7O0lBdEtwQiw4QkFBMkI7O0lBQUUsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgTG9kb3BDb25maWcgfSBmcm9tICcuL2xvZG9wLmNvbmZpZyc7XG5pbXBvcnQgeyBMb2RvcCwgTG9kb3BQcmludFJlc3VsdCwgTG9kb3BSZXN1bHQgfSBmcm9tICcuL2xvZG9wLnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMb2RvcFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9jb2c6IExvZG9wQ29uZmlnO1xuICBwcml2YXRlIHBlbmRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbG9kb3A6IExvZG9wID0gbnVsbDtcbiAgcHJpdmF0ZSBfaW5pdDogU3ViamVjdDxMb2RvcFJlc3VsdD4gPSBuZXcgU3ViamVjdDxMb2RvcFJlc3VsdD4oKTtcbiAgcHJpdmF0ZSBfZXZlbnRzOiBTdWJqZWN0PExvZG9wUHJpbnRSZXN1bHQ+ID0gbmV3IFN1YmplY3Q8TG9kb3BQcmludFJlc3VsdD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlZkNvZzogTG9kb3BDb25maWcsIHByaXZhdGUgc2NyaXB0U3J2OiBMYXp5U2VydmljZSkge1xuICAgIHRoaXMuY29nID0gZGVmQ29nO1xuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPluaIlumHjeaWsOiuvue9rumFjee9rlxuICAgKlxuICAgKiAqKuazqO+8mioq6YeN5paw6K6+572u5Lya5YCS572u6YeN5paw5Yqg6L296ISa5pys6LWE5rqQXG4gICAqL1xuICBnZXQgY29nKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2c7XG4gIH1cbiAgc2V0IGNvZyh2YWx1ZTogTG9kb3BDb25maWcpIHtcbiAgICB0aGlzLl9jb2cgPSB7XG4gICAgICB1cmw6ICdodHRwczovL2xvY2FsaG9zdDo4NDQzL0NMb2RvcGZ1bmNzLmpzJyxcbiAgICAgIG5hbWU6ICdDTE9ET1AnLFxuICAgICAgY29tcGFueU5hbWU6ICcnLFxuICAgICAgY2hlY2tNYXhDb3VudDogMTAwLFxuICAgICAgLi4udGhpcy5kZWZDb2csXG4gICAgICAuLi52YWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIOS6i+S7tuWPmOabtOmAmuefpSAqL1xuICBnZXQgZXZlbnRzKCk6IE9ic2VydmFibGU8TG9kb3BQcmludFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLl9ldmVudHMuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrKCkge1xuICAgIGlmICghdGhpcy5fbG9kb3ApIHRocm93IG5ldyBFcnJvcihg6K+35Yqh5b+F5YWI6LCD55SoIGxvZG9wIOiOt+WPluWvueixoWApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXF1ZXN0KCk6IHZvaWQge1xuICAgIHRoaXMucGVuZGluZyA9IHRydWU7XG5cbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmNvZy51cmx9P25hbWU9JHt0aGlzLmNvZy5uYW1lfWA7XG4gICAgbGV0IGNoZWNrTWF4Q291bnQgPSB0aGlzLmNvZy5jaGVja01heENvdW50O1xuICAgIGNvbnN0IG9uUmVzb2x2ZSA9IChzdGF0dXMsIGVycm9yPzoge30pID0+IHtcbiAgICAgIHRoaXMuX2luaXQubmV4dCh7XG4gICAgICAgIG9rOiBzdGF0dXMgPT09ICdvaycsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZXJyb3IsXG4gICAgICAgIGxvZG9wOiB0aGlzLl9sb2RvcCxcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgY2hlY2tTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAtLWNoZWNrTWF4Q291bnQ7XG4gICAgICBpZiAodGhpcy5fbG9kb3Aud2Vic2t0ICYmIHRoaXMuX2xvZG9wLndlYnNrdC5yZWFkeVN0YXRlID09PSAxKSB7XG4gICAgICAgIG9uUmVzb2x2ZSgnb2snKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjaGVja01heENvdW50IDwgMCkge1xuICAgICAgICAgIG9uUmVzb2x2ZSgnY2hlY2stbGltaXQnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjaGVja1N0YXR1cygpLCAxMDApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnNjcmlwdFNydi5sb2FkU2NyaXB0KHVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gJ29rJykge1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgb25SZXNvbHZlKCdzY3JpcHQtbG9hZC1lcnJvcicsIHJlc1swXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xvZG9wID1cbiAgICAgICAgd2luZG93Lmhhc093blByb3BlcnR5KHRoaXMuY29nLm5hbWUpICYmXG4gICAgICAgICh3aW5kb3dbdGhpcy5jb2cubmFtZV0gYXMgTG9kb3ApO1xuICAgICAgaWYgKHRoaXMuX2xvZG9wID09PSBudWxsKSB7XG4gICAgICAgIG9uUmVzb2x2ZSgnbG9hZC12YXJpYWJsZS1uYW1lLWVycm9yJywgeyBuYW1lOiB0aGlzLmNvZy5uYW1lIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9sb2RvcC5TRVRfTElDRU5TRVMoXG4gICAgICAgIHRoaXMuY29nLmNvbXBhbnlOYW1lLFxuICAgICAgICB0aGlzLmNvZy5saWNlbnNlLFxuICAgICAgICB0aGlzLmNvZy5saWNlbnNlQSxcbiAgICAgICAgdGhpcy5jb2cubGljZW5zZUIsXG4gICAgICApO1xuICAgICAgY2hlY2tTdGF0dXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiDph43nva4gbG9kb3Ag5a+56LGhICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX2xvZG9wID0gbnVsbDtcbiAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnJlcXVlc3QoKTtcbiAgfVxuXG4gIC8qKiDojrflj5YgbG9kb3Ag5a+56LGhICovXG4gIGdldCBsb2RvcCgpOiBPYnNlcnZhYmxlPExvZG9wUmVzdWx0PiB7XG4gICAgaWYgKHRoaXMuX2xvZG9wKSByZXR1cm4gb2YoeyBvazogdHJ1ZSwgbG9kb3A6IHRoaXMuX2xvZG9wIH0gYXMgTG9kb3BSZXN1bHQpO1xuICAgIGlmICh0aGlzLnBlbmRpbmcpIHJldHVybiB0aGlzLl9pbml0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgdGhpcy5yZXF1ZXN0KCk7XG5cbiAgICByZXR1cm4gdGhpcy5faW5pdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKiDojrflj5bmiZPljbDmnLrliJfooaggKi9cbiAgZ2V0IHByaW50ZXIoKTogc3RyaW5nW10ge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgICBjb25zdCByZXQ6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgY291bnQgPSB0aGlzLl9sb2RvcC5HRVRfUFJJTlRFUl9DT1VOVCgpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgcmV0LnB1c2godGhpcy5fbG9kb3AuR0VUX1BSSU5URVJfTkFNRShpbmRleCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIOmZhOWKoOS7o+eggeiHsyBgbG9kb3BgIOWvueixoeS4iu+8jOWtl+espuS4suexu+aUr+aMgSBge3trZXl9fWAg55qE5Yqo5oCB5Y+C5pWwXG4gICAqXG4gICAqICoq5rOo77yaKiog5Luj56CB5piv5oyH5omT5Y2w6K6+6K6h5omA5Lqn55Sf5a2X56ym5Liy5pWw5o2uXG4gICAqXG4gICAqIEBwYXJhbSBjb2RlIOS7o+eggVxuICAgKiBAcGFyYW0gY29udGV4dE9iaiDliqjmgIHlj4LmlbDkuIrkuIvmloflr7nosaFcbiAgICogQHBhcmFtIHBhcnNlciDoh6rlrprkuYnop6PmnpDooajovr7lvI/vvIzpu5jorqTvvJpgL0xPRE9QXFwuKFteKF0rKVxcKChbXlxcbl0rKVxcKTsvaWBcbiAgICovXG4gIGF0dGFjaENvZGUoY29kZTogc3RyaW5nLCBjb250ZXh0T2JqPzoge30sIHBhcnNlcj86IFJlZ0V4cCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgICBpZiAoIXBhcnNlcikgcGFyc2VyID0gL0xPRE9QXFwuKFteKF0rKVxcKChbXlxcbl0rKVxcKTsvaTtcbiAgICBjb2RlLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGFyc2VyLmV4ZWMobGluZS50cmltKCkpO1xuICAgICAgaWYgKCFyZXMpIHJldHVybjtcbiAgICAgIGNvbnN0IGZuID0gdGhpcy5fbG9kb3BbcmVzWzFdXTtcbiAgICAgIGlmIChmbikge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgIGxldCBhcnI6IGFueVtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGZha2VGbiA9IG5ldyBGdW5jdGlvbihgcmV0dXJuIFske3Jlc1syXX1dYCk7XG4gICAgICAgICAgYXJyID0gZmFrZUZuKCk7XG4gICAgICAgIH0gY2F0Y2ggeyB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSAmJiBjb250ZXh0T2JqKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJyW2ldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBhcnJbaV0gPSBhcnJbaV0ucmVwbGFjZShcbiAgICAgICAgICAgICAgICAve3soLio/KX19L2csXG4gICAgICAgICAgICAgICAgKG1hdGNoLCBrZXkpID0+IGNvbnRleHRPYmpba2V5LnRyaW0oKV0gfHwgJycsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZuLmFwcGx5KHRoaXMuX2xvZG9wLCBhcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOaJk+W8gOaJk+WNsOiuvuiuoeWFs+mXreWQjuiHquWKqOi/lOWbnuS7o+eggVxuICAgKlxuICAgKiAqKuazqO+8mioqIOiHquWKqOebkeWQrCBgT25fUmV0dXJuYCDkuovku7bvvIzov5DooYzlkI7kvJrnp7vpmaRcbiAgICovXG4gIGRlc2lnbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgICBjb25zdCB0aWQgPSB0aGlzLl9sb2RvcC5QUklOVF9ERVNJR04oKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLl9sb2RvcC5Pbl9SZXR1cm4gPSAodGFza0lEOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICh0aWQgIT09IHRhc2tJRCkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9sb2RvcC5Pbl9SZXR1cm4gPSBudWxsO1xuICAgICAgICByZXNvbHZlKCcnICsgdmFsdWUpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSBwcmludEJ1ZmZlcjogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBwcmludERvKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnByaW50QnVmZmVyLnNoaWZ0KCk7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG4gICAgdGhpcy5hdHRhY2hDb2RlKGRhdGEuY29kZSwgZGF0YS5pdGVtLCBkYXRhLnBhcnNlcik7XG4gICAgY29uc3QgdGlkID0gdGhpcy5fbG9kb3AuUFJJTlQoKTtcbiAgICB0aGlzLl9sb2RvcC5Pbl9SZXR1cm4gPSAodGFza0lEOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodGlkICE9PSB0YXNrSUQpIHJldHVybjtcbiAgICAgIHRoaXMuX2xvZG9wLk9uX1JldHVybiA9IG51bGw7XG4gICAgICB0aGlzLl9ldmVudHMubmV4dCh7XG4gICAgICAgIG9rOiB2YWx1ZSA9PT0gdHJ1ZSxcbiAgICAgICAgZXJyb3I6IHZhbHVlID09PSB0cnVlID8gbnVsbCA6IHZhbHVlLFxuICAgICAgICAuLi5kYXRhLFxuICAgICAgfSk7XG4gICAgICB0aGlzLnByaW50RG8oKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOeri+WNs+aJk+WNsO+8jOS4gOiIrOeUqOS6juaJuemHj+Wll+aJk1xuICAgKlxuICAgKiBAcGFyYW0gY29kZSDku6PnoIFcbiAgICogQHBhcmFtIGNvbnRleHRPYmog5Yqo5oCB5Y+C5pWw5LiK5LiL5paH5a+56LGhXG4gICAqIEBwYXJhbSBwYXJzZXIg6Ieq5a6a5LmJ6Kej5p6Q6KGo6L6+5byP77yM6buY6K6k77yaYC9MT0RPUFxcLihbXihdKylcXCgoW15cXG5dKylcXCk7L2lgXG4gICAqL1xuICBwcmludChjb2RlOiBzdHJpbmcsIGNvbnRleHRPYmo6IHt9IHwgQXJyYXk8e30+LCBwYXJzZXI/OiBSZWdFeHApOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgaWYgKGNvbnRleHRPYmopIHtcbiAgICAgIHRoaXMucHJpbnRCdWZmZXIucHVzaChcbiAgICAgICAgLi4uKEFycmF5LmlzQXJyYXkoY29udGV4dE9iaikgPyBjb250ZXh0T2JqIDogW2NvbnRleHRPYmpdKS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgY29kZSwgcGFyc2VyLCBpdGVtIH07XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5wcmludERvKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0LnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fZXZlbnRzLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==