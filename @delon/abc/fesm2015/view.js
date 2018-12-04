import { __decorate, __metadata } from 'tslib';
import { ResponsiveService } from '@delon/theme';
import { updateHostClass, InputNumber, isEmpty, InputBoolean } from '@delon/util';
import { Component, Input, ElementRef, Renderer2, TemplateRef, Host, Optional, ViewChild, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SVConfig {
    constructor() {
        /**
         * 间距，默认：`32`
         */
        this.gutter = 32;
        /**
         * 布局，默认：`horizontal`
         */
        this.layout = 'horizontal';
        /**
         * 列数，默认：`3`
         */
        this.col = 3;
        /**
         * 是否显示默认值，当内容为空值时显示 `-`，默认：`true`
         */
        this.default = true;
        /**
         * `label` 固定宽度，若 `null` 或 `undefined` 表示非固定，默认：`null`
         */
        this.labelWidth = null;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const prefixCls = `sv`;
class SVContainerComponent {
    /**
     * @param {?} el
     * @param {?} ren
     * @param {?} cog
     */
    constructor(el, ren, cog) {
        this.ren = ren;
        //#region fields
        this._title = '';
        this.el = el.nativeElement;
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
    setClass() {
        const { el, ren, size, layout } = this;
        updateHostClass(el, ren, {
            [`${prefixCls}__container`]: true,
            [`${prefixCls}__${size}`]: true,
            [`${prefixCls}__${layout}`]: true,
            [`clearfix`]: true,
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClass();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setClass();
    }
}
SVContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sv-container, [sv-container]',
                template: "<div class=\"ant-row\" [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\n  <sv-title *ngIf=\"_title || _titleTpl\">\n    <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\n  </sv-title>\n  <ng-content></ng-content>\n</div>\n",
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
SVContainerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: SVConfig }
];
SVContainerComponent.propDecorators = {
    title: [{ type: Input }],
    size: [{ type: Input }],
    gutter: [{ type: Input }],
    layout: [{ type: Input }],
    labelWidth: [{ type: Input }],
    col: [{ type: Input }],
    default: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], SVContainerComponent.prototype, "gutter", void 0);
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SVContainerComponent.prototype, "labelWidth", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], SVContainerComponent.prototype, "col", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SVTitleComponent {
    /**
     * @param {?} parent
     * @param {?} el
     * @param {?} ren
     */
    constructor(parent, el, ren) {
        this.parent = parent;
        this.ren = ren;
        if (parent == null) {
            throw new Error(`[sv-title] must include 'sv-container' component`);
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
SVTitleComponent.decorators = [
    { type: Component, args: [{
                selector: 'sv-title, [sv-title]',
                template: '<ng-content></ng-content>',
                host: {
                    '[class.sv__title]': 'true',
                }
            }] }
];
/** @nocollapse */
SVTitleComponent.ctorParameters = () => [
    { type: SVContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
    { type: ElementRef },
    { type: Renderer2 }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const prefixCls$1 = `sv`;
class SVComponent {
    /**
     * @param {?} parent
     * @param {?} rep
     * @param {?} el
     * @param {?} ren
     */
    constructor(parent, rep, el, ren) {
        this.parent = parent;
        this.rep = rep;
        this.ren = ren;
        this.clsMap = [];
        //#region fields
        this._label = '';
        if (parent == null) {
            throw new Error(`[sv] must include 'sv-container' component`);
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
     * @return {?}
     */
    get paddingLeft() {
        return this.parent && this.parent.gutter / 2;
    }
    /**
     * @return {?}
     */
    get paddingRight() {
        return this.parent && this.parent.gutter / 2;
    }
    /**
     * @return {?}
     */
    setClass() {
        const { el, ren, col, clsMap, type, rep } = this;
        clsMap.forEach(cls => ren.removeClass(el, cls));
        clsMap.length = 0;
        clsMap.push(...rep.genCls(col != null ? col : this.parent.col));
        clsMap.push(`${prefixCls$1}__item`);
        if (this.parent.labelWidth)
            clsMap.push(`${prefixCls$1}__item-fixed`);
        if (type)
            clsMap.push(`${prefixCls$1}__type-${type}`);
        clsMap.forEach(cls => ren.addClass(el, cls));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setClass();
        this.checkContent();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setClass();
    }
    /**
     * @return {?}
     */
    checkContent() {
        const { conEl } = this;
        /** @type {?} */
        const def = this.default;
        if (!(def != null ? def : this.parent.default))
            return;
        /** @type {?} */
        const el = /** @type {?} */ (conEl.nativeElement);
        /** @type {?} */
        const cls = `sv__default`;
        if (el.classList.contains(cls)) {
            el.classList.remove(cls);
        }
        if (isEmpty(el)) {
            el.classList.add(cls);
        }
    }
}
SVComponent.decorators = [
    { type: Component, args: [{
                selector: 'sv, [sv]',
                template: "<div class=\"sv__label\" [class.sv__label-empty]=\"!_label && !_labelTpl\"\n  [style.width.px]=\"parent.labelWidth\">\n  <ng-container *ngIf=\"_label; else _labelTpl\">{{_label}}</ng-container>\n</div>\n<div class=\"sv__detail\" (cdkObserveContent)=\"checkContent()\" #conEl>\n  <ng-content></ng-content>\n</div>\n",
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
SVComponent.ctorParameters = () => [
    { type: SVContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
    { type: ResponsiveService },
    { type: ElementRef },
    { type: Renderer2 }
];
SVComponent.propDecorators = {
    conEl: [{ type: ViewChild, args: ['conEl',] }],
    label: [{ type: Input }],
    col: [{ type: Input }],
    default: [{ type: Input }],
    type: [{ type: Input }],
    paddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }],
    paddingRight: [{ type: HostBinding, args: ['style.padding-right.px',] }]
};
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SVComponent.prototype, "col", void 0);
__decorate([
    InputBoolean(null),
    __metadata("design:type", Boolean)
], SVComponent.prototype, "default", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [SVContainerComponent, SVComponent, SVTitleComponent];
class SVModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: SVModule, providers: [SVConfig] };
    }
}
SVModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ObserversModule],
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

export { SVContainerComponent, SVTitleComponent, SVComponent, SVConfig, SVModule };

//# sourceMappingURL=view.js.map