/**
 * @fileoverview added by tsickle
 * Generated from: src/lazy/lazy.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    LazyResult.prototype.status;
    /** @type {?|undefined} */
    LazyResult.prototype.error;
}
/**
 * 延迟加载资源（js 或 css）服务
 */
export class LazyService {
    /**
     * @param {?} doc
     */
    constructor(doc) {
        this.doc = doc;
        this.list = {};
        this.cached = {};
        this._notify = new BehaviorSubject([]);
    }
    /**
     * @return {?}
     */
    get change() {
        return this._notify.asObservable().pipe(share(), filter((/**
         * @param {?} ls
         * @return {?}
         */
        ls => ls.length !== 0)));
    }
    /**
     * @return {?}
     */
    clear() {
        this.list = {};
        this.cached = {};
    }
    /**
     * @param {?} paths
     * @return {?}
     */
    load(paths) {
        if (!Array.isArray(paths)) {
            paths = [paths];
        }
        /** @type {?} */
        const promises = [];
        paths.forEach((/**
         * @param {?} path
         * @return {?}
         */
        path => {
            if (path.endsWith('.js')) {
                promises.push(this.loadScript(path));
            }
            else {
                promises.push(this.loadStyle(path));
            }
        }));
        return Promise.all(promises).then((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this._notify.next(res);
            return Promise.resolve(res);
        }));
    }
    /**
     * @param {?} path
     * @param {?=} innerContent
     * @return {?}
     */
    loadScript(path, innerContent) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            if (this.list[path] === true) {
                resolve(Object.assign(Object.assign({}, this.cached[path]), { status: 'loading' }));
                return;
            }
            this.list[path] = true;
            /** @type {?} */
            const onSuccess = (/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                this.cached[path] = item;
                resolve(item);
                this._notify.next([item]);
            });
            /** @type {?} */
            const node = (/** @type {?} */ (this.doc.createElement('script')));
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
                () => {
                    if (node.readyState === 'loaded' || node.readyState === 'complete') {
                        node.onreadystatechange = null;
                        onSuccess({
                            path,
                            status: 'ok',
                        });
                    }
                });
            }
            else {
                node.onload = (/**
                 * @return {?}
                 */
                () => onSuccess({
                    path,
                    status: 'ok',
                }));
            }
            node.onerror = (/**
             * @param {?} error
             * @return {?}
             */
            (error) => onSuccess({
                path,
                status: 'error',
                error,
            }));
            this.doc.getElementsByTagName('head')[0].appendChild(node);
        }));
    }
    /**
     * @param {?} path
     * @param {?=} rel
     * @param {?=} innerContent
     * @return {?}
     */
    loadStyle(path, rel = 'stylesheet', innerContent) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            if (this.list[path] === true) {
                resolve(this.cached[path]);
                return;
            }
            this.list[path] = true;
            /** @type {?} */
            const node = (/** @type {?} */ (this.doc.createElement('link')));
            node.rel = rel;
            node.type = 'text/css';
            node.href = path;
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            this.doc.getElementsByTagName('head')[0].appendChild(node);
            /** @type {?} */
            const item = {
                path,
                status: 'ok',
            };
            this.cached[path] = item;
            resolve(item);
        }));
    }
}
LazyService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LazyService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ LazyService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LazyService_Factory() { return new LazyService(i0.ɵɵinject(i1.DOCUMENT)); }, token: LazyService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9zcmMvbGF6eS9sYXp5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFFL0MsZ0NBSUM7OztJQUhDLDBCQUFhOztJQUNiLDRCQUFtQzs7SUFDbkMsMkJBQVc7Ozs7O0FBT2IsTUFBTSxPQUFPLFdBQVc7Ozs7SUFLdEIsWUFBc0MsR0FBUTtRQUFSLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFKdEMsU0FBSSxHQUErQixFQUFFLENBQUM7UUFDdEMsV0FBTSxHQUFrQyxFQUFFLENBQUM7UUFDM0MsWUFBTyxHQUFrQyxJQUFJLGVBQWUsQ0FBZSxFQUFFLENBQUMsQ0FBQztJQUV0QyxDQUFDOzs7O0lBRWxELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3JDLEtBQUssRUFBRSxFQUNQLE1BQU07Ozs7UUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDLENBQzlCLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsS0FBd0I7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFP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SUFDTCxDQUFDOzs7WUFqSEYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs0Q0FNbkIsTUFBTSxTQUFDLFFBQVE7Ozs7Ozs7O0lBSjVCLDJCQUE4Qzs7Ozs7SUFDOUMsNkJBQW1EOzs7OztJQUNuRCw4QkFBdUY7Ozs7O0lBRTNFLDBCQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBMYXp5UmVzdWx0IHtcbiAgcGF0aDogc3RyaW5nO1xuICBzdGF0dXM6ICdvaycgfCAnZXJyb3InIHwgJ2xvYWRpbmcnO1xuICBlcnJvcj86IHt9O1xufVxuXG4vKipcbiAqIOW7tui/n+WKoOi9vei1hOa6kO+8iGpzIOaIliBjc3PvvInmnI3liqFcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMYXp5U2VydmljZSB7XG4gIHByaXZhdGUgbGlzdDogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgcHJpdmF0ZSBjYWNoZWQ6IHsgW2tleTogc3RyaW5nXTogTGF6eVJlc3VsdCB9ID0ge307XG4gIHByaXZhdGUgX25vdGlmeTogQmVoYXZpb3JTdWJqZWN0PExhenlSZXN1bHRbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PExhenlSZXN1bHRbXT4oW10pO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnkpIHt9XG5cbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPExhenlSZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZnkuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIHNoYXJlKCksXG4gICAgICBmaWx0ZXIobHMgPT4gbHMubGVuZ3RoICE9PSAwKSxcbiAgICApO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0ID0ge307XG4gICAgdGhpcy5jYWNoZWQgPSB7fTtcbiAgfVxuXG4gIGxvYWQocGF0aHM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxMYXp5UmVzdWx0W10+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocGF0aHMpKSB7XG4gICAgICBwYXRocyA9IFtwYXRoc107XG4gICAgfVxuXG4gICAgY29uc3QgcHJvbWlzZXM6IEFycmF5PFByb21pc2U8TGF6eVJlc3VsdD4+ID0gW107XG4gICAgcGF0aHMuZm9yRWFjaChwYXRoID0+IHtcbiAgICAgIGlmIChwYXRoLmVuZHNXaXRoKCcuanMnKSkge1xuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZFNjcmlwdChwYXRoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZFN0eWxlKHBhdGgpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihyZXMgPT4ge1xuICAgICAgdGhpcy5fbm90aWZ5Lm5leHQocmVzKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRTY3JpcHQocGF0aDogc3RyaW5nLCBpbm5lckNvbnRlbnQ/OiBzdHJpbmcpOiBQcm9taXNlPExhenlSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAodGhpcy5saXN0W3BhdGhdID09PSB0cnVlKSB7XG4gICAgICAgIHJlc29sdmUoeyAuLi50aGlzLmNhY2hlZFtwYXRoXSwgc3RhdHVzOiAnbG9hZGluZycgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0W3BhdGhdID0gdHJ1ZTtcbiAgICAgIGNvbnN0IG9uU3VjY2VzcyA9IChpdGVtOiBMYXp5UmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMuY2FjaGVkW3BhdGhdID0gaXRlbTtcbiAgICAgICAgcmVzb2x2ZShpdGVtKTtcbiAgICAgICAgdGhpcy5fbm90aWZ5Lm5leHQoW2l0ZW1dKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSBhcyBOelNhZmVBbnk7XG4gICAgICBub2RlLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgIG5vZGUuc3JjID0gcGF0aDtcbiAgICAgIG5vZGUuY2hhcnNldCA9ICd1dGYtOCc7XG4gICAgICBpZiAoaW5uZXJDb250ZW50KSB7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gaW5uZXJDb250ZW50O1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUucmVhZHlTdGF0ZSkge1xuICAgICAgICAvLyBJRVxuICAgICAgICBub2RlLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAobm9kZS5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fCBub2RlLnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgIG5vZGUub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgIG9uU3VjY2Vzcyh7XG4gICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgIHN0YXR1czogJ29rJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUub25sb2FkID0gKCkgPT5cbiAgICAgICAgICBvblN1Y2Nlc3Moe1xuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHN0YXR1czogJ29rJyxcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIG5vZGUub25lcnJvciA9IChlcnJvcjoge30pID0+XG4gICAgICAgIG9uU3VjY2Vzcyh7XG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRTdHlsZShwYXRoOiBzdHJpbmcsIHJlbDogc3RyaW5nID0gJ3N0eWxlc2hlZXQnLCBpbm5lckNvbnRlbnQ/OiBzdHJpbmcpOiBQcm9taXNlPExhenlSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAodGhpcy5saXN0W3BhdGhdID09PSB0cnVlKSB7XG4gICAgICAgIHJlc29sdmUodGhpcy5jYWNoZWRbcGF0aF0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdFtwYXRoXSA9IHRydWU7XG5cbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdsaW5rJykgYXMgSFRNTExpbmtFbGVtZW50O1xuICAgICAgbm9kZS5yZWwgPSByZWw7XG4gICAgICBub2RlLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgbm9kZS5ocmVmID0gcGF0aDtcbiAgICAgIGlmIChpbm5lckNvbnRlbnQpIHtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQ7XG4gICAgICB9XG4gICAgICB0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgY29uc3QgaXRlbTogTGF6eVJlc3VsdCA9IHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgc3RhdHVzOiAnb2snLFxuICAgICAgfTtcbiAgICAgIHRoaXMuY2FjaGVkW3BhdGhdID0gaXRlbTtcbiAgICAgIHJlc29sdmUoaXRlbSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==