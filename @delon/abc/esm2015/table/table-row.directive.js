/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, Injectable, Host, } from '@angular/core';
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
    /** @type {?} */
    STRowSource.prototype.titles;
    /** @type {?} */
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
    /** @type {?} */
    STRowDirective.prototype.ref;
    /** @type {?} */
    STRowDirective.prototype.source;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS1yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBRVgsVUFBVSxFQUNWLElBQUksR0FDTCxNQUFNLGVBQWUsQ0FBQztBQUd2QixNQUFNLE9BQU8sV0FBVztJQUR4QjtRQUVVLFdBQU0sR0FBd0MsRUFBRSxDQUFDO1FBQ2pELFNBQUksR0FBd0MsRUFBRSxDQUFDO0lBYXpELENBQUM7Ozs7Ozs7SUFYQyxHQUFHLENBQUMsSUFBWSxFQUFFLElBQVksRUFBRSxHQUFxQjtRQUNuRCxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsSUFBWTtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7O1lBZkYsVUFBVTs7OztJQUVULDZCQUF5RDs7SUFDekQsMkJBQXVEOztBQWdCekQsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBT3pCLFlBQ1UsR0FBcUIsRUFDYixNQUFtQjtRQUQzQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNiLFdBQU0sR0FBTixNQUFNLENBQWE7SUFDbEMsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQWZGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7Ozs7WUF4QmpDLFdBQVc7WUFrQ2UsV0FBVyx1QkFBbEMsSUFBSTs7O2lCQVJOLEtBQUssU0FBQyxRQUFRO21CQUdkLEtBQUs7Ozs7SUFITiw0QkFDVzs7SUFFWCw4QkFDYzs7SUFHWiw2QkFBNkI7O0lBQzdCLGdDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBPbkluaXQsXG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1RSb3dTb3VyY2Uge1xuICBwcml2YXRlIHRpdGxlczogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+IH0gPSB7fTtcbiAgcHJpdmF0ZSByb3dzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPGFueT4gfSA9IHt9O1xuXG4gIGFkZCh0eXBlOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpc1t0eXBlID09PSAndGl0bGUnID8gJ3RpdGxlcycgOiAncm93cyddW3BhdGhdID0gcmVmO1xuICB9XG5cbiAgZ2V0VGl0bGUocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGVzW3BhdGhdO1xuICB9XG5cbiAgZ2V0Um93KHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJvd3NbcGF0aF07XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3N0LXJvd10nIH0pXG5leHBvcnQgY2xhc3MgU1RSb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ3N0LXJvdycpXG4gIGlkOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgdHlwZTogJ3RpdGxlJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBASG9zdCgpIHByaXZhdGUgc291cmNlOiBTVFJvd1NvdXJjZSxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc291cmNlLmFkZCh0aGlzLnR5cGUsIHRoaXMuaWQsIHRoaXMucmVmKTtcbiAgfVxufVxuIl19