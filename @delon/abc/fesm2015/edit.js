import { __decorate, __metadata } from 'tslib';
import * as i0 from '@angular/core';
import { ɵɵdirectiveInject, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵsetClassMetadata, Component, Input, ElementRef, Renderer2, Host, Optional, TemplateRef, ChangeDetectorRef, ContentChild, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';
import { toNumber, AlainConfigService, InputNumber, InputBoolean, isEmpty, DelonUtilModule } from '@delon/util';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { RequiredValidator, NgModel, FormControlName } from '@angular/forms';
import { ResponsiveService } from '@delon/theme';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import { NgIf, NgClass, CommonModule } from '@angular/common';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzTooltipDirective, NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

class SEContainerComponent {
    constructor(configSrv) {
        this.errorNotify$ = new BehaviorSubject(null);
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
    get gutter() {
        return this.nzLayout === 'horizontal' ? this._gutter : 0;
    }
    set gutter(value) {
        this._gutter = toNumber(value);
    }
    get nzLayout() {
        return this._nzLayout;
    }
    set nzLayout(value) {
        this._nzLayout = value;
        if (value === 'inline') {
            this.size = 'compact';
        }
    }
    set errors(val) {
        this.setErrors(val);
    }
    get errorNotify() {
        return this.errorNotify$.pipe(filter(v => v != null));
    }
    setErrors(errors) {
        for (const error of errors) {
            this.errorNotify$.next(error);
        }
    }
}
/** @nocollapse */ SEContainerComponent.ɵfac = function SEContainerComponent_Factory(t) { return new (t || SEContainerComponent)(ɵɵdirectiveInject(AlainConfigService)); };
/** @nocollapse */ SEContainerComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: SEContainerComponent, selector: "se-container, [se-container]", inputs: { colInCon: ["se-container", "colInCon"], col: "col", labelWidth: "labelWidth", title: "title", gutter: "gutter", nzLayout: "nzLayout", size: "size", firstVisual: "firstVisual", ingoreDirty: "ingoreDirty", line: "line", errors: "errors" }, host: { properties: { "class.ant-row": "true", "class.se__container": "true", "class.se__horizontal": "nzLayout === 'horizontal'", "class.se__vertical": "nzLayout === 'vertical'", "class.se__inline": "nzLayout === 'inline'", "class.se__compact": "size === 'compact'", "style.margin-left.px": "-(gutter / 2)", "style.margin-right.px": "-(gutter / 2)" } }, exportAs: ["seContainer"], ngImport: i0, template: `
    <div se-title *ngIf="title">
      <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
    </div>
    <ng-content></ng-content>
  `, isInline: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SEContainerComponent, [{
        type: Component,
        args: [{
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
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: AlainConfigService }]; }, { colInCon: [{
            type: Input,
            args: ['se-container']
        }], col: [{
            type: Input
        }], labelWidth: [{
            type: Input
        }], title: [{
            type: Input
        }], gutter: [{
            type: Input
        }], nzLayout: [{
            type: Input
        }], size: [{
            type: Input
        }], firstVisual: [{
            type: Input
        }], ingoreDirty: [{
            type: Input
        }], line: [{
            type: Input
        }], errors: [{
            type: Input
        }] }); })();

