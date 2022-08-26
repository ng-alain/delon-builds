import * as i0 from '@angular/core';
import { Injectable, NgModule } from '@angular/core';
import { Subject, of } from 'rxjs';
import * as i1 from '@delon/util/other';
import * as i2 from '@delon/util/config';

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
        this._cog = Object.assign(Object.assign({}, this.defaultConfig), value);
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
                catch (_a) { }
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
            this._events.next(Object.assign({ ok: value === true, error: value === true ? null : value }, data));
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
}
LodopService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LodopService, deps: [{ token: i1.LazyService }, { token: i2.AlainConfigService }], target: i0.ɵɵFactoryTarget.Injectable });
LodopService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LodopService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LodopService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.LazyService }, { type: i2.AlainConfigService }]; } });

class LodopModule {
}
LodopModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LodopModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LodopModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: LodopModule });
LodopModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LodopModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: LodopModule, decorators: [{
            type: NgModule,
            args: [{}]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { LodopModule, LodopService };
//# sourceMappingURL=lodop.mjs.map
