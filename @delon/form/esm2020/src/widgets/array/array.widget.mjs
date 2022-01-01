import { Component, ViewEncapsulation } from '@angular/core';
import { ArrayLayoutWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/form";
import * as i2 from "ng-zorro-antd/button";
import * as i3 from "ng-zorro-antd/card";
import * as i4 from "../../sf-item.component";
import * as i5 from "ng-zorro-antd/grid";
import * as i6 from "@angular/common";
import * as i7 from "ng-zorro-antd/tooltip";
import * as i8 from "ng-zorro-antd/core/transition-patch";
import * as i9 from "ng-zorro-antd/icon";
import * as i10 from "ng-zorro-antd/core/wave";
export class ArrayWidget extends ArrayLayoutWidget {
    constructor() {
        super(...arguments);
        this.arraySpan = 8;
    }
    get addDisabled() {
        return (this.disabled ||
            (this.schema.maxItems != null && this.formProperty.properties.length >= this.schema.maxItems));
    }
    get showRemove() {
        return !this.disabled && !!this.removeTitle;
    }
    ngOnInit() {
        const { grid, addTitle, addType, removable, removeTitle } = this.ui;
        if (grid && grid.arraySpan) {
            this.arraySpan = grid.arraySpan;
        }
        this.addTitle = this.dom.bypassSecurityTrustHtml(addTitle || this.l.addText);
        this.addType = addType || 'dashed';
        this.removeTitle = removable === false ? null : removeTitle || this.l.removeText;
    }
    reValid() {
        this.formProperty.updateValueAndValidity({ onlySelf: false, emitValueEvent: false, emitValidator: true });
    }
    addItem() {
        const property = this.formProperty.add({});
        this.reValid();
        if (this.ui.add) {
            this.ui.add(property);
        }
    }
    removeItem(index) {
        this.formProperty.remove(index);
        this.reValid();
        if (this.ui.remove) {
            this.ui.remove(index);
        }
    }
}
ArrayWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ArrayWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
ArrayWidget.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: ArrayWidget, selector: "sf-array", host: { properties: { "class.sf__array": "true" } }, usesInheritance: true, ngImport: i0, template: "<nz-form-item [class.ant-form-item-with-help]=\"showError\">\n  <div nz-col *ngIf=\"schema.title\" [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n    <label [class.ant-form-item-required]=\"ui.required\">\n      {{ schema.title }}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n    <div class=\"sf__array-add\">\n      <button\n        type=\"button\"\n        nz-button\n        [nzType]=\"addType\"\n        [disabled]=\"addDisabled\"\n        (click)=\"addItem()\"\n        [innerHTML]=\"addTitle\"\n      ></button>\n    </div>\n  </div>\n  <div nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n      <div nz-row class=\"sf__array-container\">\n        <ng-container *ngFor=\"let i of $any(formProperty).properties; let idx = index\">\n          <div\n            nz-col\n            *ngIf=\"i.visible && !i.ui.hidden\"\n            [nzSpan]=\"arraySpan\"\n            [attr.data-index]=\"idx\"\n            class=\"sf__array-item\"\n          >\n            <nz-card>\n              <sf-item [formProperty]=\"i\"></sf-item>\n              <span *ngIf=\"showRemove\" class=\"sf__array-remove\" (click)=\"removeItem(idx)\" [attr.title]=\"removeTitle\">\n                <i nz-icon nzType=\"delete\"></i>\n              </span>\n            </nz-card>\n          </div>\n        </ng-container>\n      </div>\n      <div *ngIf=\"!ui.onlyVisual && showError\" class=\"ant-form-explain\">{{ error }}</div>\n      <div *ngIf=\"schema.description\" [innerHTML]=\"ui._description\" class=\"ant-form-extra\"></div>\n    </div>\n  </div>\n</nz-form-item>\n", components: [{ type: i1.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { type: i2.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { type: i3.NzCardComponent, selector: "nz-card", inputs: ["nzBordered", "nzBorderless", "nzLoading", "nzHoverable", "nzBodyStyle", "nzCover", "nzActions", "nzType", "nzSize", "nzTitle", "nzExtra"], exportAs: ["nzCard"] }, { type: i4.SFItemComponent, selector: "sf-item", inputs: ["formProperty"], exportAs: ["sfItem"] }], directives: [{ type: i5.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { type: i7.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { type: i8.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i9.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i10.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: ArrayWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-array', host: { '[class.sf__array]': 'true' }, preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<nz-form-item [class.ant-form-item-with-help]=\"showError\">\n  <div nz-col *ngIf=\"schema.title\" [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n    <label [class.ant-form-item-required]=\"ui.required\">\n      {{ schema.title }}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n    <div class=\"sf__array-add\">\n      <button\n        type=\"button\"\n        nz-button\n        [nzType]=\"addType\"\n        [disabled]=\"addDisabled\"\n        (click)=\"addItem()\"\n        [innerHTML]=\"addTitle\"\n      ></button>\n    </div>\n  </div>\n  <div nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n      <div nz-row class=\"sf__array-container\">\n        <ng-container *ngFor=\"let i of $any(formProperty).properties; let idx = index\">\n          <div\n            nz-col\n            *ngIf=\"i.visible && !i.ui.hidden\"\n            [nzSpan]=\"arraySpan\"\n            [attr.data-index]=\"idx\"\n            class=\"sf__array-item\"\n          >\n            <nz-card>\n              <sf-item [formProperty]=\"i\"></sf-item>\n              <span *ngIf=\"showRemove\" class=\"sf__array-remove\" (click)=\"removeItem(idx)\" [attr.title]=\"removeTitle\">\n                <i nz-icon nzType=\"delete\"></i>\n              </span>\n            </nz-card>\n          </div>\n        </ng-container>\n      </div>\n      <div *ngIf=\"!ui.onlyVisual && showError\" class=\"ant-form-explain\">{{ error }}</div>\n      <div *ngIf=\"schema.description\" [innerHTML]=\"ui._description\" class=\"ant-form-extra\"></div>\n    </div>\n  </div>\n</nz-form-item>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL2FycmF5L2FycmF5LndpZGdldC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7Ozs7QUFTakQsTUFBTSxPQUFPLFdBQVksU0FBUSxpQkFBaUI7SUFQbEQ7O1FBV0UsY0FBUyxHQUFHLENBQUMsQ0FBQztLQTJDZjtJQXpDQyxJQUFJLFdBQVc7UUFDYixPQUFPLENBQ0wsSUFBSSxDQUFDLFFBQVE7WUFDYixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQTZCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUyxDQUFDLENBQ25ILENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDOUMsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDcEUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDakM7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDbkYsQ0FBQztJQUVPLE9BQU87UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFFRCxPQUFPO1FBQ0wsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzt3R0E5Q1UsV0FBVzs0RkFBWCxXQUFXLDRIQ2Z4Qix3c0VBeURBOzJGRDFDYSxXQUFXO2tCQVB2QixTQUFTOytCQUNFLFVBQVUsUUFFZCxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSx1QkFDaEIsS0FBSyxpQkFDWCxpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBOekJ1dHRvblR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XG5cbmltcG9ydCB0eXBlIHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi4vLi4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBBcnJheUxheW91dFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWFycmF5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FycmF5LndpZGdldC5odG1sJyxcbiAgaG9zdDogeyAnW2NsYXNzLnNmX19hcnJheV0nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQXJyYXlXaWRnZXQgZXh0ZW5kcyBBcnJheUxheW91dFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGFkZFRpdGxlITogU2FmZUh0bWw7XG4gIGFkZFR5cGUhOiBOekJ1dHRvblR5cGU7XG4gIHJlbW92ZVRpdGxlPzogc3RyaW5nIHwgbnVsbDtcbiAgYXJyYXlTcGFuID0gODtcblxuICBnZXQgYWRkRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZGlzYWJsZWQgfHxcbiAgICAgICh0aGlzLnNjaGVtYS5tYXhJdGVtcyAhPSBudWxsICYmICh0aGlzLmZvcm1Qcm9wZXJ0eS5wcm9wZXJ0aWVzIGFzIEZvcm1Qcm9wZXJ0eVtdKS5sZW5ndGggPj0gdGhpcy5zY2hlbWEubWF4SXRlbXMhKVxuICAgICk7XG4gIH1cblxuICBnZXQgc2hvd1JlbW92ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuZGlzYWJsZWQgJiYgISF0aGlzLnJlbW92ZVRpdGxlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBncmlkLCBhZGRUaXRsZSwgYWRkVHlwZSwgcmVtb3ZhYmxlLCByZW1vdmVUaXRsZSB9ID0gdGhpcy51aTtcbiAgICBpZiAoZ3JpZCAmJiBncmlkLmFycmF5U3Bhbikge1xuICAgICAgdGhpcy5hcnJheVNwYW4gPSBncmlkLmFycmF5U3BhbjtcbiAgICB9XG5cbiAgICB0aGlzLmFkZFRpdGxlID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoYWRkVGl0bGUgfHwgdGhpcy5sLmFkZFRleHQpO1xuICAgIHRoaXMuYWRkVHlwZSA9IGFkZFR5cGUgfHwgJ2Rhc2hlZCc7XG4gICAgdGhpcy5yZW1vdmVUaXRsZSA9IHJlbW92YWJsZSA9PT0gZmFsc2UgPyBudWxsIDogcmVtb3ZlVGl0bGUgfHwgdGhpcy5sLnJlbW92ZVRleHQ7XG4gIH1cblxuICBwcml2YXRlIHJlVmFsaWQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiBmYWxzZSwgZW1pdFZhbHVlRXZlbnQ6IGZhbHNlLCBlbWl0VmFsaWRhdG9yOiB0cnVlIH0pO1xuICB9XG5cbiAgYWRkSXRlbSgpOiB2b2lkIHtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuZm9ybVByb3BlcnR5LmFkZCh7fSk7XG4gICAgdGhpcy5yZVZhbGlkKCk7XG4gICAgaWYgKHRoaXMudWkuYWRkKSB7XG4gICAgICB0aGlzLnVpLmFkZChwcm9wZXJ0eSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlSXRlbShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkucmVtb3ZlKGluZGV4KTtcbiAgICB0aGlzLnJlVmFsaWQoKTtcbiAgICBpZiAodGhpcy51aS5yZW1vdmUpIHtcbiAgICAgIHRoaXMudWkucmVtb3ZlKGluZGV4KTtcbiAgICB9XG4gIH1cbn1cbiIsIjxuei1mb3JtLWl0ZW0gW2NsYXNzLmFudC1mb3JtLWl0ZW0td2l0aC1oZWxwXT1cInNob3dFcnJvclwiPlxuICA8ZGl2IG56LWNvbCAqbmdJZj1cInNjaGVtYS50aXRsZVwiIFtuelNwYW5dPVwidWkuc3BhbkxhYmVsIVwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS1sYWJlbFwiPlxuICAgIDxsYWJlbCBbY2xhc3MuYW50LWZvcm0taXRlbS1yZXF1aXJlZF09XCJ1aS5yZXF1aXJlZFwiPlxuICAgICAge3sgc2NoZW1hLnRpdGxlIH19XG4gICAgICA8c3BhbiBjbGFzcz1cInNmX19vcHRpb25hbFwiPlxuICAgICAgICB7eyB1aS5vcHRpb25hbCB9fVxuICAgICAgICA8aVxuICAgICAgICAgICpuZ0lmPVwib2hcIlxuICAgICAgICAgIG56LXRvb2x0aXBcbiAgICAgICAgICBbbnpUb29sdGlwVGl0bGVdPVwib2gudGV4dFwiXG4gICAgICAgICAgW256VG9vbHRpcFBsYWNlbWVudF09XCJvaC5wbGFjZW1lbnRcIlxuICAgICAgICAgIFtuelRvb2x0aXBUcmlnZ2VyXT1cIm9oLnRyaWdnZXJcIlxuICAgICAgICAgIFtuelRvb2x0aXBPdmVybGF5Q2xhc3NOYW1lXT1cIm9oLm92ZXJsYXlDbGFzc05hbWVcIlxuICAgICAgICAgIFtuelRvb2x0aXBPdmVybGF5U3R5bGVdPVwib2gub3ZlcmxheVN0eWxlXCJcbiAgICAgICAgICBbbnpUb29sdGlwTW91c2VFbnRlckRlbGF5XT1cIm9oLm1vdXNlRW50ZXJEZWxheVwiXG4gICAgICAgICAgW256VG9vbHRpcE1vdXNlTGVhdmVEZWxheV09XCJvaC5tb3VzZUxlYXZlRGVsYXlcIlxuICAgICAgICAgIG56LWljb25cbiAgICAgICAgICBbbnpUeXBlXT1cIm9oLmljb24hXCJcbiAgICAgICAgPjwvaT5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuICAgIDxkaXYgY2xhc3M9XCJzZl9fYXJyYXktYWRkXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBuei1idXR0b25cbiAgICAgICAgW256VHlwZV09XCJhZGRUeXBlXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImFkZERpc2FibGVkXCJcbiAgICAgICAgKGNsaWNrKT1cImFkZEl0ZW0oKVwiXG4gICAgICAgIFtpbm5lckhUTUxdPVwiYWRkVGl0bGVcIlxuICAgICAgPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBuei1jb2wgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlclwiIFtuelNwYW5dPVwidWkuc3BhbkNvbnRyb2whXCIgW256T2Zmc2V0XT1cInVpLm9mZnNldENvbnRyb2whXCI+XG4gICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbFwiIFtjbGFzcy5oYXMtZXJyb3JdPVwic2hvd0Vycm9yXCI+XG4gICAgICA8ZGl2IG56LXJvdyBjbGFzcz1cInNmX19hcnJheS1jb250YWluZXJcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaSBvZiAkYW55KGZvcm1Qcm9wZXJ0eSkucHJvcGVydGllczsgbGV0IGlkeCA9IGluZGV4XCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgbnotY29sXG4gICAgICAgICAgICAqbmdJZj1cImkudmlzaWJsZSAmJiAhaS51aS5oaWRkZW5cIlxuICAgICAgICAgICAgW256U3Bhbl09XCJhcnJheVNwYW5cIlxuICAgICAgICAgICAgW2F0dHIuZGF0YS1pbmRleF09XCJpZHhcIlxuICAgICAgICAgICAgY2xhc3M9XCJzZl9fYXJyYXktaXRlbVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG56LWNhcmQ+XG4gICAgICAgICAgICAgIDxzZi1pdGVtIFtmb3JtUHJvcGVydHldPVwiaVwiPjwvc2YtaXRlbT5cbiAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJzaG93UmVtb3ZlXCIgY2xhc3M9XCJzZl9fYXJyYXktcmVtb3ZlXCIgKGNsaWNrKT1cInJlbW92ZUl0ZW0oaWR4KVwiIFthdHRyLnRpdGxlXT1cInJlbW92ZVRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJkZWxldGVcIj48L2k+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbnotY2FyZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCIhdWkub25seVZpc3VhbCAmJiBzaG93RXJyb3JcIiBjbGFzcz1cImFudC1mb3JtLWV4cGxhaW5cIj57eyBlcnJvciB9fTwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIFtpbm5lckhUTUxdPVwidWkuX2Rlc2NyaXB0aW9uXCIgY2xhc3M9XCJhbnQtZm9ybS1leHRyYVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbnotZm9ybS1pdGVtPlxuIl19