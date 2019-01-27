/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
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
     * @return {?}
     */
    ZipService.prototype.init = /**
     * @return {?}
     */
    function () {
        return this.lazy.load([this.cog.url].concat(this.cog.utils));
    };
    /**
     * @param {?} zip
     * @return {?}
     */
    ZipService.prototype.check = /**
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
        return new Promise(function (resolve, reject) {
            _this.init().then(function () {
                // from url
                if (typeof fileOrUrl === 'string') {
                    _this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe(function (res) {
                        JSZip.loadAsync(res, options).then(function (ret) { return resolve(ret); });
                    }, function (err) {
                        reject(err);
                    });
                    return;
                }
                // from file
                /** @type {?} */
                var reader = new FileReader();
                reader.onload = function (e) {
                    JSZip.loadAsync(e.target.result, options).then(function (ret) { return resolve(ret); });
                };
                reader.readAsBinaryString((/** @type {?} */ (fileOrUrl)));
            });
        });
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
        return new Promise(function (resolve) {
            _this.init().then(function () {
                /** @type {?} */
                var zipFile = new JSZip();
                resolve(zipFile);
            });
        });
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
        return new Promise(function (resolve, reject) {
            _this.http.request('GET', url, { responseType: 'arraybuffer' }).subscribe(function (res) {
                zip.file(path, res);
                resolve();
            }, function (error) {
                reject({ url: url, error: error });
            });
        });
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
        var opt = tslib_1.__assign({}, options);
        return new Promise(function (resolve, reject) {
            zip.generateAsync(tslib_1.__assign({ type: 'blob' }, opt.options), opt.update).then(function (data) {
                if (opt.callback)
                    opt.callback(data);
                saveAs(data, opt.filename || 'download.zip');
                resolve();
            }, function (err) {
                reject(err);
            });
        });
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
    /** @nocollapse */ ZipService.ngInjectableDef = i0.defineInjectable({ factory: function ZipService_Factory() { return new ZipService(i0.inject(i1.ZipConfig), i0.inject(i2.HttpClient), i0.inject(i3.LazyService)); }, token: ZipService, providedIn: "root" });
    return ZipService;
}());
export { ZipService };
if (false) {
    /** @type {?} */
    ZipService.prototype.cog;
    /** @type {?} */
    ZipService.prototype.http;
    /** @type {?} */
    ZipService.prototype.lazy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3ppcC8iLCJzb3VyY2VzIjpbInppcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVwQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7OztBQUt6QztJQUVFLG9CQUFvQixHQUFjLEVBQVUsSUFBZ0IsRUFBVSxJQUFpQjtRQUFuRSxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQWE7SUFBRyxDQUFDOzs7O0lBRW5GLHlCQUFJOzs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFFTywwQkFBSzs7OztJQUFiLFVBQWMsR0FBUTtRQUNwQixJQUFJLENBQUMsR0FBRztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsU0FBUzs7Ozs7OztJQUNULHlCQUFJOzs7Ozs7SUFBSixVQUFLLFNBQXdCLEVBQUUsT0FBYTtRQUE1QyxpQkF1QkM7UUF0QkMsT0FBTyxJQUFJLE9BQU8sQ0FBTSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3RDLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7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QztnQkFDckMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxJQUFJLGNBQWMsQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsRUFDRCxVQUFBLEdBQUc7Z0JBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTFGRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQUx6QixTQUFTO2dCQUxULFVBQVU7Z0JBRUUsV0FBVzs7O3FCQUhoQztDQXNHQyxBQTNGRCxJQTJGQztTQTFGWSxVQUFVOzs7SUFDVCx5QkFBc0I7O0lBQUUsMEJBQXdCOztJQUFFLDBCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhenlSZXN1bHQsIExhenlTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5cbmltcG9ydCB7IFppcENvbmZpZyB9IGZyb20gJy4vemlwLmNvbmZpZyc7XG5pbXBvcnQgeyBaaXBTYXZlT3B0aW9ucyB9IGZyb20gJy4vemlwLnR5cGVzJztcblxuZGVjbGFyZSB2YXIgSlNaaXA6IGFueTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBaaXBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb2c6IFppcENvbmZpZywgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgaW5pdCgpOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLmxhenkubG9hZChbdGhpcy5jb2cudXJsXS5jb25jYXQodGhpcy5jb2cudXRpbHMpKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2soemlwOiBhbnkpIHtcbiAgICBpZiAoIXppcCkgdGhyb3cgbmV3IEVycm9yKCdnZXQgaW5zdGFuY2UgdmlhIGBaaXBTZXJ2aWNlLmNyZWF0ZSgpYCcpO1xuICB9XG5cbiAgLyoqIOino+WOiyAqL1xuICByZWFkKGZpbGVPclVybDogRmlsZSB8IHN0cmluZywgb3B0aW9ucz86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIGZyb20gdXJsXG4gICAgICAgIGlmICh0eXBlb2YgZmlsZU9yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaHR0cC5yZXF1ZXN0KCdHRVQnLCBmaWxlT3JVcmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IEFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgICAgICAgIEpTWmlwLmxvYWRBc3luYyhyZXMsIG9wdGlvbnMpLnRoZW4ocmV0ID0+IHJlc29sdmUocmV0KSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBmcm9tIGZpbGVcbiAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgICBKU1ppcC5sb2FkQXN5bmMoZS50YXJnZXQucmVzdWx0LCBvcHRpb25zKS50aGVuKHJldCA9PiByZXNvbHZlKHJldCkpO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGZpbGVPclVybCBhcyBGaWxlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIOWIm+W7uiBaaXAg5a6e5L6L77yM55So5LqO5Yib5bu65Y6L57yp5paH5Lu2ICovXG4gIGNyZWF0ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IHppcEZpbGU6IGFueSA9IG5ldyBKU1ppcCgpO1xuICAgICAgICByZXNvbHZlKHppcEZpbGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5LiL6L29VVJM6LWE5rqQ5bm25YaZ5YWlIHppcFxuICAgKiBAcGFyYW0gemlwIFppcCDlrp7kvotcbiAgICogQHBhcmFtIHBhdGggWmlwIOi3r+W+hO+8jOS+i+Wmgu+8miBgdGV4dC50eHRg44CBYHR4dC9oaS50eHRgXG4gICAqIEBwYXJhbSB1cmwgVVJMIOWcsOWdgFxuICAgKi9cbiAgcHVzaFVybCh6aXA6IGFueSwgcGF0aDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2hlY2soemlwKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5odHRwLnJlcXVlc3QoJ0dFVCcsIHVybCwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSkuc3Vic2NyaWJlKFxuICAgICAgICAocmVzOiBBcnJheUJ1ZmZlcikgPT4ge1xuICAgICAgICAgIHppcC5maWxlKHBhdGgsIHJlcyk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIHJlamVjdCh7IHVybCwgZXJyb3IgfSk7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOS/neWtmFppcOW5tuaJp+ihjOaJk+W8gOS/neWtmOWvueivneahhlxuICAgKlxuICAgKiBAcGFyYW0gemlwIHppcCDlr7nosaHvvIzliqHlv4XpgJrov4cgYGNyZWF0ZSgpYCDmnoTlu7pcbiAgICogQHBhcmFtIG9wdGlvbnMg6aKd5aSW5Y+C5pWw77yMXG4gICAqL1xuICBzYXZlKHppcDogYW55LCBvcHRpb25zPzogWmlwU2F2ZU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmNoZWNrKHppcCk7XG4gICAgY29uc3Qgb3B0ID0geyAuLi5vcHRpb25zIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHppcC5nZW5lcmF0ZUFzeW5jKHsgdHlwZTogJ2Jsb2InLCAuLi5vcHQub3B0aW9ucyB9LCBvcHQudXBkYXRlKS50aGVuKFxuICAgICAgICAoZGF0YTogQmxvYikgPT4ge1xuICAgICAgICAgIGlmIChvcHQuY2FsbGJhY2spIG9wdC5jYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICBzYXZlQXMoZGF0YSwgb3B0LmZpbGVuYW1lIHx8ICdkb3dubG9hZC56aXAnKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=