import * as i0 from '@angular/core';
import { inject, ElementRef, Renderer2, ViewEncapsulation, ChangeDetectionStrategy, Component, booleanAttribute, numberAttribute, Input, ViewChild, NgModule } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzTooltipDirective, NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { CdkObserveContent, ObserversModule } from '@angular/cdk/observers';
import { ResponsiveService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';

class SVTitleComponent {
    el = inject(ElementRef).nativeElement;
    parentComp = inject(SVContainerComponent, { host: true, optional: true });
    ren = inject(Renderer2);
    constructor() {
        if (this.parentComp == null) {
            throw new Error(`[sv-title] must include 'sv-container' component`);
        }
    }
    setClass() {
        const gutter = this.parentComp.gutter;
        const el = this.el;
        this.ren.setStyle(el, 'padding-left', `${gutter / 2}px`);
        this.ren.setStyle(el, 'padding-right', `${gutter / 2}px`);
    }
    ngOnInit() {
        this.setClass();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: SVTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.15", type: SVTitleComponent, isStandalone: true, selector: "sv-title, [sv-title]", host: { properties: { "class.sv__title": "true" } }, exportAs: ["svTitle"], ngImport: i0, template: '<ng-content />', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: SVTitleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sv-title, [sv-title]',
                    exportAs: 'svTitle',
                    template: '<ng-content />',
                    host: {
                        '[class.sv__title]': 'true'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: () => [] });
class SVContainerComponent {
    cogSrv = inject(AlainConfigService);
    colInCon;
    title;
    size;
    /** 列表项间距，单位为 `px` */
    gutter;
    layout;
    labelWidth;
    /** 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定 */
    col;
    default;
    noColon = false;
    bordered = false;
    get margin() {
        return this.bordered ? {} : { 'margin-left': `${-(this.gutter / 2)}px`, 'margin-right': `${-(this.gutter / 2)}px` };
    }
    constructor() {
        this.cogSrv.attach(this, 'sv', {
            size: 'large',
            gutter: 32,
            layout: 'horizontal',
            col: 3,
            default: true
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: SVContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.15", type: SVContainerComponent, isStandalone: true, selector: "sv-container, [sv-container]", inputs: { colInCon: ["sv-container", "colInCon", (v) => (v == null ? null : numberAttribute(v))], title: "title", size: "size", gutter: ["gutter", "gutter", numberAttribute], layout: "layout", labelWidth: ["labelWidth", "labelWidth", numberAttribute], col: ["col", "col", numberAttribute], default: ["default", "default", booleanAttribute], noColon: ["noColon", "noColon", booleanAttribute], bordered: ["bordered", "bordered", booleanAttribute] }, host: { properties: { "class.sv__container": "true", "class.sv__horizontal": "layout === 'horizontal'", "class.sv__vertical": "layout === 'vertical'", "class.sv__small": "size === 'small'", "class.sv__large": "size === 'large'", "class.sv__bordered": "bordered", "class.clearfix": "true" } }, exportAs: ["svContainer"], ngImport: i0, template: `
    <div class="ant-row" [style]="margin">
      @if (title) {
        <sv-title>
          <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
        </sv-title>
      }
      <ng-content />
    </div>
  `, isInline: true, dependencies: [{ kind: "component", type: SVTitleComponent, selector: "sv-title, [sv-title]", exportAs: ["svTitle"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: SVContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sv-container, [sv-container]',
                    exportAs: 'svContainer',
                    template: `
    <div class="ant-row" [style]="margin">
      @if (title) {
        <sv-title>
          <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
        </sv-title>
      }
      <ng-content />
    </div>
  `,
                    host: {
                        '[class.sv__container]': 'true',
                        '[class.sv__horizontal]': `layout === 'horizontal'`,
                        '[class.sv__vertical]': `layout === 'vertical'`,
                        '[class.sv__small]': `size === 'small'`,
                        '[class.sv__large]': `size === 'large'`,
                        '[class.sv__bordered]': `bordered`,
                        '[class.clearfix]': `true`
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [SVTitleComponent, NzStringTemplateOutletDirective]
                }]
        }], ctorParameters: () => [], propDecorators: { colInCon: [{
                type: Input,
                args: [{ alias: 'sv-container', transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }], title: [{
                type: Input
            }], size: [{
                type: Input
            }], gutter: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], layout: [{
                type: Input
            }], labelWidth: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], col: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], default: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], noColon: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], bordered: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }] } });

class SVValueComponent {
    prefix;
    unit;
    tooltip;
    size = 'default';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: SVValueComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.15", type: SVValueComponent, isStandalone: true, selector: "sv-value, [sv-value]", inputs: { prefix: "prefix", unit: "unit", tooltip: "tooltip", size: "size" }, host: { properties: { "class.sv__value": "true", "class.sv__value-small": "size === 'small'", "class.sv__value-large": "size === 'large'" } }, exportAs: ["svValue"], ngImport: i0, template: `
    @if (prefix) {
      <em class="sv__value-prefix" [innerHTML]="prefix"></em>
    }
    <span nz-tooltip [nzTooltipTitle]="tooltip" class="sv__value-text"><ng-content /></span>
    @if (unit) {
      <em class="sv__value-unit" [innerHTML]="unit"></em>
    }
  `, isInline: true, dependencies: [{ kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: SVValueComponent, decorators: [{
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
    el = inject(ElementRef).nativeElement;
    parentComp = inject(SVContainerComponent, { host: true, optional: true });
    rep = inject(ResponsiveService);
    ren = inject(Renderer2);
    conEl;
    clsMap = [];
    _noColon = false;
    // #region fields
    optional;
    optionalHelp;
    optionalHelpColor;
    label;
    unit;
    col;
    default;
    type;
    noColon;
    hideLabel = false;
    // #endregion
    get paddingValue() {
        if (this.parentComp.bordered)
            return null;
        return this.parentComp.gutter / 2;
    }
    get labelWidth() {
        const { labelWidth, layout } = this.parentComp;
        return layout === 'horizontal' ? labelWidth : null;
    }
    constructor() {
        if (this.parentComp == null) {
            throw new Error(`[sv] must include 'sv-container' component`);
        }
    }
    setClass() {
        const { ren, col, clsMap, type, rep, noColon } = this;
        const parent = this.parentComp;
        const el = this.el;
        this._noColon = parent.bordered ? true : noColon != null ? noColon : parent.noColon;
        clsMap.forEach(cls => ren.removeClass(el, cls));
        clsMap.length = 0;
        const parentCol = parent.colInCon ?? parent.col;
        clsMap.push(...rep.genCls(col != null ? col : parentCol, parentCol));
        clsMap.push(`${prefixCls}__item`);
        if (parent.labelWidth)
            clsMap.push(`${prefixCls}__item-fixed`);
        if (type)
            clsMap.push(`${prefixCls}__type-${type}`);
        clsMap.forEach(cls => ren.addClass(el, cls));
    }
    ngAfterViewInit() {
        this.setClass();
        this.checkContent();
    }
    ngOnChanges() {
        this.setClass();
    }
    checkContent() {
        const { conEl } = this;
        const def = this.default;
        if (!(def != null ? def : this.parentComp?.default)) {
            return;
        }
        const el = conEl.nativeElement;
        const cls = `sv__default`;
        if (el.classList.contains(cls)) {
            el.classList.remove(cls);
        }
        if (isEmpty(el)) {
            el.classList.add(cls);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: SVComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.3.15", type: SVComponent, isStandalone: true, selector: "sv, [sv]", inputs: { optional: "optional", optionalHelp: "optionalHelp", optionalHelpColor: "optionalHelpColor", label: "label", unit: "unit", col: ["col", "col", (v) => (v == null ? null : numberAttribute(v))], default: ["default", "default", (v) => (v == null ? null : booleanAttribute(v))], type: "type", noColon: ["noColon", "noColon", (v) => (v == null ? null : booleanAttribute(v))], hideLabel: ["hideLabel", "hideLabel", booleanAttribute] }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue" } }, viewQueries: [{ propertyName: "conEl", first: true, predicate: ["conEl"], descendants: true }], exportAs: ["sv"], usesOnChanges: true, ngImport: i0, template: "@if (!hideLabel) {\n  <div\n    class=\"sv__label\"\n    [class.sv__label-empty]=\"!label\"\n    [class.sv__label-width]=\"labelWidth !== null && labelWidth !== undefined\"\n    [class.sv__no-colon]=\"_noColon\"\n    [style.width.px]=\"labelWidth\"\n  >\n    <span class=\"sv__label-text\">\n      <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    @if (optional || optionalHelp) {\n      <span class=\"sv__label-optional\" [class.sv__label-optional-no-text]=\"!optional\">\n        <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n        @if (optionalHelp) {\n          <nz-icon\n            nz-tooltip\n            [nzTooltipTitle]=\"optionalHelp\"\n            [nzTooltipColor]=\"optionalHelpColor\"\n            nzType=\"question-circle\"\n          />\n        }\n      </span>\n    }\n  </div>\n}\n<div class=\"sv__detail\">\n  <span (cdkObserveContent)=\"checkContent()\" #conEl>\n    <ng-content />\n  </span>\n  @if (!!unit) {\n    <span class=\"sv__unit\" *nzStringTemplateOutlet=\"unit\">{{ unit }}</span>\n  }\n</div>\n", dependencies: [{ kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: SVComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sv, [sv]', exportAs: 'sv', host: {
                        '[style.padding-left.px]': 'paddingValue',
                        '[style.padding-right.px]': 'paddingValue'
                    }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [NzStringTemplateOutletDirective, NzTooltipDirective, NzIconDirective, CdkObserveContent], template: "@if (!hideLabel) {\n  <div\n    class=\"sv__label\"\n    [class.sv__label-empty]=\"!label\"\n    [class.sv__label-width]=\"labelWidth !== null && labelWidth !== undefined\"\n    [class.sv__no-colon]=\"_noColon\"\n    [style.width.px]=\"labelWidth\"\n  >\n    <span class=\"sv__label-text\">\n      <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n    </span>\n    @if (optional || optionalHelp) {\n      <span class=\"sv__label-optional\" [class.sv__label-optional-no-text]=\"!optional\">\n        <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n        @if (optionalHelp) {\n          <nz-icon\n            nz-tooltip\n            [nzTooltipTitle]=\"optionalHelp\"\n            [nzTooltipColor]=\"optionalHelpColor\"\n            nzType=\"question-circle\"\n          />\n        }\n      </span>\n    }\n  </div>\n}\n<div class=\"sv__detail\">\n  <span (cdkObserveContent)=\"checkContent()\" #conEl>\n    <ng-content />\n  </span>\n  @if (!!unit) {\n    <span class=\"sv__unit\" *nzStringTemplateOutlet=\"unit\">{{ unit }}</span>\n  }\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { conEl: [{
                type: ViewChild,
                args: ['conEl', { static: false }]
            }], optional: [{
                type: Input
            }], optionalHelp: [{
                type: Input
            }], optionalHelpColor: [{
                type: Input
            }], label: [{
                type: Input
            }], unit: [{
                type: Input
            }], col: [{
                type: Input,
                args: [{ transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }], default: [{
                type: Input,
                args: [{ transform: (v) => (v == null ? null : booleanAttribute(v)) }]
            }], type: [{
                type: Input
            }], noColon: [{
                type: Input,
                args: [{ transform: (v) => (v == null ? null : booleanAttribute(v)) }]
            }], hideLabel: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }] } });

const COMPONENTS = [SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent];
class SVModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: SVModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.3.15", ngImport: i0, type: SVModule, imports: [CommonModule, ObserversModule, NzTooltipModule, NzIconModule, NzOutletModule, SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent], exports: [SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: SVModule, imports: [CommonModule, ObserversModule, NzTooltipModule, NzIconModule, NzOutletModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.15", ngImport: i0, type: SVModule, decorators: [{
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
