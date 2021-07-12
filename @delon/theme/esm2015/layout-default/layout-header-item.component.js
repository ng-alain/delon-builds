import { Component, Input, ViewChild } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWhlYWRlci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC1oZWFkZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBV3pFLE1BQU0sT0FBTyxnQ0FBZ0M7SUFSN0M7UUFXVyxXQUFNLEdBQWtDLE1BQU0sQ0FBQztRQUMvQyxjQUFTLEdBQXFDLE9BQU8sQ0FBQztJQUNqRSxDQUFDOzs7WUFiQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFOzs7O0dBSVQ7YUFDRjs7O21CQUVFLFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3FCQUVsQyxLQUFLO3dCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0SGVhZGVySXRlbURpcmVjdGlvbiwgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1IaWRkZW4gfSBmcm9tICcuL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGF5b3V0LWRlZmF1bHQtaGVhZGVyLWl0ZW0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjaG9zdD5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXREZWZhdWx0SGVhZGVySXRlbUNvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ2hvc3QnLCB7IHN0YXRpYzogdHJ1ZSB9KSBob3N0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpIGhpZGRlbjogTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1IaWRkZW4gPSAnbm9uZSc7XG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1EaXJlY3Rpb24gPSAncmlnaHQnO1xufVxuIl19