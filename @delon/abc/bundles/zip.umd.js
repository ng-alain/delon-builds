/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-ed90aa6
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy96aXAvemlwLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2FiYy96aXAvemlwLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hYmMvemlwL3ppcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFppcENvbmZpZyB7XHJcbiAgLyoqXHJcbiAgICogWmlwIGxpYnJhcnkgcGF0aFxyXG4gICAqL1xyXG4gIHVybD8gPSAnLy9jZG4uYm9vdGNzcy5jb20vanN6aXAvMy4xLjUvanN6aXAubWluLmpzJztcclxuICAvKipcclxuICAgKiBEZWZpbmVzIHdoaWNoIHppcCBvcHRpb25hbCB1dGlscyBzaG91bGQgZ2V0IGxvYWRlZFxyXG4gICAqL1xyXG4gIHV0aWxzPzogc3RyaW5nW10gPSBbXTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgeyBMYXp5U2VydmljZSwgTGF6eVJlc3VsdCB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IFppcFNhdmVPcHRpb25zIH0gZnJvbSAnLi96aXAudHlwZXMnO1xyXG5pbXBvcnQgeyBaaXBDb25maWcgfSBmcm9tICcuL3ppcC5jb25maWcnO1xyXG5cclxuZGVjbGFyZSB2YXIgSlNaaXA6IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFppcFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjb2c6IFppcENvbmZpZyxcclxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgbGF6eTogTGF6eVNlcnZpY2UsXHJcbiAgKSB7fVxyXG5cclxuICBwcml2YXRlIGluaXQoKTogUHJvbWlzZTxMYXp5UmVzdWx0W10+IHtcclxuICAgIHJldHVybiB0aGlzLmxhenkubG9hZChbdGhpcy5jb2cudXJsXS5jb25jYXQodGhpcy5jb2cudXRpbHMpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2soemlwOiBhbnkpIHtcclxuICAgIGlmICghemlwKSB0aHJvdyBuZXcgRXJyb3IoJ2dldCBpbnN0YW5jZSB2aWEgYFppcFNlcnZpY2UuY3JlYXRlKClgJyk7XHJcbiAgfVxyXG5cclxuICAvKiogw6jCp8Kjw6XCjsKLICovXHJcbiAgcmVhZChmaWxlT3JVcmw6IEZpbGUgfCBzdHJpbmcsIG9wdGlvbnM/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyBmcm9tIHVybFxyXG4gICAgICAgIGlmICh0eXBlb2YgZmlsZU9yVXJsID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5yZXF1ZXN0KCdHRVQnLCBmaWxlT3JVcmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgKHJlczogQXJyYXlCdWZmZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIEpTWmlwLmxvYWRBc3luYyhyZXMsIG9wdGlvbnMpLnRoZW4ocmV0ID0+IHJlc29sdmUocmV0KSk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZyb20gZmlsZVxyXG4gICAgICAgIGNvbnN0IHJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcclxuICAgICAgICAgIEpTWmlwLmxvYWRBc3luYyhlLnRhcmdldC5yZXN1bHQsIG9wdGlvbnMpLnRoZW4ocmV0ID0+IHJlc29sdmUocmV0KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKDxGaWxlPmZpbGVPclVybCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogw6XCiMKbw6XCu8K6IFppcCDDpcKuwp7DpMK+wovDr8K8wozDp8KUwqjDpMK6wo7DpcKIwpvDpcK7wrrDpcKOwovDp8K8wqnDpsKWwofDpMK7wrYgKi9cclxuICBjcmVhdGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KHJlc29sdmUgPT4ge1xyXG4gICAgICB0aGlzLmluaXQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zdCB6aXBGaWxlOiBhbnkgPSBuZXcgSlNaaXAoKTtcclxuICAgICAgICByZXNvbHZlKHppcEZpbGUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6TCuMKLw6jCvcK9VVJMw6jCtcKEw6bCusKQw6XCucK2w6XChsKZw6XChcKlIHppcFxyXG4gICAqIEBwYXJhbSB6aXAgWmlwIMOlwq7CnsOkwr7Ci1xyXG4gICAqIEBwYXJhbSBwYXRoIFppcCDDqMK3wq/DpcK+woTDr8K8wozDpMK+wovDpcKmwoLDr8K8wpogYHRleHQudHh0YMOjwoDCgWB0eHQvaGkudHh0YFxyXG4gICAqIEBwYXJhbSB1cmwgVVJMIMOlwpzCsMOlwp3CgFxyXG4gICAqL1xyXG4gIHB1c2hVcmwoemlwOiBhbnksIHBhdGg6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHRoaXMuY2hlY2soemlwKTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuaHR0cC5yZXF1ZXN0KCdHRVQnLCB1cmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnN1YnNjcmliZShcclxuICAgICAgICAocmVzOiBBcnJheUJ1ZmZlcikgPT4ge1xyXG4gICAgICAgICAgemlwLmZpbGUocGF0aCwgcmVzKTtcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICByZWplY3QoeyB1cmwsIGVycm9yIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOkwr/CncOlwq3CmFppcMOlwrnCtsOmwonCp8OowqHCjMOmwonCk8OlwrzCgMOkwr/CncOlwq3CmMOlwq/CucOowq/CncOmwqHChlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHppcCB6aXAgw6XCr8K5w6jCscKhw6/CvMKMw6XCisKhw6XCv8KFw6nCgMKaw6jCv8KHIGBjcmVhdGUoKWAgw6bCnsKEw6XCu8K6XHJcbiAgICogQHBhcmFtIG9wdGlvbnMgw6nCosKdw6XCpMKWw6XCj8KCw6bClcKww6/CvMKMXHJcbiAgICovXHJcbiAgc2F2ZSh6aXA6IGFueSwgb3B0aW9ucz86IFppcFNhdmVPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0aGlzLmNoZWNrKHppcCk7XHJcbiAgICBjb25zdCBvcHQgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHppcFxyXG4gICAgICAgIC5nZW5lcmF0ZUFzeW5jKE9iamVjdC5hc3NpZ24oeyB0eXBlOiAnYmxvYicgfSwgb3B0Lm9wdGlvbnMpLCBvcHQudXBkYXRlKVxyXG4gICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgKGRhdGE6IEJsb2IpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdC5jYWxsYmFjaykgb3B0LmNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICBzYXZlQXMoZGF0YSwgb3B0LmZpbGVuYW1lIHx8ICdkb3dubG9hZC56aXAnKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IFppcFNlcnZpY2UgfSBmcm9tICcuL3ppcC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgWmlwQ29uZmlnIH0gZnJvbSAnLi96aXAuY29uZmlnJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFppcE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogWmlwTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtaaXBDb25maWcsIFppcFNlcnZpY2VdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImh0dHAiLCJzYXZlQXMiLCJJbmplY3RhYmxlIiwiSHR0cENsaWVudCIsIkxhenlTZXJ2aWNlIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJEZWxvblV0aWxNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxRQUFBOzs7Ozt1QkFJUyw0Q0FBNEM7Ozs7eUJBSWhDLEVBQUU7O3dCQVJ2QjtRQVNDOzs7Ozs7QUNURDtRQVlFLG9CQUNVLEtBQ0FBLFNBQ0E7WUFGQSxRQUFHLEdBQUgsR0FBRztZQUNILFNBQUksR0FBSkEsT0FBSTtZQUNKLFNBQUksR0FBSixJQUFJO1NBQ1Y7Ozs7UUFFSSx5QkFBSTs7OztnQkFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7Ozs7UUFHdkQsMEJBQUs7Ozs7c0JBQUMsR0FBUTtnQkFDcEIsSUFBSSxDQUFDLEdBQUc7b0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDOzs7Ozs7Ozs7UUFJdEUseUJBQUk7Ozs7OztZQUFKLFVBQUssU0FBd0IsRUFBRSxPQUFhO2dCQUE1QyxpQkF5QkM7Z0JBeEJDLE9BQU8sSUFBSSxPQUFPLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDdEMsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQzs7d0JBRWYsSUFBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLEVBQUU7NEJBQ2pDLEtBQUksQ0FBQyxJQUFJO2lDQUNOLE9BQU8sQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxDQUFDO2lDQUMxRCxTQUFTLENBQ1IsVUFBQyxHQUFnQjtnQ0FDZixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMs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