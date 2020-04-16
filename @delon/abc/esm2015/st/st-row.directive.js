/**
 * @fileoverview added by tsickle
 * Generated from: st-row.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvc3QvIiwic291cmNlcyI6WyJzdC1yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHeEYsTUFBTSxPQUFPLFdBQVc7SUFEeEI7UUFFVSxXQUFNLEdBQXlDLEVBQUUsQ0FBQztRQUNsRCxTQUFJLEdBQXlDLEVBQUUsQ0FBQztJQWExRCxDQUFDOzs7Ozs7O0lBWEMsR0FBRyxDQUFDLElBQVksRUFBRSxJQUFZLEVBQUUsR0FBc0I7UUFDcEQsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OztZQWZGLFVBQVU7Ozs7Ozs7SUFFVCw2QkFBMEQ7Ozs7O0lBQzFELDJCQUF3RDs7QUFnQjFELE1BQU0sT0FBTyxjQUFjOzs7OztJQU96QixZQUFvQixHQUFzQixFQUFrQixNQUFtQjtRQUEzRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFrQixXQUFNLEdBQU4sTUFBTSxDQUFhO0lBQUcsQ0FBQzs7OztJQUVuRixRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUFaRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFOzs7O1lBcEJrQixXQUFXO1lBNEJNLFdBQVcsdUJBQWxDLElBQUk7OztpQkFOaEQsS0FBSyxTQUFDLFFBQVE7bUJBR2QsS0FBSzs7OztJQUhOLDRCQUNXOztJQUVYLDhCQUNjOzs7OztJQUVGLDZCQUE4Qjs7Ozs7SUFBRSxnQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3QsIEluamVjdGFibGUsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVFJvd1NvdXJjZSB7XG4gIHByaXZhdGUgdGl0bGVzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPHZvaWQ+IH0gPSB7fTtcbiAgcHJpdmF0ZSByb3dzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPHZvaWQ+IH0gPSB7fTtcblxuICBhZGQodHlwZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHJlZjogVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzW3R5cGUgPT09ICd0aXRsZScgPyAndGl0bGVzJyA6ICdyb3dzJ11bcGF0aF0gPSByZWY7XG4gIH1cblxuICBnZXRUaXRsZShwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZXNbcGF0aF07XG4gIH1cblxuICBnZXRSb3cocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucm93c1twYXRoXTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbc3Qtcm93XScgfSlcbmV4cG9ydCBjbGFzcyBTVFJvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnc3Qtcm93JylcbiAgaWQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICB0eXBlOiAndGl0bGUnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOiBUZW1wbGF0ZVJlZjx2b2lkPiwgQEhvc3QoKSBwcml2YXRlIHNvdXJjZTogU1RSb3dTb3VyY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zb3VyY2UuYWRkKHRoaXMudHlwZSwgdGhpcy5pZCwgdGhpcy5yZWYpO1xuICB9XG59XG4iXX0=