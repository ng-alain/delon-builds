import { Directive, Input } from '@angular/core';
import { warn } from '@delon/util/other';
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
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
                warn(`cell: No widget for type "${widget.key}"`);
            }
            return;
        }
        this.viewContainerRef.clear();
        const componentRef = this.viewContainerRef.createComponent(componentType);
        componentRef.instance.data = this.data;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: CellHostDirective, deps: [{ token: i1.CellService }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.7", type: CellHostDirective, selector: "[cell-widget-host]", inputs: { data: "data" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.7", ngImport: i0, type: CellHostDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cell-widget-host]'
                }]
        }], ctorParameters: function () { return [{ type: i1.CellService }, { type: i0.ViewContainerRef }]; }, propDecorators: { data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1ob3N0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9jZWxsL2NlbGwtaG9zdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWtDLE1BQU0sZUFBZSxDQUFDO0FBRWpGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBUXpDLE1BQU0sT0FBTyxpQkFBaUI7SUFHNUIsWUFDVSxHQUFnQixFQUNoQixnQkFBa0M7UUFEbEMsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3pDLENBQUM7SUFFSixRQUFRO1FBQ04sTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFRLENBQUMsTUFBTyxDQUFDO1FBQzFDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFJLENBQUMsRUFBRSxHQUFvQixDQUFDO1FBQzVFLElBQUksYUFBYSxJQUFJLElBQUksRUFBRTtZQUN6QixJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyw2QkFBNkIsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDbEQ7WUFDRCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RSxZQUFZLENBQUMsUUFBcUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN2RSxDQUFDOzhHQXJCVSxpQkFBaUI7a0dBQWpCLGlCQUFpQjs7MkZBQWpCLGlCQUFpQjtrQkFIN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2lCQUMvQjtpSUFFVSxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIFR5cGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgd2FybiB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcblxuaW1wb3J0IHsgQ2VsbFNlcnZpY2UgfSBmcm9tICcuL2NlbGwuc2VydmljZSc7XG5pbXBvcnQgeyBDZWxsV2lkZ2V0RGF0YSB9IGZyb20gJy4vY2VsbC50eXBlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZWxsLXdpZGdldC1ob3N0XSdcbn0pXG5leHBvcnQgY2xhc3MgQ2VsbEhvc3REaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXRhITogQ2VsbFdpZGdldERhdGE7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzcnY6IENlbGxTZXJ2aWNlLFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgd2lkZ2V0ID0gdGhpcy5kYXRhLm9wdGlvbnMhLndpZGdldCE7XG4gICAgY29uc3QgY29tcG9uZW50VHlwZSA9IHRoaXMuc3J2LmdldFdpZGdldCh3aWRnZXQua2V5ISk/LnJlZiBhcyBUeXBlPHVua25vd24+O1xuICAgIGlmIChjb21wb25lbnRUeXBlID09IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpIHtcbiAgICAgICAgd2FybihgY2VsbDogTm8gd2lkZ2V0IGZvciB0eXBlIFwiJHt3aWRnZXQua2V5fVwiYCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRUeXBlKTtcbiAgICAoY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIHsgZGF0YTogQ2VsbFdpZGdldERhdGEgfSkuZGF0YSA9IHRoaXMuZGF0YTtcbiAgfVxufVxuIl19