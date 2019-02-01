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
            if (_this.ngControl.disabled || _this.ngControl.isDisabled) {
                return;
            }
            /** @type {?} */
            var invalid = res === 'INVALID';
            if (!_this.onceFlag) {
                _this.onceFlag = true;
                return;
            }
            _this.invalid = _this.ngControl.dirty && invalid;
            _this.cdr.detectChanges();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2VkaXQvIiwic291cmNlcyI6WyJlZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixXQUFXLEVBQ1gsS0FBSyxFQUdMLFFBQVEsRUFDUixTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUcxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztJQUU1RCxTQUFTLEdBQUcsSUFBSTs7SUFDbEIsWUFBWSxHQUFHLENBQUM7QUFFcEI7SUEwREUscUJBQ0UsRUFBYyxFQUNjLE1BQTRCLEVBQ2hELEdBQXNCLEVBQ3RCLEdBQWMsRUFDZCxHQUFzQjtRQUhGLFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQ2hELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXJEeEIsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUN0QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUN6QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFVTyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBU25DLFFBQUcsR0FBRyxTQUFPLFlBQVks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QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3QsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sTmFtZSwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBSZXNwb25zaXZlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwR2V0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBTRUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC1jb250YWluZXIuY29tcG9uZW50JztcblxuY29uc3QgcHJlZml4Q2xzID0gYHNlYDtcbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNFQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBzdGF0dXMkOiBTdWJzY3JpcHRpb247XG4gIEBDb250ZW50Q2hpbGQoTmdNb2RlbCkgcHJpdmF0ZSByZWFkb25seSBuZ01vZGVsOiBOZ01vZGVsO1xuICBAQ29udGVudENoaWxkKEZvcm1Db250cm9sTmFtZSkgcHJpdmF0ZSByZWFkb25seSBmb3JtQ29udHJvbE5hbWU6IEZvcm1Db250cm9sTmFtZTtcbiAgcHJpdmF0ZSBjbHNNYXA6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgb25jZUZsYWcgPSBmYWxzZTtcbiAgaW52YWxpZCA9IGZhbHNlO1xuICBsYWJlbFdpZHRoID0gbnVsbDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIG9wdGlvbmFsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG9wdGlvbmFsSGVscDogc3RyaW5nO1xuICBASW5wdXQoKSBlcnJvcjogc3RyaW5nO1xuICBASW5wdXQoKSBleHRyYTogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBjb2w6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlcXVpcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbnRyb2xDbGFzczogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4obnVsbCkgbGluZTogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgdGhpcy5fYXV0b0lkID0gZmFsc2U7XG4gIH1cblxuICBfaWQgPSBgX3NlLSR7bmV4dFVuaXF1ZUlkKyt9YDtcbiAgX2F1dG9JZCA9IHRydWU7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1sZWZ0LnB4JylcbiAgZ2V0IHBhZGRpbmdMZWZ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lmd1dHRlciAvIDI7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctcmlnaHQucHgnKVxuICBnZXQgcGFkZGluZ1JpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lmd1dHRlciAvIDI7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1mb3JtLWl0ZW0td2l0aC1oZWxwJylcbiAgZ2V0IHNob3dFcnIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCAmJiB0aGlzLnBhcmVudC5zaXplICE9PSAnY29tcGFjdCcgJiYgISF0aGlzLmVycm9yO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgbmdDb250cm9sKCk6IE5nTW9kZWwgfCBGb3JtQ29udHJvbE5hbWUge1xuICAgIHJldHVybiB0aGlzLm5nTW9kZWwgfHwgdGhpcy5mb3JtQ29udHJvbE5hbWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgcGFyZW50OiBTRUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBwcml2YXRlIHJlcDogUmVzcG9uc2l2ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW46IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc2VdIG11c3QgaW5jbHVkZSAnc2UtY29udGFpbmVyJyBjb21wb25lbnRgKTtcbiAgICB9XG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCk6IHRoaXMge1xuICAgIGNvbnN0IHsgZWwsIHJlbiwgY2xzTWFwLCBjb2wsIHBhcmVudCwgY2RyIH0gPSB0aGlzO1xuICAgIHRoaXMubGFiZWxXaWR0aCA9IHBhcmVudC5sYWJlbFdpZHRoO1xuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscykpO1xuICAgIGNsc01hcC5sZW5ndGggPSAwO1xuICAgIGNvbnN0IHJlcENscyA9XG4gICAgICBwYXJlbnQubnpMYXlvdXQgPT09ICdob3Jpem9udGFsJ1xuICAgICAgICA/IHRoaXMucmVwLmdlbkNscyhjb2wgIT0gbnVsbCA/IGNvbCA6IHBhcmVudC5jb2xJbkNvbiB8fCBwYXJlbnQuY29sKVxuICAgICAgICA6IFtdO1xuICAgIGNsc01hcC5wdXNoKGBhbnQtZm9ybS1pdGVtYCwgLi4ucmVwQ2xzLCBgJHtwcmVmaXhDbHN9X19pdGVtYCk7XG4gICAgaWYgKHRoaXMubGluZSB8fCBwYXJlbnQubGluZSkge1xuICAgICAgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9fbGluZWApO1xuICAgIH1cbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLmFkZENsYXNzKGVsLCBjbHMpKTtcbiAgICBjZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBiaW5kTW9kZWwoKSB7XG4gICAgaWYgKCF0aGlzLm5nQ29udHJvbCB8fCB0aGlzLnN0YXR1cyQpIHJldHVybjtcblxuICAgIHRoaXMuc3RhdHVzJCA9IHRoaXMubmdDb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBpZiAodGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgfHwgdGhpcy5uZ0NvbnRyb2wuaXNEaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpbnZhbGlkID0gcmVzID09PSAnSU5WQUxJRCc7XG4gICAgICBpZiAoIXRoaXMub25jZUZsYWcpIHtcbiAgICAgICAgdGhpcy5vbmNlRmxhZyA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW52YWxpZCA9IHRoaXMubmdDb250cm9sLmRpcnR5ICYmIGludmFsaWQ7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5fYXV0b0lkKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gZGVlcEdldChcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvcixcbiAgICAgICAgJ19lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQnLFxuICAgICAgKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChjb250cm9sKSB7XG4gICAgICAgIGNvbnRyb2wuaWQgPSB0aGlzLl9pZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLm9uY2VGbGFnID0gdGhpcy5wYXJlbnQuZmlyc3RWaXN1YWw7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB0aGlzLnNldENsYXNzKCkuYmluZE1vZGVsKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpLmJpbmRNb2RlbCgpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXR1cyQpIHtcbiAgICAgIHRoaXMuc3RhdHVzJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19