/**
 * @license ng-alain(cipchk@qq.com) v11.7.0
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('@delon/util/config'), require('@delon/util/other'), require('file-saver'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/zip', ['exports', '@angular/common/http', '@angular/core', '@delon/util/config', '@delon/util/other', 'file-saver', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.zip = {}), global.ng.common.http, global.ng.core, global.i3, global.i2, global.saveAs, global.ng.common));
}(this, (function (exports, i1, i0, i3, i2, fileSaver, common) { 'use strict';

    var ZipService = /** @class */ (function () {
        function ZipService(http, lazy, configSrv, ngZone) {
            this.http = http;
            this.lazy = lazy;
            this.ngZone = ngZone;
            this.cog = configSrv.merge('zip', {
                url: '//cdn.bootcss.com/jszip/3.3.0/jszip.min.js',
                utils: [],
            });
        }
        ZipService.prototype.init = function () {
            return this.lazy.load([this.cog.url].concat(this.cog.utils));
        };
        ZipService.prototype.check = function (zip) {
            if (!zip)
                throw new Error('get instance via `ZipService.create()`');
        };
        /** 解压 */
        ZipService.prototype.read = function (fileOrUrl, options) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var resolveCallback = function (data) {
                    _this.ngZone.run(function () { return resolve(data); });
                };
                _this.init().then(function () {
                    _this.ngZone.runOutsideAngular(function () {
                        // from url
                        if (typeof fileOrUrl === 'string') {
                            _this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe(function (res) {
                                JSZip.loadAsync(res, options).then(function (ret) { return resolveCallback(ret); });
                            }, function (err) {
                                reject(err);
                            });
                            return;
                        }
                        // from file
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            JSZip.loadAsync(e.target.result, options).then(function (ret) { return resolveCallback(ret); });
                        };
                        reader.readAsBinaryString(fileOrUrl);
                    });
                });
            });
        };
        /** 创建 Zip 实例，用于创建压缩文件 */
        ZipService.prototype.create = function () {
            var _this = this;
            return new Promise(function (resolve) {
                _this.init().then(function () {
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
        ZipService.prototype.pushUrl = function (zip, path, url) {
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
        ZipService.prototype.save = function (zip, options) {
            this.check(zip);
            var opt = Object.assign({}, options);
            return new Promise(function (resolve, reject) {
                zip.generateAsync(Object.assign({ type: 'blob' }, opt.options), opt.update).then(function (data) {
                    if (opt.callback)
                        opt.callback(data);
                    fileSaver.saveAs(data, opt.filename || 'download.zip');
                    resolve();
                }, function (err) {
                    reject(err);
                });
            });
        };
        return ZipService;
    }());
    /** @nocollapse */ ZipService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ZipService_Factory() { return new ZipService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LazyService), i0.ɵɵinject(i3.AlainConfigService), i0.ɵɵinject(i0.NgZone)); }, token: ZipService, providedIn: "root" });
    ZipService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ZipService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: i2.LazyService },
        { type: i3.AlainConfigService },
        { type: i0.NgZone }
    ]; };

    var ZipModule = /** @class */ (function () {
        function ZipModule() {
        }
        return ZipModule;
    }());
    ZipModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ZipModule = ZipModule;
    exports.ZipService = ZipService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=zip.umd.js.map
