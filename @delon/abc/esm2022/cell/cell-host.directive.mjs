import { Directive, Input } from '@angular/core';
import { warn } from '@delon/util/other';
import * as i0 from "@angular/core";
import * as i1 from "./cell.service";
class CellHostDirective {
    constructor(srv, viewContainerRef) {
        this.srv = srv;
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        const widget = this.data.options.widget;
        const componentType = this.srv.getWidget(widget.key)?.ref;
        if (componentType == null) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
                warn(`cell: No widget for type "${widget.key}"`);
            }
            return;
        }
        this.viewContainerRef.clear();
        const componentRef = this.viewContainerRef.createComponent(componentType);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        componentRef.instance.data = this.data;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CellHostDirective, deps: [{ token: i1.CellService }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.0.4", type: CellHostDirective, selector: "[cell-widget-host]", inputs: { data: "data" }, ngImport: i0 }); }
}
export { CellHostDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CellHostDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cell-widget-host]'
                }]
        }], ctorParameters: function () { return [{ type: i1.CellService }, { type: i0.ViewContainerRef }]; }, propDecorators: { data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1ob3N0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9jZWxsL2NlbGwtaG9zdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWtDLE1BQU0sZUFBZSxDQUFDO0FBRWpGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBS3pDLE1BR2EsaUJBQWlCO0lBRzVCLFlBQW9CLEdBQWdCLEVBQVUsZ0JBQWtDO1FBQTVELFFBQUcsR0FBSCxHQUFHLENBQWE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQztJQUVwRixRQUFRO1FBQ04sTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFRLENBQUMsTUFBTyxDQUFDO1FBQzFDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFJLENBQUMsRUFBRSxHQUFvQixDQUFDO1FBQzVFLElBQUksYUFBYSxJQUFJLElBQUksRUFBRTtZQUN6QixJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyw2QkFBNkIsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDbEQ7WUFDRCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxRSw4REFBOEQ7UUFDN0QsWUFBWSxDQUFDLFFBQWdCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQzs4R0FuQlUsaUJBQWlCO2tHQUFqQixpQkFBaUI7O1NBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUg3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9CO2lJQUVVLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgVHlwZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB3YXJuIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuXG5pbXBvcnQgeyBDZWxsU2VydmljZSB9IGZyb20gJy4vY2VsbC5zZXJ2aWNlJztcbmltcG9ydCB7IENlbGxXaWRnZXREYXRhIH0gZnJvbSAnLi9jZWxsLnR5cGVzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NlbGwtd2lkZ2V0LWhvc3RdJ1xufSlcbmV4cG9ydCBjbGFzcyBDZWxsSG9zdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRhdGEhOiBDZWxsV2lkZ2V0RGF0YTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogQ2VsbFNlcnZpY2UsIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB3aWRnZXQgPSB0aGlzLmRhdGEub3B0aW9ucyEud2lkZ2V0ITtcbiAgICBjb25zdCBjb21wb25lbnRUeXBlID0gdGhpcy5zcnYuZ2V0V2lkZ2V0KHdpZGdldC5rZXkhKT8ucmVmIGFzIFR5cGU8dW5rbm93bj47XG4gICAgaWYgKGNvbXBvbmVudFR5cGUgPT0gbnVsbCkge1xuICAgICAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgICAgICB3YXJuKGBjZWxsOiBObyB3aWRnZXQgZm9yIHR5cGUgXCIke3dpZGdldC5rZXl9XCJgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudFR5cGUpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgKGNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBhbnkpLmRhdGEgPSB0aGlzLmRhdGE7XG4gIH1cbn1cbiJdfQ==