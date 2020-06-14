/**
 * @fileoverview added by tsickle
 * Generated from: se.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __read, __spread } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Host, Input, Optional, Renderer2, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { FormControlName, NgModel, RequiredValidator } from '@angular/forms';
import { ResponsiveService } from '@delon/theme';
import { InputBoolean, InputNumber, isEmpty } from '@delon/util';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { SEContainerComponent } from './se-container.component';
/** @type {?} */
var prefixCls = "se";
/** @type {?} */
var nextUniqueId = 0;
var SEComponent = /** @class */ (function () {
    function SEComponent(el, parent, rep, ren, cdr) {
        var _this = this;
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
        this._id = "_se-" + ++nextUniqueId;
        this._autoId = true;
        if (parent == null) {
            throw new Error("[se] must include 'se-container' component");
        }
        this.el = el.nativeElement;
        parent.errorNotify
            .pipe(takeUntil(this.unsubscribe$), filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return _this.inited && _this.ngControl != null && _this.ngControl.name === w.name; })))
            .subscribe((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            _this.error = item.error;
            _this.updateStatus((/** @type {?} */ (_this.ngControl.invalid)));
        }));
    }
    Object.defineProperty(SEComponent.prototype, "error", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.errorData = typeof val === 'string' || val instanceof TemplateRef ? { '': val } : val;
        },
        enumerable: true,
        configurable: true
    });
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
            return this.invalid && !!this._error && !this.compact;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEComponent.prototype, "compact", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent.size === 'compact';
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
        (/** @type {?} */ (this))._labelWidth = parent.nzLayout === 'horizontal' ? (labelWidth != null ? labelWidth : parent.labelWidth) : null;
        clsMap.forEach((/**
         * @param {?} cls
         * @return {?}
         */
        function (cls) { return ren.removeClass(el, cls); }));
        clsMap.length = 0;
        /** @type {?} */
        var repCls = parent.nzLayout === 'horizontal' ? rep.genCls(col != null ? col : parent.colInCon || parent.col) : [];
        clsMap.push.apply(clsMap, __spread(["ant-form-item"], repCls, [prefixCls + "__item"]));
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
        var _a, _b, _c;
        if (!this.ngControl || this.isBindModel)
            return;
        this.isBindModel = true;
        (/** @type {?} */ (this.ngControl.statusChanges)).pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.updateStatus(res === 'INVALID'); }));
        if (this._autoId) {
            /** @type {?} */
            var control = (/** @type {?} */ ((_b = (_a = ((/** @type {?} */ (this.ngControl.valueAccessor)))) === null || _a === void 0 ? void 0 : _a._elementRef) === null || _b === void 0 ? void 0 : _b.nativeElement));
            if (control && !control.id) {
                control.id = this._id;
            }
        }
        // auto required
        if (this.required !== true) {
            /** @type {?} */
            var rawValidators = (/** @type {?} */ ((_c = ((/** @type {?} */ (this.ngControl)))) === null || _c === void 0 ? void 0 : _c._rawValidators));
            this.required = rawValidators.find((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w instanceof RequiredValidator; })) != null;
            this.cdr.detectChanges();
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
        this.invalid = !this.onceFlag && invalid && this.parent.ingoreDirty === false && !this.ngControl.dirty ? false : invalid;
        /** @type {?} */
        var errors = this.ngControl.errors;
        if (errors != null && Object.keys(errors).length > 0) {
            /** @type {?} */
            var key = Object.keys(errors)[0] || '';
            /** @type {?} */
            var err = this.errorData[key];
            this._error = err != null ? err : this.errorData[''] || '';
        }
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
        if (this.inited) {
            this.setClass().bindModel();
        }
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
        var unsubscribe$ = this.unsubscribe$;
        unsubscribe$.next();
        unsubscribe$.complete();
    };
    SEComponent.decorators = [
        { type: Component, args: [{
                    selector: 'se',
                    exportAs: 'se',
                    template: "<div class=\"ant-form-item-label\" [class.se__nolabel]=\"!label\" [style.width.px]=\"_labelWidth\">\n  <label *ngIf=\"label\" [attr.for]=\"_id\" class=\"se__label\" [ngClass]=\"{ 'ant-form-item-required': required }\">\n    <span class=\"se__label-text\">\n      <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    <span *ngIf=\"optional || optionalHelp\" class=\"se__label-optional\" [class.se__label-optional-no-text]=\"!optional\">\n      <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n      <i *ngIf=\"optionalHelp\" nz-tooltip [nzTooltipTitle]=\"optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control se__control\">\n  <div class=\"ant-form-item-control-input {{ controlClass }}\">\n    <div class=\"ant-form-item-control-input-content\" (cdkObserveContent)=\"checkContent()\" #contentElement>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div class=\"ant-form-item-explain\" *ngIf=\"showErr\">\n    <div @helpMotion>\n      <ng-container *nzStringTemplateOutlet=\"_error\">{{ _error }}</ng-container>\n    </div>\n  </div>\n  <div *ngIf=\"extra && !compact\" class=\"ant-form-item-extra\">\n    <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n  </div>\n</div>\n",
                    host: {
                        '[style.padding-left.px]': 'paddingValue',
                        '[style.padding-right.px]': 'paddingValue',
                        '[class.ant-form-item-has-error]': 'invalid',
                        '[class.ant-form-item-with-help]': 'showErr',
                    },
                    preserveWhitespaces: false,
                    animations: [helpMotion],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
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
    SEComponent.prototype.unsubscribe$;
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
    /**
     * @type {?}
     * @private
     */
    SEComponent.prototype.errorData;
    /**
     * @type {?}
     * @private
     */
    SEComponent.prototype.isBindModel;
    /** @type {?} */
    SEComponent.prototype.invalid;
    /** @type {?} */
    SEComponent.prototype._labelWidth;
    /** @type {?} */
    SEComponent.prototype._error;
    /** @type {?} */
    SEComponent.prototype.optional;
    /** @type {?} */
    SEComponent.prototype.optionalHelp;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zZS8iLCJzb3VyY2VzIjpbInNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUdMLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBRzFELFNBQVMsR0FBRyxJQUFJOztJQUNsQixZQUFZLEdBQUcsQ0FBQztBQUVwQjtJQTBFRSxxQkFDRSxFQUFjLEVBQ2MsTUFBNEIsRUFDaEQsR0FBc0IsRUFDdEIsR0FBYyxFQUNkLEdBQXNCO1FBTGhDLGlCQW9CQztRQWxCNkIsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDaEQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUNkLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBOUR4QixpQkFBWSxHQUFHLElBQUksT0FB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Q25DLDJCQUEyQzs7SUFDM0MsaUNBQStDOztJQVEvQywwQkFBOEI7O0lBQzlCLDhCQUFlOzs7OztJQXNCYiw2QkFBd0Q7Ozs7O0lBQ3hELDBCQUE4Qjs7Ozs7SUFDOUIsMEJBQXNCOzs7OztJQUN0QiwwQkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sTmFtZSwgTmdNb2RlbCwgUmVxdWlyZWRWYWxpZGF0b3IsIFZhbGlkYXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJlc3BvbnNpdmVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIGlzRW1wdHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBoZWxwTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTRUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vc2UtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRUVycm9yLCBTRUVycm9yVHlwZSB9IGZyb20gJy4vc2UudHlwZXMnO1xuXG5jb25zdCBwcmVmaXhDbHMgPSBgc2VgO1xubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlJyxcbiAgZXhwb3J0QXM6ICdzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLnBhZGRpbmctbGVmdC5weF0nOiAncGFkZGluZ1ZhbHVlJyxcbiAgICAnW3N0eWxlLnBhZGRpbmctcmlnaHQucHhdJzogJ3BhZGRpbmdWYWx1ZScsXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLWhhcy1lcnJvcl0nOiAnaW52YWxpZCcsXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscF0nOiAnc2hvd0VycicsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zOiBbaGVscE1vdGlvbl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTRUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgQENvbnRlbnRDaGlsZChOZ01vZGVsLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIHJlYWRvbmx5IG5nTW9kZWw6IE5nTW9kZWw7XG4gIEBDb250ZW50Q2hpbGQoRm9ybUNvbnRyb2xOYW1lLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwcml2YXRlIHJlYWRvbmx5IGZvcm1Db250cm9sTmFtZTogRm9ybUNvbnRyb2xOYW1lO1xuICBAVmlld0NoaWxkKCdjb250ZW50RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgcmVhZG9ubHkgY29udGVudEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2xzTWFwOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIG9uY2VGbGFnID0gZmFsc2U7XG4gIHByaXZhdGUgZXJyb3JEYXRhOiBTRUVycm9yID0ge307XG4gIHByaXZhdGUgaXNCaW5kTW9kZWwgPSBmYWxzZTtcbiAgaW52YWxpZCA9IGZhbHNlO1xuICBfbGFiZWxXaWR0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIF9lcnJvcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBvcHRpb25hbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG9wdGlvbmFsSGVscDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpXG4gIHNldCBlcnJvcih2YWw6IFNFRXJyb3JUeXBlKSB7XG4gICAgdGhpcy5lcnJvckRhdGEgPSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyB8fCB2YWwgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZiA/IHsgJyc6IHZhbCB9IDogdmFsO1xuICB9XG4gIEBJbnB1dCgpIGV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXF1aXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBjb250cm9sQ2xhc3M6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKG51bGwpIGxpbmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBsYWJlbFdpZHRoOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICAgIHRoaXMuX2F1dG9JZCA9IGZhbHNlO1xuICB9XG5cbiAgX2lkID0gYF9zZS0keysrbmV4dFVuaXF1ZUlkfWA7XG4gIF9hdXRvSWQgPSB0cnVlO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXQgcGFkZGluZ1ZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lmd1dHRlciAvIDI7XG4gIH1cblxuICBnZXQgc2hvd0VycigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkICYmICEhdGhpcy5fZXJyb3IgJiYgIXRoaXMuY29tcGFjdDtcbiAgfVxuXG4gIGdldCBjb21wYWN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5zaXplID09PSAnY29tcGFjdCc7XG4gIH1cblxuICBwcml2YXRlIGdldCBuZ0NvbnRyb2woKTogTmdNb2RlbCB8IEZvcm1Db250cm9sTmFtZSB7XG4gICAgcmV0dXJuIHRoaXMubmdNb2RlbCB8fCB0aGlzLmZvcm1Db250cm9sTmFtZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBwYXJlbnQ6IFNFQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgcmVwOiBSZXNwb25zaXZlU2VydmljZSxcbiAgICBwcml2YXRlIHJlbjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzZV0gbXVzdCBpbmNsdWRlICdzZS1jb250YWluZXInIGNvbXBvbmVudGApO1xuICAgIH1cbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICBwYXJlbnQuZXJyb3JOb3RpZnlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpLFxuICAgICAgICBmaWx0ZXIodyA9PiB0aGlzLmluaXRlZCAmJiB0aGlzLm5nQ29udHJvbCAhPSBudWxsICYmIHRoaXMubmdDb250cm9sLm5hbWUgPT09IHcubmFtZSksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgICB0aGlzLmVycm9yID0gaXRlbS5lcnJvcjtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0dXModGhpcy5uZ0NvbnRyb2wuaW52YWxpZCEpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCk6IHRoaXMge1xuICAgIGNvbnN0IHsgZWwsIHJlbiwgY2xzTWFwLCBjb2wsIHBhcmVudCwgY2RyLCBsaW5lLCBsYWJlbFdpZHRoLCByZXAgfSA9IHRoaXM7XG4gICAgdGhpcy5fbGFiZWxXaWR0aCA9IHBhcmVudC5uekxheW91dCA9PT0gJ2hvcml6b250YWwnID8gKGxhYmVsV2lkdGggIT0gbnVsbCA/IGxhYmVsV2lkdGggOiBwYXJlbnQubGFiZWxXaWR0aCkgOiBudWxsO1xuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscykpO1xuICAgIGNsc01hcC5sZW5ndGggPSAwO1xuICAgIGNvbnN0IHJlcENscyA9IHBhcmVudC5uekxheW91dCA9PT0gJ2hvcml6b250YWwnID8gcmVwLmdlbkNscyhjb2wgIT0gbnVsbCA/IGNvbCA6IHBhcmVudC5jb2xJbkNvbiB8fCBwYXJlbnQuY29sKSA6IFtdO1xuICAgIGNsc01hcC5wdXNoKGBhbnQtZm9ybS1pdGVtYCwgLi4ucmVwQ2xzLCBgJHtwcmVmaXhDbHN9X19pdGVtYCk7XG4gICAgaWYgKGxpbmUgfHwgcGFyZW50LmxpbmUpIHtcbiAgICAgIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX2xpbmVgKTtcbiAgICB9XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5hZGRDbGFzcyhlbCwgY2xzKSk7XG4gICAgY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgYmluZE1vZGVsKCkge1xuICAgIGlmICghdGhpcy5uZ0NvbnRyb2wgfHwgdGhpcy5pc0JpbmRNb2RlbCkgcmV0dXJuO1xuXG4gICAgdGhpcy5pc0JpbmRNb2RlbCA9IHRydWU7XG4gICAgdGhpcy5uZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlcyEucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUocmVzID0+IHRoaXMudXBkYXRlU3RhdHVzKHJlcyA9PT0gJ0lOVkFMSUQnKSk7XG4gICAgaWYgKHRoaXMuX2F1dG9JZCkge1xuICAgICAgY29uc3QgY29udHJvbCA9ICh0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yIGFzIE56U2FmZUFueSk/Ll9lbGVtZW50UmVmPy5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGNvbnRyb2wgJiYgIWNvbnRyb2wuaWQpIHtcbiAgICAgICAgY29udHJvbC5pZCA9IHRoaXMuX2lkO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBhdXRvIHJlcXVpcmVkXG4gICAgaWYgKHRoaXMucmVxdWlyZWQgIT09IHRydWUpIHtcbiAgICAgIGNvbnN0IHJhd1ZhbGlkYXRvcnMgPSAodGhpcy5uZ0NvbnRyb2wgYXMgTnpTYWZlQW55KT8uX3Jhd1ZhbGlkYXRvcnMgYXMgQXJyYXk8VmFsaWRhdG9yPjtcbiAgICAgIHRoaXMucmVxdWlyZWQgPSByYXdWYWxpZGF0b3JzLmZpbmQodyA9PiB3IGluc3RhbmNlb2YgUmVxdWlyZWRWYWxpZGF0b3IpICE9IG51bGw7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTdGF0dXMoaW52YWxpZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbC5kaXNhYmxlZCB8fCB0aGlzLm5nQ29udHJvbC5pc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW52YWxpZCA9ICF0aGlzLm9uY2VGbGFnICYmIGludmFsaWQgJiYgdGhpcy5wYXJlbnQuaW5nb3JlRGlydHkgPT09IGZhbHNlICYmICF0aGlzLm5nQ29udHJvbC5kaXJ0eSA/IGZhbHNlIDogaW52YWxpZDtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLm5nQ29udHJvbC5lcnJvcnM7XG4gICAgaWYgKGVycm9ycyAhPSBudWxsICYmIE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoZXJyb3JzKVswXSB8fCAnJztcbiAgICAgIGNvbnN0IGVyciA9IHRoaXMuZXJyb3JEYXRhW2tleV07XG4gICAgICB0aGlzLl9lcnJvciA9IGVyciAhPSBudWxsID8gZXJyIDogdGhpcy5lcnJvckRhdGFbJyddIHx8ICcnO1xuICAgIH1cblxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBjbHMgPSBgJHtwcmVmaXhDbHN9X19pdGVtLWVtcHR5YDtcbiAgICBpZiAoaXNFbXB0eShlbCkpIHtcbiAgICAgIHRoaXMucmVuLmFkZENsYXNzKGVsLCBjbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbi5yZW1vdmVDbGFzcyhlbCwgY2xzKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMub25jZUZsYWcgPSB0aGlzLnBhcmVudC5maXJzdFZpc3VhbDtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3MoKS5iaW5kTW9kZWwoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpLmJpbmRNb2RlbCgpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5vbmNlRmxhZykge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdHVzKHRoaXMubmdDb250cm9sLmludmFsaWQhKTtcbiAgICAgICAgdGhpcy5vbmNlRmxhZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19