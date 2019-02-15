/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Host, HostBinding, Input, Optional, Renderer2, } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';
import { ResponsiveService } from '@delon/theme';
import { deepGet, InputBoolean, InputNumber } from '@delon/util';
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
        this.labelWidth = null;
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
    get paddingLeft() {
        return this.parent.gutter / 2;
    }
    /**
     * @return {?}
     */
    get paddingRight() {
        return this.parent.gutter / 2;
    }
    /**
     * @return {?}
     */
    get showErr() {
        return this.invalid && this.parent.size !== 'compact' && !!this.error;
    }
    /**
     * @return {?}
     */
    get ngControl() {
        return this.ngModel || this.formControlName;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    setClass() {
        const { el, ren, clsMap, col, parent, cdr } = (/** @type {?} */ (this));
        (/** @type {?} */ (this)).labelWidth = parent.labelWidth;
        clsMap.forEach(cls => ren.removeClass(el, cls));
        clsMap.length = 0;
        /** @type {?} */
        const repCls = parent.nzLayout === 'horizontal'
            ? (/** @type {?} */ (this)).rep.genCls(col != null ? col : parent.colInCon || parent.col)
            : [];
        clsMap.push(`ant-form-item`, ...repCls, `${prefixCls}__item`);
        if ((/** @type {?} */ (this)).line || parent.line) {
            clsMap.push(`${prefixCls}__line`);
        }
        clsMap.forEach(cls => ren.addClass(el, cls));
        cdr.detectChanges();
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    bindModel() {
        if (!this.ngControl || this.status$)
            return;
        this.status$ = this.ngControl.statusChanges.subscribe(res => this.updateStatus(res === 'INVALID'));
        if (this._autoId) {
            /** @type {?} */
            const control = (/** @type {?} */ (deepGet(this.ngControl.valueAccessor, '_elementRef.nativeElement')));
            if (control) {
                control.id = this._id;
            }
        }
    }
    /**
     * @param {?} invalid
     * @return {?}
     */
    updateStatus(invalid) {
        if (this.ngControl.disabled || this.ngControl.isDisabled) {
            return;
        }
        this.invalid = (invalid && this.onceFlag) || (this.ngControl.dirty && invalid);
        this.cdr.detectChanges();
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
            Promise.resolve().then(() => {
                this.updateStatus(this.ngControl.invalid);
                this.onceFlag = false;
            });
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
                template: "<div class=\"ant-form-item-label se__label\"\n     [class.se__nolabel]=\"!label\"\n     [style.width.px]=\"labelWidth\">\n  <label *ngIf=\"label\"\n         [attr.for]=\"_id\"\n         [ngClass]=\"{'ant-form-item-required': required}\">\n    <ng-container *stringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    <span class=\"se__label-optional\">\n      {{ optional }}\n      <nz-tooltip *ngIf=\"optionalHelp\"\n                  [nzTitle]=\"optionalHelp\">\n        <i nz-tooltip\n           nz-icon\n           type=\"question-circle\"></i>\n      </nz-tooltip>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control-wrapper se__control\">\n  <div class=\"ant-form-item-control {{controlClass}}\"\n       [class.has-error]=\"invalid\">\n    <ng-content></ng-content>\n    <se-error *ngIf=\"showErr\">{{error}}</se-error>\n    <div *ngIf=\"extra\"\n         class=\"ant-form-extra\">{{extra}}</div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
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
    ngModel: [{ type: ContentChild, args: [NgModel,] }],
    formControlName: [{ type: ContentChild, args: [FormControlName,] }],
    optional: [{ type: Input }],
    optionalHelp: [{ type: Input }],
    error: [{ type: Input }],
    extra: [{ type: Input }],
    label: [{ type: Input }],
    col: [{ type: Input }],
    required: [{ type: Input }],
    controlClass: [{ type: Input }],
    line: [{ type: Input }],
    id: [{ type: Input }],
    paddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }],
    paddingRight: [{ type: HostBinding, args: ['style.padding-right.px',] }],
    showErr: [{ type: HostBinding, args: ['class.ant-form-item-with-help',] }]
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
if (false) {
    /** @type {?} */
    SEComponent.prototype.el;
    /** @type {?} */
    SEComponent.prototype.status$;
    /** @type {?} */
    SEComponent.prototype.ngModel;
    /** @type {?} */
    SEComponent.prototype.formControlName;
    /** @type {?} */
    SEComponent.prototype.clsMap;
    /** @type {?} */
    SEComponent.prototype.inited;
    /** @type {?} */
    SEComponent.prototype.onceFlag;
    /** @type {?} */
    SEComponent.prototype.invalid;
    /** @type {?} */
    SEComponent.prototype.labelWidth;
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
    SEComponent.prototype._id;
    /** @type {?} */
    SEComponent.prototype._autoId;
    /** @type {?} */
    SEComponent.prototype.parent;
    /** @type {?} */
    SEComponent.prototype.rep;
    /** @type {?} */
    SEComponent.prototype.ren;
    /** @type {?} */
    SEComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2VkaXQvIiwic291cmNlcyI6WyJlZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixXQUFXLEVBQ1gsS0FBSyxFQUdMLFFBQVEsRUFDUixTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUcxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztNQUU1RCxTQUFTLEdBQUcsSUFBSTs7SUFDbEIsWUFBWSxHQUFHLENBQUM7QUFPcEIsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7O0lBcUR0QixZQUNFLEVBQWMsRUFDYyxNQUE0QixFQUNoRCxHQUFzQixFQUN0QixHQUFjLEVBQ2QsR0FBc0I7UUFIRixXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUNoRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFyRHhCLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFDdEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDekIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBVU8sYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQyxpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQVNuQyxRQUFHLEdBQUcsT0FBTyxZQUFZLEVBQUUsRUFBRSxDQUFDO1FBQzlCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUE4QmIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUM3QixDQUFDOzs7OztJQXpDRCxJQUNJLEVBQUUsQ0FBQyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBT0QsSUFDSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELElBQ0ksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3hFLENBQUM7Ozs7SUFFRCxJQUFZLFNBQVM7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBZU8sUUFBUTtjQUNSLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxtQkFBQSxJQUFJLEVBQUE7UUFDbEQsbUJBQUEsSUFBSSxFQUFBLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDcEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O2NBQ1osTUFBTSxHQUNWLE1BQU0sQ0FBQyxRQUFRLEtBQUssWUFBWTtZQUM5QixDQUFDLENBQUMsbUJBQUEsSUFBSSxFQUFBLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNwRSxDQUFDLENBQUMsRUFBRTtRQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsTUFBTSxFQUFFLEdBQUcsU0FBUyxRQUFRLENBQUMsQ0FBQztRQUM5RCxJQUFJLG1CQUFBLElBQUksRUFBQSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLFFBQVEsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3BCLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7O0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUU1QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FDckMsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTs7a0JBQ1YsT0FBTyxHQUFHLG1CQUFBLE9BQU8sQ0FDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQzVCLDJCQUEyQixDQUM1QixFQUFlO1lBQ2hCLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUN2QjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxZQUFZLENBQUMsT0FBZ0I7UUFDbkMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUN4RCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7O1lBdklGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsSUFBSTtnQkFDZCwyN0JBQW9DO2dCQUNwQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQXpCQyxVQUFVO1lBZ0JILG9CQUFvQix1QkFpRXhCLFFBQVEsWUFBSSxJQUFJO1lBcEVaLGlCQUFpQjtZQU54QixTQUFTO1lBVlQsaUJBQWlCOzs7c0JBZ0NoQixZQUFZLFNBQUMsT0FBTzs4QkFDcEIsWUFBWSxTQUFDLGVBQWU7dUJBUzVCLEtBQUs7MkJBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSztrQkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzttQkFDTCxLQUFLO2lCQUVMLEtBQUs7MEJBV0wsV0FBVyxTQUFDLHVCQUF1QjsyQkFLbkMsV0FBVyxTQUFDLHdCQUF3QjtzQkFLcEMsV0FBVyxTQUFDLCtCQUErQjs7QUExQmhCO0lBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7O3dDQUFhO0FBQ2Y7SUFBZixZQUFZLEVBQUU7OzZDQUFrQjtBQUViO0lBQW5CLFlBQVksQ0FBQyxJQUFJLENBQUM7O3lDQUFlOzs7SUFwQjNDLHlCQUF3Qjs7SUFDeEIsOEJBQThCOztJQUM5Qiw4QkFBeUQ7O0lBQ3pELHNDQUFpRjs7SUFDakYsNkJBQThCOztJQUM5Qiw2QkFBdUI7O0lBQ3ZCLCtCQUF5Qjs7SUFDekIsOEJBQWdCOztJQUNoQixpQ0FBa0I7O0lBSWxCLCtCQUEwQjs7SUFDMUIsbUNBQThCOztJQUM5Qiw0QkFBdUI7O0lBQ3ZCLDRCQUF1Qjs7SUFDdkIsNEJBQTJDOztJQUMzQywwQkFBd0M7O0lBQ3hDLCtCQUEwQzs7SUFDMUMsbUNBQW1DOztJQUNuQywyQkFBMkM7O0lBUTNDLDBCQUE4Qjs7SUFDOUIsOEJBQWU7O0lBeUJiLDZCQUF3RDs7SUFDeEQsMEJBQThCOztJQUM5QiwwQkFBc0I7O0lBQ3RCLDBCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3QsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sTmFtZSwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBSZXNwb25zaXZlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwR2V0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBTRUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC1jb250YWluZXIuY29tcG9uZW50JztcblxuY29uc3QgcHJlZml4Q2xzID0gYHNlYDtcbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNFQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBzdGF0dXMkOiBTdWJzY3JpcHRpb247XG4gIEBDb250ZW50Q2hpbGQoTmdNb2RlbCkgcHJpdmF0ZSByZWFkb25seSBuZ01vZGVsOiBOZ01vZGVsO1xuICBAQ29udGVudENoaWxkKEZvcm1Db250cm9sTmFtZSkgcHJpdmF0ZSByZWFkb25seSBmb3JtQ29udHJvbE5hbWU6IEZvcm1Db250cm9sTmFtZTtcbiAgcHJpdmF0ZSBjbHNNYXA6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgb25jZUZsYWcgPSBmYWxzZTtcbiAgaW52YWxpZCA9IGZhbHNlO1xuICBsYWJlbFdpZHRoID0gbnVsbDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIG9wdGlvbmFsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG9wdGlvbmFsSGVscDogc3RyaW5nO1xuICBASW5wdXQoKSBlcnJvcjogc3RyaW5nO1xuICBASW5wdXQoKSBleHRyYTogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBjb2w6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlcXVpcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbnRyb2xDbGFzczogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4obnVsbCkgbGluZTogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgdGhpcy5fYXV0b0lkID0gZmFsc2U7XG4gIH1cblxuICBfaWQgPSBgX3NlLSR7bmV4dFVuaXF1ZUlkKyt9YDtcbiAgX2F1dG9JZCA9IHRydWU7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1sZWZ0LnB4JylcbiAgZ2V0IHBhZGRpbmdMZWZ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lmd1dHRlciAvIDI7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctcmlnaHQucHgnKVxuICBnZXQgcGFkZGluZ1JpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lmd1dHRlciAvIDI7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1mb3JtLWl0ZW0td2l0aC1oZWxwJylcbiAgZ2V0IHNob3dFcnIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCAmJiB0aGlzLnBhcmVudC5zaXplICE9PSAnY29tcGFjdCcgJiYgISF0aGlzLmVycm9yO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgbmdDb250cm9sKCk6IE5nTW9kZWwgfCBGb3JtQ29udHJvbE5hbWUge1xuICAgIHJldHVybiB0aGlzLm5nTW9kZWwgfHwgdGhpcy5mb3JtQ29udHJvbE5hbWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgcGFyZW50OiBTRUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHJlcDogUmVzcG9uc2l2ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW46IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc2VdIG11c3QgaW5jbHVkZSAnc2UtY29udGFpbmVyJyBjb21wb25lbnRgKTtcbiAgICB9XG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCk6IHRoaXMge1xuICAgIGNvbnN0IHsgZWwsIHJlbiwgY2xzTWFwLCBjb2wsIHBhcmVudCwgY2RyIH0gPSB0aGlzO1xuICAgIHRoaXMubGFiZWxXaWR0aCA9IHBhcmVudC5sYWJlbFdpZHRoO1xuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscykpO1xuICAgIGNsc01hcC5sZW5ndGggPSAwO1xuICAgIGNvbnN0IHJlcENscyA9XG4gICAgICBwYXJlbnQubnpMYXlvdXQgPT09ICdob3Jpem9udGFsJ1xuICAgICAgICA/IHRoaXMucmVwLmdlbkNscyhjb2wgIT0gbnVsbCA/IGNvbCA6IHBhcmVudC5jb2xJbkNvbiB8fCBwYXJlbnQuY29sKVxuICAgICAgICA6IFtdO1xuICAgIGNsc01hcC5wdXNoKGBhbnQtZm9ybS1pdGVtYCwgLi4ucmVwQ2xzLCBgJHtwcmVmaXhDbHN9X19pdGVtYCk7XG4gICAgaWYgKHRoaXMubGluZSB8fCBwYXJlbnQubGluZSkge1xuICAgICAgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9fbGluZWApO1xuICAgIH1cbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLmFkZENsYXNzKGVsLCBjbHMpKTtcbiAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBiaW5kTW9kZWwoKSB7XG4gICAgaWYgKCF0aGlzLm5nQ29udHJvbCB8fCB0aGlzLnN0YXR1cyQpIHJldHVybjtcblxuICAgIHRoaXMuc3RhdHVzJCA9IHRoaXMubmdDb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHJlcyA9PlxuICAgICAgdGhpcy51cGRhdGVTdGF0dXMocmVzID09PSAnSU5WQUxJRCcpLFxuICAgICk7XG5cbiAgICBpZiAodGhpcy5fYXV0b0lkKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gZGVlcEdldChcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvcixcbiAgICAgICAgJ19lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQnLFxuICAgICAgKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChjb250cm9sKSB7XG4gICAgICAgIGNvbnRyb2wuaWQgPSB0aGlzLl9pZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVN0YXR1cyhpbnZhbGlkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sLmRpc2FibGVkIHx8IHRoaXMubmdDb250cm9sLmlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbnZhbGlkID0gKGludmFsaWQgJiYgdGhpcy5vbmNlRmxhZykgfHwgKHRoaXMubmdDb250cm9sLmRpcnR5ICYmIGludmFsaWQpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMub25jZUZsYWcgPSB0aGlzLnBhcmVudC5maXJzdFZpc3VhbDtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHRoaXMuc2V0Q2xhc3MoKS5iaW5kTW9kZWwoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCkuYmluZE1vZGVsKCk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLm9uY2VGbGFnKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0dXModGhpcy5uZ0NvbnRyb2wuaW52YWxpZCk7XG4gICAgICAgIHRoaXMub25jZUZsYWcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXR1cyQpIHtcbiAgICAgIHRoaXMuc3RhdHVzJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19