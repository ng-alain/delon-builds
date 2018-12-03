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
                    if (node.readyState === 'loaded' || node.readyState === 'complete') {
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
                node.onload = () => onSuccess({
                    path,
                    loaded: true,
                    status: 'ok',
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvbGF6eS9sYXp5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQUUvQyxnQ0FLQzs7O0lBSkMsMEJBQWE7O0lBQ2IsNEJBQWdCOztJQUNoQiw0QkFBdUI7O0lBQ3ZCLDJCQUFXOztBQUliLE1BQU0sT0FBTyxXQUFXOzs7OztJQU10QixZQUFzQyxHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUx0QyxTQUFJLEdBQStCLEVBQUUsQ0FBQztRQUN0QyxXQUFNLEdBQWtDLEVBQUUsQ0FBQztRQUMzQyxZQUFPLEdBQWtDLElBQUksZUFBZSxDQUFlLEVBQUUsQ0FBQyxDQUFDO0lBR3JDLENBQUM7Ozs7SUFFbkQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDckMsS0FBSyxFQUFFLEVBQ1AsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FDOUIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxLQUF3QjtRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxL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QUFFOzs7OzRDQU9uQixNQUFNLFNBQUMsUUFBUTs7Ozs7SUFMNUIsMkJBQThDOztJQUM5Qyw2QkFBbUQ7O0lBQ25ELDhCQUF1Rjs7SUFHM0UsMEJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF6eVJlc3VsdCB7XG4gIHBhdGg6IHN0cmluZztcbiAgbG9hZGVkOiBib29sZWFuO1xuICBzdGF0dXM6ICdvaycgfCAnZXJyb3InO1xuICBlcnJvcj86IHt9O1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExhenlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsaXN0OiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuICBwcml2YXRlIGNhY2hlZDogeyBba2V5OiBzdHJpbmddOiBMYXp5UmVzdWx0IH0gPSB7fTtcbiAgcHJpdmF0ZSBfbm90aWZ5OiBCZWhhdmlvclN1YmplY3Q8TGF6eVJlc3VsdFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TGF6eVJlc3VsdFtdPihbXSk7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55KSB7IH1cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TGF6eVJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmeS5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgc2hhcmUoKSxcbiAgICAgIGZpbHRlcihscyA9PiBscy5sZW5ndGggIT09IDApLFxuICAgICk7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3QgPSB7fTtcbiAgICB0aGlzLmNhY2hlZCA9IHt9O1xuICB9XG5cbiAgbG9hZChwYXRoczogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwYXRocykpIHsgcGF0aHMgPSBbcGF0aHNdOyB9XG5cbiAgICBjb25zdCBwcm9taXNlczogQXJyYXk8UHJvbWlzZTxMYXp5UmVzdWx0Pj4gPSBbXTtcbiAgICBwYXRocy5mb3JFYWNoKHBhdGggPT4ge1xuICAgICAgaWYgKHBhdGguZW5kc1dpdGgoJy5qcycpKSB7XG4gICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkU2NyaXB0KHBhdGgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkU3R5bGUocGF0aCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLl9ub3RpZnkubmV4dChyZXMpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZFNjcmlwdChwYXRoOiBzdHJpbmcsIGlubmVyQ29udGVudD86IHN0cmluZyk6IFByb21pc2U8TGF6eVJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICh0aGlzLmxpc3RbcGF0aF0gPT09IHRydWUpIHtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmNhY2hlZFtwYXRoXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0W3BhdGhdID0gdHJ1ZTtcbiAgICAgIGNvbnN0IG9uU3VjY2VzcyA9IChpdGVtOiBMYXp5UmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMuY2FjaGVkW3BhdGhdID0gaXRlbTtcbiAgICAgICAgcmVzb2x2ZShpdGVtKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSBhcyBhbnk7XG4gICAgICBub2RlLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgIG5vZGUuc3JjID0gcGF0aDtcbiAgICAgIG5vZGUuY2hhcnNldCA9ICd1dGYtOCc7XG4gICAgICBpZiAoaW5uZXJDb250ZW50KSB7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gaW5uZXJDb250ZW50O1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUucmVhZHlTdGF0ZSkge1xuICAgICAgICAvLyBJRVxuICAgICAgICBub2RlLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAobm9kZS5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fCBub2RlLnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgIG5vZGUub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgIG9uU3VjY2Vzcyh7XG4gICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgc3RhdHVzOiAnb2snLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5vbmxvYWQgPSAoKSA9PiBvblN1Y2Nlc3Moe1xuICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICAgIHN0YXR1czogJ29rJyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBub2RlLm9uZXJyb3IgPSAoZXJyb3I6IHt9KSA9PiBvblN1Y2Nlc3Moe1xuICAgICAgICBwYXRoLFxuICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgIGVycm9yLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZFN0eWxlKHBhdGg6IHN0cmluZywgcmVsOiBzdHJpbmcgPSAnc3R5bGVzaGVldCcsIGlubmVyQ29udGVudD86IHN0cmluZyk6IFByb21pc2U8TGF6eVJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICh0aGlzLmxpc3RbcGF0aF0gPT09IHRydWUpIHtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmNhY2hlZFtwYXRoXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0W3BhdGhdID0gdHJ1ZTtcblxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKSBhcyBIVE1MTGlua0VsZW1lbnQ7XG4gICAgICBub2RlLnJlbCA9IHJlbDtcbiAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBub2RlLmhyZWYgPSBwYXRoO1xuICAgICAgaWYgKGlubmVyQ29udGVudCkge1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVyQ29udGVudDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICBjb25zdCBpdGVtOiBMYXp5UmVzdWx0ID0ge1xuICAgICAgICBwYXRoLFxuICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgIHN0YXR1czogJ29rJyxcbiAgICAgIH07XG4gICAgICB0aGlzLmNhY2hlZFtwYXRoXSA9IGl0ZW07XG4gICAgICByZXNvbHZlKGl0ZW0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=