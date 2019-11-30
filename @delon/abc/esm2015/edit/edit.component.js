/**
 * @fileoverview added by tsickle
 * Generated from: edit.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Host, Input, Optional, Renderer2, ViewChild, ViewEncapsulation, } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';
import { ResponsiveService } from '@delon/theme';
import { deepGet, isEmpty, InputBoolean, InputNumber } from '@delon/util';
import { SEContainerComponent } from './edit-container.component';
/** @type {?} */
const prefixCls = `se`;
/** @type {?} */
let nextUniqueId = 0;
export class SEComponent {
    /**
     * @param {?} el
     * @param {?} parent
     * @param {?} rep
     * @param {?} ren
     * @param {?} cdr
     */
    constructor(el, parent, rep, ren, cdr) {
        this.parent = parent;
        this.rep = rep;
        this.ren = ren;
        this.cdr = cdr;
        this.clsMap = [];
        this.inited = false;
        this.onceFlag = false;
        this.invalid = false;
        this._labelWidth = null;
        this.required = false;
        this.controlClass = '';
        this._id = `_se-${nextUniqueId++}`;
        this._autoId = true;
        if (parent == null) {
            throw new Error(`[se] must include 'se-container' component`);
        }
        this.el = el.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        this._id = value;
        this._autoId = false;
    }
    // #endregion
    /**
     * @return {?}
     */
    get paddingValue() {
        return this.parent.gutter / 2;
    }
    /**
     * @return {?}
     */
    get showErr() {
        return this.invalid && this.parent.size !== 'compact' && !!this.error;
    }
    /**
     * @private
     * @return {?}
     */
    get ngControl() {
        return this.ngModel || this.formControlName;
    }
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    setClass() {
        const { el, ren, clsMap, col, parent, cdr, line, labelWidth, rep } = (/** @type {?} */ (this));
        (/** @type {?} */ (this))._labelWidth = parent.nzLayout === 'horizontal' ? (labelWidth != null ? labelWidth : parent.labelWidth) : null;
        clsMap.forEach((/**
         * @param {?} cls
         * @return {?}
         */
        cls => ren.removeClass(el, cls)));
        clsMap.length = 0;
        /** @type {?} */
        const repCls = parent.nzLayout === 'horizontal' ? rep.genCls(col != null ? col : parent.colInCon || parent.col) : [];
        clsMap.push(`ant-form-item`, ...repCls, `${prefixCls}__item`);
        if (line || parent.line) {
            clsMap.push(`${prefixCls}__line`);
        }
        clsMap.forEach((/**
         * @param {?} cls
         * @return {?}
         */
        cls => ren.addClass(el, cls)));
        cdr.detectChanges();
        return (/** @type {?} */ (this));
    }
    /**
     * @private
     * @return {?}
     */
    bindModel() {
        if (!this.ngControl || this.status$)
            return;
        this.status$ = (/** @type {?} */ (this.ngControl.statusChanges)).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => this.updateStatus(res === 'INVALID')));
        if (this._autoId) {
            /** @type {?} */
            const control = (/** @type {?} */ (deepGet(this.ngControl.valueAccessor, '_elementRef.nativeElement')));
            if (control) {
                control.id = this._id;
            }
        }
    }
    /**
     * @private
     * @param {?} invalid
     * @return {?}
     */
    updateStatus(invalid) {
        if (this.ngControl.disabled || this.ngControl.isDisabled) {
            return;
        }
        this.invalid = (/** @type {?} */ (((invalid && this.onceFlag) || (this.ngControl.dirty && invalid))));
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    checkContent() {
        /** @type {?} */
        const el = this.contentElement.nativeElement;
        /** @type {?} */
        const cls = `${prefixCls}__item-empty`;
        if (isEmpty(el)) {
            this.ren.addClass(el, cls);
        }
        else {
            this.ren.removeClass(el, cls);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.checkContent();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.onceFlag = this.parent.firstVisual;
        if (this.inited)
            this.setClass().bindModel();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setClass().bindModel();
        this.inited = true;
        if (this.onceFlag) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                this.updateStatus((/** @type {?} */ (this.ngControl.invalid)));
                this.onceFlag = false;
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.status$) {
            this.status$.unsubscribe();
        }
    }
}
SEComponent.decorators = [
    { type: Component, args: [{
                selector: 'se',
                exportAs: 'se',
                template: "<div class=\"ant-form-item-label\" [class.se__nolabel]=\"!label\" [style.width.px]=\"_labelWidth\">\n  <label *ngIf=\"label\" [attr.for]=\"_id\" class=\"se__label\" [ngClass]=\"{'ant-form-item-required': required}\">\n    <span class=\"se__label-text\">\n      <ng-container *stringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    <span class=\"se__label-optional\" *ngIf=\"optional || optionalHelp\">\n      <ng-container *stringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n      <i *ngIf=\"optionalHelp\" nz-tooltip [nzTooltipTitle]=\"optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control-wrapper se__control\">\n  <div class=\"ant-form-item-control {{controlClass}}\" [class.has-error]=\"invalid\">\n    <span (cdkObserveContent)=\"checkContent()\" #contentElement><ng-content></ng-content></span>\n    <se-error *ngIf=\"showErr\">{{error}}</se-error>\n    <div *ngIf=\"extra\" class=\"ant-form-extra\">{{extra}}</div>\n  </div>\n</div>\n",
                host: {
                    '[style.padding-left.px]': 'paddingValue',
                    '[style.padding-right.px]': 'paddingValue',
                    '[class.ant-form-item-with-help]': 'showErr',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
SEComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: SEContainerComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: ResponsiveService },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
SEComponent.propDecorators = {
    ngModel: [{ type: ContentChild, args: [NgModel, { static: true },] }],
    formControlName: [{ type: ContentChild, args: [FormControlName, { static: true },] }],
    contentElement: [{ type: ViewChild, args: ['contentElement', { static: true },] }],
    optional: [{ type: Input }],
    optionalHelp: [{ type: Input }],
    error: [{ type: Input }],
    extra: [{ type: Input }],
    label: [{ type: Input }],
    col: [{ type: Input }],
    required: [{ type: Input }],
    controlClass: [{ type: Input }],
    line: [{ type: Input }],
    labelWidth: [{ type: Input }],
    id: [{ type: Input }]
};
tslib_1.__decorate([
    InputNumber(null),
    tslib_1.__metadata("design:type", Number)
], SEComponent.prototype, "col", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], SEComponent.prototype, "required", void 0);
tslib_1.__decorate([
    InputBoolean(null),
    tslib_1.__metadata("design:type", Boolean)
], SEComponent.prototype, "line", void 0);
tslib_1.__decorate([
    InputNumber(null),
    tslib_1.__metadata("design:type", Number)
], SEComponent.prototype, "labelWidth", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    SEComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    SEComponent.prototype.status$;
    /**
     * @type {?}
     * @private
     */
    SEComponent.prototype.ngModel;
    /**
     * @type {?}
     * @private
     */
    SEComponent.prototype.formControlName;
    /**
     * @type {?}
     * @private
     */
    SEComponent.prototype.contentElement;
    /**
     * @type {?}
     * @private
     */
    SEComponent.prototype.clsMap;
    /**
     * @type {?}
     * @private
     */
    SEComponent.prototype.inited;
    /**
     * @type {?}
     * @private
     */
    SEComponent.prototype.onceFlag;
    /** @type {?} */
    SEComponent.prototype.invalid;
    /** @type {?} */
    SEComponent.prototype._labelWidth;
    /** @type {?} */
    SEComponent.prototype.optional;
    /** @type {?} */
    SEComponent.prototype.optionalHelp;
    /** @type {?} */
    SEComponent.prototype.error;
    /** @type {?} */
    SEComponent.prototype.extra;
    /** @type {?} */
    SEComponent.prototype.label;
    /** @type {?} */
    SEComponent.prototype.col;
    /** @type {?} */
    SEComponent.prototype.required;
    /** @type {?} */
    SEComponent.prototype.controlClass;
    /** @type {?} */
    SEComponent.prototype.line;
    /** @type {?} */
    SEComponent.prototype.labelWidth;
    /** @type {?} */
    SEComponent.prototype._id;
    /** @type {?} */
    SEComponent.prototype._autoId;
    /**
     * @type {?}
     * @private
     */
    SEComponent.prototype.parent;
    /**
     * @type {?}
     * @private
     */
    SEComponent.prototype.rep;
    /**
     * @type {?}
     * @private
     */
    SEComponent.prototype.ren;
    /**
     * @type {?}
     * @private
     */
    SEComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2VkaXQvIiwic291cmNlcyI6WyJlZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUdMLFFBQVEsRUFDUixTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztNQUU1RCxTQUFTLEdBQUcsSUFBSTs7SUFDbEIsWUFBWSxHQUFHLENBQUM7QUFlcEIsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7O0lBaUR0QixZQUNFLEVBQWMsRUFDYyxNQUE0QixFQUNoRCxHQUFzQixFQUN0QixHQUFjLEVBQ2QsR0FBc0I7UUFIRixXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUNoRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUEvQ3hCLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFDdEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDekIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixnQkFBVyxHQUFrQixJQUFJLENBQUM7UUFVVCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pD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QUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7OEJBQ3RDLFlBQVksU0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzZCQUU5QyxTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3VCQVM1QyxLQUFLOzJCQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7a0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7bUJBQ0wsS0FBSzt5QkFDTCxLQUFLO2lCQUVMLEtBQUs7O0FBTnNCO0lBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7O3dDQUFhO0FBQ2Y7SUFBZixZQUFZLEVBQUU7OzZDQUFrQjtBQUViO0lBQW5CLFlBQVksQ0FBQyxJQUFJLENBQUM7O3lDQUFlO0FBQ2Y7SUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzs7K0NBQW9COzs7Ozs7SUF2Qi9DLHlCQUF3Qjs7Ozs7SUFDeEIsOEJBQThCOzs7OztJQUM5Qiw4QkFBMkU7Ozs7O0lBQzNFLHNDQUNrRDs7Ozs7SUFDbEQscUNBQTJGOzs7OztJQUMzRiw2QkFBOEI7Ozs7O0lBQzlCLDZCQUF1Qjs7Ozs7SUFDdkIsK0JBQXlCOztJQUN6Qiw4QkFBZ0I7O0lBQ2hCLGtDQUFrQzs7SUFJbEMsK0JBQThDOztJQUM5QyxtQ0FBa0Q7O0lBQ2xELDRCQUF1Qjs7SUFDdkIsNEJBQXVCOztJQUN2Qiw0QkFBMkM7O0lBQzNDLDBCQUF3Qzs7SUFDeEMsK0JBQTBDOztJQUMxQyxtQ0FBbUM7O0lBQ25DLDJCQUEyQzs7SUFDM0MsaUNBQStDOztJQVEvQywwQkFBOEI7O0lBQzlCLDhCQUFlOzs7OztJQWtCYiw2QkFBd0Q7Ozs7O0lBQ3hELDBCQUE4Qjs7Ozs7SUFDOUIsMEJBQXNCOzs7OztJQUN0QiwwQkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sTmFtZSwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBSZXNwb25zaXZlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwR2V0LCBpc0VtcHR5LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBTRUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC1jb250YWluZXIuY29tcG9uZW50JztcblxuY29uc3QgcHJlZml4Q2xzID0gYHNlYDtcbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZScsXG4gIGV4cG9ydEFzOiAnc2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLnBhZGRpbmctbGVmdC5weF0nOiAncGFkZGluZ1ZhbHVlJyxcbiAgICAnW3N0eWxlLnBhZGRpbmctcmlnaHQucHhdJzogJ3BhZGRpbmdWYWx1ZScsXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscF0nOiAnc2hvd0VycicsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU0VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHN0YXR1cyQ6IFN1YnNjcmlwdGlvbjtcbiAgQENvbnRlbnRDaGlsZChOZ01vZGVsLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIHJlYWRvbmx5IG5nTW9kZWw6IE5nTW9kZWw7XG4gIEBDb250ZW50Q2hpbGQoRm9ybUNvbnRyb2xOYW1lLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwcml2YXRlIHJlYWRvbmx5IGZvcm1Db250cm9sTmFtZTogRm9ybUNvbnRyb2xOYW1lO1xuICBAVmlld0NoaWxkKCdjb250ZW50RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgcmVhZG9ubHkgY29udGVudEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2xzTWFwOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIG9uY2VGbGFnID0gZmFsc2U7XG4gIGludmFsaWQgPSBmYWxzZTtcbiAgX2xhYmVsV2lkdGg6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgb3B0aW9uYWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBvcHRpb25hbEhlbHA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBlcnJvcjogc3RyaW5nO1xuICBASW5wdXQoKSBleHRyYTogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBjb2w6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlcXVpcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbnRyb2xDbGFzczogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4obnVsbCkgbGluZTogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGxhYmVsV2lkdGg6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgdGhpcy5fYXV0b0lkID0gZmFsc2U7XG4gIH1cblxuICBfaWQgPSBgX3NlLSR7bmV4dFVuaXF1ZUlkKyt9YDtcbiAgX2F1dG9JZCA9IHRydWU7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldCBwYWRkaW5nVmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ3V0dGVyIC8gMjtcbiAgfVxuXG4gIGdldCBzaG93RXJyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgJiYgdGhpcy5wYXJlbnQuc2l6ZSAhPT0gJ2NvbXBhY3QnICYmICEhdGhpcy5lcnJvcjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IG5nQ29udHJvbCgpOiBOZ01vZGVsIHwgRm9ybUNvbnRyb2xOYW1lIHtcbiAgICByZXR1cm4gdGhpcy5uZ01vZGVsIHx8IHRoaXMuZm9ybUNvbnRyb2xOYW1lO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIHBhcmVudDogU0VDb250YWluZXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSByZXA6IFJlc3BvbnNpdmVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHtcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3NlXSBtdXN0IGluY2x1ZGUgJ3NlLWNvbnRhaW5lcicgY29tcG9uZW50YCk7XG4gICAgfVxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB0aGlzIHtcbiAgICBjb25zdCB7IGVsLCByZW4sIGNsc01hcCwgY29sLCBwYXJlbnQsIGNkciwgbGluZSwgbGFiZWxXaWR0aCwgcmVwIH0gPSB0aGlzO1xuICAgIHRoaXMuX2xhYmVsV2lkdGggPSBwYXJlbnQubnpMYXlvdXQgPT09ICdob3Jpem9udGFsJyA/IChsYWJlbFdpZHRoICE9IG51bGwgPyBsYWJlbFdpZHRoIDogcGFyZW50LmxhYmVsV2lkdGgpIDogbnVsbDtcbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLnJlbW92ZUNsYXNzKGVsLCBjbHMpKTtcbiAgICBjbHNNYXAubGVuZ3RoID0gMDtcbiAgICBjb25zdCByZXBDbHMgPSBwYXJlbnQubnpMYXlvdXQgPT09ICdob3Jpem9udGFsJyA/IHJlcC5nZW5DbHMoY29sICE9IG51bGwgPyBjb2wgOiBwYXJlbnQuY29sSW5Db24gfHwgcGFyZW50LmNvbCkgOiBbXTtcbiAgICBjbHNNYXAucHVzaChgYW50LWZvcm0taXRlbWAsIC4uLnJlcENscywgYCR7cHJlZml4Q2xzfV9faXRlbWApO1xuICAgIGlmIChsaW5lIHx8IHBhcmVudC5saW5lKSB7XG4gICAgICBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19saW5lYCk7XG4gICAgfVxuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4uYWRkQ2xhc3MoZWwsIGNscykpO1xuICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGJpbmRNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMubmdDb250cm9sIHx8IHRoaXMuc3RhdHVzJCkgcmV0dXJuO1xuXG4gICAgdGhpcy5zdGF0dXMkID0gdGhpcy5uZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlcyEuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLnVwZGF0ZVN0YXR1cyhyZXMgPT09ICdJTlZBTElEJykpO1xuXG4gICAgaWYgKHRoaXMuX2F1dG9JZCkge1xuICAgICAgY29uc3QgY29udHJvbCA9IGRlZXBHZXQodGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciwgJ19lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChjb250cm9sKSB7XG4gICAgICAgIGNvbnRyb2wuaWQgPSB0aGlzLl9pZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVN0YXR1cyhpbnZhbGlkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sLmRpc2FibGVkIHx8IHRoaXMubmdDb250cm9sLmlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbnZhbGlkID0gKChpbnZhbGlkICYmIHRoaXMub25jZUZsYWcpIHx8ICh0aGlzLm5nQ29udHJvbC5kaXJ0eSAmJiBpbnZhbGlkKSkgYXMgYm9vbGVhbjtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgY2xzID0gYCR7cHJlZml4Q2xzfV9faXRlbS1lbXB0eWA7XG4gICAgaWYgKGlzRW1wdHkoZWwpKSB7XG4gICAgICB0aGlzLnJlbi5hZGRDbGFzcyhlbCwgY2xzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscyk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLm9uY2VGbGFnID0gdGhpcy5wYXJlbnQuZmlyc3RWaXN1YWw7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB0aGlzLnNldENsYXNzKCkuYmluZE1vZGVsKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpLmJpbmRNb2RlbCgpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5vbmNlRmxhZykge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKHRoaXMubmdDb250cm9sLmludmFsaWQhKTtcbiAgICAgICAgdGhpcy5vbmNlRmxhZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RhdHVzJCkge1xuICAgICAgdGhpcy5zdGF0dXMkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=