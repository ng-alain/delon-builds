/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, TemplateRef, ElementRef, Renderer2, ContentChild, Host, Optional, ChangeDetectorRef, ChangeDetectionStrategy, HostBinding, } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';
import { ResponsiveService } from '@delon/theme';
import { deepGet, InputNumber, InputBoolean } from '@delon/util';
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
        this._label = '';
        this.required = false;
        this.controlClass = '';
        this._id = "_se-" + nextUniqueId++;
        this._autoId = true;
        if (parent == null) {
            throw new Error("[se] must include 'se-container' component");
        }
        this.el = el.nativeElement;
    }
    Object.defineProperty(SEComponent.prototype, "label", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._label = null;
                this._labelTpl = value;
            }
            else {
                this._label = value;
            }
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
    Object.defineProperty(SEComponent.prototype, "paddingLeft", {
        // #endregion
        get: /**
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
     * @return {?}
     */
    SEComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a = this, el = _a.el, ren = _a.ren, clsMap = _a.clsMap, col = _a.col, parent = _a.parent, cd = _a.cd;
        this.labelWidth = parent.labelWidth;
        clsMap.forEach(function (cls) { return ren.removeClass(el, cls); });
        clsMap.length = 0;
        /** @type {?} */
        var repCls = parent.nzLayout === 'horizontal'
            ? this.rep.genCls(col != null ? col : parent.col)
            : [];
        clsMap.push.apply(clsMap, tslib_1.__spread(["ant-form-item"], repCls, [prefixCls + "__item"]));
        if (this.line || parent.line) {
            clsMap.push(prefixCls + "__line");
        }
        clsMap.forEach(function (cls) { return ren.addClass(el, cls); });
        cd.detectChanges();
        return this;
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
            var control = /** @type {?} */ (deepGet(this.ngControl.valueAccessor, '_elementRef.nativeElement'));
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
                    template: "<div class=\"ant-form-item-label se__label\"\r\n  [class.se__nolabel]=\"!_label && !_labelTpl\" [style.width.px]=\"labelWidth\">\r\n  <label *ngIf=\"_label; else _labelTpl\" [attr.for]=\"_id\" [ngClass]=\"{'ant-form-item-required': required}\">\r\n    {{_label}}\r\n    <span class=\"se__label-optional\">\r\n      {{ optional }}\r\n      <nz-tooltip *ngIf=\"optionalHelp\" [nzTitle]=\"optionalHelp\">\r\n        <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\r\n      </nz-tooltip>\r\n    </span>\r\n  </label>\r\n</div>\r\n<div class=\"ant-form-item-control-wrapper se__control\">\r\n  <div class=\"ant-form-item-control {{controlClass}}\" [class.has-error]=\"invalid\">\r\n    <ng-content></ng-content>\r\n    <se-error *ngIf=\"showErr\">{{error}}</se-error>\r\n    <div *ngIf=\"extra\" class=\"ant-form-extra\">{{extra}}</div>\r\n  </div>\r\n</div>\r\n",
                    preserveWhitespaces: false,
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
        id: [{ type: Input }],
        line: [{ type: Input }],
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
    SEComponent.prototype._label;
    /** @type {?} */
    SEComponent.prototype._labelTpl;
    /** @type {?} */
    SEComponent.prototype.col;
    /** @type {?} */
    SEComponent.prototype.required;
    /** @type {?} */
    SEComponent.prototype.controlClass;
    /** @type {?} */
    SEComponent.prototype._id;
    /** @type {?} */
    SEComponent.prototype._autoId;
    /** @type {?} */
    SEComponent.prototype.line;
    /** @type {?} */
    SEComponent.prototype.parent;
    /** @type {?} */
    SEComponent.prototype.rep;
    /** @type {?} */
    SEComponent.prototype.ren;
    /** @type {?} */
    SEComponent.prototype.cd;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2VkaXQvIiwic291cmNlcyI6WyJlZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFFWCxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osUUFBUSxFQUVSLGlCQUFpQixFQUNqQix1QkFBdUIsRUFFdkIsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFHckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFFbEUsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDOztBQUN2QixJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7O0lBNEZuQixxQkFHVSxNQUE0QixFQUM1QixLQUNSLEVBQWMsRUFDTixLQUNBO1FBSkEsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDNUIsUUFBRyxHQUFILEdBQUc7UUFFSCxRQUFHLEdBQUgsR0FBRztRQUNILE9BQUUsR0FBRixFQUFFO3NCQXBGZSxFQUFFO3NCQUNaLEtBQUs7d0JBQ0gsS0FBSzt1QkFDZCxLQUFLOzBCQUNGLElBQUk7c0JBZ0JSLEVBQUU7d0JBa0JBLEtBQUs7NEJBR08sRUFBRTttQkFRbkIsU0FBTyxZQUFZLEVBQUk7dUJBQ25CLElBQUk7UUFvQ1osSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FB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QjtnQkFkeEIsVUFBVTtnQkFDVixTQUFTO2dCQUtULGlCQUFpQjs7OzBCQXlCaEIsWUFBWSxTQUFDLE9BQU87a0NBRXBCLFlBQVksU0FBQyxlQUFlOzJCQVU1QixLQUFLOytCQUdMLEtBQUs7d0JBR0wsS0FBSzt3QkFHTCxLQUFLO3dCQUtMLEtBQUs7c0JBVUwsS0FBSzsyQkFJTCxLQUFLOytCQUlMLEtBQUs7cUJBR0wsS0FBSzt1QkFTTCxLQUFLOzhCQU1MLFdBQVcsU0FBQyx1QkFBdUI7K0JBS25DLFdBQVcsU0FBQyx3QkFBd0I7MEJBS3BDLFdBQVcsU0FBQywrQkFBK0I7OztRQW5DM0MsV0FBVyxDQUFDLElBQUksQ0FBQzs7OztRQUlqQixZQUFZLEVBQUU7Ozs7UUFnQmQsWUFBWSxDQUFDLElBQUksQ0FBQzs7O3NCQTdGckI7O1NBaUNhLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBPbkNoYW5nZXMsXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEhvc3QsXHJcbiAgT3B0aW9uYWwsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSG9zdEJpbmRpbmcsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kZWwsIEZvcm1Db250cm9sTmFtZSwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFJlc3BvbnNpdmVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHsgZGVlcEdldCwgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IFNFQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgcHJlZml4Q2xzID0gYHNlYDtcclxubGV0IG5leHRVbmlxdWVJZCA9IDA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTRUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHN0YXR1cyQ6IFN1YnNjcmlwdGlvbjtcclxuICBAQ29udGVudENoaWxkKE5nTW9kZWwpXHJcbiAgcHJpdmF0ZSByZWFkb25seSBuZ01vZGVsOiBOZ01vZGVsO1xyXG4gIEBDb250ZW50Q2hpbGQoRm9ybUNvbnRyb2xOYW1lKVxyXG4gIHByaXZhdGUgcmVhZG9ubHkgZm9ybUNvbnRyb2xOYW1lOiBGb3JtQ29udHJvbE5hbWU7XHJcbiAgcHJpdmF0ZSBjbHNNYXA6IHN0cmluZ1tdID0gW107XHJcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIG9uY2VGbGFnID0gZmFsc2U7XHJcbiAgaW52YWxpZCA9IGZhbHNlO1xyXG4gIGxhYmVsV2lkdGggPSBudWxsO1xyXG5cclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG9wdGlvbmFsOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgb3B0aW9uYWxIZWxwOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZXJyb3I6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBleHRyYTogc3RyaW5nO1xyXG5cclxuICBfbGFiZWwgPSAnJztcclxuICBfbGFiZWxUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgbGFiZWwodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX2xhYmVsID0gbnVsbDtcclxuICAgICAgdGhpcy5fbGFiZWxUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcihudWxsKVxyXG4gIGNvbDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29udHJvbENsYXNzOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgaWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuX2F1dG9JZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgX2lkID0gYF9zZS0ke25leHRVbmlxdWVJZCsrfWA7XHJcbiAgX2F1dG9JZCA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbihudWxsKVxyXG4gIGxpbmU6IGJvb2xlYW47XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLWxlZnQucHgnKVxyXG4gIGdldCBwYWRkaW5nTGVmdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lmd1dHRlciAvIDI7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctcmlnaHQucHgnKVxyXG4gIGdldCBwYWRkaW5nUmlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudC5ndXR0ZXIgLyAyO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscCcpXHJcbiAgZ2V0IHNob3dFcnIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkICYmIHRoaXMucGFyZW50LnNpemUgIT09ICdjb21wYWN0JyAmJiAhIXRoaXMuZXJyb3I7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBuZ0NvbnRyb2woKTogTmdDb250cm9sIHtcclxuICAgIHJldHVybiB0aGlzLm5nTW9kZWwgfHwgdGhpcy5mb3JtQ29udHJvbE5hbWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBASG9zdCgpXHJcbiAgICBwcml2YXRlIHBhcmVudDogU0VDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBwcml2YXRlIHJlcDogUmVzcG9uc2l2ZVNlcnZpY2UsXHJcbiAgICBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICApIHtcclxuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzZV0gbXVzdCBpbmNsdWRlICdzZS1jb250YWluZXInIGNvbXBvbmVudGApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENsYXNzKCk6IHRoaXMge1xyXG4gICAgY29uc3QgeyBlbCwgcmVuLCBjbHNNYXAsIGNvbCwgcGFyZW50LCBjZCB9ID0gdGhpcztcclxuICAgIHRoaXMubGFiZWxXaWR0aCA9IHBhcmVudC5sYWJlbFdpZHRoO1xyXG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5yZW1vdmVDbGFzcyhlbCwgY2xzKSk7XHJcbiAgICBjbHNNYXAubGVuZ3RoID0gMDtcclxuICAgIGNvbnN0IHJlcENscyA9XHJcbiAgICAgIHBhcmVudC5uekxheW91dCA9PT0gJ2hvcml6b250YWwnXHJcbiAgICAgICAgPyB0aGlzLnJlcC5nZW5DbHMoY29sICE9IG51bGwgPyBjb2wgOiBwYXJlbnQuY29sKVxyXG4gICAgICAgIDogW107XHJcbiAgICBjbHNNYXAucHVzaChgYW50LWZvcm0taXRlbWAsIC4uLnJlcENscywgYCR7cHJlZml4Q2xzfV9faXRlbWApO1xyXG4gICAgaWYgKHRoaXMubGluZSB8fCBwYXJlbnQubGluZSkge1xyXG4gICAgICBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19saW5lYCk7XHJcbiAgICB9XHJcbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLmFkZENsYXNzKGVsLCBjbHMpKTtcclxuICAgIGNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBiaW5kTW9kZWwoKSB7XHJcbiAgICBpZiAoIXRoaXMubmdDb250cm9sIHx8IHRoaXMuc3RhdHVzJCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuc3RhdHVzJCA9IHRoaXMubmdDb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIGNvbnN0IHN0YXR1cyA9IHJlcyAhPT0gJ1ZBTElEJztcclxuICAgICAgaWYgKCF0aGlzLm9uY2VGbGFnIHx8IHRoaXMuaW52YWxpZCA9PT0gc3RhdHVzKSB7XHJcbiAgICAgICAgdGhpcy5vbmNlRmxhZyA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaW52YWxpZCA9IHN0YXR1cztcclxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLl9hdXRvSWQpIHtcclxuICAgICAgY29uc3QgY29udHJvbCA9IGRlZXBHZXQoXHJcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvcixcclxuICAgICAgICAnX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCcsXHJcbiAgICAgICkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGlmIChjb250cm9sKSB7XHJcbiAgICAgICAgY29udHJvbC5pZCA9IHRoaXMuX2lkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIHRoaXMub25jZUZsYWcgPSB0aGlzLnBhcmVudC5maXJzdFZpc3VhbDtcclxuICAgIGlmICh0aGlzLmluaXRlZCkgdGhpcy5zZXRDbGFzcygpLmJpbmRNb2RlbCgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzcygpLmJpbmRNb2RlbCgpO1xyXG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdGF0dXMkKSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzJC51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=