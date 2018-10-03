/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, Injectable, Host, } from '@angular/core';
var STRowSource = /** @class */ (function () {
    function STRowSource() {
        this.titles = {};
        this.rows = {};
    }
    /**
     * @param {?} type
     * @param {?} path
     * @param {?} ref
     * @return {?}
     */
    STRowSource.prototype.add = /**
     * @param {?} type
     * @param {?} path
     * @param {?} ref
     * @return {?}
     */
    function (type, path, ref) {
        this[type === 'title' ? 'titles' : 'rows'][path] = ref;
    };
    /**
     * @param {?} path
     * @return {?}
     */
    STRowSource.prototype.getTitle = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this.titles[path];
    };
    /**
     * @param {?} path
     * @return {?}
     */
    STRowSource.prototype.getRow = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this.rows[path];
    };
    STRowSource.decorators = [
        { type: Injectable }
    ];
    return STRowSource;
}());
export { STRowSource };
if (false) {
    /** @type {?} */
    STRowSource.prototype.titles;
    /** @type {?} */
    STRowSource.prototype.rows;
}
var STRowDirective = /** @class */ (function () {
    function STRowDirective(ref, source) {
        this.ref = ref;
        this.source = source;
    }
    /**
     * @return {?}
     */
    STRowDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.source.add(this.type, this.id, this.ref);
    };
    STRowDirective.decorators = [
        { type: Directive, args: [{ selector: '[st-row]' },] }
    ];
    /** @nocollapse */
    STRowDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: STRowSource, decorators: [{ type: Host }] }
    ]; };
    STRowDirective.propDecorators = {
        id: [{ type: Input, args: ['st-row',] }],
        type: [{ type: Input }]
    };
    return STRowDirective;
}());
export { STRowDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS1yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBRVgsVUFBVSxFQUNWLElBQUksR0FDTCxNQUFNLGVBQWUsQ0FBQzs7O3NCQUlpQyxFQUFFO29CQUNKLEVBQUU7Ozs7Ozs7O0lBRXRELHlCQUFHOzs7Ozs7SUFBSCxVQUFJLElBQVksRUFBRSxJQUFZLEVBQUUsR0FBcUI7UUFDbkQsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ3hEOzs7OztJQUVELDhCQUFROzs7O0lBQVIsVUFBUyxJQUFZO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQjs7Ozs7SUFFRCw0QkFBTTs7OztJQUFOLFVBQU8sSUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDeEI7O2dCQWZGLFVBQVU7O3NCQVRYOztTQVVhLFdBQVc7Ozs7Ozs7O0lBeUJ0Qix3QkFDVSxLQUNRLE1BQW1CO1FBRDNCLFFBQUcsR0FBSCxHQUFHO1FBQ0ssV0FBTSxHQUFOLE1BQU0sQ0FBYTtLQUNqQzs7OztJQUVKLGlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDL0M7O2dCQWZGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7Ozs7Z0JBeEJqQyxXQUFXO2dCQWtDZSxXQUFXLHVCQUFsQyxJQUFJOzs7cUJBUk4sS0FBSyxTQUFDLFFBQVE7dUJBR2QsS0FBSzs7eUJBaENSOztTQTRCYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uSW5pdCxcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVFJvd1NvdXJjZSB7XG4gIHByaXZhdGUgdGl0bGVzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPGFueT4gfSA9IHt9O1xuICBwcml2YXRlIHJvd3M6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55PiB9ID0ge307XG5cbiAgYWRkKHR5cGU6IHN0cmluZywgcGF0aDogc3RyaW5nLCByZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB0aGlzW3R5cGUgPT09ICd0aXRsZScgPyAndGl0bGVzJyA6ICdyb3dzJ11bcGF0aF0gPSByZWY7XG4gIH1cblxuICBnZXRUaXRsZShwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZXNbcGF0aF07XG4gIH1cblxuICBnZXRSb3cocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucm93c1twYXRoXTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbc3Qtcm93XScgfSlcbmV4cG9ydCBjbGFzcyBTVFJvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnc3Qtcm93JylcbiAgaWQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICB0eXBlOiAndGl0bGUnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBzb3VyY2U6IFNUUm93U291cmNlLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zb3VyY2UuYWRkKHRoaXMudHlwZSwgdGhpcy5pZCwgdGhpcy5yZWYpO1xuICB9XG59XG4iXX0=