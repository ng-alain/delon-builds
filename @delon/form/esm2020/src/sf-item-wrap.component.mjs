import { Component, Input, ViewEncapsulation } from '@angular/core';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/form";
import * as i2 from "ng-zorro-antd/grid";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/tooltip";
import * as i5 from "ng-zorro-antd/core/transition-patch";
import * as i6 from "ng-zorro-antd/icon";
export class SFItemWrapComponent {
    constructor() {
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
}
SFItemWrapComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: SFItemWrapComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SFItemWrapComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.5", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: { id: "id", schema: "schema", ui: "ui", showError: "showError", error: "error", showTitle: "showTitle", title: "title" }, ngImport: i0, template: "<nz-form-item\n  [style.width.px]=\"ui.width\"\n  [class.ant-form-item-has-error]=\"showError\"\n  [class.ant-form-item-with-help]=\"showError\"\n  [class.ant-form-item-has-success]=\"ui.feedback === 'success'\"\n  [class.ant-form-item-has-warning]=\"ui.feedback === 'warning'\"\n  [class.ant-form-item-has-error]=\"ui.feedback === 'error'\"\n  [class.ant-form-item-is-validating]=\"ui.feedback === 'validating'\"\n  [class.ant-form-item-has-feedback]=\"ui.feedback\"\n>\n  <div nz-col *ngIf=\"_showTitle\" [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n    <label *ngIf=\"t\" [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n      <span class=\"sf__label-text\">{{ t }}</span>\n      <span *ngIf=\"ui.optional || oh\" class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipColor]=\"oh.bgColor\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n  </div>\n  <div nz-col class=\"ant-form-item-control\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control-input\">\n      <div class=\"ant-form-item-control-input-content\">\n        <ng-content></ng-content>\n      </div>\n      <span class=\"ant-form-item-children-icon\">\n        <i *ngIf=\"ui.feedbackIcon\" nz-icon [nzType]=\"ui.feedbackIcon\"></i>\n      </span>\n    </div>\n    <div *ngIf=\"!ui.onlyVisual && showError\" @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\">\n      <div role=\"alert\" class=\"ant-form-item-explain-error\">\n        {{ error }}\n      </div>\n    </div>\n    <div *ngIf=\"schema.description\" class=\"ant-form-item-extra\" [innerHTML]=\"ui._description\"></div>\n  </div>\n</nz-form-item>\n", components: [{ type: i1.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }], directives: [{ type: i2.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { type: i4.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { type: i5.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], animations: [helpMotion], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: SFItemWrapComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sf-item-wrap', animations: [helpMotion], preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<nz-form-item\n  [style.width.px]=\"ui.width\"\n  [class.ant-form-item-has-error]=\"showError\"\n  [class.ant-form-item-with-help]=\"showError\"\n  [class.ant-form-item-has-success]=\"ui.feedback === 'success'\"\n  [class.ant-form-item-has-warning]=\"ui.feedback === 'warning'\"\n  [class.ant-form-item-has-error]=\"ui.feedback === 'error'\"\n  [class.ant-form-item-is-validating]=\"ui.feedback === 'validating'\"\n  [class.ant-form-item-has-feedback]=\"ui.feedback\"\n>\n  <div nz-col *ngIf=\"_showTitle\" [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n    <label *ngIf=\"t\" [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n      <span class=\"sf__label-text\">{{ t }}</span>\n      <span *ngIf=\"ui.optional || oh\" class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipColor]=\"oh.bgColor\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n  </div>\n  <div nz-col class=\"ant-form-item-control\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control-input\">\n      <div class=\"ant-form-item-control-input-content\">\n        <ng-content></ng-content>\n      </div>\n      <span class=\"ant-form-item-children-icon\">\n        <i *ngIf=\"ui.feedbackIcon\" nz-icon [nzType]=\"ui.feedbackIcon\"></i>\n      </span>\n    </div>\n    <div *ngIf=\"!ui.onlyVisual && showError\" @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\">\n      <div role=\"alert\" class=\"ant-form-item-explain-error\">\n        {{ error }}\n      </div>\n    </div>\n    <div *ngIf=\"schema.description\" class=\"ant-form-item-extra\" [innerHTML]=\"ui._description\"></div>\n  </div>\n</nz-form-item>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtaXRlbS13cmFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3NmLWl0ZW0td3JhcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy9zZi1pdGVtLXdyYXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7OztBQVkxRCxNQUFNLE9BQU8sbUJBQW1CO0lBUGhDO1FBUUUsZUFBVSxHQUFZLEtBQUssQ0FBQztRQVVuQixVQUFLLEdBQWtCLElBQUksQ0FBQztLQVN0QztJQWJDLElBQ0ksU0FBUyxDQUFDLEdBQXdDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMxQixDQUFDO0lBR0QsSUFBSSxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDL0QsQ0FBQztJQUVELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUE4QixDQUFDO0lBQ2hELENBQUM7O2dIQW5CVSxtQkFBbUI7b0dBQW5CLG1CQUFtQixzTENkaEMsd29FQWlEQSw2MUNEdkNjLENBQUMsVUFBVSxDQUFDOzJGQUliLG1CQUFtQjtrQkFQL0IsU0FBUzsrQkFDRSxjQUFjLGNBRVosQ0FBQyxVQUFVLENBQUMsdUJBQ0gsS0FBSyxpQkFDWCxpQkFBaUIsQ0FBQyxJQUFJOzhCQUk1QixFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFFRixTQUFTO3NCQURaLEtBQUs7Z0JBSUcsS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaGVscE1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuXG5pbXBvcnQgdHlwZSB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEvaW5kZXgnO1xuaW1wb3J0IHR5cGUgeyBTRk9wdGlvbmFsSGVscCwgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWl0ZW0td3JhcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZi1pdGVtLXdyYXAuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbaGVscE1vdGlvbl0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNGSXRlbVdyYXBDb21wb25lbnQge1xuICBfc2hvd1RpdGxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlkPzogc3RyaW5nO1xuICBASW5wdXQoKSBzY2hlbWEhOiBTRlNjaGVtYTtcbiAgQElucHV0KCkgdWkhOiBTRlVJU2NoZW1hSXRlbTtcbiAgQElucHV0KCkgc2hvd0Vycm9yPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZXJyb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBzaG93VGl0bGUodmFsOiBib29sZWFuIHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3Nob3dUaXRsZSA9ICEhdmFsO1xuICB9XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBnZXQgdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRpdGxlID09PSBudWxsID8gdGhpcy5zY2hlbWEudGl0bGUhIDogdGhpcy50aXRsZTtcbiAgfVxuXG4gIGdldCBvaCgpOiBTRk9wdGlvbmFsSGVscCB7XG4gICAgcmV0dXJuIHRoaXMudWkub3B0aW9uYWxIZWxwIGFzIFNGT3B0aW9uYWxIZWxwO1xuICB9XG59XG4iLCI8bnotZm9ybS1pdGVtXG4gIFtzdHlsZS53aWR0aC5weF09XCJ1aS53aWR0aFwiXG4gIFtjbGFzcy5hbnQtZm9ybS1pdGVtLWhhcy1lcnJvcl09XCJzaG93RXJyb3JcIlxuICBbY2xhc3MuYW50LWZvcm0taXRlbS13aXRoLWhlbHBdPVwic2hvd0Vycm9yXCJcbiAgW2NsYXNzLmFudC1mb3JtLWl0ZW0taGFzLXN1Y2Nlc3NdPVwidWkuZmVlZGJhY2sgPT09ICdzdWNjZXNzJ1wiXG4gIFtjbGFzcy5hbnQtZm9ybS1pdGVtLWhhcy13YXJuaW5nXT1cInVpLmZlZWRiYWNrID09PSAnd2FybmluZydcIlxuICBbY2xhc3MuYW50LWZvcm0taXRlbS1oYXMtZXJyb3JdPVwidWkuZmVlZGJhY2sgPT09ICdlcnJvcidcIlxuICBbY2xhc3MuYW50LWZvcm0taXRlbS1pcy12YWxpZGF0aW5nXT1cInVpLmZlZWRiYWNrID09PSAndmFsaWRhdGluZydcIlxuICBbY2xhc3MuYW50LWZvcm0taXRlbS1oYXMtZmVlZGJhY2tdPVwidWkuZmVlZGJhY2tcIlxuPlxuICA8ZGl2IG56LWNvbCAqbmdJZj1cIl9zaG93VGl0bGVcIiBbbnpTcGFuXT1cInVpLnNwYW5MYWJlbCFcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tbGFiZWxcIj5cbiAgICA8bGFiZWwgKm5nSWY9XCJ0XCIgW2F0dHIuZm9yXT1cImlkXCIgW2NsYXNzLmFudC1mb3JtLWl0ZW0tcmVxdWlyZWRdPVwidWkuX3JlcXVpcmVkXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInNmX19sYWJlbC10ZXh0XCI+e3sgdCB9fTwvc3Bhbj5cbiAgICAgIDxzcGFuICpuZ0lmPVwidWkub3B0aW9uYWwgfHwgb2hcIiBjbGFzcz1cInNmX19vcHRpb25hbFwiPlxuICAgICAgICB7eyB1aS5vcHRpb25hbCB9fVxuICAgICAgICA8aVxuICAgICAgICAgICpuZ0lmPVwib2hcIlxuICAgICAgICAgIG56LXRvb2x0aXBcbiAgICAgICAgICBbbnpUb29sdGlwVGl0bGVdPVwib2gudGV4dFwiXG4gICAgICAgICAgW256VG9vbHRpcFBsYWNlbWVudF09XCJvaC5wbGFjZW1lbnRcIlxuICAgICAgICAgIFtuelRvb2x0aXBUcmlnZ2VyXT1cIm9oLnRyaWdnZXJcIlxuICAgICAgICAgIFtuelRvb2x0aXBDb2xvcl09XCJvaC5iZ0NvbG9yXCJcbiAgICAgICAgICBbbnpUb29sdGlwT3ZlcmxheUNsYXNzTmFtZV09XCJvaC5vdmVybGF5Q2xhc3NOYW1lXCJcbiAgICAgICAgICBbbnpUb29sdGlwT3ZlcmxheVN0eWxlXT1cIm9oLm92ZXJsYXlTdHlsZVwiXG4gICAgICAgICAgW256VG9vbHRpcE1vdXNlRW50ZXJEZWxheV09XCJvaC5tb3VzZUVudGVyRGVsYXlcIlxuICAgICAgICAgIFtuelRvb2x0aXBNb3VzZUxlYXZlRGVsYXldPVwib2gubW91c2VMZWF2ZURlbGF5XCJcbiAgICAgICAgICBuei1pY29uXG4gICAgICAgICAgW256VHlwZV09XCJvaC5pY29uIVwiXG4gICAgICAgID48L2k+XG4gICAgICA8L3NwYW4+XG4gICAgPC9sYWJlbD5cbiAgPC9kaXY+XG4gIDxkaXYgbnotY29sIGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCIgW256U3Bhbl09XCJ1aS5zcGFuQ29udHJvbCFcIiBbbnpPZmZzZXRdPVwidWkub2Zmc2V0Q29udHJvbCFcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0LWNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY2hpbGRyZW4taWNvblwiPlxuICAgICAgICA8aSAqbmdJZj1cInVpLmZlZWRiYWNrSWNvblwiIG56LWljb24gW256VHlwZV09XCJ1aS5mZWVkYmFja0ljb25cIj48L2k+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cIiF1aS5vbmx5VmlzdWFsICYmIHNob3dFcnJvclwiIEBoZWxwTW90aW9uIGNsYXNzPVwiYW50LWZvcm0taXRlbS1leHBsYWluIGFudC1mb3JtLWl0ZW0tZXhwbGFpbi1jb25uZWN0ZWRcIj5cbiAgICAgIDxkaXYgcm9sZT1cImFsZXJ0XCIgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWV4cGxhaW4tZXJyb3JcIj5cbiAgICAgICAge3sgZXJyb3IgfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tZXh0cmFcIiBbaW5uZXJIVE1MXT1cInVpLl9kZXNjcmlwdGlvblwiPjwvZGl2PlxuICA8L2Rpdj5cbjwvbnotZm9ybS1pdGVtPlxuIl19