import { CdkObserveContent } from '@angular/cdk/observers';
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, DestroyRef, ElementRef, Input, Renderer2, TemplateRef, ViewChild, ViewEncapsulation, booleanAttribute, inject, numberAttribute } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControlName, NgModel, RequiredValidator, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import { ResponsiveService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import { NzFormStatusService } from 'ng-zorro-antd/core/form';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { SEContainerComponent } from './se-container.component';
import * as i0 from "@angular/core";
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
    constructor() {
        this.parent = inject(SEContainerComponent, { host: true, optional: true });
        this.el = inject(ElementRef).nativeElement;
        this.rep = inject(ResponsiveService);
        this.ren = inject(Renderer2);
        this.cdr = inject(ChangeDetectorRef);
        this.statusSrv = inject(NzFormStatusService);
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
        if (this.parent == null) {
            throw new Error(`[se] must include 'se-container' component`);
        }
        this.parent.errorNotify
            .pipe(takeUntilDestroyed(), filter(w => this.inited && this.ngControl != null && this.ngControl.name === w.name))
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SEComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: SEComponent, isStandalone: true, selector: "se", inputs: { optional: "optional", optionalHelp: "optionalHelp", optionalHelpColor: "optionalHelpColor", error: "error", extra: "extra", label: "label", col: ["col", "col", (v) => (v == null ? null : numberAttribute(v))], required: ["required", "required", booleanAttribute], controlClass: "controlClass", line: ["line", "line", (v) => (v == null ? null : booleanAttribute(v))], labelWidth: ["labelWidth", "labelWidth", (v) => (v == null ? null : numberAttribute(v))], noColon: ["noColon", "noColon", (v) => (v == null ? null : booleanAttribute(v))], hideLabel: ["hideLabel", "hideLabel", booleanAttribute], id: "id" }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue", "class.se__hide-label": "hideLabel", "class.ant-form-item-has-error": "invalid", "class.ant-form-item-with-help": "showErr" } }, providers: [NzFormStatusService], queries: [{ propertyName: "ngModel", first: true, predicate: NgModel, descendants: true, static: true }, { propertyName: "formControlName", first: true, predicate: FormControlName, descendants: true, static: true }], viewQueries: [{ propertyName: "contentElement", first: true, predicate: ["contentElement"], descendants: true, static: true }], exportAs: ["se"], usesOnChanges: true, ngImport: i0, template: "<div class=\"ant-form-item-label\" [class.se__nolabel]=\"hideLabel || !label\" [style.width.px]=\"_labelWidth\">\n  @if (label) {\n    <label\n      [attr.for]=\"_id\"\n      class=\"se__label\"\n      [ngClass]=\"{ 'ant-form-item-required': required, 'se__no-colon': _noColon }\"\n    >\n      <span class=\"se__label-text\">\n        <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n      </span>\n      @if (optional || optionalHelp) {\n        <span class=\"se__label-optional\" [class.se__label-optional-no-text]=\"!optional\">\n          <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n          @if (optionalHelp) {\n            <i\n              nz-tooltip\n              [nzTooltipTitle]=\"optionalHelp\"\n              [nzTooltipColor]=\"optionalHelpColor\"\n              nz-icon\n              nzType=\"question-circle\"\n            ></i>\n          }\n        </span>\n      }\n    </label>\n  }\n</div>\n<div class=\"ant-form-item-control se__control\">\n  <div class=\"ant-form-item-control-input {{ controlClass }}\">\n    <div class=\"ant-form-item-control-input-content\" (cdkObserveContent)=\"checkContent()\" #contentElement>\n      <ng-content />\n    </div>\n  </div>\n  @if (showErr) {\n    <div @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\">\n      <div role=\"alert\" class=\"ant-form-item-explain-error\">\n        <ng-container *nzStringTemplateOutlet=\"_error\">{{ _error }}</ng-container>\n      </div>\n    </div>\n  }\n  @if (extra && !compact) {\n    <div class=\"ant-form-item-extra\">\n      <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n    </div>\n  }\n</div>\n", dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], animations: [helpMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: SEComponent, decorators: [{
            type: Component,
            args: [{ selector: 'se', exportAs: 'se', host: {
                        '[style.padding-left.px]': 'paddingValue',
                        '[style.padding-right.px]': 'paddingValue',
                        '[class.se__hide-label]': 'hideLabel',
                        '[class.ant-form-item-has-error]': 'invalid',
                        '[class.ant-form-item-with-help]': 'showErr'
                    }, preserveWhitespaces: false, providers: [NzFormStatusService], animations: [helpMotion], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NgClass, NzStringTemplateOutletDirective, NzTooltipDirective, NzIconDirective, CdkObserveContent], template: "<div class=\"ant-form-item-label\" [class.se__nolabel]=\"hideLabel || !label\" [style.width.px]=\"_labelWidth\">\n  @if (label) {\n    <label\n      [attr.for]=\"_id\"\n      class=\"se__label\"\n      [ngClass]=\"{ 'ant-form-item-required': required, 'se__no-colon': _noColon }\"\n    >\n      <span class=\"se__label-text\">\n        <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n      </span>\n      @if (optional || optionalHelp) {\n        <span class=\"se__label-optional\" [class.se__label-optional-no-text]=\"!optional\">\n          <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n          @if (optionalHelp) {\n            <i\n              nz-tooltip\n              [nzTooltipTitle]=\"optionalHelp\"\n              [nzTooltipColor]=\"optionalHelpColor\"\n              nz-icon\n              nzType=\"question-circle\"\n            ></i>\n          }\n        </span>\n      }\n    </label>\n  }\n</div>\n<div class=\"ant-form-item-control se__control\">\n  <div class=\"ant-form-item-control-input {{ controlClass }}\">\n    <div class=\"ant-form-item-control-input-content\" (cdkObserveContent)=\"checkContent()\" #contentElement>\n      <ng-content />\n    </div>\n  </div>\n  @if (showErr) {\n    <div @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\">\n      <div role=\"alert\" class=\"ant-form-item-explain-error\">\n        <ng-container *nzStringTemplateOutlet=\"_error\">{{ _error }}</ng-container>\n      </div>\n    </div>\n  }\n  @if (extra && !compact) {\n    <div class=\"ant-form-item-extra\">\n      <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n    </div>\n  }\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { ngModel: [{
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
                type: Input,
                args: [{ transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }], required: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], controlClass: [{
                type: Input
            }], line: [{
                type: Input,
                args: [{ transform: (v) => (v == null ? null : booleanAttribute(v)) }]
            }], labelWidth: [{
                type: Input,
                args: [{ transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }], noColon: [{
                type: Input,
                args: [{ transform: (v) => (v == null ? null : booleanAttribute(v)) }]
            }], hideLabel: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], id: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3NlL3NlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zZS9zZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLE1BQU0sRUFDTixlQUFlLEVBQ2hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFOUIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFNUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxr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Z0IsRUFBRTtnQkFHbEMsRUFBRTtzQkFETCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrT2JzZXJ2ZUNvbnRlbnQgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcbmltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRGVzdHJveVJlZixcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgYm9vbGVhbkF0dHJpYnV0ZSxcbiAgaW5qZWN0LFxuICBudW1iZXJBdHRyaWJ1dGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbE5hbWUsIE5nTW9kZWwsIFJlcXVpcmVkVmFsaWRhdG9yLCBWYWxpZGF0b3IsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgUmVzcG9uc2l2ZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ0BkZWxvbi91dGlsL2Jyb3dzZXInO1xuaW1wb3J0IHsgaGVscE1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpGb3JtU3RhdHVzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9mb3JtJztcbmltcG9ydCB7IE56U3RyaW5nVGVtcGxhdGVPdXRsZXREaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56SWNvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBOelRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBTRUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vc2UtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRUVycm9yLCBTRUVycm9yVHlwZSB9IGZyb20gJy4vc2UudHlwZXMnO1xuXG5jb25zdCBwcmVmaXhDbHMgPSBgc2VgO1xubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlJyxcbiAgZXhwb3J0QXM6ICdzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLnBhZGRpbmctbGVmdC5weF0nOiAncGFkZGluZ1ZhbHVlJyxcbiAgICAnW3N0eWxlLnBhZGRpbmctcmlnaHQucHhdJzogJ3BhZGRpbmdWYWx1ZScsXG4gICAgJ1tjbGFzcy5zZV9faGlkZS1sYWJlbF0nOiAnaGlkZUxhYmVsJyxcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0taGFzLWVycm9yXSc6ICdpbnZhbGlkJyxcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0td2l0aC1oZWxwXSc6ICdzaG93RXJyJ1xuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzOiBbTnpGb3JtU3RhdHVzU2VydmljZV0sXG4gIGFuaW1hdGlvbnM6IFtoZWxwTW90aW9uXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzLCBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlLCBOelRvb2x0aXBEaXJlY3RpdmUsIE56SWNvbkRpcmVjdGl2ZSwgQ2RrT2JzZXJ2ZUNvbnRlbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNFQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBwYXJlbnQgPSBpbmplY3QoU0VDb250YWluZXJDb21wb25lbnQsIHsgaG9zdDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUgfSkhO1xuICBwcml2YXRlIHJlYWRvbmx5IGVsOiBIVE1MRWxlbWVudCA9IGluamVjdChFbGVtZW50UmVmKS5uYXRpdmVFbGVtZW50O1xuICBwcml2YXRlIHJlYWRvbmx5IHJlcCA9IGluamVjdChSZXNwb25zaXZlU2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgcmVuID0gaW5qZWN0KFJlbmRlcmVyMik7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2RyID0gaW5qZWN0KENoYW5nZURldGVjdG9yUmVmKTtcbiAgcHJpdmF0ZSByZWFkb25seSBzdGF0dXNTcnYgPSBpbmplY3QoTnpGb3JtU3RhdHVzU2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveSQgPSBpbmplY3QoRGVzdHJveVJlZik7XG5cbiAgQENvbnRlbnRDaGlsZChOZ01vZGVsLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIHJlYWRvbmx5IG5nTW9kZWw/OiBOZ01vZGVsO1xuICBAQ29udGVudENoaWxkKEZvcm1Db250cm9sTmFtZSwgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHJpdmF0ZSByZWFkb25seSBmb3JtQ29udHJvbE5hbWU/OiBGb3JtQ29udHJvbE5hbWU7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSByZWFkb25seSBjb250ZW50RWxlbWVudCE6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2xzTWFwOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIG9uY2VGbGFnID0gZmFsc2U7XG4gIHByaXZhdGUgZXJyb3JEYXRhOiBTRUVycm9yID0ge307XG4gIHByaXZhdGUgaXNCaW5kTW9kZWwgPSBmYWxzZTtcbiAgaW52YWxpZCA9IGZhbHNlO1xuICBfbGFiZWxXaWR0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIF9ub0NvbG9uOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG4gIF9lcnJvcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgb3B0aW9uYWw/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBvcHRpb25hbEhlbHA/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBvcHRpb25hbEhlbHBDb2xvcj86IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGVycm9yKHZhbDogU0VFcnJvclR5cGUpIHtcbiAgICB0aGlzLmVycm9yRGF0YSA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8IHZhbCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8geyAnJzogdmFsIH0gOiB2YWw7XG4gIH1cbiAgQElucHV0KCkgZXh0cmE/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIGxhYmVsPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06ICh2OiB1bmtub3duKSA9PiAodiA9PSBudWxsID8gbnVsbCA6IG51bWJlckF0dHJpYnV0ZSh2KSkgfSkgY29sPzogbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHJlcXVpcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbnRyb2xDbGFzcz86IHN0cmluZyB8IG51bGwgPSAnJztcbiAgQElucHV0KHsgdHJhbnNmb3JtOiAodjogdW5rbm93bikgPT4gKHYgPT0gbnVsbCA/IG51bGwgOiBib29sZWFuQXR0cmlidXRlKHYpKSB9KSBsaW5lPzogYm9vbGVhbiB8IG51bGw7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogKHY6IHVua25vd24pID0+ICh2ID09IG51bGwgPyBudWxsIDogbnVtYmVyQXR0cmlidXRlKHYpKSB9KSBsYWJlbFdpZHRoPzogbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiAodjogdW5rbm93bikgPT4gKHYgPT0gbnVsbCA/IG51bGwgOiBib29sZWFuQXR0cmlidXRlKHYpKSB9KSBub0NvbG9uPzogYm9vbGVhbiB8IG51bGw7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBoaWRlTGFiZWwgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgdGhpcy5fYXV0b0lkID0gZmFsc2U7XG4gIH1cblxuICBfaWQgPSBgX3NlLSR7KytuZXh0VW5pcXVlSWR9YDtcbiAgX2F1dG9JZCA9IHRydWU7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldCBwYWRkaW5nVmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHRoaXMucGFyZW50Lmd1dHRlciBhcyBudW1iZXIpIC8gMjtcbiAgfVxuXG4gIGdldCBzaG93RXJyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgJiYgISF0aGlzLl9lcnJvciAmJiAhdGhpcy5jb21wYWN0O1xuICB9XG5cbiAgZ2V0IGNvbXBhY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50LnNpemUgPT09ICdjb21wYWN0JztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IG5nQ29udHJvbCgpOiBOZ01vZGVsIHwgRm9ybUNvbnRyb2xOYW1lIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMubmdNb2RlbCB8fCB0aGlzLmZvcm1Db250cm9sTmFtZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICh0aGlzLnBhcmVudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzZV0gbXVzdCBpbmNsdWRlICdzZS1jb250YWluZXInIGNvbXBvbmVudGApO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudC5lcnJvck5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbERlc3Ryb3llZCgpLFxuICAgICAgICBmaWx0ZXIodyA9PiB0aGlzLmluaXRlZCAmJiB0aGlzLm5nQ29udHJvbCAhPSBudWxsICYmIHRoaXMubmdDb250cm9sLm5hbWUgPT09IHcubmFtZSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoaXRlbSA9PiB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBpdGVtLmVycm9yO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1cyh0aGlzLm5nQ29udHJvbCEuaW52YWxpZCEpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCk6IHRoaXMge1xuICAgIGNvbnN0IHsgZWwsIHJlbiwgY2xzTWFwLCBjb2wsIHBhcmVudCwgY2RyLCBsaW5lLCBsYWJlbFdpZHRoLCByZXAsIG5vQ29sb24gfSA9IHRoaXM7XG4gICAgdGhpcy5fbm9Db2xvbiA9IG5vQ29sb24gIT0gbnVsbCA/IG5vQ29sb24gOiBwYXJlbnQubm9Db2xvbjtcbiAgICB0aGlzLl9sYWJlbFdpZHRoID0gcGFyZW50Lm56TGF5b3V0ID09PSAnaG9yaXpvbnRhbCcgPyAobGFiZWxXaWR0aCAhPSBudWxsID8gbGFiZWxXaWR0aCA6IHBhcmVudC5sYWJlbFdpZHRoKSA6IG51bGw7XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5yZW1vdmVDbGFzcyhlbCwgY2xzKSk7XG4gICAgY2xzTWFwLmxlbmd0aCA9IDA7XG4gICAgY29uc3QgcGFyZW50Q29sID0gcGFyZW50LmNvbEluQ29uIHx8IHBhcmVudC5jb2w7XG4gICAgY29uc3QgcmVwQ2xzID0gcGFyZW50Lm56TGF5b3V0ID09PSAnaG9yaXpvbnRhbCcgPyByZXAuZ2VuQ2xzKGNvbCAhPSBudWxsID8gY29sIDogcGFyZW50Q29sLCBwYXJlbnRDb2wpIDogW107XG4gICAgY2xzTWFwLnB1c2goYGFudC1mb3JtLWl0ZW1gLCAuLi5yZXBDbHMsIGAke3ByZWZpeENsc31fX2l0ZW1gKTtcbiAgICBpZiAobGluZSB8fCBwYXJlbnQubGluZSkge1xuICAgICAgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9fbGluZWApO1xuICAgIH1cbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLmFkZENsYXNzKGVsLCBjbHMpKTtcbiAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBiaW5kTW9kZWwoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm5nQ29udHJvbCB8fCB0aGlzLmlzQmluZE1vZGVsKSByZXR1cm47XG5cbiAgICB0aGlzLmlzQmluZE1vZGVsID0gdHJ1ZTtcbiAgICB0aGlzLm5nQ29udHJvbFxuICAgICAgLnN0YXR1c0NoYW5nZXMhLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy51cGRhdGVTdGF0dXMocmVzID09PSAnSU5WQUxJRCcpKTtcbiAgICBpZiAodGhpcy5fYXV0b0lkKSB7XG4gICAgICBjb25zdCBjb250cm9sQWNjZXNzb3IgPSB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yIGFzIE56U2FmZUFueTtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSAoY29udHJvbEFjY2Vzc29yPy5lbGVtZW50UmVmIHx8IGNvbnRyb2xBY2Nlc3Nvcj8uX2VsZW1lbnRSZWYpPy5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKCEhY29udHJvbCkge1xuICAgICAgICBpZiAoY29udHJvbC5pZCkge1xuICAgICAgICAgIHRoaXMuX2lkID0gY29udHJvbC5pZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250cm9sLmlkID0gdGhpcy5faWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gYXV0byByZXF1aXJlZFxuICAgIGlmICh0aGlzLnJlcXVpcmVkICE9PSB0cnVlKSB7XG4gICAgICBsZXQgcmVxdWlyZWQgPSB0aGlzLm5nQ29udHJvbD8uY29udHJvbD8uaGFzVmFsaWRhdG9yKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgaWYgKHJlcXVpcmVkICE9PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHJhd1ZhbGlkYXRvcnMgPSAodGhpcy5uZ0NvbnRyb2wgYXMgTnpTYWZlQW55KT8uX3Jhd1ZhbGlkYXRvcnMgYXMgVmFsaWRhdG9yW107XG4gICAgICAgIHJlcXVpcmVkID0gcmF3VmFsaWRhdG9ycy5maW5kKHcgPT4gdyBpbnN0YW5jZW9mIFJlcXVpcmVkVmFsaWRhdG9yKSAhPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXF1aXJlZCA9IHJlcXVpcmVkO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU3RhdHVzKGludmFsaWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2w/LmRpc2FibGVkIHx8IHRoaXMubmdDb250cm9sPy5pc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW52YWxpZCA9XG4gICAgICAhdGhpcy5vbmNlRmxhZyAmJiBpbnZhbGlkICYmIHRoaXMucGFyZW50LmluZ29yZURpcnR5ID09PSBmYWxzZSAmJiAhdGhpcy5uZ0NvbnRyb2w/LmRpcnR5ID8gZmFsc2UgOiBpbnZhbGlkO1xuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMubmdDb250cm9sPy5lcnJvcnM7XG4gICAgaWYgKGVycm9ycyAhPSBudWxsICYmIE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoZXJyb3JzKVswXSB8fCAnJztcbiAgICAgIGNvbnN0IGVyciA9IHRoaXMuZXJyb3JEYXRhW2tleV07XG4gICAgICB0aGlzLl9lcnJvciA9IGVyciAhPSBudWxsID8gZXJyIDogdGhpcy5lcnJvckRhdGFbJyddIHx8ICcnO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdHVzU3J2LmZvcm1TdGF0dXNDaGFuZ2VzLm5leHQoeyBzdGF0dXM6IHRoaXMuaW52YWxpZCA/ICdlcnJvcicgOiAnJywgaGFzRmVlZGJhY2s6IGZhbHNlIH0pO1xuXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGNscyA9IGAke3ByZWZpeENsc31fX2l0ZW0tZW1wdHlgO1xuICAgIGlmIChpc0VtcHR5KGVsKSkge1xuICAgICAgdGhpcy5yZW4uYWRkQ2xhc3MoZWwsIGNscyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuLnJlbW92ZUNsYXNzKGVsLCBjbHMpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5vbmNlRmxhZyA9IHRoaXMucGFyZW50LmZpcnN0VmlzdWFsO1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5zZXRDbGFzcygpLmJpbmRNb2RlbCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCkuYmluZE1vZGVsKCk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLm9uY2VGbGFnKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0dXModGhpcy5uZ0NvbnRyb2w/LmludmFsaWQhKTtcbiAgICAgICAgdGhpcy5vbmNlRmxhZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1sYWJlbFwiIFtjbGFzcy5zZV9fbm9sYWJlbF09XCJoaWRlTGFiZWwgfHwgIWxhYmVsXCIgW3N0eWxlLndpZHRoLnB4XT1cIl9sYWJlbFdpZHRoXCI+XG4gIEBpZiAobGFiZWwpIHtcbiAgICA8bGFiZWxcbiAgICAgIFthdHRyLmZvcl09XCJfaWRcIlxuICAgICAgY2xhc3M9XCJzZV9fbGFiZWxcIlxuICAgICAgW25nQ2xhc3NdPVwieyAnYW50LWZvcm0taXRlbS1yZXF1aXJlZCc6IHJlcXVpcmVkLCAnc2VfX25vLWNvbG9uJzogX25vQ29sb24gfVwiXG4gICAgPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzZV9fbGFiZWwtdGV4dFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibGFiZWxcIj57eyBsYWJlbCB9fTwvbmctY29udGFpbmVyPlxuICAgICAgPC9zcGFuPlxuICAgICAgQGlmIChvcHRpb25hbCB8fCBvcHRpb25hbEhlbHApIHtcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzZV9fbGFiZWwtb3B0aW9uYWxcIiBbY2xhc3Muc2VfX2xhYmVsLW9wdGlvbmFsLW5vLXRleHRdPVwiIW9wdGlvbmFsXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm9wdGlvbmFsXCI+e3sgb3B0aW9uYWwgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICBAaWYgKG9wdGlvbmFsSGVscCkge1xuICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgbnotdG9vbHRpcFxuICAgICAgICAgICAgICBbbnpUb29sdGlwVGl0bGVdPVwib3B0aW9uYWxIZWxwXCJcbiAgICAgICAgICAgICAgW256VG9vbHRpcENvbG9yXT1cIm9wdGlvbmFsSGVscENvbG9yXCJcbiAgICAgICAgICAgICAgbnotaWNvblxuICAgICAgICAgICAgICBuelR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIH1cbiAgICA8L2xhYmVsPlxuICB9XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wgc2VfX2NvbnRyb2xcIj5cbiAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC1pbnB1dCB7eyBjb250cm9sQ2xhc3MgfX1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0LWNvbnRlbnRcIiAoY2RrT2JzZXJ2ZUNvbnRlbnQpPVwiY2hlY2tDb250ZW50KClcIiAjY29udGVudEVsZW1lbnQ+XG4gICAgICA8bmctY29udGVudCAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgQGlmIChzaG93RXJyKSB7XG4gICAgPGRpdiBAaGVscE1vdGlvbiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tZXhwbGFpbiBhbnQtZm9ybS1pdGVtLWV4cGxhaW4tY29ubmVjdGVkXCI+XG4gICAgICA8ZGl2IHJvbGU9XCJhbGVydFwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS1leHBsYWluLWVycm9yXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJfZXJyb3JcIj57eyBfZXJyb3IgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICB9XG4gIEBpZiAoZXh0cmEgJiYgIWNvbXBhY3QpIHtcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1leHRyYVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImV4dHJhXCI+e3sgZXh0cmEgfX08L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgfVxuPC9kaXY+XG4iXX0=