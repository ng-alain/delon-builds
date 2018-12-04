/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { LazyService } from '@delon/util';
import { ZipConfig } from './zip.config';
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
                    _this.http
                        .request('GET', fileOrUrl, { responseType: 'arraybuffer' })
                        .subscribe(function (res) {
                        JSZip.loadAsync(res, options).then(function (ret) { return resolve(ret); });
                    }, function (err) {
                        reject(err);
                    });
                    return;
                }
                /** @type {?} */
                var reader = new FileReader();
                reader.onload = function (e) {
                    JSZip.loadAsync(e.target.result, options).then(function (ret) { return resolve(ret); });
                };
                reader.readAsBinaryString(/** @type {?} */ (fileOrUrl));
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
        var opt = Object.assign({}, options);
        return new Promise(function (resolve, reject) {
            zip
                .generateAsync(Object.assign({ type: 'blob' }, opt.options), opt.update)
                .then(function (data) {
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
        { type: Injectable }
    ];
    /** @nocollapse */
    ZipService.ctorParameters = function () { return [
        { type: ZipConfig },
        { type: HttpClient },
        { type: LazyService }
    ]; };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3ppcC8iLCJzb3VyY2VzIjpbInppcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxXQUFXLEVBQWMsTUFBTSxhQUFhLENBQUM7QUFHdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7SUFNdkMsb0JBQ1UsS0FDQSxNQUNBO1FBRkEsUUFBRyxHQUFILEdBQUc7UUFDSCxTQUFJLEdBQUosSUFBSTtRQUNKLFNBQUksR0FBSixJQUFJO0tBQ1Y7Ozs7SUFFSSx5QkFBSTs7OztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7OztJQUd2RCwwQkFBSzs7OztjQUFDLEdBQVE7UUFDcEIsSUFBSSxDQUFDLEdBQUc7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7O0lBR3RFLFNBQVM7Ozs7Ozs7SUFDVCx5QkFBSTs7Ozs7O0lBQUosVUFBSyxTQUF3QixFQUFFLE9BQWE7UUFBNUMsaUJBeUJDO1FBeEJDLE9BQU8sSUFBSSxPQUFPLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUN0QyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDOztnQkFFZixJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtvQkFDakMsS0FBSSxDQUFDLElBQUk7eUJBQ04sT0FBTyxDQUFDLEtB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QkFDN0MsT0FBTyxFQUFFLENBQUM7YUFDWCxFQUNELFVBQUEsR0FBRztnQkFDRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDYixDQUNGLENBQUM7U0FDTCxDQUFDLENBQUM7S0FDSjs7Z0JBbEdGLFVBQVU7Ozs7Z0JBSkYsU0FBUztnQkFMVCxVQUFVO2dCQUVWLFdBQVc7O3FCQUhwQjs7U0FXYSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xuaW1wb3J0IHsgTGF6eVNlcnZpY2UsIExhenlSZXN1bHQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFppcFNhdmVPcHRpb25zIH0gZnJvbSAnLi96aXAudHlwZXMnO1xuaW1wb3J0IHsgWmlwQ29uZmlnIH0gZnJvbSAnLi96aXAuY29uZmlnJztcblxuZGVjbGFyZSB2YXIgSlNaaXA6IGFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFppcFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvZzogWmlwQ29uZmlnLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlLFxuICApIHt9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IFByb21pc2U8TGF6eVJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMubGF6eS5sb2FkKFt0aGlzLmNvZy51cmxdLmNvbmNhdCh0aGlzLmNvZy51dGlscykpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVjayh6aXA6IGFueSkge1xuICAgIGlmICghemlwKSB0aHJvdyBuZXcgRXJyb3IoJ2dldCBpbnN0YW5jZSB2aWEgYFppcFNlcnZpY2UuY3JlYXRlKClgJyk7XG4gIH1cblxuICAvKiog6Kej5Y6LICovXG4gIHJlYWQoZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nLCBvcHRpb25zPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gZnJvbSB1cmxcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxlT3JVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5odHRwXG4gICAgICAgICAgICAucmVxdWVzdCgnR0VUJywgZmlsZU9yVXJsLCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgKHJlczogQXJyYXlCdWZmZXIpID0+IHtcbiAgICAgICAgICAgICAgICBKU1ppcC5sb2FkQXN5bmMocmVzLCBvcHRpb25zKS50aGVuKHJldCA9PiByZXNvbHZlKHJldCkpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZyb20gZmlsZVxuICAgICAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gKGU6IGFueSkgPT4ge1xuICAgICAgICAgIEpTWmlwLmxvYWRBc3luYyhlLnRhcmdldC5yZXN1bHQsIG9wdGlvbnMpLnRoZW4ocmV0ID0+IHJlc29sdmUocmV0KSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoPEZpbGU+ZmlsZU9yVXJsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIOWIm+W7uiBaaXAg5a6e5L6L77yM55So5LqO5Yib5bu65Y6L57yp5paH5Lu2ICovXG4gIGNyZWF0ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IHppcEZpbGU6IGFueSA9IG5ldyBKU1ppcCgpO1xuICAgICAgICByZXNvbHZlKHppcEZpbGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5LiL6L29VVJM6LWE5rqQ5bm25YaZ5YWlIHppcFxuICAgKiBAcGFyYW0gemlwIFppcCDlrp7kvotcbiAgICogQHBhcmFtIHBhdGggWmlwIOi3r+W+hO+8jOS+i+Wmgu+8miBgdGV4dC50eHRg44CBYHR4dC9oaS50eHRgXG4gICAqIEBwYXJhbSB1cmwgVVJMIOWcsOWdgFxuICAgKi9cbiAgcHVzaFVybCh6aXA6IGFueSwgcGF0aDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2hlY2soemlwKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5odHRwLnJlcXVlc3QoJ0dFVCcsIHVybCwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSkuc3Vic2NyaWJlKFxuICAgICAgICAocmVzOiBBcnJheUJ1ZmZlcikgPT4ge1xuICAgICAgICAgIHppcC5maWxlKHBhdGgsIHJlcyk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIHJlamVjdCh7IHVybCwgZXJyb3IgfSk7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOS/neWtmFppcOW5tuaJp+ihjOaJk+W8gOS/neWtmOWvueivneahhlxuICAgKlxuICAgKiBAcGFyYW0gemlwIHppcCDlr7nosaHvvIzliqHlv4XpgJrov4cgYGNyZWF0ZSgpYCDmnoTlu7pcbiAgICogQHBhcmFtIG9wdGlvbnMg6aKd5aSW5Y+C5pWw77yMXG4gICAqL1xuICBzYXZlKHppcDogYW55LCBvcHRpb25zPzogWmlwU2F2ZU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmNoZWNrKHppcCk7XG4gICAgY29uc3Qgb3B0ID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHppcFxuICAgICAgICAuZ2VuZXJhdGVBc3luYyhPYmplY3QuYXNzaWduKHsgdHlwZTogJ2Jsb2InIH0sIG9wdC5vcHRpb25zKSwgb3B0LnVwZGF0ZSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGRhdGE6IEJsb2IpID0+IHtcbiAgICAgICAgICAgIGlmIChvcHQuY2FsbGJhY2spIG9wdC5jYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIHNhdmVBcyhkYXRhLCBvcHQuZmlsZW5hbWUgfHwgJ2Rvd25sb2FkLnppcCcpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==