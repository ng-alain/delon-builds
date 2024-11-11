import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlUIWidget, DelonFormModule, getData } from '@delon/form';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@delon/form";
import * as i3 from "ng-zorro-antd/segmented";
export class SegmentedWidget extends ControlUIWidget {
    static { this.KEY = 'segmented'; }
    get list() {
        return this._list ?? [];
    }
    reset(value) {
        getData(this.schema, this.ui, value).subscribe(list => {
            this._list = list;
            this.detectChanges();
        });
    }
    valueChange(index) {
        if (this.ui.valueChange) {
            this.ui.valueChange({ index, item: this.list[index] });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: SegmentedWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.11", type: SegmentedWidget, isStandalone: true, selector: "sf-segmented", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-segmented
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzSize]="$any(ui.size)"
      [nzBlock]="ui.block ?? false"
      [nzOptions]="list"
      [nzLabelTemplate]="ui.labelTemplate ?? null"
      (nzValueChange)="valueChange($event)"
    />
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i2.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzSegmentedModule }, { kind: "component", type: i3.NzSegmentedComponent, selector: "nz-segmented", inputs: ["nzBlock", "nzDisabled", "nzOptions", "nzSize", "nzLabelTemplate"], outputs: ["nzValueChange"], exportAs: ["nzSegmented"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: SegmentedWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-segmented',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-segmented
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzSize]="$any(ui.size)"
      [nzBlock]="ui.block ?? false"
      [nzOptions]="list"
      [nzLabelTemplate]="ui.labelTemplate ?? null"
      (nzValueChange)="valueChange($event)"
    />
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [FormsModule, DelonFormModule, NzSegmentedModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL3NlZ21lbnRlZC93aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQVcsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBc0IsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUE4QmhGLE1BQU0sT0FBTyxlQUFnQixTQUFRLGVBQXdDO2FBQzNELFFBQUcsR0FBRyxXQUFXLEFBQWQsQ0FBZTtJQUVsQyxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBYztRQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQTBCLENBQUM7WUFDeEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQVksRUFBRSxDQUFDLENBQUM7UUFDcEUsQ0FBQztJQUNILENBQUM7K0dBbEJVLGVBQWU7bUdBQWYsZUFBZSwrRkF4QmhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBa0JNLDJEQUlOLFdBQVcsOFZBQUUsZUFBZSx5TEFBRSxpQkFBaUI7OzRGQUU5QyxlQUFlO2tCQTFCM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBa0JNO29CQUNoQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLENBQUM7aUJBQzNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCwgRGVsb25Gb3JtTW9kdWxlLCBTRlZhbHVlLCBnZXREYXRhIH0gZnJvbSAnQGRlbG9uL2Zvcm0nO1xuaW1wb3J0IHsgTnpTZWdtZW50ZWRNb2R1bGUsIE56U2VnbWVudGVkT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2VnbWVudGVkJztcblxuaW1wb3J0IHR5cGUgeyBTRlNlZ21lbnRlZFdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc2VnbWVudGVkJyxcbiAgdGVtcGxhdGU6IGA8c2YtaXRlbS13cmFwXG4gICAgW2lkXT1cImlkXCJcbiAgICBbc2NoZW1hXT1cInNjaGVtYVwiXG4gICAgW3VpXT1cInVpXCJcbiAgICBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiXG4gICAgW2Vycm9yXT1cImVycm9yXCJcbiAgICBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiXG4gID5cbiAgICA8bnotc2VnbWVudGVkXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwiJGFueSh1aS5zaXplKVwiXG4gICAgICBbbnpCbG9ja109XCJ1aS5ibG9jayA/PyBmYWxzZVwiXG4gICAgICBbbnpPcHRpb25zXT1cImxpc3RcIlxuICAgICAgW256TGFiZWxUZW1wbGF0ZV09XCJ1aS5sYWJlbFRlbXBsYXRlID8/IG51bGxcIlxuICAgICAgKG56VmFsdWVDaGFuZ2UpPVwidmFsdWVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgLz5cbiAgPC9zZi1pdGVtLXdyYXA+YCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgRGVsb25Gb3JtTW9kdWxlLCBOelNlZ21lbnRlZE1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgU2VnbWVudGVkV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGU2VnbWVudGVkV2lkZ2V0U2NoZW1hPiB7XG4gIHN0YXRpYyByZWFkb25seSBLRVkgPSAnc2VnbWVudGVkJztcbiAgcHJpdmF0ZSBfbGlzdD86IE56U2VnbWVudGVkT3B0aW9ucztcbiAgZ2V0IGxpc3QoKTogTnpTZWdtZW50ZWRPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdCA/PyBbXTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdmFsdWUpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuX2xpc3QgPSBsaXN0IGFzIE56U2VnbWVudGVkT3B0aW9ucztcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLnZhbHVlQ2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLnZhbHVlQ2hhbmdlKHsgaW5kZXgsIGl0ZW06IHRoaXMubGlzdFtpbmRleF0gYXMgU0ZWYWx1ZSB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==