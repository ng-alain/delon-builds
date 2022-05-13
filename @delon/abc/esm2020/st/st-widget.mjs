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
STWidgetRegistry.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: STWidgetRegistry, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
STWidgetRegistry.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: STWidgetRegistry, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: STWidgetRegistry, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtd2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LXdpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sZ0JBQWdCO0lBRDdCO1FBRVUsYUFBUSxHQUFrQyxFQUFFLENBQUM7S0FpQnREO0lBZkMsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBWSxFQUFFLE1BQWlCO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7OzZHQWpCVSxnQkFBZ0I7aUhBQWhCLGdCQUFnQixjQURILE1BQU07MkZBQ25CLGdCQUFnQjtrQkFENUIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTVFdpZGdldFJlZ2lzdHJ5IHtcbiAgcHJpdmF0ZSBfd2lkZ2V0czogeyBbdHlwZTogc3RyaW5nXTogTnpTYWZlQW55IH0gPSB7fTtcblxuICBnZXQgd2lkZ2V0cygpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl93aWRnZXRzO1xuICB9XG5cbiAgcmVnaXN0ZXIodHlwZTogc3RyaW5nLCB3aWRnZXQ6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIHRoaXMuX3dpZGdldHNbdHlwZV0gPSB3aWRnZXQ7XG4gIH1cblxuICBoYXModHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZGdldHMuaGFzT3duUHJvcGVydHkodHlwZSk7XG4gIH1cblxuICBnZXQodHlwZTogc3RyaW5nKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5fd2lkZ2V0c1t0eXBlXTtcbiAgfVxufVxuIl19