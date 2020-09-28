/**
 * @fileoverview added by tsickle
 * Generated from: zip.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
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
     * @param {?} ngZone
     */
    constructor(http, lazy, configSrv, ngZone) {
        this.http = http;
        this.lazy = lazy;
        this.ngZone = ngZone;
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
            /** @type {?} */
            const resolveCallback = (/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.ngZone.run((/**
                 * @return {?}
                 */
                () => resolve(data)));
            });
            this.init().then((/**
             * @return {?}
             */
            () => {
                this.ngZone.runOutsideAngular((/**
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
                            (ret) => resolveCallback(ret)));
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
                        (ret) => resolveCallback(ret)));
                    });
                    reader.readAsBinaryString((/** @type {?} */ (fileOrUrl)));
                }));
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
    { type: AlainConfigService },
    { type: NgZone }
];
/** @nocollapse */ ZipService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ZipService_Factory() { return new ZipService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LazyService), i0.ɵɵinject(i2.AlainConfigService), i0.ɵɵinject(i0.NgZone)); }, token: ZipService, providedIn: "root" });
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
    /**
     * @type {?}
     * @private
     */
    ZipService.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdnN0cy93b3JrLzEvcy9wYWNrYWdlcy9hYmMvemlwLyIsInNvdXJjZXMiOlsiemlwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUE4QixXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQU9wQyxNQUFNLE9BQU8sVUFBVTs7Ozs7OztJQUdyQixZQUFvQixJQUFnQixFQUFVLElBQWlCLEVBQUUsU0FBNkIsRUFBVSxNQUFjO1FBQWxHLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQXlDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDcEgsSUFBSSxDQUFDLEdBQUcsR0FBRyxtQkFBQSxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNoQyxHQUFHLEVBQUUsNENBQTRDO1lBQ2pELEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQyxFQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUVPLElBQUk7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxtQkFBQSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7SUFFTyxLQUFLLENBQUMsR0FBUTtRQUNwQixJQUFJLENBQUMsR0FBRztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztJQUN0RSxD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RUFDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7OztJQVFELElBQUksQ0FBQyxHQUFRLEVBQUUsT0FBd0I7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Y0FDVixHQUFHLEdBQUcscUNBQUssT0FBTyxHQUFvQjtRQUM1QyxPQUFPLElBQUksT0FBTzs7Ozs7UUFBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUMzQyxHQUFHLENBQUMsYUFBYSxpQkFBRyxJQUFJLEVBQUUsTUFBTSxJQUFLLEdBQUcsQ0FBQyxPQUFPLEdBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUk7Ozs7WUFDbEUsQ0FBQyxJQUFVLEVBQUUsRUFBRTtnQkFDYixJQUFJLEdBQUcsQ0FBQyxRQUFRO29CQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsSUFBSSxjQUFjLENBQUMsQ0FBQztnQkFDN0MsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDOzs7O1lBQ0QsQ0FBQyxHQUFjLEVBQUUsRUFBRTtnQkFDakIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxFQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXRHRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBVHpCLFVBQVU7WUFFc0MsV0FBVztZQUEzRCxrQkFBa0I7WUFETixNQUFNOzs7Ozs7OztJQVV6Qix5QkFBNEI7Ozs7O0lBRWhCLDBCQUF3Qjs7Ozs7SUFBRSwwQkFBeUI7Ozs7O0lBQWlDLDRCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5aaXBDb25maWcsIExhenlSZXN1bHQsIExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgWmlwU2F2ZU9wdGlvbnMgfSBmcm9tICcuL3ppcC50eXBlcyc7XG5cbmRlY2xhcmUgdmFyIEpTWmlwOiBhbnk7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgWmlwU2VydmljZSB7XG4gIHByaXZhdGUgY29nOiBBbGFpblppcENvbmZpZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgbGF6eTogTGF6eVNlcnZpY2UsIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gICAgdGhpcy5jb2cgPSBjb25maWdTcnYubWVyZ2UoJ3ppcCcsIHtcbiAgICAgIHVybDogJy8vY2RuLmJvb3Rjc3MuY29tL2pzemlwLzMuMy4wL2pzemlwLm1pbi5qcycsXG4gICAgICB1dGlsczogW10sXG4gICAgfSkhO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IFByb21pc2U8TGF6eVJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMubGF6eS5sb2FkKFt0aGlzLmNvZy51cmwhXS5jb25jYXQodGhpcy5jb2cudXRpbHMhKSk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrKHppcDogYW55KTogdm9pZCB7XG4gICAgaWYgKCF6aXApIHRocm93IG5ldyBFcnJvcignZ2V0IGluc3RhbmNlIHZpYSBgWmlwU2VydmljZS5jcmVhdGUoKWAnKTtcbiAgfVxuXG4gIC8qKiDop6PljosgKi9cbiAgcmVhZChmaWxlT3JVcmw6IEZpbGUgfCBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlc29sdmVDYWxsYmFjayA9IChkYXRhOiBOelNhZmVBbnkpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHJlc29sdmUoZGF0YSkpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgLy8gZnJvbSB1cmxcbiAgICAgICAgICBpZiAodHlwZW9mIGZpbGVPclVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuaHR0cC5yZXF1ZXN0KCdHRVQnLCBmaWxlT3JVcmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgKHJlczogQXJyYXlCdWZmZXIpID0+IHtcbiAgICAgICAgICAgICAgICBKU1ppcC5sb2FkQXN5bmMocmVzLCBvcHRpb25zKS50aGVuKChyZXQ6IE56U2FmZUFueSkgPT4gcmVzb2x2ZUNhbGxiYWNrKHJldCkpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGZyb20gZmlsZVxuICAgICAgICAgIGNvbnN0IHJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIEpTWmlwLmxvYWRBc3luYyhlLnRhcmdldC5yZXN1bHQsIG9wdGlvbnMpLnRoZW4oKHJldDogTnpTYWZlQW55KSA9PiByZXNvbHZlQ2FsbGJhY2socmV0KSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGZpbGVPclVybCBhcyBGaWxlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiDliJvlu7ogWmlwIOWunuS+i++8jOeUqOS6juWIm+W7uuWOi+e8qeaWh+S7tiAqL1xuICBjcmVhdGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PihyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCB6aXBGaWxlOiBhbnkgPSBuZXcgSlNaaXAoKTtcbiAgICAgICAgcmVzb2x2ZSh6aXBGaWxlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOS4i+i9vVVSTOi1hOa6kOW5tuWGmeWFpSB6aXBcbiAgICogQHBhcmFtIHppcCBaaXAg5a6e5L6LXG4gICAqIEBwYXJhbSBwYXRoIFppcCDot6/lvoTvvIzkvovlpoLvvJogYHRleHQudHh0YOOAgWB0eHQvaGkudHh0YFxuICAgKiBAcGFyYW0gdXJsIFVSTCDlnLDlnYBcbiAgICovXG4gIHB1c2hVcmwoemlwOiBhbnksIHBhdGg6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmNoZWNrKHppcCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaHR0cC5yZXF1ZXN0KCdHRVQnLCB1cmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnN1YnNjcmliZShcbiAgICAgICAgKHJlczogQXJyYXlCdWZmZXIpID0+IHtcbiAgICAgICAgICB6aXAuZmlsZShwYXRoLCByZXMpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICByZWplY3QoeyB1cmwsIGVycm9yIH0pO1xuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkv53lrZhaaXDlubbmiafooYzmiZPlvIDkv53lrZjlr7nor53moYZcbiAgICpcbiAgICogQHBhcmFtIHppcCB6aXAg5a+56LGh77yM5Yqh5b+F6YCa6L+HIGBjcmVhdGUoKWAg5p6E5bu6XG4gICAqIEBwYXJhbSBvcHRpb25zIOmineWkluWPguaVsO+8jFxuICAgKi9cbiAgc2F2ZSh6aXA6IGFueSwgb3B0aW9ucz86IFppcFNhdmVPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5jaGVjayh6aXApO1xuICAgIGNvbnN0IG9wdCA9IHsgLi4ub3B0aW9ucyB9IGFzIFppcFNhdmVPcHRpb25zO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB6aXAuZ2VuZXJhdGVBc3luYyh7IHR5cGU6ICdibG9iJywgLi4ub3B0Lm9wdGlvbnMgfSwgb3B0LnVwZGF0ZSkudGhlbihcbiAgICAgICAgKGRhdGE6IEJsb2IpID0+IHtcbiAgICAgICAgICBpZiAob3B0LmNhbGxiYWNrKSBvcHQuY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgc2F2ZUFzKGRhdGEsIG9wdC5maWxlbmFtZSB8fCAnZG93bmxvYWQuemlwJyk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyOiBOelNhZmVBbnkpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==