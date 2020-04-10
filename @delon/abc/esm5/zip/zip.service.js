/**
 * @fileoverview added by tsickle
 * Generated from: zip.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LazyService } from '@delon/util';
import { saveAs } from 'file-saver';
import { ZipConfig } from './zip.config';
import * as i0 from "@angular/core";
import * as i1 from "./zip.config";
import * as i2 from "@angular/common/http";
import * as i3 from "@delon/util";
var ZipService = /** @class */ (function () {
    function ZipService(cog, http, lazy) {
        this.cog = cog;
        this.http = http;
        this.lazy = lazy;
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
        { type: ZipConfig },
        { type: HttpClient },
        { type: LazyService }
    ]; };
    /** @nocollapse */ ZipService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ZipService_Factory() { return new ZipService(i0.ɵɵinject(i1.ZipConfig), i0.ɵɵinject(i2.HttpClient), i0.ɵɵinject(i3.LazyService)); }, token: ZipService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3ppcC8iLCJzb3VyY2VzIjpbInppcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVwQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7OztBQUt6QztJQUVFLG9CQUFvQixHQUFjLEVBQVUsSUFBZ0IsRUFBVSxJQUFpQjtRQUFuRSxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQWE7SUFBRyxDQUFDOzs7OztJQUVuRix5QkFBSTs7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBRU8sMEJBQUs7Ozs7O0lBQWIsVUFBYyxHQUFRO1FBQ3BCLElBQUksQ0FBQyxHQUFHO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxTQUFTOzs7Ozs7O0lBQ1QseUJBQUk7Ozs7OztJQUFKLFVBQUssU0FBd0IsRUFBRSxPQUFhO1FBQTVDLGlCQXVCQztRQXRCQyxPQUFPLElBQUksT0FBTzs7Ozs7UUFBTSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3RDLEtBQUks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Ozs7WUFDbEUsVUFBQyxJQUFVO2dCQUNULElBQUksR0FBRyxDQUFDLFFBQVE7b0JBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxJQUFJLGNBQWMsQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUM7Ozs7WUFDRCxVQUFDLEdBQWM7Z0JBQ2IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxFQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTFGRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQUx6QixTQUFTO2dCQUxULFVBQVU7Z0JBRUUsV0FBVzs7O3FCQUZoQztDQXFHQyxBQTNGRCxJQTJGQztTQTFGWSxVQUFVOzs7Ozs7SUFDVCx5QkFBc0I7Ozs7O0lBQUUsMEJBQXdCOzs7OztJQUFFLDBCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXp5UmVzdWx0LCBMYXp5U2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFppcENvbmZpZyB9IGZyb20gJy4vemlwLmNvbmZpZyc7XG5pbXBvcnQgeyBaaXBTYXZlT3B0aW9ucyB9IGZyb20gJy4vemlwLnR5cGVzJztcblxuZGVjbGFyZSB2YXIgSlNaaXA6IGFueTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBaaXBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb2c6IFppcENvbmZpZywgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgaW5pdCgpOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLmxhenkubG9hZChbdGhpcy5jb2cudXJsIV0uY29uY2F0KHRoaXMuY29nLnV0aWxzISkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVjayh6aXA6IGFueSkge1xuICAgIGlmICghemlwKSB0aHJvdyBuZXcgRXJyb3IoJ2dldCBpbnN0YW5jZSB2aWEgYFppcFNlcnZpY2UuY3JlYXRlKClgJyk7XG4gIH1cblxuICAvKiog6Kej5Y6LICovXG4gIHJlYWQoZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nLCBvcHRpb25zPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gZnJvbSB1cmxcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxlT3JVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5odHRwLnJlcXVlc3QoJ0dFVCcsIGZpbGVPclVybCwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlczogQXJyYXlCdWZmZXIpID0+IHtcbiAgICAgICAgICAgICAgSlNaaXAubG9hZEFzeW5jKHJlcywgb3B0aW9ucykudGhlbigocmV0OiBOelNhZmVBbnkpID0+IHJlc29sdmUocmV0KSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBmcm9tIGZpbGVcbiAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgICBKU1ppcC5sb2FkQXN5bmMoZS50YXJnZXQucmVzdWx0LCBvcHRpb25zKS50aGVuKChyZXQ6IE56U2FmZUFueSkgPT4gcmVzb2x2ZShyZXQpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhmaWxlT3JVcmwgYXMgRmlsZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiDliJvlu7ogWmlwIOWunuS+i++8jOeUqOS6juWIm+W7uuWOi+e8qeaWh+S7tiAqL1xuICBjcmVhdGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PihyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCB6aXBGaWxlOiBhbnkgPSBuZXcgSlNaaXAoKTtcbiAgICAgICAgcmVzb2x2ZSh6aXBGaWxlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOS4i+i9vVVSTOi1hOa6kOW5tuWGmeWFpSB6aXBcbiAgICogQHBhcmFtIHppcCBaaXAg5a6e5L6LXG4gICAqIEBwYXJhbSBwYXRoIFppcCDot6/lvoTvvIzkvovlpoLvvJogYHRleHQudHh0YOOAgWB0eHQvaGkudHh0YFxuICAgKiBAcGFyYW0gdXJsIFVSTCDlnLDlnYBcbiAgICovXG4gIHB1c2hVcmwoemlwOiBhbnksIHBhdGg6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmNoZWNrKHppcCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaHR0cC5yZXF1ZXN0KCdHRVQnLCB1cmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnN1YnNjcmliZShcbiAgICAgICAgKHJlczogQXJyYXlCdWZmZXIpID0+IHtcbiAgICAgICAgICB6aXAuZmlsZShwYXRoLCByZXMpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICByZWplY3QoeyB1cmwsIGVycm9yIH0pO1xuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkv53lrZhaaXDlubbmiafooYzmiZPlvIDkv53lrZjlr7nor53moYZcbiAgICpcbiAgICogQHBhcmFtIHppcCB6aXAg5a+56LGh77yM5Yqh5b+F6YCa6L+HIGBjcmVhdGUoKWAg5p6E5bu6XG4gICAqIEBwYXJhbSBvcHRpb25zIOmineWkluWPguaVsO+8jFxuICAgKi9cbiAgc2F2ZSh6aXA6IGFueSwgb3B0aW9ucz86IFppcFNhdmVPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5jaGVjayh6aXApO1xuICAgIGNvbnN0IG9wdCA9IHsgLi4ub3B0aW9ucyB9IGFzIFppcFNhdmVPcHRpb25zO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB6aXAuZ2VuZXJhdGVBc3luYyh7IHR5cGU6ICdibG9iJywgLi4ub3B0Lm9wdGlvbnMgfSwgb3B0LnVwZGF0ZSkudGhlbihcbiAgICAgICAgKGRhdGE6IEJsb2IpID0+IHtcbiAgICAgICAgICBpZiAob3B0LmNhbGxiYWNrKSBvcHQuY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgc2F2ZUFzKGRhdGEsIG9wdC5maWxlbmFtZSB8fCAnZG93bmxvYWQuemlwJyk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyOiBOelNhZmVBbnkpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==