/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Host, Input, Optional, Renderer2, ViewChild, } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';
import { ResponsiveService } from '@delon/theme';
import { deepGet, isEmpty, InputBoolean, InputNumber } from '@delon/util';
import { SEContainerComponent } from './edit-container.component';
/** @type {?} */
var prefixCls = "se";
/** @type {?} */
var nextUniqueId = 0;
var SEComponent = /** @class */ (function () {
    function SEComponent(el, parent, rep, ren, cdr) {
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
        this._id = "_se-" + nextUniqueId++;
        this._autoId = true;
        if (parent == null) {
            throw new Error("[se] must include 'se-container' component");
        }
        this.el = el.nativeElement;
    }
    Object.defineProperty(SEComponent.prototype, "id", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._id = value;
            this._autoId = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEComponent.prototype, "paddingValue", {
        // #endregion
        get: 
        // #endregion
        /**
         * @return {?}
         */
        function () {
            return this.parent.gutter / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEComponent.prototype, "showErr", {
        get: /**
         * @return {?}
         */
        function () {
            return this.invalid && this.parent.size !== 'compact' && !!this.error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEComponent.prototype, "ngControl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.ngModel || this.formControlName;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    SEComponent.prototype.setClass = /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        var _a = (/** @type {?} */ (this)), el = _a.el, ren = _a.ren, clsMap = _a.clsMap, col = _a.col, parent = _a.parent, cdr = _a.cdr, line = _a.line, labelWidth = _a.labelWidth, rep = _a.rep;
        (/** @type {?} */ (this))._labelWidth = labelWidth != null ? labelWidth : parent.labelWidth;
        clsMap.forEach((/**
         * @param {?} cls
         * @return {?}
         */
        function (cls) { return ren.removeClass(el, cls); }));
        clsMap.length = 0;
        /** @type {?} */
        var repCls = parent.nzLayout === 'horizontal' ? rep.genCls(col != null ? col : parent.colInCon || parent.col) : [];
        clsMap.push.apply(clsMap, tslib_1.__spread(["ant-form-item"], repCls, [prefixCls + "__item"]));
        if (line || parent.line) {
            clsMap.push(prefixCls + "__line");
        }
        clsMap.forEach((/**
         * @param {?} cls
         * @return {?}
         */
        function (cls) { return ren.addClass(el, cls); }));
        cdr.detectChanges();
        return (/** @type {?} */ (this));
    };
    /**
     * @private
     * @return {?}
     */
    SEComponent.prototype.bindModel = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.ngControl || this.status$)
            return;
        this.status$ = (/** @type {?} */ (this.ngControl.statusChanges)).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.updateStatus(res === 'INVALID'); }));
        if (this._autoId) {
            /** @type {?} */
            var control = (/** @type {?} */ (deepGet(this.ngControl.valueAccessor, '_elementRef.nativeElement')));
            if (control) {
                control.id = this._id;
            }
        }
    };
    /**
     * @private
     * @param {?} invalid
     * @return {?}
     */
    SEComponent.prototype.updateStatus = /**
     * @private
     * @param {?} invalid
     * @return {?}
     */
    function (invalid) {
        if (this.ngControl.disabled || this.ngControl.isDisabled) {
            return;
        }
        this.invalid = (/** @type {?} */ (((invalid && this.onceFlag) || (this.ngControl.dirty && invalid))));
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    SEComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.contentElement.nativeElement;
        /** @type {?} */
        var cls = prefixCls + "__item-empty";
        if (isEmpty(el)) {
            this.ren.addClass(el, cls);
        }
        else {
            this.ren.removeClass(el, cls);
        }
    };
    /**
     * @return {?}
     */
    SEComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.checkContent();
    };
    /**
     * @return {?}
     */
    SEComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.onceFlag = this.parent.firstVisual;
        if (this.inited)
            this.setClass().bindModel();
    };
    /**
     * @return {?}
     */
    SEComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setClass().bindModel();
        this.inited = true;
        if (this.onceFlag) {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this.updateStatus((/** @type {?} */ (_this.ngControl.invalid)));
                _this.onceFlag = false;
            }));
        }
    };
    /**
     * @return {?}
     */
    SEComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.status$) {
            this.status$.unsubscribe();
        }
    };
    SEComponent.decorators = [
        { type: Component, args: [{
                    selector: 'se',
                    exportAs: 'se',
                    template: "<div class=\"ant-form-item-label se__label\"\n     [class.se__nolabel]=\"!label\"\n     [style.width.px]=\"_labelWidth\">\n  <label *ngIf=\"label\"\n         [attr.for]=\"_id\"\n         [ngClass]=\"{'ant-form-item-required': required}\">\n    <ng-container *stringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    <span class=\"se__label-optional\">\n      {{ optional }}\n      <nz-tooltip *ngIf=\"optionalHelp\"\n                  [nzTitle]=\"optionalHelp\">\n        <i nz-tooltip\n           nz-icon\n           type=\"question-circle\"></i>\n      </nz-tooltip>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control-wrapper se__control\">\n  <div class=\"ant-form-item-control {{controlClass}}\"\n       [class.has-error]=\"invalid\">\n    <span (cdkObserveContent)=\"checkContent()\" #contentElement><ng-content></ng-content></span>\n    <se-error *ngIf=\"showErr\">{{error}}</se-error>\n    <div *ngIf=\"extra\"\n         class=\"ant-form-extra\">{{extra}}</div>\n  </div>\n</div>\n",
                    host: {
                        '[style.padding-left.px]': 'paddingValue',
                        '[style.padding-right.px]': 'paddingValue',
                        '[class.ant-form-item-with-help]': 'showErr',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SEComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: SEContainerComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: ResponsiveService },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    SEComponent.propDecorators = {
        ngModel: [{ type: ContentChild, args: [NgModel,] }],
        formControlName: [{ type: ContentChild, args: [FormControlName,] }],
        contentElement: [{ type: ViewChild, args: ['contentElement',] }],
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
    return SEComponent;
}());
export { SEComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2VkaXQvIiwic291cmNlcyI6WyJlZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsRUFFVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUcxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7SUFFNUQsU0FBUyxHQUFHLElBQUk7O0lBQ2xCLFlBQVksR0FBRyxDQUFDO0FBRXBCO0lBMkRFLHFCQUNFLEVBQWMsRUFDYyxNQUE0QixFQUNoRCxHQUFzQixFQUN0QixHQUFjLEVBQ2QsR0FBc0I7UUFIRixXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUNoRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUEvQ3hCLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFDdEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDekIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixnQkFBVyxHQUFrQixJQUFJLENBQUM7UUFVVCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBVW5DLFFBQUcsR0FB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WSxTQUFDLE9BQU87a0NBQ3BCLFlBQVksU0FBQyxlQUFlO2lDQUM1QixTQUFTLFNBQUMsZ0JBQWdCOzJCQVMxQixLQUFLOytCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzsyQkFDTCxLQUFLOytCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLO3FCQUVMLEtBQUs7O0lBTnNCO1FBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7OzRDQUFhO0lBQ2Y7UUFBZixZQUFZLEVBQUU7O2lEQUFrQjtJQUViO1FBQW5CLFlBQVksQ0FBQyxJQUFJLENBQUM7OzZDQUFlO0lBQ2Y7UUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzs7bURBQW9CO0lBOEdqRCxrQkFBQztDQUFBLEFBaEpELElBZ0pDO1NBcklZLFdBQVc7Ozs7OztJQUN0Qix5QkFBd0I7Ozs7O0lBQ3hCLDhCQUE4Qjs7Ozs7SUFDOUIsOEJBQXlEOzs7OztJQUN6RCxzQ0FBaUY7Ozs7O0lBQ2pGLHFDQUF5RTs7Ozs7SUFDekUsNkJBQThCOzs7OztJQUM5Qiw2QkFBdUI7Ozs7O0lBQ3ZCLCtCQUF5Qjs7SUFDekIsOEJBQWdCOztJQUNoQixrQ0FBa0M7O0lBSWxDLCtCQUEwQjs7SUFDMUIsbUNBQThCOztJQUM5Qiw0QkFBdUI7O0lBQ3ZCLDRCQUF1Qjs7SUFDdkIsNEJBQTJDOztJQUMzQywwQkFBd0M7O0lBQ3hDLCtCQUEwQzs7SUFDMUMsbUNBQW1DOztJQUNuQywyQkFBMkM7O0lBQzNDLGlDQUErQzs7SUFRL0MsMEJBQThCOztJQUM5Qiw4QkFBZTs7Ozs7SUFrQmIsNkJBQXdEOzs7OztJQUN4RCwwQkFBOEI7Ozs7O0lBQzlCLDBCQUFzQjs7Ozs7SUFDdEIsMEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sTmFtZSwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBSZXNwb25zaXZlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwR2V0LCBpc0VtcHR5LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBTRUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC1jb250YWluZXIuY29tcG9uZW50JztcblxuY29uc3QgcHJlZml4Q2xzID0gYHNlYDtcbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZScsXG4gIGV4cG9ydEFzOiAnc2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLnBhZGRpbmctbGVmdC5weF0nOiAncGFkZGluZ1ZhbHVlJyxcbiAgICAnW3N0eWxlLnBhZGRpbmctcmlnaHQucHhdJzogJ3BhZGRpbmdWYWx1ZScsXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscF0nOiAnc2hvd0VycicsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTRUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgc3RhdHVzJDogU3Vic2NyaXB0aW9uO1xuICBAQ29udGVudENoaWxkKE5nTW9kZWwpIHByaXZhdGUgcmVhZG9ubHkgbmdNb2RlbDogTmdNb2RlbDtcbiAgQENvbnRlbnRDaGlsZChGb3JtQ29udHJvbE5hbWUpIHByaXZhdGUgcmVhZG9ubHkgZm9ybUNvbnRyb2xOYW1lOiBGb3JtQ29udHJvbE5hbWU7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRFbGVtZW50JykgcHJpdmF0ZSByZWFkb25seSBjb250ZW50RWxlbWVudDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBjbHNNYXA6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgb25jZUZsYWcgPSBmYWxzZTtcbiAgaW52YWxpZCA9IGZhbHNlO1xuICBfbGFiZWxXaWR0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBvcHRpb25hbDogc3RyaW5nO1xuICBASW5wdXQoKSBvcHRpb25hbEhlbHA6IHN0cmluZztcbiAgQElucHV0KCkgZXJyb3I6IHN0cmluZztcbiAgQElucHV0KCkgZXh0cmE6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXF1aXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBjb250cm9sQ2xhc3M6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKG51bGwpIGxpbmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBsYWJlbFdpZHRoOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICAgIHRoaXMuX2F1dG9JZCA9IGZhbHNlO1xuICB9XG5cbiAgX2lkID0gYF9zZS0ke25leHRVbmlxdWVJZCsrfWA7XG4gIF9hdXRvSWQgPSB0cnVlO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXQgcGFkZGluZ1ZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lmd1dHRlciAvIDI7XG4gIH1cblxuICBnZXQgc2hvd0VycigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkICYmIHRoaXMucGFyZW50LnNpemUgIT09ICdjb21wYWN0JyAmJiAhIXRoaXMuZXJyb3I7XG4gIH1cblxuICBwcml2YXRlIGdldCBuZ0NvbnRyb2woKTogTmdNb2RlbCB8IEZvcm1Db250cm9sTmFtZSB7XG4gICAgcmV0dXJuIHRoaXMubmdNb2RlbCB8fCB0aGlzLmZvcm1Db250cm9sTmFtZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBwYXJlbnQ6IFNFQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgcmVwOiBSZXNwb25zaXZlU2VydmljZSxcbiAgICBwcml2YXRlIHJlbjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzZV0gbXVzdCBpbmNsdWRlICdzZS1jb250YWluZXInIGNvbXBvbmVudGApO1xuICAgIH1cbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdGhpcyB7XG4gICAgY29uc3QgeyBlbCwgcmVuLCBjbHNNYXAsIGNvbCwgcGFyZW50LCBjZHIsIGxpbmUsIGxhYmVsV2lkdGgsIHJlcCB9ID0gdGhpcztcbiAgICB0aGlzLl9sYWJlbFdpZHRoID0gbGFiZWxXaWR0aCAhPSBudWxsID8gbGFiZWxXaWR0aCA6IHBhcmVudC5sYWJlbFdpZHRoO1xuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscykpO1xuICAgIGNsc01hcC5sZW5ndGggPSAwO1xuICAgIGNvbnN0IHJlcENscyA9XG4gICAgICBwYXJlbnQubnpMYXlvdXQgPT09ICdob3Jpem9udGFsJyA/IHJlcC5nZW5DbHMoY29sICE9IG51bGwgPyBjb2wgOiBwYXJlbnQuY29sSW5Db24gfHwgcGFyZW50LmNvbCkgOiBbXTtcbiAgICBjbHNNYXAucHVzaChgYW50LWZvcm0taXRlbWAsIC4uLnJlcENscywgYCR7cHJlZml4Q2xzfV9faXRlbWApO1xuICAgIGlmIChsaW5lIHx8IHBhcmVudC5saW5lKSB7XG4gICAgICBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19saW5lYCk7XG4gICAgfVxuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4uYWRkQ2xhc3MoZWwsIGNscykpO1xuICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGJpbmRNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMubmdDb250cm9sIHx8IHRoaXMuc3RhdHVzJCkgcmV0dXJuO1xuXG4gICAgdGhpcy5zdGF0dXMkID0gdGhpcy5uZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlcyEuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLnVwZGF0ZVN0YXR1cyhyZXMgPT09ICdJTlZBTElEJykpO1xuXG4gICAgaWYgKHRoaXMuX2F1dG9JZCkge1xuICAgICAgY29uc3QgY29udHJvbCA9IGRlZXBHZXQodGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciwgJ19lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChjb250cm9sKSB7XG4gICAgICAgIGNvbnRyb2wuaWQgPSB0aGlzLl9pZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVN0YXR1cyhpbnZhbGlkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sLmRpc2FibGVkIHx8IHRoaXMubmdDb250cm9sLmlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbnZhbGlkID0gKChpbnZhbGlkICYmIHRoaXMub25jZUZsYWcpIHx8ICh0aGlzLm5nQ29udHJvbC5kaXJ0eSAmJiBpbnZhbGlkKSkgYXMgYm9vbGVhbjtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgY2xzID0gYCR7cHJlZml4Q2xzfV9faXRlbS1lbXB0eWA7XG4gICAgaWYgKGlzRW1wdHkoZWwpKSB7XG4gICAgICB0aGlzLnJlbi5hZGRDbGFzcyhlbCwgY2xzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscyk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLm9uY2VGbGFnID0gdGhpcy5wYXJlbnQuZmlyc3RWaXN1YWw7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB0aGlzLnNldENsYXNzKCkuYmluZE1vZGVsKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpLmJpbmRNb2RlbCgpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5vbmNlRmxhZykge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKHRoaXMubmdDb250cm9sLmludmFsaWQhKTtcbiAgICAgICAgdGhpcy5vbmNlRmxhZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RhdHVzJCkge1xuICAgICAgdGhpcy5zdGF0dXMkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=