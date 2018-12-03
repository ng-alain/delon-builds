/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
export class LazyService {
    // tslint:disable-next-line:no-any
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
        return this._notify.asObservable().pipe(share(), filter(ls => ls.length !== 0));
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
        paths.forEach(path => {
            if (path.endsWith('.js')) {
                promises.push(this.loadScript(path));
            }
            else {
                promises.push(this.loadStyle(path));
            }
        });
        return Promise.all(promises).then(res => {
            this._notify.next(res);
            return Promise.resolve(res);
        });
    }
    /**
     * @param {?} path
     * @param {?=} innerContent
     * @return {?}
     */
    loadScript(path, innerContent) {
        return new Promise(resolve => {
            if (this.list[path] === true) {
                resolve(this.cached[path]);
                return;
            }
            this.list[path] = true;
            /** @type {?} */
            const onSuccess = (item) => {
                this.cached[path] = item;
                resolve(item);
            };
            // tslint:disable-next-line:no-any
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
                node.onreadystatechange = () => {
                    if (node.readyState === 'loaded' ||
                        node.readyState === 'complete') {
                        node.onreadystatechange = null;
                        onSuccess({
                            path,
                            loaded: true,
                            status: 'ok',
                        });
                    }
                };
            }
            else {
                node.onload = () => {
                    onSuccess({
                        path,
                        loaded: true,
                        status: 'ok',
                    });
                };
            }
            node.onerror = (error) => onSuccess({
                path,
                loaded: false,
                status: 'error',
                error,
            });
            this.doc.getElementsByTagName('head')[0].appendChild(node);
        });
    }
    /**
     * @param {?} path
     * @param {?=} rel
     * @param {?=} innerContent
     * @return {?}
     */
    loadStyle(path, rel = 'stylesheet', innerContent) {
        return new Promise(resolve => {
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
        });
    }
}
LazyService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LazyService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ LazyService.ngInjectableDef = i0.defineInjectable({ factory: function LazyService_Factory() { return new LazyService(i0.inject(i1.DOCUMENT)); }, token: LazyService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvbGF6eS9sYXp5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQUUvQyxnQ0FLQzs7O0lBSkMsMEJBQWE7O0lBQ2IsNEJBQWdCOztJQUNoQiw0QkFBdUI7O0lBQ3ZCLDJCQUFXOztBQUliLE1BQU0sT0FBTyxXQUFXOzs7OztJQVF0QixZQUFzQyxHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQVB0QyxTQUFJLEdBQStCLEVBQUUsQ0FBQztRQUN0QyxXQUFNLEdBQWtDLEVBQUUsQ0FBQztRQUMzQyxZQUFPLEdBQWtDLElBQUksZUFBZSxDQUVoRSxFQUFFLENBQUMsQ0FBQztJQUcwQyxDQUFDOzs7O0lBRW5ELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3JDLEtBQUssRUFBRSxFQUNQLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQzlCLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsS0FBd0I7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMs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QUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7NENBU25CLE1BQU0sU0FBQyxRQUFROzs7OztJQVA1QiwyQkFBOEM7O0lBQzlDLDZCQUFtRDs7SUFDbkQsOEJBRVE7O0lBR0ksMEJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF6eVJlc3VsdCB7XG4gIHBhdGg6IHN0cmluZztcbiAgbG9hZGVkOiBib29sZWFuO1xuICBzdGF0dXM6ICdvaycgfCAnZXJyb3InO1xuICBlcnJvcj86IHt9O1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExhenlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsaXN0OiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuICBwcml2YXRlIGNhY2hlZDogeyBba2V5OiBzdHJpbmddOiBMYXp5UmVzdWx0IH0gPSB7fTtcbiAgcHJpdmF0ZSBfbm90aWZ5OiBCZWhhdmlvclN1YmplY3Q8TGF6eVJlc3VsdFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8XG4gICAgTGF6eVJlc3VsdFtdXG4gICAgPihbXSk7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55KSB7IH1cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TGF6eVJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmeS5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgc2hhcmUoKSxcbiAgICAgIGZpbHRlcihscyA9PiBscy5sZW5ndGggIT09IDApLFxuICAgICk7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3QgPSB7fTtcbiAgICB0aGlzLmNhY2hlZCA9IHt9O1xuICB9XG5cbiAgbG9hZChwYXRoczogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwYXRocykpIHsgcGF0aHMgPSBbcGF0aHNdOyB9XG5cbiAgICBjb25zdCBwcm9taXNlczogQXJyYXk8UHJvbWlzZTxMYXp5UmVzdWx0Pj4gPSBbXTtcbiAgICBwYXRocy5mb3JFYWNoKHBhdGggPT4ge1xuICAgICAgaWYgKHBhdGguZW5kc1dpdGgoJy5qcycpKSB7XG4gICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkU2NyaXB0KHBhdGgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkU3R5bGUocGF0aCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLl9ub3RpZnkubmV4dChyZXMpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZFNjcmlwdChwYXRoOiBzdHJpbmcsIGlubmVyQ29udGVudD86IHN0cmluZyk6IFByb21pc2U8TGF6eVJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICh0aGlzLmxpc3RbcGF0aF0gPT09IHRydWUpIHtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmNhY2hlZFtwYXRoXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0W3BhdGhdID0gdHJ1ZTtcbiAgICAgIGNvbnN0IG9uU3VjY2VzcyA9IChpdGVtOiBMYXp5UmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMuY2FjaGVkW3BhdGhdID0gaXRlbTtcbiAgICAgICAgcmVzb2x2ZShpdGVtKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSBhcyBhbnk7XG4gICAgICBub2RlLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgIG5vZGUuc3JjID0gcGF0aDtcbiAgICAgIG5vZGUuY2hhcnNldCA9ICd1dGYtOCc7XG4gICAgICBpZiAoaW5uZXJDb250ZW50KSB7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gaW5uZXJDb250ZW50O1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUucmVhZHlTdGF0ZSkge1xuICAgICAgICAvLyBJRVxuICAgICAgICBub2RlLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBub2RlLnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8XG4gICAgICAgICAgICBub2RlLnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZSdcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIG5vZGUub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgIG9uU3VjY2Vzcyh7XG4gICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgc3RhdHVzOiAnb2snLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgb25TdWNjZXNzKHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgICAgICBzdGF0dXM6ICdvaycsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBub2RlLm9uZXJyb3IgPSAoZXJyb3I6IHt9KSA9PlxuICAgICAgICBvblN1Y2Nlc3Moe1xuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRTdHlsZShwYXRoOiBzdHJpbmcsIHJlbDogc3RyaW5nID0gJ3N0eWxlc2hlZXQnLCBpbm5lckNvbnRlbnQ/OiBzdHJpbmcpOiBQcm9taXNlPExhenlSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAodGhpcy5saXN0W3BhdGhdID09PSB0cnVlKSB7XG4gICAgICAgIHJlc29sdmUodGhpcy5jYWNoZWRbcGF0aF0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdFtwYXRoXSA9IHRydWU7XG5cbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdsaW5rJykgYXMgSFRNTExpbmtFbGVtZW50O1xuICAgICAgbm9kZS5yZWwgPSByZWw7XG4gICAgICBub2RlLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgbm9kZS5ocmVmID0gcGF0aDtcbiAgICAgIGlmIChpbm5lckNvbnRlbnQpIHtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQ7XG4gICAgICB9XG4gICAgICB0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgY29uc3QgaXRlbTogTGF6eVJlc3VsdCA9IHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICBzdGF0dXM6ICdvaycsXG4gICAgICB9O1xuICAgICAgdGhpcy5jYWNoZWRbcGF0aF0gPSBpdGVtO1xuICAgICAgcmVzb2x2ZShpdGVtKTtcbiAgICB9KTtcbiAgfVxufVxuIl19