import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { LazyService } from '@delon/util/other';
import { saveAs } from 'file-saver';
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
            url: '//cdn.bootcss.com/jszip/3.3.0/jszip.min.js',
            utils: [],
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
                this.ngZone.runOutsideAngular(() => {
                    // from url
                    if (typeof fileOrUrl === 'string') {
                        this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe((res) => {
                            JSZip.loadAsync(res, options).then((ret) => resolveCallback(ret));
                        }, (err) => {
                            reject(err);
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
        });
    }
    /** 创建 Zip 实例，用于创建压缩文件 */
    create() {
        return new Promise(resolve => {
            this.init().then(() => {
                const zipFile = new JSZip();
                resolve(zipFile);
            });
        });
    }
    /**
     * 下载URL资源并写入 zip
     * @param zip Zip 实例
     * @param path Zip 路径，例如： `text.txt`、`txt/hi.txt`
     * @param url URL 地址
     */
    pushUrl(zip, path, url) {
        this.check(zip);
        return new Promise((resolve, reject) => {
            this.http.request('GET', url, { responseType: 'arraybuffer' }).subscribe((res) => {
                zip.file(path, res);
                resolve();
            }, (error) => {
                reject({ url, error });
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
        const opt = Object.assign({}, options);
        return new Promise((resolve, reject) => {
            zip.generateAsync(Object.assign({ type: 'blob' }, opt.options), opt.update).then((data) => {
                if (opt.callback)
                    opt.callback(data);
                saveAs(data, opt.filename || 'download.zip');
                resolve();
            }, (err) => {
                reject(err);
            });
        });
    }
}
/** @nocollapse */ ZipService.ɵfac = function ZipService_Factory(t) { return new (t || ZipService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LazyService), i0.ɵɵinject(i3.AlainConfigService), i0.ɵɵinject(i0.NgZone)); };
/** @nocollapse */ ZipService.ɵprov = i0.ɵɵdefineInjectable({ token: ZipService, factory: ZipService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ZipService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.LazyService }, { type: i3.AlainConfigService }, { type: i0.NgZone }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvemlwL3ppcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQWtCLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7O0FBT3BDLE1BQU0sT0FBTyxVQUFVO0lBR3JCLFlBQW9CLElBQWdCLEVBQVUsSUFBaUIsRUFBRSxTQUE2QixFQUFVLE1BQWM7UUFBbEcsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQWE7UUFBeUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNwSCxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ2hDLEdBQUcsRUFBRSw0Q0FBNEM7WUFDakQsS0FBSyxFQUFFLEVBQUU7U0FDVixDQUFFLENBQUM7SUFDTixDQUFDO0lBRU8sSUFBSTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQU0sQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVPLEtBQUssQ0FBQyxHQUFRO1FBQ3BCLElBQUksQ0FBQyxHQUFHO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxTQUFTO0lBQ1QsSUFBSSxDQUFDLFNBQXdCLEVBQUUsT0FBYTtRQUMxQyxPQUFPLElBQUksT0FBTyxDQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzFDLE1BQU0sZUFBZSxHQUFHLENBQUMsSUFBZSxFQUFFLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtvQkFDakMsV0FBVztvQkFDWCxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTt3QkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDNUUsQ0FBQyxHQUFnQixFQUFFLEVBQUU7NEJBQ25CLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQWMsRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQy9FLENBQUMsRUFDRCxDQUFDLEdBQVEsRUFBRSxFQUFFOzRCQUNYLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDZCxDQUFDLENBQ0YsQ0FBQzt3QkFDRixPQUFPO3FCQUNSO29CQUNELFlBQVk7b0JBQ1osTUFBTSxNQUFNLEdBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQztvQkFDNUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFO3dCQUN6QixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQWMsRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzNGLENBQUMsQ0FBQztvQkFDRixNQUFNLENBQUMsa0JBQWtCLENBQUMsU0FBaUIsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUJBQXlCO0lBQ3pCLE1BQU07UUFDSixPQUFPLElBQUksT0FBTyxDQUFNLE9BQU8sQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNwQixNQUFNLE9BQU8sR0FBUSxJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUNqQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILE9BQU8sQ0FBQyxHQUFRLEVBQUUsSUFBWSxFQUFFLEdBQVc7UUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ3RFLENBQUMsR0FBZ0IsRUFBRSxFQUFFO2dCQUNuQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDcEIsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLEVBQ0QsQ0FBQyxLQUFVLEVBQUUsRUFBRTtnQkFDYixNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsSUFBSSxDQUFDLEdBQVEsRUFBRSxPQUF3QjtRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLE1BQU0sR0FBRyxHQUFHLGtCQUFLLE9BQU8sQ0FBb0IsQ0FBQztRQUM3QyxPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzNDLEdBQUcsQ0FBQyxhQUFhLGlCQUFHLElBQUksRUFBRSxNQUFNLElBQUssR0FBRyxDQUFDLE9BQU8sR0FBSSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUNsRSxDQUFDLElBQVUsRUFBRSxFQUFFO2dCQUNiLElBQUksR0FBRyxDQUFDLFFBQVE7b0JBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxJQUFJLGNBQWMsQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsRUFDRCxDQUFDLEdBQWMsRUFBRSxFQUFFO2dCQUNqQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7dUZBckdVLFVBQVU7cUVBQVYsVUFBVSxXQUFWLFVBQVUsbUJBREcsTUFBTTt1RkFDbkIsVUFBVTtjQUR0QixVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblppcENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBMYXp5UmVzdWx0LCBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFppcFNhdmVPcHRpb25zIH0gZnJvbSAnLi96aXAudHlwZXMnO1xuXG5kZWNsYXJlIHZhciBKU1ppcDogYW55O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFppcFNlcnZpY2Uge1xuICBwcml2YXRlIGNvZzogQWxhaW5aaXBDb25maWc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMuY29nID0gY29uZmlnU3J2Lm1lcmdlKCd6aXAnLCB7XG4gICAgICB1cmw6ICcvL2Nkbi5ib290Y3NzLmNvbS9qc3ppcC8zLjMuMC9qc3ppcC5taW4uanMnLFxuICAgICAgdXRpbHM6IFtdLFxuICAgIH0pITtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLmxhenkubG9hZChbdGhpcy5jb2cudXJsIV0uY29uY2F0KHRoaXMuY29nLnV0aWxzISkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVjayh6aXA6IGFueSk6IHZvaWQge1xuICAgIGlmICghemlwKSB0aHJvdyBuZXcgRXJyb3IoJ2dldCBpbnN0YW5jZSB2aWEgYFppcFNlcnZpY2UuY3JlYXRlKClgJyk7XG4gIH1cblxuICAvKiog6Kej5Y6LICovXG4gIHJlYWQoZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nLCBvcHRpb25zPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXNvbHZlQ2FsbGJhY2sgPSAoZGF0YTogTnpTYWZlQW55KSA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiByZXNvbHZlKGRhdGEpKTtcbiAgICAgIH07XG4gICAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgIC8vIGZyb20gdXJsXG4gICAgICAgICAgaWYgKHR5cGVvZiBmaWxlT3JVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmh0dHAucmVxdWVzdCgnR0VUJywgZmlsZU9yVXJsLCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIChyZXM6IEFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgSlNaaXAubG9hZEFzeW5jKHJlcywgb3B0aW9ucykudGhlbigocmV0OiBOelNhZmVBbnkpID0+IHJlc29sdmVDYWxsYmFjayhyZXQpKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBmcm9tIGZpbGVcbiAgICAgICAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZTogYW55KSA9PiB7XG4gICAgICAgICAgICBKU1ppcC5sb2FkQXN5bmMoZS50YXJnZXQucmVzdWx0LCBvcHRpb25zKS50aGVuKChyZXQ6IE56U2FmZUFueSkgPT4gcmVzb2x2ZUNhbGxiYWNrKHJldCkpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhmaWxlT3JVcmwgYXMgRmlsZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiog5Yib5bu6IFppcCDlrp7kvovvvIznlKjkuo7liJvlu7rljovnvKnmlofku7YgKi9cbiAgY3JlYXRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4ocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgemlwRmlsZTogYW55ID0gbmV3IEpTWmlwKCk7XG4gICAgICAgIHJlc29sdmUoemlwRmlsZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuIvovb1VUkzotYTmupDlubblhpnlhaUgemlwXG4gICAqIEBwYXJhbSB6aXAgWmlwIOWunuS+i1xuICAgKiBAcGFyYW0gcGF0aCBaaXAg6Lev5b6E77yM5L6L5aaC77yaIGB0ZXh0LnR4dGDjgIFgdHh0L2hpLnR4dGBcbiAgICogQHBhcmFtIHVybCBVUkwg5Zyw5Z2AXG4gICAqL1xuICBwdXNoVXJsKHppcDogYW55LCBwYXRoOiBzdHJpbmcsIHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5jaGVjayh6aXApO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmh0dHAucmVxdWVzdCgnR0VUJywgdXJsLCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KS5zdWJzY3JpYmUoXG4gICAgICAgIChyZXM6IEFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgICAgemlwLmZpbGUocGF0aCwgcmVzKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgcmVqZWN0KHsgdXJsLCBlcnJvciB9KTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5L+d5a2YWmlw5bm25omn6KGM5omT5byA5L+d5a2Y5a+56K+d5qGGXG4gICAqXG4gICAqIEBwYXJhbSB6aXAgemlwIOWvueixoe+8jOWKoeW/hemAmui/hyBgY3JlYXRlKClgIOaehOW7ulxuICAgKiBAcGFyYW0gb3B0aW9ucyDpop3lpJblj4LmlbDvvIxcbiAgICovXG4gIHNhdmUoemlwOiBhbnksIG9wdGlvbnM/OiBaaXBTYXZlT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2hlY2soemlwKTtcbiAgICBjb25zdCBvcHQgPSB7IC4uLm9wdGlvbnMgfSBhcyBaaXBTYXZlT3B0aW9ucztcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgemlwLmdlbmVyYXRlQXN5bmMoeyB0eXBlOiAnYmxvYicsIC4uLm9wdC5vcHRpb25zIH0sIG9wdC51cGRhdGUpLnRoZW4oXG4gICAgICAgIChkYXRhOiBCbG9iKSA9PiB7XG4gICAgICAgICAgaWYgKG9wdC5jYWxsYmFjaykgb3B0LmNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgIHNhdmVBcyhkYXRhLCBvcHQuZmlsZW5hbWUgfHwgJ2Rvd25sb2FkLnppcCcpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycjogTnpTYWZlQW55KSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=