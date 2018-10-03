import { Injectable, Directive, HostListener, Input, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { LazyService, DelonUtilModule } from '@delon/util';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var XlsxConfig = /** @class */ (function () {
    function XlsxConfig() {
        /**
         * Xlsx library path
         */
        this.url = '//cdn.bootcss.com/xlsx/0.12.13/xlsx.full.min.js';
        /**
         * Defines which Xlsx optional modules should get loaded, e.g:
         *
         * `[ '//cdn.bootcss.com/xlsx/0.12.13/cpexcel.js' ]`
         */
        this.modules = [];
    }
    return XlsxConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var XlsxService = /** @class */ (function () {
    function XlsxService(cog, http, lazy) {
        this.cog = cog;
        this.http = http;
        this.lazy = lazy;
    }
    /**
     * @return {?}
     */
    XlsxService.prototype.init = /**
     * @return {?}
     */
    function () {
        return this.lazy.load([this.cog.url].concat(this.cog.modules));
    };
    /**
     * @param {?} wb
     * @return {?}
     */
    XlsxService.prototype.read = /**
     * @param {?} wb
     * @return {?}
     */
    function (wb) {
        /** @type {?} */
        var ret = {};
        wb.SheetNames.forEach(function (name) {
            /** @type {?} */
            var sheet = wb.Sheets[name];
            ret[name] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        });
        return ret;
    };
    /**
     * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
     * @param rABS 加载数据方式 `readAsBinaryString` （默认） 或 `readAsArrayBuffer`，[更多细节](http://t.cn/R3n63A0)
     */
    /**
     * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
     * @param {?} fileOrUrl
     * @param {?=} rABS 加载数据方式 `readAsBinaryString` （默认） 或 `readAsArrayBuffer`，[更多细节](http://t.cn/R3n63A0)
     * @return {?}
     */
    XlsxService.prototype.import = /**
     * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
     * @param {?} fileOrUrl
     * @param {?=} rABS 加载数据方式 `readAsBinaryString` （默认） 或 `readAsArrayBuffer`，[更多细节](http://t.cn/R3n63A0)
     * @return {?}
     */
    function (fileOrUrl, rABS) {
        var _this = this;
        if (rABS === void 0) { rABS = 'readAsBinaryString'; }
        return new Promise(function (resolver, reject) {
            _this.init().then(function () {
                // from url
                if (typeof fileOrUrl === 'string') {
                    _this.http
                        .request('GET', fileOrUrl, { responseType: 'arraybuffer' })
                        .subscribe(function (res) {
                        /** @type {?} */
                        var wb = XLSX.read(new Uint8Array(res), { type: 'array' });
                        resolver(_this.read(wb));
                    }, function (err) {
                        reject(err);
                    });
                    return;
                }
                /** @type {?} */
                var reader = new FileReader();
                reader.onload = function (e) {
                    /** @type {?} */
                    var wb = XLSX.read(e.target.result, { type: 'binary' });
                    resolver(_this.read(wb));
                };
                reader[rABS](fileOrUrl);
            });
        });
    };
    /** 导出 */
    /**
     * 导出
     * @param {?} options
     * @return {?}
     */
    XlsxService.prototype.export = /**
     * 导出
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return this.init().then(function () {
            /** @type {?} */
            var wb = XLSX.utils.book_new();
            if (Array.isArray(options.sheets)) {
                (/** @type {?} */ (options.sheets)).forEach(function (value, index) {
                    /** @type {?} */
                    var ws = XLSX.utils.aoa_to_sheet(value.data);
                    XLSX.utils.book_append_sheet(wb, ws, value.name || "Sheet" + (index + 1));
                });
            }
            else {
                wb.SheetNames = Object.keys(options.sheets);
                wb.Sheets = options.sheets;
            }
            if (options.callback)
                options.callback(wb);
            /** @type {?} */
            var wbout = XLSX.write(wb, Object.assign({
                bookType: 'xlsx',
                bookSST: false,
                type: 'array',
            }, options.opts));
            saveAs(new Blob([wbout], { type: 'application/octet-stream' }), options.filename || 'export.xlsx');
        });
    };
    XlsxService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    XlsxService.ctorParameters = function () { return [
        { type: XlsxConfig },
        { type: HttpClient },
        { type: LazyService }
    ]; };
    return XlsxService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var XlsxDirective = /** @class */ (function () {
    function XlsxDirective(srv) {
        this.srv = srv;
    }
    /**
     * @return {?}
     */
    XlsxDirective.prototype._click = /**
     * @return {?}
     */
    function () {
        this.srv.export(this.data);
    };
    XlsxDirective.decorators = [
        { type: Directive, args: [{ selector: '[xlsx]' },] }
    ];
    /** @nocollapse */
    XlsxDirective.ctorParameters = function () { return [
        { type: XlsxService }
    ]; };
    XlsxDirective.propDecorators = {
        data: [{ type: Input, args: ['xlsx',] }],
        _click: [{ type: HostListener, args: ['click',] }]
    };
    return XlsxDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [XlsxDirective];
var XlsxModule = /** @class */ (function () {
    function XlsxModule() {
    }
    /**
     * @return {?}
     */
    XlsxModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: XlsxModule,
            providers: [XlsxService, XlsxConfig],
        };
    };
    XlsxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return XlsxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { XlsxConfig, XlsxService, XlsxDirective, XlsxModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy94bHN4L3hsc3guY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWJjL3hsc3gveGxzeC5zZXJ2aWNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3hsc3gveGxzeC5kaXJlY3RpdmUudHMiLCJuZzovL0BkZWxvbi9hYmMveGxzeC94bHN4Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgWGxzeENvbmZpZyB7XG4gIC8qKlxuICAgKiBYbHN4IGxpYnJhcnkgcGF0aFxuICAgKi9cbiAgdXJsPyA9ICcvL2Nkbi5ib290Y3NzLmNvbS94bHN4LzAuMTIuMTMveGxzeC5mdWxsLm1pbi5qcyc7XG4gIC8qKlxuICAgKiBEZWZpbmVzIHdoaWNoIFhsc3ggb3B0aW9uYWwgbW9kdWxlcyBzaG91bGQgZ2V0IGxvYWRlZCwgZS5nOlxuICAgKlxuICAgKiBgWyAnLy9jZG4uYm9vdGNzcy5jb20veGxzeC8wLjEyLjEzL2NwZXhjZWwuanMnIF1gXG4gICAqL1xuICBtb2R1bGVzPzogc3RyaW5nW10gPSBbXTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcbmltcG9ydCB7IExhenlTZXJ2aWNlLCBMYXp5UmVzdWx0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBYbHN4RXhwb3J0T3B0aW9ucywgWGxzeEV4cG9ydFNoZWV0IH0gZnJvbSAnLi94bHN4LnR5cGVzJztcbmltcG9ydCB7IFhsc3hDb25maWcgfSBmcm9tICcuL3hsc3guY29uZmlnJztcblxuZGVjbGFyZSB2YXIgWExTWDogYW55O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgWGxzeFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvZzogWGxzeENvbmZpZyxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBsYXp5OiBMYXp5U2VydmljZSxcbiAgKSB7fVxuXG4gIHByaXZhdGUgaW5pdCgpOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLmxhenkubG9hZChbdGhpcy5jb2cudXJsXS5jb25jYXQodGhpcy5jb2cubW9kdWxlcykpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkKHdiOiBhbnkpOiB7IFtrZXk6IHN0cmluZ106IGFueVtdW10gfSB7XG4gICAgY29uc3QgcmV0OiBhbnkgPSB7fTtcbiAgICB3Yi5TaGVldE5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBjb25zdCBzaGVldDogYW55ID0gd2IuU2hlZXRzW25hbWVdO1xuICAgICAgcmV0W25hbWVdID0gWExTWC51dGlscy5zaGVldF90b19qc29uKHNoZWV0LCB7IGhlYWRlcjogMSB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIMOlwq/CvMOlwoXCpUV4Y2Vsw6XCucK2w6jCvsKTw6XCh8K6SlNPTsOvwrzCjMOmwpTCr8OmwozCgSBgPGlucHV0IHR5cGU9XCJmaWxlXCI+YMOjwoDCgVVSTCDDpcK9wqLDpcK8wo9cbiAgICogQHBhcmFtIHJBQlMgw6XCisKgw6jCvcK9w6bClcKww6bCjcKuw6bClsK5w6XCvMKPIGByZWFkQXNCaW5hcnlTdHJpbmdgIMOvwrzCiMOpwrvCmMOowq7CpMOvwrzCiSDDpsKIwpYgYHJlYWRBc0FycmF5QnVmZmVyYMOvwrzCjFvDpsKbwrTDpcKkwprDp8K7wobDqMKKwoJdKGh0dHA6Ly90LmNuL1IzbjYzQTApXG4gICAqL1xuICBpbXBvcnQoXG4gICAgZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nLFxuICAgIHJBQlM6ICdyZWFkQXNCaW5hcnlTdHJpbmcnIHwgJ3JlYWRBc0FycmF5QnVmZmVyJyA9ICdyZWFkQXNCaW5hcnlTdHJpbmcnLFxuICApOiBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogYW55W11bXSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogYW55W11bXSB9PigocmVzb2x2ZXIsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIGZyb20gdXJsXG4gICAgICAgIGlmICh0eXBlb2YgZmlsZU9yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaHR0cFxuICAgICAgICAgICAgLnJlcXVlc3QoJ0dFVCcsIGZpbGVPclVybCwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIChyZXM6IEFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2IgPSBYTFNYLnJlYWQobmV3IFVpbnQ4QXJyYXkocmVzKSwgeyB0eXBlOiAnYXJyYXknIH0pO1xuICAgICAgICAgICAgICAgIHJlc29sdmVyKHRoaXMucmVhZCh3YikpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZyb20gZmlsZVxuICAgICAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gKGU6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdiOiBhbnkgPSBYTFNYLnJlYWQoZS50YXJnZXQucmVzdWx0LCB7IHR5cGU6ICdiaW5hcnknIH0pO1xuICAgICAgICAgIHJlc29sdmVyKHRoaXMucmVhZCh3YikpO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXJbckFCU10oZmlsZU9yVXJsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIMOlwq/CvMOlwofCuiAqL1xuICBleHBvcnQob3B0aW9uczogWGxzeEV4cG9ydE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCB3YjogYW55ID0gWExTWC51dGlscy5ib29rX25ldygpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5zaGVldHMpKSB7XG4gICAgICAgICg8WGxzeEV4cG9ydFNoZWV0W10+b3B0aW9ucy5zaGVldHMpLmZvckVhY2goXG4gICAgICAgICAgKHZhbHVlOiBYbHN4RXhwb3J0U2hlZXQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdzOiBhbnkgPSBYTFNYLnV0aWxzLmFvYV90b19zaGVldCh2YWx1ZS5kYXRhKTtcbiAgICAgICAgICAgIFhMU1gudXRpbHMuYm9va19hcHBlbmRfc2hlZXQoXG4gICAgICAgICAgICAgIHdiLFxuICAgICAgICAgICAgICB3cyxcbiAgICAgICAgICAgICAgdmFsdWUubmFtZSB8fCBgU2hlZXQke2luZGV4ICsgMX1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2IuU2hlZXROYW1lcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuc2hlZXRzKTtcbiAgICAgICAgd2IuU2hlZXRzID0gb3B0aW9ucy5zaGVldHM7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmNhbGxiYWNrKSBvcHRpb25zLmNhbGxiYWNrKHdiKTtcblxuICAgICAgY29uc3Qgd2JvdXQ6IEFycmF5QnVmZmVyID0gWExTWC53cml0ZShcbiAgICAgICAgd2IsXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge1xuICAgICAgICAgICAgYm9va1R5cGU6ICd4bHN4JyxcbiAgICAgICAgICAgIGJvb2tTU1Q6IGZhbHNlLFxuICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wdGlvbnMub3B0cyxcbiAgICAgICAgKSxcbiAgICAgICk7XG4gICAgICBzYXZlQXMoXG4gICAgICAgIG5ldyBCbG9iKFt3Ym91dF0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScgfSksXG4gICAgICAgIG9wdGlvbnMuZmlsZW5hbWUgfHwgJ2V4cG9ydC54bHN4JyxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgWGxzeFNlcnZpY2UgfSBmcm9tICcuL3hsc3guc2VydmljZSc7XG5pbXBvcnQgeyBYbHN4RXhwb3J0T3B0aW9ucyB9IGZyb20gJy4veGxzeC50eXBlcyc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1t4bHN4XScgfSlcbmV4cG9ydCBjbGFzcyBYbHN4RGlyZWN0aXZlIHtcbiAgQElucHV0KCd4bHN4JykgZGF0YTogWGxzeEV4cG9ydE9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IFhsc3hTZXJ2aWNlKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgX2NsaWNrKCkge1xuICAgIHRoaXMuc3J2LmV4cG9ydCh0aGlzLmRhdGEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgWGxzeFNlcnZpY2UgfSBmcm9tICcuL3hsc3guc2VydmljZSc7XG5pbXBvcnQgeyBYbHN4RGlyZWN0aXZlIH0gZnJvbSAnLi94bHN4LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBYbHN4Q29uZmlnIH0gZnJvbSAnLi94bHN4LmNvbmZpZyc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbWGxzeERpcmVjdGl2ZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIFhsc3hNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFhsc3hNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtYbHN4U2VydmljZSwgWGxzeENvbmZpZ10sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsSUFBQTs7Ozs7bUJBSVMsaURBQWlEOzs7Ozs7dUJBTW5DLEVBQUU7O3FCQVZ6QjtJQVdDOzs7Ozs7QUNYRDtJQVlFLHFCQUNVLEtBQ0EsTUFDQTtRQUZBLFFBQUcsR0FBSCxHQUFHO1FBQ0gsU0FBSSxHQUFKLElBQUk7UUFDSixTQUFJLEdBQUosSUFBSTtLQUNWOzs7O0lBRUksMEJBQUk7Ozs7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFHekQsMEJBQUk7Ozs7Y0FBQyxFQUFPOztRQUNsQixJQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7UUFDcEIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJOztZQUN4QixJQUFNLEtB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