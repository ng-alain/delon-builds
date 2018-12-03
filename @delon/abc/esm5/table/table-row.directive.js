/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Host, Injectable, Input, TemplateRef, } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS1yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULElBQUksRUFDSixVQUFVLEVBQ1YsS0FBSyxFQUVMLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQUFBO1FBRVUsV0FBTSxHQUF5QyxFQUFFLENBQUM7UUFDbEQsU0FBSSxHQUF5QyxFQUFFLENBQUM7SUFhMUQsQ0FBQzs7Ozs7OztJQVhDLHlCQUFHOzs7Ozs7SUFBSCxVQUFJLElBQVksRUFBRSxJQUFZLEVBQUUsR0FBc0I7UUFDcEQsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsOEJBQVE7Ozs7SUFBUixVQUFTLElBQVk7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsNEJBQU07Ozs7SUFBTixVQUFPLElBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O2dCQWZGLFVBQVU7O0lBZ0JYLGtCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FmWSxXQUFXOzs7SUFDdEIsNkJBQTBEOztJQUMxRCwyQkFBd0Q7O0FBZTFEO0lBUUUsd0JBQ1UsR0FBc0IsRUFDZCxNQUFtQjtRQUQzQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWE7SUFDakMsQ0FBQzs7OztJQUVMLGlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBZkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTs7OztnQkFyQmpDLFdBQVc7Z0JBK0JlLFdBQVcsdUJBQWxDLElBQUk7OztxQkFSTixLQUFLLFNBQUMsUUFBUTt1QkFHZCxLQUFLOztJQVdSLHFCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FmWSxjQUFjOzs7SUFDekIsNEJBQ1c7O0lBRVgsOEJBQ2M7O0lBR1osNkJBQThCOztJQUM5QixnQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEhvc3QsXG4gIEluamVjdGFibGUsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNUUm93U291cmNlIHtcbiAgcHJpdmF0ZSB0aXRsZXM6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8dm9pZD4gfSA9IHt9O1xuICBwcml2YXRlIHJvd3M6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8dm9pZD4gfSA9IHt9O1xuXG4gIGFkZCh0eXBlOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcmVmOiBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXNbdHlwZSA9PT0gJ3RpdGxlJyA/ICd0aXRsZXMnIDogJ3Jvd3MnXVtwYXRoXSA9IHJlZjtcbiAgfVxuXG4gIGdldFRpdGxlKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnRpdGxlc1twYXRoXTtcbiAgfVxuXG4gIGdldFJvdyhwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yb3dzW3BhdGhdO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tzdC1yb3ddJyB9KVxuZXhwb3J0IGNsYXNzIFNUUm93RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdzdC1yb3cnKVxuICBpZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHR5cGU6ICd0aXRsZSc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWY6IFRlbXBsYXRlUmVmPHZvaWQ+LFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBzb3VyY2U6IFNUUm93U291cmNlLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc291cmNlLmFkZCh0aGlzLnR5cGUsIHRoaXMuaWQsIHRoaXMucmVmKTtcbiAgfVxufVxuIl19