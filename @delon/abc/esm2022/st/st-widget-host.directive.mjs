import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./st-widget";
class STWidgetHostDirective {
    constructor(stWidgetRegistry, viewContainerRef) {
        this.stWidgetRegistry = stWidgetRegistry;
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        const widget = this.column.widget;
        const componentType = this.stWidgetRegistry.get(widget.type);
        this.viewContainerRef.clear();
        const componentRef = this.viewContainerRef.createComponent(componentType);
        const { record, column } = this;
        const data = widget.params ? widget.params({ record, column }) : { record };
        Object.keys(data).forEach(key => {
            componentRef.instance[key] = data[key];
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: STWidgetHostDirective, deps: [{ token: i1.STWidgetRegistry }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.6", type: STWidgetHostDirective, selector: "[st-widget-host]", inputs: { record: "record", column: "column" }, ngImport: i0 }); }
}
export { STWidgetHostDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: STWidgetHostDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[st-widget-host]' }]
        }], ctorParameters: function () { return [{ type: i1.STWidgetRegistry }, { type: i0.ViewContainerRef }]; }, propDecorators: { record: [{
                type: Input
            }], column: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtd2lkZ2V0LWhvc3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LXdpZGdldC1ob3N0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7OztBQU8zRSxNQUNhLHFCQUFxQjtJQUloQyxZQUFvQixnQkFBa0MsRUFBVSxnQkFBa0M7UUFBOUUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDO0lBRXRHLFFBQVE7UUFDTixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU8sQ0FBQztRQUNuQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztRQUNoQyxNQUFNLElBQUksR0FBaUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQzFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLFlBQVksQ0FBQyxRQUFzQixDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBakJVLHFCQUFxQjtrR0FBckIscUJBQXFCOztTQUFyQixxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFEakMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTtzSUFFaEMsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IFNUV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3N0LXdpZGdldCc7XG5pbXBvcnQgeyBTVENvbHVtbiwgU1REYXRhIH0gZnJvbSAnLi9zdC5pbnRlcmZhY2VzJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3N0LXdpZGdldC1ob3N0XScgfSlcbmV4cG9ydCBjbGFzcyBTVFdpZGdldEhvc3REaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSByZWNvcmQhOiBTVERhdGE7XG4gIEBJbnB1dCgpIGNvbHVtbiE6IFNUQ29sdW1uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RXaWRnZXRSZWdpc3RyeTogU1RXaWRnZXRSZWdpc3RyeSwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHdpZGdldCA9IHRoaXMuY29sdW1uLndpZGdldCE7XG4gICAgY29uc3QgY29tcG9uZW50VHlwZSA9IHRoaXMuc3RXaWRnZXRSZWdpc3RyeS5nZXQod2lkZ2V0LnR5cGUpO1xuXG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRUeXBlKTtcbiAgICBjb25zdCB7IHJlY29yZCwgY29sdW1uIH0gPSB0aGlzO1xuICAgIGNvbnN0IGRhdGE6IHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0gPSB3aWRnZXQucGFyYW1zID8gd2lkZ2V0LnBhcmFtcyh7IHJlY29yZCwgY29sdW1uIH0pIDogeyByZWNvcmQgfTtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAoY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIE56U2FmZUFueSlba2V5XSA9IGRhdGFba2V5XTtcbiAgICB9KTtcbiAgfVxufVxuIl19