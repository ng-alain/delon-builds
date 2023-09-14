import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
export class LayoutDefaultHeaderItemComponent {
    constructor() {
        this.hidden = 'none';
        this.direction = 'right';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: LayoutDefaultHeaderItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.5", type: LayoutDefaultHeaderItemComponent, selector: "layout-default-header-item", inputs: { hidden: "hidden", direction: "direction" }, viewQueries: [{ propertyName: "host", first: true, predicate: ["host"], descendants: true, static: true }], ngImport: i0, template: `
    <ng-template #host>
      <ng-content />
    </ng-template>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: LayoutDefaultHeaderItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default-header-item',
                    template: `
    <ng-template #host>
      <ng-content />
    </ng-template>
  `
                }]
        }], propDecorators: { host: [{
                type: ViewChild,
                args: ['host', { static: true }]
            }], hidden: [{
                type: Input
            }], direction: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWhlYWRlci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC1oZWFkZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVl6RSxNQUFNLE9BQU8sZ0NBQWdDO0lBUjdDO1FBV1csV0FBTSxHQUFrQyxNQUFNLENBQUM7UUFDL0MsY0FBUyxHQUFxQyxPQUFPLENBQUM7S0FDaEU7OEdBTFksZ0NBQWdDO2tHQUFoQyxnQ0FBZ0Msb09BTmpDOzs7O0dBSVQ7OzJGQUVVLGdDQUFnQztrQkFSNUMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxRQUFRLEVBQUU7Ozs7R0FJVDtpQkFDRjs4QkFFc0MsSUFBSTtzQkFBeEMsU0FBUzt1QkFBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUUxQixNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1EaXJlY3Rpb24sIExheW91dERlZmF1bHRIZWFkZXJJdGVtSGlkZGVuIH0gZnJvbSAnLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xheW91dC1kZWZhdWx0LWhlYWRlci1pdGVtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI2hvc3Q+XG4gICAgICA8bmctY29udGVudCAvPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1Db21wb25lbnQge1xuICBAVmlld0NoaWxkKCdob3N0JywgeyBzdGF0aWM6IHRydWUgfSkgaG9zdCE6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpIGhpZGRlbjogTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1IaWRkZW4gPSAnbm9uZSc7XG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1EaXJlY3Rpb24gPSAncmlnaHQnO1xufVxuIl19