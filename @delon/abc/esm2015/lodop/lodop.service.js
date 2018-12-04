/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { LazyService } from '@delon/util';
import { LodopConfig } from './lodop.config';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbG9kb3AvIiwic291cmNlcyI6WyJsb2RvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTdDLE1BQU07Ozs7O0lBT0osWUFBb0IsTUFBbUIsRUFBVSxTQUFzQjtRQUFuRCxXQUFNLEdBQU4sTUFBTSxDQUFhO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBYTt1QkFMckQsS0FBSztzQkFDQyxJQUFJO3FCQUNVLElBQUksT0FBTyxFQUFlO3VCQUNuQixJQUFJLE9BQU8sRUFBb0I7MkJBd0svQyxFQUFFO1FBcks3QixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztLQUNuQjs7Ozs7OztJQU9ELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztLQUNsQjs7Ozs7SUFDRCxJQUFJLEdBQUcsQ0FBQyxLQUFrQjtRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3ZCO1lBQ0UsR0FBRyxFQUFFLHVDQUF1QztZQUM1QyxJQUFJLEVBQUUsUUFBUTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsYUFBYSxFQUFFLEdBQUc7U0FDbkIsRUFDRCxJQUFJLENBQUMsTUFBTSxFQUNYLEtBQUssQ0FDTixDQUFDO0tBQ0g7Ozs7O0lBR0QsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3BDOzs7O0lBRU8sS0FBSztRQUNYLElBQUksQ0FBQyxJQUFJLENB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QyxJQUFJLENBQUMsRUFBRTtnQkFDcEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDL0IsQ0FBQyxDQUNILENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNoQjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDNUI7OztZQTFORixVQUFVOzs7O1lBSEYsV0FBVztZQUhYLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBMb2RvcCwgTG9kb3BSZXN1bHQsIExvZG9wUHJpbnRSZXN1bHQgfSBmcm9tICcuL2xvZG9wLnR5cGVzJztcbmltcG9ydCB7IExvZG9wQ29uZmlnIH0gZnJvbSAnLi9sb2RvcC5jb25maWcnO1xuXG4vLyBUT0RPOiB6b25lXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9kb3BTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfY29nOiBMb2RvcENvbmZpZztcbiAgcHJpdmF0ZSBwZW5kaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgX2xvZG9wOiBMb2RvcCA9IG51bGw7XG4gIHByaXZhdGUgX2luaXQ6IFN1YmplY3Q8TG9kb3BSZXN1bHQ+ID0gbmV3IFN1YmplY3Q8TG9kb3BSZXN1bHQ+KCk7XG4gIHByaXZhdGUgX2V2ZW50czogU3ViamVjdDxMb2RvcFByaW50UmVzdWx0PiA9IG5ldyBTdWJqZWN0PExvZG9wUHJpbnRSZXN1bHQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWZDb2c6IExvZG9wQ29uZmlnLCBwcml2YXRlIHNjcmlwdFNydjogTGF6eVNlcnZpY2UpIHtcbiAgICB0aGlzLmNvZyA9IGRlZkNvZztcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bmiJbph43mlrDorr7nva7phY3nva5cbiAgICpcbiAgICogKirms6jvvJoqKumHjeaWsOiuvue9ruS8muWAkue9rumHjeaWsOWKoOi9veiEmuacrOi1hOa6kFxuICAgKi9cbiAgZ2V0IGNvZygpIHtcbiAgICByZXR1cm4gdGhpcy5fY29nO1xuICB9XG4gIHNldCBjb2codmFsdWU6IExvZG9wQ29uZmlnKSB7XG4gICAgdGhpcy5fY29nID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9sb2NhbGhvc3Q6ODQ0My9DTG9kb3BmdW5jcy5qcycsXG4gICAgICAgIG5hbWU6ICdDTE9ET1AnLFxuICAgICAgICBjb21wYW55TmFtZTogJycsXG4gICAgICAgIGNoZWNrTWF4Q291bnQ6IDEwMCxcbiAgICAgIH0sXG4gICAgICB0aGlzLmRlZkNvZyxcbiAgICAgIHZhbHVlLFxuICAgICk7XG4gIH1cblxuICAvKiog5LqL5Lu25Y+Y5pu06YCa55+lICovXG4gIGdldCBldmVudHMoKTogT2JzZXJ2YWJsZTxMb2RvcFByaW50UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50cy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2soKSB7XG4gICAgaWYgKCF0aGlzLl9sb2RvcCkgdGhyb3cgbmV3IEVycm9yKGDor7fliqHlv4XlhYjosIPnlKggbG9kb3Ag6I635Y+W5a+56LGhYCk7XG4gIH1cblxuICBwcml2YXRlIHJlcXVlc3QoKTogdm9pZCB7XG4gICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcblxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuY29nLnVybH0/bmFtZT0ke3RoaXMuY29nLm5hbWV9YDtcbiAgICBsZXQgY2hlY2tNYXhDb3VudCA9IHRoaXMuY29nLmNoZWNrTWF4Q291bnQ7XG4gICAgY29uc3Qgb25SZXNvbHZlID0gKHN0YXR1cywgZXJyb3I/OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuX2luaXQubmV4dCh7XG4gICAgICAgIG9rOiBzdGF0dXMgPT09ICdvaycsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZXJyb3IsXG4gICAgICAgIGxvZG9wOiB0aGlzLl9sb2RvcCxcbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgY2hlY2tTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAtLWNoZWNrTWF4Q291bnQ7XG4gICAgICBpZiAodGhpcy5fbG9kb3Aud2Vic2t0ICYmIHRoaXMuX2xvZG9wLndlYnNrdC5yZWFkeVN0YXRlID09PSAxKSB7XG4gICAgICAgIG9uUmVzb2x2ZSgnb2snKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjaGVja01heENvdW50IDwgMCkge1xuICAgICAgICAgIG9uUmVzb2x2ZSgnY2hlY2stbGltaXQnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjaGVja1N0YXR1cygpLCAxMDApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnNjcmlwdFNydi5sb2FkU2NyaXB0KHVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gJ29rJykge1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgb25SZXNvbHZlKCdzY3JpcHQtbG9hZC1lcnJvcicsIHJlc1swXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xvZG9wID1cbiAgICAgICAgd2luZG93Lmhhc093blByb3BlcnR5KHRoaXMuY29nLm5hbWUpICYmXG4gICAgICAgICh3aW5kb3dbdGhpcy5jb2cubmFtZV0gYXMgTG9kb3ApO1xuICAgICAgaWYgKHRoaXMuX2xvZG9wID09PSBudWxsKSB7XG4gICAgICAgIG9uUmVzb2x2ZSgnbG9hZC12YXJpYWJsZS1uYW1lLWVycm9yJywgeyBuYW1lOiB0aGlzLmNvZy5uYW1lIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9sb2RvcC5TRVRfTElDRU5TRVMoXG4gICAgICAgIHRoaXMuY29nLmNvbXBhbnlOYW1lLFxuICAgICAgICB0aGlzLmNvZy5saWNlbnNlLFxuICAgICAgICB0aGlzLmNvZy5saWNlbnNlQSxcbiAgICAgICAgdGhpcy5jb2cubGljZW5zZUIsXG4gICAgICApO1xuICAgICAgY2hlY2tTdGF0dXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiDph43nva4gbG9kb3Ag5a+56LGhICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX2xvZG9wID0gbnVsbDtcbiAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnJlcXVlc3QoKTtcbiAgfVxuXG4gIC8qKiDojrflj5YgbG9kb3Ag5a+56LGhICovXG4gIGdldCBsb2RvcCgpOiBPYnNlcnZhYmxlPExvZG9wUmVzdWx0PiB7XG4gICAgaWYgKHRoaXMuX2xvZG9wKSByZXR1cm4gb2YoPExvZG9wUmVzdWx0Pnsgb2s6IHRydWUsIGxvZG9wOiB0aGlzLl9sb2RvcCB9KTtcbiAgICBpZiAodGhpcy5wZW5kaW5nKSByZXR1cm4gdGhpcy5faW5pdC5hc09ic2VydmFibGUoKTtcblxuICAgIHRoaXMucmVxdWVzdCgpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2luaXQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiog6I635Y+W5omT5Y2w5py65YiX6KGoICovXG4gIGdldCBwcmludGVyKCk6IHN0cmluZ1tdIHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgY29uc3QgcmV0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5fbG9kb3AuR0VUX1BSSU5URVJfQ09VTlQoKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgIHJldC5wdXNoKHRoaXMuX2xvZG9wLkdFVF9QUklOVEVSX05BTUUoaW5kZXgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiDpmYTliqDku6PnoIHoh7MgYGxvZG9wYCDlr7nosaHkuIrvvIzlrZfnrKbkuLLnsbvmlK/mjIEgYHt7a2V5fX1gIOeahOWKqOaAgeWPguaVsFxuICAgKlxuICAgKiAqKuazqO+8mioqIOS7o+eggeaYr+aMh+aJk+WNsOiuvuiuoeaJgOS6p+eUn+Wtl+espuS4suaVsOaNrlxuICAgKlxuICAgKiBAcGFyYW0gY29kZSDku6PnoIFcbiAgICogQHBhcmFtIGNvbnRleHRPYmog5Yqo5oCB5Y+C5pWw5LiK5LiL5paH5a+56LGhXG4gICAqIEBwYXJhbSBwYXJzZXIg6Ieq5a6a5LmJ6Kej5p6Q6KGo6L6+5byP77yM6buY6K6k77yaYC9MT0RPUFxcLihbXihdKylcXCgoW15cXG5dKylcXCk7L2lgXG4gICAqL1xuICBhdHRhY2hDb2RlKGNvZGU6IHN0cmluZywgY29udGV4dE9iaj86IE9iamVjdCwgcGFyc2VyPzogUmVnRXhwKTogdm9pZCB7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGlmICghcGFyc2VyKSBwYXJzZXIgPSAvTE9ET1BcXC4oW14oXSspXFwoKFteXFxuXSspXFwpOy9pO1xuICAgIGNvZGUuc3BsaXQoJ1xcbicpLmZvckVhY2gobGluZSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXJzZXIuZXhlYyhsaW5lLnRyaW0oKSk7XG4gICAgICBpZiAoIXJlcykgcmV0dXJuO1xuICAgICAgY29uc3QgZm4gPSB0aGlzLl9sb2RvcFtyZXNbMV1dO1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIGxldCBhcnI6IEFycmF5PGFueT47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZmFrZUZuID0gbmV3IEZ1bmN0aW9uKGByZXR1cm4gWyR7cmVzWzJdfV1gKTtcbiAgICAgICAgICBhcnIgPSBmYWtlRm4oKSBhcyBhbnlbXTtcbiAgICAgICAgfSBjYXRjaCB7fVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFycikgJiYgY29udGV4dE9iaikge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFycltpXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgYXJyW2ldID0gYXJyW2ldLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgL3t7KC4qPyl9fS9nLFxuICAgICAgICAgICAgICAgIChtYXRjaCwga2V5KSA9PiBjb250ZXh0T2JqW2tleS50cmltKCldIHx8ICcnLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmbi5hcHBseSh0aGlzLl9sb2RvcCwgYXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmiZPlvIDmiZPljbDorr7orqHlhbPpl63lkI7oh6rliqjov5Tlm57ku6PnoIFcbiAgICpcbiAgICogKirms6jvvJoqKiDoh6rliqjnm5HlkKwgYE9uX1JldHVybmAg5LqL5Lu277yM6L+Q6KGM5ZCO5Lya56e76ZmkXG4gICAqL1xuICBkZXNpZ24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgY29uc3QgdGlkID0gdGhpcy5fbG9kb3AuUFJJTlRfREVTSUdOKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5fbG9kb3AuT25fUmV0dXJuID0gKHRhc2tJRDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAodGlkICE9PSB0YXNrSUQpIHJldHVybjtcbiAgICAgICAgdGhpcy5fbG9kb3AuT25fUmV0dXJuID0gbnVsbDtcbiAgICAgICAgcmVzb2x2ZSgnJyArIHZhbHVlKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHByaW50QnVmZmVyOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIHByaW50RG8oKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucHJpbnRCdWZmZXIuc2hpZnQoKTtcbiAgICBpZiAoIWRhdGEpIHJldHVybjtcbiAgICB0aGlzLmF0dGFjaENvZGUoZGF0YS5jb2RlLCBkYXRhLml0ZW0sIGRhdGEucGFyc2VyKTtcbiAgICBjb25zdCB0aWQgPSB0aGlzLl9sb2RvcC5QUklOVCgpO1xuICAgIHRoaXMuX2xvZG9wLk9uX1JldHVybiA9ICh0YXNrSUQ6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh0aWQgIT09IHRhc2tJRCkgcmV0dXJuO1xuICAgICAgdGhpcy5fbG9kb3AuT25fUmV0dXJuID0gbnVsbDtcbiAgICAgIHRoaXMuX2V2ZW50cy5uZXh0KFxuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIDxMb2RvcFByaW50UmVzdWx0PntcbiAgICAgICAgICAgIG9rOiB2YWx1ZSA9PT0gdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yOiB2YWx1ZSA9PT0gdHJ1ZSA/IG51bGwgOiB2YWx1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICksXG4gICAgICApO1xuICAgICAgdGhpcy5wcmludERvKCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnq4vljbPmiZPljbDvvIzkuIDoiKznlKjkuo7mibnph4/lpZfmiZNcbiAgICpcbiAgICogQHBhcmFtIGNvZGUg5Luj56CBXG4gICAqIEBwYXJhbSBjb250ZXh0T2JqIOWKqOaAgeWPguaVsOS4iuS4i+aWh+WvueixoVxuICAgKiBAcGFyYW0gcGFyc2VyIOiHquWumuS5ieino+aekOihqOi+vuW8j++8jOm7mOiupO+8mmAvTE9ET1BcXC4oW14oXSspXFwoKFteXFxuXSspXFwpOy9pYFxuICAgKi9cbiAgcHJpbnQoY29kZTogc3RyaW5nLCBjb250ZXh0T2JqOiBPYmplY3QgfCBPYmplY3RbXSwgcGFyc2VyPzogUmVnRXhwKTogdm9pZCB7XG4gICAgdGhpcy5jaGVjaygpO1xuICAgIGlmIChjb250ZXh0T2JqKSB7XG4gICAgICB0aGlzLnByaW50QnVmZmVyLnB1c2goXG4gICAgICAgIC4uLihBcnJheS5pc0FycmF5KGNvbnRleHRPYmopID8gY29udGV4dE9iaiA6IFtjb250ZXh0T2JqXSkubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiB7IGNvZGUsIHBhcnNlciwgaXRlbSB9O1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMucHJpbnREbygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2V2ZW50cy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=