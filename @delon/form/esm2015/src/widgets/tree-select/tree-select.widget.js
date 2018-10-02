/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        return new Promise(resolve => {
            setTimeout(() => {
                this.detectChanges();
                resolve();
            }, 101);
        });
    }
    /**
     * @param {?} list
     * @return {?}
     */
    tranData(list) {
        return list.map(node => new NzTreeNode(/** @type {?} */ (deepCopy(node))));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { ui } = this;
        this.i = {
            allowClear: ui["allowClear"],
            showSearch: toBool(ui["showSearch"], false),
            dropdownMatchSelectWidth: toBool(ui["dropdownMatchSelectWidth"], true),
            multiple: toBool(ui["multiple"], false),
            checkable: toBool(ui["checkable"], false),
            showExpand: toBool(ui["showExpand"], true),
            showLine: toBool(ui["showLine"], false),
            asyncData: typeof ui["expandChange"] === 'function',
            defaultExpandAll: toBool(ui["defaultExpandAll"], false),
            displayWith: ui["displayWith"] || ((node) => node.title),
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
        if (this.ui["change"])
            this.ui["change"](value);
        this.setValue(value);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    expandChange(e) {
        const { ui } = this;
        if (typeof ui["expandChange"] !== 'function')
            return;
        ui["expandChange"](e)
            .pipe(map((list) => this.tranData(list)))
            .subscribe(res => {
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
      [nzDefaultExpandedKeys]="ui.defaultExpandedKeys"
      [nzDisplayWith]="i.displayWith"
      [ngModel]="value"
      (ngModelChange)="change($event)"
      (nzExpandChange)="expandChange($event)">
    </nz-tree-select>

  </sf-item-wrap>
  `,
                preserveWhitespaces: false
            }] }
];
if (false) {
    /** @type {?} */
    TreeSelectWidget.prototype.i;
    /** @type {?} */
    TreeSelectWidget.prototype.data;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1zZWxlY3Qud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy90cmVlLXNlbGVjdC90cmVlLXNlbGVjdC53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQWdDdkMsTUFBTSx1QkFBd0IsU0FBUSxhQUFhOzs7b0JBRTFCLEVBQUU7Ozs7O0lBRWpCLEVBQUU7O1FBRVIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMzQixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsT0FBTyxFQUFFLENBQUM7YUFDWCxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1QsQ0FBQyxDQUFDOzs7Ozs7SUFHRyxRQUFRLENBQUMsSUFBb0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxVQUFVLG1CQUFDLFFBQVEsQ0FBQyxJQUFJLENBQVEsRUFBQyxDQUFDLENBQUM7Ozs7O0lBR2pFLFFBQVE7UUFDTixNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxVQUFVLEVBQUUsRUFBRSxjQUFXO1lBQ3pCLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxnQkFBYSxLQUFLLENBQUM7WUFDeEMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLEVBQUUsOEJBQTJCLElBQUksQ0FBQztZQUNuRSxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsY0FBVyxLQUFLLENBQUM7WUFDcEMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLGVBQVksS0FBSyxDQUFDO1lBQ3RDLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxnQkFBYSxJQUFJLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLGNBQVcsS0FBSyxDQUFDO1lBQ3BDLFNBQVMsRUFBRSxPQUFPLEVBQUUsZ0JBQWEsS0FBSyxVQUFVO1lBQ2hELGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxFQUFFLHNCQUFtQixLQUFLLENBQUM7WUFDcEQsV0FBVyxFQUFFLEVBQUUsbUJBQWdCLENBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2xFLENBQUM7S0FDSDs7Ozs7SUFFRCxLQUFLLENBQUMsS0FBVTtRQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7YUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN0QyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUFDO0tBQ047Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQVU7UUFDZixJQUFJLElBQUksQ0FBQyxFQUFFO1lBQVMsSUFBSSxDQUFDLEVBQUUsV0FBUSxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RCOzs7OztJQUVELFlBQVksQ0FBQyxDQUFvQjtRQUMvQixNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksT0FBTyxFQUFFLGdCQUFhLEtBQUssVUFBVTtZQUFFLE9BQU87UUFDbEQsRUFBRSxpQkFBYyxDQUFDLENBQUM7YUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBb0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3hELFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNmLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztTQUNYLENBQUMsQ0FBQztLQUNOOzs7WUF2RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCVDtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IHRvQm9vbCwgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IE56VHJlZU5vZGUsIE56Rm9ybWF0RW1pdEV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdHJlZS1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuICAgIDxuei10cmVlLXNlbGVjdFxuICAgICAgW256QWxsb3dDbGVhcl09XCJpLmFsbG93Q2xlYXJcIlxuICAgICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2hvd1NlYXJjaF09XCJpLnNob3dTZWFyY2hcIlxuICAgICAgW256RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXT1cImkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXCJcbiAgICAgIFtuekRyb3Bkb3duU3R5bGVdPVwidWkuZHJvcGRvd25TdHlsZVwiXG4gICAgICBbbnpNdWx0aXBsZV09XCJpLm11bHRpcGxlXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbnpDaGVja2FibGVdPVwiaS5jaGVja2FibGVcIlxuICAgICAgW256U2hvd0V4cGFuZF09XCJpLnNob3dFeHBhbmRcIlxuICAgICAgW256U2hvd0xpbmVdPVwiaS5zaG93TGluZVwiXG4gICAgICBbbnpBc3luY0RhdGFdPVwiaS5hc3luY0RhdGFcIlxuICAgICAgW256Tm9kZXNdPVwiZGF0YVwiXG4gICAgICBbbnpEZWZhdWx0RXhwYW5kQWxsXT1cImkuZGVmYXVsdEV4cGFuZEFsbFwiXG4gICAgICBbbnpEZWZhdWx0RXhwYW5kZWRLZXlzXT1cInVpLmRlZmF1bHRFeHBhbmRlZEtleXNcIlxuICAgICAgW256RGlzcGxheVdpdGhdPVwiaS5kaXNwbGF5V2l0aFwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobnpFeHBhbmRDaGFuZ2UpPVwiZXhwYW5kQ2hhbmdlKCRldmVudClcIj5cbiAgICA8L256LXRyZWUtc2VsZWN0PlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgVHJlZVNlbGVjdFdpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpOiBhbnk7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG5cbiAgcHJpdmF0ZSBkYygpIHtcbiAgICAvLyBNdXNlIHdhaXQgYG56LXRyZWUtc2VsZWN0YCB3cml0ZSB2YWx1ZXNcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDEwMSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHRyYW5EYXRhKGxpc3Q6IFNGU2NoZW1hRW51bVtdKSB7XG4gICAgcmV0dXJuIGxpc3QubWFwKG5vZGUgPT4gbmV3IE56VHJlZU5vZGUoZGVlcENvcHkobm9kZSkgYXMgYW55KSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVpIH0gPSB0aGlzO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGFsbG93Q2xlYXI6IHVpLmFsbG93Q2xlYXIsXG4gICAgICBzaG93U2VhcmNoOiB0b0Jvb2wodWkuc2hvd1NlYXJjaCwgZmFsc2UpLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiB0b0Jvb2wodWkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLCB0cnVlKSxcbiAgICAgIG11bHRpcGxlOiB0b0Jvb2wodWkubXVsdGlwbGUsIGZhbHNlKSxcbiAgICAgIGNoZWNrYWJsZTogdG9Cb29sKHVpLmNoZWNrYWJsZSwgZmFsc2UpLFxuICAgICAgc2hvd0V4cGFuZDogdG9Cb29sKHVpLnNob3dFeHBhbmQsIHRydWUpLFxuICAgICAgc2hvd0xpbmU6IHRvQm9vbCh1aS5zaG93TGluZSwgZmFsc2UpLFxuICAgICAgYXN5bmNEYXRhOiB0eXBlb2YgdWkuZXhwYW5kQ2hhbmdlID09PSAnZnVuY3Rpb24nLFxuICAgICAgZGVmYXVsdEV4cGFuZEFsbDogdG9Cb29sKHVpLmRlZmF1bHRFeHBhbmRBbGwsIGZhbHNlKSxcbiAgICAgIGRpc3BsYXlXaXRoOiB1aS5kaXNwbGF5V2l0aCB8fCAoKG5vZGU6IE56VHJlZU5vZGUpID0+IG5vZGUudGl0bGUpLFxuICAgIH07XG4gIH1cblxuICByZXNldCh2YWx1ZTogYW55KSB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdGhpcy5mb3JtUHJvcGVydHkuZm9ybURhdGEpXG4gICAgICAucGlwZShtYXAobGlzdCA9PiB0aGlzLnRyYW5EYXRhKGxpc3QpKSlcbiAgICAgIC5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICAgIHRoaXMuZGMoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGV4cGFuZENoYW5nZShlOiBOekZvcm1hdEVtaXRFdmVudCkge1xuICAgIGNvbnN0IHsgdWkgfSA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiB1aS5leHBhbmRDaGFuZ2UgIT09ICdmdW5jdGlvbicpIHJldHVybjtcbiAgICB1aS5leHBhbmRDaGFuZ2UoZSlcbiAgICAgIC5waXBlKG1hcCgobGlzdDogU0ZTY2hlbWFFbnVtW10pID0+IHRoaXMudHJhbkRhdGEobGlzdCkpKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBlLm5vZGUuYWRkQ2hpbGRyZW4ocmVzKTtcbiAgICAgICAgdGhpcy5kYygpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==