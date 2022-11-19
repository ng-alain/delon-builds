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
    constructor(statusSrv) {
        this.statusSrv = statusSrv;
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
        this.statusSrv.formStatusChanges.next({ status: hasError ? 'error' : '', hasFeedback: hasError });
    }
}
SFItemWrapComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: SFItemWrapComponent, deps: [{ token: i1.NzFormStatusService }], target: i0.ɵɵFactoryTarget.Component });
SFItemWrapComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.11", type: SFItemWrapComponent, selector: "sf-item-wrap", inputs: { id: "id", schema: "schema", ui: "ui", showError: "showError", error: "error", showTitle: "showTitle", title: "title" }, usesOnChanges: true, ngImport: i0, template: "<nz-form-item\n  [style.width.px]=\"ui.width\"\n  [class.ant-form-item-has-error]=\"showError\"\n  [class.ant-form-item-with-help]=\"showError\"\n  [class.ant-form-item-has-success]=\"ui.feedback === 'success'\"\n  [class.ant-form-item-has-warning]=\"ui.feedback === 'warning'\"\n  [class.ant-form-item-has-error]=\"ui.feedback === 'error'\"\n  [class.ant-form-item-is-validating]=\"ui.feedback === 'validating'\"\n  [class.ant-form-item-has-feedback]=\"ui.feedback\"\n>\n  <div nz-col *ngIf=\"_showTitle\" [nzSpan]=\"ui.spanLabel!\" class=\"ant-form-item-label\">\n    <label *ngIf=\"t\" [attr.for]=\"id\" [class.ant-form-item-required]=\"ui._required\">\n      <span class=\"sf__label-text\">{{ t }}</span>\n      <span *ngIf=\"ui.optional || oh\" class=\"sf__optional\">\n        {{ ui.optional }}\n        <i\n          *ngIf=\"oh\"\n          nz-tooltip\n          [nzTooltipTitle]=\"oh.text\"\n          [nzTooltipPlacement]=\"oh.placement\"\n          [nzTooltipTrigger]=\"oh.trigger\"\n          [nzTooltipColor]=\"oh.bgColor\"\n          [nzTooltipOverlayClassName]=\"oh.overlayClassName\"\n          [nzTooltipOverlayStyle]=\"oh.overlayStyle\"\n          [nzTooltipMouseEnterDelay]=\"oh.mouseEnterDelay\"\n          [nzTooltipMouseLeaveDelay]=\"oh.mouseLeaveDelay\"\n          nz-icon\n          [nzType]=\"oh.icon!\"\n        ></i>\n      </span>\n    </label>\n  </div>\n  <div nz-col class=\"ant-form-item-control\" [nzSpan]=\"ui.spanControl!\" [nzOffset]=\"ui.offsetControl!\">\n    <div class=\"ant-form-item-control-input\">\n      <div class=\"ant-form-item-control-input-content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n    <div *ngIf=\"!ui.onlyVisual && showError\" @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\">\n      <div role=\"alert\" class=\"ant-form-item-explain-error\">\n        {{ error }}\n      </div>\n    </div>\n    <div *ngIf=\"schema.description\" class=\"ant-form-item-extra\" [innerHTML]=\"ui._description\"></div>\n  </div>\n</nz-form-item>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i4.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i4.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "component", type: i5.NzFormItemComponent, selector: "nz-form-item", exportAs: ["nzFormItem"] }, { kind: "directive", type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i7.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], animations: [helpMotion], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.11", ngImport: i0, type: SFItemWrapComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtaXRlbS13cmFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3NmLWl0ZW0td3JhcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy9zZi1pdGVtLXdyYXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7QUFhMUQsTUFBTSxPQUFPLG1CQUFtQjtJQXFCOUIsWUFBb0IsU0FBOEI7UUFBOUIsY0FBUyxHQUFULFNBQVMsQ0FBcUI7UUFwQmxELGVBQVUsR0FBWSxLQUFLLENBQUM7UUFVbkIsVUFBSyxHQUFrQixJQUFJLENBQUM7SUFVZ0IsQ0FBQztJQWR0RCxJQUNJLFNBQVMsQ0FBQyxHQUF3QztRQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDMUIsQ0FBQztJQUdELElBQUksQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQy9ELENBQUM7SUFFRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBOEIsQ0FBQztJQUNoRCxDQUFDO0lBSUQsV0FBVztRQUNULE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDcEcsQ0FBQzs7aUhBMUJVLG1CQUFtQjtxR0FBbkIsbUJBQW1CLDJNQ2ZoQyxxL0RBOENBLHM5Q0RuQ2MsQ0FBQyxVQUFVLENBQUM7NEZBSWIsbUJBQW1CO2tCQVAvQixTQUFTOytCQUNFLGNBQWMsY0FFWixDQUFDLFVBQVUsQ0FBQyx1QkFDSCxLQUFLLGlCQUNYLGlCQUFpQixDQUFDLElBQUk7MEdBSTVCLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csRUFBRTtzQkFBVixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUVGLFNBQVM7c0JBRFosS0FBSztnQkFJRyxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGhlbHBNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcbmltcG9ydCB7IE56Rm9ybVN0YXR1c1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvZm9ybSc7XG5cbmltcG9ydCB0eXBlIHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYS9pbmRleCc7XG5pbXBvcnQgdHlwZSB7IFNGT3B0aW9uYWxIZWxwLCBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vc2NoZW1hL3VpJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtaXRlbS13cmFwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NmLWl0ZW0td3JhcC5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtoZWxwTW90aW9uXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU0ZJdGVtV3JhcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIF9zaG93VGl0bGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaWQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNjaGVtYSE6IFNGU2NoZW1hO1xuICBASW5wdXQoKSB1aSE6IFNGVUlTY2hlbWFJdGVtO1xuICBASW5wdXQoKSBzaG93RXJyb3I/OiBib29sZWFuO1xuICBASW5wdXQoKSBlcnJvcj86IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IHNob3dUaXRsZSh2YWw6IGJvb2xlYW4gfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fc2hvd1RpdGxlID0gISF2YWw7XG4gIH1cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIGdldCB0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUgPT09IG51bGwgPyB0aGlzLnNjaGVtYS50aXRsZSEgOiB0aGlzLnRpdGxlO1xuICB9XG5cbiAgZ2V0IG9oKCk6IFNGT3B0aW9uYWxIZWxwIHtcbiAgICByZXR1cm4gdGhpcy51aS5vcHRpb25hbEhlbHAgYXMgU0ZPcHRpb25hbEhlbHA7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXR1c1NydjogTnpGb3JtU3RhdHVzU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBjb25zdCBoYXNFcnJvciA9ICEhdGhpcy5lcnJvcjtcbiAgICB0aGlzLnN0YXR1c1Nydi5mb3JtU3RhdHVzQ2hhbmdlcy5uZXh0KHsgc3RhdHVzOiBoYXNFcnJvciA/ICdlcnJvcicgOiAnJywgaGFzRmVlZGJhY2s6IGhhc0Vycm9yIH0pO1xuICB9XG59XG4iLCI8bnotZm9ybS1pdGVtXG4gIFtzdHlsZS53aWR0aC5weF09XCJ1aS53aWR0aFwiXG4gIFtjbGFzcy5hbnQtZm9ybS1pdGVtLWhhcy1lcnJvcl09XCJzaG93RXJyb3JcIlxuICBbY2xhc3MuYW50LWZvcm0taXRlbS13aXRoLWhlbHBdPVwic2hvd0Vycm9yXCJcbiAgW2NsYXNzLmFudC1mb3JtLWl0ZW0taGFzLXN1Y2Nlc3NdPVwidWkuZmVlZGJhY2sgPT09ICdzdWNjZXNzJ1wiXG4gIFtjbGFzcy5hbnQtZm9ybS1pdGVtLWhhcy13YXJuaW5nXT1cInVpLmZlZWRiYWNrID09PSAnd2FybmluZydcIlxuICBbY2xhc3MuYW50LWZvcm0taXRlbS1oYXMtZXJyb3JdPVwidWkuZmVlZGJhY2sgPT09ICdlcnJvcidcIlxuICBbY2xhc3MuYW50LWZvcm0taXRlbS1pcy12YWxpZGF0aW5nXT1cInVpLmZlZWRiYWNrID09PSAndmFsaWRhdGluZydcIlxuICBbY2xhc3MuYW50LWZvcm0taXRlbS1oYXMtZmVlZGJhY2tdPVwidWkuZmVlZGJhY2tcIlxuPlxuICA8ZGl2IG56LWNvbCAqbmdJZj1cIl9zaG93VGl0bGVcIiBbbnpTcGFuXT1cInVpLnNwYW5MYWJlbCFcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tbGFiZWxcIj5cbiAgICA8bGFiZWwgKm5nSWY9XCJ0XCIgW2F0dHIuZm9yXT1cImlkXCIgW2NsYXNzLmFudC1mb3JtLWl0ZW0tcmVxdWlyZWRdPVwidWkuX3JlcXVpcmVkXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInNmX19sYWJlbC10ZXh0XCI+e3sgdCB9fTwvc3Bhbj5cbiAgICAgIDxzcGFuICpuZ0lmPVwidWkub3B0aW9uYWwgfHwgb2hcIiBjbGFzcz1cInNmX19vcHRpb25hbFwiPlxuICAgICAgICB7eyB1aS5vcHRpb25hbCB9fVxuICAgICAgICA8aVxuICAgICAgICAgICpuZ0lmPVwib2hcIlxuICAgICAgICAgIG56LXRvb2x0aXBcbiAgICAgICAgICBbbnpUb29sdGlwVGl0bGVdPVwib2gudGV4dFwiXG4gICAgICAgICAgW256VG9vbHRpcFBsYWNlbWVudF09XCJvaC5wbGFjZW1lbnRcIlxuICAgICAgICAgIFtuelRvb2x0aXBUcmlnZ2VyXT1cIm9oLnRyaWdnZXJcIlxuICAgICAgICAgIFtuelRvb2x0aXBDb2xvcl09XCJvaC5iZ0NvbG9yXCJcbiAgICAgICAgICBbbnpUb29sdGlwT3ZlcmxheUNsYXNzTmFtZV09XCJvaC5vdmVybGF5Q2xhc3NOYW1lXCJcbiAgICAgICAgICBbbnpUb29sdGlwT3ZlcmxheVN0eWxlXT1cIm9oLm92ZXJsYXlTdHlsZVwiXG4gICAgICAgICAgW256VG9vbHRpcE1vdXNlRW50ZXJEZWxheV09XCJvaC5tb3VzZUVudGVyRGVsYXlcIlxuICAgICAgICAgIFtuelRvb2x0aXBNb3VzZUxlYXZlRGVsYXldPVwib2gubW91c2VMZWF2ZURlbGF5XCJcbiAgICAgICAgICBuei1pY29uXG4gICAgICAgICAgW256VHlwZV09XCJvaC5pY29uIVwiXG4gICAgICAgID48L2k+XG4gICAgICA8L3NwYW4+XG4gICAgPC9sYWJlbD5cbiAgPC9kaXY+XG4gIDxkaXYgbnotY29sIGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCIgW256U3Bhbl09XCJ1aS5zcGFuQ29udHJvbCFcIiBbbnpPZmZzZXRdPVwidWkub2Zmc2V0Q29udHJvbCFcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0LWNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cIiF1aS5vbmx5VmlzdWFsICYmIHNob3dFcnJvclwiIEBoZWxwTW90aW9uIGNsYXNzPVwiYW50LWZvcm0taXRlbS1leHBsYWluIGFudC1mb3JtLWl0ZW0tZXhwbGFpbi1jb25uZWN0ZWRcIj5cbiAgICAgIDxkaXYgcm9sZT1cImFsZXJ0XCIgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWV4cGxhaW4tZXJyb3JcIj5cbiAgICAgICAge3sgZXJyb3IgfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgKm5nSWY9XCJzY2hlbWEuZGVzY3JpcHRpb25cIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tZXh0cmFcIiBbaW5uZXJIVE1MXT1cInVpLl9kZXNjcmlwdGlvblwiPjwvZGl2PlxuICA8L2Rpdj5cbjwvbnotZm9ybS1pdGVtPlxuIl19