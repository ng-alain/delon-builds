/**
 * @fileoverview added by tsickle
 * Generated from: lodop.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AlainConfigService, LazyService } from '@delon/util';
import { of, Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util";
export class LodopService {
    /**
     * @param {?} scriptSrv
     * @param {?} configSrv
     */
    constructor(scriptSrv, configSrv) {
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
        this._cog = Object.assign(Object.assign({}, this.defaultConfig), value);
    }
    /**
     * 事件变更通知
     * @return {?}
     */
    get events() {
        return this._events.asObservable();
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
        const count = (/** @type {?} */ (this._lodop)).GET_PRINTER_COUNT();
        for (let index = 0; index < count; index++) {
            ret.push((/** @type {?} */ (this._lodop)).GET_PRINTER_NAME(index));
        }
        return ret;
    }
    /**
     * @private
     * @return {?}
     */
    check() {
        if (!this._lodop)
            throw new Error(`请务必先调用 lodop 获取对象`);
    }
    /**
     * @private
     * @return {?}
     */
    request() {
        this.pending = true;
        /** @type {?} */
        const url = `${this.cog.url}?name=${this.cog.name}`;
        /** @type {?} */
        let checkMaxCount = (/** @type {?} */ (this.cog.checkMaxCount));
        /** @type {?} */
        const onResolve = (/**
         * @param {?} status
         * @param {?=} error
         * @return {?}
         */
        (status, error) => {
            this._init.next({
                ok: status === 'ok',
                status,
                error,
                lodop: (/** @type {?} */ (this._lodop)),
            });
        });
        /** @type {?} */
        const checkStatus = (/**
         * @return {?}
         */
        () => {
            --checkMaxCount;
            if ((/** @type {?} */ (this._lodop)).webskt && (/** @type {?} */ (this._lodop)).webskt.readyState === 1) {
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
                () => checkStatus()), 100);
            }
        });
        this.scriptSrv.loadScript(url).then((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            if (res.status !== 'ok') {
                this.pending = false;
                onResolve('script-load-error', res[0]);
                return;
            }
            /** @type {?} */
            const win = (/** @type {?} */ (window));
            if (win.hasOwnProperty((/** @type {?} */ (this.cog.name)))) {
                this._lodop = (/** @type {?} */ (win[(/** @type {?} */ (this.cog.name))]));
            }
            if (this._lodop === null) {
                onResolve('load-variable-name-error', { name: this.cog.name });
                return;
            }
            this._lodop.SET_LICENSES((/** @type {?} */ (this.cog.companyName)), (/** @type {?} */ (this.cog.license)), this.cog.licenseA, this.cog.licenseB);
            checkStatus();
        }));
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
        code.split('\n').forEach((/**
         * @param {?} line
         * @return {?}
         */
        line => {
            /** @type {?} */
            const res = (/** @type {?} */ (parser)).exec(line.trim());
            if (!res)
                return;
            /** @type {?} */
            const fn = (/** @type {?} */ (this._lodop))[res[1]];
            if (fn) {
                /** @type {?} */
                let arr = null;
                try {
                    // tslint:disable-next-line: function-constructor
                    /** @type {?} */
                    const fakeFn = new Function(`return [${res[2]}]`);
                    arr = fakeFn();
                }
                catch (_a) { }
                if (arr != null && Array.isArray(arr) && contextObj) {
                    for (let i = 0; i < arr.length; i++) {
                        if (typeof arr[i] === 'string') {
                            arr[i] = ((/** @type {?} */ (arr[i]))).replace(/{{(.*?)}}/g, (/**
                             * @param {?} _match
                             * @param {?} key
                             * @return {?}
                             */
                            (_match, key) => contextObj[key.trim()] || ''));
                        }
                    }
                }
                fn.apply(this._lodop, (/** @type {?} */ (arr)));
            }
        }));
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
        const tid = (/** @type {?} */ (this._lodop)).PRINT_DESIGN();
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            (/** @type {?} */ (this._lodop)).On_Return = (/**
             * @param {?} taskID
             * @param {?} value
             * @return {?}
             */
            (taskID, value) => {
                if (tid !== taskID)
                    return;
                (/** @type {?} */ (this._lodop)).On_Return = null;
                resolve('' + value);
            });
        }));
    }
    /**
     * @private
     * @return {?}
     */
    printDo() {
        /** @type {?} */
        const data = this.printBuffer.shift();
        if (!data)
            return;
        this.attachCode(data.code, data.item, data.parser);
        /** @type {?} */
        const tid = (/** @type {?} */ (this._lodop)).PRINT();
        (/** @type {?} */ (this._lodop)).On_Return = (/**
         * @param {?} taskID
         * @param {?} value
         * @return {?}
         */
        (taskID, value) => {
            if (tid !== taskID)
                return;
            (/** @type {?} */ (this._lodop)).On_Return = null;
            this._events.next(Object.assign({ ok: value === true, error: value === true ? null : value }, data));
            this.printDo();
        });
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
            this.printBuffer.push(...(Array.isArray(contextObj) ? contextObj : [contextObj]).map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return { code, parser, item };
            })));
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
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LodopService.ctorParameters = () => [
    { type: LazyService },
    { type: AlainConfigService }
];
/** @nocollapse */ LodopService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LodopService_Factory() { return new LodopService(i0.ɵɵinject(i1.LazyService), i0.ɵɵinject(i1.AlainConfigService)); }, token: LodopService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbG9kb3AvIiwic291cmNlcyI6WyJsb2RvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQW9CLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVoRixPQUFPLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBSS9DLE1BQU0sT0FBTyxZQUFZOzs7OztJQVN2QixZQUFvQixTQUFzQixFQUFFLFNBQTZCO1FBQXJELGNBQVMsR0FBVCxTQUFTLENBQWE7UUFObEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQWlCLElBQUksQ0FBQztRQUM1QixVQUFLLEdBQUcsSUFBSSxPQUFPLEVBQWUsQ0FBQztRQUNuQyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQW9CLENBQUM7UUFDMUMsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFHOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUE0QixPQUFPLEVBQUU7WUFDdkUsR0FBRyxFQUFFLGlDQUFpQztZQUN0QyxJQUFJLEVBQUUsUUFBUTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsYUFBYSxFQUFFLEdBQUc7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ2hDLENBQUM7Ozs7Ozs7SUFPRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFDRCxJQUFJLEdBQUcsQ0FBQyxLQUF1QjtRQUM3QixJQUFJLENBQUMsSUFBSSxtQ0FDSixJQUFJLENBQUMsYUFBYSxHQUNsQixLQUFLLENBQ1QsQ0FBQztJQUNKLENBQUM7Ozs7O0lB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b20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpbkxvZG9wQ29uZmlnLCBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTG9kb3AsIExvZG9wUHJpbnRSZXN1bHQsIExvZG9wUmVzdWx0IH0gZnJvbSAnLi9sb2RvcC50eXBlcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTG9kb3BTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBkZWZhdWx0Q29uZmlnOiBBbGFpbkxvZG9wQ29uZmlnO1xuICBwcml2YXRlIF9jb2c6IEFsYWluTG9kb3BDb25maWc7XG4gIHByaXZhdGUgcGVuZGluZyA9IGZhbHNlO1xuICBwcml2YXRlIF9sb2RvcDogTG9kb3AgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfaW5pdCA9IG5ldyBTdWJqZWN0PExvZG9wUmVzdWx0PigpO1xuICBwcml2YXRlIF9ldmVudHMgPSBuZXcgU3ViamVjdDxMb2RvcFByaW50UmVzdWx0PigpO1xuICBwcml2YXRlIHByaW50QnVmZmVyOiBhbnlbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NyaXB0U3J2OiBMYXp5U2VydmljZSwgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICB0aGlzLmRlZmF1bHRDb25maWcgPSBjb25maWdTcnYubWVyZ2U8QWxhaW5Mb2RvcENvbmZpZywgJ2xvZG9wJz4oJ2xvZG9wJywge1xuICAgICAgdXJsOiAnLy9sb2NhbGhvc3Q6ODQ0My9DTG9kb3BmdW5jcy5qcycsXG4gICAgICBuYW1lOiAnQ0xPRE9QJyxcbiAgICAgIGNvbXBhbnlOYW1lOiAnJyxcbiAgICAgIGNoZWNrTWF4Q291bnQ6IDEwMCxcbiAgICB9KTtcbiAgICB0aGlzLmNvZyA9IHRoaXMuZGVmYXVsdENvbmZpZztcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bmiJbph43mlrDorr7nva7phY3nva5cbiAgICpcbiAgICogKirms6jvvJoqKumHjeaWsOiuvue9ruS8muWAkue9rumHjeaWsOWKoOi9veiEmuacrOi1hOa6kFxuICAgKi9cbiAgZ2V0IGNvZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29nO1xuICB9XG4gIHNldCBjb2codmFsdWU6IEFsYWluTG9kb3BDb25maWcpIHtcbiAgICB0aGlzLl9jb2cgPSB7XG4gICAgICAuLi50aGlzLmRlZmF1bHRDb25maWcsXG4gICAgICAuLi52YWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqIOS6i+S7tuWPmOabtOmAmuefpSAqL1xuICBnZXQgZXZlbnRzKCk6IE9ic2VydmFibGU8TG9kb3BQcmludFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLl9ldmVudHMuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiog6I635Y+WIGxvZG9wIOWvueixoSAqL1xuICBnZXQgbG9kb3AoKTogT2JzZXJ2YWJsZTxMb2RvcFJlc3VsdD4ge1xuICAgIGlmICh0aGlzLl9sb2RvcCkgcmV0dXJuIG9mKHsgb2s6IHRydWUsIGxvZG9wOiB0aGlzLl9sb2RvcCB9IGFzIExvZG9wUmVzdWx0KTtcbiAgICBpZiAodGhpcy5wZW5kaW5nKSByZXR1cm4gdGhpcy5faW5pdC5hc09ic2VydmFibGUoKTtcblxuICAgIHRoaXMucmVxdWVzdCgpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2luaXQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiog6I635Y+W5omT5Y2w5py65YiX6KGoICovXG4gIGdldCBwcmludGVyKCk6IHN0cmluZ1tdIHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgY29uc3QgcmV0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5fbG9kb3AhLkdFVF9QUklOVEVSX0NPVU5UKCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICByZXQucHVzaCh0aGlzLl9sb2RvcCEuR0VUX1BSSU5URVJfTkFNRShpbmRleCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVjaygpIHtcbiAgICBpZiAoIXRoaXMuX2xvZG9wKSB0aHJvdyBuZXcgRXJyb3IoYOivt+WKoeW/heWFiOiwg+eUqCBsb2RvcCDojrflj5blr7nosaFgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVxdWVzdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xuXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb2cudXJsfT9uYW1lPSR7dGhpcy5jb2cubmFtZX1gO1xuICAgIGxldCBjaGVja01heENvdW50ID0gdGhpcy5jb2cuY2hlY2tNYXhDb3VudCBhcyBudW1iZXI7XG4gICAgY29uc3Qgb25SZXNvbHZlID0gKHN0YXR1czogTnpTYWZlQW55LCBlcnJvcj86IHt9KSA9PiB7XG4gICAgICB0aGlzLl9pbml0Lm5leHQoe1xuICAgICAgICBvazogc3RhdHVzID09PSAnb2snLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGVycm9yLFxuICAgICAgICBsb2RvcDogdGhpcy5fbG9kb3AhLFxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcbiAgICAgIC0tY2hlY2tNYXhDb3VudDtcbiAgICAgIGlmICh0aGlzLl9sb2RvcCEud2Vic2t0ICYmIHRoaXMuX2xvZG9wIS53ZWJza3QucmVhZHlTdGF0ZSA9PT0gMSkge1xuICAgICAgICBvblJlc29sdmUoJ29rJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2hlY2tNYXhDb3VudCA8IDApIHtcbiAgICAgICAgICBvblJlc29sdmUoJ2NoZWNrLWxpbWl0Jyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2hlY2tTdGF0dXMoKSwgMTAwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5zY3JpcHRTcnYubG9hZFNjcmlwdCh1cmwpLnRoZW4oKHJlczogTnpTYWZlQW55KSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gJ29rJykge1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgb25SZXNvbHZlKCdzY3JpcHQtbG9hZC1lcnJvcicsIHJlc1swXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHdpbiA9IHdpbmRvdyBhcyBOelNhZmVBbnk7XG4gICAgICBpZiAod2luLmhhc093blByb3BlcnR5KHRoaXMuY29nLm5hbWUhKSkge1xuICAgICAgICB0aGlzLl9sb2RvcCA9IHdpblt0aGlzLmNvZy5uYW1lIV0gYXMgTG9kb3A7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fbG9kb3AgPT09IG51bGwpIHtcbiAgICAgICAgb25SZXNvbHZlKCdsb2FkLXZhcmlhYmxlLW5hbWUtZXJyb3InLCB7IG5hbWU6IHRoaXMuY29nLm5hbWUgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xvZG9wLlNFVF9MSUNFTlNFUyh0aGlzLmNvZy5jb21wYW55TmFtZSEsIHRoaXMuY29nLmxpY2Vuc2UhLCB0aGlzLmNvZy5saWNlbnNlQSwgdGhpcy5jb2cubGljZW5zZUIpO1xuICAgICAgY2hlY2tTdGF0dXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiDph43nva4gbG9kb3Ag5a+56LGhICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX2xvZG9wID0gbnVsbDtcbiAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnJlcXVlc3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDpmYTliqDku6PnoIHoh7MgYGxvZG9wYCDlr7nosaHkuIrvvIzlrZfnrKbkuLLnsbvmlK/mjIEgYHt7a2V5fX1gIOeahOWKqOaAgeWPguaVsFxuICAgKlxuICAgKiAqKuazqO+8mioqIOS7o+eggeaYr+aMh+aJk+WNsOiuvuiuoeaJgOS6p+eUn+Wtl+espuS4suaVsOaNrlxuICAgKlxuICAgKiBAcGFyYW0gY29kZSDku6PnoIFcbiAgICogQHBhcmFtIGNvbnRleHRPYmog5Yqo5oCB5Y+C5pWw5LiK5LiL5paH5a+56LGhXG4gICAqIEBwYXJhbSBwYXJzZXIg6Ieq5a6a5LmJ6Kej5p6Q6KGo6L6+5byP77yM6buY6K6k77yaYC9MT0RPUFxcLihbXihdKylcXCgoW15cXG5dKylcXCk7L2lgXG4gICAqL1xuICBhdHRhY2hDb2RlKGNvZGU6IHN0cmluZywgY29udGV4dE9iaj86IE56U2FmZUFueSwgcGFyc2VyPzogUmVnRXhwKTogdm9pZCB7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGlmICghcGFyc2VyKSBwYXJzZXIgPSAvTE9ET1BcXC4oW14oXSspXFwoKFteXFxuXSspXFwpOy9pO1xuICAgIGNvZGUuc3BsaXQoJ1xcbicpLmZvckVhY2gobGluZSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXJzZXIhLmV4ZWMobGluZS50cmltKCkpO1xuICAgICAgaWYgKCFyZXMpIHJldHVybjtcbiAgICAgIGNvbnN0IGZuID0gdGhpcy5fbG9kb3AhW3Jlc1sxXV07XG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgbGV0IGFycjogYW55W10gfCBudWxsID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGZ1bmN0aW9uLWNvbnN0cnVjdG9yXG4gICAgICAgICAgY29uc3QgZmFrZUZuID0gbmV3IEZ1bmN0aW9uKGByZXR1cm4gWyR7cmVzWzJdfV1gKTtcbiAgICAgICAgICBhcnIgPSBmYWtlRm4oKTtcbiAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgIGlmIChhcnIgIT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KGFycikgJiYgY29udGV4dE9iaikge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFycltpXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgYXJyW2ldID0gKGFycltpXSBhcyBzdHJpbmcpLnJlcGxhY2UoL3t7KC4qPyl9fS9nLCAoX21hdGNoLCBrZXkpID0+IGNvbnRleHRPYmpba2V5LnRyaW0oKV0gfHwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmbi5hcHBseSh0aGlzLl9sb2RvcCwgYXJyISk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5omT5byA5omT5Y2w6K6+6K6h5YWz6Zet5ZCO6Ieq5Yqo6L+U5Zue5Luj56CBXG4gICAqXG4gICAqICoq5rOo77yaKiog6Ieq5Yqo55uR5ZCsIGBPbl9SZXR1cm5gIOS6i+S7tu+8jOi/kOihjOWQjuS8muenu+mZpFxuICAgKi9cbiAgZGVzaWduKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGNvbnN0IHRpZCA9IHRoaXMuX2xvZG9wIS5QUklOVF9ERVNJR04oKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLl9sb2RvcCEuT25fUmV0dXJuID0gKHRhc2tJRDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAodGlkICE9PSB0YXNrSUQpIHJldHVybjtcbiAgICAgICAgdGhpcy5fbG9kb3AhLk9uX1JldHVybiA9IG51bGw7XG4gICAgICAgIHJlc29sdmUoJycgKyB2YWx1ZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgcHJpbnREbygpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcmludEJ1ZmZlci5zaGlmdCgpO1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuICAgIHRoaXMuYXR0YWNoQ29kZShkYXRhLmNvZGUsIGRhdGEuaXRlbSwgZGF0YS5wYXJzZXIpO1xuICAgIGNvbnN0IHRpZCA9IHRoaXMuX2xvZG9wIS5QUklOVCgpO1xuICAgIHRoaXMuX2xvZG9wIS5Pbl9SZXR1cm4gPSAodGFza0lEOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodGlkICE9PSB0YXNrSUQpIHJldHVybjtcbiAgICAgIHRoaXMuX2xvZG9wIS5Pbl9SZXR1cm4gPSBudWxsO1xuICAgICAgdGhpcy5fZXZlbnRzLm5leHQoe1xuICAgICAgICBvazogdmFsdWUgPT09IHRydWUsXG4gICAgICAgIGVycm9yOiB2YWx1ZSA9PT0gdHJ1ZSA/IG51bGwgOiB2YWx1ZSxcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcmludERvKCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnq4vljbPmiZPljbDvvIzkuIDoiKznlKjkuo7mibnph4/lpZfmiZNcbiAgICpcbiAgICogQHBhcmFtIGNvZGUg5Luj56CBXG4gICAqIEBwYXJhbSBjb250ZXh0T2JqIOWKqOaAgeWPguaVsOS4iuS4i+aWh+WvueixoVxuICAgKiBAcGFyYW0gcGFyc2VyIOiHquWumuS5ieino+aekOihqOi+vuW8j++8jOm7mOiupO+8mmAvTE9ET1BcXC4oW14oXSspXFwoKFteXFxuXSspXFwpOy9pYFxuICAgKi9cbiAgcHJpbnQoY29kZTogc3RyaW5nLCBjb250ZXh0T2JqOiB7fSB8IEFycmF5PHt9PiwgcGFyc2VyPzogUmVnRXhwKTogdm9pZCB7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGlmIChjb250ZXh0T2JqKSB7XG4gICAgICB0aGlzLnByaW50QnVmZmVyLnB1c2goXG4gICAgICAgIC4uLihBcnJheS5pc0FycmF5KGNvbnRleHRPYmopID8gY29udGV4dE9iaiA6IFtjb250ZXh0T2JqXSkubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiB7IGNvZGUsIHBhcnNlciwgaXRlbSB9O1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMucHJpbnREbygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2V2ZW50cy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=