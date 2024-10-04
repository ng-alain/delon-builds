import { Component, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
export class RangePickerShortcutTplComponent {
    constructor() {
        this.list = [];
    }
    click(_) { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: RangePickerShortcutTplComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.7", type: RangePickerShortcutTplComponent, isStandalone: true, selector: "ng-component", viewQueries: [{ propertyName: "tpl", first: true, predicate: ["tpl"], descendants: true, static: true }], ngImport: i0, template: `
    <ng-template #tpl>
      @for (i of list; track $index) {
        <a (click)="click(i)" [innerHTML]="i._text" [class.ml-sm]="!$first"></a>
      }
    </ng-template>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: RangePickerShortcutTplComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '',
                    template: `
    <ng-template #tpl>
      @for (i of list; track $index) {
        <a (click)="click(i)" [innerHTML]="i._text" [class.ml-sm]="!$first"></a>
      }
    </ng-template>
  `,
                    standalone: true
                }]
        }], propDecorators: { tpl: [{
                type: ViewChild,
                args: ['tpl', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Utc2hvcnRjdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2RhdGUtcGlja2VyL3JhbmdlLXNob3J0Y3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFlLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFlbEUsTUFBTSxPQUFPLCtCQUErQjtJQVg1QztRQWVFLFNBQUksR0FBdUMsRUFBRSxDQUFDO0tBRy9DO0lBREMsS0FBSyxDQUFDLENBQW1DLElBQVMsQ0FBQzs4R0FOeEMsK0JBQStCO2tHQUEvQiwrQkFBK0Isa0xBVGhDOzs7Ozs7R0FNVDs7MkZBR1UsK0JBQStCO2tCQVgzQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxFQUFFO29CQUNaLFFBQVEsRUFBRTs7Ozs7O0dBTVQ7b0JBQ0QsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUdVLEdBQUc7c0JBRFgsU0FBUzt1QkFBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI3RwbD5cbiAgICAgIEBmb3IgKGkgb2YgbGlzdDsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgIDxhIChjbGljayk9XCJjbGljayhpKVwiIFtpbm5lckhUTUxdPVwiaS5fdGV4dFwiIFtjbGFzcy5tbC1zbV09XCIhJGZpcnN0XCI+PC9hPlxuICAgICAgfVxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VQaWNrZXJTaG9ydGN1dFRwbENvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ3RwbCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHJlYWRvbmx5IHRwbCE6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIGxpc3Q6IEFsYWluRGF0ZVJhbmdlUGlja2VyU2hvcnRjdXRJdGVtW10gPSBbXTtcblxuICBjbGljayhfOiBBbGFpbkRhdGVSYW5nZVBpY2tlclNob3J0Y3V0SXRlbSk6IHZvaWQge31cbn1cbiJdfQ==