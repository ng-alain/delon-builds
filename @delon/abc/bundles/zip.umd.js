/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.5-24ee1f2
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('file-saver'), require('@delon/util'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/zip', ['exports', '@angular/core', '@angular/common/http', 'file-saver', '@delon/util', '@angular/common'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.zip = {}),global.ng.core,global.ng.common.http,global.saveAs,global.delon.util,global.ng.common));
}(this, (function (exports,core,http,fileSaver,util,common) { 'use strict';

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
        function ZipService(cog, http$$1, lazy) {
            this.cog = cog;
            this.http = http$$1;
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
                        fileSaver.saveAs(data, opt.filename || 'download.zip');
                        resolve();
                    }, function (err) {
                        reject(err);
                    });
                });
            };
        ZipService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ZipService.ctorParameters = function () {
            return [
                { type: ZipConfig },
                { type: http.HttpClient },
                { type: util.LazyService }
            ];
        };
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
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

    exports.ZipService = ZipService;
    exports.ZipModule = ZipModule;
    exports.ZipConfig = ZipConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy96aXAvemlwLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2FiYy96aXAvemlwLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hYmMvemlwL3ppcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFppcENvbmZpZyB7XG4gIC8qKlxuICAgKiBaaXAgbGlicmFyeSBwYXRoXG4gICAqL1xuICB1cmw/ID0gJy8vY2RuLmJvb3Rjc3MuY29tL2pzemlwLzMuMS41L2pzemlwLm1pbi5qcyc7XG4gIC8qKlxuICAgKiBEZWZpbmVzIHdoaWNoIHppcCBvcHRpb25hbCB1dGlscyBzaG91bGQgZ2V0IGxvYWRlZFxuICAgKi9cbiAgdXRpbHM/OiBzdHJpbmdbXSA9IFtdO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xuaW1wb3J0IHsgTGF6eVNlcnZpY2UsIExhenlSZXN1bHQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFppcFNhdmVPcHRpb25zIH0gZnJvbSAnLi96aXAudHlwZXMnO1xuaW1wb3J0IHsgWmlwQ29uZmlnIH0gZnJvbSAnLi96aXAuY29uZmlnJztcblxuZGVjbGFyZSB2YXIgSlNaaXA6IGFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFppcFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvZzogWmlwQ29uZmlnLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGxhenk6IExhenlTZXJ2aWNlLFxuICApIHt9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IFByb21pc2U8TGF6eVJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMubGF6eS5sb2FkKFt0aGlzLmNvZy51cmxdLmNvbmNhdCh0aGlzLmNvZy51dGlscykpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVjayh6aXA6IGFueSkge1xuICAgIGlmICghemlwKSB0aHJvdyBuZXcgRXJyb3IoJ2dldCBpbnN0YW5jZSB2aWEgYFppcFNlcnZpY2UuY3JlYXRlKClgJyk7XG4gIH1cblxuICAvKiogw6jCp8Kjw6XCjsKLICovXG4gIHJlYWQoZmlsZU9yVXJsOiBGaWxlIHwgc3RyaW5nLCBvcHRpb25zPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgLy8gZnJvbSB1cmxcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxlT3JVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5odHRwXG4gICAgICAgICAgICAucmVxdWVzdCgnR0VUJywgZmlsZU9yVXJsLCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgKHJlczogQXJyYXlCdWZmZXIpID0+IHtcbiAgICAgICAgICAgICAgICBKU1ppcC5sb2FkQXN5bmMocmVzLCBvcHRpb25zKS50aGVuKHJldCA9PiByZXNvbHZlKHJldCkpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZyb20gZmlsZVxuICAgICAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gKGU6IGFueSkgPT4ge1xuICAgICAgICAgIEpTWmlwLmxvYWRBc3luYyhlLnRhcmdldC5yZXN1bHQsIG9wdGlvbnMpLnRoZW4ocmV0ID0+IHJlc29sdmUocmV0KSk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoPEZpbGU+ZmlsZU9yVXJsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIMOlwojCm8OlwrvCuiBaaXAgw6XCrsKew6TCvsKLw6/CvMKMw6fClMKow6TCusKOw6XCiMKbw6XCu8K6w6XCjsKLw6fCvMKpw6bClsKHw6TCu8K2ICovXG4gIGNyZWF0ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IHppcEZpbGU6IGFueSA9IG5ldyBKU1ppcCgpO1xuICAgICAgICByZXNvbHZlKHppcEZpbGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6TCuMKLw6jCvcK9VVJMw6jCtcKEw6bCusKQw6XCucK2w6XChsKZw6XChcKlIHppcFxuICAgKiBAcGFyYW0gemlwIFppcCDDpcKuwp7DpMK+wotcbiAgICogQHBhcmFtIHBhdGggWmlwIMOowrfCr8Olwr7ChMOvwrzCjMOkwr7Ci8OlwqbCgsOvwrzCmiBgdGV4dC50eHRgw6PCgMKBYHR4dC9oaS50eHRgXG4gICAqIEBwYXJhbSB1cmwgVVJMIMOlwpzCsMOlwp3CgFxuICAgKi9cbiAgcHVzaFVybCh6aXA6IGFueSwgcGF0aDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2hlY2soemlwKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5odHRwLnJlcXVlc3QoJ0dFVCcsIHVybCwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSkuc3Vic2NyaWJlKFxuICAgICAgICAocmVzOiBBcnJheUJ1ZmZlcikgPT4ge1xuICAgICAgICAgIHppcC5maWxlKHBhdGgsIHJlcyk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIHJlamVjdCh7IHVybCwgZXJyb3IgfSk7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIMOkwr/CncOlwq3CmFppcMOlwrnCtsOmwonCp8OowqHCjMOmwonCk8OlwrzCgMOkwr/CncOlwq3CmMOlwq/CucOowq/CncOmwqHChlxuICAgKlxuICAgKiBAcGFyYW0gemlwIHppcCDDpcKvwrnDqMKxwqHDr8K8wozDpcKKwqHDpcK/woXDqcKAwprDqMK/wocgYGNyZWF0ZSgpYCDDpsKewoTDpcK7wrpcbiAgICogQHBhcmFtIG9wdGlvbnMgw6nCosKdw6XCpMKWw6XCj8KCw6bClcKww6/CvMKMXG4gICAqL1xuICBzYXZlKHppcDogYW55LCBvcHRpb25zPzogWmlwU2F2ZU9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmNoZWNrKHppcCk7XG4gICAgY29uc3Qgb3B0ID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHppcFxuICAgICAgICAuZ2VuZXJhdGVBc3luYyhPYmplY3QuYXNzaWduKHsgdHlwZTogJ2Jsb2InIH0sIG9wdC5vcHRpb25zKSwgb3B0LnVwZGF0ZSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGRhdGE6IEJsb2IpID0+IHtcbiAgICAgICAgICAgIGlmIChvcHQuY2FsbGJhY2spIG9wdC5jYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIHNhdmVBcyhkYXRhLCBvcHQuZmlsZW5hbWUgfHwgJ2Rvd25sb2FkLnppcCcpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBaaXBTZXJ2aWNlIH0gZnJvbSAnLi96aXAuc2VydmljZSc7XG5pbXBvcnQgeyBaaXBDb25maWcgfSBmcm9tICcuL3ppcC5jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBaaXBNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFppcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1ppcENvbmZpZywgWmlwU2VydmljZV0sXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImh0dHAiLCJzYXZlQXMiLCJJbmplY3RhYmxlIiwiSHR0cENsaWVudCIsIkxhenlTZXJ2aWNlIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJEZWxvblV0aWxNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxRQUFBOzs7Ozt1QkFJUyw0Q0FBNEM7Ozs7eUJBSWhDLEVBQUU7O3dCQVJ2QjtRQVNDOzs7Ozs7QUNURDtRQVlFLG9CQUNVLEtBQ0FBLFNBQ0E7WUFGQSxRQUFHLEdBQUgsR0FBRztZQUNILFNBQUksR0FBSkEsT0FBSTtZQUNKLFNBQUksR0FB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