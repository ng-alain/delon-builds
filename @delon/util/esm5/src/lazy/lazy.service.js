/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { share, filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * @record
 */
export function LazyResult() { }
/** @type {?} */
LazyResult.prototype.path;
/** @type {?} */
LazyResult.prototype.loaded;
/** @type {?} */
LazyResult.prototype.status;
var LazyService = /** @class */ (function () {
    function LazyService(doc) {
        this.doc = doc;
        this.list = {};
        this.cached = {};
        this._notify = new BehaviorSubject([]);
    }
    Object.defineProperty(LazyService.prototype, "change", {
        get: /**
         * @return {?}
         */
        function () {
            return this._notify.asObservable().pipe(share(), filter(function (ls) { return ls.length !== 0; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LazyService.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.list = {};
        this.cached = {};
    };
    /**
     * @param {?} paths
     * @return {?}
     */
    LazyService.prototype.load = /**
     * @param {?} paths
     * @return {?}
     */
    function (paths) {
        var _this = this;
        if (!Array.isArray(paths))
            paths = [paths];
        /** @type {?} */
        var promises = [];
        paths.forEach(function (path) {
            if (path.endsWith('.js')) {
                promises.push(_this.loadScript(path));
            }
            else {
                promises.push(_this.loadStyle(path));
            }
        });
        return Promise.all(promises).then(function (res) {
            _this._notify.next(res);
            return Promise.resolve(res);
        });
    };
    /**
     * @param {?} path
     * @param {?=} innerContent
     * @return {?}
     */
    LazyService.prototype.loadScript = /**
     * @param {?} path
     * @param {?=} innerContent
     * @return {?}
     */
    function (path, innerContent) {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.list[path] === true) {
                resolve(_this.cached[path]);
                return;
            }
            _this.list[path] = true;
            /** @type {?} */
            var onSuccess = function (item) {
                _this.cached[path] = item;
                resolve(item);
            };
            /** @type {?} */
            var node = /** @type {?} */ (_this.doc.createElement('script'));
            node.type = 'text/javascript';
            node.src = path;
            node.charset = 'utf-8';
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            if ((/** @type {?} */ (node)).readyState) {
                // IE
                (/** @type {?} */ (node)).onreadystatechange = function () {
                    if ((/** @type {?} */ (node)).readyState === 'loaded' ||
                        (/** @type {?} */ (node)).readyState === 'complete') {
                        (/** @type {?} */ (node)).onreadystatechange = null;
                        onSuccess({
                            path: path,
                            loaded: true,
                            status: 'ok',
                        });
                    }
                };
            }
            else {
                node.onload = function () {
                    onSuccess({
                        path: path,
                        loaded: true,
                        status: 'ok',
                    });
                };
            }
            node.onerror = function (error) {
                return onSuccess({
                    path: path,
                    loaded: false,
                    status: 'error',
                });
            };
            _this.doc.getElementsByTagName('head')[0].appendChild(node);
        });
    };
    /**
     * @param {?} path
     * @param {?=} rel
     * @param {?=} innerContent
     * @return {?}
     */
    LazyService.prototype.loadStyle = /**
     * @param {?} path
     * @param {?=} rel
     * @param {?=} innerContent
     * @return {?}
     */
    function (path, rel, innerContent) {
        var _this = this;
        if (rel === void 0) { rel = 'stylesheet'; }
        return new Promise(function (resolve) {
            if (_this.list[path] === true) {
                resolve(_this.cached[path]);
                return;
            }
            _this.list[path] = true;
            /** @type {?} */
            var node = /** @type {?} */ (_this.doc.createElement('link'));
            node.rel = rel;
            node.type = 'text/css';
            node.href = path;
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            _this.doc.getElementsByTagName('head')[0].appendChild(node);
            /** @type {?} */
            var item = {
                path: path,
                loaded: true,
                status: 'ok',
            };
            _this.cached[path] = item;
            resolve(item);
        });
    };
    LazyService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LazyService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ LazyService.ngInjectableDef = i0.defineInjectable({ factory: function LazyService_Factory() { return new LazyService(i0.inject(i1.DOCUMENT)); }, token: LazyService, providedIn: "root" });
    return LazyService;
}());
export { LazyService };
if (false) {
    /** @type {?} */
    LazyService.prototype.list;
    /** @type {?} */
    LazyService.prototype.cached;
    /** @type {?} */
    LazyService.prototype._notify;
    /** @type {?} */
    LazyService.prototype.doc;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvbGF6eS9sYXp5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBZ0I3QyxxQkFBc0MsR0FBUTtRQUFSLFFBQUcsR0FBSCxHQUFHLENBQUs7b0JBTjFCLEVBQUU7c0JBQ0EsRUFBRTt1QkFDeUIsSUFBSSxlQUFlLENBRWxFLEVBQUUsQ0FBQztLQUU2QztJQUVsRCxzQkFBSSwrQkFBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDckMsS0FBSyxFQUFFLEVBQ1AsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQWYsQ0FBZSxDQUFDLENBQzlCLENBQUM7U0FDSDs7O09BQUE7Ozs7SUFFRCwyQkFBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0tBQ2xCOzs7OztJQUVELDBCQUFJOzs7O0lBQUosVUFBSyxLQUF3QjtRQUE3QixpQkFnQkM7UUFmQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFBRSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7UUFFM0MsSUFBTSxRQUFRLEdBQTBCLEVBQUUsQ0FBQztRQUMzQyxLQUFL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O2dEQVFuQixNQUFNLFNBQUMsUUFBUTs7O3NCQW5COUI7O1NBWWEsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzaGFyZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYXp5UmVzdWx0IHtcclxuICBwYXRoOiBzdHJpbmc7XHJcbiAgbG9hZGVkOiBib29sZWFuO1xyXG4gIHN0YXR1czogJ29rJyB8ICdlcnJvcic7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBMYXp5U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBsaXN0OiBhbnkgPSB7fTtcclxuICBwcml2YXRlIGNhY2hlZDogYW55ID0ge307XHJcbiAgcHJpdmF0ZSBfbm90aWZ5OiBCZWhhdmlvclN1YmplY3Q8TGF6eVJlc3VsdFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8XHJcbiAgICBMYXp5UmVzdWx0W11cclxuICA+KFtdKTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSkge31cclxuXHJcbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPExhenlSZXN1bHRbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX25vdGlmeS5hc09ic2VydmFibGUoKS5waXBlKFxyXG4gICAgICBzaGFyZSgpLFxyXG4gICAgICBmaWx0ZXIobHMgPT4gbHMubGVuZ3RoICE9PSAwKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdCA9IHt9O1xyXG4gICAgdGhpcy5jYWNoZWQgPSB7fTtcclxuICB9XHJcblxyXG4gIGxvYWQocGF0aHM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxMYXp5UmVzdWx0W10+IHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShwYXRocykpIHBhdGhzID0gW3BhdGhzXTtcclxuXHJcbiAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTxMYXp5UmVzdWx0PltdID0gW107XHJcbiAgICBwYXRocy5mb3JFYWNoKHBhdGggPT4ge1xyXG4gICAgICBpZiAocGF0aC5lbmRzV2l0aCgnLmpzJykpIHtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZFNjcmlwdChwYXRoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRTdHlsZShwYXRoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihyZXMgPT4ge1xyXG4gICAgICB0aGlzLl9ub3RpZnkubmV4dChyZXMpO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRTY3JpcHQocGF0aDogc3RyaW5nLCBpbm5lckNvbnRlbnQ/OiBzdHJpbmcpOiBQcm9taXNlPExhenlSZXN1bHQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgaWYgKHRoaXMubGlzdFtwYXRoXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5jYWNoZWRbcGF0aF0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5saXN0W3BhdGhdID0gdHJ1ZTtcclxuICAgICAgY29uc3Qgb25TdWNjZXNzID0gKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FjaGVkW3BhdGhdID0gaXRlbTtcclxuICAgICAgICByZXNvbHZlKGl0ZW0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpIGFzIEhUTUxTY3JpcHRFbGVtZW50O1xyXG4gICAgICBub2RlLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICAgICAgbm9kZS5zcmMgPSBwYXRoO1xyXG4gICAgICBub2RlLmNoYXJzZXQgPSAndXRmLTgnO1xyXG4gICAgICBpZiAoaW5uZXJDb250ZW50KSB7XHJcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCg8YW55Pm5vZGUpLnJlYWR5U3RhdGUpIHtcclxuICAgICAgICAvLyBJRVxyXG4gICAgICAgICg8YW55Pm5vZGUpLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgKDxhbnk+bm9kZSkucmVhZHlTdGF0ZSA9PT0gJ2xvYWRlZCcgfHxcclxuICAgICAgICAgICAgKDxhbnk+bm9kZSkucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJ1xyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICg8YW55Pm5vZGUpLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XHJcbiAgICAgICAgICAgIG9uU3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgICAgICAgICBsb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3RhdHVzOiAnb2snLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5vZGUub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgb25TdWNjZXNzKHtcclxuICAgICAgICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgICAgICAgbG9hZGVkOiB0cnVlLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICdvaycsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIG5vZGUub25lcnJvciA9IChlcnJvcjogYW55KSA9PlxyXG4gICAgICAgIG9uU3VjY2Vzcyh7XHJcbiAgICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgICB9KTtcclxuICAgICAgdGhpcy5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZFN0eWxlKFxyXG4gICAgcGF0aDogc3RyaW5nLFxyXG4gICAgcmVsID0gJ3N0eWxlc2hlZXQnLFxyXG4gICAgaW5uZXJDb250ZW50Pzogc3RyaW5nLFxyXG4gICk6IFByb21pc2U8TGF6eVJlc3VsdD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBpZiAodGhpcy5saXN0W3BhdGhdID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmNhY2hlZFtwYXRoXSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmxpc3RbcGF0aF0gPSB0cnVlO1xyXG5cclxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKSBhcyBIVE1MTGlua0VsZW1lbnQ7XHJcbiAgICAgIG5vZGUucmVsID0gcmVsO1xyXG4gICAgICBub2RlLnR5cGUgPSAndGV4dC9jc3MnO1xyXG4gICAgICBub2RlLmhyZWYgPSBwYXRoO1xyXG4gICAgICBpZiAoaW5uZXJDb250ZW50KSB7XHJcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChub2RlKTtcclxuICAgICAgY29uc3QgaXRlbTogTGF6eVJlc3VsdCA9IHtcclxuICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgIGxvYWRlZDogdHJ1ZSxcclxuICAgICAgICBzdGF0dXM6ICdvaycsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuY2FjaGVkW3BhdGhdID0gaXRlbTtcclxuICAgICAgcmVzb2x2ZShpdGVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=