import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
export class LayoutDefaultHeaderItemComponent {
    constructor() {
        this.hidden = 'none';
        this.direction = 'right';
    }
}
/** @nocollapse */ LayoutDefaultHeaderItemComponent.ɵfac = function LayoutDefaultHeaderItemComponent_Factory(t) { return new (t || LayoutDefaultHeaderItemComponent)(); };
/** @nocollapse */ LayoutDefaultHeaderItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: LayoutDefaultHeaderItemComponent, selector: "layout-default-header-item", inputs: { hidden: "hidden", direction: "direction" }, viewQueries: [{ propertyName: "host", first: true, predicate: ["host"], emitDistinctChangesOnly: false, descendants: true, static: true }], ngImport: i0, template: `
    <ng-template #host>
      <ng-content></ng-content>
    </ng-template>
  `, isInline: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutDefaultHeaderItemComponent, [{
        type: Component,
        args: [{
                selector: 'layout-default-header-item',
                template: `
    <ng-template #host>
      <ng-content></ng-content>
    </ng-template>
  `,
            }]
    }], null, { host: [{
            type: ViewChild,
            args: ['host', { static: true }]
        }], hidden: [{
            type: Input
        }], direction: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWhlYWRlci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC1oZWFkZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFXeEUsTUFBTSxPQUFPLGdDQUFnQztJQVI3QztRQVdXLFdBQU0sR0FBa0MsTUFBTSxDQUFDO1FBQy9DLGNBQVMsR0FBcUMsT0FBTyxDQUFDO0tBQ2hFOzttSUFMWSxnQ0FBZ0M7OEdBQWhDLGdDQUFnQyxvUUFOakM7Ozs7R0FJVDt1RkFFVSxnQ0FBZ0M7Y0FSNUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRTs7OztHQUlUO2FBQ0Y7Z0JBRXNDLElBQUk7a0JBQXhDLFNBQVM7bUJBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUUxQixNQUFNO2tCQUFkLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0SGVhZGVySXRlbURpcmVjdGlvbiwgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1IaWRkZW4gfSBmcm9tICcuL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGF5b3V0LWRlZmF1bHQtaGVhZGVyLWl0ZW0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjaG9zdD5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXREZWZhdWx0SGVhZGVySXRlbUNvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ2hvc3QnLCB7IHN0YXRpYzogdHJ1ZSB9KSBob3N0OiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIGhpZGRlbjogTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1IaWRkZW4gPSAnbm9uZSc7XG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1EaXJlY3Rpb24gPSAncmlnaHQnO1xufVxuIl19