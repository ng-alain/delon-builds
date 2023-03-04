import { Component, ViewEncapsulation } from '@angular/core';
import { ArrayLayoutWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/button";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/core/wave";
import * as i5 from "ng-zorro-antd/card";
import * as i6 from "ng-zorro-antd/grid";
import * as i7 from "ng-zorro-antd/form";
import * as i8 from "ng-zorro-antd/icon";
import * as i9 from "ng-zorro-antd/tooltip";
import * as i10 from "../../sf-item.component";
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
        if (this.disabled || !this.removeTitle)
            return false;
        if (this.schema.minItems != null &&
            this.formProperty.properties.length <= this.schema.minItems)
            return false;
        return true;
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
ArrayWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: ArrayWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
ArrayWidget.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.1", type: ArrayWidget, selector: "sf-array", host: { properties: { "class.sf__array": "true" } }, usesInheritance: true, ngImport: i0, template: "<nz-form-item [class.ant-form-item-with-help]=\"showError\">\n  <div nz-col *ngIf=\"schema.title\" [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n    <label [class.ant-form-item-required]=\"ui.required\">\n      {{ schema.title }}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n    <div class=\"sf__array-add\">\n      <button\n        type=\"button\"\n        nz-button\n        [nzType]=\"addType\"\n        [disabled]=\"addDisabled\"\n        (click)=\"addItem()\"\n        [innerHTML]=\"addTitle\"\n      ></button>\n    </div>\n  </div>\n  <div nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n      <div nz-row class=\"sf__array-container\">\n        <ng-container *ngFor=\"let i of $any(formProperty).properties; let idx = index\">\n          <div\n            nz-col\n            *ngIf=\"i.visible && !i.ui.hidden\"\n            [nzSpan]=\"arraySpan\"\n            [attr.data-index]=\"idx\"\n            class=\"sf__array-item\"\n          >\n            <nz-card>\n              <sf-item [formProperty]=\"i\"></sf-item>\n              <span *ngIf=\"showRemove\" class=\"sf__array-remove\" (click)=\"removeItem(idx)\" [attr.title]=\"removeTitle\">\n                <i nz-icon nzType=\"delete\"></i>\n              </span>\n            </nz-card>\n          </div>\n        </ng-container>\n      </div>\n      <div *ngIf=\"!ui.onlyVisual && showError\" class=\"ant-form-explain\">{{ error }}</div>\n      <div *ngIf=\"schema.description\" [innerHTML]=\"ui._description\" class=\"ant-form-extra\"></div>\n    </div>\n  </div>\n</nz-form-item>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { kind: "directive", type: i3.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i4.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { kind: "component", type: i5.NzCardComponent, selector: "nz-card", inputs: ["nzBordered", "nzBorderless", "nzLoading", "nzHoverable", "nzBodyStyle", "nzCover", "nzActions", "nzType", "nzSize", "nzTitle", "nzExtra"], exportAs: ["nzCard"] }, { kind: "directive", type: i6.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i6.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "component", type: i7.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { kind: "directive", type: i8.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i9.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "component", type: i10.SFItemComponent, selector: "sf-item", inputs: ["formProperty", "footer"], exportAs: ["sfItem"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.1", ngImport: i0, type: ArrayWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-array', host: { '[class.sf__array]': 'true' }, preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<nz-form-item [class.ant-form-item-with-help]=\"showError\">\n  <div nz-col *ngIf=\"schema.title\" [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n    <label [class.ant-form-item-required]=\"ui.required\">\n      {{ schema.title }}\n      <span class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n    <div class=\"sf__array-add\">\n      <button\n        type=\"button\"\n        nz-button\n        [nzType]=\"addType\"\n        [disabled]=\"addDisabled\"\n        (click)=\"addItem()\"\n        [innerHTML]=\"addTitle\"\n      ></button>\n    </div>\n  </div>\n  <div nz-col class=\"ant-form-item-control-wrapper\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control\" [class.has-error]=\"showError\">\n      <div nz-row class=\"sf__array-container\">\n        <ng-container *ngFor=\"let i of $any(formProperty).properties; let idx = index\">\n          <div\n            nz-col\n            *ngIf=\"i.visible && !i.ui.hidden\"\n            [nzSpan]=\"arraySpan\"\n            [attr.data-index]=\"idx\"\n            class=\"sf__array-item\"\n          >\n            <nz-card>\n              <sf-item [formProperty]=\"i\"></sf-item>\n              <span *ngIf=\"showRemove\" class=\"sf__array-remove\" (click)=\"removeItem(idx)\" [attr.title]=\"removeTitle\">\n                <i nz-icon nzType=\"delete\"></i>\n              </span>\n            </nz-card>\n          </div>\n        </ng-container>\n      </div>\n      <div *ngIf=\"!ui.onlyVisual && showError\" class=\"ant-form-explain\">{{ error }}</div>\n      <div *ngIf=\"schema.description\" [innerHTML]=\"ui._description\" class=\"ant-form-extra\"></div>\n    </div>\n  </div>\n</nz-form-item>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL2FycmF5L2FycmF5LndpZGdldC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7Ozs7Ozs7QUFTakQsTUFBTSxPQUFPLFdBQVksU0FBUSxpQkFBaUI7SUFQbEQ7O1FBV0UsY0FBUyxHQUFHLENBQUMsQ0FBQztLQWlEZjtJQS9DQyxJQUFJLFdBQVc7UUFDYixPQUFPLENBQ0wsSUFBSSxDQUFDLFFBQVE7WUFDYixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQTZCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUyxDQUFDLENBQ25ILENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNyRCxJQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUk7WUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUE2QixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVM7WUFFaEYsT0FBTyxLQUFLLENBQUM7UUFDZixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3BFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQ25GLENBQUM7SUFFTyxPQUFPO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBRUQsT0FBTztRQUNMLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7d0dBcERVLFdBQVc7NEZBQVgsV0FBVyw0SENmeEIsd3NFQXlEQTsyRkQxQ2EsV0FBVztrQkFQdkIsU0FBUzsrQkFDRSxVQUFVLFFBRWQsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsdUJBQ2hCLEtBQUssaUJBQ1gsaUJBQWlCLENBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgTnpCdXR0b25UeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9idXR0b24nO1xuXG5pbXBvcnQgdHlwZSB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4uLy4uL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgQXJyYXlMYXlvdXRXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1hcnJheScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcnJheS53aWRnZXQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5zZl9fYXJyYXldJzogJ3RydWUnIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEFycmF5V2lkZ2V0IGV4dGVuZHMgQXJyYXlMYXlvdXRXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhZGRUaXRsZSE6IFNhZmVIdG1sO1xuICBhZGRUeXBlITogTnpCdXR0b25UeXBlO1xuICByZW1vdmVUaXRsZT86IHN0cmluZyB8IG51bGw7XG4gIGFycmF5U3BhbiA9IDg7XG5cbiAgZ2V0IGFkZERpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmRpc2FibGVkIHx8XG4gICAgICAodGhpcy5zY2hlbWEubWF4SXRlbXMgIT0gbnVsbCAmJiAodGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllcyBhcyBGb3JtUHJvcGVydHlbXSkubGVuZ3RoID49IHRoaXMuc2NoZW1hLm1heEl0ZW1zISlcbiAgICApO1xuICB9XG5cbiAgZ2V0IHNob3dSZW1vdmUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMucmVtb3ZlVGl0bGUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoXG4gICAgICB0aGlzLnNjaGVtYS5taW5JdGVtcyAhPSBudWxsICYmXG4gICAgICAodGhpcy5mb3JtUHJvcGVydHkucHJvcGVydGllcyBhcyBGb3JtUHJvcGVydHlbXSkubGVuZ3RoIDw9IHRoaXMuc2NoZW1hLm1pbkl0ZW1zIVxuICAgIClcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZ3JpZCwgYWRkVGl0bGUsIGFkZFR5cGUsIHJlbW92YWJsZSwgcmVtb3ZlVGl0bGUgfSA9IHRoaXMudWk7XG4gICAgaWYgKGdyaWQgJiYgZ3JpZC5hcnJheVNwYW4pIHtcbiAgICAgIHRoaXMuYXJyYXlTcGFuID0gZ3JpZC5hcnJheVNwYW47XG4gICAgfVxuXG4gICAgdGhpcy5hZGRUaXRsZSA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGFkZFRpdGxlIHx8IHRoaXMubC5hZGRUZXh0KTtcbiAgICB0aGlzLmFkZFR5cGUgPSBhZGRUeXBlIHx8ICdkYXNoZWQnO1xuICAgIHRoaXMucmVtb3ZlVGl0bGUgPSByZW1vdmFibGUgPT09IGZhbHNlID8gbnVsbCA6IHJlbW92ZVRpdGxlIHx8IHRoaXMubC5yZW1vdmVUZXh0O1xuICB9XG5cbiAgcHJpdmF0ZSByZVZhbGlkKCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogZmFsc2UsIGVtaXRWYWx1ZUV2ZW50OiBmYWxzZSwgZW1pdFZhbGlkYXRvcjogdHJ1ZSB9KTtcbiAgfVxuXG4gIGFkZEl0ZW0oKTogdm9pZCB7XG4gICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLmZvcm1Qcm9wZXJ0eS5hZGQoe30pO1xuICAgIHRoaXMucmVWYWxpZCgpO1xuICAgIGlmICh0aGlzLnVpLmFkZCkge1xuICAgICAgdGhpcy51aS5hZGQocHJvcGVydHkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUl0ZW0oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnJlbW92ZShpbmRleCk7XG4gICAgdGhpcy5yZVZhbGlkKCk7XG4gICAgaWYgKHRoaXMudWkucmVtb3ZlKSB7XG4gICAgICB0aGlzLnVpLnJlbW92ZShpbmRleCk7XG4gICAgfVxuICB9XG59XG4iLCI8bnotZm9ybS1pdGVtIFtjbGFzcy5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscF09XCJzaG93RXJyb3JcIj5cbiAgPGRpdiBuei1jb2wgKm5nSWY9XCJzY2hlbWEudGl0bGVcIiBbbnpTcGFuXT1cInVpLnNwYW5MYWJlbCFcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tbGFiZWxcIj5cbiAgICA8bGFiZWwgW2NsYXNzLmFudC1mb3JtLWl0ZW0tcmVxdWlyZWRdPVwidWkucmVxdWlyZWRcIj5cbiAgICAgIHt7IHNjaGVtYS50aXRsZSB9fVxuICAgICAgPHNwYW4gY2xhc3M9XCJzZl9fb3B0aW9uYWxcIj5cbiAgICAgICAge3sgdWkub3B0aW9uYWwgfX1cbiAgICAgICAgPGlcbiAgICAgICAgICAqbmdJZj1cIm9oXCJcbiAgICAgICAgICBuei10b29sdGlwXG4gICAgICAgICAgW256VG9vbHRpcFRpdGxlXT1cIm9oLnRleHRcIlxuICAgICAgICAgIFtuelRvb2x0aXBQbGFjZW1lbnRdPVwib2gucGxhY2VtZW50XCJcbiAgICAgICAgICBbbnpUb29sdGlwVHJpZ2dlcl09XCJvaC50cmlnZ2VyXCJcbiAgICAgICAgICBbbnpUb29sdGlwT3ZlcmxheUNsYXNzTmFtZV09XCJvaC5vdmVybGF5Q2xhc3NOYW1lXCJcbiAgICAgICAgICBbbnpUb29sdGlwT3ZlcmxheVN0eWxlXT1cIm9oLm92ZXJsYXlTdHlsZVwiXG4gICAgICAgICAgW256VG9vbHRpcE1vdXNlRW50ZXJEZWxheV09XCJvaC5tb3VzZUVudGVyRGVsYXlcIlxuICAgICAgICAgIFtuelRvb2x0aXBNb3VzZUxlYXZlRGVsYXldPVwib2gubW91c2VMZWF2ZURlbGF5XCJcbiAgICAgICAgICBuei1pY29uXG4gICAgICAgICAgW256VHlwZV09XCJvaC5pY29uIVwiXG4gICAgICAgID48L2k+XG4gICAgICA8L3NwYW4+XG4gICAgPC9sYWJlbD5cbiAgICA8ZGl2IGNsYXNzPVwic2ZfX2FycmF5LWFkZFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgbnotYnV0dG9uXG4gICAgICAgIFtuelR5cGVdPVwiYWRkVHlwZVwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJhZGREaXNhYmxlZFwiXG4gICAgICAgIChjbGljayk9XCJhZGRJdGVtKClcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cImFkZFRpdGxlXCJcbiAgICAgID48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgbnotY29sIGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLXdyYXBwZXJcIiBbbnpTcGFuXT1cInVpLnNwYW5Db250cm9sIVwiIFtuek9mZnNldF09XCJ1aS5vZmZzZXRDb250cm9sIVwiPlxuICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2xcIiBbY2xhc3MuaGFzLWVycm9yXT1cInNob3dFcnJvclwiPlxuICAgICAgPGRpdiBuei1yb3cgY2xhc3M9XCJzZl9fYXJyYXktY29udGFpbmVyXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgJGFueShmb3JtUHJvcGVydHkpLnByb3BlcnRpZXM7IGxldCBpZHggPSBpbmRleFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG56LWNvbFxuICAgICAgICAgICAgKm5nSWY9XCJpLnZpc2libGUgJiYgIWkudWkuaGlkZGVuXCJcbiAgICAgICAgICAgIFtuelNwYW5dPVwiYXJyYXlTcGFuXCJcbiAgICAgICAgICAgIFthdHRyLmRhdGEtaW5kZXhdPVwiaWR4XCJcbiAgICAgICAgICAgIGNsYXNzPVwic2ZfX2FycmF5LWl0ZW1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxuei1jYXJkPlxuICAgICAgICAgICAgICA8c2YtaXRlbSBbZm9ybVByb3BlcnR5XT1cImlcIj48L3NmLWl0ZW0+XG4gICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwic2hvd1JlbW92ZVwiIGNsYXNzPVwic2ZfX2FycmF5LXJlbW92ZVwiIChjbGljayk9XCJyZW1vdmVJdGVtKGlkeClcIiBbYXR0ci50aXRsZV09XCJyZW1vdmVUaXRsZVwiPlxuICAgICAgICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZGVsZXRlXCI+PC9pPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L256LWNhcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwiIXVpLm9ubHlWaXN1YWwgJiYgc2hvd0Vycm9yXCIgY2xhc3M9XCJhbnQtZm9ybS1leHBsYWluXCI+e3sgZXJyb3IgfX08L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBbaW5uZXJIVE1MXT1cInVpLl9kZXNjcmlwdGlvblwiIGNsYXNzPVwiYW50LWZvcm0tZXh0cmFcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L256LWZvcm0taXRlbT5cbiJdfQ==