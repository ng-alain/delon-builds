/**
 * @fileoverview added by tsickle
 * Generated from: lodop.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { LazyService } from '@delon/util/other';
import { of, Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/other";
import * as i2 from "@delon/util/config";
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
        this.defaultConfig = (/** @type {?} */ (configSrv.merge('lodop', {
            url: '//localhost:8443/CLodopfuncs.js',
            name: 'CLODOP',
            companyName: '',
            checkMaxCount: 100,
        })));
        this.cog = this.defaultConfig;
    }
    /**
     * Get or set configuration, **Note:** Resetting will invert and reload script resources
     *
     * 获取或重新设置配置，**注：**重新设置会倒置重新加载脚本资源
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
     * Event change notification
     *
     * 事件变更通知
     * @return {?}
     */
    get events() {
        return this._events.asObservable();
    }
    /**
     * Get lodop object
     *
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
     * Get printer list
     *
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
     * Reset lodop object
     *
     * 重置 lodop 对象
     * @return {?}
     */
    reset() {
        this._lodop = null;
        this.pending = false;
        this.request();
    }
    /**
     * Attach code to the `lodop` object, the string class supports dynamic parameters of `{{key}}`,
     * **Note:** The code refers to the string data generated by the print design
     *
     * 附加代码至 `lodop` 对象上，字符串类支持 `{{key}}` 的动态参数，**注：** 代码是指打印设计所产生字符串数据
     * @param {?} code
     * @param {?=} contextObj
     * @param {?=} parser
     * @return {?}
     */
    attachCode(code, contextObj, parser) {
        this.check();
        if (!parser)
            parser = /LODOP\.([^(]+)\(([^\n]+)?\);/i;
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
     * The code is automatically returned after opening the print design and closing,
     * **Note:** Automatically listen for the `On_Return` event, and it will be removed after running
     *
     * 打开打印设计关闭后自动返回代码，**注：** 自动监听 `On_Return` 事件，运行后会移除
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
     * Print immediately, generally used for batch printing
     *
     * 立即打印，一般用于批量套打
     * @param {?} code
     * @param {?} contextObj
     * @param {?=} parser
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
/** @nocollapse */ LodopService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LodopService_Factory() { return new LodopService(i0.ɵɵinject(i1.LazyService), i0.ɵɵinject(i2.AlainConfigService)); }, token: LodopService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9sb2RvcC9sb2RvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhELE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBSS9DLE1BQU0sT0FBTyxZQUFZOzs7OztJQVN2QixZQUFvQixTQUFzQixFQUFFLFNBQTZCO1FBQXJELGNBQVMsR0FBVCxTQUFTLENBQWE7UUFObEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQWlCLElBQUksQ0FBQztRQUM1QixVQUFLLEdBQUcsSUFBSSxPQUFPLEVBQWUsQ0FBQztRQUNuQyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQW9CLENBQUM7UUFDMUMsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFHOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxtQkFBQSxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUM1QyxHQUFHLEVBQUUsaUNBQWlDO1lBQ3RDLElBQUksRUFBRSxRQUFRO1lBQ2QsV0FBVyxFQUFFLEVBQUU7WUFDZixhQUFhLEVBQUUsR0FBRztTQUNuQixDQUFDLEVBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7O0lBT0QsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBQ0QsSUFBSSxHQUFHLENBQUMsS0FBdUI7UUFDN0IsSUFBSSxDQUFDLElBQUks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SUFFcEIsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluTG9kb3BDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExvZG9wLCBMb2RvcFByaW50UmVzdWx0LCBMb2RvcFJlc3VsdCB9IGZyb20gJy4vbG9kb3AudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExvZG9wU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZzogQWxhaW5Mb2RvcENvbmZpZztcbiAgcHJpdmF0ZSBfY29nOiBBbGFpbkxvZG9wQ29uZmlnO1xuICBwcml2YXRlIHBlbmRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbG9kb3A6IExvZG9wIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2luaXQgPSBuZXcgU3ViamVjdDxMb2RvcFJlc3VsdD4oKTtcbiAgcHJpdmF0ZSBfZXZlbnRzID0gbmV3IFN1YmplY3Q8TG9kb3BQcmludFJlc3VsdD4oKTtcbiAgcHJpdmF0ZSBwcmludEJ1ZmZlcjogYW55W10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjcmlwdFNydjogTGF6eVNlcnZpY2UsIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5kZWZhdWx0Q29uZmlnID0gY29uZmlnU3J2Lm1lcmdlKCdsb2RvcCcsIHtcbiAgICAgIHVybDogJy8vbG9jYWxob3N0Ojg0NDMvQ0xvZG9wZnVuY3MuanMnLFxuICAgICAgbmFtZTogJ0NMT0RPUCcsXG4gICAgICBjb21wYW55TmFtZTogJycsXG4gICAgICBjaGVja01heENvdW50OiAxMDAsXG4gICAgfSkhO1xuICAgIHRoaXMuY29nID0gdGhpcy5kZWZhdWx0Q29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBvciBzZXQgY29uZmlndXJhdGlvbiwgKipOb3RlOioqIFJlc2V0dGluZyB3aWxsIGludmVydCBhbmQgcmVsb2FkIHNjcmlwdCByZXNvdXJjZXNcbiAgICpcbiAgICog6I635Y+W5oiW6YeN5paw6K6+572u6YWN572u77yMKirms6jvvJoqKumHjeaWsOiuvue9ruS8muWAkue9rumHjeaWsOWKoOi9veiEmuacrOi1hOa6kFxuICAgKi9cbiAgZ2V0IGNvZygpOiBBbGFpbkxvZG9wQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29nO1xuICB9XG4gIHNldCBjb2codmFsdWU6IEFsYWluTG9kb3BDb25maWcpIHtcbiAgICB0aGlzLl9jb2cgPSB7XG4gICAgICAuLi50aGlzLmRlZmF1bHRDb25maWcsXG4gICAgICAuLi52YWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGNoYW5nZSBub3RpZmljYXRpb25cbiAgICpcbiAgICog5LqL5Lu25Y+Y5pu06YCa55+lXG4gICAqL1xuICBnZXQgZXZlbnRzKCk6IE9ic2VydmFibGU8TG9kb3BQcmludFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLl9ldmVudHMuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGxvZG9wIG9iamVjdFxuICAgKlxuICAgKiDojrflj5YgbG9kb3Ag5a+56LGhXG4gICAqL1xuICBnZXQgbG9kb3AoKTogT2JzZXJ2YWJsZTxMb2RvcFJlc3VsdD4ge1xuICAgIGlmICh0aGlzLl9sb2RvcCkgcmV0dXJuIG9mKHsgb2s6IHRydWUsIGxvZG9wOiB0aGlzLl9sb2RvcCB9IGFzIExvZG9wUmVzdWx0KTtcbiAgICBpZiAodGhpcy5wZW5kaW5nKSByZXR1cm4gdGhpcy5faW5pdC5hc09ic2VydmFibGUoKTtcblxuICAgIHRoaXMucmVxdWVzdCgpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2luaXQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHByaW50ZXIgbGlzdFxuICAgKlxuICAgKiDojrflj5bmiZPljbDmnLrliJfooahcbiAgICovXG4gIGdldCBwcmludGVyKCk6IHN0cmluZ1tdIHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgY29uc3QgcmV0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5fbG9kb3AhLkdFVF9QUklOVEVSX0NPVU5UKCk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICByZXQucHVzaCh0aGlzLl9sb2RvcCEuR0VUX1BSSU5URVJfTkFNRShpbmRleCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVjaygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2xvZG9wKSB0aHJvdyBuZXcgRXJyb3IoYOivt+WKoeW/heWFiOiwg+eUqCBsb2RvcCDojrflj5blr7nosaFgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVxdWVzdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xuXG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb2cudXJsfT9uYW1lPSR7dGhpcy5jb2cubmFtZX1gO1xuICAgIGxldCBjaGVja01heENvdW50ID0gdGhpcy5jb2cuY2hlY2tNYXhDb3VudCBhcyBudW1iZXI7XG4gICAgY29uc3Qgb25SZXNvbHZlID0gKHN0YXR1czogTnpTYWZlQW55LCBlcnJvcj86IHt9KSA9PiB7XG4gICAgICB0aGlzLl9pbml0Lm5leHQoe1xuICAgICAgICBvazogc3RhdHVzID09PSAnb2snLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGVycm9yLFxuICAgICAgICBsb2RvcDogdGhpcy5fbG9kb3AhLFxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcbiAgICAgIC0tY2hlY2tNYXhDb3VudDtcbiAgICAgIGlmICh0aGlzLl9sb2RvcCEud2Vic2t0ICYmIHRoaXMuX2xvZG9wIS53ZWJza3QucmVhZHlTdGF0ZSA9PT0gMSkge1xuICAgICAgICBvblJlc29sdmUoJ29rJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2hlY2tNYXhDb3VudCA8IDApIHtcbiAgICAgICAgICBvblJlc29sdmUoJ2NoZWNrLWxpbWl0Jyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2hlY2tTdGF0dXMoKSwgMTAwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5zY3JpcHRTcnYubG9hZFNjcmlwdCh1cmwpLnRoZW4oKHJlczogTnpTYWZlQW55KSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gJ29rJykge1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgb25SZXNvbHZlKCdzY3JpcHQtbG9hZC1lcnJvcicsIHJlc1swXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHdpbiA9IHdpbmRvdyBhcyBOelNhZmVBbnk7XG4gICAgICBpZiAod2luLmhhc093blByb3BlcnR5KHRoaXMuY29nLm5hbWUhKSkge1xuICAgICAgICB0aGlzLl9sb2RvcCA9IHdpblt0aGlzLmNvZy5uYW1lIV0gYXMgTG9kb3A7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fbG9kb3AgPT09IG51bGwpIHtcbiAgICAgICAgb25SZXNvbHZlKCdsb2FkLXZhcmlhYmxlLW5hbWUtZXJyb3InLCB7IG5hbWU6IHRoaXMuY29nLm5hbWUgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xvZG9wLlNFVF9MSUNFTlNFUyh0aGlzLmNvZy5jb21wYW55TmFtZSEsIHRoaXMuY29nLmxpY2Vuc2UhLCB0aGlzLmNvZy5saWNlbnNlQSwgdGhpcy5jb2cubGljZW5zZUIpO1xuICAgICAgY2hlY2tTdGF0dXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBsb2RvcCBvYmplY3RcbiAgICpcbiAgICog6YeN572uIGxvZG9wIOWvueixoVxuICAgKi9cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5fbG9kb3AgPSBudWxsO1xuICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgIHRoaXMucmVxdWVzdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaCBjb2RlIHRvIHRoZSBgbG9kb3BgIG9iamVjdCwgdGhlIHN0cmluZyBjbGFzcyBzdXBwb3J0cyBkeW5hbWljIHBhcmFtZXRlcnMgb2YgYHt7a2V5fX1gLFxuICAgKiAqKk5vdGU6KiogVGhlIGNvZGUgcmVmZXJzIHRvIHRoZSBzdHJpbmcgZGF0YSBnZW5lcmF0ZWQgYnkgdGhlIHByaW50IGRlc2lnblxuICAgKlxuICAgKiDpmYTliqDku6PnoIHoh7MgYGxvZG9wYCDlr7nosaHkuIrvvIzlrZfnrKbkuLLnsbvmlK/mjIEgYHt7a2V5fX1gIOeahOWKqOaAgeWPguaVsO+8jCoq5rOo77yaKiog5Luj56CB5piv5oyH5omT5Y2w6K6+6K6h5omA5Lqn55Sf5a2X56ym5Liy5pWw5o2uXG4gICAqL1xuICBhdHRhY2hDb2RlKGNvZGU6IHN0cmluZywgY29udGV4dE9iaj86IE56U2FmZUFueSwgcGFyc2VyPzogUmVnRXhwKTogdm9pZCB7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGlmICghcGFyc2VyKSBwYXJzZXIgPSAvTE9ET1BcXC4oW14oXSspXFwoKFteXFxuXSspP1xcKTsvaTtcbiAgICBjb2RlLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGFyc2VyIS5leGVjKGxpbmUudHJpbSgpKTtcbiAgICAgIGlmICghcmVzKSByZXR1cm47XG4gICAgICBjb25zdCBmbiA9IHRoaXMuX2xvZG9wIVtyZXNbMV1dO1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIGxldCBhcnI6IGFueVtdIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBmdW5jdGlvbi1jb25zdHJ1Y3RvclxuICAgICAgICAgIGNvbnN0IGZha2VGbiA9IG5ldyBGdW5jdGlvbihgcmV0dXJuIFske3Jlc1syXX1dYCk7XG4gICAgICAgICAgYXJyID0gZmFrZUZuKCk7XG4gICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICBpZiAoYXJyICE9IG51bGwgJiYgQXJyYXkuaXNBcnJheShhcnIpICYmIGNvbnRleHRPYmopIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcnJbaV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGFycltpXSA9IChhcnJbaV0gYXMgc3RyaW5nKS5yZXBsYWNlKC97eyguKj8pfX0vZywgKF9tYXRjaCwga2V5KSA9PiBjb250ZXh0T2JqW2tleS50cmltKCldIHx8ICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm4uYXBwbHkodGhpcy5fbG9kb3AsIGFyciEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjb2RlIGlzIGF1dG9tYXRpY2FsbHkgcmV0dXJuZWQgYWZ0ZXIgb3BlbmluZyB0aGUgcHJpbnQgZGVzaWduIGFuZCBjbG9zaW5nLFxuICAgKiAqKk5vdGU6KiogQXV0b21hdGljYWxseSBsaXN0ZW4gZm9yIHRoZSBgT25fUmV0dXJuYCBldmVudCwgYW5kIGl0IHdpbGwgYmUgcmVtb3ZlZCBhZnRlciBydW5uaW5nXG4gICAqXG4gICAqIOaJk+W8gOaJk+WNsOiuvuiuoeWFs+mXreWQjuiHquWKqOi/lOWbnuS7o+egge+8jCoq5rOo77yaKiog6Ieq5Yqo55uR5ZCsIGBPbl9SZXR1cm5gIOS6i+S7tu+8jOi/kOihjOWQjuS8muenu+mZpFxuICAgKi9cbiAgZGVzaWduKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGNvbnN0IHRpZCA9IHRoaXMuX2xvZG9wIS5QUklOVF9ERVNJR04oKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLl9sb2RvcCEuT25fUmV0dXJuID0gKHRhc2tJRDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAodGlkICE9PSB0YXNrSUQpIHJldHVybjtcbiAgICAgICAgdGhpcy5fbG9kb3AhLk9uX1JldHVybiA9IG51bGw7XG4gICAgICAgIHJlc29sdmUoJycgKyB2YWx1ZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIHByaXZhdGUgcHJpbnREbygpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcmludEJ1ZmZlci5zaGlmdCgpO1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuICAgIHRoaXMuYXR0YWNoQ29kZShkYXRhLmNvZGUsIGRhdGEuaXRlbSwgZGF0YS5wYXJzZXIpO1xuICAgIGNvbnN0IHRpZCA9IHRoaXMuX2xvZG9wIS5QUklOVCgpO1xuICAgIHRoaXMuX2xvZG9wIS5Pbl9SZXR1cm4gPSAodGFza0lEOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodGlkICE9PSB0YXNrSUQpIHJldHVybjtcbiAgICAgIHRoaXMuX2xvZG9wIS5Pbl9SZXR1cm4gPSBudWxsO1xuICAgICAgdGhpcy5fZXZlbnRzLm5leHQoe1xuICAgICAgICBvazogdmFsdWUgPT09IHRydWUsXG4gICAgICAgIGVycm9yOiB2YWx1ZSA9PT0gdHJ1ZSA/IG51bGwgOiB2YWx1ZSxcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcmludERvKCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmludCBpbW1lZGlhdGVseSwgZ2VuZXJhbGx5IHVzZWQgZm9yIGJhdGNoIHByaW50aW5nXG4gICAqXG4gICAqIOeri+WNs+aJk+WNsO+8jOS4gOiIrOeUqOS6juaJuemHj+Wll+aJk1xuICAgKi9cbiAgcHJpbnQoY29kZTogc3RyaW5nLCBjb250ZXh0T2JqOiB7fSB8IEFycmF5PHt9PiwgcGFyc2VyPzogUmVnRXhwKTogdm9pZCB7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGlmIChjb250ZXh0T2JqKSB7XG4gICAgICB0aGlzLnByaW50QnVmZmVyLnB1c2goXG4gICAgICAgIC4uLihBcnJheS5pc0FycmF5KGNvbnRleHRPYmopID8gY29udGV4dE9iaiA6IFtjb250ZXh0T2JqXSkubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiB7IGNvZGUsIHBhcnNlciwgaXRlbSB9O1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMucHJpbnREbygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2V2ZW50cy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=