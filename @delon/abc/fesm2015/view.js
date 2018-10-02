import { __decorate, __metadata } from 'tslib';
import { Component, Input, ElementRef, Renderer2, TemplateRef, Host, Optional, ViewChild, HostBinding, NgModule } from '@angular/core';
import { updateHostClass, InputNumber, isEmpty, InputBoolean } from '@delon/util';
import { ResponsiveService } from '@delon/theme';
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
                template: "<div class=\"ant-row\" [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\r\n  <sv-title *ngIf=\"_title || _titleTpl\">\r\n    <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\r\n  </sv-title>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
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
                template: "<div class=\"sv__label\" [class.sv__label-empty]=\"!_label && !_labelTpl\"\r\n  [style.width.px]=\"parent.labelWidth\">\r\n  <ng-container *ngIf=\"_label; else _labelTpl\">{{_label}}</ng-container>\r\n</div>\r\n<div class=\"sv__detail\" (cdkObserveContent)=\"checkContent()\" #conEl>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy92aWV3L3ZpZXcuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWJjL3ZpZXcvdmlldy1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3ZpZXcvdmlldy10aXRsZS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvdmlldy92aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy92aWV3L3ZpZXcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTVkNvbmZpZyB7XHJcbiAgLyoqIMOlwqTCp8OlwrDCjyAqL1xyXG4gIHNpemU6ICdzbWFsbCcgfCAnbGFyZ2UnO1xyXG4gIC8qKiDDqcKXwrTDqMK3wp3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMzJgICovXHJcbiAgZ3V0dGVyID0gMzI7XHJcbiAgLyoqIMOlwrjCg8OlwrHCgMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBob3Jpem9udGFsYCAqL1xyXG4gIGxheW91dCA9ICdob3Jpem9udGFsJztcclxuICAvKiogw6XCiMKXw6bClcKww6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDNgICovXHJcbiAgY29sID0gMztcclxuICAvKiogw6bCmMKvw6XCkMKmw6bCmMK+w6fCpMK6w6nCu8KYw6jCrsKkw6XCgMK8w6/CvMKMw6XCvcKTw6XChsKFw6XCrsK5w6TCuMK6w6fCqcK6w6XCgMK8w6bCl8K2w6bCmMK+w6fCpMK6IGAtYMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYCAqL1xyXG4gIGRlZmF1bHQgPSB0cnVlO1xyXG4gIC8qKiBgbGFiZWxgIMOlwpvCusOlwq7CmsOlwq7CvcOlwrrCpsOvwrzCjMOowovCpSBgbnVsbGAgw6bCiMKWIGB1bmRlZmluZWRgIMOowqHCqMOnwqTCusOpwp3CnsOlwpvCusOlwq7CmsOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBudWxsYCAqL1xyXG4gIGxhYmVsV2lkdGggPSBudWxsO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIE9uSW5pdCxcclxuICBPbkNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHVwZGF0ZUhvc3RDbGFzcywgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7IFNWQ29uZmlnIH0gZnJvbSAnLi92aWV3LmNvbmZpZyc7XHJcblxyXG5jb25zdCBwcmVmaXhDbHMgPSBgc3ZgO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdi1jb250YWluZXIsIFtzdi1jb250YWluZXJdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdmlldy1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU1ZDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XHJcbiAgLy8jcmVnaW9uIGZpZWxkc1xyXG5cclxuICBfdGl0bGUgPSAnJztcclxuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcclxuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNpemU6ICdzbWFsbCcgfCAnbGFyZ2UnO1xyXG5cclxuICAvKiogw6XCiMKXw6jCocKow6nCocK5w6nCl8K0w6jCt8Kdw6/CvMKMw6XCjcKVw6TCvcKNw6TCuMK6IGBweGAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgZ3V0dGVyOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbGF5b3V0OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcihudWxsKVxyXG4gIGxhYmVsV2lkdGg6IG51bWJlcjtcclxuXHJcbiAgLyoqIMOmwozCh8Olwq7CmsOkwr/CocOmwoHCr8OmwpzCgMOlwqTCmsOlwojChsOlwofCoMOlwojCl8OlwrHClcOnwqTCusOvwrzCjMOmwpzCgMOnwrvCiMOkwrjCgMOowqHCjMOlwofCoMOlwojCl8OnwpTCsSBjb2wgw6nChcKNw6fCvcKuw6fCu8KTw6XCkMKIw6XCk8KNw6XCusKUw6XCvMKPw6jCp8KEw6XCiMKZw6XChsKzw6XCrsKaICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIGNvbDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRlZmF1bHQ6IGJvb2xlYW47XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW46IFJlbmRlcmVyMiwgY29nOiBTVkNvbmZpZykge1xyXG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENsYXNzKCkge1xyXG4gICAgY29uc3QgeyBlbCwgcmVuLCBzaXplLCBsYXlvdXQgfSA9IHRoaXM7XHJcbiAgICB1cGRhdGVIb3N0Q2xhc3MoZWwsIHJlbiwge1xyXG4gICAgICBbYCR7cHJlZml4Q2xzfV9fY29udGFpbmVyYF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9X18ke3NpemV9YF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9X18ke2xheW91dH1gXTogdHJ1ZSxcclxuICAgICAgW2BjbGVhcmZpeGBdOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2V0Q2xhc3MoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBIb3N0LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU1ZDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3ZpZXctY29udGFpbmVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N2LXRpdGxlLCBbc3YtdGl0bGVdJyxcclxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3Muc3ZfX3RpdGxlXSc6ICd0cnVlJyxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU1ZUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASG9zdCgpXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IFNWQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbjogUmVuZGVyZXIyLFxyXG4gICkge1xyXG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N2LXRpdGxlXSBtdXN0IGluY2x1ZGUgJ3N2LWNvbnRhaW5lcicgY29tcG9uZW50YCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3MoKSB7XHJcbiAgICBjb25zdCB7IGd1dHRlciB9ID0gdGhpcy5wYXJlbnQ7XHJcbiAgICBjb25zdCB7IGVsIH0gPSB0aGlzO1xyXG4gICAgdGhpcy5yZW4uc2V0U3R5bGUoZWwsICdwYWRkaW5nLWxlZnQnLCBgJHtndXR0ZXIgLyAyfXB4YCk7XHJcbiAgICB0aGlzLnJlbi5zZXRTdHlsZShlbCwgJ3BhZGRpbmctcmlnaHQnLCBgJHtndXR0ZXIgLyAyfXB4YCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2V0Q2xhc3MoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgSG9zdCxcclxuICBFbGVtZW50UmVmLFxyXG4gIFJlbmRlcmVyMixcclxuICBPbkNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgT3B0aW9uYWwsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHsgaXNFbXB0eSwgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IFNWQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgcHJlZml4Q2xzID0gYHN2YDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3YsIFtzdl0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3LmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNWQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBAVmlld0NoaWxkKCdjb25FbCcpXHJcbiAgcHJpdmF0ZSBjb25FbDogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGNsc01hcDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgLy8jcmVnaW9uIGZpZWxkc1xyXG5cclxuICBfbGFiZWwgPSAnJztcclxuICBfbGFiZWxUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgbGFiZWwodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX2xhYmVsID0gbnVsbDtcclxuICAgICAgdGhpcy5fbGFiZWxUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcihudWxsKVxyXG4gIGNvbDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4obnVsbClcclxuICBkZWZhdWx0OiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHR5cGU6ICdwcmltYXJ5JyB8ICdzdWNjZXNzJyB8ICdkYW5nZXInIHwgJ3dhcm5pbmcnO1xyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLWxlZnQucHgnKVxyXG4gIGdldCBwYWRkaW5nTGVmdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50Lmd1dHRlciAvIDI7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctcmlnaHQucHgnKVxyXG4gIGdldCBwYWRkaW5nUmlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5ndXR0ZXIgLyAyO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASG9zdCgpXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgcHVibGljIHBhcmVudDogU1ZDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBwcml2YXRlIHJlcDogUmVzcG9uc2l2ZVNlcnZpY2UsXHJcbiAgICBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjIsXHJcbiAgKSB7XHJcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3ZdIG11c3QgaW5jbHVkZSAnc3YtY29udGFpbmVyJyBjb21wb25lbnRgKTtcclxuICAgIH1cclxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzcygpIHtcclxuICAgIGNvbnN0IHsgZWwsIHJlbiwgY29sLCBjbHNNYXAsIHR5cGUsIHJlcCB9ID0gdGhpcztcclxuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscykpO1xyXG4gICAgY2xzTWFwLmxlbmd0aCA9IDA7XHJcbiAgICBjbHNNYXAucHVzaCguLi5yZXAuZ2VuQ2xzKGNvbCAhPSBudWxsID8gY29sIDogdGhpcy5wYXJlbnQuY29sKSk7XHJcbiAgICBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19pdGVtYCk7XHJcbiAgICBpZiAodGhpcy5wYXJlbnQubGFiZWxXaWR0aCkgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9faXRlbS1maXhlZGApO1xyXG4gICAgaWYgKHR5cGUpIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX3R5cGUtJHt0eXBlfWApO1xyXG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5hZGRDbGFzcyhlbCwgY2xzKSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnNldENsYXNzKCk7XHJcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLnNldENsYXNzKCk7XHJcbiAgfVxyXG5cclxuICBjaGVja0NvbnRlbnQoKSB7XHJcbiAgICBjb25zdCB7IGNvbkVsIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgZGVmID0gdGhpcy5kZWZhdWx0O1xyXG4gICAgaWYgKCEoZGVmICE9IG51bGwgPyBkZWYgOiB0aGlzLnBhcmVudC5kZWZhdWx0KSkgcmV0dXJuO1xyXG4gICAgY29uc3QgZWwgPSBjb25FbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgY2xzID0gYHN2X19kZWZhdWx0YDtcclxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xzKSkge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNFbXB0eShlbCkpIHtcclxuICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBPYnNlcnZlcnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcclxuXHJcbmltcG9ydCB7IFNWQ29uZmlnIH0gZnJvbSAnLi92aWV3LmNvbmZpZyc7XHJcbmltcG9ydCB7IFNWQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTVlRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LXRpdGxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNWQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW1NWQ29udGFpbmVyQ29tcG9uZW50LCBTVkNvbXBvbmVudCwgU1ZUaXRsZUNvbXBvbmVudF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE9ic2VydmVyc01vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU1ZNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFNWTW9kdWxlLCBwcm92aWRlcnM6IFtTVkNvbmZpZ10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByZWZpeENscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7c0JBSVcsRUFBRTs7OztzQkFFRixZQUFZOzs7O21CQUVmLENBQUM7Ozs7dUJBRUcsSUFBSTs7OzswQkFFRCxJQUFJOztDQUNsQjs7Ozs7OztBQ0RELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQztBQU92Qjs7Ozs7O0lBeUNFLFlBQVksRUFBYyxFQUFVLEdBQWMsRUFBRSxHQUFhO1FBQTdCLFFBQUcsR0FBSCxHQUFHLENBQVc7O3NCQXJDekMsRUFBRTtRQXNDVCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUs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