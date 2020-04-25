/**
 * @fileoverview added by tsickle
 * Generated from: zip.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/theme';
import { LazyService } from '@delon/util';
import { saveAs } from 'file-saver';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@delon/util";
import * as i3 from "@delon/theme";
export class ZipService {
    /**
     * @param {?} http
     * @param {?} lazy
     * @param {?} configSrv
     */
    constructor(http, lazy, configSrv) {
        this.http = http;
        this.lazy = lazy;
        this.cog = configSrv.merge('zip', {
            url: '//cdn.bootcss.com/jszip/3.3.0/jszip.min.js',
            utils: [],
        });
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        return this.lazy.load([(/** @type {?} */ (this.cog.url))].concat((/** @type {?} */ (this.cog.utils))));
    }
    /**
     * @private
     * @param {?} zip
     * @return {?}
     */
    check(zip) {
        if (!zip)
            throw new Error('get instance via `ZipService.create()`');
    }
    /**
     * 解压
     * @param {?} fileOrUrl
     * @param {?=} options
     * @return {?}
     */
    read(fileOrUrl, options) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.init().then((/**
             * @return {?}
             */
            () => {
                // from url
                if (typeof fileOrUrl === 'string') {
                    this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    (res) => {
                        JSZip.loadAsync(res, options).then((/**
                         * @param {?} ret
                         * @return {?}
                         */
                        (ret) => resolve(ret)));
                    }), (/**
                     * @param {?} err
                     * @return {?}
                     */
                    (err) => {
                        reject(err);
                    }));
                    return;
                }
                // from file
                /** @type {?} */
                const reader = new FileReader();
                reader.onload = (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => {
                    JSZip.loadAsync(e.target.result, options).then((/**
                     * @param {?} ret
                     * @return {?}
                     */
                    (ret) => resolve(ret)));
                });
                reader.readAsBinaryString((/** @type {?} */ (fileOrUrl)));
            }));
        }));
    }
    /**
     * 创建 Zip 实例，用于创建压缩文件
     * @return {?}
     */
    create() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this.init().then((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const zipFile = new JSZip();
                resolve(zipFile);
            }));
        }));
    }
    /**
     * 下载URL资源并写入 zip
     * @param {?} zip Zip 实例
     * @param {?} path Zip 路径，例如： `text.txt`、`txt/hi.txt`
     * @param {?} url URL 地址
     * @return {?}
     */
    pushUrl(zip, path, url) {
        this.check(zip);
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.http.request('GET', url, { responseType: 'arraybuffer' }).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                zip.file(path, res);
                resolve();
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                reject({ url, error });
            }));
        }));
    }
    /**
     * 保存Zip并执行打开保存对话框
     *
     * @param {?} zip zip 对象，务必通过 `create()` 构建
     * @param {?=} options 额外参数，
     * @return {?}
     */
    save(zip, options) {
        this.check(zip);
        /** @type {?} */
        const opt = (/** @type {?} */ (Object.assign({}, options)));
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            zip.generateAsync(Object.assign({ type: 'blob' }, opt.options), opt.update).then((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                if (opt.callback)
                    opt.callback(data);
                saveAs(data, opt.filename || 'download.zip');
                resolve();
            }), (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                reject(err);
            }));
        }));
    }
}
ZipService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ZipService.ctorParameters = () => [
    { type: HttpClient },
    { type: LazyService },
    { type: AlainConfigService }
];
/** @nocollapse */ ZipService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ZipService_Factory() { return new ZipService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LazyService), i0.ɵɵinject(i3.AlainConfigService)); }, token: ZipService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ZipService.prototype.cog;
    /**
     * @type {?}
     * @private
     */
    ZipService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    ZipService.prototype.lazy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3ppcC8iLCJzb3VyY2VzIjpbInppcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFrQixNQUFNLGNBQWMsQ0FBQztBQUNsRSxPQUFPLEVBQWMsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7O0FBT3BDLE1BQU0sT0FBTyxVQUFVOzs7Ozs7SUFHckIsWUFBb0IsSUFBZ0IsRUFBVSxJQUFpQixFQUFFLFNBQTZCO1FBQTFFLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQzdELElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBd0IsS0FBSyxFQUFFO1lBQ3ZELEdBQUcsRUFBRSw0Q0FBNEM7WUFDakQsS0FBSyxFQUFFLEVBQUU7U0FDVixDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLElBQUk7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxtQkFBQSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7SUFFTyxLQUFLLENBQUMsR0FBUTtRQUNwQixJQUFJLENBQUMsR0FBRztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7O0lBR0QsSUFBSSxDQUFDLFNBQXdCLEVBQUUsT0FBYTtR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QUssR0FBRyxDQUFDLE9BQU8sR0FBSSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSTs7OztZQUNsRSxDQUFDLElBQVUsRUFBRSxFQUFFO2dCQUNiLElBQUksR0FBRyxDQUFDLFFBQVE7b0JBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxJQUFJLGNBQWMsQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUM7Ozs7WUFDRCxDQUFDLEdBQWMsRUFBRSxFQUFFO2dCQUNqQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxDQUFDLEVBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBakdGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFWekIsVUFBVTtZQUdFLFdBQVc7WUFEdkIsa0JBQWtCOzs7Ozs7OztJQVV6Qix5QkFBNEI7Ozs7O0lBRWhCLDBCQUF3Qjs7Ozs7SUFBRSwwQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblppcENvbmZpZyB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBMYXp5UmVzdWx0LCBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFppcFNhdmVPcHRpb25zIH0gZnJvbSAnLi96aXAudHlwZXMnO1xuXG5kZWNsYXJlIHZhciBKU1ppcDogYW55O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFppcFNlcnZpY2Uge1xuICBwcml2YXRlIGNvZzogQWxhaW5aaXBDb25maWc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIHRoaXMuY29nID0gY29uZmlnU3J2Lm1lcmdlPEFsYWluWmlwQ29uZmlnLCAnemlwJz4oJ3ppcCcsIHtcbiAgICAgIHVybDogJy8vY2RuLmJvb3Rjc3MuY29tL2pzemlwLzMuMy4wL2pzemlwLm1pbi5qcycsXG4gICAgICB1dGlsczogW10sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKTogUHJvbWlzZTxMYXp5UmVzdWx0W10+IHtcbiAgICByZXR1cm4gdGhpcy5sYXp5LmxvYWQoW3RoaXMuY29nLnVybCFdLmNvbmNhdCh0aGlzLmNvZy51dGlscyEpKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2soemlwOiBhbnkpIHtcbiAgICBpZiAoIXppcCkgdGhyb3cgbmV3IEVycm9yKCdnZXQgaW5zdGFuY2UgdmlhIGBaaXBTZXJ2aWNlLmNyZWF0ZSgpYCcpO1xuICB9XG5cbiAgLyoqIOino+WOiyAqL1xuICByZWFkKGZpbGVPclVybDogRmlsZSB8IHN0cmluZywgb3B0aW9ucz86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIGZyb20gdXJsXG4gICAgICAgIGlmICh0eXBlb2YgZmlsZU9yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaHR0cC5yZXF1ZXN0KCdHRVQnLCBmaWxlT3JVcmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IEFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgICAgICAgIEpTWmlwLmxvYWRBc3luYyhyZXMsIG9wdGlvbnMpLnRoZW4oKHJldDogTnpTYWZlQW55KSA9PiByZXNvbHZlKHJldCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZnJvbSBmaWxlXG4gICAgICAgIGNvbnN0IHJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZTogYW55KSA9PiB7XG4gICAgICAgICAgSlNaaXAubG9hZEFzeW5jKGUudGFyZ2V0LnJlc3VsdCwgb3B0aW9ucykudGhlbigocmV0OiBOelNhZmVBbnkpID0+IHJlc29sdmUocmV0KSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZU9yVXJsIGFzIEZpbGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiog5Yib5bu6IFppcCDlrp7kvovvvIznlKjkuo7liJvlu7rljovnvKnmlofku7YgKi9cbiAgY3JlYXRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4ocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgemlwRmlsZTogYW55ID0gbmV3IEpTWmlwKCk7XG4gICAgICAgIHJlc29sdmUoemlwRmlsZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuIvovb1VUkzotYTmupDlubblhpnlhaUgemlwXG4gICAqIEBwYXJhbSB6aXAgWmlwIOWunuS+i1xuICAgKiBAcGFyYW0gcGF0aCBaaXAg6Lev5b6E77yM5L6L5aaC77yaIGB0ZXh0LnR4dGDjgIFgdHh0L2hpLnR4dGBcbiAgICogQHBhcmFtIHVybCBVUkwg5Zyw5Z2AXG4gICAqL1xuICBwdXNoVXJsKHppcDogYW55LCBwYXRoOiBzdHJpbmcsIHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5jaGVjayh6aXApO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmh0dHAucmVxdWVzdCgnR0VUJywgdXJsLCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KS5zdWJzY3JpYmUoXG4gICAgICAgIChyZXM6IEFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgICAgemlwLmZpbGUocGF0aCwgcmVzKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgcmVqZWN0KHsgdXJsLCBlcnJvciB9KTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5L+d5a2YWmlw5bm25omn6KGM5omT5byA5L+d5a2Y5a+56K+d5qGGXG4gICAqXG4gICAqIEBwYXJhbSB6aXAgemlwIOWvueixoe+8jOWKoeW/hemAmui/hyBgY3JlYXRlKClgIOaehOW7ulxuICAgKiBAcGFyYW0gb3B0aW9ucyDpop3lpJblj4LmlbDvvIxcbiAgICovXG4gIHNhdmUoemlwOiBhbnksIG9wdGlvbnM/OiBaaXBTYXZlT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2hlY2soemlwKTtcbiAgICBjb25zdCBvcHQgPSB7IC4uLm9wdGlvbnMgfSBhcyBaaXBTYXZlT3B0aW9ucztcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgemlwLmdlbmVyYXRlQXN5bmMoeyB0eXBlOiAnYmxvYicsIC4uLm9wdC5vcHRpb25zIH0sIG9wdC51cGRhdGUpLnRoZW4oXG4gICAgICAgIChkYXRhOiBCbG9iKSA9PiB7XG4gICAgICAgICAgaWYgKG9wdC5jYWxsYmFjaykgb3B0LmNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgIHNhdmVBcyhkYXRhLCBvcHQuZmlsZW5hbWUgfHwgJ2Rvd25sb2FkLnppcCcpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycjogTnpTYWZlQW55KSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=