/**
 * @fileoverview added by tsickle
 * Generated from: table-row.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Host, Injectable, Input, TemplateRef } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS1yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEY7SUFBQTtRQUVVLFdBQU0sR0FBeUMsRUFBRSxDQUFDO1FBQ2xELFNBQUksR0FBeUMsRUFBRSxDQUFDO0lBYTFELENBQUM7Ozs7Ozs7SUFYQyx5QkFBRzs7Ozs7O0lBQUgsVUFBSSxJQUFZLEVBQUUsSUFBWSxFQUFFLEdBQXNCO1FBQ3BELElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELDhCQUFROzs7O0lBQVIsVUFBUyxJQUFZO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELDRCQUFNOzs7O0lBQU4sVUFBTyxJQUFZO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOztnQkFmRixVQUFVOztJQWdCWCxrQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBZlksV0FBVzs7Ozs7O0lBQ3RCLDZCQUEwRDs7Ozs7SUFDMUQsMkJBQXdEOztBQWUxRDtJQVFFLHdCQUFvQixHQUFzQixFQUFrQixNQUFtQjtRQUEzRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFrQixXQUFNLEdBQU4sTUFBTSxDQUFhO0lBQUcsQ0FBQzs7OztJQUVuRixpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7O2dCQVpGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7Ozs7Z0JBcEJrQixXQUFXO2dCQTRCTSxXQUFXLHVCQUFsQyxJQUFJOzs7cUJBTmhELEtBQUssU0FBQyxRQUFRO3VCQUdkLEtBQUs7O0lBUVIscUJBQUM7Q0FBQSxBQWJELElBYUM7U0FaWSxjQUFjOzs7SUFDekIsNEJBQ1c7O0lBRVgsOEJBQ2M7Ozs7O0lBRUYsNkJBQThCOzs7OztJQUFFLGdDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdCwgSW5qZWN0YWJsZSwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNUUm93U291cmNlIHtcbiAgcHJpdmF0ZSB0aXRsZXM6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8dm9pZD4gfSA9IHt9O1xuICBwcml2YXRlIHJvd3M6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8dm9pZD4gfSA9IHt9O1xuXG4gIGFkZCh0eXBlOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcmVmOiBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXNbdHlwZSA9PT0gJ3RpdGxlJyA/ICd0aXRsZXMnIDogJ3Jvd3MnXVtwYXRoXSA9IHJlZjtcbiAgfVxuXG4gIGdldFRpdGxlKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnRpdGxlc1twYXRoXTtcbiAgfVxuXG4gIGdldFJvdyhwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yb3dzW3BhdGhdO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tzdC1yb3ddJyB9KVxuZXhwb3J0IGNsYXNzIFNUUm93RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdzdC1yb3cnKVxuICBpZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHR5cGU6ICd0aXRsZSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWY6IFRlbXBsYXRlUmVmPHZvaWQ+LCBASG9zdCgpIHByaXZhdGUgc291cmNlOiBTVFJvd1NvdXJjZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNvdXJjZS5hZGQodGhpcy50eXBlLCB0aGlzLmlkLCB0aGlzLnJlZik7XG4gIH1cbn1cbiJdfQ==