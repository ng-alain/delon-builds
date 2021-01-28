import { ComponentFactoryResolver, Directive, Input, ViewContainerRef } from '@angular/core';
import { STWidgetRegistry } from './st-widget';
import * as i0 from "@angular/core";
import * as i1 from "./st-widget";
export class STWidgetHostDirective {
    constructor(stWidgetRegistry, viewContainerRef, componentFactoryResolver) {
        this.stWidgetRegistry = stWidgetRegistry;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ngOnInit() {
        const widget = this.column.widget;
        const componentType = this.stWidgetRegistry.get(widget.type);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        this.viewContainerRef.clear();
        const componentRef = this.viewContainerRef.createComponent(componentFactory);
        const { record, column } = this;
        const data = widget.params ? widget.params({ record, column }) : { record };
        Object.keys(data).forEach(key => {
            componentRef.instance[key] = data[key];
        });
    }
}
/** @nocollapse */ STWidgetHostDirective.ɵfac = function STWidgetHostDirective_Factory(t) { return new (t || STWidgetHostDirective)(i0.ɵɵdirectiveInject(i1.STWidgetRegistry), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver)); };
/** @nocollapse */ STWidgetHostDirective.ɵdir = i0.ɵɵngDeclareDirective({ version: "11.1.1", type: STWidgetHostDirective, selector: "[st-widget-host]", inputs: { record: "record", column: "column" }, ngImport: i0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(STWidgetHostDirective, [{
        type: Directive,
        args: [{ selector: '[st-widget-host]' }]
    }], function () { return [{ type: i1.STWidgetRegistry }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }]; }, { record: [{
            type: Input
        }], column: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtd2lkZ2V0LWhvc3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LXdpZGdldC1ob3N0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7OztBQUkvQyxNQUFNLE9BQU8scUJBQXFCO0lBSWhDLFlBQ1UsZ0JBQWtDLEVBQ2xDLGdCQUFrQyxFQUNsQyx3QkFBa0Q7UUFGbEQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7SUFDekQsQ0FBQztJQUVKLFFBQVE7UUFDTixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU8sQ0FBQztRQUNuQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxhQUFvQixDQUFDLENBQUM7UUFFckcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM3RSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztRQUNoQyxNQUFNLElBQUksR0FBMkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQ3BHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLFlBQVksQ0FBQyxRQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzZHQXRCVSxxQkFBcUI7bUdBQXJCLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBRGpDLFNBQVM7ZUFBQyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTt5SUFFaEMsTUFBTTtrQkFBZCxLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNUV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3N0LXdpZGdldCc7XG5pbXBvcnQgeyBTVENvbHVtbiwgU1REYXRhIH0gZnJvbSAnLi9zdC5pbnRlcmZhY2VzJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3N0LXdpZGdldC1ob3N0XScgfSlcbmV4cG9ydCBjbGFzcyBTVFdpZGdldEhvc3REaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSByZWNvcmQ6IFNURGF0YTtcbiAgQElucHV0KCkgY29sdW1uOiBTVENvbHVtbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0V2lkZ2V0UmVnaXN0cnk6IFNUV2lkZ2V0UmVnaXN0cnksXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB3aWRnZXQgPSB0aGlzLmNvbHVtbi53aWRnZXQhO1xuICAgIGNvbnN0IGNvbXBvbmVudFR5cGUgPSB0aGlzLnN0V2lkZ2V0UmVnaXN0cnkuZ2V0KHdpZGdldC50eXBlKTtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50VHlwZSBhcyBhbnkpO1xuXG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcbiAgICBjb25zdCB7IHJlY29yZCwgY29sdW1uIH0gPSB0aGlzO1xuICAgIGNvbnN0IGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB3aWRnZXQucGFyYW1zID8gd2lkZ2V0LnBhcmFtcyh7IHJlY29yZCwgY29sdW1uIH0pIDogeyByZWNvcmQgfTtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAoY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIGFueSlba2V5XSA9IGRhdGFba2V5XTtcbiAgICB9KTtcbiAgfVxufVxuIl19