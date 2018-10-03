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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy92aWV3L3ZpZXcuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWJjL3ZpZXcvdmlldy1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3ZpZXcvdmlldy10aXRsZS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvdmlldy92aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy92aWV3L3ZpZXcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTVkNvbmZpZyB7XG4gIC8qKiDDpcKkwqfDpcKwwo8gKi9cbiAgc2l6ZTogJ3NtYWxsJyB8ICdsYXJnZSc7XG4gIC8qKiDDqcKXwrTDqMK3wp3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMzJgICovXG4gIGd1dHRlciA9IDMyO1xuICAvKiogw6XCuMKDw6XCscKAw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYGhvcml6b250YWxgICovXG4gIGxheW91dCA9ICdob3Jpem9udGFsJztcbiAgLyoqIMOlwojCl8OmwpXCsMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAzYCAqL1xuICBjb2wgPSAzO1xuICAvKiogw6bCmMKvw6XCkMKmw6bCmMK+w6fCpMK6w6nCu8KYw6jCrsKkw6XCgMK8w6/CvMKMw6XCvcKTw6XChsKFw6XCrsK5w6TCuMK6w6fCqcK6w6XCgMK8w6bCl8K2w6bCmMK+w6fCpMK6IGAtYMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYCAqL1xuICBkZWZhdWx0ID0gdHJ1ZTtcbiAgLyoqIGBsYWJlbGAgw6XCm8K6w6XCrsKaw6XCrsK9w6XCusKmw6/CvMKMw6jCi8KlIGBudWxsYCDDpsKIwpYgYHVuZGVmaW5lZGAgw6jCocKow6fCpMK6w6nCncKew6XCm8K6w6XCrsKaw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYG51bGxgICovXG4gIGxhYmVsV2lkdGggPSBudWxsO1xufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdXBkYXRlSG9zdENsYXNzLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFNWQ29uZmlnIH0gZnJvbSAnLi92aWV3LmNvbmZpZyc7XG5cbmNvbnN0IHByZWZpeENscyA9IGBzdmA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N2LWNvbnRhaW5lciwgW3N2LWNvbnRhaW5lcl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdmlldy1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU1ZDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICAvLyNyZWdpb24gZmllbGRzXG5cbiAgX3RpdGxlID0gJyc7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2l6ZTogJ3NtYWxsJyB8ICdsYXJnZSc7XG5cbiAgLyoqIMOlwojCl8OowqHCqMOpwqHCucOpwpfCtMOowrfCncOvwrzCjMOlwo3ClcOkwr3CjcOkwrjCuiBgcHhgICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIGd1dHRlcjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGxheW91dDogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcblxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIobnVsbClcbiAgbGFiZWxXaWR0aDogbnVtYmVyO1xuXG4gIC8qKiDDpsKMwofDpcKuwprDpMK/wqHDpsKBwq/DpsKcwoDDpcKkwprDpcKIwobDpcKHwqDDpcKIwpfDpcKxwpXDp8KkwrrDr8K8wozDpsKcwoDDp8K7wojDpMK4woDDqMKhwozDpcKHwqDDpcKIwpfDp8KUwrEgY29sIMOpwoXCjcOnwr3CrsOnwrvCk8OlwpDCiMOlwpPCjcOlwrrClMOlwrzCj8OowqfChMOlwojCmcOlwobCs8Olwq7CmiAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBjb2w6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBkZWZhdWx0OiBib29sZWFuO1xuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbjogUmVuZGVyZXIyLCBjb2c6IFNWQ29uZmlnKSB7XG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpIHtcbiAgICBjb25zdCB7IGVsLCByZW4sIHNpemUsIGxheW91dCB9ID0gdGhpcztcbiAgICB1cGRhdGVIb3N0Q2xhc3MoZWwsIHJlbiwge1xuICAgICAgW2Ake3ByZWZpeENsc31fX2NvbnRhaW5lcmBdOiB0cnVlLFxuICAgICAgW2Ake3ByZWZpeENsc31fXyR7c2l6ZX1gXTogdHJ1ZSxcbiAgICAgIFtgJHtwcmVmaXhDbHN9X18ke2xheW91dH1gXTogdHJ1ZSxcbiAgICAgIFtgY2xlYXJmaXhgXTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU1ZDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3ZpZXctY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N2LXRpdGxlLCBbc3YtdGl0bGVdJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc3ZfX3RpdGxlXSc6ICd0cnVlJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgU1ZUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihcbiAgICBASG9zdCgpXG4gICAgQE9wdGlvbmFsKClcbiAgICBwcml2YXRlIHBhcmVudDogU1ZDb250YWluZXJDb21wb25lbnQsXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW46IFJlbmRlcmVyMixcbiAgKSB7XG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdi10aXRsZV0gbXVzdCBpbmNsdWRlICdzdi1jb250YWluZXInIGNvbXBvbmVudGApO1xuICAgIH1cbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKSB7XG4gICAgY29uc3QgeyBndXR0ZXIgfSA9IHRoaXMucGFyZW50O1xuICAgIGNvbnN0IHsgZWwgfSA9IHRoaXM7XG4gICAgdGhpcy5yZW4uc2V0U3R5bGUoZWwsICdwYWRkaW5nLWxlZnQnLCBgJHtndXR0ZXIgLyAyfXB4YCk7XG4gICAgdGhpcy5yZW4uc2V0U3R5bGUoZWwsICdwYWRkaW5nLXJpZ2h0JywgYCR7Z3V0dGVyIC8gMn1weGApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBIb3N0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIE9uQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgSG9zdEJpbmRpbmcsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3BvbnNpdmVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGlzRW1wdHksIElucHV0TnVtYmVyLCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFNWQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5jb25zdCBwcmVmaXhDbHMgPSBgc3ZgO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdiwgW3N2XScsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFNWQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnY29uRWwnKVxuICBwcml2YXRlIGNvbkVsOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBjbHNNYXA6IHN0cmluZ1tdID0gW107XG5cbiAgLy8jcmVnaW9uIGZpZWxkc1xuXG4gIF9sYWJlbCA9ICcnO1xuICBfbGFiZWxUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCBsYWJlbCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9sYWJlbCA9IG51bGw7XG4gICAgICB0aGlzLl9sYWJlbFRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sYWJlbCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcihudWxsKVxuICBjb2w6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKG51bGwpXG4gIGRlZmF1bHQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgdHlwZTogJ3ByaW1hcnknIHwgJ3N1Y2Nlc3MnIHwgJ2RhbmdlcicgfCAnd2FybmluZyc7XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLWxlZnQucHgnKVxuICBnZXQgcGFkZGluZ0xlZnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ3V0dGVyIC8gMjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1yaWdodC5weCcpXG4gIGdldCBwYWRkaW5nUmlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuZ3V0dGVyIC8gMjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBIb3N0KClcbiAgICBAT3B0aW9uYWwoKVxuICAgIHB1YmxpYyBwYXJlbnQ6IFNWQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIHByaXZhdGUgcmVwOiBSZXNwb25zaXZlU2VydmljZSxcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbjogUmVuZGVyZXIyLFxuICApIHtcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N2XSBtdXN0IGluY2x1ZGUgJ3N2LWNvbnRhaW5lcicgY29tcG9uZW50YCk7XG4gICAgfVxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpIHtcbiAgICBjb25zdCB7IGVsLCByZW4sIGNvbCwgY2xzTWFwLCB0eXBlLCByZXAgfSA9IHRoaXM7XG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5yZW1vdmVDbGFzcyhlbCwgY2xzKSk7XG4gICAgY2xzTWFwLmxlbmd0aCA9IDA7XG4gICAgY2xzTWFwLnB1c2goLi4ucmVwLmdlbkNscyhjb2wgIT0gbnVsbCA/IGNvbCA6IHRoaXMucGFyZW50LmNvbCkpO1xuICAgIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX2l0ZW1gKTtcbiAgICBpZiAodGhpcy5wYXJlbnQubGFiZWxXaWR0aCkgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9faXRlbS1maXhlZGApO1xuICAgIGlmICh0eXBlKSBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X190eXBlLSR7dHlwZX1gKTtcbiAgICBjbHNNYXAuZm9yRWFjaChjbHMgPT4gcmVuLmFkZENsYXNzKGVsLCBjbHMpKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpIHtcbiAgICBjb25zdCB7IGNvbkVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGRlZiA9IHRoaXMuZGVmYXVsdDtcbiAgICBpZiAoIShkZWYgIT0gbnVsbCA/IGRlZiA6IHRoaXMucGFyZW50LmRlZmF1bHQpKSByZXR1cm47XG4gICAgY29uc3QgZWwgPSBjb25FbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGNscyA9IGBzdl9fZGVmYXVsdGA7XG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhjbHMpKSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgfVxuICAgIGlmIChpc0VtcHR5KGVsKSkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZlcnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcblxuaW1wb3J0IHsgU1ZDb25maWcgfSBmcm9tICcuL3ZpZXcuY29uZmlnJztcbmltcG9ydCB7IFNWQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU1ZUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vdmlldy10aXRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU1ZDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtTVkNvbnRhaW5lckNvbXBvbmVudCwgU1ZDb21wb25lbnQsIFNWVGl0bGVDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPYnNlcnZlcnNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBTVk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBTVk1vZHVsZSwgcHJvdmlkZXJzOiBbU1ZDb25maWddIH07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