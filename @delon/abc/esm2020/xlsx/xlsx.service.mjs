import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import isUtf8 from 'isutf8';
import { ZoneOutside } from '@delon/util/decorator';
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
            url: 'https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js',
            modules: [`https://cdn.jsdelivr.net/npm/xlsx/dist/cpexcel.js`]
        });
    }
    init() {
        return typeof XLSX !== 'undefined'
            ? Promise.resolve([])
            : this.lazy.load([this.cog.url].concat(this.cog.modules));
    }
    read(data) {
        const { read, utils: { sheet_to_json } } = XLSX;
        const ret = {};
        const buf = new Uint8Array(data);
        let type = 'array';
        if (!isUtf8(buf)) {
            try {
                data = cptable.utils.decode(936, buf);
                type = 'string';
            }
            catch { }
        }
        const wb = read(data, { type });
        wb.SheetNames.forEach((name) => {
            const sheet = wb.Sheets[name];
            ret[name] = sheet_to_json(sheet, { header: 1 });
        });
        return ret;
    }
    /**
     * 导入Excel并输出JSON，支持 `<input type="file">`、URL 形式
     */
    import(fileOrUrl) {
        return new Promise((resolve, reject) => {
            const r = (data) => this.ngZone.run(() => resolve(this.read(data)));
            this.init()
                .then(() => {
                // from url
                if (typeof fileOrUrl === 'string') {
                    this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe({
                        next: (res) => r(new Uint8Array(res)),
                        error: (err) => reject(err)
                    });
                    return;
                }
                // from file
                const reader = new FileReader();
                reader.onload = (e) => r(e.target.result);
                reader.onerror = (e) => reject(e);
                reader.readAsArrayBuffer(fileOrUrl);
            })
                .catch(() => reject(`Unable to load xlsx.js`));
        });
    }
    async export(options) {
        return new Promise((resolve, reject) => {
            this.init()
                .then(() => {
                options = { format: 'xlsx', ...options };
                const { writeFile, utils: { book_new, aoa_to_sheet, book_append_sheet } } = XLSX;
                const wb = book_new();
                if (Array.isArray(options.sheets)) {
                    options.sheets.forEach((value, index) => {
                        const ws = aoa_to_sheet(value.data);
                        book_append_sheet(wb, ws, value.name || `Sheet${index + 1}`);
                    });
                }
                else {
                    wb.SheetNames = Object.keys(options.sheets);
                    wb.Sheets = options.sheets;
                }
                if (options.callback)
                    options.callback(wb);
                const filename = options.filename || `export.${options.format}`;
                writeFile(wb, filename, {
                    bookType: options.format,
                    bookSST: false,
                    type: 'array',
                    ...options.opts
                });
                resolve({ filename, wb });
            })
                .catch(err => reject(err));
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
XlsxService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: XlsxService, deps: [{ token: i1.HttpClient }, { token: i2.LazyService }, { token: i3.AlainConfigService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable });
XlsxService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: XlsxService, providedIn: 'root' });
__decorate([
    ZoneOutside()
], XlsxService.prototype, "read", null);
__decorate([
    ZoneOutside()
], XlsxService.prototype, "export", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: XlsxService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.LazyService }, { type: i3.AlainConfigService }, { type: i0.NgZone }]; }, propDecorators: { read: [], export: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3hsc3gveGxzeC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUc1QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBVXBELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFlBQ1UsSUFBZ0IsRUFDaEIsSUFBaUIsRUFDekIsU0FBNkIsRUFDckIsTUFBYztRQUhkLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUVqQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXRCLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDakMsR0FBRyxFQUFFLHlEQUF5RDtZQUM5RCxPQUFPLEVBQUUsQ0FBQyxtREFBbUQsQ0FBQztTQUMvRCxDQUFFLENBQUM7SUFDTixDQUFDO0lBR08sSUFBSTtRQUNWLE9BQU8sT0FBTyxJQUFJLEtBQUssV0FBVztZQUNoQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFHTyxJQUFJLENBQUMsSUFBZTtRQUMxQixNQUFNLEVBQ0osSUFBSSxFQUNKLEtBQUssRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUN6QixHQUFHLElBQUksQ0FBQztRQUNULE1BQU0sR0FBRyxHQUFjLEVBQUUsQ0FB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QUM7aUJBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxjQUFjLENBQUMsR0FBVztRQUN4QixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUViLEdBQUc7WUFDRCxFQUFFLEdBQUcsQ0FBQztZQUNOLEdBQUcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN4RCxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCLFFBQVEsR0FBRyxHQUFHLENBQUMsRUFBRTtRQUVsQixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O3dHQTNIVSxXQUFXOzRHQUFYLFdBQVcsY0FERSxNQUFNO0FBc0I5QjtJQURDLFdBQVcsRUFBRTt1Q0FxQmI7QUE2Qks7SUFETCxXQUFXLEVBQUU7eUNBbUNiOzJGQXhHVSxXQUFXO2tCQUR2QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTtpTEFzQnhCLElBQUksTUFpRE4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IGlzVXRmOCBmcm9tICdpc3V0ZjgnO1xuXG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluWGxzeENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBab25lT3V0c2lkZSB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBMYXp5UmVzdWx0LCBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgWGxzeEV4cG9ydE9wdGlvbnMsIFhsc3hFeHBvcnRSZXN1bHQsIFhsc3hFeHBvcnRTaGVldCB9IGZyb20gJy4veGxzeC50eXBlcyc7XG5cbmRlY2xhcmUgdmFyIFhMU1g6IE56U2FmZUFueTtcbmRlY2xhcmUgdmFyIGNwdGFibGU6IE56U2FmZUFueTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBYbHN4U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlLFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgdGhpcy5jb2cgPSBjb25maWdTcnYubWVyZ2UoJ3hsc3gnLCB7XG4gICAgICB1cmw6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3hsc3gvZGlzdC94bHN4LmZ1bGwubWluLmpzJyxcbiAgICAgIG1vZHVsZXM6IFtgaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS94bHN4L2Rpc3QvY3BleGNlbC5qc2BdXG4gICAgfSkhO1xuICB9XG4gIHByaXZhdGUgY29nOiBBbGFpblhsc3hDb25maWc7XG5cbiAgcHJpdmF0ZSBpbml0KCk6IFByb21pc2U8TGF6eVJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHR5cGVvZiBYTFNYICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBQcm9taXNlLnJlc29sdmUoW10pXG4gICAgICA6IHRoaXMubGF6eS5sb2FkKFt0aGlzLmNvZy51cmwhXS5jb25jYXQodGhpcy5jb2cubW9kdWxlcyEpKTtcbiAgfVxuXG4gIEBab25lT3V0c2lkZSgpXG4gIHByaXZhdGUgcmVhZChkYXRhOiBOelNhZmVBbnkpOiB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueVtdW10gfSB7XG4gICAgY29uc3Qge1xuICAgICAgcmVhZCxcbiAgICAgIHV0aWxzOiB7IHNoZWV0X3RvX2pzb24gfVxuICAgIH0gPSBYTFNYO1xuICAgIGNvbnN0IHJldDogTnpTYWZlQW55ID0ge307XG4gICAgY29uc3QgYnVmID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gICAgbGV0IHR5cGUgPSAnYXJyYXknO1xuICAgIGlmICghaXNVdGY4KGJ1ZikpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBjcHRhYmxlLnV0aWxzLmRlY29kZSg5MzYsIGJ1Zik7XG4gICAgICAgIHR5cGUgPSAnc3RyaW5nJztcbiAgICAgIH0gY2F0Y2gge31cbiAgICB9XG4gICAgY29uc3Qgd2IgPSByZWFkKGRhdGEsIHsgdHlwZSB9KTtcbiAgICB3Yi5TaGVldE5hbWVzLmZvckVhY2goKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgc2hlZXQ6IE56U2FmZUFueSA9IHdiLlNoZWV0c1tuYW1lXTtcbiAgICAgIHJldFtuYW1lXSA9IHNoZWV0X3RvX2pzb24oc2hlZXQsIHsgaGVhZGVyOiAxIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICog5a+85YWlRXhjZWzlubbovpPlh7pKU09O77yM5pSv5oyBIGA8aW5wdXQgdHlwZT1cImZpbGVcIj5g44CBVVJMIOW9ouW8j1xuICAgKi9cbiAgaW1wb3J0KGZpbGVPclVybDogRmlsZSB8IHN0cmluZyk6IFByb21pc2U8eyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnlbXVtdIH0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8eyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnlbXVtdIH0+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHIgPSAoZGF0YTogTnpTYWZlQW55KTogdm9pZCA9PiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gcmVzb2x2ZSh0aGlzLnJlYWQoZGF0YSkpKTtcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAvLyBmcm9tIHVybFxuICAgICAgICAgIGlmICh0eXBlb2YgZmlsZU9yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5odHRwLnJlcXVlc3QoJ0dFVCcsIGZpbGVPclVybCwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSkuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgICAgbmV4dDogKHJlczogQXJyYXlCdWZmZXIpID0+IHIobmV3IFVpbnQ4QXJyYXkocmVzKSksXG4gICAgICAgICAgICAgIGVycm9yOiAoZXJyOiBOelNhZmVBbnkpID0+IHJlamVjdChlcnIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZnJvbSBmaWxlXG4gICAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICByZWFkZXIub25sb2FkID0gKGU6IE56U2FmZUFueSkgPT4gcihlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKGU6IE56U2FmZUFueSkgPT4gcmVqZWN0KGUpO1xuICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlT3JVcmwpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4gcmVqZWN0KGBVbmFibGUgdG8gbG9hZCB4bHN4LmpzYCkpO1xuICAgIH0pO1xuICB9XG5cbiAgQFpvbmVPdXRzaWRlKClcbiAgYXN5bmMgZXhwb3J0KG9wdGlvbnM6IFhsc3hFeHBvcnRPcHRpb25zKTogUHJvbWlzZTxYbHN4RXhwb3J0UmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFhsc3hFeHBvcnRSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBvcHRpb25zID0geyBmb3JtYXQ6ICd4bHN4JywgLi4ub3B0aW9ucyB9O1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHdyaXRlRmlsZSxcbiAgICAgICAgICAgIHV0aWxzOiB7IGJvb2tfbmV3LCBhb2FfdG9fc2hlZXQsIGJvb2tfYXBwZW5kX3NoZWV0IH1cbiAgICAgICAgICB9ID0gWExTWDtcbiAgICAgICAgICBjb25zdCB3YjogTnpTYWZlQW55ID0gYm9va19uZXcoKTtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLnNoZWV0cykpIHtcbiAgICAgICAgICAgIChvcHRpb25zLnNoZWV0cyBhcyBYbHN4RXhwb3J0U2hlZXRbXSkuZm9yRWFjaCgodmFsdWU6IFhsc3hFeHBvcnRTaGVldCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB3czogTnpTYWZlQW55ID0gYW9hX3RvX3NoZWV0KHZhbHVlLmRhdGEpO1xuICAgICAgICAgICAgICBib29rX2FwcGVuZF9zaGVldCh3Yiwgd3MsIHZhbHVlLm5hbWUgfHwgYFNoZWV0JHtpbmRleCArIDF9YCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2IuU2hlZXROYW1lcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuc2hlZXRzKTtcbiAgICAgICAgICAgIHdiLlNoZWV0cyA9IG9wdGlvbnMuc2hlZXRzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvcHRpb25zLmNhbGxiYWNrKSBvcHRpb25zLmNhbGxiYWNrKHdiKTtcblxuICAgICAgICAgIGNvbnN0IGZpbGVuYW1lID0gb3B0aW9ucy5maWxlbmFtZSB8fCBgZXhwb3J0LiR7b3B0aW9ucy5mb3JtYXR9YDtcbiAgICAgICAgICB3cml0ZUZpbGUod2IsIGZpbGVuYW1lLCB7XG4gICAgICAgICAgICBib29rVHlwZTogb3B0aW9ucy5mb3JtYXQsXG4gICAgICAgICAgICBib29rU1NUOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAuLi5vcHRpb25zLm9wdHNcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJlc29sdmUoeyBmaWxlbmFtZSwgd2IgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOaVsOaNrui9rOespuWPt+WQjVxuICAgKiAtIGAxYCA9PiBgQWBcbiAgICogLSBgMjdgID0+IGBBQWBcbiAgICogLSBgNzAzYCA9PiBgQUFBYFxuICAgKi9cbiAgbnVtYmVyVG9TY2hlbWEodmFsOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0YXJ0Q29kZSA9ICdBJy5jaGFyQ29kZUF0KDApO1xuICAgIGxldCByZXMgPSAnJztcblxuICAgIGRvIHtcbiAgICAgIC0tdmFsO1xuICAgICAgcmVzID0gU3RyaW5nLmZyb21DaGFyQ29kZShzdGFydENvZGUgKyAodmFsICUgMjYpKSArIHJlcztcbiAgICAgIHZhbCA9ICh2YWwgLyAyNikgPj4gMDtcbiAgICB9IHdoaWxlICh2YWwgPiAwKTtcblxuICAgIHJldHVybiByZXM7XG4gIH1cbn1cbiJdfQ==