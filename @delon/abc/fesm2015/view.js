import { __decorate, __metadata } from 'tslib';
import * as i0 from '@angular/core';
import { ɵɵdirectiveInject, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵsetClassMetadata, Component, Input, ElementRef, Renderer2, Host, Optional, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { InputNumber, InputBoolean } from '@delon/util/decorator';
import { NgIf, CommonModule, NgStyle } from '@angular/common';
import { NzTooltipDirective, NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ResponsiveService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { CdkObserveContent, ObserversModule } from '@angular/cdk/observers';

class SVContainerComponent {
    constructor(configSrv) {
        configSrv.attach(this, 'sv', {
            size: 'large',
            gutter: 32,
            layout: 'horizontal',
            col: 3,
            default: true,
        });
    }
}
/** @nocollapse */ SVContainerComponent.ɵfac = function SVContainerComponent_Factory(t) { return new (t || SVContainerComponent)(ɵɵdirectiveInject(AlainConfigService)); };
/** @nocollapse */ SVContainerComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: SVContainerComponent, selector: "sv-container, [sv-container]", inputs: { title: "title", size: "size", gutter: "gutter", layout: "layout", labelWidth: "labelWidth", col: "col", default: "default" }, host: { properties: { "class.sv__container": "true", "class.sv__horizontal": "layout === 'horizontal'", "class.sv__vertical": "layout === 'vertical'", "class.sv__small": "size === 'small'", "class.sv__large": "size === 'large'", "class.clearfix": "true" } }, exportAs: ["svContainer"], ngImport: i0, template: "<div class=\"ant-row\" [ngStyle]=\"{ 'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2) }\">\n  <sv-title *ngIf=\"title\">\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n  </sv-title>\n  <ng-content></ng-content>\n</div>\n", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], SVContainerComponent.prototype, "gutter", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], SVContainerComponent.prototype, "labelWidth", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], SVContainerComponent.prototype, "col", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SVContainerComponent, [{
        type: Component,
        args: [{
                selector: 'sv-container, [sv-container]',
                exportAs: 'svContainer',
                templateUrl: './sv-container.component.html',
                host: {
                    '[class.sv__container]': 'true',
                    '[class.sv__horizontal]': `layout === 'horizontal'`,
                    '[class.sv__vertical]': `layout === 'vertical'`,
                    '[class.sv__small]': `size === 'small'`,
                    '[class.sv__large]': `size === 'large'`,
                    '[class.clearfix]': `true`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: AlainConfigService }]; }, { title: [{
            type: Input
        }], size: [{
            type: Input
        }], gutter: [{
            type: Input
        }], layout: [{
            type: Input
        }], labelWidth: [{
            type: Input
        }], col: [{
            type: Input
        }], default: [{
            type: Input
        }] }); })();

