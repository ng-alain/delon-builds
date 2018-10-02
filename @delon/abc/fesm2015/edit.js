import { __decorate, __metadata } from 'tslib';
import { Component, Input, TemplateRef, Host, ElementRef, Renderer2, Optional, ContentChild, ChangeDetectorRef, ChangeDetectionStrategy, HostBinding, NgModule } from '@angular/core';
import { toNumber, InputNumber, InputBoolean, deepGet, DelonUtilModule } from '@delon/util';
import { animate, style, transition, trigger } from '@angular/animations';
import { NgModel, FormControlName } from '@angular/forms';
import { ResponsiveService } from '@delon/theme';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SEConfig {
    constructor() {
        /**
         * 大小，默认：`default`
         * - `compact` 紧凑型，强制忽略 `error`、`extra` 展示
         */
        this.size = 'default';
        /**
         * 布局类型，等同 `nzLayout`
         * - `inline` 时强制大小为 `compact`
         */
        this.nzLayout = 'horizontal';
        /**
         * 间距，当 `nzLayout:horizontal` 时有效，默认：`32`
         */
        this.gutter = 32;
        /**
         * 列数，默认：`2`
         */
        this.col = 2;
        /**
         * 标签文本宽度，单位：`px`，默认：`150`
         */
        this.labelWidth = 150;
        /**
         * 是否立即呈现错误视觉
         */
        this.firstVisual = false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SEContainerComponent {
    /**
     * @param {?} cog
     */
    constructor(cog) {
        //#region fields
        this._title = '';
        this.line = false;
        Object.assign(this, cog);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        if (value instanceof TemplateRef) {
            this._title = null;
            this._titleTpl = value;
        }
        else {
            this._title = value;
        }
    }
    /**
     * @return {?}
     */
    get gutter() {
        return this.nzLayout === 'horizontal' ? this._gutter : 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set gutter(value) {
        this._gutter = toNumber(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set col(value) {
        /** @type {?} */
        const a = toNumber(value, 0);
        if (a <= 0)
            return;
        this._col = toNumber(value, 0);
    }
    /**
     * @return {?}
     */
    get col() {
        return this._col;
    }
    /**
     * @return {?}
     */
    get nzLayout() {
        return this._nzLayout;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzLayout(value) {
        this._nzLayout = value;
        if (value === 'inline') {
            this.size = 'compact';
        }
    }
}
SEContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'se-container, [se-container]',
                template: "<div class=\"ant-row se__container se__{{nzLayout}} se__{{size}}\" [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\r\n  <se-title *ngIf=\"_title || _titleTpl\">\r\n    <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\r\n  </se-title>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
SEContainerComponent.ctorParameters = () => [
    { type: SEConfig }
];
SEContainerComponent.propDecorators = {
    title: [{ type: Input }],
    gutter: [{ type: Input }],
    col: [{ type: Input, args: ['se-container',] }],
    labelWidth: [{ type: Input }],
    nzLayout: [{ type: Input }],
    size: [{ type: Input }],
    firstVisual: [{ type: Input }],
    line: [{ type: Input }]
};
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SEContainerComponent.prototype, "labelWidth", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], SEContainerComponent.prototype, "firstVisual", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], SEContainerComponent.prototype, "line", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SEErrorComponent {
}
SEErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'se-error',
                preserveWhitespaces: false,
                animations: [
                    trigger('errorAnt', [
                        transition('void => *', [
                            style({
                                opacity: 0,
                                transform: 'translateY(-5px)',
                            }),
                            animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                                opacity: 1,
                                transform: 'translateY(0)',
                            })),
                        ]),
                        transition('* => void', [
                            style({
                                opacity: 1,
                                transform: 'translateY(0)',
                            }),
                            animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                                opacity: 0,
                                transform: 'translateY(-5px)',
                            })),
                        ]),
                    ]),
                ],
                template: `
  <div [@errorAnt]>
    <ng-content></ng-content>
  </div>`,
                host: {
                    '[class.ant-form-explain]': 'true',
                },
                styles: [`
      :host {
        display: block;
      }
    `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SETitleComponent {
    /**
     * @param {?} parent
     * @param {?} el
     * @param {?} ren
     */
    constructor(parent, el, ren) {
        this.parent = parent;
        this.ren = ren;
        if (parent == null) {
            throw new Error(`[se-title] must include 'se-container' component`);
        }
        this.el = el.nativeElement;
    }
    /**
     * @return {?}
     */
    setClass() {
        const { gutter } = this.parent;
        const { el } = this;
        this.ren.setStyle(el, 'padding-left', `${gutter / 2}px`);
        this.ren.setStyle(el, 'padding-right', `${gutter / 2}px`);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClass();
    }
}
SETitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'se-title, [se-title]',
                template: '<ng-content></ng-content>',
                host: {
                    '[class.se__title]': 'true',
                }
            }] }
];
/** @nocollapse */
SETitleComponent.ctorParameters = () => [
    { type: SEContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
    { type: ElementRef },
    { type: Renderer2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const prefixCls = `se`;
/** @type {?} */
let nextUniqueId = 0;
class SEComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [
    SEContainerComponent,
    SEComponent,
    SEErrorComponent,
    SETitleComponent,
];
class SEModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: SEModule, providers: [SEConfig] };
    }
}
SEModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule, NgZorroAntdModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { SEContainerComponent, SEErrorComponent, SETitleComponent, SEComponent, SEConfig, SEModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9lZGl0L2VkaXQuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWJjL2VkaXQvZWRpdC1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2VkaXQvZWRpdC1lcnJvci5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvZWRpdC9lZGl0LXRpdGxlLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy9lZGl0L2VkaXQuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2VkaXQvZWRpdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNFQ29uZmlnIHtcclxuICAvKipcclxuICAgKiDDpcKkwqfDpcKwwo/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZGVmYXVsdGBcclxuICAgKiAtIGBjb21wYWN0YCDDp8K0wqfDpcKHwpHDpcKewovDr8K8wozDpcK8wrrDpcKIwrbDpcK/wr3Dp8KVwqUgYGVycm9yYMOjwoDCgWBleHRyYWAgw6XCscKVw6fCpMK6XHJcbiAgICovXHJcbiAgc2l6ZTogJ2RlZmF1bHQnIHwgJ2NvbXBhY3QnID0gJ2RlZmF1bHQnO1xyXG4gIC8qKlxyXG4gICAqIMOlwrjCg8OlwrHCgMOnwrHCu8Olwp7Ci8OvwrzCjMOnwq3CicOlwpDCjCBgbnpMYXlvdXRgXHJcbiAgICogLSBgaW5saW5lYCDDpsKXwrbDpcK8wrrDpcKIwrbDpcKkwqfDpcKwwo/DpMK4wrogYGNvbXBhY3RgXHJcbiAgICovXHJcbiAgbnpMYXlvdXQ6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgfCAnaW5saW5lJyA9ICdob3Jpem9udGFsJztcclxuICAvKipcclxuICAgKiDDqcKXwrTDqMK3wp3Dr8K8wozDpcK9wpMgYG56TGF5b3V0Omhvcml6b250YWxgIMOmwpfCtsOmwpzCicOmwpXCiMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAzMmBcclxuICAgKi9cclxuICBndXR0ZXI/ID0gMzI7XHJcbiAgLyoqXHJcbiAgICogw6XCiMKXw6bClcKww6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDJgXHJcbiAgICovXHJcbiAgY29sPyA9IDI7XHJcbiAgLyoqXHJcbiAgICogw6bCoMKHw6fCrcK+w6bClsKHw6bCnMKsw6XCrsK9w6XCusKmw6/CvMKMw6XCjcKVw6TCvcKNw6/CvMKaYHB4YMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxNTBgXHJcbiAgICovXHJcbiAgbGFiZWxXaWR0aD8gPSAxNTA7XHJcbiAgLyoqXHJcbiAgICogw6bCmMKvw6XCkMKmw6fCq8KLw6XCjcKzw6XCkcKIw6fCjsKww6nClMKZw6jCr8Kvw6jCp8KGw6jCp8KJXHJcbiAgICovXHJcbiAgZmlyc3RWaXN1YWw/ID0gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdG9OdW1iZXIsIElucHV0TnVtYmVyLCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7IFNFQ29uZmlnIH0gZnJvbSAnLi9lZGl0LmNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NlLWNvbnRhaW5lciwgW3NlLWNvbnRhaW5lcl0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTRUNvbnRhaW5lckNvbXBvbmVudCB7XHJcbiAgLy8jcmVnaW9uIGZpZWxkc1xyXG5cclxuICBfdGl0bGUgPSAnJztcclxuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcclxuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBndXR0ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uekxheW91dCA9PT0gJ2hvcml6b250YWwnID8gdGhpcy5fZ3V0dGVyIDogMDtcclxuICB9XHJcbiAgc2V0IGd1dHRlcih2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9ndXR0ZXIgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2d1dHRlcjogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoJ3NlLWNvbnRhaW5lcicpXHJcbiAgc2V0IGNvbCh2YWx1ZTogYW55KSB7XHJcbiAgICBjb25zdCBhID0gdG9OdW1iZXIodmFsdWUsIDApO1xyXG4gICAgaWYgKGEgPD0gMCkgcmV0dXJuO1xyXG4gICAgdGhpcy5fY29sID0gdG9OdW1iZXIodmFsdWUsIDApO1xyXG4gIH1cclxuICBnZXQgY29sKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbDtcclxuICB9XHJcbiAgcHJpdmF0ZSBfY29sOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0TnVtYmVyKG51bGwpXHJcbiAgbGFiZWxXaWR0aDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBuekxheW91dCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9uekxheW91dDtcclxuICB9XHJcbiAgc2V0IG56TGF5b3V0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX256TGF5b3V0ID0gdmFsdWU7XHJcbiAgICBpZiAodmFsdWUgPT09ICdpbmxpbmUnKSB7XHJcbiAgICAgIHRoaXMuc2l6ZSA9ICdjb21wYWN0JztcclxuICAgIH1cclxuICB9XHJcbiAgcHJpdmF0ZSBfbnpMYXlvdXQ6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBzaXplOiAnZGVmYXVsdCcgfCAnY29tcGFjdCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgZmlyc3RWaXN1YWw6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgbGluZSA9IGZhbHNlO1xyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IoY29nOiBTRUNvbmZpZykge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2UtZXJyb3InLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ2Vycm9yQW50JywgW1xyXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTVweCknLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoXHJcbiAgICAgICAgICAnMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSknLFxyXG4gICAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICksXHJcbiAgICAgIF0pLFxyXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoXHJcbiAgICAgICAgICAnMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSknLFxyXG4gICAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01cHgpJyxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICksXHJcbiAgICAgIF0pLFxyXG4gICAgXSksXHJcbiAgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgW0BlcnJvckFudF0+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+YCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1mb3JtLWV4cGxhaW5dJzogJ3RydWUnLFxyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIDpob3N0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU0VFcnJvckNvbXBvbmVudCB7fVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBIb3N0LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU0VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NlLXRpdGxlLCBbc2UtdGl0bGVdJyxcclxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3Muc2VfX3RpdGxlXSc6ICd0cnVlJyxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU0VUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASG9zdCgpXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IFNFQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbjogUmVuZGVyZXIyLFxyXG4gICkge1xyXG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3NlLXRpdGxlXSBtdXN0IGluY2x1ZGUgJ3NlLWNvbnRhaW5lcicgY29tcG9uZW50YCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3MoKSB7XHJcbiAgICBjb25zdCB7IGd1dHRlciB9ID0gdGhpcy5wYXJlbnQ7XHJcbiAgICBjb25zdCB7IGVsIH0gPSB0aGlzO1xyXG4gICAgdGhpcy5yZW4uc2V0U3R5bGUoZWwsICdwYWRkaW5nLWxlZnQnLCBgJHtndXR0ZXIgLyAyfXB4YCk7XHJcbiAgICB0aGlzLnJlbi5zZXRTdHlsZShlbCwgJ3BhZGRpbmctcmlnaHQnLCBgJHtndXR0ZXIgLyAyfXB4YCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2V0Q2xhc3MoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBIb3N0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgT25EZXN0cm95LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZGVsLCBGb3JtQ29udHJvbE5hbWUsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBSZXNwb25zaXZlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IGRlZXBHZXQsIElucHV0TnVtYmVyLCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBTRUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC1jb250YWluZXIuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHByZWZpeENscyA9IGBzZWA7XHJcbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU0VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzdGF0dXMkOiBTdWJzY3JpcHRpb247XHJcbiAgQENvbnRlbnRDaGlsZChOZ01vZGVsKVxyXG4gIHByaXZhdGUgcmVhZG9ubHkgbmdNb2RlbDogTmdNb2RlbDtcclxuICBAQ29udGVudENoaWxkKEZvcm1Db250cm9sTmFtZSlcclxuICBwcml2YXRlIHJlYWRvbmx5IGZvcm1Db250cm9sTmFtZTogRm9ybUNvbnRyb2xOYW1lO1xyXG4gIHByaXZhdGUgY2xzTWFwOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBvbmNlRmxhZyA9IGZhbHNlO1xyXG4gIGludmFsaWQgPSBmYWxzZTtcclxuICBsYWJlbFdpZHRoID0gbnVsbDtcclxuXHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgQElucHV0KClcclxuICBvcHRpb25hbDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIG9wdGlvbmFsSGVscDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGVycm9yOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZXh0cmE6IHN0cmluZztcclxuXHJcbiAgX2xhYmVsID0gJyc7XHJcbiAgX2xhYmVsVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGxhYmVsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl9sYWJlbCA9IG51bGw7XHJcbiAgICAgIHRoaXMuX2xhYmVsVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9sYWJlbCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBASW5wdXROdW1iZXIobnVsbClcclxuICBjb2w6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbnRyb2xDbGFzczogc3RyaW5nID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2lkID0gdmFsdWU7XHJcbiAgICB0aGlzLl9hdXRvSWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIF9pZCA9IGBfc2UtJHtuZXh0VW5pcXVlSWQrK31gO1xyXG4gIF9hdXRvSWQgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4obnVsbClcclxuICBsaW5lOiBib29sZWFuO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1sZWZ0LnB4JylcclxuICBnZXQgcGFkZGluZ0xlZnQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudC5ndXR0ZXIgLyAyO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLXJpZ2h0LnB4JylcclxuICBnZXQgcGFkZGluZ1JpZ2h0KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ3V0dGVyIC8gMjtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWZvcm0taXRlbS13aXRoLWhlbHAnKVxyXG4gIGdldCBzaG93RXJyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCAmJiB0aGlzLnBhcmVudC5zaXplICE9PSAnY29tcGFjdCcgJiYgISF0aGlzLmVycm9yO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgbmdDb250cm9sKCk6IE5nQ29udHJvbCB7XHJcbiAgICByZXR1cm4gdGhpcy5uZ01vZGVsIHx8IHRoaXMuZm9ybUNvbnRyb2xOYW1lO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEhvc3QoKVxyXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IFNFQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSByZXA6IFJlc3BvbnNpdmVTZXJ2aWNlLFxyXG4gICAgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgKSB7XHJcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc2VdIG11c3QgaW5jbHVkZSAnc2UtY29udGFpbmVyJyBjb21wb25lbnRgKTtcclxuICAgIH1cclxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB0aGlzIHtcclxuICAgIGNvbnN0IHsgZWwsIHJlbiwgY2xzTWFwLCBjb2wsIHBhcmVudCwgY2QgfSA9IHRoaXM7XHJcbiAgICB0aGlzLmxhYmVsV2lkdGggPSBwYXJlbnQubGFiZWxXaWR0aDtcclxuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscykpO1xyXG4gICAgY2xzTWFwLmxlbmd0aCA9IDA7XHJcbiAgICBjb25zdCByZXBDbHMgPVxyXG4gICAgICBwYXJlbnQubnpMYXlvdXQgPT09ICdob3Jpem9udGFsJ1xyXG4gICAgICAgID8gdGhpcy5yZXAuZ2VuQ2xzKGNvbCAhPSBudWxsID8gY29sIDogcGFyZW50LmNvbClcclxuICAgICAgICA6IFtdO1xyXG4gICAgY2xzTWFwLnB1c2goYGFudC1mb3JtLWl0ZW1gLCAuLi5yZXBDbHMsIGAke3ByZWZpeENsc31fX2l0ZW1gKTtcclxuICAgIGlmICh0aGlzLmxpbmUgfHwgcGFyZW50LmxpbmUpIHtcclxuICAgICAgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9fbGluZWApO1xyXG4gICAgfVxyXG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5hZGRDbGFzcyhlbCwgY2xzKSk7XHJcbiAgICBjZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYmluZE1vZGVsKCkge1xyXG4gICAgaWYgKCF0aGlzLm5nQ29udHJvbCB8fCB0aGlzLnN0YXR1cyQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnN0YXR1cyQgPSB0aGlzLm5nQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICBjb25zdCBzdGF0dXMgPSByZXMgIT09ICdWQUxJRCc7XHJcbiAgICAgIGlmICghdGhpcy5vbmNlRmxhZyB8fCB0aGlzLmludmFsaWQgPT09IHN0YXR1cykge1xyXG4gICAgICAgIHRoaXMub25jZUZsYWcgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmludmFsaWQgPSBzdGF0dXM7XHJcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5fYXV0b0lkKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBkZWVwR2V0KFxyXG4gICAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IsXHJcbiAgICAgICAgJ19lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQnLFxyXG4gICAgICApIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBpZiAoY29udHJvbCkge1xyXG4gICAgICAgIGNvbnRyb2wuaWQgPSB0aGlzLl9pZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLm9uY2VGbGFnID0gdGhpcy5wYXJlbnQuZmlyc3RWaXN1YWw7XHJcbiAgICBpZiAodGhpcy5pbml0ZWQpIHRoaXMuc2V0Q2xhc3MoKS5iaW5kTW9kZWwoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3MoKS5iaW5kTW9kZWwoKTtcclxuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3RhdHVzJCkge1xyXG4gICAgICB0aGlzLnN0YXR1cyQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgU0VDb25maWcgfSBmcm9tICcuL2VkaXQuY29uZmlnJztcclxuaW1wb3J0IHsgU0VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNFQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNFRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtZXJyb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU0VUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC10aXRsZS5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtcclxuICBTRUNvbnRhaW5lckNvbXBvbmVudCxcclxuICBTRUNvbXBvbmVudCxcclxuICBTRUVycm9yQ29tcG9uZW50LFxyXG4gIFNFVGl0bGVDb21wb25lbnQsXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxyXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNFTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBTRU1vZHVsZSwgcHJvdmlkZXJzOiBbU0VDb25maWddIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztvQkFLZ0MsU0FBUzs7Ozs7d0JBS1UsWUFBWTs7OztzQkFJbkQsRUFBRTs7OzttQkFJTCxDQUFDOzs7OzBCQUlNLEdBQUc7Ozs7MkJBSUYsS0FBSzs7Q0FDckI7Ozs7Ozs7Ozs7SUM4Q0MsWUFBWSxHQUFhOztzQkE3RGhCLEVBQUU7b0JBeURKLEtBQUs7UUFLVixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztLQUMxQjs7Ozs7SUE3REQsSUFDSSxLQUFLLENBQUMsS0FBZ0M7UUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtLQUNGOzs7O0lBRUQsSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztLQUMxRDs7Ozs7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hDOzs7OztJQUdELElBQ0ksR0FBRyxDQUFDLEtBQVU7O1FBQ2hCLE1BQU0s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