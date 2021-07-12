import { Component, ViewChild } from '@angular/core';
export class RangePickerShortcutTplComponent {
    constructor() {
        this.list = [];
    }
    click(_) { }
}
RangePickerShortcutTplComponent.decorators = [
    { type: Component, args: [{
                selector: '',
                template: `
    <ng-template #tpl>
      <a *ngFor="let i of list; let first = first" (click)="click(i)" [innerHTML]="i._text" [ngClass]="{ 'ml-sm': !first }"></a>
    </ng-template>
  `
            },] }
];
RangePickerShortcutTplComponent.propDecorators = {
    tpl: [{ type: ViewChild, args: ['tpl', { static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Utc2hvcnRjdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2RhdGUtcGlja2VyL3JhbmdlLXNob3J0Y3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFlLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVdsRSxNQUFNLE9BQU8sK0JBQStCO0lBUjVDO1FBWUUsU0FBSSxHQUF1QyxFQUFFLENBQUM7SUFHaEQsQ0FBQztJQURDLEtBQUssQ0FBQyxDQUFtQyxJQUFTLENBQUM7OztZQWRwRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osUUFBUSxFQUFFOzs7O0dBSVQ7YUFDRjs7O2tCQUVFLFNBQVMsU0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICN0cGw+XG4gICAgICA8YSAqbmdGb3I9XCJsZXQgaSBvZiBsaXN0OyBsZXQgZmlyc3QgPSBmaXJzdFwiIChjbGljayk9XCJjbGljayhpKVwiIFtpbm5lckhUTUxdPVwiaS5fdGV4dFwiIFtuZ0NsYXNzXT1cInsgJ21sLXNtJzogIWZpcnN0IH1cIj48L2E+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VQaWNrZXJTaG9ydGN1dFRwbENvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ3RwbCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHRwbCE6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIGxpc3Q6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtW10gPSBbXTtcblxuICBjbGljayhfOiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSk6IHZvaWQge31cbn1cbiJdfQ==