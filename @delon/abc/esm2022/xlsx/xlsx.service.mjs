import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import isUtf8 from 'isutf8';
import { ZoneOutside } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@delon/util/other";
import * as i3 from "@delon/util/config";
class XlsxService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: XlsxService, deps: [{ token: i1.HttpClient }, { token: i2.LazyService }, { token: i3.AlainConfigService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: XlsxService, providedIn: 'root' }); }
}
__decorate([
    ZoneOutside()
], XlsxService.prototype, "read", null);
__decorate([
    ZoneOutside()
], XlsxService.prototype, "export", null);
export { XlsxService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: XlsxService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.LazyService }, { type: i3.AlainConfigService }, { type: i0.NgZone }]; }, propDecorators: { read: [], export: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3hsc3gveGxzeC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUc1QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBU3BELE1BQ2EsV0FBVztJQUN0QixZQUNVLElBQWdCLEVBQ2hCLElBQWlCLEVBQ3pCLFNBQTZCLEVBQ3JCLE1BQWM7UUFIZCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFNBQUksR0FBSixJQUFJLENBQWE7UUFFakIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUV0QixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2pDLEdBQUcsRUFBRSx5REFBeUQ7WUFDOUQsT0FBTyxFQUFFLENBQUMsbURBQW1ELENBQUM7U0FDL0QsQ0FBRSxDQUFDO0lBQ04sQ0FBQztJQUdPLElBQUk7UUFDVixPQUFPLE9BQU8sSUFBSSxLQUFLLFdBQVc7WUFDaEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBUSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBR08sSUFBSSxDQUFDLElBQWU7UUFDMUIsTUFBTSxFQUNKLElBQUksRUFDSixLQUFLLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFDekIsR0FBRyxJQUFJLENBQUM7UUFDVCxNQUFNLEdBQUcsR0FBYyxFQUFFLENBQUM7UUFD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QUNELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsY0FBYyxDQUFDLEdBQVc7UUFDeEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFFYixHQUFHO1lBQ0QsRUFBRSxHQUFHLENBQUM7WUFDTixHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDeEQsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QixRQUFRLEdBQUcsR0FBRyxDQUFDLEVBQUU7UUFFbEIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzhHQTNIVSxXQUFXO2tIQUFYLFdBQVcsY0FERSxNQUFNOztBQXNCdEI7SUFEUCxXQUFXLEVBQUU7dUNBcUJiO0FBNkJLO0lBREwsV0FBVyxFQUFFO3lDQW1DYjtTQXhHVSxXQUFXOzJGQUFYLFdBQVc7a0JBRHZCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFO2lMQXNCeEIsSUFBSSxNQWlETixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgaXNVdGY4IGZyb20gJ2lzdXRmOCc7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5YbHN4Q29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IFpvbmVPdXRzaWRlIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IExhenlSZXN1bHQsIExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBYbHN4RXhwb3J0T3B0aW9ucywgWGxzeEV4cG9ydFJlc3VsdCwgWGxzeEV4cG9ydFNoZWV0IH0gZnJvbSAnLi94bHN4LnR5cGVzJztcblxuZGVjbGFyZSB2YXIgWExTWDogTnpTYWZlQW55O1xuZGVjbGFyZSB2YXIgY3B0YWJsZTogTnpTYWZlQW55O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFhsc3hTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgbGF6eTogTGF6eVNlcnZpY2UsXG4gICAgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICB0aGlzLmNvZyA9IGNvbmZpZ1Nydi5tZXJnZSgneGxzeCcsIHtcbiAgICAgIHVybDogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0veGxzeC9kaXN0L3hsc3guZnVsbC5taW4uanMnLFxuICAgICAgbW9kdWxlczogW2BodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3hsc3gvZGlzdC9jcGV4Y2VsLmpzYF1cbiAgICB9KSE7XG4gIH1cbiAgcHJpdmF0ZSBjb2c6IEFsYWluWGxzeENvbmZpZztcblxuICBwcml2YXRlIGluaXQoKTogUHJvbWlzZTxMYXp5UmVzdWx0W10+IHtcbiAgICByZXR1cm4gdHlwZW9mIFhMU1ggIT09ICd1bmRlZmluZWQnXG4gICAgICA/IFByb21pc2UucmVzb2x2ZShbXSlcbiAgICAgIDogdGhpcy5sYXp5LmxvYWQoW3RoaXMuY29nLnVybCFdLmNvbmNhdCh0aGlzLmNvZy5tb2R1bGVzISkpO1xuICB9XG5cbiAgQFpvbmVPdXRzaWRlKClcbiAgcHJpdmF0ZSByZWFkKGRhdGE6IE56U2FmZUFueSk6IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55W11bXSB9IHtcbiAgICBjb25zdCB7XG4gICAgICByZWFkLFxuICAgICAgdXRpbHM6IHsgc2hlZXRfdG9fanNvbiB9XG4gICAgfSA9IFhMU1g7XG4gICAgY29uc3QgcmV0OiBOelNhZmVBbnkgPSB7fTtcbiAgICBjb25zdCBidWYgPSBuZXcgVWludDhBcnJheShkYXRhKTtcbiAgICBsZXQgdHlwZSA9ICdhcnJheSc7XG4gICAgaWYgKCFpc1V0ZjgoYnVmKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IGNwdGFibGUudXRpbHMuZGVjb2RlKDkzNiwgYnVmKTtcbiAgICAgICAgdHlwZSA9ICdzdHJpbmcnO1xuICAgICAgfSBjYXRjaCB7fVxuICAgIH1cbiAgICBjb25zdCB3YiA9IHJlYWQoZGF0YSwgeyB0eXBlIH0pO1xuICAgIHdiLlNoZWV0TmFtZXMuZm9yRWFjaCgobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBzaGVldDogTnpTYWZlQW55ID0gd2IuU2hlZXRzW25hbWVdO1xuICAgICAgcmV0W25hbWVdID0gc2hlZXRfdG9fanNvbihzaGVldCwgeyBoZWFkZXI6IDEgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiDlr7zlhaVFeGNlbOW5tui+k+WHukpTT07vvIzmlK/mjIEgYDxpbnB1dCB0eXBlPVwiZmlsZVwiPmDjgIFVUkwg5b2i5byPXG4gICAqL1xuICBpbXBvcnQoZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nKTogUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueVtdW10gfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueVtdW10gfT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgciA9IChkYXRhOiBOelNhZmVBbnkpOiB2b2lkID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiByZXNvbHZlKHRoaXMucmVhZChkYXRhKSkpO1xuICAgICAgdGhpcy5pbml0KClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vIGZyb20gdXJsXG4gICAgICAgICAgaWYgKHR5cGVvZiBmaWxlT3JVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmh0dHAucmVxdWVzdCgnR0VUJywgZmlsZU9yVXJsLCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICBuZXh0OiAocmVzOiBBcnJheUJ1ZmZlcikgPT4gcihuZXcgVWludDhBcnJheShyZXMpKSxcbiAgICAgICAgICAgICAgZXJyb3I6IChlcnI6IE56U2FmZUFueSkgPT4gcmVqZWN0KGVycilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBmcm9tIGZpbGVcbiAgICAgICAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZTogTnpTYWZlQW55KSA9PiByKGUudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoZTogTnpTYWZlQW55KSA9PiByZWplY3QoZSk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGVPclVybCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiByZWplY3QoYFVuYWJsZSB0byBsb2FkIHhsc3guanNgKSk7XG4gICAgfSk7XG4gIH1cblxuICBAWm9uZU91dHNpZGUoKVxuICBhc3luYyBleHBvcnQob3B0aW9uczogWGxzeEV4cG9ydE9wdGlvbnMpOiBQcm9taXNlPFhsc3hFeHBvcnRSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8WGxzeEV4cG9ydFJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5pbml0KClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIG9wdGlvbnMgPSB7IGZvcm1hdDogJ3hsc3gnLCAuLi5vcHRpb25zIH07XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgd3JpdGVGaWxlLFxuICAgICAgICAgICAgdXRpbHM6IHsgYm9va19uZXcsIGFvYV90b19zaGVldCwgYm9va19hcHBlbmRfc2hlZXQgfVxuICAgICAgICAgIH0gPSBYTFNYO1xuICAgICAgICAgIGNvbnN0IHdiOiBOelNhZmVBbnkgPSBib29rX25ldygpO1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMuc2hlZXRzKSkge1xuICAgICAgICAgICAgKG9wdGlvbnMuc2hlZXRzIGFzIFhsc3hFeHBvcnRTaGVldFtdKS5mb3JFYWNoKCh2YWx1ZTogWGxzeEV4cG9ydFNoZWV0LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHdzOiBOelNhZmVBbnkgPSBhb2FfdG9fc2hlZXQodmFsdWUuZGF0YSk7XG4gICAgICAgICAgICAgIGJvb2tfYXBwZW5kX3NoZWV0KHdiLCB3cywgdmFsdWUubmFtZSB8fCBgU2hlZXQke2luZGV4ICsgMX1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3Yi5TaGVldE5hbWVzID0gT2JqZWN0LmtleXMob3B0aW9ucy5zaGVldHMpO1xuICAgICAgICAgICAgd2IuU2hlZXRzID0gb3B0aW9ucy5zaGVldHM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG9wdGlvbnMuY2FsbGJhY2spIG9wdGlvbnMuY2FsbGJhY2sod2IpO1xuXG4gICAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBvcHRpb25zLmZpbGVuYW1lIHx8IGBleHBvcnQuJHtvcHRpb25zLmZvcm1hdH1gO1xuICAgICAgICAgIHdyaXRlRmlsZSh3YiwgZmlsZW5hbWUsIHtcbiAgICAgICAgICAgIGJvb2tUeXBlOiBvcHRpb25zLmZvcm1hdCxcbiAgICAgICAgICAgIGJvb2tTU1Q6IGZhbHNlLFxuICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgIC4uLm9wdGlvbnMub3B0c1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmVzb2x2ZSh7IGZpbGVuYW1lLCB3YiB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5pWw5o2u6L2s56ym5Y+35ZCNXG4gICAqIC0gYDFgID0+IGBBYFxuICAgKiAtIGAyN2AgPT4gYEFBYFxuICAgKiAtIGA3MDNgID0+IGBBQUFgXG4gICAqL1xuICBudW1iZXJUb1NjaGVtYSh2YWw6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RhcnRDb2RlID0gJ0EnLmNoYXJDb2RlQXQoMCk7XG4gICAgbGV0IHJlcyA9ICcnO1xuXG4gICAgZG8ge1xuICAgICAgLS12YWw7XG4gICAgICByZXMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHN0YXJ0Q29kZSArICh2YWwgJSAyNikpICsgcmVzO1xuICAgICAgdmFsID0gKHZhbCAvIDI2KSA+PiAwO1xuICAgIH0gd2hpbGUgKHZhbCA+IDApO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuIl19