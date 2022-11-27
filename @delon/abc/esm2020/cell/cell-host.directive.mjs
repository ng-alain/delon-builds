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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        componentRef.instance.data = this.data;
    }
}
CellHostDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CellHostDirective, deps: [{ token: i1.CellService }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
CellHostDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.12", type: CellHostDirective, selector: "[cell-widget-host]", inputs: { data: "data" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CellHostDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[cell-widget-host]' }]
        }], ctorParameters: function () { return [{ type: i1.CellService }, { type: i0.ViewContainerRef }]; }, propDecorators: { data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1ob3N0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9jZWxsL2NlbGwtaG9zdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWtDLE1BQU0sZUFBZSxDQUFDO0FBRWpGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBTXpDLE1BQU0sT0FBTyxpQkFBaUI7SUFHNUIsWUFBb0IsR0FBZ0IsRUFBVSxnQkFBa0M7UUFBNUQsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDO0lBRXBGLFFBQVE7UUFDTixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxNQUFPLENBQUM7UUFDMUMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUksQ0FBQyxFQUFFLEdBQW9CLENBQUM7UUFDNUUsSUFBSSxhQUFhLElBQUksSUFBSSxFQUFFO1lBQ3pCLElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxJQUFJLFNBQVMsRUFBRTtnQkFDakQsSUFBSSxDQUFDLDZCQUE2QixNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzthQUNsRDtZQUNELE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFFLDhEQUE4RDtRQUM3RCxZQUFZLENBQUMsUUFBZ0IsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsRCxDQUFDOzsrR0FuQlUsaUJBQWlCO21HQUFqQixpQkFBaUI7NEZBQWpCLGlCQUFpQjtrQkFEN0IsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRTtpSUFFbEMsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBUeXBlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHdhcm4gfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5cbmltcG9ydCB7IENlbGxTZXJ2aWNlIH0gZnJvbSAnLi9jZWxsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2VsbFdpZGdldERhdGEgfSBmcm9tICcuL2NlbGwudHlwZXMnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbY2VsbC13aWRnZXQtaG9zdF0nIH0pXG5leHBvcnQgY2xhc3MgQ2VsbEhvc3REaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXRhITogQ2VsbFdpZGdldERhdGE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IENlbGxTZXJ2aWNlLCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgd2lkZ2V0ID0gdGhpcy5kYXRhLm9wdGlvbnMhLndpZGdldCE7XG4gICAgY29uc3QgY29tcG9uZW50VHlwZSA9IHRoaXMuc3J2LmdldFdpZGdldCh3aWRnZXQua2V5ISk/LnJlZiBhcyBUeXBlPHVua25vd24+O1xuICAgIGlmIChjb21wb25lbnRUeXBlID09IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpIHtcbiAgICAgICAgd2FybihgY2VsbDogTm8gd2lkZ2V0IGZvciB0eXBlIFwiJHt3aWRnZXQua2V5fVwiYCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRUeXBlKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIChjb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgYW55KS5kYXRhID0gdGhpcy5kYXRhO1xuICB9XG59XG4iXX0=