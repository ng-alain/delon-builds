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
    function SEComponent(el, parent, rep, ren, cdr) {
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
        var _a = (/** @type {?} */ (this)), el = _a.el, ren = _a.ren, clsMap = _a.clsMap, col = _a.col, parent = _a.parent, cdr = _a.cdr;
        (/** @type {?} */ (this)).labelWidth = parent.labelWidth;
        clsMap.forEach(function (cls) { return ren.removeClass(el, cls); });
        clsMap.length = 0;
        /** @type {?} */
        var repCls = parent.nzLayout === 'horizontal'
            ? (/** @type {?} */ (this)).rep.genCls(col != null ? col : parent.colInCon || parent.col)
            : [];
        clsMap.push.apply(clsMap, tslib_1.__spread(["ant-form-item"], repCls, [prefixCls + "__item"]));
        if ((/** @type {?} */ (this)).line || parent.line) {
            clsMap.push(prefixCls + "__line");
        }
        clsMap.forEach(function (cls) { return ren.addClass(el, cls); });
        cdr.detectChanges();
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
            return _this.updateStatus(res === 'INVALID');
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
     * @param {?} invalid
     * @return {?}
     */
    SEComponent.prototype.updateStatus = /**
     * @param {?} invalid
     * @return {?}
     */
    function (invalid) {
        if (this.ngControl.disabled || this.ngControl.isDisabled) {
            return;
        }
        this.invalid = (invalid && this.onceFlag) || (this.ngControl.dirty && invalid);
        this.cdr.detectChanges();
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
            Promise.resolve().then(function () {
                _this.updateStatus(_this.ngControl.invalid);
                _this.onceFlag = false;
            });
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
                    template: "<div class=\"ant-form-item-label se__label\"\n     [class.se__nolabel]=\"!label\"\n     [style.width.px]=\"labelWidth\">\n  <label *ngIf=\"label\"\n         [attr.for]=\"_id\"\n         [ngClass]=\"{'ant-form-item-required': required}\">\n    <ng-container *stringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    <span class=\"se__label-optional\">\n      {{ optional }}\n      <nz-tooltip *ngIf=\"optionalHelp\"\n                  [nzTitle]=\"optionalHelp\">\n        <i nz-tooltip\n           nz-icon\n           type=\"question-circle\"></i>\n      </nz-tooltip>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control-wrapper se__control\">\n  <div class=\"ant-form-item-control {{controlClass}}\"\n       [class.has-error]=\"invalid\">\n    <ng-content></ng-content>\n    <se-error *ngIf=\"showErr\">{{error}}</se-error>\n    <div *ngIf=\"extra\"\n         class=\"ant-form-extra\">{{extra}}</div>\n  </div>\n</div>\n",
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
    SEComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2VkaXQvIiwic291cmNlcyI6WyJlZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixXQUFXLEVBQ1gsS0FBSyxFQUdMLFFBQVEsRUFDUixTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUcxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztJQUU1RCxTQUFTLEdBQUcsSUFBSTs7SUFDbEIsWUFBWSxHQUFHLENBQUM7QUFFcEI7SUEwREUscUJBQ0UsRUFBYyxFQUNjLE1BQTRCLEVBQ2hELEdBQXNCLEVBQ3RCLEdBQWMsRUFDZCxHQUFzQjtRQUhGLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQ2hELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXJEeEIsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUN0QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUN6QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFVTyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBU25DLFFBQUcsR0FBRyxTQUFPLFlBQVks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QUN6Qiw4QkFBZ0I7O0lBQ2hCLGlDQUFrQjs7SUFJbEIsK0JBQTBCOztJQUMxQixtQ0FBOEI7O0lBQzlCLDRCQUF1Qjs7SUFDdkIsNEJBQXVCOztJQUN2Qiw0QkFBMkM7O0lBQzNDLDBCQUF3Qzs7SUFDeEMsK0JBQTBDOztJQUMxQyxtQ0FBbUM7O0lBQ25DLDJCQUEyQzs7SUFRM0MsMEJBQThCOztJQUM5Qiw4QkFBZTs7SUF5QmIsNkJBQXdEOztJQUN4RCwwQkFBOEI7O0lBQzlCLDBCQUFzQjs7SUFDdEIsMEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xOYW1lLCBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFJlc3BvbnNpdmVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGRlZXBHZXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFNFQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5jb25zdCBwcmVmaXhDbHMgPSBgc2VgO1xubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU0VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHN0YXR1cyQ6IFN1YnNjcmlwdGlvbjtcbiAgQENvbnRlbnRDaGlsZChOZ01vZGVsKSBwcml2YXRlIHJlYWRvbmx5IG5nTW9kZWw6IE5nTW9kZWw7XG4gIEBDb250ZW50Q2hpbGQoRm9ybUNvbnRyb2xOYW1lKSBwcml2YXRlIHJlYWRvbmx5IGZvcm1Db250cm9sTmFtZTogRm9ybUNvbnRyb2xOYW1lO1xuICBwcml2YXRlIGNsc01hcDogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBvbmNlRmxhZyA9IGZhbHNlO1xuICBpbnZhbGlkID0gZmFsc2U7XG4gIGxhYmVsV2lkdGggPSBudWxsO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgb3B0aW9uYWw6IHN0cmluZztcbiAgQElucHV0KCkgb3B0aW9uYWxIZWxwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGVycm9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV4dHJhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGNvbDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVxdWlyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgY29udHJvbENsYXNzOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbihudWxsKSBsaW5lOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgICB0aGlzLl9hdXRvSWQgPSBmYWxzZTtcbiAgfVxuXG4gIF9pZCA9IGBfc2UtJHtuZXh0VW5pcXVlSWQrK31gO1xuICBfYXV0b0lkID0gdHJ1ZTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLWxlZnQucHgnKVxuICBnZXQgcGFkZGluZ0xlZnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ3V0dGVyIC8gMjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1yaWdodC5weCcpXG4gIGdldCBwYWRkaW5nUmlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ3V0dGVyIC8gMjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWZvcm0taXRlbS13aXRoLWhlbHAnKVxuICBnZXQgc2hvd0VycigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkICYmIHRoaXMucGFyZW50LnNpemUgIT09ICdjb21wYWN0JyAmJiAhIXRoaXMuZXJyb3I7XG4gIH1cblxuICBwcml2YXRlIGdldCBuZ0NvbnRyb2woKTogTmdNb2RlbCB8IEZvcm1Db250cm9sTmFtZSB7XG4gICAgcmV0dXJuIHRoaXMubmdNb2RlbCB8fCB0aGlzLmZvcm1Db250cm9sTmFtZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBwYXJlbnQ6IFNFQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgcmVwOiBSZXNwb25zaXZlU2VydmljZSxcbiAgICBwcml2YXRlIHJlbjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzZV0gbXVzdCBpbmNsdWRlICdzZS1jb250YWluZXInIGNvbXBvbmVudGApO1xuICAgIH1cbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdGhpcyB7XG4gICAgY29uc3QgeyBlbCwgcmVuLCBjbHNNYXAsIGNvbCwgcGFyZW50LCBjZHIgfSA9IHRoaXM7XG4gICAgdGhpcy5sYWJlbFdpZHRoID0gcGFyZW50LmxhYmVsV2lkdGg7XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5yZW1vdmVDbGFzcyhlbCwgY2xzKSk7XG4gICAgY2xzTWFwLmxlbmd0aCA9IDA7XG4gICAgY29uc3QgcmVwQ2xzID1cbiAgICAgIHBhcmVudC5uekxheW91dCA9PT0gJ2hvcml6b250YWwnXG4gICAgICAgID8gdGhpcy5yZXAuZ2VuQ2xzKGNvbCAhPSBudWxsID8gY29sIDogcGFyZW50LmNvbEluQ29uIHx8IHBhcmVudC5jb2wpXG4gICAgICAgIDogW107XG4gICAgY2xzTWFwLnB1c2goYGFudC1mb3JtLWl0ZW1gLCAuLi5yZXBDbHMsIGAke3ByZWZpeENsc31fX2l0ZW1gKTtcbiAgICBpZiAodGhpcy5saW5lIHx8IHBhcmVudC5saW5lKSB7XG4gICAgICBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19saW5lYCk7XG4gICAgfVxuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4uYWRkQ2xhc3MoZWwsIGNscykpO1xuICAgIGNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIGJpbmRNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMubmdDb250cm9sIHx8IHRoaXMuc3RhdHVzJCkgcmV0dXJuO1xuXG4gICAgdGhpcy5zdGF0dXMkID0gdGhpcy5uZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUocmVzID0+XG4gICAgICB0aGlzLnVwZGF0ZVN0YXR1cyhyZXMgPT09ICdJTlZBTElEJyksXG4gICAgKTtcblxuICAgIGlmICh0aGlzLl9hdXRvSWQpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBkZWVwR2V0KFxuICAgICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yLFxuICAgICAgICAnX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCcsXG4gICAgICApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgY29udHJvbC5pZCA9IHRoaXMuX2lkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU3RhdHVzKGludmFsaWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgfHwgdGhpcy5uZ0NvbnRyb2wuaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmludmFsaWQgPSAoaW52YWxpZCAmJiB0aGlzLm9uY2VGbGFnKSB8fCAodGhpcy5uZ0NvbnRyb2wuZGlydHkgJiYgaW52YWxpZCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5vbmNlRmxhZyA9IHRoaXMucGFyZW50LmZpcnN0VmlzdWFsO1xuICAgIGlmICh0aGlzLmluaXRlZCkgdGhpcy5zZXRDbGFzcygpLmJpbmRNb2RlbCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKS5iaW5kTW9kZWwoKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMub25jZUZsYWcpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1cyh0aGlzLm5nQ29udHJvbC5pbnZhbGlkKTtcbiAgICAgICAgdGhpcy5vbmNlRmxhZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RhdHVzJCkge1xuICAgICAgdGhpcy5zdGF0dXMkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=