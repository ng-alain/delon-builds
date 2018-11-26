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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3AuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvbG9kb3AvbG9kb3AuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWJjL2xvZG9wL2xvZG9wLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hYmMvbG9kb3AvbG9kb3AubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMb2RvcENvbmZpZyB7XG4gIC8qKlxuICAgKiDDpsKzwqjDpcKGwozDpMK/wqHDpsKBwq/Dr8K8wprDpMK4wrvDpsKzwqjDpcKGwozDpcKPwrdcbiAgICovXG4gIGxpY2Vuc2U6IHN0cmluZztcbiAgLyoqXG4gICAqIMOmwrPCqMOlwobCjMOkwr/CocOmwoHCr8OvwrzCmsOpwpnChMOlworCoMOmwrPCqMOlwobCjMOlwo/Ct0FcbiAgICovXG4gIGxpY2Vuc2VBOiBzdHJpbmc7XG4gIC8qKlxuICAgKiDDpsKzwqjDpcKGwozDpMK/wqHDpsKBwq/Dr8K8wprDqcKZwoTDpcKKwqDDpsKzwqjDpcKGwozDpcKPwrdCXG4gICAqL1xuICBsaWNlbnNlQj86IHN0cmluZztcbiAgLyoqXG4gICAqIMOmwrPCqMOlwobCjMOkwr/CocOmwoHCr8OvwrzCmsOmwrPCqMOlwobCjMOlwo3ClcOkwr3CjcOlwpDCjcOnwqfCsFxuICAgKi9cbiAgY29tcGFueU5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBMb2RvcCDDqMK/wpzDp8KowovDqMKEwprDpsKcwqxVUkzDpcKcwrDDpcKdwoDDr8K8wowqKsOmwrPCqMOmwoTCjyoqw6XCisKhw6XCv8KFw6TCvcK/w6fClMKoIGBuYW1lYCDDpcKxwp7DpsKAwqfDpsKMwofDpcKuwprDpcKPwpjDqcKHwo/DpcKAwrxcbiAgICpcbiAgICogLSBodHRwOi8vbG9jYWxob3N0OjE4MDAwL0NMb2RvcGZ1bmNzLmpzXG4gICAqIC0gaHR0cHM6Ly9sb2NhbGhvc3Q6ODQ0My9DTG9kb3BmdW5jcy5qcyBbw6nCu8KYw6jCrsKkXVxuICAgKi9cbiAgdXJsPzogc3RyaW5nO1xuICAvKipcbiAgICogTG9kb3Agw6XCj8KYw6nCh8KPw6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYENMT0RPUGBcbiAgICovXG4gIG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDDpsKjwoDDpsKfwqXDpsKswqHDpsKVwrDDr8K8wozDqcK7wpjDqMKuwqQgYDEwMGDDr8K8wozDpcK9wpPDpsKjwoDDpsKfwqXDqMK2woXDqMK/wofDpsKXwrbDqMKnwobDpMK4wrrDpcK8woLDpcK4wrjDr8K8wozDqMK/wpnDpsKYwq/DpcKbwqDDpMK4wrogTG9kb3Agw6nCnMKAw6jCpsKBw6jCv8Kew6bCjsKlIFdlYlNvY2tldFxuICAgKi9cbiAgY2hlY2tNYXhDb3VudD86IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IExvZG9wLCBMb2RvcFJlc3VsdCwgTG9kb3BQcmludFJlc3VsdCB9IGZyb20gJy4vbG9kb3AudHlwZXMnO1xuaW1wb3J0IHsgTG9kb3BDb25maWcgfSBmcm9tICcuL2xvZG9wLmNvbmZpZyc7XG5cbi8vIFRPRE86IHpvbmVcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2RvcFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9jb2c6IExvZG9wQ29uZmlnO1xuICBwcml2YXRlIHBlbmRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbG9kb3A6IExvZG9wID0gbnVsbDtcbiAgcHJpdmF0ZSBfaW5pdDogU3ViamVjdDxMb2RvcFJlc3VsdD4gPSBuZXcgU3ViamVjdDxMb2RvcFJlc3VsdD4oKTtcbiAgcHJpdmF0ZSBfZXZlbnRzOiBTdWJqZWN0PExvZG9wUHJpbnRSZXN1bHQ+ID0gbmV3IFN1YmplY3Q8TG9kb3BQcmludFJlc3VsdD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlZkNvZzogTG9kb3BDb25maWcsIHByaXZhdGUgc2NyaXB0U3J2OiBMYXp5U2VydmljZSkge1xuICAgIHRoaXMuY29nID0gZGVmQ29nO1xuICB9XG5cbiAgLyoqXG4gICAqIMOowo7Ct8Olwo/ClsOmwojClsOpwofCjcOmwpbCsMOowq7CvsOnwr3CrsOpwoXCjcOnwr3CrlxuICAgKlxuICAgKiAqKsOmwrPCqMOvwrzCmioqw6nCh8KNw6bClsKww6jCrsK+w6fCvcKuw6TCvMKaw6XCgMKSw6fCvcKuw6nCh8KNw6bClsKww6XCisKgw6jCvcK9w6jChMKaw6bCnMKsw6jCtcKEw6bCusKQXG4gICAqL1xuICBnZXQgY29nKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2c7XG4gIH1cbiAgc2V0IGNvZyh2YWx1ZTogTG9kb3BDb25maWcpIHtcbiAgICB0aGlzLl9jb2cgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICB1cmw6ICdodHRwczovL2xvY2FsaG9zdDo4NDQzL0NMb2RvcGZ1bmNzLmpzJyxcbiAgICAgICAgbmFtZTogJ0NMT0RPUCcsXG4gICAgICAgIGNvbXBhbnlOYW1lOiAnJyxcbiAgICAgICAgY2hlY2tNYXhDb3VudDogMTAwLFxuICAgICAgfSxcbiAgICAgIHRoaXMuZGVmQ29nLFxuICAgICAgdmFsdWUsXG4gICAgKTtcbiAgfVxuXG4gIC8qKiDDpMK6wovDpMK7wrbDpcKPwpjDpsKbwrTDqcKAwprDp8KfwqUgKi9cbiAgZ2V0IGV2ZW50cygpOiBPYnNlcnZhYmxlPExvZG9wUHJpbnRSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnRzLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVjaygpIHtcbiAgICBpZiAoIXRoaXMuX2xvZG9wKSB0aHJvdyBuZXcgRXJyb3IoYMOowq/Ct8OlworCocOlwr/ChcOlwoXCiMOowrDCg8OnwpTCqCBsb2RvcCDDqMKOwrfDpcKPwpbDpcKvwrnDqMKxwqFgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVxdWVzdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xuXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb2cudXJsfT9uYW1lPSR7dGhpcy5jb2cubmFtZX1gO1xuICAgIGxldCBjaGVja01heENvdW50ID0gdGhpcy5jb2cuY2hlY2tNYXhDb3VudDtcbiAgICBjb25zdCBvblJlc29sdmUgPSAoc3RhdHVzLCBlcnJvcj86IGFueSkgPT4ge1xuICAgICAgdGhpcy5faW5pdC5uZXh0KHtcbiAgICAgICAgb2s6IHN0YXR1cyA9PT0gJ29rJyxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBlcnJvcixcbiAgICAgICAgbG9kb3A6IHRoaXMuX2xvZG9wLFxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcbiAgICAgIC0tY2hlY2tNYXhDb3VudDtcbiAgICAgIGlmICh0aGlzLl9sb2RvcC53ZWJza3QgJiYgdGhpcy5fbG9kb3Aud2Vic2t0LnJlYWR5U3RhdGUgPT09IDEpIHtcbiAgICAgICAgb25SZXNvbHZlKCdvaycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoZWNrTWF4Q291bnQgPCAwKSB7XG4gICAgICAgICAgb25SZXNvbHZlKCdjaGVjay1saW1pdCcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNoZWNrU3RhdHVzKCksIDEwMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuc2NyaXB0U3J2LmxvYWRTY3JpcHQodXJsKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAnb2snKSB7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICBvblJlc29sdmUoJ3NjcmlwdC1sb2FkLWVycm9yJywgcmVzWzBdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fbG9kb3AgPVxuICAgICAgICB3aW5kb3cuaGFzT3duUHJvcGVydHkodGhpcy5jb2cubmFtZSkgJiZcbiAgICAgICAgKHdpbmRvd1t0aGlzLmNvZy5uYW1lXSBhcyBMb2RvcCk7XG4gICAgICBpZiAodGhpcy5fbG9kb3AgPT09IG51bGwpIHtcbiAgICAgICAgb25SZXNvbHZlKCdsb2FkLXZhcmlhYmxlLW5hbWUtZXJyb3InLCB7IG5hbWU6IHRoaXMuY29nLm5hbWUgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xvZG9wLlNFVF9MSUNFTlNFUyhcbiAgICAgICAgdGhpcy5jb2cuY29tcGFueU5hbWUsXG4gICAgICAgIHRoaXMuY29nLmxpY2Vuc2UsXG4gICAgICAgIHRoaXMuY29nLmxpY2Vuc2VBLFxuICAgICAgICB0aGlzLmNvZy5saWNlbnNlQixcbiAgICAgICk7XG4gICAgICBjaGVja1N0YXR1cygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIMOpwofCjcOnwr3CriBsb2RvcCDDpcKvwrnDqMKxwqEgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fbG9kb3AgPSBudWxsO1xuICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgIHRoaXMucmVxdWVzdCgpO1xuICB9XG5cbiAgLyoqIMOowo7Ct8Olwo/CliBsb2RvcCDDpcKvwrnDqMKxwqEgKi9cbiAgZ2V0IGxvZG9wKCk6IE9ic2VydmFibGU8TG9kb3BSZXN1bHQ+IHtcbiAgICBpZiAodGhpcy5fbG9kb3ApIHJldHVybiBvZig8TG9kb3BSZXN1bHQ+eyBvazogdHJ1ZSwgbG9kb3A6IHRoaXMuX2xvZG9wIH0pO1xuICAgIGlmICh0aGlzLnBlbmRpbmcpIHJldHVybiB0aGlzLl9pbml0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgdGhpcy5yZXF1ZXN0KCk7XG5cbiAgICByZXR1cm4gdGhpcy5faW5pdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKiDDqMKOwrfDpcKPwpbDpsKJwpPDpcKNwrDDpsKcwrrDpcKIwpfDqMKhwqggKi9cbiAgZ2V0IHByaW50ZXIoKTogc3RyaW5nW10ge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgICBjb25zdCByZXQ6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgY291bnQgPSB0aGlzLl9sb2RvcC5HRVRfUFJJTlRFUl9DT1VOVCgpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgcmV0LnB1c2godGhpcy5fbG9kb3AuR0VUX1BSSU5URVJfTkFNRShpbmRleCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIMOpwpnChMOlworCoMOkwrvCo8OnwqDCgcOowofCsyBgbG9kb3BgIMOlwq/CucOowrHCocOkwrjCisOvwrzCjMOlwq3Cl8OnwqzCpsOkwrjCssOnwrHCu8OmwpTCr8OmwozCgSBge3trZXl9fWAgw6fCmsKEw6XCisKow6bCgMKBw6XCj8KCw6bClcKwXG4gICAqXG4gICAqICoqw6bCs8Kow6/CvMKaKiogw6TCu8Kjw6fCoMKBw6bCmMKvw6bCjMKHw6bCicKTw6XCjcKww6jCrsK+w6jCrsKhw6bCicKAw6TCusKnw6fClMKfw6XCrcKXw6fCrMKmw6TCuMKyw6bClcKww6bCjcKuXG4gICAqXG4gICAqIEBwYXJhbSBjb2RlIMOkwrvCo8OnwqDCgVxuICAgKiBAcGFyYW0gY29udGV4dE9iaiDDpcKKwqjDpsKAwoHDpcKPwoLDpsKVwrDDpMK4worDpMK4wovDpsKWwofDpcKvwrnDqMKxwqFcbiAgICogQHBhcmFtIHBhcnNlciDDqMKHwqrDpcKuwprDpMK5wonDqMKnwqPDpsKewpDDqMKhwqjDqMK+wr7DpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgL0xPRE9QXFwuKFteKF0rKVxcKChbXlxcbl0rKVxcKTsvaWBcbiAgICovXG4gIGF0dGFjaENvZGUoY29kZTogc3RyaW5nLCBjb250ZXh0T2JqPzogT2JqZWN0LCBwYXJzZXI/OiBSZWdFeHApOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgaWYgKCFwYXJzZXIpIHBhcnNlciA9IC9MT0RPUFxcLihbXihdKylcXCgoW15cXG5dKylcXCk7L2k7XG4gICAgY29kZS5zcGxpdCgnXFxuJykuZm9yRWFjaChsaW5lID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhcnNlci5leGVjKGxpbmUudHJpbSgpKTtcbiAgICAgIGlmICghcmVzKSByZXR1cm47XG4gICAgICBjb25zdCBmbiA9IHRoaXMuX2xvZG9wW3Jlc1sxXV07XG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgbGV0IGFycjogQXJyYXk8YW55PjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBmYWtlRm4gPSBuZXcgRnVuY3Rpb24oYHJldHVybiBbJHtyZXNbMl19XWApO1xuICAgICAgICAgIGFyciA9IGZha2VGbigpIGFzIGFueVtdO1xuICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSAmJiBjb250ZXh0T2JqKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJyW2ldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBhcnJbaV0gPSBhcnJbaV0ucmVwbGFjZShcbiAgICAgICAgICAgICAgICAve3soLio/KX19L2csXG4gICAgICAgICAgICAgICAgKG1hdGNoLCBrZXkpID0+IGNvbnRleHRPYmpba2V5LnRyaW0oKV0gfHwgJycsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZuLmFwcGx5KHRoaXMuX2xvZG9wLCBhcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwonCk8OlwrzCgMOmwonCk8Olwo3CsMOowq7CvsOowq7CocOlwoXCs8OpwpfCrcOlwpDCjsOowofCqsOlworCqMOowr/ClMOlwpvCnsOkwrvCo8OnwqDCgVxuICAgKlxuICAgKiAqKsOmwrPCqMOvwrzCmioqIMOowofCqsOlworCqMOnwpvCkcOlwpDCrCBgT25fUmV0dXJuYCDDpMK6wovDpMK7wrbDr8K8wozDqMK/wpDDqMKhwozDpcKQwo7DpMK8wprDp8KnwrvDqcKZwqRcbiAgICovXG4gIGRlc2lnbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgICBjb25zdCB0aWQgPSB0aGlzLl9sb2RvcC5QUklOVF9ERVNJR04oKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLl9sb2RvcC5Pbl9SZXR1cm4gPSAodGFza0lEOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICh0aWQgIT09IHRhc2tJRCkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9sb2RvcC5Pbl9SZXR1cm4gPSBudWxsO1xuICAgICAgICByZXNvbHZlKCcnICsgdmFsdWUpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcHJpbnRCdWZmZXI6IGFueVtdID0gW107XG4gIHByaXZhdGUgcHJpbnREbygpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcmludEJ1ZmZlci5zaGlmdCgpO1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuICAgIHRoaXMuYXR0YWNoQ29kZShkYXRhLmNvZGUsIGRhdGEuaXRlbSwgZGF0YS5wYXJzZXIpO1xuICAgIGNvbnN0IHRpZCA9IHRoaXMuX2xvZG9wLlBSSU5UKCk7XG4gICAgdGhpcy5fbG9kb3AuT25fUmV0dXJuID0gKHRhc2tJRDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHRpZCAhPT0gdGFza0lEKSByZXR1cm47XG4gICAgICB0aGlzLl9sb2RvcC5Pbl9SZXR1cm4gPSBudWxsO1xuICAgICAgdGhpcy5fZXZlbnRzLm5leHQoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgPExvZG9wUHJpbnRSZXN1bHQ+e1xuICAgICAgICAgICAgb2s6IHZhbHVlID09PSB0cnVlLFxuICAgICAgICAgICAgZXJyb3I6IHZhbHVlID09PSB0cnVlID8gbnVsbCA6IHZhbHVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgKSxcbiAgICAgICk7XG4gICAgICB0aGlzLnByaW50RG8oKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIMOnwqvCi8Olwo3Cs8OmwonCk8Olwo3CsMOvwrzCjMOkwrjCgMOowojCrMOnwpTCqMOkwrrCjsOmwonCucOpwofCj8OlwqXCl8OmwonCk1xuICAgKlxuICAgKiBAcGFyYW0gY29kZSDDpMK7wqPDp8KgwoFcbiAgICogQHBhcmFtIGNvbnRleHRPYmogw6XCisKow6bCgMKBw6XCj8KCw6bClcKww6TCuMKKw6TCuMKLw6bClsKHw6XCr8K5w6jCscKhXG4gICAqIEBwYXJhbSBwYXJzZXIgw6jCh8Kqw6XCrsKaw6TCucKJw6jCp8Kjw6bCnsKQw6jCocKow6jCvsK+w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYC9MT0RPUFxcLihbXihdKylcXCgoW15cXG5dKylcXCk7L2lgXG4gICAqL1xuICBwcmludChjb2RlOiBzdHJpbmcsIGNvbnRleHRPYmo6IE9iamVjdCB8IE9iamVjdFtdLCBwYXJzZXI/OiBSZWdFeHApOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgaWYgKGNvbnRleHRPYmopIHtcbiAgICAgIHRoaXMucHJpbnRCdWZmZXIucHVzaChcbiAgICAgICAgLi4uKEFycmF5LmlzQXJyYXkoY29udGV4dE9iaikgPyBjb250ZXh0T2JqIDogW2NvbnRleHRPYmpdKS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgY29kZSwgcGFyc2VyLCBpdGVtIH07XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5wcmludERvKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0LnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fZXZlbnRzLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IExvZG9wQ29uZmlnIH0gZnJvbSAnLi9sb2RvcC5jb25maWcnO1xuaW1wb3J0IHsgTG9kb3BTZXJ2aWNlIH0gZnJvbSAnLi9sb2RvcC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0RlbG9uVXRpbE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIExvZG9wTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBMb2RvcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0xvZG9wU2VydmljZSwgTG9kb3BDb25maWddLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFBOzs7c0JBQUE7SUFnQ0M7Ozs7Ozs7SUNmQyxzQkFBb0IsTUFBbUIsRUFBVSxTQUFzQjtRQUFuRCxXQUFNLEdBQU4sTUFBTSxDQUFhO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBYTt1QkFMckQsS0FBSztzQkFDQyxJQUFJO3FCQUNVLElBQUksT0FBTyxFQUFlO3VCQUNuQixJQUFJLE9BQU8sRUFBb0I7MkJBd0svQyxFQUFFO1FBcks3QixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztLQUNuQjtJQU9ELHNCQUFJLDZCQUFHOzs7Ozs7Ozs7Ozs7UUFBUDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjs7Ozs7UUFDRCxVQUFR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