import { __spread, __decorate, __metadata } from 'tslib';
import { Component, Input, ElementRef, Renderer2, TemplateRef, Host, Optional, ViewChild, HostBinding, NgModule } from '@angular/core';
import { updateHostClass, InputNumber, isEmpty, InputBoolean } from '@delon/util';
import { ResponsiveService } from '@delon/theme';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SVConfig = /** @class */ (function () {
    function SVConfig() {
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
    return SVConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var prefixCls = "sv";
var SVContainerComponent = /** @class */ (function () {
    //#endregion
    function SVContainerComponent(el, ren, cog) {
        this.ren = ren;
        //#region fields
        this._title = '';
        this.el = el.nativeElement;
        Object.assign(this, cog);
    }
    Object.defineProperty(SVContainerComponent.prototype, "title", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._title = null;
                this._titleTpl = value;
            }
            else {
                this._title = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SVContainerComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a;
        var _b = this, el = _b.el, ren = _b.ren, size = _b.size, layout = _b.layout;
        updateHostClass(el, ren, (_a = {},
            _a[prefixCls + "__container"] = true,
            _a[prefixCls + "__" + size] = true,
            _a[prefixCls + "__" + layout] = true,
            _a["clearfix"] = true,
            _a));
    };
    /**
     * @return {?}
     */
    SVContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    /**
     * @return {?}
     */
    SVContainerComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    SVContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sv-container, [sv-container]',
                    template: "<div class=\"ant-row\" [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\r\n  <sv-title *ngIf=\"_title || _titleTpl\">\r\n    <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\r\n  </sv-title>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    SVContainerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: SVConfig }
    ]; };
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
    return SVContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var SVTitleComponent = /** @class */ (function () {
    function SVTitleComponent(parent, el, ren) {
        this.parent = parent;
        this.ren = ren;
        if (parent == null) {
            throw new Error("[sv-title] must include 'sv-container' component");
        }
        this.el = el.nativeElement;
    }
    /**
     * @return {?}
     */
    SVTitleComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var gutter = this.parent.gutter;
        var el = this.el;
        this.ren.setStyle(el, 'padding-left', gutter / 2 + "px");
        this.ren.setStyle(el, 'padding-right', gutter / 2 + "px");
    };
    /**
     * @return {?}
     */
    SVTitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
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
    SVTitleComponent.ctorParameters = function () { return [
        { type: SVContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return SVTitleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var prefixCls$1 = "sv";
var SVComponent = /** @class */ (function () {
    function SVComponent(parent, rep, el, ren) {
        this.parent = parent;
        this.rep = rep;
        this.ren = ren;
        this.clsMap = [];
        //#region fields
        this._label = '';
        if (parent == null) {
            throw new Error("[sv] must include 'sv-container' component");
        }
        this.el = el.nativeElement;
    }
    Object.defineProperty(SVComponent.prototype, "label", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._label = null;
                this._labelTpl = value;
            }
            else {
                this._label = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SVComponent.prototype, "paddingLeft", {
        //#endregion
        get: /**
         * @return {?}
         */
        function () {
            return this.parent && this.parent.gutter / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SVComponent.prototype, "paddingRight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent && this.parent.gutter / 2;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SVComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a = this, el = _a.el, ren = _a.ren, col = _a.col, clsMap = _a.clsMap, type = _a.type, rep = _a.rep;
        clsMap.forEach(function (cls) { return ren.removeClass(el, cls); });
        clsMap.length = 0;
        clsMap.push.apply(clsMap, __spread(rep.genCls(col != null ? col : this.parent.col)));
        clsMap.push(prefixCls$1 + "__item");
        if (this.parent.labelWidth)
            clsMap.push(prefixCls$1 + "__item-fixed");
        if (type)
            clsMap.push(prefixCls$1 + "__type-" + type);
        clsMap.forEach(function (cls) { return ren.addClass(el, cls); });
    };
    /**
     * @return {?}
     */
    SVComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
        this.checkContent();
    };
    /**
     * @return {?}
     */
    SVComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    /**
     * @return {?}
     */
    SVComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        var conEl = this.conEl;
        /** @type {?} */
        var def = this.default;
        if (!(def != null ? def : this.parent.default))
            return;
        /** @type {?} */
        var el = /** @type {?} */ (conEl.nativeElement);
        /** @type {?} */
        var cls = "sv__default";
        if (el.classList.contains(cls)) {
            el.classList.remove(cls);
        }
        if (isEmpty(el)) {
            el.classList.add(cls);
        }
    };
    SVComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sv, [sv]',
                    template: "<div class=\"sv__label\" [class.sv__label-empty]=\"!_label && !_labelTpl\"\r\n  [style.width.px]=\"parent.labelWidth\">\r\n  <ng-container *ngIf=\"_label; else _labelTpl\">{{_label}}</ng-container>\r\n</div>\r\n<div class=\"sv__detail\" (cdkObserveContent)=\"checkContent()\" #conEl>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    SVComponent.ctorParameters = function () { return [
        { type: SVContainerComponent, decorators: [{ type: Host }, { type: Optional }] },
        { type: ResponsiveService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return SVComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [SVContainerComponent, SVComponent, SVTitleComponent];
var SVModule = /** @class */ (function () {
    function SVModule() {
    }
    /**
     * @return {?}
     */
    SVModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: SVModule, providers: [SVConfig] };
    };
    SVModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ObserversModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return SVModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { SVContainerComponent, SVTitleComponent, SVComponent, SVConfig, SVModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy92aWV3L3ZpZXcuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWJjL3ZpZXcvdmlldy1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3ZpZXcvdmlldy10aXRsZS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvdmlldy92aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy92aWV3L3ZpZXcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTVkNvbmZpZyB7XHJcbiAgLyoqIMOlwqTCp8OlwrDCjyAqL1xyXG4gIHNpemU6ICdzbWFsbCcgfCAnbGFyZ2UnO1xyXG4gIC8qKiDDqcKXwrTDqMK3wp3Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMzJgICovXHJcbiAgZ3V0dGVyID0gMzI7XHJcbiAgLyoqIMOlwrjCg8OlwrHCgMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBob3Jpem9udGFsYCAqL1xyXG4gIGxheW91dCA9ICdob3Jpem9udGFsJztcclxuICAvKiogw6XCiMKXw6bClcKww6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDNgICovXHJcbiAgY29sID0gMztcclxuICAvKiogw6bCmMKvw6XCkMKmw6bCmMK+w6fCpMK6w6nCu8KYw6jCrsKkw6XCgMK8w6/CvMKMw6XCvcKTw6XChsKFw6XCrsK5w6TCuMK6w6fCqcK6w6XCgMK8w6bCl8K2w6bCmMK+w6fCpMK6IGAtYMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmB0cnVlYCAqL1xyXG4gIGRlZmF1bHQgPSB0cnVlO1xyXG4gIC8qKiBgbGFiZWxgIMOlwpvCusOlwq7CmsOlwq7CvcOlwrrCpsOvwrzCjMOowovCpSBgbnVsbGAgw6bCiMKWIGB1bmRlZmluZWRgIMOowqHCqMOnwqTCusOpwp3CnsOlwpvCusOlwq7CmsOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBudWxsYCAqL1xyXG4gIGxhYmVsV2lkdGggPSBudWxsO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIE9uSW5pdCxcclxuICBPbkNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHVwZGF0ZUhvc3RDbGFzcywgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7IFNWQ29uZmlnIH0gZnJvbSAnLi92aWV3LmNvbmZpZyc7XHJcblxyXG5jb25zdCBwcmVmaXhDbHMgPSBgc3ZgO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdi1jb250YWluZXIsIFtzdi1jb250YWluZXJdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdmlldy1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU1ZDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XHJcbiAgLy8jcmVnaW9uIGZpZWxkc1xyXG5cclxuICBfdGl0bGUgPSAnJztcclxuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcclxuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNpemU6ICdzbWFsbCcgfCAnbGFyZ2UnO1xyXG5cclxuICAvKiogw6XCiMKXw6jCocKow6nCocK5w6nCl8K0w6jCt8Kdw6/CvMKMw6XCjcKVw6TCvcKNw6TCuMK6IGBweGAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgZ3V0dGVyOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbGF5b3V0OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcihudWxsKVxyXG4gIGxhYmVsV2lkdGg6IG51bWJlcjtcclxuXHJcbiAgLyoqIMOmwozCh8Olwq7CmsOkwr/CocOmwoHCr8OmwpzCgMOlwqTCmsOlwojChsOlwofCoMOlwojCl8OlwrHClcOnwqTCusOvwrzCjMOmwpzCgMOnwrvCiMOkwrjCgMOowqHCjMOlwofCoMOlwojCl8OnwpTCsSBjb2wgw6nChcKNw6fCvcKuw6fCu8KTw6XCkMKIw6XCk8KNw6XCusKUw6XCvMKPw6jCp8KEw6XCiMKZw6XChsKzw6XCrsKaICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIGNvbDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRlZmF1bHQ6IGJvb2xlYW47XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW46IFJlbmRlcmVyMiwgY29nOiBTVkNvbmZpZykge1xyXG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENsYXNzKCkge1xyXG4gICAgY29uc3QgeyBlbCwgcmVuLCBzaXplLCBsYXlvdXQgfSA9IHRoaXM7XHJcbiAgICB1cGRhdGVIb3N0Q2xhc3MoZWwsIHJlbiwge1xyXG4gICAgICBbYCR7cHJlZml4Q2xzfV9fY29udGFpbmVyYF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9X18ke3NpemV9YF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9X18ke2xheW91dH1gXTogdHJ1ZSxcclxuICAgICAgW2BjbGVhcmZpeGBdOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2V0Q2xhc3MoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBIb3N0LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU1ZDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3ZpZXctY29udGFpbmVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N2LXRpdGxlLCBbc3YtdGl0bGVdJyxcclxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3Muc3ZfX3RpdGxlXSc6ICd0cnVlJyxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU1ZUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASG9zdCgpXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IFNWQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbjogUmVuZGVyZXIyLFxyXG4gICkge1xyXG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N2LXRpdGxlXSBtdXN0IGluY2x1ZGUgJ3N2LWNvbnRhaW5lcicgY29tcG9uZW50YCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVsID0gZWwubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3MoKSB7XHJcbiAgICBjb25zdCB7IGd1dHRlciB9ID0gdGhpcy5wYXJlbnQ7XHJcbiAgICBjb25zdCB7IGVsIH0gPSB0aGlzO1xyXG4gICAgdGhpcy5yZW4uc2V0U3R5bGUoZWwsICdwYWRkaW5nLWxlZnQnLCBgJHtndXR0ZXIgLyAyfXB4YCk7XHJcbiAgICB0aGlzLnJlbi5zZXRTdHlsZShlbCwgJ3BhZGRpbmctcmlnaHQnLCBgJHtndXR0ZXIgLyAyfXB4YCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2V0Q2xhc3MoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgSG9zdCxcclxuICBFbGVtZW50UmVmLFxyXG4gIFJlbmRlcmVyMixcclxuICBPbkNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgT3B0aW9uYWwsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuaW1wb3J0IHsgaXNFbXB0eSwgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IFNWQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgcHJlZml4Q2xzID0gYHN2YDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3YsIFtzdl0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3LmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNWQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBAVmlld0NoaWxkKCdjb25FbCcpXHJcbiAgcHJpdmF0ZSBjb25FbDogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGNsc01hcDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgLy8jcmVnaW9uIGZpZWxkc1xyXG5cclxuICBfbGFiZWwgPSAnJztcclxuICBfbGFiZWxUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgbGFiZWwodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX2xhYmVsID0gbnVsbDtcclxuICAgICAgdGhpcy5fbGFiZWxUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcihudWxsKVxyXG4gIGNvbDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4obnVsbClcclxuICBkZWZhdWx0OiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHR5cGU6ICdwcmltYXJ5JyB8ICdzdWNjZXNzJyB8ICdkYW5nZXInIHwgJ3dhcm5pbmcnO1xyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLWxlZnQucHgnKVxyXG4gIGdldCBwYWRkaW5nTGVmdCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50Lmd1dHRlciAvIDI7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctcmlnaHQucHgnKVxyXG4gIGdldCBwYWRkaW5nUmlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5ndXR0ZXIgLyAyO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASG9zdCgpXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgcHVibGljIHBhcmVudDogU1ZDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBwcml2YXRlIHJlcDogUmVzcG9uc2l2ZVNlcnZpY2UsXHJcbiAgICBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuOiBSZW5kZXJlcjIsXHJcbiAgKSB7XHJcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3ZdIG11c3QgaW5jbHVkZSAnc3YtY29udGFpbmVyJyBjb21wb25lbnRgKTtcclxuICAgIH1cclxuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzcygpIHtcclxuICAgIGNvbnN0IHsgZWwsIHJlbiwgY29sLCBjbHNNYXAsIHR5cGUsIHJlcCB9ID0gdGhpcztcclxuICAgIGNsc01hcC5mb3JFYWNoKGNscyA9PiByZW4ucmVtb3ZlQ2xhc3MoZWwsIGNscykpO1xyXG4gICAgY2xzTWFwLmxlbmd0aCA9IDA7XHJcbiAgICBjbHNNYXAucHVzaCguLi5yZXAuZ2VuQ2xzKGNvbCAhPSBudWxsID8gY29sIDogdGhpcy5wYXJlbnQuY29sKSk7XHJcbiAgICBjbHNNYXAucHVzaChgJHtwcmVmaXhDbHN9X19pdGVtYCk7XHJcbiAgICBpZiAodGhpcy5wYXJlbnQubGFiZWxXaWR0aCkgY2xzTWFwLnB1c2goYCR7cHJlZml4Q2xzfV9faXRlbS1maXhlZGApO1xyXG4gICAgaWYgKHR5cGUpIGNsc01hcC5wdXNoKGAke3ByZWZpeENsc31fX3R5cGUtJHt0eXBlfWApO1xyXG4gICAgY2xzTWFwLmZvckVhY2goY2xzID0+IHJlbi5hZGRDbGFzcyhlbCwgY2xzKSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnNldENsYXNzKCk7XHJcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLnNldENsYXNzKCk7XHJcbiAgfVxyXG5cclxuICBjaGVja0NvbnRlbnQoKSB7XHJcbiAgICBjb25zdCB7IGNvbkVsIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgZGVmID0gdGhpcy5kZWZhdWx0O1xyXG4gICAgaWYgKCEoZGVmICE9IG51bGwgPyBkZWYgOiB0aGlzLnBhcmVudC5kZWZhdWx0KSkgcmV0dXJuO1xyXG4gICAgY29uc3QgZWwgPSBjb25FbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgY2xzID0gYHN2X19kZWZhdWx0YDtcclxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xzKSkge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNFbXB0eShlbCkpIHtcclxuICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBPYnNlcnZlcnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcclxuXHJcbmltcG9ydCB7IFNWQ29uZmlnIH0gZnJvbSAnLi92aWV3LmNvbmZpZyc7XHJcbmltcG9ydCB7IFNWQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTVlRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LXRpdGxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNWQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW1NWQ29udGFpbmVyQ29tcG9uZW50LCBTVkNvbXBvbmVudCwgU1ZUaXRsZUNvbXBvbmVudF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE9ic2VydmVyc01vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU1ZNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFNWTW9kdWxlLCBwcm92aWRlcnM6IFtTVkNvbmZpZ10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByZWZpeENscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxJQUFBOzs7OztzQkFJVyxFQUFFOzs7O3NCQUVGLFlBQVk7Ozs7bUJBRWYsQ0FBQzs7Ozt1QkFFRyxJQUFJOzs7OzBCQUVELElBQUk7O21CQVpuQjtJQWFDOzs7Ozs7O0FDREQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDOzs7SUFnRHJCLDhCQUFZLEVBQWMsRUFBVSxHQUFjLEVBQUUsR0FBYTtRQUE3QixRQUFHLEdBQUgsR0FBRyxDQUFXOztzQkFyQ3pDLEVBQUU7UUFzQ1QsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxF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