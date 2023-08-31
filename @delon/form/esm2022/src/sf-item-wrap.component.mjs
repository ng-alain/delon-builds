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
export class SFItemWrapComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: SFItemWrapComponent, deps: [{ token: i1.NzFormStatusService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.3", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: { id: "id", schema: "schema", ui: "ui", showError: "showError", error: "error", showTitle: "showTitle", title: "title" }, usesOnChanges: true, ngImport: i0, template: "<nz-form-item\n  [style.width.px]=\"ui.width\"\n  [class.ant-form-item-has-error]=\"showError\"\n  [class.ant-form-item-with-help]=\"showError\"\n  [class.ant-form-item-has-success]=\"ui.feedback === 'success'\"\n  [class.ant-form-item-has-warning]=\"ui.feedback === 'warning'\"\n  [class.ant-form-item-has-error]=\"ui.feedback === 'error'\"\n  [class.ant-form-item-is-validating]=\"ui.feedback === 'validating'\"\n  [class.ant-form-item-has-feedback]=\"ui.feedback\"\n>\n  <div nz-col *ngIf=\"_showTitle\" [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n    <label *ngIf=\"t\" [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n      <span class=\"sf__label-text\">{{ t }}</span>\n      <span *ngIf=\"ui.optional || oh\" class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipColor]=\"oh.bgColor\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n  </div>\n  <div nz-col class=\"ant-form-item-control\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control-input\">\n      <div class=\"ant-form-item-control-input-content\">\n        <ng-content />\n      </div>\n    </div>\n    <div *ngIf=\"!ui.onlyVisual && showError\" @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\">\n      <div role=\"alert\" class=\"ant-form-item-explain-error\">\n        {{ error }}\n      </div>\n    </div>\n    <div *ngIf=\"schema.description\" class=\"ant-form-item-extra\" [innerHTML]=\"ui._description\"></div>\n  </div>\n</nz-form-item>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i4.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i4.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "component", type: i5.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { kind: "directive", type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i7.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], animations: [helpMotion], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: SFItemWrapComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sf-item-wrap', animations: [helpMotion], preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<nz-form-item\n  [style.width.px]=\"ui.width\"\n  [class.ant-form-item-has-error]=\"showError\"\n  [class.ant-form-item-with-help]=\"showError\"\n  [class.ant-form-item-has-success]=\"ui.feedback === 'success'\"\n  [class.ant-form-item-has-warning]=\"ui.feedback === 'warning'\"\n  [class.ant-form-item-has-error]=\"ui.feedback === 'error'\"\n  [class.ant-form-item-is-validating]=\"ui.feedback === 'validating'\"\n  [class.ant-form-item-has-feedback]=\"ui.feedback\"\n>\n  <div nz-col *ngIf=\"_showTitle\" [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n    <label *ngIf=\"t\" [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n      <span class=\"sf__label-text\">{{ t }}</span>\n      <span *ngIf=\"ui.optional || oh\" class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipColor]=\"oh.bgColor\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n  </div>\n  <div nz-col class=\"ant-form-item-control\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control-input\">\n      <div class=\"ant-form-item-control-input-content\">\n        <ng-content />\n      </div>\n    </div>\n    <div *ngIf=\"!ui.onlyVisual && showError\" @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\">\n      <div role=\"alert\" class=\"ant-form-item-explain-error\">\n        {{ error }}\n      </div>\n    </div>\n    <div *ngIf=\"schema.description\" class=\"ant-form-item-extra\" [innerHTML]=\"ui._description\"></div>\n  </div>\n</nz-form-item>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtaXRlbS13cmFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3NmLWl0ZW0td3JhcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy9zZi1pdGVtLXdyYXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7QUFhMUQsTUFBTSxPQUFPLG1CQUFtQjtJQU85QixJQUNJLFNBQVMsQ0FBQyxHQUF3QztRQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDMUIsQ0FBQztJQUdELElBQUksQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQy9ELENBQUM7SUFFRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBOEIsQ0FBQztJQUNoRCxDQUFDO0lBRUQsWUFBb0IsU0FBOEI7UUFBOUIsY0FBUyxHQUFULFNBQVMsQ0FBcUI7UUFwQmxELGVBQVUsR0FBWSxLQUFLLENBQUM7UUFVbkIsVUFBSyxHQUFrQixJQUFJLENBQUM7SUFVZ0IsQ0FBQztJQUV0RCxXQUFXO1FBQ1QsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM5RyxDQUFDOzhHQTFCVSxtQkFBbUI7a0dBQW5CLG1CQUFtQiwyTUNmaEMsMCtEQThDQSxzOUNEbkNjLENBQUMsVUFBVSxDQUFDOzsyRkFJYixtQkFBbUI7a0JBUC9CLFNBQVM7K0JBQ0UsY0FBYyxjQUVaLENBQUMsVUFBVSxDQUFDLHVCQUNILEtBQUssaUJBQ1gsaUJBQWlCLENBQUMsSUFBSTswR0FJNUIsRUFBRTtzQkFBVixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxFQUFFO3NCQUFWLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBRUYsU0FBUztzQkFEWixLQUFLO2dCQUlHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaGVscE1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpGb3JtU3RhdHVzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9mb3JtJztcblxuaW1wb3J0IHR5cGUgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hL2luZGV4JztcbmltcG9ydCB0eXBlIHsgU0ZPcHRpb25hbEhlbHAsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1pdGVtLXdyYXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2YtaXRlbS13cmFwLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW2hlbHBNb3Rpb25dLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTRkl0ZW1XcmFwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgX3Nob3dUaXRsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpZD86IHN0cmluZztcbiAgQElucHV0KCkgc2NoZW1hITogU0ZTY2hlbWE7XG4gIEBJbnB1dCgpIHVpITogU0ZVSVNjaGVtYUl0ZW07XG4gIEBJbnB1dCgpIHNob3dFcnJvcj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGVycm9yPzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgc2hvd1RpdGxlKHZhbDogYm9vbGVhbiB8IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLl9zaG93VGl0bGUgPSAhIXZhbDtcbiAgfVxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgZ2V0IHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZSA9PT0gbnVsbCA/IHRoaXMuc2NoZW1hLnRpdGxlISA6IHRoaXMudGl0bGU7XG4gIH1cblxuICBnZXQgb2goKTogU0ZPcHRpb25hbEhlbHAge1xuICAgIHJldHVybiB0aGlzLnVpLm9wdGlvbmFsSGVscCBhcyBTRk9wdGlvbmFsSGVscDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhdHVzU3J2OiBOekZvcm1TdGF0dXNTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGNvbnN0IGhhc0Vycm9yID0gISF0aGlzLmVycm9yO1xuICAgIHRoaXMuc3RhdHVzU3J2LmZvcm1TdGF0dXNDaGFuZ2VzLm5leHQoeyBzdGF0dXM6IGhhc0Vycm9yID8gJ2Vycm9yJyA6ICcnLCBoYXNGZWVkYmFjazogISF0aGlzLnVpLmZlZWRiYWNrIH0pO1xuICB9XG59XG4iLCI8bnotZm9ybS1pdGVtXG4gIFtzdHlsZS53aWR0aC5weF09XCJ1aS53aWR0aFwiXG4gIFtjbGFzcy5hbnQtZm9ybS1pdGVtLWhhcy1lcnJvcl09XCJzaG93RXJyb3JcIlxuICBbY2xhc3MuYW50LWZvcm0taXRlbS13aXRoLWhlbHBdPVwic2hvd0Vycm9yXCJcbiAgW2NsYXNzLmFudC1mb3JtLWl0ZW0taGFzLXN1Y2Nlc3NdPVwidWkuZmVlZGJhY2sgPT09ICdzdWNjZXNzJ1wiXG4gIFtjbGFzcy5hbnQtZm9ybS1pdGVtLWhhcy13YXJuaW5nXT1cInVpLmZlZWRiYWNrID09PSAnd2FybmluZydcIlxuICBbY2xhc3MuYW50LWZvcm0taXRlbS1oYXMtZXJyb3JdPVwidWkuZmVlZGJhY2sgPT09ICdlcnJvcidcIlxuICBbY2xhc3MuYW50LWZvcm0taXRlbS1pcy12YWxpZGF0aW5nXT1cInVpLmZlZWRiYWNrID09PSAndmFsaWRhdGluZydcIlxuICBbY2xhc3MuYW50LWZvcm0taXRlbS1oYXMtZmVlZGJhY2tdPVwidWkuZmVlZGJhY2tcIlxuPlxuICA8ZGl2IG56LWNvbCAqbmdJZj1cIl9zaG93VGl0bGVcIiBbbnpTcGFuXT1cInVpLnNwYW5MYWJlbCFcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tbGFiZWxcIj5cbiAgICA8bGFiZWwgKm5nSWY9XCJ0XCIgW2F0dHIuZm9yXT1cImlkXCIgW2NsYXNzLmFudC1mb3JtLWl0ZW0tcmVxdWlyZWRdPVwidWkuX3JlcXVpcmVkXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInNmX19sYWJlbC10ZXh0XCI+e3sgdCB9fTwvc3Bhbj5cbiAgICAgIDxzcGFuICpuZ0lmPVwidWkub3B0aW9uYWwgfHwgb2hcIiBjbGFzcz1cInNmX19vcHRpb25hbFwiPlxuICAgICAgICB7eyB1aS5vcHRpb25hbCB9fVxuICAgICAgICA8aVxuICAgICAgICAgICpuZ0lmPVwib2hcIlxuICAgICAgICAgIG56LXRvb2x0aXBcbiAgICAgICAgICBbbnpUb29sdGlwVGl0bGVdPVwib2gudGV4dFwiXG4gICAgICAgICAgW256VG9vbHRpcFBsYWNlbWVudF09XCJvaC5wbGFjZW1lbnRcIlxuICAgICAgICAgIFtuelRvb2x0aXBUcmlnZ2VyXT1cIm9oLnRyaWdnZXJcIlxuICAgICAgICAgIFtuelRvb2x0aXBDb2xvcl09XCJvaC5iZ0NvbG9yXCJcbiAgICAgICAgICBbbnpUb29sdGlwT3ZlcmxheUNsYXNzTmFtZV09XCJvaC5vdmVybGF5Q2xhc3NOYW1lXCJcbiAgICAgICAgICBbbnpUb29sdGlwT3ZlcmxheVN0eWxlXT1cIm9oLm92ZXJsYXlTdHlsZVwiXG4gICAgICAgICAgW256VG9vbHRpcE1vdXNlRW50ZXJEZWxheV09XCJvaC5tb3VzZUVudGVyRGVsYXlcIlxuICAgICAgICAgIFtuelRvb2x0aXBNb3VzZUxlYXZlRGVsYXldPVwib2gubW91c2VMZWF2ZURlbGF5XCJcbiAgICAgICAgICBuei1pY29uXG4gICAgICAgICAgW256VHlwZV09XCJvaC5pY29uIVwiXG4gICAgICAgID48L2k+XG4gICAgICA8L3NwYW4+XG4gICAgPC9sYWJlbD5cbiAgPC9kaXY+XG4gIDxkaXYgbnotY29sIGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCIgW256U3Bhbl09XCJ1aS5zcGFuQ29udHJvbCFcIiBbbnpPZmZzZXRdPVwidWkub2Zmc2V0Q29udHJvbCFcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0LWNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgKm5nSWY9XCIhdWkub25seVZpc3VhbCAmJiBzaG93RXJyb3JcIiBAaGVscE1vdGlvbiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tZXhwbGFpbiBhbnQtZm9ybS1pdGVtLWV4cGxhaW4tY29ubmVjdGVkXCI+XG4gICAgICA8ZGl2IHJvbGU9XCJhbGVydFwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS1leHBsYWluLWVycm9yXCI+XG4gICAgICAgIHt7IGVycm9yIH19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICpuZ0lmPVwic2NoZW1hLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWV4dHJhXCIgW2lubmVySFRNTF09XCJ1aS5fZGVzY3JpcHRpb25cIj48L2Rpdj5cbiAgPC9kaXY+XG48L256LWZvcm0taXRlbT5cbiJdfQ==