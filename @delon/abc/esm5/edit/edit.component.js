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
var prefixCls = "se";
/** @type {?} */
var nextUniqueId = 0;
var SEComponent = /** @class */ (function () {
    function SEComponent(parent, rep, el, ren, cd) {
        this.parent = parent;
        this.rep = rep;
        this.ren = ren;
        this.cd = cd;
        this.clsMap = [];
        this.inited = false;
        this.onceFlag = false;
        this.invalid = false;
        this.labelWidth = null;
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
    Object.defineProperty(SEComponent.prototype, "paddingLeft", {
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
    Object.defineProperty(SEComponent.prototype, "paddingRight", {
        get: /**
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
         * @return {?}
         */
        function () {
            return this.ngModel || this.formControlName;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    SEComponent.prototype.setClass = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        var _a = (/** @type {?} */ (this)), el = _a.el, ren = _a.ren, clsMap = _a.clsMap, col = _a.col, parent = _a.parent, cd = _a.cd;
        (/** @type {?} */ (this)).labelWidth = parent.labelWidth;
        clsMap.forEach(function (cls) { return ren.removeClass(el, cls); });
        clsMap.length = 0;
        /** @type {?} */
        var repCls = parent.nzLayout === 'horizontal'
            ? (/** @type {?} */ (this)).rep.genCls(col != null ? col : parent.col)
            : [];
        clsMap.push.apply(clsMap, tslib_1.__spread(["ant-form-item"], repCls, [prefixCls + "__item"]));
        if ((/** @type {?} */ (this)).line || parent.line) {
            clsMap.push(prefixCls + "__line");
        }
        clsMap.forEach(function (cls) { return ren.addClass(el, cls); });
        cd.detectChanges();
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    SEComponent.prototype.bindModel = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.ngControl || this.status$)
            return;
        this.status$ = this.ngControl.statusChanges.subscribe(function (res) {
            /** @type {?} */
            var status = res !== 'VALID';
            if (!_this.onceFlag || _this.invalid === status) {
                _this.onceFlag = true;
                return;
            }
            _this.invalid = status;
            _this.cd.detectChanges();
        });
        if (this._autoId) {
            /** @type {?} */
            var control = (/** @type {?} */ (deepGet(this.ngControl.valueAccessor, '_elementRef.nativeElement')));
            if (control) {
                control.id = this._id;
            }
        }
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
        this.setClass().bindModel();
        this.inited = true;
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
                    template: "<div class=\"ant-form-item-label se__label\" [class.se__nolabel]=\"!label\" [style.width.px]=\"labelWidth\">\n  <label *ngIf=\"label\" [attr.for]=\"_id\" [ngClass]=\"{'ant-form-item-required': required}\">\n    <ng-container *stringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    <span class=\"se__label-optional\">\n      {{ optional }}\n      <nz-tooltip *ngIf=\"optionalHelp\" [nzTitle]=\"optionalHelp\">\n        <i nz-tooltip nz-icon type=\"question-circle\"></i>\n      </nz-tooltip>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control-wrapper se__control\">\n  <div class=\"ant-form-item-control {{controlClass}}\" [class.has-error]=\"invalid\">\n    <ng-content></ng-content>\n    <se-error *ngIf=\"showErr\">{{error}}</se-error>\n    <div *ngIf=\"extra\" class=\"ant-form-extra\">{{extra}}</div>\n  </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SEComponent.ctorParameters = function () { return [
        { type: SEContainerComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: ResponsiveService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
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
    return SEComponent;
}());
export { SEComponent };
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
    SEComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2VkaXQvIiwic291cmNlcyI6WyJlZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixXQUFXLEVBQ1gsS0FBSyxFQUdMLFFBQVEsRUFDUixTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztJQUU1RCxTQUFTLEdBQUcsSUFBSTs7SUFDbEIsWUFBWSxHQUFHLENBQUM7QUFFcEI7SUE0REUscUJBR1UsTUFBNEIsRUFDNUIsR0FBc0IsRUFDOUIsRUFBYyxFQUNOLEdBQWMsRUFDZCxFQUFxQjtRQUpyQixXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUM1QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUV0QixRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQ2QsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUF2RHZCLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFDdEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDekIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBVU8sYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQyxpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQVNuQyxRQUFHLEdBQUcsU0FBTyxZQUFZ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USxvQkFBb0IsdUJBa0V4QixRQUFRLFlBQ1IsSUFBSTtnQkF0RUEsaUJBQWlCO2dCQWJ4QixVQUFVO2dCQU9WLFNBQVM7Z0JBVlQsaUJBQWlCOzs7MEJBZ0NoQixZQUFZLFNBQUMsT0FBTztrQ0FFcEIsWUFBWSxTQUFDLGVBQWU7MkJBVTVCLEtBQUs7K0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUVMLEtBQUs7OEJBV0wsV0FBVyxTQUFDLHVCQUF1QjsrQkFLbkMsV0FBVyxTQUFDLHdCQUF3QjswQkFLcEMsV0FBVyxTQUFDLCtCQUErQjs7SUExQmhCO1FBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7OzRDQUFhO0lBQ2Y7UUFBZixZQUFZLEVBQUU7O2lEQUFrQjtJQUViO1FBQW5CLFlBQVksQ0FBQyxJQUFJLENBQUM7OzZDQUFlO0lBdUc3QyxrQkFBQztDQUFBLEFBbklELElBbUlDO1NBOUhZLFdBQVc7OztJQUN0Qix5QkFBd0I7O0lBQ3hCLDhCQUE4Qjs7SUFDOUIsOEJBQ2tDOztJQUNsQyxzQ0FDa0Q7O0lBQ2xELDZCQUE4Qjs7SUFDOUIsNkJBQXVCOztJQUN2QiwrQkFBeUI7O0lBQ3pCLDhCQUFnQjs7SUFDaEIsaUNBQWtCOztJQUlsQiwrQkFBMEI7O0lBQzFCLG1DQUE4Qjs7SUFDOUIsNEJBQXVCOztJQUN2Qiw0QkFBdUI7O0lBQ3ZCLDRCQUEyQzs7SUFDM0MsMEJBQXdDOztJQUN4QywrQkFBMEM7O0lBQzFDLG1DQUFtQzs7SUFDbkMsMkJBQTJDOztJQVEzQywwQkFBOEI7O0lBQzlCLDhCQUFlOztJQXdCYiw2QkFFb0M7O0lBQ3BDLDBCQUE4Qjs7SUFFOUIsMEJBQXNCOztJQUN0Qix5QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbE5hbWUsIE5nQ29udHJvbCwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBSZXNwb25zaXZlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwR2V0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBTRUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC1jb250YWluZXIuY29tcG9uZW50JztcblxuY29uc3QgcHJlZml4Q2xzID0gYHNlYDtcbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNFQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBzdGF0dXMkOiBTdWJzY3JpcHRpb247XG4gIEBDb250ZW50Q2hpbGQoTmdNb2RlbClcbiAgcHJpdmF0ZSByZWFkb25seSBuZ01vZGVsOiBOZ01vZGVsO1xuICBAQ29udGVudENoaWxkKEZvcm1Db250cm9sTmFtZSlcbiAgcHJpdmF0ZSByZWFkb25seSBmb3JtQ29udHJvbE5hbWU6IEZvcm1Db250cm9sTmFtZTtcbiAgcHJpdmF0ZSBjbHNNYXA6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgb25jZUZsYWcgPSBmYWxzZTtcbiAgaW52YWxpZCA9IGZhbHNlO1xuICBsYWJlbFdpZHRoID0gbnVsbDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIG9wdGlvbmFsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG9wdGlvbmFsSGVscDogc3RyaW5nO1xuICBASW5wdXQoKSBlcnJvcjogc3RyaW5nO1xuICBASW5wdXQoKSBleHRyYTogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBjb2w6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlcXVpcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbnRyb2xDbGFzczogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4obnVsbCkgbGluZTogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgdGhpcy5fYXV0b0lkID0gZmFsc2U7XG4gIH1cblxuICBfaWQgPSBgX3NlLSR7bmV4dFVuaXF1ZUlkKyt9YDtcbiAgX2F1dG9JZCA9IHRydWU7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1sZWZ0LnB4JylcbiAgZ2V0IHBhZGRpbmdMZWZ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lmd1dHRlciAvIDI7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctcmlnaHQucHgnKVxuICBnZXQgcGFkZGluZ1JpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lmd1dHRlciAvIDI7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1mb3JtLWl0ZW0td2l0aC1oZWxwJylcbiAgZ2V0IHNob3dFcnIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCAmJiB0aGlzLnBhcmVudC5zaXplICE9PSAnY29tcGFjdCcgJiYgISF0aGlzLmVycm9yO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgbmdDb250cm9sKCk6IE5nQ29udHJvbCB7XG4gICAgcmV0dXJuIHRoaXMubmdNb2RlbCB8fCB0aGlzLmZvcm1Db250cm9sTmFtZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEhvc3QoKVxuICAgIHByaXZhdGUgcGFyZW50OiBTRUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHJlcDogUmVzcG9uc2l2ZVNlcnZpY2UsXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW46IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzZV0gbXVzdCBpbmNsdWRlICdzZS1jb250YWluZXInIGNvbXBvbmVudGApO1xuICAgIH1cbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdGhpcyB7XG4gICAgY29uc3QgeyBlbCwgcmVuLCBjbHNNYXAsIGNvbCwgcGFyZW50LCBjZCB9ID0gdGhpcztcbiAgICB0aGlzLmxhYmVsV2lkdGggPSBwYXJlbnQubGFiZWxXaWR0aDtcbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLnJlbW92ZUNsYXNzKGVsLCBjbHMpKTtcbiAgICBjbHNNYXAubGVuZ3RoID0gMDtcbiAgICBjb25zdCByZXBDbHMgPVxuICAgICAgcGFyZW50Lm56TGF5b3V0ID09PSAnaG9yaXpvbnRhbCdcbiAgICAgICAgPyB0aGlzLnJlcC5nZW5DbHMoY29sICE9IG51bGwgPyBjb2wgOiBwYXJlbnQuY29sKVxuICAgICAgICA6IFtdO1xuICAgIGNsc01hcC5wdXNoKGBhbnQtZm9ybS1pdGVtYCwgLi4ucmVwQ2xzLCBgJHtwcmVmaXhDbHN9X19pdGVtYCk7XG4gICAgaWYgKHRoaXMubGluZSB8fCBwYXJlbnQubGluZSkge1xuICAgICAgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9fbGluZWApO1xuICAgIH1cbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLmFkZENsYXNzKGVsLCBjbHMpKTtcbiAgICBjZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGJpbmRNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMubmdDb250cm9sIHx8IHRoaXMuc3RhdHVzJCkgcmV0dXJuO1xuXG4gICAgdGhpcy5zdGF0dXMkID0gdGhpcy5uZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGNvbnN0IHN0YXR1cyA9IHJlcyAhPT0gJ1ZBTElEJztcbiAgICAgIGlmICghdGhpcy5vbmNlRmxhZyB8fCB0aGlzLmludmFsaWQgPT09IHN0YXR1cykge1xuICAgICAgICB0aGlzLm9uY2VGbGFnID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5pbnZhbGlkID0gc3RhdHVzO1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuX2F1dG9JZCkge1xuICAgICAgY29uc3QgY29udHJvbCA9IGRlZXBHZXQoXG4gICAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IsXG4gICAgICAgICdfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50JyxcbiAgICAgICkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoY29udHJvbCkge1xuICAgICAgICBjb250cm9sLmlkID0gdGhpcy5faWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5vbmNlRmxhZyA9IHRoaXMucGFyZW50LmZpcnN0VmlzdWFsO1xuICAgIGlmICh0aGlzLmluaXRlZCkgdGhpcy5zZXRDbGFzcygpLmJpbmRNb2RlbCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKS5iaW5kTW9kZWwoKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdGF0dXMkKSB7XG4gICAgICB0aGlzLnN0YXR1cyQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==