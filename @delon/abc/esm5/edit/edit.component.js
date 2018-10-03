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
                    template: "<div class=\"ant-form-item-label se__label\"\n  [class.se__nolabel]=\"!_label && !_labelTpl\" [style.width.px]=\"labelWidth\">\n  <label *ngIf=\"_label; else _labelTpl\" [attr.for]=\"_id\" [ngClass]=\"{'ant-form-item-required': required}\">\n    {{_label}}\n    <span class=\"se__label-optional\">\n      {{ optional }}\n      <nz-tooltip *ngIf=\"optionalHelp\" [nzTitle]=\"optionalHelp\">\n        <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\n      </nz-tooltip>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control-wrapper se__control\">\n  <div class=\"ant-form-item-control {{controlClass}}\" [class.has-error]=\"invalid\">\n    <ng-content></ng-content>\n    <se-error *ngIf=\"showErr\">{{error}}</se-error>\n    <div *ngIf=\"extra\" class=\"ant-form-extra\">{{extra}}</div>\n  </div>\n</div>\n",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2VkaXQvIiwic291cmNlcyI6WyJlZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFFWCxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osUUFBUSxFQUVSLGlCQUFpQixFQUNqQix1QkFBdUIsRUFFdkIsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFHckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFFbEUsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDOztBQUN2QixJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7O0lBNEZuQixxQkFHVSxNQUE0QixFQUM1QixLQUNSLEVBQWMsRUFDTixLQUNBO1FBSkEsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDNUIsUUFBRyxHQUFILEdBQUc7UUFFSCxRQUFHLEdBQUgsR0FBRztRQUNILE9BQUUsR0FBRixFQUFFO3NCQXBGZSxFQUFFO3NCQUNaLEtBQUs7d0JBQ0gsS0FBSzt1QkFDZCxLQUFLOzBCQUNGLElBQUk7c0JBZ0JSLEVBQUU7d0JBa0JBLEtBQUs7NEJBR08sRUFBRTttQkFRbkIsU0FBTyxZQUFZLEVBQUk7dUJBQ25CLElBQUk7UUFvQ1osSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksQ0FB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QjtnQkFkeEIsVUFBVTtnQkFDVixTQUFTO2dCQUtULGlCQUFpQjs7OzBCQXlCaEIsWUFBWSxTQUFDLE9BQU87a0NBRXBCLFlBQVksU0FBQyxlQUFlOzJCQVU1QixLQUFLOytCQUdMLEtBQUs7d0JBR0wsS0FBSzt3QkFHTCxLQUFLO3dCQUtMLEtBQUs7c0JBVUwsS0FBSzsyQkFJTCxLQUFLOytCQUlMLEtBQUs7cUJBR0wsS0FBSzt1QkFTTCxLQUFLOzhCQU1MLFdBQVcsU0FBQyx1QkFBdUI7K0JBS25DLFdBQVcsU0FBQyx3QkFBd0I7MEJBS3BDLFdBQVcsU0FBQywrQkFBK0I7OztRQW5DM0MsV0FBVyxDQUFDLElBQUksQ0FBQzs7OztRQUlqQixZQUFZLEVBQUU7Ozs7UUFnQmQsWUFBWSxDQUFDLElBQUksQ0FBQzs7O3NCQTdGckI7O1NBaUNhLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgT25DaGFuZ2VzLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIENvbnRlbnRDaGlsZCxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25EZXN0cm95LFxuICBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZGVsLCBGb3JtQ29udHJvbE5hbWUsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBSZXNwb25zaXZlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwR2V0LCBJbnB1dE51bWJlciwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBTRUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC1jb250YWluZXIuY29tcG9uZW50JztcblxuY29uc3QgcHJlZml4Q2xzID0gYHNlYDtcbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTRUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgc3RhdHVzJDogU3Vic2NyaXB0aW9uO1xuICBAQ29udGVudENoaWxkKE5nTW9kZWwpXG4gIHByaXZhdGUgcmVhZG9ubHkgbmdNb2RlbDogTmdNb2RlbDtcbiAgQENvbnRlbnRDaGlsZChGb3JtQ29udHJvbE5hbWUpXG4gIHByaXZhdGUgcmVhZG9ubHkgZm9ybUNvbnRyb2xOYW1lOiBGb3JtQ29udHJvbE5hbWU7XG4gIHByaXZhdGUgY2xzTWFwOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIG9uY2VGbGFnID0gZmFsc2U7XG4gIGludmFsaWQgPSBmYWxzZTtcbiAgbGFiZWxXaWR0aCA9IG51bGw7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKVxuICBvcHRpb25hbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIG9wdGlvbmFsSGVscDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGVycm9yOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZXh0cmE6IHN0cmluZztcblxuICBfbGFiZWwgPSAnJztcbiAgX2xhYmVsVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgbGFiZWwodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fbGFiZWwgPSBudWxsO1xuICAgICAgdGhpcy5fbGFiZWxUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbGFiZWwgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIobnVsbClcbiAgY29sOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIHJlcXVpcmVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgY29udHJvbENsYXNzOiBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoKVxuICBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgdGhpcy5fYXV0b0lkID0gZmFsc2U7XG4gIH1cblxuICBfaWQgPSBgX3NlLSR7bmV4dFVuaXF1ZUlkKyt9YDtcbiAgX2F1dG9JZCA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbihudWxsKVxuICBsaW5lOiBib29sZWFuO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctbGVmdC5weCcpXG4gIGdldCBwYWRkaW5nTGVmdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5ndXR0ZXIgLyAyO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLXJpZ2h0LnB4JylcbiAgZ2V0IHBhZGRpbmdSaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5ndXR0ZXIgLyAyO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscCcpXG4gIGdldCBzaG93RXJyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgJiYgdGhpcy5wYXJlbnQuc2l6ZSAhPT0gJ2NvbXBhY3QnICYmICEhdGhpcy5lcnJvcjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IG5nQ29udHJvbCgpOiBOZ0NvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLm5nTW9kZWwgfHwgdGhpcy5mb3JtQ29udHJvbE5hbWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBIb3N0KClcbiAgICBwcml2YXRlIHBhcmVudDogU0VDb250YWluZXJDb21wb25lbnQsXG4gICAgcHJpdmF0ZSByZXA6IFJlc3BvbnNpdmVTZXJ2aWNlLFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc2VdIG11c3QgaW5jbHVkZSAnc2UtY29udGFpbmVyJyBjb21wb25lbnRgKTtcbiAgICB9XG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCk6IHRoaXMge1xuICAgIGNvbnN0IHsgZWwsIHJlbiwgY2xzTWFwLCBjb2wsIHBhcmVudCwgY2QgfSA9IHRoaXM7XG4gICAgdGhpcy5sYWJlbFdpZHRoID0gcGFyZW50LmxhYmVsV2lkdGg7XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5yZW1vdmVDbGFzcyhlbCwgY2xzKSk7XG4gICAgY2xzTWFwLmxlbmd0aCA9IDA7XG4gICAgY29uc3QgcmVwQ2xzID1cbiAgICAgIHBhcmVudC5uekxheW91dCA9PT0gJ2hvcml6b250YWwnXG4gICAgICAgID8gdGhpcy5yZXAuZ2VuQ2xzKGNvbCAhPSBudWxsID8gY29sIDogcGFyZW50LmNvbClcbiAgICAgICAgOiBbXTtcbiAgICBjbHNNYXAucHVzaChgYW50LWZvcm0taXRlbWAsIC4uLnJlcENscywgYCR7cHJlZml4Q2xzfV9faXRlbWApO1xuICAgIGlmICh0aGlzLmxpbmUgfHwgcGFyZW50LmxpbmUpIHtcbiAgICAgIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX2xpbmVgKTtcbiAgICB9XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5hZGRDbGFzcyhlbCwgY2xzKSk7XG4gICAgY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBiaW5kTW9kZWwoKSB7XG4gICAgaWYgKCF0aGlzLm5nQ29udHJvbCB8fCB0aGlzLnN0YXR1cyQpIHJldHVybjtcblxuICAgIHRoaXMuc3RhdHVzJCA9IHRoaXMubmdDb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBjb25zdCBzdGF0dXMgPSByZXMgIT09ICdWQUxJRCc7XG4gICAgICBpZiAoIXRoaXMub25jZUZsYWcgfHwgdGhpcy5pbnZhbGlkID09PSBzdGF0dXMpIHtcbiAgICAgICAgdGhpcy5vbmNlRmxhZyA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW52YWxpZCA9IHN0YXR1cztcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLl9hdXRvSWQpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBkZWVwR2V0KFxuICAgICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yLFxuICAgICAgICAnX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCcsXG4gICAgICApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgY29udHJvbC5pZCA9IHRoaXMuX2lkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMub25jZUZsYWcgPSB0aGlzLnBhcmVudC5maXJzdFZpc3VhbDtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHRoaXMuc2V0Q2xhc3MoKS5iaW5kTW9kZWwoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCkuYmluZE1vZGVsKCk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RhdHVzJCkge1xuICAgICAgdGhpcy5zdGF0dXMkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=