class SETitleComponent {
    constructor(parent, el, ren) {
        this.parent = parent;
        this.ren = ren;
        if (parent == null) {
            throw new Error(`[se-title] must include 'se-container' component`);
        }
        this.el = el.nativeElement;
    }
    setClass() {
        const { gutter } = this.parent;
        const { el } = this;
        this.ren.setStyle(el, 'padding-left', `${gutter / 2}px`);
        this.ren.setStyle(el, 'padding-right', `${gutter / 2}px`);
    }
    ngOnInit() {
        this.setClass();
    }
}
/** @nocollapse */ SETitleComponent.ɵfac = function SETitleComponent_Factory(t) { return new (t || SETitleComponent)(ɵɵdirectiveInject(SEContainerComponent, 9), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ SETitleComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: SETitleComponent, selector: "se-title, [se-title]", host: { properties: { "class.se__title": "true" } }, exportAs: ["seTitle"], ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SETitleComponent, [{
        type: Component,
        args: [{
                selector: 'se-title, [se-title]',
                exportAs: 'seTitle',
                template: '<ng-content></ng-content>',
                host: {
                    '[class.se__title]': 'true',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: SEContainerComponent, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }, { type: ElementRef }, { type: Renderer2 }]; }, null); })();

const prefixCls = `se`;
let nextUniqueId = 0;
class SEComponent {
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
            .pipe(takeUntil(this.unsubscribe$), filter(w => this.inited && this.ngControl != null && this.ngControl.name === w.name))
            .subscribe(item => {
            this.error = item.error;
            this.updateStatus(this.ngControl.invalid);
        });
    }
    set error(val) {
        this.errorData = typeof val === 'string' || val instanceof TemplateRef ? { '': val } : val;
    }
    set id(value) {
        this._id = value;
        this._autoId = false;
    }
    // #endregion
    get paddingValue() {
        return this.parent.gutter / 2;
    }
    get showErr() {
        return this.invalid && !!this._error && !this.compact;
    }
    get compact() {
        return this.parent.size === 'compact';
    }
    get ngControl() {
        return this.ngModel || this.formControlName;
    }
    setClass() {
        const { el, ren, clsMap, col, parent, cdr, line, labelWidth, rep } = this;
        this._labelWidth = parent.nzLayout === 'horizontal' ? (labelWidth != null ? labelWidth : parent.labelWidth) : null;
        clsMap.forEach(cls => ren.removeClass(el, cls));
        clsMap.length = 0;
        const repCls = parent.nzLayout === 'horizontal' ? rep.genCls(col != null ? col : parent.colInCon || parent.col) : [];
        clsMap.push(`ant-form-item`, ...repCls, `${prefixCls}__item`);
        if (line || parent.line) {
            clsMap.push(`${prefixCls}__line`);
        }
        clsMap.forEach(cls => ren.addClass(el, cls));
        cdr.detectChanges();
        return this;
    }
    bindModel() {
        var _a, _b;
        if (!this.ngControl || this.isBindModel)
            return;
        this.isBindModel = true;
        this.ngControl.statusChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(res => this.updateStatus(res === 'INVALID'));
        if (this._autoId) {
            const controlAccessor = this.ngControl.valueAccessor;
            const control = (_a = ((controlAccessor === null || controlAccessor === void 0 ? void 0 : controlAccessor.elementRef) || (controlAccessor === null || controlAccessor === void 0 ? void 0 : controlAccessor._elementRef))) === null || _a === void 0 ? void 0 : _a.nativeElement;
            if (!!control) {
                if (control.id) {
                    this._id = control.id;
                }
                else {
                    control.id = this._id;
                }
            }
        }
        // auto required
        if (this.required !== true) {
            const rawValidators = (_b = this.ngControl) === null || _b === void 0 ? void 0 : _b._rawValidators;
            this.required = rawValidators.find(w => w instanceof RequiredValidator) != null;
            this.cdr.detectChanges();
        }
    }
    updateStatus(invalid) {
        if (this.ngControl.disabled || this.ngControl.isDisabled) {
            return;
        }
        this.invalid = !this.onceFlag && invalid && this.parent.ingoreDirty === false && !this.ngControl.dirty ? false : invalid;
        const errors = this.ngControl.errors;
        if (errors != null && Object.keys(errors).length > 0) {
            const key = Object.keys(errors)[0] || '';
            const err = this.errorData[key];
            this._error = err != null ? err : this.errorData[''] || '';
        }
        this.cdr.detectChanges();
    }
    checkContent() {
        const el = this.contentElement.nativeElement;
        const cls = `${prefixCls}__item-empty`;
        if (isEmpty(el)) {
            this.ren.addClass(el, cls);
        }
        else {
            this.ren.removeClass(el, cls);
        }
    }
    ngAfterContentInit() {
        this.checkContent();
    }
    ngOnChanges() {
        this.onceFlag = this.parent.firstVisual;
        if (this.inited) {
            this.setClass().bindModel();
        }
    }
    ngAfterViewInit() {
        this.setClass().bindModel();
        this.inited = true;
        if (this.onceFlag) {
            Promise.resolve().then(() => {
                this.updateStatus(this.ngControl.invalid);
                this.onceFlag = false;
            });
        }
    }
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
    }
}
/** @nocollapse */ SEComponent.ɵfac = function SEComponent_Factory(t) { return new (t || SEComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SEContainerComponent, 9), ɵɵdirectiveInject(ResponsiveService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ SEComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: SEComponent, selector: "se", inputs: { optional: "optional", optionalHelp: "optionalHelp", optionalHelpColor: "optionalHelpColor", error: "error", extra: "extra", label: "label", col: "col", required: "required", controlClass: "controlClass", line: "line", labelWidth: "labelWidth", id: "id" }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue", "class.ant-form-item-has-error": "invalid", "class.ant-form-item-with-help": "showErr" } }, queries: [{ propertyName: "ngModel", first: true, predicate: NgModel, emitDistinctChangesOnly: false, descendants: true, static: true }, { propertyName: "formControlName", first: true, predicate: FormControlName, emitDistinctChangesOnly: false, descendants: true, static: true }], viewQueries: [{ propertyName: "contentElement", first: true, predicate: ["contentElement"], emitDistinctChangesOnly: false, descendants: true, static: true }], exportAs: ["se"], usesOnChanges: true, ngImport: i0, template: "<div class=\"ant-form-item-label\" [class.se__nolabel]=\"!label\" [style.width.px]=\"_labelWidth\">\n  <label *ngIf=\"label\" [attr.for]=\"_id\" class=\"se__label\" [ngClass]=\"{ 'ant-form-item-required': required }\">\n    <span class=\"se__label-text\">\n      <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    <span *ngIf=\"optional || optionalHelp\" class=\"se__label-optional\" [class.se__label-optional-no-text]=\"!optional\">\n      <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n      <i *ngIf=\"optionalHelp\" nz-tooltip [nzTooltipTitle]=\"optionalHelp\" [nzTooltipColor]=\"optionalHelpColor\" nz-icon nzType=\"question-circle\"></i>\n    </span>\n  </label>\n</div>\n<div class=\"ant-form-item-control se__control\">\n  <div class=\"ant-form-item-control-input {{ controlClass }}\">\n    <div class=\"ant-form-item-control-input-content\" (cdkObserveContent)=\"checkContent()\" #contentElement>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div class=\"ant-form-item-explain ant-form-item-explain-error\" *ngIf=\"showErr\">\n    <div @helpMotion>\n      <ng-container *nzStringTemplateOutlet=\"_error\">{{ _error }}</ng-container>\n    </div>\n  </div>\n  <div *ngIf=\"extra && !compact\" class=\"ant-form-item-extra\">\n    <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n  </div>\n</div>\n", directives: [{ type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipTitle", "nz-tooltip", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], animations: [helpMotion], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SEComponent, [{
        type: Component,
        args: [{
                selector: 'se',
                exportAs: 'se',
                templateUrl: './se.component.html',
                host: {
                    '[style.padding-left.px]': 'paddingValue',
                    '[style.padding-right.px]': 'paddingValue',
                    '[class.ant-form-item-has-error]': 'invalid',
                    '[class.ant-form-item-with-help]': 'showErr',
                },
                preserveWhitespaces: false,
                animations: [helpMotion],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ElementRef }, { type: SEContainerComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: ResponsiveService }, { type: Renderer2 }, { type: ChangeDetectorRef }]; }, { ngModel: [{
            type: ContentChild,
            args: [NgModel, { static: true }]
        }], formControlName: [{
            type: ContentChild,
            args: [FormControlName, { static: true }]
        }], contentElement: [{
            type: ViewChild,
            args: ['contentElement', { static: true }]
        }], optional: [{
            type: Input
        }], optionalHelp: [{
            type: Input
        }], optionalHelpColor: [{
            type: Input
        }], error: [{
            type: Input
        }], extra: [{
            type: Input
        }], label: [{
            type: Input
        }], col: [{
            type: Input
        }], required: [{
            type: Input
        }], controlClass: [{
            type: Input
        }], line: [{
            type: Input
        }], labelWidth: [{
            type: Input
        }], id: [{
            type: Input
        }] }); })();

