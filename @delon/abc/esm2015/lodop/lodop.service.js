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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvbG9kb3AvIiwic291cmNlcyI6WyJsb2RvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTdDLE1BQU07Ozs7O0lBT0osWUFBb0IsTUFBbUIsRUFBVSxTQUFzQjtRQUFuRCxXQUFNLEdBQU4sTUFBTSxDQUFhO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBYTt1QkFMckQsS0FBSztzQkFDQyxJQUFJO3FCQUNVLElBQUksT0FBTyxFQUFlO3VCQUNuQixJQUFJLE9BQU8sRUFBb0I7MkJBd0svQyxFQUFFO1FBcks3QixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztLQUNuQjs7Ozs7OztJQU9ELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztLQUNsQjs7Ozs7SUFDRCxJQUFJLEdBQUcsQ0FBQyxLQUFrQjtRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3ZCO1lBQ0UsR0FBRyxFQUFFLHVDQUF1QztZQUM1QyxJQUFJLEVBQUUsUUFBUTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsYUFBYSxFQUFFLEdBQUc7U0FDbkIsRUFDRCxJQUFJLENBQUMsTUFBTSxFQUNYLEtBQUssQ0FDTixDQUFDO0tBQ0g7Ozs7O0lBR0QsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3BDOzs7O0lBRU8sS0FBSztRQUNYLElBQUksQ0FBQyxJQUFJLENB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QyxJQUFJLENBQUMsRUFBRTtnQkFDcEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDL0IsQ0FBQyxDQUNILENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNoQjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDNUI7OztZQTFORixVQUFVOzs7O1lBSEYsV0FBVztZQUhYLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgTG9kb3AsIExvZG9wUmVzdWx0LCBMb2RvcFByaW50UmVzdWx0IH0gZnJvbSAnLi9sb2RvcC50eXBlcyc7XHJcbmltcG9ydCB7IExvZG9wQ29uZmlnIH0gZnJvbSAnLi9sb2RvcC5jb25maWcnO1xyXG5cclxuLy8gVE9ETzogem9uZVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2RvcFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX2NvZzogTG9kb3BDb25maWc7XHJcbiAgcHJpdmF0ZSBwZW5kaW5nID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfbG9kb3A6IExvZG9wID0gbnVsbDtcclxuICBwcml2YXRlIF9pbml0OiBTdWJqZWN0PExvZG9wUmVzdWx0PiA9IG5ldyBTdWJqZWN0PExvZG9wUmVzdWx0PigpO1xyXG4gIHByaXZhdGUgX2V2ZW50czogU3ViamVjdDxMb2RvcFByaW50UmVzdWx0PiA9IG5ldyBTdWJqZWN0PExvZG9wUHJpbnRSZXN1bHQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVmQ29nOiBMb2RvcENvbmZpZywgcHJpdmF0ZSBzY3JpcHRTcnY6IExhenlTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmNvZyA9IGRlZkNvZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOiOt+WPluaIlumHjeaWsOiuvue9rumFjee9rlxyXG4gICAqXHJcbiAgICogKirms6jvvJoqKumHjeaWsOiuvue9ruS8muWAkue9rumHjeaWsOWKoOi9veiEmuacrOi1hOa6kFxyXG4gICAqL1xyXG4gIGdldCBjb2coKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29nO1xyXG4gIH1cclxuICBzZXQgY29nKHZhbHVlOiBMb2RvcENvbmZpZykge1xyXG4gICAgdGhpcy5fY29nID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAge1xyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vbG9jYWxob3N0Ojg0NDMvQ0xvZG9wZnVuY3MuanMnLFxyXG4gICAgICAgIG5hbWU6ICdDTE9ET1AnLFxyXG4gICAgICAgIGNvbXBhbnlOYW1lOiAnJyxcclxuICAgICAgICBjaGVja01heENvdW50OiAxMDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXMuZGVmQ29nLFxyXG4gICAgICB2YWx1ZSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKiog5LqL5Lu25Y+Y5pu06YCa55+lICovXHJcbiAgZ2V0IGV2ZW50cygpOiBPYnNlcnZhYmxlPExvZG9wUHJpbnRSZXN1bHQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9ldmVudHMuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrKCkge1xyXG4gICAgaWYgKCF0aGlzLl9sb2RvcCkgdGhyb3cgbmV3IEVycm9yKGDor7fliqHlv4XlhYjosIPnlKggbG9kb3Ag6I635Y+W5a+56LGhYCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlcXVlc3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuY29nLnVybH0/bmFtZT0ke3RoaXMuY29nLm5hbWV9YDtcclxuICAgIGxldCBjaGVja01heENvdW50ID0gdGhpcy5jb2cuY2hlY2tNYXhDb3VudDtcclxuICAgIGNvbnN0IG9uUmVzb2x2ZSA9IChzdGF0dXMsIGVycm9yPzogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuX2luaXQubmV4dCh7XHJcbiAgICAgICAgb2s6IHN0YXR1cyA9PT0gJ29rJyxcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgbG9kb3A6IHRoaXMuX2xvZG9wLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcclxuICAgICAgLS1jaGVja01heENvdW50O1xyXG4gICAgICBpZiAodGhpcy5fbG9kb3Aud2Vic2t0ICYmIHRoaXMuX2xvZG9wLndlYnNrdC5yZWFkeVN0YXRlID09PSAxKSB7XHJcbiAgICAgICAgb25SZXNvbHZlKCdvaycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjaGVja01heENvdW50IDwgMCkge1xyXG4gICAgICAgICAgb25SZXNvbHZlKCdjaGVjay1saW1pdCcpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNoZWNrU3RhdHVzKCksIDEwMCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zY3JpcHRTcnYubG9hZFNjcmlwdCh1cmwpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLnN0YXR1cyAhPT0gJ29rJykge1xyXG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIG9uUmVzb2x2ZSgnc2NyaXB0LWxvYWQtZXJyb3InLCByZXNbMF0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9sb2RvcCA9XHJcbiAgICAgICAgd2luZG93Lmhhc093blByb3BlcnR5KHRoaXMuY29nLm5hbWUpICYmXHJcbiAgICAgICAgKHdpbmRvd1t0aGlzLmNvZy5uYW1lXSBhcyBMb2RvcCk7XHJcbiAgICAgIGlmICh0aGlzLl9sb2RvcCA9PT0gbnVsbCkge1xyXG4gICAgICAgIG9uUmVzb2x2ZSgnbG9hZC12YXJpYWJsZS1uYW1lLWVycm9yJywgeyBuYW1lOiB0aGlzLmNvZy5uYW1lIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9sb2RvcC5TRVRfTElDRU5TRVMoXHJcbiAgICAgICAgdGhpcy5jb2cuY29tcGFueU5hbWUsXHJcbiAgICAgICAgdGhpcy5jb2cubGljZW5zZSxcclxuICAgICAgICB0aGlzLmNvZy5saWNlbnNlQSxcclxuICAgICAgICB0aGlzLmNvZy5saWNlbnNlQixcclxuICAgICAgKTtcclxuICAgICAgY2hlY2tTdGF0dXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIOmHjee9riBsb2RvcCDlr7nosaEgKi9cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuX2xvZG9wID0gbnVsbDtcclxuICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZXF1ZXN0KCk7XHJcbiAgfVxyXG5cclxuICAvKiog6I635Y+WIGxvZG9wIOWvueixoSAqL1xyXG4gIGdldCBsb2RvcCgpOiBPYnNlcnZhYmxlPExvZG9wUmVzdWx0PiB7XHJcbiAgICBpZiAodGhpcy5fbG9kb3ApIHJldHVybiBvZig8TG9kb3BSZXN1bHQ+eyBvazogdHJ1ZSwgbG9kb3A6IHRoaXMuX2xvZG9wIH0pO1xyXG4gICAgaWYgKHRoaXMucGVuZGluZykgcmV0dXJuIHRoaXMuX2luaXQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gICAgdGhpcy5yZXF1ZXN0KCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2luaXQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvKiog6I635Y+W5omT5Y2w5py65YiX6KGoICovXHJcbiAgZ2V0IHByaW50ZXIoKTogc3RyaW5nW10ge1xyXG4gICAgdGhpcy5jaGVjaygpO1xyXG4gICAgY29uc3QgcmV0OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgY29uc3QgY291bnQgPSB0aGlzLl9sb2RvcC5HRVRfUFJJTlRFUl9DT1VOVCgpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgIHJldC5wdXNoKHRoaXMuX2xvZG9wLkdFVF9QUklOVEVSX05BTUUoaW5kZXgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDpmYTliqDku6PnoIHoh7MgYGxvZG9wYCDlr7nosaHkuIrvvIzlrZfnrKbkuLLnsbvmlK/mjIEgYHt7a2V5fX1gIOeahOWKqOaAgeWPguaVsFxyXG4gICAqXHJcbiAgICogKirms6jvvJoqKiDku6PnoIHmmK/mjIfmiZPljbDorr7orqHmiYDkuqfnlJ/lrZfnrKbkuLLmlbDmja5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb2RlIOS7o+eggVxyXG4gICAqIEBwYXJhbSBjb250ZXh0T2JqIOWKqOaAgeWPguaVsOS4iuS4i+aWh+WvueixoVxyXG4gICAqIEBwYXJhbSBwYXJzZXIg6Ieq5a6a5LmJ6Kej5p6Q6KGo6L6+5byP77yM6buY6K6k77yaYC9MT0RPUFxcLihbXihdKylcXCgoW15cXG5dKylcXCk7L2lgXHJcbiAgICovXHJcbiAgYXR0YWNoQ29kZShjb2RlOiBzdHJpbmcsIGNvbnRleHRPYmo/OiBPYmplY3QsIHBhcnNlcj86IFJlZ0V4cCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVjaygpO1xyXG4gICAgaWYgKCFwYXJzZXIpIHBhcnNlciA9IC9MT0RPUFxcLihbXihdKylcXCgoW15cXG5dKylcXCk7L2k7XHJcbiAgICBjb2RlLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGxpbmUgPT4ge1xyXG4gICAgICBjb25zdCByZXMgPSBwYXJzZXIuZXhlYyhsaW5lLnRyaW0oKSk7XHJcbiAgICAgIGlmICghcmVzKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IGZuID0gdGhpcy5fbG9kb3BbcmVzWzFdXTtcclxuICAgICAgaWYgKGZuKSB7XHJcbiAgICAgICAgbGV0IGFycjogQXJyYXk8YW55PjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgZmFrZUZuID0gbmV3IEZ1bmN0aW9uKGByZXR1cm4gWyR7cmVzWzJdfV1gKTtcclxuICAgICAgICAgIGFyciA9IGZha2VGbigpIGFzIGFueVtdO1xyXG4gICAgICAgIH0gY2F0Y2gge31cclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSAmJiBjb250ZXh0T2JqKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGFycltpXSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICBhcnJbaV0gPSBhcnJbaV0ucmVwbGFjZShcclxuICAgICAgICAgICAgICAgIC97eyguKj8pfX0vZyxcclxuICAgICAgICAgICAgICAgIChtYXRjaCwga2V5KSA9PiBjb250ZXh0T2JqW2tleS50cmltKCldIHx8ICcnLFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm4uYXBwbHkodGhpcy5fbG9kb3AsIGFycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5omT5byA5omT5Y2w6K6+6K6h5YWz6Zet5ZCO6Ieq5Yqo6L+U5Zue5Luj56CBXHJcbiAgICpcclxuICAgKiAqKuazqO+8mioqIOiHquWKqOebkeWQrCBgT25fUmV0dXJuYCDkuovku7bvvIzov5DooYzlkI7kvJrnp7vpmaRcclxuICAgKi9cclxuICBkZXNpZ24oKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHRoaXMuY2hlY2soKTtcclxuICAgIGNvbnN0IHRpZCA9IHRoaXMuX2xvZG9wLlBSSU5UX0RFU0lHTigpO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICB0aGlzLl9sb2RvcC5Pbl9SZXR1cm4gPSAodGFza0lEOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKHRpZCAhPT0gdGFza0lEKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5fbG9kb3AuT25fUmV0dXJuID0gbnVsbDtcclxuICAgICAgICByZXNvbHZlKCcnICsgdmFsdWUpO1xyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByaW50QnVmZmVyOiBhbnlbXSA9IFtdO1xyXG4gIHByaXZhdGUgcHJpbnREbygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnByaW50QnVmZmVyLnNoaWZ0KCk7XHJcbiAgICBpZiAoIWRhdGEpIHJldHVybjtcclxuICAgIHRoaXMuYXR0YWNoQ29kZShkYXRhLmNvZGUsIGRhdGEuaXRlbSwgZGF0YS5wYXJzZXIpO1xyXG4gICAgY29uc3QgdGlkID0gdGhpcy5fbG9kb3AuUFJJTlQoKTtcclxuICAgIHRoaXMuX2xvZG9wLk9uX1JldHVybiA9ICh0YXNrSUQ6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKHRpZCAhPT0gdGFza0lEKSByZXR1cm47XHJcbiAgICAgIHRoaXMuX2xvZG9wLk9uX1JldHVybiA9IG51bGw7XHJcbiAgICAgIHRoaXMuX2V2ZW50cy5uZXh0KFxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAgICA8TG9kb3BQcmludFJlc3VsdD57XHJcbiAgICAgICAgICAgIG9rOiB2YWx1ZSA9PT0gdHJ1ZSxcclxuICAgICAgICAgICAgZXJyb3I6IHZhbHVlID09PSB0cnVlID8gbnVsbCA6IHZhbHVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgKSxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5wcmludERvKCk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog56uL5Y2z5omT5Y2w77yM5LiA6Iis55So5LqO5om56YeP5aWX5omTXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29kZSDku6PnoIFcclxuICAgKiBAcGFyYW0gY29udGV4dE9iaiDliqjmgIHlj4LmlbDkuIrkuIvmloflr7nosaFcclxuICAgKiBAcGFyYW0gcGFyc2VyIOiHquWumuS5ieino+aekOihqOi+vuW8j++8jOm7mOiupO+8mmAvTE9ET1BcXC4oW14oXSspXFwoKFteXFxuXSspXFwpOy9pYFxyXG4gICAqL1xyXG4gIHByaW50KGNvZGU6IHN0cmluZywgY29udGV4dE9iajogT2JqZWN0IHwgT2JqZWN0W10sIHBhcnNlcj86IFJlZ0V4cCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVjaygpO1xyXG4gICAgaWYgKGNvbnRleHRPYmopIHtcclxuICAgICAgdGhpcy5wcmludEJ1ZmZlci5wdXNoKFxyXG4gICAgICAgIC4uLihBcnJheS5pc0FycmF5KGNvbnRleHRPYmopID8gY29udGV4dE9iaiA6IFtjb250ZXh0T2JqXSkubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHsgY29kZSwgcGFyc2VyLCBpdGVtIH07XHJcbiAgICAgICAgfSksXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnByaW50RG8oKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5faW5pdC51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fZXZlbnRzLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==