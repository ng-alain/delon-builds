import { __decorate, __metadata } from 'tslib';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Host, Optional, ElementRef, Renderer2, TemplateRef, ChangeDetectorRef, ContentChild, ViewChild, NgModule } from '@angular/core';
import { toNumber, AlainConfigService, InputNumber, InputBoolean, isEmpty, DelonUtilModule } from '@delon/util';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { RequiredValidator, NgModel, FormControlName } from '@angular/forms';
import { ResponsiveService } from '@delon/theme';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import { CommonModule } from '@angular/common';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

/**
 * @fileoverview added by tsickle
 * Generated from: se-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SEContainerComponent {
    /**
     * @param {?} configSrv
     */
    constructor(configSrv) {
        this.errorNotify$ = new BehaviorSubject((/** @type {?} */ (null)));
        this.line = false;
        configSrv.attach(this, 'se', {
            size: 'default',
            nzLayout: 'horizontal',
            gutter: 32,
            col: 2,
            labelWidth: 150,
            firstVisual: false,
            ingoreDirty: false,
        });
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
    /**
     * @param {?} val
     * @return {?}
     */
    set errors(val) {
        this.setErrors(val);
    }
    /**
     * @return {?}
     */
    get errorNotify() {
        return this.errorNotify$.pipe(filter((/**
         * @param {?} v
         * @return {?}
         */
        v => v != null)));
    }
    /**
     * @param {?} errors
     * @return {?}
     */
    setErrors(errors) {
        for (const error of errors) {
            this.errorNotify$.next(error);
        }
    }
}
SEContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'se-container, [se-container]',
                exportAs: 'seContainer',
                template: `
    <div se-title *ngIf="title">
      <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
    </div>
    <ng-content></ng-content>
  `,
                host: {
                    '[class.ant-row]': `true`,
                    '[class.se__container]': `true`,
                    '[class.se__horizontal]': `nzLayout === 'horizontal'`,
                    '[class.se__vertical]': `nzLayout === 'vertical'`,
                    '[class.se__inline]': `nzLayout === 'inline'`,
                    '[class.se__compact]': `size === 'compact'`,
                    '[style.margin-left.px]': `-(gutter / 2)`,
                    '[style.margin-right.px]': `-(gutter / 2)`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
SEContainerComponent.ctorParameters = () => [
    { type: AlainConfigService }
];
SEContainerComponent.propDecorators = {
    colInCon: [{ type: Input, args: ['se-container',] }],
    col: [{ type: Input }],
    labelWidth: [{ type: Input }],
    title: [{ type: Input }],
    gutter: [{ type: Input }],
    nzLayout: [{ type: Input }],
    size: [{ type: Input }],
    firstVisual: [{ type: Input }],
    ingoreDirty: [{ type: Input }],
    line: [{ type: Input }],
    errors: [{ type: Input }]
};
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SEContainerComponent.prototype, "colInCon", void 0);
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SEContainerComponent.prototype, "col", void 0);
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
    __metadata("design:type", Boolean)
], SEContainerComponent.prototype, "ingoreDirty", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], SEContainerComponent.prototype, "line", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    SEContainerComponent.prototype.errorNotify$;
    /** @type {?} */
    SEContainerComponent.prototype.colInCon;
    /** @type {?} */
    SEContainerComponent.prototype.col;
    /** @type {?} */
    SEContainerComponent.prototype.labelWidth;
    /** @type {?} */
    SEContainerComponent.prototype.title;
    /**
     * @type {?}
     * @private
     */
    SEContainerComponent.prototype._gutter;
    /**
     * @type {?}
     * @private
     */
    SEContainerComponent.prototype._nzLayout;
    /** @type {?} */
    SEContainerComponent.prototype.size;
    /** @type {?} */
    SEContainerComponent.prototype.firstVisual;
    /** @type {?} */
    SEContainerComponent.prototype.ingoreDirty;
    /** @type {?} */
    SEContainerComponent.prototype.line;
}

/**
 * @fileoverview added by tsickle
 * Generated from: se-title.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @private
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
                exportAs: 'seTitle',
                template: '<ng-content></ng-content>',
                host: {
                    '[class.se__title]': 'true',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
SETitleComponent.ctorParameters = () => [
    { type: SEContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
    { type: ElementRef },
    { type: Renderer2 }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SETitleComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    SETitleComponent.prototype.parent;
    /**
     * @type {?}
     * @private
     */
    SETitleComponent.prototype.ren;
}

