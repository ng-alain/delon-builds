/**
 * @fileoverview added by tsickle
 * Generated from: st-widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class STWidget {
}
export class STWidgetRegistry {
    constructor() {
        this._widgets = {};
    }
    /**
     * @return {?}
     */
    get widgets() {
        return this._widgets;
    }
    /**
     * @param {?} type
     * @param {?} widget
     * @return {?}
     */
    register(type, widget) {
        this._widgets[type] = widget;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    has(type) {
        return this._widgets.hasOwnProperty(type);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    get(type) {
        return this._widgets[type];
    }
}
STWidgetRegistry.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ STWidgetRegistry.ɵprov = i0.ɵɵdefineInjectable({ factory: function STWidgetRegistry_Factory() { return new STWidgetRegistry(); }, token: STWidgetRegistry, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    STWidgetRegistry.prototype._widgets;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtd2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0LXdpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE1BQU0sT0FBTyxRQUFRO0NBQUc7QUFHeEIsTUFBTSxPQUFPLGdCQUFnQjtJQUQ3QjtRQUVVLGFBQVEsR0FBaUMsRUFBRSxDQUFDO0tBaUJyRDs7OztJQWZDLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsSUFBWSxFQUFFLE1BQWdCO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLElBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLElBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBbEJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Ozs7O0lBRWhDLG9DQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFNUV2lkZ2V0IHt9XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU1RXaWRnZXRSZWdpc3RyeSB7XG4gIHByaXZhdGUgX3dpZGdldHM6IHsgW3R5cGU6IHN0cmluZ106IFNUV2lkZ2V0IH0gPSB7fTtcblxuICBnZXQgd2lkZ2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkZ2V0cztcbiAgfVxuXG4gIHJlZ2lzdGVyKHR5cGU6IHN0cmluZywgd2lkZ2V0OiBTVFdpZGdldCkge1xuICAgIHRoaXMuX3dpZGdldHNbdHlwZV0gPSB3aWRnZXQ7XG4gIH1cblxuICBoYXModHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZGdldHMuaGFzT3duUHJvcGVydHkodHlwZSk7XG4gIH1cblxuICBnZXQodHlwZTogc3RyaW5nKTogU1RXaWRnZXQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl93aWRnZXRzW3R5cGVdO1xuICB9XG59XG4iXX0=