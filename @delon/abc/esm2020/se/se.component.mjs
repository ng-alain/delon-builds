import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, Host, Input, Optional, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControlName, NgModel, RequiredValidator } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { isEmpty } from '@delon/util/browser';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import * as i0 from "@angular/core";
import * as i1 from "./se-container.component";
import * as i2 from "@delon/theme";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/core/outlet";
import * as i5 from "ng-zorro-antd/tooltip";
import * as i6 from "ng-zorro-antd/icon";
const prefixCls = `se`;
let nextUniqueId = 0;
export class SEComponent {
    constructor(el, parent, rep, ren, cdr) {
        this.parent = parent;
        this.rep = rep;
        this.ren = ren;
        this.cdr = cdr;
        this.unsubscribe$ = new Subject();
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
            .pipe(takeUntil(this.unsubscribe$), filter(w => this.inited && this.ngControl != null && this.ngControl.name === w.name))
            .subscribe(item => {
            this.error = item.error;
            this.updateStatus(this.ngControl.invalid);
        });
    }
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
        this.ngControl
            .statusChanges.pipe(takeUntil(this.unsubscribe$))
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
            const rawValidators = this.ngControl?._rawValidators;
            this.required = rawValidators.find(w => w instanceof RequiredValidator) != null;
            this.cdr.detectChanges();
        }
    }
    updateStatus(invalid) {
        if (this.ngControl.disabled || this.ngControl.isDisabled) {
            return;
        }
        this.invalid =
            !this.onceFlag && invalid && this.parent.ingoreDirty === false && !this.ngControl.dirty ? false : invalid;
        const errors = this.ngControl.errors;
        if (errors != null && Object.keys(errors).length > 0) {
            const key = Object.keys(errors)[0] || '';
            const err = this.errorData[key];
            this._error = err != null ? err : this.errorData[''] || '';
        }
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
                this.updateStatus(this.ngControl.invalid);
                this.onceFlag = false;
            });
        }
    }
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
    }
}
SEComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SEComponent, deps: [{ token: i0.ElementRef }, { token: i1.SEContainerComponent, host: true, optional: true }, { token: i2.ResponsiveService }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
SEComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: SEComponent, selector: "se", inputs: { optional: "optional", optionalHelp: "optionalHelp", optionalHelpColor: "optionalHelpColor", error: "error", extra: "extra", label: "label", col: "col", required: "required", controlClass: "controlClass", line: "line", labelWidth: "labelWidth", noColon: "noColon", hideLabel: "hideLabel", id: "id" }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue", "class.se__hide-label": "hideLabel", "class.ant-form-item-has-error": "invalid", "class.ant-form-item-with-help": "showErr" } }, queries: [{ propertyName: "ngModel", first: true, predicate: NgModel, descendants: true, static: true }, { propertyName: "formControlName", first: true, predicate: FormControlName, descendants: true, static: true }], viewQueries: [{ propertyName: "contentElement", first: true, predicate: ["contentElement"], descendants: true, static: true }], exportAs: ["se"], usesOnChanges: true, ngImport: i0, template: "<div class=\"ant-form-item-label\" [class.se__nolabel]=\"hideLabel || !label\" [style.width.px]=\"_labelWidth\">\n  <label\n    *ngIf=\"label\"\n    [attr.for]=\"_id\"\n    class=\"se__label\"\n    [ngClass]=\"{ 'ant-form-item-required': required, 'se__no-colon': _noColon }\"\n  >\n    <span class=\"se__label-text\">\n      <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    <span *ngIf=\"optional || optionalHelp\" class=\"se__label-optional\" [class.se__label-optional-no-text]=\"!optional\">\n      <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n      <i\n        *ngIf=\"optionalHelp\"\n        nz-tooltip\n        [nzTooltipTitle]=\"optionalHelp\"\n        [nzTooltipColor]=\"optionalHelpColor\"\n        nz-icon\n        nzType=\"question-circle\"\n      ></i>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control se__control\">\n  <div class=\"ant-form-item-control-input {{ controlClass }}\">\n    <div class=\"ant-form-item-control-input-content\" (cdkObserveContent)=\"checkContent()\" #contentElement>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div class=\"ant-form-item-explain ant-form-item-explain-error\" *ngIf=\"showErr\">\n    <div @helpMotion>\n      <ng-container *nzStringTemplateOutlet=\"_error\">{{ _error }}</ng-container>\n    </div>\n  </div>\n  <div *ngIf=\"extra && !compact\" class=\"ant-form-item-extra\">\n    <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n  </div>\n</div>\n", directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: i5.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], animations: [helpMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SEComponent, decorators: [{
            type: Component,
            args: [{ selector: 'se', exportAs: 'se', host: {
                        '[style.padding-left.px]': 'paddingValue',
                        '[style.padding-right.px]': 'paddingValue',
                        '[class.se__hide-label]': 'hideLabel',
                        '[class.ant-form-item-has-error]': 'invalid',
                        '[class.ant-form-item-with-help]': 'showErr'
                    }, preserveWhitespaces: false, animations: [helpMotion], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"ant-form-item-label\" [class.se__nolabel]=\"hideLabel || !label\" [style.width.px]=\"_labelWidth\">\n  <label\n    *ngIf=\"label\"\n    [attr.for]=\"_id\"\n    class=\"se__label\"\n    [ngClass]=\"{ 'ant-form-item-required': required, 'se__no-colon': _noColon }\"\n  >\n    <span class=\"se__label-text\">\n      <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    <span *ngIf=\"optional || optionalHelp\" class=\"se__label-optional\" [class.se__label-optional-no-text]=\"!optional\">\n      <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n      <i\n        *ngIf=\"optionalHelp\"\n        nz-tooltip\n        [nzTooltipTitle]=\"optionalHelp\"\n        [nzTooltipColor]=\"optionalHelpColor\"\n        nz-icon\n        nzType=\"question-circle\"\n      ></i>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control se__control\">\n  <div class=\"ant-form-item-control-input {{ controlClass }}\">\n    <div class=\"ant-form-item-control-input-content\" (cdkObserveContent)=\"checkContent()\" #contentElement>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div class=\"ant-form-item-explain ant-form-item-explain-error\" *ngIf=\"showErr\">\n    <div @helpMotion>\n      <ng-container *nzStringTemplateOutlet=\"_error\">{{ _error }}</ng-container>\n    </div>\n  </div>\n  <div *ngIf=\"extra && !compact\" class=\"ant-form-item-extra\">\n    <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.SEContainerComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }, { type: i2.ResponsiveService }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { ngModel: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3NlL3NlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zZS9zZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUdMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUVaLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUVSLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7O0FBTTFELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQztBQUN2QixJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7QUFrQnJCLE1BQU0sT0FBTyxXQUFXO0lBc0V0QixZQUNFLEVBQWMsRUFDYyxNQUE0QixFQUNoRCxHQUFzQixFQUN0QixHQUFjLEVBQ2QsR0FBc0I7UUFIRixXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUNoRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFsRXhCLGlCQUFZLEdBQUcsSUFBSSxPQUFP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cnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xOYW1lLCBOZ01vZGVsLCBSZXF1aXJlZFZhbGlkYXRvciwgVmFsaWRhdG9yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJlc3BvbnNpdmVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgaGVscE1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBTRUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vc2UtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRUVycm9yLCBTRUVycm9yVHlwZSB9IGZyb20gJy4vc2UudHlwZXMnO1xuXG5jb25zdCBwcmVmaXhDbHMgPSBgc2VgO1xubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlJyxcbiAgZXhwb3J0QXM6ICdzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLnBhZGRpbmctbGVmdC5weF0nOiAncGFkZGluZ1ZhbHVlJyxcbiAgICAnW3N0eWxlLnBhZGRpbmctcmlnaHQucHhdJzogJ3BhZGRpbmdWYWx1ZScsXG4gICAgJ1tjbGFzcy5zZV9faGlkZS1sYWJlbF0nOiAnaGlkZUxhYmVsJyxcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0taGFzLWVycm9yXSc6ICdpbnZhbGlkJyxcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0td2l0aC1oZWxwXSc6ICdzaG93RXJyJ1xuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9uczogW2hlbHBNb3Rpb25dLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTRUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NvbDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXF1aXJlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGluZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGFiZWxXaWR0aDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ub0NvbG9uOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9oaWRlTGFiZWw6IEJvb2xlYW5JbnB1dDtcblxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBAQ29udGVudENoaWxkKE5nTW9kZWwsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgcmVhZG9ubHkgbmdNb2RlbDogTmdNb2RlbDtcbiAgQENvbnRlbnRDaGlsZChGb3JtQ29udHJvbE5hbWUsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHByaXZhdGUgcmVhZG9ubHkgZm9ybUNvbnRyb2xOYW1lOiBGb3JtQ29udHJvbE5hbWU7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSByZWFkb25seSBjb250ZW50RWxlbWVudDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBjbHNNYXA6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgb25jZUZsYWcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBlcnJvckRhdGE6IFNFRXJyb3IgPSB7fTtcbiAgcHJpdmF0ZSBpc0JpbmRNb2RlbCA9IGZhbHNlO1xuICBpbnZhbGlkID0gZmFsc2U7XG4gIF9sYWJlbFdpZHRoOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgX25vQ29sb246IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcbiAgX2Vycm9yOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIG9wdGlvbmFsPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgb3B0aW9uYWxIZWxwPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgb3B0aW9uYWxIZWxwQ29sb3I6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGVycm9yKHZhbDogU0VFcnJvclR5cGUpIHtcbiAgICB0aGlzLmVycm9yRGF0YSA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8IHZhbCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8geyAnJzogdmFsIH0gOiB2YWw7XG4gIH1cbiAgQElucHV0KCkgZXh0cmE/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIGxhYmVsPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXF1aXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBjb250cm9sQ2xhc3M/OiBzdHJpbmcgfCBudWxsID0gJyc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4obnVsbCkgbGluZTogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGxhYmVsV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbihudWxsKSBub0NvbG9uOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZUxhYmVsID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICAgIHRoaXMuX2F1dG9JZCA9IGZhbHNlO1xuICB9XG5cbiAgX2lkID0gYF9zZS0keysrbmV4dFVuaXF1ZUlkfWA7XG4gIF9hdXRvSWQgPSB0cnVlO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXQgcGFkZGluZ1ZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuICh0aGlzLnBhcmVudC5ndXR0ZXIgYXMgbnVtYmVyKSAvIDI7XG4gIH1cblxuICBnZXQgc2hvd0VycigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkICYmICEhdGhpcy5fZXJyb3IgJiYgIXRoaXMuY29tcGFjdDtcbiAgfVxuXG4gIGdldCBjb21wYWN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5zaXplID09PSAnY29tcGFjdCc7XG4gIH1cblxuICBwcml2YXRlIGdldCBuZ0NvbnRyb2woKTogTmdNb2RlbCB8IEZvcm1Db250cm9sTmFtZSB7XG4gICAgcmV0dXJuIHRoaXMubmdNb2RlbCB8fCB0aGlzLmZvcm1Db250cm9sTmFtZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBwYXJlbnQ6IFNFQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgcmVwOiBSZXNwb25zaXZlU2VydmljZSxcbiAgICBwcml2YXRlIHJlbjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3NlXSBtdXN0IGluY2x1ZGUgJ3NlLWNvbnRhaW5lcicgY29tcG9uZW50YCk7XG4gICAgfVxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIHBhcmVudC5lcnJvck5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksXG4gICAgICAgIGZpbHRlcih3ID0+IHRoaXMuaW5pdGVkICYmIHRoaXMubmdDb250cm9sICE9IG51bGwgJiYgdGhpcy5uZ0NvbnRyb2wubmFtZSA9PT0gdy5uYW1lKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShpdGVtID0+IHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGl0ZW0uZXJyb3I7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKHRoaXMubmdDb250cm9sLmludmFsaWQhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB0aGlzIHtcbiAgICBjb25zdCB7IGVsLCByZW4sIGNsc01hcCwgY29sLCBwYXJlbnQsIGNkciwgbGluZSwgbGFiZWxXaWR0aCwgcmVwLCBub0NvbG9uIH0gPSB0aGlzO1xuICAgIHRoaXMuX25vQ29sb24gPSBub0NvbG9uICE9IG51bGwgPyBub0NvbG9uIDogcGFyZW50Lm5vQ29sb247XG4gICAgdGhpcy5fbGFiZWxXaWR0aCA9IHBhcmVudC5uekxheW91dCA9PT0gJ2hvcml6b250YWwnID8gKGxhYmVsV2lkdGggIT0gbnVsbCA/IGxhYmVsV2lkdGggOiBwYXJlbnQubGFiZWxXaWR0aCkgOiBudWxsO1xuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscykpO1xuICAgIGNsc01hcC5sZW5ndGggPSAwO1xuICAgIGNvbnN0IHJlcENscyA9XG4gICAgICBwYXJlbnQubnpMYXlvdXQgPT09ICdob3Jpem9udGFsJyA/IHJlcC5nZW5DbHMoY29sICE9IG51bGwgPyBjb2wgOiBwYXJlbnQuY29sSW5Db24gfHwgcGFyZW50LmNvbCkgOiBbXTtcbiAgICBjbHNNYXAucHVzaChgYW50LWZvcm0taXRlbWAsIC4uLnJlcENscywgYCR7cHJlZml4Q2xzfV9faXRlbWApO1xuICAgIGlmIChsaW5lIHx8IHBhcmVudC5saW5lKSB7XG4gICAgICBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19saW5lYCk7XG4gICAgfVxuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4uYWRkQ2xhc3MoZWwsIGNscykpO1xuICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGJpbmRNb2RlbCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubmdDb250cm9sIHx8IHRoaXMuaXNCaW5kTW9kZWwpIHJldHVybjtcblxuICAgIHRoaXMuaXNCaW5kTW9kZWwgPSB0cnVlO1xuICAgIHRoaXMubmdDb250cm9sXG4gICAgICAuc3RhdHVzQ2hhbmdlcyEucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy51cGRhdGVTdGF0dXMocmVzID09PSAnSU5WQUxJRCcpKTtcbiAgICBpZiAodGhpcy5fYXV0b0lkKSB7XG4gICAgICBjb25zdCBjb250cm9sQWNjZXNzb3IgPSB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yIGFzIE56U2FmZUFueTtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSAoY29udHJvbEFjY2Vzc29yPy5lbGVtZW50UmVmIHx8IGNvbnRyb2xBY2Nlc3Nvcj8uX2VsZW1lbnRSZWYpPy5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKCEhY29udHJvbCkge1xuICAgICAgICBpZiAoY29udHJvbC5pZCkge1xuICAgICAgICAgIHRoaXMuX2lkID0gY29udHJvbC5pZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250cm9sLmlkID0gdGhpcy5faWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gYXV0byByZXF1aXJlZFxuICAgIGlmICh0aGlzLnJlcXVpcmVkICE9PSB0cnVlKSB7XG4gICAgICBjb25zdCByYXdWYWxpZGF0b3JzID0gKHRoaXMubmdDb250cm9sIGFzIE56U2FmZUFueSk/Ll9yYXdWYWxpZGF0b3JzIGFzIFZhbGlkYXRvcltdO1xuICAgICAgdGhpcy5yZXF1aXJlZCA9IHJhd1ZhbGlkYXRvcnMuZmluZCh3ID0+IHcgaW5zdGFuY2VvZiBSZXF1aXJlZFZhbGlkYXRvcikgIT0gbnVsbDtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVN0YXR1cyhpbnZhbGlkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sLmRpc2FibGVkIHx8IHRoaXMubmdDb250cm9sLmlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbnZhbGlkID1cbiAgICAgICF0aGlzLm9uY2VGbGFnICYmIGludmFsaWQgJiYgdGhpcy5wYXJlbnQuaW5nb3JlRGlydHkgPT09IGZhbHNlICYmICF0aGlzLm5nQ29udHJvbC5kaXJ0eSA/IGZhbHNlIDogaW52YWxpZDtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLm5nQ29udHJvbC5lcnJvcnM7XG4gICAgaWYgKGVycm9ycyAhPSBudWxsICYmIE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoZXJyb3JzKVswXSB8fCAnJztcbiAgICAgIGNvbnN0IGVyciA9IHRoaXMuZXJyb3JEYXRhW2tleV07XG4gICAgICB0aGlzLl9lcnJvciA9IGVyciAhPSBudWxsID8gZXJyIDogdGhpcy5lcnJvckRhdGFbJyddIHx8ICcnO1xuICAgIH1cblxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBjbHMgPSBgJHtwcmVmaXhDbHN9X19pdGVtLWVtcHR5YDtcbiAgICBpZiAoaXNFbXB0eShlbCkpIHtcbiAgICAgIHRoaXMucmVuLmFkZENsYXNzKGVsLCBjbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbi5yZW1vdmVDbGFzcyhlbCwgY2xzKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMub25jZUZsYWcgPSB0aGlzLnBhcmVudC5maXJzdFZpc3VhbDtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3MoKS5iaW5kTW9kZWwoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpLmJpbmRNb2RlbCgpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5vbmNlRmxhZykge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKHRoaXMubmdDb250cm9sLmludmFsaWQhKTtcbiAgICAgICAgdGhpcy5vbmNlRmxhZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tbGFiZWxcIiBbY2xhc3Muc2VfX25vbGFiZWxdPVwiaGlkZUxhYmVsIHx8ICFsYWJlbFwiIFtzdHlsZS53aWR0aC5weF09XCJfbGFiZWxXaWR0aFwiPlxuICA8bGFiZWxcbiAgICAqbmdJZj1cImxhYmVsXCJcbiAgICBbYXR0ci5mb3JdPVwiX2lkXCJcbiAgICBjbGFzcz1cInNlX19sYWJlbFwiXG4gICAgW25nQ2xhc3NdPVwieyAnYW50LWZvcm0taXRlbS1yZXF1aXJlZCc6IHJlcXVpcmVkLCAnc2VfX25vLWNvbG9uJzogX25vQ29sb24gfVwiXG4gID5cbiAgICA8c3BhbiBjbGFzcz1cInNlX19sYWJlbC10ZXh0XCI+XG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibGFiZWxcIj57eyBsYWJlbCB9fTwvbmctY29udGFpbmVyPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cIm9wdGlvbmFsIHx8IG9wdGlvbmFsSGVscFwiIGNsYXNzPVwic2VfX2xhYmVsLW9wdGlvbmFsXCIgW2NsYXNzLnNlX19sYWJlbC1vcHRpb25hbC1uby10ZXh0XT1cIiFvcHRpb25hbFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm9wdGlvbmFsXCI+e3sgb3B0aW9uYWwgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDxpXG4gICAgICAgICpuZ0lmPVwib3B0aW9uYWxIZWxwXCJcbiAgICAgICAgbnotdG9vbHRpcFxuICAgICAgICBbbnpUb29sdGlwVGl0bGVdPVwib3B0aW9uYWxIZWxwXCJcbiAgICAgICAgW256VG9vbHRpcENvbG9yXT1cIm9wdGlvbmFsSGVscENvbG9yXCJcbiAgICAgICAgbnotaWNvblxuICAgICAgICBuelR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgPjwvaT5cbiAgICA8L3NwYW4+XG4gIDwvbGFiZWw+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wgc2VfX2NvbnRyb2xcIj5cbiAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC1pbnB1dCB7eyBjb250cm9sQ2xhc3MgfX1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0LWNvbnRlbnRcIiAoY2RrT2JzZXJ2ZUNvbnRlbnQpPVwiY2hlY2tDb250ZW50KClcIiAjY29udGVudEVsZW1lbnQ+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1leHBsYWluIGFudC1mb3JtLWl0ZW0tZXhwbGFpbi1lcnJvclwiICpuZ0lmPVwic2hvd0VyclwiPlxuICAgIDxkaXYgQGhlbHBNb3Rpb24+XG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiX2Vycm9yXCI+e3sgX2Vycm9yIH19PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiZXh0cmEgJiYgIWNvbXBhY3RcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tZXh0cmFcIj5cbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiZXh0cmFcIj57eyBleHRyYSB9fTwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19