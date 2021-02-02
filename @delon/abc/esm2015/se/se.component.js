import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Host, Input, Optional, Renderer2, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { FormControlName, NgModel, RequiredValidator } from '@angular/forms';
import { ResponsiveService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { SEContainerComponent } from './se-container.component';
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
        this.required = false;
        this.controlClass = '';
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
        const { el, ren, clsMap, col, parent, cdr, line, labelWidth, rep } = this;
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
        var _a, _b;
        if (!this.ngControl || this.isBindModel)
            return;
        this.isBindModel = true;
        this.ngControl.statusChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(res => this.updateStatus(res === 'INVALID'));
        if (this._autoId) {
            const controlAccessor = this.ngControl.valueAccessor;
            const control = (_a = ((controlAccessor === null || controlAccessor === void 0 ? void 0 : controlAccessor.elementRef) || (controlAccessor === null || controlAccessor === void 0 ? void 0 : controlAccessor._elementRef))) === null || _a === void 0 ? void 0 : _a.nativeElement;
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
            const rawValidators = (_b = this.ngControl) === null || _b === void 0 ? void 0 : _b._rawValidators;
            this.required = rawValidators.find(w => w instanceof RequiredValidator) != null;
            this.cdr.detectChanges();
        }
    }
    updateStatus(invalid) {
        if (this.ngControl.disabled || this.ngControl.isDisabled) {
            return;
        }
        this.invalid = !this.onceFlag && invalid && this.parent.ingoreDirty === false && !this.ngControl.dirty ? false : invalid;
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
/** @nocollapse */ SEComponent.ɵfac = function SEComponent_Factory(t) { return new (t || SEComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.SEContainerComponent, 9), i0.ɵɵdirectiveInject(i2.ResponsiveService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ SEComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: SEComponent, selector: "se", inputs: { optional: "optional", optionalHelp: "optionalHelp", optionalHelpColor: "optionalHelpColor", error: "error", extra: "extra", label: "label", col: "col", required: "required", controlClass: "controlClass", line: "line", labelWidth: "labelWidth", id: "id" }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue", "class.ant-form-item-has-error": "invalid", "class.ant-form-item-with-help": "showErr" } }, queries: [{ propertyName: "ngModel", first: true, predicate: NgModel, emitDistinctChangesOnly: false, descendants: true, static: true }, { propertyName: "formControlName", first: true, predicate: FormControlName, emitDistinctChangesOnly: false, descendants: true, static: true }], viewQueries: [{ propertyName: "contentElement", first: true, predicate: ["contentElement"], emitDistinctChangesOnly: false, descendants: true, static: true }], exportAs: ["se"], usesOnChanges: true, ngImport: i0, template: "<div class=\"ant-form-item-label\" [class.se__nolabel]=\"!label\" [style.width.px]=\"_labelWidth\">\n  <label *ngIf=\"label\" [attr.for]=\"_id\" class=\"se__label\" [ngClass]=\"{ 'ant-form-item-required': required }\">\n    <span class=\"se__label-text\">\n      <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    <span *ngIf=\"optional || optionalHelp\" class=\"se__label-optional\" [class.se__label-optional-no-text]=\"!optional\">\n      <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n      <i *ngIf=\"optionalHelp\" nz-tooltip [nzTooltipTitle]=\"optionalHelp\" [nzTooltipColor]=\"optionalHelpColor\" nz-icon nzType=\"question-circle\"></i>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control se__control\">\n  <div class=\"ant-form-item-control-input {{ controlClass }}\">\n    <div class=\"ant-form-item-control-input-content\" (cdkObserveContent)=\"checkContent()\" #contentElement>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div class=\"ant-form-item-explain ant-form-item-explain-error\" *ngIf=\"showErr\">\n    <div @helpMotion>\n      <ng-container *nzStringTemplateOutlet=\"_error\">{{ _error }}</ng-container>\n    </div>\n  </div>\n  <div *ngIf=\"extra && !compact\" class=\"ant-form-item-extra\">\n    <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n  </div>\n</div>\n", directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: i5.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipTitle", "nz-tooltip", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], animations: [helpMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SEComponent.prototype, "col", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], SEComponent.prototype, "required", void 0);
__decorate([
    InputBoolean(null),
    __metadata("design:type", Boolean)
], SEComponent.prototype, "line", void 0);
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SEComponent.prototype, "labelWidth", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SEComponent, [{
        type: Component,
        args: [{
                selector: 'se',
                exportAs: 'se',
                templateUrl: './se.component.html',
                host: {
                    '[style.padding-left.px]': 'paddingValue',
                    '[style.padding-right.px]': 'paddingValue',
                    '[class.ant-form-item-has-error]': 'invalid',
                    '[class.ant-form-item-with-help]': 'showErr',
                },
                preserveWhitespaces: false,
                animations: [helpMotion],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.SEContainerComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: i2.ResponsiveService }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, { ngModel: [{
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
        }], id: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3NlL3NlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zZS9zZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFHTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFMUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7OztBQUdoRSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDdkIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBaUJyQixNQUFNLE9BQU8sV0FBVztJQWlFdEIsWUFDRSxFQUFjLEVBQ2MsTUFBNEIsRUFDaEQsR0FBc0IsRUFDdEIsR0FBYyxFQUNkLEdBQXNCO1FBSEYsV0FBTSxH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USxFQUFFLElBQUk7Z0JBQ2QsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsV0FBVyxFQUFFLHFCQUFxQjtnQkFDbEMsSUFBSSxFQUFFO29CQUNKLHlCQUF5QixFQUFFLGNBQWM7b0JBQ3pDLDBCQUEwQixFQUFFLGNBQWM7b0JBQzFDLGlDQUFpQyxFQUFFLFNBQVM7b0JBQzVDLGlDQUFpQyxFQUFFLFNBQVM7aUJBQzdDO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDeEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOztzQkFvRUksUUFBUTs7c0JBQUksSUFBSTtnSEEzRHVDLE9BQU87a0JBQWhFLFlBQVk7bUJBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUV0QixlQUFlO2tCQUQvQixZQUFZO21CQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFFaUIsY0FBYztrQkFBN0UsU0FBUzttQkFBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFZcEMsUUFBUTtrQkFBaEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFFRixLQUFLO2tCQURSLEtBQUs7WUFJRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDc0IsR0FBRztrQkFBOUIsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUN1QixJQUFJO2tCQUFoQyxLQUFLO1lBQ3NCLFVBQVU7a0JBQXJDLEtBQUs7WUFHRixFQUFFO2tCQURMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sTmFtZSwgTmdNb2RlbCwgUmVxdWlyZWRWYWxpZGF0b3IsIFZhbGlkYXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJlc3BvbnNpdmVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgaGVscE1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU0VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3NlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU0VFcnJvciwgU0VFcnJvclR5cGUgfSBmcm9tICcuL3NlLnR5cGVzJztcblxuY29uc3QgcHJlZml4Q2xzID0gYHNlYDtcbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZScsXG4gIGV4cG9ydEFzOiAnc2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2UuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5wYWRkaW5nLWxlZnQucHhdJzogJ3BhZGRpbmdWYWx1ZScsXG4gICAgJ1tzdHlsZS5wYWRkaW5nLXJpZ2h0LnB4XSc6ICdwYWRkaW5nVmFsdWUnLFxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS1oYXMtZXJyb3JdJzogJ2ludmFsaWQnLFxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS13aXRoLWhlbHBdJzogJ3Nob3dFcnInLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9uczogW2hlbHBNb3Rpb25dLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU0VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb2w6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVxdWlyZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xpbmU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xhYmVsV2lkdGg6IE51bWJlcklucHV0O1xuXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIEBDb250ZW50Q2hpbGQoTmdNb2RlbCwgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSByZWFkb25seSBuZ01vZGVsOiBOZ01vZGVsO1xuICBAQ29udGVudENoaWxkKEZvcm1Db250cm9sTmFtZSwgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHJpdmF0ZSByZWFkb25seSBmb3JtQ29udHJvbE5hbWU6IEZvcm1Db250cm9sTmFtZTtcbiAgQFZpZXdDaGlsZCgnY29udGVudEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIHJlYWRvbmx5IGNvbnRlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGNsc01hcDogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBvbmNlRmxhZyA9IGZhbHNlO1xuICBwcml2YXRlIGVycm9yRGF0YTogU0VFcnJvciA9IHt9O1xuICBwcml2YXRlIGlzQmluZE1vZGVsID0gZmFsc2U7XG4gIGludmFsaWQgPSBmYWxzZTtcbiAgX2xhYmVsV2lkdGg6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBfZXJyb3I6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgb3B0aW9uYWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBvcHRpb25hbEhlbHA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBvcHRpb25hbEhlbHBDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgZXJyb3IodmFsOiBTRUVycm9yVHlwZSkge1xuICAgIHRoaXMuZXJyb3JEYXRhID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgdmFsIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYgPyB7ICcnOiB2YWwgfSA6IHZhbDtcbiAgfVxuICBASW5wdXQoKSBleHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGNvbDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVxdWlyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgY29udHJvbENsYXNzOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbihudWxsKSBsaW5lOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgbGFiZWxXaWR0aDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgICB0aGlzLl9hdXRvSWQgPSBmYWxzZTtcbiAgfVxuXG4gIF9pZCA9IGBfc2UtJHsrK25leHRVbmlxdWVJZH1gO1xuICBfYXV0b0lkID0gdHJ1ZTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IHBhZGRpbmdWYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5ndXR0ZXIgLyAyO1xuICB9XG5cbiAgZ2V0IHNob3dFcnIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCAmJiAhIXRoaXMuX2Vycm9yICYmICF0aGlzLmNvbXBhY3Q7XG4gIH1cblxuICBnZXQgY29tcGFjdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuc2l6ZSA9PT0gJ2NvbXBhY3QnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgbmdDb250cm9sKCk6IE5nTW9kZWwgfCBGb3JtQ29udHJvbE5hbWUge1xuICAgIHJldHVybiB0aGlzLm5nTW9kZWwgfHwgdGhpcy5mb3JtQ29udHJvbE5hbWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgcGFyZW50OiBTRUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHJlcDogUmVzcG9uc2l2ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW46IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc2VdIG11c3QgaW5jbHVkZSAnc2UtY29udGFpbmVyJyBjb21wb25lbnRgKTtcbiAgICB9XG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcGFyZW50LmVycm9yTm90aWZ5XG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSxcbiAgICAgICAgZmlsdGVyKHcgPT4gdGhpcy5pbml0ZWQgJiYgdGhpcy5uZ0NvbnRyb2wgIT0gbnVsbCAmJiB0aGlzLm5nQ29udHJvbC5uYW1lID09PSB3Lm5hbWUpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShpdGVtID0+IHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGl0ZW0uZXJyb3I7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKHRoaXMubmdDb250cm9sLmludmFsaWQhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB0aGlzIHtcbiAgICBjb25zdCB7IGVsLCByZW4sIGNsc01hcCwgY29sLCBwYXJlbnQsIGNkciwgbGluZSwgbGFiZWxXaWR0aCwgcmVwIH0gPSB0aGlzO1xuICAgIHRoaXMuX2xhYmVsV2lkdGggPSBwYXJlbnQubnpMYXlvdXQgPT09ICdob3Jpem9udGFsJyA/IChsYWJlbFdpZHRoICE9IG51bGwgPyBsYWJlbFdpZHRoIDogcGFyZW50LmxhYmVsV2lkdGgpIDogbnVsbDtcbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLnJlbW92ZUNsYXNzKGVsLCBjbHMpKTtcbiAgICBjbHNNYXAubGVuZ3RoID0gMDtcbiAgICBjb25zdCByZXBDbHMgPSBwYXJlbnQubnpMYXlvdXQgPT09ICdob3Jpem9udGFsJyA/IHJlcC5nZW5DbHMoY29sICE9IG51bGwgPyBjb2wgOiBwYXJlbnQuY29sSW5Db24gfHwgcGFyZW50LmNvbCkgOiBbXTtcbiAgICBjbHNNYXAucHVzaChgYW50LWZvcm0taXRlbWAsIC4uLnJlcENscywgYCR7cHJlZml4Q2xzfV9faXRlbWApO1xuICAgIGlmIChsaW5lIHx8IHBhcmVudC5saW5lKSB7XG4gICAgICBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19saW5lYCk7XG4gICAgfVxuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4uYWRkQ2xhc3MoZWwsIGNscykpO1xuICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGJpbmRNb2RlbCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubmdDb250cm9sIHx8IHRoaXMuaXNCaW5kTW9kZWwpIHJldHVybjtcblxuICAgIHRoaXMuaXNCaW5kTW9kZWwgPSB0cnVlO1xuICAgIHRoaXMubmdDb250cm9sLnN0YXR1c0NoYW5nZXMhLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLnVwZGF0ZVN0YXR1cyhyZXMgPT09ICdJTlZBTElEJykpO1xuICAgIGlmICh0aGlzLl9hdXRvSWQpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2xBY2Nlc3NvciA9IHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgYXMgTnpTYWZlQW55O1xuICAgICAgY29uc3QgY29udHJvbCA9IChjb250cm9sQWNjZXNzb3I/LmVsZW1lbnRSZWYgfHwgY29udHJvbEFjY2Vzc29yPy5fZWxlbWVudFJlZik/Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoISFjb250cm9sKSB7XG4gICAgICAgIGlmIChjb250cm9sLmlkKSB7XG4gICAgICAgICAgdGhpcy5faWQgPSBjb250cm9sLmlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRyb2wuaWQgPSB0aGlzLl9pZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBhdXRvIHJlcXVpcmVkXG4gICAgaWYgKHRoaXMucmVxdWlyZWQgIT09IHRydWUpIHtcbiAgICAgIGNvbnN0IHJhd1ZhbGlkYXRvcnMgPSAodGhpcy5uZ0NvbnRyb2wgYXMgTnpTYWZlQW55KT8uX3Jhd1ZhbGlkYXRvcnMgYXMgQXJyYXk8VmFsaWRhdG9yPjtcbiAgICAgIHRoaXMucmVxdWlyZWQgPSByYXdWYWxpZGF0b3JzLmZpbmQodyA9PiB3IGluc3RhbmNlb2YgUmVxdWlyZWRWYWxpZGF0b3IpICE9IG51bGw7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTdGF0dXMoaW52YWxpZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbC5kaXNhYmxlZCB8fCB0aGlzLm5nQ29udHJvbC5pc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW52YWxpZCA9ICF0aGlzLm9uY2VGbGFnICYmIGludmFsaWQgJiYgdGhpcy5wYXJlbnQuaW5nb3JlRGlydHkgPT09IGZhbHNlICYmICF0aGlzLm5nQ29udHJvbC5kaXJ0eSA/IGZhbHNlIDogaW52YWxpZDtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLm5nQ29udHJvbC5lcnJvcnM7XG4gICAgaWYgKGVycm9ycyAhPSBudWxsICYmIE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoZXJyb3JzKVswXSB8fCAnJztcbiAgICAgIGNvbnN0IGVyciA9IHRoaXMuZXJyb3JEYXRhW2tleV07XG4gICAgICB0aGlzLl9lcnJvciA9IGVyciAhPSBudWxsID8gZXJyIDogdGhpcy5lcnJvckRhdGFbJyddIHx8ICcnO1xuICAgIH1cblxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBjbHMgPSBgJHtwcmVmaXhDbHN9X19pdGVtLWVtcHR5YDtcbiAgICBpZiAoaXNFbXB0eShlbCkpIHtcbiAgICAgIHRoaXMucmVuLmFkZENsYXNzKGVsLCBjbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbi5yZW1vdmVDbGFzcyhlbCwgY2xzKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMub25jZUZsYWcgPSB0aGlzLnBhcmVudC5maXJzdFZpc3VhbDtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3MoKS5iaW5kTW9kZWwoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpLmJpbmRNb2RlbCgpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5vbmNlRmxhZykge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKHRoaXMubmdDb250cm9sLmludmFsaWQhKTtcbiAgICAgICAgdGhpcy5vbmNlRmxhZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tbGFiZWxcIiBbY2xhc3Muc2VfX25vbGFiZWxdPVwiIWxhYmVsXCIgW3N0eWxlLndpZHRoLnB4XT1cIl9sYWJlbFdpZHRoXCI+XG4gIDxsYWJlbCAqbmdJZj1cImxhYmVsXCIgW2F0dHIuZm9yXT1cIl9pZFwiIGNsYXNzPVwic2VfX2xhYmVsXCIgW25nQ2xhc3NdPVwieyAnYW50LWZvcm0taXRlbS1yZXF1aXJlZCc6IHJlcXVpcmVkIH1cIj5cbiAgICA8c3BhbiBjbGFzcz1cInNlX19sYWJlbC10ZXh0XCI+XG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibGFiZWxcIj57eyBsYWJlbCB9fTwvbmctY29udGFpbmVyPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiAqbmdJZj1cIm9wdGlvbmFsIHx8IG9wdGlvbmFsSGVscFwiIGNsYXNzPVwic2VfX2xhYmVsLW9wdGlvbmFsXCIgW2NsYXNzLnNlX19sYWJlbC1vcHRpb25hbC1uby10ZXh0XT1cIiFvcHRpb25hbFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm9wdGlvbmFsXCI+e3sgb3B0aW9uYWwgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDxpICpuZ0lmPVwib3B0aW9uYWxIZWxwXCIgbnotdG9vbHRpcCBbbnpUb29sdGlwVGl0bGVdPVwib3B0aW9uYWxIZWxwXCIgW256VG9vbHRpcENvbG9yXT1cIm9wdGlvbmFsSGVscENvbG9yXCIgbnotaWNvbiBuelR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIj48L2k+XG4gICAgPC9zcGFuPlxuICA8L2xhYmVsPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sIHNlX19jb250cm9sXCI+XG4gIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtaW5wdXQge3sgY29udHJvbENsYXNzIH19XCI+XG4gICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC1pbnB1dC1jb250ZW50XCIgKGNka09ic2VydmVDb250ZW50KT1cImNoZWNrQ29udGVudCgpXCIgI2NvbnRlbnRFbGVtZW50PlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tZXhwbGFpbiBhbnQtZm9ybS1pdGVtLWV4cGxhaW4tZXJyb3JcIiAqbmdJZj1cInNob3dFcnJcIj5cbiAgICA8ZGl2IEBoZWxwTW90aW9uPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIl9lcnJvclwiPnt7IF9lcnJvciB9fTwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cImV4dHJhICYmICFjb21wYWN0XCIgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWV4dHJhXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImV4dHJhXCI+e3sgZXh0cmEgfX08L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==