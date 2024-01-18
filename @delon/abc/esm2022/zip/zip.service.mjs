import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { ZoneOutside } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@delon/util/other";
import * as i3 from "@delon/util/config";
export class ZipService {
    constructor(http, lazy, configSrv, ngZone) {
        this.http = http;
        this.lazy = lazy;
        this.ngZone = ngZone;
        this.cog = configSrv.merge('zip', {
            url: 'https://cdn.jsdelivr.net/npm/jszip@3/dist/jszip.min.js',
            utils: []
        });
    }
    init() {
        return this.lazy.load([this.cog.url].concat(this.cog.utils));
    }
    check(zip) {
        if (!zip)
            throw new Error('get instance via `ZipService.create()`');
    }
    /** 解压 */
    read(fileOrUrl, options) {
        return new Promise((resolve, reject) => {
            const resolveCallback = (data) => {
                this.ngZone.run(() => resolve(data));
            };
            this.init().then(() => {
                // from url
                if (typeof fileOrUrl === 'string') {
                    this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe({
                        next: (res) => {
                            JSZip.loadAsync(res, options).then((ret) => resolveCallback(ret));
                        },
                        error: err => {
                            reject(err);
                        }
                    });
                    return;
                }
                // from file
                const reader = new FileReader();
                reader.onload = (e) => {
                    JSZip.loadAsync(e.target.result, options).then((ret) => resolveCallback(ret));
                };
                reader.readAsBinaryString(fileOrUrl);
            });
        });
    }
    /** 创建 Zip 实例，用于创建压缩文件 */
    create() {
        return new Promise(resolve => {
            this.init()
                .then(() => {
                const zipFile = new JSZip();
                resolve(zipFile);
            })
                .catch(() => resolve(null));
        });
    }
    /**
     * 下载URL资源并写入 zip
     *
     * @param zip Zip 实例
     * @param path Zip 路径，例如： `text.txt`、`txt/hi.txt`
     * @param url URL 地址
     */
    pushUrl(zip, path, url) {
        this.check(zip);
        return new Promise((resolve, reject) => {
            this.http.request('GET', url, { responseType: 'arraybuffer' }).subscribe({
                next: (res) => {
                    zip.file(path, res);
                    resolve();
                },
                error: error => {
                    reject({ url, error });
                }
            });
        });
    }
    /**
     * 保存Zip并执行打开保存对话框
     *
     * @param zip zip 对象，务必通过 `create()` 构建
     * @param options 额外参数，
     */
    save(zip, options) {
        this.check(zip);
        const opt = { filename: 'download.zip', ...options };
        return new Promise((resolve, reject) => {
            zip.generateAsync({ type: 'blob', ...opt.options }, opt.update).then(data => {
                if (opt.callback)
                    opt.callback(data);
                saveAs(data, opt.filename);
                resolve();
            }, err => {
                reject(err);
            });
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ZipService, deps: [{ token: i1.HttpClient }, { token: i2.LazyService }, { token: i3.AlainConfigService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ZipService, providedIn: 'root' }); }
}
__decorate([
    ZoneOutside()
], ZipService.prototype, "read", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ZipService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1.HttpClient }, { type: i2.LazyService }, { type: i3.AlainConfigService }, { type: i0.NgZone }], propDecorators: { read: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvemlwL3ppcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFJcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQVNwRCxNQUFNLE9BQU8sVUFBVTtJQUdyQixZQUNVLElBQWdCLEVBQ2hCLElBQWlCLEVBQ3pCLFNBQTZCLEVBQ3JCLE1BQWM7UUFIZCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFNBQUksR0FBSixJQUFJLENBQWE7UUFFakIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUV0QixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ2hDLEdBQUcsRUFBRSx3REFBd0Q7WUFDN0QsS0FBSyxFQUFFLEVBQUU7U0FDVixDQUFFLENBQUM7SUFDTixDQUFDO0lBRU8sSUFBSTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQU0sQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVPLEtBQUssQ0FBQyxHQUFzQjtRQUNsQyxJQUFJLENBQUMsR0FBRztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsU0FBUztJQUVULElBQUksQ0FBQyxTQUF3QixFQUFFLE9BQW9DO1FBQ2pFLE9BQU8sSUFBSSxPQUFPLENBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDaEQsTUFBTSxlQUFl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QUFxQixFQUFFLE9BQXdCO1FBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsTUFBTSxHQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEdBQUcsT0FBTyxFQUFvQixDQUFDO1FBQ3ZFLE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDM0MsR0FBSSxDQUFDLGFBQWEsQ0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFlLEVBQUUsR0FBRyxDQUFDLE1BQW1CLENBQUMsQ0FBQyxJQUFJLENBQ3JHLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksR0FBRyxDQUFDLFFBQVE7b0JBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNCLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxFQUNELEdBQUcsQ0FBQyxFQUFFO2dCQUNKLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzhHQTVHVSxVQUFVO2tIQUFWLFVBQVUsY0FERyxNQUFNOztBQTBCOUI7SUFEQyxXQUFXLEVBQUU7c0NBMkJiOzJGQW5EVSxVQUFVO2tCQUR0QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTsrSkEwQmhDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xuaW1wb3J0IHR5cGUganNaaXBUeXBlIGZyb20gJ2pzemlwJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblppcENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBab25lT3V0c2lkZSB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBMYXp5UmVzdWx0LCBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgWmlwU2F2ZU9wdGlvbnMgfSBmcm9tICcuL3ppcC50eXBlcyc7XG5cbmRlY2xhcmUgdmFyIEpTWmlwOiBqc1ppcFR5cGU7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgWmlwU2VydmljZSB7XG4gIHByaXZhdGUgY29nOiBBbGFpblppcENvbmZpZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBsYXp5OiBMYXp5U2VydmljZSxcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIHRoaXMuY29nID0gY29uZmlnU3J2Lm1lcmdlKCd6aXAnLCB7XG4gICAgICB1cmw6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2pzemlwQDMvZGlzdC9qc3ppcC5taW4uanMnLFxuICAgICAgdXRpbHM6IFtdXG4gICAgfSkhO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IFByb21pc2U8TGF6eVJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMubGF6eS5sb2FkKFt0aGlzLmNvZy51cmwhXS5jb25jYXQodGhpcy5jb2cudXRpbHMhKSk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrKHppcD86IGpzWmlwVHlwZSB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoIXppcCkgdGhyb3cgbmV3IEVycm9yKCdnZXQgaW5zdGFuY2UgdmlhIGBaaXBTZXJ2aWNlLmNyZWF0ZSgpYCcpO1xuICB9XG5cbiAgLyoqIOino+WOiyAqL1xuICBAWm9uZU91dHNpZGUoKVxuICByZWFkKGZpbGVPclVybDogRmlsZSB8IHN0cmluZywgb3B0aW9ucz86IGpzWmlwVHlwZS5KU1ppcExvYWRPcHRpb25zKTogUHJvbWlzZTxqc1ppcFR5cGU+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8anNaaXBUeXBlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXNvbHZlQ2FsbGJhY2sgPSAoZGF0YToganNaaXBUeXBlKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiByZXNvbHZlKGRhdGEpKTtcbiAgICAgIH07XG4gICAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gZnJvbSB1cmxcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxlT3JVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5odHRwLnJlcXVlc3QoJ0dFVCcsIGZpbGVPclVybCwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSkuc3Vic2NyaWJlKHtcbiAgICAgICAgICAgIG5leHQ6IChyZXM6IEFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgICAgICAgIEpTWmlwLmxvYWRBc3luYyhyZXMsIG9wdGlvbnMpLnRoZW4oKHJldDoganNaaXBUeXBlKSA9PiByZXNvbHZlQ2FsbGJhY2socmV0KSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGVyciA9PiB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBmcm9tIGZpbGVcbiAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBQcm9ncmVzc0V2ZW50PEZpbGVSZWFkZXI+KSA9PiB7XG4gICAgICAgICAgSlNaaXAubG9hZEFzeW5jKGUudGFyZ2V0IS5yZXN1bHQgYXMgQXJyYXlCdWZmZXIsIG9wdGlvbnMpLnRoZW4oKHJldDoganNaaXBUeXBlKSA9PiByZXNvbHZlQ2FsbGJhY2socmV0KSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZU9yVXJsIGFzIEZpbGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiog5Yib5bu6IFppcCDlrp7kvovvvIznlKjkuo7liJvlu7rljovnvKnmlofku7YgKi9cbiAgY3JlYXRlKCk6IFByb21pc2U8anNaaXBUeXBlIHwgbnVsbD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxqc1ppcFR5cGUgfCBudWxsPihyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCB6aXBGaWxlID0gbmV3IEpTWmlwKCk7XG4gICAgICAgICAgcmVzb2x2ZSh6aXBGaWxlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHJlc29sdmUobnVsbCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOS4i+i9vVVSTOi1hOa6kOW5tuWGmeWFpSB6aXBcbiAgICpcbiAgICogQHBhcmFtIHppcCBaaXAg5a6e5L6LXG4gICAqIEBwYXJhbSBwYXRoIFppcCDot6/lvoTvvIzkvovlpoLvvJogYHRleHQudHh0YOOAgWB0eHQvaGkudHh0YFxuICAgKiBAcGFyYW0gdXJsIFVSTCDlnLDlnYBcbiAgICovXG4gIHB1c2hVcmwoemlwOiBqc1ppcFR5cGUgfCBudWxsLCBwYXRoOiBzdHJpbmcsIHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5jaGVjayh6aXApO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmh0dHAucmVxdWVzdCgnR0VUJywgdXJsLCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KS5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAocmVzOiBBcnJheUJ1ZmZlcikgPT4ge1xuICAgICAgICAgIHppcCEuZmlsZShwYXRoLCByZXMpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGVycm9yID0+IHtcbiAgICAgICAgICByZWplY3QoeyB1cmwsIGVycm9yIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkv53lrZhaaXDlubbmiafooYzmiZPlvIDkv53lrZjlr7nor53moYZcbiAgICpcbiAgICogQHBhcmFtIHppcCB6aXAg5a+56LGh77yM5Yqh5b+F6YCa6L+HIGBjcmVhdGUoKWAg5p6E5bu6XG4gICAqIEBwYXJhbSBvcHRpb25zIOmineWkluWPguaVsO+8jFxuICAgKi9cbiAgc2F2ZSh6aXA6IGpzWmlwVHlwZSB8IG51bGwsIG9wdGlvbnM/OiBaaXBTYXZlT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2hlY2soemlwKTtcbiAgICBjb25zdCBvcHQgPSB7IGZpbGVuYW1lOiAnZG93bmxvYWQuemlwJywgLi4ub3B0aW9ucyB9IGFzIFppcFNhdmVPcHRpb25zO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB6aXAhLmdlbmVyYXRlQXN5bmM8J2Jsb2InPih7IHR5cGU6ICdibG9iJywgLi4ub3B0Lm9wdGlvbnMgfSBhcyBOelNhZmVBbnksIG9wdC51cGRhdGUgYXMgTnpTYWZlQW55KS50aGVuKFxuICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICBpZiAob3B0LmNhbGxiYWNrKSBvcHQuY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgc2F2ZUFzKGRhdGEsIG9wdC5maWxlbmFtZSk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=