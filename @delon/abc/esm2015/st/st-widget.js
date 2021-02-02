import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class STWidgetRegistry {
    constructor() {
        this._widgets = {};
    }
    get widgets() {
        return this._widgets;
    }
    register(type, widget) {
        this._widgets[type] = widget;
    }
    has(type) {
        return this._widgets.hasOwnProperty(type);
    }
    get(type) {
        return this._widgets[type];
    }
}
/** @nocollapse */ STWidgetRegistry.ɵfac = function STWidgetRegistry_Factory(t) { return new (t || STWidgetRegistry)(); };
/** @nocollapse */ STWidgetRegistry.ɵprov = i0.ɵɵdefineInjectable({ token: STWidgetRegistry, factory: STWidgetRegistry.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(STWidgetRegistry, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtd2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LXdpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQyxNQUFNLE9BQU8sZ0JBQWdCO0lBRDdCO1FBRVUsYUFBUSxHQUE0QixFQUFFLENBQUM7S0FpQmhEO0lBZkMsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBWSxFQUFFLE1BQVc7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsR0FBRyxDQUFDLElBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7bUdBakJVLGdCQUFnQjsyRUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQixtQkFESCxNQUFNO3VGQUNuQixnQkFBZ0I7Y0FENUIsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTVFdpZGdldFJlZ2lzdHJ5IHtcbiAgcHJpdmF0ZSBfd2lkZ2V0czogeyBbdHlwZTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICBnZXQgd2lkZ2V0cygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl93aWRnZXRzO1xuICB9XG5cbiAgcmVnaXN0ZXIodHlwZTogc3RyaW5nLCB3aWRnZXQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX3dpZGdldHNbdHlwZV0gPSB3aWRnZXQ7XG4gIH1cblxuICBoYXModHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZGdldHMuaGFzT3duUHJvcGVydHkodHlwZSk7XG4gIH1cblxuICBnZXQodHlwZTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fd2lkZ2V0c1t0eXBlXTtcbiAgfVxufVxuIl19