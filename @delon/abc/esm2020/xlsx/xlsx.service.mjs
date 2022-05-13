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
XlsxService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: XlsxService, deps: [{ token: i1.HttpClient }, { token: i2.LazyService }, { token: i3.AlainConfigService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable });
XlsxService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: XlsxService, providedIn: 'root' });
__decorate([
    ZoneOutside()
], XlsxService.prototype, "read", null);
__decorate([
    ZoneOutside()
], XlsxService.prototype, "export", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: XlsxService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.LazyService }, { type: i3.AlainConfigService }, { type: i0.NgZone }]; }, propDecorators: { read: [], export: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3hsc3gveGxzeC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUc1QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBVXBELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFlBQ1UsSUFBZ0IsRUFDaEIsSUFBaUIsRUFDekIsU0FBNkIsRUFDckIsTUFBYztRQUhkLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUVqQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXRCLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDakMsR0FBRyxFQUFFLHlEQUF5RDtZQUM5RCxPQUFPLEVBQUUsQ0FBQyxtREFBbUQsQ0FBQztTQUMvRCxDQUFFLENBQUM7SUFDTixDQUFDO0lBR08sSUFBSTtRQUNWLE9BQU8sT0FBTyxJQUFJLEtBQUssV0FBVztZQUNoQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFHTyxJQUFJLENBQUMsSUFBZTtRQUMxQixNQUFNLEVBQ0osSUFBSSxFQUNKLEtBQUssRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUN6QixHQUFHLElBQUksQ0FBQztRQUNULE1BQU0sR0FBRyxHQUFjLEVBQUUsQ0FB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QUNELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsY0FBYyxDQUFDLEdBQVc7UUFDeEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFFYixHQUFHO1lBQ0QsRUFBRSxHQUFHLENBQUM7WUFDTixHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDeEQsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QixRQUFRLEdBQUcsR0FBRyxDQUFDLEVBQUU7UUFFbEIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzt3R0EzSFUsV0FBVzs0R0FBWCxXQUFXLGNBREUsTUFBTTtBQXNCOUI7SUFEQyxXQUFXLEVBQUU7dUNBcUJiO0FBNkJEO0lBREMsV0FBVyxFQUFFO3lDQW1DYjsyRkF4R1UsV0FBVztrQkFEdkIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7aUxBc0J4QixJQUFJLE1BaUROLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCBpc1V0ZjggZnJvbSAnaXN1dGY4JztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblhsc3hDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgWm9uZU91dHNpZGUgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTGF6eVJlc3VsdCwgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IFhsc3hFeHBvcnRPcHRpb25zLCBYbHN4RXhwb3J0UmVzdWx0LCBYbHN4RXhwb3J0U2hlZXQgfSBmcm9tICcuL3hsc3gudHlwZXMnO1xuXG5kZWNsYXJlIHZhciBYTFNYOiBOelNhZmVBbnk7XG5kZWNsYXJlIHZhciBjcHRhYmxlOiBOelNhZmVBbnk7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgWGxzeFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBsYXp5OiBMYXp5U2VydmljZSxcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIHRoaXMuY29nID0gY29uZmlnU3J2Lm1lcmdlKCd4bHN4Jywge1xuICAgICAgdXJsOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS94bHN4L2Rpc3QveGxzeC5mdWxsLm1pbi5qcycsXG4gICAgICBtb2R1bGVzOiBbYGh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0veGxzeC9kaXN0L2NwZXhjZWwuanNgXVxuICAgIH0pITtcbiAgfVxuICBwcml2YXRlIGNvZzogQWxhaW5YbHN4Q29uZmlnO1xuXG4gIHByaXZhdGUgaW5pdCgpOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xuICAgIHJldHVybiB0eXBlb2YgWExTWCAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKFtdKVxuICAgICAgOiB0aGlzLmxhenkubG9hZChbdGhpcy5jb2cudXJsIV0uY29uY2F0KHRoaXMuY29nLm1vZHVsZXMhKSk7XG4gIH1cblxuICBAWm9uZU91dHNpZGUoKVxuICBwcml2YXRlIHJlYWQoZGF0YTogTnpTYWZlQW55KTogeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnlbXVtdIH0ge1xuICAgIGNvbnN0IHtcbiAgICAgIHJlYWQsXG4gICAgICB1dGlsczogeyBzaGVldF90b19qc29uIH1cbiAgICB9ID0gWExTWDtcbiAgICBjb25zdCByZXQ6IE56U2FmZUFueSA9IHt9O1xuICAgIGNvbnN0IGJ1ZiA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICAgIGxldCB0eXBlID0gJ2FycmF5JztcbiAgICBpZiAoIWlzVXRmOChidWYpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gY3B0YWJsZS51dGlscy5kZWNvZGUoOTM2LCBidWYpO1xuICAgICAgICB0eXBlID0gJ3N0cmluZyc7XG4gICAgICB9IGNhdGNoIHt9XG4gICAgfVxuICAgIGNvbnN0IHdiID0gcmVhZChkYXRhLCB7IHR5cGUgfSk7XG4gICAgd2IuU2hlZXROYW1lcy5mb3JFYWNoKChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHNoZWV0OiBOelNhZmVBbnkgPSB3Yi5TaGVldHNbbmFtZV07XG4gICAgICByZXRbbmFtZV0gPSBzaGVldF90b19qc29uKHNoZWV0LCB7IGhlYWRlcjogMSB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIOWvvOWFpUV4Y2Vs5bm26L6T5Ye6SlNPTu+8jOaUr+aMgSBgPGlucHV0IHR5cGU9XCJmaWxlXCI+YOOAgVVSTCDlvaLlvI9cbiAgICovXG4gIGltcG9ydChmaWxlT3JVcmw6IEZpbGUgfCBzdHJpbmcpOiBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55W11bXSB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55W11bXSB9PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByID0gKGRhdGE6IE56U2FmZUFueSk6IHZvaWQgPT4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHJlc29sdmUodGhpcy5yZWFkKGRhdGEpKSk7XG4gICAgICB0aGlzLmluaXQoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgLy8gZnJvbSB1cmxcbiAgICAgICAgICBpZiAodHlwZW9mIGZpbGVPclVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuaHR0cC5yZXF1ZXN0KCdHRVQnLCBmaWxlT3JVcmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgIG5leHQ6IChyZXM6IEFycmF5QnVmZmVyKSA9PiByKG5ldyBVaW50OEFycmF5KHJlcykpLFxuICAgICAgICAgICAgICBlcnJvcjogKGVycjogTnpTYWZlQW55KSA9PiByZWplY3QoZXJyKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGZyb20gZmlsZVxuICAgICAgICAgIGNvbnN0IHJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBOelNhZmVBbnkpID0+IHIoZS50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgICByZWFkZXIub25lcnJvciA9IChlOiBOelNhZmVBbnkpID0+IHJlamVjdChlKTtcbiAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZU9yVXJsKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHJlamVjdChgVW5hYmxlIHRvIGxvYWQgeGxzeC5qc2ApKTtcbiAgICB9KTtcbiAgfVxuXG4gIEBab25lT3V0c2lkZSgpXG4gIGFzeW5jIGV4cG9ydChvcHRpb25zOiBYbHN4RXhwb3J0T3B0aW9ucyk6IFByb21pc2U8WGxzeEV4cG9ydFJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxYbHN4RXhwb3J0UmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmluaXQoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgb3B0aW9ucyA9IHsgZm9ybWF0OiAneGxzeCcsIC4uLm9wdGlvbnMgfTtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB3cml0ZUZpbGUsXG4gICAgICAgICAgICB1dGlsczogeyBib29rX25ldywgYW9hX3RvX3NoZWV0LCBib29rX2FwcGVuZF9zaGVldCB9XG4gICAgICAgICAgfSA9IFhMU1g7XG4gICAgICAgICAgY29uc3Qgd2I6IE56U2FmZUFueSA9IGJvb2tfbmV3KCk7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5zaGVldHMpKSB7XG4gICAgICAgICAgICAob3B0aW9ucy5zaGVldHMgYXMgWGxzeEV4cG9ydFNoZWV0W10pLmZvckVhY2goKHZhbHVlOiBYbHN4RXhwb3J0U2hlZXQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgd3M6IE56U2FmZUFueSA9IGFvYV90b19zaGVldCh2YWx1ZS5kYXRhKTtcbiAgICAgICAgICAgICAgYm9va19hcHBlbmRfc2hlZXQod2IsIHdzLCB2YWx1ZS5uYW1lIHx8IGBTaGVldCR7aW5kZXggKyAxfWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdiLlNoZWV0TmFtZXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLnNoZWV0cyk7XG4gICAgICAgICAgICB3Yi5TaGVldHMgPSBvcHRpb25zLnNoZWV0cztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3B0aW9ucy5jYWxsYmFjaykgb3B0aW9ucy5jYWxsYmFjayh3Yik7XG5cbiAgICAgICAgICBjb25zdCBmaWxlbmFtZSA9IG9wdGlvbnMuZmlsZW5hbWUgfHwgYGV4cG9ydC4ke29wdGlvbnMuZm9ybWF0fWA7XG4gICAgICAgICAgd3JpdGVGaWxlKHdiLCBmaWxlbmFtZSwge1xuICAgICAgICAgICAgYm9va1R5cGU6IG9wdGlvbnMuZm9ybWF0LFxuICAgICAgICAgICAgYm9va1NTVDogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgLi4ub3B0aW9ucy5vcHRzXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXNvbHZlKHsgZmlsZW5hbWUsIHdiIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlamVjdChlcnIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlbDmja7ovaznrKblj7flkI1cbiAgICogLSBgMWAgPT4gYEFgXG4gICAqIC0gYDI3YCA9PiBgQUFgXG4gICAqIC0gYDcwM2AgPT4gYEFBQWBcbiAgICovXG4gIG51bWJlclRvU2NoZW1hKHZhbDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGFydENvZGUgPSAnQScuY2hhckNvZGVBdCgwKTtcbiAgICBsZXQgcmVzID0gJyc7XG5cbiAgICBkbyB7XG4gICAgICAtLXZhbDtcbiAgICAgIHJlcyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RhcnRDb2RlICsgKHZhbCAlIDI2KSkgKyByZXM7XG4gICAgICB2YWwgPSAodmFsIC8gMjYpID4+IDA7XG4gICAgfSB3aGlsZSAodmFsID4gMCk7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG4iXX0=