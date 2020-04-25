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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3ppcC8iLCJzb3VyY2VzIjpbInppcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUE4QixXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQU9wQyxNQUFNLE9BQU8sVUFBVTs7Ozs7O0lBR3JCLFlBQW9CLElBQWdCLEVBQVUsSUFBaUIsRUFBRSxTQUE2QjtRQUExRSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUM3RCxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQXdCLEtBQUssRUFBRTtZQUN2RCxHQUFHLEVBQUUsNENBQTRDO1lBQ2pELEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxJQUFJO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBRU8sS0FBSyxDQUFDLEdBQVE7UUFDcEIsSUFBSSxDQUFDLEdBQUc7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7OztJQUdELElBQUksQ0FBQyxTQUF3QixFQUFFLE9BQWE7UUFDMUMsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQU0sQ0FB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LE1BQU0sQ0FBQyxDQUFDLElBQUk7Ozs7WUFDbEUsQ0FBQyxJQUFVLEVBQUUsRUFBRTtnQkFDYixJQUFJLEdBQUcsQ0FBQyxRQUFRO29CQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsSUFBSSxjQUFjLENBQUMsQ0FBQztnQkFDN0MsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDOzs7O1lBQ0QsQ0FBQyxHQUFjLEVBQUUsRUFBRTtnQkFDakIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxFQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQWpHRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBVHpCLFVBQVU7WUFFc0MsV0FBVztZQUEzRCxrQkFBa0I7Ozs7Ozs7O0lBU3pCLHlCQUE0Qjs7Ozs7SUFFaEIsMEJBQXdCOzs7OztJQUFFLDBCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluWmlwQ29uZmlnLCBMYXp5UmVzdWx0LCBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFppcFNhdmVPcHRpb25zIH0gZnJvbSAnLi96aXAudHlwZXMnO1xuXG5kZWNsYXJlIHZhciBKU1ppcDogYW55O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFppcFNlcnZpY2Uge1xuICBwcml2YXRlIGNvZzogQWxhaW5aaXBDb25maWc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIHRoaXMuY29nID0gY29uZmlnU3J2Lm1lcmdlPEFsYWluWmlwQ29uZmlnLCAnemlwJz4oJ3ppcCcsIHtcbiAgICAgIHVybDogJy8vY2RuLmJvb3Rjc3MuY29tL2pzemlwLzMuMy4wL2pzemlwLm1pbi5qcycsXG4gICAgICB1dGlsczogW10sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKTogUHJvbWlzZTxMYXp5UmVzdWx0W10+IHtcbiAgICByZXR1cm4gdGhpcy5sYXp5LmxvYWQoW3RoaXMuY29nLnVybCFdLmNvbmNhdCh0aGlzLmNvZy51dGlscyEpKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2soemlwOiBhbnkpIHtcbiAgICBpZiAoIXppcCkgdGhyb3cgbmV3IEVycm9yKCdnZXQgaW5zdGFuY2UgdmlhIGBaaXBTZXJ2aWNlLmNyZWF0ZSgpYCcpO1xuICB9XG5cbiAgLyoqIOino+WOiyAqL1xuICByZWFkKGZpbGVPclVybDogRmlsZSB8IHN0cmluZywgb3B0aW9ucz86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIGZyb20gdXJsXG4gICAgICAgIGlmICh0eXBlb2YgZmlsZU9yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaHR0cC5yZXF1ZXN0KCdHRVQnLCBmaWxlT3JVcmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IEFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgICAgICAgIEpTWmlwLmxvYWRBc3luYyhyZXMsIG9wdGlvbnMpLnRoZW4oKHJldDogTnpTYWZlQW55KSA9PiByZXNvbHZlKHJldCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZnJvbSBmaWxlXG4gICAgICAgIGNvbnN0IHJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZTogYW55KSA9PiB7XG4gICAgICAgICAgSlNaaXAubG9hZEFzeW5jKGUudGFyZ2V0LnJlc3VsdCwgb3B0aW9ucykudGhlbigocmV0OiBOelNhZmVBbnkpID0+IHJlc29sdmUocmV0KSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZU9yVXJsIGFzIEZpbGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiog5Yib5bu6IFppcCDlrp7kvovvvIznlKjkuo7liJvlu7rljovnvKnmlofku7YgKi9cbiAgY3JlYXRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4ocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgemlwRmlsZTogYW55ID0gbmV3IEpTWmlwKCk7XG4gICAgICAgIHJlc29sdmUoemlwRmlsZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuIvovb1VUkzotYTmupDlubblhpnlhaUgemlwXG4gICAqIEBwYXJhbSB6aXAgWmlwIOWunuS+i1xuICAgKiBAcGFyYW0gcGF0aCBaaXAg6Lev5b6E77yM5L6L5aaC77yaIGB0ZXh0LnR4dGDjgIFgdHh0L2hpLnR4dGBcbiAgICogQHBhcmFtIHVybCBVUkwg5Zyw5Z2AXG4gICAqL1xuICBwdXNoVXJsKHppcDogYW55LCBwYXRoOiBzdHJpbmcsIHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5jaGVjayh6aXApO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmh0dHAucmVxdWVzdCgnR0VUJywgdXJsLCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KS5zdWJzY3JpYmUoXG4gICAgICAgIChyZXM6IEFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgICAgemlwLmZpbGUocGF0aCwgcmVzKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgcmVqZWN0KHsgdXJsLCBlcnJvciB9KTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5L+d5a2YWmlw5bm25omn6KGM5omT5byA5L+d5a2Y5a+56K+d5qGGXG4gICAqXG4gICAqIEBwYXJhbSB6aXAgemlwIOWvueixoe+8jOWKoeW/hemAmui/hyBgY3JlYXRlKClgIOaehOW7ulxuICAgKiBAcGFyYW0gb3B0aW9ucyDpop3lpJblj4LmlbDvvIxcbiAgICovXG4gIHNhdmUoemlwOiBhbnksIG9wdGlvbnM/OiBaaXBTYXZlT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2hlY2soemlwKTtcbiAgICBjb25zdCBvcHQgPSB7IC4uLm9wdGlvbnMgfSBhcyBaaXBTYXZlT3B0aW9ucztcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgemlwLmdlbmVyYXRlQXN5bmMoeyB0eXBlOiAnYmxvYicsIC4uLm9wdC5vcHRpb25zIH0sIG9wdC51cGRhdGUpLnRoZW4oXG4gICAgICAgIChkYXRhOiBCbG9iKSA9PiB7XG4gICAgICAgICAgaWYgKG9wdC5jYWxsYmFjaykgb3B0LmNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgIHNhdmVBcyhkYXRhLCBvcHQuZmlsZW5hbWUgfHwgJ2Rvd25sb2FkLnppcCcpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycjogTnpTYWZlQW55KSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=