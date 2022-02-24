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
SEComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.4", ngImport: i0, type: SEComponent, deps: [{ token: i0.ElementRef }, { token: i1.SEContainerComponent, host: true, optional: true }, { token: i2.ResponsiveService }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
SEComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.4", type: SEComponent, selector: "se", inputs: { optional: "optional", optionalHelp: "optionalHelp", optionalHelpColor: "optionalHelpColor", error: "error", extra: "extra", label: "label", col: "col", required: "required", controlClass: "controlClass", line: "line", labelWidth: "labelWidth", noColon: "noColon", hideLabel: "hideLabel", id: "id" }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue", "class.se__hide-label": "hideLabel", "class.ant-form-item-has-error": "invalid", "class.ant-form-item-with-help": "showErr" } }, queries: [{ propertyName: "ngModel", first: true, predicate: NgModel, descendants: true, static: true }, { propertyName: "formControlName", first: true, predicate: FormControlName, descendants: true, static: true }], viewQueries: [{ propertyName: "contentElement", first: true, predicate: ["contentElement"], descendants: true, static: true }], exportAs: ["se"], usesOnChanges: true, ngImport: i0, template: "<div class=\"ant-form-item-label\" [class.se__nolabel]=\"hideLabel || !label\" [style.width.px]=\"_labelWidth\">\n  <label\n    *ngIf=\"label\"\n    [attr.for]=\"_id\"\n    class=\"se__label\"\n    [ngClass]=\"{ 'ant-form-item-required': required, 'se__no-colon': _noColon }\"\n  >\n    <span class=\"se__label-text\">\n      <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    <span *ngIf=\"optional || optionalHelp\" class=\"se__label-optional\" [class.se__label-optional-no-text]=\"!optional\">\n      <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n      <i\n        *ngIf=\"optionalHelp\"\n        nz-tooltip\n        [nzTooltipTitle]=\"optionalHelp\"\n        [nzTooltipColor]=\"optionalHelpColor\"\n        nz-icon\n        nzType=\"question-circle\"\n      ></i>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control se__control\">\n  <div class=\"ant-form-item-control-input {{ controlClass }}\">\n    <div class=\"ant-form-item-control-input-content\" (cdkObserveContent)=\"checkContent()\" #contentElement>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\" *ngIf=\"showErr\">\n    <div role=\"alert\" class=\"ant-form-item-explain-error\">\n      <ng-container *nzStringTemplateOutlet=\"_error\">{{ _error }}</ng-container>\n    </div>\n  </div>\n  <div *ngIf=\"extra && !compact\" class=\"ant-form-item-extra\">\n    <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n  </div>\n</div>\n", directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: i5.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], animations: [helpMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.4", ngImport: i0, type: SEComponent, decorators: [{
            type: Component,
            args: [{ selector: 'se', exportAs: 'se', host: {
                        '[style.padding-left.px]': 'paddingValue',
                        '[style.padding-right.px]': 'paddingValue',
                        '[class.se__hide-label]': 'hideLabel',
                        '[class.ant-form-item-has-error]': 'invalid',
                        '[class.ant-form-item-with-help]': 'showErr'
                    }, preserveWhitespaces: false, animations: [helpMotion], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"ant-form-item-label\" [class.se__nolabel]=\"hideLabel || !label\" [style.width.px]=\"_labelWidth\">\n  <label\n    *ngIf=\"label\"\n    [attr.for]=\"_id\"\n    class=\"se__label\"\n    [ngClass]=\"{ 'ant-form-item-required': required, 'se__no-colon': _noColon }\"\n  >\n    <span class=\"se__label-text\">\n      <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    <span *ngIf=\"optional || optionalHelp\" class=\"se__label-optional\" [class.se__label-optional-no-text]=\"!optional\">\n      <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n      <i\n        *ngIf=\"optionalHelp\"\n        nz-tooltip\n        [nzTooltipTitle]=\"optionalHelp\"\n        [nzTooltipColor]=\"optionalHelpColor\"\n        nz-icon\n        nzType=\"question-circle\"\n      ></i>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control se__control\">\n  <div class=\"ant-form-item-control-input {{ controlClass }}\">\n    <div class=\"ant-form-item-control-input-content\" (cdkObserveContent)=\"checkContent()\" #contentElement>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\" *ngIf=\"showErr\">\n    <div role=\"alert\" class=\"ant-form-item-explain-error\">\n      <ng-container *nzStringTemplateOutlet=\"_error\">{{ _error }}</ng-container>\n    </div>\n  </div>\n  <div *ngIf=\"extra && !compact\" class=\"ant-form-item-extra\">\n    <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n  </div>\n</div>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3NlL3NlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zZS9zZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUdMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUVaLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUVSLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7O0FBTTFELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQztBQUN2QixJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7QUFrQnJCLE1BQU0sT0FBTyxXQUFXO0lBc0V0QixZQUNFLEVBQWMsRUFDYyxNQUE0QixFQUNoRCxHQUFzQixFQUN0QixHQUFjLEVBQ2QsR0FBc0I7UUFIRixXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUNoRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFsRXhCLGFBQVEsR0FBRyxJQUFJLE9BQU8s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cG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbE5hbWUsIE5nTW9kZWwsIFJlcXVpcmVkVmFsaWRhdG9yLCBWYWxpZGF0b3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUmVzcG9uc2l2ZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ0BkZWxvbi91dGlsL2Jyb3dzZXInO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBoZWxwTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IFNFQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNFRXJyb3IsIFNFRXJyb3JUeXBlIH0gZnJvbSAnLi9zZS50eXBlcyc7XG5cbmNvbnN0IHByZWZpeENscyA9IGBzZWA7XG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2UnLFxuICBleHBvcnRBczogJ3NlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUucGFkZGluZy1sZWZ0LnB4XSc6ICdwYWRkaW5nVmFsdWUnLFxuICAgICdbc3R5bGUucGFkZGluZy1yaWdodC5weF0nOiAncGFkZGluZ1ZhbHVlJyxcbiAgICAnW2NsYXNzLnNlX19oaWRlLWxhYmVsXSc6ICdoaWRlTGFiZWwnLFxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS1oYXMtZXJyb3JdJzogJ2ludmFsaWQnLFxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS13aXRoLWhlbHBdJzogJ3Nob3dFcnInXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zOiBbaGVscE1vdGlvbl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNFQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29sOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JlcXVpcmVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9saW5lOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sYWJlbFdpZHRoOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX25vQ29sb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hpZGVMYWJlbDogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgQENvbnRlbnRDaGlsZChOZ01vZGVsLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIHJlYWRvbmx5IG5nTW9kZWw/OiBOZ01vZGVsO1xuICBAQ29udGVudENoaWxkKEZvcm1Db250cm9sTmFtZSwgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHJpdmF0ZSByZWFkb25seSBmb3JtQ29udHJvbE5hbWU/OiBGb3JtQ29udHJvbE5hbWU7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSByZWFkb25seSBjb250ZW50RWxlbWVudCE6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2xzTWFwOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIG9uY2VGbGFnID0gZmFsc2U7XG4gIHByaXZhdGUgZXJyb3JEYXRhOiBTRUVycm9yID0ge307XG4gIHByaXZhdGUgaXNCaW5kTW9kZWwgPSBmYWxzZTtcbiAgaW52YWxpZCA9IGZhbHNlO1xuICBfbGFiZWxXaWR0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIF9ub0NvbG9uOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG4gIF9lcnJvcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgb3B0aW9uYWw/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBvcHRpb25hbEhlbHA/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBvcHRpb25hbEhlbHBDb2xvcj86IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGVycm9yKHZhbDogU0VFcnJvclR5cGUpIHtcbiAgICB0aGlzLmVycm9yRGF0YSA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnIHx8IHZhbCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8geyAnJzogdmFsIH0gOiB2YWw7XG4gIH1cbiAgQElucHV0KCkgZXh0cmE/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIGxhYmVsPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sPzogbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlcXVpcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbnRyb2xDbGFzcz86IHN0cmluZyB8IG51bGwgPSAnJztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbihudWxsKSBsaW5lPzogYm9vbGVhbiB8IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBsYWJlbFdpZHRoPzogbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbihudWxsKSBub0NvbG9uPzogYm9vbGVhbiB8IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlTGFiZWwgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgdGhpcy5fYXV0b0lkID0gZmFsc2U7XG4gIH1cblxuICBfaWQgPSBgX3NlLSR7KytuZXh0VW5pcXVlSWR9YDtcbiAgX2F1dG9JZCA9IHRydWU7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldCBwYWRkaW5nVmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHRoaXMucGFyZW50Lmd1dHRlciBhcyBudW1iZXIpIC8gMjtcbiAgfVxuXG4gIGdldCBzaG93RXJyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgJiYgISF0aGlzLl9lcnJvciAmJiAhdGhpcy5jb21wYWN0O1xuICB9XG5cbiAgZ2V0IGNvbXBhY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50LnNpemUgPT09ICdjb21wYWN0JztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IG5nQ29udHJvbCgpOiBOZ01vZGVsIHwgRm9ybUNvbnRyb2xOYW1lIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMubmdNb2RlbCB8fCB0aGlzLmZvcm1Db250cm9sTmFtZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBwYXJlbnQ6IFNFQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgcmVwOiBSZXNwb25zaXZlU2VydmljZSxcbiAgICBwcml2YXRlIHJlbjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3NlXSBtdXN0IGluY2x1ZGUgJ3NlLWNvbnRhaW5lcicgY29tcG9uZW50YCk7XG4gICAgfVxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIHBhcmVudC5lcnJvck5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKHcgPT4gdGhpcy5pbml0ZWQgJiYgdGhpcy5uZ0NvbnRyb2wgIT0gbnVsbCAmJiB0aGlzLm5nQ29udHJvbC5uYW1lID09PSB3Lm5hbWUpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgICB0aGlzLmVycm9yID0gaXRlbS5lcnJvcjtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0dXModGhpcy5uZ0NvbnRyb2whLmludmFsaWQhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB0aGlzIHtcbiAgICBjb25zdCB7IGVsLCByZW4sIGNsc01hcCwgY29sLCBwYXJlbnQsIGNkciwgbGluZSwgbGFiZWxXaWR0aCwgcmVwLCBub0NvbG9uIH0gPSB0aGlzO1xuICAgIHRoaXMuX25vQ29sb24gPSBub0NvbG9uICE9IG51bGwgPyBub0NvbG9uIDogcGFyZW50Lm5vQ29sb247XG4gICAgdGhpcy5fbGFiZWxXaWR0aCA9IHBhcmVudC5uekxheW91dCA9PT0gJ2hvcml6b250YWwnID8gKGxhYmVsV2lkdGggIT0gbnVsbCA/IGxhYmVsV2lkdGggOiBwYXJlbnQubGFiZWxXaWR0aCkgOiBudWxsO1xuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscykpO1xuICAgIGNsc01hcC5sZW5ndGggPSAwO1xuICAgIGNvbnN0IHJlcENscyA9XG4gICAgICBwYXJlbnQubnpMYXlvdXQgPT09ICdob3Jpem9udGFsJyA/IHJlcC5nZW5DbHMoY29sICE9IG51bGwgPyBjb2wgOiBwYXJlbnQuY29sSW5Db24gfHwgcGFyZW50LmNvbCkgOiBbXTtcbiAgICBjbHNNYXAucHVzaChgYW50LWZvcm0taXRlbWAsIC4uLnJlcENscywgYCR7cHJlZml4Q2xzfV9faXRlbWApO1xuICAgIGlmIChsaW5lIHx8IHBhcmVudC5saW5lKSB7XG4gICAgICBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19saW5lYCk7XG4gICAgfVxuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4uYWRkQ2xhc3MoZWwsIGNscykpO1xuICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGJpbmRNb2RlbCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubmdDb250cm9sIHx8IHRoaXMuaXNCaW5kTW9kZWwpIHJldHVybjtcblxuICAgIHRoaXMuaXNCaW5kTW9kZWwgPSB0cnVlO1xuICAgIHRoaXMubmdDb250cm9sLnN0YXR1c0NoYW5nZXMhLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUocmVzID0+IHRoaXMudXBkYXRlU3RhdHVzKHJlcyA9PT0gJ0lOVkFMSUQnKSk7XG4gICAgaWYgKHRoaXMuX2F1dG9JZCkge1xuICAgICAgY29uc3QgY29udHJvbEFjY2Vzc29yID0gdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciBhcyBOelNhZmVBbnk7XG4gICAgICBjb25zdCBjb250cm9sID0gKGNvbnRyb2xBY2Nlc3Nvcj8uZWxlbWVudFJlZiB8fCBjb250cm9sQWNjZXNzb3I/Ll9lbGVtZW50UmVmKT8ubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICghIWNvbnRyb2wpIHtcbiAgICAgICAgaWYgKGNvbnRyb2wuaWQpIHtcbiAgICAgICAgICB0aGlzLl9pZCA9IGNvbnRyb2wuaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udHJvbC5pZCA9IHRoaXMuX2lkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGF1dG8gcmVxdWlyZWRcbiAgICBpZiAodGhpcy5yZXF1aXJlZCAhPT0gdHJ1ZSkge1xuICAgICAgY29uc3QgcmF3VmFsaWRhdG9ycyA9ICh0aGlzLm5nQ29udHJvbCBhcyBOelNhZmVBbnkpPy5fcmF3VmFsaWRhdG9ycyBhcyBWYWxpZGF0b3JbXTtcbiAgICAgIHRoaXMucmVxdWlyZWQgPSByYXdWYWxpZGF0b3JzLmZpbmQodyA9PiB3IGluc3RhbmNlb2YgUmVxdWlyZWRWYWxpZGF0b3IpICE9IG51bGw7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTdGF0dXMoaW52YWxpZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbD8uZGlzYWJsZWQgfHwgdGhpcy5uZ0NvbnRyb2w/LmlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbnZhbGlkID1cbiAgICAgICF0aGlzLm9uY2VGbGFnICYmIGludmFsaWQgJiYgdGhpcy5wYXJlbnQuaW5nb3JlRGlydHkgPT09IGZhbHNlICYmICF0aGlzLm5nQ29udHJvbD8uZGlydHkgPyBmYWxzZSA6IGludmFsaWQ7XG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5uZ0NvbnRyb2w/LmVycm9ycztcbiAgICBpZiAoZXJyb3JzICE9IG51bGwgJiYgT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhlcnJvcnMpWzBdIHx8ICcnO1xuICAgICAgY29uc3QgZXJyID0gdGhpcy5lcnJvckRhdGFba2V5XTtcbiAgICAgIHRoaXMuX2Vycm9yID0gZXJyICE9IG51bGwgPyBlcnIgOiB0aGlzLmVycm9yRGF0YVsnJ10gfHwgJyc7XG4gICAgfVxuXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGNscyA9IGAke3ByZWZpeENsc31fX2l0ZW0tZW1wdHlgO1xuICAgIGlmIChpc0VtcHR5KGVsKSkge1xuICAgICAgdGhpcy5yZW4uYWRkQ2xhc3MoZWwsIGNscyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuLnJlbW92ZUNsYXNzKGVsLCBjbHMpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5vbmNlRmxhZyA9IHRoaXMucGFyZW50LmZpcnN0VmlzdWFsO1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5zZXRDbGFzcygpLmJpbmRNb2RlbCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCkuYmluZE1vZGVsKCk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLm9uY2VGbGFnKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0dXModGhpcy5uZ0NvbnRyb2w/LmludmFsaWQhKTtcbiAgICAgICAgdGhpcy5vbmNlRmxhZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyBkZXN0cm95JCB9ID0gdGhpcztcbiAgICBkZXN0cm95JC5uZXh0KCk7XG4gICAgZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tbGFiZWxcIiBbY2xhc3Muc2VfX25vbGFiZWxdPVwiaGlkZUxhYmVsIHx8ICFsYWJlbFwiIFtzdHlsZS53aWR0aC5weF09XCJfbGFiZWxXaWR0aFwiPlxuICA8bGFiZWxcbiAgICAqbmdJZj1cImxhYmVsXCJcbiAgICBbYXR0ci5mb3JdPVwiX2lkXCJcbiAgICBjbGFzcz1cInNlX19sYWJlbFwiXG4gICAgW25nQ2xhc3NdPVwieyAnYW50LWZvcm0taXRlbS1yZXF1aXJlZCc6IHJlcXVpcmVkLCAnc2VfX25vLWNvbG9uJzogX25vQ29sb24gfVwiXG4gID5cbiAgICA8c3BhbiBjbGFzcz1cInNlX19sYWJlbC10ZXh0XCI+XG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibGFiZWxcIj57eyBsYWJlbCB9fTwvbmctY29udGFpbmVyPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cIm9wdGlvbmFsIHx8IG9wdGlvbmFsSGVscFwiIGNsYXNzPVwic2VfX2xhYmVsLW9wdGlvbmFsXCIgW2NsYXNzLnNlX19sYWJlbC1vcHRpb25hbC1uby10ZXh0XT1cIiFvcHRpb25hbFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm9wdGlvbmFsXCI+e3sgb3B0aW9uYWwgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDxpXG4gICAgICAgICpuZ0lmPVwib3B0aW9uYWxIZWxwXCJcbiAgICAgICAgbnotdG9vbHRpcFxuICAgICAgICBbbnpUb29sdGlwVGl0bGVdPVwib3B0aW9uYWxIZWxwXCJcbiAgICAgICAgW256VG9vbHRpcENvbG9yXT1cIm9wdGlvbmFsSGVscENvbG9yXCJcbiAgICAgICAgbnotaWNvblxuICAgICAgICBuelR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgPjwvaT5cbiAgICA8L3NwYW4+XG4gIDwvbGFiZWw+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wgc2VfX2NvbnRyb2xcIj5cbiAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC1pbnB1dCB7eyBjb250cm9sQ2xhc3MgfX1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0LWNvbnRlbnRcIiAoY2RrT2JzZXJ2ZUNvbnRlbnQpPVwiY2hlY2tDb250ZW50KClcIiAjY29udGVudEVsZW1lbnQ+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IEBoZWxwTW90aW9uIGNsYXNzPVwiYW50LWZvcm0taXRlbS1leHBsYWluIGFudC1mb3JtLWl0ZW0tZXhwbGFpbi1jb25uZWN0ZWRcIiAqbmdJZj1cInNob3dFcnJcIj5cbiAgICA8ZGl2IHJvbGU9XCJhbGVydFwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS1leHBsYWluLWVycm9yXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiX2Vycm9yXCI+e3sgX2Vycm9yIH19PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiZXh0cmEgJiYgIWNvbXBhY3RcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tZXh0cmFcIj5cbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiZXh0cmFcIj57eyBleHRyYSB9fTwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19