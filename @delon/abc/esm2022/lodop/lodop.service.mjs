import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/other";
import * as i2 from "@delon/util/config";
class LodopService {
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
            checkMaxCount: 100
        });
        this.cog = this.defaultConfig;
    }
    /**
     * Get or set configuration, **Note:** Resetting will invert and reload script resources
     *
     * 获取或重新设置配置，**注：**重新设置会倒置重新加载脚本资源
     */
    get cog() {
        return this._cog;
    }
    set cog(value) {
        this._cog = {
            ...this.defaultConfig,
            ...value
        };
    }
    /**
     * Event change notification
     *
     * 事件变更通知
     */
    get events() {
        return this._events.asObservable();
    }
    /**
     * Get lodop object
     *
     * 获取 lodop 对象
     */
    get lodop() {
        if (this._lodop)
            return of({ ok: true, lodop: this._lodop });
        if (this.pending)
            return this._init.asObservable();
        this.request();
        return this._init.asObservable();
    }
    /**
     * Get printer list
     *
     * 获取打印机列表
     */
    get printer() {
        this.check();
        const ret = [];
        const count = this._lodop.GET_PRINTER_COUNT();
        for (let index = 0; index < count; index++) {
            ret.push(this._lodop.GET_PRINTER_NAME(index));
        }
        return ret;
    }
    check() {
        if (!this._lodop)
            throw new Error(`请务必先调用 lodop 获取对象`);
    }
    request() {
        this.pending = true;
        const url = `${this.cog.url}?name=${this.cog.name}`;
        let checkMaxCount = this.cog.checkMaxCount;
        const onResolve = (status, error) => {
            this._init.next({
                ok: status === 'ok',
                status,
                error,
                lodop: this._lodop
            });
        };
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
            const win = window;
            if (win.hasOwnProperty(this.cog.name)) {
                this._lodop = win[this.cog.name];
            }
            if (this._lodop === null) {
                onResolve('load-variable-name-error', { name: this.cog.name });
                return;
            }
            this._lodop.SET_LICENSES(this.cog.companyName, this.cog.license, this.cog.licenseA, this.cog.licenseB);
            checkStatus();
        });
    }
    /**
     * Reset lodop object
     *
     * 重置 lodop 对象
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
     */
    attachCode(code, contextObj, parser) {
        this.check();
        if (!parser)
            parser = /LODOP\.([^(]+)\(([^\n]+)?\);/i;
        code.split('\n').forEach(line => {
            const res = parser.exec(line.trim());
            if (!res)
                return;
            const fn = this._lodop[res[1]];
            if (fn) {
                let arr = null;
                try {
                    const fakeFn = new Function(`return [${res[2]}]`);
                    arr = fakeFn();
                }
                catch { }
                if (arr != null && Array.isArray(arr) && contextObj) {
                    for (let i = 0; i < arr.length; i++) {
                        if (typeof arr[i] === 'string') {
                            arr[i] = arr[i].replace(/{{(.*?)}}/g, (_match, key) => contextObj[key.trim()] || '');
                        }
                    }
                }
                fn.apply(this._lodop, arr);
            }
        });
    }
    /**
     * The code is automatically returned after opening the print design and closing,
     * **Note:** Automatically listen for the `On_Return` event, and it will be removed after running
     *
     * 打开打印设计关闭后自动返回代码，**注：** 自动监听 `On_Return` 事件，运行后会移除
     */
    design() {
        this.check();
        const tid = this._lodop.PRINT_DESIGN();
        return new Promise(resolve => {
            this._lodop.On_Return = (taskID, value) => {
                if (tid !== taskID)
                    return;
                this._lodop.On_Return = null;
                resolve(`${value}`);
            };
        });
    }
    printDo() {
        const data = this.printBuffer.shift();
        if (!data)
            return;
        this.attachCode(data.code, data.item, data.parser);
        const tid = this._lodop.PRINT();
        this._lodop.On_Return = (taskID, value) => {
            if (tid !== taskID)
                return;
            this._lodop.On_Return = null;
            this._events.next({
                ok: value === true,
                error: value === true ? null : value,
                ...data
            });
            this.printDo();
        };
    }
    /**
     * Print immediately, generally used for batch printing
     *
     * 立即打印，一般用于批量套打
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
    ngOnDestroy() {
        this._init.unsubscribe();
        this._events.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: LodopService, deps: [{ token: i1.LazyService }, { token: i2.AlainConfigService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: LodopService, providedIn: 'root' }); }
}
export { LodopService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: LodopService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.LazyService }, { type: i2.AlainConfigService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9kb3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9sb2RvcC9sb2RvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFRL0MsTUFDYSxZQUFZO0lBU3ZCLFlBQW9CLFNBQXNCLEVBQUUsU0FBNkI7UUFBckQsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQU5sQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBaUIsSUFBSSxDQUFDO1FBQzVCLFVBQUssR0FBRyxJQUFJLE9BQU8sRUFBZSxDQUFDO1FBQ25DLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBb0IsQ0FBQztRQUMxQyxnQkFBVyxHQUFnQixFQUFFLENBQUM7UUFHcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUM1QyxHQUFHLEVBQUUsaUNBQWlDO1lBQ3RDLElBQUksRUFBRSxRQUFRO1lBQ2QsV0FBVyxFQUFFLEVBQUU7WUFDZixhQUFhLEVBQUUsR0FBRztTQUNuQixDQUFFLENBQUM7UUFDSixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNELElBQUksR0FBRyxDQUFDLEtBQXVCO1FBQzdCLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDVixHQUFHLElBQUksQ0FBQyxhQUFhO1lBQ3JCLEdBQUcsS0FBSztTQUNULENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxD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QyxJQUFZLEVBQUUsVUFBcUIsRUFBRSxNQUFlO1FBQ3hELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ25CLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3BFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUNILENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDOzhHQTFOVSxZQUFZO2tIQUFaLFlBQVksY0FEQyxNQUFNOztTQUNuQixZQUFZOzJGQUFaLFlBQVk7a0JBRHhCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluTG9kb3BDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IExvZG9wLCBMb2RvcFByaW50UmVzdWx0LCBMb2RvcFJlc3VsdCB9IGZyb20gJy4vbG9kb3AudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExvZG9wU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZGVmYXVsdENvbmZpZzogQWxhaW5Mb2RvcENvbmZpZztcbiAgcHJpdmF0ZSBfY29nITogQWxhaW5Mb2RvcENvbmZpZztcbiAgcHJpdmF0ZSBwZW5kaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgX2xvZG9wOiBMb2RvcCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9pbml0ID0gbmV3IFN1YmplY3Q8TG9kb3BSZXN1bHQ+KCk7XG4gIHByaXZhdGUgX2V2ZW50cyA9IG5ldyBTdWJqZWN0PExvZG9wUHJpbnRSZXN1bHQ+KCk7XG4gIHByaXZhdGUgcHJpbnRCdWZmZXI6IE56U2FmZUFueVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzY3JpcHRTcnY6IExhenlTZXJ2aWNlLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIHRoaXMuZGVmYXVsdENvbmZpZyA9IGNvbmZpZ1Nydi5tZXJnZSgnbG9kb3AnLCB7XG4gICAgICB1cmw6ICcvL2xvY2FsaG9zdDo4NDQzL0NMb2RvcGZ1bmNzLmpzJyxcbiAgICAgIG5hbWU6ICdDTE9ET1AnLFxuICAgICAgY29tcGFueU5hbWU6ICcnLFxuICAgICAgY2hlY2tNYXhDb3VudDogMTAwXG4gICAgfSkhO1xuICAgIHRoaXMuY29nID0gdGhpcy5kZWZhdWx0Q29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBvciBzZXQgY29uZmlndXJhdGlvbiwgKipOb3RlOioqIFJlc2V0dGluZyB3aWxsIGludmVydCBhbmQgcmVsb2FkIHNjcmlwdCByZXNvdXJjZXNcbiAgICpcbiAgICog6I635Y+W5oiW6YeN5paw6K6+572u6YWN572u77yMKirms6jvvJoqKumHjeaWsOiuvue9ruS8muWAkue9rumHjeaWsOWKoOi9veiEmuacrOi1hOa6kFxuICAgKi9cbiAgZ2V0IGNvZygpOiBBbGFpbkxvZG9wQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29nO1xuICB9XG4gIHNldCBjb2codmFsdWU6IEFsYWluTG9kb3BDb25maWcpIHtcbiAgICB0aGlzLl9jb2cgPSB7XG4gICAgICAuLi50aGlzLmRlZmF1bHRDb25maWcsXG4gICAgICAuLi52YWx1ZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgY2hhbmdlIG5vdGlmaWNhdGlvblxuICAgKlxuICAgKiDkuovku7blj5jmm7TpgJrnn6VcbiAgICovXG4gIGdldCBldmVudHMoKTogT2JzZXJ2YWJsZTxMb2RvcFByaW50UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50cy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbG9kb3Agb2JqZWN0XG4gICAqXG4gICAqIOiOt+WPliBsb2RvcCDlr7nosaFcbiAgICovXG4gIGdldCBsb2RvcCgpOiBPYnNlcnZhYmxlPExvZG9wUmVzdWx0PiB7XG4gICAgaWYgKHRoaXMuX2xvZG9wKSByZXR1cm4gb2YoeyBvazogdHJ1ZSwgbG9kb3A6IHRoaXMuX2xvZG9wIH0gYXMgTG9kb3BSZXN1bHQpO1xuICAgIGlmICh0aGlzLnBlbmRpbmcpIHJldHVybiB0aGlzLl9pbml0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgdGhpcy5yZXF1ZXN0KCk7XG5cbiAgICByZXR1cm4gdGhpcy5faW5pdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcHJpbnRlciBsaXN0XG4gICAqXG4gICAqIOiOt+WPluaJk+WNsOacuuWIl+ihqFxuICAgKi9cbiAgZ2V0IHByaW50ZXIoKTogc3RyaW5nW10ge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgICBjb25zdCByZXQ6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgY291bnQgPSB0aGlzLl9sb2RvcCEuR0VUX1BSSU5URVJfQ09VTlQoKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICAgIHJldC5wdXNoKHRoaXMuX2xvZG9wIS5HRVRfUFJJTlRFUl9OQU1FKGluZGV4KSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fbG9kb3ApIHRocm93IG5ldyBFcnJvcihg6K+35Yqh5b+F5YWI6LCD55SoIGxvZG9wIOiOt+WPluWvueixoWApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXF1ZXN0KCk6IHZvaWQge1xuICAgIHRoaXMucGVuZGluZyA9IHRydWU7XG5cbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmNvZy51cmx9P25hbWU9JHt0aGlzLmNvZy5uYW1lfWA7XG4gICAgbGV0IGNoZWNrTWF4Q291bnQgPSB0aGlzLmNvZy5jaGVja01heENvdW50IGFzIG51bWJlcjtcbiAgICBjb25zdCBvblJlc29sdmUgPSAoc3RhdHVzOiBOelNhZmVBbnksIGVycm9yPzogTnpTYWZlQW55KTogdm9pZCA9PiB7XG4gICAgICB0aGlzLl9pbml0Lm5leHQoe1xuICAgICAgICBvazogc3RhdHVzID09PSAnb2snLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGVycm9yLFxuICAgICAgICBsb2RvcDogdGhpcy5fbG9kb3AhXG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGNoZWNrU3RhdHVzID0gKCk6IHZvaWQgPT4ge1xuICAgICAgLS1jaGVja01heENvdW50O1xuICAgICAgaWYgKHRoaXMuX2xvZG9wIS53ZWJza3QgJiYgdGhpcy5fbG9kb3AhLndlYnNrdC5yZWFkeVN0YXRlID09PSAxKSB7XG4gICAgICAgIG9uUmVzb2x2ZSgnb2snKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjaGVja01heENvdW50IDwgMCkge1xuICAgICAgICAgIG9uUmVzb2x2ZSgnY2hlY2stbGltaXQnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjaGVja1N0YXR1cygpLCAxMDApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnNjcmlwdFNydi5sb2FkU2NyaXB0KHVybCkudGhlbigocmVzOiBOelNhZmVBbnkpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAnb2snKSB7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICBvblJlc29sdmUoJ3NjcmlwdC1sb2FkLWVycm9yJywgcmVzWzBdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgd2luID0gd2luZG93IGFzIE56U2FmZUFueTtcbiAgICAgIGlmICh3aW4uaGFzT3duUHJvcGVydHkodGhpcy5jb2cubmFtZSEpKSB7XG4gICAgICAgIHRoaXMuX2xvZG9wID0gd2luW3RoaXMuY29nLm5hbWUhXSBhcyBMb2RvcDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9sb2RvcCA9PT0gbnVsbCkge1xuICAgICAgICBvblJlc29sdmUoJ2xvYWQtdmFyaWFibGUtbmFtZS1lcnJvcicsIHsgbmFtZTogdGhpcy5jb2cubmFtZSB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fbG9kb3AuU0VUX0xJQ0VOU0VTKHRoaXMuY29nLmNvbXBhbnlOYW1lISwgdGhpcy5jb2cubGljZW5zZSEsIHRoaXMuY29nLmxpY2Vuc2VBLCB0aGlzLmNvZy5saWNlbnNlQik7XG4gICAgICBjaGVja1N0YXR1cygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGxvZG9wIG9iamVjdFxuICAgKlxuICAgKiDph43nva4gbG9kb3Ag5a+56LGhXG4gICAqL1xuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLl9sb2RvcCA9IG51bGw7XG4gICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgdGhpcy5yZXF1ZXN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoIGNvZGUgdG8gdGhlIGBsb2RvcGAgb2JqZWN0LCB0aGUgc3RyaW5nIGNsYXNzIHN1cHBvcnRzIGR5bmFtaWMgcGFyYW1ldGVycyBvZiBge3trZXl9fWAsXG4gICAqICoqTm90ZToqKiBUaGUgY29kZSByZWZlcnMgdG8gdGhlIHN0cmluZyBkYXRhIGdlbmVyYXRlZCBieSB0aGUgcHJpbnQgZGVzaWduXG4gICAqXG4gICAqIOmZhOWKoOS7o+eggeiHsyBgbG9kb3BgIOWvueixoeS4iu+8jOWtl+espuS4suexu+aUr+aMgSBge3trZXl9fWAg55qE5Yqo5oCB5Y+C5pWw77yMKirms6jvvJoqKiDku6PnoIHmmK/mjIfmiZPljbDorr7orqHmiYDkuqfnlJ/lrZfnrKbkuLLmlbDmja5cbiAgICovXG4gIGF0dGFjaENvZGUoY29kZTogc3RyaW5nLCBjb250ZXh0T2JqPzogTnpTYWZlQW55LCBwYXJzZXI/OiBSZWdFeHApOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrKCk7XG4gICAgaWYgKCFwYXJzZXIpIHBhcnNlciA9IC9MT0RPUFxcLihbXihdKylcXCgoW15cXG5dKyk/XFwpOy9pO1xuICAgIGNvZGUuc3BsaXQoJ1xcbicpLmZvckVhY2gobGluZSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXJzZXIhLmV4ZWMobGluZS50cmltKCkpO1xuICAgICAgaWYgKCFyZXMpIHJldHVybjtcbiAgICAgIGNvbnN0IGZuID0gdGhpcy5fbG9kb3AhW3Jlc1sxXV07XG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgbGV0IGFycjogTnpTYWZlQW55W10gfCBudWxsID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBmYWtlRm4gPSBuZXcgRnVuY3Rpb24oYHJldHVybiBbJHtyZXNbMl19XWApO1xuICAgICAgICAgIGFyciA9IGZha2VGbigpO1xuICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgaWYgKGFyciAhPSBudWxsICYmIEFycmF5LmlzQXJyYXkoYXJyKSAmJiBjb250ZXh0T2JqKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJyW2ldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBhcnJbaV0gPSAoYXJyW2ldIGFzIHN0cmluZykucmVwbGFjZSgve3soLio/KX19L2csIChfbWF0Y2gsIGtleSkgPT4gY29udGV4dE9ialtrZXkudHJpbSgpXSB8fCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZuLmFwcGx5KHRoaXMuX2xvZG9wLCBhcnIhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgY29kZSBpcyBhdXRvbWF0aWNhbGx5IHJldHVybmVkIGFmdGVyIG9wZW5pbmcgdGhlIHByaW50IGRlc2lnbiBhbmQgY2xvc2luZyxcbiAgICogKipOb3RlOioqIEF1dG9tYXRpY2FsbHkgbGlzdGVuIGZvciB0aGUgYE9uX1JldHVybmAgZXZlbnQsIGFuZCBpdCB3aWxsIGJlIHJlbW92ZWQgYWZ0ZXIgcnVubmluZ1xuICAgKlxuICAgKiDmiZPlvIDmiZPljbDorr7orqHlhbPpl63lkI7oh6rliqjov5Tlm57ku6PnoIHvvIwqKuazqO+8mioqIOiHquWKqOebkeWQrCBgT25fUmV0dXJuYCDkuovku7bvvIzov5DooYzlkI7kvJrnp7vpmaRcbiAgICovXG4gIGRlc2lnbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgICBjb25zdCB0aWQgPSB0aGlzLl9sb2RvcCEuUFJJTlRfREVTSUdOKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5fbG9kb3AhLk9uX1JldHVybiA9ICh0YXNrSUQ6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHRpZCAhPT0gdGFza0lEKSByZXR1cm47XG4gICAgICAgIHRoaXMuX2xvZG9wIS5Pbl9SZXR1cm4gPSBudWxsO1xuICAgICAgICByZXNvbHZlKGAke3ZhbHVlfWApO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICBwcml2YXRlIHByaW50RG8oKTogdm9pZCB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucHJpbnRCdWZmZXIuc2hpZnQoKTtcbiAgICBpZiAoIWRhdGEpIHJldHVybjtcbiAgICB0aGlzLmF0dGFjaENvZGUoZGF0YS5jb2RlLCBkYXRhLml0ZW0sIGRhdGEucGFyc2VyKTtcbiAgICBjb25zdCB0aWQgPSB0aGlzLl9sb2RvcCEuUFJJTlQoKTtcbiAgICB0aGlzLl9sb2RvcCEuT25fUmV0dXJuID0gKHRhc2tJRDogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHRpZCAhPT0gdGFza0lEKSByZXR1cm47XG4gICAgICB0aGlzLl9sb2RvcCEuT25fUmV0dXJuID0gbnVsbDtcbiAgICAgIHRoaXMuX2V2ZW50cy5uZXh0KHtcbiAgICAgICAgb2s6IHZhbHVlID09PSB0cnVlLFxuICAgICAgICBlcnJvcjogdmFsdWUgPT09IHRydWUgPyBudWxsIDogdmFsdWUsXG4gICAgICAgIC4uLmRhdGFcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcmludERvKCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmludCBpbW1lZGlhdGVseSwgZ2VuZXJhbGx5IHVzZWQgZm9yIGJhdGNoIHByaW50aW5nXG4gICAqXG4gICAqIOeri+WNs+aJk+WNsO+8jOS4gOiIrOeUqOS6juaJuemHj+Wll+aJk1xuICAgKi9cbiAgcHJpbnQoY29kZTogc3RyaW5nLCBjb250ZXh0T2JqOiBOelNhZmVBbnksIHBhcnNlcj86IFJlZ0V4cCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2soKTtcbiAgICBpZiAoY29udGV4dE9iaikge1xuICAgICAgdGhpcy5wcmludEJ1ZmZlci5wdXNoKFxuICAgICAgICAuLi4oQXJyYXkuaXNBcnJheShjb250ZXh0T2JqKSA/IGNvbnRleHRPYmogOiBbY29udGV4dE9ial0pLm1hcChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4geyBjb2RlLCBwYXJzZXIsIGl0ZW0gfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMucHJpbnREbygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2V2ZW50cy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=