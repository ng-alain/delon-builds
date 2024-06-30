import { Component, Input, ViewEncapsulation, inject } from '@angular/core';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import { NzFormStatusService } from 'ng-zorro-antd/core/form';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/transition-patch";
import * as i2 from "ng-zorro-antd/grid";
import * as i3 from "ng-zorro-antd/form";
import * as i4 from "ng-zorro-antd/icon";
import * as i5 from "ng-zorro-antd/tooltip";
export class SFItemWrapComponent {
    constructor() {
        this.statusSrv = inject(NzFormStatusService);
        this._showTitle = false;
        this.title = null;
    }
    set showTitle(val) {
        this._showTitle = !!val;
    }
    get t() {
        return this.title === null ? this.schema.title : this.title;
    }
    get oh() {
        return this.ui.optionalHelp;
    }
    ngOnChanges() {
        const hasError = !!this.error;
        this.statusSrv.formStatusChanges.next({ status: hasError ? 'error' : '', hasFeedback: !!this.ui.feedback });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SFItemWrapComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.5", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: { id: "id", schema: "schema", ui: "ui", showError: "showError", error: "error", showTitle: "showTitle", title: "title" }, usesOnChanges: true, ngImport: i0, template: "<nz-form-item\n  [style.width.px]=\"ui.width\"\n  [class.ant-form-item-has-error]=\"showError\"\n  [class.ant-form-item-with-help]=\"showError\"\n  [class.ant-form-item-has-success]=\"ui.feedback === 'success'\"\n  [class.ant-form-item-has-warning]=\"ui.feedback === 'warning'\"\n  [class.ant-form-item-has-error]=\"ui.feedback === 'error'\"\n  [class.ant-form-item-is-validating]=\"ui.feedback === 'validating'\"\n  [class.ant-form-item-has-feedback]=\"ui.feedback\"\n>\n  @if (_showTitle) {\n    <div nz-col [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n      @if (t) {\n        <label [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n          <span class=\"sf__label-text\">{{ t }}</span>\n          @if (ui.optional || oh) {\n            <span class=\"sf__optional\">\n              {{ ui.optional }}\n              @if (oh) {\n                <i\n                  nz-tooltip\n                  [nzTooltipTitle]=\"oh.text\"\n                  [nzTooltipPlacement]=\"oh.placement\"\n                  [nzTooltipTrigger]=\"oh.trigger\"\n                  [nzTooltipColor]=\"oh.bgColor\"\n                  [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n                  [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n                  [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n                  [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n                  nz-icon\n                  [nzType]=\"oh.icon!\"\n                ></i>\n              }\n            </span>\n          }\n        </label>\n      }\n    </div>\n  }\n  <div nz-col class=\"ant-form-item-control\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control-input\">\n      <div class=\"ant-form-item-control-input-content\">\n        <ng-content />\n      </div>\n    </div>\n    @if (!ui.onlyVisual && showError) {\n      <div @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\">\n        <div role=\"alert\" class=\"ant-form-item-explain-error\">\n          {{ error }}\n        </div>\n      </div>\n    }\n    @if (schema.description) {\n      <div class=\"ant-form-item-extra\" [innerHTML]=\"ui._description\"></div>\n    }\n  </div>\n</nz-form-item>\n", dependencies: [{ kind: "directive", type: i1.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i2.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i2.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "component", type: i3.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { kind: "directive", type: i4.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i5.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], animations: [helpMotion], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SFItemWrapComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sf-item-wrap', animations: [helpMotion], preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<nz-form-item\n  [style.width.px]=\"ui.width\"\n  [class.ant-form-item-has-error]=\"showError\"\n  [class.ant-form-item-with-help]=\"showError\"\n  [class.ant-form-item-has-success]=\"ui.feedback === 'success'\"\n  [class.ant-form-item-has-warning]=\"ui.feedback === 'warning'\"\n  [class.ant-form-item-has-error]=\"ui.feedback === 'error'\"\n  [class.ant-form-item-is-validating]=\"ui.feedback === 'validating'\"\n  [class.ant-form-item-has-feedback]=\"ui.feedback\"\n>\n  @if (_showTitle) {\n    <div nz-col [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n      @if (t) {\n        <label [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n          <span class=\"sf__label-text\">{{ t }}</span>\n          @if (ui.optional || oh) {\n            <span class=\"sf__optional\">\n              {{ ui.optional }}\n              @if (oh) {\n                <i\n                  nz-tooltip\n                  [nzTooltipTitle]=\"oh.text\"\n                  [nzTooltipPlacement]=\"oh.placement\"\n                  [nzTooltipTrigger]=\"oh.trigger\"\n                  [nzTooltipColor]=\"oh.bgColor\"\n                  [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n                  [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n                  [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n                  [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n                  nz-icon\n                  [nzType]=\"oh.icon!\"\n                ></i>\n              }\n            </span>\n          }\n        </label>\n      }\n    </div>\n  }\n  <div nz-col class=\"ant-form-item-control\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control-input\">\n      <div class=\"ant-form-item-control-input-content\">\n        <ng-content />\n      </div>\n    </div>\n    @if (!ui.onlyVisual && showError) {\n      <div @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\">\n        <div role=\"alert\" class=\"ant-form-item-explain-error\">\n          {{ error }}\n        </div>\n      </div>\n    }\n    @if (schema.description) {\n      <div class=\"ant-form-item-extra\" [innerHTML]=\"ui._description\"></div>\n    }\n  </div>\n</nz-form-item>\n" }]
        }], propDecorators: { id: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtaXRlbS13cmFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3NmLWl0ZW0td3JhcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy9zZi1pdGVtLXdyYXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7OztBQVk5RCxNQUFNLE9BQU8sbUJBQW1CO0lBUGhDO1FBUW1CLGNBQVMsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUV6RCxlQUFVLEdBQVksS0FBSyxDQUFDO1FBVW5CLFVBQUssR0FBa0IsSUFBSSxDQUFDO0tBY3RDO0lBbEJDLElBQ0ksU0FBUyxDQUFDLEdBQXdDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMxQixDQUFDO0lBR0QsSUFBSSxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDL0QsQ0FBQztJQUVELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUE4QixDQUFDO0lBQ2hELENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM5RyxDQUFDOzhHQTFCVSxtQkFBbUI7a0dBQW5CLG1CQUFtQiwyTUNmaEMsaXRFQXlEQSw2NENEOUNjLENBQUMsVUFBVSxDQUFDOzsyRkFJYixtQkFBbUI7a0JBUC9CLFNBQVM7K0JBQ0UsY0FBYyxjQUVaLENBQUMsVUFBVSxDQUFDLHVCQUNILEtBQUssaUJBQ1gsaUJBQWlCLENBQUMsSUFBSTs4QkFNNUIsRUFBRTtzQkFBVixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBRUYsU0FBUztzQkFEWixLQUFLO2dCQUlHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24sIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBoZWxwTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBOekZvcm1TdGF0dXNTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2Zvcm0nO1xuXG5pbXBvcnQgdHlwZSB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEvaW5kZXgnO1xuaW1wb3J0IHR5cGUgeyBTRk9wdGlvbmFsSGVscCwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWl0ZW0td3JhcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZi1pdGVtLXdyYXAuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbaGVscE1vdGlvbl0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNGSXRlbVdyYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIHJlYWRvbmx5IHN0YXR1c1NydiA9IGluamVjdChOekZvcm1TdGF0dXNTZXJ2aWNlKTtcblxuICBfc2hvd1RpdGxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlkPzogc3RyaW5nO1xuICBASW5wdXQoKSBzY2hlbWEhOiBTRlNjaGVtYTtcbiAgQElucHV0KCkgdWkhOiBTRlVJU2NoZW1hSXRlbTtcbiAgQElucHV0KCkgc2hvd0Vycm9yPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZXJyb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBzaG93VGl0bGUodmFsOiBib29sZWFuIHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nob3dUaXRsZSA9ICEhdmFsO1xuICB9XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBnZXQgdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRpdGxlID09PSBudWxsID8gdGhpcy5zY2hlbWEudGl0bGUhIDogdGhpcy50aXRsZTtcbiAgfVxuXG4gIGdldCBvaCgpOiBTRk9wdGlvbmFsSGVscCB7XG4gICAgcmV0dXJuIHRoaXMudWkub3B0aW9uYWxIZWxwIGFzIFNGT3B0aW9uYWxIZWxwO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgY29uc3QgaGFzRXJyb3IgPSAhIXRoaXMuZXJyb3I7XG4gICAgdGhpcy5zdGF0dXNTcnYuZm9ybVN0YXR1c0NoYW5nZXMubmV4dCh7IHN0YXR1czogaGFzRXJyb3IgPyAnZXJyb3InIDogJycsIGhhc0ZlZWRiYWNrOiAhIXRoaXMudWkuZmVlZGJhY2sgfSk7XG4gIH1cbn1cbiIsIjxuei1mb3JtLWl0ZW1cbiAgW3N0eWxlLndpZHRoLnB4XT1cInVpLndpZHRoXCJcbiAgW2NsYXNzLmFudC1mb3JtLWl0ZW0taGFzLWVycm9yXT1cInNob3dFcnJvclwiXG4gIFtjbGFzcy5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscF09XCJzaG93RXJyb3JcIlxuICBbY2xhc3MuYW50LWZvcm0taXRlbS1oYXMtc3VjY2Vzc109XCJ1aS5mZWVkYmFjayA9PT0gJ3N1Y2Nlc3MnXCJcbiAgW2NsYXNzLmFudC1mb3JtLWl0ZW0taGFzLXdhcm5pbmddPVwidWkuZmVlZGJhY2sgPT09ICd3YXJuaW5nJ1wiXG4gIFtjbGFzcy5hbnQtZm9ybS1pdGVtLWhhcy1lcnJvcl09XCJ1aS5mZWVkYmFjayA9PT0gJ2Vycm9yJ1wiXG4gIFtjbGFzcy5hbnQtZm9ybS1pdGVtLWlzLXZhbGlkYXRpbmddPVwidWkuZmVlZGJhY2sgPT09ICd2YWxpZGF0aW5nJ1wiXG4gIFtjbGFzcy5hbnQtZm9ybS1pdGVtLWhhcy1mZWVkYmFja109XCJ1aS5mZWVkYmFja1wiXG4+XG4gIEBpZiAoX3Nob3dUaXRsZSkge1xuICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwidWkuc3BhbkxhYmVsIVwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS1sYWJlbFwiPlxuICAgICAgQGlmICh0KSB7XG4gICAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwiaWRcIiBbY2xhc3MuYW50LWZvcm0taXRlbS1yZXF1aXJlZF09XCJ1aS5fcmVxdWlyZWRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNmX19sYWJlbC10ZXh0XCI+e3sgdCB9fTwvc3Bhbj5cbiAgICAgICAgICBAaWYgKHVpLm9wdGlvbmFsIHx8IG9oKSB7XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNmX19vcHRpb25hbFwiPlxuICAgICAgICAgICAgICB7eyB1aS5vcHRpb25hbCB9fVxuICAgICAgICAgICAgICBAaWYgKG9oKSB7XG4gICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgIG56LXRvb2x0aXBcbiAgICAgICAgICAgICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJvaC50ZXh0XCJcbiAgICAgICAgICAgICAgICAgIFtuelRvb2x0aXBQbGFjZW1lbnRdPVwib2gucGxhY2VtZW50XCJcbiAgICAgICAgICAgICAgICAgIFtuelRvb2x0aXBUcmlnZ2VyXT1cIm9oLnRyaWdnZXJcIlxuICAgICAgICAgICAgICAgICAgW256VG9vbHRpcENvbG9yXT1cIm9oLmJnQ29sb3JcIlxuICAgICAgICAgICAgICAgICAgW256VG9vbHRpcE92ZXJsYXlDbGFzc05hbWVdPVwib2gub3ZlcmxheUNsYXNzTmFtZVwiXG4gICAgICAgICAgICAgICAgICBbbnpUb29sdGlwT3ZlcmxheVN0eWxlXT1cIm9oLm92ZXJsYXlTdHlsZVwiXG4gICAgICAgICAgICAgICAgICBbbnpUb29sdGlwTW91c2VFbnRlckRlbGF5XT1cIm9oLm1vdXNlRW50ZXJEZWxheVwiXG4gICAgICAgICAgICAgICAgICBbbnpUb29sdGlwTW91c2VMZWF2ZURlbGF5XT1cIm9oLm1vdXNlTGVhdmVEZWxheVwiXG4gICAgICAgICAgICAgICAgICBuei1pY29uXG4gICAgICAgICAgICAgICAgICBbbnpUeXBlXT1cIm9oLmljb24hXCJcbiAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICB9XG4gIDxkaXYgbnotY29sIGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCIgW256U3Bhbl09XCJ1aS5zcGFuQ29udHJvbCFcIiBbbnpPZmZzZXRdPVwidWkub2Zmc2V0Q29udHJvbCFcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0LWNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIEBpZiAoIXVpLm9ubHlWaXN1YWwgJiYgc2hvd0Vycm9yKSB7XG4gICAgICA8ZGl2IEBoZWxwTW90aW9uIGNsYXNzPVwiYW50LWZvcm0taXRlbS1leHBsYWluIGFudC1mb3JtLWl0ZW0tZXhwbGFpbi1jb25uZWN0ZWRcIj5cbiAgICAgICAgPGRpdiByb2xlPVwiYWxlcnRcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tZXhwbGFpbi1lcnJvclwiPlxuICAgICAgICAgIHt7IGVycm9yIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgfVxuICAgIEBpZiAoc2NoZW1hLmRlc2NyaXB0aW9uKSB7XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1leHRyYVwiIFtpbm5lckhUTUxdPVwidWkuX2Rlc2NyaXB0aW9uXCI+PC9kaXY+XG4gICAgfVxuICA8L2Rpdj5cbjwvbnotZm9ybS1pdGVtPlxuIl19