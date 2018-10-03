/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { LazyService } from '@delon/util';
import { ZipConfig } from './zip.config';
export class ZipService {
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
if (false) {
    /** @type {?} */
    ZipService.prototype.cog;
    /** @type {?} */
    ZipService.prototype.http;
    /** @type {?} */
    ZipService.prototype.lazy;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3ppcC8iLCJzb3VyY2VzIjpbInppcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxXQUFXLEVBQWMsTUFBTSxhQUFhLENBQUM7QUFHdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUt6QyxNQUFNOzs7Ozs7SUFDSixZQUNVLEtBQ0EsTUFDQTtRQUZBLFFBQUcsR0FBSCxHQUFHO1FBQ0gsU0FBSSxHQUFKLElBQUk7UUFDSixTQUFJLEdBQUosSUFBSTtLQUNWOzs7O0lBRUksSUFBSTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7OztJQUd2RCxLQUFLLENBQUMsR0FBUTtRQUNwQixJQUFJLENBQUMsR0FBRztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQzs7Ozs7Ozs7SUFJdEUsSUFBSSxDQUFDLFNBQXdCLEVBQUUsT0FBYTtRQUMxQyxPQUFPLElBQUksT0FBTyxDQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFOztnQkFFcEIsSUFBSSxPQUFPLFNBQVMsS0FBSyxRQUFRLEVBQUU7b0JBQ2pDLElBQUksQ0FBQyxJQUFJO3lCQUNOLE9BQU8sQ0FBQyxLQUFLLEVBQUUs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Q0FBQyxFQUFFO2dCQUNKLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNiLENBQ0YsQ0FBQztTQUNMLENBQUMsQ0FBQztLQUNKOzs7WUFsR0YsVUFBVTs7OztZQUpGLFNBQVM7WUFMVCxVQUFVO1lBRVYsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcbmltcG9ydCB7IExhenlTZXJ2aWNlLCBMYXp5UmVzdWx0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBaaXBTYXZlT3B0aW9ucyB9IGZyb20gJy4vemlwLnR5cGVzJztcbmltcG9ydCB7IFppcENvbmZpZyB9IGZyb20gJy4vemlwLmNvbmZpZyc7XG5cbmRlY2xhcmUgdmFyIEpTWmlwOiBhbnk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBaaXBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb2c6IFppcENvbmZpZyxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBsYXp5OiBMYXp5U2VydmljZSxcbiAgKSB7fVxuXG4gIHByaXZhdGUgaW5pdCgpOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLmxhenkubG9hZChbdGhpcy5jb2cudXJsXS5jb25jYXQodGhpcy5jb2cudXRpbHMpKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2soemlwOiBhbnkpIHtcbiAgICBpZiAoIXppcCkgdGhyb3cgbmV3IEVycm9yKCdnZXQgaW5zdGFuY2UgdmlhIGBaaXBTZXJ2aWNlLmNyZWF0ZSgpYCcpO1xuICB9XG5cbiAgLyoqIOino+WOiyAqL1xuICByZWFkKGZpbGVPclVybDogRmlsZSB8IHN0cmluZywgb3B0aW9ucz86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIGZyb20gdXJsXG4gICAgICAgIGlmICh0eXBlb2YgZmlsZU9yVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaHR0cFxuICAgICAgICAgICAgLnJlcXVlc3QoJ0dFVCcsIGZpbGVPclVybCwgeyByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicgfSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIChyZXM6IEFycmF5QnVmZmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgSlNaaXAubG9hZEFzeW5jKHJlcywgb3B0aW9ucykudGhlbihyZXQgPT4gcmVzb2x2ZShyZXQpKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBmcm9tIGZpbGVcbiAgICAgICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgICBKU1ppcC5sb2FkQXN5bmMoZS50YXJnZXQucmVzdWx0LCBvcHRpb25zKS50aGVuKHJldCA9PiByZXNvbHZlKHJldCkpO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKDxGaWxlPmZpbGVPclVybCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiDliJvlu7ogWmlwIOWunuS+i++8jOeUqOS6juWIm+W7uuWOi+e8qeaWh+S7tiAqL1xuICBjcmVhdGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PihyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCB6aXBGaWxlOiBhbnkgPSBuZXcgSlNaaXAoKTtcbiAgICAgICAgcmVzb2x2ZSh6aXBGaWxlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOS4i+i9vVVSTOi1hOa6kOW5tuWGmeWFpSB6aXBcbiAgICogQHBhcmFtIHppcCBaaXAg5a6e5L6LXG4gICAqIEBwYXJhbSBwYXRoIFppcCDot6/lvoTvvIzkvovlpoLvvJogYHRleHQudHh0YOOAgWB0eHQvaGkudHh0YFxuICAgKiBAcGFyYW0gdXJsIFVSTCDlnLDlnYBcbiAgICovXG4gIHB1c2hVcmwoemlwOiBhbnksIHBhdGg6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmNoZWNrKHppcCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaHR0cC5yZXF1ZXN0KCdHRVQnLCB1cmwsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pLnN1YnNjcmliZShcbiAgICAgICAgKHJlczogQXJyYXlCdWZmZXIpID0+IHtcbiAgICAgICAgICB6aXAuZmlsZShwYXRoLCByZXMpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICByZWplY3QoeyB1cmwsIGVycm9yIH0pO1xuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkv53lrZhaaXDlubbmiafooYzmiZPlvIDkv53lrZjlr7nor53moYZcbiAgICpcbiAgICogQHBhcmFtIHppcCB6aXAg5a+56LGh77yM5Yqh5b+F6YCa6L+HIGBjcmVhdGUoKWAg5p6E5bu6XG4gICAqIEBwYXJhbSBvcHRpb25zIOmineWkluWPguaVsO+8jFxuICAgKi9cbiAgc2F2ZSh6aXA6IGFueSwgb3B0aW9ucz86IFppcFNhdmVPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5jaGVjayh6aXApO1xuICAgIGNvbnN0IG9wdCA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB6aXBcbiAgICAgICAgLmdlbmVyYXRlQXN5bmMoT2JqZWN0LmFzc2lnbih7IHR5cGU6ICdibG9iJyB9LCBvcHQub3B0aW9ucyksIG9wdC51cGRhdGUpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChkYXRhOiBCbG9iKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0LmNhbGxiYWNrKSBvcHQuY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICBzYXZlQXMoZGF0YSwgb3B0LmZpbGVuYW1lIHx8ICdkb3dubG9hZC56aXAnKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=