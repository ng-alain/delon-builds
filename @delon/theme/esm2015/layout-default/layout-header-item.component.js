import { Component, ElementRef, Input, ViewChild } from '@angular/core';
export class LayoutDefaultHeaderItemComponent {
    constructor() {
        this.hidden = 'none';
        this.direction = 'right';
    }
}
LayoutDefaultHeaderItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'layout-default-header-item',
                template: `
    <ng-template #host>
      <ng-content></ng-content>
    </ng-template>
  `
            },] }
];
LayoutDefaultHeaderItemComponent.propDecorators = {
    host: [{ type: ViewChild, args: ['host', { static: true },] }],
    hidden: [{ type: Input }],
    direction: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWhlYWRlci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC1oZWFkZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVd4RSxNQUFNLE9BQU8sZ0NBQWdDO0lBUjdDO1FBV1csV0FBTSxHQUFrQyxNQUFNLENBQUM7UUFDL0MsY0FBUyxHQUFxQyxPQUFPLENBQUM7SUFDakUsQ0FBQzs7O1lBYkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRTs7OztHQUlUO2FBQ0Y7OzttQkFFRSxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtxQkFFbEMsS0FBSzt3QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0SGVhZGVySXRlbURpcmVjdGlvbiwgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1IaWRkZW4gfSBmcm9tICcuL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGF5b3V0LWRlZmF1bHQtaGVhZGVyLWl0ZW0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjaG9zdD5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXREZWZhdWx0SGVhZGVySXRlbUNvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ2hvc3QnLCB7IHN0YXRpYzogdHJ1ZSB9KSBob3N0OiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIGhpZGRlbjogTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1IaWRkZW4gPSAnbm9uZSc7XG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1EaXJlY3Rpb24gPSAncmlnaHQnO1xufVxuIl19