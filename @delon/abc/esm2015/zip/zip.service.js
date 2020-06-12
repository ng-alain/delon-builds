/**
 * @fileoverview added by tsickle
 * Generated from: zip.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlainConfigService, LazyService } from '@delon/util';
import { saveAs } from 'file-saver';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@delon/util";
export class ZipService {
    /**
     * @param {?} http
     * @param {?} lazy
     * @param {?} configSrv
     */
    constructor(http, lazy, configSrv) {
        this.http = http;
        this.lazy = lazy;
        this.cog = (/** @type {?} */ (configSrv.merge('zip', {
            url: '//cdn.bootcss.com/jszip/3.3.0/jszip.min.js',
            utils: [],
        })));
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
/** @nocollapse */ ZipService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ZipService_Factory() { return new ZipService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LazyService), i0.ɵɵinject(i2.AlainConfigService)); }, token: ZipService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3ppcC8iLCJzb3VyY2VzIjpbInppcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUE4QixXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQU9wQyxNQUFNLE9BQU8sVUFBVTs7Ozs7O0lBR3JCLFlBQW9CLElBQWdCLEVBQVUsSUFBaUIsRUFBRSxTQUE2QjtRQUExRSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUM3RCxJQUFJLENBQUMsR0FBRyxHQUFHLG1CQUFBLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ2hDLEdBQUcsRUFBRSw0Q0FBNEM7WUFDakQsS0FBSyxFQUFFLEVBQUU7U0FDVixDQUFDLEVBQUMsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRU8sSUFBSTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7OztJQUVPLEtBQUssQ0FBQyxHQUFRO1FBQ3BCLElBQUksQ0FBQyxHQUFHO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7Ozs7SUFHRCxJQUFJLENBQUMsU0FBd0IsRUFBRSxPQUFhO1FBQzFDLE9BQU8sSUFBSSxPQUFPOzs7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LEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJOzs7O1lBQ2xFLENBQUMsSUFBVSxFQUFFLEVBQUU7Z0JBQ2IsSUFBSSxHQUFHLENBQUMsUUFBUTtvQkFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQzs7OztZQUNELENBQUMsR0FBYyxFQUFFLEVBQUU7Z0JBQ2pCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLENBQUMsRUFDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFqR0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQVR6QixVQUFVO1lBRXNDLFdBQVc7WUFBM0Qsa0JBQWtCOzs7Ozs7OztJQVN6Qix5QkFBNEI7Ozs7O0lBRWhCLDBCQUF3Qjs7Ozs7SUFBRSwwQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblppcENvbmZpZywgTGF6eVJlc3VsdCwgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBaaXBTYXZlT3B0aW9ucyB9IGZyb20gJy4vemlwLnR5cGVzJztcblxuZGVjbGFyZSB2YXIgSlNaaXA6IGFueTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBaaXBTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjb2c6IEFsYWluWmlwQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBsYXp5OiBMYXp5U2VydmljZSwgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICB0aGlzLmNvZyA9IGNvbmZpZ1Nydi5tZXJnZSgnemlwJywge1xuICAgICAgdXJsOiAnLy9jZG4uYm9vdGNzcy5jb20vanN6aXAvMy4zLjAvanN6aXAubWluLmpzJyxcbiAgICAgIHV0aWxzOiBbXSxcbiAgICB9KSE7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKTogUHJvbWlzZTxMYXp5UmVzdWx0W10+IHtcbiAgICByZXR1cm4gdGhpcy5sYXp5LmxvYWQoW3RoaXMuY29nLnVybCFdLmNvbmNhdCh0aGlzLmNvZy51dGlscyEpKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2soemlwOiBhbnkpIHtcbiAgICBpZiAoIXppcCkgdGhyb3cgbmV3IEVycm9yKCdnZXQgaW5zdGFuY2UgdmlhIGBaaXBTZXJ2aWNlLmNyZWF0ZSgpYCcpO1xuICB9XG5cbiAgLyoqIOino+WOiyAqL1xuICByZWFkKGZpbGVPclVybDogRmlsZSB8IHN0cmluZywgb3B0aW9ucz86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIGZyb20gdXJsXG4gICAgICAgIGlmICh0eXBlb2YgZmlsZU9yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaHR0cC5yZXF1ZXN0KCdHRVQnLCBmaWxlT3JVcmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IEFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgICAgICAgIEpTWmlwLmxvYWRBc3luYyhyZXMsIG9wdGlvbnMpLnRoZW4oKHJldDogTnpTYWZlQW55KSA9PiByZXNvbHZlKHJldCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZnJvbSBmaWxlXG4gICAgICAgIGNvbnN0IHJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZTogYW55KSA9PiB7XG4gICAgICAgICAgSlNaaXAubG9hZEFzeW5jKGUudGFyZ2V0LnJlc3VsdCwgb3B0aW9ucykudGhlbigocmV0OiBOelNhZmVBbnkpID0+IHJlc29sdmUocmV0KSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZU9yVXJsIGFzIEZpbGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiog5Yib5bu6IFppcCDlrp7kvovvvIznlKjkuo7liJvlu7rljovnvKnmlofku7YgKi9cbiAgY3JlYXRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4ocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgemlwRmlsZTogYW55ID0gbmV3IEpTWmlwKCk7XG4gICAgICAgIHJlc29sdmUoemlwRmlsZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuIvovb1VUkzotYTmupDlubblhpnlhaUgemlwXG4gICAqIEBwYXJhbSB6aXAgWmlwIOWunuS+i1xuICAgKiBAcGFyYW0gcGF0aCBaaXAg6Lev5b6E77yM5L6L5aaC77yaIGB0ZXh0LnR4dGDjgIFgdHh0L2hpLnR4dGBcbiAgICogQHBhcmFtIHVybCBVUkwg5Zyw5Z2AXG4gICAqL1xuICBwdXNoVXJsKHppcDogYW55LCBwYXRoOiBzdHJpbmcsIHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5jaGVjayh6aXApO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmh0dHAucmVxdWVzdCgnR0VUJywgdXJsLCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KS5zdWJzY3JpYmUoXG4gICAgICAgIChyZXM6IEFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgICAgemlwLmZpbGUocGF0aCwgcmVzKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgcmVqZWN0KHsgdXJsLCBlcnJvciB9KTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5L+d5a2YWmlw5bm25omn6KGM5omT5byA5L+d5a2Y5a+56K+d5qGGXG4gICAqXG4gICAqIEBwYXJhbSB6aXAgemlwIOWvueixoe+8jOWKoeW/hemAmui/hyBgY3JlYXRlKClgIOaehOW7ulxuICAgKiBAcGFyYW0gb3B0aW9ucyDpop3lpJblj4LmlbDvvIxcbiAgICovXG4gIHNhdmUoemlwOiBhbnksIG9wdGlvbnM/OiBaaXBTYXZlT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2hlY2soemlwKTtcbiAgICBjb25zdCBvcHQgPSB7IC4uLm9wdGlvbnMgfSBhcyBaaXBTYXZlT3B0aW9ucztcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgemlwLmdlbmVyYXRlQXN5bmMoeyB0eXBlOiAnYmxvYicsIC4uLm9wdC5vcHRpb25zIH0sIG9wdC51cGRhdGUpLnRoZW4oXG4gICAgICAgIChkYXRhOiBCbG9iKSA9PiB7XG4gICAgICAgICAgaWYgKG9wdC5jYWxsYmFjaykgb3B0LmNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgIHNhdmVBcyhkYXRhLCBvcHQuZmlsZW5hbWUgfHwgJ2Rvd25sb2FkLnppcCcpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycjogTnpTYWZlQW55KSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=