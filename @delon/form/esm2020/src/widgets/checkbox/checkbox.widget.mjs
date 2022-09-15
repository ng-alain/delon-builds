import { Component, ViewEncapsulation } from '@angular/core';
import { getData } from '../../utils';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/checkbox";
import * as i5 from "ng-zorro-antd/grid";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "ng-zorro-antd/tooltip";
import * as i8 from "../../sf-item-wrap.component";
export class CheckboxWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
        this.allChecked = false;
        this.indeterminate = false;
        this.labelTitle = ``;
        this.inited = false;
    }
    reset(value) {
        this.inited = false;
        getData(this.schema, this.ui, value).subscribe(list => {
            this.data = list;
            this.allChecked = false;
            this.indeterminate = false;
            this.labelTitle = list.length === 0 ? '' : this.schema.title;
            const { span } = this.ui;
            this.grid_span = span && span > 0 ? span : 0;
            this.updateAllChecked();
            this.inited = true;
            this.detectChanges();
        });
    }
    _setValue(value) {
        this.setValue(value);
        this.detectChanges();
        this.notifyChange(value);
    }
    notifySet() {
        const checkList = this.data.filter(w => w.checked);
        this.updateAllChecked().setValue(checkList.map(item => item.value));
        this.notifyChange(checkList);
    }
    groupInGridChange(values) {
        this.data.forEach(item => (item.checked = values.indexOf(item.value) !== -1));
        this.notifySet();
    }
    onAllChecked() {
        this.data.forEach(item => (item.checked = this.allChecked));
        this.notifySet();
    }
    updateAllChecked() {
        if (this.data.every(item => item.checked !== true)) {
            this.allChecked = false;
            this.indeterminate = false;
        }
        else if (this.data.every(item => item.checked === true)) {
            this.allChecked = true;
            this.indeterminate = false;
        }
        else {
            this.indeterminate = true;
        }
        this.detectChanges();
        return this;
    }
    notifyChange(res) {
        if (this.ui.change)
            this.ui.change(res);
    }
}
CheckboxWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: CheckboxWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
CheckboxWidget.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.2", type: CheckboxWidget, selector: "sf-checkbox", usesInheritance: true, ngImport: i0, template: "<ng-template #all>\n  <label\n    *ngIf=\"ui.checkAll\"\n    nz-checkbox\n    class=\"sf__checkbox-all mr-sm\"\n    [(ngModel)]=\"allChecked\"\n    (ngModelChange)=\"onAllChecked()\"\n    [nzIndeterminate]=\"indeterminate\"\n    >{{ ui.checkAllText || l.checkAllText }}</label\n  >\n</ng-template>\n<sf-item-wrap\n  [id]=\"id\"\n  [schema]=\"schema\"\n  [ui]=\"ui\"\n  [showError]=\"showError\"\n  [error]=\"error\"\n  [showTitle]=\"true\"\n  [title]=\"labelTitle\"\n>\n  <ng-container *ngIf=\"inited && data.length === 0\">\n    <label nz-checkbox [nzDisabled]=\"disabled\" [ngModel]=\"value\" (ngModelChange)=\"_setValue($event)\">\n      {{ schema.title }}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n  </ng-container>\n  <ng-container *ngIf=\"inited && data.length > 0\">\n    <ng-container *ngIf=\"grid_span === 0\">\n      <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n      <nz-checkbox-group [ngModel]=\"data\" (ngModelChange)=\"notifySet()\"></nz-checkbox-group>\n    </ng-container>\n    <ng-container *ngIf=\"grid_span !== 0\">\n      <nz-checkbox-wrapper class=\"sf__checkbox-list\" (nzOnChange)=\"groupInGridChange($event)\">\n        <div nz-row>\n          <div nz-col [nzSpan]=\"grid_span\" *ngIf=\"ui.checkAll\">\n            <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n          </div>\n          <div nz-col [nzSpan]=\"grid_span\" *ngFor=\"let i of data\">\n            <label nz-checkbox [nzValue]=\"i.value\" [ngModel]=\"i.checked\" [nzDisabled]=\"i.disabled\">{{ i.label }}</label>\n          </div>\n        </div>\n      </nz-checkbox-wrapper>\n    </ng-container>\n  </ng-container>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "component", type: i4.NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "component", type: i4.NzCheckboxGroupComponent, selector: "nz-checkbox-group", inputs: ["nzDisabled"], exportAs: ["nzCheckboxGroup"] }, { kind: "component", type: i4.NzCheckboxWrapperComponent, selector: "nz-checkbox-wrapper", outputs: ["nzOnChange"], exportAs: ["nzCheckboxWrapper"] }, { kind: "directive", type: i5.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i5.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "directive", type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i7.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "component", type: i8.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: CheckboxWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-checkbox', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<ng-template #all>\n  <label\n    *ngIf=\"ui.checkAll\"\n    nz-checkbox\n    class=\"sf__checkbox-all mr-sm\"\n    [(ngModel)]=\"allChecked\"\n    (ngModelChange)=\"onAllChecked()\"\n    [nzIndeterminate]=\"indeterminate\"\n    >{{ ui.checkAllText || l.checkAllText }}</label\n  >\n</ng-template>\n<sf-item-wrap\n  [id]=\"id\"\n  [schema]=\"schema\"\n  [ui]=\"ui\"\n  [showError]=\"showError\"\n  [error]=\"error\"\n  [showTitle]=\"true\"\n  [title]=\"labelTitle\"\n>\n  <ng-container *ngIf=\"inited && data.length === 0\">\n    <label nz-checkbox [nzDisabled]=\"disabled\" [ngModel]=\"value\" (ngModelChange)=\"_setValue($event)\">\n      {{ schema.title }}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n  </ng-container>\n  <ng-container *ngIf=\"inited && data.length > 0\">\n    <ng-container *ngIf=\"grid_span === 0\">\n      <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n      <nz-checkbox-group [ngModel]=\"data\" (ngModelChange)=\"notifySet()\"></nz-checkbox-group>\n    </ng-container>\n    <ng-container *ngIf=\"grid_span !== 0\">\n      <nz-checkbox-wrapper class=\"sf__checkbox-list\" (nzOnChange)=\"groupInGridChange($event)\">\n        <div nz-row>\n          <div nz-col [nzSpan]=\"grid_span\" *ngIf=\"ui.checkAll\">\n            <ng-template [ngTemplateOutlet]=\"all\"></ng-template>\n          </div>\n          <div nz-col [nzSpan]=\"grid_span\" *ngFor=\"let i of data\">\n            <label nz-checkbox [nzValue]=\"i.value\" [ngModel]=\"i.checked\" [nzDisabled]=\"i.disabled\">{{ i.label }}</label>\n          </div>\n        </div>\n      </nz-checkbox-wrapper>\n    </ng-container>\n  </ng-container>\n</sf-item-wrap>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL2NoZWNrYm94L2NoZWNrYm94LndpZGdldC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7O0FBUy9DLE1BQU0sT0FBTyxjQUFlLFNBQVEsZUFBdUM7SUFOM0U7O1FBT0UsU0FBSSxHQUFtQixFQUFFLENBQUM7UUFDMUIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3hCLFdBQU0sR0FBRyxLQUFLLENBQUM7S0F5RGhCO0lBdkRDLEtBQUssQ0FBQyxLQUFjO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUs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QyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGQ2hlY2tib3hXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZDaGVja2JveFdpZGdldFNjaGVtYT4ge1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBhbGxDaGVja2VkID0gZmFsc2U7XG4gIGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgZ3JpZF9zcGFuITogbnVtYmVyO1xuICBsYWJlbFRpdGxlOiBzdHJpbmcgPSBgYDtcbiAgaW5pdGVkID0gZmFsc2U7XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRlZCA9IGZhbHNlO1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHZhbHVlKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgdGhpcy5hbGxDaGVja2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgIHRoaXMubGFiZWxUaXRsZSA9IGxpc3QubGVuZ3RoID09PSAwID8gJycgOiAodGhpcy5zY2hlbWEudGl0bGUgYXMgc3RyaW5nKTtcbiAgICAgIGNvbnN0IHsgc3BhbiB9ID0gdGhpcy51aTtcbiAgICAgIHRoaXMuZ3JpZF9zcGFuID0gc3BhbiAmJiBzcGFuID4gMCA/IHNwYW4gOiAwO1xuXG4gICAgICB0aGlzLnVwZGF0ZUFsbENoZWNrZWQoKTtcbiAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NldFZhbHVlKHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5ub3RpZnlDaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgbm90aWZ5U2V0KCk6IHZvaWQge1xuICAgIGNvbnN0IGNoZWNrTGlzdCA9IHRoaXMuZGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpO1xuICAgIHRoaXMudXBkYXRlQWxsQ2hlY2tlZCgpLnNldFZhbHVlKGNoZWNrTGlzdC5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKSk7XG4gICAgdGhpcy5ub3RpZnlDaGFuZ2UoY2hlY2tMaXN0KTtcbiAgfVxuXG4gIGdyb3VwSW5HcmlkQ2hhbmdlKHZhbHVlczogU0ZWYWx1ZVtdKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiAoaXRlbS5jaGVja2VkID0gdmFsdWVzLmluZGV4T2YoaXRlbS52YWx1ZSkgIT09IC0xKSk7XG4gICAgdGhpcy5ub3RpZnlTZXQoKTtcbiAgfVxuXG4gIG9uQWxsQ2hlY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSB0aGlzLmFsbENoZWNrZWQpKTtcbiAgICB0aGlzLm5vdGlmeVNldCgpO1xuICB9XG5cbiAgdXBkYXRlQWxsQ2hlY2tlZCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5kYXRhLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5jaGVja2VkICE9PSB0cnVlKSkge1xuICAgICAgdGhpcy5hbGxDaGVja2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5ldmVyeShpdGVtID0+IGl0ZW0uY2hlY2tlZCA9PT0gdHJ1ZSkpIHtcbiAgICAgIHRoaXMuYWxsQ2hlY2tlZCA9IHRydWU7XG4gICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUNoYW5nZShyZXM6IGJvb2xlYW4gfCBTRlNjaGVtYUVudW1bXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UocmVzKTtcbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlICNhbGw+XG4gIDxsYWJlbFxuICAgICpuZ0lmPVwidWkuY2hlY2tBbGxcIlxuICAgIG56LWNoZWNrYm94XG4gICAgY2xhc3M9XCJzZl9fY2hlY2tib3gtYWxsIG1yLXNtXCJcbiAgICBbKG5nTW9kZWwpXT1cImFsbENoZWNrZWRcIlxuICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uQWxsQ2hlY2tlZCgpXCJcbiAgICBbbnpJbmRldGVybWluYXRlXT1cImluZGV0ZXJtaW5hdGVcIlxuICAgID57eyB1aS5jaGVja0FsbFRleHQgfHwgbC5jaGVja0FsbFRleHQgfX08L2xhYmVsXG4gID5cbjwvbmctdGVtcGxhdGU+XG48c2YtaXRlbS13cmFwXG4gIFtpZF09XCJpZFwiXG4gIFtzY2hlbWFdPVwic2NoZW1hXCJcbiAgW3VpXT1cInVpXCJcbiAgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIlxuICBbZXJyb3JdPVwiZXJyb3JcIlxuICBbc2hvd1RpdGxlXT1cInRydWVcIlxuICBbdGl0bGVdPVwibGFiZWxUaXRsZVwiXG4+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbml0ZWQgJiYgZGF0YS5sZW5ndGggPT09IDBcIj5cbiAgICA8bGFiZWwgbnotY2hlY2tib3ggW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbbmdNb2RlbF09XCJ2YWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cIl9zZXRWYWx1ZSgkZXZlbnQpXCI+XG4gICAgICB7eyBzY2hlbWEudGl0bGUgfX1cbiAgICAgIDxzcGFuIGNsYXNzPVwic2ZfX29wdGlvbmFsXCI+XG4gICAgICAgIHt7IHVpLm9wdGlvbmFsIH19XG4gICAgICAgIDxpXG4gICAgICAgICAgKm5nSWY9XCJvaFwiXG4gICAgICAgICAgbnotdG9vbHRpcFxuICAgICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJvaC50ZXh0XCJcbiAgICAgICAgICBbbnpUb29sdGlwUGxhY2VtZW50XT1cIm9oLnBsYWNlbWVudFwiXG4gICAgICAgICAgW256VG9vbHRpcFRyaWdnZXJdPVwib2gudHJpZ2dlclwiXG4gICAgICAgICAgW256VG9vbHRpcE92ZXJsYXlDbGFzc05hbWVdPVwib2gub3ZlcmxheUNsYXNzTmFtZVwiXG4gICAgICAgICAgW256VG9vbHRpcE92ZXJsYXlTdHlsZV09XCJvaC5vdmVybGF5U3R5bGVcIlxuICAgICAgICAgIFtuelRvb2x0aXBNb3VzZUVudGVyRGVsYXldPVwib2gubW91c2VFbnRlckRlbGF5XCJcbiAgICAgICAgICBbbnpUb29sdGlwTW91c2VMZWF2ZURlbGF5XT1cIm9oLm1vdXNlTGVhdmVEZWxheVwiXG4gICAgICAgICAgbnotaWNvblxuICAgICAgICAgIFtuelR5cGVdPVwib2guaWNvbiFcIlxuICAgICAgICA+PC9pPlxuICAgICAgPC9zcGFuPlxuICAgIDwvbGFiZWw+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5pdGVkICYmIGRhdGEubGVuZ3RoID4gMFwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJncmlkX3NwYW4gPT09IDBcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJhbGxcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPG56LWNoZWNrYm94LWdyb3VwIFtuZ01vZGVsXT1cImRhdGFcIiAobmdNb2RlbENoYW5nZSk9XCJub3RpZnlTZXQoKVwiPjwvbnotY2hlY2tib3gtZ3JvdXA+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdyaWRfc3BhbiAhPT0gMFwiPlxuICAgICAgPG56LWNoZWNrYm94LXdyYXBwZXIgY2xhc3M9XCJzZl9fY2hlY2tib3gtbGlzdFwiIChuek9uQ2hhbmdlKT1cImdyb3VwSW5HcmlkQ2hhbmdlKCRldmVudClcIj5cbiAgICAgICAgPGRpdiBuei1yb3c+XG4gICAgICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCJncmlkX3NwYW5cIiAqbmdJZj1cInVpLmNoZWNrQWxsXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWxsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cImdyaWRfc3BhblwiICpuZ0Zvcj1cImxldCBpIG9mIGRhdGFcIj5cbiAgICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCBbbnpWYWx1ZV09XCJpLnZhbHVlXCIgW25nTW9kZWxdPVwiaS5jaGVja2VkXCIgW256RGlzYWJsZWRdPVwiaS5kaXNhYmxlZFwiPnt7IGkubGFiZWwgfX08L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbnotY2hlY2tib3gtd3JhcHBlcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG48L3NmLWl0ZW0td3JhcD5cbiJdfQ==