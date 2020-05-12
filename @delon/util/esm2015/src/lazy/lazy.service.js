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
                resolve(this.cached[path]);
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
                () => onSuccess({
                    path,
                    loaded: true,
                    status: 'ok',
                }));
            }
            node.onerror = (/**
             * @param {?} error
             * @return {?}
             */
            (error) => onSuccess({
                path,
                loaded: false,
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
                loaded: true,
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
/** @nocollapse */ LazyService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LazyService_Factory() { return new LazyService(i0.ɵɵinject(i1.DOCUMENT)); }, token: LazyService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvbGF6eS9sYXp5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFFL0MsZ0NBS0M7OztJQUpDLDBCQUFhOztJQUNiLDRCQUFnQjs7SUFDaEIsNEJBQXVCOztJQUN2QiwyQkFBVzs7Ozs7QUFPYixNQUFNLE9BQU8sV0FBVzs7OztJQUt0QixZQUFzQyxHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUp0QyxTQUFJLEdBQStCLEVBQUUsQ0FBQztRQUN0QyxXQUFNLEdBQWtDLEVBQUUsQ0FBQztRQUMzQyxZQUFPLEdBQWtDLElBQUksZUFBZSxDQUFlLEVBQUUsQ0FBQyxDQUFDO0lBRXJDLENBQUM7Ozs7SUFFbkQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDckMsS0FBSyxFQUFFLEVBQ1AsTUFBTTs7OztRQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUMsQ0FDOUIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxLQUF3QjtRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8s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O0lBQ0wsQ0FBQzs7O1lBcEhGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7NENBTW5CLE1BQU0sU0FBQyxRQUFROzs7Ozs7OztJQUo1QiwyQkFBOEM7Ozs7O0lBQzlDLDZCQUFtRDs7Ozs7SUFDbkQsOEJBQXVGOzs7OztJQUUzRSwwQkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBMYXp5UmVzdWx0IHtcbiAgcGF0aDogc3RyaW5nO1xuICBsb2FkZWQ6IGJvb2xlYW47XG4gIHN0YXR1czogJ29rJyB8ICdlcnJvcic7XG4gIGVycm9yPzoge307XG59XG5cbi8qKlxuICog5bu26L+f5Yqg6L296LWE5rqQ77yIanMg5oiWIGNzc++8ieacjeWKoVxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExhenlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsaXN0OiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuICBwcml2YXRlIGNhY2hlZDogeyBba2V5OiBzdHJpbmddOiBMYXp5UmVzdWx0IH0gPSB7fTtcbiAgcHJpdmF0ZSBfbm90aWZ5OiBCZWhhdmlvclN1YmplY3Q8TGF6eVJlc3VsdFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TGF6eVJlc3VsdFtdPihbXSk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSkgeyB9XG5cbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPExhenlSZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLl9ub3RpZnkuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIHNoYXJlKCksXG4gICAgICBmaWx0ZXIobHMgPT4gbHMubGVuZ3RoICE9PSAwKSxcbiAgICApO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0ID0ge307XG4gICAgdGhpcy5jYWNoZWQgPSB7fTtcbiAgfVxuXG4gIGxvYWQocGF0aHM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxMYXp5UmVzdWx0W10+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocGF0aHMpKSB7XG4gICAgICBwYXRocyA9IFtwYXRoc107XG4gICAgfVxuXG4gICAgY29uc3QgcHJvbWlzZXM6IEFycmF5PFByb21pc2U8TGF6eVJlc3VsdD4+ID0gW107XG4gICAgcGF0aHMuZm9yRWFjaChwYXRoID0+IHtcbiAgICAgIGlmIChwYXRoLmVuZHNXaXRoKCcuanMnKSkge1xuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZFNjcmlwdChwYXRoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZFN0eWxlKHBhdGgpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihyZXMgPT4ge1xuICAgICAgdGhpcy5fbm90aWZ5Lm5leHQocmVzKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRTY3JpcHQocGF0aDogc3RyaW5nLCBpbm5lckNvbnRlbnQ/OiBzdHJpbmcpOiBQcm9taXNlPExhenlSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAodGhpcy5saXN0W3BhdGhdID09PSB0cnVlKSB7XG4gICAgICAgIHJlc29sdmUodGhpcy5jYWNoZWRbcGF0aF0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdFtwYXRoXSA9IHRydWU7XG4gICAgICBjb25zdCBvblN1Y2Nlc3MgPSAoaXRlbTogTGF6eVJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLmNhY2hlZFtwYXRoXSA9IGl0ZW07XG4gICAgICAgIHJlc29sdmUoaXRlbSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0JykgYXMgYW55O1xuICAgICAgbm9kZS50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICBub2RlLnNyYyA9IHBhdGg7XG4gICAgICBub2RlLmNoYXJzZXQgPSAndXRmLTgnO1xuICAgICAgaWYgKGlubmVyQ29udGVudCkge1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVyQ29udGVudDtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgLy8gSUVcbiAgICAgICAgbm9kZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKG5vZGUucmVhZHlTdGF0ZSA9PT0gJ2xvYWRlZCcgfHwgbm9kZS5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICBub2RlLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICBvblN1Y2Nlc3Moe1xuICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgICAgICAgIHN0YXR1czogJ29rJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUub25sb2FkID0gKCkgPT5cbiAgICAgICAgICBvblN1Y2Nlc3Moe1xuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgIHN0YXR1czogJ29rJyxcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIG5vZGUub25lcnJvciA9IChlcnJvcjoge30pID0+XG4gICAgICAgIG9uU3VjY2Vzcyh7XG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgfSk7XG4gICAgICB0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZFN0eWxlKHBhdGg6IHN0cmluZywgcmVsOiBzdHJpbmcgPSAnc3R5bGVzaGVldCcsIGlubmVyQ29udGVudD86IHN0cmluZyk6IFByb21pc2U8TGF6eVJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICh0aGlzLmxpc3RbcGF0aF0gPT09IHRydWUpIHtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmNhY2hlZFtwYXRoXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0W3BhdGhdID0gdHJ1ZTtcblxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKSBhcyBIVE1MTGlua0VsZW1lbnQ7XG4gICAgICBub2RlLnJlbCA9IHJlbDtcbiAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBub2RlLmhyZWYgPSBwYXRoO1xuICAgICAgaWYgKGlubmVyQ29udGVudCkge1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVyQ29udGVudDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICBjb25zdCBpdGVtOiBMYXp5UmVzdWx0ID0ge1xuICAgICAgICBwYXRoLFxuICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgIHN0YXR1czogJ29rJyxcbiAgICAgIH07XG4gICAgICB0aGlzLmNhY2hlZFtwYXRoXSA9IGl0ZW07XG4gICAgICByZXNvbHZlKGl0ZW0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=