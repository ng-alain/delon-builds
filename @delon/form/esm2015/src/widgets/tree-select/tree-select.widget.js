/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
import { toBool, getData } from '../../utils';
import { NzTreeNode } from 'ng-zorro-antd';
import { map } from 'rxjs/operators';
import { deepCopy } from '@delon/util';
export class TreeSelectWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    /**
     * @return {?}
     */
    dc() {
        // Muse wait `nz-tree-select` write values
        // https://github.com/NG-ZORRO/ng-zorro-antd/issues/2316
        setTimeout(() => this.detectChanges(), 1000);
    }
    /**
     * @param {?} list
     * @return {?}
     */
    tranData(list) {
        return list.map(node => new NzTreeNode((/** @type {?} */ (deepCopy(node)))));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { ui } = this;
        this.i = {
            allowClear: ui.allowClear,
            showSearch: toBool(ui.showSearch, false),
            dropdownMatchSelectWidth: toBool(ui.dropdownMatchSelectWidth, true),
            multiple: toBool(ui.multiple, false),
            checkable: toBool(ui.checkable, false),
            showExpand: toBool(ui.showExpand, true),
            showLine: toBool(ui.showLine, false),
            asyncData: typeof ui.expandChange === 'function',
            defaultExpandAll: toBool(ui.defaultExpandAll, false),
            defaultExpandedKeys: ui.defaultExpandedKeys || [],
            displayWith: ui.displayWith || ((node) => node.title),
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        getData(this.schema, this.ui, this.formProperty.formData)
            .pipe(map(list => this.tranData(list)))
            .subscribe(list => {
            this.data = list;
            this.dc();
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    change(value) {
        if (this.ui.change)
            this.ui.change(value);
        this.setValue(value);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    expandChange(e) {
        const { ui } = this;
        if (typeof ui.expandChange !== 'function')
            return;
        ui.expandChange(e)
            .pipe(map((list) => this.tranData(list)))
            .subscribe(res => {
            e.node.clearChildren();
            e.node.addChildren(res);
            this.dc();
        });
    }
}
TreeSelectWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-tree-select',
                template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <nz-tree-select
      [nzAllowClear]="i.allowClear"
      [nzPlaceHolder]="ui.placeholder"
      [nzDisabled]="disabled"
      [nzShowSearch]="i.showSearch"
      [nzDropdownMatchSelectWidth]="i.dropdownMatchSelectWidth"
      [nzDropdownStyle]="ui.dropdownStyle"
      [nzMultiple]="i.multiple"
      [nzSize]="ui.size"
      [nzCheckable]="i.checkable"
      [nzShowExpand]="i.showExpand"
      [nzShowLine]="i.showLine"
      [nzAsyncData]="i.asyncData"
      [nzNodes]="data"
      [nzDefaultExpandAll]="i.defaultExpandAll"
      [nzDefaultExpandedKeys]="i.defaultExpandedKeys"
      [nzDisplayWith]="i.displayWith"
      [ngModel]="value"
      (ngModelChange)="change($event)"
      (nzExpandChange)="expandChange($event)">
    </nz-tree-select>

  </sf-item-wrap>
  `
            }] }
];
if (false) {
    /** @type {?} */
    TreeSelectWidget.prototype.i;
    /** @type {?} */
    TreeSelectWidget.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1zZWxlY3Qud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90cmVlLXNlbGVjdC90cmVlLXNlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQStCdkMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGFBQWE7SUE3Qm5EOztRQStCRSxTQUFJLEdBQW1CLEVBQUUsQ0FBQztJQXNENUIsQ0FBQzs7OztJQXBEUyxFQUFFO1FBQ1IsMENBQTBDO1FBQzFDLHdEQUF3RDtRQUN4RCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRU8sUUFBUSxDQUFDLElBQW9CO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLG1CQUFBLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBTyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBRUQsUUFBUTtjQUNBLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSTtRQUNuQixJQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ1AsVUFBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVO1lBQ3pCLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7WUFDeEMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUM7WUFDbkUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztZQUNwQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO1lBQ3RDLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztZQUNwQyxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUMsWUFBWSxLQUFLLFVBQVU7WUFDaEQsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUM7WUFDcEQsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLG1CQUFtQixJQUFJLEVBQUU7WUFDakQsV0FBVyxFQUFFLEVBQUUsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLElBQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbEUsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEtBQVU7UUFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO2FBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDdEMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBVTtRQUNmLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxDQUFvQjtjQUN6QixFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUk7UUFDbkIsSUFBSSxPQUFPLEVBQUUsQ0FBQyxZQUFZLEtBQUssVUFBVTtZQUFFLE9BQU87UUFDbEQsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7YUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBb0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3hELFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNmLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7WUFwRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCVDthQUNGOzs7O0lBRUMsNkJBQU87O0lBQ1AsZ0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IHRvQm9vbCwgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IE56VHJlZU5vZGUsIE56Rm9ybWF0RW1pdEV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdHJlZS1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuICAgIDxuei10cmVlLXNlbGVjdFxuICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2hvd1NlYXJjaF09XCJpLnNob3dTZWFyY2hcIlxuICAgICAgW256RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXT1cImkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXCJcbiAgICAgIFtuekRyb3Bkb3duU3R5bGVdPVwidWkuZHJvcGRvd25TdHlsZVwiXG4gICAgICBbbnpNdWx0aXBsZV09XCJpLm11bHRpcGxlXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbnpDaGVja2FibGVdPVwiaS5jaGVja2FibGVcIlxuICAgICAgW256U2hvd0V4cGFuZF09XCJpLnNob3dFeHBhbmRcIlxuICAgICAgW256U2hvd0xpbmVdPVwiaS5zaG93TGluZVwiXG4gICAgICBbbnpBc3luY0RhdGFdPVwiaS5hc3luY0RhdGFcIlxuICAgICAgW256Tm9kZXNdPVwiZGF0YVwiXG4gICAgICBbbnpEZWZhdWx0RXhwYW5kQWxsXT1cImkuZGVmYXVsdEV4cGFuZEFsbFwiXG4gICAgICBbbnpEZWZhdWx0RXhwYW5kZWRLZXlzXT1cImkuZGVmYXVsdEV4cGFuZGVkS2V5c1wiXG4gICAgICBbbnpEaXNwbGF5V2l0aF09XCJpLmRpc3BsYXlXaXRoXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuekV4cGFuZENoYW5nZSk9XCJleHBhbmRDaGFuZ2UoJGV2ZW50KVwiPlxuICAgIDwvbnotdHJlZS1zZWxlY3Q+XG5cbiAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaTogYW55O1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuXG4gIHByaXZhdGUgZGMoKSB7XG4gICAgLy8gTXVzZSB3YWl0IGBuei10cmVlLXNlbGVjdGAgd3JpdGUgdmFsdWVzXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzIzMTZcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGV0ZWN0Q2hhbmdlcygpLCAxMDAwKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbkRhdGEobGlzdDogU0ZTY2hlbWFFbnVtW10pIHtcbiAgICByZXR1cm4gbGlzdC5tYXAobm9kZSA9PiBuZXcgTnpUcmVlTm9kZShkZWVwQ29weShub2RlKSBhcyBhbnkpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdWkgfSA9IHRoaXM7XG4gICAgdGhpcy5pID0ge1xuICAgICAgYWxsb3dDbGVhcjogdWkuYWxsb3dDbGVhcixcbiAgICAgIHNob3dTZWFyY2g6IHRvQm9vbCh1aS5zaG93U2VhcmNoLCBmYWxzZSksXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRvQm9vbCh1aS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsIHRydWUpLFxuICAgICAgbXVsdGlwbGU6IHRvQm9vbCh1aS5tdWx0aXBsZSwgZmFsc2UpLFxuICAgICAgY2hlY2thYmxlOiB0b0Jvb2wodWkuY2hlY2thYmxlLCBmYWxzZSksXG4gICAgICBzaG93RXhwYW5kOiB0b0Jvb2wodWkuc2hvd0V4cGFuZCwgdHJ1ZSksXG4gICAgICBzaG93TGluZTogdG9Cb29sKHVpLnNob3dMaW5lLCBmYWxzZSksXG4gICAgICBhc3luY0RhdGE6IHR5cGVvZiB1aS5leHBhbmRDaGFuZ2UgPT09ICdmdW5jdGlvbicsXG4gICAgICBkZWZhdWx0RXhwYW5kQWxsOiB0b0Jvb2wodWkuZGVmYXVsdEV4cGFuZEFsbCwgZmFsc2UpLFxuICAgICAgZGVmYXVsdEV4cGFuZGVkS2V5czogdWkuZGVmYXVsdEV4cGFuZGVkS2V5cyB8fCBbXSxcbiAgICAgIGRpc3BsYXlXaXRoOiB1aS5kaXNwbGF5V2l0aCB8fCAoKG5vZGU6IE56VHJlZU5vZGUpID0+IG5vZGUudGl0bGUpLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpXG4gICAgICAucGlwZShtYXAobGlzdCA9PiB0aGlzLnRyYW5EYXRhKGxpc3QpKSlcbiAgICAgIC5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuZGMoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGV4cGFuZENoYW5nZShlOiBOekZvcm1hdEVtaXRFdmVudCkge1xuICAgIGNvbnN0IHsgdWkgfSA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiB1aS5leHBhbmRDaGFuZ2UgIT09ICdmdW5jdGlvbicpIHJldHVybjtcbiAgICB1aS5leHBhbmRDaGFuZ2UoZSlcbiAgICAgIC5waXBlKG1hcCgobGlzdDogU0ZTY2hlbWFFbnVtW10pID0+IHRoaXMudHJhbkRhdGEobGlzdCkpKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBlLm5vZGUuY2xlYXJDaGlsZHJlbigpO1xuICAgICAgICBlLm5vZGUuYWRkQ2hpbGRyZW4ocmVzKTtcbiAgICAgICAgdGhpcy5kYygpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==