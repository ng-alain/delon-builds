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
/** @nocollapse */ STWidgetRegistry.ɵprov = i0.ɵɵdefineInjectable({ factory: function STWidgetRegistry_Factory() { return new STWidgetRegistry(); }, token: STWidgetRegistry, providedIn: "root" });
STWidgetRegistry.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtd2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LXdpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUczQyxNQUFNLE9BQU8sZ0JBQWdCO0lBRDdCO1FBRVUsYUFBUSxHQUE0QixFQUFFLENBQUM7S0FpQmhEO0lBZkMsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBWSxFQUFFLE1BQVc7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsR0FBRyxDQUFDLElBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztZQWxCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNUV2lkZ2V0UmVnaXN0cnkge1xuICBwcml2YXRlIF93aWRnZXRzOiB7IFt0eXBlOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gIGdldCB3aWRnZXRzKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZGdldHM7XG4gIH1cblxuICByZWdpc3Rlcih0eXBlOiBzdHJpbmcsIHdpZGdldDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fd2lkZ2V0c1t0eXBlXSA9IHdpZGdldDtcbiAgfVxuXG4gIGhhcyh0eXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkZ2V0cy5oYXNPd25Qcm9wZXJ0eSh0eXBlKTtcbiAgfVxuXG4gIGdldCh0eXBlOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl93aWRnZXRzW3R5cGVdO1xuICB9XG59XG4iXX0=