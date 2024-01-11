import { __decorate } from "tslib";
import { ObserversModule } from '@angular/cdk/observers';
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, DestroyRef, Host, Input, Optional, TemplateRef, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControlName, NgModel, RequiredValidator, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import { isEmpty } from '@delon/util/browser';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import { NzFormStatusService } from 'ng-zorro-antd/core/form';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "./se-container.component";
import * as i2 from "ng-zorro-antd/core/form";
import * as i3 from "@delon/theme";
import * as i4 from "@angular/cdk/observers";
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
        this.destroy$ = inject(DestroyRef);
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
            .pipe(takeUntilDestroyed(this.destroy$), filter(w => this.inited && this.ngControl != null && this.ngControl.name === w.name))
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
        const parentCol = parent.colInCon || parent.col;
        const repCls = parent.nzLayout === 'horizontal' ? rep.genCls(col != null ? col : parentCol, parentCol) : [];
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
        this.ngControl
            .statusChanges.pipe(takeUntilDestroyed(this.destroy$))
            .subscribe(res => this.updateStatus(res === 'INVALID'));
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
            let required = this.ngControl?.control?.hasValidator(Validators.required);
            if (required !== true) {
                const rawValidators = this.ngControl?._rawValidators;
                required = rawValidators.find(w => w instanceof RequiredValidator) != null;
            }
            this.required = required;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: SEComponent, deps: [{ token: i0.ElementRef }, { token: i1.SEContainerComponent, host: true, optional: true }, { token: i2.NzFormStatusService }, { token: i3.ResponsiveService }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: SEComponent, isStandalone: true, selector: "se", inputs: { optional: "optional", optionalHelp: "optionalHelp", optionalHelpColor: "optionalHelpColor", error: "error", extra: "extra", label: "label", col: "col", required: "required", controlClass: "controlClass", line: "line", labelWidth: "labelWidth", noColon: "noColon", hideLabel: "hideLabel", id: "id" }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue", "class.se__hide-label": "hideLabel", "class.ant-form-item-has-error": "invalid", "class.ant-form-item-with-help": "showErr" } }, providers: [NzFormStatusService], queries: [{ propertyName: "ngModel", first: true, predicate: NgModel, descendants: true, static: true }, { propertyName: "formControlName", first: true, predicate: FormControlName, descendants: true, static: true }], viewQueries: [{ propertyName: "contentElement", first: true, predicate: ["contentElement"], descendants: true, static: true }], exportAs: ["se"], usesOnChanges: true, ngImport: i0, template: "<div class=\"ant-form-item-label\" [class.se__nolabel]=\"hideLabel || !label\" [style.width.px]=\"_labelWidth\">\n  @if (label) {\n    <label\n      [attr.for]=\"_id\"\n      class=\"se__label\"\n      [ngClass]=\"{ 'ant-form-item-required': required, 'se__no-colon': _noColon }\"\n    >\n      <span class=\"se__label-text\">\n        <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n      </span>\n      @if (optional || optionalHelp) {\n        <span class=\"se__label-optional\" [class.se__label-optional-no-text]=\"!optional\">\n          <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n          @if (optionalHelp) {\n            <i\n              nz-tooltip\n              [nzTooltipTitle]=\"optionalHelp\"\n              [nzTooltipColor]=\"optionalHelpColor\"\n              nz-icon\n              nzType=\"question-circle\"\n            ></i>\n          }\n        </span>\n      }\n    </label>\n  }\n</div>\n<div class=\"ant-form-item-control se__control\">\n  <div class=\"ant-form-item-control-input {{ controlClass }}\">\n    <div class=\"ant-form-item-control-input-content\" (cdkObserveContent)=\"checkContent()\" #contentElement>\n      <ng-content />\n    </div>\n  </div>\n  @if (showErr) {\n    <div @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\">\n      <div role=\"alert\" class=\"ant-form-item-explain-error\">\n        <ng-container *nzStringTemplateOutlet=\"_error\">{{ _error }}</ng-container>\n      </div>\n    </div>\n  }\n  @if (extra && !compact) {\n    <div class=\"ant-form-item-extra\">\n      <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n    </div>\n  }\n</div>\n", dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "ngmodule", type: ObserversModule }, { kind: "directive", type: i4.CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], animations: [helpMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: SEComponent, decorators: [{
            type: Component,
            args: [{ selector: 'se', exportAs: 'se', host: {
                        '[style.padding-left.px]': 'paddingValue',
                        '[style.padding-right.px]': 'paddingValue',
                        '[class.se__hide-label]': 'hideLabel',
                        '[class.ant-form-item-has-error]': 'invalid',
                        '[class.ant-form-item-with-help]': 'showErr'
                    }, preserveWhitespaces: false, providers: [NzFormStatusService], animations: [helpMotion], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NgClass, NzStringTemplateOutletDirective, NzTooltipDirective, NzIconDirective, ObserversModule], template: "<div class=\"ant-form-item-label\" [class.se__nolabel]=\"hideLabel || !label\" [style.width.px]=\"_labelWidth\">\n  @if (label) {\n    <label\n      [attr.for]=\"_id\"\n      class=\"se__label\"\n      [ngClass]=\"{ 'ant-form-item-required': required, 'se__no-colon': _noColon }\"\n    >\n      <span class=\"se__label-text\">\n        <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n      </span>\n      @if (optional || optionalHelp) {\n        <span class=\"se__label-optional\" [class.se__label-optional-no-text]=\"!optional\">\n          <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n          @if (optionalHelp) {\n            <i\n              nz-tooltip\n              [nzTooltipTitle]=\"optionalHelp\"\n              [nzTooltipColor]=\"optionalHelpColor\"\n              nz-icon\n              nzType=\"question-circle\"\n            ></i>\n          }\n        </span>\n      }\n    </label>\n  }\n</div>\n<div class=\"ant-form-item-control se__control\">\n  <div class=\"ant-form-item-control-input {{ controlClass }}\">\n    <div class=\"ant-form-item-control-input-content\" (cdkObserveContent)=\"checkContent()\" #contentElement>\n      <ng-content />\n    </div>\n  </div>\n  @if (showErr) {\n    <div @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\">\n      <div role=\"alert\" class=\"ant-form-item-explain-error\">\n        <ng-container *nzStringTemplateOutlet=\"_error\">{{ _error }}</ng-container>\n      </div>\n    </div>\n  }\n  @if (extra && !compact) {\n    <div class=\"ant-form-item-extra\">\n      <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n    </div>\n  }\n</div>\n" }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.SEContainerComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }, { type: i2.NzFormStatusService }, { type: i3.ResponsiveService }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }], propDecorators: { ngModel: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3NlL3NlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zZS9zZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBR0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUVWLElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUVSLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzlCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFNUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFD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LENBQUMsbUJBQW1CLENBQUMsY0FDcEIsQ0FBQyxVQUFVLENBQUMsbUJBQ1AsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxjQUN6QixJQUFJLFdBQ1AsQ0FBQyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQzs7MEJBMEV0RyxRQUFROzswQkFBSSxJQUFJO21LQTlEdUMsT0FBTztzQkFBaEUsWUFBWTt1QkFBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUV0QixlQUFlO3NCQUQvQixZQUFZO3VCQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBRWlCLGNBQWM7c0JBQTdFLFNBQVM7dUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQWFwQyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUVGLEtBQUs7c0JBRFIsS0FBSztnQkFJRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNzQixHQUFHO3NCQUE5QixLQUFLO2dCQUNtQixRQUFRO3NCQUFoQyxLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ3VCLElBQUk7c0JBQWhDLEtBQUs7Z0JBQ3NCLFVBQVU7c0JBQXJDLEtBQUs7Z0JBQ3VCLE9BQU87c0JBQW5DLEtBQUs7Z0JBQ21CLFNBQVM7c0JBQWpDLEtBQUs7Z0JBR0YsRUFBRTtzQkFETCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2ZXJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIERlc3Ryb3lSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBpbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbE5hbWUsIE5nTW9kZWwsIFJlcXVpcmVkVmFsaWRhdG9yLCBWYWxpZGF0b3IsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgUmVzcG9uc2l2ZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ0BkZWxvbi91dGlsL2Jyb3dzZXInO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBoZWxwTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBOekZvcm1TdGF0dXNTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2Zvcm0nO1xuaW1wb3J0IHsgTnpTdHJpbmdUZW1wbGF0ZU91dGxldERpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdXRsZXQnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpJY29uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56VG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IFNFQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNFRXJyb3IsIFNFRXJyb3JUeXBlIH0gZnJvbSAnLi9zZS50eXBlcyc7XG5cbmNvbnN0IHByZWZpeENscyA9IGBzZWA7XG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2UnLFxuICBleHBvcnRBczogJ3NlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUucGFkZGluZy1sZWZ0LnB4XSc6ICdwYWRkaW5nVmFsdWUnLFxuICAgICdbc3R5bGUucGFkZGluZy1yaWdodC5weF0nOiAncGFkZGluZ1ZhbHVlJyxcbiAgICAnW2NsYXNzLnNlX19oaWRlLWxhYmVsXSc6ICdoaWRlTGFiZWwnLFxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS1oYXMtZXJyb3JdJzogJ2ludmFsaWQnLFxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS13aXRoLWhlbHBdJzogJ3Nob3dFcnInXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnM6IFtOekZvcm1TdGF0dXNTZXJ2aWNlXSxcbiAgYW5pbWF0aW9uczogW2hlbHBNb3Rpb25dLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nQ2xhc3MsIE56U3RyaW5nVGVtcGxhdGVPdXRsZXREaXJlY3RpdmUsIE56VG9vbHRpcERpcmVjdGl2ZSwgTnpJY29uRGlyZWN0aXZlLCBPYnNlcnZlcnNNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFNFQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NvbDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXF1aXJlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGluZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGFiZWxXaWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ub0NvbG9uOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oaWRlTGFiZWw6IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IGluamVjdChEZXN0cm95UmVmKTtcbiAgQENvbnRlbnRDaGlsZChOZ01vZGVsLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIHJlYWRvbmx5IG5nTW9kZWw/OiBOZ01vZGVsO1xuICBAQ29udGVudENoaWxkKEZvcm1Db250cm9sTmFtZSwgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHJpdmF0ZSByZWFkb25seSBmb3JtQ29udHJvbE5hbWU/OiBGb3JtQ29udHJvbE5hbWU7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSByZWFkb25seSBjb250ZW50RWxlbWVudCE6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2xzTWFwOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIG9uY2VGbGFnID0gZmFsc2U7XG4gIHByaXZhdGUgZXJyb3JEYXRhOiBTRUVycm9yID0ge307XG4gIHByaXZhdGUgaXNCaW5kTW9kZWwgPSBmYWxzZTtcbiAgaW52YWxpZCA9IGZhbHNlO1xuICBfbGFiZWxXaWR0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIF9ub0NvbG9uOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG4gIF9lcnJvcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgb3B0aW9uYWw/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBvcHRpb25hbEhlbHA/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBvcHRpb25hbEhlbHBDb2xvcj86IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGVycm9yKHZhbDogU0VFcnJvclR5cGUpIHtcbiAgICB0aGlzLmVycm9yRGF0YSA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8IHZhbCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8geyAnJzogdmFsIH0gOiB2YWw7XG4gIH1cbiAgQElucHV0KCkgZXh0cmE/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIGxhYmVsPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sPzogbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlcXVpcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbnRyb2xDbGFzcz86IHN0cmluZyB8IG51bGwgPSAnJztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbihudWxsKSBsaW5lPzogYm9vbGVhbiB8IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBsYWJlbFdpZHRoPzogbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbihudWxsKSBub0NvbG9uPzogYm9vbGVhbiB8IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlTGFiZWwgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgdGhpcy5fYXV0b0lkID0gZmFsc2U7XG4gIH1cblxuICBfaWQgPSBgX3NlLSR7KytuZXh0VW5pcXVlSWR9YDtcbiAgX2F1dG9JZCA9IHRydWU7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldCBwYWRkaW5nVmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHRoaXMucGFyZW50Lmd1dHRlciBhcyBudW1iZXIpIC8gMjtcbiAgfVxuXG4gIGdldCBzaG93RXJyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgJiYgISF0aGlzLl9lcnJvciAmJiAhdGhpcy5jb21wYWN0O1xuICB9XG5cbiAgZ2V0IGNvbXBhY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50LnNpemUgPT09ICdjb21wYWN0JztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IG5nQ29udHJvbCgpOiBOZ01vZGVsIHwgRm9ybUNvbnRyb2xOYW1lIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMubmdNb2RlbCB8fCB0aGlzLmZvcm1Db250cm9sTmFtZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBwYXJlbnQ6IFNFQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgc3RhdHVzU3J2OiBOekZvcm1TdGF0dXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVwOiBSZXNwb25zaXZlU2VydmljZSxcbiAgICBwcml2YXRlIHJlbjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3NlXSBtdXN0IGluY2x1ZGUgJ3NlLWNvbnRhaW5lcicgY29tcG9uZW50YCk7XG4gICAgfVxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIHBhcmVudC5lcnJvck5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKHcgPT4gdGhpcy5pbml0ZWQgJiYgdGhpcy5uZ0NvbnRyb2wgIT0gbnVsbCAmJiB0aGlzLm5nQ29udHJvbC5uYW1lID09PSB3Lm5hbWUpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgICB0aGlzLmVycm9yID0gaXRlbS5lcnJvcjtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0dXModGhpcy5uZ0NvbnRyb2whLmludmFsaWQhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB0aGlzIHtcbiAgICBjb25zdCB7IGVsLCByZW4sIGNsc01hcCwgY29sLCBwYXJlbnQsIGNkciwgbGluZSwgbGFiZWxXaWR0aCwgcmVwLCBub0NvbG9uIH0gPSB0aGlzO1xuICAgIHRoaXMuX25vQ29sb24gPSBub0NvbG9uICE9IG51bGwgPyBub0NvbG9uIDogcGFyZW50Lm5vQ29sb247XG4gICAgdGhpcy5fbGFiZWxXaWR0aCA9IHBhcmVudC5uekxheW91dCA9PT0gJ2hvcml6b250YWwnID8gKGxhYmVsV2lkdGggIT0gbnVsbCA/IGxhYmVsV2lkdGggOiBwYXJlbnQubGFiZWxXaWR0aCkgOiBudWxsO1xuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscykpO1xuICAgIGNsc01hcC5sZW5ndGggPSAwO1xuICAgIGNvbnN0IHBhcmVudENvbCA9IHBhcmVudC5jb2xJbkNvbiB8fCBwYXJlbnQuY29sO1xuICAgIGNvbnN0IHJlcENscyA9IHBhcmVudC5uekxheW91dCA9PT0gJ2hvcml6b250YWwnID8gcmVwLmdlbkNscyhjb2wgIT0gbnVsbCA/IGNvbCA6IHBhcmVudENvbCwgcGFyZW50Q29sKSA6IFtdO1xuICAgIGNsc01hcC5wdXNoKGBhbnQtZm9ybS1pdGVtYCwgLi4ucmVwQ2xzLCBgJHtwcmVmaXhDbHN9X19pdGVtYCk7XG4gICAgaWYgKGxpbmUgfHwgcGFyZW50LmxpbmUpIHtcbiAgICAgIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX2xpbmVgKTtcbiAgICB9XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5hZGRDbGFzcyhlbCwgY2xzKSk7XG4gICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgYmluZE1vZGVsKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5uZ0NvbnRyb2wgfHwgdGhpcy5pc0JpbmRNb2RlbCkgcmV0dXJuO1xuXG4gICAgdGhpcy5pc0JpbmRNb2RlbCA9IHRydWU7XG4gICAgdGhpcy5uZ0NvbnRyb2xcbiAgICAgIC5zdGF0dXNDaGFuZ2VzIS5waXBlKHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMudXBkYXRlU3RhdHVzKHJlcyA9PT0gJ0lOVkFMSUQnKSk7XG4gICAgaWYgKHRoaXMuX2F1dG9JZCkge1xuICAgICAgY29uc3QgY29udHJvbEFjY2Vzc29yID0gdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciBhcyBOelNhZmVBbnk7XG4gICAgICBjb25zdCBjb250cm9sID0gKGNvbnRyb2xBY2Nlc3Nvcj8uZWxlbWVudFJlZiB8fCBjb250cm9sQWNjZXNzb3I/Ll9lbGVtZW50UmVmKT8ubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICghIWNvbnRyb2wpIHtcbiAgICAgICAgaWYgKGNvbnRyb2wuaWQpIHtcbiAgICAgICAgICB0aGlzLl9pZCA9IGNvbnRyb2wuaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udHJvbC5pZCA9IHRoaXMuX2lkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGF1dG8gcmVxdWlyZWRcbiAgICBpZiAodGhpcy5yZXF1aXJlZCAhPT0gdHJ1ZSkge1xuICAgICAgbGV0IHJlcXVpcmVkID0gdGhpcy5uZ0NvbnRyb2w/LmNvbnRyb2w/Lmhhc1ZhbGlkYXRvcihWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgIGlmIChyZXF1aXJlZCAhPT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCByYXdWYWxpZGF0b3JzID0gKHRoaXMubmdDb250cm9sIGFzIE56U2FmZUFueSk/Ll9yYXdWYWxpZGF0b3JzIGFzIFZhbGlkYXRvcltdO1xuICAgICAgICByZXF1aXJlZCA9IHJhd1ZhbGlkYXRvcnMuZmluZCh3ID0+IHcgaW5zdGFuY2VvZiBSZXF1aXJlZFZhbGlkYXRvcikgIT0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVxdWlyZWQgPSByZXF1aXJlZDtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVN0YXR1cyhpbnZhbGlkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sPy5kaXNhYmxlZCB8fCB0aGlzLm5nQ29udHJvbD8uaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmludmFsaWQgPVxuICAgICAgIXRoaXMub25jZUZsYWcgJiYgaW52YWxpZCAmJiB0aGlzLnBhcmVudC5pbmdvcmVEaXJ0eSA9PT0gZmFsc2UgJiYgIXRoaXMubmdDb250cm9sPy5kaXJ0eSA/IGZhbHNlIDogaW52YWxpZDtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLm5nQ29udHJvbD8uZXJyb3JzO1xuICAgIGlmIChlcnJvcnMgIT0gbnVsbCAmJiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGVycm9ycylbMF0gfHwgJyc7XG4gICAgICBjb25zdCBlcnIgPSB0aGlzLmVycm9yRGF0YVtrZXldO1xuICAgICAgdGhpcy5fZXJyb3IgPSBlcnIgIT0gbnVsbCA/IGVyciA6IHRoaXMuZXJyb3JEYXRhWycnXSB8fCAnJztcbiAgICB9XG5cbiAgICB0aGlzLnN0YXR1c1Nydi5mb3JtU3RhdHVzQ2hhbmdlcy5uZXh0KHsgc3RhdHVzOiB0aGlzLmludmFsaWQgPyAnZXJyb3InIDogJycsIGhhc0ZlZWRiYWNrOiBmYWxzZSB9KTtcblxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBjbHMgPSBgJHtwcmVmaXhDbHN9X19pdGVtLWVtcHR5YDtcbiAgICBpZiAoaXNFbXB0eShlbCkpIHtcbiAgICAgIHRoaXMucmVuLmFkZENsYXNzKGVsLCBjbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbi5yZW1vdmVDbGFzcyhlbCwgY2xzKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMub25jZUZsYWcgPSB0aGlzLnBhcmVudC5maXJzdFZpc3VhbDtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3MoKS5iaW5kTW9kZWwoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpLmJpbmRNb2RlbCgpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5vbmNlRmxhZykge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKHRoaXMubmdDb250cm9sPy5pbnZhbGlkISk7XG4gICAgICAgIHRoaXMub25jZUZsYWcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tbGFiZWxcIiBbY2xhc3Muc2VfX25vbGFiZWxdPVwiaGlkZUxhYmVsIHx8ICFsYWJlbFwiIFtzdHlsZS53aWR0aC5weF09XCJfbGFiZWxXaWR0aFwiPlxuICBAaWYgKGxhYmVsKSB7XG4gICAgPGxhYmVsXG4gICAgICBbYXR0ci5mb3JdPVwiX2lkXCJcbiAgICAgIGNsYXNzPVwic2VfX2xhYmVsXCJcbiAgICAgIFtuZ0NsYXNzXT1cInsgJ2FudC1mb3JtLWl0ZW0tcmVxdWlyZWQnOiByZXF1aXJlZCwgJ3NlX19uby1jb2xvbic6IF9ub0NvbG9uIH1cIlxuICAgID5cbiAgICAgIDxzcGFuIGNsYXNzPVwic2VfX2xhYmVsLXRleHRcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImxhYmVsXCI+e3sgbGFiZWwgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIEBpZiAob3B0aW9uYWwgfHwgb3B0aW9uYWxIZWxwKSB7XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2VfX2xhYmVsLW9wdGlvbmFsXCIgW2NsYXNzLnNlX19sYWJlbC1vcHRpb25hbC1uby10ZXh0XT1cIiFvcHRpb25hbFwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJvcHRpb25hbFwiPnt7IG9wdGlvbmFsIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgQGlmIChvcHRpb25hbEhlbHApIHtcbiAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgIG56LXRvb2x0aXBcbiAgICAgICAgICAgICAgW256VG9vbHRpcFRpdGxlXT1cIm9wdGlvbmFsSGVscFwiXG4gICAgICAgICAgICAgIFtuelRvb2x0aXBDb2xvcl09XCJvcHRpb25hbEhlbHBDb2xvclwiXG4gICAgICAgICAgICAgIG56LWljb25cbiAgICAgICAgICAgICAgbnpUeXBlPVwicXVlc3Rpb24tY2lyY2xlXCJcbiAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgfVxuICAgICAgICA8L3NwYW4+XG4gICAgICB9XG4gICAgPC9sYWJlbD5cbiAgfVxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sIHNlX19jb250cm9sXCI+XG4gIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtaW5wdXQge3sgY29udHJvbENsYXNzIH19XCI+XG4gICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC1pbnB1dC1jb250ZW50XCIgKGNka09ic2VydmVDb250ZW50KT1cImNoZWNrQ29udGVudCgpXCIgI2NvbnRlbnRFbGVtZW50PlxuICAgICAgPG5nLWNvbnRlbnQgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIEBpZiAoc2hvd0Vycikge1xuICAgIDxkaXYgQGhlbHBNb3Rpb24gY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWV4cGxhaW4gYW50LWZvcm0taXRlbS1leHBsYWluLWNvbm5lY3RlZFwiPlxuICAgICAgPGRpdiByb2xlPVwiYWxlcnRcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tZXhwbGFpbi1lcnJvclwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiX2Vycm9yXCI+e3sgX2Vycm9yIH19PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgfVxuICBAaWYgKGV4dHJhICYmICFjb21wYWN0KSB7XG4gICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tZXh0cmFcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJleHRyYVwiPnt7IGV4dHJhIH19PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIH1cbjwvZGl2PlxuIl19