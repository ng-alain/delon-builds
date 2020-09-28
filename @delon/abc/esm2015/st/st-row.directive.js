/**
 * @fileoverview added by tsickle
 * Generated from: st-row.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Host, Injectable, Input, TemplateRef } from '@angular/core';
export class STRowSource {
    constructor() {
        this.titles = {};
        this.rows = {};
    }
    /**
     * @param {?} type
     * @param {?} path
     * @param {?} ref
     * @return {?}
     */
    add(type, path, ref) {
        this[type === 'title' ? 'titles' : 'rows'][path] = ref;
    }
    /**
     * @param {?} path
     * @return {?}
     */
    getTitle(path) {
        return this.titles[path];
    }
    /**
     * @param {?} path
     * @return {?}
     */
    getRow(path) {
        return this.rows[path];
    }
}
STRowSource.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    STRowSource.prototype.titles;
    /**
     * @type {?}
     * @private
     */
    STRowSource.prototype.rows;
}
export class STRowDirective {
    /**
     * @param {?} ref
     * @param {?} source
     */
    constructor(ref, source) {
        this.ref = ref;
        this.source = source;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.source.add(this.type, this.id, this.ref);
    }
}
STRowDirective.decorators = [
    { type: Directive, args: [{ selector: '[st-row]' },] }
];
/** @nocollapse */
STRowDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: STRowSource, decorators: [{ type: Host }] }
];
STRowDirective.propDecorators = {
    id: [{ type: Input, args: ['st-row',] }],
    type: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    STRowDirective.prototype.id;
    /** @type {?} */
    STRowDirective.prototype.type;
    /**
     * @type {?}
     * @private
     */
    STRowDirective.prototype.ref;
    /**
     * @type {?}
     * @private
     */
    STRowDirective.prototype.source;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0LXJvdy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4RixNQUFNLE9BQU8sV0FBVztJQUR4QjtRQUVVLFdBQU0sR0FBeUMsRUFBRSxDQUFDO1FBQ2xELFNBQUksR0FBeUMsRUFBRSxDQUFDO0lBYTFELENBQUM7Ozs7Ozs7SUFYQyxHQUFHLENBQUMsSUFBWSxFQUFFLElBQVksRUFBRSxHQUFzQjtRQUNwRCxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsSUFBWTtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7O1lBZkYsVUFBVTs7Ozs7OztJQUVULDZCQUEwRDs7Ozs7SUFDMUQsMkJBQXdEOztBQWdCMUQsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBS3pCLFlBQW9CLEdBQXNCLEVBQWtCLE1BQW1CO1FBQTNELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQWtCLFdBQU0sR0FBTixNQUFNLENBQWE7SUFBRyxDQUFDOzs7O0lBRW5GLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQVZGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7Ozs7WUFwQmtCLFdBQVc7WUEwQk0sV0FBVyx1QkFBbEMsSUFBSTs7O2lCQUpoRCxLQUFLLFNBQUMsUUFBUTttQkFFZCxLQUFLOzs7O0lBRk4sNEJBQTRCOztJQUU1Qiw4QkFBdUI7Ozs7O0lBRVgsNkJBQThCOzs7OztJQUFFLGdDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdCwgSW5qZWN0YWJsZSwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNUUm93U291cmNlIHtcbiAgcHJpdmF0ZSB0aXRsZXM6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8dm9pZD4gfSA9IHt9O1xuICBwcml2YXRlIHJvd3M6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8dm9pZD4gfSA9IHt9O1xuXG4gIGFkZCh0eXBlOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcmVmOiBUZW1wbGF0ZVJlZjx2b2lkPik6IHZvaWQge1xuICAgIHRoaXNbdHlwZSA9PT0gJ3RpdGxlJyA/ICd0aXRsZXMnIDogJ3Jvd3MnXVtwYXRoXSA9IHJlZjtcbiAgfVxuXG4gIGdldFRpdGxlKHBhdGg6IHN0cmluZyk6IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy50aXRsZXNbcGF0aF07XG4gIH1cblxuICBnZXRSb3cocGF0aDogc3RyaW5nKTogVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnJvd3NbcGF0aF07XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3N0LXJvd10nIH0pXG5leHBvcnQgY2xhc3MgU1RSb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ3N0LXJvdycpIGlkOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgdHlwZTogJ3RpdGxlJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogVGVtcGxhdGVSZWY8dm9pZD4sIEBIb3N0KCkgcHJpdmF0ZSBzb3VyY2U6IFNUUm93U291cmNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc291cmNlLmFkZCh0aGlzLnR5cGUsIHRoaXMuaWQsIHRoaXMucmVmKTtcbiAgfVxufVxuIl19