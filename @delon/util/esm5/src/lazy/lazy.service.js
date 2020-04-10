/**
 * @fileoverview added by tsickle
 * Generated from: src/lazy/lazy.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, share } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * @record
 */
export function LazyResult() { }
if (false) {
    /** @type {?} */
    LazyResult.prototype.path;
    /** @type {?} */
    LazyResult.prototype.loaded;
    /** @type {?} */
    LazyResult.prototype.status;
    /** @type {?|undefined} */
    LazyResult.prototype.error;
}
/**
 * 延迟加载资源（js 或 css）服务
 */
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
            return this._notify.asObservable().pipe(share(), filter((/**
             * @param {?} ls
             * @return {?}
             */
            function (ls) { return ls.length !== 0; })));
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
        if (!Array.isArray(paths)) {
            paths = [paths];
        }
        /** @type {?} */
        var promises = [];
        paths.forEach((/**
         * @param {?} path
         * @return {?}
         */
        function (path) {
            if (path.endsWith('.js')) {
                promises.push(_this.loadScript(path));
            }
            else {
                promises.push(_this.loadStyle(path));
            }
        }));
        return Promise.all(promises).then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this._notify.next(res);
            return Promise.resolve(res);
        }));
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
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (_this.list[path] === true) {
                resolve(_this.cached[path]);
                return;
            }
            _this.list[path] = true;
            /** @type {?} */
            var onSuccess = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                _this.cached[path] = item;
                resolve(item);
            });
            /** @type {?} */
            var node = (/** @type {?} */ (_this.doc.createElement('script')));
            node.type = 'text/javascript';
            node.src = path;
            node.charset = 'utf-8';
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            if (node.readyState) {
                // IE
                node.onreadystatechange = (/**
                 * @return {?}
                 */
                function () {
                    if (node.readyState === 'loaded' || node.readyState === 'complete') {
                        node.onreadystatechange = null;
                        onSuccess({
                            path: path,
                            loaded: true,
                            status: 'ok',
                        });
                    }
                });
            }
            else {
                node.onload = (/**
                 * @return {?}
                 */
                function () {
                    return onSuccess({
                        path: path,
                        loaded: true,
                        status: 'ok',
                    });
                });
            }
            node.onerror = (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return onSuccess({
                    path: path,
                    loaded: false,
                    status: 'error',
                    error: error,
                });
            });
            _this.doc.getElementsByTagName('head')[0].appendChild(node);
        }));
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
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (_this.list[path] === true) {
                resolve(_this.cached[path]);
                return;
            }
            _this.list[path] = true;
            /** @type {?} */
            var node = (/** @type {?} */ (_this.doc.createElement('link')));
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
        }));
    };
    LazyService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LazyService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ LazyService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LazyService_Factory() { return new LazyService(i0.ɵɵinject(i1.DOCUMENT)); }, token: LazyService, providedIn: "root" });
    return LazyService;
}());
export { LazyService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LazyService.prototype.list;
    /**
     * @type {?}
     * @private
     */
    LazyService.prototype.cached;
    /**
     * @type {?}
     * @private
     */
    LazyService.prototype._notify;
    /**
     * @type {?}
     * @private
     */
    LazyService.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvbGF6eS9sYXp5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFFL0MsZ0NBS0M7OztJQUpDLDBCQUFhOztJQUNiLDRCQUFnQjs7SUFDaEIsNEJBQXVCOztJQUN2QiwyQkFBVzs7Ozs7QUFNYjtJQU1FLHFCQUFzQyxHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUp0QyxTQUFJLEdBQStCLEVBQUUsQ0FBQztRQUN0QyxXQUFNLEdBQWtDLEVBQUUsQ0FBQztRQUMzQyxZQUFPLEdBQWtDLElBQUksZUFBZSxDQUFlLEVBQUUsQ0FBQyxDQUFDO0lBRXRDLENBQUM7SUFFbEQsc0JBQUksK0JBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3JDLEtBQUssRUFBRSxFQUNQLE1BQU07Ozs7WUFBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFmLENBQWUsRUFBQyxDQUM5QixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7Ozs7SUFFRCwyQkFBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsMEJBQUk7Ozs7SUFBSixVQUFLLEtBQXdCO1FBQTdCLGlC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O1lBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBcEhGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0RBTW5CLE1BQU0sU0FBQyxRQUFROzs7c0JBdEI5QjtDQXFJQyxBQXJIRCxJQXFIQztTQXBIWSxXQUFXOzs7Ozs7SUFDdEIsMkJBQThDOzs7OztJQUM5Qyw2QkFBbUQ7Ozs7O0lBQ25ELDhCQUF1Rjs7Ozs7SUFFM0UsMEJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExhenlSZXN1bHQge1xuICBwYXRoOiBzdHJpbmc7XG4gIGxvYWRlZDogYm9vbGVhbjtcbiAgc3RhdHVzOiAnb2snIHwgJ2Vycm9yJztcbiAgZXJyb3I/OiB7fTtcbn1cblxuLyoqXG4gKiDlu7bov5/liqDovb3otYTmupDvvIhqcyDmiJYgY3Nz77yJ5pyN5YqhXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTGF6eVNlcnZpY2Uge1xuICBwcml2YXRlIGxpc3Q6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG4gIHByaXZhdGUgY2FjaGVkOiB7IFtrZXk6IHN0cmluZ106IExhenlSZXN1bHQgfSA9IHt9O1xuICBwcml2YXRlIF9ub3RpZnk6IEJlaGF2aW9yU3ViamVjdDxMYXp5UmVzdWx0W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMYXp5UmVzdWx0W10+KFtdKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55KSB7fVxuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxMYXp5UmVzdWx0W10+IHtcbiAgICByZXR1cm4gdGhpcy5fbm90aWZ5LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICBzaGFyZSgpLFxuICAgICAgZmlsdGVyKGxzID0+IGxzLmxlbmd0aCAhPT0gMCksXG4gICAgKTtcbiAgfVxuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMubGlzdCA9IHt9O1xuICAgIHRoaXMuY2FjaGVkID0ge307XG4gIH1cblxuICBsb2FkKHBhdGhzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8TGF6eVJlc3VsdFtdPiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHBhdGhzKSkge1xuICAgICAgcGF0aHMgPSBbcGF0aHNdO1xuICAgIH1cblxuICAgIGNvbnN0IHByb21pc2VzOiBBcnJheTxQcm9taXNlPExhenlSZXN1bHQ+PiA9IFtdO1xuICAgIHBhdGhzLmZvckVhY2gocGF0aCA9PiB7XG4gICAgICBpZiAocGF0aC5lbmRzV2l0aCgnLmpzJykpIHtcbiAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRTY3JpcHQocGF0aCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRTdHlsZShwYXRoKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuX25vdGlmeS5uZXh0KHJlcyk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkU2NyaXB0KHBhdGg6IHN0cmluZywgaW5uZXJDb250ZW50Pzogc3RyaW5nKTogUHJvbWlzZTxMYXp5UmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKHRoaXMubGlzdFtwYXRoXSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXNvbHZlKHRoaXMuY2FjaGVkW3BhdGhdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RbcGF0aF0gPSB0cnVlO1xuICAgICAgY29uc3Qgb25TdWNjZXNzID0gKGl0ZW06IExhenlSZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5jYWNoZWRbcGF0aF0gPSBpdGVtO1xuICAgICAgICByZXNvbHZlKGl0ZW0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpIGFzIE56U2FmZUFueTtcbiAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgbm9kZS5zcmMgPSBwYXRoO1xuICAgICAgbm9kZS5jaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgIGlmIChpbm5lckNvbnRlbnQpIHtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQ7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5yZWFkeVN0YXRlKSB7XG4gICAgICAgIC8vIElFXG4gICAgICAgIG5vZGUub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChub2RlLnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8IG5vZGUucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgbm9kZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgb25TdWNjZXNzKHtcbiAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICAgICAgICBzdGF0dXM6ICdvaycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLm9ubG9hZCA9ICgpID0+XG4gICAgICAgICAgb25TdWNjZXNzKHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgICAgICBzdGF0dXM6ICdvaycsXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBub2RlLm9uZXJyb3IgPSAoZXJyb3I6IHt9KSA9PlxuICAgICAgICBvblN1Y2Nlc3Moe1xuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRTdHlsZShwYXRoOiBzdHJpbmcsIHJlbDogc3RyaW5nID0gJ3N0eWxlc2hlZXQnLCBpbm5lckNvbnRlbnQ/OiBzdHJpbmcpOiBQcm9taXNlPExhenlSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAodGhpcy5saXN0W3BhdGhdID09PSB0cnVlKSB7XG4gICAgICAgIHJlc29sdmUodGhpcy5jYWNoZWRbcGF0aF0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdFtwYXRoXSA9IHRydWU7XG5cbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdsaW5rJykgYXMgSFRNTExpbmtFbGVtZW50O1xuICAgICAgbm9kZS5yZWwgPSByZWw7XG4gICAgICBub2RlLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgbm9kZS5ocmVmID0gcGF0aDtcbiAgICAgIGlmIChpbm5lckNvbnRlbnQpIHtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQ7XG4gICAgICB9XG4gICAgICB0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgY29uc3QgaXRlbTogTGF6eVJlc3VsdCA9IHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICBzdGF0dXM6ICdvaycsXG4gICAgICB9O1xuICAgICAgdGhpcy5jYWNoZWRbcGF0aF0gPSBpdGVtO1xuICAgICAgcmVzb2x2ZShpdGVtKTtcbiAgICB9KTtcbiAgfVxufVxuIl19