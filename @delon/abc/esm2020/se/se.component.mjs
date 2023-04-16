import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, Host, Input, Optional, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControlName, NgModel, RequiredValidator } from '@angular/forms';
import { Subject, filter, takeUntil } from 'rxjs';
import { isEmpty } from '@delon/util/browser';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import { NzFormStatusService } from 'ng-zorro-antd/core/form';
import * as i0 from "@angular/core";
import * as i1 from "./se-container.component";
import * as i2 from "ng-zorro-antd/core/form";
import * as i3 from "@delon/theme";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/tooltip";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "ng-zorro-antd/core/outlet";
const prefixCls = `se`;
let nextUniqueId = 0;
export class SEComponent {
    set error(val) {
        this.errorData = typeof val === 'string' || val instanceof TemplateRef ? { '': val } : val;
    }
    set id(value) {
        this._id = value;
        this._autoId = false;
    }
    // #endregion
    get paddingValue() {
        return this.parent.gutter / 2;
    }
    get showErr() {
        return this.invalid && !!this._error && !this.compact;
    }
    get compact() {
        return this.parent.size === 'compact';
    }
    get ngControl() {
        return this.ngModel || this.formControlName;
    }
    constructor(el, parent, statusSrv, rep, ren, cdr) {
        this.parent = parent;
        this.statusSrv = statusSrv;
        this.rep = rep;
        this.ren = ren;
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.clsMap = [];
        this.inited = false;
        this.onceFlag = false;
        this.errorData = {};
        this.isBindModel = false;
        this.invalid = false;
        this._labelWidth = null;
        this._noColon = null;
        // #region fields
        this.optional = null;
        this.optionalHelp = null;
        this.required = false;
        this.controlClass = '';
        this.hideLabel = false;
        this._id = `_se-${++nextUniqueId}`;
        this._autoId = true;
        if (parent == null) {
            throw new Error(`[se] must include 'se-container' component`);
        }
        this.el = el.nativeElement;
        parent.errorNotify
            .pipe(takeUntil(this.destroy$), filter(w => this.inited && this.ngControl != null && this.ngControl.name === w.name))
            .subscribe(item => {
            this.error = item.error;
            this.updateStatus(this.ngControl.invalid);
        });
    }
    setClass() {
        const { el, ren, clsMap, col, parent, cdr, line, labelWidth, rep, noColon } = this;
        this._noColon = noColon != null ? noColon : parent.noColon;
        this._labelWidth = parent.nzLayout === 'horizontal' ? (labelWidth != null ? labelWidth : parent.labelWidth) : null;
        clsMap.forEach(cls => ren.removeClass(el, cls));
        clsMap.length = 0;
        const repCls = parent.nzLayout === 'horizontal' ? rep.genCls(col != null ? col : parent.colInCon || parent.col) : [];
        clsMap.push(`ant-form-item`, ...repCls, `${prefixCls}__item`);
        if (line || parent.line) {
            clsMap.push(`${prefixCls}__line`);
        }
        clsMap.forEach(cls => ren.addClass(el, cls));
        cdr.detectChanges();
        return this;
    }
    bindModel() {
        if (!this.ngControl || this.isBindModel)
            return;
        this.isBindModel = true;
        this.ngControl.statusChanges.pipe(takeUntil(this.destroy$)).subscribe(res => this.updateStatus(res === 'INVALID'));
        if (this._autoId) {
            const controlAccessor = this.ngControl.valueAccessor;
            const control = (controlAccessor?.elementRef || controlAccessor?._elementRef)?.nativeElement;
            if (!!control) {
                if (control.id) {
                    this._id = control.id;
                }
                else {
                    control.id = this._id;
                }
            }
        }
        // auto required
        if (this.required !== true) {
            const rawValidators = this.ngControl?._rawValidators;
            this.required = rawValidators.find(w => w instanceof RequiredValidator) != null;
            this.cdr.detectChanges();
        }
    }
    updateStatus(invalid) {
        if (this.ngControl?.disabled || this.ngControl?.isDisabled) {
            return;
        }
        this.invalid =
            !this.onceFlag && invalid && this.parent.ingoreDirty === false && !this.ngControl?.dirty ? false : invalid;
        const errors = this.ngControl?.errors;
        if (errors != null && Object.keys(errors).length > 0) {
            const key = Object.keys(errors)[0] || '';
            const err = this.errorData[key];
            this._error = err != null ? err : this.errorData[''] || '';
        }
        this.statusSrv.formStatusChanges.next({ status: this.invalid ? 'error' : '', hasFeedback: false });
        this.cdr.detectChanges();
    }
    checkContent() {
        const el = this.contentElement.nativeElement;
        const cls = `${prefixCls}__item-empty`;
        if (isEmpty(el)) {
            this.ren.addClass(el, cls);
        }
        else {
            this.ren.removeClass(el, cls);
        }
    }
    ngAfterContentInit() {
        this.checkContent();
    }
    ngOnChanges() {
        this.onceFlag = this.parent.firstVisual;
        if (this.inited) {
            this.setClass().bindModel();
        }
    }
    ngAfterViewInit() {
        this.setClass().bindModel();
        this.inited = true;
        if (this.onceFlag) {
            Promise.resolve().then(() => {
                this.updateStatus(this.ngControl?.invalid);
                this.onceFlag = false;
            });
        }
    }
    ngOnDestroy() {
        const { destroy$ } = this;
        destroy$.next();
        destroy$.complete();
    }
}
SEComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: SEComponent, deps: [{ token: i0.ElementRef }, { token: i1.SEContainerComponent, host: true, optional: true }, { token: i2.NzFormStatusService }, { token: i3.ResponsiveService }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
SEComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.7", type: SEComponent, selector: "se", inputs: { optional: "optional", optionalHelp: "optionalHelp", optionalHelpColor: "optionalHelpColor", error: "error", extra: "extra", label: "label", col: "col", required: "required", controlClass: "controlClass", line: "line", labelWidth: "labelWidth", noColon: "noColon", hideLabel: "hideLabel", id: "id" }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue", "class.se__hide-label": "hideLabel", "class.ant-form-item-has-error": "invalid", "class.ant-form-item-with-help": "showErr" } }, providers: [NzFormStatusService], queries: [{ propertyName: "ngModel", first: true, predicate: NgModel, descendants: true, static: true }, { propertyName: "formControlName", first: true, predicate: FormControlName, descendants: true, static: true }], viewQueries: [{ propertyName: "contentElement", first: true, predicate: ["contentElement"], descendants: true, static: true }], exportAs: ["se"], usesOnChanges: true, ngImport: i0, template: "<div class=\"ant-form-item-label\" [class.se__nolabel]=\"hideLabel || !label\" [style.width.px]=\"_labelWidth\">\n  <label\n    *ngIf=\"label\"\n    [attr.for]=\"_id\"\n    class=\"se__label\"\n    [ngClass]=\"{ 'ant-form-item-required': required, 'se__no-colon': _noColon }\"\n  >\n    <span class=\"se__label-text\">\n      <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    <span *ngIf=\"optional || optionalHelp\" class=\"se__label-optional\" [class.se__label-optional-no-text]=\"!optional\">\n      <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n      <i\n        *ngIf=\"optionalHelp\"\n        nz-tooltip\n        [nzTooltipTitle]=\"optionalHelp\"\n        [nzTooltipColor]=\"optionalHelpColor\"\n        nz-icon\n        nzType=\"question-circle\"\n      ></i>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control se__control\">\n  <div class=\"ant-form-item-control-input {{ controlClass }}\">\n    <div class=\"ant-form-item-control-input-content\" (cdkObserveContent)=\"checkContent()\" #contentElement>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\" *ngIf=\"showErr\">\n    <div role=\"alert\" class=\"ant-form-item-explain-error\">\n      <ng-container *nzStringTemplateOutlet=\"_error\">{{ _error }}</ng-container>\n    </div>\n  </div>\n  <div *ngIf=\"extra && !compact\" class=\"ant-form-item-extra\">\n    <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i7.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], animations: [helpMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber(null)
], SEComponent.prototype, "col", void 0);
__decorate([
    InputBoolean()
], SEComponent.prototype, "required", void 0);
__decorate([
    InputBoolean(null)
], SEComponent.prototype, "line", void 0);
__decorate([
    InputNumber(null)
], SEComponent.prototype, "labelWidth", void 0);
__decorate([
    InputBoolean(null)
], SEComponent.prototype, "noColon", void 0);
__decorate([
    InputBoolean()
], SEComponent.prototype, "hideLabel", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: SEComponent, decorators: [{
            type: Component,
            args: [{ selector: 'se', exportAs: 'se', host: {
                        '[style.padding-left.px]': 'paddingValue',
                        '[style.padding-right.px]': 'paddingValue',
                        '[class.se__hide-label]': 'hideLabel',
                        '[class.ant-form-item-has-error]': 'invalid',
                        '[class.ant-form-item-with-help]': 'showErr'
                    }, preserveWhitespaces: false, providers: [NzFormStatusService], animations: [helpMotion], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"ant-form-item-label\" [class.se__nolabel]=\"hideLabel || !label\" [style.width.px]=\"_labelWidth\">\n  <label\n    *ngIf=\"label\"\n    [attr.for]=\"_id\"\n    class=\"se__label\"\n    [ngClass]=\"{ 'ant-form-item-required': required, 'se__no-colon': _noColon }\"\n  >\n    <span class=\"se__label-text\">\n      <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    <span *ngIf=\"optional || optionalHelp\" class=\"se__label-optional\" [class.se__label-optional-no-text]=\"!optional\">\n      <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n      <i\n        *ngIf=\"optionalHelp\"\n        nz-tooltip\n        [nzTooltipTitle]=\"optionalHelp\"\n        [nzTooltipColor]=\"optionalHelpColor\"\n        nz-icon\n        nzType=\"question-circle\"\n      ></i>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control se__control\">\n  <div class=\"ant-form-item-control-input {{ controlClass }}\">\n    <div class=\"ant-form-item-control-input-content\" (cdkObserveContent)=\"checkContent()\" #contentElement>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\" *ngIf=\"showErr\">\n    <div role=\"alert\" class=\"ant-form-item-explain-error\">\n      <ng-container *nzStringTemplateOutlet=\"_error\">{{ _error }}</ng-container>\n    </div>\n  </div>\n  <div *ngIf=\"extra && !compact\" class=\"ant-form-item-extra\">\n    <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.SEContainerComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }, { type: i2.NzFormStatusService }, { type: i3.ResponsiveService }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { ngModel: [{
                type: ContentChild,
                args: [NgModel, { static: true }]
            }], formControlName: [{
                type: ContentChild,
                args: [FormControlName, { static: true }]
            }], contentElement: [{
                type: ViewChild,
                args: ['contentElement', { static: true }]
            }], optional: [{
                type: Input
            }], optionalHelp: [{
                type: Input
            }], optionalHelpColor: [{
                type: Input
            }], error: [{
                type: Input
            }], extra: [{
                type: Input
            }], label: [{
                type: Input
            }], col: [{
                type: Input
            }], required: [{
                type: Input
            }], controlClass: [{
                type: Input
            }], line: [{
                type: Input
            }], labelWidth: [{
                type: Input
            }], noColon: [{
                type: Input
            }], hideLabel: [{
                type: Input
            }], id: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3NlL3NlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zZS9zZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUdMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUVaLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUVSLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7OztBQU05RCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDdkIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBbUJyQixNQUFNLE9BQU8sV0FBVztJQTZCdEIsSUFDSSxLQUFLLENBQUMsR0FBZ0I7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksR0FBRyxZQUFZLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUM3RixDQUFDO0lBV0QsSUFDSSxF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LEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ3NCLEdBQUc7c0JBQTlCLEtBQUs7Z0JBQ21CLFFBQVE7c0JBQWhDLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDdUIsSUFBSTtzQkFBaEMsS0FBSztnQkFDc0IsVUFBVTtzQkFBckMsS0FBSztnQkFDdUIsT0FBTztzQkFBbkMsS0FBSztnQkFDbUIsU0FBUztzQkFBakMsS0FBSztnQkFHRixFQUFFO3NCQURMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xOYW1lLCBOZ01vZGVsLCBSZXF1aXJlZFZhbGlkYXRvciwgVmFsaWRhdG9yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCwgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgUmVzcG9uc2l2ZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ0BkZWxvbi91dGlsL2Jyb3dzZXInO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBoZWxwTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBOekZvcm1TdGF0dXNTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2Zvcm0nO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBTRUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vc2UtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRUVycm9yLCBTRUVycm9yVHlwZSB9IGZyb20gJy4vc2UudHlwZXMnO1xuXG5jb25zdCBwcmVmaXhDbHMgPSBgc2VgO1xubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlJyxcbiAgZXhwb3J0QXM6ICdzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLnBhZGRpbmctbGVmdC5weF0nOiAncGFkZGluZ1ZhbHVlJyxcbiAgICAnW3N0eWxlLnBhZGRpbmctcmlnaHQucHhdJzogJ3BhZGRpbmdWYWx1ZScsXG4gICAgJ1tjbGFzcy5zZV9faGlkZS1sYWJlbF0nOiAnaGlkZUxhYmVsJyxcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0taGFzLWVycm9yXSc6ICdpbnZhbGlkJyxcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0td2l0aC1oZWxwXSc6ICdzaG93RXJyJ1xuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzOiBbTnpGb3JtU3RhdHVzU2VydmljZV0sXG4gIGFuaW1hdGlvbnM6IFtoZWxwTW90aW9uXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU0VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb2w6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVxdWlyZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xpbmU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xhYmVsV2lkdGg6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbm9Db2xvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfaGlkZUxhYmVsOiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBAQ29udGVudENoaWxkKE5nTW9kZWwsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgcmVhZG9ubHkgbmdNb2RlbD86IE5nTW9kZWw7XG4gIEBDb250ZW50Q2hpbGQoRm9ybUNvbnRyb2xOYW1lLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwcml2YXRlIHJlYWRvbmx5IGZvcm1Db250cm9sTmFtZT86IEZvcm1Db250cm9sTmFtZTtcbiAgQFZpZXdDaGlsZCgnY29udGVudEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIHJlYWRvbmx5IGNvbnRlbnRFbGVtZW50ITogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBjbHNNYXA6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgb25jZUZsYWcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBlcnJvckRhdGE6IFNFRXJyb3IgPSB7fTtcbiAgcHJpdmF0ZSBpc0JpbmRNb2RlbCA9IGZhbHNlO1xuICBpbnZhbGlkID0gZmFsc2U7XG4gIF9sYWJlbFdpZHRoOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgX25vQ29sb246IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcbiAgX2Vycm9yPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBvcHRpb25hbD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG9wdGlvbmFsSGVscD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG9wdGlvbmFsSGVscENvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgZXJyb3IodmFsOiBTRUVycm9yVHlwZSkge1xuICAgIHRoaXMuZXJyb3JEYXRhID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgdmFsIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYgPyB7ICcnOiB2YWwgfSA6IHZhbDtcbiAgfVxuICBASW5wdXQoKSBleHRyYT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcbiAgQElucHV0KCkgbGFiZWw/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBjb2w/OiBudW1iZXIgfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVxdWlyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgY29udHJvbENsYXNzPzogc3RyaW5nIHwgbnVsbCA9ICcnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKG51bGwpIGxpbmU/OiBib29sZWFuIHwgbnVsbDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGxhYmVsV2lkdGg/OiBudW1iZXIgfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKG51bGwpIG5vQ29sb24/OiBib29sZWFuIHwgbnVsbDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVMYWJlbCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgICB0aGlzLl9hdXRvSWQgPSBmYWxzZTtcbiAgfVxuXG4gIF9pZCA9IGBfc2UtJHsrK25leHRVbmlxdWVJZH1gO1xuICBfYXV0b0lkID0gdHJ1ZTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IHBhZGRpbmdWYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiAodGhpcy5wYXJlbnQuZ3V0dGVyIGFzIG51bWJlcikgLyAyO1xuICB9XG5cbiAgZ2V0IHNob3dFcnIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCAmJiAhIXRoaXMuX2Vycm9yICYmICF0aGlzLmNvbXBhY3Q7XG4gIH1cblxuICBnZXQgY29tcGFjdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuc2l6ZSA9PT0gJ2NvbXBhY3QnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgbmdDb250cm9sKCk6IE5nTW9kZWwgfCBGb3JtQ29udHJvbE5hbWUgfCBudWxsIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5uZ01vZGVsIHx8IHRoaXMuZm9ybUNvbnRyb2xOYW1lO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIHBhcmVudDogU0VDb250YWluZXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSBzdGF0dXNTcnY6IE56Rm9ybVN0YXR1c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZXA6IFJlc3BvbnNpdmVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc2VdIG11c3QgaW5jbHVkZSAnc2UtY29udGFpbmVyJyBjb21wb25lbnRgKTtcbiAgICB9XG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcGFyZW50LmVycm9yTm90aWZ5XG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICBmaWx0ZXIodyA9PiB0aGlzLmluaXRlZCAmJiB0aGlzLm5nQ29udHJvbCAhPSBudWxsICYmIHRoaXMubmdDb250cm9sLm5hbWUgPT09IHcubmFtZSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoaXRlbSA9PiB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBpdGVtLmVycm9yO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1cyh0aGlzLm5nQ29udHJvbCEuaW52YWxpZCEpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCk6IHRoaXMge1xuICAgIGNvbnN0IHsgZWwsIHJlbiwgY2xzTWFwLCBjb2wsIHBhcmVudCwgY2RyLCBsaW5lLCBsYWJlbFdpZHRoLCByZXAsIG5vQ29sb24gfSA9IHRoaXM7XG4gICAgdGhpcy5fbm9Db2xvbiA9IG5vQ29sb24gIT0gbnVsbCA/IG5vQ29sb24gOiBwYXJlbnQubm9Db2xvbjtcbiAgICB0aGlzLl9sYWJlbFdpZHRoID0gcGFyZW50Lm56TGF5b3V0ID09PSAnaG9yaXpvbnRhbCcgPyAobGFiZWxXaWR0aCAhPSBudWxsID8gbGFiZWxXaWR0aCA6IHBhcmVudC5sYWJlbFdpZHRoKSA6IG51bGw7XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5yZW1vdmVDbGFzcyhlbCwgY2xzKSk7XG4gICAgY2xzTWFwLmxlbmd0aCA9IDA7XG4gICAgY29uc3QgcmVwQ2xzID1cbiAgICAgIHBhcmVudC5uekxheW91dCA9PT0gJ2hvcml6b250YWwnID8gcmVwLmdlbkNscyhjb2wgIT0gbnVsbCA/IGNvbCA6IHBhcmVudC5jb2xJbkNvbiB8fCBwYXJlbnQuY29sKSA6IFtdO1xuICAgIGNsc01hcC5wdXNoKGBhbnQtZm9ybS1pdGVtYCwgLi4ucmVwQ2xzLCBgJHtwcmVmaXhDbHN9X19pdGVtYCk7XG4gICAgaWYgKGxpbmUgfHwgcGFyZW50LmxpbmUpIHtcbiAgICAgIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX2xpbmVgKTtcbiAgICB9XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5hZGRDbGFzcyhlbCwgY2xzKSk7XG4gICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgYmluZE1vZGVsKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5uZ0NvbnRyb2wgfHwgdGhpcy5pc0JpbmRNb2RlbCkgcmV0dXJuO1xuXG4gICAgdGhpcy5pc0JpbmRNb2RlbCA9IHRydWU7XG4gICAgdGhpcy5uZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlcyEucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShyZXMgPT4gdGhpcy51cGRhdGVTdGF0dXMocmVzID09PSAnSU5WQUxJRCcpKTtcbiAgICBpZiAodGhpcy5fYXV0b0lkKSB7XG4gICAgICBjb25zdCBjb250cm9sQWNjZXNzb3IgPSB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yIGFzIE56U2FmZUFueTtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSAoY29udHJvbEFjY2Vzc29yPy5lbGVtZW50UmVmIHx8IGNvbnRyb2xBY2Nlc3Nvcj8uX2VsZW1lbnRSZWYpPy5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKCEhY29udHJvbCkge1xuICAgICAgICBpZiAoY29udHJvbC5pZCkge1xuICAgICAgICAgIHRoaXMuX2lkID0gY29udHJvbC5pZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250cm9sLmlkID0gdGhpcy5faWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gYXV0byByZXF1aXJlZFxuICAgIGlmICh0aGlzLnJlcXVpcmVkICE9PSB0cnVlKSB7XG4gICAgICBjb25zdCByYXdWYWxpZGF0b3JzID0gKHRoaXMubmdDb250cm9sIGFzIE56U2FmZUFueSk/Ll9yYXdWYWxpZGF0b3JzIGFzIFZhbGlkYXRvcltdO1xuICAgICAgdGhpcy5yZXF1aXJlZCA9IHJhd1ZhbGlkYXRvcnMuZmluZCh3ID0+IHcgaW5zdGFuY2VvZiBSZXF1aXJlZFZhbGlkYXRvcikgIT0gbnVsbDtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVN0YXR1cyhpbnZhbGlkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sPy5kaXNhYmxlZCB8fCB0aGlzLm5nQ29udHJvbD8uaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmludmFsaWQgPVxuICAgICAgIXRoaXMub25jZUZsYWcgJiYgaW52YWxpZCAmJiB0aGlzLnBhcmVudC5pbmdvcmVEaXJ0eSA9PT0gZmFsc2UgJiYgIXRoaXMubmdDb250cm9sPy5kaXJ0eSA/IGZhbHNlIDogaW52YWxpZDtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLm5nQ29udHJvbD8uZXJyb3JzO1xuICAgIGlmIChlcnJvcnMgIT0gbnVsbCAmJiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGVycm9ycylbMF0gfHwgJyc7XG4gICAgICBjb25zdCBlcnIgPSB0aGlzLmVycm9yRGF0YVtrZXldO1xuICAgICAgdGhpcy5fZXJyb3IgPSBlcnIgIT0gbnVsbCA/IGVyciA6IHRoaXMuZXJyb3JEYXRhWycnXSB8fCAnJztcbiAgICB9XG5cbiAgICB0aGlzLnN0YXR1c1Nydi5mb3JtU3RhdHVzQ2hhbmdlcy5uZXh0KHsgc3RhdHVzOiB0aGlzLmludmFsaWQgPyAnZXJyb3InIDogJycsIGhhc0ZlZWRiYWNrOiBmYWxzZSB9KTtcblxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBjbHMgPSBgJHtwcmVmaXhDbHN9X19pdGVtLWVtcHR5YDtcbiAgICBpZiAoaXNFbXB0eShlbCkpIHtcbiAgICAgIHRoaXMucmVuLmFkZENsYXNzKGVsLCBjbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbi5yZW1vdmVDbGFzcyhlbCwgY2xzKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMub25jZUZsYWcgPSB0aGlzLnBhcmVudC5maXJzdFZpc3VhbDtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3MoKS5iaW5kTW9kZWwoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpLmJpbmRNb2RlbCgpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5vbmNlRmxhZykge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKHRoaXMubmdDb250cm9sPy5pbnZhbGlkISk7XG4gICAgICAgIHRoaXMub25jZUZsYWcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZGVzdHJveSQgfSA9IHRoaXM7XG4gICAgZGVzdHJveSQubmV4dCgpO1xuICAgIGRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWxhYmVsXCIgW2NsYXNzLnNlX19ub2xhYmVsXT1cImhpZGVMYWJlbCB8fCAhbGFiZWxcIiBbc3R5bGUud2lkdGgucHhdPVwiX2xhYmVsV2lkdGhcIj5cbiAgPGxhYmVsXG4gICAgKm5nSWY9XCJsYWJlbFwiXG4gICAgW2F0dHIuZm9yXT1cIl9pZFwiXG4gICAgY2xhc3M9XCJzZV9fbGFiZWxcIlxuICAgIFtuZ0NsYXNzXT1cInsgJ2FudC1mb3JtLWl0ZW0tcmVxdWlyZWQnOiByZXF1aXJlZCwgJ3NlX19uby1jb2xvbic6IF9ub0NvbG9uIH1cIlxuICA+XG4gICAgPHNwYW4gY2xhc3M9XCJzZV9fbGFiZWwtdGV4dFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImxhYmVsXCI+e3sgbGFiZWwgfX08L25nLWNvbnRhaW5lcj5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCJvcHRpb25hbCB8fCBvcHRpb25hbEhlbHBcIiBjbGFzcz1cInNlX19sYWJlbC1vcHRpb25hbFwiIFtjbGFzcy5zZV9fbGFiZWwtb3B0aW9uYWwtbm8tdGV4dF09XCIhb3B0aW9uYWxcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJvcHRpb25hbFwiPnt7IG9wdGlvbmFsIH19PC9uZy1jb250YWluZXI+XG4gICAgICA8aVxuICAgICAgICAqbmdJZj1cIm9wdGlvbmFsSGVscFwiXG4gICAgICAgIG56LXRvb2x0aXBcbiAgICAgICAgW256VG9vbHRpcFRpdGxlXT1cIm9wdGlvbmFsSGVscFwiXG4gICAgICAgIFtuelRvb2x0aXBDb2xvcl09XCJvcHRpb25hbEhlbHBDb2xvclwiXG4gICAgICAgIG56LWljb25cbiAgICAgICAgbnpUeXBlPVwicXVlc3Rpb24tY2lyY2xlXCJcbiAgICAgID48L2k+XG4gICAgPC9zcGFuPlxuICA8L2xhYmVsPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sIHNlX19jb250cm9sXCI+XG4gIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtaW5wdXQge3sgY29udHJvbENsYXNzIH19XCI+XG4gICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC1pbnB1dC1jb250ZW50XCIgKGNka09ic2VydmVDb250ZW50KT1cImNoZWNrQ29udGVudCgpXCIgI2NvbnRlbnRFbGVtZW50PlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBAaGVscE1vdGlvbiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tZXhwbGFpbiBhbnQtZm9ybS1pdGVtLWV4cGxhaW4tY29ubmVjdGVkXCIgKm5nSWY9XCJzaG93RXJyXCI+XG4gICAgPGRpdiByb2xlPVwiYWxlcnRcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tZXhwbGFpbi1lcnJvclwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIl9lcnJvclwiPnt7IF9lcnJvciB9fTwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cImV4dHJhICYmICFjb21wYWN0XCIgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWV4dHJhXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImV4dHJhXCI+e3sgZXh0cmEgfX08L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==