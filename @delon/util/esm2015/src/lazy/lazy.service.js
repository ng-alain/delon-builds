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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9sYXp5L2xhenkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQUUvQyxnQ0FJQzs7O0lBSEMsMEJBQWE7O0lBQ2IsNEJBQW1DOztJQUNuQywyQkFBVzs7Ozs7QUFPYixNQUFNLE9BQU8sV0FBVzs7OztJQUt0QixZQUFzQyxHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUp0QyxTQUFJLEdBQStCLEVBQUUsQ0FBQztRQUN0QyxXQUFNLEdBQWtDLEVBQUUsQ0FBQztRQUMzQyxZQUFPLEdBQWtDLElBQUksZUFBZSxDQUFlLEVBQUUsQ0FBQyxDQUFDO0lBRXRDLENBQUM7Ozs7SUFFbEQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDckMsS0FBSyxFQUFFLEVBQ1AsTUFBTTs7OztRQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUMsQ0FDOUIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELElBQUksQ0FBQyxLQUF3QjtRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLE9B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QztJQUNMLENBQUM7OztZQWpIRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OzRDQU1uQixNQUFNLFNBQUMsUUFBUTs7Ozs7Ozs7SUFKNUIsMkJBQThDOzs7OztJQUM5Qyw2QkFBbUQ7Ozs7O0lBQ25ELDhCQUF1Rjs7Ozs7SUFFM0UsMEJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExhenlSZXN1bHQge1xuICBwYXRoOiBzdHJpbmc7XG4gIHN0YXR1czogJ29rJyB8ICdlcnJvcicgfCAnbG9hZGluZyc7XG4gIGVycm9yPzoge307XG59XG5cbi8qKlxuICog5bu26L+f5Yqg6L296LWE5rqQ77yIanMg5oiWIGNzc++8ieacjeWKoVxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExhenlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsaXN0OiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuICBwcml2YXRlIGNhY2hlZDogeyBba2V5OiBzdHJpbmddOiBMYXp5UmVzdWx0IH0gPSB7fTtcbiAgcHJpdmF0ZSBfbm90aWZ5OiBCZWhhdmlvclN1YmplY3Q8TGF6eVJlc3VsdFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TGF6eVJlc3VsdFtdPihbXSk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSkge31cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8TGF6eVJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGlmeS5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgc2hhcmUoKSxcbiAgICAgIGZpbHRlcihscyA9PiBscy5sZW5ndGggIT09IDApLFxuICAgICk7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3QgPSB7fTtcbiAgICB0aGlzLmNhY2hlZCA9IHt9O1xuICB9XG5cbiAgbG9hZChwYXRoczogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPExhenlSZXN1bHRbXT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShwYXRocykpIHtcbiAgICAgIHBhdGhzID0gW3BhdGhzXTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9taXNlczogQXJyYXk8UHJvbWlzZTxMYXp5UmVzdWx0Pj4gPSBbXTtcbiAgICBwYXRocy5mb3JFYWNoKHBhdGggPT4ge1xuICAgICAgaWYgKHBhdGguZW5kc1dpdGgoJy5qcycpKSB7XG4gICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkU2NyaXB0KHBhdGgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkU3R5bGUocGF0aCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLl9ub3RpZnkubmV4dChyZXMpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZFNjcmlwdChwYXRoOiBzdHJpbmcsIGlubmVyQ29udGVudD86IHN0cmluZyk6IFByb21pc2U8TGF6eVJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICh0aGlzLmxpc3RbcGF0aF0gPT09IHRydWUpIHtcbiAgICAgICAgcmVzb2x2ZSh7IC4uLnRoaXMuY2FjaGVkW3BhdGhdLCBzdGF0dXM6ICdsb2FkaW5nJyB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxpc3RbcGF0aF0gPSB0cnVlO1xuICAgICAgY29uc3Qgb25TdWNjZXNzID0gKGl0ZW06IExhenlSZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5jYWNoZWRbcGF0aF0gPSBpdGVtO1xuICAgICAgICByZXNvbHZlKGl0ZW0pO1xuICAgICAgICB0aGlzLl9ub3RpZnkubmV4dChbaXRlbV0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpIGFzIE56U2FmZUFueTtcbiAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgbm9kZS5zcmMgPSBwYXRoO1xuICAgICAgbm9kZS5jaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgIGlmIChpbm5lckNvbnRlbnQpIHtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBpbm5lckNvbnRlbnQ7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5yZWFkeVN0YXRlKSB7XG4gICAgICAgIC8vIElFXG4gICAgICAgIG5vZGUub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChub2RlLnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8IG5vZGUucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgICAgbm9kZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgb25TdWNjZXNzKHtcbiAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgc3RhdHVzOiAnb2snLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5vbmxvYWQgPSAoKSA9PlxuICAgICAgICAgIG9uU3VjY2Vzcyh7XG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgc3RhdHVzOiAnb2snLFxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgbm9kZS5vbmVycm9yID0gKGVycm9yOiB7fSkgPT5cbiAgICAgICAgb25TdWNjZXNzKHtcbiAgICAgICAgICBwYXRoLFxuICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgfSk7XG4gICAgICB0aGlzLmRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZFN0eWxlKHBhdGg6IHN0cmluZywgcmVsOiBzdHJpbmcgPSAnc3R5bGVzaGVldCcsIGlubmVyQ29udGVudD86IHN0cmluZyk6IFByb21pc2U8TGF6eVJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICh0aGlzLmxpc3RbcGF0aF0gPT09IHRydWUpIHtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmNhY2hlZFtwYXRoXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0W3BhdGhdID0gdHJ1ZTtcblxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKSBhcyBIVE1MTGlua0VsZW1lbnQ7XG4gICAgICBub2RlLnJlbCA9IHJlbDtcbiAgICAgIG5vZGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICBub2RlLmhyZWYgPSBwYXRoO1xuICAgICAgaWYgKGlubmVyQ29udGVudCkge1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVyQ29udGVudDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICBjb25zdCBpdGVtOiBMYXp5UmVzdWx0ID0ge1xuICAgICAgICBwYXRoLFxuICAgICAgICBzdGF0dXM6ICdvaycsXG4gICAgICB9O1xuICAgICAgdGhpcy5jYWNoZWRbcGF0aF0gPSBpdGVtO1xuICAgICAgcmVzb2x2ZShpdGVtKTtcbiAgICB9KTtcbiAgfVxufVxuIl19