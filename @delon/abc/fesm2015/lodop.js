import { Injectable, NgModule } from '@angular/core';
import { of, Subject } from 'rxjs';
import { LazyService, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LodopConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LodopService {
    /**
     * @param {?} defCog
     * @param {?} scriptSrv
     */
    constructor(defCog, scriptSrv) {
        this.defCog = defCog;
        this.scriptSrv = scriptSrv;
        this.pending = false;
        this._lodop = null;
        this._init = new Subject();
        this._events = new Subject();
        this.printBuffer = [];
        this.cog = defCog;
    }
    /**
     * 获取或重新设置配置
     *
     * **注：**重新设置会倒置重新加载脚本资源
     * @return {?}
     */
    get cog() {
        return this._cog;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set cog(value) {
        this._cog = Object.assign({
            url: 'https://localhost:8443/CLodopfuncs.js',
            name: 'CLODOP',
            companyName: '',
            checkMaxCount: 100,
        }, this.defCog, value);
    }
    /**
     * 事件变更通知
     * @return {?}
     */
    get events() {
        return this._events.asObservable();
    }
    /**
     * @return {?}
     */
    check() {
        if (!this._lodop)
            throw new Error(`请务必先调用 lodop 获取对象`);
    }
    /**
     * @return {?}
     */
    request() {
        this.pending = true;
        /** @type {?} */
        const url = `${this.cog.url}?name=${this.cog.name}`;
        /** @type {?} */
        let checkMaxCount = this.cog.checkMaxCount;
        /** @type {?} */
        const onResolve = (status, error) => {
            this._init.next({
                ok: status === 'ok',
                status,
                error,
                lodop: this._lodop,
            });
        };
        /** @type {?} */
        const checkStatus = () => {
            --checkMaxCount;
            if (this._lodop.webskt && this._lodop.webskt.readyState === 1) {
                onResolve('ok');
            }
            else {
                if (checkMaxCount < 0) {
                    onResolve('check-limit');
                    return;
                }
                setTimeout(() => checkStatus(), 100);
            }
        };
        this.scriptSrv.loadScript(url).then((res) => {
            if (res.status !== 'ok') {
                this.pending = false;
                onResolve('script-load-error', res[0]);
                return;
            }
            this._lodop =
                window.hasOwnProperty(this.cog.name) &&
                    (/** @type {?} */ (window[this.cog.name]));
            if (this._lodop === null) {
                onResolve('load-variable-name-error', { name: this.cog.name });
                return;
            }
            this._lodop.SET_LICENSES(this.cog.companyName, this.cog.license, this.cog.licenseA, this.cog.licenseB);
            checkStatus();
        });
    }
    /**
     * 重置 lodop 对象
     * @return {?}
     */
    reset() {
        this._lodop = null;
        this.pending = false;
        this.request();
    }
    /**
     * 获取 lodop 对象
     * @return {?}
     */
    get lodop() {
        if (this._lodop)
            return of(/** @type {?} */ ({ ok: true, lodop: this._lodop }));
        if (this.pending)
            return this._init.asObservable();
        this.request();
        return this._init.asObservable();
    }
    /**
     * 获取打印机列表
     * @return {?}
     */
    get printer() {
        this.check();
        /** @type {?} */
        const ret = [];
        /** @type {?} */
        const count = this._lodop.GET_PRINTER_COUNT();
        for (let index = 0; index < count; index++) {
            ret.push(this._lodop.GET_PRINTER_NAME(index));
        }
        return ret;
    }
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
    attachCode(code, contextObj, parser) {
        this.check();
        if (!parser)
            parser = /LODOP\.([^(]+)\(([^\n]+)\);/i;
        code.split('\n').forEach(line => {
            /** @type {?} */
            const res = parser.exec(line.trim());
            if (!res)
                return;
            /** @type {?} */
            const fn = this._lodop[res[1]];
            if (fn) {
                /** @type {?} */
                let arr;
                try {
                    /** @type {?} */
                    const fakeFn = new Function(`return [${res[2]}]`);
                    arr = /** @type {?} */ (fakeFn());
                }
                catch (_a) { }
                if (Array.isArray(arr) && contextObj) {
                    for (let i = 0; i < arr.length; i++) {
                        if (typeof arr[i] === 'string') {
                            arr[i] = arr[i].replace(/{{(.*?)}}/g, (match, key) => contextObj[key.trim()] || '');
                        }
                    }
                }
                fn.apply(this._lodop, arr);
            }
        });
    }
    /**
     * 打开打印设计关闭后自动返回代码
     *
     * **注：** 自动监听 `On_Return` 事件，运行后会移除
     * @return {?}
     */
    design() {
        this.check();
        /** @type {?} */
        const tid = this._lodop.PRINT_DESIGN();
        return new Promise(resolve => {
            this._lodop.On_Return = (taskID, value) => {
                if (tid !== taskID)
                    return;
                this._lodop.On_Return = null;
                resolve('' + value);
            };
        });
    }
    /**
     * @return {?}
     */
    printDo() {
        /** @type {?} */
        const data = this.printBuffer.shift();
        if (!data)
            return;
        this.attachCode(data.code, data.item, data.parser);
        /** @type {?} */
        const tid = this._lodop.PRINT();
        this._lodop.On_Return = (taskID, value) => {
            if (tid !== taskID)
                return;
            this._lodop.On_Return = null;
            this._events.next(Object.assign(/** @type {?} */ ({
                ok: value === true,
                error: value === true ? null : value,
            }), data));
            this.printDo();
        };
    }
    /**
     * 立即打印，一般用于批量套打
     *
     * @param {?} code 代码
     * @param {?} contextObj 动态参数上下文对象
     * @param {?=} parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)\);/i`
     * @return {?}
     */
    print(code, contextObj, parser) {
        this.check();
        if (contextObj) {
            this.printBuffer.push(...(Array.isArray(contextObj) ? contextObj : [contextObj]).map(item => {
                return { code, parser, item };
            }));
        }
        this.printDo();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._init.unsubscribe();
        this._events.unsubscribe();
    }
}
LodopService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LodopService.ctorParameters = () => [
    { type: LodopConfig },
    { type: LazyService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LodopModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: LodopModule,
            providers: [LodopService, LodopConfig],
        };
    }
}
LodopModule.decorators = [
    { type: NgModule, args: [{
                imports: [DelonUtilModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { LodopService, LodopConfig, LodopModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3AuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvbG9kb3AvbG9kb3AuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWJjL2xvZG9wL2xvZG9wLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hYmMvbG9kb3AvbG9kb3AubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMb2RvcENvbmZpZyB7XHJcbiAgLyoqXHJcbiAgICogw6bCs8Kow6XChsKMw6TCv8Khw6bCgcKvw6/CvMKaw6TCuMK7w6bCs8Kow6XChsKMw6XCj8K3XHJcbiAgICovXHJcbiAgbGljZW5zZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIMOmwrPCqMOlwobCjMOkwr/CocOmwoHCr8OvwrzCmsOpwpnChMOlworCoMOmwrPCqMOlwobCjMOlwo/Ct0FcclxuICAgKi9cclxuICBsaWNlbnNlQTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIMOmwrPCqMOlwobCjMOkwr/CocOmwoHCr8OvwrzCmsOpwpnChMOlworCoMOmwrPCqMOlwobCjMOlwo/Ct0JcclxuICAgKi9cclxuICBsaWNlbnNlQj86IHN0cmluZztcclxuICAvKipcclxuICAgKiDDpsKzwqjDpcKGwozDpMK/wqHDpsKBwq/Dr8K8wprDpsKzwqjDpcKGwozDpcKNwpXDpMK9wo3DpcKQwo3Dp8KnwrBcclxuICAgKi9cclxuICBjb21wYW55TmFtZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBMb2RvcCDDqMK/wpzDp8KowovDqMKEwprDpsKcwqxVUkzDpcKcwrDDpcKdwoDDr8K8wowqKsOmwrPCqMOmwoTCjyoqw6XCisKhw6XCv8KFw6TCvcK/w6fClMKoIGBuYW1lYCDDpcKxwp7DpsKAwqfDpsKMwofDpcKuwprDpcKPwpjDqcKHwo/DpcKAwrxcclxuICAgKlxyXG4gICAqIC0gaHR0cDovL2xvY2FsaG9zdDoxODAwMC9DTG9kb3BmdW5jcy5qc1xyXG4gICAqIC0gaHR0cHM6Ly9sb2NhbGhvc3Q6ODQ0My9DTG9kb3BmdW5jcy5qcyBbw6nCu8KYw6jCrsKkXVxyXG4gICAqL1xyXG4gIHVybD86IHN0cmluZztcclxuICAvKipcclxuICAgKiBMb2RvcCDDpcKPwpjDqcKHwo/DpcKQwo3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgQ0xPRE9QYFxyXG4gICAqL1xyXG4gIG5hbWU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogw6bCo8KAw6bCn8Klw6bCrMKhw6bClcKww6/CvMKMw6nCu8KYw6jCrsKkIGAxMDBgw6/CvMKMw6XCvcKTw6bCo8KAw6bCn8Klw6jCtsKFw6jCv8KHw6bCl8K2w6jCp8KGw6TCuMK6w6XCvMKCw6XCuMK4w6/CvMKMw6jCv8KZw6bCmMKvw6XCm8Kgw6TCuMK6IExvZG9wIMOpwpzCgMOowqbCgcOowr/CnsOmwo7CpSBXZWJTb2NrZXRcclxuICAgKi9cclxuICBjaGVja01heENvdW50PzogbnVtYmVyO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBMb2RvcCwgTG9kb3BSZXN1bHQsIExvZG9wUHJpbnRSZXN1bHQgfSBmcm9tICcuL2xvZG9wLnR5cGVzJztcclxuaW1wb3J0IHsgTG9kb3BDb25maWcgfSBmcm9tICcuL2xvZG9wLmNvbmZpZyc7XHJcblxyXG4vLyBUT0RPOiB6b25lXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvZG9wU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfY29nOiBMb2RvcENvbmZpZztcclxuICBwcml2YXRlIHBlbmRpbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIF9sb2RvcDogTG9kb3AgPSBudWxsO1xyXG4gIHByaXZhdGUgX2luaXQ6IFN1YmplY3Q8TG9kb3BSZXN1bHQ+ID0gbmV3IFN1YmplY3Q8TG9kb3BSZXN1bHQ+KCk7XHJcbiAgcHJpdmF0ZSBfZXZlbnRzOiBTdWJqZWN0PExvZG9wUHJpbnRSZXN1bHQ+ID0gbmV3IFN1YmplY3Q8TG9kb3BQcmludFJlc3VsdD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWZDb2c6IExvZG9wQ29uZmlnLCBwcml2YXRlIHNjcmlwdFNydjogTGF6eVNlcnZpY2UpIHtcclxuICAgIHRoaXMuY29nID0gZGVmQ29nO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6jCjsK3w6XCj8KWw6bCiMKWw6nCh8KNw6bClsKww6jCrsK+w6fCvcKuw6nChcKNw6fCvcKuXHJcbiAgICpcclxuICAgKiAqKsOmwrPCqMOvwrzCmioqw6nCh8KNw6bClsKww6jCrsK+w6fCvcKuw6TCvMKaw6XCgMKSw6fCvcKuw6nCh8KNw6bClsKww6XCisKgw6jCvcK9w6jChMKaw6bCnMKsw6jCtcKEw6bCusKQXHJcbiAgICovXHJcbiAgZ2V0IGNvZygpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb2c7XHJcbiAgfVxyXG4gIHNldCBjb2codmFsdWU6IExvZG9wQ29uZmlnKSB7XHJcbiAgICB0aGlzLl9jb2cgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7XHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9sb2NhbGhvc3Q6ODQ0My9DTG9kb3BmdW5jcy5qcycsXHJcbiAgICAgICAgbmFtZTogJ0NMT0RPUCcsXHJcbiAgICAgICAgY29tcGFueU5hbWU6ICcnLFxyXG4gICAgICAgIGNoZWNrTWF4Q291bnQ6IDEwMCxcclxuICAgICAgfSxcclxuICAgICAgdGhpcy5kZWZDb2csXHJcbiAgICAgIHZhbHVlLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKiDDpMK6wovDpMK7wrbDpcKPwpjDpsKbwrTDqcKAwprDp8KfwqUgKi9cclxuICBnZXQgZXZlbnRzKCk6IE9ic2VydmFibGU8TG9kb3BQcmludFJlc3VsdD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50cy5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2soKSB7XHJcbiAgICBpZiAoIXRoaXMuX2xvZG9wKSB0aHJvdyBuZXcgRXJyb3IoYMOowq/Ct8OlworCocOlwr/ChcOlwoXCiMOowrDCg8OnwpTCqCBsb2RvcCDDqMKOwrfDpcKPwpbDpcKvwrnDqMKxwqFgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVxdWVzdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucGVuZGluZyA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb2cudXJsfT9uYW1lPSR7dGhpcy5jb2cubmFtZX1gO1xyXG4gICAgbGV0IGNoZWNrTWF4Q291bnQgPSB0aGlzLmNvZy5jaGVja01heENvdW50O1xyXG4gICAgY29uc3Qgb25SZXNvbHZlID0gKHN0YXR1cywgZXJyb3I/OiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5faW5pdC5uZXh0KHtcclxuICAgICAgICBvazogc3RhdHVzID09PSAnb2snLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBlcnJvcixcclxuICAgICAgICBsb2RvcDogdGhpcy5fbG9kb3AsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAtLWNoZWNrTWF4Q291bnQ7XHJcbiAgICAgIGlmICh0aGlzLl9sb2RvcC53ZWJza3QgJiYgdGhpcy5fbG9kb3Aud2Vic2t0LnJlYWR5U3RhdGUgPT09IDEpIHtcclxuICAgICAgICBvblJlc29sdmUoJ29rJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNoZWNrTWF4Q291bnQgPCAwKSB7XHJcbiAgICAgICAgICBvblJlc29sdmUoJ2NoZWNrLWxpbWl0Jyk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2hlY2tTdGF0dXMoKSwgMTAwKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNjcmlwdFNydi5sb2FkU2NyaXB0KHVybCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAnb2snKSB7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgb25SZXNvbHZlKCdzY3JpcHQtbG9hZC1lcnJvcicsIHJlc1swXSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2xvZG9wID1cclxuICAgICAgICB3aW5kb3cuaGFzT3duUHJvcGVydHkodGhpcy5jb2cubmFtZSkgJiZcclxuICAgICAgICAod2luZG93W3RoaXMuY29nLm5hbWVdIGFzIExvZG9wKTtcclxuICAgICAgaWYgKHRoaXMuX2xvZG9wID09PSBudWxsKSB7XHJcbiAgICAgICAgb25SZXNvbHZlKCdsb2FkLXZhcmlhYmxlLW5hbWUtZXJyb3InLCB7IG5hbWU6IHRoaXMuY29nLm5hbWUgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2xvZG9wLlNFVF9MSUNFTlNFUyhcclxuICAgICAgICB0aGlzLmNvZy5jb21wYW55TmFtZSxcclxuICAgICAgICB0aGlzLmNvZy5saWNlbnNlLFxyXG4gICAgICAgIHRoaXMuY29nLmxpY2Vuc2VBLFxyXG4gICAgICAgIHRoaXMuY29nLmxpY2Vuc2VCLFxyXG4gICAgICApO1xyXG4gICAgICBjaGVja1N0YXR1cygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogw6nCh8KNw6fCvcKuIGxvZG9wIMOlwq/CucOowrHCoSAqL1xyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5fbG9kb3AgPSBudWxsO1xyXG4gICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLnJlcXVlc3QoKTtcclxuICB9XHJcblxyXG4gIC8qKiDDqMKOwrfDpcKPwpYgbG9kb3Agw6XCr8K5w6jCscKhICovXHJcbiAgZ2V0IGxvZG9wKCk6IE9ic2VydmFibGU8TG9kb3BSZXN1bHQ+IHtcclxuICAgIGlmICh0aGlzLl9sb2RvcCkgcmV0dXJuIG9mKDxMb2RvcFJlc3VsdD57IG9rOiB0cnVlLCBsb2RvcDogdGhpcy5fbG9kb3AgfSk7XHJcbiAgICBpZiAodGhpcy5wZW5kaW5nKSByZXR1cm4gdGhpcy5faW5pdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgICB0aGlzLnJlcXVlc3QoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5faW5pdC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIC8qKiDDqMKOwrfDpcKPwpbDpsKJwpPDpcKNwrDDpsKcwrrDpcKIwpfDqMKhwqggKi9cclxuICBnZXQgcHJpbnRlcigpOiBzdHJpbmdbXSB7XHJcbiAgICB0aGlzLmNoZWNrKCk7XHJcbiAgICBjb25zdCByZXQ6IHN0cmluZ1tdID0gW107XHJcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuX2xvZG9wLkdFVF9QUklOVEVSX0NPVU5UKCk7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcclxuICAgICAgcmV0LnB1c2godGhpcy5fbG9kb3AuR0VUX1BSSU5URVJfTkFNRShpbmRleCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOpwpnChMOlworCoMOkwrvCo8OnwqDCgcOowofCsyBgbG9kb3BgIMOlwq/CucOowrHCocOkwrjCisOvwrzCjMOlwq3Cl8OnwqzCpsOkwrjCssOnwrHCu8OmwpTCr8OmwozCgSBge3trZXl9fWAgw6fCmsKEw6XCisKow6bCgMKBw6XCj8KCw6bClcKwXHJcbiAgICpcclxuICAgKiAqKsOmwrPCqMOvwrzCmioqIMOkwrvCo8OnwqDCgcOmwpjCr8OmwozCh8OmwonCk8Olwo3CsMOowq7CvsOowq7CocOmwonCgMOkwrrCp8OnwpTCn8Olwq3Cl8OnwqzCpsOkwrjCssOmwpXCsMOmwo3CrlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvZGUgw6TCu8Kjw6fCoMKBXHJcbiAgICogQHBhcmFtIGNvbnRleHRPYmogw6XCisKow6bCgMKBw6XCj8KCw6bClcKww6TCuMKKw6TCuMKLw6bClsKHw6XCr8K5w6jCscKhXHJcbiAgICogQHBhcmFtIHBhcnNlciDDqMKHwqrDpcKuwprDpMK5wonDqMKnwqPDpsKewpDDqMKhwqjDqMK+wr7DpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgL0xPRE9QXFwuKFteKF0rKVxcKChbXlxcbl0rKVxcKTsvaWBcclxuICAgKi9cclxuICBhdHRhY2hDb2RlKGNvZGU6IHN0cmluZywgY29udGV4dE9iaj86IE9iamVjdCwgcGFyc2VyPzogUmVnRXhwKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrKCk7XHJcbiAgICBpZiAoIXBhcnNlcikgcGFyc2VyID0gL0xPRE9QXFwuKFteKF0rKVxcKChbXlxcbl0rKVxcKTsvaTtcclxuICAgIGNvZGUuc3BsaXQoJ1xcbicpLmZvckVhY2gobGluZSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IHBhcnNlci5leGVjKGxpbmUudHJpbSgpKTtcclxuICAgICAgaWYgKCFyZXMpIHJldHVybjtcclxuICAgICAgY29uc3QgZm4gPSB0aGlzLl9sb2RvcFtyZXNbMV1dO1xyXG4gICAgICBpZiAoZm4pIHtcclxuICAgICAgICBsZXQgYXJyOiBBcnJheTxhbnk+O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBmYWtlRm4gPSBuZXcgRnVuY3Rpb24oYHJldHVybiBbJHtyZXNbMl19XWApO1xyXG4gICAgICAgICAgYXJyID0gZmFrZUZuKCkgYXMgYW55W107XHJcbiAgICAgICAgfSBjYXRjaCB7fVxyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpICYmIGNvbnRleHRPYmopIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJyW2ldID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgIGFycltpXSA9IGFycltpXS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgL3t7KC4qPyl9fS9nLFxyXG4gICAgICAgICAgICAgICAgKG1hdGNoLCBrZXkpID0+IGNvbnRleHRPYmpba2V5LnRyaW0oKV0gfHwgJycsXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmbi5hcHBseSh0aGlzLl9sb2RvcCwgYXJyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpsKJwpPDpcK8woDDpsKJwpPDpcKNwrDDqMKuwr7DqMKuwqHDpcKFwrPDqcKXwq3DpcKQwo7DqMKHwqrDpcKKwqjDqMK/wpTDpcKbwp7DpMK7wqPDp8KgwoFcclxuICAgKlxyXG4gICAqICoqw6bCs8Kow6/CvMKaKiogw6jCh8Kqw6XCisKow6fCm8KRw6XCkMKsIGBPbl9SZXR1cm5gIMOkwrrCi8OkwrvCtsOvwrzCjMOowr/CkMOowqHCjMOlwpDCjsOkwrzCmsOnwqfCu8OpwpnCpFxyXG4gICAqL1xyXG4gIGRlc2lnbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgdGhpcy5jaGVjaygpO1xyXG4gICAgY29uc3QgdGlkID0gdGhpcy5fbG9kb3AuUFJJTlRfREVTSUdOKCk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHRoaXMuX2xvZG9wLk9uX1JldHVybiA9ICh0YXNrSUQ6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpID0+IHtcclxuICAgICAgICBpZiAodGlkICE9PSB0YXNrSUQpIHJldHVybjtcclxuICAgICAgICB0aGlzLl9sb2RvcC5Pbl9SZXR1cm4gPSBudWxsO1xyXG4gICAgICAgIHJlc29sdmUoJycgKyB2YWx1ZSk7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJpbnRCdWZmZXI6IGFueVtdID0gW107XHJcbiAgcHJpdmF0ZSBwcmludERvKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMucHJpbnRCdWZmZXIuc2hpZnQoKTtcclxuICAgIGlmICghZGF0YSkgcmV0dXJuO1xyXG4gICAgdGhpcy5hdHRhY2hDb2RlKGRhdGEuY29kZSwgZGF0YS5pdGVtLCBkYXRhLnBhcnNlcik7XHJcbiAgICBjb25zdCB0aWQgPSB0aGlzLl9sb2RvcC5QUklOVCgpO1xyXG4gICAgdGhpcy5fbG9kb3AuT25fUmV0dXJuID0gKHRhc2tJRDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykgPT4ge1xyXG4gICAgICBpZiAodGlkICE9PSB0YXNrSUQpIHJldHVybjtcclxuICAgICAgdGhpcy5fbG9kb3AuT25fUmV0dXJuID0gbnVsbDtcclxuICAgICAgdGhpcy5fZXZlbnRzLm5leHQoXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcclxuICAgICAgICAgIDxMb2RvcFByaW50UmVzdWx0PntcclxuICAgICAgICAgICAgb2s6IHZhbHVlID09PSB0cnVlLFxyXG4gICAgICAgICAgICBlcnJvcjogdmFsdWUgPT09IHRydWUgPyBudWxsIDogdmFsdWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGF0YSxcclxuICAgICAgICApLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnByaW50RG8oKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDp8KrwovDpcKNwrPDpsKJwpPDpcKNwrDDr8K8wozDpMK4woDDqMKIwqzDp8KUwqjDpMK6wo7DpsKJwrnDqcKHwo/DpcKlwpfDpsKJwpNcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb2RlIMOkwrvCo8OnwqDCgVxyXG4gICAqIEBwYXJhbSBjb250ZXh0T2JqIMOlworCqMOmwoDCgcOlwo/CgsOmwpXCsMOkwrjCisOkwrjCi8OmwpbCh8Olwq/CucOowrHCoVxyXG4gICAqIEBwYXJhbSBwYXJzZXIgw6jCh8Kqw6XCrsKaw6TCucKJw6jCp8Kjw6bCnsKQw6jCocKow6jCvsK+w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYC9MT0RPUFxcLihbXihdKylcXCgoW15cXG5dKylcXCk7L2lgXHJcbiAgICovXHJcbiAgcHJpbnQoY29kZTogc3RyaW5nLCBjb250ZXh0T2JqOiBPYmplY3QgfCBPYmplY3RbXSwgcGFyc2VyPzogUmVnRXhwKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrKCk7XHJcbiAgICBpZiAoY29udGV4dE9iaikge1xyXG4gICAgICB0aGlzLnByaW50QnVmZmVyLnB1c2goXHJcbiAgICAgICAgLi4uKEFycmF5LmlzQXJyYXkoY29udGV4dE9iaikgPyBjb250ZXh0T2JqIDogW2NvbnRleHRPYmpdKS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4geyBjb2RlLCBwYXJzZXIsIGl0ZW0gfTtcclxuICAgICAgICB9KSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMucHJpbnREbygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9pbml0LnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl9ldmVudHMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgTG9kb3BDb25maWcgfSBmcm9tICcuL2xvZG9wLmNvbmZpZyc7XHJcbmltcG9ydCB7IExvZG9wU2VydmljZSB9IGZyb20gJy4vbG9kb3Auc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtEZWxvblV0aWxNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9kb3BNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IExvZG9wTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtMb2RvcFNlcnZpY2UsIExvZG9wQ29uZmlnXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0NBZ0NDOzs7Ozs7QUNoQ0Q7Ozs7O0lBaUJFLFlBQW9CLE1BQW1CLEVBQVUsU0FBc0I7UUFBbkQsV0FBTSxHQUFOLE1BQU0sQ0FBYTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWE7dUJBTHJELEtBQUs7c0JBQ0MsSUFBSTtxQkFDVSxJQUFJLE9BQU8sRUFBZTt1QkFDbkIsSUFBSSxPQUFPLEVBQW9COzJCQXdLL0MsRUFBRTtRQXJLN0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7S0FDbkI7Ozs7Ozs7SUFPRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDbEI7Ozs7O0lBQ0QsSUFBSSxHQUFHLENBQUMsS0FBa0I7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUN2QjtZQUNFLEdBQUcsRUFBRSx1Q0FBdUM7WUFDNUMsSUFBSSxFQUFFLFFBQVE7WUFDZCxXQUFXLEVBQUUsRUFBRTtZQUNmLGFBQWEsRUFBRSxHQUFHO1NBQ25CLEVBQ0QsSUFBSSxDQUFDLE1BQU0sRUFDWCxLQUFLLENBQ04sQ0FBQztLQUNIOzs7OztJQUdELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNwQzs7OztJQUVPLEtBQUs7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Ozs7O0lB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