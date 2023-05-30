import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { ZoneOutside } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@delon/util/other";
import * as i3 from "@delon/util/config";
class ZipService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: ZipService, deps: [{ token: i1.HttpClient }, { token: i2.LazyService }, { token: i3.AlainConfigService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: ZipService, providedIn: 'root' }); }
}
__decorate([
    ZoneOutside()
], ZipService.prototype, "read", null);
export { ZipService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: ZipService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.LazyService }, { type: i3.AlainConfigService }, { type: i0.NgZone }]; }, propDecorators: { read: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvemlwL3ppcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFJcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQVFwRCxNQUNhLFVBQVU7SUFHckIsWUFDVSxJQUFnQixFQUNoQixJQUFpQixFQUN6QixTQUE2QixFQUNyQixNQUFjO1FBSGQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBRWpCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNoQyxHQUFHLEVBQUUsd0RBQXdEO1lBQzdELEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBRSxDQUFDO0lBQ04sQ0FBQztJQUVPLElBQUk7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTyxLQUFLLENBQUMsR0FBc0I7UUFDbEMsSUFBSSxDQUFDLEdBQUc7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELFNBQVM7SUFFVCxJQUFJLENBQUMsU0FBd0IsRUFBRSxPQUFvQztRQUNqRSxPQUFPLElBQUksT0FBTyxDQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ2hELE1BQU0sZUFBZSxHQUFH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O1FBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsTUFBTSxHQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEdBQUcsT0FBTyxFQUFvQixDQUFDO1FBQ3ZFLE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDM0MsR0FBSSxDQUFDLGFBQWEsQ0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFlLEVBQUUsR0FBRyxDQUFDLE1BQW1CLENBQUMsQ0FBQyxJQUFJLENBQ3JHLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksR0FBRyxDQUFDLFFBQVE7b0JBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNCLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxFQUNELEdBQUcsQ0FBQyxFQUFFO2dCQUNKLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzhHQTVHVSxVQUFVO2tIQUFWLFVBQVUsY0FERyxNQUFNOztBQTBCOUI7SUFEQyxXQUFXLEVBQUU7c0NBMkJiO1NBbkRVLFVBQVU7MkZBQVYsVUFBVTtrQkFEdEIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7aUxBMEJoQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcbmltcG9ydCB0eXBlIGpzWmlwVHlwZSBmcm9tICdqc3ppcCc7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5aaXBDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgWm9uZU91dHNpZGUgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTGF6eVJlc3VsdCwgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IFppcFNhdmVPcHRpb25zIH0gZnJvbSAnLi96aXAudHlwZXMnO1xuXG5kZWNsYXJlIHZhciBKU1ppcDoganNaaXBUeXBlO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFppcFNlcnZpY2Uge1xuICBwcml2YXRlIGNvZzogQWxhaW5aaXBDb25maWc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgbGF6eTogTGF6eVNlcnZpY2UsXG4gICAgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICB0aGlzLmNvZyA9IGNvbmZpZ1Nydi5tZXJnZSgnemlwJywge1xuICAgICAgdXJsOiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9qc3ppcEAzL2Rpc3QvanN6aXAubWluLmpzJyxcbiAgICAgIHV0aWxzOiBbXVxuICAgIH0pITtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLmxhenkubG9hZChbdGhpcy5jb2cudXJsIV0uY29uY2F0KHRoaXMuY29nLnV0aWxzISkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVjayh6aXA/OiBqc1ppcFR5cGUgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKCF6aXApIHRocm93IG5ldyBFcnJvcignZ2V0IGluc3RhbmNlIHZpYSBgWmlwU2VydmljZS5jcmVhdGUoKWAnKTtcbiAgfVxuXG4gIC8qKiDop6PljosgKi9cbiAgQFpvbmVPdXRzaWRlKClcbiAgcmVhZChmaWxlT3JVcmw6IEZpbGUgfCBzdHJpbmcsIG9wdGlvbnM/OiBqc1ppcFR5cGUuSlNaaXBMb2FkT3B0aW9ucyk6IFByb21pc2U8anNaaXBUeXBlPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGpzWmlwVHlwZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVzb2x2ZUNhbGxiYWNrID0gKGRhdGE6IGpzWmlwVHlwZSk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gcmVzb2x2ZShkYXRhKSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIGZyb20gdXJsXG4gICAgICAgIGlmICh0eXBlb2YgZmlsZU9yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaHR0cC5yZXF1ZXN0KCdHRVQnLCBmaWxlT3JVcmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiAocmVzOiBBcnJheUJ1ZmZlcikgPT4ge1xuICAgICAgICAgICAgICBKU1ppcC5sb2FkQXN5bmMocmVzLCBvcHRpb25zKS50aGVuKChyZXQ6IGpzWmlwVHlwZSkgPT4gcmVzb2x2ZUNhbGxiYWNrKHJldCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBlcnIgPT4ge1xuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZnJvbSBmaWxlXG4gICAgICAgIGNvbnN0IHJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZTogUHJvZ3Jlc3NFdmVudDxGaWxlUmVhZGVyPikgPT4ge1xuICAgICAgICAgIEpTWmlwLmxvYWRBc3luYyhlLnRhcmdldCEucmVzdWx0IGFzIEFycmF5QnVmZmVyLCBvcHRpb25zKS50aGVuKChyZXQ6IGpzWmlwVHlwZSkgPT4gcmVzb2x2ZUNhbGxiYWNrKHJldCkpO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGZpbGVPclVybCBhcyBGaWxlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIOWIm+W7uiBaaXAg5a6e5L6L77yM55So5LqO5Yib5bu65Y6L57yp5paH5Lu2ICovXG4gIGNyZWF0ZSgpOiBQcm9taXNlPGpzWmlwVHlwZSB8IG51bGw+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8anNaaXBUeXBlIHwgbnVsbD4ocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmluaXQoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc3QgemlwRmlsZSA9IG5ldyBKU1ppcCgpO1xuICAgICAgICAgIHJlc29sdmUoemlwRmlsZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiByZXNvbHZlKG51bGwpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuIvovb1VUkzotYTmupDlubblhpnlhaUgemlwXG4gICAqXG4gICAqIEBwYXJhbSB6aXAgWmlwIOWunuS+i1xuICAgKiBAcGFyYW0gcGF0aCBaaXAg6Lev5b6E77yM5L6L5aaC77yaIGB0ZXh0LnR4dGDjgIFgdHh0L2hpLnR4dGBcbiAgICogQHBhcmFtIHVybCBVUkwg5Zyw5Z2AXG4gICAqL1xuICBwdXNoVXJsKHppcDoganNaaXBUeXBlIHwgbnVsbCwgcGF0aDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2hlY2soemlwKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5odHRwLnJlcXVlc3QoJ0dFVCcsIHVybCwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSkuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogKHJlczogQXJyYXlCdWZmZXIpID0+IHtcbiAgICAgICAgICB6aXAhLmZpbGUocGF0aCwgcmVzKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBlcnJvciA9PiB7XG4gICAgICAgICAgcmVqZWN0KHsgdXJsLCBlcnJvciB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5L+d5a2YWmlw5bm25omn6KGM5omT5byA5L+d5a2Y5a+56K+d5qGGXG4gICAqXG4gICAqIEBwYXJhbSB6aXAgemlwIOWvueixoe+8jOWKoeW/hemAmui/hyBgY3JlYXRlKClgIOaehOW7ulxuICAgKiBAcGFyYW0gb3B0aW9ucyDpop3lpJblj4LmlbDvvIxcbiAgICovXG4gIHNhdmUoemlwOiBqc1ppcFR5cGUgfCBudWxsLCBvcHRpb25zPzogWmlwU2F2ZU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmNoZWNrKHppcCk7XG4gICAgY29uc3Qgb3B0ID0geyBmaWxlbmFtZTogJ2Rvd25sb2FkLnppcCcsIC4uLm9wdGlvbnMgfSBhcyBaaXBTYXZlT3B0aW9ucztcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgemlwIS5nZW5lcmF0ZUFzeW5jPCdibG9iJz4oeyB0eXBlOiAnYmxvYicsIC4uLm9wdC5vcHRpb25zIH0gYXMgTnpTYWZlQW55LCBvcHQudXBkYXRlIGFzIE56U2FmZUFueSkudGhlbihcbiAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgaWYgKG9wdC5jYWxsYmFjaykgb3B0LmNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgIHNhdmVBcyhkYXRhLCBvcHQuZmlsZW5hbWUpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxufVxuIl19