import { Injectable, NgModule } from '@angular/core';
import { of, Subject } from 'rxjs';
import { LazyService, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class LodopConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
// TODO: zone
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
                    ((/** @type {?} */ (window[this.cog.name])));
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
            return of((/** @type {?} */ ({ ok: true, lodop: this._lodop })));
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
                    arr = (/** @type {?} */ (fakeFn()));
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
            this._events.next(Object.assign((/** @type {?} */ ({
                ok: value === true,
                error: value === true ? null : value,
            })), data));
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { LodopService, LodopConfig, LodopModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3AuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvbG9kb3AvbG9kb3AuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWJjL2xvZG9wL2xvZG9wLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hYmMvbG9kb3AvbG9kb3AubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMb2RvcENvbmZpZyB7XG4gIC8qKlxuICAgKiDDpsKzwqjDpcKGwozDpMK/wqHDpsKBwq/Dr8K8wprDpMK4wrvDpsKzwqjDpcKGwozDpcKPwrdcbiAgICovXG4gIGxpY2Vuc2U6IHN0cmluZztcbiAgLyoqXG4gICAqIMOmwrPCqMOlwobCjMOkwr/CocOmwoHCr8OvwrzCmsOpwpnChMOlworCoMOmwrPCqMOlwobCjMOlwo/Ct0FcbiAgICovXG4gIGxpY2Vuc2VBOiBzdHJpbmc7XG4gIC8qKlxuICAgKiDDpsKzwqjDpcKGwozDpMK/wqHDpsKBwq/Dr8K8wprDqcKZwoTDpcKKwqDDpsKzwqjDpcKGwozDpcKPwrdCXG4gICAqL1xuICBsaWNlbnNlQj86IHN0cmluZztcbiAgLyoqXG4gICAqIMOmwrPCqMOlwobCjMOkwr/CocOmwoHCr8OvwrzCmsOmwrPCqMOlwobCjMOlwo3ClcOkwr3CjcOlwpDCjcOnwqfCsFxuICAgKi9cbiAgY29tcGFueU5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBMb2RvcCDDqMK/wpzDp8KowovDqMKEwprDpsKcwqxVUkzDpcKcwrDDpcKdwoDDr8K8wowqKsOmwrPCqMOmwoTCjyoqw6XCisKhw6XCv8KFw6TCvcK/w6fClMKoIGBuYW1lYCDDpcKxwp7DpsKAwqfDpsKMwofDpcKuwprDpcKPwpjDqcKHwo/DpcKAwrxcbiAgICpcbiAgICogLSBodHRwOi8vbG9jYWxob3N0OjE4MDAwL0NMb2RvcGZ1bmNzLmpzXG4gICAqIC0gaHR0cHM6Ly9sb2NhbGhvc3Q6ODQ0My9DTG9kb3BmdW5jcy5qcyBbw6nCu8KYw6jCrsKkXVxuICAgKi9cbiAgdXJsPzogc3RyaW5nO1xuICAvKipcbiAgICogTG9kb3Agw6XCj8KYw6nCh8KPw6XCkMKNw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYENMT0RPUGBcbiAgICovXG4gIG5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDDpsKjwoDDpsKfwqXDpsKswqHDpsKVwrDDr8K8wozDqcK7wpjDqMKuwqQgYDEwMGDDr8K8wozDpcK9wpPDpsKjwoDDpsKfwqXDqMK2woXDqMK/wofDpsKXwrbDqMKnwobDpMK4wrrDpcK8woLDpcK4wrjDr8K8wozDqMK/wpnDpsKYwq/DpcKbwqDDpMK4wrogTG9kb3Agw6nCnMKAw6jCpsKBw6jCv8Kew6bCjsKlIFdlYlNvY2tldFxuICAgKi9cbiAgY2hlY2tNYXhDb3VudD86IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IExvZG9wLCBMb2RvcFJlc3VsdCwgTG9kb3BQcmludFJlc3VsdCB9IGZyb20gJy4vbG9kb3AudHlwZXMnO1xuaW1wb3J0IHsgTG9kb3BDb25maWcgfSBmcm9tICcuL2xvZG9wLmNvbmZpZyc7XG5cbi8vIFRPRE86IHpvbmVcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2RvcFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9jb2c6IExvZG9wQ29uZmlnO1xuICBwcml2YXRlIHBlbmRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbG9kb3A6IExvZG9wID0gbnVsbDtcbiAgcHJpdmF0ZSBfaW5pdDogU3ViamVjdDxMb2RvcFJlc3VsdD4gPSBuZXcgU3ViamVjdDxMb2RvcFJlc3VsdD4oKTtcbiAgcHJpdmF0ZSBfZXZlbnRzOiBTdWJqZWN0PExvZG9wUHJpbnRSZXN1bHQ+ID0gbmV3IFN1YmplY3Q8TG9kb3BQcmludFJlc3VsdD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlZkNvZzogTG9kb3BDb25maWcsIHByaXZhdGUgc2NyaXB0U3J2OiBMYXp5U2VydmljZSkge1xuICAgIHRoaXMuY29nID0gZGVmQ29nO1xuICB9XG5cbiAgLyoqXG4gICAqIMOowo7Ct8Olwo/ClsOmwojClsOpwofCjcOmwpbCsMOowq7CvsOnwr3CrsOpwoXCjcOnwr3CrlxuICAgKlxuICAgKiAqKsOmwrPCqMOvwrzCmioqw6nCh8KNw6bClsKww6jCrsK+w6fCvcKuw6TCvMKaw6XCgMKSw6fCvcKuw6nCh8KNw6bClsKww6XCisKgw6jCvcK9w6jChMKaw6bCnMKsw6jCtcKEw6bCusKQXG4gICAqL1xuICBnZXQgY29nKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2c7XG4gIH1cbiAgc2V0IGNvZyh2YWx1ZTogTG9kb3BDb25maWcpIHtcbiAgICB0aGlzLl9jb2cgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICB1cmw6ICdodHRwczovL2xvY2FsaG9zdDo4NDQzL0NMb2RvcGZ1bmNzLmpzJyxcbiAgICAgICAgbmFtZTogJ0NMT0RPUCcsXG4gICAgICAgIGNvbXBhbnlOYW1lOiAnJyxcbiAgICAgICAgY2hlY2tNYXhDb3VudDogMTAwLFxuICAgICAgfSxcbiAgICAgIHRoaXMuZGVmQ29nLFxuICAgICAgdmFsdWUsXG4gICAgKTtcbiAgfVxuXG4gIC8qKiDDpMK6wovDpMK7wrbDpcKPwpjDpsKbwrTDqcKAwprDp8KfwqUgKi9cbiAgZ2V0IGV2ZW50cygpOiBPYnNlcnZhYmxlPExvZG9wUHJpbnRSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnRzLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVjaygpIHtcbiAgICBpZiAoIXRoaXMuX2xvZG9wKSB0aHJvdyBuZXcgRXJyb3IoYMOowq/Ct8OlworCocOlwr/ChcOlwoXCiMOowrDCg8OnwpTCqCBsb2RvcCDDqMKOwrfDpcKPwpbDpcKvwrnDqMKxwqFgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVxdWVzdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xuXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb2cudXJsfT9uYW1lPSR7dGhpcy5jb2cubmFtZX1gO1xuICAgIGxldCBjaGVja01heENvdW50ID0gdGhpcy5jb2cuY2hlY2tNYXhDb3VudDtcbiAgICBjb25zdCBvblJlc29sdmUgPSAoc3RhdHVzLCBlcnJvcj86IGFueSkgPT4ge1xuICAgICAgdGhpcy5faW5pdC5uZXh0KHtcbiAgICAgICAgb2s6IHN0YXR1cyA9PT0gJ29rJyxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBlcnJvcixcbiAgICAgICAgbG9kb3A6IHRoaXMuX2xvZG9wLFxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcbiAgICAgIC0tY2hlY2tNYXhDb3VudDtcbiAgICAgIGlmICh0aGlzLl9sb2RvcC53ZWJza3QgJiYgdGhpcy5fbG9kb3Aud2Vic2t0LnJlYWR5U3RhdGUgPT09IDEpIHtcbiAgICAgICAgb25SZXNvbHZlKCdvaycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoZWNrTWF4Q291bnQgPCAwKSB7XG4gICAgICAgICAgb25SZXNvbHZlKCdjaGVjay1saW1pdCcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNoZWNrU3RhdHVzKCksIDEwMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuc2NyaXB0U3J2LmxvYWRTY3JpcHQodXJsKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAnb2snKSB7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICBvblJlc29sdmUoJ3NjcmlwdC1sb2FkLWVycm9yJywgcmVzWzBdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fbG9kb3AgPVxuICAgICAgICB3aW5kb3cuaGFzT3duUHJvcGVydHkodGhpcy5jb2cubmFtZSkgJiZcbiAgICAgICAgKHdpbmRvd1t0aGlzLmNvZy5uYW1lXSBhcyBMb2RvcCk7XG4gICAgICBpZiAodGhpcy5fbG9kb3AgPT09IG51bGwpIHtcbiAgICAgICAgb25SZXNvbHZlKCdsb2FkLXZhcmlhYmxlLW5hbWUtZXJyb3InLCB7IG5hbWU6IHRoaXMuY29nLm5hbWUgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xvZG9wLlNFVF9MSUNFTlNFUyhcbiAgICAgICAgdGhpcy5jb2cuY29tcGFueU5hbWUsXG4gICAgICAgIHRoaXMuY29nLmxpY2Vuc2UsXG4gICAgICAgIHRoaXMuY29nLmxpY2Vuc2VBLFxuICAgICAgICB0aGlzLmNvZy5saWNlbnNlQixcbiAgICAgICk7XG4gICAgICBjaGVja1N0YXR1cygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIMOpwofCjcOnwr3CriBsb2RvcCDDpcKvwrnDqMKxwqEgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fbG9kb3AgPSBudWxsO1xuICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgIHRoaXMucmVxdWVzdCgpO1xuICB9XG5cbiAgLyoqIMOowo7Ct8Olwo/CliBsb2RvcCDDpcKvwrnDqMKxwqEgKi9cbiAgZ2V0IGxvZG9wKCk6IE9ic2VydmFibGU8TG9kb3BSZXN1bHQ+IHtcbiAgICBpZiAodGhpcy5fbG9kb3ApIHJldHVybiBvZig8TG9kb3BSZXN1bHQ+eyBvazogdHJ1ZSwgbG9kb3A6IHRoaXMuX2xvZG9wIH0pO1xuICAgIGlmICh0aGlzLnBlbmRpbmcpIHJldHVybiB0aGlzLl9pbml0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgdGhpcy5yZXF1ZXN0KCk7XG5cbiAgICByZXR1cm4gdGhpcy5faW5pdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKiDDqMKOwrfDpcKPwpbDpsKJwpPDpcKNwrDDpsKcwrrDpcKIwpfDqMKhwqggKi9cbiAgZ2V0IHByaW50ZXIoKTogc3RyaW5nW10ge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgICBjb25zdCByZXQ6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgY291bnQgPSB0aGlzLl9sb2RvcC5HRVRfUFJJTlRFUl9DT1VOVCgpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgcmV0LnB1c2godGhpcy5fbG9kb3AuR0VUX1BSSU5URVJfTkFNRShpbmRleCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIMOpwpnChMOlworCoMOkwrvCo8OnwqDCgcOowofCsyBgbG9kb3BgIMOlwq/CucOowrHCocOkwrjCisOvwrzCjMOlwq3Cl8OnwqzCpsOkwrjCssOnwrHCu8OmwpTCr8OmwozCgSBge3trZXl9fWAgw6fCmsKEw6XCisKow6bCgMKBw6XCj8KCw6bClcKwXG4gICAqXG4gICAqICoqw6bCs8Kow6/CvMKaKiogw6TCu8Kjw6fCoMKBw6bCmMKvw6bCjMKHw6bCicKTw6XCjcKww6jCrsK+w6jCrsKhw6bCicKAw6TCusKnw6fClMKfw6XCrcKXw6fCrMKmw6TCuMKyw6bClcKww6bCjcKuXG4gICAqXG4gICAqIEBwYXJhbSBjb2RlIMOkwrvCo8OnwqDCgVxuICAgKiBAcGFyYW0gY29udGV4dE9iaiDDpcKKwqjDpsKAwoHDpcKPwoLDpsKVwrDDpMK4worDpMK4wovDpsKWwofDpcKvwrnDqMKxwqFcbiAgICogQHBhcmFtIHBhcnNlciDDqMKHwqrDpcKuwprDpMK5wonDqMKnwqPDpsKewpDDqMKhwqjDqMK+wr7DpcK8wo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgL0xPRE9QXFwuKFteKF0rKVxcKChbXlxcbl0rKVxcKTsvaWBcbiAgICovXG4gIGF0dGFjaENvZGUoY29kZTogc3RyaW5nLCBjb250ZXh0T2JqPzogT2JqZWN0LCBwYXJzZXI/OiBSZWdFeHApOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgaWYgKCFwYXJzZXIpIHBhcnNlciA9IC9MT0RPUFxcLihbXihdKylcXCgoW15cXG5dKylcXCk7L2k7XG4gICAgY29kZS5zcGxpdCgnXFxuJykuZm9yRWFjaChsaW5lID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhcnNlci5leGVjKGxpbmUudHJpbSgpKTtcbiAgICAgIGlmICghcmVzKSByZXR1cm47XG4gICAgICBjb25zdCBmbiA9IHRoaXMuX2xvZG9wW3Jlc1sxXV07XG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgbGV0IGFycjogQXJyYXk8YW55PjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBmYWtlRm4gPSBuZXcgRnVuY3Rpb24oYHJldHVybiBbJHtyZXNbMl19XWApO1xuICAgICAgICAgIGFyciA9IGZha2VGbigpIGFzIGFueVtdO1xuICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSAmJiBjb250ZXh0T2JqKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJyW2ldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBhcnJbaV0gPSBhcnJbaV0ucmVwbGFjZShcbiAgICAgICAgICAgICAgICAve3soLio/KX19L2csXG4gICAgICAgICAgICAgICAgKG1hdGNoLCBrZXkpID0+IGNvbnRleHRPYmpba2V5LnRyaW0oKV0gfHwgJycsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZuLmFwcGx5KHRoaXMuX2xvZG9wLCBhcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwonCk8OlwrzCgMOmwonCk8Olwo3CsMOowq7CvsOowq7CocOlwoXCs8OpwpfCrcOlwpDCjsOowofCqsOlworCqMOowr/ClMOlwpvCnsOkwrvCo8OnwqDCgVxuICAgKlxuICAgKiAqKsOmwrPCqMOvwrzCmioqIMOowofCqsOlworCqMOnwpvCkcOlwpDCrCBgT25fUmV0dXJuYCDDpMK6wovDpMK7wrbDr8K8wozDqMK/wpDDqMKhwozDpcKQwo7DpMK8wprDp8KnwrvDqcKZwqRcbiAgICovXG4gIGRlc2lnbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgICBjb25zdCB0aWQgPSB0aGlzLl9sb2RvcC5QUklOVF9ERVNJR04oKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLl9sb2RvcC5Pbl9SZXR1cm4gPSAodGFza0lEOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICh0aWQgIT09IHRhc2tJRCkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9sb2RvcC5Pbl9SZXR1cm4gPSBudWxsO1xuICAgICAgICByZXNvbHZlKCcnICsgdmFsdWUpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcHJpbnRCdWZmZXI6IGFueVtdID0gW107XG4gIHByaXZhdGUgcHJpbnREbygpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcmludEJ1ZmZlci5zaGlmdCgpO1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuICAgIHRoaXMuYXR0YWNoQ29kZShkYXRhLmNvZGUsIGRhdGEuaXRlbSwgZGF0YS5wYXJzZXIpO1xuICAgIGNvbnN0IHRpZCA9IHRoaXMuX2xvZG9wLlBSSU5UKCk7XG4gICAgdGhpcy5fbG9kb3AuT25fUmV0dXJuID0gKHRhc2tJRDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHRpZCAhPT0gdGFza0lEKSByZXR1cm47XG4gICAgICB0aGlzLl9sb2RvcC5Pbl9SZXR1cm4gPSBudWxsO1xuICAgICAgdGhpcy5fZXZlbnRzLm5leHQoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgPExvZG9wUHJpbnRSZXN1bHQ+e1xuICAgICAgICAgICAgb2s6IHZhbHVlID09PSB0cnVlLFxuICAgICAgICAgICAgZXJyb3I6IHZhbHVlID09PSB0cnVlID8gbnVsbCA6IHZhbHVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgKSxcbiAgICAgICk7XG4gICAgICB0aGlzLnByaW50RG8oKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIMOnwqvCi8Olwo3Cs8OmwonCk8Olwo3CsMOvwrzCjMOkwrjCgMOowojCrMOnwpTCqMOkwrrCjsOmwonCucOpwofCj8OlwqXCl8OmwonCk1xuICAgKlxuICAgKiBAcGFyYW0gY29kZSDDpMK7wqPDp8KgwoFcbiAgICogQHBhcmFtIGNvbnRleHRPYmogw6XCisKow6bCgMKBw6XCj8KCw6bClcKww6TCuMKKw6TCuMKLw6bClsKHw6XCr8K5w6jCscKhXG4gICAqIEBwYXJhbSBwYXJzZXIgw6jCh8Kqw6XCrsKaw6TCucKJw6jCp8Kjw6bCnsKQw6jCocKow6jCvsK+w6XCvMKPw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYC9MT0RPUFxcLihbXihdKylcXCgoW15cXG5dKylcXCk7L2lgXG4gICAqL1xuICBwcmludChjb2RlOiBzdHJpbmcsIGNvbnRleHRPYmo6IE9iamVjdCB8IE9iamVjdFtdLCBwYXJzZXI/OiBSZWdFeHApOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgaWYgKGNvbnRleHRPYmopIHtcbiAgICAgIHRoaXMucHJpbnRCdWZmZXIucHVzaChcbiAgICAgICAgLi4uKEFycmF5LmlzQXJyYXkoY29udGV4dE9iaikgPyBjb250ZXh0T2JqIDogW2NvbnRleHRPYmpdKS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsgY29kZSwgcGFyc2VyLCBpdGVtIH07XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5wcmludERvKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0LnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fZXZlbnRzLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IExvZG9wQ29uZmlnIH0gZnJvbSAnLi9sb2RvcC5jb25maWcnO1xuaW1wb3J0IHsgTG9kb3BTZXJ2aWNlIH0gZnJvbSAnLi9sb2RvcC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0RlbG9uVXRpbE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIExvZG9wTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBMb2RvcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0xvZG9wU2VydmljZSwgTG9kb3BDb25maWddLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsTUFBYSxXQUFXO0NBZ0N2Qjs7Ozs7O0FDaENEO0FBVUEsTUFBYSxZQUFZOzs7OztJQU92QixZQUFvQixNQUFtQixFQUFVLFNBQXNCO1FBQW5ELFdBQU0sR0FBTixNQUFNLENBQWE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBTC9ELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFVLElBQUksQ0FBQztRQUNyQixVQUFLLEdBQXlCLElBQUksT0FBTyxFQUFlLENBQUM7UUFDekQsWUFBTyxHQUE4QixJQUFJLE9BQU8sRUFBb0IsQ0FBQztRQXdLckUsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFySzlCLElBQUksQ0FBQyxHQUFHLEdB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