const COMPONENTS = [SEContainerComponent, SEComponent, SETitleComponent];
class SEModule {
}
/** @nocollapse */ SEModule.ɵmod = ɵɵdefineNgModule({ type: SEModule });
/** @nocollapse */ SEModule.ɵinj = ɵɵdefineInjector({ factory: function SEModule_Factory(t) { return new (t || SEModule)(); }, imports: [[CommonModule, DelonUtilModule, NzToolTipModule, NzIconModule, NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SEModule, { declarations: [SEContainerComponent, SEComponent, SETitleComponent], imports: [CommonModule, DelonUtilModule, NzToolTipModule, NzIconModule, NzOutletModule], exports: [SEContainerComponent, SEComponent, SETitleComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SEModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, DelonUtilModule, NzToolTipModule, NzIconModule, NzOutletModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();
ɵɵsetComponentScope(SEContainerComponent, [NgIf, SETitleComponent, NzStringTemplateOutletDirective], []);

// /**
//  * Error collection
//  * - `name`: The value of` ngModel` or `formControlName`
//  * - `error`: Replaced error value
//  */
// errors: Array<{ name: string; error: SEErrorType }>;
// /**
//  * Whether force show error, even if the form component has not invalid, Default: `false`
//  * - `false`: Whether to display error by `invalid`
//  * - `true`: Force show display error
//  */
// force?: boolean;

/**
 * Generated bundle index. Do not edit.
 */

export { SEComponent, SEContainerComponent, SEModule, SETitleComponent };
//# sourceMappingURL=edit.js.map
