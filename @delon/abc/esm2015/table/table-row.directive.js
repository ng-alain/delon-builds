/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Host, Injectable, Input, TemplateRef, } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS1yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULElBQUksRUFDSixVQUFVLEVBQ1YsS0FBSyxFQUVMLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUd2QixNQUFNLE9BQU8sV0FBVztJQUR4QjtRQUVVLFdBQU0sR0FBeUMsRUFBRSxDQUFDO1FBQ2xELFNBQUksR0FBeUMsRUFBRSxDQUFDO0lBYTFELENBQUM7Ozs7Ozs7SUFYQyxHQUFHLENBQUMsSUFBWSxFQUFFLElBQVksRUFBRSxHQUFzQjtRQUNwRCxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsSUFBWTtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7O1lBZkYsVUFBVTs7OztJQUVULDZCQUEwRDs7SUFDMUQsMkJBQXdEOztBQWdCMUQsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBT3pCLFlBQ1UsR0FBc0IsRUFDZCxNQUFtQjtRQUQzQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWE7SUFDakMsQ0FBQzs7OztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQWZGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7Ozs7WUFyQmpDLFdBQVc7WUErQmUsV0FBVyx1QkFBbEMsSUFBSTs7O2lCQVJOLEtBQUssU0FBQyxRQUFRO21CQUdkLEtBQUs7Ozs7SUFITiw0QkFDVzs7SUFFWCw4QkFDYzs7SUFHWiw2QkFBOEI7O0lBQzlCLGdDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSG9zdCxcbiAgSW5qZWN0YWJsZSxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1RSb3dTb3VyY2Uge1xuICBwcml2YXRlIHRpdGxlczogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjx2b2lkPiB9ID0ge307XG4gIHByaXZhdGUgcm93czogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjx2b2lkPiB9ID0ge307XG5cbiAgYWRkKHR5cGU6IHN0cmluZywgcGF0aDogc3RyaW5nLCByZWY6IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpc1t0eXBlID09PSAndGl0bGUnID8gJ3RpdGxlcycgOiAncm93cyddW3BhdGhdID0gcmVmO1xuICB9XG5cbiAgZ2V0VGl0bGUocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGVzW3BhdGhdO1xuICB9XG5cbiAgZ2V0Um93KHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJvd3NbcGF0aF07XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3N0LXJvd10nIH0pXG5leHBvcnQgY2xhc3MgU1RSb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ3N0LXJvdycpXG4gIGlkOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgdHlwZTogJ3RpdGxlJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlZjogVGVtcGxhdGVSZWY8dm9pZD4sXG4gICAgQEhvc3QoKSBwcml2YXRlIHNvdXJjZTogU1RSb3dTb3VyY2UsXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zb3VyY2UuYWRkKHRoaXMudHlwZSwgdGhpcy5pZCwgdGhpcy5yZWYpO1xuICB9XG59XG4iXX0=