import { __decorate } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone, inject } from '@angular/core';
import isUtf8 from 'isutf8';
import { ZoneOutside } from '@delon/util/decorator';
import { LazyService } from '@delon/util/other';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export class XlsxService {
    constructor(configSrv) {
        this.http = inject(HttpClient);
        this.lazy = inject(LazyService);
        this.ngZone = inject(NgZone);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: XlsxService, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: XlsxService, providedIn: 'root' }); }
}
__decorate([
    ZoneOutside()
], XlsxService.prototype, "read", null);
__decorate([
    ZoneOutside()
], XlsxService.prototype, "export", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: XlsxService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1.AlainConfigService }], propDecorators: { read: [], export: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3hsc3gveGxzeC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNELE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUc1QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFTNUQsTUFBTSxPQUFPLFdBQVc7SUFPdEIsWUFBWSxTQUE2QjtRQU54QixTQUFJLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFCLFNBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0IsV0FBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUt2QyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2pDLEdBQUcsRUFBRSx5REFBeUQ7WUFDOUQsT0FBTyxFQUFFLENBQUMsbURBQW1ELENBQUM7U0FDL0QsQ0FBRSxDQUFDO0lBQ04sQ0FBQztJQUVPLElBQUk7UUFDVixPQUFPLE9BQU8sSUFBSSxLQUFLLFdBQVc7WUFDaEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBUSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBR08s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UUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNO29CQUN4QixPQUFPLEVBQUUsS0FBSztvQkFDZCxJQUFJLEVBQUUsT0FBTztvQkFDYixHQUFHLE9BQU8sQ0FBQyxJQUFJO2lCQUNoQixDQUFDLENBQUM7Z0JBRUgsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsY0FBYyxDQUFDLEdBQVc7UUFDeEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFFYixHQUFHLENBQUM7WUFDRixFQUFFLEdBQUcsQ0FBQztZQUNOLEdBQUcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN4RCxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1FBRWxCLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs4R0EzSFUsV0FBVztrSEFBWCxXQUFXLGNBREUsTUFBTTs7QUFzQnRCO0lBRFAsV0FBVyxFQUFFO3VDQXFCYjtBQTZCSztJQURMLFdBQVcsRUFBRTt5Q0FtQ2I7MkZBeEdVLFdBQVc7a0JBRHZCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFO3VGQXNCeEIsSUFBSSxNQWlETixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCBpc1V0ZjggZnJvbSAnaXN1dGY4JztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblhsc3hDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgWm9uZU91dHNpZGUgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTGF6eVJlc3VsdCwgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IFhsc3hFeHBvcnRPcHRpb25zLCBYbHN4RXhwb3J0UmVzdWx0LCBYbHN4RXhwb3J0U2hlZXQgfSBmcm9tICcuL3hsc3gudHlwZXMnO1xuXG5kZWNsYXJlIHZhciBYTFNYOiBOelNhZmVBbnk7XG5kZWNsYXJlIHZhciBjcHRhYmxlOiBOelNhZmVBbnk7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgWGxzeFNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IGh0dHAgPSBpbmplY3QoSHR0cENsaWVudCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgbGF6eSA9IGluamVjdChMYXp5U2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgbmdab25lID0gaW5qZWN0KE5nWm9uZSk7XG5cbiAgcHJpdmF0ZSBjb2c6IEFsYWluWGxzeENvbmZpZztcblxuICBjb25zdHJ1Y3Rvcihjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIHRoaXMuY29nID0gY29uZmlnU3J2Lm1lcmdlKCd4bHN4Jywge1xuICAgICAgdXJsOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS94bHN4L2Rpc3QveGxzeC5mdWxsLm1pbi5qcycsXG4gICAgICBtb2R1bGVzOiBbYGh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0veGxzeC9kaXN0L2NwZXhjZWwuanNgXVxuICAgIH0pITtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xuICAgIHJldHVybiB0eXBlb2YgWExTWCAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKFtdKVxuICAgICAgOiB0aGlzLmxhenkubG9hZChbdGhpcy5jb2cudXJsIV0uY29uY2F0KHRoaXMuY29nLm1vZHVsZXMhKSk7XG4gIH1cblxuICBAWm9uZU91dHNpZGUoKVxuICBwcml2YXRlIHJlYWQoZGF0YTogTnpTYWZlQW55KTogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnlbXVtdIH0ge1xuICAgIGNvbnN0IHtcbiAgICAgIHJlYWQsXG4gICAgICB1dGlsczogeyBzaGVldF90b19qc29uIH1cbiAgICB9ID0gWExTWDtcbiAgICBjb25zdCByZXQ6IE56U2FmZUFueSA9IHt9O1xuICAgIGNvbnN0IGJ1ZiA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICAgIGxldCB0eXBlID0gJ2FycmF5JztcbiAgICBpZiAoIWlzVXRmOChidWYpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gY3B0YWJsZS51dGlscy5kZWNvZGUoOTM2LCBidWYpO1xuICAgICAgICB0eXBlID0gJ3N0cmluZyc7XG4gICAgICB9IGNhdGNoIHt9XG4gICAgfVxuICAgIGNvbnN0IHdiID0gcmVhZChkYXRhLCB7IHR5cGUgfSk7XG4gICAgd2IuU2hlZXROYW1lcy5mb3JFYWNoKChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHNoZWV0OiBOelNhZmVBbnkgPSB3Yi5TaGVldHNbbmFtZV07XG4gICAgICByZXRbbmFtZV0gPSBzaGVldF90b19qc29uKHNoZWV0LCB7IGhlYWRlcjogMSB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIOWvvOWFpUV4Y2Vs5bm26L6T5Ye6SlNPTu+8jOaUr+aMgSBgPGlucHV0IHR5cGU9XCJmaWxlXCI+YOOAgVVSTCDlvaLlvI9cbiAgICovXG4gIGltcG9ydChmaWxlT3JVcmw6IEZpbGUgfCBzdHJpbmcpOiBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55W11bXSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55W11bXSB9PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByID0gKGRhdGE6IE56U2FmZUFueSk6IHZvaWQgPT4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHJlc29sdmUodGhpcy5yZWFkKGRhdGEpKSk7XG4gICAgICB0aGlzLmluaXQoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgLy8gZnJvbSB1cmxcbiAgICAgICAgICBpZiAodHlwZW9mIGZpbGVPclVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuaHR0cC5yZXF1ZXN0KCdHRVQnLCBmaWxlT3JVcmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgIG5leHQ6IChyZXM6IEFycmF5QnVmZmVyKSA9PiByKG5ldyBVaW50OEFycmF5KHJlcykpLFxuICAgICAgICAgICAgICBlcnJvcjogKGVycjogTnpTYWZlQW55KSA9PiByZWplY3QoZXJyKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGZyb20gZmlsZVxuICAgICAgICAgIGNvbnN0IHJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBOelNhZmVBbnkpID0+IHIoZS50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgICByZWFkZXIub25lcnJvciA9IChlOiBOelNhZmVBbnkpID0+IHJlamVjdChlKTtcbiAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZU9yVXJsKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHJlamVjdChgVW5hYmxlIHRvIGxvYWQgeGxzeC5qc2ApKTtcbiAgICB9KTtcbiAgfVxuXG4gIEBab25lT3V0c2lkZSgpXG4gIGFzeW5jIGV4cG9ydChvcHRpb25zOiBYbHN4RXhwb3J0T3B0aW9ucyk6IFByb21pc2U8WGxzeEV4cG9ydFJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxYbHN4RXhwb3J0UmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmluaXQoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgb3B0aW9ucyA9IHsgZm9ybWF0OiAneGxzeCcsIC4uLm9wdGlvbnMgfTtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB3cml0ZUZpbGUsXG4gICAgICAgICAgICB1dGlsczogeyBib29rX25ldywgYW9hX3RvX3NoZWV0LCBib29rX2FwcGVuZF9zaGVldCB9XG4gICAgICAgICAgfSA9IFhMU1g7XG4gICAgICAgICAgY29uc3Qgd2I6IE56U2FmZUFueSA9IGJvb2tfbmV3KCk7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5zaGVldHMpKSB7XG4gICAgICAgICAgICAob3B0aW9ucy5zaGVldHMgYXMgWGxzeEV4cG9ydFNoZWV0W10pLmZvckVhY2goKHZhbHVlOiBYbHN4RXhwb3J0U2hlZXQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgd3M6IE56U2FmZUFueSA9IGFvYV90b19zaGVldCh2YWx1ZS5kYXRhKTtcbiAgICAgICAgICAgICAgYm9va19hcHBlbmRfc2hlZXQod2IsIHdzLCB2YWx1ZS5uYW1lIHx8IGBTaGVldCR7aW5kZXggKyAxfWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdiLlNoZWV0TmFtZXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLnNoZWV0cyk7XG4gICAgICAgICAgICB3Yi5TaGVldHMgPSBvcHRpb25zLnNoZWV0cztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3B0aW9ucy5jYWxsYmFjaykgb3B0aW9ucy5jYWxsYmFjayh3Yik7XG5cbiAgICAgICAgICBjb25zdCBmaWxlbmFtZSA9IG9wdGlvbnMuZmlsZW5hbWUgfHwgYGV4cG9ydC4ke29wdGlvbnMuZm9ybWF0fWA7XG4gICAgICAgICAgd3JpdGVGaWxlKHdiLCBmaWxlbmFtZSwge1xuICAgICAgICAgICAgYm9va1R5cGU6IG9wdGlvbnMuZm9ybWF0LFxuICAgICAgICAgICAgYm9va1NTVDogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgLi4ub3B0aW9ucy5vcHRzXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXNvbHZlKHsgZmlsZW5hbWUsIHdiIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlamVjdChlcnIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlbDmja7ovaznrKblj7flkI1cbiAgICogLSBgMWAgPT4gYEFgXG4gICAqIC0gYDI3YCA9PiBgQUFgXG4gICAqIC0gYDcwM2AgPT4gYEFBQWBcbiAgICovXG4gIG51bWJlclRvU2NoZW1hKHZhbDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGFydENvZGUgPSAnQScuY2hhckNvZGVBdCgwKTtcbiAgICBsZXQgcmVzID0gJyc7XG5cbiAgICBkbyB7XG4gICAgICAtLXZhbDtcbiAgICAgIHJlcyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RhcnRDb2RlICsgKHZhbCAlIDI2KSkgKyByZXM7XG4gICAgICB2YWwgPSAodmFsIC8gMjYpID4+IDA7XG4gICAgfSB3aGlsZSAodmFsID4gMCk7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG4iXX0=