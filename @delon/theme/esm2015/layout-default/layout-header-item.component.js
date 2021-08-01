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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWhlYWRlci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC1oZWFkZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWXpFLE1BQU0sT0FBTyxnQ0FBZ0M7SUFSN0M7UUFXVyxXQUFNLEdBQWtDLE1BQU0sQ0FBQztRQUMvQyxjQUFTLEdBQXFDLE9BQU8sQ0FBQztJQUNqRSxDQUFDOzs7WUFiQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFOzs7O0dBSVQ7YUFDRjs7O21CQUVFLFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3FCQUVsQyxLQUFLO3dCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJJdGVtRGlyZWN0aW9uLCBMYXlvdXREZWZhdWx0SGVhZGVySXRlbUhpZGRlbiB9IGZyb20gJy4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYXlvdXQtZGVmYXVsdC1oZWFkZXItaXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNob3N0PlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1Db21wb25lbnQge1xuICBAVmlld0NoaWxkKCdob3N0JywgeyBzdGF0aWM6IHRydWUgfSkgaG9zdDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KCkgaGlkZGVuOiBMYXlvdXREZWZhdWx0SGVhZGVySXRlbUhpZGRlbiA9ICdub25lJztcbiAgQElucHV0KCkgZGlyZWN0aW9uOiBMYXlvdXREZWZhdWx0SGVhZGVySXRlbURpcmVjdGlvbiA9ICdyaWdodCc7XG59XG4iXX0=