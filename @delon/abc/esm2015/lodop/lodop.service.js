/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { LazyService } from '@delon/util';
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
        // tslint:disable-next-line:no-any
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
        this._cog = Object.assign({ url: 'https://localhost:8443/CLodopfuncs.js', name: 'CLODOP', companyName: '', checkMaxCount: 100 }, this.defCog, value);
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
                // tslint:disable-next-line:no-any
                /** @type {?} */
                let arr;
                try {
                    /** @type {?} */
                    const fakeFn = new Function(`return [${res[2]}]`);
                    arr = fakeFn();
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
            this._events.next(Object.assign({ ok: value === true, error: value === true ? null : value }, data));
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
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LodopService.ctorParameters = () => [
    { type: LodopConfig },
    { type: LazyService }
];
/** @nocollapse */ LodopService.ngInjectableDef = i0.defineInjectable({ factory: function LodopService_Factory() { return new LodopService(i0.inject(i1.LodopConfig), i0.inject(i2.LazyService)); }, token: LodopService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbG9kb3AvIiwic291cmNlcyI6WyJsb2RvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxFQUFFLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBSTdDLE1BQU0sT0FBTyxZQUFZOzs7OztJQU92QixZQUFvQixNQUFtQixFQUFVLFNBQXNCO1FBQW5ELFdBQU0sR0FBTixNQUFNLENBQWE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBTC9ELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFVLElBQUksQ0FBQztRQUNyQixVQUFLLEdBQXlCLElBQUksT0FBTyxFQUFlLENBQUM7UUFDekQsWUFBTyxHQUE4QixJQUFJLE9BQU8sRUFBb0IsQ0FBQzs7UUF3S3JFLGdCQUFXLEdBQVUsRUFBRSxDQUFDO1FBcks5QixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7Ozs7O0lBT0QsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBQ0QsSUFBSSxHQUFHLENBQUMsS0FBa0I7UUFDeEIsSUFBSSxDQUFDLElBQUksbUJBQ1AsR0FBRyxFQUFFLHVDQUF1QyxFQUM1QyxJQUFJLEVBQUUsUUFBUSxFQUNkLFdBQVcsRUFBRSxFQUFFLEVBQ2YsYUFBYSxFQUFFLEdBQUcsSUFDZixJQUFJLENBQUMsTUFBTSxFQUNYLEtBQUssQ0FDVCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFHRCxJQUFJLE1BQU07UUFDUixPQUFPLElB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QUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDcEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7OztZQXRORixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBSHpCLFdBQVc7WUFGWCxXQUFXOzs7OztJQU9sQiw0QkFBMEI7O0lBQzFCLCtCQUF3Qjs7SUFDeEIsOEJBQTZCOztJQUM3Qiw2QkFBaUU7O0lBQ2pFLCtCQUE2RTs7SUF3SzdFLG1DQUFnQzs7SUF0S3BCLDhCQUEyQjs7SUFBRSxpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBMb2RvcENvbmZpZyB9IGZyb20gJy4vbG9kb3AuY29uZmlnJztcbmltcG9ydCB7IExvZG9wLCBMb2RvcFByaW50UmVzdWx0LCBMb2RvcFJlc3VsdCB9IGZyb20gJy4vbG9kb3AudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExvZG9wU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2NvZzogTG9kb3BDb25maWc7XG4gIHByaXZhdGUgcGVuZGluZyA9IGZhbHNlO1xuICBwcml2YXRlIF9sb2RvcDogTG9kb3AgPSBudWxsO1xuICBwcml2YXRlIF9pbml0OiBTdWJqZWN0PExvZG9wUmVzdWx0PiA9IG5ldyBTdWJqZWN0PExvZG9wUmVzdWx0PigpO1xuICBwcml2YXRlIF9ldmVudHM6IFN1YmplY3Q8TG9kb3BQcmludFJlc3VsdD4gPSBuZXcgU3ViamVjdDxMb2RvcFByaW50UmVzdWx0PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVmQ29nOiBMb2RvcENvbmZpZywgcHJpdmF0ZSBzY3JpcHRTcnY6IExhenlTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb2cgPSBkZWZDb2c7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5oiW6YeN5paw6K6+572u6YWN572uXG4gICAqXG4gICAqICoq5rOo77yaKirph43mlrDorr7nva7kvJrlgJLnva7ph43mlrDliqDovb3ohJrmnKzotYTmupBcbiAgICovXG4gIGdldCBjb2coKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvZztcbiAgfVxuICBzZXQgY29nKHZhbHVlOiBMb2RvcENvbmZpZykge1xuICAgIHRoaXMuX2NvZyA9IHtcbiAgICAgIHVybDogJ2h0dHBzOi8vbG9jYWxob3N0Ojg0NDMvQ0xvZG9wZnVuY3MuanMnLFxuICAgICAgbmFtZTogJ0NMT0RPUCcsXG4gICAgICBjb21wYW55TmFtZTogJycsXG4gICAgICBjaGVja01heENvdW50OiAxMDAsXG4gICAgICAuLi50aGlzLmRlZkNvZyxcbiAgICAgIC4uLnZhbHVlLFxuICAgIH07XG4gIH1cblxuICAvKiog5LqL5Lu25Y+Y5pu06YCa55+lICovXG4gIGdldCBldmVudHMoKTogT2JzZXJ2YWJsZTxMb2RvcFByaW50UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50cy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2soKSB7XG4gICAgaWYgKCF0aGlzLl9sb2RvcCkgdGhyb3cgbmV3IEVycm9yKGDor7fliqHlv4XlhYjosIPnlKggbG9kb3Ag6I635Y+W5a+56LGhYCk7XG4gIH1cblxuICBwcml2YXRlIHJlcXVlc3QoKTogdm9pZCB7XG4gICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcblxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuY29nLnVybH0/bmFtZT0ke3RoaXMuY29nLm5hbWV9YDtcbiAgICBsZXQgY2hlY2tNYXhDb3VudCA9IHRoaXMuY29nLmNoZWNrTWF4Q291bnQ7XG4gICAgY29uc3Qgb25SZXNvbHZlID0gKHN0YXR1cywgZXJyb3I/OiB7fSkgPT4ge1xuICAgICAgdGhpcy5faW5pdC5uZXh0KHtcbiAgICAgICAgb2s6IHN0YXR1cyA9PT0gJ29rJyxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBlcnJvcixcbiAgICAgICAgbG9kb3A6IHRoaXMuX2xvZG9wLFxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcbiAgICAgIC0tY2hlY2tNYXhDb3VudDtcbiAgICAgIGlmICh0aGlzLl9sb2RvcC53ZWJza3QgJiYgdGhpcy5fbG9kb3Aud2Vic2t0LnJlYWR5U3RhdGUgPT09IDEpIHtcbiAgICAgICAgb25SZXNvbHZlKCdvaycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoZWNrTWF4Q291bnQgPCAwKSB7XG4gICAgICAgICAgb25SZXNvbHZlKCdjaGVjay1saW1pdCcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNoZWNrU3RhdHVzKCksIDEwMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuc2NyaXB0U3J2LmxvYWRTY3JpcHQodXJsKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAnb2snKSB7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICBvblJlc29sdmUoJ3NjcmlwdC1sb2FkLWVycm9yJywgcmVzWzBdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fbG9kb3AgPVxuICAgICAgICB3aW5kb3cuaGFzT3duUHJvcGVydHkodGhpcy5jb2cubmFtZSkgJiZcbiAgICAgICAgKHdpbmRvd1t0aGlzLmNvZy5uYW1lXSBhcyBMb2RvcCk7XG4gICAgICBpZiAodGhpcy5fbG9kb3AgPT09IG51bGwpIHtcbiAgICAgICAgb25SZXNvbHZlKCdsb2FkLXZhcmlhYmxlLW5hbWUtZXJyb3InLCB7IG5hbWU6IHRoaXMuY29nLm5hbWUgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xvZG9wLlNFVF9MSUNFTlNFUyhcbiAgICAgICAgdGhpcy5jb2cuY29tcGFueU5hbWUsXG4gICAgICAgIHRoaXMuY29nLmxpY2Vuc2UsXG4gICAgICAgIHRoaXMuY29nLmxpY2Vuc2VBLFxuICAgICAgICB0aGlzLmNvZy5saWNlbnNlQixcbiAgICAgICk7XG4gICAgICBjaGVja1N0YXR1cygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIOmHjee9riBsb2RvcCDlr7nosaEgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fbG9kb3AgPSBudWxsO1xuICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgIHRoaXMucmVxdWVzdCgpO1xuICB9XG5cbiAgLyoqIOiOt+WPliBsb2RvcCDlr7nosaEgKi9cbiAgZ2V0IGxvZG9wKCk6IE9ic2VydmFibGU8TG9kb3BSZXN1bHQ+IHtcbiAgICBpZiAodGhpcy5fbG9kb3ApIHJldHVybiBvZih7IG9rOiB0cnVlLCBsb2RvcDogdGhpcy5fbG9kb3AgfSBhcyBMb2RvcFJlc3VsdCk7XG4gICAgaWYgKHRoaXMucGVuZGluZykgcmV0dXJuIHRoaXMuX2luaXQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICB0aGlzLnJlcXVlc3QoKTtcblxuICAgIHJldHVybiB0aGlzLl9pbml0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqIOiOt+WPluaJk+WNsOacuuWIl+ihqCAqL1xuICBnZXQgcHJpbnRlcigpOiBzdHJpbmdbXSB7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGNvbnN0IHJldDogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBjb3VudCA9IHRoaXMuX2xvZG9wLkdFVF9QUklOVEVSX0NPVU5UKCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICByZXQucHVzaCh0aGlzLl9sb2RvcC5HRVRfUFJJTlRFUl9OQU1FKGluZGV4KSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICog6ZmE5Yqg5Luj56CB6IezIGBsb2RvcGAg5a+56LGh5LiK77yM5a2X56ym5Liy57G75pSv5oyBIGB7e2tleX19YCDnmoTliqjmgIHlj4LmlbBcbiAgICpcbiAgICogKirms6jvvJoqKiDku6PnoIHmmK/mjIfmiZPljbDorr7orqHmiYDkuqfnlJ/lrZfnrKbkuLLmlbDmja5cbiAgICpcbiAgICogQHBhcmFtIGNvZGUg5Luj56CBXG4gICAqIEBwYXJhbSBjb250ZXh0T2JqIOWKqOaAgeWPguaVsOS4iuS4i+aWh+WvueixoVxuICAgKiBAcGFyYW0gcGFyc2VyIOiHquWumuS5ieino+aekOihqOi+vuW8j++8jOm7mOiupO+8mmAvTE9ET1BcXC4oW14oXSspXFwoKFteXFxuXSspXFwpOy9pYFxuICAgKi9cbiAgYXR0YWNoQ29kZShjb2RlOiBzdHJpbmcsIGNvbnRleHRPYmo/OiB7fSwgcGFyc2VyPzogUmVnRXhwKTogdm9pZCB7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGlmICghcGFyc2VyKSBwYXJzZXIgPSAvTE9ET1BcXC4oW14oXSspXFwoKFteXFxuXSspXFwpOy9pO1xuICAgIGNvZGUuc3BsaXQoJ1xcbicpLmZvckVhY2gobGluZSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXJzZXIuZXhlYyhsaW5lLnRyaW0oKSk7XG4gICAgICBpZiAoIXJlcykgcmV0dXJuO1xuICAgICAgY29uc3QgZm4gPSB0aGlzLl9sb2RvcFtyZXNbMV1dO1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgbGV0IGFycjogYW55W107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZmFrZUZuID0gbmV3IEZ1bmN0aW9uKGByZXR1cm4gWyR7cmVzWzJdfV1gKTtcbiAgICAgICAgICBhcnIgPSBmYWtlRm4oKTtcbiAgICAgICAgfSBjYXRjaCB7IH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpICYmIGNvbnRleHRPYmopIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcnJbaV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGFycltpXSA9IGFycltpXS5yZXBsYWNlKFxuICAgICAgICAgICAgICAgIC97eyguKj8pfX0vZyxcbiAgICAgICAgICAgICAgICAobWF0Y2gsIGtleSkgPT4gY29udGV4dE9ialtrZXkudHJpbSgpXSB8fCAnJyxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm4uYXBwbHkodGhpcy5fbG9kb3AsIGFycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5omT5byA5omT5Y2w6K6+6K6h5YWz6Zet5ZCO6Ieq5Yqo6L+U5Zue5Luj56CBXG4gICAqXG4gICAqICoq5rOo77yaKiog6Ieq5Yqo55uR5ZCsIGBPbl9SZXR1cm5gIOS6i+S7tu+8jOi/kOihjOWQjuS8muenu+mZpFxuICAgKi9cbiAgZGVzaWduKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGNvbnN0IHRpZCA9IHRoaXMuX2xvZG9wLlBSSU5UX0RFU0lHTigpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuX2xvZG9wLk9uX1JldHVybiA9ICh0YXNrSUQ6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHRpZCAhPT0gdGFza0lEKSByZXR1cm47XG4gICAgICAgIHRoaXMuX2xvZG9wLk9uX1JldHVybiA9IG51bGw7XG4gICAgICAgIHJlc29sdmUoJycgKyB2YWx1ZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIHByaW50QnVmZmVyOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIHByaW50RG8oKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucHJpbnRCdWZmZXIuc2hpZnQoKTtcbiAgICBpZiAoIWRhdGEpIHJldHVybjtcbiAgICB0aGlzLmF0dGFjaENvZGUoZGF0YS5jb2RlLCBkYXRhLml0ZW0sIGRhdGEucGFyc2VyKTtcbiAgICBjb25zdCB0aWQgPSB0aGlzLl9sb2RvcC5QUklOVCgpO1xuICAgIHRoaXMuX2xvZG9wLk9uX1JldHVybiA9ICh0YXNrSUQ6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh0aWQgIT09IHRhc2tJRCkgcmV0dXJuO1xuICAgICAgdGhpcy5fbG9kb3AuT25fUmV0dXJuID0gbnVsbDtcbiAgICAgIHRoaXMuX2V2ZW50cy5uZXh0KHtcbiAgICAgICAgb2s6IHZhbHVlID09PSB0cnVlLFxuICAgICAgICBlcnJvcjogdmFsdWUgPT09IHRydWUgPyBudWxsIDogdmFsdWUsXG4gICAgICAgIC4uLmRhdGEsXG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJpbnREbygpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog56uL5Y2z5omT5Y2w77yM5LiA6Iis55So5LqO5om56YeP5aWX5omTXG4gICAqXG4gICAqIEBwYXJhbSBjb2RlIOS7o+eggVxuICAgKiBAcGFyYW0gY29udGV4dE9iaiDliqjmgIHlj4LmlbDkuIrkuIvmloflr7nosaFcbiAgICogQHBhcmFtIHBhcnNlciDoh6rlrprkuYnop6PmnpDooajovr7lvI/vvIzpu5jorqTvvJpgL0xPRE9QXFwuKFteKF0rKVxcKChbXlxcbl0rKVxcKTsvaWBcbiAgICovXG4gIHByaW50KGNvZGU6IHN0cmluZywgY29udGV4dE9iajoge30gfCBBcnJheTx7fT4sIHBhcnNlcj86IFJlZ0V4cCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgICBpZiAoY29udGV4dE9iaikge1xuICAgICAgdGhpcy5wcmludEJ1ZmZlci5wdXNoKFxuICAgICAgICAuLi4oQXJyYXkuaXNBcnJheShjb250ZXh0T2JqKSA/IGNvbnRleHRPYmogOiBbY29udGV4dE9ial0pLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4geyBjb2RlLCBwYXJzZXIsIGl0ZW0gfTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLnByaW50RG8oKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9ldmVudHMudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19