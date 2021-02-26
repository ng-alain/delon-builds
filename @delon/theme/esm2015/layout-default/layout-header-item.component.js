import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWhlYWRlci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC1oZWFkZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVd6RSxNQUFNLE9BQU8sZ0NBQWdDO0lBUjdDO1FBV1csV0FBTSxHQUFrQyxNQUFNLENBQUM7UUFDL0MsY0FBUyxHQUFxQyxPQUFPLENBQUM7SUFDakUsQ0FBQzs7O1lBYkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRTs7OztHQUlUO2FBQ0Y7OzttQkFFRSxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtxQkFFbEMsS0FBSzt3QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1EaXJlY3Rpb24sIExheW91dERlZmF1bHRIZWFkZXJJdGVtSGlkZGVuIH0gZnJvbSAnLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xheW91dC1kZWZhdWx0LWhlYWRlci1pdGVtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI2hvc3Q+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1Db21wb25lbnQge1xuICBAVmlld0NoaWxkKCdob3N0JywgeyBzdGF0aWM6IHRydWUgfSkgaG9zdDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKSBoaWRkZW46IExheW91dERlZmF1bHRIZWFkZXJJdGVtSGlkZGVuID0gJ25vbmUnO1xuICBASW5wdXQoKSBkaXJlY3Rpb246IExheW91dERlZmF1bHRIZWFkZXJJdGVtRGlyZWN0aW9uID0gJ3JpZ2h0Jztcbn1cbiJdfQ==