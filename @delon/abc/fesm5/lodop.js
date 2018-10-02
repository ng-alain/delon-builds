import { __spread } from 'tslib';
import { Injectable, NgModule } from '@angular/core';
import { of, Subject } from 'rxjs';
import { LazyService, DelonUtilModule } from '@delon/util';

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
                    (/** @type {?} */ (window[_this.cog.name]));
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
                return of(/** @type {?} */ ({ ok: true, lodop: this._lodop }));
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
        { type: Injectable }
    ];
    /** @nocollapse */
    LodopService.ctorParameters = function () { return [
        { type: LodopConfig },
        { type: LazyService }
    ]; };
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
        { type: NgModule, args: [{
                    imports: [DelonUtilModule],
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

export { LodopService, LodopConfig, LodopModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3AuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvbG9kb3AvbG9kb3AuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWJjL2xvZG9wL2xvZG9wLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hYmMvbG9kb3AvbG9kb3AubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMb2RvcENvbmZpZyB7XHJcbiAgLyoqXHJcbiAgICogw6bCs8Kow6XChsKMw6TCv8Khw6bCgcKvw6/CvMKaw6TCuMK7w6bCs8Kow6XChsKMw6XCj8K3XHJcbiAgICovXHJcbiAgbGljZW5zZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIMOmwrPCqMOlwobCjMOkwr/CocOmwoHCr8OvwrzCmsOpwpnChMOlworCoMOmwrPCqMOlwobCjMOlwo/Ct0FcclxuICAgKi9cclxuICBsaWNlbnNlQTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIMOmwrPCqMOlwobCjMOkwr/CocOmwoHCr8OvwrzCmsOpwpnChMOlworCoMOmwrPCqMOlwobCjMOlwo/Ct0JcclxuICAgKi9cclxuICBsaWNlbnNlQj86IHN0cmluZztcclxuICAvKipcclxuICAgKiDDpsKzwqjDpcKGwozDpMK/wqHDpsKBwq/Dr8K8wprDpsKzwqjDpcKGwozDpcKNwpXDpMK9wo3DpcKQwo3Dp8KnwrBcclxuICAgKi9cclxuICBjb21wYW55TmFtZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBMb2RvcCDDqMK/wpzDp8KowovDqMKEwprDpsKcwqxVUkzDpcKcwrDDpcKdwoDDr8K8wowqKsOmwrPCqMOmwoTCjyoqw6XCisKhw6XCv8KFw6TCvcK/w6fClMKoIGBuYW1lYCDDpcKxwp7DpsKAwqfDpsKMwofDpcKuwprDpcKPwpjDqcKHwo/DpcKAwrxcclxuICAgKlxyXG4gICAqIC0gaHR0cDovL2xvY2FsaG9zdDoxODAwMC9DTG9kb3BmdW5jcy5qc1xyXG4gICAqIC0gaHR0cHM6Ly9sb2NhbGhvc3Q6ODQ0My9DTG9kb3BmdW5jcy5qcyBbw6nCu8KYw6jCrsKkXVxyXG4gICAqL1xyXG4gIHVybD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBMb2RvcCDDpcKPwpjDqcKHwo/DpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgQ0xPRE9QYFxyXG4gICAqL1xyXG4gIG5hbWU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogw6bCo8KAw6bCn8Klw6bCrMKhw6bClcKww6/CvMKMw6nCu8KYw6jCrsKkIGAxMDBgw6/CvMKMw6XCvcKTw6bCo8KAw6bCn8Klw6jCtsKFw6jCv8KHw6bCl8K2w6jCp8KGw6TCuMK6w6XCvMKCw6XCuMK4w6/CvMKMw6jCv8KZw6bCmMKvw6XCm8Kgw6TCuMK6IExvZG9wIMOpwpzCgMOowqbCgcOowr/CnsOmwo7CpSBXZWJTb2NrZXRcclxuICAgKi9cclxuICBjaGVja01heENvdW50PzogbnVtYmVyO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBMb2RvcCwgTG9kb3BSZXN1bHQsIExvZG9wUHJpbnRSZXN1bHQgfSBmcm9tICcuL2xvZG9wLnR5cGVzJztcclxuaW1wb3J0IHsgTG9kb3BDb25maWcgfSBmcm9tICcuL2xvZG9wLmNvbmZpZyc7XHJcblxyXG4vLyBUT0RPOiB6b25lXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZG9wU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfY29nOiBMb2RvcENvbmZpZztcclxuICBwcml2YXRlIHBlbmRpbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIF9sb2RvcDogTG9kb3AgPSBudWxsO1xyXG4gIHByaXZhdGUgX2luaXQ6IFN1YmplY3Q8TG9kb3BSZXN1bHQ+ID0gbmV3IFN1YmplY3Q8TG9kb3BSZXN1bHQ+KCk7XHJcbiAgcHJpdmF0ZSBfZXZlbnRzOiBTdWJqZWN0PExvZG9wUHJpbnRSZXN1bHQ+ID0gbmV3IFN1YmplY3Q8TG9kb3BQcmludFJlc3VsdD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWZDb2c6IExvZG9wQ29uZmlnLCBwcml2YXRlIHNjcmlwdFNydjogTGF6eVNlcnZpY2UpIHtcclxuICAgIHRoaXMuY29nID0gZGVmQ29nO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6jCjsK3w6XCj8KWw6bCiMKWw6nCh8KNw6bClsKww6jCrsK+w6fCvcKuw6nChcKNw6fCvcKuXHJcbiAgICpcclxuICAgKiAqKsOmwrPCqMOvwrzCmioqw6nCh8KNw6bClsKww6jCrsK+w6fCvcKuw6TCvMKaw6XCgMKSw6fCvcKuw6nCh8KNw6bClsKww6XCisKgw6jCvcK9w6jChMKaw6bCnMKsw6jCtcKEw6bCusKQXHJcbiAgICovXHJcbiAgZ2V0IGNvZygpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2c7XHJcbiAgfVxyXG4gIHNldCBjb2codmFsdWU6IExvZG9wQ29uZmlnKSB7XHJcbiAgICB0aGlzLl9jb2cgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9sb2NhbGhvc3Q6ODQ0My9DTG9kb3BmdW5jcy5qcycsXHJcbiAgICAgICAgbmFtZTogJ0NMT0RPUCcsXHJcbiAgICAgICAgY29tcGFueU5hbWU6ICcnLFxyXG4gICAgICAgIGNoZWNrTWF4Q291bnQ6IDEwMCxcclxuICAgICAgfSxcclxuICAgICAgdGhpcy5kZWZDb2csXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKiDDpMK6wovDpMK7wrbDpcKPwpjDpsKbwrTDqcKAwprDp8KfwqUgKi9cclxuICBnZXQgZXZlbnRzKCk6IE9ic2VydmFibGU8TG9kb3BQcmludFJlc3VsdD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50cy5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2soKSB7XHJcbiAgICBpZiAoIXRoaXMuX2xvZG9wKSB0aHJvdyBuZXcgRXJyb3IoYMOowq/Ct8OlworCocOlwr/ChcOlwoXCiMOowrDCg8OnwpTCqCBsb2RvcCDDqMKOwrfDpcKPwpbDpcKvwrnDqMKxwqFgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVxdWVzdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucGVuZGluZyA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb2cudXJsfT9uYW1lPSR7dGhpcy5jb2cubmFtZX1gO1xyXG4gICAgbGV0IGNoZWNrTWF4Q291bnQgPSB0aGlzLmNvZy5jaGVja01heENvdW50O1xyXG4gICAgY29uc3Qgb25SZXNvbHZlID0gKHN0YXR1cywgZXJyb3I/OiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5faW5pdC5uZXh0KHtcclxuICAgICAgICBvazogc3RhdHVzID09PSAnb2snLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBlcnJvcixcclxuICAgICAgICBsb2RvcDogdGhpcy5fbG9kb3AsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAtLWNoZWNrTWF4Q291bnQ7XHJcbiAgICAgIGlmICh0aGlzLl9sb2RvcC53ZWJza3QgJiYgdGhpcy5fbG9kb3Aud2Vic2t0LnJlYWR5U3RhdGUgPT09IDEpIHtcclxuICAgICAgICBvblJlc29sdmUoJ29rJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNoZWNrTWF4Q291bnQgPCAwKSB7XHJcbiAgICAgICAgICBvblJlc29sdmUoJ2NoZWNrLWxpbWl0Jyk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2hlY2tTdGF0dXMoKSwgMTAwKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNjcmlwdFNydi5sb2FkU2NyaXB0KHVybCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAnb2snKSB7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgb25SZXNvbHZlKCdzY3JpcHQtbG9hZC1lcnJvcicsIHJlc1swXSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2xvZG9wID1cclxuICAgICAgICB3aW5kb3cuaGFzT3duUHJvcGVydHkodGhpcy5jb2cubmFtZSkgJiZcclxuICAgICAgICAod2luZG93W3RoaXMuY29nLm5hbWVdIGFzIExvZG9wKTtcclxuICAgICAgaWYgKHRoaXMuX2xvZG9wID09PSBudWxsKSB7XHJcbiAgICAgICAgb25SZXNvbHZlKCdsb2FkLXZhcmlhYmxlLW5hbWUtZXJyb3InLCB7IG5hbWU6IHRoaXMuY29nLm5hbWUgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2xvZG9wLlNFVF9MSUNFTlNFUyhcclxuICAgICAgICB0aGlzLmNvZy5jb21wYW55TmFtZSxcclxuICAgICAgICB0aGlzLmNvZy5saWNlbnNlLFxyXG4gICAgICAgIHRoaXMuY29nLmxpY2Vuc2VBLFxyXG4gICAgICAgIHRoaXMuY29nLmxpY2Vuc2VCLFxyXG4gICAgICApO1xyXG4gICAgICBjaGVja1N0YXR1cygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogw6nCh8KNw6fCvcKuIGxvZG9wIMOlwq/CucOowrHCoSAqL1xyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5fbG9kb3AgPSBudWxsO1xyXG4gICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLnJlcXVlc3QoKTtcclxuICB9XHJcblxyXG4gIC8qKiDDqMKOwrfDpcKPwpYgbG9kb3Agw6XCr8K5w6jCscKhICovXHJcbiAgZ2V0IGxvZG9wKCk6IE9ic2VydmFibGU8TG9kb3BSZXN1bHQ+IHtcclxuICAgIGlmICh0aGlzLl9sb2RvcCkgcmV0dXJuIG9mKDxMb2RvcFJlc3VsdD57IG9rOiB0cnVlLCBsb2RvcDogdGhpcy5fbG9kb3AgfSk7XHJcbiAgICBpZiAodGhpcy5wZW5kaW5nKSByZXR1cm4gdGhpcy5faW5pdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgICB0aGlzLnJlcXVlc3QoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5faW5pdC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIC8qKiDDqMKOwrfDpcKPwpbDpsKJwpPDpcKNwrDDpsKcwrrDpcKIwpfDqMKhwqggKi9cclxuICBnZXQgcHJpbnRlcigpOiBzdHJpbmdbXSB7XHJcbiAgICB0aGlzLmNoZWNrKCk7XHJcbiAgICBjb25zdCByZXQ6IHN0cmluZ1tdID0gW107XHJcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuX2xvZG9wLkdFVF9QUklOVEVSX0NPVU5UKCk7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcclxuICAgICAgcmV0LnB1c2godGhpcy5fbG9kb3AuR0VUX1BSSU5URVJfTkFNRShpbmRleCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOpwpnChMOlworCoMOkwrvCo8OnwqDCgcOowofCsyBgbG9kb3BgIMOlwq/CucOowrHCocOkwrjCisOvwrzCjMOlwq3Cl8OnwqzCpsOkwrjCssOnwrHCu8OmwpTCr8OmwozCgSBge3trZXl9fWAgw6fCmsKEw6XCisKow6bCgMKBw6XCj8KCw6bClcKwXHJcbiAgICpcclxuICAgKiAqKsOmwrPCqMOvwrzCmioqIMOkwrvCo8OnwqDCgcOmwpjCr8OmwozCh8OmwonCk8Olwo3CsMOowq7CvsOowq7CocOmwonCgMOkwrrCp8OnwpTCn8Olwq3Cl8OnwqzCpsOkwrjCssOmwpXCsMOmwo3CrlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvZGUgw6TCu8Kjw6fCoMKBXHJcbiAgICogQHBhcmFtIGNvbnRleHRPYmogw6XCisKow6bCgMKBw6XCj8KCw6bClcKww6TCuMKKw6TCuMKLw6bClsKHw6XCr8K5w6jCscKhXHJcbiAgICogQHBhcmFtIHBhcnNlciDDqMKHwqrDpcKuwprDpMK5wonDqMKnwqPDpsKewpDDqMKhwqjDqMK+wr7DpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgL0xPRE9QXFwuKFteKF0rKVxcKChbXlxcbl0rKVxcKTsvaWBcclxuICAgKi9cclxuICBhdHRhY2hDb2RlKGNvZGU6IHN0cmluZywgY29udGV4dE9iaj86IE9iamVjdCwgcGFyc2VyPzogUmVnRXhwKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrKCk7XHJcbiAgICBpZiAoIXBhcnNlcikgcGFyc2VyID0gL0xPRE9QXFwuKFteKF0rKVxcKChbXlxcbl0rKVxcKTsvaTtcclxuICAgIGNvZGUuc3BsaXQoJ1xcbicpLmZvckVhY2gobGluZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IHBhcnNlci5leGVjKGxpbmUudHJpbSgpKTtcclxuICAgICAgaWYgKCFyZXMpIHJldHVybjtcclxuICAgICAgY29uc3QgZm4gPSB0aGlzLl9sb2RvcFtyZXNbMV1dO1xyXG4gICAgICBpZiAoZm4pIHtcclxuICAgICAgICBsZXQgYXJyOiBBcnJheTxhbnk+O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBmYWtlRm4gPSBuZXcgRnVuY3Rpb24oYHJldHVybiBbJHtyZXNbMl19XWApO1xyXG4gICAgICAgICAgYXJyID0gZmFrZUZuKCkgYXMgYW55W107XHJcbiAgICAgICAgfSBjYXRjaCB7fVxyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpICYmIGNvbnRleHRPYmopIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJyW2ldID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgIGFycltpXSA9IGFycltpXS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgL3t7KC4qPyl9fS9nLFxyXG4gICAgICAgICAgICAgICAgKG1hdGNoLCBrZXkpID0+IGNvbnRleHRPYmpba2V5LnRyaW0oKV0gfHwgJycsXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmbi5hcHBseSh0aGlzLl9sb2RvcCwgYXJyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpsKJwpPDpcK8woDDpsKJwpPDpcKNwrDDqMKuwr7DqMKuwqHDpcKFwrPDqcKXwq3DpcKQwo7DqMKHwqrDpcKKwqjDqMK/wpTDpcKbwp7DpMK7wqPDp8KgwoFcclxuICAgKlxyXG4gICAqICoqw6bCs8Kow6/CvMKaKiogw6jCh8Kqw6XCisKow6fCm8KRw6XCkMKsIGBPbl9SZXR1cm5gIMOkwrrCi8OkwrvCtsOvwrzCjMOowr/CkMOowqHCjMOlwpDCjsOkwrzCmsOnwqfCu8OpwpnCpFxyXG4gICAqL1xyXG4gIGRlc2lnbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgdGhpcy5jaGVjaygpO1xyXG4gICAgY29uc3QgdGlkID0gdGhpcy5fbG9kb3AuUFJJTlRfREVTSUdOKCk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHRoaXMuX2xvZG9wLk9uX1JldHVybiA9ICh0YXNrSUQ6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpID0+IHtcclxuICAgICAgICBpZiAodGlkICE9PSB0YXNrSUQpIHJldHVybjtcclxuICAgICAgICB0aGlzLl9sb2RvcC5Pbl9SZXR1cm4gPSBudWxsO1xyXG4gICAgICAgIHJlc29sdmUoJycgKyB2YWx1ZSk7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJpbnRCdWZmZXI6IGFueVtdID0gW107XHJcbiAgcHJpdmF0ZSBwcmludERvKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMucHJpbnRCdWZmZXIuc2hpZnQoKTtcclxuICAgIGlmICghZGF0YSkgcmV0dXJuO1xyXG4gICAgdGhpcy5hdHRhY2hDb2RlKGRhdGEuY29kZSwgZGF0YS5pdGVtLCBkYXRhLnBhcnNlcik7XHJcbiAgICBjb25zdCB0aWQgPSB0aGlzLl9sb2RvcC5QUklOVCgpO1xyXG4gICAgdGhpcy5fbG9kb3AuT25fUmV0dXJuID0gKHRhc2tJRDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykgPT4ge1xyXG4gICAgICBpZiAodGlkICE9PSB0YXNrSUQpIHJldHVybjtcclxuICAgICAgdGhpcy5fbG9kb3AuT25fUmV0dXJuID0gbnVsbDtcclxuICAgICAgdGhpcy5fZXZlbnRzLm5leHQoXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcclxuICAgICAgICAgIDxMb2RvcFByaW50UmVzdWx0PntcclxuICAgICAgICAgICAgb2s6IHZhbHVlID09PSB0cnVlLFxyXG4gICAgICAgICAgICBlcnJvcjogdmFsdWUgPT09IHRydWUgPyBudWxsIDogdmFsdWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGF0YSxcclxuICAgICAgICApLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnByaW50RG8oKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDp8KrwovDpcKNwrPDpsKJwpPDpcKNwrDDr8K8wozDpMK4woDDqMKIwqzDp8KUwqjDpMK6wo7DpsKJwrnDqcKHwo/DpcKlwpfDpsKJwpNcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb2RlIMOkwrvCo8OnwqDCgVxyXG4gICAqIEBwYXJhbSBjb250ZXh0T2JqIMOlworCqMOmwoDCgcOlwo/CgsOmwpXCsMOkwrjCisOkwrjCi8OmwpbCh8Olwq/CucOowrHCoVxyXG4gICAqIEBwYXJhbSBwYXJzZXIgw6jCh8Kqw6XCrsKaw6TCucKJw6jCp8Kjw6bCnsKQw6jCocKow6jCvsK+w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYC9MT0RPUFxcLihbXihdKylcXCgoW15cXG5dKylcXCk7L2lgXHJcbiAgICovXHJcbiAgcHJpbnQoY29kZTogc3RyaW5nLCBjb250ZXh0T2JqOiBPYmplY3QgfCBPYmplY3RbXSwgcGFyc2VyPzogUmVnRXhwKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrKCk7XHJcbiAgICBpZiAoY29udGV4dE9iaikge1xyXG4gICAgICB0aGlzLnByaW50QnVmZmVyLnB1c2goXHJcbiAgICAgICAgLi4uKEFycmF5LmlzQXJyYXkoY29udGV4dE9iaikgPyBjb250ZXh0T2JqIDogW2NvbnRleHRPYmpdKS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4geyBjb2RlLCBwYXJzZXIsIGl0ZW0gfTtcclxuICAgICAgICB9KSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMucHJpbnREbygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9pbml0LnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl9ldmVudHMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgTG9kb3BDb25maWcgfSBmcm9tICcuL2xvZG9wLmNvbmZpZyc7XHJcbmltcG9ydCB7IExvZG9wU2VydmljZSB9IGZyb20gJy4vbG9kb3Auc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtEZWxvblV0aWxNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9kb3BNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IExvZG9wTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtMb2RvcFNlcnZpY2UsIExvZG9wQ29uZmlnXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFBOzs7c0JBQUE7SUFnQ0M7Ozs7Ozs7SUNmQyxzQkFBb0IsTUFBbUIsRUFBVSxTQUFzQjtRQUFuRCxXQUFNLEdBQU4sTUFBTSxDQUFhO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBYTt1QkFMckQsS0FBSztzQkFDQyxJQUFJO3FCQUNVLElBQUksT0FBTyxFQUFlO3VCQUNuQixJQUFJLE9BQU8sRUFBb0I7MkJBd0svQyxFQUFFO1FBcks3QixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztLQUNuQjtJQU9ELHNCQUFJLDZCQUFHOzs7Ozs7Ozs7Ozs7UUFBUDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjs7Ozs7UUFDRCxVQUFRLEtBQWtCO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDdkI7Z0JBQ0UsR0FBRyxFQUFFLHVDQUF1QztnQkFDNUMsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsYUFBYSxFQUFFLEdBQUc7YUFDbkIsRUFDRCxJQUFJLENBQUMsTUFBTSxFQUNYLEtBQUssQ0FDTixDQUFDO1NBQ0g7OztPQVpBO0lBZUQsc0JBQUksZ0NBQU07Ozs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3BDOzs7T0FBQTs7OztJQUVPLDRCQUFLOzs7O1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsTUFBTSxJ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