import { Component, Input, ViewEncapsulation } from '@angular/core';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/form";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/grid";
import * as i5 from "ng-zorro-antd/form";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "ng-zorro-antd/tooltip";
class SFItemWrapComponent {
    set showTitle(val) {
        this._showTitle = !!val;
    }
    get t() {
        return this.title === null ? this.schema.title : this.title;
    }
    get oh() {
        return this.ui.optionalHelp;
    }
    constructor(statusSrv) {
        this.statusSrv = statusSrv;
        this._showTitle = false;
        this.title = null;
    }
    ngOnChanges() {
        const hasError = !!this.error;
        this.statusSrv.formStatusChanges.next({ status: hasError ? 'error' : '', hasFeedback: !!this.ui.feedback });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: SFItemWrapComponent, deps: [{ token: i1.NzFormStatusService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.2", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: { id: "id", schema: "schema", ui: "ui", showError: "showError", error: "error", showTitle: "showTitle", title: "title" }, usesOnChanges: true, ngImport: i0, template: "<nz-form-item\n  [style.width.px]=\"ui.width\"\n  [class.ant-form-item-has-error]=\"showError\"\n  [class.ant-form-item-with-help]=\"showError\"\n  [class.ant-form-item-has-success]=\"ui.feedback === 'success'\"\n  [class.ant-form-item-has-warning]=\"ui.feedback === 'warning'\"\n  [class.ant-form-item-has-error]=\"ui.feedback === 'error'\"\n  [class.ant-form-item-is-validating]=\"ui.feedback === 'validating'\"\n  [class.ant-form-item-has-feedback]=\"ui.feedback\"\n>\n  <div nz-col *ngIf=\"_showTitle\" [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n    <label *ngIf=\"t\" [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n      <span class=\"sf__label-text\">{{ t }}</span>\n      <span *ngIf=\"ui.optional || oh\" class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipColor]=\"oh.bgColor\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n  </div>\n  <div nz-col class=\"ant-form-item-control\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control-input\">\n      <div class=\"ant-form-item-control-input-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div *ngIf=\"!ui.onlyVisual && showError\" @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\">\n      <div role=\"alert\" class=\"ant-form-item-explain-error\">\n        {{ error }}\n      </div>\n    </div>\n    <div *ngIf=\"schema.description\" class=\"ant-form-item-extra\" [innerHTML]=\"ui._description\"></div>\n  </div>\n</nz-form-item>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i4.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i4.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "component", type: i5.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { kind: "directive", type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i7.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], animations: [helpMotion], encapsulation: i0.ViewEncapsulation.None }); }
}
export { SFItemWrapComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: SFItemWrapComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sf-item-wrap', animations: [helpMotion], preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<nz-form-item\n  [style.width.px]=\"ui.width\"\n  [class.ant-form-item-has-error]=\"showError\"\n  [class.ant-form-item-with-help]=\"showError\"\n  [class.ant-form-item-has-success]=\"ui.feedback === 'success'\"\n  [class.ant-form-item-has-warning]=\"ui.feedback === 'warning'\"\n  [class.ant-form-item-has-error]=\"ui.feedback === 'error'\"\n  [class.ant-form-item-is-validating]=\"ui.feedback === 'validating'\"\n  [class.ant-form-item-has-feedback]=\"ui.feedback\"\n>\n  <div nz-col *ngIf=\"_showTitle\" [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n    <label *ngIf=\"t\" [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n      <span class=\"sf__label-text\">{{ t }}</span>\n      <span *ngIf=\"ui.optional || oh\" class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipColor]=\"oh.bgColor\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n  </div>\n  <div nz-col class=\"ant-form-item-control\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control-input\">\n      <div class=\"ant-form-item-control-input-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div *ngIf=\"!ui.onlyVisual && showError\" @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\">\n      <div role=\"alert\" class=\"ant-form-item-explain-error\">\n        {{ error }}\n      </div>\n    </div>\n    <div *ngIf=\"schema.description\" class=\"ant-form-item-extra\" [innerHTML]=\"ui._description\"></div>\n  </div>\n</nz-form-item>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NzFormStatusService }]; }, propDecorators: { id: [{
                type: Input
            }], schema: [{
                type: Input
            }], ui: [{
                type: Input
            }], showError: [{
                type: Input
            }], error: [{
                type: Input
            }], showTitle: [{
                type: Input
            }], title: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtaXRlbS13cmFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3NmLWl0ZW0td3JhcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy9zZi1pdGVtLXdyYXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7QUFNMUQsTUFPYSxtQkFBbUI7SUFPOUIsSUFDSSxTQUFTLENBQUMsR0FBd0M7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQzFCLENBQUM7SUFHRCxJQUFJLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMvRCxDQUFDO0lBRUQsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQThCLENBQUM7SUFDaEQsQ0FBQztJQUVELFlBQW9CLFNBQThCO1FBQTlCLGNBQVMsR0FBVCxTQUFTLENBQXFCO1FBcEJsRCxlQUFVLEdBQVksS0FBSyxDQUFDO1FBVW5CLFVBQUssR0FBa0IsSUFBSSxDQUFDO0lBVWdCLENBQUM7SUFFdEQsV0FBVztRQUNULE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDOUcsQ0FBQzs4R0ExQlUsbUJBQW1CO2tHQUFuQixtQkFBbUIsMk1DZmhDLHEvREE4Q0EsczlDRG5DYyxDQUFDLFVBQVUsQ0FBQzs7U0FJYixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFQL0IsU0FBUzsrQkFDRSxjQUFjLGNBRVosQ0FBQyxVQUFVLENBQUMsdUJBQ0gsS0FBSyxpQkFDWCxpQkFBaUIsQ0FBQyxJQUFJOzBHQUk1QixFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFFRixTQUFTO3NCQURaLEtBQUs7Z0JBSUcsS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBoZWxwTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBOekZvcm1TdGF0dXNTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2Zvcm0nO1xuXG5pbXBvcnQgdHlwZSB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEvaW5kZXgnO1xuaW1wb3J0IHR5cGUgeyBTRk9wdGlvbmFsSGVscCwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWl0ZW0td3JhcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZi1pdGVtLXdyYXAuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbaGVscE1vdGlvbl0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNGSXRlbVdyYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBfc2hvd1RpdGxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlkPzogc3RyaW5nO1xuICBASW5wdXQoKSBzY2hlbWEhOiBTRlNjaGVtYTtcbiAgQElucHV0KCkgdWkhOiBTRlVJU2NoZW1hSXRlbTtcbiAgQElucHV0KCkgc2hvd0Vycm9yPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZXJyb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBzaG93VGl0bGUodmFsOiBib29sZWFuIHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nob3dUaXRsZSA9ICEhdmFsO1xuICB9XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBnZXQgdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRpdGxlID09PSBudWxsID8gdGhpcy5zY2hlbWEudGl0bGUhIDogdGhpcy50aXRsZTtcbiAgfVxuXG4gIGdldCBvaCgpOiBTRk9wdGlvbmFsSGVscCB7XG4gICAgcmV0dXJuIHRoaXMudWkub3B0aW9uYWxIZWxwIGFzIFNGT3B0aW9uYWxIZWxwO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0dXNTcnY6IE56Rm9ybVN0YXR1c1NlcnZpY2UpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgY29uc3QgaGFzRXJyb3IgPSAhIXRoaXMuZXJyb3I7XG4gICAgdGhpcy5zdGF0dXNTcnYuZm9ybVN0YXR1c0NoYW5nZXMubmV4dCh7IHN0YXR1czogaGFzRXJyb3IgPyAnZXJyb3InIDogJycsIGhhc0ZlZWRiYWNrOiAhIXRoaXMudWkuZmVlZGJhY2sgfSk7XG4gIH1cbn1cbiIsIjxuei1mb3JtLWl0ZW1cbiAgW3N0eWxlLndpZHRoLnB4XT1cInVpLndpZHRoXCJcbiAgW2NsYXNzLmFudC1mb3JtLWl0ZW0taGFzLWVycm9yXT1cInNob3dFcnJvclwiXG4gIFtjbGFzcy5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscF09XCJzaG93RXJyb3JcIlxuICBbY2xhc3MuYW50LWZvcm0taXRlbS1oYXMtc3VjY2Vzc109XCJ1aS5mZWVkYmFjayA9PT0gJ3N1Y2Nlc3MnXCJcbiAgW2NsYXNzLmFudC1mb3JtLWl0ZW0taGFzLXdhcm5pbmddPVwidWkuZmVlZGJhY2sgPT09ICd3YXJuaW5nJ1wiXG4gIFtjbGFzcy5hbnQtZm9ybS1pdGVtLWhhcy1lcnJvcl09XCJ1aS5mZWVkYmFjayA9PT0gJ2Vycm9yJ1wiXG4gIFtjbGFzcy5hbnQtZm9ybS1pdGVtLWlzLXZhbGlkYXRpbmddPVwidWkuZmVlZGJhY2sgPT09ICd2YWxpZGF0aW5nJ1wiXG4gIFtjbGFzcy5hbnQtZm9ybS1pdGVtLWhhcy1mZWVkYmFja109XCJ1aS5mZWVkYmFja1wiXG4+XG4gIDxkaXYgbnotY29sICpuZ0lmPVwiX3Nob3dUaXRsZVwiIFtuelNwYW5dPVwidWkuc3BhbkxhYmVsIVwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS1sYWJlbFwiPlxuICAgIDxsYWJlbCAqbmdJZj1cInRcIiBbYXR0ci5mb3JdPVwiaWRcIiBbY2xhc3MuYW50LWZvcm0taXRlbS1yZXF1aXJlZF09XCJ1aS5fcmVxdWlyZWRcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwic2ZfX2xhYmVsLXRleHRcIj57eyB0IH19PC9zcGFuPlxuICAgICAgPHNwYW4gKm5nSWY9XCJ1aS5vcHRpb25hbCB8fCBvaFwiIGNsYXNzPVwic2ZfX29wdGlvbmFsXCI+XG4gICAgICAgIHt7IHVpLm9wdGlvbmFsIH19XG4gICAgICAgIDxpXG4gICAgICAgICAgKm5nSWY9XCJvaFwiXG4gICAgICAgICAgbnotdG9vbHRpcFxuICAgICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJvaC50ZXh0XCJcbiAgICAgICAgICBbbnpUb29sdGlwUGxhY2VtZW50XT1cIm9oLnBsYWNlbWVudFwiXG4gICAgICAgICAgW256VG9vbHRpcFRyaWdnZXJdPVwib2gudHJpZ2dlclwiXG4gICAgICAgICAgW256VG9vbHRpcENvbG9yXT1cIm9oLmJnQ29sb3JcIlxuICAgICAgICAgIFtuelRvb2x0aXBPdmVybGF5Q2xhc3NOYW1lXT1cIm9oLm92ZXJsYXlDbGFzc05hbWVcIlxuICAgICAgICAgIFtuelRvb2x0aXBPdmVybGF5U3R5bGVdPVwib2gub3ZlcmxheVN0eWxlXCJcbiAgICAgICAgICBbbnpUb29sdGlwTW91c2VFbnRlckRlbGF5XT1cIm9oLm1vdXNlRW50ZXJEZWxheVwiXG4gICAgICAgICAgW256VG9vbHRpcE1vdXNlTGVhdmVEZWxheV09XCJvaC5tb3VzZUxlYXZlRGVsYXlcIlxuICAgICAgICAgIG56LWljb25cbiAgICAgICAgICBbbnpUeXBlXT1cIm9oLmljb24hXCJcbiAgICAgICAgPjwvaT5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuICA8L2Rpdj5cbiAgPGRpdiBuei1jb2wgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2xcIiBbbnpTcGFuXT1cInVpLnNwYW5Db250cm9sIVwiIFtuek9mZnNldF09XCJ1aS5vZmZzZXRDb250cm9sIVwiPlxuICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtaW5wdXRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtaW5wdXQtY29udGVudFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICpuZ0lmPVwiIXVpLm9ubHlWaXN1YWwgJiYgc2hvd0Vycm9yXCIgQGhlbHBNb3Rpb24gY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWV4cGxhaW4gYW50LWZvcm0taXRlbS1leHBsYWluLWNvbm5lY3RlZFwiPlxuICAgICAgPGRpdiByb2xlPVwiYWxlcnRcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tZXhwbGFpbi1lcnJvclwiPlxuICAgICAgICB7eyBlcnJvciB9fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cInNjaGVtYS5kZXNjcmlwdGlvblwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS1leHRyYVwiIFtpbm5lckhUTUxdPVwidWkuX2Rlc2NyaXB0aW9uXCI+PC9kaXY+XG4gIDwvZGl2PlxuPC9uei1mb3JtLWl0ZW0+XG4iXX0=