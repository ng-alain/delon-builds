import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget, getData, toBool } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@delon/form";
import * as i3 from "ng-zorro-antd/tree-select";
export class TreeSelectWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
        this.asyncData = false;
    }
    static { this.KEY = 'tree-select'; }
    ngOnInit() {
        const { ui } = this;
        this.i = {
            allowClear: ui.allowClear,
            showSearch: toBool(ui.showSearch, false),
            dropdownMatchSelectWidth: toBool(ui.dropdownMatchSelectWidth, true),
            multiple: toBool(ui.multiple, false),
            checkable: toBool(ui.checkable, false),
            showIcon: toBool(ui.showIcon, false),
            showExpand: toBool(ui.showExpand, true),
            showLine: toBool(ui.showLine, false),
            checkStrictly: toBool(ui.checkStrictly, false),
            hideUnMatched: toBool(ui.hideUnMatched, false),
            defaultExpandAll: toBool(ui.defaultExpandAll, false),
            displayWith: ui.displayWith || ((node) => node.title)
        };
        this.asyncData = typeof ui.expandChange === 'function';
    }
    reset(value) {
        getData(this.schema, this.ui, value).subscribe(list => {
            this.data = list;
            this.detectChanges();
        });
    }
    change(value) {
        if (this.ui.change)
            this.ui.change(value);
        this.setValue(value);
    }
    expandChange(e) {
        const { ui } = this;
        if (typeof ui.expandChange !== 'function')
            return;
        ui.expandChange(e).subscribe(res => {
            e.node.clearChildren();
            e.node.addChildren(res);
            this.detectChanges();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TreeSelectWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: TreeSelectWidget, selector: "sf-tree-select", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-tree-select
      [nzId]="id"
      [nzAllowClear]="i.allowClear"
      [nzPlaceHolder]="ui.placeholder!"
      [nzDropdownStyle]="ui.dropdownStyle!"
      [nzDropdownClassName]="ui.dropdownClassName"
      [nzSize]="ui.size!"
      [nzExpandedKeys]="ui.expandedKeys!"
      [nzNotFoundContent]="ui.notFoundContent"
      [nzMaxTagCount]="ui.maxTagCount!"
      [nzMaxTagPlaceholder]="ui.maxTagPlaceholder || null"
      [nzTreeTemplate]="ui.treeTemplate!"
      [nzDisabled]="disabled"
      [nzShowSearch]="i.showSearch"
      [nzShowIcon]="i.showIcon"
      [nzDropdownMatchSelectWidth]="i.dropdownMatchSelectWidth"
      [nzMultiple]="i.multiple"
      [nzHideUnMatched]="i.hideUnMatched"
      [nzCheckable]="i.checkable"
      [nzShowExpand]="i.showExpand"
      [nzShowLine]="i.showLine"
      [nzCheckStrictly]="i.checkStrictly"
      [nzAsyncData]="asyncData"
      [nzNodes]="$any(data)"
      [nzDefaultExpandAll]="i.defaultExpandAll"
      [nzDisplayWith]="i.displayWith!"
      [ngModel]="value"
      [nzVirtualHeight]="ui.virtualHeight!"
      [nzVirtualItemSize]="ui.virtualItemSize || 28"
      [nzVirtualMaxBufferPx]="ui.virtualMaxBufferPx || 500"
      [nzVirtualMinBufferPx]="ui.virtualMinBufferPx || 28"
      (ngModelChange)="change($event)"
      (nzExpandChange)="expandChange($event)"
    />
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "component", type: i3.NzTreeSelectComponent, selector: "nz-tree-select", inputs: ["nzId", "nzAllowClear", "nzShowExpand", "nzShowLine", "nzDropdownMatchSelectWidth", "nzCheckable", "nzHideUnMatched", "nzShowIcon", "nzShowSearch", "nzDisabled", "nzAsyncData", "nzMultiple", "nzDefaultExpandAll", "nzCheckStrictly", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualHeight", "nzExpandedIcon", "nzNotFoundContent", "nzNodes", "nzOpen", "nzSize", "nzPlaceHolder", "nzDropdownStyle", "nzDropdownClassName", "nzBackdrop", "nzStatus", "nzPlacement", "nzExpandedKeys", "nzDisplayWith", "nzMaxTagCount", "nzMaxTagPlaceholder", "nzTreeTemplate"], outputs: ["nzOpenChange", "nzCleared", "nzRemoved", "nzExpandChange", "nzTreeClick", "nzTreeCheckBoxChange"], exportAs: ["nzTreeSelect"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TreeSelectWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-tree-select',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-tree-select
      [nzId]="id"
      [nzAllowClear]="i.allowClear"
      [nzPlaceHolder]="ui.placeholder!"
      [nzDropdownStyle]="ui.dropdownStyle!"
      [nzDropdownClassName]="ui.dropdownClassName"
      [nzSize]="ui.size!"
      [nzExpandedKeys]="ui.expandedKeys!"
      [nzNotFoundContent]="ui.notFoundContent"
      [nzMaxTagCount]="ui.maxTagCount!"
      [nzMaxTagPlaceholder]="ui.maxTagPlaceholder || null"
      [nzTreeTemplate]="ui.treeTemplate!"
      [nzDisabled]="disabled"
      [nzShowSearch]="i.showSearch"
      [nzShowIcon]="i.showIcon"
      [nzDropdownMatchSelectWidth]="i.dropdownMatchSelectWidth"
      [nzMultiple]="i.multiple"
      [nzHideUnMatched]="i.hideUnMatched"
      [nzCheckable]="i.checkable"
      [nzShowExpand]="i.showExpand"
      [nzShowLine]="i.showLine"
      [nzCheckStrictly]="i.checkStrictly"
      [nzAsyncData]="asyncData"
      [nzNodes]="$any(data)"
      [nzDefaultExpandAll]="i.defaultExpandAll"
      [nzDisplayWith]="i.displayWith!"
      [ngModel]="value"
      [nzVirtualHeight]="ui.virtualHeight!"
      [nzVirtualItemSize]="ui.virtualItemSize || 28"
      [nzVirtualMaxBufferPx]="ui.virtualMaxBufferPx || 500"
      [nzVirtualMinBufferPx]="ui.virtualMinBufferPx || 28"
      (ngModelChange)="change($event)"
      (nzExpandChange)="expandChange($event)"
    />
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL3RyZWUtc2VsZWN0L3dpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxlQUFlLEVBQXlCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7O0FBcUR0RixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsZUFBeUM7SUFoRC9FOztRQW9ERSxTQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUMxQixjQUFTLEdBQUcsS0FBSyxDQUFDO0tBMENuQjthQTlDaUIsUUFBRyxHQUFHLGFBQWEsQUFBaEIsQ0FBaUI7SUFNcEMsUUFBUTtRQUNOLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLFVBQVUsRUFBRSxFQUFFLENBQUMsVUFBVTtZQUN6QixVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO1lBQ3hDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDO1lBQ25FLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7WUFDcEMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztZQUN0QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1lBQ3BDLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztZQUNwQyxhQUFhLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDO1lBQzlDLGFBQWEsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUM7WUFDOUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUM7WUFDcEQsV0FBVyxFQUFFLEVBQUUsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLElBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbEUsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxFQUFFLENBQUMsWUFBWSxLQUFLLFVBQVUsQ0FBQztJQUN6RCxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQWM7UUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUF3QjtRQUM3QixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELFlBQVksQ0FBQyxDQUFvQjtRQUMvQixNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksT0FBTyxFQUFFLENBQUMsWUFBWSxLQUFLLFVBQVU7WUFBRSxPQUFPO1FBQ2xELEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLENBQUMsQ0FBQyxJQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsQ0FBQyxDQUFDLElBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzsrR0E5Q1UsZ0JBQWdCO21HQUFoQixnQkFBZ0IsNkVBOUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQTBDTTs7NEZBSUwsZ0JBQWdCO2tCQWhENUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkEwQ007b0JBQ2hCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQsIFNGU2NoZW1hRW51bSwgU0ZWYWx1ZSwgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnQGRlbG9uL2Zvcm0nO1xuaW1wb3J0IHsgTnpGb3JtYXRFbWl0RXZlbnQsIE56VHJlZU5vZGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHJlZSc7XG5cbmltcG9ydCB0eXBlIHsgU0ZUcmVlU2VsZWN0V2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10cmVlLXNlbGVjdCcsXG4gIHRlbXBsYXRlOiBgPHNmLWl0ZW0td3JhcFxuICAgIFtpZF09XCJpZFwiXG4gICAgW3NjaGVtYV09XCJzY2hlbWFcIlxuICAgIFt1aV09XCJ1aVwiXG4gICAgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIlxuICAgIFtlcnJvcl09XCJlcnJvclwiXG4gICAgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIlxuICA+XG4gICAgPG56LXRyZWUtc2VsZWN0XG4gICAgICBbbnpJZF09XCJpZFwiXG4gICAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgICBbbnpQbGFjZUhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlciFcIlxuICAgICAgW256RHJvcGRvd25TdHlsZV09XCJ1aS5kcm9wZG93blN0eWxlIVwiXG4gICAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemUhXCJcbiAgICAgIFtuekV4cGFuZGVkS2V5c109XCJ1aS5leHBhbmRlZEtleXMhXCJcbiAgICAgIFtuek5vdEZvdW5kQ29udGVudF09XCJ1aS5ub3RGb3VuZENvbnRlbnRcIlxuICAgICAgW256TWF4VGFnQ291bnRdPVwidWkubWF4VGFnQ291bnQhXCJcbiAgICAgIFtuek1heFRhZ1BsYWNlaG9sZGVyXT1cInVpLm1heFRhZ1BsYWNlaG9sZGVyIHx8IG51bGxcIlxuICAgICAgW256VHJlZVRlbXBsYXRlXT1cInVpLnRyZWVUZW1wbGF0ZSFcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2hvd1NlYXJjaF09XCJpLnNob3dTZWFyY2hcIlxuICAgICAgW256U2hvd0ljb25dPVwiaS5zaG93SWNvblwiXG4gICAgICBbbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhdPVwiaS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhcIlxuICAgICAgW256TXVsdGlwbGVdPVwiaS5tdWx0aXBsZVwiXG4gICAgICBbbnpIaWRlVW5NYXRjaGVkXT1cImkuaGlkZVVuTWF0Y2hlZFwiXG4gICAgICBbbnpDaGVja2FibGVdPVwiaS5jaGVja2FibGVcIlxuICAgICAgW256U2hvd0V4cGFuZF09XCJpLnNob3dFeHBhbmRcIlxuICAgICAgW256U2hvd0xpbmVdPVwiaS5zaG93TGluZVwiXG4gICAgICBbbnpDaGVja1N0cmljdGx5XT1cImkuY2hlY2tTdHJpY3RseVwiXG4gICAgICBbbnpBc3luY0RhdGFdPVwiYXN5bmNEYXRhXCJcbiAgICAgIFtuek5vZGVzXT1cIiRhbnkoZGF0YSlcIlxuICAgICAgW256RGVmYXVsdEV4cGFuZEFsbF09XCJpLmRlZmF1bHRFeHBhbmRBbGxcIlxuICAgICAgW256RGlzcGxheVdpdGhdPVwiaS5kaXNwbGF5V2l0aCFcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgW256VmlydHVhbEhlaWdodF09XCJ1aS52aXJ0dWFsSGVpZ2h0IVwiXG4gICAgICBbbnpWaXJ0dWFsSXRlbVNpemVdPVwidWkudmlydHVhbEl0ZW1TaXplIHx8IDI4XCJcbiAgICAgIFtuelZpcnR1YWxNYXhCdWZmZXJQeF09XCJ1aS52aXJ0dWFsTWF4QnVmZmVyUHggfHwgNTAwXCJcbiAgICAgIFtuelZpcnR1YWxNaW5CdWZmZXJQeF09XCJ1aS52aXJ0dWFsTWluQnVmZmVyUHggfHwgMjhcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIlxuICAgICAgKG56RXhwYW5kQ2hhbmdlKT1cImV4cGFuZENoYW5nZSgkZXZlbnQpXCJcbiAgICAvPlxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlU2VsZWN0V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGVHJlZVNlbGVjdFdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgcmVhZG9ubHkgS0VZID0gJ3RyZWUtc2VsZWN0JztcblxuICBpITogU0ZUcmVlU2VsZWN0V2lkZ2V0U2NoZW1hO1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBhc3luY0RhdGEgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVpIH0gPSB0aGlzO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHVpLmFsbG93Q2xlYXIsXG4gICAgICBzaG93U2VhcmNoOiB0b0Jvb2wodWkuc2hvd1NlYXJjaCwgZmFsc2UpLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0b0Jvb2wodWkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLCB0cnVlKSxcbiAgICAgIG11bHRpcGxlOiB0b0Jvb2wodWkubXVsdGlwbGUsIGZhbHNlKSxcbiAgICAgIGNoZWNrYWJsZTogdG9Cb29sKHVpLmNoZWNrYWJsZSwgZmFsc2UpLFxuICAgICAgc2hvd0ljb246IHRvQm9vbCh1aS5zaG93SWNvbiwgZmFsc2UpLFxuICAgICAgc2hvd0V4cGFuZDogdG9Cb29sKHVpLnNob3dFeHBhbmQsIHRydWUpLFxuICAgICAgc2hvd0xpbmU6IHRvQm9vbCh1aS5zaG93TGluZSwgZmFsc2UpLFxuICAgICAgY2hlY2tTdHJpY3RseTogdG9Cb29sKHVpLmNoZWNrU3RyaWN0bHksIGZhbHNlKSxcbiAgICAgIGhpZGVVbk1hdGNoZWQ6IHRvQm9vbCh1aS5oaWRlVW5NYXRjaGVkLCBmYWxzZSksXG4gICAgICBkZWZhdWx0RXhwYW5kQWxsOiB0b0Jvb2wodWkuZGVmYXVsdEV4cGFuZEFsbCwgZmFsc2UpLFxuICAgICAgZGlzcGxheVdpdGg6IHVpLmRpc3BsYXlXaXRoIHx8ICgobm9kZTogTnpUcmVlTm9kZSkgPT4gbm9kZS50aXRsZSlcbiAgICB9O1xuICAgIHRoaXMuYXN5bmNEYXRhID0gdHlwZW9mIHVpLmV4cGFuZENoYW5nZSA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdmFsdWUpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZSh2YWx1ZTogc3RyaW5nW10gfCBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGV4cGFuZENoYW5nZShlOiBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdWkgfSA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiB1aS5leHBhbmRDaGFuZ2UgIT09ICdmdW5jdGlvbicpIHJldHVybjtcbiAgICB1aS5leHBhbmRDaGFuZ2UoZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBlLm5vZGUhLmNsZWFyQ2hpbGRyZW4oKTtcbiAgICAgIGUubm9kZSEuYWRkQ2hpbGRyZW4ocmVzKTtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=