/**
 * @fileoverview added by tsickle
 * Generated from: se.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const prefixCls = `se`;
/** @type {?} */
let nextUniqueId = 0;
class SEComponent {
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
        this._id = `_se-${++nextUniqueId}`;
        this._autoId = true;
        if (parent == null) {
            throw new Error(`[se] must include 'se-container' component`);
        }
        this.el = el.nativeElement;
        parent.errorNotify
            .pipe(takeUntil(this.unsubscribe$), filter((/**
         * @param {?} w
         * @return {?}
         */
        w => this.inited && this.ngControl != null && this.ngControl.name === w.name)))
            .subscribe((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            this.error = item.error;
            this.updateStatus((/** @type {?} */ (this.ngControl.invalid)));
        }));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set error(val) {
        this.errorData = typeof val === 'string' || val instanceof TemplateRef ? { '': val } : val;
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
    get paddingValue() {
        return this.parent.gutter / 2;
    }
    /**
     * @return {?}
     */
    get showErr() {
        return this.invalid && !!this._error && !this.compact;
    }
    /**
     * @return {?}
     */
    get compact() {
        return this.parent.size === 'compact';
    }
    /**
     * @private
     * @return {?}
     */
    get ngControl() {
        return this.ngModel || this.formControlName;
    }
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    setClass() {
        const { el, ren, clsMap, col, parent, cdr, line, labelWidth, rep } = (/** @type {?} */ (this));
        (/** @type {?} */ (this))._labelWidth = parent.nzLayout === 'horizontal' ? (labelWidth != null ? labelWidth : parent.labelWidth) : null;
        clsMap.forEach((/**
         * @param {?} cls
         * @return {?}
         */
        cls => ren.removeClass(el, cls)));
        clsMap.length = 0;
        /** @type {?} */
        const repCls = parent.nzLayout === 'horizontal' ? rep.genCls(col != null ? col : parent.colInCon || parent.col) : [];
        clsMap.push(`ant-form-item`, ...repCls, `${prefixCls}__item`);
        if (line || parent.line) {
            clsMap.push(`${prefixCls}__line`);
        }
        clsMap.forEach((/**
         * @param {?} cls
         * @return {?}
         */
        cls => ren.addClass(el, cls)));
        cdr.detectChanges();
        return (/** @type {?} */ (this));
    }
    /**
     * @private
     * @return {?}
     */
    bindModel() {
        var _a, _b, _c;
        if (!this.ngControl || this.isBindModel)
            return;
        this.isBindModel = true;
        (/** @type {?} */ (this.ngControl.statusChanges)).pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => this.updateStatus(res === 'INVALID')));
        if (this._autoId) {
            /** @type {?} */
            const control = (/** @type {?} */ ((_b = (_a = ((/** @type {?} */ (this.ngControl.valueAccessor)))) === null || _a === void 0 ? void 0 : _a._elementRef) === null || _b === void 0 ? void 0 : _b.nativeElement));
            if (control.id) {
                this._id = control.id;
            }
            else {
                control.id = this._id;
            }
        }
        // auto required
        if (this.required !== true) {
            /** @type {?} */
            const rawValidators = (/** @type {?} */ ((_c = ((/** @type {?} */ (this.ngControl)))) === null || _c === void 0 ? void 0 : _c._rawValidators));
            this.required = rawValidators.find((/**
             * @param {?} w
             * @return {?}
             */
            w => w instanceof RequiredValidator)) != null;
            this.cdr.detectChanges();
        }
    }
    /**
     * @private
     * @param {?} invalid
     * @return {?}
     */
    updateStatus(invalid) {
        if (this.ngControl.disabled || this.ngControl.isDisabled) {
            return;
        }
        this.invalid = !this.onceFlag && invalid && this.parent.ingoreDirty === false && !this.ngControl.dirty ? false : invalid;
        /** @type {?} */
        const errors = this.ngControl.errors;
        if (errors != null && Object.keys(errors).length > 0) {
            /** @type {?} */
            const key = Object.keys(errors)[0] || '';
            /** @type {?} */
            const err = this.errorData[key];
            this._error = err != null ? err : this.errorData[''] || '';
        }
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    checkContent() {
        /** @type {?} */
        const el = this.contentElement.nativeElement;
        /** @type {?} */
        const cls = `${prefixCls}__item-empty`;
        if (isEmpty(el)) {
            this.ren.addClass(el, cls);
        }
        else {
            this.ren.removeClass(el, cls);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.checkContent();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.onceFlag = this.parent.firstVisual;
        if (this.inited) {
            this.setClass().bindModel();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setClass().bindModel();
        this.inited = true;
        if (this.onceFlag) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                this.updateStatus((/** @type {?} */ (this.ngControl.invalid)));
                this.onceFlag = false;
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
    }
}
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
SEComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: SEContainerComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: ResponsiveService },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
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

/**
 * @fileoverview added by tsickle
 * Generated from: se.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [SEContainerComponent, SEComponent, SETitleComponent];
class SEModule {
}
SEModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule, NzToolTipModule, NzIconModule, NzOutletModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: se.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SEError() { }
/**
 * @record
 */
function SEErrorRefresh() { }
if (false) {
    /** @type {?} */
    SEErrorRefresh.prototype.name;
    /** @type {?} */
    SEErrorRefresh.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: edit.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SEComponent, SEContainerComponent, SEModule, SETitleComponent };
//# sourceMappingURL=edit.js.map
