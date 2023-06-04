import { Component, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
class RangePickerShortcutTplComponent {
    constructor() {
        this.list = [];
    }
    click(_) { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: RangePickerShortcutTplComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: RangePickerShortcutTplComponent, selector: "ng-component", viewQueries: [{ propertyName: "tpl", first: true, predicate: ["tpl"], descendants: true, static: true }], ngImport: i0, template: `
    <ng-template #tpl>
      <a
        *ngFor="let i of list; let first = first"
        (click)="click(i)"
        [innerHTML]="i._text"
        [ngClass]="{ 'ml-sm': !first }"
      ></a>
    </ng-template>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
export { RangePickerShortcutTplComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: RangePickerShortcutTplComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '',
                    template: `
    <ng-template #tpl>
      <a
        *ngFor="let i of list; let first = first"
        (click)="click(i)"
        [innerHTML]="i._text"
        [ngClass]="{ 'ml-sm': !first }"
      ></a>
    </ng-template>
  `
                }]
        }], propDecorators: { tpl: [{
                type: ViewChild,
                args: ['tpl', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Utc2hvcnRjdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2RhdGUtcGlja2VyL3JhbmdlLXNob3J0Y3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFlLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBSWxFLE1BYWEsK0JBQStCO0lBYjVDO1FBaUJFLFNBQUksR0FBdUMsRUFBRSxDQUFDO0tBRy9DO0lBREMsS0FBSyxDQUFDLENBQW1DLElBQVMsQ0FBQzs4R0FOeEMsK0JBQStCO2tHQUEvQiwrQkFBK0IsOEpBWGhDOzs7Ozs7Ozs7R0FTVDs7U0FFVSwrQkFBK0I7MkZBQS9CLCtCQUErQjtrQkFiM0MsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtvQkFDWixRQUFRLEVBQUU7Ozs7Ozs7OztHQVNUO2lCQUNGOzhCQUdDLEdBQUc7c0JBREYsU0FBUzt1QkFBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI3RwbD5cbiAgICAgIDxhXG4gICAgICAgICpuZ0Zvcj1cImxldCBpIG9mIGxpc3Q7IGxldCBmaXJzdCA9IGZpcnN0XCJcbiAgICAgICAgKGNsaWNrKT1cImNsaWNrKGkpXCJcbiAgICAgICAgW2lubmVySFRNTF09XCJpLl90ZXh0XCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyAnbWwtc20nOiAhZmlyc3QgfVwiXG4gICAgICA+PC9hPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VQaWNrZXJTaG9ydGN1dFRwbENvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ3RwbCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHRwbCE6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIGxpc3Q6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtW10gPSBbXTtcblxuICBjbGljayhfOiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSk6IHZvaWQge31cbn1cbiJdfQ==