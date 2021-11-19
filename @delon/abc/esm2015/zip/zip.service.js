import { __decorate } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { saveAs } from 'file-saver';
import { AlainConfigService } from '@delon/util/config';
import { ZoneOutside } from '@delon/util/decorator';
import { LazyService } from '@delon/util/other';
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
     *
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
ZipService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ZipService_Factory() { return new ZipService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LazyService), i0.ɵɵinject(i3.AlainConfigService), i0.ɵɵinject(i0.NgZone)); }, token: ZipService, providedIn: "root" });
ZipService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ZipService.ctorParameters = () => [
    { type: HttpClient },
    { type: LazyService },
    { type: AlainConfigService },
    { type: NgZone }
];
__decorate([
    ZoneOutside()
], ZipService.prototype, "read", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvemlwL3ppcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQWtCLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFRNUQsTUFBTSxPQUFPLFVBQVU7SUFHckIsWUFDVSxJQUFnQixFQUNoQixJQUFpQixFQUN6QixTQUE2QixFQUNyQixNQUFjO1FBSGQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBRWpCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNoQyxHQUFHLEVBQUUsNENBQTRDO1lBQ2pELEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBRSxDQUFDO0lBQ04sQ0FBQztJQUVPLElBQUk7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTyxLQUFLLENBQUMsR0FBYztRQUMxQixJQUFJLENBQUMsR0FBRztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMs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SUFDSCxJQUFJLENBQUMsR0FBYyxFQUFFLE9BQXdCO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsTUFBTSxHQUFHLEdBQUcsa0JBQUssT0FBTyxDQUFvQixDQUFDO1FBQzdDLE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDM0MsR0FBRyxDQUFDLGFBQWEsaUJBQUcsSUFBSSxFQUFFLE1BQU0sSUFBSyxHQUFHLENBQUMsT0FBTyxHQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ2xFLENBQUMsSUFBVSxFQUFFLEVBQUU7Z0JBQ2IsSUFBSSxHQUFHLENBQUMsUUFBUTtvQkFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxFQUNELENBQUMsR0FBYyxFQUFFLEVBQUU7Z0JBQ2pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O1lBM0dGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztZQWR6QixVQUFVO1lBT0UsV0FBVztZQUZ2QixrQkFBa0I7WUFKTixNQUFNOztBQXVDekI7SUFEQyxXQUFXLEVBQUU7c0NBMkJiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblppcENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBab25lT3V0c2lkZSB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBMYXp5UmVzdWx0LCBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgWmlwU2F2ZU9wdGlvbnMgfSBmcm9tICcuL3ppcC50eXBlcyc7XG5cbmRlY2xhcmUgdmFyIEpTWmlwOiBOelNhZmVBbnk7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgWmlwU2VydmljZSB7XG4gIHByaXZhdGUgY29nOiBBbGFpblppcENvbmZpZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBsYXp5OiBMYXp5U2VydmljZSxcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIHRoaXMuY29nID0gY29uZmlnU3J2Lm1lcmdlKCd6aXAnLCB7XG4gICAgICB1cmw6ICcvL2Nkbi5ib290Y3NzLmNvbS9qc3ppcC8zLjMuMC9qc3ppcC5taW4uanMnLFxuICAgICAgdXRpbHM6IFtdXG4gICAgfSkhO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IFByb21pc2U8TGF6eVJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMubGF6eS5sb2FkKFt0aGlzLmNvZy51cmwhXS5jb25jYXQodGhpcy5jb2cudXRpbHMhKSk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrKHppcDogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgaWYgKCF6aXApIHRocm93IG5ldyBFcnJvcignZ2V0IGluc3RhbmNlIHZpYSBgWmlwU2VydmljZS5jcmVhdGUoKWAnKTtcbiAgfVxuXG4gIC8qKiDop6PljosgKi9cbiAgQFpvbmVPdXRzaWRlKClcbiAgcmVhZChmaWxlT3JVcmw6IEZpbGUgfCBzdHJpbmcsIG9wdGlvbnM/OiBOelNhZmVBbnkpOiBQcm9taXNlPE56U2FmZUFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxOelNhZmVBbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlc29sdmVDYWxsYmFjayA9IChkYXRhOiBOelNhZmVBbnkpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHJlc29sdmUoZGF0YSkpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBmcm9tIHVybFxuICAgICAgICBpZiAodHlwZW9mIGZpbGVPclVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLmh0dHAucmVxdWVzdCgnR0VUJywgZmlsZU9yVXJsLCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzOiBBcnJheUJ1ZmZlcikgPT4ge1xuICAgICAgICAgICAgICBKU1ppcC5sb2FkQXN5bmMocmVzLCBvcHRpb25zKS50aGVuKChyZXQ6IE56U2FmZUFueSkgPT4gcmVzb2x2ZUNhbGxiYWNrKHJldCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnI6IE56U2FmZUFueSkgPT4ge1xuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBmcm9tIGZpbGVcbiAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBOelNhZmVBbnkpID0+IHtcbiAgICAgICAgICBKU1ppcC5sb2FkQXN5bmMoZS50YXJnZXQucmVzdWx0LCBvcHRpb25zKS50aGVuKChyZXQ6IE56U2FmZUFueSkgPT4gcmVzb2x2ZUNhbGxiYWNrKHJldCkpO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGZpbGVPclVybCBhcyBGaWxlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIOWIm+W7uiBaaXAg5a6e5L6L77yM55So5LqO5Yib5bu65Y6L57yp5paH5Lu2ICovXG4gIGNyZWF0ZSgpOiBQcm9taXNlPE56U2FmZUFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxOelNhZmVBbnk+KHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IHppcEZpbGU6IE56U2FmZUFueSA9IG5ldyBKU1ppcCgpO1xuICAgICAgICByZXNvbHZlKHppcEZpbGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5LiL6L29VVJM6LWE5rqQ5bm25YaZ5YWlIHppcFxuICAgKlxuICAgKiBAcGFyYW0gemlwIFppcCDlrp7kvotcbiAgICogQHBhcmFtIHBhdGggWmlwIOi3r+W+hO+8jOS+i+Wmgu+8miBgdGV4dC50eHRg44CBYHR4dC9oaS50eHRgXG4gICAqIEBwYXJhbSB1cmwgVVJMIOWcsOWdgFxuICAgKi9cbiAgcHVzaFVybCh6aXA6IE56U2FmZUFueSwgcGF0aDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2hlY2soemlwKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5odHRwLnJlcXVlc3QoJ0dFVCcsIHVybCwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSkuc3Vic2NyaWJlKFxuICAgICAgICAocmVzOiBBcnJheUJ1ZmZlcikgPT4ge1xuICAgICAgICAgIHppcC5maWxlKHBhdGgsIHJlcyk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IE56U2FmZUFueSkgPT4ge1xuICAgICAgICAgIHJlamVjdCh7IHVybCwgZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5L+d5a2YWmlw5bm25omn6KGM5omT5byA5L+d5a2Y5a+56K+d5qGGXG4gICAqXG4gICAqIEBwYXJhbSB6aXAgemlwIOWvueixoe+8jOWKoeW/hemAmui/hyBgY3JlYXRlKClgIOaehOW7ulxuICAgKiBAcGFyYW0gb3B0aW9ucyDpop3lpJblj4LmlbDvvIxcbiAgICovXG4gIHNhdmUoemlwOiBOelNhZmVBbnksIG9wdGlvbnM/OiBaaXBTYXZlT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2hlY2soemlwKTtcbiAgICBjb25zdCBvcHQgPSB7IC4uLm9wdGlvbnMgfSBhcyBaaXBTYXZlT3B0aW9ucztcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgemlwLmdlbmVyYXRlQXN5bmMoeyB0eXBlOiAnYmxvYicsIC4uLm9wdC5vcHRpb25zIH0sIG9wdC51cGRhdGUpLnRoZW4oXG4gICAgICAgIChkYXRhOiBCbG9iKSA9PiB7XG4gICAgICAgICAgaWYgKG9wdC5jYWxsYmFjaykgb3B0LmNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgIHNhdmVBcyhkYXRhLCBvcHQuZmlsZW5hbWUgfHwgJ2Rvd25sb2FkLnppcCcpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycjogTnpTYWZlQW55KSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==