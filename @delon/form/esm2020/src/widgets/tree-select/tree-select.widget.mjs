import { Component, ViewEncapsulation } from '@angular/core';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "../../sf-item-wrap.component";
import * as i2 from "ng-zorro-antd/tree-select";
import * as i3 from "@angular/forms";
export class TreeSelectWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
        this.asyncData = false;
    }
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
}
TreeSelectWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: TreeSelectWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
TreeSelectWidget.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: TreeSelectWidget, selector: "sf-tree-select", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-tree-select\n    [nzId]=\"id\"\n    [nzAllowClear]=\"i.allowClear\"\n    [nzPlaceHolder]=\"ui.placeholder!\"\n    [nzDropdownStyle]=\"ui.dropdownStyle!\"\n    [nzDropdownClassName]=\"ui.dropdownClassName\"\n    [nzSize]=\"ui.size!\"\n    [nzExpandedKeys]=\"ui.expandedKeys!\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzMaxTagCount]=\"ui.maxTagCount!\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder || null\"\n    [nzTreeTemplate]=\"ui.treeTemplate!\"\n    [nzDisabled]=\"disabled\"\n    [nzShowSearch]=\"i.showSearch\"\n    [nzShowIcon]=\"i.showIcon\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n    [nzMultiple]=\"i.multiple\"\n    [nzHideUnMatched]=\"i.hideUnMatched\"\n    [nzCheckable]=\"i.checkable\"\n    [nzShowExpand]=\"i.showExpand\"\n    [nzShowLine]=\"i.showLine\"\n    [nzCheckStrictly]=\"i.checkStrictly\"\n    [nzAsyncData]=\"asyncData\"\n    [nzNodes]=\"$any(data)\"\n    [nzDefaultExpandAll]=\"i.defaultExpandAll\"\n    [nzDisplayWith]=\"i.displayWith!\"\n    [ngModel]=\"value\"\n    [nzVirtualHeight]=\"ui.virtualHeight!\"\n    [nzVirtualItemSize]=\"ui.virtualItemSize || 28\"\n    [nzVirtualMaxBufferPx]=\"ui.virtualMaxBufferPx || 500\"\n    [nzVirtualMinBufferPx]=\"ui.virtualMinBufferPx || 28\"\n    (ngModelChange)=\"change($event)\"\n    (nzExpandChange)=\"expandChange($event)\"\n  >\n  </nz-tree-select>\n</sf-item-wrap>\n", components: [{ type: i1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { type: i2.NzTreeSelectComponent, selector: "nz-tree-select", inputs: ["nzId", "nzAllowClear", "nzShowExpand", "nzShowLine", "nzDropdownMatchSelectWidth", "nzCheckable", "nzHideUnMatched", "nzShowIcon", "nzShowSearch", "nzDisabled", "nzAsyncData", "nzMultiple", "nzDefaultExpandAll", "nzCheckStrictly", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualHeight", "nzExpandedIcon", "nzNotFoundContent", "nzNodes", "nzOpen", "nzSize", "nzPlaceHolder", "nzDropdownStyle", "nzDropdownClassName", "nzBackdrop", "nzExpandedKeys", "nzDisplayWith", "nzMaxTagCount", "nzMaxTagPlaceholder", "nzTreeTemplate"], outputs: ["nzOpenChange", "nzCleared", "nzRemoved", "nzExpandChange", "nzTreeClick", "nzTreeCheckBoxChange"], exportAs: ["nzTreeSelect"] }], directives: [{ type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: TreeSelectWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-tree-select', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-tree-select\n    [nzId]=\"id\"\n    [nzAllowClear]=\"i.allowClear\"\n    [nzPlaceHolder]=\"ui.placeholder!\"\n    [nzDropdownStyle]=\"ui.dropdownStyle!\"\n    [nzDropdownClassName]=\"ui.dropdownClassName\"\n    [nzSize]=\"ui.size!\"\n    [nzExpandedKeys]=\"ui.expandedKeys!\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzMaxTagCount]=\"ui.maxTagCount!\"\n    [nzMaxTagPlaceholder]=\"ui.maxTagPlaceholder || null\"\n    [nzTreeTemplate]=\"ui.treeTemplate!\"\n    [nzDisabled]=\"disabled\"\n    [nzShowSearch]=\"i.showSearch\"\n    [nzShowIcon]=\"i.showIcon\"\n    [nzDropdownMatchSelectWidth]=\"i.dropdownMatchSelectWidth\"\n    [nzMultiple]=\"i.multiple\"\n    [nzHideUnMatched]=\"i.hideUnMatched\"\n    [nzCheckable]=\"i.checkable\"\n    [nzShowExpand]=\"i.showExpand\"\n    [nzShowLine]=\"i.showLine\"\n    [nzCheckStrictly]=\"i.checkStrictly\"\n    [nzAsyncData]=\"asyncData\"\n    [nzNodes]=\"$any(data)\"\n    [nzDefaultExpandAll]=\"i.defaultExpandAll\"\n    [nzDisplayWith]=\"i.displayWith!\"\n    [ngModel]=\"value\"\n    [nzVirtualHeight]=\"ui.virtualHeight!\"\n    [nzVirtualItemSize]=\"ui.virtualItemSize || 28\"\n    [nzVirtualMaxBufferPx]=\"ui.virtualMaxBufferPx || 500\"\n    [nzVirtualMinBufferPx]=\"ui.virtualMinBufferPx || 28\"\n    (ngModelChange)=\"change($event)\"\n    (nzExpandChange)=\"expandChange($event)\"\n  >\n  </nz-tree-select>\n</sf-item-wrap>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1zZWxlY3Qud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy90cmVlLXNlbGVjdC90cmVlLXNlbGVjdC53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3RyZWUtc2VsZWN0L3RyZWUtc2VsZWN0LndpZGdldC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7QUFTL0MsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGVBQXlDO0lBTi9FOztRQVFFLFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBQzFCLGNBQVMsR0FBRyxLQUFLLENBQUM7S0EwQ25CO0lBeENDLFFBQVE7UUFDTixNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxVQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVU7WUFDekIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztZQUN4Qyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQztZQUNuRSxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1lBQ3BDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7WUFDdEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztZQUNwQyxVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7WUFDcEMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQztZQUM5QyxhQUFhLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDO1lBQzlDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDO1lBQ3BELFdBQVcsRUFBRSxFQUFFLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2xFLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sRUFBRSxDQUFDLFlBQVksS0FBSyxVQUFVLENBQUM7SUFDekQsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFjO1FBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBd0I7UUFDN0IsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxZQUFZLENBQUMsQ0FBb0I7UUFDL0IsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLE9BQU8sRUFBRSxDQUFDLFlBQVksS0FBSyxVQUFVO1lBQUUsT0FBTztRQUNsRCxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNqQyxDQUFDLENBQUMsSUFBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxJQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzZHQTVDVSxnQkFBZ0I7aUdBQWhCLGdCQUFnQiw2RUNoQjdCLHUvQ0FxQ0E7MkZEckJhLGdCQUFnQjtrQkFONUIsU0FBUzsrQkFDRSxnQkFBZ0IsdUJBRUwsS0FBSyxpQkFDWCxpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56Rm9ybWF0RW1pdEV2ZW50LCBOelRyZWVOb2RlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RyZWUnO1xuXG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZUcmVlU2VsZWN0V2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10cmVlLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90cmVlLXNlbGVjdC53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVTZWxlY3RXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZUcmVlU2VsZWN0V2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGkhOiBTRlRyZWVTZWxlY3RXaWRnZXRTY2hlbWE7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIGFzeW5jRGF0YSA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdWkgfSA9IHRoaXM7XG4gICAgdGhpcy5pID0ge1xuICAgICAgYWxsb3dDbGVhcjogdWkuYWxsb3dDbGVhcixcbiAgICAgIHNob3dTZWFyY2g6IHRvQm9vbCh1aS5zaG93U2VhcmNoLCBmYWxzZSksXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IHRvQm9vbCh1aS5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsIHRydWUpLFxuICAgICAgbXVsdGlwbGU6IHRvQm9vbCh1aS5tdWx0aXBsZSwgZmFsc2UpLFxuICAgICAgY2hlY2thYmxlOiB0b0Jvb2wodWkuY2hlY2thYmxlLCBmYWxzZSksXG4gICAgICBzaG93SWNvbjogdG9Cb29sKHVpLnNob3dJY29uLCBmYWxzZSksXG4gICAgICBzaG93RXhwYW5kOiB0b0Jvb2wodWkuc2hvd0V4cGFuZCwgdHJ1ZSksXG4gICAgICBzaG93TGluZTogdG9Cb29sKHVpLnNob3dMaW5lLCBmYWxzZSksXG4gICAgICBjaGVja1N0cmljdGx5OiB0b0Jvb2wodWkuY2hlY2tTdHJpY3RseSwgZmFsc2UpLFxuICAgICAgaGlkZVVuTWF0Y2hlZDogdG9Cb29sKHVpLmhpZGVVbk1hdGNoZWQsIGZhbHNlKSxcbiAgICAgIGRlZmF1bHRFeHBhbmRBbGw6IHRvQm9vbCh1aS5kZWZhdWx0RXhwYW5kQWxsLCBmYWxzZSksXG4gICAgICBkaXNwbGF5V2l0aDogdWkuZGlzcGxheVdpdGggfHwgKChub2RlOiBOelRyZWVOb2RlKSA9PiBub2RlLnRpdGxlKVxuICAgIH07XG4gICAgdGhpcy5hc3luY0RhdGEgPSB0eXBlb2YgdWkuZXhwYW5kQ2hhbmdlID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB2YWx1ZSkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlKHZhbHVlOiBzdHJpbmdbXSB8IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UodmFsdWUpO1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgZXhwYW5kQ2hhbmdlKGU6IE56Rm9ybWF0RW1pdEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgeyB1aSB9ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHVpLmV4cGFuZENoYW5nZSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuICAgIHVpLmV4cGFuZENoYW5nZShlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGUubm9kZSEuY2xlYXJDaGlsZHJlbigpO1xuICAgICAgZS5ub2RlIS5hZGRDaGlsZHJlbihyZXMpO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gIDxuei10cmVlLXNlbGVjdFxuICAgIFtueklkXT1cImlkXCJcbiAgICBbbnpBbGxvd0NsZWFyXT1cImkuYWxsb3dDbGVhclwiXG4gICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXIhXCJcbiAgICBbbnpEcm9wZG93blN0eWxlXT1cInVpLmRyb3Bkb3duU3R5bGUhXCJcbiAgICBbbnpEcm9wZG93bkNsYXNzTmFtZV09XCJ1aS5kcm9wZG93bkNsYXNzTmFtZVwiXG4gICAgW256U2l6ZV09XCJ1aS5zaXplIVwiXG4gICAgW256RXhwYW5kZWRLZXlzXT1cInVpLmV4cGFuZGVkS2V5cyFcIlxuICAgIFtuek5vdEZvdW5kQ29udGVudF09XCJ1aS5ub3RGb3VuZENvbnRlbnRcIlxuICAgIFtuek1heFRhZ0NvdW50XT1cInVpLm1heFRhZ0NvdW50IVwiXG4gICAgW256TWF4VGFnUGxhY2Vob2xkZXJdPVwidWkubWF4VGFnUGxhY2Vob2xkZXIgfHwgbnVsbFwiXG4gICAgW256VHJlZVRlbXBsYXRlXT1cInVpLnRyZWVUZW1wbGF0ZSFcIlxuICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICBbbnpTaG93U2VhcmNoXT1cImkuc2hvd1NlYXJjaFwiXG4gICAgW256U2hvd0ljb25dPVwiaS5zaG93SWNvblwiXG4gICAgW256RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXT1cImkuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXCJcbiAgICBbbnpNdWx0aXBsZV09XCJpLm11bHRpcGxlXCJcbiAgICBbbnpIaWRlVW5NYXRjaGVkXT1cImkuaGlkZVVuTWF0Y2hlZFwiXG4gICAgW256Q2hlY2thYmxlXT1cImkuY2hlY2thYmxlXCJcbiAgICBbbnpTaG93RXhwYW5kXT1cImkuc2hvd0V4cGFuZFwiXG4gICAgW256U2hvd0xpbmVdPVwiaS5zaG93TGluZVwiXG4gICAgW256Q2hlY2tTdHJpY3RseV09XCJpLmNoZWNrU3RyaWN0bHlcIlxuICAgIFtuekFzeW5jRGF0YV09XCJhc3luY0RhdGFcIlxuICAgIFtuek5vZGVzXT1cIiRhbnkoZGF0YSlcIlxuICAgIFtuekRlZmF1bHRFeHBhbmRBbGxdPVwiaS5kZWZhdWx0RXhwYW5kQWxsXCJcbiAgICBbbnpEaXNwbGF5V2l0aF09XCJpLmRpc3BsYXlXaXRoIVwiXG4gICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgIFtuelZpcnR1YWxIZWlnaHRdPVwidWkudmlydHVhbEhlaWdodCFcIlxuICAgIFtuelZpcnR1YWxJdGVtU2l6ZV09XCJ1aS52aXJ0dWFsSXRlbVNpemUgfHwgMjhcIlxuICAgIFtuelZpcnR1YWxNYXhCdWZmZXJQeF09XCJ1aS52aXJ0dWFsTWF4QnVmZmVyUHggfHwgNTAwXCJcbiAgICBbbnpWaXJ0dWFsTWluQnVmZmVyUHhdPVwidWkudmlydHVhbE1pbkJ1ZmZlclB4IHx8IDI4XCJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXG4gICAgKG56RXhwYW5kQ2hhbmdlKT1cImV4cGFuZENoYW5nZSgkZXZlbnQpXCJcbiAgPlxuICA8L256LXRyZWUtc2VsZWN0PlxuPC9zZi1pdGVtLXdyYXA+XG4iXX0=