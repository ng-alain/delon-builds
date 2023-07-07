import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
class LayoutDefaultHeaderItemComponent {
    constructor() {
        this.hidden = 'none';
        this.direction = 'right';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: LayoutDefaultHeaderItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.4", type: LayoutDefaultHeaderItemComponent, selector: "layout-default-header-item", inputs: { hidden: "hidden", direction: "direction" }, viewQueries: [{ propertyName: "host", first: true, predicate: ["host"], descendants: true, static: true }], ngImport: i0, template: `
    <ng-template #host>
      <ng-content></ng-content>
    </ng-template>
  `, isInline: true }); }
}
export { LayoutDefaultHeaderItemComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: LayoutDefaultHeaderItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default-header-item',
                    template: `
    <ng-template #host>
      <ng-content></ng-content>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWhlYWRlci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC1oZWFkZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUl6RSxNQVFhLGdDQUFnQztJQVI3QztRQVdXLFdBQU0sR0FBa0MsTUFBTSxDQUFDO1FBQy9DLGNBQVMsR0FBcUMsT0FBTyxDQUFDO0tBQ2hFOzhHQUxZLGdDQUFnQztrR0FBaEMsZ0NBQWdDLG9PQU5qQzs7OztHQUlUOztTQUVVLGdDQUFnQzsyRkFBaEMsZ0NBQWdDO2tCQVI1QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRTs7OztHQUlUO2lCQUNGOzhCQUVzQyxJQUFJO3NCQUF4QyxTQUFTO3VCQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBRTFCLE1BQU07c0JBQWQsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0SGVhZGVySXRlbURpcmVjdGlvbiwgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1IaWRkZW4gfSBmcm9tICcuL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGF5b3V0LWRlZmF1bHQtaGVhZGVyLWl0ZW0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjaG9zdD5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnaG9zdCcsIHsgc3RhdGljOiB0cnVlIH0pIGhvc3QhOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKSBoaWRkZW46IExheW91dERlZmF1bHRIZWFkZXJJdGVtSGlkZGVuID0gJ25vbmUnO1xuICBASW5wdXQoKSBkaXJlY3Rpb246IExheW91dERlZmF1bHRIZWFkZXJJdGVtRGlyZWN0aW9uID0gJ3JpZ2h0Jztcbn1cbiJdfQ==