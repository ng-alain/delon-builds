import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlUIWidget, DelonFormModule, getData, toBool } from '@delon/form';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
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
        console.log(value);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: TreeSelectWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.1", type: TreeSelectWidget, isStandalone: true, selector: "sf-tree-select", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
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
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i2.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzTreeSelectModule }, { kind: "component", type: i3.NzTreeSelectComponent, selector: "nz-tree-select", inputs: ["nzId", "nzAllowClear", "nzShowExpand", "nzShowLine", "nzDropdownMatchSelectWidth", "nzCheckable", "nzHideUnMatched", "nzShowIcon", "nzShowSearch", "nzDisabled", "nzAsyncData", "nzMultiple", "nzDefaultExpandAll", "nzCheckStrictly", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualHeight", "nzExpandedIcon", "nzNotFoundContent", "nzNodes", "nzOpen", "nzSize", "nzPlaceHolder", "nzDropdownStyle", "nzDropdownClassName", "nzBackdrop", "nzStatus", "nzPlacement", "nzExpandedKeys", "nzDisplayWith", "nzMaxTagCount", "nzMaxTagPlaceholder", "nzTreeTemplate"], outputs: ["nzOpenChange", "nzCleared", "nzRemoved", "nzExpandChange", "nzTreeClick", "nzTreeCheckBoxChange"], exportAs: ["nzTreeSelect"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: TreeSelectWidget, decorators: [{
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
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [FormsModule, DelonFormModule, NzTreeSelectModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL3RyZWUtc2VsZWN0L3dpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBeUIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUd2RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7QUFzRC9ELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxlQUF5QztJQWxEL0U7O1FBc0RFLFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBQzFCLGNBQVMsR0FBRyxLQUFLLENBQUM7S0EyQ25CO2FBL0NpQixRQUFHLEdBQUcsYUFBYSxBQUFoQixDQUFpQjtJQU1wQyxRQUFRO1FBQ04sTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ1AsVUFBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVO1lBQ3pCLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7WUFDeEMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUM7WUFDbkUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztZQUNwQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO1lBQ3RDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7WUFDcEMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztZQUN2QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1lBQ3BDLGFBQWEsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUM7WUFDOUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQztZQUM5QyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQztZQUNwRCxXQUFXLEVBQUUsRUFBRSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNsRSxDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEtBQUssVUFBVSxDQUFDO0lBQ3pELENBQUM7SUFFRCxLQUFLLENBQUMsS0FBYztRQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQThCO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxZQUFZLENBQUMsQ0FBb0I7UUFDL0IsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLE9BQU8sRUFBRSxDQUFDLFlBQVksS0FBSyxVQUFVO1lBQUUsT0FBTztRQUNsRCxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNqQyxDQUFDLENBQUMsSUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxJQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBL0NVLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLGlHQWhEakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkEwQ00sMkRBSU4sV0FBVyw4VkFBRSxlQUFlLHlMQUFFLGtCQUFrQjs7MkZBRS9DLGdCQUFnQjtrQkFsRDVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBMENNO29CQUNoQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLENBQUM7aUJBQzVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0LCBEZWxvbkZvcm1Nb2R1bGUsIFNGU2NoZW1hRW51bSwgU0ZWYWx1ZSwgZ2V0RGF0YSwgdG9Cb29sIH0gZnJvbSAnQGRlbG9uL2Zvcm0nO1xuaW1wb3J0IHsgTnpGb3JtYXRFbWl0RXZlbnQsIE56VHJlZU5vZGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHJlZSc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOelRyZWVTZWxlY3RNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RyZWUtc2VsZWN0JztcblxuaW1wb3J0IHR5cGUgeyBTRlRyZWVTZWxlY3RXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRyZWUtc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGA8c2YtaXRlbS13cmFwXG4gICAgW2lkXT1cImlkXCJcbiAgICBbc2NoZW1hXT1cInNjaGVtYVwiXG4gICAgW3VpXT1cInVpXCJcbiAgICBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiXG4gICAgW2Vycm9yXT1cImVycm9yXCJcbiAgICBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiXG4gID5cbiAgICA8bnotdHJlZS1zZWxlY3RcbiAgICAgIFtueklkXT1cImlkXCJcbiAgICAgIFtuekFsbG93Q2xlYXJdPVwiaS5hbGxvd0NsZWFyXCJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyIVwiXG4gICAgICBbbnpEcm9wZG93blN0eWxlXT1cInVpLmRyb3Bkb3duU3R5bGUhXCJcbiAgICAgIFtuekRyb3Bkb3duQ2xhc3NOYW1lXT1cInVpLmRyb3Bkb3duQ2xhc3NOYW1lXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZSFcIlxuICAgICAgW256RXhwYW5kZWRLZXlzXT1cInVpLmV4cGFuZGVkS2V5cyFcIlxuICAgICAgW256Tm90Rm91bmRDb250ZW50XT1cInVpLm5vdEZvdW5kQ29udGVudFwiXG4gICAgICBbbnpNYXhUYWdDb3VudF09XCJ1aS5tYXhUYWdDb3VudCFcIlxuICAgICAgW256TWF4VGFnUGxhY2Vob2xkZXJdPVwidWkubWF4VGFnUGxhY2Vob2xkZXIgfHwgbnVsbFwiXG4gICAgICBbbnpUcmVlVGVtcGxhdGVdPVwidWkudHJlZVRlbXBsYXRlIVwiXG4gICAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaG93U2VhcmNoXT1cImkuc2hvd1NlYXJjaFwiXG4gICAgICBbbnpTaG93SWNvbl09XCJpLnNob3dJY29uXCJcbiAgICAgIFtuekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aF09XCJpLmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aFwiXG4gICAgICBbbnpNdWx0aXBsZV09XCJpLm11bHRpcGxlXCJcbiAgICAgIFtuekhpZGVVbk1hdGNoZWRdPVwiaS5oaWRlVW5NYXRjaGVkXCJcbiAgICAgIFtuekNoZWNrYWJsZV09XCJpLmNoZWNrYWJsZVwiXG4gICAgICBbbnpTaG93RXhwYW5kXT1cImkuc2hvd0V4cGFuZFwiXG4gICAgICBbbnpTaG93TGluZV09XCJpLnNob3dMaW5lXCJcbiAgICAgIFtuekNoZWNrU3RyaWN0bHldPVwiaS5jaGVja1N0cmljdGx5XCJcbiAgICAgIFtuekFzeW5jRGF0YV09XCJhc3luY0RhdGFcIlxuICAgICAgW256Tm9kZXNdPVwiJGFueShkYXRhKVwiXG4gICAgICBbbnpEZWZhdWx0RXhwYW5kQWxsXT1cImkuZGVmYXVsdEV4cGFuZEFsbFwiXG4gICAgICBbbnpEaXNwbGF5V2l0aF09XCJpLmRpc3BsYXlXaXRoIVwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICBbbnpWaXJ0dWFsSGVpZ2h0XT1cInVpLnZpcnR1YWxIZWlnaHQhXCJcbiAgICAgIFtuelZpcnR1YWxJdGVtU2l6ZV09XCJ1aS52aXJ0dWFsSXRlbVNpemUgfHwgMjhcIlxuICAgICAgW256VmlydHVhbE1heEJ1ZmZlclB4XT1cInVpLnZpcnR1YWxNYXhCdWZmZXJQeCB8fCA1MDBcIlxuICAgICAgW256VmlydHVhbE1pbkJ1ZmZlclB4XT1cInVpLnZpcnR1YWxNaW5CdWZmZXJQeCB8fCAyOFwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobnpFeHBhbmRDaGFuZ2UpPVwiZXhwYW5kQ2hhbmdlKCRldmVudClcIlxuICAgIC8+XG4gIDwvc2YtaXRlbS13cmFwPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIERlbG9uRm9ybU1vZHVsZSwgTnpUcmVlU2VsZWN0TW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBUcmVlU2VsZWN0V2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGVHJlZVNlbGVjdFdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgcmVhZG9ubHkgS0VZID0gJ3RyZWUtc2VsZWN0JztcblxuICBpITogU0ZUcmVlU2VsZWN0V2lkZ2V0U2NoZW1hO1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBhc3luY0RhdGEgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVpIH0gPSB0aGlzO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHVpLmFsbG93Q2xlYXIsXG4gICAgICBzaG93U2VhcmNoOiB0b0Jvb2wodWkuc2hvd1NlYXJjaCwgZmFsc2UpLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0b0Jvb2wodWkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLCB0cnVlKSxcbiAgICAgIG11bHRpcGxlOiB0b0Jvb2wodWkubXVsdGlwbGUsIGZhbHNlKSxcbiAgICAgIGNoZWNrYWJsZTogdG9Cb29sKHVpLmNoZWNrYWJsZSwgZmFsc2UpLFxuICAgICAgc2hvd0ljb246IHRvQm9vbCh1aS5zaG93SWNvbiwgZmFsc2UpLFxuICAgICAgc2hvd0V4cGFuZDogdG9Cb29sKHVpLnNob3dFeHBhbmQsIHRydWUpLFxuICAgICAgc2hvd0xpbmU6IHRvQm9vbCh1aS5zaG93TGluZSwgZmFsc2UpLFxuICAgICAgY2hlY2tTdHJpY3RseTogdG9Cb29sKHVpLmNoZWNrU3RyaWN0bHksIGZhbHNlKSxcbiAgICAgIGhpZGVVbk1hdGNoZWQ6IHRvQm9vbCh1aS5oaWRlVW5NYXRjaGVkLCBmYWxzZSksXG4gICAgICBkZWZhdWx0RXhwYW5kQWxsOiB0b0Jvb2wodWkuZGVmYXVsdEV4cGFuZEFsbCwgZmFsc2UpLFxuICAgICAgZGlzcGxheVdpdGg6IHVpLmRpc3BsYXlXaXRoIHx8ICgobm9kZTogTnpUcmVlTm9kZSkgPT4gbm9kZS50aXRsZSlcbiAgICB9O1xuICAgIHRoaXMuYXN5bmNEYXRhID0gdHlwZW9mIHVpLmV4cGFuZENoYW5nZSA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdmFsdWUpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZSh2YWx1ZTogTnpTYWZlQW55W10gfCBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZSh2YWx1ZSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBleHBhbmRDaGFuZ2UoZTogTnpGb3JtYXRFbWl0RXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVpIH0gPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgdWkuZXhwYW5kQ2hhbmdlICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG4gICAgdWkuZXhwYW5kQ2hhbmdlKGUpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgZS5ub2RlIS5jbGVhckNoaWxkcmVuKCk7XG4gICAgICBlLm5vZGUhLmFkZENoaWxkcmVuKHJlcyk7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19