class SVTitleComponent {
    constructor(el, parent, ren) {
        this.parent = parent;
        this.ren = ren;
        if (parent == null) {
            throw new Error(`[sv-title] must include 'sv-container' component`);
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
/** @nocollapse */ SVTitleComponent.ɵfac = function SVTitleComponent_Factory(t) { return new (t || SVTitleComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SVContainerComponent, 9), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ SVTitleComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: SVTitleComponent, selector: "sv-title, [sv-title]", host: { properties: { "class.sv__title": "true" } }, exportAs: ["svTitle"], ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SVTitleComponent, [{
        type: Component,
        args: [{
                selector: 'sv-title, [sv-title]',
                exportAs: 'svTitle',
                template: '<ng-content></ng-content>',
                host: {
                    '[class.sv__title]': 'true',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ElementRef }, { type: SVContainerComponent, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }, { type: Renderer2 }]; }, null); })();

class SVValueComponent {
    constructor() {
        this.size = 'default';
    }
}
/** @nocollapse */ SVValueComponent.ɵfac = function SVValueComponent_Factory(t) { return new (t || SVValueComponent)(); };
/** @nocollapse */ SVValueComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: SVValueComponent, selector: "sv-value, [sv-value]", inputs: { prefix: "prefix", unit: "unit", tooltip: "tooltip", size: "size" }, host: { properties: { "class.sv__value": "true", "class.sv__value-small": "size === 'small'", "class.sv__value-large": "size === 'large'" } }, exportAs: ["svValue"], ngImport: i0, template: `
    <em *ngIf="prefix" class="sv__value-prefix" [innerHTML]="prefix"></em>
    <span nz-tooltip [nzTooltipTitle]="tooltip" class="sv__value-text"><ng-content></ng-content></span>
    <em *ngIf="unit" class="sv__value-unit" [innerHTML]="unit"></em>
  `, isInline: true, directives: [{ type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipTitle", "nz-tooltip", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SVValueComponent, [{
        type: Component,
        args: [{
                selector: 'sv-value, [sv-value]',
                exportAs: 'svValue',
                template: `
    <em *ngIf="prefix" class="sv__value-prefix" [innerHTML]="prefix"></em>
    <span nz-tooltip [nzTooltipTitle]="tooltip" class="sv__value-text"><ng-content></ng-content></span>
    <em *ngIf="unit" class="sv__value-unit" [innerHTML]="unit"></em>
  `,
                host: {
                    '[class.sv__value]': 'true',
                    '[class.sv__value-small]': `size === 'small'`,
                    '[class.sv__value-large]': `size === 'large'`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { prefix: [{
            type: Input
        }], unit: [{
            type: Input
        }], tooltip: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();

const prefixCls = `sv`;
class SVComponent {
    constructor(el, parent, rep, ren) {
        this.parent = parent;
        this.rep = rep;
        this.ren = ren;
        this.clsMap = [];
        if (parent == null) {
            throw new Error(`[sv] must include 'sv-container' component`);
        }
        this.el = el.nativeElement;
    }
    // #endregion
    get paddingValue() {
        return this.parent && this.parent.gutter / 2;
    }
    get labelWidth() {
        const { labelWidth, layout } = this.parent;
        return layout === 'horizontal' ? labelWidth : null;
    }
    setClass() {
        const { el, ren, col, clsMap, type, rep } = this;
        clsMap.forEach(cls => ren.removeClass(el, cls));
        clsMap.length = 0;
        clsMap.push(...rep.genCls(col != null ? col : this.parent.col));
        clsMap.push(`${prefixCls}__item`);
        if (this.parent.labelWidth)
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
        if (!(def != null ? def : this.parent.default)) {
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
}
/** @nocollapse */ SVComponent.ɵfac = function SVComponent_Factory(t) { return new (t || SVComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SVContainerComponent, 9), ɵɵdirectiveInject(ResponsiveService), ɵɵdirectiveInject(Renderer2)); };
/** @nocollapse */ SVComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: SVComponent, selector: "sv, [sv]", inputs: { optional: "optional", optionalHelp: "optionalHelp", optionalHelpColor: "optionalHelpColor", label: "label", unit: "unit", col: "col", default: "default", type: "type" }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue" } }, viewQueries: [{ propertyName: "conEl", first: true, predicate: ["conEl"], emitDistinctChangesOnly: false, descendants: true }], exportAs: ["sv"], usesOnChanges: true, ngImport: i0, template: "<div class=\"sv__label\" [class.sv__label-empty]=\"!label\" [class.sv__label-width]=\"labelWidth != null\" [style.width.px]=\"labelWidth\">\n  <span class=\"sv__label-text\">\n    <ng-container *nzStringTemplateOutlet=\"label\">{{ label }}</ng-container>\n  </span>\n  <span *ngIf=\"optional || optionalHelp\" class=\"sv__label-optional\" [class.sv__label-optional-no-text]=\"!optional\">\n    <ng-container *nzStringTemplateOutlet=\"optional\">{{ optional }}</ng-container>\n    <i *ngIf=\"optionalHelp\" nz-tooltip [nzTooltipTitle]=\"optionalHelp\" [nzTooltipColor]=\"optionalHelpColor\" nz-icon nzType=\"question-circle\"></i>\n  </span>\n</div>\n<div class=\"sv__detail\">\n  <span (cdkObserveContent)=\"checkContent()\" #conEl>\n    <ng-content></ng-content>\n  </span>\n  <ng-container *ngIf=\"!!unit\">\n    <span class=\"sv__unit\" *nzStringTemplateOutlet=\"unit\">{{ unit }}</span>\n  </ng-container>\n</div>\n", directives: [{ type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipTitle", "nz-tooltip", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SVComponent.prototype, "col", void 0);
__decorate([
    InputBoolean(null),
    __metadata("design:type", Boolean)
], SVComponent.prototype, "default", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SVComponent, [{
        type: Component,
        args: [{
                selector: 'sv, [sv]',
                exportAs: 'sv',
                templateUrl: './sv.component.html',
                host: {
                    '[style.padding-left.px]': 'paddingValue',
                    '[style.padding-right.px]': 'paddingValue',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ElementRef }, { type: SVContainerComponent, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }, { type: ResponsiveService }, { type: Renderer2 }]; }, { conEl: [{
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
            type: Input
        }], default: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();

const COMPONENTS = [SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent];
class SVModule {
}
/** @nocollapse */ SVModule.ɵmod = ɵɵdefineNgModule({ type: SVModule });
/** @nocollapse */ SVModule.ɵinj = ɵɵdefineInjector({ factory: function SVModule_Factory(t) { return new (t || SVModule)(); }, imports: [[CommonModule, ObserversModule, NzToolTipModule, NzIconModule, NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SVModule, { declarations: [SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent], imports: [CommonModule, ObserversModule, NzToolTipModule, NzIconModule, NzOutletModule], exports: [SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SVModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ObserversModule, NzToolTipModule, NzIconModule, NzOutletModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
ɵɵsetComponentScope(SVContainerComponent, [NgStyle, NgIf, SVTitleComponent, NzStringTemplateOutletDirective], []);

/**
 * Generated bundle index. Do not edit.
 */

export { SVComponent, SVContainerComponent, SVModule, SVTitleComponent, SVValueComponent };
//# sourceMappingURL=view.js.map
