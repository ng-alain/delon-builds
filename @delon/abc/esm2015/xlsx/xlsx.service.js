import { __awaiter, __decorate } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { saveAs } from 'file-saver';
import isUtf8 from 'isutf8';
import { AlainConfigService } from '@delon/util/config';
import { ZoneOutside } from '@delon/util/decorator';
import { LazyService } from '@delon/util/other';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@delon/util/other";
import * as i3 from "@delon/util/config";
export class XlsxService {
    constructor(http, lazy, configSrv, ngZone) {
        this.http = http;
        this.lazy = lazy;
        this.ngZone = ngZone;
        this.cog = configSrv.merge('xlsx', {
            url: 'https://cdn.bootcdn.net/ajax/libs/xlsx/0.16.8/xlsx.full.min.js',
            modules: [`https://cdn.bootcdn.net/ajax/libs/xlsx/0.16.8/cpexcel.min.js`]
        });
    }
    init() {
        return typeof XLSX !== 'undefined'
            ? Promise.resolve([])
            : this.lazy.load([this.cog.url].concat(this.cog.modules));
    }
    read(data, options) {
        const ret = {};
        if (options.type === 'binary') {
            const buf = new Uint8Array(data);
            if (!isUtf8(buf)) {
                try {
                    data = cptable.utils.decode(936, buf);
                    options.type = 'string';
                }
                catch (_a) {
                    options.type = 'array';
                }
            }
        }
        const wb = XLSX.read(data, options);
        wb.SheetNames.forEach((name) => {
            const sheet = wb.Sheets[name];
            ret[name] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        });
        return ret;
    }
    /**
     * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
     */
    import(fileOrUrl) {
        return new Promise((resolve, reject) => {
            this.init()
                .then(() => {
                // from url
                if (typeof fileOrUrl === 'string') {
                    this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe((res) => {
                        this.ngZone.run(() => resolve(this.read(new Uint8Array(res), { type: 'array' })));
                    }, (err) => {
                        reject(err);
                    });
                    return;
                }
                // from file
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.ngZone.run(() => resolve(this.read(e.target.result, { type: 'binary' })));
                };
                reader.readAsArrayBuffer(fileOrUrl);
            })
                .catch(() => reject(`Unable to load xlsx.js`));
        });
    }
    export(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.init()
                    .then(() => {
                    const wb = XLSX.utils.book_new();
                    if (Array.isArray(options.sheets)) {
                        options.sheets.forEach((value, index) => {
                            const ws = XLSX.utils.aoa_to_sheet(value.data);
                            XLSX.utils.book_append_sheet(wb, ws, value.name || `Sheet${index + 1}`);
                        });
                    }
                    else {
                        wb.SheetNames = Object.keys(options.sheets);
                        wb.Sheets = options.sheets;
                    }
                    if (options.callback)
                        options.callback(wb);
                    const wbout = XLSX.write(wb, Object.assign({ bookType: 'xlsx', bookSST: false, type: 'array' }, options.opts));
                    const filename = options.filename || 'export.xlsx';
                    saveAs(new Blob([wbout], { type: 'application/octet-stream' }), filename);
                    resolve({ filename, wb });
                })
                    .catch(err => reject(err));
            });
        });
    }
    /**
     * 数据转符号名
     * - `1` => `A`
     * - `27` => `AA`
     * - `703` => `AAA`
     */
    numberToSchema(val) {
        const startCode = 'A'.charCodeAt(0);
        let res = '';
        do {
            --val;
            res = String.fromCharCode(startCode + (val % 26)) + res;
            val = (val / 26) >> 0;
        } while (val > 0);
        return res;
    }
}
XlsxService.ɵprov = i0.ɵɵdefineInjectable({ factory: function XlsxService_Factory() { return new XlsxService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LazyService), i0.ɵɵinject(i3.AlainConfigService), i0.ɵɵinject(i0.NgZone)); }, token: XlsxService, providedIn: "root" });
XlsxService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
XlsxService.ctorParameters = () => [
    { type: HttpClient },
    { type: LazyService },
    { type: AlainConfigService },
    { type: NgZone }
];
__decorate([
    ZoneOutside()
], XlsxService.prototype, "read", null);
__decorate([
    ZoneOutside()
], XlsxService.prototype, "export", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3hsc3gveGxzeC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNwQyxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFJNUIsT0FBTyxFQUFFLGtCQUFrQixFQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBUTVELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFlBQ1UsSUFBZ0IsRUFDaEIsSUFBaUIsRUFDekIsU0FBNkIsRUFDckIsTUFBYztRQUhkLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUVqQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXRCLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDakMsR0FBRyxFQUFFLGdFQUFnRTtZQUNyRSxPQUFPLEVBQUUsQ0FBQyw4REFBOEQsQ0FBQztTQUMxRSxDQUFFLENBQUM7SUFDTixDQUFDO0lBR08sSUFBSTtRQUNWLE9BQU8sT0FBTyxJQUFJLEtBQUssV0FBVztZQUNoQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFJLENBQUMsQ0FB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YSxDQUFDO29CQUNuRCxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSwwQkFBMEIsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBRTFFLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFRDs7Ozs7T0FLRztJQUNILGNBQWMsQ0FBQyxHQUFXO1FBQ3hCLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBRWIsR0FBRztZQUNELEVBQUUsR0FBRyxDQUFDO1lBQ04sR0FBRyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3hELEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkIsUUFBUSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1FBRWxCLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7OztZQTNIRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7WUFqQnpCLFVBQVU7WUFVRSxXQUFXO1lBRnZCLGtCQUFrQjtZQVBOLE1BQU07O0FBc0N6QjtJQURDLFdBQVcsRUFBRTt1Q0FvQmI7QUFpQ0Q7SUFEQyxXQUFXLEVBQUU7eUNBK0JiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcbmltcG9ydCBpc1V0ZjggZnJvbSAnaXN1dGY4JztcblxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblhsc3hDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgWm9uZU91dHNpZGUgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTGF6eVJlc3VsdCwgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5cbmltcG9ydCB7IFhsc3hFeHBvcnRPcHRpb25zLCBYbHN4RXhwb3J0UmVzdWx0LCBYbHN4RXhwb3J0U2hlZXQgfSBmcm9tICcuL3hsc3gudHlwZXMnO1xuXG5kZWNsYXJlIHZhciBYTFNYOiBhbnk7XG5kZWNsYXJlIHZhciBjcHRhYmxlOiBhbnk7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgWGxzeFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBsYXp5OiBMYXp5U2VydmljZSxcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIHRoaXMuY29nID0gY29uZmlnU3J2Lm1lcmdlKCd4bHN4Jywge1xuICAgICAgdXJsOiAnaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL3hsc3gvMC4xNi44L3hsc3guZnVsbC5taW4uanMnLFxuICAgICAgbW9kdWxlczogW2BodHRwczovL2Nkbi5ib290Y2RuLm5ldC9hamF4L2xpYnMveGxzeC8wLjE2LjgvY3BleGNlbC5taW4uanNgXVxuICAgIH0pITtcbiAgfVxuICBwcml2YXRlIGNvZzogQWxhaW5YbHN4Q29uZmlnO1xuXG4gIHByaXZhdGUgaW5pdCgpOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xuICAgIHJldHVybiB0eXBlb2YgWExTWCAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKFtdKVxuICAgICAgOiB0aGlzLmxhenkubG9hZChbdGhpcy5jb2cudXJsIV0uY29uY2F0KHRoaXMuY29nLm1vZHVsZXMhKSk7XG4gIH1cblxuICBAWm9uZU91dHNpZGUoKVxuICBwcml2YXRlIHJlYWQoZGF0YTogTnpTYWZlQW55LCBvcHRpb25zOiB7IHR5cGU6ICdhcnJheScgfCAnYmluYXJ5JyB8ICdzdHJpbmcnIH0pOiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueVtdW10gfSB7XG4gICAgY29uc3QgcmV0OiBOelNhZmVBbnkgPSB7fTtcbiAgICBpZiAob3B0aW9ucy50eXBlID09PSAnYmluYXJ5Jykge1xuICAgICAgY29uc3QgYnVmID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gICAgICBpZiAoIWlzVXRmOChidWYpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZGF0YSA9IGNwdGFibGUudXRpbHMuZGVjb2RlKDkzNiwgYnVmKTtcbiAgICAgICAgICBvcHRpb25zLnR5cGUgPSAnc3RyaW5nJztcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgb3B0aW9ucy50eXBlID0gJ2FycmF5JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB3YiA9IFhMU1gucmVhZChkYXRhLCBvcHRpb25zKTtcbiAgICB3Yi5TaGVldE5hbWVzLmZvckVhY2goKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgc2hlZXQ6IE56U2FmZUFueSA9IHdiLlNoZWV0c1tuYW1lXTtcbiAgICAgIHJldFtuYW1lXSA9IFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbihzaGVldCwgeyBoZWFkZXI6IDEgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiDlr7zlhaVFeGNlbOW5tui+k+WHukpTT07vvIzmlK/mjIEgYDxpbnB1dCB0eXBlPVwiZmlsZVwiPmDjgIFVUkwg5b2i5byPXG4gICAqL1xuICBpbXBvcnQoZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nKTogUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IGFueVtdW10gfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IGFueVtdW10gfT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5pbml0KClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vIGZyb20gdXJsXG4gICAgICAgICAgaWYgKHR5cGVvZiBmaWxlT3JVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmh0dHAucmVxdWVzdCgnR0VUJywgZmlsZU9yVXJsLCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIChyZXM6IEFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHJlc29sdmUodGhpcy5yZWFkKG5ldyBVaW50OEFycmF5KHJlcyksIHsgdHlwZTogJ2FycmF5JyB9KSkpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZnJvbSBmaWxlXG4gICAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICByZWFkZXIub25sb2FkID0gKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHJlc29sdmUodGhpcy5yZWFkKGUudGFyZ2V0LnJlc3VsdCwgeyB0eXBlOiAnYmluYXJ5JyB9KSkpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGVPclVybCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiByZWplY3QoYFVuYWJsZSB0byBsb2FkIHhsc3guanNgKSk7XG4gICAgfSk7XG4gIH1cblxuICBAWm9uZU91dHNpZGUoKVxuICBhc3luYyBleHBvcnQob3B0aW9uczogWGxzeEV4cG9ydE9wdGlvbnMpOiBQcm9taXNlPFhsc3hFeHBvcnRSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8WGxzeEV4cG9ydFJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5pbml0KClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdiOiBhbnkgPSBYTFNYLnV0aWxzLmJvb2tfbmV3KCk7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5zaGVldHMpKSB7XG4gICAgICAgICAgICAob3B0aW9ucy5zaGVldHMgYXMgWGxzeEV4cG9ydFNoZWV0W10pLmZvckVhY2goKHZhbHVlOiBYbHN4RXhwb3J0U2hlZXQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgd3M6IGFueSA9IFhMU1gudXRpbHMuYW9hX3RvX3NoZWV0KHZhbHVlLmRhdGEpO1xuICAgICAgICAgICAgICBYTFNYLnV0aWxzLmJvb2tfYXBwZW5kX3NoZWV0KHdiLCB3cywgdmFsdWUubmFtZSB8fCBgU2hlZXQke2luZGV4ICsgMX1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3Yi5TaGVldE5hbWVzID0gT2JqZWN0LmtleXMob3B0aW9ucy5zaGVldHMpO1xuICAgICAgICAgICAgd2IuU2hlZXRzID0gb3B0aW9ucy5zaGVldHM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG9wdGlvbnMuY2FsbGJhY2spIG9wdGlvbnMuY2FsbGJhY2sod2IpO1xuXG4gICAgICAgICAgY29uc3Qgd2JvdXQ6IEFycmF5QnVmZmVyID0gWExTWC53cml0ZSh3Yiwge1xuICAgICAgICAgICAgYm9va1R5cGU6ICd4bHN4JyxcbiAgICAgICAgICAgIGJvb2tTU1Q6IGZhbHNlLFxuICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMub3B0c1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGZpbGVuYW1lID0gb3B0aW9ucy5maWxlbmFtZSB8fCAnZXhwb3J0Lnhsc3gnO1xuICAgICAgICAgIHNhdmVBcyhuZXcgQmxvYihbd2JvdXRdLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nIH0pLCBmaWxlbmFtZSk7XG5cbiAgICAgICAgICByZXNvbHZlKHsgZmlsZW5hbWUsIHdiIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlamVjdChlcnIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlbDmja7ovaznrKblj7flkI1cbiAgICogLSBgMWAgPT4gYEFgXG4gICAqIC0gYDI3YCA9PiBgQUFgXG4gICAqIC0gYDcwM2AgPT4gYEFBQWBcbiAgICovXG4gIG51bWJlclRvU2NoZW1hKHZhbDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGFydENvZGUgPSAnQScuY2hhckNvZGVBdCgwKTtcbiAgICBsZXQgcmVzID0gJyc7XG5cbiAgICBkbyB7XG4gICAgICAtLXZhbDtcbiAgICAgIHJlcyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RhcnRDb2RlICsgKHZhbCAlIDI2KSkgKyByZXM7XG4gICAgICB2YWwgPSAodmFsIC8gMjYpID4+IDA7XG4gICAgfSB3aGlsZSAodmFsID4gMCk7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG4iXX0=