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
const prefixCls = `se`;
/** @type {?} */
let nextUniqueId = 0;
export class SEComponent {
    /**
     * @param {?} parent
     * @param {?} rep
     * @param {?} el
     * @param {?} ren
     * @param {?} cd
     */
    constructor(parent, rep, el, ren, cd) {
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
    set label(value) {
        if (value instanceof TemplateRef) {
            this._label = null;
            this._labelTpl = value;
        }
        else {
            this._label = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        this._id = value;
        this._autoId = false;
    }
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
     * @return {?}
     */
    setClass() {
        const { el, ren, clsMap, col, parent, cd } = this;
        this.labelWidth = parent.labelWidth;
        clsMap.forEach(cls => ren.removeClass(el, cls));
        clsMap.length = 0;
        /** @type {?} */
        const repCls = parent.nzLayout === 'horizontal'
            ? this.rep.genCls(col != null ? col : parent.col)
            : [];
        clsMap.push(`ant-form-item`, ...repCls, `${prefixCls}__item`);
        if (this.line || parent.line) {
            clsMap.push(`${prefixCls}__line`);
        }
        clsMap.forEach(cls => ren.addClass(el, cls));
        cd.detectChanges();
        return this;
    }
    /**
     * @return {?}
     */
    bindModel() {
        if (!this.ngControl || this.status$)
            return;
        this.status$ = this.ngControl.statusChanges.subscribe(res => {
            /** @type {?} */
            const status = res !== 'VALID';
            if (!this.onceFlag || this.invalid === status) {
                this.onceFlag = true;
                return;
            }
            this.invalid = status;
            this.cd.detectChanges();
        });
        if (this._autoId) {
            /** @type {?} */
            const control = /** @type {?} */ (deepGet(this.ngControl.valueAccessor, '_elementRef.nativeElement'));
            if (control) {
                control.id = this._id;
            }
        }
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
                template: "<div class=\"ant-form-item-label se__label\"\r\n  [class.se__nolabel]=\"!_label && !_labelTpl\" [style.width.px]=\"labelWidth\">\r\n  <label *ngIf=\"_label; else _labelTpl\" [attr.for]=\"_id\" [ngClass]=\"{'ant-form-item-required': required}\">\r\n    {{_label}}\r\n    <span class=\"se__label-optional\">\r\n      {{ optional }}\r\n      <nz-tooltip *ngIf=\"optionalHelp\" [nzTitle]=\"optionalHelp\">\r\n        <i nz-tooltip class=\"anticon anticon-question-circle-o\"></i>\r\n      </nz-tooltip>\r\n    </span>\r\n  </label>\r\n</div>\r\n<div class=\"ant-form-item-control-wrapper se__control\">\r\n  <div class=\"ant-form-item-control {{controlClass}}\" [class.has-error]=\"invalid\">\r\n    <ng-content></ng-content>\r\n    <se-error *ngIf=\"showErr\">{{error}}</se-error>\r\n    <div *ngIf=\"extra\" class=\"ant-form-extra\">{{extra}}</div>\r\n  </div>\r\n</div>\r\n",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SEComponent.ctorParameters = () => [
    { type: SEContainerComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: ResponsiveService },
    { type: ElementRef },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2VkaXQvIiwic291cmNlcyI6WyJlZGl0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFFWCxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osUUFBUSxFQUVSLGlCQUFpQixFQUNqQix1QkFBdUIsRUFFdkIsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFHckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFFbEUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDOztBQUN2QixJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7QUFRckIsTUFBTTs7Ozs7Ozs7SUFvRkosWUFHVSxNQUE0QixFQUM1QixLQUNSLEVBQWMsRUFDTixLQUNBO1FBSkEsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDNUIsUUFBRyxHQUFILEdBQUc7UUFFSCxRQUFHLEdBQUgsR0FBRztRQUNILE9BQUUsR0FBRixFQUFFO3NCQXBGZSxFQUFFO3NCQUNaLEtBQUs7d0JBQ0gsS0FBSzt1QkFDZCxLQUFLOzBCQUNGLElBQUk7c0JBZ0JSLEVBQUU7d0JBa0JBLEtBQUs7NEJBR08sRUFBRTttQkFRbkIsT0FBTyxZQUFZLEVBQUUsRUFBRTt1QkFDbkIsSUFBSTtRQW9DWixJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFD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LEtBQUs7b0JBR0wsS0FBSztvQkFHTCxLQUFLO29CQUtMLEtBQUs7a0JBVUwsS0FBSzt1QkFJTCxLQUFLOzJCQUlMLEtBQUs7aUJBR0wsS0FBSzttQkFTTCxLQUFLOzBCQU1MLFdBQVcsU0FBQyx1QkFBdUI7MkJBS25DLFdBQVcsU0FBQyx3QkFBd0I7c0JBS3BDLFdBQVcsU0FBQywrQkFBK0I7OztJQW5DM0MsV0FBVyxDQUFDLElBQUksQ0FBQzs7OztJQUlqQixZQUFZLEVBQUU7Ozs7SUFnQmQsWUFBWSxDQUFDLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBFbGVtZW50UmVmLFxyXG4gIFJlbmRlcmVyMixcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgSG9zdCxcclxuICBPcHRpb25hbCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIE9uRGVzdHJveSxcclxuICBIb3N0QmluZGluZyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdNb2RlbCwgRm9ybUNvbnRyb2xOYW1lLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5pbXBvcnQgeyBkZWVwR2V0LCBJbnB1dE51bWJlciwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgU0VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBwcmVmaXhDbHMgPSBgc2VgO1xyXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNFQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgc3RhdHVzJDogU3Vic2NyaXB0aW9uO1xyXG4gIEBDb250ZW50Q2hpbGQoTmdNb2RlbClcclxuICBwcml2YXRlIHJlYWRvbmx5IG5nTW9kZWw6IE5nTW9kZWw7XHJcbiAgQENvbnRlbnRDaGlsZChGb3JtQ29udHJvbE5hbWUpXHJcbiAgcHJpdmF0ZSByZWFkb25seSBmb3JtQ29udHJvbE5hbWU6IEZvcm1Db250cm9sTmFtZTtcclxuICBwcml2YXRlIGNsc01hcDogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgb25jZUZsYWcgPSBmYWxzZTtcclxuICBpbnZhbGlkID0gZmFsc2U7XHJcbiAgbGFiZWxXaWR0aCA9IG51bGw7XHJcblxyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgb3B0aW9uYWw6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBvcHRpb25hbEhlbHA6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBlcnJvcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGV4dHJhOiBzdHJpbmc7XHJcblxyXG4gIF9sYWJlbCA9ICcnO1xyXG4gIF9sYWJlbFRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKVxyXG4gIHNldCBsYWJlbCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fbGFiZWwgPSBudWxsO1xyXG4gICAgICB0aGlzLl9sYWJlbFRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fbGFiZWwgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0TnVtYmVyKG51bGwpXHJcbiAgY29sOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBjb250cm9sQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5fYXV0b0lkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBfaWQgPSBgX3NlLSR7bmV4dFVuaXF1ZUlkKyt9YDtcclxuICBfYXV0b0lkID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKG51bGwpXHJcbiAgbGluZTogYm9vbGVhbjtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctbGVmdC5weCcpXHJcbiAgZ2V0IHBhZGRpbmdMZWZ0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ3V0dGVyIC8gMjtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1yaWdodC5weCcpXHJcbiAgZ2V0IHBhZGRpbmdSaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lmd1dHRlciAvIDI7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1mb3JtLWl0ZW0td2l0aC1oZWxwJylcclxuICBnZXQgc2hvd0VycigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmludmFsaWQgJiYgdGhpcy5wYXJlbnQuc2l6ZSAhPT0gJ2NvbXBhY3QnICYmICEhdGhpcy5lcnJvcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IG5nQ29udHJvbCgpOiBOZ0NvbnRyb2wge1xyXG4gICAgcmV0dXJuIHRoaXMubmdNb2RlbCB8fCB0aGlzLmZvcm1Db250cm9sTmFtZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBIb3N0KClcclxuICAgIHByaXZhdGUgcGFyZW50OiBTRUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIHByaXZhdGUgcmVwOiBSZXNwb25zaXZlU2VydmljZSxcclxuICAgIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW46IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICkge1xyXG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3NlXSBtdXN0IGluY2x1ZGUgJ3NlLWNvbnRhaW5lcicgY29tcG9uZW50YCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdGhpcyB7XHJcbiAgICBjb25zdCB7IGVsLCByZW4sIGNsc01hcCwgY29sLCBwYXJlbnQsIGNkIH0gPSB0aGlzO1xyXG4gICAgdGhpcy5sYWJlbFdpZHRoID0gcGFyZW50LmxhYmVsV2lkdGg7XHJcbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLnJlbW92ZUNsYXNzKGVsLCBjbHMpKTtcclxuICAgIGNsc01hcC5sZW5ndGggPSAwO1xyXG4gICAgY29uc3QgcmVwQ2xzID1cclxuICAgICAgcGFyZW50Lm56TGF5b3V0ID09PSAnaG9yaXpvbnRhbCdcclxuICAgICAgICA/IHRoaXMucmVwLmdlbkNscyhjb2wgIT0gbnVsbCA/IGNvbCA6IHBhcmVudC5jb2wpXHJcbiAgICAgICAgOiBbXTtcclxuICAgIGNsc01hcC5wdXNoKGBhbnQtZm9ybS1pdGVtYCwgLi4ucmVwQ2xzLCBgJHtwcmVmaXhDbHN9X19pdGVtYCk7XHJcbiAgICBpZiAodGhpcy5saW5lIHx8IHBhcmVudC5saW5lKSB7XHJcbiAgICAgIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX2xpbmVgKTtcclxuICAgIH1cclxuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4uYWRkQ2xhc3MoZWwsIGNscykpO1xyXG4gICAgY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJpbmRNb2RlbCgpIHtcclxuICAgIGlmICghdGhpcy5uZ0NvbnRyb2wgfHwgdGhpcy5zdGF0dXMkKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5zdGF0dXMkID0gdGhpcy5uZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgY29uc3Qgc3RhdHVzID0gcmVzICE9PSAnVkFMSUQnO1xyXG4gICAgICBpZiAoIXRoaXMub25jZUZsYWcgfHwgdGhpcy5pbnZhbGlkID09PSBzdGF0dXMpIHtcclxuICAgICAgICB0aGlzLm9uY2VGbGFnID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pbnZhbGlkID0gc3RhdHVzO1xyXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMuX2F1dG9JZCkge1xyXG4gICAgICBjb25zdCBjb250cm9sID0gZGVlcEdldChcclxuICAgICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yLFxyXG4gICAgICAgICdfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50JyxcclxuICAgICAgKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgaWYgKGNvbnRyb2wpIHtcclxuICAgICAgICBjb250cm9sLmlkID0gdGhpcy5faWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5vbmNlRmxhZyA9IHRoaXMucGFyZW50LmZpcnN0VmlzdWFsO1xyXG4gICAgaWYgKHRoaXMuaW5pdGVkKSB0aGlzLnNldENsYXNzKCkuYmluZE1vZGVsKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzKCkuYmluZE1vZGVsKCk7XHJcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN0YXR1cyQpIHtcclxuICAgICAgdGhpcy5zdGF0dXMkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==