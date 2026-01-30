import * as i0 from '@angular/core';
import { inject, computed, ViewEncapsulation, ChangeDetectionStrategy, Component, input, numberAttribute, booleanAttribute, Input, viewChild, afterNextRender, NgModule } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzTooltipDirective, NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { CdkObserveContent, ObserversModule } from '@angular/cdk/observers';
import { ResponsiveService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';

class SVTitleComponent {
    parentComp = inject(SVContainerComponent, { host: true, optional: true });
    paddingValue = computed(() => this.parentComp.gutter() / 2, ...(ngDevMode ? [{ debugName: "paddingValue" }] : []));
    constructor() {
        if (this.parentComp == null) {
            throw new Error(`[sv-title] must include 'sv-container' component`);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: SVTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.1", type: SVTitleComponent, isStandalone: true, selector: "sv-title, [sv-title]", host: { properties: { "style.padding-left.px": "paddingValue()", "style.padding-right.px": "paddingValue()" }, classAttribute: "sv__title" }, exportAs: ["svTitle"], ngImport: i0, template: '<ng-content />', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: SVTitleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sv-title, [sv-title]',
                    exportAs: 'svTitle',
                    template: '<ng-content />',
                    host: {
                        class: 'sv__title',
                        '[style.padding-left.px]': 'paddingValue()',
                        '[style.padding-right.px]': 'paddingValue()'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: () => [] });
class SVContainerComponent {
    cogSrv = inject(AlainConfigService);
    colInCon = input(null, { ...(ngDevMode ? { debugName: "colInCon" } : {}), transform: (v) => (v == null ? null : numberAttribute(v, null)),
        alias: 'sv-container' });
    title = input(...(ngDevMode ? [undefined, { debugName: "title" }] : []));
    size = input('large', ...(ngDevMode ? [{ debugName: "size" }] : []));
    /** 列表项间距，单位为 `px` */
    gutter = input(32, { ...(ngDevMode ? { debugName: "gutter" } : {}), transform: numberAttribute });
    layout = input('horizontal', ...(ngDevMode ? [{ debugName: "layout" }] : []));
    labelWidth = input(undefined, { ...(ngDevMode ? { debugName: "labelWidth" } : {}), transform: numberAttribute });
    /** 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定 */
    col = input(3, { ...(ngDevMode ? { debugName: "col" } : {}), transform: numberAttribute });
    default = input(true, { ...(ngDevMode ? { debugName: "default" } : {}), transform: booleanAttribute });
    noColon = input(false, { ...(ngDevMode ? { debugName: "noColon" } : {}), transform: booleanAttribute });
    bordered = input(false, { ...(ngDevMode ? { debugName: "bordered" } : {}), transform: booleanAttribute });
    margin = computed(() => {
        return this.bordered()
            ? {}
            : { 'margin-left': `${-(this.gutter() / 2)}px`, 'margin-right': `${-(this.gutter() / 2)}px` };
    }, ...(ngDevMode ? [{ debugName: "margin" }] : []));
    constructor() {
        this.cogSrv.attach(this, 'sv', {
            size: 'large',
            gutter: 32,
            layout: 'horizontal',
            col: 3,
            default: true
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: SVContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.1.1", type: SVContainerComponent, isStandalone: true, selector: "sv-container, [sv-container]", inputs: { colInCon: { classPropertyName: "colInCon", publicName: "sv-container", isSignal: true, isRequired: false, transformFunction: null }, title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, gutter: { classPropertyName: "gutter", publicName: "gutter", isSignal: true, isRequired: false, transformFunction: null }, layout: { classPropertyName: "layout", publicName: "layout", isSignal: true, isRequired: false, transformFunction: null }, labelWidth: { classPropertyName: "labelWidth", publicName: "labelWidth", isSignal: true, isRequired: false, transformFunction: null }, col: { classPropertyName: "col", publicName: "col", isSignal: true, isRequired: false, transformFunction: null }, default: { classPropertyName: "default", publicName: "default", isSignal: true, isRequired: false, transformFunction: null }, noColon: { classPropertyName: "noColon", publicName: "noColon", isSignal: true, isRequired: false, transformFunction: null }, bordered: { classPropertyName: "bordered", publicName: "bordered", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.sv__horizontal": "layout() === 'horizontal'", "class.sv__vertical": "layout() === 'vertical'", "class.sv__small": "size() === 'small'", "class.sv__large": "size() === 'large'", "class.sv__bordered": "bordered()", "class.clearfix": "true" }, classAttribute: "sv__container" }, exportAs: ["svContainer"], ngImport: i0, template: `
    <div class="ant-row" [style]="margin()">
      @let tit = title();
      @if (tit) {
        <sv-title>
          <ng-container *nzStringTemplateOutlet="tit">{{ tit }}</ng-container>
        </sv-title>
      }
      <ng-content />
    </div>
  `, isInline: true, dependencies: [{ kind: "component", type: SVTitleComponent, selector: "sv-title, [sv-title]", exportAs: ["svTitle"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: SVContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sv-container, [sv-container]',
                    exportAs: 'svContainer',
                    template: `
    <div class="ant-row" [style]="margin()">
      @let tit = title();
      @if (tit) {
        <sv-title>
          <ng-container *nzStringTemplateOutlet="tit">{{ tit }}</ng-container>
        </sv-title>
      }
      <ng-content />
    </div>
  `,
                    host: {
                        class: 'sv__container',
                        '[class.sv__horizontal]': `layout() === 'horizontal'`,
                        '[class.sv__vertical]': `layout() === 'vertical'`,
                        '[class.sv__small]': `size() === 'small'`,
                        '[class.sv__large]': `size() === 'large'`,
                        '[class.sv__bordered]': `bordered()`,
                        '[class.clearfix]': `true`
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [SVTitleComponent, NzStringTemplateOutletDirective]
                }]
        }], ctorParameters: () => [], propDecorators: { colInCon: [{ type: i0.Input, args: [{ isSignal: true, alias: "sv-container", required: false }] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], gutter: [{ type: i0.Input, args: [{ isSignal: true, alias: "gutter", required: false }] }], layout: [{ type: i0.Input, args: [{ isSignal: true, alias: "layout", required: false }] }], labelWidth: [{ type: i0.Input, args: [{ isSignal: true, alias: "labelWidth", required: false }] }], col: [{ type: i0.Input, args: [{ isSignal: true, alias: "col", required: false }] }], default: [{ type: i0.Input, args: [{ isSignal: true, alias: "default", required: false }] }], noColon: [{ type: i0.Input, args: [{ isSignal: true, alias: "noColon", required: false }] }], bordered: [{ type: i0.Input, args: [{ isSignal: true, alias: "bordered", required: false }] }] } });

class SVValueComponent {
    prefix;
    unit;
    tooltip;
    size = 'default';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: SVValueComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.1.1", type: SVValueComponent, isStandalone: true, selector: "sv-value, [sv-value]", inputs: { prefix: "prefix", unit: "unit", tooltip: "tooltip", size: "size" }, host: { properties: { "class.sv__value": "true", "class.sv__value-small": "size === 'small'", "class.sv__value-large": "size === 'large'" } }, exportAs: ["svValue"], ngImport: i0, template: `
    @if (prefix) {
      <em class="sv__value-prefix" [innerHTML]="prefix"></em>
    }
    <span nz-tooltip [nzTooltipTitle]="tooltip" class="sv__value-text"><ng-content /></span>
    @if (unit) {
      <em class="sv__value-unit" [innerHTML]="unit"></em>
    }
  `, isInline: true, dependencies: [{ kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: SVValueComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sv-value, [sv-value]',
                    exportAs: 'svValue',
                    template: `
    @if (prefix) {
      <em class="sv__value-prefix" [innerHTML]="prefix"></em>
    }
    <span nz-tooltip [nzTooltipTitle]="tooltip" class="sv__value-text"><ng-content /></span>
    @if (unit) {
      <em class="sv__value-unit" [innerHTML]="unit"></em>
    }
  `,
                    host: {
                        '[class.sv__value]': 'true',
                        '[class.sv__value-small]': `size === 'small'`,
                        '[class.sv__value-large]': `size === 'large'`
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [NzTooltipDirective]
                }]
        }], propDecorators: { prefix: [{
                type: Input
            }], unit: [{
                type: Input
            }], tooltip: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

const prefixCls = `sv`;
class SVComponent {
    parentComp = inject(SVContainerComponent, { host: true, optional: true });
    rep = inject(ResponsiveService);
    conEl = viewChild.required('conEl');
    _noColon = computed(() => {
        const noColon = this.noColon();
        const parent = this.parentComp;
        return parent.bordered() ? true : noColon != null ? noColon : parent.noColon();
    }, ...(ngDevMode ? [{ debugName: "_noColon" }] : []));
    // #region fields
    optional = input(...(ngDevMode ? [undefined, { debugName: "optional" }] : []));
    optionalHelp = input(...(ngDevMode ? [undefined, { debugName: "optionalHelp" }] : []));
    optionalHelpColor = input(...(ngDevMode ? [undefined, { debugName: "optionalHelpColor" }] : []));
    label = input(...(ngDevMode ? [undefined, { debugName: "label" }] : []));
    unit = input(...(ngDevMode ? [undefined, { debugName: "unit" }] : []));
    col = input(null, { ...(ngDevMode ? { debugName: "col" } : {}), transform: (v) => (v == null ? null : numberAttribute(v)) });
    default = input(null, { ...(ngDevMode ? { debugName: "default" } : {}), transform: (v) => (v == null ? null : booleanAttribute(v)) });
    type = input(...(ngDevMode ? [undefined, { debugName: "type" }] : []));
    noColon = input(null, { ...(ngDevMode ? { debugName: "noColon" } : {}), transform: (v) => (v == null ? null : booleanAttribute(v)) });
    hideLabel = input(false, { ...(ngDevMode ? { debugName: "hideLabel" } : {}), transform: booleanAttribute });
    // #endregion
    paddingValue = computed(() => {
        const parent = this.parentComp;
        if (parent.bordered())
            return null;
        return parent.gutter() / 2;
    }, ...(ngDevMode ? [{ debugName: "paddingValue" }] : []));
    labelWidth = computed(() => {
        const { labelWidth, layout } = this.parentComp;
        return layout() === 'horizontal' ? labelWidth() : null;
    }, ...(ngDevMode ? [{ debugName: "labelWidth" }] : []));
    cls = computed(() => {
        const parent = this.parentComp;
        const parentCol = parent.colInCon() ?? parent.col();
        const col = this.col();
        const ret = [...this.rep.genCls(col != null ? col : parentCol, parentCol)];
        ret.push(`${prefixCls}__item`);
        if (parent.labelWidth())
            ret.push(`${prefixCls}__item-fixed`);
        const type = this.type();
        if (type)
            ret.push(`${prefixCls}__type-${type}`);
        return ret;
    }, ...(ngDevMode ? [{ debugName: "cls" }] : []));
    constructor() {
        if (this.parentComp == null) {
            throw new Error(`[sv] must include 'sv-container' component`);
        }
        afterNextRender(() => {
            this.checkContent();
        });
    }
    checkContent() {
        const def = this.default();
        if (!(def != null ? def : this.parentComp?.default())) {
            return;
        }
        const el = this.conEl().nativeElement;
        const cls = `sv__default`;
        if (el.classList.contains(cls)) {
            el.classList.remove(cls);
        }
        if (isEmpty(el)) {
            el.classList.add(cls);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: SVComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.1.1", type: SVComponent, isStandalone: true, selector: "sv, [sv]", inputs: { optional: { classPropertyName: "optional", publicName: "optional", isSignal: true, isRequired: false, transformFunction: null }, optionalHelp: { classPropertyName: "optionalHelp", publicName: "optionalHelp", isSignal: true, isRequired: false, transformFunction: null }, optionalHelpColor: { classPropertyName: "optionalHelpColor", publicName: "optionalHelpColor", isSignal: true, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, unit: { classPropertyName: "unit", publicName: "unit", isSignal: true, isRequired: false, transformFunction: null }, col: { classPropertyName: "col", publicName: "col", isSignal: true, isRequired: false, transformFunction: null }, default: { classPropertyName: "default", publicName: "default", isSignal: true, isRequired: false, transformFunction: null }, type: { classPropertyName: "type", publicName: "type", isSignal: true, isRequired: false, transformFunction: null }, noColon: { classPropertyName: "noColon", publicName: "noColon", isSignal: true, isRequired: false, transformFunction: null }, hideLabel: { classPropertyName: "hideLabel", publicName: "hideLabel", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "style.padding-left.px": "paddingValue()", "style.padding-right.px": "paddingValue()", "class": "cls()" } }, viewQueries: [{ propertyName: "conEl", first: true, predicate: ["conEl"], descendants: true, isSignal: true }], exportAs: ["sv"], ngImport: i0, template: `
    @if (!hideLabel()) {
      @let _label = label();
      <div
        class="sv__label"
        [class.sv__label-empty]="!_label"
        [class.sv__label-width]="labelWidth() != null"
        [class.sv__no-colon]="_noColon()"
        [style.width.px]="labelWidth()"
      >
        <span class="sv__label-text">
          <ng-container *nzStringTemplateOutlet="_label">{{ _label }}</ng-container>
        </span>
        @let _optional = optional();
        @if (_optional || optionalHelp()) {
          <span class="sv__label-optional" [class.sv__label-optional-no-text]="!_optional">
            <ng-container *nzStringTemplateOutlet="_optional">{{ _optional }}</ng-container>
            @if (optionalHelp()) {
              <nz-icon
                nz-tooltip
                [nzTooltipTitle]="optionalHelp()"
                [nzTooltipColor]="optionalHelpColor()"
                nzType="question-circle"
              />
            }
          </span>
        }
      </div>
    }
    <div class="sv__detail">
      <span (cdkObserveContent)="checkContent()" #conEl>
        <ng-content />
      </span>
      @let _unit = unit();
      @if (_unit) {
        <span class="sv__unit" *nzStringTemplateOutlet="_unit">{{ _unit }}</span>
      }
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: SVComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sv, [sv]',
                    exportAs: 'sv',
                    template: `
    @if (!hideLabel()) {
      @let _label = label();
      <div
        class="sv__label"
        [class.sv__label-empty]="!_label"
        [class.sv__label-width]="labelWidth() != null"
        [class.sv__no-colon]="_noColon()"
        [style.width.px]="labelWidth()"
      >
        <span class="sv__label-text">
          <ng-container *nzStringTemplateOutlet="_label">{{ _label }}</ng-container>
        </span>
        @let _optional = optional();
        @if (_optional || optionalHelp()) {
          <span class="sv__label-optional" [class.sv__label-optional-no-text]="!_optional">
            <ng-container *nzStringTemplateOutlet="_optional">{{ _optional }}</ng-container>
            @if (optionalHelp()) {
              <nz-icon
                nz-tooltip
                [nzTooltipTitle]="optionalHelp()"
                [nzTooltipColor]="optionalHelpColor()"
                nzType="question-circle"
              />
            }
          </span>
        }
      </div>
    }
    <div class="sv__detail">
      <span (cdkObserveContent)="checkContent()" #conEl>
        <ng-content />
      </span>
      @let _unit = unit();
      @if (_unit) {
        <span class="sv__unit" *nzStringTemplateOutlet="_unit">{{ _unit }}</span>
      }
    </div>
  `,
                    host: {
                        '[style.padding-left.px]': 'paddingValue()',
                        '[style.padding-right.px]': 'paddingValue()',
                        '[class]': 'cls()'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [NzStringTemplateOutletDirective, NzTooltipDirective, NzIconDirective, CdkObserveContent]
                }]
        }], ctorParameters: () => [], propDecorators: { conEl: [{ type: i0.ViewChild, args: ['conEl', { isSignal: true }] }], optional: [{ type: i0.Input, args: [{ isSignal: true, alias: "optional", required: false }] }], optionalHelp: [{ type: i0.Input, args: [{ isSignal: true, alias: "optionalHelp", required: false }] }], optionalHelpColor: [{ type: i0.Input, args: [{ isSignal: true, alias: "optionalHelpColor", required: false }] }], label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], unit: [{ type: i0.Input, args: [{ isSignal: true, alias: "unit", required: false }] }], col: [{ type: i0.Input, args: [{ isSignal: true, alias: "col", required: false }] }], default: [{ type: i0.Input, args: [{ isSignal: true, alias: "default", required: false }] }], type: [{ type: i0.Input, args: [{ isSignal: true, alias: "type", required: false }] }], noColon: [{ type: i0.Input, args: [{ isSignal: true, alias: "noColon", required: false }] }], hideLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "hideLabel", required: false }] }] } });

const COMPONENTS = [SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent];
class SVModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: SVModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.1.1", ngImport: i0, type: SVModule, imports: [CommonModule, ObserversModule, NzTooltipModule, NzIconModule, NzOutletModule, SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent], exports: [SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: SVModule, imports: [CommonModule, ObserversModule, NzTooltipModule, NzIconModule, NzOutletModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: SVModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ObserversModule, NzTooltipModule, NzIconModule, NzOutletModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SVComponent, SVContainerComponent, SVModule, SVTitleComponent, SVValueComponent };
//# sourceMappingURL=sv.mjs.map
