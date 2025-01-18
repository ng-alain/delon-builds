import * as i0 from '@angular/core';
import { inject, ElementRef, Renderer2, Component, ChangeDetectionStrategy, ViewEncapsulation, numberAttribute, booleanAttribute, Input, TemplateRef, ChangeDetectorRef, DestroyRef, ContentChild, ViewChild, NgModule } from '@angular/core';
import { filter, BehaviorSubject } from 'rxjs';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import * as i1 from '@delon/util/config';
import { CdkObserveContent } from '@angular/cdk/observers';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Validators, RequiredValidator, NgModel, FormControlName } from '@angular/forms';
import { ResponsiveService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import { NzFormStatusService } from 'ng-zorro-antd/core/form';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzTooltipDirective, NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CommonModule } from '@angular/common';

class SETitleComponent {
    constructor() {
        this.parentComp = inject(SEContainerComponent, { host: true, optional: true });
        this.el = inject(ElementRef).nativeElement;
        this.ren = inject(Renderer2);
        if (this.parentComp == null) {
            throw new Error(`[se-title] must include 'se-container' component`);
        }
    }
    setClass() {
        const { el } = this;
        const gutter = this.parentComp.gutter;
        this.ren.setStyle(el, 'padding-left', `${gutter / 2}px`);
        this.ren.setStyle(el, 'padding-right', `${gutter / 2}px`);
    }
    ngOnInit() {
        this.setClass();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: SETitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.1", type: SETitleComponent, isStandalone: true, selector: "se-title, [se-title]", host: { properties: { "class.se__title": "true" } }, exportAs: ["seTitle"], ngImport: i0, template: '<ng-content />', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: SETitleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'se-title, [se-title]',
                    exportAs: 'seTitle',
                    template: '<ng-content />',
                    host: {
                        '[class.se__title]': 'true'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: () => [] });
class SEContainerComponent {
    get gutter() {
        return this.nzLayout === 'horizontal' ? this._gutter : 0;
    }
    set gutter(value) {
        this._gutter = value;
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
    get margin() {
        return -(this.gutter / 2);
    }
    get errorNotify() {
        return this.errorNotify$.pipe(filter(v => v != null));
    }
    constructor(configSrv) {
        this.errorNotify$ = new BehaviorSubject(null);
        this.noColon = false;
        this.line = false;
        configSrv.attach(this, 'se', {
            size: 'default',
            nzLayout: 'horizontal',
            gutter: 32,
            col: 2,
            labelWidth: 150,
            firstVisual: false,
            ingoreDirty: false
        });
    }
    setErrors(errors) {
        for (const error of errors) {
            this.errorNotify$.next(error);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: SEContainerComponent, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.1", type: SEContainerComponent, isStandalone: true, selector: "se-container, [se-container]", inputs: { colInCon: ["se-container", "colInCon", (v) => (v == null ? null : numberAttribute(v))], col: ["col", "col", (v) => (v == null ? null : numberAttribute(v))], labelWidth: ["labelWidth", "labelWidth", (v) => (v == null ? null : numberAttribute(v))], noColon: ["noColon", "noColon", booleanAttribute], title: "title", gutter: ["gutter", "gutter", numberAttribute], nzLayout: "nzLayout", size: "size", firstVisual: ["firstVisual", "firstVisual", booleanAttribute], ingoreDirty: ["ingoreDirty", "ingoreDirty", booleanAttribute], line: ["line", "line", booleanAttribute], errors: "errors" }, host: { properties: { "class.ant-row": "true", "class.se__container": "true", "class.se__horizontal": "nzLayout === 'horizontal'", "class.se__vertical": "nzLayout === 'vertical'", "class.se__inline": "nzLayout === 'inline'", "class.se__compact": "size === 'compact'", "style.margin-left.px": "margin", "style.margin-right.px": "margin" } }, exportAs: ["seContainer"], ngImport: i0, template: `
    @if (title) {
      <div se-title>
        <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
      </div>
    }
    <ng-content />
  `, isInline: true, dependencies: [{ kind: "component", type: SETitleComponent, selector: "se-title, [se-title]", exportAs: ["seTitle"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: SEContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'se-container, [se-container]',
                    exportAs: 'seContainer',
                    template: `
    @if (title) {
      <div se-title>
        <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
      </div>
    }
    <ng-content />
  `,
                    host: {
                        '[class.ant-row]': `true`,
                        '[class.se__container]': `true`,
                        '[class.se__horizontal]': `nzLayout === 'horizontal'`,
                        '[class.se__vertical]': `nzLayout === 'vertical'`,
                        '[class.se__inline]': `nzLayout === 'inline'`,
                        '[class.se__compact]': `size === 'compact'`,
                        '[style.margin-left.px]': `margin`,
                        '[style.margin-right.px]': `margin`
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [SETitleComponent, NzStringTemplateOutletDirective]
                }]
        }], ctorParameters: () => [{ type: i1.AlainConfigService }], propDecorators: { colInCon: [{
                type: Input,
                args: [{ alias: 'se-container', transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }], col: [{
                type: Input,
                args: [{ transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }], labelWidth: [{
                type: Input,
                args: [{ transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }], noColon: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], title: [{
                type: Input
            }], gutter: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], nzLayout: [{
                type: Input
            }], size: [{
                type: Input
            }], firstVisual: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ingoreDirty: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], line: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], errors: [{
                type: Input
            }] } });

const prefixCls = `se`;
let nextUniqueId = 0;
class SEComponent {
    set error(val) {
        this.errorData = typeof val === 'string' || val instanceof TemplateRef ? { '': val } : val;
    }
    set id(value) {
        this._id = value;
        this._autoId = false;
    }
    // #endregion
    get paddingValue() {
        return this.parentComp.gutter / 2;
    }
    get showErr() {
        return this.invalid && !!this._error && !this.compact;
    }
    get compact() {
        return this.parentComp.size === 'compact';
    }
    get ngControl() {
        return this.ngModel || this.formControlName;
    }
    constructor() {
        this.parentComp = inject(SEContainerComponent, { host: true, optional: true });
        this.el = inject(ElementRef).nativeElement;
        this.rep = inject(ResponsiveService);
        this.ren = inject(Renderer2);
        this.cdr = inject(ChangeDetectorRef);
        this.statusSrv = inject(NzFormStatusService);
        this.destroy$ = inject(DestroyRef);
        this.clsMap = [];
        this.inited = false;
        this.onceFlag = false;
        this.errorData = {};
        this.isBindModel = false;
        this.invalid = false;
        this._labelWidth = null;
        this._noColon = null;
        // #region fields
        this.optional = null;
        this.optionalHelp = null;
        this.required = false;
        this.controlClass = '';
        this.hideLabel = false;
        this._id = `_se-${++nextUniqueId}`;
        this._autoId = true;
        if (this.parentComp == null) {
            throw new Error(`[se] must include 'se-container' component`);
        }
        this.parentComp.errorNotify
            .pipe(takeUntilDestroyed(), filter(w => this.inited && this.ngControl != null && this.ngControl.name === w.name))
            .subscribe(item => {
            this.error = item.error;
            this.updateStatus(this.ngControl.invalid);
        });
    }
    setClass() {
        const { el, ren, clsMap, col, cdr, line, labelWidth, rep, noColon } = this;
        const parent = this.parentComp;
        this._noColon = noColon != null ? noColon : parent.noColon;
        this._labelWidth = parent.nzLayout === 'horizontal' ? (labelWidth != null ? labelWidth : parent.labelWidth) : null;
        clsMap.forEach(cls => ren.removeClass(el, cls));
        clsMap.length = 0;
        const parentCol = parent.colInCon || parent.col;
        const repCls = parent.nzLayout === 'horizontal' ? rep.genCls(col != null ? col : parentCol, parentCol) : [];
        clsMap.push(`ant-form-item`, ...repCls, `${prefixCls}__item`);
        if (line || parent.line) {
            clsMap.push(`${prefixCls}__line`);
        }
        clsMap.forEach(cls => ren.addClass(el, cls));
        cdr.detectChanges();
        return this;
    }
    bindModel() {
        if (!this.ngControl || this.isBindModel)
            return;
        this.isBindModel = true;
        this.ngControl
            .statusChanges.pipe(takeUntilDestroyed(this.destroy$))
            .subscribe(res => this.updateStatus(res === 'INVALID'));
        if (this._autoId) {
            const controlAccessor = this.ngControl.valueAccessor;
            const control = (controlAccessor?.elementRef || controlAccessor?._elementRef)?.nativeElement;
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
            let required = this.ngControl?.control?.hasValidator(Validators.required);
            if (required !== true) {
                const rawValidators = this.ngControl?._rawValidators;
                required = rawValidators.find(w => w instanceof RequiredValidator) != null;
            }
            this.required = required;
            this.cdr.detectChanges();
        }
    }
    updateStatus(invalid) {
        if (this.ngControl?.disabled || this.ngControl?.isDisabled) {
            return;
        }
        this.invalid =
            !this.onceFlag && invalid && this.parentComp.ingoreDirty === false && !this.ngControl?.dirty ? false : invalid;
        const errors = this.ngControl?.errors;
        if (errors != null && Object.keys(errors).length > 0) {
            const key = Object.keys(errors)[0] || '';
            const err = this.errorData[key];
            this._error = err != null ? err : this.errorData[''] || '';
        }
        this.statusSrv.formStatusChanges.next({ status: this.invalid ? 'error' : '', hasFeedback: false });
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
        this.onceFlag = this.parentComp.firstVisual;
        if (this.inited) {
            this.setClass().bindModel();
        }
    }
    ngAfterViewInit() {
        this.setClass().bindModel();
        this.inited = true;
        if (this.onceFlag) {
            Promise.resolve().then(() => {
                this.updateStatus(this.ngControl?.invalid);
                this.onceFlag = false;
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: SEComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.1", type: SEComponent, isStandalone: true, selector: "se", inputs: { optional: "optional", optionalHelp: "optionalHelp", optionalHelpColor: "optionalHelpColor", error: "error", extra: "extra", label: "label", col: ["col", "col", (v) => (v == null ? null : numberAttribute(v))], required: ["required", "required", booleanAttribute], controlClass: "controlClass", line: ["line", "line", (v) => (v == null ? null : booleanAttribute(v))], labelWidth: ["labelWidth", "labelWidth", (v) => (v == null ? null : numberAttribute(v))], noColon: ["noColon", "noColon", (v) => (v == null ? null : booleanAttribute(v))], hideLabel: ["hideLabel", "hideLabel", booleanAttribute], id: "id" }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue", "class.se__hide-label": "hideLabel", "class.ant-form-item-has-error": "invalid", "class.ant-form-item-with-help": "showErr" } }, providers: [NzFormStatusService], queries: [{ propertyName: "ngModel", first: true, predicate: NgModel, descendants: true, static: true }, { propertyName: "formControlName", first: true, predicate: FormControlName, descendants: true, static: true }], viewQueries: [{ propertyName: "contentElement", first: true, predicate: ["contentElement"], descendants: true, static: true }], exportAs: ["se"], usesOnChanges: true, ngImport: i0, template: "<div class=\"ant-form-item-label\" [class.se__nolabel]=\"hideLabel || !label\" [style.width.px]=\"_labelWidth\">\n  @if (label) {\n    <label [attr.for]=\"_id\" class=\"se__label\" [class.ant-form-item-required]=\"required\" [class.se__no-colon]=\"_noColon\">\n      <span class=\"se__label-text\">\n        <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n      </span>\n      @if (optional || optionalHelp) {\n        <span class=\"se__label-optional\" [class.se__label-optional-no-text]=\"!optional\">\n          <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n          @if (optionalHelp) {\n            <i\n              nz-tooltip\n              [nzTooltipTitle]=\"optionalHelp\"\n              [nzTooltipColor]=\"optionalHelpColor\"\n              nz-icon\n              nzType=\"question-circle\"\n            ></i>\n          }\n        </span>\n      }\n    </label>\n  }\n</div>\n<div class=\"ant-form-item-control se__control\">\n  <div class=\"ant-form-item-control-input {{ controlClass }}\">\n    <div class=\"ant-form-item-control-input-content\" (cdkObserveContent)=\"checkContent()\" #contentElement>\n      <ng-content />\n    </div>\n  </div>\n  @if (showErr) {\n    <div @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\">\n      <div role=\"alert\" class=\"ant-form-item-explain-error\">\n        <ng-container *nzStringTemplateOutlet=\"_error\">{{ _error }}</ng-container>\n      </div>\n    </div>\n  }\n  @if (extra && !compact) {\n    <div class=\"ant-form-item-extra\">\n      <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n    </div>\n  }\n</div>\n", dependencies: [{ kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], animations: [helpMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: SEComponent, decorators: [{
            type: Component,
            args: [{ selector: 'se', exportAs: 'se', host: {
                        '[style.padding-left.px]': 'paddingValue',
                        '[style.padding-right.px]': 'paddingValue',
                        '[class.se__hide-label]': 'hideLabel',
                        '[class.ant-form-item-has-error]': 'invalid',
                        '[class.ant-form-item-with-help]': 'showErr'
                    }, preserveWhitespaces: false, providers: [NzFormStatusService], animations: [helpMotion], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [NzStringTemplateOutletDirective, NzTooltipDirective, NzIconDirective, CdkObserveContent], template: "<div class=\"ant-form-item-label\" [class.se__nolabel]=\"hideLabel || !label\" [style.width.px]=\"_labelWidth\">\n  @if (label) {\n    <label [attr.for]=\"_id\" class=\"se__label\" [class.ant-form-item-required]=\"required\" [class.se__no-colon]=\"_noColon\">\n      <span class=\"se__label-text\">\n        <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n      </span>\n      @if (optional || optionalHelp) {\n        <span class=\"se__label-optional\" [class.se__label-optional-no-text]=\"!optional\">\n          <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n          @if (optionalHelp) {\n            <i\n              nz-tooltip\n              [nzTooltipTitle]=\"optionalHelp\"\n              [nzTooltipColor]=\"optionalHelpColor\"\n              nz-icon\n              nzType=\"question-circle\"\n            ></i>\n          }\n        </span>\n      }\n    </label>\n  }\n</div>\n<div class=\"ant-form-item-control se__control\">\n  <div class=\"ant-form-item-control-input {{ controlClass }}\">\n    <div class=\"ant-form-item-control-input-content\" (cdkObserveContent)=\"checkContent()\" #contentElement>\n      <ng-content />\n    </div>\n  </div>\n  @if (showErr) {\n    <div @helpMotion class=\"ant-form-item-explain ant-form-item-explain-connected\">\n      <div role=\"alert\" class=\"ant-form-item-explain-error\">\n        <ng-container *nzStringTemplateOutlet=\"_error\">{{ _error }}</ng-container>\n      </div>\n    </div>\n  }\n  @if (extra && !compact) {\n    <div class=\"ant-form-item-extra\">\n      <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n    </div>\n  }\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { ngModel: [{
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
                type: Input,
                args: [{ transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }], required: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], controlClass: [{
                type: Input
            }], line: [{
                type: Input,
                args: [{ transform: (v) => (v == null ? null : booleanAttribute(v)) }]
            }], labelWidth: [{
                type: Input,
                args: [{ transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }], noColon: [{
                type: Input,
                args: [{ transform: (v) => (v == null ? null : booleanAttribute(v)) }]
            }], hideLabel: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], id: [{
                type: Input
            }] } });

const COMPONENTS = [SEContainerComponent, SEComponent, SETitleComponent];
class SEModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: SEModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.1.1", ngImport: i0, type: SEModule, imports: [CommonModule, NzToolTipModule, NzIconModule, NzOutletModule, SEContainerComponent, SEComponent, SETitleComponent], exports: [SEContainerComponent, SEComponent, SETitleComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: SEModule, imports: [CommonModule, NzToolTipModule, NzIconModule, NzOutletModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: SEModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzToolTipModule, NzIconModule, NzOutletModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

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
//# sourceMappingURL=se.mjs.map
