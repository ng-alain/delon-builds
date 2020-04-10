/**
 * @fileoverview added by tsickle
 * Generated from: lodop.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LazyService } from '@delon/util';
import { of, Subject } from 'rxjs';
import { LodopConfig } from './lodop.config';
import * as i0 from "@angular/core";
import * as i1 from "./lodop.config";
import * as i2 from "@delon/util";
export class LodopService {
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
        this._cog = Object.assign(Object.assign({ url: 'https://localhost:8443/CLodopfuncs.js', name: 'CLODOP', companyName: '', checkMaxCount: 100 }, this.defCog), value);
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
            this._lodop.SET_LICENSES((/** @type {?} */ (this.cog.companyName)), this.cog.license, this.cog.licenseA, this.cog.licenseB);
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
    { type: LodopConfig },
    { type: LazyService }
];
/** @nocollapse */ LodopService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LodopService_Factory() { return new LodopService(i0.ɵɵinject(i1.LodopConfig), i0.ɵɵinject(i2.LazyService)); }, token: LodopService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbG9kb3AvIiwic291cmNlcyI6WyJsb2RvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFDLE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUk3QyxNQUFNLE9BQU8sWUFBWTs7Ozs7SUFDdkIsWUFBb0IsTUFBbUIsRUFBVSxTQUFzQjtRQUFuRCxXQUFNLEdBQU4sTUFBTSxDQUFhO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQWtEL0QsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQWlCLElBQUksQ0FBQztRQUM1QixVQUFLLEdBQUcsSUFBSSxPQUFPLEVBQWUsQ0FBQztRQUNuQyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQW9CLENBQUM7UUFDMUMsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFyRDlCLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7Ozs7SUFPRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFDRCxJQUFJLEdBQUcsQ0FBQyxLQUFrQjtRQUN4QixJQUFJLENBQUMsSUFBSSxpQ0FDUCxHQUFHLEVBQUUsdUNBQXVDLEVBQzVDLElBQUksRUFBRSxRQUFRLEVBQ2QsV0FBVyxFQUFFLEVBQUUsRUFDZixhQUFhLEVBQUUsR0FBRyxJQUNmLElBQUksQ0FBQyxNQUFNLEdBQ1gsS0FBSyxDQUNULENBQUM7SUFDSixDQUFDOzs7OztJQUdELElBQUksTUFBTTtRQUNSLE9BQU8sSUFB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SUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQ2pDLElBQUksRUFDUCxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7O0lBU0QsS0FBSyxDQUFDLElBQVksRUFBRSxVQUEwQixFQUFFLE1BQWU7UUFDN0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDbkIsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUc7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRTtnQkFDcEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDaEMsQ0FBQyxFQUFDLENBQ0gsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7OztZQTdNRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBSHpCLFdBQVc7WUFIWCxXQUFXOzs7Ozs7OztJQXlEbEIsNEJBQTBCOzs7OztJQUMxQiwrQkFBd0I7Ozs7O0lBQ3hCLDhCQUFvQzs7Ozs7SUFDcEMsNkJBQTJDOzs7OztJQUMzQywrQkFBa0Q7Ozs7O0lBQ2xELG1DQUFnQzs7Ozs7SUF0RHBCLDhCQUEyQjs7Ozs7SUFBRSxpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMb2RvcENvbmZpZyB9IGZyb20gJy4vbG9kb3AuY29uZmlnJztcbmltcG9ydCB7IExvZG9wLCBMb2RvcFByaW50UmVzdWx0LCBMb2RvcFJlc3VsdCB9IGZyb20gJy4vbG9kb3AudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExvZG9wU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVmQ29nOiBMb2RvcENvbmZpZywgcHJpdmF0ZSBzY3JpcHRTcnY6IExhenlTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb2cgPSBkZWZDb2c7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5oiW6YeN5paw6K6+572u6YWN572uXG4gICAqXG4gICAqICoq5rOo77yaKirph43mlrDorr7nva7kvJrlgJLnva7ph43mlrDliqDovb3ohJrmnKzotYTmupBcbiAgICovXG4gIGdldCBjb2coKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZztcbiAgfVxuICBzZXQgY29nKHZhbHVlOiBMb2RvcENvbmZpZykge1xuICAgIHRoaXMuX2NvZyA9IHtcbiAgICAgIHVybDogJ2h0dHBzOi8vbG9jYWxob3N0Ojg0NDMvQ0xvZG9wZnVuY3MuanMnLFxuICAgICAgbmFtZTogJ0NMT0RPUCcsXG4gICAgICBjb21wYW55TmFtZTogJycsXG4gICAgICBjaGVja01heENvdW50OiAxMDAsXG4gICAgICAuLi50aGlzLmRlZkNvZyxcbiAgICAgIC4uLnZhbHVlLFxuICAgIH07XG4gIH1cblxuICAvKiog5LqL5Lu25Y+Y5pu06YCa55+lICovXG4gIGdldCBldmVudHMoKTogT2JzZXJ2YWJsZTxMb2RvcFByaW50UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50cy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKiDojrflj5YgbG9kb3Ag5a+56LGhICovXG4gIGdldCBsb2RvcCgpOiBPYnNlcnZhYmxlPExvZG9wUmVzdWx0PiB7XG4gICAgaWYgKHRoaXMuX2xvZG9wKSByZXR1cm4gb2YoeyBvazogdHJ1ZSwgbG9kb3A6IHRoaXMuX2xvZG9wIH0gYXMgTG9kb3BSZXN1bHQpO1xuICAgIGlmICh0aGlzLnBlbmRpbmcpIHJldHVybiB0aGlzLl9pbml0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgdGhpcy5yZXF1ZXN0KCk7XG5cbiAgICByZXR1cm4gdGhpcy5faW5pdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKiDojrflj5bmiZPljbDmnLrliJfooaggKi9cbiAgZ2V0IHByaW50ZXIoKTogc3RyaW5nW10ge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgICBjb25zdCByZXQ6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgY291bnQgPSB0aGlzLl9sb2RvcCEuR0VUX1BSSU5URVJfQ09VTlQoKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgIHJldC5wdXNoKHRoaXMuX2xvZG9wIS5HRVRfUFJJTlRFUl9OQU1FKGluZGV4KSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcml2YXRlIF9jb2c6IExvZG9wQ29uZmlnO1xuICBwcml2YXRlIHBlbmRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbG9kb3A6IExvZG9wIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2luaXQgPSBuZXcgU3ViamVjdDxMb2RvcFJlc3VsdD4oKTtcbiAgcHJpdmF0ZSBfZXZlbnRzID0gbmV3IFN1YmplY3Q8TG9kb3BQcmludFJlc3VsdD4oKTtcbiAgcHJpdmF0ZSBwcmludEJ1ZmZlcjogYW55W10gPSBbXTtcblxuICBwcml2YXRlIGNoZWNrKCkge1xuICAgIGlmICghdGhpcy5fbG9kb3ApIHRocm93IG5ldyBFcnJvcihg6K+35Yqh5b+F5YWI6LCD55SoIGxvZG9wIOiOt+WPluWvueixoWApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXF1ZXN0KCk6IHZvaWQge1xuICAgIHRoaXMucGVuZGluZyA9IHRydWU7XG5cbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmNvZy51cmx9P25hbWU9JHt0aGlzLmNvZy5uYW1lfWA7XG4gICAgbGV0IGNoZWNrTWF4Q291bnQgPSB0aGlzLmNvZy5jaGVja01heENvdW50IGFzIG51bWJlcjtcbiAgICBjb25zdCBvblJlc29sdmUgPSAoc3RhdHVzOiBOelNhZmVBbnksIGVycm9yPzoge30pID0+IHtcbiAgICAgIHRoaXMuX2luaXQubmV4dCh7XG4gICAgICAgIG9rOiBzdGF0dXMgPT09ICdvaycsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZXJyb3IsXG4gICAgICAgIGxvZG9wOiB0aGlzLl9sb2RvcCEsXG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuICAgICAgLS1jaGVja01heENvdW50O1xuICAgICAgaWYgKHRoaXMuX2xvZG9wIS53ZWJza3QgJiYgdGhpcy5fbG9kb3AhLndlYnNrdC5yZWFkeVN0YXRlID09PSAxKSB7XG4gICAgICAgIG9uUmVzb2x2ZSgnb2snKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjaGVja01heENvdW50IDwgMCkge1xuICAgICAgICAgIG9uUmVzb2x2ZSgnY2hlY2stbGltaXQnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjaGVja1N0YXR1cygpLCAxMDApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnNjcmlwdFNydi5sb2FkU2NyaXB0KHVybCkudGhlbigocmVzOiBOelNhZmVBbnkpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAnb2snKSB7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICBvblJlc29sdmUoJ3NjcmlwdC1sb2FkLWVycm9yJywgcmVzWzBdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgd2luID0gd2luZG93IGFzIE56U2FmZUFueTtcbiAgICAgIGlmICh3aW4uaGFzT3duUHJvcGVydHkodGhpcy5jb2cubmFtZSEpKSB7XG4gICAgICAgIHRoaXMuX2xvZG9wID0gd2luW3RoaXMuY29nLm5hbWUhXSBhcyBMb2RvcDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9sb2RvcCA9PT0gbnVsbCkge1xuICAgICAgICBvblJlc29sdmUoJ2xvYWQtdmFyaWFibGUtbmFtZS1lcnJvcicsIHsgbmFtZTogdGhpcy5jb2cubmFtZSB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fbG9kb3AuU0VUX0xJQ0VOU0VTKHRoaXMuY29nLmNvbXBhbnlOYW1lISwgdGhpcy5jb2cubGljZW5zZSwgdGhpcy5jb2cubGljZW5zZUEsIHRoaXMuY29nLmxpY2Vuc2VCKTtcbiAgICAgIGNoZWNrU3RhdHVzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiog6YeN572uIGxvZG9wIOWvueixoSAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLl9sb2RvcCA9IG51bGw7XG4gICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgdGhpcy5yZXF1ZXN0KCk7XG4gIH1cblxuICAvKipcbiAgICog6ZmE5Yqg5Luj56CB6IezIGBsb2RvcGAg5a+56LGh5LiK77yM5a2X56ym5Liy57G75pSv5oyBIGB7e2tleX19YCDnmoTliqjmgIHlj4LmlbBcbiAgICpcbiAgICogKirms6jvvJoqKiDku6PnoIHmmK/mjIfmiZPljbDorr7orqHmiYDkuqfnlJ/lrZfnrKbkuLLmlbDmja5cbiAgICpcbiAgICogQHBhcmFtIGNvZGUg5Luj56CBXG4gICAqIEBwYXJhbSBjb250ZXh0T2JqIOWKqOaAgeWPguaVsOS4iuS4i+aWh+WvueixoVxuICAgKiBAcGFyYW0gcGFyc2VyIOiHquWumuS5ieino+aekOihqOi+vuW8j++8jOm7mOiupO+8mmAvTE9ET1BcXC4oW14oXSspXFwoKFteXFxuXSspXFwpOy9pYFxuICAgKi9cbiAgYXR0YWNoQ29kZShjb2RlOiBzdHJpbmcsIGNvbnRleHRPYmo/OiBOelNhZmVBbnksIHBhcnNlcj86IFJlZ0V4cCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgICBpZiAoIXBhcnNlcikgcGFyc2VyID0gL0xPRE9QXFwuKFteKF0rKVxcKChbXlxcbl0rKVxcKTsvaTtcbiAgICBjb2RlLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGFyc2VyIS5leGVjKGxpbmUudHJpbSgpKTtcbiAgICAgIGlmICghcmVzKSByZXR1cm47XG4gICAgICBjb25zdCBmbiA9IHRoaXMuX2xvZG9wIVtyZXNbMV1dO1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIGxldCBhcnI6IGFueVtdIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBmdW5jdGlvbi1jb25zdHJ1Y3RvclxuICAgICAgICAgIGNvbnN0IGZha2VGbiA9IG5ldyBGdW5jdGlvbihgcmV0dXJuIFske3Jlc1syXX1dYCk7XG4gICAgICAgICAgYXJyID0gZmFrZUZuKCk7XG4gICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICBpZiAoYXJyICE9IG51bGwgJiYgQXJyYXkuaXNBcnJheShhcnIpICYmIGNvbnRleHRPYmopIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcnJbaV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGFycltpXSA9IChhcnJbaV0gYXMgc3RyaW5nKS5yZXBsYWNlKC97eyguKj8pfX0vZywgKF9tYXRjaCwga2V5KSA9PiBjb250ZXh0T2JqW2tleS50cmltKCldIHx8ICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm4uYXBwbHkodGhpcy5fbG9kb3AsIGFyciEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOaJk+W8gOaJk+WNsOiuvuiuoeWFs+mXreWQjuiHquWKqOi/lOWbnuS7o+eggVxuICAgKlxuICAgKiAqKuazqO+8mioqIOiHquWKqOebkeWQrCBgT25fUmV0dXJuYCDkuovku7bvvIzov5DooYzlkI7kvJrnp7vpmaRcbiAgICovXG4gIGRlc2lnbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgICBjb25zdCB0aWQgPSB0aGlzLl9sb2RvcCEuUFJJTlRfREVTSUdOKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5fbG9kb3AhLk9uX1JldHVybiA9ICh0YXNrSUQ6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHRpZCAhPT0gdGFza0lEKSByZXR1cm47XG4gICAgICAgIHRoaXMuX2xvZG9wIS5Pbl9SZXR1cm4gPSBudWxsO1xuICAgICAgICByZXNvbHZlKCcnICsgdmFsdWUpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIHByaW50RG8oKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucHJpbnRCdWZmZXIuc2hpZnQoKTtcbiAgICBpZiAoIWRhdGEpIHJldHVybjtcbiAgICB0aGlzLmF0dGFjaENvZGUoZGF0YS5jb2RlLCBkYXRhLml0ZW0sIGRhdGEucGFyc2VyKTtcbiAgICBjb25zdCB0aWQgPSB0aGlzLl9sb2RvcCEuUFJJTlQoKTtcbiAgICB0aGlzLl9sb2RvcCEuT25fUmV0dXJuID0gKHRhc2tJRDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHRpZCAhPT0gdGFza0lEKSByZXR1cm47XG4gICAgICB0aGlzLl9sb2RvcCEuT25fUmV0dXJuID0gbnVsbDtcbiAgICAgIHRoaXMuX2V2ZW50cy5uZXh0KHtcbiAgICAgICAgb2s6IHZhbHVlID09PSB0cnVlLFxuICAgICAgICBlcnJvcjogdmFsdWUgPT09IHRydWUgPyBudWxsIDogdmFsdWUsXG4gICAgICAgIC4uLmRhdGEsXG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJpbnREbygpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog56uL5Y2z5omT5Y2w77yM5LiA6Iis55So5LqO5om56YeP5aWX5omTXG4gICAqXG4gICAqIEBwYXJhbSBjb2RlIOS7o+eggVxuICAgKiBAcGFyYW0gY29udGV4dE9iaiDliqjmgIHlj4LmlbDkuIrkuIvmloflr7nosaFcbiAgICogQHBhcmFtIHBhcnNlciDoh6rlrprkuYnop6PmnpDooajovr7lvI/vvIzpu5jorqTvvJpgL0xPRE9QXFwuKFteKF0rKVxcKChbXlxcbl0rKVxcKTsvaWBcbiAgICovXG4gIHByaW50KGNvZGU6IHN0cmluZywgY29udGV4dE9iajoge30gfCBBcnJheTx7fT4sIHBhcnNlcj86IFJlZ0V4cCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgICBpZiAoY29udGV4dE9iaikge1xuICAgICAgdGhpcy5wcmludEJ1ZmZlci5wdXNoKFxuICAgICAgICAuLi4oQXJyYXkuaXNBcnJheShjb250ZXh0T2JqKSA/IGNvbnRleHRPYmogOiBbY29udGV4dE9ial0pLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4geyBjb2RlLCBwYXJzZXIsIGl0ZW0gfTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLnByaW50RG8oKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9ldmVudHMudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19