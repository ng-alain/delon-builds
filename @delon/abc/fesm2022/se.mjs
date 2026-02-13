import * as i0 from '@angular/core';
import { inject, computed, ViewEncapsulation, ChangeDetectionStrategy, Component, input, numberAttribute, booleanAttribute, DestroyRef, Injector, contentChild, viewChild, signal, linkedSignal, TemplateRef, effect, runInInjectionContext, afterNextRender, NgModule } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { CdkObserveContent } from '@angular/cdk/observers';
import { toObservable, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgModel, FormControlName, Validators, RequiredValidator } from '@angular/forms';
import { map, filter } from 'rxjs';
import { ResponsiveService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { withAnimationCheck } from 'ng-zorro-antd/core/animation';
import { NzFormStatusService } from 'ng-zorro-antd/core/form';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { NzTooltipDirective, NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { CommonModule } from '@angular/common';

class SETitleComponent {
    parentComp = inject(SEContainerComponent, { host: true, optional: true });
    constructor() {
        if (this.parentComp == null) {
            throw new Error(`[se-title] must include 'se-container' component`);
        }
    }
    paddingValue = computed(() => this.parentComp._gutter() / 2, ...(ngDevMode ? [{ debugName: "paddingValue" }] : []));
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: SETitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.4", type: SETitleComponent, isStandalone: true, selector: "se-title, [se-title]", host: { properties: { "style.padding-left.px": "paddingValue()", "style.padding-right.px": "paddingValue()" }, classAttribute: "se__title" }, exportAs: ["seTitle"], ngImport: i0, template: '<ng-content />', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: SETitleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'se-title, [se-title]',
                    exportAs: 'seTitle',
                    template: '<ng-content />',
                    host: {
                        class: 'se__title',
                        '[style.padding-left.px]': 'paddingValue()',
                        '[style.padding-right.px]': 'paddingValue()'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: () => [] });
class SEContainerComponent {
    cogSrv = inject(AlainConfigService);
    colInCon = input(null, { ...(ngDevMode ? { debugName: "colInCon" } : {}), transform: (v) => (v == null ? null : numberAttribute(v, null)),
        alias: 'se-container' });
    labelWidth = input(150, { ...(ngDevMode ? { debugName: "labelWidth" } : {}), transform: (v) => (v == null ? null : numberAttribute(v, null)) });
    col = input(2, { ...(ngDevMode ? { debugName: "col" } : {}), transform: (v) => (v == null ? null : numberAttribute(v, null)) });
    noColon = input(false, { ...(ngDevMode ? { debugName: "noColon" } : {}), transform: booleanAttribute });
    title = input(...(ngDevMode ? [undefined, { debugName: "title" }] : []));
    gutter = input(32, { ...(ngDevMode ? { debugName: "gutter" } : {}), transform: numberAttribute });
    nzLayout = input('horizontal', ...(ngDevMode ? [{ debugName: "nzLayout" }] : []));
    size = input('default', ...(ngDevMode ? [{ debugName: "size" }] : []));
    firstVisual = input(false, { ...(ngDevMode ? { debugName: "firstVisual" } : {}), transform: booleanAttribute });
    ingoreDirty = input(false, { ...(ngDevMode ? { debugName: "ingoreDirty" } : {}), transform: booleanAttribute });
    line = input(false, { ...(ngDevMode ? { debugName: "line" } : {}), transform: booleanAttribute });
    errors = input([], ...(ngDevMode ? [{ debugName: "errors" }] : []));
    _gutter = computed(() => (this.nzLayout() === 'horizontal' ? this.gutter() : 0), ...(ngDevMode ? [{ debugName: "_gutter" }] : []));
    _size = computed(() => (this.nzLayout() === 'inline' ? 'compact' : this.size()), ...(ngDevMode ? [{ debugName: "_size" }] : []));
    margin = computed(() => -(this._gutter() / 2), ...(ngDevMode ? [{ debugName: "margin" }] : []));
    constructor() {
        this.cogSrv.attach(this, 'se', {
            size: 'default',
            nzLayout: 'horizontal',
            gutter: 32,
            col: 2,
            labelWidth: 150,
            firstVisual: false,
            ingoreDirty: false
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: SEContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.1.4", type: SEContainerComponent, isStandalone: true, selector: "se-container, [se-container]", inputs: { colInCon: { classPropertyName: "colInCon", publicName: "se-container", isSignal: true, isRequired: false, transformFunction: null }, labelWidth: { classPropertyName: "labelWidth", publicName: "labelWidth", isSignal: true, isRequired: false, transformFunction: null }, col: { classPropertyName: "col", publicName: "col", isSignal: true, isRequired: false, transformFunction: null }, noColon: { classPropertyName: "noColon", publicName: "noColon", isSignal: true, isRequired: false, transformFunction: null }, title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null }, gutter: { classPropertyName: "gutter", publicName: "gutter", isSignal: true, isRequired: false, transformFunction: null }, nzLayout: { classPropertyName: "nzLayout", publicName: "nzLayout", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, firstVisual: { classPropertyName: "firstVisual", publicName: "firstVisual", isSignal: true, isRequired: false, transformFunction: null }, ingoreDirty: { classPropertyName: "ingoreDirty", publicName: "ingoreDirty", isSignal: true, isRequired: false, transformFunction: null }, line: { classPropertyName: "line", publicName: "line", isSignal: true, isRequired: false, transformFunction: null }, errors: { classPropertyName: "errors", publicName: "errors", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.se__horizontal": "nzLayout() === 'horizontal'", "class.se__vertical": "nzLayout() === 'vertical'", "class.se__inline": "nzLayout() === 'inline'", "class.se__compact": "_size() === 'compact'", "style.margin-left.px": "margin()", "style.margin-right.px": "margin()" }, classAttribute: "ant-row se__container" }, exportAs: ["seContainer"], ngImport: i0, template: `
    @let tit = title();
    @if (tit) {
      <div se-title>
        <ng-container *nzStringTemplateOutlet="tit">{{ tit }}</ng-container>
      </div>
    }
    <ng-content />
  `, isInline: true, dependencies: [{ kind: "component", type: SETitleComponent, selector: "se-title, [se-title]", exportAs: ["seTitle"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: SEContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'se-container, [se-container]',
                    exportAs: 'seContainer',
                    template: `
    @let tit = title();
    @if (tit) {
      <div se-title>
        <ng-container *nzStringTemplateOutlet="tit">{{ tit }}</ng-container>
      </div>
    }
    <ng-content />
  `,
                    host: {
                        class: 'ant-row se__container',
                        '[class.se__horizontal]': `nzLayout() === 'horizontal'`,
                        '[class.se__vertical]': `nzLayout() === 'vertical'`,
                        '[class.se__inline]': `nzLayout() === 'inline'`,
                        '[class.se__compact]': `_size() === 'compact'`,
                        '[style.margin-left.px]': `margin()`,
                        '[style.margin-right.px]': `margin()`
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [SETitleComponent, NzStringTemplateOutletDirective]
                }]
        }], ctorParameters: () => [], propDecorators: { colInCon: [{ type: i0.Input, args: [{ isSignal: true, alias: "se-container", required: false }] }], labelWidth: [{ type: i0.Input, args: [{ isSignal: true, alias: "labelWidth", required: false }] }], col: [{ type: i0.Input, args: [{ isSignal: true, alias: "col", required: false }] }], noColon: [{ type: i0.Input, args: [{ isSignal: true, alias: "noColon", required: false }] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: false }] }], gutter: [{ type: i0.Input, args: [{ isSignal: true, alias: "gutter", required: false }] }], nzLayout: [{ type: i0.Input, args: [{ isSignal: true, alias: "nzLayout", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], firstVisual: [{ type: i0.Input, args: [{ isSignal: true, alias: "firstVisual", required: false }] }], ingoreDirty: [{ type: i0.Input, args: [{ isSignal: true, alias: "ingoreDirty", required: false }] }], line: [{ type: i0.Input, args: [{ isSignal: true, alias: "line", required: false }] }], errors: [{ type: i0.Input, args: [{ isSignal: true, alias: "errors", required: false }] }] } });

const prefixCls = `se`;
let nextUniqueId = 0;
class SEComponent {
    parentComp = inject(SEContainerComponent, { host: true, optional: true });
    rep = inject(ResponsiveService);
    statusSrv = inject(NzFormStatusService);
    destroy$ = inject(DestroyRef);
    injector = inject(Injector);
    ngModel = contentChild(NgModel, ...(ngDevMode ? [{ debugName: "ngModel" }] : []));
    formControlName = contentChild(FormControlName, ...(ngDevMode ? [{ debugName: "formControlName" }] : []));
    ngControl = computed(() => this.ngModel() ?? this.formControlName(), ...(ngDevMode ? [{ debugName: "ngControl" }] : []));
    contentElement = viewChild.required('contentElement');
    onceFlag = false;
    bindModel$;
    empty = signal(false, ...(ngDevMode ? [{ debugName: "empty" }] : []));
    // #region fields
    optional = input(...(ngDevMode ? [undefined, { debugName: "optional" }] : []));
    optionalHelp = input(...(ngDevMode ? [undefined, { debugName: "optionalHelp" }] : []));
    optionalHelpColor = input(...(ngDevMode ? [undefined, { debugName: "optionalHelpColor" }] : []));
    error = input(...(ngDevMode ? [undefined, { debugName: "error" }] : []));
    extra = input(...(ngDevMode ? [undefined, { debugName: "extra" }] : []));
    label = input(...(ngDevMode ? [undefined, { debugName: "label" }] : []));
    col = input(null, { ...(ngDevMode ? { debugName: "col" } : {}), transform: (v) => (v == null ? null : numberAttribute(v)) });
    required = input(false, { ...(ngDevMode ? { debugName: "required" } : {}), transform: booleanAttribute });
    controlClass = input(...(ngDevMode ? [undefined, { debugName: "controlClass" }] : []));
    line = input(null, { ...(ngDevMode ? { debugName: "line" } : {}), transform: (v) => (v == null ? null : booleanAttribute(v)) });
    labelWidth = input(null, { ...(ngDevMode ? { debugName: "labelWidth" } : {}), transform: (v) => (v == null ? null : numberAttribute(v)) });
    noColon = input(null, { ...(ngDevMode ? { debugName: "noColon" } : {}), transform: (v) => (v == null ? null : booleanAttribute(v)) });
    hideLabel = input(false, { ...(ngDevMode ? { debugName: "hideLabel" } : {}), transform: booleanAttribute });
    id = input(...(ngDevMode ? [undefined, { debugName: "id" }] : []));
    // #endregion
    invalid = signal(false, ...(ngDevMode ? [{ debugName: "invalid" }] : []));
    showErr = computed(() => this.invalid() && !!this.errorText() && !this.compact(), ...(ngDevMode ? [{ debugName: "showErr" }] : []));
    errorType = linkedSignal(() => this.error(), ...(ngDevMode ? [{ debugName: "errorType" }] : []));
    errorData = computed(() => {
        const err = this.errorType();
        return typeof err === 'string' || err instanceof TemplateRef ? { '': err } : err;
    }, ...(ngDevMode ? [{ debugName: "errorData" }] : []));
    errorText = signal(null, ...(ngDevMode ? [{ debugName: "errorText" }] : []));
    _required = linkedSignal(() => this.required() === true, ...(ngDevMode ? [{ debugName: "_required" }] : []));
    paddingValue = computed(() => this.parentComp._gutter() / 2, ...(ngDevMode ? [{ debugName: "paddingValue" }] : []));
    compact = computed(() => this.parentComp._size() === 'compact', ...(ngDevMode ? [{ debugName: "compact" }] : []));
    _id = linkedSignal(() => this.id(), ...(ngDevMode ? [{ debugName: "_id" }] : []));
    _noColon = computed(() => {
        const noColon = this.noColon();
        return noColon != null ? noColon : this.parentComp.noColon();
    }, ...(ngDevMode ? [{ debugName: "_noColon" }] : []));
    _labelWidth = computed(() => {
        const parent = this.parentComp;
        const labelWidth = this.labelWidth();
        return parent.nzLayout() === 'horizontal' ? (labelWidth != null ? labelWidth : parent.labelWidth()) : null;
    }, ...(ngDevMode ? [{ debugName: "_labelWidth" }] : []));
    cls = computed(() => {
        const parent = this.parentComp;
        const parentCol = parent.colInCon() ?? parent.col();
        const col = this.col();
        const repCls = parent.nzLayout() === 'horizontal' ? this.rep.genCls(col != null ? col : parentCol, parentCol) : [];
        const ret = [];
        ret.push(`ant-form-item`, ...repCls, `${prefixCls}__item`);
        if (this.line() || parent.line()) {
            ret.push(`${prefixCls}__line`);
        }
        return ret;
    }, ...(ngDevMode ? [{ debugName: "cls" }] : []));
    nzValidateAnimationEnter = withAnimationCheck(() => 'ant-form-validate_animation-enter');
    nzValidateAnimationLeave = withAnimationCheck(() => 'ant-form-validate_animation-leave');
    constructor() {
        if (this.parentComp == null) {
            throw new Error(`[se] must include 'se-container' component`);
        }
        toObservable(this.parentComp.errors)
            .pipe(takeUntilDestroyed(), map(ls => ls.find(w => this.ngControl()?.name === w.name)), filter(w => w != null))
            .subscribe(item => {
            this.errorType.set(item.error);
            this.updateStatus();
        });
        effect(() => this.checkContent());
        effect(() => {
            const control = this.ngControl();
            if (!control)
                return;
            this.bindModel$?.unsubscribe();
            this.bindModel$ = control
                .statusChanges.pipe(takeUntilDestroyed(this.destroy$))
                .subscribe(res => this.updateStatus(res === 'INVALID'));
            // set unique id
            let id = this.id() ?? `_se-${++nextUniqueId}`;
            const controlAccessor = this.ngControl()?.valueAccessor;
            const controlEl = (controlAccessor?.elementRef ?? controlAccessor?._elementRef)?.nativeElement;
            if (controlEl) {
                if (controlEl.id) {
                    this._id.set(controlEl.id);
                }
                else {
                    controlEl.id = id;
                }
            }
            // auto required
            if (this.required() !== true) {
                let required = control?.control?.hasValidator(Validators.required);
                if (required !== true) {
                    const rawValidators = control?._rawValidators;
                    required = rawValidators.find(w => w instanceof RequiredValidator) != null;
                }
                this._required.set(required);
            }
        });
        effect(() => {
            this.onceFlag = this.parentComp.firstVisual();
            if (!this.onceFlag)
                return;
            runInInjectionContext(this.injector, () => {
                afterNextRender(() => {
                    this.updateStatus();
                    this.onceFlag = false;
                });
            });
        });
    }
    updateStatus(invalid) {
        const control = this.ngControl();
        if (!control || control.disabled || control.isDisabled)
            return;
        if (invalid == null)
            invalid = control.invalid;
        this.invalid.set(!this.onceFlag && invalid && this.parentComp.ingoreDirty() === false && !control?.dirty ? false : invalid);
        const errors = control?.errors;
        if (errors != null && Object.keys(errors).length > 0) {
            const key = Object.keys(errors)[0] ?? '';
            const err = this.errorData()?.[key];
            this.errorText.set(err != null ? err : (this.errorData()?.[''] ?? ''));
        }
        this.statusSrv.formStatusChanges.next({ status: this.invalid() ? 'error' : '', hasFeedback: false });
    }
    checkContent() {
        const el = this.contentElement().nativeElement;
        this.empty.set(isEmpty(el));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: SEComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.1.4", type: SEComponent, isStandalone: true, selector: "se", inputs: { optional: { classPropertyName: "optional", publicName: "optional", isSignal: true, isRequired: false, transformFunction: null }, optionalHelp: { classPropertyName: "optionalHelp", publicName: "optionalHelp", isSignal: true, isRequired: false, transformFunction: null }, optionalHelpColor: { classPropertyName: "optionalHelpColor", publicName: "optionalHelpColor", isSignal: true, isRequired: false, transformFunction: null }, error: { classPropertyName: "error", publicName: "error", isSignal: true, isRequired: false, transformFunction: null }, extra: { classPropertyName: "extra", publicName: "extra", isSignal: true, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, col: { classPropertyName: "col", publicName: "col", isSignal: true, isRequired: false, transformFunction: null }, required: { classPropertyName: "required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, controlClass: { classPropertyName: "controlClass", publicName: "controlClass", isSignal: true, isRequired: false, transformFunction: null }, line: { classPropertyName: "line", publicName: "line", isSignal: true, isRequired: false, transformFunction: null }, labelWidth: { classPropertyName: "labelWidth", publicName: "labelWidth", isSignal: true, isRequired: false, transformFunction: null }, noColon: { classPropertyName: "noColon", publicName: "noColon", isSignal: true, isRequired: false, transformFunction: null }, hideLabel: { classPropertyName: "hideLabel", publicName: "hideLabel", isSignal: true, isRequired: false, transformFunction: null }, id: { classPropertyName: "id", publicName: "id", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "style.padding-left.px": "paddingValue()", "style.padding-right.px": "paddingValue()", "class.se__hide-label": "hideLabel()", "class.ant-form-item-has-error": "invalid()", "class.ant-form-item-with-help": "showErr()", "class.se__item-empty": "empty()", "class": "cls()" } }, providers: [NzFormStatusService], queries: [{ propertyName: "ngModel", first: true, predicate: NgModel, descendants: true, isSignal: true }, { propertyName: "formControlName", first: true, predicate: FormControlName, descendants: true, isSignal: true }], viewQueries: [{ propertyName: "contentElement", first: true, predicate: ["contentElement"], descendants: true, isSignal: true }], exportAs: ["se"], ngImport: i0, template: `
    @let _label = label();
    <div class="ant-form-item-label" [class.se__nolabel]="hideLabel() || !_label" [style.width.px]="_labelWidth()">
      @if (_label) {
        <label
          [attr.for]="_id()"
          class="se__label"
          [class.ant-form-item-required]="_required()"
          [class.se__no-colon]="_noColon()"
        >
          <span class="se__label-text">
            <ng-container *nzStringTemplateOutlet="_label">{{ _label }}</ng-container>
          </span>
          @let _optional = optional();
          @let _optionalHelp = optionalHelp();
          @if (_optional || _optionalHelp) {
            <span class="se__label-optional" [class.se__label-optional-no-text]="!_optional">
              <ng-container *nzStringTemplateOutlet="_optional">{{ _optional }}</ng-container>
              @if (_optionalHelp) {
                <nz-icon
                  nz-tooltip
                  [nzTooltipTitle]="_optionalHelp"
                  [nzTooltipColor]="optionalHelpColor()"
                  nzType="question-circle"
                />
              }
            </span>
          }
        </label>
      }
    </div>
    <div class="ant-form-item-control se__control">
      <div class="ant-form-item-control-input" [class]="controlClass()">
        <div class="ant-form-item-control-input-content" (cdkObserveContent)="checkContent()" #contentElement>
          <ng-content />
        </div>
      </div>
      @if (showErr()) {
        <div
          [animate.enter]="nzValidateAnimationEnter()"
          [animate.leave]="nzValidateAnimationLeave()"
          class="ant-form-item-explain ant-form-item-explain-connected"
        >
          <div role="alert" class="ant-form-item-explain-error">
            <ng-container *nzStringTemplateOutlet="errorText()">{{ errorText() }}</ng-container>
          </div>
        </div>
      }
      @let _extra = extra();
      @if (_extra && !compact()) {
        <div class="ant-form-item-extra">
          <ng-container *nzStringTemplateOutlet="_extra">{{ _extra }}</ng-container>
        </div>
      }
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: SEComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'se',
                    exportAs: 'se',
                    template: `
    @let _label = label();
    <div class="ant-form-item-label" [class.se__nolabel]="hideLabel() || !_label" [style.width.px]="_labelWidth()">
      @if (_label) {
        <label
          [attr.for]="_id()"
          class="se__label"
          [class.ant-form-item-required]="_required()"
          [class.se__no-colon]="_noColon()"
        >
          <span class="se__label-text">
            <ng-container *nzStringTemplateOutlet="_label">{{ _label }}</ng-container>
          </span>
          @let _optional = optional();
          @let _optionalHelp = optionalHelp();
          @if (_optional || _optionalHelp) {
            <span class="se__label-optional" [class.se__label-optional-no-text]="!_optional">
              <ng-container *nzStringTemplateOutlet="_optional">{{ _optional }}</ng-container>
              @if (_optionalHelp) {
                <nz-icon
                  nz-tooltip
                  [nzTooltipTitle]="_optionalHelp"
                  [nzTooltipColor]="optionalHelpColor()"
                  nzType="question-circle"
                />
              }
            </span>
          }
        </label>
      }
    </div>
    <div class="ant-form-item-control se__control">
      <div class="ant-form-item-control-input" [class]="controlClass()">
        <div class="ant-form-item-control-input-content" (cdkObserveContent)="checkContent()" #contentElement>
          <ng-content />
        </div>
      </div>
      @if (showErr()) {
        <div
          [animate.enter]="nzValidateAnimationEnter()"
          [animate.leave]="nzValidateAnimationLeave()"
          class="ant-form-item-explain ant-form-item-explain-connected"
        >
          <div role="alert" class="ant-form-item-explain-error">
            <ng-container *nzStringTemplateOutlet="errorText()">{{ errorText() }}</ng-container>
          </div>
        </div>
      }
      @let _extra = extra();
      @if (_extra && !compact()) {
        <div class="ant-form-item-extra">
          <ng-container *nzStringTemplateOutlet="_extra">{{ _extra }}</ng-container>
        </div>
      }
    </div>
  `,
                    host: {
                        '[style.padding-left.px]': 'paddingValue()',
                        '[style.padding-right.px]': 'paddingValue()',
                        '[class.se__hide-label]': 'hideLabel()',
                        '[class.ant-form-item-has-error]': 'invalid()',
                        '[class.ant-form-item-with-help]': 'showErr()',
                        '[class.se__item-empty]': 'empty()',
                        '[class]': 'cls()'
                    },
                    providers: [NzFormStatusService],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [NzStringTemplateOutletDirective, NzTooltipDirective, NzIconDirective, CdkObserveContent]
                }]
        }], ctorParameters: () => [], propDecorators: { ngModel: [{ type: i0.ContentChild, args: [i0.forwardRef(() => NgModel), { isSignal: true }] }], formControlName: [{ type: i0.ContentChild, args: [i0.forwardRef(() => FormControlName), { isSignal: true }] }], contentElement: [{ type: i0.ViewChild, args: ['contentElement', { isSignal: true }] }], optional: [{ type: i0.Input, args: [{ isSignal: true, alias: "optional", required: false }] }], optionalHelp: [{ type: i0.Input, args: [{ isSignal: true, alias: "optionalHelp", required: false }] }], optionalHelpColor: [{ type: i0.Input, args: [{ isSignal: true, alias: "optionalHelpColor", required: false }] }], error: [{ type: i0.Input, args: [{ isSignal: true, alias: "error", required: false }] }], extra: [{ type: i0.Input, args: [{ isSignal: true, alias: "extra", required: false }] }], label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], col: [{ type: i0.Input, args: [{ isSignal: true, alias: "col", required: false }] }], required: [{ type: i0.Input, args: [{ isSignal: true, alias: "required", required: false }] }], controlClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "controlClass", required: false }] }], line: [{ type: i0.Input, args: [{ isSignal: true, alias: "line", required: false }] }], labelWidth: [{ type: i0.Input, args: [{ isSignal: true, alias: "labelWidth", required: false }] }], noColon: [{ type: i0.Input, args: [{ isSignal: true, alias: "noColon", required: false }] }], hideLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "hideLabel", required: false }] }], id: [{ type: i0.Input, args: [{ isSignal: true, alias: "id", required: false }] }] } });

const COMPONENTS = [SEContainerComponent, SEComponent, SETitleComponent];
class SEModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: SEModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.1.4", ngImport: i0, type: SEModule, imports: [CommonModule, NzTooltipModule, NzIconModule, NzOutletModule, SEContainerComponent, SEComponent, SETitleComponent], exports: [SEContainerComponent, SEComponent, SETitleComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: SEModule, imports: [CommonModule, NzTooltipModule, NzIconModule, NzOutletModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: SEModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzTooltipModule, NzIconModule, NzOutletModule, ...COMPONENTS],
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
