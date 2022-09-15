import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./cell.service";
export class CellHostDirective {
    constructor(srv, viewContainerRef) {
        this.srv = srv;
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        const widget = this.data.options.widget;
        const componentType = this.srv.getWidget(widget.key)?.ref;
        if (componentType == null) {
            return;
        }
        this.viewContainerRef.clear();
        const componentRef = this.viewContainerRef.createComponent(componentType);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        componentRef.instance.data = this.data;
    }
}
CellHostDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: CellHostDirective, deps: [{ token: i1.CellService }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
CellHostDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.2", type: CellHostDirective, selector: "[cell-widget-host]", inputs: { data: "data" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: CellHostDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[cell-widget-host]' }]
        }], ctorParameters: function () { return [{ type: i1.CellService }, { type: i0.ViewContainerRef }]; }, propDecorators: { data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1ob3N0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9jZWxsL2NlbGwtaG9zdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWtDLE1BQU0sZUFBZSxDQUFDOzs7QUFNakYsTUFBTSxPQUFPLGlCQUFpQjtJQUc1QixZQUFvQixHQUFnQixFQUFVLGdCQUFrQztRQUE1RCxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFFcEYsUUFBUTtRQUNOLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBUSxDQUFDLE1BQU8sQ0FBQztRQUMxQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBSSxDQUFDLEVBQUUsR0FBb0IsQ0FBQztRQUM1RSxJQUFJLGFBQWEsSUFBSSxJQUFJLEVBQUU7WUFDekIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUUsOERBQThEO1FBQzdELFlBQVksQ0FBQyxRQUFnQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xELENBQUM7OzhHQWhCVSxpQkFBaUI7a0dBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUQ3QixTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFO2lJQUVsQyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIFR5cGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFNlcnZpY2UgfSBmcm9tICcuL2NlbGwuc2VydmljZSc7XG5pbXBvcnQgeyBDZWxsV2lkZ2V0RGF0YSB9IGZyb20gJy4vY2VsbC50eXBlcyc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tjZWxsLXdpZGdldC1ob3N0XScgfSlcbmV4cG9ydCBjbGFzcyBDZWxsSG9zdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRhdGEhOiBDZWxsV2lkZ2V0RGF0YTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogQ2VsbFNlcnZpY2UsIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB3aWRnZXQgPSB0aGlzLmRhdGEub3B0aW9ucyEud2lkZ2V0ITtcbiAgICBjb25zdCBjb21wb25lbnRUeXBlID0gdGhpcy5zcnYuZ2V0V2lkZ2V0KHdpZGdldC5rZXkhKT8ucmVmIGFzIFR5cGU8dW5rbm93bj47XG4gICAgaWYgKGNvbXBvbmVudFR5cGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50VHlwZSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAoY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIGFueSkuZGF0YSA9IHRoaXMuZGF0YTtcbiAgfVxufVxuIl19