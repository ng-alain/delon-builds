/**
 * @fileoverview added by tsickle
 * Generated from: zip.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/theme';
import { LazyService } from '@delon/util';
import { saveAs } from 'file-saver';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@delon/util";
import * as i3 from "@delon/theme";
var ZipService = /** @class */ (function () {
    function ZipService(http, lazy, configSrv) {
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
    ZipService.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        return this.lazy.load([(/** @type {?} */ (this.cog.url))].concat((/** @type {?} */ (this.cog.utils))));
    };
    /**
     * @private
     * @param {?} zip
     * @return {?}
     */
    ZipService.prototype.check = /**
     * @private
     * @param {?} zip
     * @return {?}
     */
    function (zip) {
        if (!zip)
            throw new Error('get instance via `ZipService.create()`');
    };
    /** 解压 */
    /**
     * 解压
     * @param {?} fileOrUrl
     * @param {?=} options
     * @return {?}
     */
    ZipService.prototype.read = /**
     * 解压
     * @param {?} fileOrUrl
     * @param {?=} options
     * @return {?}
     */
    function (fileOrUrl, options) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this.init().then((/**
             * @return {?}
             */
            function () {
                // from url
                if (typeof fileOrUrl === 'string') {
                    _this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    function (res) {
                        JSZip.loadAsync(res, options).then((/**
                         * @param {?} ret
                         * @return {?}
                         */
                        function (ret) { return resolve(ret); }));
                    }), (/**
                     * @param {?} err
                     * @return {?}
                     */
                    function (err) {
                        reject(err);
                    }));
                    return;
                }
                // from file
                /** @type {?} */
                var reader = new FileReader();
                reader.onload = (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    JSZip.loadAsync(e.target.result, options).then((/**
                     * @param {?} ret
                     * @return {?}
                     */
                    function (ret) { return resolve(ret); }));
                });
                reader.readAsBinaryString((/** @type {?} */ (fileOrUrl)));
            }));
        }));
    };
    /** 创建 Zip 实例，用于创建压缩文件 */
    /**
     * 创建 Zip 实例，用于创建压缩文件
     * @return {?}
     */
    ZipService.prototype.create = /**
     * 创建 Zip 实例，用于创建压缩文件
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            _this.init().then((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var zipFile = new JSZip();
                resolve(zipFile);
            }));
        }));
    };
    /**
     * 下载URL资源并写入 zip
     * @param zip Zip 实例
     * @param path Zip 路径，例如： `text.txt`、`txt/hi.txt`
     * @param url URL 地址
     */
    /**
     * 下载URL资源并写入 zip
     * @param {?} zip Zip 实例
     * @param {?} path Zip 路径，例如： `text.txt`、`txt/hi.txt`
     * @param {?} url URL 地址
     * @return {?}
     */
    ZipService.prototype.pushUrl = /**
     * 下载URL资源并写入 zip
     * @param {?} zip Zip 实例
     * @param {?} path Zip 路径，例如： `text.txt`、`txt/hi.txt`
     * @param {?} url URL 地址
     * @return {?}
     */
    function (zip, path, url) {
        var _this = this;
        this.check(zip);
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this.http.request('GET', url, { responseType: 'arraybuffer' }).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                zip.file(path, res);
                resolve();
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                reject({ url: url, error: error });
            }));
        }));
    };
    /**
     * 保存Zip并执行打开保存对话框
     *
     * @param zip zip 对象，务必通过 `create()` 构建
     * @param options 额外参数，
     */
    /**
     * 保存Zip并执行打开保存对话框
     *
     * @param {?} zip zip 对象，务必通过 `create()` 构建
     * @param {?=} options 额外参数，
     * @return {?}
     */
    ZipService.prototype.save = /**
     * 保存Zip并执行打开保存对话框
     *
     * @param {?} zip zip 对象，务必通过 `create()` 构建
     * @param {?=} options 额外参数，
     * @return {?}
     */
    function (zip, options) {
        this.check(zip);
        /** @type {?} */
        var opt = (/** @type {?} */ (__assign({}, options)));
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            zip.generateAsync(__assign({ type: 'blob' }, opt.options), opt.update).then((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (opt.callback)
                    opt.callback(data);
                saveAs(data, opt.filename || 'download.zip');
                resolve();
            }), (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                reject(err);
            }));
        }));
    };
    ZipService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ZipService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: LazyService },
        { type: AlainConfigService }
    ]; };
    /** @nocollapse */ ZipService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ZipService_Factory() { return new ZipService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LazyService), i0.ɵɵinject(i3.AlainConfigService)); }, token: ZipService, providedIn: "root" });
    return ZipService;
}());
export { ZipService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3ppcC8iLCJzb3VyY2VzIjpbInppcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBa0IsTUFBTSxjQUFjLENBQUM7QUFDbEUsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7OztBQU1wQztJQUlFLG9CQUFvQixJQUFnQixFQUFVLElBQWlCLEVBQUUsU0FBNkI7UUFBMUUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQWE7UUFDN0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUF3QixLQUFLLEVBQUU7WUFDdkQsR0FBRyxFQUFFLDRDQUE0QztZQUNqRCxLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8seUJBQUk7Ozs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7OztJQUVPLDBCQUFLOzs7OztJQUFiLFVBQWMsR0FBUTtRQUNwQixJQUFJLENBQUMsR0FBRztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsU0FBUzs7Ozs7OztJQUNULHlCQUFJOzs7Ozs7SUFBSixV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Q3ZDLEdBQUcsQ0FBQyxhQUFhLFlBQUcsSUFBSSxFQUFFLE1BQU0sSUFBSyxHQUFHLENBQUMsT0FBTyxHQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJOzs7O1lBQ2xFLFVBQUMsSUFBVTtnQkFDVCxJQUFJLEdBQUcsQ0FBQyxRQUFRO29CQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsSUFBSSxjQUFjLENBQUMsQ0FBQztnQkFDN0MsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDOzs7O1lBQ0QsVUFBQyxHQUFjO2dCQUNiLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLENBQUMsRUFDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFqR0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFWekIsVUFBVTtnQkFHRSxXQUFXO2dCQUR2QixrQkFBa0I7OztxQkFGM0I7Q0E0R0MsQUFsR0QsSUFrR0M7U0FqR1ksVUFBVTs7Ozs7O0lBQ3JCLHlCQUE0Qjs7Ozs7SUFFaEIsMEJBQXdCOzs7OztJQUFFLDBCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluWmlwQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IExhenlSZXN1bHQsIExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgWmlwU2F2ZU9wdGlvbnMgfSBmcm9tICcuL3ppcC50eXBlcyc7XG5cbmRlY2xhcmUgdmFyIEpTWmlwOiBhbnk7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgWmlwU2VydmljZSB7XG4gIHByaXZhdGUgY29nOiBBbGFpblppcENvbmZpZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgbGF6eTogTGF6eVNlcnZpY2UsIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb2cgPSBjb25maWdTcnYubWVyZ2U8QWxhaW5aaXBDb25maWcsICd6aXAnPignemlwJywge1xuICAgICAgdXJsOiAnLy9jZG4uYm9vdGNzcy5jb20vanN6aXAvMy4zLjAvanN6aXAubWluLmpzJyxcbiAgICAgIHV0aWxzOiBbXSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLmxhenkubG9hZChbdGhpcy5jb2cudXJsIV0uY29uY2F0KHRoaXMuY29nLnV0aWxzISkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVjayh6aXA6IGFueSkge1xuICAgIGlmICghemlwKSB0aHJvdyBuZXcgRXJyb3IoJ2dldCBpbnN0YW5jZSB2aWEgYFppcFNlcnZpY2UuY3JlYXRlKClgJyk7XG4gIH1cblxuICAvKiog6Kej5Y6LICovXG4gIHJlYWQoZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nLCBvcHRpb25zPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gZnJvbSB1cmxcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxlT3JVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5odHRwLnJlcXVlc3QoJ0dFVCcsIGZpbGVPclVybCwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlczogQXJyYXlCdWZmZXIpID0+IHtcbiAgICAgICAgICAgICAgSlNaaXAubG9hZEFzeW5jKHJlcywgb3B0aW9ucykudGhlbigocmV0OiBOelNhZmVBbnkpID0+IHJlc29sdmUocmV0KSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBmcm9tIGZpbGVcbiAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgICBKU1ppcC5sb2FkQXN5bmMoZS50YXJnZXQucmVzdWx0LCBvcHRpb25zKS50aGVuKChyZXQ6IE56U2FmZUFueSkgPT4gcmVzb2x2ZShyZXQpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhmaWxlT3JVcmwgYXMgRmlsZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiDliJvlu7ogWmlwIOWunuS+i++8jOeUqOS6juWIm+W7uuWOi+e8qeaWh+S7tiAqL1xuICBjcmVhdGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PihyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCB6aXBGaWxlOiBhbnkgPSBuZXcgSlNaaXAoKTtcbiAgICAgICAgcmVzb2x2ZSh6aXBGaWxlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOS4i+i9vVVSTOi1hOa6kOW5tuWGmeWFpSB6aXBcbiAgICogQHBhcmFtIHppcCBaaXAg5a6e5L6LXG4gICAqIEBwYXJhbSBwYXRoIFppcCDot6/lvoTvvIzkvovlpoLvvJogYHRleHQudHh0YOOAgWB0eHQvaGkudHh0YFxuICAgKiBAcGFyYW0gdXJsIFVSTCDlnLDlnYBcbiAgICovXG4gIHB1c2hVcmwoemlwOiBhbnksIHBhdGg6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmNoZWNrKHppcCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaHR0cC5yZXF1ZXN0KCdHRVQnLCB1cmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnN1YnNjcmliZShcbiAgICAgICAgKHJlczogQXJyYXlCdWZmZXIpID0+IHtcbiAgICAgICAgICB6aXAuZmlsZShwYXRoLCByZXMpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICByZWplY3QoeyB1cmwsIGVycm9yIH0pO1xuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkv53lrZhaaXDlubbmiafooYzmiZPlvIDkv53lrZjlr7nor53moYZcbiAgICpcbiAgICogQHBhcmFtIHppcCB6aXAg5a+56LGh77yM5Yqh5b+F6YCa6L+HIGBjcmVhdGUoKWAg5p6E5bu6XG4gICAqIEBwYXJhbSBvcHRpb25zIOmineWkluWPguaVsO+8jFxuICAgKi9cbiAgc2F2ZSh6aXA6IGFueSwgb3B0aW9ucz86IFppcFNhdmVPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5jaGVjayh6aXApO1xuICAgIGNvbnN0IG9wdCA9IHsgLi4ub3B0aW9ucyB9IGFzIFppcFNhdmVPcHRpb25zO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB6aXAuZ2VuZXJhdGVBc3luYyh7IHR5cGU6ICdibG9iJywgLi4ub3B0Lm9wdGlvbnMgfSwgb3B0LnVwZGF0ZSkudGhlbihcbiAgICAgICAgKGRhdGE6IEJsb2IpID0+IHtcbiAgICAgICAgICBpZiAob3B0LmNhbGxiYWNrKSBvcHQuY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgc2F2ZUFzKGRhdGEsIG9wdC5maWxlbmFtZSB8fCAnZG93bmxvYWQuemlwJyk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyOiBOelNhZmVBbnkpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==