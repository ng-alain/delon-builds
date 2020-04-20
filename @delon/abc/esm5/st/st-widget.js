/**
 * @fileoverview added by tsickle
 * Generated from: st-widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var STWidget = /** @class */ (function () {
    function STWidget() {
    }
    return STWidget;
}());
export { STWidget };
var STWidgetRegistry = /** @class */ (function () {
    function STWidgetRegistry() {
        this._widgets = {};
    }
    Object.defineProperty(STWidgetRegistry.prototype, "widgets", {
        get: /**
         * @return {?}
         */
        function () {
            return this._widgets;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} type
     * @param {?} widget
     * @return {?}
     */
    STWidgetRegistry.prototype.register = /**
     * @param {?} type
     * @param {?} widget
     * @return {?}
     */
    function (type, widget) {
        this._widgets[type] = widget;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    STWidgetRegistry.prototype.has = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this._widgets.hasOwnProperty(type);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    STWidgetRegistry.prototype.get = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this._widgets[type];
    };
    STWidgetRegistry.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ STWidgetRegistry.ɵprov = i0.ɵɵdefineInjectable({ factory: function STWidgetRegistry_Factory() { return new STWidgetRegistry(); }, token: STWidgetRegistry, providedIn: "root" });
    return STWidgetRegistry;
}());
export { STWidgetRegistry };
if (false) {
    /**
     * @type {?}
     * @private
     */
    STWidgetRegistry.prototype._widgets;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtd2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0LXdpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDO0lBQUE7SUFBdUIsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUFDLEFBQXhCLElBQXdCOztBQUV4QjtJQUFBO1FBRVUsYUFBUSxHQUFpQyxFQUFFLENBQUM7S0FpQnJEO0lBZkMsc0JBQUkscUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTs7Ozs7O0lBRUQsbUNBQVE7Ozs7O0lBQVIsVUFBUyxJQUFZLEVBQUUsTUFBZ0I7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCw4QkFBRzs7OztJQUFILFVBQUksSUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCw4QkFBRzs7OztJQUFILFVBQUksSUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkFsQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OzJCQUpsQztDQXVCQyxBQW5CRCxJQW1CQztTQWxCWSxnQkFBZ0I7Ozs7OztJQUMzQixvQ0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBTVFdpZGdldCB7fVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNUV2lkZ2V0UmVnaXN0cnkge1xuICBwcml2YXRlIF93aWRnZXRzOiB7IFt0eXBlOiBzdHJpbmddOiBTVFdpZGdldCB9ID0ge307XG5cbiAgZ2V0IHdpZGdldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZGdldHM7XG4gIH1cblxuICByZWdpc3Rlcih0eXBlOiBzdHJpbmcsIHdpZGdldDogU1RXaWRnZXQpIHtcbiAgICB0aGlzLl93aWRnZXRzW3R5cGVdID0gd2lkZ2V0O1xuICB9XG5cbiAgaGFzKHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl93aWRnZXRzLmhhc093blByb3BlcnR5KHR5cGUpO1xuICB9XG5cbiAgZ2V0KHR5cGU6IHN0cmluZyk6IFNUV2lkZ2V0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkZ2V0c1t0eXBlXTtcbiAgfVxufVxuIl19