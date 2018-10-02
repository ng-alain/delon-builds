import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { LazyService, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ZipConfig = /** @class */ (function () {
    function ZipConfig() {
        /**
         * Zip library path
         */
        this.url = '//cdn.bootcss.com/jszip/3.1.5/jszip.min.js';
        /**
         * Defines which zip optional utils should get loaded
         */
        this.utils = [];
    }
    return ZipConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ZipModule = /** @class */ (function () {
    function ZipModule() {
    }
    /**
     * @return {?}
     */
    ZipModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ZipModule,
            providers: [ZipConfig, ZipService],
        };
    };
    ZipModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                },] }
    ];
    return ZipModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { ZipService, ZipModule, ZipConfig };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL3ppcC96aXAuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWJjL3ppcC96aXAuc2VydmljZS50cyIsIm5nOi8vQGRlbG9uL2FiYy96aXAvemlwLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgWmlwQ29uZmlnIHtcclxuICAvKipcclxuICAgKiBaaXAgbGlicmFyeSBwYXRoXHJcbiAgICovXHJcbiAgdXJsPyA9ICcvL2Nkbi5ib290Y3NzLmNvbS9qc3ppcC8zLjEuNS9qc3ppcC5taW4uanMnO1xyXG4gIC8qKlxyXG4gICAqIERlZmluZXMgd2hpY2ggemlwIG9wdGlvbmFsIHV0aWxzIHNob3VsZCBnZXQgbG9hZGVkXHJcbiAgICovXHJcbiAgdXRpbHM/OiBzdHJpbmdbXSA9IFtdO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IExhenlTZXJ2aWNlLCBMYXp5UmVzdWx0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgWmlwU2F2ZU9wdGlvbnMgfSBmcm9tICcuL3ppcC50eXBlcyc7XHJcbmltcG9ydCB7IFppcENvbmZpZyB9IGZyb20gJy4vemlwLmNvbmZpZyc7XHJcblxyXG5kZWNsYXJlIHZhciBKU1ppcDogYW55O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgWmlwU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNvZzogWmlwQ29uZmlnLFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBsYXp5OiBMYXp5U2VydmljZSxcclxuICApIHt9XHJcblxyXG4gIHByaXZhdGUgaW5pdCgpOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubGF6eS5sb2FkKFt0aGlzLmNvZy51cmxdLmNvbmNhdCh0aGlzLmNvZy51dGlscykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVjayh6aXA6IGFueSkge1xyXG4gICAgaWYgKCF6aXApIHRocm93IG5ldyBFcnJvcignZ2V0IGluc3RhbmNlIHZpYSBgWmlwU2VydmljZS5jcmVhdGUoKWAnKTtcclxuICB9XHJcblxyXG4gIC8qKiDDqMKnwqPDpcKOwosgKi9cclxuICByZWFkKGZpbGVPclVybDogRmlsZSB8IHN0cmluZywgb3B0aW9ucz86IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIGZyb20gdXJsXHJcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxlT3JVcmwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnJlcXVlc3QoJ0dFVCcsIGZpbGVPclVybCwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAocmVzOiBBcnJheUJ1ZmZlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgSlNaaXAubG9hZEFzeW5jKHJlcywgb3B0aW9ucykudGhlbihyZXQgPT4gcmVzb2x2ZShyZXQpKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZnJvbSBmaWxlXHJcbiAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICByZWFkZXIub25sb2FkID0gKGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgSlNaaXAubG9hZEFzeW5jKGUudGFyZ2V0LnJlc3VsdCwgb3B0aW9ucykudGhlbihyZXQgPT4gcmVzb2x2ZShyZXQpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoPEZpbGU+ZmlsZU9yVXJsKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiDDpcKIwpvDpcK7wrogWmlwIMOlwq7CnsOkwr7Ci8OvwrzCjMOnwpTCqMOkwrrCjsOlwojCm8OlwrvCusOlwo7Ci8OnwrzCqcOmwpbCh8OkwrvCtiAqL1xyXG4gIGNyZWF0ZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHppcEZpbGU6IGFueSA9IG5ldyBKU1ppcCgpO1xyXG4gICAgICAgIHJlc29sdmUoemlwRmlsZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpMK4wovDqMK9wr1VUkzDqMK1woTDpsK6wpDDpcK5wrbDpcKGwpnDpcKFwqUgemlwXHJcbiAgICogQHBhcmFtIHppcCBaaXAgw6XCrsKew6TCvsKLXHJcbiAgICogQHBhcmFtIHBhdGggWmlwIMOowrfCr8Olwr7ChMOvwrzCjMOkwr7Ci8OlwqbCgsOvwrzCmiBgdGV4dC50eHRgw6PCgMKBYHR4dC9oaS50eHRgXHJcbiAgICogQHBhcmFtIHVybCBVUkwgw6XCnMKww6XCncKAXHJcbiAgICovXHJcbiAgcHVzaFVybCh6aXA6IGFueSwgcGF0aDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdGhpcy5jaGVjayh6aXApO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5odHRwLnJlcXVlc3QoJ0dFVCcsIHVybCwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSkuc3Vic2NyaWJlKFxyXG4gICAgICAgIChyZXM6IEFycmF5QnVmZmVyKSA9PiB7XHJcbiAgICAgICAgICB6aXAuZmlsZShwYXRoLCByZXMpO1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJlamVjdCh7IHVybCwgZXJyb3IgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6TCv8Kdw6XCrcKYWmlww6XCucK2w6bCicKnw6jCocKMw6bCicKTw6XCvMKAw6TCv8Kdw6XCrcKYw6XCr8K5w6jCr8Kdw6bCocKGXHJcbiAgICpcclxuICAgKiBAcGFyYW0gemlwIHppcCDDpcKvwrnDqMKxwqHDr8K8wozDpcKKwqHDpcK/woXDqcKAwprDqMK/wocgYGNyZWF0ZSgpYCDDpsKewoTDpcK7wrpcclxuICAgKiBAcGFyYW0gb3B0aW9ucyDDqcKiwp3DpcKkwpbDpcKPwoLDpsKVwrDDr8K8woxcclxuICAgKi9cclxuICBzYXZlKHppcDogYW55LCBvcHRpb25zPzogWmlwU2F2ZU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHRoaXMuY2hlY2soemlwKTtcclxuICAgIGNvbnN0IG9wdCA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgemlwXHJcbiAgICAgICAgLmdlbmVyYXRlQXN5bmMoT2JqZWN0LmFzc2lnbih7IHR5cGU6ICdibG9iJyB9LCBvcHQub3B0aW9ucyksIG9wdC51cGRhdGUpXHJcbiAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAoZGF0YTogQmxvYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0LmNhbGxiYWNrKSBvcHQuY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIHNhdmVBcyhkYXRhLCBvcHQuZmlsZW5hbWUgfHwgJ2Rvd25sb2FkLnppcCcpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgWmlwU2VydmljZSB9IGZyb20gJy4vemlwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBaaXBDb25maWcgfSBmcm9tICcuL3ppcC5jb25maWcnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgWmlwTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBaaXBNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1ppcENvbmZpZywgWmlwU2VydmljZV0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwi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