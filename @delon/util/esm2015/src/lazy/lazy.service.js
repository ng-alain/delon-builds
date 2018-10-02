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
        if (!Array.isArray(paths))
            paths = [paths];
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
            /** @type {?} */
            const node = /** @type {?} */ (this.doc.createElement('script'));
            node.type = 'text/javascript';
            node.src = path;
            node.charset = 'utf-8';
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            if ((/** @type {?} */ (node)).readyState) {
                // IE
                (/** @type {?} */ (node)).onreadystatechange = () => {
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
                node.onload = () => {
                    onSuccess({
                        path: path,
                        loaded: true,
                        status: 'ok',
                    });
                };
            }
            node.onerror = (error) => onSuccess({
                path: path,
                loaded: false,
                status: 'error',
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
            const node = /** @type {?} */ (this.doc.createElement('link'));
            node.rel = rel;
            node.type = 'text/css';
            node.href = path;
            if (innerContent) {
                node.innerHTML = innerContent;
            }
            this.doc.getElementsByTagName('head')[0].appendChild(node);
            /** @type {?} */
            const item = {
                path: path,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3V0aWwvIiwic291cmNlcyI6WyJzcmMvbGF6eS9sYXp5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFTL0MsTUFBTTs7OztJQU9KLFlBQXNDLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO29CQU4xQixFQUFFO3NCQUNBLEVBQUU7dUJBQ3lCLElBQUksZUFBZSxDQUVsRSxFQUFFLENBQUM7S0FFNkM7Ozs7SUFFbEQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDckMsS0FBSyxFQUFFLEVBQ1AsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FDOUIsQ0FBQztLQUNIOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7S0FDbEI7Ozs7O0lBRUQsSUFBSSxDQUFDLEtBQXdCO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUFFLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUUzQyxNQUFNLFFBQVEsR0FBMEIsRUFBRSxDQUFDO1FBQzNDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkIsSUFBSSxJ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ZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHNoYXJlLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExhenlSZXN1bHQge1xyXG4gIHBhdGg6IHN0cmluZztcclxuICBsb2FkZWQ6IGJvb2xlYW47XHJcbiAgc3RhdHVzOiAnb2snIHwgJ2Vycm9yJztcclxufVxyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIExhenlTZXJ2aWNlIHtcclxuICBwcml2YXRlIGxpc3Q6IGFueSA9IHt9O1xyXG4gIHByaXZhdGUgY2FjaGVkOiBhbnkgPSB7fTtcclxuICBwcml2YXRlIF9ub3RpZnk6IEJlaGF2aW9yU3ViamVjdDxMYXp5UmVzdWx0W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxcclxuICAgIExhenlSZXN1bHRbXVxyXG4gID4oW10pO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55KSB7fVxyXG5cclxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TGF6eVJlc3VsdFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbm90aWZ5LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXHJcbiAgICAgIHNoYXJlKCksXHJcbiAgICAgIGZpbHRlcihscyA9PiBscy5sZW5ndGggIT09IDApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0ID0ge307XHJcbiAgICB0aGlzLmNhY2hlZCA9IHt9O1xyXG4gIH1cclxuXHJcbiAgbG9hZChwYXRoczogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHBhdGhzKSkgcGF0aHMgPSBbcGF0aHNdO1xyXG5cclxuICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPExhenlSZXN1bHQ+W10gPSBbXTtcclxuICAgIHBhdGhzLmZvckVhY2gocGF0aCA9PiB7XHJcbiAgICAgIGlmIChwYXRoLmVuZHNXaXRoKCcuanMnKSkge1xyXG4gICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkU2NyaXB0KHBhdGgpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZFN0eWxlKHBhdGgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMuX25vdGlmeS5uZXh0KHJlcyk7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZFNjcmlwdChwYXRoOiBzdHJpbmcsIGlubmVyQ29udGVudD86IHN0cmluZyk6IFByb21pc2U8TGF6eVJlc3VsdD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBpZiAodGhpcy5saXN0W3BhdGhdID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmNhY2hlZFtwYXRoXSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmxpc3RbcGF0aF0gPSB0cnVlO1xyXG4gICAgICBjb25zdCBvblN1Y2Nlc3MgPSAoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYWNoZWRbcGF0aF0gPSBpdGVtO1xyXG4gICAgICAgIHJlc29sdmUoaXRlbSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0JykgYXMgSFRNTFNjcmlwdEVsZW1lbnQ7XHJcbiAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG4gICAgICBub2RlLnNyYyA9IHBhdGg7XHJcbiAgICAgIG5vZGUuY2hhcnNldCA9ICd1dGYtOCc7XHJcbiAgICAgIGlmIChpbm5lckNvbnRlbnQpIHtcclxuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVyQ29udGVudDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoKDxhbnk+bm9kZSkucmVhZHlTdGF0ZSkge1xyXG4gICAgICAgIC8vIElFXHJcbiAgICAgICAgKDxhbnk+bm9kZSkub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoPGFueT5ub2RlKS5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fFxyXG4gICAgICAgICAgICAoPGFueT5ub2RlKS5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgKDxhbnk+bm9kZSkub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcclxuICAgICAgICAgICAgb25TdWNjZXNzKHtcclxuICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdGF0dXM6ICdvaycsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm9kZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICBvblN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgICAgICBsb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ29rJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgbm9kZS5vbmVycm9yID0gKGVycm9yOiBhbnkpID0+XHJcbiAgICAgICAgb25TdWNjZXNzKHtcclxuICAgICAgICAgIHBhdGg6IHBhdGgsXHJcbiAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkU3R5bGUoXHJcbiAgICBwYXRoOiBzdHJpbmcsXHJcbiAgICByZWwgPSAnc3R5bGVzaGVldCcsXHJcbiAgICBpbm5lckNvbnRlbnQ/OiBzdHJpbmcsXHJcbiAgKTogUHJvbWlzZTxMYXp5UmVzdWx0PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmxpc3RbcGF0aF0gPT09IHRydWUpIHtcclxuICAgICAgICByZXNvbHZlKHRoaXMuY2FjaGVkW3BhdGhdKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubGlzdFtwYXRoXSA9IHRydWU7XHJcblxyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgnbGluaycpIGFzIEhUTUxMaW5rRWxlbWVudDtcclxuICAgICAgbm9kZS5yZWwgPSByZWw7XHJcbiAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcbiAgICAgIG5vZGUuaHJlZiA9IHBhdGg7XHJcbiAgICAgIGlmIChpbm5lckNvbnRlbnQpIHtcclxuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVyQ29udGVudDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgICBjb25zdCBpdGVtOiBMYXp5UmVzdWx0ID0ge1xyXG4gICAgICAgIHBhdGg6IHBhdGgsXHJcbiAgICAgICAgbG9hZGVkOiB0cnVlLFxyXG4gICAgICAgIHN0YXR1czogJ29rJyxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5jYWNoZWRbcGF0aF0gPSBpdGVtO1xyXG4gICAgICByZXNvbHZlKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==