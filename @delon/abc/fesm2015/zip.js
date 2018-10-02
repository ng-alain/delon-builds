import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { LazyService, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ZipConfig {
    constructor() {
        /**
         * Zip library path
         */
        this.url = '//cdn.bootcss.com/jszip/3.1.5/jszip.min.js';
        /**
         * Defines which zip optional utils should get loaded
         */
        this.utils = [];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ZipService {
    /**
     * @param {?} cog
     * @param {?} http
     * @param {?} lazy
     */
    constructor(cog, http, lazy) {
        this.cog = cog;
        this.http = http;
        this.lazy = lazy;
    }
    /**
     * @return {?}
     */
    init() {
        return this.lazy.load([this.cog.url].concat(this.cog.utils));
    }
    /**
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
        return new Promise((resolve, reject) => {
            this.init().then(() => {
                // from url
                if (typeof fileOrUrl === 'string') {
                    this.http
                        .request('GET', fileOrUrl, { responseType: 'arraybuffer' })
                        .subscribe((res) => {
                        JSZip.loadAsync(res, options).then(ret => resolve(ret));
                    }, (err) => {
                        reject(err);
                    });
                    return;
                }
                /** @type {?} */
                const reader = new FileReader();
                reader.onload = (e) => {
                    JSZip.loadAsync(e.target.result, options).then(ret => resolve(ret));
                };
                reader.readAsBinaryString(/** @type {?} */ (fileOrUrl));
            });
        });
    }
    /**
     * 创建 Zip 实例，用于创建压缩文件
     * @return {?}
     */
    create() {
        return new Promise(resolve => {
            this.init().then(() => {
                /** @type {?} */
                const zipFile = new JSZip();
                resolve(zipFile);
            });
        });
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
        return new Promise((resolve, reject) => {
            this.http.request('GET', url, { responseType: 'arraybuffer' }).subscribe((res) => {
                zip.file(path, res);
                resolve();
            }, (error) => {
                reject({ url, error });
            });
        });
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
        const opt = Object.assign({}, options);
        return new Promise((resolve, reject) => {
            zip
                .generateAsync(Object.assign({ type: 'blob' }, opt.options), opt.update)
                .then((data) => {
                if (opt.callback)
                    opt.callback(data);
                saveAs(data, opt.filename || 'download.zip');
                resolve();
            }, err => {
                reject(err);
            });
        });
    }
}
ZipService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ZipService.ctorParameters = () => [
    { type: ZipConfig },
    { type: HttpClient },
    { type: LazyService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ZipModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ZipModule,
            providers: [ZipConfig, ZipService],
        };
    }
}
ZipModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
            },] }
];

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