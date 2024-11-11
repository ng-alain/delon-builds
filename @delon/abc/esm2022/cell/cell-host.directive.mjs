import { Directive, Input, ViewContainerRef, inject } from '@angular/core';
import { warn } from '@delon/util/other';
import { CellService } from './cell.service';
import * as i0 from "@angular/core";
export class CellHostDirective {
    constructor() {
        this.srv = inject(CellService);
        this.vcr = inject(ViewContainerRef);
    }
    ngOnChanges() {
        const widget = this.data.options.widget;
        const componentType = this.srv.getWidget(widget.key)?.ref;
        if (componentType == null) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
                warn(`cell: No widget for type "${widget.key}"`);
            }
            return;
        }
        this.vcr.clear();
        const componentRef = this.vcr.createComponent(componentType);
        componentRef.instance.data = this.data;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: CellHostDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.11", type: CellHostDirective, isStandalone: true, selector: "[cell-widget-host]", inputs: { data: "data" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: CellHostDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cell-widget-host]',
                    standalone: true
                }]
        }], propDecorators: { data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1ob3N0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9jZWxsL2NlbGwtaG9zdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW1CLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQU83QyxNQUFNLE9BQU8saUJBQWlCO0lBSjlCO1FBS21CLFFBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUIsUUFBRyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBa0JqRDtJQWRDLFdBQVc7UUFDVCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFPLENBQUM7UUFDekMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUksQ0FBQyxFQUFFLEdBQW9CLENBQUM7UUFDNUUsSUFBSSxhQUFhLElBQUksSUFBSSxFQUFFLENBQUM7WUFDMUIsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLElBQUksU0FBUyxFQUFFLENBQUM7Z0JBQ2xELElBQUksQ0FBQyw2QkFBNkIsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDbkQsQ0FBQztZQUNELE9BQU87UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RCxZQUFZLENBQUMsUUFBcUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN2RSxDQUFDOytHQW5CVSxpQkFBaUI7bUdBQWpCLGlCQUFpQjs7NEZBQWpCLGlCQUFpQjtrQkFKN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBS1UsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBUeXBlLCBWaWV3Q29udGFpbmVyUmVmLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgd2FybiB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcblxuaW1wb3J0IHsgQ2VsbFNlcnZpY2UgfSBmcm9tICcuL2NlbGwuc2VydmljZSc7XG5pbXBvcnQgeyBDZWxsVGV4dFJlc3VsdCB9IGZyb20gJy4vY2VsbC50eXBlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZWxsLXdpZGdldC1ob3N0XScsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQ2VsbEhvc3REaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIHJlYWRvbmx5IHNydiA9IGluamVjdChDZWxsU2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgdmNyID0gaW5qZWN0KFZpZXdDb250YWluZXJSZWYpO1xuXG4gIEBJbnB1dCgpIGRhdGEhOiBDZWxsVGV4dFJlc3VsdDtcblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBjb25zdCB3aWRnZXQgPSB0aGlzLmRhdGEub3B0aW9ucy53aWRnZXQhO1xuICAgIGNvbnN0IGNvbXBvbmVudFR5cGUgPSB0aGlzLnNydi5nZXRXaWRnZXQod2lkZ2V0LmtleSEpPy5yZWYgYXMgVHlwZTx1bmtub3duPjtcbiAgICBpZiAoY29tcG9uZW50VHlwZSA9PSBudWxsKSB7XG4gICAgICBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgICAgIHdhcm4oYGNlbGw6IE5vIHdpZGdldCBmb3IgdHlwZSBcIiR7d2lkZ2V0LmtleX1cImApO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudmNyLmNsZWFyKCk7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy52Y3IuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudFR5cGUpO1xuICAgIChjb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgeyBkYXRhOiBDZWxsVGV4dFJlc3VsdCB9KS5kYXRhID0gdGhpcy5kYXRhO1xuICB9XG59XG4iXX0=