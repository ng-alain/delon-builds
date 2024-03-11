import { Directive, Input, ViewContainerRef, inject } from '@angular/core';
import { warn } from '@delon/util/other';
import { CellService } from './cell.service';
import * as i0 from "@angular/core";
export class CellHostDirective {
    constructor() {
        this.srv = inject(CellService);
        this.viewContainerRef = inject(ViewContainerRef);
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
        componentRef.instance.data = this.data;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: CellHostDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.0", type: CellHostDirective, isStandalone: true, selector: "[cell-widget-host]", inputs: { data: "data" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: CellHostDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cell-widget-host]',
                    standalone: true
                }]
        }], propDecorators: { data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1ob3N0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9jZWxsL2NlbGwtaG9zdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWdCLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQU83QyxNQUFNLE9BQU8saUJBQWlCO0lBSjlCO1FBS21CLFFBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUIscUJBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FrQjlEO0lBZEMsUUFBUTtRQUNOLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBUSxDQUFDLE1BQU8sQ0FBQztRQUMxQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBSSxDQUFDLEVBQUUsR0FBb0IsQ0FBQztRQUM1RSxJQUFJLGFBQWEsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUMxQixJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLEVBQUUsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLDZCQUE2QixNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNuRCxDQUFDO1lBQ0QsT0FBTztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RSxZQUFZLENBQUMsUUFBcUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN2RSxDQUFDOzhHQW5CVSxpQkFBaUI7a0dBQWpCLGlCQUFpQjs7MkZBQWpCLGlCQUFpQjtrQkFKN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBS1UsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBUeXBlLCBWaWV3Q29udGFpbmVyUmVmLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgd2FybiB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcblxuaW1wb3J0IHsgQ2VsbFNlcnZpY2UgfSBmcm9tICcuL2NlbGwuc2VydmljZSc7XG5pbXBvcnQgeyBDZWxsVGV4dFJlc3VsdCB9IGZyb20gJy4vY2VsbC50eXBlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZWxsLXdpZGdldC1ob3N0XScsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQ2VsbEhvc3REaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHJlYWRvbmx5IHNydiA9IGluamVjdChDZWxsU2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgdmlld0NvbnRhaW5lclJlZiA9IGluamVjdChWaWV3Q29udGFpbmVyUmVmKTtcblxuICBASW5wdXQoKSBkYXRhITogQ2VsbFRleHRSZXN1bHQ7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgd2lkZ2V0ID0gdGhpcy5kYXRhLm9wdGlvbnMhLndpZGdldCE7XG4gICAgY29uc3QgY29tcG9uZW50VHlwZSA9IHRoaXMuc3J2LmdldFdpZGdldCh3aWRnZXQua2V5ISk/LnJlZiBhcyBUeXBlPHVua25vd24+O1xuICAgIGlmIChjb21wb25lbnRUeXBlID09IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpIHtcbiAgICAgICAgd2FybihgY2VsbDogTm8gd2lkZ2V0IGZvciB0eXBlIFwiJHt3aWRnZXQua2V5fVwiYCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRUeXBlKTtcbiAgICAoY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIHsgZGF0YTogQ2VsbFRleHRSZXN1bHQgfSkuZGF0YSA9IHRoaXMuZGF0YTtcbiAgfVxufVxuIl19